import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import tel from "../../assets/images/tel.svg";
import insta from "../../assets/images/insta.svg";
import youtube from "../../assets/images/youtube.svg";
import tg from "../../assets/images/tg.svg";
import tel_icon from "../../assets/images/telefon_icon.svg";
import "../../components/Button/style.css";
export default function MyNavBar() {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1024) {
      setState(true);
    }
  }, []);

  return (
    <>
      <header className="">
        <div className=" relative z-[2]">
          <div className="bg-nav overflow-hidden w-full h-[180px] md:h-[380px] absolute ring-0 top-0 "></div>
        </div>
        <div className="animate_wrapper relative z-[3]">
          <div className="scroller flex gap-10">
            <Link to={"tel:+998997224753"}>
              <div className="flex items-center">
                <img
                  className="w-[24px] md:w-[30px] xl:w-[74px]"
                  src={tel_icon}
                  alt=""
                />
                <span className="nomer text-[13px] text-[#593f0d] md:text-[54px] xl:text-[64px]">
                  +998 99 722 47 53
                </span>
              </div>
            </Link>
          </div>
        </div>

        <nav className=" relative navbar flex container mx-auto px-[15px] w-full md:mt-[10px] items-center z-10  ">
          <Link to="/">
            <img
              className={` w-[100px] md:w-[200px] mt-[8px]`}
              src={logo}
              alt="logo"
            />
          </Link>
          <ul className={` flex gap-[6px] items-center md:gap-[12px]`}>
            <li className=" w-[50px] md:w-auto">
              {!state && (
                <div className=" text-[8px] text-white md:text-[24px] ml-[20px] ">
                  <span className="md:w-[100px] ">
                    Связаться с нами чере месседжеры
                  </span>
                </div>
              )}
            </li>
            <li className={`${state ? "hidden" : "block"} w-[30px]`}>
              <Link to={"/"}>
                <img className="w-full" src={insta} alt="" />
              </Link>
            </li>
            <li className={`${state ? "hidden" : "block"} w-[30px]`}>
              <Link to={"/"}>
                <img className="w-full" src={youtube} alt="" />
              </Link>
            </li>
            <li className={`${state ? "hidden" : "block"} w-[30px]`}>
              <Link to={"/"}>
                <img className="w-full" src={tel} alt="" />
              </Link>
            </li>
            <li className={`${state ? "hidden" : "block"} w-[30px]`}>
              <Link to={"/"}>
                <img className="w-full" src={tg} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
