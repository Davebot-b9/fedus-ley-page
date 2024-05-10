import React from "react";
import { dataAboutme, dataUs } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Modal, ModalHeader, ModalContent, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

const Aboutme = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="mt-4 p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="aboutme">
            <Title title="Acerca de" subtitle="Nosotros" />
            <div className="grid md:grid-cols-3 gap-5 mt-6">
                {dataAboutme.map((aboutme) => (
                    <div key={aboutme.id}
                        className="rounded-xl border-blue-500 border-2 p-6 dark:bg-slate-800 h-fit"
                    >
                        <h4 className="mb-4 text-xl flex gap-2 text-green-400">
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
                    <div key={us.id} className="grid md:grid-cols-2 gap-5 p-2">
                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7" >
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-blue-600 text-2xl uppercase font-bold">{us.name}</p>
                                <h4 className="text-slate-300 font-medium text-xl">{us.lineHead}</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover bg-black/40"
                                src={us.background}
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="FedusLey app icon"
                                        className="rounded-full w-10 h-11 bg-black"
                                        src={us.logo}
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-white text-tiny">{us.lineFooter}</p>
                                        <p className="text-tiny text-white/60">{us.descriptionFooter}</p>
                                    </div>
                                </div>
                                <Button onPress={onOpen} >Más</Button>
                                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
                                    <ModalContent>
                                        {(onClose) => (
                                            <>
                                                <ModalHeader className="flex flex-col gap-1">{us.name}</ModalHeader>
                                                <ModalBody>
                                                    <p>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, fugiat.
                                                    </p>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="danger" variant="light" onPress={onClose}>
                                                        Close
                                                    </Button>
                                                </ModalFooter>
                                            </>
                                        )}
                                    </ModalContent>
                                </Modal>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aboutme;