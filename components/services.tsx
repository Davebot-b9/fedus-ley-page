import { Card, CardHeader, CardBody, CardFooter, Image, Button, Avatar } from "@nextui-org/react";
import Title from "./shared/title";
const Services = () => {
    return (
        <div className="flex flex-col py-20" id="services">
            <Title title="Servicios" subtitle="Que ofrecemos" />
            <div className="mt-8">
                <Card className="col-span-12">
                    <CardHeader className="absolute z-10 top-1 flex-col">
                        <div className="text-center">
                            <p>Lorem, ipsum dolor.</p>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                        </div>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-60 object-cover"
                        src="https://nextui.org/images/card-example-4.jpeg"
                    />
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Lorem, ipsum.</p>
                        <h4 className="text-black font-medium text-2xl">Lorem, ipsum dolor.</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://nextui.org/images/card-example-6.jpeg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Lorem, ipsum.</p>
                            <p className="text-black text-tiny">Lorem ipsum dolor sit.</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Services;