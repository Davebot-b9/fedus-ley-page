/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Title from "./shared/title"
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, useDisclosure, ModalProps } from "@nextui-org/react";


const Terms = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [scrollBehavior] = React.useState<ModalProps["scrollBehavior"]>("inside");
    return(
        <div className="m-10" id="terms">
                <Title title="Politicas de privacidad" subtitle="Terminos y condiciones"/>
                <div className="mt-8">
                <Card isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-5">
                                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                        <p className="text-tiny text-white/60 uppercase font-bold">Politicas de privacidad</p>
                                    </CardHeader>
                                    <Image
                                        removeWrapper
                                        alt="terms_img"
                                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                        src="/assets/image-2.jpg"
                                    />
                                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                        <div>
                                            <p className="text-black text-tiny">Terminos y condiciones</p>
                                            <p className="text-black text-tiny">Fedus Ley</p>
                                        </div>
                                        <Button onPress={onOpen}>Abrir</Button>
                                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} size="xl">
                                            <ModalContent>
                                                {(onClose) => (
                                                    <>
                                                        <ModalHeader className="flex flex-col gap-1">Políticas de Privacidad</ModalHeader>
                                                        <ModalBody>
                                                            <h2>1. Introducción</h2>

                                                            <p>Bienvenidos a FedusLey, su asistente de asesoría legal digital. Nos comprometemos a proteger su privacidad y asegurar la seguridad de sus datos personales. Este documento detalla qué información recopilamos, cómo la utilizamos y cómo la protegemos.</p>

                                                            <h2>2. Recolección de Información</h2>

                                                            <p>Recopilamos dos tipos de información:</p>
                                                                <p>- Datos personales: Información que usted nos proporciona directamente, como nombre, dirección de correo electrónico, detalles de contacto, y cualquier otra información que proporcione al registrarse o interactuar con nuestra aplicación.</p>
                                                                <p>- Datos de uso: Información generada automáticamente al utilizar nuestra aplicación, como tipos de asesoramiento solicitados, registros de interacciones con la aplicación, dirección IP, datos de ubicación, y datos técnicos del dispositivo.</p>

                                                            <h2>3. Uso de la Información</h2>

                                                            <p>Utilizamos la información recopilada para:</p>

                                                            <p>- Proporcionar, operar y mejorar nuestro servicio.</p>
                                                            <p>- Personalizar su experiencia en la aplicación.</p>
                                                            <p>- Comunicarnos con usted, responder a sus consultas y enviarle actualizaciones importantes sobre la aplicación.</p>
                                                            <p>- Analizar cómo se utiliza nuestra aplicación para mejorar su experiencia de usuario.</p>
                                                            <p>- Publicidad y marketing dirigido.</p>
                                                            <p>- Cumplir con nuestras obligaciones legales y reglamentarias.</p>

                                                            <h2>4. Compartir Información con Terceros</h2>

                                                            <p>Solo compartimos su información con terceros en las siguientes circunstancias:</p>
                                                            <p>- Con proveedores de servicios que nos ayudan a operar la aplicación y proporcionar nuestros servicios, como OpenAI, Google, Meta (Facebook) y otros similares, bajo estrictas cláusulas de confidencialidad.</p>
                                                            <p>- Con socios comerciales para análisis de datos o conforme a los requisitos gubernamentales.</p>
                                                            <p>- Si es requerido por ley, regulación o proceso legal, o para responder a solicitudes gubernamentales.</p>
                                                            <p>- Para proteger los derechos, propiedad o seguridad de FedusLey, nuestros usuarios o el público, según sea necesario o permitido por la ley.</p>

                                                            <h2>5. Seguridad de los Datos</h2>

                                                            <p>Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Estas medidas incluyen cifrado de la información.</p>

                                                            <h2>6. Derechos de los Usuarios</h2>
                                                            <p>Usted tiene derecho a:</p>

                                                            <p>- Acceder, rectificar o eliminar sus datos personales.- Limitar el uso y divulgación de sus datos.</p>
                                                            <p>- Retirar su consentimiento en cualquier momento, sin afectar la legalidad del tratamiento basado en el consentimiento previo a su retirada.</p>
                                                            <p>- Presentar una queja ante una autoridad de protección de datos competente si considera que el tratamiento de sus datos personales infringe la ley aplicable.</p>
                                                        
                                                            <p>Para ejercer estos derechos, contáctenos a través de la información proporcionada en la sección de contacto.</p>

                                                            <h2>7. Retención de Datos</h2>
                                                            <p>Conservamos sus datos personales durante el tiempo que sea necesario para cumplir con los propósitos para los que fueron recopilados y mientras mantenga una cuenta activa en nuestra aplicación. Si decide eliminar su cuenta, sus datos personales serán eliminados, salvo que se requiera su retención por obligaciones legales o contractuales.</p>

                                                            <h2>8. Transferencia Internacional de Datos</h2>
                                                            <p>Si transferimos sus datos personales fuera de su país de residencia, tomaremos medidas para asegurar que sus datos reciban el mismo nivel de protección que en su país de origen, incluyendo la celebración de acuerdos de transferencia de datos con los destinatarios.</p>
                                                            <h2>9. Cookies y Tecnologías Similares</h2>
                                                            <p>Utilizamos cookies y tecnologías similares para recopilar información sobre su uso de la aplicación y mejorar su experiencia. También utilizamos Google Analytics y píxeles de Meta para análisis y marketing. Puede configurar su navegador para rechazar cookies, pero esto puede afectar su capacidad para utilizar algunas funcionalidades de la aplicación.
                                                            </p>

                                                            <h2>10. Revisión y Actualización de Políticas</h2>
                                                            <p>Revisamos nuestras políticas de privacidad cada 3 a 6 meses para asegurarnos de que estén actualizadas con las regulaciones aplicables y las prácticas de la industria.</p>

                                                            <h2>11. Contacto</h2>
                                                            <p>Si tiene preguntas sobre nuestras prácticas de privacidad, puede contactarnos en jose@fedusley.com.</p>

                                                            <h2>Términos de Uso y Condiciones</h2>
                                                            <h2>1. Aceptación de los Términos</h2>
                                                            <p>Al acceder y utilizar FedusLey, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo, no debe utilizar nuestra aplicación.</p>
                                                            <h2>2. Descripción del Servicio</h2>
                                                            <p>FedusLey ofrece una plataforma de asesoramiento legal informativo. Nuestro contenido es para fines educativos e informativos y no constituye asesoramiento legal profesional. No se establece una relación abogado-cliente a través del uso de nuestra aplicación.</p>
                                                            <h2>3. Uso Aceptable</h2>
                                                            <p>Usted se compromete a utilizar la aplicación solo para fines lícitos y de acuerdo con estos términos. No debe usar la aplicación de manera que pueda dañar, deshabilitar, sobrecargar o perjudicar la aplicación o interferir con el uso de la aplicación por parte de otros.
                                                            </p>
                                                            <h2>4. Limitación de Responsabilidad</h2>
                                                            <p>La información proporcionada por FedusLey se ofrece "tal cual", sin garantías de exactitud o aplicabilidad a situaciones legales específicas. No nos hacemos responsables por decisiones tomadas basadas en esta información. Siempre consulte con un profesional legal antes de tomar decisiones legales.
                                                            </p>
                                                            <h2>5. Derechos de Autor y Propiedad Intelectual</h2>
                                                            <p>Todo el contenido de FedusLey, incluidos textos, gráficos, logos y software, está protegido por derechos de autor y es propiedad exclusiva de FedusLey. Usted no puede reproducir, distribuir o transmitir ningún contenido sin nuestro permiso previo y por escrito.</p>
                                                            <h2>6. Cambios en los Términos y Condiciones</h2>
                                                            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la aplicación. Es su responsabilidad revisar periódicamente los términos actualizados.</p>
                                                            <h2>7. Jurisdicción y Ley Aplicable</h2>
                                                            <p>Estos términos se rigen por las leyes de México, sin dar efecto a ningún principio de conflictos de leyes. Cualquier disputa derivada de estos términos será resuelta en los tribunales competentes de la Ciudad de México.</p>
                                                            <h2>8. Terminación del Servicio</h2>
                                                            <p>Nos reservamos el derecho de suspender o terminar su acceso a la aplicación en cualquier momento, sin previo aviso, si creemos que ha violado estos términos o cualquier ley aplicable.</p>
                                                            <h2>9. Indemnización</h2>
                                                            <p>Usted acepta indemnizar y eximir de responsabilidad a FedusLey y sus empleados, directores y agentes de cualquier reclamación, daño, obligación, pérdida, responsabilidad, costo o deuda, y gasto (incluyendo pero no limitado a honorarios de abogados) que surjan de su uso de la aplicación o su violación de estos términos.</p>

                                                            <h2>10. Enlaces a Terceros</h2>
                                                            <p>La aplicación puede contener enlaces a sitios web de terceros. No somos responsables del contenido, políticas de privacidad o prácticas de sitios web de terceros. Le recomendamos revisar las políticas de privacidad y términos de uso de cualquier sitio web de terceros que visite.</p>

                                                            <h2>11. Monetización y Publicidad</h2>
                                                            <p>FedusLey ofrece una versión pro de suscripción y puede contener publicidad. Al suscribirse a la versión pro, los usuarios pueden acceder a funcionalidades adicionales y disfrutar de una experiencia sin anuncios.</p>

                                                            <h2>12. Soporte y Atención al Cliente</h2>
                                                            <p>Ofrecemos soporte a través de correo electrónico. Puede contactarnos en jose@fedusley.com para cualquier consulta o problema que tenga con la aplicación.</p>

                                                            <h2>13. Notificaciones</h2>
                                                            <p>Enviamos notificaciones a través de la aplicación y vía correo electrónico para mantener a los usuarios informados sobre actualizaciones, nuevas funcionalidades y otras comunicaciones importantes.</p>

                                                            <h2>14. Revisión de Términos</h2>
                                                            <p>Revisamos y actualizamos estos términos cada 3 a 6 meses para asegurarnos de que reflejen nuestras prácticas y el cumplimiento con las leyes aplicables.</p>

                                                            <h2>15. Contacto</h2>
                                                            <p>Para cualquier pregunta o preocupación respecto a estos términos, por favor contáctenos en jose@fedusley.com.</p>
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
        </div>
    );
}

export default Terms;