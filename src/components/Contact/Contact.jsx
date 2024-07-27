import React from "react";
import "./Contact.css";
import { FloatingLabel } from "flowbite-react";

import "../Button/style.css";

export default function Contact() {
  return (
    <div className="bg_contact">
      <div className="flex container px-[15px] pt-[160px] pb-[177px] flex-wrap">
        <div className="flex-1">
          <h1 className="text-[#171b20] text-[30px] font-bold w-[400px]">
            Закажите замер, а также предварительную оценку объекта <br />
            <span className="text-[#ffc858]">БЕСПЛАТНО</span>
          </h1>
          <h2 className="text-xl font-normal text-[#593f0d] mt-[49px] w-[312]">
            На бесплатном выезде инженер замерщик:
          </h2>
          <ul className="w-[300px] text-[#593f0d] text-xl mt-[13px] ">
            <li className="list-disc ml-[30px] mb-[6px]">
              Сделает точный замер
            </li>
            <li className="list-disc ml-[30px] mb-[6px]">
              Сориентирует по срокам
            </li>
            <li className="list-disc ml-[30px] mb-[6px]">
              Поможет определиться с видом ремонта
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <form className="bg-[#FF8A00]  w-[400px] rounded-[10px] ">
            <div className="bg-white py-[28px] px-[30px] rounded-[10px] translate-x-[-10px] translate-y-[-15px]">
              <h2 className="font-bold text-[#593f0d] md:text-3xl ">
                Укажите ваши контакты
              </h2>
              <p className="text-[15px] font-normal mt-[7px]">
                и мы перезвоним вам, чтобы назначить удобное время для замера
              </p>
              <div className="mt-[25px]">
                <FloatingLabel
                  variant="standard"
                  label=" Ваше имя"
                  className="peer-focus:text-orange-300 focus:border-orange-300  "
                />
              </div>
              <div className="mt-[20px]">
                <FloatingLabel
                  variant="standard"
                  label="Телефон"
                  className="peer-focus:text-orange-300 focus:border-orange-300"
                  type="tel"
                />
              </div>
              <div className="flex justify-center mt-[30px] mb-[30px]">
                <button className="button px-[30px] py-[20px] rounded-[20px] shadow-2xl text-[13px] font-bold">
                  ЗАКАЗАТЬ БЕСПЛАТНЫЙ ЗАМЕР
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
