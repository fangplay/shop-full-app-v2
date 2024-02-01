<?php

use App\Http\Controllers\ShopController;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

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

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
//bypass shopcontroller
//get session
Route::get('/', [ShopController::class,'index']);
Route::get('/login', [ShopController::class,'login']);
Route::get('/register', [ShopController::class,'register']);
Route::get('/user/profile',[ShopController::class,'userprofile']);
Route::get('/user/order-list',[ShopController::class,'orderlist']);
//post session
Route::post('/order-insert',[ShopController::class,'ordercreate']);
//delete session

//update session

//login session

//logout session
Route::get('/logout',[ShopController::class,'userlogout']);

require __DIR__.'/auth.php';
