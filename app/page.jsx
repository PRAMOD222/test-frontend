// "use client"
import Image from 'next/image'
import Link from 'next/link'
import Styles from '@/css/home.module.css'
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import AnimatedNav from './components/AnimatedNav';
import HomepageProducts from './components/HomepageProducts';
import HomeCarousel from './components/HomeCarousel';
import CartIcon from './components/CartIcon';
import LoginIcon from './components/LoginIcon';




const Page = async () => {

    const baseApi = process.env.NEXT_PUBLIC_BASE_API;


    const response = await fetch(`${baseApi}/api/products/all`);
    const products = await response.json();
    // console.log("Products fetched:", products);
    


    return (
        <div className=' text-white bg-black'>


            <div className="sticky top-0 bg-[#100f10] z-50">
                <MobileNav />
            </div>
            <AnimatedNav />
            <main className={` `}>

                <div className="absolute w-full z-20 hidden md:block">
                    <nav className={` ${Styles.line}  mx-32 relative`}>
                        <ul className='flex mx-20 my-10 justify-between text-xl '>
                            <li> <Link href={'/products/barcakes'} className=''>Bar Cakes </Link></li>
                            <li> <Link href={'/products/toasts'} className=''>Toast </Link></li>
                            <li> <Link href={'/products/lavash'} className=''>Lavash </Link></li>
                            <li> <Link href={'/products/cheesestraws'} className=''>Cheese Straws </Link></li>
                            <li> <Link href={'/products/breadsticks'} className=''>Breadsticks </Link></li>
                            <li> <Link href={'/about'} className=''>About + </Link></li>
                            <li> <Link href={'/contact'} className=''>Enquire Now </Link></li>
                            {/* <li> <Link href={'/contact'} className=''>Contact </Link></li> */}
                            <CartIcon />
                            <LoginIcon />
                            {/* <li className=''><Link href={'/login'}><FaUserAlt /></Link></li> */}
                        </ul>
                        {/* <Image className='' src="/line.png" alt="line" width={1000} height={10} /> */}

                    </nav>
                </div>

                <HomeCarousel />

                <section className='mx-6 md:mx-32 '>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className={`   -translate-y-6 z-30 overflow-hidden`}>
                            <div className={`${Styles.product1} aspect-[3/4] p-3 hover:scale-110 transition-all duration-500 group  `}>
                                <div className="border border-[#c19f5f] h-full w-full flex items-end justify-center hover:scale-90 transition-all duration-500">
                                    <div className='my-8 flex flex-col justify-center items-center'>
                                        <h2 className='cormorant text-2xl md:text-4xl font-semibold mb-4 text-center'>Bar Cakes</h2>
                                        <Link href={'/products/barcakes'} className=' text-[#c19f5f] text-sm uppercase border border-[#c19f5f] px-2 md:px-6 py-2 rounded-full  bg-black/40 hover:border-white hover:text-white transition-all duration-500 backdrop-blur-md'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`   -translate-y-6 z-30 overflow-hidden`}>
                            <div className={`${Styles.product4} aspect-[3/4] p-3 hover:scale-110 transition-all duration-500 group `}>
                                <div className="border border-[#c19f5f] h-full w-full flex items-end justify-center hover:scale-90 transition-all duration-500">
                                    <div className='my-8 flex flex-col justify-center items-center'>
                                        <h2 className='cormorant text-2xl md:text-4xl font-semibold mb-4 text-center'>Cheese Staws</h2>
                                        <Link href={'/products/cheesestraws'} className=' text-[#c19f5f] text-sm uppercase border border-[#c19f5f] px-2 md:px-6 py-2 rounded-full  bg-black/40 hover:border-white hover:text-white transition-all duration-500 backdrop-blur-md'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`   -translate-y-6 z-30 overflow-hidden`}>
                            <div className={`${Styles.product2} aspect-[3/4] p-3 hover:scale-110 transition-all duration-500 group`}>
                                <div className="border border-[#c19f5f] h-full w-full flex items-end justify-center hover:scale-90 transition-all duration-500">
                                    <div className='my-8 flex flex-col justify-center items-center'>
                                        <h2 className='cormorant text-2xl md:text-4xl font-semibold mb-4 text-center'>Toasts</h2>
                                        <Link href={'/products/toasts'} className=' text-[#c19f5f] text-sm uppercase border border-[#c19f5f] px-2 md:px-6 py-2 rounded-full  bg-black/40 hover:border-white hover:text-white transition-all duration-500 backdrop-blur-md'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`   -translate-y-6 z-30 overflow-hidden`}>
                            <div className={`${Styles.product3} aspect-[3/4] p-3 hover:scale-110 transition-all duration-500 group`}>
                                <div className="border border-[#c19f5f] h-full w-full flex items-end justify-center hover:scale-90 transition-all duration-500">
                                    <div className='my-8 flex flex-col justify-center items-center'>
                                        <h2 className='cormorant text-2xl md:text-4xl font-semibold mb-4 text-center'>Lavash</h2>
                                        <Link href={'/products/lavash'} className=' text-[#c19f5f] text-sm uppercase border border-[#c19f5f] px-2 md:px-6 py-2 rounded-full  bg-black/40 hover:border-white hover:text-white transition-all duration-500 backdrop-blur-md'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </section>

                <section className={`${Styles.section2Bg}`}>
                    <div className='mx-6 md:mx-32'>

                        <div className="text w-full md:w-1/2 py-6 md:py-32  ">
                            <h2 className='cormorant text-2xl md:text-3xl text-[#c19f5f]'>DISCOVER A NEW LEVEL OF TASTE</h2>
                            <div className={`${Styles.shortline} w-1/2 my-4`}></div>
                            <p className='md:text-xl md:leading-[40px]'>At Al Forno, we take great care and pride in crafting products that offer a flavorful culinary experience. Our handcrafted creations are baked throughout the day in our ovens, ensuring freshness and quality in every bite.</p><p className='md:text-xl md:leading-[40px] mt-8'> From our flavored toasts and French cheese straws to lavash, tea cakes and much more, we bring you a diverse selection of treats.</p>
                            <button className='text-[#c19f5f] text-xl uppercase border border-[#c19f5f] px-14 py-4 rounded-full mt-8'>Read More</button>
                        </div>

                    </div>
                </section>

                <section className='mx-6 md:mx-32 py-6 md:py-20'>

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

                    <div className='pt-10 pb-8 md:pt-20 md:pb-16'>
                        <div className="flex justify-center items-center flex-col">
                            <h2 className='uppercase text-xl text-[#c19f5f] '>Shop online</h2>
                            <h2 className='text-4xl md:text-6xl cormorant mt-4 mb-5'>Discover our Delicacies</h2>
                            <div className={`${Styles.shortline} w-[20vw]`}></div>
                        </div>
                    </div>

                    <HomepageProducts />

                </section>

            </main>
            <Footer />

            <div className='hidden'>
                <div className="grid grid-cols-2 gap-6 ">
                    {products.cheesestraws.map((product) => (
                        <div key={product._id} className="flex items-center gap-4">
                        <Image className='w-1/4 aspect-square object-cover rounded-md md:rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                        <div>
                            <div className='cormorant md:text-2xl flex justify-between'>
                                <h2>{product.name}</h2>
                                <h2 className='whitespace-nowrap'>{product.price} /-</h2>
                            </div>
                            <div className='flex justify-between gap-4'>
                                <p className='text-xs text-[#c19f5f]'>
                                    { product.description}
                                </p>
                                <div className='w-max'>
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    {products.toasts.map((product) => (
                        <div key={product._id} className="flex items-center gap-4">
                        <Image className='w-1/4 aspect-square object-cover rounded-md md:rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                        <div>
                            <div className='cormorant md:text-2xl flex justify-between'>
                                <h2>{product.name}</h2>
                                <h2 className='whitespace-nowrap'>{product.price} /-</h2>
                            </div>
                            <div className='flex justify-between gap-4'>
                                <p className='text-xs text-[#c19f5f]'>
                                    { product.description}
                                </p>
                                <div className='w-max'>
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    {products.lavash.map((product) => (
                        <div key={product._id} className="flex items-center gap-4">
                        <Image className='w-1/4 aspect-square object-cover rounded-md md:rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                        <div>
                            <div className='cormorant md:text-2xl flex justify-between'>
                                <h2>{product.name}</h2>
                                <h2 className='whitespace-nowrap'>{product.price} /-</h2>
                            </div>
                            <div className='flex justify-between gap-4'>
                                <p className='text-xs text-[#c19f5f]'>
                                    { product.description}
                                </p>
                                <div className='w-max'>
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    {products.barcakes.map((product) => (
                        <div key={product._id} className="flex items-center gap-4">
                        <Image className='w-1/4 aspect-square object-cover rounded-md md:rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                        <div>
                            <div className='cormorant md:text-2xl flex justify-between'>
                                <h2>{product.name}</h2>
                                <h2 className='whitespace-nowrap'>{product.price} /-</h2>
                            </div>
                            <div className='flex justify-between gap-4'>
                                <p className='text-xs text-[#c19f5f]'>
                                    { product.description}
                                </p>
                                <div className='w-max'>
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
