webpackJsonp([2,4],{

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 134;


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(152);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asymmetrik_angular2_leaflet__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export MyCustomDirective */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.wmsURL = 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/WorldCities/FeatureServer/0';
        this.whereCondition = '1=1';
        this.srid = '4326';
        this.returnDistinctValues = 'false';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Defining the map container properties
        this.myMap = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"]('myMap', {
            center: __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](0, 0),
            zoom: 3
        });
        // Defining the basemap
        var basemapLayer1 = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"].wms('http://tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
            layers: 'Stamen Country Borders',
            maxZoom: 18,
            opacity: 0.8,
            attribution: "<a href='https://stamen.com/'>© Stamen Design LLC</a>"
        });
        var basemapLayer2 = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"].wms('http://ows.terrestris.de/osm/service', {
            layers: 'TOPO-WMS',
            opacity: 0.5,
            attribution: "<a href='https://www.terrestris.de/'>Copyright © 2017 terrestris GmbH & Co</a>"
        });
        var basemapLayer3 = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"].wms('http://ows.terrestris.de/osm/service', {
            layers: 'TOPO-OSM-WMS',
            opacity: 0.5,
            attribution: "<a href='https://www.terrestris.de/'>Copyright © 2017 terrestris GmbH & Co</a>"
        });
        var basemapLayer4 = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"].wms('http://ows.terrestris.de/osm/service', {
            layers: 'OSM-WMS',
            opacity: 0.5,
            attribution: "<a href='https://www.terrestris.de/'>Copyright © 2017 terrestris GmbH & Co</a>"
        });
        var basemapLayer5 = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"].wms('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            layers: 'OSM - Basemap',
            opacity: 0.5,
            attribution: "<a href='http://www.openstreetmap.org/'>OpenStreetMap®</a>"
        });
        var wmsLayer1 = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"].wms('http://10.16.2.55:8080/geoserver/wms', {
            layers: 'Boundary',
            opacity: 0.5,
            attribution: 'Sample Layer from GeoServer'
        });
        // Define a layer group for the basemap
        var basemapLayers = {
            'World Countries Border': basemapLayer1,
            'Topographic Map': basemapLayer2,
            'OSM Topographic Map': basemapLayer3,
            'National Geographic Map': basemapLayer4,
            'Open Street Map': basemapLayer5
        };
        // Define a layer group for the wms layers
        var wmsLayers = {
            'Sample Internal WMS Layer': wmsLayer1.addTo(this.myMap)
        };
        // Add the layers to the map
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["control"].layers(basemapLayers, wmsLayers).addTo(this.myMap);
    };
    AppComponent.prototype.loadWMSLayer = function () {
        var _this = this;
        var geojsonMarkerOptions = {
            radius: 5,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };
        var conditionURL = '/query?where=' + this.whereCondition + '&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=' + this.srid + '&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=' + this.returnDistinctValues + '&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&quantizationParameters=&sqlFormat=none&f=pgeojson&token=';
        this.http.get(this.wmsURL + conditionURL)
            .map(function (response) {
            var geoJsonLayer1 = __WEBPACK_IMPORTED_MODULE_1_leaflet__["geoJSON"](response.json(), {
                pointToLayer: function (feature, latlng) {
                    return __WEBPACK_IMPORTED_MODULE_1_leaflet__["circleMarker"](latlng, geojsonMarkerOptions);
                },
                onEachFeature: _this.onEachFeature,
                style: function (feature) {
                    switch (feature.properties['POP']) {
                        case 'test1': return {
                            radius: 5,
                            fillColor: "#5942f4",
                            color: "#000",
                            weight: 1,
                            opacity: 1,
                            fillOpacity: 0.8
                        };
                    }
                }
            }).addTo(_this.myMap);
        }).subscribe();
        this.myMap.eachLayer(function (layer) {
            if (layer.feature) {
                console.log(layer.feature.id);
            }
        });
    };
    AppComponent.prototype.onEachFeature = function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(310),
        styles: [__webpack_require__(306)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AppComponent);

var MyCustomDirective = (function () {
    function MyCustomDirective(leafletDirective) {
        this.leafletDirective = leafletDirective;
    }
    MyCustomDirective.prototype.someFunction = function () {
        if (null != this.leafletDirective.getMap()) {
            // Do stuff with the map
        }
    };
    return MyCustomDirective;
}());
MyCustomDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: '[myCustomDirective]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__asymmetrik_angular2_leaflet__["b" /* LeafletDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__asymmetrik_angular2_leaflet__["b" /* LeafletDirective */]) === "function" && _b || Object])
], MyCustomDirective);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asymmetrik_angular2_leaflet__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__asymmetrik_angular2_leaflet__["a" /* LeafletModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Leafletjs WebMap Viewer</a>\n    </div>\n    <button type=\"button\" class=\"btn btn-danger navbar-btn\" data-toggle=\"modal\" data-target=\"#myModal\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n    <button type=\"button\" class=\"btn btn-danger navbar-btn\" data-toggle=\"modal\" data-target=\"#symbology\"><span class=\"glyphicon glyphicon-text-color\"></span></button>\n  </div>\n  <div id=\"myMap\" style=\"height:800px; width:100%\"></div>\n</nav>\n\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n\n            <!--Modal header-->\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Adding layer to the map</h4>\n            </div>\n            <div class=\"modal-body\">\n                <ul class=\"nav nav-tabs\">\n                    <li><a href=\"#general\" data-toggle=\"tab\">General</a></li>\n                    <li><a href=\"#setting\" data-toggle=\"tab\">Setting</a></li>\n                </ul>\n             \n            </div>\n\n            <!-- Tab panes -->\n            <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"general\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter the URL here\" [(ngModel)]=\"wmsURL\">\n                        <span class=\"input-group-btn\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadWMSLayer()\">Add to the map</button></span>\n                    </div>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane\" id=\"setting\">\n                    <div class=\"form-group\">\n                        <label>Search Condition:</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search Condition (default 1=1)\" [(ngModel)]=\"whereCondition\">\n                        <label>Coordinate System ID (SRID):</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Coordinate System ID (default 4326 - WGS84)\" [(ngModel)]=\"srid\">\n                        <label>Return Distinct Values:</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Return Distinct Values (default False)\" [(ngModel)]=\"returnDistinctValues\">                        \n                    </div>                    \n                </div>\n            </div>         \n\n            <!--Modal Tab Footer-->\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Symbology Tab-->\n<div id=\"symbology\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Define Symbology</h4>\n            </div>\n            <div class=\"modal-body\">\n              \n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


/***/ })

},[339]);
//# sourceMappingURL=main.bundle.js.map