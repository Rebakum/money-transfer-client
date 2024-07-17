import { BsFillSendArrowUpFill } from 'react-icons/bs';
import { MdAccountBalanceWallet, MdTransferWithinAStation } from 'react-icons/md';
import { TbTransferIn, TbTransferOut } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const OurServices = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="grid gap-6 px-10 md:grid-cols-2 lg:grid-cols-2">
                <Link to="/cash-in" className="flex flex-col items-center justify-center w-32 h-32 p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-full shadow-md hover:shadow-lg hover:border-2 hover:border-yellow-400">
                    <TbTransferIn className="text-4xl text-violet-600" />
                    <h2 className="mt-2 font-semibold text-gray-700">Cash-In</h2>
                </Link>
                <Link to="/cash-out" className="flex flex-col items-center justify-center w-32 h-32 p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-full shadow-md hover:shadow-lg hover:border-2 hover:border-yellow-400">
                    <TbTransferOut className="text-4xl text-violet-600" />
                    <h2 className="mt-2 font-semibold text-gray-700">Cash-Out</h2>
                </Link>
                <Link to="/balance-inquiry" className="flex flex-col items-center justify-center w-32 h-32 p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-full shadow-md hover:shadow-lg hover:border-2 hover:border-yellow-400">
                    <MdAccountBalanceWallet className="text-4xl text-violet-600" />
                    <h2 className="mt-2 font-semibold text-gray-700">Balance Inquiry</h2>
                </Link>
                <Link to="/send-money" className="flex flex-col items-center justify-center w-32 h-32 p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-full shadow-md hover:shadow-lg hover:border-2 hover:border-yellow-400">
                    <BsFillSendArrowUpFill className="text-4xl text-violet-600" />
                    <h2 className="mt-2 font-semibold text-gray-700">Send Money</h2>
                </Link>
                <Link to="/transactions" className="flex flex-col items-center justify-center w-32 h-32 p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-full shadow-md hover:shadow-lg hover:border-2 hover:border-yellow-400">
                    <MdTransferWithinAStation className="text-4xl text-violet-600" />
                    <h2 className="mt-2 font-semibold text-gray-700">Transactions History</h2>
                </Link>
            </div>
        </div>
    );
};

export default OurServices;
