import { motion } from "motion/react"
import office from '../../assets/office.jpg'
import programming from '../../assets/programming.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero  min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img
                            src={office}
                            animate = {{ y: [50, 100, 50] }}
                            transition={{ duration: 5, delay: 1,ease: "easeInOut", repeat: Infinity }}
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-600" />
                        <motion.img
                            src={programming}
                            animate = {{ x: [100, 150, 100] }}
                            transition={{ duration: 5, delay: 3,ease: "easeInOut", repeat: Infinity }}
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-600" />
                    </div>
                    <div className='flex-1'>                        
                        <motion.h1
                        animate = {{ x: 50, }}
                        transition={{ duration: 2, delay: 1,ease: "easeInOut", repeat: Infinity }}
                         className="text-5xl font-bold">Latest <motion.span animate = {{color: ['#ecff33', '#33ffe3', '#ff6133']}}
                         transition={{ duration: 2, delay: 1,ease: "easeInOut", repeat: Infinity }}
                         >Job</motion.span> For You!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;