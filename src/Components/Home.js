
import "../App.css"
import React from "react"

const Home = (props) => {

  const restaurant = props.props

 
 




    if(!restaurant){
        return("Loading...")
    }
    /*
    Home Page-
    --Header

    --Large Carosel of Images 
        --onclick takes you to the selected store(pizza) 

    --delivery service selection title
        --list of other delivery services *

            --image *
            --name *
            --descriptioon tags *
            --delivery time *
            --price *
        
    */


    return(

            <div className="individualRestaurant">
                
                <h2>{restaurant.name}</h2>
                <img className="storeImage" src={restaurant.image} />
                <p>{restaurant.tags}</p>
                <p>{restaurant.time} Delivery Time</p>
                <p>{restaurant.deliveryFee} Delivery Fee</p>

            </div>
                
    )
}

export default Home



