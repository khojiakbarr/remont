import React from "react";
import DoveryaCard from "../DoveryaCard/DoveryaCard";
import bolgarka from "../../assets/images/bolgarka.png";
import kirpich from "../../assets/images/kirpich.png";
import komanda from "../../assets/images/komanda.png";
import postavchik from "../../assets/images/postavchik.png";
import kamera_icon from "../../assets/images/kamera_icon.png";
import dogovor from "../../assets/images/dogovor.png";
import "../Button/style.css";

export default function Doverya() {
  return (
    <div className="container px-[15px]">
      <h1 className="text-[#593f0d] text-[25px] md:text-[40px] font-bold text-center">
        Почему нам <span className="text-[#ffc858]"> доверяют?</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[30px] lg:gap-[30px] mt-[30px] md:mt-[57px]">
        <DoveryaCard
          title={"Опыт"}
          info={"Опыт наших мастеров более 10 лет"}
          image={bolgarka}
        />{" "}
        <DoveryaCard
          title={"Гарантии"}
          info={"Даем гарантию на свои работы 2 года"}
          image={kirpich}
        />{" "}
        <DoveryaCard
          title={"Команда"}
          info={
            "Ежеквартально наши мастера проходят профессиональную аттестацию"
          }
          image={komanda}
        />{" "}
        <DoveryaCard
          title={"Поставщики"}
          info={"Специальные условия от поставщиков мебели для наших  клиентов"}
          image={postavchik}
        />{" "}
        <DoveryaCard
          title={"Видеонаблюдение"}
          info={
            "Установим камеру видеонаблюдения за ремонтом, в режиме реального времени с компьютера или телефона"
          }
          image={kamera_icon}
        />{" "}
        <DoveryaCard
          title={"Договор"}
          info={"Все сроки и гарании прописываем в договоре"}
          image={dogovor}
        />
      </div>
      <div className="flex justify-center mt-[60px] mb-[100px]">
        <button className="button px-[30px] md:px-[50px] py-[15px] md:py-[30px] rounded-[15px] md:rounded-[30px] shadow-2xl text-[12px] font-bold">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </button>
      </div>
    </div>
  );
}
