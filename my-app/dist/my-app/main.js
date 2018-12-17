(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  padding: 0.8rem 0.9rem;\n  height: inherit;\n  /*font-size: 1.25rem;*/\n  margin: 0 0 .5rem 0;\n  display: block;\n  width: 98%;\n  box-sizing:border-box;\n}\n\n\n.checked{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(123, 125, 80, 0.5),\n  0 0 0 1.5px rgba(215, 145, 141, 0.5);\n  margin: 3px;\n}\n\n\n.unchecked{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5),\n  0 0 0 1.5px rgba(255, 105, 180, 0.5);\n  margin: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtDQUN2Qjs7O0FBR0Q7RUFDRSxjQUFjO0VBQ2Q7dUNBQ3FDO0VBQ3JDLFlBQVk7Q0FDYjs7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2Q7dUNBQ3FDO0VBQ3JDLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gIHBhZGRpbmc6IDAuOHJlbSAwLjlyZW07XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgLypmb250LXNpemU6IDEuMjVyZW07Ki9cbiAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5OCU7XG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cblxuXG4uY2hlY2tlZHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTIzLCAxMjUsIDgwLCAwLjUpLFxuICAwIDAgMCAxLjVweCByZ2JhKDIxNSwgMTQ1LCAxNDEsIDAuNSk7XG4gIG1hcmdpbjogM3B4O1xufVxuLnVuY2hlY2tlZHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcbiAgMCAwIDAgMS41cHggcmdiYSgyNTUsIDEwNSwgMTgwLCAwLjUpO1xuICBtYXJnaW46IDNweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css\" rel='stylesheet' type='text/css'>\n\n\n\n<!---------------------------------------------------------------->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Home</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/products\" >Products</a></li>\n        <li>\n          <a routerLink=\"/trolley\">Trolley</a>\n        </li>\n        <li class=\"active\" *ngIf=\"this.authService.role=='admin' || this.authService.role=='worker'\" ><a routerLink=\"/admin\">Administrate<span class=\"sr-only\">(current)</span></a></li>\n        <li><a routerLink=\"/buyForm\" ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n        </a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a style=\"cursor: pointer;\" (click)=\"this.authService.logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!---------------------------------------------------------------->\n\n<div *ngIf=\"(this.authService.role!=='admin')&&(this.authService.role!=='worker')\">\n  <p>\n    Incorrect credentials!\n  </p>\n</div>\n\n<div class=\"btn-group\">\n  <button type=\"button\" (click)=\"changePage('products')\" class=\"{{this.isActive(this.productsMode)}}\" *ngIf=\"(this.authService.role==='admin')\">Products</button>\n  <button type=\"button\" (click)=\"changePage('orders')\" class=\"{{this.isActive(!this.productsMode)}}\" *ngIf=\"(this.authService.role==='admin')\" class=\"{{isActive()}}\">Orders</button>\n</div>\n\n<div  *ngIf=\"(this.authService.role==='admin')\">\n  <button type=\"button\" (click)=\"changeDB()\">Change</button> Current database: {{this.productServiceService.databaseMode}}\n</div>\n\n<!--<button (click)=\"changePage('products')\" class=\"{{this.isActive(this.productsMode)}}\" *ngIf=\"(this.authService.role==='admin')\">Products</button>\n<button (click)=\"changePage('orders')\" class=\"{{this.isActive(!this.productsMode)}}\" *ngIf=\"(this.authService.role==='admin')||(this.authService.role==='worker')\" class=\"{{isActive()}}\">Orders</button>-->\n<div *ngIf=\"(this.authService.role==='admin')&&(this.productsMode)\">\n<div class=\"container\">\n  <div class=\"row\">\n    <!--<div class=\"col-md-10 col-md-offset-1\">-->\n\n      <div class=\"panel panel-default panel-table\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col col-xs-7\">\n              <h3 class=\"panel-title\">Admin panel</h3>\n            </div>\n            <!--<div class=\"col col-xs-6 text-right\">\n              <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\">Create New</button>\n            </div>-->\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <table class=\"table table-striped table-bordered table-list\">\n            <thead>\n            <tr>\n            <!--  <th><em class=\"fa fa-cog\"></em></th>-->\n              <th>Name</th>\n              <th>Count</th>\n              <th>Price</th>\n              <th>Description</th>\n              <th>Category</th>\n              <th>Link</th>\n              <th><em class=\"fa fa-cog\"></em></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let produkt of getProcuctsForPage()\">\n             <!-- <td align=\"center\">\n                <a class=\"btn btn-default\" (click)=\"addToCart(produkt)\"><em class=\"fa fa-plus\"></em></a>\n                <a class=\"btn btn-danger\" (click)=\"removeFromCart(produkt)\"><em class=\"fa fa-minus\"></em></a>\n              </td>-->\n              <!--<td >{{produkt.id}}</td>-->\n\n              <td *ngIf=\"editFlag==false || editId!==produkt.id\">{{produkt.name | uppercase}}</td>\n              <td *ngIf=\"editFlag==false || editId!==produkt.id\">{{produkt.products_count}}</td>\n              <td *ngIf=\"editFlag==false || editId!==produkt.id\">{{produkt.price | currency}}</td>\n              <td *ngIf=\"editFlag==false || editId!==produkt.id\">{{produkt.description}}</td>\n              <td *ngIf=\"editFlag==false || editId!==produkt.id\">{{produkt.category}}</td>\n              <td *ngIf=\"editFlag==false || editId!==produkt.id\">{{produkt.link}}</td>\n\n              <td *ngIf=\"editFlag==true && editId===produkt.id\"><input type=\"text\" placeholder=\"{{editName}}\" id=\"name-text-input\" [(ngModel)]=\"editName\" name=\"editName\" data-error=\"You have to enter your name\" required></td>\n              <td *ngIf=\"editFlag==true && editId===produkt.id\"><input type=\"text\" placeholder=\"{{editProductCount}}\" id=\"count-text-input\" [(ngModel)]=\"editProductCount\" name=\"editProductCount\" data-error=\"You have to enter your name\" required></td>\n              <td *ngIf=\"editFlag==true && editId===produkt.id\"><input type=\"text\" placeholder=\"{{editPrice}}\" id=\"price-text-input\" [(ngModel)]=\"editPrice\" name=\"editPrice\" data-error=\"You have to enter your name\" required></td>\n              <td *ngIf=\"editFlag==true && editId===produkt.id\"><input type=\"text\" placeholder=\"{{editDescription}}\" id=\"desc-text-input\" [(ngModel)]=\"editDescription\" name=\"editDescription\" data-error=\"You have to enter your name\" required></td>\n              <td *ngIf=\"editFlag==true && editId===produkt.id\"><input type=\"text\" placeholder=\"{{editCategory}}\" id=\"category-text-input\" [(ngModel)]=\"editCategory\" name=\"editCategory\" data-error=\"You have to enter your name\" required></td>\n              <td *ngIf=\"editFlag==true && editId===produkt.id\"><input type=\"text\" placeholder=\"{{editLink}}\" id=\"link-text-input\" [(ngModel)]=\"editLink\" name=\"editLink\" data-error=\"You have to enter your name\" required></td>\n\n              <td><button *ngIf=\"editFlag==true && editId===produkt.id\" (click)=\"saveProduct()\" >Save</button><button *ngIf=\"editFlag==false || editId!==produkt.id\" (click)=\"editProduct(produkt)\" >Edit</button><button (click)=\"removeProduct(produkt.id)\">Remove</button></td>\n            </tr>\n            <tr>\n              <td><input [(ngModel)]=\"name\" #ctrl=\"ngModel\" ></td>\n              <td><input [(ngModel)]=\"productCount\" #ctrl=\"ngModel\" ></td>\n              <td><input [(ngModel)]=\"price\" #ctrl=\"ngModel\" ></td>\n              <td><input [(ngModel)]=\"description\" #ctrl=\"ngModel\" ></td>\n              <td><input [(ngModel)]=\"category\" #ctrl=\"ngModel\" ></td>\n              <td><input [(ngModel)]=\"link\" #ctrl=\"ngModel\" ></td>\n\n              <td><button (click)=\"addProduct()\">Create</button></td>\n            </tr>\n            </tbody>\n          </table>\n\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"row\">\n            <div class=\"col col-xs-4\">Page {{productsPageIndex}} of {{getPagesCount()}}\n            </div>\n            <div class=\"col col-xs-8\">\n              <ul class=\"pagination hidden-xs pull-left\">\n                <li *ngFor=\"let page of getPagesArray()\">\n                  <a (click)=\"setPageTo(page)\">{{page}}</a>\n                </li>\n              </ul>\n              <ul class=\"pagination hidden-xs pull-right\">\n                <li> <a class=\"fa fa-chevron-up\" aria-hidden=\"true\" (click)=\"amountOfItemsOnThePage('-')\"></a></li>\n                <li> <a class=\"fa fa-chevron-down\" aria-hidden=\"true\" (click)=\"amountOfItemsOnThePage('+')\"></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      <!--</div>-->\n\n    </div></div></div>\n</div>\n\n<div *ngIf=\"(this.authService.role==='worker')||((this.authService.role==='admin')&&(!this.productsMode))\">\n  <app-orders></app-orders>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _product_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-service.service */ "./src/app/product-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminComponent = /** @class */ (function () {
    function AdminComponent(http, appcomponent, productServiceService, authService, db) {
        this.http = http;
        this.appcomponent = appcomponent;
        this.productServiceService = productServiceService;
        this.authService = authService;
        this.db = db;
        this.produkts = [];
        this.productsPageIndex = 1;
        this.productsOnPage = 5;
        this.editFlag = false;
        this.editId = "";
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appcomponent.databaseMode == "fire") {
            this.db.list('/products').valueChanges().subscribe(function (products) {
                _this.produkts = products;
            });
        }
        else {
            this.http.get(this.appcomponent.url + "/products").subscribe(function (products) {
                _this.produkts = products;
                console.log(products);
            });
        }
        this.productsMode = true;
    };
    AdminComponent.prototype.isActive = function (productMode) {
        if ((this.authService.role === 'admin') && (productMode)) {
            return "checked";
        }
        else {
            return "unchecked";
        }
    };
    AdminComponent.prototype.changeDB = function () {
        var _this = this;
        if (this.productServiceService.databaseMode == "fire") {
            this.appcomponent.databaseMode = "mongo";
            this.productServiceService.databaseMode = "mongo";
        }
        else {
            this.appcomponent.databaseMode = "fire";
            this.productServiceService.databaseMode = "fire";
        }
        if (this.appcomponent.databaseMode == "fire") {
            this.db.list('/products').valueChanges().subscribe(function (products) {
                _this.produkts = products;
                _this.productServiceService.productsList = _this.produkts;
            });
            //  this.db.list('/orders').valueChanges().subscribe(orders => {
            //    this.orders.orders = <Order[]> orders;
            //  });
        }
        else {
            this.http.get(this.appcomponent.url + "/products").subscribe(function (products) {
                _this.produkts = products;
                _this.productServiceService.productsList = _this.produkts;
                console.log(products);
            });
            //  this.http.get(this.appcomponent.url + "/orders").subscribe(
            //    orders => {
            //      this.orders.orders = <Order[]> orders;
            //    });
        }
    };
    AdminComponent.prototype.changePage = function (page) {
        if (page === 'products') {
            this.productsMode = true;
        }
        else if (page === 'orders') {
            this.productsMode = false;
        }
    };
    AdminComponent.prototype.setPageTo = function (x) {
        this.productsPageIndex = x;
        this.getProcuctsForPage();
    };
    AdminComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AdminComponent.prototype.getProducts = function () {
        var _this = this;
        //this.produkts = this.productServiceService.getProducts();
        this.productServiceService.getProducts().subscribe(function (products) { _this.produkts = products; });
    };
    AdminComponent.prototype.saveProduct = function () {
        var product = {
            id: this.editId,
            name: this.editName,
            products_count: this.editProductCount,
            price: this.editPrice,
            description: this.editDescription,
            link: this.editLink,
            category: this.editCategory
        };
        this.productServiceService.updateProductInDB(product);
        this.getProducts();
        this.editFlag = false;
        this.editId = "";
    };
    AdminComponent.prototype.addProduct = function () {
        //alert("alert prod");
        var id;
        if (this.appcomponent.databaseMode == "fire") {
            id = this.db.createPushId();
        }
        else {
            id = this.appcomponent.getUniqueId();
        }
        var product = {
            id: id,
            name: this.name,
            products_count: this.productCount,
            price: this.price,
            description: this.description,
            link: this.link,
            category: this.category
        };
        //alert("alert prod: " + id);
        this.productServiceService.addProduct(product);
        this.getProducts();
        this.clear();
    };
    AdminComponent.prototype.editProduct = function (product) {
        this.editFlag = true;
        this.editId = product.id;
        this.editName = product.name;
        this.editProductCount = product.products_count;
        this.editPrice = product.price;
        this.editDescription = product.description;
        this.editLink = product.link;
        this.editCategory = product.category;
    };
    AdminComponent.prototype.removeProduct = function (id) {
        var product = this.produkts.find(function (x) { return x.id == id; });
        this.productServiceService.deleteProduct(product);
        this.getProducts();
    };
    AdminComponent.prototype.clear = function () {
        this.name = "";
        this.productCount = null;
        this.price = null;
        this.description = "";
        this.link = "";
        this.category = "";
    };
    AdminComponent.prototype.amountOfItemsOnThePage = function (s) {
        if (s == "+") {
            if (this.productsOnPage < this.produkts.length) {
                this.productsOnPage = this.productsOnPage * 2;
                if (this.productsOnPage > this.produkts.length) {
                    this.productsOnPage = this.produkts.length;
                }
            }
            if ((this.produkts.length / this.productsOnPage < this.productsPageIndex) && (this.productsPageIndex > 1)) {
                this.productsPageIndex--;
            }
        }
        else if (s == "-") {
            if (this.productsOnPage >= 10) {
                this.productsOnPage = this.productsOnPage / 2;
            }
            else {
                this.productsOnPage = 5;
            }
        }
    };
    AdminComponent.prototype.getPagesCount = function () {
        var pagesCount = this.produkts.length / this.productsOnPage;
        if (this.produkts.length % this.productsOnPage > 0) {
            pagesCount++;
        }
        var x = 0;
        for (var i = 1; i <= pagesCount; i++) {
            x++;
        }
        return x;
    };
    AdminComponent.prototype.getPagesArray = function () {
        var res = [];
        var pagesCount = this.getPagesCount();
        for (var i = 1; i <= pagesCount; i++) {
            res.push(i);
        }
        return res;
    };
    AdminComponent.prototype.getProcuctsForPage = function () {
        return this.produkts.slice((this.productsPageIndex - 1) * this.productsOnPage, (this.productsPageIndex) * this.productsOnPage);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _product_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductServiceService"], _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _naglowek_naglowek_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./naglowek/naglowek.component */ "./src/app/naglowek/naglowek.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-product/new-product.component */ "./src/app/new-product/new-product.component.ts");
/* harmony import */ var _trolley_trolley_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trolley/trolley.component */ "./src/app/trolley/trolley.component.ts");
/* harmony import */ var _buyform_buyform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyform/buyform.component */ "./src/app/buyform/buyform.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-guard-service.service */ "./src/app/auth-guard-service.service.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { AuthGuardComponent } from './auth-guard/auth-guard.component';



