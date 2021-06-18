import './App.css';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            transactions: [],
        }
    }

    componentDidMount() {
        const apiURL = "https://shakepay.github.io/programming-exercise/web/transaction_history.json";

        fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            const modifiedData = data.map((dataPoint) => {
                let { createdAt, amount, currency, type, direction, from } = dataPoint;
                if (currency === "BTC") {
                    amount *= 0.00002136;
                }
                if (currency === "ETH") {
                    amount *= 0.0003461817918148;
                }
                if (direction === "debit") {
                    amount = amount * -1;
                }

                return { createdAt, amount, type, from }
            })
            this.setState({ transactions: modifiedData })
        })
    }

    getAmount(total, num) {
        return total + num.amount
    }

    calculateNetWorth(dataPoint, i) {
        const { createdAt, amount, type, from } = dataPoint;
        let prevAmounts = this.state.transactions;
        if (i > 0) {
            prevAmounts = prevAmounts.slice(0, i-1);
            prevAmounts = prevAmounts.reduce(this.getAmount, 0);
        } else {
            prevAmounts = 0;
        }
        prevAmounts += amount;

        // this.setState({ currentAmount: amountToUpdate });
        return prevAmounts;
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {this.state.transactions.map((dataPoint, i) => 
                        <li key={i}>Value {i}: {this.calculateNetWorth(dataPoint, i)}</li>
                    )}
                </ul>
        
            </div>
          );
    }; 
}

export default App;
