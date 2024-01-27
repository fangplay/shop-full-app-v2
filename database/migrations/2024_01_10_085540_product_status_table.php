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
        //status structure data table
        Schema::create('status',function (Blueprint $table){
            $table->id();
            $table->string('status_name');
            $table->boolean('actived')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //dropping table status
        Schema::dropIfExits('status');
    }
};
