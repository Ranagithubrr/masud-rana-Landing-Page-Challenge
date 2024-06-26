/* eslint-disable react/prop-types */

import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { ProductCartContext } from '../../context/ProductContext';
import Slider from 'react-slick';


const ProductCard = ({ Product }) => {
    const { addToCart } = useContext(ProductCartContext);
    const { toggleFavorite, favorites } = useContext(ProductCartContext);

    // Checking if the product is in the favorites list    
    const isFavorite = favorites?.some(item => item.id === Product.id);

    // slick slider setting
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <>
            <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden h-full">
                <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden h-full">
                    <div className="relative flex flex-col h-full">

                        <span className='absolute top-5 left-5 h-10 w-10 bg-orange-300 rounded-full flex items-center justify-center text-sm font-semibold'>{Product.discountPercentage}%</span>
                        <button onClick={() => toggleFavorite(Product)} className={`absolute top-5 right-5 h-10 w-10 border border-gray-700 rounded-full flex items-center justify-center text-md font-semibold ${isFavorite ? 'bg-yellow-400 text-white border-white' : ''}`}>
                            <FaRegHeart />
                        </button>
                        <div className='flex flex-col flex-grow mt-12'>
                            <div className='w-full h-52 pt-6 px-4 box-border'>
                                <Slider {...settings}>

                                    {
                                        Product.images.map((ele, index) => {
                                            return (
                                                <div key={index} className='h-52 lg:h-44'>
                                                    <img src={ele} className='h-full w-full'/>
                                                </div>
                                            )
                                        })
                                    }

                                </Slider>
                            </div>
                            <div className='flex flex-col p-4 flex-grow mt-8 lg:mt-2'>
                                <h5 className='font-semibold text-gray-800 text-xl mt-4'>{Product.title}</h5>
                                <h6 className='font-bold text-gray-800 mb-5'>${Product.price} <del className='font-semibold text-gray-400 text-sm'>{Product.genprice && `$${Product.genprice}`}</del></h6>
                                <button onClick={() => addToCart(Product)} className='mt-auto self-start w-auto px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-semibold rounded flex items-center justify-center'>
                                    <span className="mr-3"><FaShoppingCart /></span> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard