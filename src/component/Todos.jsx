import {Fragment, useEffect, useState} from "react";
import "../assets/css/style.css"
import {useNavigate} from "react-router-dom";
const Todos = () => {
    const [todo, setTodo] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(r =>r.json())
            .then(json=>setTodo(json))
    }, []);
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className= 'cardList'  >
                {
                    todo.map((item,idx)=>{
                        return(
                            <div key={idx} className= {`card`} >
                                <div id= "item" className={`${item.completed ? ("complete"): "incomplete" }`}
                                     onClick={()=>navigate("/todo/"+item.id)}
                                >
                                    <p>
                                        {item.id}
                                    </p>
                                    <p>
                                        {
                                            item.title
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    );
};

export default Todos;