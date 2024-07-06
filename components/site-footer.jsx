import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export function SiteFooter({ className }) {
    const links = [
        {
            name: "products",
            links: [
                { title: "pricing", href: "#" },
                { title: "products", href: "#" },
                { title: "courses", href: "#" },
                { title: "websites", href: "#" },
                { title: "payment", href: "#" },
                { title: "analytics", href: "#" },
                { title: "funnels", href: "#" },
                { title: "memberships", href: "#" },
            ],
        },
        {
            name: "company",
            links: [
                { title: "about us", href: "#" },
                { title: "career", href: "#" },
                { title: "press", href: "#" },
                { title: "community", href: "#" },
            ],
        },
        {
            name: "Legal",
            links: [
                { title: "privacy", href: "#" },
                { title: "terms and conditions", href: "#" },
                { title: "refund policy", href: "#" },
                { title: "affiliate", href: "#" },
            ],
        },
        {
            name: "support",
            links: [
                { title: "FAQs", href: "#" },
                { title: "contact us", href: "#" },
                { title: "documentations", href: "#" },
                { title: "social groups", href: "#" },
                { title: "experts", href: "#" },
            ],
        },
    ];

    const socials = [
        {
            icon: <FaFacebookF />,
            link: "",
        },
        {
            icon: <FaLinkedinIn />,
            link: "",
        },
        {
            icon: <FaYoutube />,
            link: "",
        },
        {
            icon: <BsTwitterX />,
            link: "",
        },
    ];

    const showLinks = links.map((link, i) => (
        <div key={i} className="md:basis-[25%] basis-[50%] ">
            <h4 className="uppercase mb-4">{link.name}</h4>
            <ul>
                {link.links.map((l, i) => (
                    <li key={i} className="mb-2">
                        <Link
                            href={"#"}
                            className="capitalize text-[#000]/75 hover:text-[#000000]"
                        >
                            {l.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ));

    return (
        <footer className="bg-[#FAF9F6]">
            <div className="container tab:py-[96px] sm:py-[64px] py-[32px] flex tab:flex-row flex-col gap-16 px-6">
                <div className="tab:basis-[30%] basis-full">
                    <Logo />
                    <p className="mt-6">
                        Join EduConnect today and unlock endless possibilities.
                        Sign up now for exclusive courses and resources!
                    </p>
                    <div className="flex items-center mt-8">
                        {socials.map((item, i) => (
                            <Link href={item.link} key={i} className="mr-4">
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="tab:basis-[70%] basis-full flex gap-1">
                    {showLinks}
                </div>
            </div>
        </footer>
    );
}

// import { cn } from "@/lib/utils";
// import { Logo } from "./logo";

// export function SiteFooter({ className }) {
//     return (
//         <footer className={cn(className)}>
//             <div className="container">footer</div>
//         </footer>
//     );
// }
