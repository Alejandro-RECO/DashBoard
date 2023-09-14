import Sidebar from "./componets/Sidebar";
import Header from "./componets/Header";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main
        className="
            lg:col-span-3 
            xl:col-span-5 
            p-10
            bg-gray-300
            h-[100vh]
            overflow-y-scroll">
        <Header />
        {/* section 1 */}
        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          mt-4
          gap-8 
          ">
          {/* Card 1 */}
          <div
            className="
              bg-primary-100
              p-8
              rounded-xl
              text-gray-300
              flex
              flex-col
              gap-6   
              ">
            <RiLineChartLine
              className="
                text-5xl"
            />
            <h4
              className="
              text-2xl
              ">
              Ernings
            </h4>
            <span
              className="
              text-5xl
              text-white
              ">
              € 8,350
            </span>
            <span
              className="
              px-3
              py-1
              bg-primary-300/40
              rounded-full
              text-sm">
              +10% since last month
            </span>
          </div>
          {/* card 2 */}
          <div
            className="
          bg-white
          rounded-xl
          flex
          flex-col
          justify-center
          drop-shadow-2xl
          ">
            {/* contenido 1 */}
            <div
              className="
            flex
            items-center
            gap-4
            bg-primary-100/30
            rounded-xl
            py-4
            px-2
            m-2
            shadow-xl
            ">
              <span
                className="
              bg-primary-100
              text-gray-300
              text-2xl
              font-bold
              p-4
              rounded-xl
              ">
                98
              </span>
              <div>
                <h3
                  className="
                font-bold">
                  Rank
                </h3>
                <p
                  className="
                text-gray-500
                ">
                  in top 30%
                </p>
              </div>
            </div>
            {/* Contenido 2 */}
            <div
              className="
            bg-primary-100/30
            rounded-xl
            py-4
            px-2
            m-2
            shadow-xl

            ">
              <div
                className="
              flex
              items-center
              gap-4
              pb-4">
                <span
                  className="
                bg-primary-100
                text-gray-300
                text-2xl
                font-bold
                p-4
                rounded-xl">
                  32
                </span>
                <div>
                  <h3 className="font-bold">Projects</h3>
                  <p className="text-gray-500">8 this mont</p>
                </div>
              </div>
              <div
                className="
              flex
              items-center
              justify-center
              gap-1
              pb-2
              ">
                <span
                  className="
                bg-primary-100/20
                rounded-full
                px-2
                py-1
                text-sm
                ">
                  Mobile app
                </span>
                <span
                  className="
                bg-primary-100/20
                rounded-full
                px-2
                py-1
                ">
                  Brending
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="
          col-span-1
          md:col-span-2
          flex
          flex-col
          justify-between">
            <h1
              className="
            text-2xl
            font-bold
            mb-8">
              Your Projects
            </h1>
            <div
              className="
            bg-white
            p-8
            rounded-xl
            drop-shadow-2xl
            flex
            flex-col
            gap-6">
              {/* Vista 1 */}
              <div
                className="
              flex
              items-center
              gap-4 
              ">
                <img
                  src="https://unavatar.io/karolaylocarno"
                  alt="Alejandro"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h1
                    className="
                  font-bold
                  text-lg
                  tracking-tighter
                  ">
                    Logo desing for Bakery
                  </h1>
                  <p
                    className="
                  text-gray-500
                  ">
                    1 day remaining
                  </p>
                </div>
              </div>
              {/* Vista 2 */}
              <div
                className="
              flex
              items-center
              gap-4 
              ">
                <img
                  src="https://unavatar.io/karolaylocarno"
                  alt="Alejandro"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h1
                    className="
                  font-bold
                  text-lg
                  tracking-tighter
                  ">
                    Logo desing for Bakery
                  </h1>
                  <p
                    className="
                  text-gray-500
                  ">
                    1 day remaining
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="font-bold pt-4 hover:text-primary-100 transition-colors hover:underline">
                  See all projects
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          mt-4
          gap-8 
        ">
          <div>
            <h1
              className="
            text-2xl
            font-bold
            mb-8">
              Recent invoices
            </h1>
            <div
              className="
            bg-white
            p-8
            rounded-xl
            shadow-2xl
            mb-4">
              {/* Ussuario 1 */}
              <div
                className="
              flex
              items-center
              justify-between
              gap-4
              mb-4">
                <div
                  className="
                flex
                items-center
                gap-4">
                  <img
                    src="https://unavatar.io/Williams"
                    className="
                  w-14
                  h-14
                  object-cover
                  rounded-xl
                  "
                  />
                  <div>
                    <h3 className="font-bold">Alexander Williams</h3>
                    <p className="text-gray-500w">1 day remaining</p>
                  </div>
                </div>
                <span
                  className="
                bg-green-50
                text-green-800
                py-1
                px-3
                rounded-full
                font-medium">
                  paid
                </span>
                <span className="font-bold">€1,200.87</span>
              </div>
              {/* Usuario 2 */}
              <div
                className="
              flex
              items-center
              justify-between
              gap-4
              mb-4">
                <div
                  className="
                flex
                items-center
                gap-4">
                  <img
                    src="https://unavatar.io/Philips"
                    className="
                  w-14
                  h-14
                  object-cover
                  rounded-xl
                  "
                  />
                  <div>
                    <h3 className="font-bold">John Philips</h3>
                    <p className="text-gray-500w">1 day remaining</p>
                  </div>
                </div>
                <span
                  className="
                bg-red-50
                text-red-800
                py-1
                px-3
                rounded-full
                font-medium">
                  Late
                </span>
                <span className="font-bold">€12,986.88</span>
              </div>
            </div>

            {/* Card 2 section 2 */}
            <div
              className="
            bg-primary-900/90
            text-gray-300
            p-8
            rounded-xl
            shadow-2xl
            flex
            items-center
            justify-between
            flex-wrap gap-4">
              <div>
                <RiHashtag
                  className="
                text-4xl
                -rotate-12
                "
                />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button
                className="
                bg-primary-100 
                py-2 
                px-6 
                rounded-xl 
                text-white
                hover:bg-gray-200
                hover:text-primary-100
                transition-colors
                w-full
                xl:w-auto">
                  Join Now
                </button>
              </div>
   
            </div>
          </div>
          {/* Card 3 section 2 */}
          <div>
            <h1
              className="
              text-2xl
              font-bold
              mb-8">
              Recommended projects
            </h1>
            <div
              className="
            bg-white
              p-8
              rounded-xl
              shadow-2xl
              mb-4
              flex
              flex-col
              gap-5">
              <div
                className="
                flex
                flex-col
                lg:items-center
                justify-between
                gap-4">
                <div
                  className="
                  flex
                  items-center
                  gap-4">
                  <img
                    src="https://unavatar.io/Thomas"
                    alt="Manuel"
                    className="
                      h-12
                      w-12
                      rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Thomas Martin</h3>
                    <p className="text-gray-500">Updated 10m ago</p>
                  </div>
                </div>
                <div className="w-full">
                  <span
                    className="
                    
                    bg-primary-100
                    py-2
                    px-4
                    rounded-full
                    text-white
                    text-sm">
                    Desing
                  </span>
                </div>
              </div>
              <div className="">
                <h5 className="text-lg font-bold tracking-normal">
                  Need a designer to form branding assentials for my business.{" "}
                </h5>
                <p className="text-gray-500 tracking-tight">
                  Looking for a talented brand designer to create all the
                  brandingmaterial my new startup{" "}
                </p>
              </div>
              <div
                className="
                bg-primary-100/20
                flex
                flex-col
                xl:flex-row
                items-center
                justify-between
                gap-4
                p-6
                rounded-lg
                ">
                <div>
                  <sup className="text-xs text-gray-500">€</sup>
                  <span className="text-2xl font-bold">8,700</span> 
                  <span className="text-sm text-gray-500">/Month</span>
                </div>
                <div>
                  <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">Full time</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
