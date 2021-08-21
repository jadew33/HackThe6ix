import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const InterestSelection = () => {
  const [checkedMakeup, setCheckedMakeup] = useState(false);
  const [checkedFashion, setCheckedFashion] = useState(false);
  const [checkedFood, setCheckedFood] = useState(false);
  const [checkedPets, setCheckedPets] = useState(false);
  const [checkedTech, setCheckedTech] = useState(false);
  const [checkedFinance, setCheckedFinance] = useState(false);
  const [checkedTravel, setCheckedTravel] = useState(false);
  const [checkedMusic, setCheckedMusic] = useState(false);
  const [checkedEntertainment, setCheckedEntertainment] = useState(false);

  function toggleChecked(state, fxn) {
    fxn(!state);
    console.log(state);
  }

  return (
    <div className="interest">
      <h3>What topics interest you?</h3>
      <p profile__description>Select the topics you're interested in</p>
      <Link
        activeClass="active"
        to="continue-button"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        <div className="interest__image-container">
          <div className="interest__image-container-row">
            <>
              <div
                className="interest__image makeup"
                onClick={() => toggleChecked(checkedMakeup, setCheckedMakeup)}
              />
              {checkedMakeup && (
                <i class="fas fa-check-circle icon__makeup"></i>
              )}
              <p>Makeup</p>
            </>
            <>
              <div
                className="interest__image clothing"
                onClick={() => toggleChecked(checkedFashion, setCheckedFashion)}
              />
              {checkedFashion && (
                <i class="fas fa-check-circle icon__fashion"></i>
              )}
              <p>Fashion</p>
            </>
            <>
              <div
                className="interest__image food"
                onClick={() => toggleChecked(checkedFood, setCheckedFood)}
              />
              {checkedFood && <i class="fas fa-check-circle icon__food"></i>}
              <p>Food</p>
            </>
          </div>
          <div className="interest__image-container-row">
            <>
              <div
                className="interest__image pets"
                onClick={() => toggleChecked(checkedPets, setCheckedPets)}
              />
              {checkedPets && <i class="fas fa-check-circle icon__pets"></i>}
              <p>Pets</p>
            </>
            <>
              <div
                className="interest__image technology"
                onClick={() => toggleChecked(checkedTech, setCheckedTech)}
              />
              {checkedTech && <i class="fas fa-check-circle icon__tech"></i>}
              <p>Tech</p>
            </>
            <>
              <div
                className="interest__image finance"
                onClick={() => toggleChecked(checkedFinance, setCheckedFinance)}
              />
              {checkedFinance && (
                <i class="fas fa-check-circle icon__finance"></i>
              )}
              <p>Finance</p>
            </>
          </div>
          <div className="interest__image-container-row">
            <>
              <div
                className="interest__image travel"
                onClick={() => toggleChecked(checkedTravel, setCheckedTravel)}
              />
              {checkedTravel && (
                <i class="fas fa-check-circle icon__travel"></i>
              )}
              <p>Travel</p>
            </>
            <>
              <div
                className="interest__image music"
                onClick={() => toggleChecked(checkedMusic, setCheckedMusic)}
              />
              {checkedMusic && <i class="fas fa-check-circle icon__music"></i>}
              <p>Music</p>
            </>
            <>
              <div
                className="interest__image entertainment"
                onClick={() =>
                  toggleChecked(checkedEntertainment, setCheckedEntertainment)
                }
              />
              {checkedEntertainment && (
                <i class="fas fa-check-circle icon__entertainment"></i>
              )}
              <p>Movies/TV</p>
            </>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InterestSelection;
