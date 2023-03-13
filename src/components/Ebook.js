import React from "react";

class Ebook extends React.Component {
    render() {
        const { image, name, price, status, desc } = this.props.details;
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
            </li>
        );
    }
}

export default Ebook;