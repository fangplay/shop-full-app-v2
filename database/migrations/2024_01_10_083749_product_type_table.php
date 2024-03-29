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
        //product type structure data table
        Schema::create('product-type',function (Blueprint $table){
            $table->id();
            $table->string('type_name');
            $table->text('descreiption');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //dropping table product-type
        Schema::dropIfExists('product-type');
    }
};
