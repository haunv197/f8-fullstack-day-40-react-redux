import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Provinces from "./pages/Address/Province";
import PostList from "./pages/PostList";
import UserList from "./pages/UserList";
function App() {
  return (
    <Router basename="/f8-fullstack-day-40-react-redux">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/provinces" element={<Provinces />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
