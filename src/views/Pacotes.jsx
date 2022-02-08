import React from "react";

export default function Pacotes() {
    return (
        <>
            <div class="bg-pacotes"></div>
            <div class="description-box">
                    <h1>Pacotes com promoções de até 50%</h1>
                    <h2>Passagem, hospedagem e muito mais pra você aproveitar</h2>

                    <div class="row-card">

                        <div class="coluna-card">
                        <div class="card">
                        <img src="https://i.imgur.com/I0FUuXd.jpg" alt="Rio de Janeiro" />
                        <div class="container-card">
                            <h4>Rio de Janeiro</h4> 
                            <p>Pacotes<br/>a partir de R$ &nbsp;<b>650</b></p>
                        </div>
                        </div>
                        </div>

                        <div class="coluna-card">
                        <div class="card">
                        <img src="https://i.imgur.com/ii5kcvI.jpg" alt="Maceió" />
                        <div class="container-card">
                            <h4>Maceió</h4>  
                            <p>Pacotes<br/>a partir de R$ &nbsp;<b>730</b></p> 
                        </div>
                        </div>
                        </div>

                        <div class="coluna-card">
                        <div class="card">
                        <img src="https://i.imgur.com/mdAEtaO.jpg" alt="São Paulo"/>
                        <div class="container-card">
                            <h4>São Paulo</h4>  
                            <p>Pacotes<br/>a partir de R$ &nbsp;<b>820</b></p> 
                        </div>
                        </div>
                        </div>

                        <div class="coluna-card">
                        <div class="card">
                        <img src="https://i.imgur.com/YiMnXlg.jpg" alt="Foz do Iguaçu"/>
                        <div class="container-card">
                            <h4>Foz do Iguaçu</h4>  
                            <p>Pacotes<br/>a partir de R$ &nbsp;<b>910</b></p> 
                        </div>
                        </div>
                        </div>

                    </div>
                    <br/>

                    <div class="row-form">

                        <div class="column-form">
                            <h6>
                                <i class="material-icons">
                                person_outline
                                </i>
                                &nbsp;
                                Crie sua conta no Mileva
                            </h6>
                            <h5>Descontos incríveis estão esperando você. Cadastre-se.</h5>
                        </div>

                        <div class="column-form">
                            <form action="/action_page.php">
                            <label for="nome">Nome</label>
                            <input type="text" id="nome" name="Nome" placeholder="Nome"/>
                            <br/>
                            <label for="idade">Idade</label>
                            <input type="text" id="idade" name="idade" placeholder="Idade"/>
                            <br/>
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Email"/>
                            <br/>
                            <label for="telefone">Telefone</label>
                            <input type="text" id="telefone" name="telefone" placeholder="Telefone com DDD"/>
                            <br/>
                            <input type="submit" value="Cadastrar"/>
                            </form>
                        </div>

                    </div>

                    <br/>
                    <br/>
            </div>
        </>
    );
}