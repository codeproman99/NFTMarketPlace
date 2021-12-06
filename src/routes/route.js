import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Explorer from "../staticPages/explorerPage/explorer";
import Home from "../staticPages/homePage/home";
import ItemVersion from "../staticPages/itemVersion/itemVersion";
import ProductPage from "../staticPages/productPages/productPage";
import ProductPageV2 from "../staticPages/productPages/productPageV2";
import ProductPageV3 from "../staticPages/productPages/productPageV3";
import ProfilePage from "../staticPages/profilePage/profilePage";
import ProfilePageAbout from './../staticPages/profilePage/profilePageAbout';
import Creator from './../staticPages/creator/creator';
import SpotLight from './../staticPages/spotLight/spotLight';
import Activity from './../staticPages/activity/activity';
import ConnectWallet from './../staticPages/connectWallet/connectWallet';
import FaqPage from "../staticPages/faq/faq";
import ProfileIntro from "../staticPages/profilePage/profileIntro";
import BecameCreator from "../staticPages/creator/becameCreator";
import Notification from "../staticPages/notification/notification";
import UploadArtwork from "../staticPages/uploadArtwork/uploadArtwork";

const Routes = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        // window.scrollTo(0, 0);
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, [pathname]);
    

    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/explore" component={Explorer} exact />
            <Route path="/item-versions" component={ItemVersion} exact />
            <Route path="/product-page" component={ProductPage} exact />
            <Route path="/product-page-v2" component={ProductPageV2} exact />
            <Route path="/product-page-v3" component={ProductPageV3} exact />
            <Route path="/profile-page" component={ProfilePage} exact />
            <Route path="/profile-page-about" component={ProfilePageAbout} exact />
            <Route path="/creator" component={Creator} exact />
            <Route path="/spotlight" component={SpotLight} exact />
            <Route path="/activity" component={Activity} exact />
            <Route path="/connect-a-wallet" component={ConnectWallet} exact />
            <Route path="/faq" component={FaqPage} exact />
            <Route path="/profile-info" component={ProfileIntro} exact />
            <Route path="/become-a-creator" component={BecameCreator} exact />
            <Route path="/notification" component={Notification} exact />
            <Route path="/upload-artwork" component={UploadArtwork} exact />
            <Route path="/notFound" />
            <Redirect from="*" to="/notFound" />
        </Switch>
    );
};
export default Routes;