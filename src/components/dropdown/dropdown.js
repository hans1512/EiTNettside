import * as React from 'react';
import './dropdown.css'

const Dropdown = ({items}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleDropdownOptions = (option) => {
        // do something
        setOpen(false);
        console.log(option)
    };


    return (
        <div className="dropdown">
            <button onClick={handleOpen}>Dropdown</button>
            {open ? (
                <ul className="menu">
                    {items.map((menuItem, index) => (
                        <li key={index} className="menu-item">
                            {React.cloneElement(menuItem, {
                                onClick: () => {
                                    handleDropdownOptions(menuItem.props.children)
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