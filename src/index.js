
import ReactDOM from "react-dom/client"
import "./style.css"
import IMAGES from "./images.js"
const root=ReactDOM.createRoot(document.getElementById("root"))
function Gallay(){
    return(
        <div  className="gally">{
            IMAGES&&IMAGES.map((item)=>
                <div key={item.Id} >
                    <img src={item.image}  className="image" alt=""></img>
                    <p>{item.p}</p>


                </div>
            )
        }
          

            
        
        </div>
    )
    

    }
        

root.render (<Gallay></Gallay>)
  






        






    
    


