import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductosScreen from './screens/ProductosScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import PedidoScreen from './screens/PedidoScreen';
import InicioSesionScreen from './screens/InicioSesionScreen';
import RegistroScreen from './screens/RegistroScreen';
import UserScreen from './screens/UserScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>El Restaurante Llanero</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/pedido" className="nav-link">
                  Pedido
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>

                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/user">
                      <NavDropdown.Item>Portal</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="/"
                      onClick={signoutHandler}
                    >
                      Cerrar Sesión
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/iniciosesion">
                    Iniciar Sesión
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductosScreen />} />
              <Route path="/pedido" element={<PedidoScreen />} />
              <Route path="/iniciosesion" element={<InicioSesionScreen />} />
              <Route path="/registro" element={<RegistroScreen />} />
              <Route path="/user" element={<UserScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">Proyecto - Ciclo 4 - Grupo 36</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
