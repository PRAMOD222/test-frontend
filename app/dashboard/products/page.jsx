"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const baseApi = process.env.NEXT_PUBLIC_BASE_API;


const Products = () => {
  // State for form fields
  const [product, setProduct] = useState({
    name: '',
    description: '',
    barcode: '',
    price: '',
    quantity: '',
    discount: '',
    discountedPrice: '',
    addInfo: '',
    volume: '',
    veg: false,
    category: '',  // <-- add this line
    images: [],
  });

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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle image file uploads
  const handleFileChange = (e) => {
    setProduct({ ...product, images: e.target.files });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("barcode", product.barcode);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("discount", product.discount);
    formData.append("discountedPrice", product.discountedPrice);
    formData.append("addInfo", product.addInfo);
    formData.append("volume", product.volume);
    formData.append("veg", product.veg);
    formData.append("category", product.category); // Append the category

    // Append images to form data
    for (let i = 0; i < product.images.length; i++) {
      formData.append("image", product.images[i]);
    }

    // Send the form data to the backend
    try {
      const res = await axios.post(`${baseApi}/api/products/add-product`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product added successfully!");
      console.log(res.data);
    } catch (error) {
      console.error("Error adding product", error);
      alert("Failed to add product.");
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleDiscountChange = (event) => {
    const { name, value } = event.target;

    // Update the product state
    setProduct((prevProduct) => {
      // Calculate the discounted price based on price and discount
      const newDiscountedPrice = prevProduct.price - (prevProduct.price * value) / 100;

      return {
        ...prevProduct,
        [name]: value,  // Update the discount value
        discountedPrice: newDiscountedPrice,  // Update the discounted price
      };
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">


      <Dialog>
        <DialogTrigger>
          Add Product
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>

            <h1 className="text-2xl mb-4">Add a Product</h1>
            <form className="space-y-2" onSubmit={handleSubmit} encType="multipart/form-data">

              <div className="">
                <input
                  placeholder="Product Name"
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md focus:outline-[#c19f5f] "
                  required
                />
              </div>

              <div className="">
                <textarea
                  placeholder="Product Description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                  required
                ></textarea>
              </div>

              <div className="w-full">
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                  required
                >
                  <option value="">Select a Category</option>
                  <option value="barcakes">Bar Cakes</option>
                  <option value="toasts">Toasts</option>
                  <option value="cheesestraws">Cheese Straw</option>
                  <option value="lavash">Lavash</option>
                </select>
              </div>

              <div className="flex  gap-3">
                <div className=" w-full">
                  <input
                    placeholder="Quantity"
                    type="text"
                    name="quantity"
                    value={product.quantity}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                    required
                  />
                </div>

                <div className=" w-full">
                  <input
                    placeholder="Price"
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                    required
                  />
                </div>
              </div>

              <div className="flex  gap-3">

                <div className="w-full">
                  <input
                    placeholder="Discount"
                    type="text"
                    name="discount"
                    value={product.discount}
                    onChange={handleDiscountChange}
                    className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                    required
                  />
                </div>

                <div className="w-full">
                  <input
                    placeholder="Discounted Price"
                    type="text"
                    name="discountedPrice"
                    value={product.discountedPrice}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full">
                  <input
                    placeholder="Volume"
                    type="text"
                    name="volume"
                    value={product.volume}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                    required
                  />
                </div>

                <div className="w-full">
                  <input
                    placeholder="Barcode"
                    type="text"
                    name="barcode"
                    value={product.barcode}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                    required
                  />
                </div>
              </div>

              <div className="">
                <input
                  placeholder="Additional Info"
                  type="text"
                  name="addInfo"
                  value={product.addInfo}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                  required
                />
              </div>

              <div className="">
                <input
                  placeholder="Product Image"
                  type="file"
                  name="image"
                  multiple
                  onChange={handleFileChange}
                  className="border p-2 w-full rounded-md focus:outline-[#c19f5f]"
                  required
                />
              </div>

              <div className="">
                <input
                  placeholder="Veg/Non-Veg"
                  type="checkbox"
                  name="veg"
                  checked={product.veg}
                  onChange={handleChange}
                  className="mr-2 "
                />
                <label htmlFor="veg">Veg</label>
              </div>



              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Product
              </button>
            </form>

          </DialogHeader>
        </DialogContent>
      </Dialog>


      <Tabs defaultValue="barcakes" className="">
        <TabsList>
          <TabsTrigger value="barcakes">Bar Cakes</TabsTrigger>
          <TabsTrigger value="toasts">Toasts</TabsTrigger>
          <TabsTrigger value="cheesestraw">Cheese Straw</TabsTrigger>
          <TabsTrigger value="lavash">Lavash</TabsTrigger>
        </TabsList>
        <TabsContent value="barcakes">
          <div className=" p-2 m-2 w-full grid grid-cols-4 gap-4">
            {products.barcakes && products.barcakes.map((product) => (
              <div key={product.name} className="border rounded-md p-2">
                <div className="border rounded-md  overflow-hidden w-60 aspect-square">
                  <Image className="object-cover w-full" src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                </div>
                <h2>{product.name}</h2>
                <Dialog>
                  <DialogTrigger>Details</DialogTrigger>
                  <DialogContent>
                    <ProductItem product={product} />
                  </DialogContent>
                </Dialog>

              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="toasts">
          <div className=" p-2 m-2 w-full grid grid-cols-4 gap-4">
            {products.toasts && products.toasts.map((product) => (
              <div key={product.name} className="border rounded-md p-2">
                <div className="border rounded-md  overflow-hidden w-60 aspect-square">
                  <Image className="object-cover w-full" src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                </div>
                <h2>{product.name}</h2>
                <Dialog>
                  <DialogTrigger>Details</DialogTrigger>
                  <DialogContent>
                    <ProductItem product={product} />
                  </DialogContent>
                </Dialog>

              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="cheesestraw">
          <div className=" p-2 m-2 w-full grid grid-cols-4 gap-4">
            {products.cheesestraws && products.cheesestraws.map((product) => (
              <div key={product.name} className="border rounded-md p-2">
                <div className="border rounded-md  overflow-hidden w-60 aspect-square">
                  <Image className="object-cover w-full" src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                </div>
                <h2>{product.name}</h2>
                <Dialog>
                  <DialogTrigger>Details</DialogTrigger>
                  <DialogContent>
                    <ProductItem product={product} />
                  </DialogContent>
                </Dialog>

              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="lavash">
          <div className=" p-2 m-2 w-full grid grid-cols-4 gap-4">
            {products.lavash && products.lavash.map((product) => (
              <div key={product.name} className="border rounded-md p-2">
                <div className="border rounded-md  overflow-hidden w-60 aspect-square">
                  <Image className="object-cover w-full" src={`${baseApi}/${product.image[0]}`} alt={product.name} width={200} height={200} />
                </div>
                <h2>{product.name}</h2>
                <Dialog>
                  <DialogTrigger>Details</DialogTrigger>
                  <DialogContent>
                    <ProductItem product={product} />
                  </DialogContent>
                </Dialog>

              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

    </div>
  );
};

const ProductItem = ({ product }) => {
  // State to hold the currently selected image
  const [selectedImage, setSelectedImage] = useState(product.image[0]);

  // Function to change the selected image when clicking a thumbnail
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="border p-2 m-2 flex w-full">
      <div className="flex border rounded-md">
        {/* Left side - Thumbnail images */}
        <div className="flex flex-col">
          {product.image.map((image, index) => (
            <div
              key={index}
              className="m-2 h-20 w-20 border rounded overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(image)} // Update the selected image when clicked
            >
              <Image
                className="object-cover w-full"
                src={`${baseApi}/${image}`}
                alt="product image"
                width={60}
                height={60}
              />
            </div>
          ))}
        </div>

        {/* Right side - Main selected image */}
        <div className="mainimage m-2">
          <Image
            width={1000}
            height={1000}
            alt="selected product image"
            src={`${baseApi}/${selectedImage}`}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>

      <div className="border rounded-md">

        <h2 className="text-2xl">{product.name}</h2>
        <p className="text-lg">{product.description}</p>
        <p className="text-4xl">Price: ₹{product.price}</p>
        <p>Quantity in stock: {product.quantity}</p>
        <p>Discounted Price: ₹{product.discountedPrice}</p>
        <p>Volume: {product.volume}</p>
        <p>Barcode: {product.barcode}</p>
        <p>Additional Info: {product.addInfo}</p>
        <p>Veg: {product.veg ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default Products;