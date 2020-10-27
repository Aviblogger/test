import React from 'react'



  //const regex = /(<([^>]+)>)/ig;
const Contacts = ({contacts}) => {

    return (
        <div>
            <center><h1>My API</h1></center>
            {contacts.map((contact) => (
              <div>

   <div class="card" >
  <div class="card-body">
    <h5 class="card-title">{contact.name}</h5>
    <p class="card-text">{contact.price}</p>
   
     </div>
</div>
 
</div>
                
            ))}
        </div>
    )
};





export default Contacts