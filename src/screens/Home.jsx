import React, { useState } from "react";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Home.css";

import robotImage from "../assets/robot.png";
import ButtonRecipe from "../components/ButtonRecipe";
import TypeWriter from "../components/TypeWriter";
import RecipeGenerated from "../components/RecipeGenerated";
import ModalLoading from "../components/ModalLoading";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [recipeInput, setRecipeInput] = useState("");
  const [newRecipe, setNewRecipe] = useState("");

  const [generationFlag, setGenerationFlag] = useState(false);

  const generateRecipe = async () => {
    setGenerationFlag(false);
    const options = {
      method: "POST",
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Show the recipe and how to make a ${recipeInput}`,
            //content: `Me mostre a receita e como fazer ${recipeInput}`,
          },
        ],
      },
    };

    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGenerationFlag(true);
        setLoading(false);
        setNewRecipe(response.data.choices[0].message.content);
      })
      .catch(function (error) {
        console.error(error);
        setGenerationFlag(false);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="app-bg container-fluid">
        <div className="custom-shape-divider-top-1679365772">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="row text-center justify-content-center align-items-center robot-container">
          <div className="col-md-2">
            <img src={robotImage} width="200px" height="200" />
          </div>
          <div className="col-4 mt-2">
            <div className="box sb1">
              <p>Which recipe would you like to cook?</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-6">
            <input
              type="text"
              name="text"
              className="input"
              placeholder="Type your recipe"
              onChange={(e) => {
                setRecipeInput(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row justify-content-center text-center mt-3">
          <div className="col-6">
            <ButtonRecipe generateRecipe={generateRecipe} />
          </div>
        </div>

        <div className="row justify-content-center text-center mt-5">
          <div className="col-6">
            <RecipeGenerated text={newRecipe} generationFlag={generationFlag} />
          </div>
        </div>
        <div className="row mt-2 text-center justify-content-center">
          <div className="col">
            <p style={{ fontFamily: "cursive", fontStyle: "italic" }}>
              Bon appetit!!
            </p>
          </div>
        </div>
      </div>
      <ModalLoading show={loading} onHide={() => setLoading(false)} />
    </>
  );
};

export default Home;
