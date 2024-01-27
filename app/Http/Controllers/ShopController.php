<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Validator;

class shopController extends Controller
{
     //response the controller on website
     public function index():Response{
        return Inertia::render('Shop/Index');
    }

    public function register(){
        return Inertia::render('Shop/components/Register');
    }

    public function login(){
        return Inertia::render('Shop/components/Login');
    }

    public function resetpassword(){
        return Inertia::render('Shop/components/ResetPassword');
    }

    public function productlist(){
        return Inertia::render('Shop/ProductList',[

        ]);
    }

    public function userproductlist(){
        return Inertia::render('Shop/User/ProductList',[

        ]);
    }

    public function userprofile(){
        return Inertia::render('Shop/User/Profile',[

        ]);
    }

    public function orderlist(){
        return Inertia::render('Shop/User/OrderList',[

        ]);
    }

    //product management api route
    public function productdestroy($id){
        Product::find($id)->delete();
        return redirect(route('product.list'));
    }

    public function productupdate($id, Request $request){
        Validator::make($request->all(),[
            'product_name' => ['required'],
            'description' => ['required'],
            'product_price' => ['required'],
            'type_id' => ['required']
        ])->validate();

        Product::find($id)->update($request->all());
        return redirect(route('product.list'));
    }

    public function productcreate(Request $request){
        Validator::make($request->all(),[
            'product_name' => ['required'],
            'description' => ['required'],
            'product_price' => ['required'],
            'type_id' => ['required']
        ])->validate();

        Product::insert($request->all());
        return redirect(route('product.list'));
    }

    //order management api route
    public function orderdestroy($id){
      Order::find($id)->delete();
      return redirect(route('order.list'));
    }

    public function orderupdate($id, Request $request){
        Validator::make($request->all(),[
            'order_date' => ['required'],
            'payment_date' => ['required'],
            'delivery_date' => ['required'],
            'address' => ['required']
        ])->validate();

        Order::find($id)->update($request->all());
        return redirect(route('order.list'));
    }

    public function ordercreate(Request $request){
        Validator::make($request->all(),[
            'order_date' => ['required'],
            'payment_date' => ['required'],
            'delivery_date' => ['required'],
            'user_id' => auth()->id(),
            'status_id' => [1],
            'product_id' => ['required'],
            'address' => ['required']
        ])->validate();

        Order::insert($request->all());
        return redirect(route('order.list'));
    }

    //staff order update api route
    public function orderstatusupdate($id,Request $request){
        Validator::make($request->all(),[
            'status_id' => ['required']
        ]);

        Order::find($id)->update($request->all());
        return redirect(route('order.list'));
    }

    //register insertation api route
    public function userregister(){
        return Inertia::render('/Staff/Register');
    }

    //user login api route while type = 'user'
    public function userlogin(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
            'user_type' => 'user'
        ]);

        if($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500)->route('user.login');
        }
        $credentials = $request->only('email', 'password');
        if(auth()->attempt($credentials, $request->filled('remember'))) {
            return response()->json(['status' => true, 'user' => auth()->user()])->route('user.index');
        }
        return response(route('login'));
    }

    //user logout api route
    public function userlogout(Request $request){
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');

    }

    //user insertation form registartion page
    public function customeruserinsert(Request $request){
        Validator::make($request->all(),[
            'name' => ['required'],
            'email' => ['required'],
            'password' => ['required'],
            'type' => 'customer'
        ])->validate();

        User::insert($request->all());
        return redirect(route('index'));
    }

    //staff register insertation api route
    public function staffuserinsert(Request $request){
        Validator::make($request->all(),[
            'name' => ['required'],
            'email' => ['required'],
            'password' => ['required'],
            'type' => 'staff'
        ])->validate();

        User::insert($request->all());
        return redirect(route('user.profile'));
    }

    //staff register delete api route
    public function staffuserdelete($id){
      User::find($id)->where('type','=','staff')->delete();
      return redirect(route('staff.list'));
    }
}
