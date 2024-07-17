import { Link } from 'react-router-dom';
import banner from '../../assets/images/bannar.png';
import click from '../../assets/images/click.png';
import './EntryPage.css';

const EntryPage = () => {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gray-800 bg-center bg-cover bg-opacity-30"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="w-[350px] h-[450px] bg-gray-100 opacity-70 border-white my-10 border-2 rounded-lg shadow-lg hover:border-2   bg-opacity-90 text-center p-6">
                <h1 className="mt-20 text-3xl font-bold text-yellow-500">WELCOME</h1>
                <h1 className="mt-2 text-xl text-yellow-500">MONEY TRANSFER</h1>
                <Link to="/Login">
                    <div className="flex items-center justify-center mt-10 smile">
                        <img className="w-24 h-24 rounded-full" src={click} alt="Click Here" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default EntryPage;
