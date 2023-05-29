import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {

  const { user } = useSelector(state => state.auth)
  const showRoutes = useRoutes(routes)
  

  // eğer user yoksa <Loader/> yani yükleme ekranı çalışır
  if (user === null) {
    return <Loader />
  }

  return (
    <>
      <Toaster position="top-right"/>
      {showRoutes}
    </>
  )
}

export default App;
