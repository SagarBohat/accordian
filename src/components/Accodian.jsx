import React from 'react'

function Accodian({ prospect, comapany, find }) {
    return (
        <div class="segment">
            <div class="segment-main-div">
                <div class="segment-div">
                    <div id="bottom-border" class="segment-item">
                        <img src={prospect} class="segment-img" alt="logo" />
                        <p class="font-color weight">Prospect</p>
                    </div>
                </div>
                <div class="segment-div">
                    <div class="segment-item">
                        <img src={comapany} class="segment-img" alt="logo" />
                        <p class="weight">Company</p>
                    </div>
                </div>
                <div class="segment-div">
                    <div class="segment-item">
                        <img src={find} class="segment-img" alt="logo" />
                        <p class="weight">Find Similar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accodian