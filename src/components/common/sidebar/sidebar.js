import { avatar } from "../../../img";

const Sidebar = () => {
    return <aside>
        <div className="user-db-menu">
            <div className="user-db-header">
                <div className="user-db-cover-image profile-cover-image"></div>
                <div className="user-header-user-profile">
                    <div className="avatar box-64">
                        <a href="/profile-page">
                            <img src={avatar} alt="avatar" /><span className="verified"><svg
                                className="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                            </svg></span></a>
                    </div>
                    <div className="title"><a href="/profile-page">Dexter Stark</a></div>
                    <div className="item-meta"><span className="gradient-text">@DexterStark</span></div>
                </div>
            </div>
            <div className="user-db-body">
                <ul className="profile-menu">
                    <li className="profile">
                        <a href="/profile-info"><svg className="crumina-icon">
                            <use xlinkHref="#user-icon"></use>
                        </svg>Profile Info</a>
                    </li>
                    <li className="account">
                        <a href="!#"><svg className="crumina-icon">
                            <use xlinkHref="#settings-icon"></use>
                        </svg>Account Settings</a>
                    </li>
                    <li className="notification">
                        <a href="!#"><svg className="crumina-icon">
                            <use xlinkHref="#slide-filter-icon"></use>
                        </svg>Notification Settings</a>
                    </li>
                    <li className="artwork">
                        <a href="/upload-artwork"><svg className="crumina-icon">
                            <use xlinkHref="#picture-icon"></use>
                        </svg>Create Artwork</a>
                    </li>
                    <li className="wallet">
                        <a href="/connect-a-wallet"><svg className="crumina-icon">
                            <use xlinkHref="#wallet-icon"></use>
                        </svg>Wallet info</a>
                    </li>
                    <li className="verification">
                        <a href="!#"><svg className="crumina-icon">
                            <use xlinkHref="#circle-checked-icon"></use>
                        </svg>Get Verified</a>
                    </li>
                    <li className="logout">
                        <a href="#/"><svg className="crumina-icon">
                            <use xlinkHref="#logout-icon"></use>
                        </svg>Log Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
}

export default Sidebar;