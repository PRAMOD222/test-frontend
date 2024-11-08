"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Styles from '@/css/home.module.css'
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const slides = [
    {
        id: 1,
        title: "Toast",
        subtitle: "Baked Fresh, Toasted To Perfection",
        image: "/herobg.png",
    },
    {
        id: 2,
        title: "Bar Cakes",
        subtitle: "Delicious and Rich in Flavor",
        image: "/homebg2.png",
    },
    {
        id: 3,
        title: "Lavash",
        subtitle: "Crispy and Perfectly Seasoned",
        image: "/herobg.png",
    },
];


const Page = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showNavbar, setShowNavbar] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${baseApi}/api/products/all`);
            const data = await response.json();
            setProducts(data);
            console.log("Products fetched:", data);

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        console.log("base api", baseApi);

        fetchProducts();
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowNavbar(true); // Show navbar when scrollY > 100px
            } else {
                setShowNavbar(false); // Hide navbar if less than 100px
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [activeTab, setActiveTab] = useState('Bar Cakes');

    const renderProducts = () => {
        switch (activeTab) {
            case 'Bar Cakes':
                return (
                    <div className="products grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">

                        {products.barcakes && products.barcakes.map((product) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <Image className='w-1/4 aspect-square object-cover rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                                <div>
                                    <div className='cormorant text-3xl flex justify-between'>
                                        <h2>{product.name} ......</h2>
                                        <h2>350 /-</h2>
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-sm text-[#c19f5f]'>
                                            {product.description}
                                        </p>
                                        <Link href={`/product/${product._id}`} className='whitespace-nowrap underline'>Shop Now +</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Toasts':
                return (
                    <div className="products grid grid-cols-2 gap-10">
                        {products.toasts && products.toasts.map((product) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <Image className='w-1/4 aspect-square object-cover rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                                <div>
                                    <div className='cormorant text-3xl flex justify-between'>
                                        <h2>{product.name} ......</h2>
                                        <h2>350 /-</h2>
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-sm text-[#c19f5f]'>
                                            {product.description}
                                        </p>
                                        <Link href={`/product/${product._id}`} className='whitespace-nowrap underline'>Shop Now +</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Cheese Straw':
                return (
                    <div className="products grid grid-cols-2 gap-10">
                        {products.cheesestraws && products.cheesestraws.map((product) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <Image className='w-1/4 aspect-square object-cover rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                                <div>
                                    <div className='cormorant text-3xl flex justify-between'>
                                        <h2>{product.name} ......</h2>
                                        <h2>350 /-</h2>
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-sm text-[#c19f5f]'>
                                            {product.description}
                                        </p>
                                        <Link href={`/product/${product._id}`} className='whitespace-nowrap underline'>Shop Now +</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Lavash':
                return (
                    <div className="products grid grid-cols-2 gap-10">
                        {products.lavash && products.lavash.map((product) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <Image className='w-1/4 aspect-square object-cover rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                                <div>
                                    <div className='cormorant text-3xl flex justify-between'>
                                        <h2>{product.name} ......</h2>
                                        <h2>350 /-</h2>
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-sm text-[#c19f5f]'>
                                            {product.description}
                                        </p>
                                        <Link href={`/product/${product._id}`} className='whitespace-nowrap underline'>Shop Now +</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className=' text-white bg-black'>
            <motion.nav
                initial={{ y: -150 }} // Navbar starts hidden
                animate={{ y: showNavbar ? 0 : -150 }} // Slide down when scroll is greater than 100px
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full z-50 bg-black text-white py-4 shadow-lg "
            >
                <div className="mx-32 ">
                    <Navbar />
                </div>
            </motion.nav>

            <div className="">
                <MobileNav />
            </div>

            <main className={` `}>


                <div className="absolute w-full z-20 hidden md:block">
                    <nav className={` ${Styles.line}  mx-32 relative`}>
                        <ul className='flex mx-20 my-10 justify-between text-xl '>
                            <li> <Link href={'/products/barcakes'} className=''>Bar Cakes </Link></li>
                            <li> <Link href={'/products/toasts'} className=''>Toast </Link></li>
                            <li> <Link href={'/products/lavash'} className=''>Lavash </Link></li>
                            <li> <Link href={'/products/cheesestraws'} className=''>Cheese Straws </Link></li>
                            <li> <Link href={'/about'} className=''>About + </Link></li>
                            <li> <Link href={'/'} className=''>Enquire Now </Link></li>
                            <li> <Link href={'/contact'} className=''>Contact </Link></li>
                        </ul>
                        {/* <Image className='' src="/line.png" alt="line" width={1000} height={10} /> */}

                    </nav>
                </div>

                {/* <div className={` bg relative slide`}>
                    <Image className='w-full' src={"/herobg.png"} alt="hero" width={1000} height={1000} />
                    <BsArrowLeft className='left-32 absolute top-1/2 -translate-y-1/2 text-6xl' />
                    <BsArrowRight className='right-32 absolute top-1/2 -translate-y-1/2 text-6xl' />

                    <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

                        <div className=''>
                            <div className="w-max bg-[#c19f5f] aspect-square rounded-full p-2 my-8 mx-auto ">
                                <Image className='w-44' src={"/logo.png"} alt="hero" width={100} height={100} />
                            </div>
                            <div className="text text-center">
                                <h2 className='cormorant text-8xl font-[500]'>Toast</h2>
                                <h2 className='cormorant text-6xl text-[#c19f5f] font-[500] my-3 whitespace-nowrap'>Baked Fresh, Toasted To Perfection</h2>
                                <p className='text-[20px] w-[90%]'>Lightly toasted and irresistibly crunchy, our toast is made to elevate your snacking experience with every bite.</p>
                            </div>

                            <div className="button w-1/3 m-auto mt-10">
                                <button className='text-[#c19f5f] text-xl uppercase border border-[#c19f5f] px-10 py-4 rounded-full w-full'>Shop Now</button>
                            </div>
                        </div>

                    </div>
                </div> */}

                <div className="relative h-[100vh] md:h-[130vh] z-10">
                    {/* Arrows */}
                    <button onClick={prevSlide} className="absolute left-4 md:left-32 top-[20%] md:top-1/2 text-6xl z-20">
                        &larr;
                    </button>
                    <button onClick={nextSlide} className="absolute right-4 md:right-32 top-[20%] md:top-1/2 text-6xl z-20">
                        &rarr;
                    </button>

                    {/* Slides */}
                    {slides.map((slide, index) => (
                        <motion.div
                            key={slide.id}
                            className="absolute top-0 left-0 w-full h-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: currentSlide === index ? 1 : 0,
                                scale: currentSlide === index ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            style={{ zIndex: currentSlide === index ? 1 : 0 }}
                        >
                            <Image
                                className="w-full h-full object-cover"
                                src={slide.image}
                                alt={slide.title}
                                width={1920}
                                height={1080}
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center pt-28">
                                <div className="w-max bg-[#c19f5f] aspect-square rounded-full p-2 my-8 mx-auto">
                                    <Image className='w-44' src={"/logo.png"} alt="hero" width={100} height={100} />
                                </div>
                                <h2 className="cormorant text-white text-8xl font-bold">{slide.title}</h2>
                                <h2 className="cormorant text-3xl text-center md:text-6xl text-[#c19f5f] font-[500] my-3 md:whitespace-nowrap">{slide.subtitle}</h2>
                                <p className='text-[20px]  text-center w-3/4 md:w-1/2'>Lightly toasted and irresistibly crunchy, our toast is made to elevate your snacking experience with every bite.</p>
                                <button className='text-[#c19f5f] text-xl uppercase border border-[#c19f5f] px-14 py-4 rounded-full mt-8'>Shop Now</button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <section className='mx-6 md:mx-32 '>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className={`   -translate-y-6 z-40 overflow-hidden`}>
                            <div className={`${Styles.product1} aspect-[3/4] p-3  scale-125 hover:scale-100 transition-all duration-500 `}>
                                <div className="border border-[#c19f5f] h-full w-full flex items-end justify-center scale-75 hover:scale-100 transition-all duration-500">
                                    <div className='my-8 flex flex-col justify-center items-center'>
                                        <h2 className='cormorant text-4xl font-semibold mb-4'>Bar Cakes</h2>
                                        <Link href={'/products/barcakes'} className='text-[#c19f5f] text-sm uppercase border border-[#c19f5f] px-6 py-2 rounded-full  bg-black/40 hover:border-white hover:text-white transition-all duration-500'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`   -translate-y-6 z-40 overflow-hidden`}>
                            <div className={`${Styles.product2} aspect-[3/4] p-3  scale-125 hover:scale-100 transition-all duration-500 `}>
                                <div className="border border-[#c19f5f] h-full w-full flex items-end justify-center scale-75 hover:scale-100 transition-all duration-500">
                                    <div className='my-8 flex flex-col justify-center items-center'>
                                        <h2 className='cormorant text-4xl font-semibold mb-4'>Toasts</h2>
                                        <Link href={'/products/toasts'} className='text-[#c19f5f] text-sm uppercase border border-[#c19f5f] px-6 py-2 rounded-full  bg-black/40 hover:border-white hover:text-white transition-all duration-500'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`   -translate-y-6 z-40 overflow-hidden`}>
                            <div className={`${Styles.product3} aspect-[3/4] p-3  scale-125 hover:scale-100 transition-all duration-500 `}>
                                <div className="border border-[#c19f5f] h-full w-full flex items-end justify-center scale-75 hover:scale-100 transition-all duration-500">
                                    <div className='my-8 flex flex-col justify-center items-center'>
                                        <h2 className='cormorant text-4xl font-semibold mb-4'>Lavash</h2>
                                        <Link href={'/products/lavash'} className='text-[#c19f5f] text-sm uppercase border border-[#c19f5f] px-6 py-2 rounded-full  bg-black/40 hover:border-white hover:text-white transition-all duration-500'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`   -translate-y-6 z-40 overflow-hidden`}>
                            <div className={`${Styles.product4} aspect-[3/4] p-3  scale-125 hover:scale-100 transition-all duration-500 `}>
                                <div className="border border-[#c19f5f] h-full w-full flex items-end justify-center scale-75 hover:scale-100 transition-all duration-500">
                                    <div className='my-8 flex flex-col justify-center items-center'>
                                        <h2 className='cormorant text-4xl font-semibold mb-4'>Cheese Staws</h2>
                                        <Link href={'/products/cheesestraws'} className='text-[#c19f5f] text-sm uppercase border border-[#c19f5f] px-6 py-2 rounded-full  bg-black/40 hover:border-white hover:text-white transition-all duration-500'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className={`${Styles.section2Bg}`}>
                    <div className='mx-6 md:mx-32'>

                        <div className="text w-full md:w-1/2 py-6 md:py-32  ">
                            <h2 className='cormorant text-4xl text-[#c19f5f]'>DISCOVER A NEW LEVEL OF TAS E</h2>
                            <div className={`${Styles.shortline} w-1/2 my-4`}></div>
                            <p className='text-2xl md:leading-[50px]'>At Al Forno, we take great care and pride in crafting products that offer a flavorful culinary experience. Our handcrafted creations are baked throughout the day in our ovens, ensuring freshness and quality in every bite.</p><p className='text-2xl md:leading-[50px] mt-8'> From our flavored toasts and French cheese straws to lavash, tea cakes and much more, we bring you a diverse selection of treats.</p>
                            <button className='text-[#c19f5f] text-xl uppercase border border-[#c19f5f] px-14 py-4 rounded-full mt-8'>Read More</button>
                        </div>

                    </div>
                </section>

                <section className='mx-6 md:mx-32 py-6 md:py-20'>

                    <div className="md:flex justify-between hidden">
                        <div className="">
                            <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                            <h3 className='cormorant text-4xl '>Stores</h3>
                        </div>
                        <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                        <div className="">
                            <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                            <h3 className='cormorant text-4xl '>Stores</h3>
                        </div>
                        <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                        <div className="">
                            <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                            <h3 className='cormorant text-4xl '>Stores</h3>
                        </div>
                        <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                        <div className="">
                            <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                            <h3 className='cormorant text-4xl '>Stores</h3>
                        </div>
                    </div>

                    <div className='md:hidden grid grid-cols-2 gap-4'>
                        <div className="border rounded-md flex flex-col justify-center items-center border-gray-700">
                            <h2 className='cormorant text-6xl text-[#c19f5f]'>230</h2>
                            <h3 className='cormorant text-4xl '>Stores</h3>
                        </div>

                        <div className="border rounded-md flex flex-col justify-center items-center border-gray-700">
                            <h2 className='cormorant text-6xl text-[#c19f5f]'>230</h2>
                            <h3 className='cormorant text-4xl '>Stores</h3>
                        </div>

                        <div className="border rounded-md flex flex-col justify-center items-center border-gray-700">
                            <h2 className='cormorant text-6xl text-[#c19f5f]'>230</h2>
                            <h3 className='cormorant text-4xl '>Stores</h3>
                        </div>

                        <div className="border rounded-md flex flex-col justify-center items-center border-gray-700">
                            <h2 className='cormorant text-6xl text-[#c19f5f]'>230</h2>
                            <h3 className='cormorant text-4xl '>Stores</h3>
                        </div>
                    </div>

                    <div className='pt-10 pb-8 md:pt-20 md:pb-16'>
                        <div className="flex justify-center items-center flex-col">
                            <h2 className='uppercase text-xl text-[#c19f5f] '>Shop online</h2>
                            <h2 className='text-4xl md:text-6xl cormorant mt-4 mb-5'>Discover our Delicacies</h2>
                            <div className={`${Styles.shortline} w-[20vw]`}></div>
                        </div>
                    </div>

                    <div className="tab section">

                        <div className="tabs flex justify-center space-x-4 md:space-x-16 my-4 md:my-10">
                            <div onClick={() => setActiveTab('Bar Cakes')} className="cursor-pointer">
                                <h2 className={`text-xl md:text-4xl cormorant ${activeTab === 'Bar Cakes' ? 'text-[#c19f5f]' : ''}`}>Bar Cakes</h2>
                                <div className={`${Styles.shortline} mt-2`}></div>
                            </div>
                            <div onClick={() => setActiveTab('Toasts')} className="cursor-pointer">
                                <h2 className={`text-xl md:text-4xl cormorant ${activeTab === 'Toasts' ? 'text-[#c19f5f]' : ''}`}>Toasts</h2>
                                <div className={`${Styles.shortline} mt-2`}></div>
                            </div>
                            <div onClick={() => setActiveTab('Cheese Straw')} className="cursor-pointer">
                                <h2 className={`text-xl md:text-4xl cormorant ${activeTab === 'Cheese Straw' ? 'text-[#c19f5f]' : ''}`}>Cheese Straw</h2>
                                <div className={`${Styles.shortline} mt-2`}></div>
                            </div>
                            <div onClick={() => setActiveTab('Lavash')} className="cursor-pointer">
                                <h2 className={`text-xl md:text-4xl cormorant ${activeTab === 'Lavash' ? 'text-[#c19f5f]' : ''}`}>Lavash</h2>
                                <div className={`${Styles.shortline} mt-2`}></div>
                            </div>
                        </div>

                        {/* Render products based on the active tab */}
                        {renderProducts()}
                    </div>

                    {/* <div className="products grid grid-cols-2 gap-10">

                        <div className=" flex items-center gap-4">
                            <Image className='w-1/4' src={'/barcake.png'} width={200} height={200} alt='product' />
                            <div>
                                <div className='cormorant text-3xl flex justify-between'>
                                    <h2>Red Velvet Cake ......</h2>
                                    <h2>350 /-</h2>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <p className='text-sm text-[#c19f5f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum impedit est labore facere natus possimus</p>
                                    <button className='whitespace-nowrap underline'>Shop Now +</button>
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center gap-4">
                            <Image className='w-1/4' src={'/barcake.png'} width={200} height={200} alt='product' />
                            <div>
                                <div className='cormorant text-3xl flex justify-between'>
                                    <h2>Red Velvet Cake ......</h2>
                                    <h2>350 /-</h2>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <p className='text-sm text-[#c19f5f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum impedit est labore facere natus possimus</p>
                                    <button className='whitespace-nowrap underline'>Shop Now +</button>
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center gap-4">
                            <Image className='w-1/4' src={'/barcake.png'} width={200} height={200} alt='product' />
                            <div>
                                <div className='cormorant text-3xl flex justify-between'>
                                    <h2>Red Velvet Cake ......</h2>
                                    <h2>350 /-</h2>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <p className='text-sm text-[#c19f5f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum impedit est labore facere natus possimus</p>
                                    <button className='whitespace-nowrap underline'>Shop Now +</button>
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center gap-4">
                            <Image className='w-1/4' src={'/barcake.png'} width={200} height={200} alt='product' />
                            <div>
                                <div className='cormorant text-3xl flex justify-between'>
                                    <h2>Red Velvet Cake ......</h2>
                                    <h2>350 /-</h2>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <p className='text-sm text-[#c19f5f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum impedit est labore facere natus possimus</p>
                                    <button className='whitespace-nowrap underline'>Shop Now +</button>
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center gap-4">
                            <Image className='w-1/4' src={'/barcake.png'} width={200} height={200} alt='product' />
                            <div>
                                <div className='cormorant text-3xl flex justify-between'>
                                    <h2>Red Velvet Cake ......</h2>
                                    <h2>350 /-</h2>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <p className='text-sm text-[#c19f5f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum impedit est labore facere natus possimus</p>
                                    <button className='whitespace-nowrap underline'>Shop Now +</button>
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center gap-4">
                            <Image className='w-1/4' src={'/barcake.png'} width={200} height={200} alt='product' />
                            <div>
                                <div className='cormorant text-3xl flex justify-between'>
                                    <h2>Red Velvet Cake ......</h2>
                                    <h2>350 /-</h2>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <p className='text-sm text-[#c19f5f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum impedit est labore facere natus possimus</p>
                                    <button className='whitespace-nowrap underline'>Shop Now +</button>
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center gap-4">
                            <Image className='w-1/4' src={'/barcake.png'} width={200} height={200} alt='product' />
                            <div>
                                <div className='cormorant text-3xl flex justify-between'>
                                    <h2>Red Velvet Cake ......</h2>
                                    <h2>350 /-</h2>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <p className='text-sm text-[#c19f5f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum impedit est labore facere natus possimus</p>
                                    <button className='whitespace-nowrap underline'>Shop Now +</button>
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center gap-4">
                            <Image className='w-1/4' src={'/barcake.png'} width={200} height={200} alt='product' />
                            <div>
                                <div className='cormorant text-3xl flex justify-between'>
                                    <h2>Red Velvet Cake ......</h2>
                                    <h2>350 /-</h2>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <p className='text-sm text-[#c19f5f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum impedit est labore facere natus possimus</p>
                                    <button className='whitespace-nowrap underline'>Shop Now +</button>
                                </div>
                            </div>

                        </div>

                    </div> */}

                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Page
