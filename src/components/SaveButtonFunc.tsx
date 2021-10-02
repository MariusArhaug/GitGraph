import { APILoader } from "../APILoader";
import { useEffect, useState } from "react";


export function SaveButtonFunc() {

    const [toggled, setToggle] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [loader, setLoader] = useState(new APILoader())

    const toggle = () => {
        if (toggled) { setToggle(false) }
        else { setToggle(true) }
    }

    useEffect(
        () => {
            void loader.getIssues().then(() => setLoaded(true))
        },
        [toggled]
    )

    return(
        <button onClick={() => toggle()}>
            Knapp
        </button>
    )

}