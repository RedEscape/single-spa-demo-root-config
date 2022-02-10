import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
    "@pr-single/single-spa-demo-nav",
    () => System.import("@pr-single/single-spa-demo-nav"),
    isActive.nav,
    { domElement: document.getElementById('nav-container') }
);

registerApplication(
    "@pr-single/single-spa-demo-page1",
    () => System.import("@pr-single/single-spa-demo-page1"),
    isActive.page1,
    { domElement: document.getElementById('page-1-container') }
);

registerApplication(
    "@pr-single/single-spa-demo-page2",
    () => System.import("@pr-single/single-spa-demo-page2"),
    isActive.page2,
    { domElement: document.getElementById('page-2-container') }
);

start();