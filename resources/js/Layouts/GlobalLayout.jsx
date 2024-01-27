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
import {
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";

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
    // var AuthNavbar = "";
    // if (!localStorage.getItem("auth_token")) {
    //     AuthNavbar = (
    //         <>
    //             <nav
    //                 className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    //                 aria-label="Global"
    //             >
    //                 <div className="flex lg:flex-1">
    //                     <a href="/shop" className="-m-1.5 p-1.5">
    //                         <h3>NeoShop</h3>
    //                     </a>
    //                 </div>
    //                 <div className="flex lg:hidden">
    //                     <button
    //                         type="button"
    //                         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //                         onClick={() => setMobileMenuOpen(true)}
    //                     >
    //                         <span className="sr-only">Open main menu</span>
    //                         <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //                     </button>
    //                 </div>

    //                 <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //                     <nav class="ButtonGroup-sc-71xg1o-0 loacbu">
    //                         <a
    //                             class="Header__NavItem-sc-i83ruj-5 dfEEyh"
    //                             href="/shop/register"
    //                         >
    //                             Register
    //                         </a>
    //                         <a
    //                             class="Button__StyledOutboundLink-sc-fltzk0-2 xtGAq"
    //                             href="/shop/login"
    //                             variant="secondary"
    //                             type="link"
    //                         >
    //                             <span class="Button__ButtonText-sc-fltzk0-0 joZKAe">
    //                                 Sign In
    //                             </span>
    //                         </a>
    //                     </nav>
    //                 </div>
    //             </nav>

    //             <Dialog
    //                 as="div"
    //                 className="lg:hidden"
    //                 open={mobileMenuOpen}
    //                 onClose={setMobileMenuOpen}
    //             >
    //                 <div className="fixed inset-0 z-10" />
    //                 <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //                     <div className="flex items-center justify-between">
    //                         <a href="#" className="-m-1.5 p-1.5">
    //                             <span className="sr-only">NeoShop</span>
    //                         </a>
    //                         <button
    //                             type="button"
    //                             className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //                             onClick={() => setMobileMenuOpen(false)}
    //                         >
    //                             <span className="sr-only">Close menu</span>
    //                             <XMarkIcon
    //                                 className="h-6 w-6"
    //                                 aria-hidden="true"
    //                             />
    //                         </button>
    //                     </div>
    //                     <div className="mt-6 flow-root">
    //                         <div className="-my-6 divide-y divide-gray-500/10">
    //                             <div className="py-6">
    //                                 <a
    //                                     href="/register"
    //                                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                                 >
    //                                     Register
    //                                 </a>
    //                             </div>
    //                             <div className="py-6">
    //                                 <a
    //                                     href="/login"
    //                                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                                 >
    //                                     Log in
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </Dialog.Panel>
    //             </Dialog>
    //         </>
    //     );
    // } else {
    //     AuthNavbar = (
    //         <>
    //             <nav
    //                 className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    //                 aria-label="Global"
    //             >
    //                 <div className="flex lg:flex-1">
    //                     <a href="/shop" className="-m-1.5 p-1.5">
    //                         <h3>NeoShop</h3>
    //                     </a>
    //                 </div>
    //                 <div className="flex lg:hidden">
    //                     <button
    //                         type="button"
    //                         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //                         onClick={() => setMobileMenuOpen(true)}
    //                     >
    //                         <span className="sr-only">Open main menu</span>
    //                         <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //                     </button>
    //                 </div>

    //                 <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //                     <nav class="ButtonGroup-sc-71xg1o-0 loacbu">
    //                         <a
    //                             class="Header__NavItem-sc-i83ruj-5 dfEEyh"
    //                             href="/user"
    //                         >
    //                             Profile
    //                         </a>
    //                         <a
    //                             class="Button__StyledOutboundLink-sc-fltzk0-2 xtGAq"
    //                             href="/logout"
    //                             variant="secondary"
    //                             type="link"
    //                         >
    //                             <span class="Button__ButtonText-sc-fltzk0-0 joZKAe">
    //                                 Logout
    //                             </span>
    //                         </a>
    //                     </nav>
    //                 </div>
    //             </nav>

    //             <Dialog
    //                 as="div"
    //                 className="lg:hidden"
    //                 open={mobileMenuOpen}
    //                 onClose={setMobileMenuOpen}
    //             >
    //                 <div className="fixed inset-0 z-10" />
    //                 <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //                     <div className="flex items-center justify-between">
    //                         <a href="#" className="-m-1.5 p-1.5">
    //                             <span className="sr-only">NeoShop</span>
    //                         </a>
    //                         <button
    //                             type="button"
    //                             className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //                             onClick={() => setMobileMenuOpen(false)}
    //                         >
    //                             <span className="sr-only">Close menu</span>
    //                             <XMarkIcon
    //                                 className="h-6 w-6"
    //                                 aria-hidden="true"
    //                             />
    //                         </button>
    //                     </div>
    //                     <div className="mt-6 flow-root">
    //                         <div className="-my-6 divide-y divide-gray-500/10">
    //                             <div className="py-6">
    //                                 <a
    //                                     href="/user"
    //                                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                                 >
    //                                     Profile
    //                                 </a>
    //                             </div>
    //                             <div className="py-6">
    //                                 <a
    //                                     href="/logout"
    //                                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                                 >
    //                                     Logout
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </Dialog.Panel>
    //             </Dialog>
    //         </>
    //     );
    // }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            {/* desktop view */}
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >

            <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <h3>NeoShop</h3>
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <nav class="ButtonGroup-sc-71xg1o-0 loacbu">
                        <a
                            class="Header__NavItem-sc-i83ruj-5 dfEEyh"
                            href="/register"
                        >
                            Register
                        </a>
                        <a
                            class="Button__StyledOutboundLink-sc-fltzk0-2 xtGAq"
                            href="/login"
                            variant="secondary"
                            type="link"
                        >
                            <span class="Button__ButtonText-sc-fltzk0-0 joZKAe">
                                Sign In
                            </span>
                        </a>
                    </nav>
                </div>
            </nav>
            {/* mobile view */}
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">NeoShop</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6">
                                <a
                                    href="/register"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Register
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            {/* {AuthNavbar} */}
        </header>
    );
}
