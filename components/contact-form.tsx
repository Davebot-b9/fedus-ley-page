import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import { useState } from "react";

const ContactForm = () => {
    const [selected, setSelected] = React.useState<string | number>("login");
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
            <Card className="max-w-full w-[340px] h-[400px]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key="login" title="Contactanos">
                            <form className="flex flex-col gap-4">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    Need to create an account?{" "}
                                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                                        Sign up
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab key="sign-up" title="Sign up">
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    Already have an account?{" "}
                                    <Link size="sm" onPress={() => setSelected("login")}>
                                        Login
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        Sign up
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}

export default ContactForm;