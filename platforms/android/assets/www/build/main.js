webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_LocalStorage__ = __webpack_require__(192);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.localStorageBrowser = new __WEBPACK_IMPORTED_MODULE_2__app_LocalStorage__["a" /* LocalStorage */]();
        this.timeToWakeUp = new Array();
        this.numberOfIntervals = this.localStorageBrowser.getProperty("numberOfIntervals");
        this.timeToSleep = this.localStorageBrowser.getProperty("timeToSleep");
        this.intervalLength = this.localStorageBrowser.getProperty("intervalLength");
        this.performCalculations();
    }
    HomePage.prototype.getCurrentTime = function () {
        return new TimeCalc(new Date(), 0);
    };
    HomePage.prototype.getMilsFromMin = function (time) {
        return time * 60 * 1000;
    };
    HomePage.prototype.performCalculations = function () {
        this.timeToWakeUp = [];
        var counter = new Date().getTime();
        counter += this.getMilsFromMin(this.timeToSleep);
        for (var i = 1; i <= this.numberOfIntervals; i++) {
            var dateGenerator = new Date();
            counter += this.getMilsFromMin(this.intervalLength);
            dateGenerator.setTime(counter);
            this.timeToWakeUp.push(new TimeCalc(dateGenerator, i * this.intervalLength));
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/alvarocr/Desktop/sleeptimeCalculator/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Calculadora horas sueño</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <div class="card">\n    <div item item-divider>\n      <h5 padding>Hora actual {{ getCurrentTime().getTime() }}</h5>\n    </div>\n    <div padding item item-text-wrap>La calculadora de sueño te permite calcular cuándo te tienes que despertar para descansar bien y rendir al día siguiente.</div>\n    <div text-end><button ion-button (click)="performCalculations()">Refrescar</button></div>\n  </div>\n\n  <hr>\n  <div id="results">\n    <ion-list>\n      <div *ngFor="let calc of timeToWakeUp">\n        <div text-start text-lowercase padding><b>{{calc.getIntervalHours()}}</b></div>\n        <div text-end>\n          <h1>{{calc.getTime()}}</h1>\n        </div>\n        <hr>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/alvarocr/Desktop/sleeptimeCalculator/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

var TimeCalc = (function () {
    function TimeCalc(date, addedMinutes) {
        this.date = date;
        this.addedMinutes = addedMinutes;
    }
    TimeCalc.prototype.toString = function () {
        return "Pluebaaaaa" + this.date.toString();
    };
    TimeCalc.prototype.getTime = function () {
        var date = this.date;
        var hours = this.numberToStringFormatted(date.getHours());
        var minutes = this.numberToStringFormatted(date.getMinutes());
        return hours + ":" + minutes;
    };
    TimeCalc.prototype.getIntervalMinutes = function () {
        return this.addedMinutes;
    };
    TimeCalc.prototype.getIntervalHours = function () {
        var minutes = this.numberToStringFormatted(this.addedMinutes % 60);
        var hours = this.numberToStringFormatted(~~(this.addedMinutes / 60));
        if (minutes == "00") {
            return hours + "h";
        }
        return hours + "h " + minutes + "m";
    };
    TimeCalc.prototype.numberToStringFormatted = function (number) {
        if (number < 10) {
            return "0" + number;
        }
        return "" + number;
    };
    return TimeCalc;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultProperties_json__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultProperties_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__defaultProperties_json__);

var LocalStorage = (function () {
    function LocalStorage() {
        this.localStorageBrowser = window.localStorage;
    }
    LocalStorage.prototype.getProperty = function (propertyId) {
        var defaultProperty = __WEBPACK_IMPORTED_MODULE_0__defaultProperties_json___default.a[propertyId];
        if (!this.hasLocalStorage()) {
            return defaultProperty;
        }
        return this.localStorageBrowser[propertyId] || defaultProperty;
    };
    LocalStorage.prototype.setProperty = function (propertyId, value) {
        this.localStorageBrowser[propertyId] = value;
    };
    LocalStorage.prototype.hasLocalStorage = function () {
        return this.localStorageBrowser !== undefined;
    };
    return LocalStorage;
}());

//# sourceMappingURL=LocalStorage.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_LocalStorage__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SettingsPage = (function () {
    function SettingsPage() {
        this.localStorageBrowser = new __WEBPACK_IMPORTED_MODULE_1__app_LocalStorage__["a" /* LocalStorage */]();
        this.intervalLength = this.localStorageBrowser.getProperty("intervalLength");
        this.timeToSleep = this.localStorageBrowser.getProperty("timeToSleep");
        this.numberOfIntervals = this.localStorageBrowser.getProperty("numberOfIntervals");
    }
    SettingsPage.prototype.onNumberOfIntervals = function (event) {
        this.localStorageBrowser.setProperty("numberOfIntervals", event.target.value);
    };
    SettingsPage.prototype.onTimeToSleep = function (event) {
        this.localStorageBrowser.setProperty("timeToSleep", event.target.value);
    };
    SettingsPage.prototype.onIntervalLength = function (event) {
        this.localStorageBrowser.setProperty("intervalLength", event.target.value);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/home/alvarocr/Desktop/sleeptimeCalculator/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Configuración</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="card">Configuración de la aplicación. La configuración se guarda automáticamente</div>\n  <ion-list>\n    <div>\n      Número de intervalos a mostrar \n      <input type="number" min="1" step="1" pattern="\d*" [(ngModel)]="numberOfIntervals" (change)="onNumberOfIntervals($event)"/>\n      <hr>\n    </div>\n    <div>\n      Tiempo para dormirse (en minutos)\n      <input type="number" min="1" step="1" pattern="\d*" [(ngModel)]="timeToSleep" (change)="onTimeToSleep($event)"/>\n      <hr>\n    </div>\n    <div>\n      Duración del intervalo (en minutos)\n      <input type="number" min="1" step="1" pattern="\d*" [(ngModel)]="intervalLength" (change)="onIntervalLength($event)"/>\n      <hr>\n    </div>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/alvarocr/Desktop/sleeptimeCalculator/src/pages/settings/settings.html"*/
    })
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(190);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(193);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Calculadora', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Configuración', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/alvarocr/Desktop/sleeptimeCalculator/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/alvarocr/Desktop/sleeptimeCalculator/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = {
	"intervalLength": "90",
	"timeToSleep": "15",
	"numberOfIntervals": "5"
};

/***/ })

},[194]);
//# sourceMappingURL=main.js.map