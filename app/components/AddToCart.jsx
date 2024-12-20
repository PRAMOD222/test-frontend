import { useSelector, useDispatch } from 'react-redux';
import { addToCart, toggleSideCart } from '@/store/cartSlice';
import { useRouter } from 'next/navigation';

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const AddToCartButton = ({ product }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const addProductToCart = async (product) => {

        dispatch(addToCart(product));
        dispatch(toggleSideCart(true));
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage or wherever you store it
            if (token) {

                const response = await fetch(`${baseApi}/api/cart/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token // Send the JWT token in the header
                    },
                    body: JSON.stringify({
                        productId: product._id,  // Send the product ID in the request body
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    // console.log("Product added to cart:", data);

                } else {
                    // console.error("Failed to add product to cart.");
                }
            } else {
                router.push('/login');
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    return (
        <button
            onClick={() => addProductToCart(product)}
            className="whitespace-nowrap w-full"
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
