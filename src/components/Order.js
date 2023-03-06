import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
    render() {
        const total = 0;
        return (
            <div className="order-wrap">
                <h2>Order!!!</h2>
                <ul className="order">

                </ul>
                <div className="total">
                    Total: <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;