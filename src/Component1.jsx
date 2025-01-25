
import { useContext } from "react"
import { userContext } from "./MyContext"
const Component1 = () => {
    const { name, setName } = useContext(userContext)
    return (
        <>
            <div>Component1 {name}</div>
            <button onClick={() => { setName("suman ") }}>click</button>


        </>
    )
}

export default Component1