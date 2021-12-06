import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import CardItem from './../../components/staticPages/cards/cardItem';
import { avatar, avatar15, featureItem1 } from "../../img";
import CardItem2 from "../../components/staticPages/cards/cardItem2";
import CardItem3 from "../../components/staticPages/cards/cardItem3";
import CardItem4 from './../../components/staticPages/cards/cardItem4';
import Footer from "../../components/common/footer/footer";

const ItemVersion = () => {
    return (
        <>
            <Header />
            <SubHeader />

            <div className="primary-content-area container content-padding">
                <div className="section-padding">
                    <div className="section-title-wrapper">
                        <div className="section-title">Item <span className="gradient-text">Version 01</span></div>
                    </div>

                    <div className="featured-box grid-4-columns">
                        <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                        <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                        <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                        <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                    </div>
                </div>

                <div className="section-padding">
                    <div className="section-title-wrapper">
                        <div className="section-title">Item <span className="gradient-text">Version 02</span></div>
                    </div>

                    <div className="featured-box grid-6-columns">
                        <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                    </div>
                </div>

                <div className="section-padding">
                    <div className="section-title-wrapper">
                        <div className="section-title">Item <span className="gradient-text">Version 03</span></div>
                    </div>

                    <div className="featured-box grid-4-columns">
                        <CardItem3 creator="Dexter Stark" bidReplaced="Crimson Ray" edition="1 / 50" img3={avatar15} img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem3 creator="Dexter Stark" bidReplaced="Crimson Ray" edition="1 / 50" img3={avatar15} img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem3 creator="Dexter Stark" bidReplaced="Crimson Ray" edition="1 / 50" img3={avatar15} img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem3 creator="Dexter Stark" bidReplaced="Crimson Ray" edition="1 / 50" img3={avatar15} img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                    </div>
                </div>

                <div className="section-padding">
                    <div className="section-title-wrapper">
                        <div className="section-title">Item <span className="gradient-text">Version 04</span></div>
                    </div>

                    <div className="featured-box grid-4-columns">
                        <CardItem4 count="22" creator="Dexter Stark" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem4 count="22" creator="Dexter Stark" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem4 count="22" creator="Dexter Stark" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                        <CardItem4 count="22" creator="Dexter Stark" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ItemVersion;