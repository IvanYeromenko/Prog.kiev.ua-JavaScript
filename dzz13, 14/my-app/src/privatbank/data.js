import React from 'react';
import OneData from './onedata';

function Data(){
    let data = [
        {id: 1, name: "ccy", ccy:"USD", base_ccy:"UAH", buy:"28.15000", sale:"28.55000"},
        {id: 2, name: "base_ccy", ccy:"EUR", base_ccy:"UAH", buy:"33.10000", sale:"33.70000"},
        {id: 3, name: "buy", ccy:"RUR", base_ccy:"UAH", buy:"0.35700", sale:"0.39700"},
        {id: 4, name: "sale", ccy:"BTC", base_ccy:"USD", buy:"12454.2530", sale:"13765.2270"}
    ]
    return(
        <table>
            <thead>
                <tr>
                    {data.map(el => (
                        <OneData key="el.ccy" data = {el}/>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((el) => (
                        <tr><td>{el.ccy}</td><td>{el.base_ccy}</td><td>{(+el.buy).toFixed(2)}</td><td>{(+el.sale).toFixed(2)}</td></tr>
                    ))}
            </tbody>
        </table>
    );
}

export default Data;