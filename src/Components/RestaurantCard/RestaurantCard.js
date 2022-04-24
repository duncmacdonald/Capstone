import Rating from "../Rating/Rating";
import "./RestaurantCard.css";
import { DirectionsWalk, DirectionsBike } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function RestaurantCard({ hero, logo, name, address, rating }) {
  return (
    <div className="RestaurantCard">
      <img
        className="RestaurantCard__Hero"
        src={hero}
        alt="food hero photo"
      ></img>
      <div className="RestaurantCard__Lower">
        <img src={logo} alt="logo"></img>
        <h1>{name}</h1>
        <div className="DirectionsContainer">
          <h3>{address}</h3>
          <div className="Transportation">
            <DirectionsWalk htmlColor="#586F6B" viewBox="-4 -4 32 32" />
            <p>15 min</p>
            <DirectionsBike htmlColor="#586F6B" viewBox="-4 -4 32 32" />
            <p>5 min</p>
          </div>
        </div>
        <Rating score={rating} />
      </div>
    </div>
  );
}
