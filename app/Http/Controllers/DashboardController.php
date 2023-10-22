<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Sales;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $firstDayOfMonth = Carbon::now()->startOfMonth();
        $lastDayOfMonth = Carbon::now()->endOfMonth();
        return Inertia::render('Dashboard',[
            'totalOrder' => Sales::whereBetween('trx_date', [$firstDayOfMonth, $lastDayOfMonth])->count(),
            'totalOmset' => Sales::whereBetween('trx_date', [$firstDayOfMonth, $lastDayOfMonth])->where('status','paid')->sum('amount'),
        ]);
    }
}
