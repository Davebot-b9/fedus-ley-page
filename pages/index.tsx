import DefaultLayout from "@/layouts/default";
import Aboutme from "@/components/aboutme";
import Introduction from "@/components/introduction";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import ContactL from "@/components/contact";

import {Divider} from "@nextui-org/divider";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<Introduction/>
			<Aboutme/>
			<Divider orientation="horizontal"/>
			<Services/>
			<Divider orientation="horizontal"/>
			<Testimonials/>
			<Divider orientation="horizontal"/>
			<ContactL/>
			<Divider orientation="horizontal"/>
		</DefaultLayout>
	);
}