var routes = [
    // {path: 'trolley', component: TrolleyComponent},
    //  {path: 'home', component: ShopMainComponent},
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    {
        path: 'trolley',
        component: _trolley_trolley_component__WEBPACK_IMPORTED_MODULE_5__["TrolleyComponent"],
        canActivate: [_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]],
    },
    /* {
     path: 'trolley',
     component: TrolleyComponent,
     canActivate: [AuthGuardComponent]//,
     //children: [...]
     },
    */
    { path: 'naglowek', component: _naglowek_naglowek_component__WEBPACK_IMPORTED_MODULE_2__["NaglowekComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], canActivate: [_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'newproduct', component: _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_4__["NewProductComponent"], canActivate: [_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'buyForm', component: _buyform_buyform_component__WEBPACK_IMPORTED_MODULE_6__["BuyformComponent"], canActivate: [_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], canActivate: [_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_10__["OrdersComponent"], canActivate: [_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] }
    //{ path: 'produkt', component: ProduktComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBjb2xvcjogIzM2OTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n-->\n<!--\n<app-new-product></app-new-product>\n<app-trolley></app-trolley>\n<app-products></app-products>\n-->\n\n<!--\n<app-naglowek></app-naglowek>\n-->\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'My First Angular App';
        this.databaseMode = "fire";
        this.url = "http://localhost:5004";
        this.uniqueId = 100;
        this.logged = true;
    }
    AppComponent.prototype.getUniqueId = function () {
        this.uniqueId++;
        if (this.uniqueId < 1000) {
            return this.uniqueId - 1;
        }
        return -1;
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _produkt_produkt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produkt/produkt.component */ "./src/app/produkt/produkt.component.ts");
/* harmony import */ var _naglowek_naglowek_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./naglowek/naglowek.component */ "./src/app/naglowek/naglowek.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-product/new-product.component */ "./src/app/new-product/new-product.component.ts");
/* harmony import */ var _trolley_trolley_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trolley/trolley.component */ "./src/app/trolley/trolley.component.ts");
/* harmony import */ var _buyform_buyform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buyform/buyform.component */ "./src/app/buyform/buyform.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _order_product_order_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order-product/order-product.component */ "./src/app/order-product/order-product.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { AuthGuardComponent } from './auth-guard/auth-guard.component';
//import { AngularFirestoreModule } from '@angular/fire/firestore';






