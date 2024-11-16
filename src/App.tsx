

import Navbar from "./components/1-2-3page/navbar";
import Partner from "./components/1-2-3page/home";
import Casestudy from "./components/4page/casestudy";
import Card from "./components/5page/info";
import PartnerSlider from "./components/6page/folio";
import ImpactPage from "./components/7page/impact";
import Loading from "./components/8page/customloading";


const App = () => {
  return (

    <div>
    <Navbar/>
    <Partner/>
     <Casestudy/>
      <Card/>
      <PartnerSlider/>
      <ImpactPage/>
      <Loading/>
    </div>
  );
};
export default App;