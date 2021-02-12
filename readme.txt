fundamentos

->iniciar um projeto novo
->componentização
    padrões e melhores práticas
    documentação e testes
->Aplicação de estilos
    css próprio
    css in js com styled components
->Estrutura do projeto
    formatação de código
    organização dos diretorios e arquivos
    editor, extensões e snippets
    dev server e git

etapas do processo de desenvolvimento * generalizado

1-> Expecificação (foco de equipe)
2-> Design (foco expecifico(equipe))
3-> desenvolvimento(nosso foco)
4-> Revisão (foco de equipe mas nosso tbm)
5-> Lançamento (nosso foco)


ferramentas de desenvolvimento utilizadas: 
    ->storybook, para previsualização dos components criados "npx sb init"
    ->prettier, para formatação do codigo
    ->editorconfig, para configuração de projeto
    ->storybook, para previsualização de designer
    ->jest para tdd(Desenvolvimento guiado por testes)
    ->jest-styled-components para compatibilidade dos teste com jest junto ao styled-components
pacotes de desenvolvimento utilizados
    ->o @storybook/addon-viewport, para verificação do viewport
    ->o @storybook/addon-docs, para uma visualização do codigo melhor
    ->o prop-types, para uma expecificação de tipos
    ->o @storybook/addon-knobs para visualização de documentação
    ->faker para criação dinamica de dados falsos para o storybook
pacotes utilizados
    ->styled-components, para fazer um uso adequado do css no javascript
    ->react-helmet, para fazer importação de links

pacotes de manipulação de svg
@svgr/cli, é usado para manipular svg
depois adiciona o script "svg": "svgr --icon --replace-attr-values '#ffc107=currentColor' -d src/draws/"
para usar basta yarn svg <nome do arquivo>

Biblioteca de rotas:
    site oficial: https://reactrouter.com/
    yarn add history react-router-dom@next

Custom hook
 nada mais é que uma função que retorna um hook
 mas obrigatoriamente tem que ter o nome iniciado com "use"

Testes
    Teste de fumaça/smoke test


Rotas componentizadas
    Na pasta de rotas ficará as regras de negocio da aplicação(a logica)

