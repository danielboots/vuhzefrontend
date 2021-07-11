const Info = () => {
  return (
    <div className="relative bg-gray-900 font-body ">
      <div className="h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-thin uppercase tracking-wider text-gray-600">
            About Optimal Surgical
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Professional Medical Services
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Optimal Surgicals dedicated team of professionals curated by us to
            ensure we maintain the highest quality of results and work. We can
            handle your project from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
