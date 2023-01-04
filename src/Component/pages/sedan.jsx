
import Data from "../helper/sedan";
import "./sedan.css";
function Sedan(){
    return(
        <div className="card-container">
        {Data.map(person =>{
            const{id,desc,title,image}=person
            return(
                <div className="cards" key={id}>
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <img src={image} className="magnification" alt="" />
                    <div className="card-over">
                       <a href={desc} > <button className="button-85" role="button">Discovery</button></a>
                    </div>
                </div>
            )
        })
    }
    </div>
    )
}
export default Sedan;