import { Fragment } from "react";
import './ItenMenu.css';
const ItensMenu = ({ item, icon, isOpen }) => {
    return (
        <Fragment>
            <div className="menu-item">
            <img src={require(`../Icons/${icon}`)} alt={`${item} Icon`} className="menu-icon" />
            {isOpen && <span className='item-menu'>{item}</span>}
            </div>
        </Fragment>
    );
}

export default ItensMenu;