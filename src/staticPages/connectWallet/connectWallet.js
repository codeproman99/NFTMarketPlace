import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { walletIcon1, walletIcon2, walletIcon3, walletIcon4 } from "../../img";

const ConnectWallet = () => {
    return <>
        <Header />
        <SubHeader />

        <div className="primary-content-area container content-padding">
            <div className="wallet-wrapper section-small">
                <div className="section-title text-center"><span className="gradient-text">Connect</span> your Wallet</div>
                <div className="wallet-grid">
                    <div className="wallet-item orange-gradient">
                        <div className="wallet-icon"><img src={walletIcon1} alt="" /></div>
                        <div className="wallet-info">
                            <div className="title h5">Metamask</div>
                            <div className="description">Learn about how to get the wallet and much more clicking <a
                                href="#/">here</a></div>
                        </div>
                    </div>
                    <div className="wallet-item turquoise-gradient">
                        <div className="wallet-icon"><img src={walletIcon2} alt="" /></div>
                        <div className="wallet-info">
                            <div className="title h5">WalletConnect</div>
                            <div className="description">Learn about how to get the wallet and much more clicking <a
                                href="#/">here</a></div>
                        </div>
                    </div>
                    <div className="wallet-item purple-gradient">
                        <div className="wallet-icon"><img src={walletIcon3} alt="" /></div>
                        <div className="wallet-info">
                            <div className="title h5">Fortmatic</div>
                            <div className="description">Learn about how to get the wallet and much more clicking <a
                                href="#/">here</a></div>
                        </div>
                    </div>
                    <div className="wallet-item green-gradient">
                        <div className="wallet-icon"><img src={walletIcon4} alt="" /></div>
                        <div className="wallet-info">
                            <div className="title h5">Portis</div>
                            <div className="description">Learn about how to get the wallet and much more clicking <a
                                href="#/">here</a></div>
                        </div>
                    </div>
                </div>
                <div className="notification-text text-center">
                    New to wallets? <a href="/faq">Learn how to make a wallet</a> in our FAQs page<br /> and check
                    other helpful guides to get started!
                </div>
            </div>

        </div>

        <Footer />
    </>
}

export default ConnectWallet;