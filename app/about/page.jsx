import Styles from '@/css/home.module.css'
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import MobileNav from "@/app/components/MobileNav"
import Image from 'next/image';
import { FaRegFileAlt } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const About = () => {
    return (
        <div className="bg-black min-h-screen text-white scroll-smooth">
            <div className="sticky top-0 bg-black z-30">
                <div className="mx-32">
                    <Navbar />
                </div>
                <div className="sticky top-0 bg-[#100f10]">
                    <MobileNav />
                </div>
            </div>

            <section className={`relative h-[60vh] ${Styles.aboutBg}`}>
                {/* <Image className="object-cover h-[60vh] origin-center relative bg-fixed" src="/contact.jpg" alt="contact" width={2000} height={2000} /> */}
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                    <h2 className="text-center text-5xl  text-white cormorant my-2">About</h2>
                    <h2 className="text-center uppercase flex gap-4 mx-auto"><span className="">home </span> \\ <span>About</span></h2>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row mx-6 md:mx-32 gap-4 md:gap-8 py-4 md:py-8">
                    <div className=" md:w-1/2 space-y-8">
                        <h2 className='cormorant text-4xl'>Handcrafted Baked Goods <span className='text-[#c19f5f]'> for a Flavorful </span>  Experience </h2>

                        <p className='text-gray-500 '>At Al Forno, we bring you a wide range of artisanal baked goods, including flavored toasts, tea cakes, lavash, and more, crafted with care to deliver unmatched quality and taste.</p>

                        <div className='text-[#c19f5f] hover:text-white transition-all duration-300 flex items-center gap-2'  >
                            <FaRegFileAlt className='inline text-2xl' />
                            <a download={true} target='_blank' href="/alforno.pdf" className='cormorant text-2xl'>Download Brochure</a>
                        </div>


                        <Dialog>
                            <DialogTrigger className='w-full flex justify-start'>
                                <button type="submit" className="border rounded-full w-[40%] py-5 border-[#c19f5f] hover:bg-[#c19f5f] hover:text-neutral-950 transition-all duration-300">Read More </button>
                            </DialogTrigger>
                            <DialogContent className='bg-neutral-900 text-gray-400 border border-[#c19f5f] w-1/2'>
                                    
                                    <DialogDescription className='text-lg'>
                                        <h2 className='cormorant text-4xl text-[#c19f5f]'>About Al Forno</h2>
                                        We are a family-owned & operated wholesale bakery committed to supplying our customer with the finest quality baked goods. At Al Forno, we take extra care and pride in making quality products that will take you on a flavorful culinary experience.
                                        <br /> 
                                        <br />
                                        Handcrafted and baked throughout the day in our ovens, you’ll find flavored toasts, French cheese straws, lavash, almond sticks, palmiers, tea cakes and much more. Every ingredient, every method, every piece of equipment and every baker who touches our product is chosen to produce the highest and finest quality in the market.

                                    </DialogDescription>
                            </DialogContent>
                        </Dialog>


                    </div>
                    <div className=" md:w-1/2 flex gap-8 md:p-4">
                        <div className="w-1/2 ">
                            <Image width={4160} height={4160} src="/about1.jpg" alt="about" className='border border-[#c19f5f] rounded-md' />
                        </div>
                        <div className="w-1/2 ">
                            <Image width={4480} height={6720} src="/about2.jpg" alt="about" className='border border-[#c19f5f] rounded-md' />
                        </div>
                    </div>
                </div>

                <div className="mx-6 md:mx-32">
                    <div className={`${Styles.shortline} `}></div>
                </div>

            </section>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 mx-6 md:mx-32 my-10 md:my-20 gap-4 md:gap-8">

                    <div className=" flex justify-center items-center gap-4">
                        <Image width={200} height={200} src="/organic.svg" alt="about" className='w-1/4' />
                        <div>
                            <h2 className='cormorant text-2xl' >Artisan Bakes</h2>
                            <p className='text-gray-500'>Handcrafted baked goods made fresh daily, offering exceptional quality and delightful flavors.</p>
                        </div>
                    </div>

                    <div className="flex-row-reverse md:flex-row flex justify-center items-center gap-4">
                        <Image width={200} height={200} src="/organic.svg" alt="about" className='w-1/4' />
                        <div>
                            <h2 className='cormorant text-2xl' >Freshly Baked</h2>
                            <p className='text-gray-500'>Explore a variety of premium bakery treats crafted with care for a wholesome experience.</p>
                        </div>
                    </div>

                    <div className=" flex justify-center items-center gap-4">
                        <Image width={200} height={200} src="/organic.svg" alt="about" className='w-1/4' />
                        <div>
                            <h2 className='cormorant text-2xl' >Flavorful Treats</h2>
                            <p className='text-gray-500'>Delight in our range of baked goods, from tea cakes to lavash, made with the finest ingredients.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className={`${Styles.about3} h-[70vh]  `}>
                    <div className='flex items-center justify-center text-center h-full w-2/3 mx-auto relative '>
                        <h2 className='cormorant text-7xl'>Made with love <span className='text-[#c19f5f]'>unique sweets</span> for gourmet</h2>
                        <div className={`${Styles.spin}  border border-[#c19f5f] `}></div>
                    </div>
                </div>
            </section>

            <section className='mx-6 md:mx-32 py-10 md:py-20'>

                <div className="md:flex justify-between hidden">
                    <div className="flex flex-col items-center ">
                        <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                        <h3 className='cormorant text-4xl '>Stores</h3>
                    </div>
                    <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                    <div className="flex flex-col items-center">
                        <h2 className='cormorant text-8xl text-[#c19f5f]'>30+</h2>
                        <h3 className='cormorant text-4xl '>Products</h3>
                    </div>
                    <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                    <div className="flex flex-col items-center">
                        <h2 className='cormorant text-8xl text-[#c19f5f]'>07</h2>
                        <h3 className='cormorant text-4xl '>Years of Experience</h3>
                    </div>
                    <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                    <div className="flex flex-col items-center">
                        <h2 className='cormorant text-8xl text-[#c19f5f]'>30</h2>
                        <h3 className='cormorant text-4xl '>Team of Chefs</h3>
                    </div>
                </div>

                <div className='md:hidden grid grid-cols-2 gap-4'>
                    <div className="border rounded-md flex flex-col justify-center items-center border-gray-700">
                        <h2 className='cormorant text-3xl text-[#c19f5f]'>230</h2>
                        <h3 className='cormorant text-xl '>Stores</h3>
                    </div>

                    <div className="border rounded-md flex flex-col justify-center items-center border-gray-700">
                        <h2 className='cormorant text-3xl text-[#c19f5f]'>30+</h2>
                        <h3 className='cormorant text-xl '>Products</h3>
                    </div>

                    <div className="border rounded-md flex flex-col justify-center items-center border-gray-700">
                        <h2 className='cormorant text-3xl text-[#c19f5f]'>07</h2>
                        <h3 className='cormorant text-xl '>Years of Experience</h3>
                    </div>

                    <div className="border rounded-md flex flex-col justify-center items-center border-gray-700">
                        <h2 className='cormorant text-3xl text-[#c19f5f]'>30</h2>
                        <h3 className='cormorant text-xl '>Team of Chefs</h3>
                    </div>
                </div>


            </section>

            <section>
                <Footer />
            </section>

        </div>
    )
}

export default About