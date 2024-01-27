import React from "react";
import { Head } from "@inertiajs/react";
import GlobalLayout from "@/Layouts/GlobalLayout";
import GlobalFooter from "@/Layouts/GlobalFooter";

// export default function Index() {
//     return (
//         <NavbarLayout>
//             <Head><title>NeoShop</title></Head>
//             <p>ShopBetaDevRevision</p>
//         </NavbarLayout>
//     );
// }
export default function Index() {
    return (
        <>
            <GlobalLayout />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <Head title="NeoShop" />
                <div className="max-w-2xl mx-auto sm:p-5 lg:p-5">
                    <div className="flex justify-center">
                        <div className="mt-16">
                            <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                <div className="col-md-5">
                                    <h3>The delivery services</h3>
                                    <p>The Delivery suite from spot to spot on realtime.</p>
                                </div>
                                <div className="col-md-5">
                                    <img src="./img/pic-1.png" height="400"/>
                                </div>
                            </div>
                            <br />
                            <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                            <div className="col-md-5">
                                    <h3>The delivery services</h3>
                                    <p>The Delivery suite from spot to spot on realtime.</p>
                                </div>
                                <div className="col-md-5">
                                    <img src="./img/pic-3.png" height="400"/>
                                </div>
                            </div>
                            <br />
                            <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                            <div className="col-md-5">
                                    <h3>The delivery services</h3>
                                    <p>The Delivery suite from spot to spot on realtime.</p>
                                </div>
                                <div className="col-md-5">
                                    <img src="./img/pic-2.png" height="400"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GlobalFooter/>
        </>
    );
}
