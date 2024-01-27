import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const products = [
    {
        name: "Analytics",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: ChartPieIcon,
    },
    {
        name: "Engagement",
        description: "Speak directly to your customers",
        href: "#",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Security",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: FingerPrintIcon,
    },
    {
        name: "Integrations",
        description: "Connect with third-party tools",
        href: "#",
        icon: SquaresPlusIcon,
    },
    {
        name: "Automations",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: ArrowPathIcon,
    },
];
const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function GlobalLayout() {
    return (
        <header className="bg-white">
            {/* desktop view */}
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a
                        href="/"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            NeoShop
                        </span>
                    </a>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <a
                            href="/register"
                            class="text-sm  text-gray-500 dark:text-white hover:underline"
                        >
                            Register
                        </a>
                        <a
                            href="/login"
                            class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </nav>
            {/* {AuthNavbar} */}
        </header>
    );
}
