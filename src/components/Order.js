import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
    renderOrder = key => {
        const ebook = this.props.ebooks[key];
        const count = this.props.order[key];
        const isAvailable = ebook && ebook.status === "available";
        const transitionOptions = {
            classNames: "order",
            key,
            timeout: { enter: 500, exit: 500 }
        };
        if(!ebook) return null;
        if(!isAvailable) {
            return (
                <CSSTransition {...transitionOptions}>
                <li key={key}>
                    Sorry {ebook ? ebook.name : "Ebook"} is no longer available
                </li>
                </CSSTransition>
            );
        }
        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition
                              classNames="count"
                              key={count}
                              timeout={{ enter: 500, exit: 500 }}>
                                <span>{count}</span>
                              </CSSTransition>
                        </TransitionGroup>
                        lbs {ebook.name}
                        {formatPrice(count * ebook.price)}
                        <button onClick={() => this.props.removeFromOrder(key)}>
                            &times;
                        </button>
                    </span>
                </li>
            </CSSTransition>
        );
    };
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const ebook = this.props.ebooks[key];
            const count = this.props.order[key];
            const isAvailable = ebook && ebook.status === "available";
            if(isAvailable) {
                return prevTotal + count * ebook.price;
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;