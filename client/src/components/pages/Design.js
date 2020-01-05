import React, {useState,useEffect} from 'react';

const Design = () => {
    const [designs,setDesigns] = useState([]);

    useEffect(() => {
        fetch("/api/designs")
        .then(res => res.json())
        .then(fetched=>setDesigns(fetched))
        console.log("Design mounted")
    }, [])
    

    return (
        <React.Fragment>
            <h1>Design</h1>
            <p>
                Designs including albums, posters, etc. will be listed here.
            </p>
            <p>
                {designs.map(design => 
                    <li key = {design.id}>
                        {design.figureName}: {design.projectName}
                    </li>
                )}
            </p>
        </React.Fragment>
    );
}

export default Design;
