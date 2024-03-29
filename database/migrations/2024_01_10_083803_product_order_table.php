<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //order structure data table
        Schema::create('order',function (Blueprint $table){
            $table->id();
            $table->dateTime('order_date');
            $table->dateTime('payment_date');
            $table->dateTime('delivery_date');
            $table->foreignId('user_id');
            $table->text('address');
            $table->foreignId('status_id');
            $table->foreignId('product_id');
            $table->timestamps('created_date');
            $table->timestamps('update_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //dropping table order
        Schema::dropIfExits('order');
    }
};
