<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SizeProduct extends Model
{
    use HasFactory;

    protected $guarded=[];
    protected $table='size_products';

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
