import React from "react";
import Button from "../Button/Button";

const Card = (props) => {

    const handleClick = () =>{
        console.log();
    }

  return (
    <div className="w-full md:max-w-2xl bg-white my-5 rounded-lg shadow-lg pb-5">
      <img src={props.imgurl} alt="" className="rounded-t-lg" />

      <div className="flex justify-between my-5 px-8">
        <h2 className="font-bold">{props.title}</h2>
        <p className="bg-blue-100 px-2 rounded-sm text-blue-600 font-bold">
          {props.price}
        </p>
      </div>
      <div className="px-8">
        <p>{props.content}</p>
      </div>
      <div className="flex justify-center my-5">
        <Button text="Not Interested" handleClick={props.handleClick}/>
      </div>
    </div>
  );
};

export default Card;
