import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form, InputContainer, ButtonContainer } from "./styles";


export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <p>
                <FiArrowLeft />
                Voltar
              </p>
            </Link>
            <h1>Novo filme</h1>
          </header>

          <InputContainer>
            <div style={{ flex: 1 }}>
              <Input style={{ width: '100%' }} placeholder="Título" />
            </div>
            <div style={{ flex: 1 }}>
              <Input style={{ width: '100%' }} placeholder="Sua nota de 0 a 5" />
            </div>
          </InputContainer>
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <NoteItem value="Drama" />
            <NoteItem isNew placeholder="Novo marcador" />
          </Section>

          <ButtonContainer>
            <div style={{ flex: 1 }} >
              <Button style={{ width: '100%', background: "#0D0C0F", color: "#FF859B" }} title="Excluir filme" />
            </div>
            <div style={{ flex: 1 }}>
              <Button style={{ width: '100%' }} title="Salvar alterações" />
            </div>
          </ButtonContainer>


        </Form>
      </main>

    </Container>
  );
}