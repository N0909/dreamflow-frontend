import { useEffect } from "react";
import api from "../api/axios";

function Home() {

    useEffect(() => {
        api.get("/songs")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;