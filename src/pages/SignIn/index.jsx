/* eslint-disable react/jsx-no-undef */
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p> Aplicação para anotar e guardar seus links úteis.</p>

        <h2>Faça seu login.</h2>

        <Input
          placeholder="email"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="senha"
          type="passworld"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
} 