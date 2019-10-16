import React from "react";
import { Link } from "react-router-dom";
import "../styles/VerticalMenu.css";

const VerticalMenu = ({ albums }) => <div> 
  Albums
  <br/>
  {
    albums.map((album) => (
      <Link 
        to={`/albums/${album.id}`}
        className='item'
        key={album.id}
      >
      {album.name}
      </Link>
    ))
  }
</div>;


export default VerticalMenu;
