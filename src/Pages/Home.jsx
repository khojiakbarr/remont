import React from "react";
import MyNavBar from "../components/MyNavbar/MyNavBar";
import Hero from "../components/Hero/Hero";
import PlanCard from "../components/Cards/PlanCard";
import FacilitiesCard from "../components/Cards/FacilitiesCard";

export default function Home() {
  return (
    <>
      <MyNavBar />
      <Hero />

      <div className="flex flex-col items-center gap-[29px] mt-[54px]">
        <h2 className="w-[660px] text-[40px] text-center">
          Предлагаем самые{" "}
          <span className="font-bold text-[#ff8a00]">выгодные решения</span> для
          наших клиентов
        </h2>
        <h3 className="w-[750px] text-[25px] text-center text-[#593f0d]">
          Выберите тариф, который вам подходит
        </h3>

        <div className="flex gap-[40px]">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[29px] mt-[54px]">
        <h2 className="w-[660px] text-[40px] leading-normal text-center">
          С <span className="font-bold text-[#ff8a00]">2015 года</span> отремонтировали более <span className="font-bold text-[#ff8a00]">160 объектов</span>
        </h2>
        <h3 className="w-[750px] text-[25px] text-center text-[#593f0d]">
        От небольших студий до ресторанов на высоте 100 метров
        </h3>

        <div className="flex gap-[40px]">
          <FacilitiesCard />
        </div>
      </div>
    </>
  );
}
