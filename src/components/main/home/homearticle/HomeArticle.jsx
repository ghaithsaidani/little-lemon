import React from 'react'
import { RestaurentFood } from '../../../../assets/images'

export const HomeArticle = () => {
  return (
    <article>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>we are a  family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
        <img src={RestaurentFood} alt="restaurent food" />
    </article>
  )
}
