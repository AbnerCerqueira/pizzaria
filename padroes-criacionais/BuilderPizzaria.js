class Tamannho {
    constructor(tamanho) {
        this.tamanho = tamanho
    }
}

class Borda {
    constructor(tipo) {
        this.tipo = tipo
    }
}

class Sabor {
    constructor(sabor) {
        this.sabor = sabor
    }
}

class Extra {
    constructor(opcao) {
        this.opcao = opcao
    }
}

class Opcional {
    constructor(ingrediente) {
        this.ingrediente = ingrediente
    }
}

class Pizza {
    constructor(
        tamanho,
        borda,
        sabor,
        extra,
        opcional
    ) {
        this.tamanho = tamanho
        this.borda = borda
        this.sabor = sabor
        this.extra = extra
        this.opcional = opcional
    }

    toObject() {
        return {
            tamanho: this.tamanho.tamanho,
            borda: this.borda.tipo,
            sabor: this.sabor.sabor,
            extra: this.extra?.opcao,
            opcional: this.opcional?.ingrediente
        }
    }
}

class PizzaBuilder {
    constructor() {
        this.tamanho = null
        this.borda = null
        this.sabor = null
        this.extra = null
        this.opcional = null
    }

    addTamanho(tamanho) {
        this.tamanho = new Tamannho(tamanho)
        return this
    }

    addBorda(tipo) {
        this.tipo = new Borda(tipo)
        return this
    }

    addSabor(sabor) {
        this.sabor = new Sabor(sabor)
        return this
    }

    addExtra(opcao) {
        this.opcao = new Extra(opcao)
        return this
    }

    addOpcional(ingrediente) {
        this.ingrediente = new Opcional(ingrediente)
        return this
    }

    build() {
        return new Pizza(
            this.tamanho,
            this.tipo,
            this.sabor,
            this.opcao,
            this.ingrediente
        )
    }
}

const builder = new PizzaBuilder()

const pizzaMussarela = builder
    .addSabor('Mussarela')
    .addTamanho('Familia')
    .addBorda('Tradicional')
    .addOpcional('Oregano')
    .build()
console.log('\n-----PIZZA MUSSARELA------')
console.log(pizzaMussarela.toObject())

const pizzaCalabresa = builder
    .addSabor('Calabresa')
    .addTamanho('Familia')
    .addBorda('Recheada Cheddar')
    .addOpcional('Pimenta Calabresa')
    .build()
console.log('\n-----PIZZA CALABRESA------')
console.log(pizzaCalabresa.toObject())

const pizzaFrangoCatupiry = builder
    .addSabor('Frango com Catupiry')
    .addTamanho('Grande')
    .addBorda('Rechada Catupiry')
    .addOpcional('Pimenta preta')
    .build()
console.log('\n-----PIZZA FRANGO COM CATUPIRY------')
console.log(pizzaFrangoCatupiry.toObject())

const pizzaPortuguesa = builder
    .addSabor('Portugues')
    .addTamanho('Padrão')
    .addBorda('Tradicional')
    .addOpcional('Azeitona Prea')
    .build()
console.log('\n-----PIZZA PORTUGUESA------')
console.log(pizzaPortuguesa.toObject())

const pizzaBanana = builder
    .addSabor('Banana')
    .addTamanho('Brotinho')
    .addBorda('Sem borda')
    .addExtra('Calda Chocolate')
    .build()
console.log('\n-----PIZZA BANANA------')
console.log(pizzaBanana.toObject())
