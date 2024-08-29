class Hero{
	constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.tipoAtaque = this.getTipoAtaque(tipo);
    }
    getTipoAtaque(tipo) {
    	if (tipo == "mago") {
      		return "magia";
    	} else if (tipo == "guerreiro") {
      		return "espada";
    	} else if (tipo == "monge") {
      		return "artes maciais";
    	} else if (tipo == "ninja") {
      		return "shuriken";
    	}
  	}
    atacar(){
    	console.log(`O ${this.nome} atacou usando ${this.tipoAtaque}`)
    }
    
    
    
}
let ninjaFlamejante = new Hero("zhin", 31, "ninja")
let magoElemental = new Hero("imani", 20, "mago")
let guardiaoReal = new Hero("khan", 200, "guerreiro")
let mongeCurador = new Hero("mal damba", 145, "monge")

ninjaFlamejante.atacar()
magoElemental.atacar()
guardiaoReal.atacar()
mongeCurador.atacar()
