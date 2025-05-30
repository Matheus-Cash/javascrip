class Anima{
    constructor(none){
        this.nome = nome
    }

    emitirSom(){
        return"som aleatorio"
    }
}

class Cachorro extends Animal{
    constructor(nome){
        super(nome);
    }

    emitirSom(){
        return "au au au au ";
    }
    abanarRabo(){
        return `${this.none}abanou o rabinho`
    }
     

}