(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 9208:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(5128);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 5128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6400);


function Home() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (async ()=>{
            await snarkyjs__WEBPACK_IMPORTED_MODULE_1__/* .isReady */ .DK;
            const { Add  } = await __webpack_require__.e(/* import() */ 336).then(__webpack_require__.bind(__webpack_require__, 9336));
            // Update this to use the address (public key) for your zkApp account
            // To try it out, you can try this address for an example "Add" smart contract that we've deployed to 
            // Berkeley Testnet B62qqkb7hD1We6gEfrcqosKt9C398VLp1WXeTo1i9boPoqF7B1LxHg4
            const zkAppAddress = "B62qmxyrYV1eYAShMKsWXqWth6mKwet6K1CcSrJsFvmtR3yS9rHNFdq";
            // This should be removed once the zkAppAddress is updated.
            if (!zkAppAddress) {
                console.error('The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qqkb7hD1We6gEfrcqosKt9C398VLp1WXeTo1i9boPoqF7B1LxHg4');
            }
            const zkAppInstance = new Add(snarkyjs__WEBPACK_IMPORTED_MODULE_1__/* .PublicKey.fromBase58 */ .nh.fromBase58(zkAppAddress));
        })();
    }, []);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,888,179], function() { return __webpack_exec__(9208); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);