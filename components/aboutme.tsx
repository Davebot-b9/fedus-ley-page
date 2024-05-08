import { dataAboutme, dataUs } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";

const Aboutme = () => {
    return (
        <div className="mt-4 p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="aboutme">
            <Title title="Acerca de" subtitle="Nosotros" />

            <div className="grid md:grid-cols-3 gap-5 mt-">
                {dataAboutme.map((aboutme) => (
                    <div key={aboutme.id}
                        className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-fit"
                    >
                        <h4 className="mb-4 text-xl flex gap-2">
                            {aboutme.icon}
                            {aboutme.title}
                        </h4>
                        <ul>
                            {aboutme.features.map((feature, index) => (
                                <li key={index} className="flex gap-3 mb-3">
                                    <Check size={20} />
                                    {feature.name} Lorem ipsum dolor sit amet.
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-2 pt-20 items-center">
                {dataUs.map((us) => (
                    <div key={us.id} className="rounded-xl m-3 border-slate-400 border-2 p-6 dark:bg-slate-800 h-fit">
                        <h4 className="mb-4 text-2xl flex gap-3 pt-4">
                            {us.icon}
                            {us.name}
                        </h4>
                        <p className="text-gray-400 text-justify">{us.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus sint corporis ratione ipsam exercitationem magnam est voluptas esse possimus.</p>
                    </div>
                ))}
                {/* <div className="flex-1">
                    <h2 className="text-center text-2xl">Misión</h2>
                </div>
                <div className="flex-auto">
                    <h2 className="text-center text-2xl">Visión</h2>
                </div> */}
            </div>
        </div>
    );
}

export default Aboutme;