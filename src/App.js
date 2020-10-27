import React,{ useState , useEffect} from "react";
import Axios from "axios";
import "./style/md/css/bootstrap.css";
//import "./style/md/js/bootstrap.js";


function App() {
    const [movieName, setMovieName] = useState("");
    const [review, setReview] = useState("");
    const[foodList, setFoodList]= useState([]);
    const [updatePrice, setupdatePrice] = useState("");
    const [updateName, setupdateName] = useState("");
useEffect(()=>{
    Axios.get("http://localhost:5000/products")
    .then((response)=>{
       console.log(response);
        setFoodList(response.data);
    });
}, []);


    const submitReview = () => {
        console.log(movieName +review );
Axios.post("https://localhost:5000/products", {
    name: movieName,
    price: review,
}).then(() => {
    //alert("success");
    /*setFoodList([...foodList,
       {
    name: movieName,
    
    price: review
},
        ]);*/

});

};

const deleteR = (movie) => {
    Axios.delete(`https://localhost:5000/delete/${movie}`);
    console.log(movie);
};
const updateR = (movie) => {
    Axios.put(`https://localhost:5000/update/${movie}`
        ,{
    name: updateName,
    price: updatePrice,
});

    console.log(movie);
};

return (
    <div className="form">





<center><h1>Avi Production </h1></center>
   <div className="card" >
  <div className="card-body">
   <h1>Add product</h1>
     <div className="form-group">
       <label>Name</label>
    <input type="name" className="form-control" id="name"  placeholder="Enter Name"
name="movieName"
onChange={(e) => {
    setMovieName(e.target.value);

}}/>

  </div>
      <div className="form-group">
    <label>Price</label>
    <input type="number"  className="form-control" id="phone" placeholder="Enter Price" name="review" 
    onChange={(e) => {
    setReview(e.target.value);

}}/>
  </div>
<button className="btn btn-primary" onClick={submitReview}>submit</button>

     </div>
</div>
  <div className="card" >
  <div className="card-body">
<h1>List products</h1>
</div>
</div>
{
    foodList.map((val , key) =>{
        return(
        <div key={key} className="list">


        


           
   <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{val.name}</h5>
    <p className="card-text">LKR {val.price}</p>
   
        <div className="form-group">
    <label>Name</label>
    <input type="text"  className="form-control" id="name" placeholder="Update Name" name="updateName" onChange={(e)=>{
            setupdateName(e.target.value);
        }}/>
  </div>
      <div className="form-group">
    <label>Price</label>
    <input type="number"  className="form-control" id="number" placeholder="Update Price" name="updatePrice" onChange={(e)=>{
            setupdatePrice(e.target.value);
        }}/>
  </div>
        <br/> 
    <button className="btn btn-primary"  onClick={()=>{updateR(val._id)}}>update</button>

        <button className="btn btn-danger" onClick={()=>{deleteR(val._id)}}>delete</button>
     </div>
</div>


        </div>

        );
    })
}


</div>

    );
}

export default App;





