$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000', {
        placeholder:'(00)00000-0000'
    })

    $('#cep').mask('00000-000', {
        placeholder:'00000-000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo',
            email: 'Por favor, insira seu E-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            endereco: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira seu CEP'
        },
        submitHandlre: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} para serem preenchidos`)
            }
        }
    })
})