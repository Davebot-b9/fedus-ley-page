import { Card, CardHeader, CardBody, CardFooter, Image, Button, Avatar } from "@nextui-org/react";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
const Services = () => {
    return (
        <div className="flex flex-col my-36" id="services">
            <Title title="Servicios" subtitle="Que ofrecemos" />
            <div className="mt-8">
                <Carousel opts={{
                    loop: true,
                }} orientation="horizontal">
                    <CarouselContent>
                        <CarouselItem>
                            <Card isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-5">
                                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                    <p className="text-tiny text-white/60 uppercase font-bold">Lorem, ipsum.</p>
                                    <h4 className="text-black font-medium text-2xl">Lorem, ipsum dolor.</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card example background"
                                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                    src="/assets/image-2.jpg"
                                />
                                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                    <div>
                                        <p className="text-black text-tiny">Lorem, ipsum.</p>
                                        <p className="text-black text-tiny">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <Button className="text-sm" color="primary" radius="full" size="lg">
                                        Info
                                    </Button>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
// https://nextui.org/images/card-example-4.jpeg

export default Services;