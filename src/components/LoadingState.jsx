
const LoadingState = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default LoadingState;