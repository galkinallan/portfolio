export default function Post(props) {
  return (
    <div className="post dark:bg-gray-700 max-w-md p-2 rounded-md m-2 mb-10 bg-gray-300 ">
      <a href={props.link} target="_blank">
        <div className="m-auto relative  w-90 h-70 overflow-hidden">
          <img
            className="object-fill w-90 h-70 rounded-md"
            src={props.image}
            alt=""
          />
        </div>
        <section className="px-2 mt-1 h-1/4 text-gray-800 dark:text-gray-100">
          <h3 className=" text-2xl text- text-center font-semibold">
            {props.title}
          </h3>
          <p className="text-center">{props.text}</p>
          <p className="  mt-auto text-center dark:text-cyan-500 text-cyan-800">
            {props.tech}
          </p>
        </section>
      </a>
    </div>
  );
}
