const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 opacity-30">
            <div className="text-center">
                <svg
                    className="w-48 h-48 mx-auto mb-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                        fill="currentColor"
                    />
                </svg>
                <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
                <p className="mb-8 text-gray-600">
                    Sorry, the page you are looking for does not exist.
                </p>
                <a
                    href="/"
                    className="px-4 py-2 font-semibold text-white bg-yellow-300 rounded-lg hover:bg-yellow-400"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
