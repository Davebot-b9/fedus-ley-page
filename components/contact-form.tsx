import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, Textarea} from "@nextui-org/react";
import { useState } from "react";

const ContactForm = () => {
    // const [sucessForm, setSucessForm] = useState(false)

    // const formSchema = z.object({
    //     username: z.string().min(2).max(50),
    //     email: z.string().email(),
    //     message: z.string()
    // })

    // const form = useForm<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //         username: "",
    //         email: "",
    //         message: ""
    //     }
    // })

    // const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //     const response = await fetch("/api/send", {
    //         method: "POST",
    //         body: JSON.stringify(values)
    //     })
    //     if (response.status === 200) {
    //         setSucessForm(true)
    //     }
    // }

    return (
        <div className="flex flex-col w-full">
            <Card className="max-w-full w-[480px] h-[450px] bg-slate">
                <CardBody className="overflow-hidden">
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input isRequired label="Name" placeholder="Enter your name" type="name"/>
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Textarea isRequired label="Message" placeholder="Enter your message" />
                                <p className="text-center text-small">
                                    ¿Listo para comunicarnos?
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="success">
                                        Enviar
                                    </Button>
                                </div>
                            </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default ContactForm;