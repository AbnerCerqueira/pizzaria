class Pizza {
    constructor(sabor, tamanho, borda, preco, extra, opcional
    ) {
        this.sabor = sabor
        this.tamanho = tamanho
        this.borda = borda
        this.preco = preco
        this.extra = extra ?? undefined
        this.opcional = opcional ?? undefined
    }

    clone() {
        return new Pizza(
            this.sabor,
            this.tamanho,
            this.borda,
            this.preco,
            this.extra,
            this.opcional
        )
    }
}

class PedidoPizza {
    constructor(cliente, pedido
    ) {
        this.cliente = cliente
        this.pedido = pedido
    }

    calculaTotal() {
        let total = 0
        for (const pizzas of this.pedido) {
            total += pizzas.preco
        }

        return total.toFixed(2)
    }
}

class Pizzaria {
    constructor(nome) {
        this.nome = nome
        this.cardapio = {}
    }

    addPizza(pizza) {
        for (const key of Object.keys(pizza)) {
            if (key !== 'preco') {
                pizza[key] = pizza[key].toLowerCase()
            }
        }

        const { sabor, tamanho, borda, preco, extra, opcional } = pizza

        this.cardapio[sabor] = new Pizza(sabor, tamanho, borda, preco, extra, opcional)
    }

    fazerPedido(cliente, pedidos) {

        const pizzasPedido = pedidos.map((pedido) => {
            for (const key of Object.keys(pedido)) {
                pedido[key] = pedido[key].toLowerCase()
            }

            const { sabor, tamanho, borda, extra, opcional } = pedido

            if (this.cardapio.hasOwnProperty(sabor)) {
                const saborEncontrado = this.cardapio[sabor]

                if (tamanho !== saborEncontrado.tamanho) {
                    throw new Error(`Pizza de ${sabor} não tem o tamanho ${tamanho} disponível`)
                }

                if (borda !== saborEncontrado.borda) {
                    throw new Error(`Pizza de ${sabor} não tem a borda ${borda} disponível`)
                }

                if (extra !== undefined && extra !== saborEncontrado.extra) {
                    throw new Error(`Pizza de ${sabor} não tem o ingrediente extra ${extra} disponível`)
                }

                if (opcional !== undefined && opcional !== saborEncontrado.opcional) {
                    throw new Error(`Pizza de ${sabor} não tem o ingrediente opcional ${opcional} disponível`)
                }

                return saborEncontrado.clone()
            }

            throw new Error(`Pizza de ${sabor} não dispinvel`)
        })

        if (pizzasPedido.length) {
            const confimaPedido = new PedidoPizza(cliente, pizzasPedido)

            console.log('\n---------' + this.nome + '---------')
            console.log(`Pedido de ${cliente}:`)

            pizzasPedido.forEach((pedido, i) => {
                const { sabor, tamanho, borda, preco, extra, opcional } = pedido

                console.log(`${i + 1}: ${sabor}, ${tamanho}, ${borda}${

                    extra && !opcional ? ', ' + extra : '',
                    opcional && !extra ? ', ' + opcional : '',
                    extra && opcional ? ', ' + extra + ', ' + opcional : ''

                    } = R$ ${preco.toFixed(2)}`)
            })

            console.log(`Total: R$ ${confimaPedido.calculaTotal()}`)
        }
    }

}

const pizzaria = new Pizzaria('Pizzaria braba')

pizzaria.addPizza({
    sabor: 'Mussarela',
    tamanho: 'familia',
    borda: 'Tradicional',
    preco: 30,
    extra: 'azeite',
    opcional: 'Orégano'
}
)

pizzaria.addPizza({
    sabor: 'Calabresa',
    tamanho: 'familia',
    borda: 'Recheada Cheddar',
    preco: 30,
    opcional: 'Pimenta Calabresa'
}
)

pizzaria.addPizza({
    sabor: 'Frango com Catupiry',
    tamanho: 'Grande',
    borda: 'recheada Catupiry',
    preco: 40,
    opcional: 'Pimenta Preta'
}
)
pizzaria.addPizza({
    sabor: 'Portuguesa',
    tamanho: 'Padrão',
    borda: 'Tradicional',
    preco: 40,
    opcional: 'Azeitona Preta'
}
)

pizzaria.addPizza({
    sabor: 'Banana',
    tamanho: 'Brotinho',
    borda: 'Sem Borda',
    preco: 45,
    extra: 'Calda Chocolate'
}
)

pizzaria.fazerPedido('Vinicius', [
    { sabor: 'Mussarela', tamanho: 'familia', borda: 'Tradicional', opcional: 'Orégano' },
    { sabor: 'Calabresa', tamanho: 'familia', borda: 'recheada cheddar' },
    { sabor: 'Banana', tamanho: 'brotinho', borda: 'sem borda' }
])

pizzaria.fazerPedido('Abner', [
    { sabor: 'Mussarela', tamanho: 'familia', borda: 'Tradicional', opcional: 'Orégano' },
    { sabor: 'Frango com Catupiry', tamanho: 'grande', borda: 'recheada catupiry' },
    { sabor: 'Banana', tamanho: 'brotinho', borda: 'sem borda' }
])
