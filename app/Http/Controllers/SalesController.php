<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Sales;
use Illuminate\Http\Request;
use App\Models\SizeProduct;
use Inertia\Inertia;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Sales/Index', [
            'sales' => Sales::with('order')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $orderSummary= $request->subtotal;
        $count=Sales::count();
        $invoiceNo=str_pad($count + 1, 4, '0', STR_PAD_LEFT);
        $sales=Sales::create([
            'trx_date'=>date('Y-m-d'),
            'user_id'=>auth()->user()->id,
            'invoice'=>'INV/'.date('Y').'/'.$invoiceNo,
            'amount'=>$request->grossAmount,
        ]);
        foreach($orderSummary as $item){
            Order::create([
                'sales_id'=>$sales->id,
                'size_id'=>$item['size_id'],
                'qty'=>$item['qty'],
            ]);
        }

        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => $sales->id,
                'gross_amount' => $request->grossAmount,
            )
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        $sales=Sales::with('order','order.size','order.size.product')->find($sales->id);
        return back()->with('response', [
            'snapToken' => $snapToken,
            'sales'=>$sales
        ]);
    }

    public function cash(Request $request){
        $id=$request->id;
        $sales=Sales::find($id);
        $sales->status='paid';
        $sales->payment_method='cash';
        $sales->save();
        return back()->with('success','Berhasil melakukan pembayaran');
    }

    public function transfer($id){
        return Inertia::render('Menu/Midtrans', [
            'snapToken' => $id,
        ]);
    }

    public function callback(Request $request){
        $serverKey=config('midtrans.server_key');
        $hashed=hash('SHA512', $request->order_id.$request->status_code.$request->gross_amount.$serverKey);
        if($hashed === $request->signature){
            if($request->transaction_status == 'capture'){
                if($request->status_code == '200'){
                    $sales=Sales::where('invoice',$request->order_id)->get();
                    $sales[0]->status='paid';
                    $sales[0]->payment_method='transfer';
                    $sales[0]->save();
                }
            }
        }
        
        return response()->json([
            'status' => 'success',
            'sales'=>$request->all(),
            'hash'=>$sales
        ]);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
