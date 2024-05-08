import Title from "./shared/title";
import { User } from "@nextui-org/user";

const Testimonials = () => {
    return (
        <div id="testimonials" className="my-28 flex flex-col rounded-xl border-slate-400 border-2 dark:bg-slate-800">
            <Title title="Testimonios" subtitle="Clientes" />
            <User
                className="pt-4 m-2"
                name="Jane Doe"
                description="Testimonio del servicio..."
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
            />
            <User
                className="pt-4 m-2"
                name="Richard Figueroa"
                description="Testimonio del servicio..."
                avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                }}
            />
            <User
                className="pt-4 m-2"
                name="Jose G."
                description="Testimonio del servicio..."
                avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                }}
            />
        </div>
    );
}

export default Testimonials;