import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import Image from "next/image";
const Introduction = () =>{
    return(
        <section className="flex flex-col items-center gap-4 mb-24 p-8 md:py-10" id="home">
				<div className="inline-block max-w-lg text-center justify-cente">
					<h1 className={title({color: "green" })}>Fedus |&nbsp;</h1>
					<h1 className={title({color: "blue" })}>Ley&nbsp;</h1>
					<br />
					<h2 className={title({class: "text-2xl text-blue-400"})}>
						Todos tenemos derechos.
					</h2>
					<h4 className={subtitle({ class: "mt-4 text-blue-400" })}>
						La ley es hecha para los transgresores.
					</h4>
				</div>

				<div className="flex gap-3">
					<Link
					isExternal
						href= "#contact"
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "shadow",
						})}
					>
						Contáctanos
					</Link>
					{/* <Link
						isExternal
						isDisabled
						className={buttonStyles({ variant: "bordered", radius: "full", color: "success" })}
						href={siteConfig.links.github}
					>
						WhatsApp
					</Link> */}
				</div>
				<Image src="/assets/fed-int.png" alt="Logo Fedus" width={380} height={380} className="mx-auto rounded-full pt-4"/>
			</section>
    );
}

export default Introduction;