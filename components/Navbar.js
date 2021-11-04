import NextLink from 'next/link';

const links = [
    { text: "Homepage", href: "/" },
    { text: "Greeting to Isaac", href: "/greeting/Isaac" },
    { text: "SSR Stations", href: "/metro/ssr" },
    { text: "SSG Stations", href: "/metro/ssg" },
]
export default function Navbar() {
    return (
        <div className="flex bg-green-500 text-white justify-end shadow-lg">
            {links.map(link =>
                <div key={link.href} className="p-4 cursor-pointer hover:bg-green-100 hover:text-gray-400 hover:underline">
                    <NextLink href={link.href}>
                        <a>{link.text}</a>
                    </NextLink>
                </div>)}
        </div>
    )
};
