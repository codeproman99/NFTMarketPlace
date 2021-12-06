import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import Sidebar from "../../components/common/sidebar/sidebar";

const UploadArtwork = () => {
    return <>

        <Header />
        <SubHeader />

        <div className="primary-content-area container content-padding grid-left-sidebar">
            <Sidebar />
            <div className="main-content-area">
                <div className="page-title">
                    <h2>
                        <span className="gradient-text">Upload</span> Artwork
                    </h2>
                </div>
                <div className="user-db-content-area">
                    <div className="artwork-upload-box">
                        <div className="user-db-title">Upload & Preview</div>
                        <div className="upload-container">
                            <div className="artwork-upload">
                                <div className="label">Upload File</div>
                                <div className="upload-box"><svg className="crumina-icon">
                                    <use xlinkHref="#upload-icon"></use>
                                </svg>
                                    <div className="upload-notice"> Max 120MB, PNG, JPEG, MP3, MP4</div>
                                    <button className="btn btn-normal btn-dark browse-btn">Browse File</button>
                                </div>
                            </div>
                            <div className="artwork-preview">
                                <div className="label">File Preview</div>
                                <div className="preview-box"></div>
                            </div>
                        </div>
                    </div>
                    <div className="purchase-type-box">
                        <div className="user-db-title">Purchase Type</div>
                        <div className="db-tabs-block">
                            <ul className="db-tabs-list">
                                <li className="active"><a href="#/">
                                    <div className="purchase-type-symbol"><svg className="crumina-icon">
                                        <use xlinkHref="#dollar-icon"></use>
                                    </svg></div>
                                    <div className="purchase-type-info">
                                        <div className="purchase-type-title">Fixed Price</div>
                                        <div className="purchase-type-description">Set a fixed price for people to buy
                                            your work instantly </div>
                                    </div>
                                </a></li>
                                <li><a href="#/">
                                    <div className="purchase-type-symbol"><svg className="crumina-icon">
                                        <use xlinkHref="#clock-icon"></use>
                                    </svg></div>
                                    <div className="purchase-type-info">
                                        <div className="purchase-type-title">Timed Auction</div>
                                        <div className="purchase-type-description">Set a fixed price for people to buy
                                            your work instantly </div>
                                    </div>
                                </a></li>
                                <li><a href="#/">
                                    <div className="purchase-type-symbol"><svg className="crumina-icon">
                                        <use xlinkHref="#annotation-icon"></use>
                                    </svg></div>
                                    <div className="purchase-type-info">
                                        <div className="purchase-type-title">Open for Bids</div>
                                        <div className="purchase-type-description">Set a fixed price for people to buy
                                            your work instantly </div>
                                    </div>
                                </a></li>
                            </ul>
                            <div id="tab-1" className="tab active">
                                <div className="tab-content">
                                    <form className="cryptoki-form" id="personal-info-form">
                                        <div className="form-title">Main Details</div>
                                        <div className="form-group">
                                            <div className="form-field">
                                                <label for="name">Artwork name</label>
                                                <input type="text" id="name" value="Breathing Nature" />
                                            </div>
                                            <div className="form-field">
                                                <label for="price">Price</label>
                                                <input type="number" id="price" value="3.21" />
                                            </div>
                                            <div className="form-field">
                                                <label>Select currency</label>
                                                <select className="select-nice" name="currency" >
                                                    <option value="ETH" selected>ETH</option>
                                                    <option value="USD">USD</option>
                                                    <option value="Euro">Euro</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-field comment-area">
                                            <label>Description</label>
                                            <textarea id="message" cols="30" rows="10" className=""
                                                spellcheck="false"></textarea>
                                        </div>
                                        <button className="btn btn-wide btn-dark">Create Item</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <Footer />

    </>
}

export default UploadArtwork;