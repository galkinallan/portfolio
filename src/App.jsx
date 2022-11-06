import "./App.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {
  const [shade, setShade] = useState(70);
  useEffect(() => {
    var c = document.getElementById("canv");
    var $ = c.getContext("2d");

    var col = function (x, y, r, g, b) {
      $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      $.fillRect(x, y, 1, 1);
    };
    var R = function (x, y, t) {
      return Math.floor(shade + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    var G = function (x, y, t) {
      return Math.floor(
        shade +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    var B = function (x, y, t) {
      return Math.floor(
        shade +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    var t = 0;
    var x;
    var y;

    var run = function () {
      for (x = 0; x <= 35; x++) {
        for (y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.02;
      window.requestAnimationFrame(run);
    };

    run();
  }, [shade]);

  const [darkMode, setDarkMode] = useState(true);

  function changeMode() {
    setDarkMode(!darkMode);
    setShade(darkMode ? 192 : 70);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="min-h-full isolate px-10 ">
        <div className="canvas-container">
          <canvas id="canv" width="32" height="32"></canvas>
        </div>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="title text-3xl text-cyan-600 ">My portfolio ;)</h1>
          <ul className="flex items-center">
            <li>
              <label className="swap swap-rotate items-center">
                <input type="checkbox" />
                <svg
                  className="swap-on fill-current w-10 h-10 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={changeMode}
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>

                <svg
                  className="swap-off fill-current w-10 h-10 text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={changeMode}
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              </label>
            </li>
            <li>
              <a
                className=" bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md ml-8 "
                href="https://drive.google.com/file/d/1VxrjTP7BKddW0kKgL9y-D7i4vtJciYf0/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className=" text-center p-8 pb-1 ">
          <h3 className="name text-gradie">
            <span
              className={
                darkMode
                  ? " bg-gradient-to-r from-white to-teal-500 text-5xl py-2 font-medium text-transparent bg-clip-text"
                  : " bg-gradient-to-r from-black to-teal-500 text-5xl py-2 font-medium text-transparent bg-clip-text"
              }
            >
              Allan
            </span>
            <span
              className={
                darkMode
                  ? " bg-gradient-to-r from-teal-500 to-white text-5xl py-2 font-medium text-transparent bg-clip-text"
                  : " bg-gradient-to-r from-teal-500 to-black text-5xl py-2 font-medium text-transparent bg-clip-text"
              }
            >
              {" "}
              Galkin{" "}
            </span>
          </h3>
          <h3
            className=" text-2xl py-6
           dark: dark:text-white"
          >
            FullStack Software Engineer
          </h3>
          <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
            I am Creative, detail-oriented, software engineer with a deep
            interest in full-stack development. Proven track record of creating
            and implementing successful front and back end web applications.
            Looking to bring my skills to a tech company with global reach.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 mb-2">
          <a href="https://github.com/galkinallan" target="_blank">
            <AiFillGithub className="dark:text-white" />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <AiFillYoutube className="dark:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/allan-galkin/" target="_blank">
            <AiFillLinkedin className="dark:text-white" />
          </a>
        </div>
        <div className=" mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
          <img className=" ml-1 object-fill" src="../22.png" alt="" />
        </div>
      </section>

      <section className="px-10 xl:px-40 ">
        <hr className=" mt-10" />

        <h3
          className=" text-2xl py-6
           dark: dark:text-white text-center"
        >
          Recent Projects
        </h3>

        <div className="flex flex-wrap justify-evenly ">
          <Post
            title="Ecommerce EarMix App"
            text="Fully functional and responsive ecommerce app with fast product managment, thanks to Sanity"
            image="../../ecommerse.png"
            tech="HTML, CSS, JavaScript, Next.js, React, Sanity"
            mode={darkMode}
            link="https://ecommerce-earmix.vercel.app/"
          />
          <Post
            title="Memories App"
            text="Perfect app to save, delete, like, edit and share memories with your friends !"
            image="../../memories.png"
            tech="HTML, CSS, JavaScript, React, Redux, Material-UI, Node"
            mode={darkMode}
            link="https://galkinallan-memories.netlify.app/"
          />
          <Post
            title="Portfolio App"
            text="My personal portfolio with my recent projects and email form"
            image="../../personal.png"
            tech="HTML, CSS, JavaScript, React,  Tailwind"
            mode={darkMode}
            link="#"
          />
          <Post
            title="Happy Notes"
            text="Users can login to their profile and add, edit, delete or mark done their own list of notes "
            image="../../todos.png"
            tech="HTML, CSS, JavaScript, Node"
            mode={darkMode}
            link="https://galkinallan-happynotes.cyclic.app/"
          />
          <Post
            title="Bimber App"
            text="My little tinder clone with functional swipes "
            image="../../bimber.png"
            tech="HTML, CSS, JavaScript, React, Node, Axios"
            mode={darkMode}
            link="#"
          />
          <Post
            title="Spectral Salon"
            text="A fully responsive, beautiful, and modern website for a local hair salon "
            image="../../salon.png"
            tech="HTML, CSS, JavaScript"
            mode={darkMode}
            link="https://galkinallan-salon.netlify.app/"
          />
        </div>
      </section>

      <section className="px-10 xl:px-40 ">
        <hr className=" mt-10" />
        <h3
          className=" text-2xl py-6
           dark: dark:text-white text-center"
        >
          Contact me
        </h3>
        <div className="dark:bg-gray-700 max-w-full p-10  rounded-md  bg-gray-300 flex justify-around flex-wrap">
          <form
            action="https://formsubmit.co/galkinallan@gmail.com"
            method="POST"
          >
            <input
              className=" block rounded-md text-center h-10 w-80 dark:bg-gray-300 border-black  border-solid border-2"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className=" block rounded-md text-center mt-5 h-10 w-80 dark:bg-gray-300 border-black  border-solid border-2"
              type="text"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="rounded-md mt-5 text-center block dark:bg-gray-300 border-black  border-solid border-2"
              name="message"
              id=""
              cols="38"
              rows="10"
              placeholder="Your message"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-800 to-blue-500 text-white rounded-md mt-5 h-10 w-full"
            >
              Send It!
            </button>
          </form>
          <div className="dark:text-white max-w-full text-sm md:text-3xl flex flex-col justify-around overflow-auto">
            <a
              className="text-center block bg-gradient-to-r mt-3 w-full from-green-800 to-blue-500 text-white px-4 py-2 rounded-md "
              href="https://drive.google.com/file/d/1VxrjTP7BKddW0kKgL9y-D7i4vtJciYf0/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
            <div className="flex  mt-3 w-full justify-center items-center rounded-lg p-3 border-black dark:border-gray-300 border-solid border-2">
              <AiFillPhone />
              <span className="ml-3"> +972 55-9918007</span>
            </div>
            <div className="flex w-full items-center mt-3  overflow-auto  rounded-lg p-3 border-black dark:border-gray-300 border-solid border-2">
              <AiOutlineMail />
              <span className="ml-3 w-full "> galkinallan@gmail.com</span>
            </div>
            <div className="text-2xl md:5xl w-full flex justify-center gap-16 py-3 mb-2 ">
              <a href="https://github.com/galkinallan" target="_blank">
                <AiFillGithub className="dark:text-white" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <AiFillYoutube className="dark:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/allan-galkin/"
                target="_blank"
              >
                <AiFillLinkedin className="dark:text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
