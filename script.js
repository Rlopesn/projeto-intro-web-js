const turmas = [
    {
        turma: "Hipatia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numAlunos: 150,
        periodo: "Notuno",
        concluida: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numAlunos: 200,
        periodo: "Integral",
        concluida: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numAlunos: 80,
        periodo: "Integral",
        concluida: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numAlunos: 100,
        periodo: "Integral",
        concluida: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numAlunos: 90,
        periodo: "Integral",
        concluida: false
    },
];
const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Do basico ao avançado no curso de HTML e CSS",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "Do basico ao avançado no curso de JavaScript",
        duracao: "2 meses",
        valor: 900
    },
    {
        curso: "APIsRest",
        descricao: "Do basico ao avançado no curso de APIsRest",
        duracao: "6 meses",
        valor: 2000
    },
];
const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipatia",
        curso: "javaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnel",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 0,
        desconto: true,
        parcelas: 0
    },
];

const buscarCurso = (nomeCurso) => {
    const mostrarCurso = cursos.find((cadaCurso) => {
        if (cadaCurso.curso.toLowerCase() === nomeCurso.toLowerCase()) {
            return cadaCurso
        }

    })
    return mostrarCurso
}
console.log(buscarCurso('javascript'))

let carrinhoCursos = []

const carrinho = (curso) => {
    const valorCurso = buscarCurso(curso)
    carrinhoCursos.push(valorCurso.valor)
    return carrinhoCursos

}
carrinho('JavaScript')

const parcelarCurso = (carrinhoCursos, parcela) => {
    let valorTotal = 0
    let desconto = 0
    let desconto20 = 0.2
    let valorParcela = 0


    if (carrinhoCursos.length >= 1) {
        switch (carrinhoCursos.length) {
            case 3:
                desconto = 0.15
                break;
            case 2:
                desconto = 0.10
                break;
            case 1:
                desconto = 0
                break;
            default:
                desconto = 0
                break;
        }
        for (let valor of carrinhoCursos) {
            valorTotal = valorTotal + valor
        }
    }
    if (parcela <= 2 && carrinhoCursos.length === 3) {
        valorTotal -= valorTotal * (desconto + desconto20)
        valorParcela = valorTotal / parcela

        console.log(`O valor do pagamento é de R$ ${valorTotal}, obteve 15% de desconto por 3 cursos e mais 20% por pagamento avista ou parcelado em até 2x no total de 35%. Valor parcelado fica em ${parcela}x de R$ ${valorParcela.toFixed(2)}`)


    } else if (parcela <= 2 && carrinhoCursos.length === 2) {
        valorTotal -= valorTotal * (desconto + desconto20)
        valorParcela = valorTotal / parcela
        console.log(`O valor do pagamento é de R$ ${valorTotal}, obteve 10% de desconto por 3 cursos e mais 20% por pagamento avista ou parcelado em até 2x no total de 30%. Valor parcelado fica em ${parcela}x de R$ ${valorParcela.toFixed(2)}`)

    } else if (parcela <= 2 && carrinhoCursos.length === 1) {
        valorTotal -= valorTotal * desconto20
        valorParcela = valorTotal / parcela
        console.log(`O valor do pagamento é de R$ ${valorTotal}, obteve 20% por pagamento avista ou parcelado em até 2x. Valor parcelado fica em ${parcela}x de R$ ${valorParcela.toFixed(2)}`)

    } else {
        valorParcela = valorTotal / parcela
        console.log(`o pagamento é de R$ ${valorTotal},00 parcelado em ${parcela}x de R$ ${valorParcela.toFixed(2)} `)
    }
}
parcelarCurso(carrinhoCursos, 2)

const buscarTurma = (nomeTurma) => {
    const mostrarTurma = turmas.filter(item => item.turma.toLowerCase() === nomeTurma.toLowerCase())
    return mostrarTurma.length > 0 ? mostrarTurma[0] : 'turma não encontrada'
}

console.log(buscarTurma("sibyla"))
console.log(buscarTurma("Sila"))

const matricular = (nome, nomeCurso, turma, numParcela) => {

    let valorCurso = buscarCurso(nomeCurso)
    let valorTotal = 0
    let valorPorParcela = 0
    let desconto = false

    if (numParcela > 0 && numParcela <= 2) {
        desconto = true
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorPorParcela = valorTotal / numParcela
    } else {
        valorTotal = valorCurso.valor
        valorPorParcela = valorTotal / numParcela
    }

    const novoAluno = {
        estudante: nome,
        turma: turma,
        curso: nomeCurso,
        valor: valorCurso.valor,
        nParcelas: numParcela,
        desconto: desconto,
        parcela: valorPorParcela
    }
    estudantes.push(novoAluno)


    //console.log(`Aluno Matriculado \n Nome: ${nome} \n Curso: ${nomeCurso} \n Turma: ${turma}`)
}
matricular('Rafael Lopes', 'JavaScript', 'Hipatia', 2)

const buscarEstudante = (nomeEstudante) => {
    for (let i in estudantes) {
        if (estudantes[i].estudante.includes(nomeEstudante)) {
            return estudantes[i]
        }
    }
    return 'aluno não encontrado'
}
console.log(buscarEstudante('La'))

const relatorioEstudante = (nomeAluno) => {

    const estudante = buscarEstudante(nomeAluno)

    return `Aluno: ${estudante.estudante}\n Turma: ${estudante.turma}\n Curso: ${estudante.curso}\n Valor total: ${estudante.valor}\n Valor Parcela: ${estudante.parcelas}\n Quantidade parcela: ${estudante.nParcelas}`

}
console.log(relatorioEstudante("Chris Evans"))


