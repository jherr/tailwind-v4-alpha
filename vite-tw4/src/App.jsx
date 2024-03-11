function App() {
  return (
    <div className="@container">
      <main className="max-w-5xl mx-auto mt-5 @xl:flex @xl:flex-wrap">
        <div className="p-5 w-full @xl:w-1/2 flex flex-col @xl:flex-row">
          <img
            src="https://www.themoviedb.org/t/p/w1280/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
            alt="Dune 2"
            className="w-full @xl:w-1/2 rounded-t-xl max-h-64 @xl:max-h-none object-cover @xl:rounded-l-xl @xl:rounded-r-none"
          />
          <div className="w-full @xl:w-1/2 @xl:pl-2">
            <div className="title">Dune: Part Two</div>
            <div>
              Follow the mythic journey of Paul Atreides as he unites with Chani
              and the Fremen while on a path of revenge...
            </div>
          </div>
        </div>

        <div className="p-5 w-full @xl:w-1/2 flex flex-col @xl:flex-row">
          <img
            src="https://www.themoviedb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
            alt="Dune"
            className="w-full @xl:w-1/2 rounded-t-xl max-h-64 @xl:max-h-none object-cover @xl:rounded-l-xl @xl:rounded-r-none"
          />
          <div className="w-full @xl:w-1/2 @xl:pl-2">
            <div className="title">Dune</div>
            <div>
              Paul Atreides, a brilliant and gifted young man born into a great
              destiny beyond his understanding, must travel to the most
              dangerous planet in the universe...
            </div>
          </div>
        </div>

        <div className="p-5 w-full @xl:w-1/2 flex flex-col @xl:flex-row">
          <img
            src="https://www.themoviedb.org/t/p/w1280/r2KIIlSE97h3sSvaWeP89xlzxTX.jpg"
            alt="Dune Messiah"
            className="w-full @xl:w-1/2 rounded-t-xl max-h-64 @xl:max-h-none object-cover @xl:rounded-l-xl @xl:rounded-r-none"
          />
          <div className="w-full @xl:w-1/2 @xl:pl-2">
            <div className="title">Dune Messiah</div>
            <div>Fingers crossed we get this one...</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
