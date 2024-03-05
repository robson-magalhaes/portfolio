import { Route, Routes } from "react-router-dom"
import SinglePage from "./pages/SinglePage";

export const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<SinglePage />} />
        </Routes>
    )
}

export default Router;