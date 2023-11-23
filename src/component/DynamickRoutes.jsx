import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const DynamickRoutes = () => {
    const {todoID} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/"+todoID)
            .then(res=>res.json())
            .then(json=>setData(json))
    }, []);
    return (
        <div>
            <p>
                <Link to= "/todo"> &lt : Back To ToDo </Link>
            </p>
            <section>
                <p>
                    {
                        data["id"]
                    }
                </p>
            </section>
        </div>
    );
};

export default DynamickRoutes;