import React from "react";
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

export default function Home() {
  return (
    <>
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
        <button className="button  px-[30px] md:px-[50px] pt-[20px] md:pt-[30px] md:pb-[20px] rounded-[20px] shadow-xl text-[15px] font-[700]">
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
    </>
  );
}
