
AOS.init();


const dataDoEvento = new Date("Dec 12, 2024 12:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaHora = setInterval(function() {
    const agora = new Date()
    const timeStampDoAtual = agora.getTime()

    const distaciaAteOEvento = timeStampDoEvento - timeStampDoAtual

    const diasAteOevento =  Math.floor(distaciaAteOEvento / (1000  * 60 * 60 * 24))
    const horaAteOevento = Math.floor((distaciaAteOEvento  %  (1000  * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosPorevento = Math.floor((distaciaAteOEvento % (1000 * 60 * 60)) /  (1000 * 60))
    const segundosAteoEvento = Math.floor((distaciaAteOEvento % (1000 * 60 )) / 1000)

    document.getElementById('contado').innerHTML = `${diasAteOevento}d ${horaAteOevento}h ${minutosPorevento}m ${segundosAteoEvento}s`

    if (distaciaAteOEvento < 0 ){
        clearInterval(contaHora)
        document.getElementById('contado').innerHTML = 'Evento expirado'
    }
},1000)
