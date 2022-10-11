export const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="p-8 bg-white border rounded shadow-sm">
          <a
            href="/"
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            What is the purpose of React-router?
          </a>
          <p className="mb-5 text-gray-700">
            The main purpose of react-router is to supply the browser with an
            asynchronous URL that corresponds to the data that will show on the
            web page. It is mainly used to create single-page web apps since it
            retains the application's regular structure and functionality.In the
            application, React Router is utilized to define various routes. When
            a user enters a URL into your browser and the URL route equals one
            of several 'pathways' as in the router folder, the user is sent to
            that route.
          </p>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <a
            href="/"
            aria-label="Article"
            title="Happy new Year"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            How does Context API works?
          </a>
          <p className="mb-5 text-gray-700">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. It returns a
            consumer and a provider. Provider is a component that as it's names
            suggests provides the state to its children. It will hold the
            "store" and be the parent of all the components that might need that
            store. Consumer as it so happens is a component that consumes and
            uses the state.
          </p>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <a
            href="/"
            aria-label="Article"
            title="Why i love C++"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Details of useRef
          </a>
          <p className="mb-5 text-gray-700">
            The useRef is a hook that permits to without delay create a
            connection with the DOM detail withinside the practical component.
           <br />
            The useRef returns a mutable ref object. This object has a property
            called .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialised to the
            passed argument <span className="text-orange-500 font-bold ">initialValue e.g. useRef(initialValue)</span>. The object
            can persist a value for a full lifetime of the component.
          </p>
        </div>
      </div>
    </div>
  );
};
