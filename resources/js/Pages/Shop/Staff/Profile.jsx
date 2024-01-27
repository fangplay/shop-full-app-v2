import React from "react";
import { Head } from "@inertiajs/react";
import GlobalLayout from "@/Layouts/GlobalLayout";
import GlobalFooter from "@/Layouts/GlobalFooter";

export default function StaffProfile(){
    return(
        <>
            <GlobalLayout/>
            <Head title="Staff Profile"/>
            <GlobalFooter/>
        </>
    );
}
