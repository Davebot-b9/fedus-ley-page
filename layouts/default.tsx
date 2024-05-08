import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { LinkIcon, link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
				{children}
			</main>
			<footer className="max-w-3xl mx-auto">
				<div className="text-center">&copy; Copyright 2024 | Fedus Ley </div>
			</footer>
		</div>
	);
}
