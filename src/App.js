// import logo from "./logo.svg";
import logo from "./images/Fortmatic.png";
import cross from "./images/cross.png";
import setting from "./images/setting.png";
import prospect from "./images/prospect.png";
import comapany from "./images/company.png";
import find from "./images/find.png";
import Avatar from "./images/Avatar.png";
import fb from "./images/fb.png";
import google from "./images/google.png";
import skype from "./images/skype.png";
import tweet from "./images/tweet.png";
import yt from "./images/yt.png";
import git from "./images/git.png";
import instagram from "./images/Instagram.png";
import mail from "./images/mail.png";
import officeBuilding from "./images/officeBuilding.png";
import phone from "./images/phone.png";
import seniority from "./images/seniority.png";
import location from "./images/location.png";
import gender from "./images/gender.png";
import save from "./images/save.png";
import currencyDollar from "./images/currencyDollar.png";
import informationCircle from "./images/informationCircle.png";

import "./App.css";

function App() {
  return (
    <div class="outer-div">
      <div class="card">
        <div class="header">
          <div class="logos">
            <img src={logo} class="logo" alt="logo" />
          </div>
          <div class="header-right">
            <img src={setting} class="logo" alt="logo" />
            <img src={cross} class="logo pad" alt="logo" />
          </div>
        </div>

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

        <div class="user-info">
          <div class="user-info-first">
            <img src={mail} alt="logo" />
            <p class="user-info-text font-color weight-two">
              View email address
            </p>
          </div>
          <div class="user-info-second">
            <p class="font-color-two weight-two">Business</p>
          </div>
        </div>

        <div class="user-info">
          <div class="user-info-first">
            <img src={officeBuilding} alt="logo" />
            <p class="user-info-text font-color weight-two">View HQ number</p>
          </div>
          <div class="user-info-second">
            <p class="font-color-two weight-two">HQ</p>
          </div>
        </div>

        <div class="user-info">
          <div class="user-info-first">
            <img src={phone} alt="logo" />
            <p class="user-info-text font-color weight-two">
              View mobile address
            </p>
          </div>
          <div class="user-info-second">
            <p class="font-color-two weight-two">Mobile</p>
          </div>
        </div>

        <div class="user-info">
          <div class="user-info-first">
            <img src={seniority} alt="logo" />
            <p class="user-info-text weight-two">Seniority</p>
          </div>
          <div class="user-info-second">
            <p class="font-color-two weight-two">C-Level</p>
          </div>
        </div>

        <div class="user-info">
          <div class="user-info-first">
            <img src={location} alt="logo" />
            <p class="user-info-text weight-two">Location</p>
          </div>
          <div class="user-info-second">
            <p class="font-color-two weight-two">New York, NY, USA</p>
          </div>
        </div>

        <div class="user-info">
          <div class="user-info-first">
            <img src={gender} alt="logo" />
            <p class="user-info-text weight-two">Gender</p>
          </div>
          <div class="user-info-second">
            <p class="font-color-two weight-two">Male</p>
          </div>
        </div>

        <div class="user-info">
          <div class="user-info-first">
            <img src={currencyDollar} alt="logo" />
            <p class="user-info-text weight-two">Funding</p>
          </div>
          <div class="user-info-second">
            <p class="font-color-two weight-two">$8M</p>
          </div>
        </div>

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
      </div>
    </div>
  );
}

export default App;
