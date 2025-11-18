import Cookies from "js-cookie"
import { redirect } from "react-router-dom"
import { createBrowserHistory } from "history"
const Logout=()=>{
const browserHistory = createBrowserHistory()
Cookies.set("auth","")
// redirect('/login')
browserHistory.push('/')
}

export default Logout