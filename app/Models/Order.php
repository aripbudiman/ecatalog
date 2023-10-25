<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table = 'orders';

    public function sales(){
        return $this->belongsTo(Sales::class);
    }

    public function size(){
        return $this->belongsTo(SizeProduct::class);
    }
}
