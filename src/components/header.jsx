import React from 'react'

function Header({ logo, setting, cross }) {
    return (
        <div>
            <div class="header">
                <div class="logos">
                    <img src={logo} class="logo" alt="logo" />
                </div>
                <div class="header-right">
                    <img src={setting} class="logo" alt="logo" />
                    <img src={cross} class="logo pad" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Header