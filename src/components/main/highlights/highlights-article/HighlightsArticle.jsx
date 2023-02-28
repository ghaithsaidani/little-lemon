import { Bruchetta, GreekSalad, LemonDessert } from "../../../../assets";
import MainButton from "../../../main-button/MainButton";
import MealCard from "./meal-card/MealCard";

export const HighlightsArticle = () => {
  const meals = [
    {
      name: "Greek Salad",
      src: GreekSalad,
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      name: "Bruchetta",
      src: Bruchetta,
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      name: "Lemon Dessert",
      src: LemonDessert,
      price: 5.00,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <article>
      <h2>This weeks specials!</h2>
      <div className="meals-cards">
        {meals.map((meal) => (
          <MealCard key={meal.name} {...meal}/>
        ))}
      </div>
      <MainButton text={"Online Menu"}/>
    </article>
  );
};
