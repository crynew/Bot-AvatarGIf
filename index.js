const fs = require('fs');
const fetch = require('node-fetch');

// Caminho do arquivo de avatar a ser atualizado ( arquivo tem q ser .gif )
const filePath = '';

// Token do bot
const token = '';

async function updateAvatar() {
    try {
        const newAvatar = fs.readFileSync(filePath);
        if (!newAvatar) throw new Error('Falha ao ler o arquivo ou o arquivo está vazio.');

        const base64Avatar = newAvatar.toString('base64');
        if (!base64Avatar) throw new Error('Falha ao converter o avatar para base64.');

        const response = await fetch('https://discord.com/api/v9/users/@me', {
            method: 'PATCH',
            headers: { Authorization: `Bot ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ avatar: `data:image/gif;base64,${base64Avatar}` })
        });

        if (response.ok) console.log('Avatar atualizado com sucesso!');
        else {
            console.error(`Falha ao atualizar o avatar: ${response.statusText}`);
            console.error(`Corpo da resposta: ${await response.text()}`);
        }
    } catch (error) {
        console.error(`Erro ao atualizar o avatar: ${error}`);
    }
}

updateAvatar();
