import { FaHome } from 'react-icons/fa';
import { GrOverview } from 'react-icons/gr';
import { IoLogOut } from 'react-icons/io5';
import { MdTransferWithinAStation } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
           <nav className="flex items-center justify-between p-4 text-white bg-yellow-400 rounded-t-3xl">
            <ul className="flex items-center justify-start flex-grow gap-3 space-x-4 lg:flex-row">
                
             
                <li><Link to="/home"><FaHome className='w-8 h-8' /></Link></li>
                <li><Link to="/overview"><GrOverview className='w-8 h-8' /></Link></li>
                <li><Link to="/transactions"><MdTransferWithinAStation  className='w-8 h-8' /></Link></li>
               

            </ul>
            <ul>
            <li><Link to="/login"><IoLogOut className='w-8 h-8'/></Link></li>
            </ul>
        </nav>
        </div>
    );
};

export default Navber;