var appRoutes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _produkt_produkt_component__WEBPACK_IMPORTED_MODULE_4__["ProduktComponent"],
                _naglowek_naglowek_component__WEBPACK_IMPORTED_MODULE_5__["NaglowekComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_7__["NewProductComponent"],
                _trolley_trolley_component__WEBPACK_IMPORTED_MODULE_8__["TrolleyComponent"],
                _buyform_buyform_component__WEBPACK_IMPORTED_MODULE_9__["BuyformComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_17__["CategoriesComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"],
                _order_product_order_product_component__WEBPACK_IMPORTED_MODULE_20__["OrderProductComponent"],
            ],
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard-service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth-guard-service.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router, db) {
        this.authService = authService;
        this.router = router;
        this.db = db;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.authState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
            if (state !== null) {
                _this.db.list('/users').valueChanges()
                    .subscribe(function (users) {
                    _this.authService.role = users.filter(function (u) { return u.email === state.email; }).map(function (u) { return u.role; })[0];
                });
                return true;
            }
            _this.router.navigate(['/login']);
            return false;
        }));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/auth-service.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(fireAuth, router) {
        this.fireAuth = fireAuth;
        this.router = router;
        this.authState$ = this.fireAuth.authState;
    }
    AuthService.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.register = function (_a) {
        var email = _a.email, password = _a.password;
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        this.fireAuth.auth.signOut();
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/buyform/buyform.component.css":
/*!***********************************************!*\
  !*** ./src/app/buyform/buyform.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eWZvcm0vYnV5Zm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/buyform/buyform.component.html":
/*!************************************************!*\
  !*** ./src/app/buyform/buyform.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css\" rel='stylesheet' type='text/css'>\n\n\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Home</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/products\" >Products</a></li>\n        <li>\n          <a routerLink=\"/trolley\">Trolley</a>\n        </li>\n        <li *ngIf=\"this.authService.role=='admin' || this.authService.role=='worker'\" ><a routerLink=\"/admin\">Administrate</a></li>\n        <li class=\"active\"><a routerLink=\"/buyForm\" ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i><span class=\"sr-only\">(current)</span>\n        </a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a style=\"cursor: pointer;\" (click)=\"this.authService.logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n<form (ngSubmit)=\"onSubmit()\">\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Name</label>\n  <div class=\"col-10\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"John Q Public\" id=\"example-text-input\" [(ngModel)]=\"name\" name=\"name\" data-error=\"You have to enter your name\" required>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-search-input\" class=\"col-2 col-form-label\">Address</label>\n  <div  class=\"col-10\">\n    <input class=\"form-control\" type=\"address\" placeholder=\"st. Mickiewicza 34/2\" id=\"example-eddress-input\" [(ngModel)]=\"address\" name=\"address\" data-error=\"You have to enter your address\" required>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-email-input\" class=\"col-2 col-form-label\">Email</label>\n  <div class=\"col-10\">\n    <input class=\"form-control\" type=\"email\" placeholder=\"john@example.com\" id=\"example-email-input\" [(ngModel)]=\"email\" name=\"email\" data-error=\"You have to enter your email\" required>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-tel-input\" class=\"col-2 col-form-label\">Telephone</label>\n  <div class=\"col-10\">\n    <input class=\"form-control\" type=\"tel\" placeholder=\"555-555-555\" id=\"example-tel-input\" pattern=\"^[0-9]{3}-[0-9]{3}-[0-9]{3}\"  [(ngModel)]=\"tel\" name=\"tel\" data-error=\"You have to enter your telephone number\" required>\n  </div>\n</div>\n<p>\n<button type=\"submit\" class=\"btn btn-primary\">Finish order</button>\n</p>\n</form>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/buyform/buyform.component.ts":
/*!**********************************************!*\
  !*** ./src/app/buyform/buyform.component.ts ***!
  \**********************************************/
/*! exports provided: BuyformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyformComponent", function() { return BuyformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/order */ "./src/app/models/order.ts");
/* harmony import */ var _trolley_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trolley-service.service */ "./src/app/trolley-service.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _order_product_order_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-product/order-product.component */ "./src/app/order-product/order-product.component.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BuyformComponent = /** @class */ (function () {
    function BuyformComponent(http, appcomponent, authService, trolleyServiceService, db) {
        this.http = http;
        this.appcomponent = appcomponent;
        this.authService = authService;
        this.trolleyServiceService = trolleyServiceService;
        this.db = db;
    }
    BuyformComponent.prototype.ngOnInit = function () {
    };
    BuyformComponent.prototype.onSubmit = function () {
        var _this = this;
        this.trolleyServiceService.getProductsFromTheCart().subscribe(function (products) {
            if (products.length > 0) {
                var orderProducts_1 = [];
                products.map(function (p) {
                    return new _order_product_order_product_component__WEBPACK_IMPORTED_MODULE_4__["OrderProductComponent"](false, p.id, p.name, p.products_count, p.price, p.description, p.link, p.category);
                }).forEach(function (item) { return orderProducts_1.push(item); });
                var id = void 0;
                if (_this.appcomponent.databaseMode == "fire") {
                    id = _this.db.createPushId();
                }
                else {
                    id = _this.appcomponent.getUniqueId();
                }
                var neworder = new _models_order__WEBPACK_IMPORTED_MODULE_1__["Order"](id, _this.name, _this.address, _this.email, _this.tel, "1", 'waiting', orderProducts_1);
                /*  alert("id: "+id);*/
                // this.db.list("/orders").push(neworder);
                if (_this.appcomponent.databaseMode == "fire") {
                    _this.db.object('/orders/' + id)
                        .update(neworder);
                    _this.clearForm();
                    _this.trolleyServiceService.clear();
                }
                else {
                    _this.http.put(_this.appcomponent.url + "/orders/" + id, {
                        id: neworder.id, name: neworder.name, address: neworder.address,
                        email: neworder.email, tel: neworder.tel, date: neworder.date, state: neworder.state, products: orderProducts_1
                    }).subscribe(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log("Error occured");
                    });
                    _this.clearForm();
                    _this.trolleyServiceService.clear();
                }
            }
            else {
                _this.errorMsg = "The trolley is empty";
            }
        });
    };
    BuyformComponent.prototype.clearForm = function () {
        this.name = "";
        this.address = "";
        this.email = "";
        this.tel = "";
        this.errorMsg = "";
    };
    BuyformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyform',
            template: __webpack_require__(/*! ./buyform.component.html */ "./src/app/buyform/buyform.component.html"),
            styles: [__webpack_require__(/*! ./buyform.component.css */ "./src/app/buyform/buyform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _trolley_service_service__WEBPACK_IMPORTED_MODULE_2__["TrolleyServiceService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], BuyformComponent);
    return BuyformComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.checked{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(123, 125, 80, 0.5),\n  0 0 0 1.5px rgba(215, 145, 141, 0.5);\n  margin: 3px;\n}\n.unchecked{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5),\n  0 0 0 1.5px rgba(255, 105, 180, 0.5);\n  margin: 3px;\n}\n/*\n\n.btn:hover {\n  color: #9050AA;\n  border-color: currentColor;\n  background-color: white;\n}\n\n!* make sure we have a visible focus ring *!\n.btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5),\n  0 0 0 1.5px rgba(255, 105, 180, 0.5);\n}\n*/\n/*\n#category-list{\n  position: absolute;\n  left: 15px;\n  width: 30%;\n  background: #8BCCF0;\n  border-radius: 25px;\n  height: 200px;\n}\n\n#product-container{\n  position: absolute;\n  right: 15px;\n  width: 60%;\n  background: #8BCCF0;\n  border-radius: 25px;\n  padding: 0px 10px 0px 10px;\n  height: 200px;\n}\n\n#container{\n  position: relative;\n  background: #7EE5F2;\n  height: 200px;\n  padding: 10px;\n}\n\n#filter{\n  position: absolute;\n  bottom: 20px;\n  left: 25px;\n}\n*/\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkO3VDQUNxQztFQUNyQyxZQUFZO0NBQ2I7QUFDRDtFQUNFLGNBQWM7RUFDZDt1Q0FDcUM7RUFDckMsWUFBWTtDQUNiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQ0UiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNoZWNrZWR7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEyMywgMTI1LCA4MCwgMC41KSxcbiAgMCAwIDAgMS41cHggcmdiYSgyMTUsIDE0NSwgMTQxLCAwLjUpO1xuICBtYXJnaW46IDNweDtcbn1cbi51bmNoZWNrZWR7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXG4gIDAgMCAwIDEuNXB4IHJnYmEoMjU1LCAxMDUsIDE4MCwgMC41KTtcbiAgbWFyZ2luOiAzcHg7XG59XG4vKlxuXG4uYnRuOmhvdmVyIHtcbiAgY29sb3I6ICM5MDUwQUE7XG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuISogbWFrZSBzdXJlIHdlIGhhdmUgYSB2aXNpYmxlIGZvY3VzIHJpbmcgKiFcbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDEwNSwgMTgwLCAwLjUpLFxuICAwIDAgMCAxLjVweCByZ2JhKDI1NSwgMTA1LCAxODAsIDAuNSk7XG59XG4qL1xuXG4vKlxuI2NhdGVnb3J5LWxpc3R7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZDogIzhCQ0NGMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuI3Byb2R1Y3QtY29udGFpbmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kOiAjOEJDQ0YwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuI2NvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjN0VFNUYyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jZmlsdGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjVweDtcbn1cbiovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div *ngFor=\"let cat of categories\" class=\"btn-group\">\n    <button type=\"button\" class=\"{{isActive(cat)}}\" (click)=\"clicked(cat)\">{{cat}}</button>\n </div>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-service.service */ "./src/app/product-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = /** @class */ (function () {
    //constructor(private productServiceService: ProductServiceService){}
    function CategoriesComponent(productServiceService) {
        this.productServiceService = productServiceService;
        this.categories = ["owoce", "slodkie", "niezdrowe"];
        this.checked = [];
        this.filterName = "";
    }
    CategoriesComponent.prototype.ngOnInit = function () { this.productServiceService.setCategories(this.getCategories()); };
    CategoriesComponent.prototype.catEmitted = function (categories) {
        this.categories = categories;
    };
    CategoriesComponent.prototype.clicked = function (cat) {
        if (this.checked.indexOf(cat) == -1) {
            this.checked.push(cat);
        }
        else {
            var index = this.checked.indexOf(cat);
            this.checked.splice(index, 1);
        }
        this.checked = this.getCopy(this.checked);
        this.productServiceService.setCategories(this.getCategories());
    };
    CategoriesComponent.prototype.getCopy = function (cat) {
        var newcat = [];
        for (var _i = 0, cat_1 = cat; _i < cat_1.length; _i++) {
            var c = cat_1[_i];
            newcat.push(c);
        }
        return newcat;
    };
    CategoriesComponent.prototype.isActive = function (cat) {
        if (this.checked.indexOf(cat) != -1) {
            return "checked";
        }
        else {
            return "unchecked";
        }
    };
    CategoriesComponent.prototype.getCategories = function () {
        if (this.checked.length == 0) {
            return this.getCopy(this.categories);
        }
        else {
            return this.getCopy(this.checked);
        }
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service_service__WEBPACK_IMPORTED_MODULE_1__["ProductServiceService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 90px;\n}\n.panel-login {\n  border-color: #ccc;\n  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n}\n.panel-login>.panel-heading {\n  color: #00415d;\n  background-color: #fff;\n  border-color: #fff;\n  text-align:center;\n}\n.panel-login>.panel-heading a{\n  text-decoration: none;\n  color: #666;\n  font-weight: bold;\n  font-size: 15px;\n  transition: all 0.1s linear;\n}\n.panel-login>.panel-heading a.active{\n  color: #029f5b;\n  font-size: 18px;\n}\n.panel-login>.panel-heading hr{\n  margin-top: 10px;\n  margin-bottom: 0px;\n  clear: both;\n  border: 0;\n  height: 1px;\n  background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n}\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n  height: 45px;\n  border: 1px solid #ddd;\n  font-size: 16px;\n  transition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n  outline:none;\n  box-shadow: none;\n  border-color: #ccc;\n}\n.btn-login {\n  background-color: #59B2E0;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n  color: #fff;\n  background-color: #53A3CD;\n  border-color: #53A3CD;\n}\n.forgot-password {\n  text-decoration: underline;\n  color: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n  text-decoration: underline;\n  color: #666;\n}\n.btn-register {\n  background-color: #1CB94E;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #1CB94A;\n}\n.btn-register:hover,\n.btn-register:focus {\n  color: #fff;\n  background-color: #1CA347;\n  border-color: #1CA347;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsbUJBQW1CO0VBR25CLDRDQUE0QztDQUM3QztBQUNEO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFHaEIsNEJBQTRCO0NBQzdCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUlaLHdGQUF3RjtDQUN6RjtBQUNEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFHaEIsNEJBQTRCO0NBQzdCO0FBQ0Q7O0VBRUUsYUFBYTtFQUdiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7O0VBRUUsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0NBQ2I7QUFDRDs7RUFFRSwyQkFBMkI7RUFDM0IsWUFBWTtDQUNiO0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLHNCQUFzQjtDQUN2QjtBQUNEOztFQUVFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogOTBweDtcbn1cbi5wYW5lbC1sb2dpbiB7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG59XG4ucGFuZWwtbG9naW4+LnBhbmVsLWhlYWRpbmcge1xuICBjb2xvcjogIzAwNDE1ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5wYW5lbC1sb2dpbj4ucGFuZWwtaGVhZGluZyBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbn1cbi5wYW5lbC1sb2dpbj4ucGFuZWwtaGVhZGluZyBhLmFjdGl2ZXtcbiAgY29sb3I6ICMwMjlmNWI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wYW5lbC1sb2dpbj4ucGFuZWwtaGVhZGluZyBocntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjbGVhcjogYm90aDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDAsIDAsIDAsIDApLHJnYmEoMCwgMCwgMCwgMC4xNSkscmdiYSgwLCAwLCAwLCAwKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDAuMTUpLHJnYmEoMCwwLDAsMCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDAuMTUpLHJnYmEoMCwwLDAsMCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDAsMCwwLDApLHJnYmEoMCwwLDAsMC4xNSkscmdiYSgwLDAsMCwwKSk7XG59XG4ucGFuZWwtbG9naW4gaW5wdXRbdHlwZT1cInRleHRcIl0sLnBhbmVsLWxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwucGFuZWwtbG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xufVxuLnBhbmVsLWxvZ2luIGlucHV0OmhvdmVyLFxuLnBhbmVsLWxvZ2luIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTpub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLmJ0bi1sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OUIyRTA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMTRweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItY29sb3I6ICM1OUIyRTY7XG59XG4uYnRuLWxvZ2luOmhvdmVyLFxuLmJ0bi1sb2dpbjpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBM0NEO1xuICBib3JkZXItY29sb3I6ICM1M0EzQ0Q7XG59XG4uZm9yZ290LXBhc3N3b3JkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjODg4O1xufVxuLmZvcmdvdC1wYXNzd29yZDpob3Zlcixcbi5mb3Jnb3QtcGFzc3dvcmQ6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5idG4tcmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNCOTRFO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWNvbG9yOiAjMUNCOTRBO1xufVxuLmJ0bi1yZWdpc3Rlcjpob3Zlcixcbi5idG4tcmVnaXN0ZXI6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDQTM0NztcbiAgYm9yZGVyLWNvbG9yOiAjMUNBMzQ3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!--<nav>\n  <a routerLink=\"/login\">Login</a>\n</nav>\n<nav>\n  <a routerLink=\"/trolley\">Trolley</a>\n</nav>\n<nav>\n  <a routerLink=\"/newproduct\">Nowy Produkt</a>\n</nav>-->\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <div class=\"panel panel-login\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <!--<div class=\"col-xs-6\">\n              <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n            </div>\n            <div class=\"col-xs-6\">\n              <a href=\"#\" id=\"register-form-link\">Register</a>\n            </div>-->\n          </div>\n          <hr>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <form id=\"login-form\">\n                <div class=\"form-group\">\n                  <input type=\"email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\" [(ngModel)]=\"email\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\">\n                </div>\n                <div class=\"form-group text-center\">\n                  <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n                  <label for=\"remember\"> Remember Me</label>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-sm-offset-3\">\n                      <input type=\"submit\" (click)=\"register()\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-sm-offset-3\">\n                      <input type=\"submit\" (click)=\"login()\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n                    </div>\n                    succ: {{successMessage}} error:{{errorMessage}}\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"text-center\">\n                        <a href=\"https://phpoll.com/recover\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <form id=\"register-form\" style=\"display: none;\">\n                <div class=\"form-group\">\n                  <input type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-sm-offset-3\">\n                      <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, db) {
        this.authService = authService;
        this.router = router;
        this.db = db;
    }
    // userT: UserComponent[] = [];
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var credentials = {
            email: this.email,
            password: this.password
        };
        this.authService.login(credentials).then(function (fulfilled) {
            _this.router.navigateByUrl('/products');
            //  let email = this.authService.fireAuth.auth.currentUser.email;
            //  alert(email);
            //let userT: ProduktComponent[] =[];
            //    this.db.list('/users').valueChanges().subscribe(users => {
            //      this.userT = <UserComponent[]> users;
            //    });
            //    alert(this.userT.length);
            //    let role = this.userT.filter(x => x.email == email)[0];
            //alert(this.userT.length);
            // let role = userT.filter(x => x.email == email)[0];
            //alert(role);
            //    this.router.navigateByUrl('/products');
        }, function (rejected) {
            _this.errorMessage = rejected.message;
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        var credentials = {
            email: this.email,
            password: this.password
        };
        this.authService.register(credentials).then(function (fulfilled) {
            _this.successMessage = "Zarejestrowano użytkownika";
        }, function (rejected) {
            _this.errorMessage = rejected.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mock-produkts.ts":
/*!**********************************!*\
  !*** ./src/app/mock-produkts.ts ***!
  \**********************************/
/*! exports provided: PRODUKTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUKTS", function() { return PRODUKTS; });
var PRODUKTS = [
    {
        "category": "slodkie",
        "description": "ciasteczka",
        "id": "-LTANBJ--nmOGyO9ThjX",
        "link": "ciastka.jpg",
        "name": "ciastka",
        "price": 3.99,
        "products_count": 3
    },
    {
        "category": "owoce",
        "description": "bananki",
        "id": "-LTAOKFKfJabJY2iKTM2",
        "link": "banan.png",
        "name": "banan",
        "price": 5.99,
        "products_count": 5
    },
    {
        "category": "niezdrowe",
        "description": "cola light",
        "id": "-LTAOV8AiWl34wFcrTRK",
        "link": "cola.jpg",
        "name": "cola",
        "price": 7.99,
        "products_count": 7
    },
    {
        "category": "niezdrowe",
        "description": "cukierki kakaowe",
        "id": "-LTAOmVsm_ob6KWSa7rq",
        "link": "cukierek.jpg",
        "name": "cukierki",
        "price": 6.50,
        "products_count": 12
    },
    {
        "category": "niezdrowe",
        "description": "czekolada mleczka",
        "id": "-LTAP-iMFKeDyoEMmfCY",
        "link": "czekolada.jpg",
        "name": "czekolada",
        "price": 10.99,
        "products_count": 8
    },
    {
        "category": "owoce",
        "description": "kiwi zielone",
        "id": "-LTAP7MT3TapxlsWeaum",
        "link": "kiwi.jpeg",
        "name": "kiwi",
        "price": 2.25,
        "products_count": 9
    },
    {
        "category": "niezdrowe",
        "description": "pizza hawajska",
        "id": "-LTAPGFpSCpHeRqubtkB",
        "link": "pizza.jpg",
        "name": "pizza",
        "price": 18.99,
        "products_count": 13
    },
    {
        "category": "owoce",
        "description": "pomidor malinowy",
        "id": "-LTAPQ70Dg52yNcilp1e",
        "link": "pomidor.jpg",
        "name": "pomidor",
        "price": 4.55,
        "products_count": 14
    }
];


/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(id, name, address, email, tel, date, state, products) {
        this.products = [];
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.tel = tel;
        this.date = date;
        this.state = state;
        this.products = products;
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/naglowek/naglowek.component.css":
/*!*************************************************!*\
  !*** ./src/app/naglowek/naglowek.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-table .panel-body{\n  padding:0;\n}\n\n.panel-table .panel-body .table-bordered{\n  border-style: none;\n  margin:0;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {\n  text-align:center;\n  width: 100px;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,\n.panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {\n  border-right: 0px;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,\n.panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {\n  border-left: 0px;\n}\n\n.panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{\n  border-bottom: 0px;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{\n  border-top: 0px;\n}\n\n.panel-table .panel-footer .pagination{\n  margin:0;\n}\n\n/*\nused to vertically center elements, may need modification if you're not using default sizes.\n*/\n\n.panel-table .panel-footer .col{\n  line-height: 34px;\n  height: 34px;\n}\n\n.panel-table .panel-heading .col h3{\n  line-height: 30px;\n  height: 30px;\n}\n\n.panel-table .panel-body .table-bordered > tbody > tr > td{\n  line-height: 34px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFnbG93ZWsvbmFnbG93ZWsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0NBQ1Y7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkOztBQUVEOztFQUVFLGtCQUFrQjtDQUNuQjs7QUFFRDs7RUFFRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxTQUFTO0NBQ1Y7O0FBRUQ7O0VBRUU7O0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hZ2xvd2VrL25hZ2xvd2VrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtdGFibGUgLnBhbmVsLWJvZHl7XG4gIHBhZGRpbmc6MDtcbn1cblxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5IC50YWJsZS1ib3JkZXJlZHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBtYXJnaW46MDtcbn1cblxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aDpmaXJzdC1vZi10eXBlIHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aDpsYXN0LW9mLXR5cGUsXG4ucGFuZWwtdGFibGUgLnBhbmVsLWJvZHkgLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuXG4ucGFuZWwtdGFibGUgLnBhbmVsLWJvZHkgLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoOmZpcnN0LW9mLXR5cGUsXG4ucGFuZWwtdGFibGUgLnBhbmVsLWJvZHkgLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItbGVmdDogMHB4O1xufVxuXG4ucGFuZWwtdGFibGUgLnBhbmVsLWJvZHkgLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpmaXJzdC1vZi10eXBlID4gdGR7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cblxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHI6Zmlyc3Qtb2YtdHlwZSA+IHRoe1xuICBib3JkZXItdG9wOiAwcHg7XG59XG5cbi5wYW5lbC10YWJsZSAucGFuZWwtZm9vdGVyIC5wYWdpbmF0aW9ue1xuICBtYXJnaW46MDtcbn1cblxuLypcbnVzZWQgdG8gdmVydGljYWxseSBjZW50ZXIgZWxlbWVudHMsIG1heSBuZWVkIG1vZGlmaWNhdGlvbiBpZiB5b3UncmUgbm90IHVzaW5nIGRlZmF1bHQgc2l6ZXMuXG4qL1xuLnBhbmVsLXRhYmxlIC5wYW5lbC1mb290ZXIgLmNvbHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnBhbmVsLXRhYmxlIC5wYW5lbC1oZWFkaW5nIC5jb2wgaDN7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5wYW5lbC10YWJsZSAucGFuZWwtYm9keSAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGR7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/naglowek/naglowek.component.html":
/*!**************************************************!*\
  !*** ./src/app/naglowek/naglowek.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<p>\n {{companyName}}\n</p>\n<p>\n  {{address}}\n</p>\n<img src=\"/assets/{{banner}}\">\n"

/***/ }),

/***/ "./src/app/naglowek/naglowek.component.ts":
/*!************************************************!*\
  !*** ./src/app/naglowek/naglowek.component.ts ***!
  \************************************************/
/*! exports provided: NaglowekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaglowekComponent", function() { return NaglowekComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NaglowekComponent = /** @class */ (function () {
    function NaglowekComponent() {
        this.companyName = "Serenada";
        this.address = "ul. Korecka 23, 23-123 Krakow";
        this.banner = "banner.png";
    }
    NaglowekComponent.prototype.ngOnInit = function () {
    };
    NaglowekComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-naglowek',
            template: __webpack_require__(/*! ./naglowek.component.html */ "./src/app/naglowek/naglowek.component.html"),
            styles: [__webpack_require__(/*! ./naglowek.component.css */ "./src/app/naglowek/naglowek.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NaglowekComponent);
    return NaglowekComponent;
}());



/***/ }),

/***/ "./src/app/new-product/new-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-product/new-product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-product/new-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-product/new-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  new-product works!\n</p>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/new-product/new-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-product/new-product.component.ts ***!
  \******************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _produkt_produkt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../produkt/produkt.component */ "./src/app/produkt/produkt.component.ts");
/* harmony import */ var _product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-service.service */ "./src/app/product-service.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(appcomponent, productServiceService, db) {
        this.appcomponent = appcomponent;
        this.productServiceService = productServiceService;
        this.db = db;
    }
    NewProductComponent.prototype.addProduct = function (name, description, productCount, price, link, category) {
        var id;
        if (this.appcomponent.databaseMode == "fire") {
            id = this.db.createPushId();
        }
        else {
            id = this.appcomponent.getUniqueId();
        }
        this.productServiceService.addProduct(new _produkt_produkt_component__WEBPACK_IMPORTED_MODULE_1__["ProduktComponent"](id, name, Number(productCount), Number(price), description, link, category));
    };
    NewProductComponent.prototype.ngOnInit = function () {
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/new-product/new-product.component.html"),
            template: "\n    <div>\n    name:          <input #name (keyup)=\"0\">\n    </div>\n    <div>\n    description:   <input #description (keyup)=\"0\">\n    </div>\n    <div>\n    product count: <input #productCount (keyup)=\"0\">\n    </div>\n    <div>\n    price:         <input #price (keyup)=\"0\">\n    </div>\n    <div>\n    link:          <input #link (keyup)=\"0\">\n    </div>\n    <div>\n    <div>\n    category:   <input #category (keyup)=\"0\">\n    </div>\n    <button (click)=\"addProduct(name.value,description.value,productCount.value,price.value,link.value,category.value)\">Add product</button>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./new-product.component.css */ "./src/app/new-product/new-product.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/order-product/order-product.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-product/order-product.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXByb2R1Y3Qvb3JkZXItcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/order-product/order-product.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-product/order-product.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/order-product/order-product.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-product/order-product.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProductComponent", function() { return OrderProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderProductComponent = /** @class */ (function () {
    function OrderProductComponent(isCompleted, id, name, products_count, price, description, link, category) {
        this.isCompleted = false;
        this.isCompleted = isCompleted;
        this.id = id;
        this.name = name;
        this.products_count = products_count;
        this.price = price;
        this.description = description;
        this.link = link;
        this.category = category;
    }
    OrderProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-product',
            template: __webpack_require__(/*! ./order-product.component.html */ "./src/app/order-product/order-product.component.html"),
            styles: [__webpack_require__(/*! ./order-product.component.css */ "./src/app/order-product/order-product.component.css")]
        }),
        __metadata("design:paramtypes", [Boolean, String, String, Number, Number, String, String, String])
    ], OrderProductComponent);
    return OrderProductComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "clickable{\n  cursor:pointer;\n}\n\n.table-hover tr:hover {\n  background:#9aaba2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNsaWNrYWJsZXtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi50YWJsZS1ob3ZlciB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IzlhYWJhMjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n  <label class=\"{{getRadioClass(1)}}\">\n    <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" [value]=\"1\" [(ngModel)]=\"options\" checked> Waiting\n  </label>\n  <label class=\"{{getRadioClass(2)}}\">\n    <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\" [value]=\"2\"  [(ngModel)]=\"options\"> In Progress\n  </label>\n  <label class=\"{{getRadioClass(3)}}\">\n    <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\" [value]=\"3\"  [(ngModel)]=\"options\"> Realized\n  </label>\n</div>\n\n<div class=\"container\">\n  <table class='table table-bordered table-condensed table-striped table-hover'>\n    <th scope=\"col\">#</th>\n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Address</th>\n    <th scope=\"col\">Email</th>\n    <th scope=\"col\">Telephone</th>\n    <th scope=\"col\">Cost</th>\n    <th scope=\"col\" >Realized</th>\n    <ng-container *ngFor=\"let order of orders; let myIndex = index\">\n    <tr (click)=\"goToDetails(order.products, order.id)\" class=\"clickable\" *ngIf=\"checkState(order)\">\n      <th scope=\"row\">{{myIndex}}</th>\n      <td>{{order.name}}</td>\n      <td>{{order.address}}</td>\n      <td>{{order.email}}</td>\n      <td>{{order.tel}}</td>\n      <td>{{calculateCost(order.products) | currency}}</td>\n      <td>\n        <i class=\"fa fa-spinner\" *ngIf=\"order.state==='waiting' || order.state==='inprogres'\" ></i>\n        <button (click)=\"sendOrder()\" *ngIf=\"order.state==='done'\"><i class=\"fa fa-truck\"></i></button>\n        <i class=\"fa fa-check\" *ngIf=\"order.state==='sent'\"></i>\n      </td>\n    </tr>\n    </ng-container>\n  </table>\n</div>\n\n<!----------------------------------------------------->\n<div class=\"panel-body\" *ngIf=\"flag\" >\n  <table class=\"table table-striped table-bordered table-list\">\n    <thead>\n    <tr>\n      <th> <button class=\"btn btn-info\" (click)=\"makeAllCompleted()\"> <span class=\"glyphicon glyphicon-plus\"></span> </button>Completion</th>\n     <!-- <th class=\"hidden-xs\">ID</th>-->\n      <th>Name</th>\n      <th>Count</th>\n      <th>Price</th>\n      <th>Description</th>\n      <th>Category</th>\n      <th>Image</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let produkt of this.products\">\n      <td align=\"center\">\n        <em *ngIf=\"produkt.isCompleted\" class=\"glyphicon glyphicon-ok fa-4x\"></em>\n        <button *ngIf=\"!produkt.isCompleted\" class=\"btn btn-warning btn-lg\" (click)=\"markAsDone(produkt)\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n      <!--<td class=\"hidden-xs\">{{produkt.id}}</td>-->\n      <td>{{produkt.name | uppercase}}</td>\n      <td>{{produkt.products_count}}</td>\n      <td>{{produkt.price | currency}}</td>\n      <td>{{produkt.description}}</td>\n      <td>{{produkt.category}}</td>\n      <td><img src=\"/assets/{{produkt.link}}\"></td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/order */ "./src/app/models/order.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(http, appcomponent, db) {
        this.http = http;
        this.appcomponent = appcomponent;
        this.db = db;
        this.flag = false;
        this.options = "1";
        this.flag = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appcomponent.databaseMode == "fire") {
            this.db.list('/orders').valueChanges().subscribe(function (orders) {
                _this.orders = orders;
            });
        }
        else {
            this.http.get(this.appcomponent.url + "/orders").subscribe(function (orders) {
                _this.orders = orders;
            });
        }
    };
    OrdersComponent.prototype.checkState = function (order) {
        if (this.options == "1" && order.state === 'waiting') {
            return true;
        }
        ;
        if (this.options == "2" && (order.state === 'inprogres' || order.state === 'done')) {
            return true;
        }
        ;
        if (this.options == "3" && order.state === 'sent') {
            return true;
        }
        ;
        return false;
    };
    OrdersComponent.prototype.makeAllCompleted = function () {
        var _this = this;
        var order = this.orders.find(function (x) { return x.id === _this.idx; });
        if (order.state !== "sent") {
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var x = _a[_i];
                x.isCompleted = true;
            }
            order.state = 'done';
        }
    };
    OrdersComponent.prototype.goToDetails = function (products, idx) {
        this.flag = true;
        this.products = products;
        this.idx = idx;
    };
    OrdersComponent.prototype.getRadioClass = function (nr) {
        if (nr === this.options) {
            return "btn btn-secondary active";
        }
        return "btn btn-secondary";
    };
    OrdersComponent.prototype.getStatus = function () {
        if (this.products.find(function (x) { return x.isCompleted === true; }) !== undefined && this.products.find(function (x) { return x.isCompleted === false; }) !== undefined) {
            return 'inprogres';
        }
        else if (this.products.find(function (x) { return x.isCompleted === false; }) === undefined) {
            return 'done';
        }
        else if (this.products.find(function (x) { return x.isCompleted === true; }) === undefined) {
            return 'waiting';
        }
        return 'BADRESULT';
    };
    OrdersComponent.prototype.updateOrderInDB = function (order) {
        order.products.find(function (x) { return x.isCompleted === true; });
        var o = new _models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](order.id, order.name, order.address, order.email, order.tel, order.date, order.state, order.products);
        if (this.appcomponent.databaseMode == "fire") {
            this.db.object('/orders/' + order.id).update(o);
        }
        else {
            this.http.put(this.appcomponent.url + "/orders/" + o.id, {
                id: o.id, name: o.name, address: o.address,
                email: o.email, tel: o.tel, date: o.date, state: o.state, products: o.products
            }).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log("Error occured");
            });
        }
    };
    OrdersComponent.prototype.sendOrder = function () {
        var _this = this;
        var order = this.orders.find(function (x) { return x.id === _this.idx; });
        order.state = 'sent';
        //order.date = Date.now();
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US');
        order.date = datePipe.transform(Date.now(), 'dd/MM/yyyy hh:mm');
        this.updateOrderInDB(order);
    };
    OrdersComponent.prototype.markAsDone = function (product) {
        var _this = this;
        product.isCompleted = true;
        var order = this.orders.find(function (x) { return x.id === _this.idx; });
        order.products = this.products;
        order.state = this.getStatus();
        this.updateOrderInDB(order);
    };
    OrdersComponent.prototype.calculateCost = function (products) {
        var cost = 0;
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var p = products_1[_i];
            cost += (p.products_count * p.price);
        }
        return cost;
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/product-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/product-service.service.ts ***!
  \********************************************/
