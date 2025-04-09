import { IUser } from "../interfaces/user/user.interface";

export const UsersList:IUser[] = [
    {
        id: 1,
        nome: "João Silva",
        dataNascimento: "1988-08-01",
        telefone: "21988882123",
        email: "joaosilva@ig.com.br",
        cpf: "14233392112",
        cnpj: "12345678000190",
        cnh: "RJ12345678",
        endereco: {
            rua: "Rua das Acácias",
            numero: 32,
            bairro: "São Cristovão",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "temporario",
        duracaoContrato: "6 meses",
        dataInicioContrato: "2025-05-01",
        ativo: true,
        funcao: "Eletricista",
        dataCadastro: "2025-04-21T09:09:00.000Z"
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        dataNascimento: "1990-02-15",
        telefone: "21999993222",
        email: "mariaoliveira@email.com",
        cpf: "",
        cnpj: "12345678000190",
        cnh: "",
        endereco: {
            rua: "Rua das Laranjeiras",
            numero: 45,
            bairro: "Laranjeiras",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "clt",
        duracaoContrato: "",
        dataInicioContrato: "2024-10-01",
        ativo: true,
        funcao: "Administradora",
        dataCadastro: "2025-04-21T10:00:00.000Z"
    },
    {
        id: 3,
        nome: "Carlos Souza",
        dataNascimento: "1985-11-20",
        telefone: "21977771234",
        email: "carlos@email.com",
        cpf: "29384756100",
        cnpj: "",
        cnh: ""
        ,
        endereco: {
            rua: "Av. Brasil",
            numero: 1000,
            bairro: "Centro",
            cidade: "Niterói",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "temporario",
        duracaoContrato: "12 meses",
        dataInicioContrato: "2025-03-01",
        ativo: false,
        funcao: "Técnico",
        dataCadastro: "2025-04-21T08:30:00.000Z"
    },
    {
        id: 4,
        nome: "Ana Martins",
        dataNascimento: "1995-06-10",
        telefone: "21933334444",
        email: "ana.martins@mail.com",
        cpf: "",
        cnpj: "45678912000155",
        cnh: "RJ98765432"
        ,
        endereco: {
            rua: "Rua das Palmeiras",
            numero: 78,
            bairro: "Botafogo",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "clt",
        duracaoContrato: "",
        dataInicioContrato: "2024-12-15",
        ativo: true,
        funcao: "Designer",
        dataCadastro: "2025-04-21T07:50:00.000Z"
    },
    {
        id: 5,
        nome: "Pedro Almeida",
        dataNascimento: "1979-04-05",
        telefone: "21911223344",
        email: "pedro.a@email.com",
        cpf: "56789012345",
        cnpj: "",
        cnh: "RJ00112233"
        ,
        endereco: {
            rua: "Rua do Catete",
            numero: 123,
            bairro: "Catete",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "temporario",
        duracaoContrato: "3 meses",
        dataInicioContrato: "2025-06-01",
        ativo: true,
        funcao: "Pintor",
        dataCadastro: "2025-04-21T09:20:00.000Z"
    },
    {
        id: 6,
        nome: "Fernanda Lima",
        dataNascimento: "1992-08-08",
        telefone: "21922334455",
        email: "fernanda@email.com",
        cpf: "",
        cnpj: "99887766000111",
        cnh: ""
        ,
        endereco: {
            rua: "Rua das Hortênsias",
            numero: 56,
            bairro: "Méier",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "clt",
        duracaoContrato: "",
        dataInicioContrato: "2025-01-10",
        ativo: true,
        funcao: "Secretária",
        dataCadastro: "2025-04-21T09:30:00.000Z"
    },
    {
        id: 7,
        nome: "Lucas Rocha",
        dataNascimento: "1980-03-03",
        telefone: "21955667788",
        email: "lucas@email.com",
        cpf: "90807060504",
        cnpj: "",
        cnh: ""
        ,
        endereco: {
            rua: "Av. Presidente Vargas",
            numero: 2345,
            bairro: "Centro",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "temporario",
        duracaoContrato: "1 ano",
        dataInicioContrato: "2025-02-01",
        ativo: false,
        funcao: "Motorista",
        dataCadastro: "2025-04-21T09:40:00.000Z"
    },
    {
        id: 8,
        nome: "Juliana Castro",
        dataNascimento: "1993-09-22",
        telefone: "21999887766",
        email: "juliana@email.com",
        cpf: "",
        cnpj: "",
        cnh: "RJ44556677"
        ,
        endereco: {
            rua: "Rua da Glória",
            numero: 12,
            bairro: "Glória",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "clt",
        duracaoContrato: "",
        dataInicioContrato: "2024-11-01",
        ativo: true,
        funcao: "Assistente",
        dataCadastro: "2025-04-21T09:50:00.000Z"
    },
    {
        id: 9,
        nome: "Bruno Teixeira",
        dataNascimento: "1987-07-07",
        telefone: "21966778899",
        email: "bruno@email.com",
        cpf: "77665544332",
        cnpj: "",
        cnh: "",
        endereco: {
            rua: "Rua do Ouvidor",
            numero: 87,
            bairro: "Centro",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "temporario",
        duracaoContrato: "9 meses",
        dataInicioContrato: "2025-03-15",
        ativo: true,
        funcao: "Auxiliar",
        dataCadastro: "2025-04-21T09:55:00.000Z"
    },
    {
        id: 10,
        nome: "Patrícia Nunes",
        dataNascimento: "1989-12-12",
        telefone: "21933445566",
        email: "patricia@email.com",
            cpf: "",
            cnpj: "11223344000199",
            cnh: "",
        endereco: {
            rua: "Rua do Lavradio",
            numero: 90,
            bairro: "Lapa",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        tipoContrato: "clt",
        duracaoContrato: "",
        dataInicioContrato: "2024-09-01",
        ativo: true,
        funcao: "Coordenadora",
        dataCadastro: "2025-04-21T09:59:00.000Z"
    }
]
