import PropTypes from "prop-types";
const Card = ({ imgPath, alt, title }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "5px",
        height: "100px",
        width: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          height: "100%",
          width: "100%",
        }}
        src={imgPath}
        alt={alt}
      />
      <span
        style={{
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        {title}
      </span>
    </div>
  );
};
Card.PropTypes = {
  imgPath: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
