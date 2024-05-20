import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import glass from '../../assets/glass.png';
import { useContext } from 'react';
import { ProductCartContext } from '../../context/ProductContext';

const ProductCard = ({Product}) => { 
    const { cart, addToCart, removeFromCart } = useContext(ProductCartContext);
    return (
        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden h-full">
            <div className="relative flex flex-col h-full">
                <span className='absolute top-5 left-5 h-10 w-10 bg-orange-300 rounded-full flex items-center justify-center text-sm font-semibold'>10%</span>
                <button className='absolute top-5 right-5 h-10 w-10 border border-gray-700 rounded-full flex items-center justify-center text-md font-semibold'>
                    <FaRegHeart />
                </button>
                <div className='flex flex-col flex-grow'>
                    <div className='w-full h-64 pt-6 px-4'>
                        <img src={Product.thumbnail} alt="product-image" className='h-full w-full object-contain' />
                    </div>
                    <div className='flex flex-col p-4 flex-grow'>
                        <h5 className='font-semibold text-gray-800 text-xl mt-4'>{Product.title}</h5>
                        <h6 className='font-bold text-gray-800 mb-5'>${Product.price} <del className='font-semibold text-gray-400 text-sm'>{Product.genprice && `$${Product.genprice}`}</del></h6>
                        <button onClick={()=>addToCart(Product)} className='mt-auto self-start w-auto px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-semibold rounded flex items-center justify-center'>
                            <span className="mr-3"><FaShoppingCart /></span> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard