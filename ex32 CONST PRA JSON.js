const vingadores = [{
    nome: 'Tony',
    sobrenome : 'Stark',
    fortuna : '24.000.000.000,00 U$D',
    codinome : 'Homem de ferro',
    esposa : true,
},{
    nome: 'Thor',
    sobrenome : null,
    fortuna : null,
    codinome : 'Deus do Trovão',
    esposa : true,
},{
    nome: 'Bruce',
    sobrenome : 'Banner',
    fortuna : '14.000,00 U$D',
    codinome : 'Hulk',
    esposa : null
}]

let registro = vingadores.map(a => a.nome)
console.log(registro)

