import React, { useState } from "react";
import MyNavBar from "../components/MyNavbar/MyNavBar";
import Hero from "../components/Hero/Hero";
import PlanCard from "../components/Cards/PlanCard";
import FacilitiesCard from "../components/Cards/FacilitiesCard";
import card_1 from "../assets/images/card_1.png";
import card_2 from "../assets/images/card_2.png";
import card_3 from "../assets/images/card_3.png";
import bg_card from "../assets/images/bg_gradient.png";
import kraska from "../assets/images/kraska.svg";
import "../components/Button/style.css";
import { Link } from "react-router-dom";
import TheForm from "../components/TheForm/TheForm";
import Doverya from "../components/Doverya/Doverya";
import Contact from "../components/Contact/Contact";
import BasicAccordion from "../components/Accordion/BasicAccordion";
import FiveShag from "../components/FiveShag/FiveShag";
import Companies from "../components/Companies/Companies";
import TheCarusel from "../components/Carosel/TheCarusel";
import tel from "../assets/images/telefon_icon.svg";
import insta from "../assets/images/insta.svg";
import youtube from "../assets/images/youtube.svg";
import tg from "../assets/images/tg.svg";
import tel_icon from "../assets/images/tel.svg";

export default function Home() {
  const [state, setState] = useState(false);
  return (
    <>
      <div className={`relative z-[999999]  duration-150 `}>
        <div
          style={{
            transition: "all 0.4s",
            transform: `translateY(${state ? "0%" : "-100%"})`,
          }}
          className="flex flex-col justify-between  items-center fixed w-full h-screen bg-[#ff88009c] backdrop-blur-[5px] "
        >
          <div>
            <div className="flex justify-center">
              <h3 className="bg-[#ffffff] shadow-[1px_10px_30px_black] flex justify-center items-center gap-[10px] mt-[40px] py-[5px] px-[10px] w-[300px] rounded-[10px]">
                You tube
                <span>
                  <img src={youtube} alt="" />
                </span>
              </h3>
            </div>
            <div className="flex justify-center">
              <h3 className="bg-[#ffffff] shadow-[1px_10px_30px_black] flex justify-center items-center gap-[10px] mt-[40px] py-[5px] px-[10px] w-[300px] rounded-[10px]">
                insta
                <span>
                  <img src={insta} alt="" />
                </span>
              </h3>
            </div>
            <div className="flex justify-center">
              <h3 className="bg-[#ffffff] shadow-[1px_10px_30px_black] flex justify-center items-center gap-[10px] mt-[40px] py-[5px] px-[10px] w-[300px] rounded-[10px]">
                Telegram
                <span>
                  <img src={tg} alt="" />
                </span>
              </h3>
            </div>{" "}
            <div className="flex justify-center">
              <h3 className="bg-[#ffffff] shadow-[1px_10px_30px_black] flex justify-center items-center gap-[10px] mt-[40px] py-[5px] px-[10px] w-[300px] rounded-[10px]">
                Telefon
                <span>
                  <img src={tel_icon} alt="" />
                </span>
              </h3>
            </div>
          </div>
          <button
            onClick={() => setState(false)}
            className="bg-[#171B20] text-white px-[20px] py-[15px] md:px-[30px] md:py-[20px] inline-block text-[13px] font-bold rounded-[15px] md:rounded-[20px] cursor-pointer shadow-[1px_10px_30px_black] mb-[40px]"
          >
            Close
          </button>
        </div>
      </div>
      <div className="relative z-[999]">
        <div className=" fixed bottom-[20px] md:bottom-[15px] right-[15px]">
          <button
            onClick={() => {
              setState(true);
            }}
            className=" shadow-[1px_2px_3px_#000] bg-[#ff8800] px-[14px] py-[10px] flex justify-center flex-col items-center text-[13px] font-bold rounded-[10px]"
          >
            <span>
              <img className="w-[30px] md:w-[50px]" src={tel} alt="" />
            </span>
            Связаться
          </button>
        </div>
      </div>
      <MyNavBar />
      <Hero />
      <div className="flex flex-col items-center mt-[30px] md:mt-[50px]">
        <h2 className="w-auto md:w-[660px] text-[23px] md:text-[40px] text-center px-[15px] font-[700]">
          С<span className="font-bold text-[#ff8a00]"> 2015 года </span>{" "}
          отремонтировали более
          <span className="font-bold text-[#ff8a00]">160 объектов</span>
        </h2>
        <h3 className="text-[15px] md:w-[750px] md:text-[25px] text-center text-[#593f0d]">
          От небольших студий до ресторанов на высоте 100 метров
        </h3>
      </div>
      <div className="flex gap-[20px] md:gap-[40px] justify-center mt-[10px] flex-wrap p-[15px] relative container">
        <FacilitiesCard images={bg_card} /> <FacilitiesCard images={bg_card} />
        <FacilitiesCard images={bg_card} />
        <FacilitiesCard images={bg_card} />
        <div className="hidden md:block xl:w-[200px] absolute  bottom-[-150px] xl:bottom-[-80px] right-0">
          <img className="w-full" src={kraska} alt="kraska" />
        </div>
      </div>
      <div className="flex  justify-center my-[70px]">
        <button className="button  px-[30px] md:px-[50px] pt-[15px] pb-[15px] md:pt-[30px] md:pb-[20px] rounded-[20px] shadow-xl text-[15px] font-[700]">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </button>
      </div>

      <div className="flex flex-col items-center gap-[15px] md:gap-[29px] mt-[30px] md:mt-[54px]">
        <h2 className="w-auto md:w-[660px] text-[20px] md:text-[40px] text-center">
          Предлагаем самые
          <span className="font-bold text-[#ff8a00]">
            {" "}
            выгодные решения
          </span>{" "}
          для
        </h2>
        <h3 className="text-[18px] md:w-[750px] md:text-[25px] text-center text-[#593f0d]">
          Выберите тариф, который вам подходит
        </h3>

        <div className="flex  gap-[10px] md:gap-[40px] justify-center flex-wrap">
          <PlanCard image={card_1} />
          <PlanCard image={card_2} />
          <PlanCard image={card_3} />
        </div>
        <Link to={"/"}>
          <h2 className=" underline text-[#593f0d] text-center text-xl md:text-[25px] font-normal mb-[20px] md:mb-[40px]">
            Индивидуальный проект узнать подробнее
          </h2>
        </Link>
      </div>
      <TheForm />
      <Doverya />
      <Contact />
      <FiveShag />
      <Companies />
      <TheCarusel />
      <div className="container">
        <h2 className="text-[30px]  md:text-[40px] font-bold text-center text-[#593f0d] mb-[20px] mt-[100px]">
          Остались вопросы?
        </h2>

        <div className="max-w-[1060px] mx-auto mt-[30px] mb-[100px]">
          <BasicAccordion />
        </div>
      </div>

      <div className="container my-[100px] px-[15px]">
        <div className="flex shadow-[1px_1px_18px_-8px_#000] p-[10px] md:p-[25px] lg:p-[55px] rounded-[5px] flex-col sm:flex-row">
          <div className=" lg:min-w-[375px] w-full md:w-1/3">
            <h2 className="w-[150px] lg:w-[325px] text-[2xl] md:text-3xl lg:text-4xl font-bold text-left text-[#593f0d] mb-[25px] lg:mb-[53px]">
              Контактная информация
            </h2>

            <div className="flex md:flex-col gap-[23px] w-full flex-wrap-reverse mb-[30px]">
              <div className="w-auto md:w-full">
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] font-bold text-left text-[#ffc858]">
                  E-mail
                </h3>
                <a
                  className="text-[16px] lg:text-[22px] font-bold text-left text-[#5a5859] underline"
                  href="mailto:info@remont.ru"
                >
                  info@remont.ru
                </a>
              </div>

              <div className="w-auto md:w-full">
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] font-bold text-left text-[#ffc858]">
                  Телефон
                </h3>
                <a
                  className="text-[16px] lg:text-[22px] font-bold text-left text-[#5a5859] underline"
                  href="tel:+998997224753"
                >
                  +998 99 722 47 53
                </a>
              </div>

              <div className="w-auto md:w-full">
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] font-bold text-left text-[#ffc858]">
                  График работы
                </h3>
                <span className="text-[16px] lg:text-[22px] font-bold text-left text-[#5a5859] underline">
                  с 9:00 до 18:00
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] sm:h-auto sm:w-2/3 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.83248494579!2d69.2281415!3d41.32608755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1722079107110!5m2!1sru!2s"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
