import React from 'react'

function SubListItems({ icon, text, text2 }) {
    return (
        <div class="user-info">
            <div class="user-info-first">
                <img src={icon} alt="logo" />
                <p class="user-info-text font-color weight-two">
                    {text}
                </p>
            </div>
            <div class="user-info-second">
                <p class="font-color-two weight-two">{text2}</p>
            </div>
        </div>
    )
}

export default SubListItems