/*! exports provided: ProductServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductServiceService", function() { return ProductServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_produkts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-produkts */ "./src/app/mock-produkts.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductServiceService = /** @class */ (function () {
    /*
      incrementUniqueId(){
        this.uniqueId++;
      }
    */
    function ProductServiceService(http, db) {
        this.http = http;
        this.db = db;
        this.databaseMode = "fire";
        this.url = "http://localhost:5004";
        this.productsList = [];
        //public productsState = this.productsList.asObservable();
        this.categories = [];
        this.uniqueId = 100;
        this.productsList = _mock_produkts__WEBPACK_IMPORTED_MODULE_1__["PRODUKTS"];
        /* if (this.databaseMode=="fire") {
           this.db.list('/products').valueChanges().subscribe(products => {
             this.productsList = <ProduktComponent[]> products;
             //this.productServiceService.productsList = this.produkts;
             //this.getProducts();
           });
         } else {
           this.http.get(this.url + "/products").subscribe(
             products => {
               this.productsList = <ProduktComponent[]> products;
               //this.productServiceService.productsList = this.produkts;
               //this.getProducts();
               //console.log(products);
             }
           );
         } */
    }
    ProductServiceService.prototype.setCategories = function (categories) {
        this.categories = [];
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var c = categories_1[_i];
            this.categories.push(c);
        }
    };
    ProductServiceService.prototype.getUniqueId = function () {
        this.uniqueId++;
        if (this.uniqueId < 1000) {
            return this.uniqueId - 1;
        }
        return -1;
    };
    ProductServiceService.prototype.getProducts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.productsList);
    };
    ProductServiceService.prototype.getProduct = function (product) {
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name == product.name && p.description == product.description) {
                return p;
            }
        }
        return null;
    };
    ProductServiceService.prototype.addProduct = function (product) {
        //alert("add met");
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id === product.id) {
                p.products_count += product.products_count;
                this.updateProductInDB(p);
                return;
            }
        }
        if (this.databaseMode == "fire") {
            this.updateProductInDB(product);
            return;
            //this.db.list("/products").push(product);
        }
        else {
            //alert("dodaje" + product.id +" "+product.name);
            this.http.post(this.url + "/products", product).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log("Error occured");
            });
        }
        this.productsList.push(product);
    };
    /*  deleteOneProduct(product: ProduktComponent){
        for(let p of this.productsList){
          if(p.name == product.name && p.description == product.description){
            if(p.products_count>0) {
                p.products_count -= 1;
                return true;
            }
            return false;
          }
        }
        return false;
      }*/
    ProductServiceService.prototype.deleteProduct = function (product) {
        var index = 0;
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id === product.id) {
                this.productsList.splice(index, 1);
                this.deleteProductFromDB(p);
                return true;
            }
            index++;
        }
    };
    /*
      addOneProduct(product: ProduktComponent){
        for(let p of this.productsList){
          if(p.name == product.name && p.description == product.description){
            p.products_count += 1;
            return;
          }
        }
        this.productsList.push(product);
      }*/
    ProductServiceService.prototype.addOneProduct = function (product) {
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == product.id) {
                p.products_count += 1;
                this.updateProductInDB(p);
                return;
            }
        }
        product.products_count = 1;
        this.updateProductInDB(product);
    };
    ProductServiceService.prototype.deleteOneProduct = function (product) {
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id === product.id) {
                p.products_count--;
                if (p.products_count === 0) {
                    this.deleteProductFromDB(p);
                }
                else {
                    this.updateProductInDB(p);
                }
            }
        }
    };
    ProductServiceService.prototype.deleteProductFromDB = function (product) {
        if (this.databaseMode == "fire") {
            this.db.object('/products/' + product.id).remove();
        }
        else {
            this.http.delete('/products/' + product.id).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log("Error occured");
            });
        }
    };
    ProductServiceService.prototype.updateProductInDB = function (product) {
        if (this.databaseMode == "fire") {
            this.db.object('/products/' + product.id)
                .update({
                id: product.id, name: product.name, products_count: product.products_count,
                price: product.price, description: product.description, link: product.link, category: product.category
            });
        }
        else {
            //alert( product.id +" "+ product.name);
            this.http.put(this.url + "/products/" + product.id, {
                id: product.id, name: product.name, products_count: product.products_count,
                price: product.price, description: product.description, link: product.link, category: product.category
            }).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log("Error occured");
            });
        }
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == product.id) {
                p.id = product.id;
                p.name = product.name;
                p.products_count = product.products_count;
                p.price = product.price;
                p.description = product.description;
                p.link = product.link;
                p.category = product.category;
                return;
            }
        }
        this.productsList.push(product);
    };
    ProductServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], ProductServiceService);
    return ProductServiceService;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border-radius: 15%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"card\" >\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Products</h4><div class=\"row\">\n    <app-produkt class=\"col-md-3\" [produkt]=\"p\" *ngFor=\"let p of produkts\"></app-produkt>\n  </div>\n  </div>\n</div>-->\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css\" rel='stylesheet' type='text/css'>\n\n<!--\n<div *ngIf=\"!logged\">\n  <p *ngIf=\"loginError\">\n    Incorrect credentials!\n  </p>\n</div>-->\n<!------------------------------------------------------------------------------------>\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Home</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/products\" >Products<span class=\"sr-only\">(current)</span></a></li>\n        <li>\n          <a routerLink=\"/trolley\">Trolley</a>\n        </li>\n        <li *ngIf=\"this.authService.role=='admin' || this.authService.role=='worker'\" ><a routerLink=\"/admin\">Administrate</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a style=\"cursor: pointer;\" (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!------------------------------------------------------------------------------------>\n\n<!--\n\n<p></p>\n<button (click)=\"logout()\">Logout</button>\nrole: {{this.authService.role}}\n<nav>\n  <a routerLink=\"/login\">Login</a>\n</nav>\n<nav>\n  <a routerLink=\"/trolley\">Trolley</a>\n</nav>\n<nav>\n  <a routerLink=\"/newproduct\">Nowy Produkt</a>\n</nav>\n<nav>\n  <a routerLink=\"/admin\">Admin</a>\n</nav>\n-->\n\n<app-categories></app-categories>\n\n<div *ngIf=\"logged\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n\n      <div class=\"panel panel-default panel-table\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col col-xs-6\">\n              <h3 class=\"panel-title\">List of available products</h3>\n            </div>\n\n              <!--<li> <a class=\"fa fa-chevron-up\" aria-hidden=\"true\" (click)=\"amountOfItemsOnThePage('-')\"></a></li>\n              <li> <a class=\"fa fa-chevron-down\" aria-hidden=\"true\" (click)=\"amountOfItemsOnThePage('+')\"></a></li>-->\n              <div class=\"pull-right\" [ngStyle]=\"getBackgroundForAllProductsCount(countAllProducts())\">\n                <h3>{{countAllProducts()}} available products</h3>\n              </div>\n            <!--<div class=\"col col-xs-6 text-right\">\n              <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\">Create New</button>\n            </div>-->\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <table class=\"table table-striped table-bordered table-list\">\n            <thead>\n            <tr>\n              <th><em class=\"fa fa-cog\"></em></th>\n              <!--<th class=\"hidden-xs\">ID</th>-->\n              <th>Name</th>\n              <th>Count</th>\n              <th>Price</th>\n              <th>Description</th>\n              <th>Category</th>\n              <th>Image</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let produkt of getProcuctsForPage()\" [ngStyle]=\"getStyleforItem(produkt)\">\n              <td align=\"center\">\n                <a  [ngStyle]=\"{display:checkHowMuchInStore(produkt)}\" class=\"btn btn-default\" (click)=\"addToCart(produkt)\"><em class=\"fa fa-plus\"></em></a>\n                <a class=\"btn btn-danger\" (click)=\"removeFromCart(produkt)\"><em class=\"fa fa-minus\"></em></a>\n              </td>\n              <!--<td class=\"hidden-xs\">{{produkt.id}}</td>-->\n              <td>{{produkt.name | uppercase}}</td>\n              <td>{{produkt.products_count}}</td>\n              <td>{{produkt.price | currency}}</td>\n              <td>{{produkt.description}}</td>\n              <td>{{produkt.category}}</td>\n              <td><img src=\"/assets/{{produkt.link}}\"></td>\n            </tr>\n            </tbody>\n          </table>\n\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"row\">\n            <div class=\"col col-xs-4\">Page {{productsPageIndex}} of {{getPagesCount()}}\n            </div>\n            <div class=\"col col-xs-8\">\n              <ul class=\"pagination hidden-xs pull-left\">\n                <li *ngFor=\"let page of getPagesArray()\">\n                  <a (click)=\"setPageTo(page)\">{{page}}</a>\n                </li>\n              </ul>\n             <div class=\"pagination hidden-xs pull-right\">\n                <!--<li> <a class=\"fa fa-chevron-up\" aria-hidden=\"true\" (click)=\"amountOfItemsOnThePage('-')\"></a></li>\n                <li> <a class=\"fa fa-chevron-down\" aria-hidden=\"true\" (click)=\"amountOfItemsOnThePage('+')\"></a></li>-->\n\n              <select class='select-option' required [(ngModel)]='productsOnPage'>\n                <option class='option' *ngFor='let option of options' [value]=\"option\">{{option}}</option>\n              </select>\n\n             </div>\n              <!--<select class=\"form-control\"  id=\"power\"\n                      required\n                      [(ngModel)]=\"model.power\" name=\"power\">\n                <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\n              </select>-->\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div></div></div>\n<!--<app-naglowek></app-naglowek>-->\n\n  <!--<ul class=\"produkts\">\n  <li *ngFor=\"let produkt of produkts\">\n    <div [ngStyle]=\"getStyleforItem(produkt)\">\n      {{produkt.id}} {{produkt.name | uppercase}} {{produkt.products_count}} {{produkt.price | currency}} {{produkt.description}}\n      <img src=\"/assets/{{produkt.link}}\">\n\n      <div [ngStyle]=\"{display:checkHowMuchInStore(produkt)}\">\n        <button (click)=\"addToCart(produkt)\">+</button>\n      </div>\n      <div [ngStyle]=\"{display:checkHowMuchInStoreForRemoving(produkt)}\">\n        <button (click)=\"removeFromCart(produkt)\">-</button>\n      </div>\n    </div>\n  </li>\n</ul>\n-->\n<!--<div [ngStyle]=\"getBackgroundForAllProductsCount(countAllProducts())\">\n  suma dostepnych produktow = {{countAllProducts()}}\n</div>-->\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-service.service */ "./src/app/product-service.service.ts");
