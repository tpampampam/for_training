import { useGetUsers } from "../../hooks/useGetUsers"
import { userContext } from "./context"
import Level2 from "./Level2"


const Level1 = () => {

    const {Provider} = userContext
    const users = useGetUsers('https://jsonplaceholder.typicode.com/users')

    return(
        <Provider value={users}>
            <div>
                level1
                <Level2/>
            </div>
        </Provider>
    )
}

export default Level1