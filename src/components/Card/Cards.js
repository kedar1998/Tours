import Card from "./Card";

const Cards = (props) => {

  return (
    <div className="flex flex-col">
      {props.item.map((ele) => {
        return (
          <Card
            key={ele.id}
            imgurl={ele.imgurl}
            title={ele.title}
            content={ele.content}
            price={ele.price}
            handleClick={() =>{props.removeItem(ele.id)}}
          />
        );
      })}
    </div>
  );
};

export default Cards;
