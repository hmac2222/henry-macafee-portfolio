import React from 'react';

const layout = (props) => {
    return (
        <div>
            <NavBar brand={<a />} centerLogo alignLinks="left">
                <NavItem onClick={null}>
                    Home
                </NavItem>
            </NavBar>
        </div>
    );
}

export default layout;