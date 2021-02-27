import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const players =['massi', 'Ronaldo', 'shala', 'naymer', 'Pogba', 'Dimara'];
const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Photography', price: '$90.99'},
    {name: 'Illustrator', price: '$92.99'},
    {name: 'InDesign', price: '$89.99'},
    {name: 'Adobe XD', price: '$95.99'}
]
    return ( 
    <div className = "App">
        <header className ="App-header" >
            <p>I am a React Person</p>
            <Counter></Counter>
            <Users></Users>

            <ul>
                {
                    players.map(player => <li>{player}</li>)
                }
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
            {/* <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
            <Product product={products[2]}></Product>
            <Product product={products[3]}></Product>
            <Product product={products[4]}></Product> */}
            
            <Person name='Uttam Kumar' heroin='Suchitra sen'></Person>
            <Person name='Nayak Raz Razak' heroin='Kabori'></Person>
            <Person name='Almongir' heroin='Sabana'></Person>
            <Person name='Shalmansha' heroin='Sabnur'></Person>
            <Person name='Reaiz' heroin='Purnima'></Person>
        </header > 
        </div>
    );
}


function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    })
    return(
        <div>
            <h3>Dynamic Users   {users.length}</h3>
            <ul>
                    {
                        users.map(user => <li>{user.name}</li>)
                    }
            </ul>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(10);
    const handleIncrease = () => {
        // const newCount = count + 1;
        setCount(count + 1);
    }
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

function Product(props) {
    const productStyle={
        border: '2px solid salmon',
        borderRadius:'5px',
        backgroundColor:'tomato',
        color:'#fff',
        margin:'10px',
        padding: '15px',
        height: '200px',
        width: '200px',
        float: "left"

    }
    // Distucher
    const {name, price} = props.product;
    console.log(name, price);

    return(
        <div style={productStyle}>
            <h4>{name}</h4>
            <h3>{price}</h3>
            {/* <h3>{props.product.price}</h3> */}
            <button>Buy Now</button>
        </div>
    );
}

function Person(props) {
    const personStyle ={
        border: '2px solid green',
        margin: '10px',
        padding:'20px'
    }
    
    return( 
    <div style={personStyle}>
        {/* style= {{border: "2px solid red", margin: "10px"}} */}
        <h1>Hero: {props.name}</h1>
        <h3>Heroin: {props.heroin}</h3>
    </div>
    );
}

export default App;