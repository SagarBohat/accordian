import React from 'react'
import SubListItems from './SubListItems'
import SubListItemNoColor from './SubListItemNoColor'

function ListItems({ mail, officeBuilding, phone, seniority, location, gender, currencyDollar, informationCircle }) {
    return (
        <>
            <SubListItems icon={mail} text="View email address" text2="Business" />
            <SubListItems icon={officeBuilding} text="View HQ number" text2="HQ" />
            <SubListItems icon={phone} text="View mobile address" text2="Mobile" />
            <SubListItemNoColor icon={seniority} text="Seniority" text2="C-Level" />
            <SubListItemNoColor icon={location} text="Location" text2="New York, NY, USA" />
            <SubListItemNoColor icon={gender} text="gender" text2="Male" />
            <SubListItemNoColor icon={currencyDollar} text="Funding" text2="$8M" />
            <div class="user-info">
                <div class="user-skill-first">
                    <img src={informationCircle} alt="logo" />
                    <p class="user-info-text weight-two">Skills</p>
                </div>
                <div class="user-skill-second">
                    <p class="font-color-two weight-two">
                        Microsoft Office, Microsoft Excel,
                        <br /> Leadership, Microsoft Word,
                        <br /> Research, Powerpoint, Public
                        <br /> Speaking, Social Media, Marketing
                    </p>
                </div>
            </div>

        </>
    )
}

export default ListItems