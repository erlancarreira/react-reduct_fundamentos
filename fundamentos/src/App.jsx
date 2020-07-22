import './App.css'
import React          from 'react'

import Card           from './components/layout/Card'

import IndiretaPai    from './components/comunicacao/IndiretaPai'
import DiretaPai      from './components/comunicacao/DiretaPai'
import UsuarioInfo    from './components/condicional/UsuarioInfo'
import ParOuImpar     from './components/condicional/ParOuImpar'
import ListaAlunos    from './components/repeticao/ListaAlunos'
import FamiliaMembro  from './components/basico/FamiliaMembro'
import Familia        from './components/basico/Familia'
import ValorAleatorio from './components/basico/ValorAleatorio'
import Fragmento      from './components/basico/Fragmento'
import ComParametro   from './components/basico/ComParametro'
import Primeiro       from './components/basico/Primeiro'
import TabelaProdutos from './components/repeticao/TabelaProdutos'


export default () =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title="#10 Comunicação Indireta" color="#8BAD39" >
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card title="#09 Comunicação Direta" color="#59323C" >
                <DiretaPai></DiretaPai>
            </Card>
            <Card title="#08 Renderização Condicional" color="#982395" >
                <ParOuImpar number="21"></ParOuImpar>
                <UsuarioInfo user={{ name: 'Joao' }} />
                
            </Card>
            <Card title="#07 Desafio repetição" color="#3A9AD9" >
                <TabelaProdutos /> 
            </Card>
            <Card title="#06 Repetição" color="#FF4C65" >
                <ListaAlunos ></ListaAlunos> 
            </Card>
            <Card title="#05 componente com filhos" color="#00C8F8">
                <Familia lastname="Ferreira"> 
                    <FamiliaMembro name="Pedro" />
                    <FamiliaMembro name="Joao" />
                    <FamiliaMembro name="Ana" />
                </Familia>
            </Card>
            <Card title="#04 componente aleatorio" color="#FA6900">
                <ValorAleatorio min={2} max={12} />
            </Card>
            <Card title="#03 componente fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card title="#02 componente com parametro" color="#E8B71A"> 
            <ComParametro 
                title="Mary Celia" 
                subtitle="Its is my name" 
                note={3.5} 
            />
            </Card>
            <Card title="#01 primeiro componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>