
import { Container, Profile } from './styles';

export function Header() {

  return (
    <Container>
      <h1>
        RocketMovies
      </h1>

      <input
        type="text"
        placeholder="Pesquisar pelo título"
      />

      <Profile to="/profile">
        <div>
          <strong>Bernardo Meine</strong>
          <span>Bem-vindo</span>
        </div>

        <img src="https://github.com/BernardoMeine.png" alt="Foto do usuário" />
      </Profile>

    </Container>
  )
}