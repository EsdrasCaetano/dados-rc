import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Portugues } from "./pages/Portugues";
import { Ingles } from "./pages/Ingles";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route index element={<Home />} />
                <Route path="/portugues" element={<Portugues />} />
                <Route path="/ingles" element={<Ingles />} />
            </Route>
        </Routes>
    )
}