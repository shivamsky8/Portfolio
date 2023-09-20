import TabComponent from "./Tab/TabComponent";
import tabs from "./Tab/tabs";
import "./Home.css";

function HomeComponent() {
  return <TabComponent tabs={tabs} className="home" />;
}

export default HomeComponent;
