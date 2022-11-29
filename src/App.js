import { Route, Link} from "react-router-dom";
import Home from "./Components/Home"
import Order from "./Components/Order";
import Delivery from "./Components/Delivery.js";


const restaurants = [
  {
    id:1,
    name: "Apple B's",
    image: "https://popmenucloud.com/ipqbtnuw/6a459064-365f-4f0a-a52d-9caf619e3837.jpg",
    tags: "American - Burgers - Salad",
    time: "10-15 min",
    deliveryFee: "$3.00"
  },

  {
    id:2,
    name: "Ihop",
    image: "https://popmenucloud.com/ipqbtnuw/6a459064-365f-4f0a-a52d-9caf619e3837.jpg",
    tags: "American - Burgers - Salad",
    time: "25-30 min",
    deliveryFee: "$4.00"
  },

  {
    id:3,
    name: "Jerk Delight",
    image: "https://popmenucloud.com/ipqbtnuw/6a459064-365f-4f0a-a52d-9caf619e3837.jpg",
    tags: "American - Burgers - Salad",
    time: "25-30 min",
    deliveryFee: "Free"
  }
]



const App = () => {


/*
  Return a Staple header with 3 route links 
          --Logo 
          --Title  (Full Moon Pizza) *
          --Home Link *
          --pizza order form Link *
          --Current order Link *
          (only shows when order has already been placed)

  Home Page-
          --Header
          --Large Carosel of Images

  
*/ 




return(

<div>
    {/*Site Navigation Bar*/}
  <div className="navBarWrapper">
    
    {/* Site Logo */}
    <div className="logo">
      <img src="https://previews.123rf.com/images/jayaart/jayaart2001/jayaart200100613/138665000-food-delivery-logo-design-fast-delivery-service-sign-.jpg"/>
    </div>
    
    {/* Site Title */}
    <div className="Title">
      <h1>Full Moon Pizza</h1>
    </div>

      {/*Site links*/}

    <div className="Links">

      <div>
        <Link to={"/"} className="link">Home</Link>
      </div>
      <div className="spacer"></div>
      <div>
        <Link to={"/pizza"} id="order-pizza" className="link">Order</Link>
      </div>

    </div>

  </div>

  <Route exact path="/">
    <div className="homeWrapper">

    <Link className="caroselDiv" to={"/pizza"} >
      <div className="caroselDiv">
        <h2>
          BloomTech Pizza <br></br>
          Click Here to Order Now.
        </h2>
      </div>
    </Link>

      <div className="restaurantWrapper">
        
        {restaurants.map(restaurant=> {
          
          return(
            <Home  props={restaurant} key={restaurant.id} />
          )
            
        })}
      </div>
    </div>

  </Route> 



  <Route path={'/pizza'}>
    <Order />
  </Route>

  {/* on the click of the submit button the delivery page initiates*/}
  
  <Route path={'/delivery'}> 
    <Delivery />
  </Route>

</div>

)
 
};
export default App;




/*
--form schema validate name inputs

--Set staate for form values to be held in -- const initial value and setValue

--Set form Error state and create a div in the order page to show error message

--

--css for form

--css toggle yes and no on the substitutions checkbox

--add a Post and Get request  to https://reqres.in/api/orders

--add a unique id to the final order 

--return order summary //get request// from api
*/