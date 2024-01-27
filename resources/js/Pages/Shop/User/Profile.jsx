import React from "react";
import { Head } from "@inertiajs/react";
import GlobalLayout from "@/Layouts/GlobalLayout";
import GlobalFooter from "@/Layouts/GlobalFooter";

export default function CustomerProfile(){
    return(
        <>
            <GlobalLayout/>
            <Head title="Customer Profile"/>
            <GlobalFooter/>
        </>
    );
}
