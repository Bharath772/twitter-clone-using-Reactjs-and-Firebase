import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./widgets";

import "./App.css";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
