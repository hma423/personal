import "./globals.css"
import './App.css'
import { Tabs } from "./components/ui/Tabs";

import Projectprops from "./components/Projectprops";
import Carousel from "./components/Carosuel";
import introimage from "./assets/images/introimage.png"

function App() {

  const tabs = [
    {
      title: "intro",
      value: "intro",
      content: (
        <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden rounded-2xl p-10 text-xl md:text-4xl text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="font-bold mb-4">Hi! I'm Henry,</p>
          <p className="text-xl">I'm currently a junior studying Computer Science at Northwestern University.</p>
          <p className="text-xl">Thanks for taking the time to look at my personal website.</p>
          <p className="mb-4 text-xl">I hope this can give a little more information about my interests and hobbies!</p>
          <img src={introimage} alt="Henry" className="max-w-full max-h-full self-center" />
        </div>



      ),
    },
    {
      title: "projects",
      value: "projects",
      content: (
        <div className=" justify-center items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-neutral-300 to-neutral-300">
          <p className = "mb-14 text-slate-600">projects</p>
          <Projectprops />

        </div>

      ),
    },
    {
      title: "hobbies",
      value: "Hobbies",
      content: (
        <div className="overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-300 to-sky-300">
          <p className="text-center">hobbies</p>
          <p className="mt-4 text-sm text-center">here are some of my hobbies!</p>
          <div className=" max-w-4xl mt-2">
            <Carousel />
          </div>
        </div>
      ),
    },
    // {
    //   title: "designs",
    //   value: "designs",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>designs</p>
    //       <p className = "mt-4 -mb-16 text-sm">check out some cool designs ive made over the past few years</p>
    //       <ImageGallery/>

    //     </div>
    //   ),
    // },
  ];

  return (
    <>
    <body>
    <div className = "-mb-36">
      <h1>henry ma</h1>
      <h2>sometimes i code...</h2>
    </div>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items- justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
    </body>

    </> 

  )
}

export default App
