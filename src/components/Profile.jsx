import React from 'react'

function Profile({ Avatar, fb, google, skype, tweet, yt, git, instagram, save }) {
    return (
        <>
            <div class="profile">
                <div class="profile-first-section">
                    <img src={Avatar} class="profile-image" alt="logo" />
                </div>
                <div class="profile-second-section">
                    <div class="profile-social">
                        <img src={fb} class="social-icons" alt="social-icons" />
                        <img src={google} class="social-icons" alt="social-icons" />
                        <img src={skype} class="social-icons" alt="social-icons" />
                        <img src={tweet} class="social-icons" alt="social-icons" />
                        <img src={yt} class="social-icons" alt="social-icons" />
                        <img src={git} class="social-icons" alt="social-icons" />
                        <img src={instagram} class="social-icons" alt="social-icons" />
                    </div>
                    <div class="save-contact">
                        <div class="save-contact-btn">
                            <img src={save} class="social-iconss" alt="social-icons" />
                            <p class="save-contact-text">Save Contact</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="designation-section">
                <div class="profile-name">
                    <h3>Jese leos</h3>
                    <p class="ceo font-color-two">CEO</p>
                </div>
                <div class="profile-desc">
                    <p class="weight-two">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam,.....
                    </p>
                </div>
            </div>
        </>
    )
}

export default Profile