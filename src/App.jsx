import { RoutesMain } from "./routes/RouterMain"
import { GlobalStyle } from "./styles/globalStyles"
import { Reset } from "./styles/reset"

export const App = () => {
  return(
  <>
    <Reset/>
    <GlobalStyle/>
    <RoutesMain/>
  </>
  )

}

