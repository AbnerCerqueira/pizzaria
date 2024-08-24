class Pizza {
    constructor(sabor, ...args) {
        const [options] = args
        const { tamanho, borda, extra, opcional } = options
        this.sabor = sabor
        this.tamanho = tamanho
        this.borda = borda
        this.extra = extra
        this.opcional = opcional
    }

    toObject() {
        return {
            sabor: this.sabor,
            tamanho: this.tamanho,
            borda: this.borda,
            extra: this.extra ?? undefined,
            opcional: this.opcional ?? undefined
        }
    }
}

class PizzaMussarela extends Pizza {
    constructor(...args) {
        super('Mussarela', ...args)
    }
}

class PizzaCalabresa extends Pizza {
    constructor(...args) {
        super('Calabresa', ...args)
    }
}

class PizzaFrangoCatupiry extends Pizza {
    constructor(...args) {
        super('Franco com Catupiry', ...args)
    }
}

class PizzaPortuguesa extends Pizza {
    constructor(...args) {
        super('Porguesa', ...args)
    }
}

class PizzaBanana extends Pizza {
    constructor(...args) {
        super('Banana', ...args)
    }
}

class FabricaPizza {
    fabricaPizza(...args) {
        throw new Error('A pizza deve ser fabricada pela subclass')
    }
}

class FabricaPizzaMussarela extends FabricaPizza {
    fabricaPizza(...args) {
        return new PizzaMussarela(...args)
    }
}

class FabricaPizzaCalabresa extends FabricaPizza {
    fabricaPizza(...args) {
        return new PizzaCalabresa(...args)
    }
}

class FabricaPizzaFrangoCatupiry extends FabricaPizza {
    fabricaPizza(...args) {
        return new PizzaFrangoCatupiry(...args)
    }
}

class FabricaPizzaPortuguesa extends FabricaPizza {
    fabricaPizza(...args) {
        return new PizzaPortuguesa(...args)
    }
}

class FabricaPizzaBanana extends FabricaPizza {
    fabricaPizza(...args) {
        return new PizzaBanana(...args)
    }
}

const fabricaPizzaMussarela = new FabricaPizzaMussarela()
console.log('\n-----PIZZA MUSSARELA-----')
console.log(fabricaPizzaMussarela
    .fabricaPizza({
        tamanho: 'Família',
        borda: 'Tradidional',
        extra: 'Azeite',
        opcional: 'Orégano'
    })
    .toObject())

const fabricaPizzaCalabresa = new FabricaPizzaCalabresa()
console.log('\n-----PIZZA CALABRESA-----')
console.log(fabricaPizzaCalabresa
    .fabricaPizza({
        sabor: 'Calabresa',
        tamanho: 'familia',
        borda: 'Recheada Cheddar',
        preco: 30,
        opcional: 'Pimenta Calabresa'
    })
    .toObject())


const fabricaPizzaFrangoCatupiry = new FabricaPizzaFrangoCatupiry()
console.log('\n-----PIZZA FRANGO COM CATUPIRY-----')
console.log(fabricaPizzaFrangoCatupiry
    .fabricaPizza({
        sabor: 'Frango com Catupiry',
        tamanho: 'Grande',
        borda: 'recheada Catupiry',
        preco: 40,
        opcional: 'Pimenta Preta'
    })
    .toObject())

const fabricaPizzaPortuguesa = new FabricaPizzaPortuguesa()
console.log('\n-----PIZZA PORTUGUESA-----')
console.log(fabricaPizzaPortuguesa
    .fabricaPizza({
        sabor: 'Portuguesa',
        tamanho: 'Padrão',
        borda: 'Tradicional',
        preco: 40,
        opcional: 'Azeitona Preta'
    })
    .toObject())

const fabricaPizzaBanana = new FabricaPizzaBanana()
console.log('\n-----PIZZA BANANA-----')
console.log(fabricaPizzaBanana
    .fabricaPizza({
        sabor: 'Banana',
        tamanho: 'Brotinho',
        borda: 'Sem Borda',
        preco: 45,
        extra: 'Calda Chocolate'
    })
    .toObject())


