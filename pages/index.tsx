import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import Aboutme from "@/components/aboutme";
import Introduction from "@/components/introduction";
import {Divider} from "@nextui-org/divider";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import ContactL from "@/components/contact";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<Introduction/>
			<Divider orientation="horizontal"/>
			<Aboutme/>
			<Divider orientation="horizontal"/>
			<Services/>
			<Divider orientation="horizontal"/>
			<Testimonials/>
			<Divider orientation="horizontal"/>
			<ContactL/>
		</DefaultLayout>
	);
}
