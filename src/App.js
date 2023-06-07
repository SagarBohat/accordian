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
import Header from "./components/header";
import Accodian from "./components/Accodian";
import Profile from "./components/Profile";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div class="outer-div">
      <div class="card">
        <Header logo={logo} setting={setting} cross={cross} />
        <Accodian prospect={prospect} comapany={comapany} find={find} />
        <Profile
          Avatar={Avatar}
          fb={fb}
          google={google}
          skype={skype}
          tweet={tweet}
          yt={yt}
          git={git}
          instagram={instagram}
          save={save}
        />
        <ListItems
          mail={mail}
          officeBuilding={officeBuilding}
          phone={phone}
          seniority={seniority}
          location={location}
          gender={gender}
          currencyDollar={currencyDollar}
          informationCircle={informationCircle}
        />
      </div>
    </div>
  );
}

export default App;
