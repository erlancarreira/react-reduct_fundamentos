import './TableProducts.css'
import React from 'react' 
import products from '../../data/produtos'

export default props => {
    function getLines() { 
        return products.map((product, i) => (
            <tr key={product.id}
                className={i % 2 === 0 ? 'Par' : ''}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        ))
    }
    return ( 
        <div className="TableProducts">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    )
}