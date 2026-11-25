import * as jogosModel from "../models/jogosModel.js";

//get jogos /jogos
export const getJogos = (req,res)=>{
    const Jogos = jogosModel.getJogos();
    res.status(200).json(Jogos);
}

//get jogos por id /jogos/:id
export const getJogosPorId = (req,res)=>{
    const id = parseInt(req.params.id);
    const Jogos = jogosModel.getJogosPorId(id);
    if(Jogos){
        res.status(200).json(Jogos);
    } else {
        res.status(404).json({ message: `Jogo com id ${id} não encontrado` });
    }
}

//get por fabricante /jogos/fabricante/:fabricante
export const getJogosPorFabricante = (req,res)=>{
    const fabricante = req.params.fabricante.trim();
    const Jogos = jogosModel.getJogosPorFabricante(fabricante);
    if(Jogos.length > 0){
        res.status(200).json(Jogos);
    } else {
        res.status(404).json({ message: `Nenhum jogo encontrado com o fabricante ${fabricante}` });
    }
}

//get por ano de lançamento /jogos/:id/ano/:ano
export const getJogosPorAno = (req,res)=>{
    const ano = parseInt(req.params.ano);
    const Jogos = jogosModel.getJogosPorAno(ano);
    if(Jogos.length > 0){
        res.status(200).json(Jogos);
    } else {
        res.status(404).json({ message: `Nenhum jogo encontrado com o ano de lançamento ${ano}` });
    }
}