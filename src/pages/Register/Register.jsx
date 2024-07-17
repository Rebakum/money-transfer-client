import { Link } from "react-router-dom";
import banner from "../../assets/images/bannar.png";
import logo from "../../assets/images/logo.png";

const Register = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
            style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="w-full max-w-md p-8 space-y-4 bg-gray-100 rounded-lg shadow-md opacity-70 backdrop-filter backdrop-blur-md">
                <div className="flex items-center justify-center rounded-full">
                <img className="text-center rounded-full shadow-2xl size-32" src={logo} alt={logo} />
                </div>
                <h1 className="text-2xl font-bold text-center text-yellow-400">User Registration</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            type="text"
                            id="name"
                             placeholder="Entry Your Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
                        <input
                            type="text"
                            id="mobileNumber"
                             placeholder="Entry Mobile Number"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email/</label>
                        <input
                            type="email"
                            id="email"
                             placeholder=" Entry Your Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pin" className="sr-only">PIN</label>
                        <input
                            type="password"
                            id="pin"
                             placeholder="Entry Your Pin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-3 mt-4 font-semibold text-white bg-yellow-300 rounded-lg hover:bg-yellow-400focus:outline-none focus:ring-2 focus:ring-violet-600">
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/login" className="text-sm text-gray-800 ">Already have an account? Login here</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
