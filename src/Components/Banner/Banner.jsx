import './Banner.css'
const Banner = () => {
    return (
        <div className="grid grid-cols-2 justify-center items-center bg-[#FFFFFF]  mx-3 font">
            <div className="my-10 space-y-4 ">
                <h1 className="lg:text-7xl text-3xl font-bold lg:font-bold lg:leading-[80px] leading-1">One Step Closer To Your <span className="color">Dream Job</span></h1>
                <p className="font-medium text-base text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <div>
              <img className="object-fill" src="/src/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;