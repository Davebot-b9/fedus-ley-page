import * as React from "react"
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, useDisclosure } from "@nextui-org/react";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { dataServices } from "@/data";
const Services = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="flex flex-col my-36" id="services">
            <Title title="Servicios" subtitle="Que ofrecemos" />
            <div className="mt-8">
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        loop: true,
                    }}
                    orientation="horizontal">
                    <CarouselContent>
                        {dataServices.map((service) => (
                            <CarouselItem key={service.id}>
                                <Card isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-5">
                                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                        <p className="text-tiny text-white/60 uppercase font-bold">{service.title}</p>
                                        <h4 className="text-black font-medium text-2xl">{service.subtitle}</h4>
                                    </CardHeader>
                                    <Image
                                        removeWrapper
                                        alt={service.alt}
                                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                        src={service.bg}
                                    />
                                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                        <div>
                                            <p className="text-black text-tiny">{service.footerTitle}</p>
                                            <p className="text-black text-tiny">{service.footerSubtitle}</p>
                                        </div>
                                        <Button onPress={onOpen}>Open Modal</Button>
                                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
                                            <ModalContent>
                                                {(onClose) => (
                                                    <>
                                                        <ModalHeader className="flex flex-col gap-1">{service.title}</ModalHeader>
                                                        <ModalBody>
                                                            <p>
                                                                {service.content}
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
// https://nextui.org/images/card-example-4.jpeg

export default Services;