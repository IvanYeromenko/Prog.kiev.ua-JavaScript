import React from 'react';

function Button(){
    let [count, setNewCount] = React.useState(0); //место для переменных
    const log =() => {
        setNewCount(count + 1);
        console.log(count);
    }
return (<button className = "some-button" onClick={log}>Submits {count}</button>);//все события вызываются через большую букву
}

export default Button;