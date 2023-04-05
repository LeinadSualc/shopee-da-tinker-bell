import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Produto } from './pages/Produto'
import { Carrinho } from './pages/Carrinho';
export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/produto/:id'
                    element={<Produto />}
                />
                <Route
                    path='/carrinho'
                    element={<Carrinho />}
                />
            </Routes>
        </BrowserRouter>
    )
}