/* harmony import */ var _trolley_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trolley-service.service */ "./src/app/trolley-service.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(appcomponent, http, authService, db, productServiceService, trolleyServiceService) {
        this.appcomponent = appcomponent;
        this.http = http;
        this.authService = authService;
        this.db = db;
        this.productServiceService = productServiceService;
        this.trolleyServiceService = trolleyServiceService;
        // user=this.authService.user.email;
        this.produkts = [];
        this.productsPageIndex = 1;
        this.productsOnPage = 5;
        this.categories = [];
        this.logged = true;
        this.options = [5, 10, 20];
        /*produkts = PRODUKTS;
      */
        this.cart = this.trolleyServiceService.productsInTheCart;
        this.styleWhenLow = {
            'background-color': 'yellow',
            'border-style': 'solid',
            'border-color': 'red'
        };
        this.styleWhenHigh = {
            'background-color': 'white',
            'border-style': 'solid',
            'border-color': 'green'
        };
        /*if (this.appcomponent.databaseMode=="fire") {
          this.db.list('/products').valueChanges().subscribe(products => {
            this.produkts = <ProduktComponent[]> products;
            this.productServiceService.productsList = this.produkts;
            this.getProducts();
          });
        } else {
          this.http.get(this.appcomponent.url + "/products").subscribe(
            products => {
              this.produkts = <ProduktComponent[]> products;
              this.productServiceService.productsList = this.produkts;
              this.getProducts();
              console.log(products);
            }
          );
        }*/
    }
    ProductsComponent.prototype.setPageTo = function (x) {
        this.productsPageIndex = x;
        this.getProcuctsForPage();
    };
    ProductsComponent.prototype.logout = function () {
        this.authService.logout();
    };
    /*
      onOptionSelected(event){
        console.log(event); //option value will be sent as event
      }*/
    ProductsComponent.prototype.amountOfItemsOnThePage = function (s) {
        if (s == "+") {
            if (this.productsOnPage < this.produkts.length) {
                this.productsOnPage = this.productsOnPage * 2;
                if (this.productsOnPage > this.produkts.length) {
                    this.productsOnPage = this.produkts.length;
                }
            }
            if ((this.produkts.length / this.productsOnPage < this.productsPageIndex) && (this.productsPageIndex > 1)) {
                this.productsPageIndex--;
            }
        }
        else if (s == "-") {
            if (this.productsOnPage >= 10) {
                this.productsOnPage = this.productsOnPage / 2;
            }
            else {
                this.productsOnPage = 5;
            }
        }
    };
    /*public updateCategories(){
      this.categories = this.produkts.map(function(item) {
        return item.category;
      });
    }*/
    ProductsComponent.prototype.getProductsForCategories = function () {
        var _this = this;
        this.categories = this.productServiceService.categories;
        return this.produkts.filter(function (element) { return _this.categories.find(function (x) { return x == element.category; }); });
    };
    ProductsComponent.prototype.getPagesCount = function () {
        var productsAfterFiltering = this.getProductsForCategories();
        var pagesCount = productsAfterFiltering.length / this.productsOnPage;
        if (productsAfterFiltering.length % this.productsOnPage > 0) {
            pagesCount++;
        }
        var x = 0;
        for (var i = 1; i <= pagesCount; i++) {
            x++;
        }
        return x;
    };
    ProductsComponent.prototype.getPagesArray = function () {
        var res = [];
        var pagesCount = this.getPagesCount();
        for (var i = 1; i <= pagesCount; i++) {
            res.push(i);
        }
        return res;
    };
    ProductsComponent.prototype.getProcuctsForPage = function () {
        var productsAfterFiltering = this.getProductsForCategories();
        return productsAfterFiltering.slice((this.productsPageIndex - 1) * this.productsOnPage, (this.productsPageIndex) * this.productsOnPage);
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appcomponent.databaseMode == "fire") {
            this.db.list('/products').valueChanges().subscribe(function (products) {
                _this.produkts = products;
                _this.getProducts();
            });
        }
        else {
            this.http.get(this.appcomponent.url + "/products").subscribe(function (products) {
                _this.produkts = products;
                _this.getProducts();
                console.log(products);
            });
        }
        // this.getProducts();
        //  this.productServiceService.getProducts().subscribe(products => {this.produkts = products;})
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        //this.produkts = this.productServiceService.getProducts();
        this.productServiceService.getProducts().subscribe(function (products) { _this.produkts = products; });
    };
    ProductsComponent.prototype.getPrices = function () {
        return this.produkts.map(function (d) { return d.price; });
    };
    ProductsComponent.prototype.getLowestPrice = function () {
        return Math.min.apply(Math, this.getPrices());
    };
    ProductsComponent.prototype.getHighestPrice = function () {
        return Math.max.apply(Math, this.getPrices());
    };
    ProductsComponent.prototype.checkHowMuchInStore = function (item) {
        for (var _i = 0, _a = this.produkts; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == item.id) {
                return p.products_count == 0 ? "none" : "inline";
            }
        }
        return "none";
    };
    ProductsComponent.prototype.checkHowMuchInStoreForRemoving = function (item) {
        var itemFromCart = this.trolleyServiceService.getProductFromCart(item);
        if (itemFromCart == null) {
            return "none";
        }
        return itemFromCart.products_count == 0 ? "none" : "inline";
    };
    ProductsComponent.prototype.getStyleforItem = function (item) {
        var background = 'white';
        var bordercolor = 'white';
        if (item.products_count < 4) {
            background = 'red';
        }
        else {
            background = 'white';
        }
        if (item.price == this.getLowestPrice()) {
            bordercolor = 'red';
        }
        else if (item.price == this.getHighestPrice()) {
            bordercolor = 'green';
        }
        var prodStyle = {
            'background-color': background,
            'border-style': 'solid',
            'border-color': bordercolor
        };
        return prodStyle;
    };
    ProductsComponent.prototype.addToCart = function (item) {
        var itemFromService = this.productServiceService.getProduct(item);
        if (itemFromService != null && itemFromService.products_count > 0) {
            this.productServiceService.deleteOneProduct(item);
            //this.productServiceService.deleteProductFromDB(item);
            var cartItem = Object.assign({}, item);
            cartItem.products_count = 1;
            this.trolleyServiceService.addOneProductToTheCart(cartItem);
            this.getProducts();
            return;
        }
        alert('brak produktu w sklepie');
    };
    ProductsComponent.prototype.removeFromCart = function (item) {
        var itemFromCartService = this.trolleyServiceService.getProductFromCart(item);
        if (itemFromCartService != null && itemFromCartService.products_count > 0) {
            var cartItem = Object.assign({}, item);
            this.trolleyServiceService.deleteOneProductFromTheCart(cartItem);
            var productItem = Object.assign({}, item);
            this.productServiceService.addOneProduct(productItem);
            //   this.productServiceService.addOneProductToDB(productItem);
            //    this.getProducts();
        }
    };
    ProductsComponent.prototype.getProductsCount = function () {
        return this.produkts.map(function (d) { return d.products_count; }).reduce(function (a, b) { return Number(a) + Number(b); });
    };
    ProductsComponent.prototype.countAllProducts = function () {
        return this.getProductsCount();
    };
    ProductsComponent.prototype.getBackgroundForAllProductsCount = function (counter) {
        var color = 'green';
        if (counter < 10) {
            color = 'red';
        }
        var bkgstyle = {
            'background-color': color
        };
        return bkgstyle;
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            providers: [_product_service_service__WEBPACK_IMPORTED_MODULE_1__["ProductServiceService"]],
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _product_service_service__WEBPACK_IMPORTED_MODULE_1__["ProductServiceService"], _trolley_service_service__WEBPACK_IMPORTED_MODULE_2__["TrolleyServiceService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/produkt/produkt.component.css":
/*!***********************************************!*\
  !*** ./src/app/produkt/produkt.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border-radius: 15%;\n}\n\n.panel-table .panel-body{\n  padding:0;\n}\n\n.panel-table .panel-body .table-bordered{\n  border-style: none;\n  margin:0;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {\n  text-align:center;\n  width: 100px;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,\n.panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {\n  border-right: 0px;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,\n.panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {\n  border-left: 0px;\n}\n\n.panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{\n  border-bottom: 0px;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{\n  border-top: 0px;\n}\n\n.panel-table .panel-footer .pagination{\n  margin:0;\n}\n\n/*\nused to vertically center elements, may need modification if you're not using default sizes.\n*/\n\n.panel-table .panel-footer .col{\n  line-height: 34px;\n  height: 34px;\n}\n\n.panel-table .panel-heading .col h3{\n  line-height: 30px;\n  height: 30px;\n}\n\n.panel-table .panel-body .table-bordered > tbody > tr > td{\n  line-height: 34px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVrdC9wcm9kdWt0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztDQUNWOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDs7QUFFRDs7RUFFRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7O0VBRUUsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsU0FBUztDQUNWOztBQUVEOztFQUVFOztBQUNGO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWt0L3Byb2R1a3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cblxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5e1xuICBwYWRkaW5nOjA7XG59XG5cbi5wYW5lbC10YWJsZSAucGFuZWwtYm9keSAudGFibGUtYm9yZGVyZWR7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOjA7XG59XG5cbi5wYW5lbC10YWJsZSAucGFuZWwtYm9keSAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGg6Zmlyc3Qtb2YtdHlwZSB7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5wYW5lbC10YWJsZSAucGFuZWwtYm9keSAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGg6bGFzdC1vZi10eXBlLFxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aDpmaXJzdC1vZi10eXBlLFxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWxlZnQ6IDBweDtcbn1cblxuLnBhbmVsLXRhYmxlIC5wYW5lbC1ib2R5IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6Zmlyc3Qtb2YtdHlwZSA+IHRke1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG5cbi5wYW5lbC10YWJsZSAucGFuZWwtYm9keSAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyOmZpcnN0LW9mLXR5cGUgPiB0aHtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4ucGFuZWwtdGFibGUgLnBhbmVsLWZvb3RlciAucGFnaW5hdGlvbntcbiAgbWFyZ2luOjA7XG59XG5cbi8qXG51c2VkIHRvIHZlcnRpY2FsbHkgY2VudGVyIGVsZW1lbnRzLCBtYXkgbmVlZCBtb2RpZmljYXRpb24gaWYgeW91J3JlIG5vdCB1c2luZyBkZWZhdWx0IHNpemVzLlxuKi9cbi5wYW5lbC10YWJsZSAucGFuZWwtZm9vdGVyIC5jb2x7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5wYW5lbC10YWJsZSAucGFuZWwtaGVhZGluZyAuY29sIGgze1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucGFuZWwtdGFibGUgLnBhbmVsLWJvZHkgLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRke1xuICBsaW5lLWhlaWdodDogMzRweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/produkt/produkt.component.html":
/*!************************************************!*\
  !*** ./src/app/produkt/produkt.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span class=\"product-name\">{{name}}</span>\n  <span class=\"product-description\">{{description}}</span>\n  <span class=\"product-price\">{{price}}</span>\n  <span class=\"product-price\">{{product_count}}</span>\n  <button class=\"product-buyButton\">Buy it!</button>\n</div>\n\n\n\n\n<!--\n<p>\n  produkt works!\n</p>\n\n<h2>My Products</h2>\n\n<ul class=\"produkts\">\n  <li *ngFor=\"let produkt of produkts\">\n    <div [ngStyle]=\"getStyleforItem(produkt)\">\n    {{produkt.id}} {{produkt.name | uppercase}} {{produkt.products_count}} {{produkt.price | currency}} {{produkt.description}}\n    <img src=\"/assets/{{produkt.link}}\">\n\n    <div [ngStyle]=\"{display:checkHowMuchInStore(produkt)}\">\n      <button (click)=\"addToCart(produkt)\">+</button>\n    </div>\n    <div [ngStyle]=\"{display:inline}\">\n      <button (click)=\"removeFromCart(produkt)\">-</button>\n    </div>\n    &lt;!&ndash; <mat-button></mat-button> &ndash;&gt;\n    &lt;!&ndash;  [class.selected]=\"hero === selectedHero\"\n      (click)=\"onSelect(hero)\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    &ndash;&gt;\n    </div>\n  </li>\n</ul>\n<div [ngStyle]=\"getBackgroundForAllProductsCount(countAllProducts())\">\nsuma dostepnych produktow = {{countAllProducts()}}\n</div>\n<app-naglowek></app-naglowek>\n  &lt;!&ndash;<app-hero-detail [hero]=\"selectedHero\"></app-hero-detail>\n&ndash;&gt;\n-->\n"

/***/ }),

/***/ "./src/app/produkt/produkt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/produkt/produkt.component.ts ***!
  \**********************************************/
/*! exports provided: ProduktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduktComponent", function() { return ProduktComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProduktComponent = /** @class */ (function () {
    function ProduktComponent(id, name, products_count, price, description, link, category) {
        this.id = id;
        this.name = name;
        this.products_count = products_count;
        this.price = price;
        this.description = description;
        this.link = link;
        this.category = category;
    }
    ProduktComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produkt',
            template: __webpack_require__(/*! ./produkt.component.html */ "./src/app/produkt/produkt.component.html"),
            styles: [__webpack_require__(/*! ./produkt.component.css */ "./src/app/produkt/produkt.component.css")]
        }),
        __metadata("design:paramtypes", [String, String, Number, Number, String, String, String])
    ], ProduktComponent);
    return ProduktComponent;
}());



