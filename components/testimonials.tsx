import { motion } from 'framer-motion'
import { fadeIn } from '@/components/utils/motion-transition'

import { TestimonialSlider } from "./shared/testimonial-slider";

const Testimonials = () => {
    return (
        <div className='h-screen'>
            <div className="flex flex-col justify-center min-h-screen">
                <motion.h1
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="my-5 text-4xl text-center md:my-10"
                >
                    Algunos comentarios <br /><span className="text-primary-300">de nuestros clientes.</span>
                </motion.h1>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <TestimonialSlider />
                </motion.div>
            </div>
        </div>
    );
}

export default Testimonials;