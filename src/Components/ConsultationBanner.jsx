const ConsulationBanner = () => {
    return (
      <div className="ConculationsBG bg-cover bg-center relative h-[590px]">
        {/* Overlay and Content */}
        <div className="bg-black w-full h-full bg-opacity-40 flex flex-col items-center justify-center text-center absolute top-0 left-0 right-0 bottom-0 px-4">
          {/* Text */}
          <div className="w-full max-w-[900px] px-4">
            <h1 className="text-3xl md:text-4xl sm:text-3xl font-light text-white md:flex md:flex-col md:gap-5">
              Ready to restore harmony in
              <span>your mind, body, and spirit?</span>
            </h1>
            <div className="mt-10 sm:mt-8">
              <button className="bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg py-3 px-6 sm:py-2 sm:px-4">
                Book a consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConsulationBanner;
  