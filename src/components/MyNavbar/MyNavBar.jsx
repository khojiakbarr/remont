import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import tel from "../../assets/images/tel.svg";
import insta from "../../assets/images/insta.svg";
import youtube from "../../assets/images/youtube.svg";
import tg from "../../assets/images/tg.svg";
import tel_icon from "../../assets/images/telefon_icon.svg";
import Button from "../Button/Button";

export default function MyNavBar() {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 400) {
      setState(true);
    }
  }, []);

  return (
    <>
      <header className="">
        <div className="bg-nav overflow-hidden w-full h-[180px] md:h-[380px] absolute ring-0 top-0 z-[-1] "></div>
        <div className="animate_wrapper">
          <div className=" scroller flex gap-10">
            <div className="flex">
              <img className="w-[24px] xl:w-[74px]" src={tel_icon} alt="" />
              <span className="text-[20px] text-[#593f0d] xl:text-[54px]">
                +998 99 722 47 53
              </span>
            </div>
            <div className="flex">
              <img className="w-[24px] xl:w-[74px]" src={tel_icon} alt="" />
              <span className="text-[20px] text-[#593f0d] xl:text-[54px]">
                +998 99 722 47 53
              </span>
            </div>{" "}
            <div className="flex">
              <img className="w-[24px] xl:w-[74px]" src={tel_icon} alt="" />
              <span className="text-[20px] text-[#593f0d] xl:text-[54px]">
                +998 99 722 47 53
              </span>
            </div>
          </div>
        </div>
        <nav className="navbar flex container mx-auto px-[15px] w-full mt-[10px] items-center ">
          <Link to="/">
            <img className={` w-[80px] md:w-[200px]`} src={logo} alt="logo" />
          </Link>
          <ul className={` flex gap-[6px] items-center md:gap-[12px]`}>
            <li className=" w-[50px] md:w-auto">
              {state ? (
                <div className=" text-[8px] text-white flex items-center ml-[10px]">
                  <Button text="Связаться" />
                </div>
              ) : (
                <Link
                  className=" text-[8px] text-white md:text-[24px] ml-[20px] "
                  to={"/"}
                >
                  <span className="md:w-[100px] ">
                    Связаться с нами чере месседжеры
                  </span>
                </Link>
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
