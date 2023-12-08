import Link from "next/link";
// import bg from '/bg-video.mp4'
// import bg from "../../../constants/index";
// import main from '../../../public/bg-video.mp4'
// type Props = {
//   main?: string;
// };
export default function About() {
  return (
    <div className="max-w-7xl mx-auto h-screen mt-16 items-center">
      <div className="  gap-8 items-center  flex flex-col md:flex md:flex-row   ">
        <div className=" w-full    top-0 ">
          <video
            className=" rounded-lg w-full    z-0"
            src={require("../../../public/bg-video.mp4")}
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="">
          <h1 className="text-6xl md:text-7xl  font-extrabold   text-slate-700 tracking-wider">
            Explore
          </h1>

          {/*  */}
          <h1
            style={{ fontWeight: "bolder" }}
            className="text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-br from-orange-500 to-blue-700 "
          >
            NFT marketplace
          </h1>
          <p className="text-slate-700 text-[20px] font-medium">
            One of the largest NFT marketplace around the world. Keep creating,
            sell anytime, anywhere
          </p>
          <button className="mt-4 bg-orange-500 px-12 py-2 rounded-[50px] font-medium    text-white">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