/***/ }),

/***/ "./src/app/trolley-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/trolley-service.service.ts ***!
  \********************************************/
/*! exports provided: TrolleyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrolleyServiceService", function() { return TrolleyServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _product_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-service.service */ "./src/app/product-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrolleyServiceService = /** @class */ (function () {
    function TrolleyServiceService(productServiceService) {
        this.productServiceService = productServiceService;
        this.productsInTheCart = [];
    }
    //  private productsInTheCart = new BehaviorSubject<ProduktComponent[]>([]);
    //  public productsState = this.productsInTheCart.asObservable();
    TrolleyServiceService.prototype.getProductsFromTheCart = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.productsInTheCart);
    };
    TrolleyServiceService.prototype.getProductFromCart = function (product) {
        for (var _i = 0, _a = this.productsInTheCart; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name == product.name && p.description == product.description) {
                return p;
            }
        }
        return null;
    };
    TrolleyServiceService.prototype.deleteOneProductFromTheCart = function (product) {
        var _this = this;
        this.productsInTheCart.forEach(function (item, index) {
            if (item.name == product.name && item.description == product.description) {
                if (item.products_count > 0) {
                    item.products_count -= 1;
                    //     let productItem = Object.assign({}, product);
                    //     this.productServiceService.addOneProduct(productItem);
                    if (item.products_count == 0) {
                        _this.productsInTheCart.splice(index, 1);
                    }
                }
                return;
            }
        });
    };
    TrolleyServiceService.prototype.clear = function () {
        this.productsInTheCart = [];
    };
    TrolleyServiceService.prototype.addOneProductToTheCart = function (product) {
        for (var _i = 0, _a = this.productsInTheCart; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name == product.name && p.description == product.description) {
                p.products_count += 1;
                return;
            }
        }
        this.productsInTheCart.push(product);
    };
    TrolleyServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_product_service_service__WEBPACK_IMPORTED_MODULE_4__["ProductServiceService"]])
    ], TrolleyServiceService);
    return TrolleyServiceService;
}());



