import { useEffect, useState } from "react";

// interface ISaveButtonProps {
//     defaultChecked: boolean;
//     disabled: boolean; 
//     className: boolean;
// }


export function SaveButtonFunc() {

    // const { defaultChecked, disabled, className } = props;
    const [toggled, setToggle] = useState(false)

    const toggle = () => {
        if (toggled) { setToggle(false) }
        else { setToggle(true) }
        saveToLocalStorage()
    }

    const saveToLocalStorage = () => {
        window.localStorage.setItem('buttonToggled', JSON.stringify(toggled))
    }

    const fetchFromLocalStorage = () => {
        const buttonToggledString = window.localStorage.getItem('buttonToggled')
        console.warn(JSON.parse(buttonToggledString!))
        if (buttonToggledString) {
            setToggle(JSON.parse(buttonToggledString))
        }
    }

    // useEffect(() => {
    //         saveToLocalStorage()
    //     },
    //     [toggled]
    // )

    useEffect(() => {
        fetchFromLocalStorage()
        },
        []
    )

    return(
        
        <div>
            <div className="flex items-center justify-center w-full mb-12">
                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                    <div className="relative">
                    <input type="checkbox" onClick={() => toggle()} id="toggleB" className="sr-only" checked={toggled}/>
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>

                    <div id="dot" className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>

                    </div>
                    <div className="ml-3 text-gray-700 font-medium">
                    Toggle Issues
                    </div>
                </label>
            </div>
        </div>
    )

}