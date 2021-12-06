import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import Sidebar from "../../components/common/sidebar/sidebar";
import { avatarUpload, profileCover1 } from "../../img";

const ProfileIntro = () => {
    return <>

        <Header />
        <SubHeader />

        <div className="primary-content-area container content-padding grid-left-sidebar">
           <Sidebar />
            <div className="main-content-area">
                <div className="page-title">
                    <h2>
                        <span className="gradient-text">Profile</span> Info
                    </h2>
                </div>
                <div className="user-db-content-area">
                    <form className="cryptoki-form" id="personal-info-form">
                        <div className="user-db-title">Personal Info</div>
                        <div className="form-group">
                            <div className="form-field">
                                <label for="name">Full name</label>
                                <input type="text" id="name" value="Dexter Stark" />
                            </div>
                            <div className="form-field">
                                <label for="email">Email address</label>
                                <input type="email" id="email" value="dexstark@fakemail.com" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-field">
                                <label for="username">Username</label>
                                <input type="text" id="username" value="dexterstark" />
                            </div>
                            <div className="form-field">
                                <label for="phone">Phone contact</label>
                                <input type="number" id="phone" value="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-field">
                                <label for="password-1">Change password</label>
                                <input type="password" name="password" id="password-1" />
                            </div>
                            <div className="form-field">
                                <label for="password-2">Repeat password</label>
                                <input type="password" name="password" id="password-2" />
                            </div>
                        </div>
                    </form>
                    <div className="upload-photo-box">
                        <div className="user-db-title">Avatar and Cover</div>
                        <div className="user-avatar"><img src={avatarUpload} alt="" /></div>
                        <div className="user-cover-image"><img src={profileCover1} alt="" /></div>
                        <div className="upload-notice">Images must be .png or .jpg format. Min size 100x100px (avatar) and
                            1920x320px (cover) </div>
                    </div>
                </div>

                <button className="btn btn-wide btn-dark">Save Changes</button>
            </div>

        </div>

        <Footer />

    </>
}

export default ProfileIntro;