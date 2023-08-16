/* eslint-disable no-unused-vars */
import { FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { ButtonText } from "../../components/ButtonText"

export function Home() {
  return (
    <Container>

      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" $isactive /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node.js" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'React' },
              { id: '2', name: 'Node' }
            ]
          }}
          />
        </Section>

      </Content>

      <NewNotes to="/new">
        + Criar Notas
      </NewNotes>
    </Container>
  );
}