import Blog from "../Blog/Blog";
import Schedule from "../Schedule/Schedule";
import Trend from "../Trend/Trend";
import "./MainContent.css";

export default function MainContent() {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog/>
    </main>
  );
}
