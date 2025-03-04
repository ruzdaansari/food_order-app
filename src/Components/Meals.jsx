import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

const requestConfig = {};
export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch(`http://localhost:3000/meals`);
  //     const meal =await response.json();
  //     setLoadedMeals(meal);
  //   };

  //   fetchMeals();
  // }, []);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(`http://localhost:3000/meals`, requestConfig, []);


  if(isLoading){
    return <p className="center">Fetching Meals..</p>
  }

  if(error){
    return <Error title={"Failed to fetch meals..."} message={error}/>
  }
  //// Alternative way of using initial data in useHttp
  // if(!data){
  //   return <p>Failed to fetch</p>;
  // }
  return (
    <ul id="meals">
      {loadedMeals?.map((meal, i) => {
        return <MealItem mealData={meal} key={meal.id} />;
      })}
    </ul>
  );
}
