import Partida from "./Partida.js";
import Time from "./Time.js";
    
const times = [
 new Time ("Gremio", "GRE"),
 new Time("Internacional", "INT"),
 new Time("Santos", "SAN")
]
const partidas = [
    new Partida("GRE", 0, "INT", 0),
    new Partida("SAN", 1, "INT",0),
    new Partida("SAN",0,"GRE",0)    
]

partidas.forEach(partida => {
    times.forEach(time => {
        time.computarPartida(partida)
    })
})

times.forEach(time => {
    time.exibirSituacao()
})
