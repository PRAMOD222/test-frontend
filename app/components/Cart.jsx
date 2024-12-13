"use client";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSideCart, updatequantity, removeFromCart, addToCart } from '@/store/cartSlice';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Image from 'next/image';
import { ScrollArea } from "@/components/ui/scroll-area"
import { MdDelete } from "react-icons/md";


const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const Cart = () => {
    const dispatch = useDispatch();
    const isSideCartOpen = useSelector((state) => state.cart.isSideCartOpen);
    const cartItems = useSelector((state) => state.cart.cartItems);

    // console.log("cart items",cartItems);

    const updateCartQuantity = async (productId, quantity) => {
        dispatch(updatequantity({ productId, quantity }));

        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage or wherever you store it
            const response = await fetch(`${baseApi}/api/cart/update-quantity`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,  // Include the JWT token
                },
                body: JSON.stringify({ productId, quantity }),
            });

            const data = await response.json();
            // console.log('Cart updated:', data);
            fetchCart();
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    const removeProductFromCart = async (productId) => {
        dispatch(removeFromCart(productId));

        try {
            const token = localStorage.getItem('token'); // Retrieve token
            const response = await fetch(`${baseApi}/api/cart/remove-from-cart`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify({ productId }), // Send productId in request body
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Product removed:', data.message);
                fetchCart(); // Refresh cart in UI
            } else {
                const errorText = await response.text();
                console.error('Error removing product:', errorText);
            }
        } catch (error) {
            console.error('Error deleting product from cart:', error);
        }
    };

    

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve the token from localStorage or wherever you store it
    
                const response = await fetch(`${baseApi}/api/cart/fetch`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token // Send the JWT token in the header
                    },
                });
                const data = await response.json();
                // console.log('Cart fetched:', data);
                data.map((item) => {
                    dispatch(addToCart(item.product))
                    dispatch(updatequantity({ productId: item.product._id, quantity: item.quantity }))
                }
                );
    
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchCart();
    }, [dispatch]);


    return (
        <div className="text-white bg-gray-700">

            {/* Side Cart */}
            <Sheet open={isSideCartOpen} onOpenChange={() => dispatch(toggleSideCart())}>
                <SheetContent className="bg-neutral-800 w-[16vw]">
                    <SheetHeader className="text-white">
                        <SheetTitle>Your Cart</SheetTitle>

                        <button className="absolute top-4 right-4 text-white" onClick={() => dispatch(toggleSideCart())} > ✕ </button>
                        <ScrollArea className="rounded-md h-[90vh]">

                            <div className="h-screen w-full space-y-6">

                                {cartItems.map((product) => (
                                    <div key={product._id} className=" gap-4">
                                        {product && <Image className=' aspect-square object-cover rounded-md ' src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />}
                                        <h2 className='text-xl capitalize'>{product.name}</h2>
                                        <div className='flex justify-between items-center'>
                                            <input
                                                type="number"
                                                className="w-16 outline-none focus:outline-none focus:border border-[#c19f5f] rounded px-2 py-1 text-center bg-gray-800"
                                                value={product.quantity}
                                                min={1}
                                                onChange={(e) => updateCartQuantity(product._id, parseInt(e.target.value))}
                                            />

                                            <MdDelete onClick={() => removeProductFromCart(product._id)} className='text-2xl cursor-pointer text-[#c19f5f]' />

                                        </div>
                                    </div>
                                ))}


                            </div>

                        </ScrollArea>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Cart;
