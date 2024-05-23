import { GoogleLogin } from "@react-oauth/google";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import {BsBell, BsBookmark, BsEnvelope, BsInputCursorText} from "react-icons/bs";
import FeedCard from "@/Components/FeedCard/FeedCard";
import { CgOptions } from "react-icons/cg";
import { RiTwitterXFill } from "react-icons/ri";
import GoogleLoginButton from "@/Components/GoogleLoginButton";

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <CgOptions />,
  },
];

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen px-32 xl:px-96">
        {/* Left side bar */}
        <div className="col-span-1 xl:col-span-3 pt-1 px-4 text-sm xl:ml-32 flex flex-col items-end justify-start">
          <div className="text-3xl size-fit hover:bg-gray-700 p-3 rounded-full cursor-pointer translate-all">
            <RiTwitterXFill className="" />
          </div>
          <div className="mt-2 text-3xl xl:text-lg flex flex-col items-end">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-end items-start gap-2 xl:gap-4 hover:bg-gray-800 rounded-full p-3 xl:px-5 xl:py-2 w-fit cursor-pointer mt-1"
                  key={String(item.title)}
                >
                  <span className="">{item.icon}</span>
                  <span className="hidden xl:inline">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pl-3">
              <button className="bg-[#1d9bf0] font-semibold rounded-full xl:text-lg p-2 xl:w-full">
                <span className="xl:hidden">
                  <BsInputCursorText />
                </span>
                <span className="hidden xl:inline">Tweet</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-8 xl:col-span-6 border-x-[1px] border-gray-600">
          <FeedCard />
        </div>
        <div className="col-span-3">
          <div className="p-5 bg-slate-700 rounded-lg w-fit">
            <h1 className="my-2 text-lg">New to Twitter?</h1>
            <GoogleLoginButton/>
          </div>
        </div>
      </div>
    </>
  );
}
