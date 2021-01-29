"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.__esModule = true;
var sp_core_library_1 = require("@microsoft/sp-core-library");
var module_1 = require();
"prefix-trie-ts\";;
var common_1 = require("@pnp/common");
var sp_application_base_1 = require("@microsoft/sp-application-base");
var sp_dialog_1 = require("@microsoft/sp-dialog");
var strings = require("SuggestionApplicationCustomizerStrings");
var sp_1 = require("@pnp/sp");
"@pnp/sp/webs\";;
"@pnp/sp/lists\";;
"@pnp/sp/items\";;
var LOG_SOURCE = 'SuggestionApplicationCustomizer';
var trie;
var a = document.getElementsByClassName("_3X3KIHRvQlB_k1KQr3703K\");, a[0].setAttribute("ID\", \"searchID\");, let, e, HTMLInputElement = document.querySelector('#sbcId > form > input')));
//e.setAttribute(\"onchange\",\"{handleChange}\");
//  e.addEventListener('click',(event)=>{
//    console.log(\"test1231\")
//   let dropdown = document.getElementById(\"ms-searchux-popup-0\");
//   console.log(dropdown);
//  });
e.addEventListener('input', function (event) {
    console.log("test changes2\");, console.log(trie.getPrefix(e.value)));
    var dropdown = document.getElementById("ms-searchux-popup-0\");, console.log(dropdown));
    var addedHtml = ;
    "<li role=\\";
    presentation;
    " data-suggestion-position=\\";
    7;
    "> <div class=\\";
    suggestionContainer - 241;
    ">  <div class=\\";
    ms - TooltipHost;
    tooltipHost - 243;
    "> <div class=\\";
    suggestionIconWrapper - 236;
    "><div><span class=\\";
    offScreen - 219;
    ">Site page result: </span><i data-icon-name=\\";
    spo24_svg;
    " aria-hidden=\\";
    true;
    " class=\\";
    suggestionIcon - 245;
    "><img src=\\";
    https: //spoprod-a.akamaihd.net/files/fabric/assets/item-types/24/spo.svg?v6\\"></i></div> </div><div class=\\"noWrap-230\\"><h3 class=\\"noWrap-234\\" data-tooltip=\\"true\\"><span class=\\"\\"><span>Prediction</span></span><span class=\\"offScreen-219\\">,</span></h3> <dl class=\\"noWrap-233\\" role=\\"list\\"> <dd class=\\"noWrap-231\\" role=\\"listitem\\"><span><span>S365</span></span></dd></dl> </div></div></div></li>\"
     dropdown.innerHTML = addedHtml;
});
/** A Custom Action which can be run during execution of a Client Side Application */
var SuggestionApplicationCustomizer = /** @class */ (function (_super) {
    __extends(SuggestionApplicationCustomizer, _super);
    function SuggestionApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionApplicationCustomizer.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("test 2.5\");
                //Dialog.alert(`Hello test`);
                , 
                //Dialog.alert(`Hello test`);
                sp_1.sp.setup({
                    sp: {
                        baseUrl: , "https://engie.sharepoint.com/sites/S365Pro/\",: fetchClientFactory
                    }()
                }, {
                    "return": new common_1.SPFxAdalClient(this.context)
                }, headers, {
                    "Accept\": \"application/json;odata=verbose\",: ,
                    "X-Something\": \"header-value\",: 
                }));
                return [2 /*return*/];
            });
        });
    };
    return SuggestionApplicationCustomizer;
}(sp_application_base_1.BaseApplicationCustomizer));
exports["default"] = SuggestionApplicationCustomizer;
;
var test1 = [];
yield sp_1.sp.web.lists.getById("aed5eafc-ae52-415c-af2d-100ba3f5f9bd\").items.get().then((items :any[])=>{, console.log(items));
for (var i = 0; i < items.length; i++) {
    test1.push(items[i][], "Title\"]););
}
;
console.log(test1);
console.log("new version 2.2\");, trie = new module_1.Trie(test1));
// console.log(trie.getPrefix(\"I\")); // <= [\"john\",\"jeb\"]
//element.onchange = (e: React.FormEvent<HTMLInputElement>) => {​​​​​​​const newValue = e.currentTarget.value;}
sp_core_library_1.Log.info(LOG_SOURCE, "Initialized " + strings.Title);
var message = this.properties.testMessage;
if (!message) {
    message = '(No properties were provided.)';
}
sp_dialog_1.Dialog.alert("Hello Halim from " + strings.Title + ":\n\n" + message);
return Promise.resolve();
prediction();
{
    console.log('testHalim');
}
