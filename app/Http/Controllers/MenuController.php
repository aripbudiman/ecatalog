<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categories;
use App\Models\Product;
use Illuminate\Support\Str;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menu=Product::with('category')->latest()->get();
        return Inertia::render('Menu/Index',[
            'menu' => $menu
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Menu/Create',[
            'categories' => Categories::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg',
        ],[
            'category_id.required' => 'Please select a category',
        ]);

        $imageName = $request->image->getClientOriginalExtension();
        $imageName = $request->name.'-' . time() . '.' . $imageName;
        $path = $request->image->storeAs('menu', $imageName, 'public');
        Product::create([
            'name' => $request->name,
            'category_id' => $request->category_id,
            'image' => $path,
            'description' => $request->description
        ]);
        return back()->with('message', 'Menu created successfully');
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
