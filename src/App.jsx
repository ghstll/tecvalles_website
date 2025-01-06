import { Route, Routes } from "react-router-dom";
import AdminHome from "./pages/admin/adminHome";
import Login from "./pages/login";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/home" element={<AdminHome></AdminHome>}></Route>
        </Routes>
    );
}

export default App;
