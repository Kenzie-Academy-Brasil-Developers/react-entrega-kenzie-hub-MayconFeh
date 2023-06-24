
import { useContext } from "react"
import { RoutesMain } from "./routes/RouterMain"
import { GlobalStyle } from "./styles/globalStyles"
import { Reset } from "./styles/reset"
import { UserContext } from "./providers/UserContext"

export const App = () => {

  const { loading } = useContext(UserContext)



  return (
    <>
      <Reset />
      <GlobalStyle />
      {
        loading ? <div className="loadingContainer">
          <div className="loading"/>
        </div> : <RoutesMain /> }
    </>
  )

}

