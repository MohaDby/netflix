const Section = (props) => {
  return (
    <div>
      <h2>{props.category}</h2>
      <div className="image">
        {props.images.map((image) => {
          return <img src={image} />;
        })}
      </div>
    </div>
  );
};

export default Section;
