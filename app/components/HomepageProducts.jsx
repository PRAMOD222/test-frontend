"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Styles from '@/css/home.module.css'
import AddToCart from '@/app/components/AddToCart';



const HomepageProducts = () => {

    const [activeTab, setActiveTab] = useState('Bar Cakes');

    const baseApi = process.env.NEXT_PUBLIC_BASE_API;
    const [products, setProducts] = useState({});

    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${baseApi}/api/products/all`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [ baseApi ]);

    const renderProducts = () => {
        switch (activeTab) {
            case 'Bar Cakes':
                return (
                    <div className="products grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">

                        {products.barcakes && products.barcakes.slice(0, 6).map((product) => (
                            <div key={product._id} className="flex items-center gap-4">
                                <Image className='w-1/4 aspect-square object-cover rounded-md md:rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                                <div>
                                    <div className='cormorant md:text-2xl flex justify-between'>
                                        <h2>{product.name}</h2>
                                        <h2 className='whitespace-nowrap'>{product.price} /-</h2>
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-xs text-[#c19f5f]'>
                                            {product.description.length > 80 ? product.description.slice(0, 80) + '...' : product.description}
                                        </p>
                                        {/* <button onClick={() => addProductToCart(product)} className='whitespace-nowrap underline'>Add to Cart</button> */}
                                        <div className='w-max'>
                                            <AddToCart product={product} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Toasts':
                return (
                    <div className="products grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
                        {products.toasts && products.toasts.slice(0, 6).map((product) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <Image className='w-1/4 aspect-square object-cover rounded-md md:rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                                <div>
                                    <div className='cormorant md:text-3xl flex justify-between'>
                                        <h2>{product.name}</h2>
                                        <h2 className='whitespace-nowrap'>{product.price} /-</h2>
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-xs md:text-sm text-[#c19f5f]'>
                                            {product.description.length > 80 ? product.description.slice(0, 80) + '...' : product.description}
                                        </p>
                                        <div className='w-max'>
                                            <AddToCart product={product} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Cheese Straw':
                return (
                    <div className="products grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
                        {products.cheesestraws && products.cheesestraws.slice(0, 6).map((product) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <Image className='w-1/4 aspect-square object-cover rounded-md md:rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                                <div>
                                    <div className='cormorant md:text-3xl flex justify-between'>
                                        <h2>{product.name}</h2>
                                        <h2 className='whitespace-nowrap'>{product.price} /-</h2>
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-xs md:text-sm text-[#c19f5f]'>
                                            {product.description.length > 80 ? product.description.slice(0, 80) + '...' : product.description}
                                        </p>
                                        <div className='w-max'>
                                            <AddToCart product={product} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Lavash':
                return (
                    <div className="products grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
                        {products.lavash && products.lavash.slice(0, 6).map((product) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <Image className='w-1/4 aspect-square object-cover rounded-md md:rounded-full' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                                <div>
                                    <div className='cormorant md:text-3xl flex justify-between'>
                                        <h2>{product.name}</h2>
                                        <h2 className='whitespace-nowrap'>{product.price} /-</h2>
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-xs md:text-sm text-[#c19f5f]'>
                                            {product.description.length > 80 ? product.description.slice(0, 80) + '...' : product.description}
                                        </p>
                                        <div className='w-max'>
                                            <AddToCart product={product} />
                                        </div>
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
        <div>
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
        </div>
    )
}

export default HomepageProducts