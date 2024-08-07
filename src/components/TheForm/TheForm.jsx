import React, { useState } from "react";
import "./TheForm.css";
import { useForm } from "react-hook-form";
import remont_jp from "../../assets/images/remont.jpg";
import lesa from "../../assets/images/lesa.png";

export default function TheForm() {
  const [range, setRange] = useState(5);
  const { handleSubmit, register, reset } = useForm();

  // useEffect(() => {
  //   console.log(Math.floor((+range * 100) / 300));
  // }, [range]);

  function getData(data) {
    console.log(data);
  }

  
  return (
    <div className=" relative mb-[120px] md:mb-[350px]">
      <div className="relative z-[2]">
        <div className="bg_form h-[190px] md:h-[420px] absolute w-full">
          <div className="container">
            <h2 className="text-white pt-[5px] md:pt-[0px] text-[15px] md:text-[35px] w-[800px] px-[10px] md:ml-[151px]">
              Рассчитайте стоимость ремонта <br />{" "}
              <span className="text-[#ff8a00] font-[700]">за 1 минуту</span> с
              точностью 99%
            </h2>
          </div>
        </div>
      </div>
      <div className="flex container pt-[128px] md:pt-[262px] px-[15px] gap-[30px] mb-[]">
        <div className="left flex-1 relative z-[3]">
          <form
            onSubmit={handleSubmit((data) => getData(data))}
            className="text-[#593f0d] "
          >
            <div className="flex flex-col  gap-2 mt-[30px]">
              <label htmlFor="tip">Тип площад</label>
              <select
                name="tip"
                id="tip"
                className="py-[13px]"
                {...register("tip")}
              >
                <option value="">Эконом</option>
              </select>
            </div>{" "}
            <div className="flex flex-col mt-[10px] md:mt-[30px] gap-2">
              <label htmlFor="tarif ">Тарифы</label>
              <select
                name="tarif"
                id="tarif"
                className="py-[13px] "
                {...register("ploshad")}
              >
                <option value="">Жилая</option>
              </select>
            </div>
            <div className="flex flex-col mt-[10px] md:mt-[30px]">
              <p className="md:text-[20px]">
                Плошадь, м<sup>2</sup>
              </p>

              <div className={`mt-[45px]`}>
                {" "}
                <div className="relative px-[15px]">
                  <div
                    style={{
                      left: `${Math.floor((+range * 100) / 300) - 3}%`,
                    }}
                    className={`absolute top-[-35px] border-2 inline-block p-1 rounded`}
                  >
                    {range}
                  </div>
                </div>
                <input
                  type="range"
                  value={range}
                  className="slider w-full py-[13px]"
                  max={300}
                  onChange={(e) => setRange(e.target.value)}
                />
              </div>
              <div>
                <h2>Предварителний расчет: </h2>
                <h3 className="text-lg font-bold">
                  итого:{" "}
                  <span className="">{Math.floor(+range * 30000)} UZS.</span>
                </h3>
              </div>
              <div className="my-[30px]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Ваше имя</label>
                  <input
                    className="  outline-none"
                    type="text"
                    id="name"
                    placeholder=""
                    autoComplete="off"
                    {...register("name")}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-[20px]">
                  <label htmlFor="phone">Ваш телефон</label>
                  <input
                    className="outline-none"
                    type="number"
                    id="phone"
                    autoComplete="off"
                    placeholder="+998 90 993 87 01"
                    {...register("phone")}
                  />
                </div>
              </div>
              <button className="button px-[10px] py-[10px] w-auto rounded-[10px] shadow-xl">
                РАССЧИТАТЬ ТОЧНУЮ СТОИМОСТЬ
              </button>
            </div>
          </form>
        </div>
        <div className="right hidden md:block md:flex-1 relative">
          <div className="  h-[700px] overflow-hidden ">
            <img className="w-full" src={remont_jp} alt="image" />
          </div>
          <div className="absolute bottom-[-270px] right-[-100px] w-[400px]">
            <img className="w-full" src={lesa} alt="leso" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
