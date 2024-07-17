import { IoSettingsSharp } from 'react-icons/io5';
import logo from "../../../assets/images/logo.png";

const Header = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-yellow-400 rounded-t-2xl">
            <img className='w-8 h-8 rounded-full' src={logo} alt={logo} />
            <p className='flex items-center justify-center gap-3 p-2 px-20 text-yellow-400 bg-white rounded-3xl'>
                <span>Tk</span>
                <span>0.00</span>
                </p>
            <p><IoSettingsSharp className='w-8 h-8 text-gray-50' /></p>

        </div>
    );
};

export default Header;