/***/ }),

/***/ "./src/app/trolley/trolley.component.css":
/*!***********************************************!*\
  !*** ./src/app/trolley/trolley.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ryb2xsZXkvdHJvbGxleS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/trolley/trolley.component.html":
/*!************************************************!*\
  !*** ./src/app/trolley/trolley.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css\" rel='stylesheet' type='text/css'>\n\n\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Home</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/products\" >Products</a></li>\n        <li class=\"active\">\n          <a routerLink=\"/trolley\">Trolley<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li *ngIf=\"this.authService.role=='admin' || this.authService.role=='worker'\" ><a routerLink=\"/admin\">Administrate</a></li>\n        <li><a routerLink=\"/buyForm\" ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n        </a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a style=\"cursor: pointer;\" (click)=\"this.authService.logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div>\n <h1> You have {{howManyProducts}} products in the cart. Total price = {{totalCost | currency}}</h1>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n\n      <div class=\"panel panel-default panel-table\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col col-xs-6\">\n              <h3 class=\"panel-title\">Trolley</h3>\n            </div>\n            <div class=\"col col-xs-6 text-right\">\n              <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" routerLink=\"/buyForm\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></button>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <table class=\"table table-striped table-bordered table-list\">\n            <thead>\n            <tr>\n              <th><em class=\"fa fa-cog\"></em></th>\n              <!--<th class=\"hidden-xs\">ID</th>-->\n              <th>Name</th>\n              <th>Count</th>\n              <th>Price</th>\n              <th>Description</th>\n              <th>Image</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let produkt of getProcuctsForPage()\">\n              <td align=\"center\">\n                <a class=\"btn btn-default\" (click)=\"addToCart(produkt)\"><em class=\"fa fa-plus\"></em></a>\n                <a class=\"btn btn-danger\" (click)=\"removeFromCart(produkt)\"><em class=\"fa fa-minus\"></em></a>\n              </td>\n              <!--<td class=\"hidden-xs\">{{produkt.id}}</td>-->\n              <td>{{produkt.name | uppercase}}</td>\n              <td>{{produkt.products_count}}</td>\n              <td>{{produkt.price | currency}}</td>\n              <td>{{produkt.description}}</td>\n              <td><img src=\"/assets/{{produkt.link}}\"></td>\n            </tr>\n            </tbody>\n          </table>\n\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"row\">\n            <div class=\"col col-xs-4\">Page {{productsPageIndex}} of {{getPagesCount()}}\n            </div>\n            <div class=\"col col-xs-8\">\n              <ul class=\"pagination hidden-xs pull-left\">\n                <li *ngFor=\"let page of getPagesArray()\">\n                  <a (click)=\"setPageTo(page)\">{{page}}</a>\n                </li>\n              </ul>\n              <div class=\"pagination hidden-xs pull-right\">\n                <select class='select-option' required [(ngModel)]='productsOnPage'>\n                  <option class='option' *ngFor='let option of options' [value]=\"option\">{{option}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div></div></div>\n\n\n<div></div>\n<div></div>\n<div></div>\n<!--\n<div>\n  <ul>\n    <li *ngFor=\"let prod of productsInCart;let i = index\" >\n      {{prod.name}}: {{prod.description}}, Price per one: {{prod.price}}$\n      , Amount: {{prod.products_count}} &lt;!&ndash;<button (click)=\"delete(i)\">Delete</button>&ndash;&gt;\n    </li>\n  </ul>\n  &lt;!&ndash;<nav id=\"backButton\">\n    <a routerLink=\"/home\">Back to shopping</a>\n  </nav>\n  <nav *ngIf=\"boughtItems.length!=0\" id=\"formButton\">\n    <a routerLink=\"/form\" >Go to delivery details</a>\n  </nav>&ndash;&gt;\n</div>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/trolley/trolley.component.ts":
/*!**********************************************!*\
  !*** ./src/app/trolley/trolley.component.ts ***!
  \**********************************************/
