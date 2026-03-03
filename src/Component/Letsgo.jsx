import './Lt.css';
import St from './St';
import Beachs from './Beachs';
import { useState } from 'react';
import Cities from './Cities';
import Hills from './Hills';
import Nature from './Nature';

const Letsgo = () => {

    const [active, setActive] = useState("state");

    return (
        <>
            <div className='letsgo'>
                <button className="Butt" onClick={() => setActive("state")}>State</button>
                <button className="Butt" onClick={() => setActive("beach")}>Beaches</button>
                <button className="Butt" onClick={() => setActive("cities")}>Cities</button>
                <button className="Butt" onClick={() => setActive("hills")}>Hills</button>
                <button className="Butt" onClick={() => setActive("nature")}>Nature</button>
            </div>

            {active === "state" && <St />}
            {active === "beach" && <Beachs />}
            {active === "cities" && <Cities />}
            {active === "hills" && <Hills />}
            {active === "nature" && <Nature />}
        </>
    )
}

export default Letsgo;