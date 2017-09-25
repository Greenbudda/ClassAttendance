webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_swing__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_swing__);
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
    function HomePage() {
        this.stackConfig = {
            allowedDirections: [
                __WEBPACK_IMPORTED_MODULE_1_angular2_swing__["Direction"].LEFT,
                __WEBPACK_IMPORTED_MODULE_1_angular2_swing__["Direction"].RIGHT
            ],
            throwOutConfidence: function (offsetX, offsetY, targetElement) {
                // you would put ur logic based on offset & targetelement to determine
                // what is your throwout confidence
                var xConfidence = Math.min(Math.abs(offsetX) / targetElement.offsetWidth, 1);
                var yConfidence = Math.min(Math.abs(offsetY) / targetElement.offsetHeight, 1);
                return Math.max(xConfidence, yConfidence);
            },
            minThrowOutDistance: 900 // default value is 400
        };
        this.cards = [
            { name: 'Leo Vinci', picture: '/assets/images/red.jpg', fatherName: 'Hamid', motherName: 'Khaleda', phoneNumber: '12345678' },
            { name: 'Mike Posner', picture: '/assets/images/blue.jpg', fatherName: 'Khaled', motherName: 'Hamida', phoneNumber: '87654321' },
            { name: 'Raph Nadal', picture: '/assets/images/purple.jpg', fatherName: 'Ananta', motherName: 'Bushra', phoneNumber: '1000000' },
            { name: 'Pirate Bay', picture: '/assets/images/orange.jpg', fatherName: 'Jalil', motherName: 'Maisha', phoneNumber: '19999999' }
        ];
    }
    HomePage.prototype.ngAfterViewInit = function () {
        // ViewChild & ViewChildren are only available
        // in this function
        console.log(this.swingStack); // this is the stack
        console.log(this.swingCards); // this is a list of cards
        // we can get the underlying stack
        // which has methods - createCard, destroyCard, getCard etc
        console.log(this.swingStack.stack);
        // and the cards
        // every card has methods - destroy, throwIn, throwOut etc
        this.swingCards.forEach(function (c) { return console.log(c.getCard()); });
        // this is how you can manually hook up to the
        // events instead of providing the event method in the template
        this.swingStack.throwoutleft.subscribe(function (event) { return console.log('Manual hook: ', event); });
        this.swingStack.dragstart.subscribe(function (event) { return console.log(event); });
        this.swingStack.dragmove.subscribe(function (event) { return console.log(event); });
    };
    // This method is called by hooking up the event
    // on the HTML element - see the template above
    HomePage.prototype.onThrowOut = function (event) {
        console.log('Hook from the template', event.throwDirection);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular2_swing__["SwingStackComponent"])
], HomePage.prototype, "swingStack", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], HomePage.prototype, "swingCards", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shahed/GitHub/ClassAttendance/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="cloudy-night"></ion-icon>  Class Attendance\n    </ion-title>\n\n    </ion-navbar>\n  </ion-header>\n \n<ion-content padding>\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(true)" (throwoutright)="voteUp(false)" id="card-stack">\n    <ion-card #mycards1 swing-card *ngFor="let c of cards">\n      <ion-item>\n          <p>\n            <img *ngIf="c.picture" [src]="c.picture">\n          </p>\n      </ion-item>\n \n      <ion-card-content >\n        <h1 style="color: blue;text-align: center;">{{ c.name }}</h1>\n        <!-- you can show things *ngIf="showDetails" \n        <p>Father: {{ c.fatherName }}</p>\n        <p>Mother: {{ c.motherName }}</p>\n        <p>Phone Number: {{ c.phoneNumber }}</p>-->\n      </ion-card-content>\n \n      <ion-row *ngIf="c.name">\n        <ion-col>\n          <button ion-button clear small icon-left color="primary" (click)="voteUp(false)">\n            <ion-icon name="close-circle"></ion-icon>\n            <h2 style="color: red">Absent</h2>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button clear small icon-left color="primary" (click)="voteUp(true)">\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h2 style="color: green">Present</h2>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <p style="text-align: center; width: 100%;">{{ recentCard }}</p>\n</ion-content>'/*ion-inline-end:"/Users/shahed/GitHub/ClassAttendance/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_swing__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_swing__["SwingModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shahed/GitHub/ClassAttendance/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/shahed/GitHub/ClassAttendance/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map