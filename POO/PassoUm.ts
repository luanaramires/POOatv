

public class Carro {
    private Double velocidade;
    private String modelo;
    private MecanismoAceleracao mecanismoAceleracao;
    private String cor;

    /* Repare que o mecanismo de aceleração é inserido no carro ao ser construído, e
        não o vemos nem podemos modificá-lo, isto é, não tem getter nem setter.
        Já o "modelo" pode ser visto, mas não alterado. */
    public Carro(String modelo, MecanismoAceleracao mecanismoAceleracao) {
        this.modelo = modelo;
        this.mecanismoAceleracao = mecanismoAceleracao;
        this.velocidade = 0;
    }

    public void acelerar() {
        this.mecanismoAceleracao.acelerar();
    }

    public void frear() {
        /* código do carro para frear */
    }

    public void acenderFarol() {
        /* código do carro para acender o farol */
    }

    public Double getVelocidade() {
        return this.velocidade
    }

    private void setVelocidade() {
        /* código para alterar a velocidade do carro */
        /* Como só o próprio carro deve calcular a velocidade, 
            esse método não pode ser chamado de fora, por isso é "private" */
    }

    public String getModelo() {
        return this.modelo;
    }

    public String getCor() {
        return this.cor;
    }

    /* podemos mudar a cor do carro quando quisermos */
    public void setCor(String cor) {
        this.cor = cor;
    }
}

// "extends" estabelece a relação de herança dom a classe Carro
public class HondaFit extends Carro {

    public HondaFit(MecanismoAceleracao mecanismoAceleracao) {
        String modelo = "Honda Fit";
        // chama o construtor da classe mãe, ou seja, da classe "Carro"
        super(modelo, mecanismoAceleracao);
    }
}

public interface Automovel {
    void acelerar();
    void frear();
    void acenderFarol();
}

public class Carro implements Automovel {

    /* ... */

    @Override
    public void acelerar() {
        this.mecanismoAceleracao.acelerar();
    }

    @Override
    public void frear() {
        /* código do carro para frear */
    }

    @Override
    public void acenderFarol() {
        /* código do carro para acender o farol */
    }

    /* ... */
}

public class Moto implements Automovel {

    /* ... */

    @Override
    public void acelerar() {
        /* código específico da moto para acelerar */
    }

    @Override
    public void frear() {
        /* código específico da moto para frear */
    }

    @Override
    public void acenderFarol() {
        /* código específico da moto para acender o farol */
    }

    /* ... */
}

public class Main {
    public static void main(String[] args) {
        Automovel moto = new Moto("Yamaha XPTO-100", new MecanismoDeAceleracaoDeMotos())
        Automovel carro = new Carro("Honda Fit", new MecanismoDeAceleracaoDeCarros())
        List<Automovel> listaAutomoveis = Arrays.asList(moto, carro);
        for (Automovel automovel : listaAutomoveis) {
            automovel.acelerar();
            automovel.acenderFarol();
        }
    }
}

