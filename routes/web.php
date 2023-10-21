<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SalesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[DashboardController::class,'index'])->name('dashboard.index')->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('customer',CustomerController::class);
    Route::resource('category',CategoryController::class);
    Route::resource('menu',MenuController::class);
    Route::resource('sales',SalesController::class);
    Route::resource('/order',OrderController::class);
    Route::get('size',[MenuController::class,'size'])->name('menu.size');
    Route::post('size',[MenuController::class,'sizeStore'])->name('size.store');
    Route::post('order/create',[MenuController::class,'orderCreate'])->name('order.create');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
