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
        ]);
        foreach($orderSummary as $item){
            Order::create([
                'sales_id'=>$sales->id,
                'size_id'=>$item['size_id'],
                'qty'=>$item['qty'],
            ]);
        }

        return back()->with('response', Sales::with('order')->get());
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
