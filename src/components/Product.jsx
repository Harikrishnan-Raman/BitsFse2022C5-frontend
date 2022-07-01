import React from 'react'
import { NavLink} from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { Input, Label, Button } from "reactstrap";
import {faRedo} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.searchObject = ''
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }
    state = {
        searchText: '',
        objectFound: 'default',
        transactions: [],
        product_list: []
    };
    findObject(medName) {
        const {product_list} = this.state
        product_list.map((product_search_item) => {
            if(medName == product_search_item.prodName){
            window.location.href = "http://localhost:3000/"+product_search_item.pk;
            }
          });
        return this.searchObject
        }

    handleSearchInput(event) {

        this.setState({ value: event.target.value });

    };

    handleSearchSubmit = (event) => {
        event.preventDefault();
        this.medName = this.state.value
        this.searchObject1 = this.findObject(this.medName)
        

        if(this.searchObject1){
        }
    };
    
    componentDidMount() {
        fetch("http://localhost:8001/api/product/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    product_list: json,
                });
            })
            this.getTransactions();
    }
        
    render() {
        const {product_list} = this.state
        const productElement = product_list.map((product_item) => 
                <div className="card my-5 py-5" key={product_item.pk} style={{ width: "18rem", display: 'inline-flex', margin: "10px" }}>
                    <img src="../images/DOLO.jpg" className="card-img-top" alt="Test" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{product_item.prodName}</h5>
                        <p className="lead">${product_item.prodPrice}</p>
                        <NavLink to={`/${product_item.pk}`} className="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
                </div>);

        let {transactions} = this.state
        let activeTransactions = transactions.sort((transaction1,transaction2) => {
            if(transaction2.deliveryDate < transaction1.deliveryDate){
                return -1;
            }
            else if(transaction2.deliveryDate > transaction1.deliveryDate){
                return 1;
            }
            else {
                return 0;
            }
        })
        activeTransactions = activeTransactions.filter((activeTransaction, index) => index < 3)
        const refillIcon = <FontAwesomeIcon icon={faRedo}></FontAwesomeIcon>
        const transactionElements = activeTransactions.map((transaction) =>
            <div className="transactionDetails" key={transaction.orderId}>
                <div className="orderId"> {transaction.orderId}</div>
                <div className="orderDate"> {transaction.orderDate}</div>
                <div className="deliveryDate">{transaction.deliveryDate}</div>
                <div className="orderStatus">{transaction.orderStatus}</div>
                <div className="noOfItems">{transaction.noOfItems}</div>
                <div className="refillIcon">{refillIcon}</div>
            </div>);
            
if(this.searchObject1)
{
    return(
    // <Routes>
        <Route path="#" element={ <ProductDetail /> } />
        // </Routes>
    );
}
        return (
            <Container style={{ marginTop: 100 }}>
                <center>
                <Form onSubmit={this.handleSearchSubmit }  >
                    <Label> 
                        <Input type="text" name="name" id="name" placeholder="Search..." value={this.state.value} onChange={this.handleSearchInput} />
                    </Label>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {/* <Input type="submit" value="Submit" /> */}
                    <Button color="primary" size="sm" >Submit</Button>
                </Form>
                </center>
                <div className="landing-page-container">
                    <div className="active-transactions">
                        <div className="active-transactions-header">LAST THREE TRANSACTIONS</div>
                        <div className="transaction-header">
                            <div className="orderId">Order Id</div>
                            <div className="orderDate">Order Date</div>
                            <div className="deliveryDate">Delivery Date</div>
                            <div className="orderStatus">Order Status</div>
                            <div className="noOfItems">No Of Items</div>
                            <div className="refillIcon">Repeat Order</div>
                        </div>
                        {transactionElements.length !== 0 ? transactionElements : <div className="noTransactions">No Transactions</div>}
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Product</h1>
                            <div>
                                {productElement}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
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

export default Product
