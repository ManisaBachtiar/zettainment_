import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";

const Content: React.FC = () => {
    return (
        <div id="Content" className=" scroll-mt-96 md:scroll-mt-72 mx-auto max-w-7xl bg-another pb-16">
        <div className="lg:w-3/4 py-9 px-9 lg:px-0 grid grid-cols-4 gap-4 max-w-7xl mx-auto">
          <div className="rounded-lg bg-blue-200 col-span-2">
            <img
              className="lg:h-72 h-40 w-[30rem] rounded-lg"
              src={img1}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="bg-green-200 col-span-1 row-span-2 rounded-lg">
            <img
              src={img2}
              className="lg:h-[28.5rem] sm:h-[15.2rem] h-[14rem] rounded-lg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="rounded-lg bg-yellow-200 col-span-1">
            <img
              src={img3}
              className="lg:h-72 h-40 w-96 rounded-lg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="bg-red-200 col-span-1 rounded-lg">
            <img
              className="rounded-lg"
              src={img4}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="bg-red-200 col-span-1 rounded-lg">
            <img
              className="rounded-lg"
              src={img4}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="bg-red-200 col-span-1 rounded-lg">
            <img
              className="rounded-lg"
              src={img5}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
}

export default Content;