/*! exports provided: TrolleyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrolleyComponent", function() { return TrolleyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trolley_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trolley-service.service */ "./src/app/trolley-service.service.ts");
/* harmony import */ var _product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-service.service */ "./src/app/product-service.service.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrolleyComponent = /** @class */ (function () {
    function TrolleyComponent(authService, trolleyServiceService, productServiceService) {
        this.authService = authService;
        this.trolleyServiceService = trolleyServiceService;
        this.productServiceService = productServiceService;
        this.productsInCart = [];
        this.totalCost = 0;
        this.howManyProducts = 0;
        this.options = [5, 10, 20];
        this.productsPageIndex = 1;
        this.productsOnPage = 5;
    }
    TrolleyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getProducts();
        this.trolleyServiceService.getProductsFromTheCart().subscribe(function (products) { _this.productsInCart = products; });
        this.calcutaleCost();
        this.calculateHowManyProducts();
    };
    TrolleyComponent.prototype.amountOfItemsOnThePage = function (s) {
        if (s == "+") {
            if (this.productsOnPage < this.productsInCart.length) {
                this.productsOnPage = this.productsOnPage * 2;
                if (this.productsOnPage > this.productsInCart.length) {
                    this.productsOnPage = this.productsInCart.length;
                }
            }
            if (((this.productsInCart.length / this.productsOnPage) < this.productsPageIndex) && (this.productsPageIndex > 1)) {
                this.productsPageIndex--;
            }
        }
        else if (s == "-") {
            if (this.productsOnPage >= 10) {
                this.productsOnPage = this.productsOnPage / 2;
            }
            else {
                this.productsOnPage = 5;
            }
        }
    };
    TrolleyComponent.prototype.setPageTo = function (x) {
        this.productsPageIndex = x;
        this.getProcuctsForPage();
    };
    TrolleyComponent.prototype.getPagesCount = function () {
        var pagesCount = this.productsInCart.length / this.productsOnPage;
        if (this.productsInCart.length % this.productsOnPage > 0) {
            pagesCount++;
        }
        var x = 0;
        for (var i = 1; i <= pagesCount; i++) {
            x++;
        }
        return x;
    };
    TrolleyComponent.prototype.getPagesArray = function () {
        var res = [];
        var pagesCount = this.getPagesCount();
        for (var i = 1; i <= pagesCount; i++) {
            res.push(i);
        }
        return res;
    };
    TrolleyComponent.prototype.getProcuctsForPage = function () {
        return this.productsInCart.slice((this.productsPageIndex - 1) * this.productsOnPage, (this.productsPageIndex) * this.productsOnPage);
    };
    TrolleyComponent.prototype.getProducts = function () {
        var _this = this;
        //this.productsInCart = this.trolleyServiceService.getProductsFromTheCart();
        this.trolleyServiceService.getProductsFromTheCart().subscribe(function (products) { _this.productsInCart = products; });
        this.calcutaleCost();
        this.calculateHowManyProducts();
    };
    TrolleyComponent.prototype.addToCart = function (product) {
        if (this.productServiceService.getProduct(product).products_count > 0) {
            this.productServiceService.deleteOneProduct(product);
            this.trolleyServiceService.addOneProductToTheCart(product);
            this.calcutaleCost();
            this.calculateHowManyProducts();
        }
    };
    TrolleyComponent.prototype.addProduct = function (product) {
        for (var _i = 0, _a = this.productsInCart; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name == product.name && p.description == product.description) {
                p.products_count += product.products_count;
                return;
            }
        }
        this.productsInCart.push(product);
    };
    TrolleyComponent.prototype.calcutaleCost = function () {
        var cost = 0;
        for (var _i = 0, _a = this.productsInCart; _i < _a.length; _i++) {
            var p = _a[_i];
            cost += p.products_count * p.price;
        }
        this.totalCost = cost;
    };
    TrolleyComponent.prototype.calculateHowManyProducts = function () {
        var howMany = 0;
        for (var _i = 0, _a = this.productsInCart; _i < _a.length; _i++) {
            var p = _a[_i];
            howMany += p.products_count;
        }
        this.howManyProducts = howMany;
    };
    TrolleyComponent.prototype.removeFromCart = function (item) {
        var itemFromCartService = this.trolleyServiceService.getProductFromCart(item);
        if (itemFromCartService != null && itemFromCartService.products_count > 0) {
            var cartItem = Object.assign({}, item);
            this.trolleyServiceService.deleteOneProductFromTheCart(cartItem);
            this.productServiceService.addOneProduct(cartItem);
            this.getProducts();
        }
    };
    TrolleyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trolley',
            template: __webpack_require__(/*! ./trolley.component.html */ "./src/app/trolley/trolley.component.html"),
            styles: [__webpack_require__(/*! ./trolley.component.css */ "./src/app/trolley/trolley.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _trolley_service_service__WEBPACK_IMPORTED_MODULE_1__["TrolleyServiceService"], _product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]])
    ], TrolleyComponent);
    return TrolleyComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent(email, role) {
        this.email = email;
        this.role = role;
    }
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [String, String])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCA27ZPMUUnneNoynS-BHlQ52kgLneMnAQ",
        authDomain: "sklep-internetowy-9f1fc.firebaseapp.com",
        databaseURL: "https://sklep-internetowy-9f1fc.firebaseio.com",
        projectId: "sklep-internetowy-9f1fc",
        storageBucket: "sklep-internetowy-9f1fc.appspot.com",
        messagingSenderId: "931717034668"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/piotr/Desktop/WERSJA OSTATECZNA/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map