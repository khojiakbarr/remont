import React, { useEffect, useState } from "react";
import "./TheForm.css";

export default function TheForm() {
  const [range, setRange] = useState(5);

  useEffect(() => {
    console.log(range);
  }, [range]);
  return (
    <div className=" relative">
      <div className="bg_form h-[190px] md:h-[420px] absolute  w-full">
        <div className="container">
          <h2 className="text-white pt-[5px] md:pt-[0px] text-[15px] md:text-[35px] w-[800px] px-[10px] md:ml-[151px]">
            Рассчитайте стоимость ремонта <br />{" "}
            <span className="text-[#ff8a00] font-[700]">за 1 минуту</span> с
            точностью 99%
          </h2>
        </div>
      </div>
      <div className="flex container pt-[100px] md:pt-[272px] px-[15px] gap-[30px]">
        <div className="left flex-1 relative z-[1]">
          <form className="text-[#593f0d] ">
            <div className="flex flex-col">
              <label htmlFor="tip">Тип площад</label>
              <select name="tip" id="tip">
                <option value="">Эконом</option>
              </select>
            </div>{" "}
            <div className="flex flex-col">
              <label htmlFor="tarif">Тарифы</label>
              <select name="tarif" id="tarif">
                <option value="">Жилая</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <p>
                Плошадь, м<sup>2</sup>
              </p>

              <div>
                {" "}
                <input
                  type="range"
                  value={range}
                  className="slider w-full"
                  max={300}
                  onChange={(e) => setRange(e.target.value)}
                />
              </div>
            </div>
          </form> 
          
        </div>
        <div className="right flex-1"></div>
      </div>
    </div>
  );
}
