<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_name','description','product_price','type'
    ];
    protected $primaryKey = 'product_id';
    protected $timestamps = true;
}
