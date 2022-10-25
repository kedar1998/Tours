import Button from "../Button/Button";

const Card = (props) => {
  return (
    <div className="w-full md:max-w-2xl bg-white my-5 rounded-lg shadow-lg pb-5">
      <img src={props.item[0].imgurl} alt="" className="rounded-t-lg" />

      <div className="flex justify-between my-5 px-8">
        <h2 className="font-bold">{props.item[0].title}</h2>
        <p className="bg-blue-100 px-2 rounded-sm text-blue-600 font-bold">
          {props.item[0].price}
        </p>
      </div>
      <div className="px-8">
        <p>{props.item[0].content}</p>
      </div>
      <div className="flex justify-center my-5">
        <Button text="Not Interested" />
      </div>
    </div>
  );
};

export default Card;
