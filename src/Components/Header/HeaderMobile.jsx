import { IoCloseCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const HeaderMobile = ({ closeMenu }) => {
    return (
        <div className='lg:hidden w-full h-screen fixed inset-0 bg-gray-300 backdrop-blur-md flex justify-center items-center'>
            <div className='relative flex flex-col gap-10  bg-slate-800 text-white h-fit w-3/4 md:w-2/4 p-10 rounded-md'>
                <IoCloseCircleOutline onClick={closeMenu} className='absolute top-5 right-5 text-3xl cursor-pointer hover:text-red-600' />
                <Link to={'/'} className='font-medium text-xl border-b border-gray-400 pb-2 hover:text-primary duration-300 mt-5'> Home </Link>
                <Link to={'/'} className='font-medium text-xl border-b border-gray-400 pb-2 hover:text-primary duration-300'> About </Link>
                <Link to={'/'} className='font-medium text-xl border-b border-gray-400 pb-2 hover:text-primary duration-300'> Find Doctor </Link>
                <Link to={'/'} className='font-medium text-xl border-b border-gray-400 pb-2 hover:text-primary duration-300'> Blog </Link>
                <Link to={'/'} className='font-medium text-xl border-b border-gray-400 pb-2 hover:text-primary duration-300'> Contact </Link>
            </div>
        </div>
    )
}

export default HeaderMobile
