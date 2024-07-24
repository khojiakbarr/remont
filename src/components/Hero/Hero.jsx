import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="bg_hero  ">
      <div className=" pt-[49px] container mx-auto px-[15px]">
        <div className="wrapper  relative z-[999] ">
          <div className="hero_title">
            <h6 className="md:text-[24px] font-[400] text-white">
              <span className="w-[22px] h-[22px]"></span>
              Ежедневно с 9:00 до 18:00
            </h6>
            <h2 className="md:text-[40px] md:w-[700px] text-[#593f0d]">
              Дизайн интерьера, ремонт жилой и коммерческой недвижимости <br />
              <span className="text-[#ffcf6e] font-[400]">
                под ключ в Тюмени
              </span>
            </h2>
            <p className=" h-[3px] w-[100px] bg-[#ffcf6e] my-[10px]"></p>
            <h3 className="text-[24px] font-[400] md:w-[400px]">
              Выполним ремонт точно в срок с гарантией по договору
            </h3>

            <button className="button px-[24px] py-[24px] shadow-xl my-[10px] rounded-[10px] text-[12px] font-[700] cursor-pointer">
              Рассчитать стоимость ремонта
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
