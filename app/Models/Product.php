<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Product extends Model
{
    use HasFactory;

    protected $guarded=[];
    protected $table = 'products';

    public function category(){
        return $this->belongsTo(Categories::class,'category_id','id');
    }

    public function size(){
        return $this->hasMany(SizeProduct::class,'product_id','id');
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/'.$value),
        );
    }
}
