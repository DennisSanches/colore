# Colore Cultural | Site institucional

Site institucional responsivo, desenvolvido em HTML, CSS e JavaScript puro. Não exige instalação de dependências, build ou servidor de aplicação.

## Estrutura

- `index.html`: conteúdo e estrutura semântica.
- `styles.css`: identidade visual, layout responsivo e estados de interação.
- `script.js`: menu mobile, ano automático e formulário de contato.
- `config.js`: configuração do WhatsApp comercial.
- `assets/`: logotipo e imagens extraídas do documento de estratégia fornecido.

## Configuração obrigatória antes da publicação

Abra `config.js` e informe o número comercial de WhatsApp da Colore, com código do país, DDD e número, somente dígitos.

Exemplo fictício:
```js
window.COLORE_CONFIG = {
  whatsappNumber: "5511999999999"
};
```

Não publique com o número vazio. Sem essa configuração, o formulário informa que o canal ainda precisa ser configurado e não envia dados.

O formulário abre uma conversa no WhatsApp com a mensagem preenchida. O visitante ainda precisa confirmar o envio no WhatsApp. Este site não armazena dados e não possui backend.

## Como testar localmente

1. Extraia a pasta do ZIP.
2. Preencha `config.js` com o WhatsApp comercial autorizado.
3. Abra `index.html` no navegador.
4. Teste o formulário e os links em desktop e celular.

Para testar com um servidor local, execute na pasta do projeto:
```bash
python -m http.server 8000
```
Depois acesse `http://localhost:8000`.

## Como hospedar

Pode ser publicado como site estático em qualquer hospedagem que sirva arquivos HTML/CSS/JS, incluindo:
- Vercel (deploy de projeto estático)
- Netlify
- GitHub Pages
- hospedagem tradicional com gerenciador de arquivos/FTP

Envie todos os arquivos e pastas mantendo a estrutura. O arquivo inicial é `index.html`.

## Antes de colocar no ar: validações da Colore

O texto foi construído a partir do documento de estratégia fornecido. Antes da publicação, a equipe deve confirmar:

1. Número oficial de WhatsApp e eventual e-mail comercial.
2. Serviços efetivamente oferecidos, entregáveis e nomenclatura comercial.
3. História institucional, equipe, endereço e redes sociais, caso sejam incluídos depois.
4. Autorização para uso das imagens, nomes, marcas e referências de projetos.
5. Papel efetivo da Colore em cada iniciativa. As imagens estão identificadas como referências, não como comprovação de execução pela Colore.
6. Revisão jurídica da política de privacidade e dos textos institucionais conforme a operação real.

O site evita prometer aprovação de projetos, captação de recursos ou benefícios fiscais garantidos. A elegibilidade e os efeitos tributários dependem das regras aplicáveis e de análise específica.

## Observações técnicas

- HTML semântico e idioma `pt-BR`.
- Layout responsivo para telas pequenas e grandes.
- Navegação por teclado e link para pular ao conteúdo.
- Estados de foco visíveis e respeito à preferência por movimento reduzido.
- Imagens com texto alternativo e carregamento tardio na galeria.
- Metadados básicos para mecanismos de busca e compartilhamento.
- Nenhuma biblioteca JavaScript externa ou dependência de build.
