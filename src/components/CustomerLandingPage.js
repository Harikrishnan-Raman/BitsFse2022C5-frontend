import { Component } from 'react'
export class CustomerLandingPage extends Component{
    state={transactions:[]}
    render(){
        const {transactions} = this.state
        const activeTransactions = transactions.filter(transaction => transaction.orderStatus !== 'Delivered')
        const transactionElements = activeTransactions.map((transaction) =>
        <div className="transactionDetails" key={transaction.orderId}>
            <div className="orderId"> {transaction.orderId}</div>
            <div className="orderDate"> {transaction.orderDate}</div>
            <div className="deliveryDate">{transaction.deliveryDate}</div>
            <div className="orderStatus">{transaction.orderStatus}</div>
            <div className="noOfItems">{transaction.noOfItems}</div>
        </div>);
        return(
        <div className="landing-page-container">
            <div className="active-transactions">
                <div className="active-transactions-header">ACTIVE TRANSACTIONS</div>
                <div className="transaction-header">
                    <div className="orderId">Order Id</div>
                    <div className="orderDate">Order Date</div>
                    <div className="deliveryDate">Delivery Date</div>
                    <div className="orderStatus">Order Status</div>
                    <div className="noOfItems">No Of Items</div>
                </div>
                {transactionElements.length !== 0 ? transactionElements : <div className="noTransactions">No Transactions</div>}
            </div>
        </div>
        )
    }
    componentDidMount() {
            this.getTransactions();
    }
    getTransactions() {
        fetch("http://localhost:8001/transactions/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    transactions: data
                })
            })
            .catch(error => {
                
            })
    }
}









