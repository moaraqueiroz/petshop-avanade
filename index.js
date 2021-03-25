const nomePetShop = "PETSHOP AVANADE"

let pets = [
{
    nome: 'Apollo',
    tipo: 'cachorro',
    idade: 3,
    raca: 'Pitbull',
    peso: 35,
    tutor: 'Moara',
    contato: '(81) 98888-3106',
    vacinado: true,
    servicos: ['banho', 'corta unha']
},

{
nome: 'Happy',
tipo: 'cachorro',
idade: 5,
raca: 'Vira-Lata',
peso: 20,
tutor: 'Maria',
contato: '(81) 98888-3106',
vacinado: true,
servicos: ['banho', 'corta unha']
},

{
nome: 'Jubileu',
tipo: 'gato',
idade: 3,
raca: 'Vira-Lata',
peso: 5,
tutor: 'Moara',
contato: '(81) 98888-3106',
vacinado: true,
servicos: ['banho', 'corta unha']
}
];

const listarPets = () => {
    for (let i = 0; i < pets.length; i++){
    console.log (`${pets.name}, ${pets.idade}, ${pets.tipo}, ${pets.raca}`);
        //função
}
    
}
listarPets(); //chamar função

//console.log(pet);
