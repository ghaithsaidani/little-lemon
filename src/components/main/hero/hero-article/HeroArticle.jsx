import {RestaurentFood} from '../../../../assets'
import MainButton from '../../../main-button/MainButton'

export const HeroArticle = () => {
    return (<article>
        <div className={"hero-head"}>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>we are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern
                twist.</p>
            <MainButton text={"Reserve a Table"}/>
        </div>
        <img src={RestaurentFood} alt="restaurent food"/>
    </article>)
}
