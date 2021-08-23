import Sugestao from "./sugestao";
import SugestaoPrincipal from "./sugestao-principal.js";

const sugestaoDados = [
  {
    profile: "assets/img/bad.vibes.memes.svg",
    user: "bad.vibes.memes"
  },
  {
    profile: "assets/img/chibirdart.svg",
    user: "chibirdart"
  },
  {
    profile: "assets/img/razoesparaacreditar.svg",
    user: "razoesparaacreditar"
  },
  {
    profile: "assets/img/adorable_animals.svg",
    user: "adorable_animals"
  },
  {
    profile: "assets/img/smallcutecats.svg",
    user: "smallcutecats"
  }
];
const sugestaoPrincipalDados = {
  user: "catanacomics",
  name: "Catana",
  profile: "assets/img/catanacomics.svg"
};

export default function Sidebar() {
  return (
    <div class="sidebar">
      <SugestaoPrincipal
        user={sugestaoPrincipalDados.user}
        name={sugestaoPrincipalDados.name}
        profile={sugestaoPrincipalDados.profile}
      />

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestaoDados.map((sugestao) => (
          <Sugestao profile={sugestao.profile} user={sugestao.user} />
        ))}
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
