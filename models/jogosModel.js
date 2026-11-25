// models/jogosModel.js

const jogos = [
    { idjogo: 1, nomejogo: "GTA VI", fabricante: "RockStar", idademin: 18, anolanc: 2026 },
    { idjogo: 2, nomejogo: "GTA V", fabricante: "RockStar", idademin: 18, anolanc: 2026 },
    { idjogo: 3, nomejogo: "GTA IV", fabricante: "RockStar", idademin: 18, anolanc: 2026 },
    { idjogo: 4, nomejogo: "FORTNITE", fabricante: "EpicGames", idademin: 14, anolanc: 2014 }
];

// GET listar todos
export const getJogos = () => {
    return jogos;
};

// GET listar por id
export const getJogosPorId = (id) => {
    return jogos.find(jogo => jogo.idjogo === id);
};

// GET listar por fabricante
export const getJogosPorFabricante = (fabricante) => {
    return jogos.filter(jogo => jogo.fabricante.toLowerCase() === fabricante.toLowerCase());
};

// GET listar por ano de lançamento
export const getJogosPorAno = (ano) => {
    return jogos.filter(jogo => jogo.anolanc === ano);
};