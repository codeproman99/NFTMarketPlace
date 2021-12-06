import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { becameCreator } from "../../img";

const BecameCreator = () => {
    return (
        <>

            <Header />
            <SubHeader />

            <div>
                <div className="become-creator-bc-box container-1300 section-padding-medium">
                    <div className="bc-info">
                        <div className="bc-heading">
                            <div className="bc-heading-subtitle">JOIN OUR COMMUNITY!</div>
                            <div className="bc-heading-title">Become a <span className="gradient-text">Creator</span>
                            </div>
                        </div>
                        <div className="bc-description">Join thousands of other creators and start earning with your art,
                            artworks, videos or art creations! The process takes only a few seconds, just fill the form and
                            we’ll contact you</div>
                        <div className="bc-button"><a className="btn btn-wide btn-dark" href="#application-form">Fill the Form</a>
                        </div>
                    </div>
                    <div className="bc-image"><img src={becameCreator} alt="" /></div>
                </div>
                <div className="container-1300 section-padding-medium">
                    <div className="info-box">
                        <div className="info-item">
                            <div className="title h6">Valorize your Artwork</div>
                            <div className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div className="info-item">
                            <div className="title h6">Reach Thousands</div>
                            <div className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div className="info-item">
                            <div className="title h6">Top Royalties</div>
                            <div className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div className="info-item">
                            <div className="title h6">Crypto Earnings</div>
                            <div className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div className="info-item">
                            <div className="title h6">Creative Liberty</div>
                            <div className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div className="info-item">
                            <div className="title h6">Support other Artists!</div>
                            <div className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                    </div>
                </div>
                <div id="application-form" className="submit-artwork-section extra-small-section section-padding-medium">
                    <div className="section-title text-center">Creator <span className="gradient-text">Form</span></div>
                    <form className="cryptoki-form">
                        <div className="form-field">
                            <label for="name">Full name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-field">
                            <label for="email">Your email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label for="url">Portfolio link</label>
                            <input type="url" name="url" id="url" />
                        </div>
                        <div className="form-field file-upload">
                            <div className="label">Artwork sample</div>
                            <div className="file-uploader">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#upload-icon"></use>
                                </svg>
                                <div className="upload-notice"> Max 120MB, PNG, JPEG, MP3, MP4</div>
                                <label className="btn btn-normal btn-dark" for="upload-media">Browse File</label>
                                <input type="file" name="upload-media" id="upload-media" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-normal btn-fullwidth btn-dark">Submit for Approval</button>
                        <div className="register-notice">
                            If approved, you’ll receive a confirmation email in your inbox within 2-5 bussiness days.
                        </div>
                    </form>
                </div>

            </div>


            <Footer />

        </>
    )
}

export default BecameCreator;