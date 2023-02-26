import { FaBars } from "react-icons/fa";
import { useGlobalContext, AppContext } from "./context";
const Home = () => {
  const {openSidebar,openModal} = useGlobalContext(AppContext);
 
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
