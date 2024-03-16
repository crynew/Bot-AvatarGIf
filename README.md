# Bot-AvatarGIf

# Atualização de Avatar Discord

Este é um script Node.js simples para atualizar o avatar de um usuário Discord usando um arquivo de imagem local.

## Requisitos

- Node.js instalado na máquina local
- Pacote `node-fetch` instalado (instalado automaticamente quando o script é baixado via npm)

## Como Usar

1. Clone ou baixe este repositório em sua máquina local.

2. Certifique-se de ter o Node.js instalado em sua máquina.

3. Instale o pacote `node-fetch` executando o seguinte comando na pasta do projeto:
    ```
    npm install node-fetch
    ```

4. Adicione o arquivo de imagem que deseja usar como avatar do Discord na raiz do projeto. Por padrão, o nome do arquivo é `space.gif`, mas você pode alterar o nome do arquivo no código conforme necessário.

5. Substitua o token na variável `token` no código pelo token do seu bot Discord. Certifique-se de que seu bot tenha a permissão necessária para alterar seu avatar.

6. Execute o script executando o seguinte comando na pasta do projeto:
    ```
    node index.js
    ```

Isso enviará uma solicitação para atualizar o avatar do usuário Discord associado ao token fornecido com o conteúdo do arquivo de imagem especificado.
