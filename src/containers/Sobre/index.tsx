import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam
      ullam. Odit illum enim adipisci aperiam eius, obcaecati consectetur atque
      repellendus quidem aliquam praesentium esse deleniti in tenetur at
      voluptatem.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=rpatetti&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rpatetti&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
