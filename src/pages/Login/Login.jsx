import { Link } from 'react-router-dom';
import banner from '../../assets/images/bannar.png';
import logo from '../../assets/images/logo.png';

const Login = () => {
    return (
        <div
         className="relative flex items-center justify-center min-h-screen "
         >
            {/* Banner Image */}
            <img className="absolute top-0 left-0 object-cover w-full h-full" src={banner} alt="Banner" />

            {/* Overlay for Darker Background on Image */}
            <div className="absolute top-0 left-0 w-full h-full "></div>

            {/* Login Form */}
            <div className="relative z-10 w-full max-w-md p-8 bg-gray-100 border-2 rounded-lg shadow-lg opacity-70">
            <div className="flex items-center justify-center rounded-full">
                <img className="text-center rounded-full shadow-2xl size-32" src={logo} alt={logo} />
                </div>
                <h2 className="text-3xl font-semibold text-center text-yellow-500">Sign in to your account</h2>

                <form noValidate="" className="mt-6 space-y-4">
                    <div className="flex flex-col gap-5">
                        <label htmlFor="email" className="sr-only">Email / Mobile Number</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email address/Mobile number"
                            // value={identifier}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-50 focus:border-violet-600 focus:ring-2 focus:ring-violet-600"
                        />
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            type="password"
                            // value={pin}
                            placeholder="Entry your Pin"
                            className="px-4 py-2 -mt-1 border border-gray-300 rounded-md text-gray-50 focus:border-violet-600 focus:ring-2 focus:ring-violet-600"
                        />
                    </div>
                    <div className="">
                        <a className="text-sm text-gray-800" href="/">Forgot your password?</a>
                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold text-white bg-yellow-300 rounded hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600">
                        Sign in
                    </button>
                    <p className='flex items-center justify-between'>

                        <small className="text-sm text-gray-800" >You are  a new please </small>
                        <Link to='/register' className="text-sm font-bold text-black" >Register Now</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
