const RPC = require('discord-rich-presence')('1212556182506438686');
const express = require("express");
const cors = require("cors");

const app = express();

// Adicionando o middleware de CORS
app.use(cors());
// Aceitar solicitações JSON
app.use(express.json());

app.post("/prececa/dc", (req, res) => {
    const { state, details, largeImageKey, largeImageText } = req.body;

    const presenceData = {
        state,
        details,
        largeImageKey,
        largeImageText,
        buttons: [{ label: `Ouvindo Musi .-. Verse`, url: `https://ptb.discord.com/channels/@me/836991436410716180/1149719460194828358` }],
    };

    RPC.updatePresence(presenceData)
        .then(() => {
            res.send("Rich Presence Atualizado!");
        })
        .catch(error => {
            console.error("Erro ao atualizar o Rich Presence:", error);
            res.status(500).send("Erro ao atualizar o Rich Presence");
        });
});

app.post("/prececa/dc/progresso", (req, res) => {
    const { progresso } = req.body;
    // Atualizar o RPC com o progresso da música
    // RPC.updatePresence({ progressBarValue: progresso });
    res.send("Progresso Atualizado!");
});

app.listen(3000, () => {
    console.log("Rodando na Porta 3000");
});
