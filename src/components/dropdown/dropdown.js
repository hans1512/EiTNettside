import * as React from 'react';
import './dropdown.css'

const Dropdown = ({items, type}) => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(type);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleDropdownOptions = (option) => {
        setOpen(false);
        setSelected(option)
    };

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={handleOpen}>{selected}</button>
            {open ? (
                <ul className="menu">
                    {items.map((menuItem, index) => (
                        <li key={index} className="menu-item">
                            {React.cloneElement(menuItem, {
                                onClick: () => {
                                    handleDropdownOptions(menuItem.props.children)
                                    menuItem.props.onClick(menuItem.props.children)
                                },
                            })}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Dropdown;