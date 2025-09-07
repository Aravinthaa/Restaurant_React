import one from "../assests/img/food1.jpg"
import two from "../assests/img/food2.jpg"
import three from "../assests/img/food3.jpg"
import four from "../assests/img/food4.jpg"




//Container//

function Container(){
  return(
    <div class="container">

        <div class="section-two">
            <img  class="section-two__img" src={one} alt="food1"></img>
            <h3 class="section-two__title">Tangy Tamarind Prawn Curry</h3>
            <p class="section-two__desc">Something Which is very Delicious</p>
            <button class="section-two__button">Order Now</button>
        </div>
        <div class="section-three">
            <img class="section-three__img" src={two} alt="food2"></img>
            <h3 class="section-three__title">Tangy Tamarind Prawn Curry</h3>
            <p class="section-three__desc">Something Which is very Delicious</p>
            <button class="section-three__button">Order Now</button>
        </div>
        <div class="section-four">
            <img class="section-four__img" src={three} alt="food3"></img>
            <h3 class="section-four__title">Tangy Tamarind Prawn Curry</h3>
            <p class="section-four__desc">Something Which is very Delicious</p>
            <button class="section-four__button">Order Now</button>
        </div>
        <div class="section-five">
            <img class="section-five__img" src={four} alt="food4"></img>
            <h3 class="section-five__title">Tangy Tamarind Prawn Curry</h3>
            <p class="section-five__desc">Something Which is very Delicious</p>
            <button class="section-five__button">Order Now</button>
        </div>


    </div>
  )
}

export {Container} 