/*
  This NewsLetter requires Tailwind CSS v2.0+ 
  
  This NewsLetter requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function NewsLetter() {
  return (
    <div className="bg-coolgray-800 pt-1 font-body">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="mt-2 text-white text-3xl font-bold  sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-coolgray-300">
            We love to keep in touch, if you want the latest upto date info
            about Vuhze
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-transparent placeholder-coolgray-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-coolgray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-coolgray-700 hover:bg-medblue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-coolgray-800 focus:ring-medblue-500"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-coolgray-300">
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-white font-medium underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
