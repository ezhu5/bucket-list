webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams, alertCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.splash = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.splash = false;
        }, 4000);
    };
    LoginPage.prototype.segueToMTabs = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, alert_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                        }
                        if (!result) {
                            alert_1 = this.alertCtrl.create({
                                title: 'Invalid Username/Password',
                                subTitle: 'Please review your account information and try again.',
                                buttons: ['Okay']
                            });
                            alert_1.present();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.segueToReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Invalid Username/Password',
            subTitle: 'Please review your account information and try again.',
            buttons: ['Okay']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Evonne/Desktop/bucketlistp2/src/pages/login/login.html"*/`\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n    <div class="flb">\n      <div class="Aligner-item Aligner-item--top"></div>\n        <img src="../../assets/bl.png" style="align:center; width:75%">\n      <div class="Aligner-item Aligner-item--bottom"></div>\n    </div>\n  </div>\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bucket List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center padding>\n  <h2 style="color:white; text-align:center">Login</h2>\n\n  <img style="align:center; width:85%" src="../../assets/bl.png">\n  <br>\n  <br>\n  <ion-list>\n    \n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input [(ngModel)]="user.email" type="text" value=""></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="user.password"  type="password" value=""></ion-input>\n      </ion-item>\n    \n    </ion-list>\n    \n    <button ion-button round full (click)="segueToMTabs(user)"><ion-icon name="log-in"></ion-icon>&nbsp;Login</button>\n    <button ion-button round full (click)="segueToReg()"><ion-icon name="person-add"></ion-icon>&nbsp;New User</button>  \n  \n</ion-content>`/*ion-inline-end:"/Users/Evonne/Desktop/bucketlistp2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_charts__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore_explore__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__explore_explore__["a" /* ExplorePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__charts_charts__["a" /* ChartsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Evonne/Desktop/bucketlistp2/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Explore" tabIcon="globe"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Analytics" tabIcon="analytics"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/Evonne/Desktop/bucketlistp2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartsPage = (function () {
    function ChartsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChartsPage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Burbank", "Albuquerque", "Seattle", "Austin", "Las Vegas", "Palm Springs"],
                datasets: [{
                        label: 'Final Score',
                        data: [918, 943, 937, 898, 889, 881],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas2.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Santiago, Chile", "Cancun, Mexico", "Providenciales, Caicos Islands", "Oranjestad, Aruba", "Grand Cayman, Cayman Islands", "Havana, Cuba"],
                datasets: [{
                        label: 'Final Score',
                        data: [860, 847, 830, 726, 722, 712],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["USA", "Cuba", "England", "Spain", "Japan", "Iceland"],
                datasets: [{
                        label: 'Most Traveled Countires (%)',
                        data: [10, 19, 4, 25, 22, 20],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["JAN", "", "FEB",
                    "", "MAR", "", "APR",
                    "", "MAY", "", "JUN",
                    "", "JUL", "", "AUG",],
                datasets: [
                    {
                        label: "Net Travel Rewards Points",
                        fill: false,
                        lineTension: .01,
                        backgroundColor: "rgba(26, 196, 34, .4)",
                        borderColor: "rgb(26, 196, 34)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(26, 196, 34)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(26, 196, 34)",
                        pointHoverBorderColor: "rgb(26, 196, 34)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [0, 1000, 600, 1200, 1800, 2700, 8500,
                            8000, 12500, 40600, 50000, 78000, 104200,
                            185000, 204200],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ChartsPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas2'),
        __metadata("design:type", Object)
    ], ChartsPage.prototype, "barCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ChartsPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ChartsPage.prototype, "lineCanvas", void 0);
    ChartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charts',template:/*ion-inline-start:"/Users/Evonne/Desktop/bucketlistp2/src/pages/charts/charts.html"*/`\n<ion-header>\n    \n      <ion-navbar style="text-align:center;">\n        <ion-title>Analytics</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n      \n         <h2>Most Valued Domestic Flights</h2>\n         <h4>HOT DEALS</h4>\n       \n          <canvas #barCanvas></canvas>\n\n          <h2>Most Valued International Flights</h2> \n          \n             <canvas #barCanvas2></canvas>\n    \n        <h2>Your Most Traveled Locations</h2>\n          <canvas #doughnutCanvas></canvas>\n      \n    <h2>Travel Points Earned</h2>\n    \n          <canvas #lineCanvas></canvas>\n    \n    </ion-content>`/*ion-inline-end:"/Users/Evonne/Desktop/bucketlistp2/src/pages/charts/charts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChartsPage);
    return ChartsPage;
}());

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExplorePage = (function () {
    function ExplorePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-explore',template:/*ion-inline-start:"/Users/Evonne/Desktop/bucketlistp2/src/pages/explore/explore.html"*/`<ion-header>\n	<ion-navbar style="text-align:center;">\n		<ion-icon style="color:white" name="search"></ion-icon>\n	    <input type="text" name="search" placeholder="Search" style="color:black;" style="background-color:dodgerblue">\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="row">\n		<div class="lcolumn">\n			<div>\n				<div class="imagewrap">\n					<img src="../../assets/imgs/arizona.jpg" alt="Arizona">\n					<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Arizona, US\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n			</div>\n			<div class="imagewrap">\n					<img src="../../assets/imgs/venus-pool-maui.jpg" alt="Maui">\n					<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Hawaii, US\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n			</div>\n			<div class="imagewrap">\n						<img src="../../assets/imgs/havana.jpg" alt="Cuba">\n						<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Cuba\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n			<div class="imagewrap">\n					<img src="../../assets/imgs/britishcolumbia.jpg" alt="British Columbia">\n					<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Canada\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n			</div>\n			<div class="imagewrap">\n					<img src="../../assets/imgs/haleakala.jpg" alt="Maui">\n					<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Hawaii, US\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n			</div>\n			<div class="imagewrap">\n						<img src="../../assets/imgs/paris.jpg" alt="France">\n						<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								France\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n			<div class="imagewrap">\n					<img src="../../assets/imgs/looking-glass-nc.jpg" alt="North Carolina">\n					<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								NC, US\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n			</div>\n			<div class="imagewrap">\n					<img src="../../assets/imgs/cascademtn-wa.jpg" alt="Washington">\n					<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Washington, US\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n			</div>	\n		</div>\n\n		<div class="rcolumn">\n				<div class="imagewrap">\n						<img src="../../assets/imgs/netherlands.jpg" alt="Netherlands">\n						<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Netherlands\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n				<div class="imagewrap">\n						<img src="../../assets/imgs/swiss-alps.jpg" alt="Switzerland">\n						<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Switzerland\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n				<div class="imagewrap">\n						<img src="../../assets/imgs/switzerland.jpg" alt="Switzerland">\n						<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Switzerland\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n				<div class="imagewrap">\n						<img src="../../assets/imgs/austria.jpg" alt="Austria">\n						<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Austria\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n				<div class="imagewrap">\n						<img src="../../assets/imgs/spain.jpg" alt="Barcelona">\n						<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								Spain\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n				<div class="imagewrap">\n						<img src="../../assets/imgs/yosemite.jpg" alt="California">\n						<ion-fab>\n						<button ion-fab mini class="button1">\n						<ion-icon name="arrow-up"></ion-icon>\n						</button>\n						<ion-fab-list side="top">\n							<button type="button" class="location">\n								California, US\n							</button>\n							<button ion-fab class="save">\n								<ion-icon name="bookmark"></ion-icon>\n							</button>\n						</ion-fab-list>\n					</ion-fab>\n				</div>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Users/Evonne/Desktop/bucketlistp2/src/pages/explore/explore.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Evonne/Desktop/bucketlistp2/src/pages/home/home.html"*/`<ion-header>\n    <ion-navbar style="text-align:center;">\n      <ion-title>\n        Profile\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content>\n\n  <ion-list>\n      <ion-list-header>\n        Your Profile\n      </ion-list-header>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/robin.jpg">\n        </ion-avatar>\n        <h2>Robin Hayes</h2>\n        <p>Travel the world!</p>\n      </ion-item>\n        \n        <ion-item>\n            <ion-icon name="people" item-start></ion-icon>\n            Friends\n            <ion-badge item-end>18</ion-badge>\n        </ion-item>\n  \n        <ion-item>\n            <ion-icon name="planet" item-start></ion-icon>\n            Travel Points\n            <ion-badge item-end style="background-color:dodgerblue">820</ion-badge>\n        </ion-item>\n  \n        <ion-item>\n            <ion-icon name="happy" item-start></ion-icon>\n            Budget Current/Goal:\n            <ion-badge item-end style="background-color:dodgerblue">$2k/2.5k</ion-badge>\n        </ion-item>\n  \n        <ion-item>\n            <ion-icon name="checkbox" item-start></ion-icon>\n            Trips Taken/Planned:\n            <ion-badge item-end>11/27</ion-badge>\n        </ion-item>\n  \n    </ion-list>\n    \n  <ion-list>\n    \n    <ion-list-header>\n      Your Bucket List\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name="md-plane" item-start></ion-icon>\n        Paris, France\n      <ion-badge item-end style="background-color:green">$2k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-plane" item-start></ion-icon>\n        Barcelona, Spain\n      <ion-badge item-end style="background-color:red">$2.5k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-plane" item-start></ion-icon>\n        Havana, Cuba\n      <ion-badge item-end style="background-color:green">$1.5k</ion-badge>\n    </ion-item>\n\n  </ion-list>\n    \n\n\n\n</ion-content>`/*ion-inline-end:"/Users/Evonne/Desktop/bucketlistp2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial_tutorial__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(aFauth, navCtrl, navParams) {
        this.aFauth = aFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.segueToTut = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tutorial_tutorial__["a" /* TutorialPage */]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Evonne/Desktop/bucketlistp2/src/pages/register/register.html"*/`<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Register</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    \n      <h2 style="text-align:center">Welcome user!</h2>\n    \n        <ion-list>\n            \n              <ion-item>\n                <ion-label floating>Name</ion-label>\n                <ion-input [(ngModel)]="name" type="text" value=""></ion-input>\n              </ion-item>\n            \n              <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input [(ngModel)]="user.email"  type="text" value=""></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                  <ion-label floating>Password</ion-label>\n                  <ion-input [(ngModel)]="user.password"  type="password" value=""></ion-input>\n              </ion-item>\n            \n            </ion-list>\n            <button ion-button round full (click)="segueToTut(user)"><ion-icon name="person-add"></ion-icon>&nbsp;Register</button>  \n            \n            <br>\n            <br>\n    \n    </ion-content>`/*ion-inline-end:"/Users/Evonne/Desktop/bucketlistp2/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    TutorialPage.prototype.segueToMTabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/Evonne/Desktop/bucketlistp2/src/pages/tutorial/tutorial.html"*/`<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Getting Started</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="segueToMTabs()">\n                <ion-icon name="arrow-round-forward"></ion-icon>&nbsp;Skip\n            </button>\n            </ion-buttons>\n      </ion-navbar>\n      \n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n      <ion-slides>\n        <ion-slide>\n          <h1>Find your Dream Destinations</h1>\n          <img src="../../assets/com.gif">\n          <p>\n            Make a traveling bucket list!\n          </p>\n          <p>\n            \n          </p>\n        </ion-slide>\n        <ion-slide>\n          <h1>Get the best Deal</h1>\n          <img src="../../assets/trav.gif">    \n          <p>\n            Search for the best deals using by Jet Blue\'s data set!\n          </p>\n        </ion-slide>\n        <ion-slide>\n          <h1>Vacation your way!</h1>\n          <img src="../../assets/travel.gif">\n          <p>\n            Make the most of your vacation time!\n          </p>\n          <button ion-button full round (click)="segueToMTabs()"><ion-icon name="thumbs-up"></ion-icon>&nbsp;Lets Go!</button>\n        </ion-slide>\n      </ion-slides>\n    </ion-content>`/*ion-inline-end:"/Users/Evonne/Desktop/bucketlistp2/src/pages/tutorial/tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_charts_charts__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_firebase_config__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_charts_charts__["a" /* ChartsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* TutorialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_charts_charts__["a" /* ChartsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* TutorialPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Evonne/Desktop/bucketlistp2/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/Evonne/Desktop/bucketlistp2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 223,
	"./af.js": 223,
	"./ar": 224,
	"./ar-dz": 225,
	"./ar-dz.js": 225,
	"./ar-kw": 226,
	"./ar-kw.js": 226,
	"./ar-ly": 227,
	"./ar-ly.js": 227,
	"./ar-ma": 228,
	"./ar-ma.js": 228,
	"./ar-sa": 229,
	"./ar-sa.js": 229,
	"./ar-tn": 230,
	"./ar-tn.js": 230,
	"./ar.js": 224,
	"./az": 231,
	"./az.js": 231,
	"./be": 232,
	"./be.js": 232,
	"./bg": 233,
	"./bg.js": 233,
	"./bn": 234,
	"./bn.js": 234,
	"./bo": 235,
	"./bo.js": 235,
	"./br": 236,
	"./br.js": 236,
	"./bs": 237,
	"./bs.js": 237,
	"./ca": 238,
	"./ca.js": 238,
	"./cs": 239,
	"./cs.js": 239,
	"./cv": 240,
	"./cv.js": 240,
	"./cy": 241,
	"./cy.js": 241,
	"./da": 242,
	"./da.js": 242,
	"./de": 243,
	"./de-at": 244,
	"./de-at.js": 244,
	"./de-ch": 245,
	"./de-ch.js": 245,
	"./de.js": 243,
	"./dv": 246,
	"./dv.js": 246,
	"./el": 247,
	"./el.js": 247,
	"./en-au": 248,
	"./en-au.js": 248,
	"./en-ca": 249,
	"./en-ca.js": 249,
	"./en-gb": 250,
	"./en-gb.js": 250,
	"./en-ie": 251,
	"./en-ie.js": 251,
	"./en-nz": 252,
	"./en-nz.js": 252,
	"./eo": 253,
	"./eo.js": 253,
	"./es": 254,
	"./es-do": 255,
	"./es-do.js": 255,
	"./es.js": 254,
	"./et": 256,
	"./et.js": 256,
	"./eu": 257,
	"./eu.js": 257,
	"./fa": 258,
	"./fa.js": 258,
	"./fi": 259,
	"./fi.js": 259,
	"./fo": 260,
	"./fo.js": 260,
	"./fr": 261,
	"./fr-ca": 262,
	"./fr-ca.js": 262,
	"./fr-ch": 263,
	"./fr-ch.js": 263,
	"./fr.js": 261,
	"./fy": 264,
	"./fy.js": 264,
	"./gd": 265,
	"./gd.js": 265,
	"./gl": 266,
	"./gl.js": 266,
	"./gom-latn": 267,
	"./gom-latn.js": 267,
	"./he": 268,
	"./he.js": 268,
	"./hi": 269,
	"./hi.js": 269,
	"./hr": 270,
	"./hr.js": 270,
	"./hu": 271,
	"./hu.js": 271,
	"./hy-am": 272,
	"./hy-am.js": 272,
	"./id": 273,
	"./id.js": 273,
	"./is": 274,
	"./is.js": 274,
	"./it": 275,
	"./it.js": 275,
	"./ja": 276,
	"./ja.js": 276,
	"./jv": 277,
	"./jv.js": 277,
	"./ka": 278,
	"./ka.js": 278,
	"./kk": 279,
	"./kk.js": 279,
	"./km": 280,
	"./km.js": 280,
	"./kn": 281,
	"./kn.js": 281,
	"./ko": 282,
	"./ko.js": 282,
	"./ky": 283,
	"./ky.js": 283,
	"./lb": 284,
	"./lb.js": 284,
	"./lo": 285,
	"./lo.js": 285,
	"./lt": 286,
	"./lt.js": 286,
	"./lv": 287,
	"./lv.js": 287,
	"./me": 288,
	"./me.js": 288,
	"./mi": 289,
	"./mi.js": 289,
	"./mk": 290,
	"./mk.js": 290,
	"./ml": 291,
	"./ml.js": 291,
	"./mr": 292,
	"./mr.js": 292,
	"./ms": 293,
	"./ms-my": 294,
	"./ms-my.js": 294,
	"./ms.js": 293,
	"./my": 295,
	"./my.js": 295,
	"./nb": 296,
	"./nb.js": 296,
	"./ne": 297,
	"./ne.js": 297,
	"./nl": 298,
	"./nl-be": 299,
	"./nl-be.js": 299,
	"./nl.js": 298,
	"./nn": 300,
	"./nn.js": 300,
	"./pa-in": 301,
	"./pa-in.js": 301,
	"./pl": 302,
	"./pl.js": 302,
	"./pt": 303,
	"./pt-br": 304,
	"./pt-br.js": 304,
	"./pt.js": 303,
	"./ro": 305,
	"./ro.js": 305,
	"./ru": 306,
	"./ru.js": 306,
	"./sd": 307,
	"./sd.js": 307,
	"./se": 308,
	"./se.js": 308,
	"./si": 309,
	"./si.js": 309,
	"./sk": 310,
	"./sk.js": 310,
	"./sl": 311,
	"./sl.js": 311,
	"./sq": 312,
	"./sq.js": 312,
	"./sr": 313,
	"./sr-cyrl": 314,
	"./sr-cyrl.js": 314,
	"./sr.js": 313,
	"./ss": 315,
	"./ss.js": 315,
	"./sv": 316,
	"./sv.js": 316,
	"./sw": 317,
	"./sw.js": 317,
	"./ta": 318,
	"./ta.js": 318,
	"./te": 319,
	"./te.js": 319,
	"./tet": 320,
	"./tet.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 326,
	"./tzm-latn": 327,
	"./tzm-latn.js": 327,
	"./tzm.js": 326,
	"./uk": 328,
	"./uk.js": 328,
	"./ur": 329,
	"./ur.js": 329,
	"./uz": 330,
	"./uz-latn": 331,
	"./uz-latn.js": 331,
	"./uz.js": 330,
	"./vi": 332,
	"./vi.js": 332,
	"./x-pseudo": 333,
	"./x-pseudo.js": 333,
	"./yo": 334,
	"./yo.js": 334,
	"./zh-cn": 335,
	"./zh-cn.js": 335,
	"./zh-hk": 336,
	"./zh-hk.js": 336,
	"./zh-tw": 337,
	"./zh-tw.js": 337
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 488;

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDACq0bO-Ksz8E55oFeXokoT-J2ijR6F4I",
    authDomain: "fir-auth-906a3.firebaseapp.com",
    databaseURL: "https://fir-auth-906a3.firebaseio.com",
    projectId: "fir-auth-906a3",
    storageBucket: "fir-auth-906a3.appspot.com",
    messagingSenderId: "16280700101"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map