/* eslint-disable react/jsx-no-undef */
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignUp() {
  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p> Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta.</h2>

        <Input
          placeholder="nome"
          type="text"
          icon={FiUser}
        />

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

        <Button title="Cadastrar" />

        <Link to="/">
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
} 