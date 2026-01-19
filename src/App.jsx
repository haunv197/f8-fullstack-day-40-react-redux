import { BrowserRouter as Router, Routes, Route } from "react-router";
import PostList from "./pages/PostsList";
import UserList from "./pages/UsersList";
import Navigation from "./components/layout/Navigation";
function App() {
  return (
    <Router basename="/f8-fullstack-day-40-react-redux">
      <Navigation />
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
