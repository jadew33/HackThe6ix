import React, { useState } from "react";
import nonejpg from "./none.jpg";
import profilepng from "./profile.png";

const ImageSelection = () => {
  const [picture, setPicture] = useState(nonejpg);
  const changeFile = () => {
    setPicture(profilepng);
  };
  return (
    <div className="image">
      <p>Almost done, time to add a nice profile photo</p>
      <div className="image__input-wrapper">
        <img src={picture} className="image__image" />
        <input
          type="file"
          accept="image/*"
          className="image__input"
          onChange={changeFile}
        ></input>
        <div className="image__input-add-wrapper">
          <i class="fas fa-plus-circle image__input-add"></i>
        </div>
      </div>
    </div>
  );
};

export default ImageSelection;
