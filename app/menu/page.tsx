import React from "react";
import {
  addOns,
  mohingaVariations,
  burmeseDrinks,
  myanmarSalads,
} from "../../constants";
const Page = () => {
  return (
    <section className="py-[50px] sm:py-[70px] lg:py-[100px]  bg-white innerWidth   ">
      <div className="flex flex-col w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
        <div className="">
          <h2 className="font-semibold text-5xl my-10">Salads</h2>
          <hr></hr>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-7">
            {myanmarSalads.map((salad) => {
              return (
                <div key={salad.name} className="flex flex-col gap-4 my-5">
                  <h3 className="flex justify-between font-bold text-xl tracking-tighte">
                    {salad.name} <span >{salad.price}$</span>
                  </h3>
                  <hr />
                  <p className="text-lg font-semibold">{salad.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-5xl my-10">Monhingas</h2>
          <hr></hr>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-7">
            {mohingaVariations.map((monhinga) => {
              return (
                <div key={monhinga.name} className="flex flex-col gap-4 my-5">
                  <h3 className="flex justify-between font-bold text-xl tracking-tighte">
                    {monhinga.name} <span >{monhinga.price}$</span>
                  </h3>
                  <hr />
                  <p className="text-lg font-semibold">{monhinga.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-5xl my-10">Add Ons</h2>
          <hr></hr>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-7">
            {addOns.map((addon) => {
              return (
                <div key={addon.name} className="flex flex-col gap-4 my-5">
                  <h3 className="flex justify-between font-bold text-xl tracking-tighte">
                    {addon.name} <span >{addon.price}$</span>
                  </h3>
                  <hr />
                  <p className="text-lg font-semibold">{addon.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-5xl my-10">Drinks</h2>
          <hr></hr>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-7">
            {burmeseDrinks.map((drink) => {
              return (
                <div key={drink.name} className="flex flex-col gap-4 my-5">
                  <h3 className="flex justify-between font-bold text-xl tracking-tighte">
                    {drink.name} <span >{drink.price}$</span>
                  </h3>
                  <hr />
                  <p className="text-lg font-semibold">{drink.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
