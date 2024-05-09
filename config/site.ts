export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Fedus Ley",
	description: "Creamos soluciones legales usando inteligencia artificial.",
	navItems: [
		{
			label: "Inicio",
			href: "#home",
		},
		{
			label: "Acerca de",
			href: "#aboutme",
		},
		{
			label: "Servicios",
			href: "#services",
		},
		{
			label: "Testimonios",
			href: "#testimonials",
		},
		{
			label: "Contacto",
			href: "#contact"
		}
	],
	navMenuItems: [
		{
			label: "Acerca de",
			href: "#aboutme",
		},
		{
			label: "Servicios",
			href: "#services",
		},
		{
			label: "Testimonios",
			href: "#testimonials",
		},
		{
			label: "Contact",
			href: "#contact",
		},
		// {
		// 	label: "Calendar",
		// 	href: "/calendar",
		// },
		// {
		// 	label: "Settings",
		// 	href: "/settings",
		// },
		// {
		// 	label: "Terminos y condiciones",
		// 	href: "/help-feedback",
		// },
		// {
		// 	label: "Logout",
		// 	href: "/logout",
		// },
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
	},
};