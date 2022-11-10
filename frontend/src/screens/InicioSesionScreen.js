import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function InicioSesionScreen() {
  const { search } = useLocation(); //redirect location from URL useLocation es un hook
  const redirectInURL = new URLSearchParams(search).get('redirect');
  const redirect = redirectInURL ? redirectInURL : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title> Iniciar Sesión</title>
      </Helmet>
      <h1 className="my-3">Inicie Sesión</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Iniciar Sesión</Button>
        </div>
        <div className="mb-3">
          ¿Nuevo Cliente?{' '}
          <Link to={`/registro?redirect=${redirect}`}>
            Cree su cuenta de usuario
          </Link>
        </div>
      </Form>
    </Container>
  );
}
