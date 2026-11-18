# Historical build diff — part 007

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 22

<details>
<summary><code>bundles/bloxd.io/chunks/js/191.js</code> · modified · +4 / -4</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +4 / -4</summary>

```diff
@@ -1,18 +1,18 @@
 export const ⟦2-char-id⟧ = 191;
 export const ids = [191];
 export const modules = {
-  40268: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40268: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       default: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35402),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35308),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧);
 
     function ⟦2-char-id⟧() {
-      return ⟦2-char-id⟧()('(()=>{var ⟦2-char-id⟧={11:(⟦2-char-id⟧,cJ,⟦2-char-id⟧)=>{⟦2-char-id⟧.exports=⟦2-char-id⟧.p+"static/media/bloxd_wasm_bg.d6cb02368a1f50c0df7d.wasm"},13:(⟦2-char-id⟧,cJ,⟦2-char-id⟧)=>{⟦2-char-id⟧.exports=⟦2-char-id⟧.p+"static/media/bloxd_wasm_textures_bg.91449dd66a7e88721c00.wasm"}},⟦2-char-id⟧={};function ⟦2-char-id⟧(⟦2-char-id⟧){var ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(void 0!==⟦2-char-id⟧)return ⟦2-char-id⟧.exports;var ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧]={exports:{}};return ⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧,⟦2-char-id⟧.exports,⟦2-char-id⟧),⟦2-char-id⟧.exports}⟦2-char-id⟧.m=⟦2-char-id⟧,⟦2-char-id⟧.d=(⟦2-char-id⟧,⟦2-char-id⟧)=>{for(var ⟦2-char-id⟧ in ⟦2-char-id⟧)⟦2-char-id⟧.o(⟦2-char-id⟧,⟦2-char-id⟧)&&!⟦2-char-id⟧.o(⟦2-char-id⟧,⟦2-char-id⟧)&&Object.defineProperty(⟦2-char-id⟧,⟦2-char-id⟧,{enumerable:!0,get:⟦2-char-id⟧[⟦2-char-id⟧]})},⟦2-char-id⟧.f={},⟦2-char-id⟧.e=⟦2-char-id⟧=>Promise.all(Object.keys(⟦2-char-id⟧.f).reduce(((⟦2-char-id⟧,⟦2-char-id⟧)=>(⟦2-char-id⟧.f[⟦2-char-id⟧](⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧)),[])),⟦2-char-id⟧.u=⟦2-char-id⟧=>"static/js/symm5.wasmZstdDecoder.6a400432.chunk.worker.js",⟦2-char-id⟧.o=(⟦2-char-id⟧,⟦2-char-id⟧)=>Object.prototype.hasOwnProperty.call(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧.r=⟦2-char-id⟧=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(⟦2-char-id⟧,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(⟦2-char-id⟧,"__esModule",{value:!0})},⟦2-char-id⟧.U=function(⟦2-char-id⟧){var ⟦2-char-id⟧=new URL(⟦2-char-id⟧,"x:/"),⟦2-char-id⟧={};for(var ⟦2-char-id⟧ in ⟦2-char-id⟧)⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧[⟦2-char-id⟧];for(var ⟦2-char-id⟧ in ⟦2-char-id⟧.href=⟦2-char-id⟧,⟦2-char-id⟧.pathname=⟦2-char-id⟧.replace(/[?#].*/,""),⟦2-char-id⟧.origin=⟦2-char-id⟧.protocol="",⟦2-char-id⟧.toString=⟦2-char-id⟧.toJSON=()=>⟦2-char-id⟧,⟦2-char-id⟧)Object.defineProperty(this,⟦2-char-id⟧,{enumerable:!0,configurable:!0,value:⟦2-char-id⟧[⟦2-char-id⟧]})},⟦2-char-id⟧.U.prototype=URL.prototype,⟦2-char-id⟧.p="/",(()=>{var ⟦2-char-id⟧={0:1};⟦2-char-id⟧.f.i=(⟦2-char-id⟧,⟦2-char-id⟧)=>{⟦2-char-id⟧[⟦2-char-id⟧]||importScripts(⟦2-char-id⟧.p+⟦2-char-id⟧.u(⟦2-char-id⟧))};var ⟦2-char-id⟧=self.webpackChunk_bloxd_web=self.webpackChunk_bloxd_web||[],⟦2-char-id⟧=⟦2-char-id⟧.push.bind(⟦2-char-id⟧);⟦2-char-id⟧.push=⟦2-char-id⟧=>{var ⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧=⟦2-char-id⟧[2];for(var ⟦2-char-id⟧ in ⟦2-char-id⟧)⟦2-char-id⟧.o(⟦2-char-id⟧,⟦2-char-id⟧)&&(⟦2-char-id⟧.m[⟦2-char-id⟧]=⟦2-char-id⟧[⟦2-char-id⟧]);for(⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧);⟦2-char-id⟧.length;)⟦2-char-id⟧[⟦2-char-id⟧.pop()]=1;⟦2-char-id⟧(⟦2-char-id⟧)}})();var ⟦2-char-id⟧={};⟦2-char-id⟧.r(⟦2-char-id⟧),⟦2-char-id⟧.d(⟦2-char-id⟧,{WY:()=>⟦2-char-id⟧,EnvelopeKind:()=>⟦2-char-id⟧,gY:()=>⟦2-char-id⟧,PhysicsEngine:()=>⟦2-char-id⟧,HY:()=>⟦2-char-id⟧,PY:()=>⟦2-char-id⟧,kY:()=>⟦2-char-id⟧,pY:()=>⟦2-char-id⟧,dY:()=>⟦2-char-id⟧,zY:()=>⟦2-char-id⟧,NY:()=>⟦2-char-id⟧,OY:()=>⟦2-char-id⟧,TY:()=>⟦2-char-id⟧,CY:()=>⟦2-char-id⟧,default:()=>⟦2-char-id⟧,initSync:()=>⟦2-char-id⟧,uY:()=>⟦2-char-id⟧,iY:()=>⟦2-char-id⟧,RY:()=>⟦2-char-id⟧,LY:()=>⟦2-char-id⟧,aY:()=>⟦2-char-id⟧,BY:()=>⟦2-char-id⟧,tY:()=>⟦2-char-id⟧,oY:()=>⟦2-char-id⟧,lY:()=>⟦2-char-id⟧,Jh:()=>⟦2-char-id⟧,Zh:()=>⟦2-char-id⟧,Fh:()=>⟦2-char-id⟧,Uh:()=>⟦2-char-id⟧,eh:()=>⟦2-char-id⟧,Xh:()=>⟦2-char-id⟧});var ⟦2-char-id⟧={};⟦2-char-id⟧.r(⟦2-char-id⟧),⟦2-char-id⟧.d(⟦2-char-id⟧,{BloxdWasmFetchError:()=>⟦2-char-id⟧,BloxdWasmHttpError:()=>⟦2-char-id⟧,BloxdWasmIntegrityError:()=>⟦2-char-id⟧,BloxdWasmTimeoutError:()=>⟦2-char-id⟧,PROMISE_HOOK_CODES:()=>⟦2-char-id⟧,RETRY_DELAYS_MS:()=>⟦2-char-id⟧,STALL_TIMEOUT_MS:()=>⟦2-char-id⟧,WASM_HOOKS_ENFORCED:()=>⟦2-char-id⟧,WasmBufferView:()=>⟦2-char-id⟧,bloxdTextureWasmUrl:()=>⟦2-char-id⟧,bloxdWasmCore:()=>⟦2-char-id⟧,bloxdWasmDownloadHref:()=>⟦2-char-id⟧,compileBloxdTextureWasm:()=>⟦2-char-id⟧,compileBloxdWasmBrowser:()=>⟦2-char-id⟧,describeBloxdWasmFailure:()=>⟦2-char-id⟧,fetchBytes:()=>⟦2-char-id⟧,getBloxdWasm:()=>⟦2-char-id⟧,getBloxdWasmBuild:()=>⟦2-char-id⟧,getBloxdWasmFailureReason:()=>⟦2-char-id⟧,getBloxdWasmFailureStage:()=>⟦2-char-id⟧,getBloxdWasmFailureStatus:()=>⟦2-char-id⟧,getBloxdWasmMemory:()=>⟦2-char-id⟧,getBloxdWasmModule:()=>⟦2-char-id⟧,getBloxdWasmStatus:()=>⟦2-char-id⟧,getBloxdWasmTamper:()=>⟦2-char-id⟧,getLastBloxdWasmPanic:()=>⟦2-char-id⟧,initBloxdWasmBrowser:()=>⟦2-char-id⟧,initBloxdWasmFromModule:()=>⟦2-char-id⟧,isBloxdWasmDownloadFailureRetryable:()=>⟦2-char-id⟧,isBloxdWasmLoadUnstreamed:()=>⟦2-char-id⟧,isBloxdWasmReady:()=>⟦2-char-id⟧,isEnforceableWasmReport:()=>⟦2-char-id⟧,isPromiseHookReport:()=>⟦2-char-id⟧,isPunishedWasmReport:()=>⟦2-char-id⟧,isRendererWasmReport:()=>⟦2-char-id⟧,isWeightedWasmReport:()=>⟦2-char-id⟧,loadBloxdWasmBrowser:()=>⟦2-char-id⟧,markBloxdWasmFailed:()=>⟦2-char-id⟧,onBloxdWasmFailed:()=>⟦2-char-id⟧,onBloxdWasmMemoryGrown:()=>⟦2-char-id⟧,takeBloxdWasmRefusedAllocation:()=>⟦2-char-id⟧,textureLoadFailure:()=>⟦2-char-id⟧,wasmMemoryControl:()=>⟦2-char-id⟧,wasmView:()=>⟦2-char-id⟧,watchBloxdRenderer:()=>⟦2-char-id⟧});class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.b8CL(⟦2-char-id⟧,0)}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.Akzp(this.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.skNI(this.__wbg_ptr)>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.Raxv();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(){return ⟦2-char-id⟧.RTqK(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.dDSE(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.bDgb(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);const ⟦2-char-id⟧=Object.freeze({Js:0,0:"Js",Error:1,1:"Error",LeaveRoom:2,2:"LeaveRoom",RoomState:3,3:"RoomState",RoomStatePatch:4,4:"RoomStatePatch",RoomDataNone:5,5:"RoomDataNone",RoomDataBin:6,6:"RoomDataBin",RoomDataBytes:7,7:"RoomDataBytes",Ignored:8,8:"Ignored",StringType:16,16:"StringType"});class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.BFf0(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.g2v6(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.sS0S(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(){⟦2-char-id⟧.pvEy(this.__wbg_ptr)}static ⟦2-char-id⟧(){return ⟦2-char-id⟧.id8F()>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.K0Un(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.adq0(this.__wbg_ptr);return 0===⟦2-char-id⟧[0]?void 0:⟦2-char-id⟧[1]}⟦2-char-id⟧(){return ⟦2-char-id⟧.CUS4(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.qOQw(this.__wbg_ptr)>>>0}static ⟦2-char-id⟧(){return ⟦2-char-id⟧.VChA()>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.ZCYM();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(){return ⟦2-char-id⟧.IF5D(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.usr7(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.VzC9(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.Z3w0(this.__wbg_ptr,⟦2-char-id⟧)>>>0}reserve(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.ch8C(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.GU3m(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}text(){let ⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧.hq0T(this.__wbg_ptr);return ⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1])}finally{⟦2-char-id⟧.DGph(⟦2-char-id⟧,⟦2-char-id⟧,1)}}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.YuqN(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.kjAs(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.A4hV(this.__wbg_ptr);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.JH1T(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.uFOv(this.__wbg_ptr);var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],8*⟦2-char-id⟧[1],8),⟦2-char-id⟧}⟦2-char-id⟧(){return ⟦2-char-id⟧.rx80(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.wasp(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.IR9V(this.__wbg_ptr)>>>0}constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.eEuk(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return this.__wbg_ptr=⟦2-char-id⟧[0],⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.dpGv(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.culY(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.YTqn(this.__wbg_ptr)>>>0}resume(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.bwer(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.nuRc(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.ICVJ(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.fkZB(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.UF1t(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.fYNO(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.tHCS(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.qOUh(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧.RPmI(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{static __wrap(⟦2-char-id⟧){const ⟦2-char-id⟧=Object.create(⟦2-char-id⟧.prototype);return ⟦2-char-id⟧.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(⟦2-char-id⟧,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧),⟦2-char-id⟧}__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.jwdK(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.Yvcx(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.SP17(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.NT3H(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return 0!==⟦2-char-id⟧.zsw3(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){⟦2-char-id⟧.yoWg(this.__wbg_ptr)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.eQHQ(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[3])throw ⟦2-char-id⟧(⟦2-char-id⟧[2]);var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],1*⟦2-char-id⟧[1],1),⟦2-char-id⟧}evict(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.S8rl(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(){⟦2-char-id⟧.cTES(this.__wbg_ptr)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧.pu5E(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.kf9O(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.Ews0(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.R4sb(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧.FygS(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧.NLeB(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.mJTC(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.z2kH(this.__wbg_ptr)>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.c5x5();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}static ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.LPzD();return ⟦2-char-id⟧.__wrap(⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.i46m(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.oF1X(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.m6fX(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.fTXD(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.FF1y(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧.q0uT(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧.fuc6(this.__wbg_ptr,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.EPYr(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.hlCq(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.g8Qo(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.HgkB(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.apUo(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}steer(){return ⟦2-char-id⟧.gKOs(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.t4CX(this.__wbg_ptr);var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],8*⟦2-char-id⟧[1],8),⟦2-char-id⟧}⟦2-char-id⟧(){return ⟦2-char-id⟧.Bsut(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.X1J8(this.__wbg_ptr);var ⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧=(⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧>>>=0,(null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Int32Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧).subarray(⟦2-char-id⟧/4,⟦2-char-id⟧/4+⟦2-char-id⟧)).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.l0uB(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.AXwt(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.Em3O(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.oFFP(this.__wbg_ptr)>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.nKNa();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}run(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.bzlb(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.Nl7G(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.ky3r(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.KhUs(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;return ⟦2-char-id⟧.DOyv(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.yIJU(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.Dudg(this.__wbg_ptr,⟦2-char-id⟧)>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.wHbP();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}scan(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.RkqI(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.Q5gd(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.Htj6(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.xNtC(this.__wbg_ptr)>>>0}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.yfQg(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.zfGv(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}compute(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)?0:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW,⟦2-char-id⟧.sxx3),⟦2-char-id⟧=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧.GAxm(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧)?Number.MAX_SAFE_INTEGER:⟦2-char-id⟧|0,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW,⟦2-char-id⟧.sxx3),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.EgOq(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.h3X9(this.__wbg_ptr)}⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.czEk(this.__wbg_ptr,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.lsui(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.PSZs(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.mej4(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.swam(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.KU0w(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.ZkED(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.aZMd(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.lXAR(this.__wbg_ptr)>>>0}mesh(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.fg4O(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)?0:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)?0:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.ykzU(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return this.__wbg_ptr=⟦2-char-id⟧[0],⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.v9aH(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[3])throw ⟦2-char-id⟧(⟦2-char-id⟧[2]);var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],1*⟦2-char-id⟧[1],1),⟦2-char-id⟧}⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧.mYGY(this.__wbg_ptr,⟦2-char-id⟧(⟦2-char-id⟧)?16777215:⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.eCL0(this.__wbg_ptr,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.tGVN(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.fWou(this.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return 0!==⟦2-char-id⟧[0]}⟦2-char-id⟧(){return ⟦2-char-id⟧.bOXy(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.dJOv(this.__wbg_ptr)>>>0}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.jVsj(⟦2-char-id⟧,0)}compute(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)?0:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW,⟦2-char-id⟧.sxx3),⟦2-char-id⟧=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧.VaoS(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧)?Number.MAX_SAFE_INTEGER:⟦2-char-id⟧|0,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW,⟦2-char-id⟧.sxx3),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.Q2fa(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.IpQ1(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.O4iq(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.nM5M(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.ZQQC(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return this.__wbg_ptr=⟦2-char-id⟧[0],⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(){return ⟦2-char-id⟧.Ypzg(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.QPOF(this.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return 0!==⟦2-char-id⟧[0]}⟦2-char-id⟧(){return ⟦2-char-id⟧.ObTi(this.__wbg_ptr)>>>0}}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.lOAp();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW,⟦2-char-id⟧.sxx3),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.bqU9(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1])}finally{⟦2-char-id⟧.DGph(⟦2-char-id⟧,⟦2-char-id⟧,1)}}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.ER1z();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){return 0!==⟦2-char-id⟧.f75l(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.P3EW,⟦2-char-id⟧.sxx3),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.gNX0(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}function ⟦2-char-id⟧(){⟦2-char-id⟧.xXmN()}function ⟦2-char-id⟧(){return ⟦2-char-id⟧.YvdD()>>>0}function ⟦2-char-id⟧(⟦2-char-id⟧){return 0!==⟦2-char-id⟧.vplG(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){return 0!==⟦2-char-id⟧.zq4M(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧.TDbF(⟦2-char-id⟧)}function ⟦2-char-id⟧(){return ⟦2-char-id⟧.qOOL()>>>0}function ⟦2-char-id⟧(){return ⟦2-char-id⟧.XLay()>>>0}function ⟦2-char-id⟧(){return 0!==⟦2-char-id⟧.OYbv()}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.bCNv();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.bZva();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.U82G();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.DGph(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(){return ⟦2-char-id⟧.bkO9()>>>0}function ⟦2-char-id⟧(){⟦2-char-id⟧.p1SM()}function ⟦2-char-id⟧(){let ⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧.dJkk();return ⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1])}finally{⟦2-char-id⟧.DGph(⟦2-char-id⟧,⟦2-char-id⟧,1)}}function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧.Coif(⟦2-char-id⟧(⟦2-char-id⟧))}function ⟦2-char-id⟧(){return{__proto__:null,QRHq:{__proto__:null,btiL:function(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧(Error(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)))},pQjc:function(⟦2-char-id⟧,⟦2-char-id⟧){throw new Error(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧))},hVOW:function(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧).call()},R2m4:function(⟦2-char-id⟧,⟦2-char-id⟧){console.error(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧))},iL7n:function(){return performance.now()},EiBK:function(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧)}}}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);const ⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.b8CL(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.BFf0(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.YuqN(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.jwdK(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.l0uB(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.KhUs(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.yfQg(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.jVsj(⟦2-char-id⟧,1)));function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧===⟦2-char-id⟧.length&&⟦2-char-id⟧.push(⟦2-char-id⟧.length+1);const ⟦2-char-id⟧=⟦2-char-id⟧;return ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){if(!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧))throw new Error(`expected instance of ${cJ.name}`)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧>>>=0,⟦2-char-id⟧().subarray(⟦2-char-id⟧/8,⟦2-char-id⟧/8+⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧>>>=0,⟦2-char-id⟧().subarray(⟦2-char-id⟧/4,⟦2-char-id⟧/4+⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧>>>=0,⟦2-char-id⟧().subarray(⟦2-char-id⟧/1,⟦2-char-id⟧/1+⟦2-char-id⟧)}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(){return null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Float64Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return function(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧+=⟦2-char-id⟧,⟦2-char-id⟧>=⟦2-char-id⟧&&(⟦2-char-id⟧=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),⟦2-char-id⟧.decode(),⟦2-char-id⟧=⟦2-char-id⟧);return ⟦2-char-id⟧.decode(⟦2-char-id⟧().subarray(⟦2-char-id⟧,⟦2-char-id⟧+⟦2-char-id⟧))}(⟦2-char-id⟧>>>0,⟦2-char-id⟧)}let ⟦2-char-id⟧=null;let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(){return null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Uint32Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(){return null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧[⟦2-char-id⟧]}let ⟦2-char-id⟧=new Array(1024).fill(void 0);⟦2-char-id⟧.push(void 0,null,!0,!1);let ⟦2-char-id⟧=⟦2-char-id⟧.length;function ⟦2-char-id⟧(⟦2-char-id⟧){return void 0===⟦2-char-id⟧||null===⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(2*⟦2-char-id⟧.length,2)>>>0;return(null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Uint16Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧).set(⟦2-char-id⟧,⟦2-char-id⟧/2),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(4*⟦2-char-id⟧.length,4)>>>0;return ⟦2-char-id⟧().set(⟦2-char-id⟧,⟦2-char-id⟧/4),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(1*⟦2-char-id⟧.length,1)>>>0;return ⟦2-char-id⟧().set(⟦2-char-id⟧,⟦2-char-id⟧/1),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(8*⟦2-char-id⟧.length,8)>>>0;return ⟦2-char-id⟧().set(⟦2-char-id⟧,⟦2-char-id⟧/8),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(void 0===⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.encode(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧.length,1)>>>0;return ⟦2-char-id⟧().subarray(⟦2-char-id⟧,⟦2-char-id⟧+⟦2-char-id⟧.length).set(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}let ⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,1)>>>0;const ⟦2-char-id⟧=⟦2-char-id⟧();let ⟦2-char-id⟧=0;for(;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧);if(⟦2-char-id⟧>127)break;⟦2-char-id⟧[⟦2-char-id⟧+⟦2-char-id⟧]=⟦2-char-id⟧}if(⟦2-char-id⟧!==⟦2-char-id⟧){0!==⟦2-char-id⟧&&(⟦2-char-id⟧=⟦2-char-id⟧.slice(⟦2-char-id⟧)),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧+3*⟦2-char-id⟧.length,1)>>>0;const ⟦2-char-id⟧=⟦2-char-id⟧().subarray(⟦2-char-id⟧+⟦2-char-id⟧,⟦2-char-id⟧+⟦2-char-id⟧);⟦2-char-id⟧+=⟦2-char-id⟧.encodeInto(⟦2-char-id⟧,⟦2-char-id⟧).written,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,1)>>>0}return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧);return function(⟦2-char-id⟧){⟦2-char-id⟧<1028||(⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧)}(⟦2-char-id⟧),⟦2-char-id⟧}let ⟦2-char-id⟧=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});⟦2-char-id⟧.decode();const ⟦2-char-id⟧=2146435072;let ⟦2-char-id⟧=0;const ⟦2-char-id⟧=new TextEncoder;"encodeInto"in ⟦2-char-id⟧||(⟦2-char-id⟧.encodeInto=function(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.encode(⟦2-char-id⟧);return ⟦2-char-id⟧.set(⟦2-char-id⟧),{read:⟦2-char-id⟧.length,written:⟦2-char-id⟧.length}});let ⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧=0;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.exports,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧.mSYH(),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){if(void 0!==⟦2-char-id⟧)return ⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&(Object.getPrototypeOf(⟦2-char-id⟧)===Object.prototype?({module:⟦2-char-id⟧}=⟦2-char-id⟧):console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const ⟦2-char-id⟧=⟦2-char-id⟧();⟦2-char-id⟧ instanceof WebAssembly.Module||(⟦2-char-id⟧=new WebAssembly.Module(⟦2-char-id⟧));return ⟦2-char-id⟧(new WebAssembly.Instance(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧)}async function ⟦2-char-id⟧(⟦2-char-id⟧){if(void 0!==⟦2-char-id⟧)return ⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&(Object.getPrototypeOf(⟦2-char-id⟧)===Object.prototype?({module_or_path:⟦2-char-id⟧}=⟦2-char-id⟧):console.warn("using deprecated parameters for the initialization function; pass a single object instead"));const ⟦2-char-id⟧=⟦2-char-id⟧();("string"===typeof ⟦2-char-id⟧||"function"===typeof Request&&⟦2-char-id⟧ instanceof Request||"function"===typeof URL&&⟦2-char-id⟧ instanceof URL)&&(⟦2-char-id⟧=fetch(⟦2-char-id⟧));const{instance:⟦2-char-id⟧,module:⟦2-char-id⟧}=await async function(⟦2-char-id⟧,⟦2-char-id⟧){if("function"===typeof Response&&⟦2-char-id⟧ instanceof Response){if(!⟦2-char-id⟧.ok)throw new Error(`failed to fetch Wasm: ${JJ.status} ${JJ.statusText} fetching \'${JJ.url}\'`);if("function"===typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(⟦2-char-id⟧,⟦2-char-id⟧)}catch(⟦2-char-id⟧){if(!function(⟦2-char-id⟧){switch(⟦2-char-id⟧){case"basic":case"cors":case"default":return!0}return!1}(⟦2-char-id⟧.type)||"application/wasm"===⟦2-char-id⟧.headers.get("Content-Type"))throw ⟦2-char-id⟧;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n",⟦2-char-id⟧)}const ⟦2-char-id⟧=await ⟦2-char-id⟧.arrayBuffer();return await WebAssembly.instantiate(⟦2-char-id⟧,⟦2-char-id⟧)}{const ⟦2-char-id⟧=await WebAssembly.instantiate(⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧ instanceof WebAssembly.Instance?{instance:⟦2-char-id⟧,module:⟦2-char-id⟧}:⟦2-char-id⟧}}(await ⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)}const ⟦2-char-id⟧=Reflect.apply,⟦2-char-id⟧=Object.getOwnPropertyDescriptor,⟦2-char-id⟧=Object.getPrototypeOf,⟦2-char-id⟧=Promise,⟦2-char-id⟧=Object.getPrototypeOf((async()=>{})()).then;function ⟦2-char-id⟧(⟦2-char-id⟧){return new ⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧;try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧,⟦2-char-id⟧]),⟦2-char-id⟧=!0}catch{⟦2-char-id⟧=!1}⟦2-char-id⟧||⟦2-char-id⟧.then(⟦2-char-id⟧,⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧?.get?⟦2-char-id⟧(⟦2-char-id⟧.get,⟦2-char-id⟧,[]):⟦2-char-id⟧?.value}const ⟦2-char-id⟧="undefined"===typeof WebAssembly?void 0:WebAssembly.Module.prototype,⟦2-char-id⟧="undefined"===typeof WebAssembly?void 0:WebAssembly.Instance.prototype,⟦2-char-id⟧=[["to",Object.prototype,"then",!0],["ta",ArrayBuffer.prototype,"then",!0],["tm",⟦2-char-id⟧,"then",!0],["ti",⟦2-char-id⟧,"then",!0],["pt",Promise.prototype,"then",!1],["pk",Promise.prototype,"constructor",!1],["pg",globalThis,"Promise",!1],["pr",Promise,"race",!1],["pa",Promise,"all",!1]],⟦2-char-id⟧=⟦2-char-id⟧.map((⟦2-char-id⟧=>{let[,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧]=⟦2-char-id⟧;if(void 0!==⟦2-char-id⟧)return ⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧):⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)})),⟦2-char-id⟧=⟦2-char-id⟧.map((⟦2-char-id⟧=>{let[⟦2-char-id⟧]=⟦2-char-id⟧;return`wh:${cJ}`}));function ⟦2-char-id⟧(){for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++){const[⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧]=⟦2-char-id⟧[⟦2-char-id⟧];let ⟦2-char-id⟧;try{⟦2-char-id⟧=void 0===⟦2-char-id⟧||(⟦2-char-id⟧?void 0===⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)&&⟦2-char-id⟧(⟦2-char-id⟧)===⟦2-char-id⟧[⟦2-char-id⟧]:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)===⟦2-char-id⟧[⟦2-char-id⟧])}catch{⟦2-char-id⟧=!1}if(!⟦2-char-id⟧)return`wh:${cJ}`}return null}let ⟦2-char-id⟧=null;class ⟦2-char-id⟧ extends Error{retryable;constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){super(⟦2-char-id⟧,⟦2-char-id⟧),this.retryable=⟦2-char-id⟧}}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{status;constructor(⟦2-char-id⟧,⟦2-char-id⟧){super(⟦2-char-id⟧,⟦2-char-id⟧>=500),this.status=⟦2-char-id⟧}}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{}class ⟦2-char-id⟧ extends Error{}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧?"integrity":⟦2-char-id⟧ instanceof ⟦2-char-id⟧?"timeout":⟦2-char-id⟧ instanceof ⟦2-char-id⟧?"fetch":"compile"}const ⟦2-char-id⟧=15⟦2-char-id⟧,⟦2-char-id⟧=[1⟦2-char-id⟧,3⟦2-char-id⟧],⟦2-char-id⟧=globalThis.crypto?.subtle,⟦2-char-id⟧=⟦2-char-id⟧?.digest,⟦2-char-id⟧=!0===globalThis.isSecureContext,⟦2-char-id⟧=Reflect.apply,⟦2-char-id⟧=Object.defineProperty,⟦2-char-id⟧="undefined"===typeof Response?void 0:Response.prototype.arrayBuffer,⟦2-char-id⟧=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,⟦2-char-id⟧="undefined"===typeof Response?void 0:Response.prototype.clone,⟦2-char-id⟧="undefined"===typeof Response?void 0:Object.getOwnPropertyDescriptor(Response.prototype,"body")?.get,⟦2-char-id⟧="undefined"===typeof Response?void 0:Object.getOwnPropertyDescriptor(Response.prototype,"type")?.get,⟦2-char-id⟧="undefined"===typeof ReadableStream?void 0:ReadableStream.prototype.getReader,⟦2-char-id⟧="undefined"===typeof ReadableStreamDefaultReader?void 0:ReadableStreamDefaultReader.prototype.read,⟦2-char-id⟧=Uint8Array.prototype.set,⟦2-char-id⟧=Uint8Array,⟦2-char-id⟧="undefined"===typeof fetch?void 0:fetch,⟦2-char-id⟧="undefined"===typeof WebAssembly?void 0:WebAssembly,⟦2-char-id⟧=⟦2-char-id⟧?.compile,⟦2-char-id⟧=⟦2-char-id⟧?.compileStreaming,⟦2-char-id⟧=Array.from({length:256},((⟦2-char-id⟧,⟦2-char-id⟧)=>⟦2-char-id⟧.toString(16).padStart(2,"0"))),⟦2-char-id⟧=new Set;function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.has(⟦2-char-id⟧.href)}async function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧??=⟦2-char-id⟧(),!⟦2-char-id⟧&&!⟦2-char-id⟧)return;let ⟦2-char-id⟧="";try{const ⟦2-char-id⟧=await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,["SHA-256",⟦2-char-id⟧]),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧);for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧+=⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]]}catch{}if(⟦2-char-id⟧!==⟦2-char-id⟧.sha256)throw ⟦2-char-id⟧&&⟦2-char-id⟧.onMismatch(),new ⟦2-char-id⟧(⟦2-char-id⟧?`${JJ} is not the module this build ships`:`${JJ} could not be hashed`)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){let{hideThen:⟦2-char-id⟧=!1,priority:⟦2-char-id⟧}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const ⟦2-char-id⟧={useLoadedFetch:!1};return ⟦2-char-id⟧((()=>⟦2-char-id⟧(⟦2-char-id⟧.href,((⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)=>async function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=void 0===⟦2-char-id⟧?{signal:⟦2-char-id⟧}:{signal:⟦2-char-id⟧,priority:⟦2-char-id⟧};⟦2-char-id⟧=await(⟦2-char-id⟧.useLoadedFetch&&⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,globalThis,[⟦2-char-id⟧,⟦2-char-id⟧]):fetch(⟦2-char-id⟧,⟦2-char-id⟧))}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Fetching ${JJ} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}try{⟦2-char-id⟧=⟦2-char-id⟧.ok,⟦2-char-id⟧=⟦2-char-id⟧.status,⟦2-char-id⟧=⟦2-char-id⟧.headers.get("Content-Type")}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧.useLoadedFetch=!0,⟦2-char-id⟧(`Reading ${JJ}\'s response failed`,⟦2-char-id⟧,⟦2-char-id⟧)}if(!⟦2-char-id⟧)throw new ⟦2-char-id⟧(`Fetching ${JJ} failed: HTTP ${YJ}`,⟦2-char-id⟧);⟦2-char-id⟧();const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧=null!==⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧&&void 0!==⟦2-char-id⟧&&function(⟦2-char-id⟧){return void 0!==⟦2-char-id⟧&&"default"===⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])}(⟦2-char-id⟧),⟦2-char-id⟧="application/wasm"===⟦2-char-id⟧?.trim().toLowerCase(),⟦2-char-id⟧=⟦2-char-id⟧&&!⟦2-char-id⟧&&⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧&&(!⟦2-char-id⟧||function(⟦2-char-id⟧){try{return ⟦2-char-id⟧(⟦2-char-id⟧),!0}catch{return!1}}(⟦2-char-id⟧)),⟦2-char-id⟧=⟦2-char-id⟧??function(⟦2-char-id⟧){try{const ⟦2-char-id⟧=⟦2-char-id⟧.clone();return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),⟦2-char-id⟧}catch{return null}}(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧&&void 0!==⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧),!0)):null;⟦2-char-id⟧?function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]):⟦2-char-id⟧.body;if(!⟦2-char-id⟧)return void ⟦2-char-id⟧();const ⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]):⟦2-char-id⟧.getReader(),⟦2-char-id⟧=()=>{⟦2-char-id⟧(⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]):⟦2-char-id⟧.read(),(⟦2-char-id⟧=>{⟦2-char-id⟧.done?⟦2-char-id⟧():(⟦2-char-id⟧(),⟦2-char-id⟧())}),⟦2-char-id⟧)};⟦2-char-id⟧()}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧):⟦2-char-id⟧();if(!⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧&&⟦2-char-id⟧;let ⟦2-char-id⟧;⟦2-char-id⟧?console.warn(`${JJ} came in a constructed Response, not a fetched one, so it compiles without streaming`):⟦2-char-id⟧?console.warn(`${JJ} came in a Response that takes no own properties, so it compiles without streaming`):⟦2-char-id⟧&&console.warn(`${JJ} was served as ${hJ}, not application/wasm, so it compiles without streaming`);try{⟦2-char-id⟧=function(⟦2-char-id⟧){const ⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]));return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[new ⟦2-char-id⟧(⟦2-char-id⟧)]),⟦2-char-id⟧}(await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧))}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧||(⟦2-char-id⟧.useLoadedFetch=!0),⟦2-char-id⟧(`Downloading ${JJ} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}const ⟦2-char-id⟧=await function(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}(⟦2-char-id⟧);return void 0!==⟦2-char-id⟧&&await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧&&⟦2-char-id⟧.add(⟦2-char-id⟧),⟦2-char-id⟧}let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧(⟦2-char-id⟧)}catch(⟦2-char-id⟧){if(⟦2-char-id⟧.aborted||⟦2-char-id⟧ instanceof TypeError)throw ⟦2-char-id⟧(`Downloading ${JJ} failed`,⟦2-char-id⟧,⟦2-char-id⟧);throw ⟦2-char-id⟧}if(⟦2-char-id⟧&&void 0!==⟦2-char-id⟧){let ⟦2-char-id⟧;try{⟦2-char-id⟧=new ⟦2-char-id⟧(await ⟦2-char-id⟧)}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Downloading ${JJ} failed: its copy for checking broke off`,⟦2-char-id⟧,⟦2-char-id⟧)}await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}return ⟦2-char-id⟧}(⟦2-char-id⟧.href,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)))))}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,"then",{__proto__:null,value:void 0}),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){let{spare:⟦2-char-id⟧=0,priority:⟦2-char-id⟧="auto"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const ⟦2-char-id⟧="string"===typeof ⟦2-char-id⟧?JJ:⟦2-char-id⟧.href;return ⟦2-char-id⟧((()=>⟦2-char-id⟧(⟦2-char-id⟧,((⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)=>async function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧;try{⟦2-char-id⟧=await fetch(⟦2-char-id⟧,{signal:⟦2-char-id⟧,priority:⟦2-char-id⟧})}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Fetching ${JJ} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}if(!⟦2-char-id⟧.ok)throw new ⟦2-char-id⟧(`Fetching ${JJ} failed: HTTP ${XJ.status}`,⟦2-char-id⟧.status);if(⟦2-char-id⟧(),null===⟦2-char-id⟧.body){let ⟦2-char-id⟧;⟦2-char-id⟧();try{⟦2-char-id⟧=await ⟦2-char-id⟧.arrayBuffer()}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Downloading ${JJ} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}const ⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧+⟦2-char-id⟧.byteLength);return ⟦2-char-id⟧.set(new Uint8Array(⟦2-char-id⟧),⟦2-char-id⟧),⟦2-char-id⟧}const ⟦2-char-id⟧=⟦2-char-id⟧.body.getReader(),⟦2-char-id⟧=[];for(;;){let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧.read()}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Downloading ${JJ} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}if(⟦2-char-id⟧.done)return ⟦2-char-id⟧(),⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);⟦2-char-id⟧.push(⟦2-char-id⟧.value),⟦2-char-id⟧()}}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)))))}async function ⟦2-char-id⟧(⟦2-char-id⟧){for(let ⟦2-char-id⟧=0;;⟦2-char-id⟧++)try{return await ⟦2-char-id⟧()}catch(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)||!⟦2-char-id⟧.retryable||void 0===⟦2-char-id⟧)throw ⟦2-char-id⟧;console.warn(`${cJ.message}, retrying in ${JJ/1e3} s`),await ⟦2-char-id⟧((⟦2-char-id⟧=>{setTimeout(⟦2-char-id⟧,⟦2-char-id⟧)}))}}async function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=new AbortController;let ⟦2-char-id⟧,⟦2-char-id⟧=()=>{};const ⟦2-char-id⟧=⟦2-char-id⟧(((⟦2-char-id⟧,⟦2-char-id⟧)=>{⟦2-char-id⟧=⟦2-char-id⟧})),⟦2-char-id⟧=()=>{clearTimeout(⟦2-char-id⟧),⟦2-char-id⟧=setTimeout((()=>{⟦2-char-id⟧(new ⟦2-char-id⟧(`Downloading ${JJ} stalled: nothing arrived for ${Lc/1e3} s`,!0)),⟦2-char-id⟧.abort()}),⟦2-char-id⟧)},⟦2-char-id⟧=()=>{clearTimeout(⟦2-char-id⟧)};⟦2-char-id⟧();try{return await(⟦2-char-id⟧=[⟦2-char-id⟧(⟦2-char-id⟧.signal,⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧],⟦2-char-id⟧(((⟦2-char-id⟧,⟦2-char-id⟧)=>{for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++)⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧,⟦2-char-id⟧)})))}finally{clearTimeout(⟦2-char-id⟧)}var ⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧&&⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]):⟦2-char-id⟧.arrayBuffer()}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,(()=>{}),(()=>{})),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}function ⟦2-char-id⟧(⟦2-char-id⟧){if(!⟦2-char-id⟧)return ⟦2-char-id⟧.clone();try{return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])}catch{return null}}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.aborted?cJ:new ⟦2-char-id⟧(`${JJ}: ${cJ instanceof Error?cJ.message:String(cJ)}`,!0,{cause:⟦2-char-id⟧})}function ⟦2-char-id⟧(⟦2-char-id⟧){let ⟦2-char-id⟧=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,⟦2-char-id⟧=⟦2-char-id⟧;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧+=⟦2-char-id⟧.length;const ⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧);let ⟦2-char-id⟧=⟦2-char-id⟧;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.set(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧+=⟦2-char-id⟧.length;return ⟦2-char-id⟧}let ⟦2-char-id⟧="unloaded",⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null;const ⟦2-char-id⟧=new Set,⟦2-char-id⟧=new Set;let ⟦2-char-id⟧=!1,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=!1,⟦2-char-id⟧=0;function ⟦2-char-id⟧(){return"ready"===⟦2-char-id⟧}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}const ⟦2-char-id⟧={fetch:"fetch_failed",timeout:"fetch_failed",integrity:"fetch_failed",compile:"compile_failed",instantiate:"instantiate_failed",call:"call_failed"};function ⟦2-char-id⟧(){return null===⟦2-char-id⟧?null:⟦2-char-id⟧[⟦2-char-id⟧]}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}function ⟦2-char-id⟧(){return null===⟦2-char-id⟧?"not failed":`${wZ}: ${(JJ=WZ)instanceof Error?`${⟦2-char-id⟧.name}: ${⟦2-char-id⟧.message}`:String(JJ)}`;var ⟦2-char-id⟧}function ⟦2-char-id⟧(){if(!⟦2-char-id⟧())throw new Error(`Bloxd wasm is not ready (${uZ()}): check isBloxdWasmReady() first`);return ⟦2-char-id⟧}function ⟦2-char-id⟧(){return ⟦2-char-id⟧()?zZ:null}function ⟦2-char-id⟧(){return ⟦2-char-id⟧()?gZ:null}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}function ⟦2-char-id⟧(){if(!⟦2-char-id⟧||0===⟦2-char-id⟧)return 0;const ⟦2-char-id⟧=new Uint32Array(⟦2-char-id⟧.buffer,⟦2-char-id⟧,1),⟦2-char-id⟧=⟦2-char-id⟧[0]??0;return ⟦2-char-id⟧[0]=0,⟦2-char-id⟧}function ⟦2-char-id⟧(){if(!⟦2-char-id⟧)throw new Error("Bloxd wasm has not been instantiated");return ⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){"failed"!==⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧,"call")}function ⟦2-char-id⟧(){return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧&&⟦2-char-id⟧.retryable}function ⟦2-char-id⟧(){return"unloaded"===⟦2-char-id⟧&&(⟦2-char-id⟧="loading",!0)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.memory;const{Fh:⟦2-char-id⟧}=⟦2-char-id⟧;⟦2-char-id⟧="function"===typeof ⟦2-char-id⟧?⟦2-char-id⟧():0,⟦2-char-id⟧="ready",function(){if(⟦2-char-id⟧)return;⟦2-char-id⟧=!0;const ⟦2-char-id⟧=console.error;console.error=function(){for(var ⟦2-char-id⟧=arguments.length,⟦2-char-id⟧=new Array(⟦2-char-id⟧),⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧]=arguments[⟦2-char-id⟧];const[⟦2-char-id⟧]=⟦2-char-id⟧;"string"===typeof ⟦2-char-id⟧&&⟦2-char-id⟧.startsWith("panicked at")&&(⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧()),⟦2-char-id⟧.apply(console,⟦2-char-id⟧)}}()}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧="failed",⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,console.error(`Bloxd wasm failed (${cJ}):`,⟦2-char-id⟧);const ⟦2-char-id⟧=[...PZ];⟦2-char-id⟧.clear();for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){try{⟦2-char-id⟧()}catch(⟦2-char-id⟧){console.error("A Bloxd wasm failure listener threw:",⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){return"failed"===⟦2-char-id⟧?(⟦2-char-id⟧(⟦2-char-id⟧),()=>{}):(⟦2-char-id⟧.add(⟦2-char-id⟧),()=>{⟦2-char-id⟧.delete(⟦2-char-id⟧)})}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧||(⟦2-char-id⟧(),⟦2-char-id⟧.Xh(⟦2-char-id⟧),⟦2-char-id⟧=!0),⟦2-char-id⟧.add(⟦2-char-id⟧),()=>{⟦2-char-id⟧.delete(⟦2-char-id⟧)}}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧().buffer;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)try{⟦2-char-id⟧(⟦2-char-id⟧)}catch(⟦2-char-id⟧){console.error("A Bloxd wasm memory growth listener threw:",⟦2-char-id⟧)}}const ⟦2-char-id⟧={bloxd_wasm:()=>"523d3e5949bf2a4753ef5ca2a73400ebb345835b7971369ead2f990b98be43ec",bloxd_wasm_client:()=>"d4cb36df94a07de19e42eeffa0530f0524c7d89d6cd225e6e3040a8fe33cb61f",bloxd_wasm_workers:()=>"b13b723c21ff4be0aa4bb62ce03a9989f6e3a955e9dbcbcab4ce4af24b202aca",bloxd_wasm_models:()=>"f6812c5c938dcbac86f88041ffced930fe9d08400f719159d23aa9e3370f1e40",bloxd_wasm_webgpu:()=>"e406b84c9505f7a02226339b21c94d9a9039f99b240ba6ea17b3503c03394d97",bloxd_wasm_webgl:()=>"31e54300aadfdf39d9adf46e78a03ba62332faca6c028e444167fa4ad879a305",bloxd_wasm_webgl1:()=>"eabb7ee7c8fbfb9be543faab1ff74311865cfd0aa56a6ee1f3f14d03e5ae7d24",bloxd_wasm_replay:()=>"4f3a9b06c75077dd5f30c00cad61978d804090ee39979df7a1cfbfc9252724da",bloxd_wasm_recorder:()=>"27d0a05e493ac60b3abbc822d35e07432c9fd8fda5fab082d13b04b57a84627e",bloxd_wasm_anim:()=>"df3ee160579d661f445b2f411e354890d481e89dda8265b662e7e3f787cf6236",bloxd_wasm_textures:()=>"1fc5f5b691e5b407d47f375467e6fd9d0f10cb030443922e1b8b25cd186e7173",bloxd_wasm_shader_pack:()=>"749cb76383a9de0896958e82b823c3a4f9479f89c71e25be0da5c1167b8eeea1"},⟦2-char-id⟧=Function.prototype.toString,⟦2-char-id⟧=RegExp.prototype.exec,⟦2-char-id⟧=Reflect.apply,⟦2-char-id⟧=Function.prototype.call,⟦2-char-id⟧=Function.prototype.apply,⟦2-char-id⟧=Function.prototype.bind,⟦2-char-id⟧=Object.defineProperty,⟦2-char-id⟧=Uint8Array;let ⟦2-char-id⟧,⟦2-char-id⟧;try{⟦2-char-id⟧=globalThis.crypto,⟦2-char-id⟧=void 0===⟦2-char-id⟧||null===⟦2-char-id⟧?void 0:⟦2-char-id⟧.getRandomValues}catch{}const ⟦2-char-id⟧="bloxdBindApply";let ⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,{__proto__:null,value:⟦2-char-id⟧,configurable:!0});try{⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧)}finally{delete ⟦2-char-id⟧[⟦2-char-id⟧]}}catch{}const ⟦2-char-id⟧=16,⟦2-char-id⟧=256,⟦2-char-id⟧=0,⟦2-char-id⟧=1,⟦2-char-id⟧=2,⟦2-char-id⟧=3;let ⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=0;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧===`function ${cJ}() { [native code] }`||⟦2-char-id⟧===`function ${cJ}() {\\n    [native code]\\n}`}const ⟦2-char-id⟧=0,⟦2-char-id⟧=1,⟦2-char-id⟧=2;let ⟦2-char-id⟧=⟦2-char-id⟧;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧===⟦2-char-id⟧&&⟦2-char-id⟧===⟦2-char-id⟧&&!function(){const ⟦2-char-id⟧=⟦2-char-id⟧;return ⟦2-char-id⟧>=⟦2-char-id⟧&&(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧]),⟦2-char-id⟧=0),⟦2-char-id⟧[⟦2-char-id⟧++]<256/⟦2-char-id⟧}())return function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧??0)}(...arguments);if(⟦2-char-id⟧===⟦2-char-id⟧||⟦2-char-id⟧===⟦2-char-id⟧)return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);let ⟦2-char-id⟧;⟦2-char-id⟧=⟦2-char-id⟧;try{⟦2-char-id⟧===⟦2-char-id⟧&&(⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=function(){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]);if(⟦2-char-id⟧(⟦2-char-id⟧,"apply"))return ⟦2-char-id⟧;if(null===⟦2-char-id⟧(⟦2-char-id⟧,/\\(\\.\\.\\.arguments\\)/,[⟦2-char-id⟧])&&null===⟦2-char-id⟧(⟦2-char-id⟧,/^function\\s*\\(\\.\\.\\.[\\w$]+\\)/,[⟦2-char-id⟧]))return ⟦2-char-id⟧;if("function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"call")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"apply")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"bind")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"defineProperty")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"getRandomValues")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"Uint8Array"))return ⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧={},⟦2-char-id⟧=function(⟦2-char-id⟧){return this===⟦2-char-id⟧&&⟦2-char-id⟧===⟦2-char-id⟧};try{if(!0!==⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧]))return ⟦2-char-id⟧;const ⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧);⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧]),⟦2-char-id⟧=⟦2-char-id⟧}catch{return ⟦2-char-id⟧}return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}()),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}let ⟦2-char-id⟧=⟦2-char-id⟧;function ⟦2-char-id⟧(){return(⟦2-char-id⟧===⟦2-char-id⟧?0:3)+⟦2-char-id⟧}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧();return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧>=3?OF:⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧%3}const ⟦2-char-id⟧=Function.prototype.toString,⟦2-char-id⟧=Object.getOwnPropertyDescriptor,⟦2-char-id⟧=RegExp.prototype.exec,⟦2-char-id⟧=Object.prototype.hasOwnProperty,⟦2-char-id⟧=Set.prototype.has,⟦2-char-id⟧=Reflect.get,⟦2-char-id⟧=Object.getPrototypeOf,⟦2-char-id⟧="undefined"===typeof WebAssembly?void 0:WebAssembly;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return{code:⟦2-char-id⟧,holder:⟦2-char-id⟧,key:⟦2-char-id⟧,...arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},native:new RegExp(`^function (get )?${ZJ}\\\\(\\\\) \\\\{\\\\s*\\\\[native code\\\\]\\\\s*\\\\}$`)}}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}const ⟦2-char-id⟧=⟦2-char-id⟧?.Instance.prototype,⟦2-char-id⟧=⟦2-char-id⟧?.Memory.prototype;function ⟦2-char-id⟧(){return ⟦2-char-id⟧}let ⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=globalThis.crypto,⟦2-char-id⟧=⟦2-char-id⟧?.subtle;⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧):void 0,⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧):void 0}catch{}const ⟦2-char-id⟧=[⟦2-char-id⟧("in",⟦2-char-id⟧,"instantiate",{tier:"weighted",onNamespace:!0}),⟦2-char-id⟧("is",⟦2-char-id⟧,"instantiateStreaming",{tier:"weighted",onNamespace:!0}),⟦2-char-id⟧("co",⟦2-char-id⟧,"compile",{tier:"weighted",onNamespace:!0}),⟦2-char-id⟧("cs",⟦2-char-id⟧,"compileStreaming",{tier:"weighted",onNamespace:!0}),⟦2-char-id⟧("mo",⟦2-char-id⟧,"Module",{isConstructor:!0,tier:"punished",onNamespace:!0}),⟦2-char-id⟧("it",⟦2-char-id⟧,"Instance",{isConstructor:!0,tier:"punished",onNamespace:!0}),⟦2-char-id⟧("me",⟦2-char-id⟧,"Memory",{isConstructor:!0,tier:"punished",onNamespace:!0}),⟦2-char-id⟧("ex",(function(){return ⟦2-char-id⟧}),"exports",{isGetter:!0,tier:"punished"}),⟦2-char-id⟧("bu",⟦2-char-id⟧,"buffer",{isGetter:!0,tier:"punished"}),⟦2-char-id⟧("gr",⟦2-char-id⟧,"grow",{tier:"punished"}),⟦2-char-id⟧("rc",(function(){return"undefined"===typeof Response?void 0:Response.prototype}),"clone"),⟦2-char-id⟧("cr",(function(){return globalThis}),"crypto",{isGetter:!0,tier:"punished",inSecureContext:!0}),⟦2-char-id⟧("su",(function(){return ⟦2-char-id⟧}),"subtle",{isGetter:!0,tier:"punished",inSecureContext:!0}),⟦2-char-id⟧("dg",(function(){return ⟦2-char-id⟧}),"digest",{tier:"punished",inSecureContext:!0})];function ⟦2-char-id⟧(⟦2-char-id⟧){let ⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧(globalThis,⟦2-char-id⟧);⟦2-char-id⟧="function"===typeof ⟦2-char-id⟧?⟦2-char-id⟧.prototype:void 0}catch{}return()=>⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.map((⟦2-char-id⟧=>⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)))}const ⟦2-char-id⟧=⟦2-char-id⟧("rx",⟦2-char-id⟧("HTMLCanvasElement"),"getContext"),⟦2-char-id⟧=["createShader","shaderSource","compileShader","createProgram","linkProgram","useProgram","drawArrays","drawElements","depthFunc","depthMask","enable","disable","blendFuncSeparate","colorMask"],⟦2-char-id⟧={webgpu:[...YU("gd",jU("GPUDevice"),["createShaderModule","createRenderPipeline","createCommandEncoder"]),...YU("gq",jU("GPUQueue"),["submit","writeBuffer"]),...YU("ge",jU("GPUCommandEncoder"),["beginRenderPass","finish"]),...YU("gp",jU("GPURenderPassEncoder"),["setPipeline","setBindGroup","draw","drawIndexed","drawIndirect","drawIndexedIndirect","executeBundles"]),⟦2-char-id⟧],webgl:[...YU("g2",jU("WebGL2RenderingContext"),[...DU,"drawArraysInstanced","drawElementsInstanced"]),⟦2-char-id⟧],webgl1:[...YU("g1",jU("WebGLRenderingContext"),⟦2-char-id⟧),⟦2-char-id⟧]};let ⟦2-char-id⟧=[];function ⟦2-char-id⟧(⟦2-char-id⟧){let{code:⟦2-char-id⟧,key:⟦2-char-id⟧}=⟦2-char-id⟧;return`wh:${cJ}:${ZJ}`}const ⟦2-char-id⟧=new Set(Object.values(⟦2-char-id⟧).flatMap((⟦2-char-id⟧=>⟦2-char-id⟧.map(⟦2-char-id⟧)))),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧);function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧]}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){return new Set(⟦2-char-id⟧.filter((⟦2-char-id⟧=>⟦2-char-id⟧.tier===⟦2-char-id⟧)).map((⟦2-char-id⟧=>`wh:${JJ.code}`)))}const ⟦2-char-id⟧=⟦2-char-id⟧("punished"),⟦2-char-id⟧=!1,⟦2-char-id⟧=new Set(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧("weighted");function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return ⟦2-char-id⟧(⟦2-char-id⟧)}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return ⟦2-char-id⟧(⟦2-char-id⟧)}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}function ⟦2-char-id⟧(⟦2-char-id⟧){return"wb"===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return ⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧(⟦2-char-id⟧)}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return"wb"===⟦2-char-id⟧||⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧)}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){let{isConstructor:⟦2-char-id⟧,native:⟦2-char-id⟧}=⟦2-char-id⟧;return"function"===typeof ⟦2-char-id⟧&&(!(!⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,["prototype"]))&&null!==⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])]))}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧("",(()=>{}),⟦2-char-id⟧,arguments.length>2&&void 0!==arguments[2]&&arguments[2]?{isConstructor:!0}:{}))}function ⟦2-char-id⟧(⟦2-char-id⟧){const{holder:⟦2-char-id⟧,key:⟦2-char-id⟧,isGetter:⟦2-char-id⟧,onNamespace:⟦2-char-id⟧,inSecureContext:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(),⟦2-char-id⟧=function(⟦2-char-id⟧,⟦2-char-id⟧){for(let ⟦2-char-id⟧=⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&null!==⟦2-char-id⟧;⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧)return ⟦2-char-id⟧}}(⟦2-char-id⟧,⟦2-char-id⟧);if(!⟦2-char-id⟧)return!(⟦2-char-id⟧&&!0===globalThis.isSecureContext);const ⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧.get:⟦2-char-id⟧.value;if(!⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧))return!1;if(⟦2-char-id⟧){const ⟦2-char-id⟧=globalThis.WebAssembly;if(⟦2-char-id⟧!==⟦2-char-id⟧&&null!==⟦2-char-id⟧&&("object"===typeof ⟦2-char-id⟧||"function"===typeof ⟦2-char-id⟧)){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧===⟦2-char-id⟧||void 0===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)}}return!0}let ⟦2-char-id⟧=null,⟦2-char-id⟧=!1;function ⟦2-char-id⟧(⟦2-char-id⟧){try{return ⟦2-char-id⟧(⟦2-char-id⟧)}catch{return!1}}function ⟦2-char-id⟧(){if(void 0===⟦2-char-id⟧)return null;let ⟦2-char-id⟧=function(){try{return globalThis.WebAssembly===⟦2-char-id⟧}catch{return!1}}()?null:"wh:wa";const ⟦2-char-id⟧=⟦2-char-id⟧=>{null!==⟦2-char-id⟧&&(null===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧)>⟦2-char-id⟧(⟦2-char-id⟧))&&(⟦2-char-id⟧=⟦2-char-id⟧)};for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];void 0===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧(`wh:${JJ.code}`)}⟦2-char-id⟧(⟦2-char-id⟧??⟦2-char-id⟧());for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];void 0===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧))}return ⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧)?5:⟦2-char-id⟧(⟦2-char-id⟧)?4:⟦2-char-id⟧(⟦2-char-id⟧)?3:function(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}(⟦2-char-id⟧)?⟦2-char-id⟧===⟦2-char-id⟧?0:1:2}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=function(){const ⟦2-char-id⟧=⟦2-char-id⟧();return ⟦2-char-id⟧===⟦2-char-id⟧||⟦2-char-id⟧===⟦2-char-id⟧?(⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧):⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}();try{if(null===⟦2-char-id⟧||!⟦2-char-id⟧(⟦2-char-id⟧)){const ⟦2-char-id⟧=⟦2-char-id⟧();(null===⟦2-char-id⟧||null!==⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧)>⟦2-char-id⟧(⟦2-char-id⟧))&&(⟦2-char-id⟧=⟦2-char-id⟧)}}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(){⟦2-char-id⟧=!0}function ⟦2-char-id⟧(){if(⟦2-char-id⟧)return"wb";if((!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&⟦2-char-id⟧(),null!==⟦2-char-id⟧)return ⟦2-char-id⟧;if(void 0===⟦2-char-id⟧)return"wn:unsupported";const ⟦2-char-id⟧=⟦2-char-id⟧();return null===⟦2-char-id⟧?null:`wn:${JJ}`}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=Object.prototype.hasOwnProperty.call(⟦2-char-id⟧,⟦2-char-id⟧)?⟦2-char-id⟧[⟦2-char-id⟧]():void 0;if(void 0!==⟦2-char-id⟧)return{sha256:⟦2-char-id⟧,onMismatch:⟦2-char-id⟧};throw new ⟦2-char-id⟧(`${JJ} has no release digest, so this build refuses it`)}const ⟦2-char-id⟧=".zst.bin",⟦2-char-id⟧=Reflect.apply,⟦2-char-id⟧=ArrayBuffer,⟦2-char-id⟧="undefined"===typeof Response?void 0:Response,⟦2-char-id⟧="undefined"===typeof ReadableStream?void 0:ReadableStream,⟦2-char-id⟧=function(){let ⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&new ⟦2-char-id⟧({__proto__:null,start(⟦2-char-id⟧){const{enqueue:⟦2-char-id⟧,close:⟦2-char-id⟧,error:⟦2-char-id⟧}=Object.getPrototypeOf(⟦2-char-id⟧);⟦2-char-id⟧={enqueue:⟦2-char-id⟧,close:⟦2-char-id⟧,error:⟦2-char-id⟧}}},{__proto__:null});return ⟦2-char-id⟧}(),⟦2-char-id⟧=function(){try{return"undefined"!==typeof WebAssembly&&"function"===typeof WebAssembly.compileStreaming&&void 0!==⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧,"Response",!0)&&⟦2-char-id⟧(⟦2-char-id⟧,"ReadableStream",!0)&&⟦2-char-id⟧(⟦2-char-id⟧.enqueue,"enqueue")&&⟦2-char-id⟧(⟦2-char-id⟧.close,"close")&&⟦2-char-id⟧(⟦2-char-id⟧.error,"error")&&⟦2-char-id⟧(⟦2-char-id⟧,"body")&&⟦2-char-id⟧(⟦2-char-id⟧,"getReader")&&⟦2-char-id⟧(⟦2-char-id⟧,"read")}catch{return!1}}();let ⟦2-char-id⟧=!1;function ⟦2-char-id⟧(⟦2-char-id⟧){for(const ⟦2-char-id⟧ of"bloxd_wasm_webgpu:4943446,bloxd_wasm_webgl:5219211,bloxd_wasm_webgl1:4722370,bloxd_wasm_workers:196044,bloxd_wasm_models:312534,bloxd_wasm_client:3645615"?.split(",")??[]){const[⟦2-char-id⟧,⟦2-char-id⟧]=⟦2-char-id⟧.split(":");if(⟦2-char-id⟧===⟦2-char-id⟧){const ⟦2-char-id⟧=Number(⟦2-char-id⟧);return Number.isInteger(⟦2-char-id⟧)&&⟦2-char-id⟧>0?JJ:void 0}}}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧.name);if(void 0!==⟦2-char-id⟧&&⟦2-char-id⟧&&!⟦2-char-id⟧)return{href:`${JJ.url().href}${iU}`,length:⟦2-char-id⟧}}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧)?.href??⟦2-char-id⟧.url().href}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.url(),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧);return void 0!==⟦2-char-id⟧?async function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){let{href:⟦2-char-id⟧,length:⟦2-char-id⟧}=⟦2-char-id⟧;try{return await ⟦2-char-id⟧(⟦2-char-id⟧,((⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)=>async function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧);let ⟦2-char-id⟧;⟦2-char-id⟧??=⟦2-char-id⟧(⟦2-char-id⟧.e(1).then((()=>⟦2-char-id⟧(22))));try{⟦2-char-id⟧=await fetch(⟦2-char-id⟧,void 0===⟦2-char-id⟧?{signal:⟦2-char-id⟧}:{signal:⟦2-char-id⟧,priority:⟦2-char-id⟧})}catch(⟦2-char-id⟧){throw new Error(`Fetching ${JJ} failed: ${Xe(VJ)}`)}const{ok:⟦2-char-id⟧,status:⟦2-char-id⟧,body:⟦2-char-id⟧}=function(⟦2-char-id⟧,⟦2-char-id⟧){try{const{ok:⟦2-char-id⟧,status:⟦2-char-id⟧}=⟦2-char-id⟧;return{ok:⟦2-char-id⟧,status:⟦2-char-id⟧,body:⟦2-char-id⟧(⟦2-char-id⟧,cJ,[])}}catch{throw new Error(`${JJ} came in a response a page script made`)}}(⟦2-char-id⟧,⟦2-char-id⟧);if(!⟦2-char-id⟧)throw new Error(`Fetching ${JJ} failed: HTTP ${hJ}`);⟦2-char-id⟧();const{reader:⟦2-char-id⟧,controller:⟦2-char-id⟧,compiled:⟦2-char-id⟧}=function(⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧;try{let ⟦2-char-id⟧;⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]);const ⟦2-char-id⟧=new ⟦2-char-id⟧({__proto__:null,start(⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧}},{__proto__:null}),⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧,{__proto__:null,headers:{__proto__:null,"Content-Type":"application/wasm"}});return{reader:⟦2-char-id⟧,controller:⟦2-char-id⟧,compiled:⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧)))}}catch(⟦2-char-id⟧){throw void 0!==⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧),new Error(`${JJ} could not be streamed into a compile: ${Xe(VJ)}`)}}(⟦2-char-id⟧,⟦2-char-id⟧),{enqueue:⟦2-char-id⟧,close:⟦2-char-id⟧,error:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧=>{try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}catch{}finally{⟦2-char-id⟧(⟦2-char-id⟧)}};⟦2-char-id⟧.addEventListener("abort",(()=>{⟦2-char-id⟧(new Error(`${JJ} stalled`))}),{once:!0});let ⟦2-char-id⟧=!1;⟦2-char-id⟧(⟦2-char-id⟧,(()=>{}),(()=>{⟦2-char-id⟧=!0,⟦2-char-id⟧(⟦2-char-id⟧)}));let ⟦2-char-id⟧=0;try{let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧=!0,new Error(`The zstd decoder did not load: ${Xe(VJ)}`)}const{ZstdFrameDecoder:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧);for(;!⟦2-char-id⟧.done&&!⟦2-char-id⟧;){let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])}catch(⟦2-char-id⟧){throw new Error(`Downloading ${JJ} failed: ${Xe(VJ)}`)}if(⟦2-char-id⟧.done||⟦2-char-id⟧)break;⟦2-char-id⟧();try{⟦2-char-id⟧.push(⟦2-char-id⟧.value)}catch(⟦2-char-id⟧){throw new Error(`${JJ} did not decode: ${Xe(VJ)}`)}const{output:⟦2-char-id⟧,decoded:⟦2-char-id⟧}=⟦2-char-id⟧;if(null!==⟦2-char-id⟧&&⟦2-char-id⟧!==⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,new ⟦2-char-id⟧(⟦2-char-id⟧),[⟦2-char-id⟧.subarray(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧]);try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[new ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧-⟦2-char-id⟧)])}catch{⟦2-char-id⟧=!0}⟦2-char-id⟧=⟦2-char-id⟧}}if(⟦2-char-id⟧(),⟦2-char-id⟧)throw await ⟦2-char-id⟧,new Error(`${JJ}\'s compile stopped reading before its end`);if(!⟦2-char-id⟧.done)throw new Error(`${JJ} ended before its module did`);⟦2-char-id⟧(⟦2-char-id⟧);try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])}catch{}}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧}const ⟦2-char-id⟧=await ⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&await ⟦2-char-id⟧(⟦2-char-id⟧,new ⟦2-char-id⟧(⟦2-char-id⟧),{sha256:⟦2-char-id⟧.sha256,onMismatch:()=>{}});return ⟦2-char-id⟧}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)))}catch(⟦2-char-id⟧){console.warn(`${Xe(qJ)}: loading ${JJ.href} instead`)}const ⟦2-char-id⟧=await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,{hideThen:!0,priority:⟦2-char-id⟧});return ⟦2-char-id⟧}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧):⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,{hideThen:void 0!==⟦2-char-id⟧(⟦2-char-id⟧.name),priority:⟦2-char-id⟧})}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(⟦2-char-id⟧){try{⟦2-char-id⟧(⟦2-char-id⟧.cancel())}catch{}}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧ instanceof Error?⟦2-char-id⟧.message:String(⟦2-char-id⟧)}let ⟦2-char-id⟧=null,⟦2-char-id⟧=!1;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return null===⟦2-char-id⟧?⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧?.priority):⟦2-char-id⟧!==⟦2-char-id⟧.build?console.warn(`Bloxd wasm: ${JJ.name} was asked for after ${Ae.build.name} started loading, which this thread keeps`):⟦2-char-id⟧.name!==⟦2-char-id⟧.workers.name&&console.warn(`Bloxd wasm: ${cJ.name} was asked for workers after ${Ae.workers.name}, which this thread keeps`),⟦2-char-id⟧?.reloadFailedDownload&&!⟦2-char-id⟧&&⟦2-char-id⟧()&&(⟦2-char-id⟧="unloaded",⟦2-char-id⟧=null,⟦2-char-id⟧=null,1)&&(⟦2-char-id⟧=!0,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧.build,⟦2-char-id⟧.workers)),⟦2-char-id⟧.loaded}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=async function(⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧()){let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧()}catch(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧)),!1}try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.Zn,⟦2-char-id⟧.workerModule,await ⟦2-char-id⟧.init({module_or_path:⟦2-char-id⟧.module}))}catch(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,"instantiate")}}return ⟦2-char-id⟧()}((async()=>{⟦2-char-id⟧();const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧.name===⟦2-char-id⟧.name?FJ:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);var ⟦2-char-id⟧;await(⟦2-char-id⟧=[⟦2-char-id⟧,⟦2-char-id⟧],⟦2-char-id⟧(((⟦2-char-id⟧,⟦2-char-id⟧)=>{let ⟦2-char-id⟧=⟦2-char-id⟧.length;if(0===⟦2-char-id⟧)return void ⟦2-char-id⟧();const ⟦2-char-id⟧=()=>{⟦2-char-id⟧--,0===⟦2-char-id⟧&&⟦2-char-id⟧()};for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++)⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧,⟦2-char-id⟧)})));const ⟦2-char-id⟧=await ⟦2-char-id⟧,⟦2-char-id⟧=await ⟦2-char-id⟧;return ⟦2-char-id⟧(),{module:⟦2-char-id⟧,workerModule:⟦2-char-id⟧}}),⟦2-char-id⟧);return{build:⟦2-char-id⟧,workers:⟦2-char-id⟧,loaded:⟦2-char-id⟧}}async function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧.name),⟦2-char-id⟧)}const ⟦2-char-id⟧={name:"bloxd_wasm",url:()=>new ⟦2-char-id⟧.U(⟦2-char-id⟧(11)),init:⟦2-char-id⟧,Zn:⟦2-char-id⟧};function ⟦2-char-id⟧(){return ⟦2-char-id⟧(arguments.length>0&&void 0!==arguments[0]?arguments[0]:⟦2-char-id⟧,arguments.length>1&&void 0!==arguments[1]?arguments[1]:⟦2-char-id⟧,arguments.length>2?arguments[2]:void 0)}function ⟦2-char-id⟧(⟦2-char-id⟧){return function(⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(⟦2-char-id⟧()){let ⟦2-char-id⟧;try{⟦2-char-id⟧=⟦2-char-id⟧()}catch(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧)),!1}try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧.initSync({module:⟦2-char-id⟧}))}catch(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,"instantiate")}}return ⟦2-char-id⟧()}((()=>⟦2-char-id⟧),⟦2-char-id⟧,⟦2-char-id⟧)}const ⟦2-char-id⟧=["none","idle","now"];function ⟦2-char-id⟧(){const ⟦2-char-id⟧=()=>⟦2-char-id⟧();return{memoryBytes:()=>⟦2-char-id⟧().buffer.byteLength,reserveUpFront:⟦2-char-id⟧=>⟦2-char-id⟧().LY(⟦2-char-id⟧),reserveAhead:⟦2-char-id⟧=>⟦2-char-id⟧().RY(⟦2-char-id⟧),setCeiling:⟦2-char-id⟧=>{⟦2-char-id⟧().aY(⟦2-char-id⟧)},lowWater:()=>⟦2-char-id⟧[⟦2-char-id⟧().iY()]??"none",stats:()=>function(⟦2-char-id⟧){const ⟦2-char-id⟧=new Uint32Array(⟦2-char-id⟧().buffer,⟦2-char-id⟧,17),⟦2-char-id⟧=⟦2-char-id⟧=>⟦2-char-id⟧[⟦2-char-id⟧]??0,⟦2-char-id⟧=⟦2-char-id⟧=>({upFront:⟦2-char-id⟧(⟦2-char-id⟧),ahead:⟦2-char-id⟧(⟦2-char-id⟧+1),onDemandInFrame:⟦2-char-id⟧(⟦2-char-id⟧+2),onDemand:⟦2-char-id⟧(⟦2-char-id⟧+3)});return{memoryBytes:⟦2-char-id⟧(0),initialBytes:⟦2-char-id⟧(1),liveBytes:⟦2-char-id⟧(2),peakLiveBytes:⟦2-char-id⟧(3),headroomBytes:⟦2-char-id⟧(4),unusedBytes:⟦2-char-id⟧(5),ceilingBytes:⟦2-char-id⟧(6),reservesRefused:⟦2-char-id⟧(7),grows:⟦2-char-id⟧(8),grownBytes:⟦2-char-id⟧(12),allocationsRefused:⟦2-char-id⟧(16)}}(⟦2-char-id⟧().BY()),takeBallast:()=>⟦2-char-id⟧().tY(),takePressure:()=>⟦2-char-id⟧().oY()}}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return new Error(`${JJ}: ${cJ instanceof Error?`${⟦2-char-id⟧.name}: ${⟦2-char-id⟧.message}`:String(cJ)}`,{cause:⟦2-char-id⟧})}function ⟦2-char-id⟧(){return new URL(new ⟦2-char-id⟧.U(⟦2-char-id⟧(13)).href,globalThis.location?.href).href}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(){return ⟦2-char-id⟧??=(async()=>⟦2-char-id⟧(new URL(⟦2-char-id⟧()),⟦2-char-id⟧("bloxd_wasm_textures")))().catch((⟦2-char-id⟧=>{throw ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧)})),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return new ⟦2-char-id⟧(⟦2-char-id⟧().buffer,⟦2-char-id⟧,⟦2-char-id⟧)}class ⟦2-char-id⟧{type;ptr;length;currentView;constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){this.type=⟦2-char-id⟧,this.ptr=⟦2-char-id⟧,this.length=⟦2-char-id⟧,this.currentView=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}view(){return this.currentView.length!==this.length&&(this.currentView=⟦2-char-id⟧(this.type,this.ptr,this.length)),this.currentView}}const ⟦2-char-id⟧=15;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return!!(⟦2-char-id⟧&&null!==⟦2-char-id⟧&&⟦2-char-id⟧>=⟦2-char-id⟧)}const ⟦2-char-id⟧=27;let ⟦2-char-id⟧=0;class ⟦2-char-id⟧{constructor(⟦2-char-id⟧){this.runs=⟦2-char-id⟧,this.layers=null,this.serial=⟦2-char-id⟧,⟦2-char-id⟧=(⟦2-char-id⟧+1)%4294967295}from(⟦2-char-id⟧,⟦2-char-id⟧){return 0===⟦2-char-id⟧?[0,0]:(this.layers??=function(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧,⟦2-char-id⟧=new Uint32Array(2*⟦2-char-id⟧);let ⟦2-char-id⟧=1,⟦2-char-id⟧=0,⟦2-char-id⟧=0;for(;⟦2-char-id⟧<⟦2-char-id⟧.length&&⟦2-char-id⟧<⟦2-char-id⟧;){const ⟦2-char-id⟧=⟦2-char-id⟧;let ⟦2-char-id⟧=0,⟦2-char-id⟧=0;for(;⟦2-char-id⟧<⟦2-char-id⟧.length&&⟦2-char-id⟧[⟦2-char-id⟧]>=128;)⟦2-char-id⟧+=(127&⟦2-char-id⟧[⟦2-char-id⟧++])<<⟦2-char-id⟧,⟦2-char-id⟧+=7;for(⟦2-char-id⟧+=⟦2-char-id⟧[⟦2-char-id⟧++]<<⟦2-char-id⟧;⟦2-char-id⟧[⟦2-char-id⟧]>=128;)⟦2-char-id⟧++;if(⟦2-char-id⟧++,!(⟦2-char-id⟧<=0))for(⟦2-char-id⟧+=⟦2-char-id⟧;⟦2-char-id⟧<⟦2-char-id⟧&&⟦2-char-id⟧*⟦2-char-id⟧<⟦2-char-id⟧;)⟦2-char-id⟧[2*⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧[2*⟦2-char-id⟧+1]=⟦2-char-id⟧-⟦2-char-id⟧,⟦2-char-id⟧++}for(;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[2*⟦2-char-id⟧]=⟦2-char-id⟧.length,⟦2-char-id⟧[2*⟦2-char-id⟧+1]=⟦2-char-id⟧;return ⟦2-char-id⟧}(this.runs,⟦2-char-id⟧),[this.layers[2*⟦2-char-id⟧],this.layers[2*⟦2-char-id⟧+1]])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const{runs:⟦2-char-id⟧}=this;if(⟦2-char-id⟧>=⟦2-char-id⟧)return ⟦2-char-id⟧.length;const[⟦2-char-id⟧,⟦2-char-id⟧]=this.from(⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧===⟦2-char-id⟧*⟦2-char-id⟧*⟦2-char-id⟧)return ⟦2-char-id⟧;let ⟦2-char-id⟧=⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<2&&⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧]<128&&⟦2-char-id⟧++;return ⟦2-char-id⟧}}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧-1;let ⟦2-char-id⟧;⟦2-char-id⟧=⟦2-char-id⟧?new Uint16Array(⟦2-char-id⟧):new Uint8Array(⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧;if(0===⟦2-char-id⟧)⟦2-char-id⟧.set(⟦2-char-id⟧.subarray(0,⟦2-char-id⟧));else if(1===⟦2-char-id⟧)⟦2-char-id⟧.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧*⟦2-char-id⟧,⟦2-char-id⟧*⟦2-char-id⟧));else if(2===⟦2-char-id⟧||3===⟦2-char-id⟧){const ⟦2-char-id⟧=2===⟦2-char-id⟧?0:⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧+⟦2-char-id⟧*⟦2-char-id⟧;⟦2-char-id⟧.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧,⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧*⟦2-char-id⟧)}}else{const ⟦2-char-id⟧=4===⟦2-char-id⟧?0:⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧+⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧+⟦2-char-id⟧]=⟦2-char-id⟧[⟦2-char-id⟧+⟦2-char-id⟧*⟦2-char-id⟧]}}return ⟦2-char-id⟧}let ⟦2-char-id⟧=function(⟦2-char-id⟧){return ⟦2-char-id⟧[⟦2-char-id⟧.Corner=0]="Corner",⟦2-char-id⟧[⟦2-char-id⟧.EdgeX=1]="EdgeX",⟦2-char-id⟧[⟦2-char-id⟧.EdgeY=2]="EdgeY",⟦2-char-id⟧[⟦2-char-id⟧.EdgeZ=3]="EdgeZ",⟦2-char-id⟧[⟦2-char-id⟧.FaceX=4]="FaceX",⟦2-char-id⟧[⟦2-char-id⟧.FaceY=5]="FaceY",⟦2-char-id⟧[⟦2-char-id⟧.FaceZ=6]="FaceZ",⟦2-char-id⟧[⟦2-char-id⟧.Center=7]="Center",⟦2-char-id⟧}({});⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeZ,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeY,⟦2-char-id⟧.FaceX,⟦2-char-id⟧.EdgeY,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeZ,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeX,⟦2-char-id⟧.FaceY,⟦2-char-id⟧.EdgeX,⟦2-char-id⟧.FaceZ,⟦2-char-id⟧.Center,⟦2-char-id⟧.FaceZ,⟦2-char-id⟧.EdgeX,⟦2-char-id⟧.FaceY,⟦2-char-id⟧.EdgeX,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeZ,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeY,⟦2-char-id⟧.FaceX,⟦2-char-id⟧.EdgeY,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeZ,⟦2-char-id⟧.Corner;const ⟦2-char-id⟧=[22,4,16,10,14,12],⟦2-char-id⟧=Array.from({length:27},((⟦2-char-id⟧,⟦2-char-id⟧)=>[Math.floor(⟦2-char-id⟧/9)-1,Math.floor(⟦2-char-id⟧/3)%3-1,⟦2-char-id⟧%3-1]));function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧[⟦2-char-id⟧]}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧<0?[⟦2-char-id⟧-⟦2-char-id⟧,⟦2-char-id⟧]:⟦2-char-id⟧>0?[0,⟦2-char-id⟧]:[0,⟦2-char-id⟧]}const ⟦2-char-id⟧=/^alloc_failed (\\d+) bytes$/;class ⟦2-char-id⟧{constructor(⟦2-char-id⟧){this.chunkSizeCubed=⟦2-char-id⟧,this.uint8=[],this.uint16=[]}put(⟦2-char-id⟧){const ⟦2-char-id⟧=this.chunkSizeCubed,⟦2-char-id⟧=2*this.chunkSizeCubed;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.byteLength===⟦2-char-id⟧&&this.uint8.length<⟦2-char-id⟧.MAX_SIZE?this.uint8.push(new Uint8Array(⟦2-char-id⟧)):⟦2-char-id⟧.byteLength===⟦2-char-id⟧&&this.uint16.length<⟦2-char-id⟧.MAX_SIZE&&this.uint16.push(new Uint16Array(⟦2-char-id⟧))}drain(){const ⟦2-char-id⟧=[...this.uint8,...this.uint16].map((⟦2-char-id⟧=>⟦2-char-id⟧.buffer));return this.uint8.length=0,this.uint16.length=0,⟦2-char-id⟧}takeUint8(){var ⟦2-char-id⟧;return null!==(⟦2-char-id⟧=this.uint8.pop())&&void 0!==⟦2-char-id⟧?JJ:new Uint8Array(this.chunkSizeCubed)}takeUint16(){var ⟦2-char-id⟧;return null!==(⟦2-char-id⟧=this.uint16.pop())&&void 0!==⟦2-char-id⟧?JJ:new Uint16Array(this.chunkSizeCubed)}takeZeroedUint8(){const ⟦2-char-id⟧=this.takeUint8();return ⟦2-char-id⟧.fill(0),⟦2-char-id⟧}}⟦2-char-id⟧.MAX_SIZE=16;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return{emission:⟦2-char-id⟧,skyEmission:Float64Array.from({length:⟦2-char-id⟧.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>{var ⟦2-char-id⟧;return null!==(⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧])&&void 0!==⟦2-char-id⟧?FJ:0})),filters:Int32Array.from({length:⟦2-char-id⟧.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>{var ⟦2-char-id⟧;const ⟦2-char-id⟧=null!==(⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧])&&void 0!==⟦2-char-id⟧?FJ:1;return ⟦2-char-id⟧<0?-1:Math.min(⟦2-char-id⟧,15)})),opacity:Uint8Array.from({length:⟦2-char-id⟧.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>⟦2-char-id⟧[⟦2-char-id⟧]?1:0))}}new Map;function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧ instanceof Error&&Object.getPrototypeOf(⟦2-char-id⟧)===Error.prototype}class ⟦2-char-id⟧ extends RangeError{}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{constructor(⟦2-char-id⟧){super(`alloc_failed ${JJ} bytes`),this.bytes=⟦2-char-id⟧}}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.exec(⟦2-char-id⟧);return ⟦2-char-id⟧?new ⟦2-char-id⟧(Number(⟦2-char-id⟧[1])):new ⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧)&&⟦2-char-id⟧.test(⟦2-char-id⟧.message)?⟦2-char-id⟧(⟦2-char-id⟧.message):⟦2-char-id⟧}class ⟦2-char-id⟧ extends Error{constructor(⟦2-char-id⟧){super(⟦2-char-id⟧ instanceof Error?⟦2-char-id⟧.message:String(⟦2-char-id⟧)),this.trap=⟦2-char-id⟧}}const ⟦2-char-id⟧=["full","relit","relit-sky","unchanged"];function ⟦2-char-id⟧(⟦2-char-id⟧){return Number.isInteger(⟦2-char-id⟧)&&⟦2-char-id⟧>=-2147483648&&⟦2-char-id⟧<=2147483647}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{constructor(⟦2-char-id⟧,⟦2-char-id⟧){super(⟦2-char-id⟧),this.reason=⟦2-char-id⟧}}class ⟦2-char-id⟧{constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){this.engine=⟦2-char-id⟧,this.lastLightPass="full",this.view=void 0,this.chunkSizeCubed=void 0,this.seedSize=void 0,this.lightU8=void 0,this.lightU16=void 0,this.seedRead=void 0,this.pool=void 0,this.view=⟦2-char-id⟧.view,this.chunkSizeCubed=⟦2-char-id⟧*⟦2-char-id⟧*⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧+30;this.seedSize=⟦2-char-id⟧*⟦2-char-id⟧,this.pool=new ⟦2-char-id⟧(this.chunkSizeCubed),this.lightU8=new ⟦2-char-id⟧.BufferView(Uint8Array,⟦2-char-id⟧.ds(),this.chunkSizeCubed),this.lightU16=new ⟦2-char-id⟧.BufferView(Uint16Array,⟦2-char-id⟧.Ps(),this.chunkSizeCubed),this.seedRead=new ⟦2-char-id⟧.BufferView(Uint8Array,⟦2-char-id⟧.Rs(),this.seedSize)}returnBuffers(⟦2-char-id⟧){this.pool.put(⟦2-char-id⟧)}takeBuffers(){return this.pool.drain()}getZeroedFullChunkLightData(){return this.pool.takeZeroedUint8()}checkComputeInput(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧.length<this.seedSize)throw new ⟦2-char-id⟧("seed_size",`WasmLightEngine sky seed grid holds ${JJ.length} columns, not ${this.seedSize}`);if(!⟦2-char-id⟧(⟦2-char-id⟧)||null!==⟦2-char-id⟧&&!⟦2-char-id⟧(⟦2-char-id⟧))throw new ⟦2-char-id⟧("chunk_j",`WasmLightEngine chunkJ ${ZJ} or highestChunkJ ${cJ} is not a 32-bit integer`)}computeWritten(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){this.checkComputeInput(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);const{engine:⟦2-char-id⟧,view:⟦2-char-id⟧}=this;let ⟦2-char-id⟧;⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧.Ls(),this.seedSize).set(⟦2-char-id⟧.subarray(0,this.seedSize));try{⟦2-char-id⟧=⟦2-char-id⟧.compute(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(⟦2-char-id⟧)}if(this.lastLightPass=⟦2-char-id⟧[⟦2-char-id⟧>>1],1&⟦2-char-id⟧){const ⟦2-char-id⟧=this.pool.takeUint16();return ⟦2-char-id⟧.set(this.lightU16.view()),{hn:⟦2-char-id⟧,isUint16:!0}}const ⟦2-char-id⟧=this.pool.takeUint8();return ⟦2-char-id⟧.set(this.lightU8.view()),{hn:⟦2-char-id⟧,isUint16:!1}}skySeedColumnsRead(⟦2-char-id⟧){return!!this.engine.Cs()&&(⟦2-char-id⟧.set(this.seedRead.view()),!0)}forgetKeptStates(⟦2-char-id⟧){this.engine.Ks(⟦2-char-id⟧)}free(){this.engine.free()}}const ⟦2-char-id⟧=/^(0|[1-9]\\d*)$/;function ⟦2-char-id⟧(⟦2-char-id⟧){return"number"===typeof ⟦2-char-id⟧&&Number.isInteger(⟦2-char-id⟧)&&⟦2-char-id⟧>=0&&⟦2-char-id⟧<=2147483647}new WeakMap,new WeakMap;const ⟦2-char-id⟧=new Uint32Array(0);const ⟦2-char-id⟧=new ArrayBuffer(0);const ⟦2-char-id⟧=[0,1,2,0,2,3];let ⟦2-char-id⟧=new Uint32Array(0);function ⟦2-char-id⟧(⟦2-char-id⟧){if(⟦2-char-id⟧.length<6*⟦2-char-id⟧){const ⟦2-char-id⟧=Math.max(⟦2-char-id⟧,2*⟦2-char-id⟧.length/6);⟦2-char-id⟧=function(⟦2-char-id⟧,⟦2-char-id⟧){for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=4*⟦2-char-id⟧,⟦2-char-id⟧=6*⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<6;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧+⟦2-char-id⟧]=⟦2-char-id⟧+⟦2-char-id⟧[⟦2-char-id⟧]}return ⟦2-char-id⟧}(new Uint32Array(6*⟦2-char-id⟧),⟦2-char-id⟧)}return ⟦2-char-id⟧.slice(0,6*⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧,4*⟦2-char-id⟧);return ⟦2-char-id⟧?⟦2-char-id⟧.slice():new Float32Array(⟦2-char-id⟧)}const ⟦2-char-id⟧={computed:1,provided:2,zeroedFull:3},⟦2-char-id⟧=4294967295,⟦2-char-id⟧=[1,2,4,3,0,⟦2-char-id⟧.computed,⟦2-char-id⟧.provided,⟦2-char-id⟧.zeroedFull,4,8,16,32,64,128,256,8,0,1,2,3,4,1,2,0,1,2,3,2,0,1,16,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,4,8,16,15,8,⟦2-char-id⟧,1,2],⟦2-char-id⟧=[],⟦2-char-id⟧=[];function ⟦2-char-id⟧(⟦2-char-id⟧){return Number.isInteger(⟦2-char-id⟧)&&⟦2-char-id⟧>=0&&⟦2-char-id⟧<2**32}function ⟦2-char-id⟧(⟦2-char-id⟧){try{return ⟦2-char-id⟧()}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(⟦2-char-id⟧)?⟦2-char-id⟧(⟦2-char-id⟧.message):new ⟦2-char-id⟧(⟦2-char-id⟧)}}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{static create(⟦2-char-id⟧,⟦2-char-id⟧){!function(⟦2-char-id⟧){const ⟦2-char-id⟧="function"===typeof ⟦2-char-id⟧.lY?⟦2-char-id⟧((()=>⟦2-char-id⟧.lY())):[];if(⟦2-char-id⟧.length!==⟦2-char-id⟧.length||!⟦2-char-id⟧.every(((⟦2-char-id⟧,⟦2-char-id⟧)=>⟦2-char-id⟧[⟦2-char-id⟧]===⟦2-char-id⟧)))throw new ⟦2-char-id⟧(`@bloxd/wasm\'s mesher constants [${Array.from(cJ).join()}] are not wasmChunkMesher.ts\'s [${XX.join()}]`)}(⟦2-char-id⟧.Zn);const ⟦2-char-id⟧=function(⟦2-char-id⟧){var ⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧.lightEmissionLookup,⟦2-char-id⟧.skyLightEmissionLookup,⟦2-char-id⟧.lightFilterLookup,⟦2-char-id⟧.opacityLookup),⟦2-char-id⟧=Int32Array.from({length:⟦2-char-id⟧.blockFaceToMatId.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>{const ⟦2-char-id⟧=⟦2-char-id⟧.blockFaceToMatId[⟦2-char-id⟧];if(void 0===⟦2-char-id⟧)return-1;if(!⟦2-char-id⟧(⟦2-char-id⟧))throw new ⟦2-char-id⟧(`blockFaceToMatId[${ZJ}] is ${String(FJ)}`);return ⟦2-char-id⟧}));let ⟦2-char-id⟧=0;const ⟦2-char-id⟧=[];for(const[⟦2-char-id⟧,⟦2-char-id⟧]of Object.entries(⟦2-char-id⟧.matIdToTerrainId)){const ⟦2-char-id⟧=Number(⟦2-char-id⟧);if(⟦2-char-id⟧.test(⟦2-char-id⟧)&&!(⟦2-char-id⟧>32768)){if(void 0!==⟦2-char-id⟧&&!⟦2-char-id⟧(⟦2-char-id⟧))throw new ⟦2-char-id⟧(`matIdToTerrainId[${nJ}] is ${String(GJ)}`);⟦2-char-id⟧.push([⟦2-char-id⟧,null!==⟦2-char-id⟧&&void 0!==⟦2-char-id⟧?GJ:-1]),⟦2-char-id⟧=Math.max(⟦2-char-id⟧,⟦2-char-id⟧+1)}}const ⟦2-char-id⟧=new Int32Array(⟦2-char-id⟧).fill(-1);for(const[⟦2-char-id⟧,⟦2-char-id⟧]of ⟦2-char-id⟧)⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧.matColorLookup,⟦2-char-id⟧=new Float64Array(3*⟦2-char-id⟧.length),⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧.length);for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(⟦2-char-id⟧){if(!Array.isArray(⟦2-char-id⟧))throw new ⟦2-char-id⟧(`matColorLookup[${nJ}] is not an array`);⟦2-char-id⟧[⟦2-char-id⟧]=1;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<3;⟦2-char-id⟧++)⟦2-char-id⟧[3*⟦2-char-id⟧+⟦2-char-id⟧]=Number(⟦2-char-id⟧[⟦2-char-id⟧])}}const ⟦2-char-id⟧=Int32Array.from(⟦2-char-id⟧.faceGroupTerrainIds,(⟦2-char-id⟧=>{if(!⟦2-char-id⟧(⟦2-char-id⟧))throw new ⟦2-char-id⟧(`faceGroupTerrainIds holds ${JJ}`);return ⟦2-char-id⟧})),⟦2-char-id⟧=Uint8Array.from(⟦2-char-id⟧.faceGroupLayout,(⟦2-char-id⟧=>{if(!Number.isInteger(⟦2-char-id⟧)||⟦2-char-id⟧<0||⟦2-char-id⟧>5)throw new ⟦2-char-id⟧(`faceGroupLayout holds ${JJ}`);return ⟦2-char-id⟧}));return{yn:⟦2-char-id⟧.emission,skyEmission:⟦2-char-id⟧.skyEmission,Sn:⟦2-char-id⟧.filters,opacity:⟦2-char-id⟧.opacity,solid:Uint8Array.from({length:⟦2-char-id⟧.solidLookupArr.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>⟦2-char-id⟧.solidLookupArr[⟦2-char-id⟧]?1:0)),blockFaceMat:⟦2-char-id⟧,matTerrain:⟦2-char-id⟧,matAtlasIndex:Float64Array.from({length:⟦2-char-id⟧.atlasIndexLookup.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>Number(⟦2-char-id⟧.atlasIndexLookup[⟦2-char-id⟧]))),matColour:⟦2-char-id⟧,matColourSet:⟦2-char-id⟧,materialBlockFlags:⟦2-char-id⟧.materialBlockFlags,faceGroupTerrainIds:⟦2-char-id⟧,faceGroupLayout:⟦2-char-id⟧,visOccluders:null!==(⟦2-char-id⟧=⟦2-char-id⟧.visOccluders)&&void 0!==⟦2-char-id⟧?cJ:null,Mn:Float64Array.from(⟦2-char-id⟧.Mn,Number),bn:Number(⟦2-char-id⟧.bn),flags:(⟦2-char-id⟧.doAO?1:0)|(⟦2-char-id⟧.skipRevAo?2:0)|(⟦2-char-id⟧.compactParts?4:0),Kn:⟦2-char-id⟧.Kn,keptLightStates:null!==(⟦2-char-id⟧=⟦2-char-id⟧.keptLightStates)&&void 0!==⟦2-char-id⟧?ZJ:4,decodedChunks:null!==(⟦2-char-id⟧=⟦2-char-id⟧.decodedChunks)&&void 0!==⟦2-char-id⟧?FJ:64}}(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧((()=>new ⟦2-char-id⟧.Zn.pY(⟦2-char-id⟧.yn,⟦2-char-id⟧.skyEmission,⟦2-char-id⟧.Sn,⟦2-char-id⟧.opacity,⟦2-char-id⟧.solid,⟦2-char-id⟧.blockFaceMat,⟦2-char-id⟧.matTerrain,⟦2-char-id⟧.matAtlasIndex,⟦2-char-id⟧.matColour,⟦2-char-id⟧.matColourSet,⟦2-char-id⟧.materialBlockFlags,⟦2-char-id⟧.faceGroupTerrainIds,⟦2-char-id⟧.faceGroupLayout,⟦2-char-id⟧.visOccluders,⟦2-char-id⟧.Mn,⟦2-char-id⟧.bn,⟦2-char-id⟧.flags,⟦2-char-id⟧.Kn,⟦2-char-id⟧.keptLightStates,⟦2-char-id⟧.decodedChunks)));try{return new ⟦2-char-id⟧(⟦2-char-id⟧,function(⟦2-char-id⟧){return new Proxy(⟦2-char-id⟧,{get(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=Reflect.get(⟦2-char-id⟧,⟦2-char-id⟧);return"function"!==typeof ⟦2-char-id⟧?ZJ:function(){for(var ⟦2-char-id⟧=arguments.length,⟦2-char-id⟧=new Array(⟦2-char-id⟧),⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧]=arguments[⟦2-char-id⟧];return ⟦2-char-id⟧((()=>⟦2-char-id⟧.apply(⟦2-char-id⟧,⟦2-char-id⟧)))}}})}(⟦2-char-id⟧),⟦2-char-id⟧.Kn,⟦2-char-id⟧.compactParts)}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧ instanceof ⟦2-char-id⟧?⟦2-char-id⟧.push(⟦2-char-id⟧):⟦2-char-id⟧.free(),⟦2-char-id⟧}}constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){super(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧),this.mesher=⟦2-char-id⟧,this.compactParts=⟦2-char-id⟧,this.lastComputeKind="wasm",this.lastComputeMs=0,this.Kn=void 0,this.hoodStarts=new Uint32Array(⟦2-char-id⟧),this.hoodSerials=new Uint32Array(⟦2-char-id⟧),this.hoodEnds=new Uint32Array(⟦2-char-id⟧),this.hoodFrom=new Uint32Array(⟦2-char-id⟧),this.Kn=⟦2-char-id⟧}loadHood(⟦2-char-id⟧,⟦2-char-id⟧){const{mesher:⟦2-char-id⟧,view:⟦2-char-id⟧,Kn:⟦2-char-id⟧,hoodSerials:⟦2-char-id⟧,hoodStarts:⟦2-char-id⟧,hoodEnds:⟦2-char-id⟧,hoodFrom:⟦2-char-id⟧}=this;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){var ⟦2-char-id⟧,⟦2-char-id⟧;⟦2-char-id⟧[⟦2-char-id⟧]=null!==(⟦2-char-id⟧=null===(⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧])||void 0===⟦2-char-id⟧?void 0:⟦2-char-id⟧.serial)&&void 0!==⟦2-char-id⟧?jJ:⟦2-char-id⟧}const ⟦2-char-id⟧=⟦2-char-id⟧.zs(⟦2-char-id⟧,⟦2-char-id⟧);⟦2-char-id⟧.fill(⟦2-char-id⟧);let ⟦2-char-id⟧=0;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(⟦2-char-id⟧&&(1===⟦2-char-id⟧[⟦2-char-id⟧]||2===⟦2-char-id⟧[⟦2-char-id⟧])){const[⟦2-char-id⟧,⟦2-char-id⟧]=1===⟦2-char-id⟧[⟦2-char-id⟧]?⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧)[0],⟦2-char-id⟧,⟦2-char-id⟧):[0,⟦2-char-id⟧],[⟦2-char-id⟧,⟦2-char-id⟧]=⟦2-char-id⟧.from(⟦2-char-id⟧,⟦2-char-id⟧);⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧+=⟦2-char-id⟧.to(⟦2-char-id⟧,⟦2-char-id⟧)-⟦2-char-id⟧}⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧}const ⟦2-char-id⟧=⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧.Is(⟦2-char-id⟧),⟦2-char-id⟧);let ⟦2-char-id⟧=0;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧]!==⟦2-char-id⟧&&⟦2-char-id⟧.set(⟦2-char-id⟧[⟦2-char-id⟧].runs.subarray(⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧[⟦2-char-id⟧]+⟦2-char-id⟧[⟦2-char-id⟧]-⟦2-char-id⟧),⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];⟦2-char-id⟧.Vs(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}computeFromNeighbours(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧!==⟦2-char-id⟧)throw new Error("WasmChunkMesher lights the chunks loadHood loaded: pass LOADED_HOOD");const ⟦2-char-id⟧=performance.now(),⟦2-char-id⟧=this.computeWritten(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);return this.lastComputeMs=performance.now()-⟦2-char-id⟧,⟦2-char-id⟧}mesh(⟦2-char-id⟧){const ⟦2-char-id⟧=this.checkJob(⟦2-char-id⟧),{mesher:⟦2-char-id⟧,view:⟦2-char-id⟧}=this,⟦2-char-id⟧=this.writeAndMesh(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧.Ss();return function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧[1];if(1&⟦2-char-id⟧[0]){const ⟦2-char-id⟧=[];for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧.subarray(8+2*⟦2-char-id⟧);⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧[0],⟦2-char-id⟧[1],⟦2-char-id⟧))}return{lightOnly:!0,lightDataArrays:⟦2-char-id⟧}}const ⟦2-char-id⟧=[],⟦2-char-id⟧=0!==(2&⟦2-char-id⟧[0])?[]:null;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧.subarray(8+16*⟦2-char-id⟧),⟦2-char-id⟧=-1===(0|⟦2-char-id⟧[0])?void 0:0|⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧=⟦2-char-id⟧[2],⟦2-char-id⟧=0!==(8&⟦2-char-id⟧),⟦2-char-id⟧={vertices:⟦2-char-id⟧?le:⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧[3],⟦2-char-id⟧[4]).slice().buffer,usesAtlas:0!==(1&⟦2-char-id⟧),indices:⟦2-char-id⟧?oe:⟦2-char-id⟧(⟦2-char-id⟧),hn:2&⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧[5],jJ,⟦2-char-id⟧):null,kn:⟦2-char-id⟧,terrainID:⟦2-char-id⟧,faceGroups:16&⟦2-char-id⟧?⟦2-char-id⟧(Int32Array,⟦2-char-id⟧[7],15).slice():null};4&⟦2-char-id⟧&&(⟦2-char-id⟧.packedVertices=⟦2-char-id⟧?⟦2-char-id⟧(Uint32Array,⟦2-char-id⟧[6],3*⟦2-char-id⟧).slice():void 0),⟦2-char-id⟧&&(⟦2-char-id⟧.vertexCount=4*⟦2-char-id⟧),⟦2-char-id⟧.push(⟦2-char-id⟧),⟦2-char-id⟧&&⟦2-char-id⟧.push({terrainID:⟦2-char-id⟧,numFaces:⟦2-char-id⟧,is:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[8],⟦2-char-id⟧).slice(),js:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[9],⟦2-char-id⟧).slice(),ks:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[10],⟦2-char-id⟧).slice(),wids:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[11],⟦2-char-id⟧).slice(),hts:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[12],⟦2-char-id⟧).slice(),vU:⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧[13],⟦2-char-id⟧).slice(),diagonals:⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧[14],⟦2-char-id⟧).slice()})}const ⟦2-char-id⟧={lightOnly:!1,vertexDataInfo:⟦2-char-id⟧,faceLayout:⟦2-char-id⟧,buildMs:performance.now()-⟦2-char-id⟧},⟦2-char-id⟧=⟦2-char-id⟧[2];return 0!==⟦2-char-id⟧&&(⟦2-char-id⟧.visNegNeighbours=⟦2-char-id⟧[3]),⟦2-char-id⟧>1&&(⟦2-char-id⟧.visGraphs=3===⟦2-char-id⟧?⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧[4],8).slice():null),⟦2-char-id⟧}(⟦2-char-id⟧,⟦2-char-id⟧(Uint32Array,⟦2-char-id⟧.Ns(),⟦2-char-id⟧),⟦2-char-id⟧.chunk.kn,this.compactParts,⟦2-char-id⟧)}writeAndMesh(⟦2-char-id⟧,⟦2-char-id⟧){const{mesher:⟦2-char-id⟧,view:⟦2-char-id⟧,Kn:⟦2-char-id⟧}=this;⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧.Bs(),⟦2-char-id⟧).set(⟦2-char-id⟧.chunk.Qs);const{light:⟦2-char-id⟧}=⟦2-char-id⟧;if(⟦2-char-id⟧&&"provided"===⟦2-char-id⟧.kind){const ⟦2-char-id⟧=⟦2-char-id⟧.Ts(⟦2-char-id⟧.isUint16);⟦2-char-id⟧.isUint16?⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧,this.chunkSizeCubed).set(⟦2-char-id⟧.data):⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧,this.chunkSizeCubed).set(⟦2-char-id⟧.data)}let ⟦2-char-id⟧=0,⟦2-char-id⟧=0;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<6;⟦2-char-id⟧++){var ⟦2-char-id⟧,⟦2-char-id⟧;const ⟦2-char-id⟧=null===(⟦2-char-id⟧=⟦2-char-id⟧.neighbourLightBorders)||void 0===⟦2-char-id⟧?void 0:⟦2-char-id⟧[⟦2-char-id⟧];⟦2-char-id⟧&&(⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧.Es(⟦2-char-id⟧),⟦2-char-id⟧*⟦2-char-id⟧).set(⟦2-char-id⟧),⟦2-char-id⟧|=1<<⟦2-char-id⟧),null!==(⟦2-char-id⟧=⟦2-char-id⟧.neighbourLightIsUint16)&&void 0!==⟦2-char-id⟧&&⟦2-char-id⟧[⟦2-char-id⟧]&&(⟦2-char-id⟧|=1<<⟦2-char-id⟧)}return 32&⟦2-char-id⟧&&this.writeLayout(⟦2-char-id⟧.lightOnlyLayout),⟦2-char-id⟧.mesh(⟦2-char-id⟧,⟦2-char-id⟧.neighboursBitmask,⟦2-char-id⟧.neighbourOpenSkyFaces,⟦2-char-id⟧,⟦2-char-id⟧)}checkJob(⟦2-char-id⟧){const{chunk:⟦2-char-id⟧,light:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=this.Kn;if(⟦2-char-id⟧.Qs.length!==⟦2-char-id⟧)throw new ⟦2-char-id⟧(`WasmChunkMesher needs a _wholeLayerVoxel of ${FJ}`);if(!⟦2-char-id⟧(⟦2-char-id⟧.neighboursBitmask)||!⟦2-char-id⟧(⟦2-char-id⟧.neighbourOpenSkyFaces))throw new ⟦2-char-id⟧(`WasmChunkMesher neighbours bitmask ${JJ.neighboursBitmask} or open sky faces ${JJ.neighbourOpenSkyFaces}`);let ⟦2-char-id⟧=0;if(⟦2-char-id⟧){const ⟦2-char-id⟧="provided"===⟦2-char-id⟧.kind;if(⟦2-char-id⟧&&(⟦2-char-id⟧.data.length!==this.chunkSizeCubed||⟦2-char-id⟧.data instanceof Uint16Array!==⟦2-char-id⟧.isUint16))throw new ⟦2-char-id⟧(`WasmChunkMesher light is not ${this.chunkSizeCubed} ${ZJ.isUint16?"u16":"u8"} values`);⟦2-char-id⟧|=⟦2-char-id⟧[⟦2-char-id⟧.kind]|(⟦2-char-id⟧&&⟦2-char-id⟧.isUint16?4:0)}const ⟦2-char-id⟧=⟦2-char-id⟧.neighbourLightBorders;if(⟦2-char-id⟧){⟦2-char-id⟧|=8;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<6;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(⟦2-char-id⟧&&⟦2-char-id⟧.length!==⟦2-char-id⟧*⟦2-char-id⟧)throw new ⟦2-char-id⟧(`WasmChunkMesher light border ${JJ} is not ${FJ*FJ} light values`)}}⟦2-char-id⟧.neighbourLightIsUint16&&(⟦2-char-id⟧|=16);const ⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧.lightOnlyLayout:null;if(⟦2-char-id⟧){for(const ⟦2-char-id⟧ of ⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.numFaces,⟦2-char-id⟧=[⟦2-char-id⟧.is,⟦2-char-id⟧.js,⟦2-char-id⟧.ks,⟦2-char-id⟧.wids,⟦2-char-id⟧.hts,⟦2-char-id⟧.vU,⟦2-char-id⟧.diagonals];if(!⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧.some((⟦2-char-id⟧=>⟦2-char-id⟧.length!==⟦2-char-id⟧)))throw new ⟦2-char-id⟧("WasmChunkMesher face layout arrays disagree with numFaces")}⟦2-char-id⟧|=32}return ⟦2-char-id⟧|(⟦2-char-id⟧.visGraphs?64:0)|(⟦2-char-id⟧.sn?128:0)|(⟦2-char-id⟧.qn?256:0)}writeLayout(⟦2-char-id⟧){const{mesher:⟦2-char-id⟧,view:⟦2-char-id⟧}=this;let ⟦2-char-id⟧=0;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧+=⟦2-char-id⟧.numFaces;⟦2-char-id⟧.gs(⟦2-char-id⟧.length,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.Ws(),⟦2-char-id⟧=⟦2-char-id⟧.Ms(),⟦2-char-id⟧=⟦2-char-id⟧.Hs(),⟦2-char-id⟧=⟦2-char-id⟧(Uint32Array,⟦2-char-id⟧,⟦2-char-id⟧.length),⟦2-char-id⟧=⟦2-char-id⟧(Int16Array,⟦2-char-id⟧,5*⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧,2*⟦2-char-id⟧);let ⟦2-char-id⟧=0;⟦2-char-id⟧.forEach(((⟦2-char-id⟧,⟦2-char-id⟧)=>{⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧.numFaces,⟦2-char-id⟧.set(⟦2-char-id⟧.is,⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.js,⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.ks,2*⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.wids,3*⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.hts,4*⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.vU,⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.diagonals,⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧+=⟦2-char-id⟧.numFaces}))}}Error;function ⟦2-char-id⟧(⟦2-char-id⟧){return/out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(⟦2-char-id⟧))}new Set(["start_refused","light_state_refused","abort_refused","trap_out_of_memory"]),new Set;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.push(⟦2-char-id⟧.is.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.js.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.ks.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.wids.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.hts.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.vU.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.diagonals.buffer)}class ⟦2-char-id⟧ extends Error{}let ⟦2-char-id⟧,⟦2-char-id⟧=null,⟦2-char-id⟧=null;const ⟦2-char-id⟧=[];let ⟦2-char-id⟧=0,⟦2-char-id⟧=!1,⟦2-char-id⟧=0;let ⟦2-char-id⟧=0,⟦2-char-id⟧=null,⟦2-char-id⟧=!1;const ⟦2-char-id⟧=new class{constructor(){this.runs=new Map}take(⟦2-char-id⟧){⟦2-char-id⟧.forgetAll&&this.runs.clear();for(const ⟦2-char-id⟧ of ⟦2-char-id⟧.forgotten)this.runs.delete(⟦2-char-id⟧);return ⟦2-char-id⟧.sentIds.forEach(((⟦2-char-id⟧,⟦2-char-id⟧)=>{this.runs.set(⟦2-char-id⟧,new ⟦2-char-id⟧(⟦2-char-id⟧.sentRuns[⟦2-char-id⟧]))})),Array.from(⟦2-char-id⟧.ids,(⟦2-char-id⟧=>{if(⟦2-char-id⟧<0)return null;const ⟦2-char-id⟧=this.runs.get(⟦2-char-id⟧);if(!⟦2-char-id⟧)throw new Error(`The meshing worker holds no chunk ${JJ}`);return ⟦2-char-id⟧}))}clear(){this.runs.clear()}get size(){return this.runs.size}get bytes(){let ⟦2-char-id⟧=0;for(const{runs:⟦2-char-id⟧}of this.runs.values())⟦2-char-id⟧+=⟦2-char-id⟧.byteLength;return ⟦2-char-id⟧}},⟦2-char-id⟧=new class{constructor(){this.entries=new Map}take(⟦2-char-id⟧){var ⟦2-char-id⟧;const{lightHood:⟦2-char-id⟧,hood:⟦2-char-id⟧}=⟦2-char-id⟧;⟦2-char-id⟧.forgetAll&&this.entries.clear();for(const ⟦2-char-id⟧ of ⟦2-char-id⟧.forgotten)this.entries.delete(⟦2-char-id⟧);⟦2-char-id⟧.providedTag&&(⟦2-char-id⟧.providedLightData=this.hj(⟦2-char-id⟧.ids[13],⟦2-char-id⟧.providedTag).slice()),null===(⟦2-char-id⟧=⟦2-char-id⟧.borderTags)||void 0===⟦2-char-id⟧||⟦2-char-id⟧.forEach(((⟦2-char-id⟧,⟦2-char-id⟧)=>{if(⟦2-char-id⟧){const ⟦2-char-id⟧=this.hj(⟦2-char-id⟧.ids[⟦2-char-id⟧[⟦2-char-id⟧]],⟦2-char-id⟧);⟦2-char-id⟧.neighbourLightBorders[⟦2-char-id⟧]=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.neighbourLightIsUint16[⟦2-char-id⟧],⟦2-char-id⟧,⟦2-char-id⟧.chunk.size)}}))}keep(⟦2-char-id⟧,⟦2-char-id⟧){if(!⟦2-char-id⟧.lightHood.keep)return;const ⟦2-char-id⟧=⟦2-char-id⟧.hood.ids[13];⟦2-char-id⟧?this.entries.set(⟦2-char-id⟧,{tag:⟦2-char-id⟧.meshJobId,data:⟦2-char-id⟧.slice()}):this.entries.delete(⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=this.entries.get(⟦2-char-id⟧);if((null===⟦2-char-id⟧||void 0===⟦2-char-id⟧?void 0:⟦2-char-id⟧.tag)!==⟦2-char-id⟧)throw new Error(`The meshing worker holds no light ${cJ} for chunk ${JJ}${ZJ?`, but light ${⟦2-char-id⟧.tag}`:""}`);return ⟦2-char-id⟧.data}clear(){this.entries.clear()}get size(){return this.entries.size}};function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧={type:"lightEngineReport",message:⟦2-char-id⟧,failureKind:⟦2-char-id⟧};self.postMessage(⟦2-char-id⟧)}function ⟦2-char-id⟧(){if(⟦2-char-id⟧)return;⟦2-char-id⟧=!0;const ⟦2-char-id⟧={type:"lightEngineReport",message:`No wasm mesher on this worker (${HX()})`,lost:!0};self.postMessage(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧ instanceof Error?⟦2-char-id⟧.message:String(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){try{return ⟦2-char-id⟧=⟦2-char-id⟧.create(⟦2-char-id⟧,⟦2-char-id⟧),!1}catch(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.takeRefusedAllocation();⟦2-char-id⟧ instanceof ⟦2-char-id⟧&&⟦2-char-id⟧.markFailed(⟦2-char-id⟧.trap);const ⟦2-char-id⟧=⟦2-char-id⟧>0&&!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)?` (alloc_failed ${ZJ} bytes)`:"",⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧>0||⟦2-char-id⟧ instanceof ⟦2-char-id⟧;return ⟦2-char-id⟧(`Wasm mesher failed${FJ} to start: ${bX(cJ)}`,⟦2-char-id⟧?void 0:⟦2-char-id⟧?"start_refused":"start_failed"),⟦2-char-id⟧||⟦2-char-id⟧}}function ⟦2-char-id⟧(){var ⟦2-char-id⟧;null!==(⟦2-char-id⟧=⟦2-char-id⟧)&&void 0!==⟦2-char-id⟧&&⟦2-char-id⟧.isReady()?⟦2-char-id⟧.free():⟦2-char-id⟧.push(⟦2-char-id⟧),⟦2-char-id⟧=null}function ⟦2-char-id⟧(⟦2-char-id⟧){return!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)&&!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)&&⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(){if(null!==⟦2-char-id⟧)return ⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧();return"ready"===⟦2-char-id⟧?"its start failed":"failed"===⟦2-char-id⟧?⟦2-char-id⟧():`wasm ${JJ}`}self.onmessage=⟦2-char-id⟧=>{let{data:{type:⟦2-char-id⟧,data:⟦2-char-id⟧}}=⟦2-char-id⟧;switch(⟦2-char-id⟧){case"wasmInit":⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧(`Wasm did not start (${BZ()}), so this worker meshes nothing`);break;case"meshingInit":!function(⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧.clear(),⟦2-char-id⟧.clear(),⟦2-char-id⟧=0,⟦2-char-id⟧=!1,⟦2-char-id⟧=0,⟦2-char-id⟧=null,⟦2-char-id⟧&&⟦2-char-id⟧();⟦2-char-id⟧=function(⟦2-char-id⟧){const ⟦2-char-id⟧=function(⟦2-char-id⟧){var ⟦2-char-id⟧;return ⟦2-char-id⟧.isBloxdWasmReady()?{Zn:⟦2-char-id⟧.getBloxdWasm(),view:⟦2-char-id⟧.wasmView,BufferView:⟦2-char-id⟧.WasmBufferView,isReady:⟦2-char-id⟧.isBloxdWasmReady,markFailed:⟦2-char-id⟧.markBloxdWasmFailed,takeRefusedAllocation:null!==(⟦2-char-id⟧=⟦2-char-id⟧.takeBloxdWasmRefusedAllocation)&&void 0!==⟦2-char-id⟧?cJ:()=>0}:null}(⟦2-char-id⟧);return ⟦2-char-id⟧?{...cJ,trapContext:()=>{const ⟦2-char-id⟧=Math.round(⟦2-char-id⟧.getBloxdWasmMemory().buffer.byteLength/2**20),⟦2-char-id⟧=⟦2-char-id⟧.getLastBloxdWasmPanic();return`wasm memory ${cJ} MB, ${null===ZJ?"no panic message":`panic: ${function(⟦2-char-id⟧){return ⟦2-char-id⟧.replace(/\\s*\\n\\s*/g," / ").slice(0,300)}(⟦2-char-id⟧)}`}`},takeRefusedAllocation:⟦2-char-id⟧.takeBloxdWasmRefusedAllocation}:null}(⟦2-char-id⟧),⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧);⟦2-char-id⟧||⟦2-char-id⟧()}(⟦2-char-id⟧);break;case"Ln":!function(⟦2-char-id⟧){const ⟦2-char-id⟧=performance.now(),{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧.chunk,⟦2-char-id⟧={data:null,isUint16:!1,kind:"computed",source:"none",seedColumnsRead:null,ms:0,engine:null};let ⟦2-char-id⟧=!1;const ⟦2-char-id⟧=null!==⟦2-char-id⟧;⟦2-char-id⟧=!1;try{const ⟦2-char-id⟧=⟦2-char-id⟧.take(⟦2-char-id⟧.hood);⟦2-char-id⟧.take(⟦2-char-id⟧),⟦2-char-id⟧=!0;const ⟦2-char-id⟧=function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧&&!⟦2-char-id⟧.isReady()&&⟦2-char-id⟧();const ⟦2-char-id⟧=⟦2-char-id⟧;if(!⟦2-char-id⟧)throw new ⟦2-char-id⟧(`No wasm mesher on this worker (${HX()})`);let ⟦2-char-id⟧=!1;try{⟦2-char-id⟧.loadHood(⟦2-char-id⟧,function(⟦2-char-id⟧){const{chunk:⟦2-char-id⟧}=⟦2-char-id⟧;return!⟦2-char-id⟧.computeLighting||⟦2-char-id⟧.providedLightData||⟦2-char-id⟧.qn||⟦2-char-id⟧(⟦2-char-id⟧.sn,⟦2-char-id⟧.chunkJ,⟦2-char-id⟧.highestChunkJ)?1:⟦2-char-id⟧}(⟦2-char-id⟧)),⟦2-char-id⟧=!0;const ⟦2-char-id⟧=function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){!function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const{chunk:⟦2-char-id⟧,skySeedGrid:⟦2-char-id⟧,highestChunkJ:⟦2-char-id⟧,chunkJ:⟦2-char-id⟧}=⟦2-char-id⟧;if(!⟦2-char-id⟧.computeLighting)return;if(⟦2-char-id⟧.returnBuffers(⟦2-char-id⟧.reusableLightBuffers),⟦2-char-id⟧.providedLightData)return ⟦2-char-id⟧.data=⟦2-char-id⟧.providedLightData,⟦2-char-id⟧.isUint16=⟦2-char-id⟧.providedLightIsUint16,⟦2-char-id⟧.kind="provided",void(⟦2-char-id⟧.source=⟦2-char-id⟧.providedLightReused?"reused":"server");if(⟦2-char-id⟧(⟦2-char-id⟧.sn,⟦2-char-id⟧,⟦2-char-id⟧))return;if(⟦2-char-id⟧.qn)return ⟦2-char-id⟧.data=⟦2-char-id⟧.getZeroedFullChunkLightData(),⟦2-char-id⟧.isUint16=!1,void(⟦2-char-id⟧.kind="zeroedFull");const{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.computeFromNeighbours(⟦2-char-id⟧,⟦2-char-id⟧.neighboursBitmask,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,`${qJ},${jJ},${YJ}`);if(⟦2-char-id⟧.ms=⟦2-char-id⟧.lastComputeMs,⟦2-char-id⟧.engine=⟦2-char-id⟧.lastComputeKind,⟦2-char-id⟧.data=⟦2-char-id⟧.hn,⟦2-char-id⟧.isUint16=⟦2-char-id⟧.isUint16,⟦2-char-id⟧.kind="computed",⟦2-char-id⟧.source="clientBfs",function(⟦2-char-id⟧,⟦2-char-id⟧){return null!==⟦2-char-id⟧&&⟦2-char-id⟧<⟦2-char-id⟧}(⟦2-char-id⟧,⟦2-char-id⟧)){const ⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧.length);⟦2-char-id⟧.skySeedColumnsRead(⟦2-char-id⟧)&&(⟦2-char-id⟧.seedColumnsRead=⟦2-char-id⟧)}}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=performance.now(),⟦2-char-id⟧=⟦2-char-id⟧.mesh({chunk:⟦2-char-id⟧.chunk,neighboursBitmask:⟦2-char-id⟧.neighboursBitmask,light:⟦2-char-id⟧.data&&{data:⟦2-char-id⟧.data,isUint16:⟦2-char-id⟧.isUint16,kind:⟦2-char-id⟧.kind},neighbourLightBorders:⟦2-char-id⟧.neighbourLightBorders,neighbourLightIsUint16:⟦2-char-id⟧.neighbourLightIsUint16,neighbourOpenSkyFaces:⟦2-char-id⟧.neighbourOpenSkyFaces,lightOnlyLayout:⟦2-char-id⟧.lightOnly?⟦2-char-id⟧.cachedFaceLayout:null,visGraphs:!1!==⟦2-char-id⟧.visGraphs});return{...UJ,meshMs:performance.now()-⟦2-char-id⟧}}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧=0,⟦2-char-id⟧}catch(⟦2-char-id⟧){const{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧.chunk;if(⟦2-char-id⟧ instanceof ⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.data;Object.assign(⟦2-char-id⟧,{data:null,isUint16:!1,kind:"computed",source:"none",seedColumnsRead:null,ms:0,engine:null});let ⟦2-char-id⟧=⟦2-char-id⟧.reusableLightBuffers;if(⟦2-char-id⟧&&(⟦2-char-id⟧=⟦2-char-id⟧&&⟦2-char-id⟧!==⟦2-char-id⟧.providedLightData?[⟦2-char-id⟧.buffer]:[]),⟦2-char-id⟧.returnBuffers(⟦2-char-id⟧),⟦2-char-id⟧ instanceof ⟦2-char-id⟧){const ⟦2-char-id⟧=++⟦2-char-id⟧;⟦2-char-id⟧(0===(⟦2-char-id⟧&⟦2-char-id⟧-1)?`Wasm mesher could not keep a light state: ${eJ.message} (${JJ} on this thread), failing chunk ${cJ},${XJ},${AJ}`:null,"light_state_refused"),++⟦2-char-id⟧>=3&&(⟦2-char-id⟧=`its memory can\'t grow: ${EX} light states refused in a row`,⟦2-char-id⟧())}else{const ⟦2-char-id⟧=⟦2-char-id⟧<3;⟦2-char-id⟧&&⟦2-char-id⟧++,⟦2-char-id⟧(⟦2-char-id⟧?`Wasm mesher could not take chunk ${cJ},${XJ},${AJ}: ${bX(eJ)}`:null,"refused_input")}throw ⟦2-char-id⟧}if(⟦2-char-id⟧(⟦2-char-id⟧))throw ⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧.takeRefusedAllocation();⟦2-char-id⟧ instanceof ⟦2-char-id⟧&&⟦2-char-id⟧.markFailed(⟦2-char-id⟧.trap),⟦2-char-id⟧();throw ⟦2-char-id⟧(`Wasm mesher failed${qJ>0?` (alloc_failed ${⟦2-char-id⟧} bytes)`:""} on chunk ${cJ},${XJ},${AJ}: ${bX(eJ)}`,function(⟦2-char-id⟧,⟦2-char-id⟧){if(!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧))return"threw";if(⟦2-char-id⟧>0)return"abort_refused";return ⟦2-char-id⟧(⟦2-char-id⟧.trap)?"trap_out_of_memory":"trap"}(⟦2-char-id⟧,⟦2-char-id⟧)),⟦2-char-id⟧=⟦2-char-id⟧>0,⟦2-char-id⟧.isReady()&&⟦2-char-id⟧(⟦2-char-id⟧)&&(⟦2-char-id⟧=!0),⟦2-char-id⟧}}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);⟦2-char-id⟧.keep(⟦2-char-id⟧,"clientBfs"===⟦2-char-id⟧.source?⟦2-char-id⟧.data:null),"lightDataArrays"in ⟦2-char-id⟧?function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧.chunk,{skySeedGrid:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.cachedFaceLayout,⟦2-char-id⟧=⟦2-char-id⟧.data,⟦2-char-id⟧=[];⟦2-char-id⟧.seedColumnsRead&&⟦2-char-id⟧.push(⟦2-char-id⟧.seedColumnsRead.buffer);for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.push(⟦2-char-id⟧.buffer);⟦2-char-id⟧.push(⟦2-char-id⟧.buffer),⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer),⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧={type:"meshed",i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧,meshJobId:⟦2-char-id⟧.meshJobId,lightOnlyUpdate:!0,lightDataArrays:⟦2-char-id⟧,faceLayout:⟦2-char-id⟧,computedLightData:⟦2-char-id⟧,fZ:⟦2-char-id⟧.isUint16,lightSource:⟦2-char-id⟧.source,serverLightCovered:⟦2-char-id⟧.serverLightCovered,reusableSkySeedGrid:⟦2-char-id⟧,lightSeedColumnsRead:⟦2-char-id⟧.seedColumnsRead,lightMs:⟦2-char-id⟧.ms,meshMs:⟦2-char-id⟧,jobMs:performance.now()-⟦2-char-id⟧,lightEngineKind:⟦2-char-id⟧.engine};self.postMessage(⟦2-char-id⟧,⟦2-char-id⟧)}(⟦2-char-id⟧,⟦2-char-id⟧.lightDataArrays,⟦2-char-id⟧,⟦2-char-id⟧.meshMs,⟦2-char-id⟧):function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧.chunk,{skySeedGrid:⟦2-char-id⟧}=⟦2-char-id⟧,{vertexDataInfo:⟦2-char-id⟧,faceLayout:⟦2-char-id⟧,visGraphs:⟦2-char-id⟧,visNegNeighbours:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=[];⟦2-char-id⟧.seedColumnsRead&&⟦2-char-id⟧.push(⟦2-char-id⟧.seedColumnsRead.buffer);for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.vertices.byteLength>0&&⟦2-char-id⟧.push(⟦2-char-id⟧.vertices),⟦2-char-id⟧.indices.buffer.byteLength>0&&⟦2-char-id⟧.push(⟦2-char-id⟧.indices.buffer),⟦2-char-id⟧.hn&&⟦2-char-id⟧.push(⟦2-char-id⟧.hn.buffer),⟦2-char-id⟧.packedVertices&&⟦2-char-id⟧.push(⟦2-char-id⟧.packedVertices.buffer),⟦2-char-id⟧.faceGroups&&⟦2-char-id⟧.push(⟦2-char-id⟧.faceGroups.buffer);⟦2-char-id⟧.data&&⟦2-char-id⟧.push(⟦2-char-id⟧.data.buffer),⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer),⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer);const ⟦2-char-id⟧={type:"meshed",i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧,meshJobId:⟦2-char-id⟧.meshJobId,lightOnlyUpdate:!1,vertexDataInfo:⟦2-char-id⟧,faceLayout:⟦2-char-id⟧,computedLightData:⟦2-char-id⟧.data,fZ:⟦2-char-id⟧.isUint16,lightSource:⟦2-char-id⟧.source,serverLightCovered:⟦2-char-id⟧.serverLightCovered,reusableSkySeedGrid:⟦2-char-id⟧,lightSeedColumnsRead:⟦2-char-id⟧.seedColumnsRead,lightMs:⟦2-char-id⟧.ms,meshMs:⟦2-char-id⟧.meshMs,jobMs:performance.now()-⟦2-char-id⟧,buildMs:⟦2-char-id⟧.buildMs,mesherEngineKind:"wasm",lightEngineKind:⟦2-char-id⟧.engine,...void 0===⟦2-char-id⟧?{}:{visNegNeighbours:⟦2-char-id⟧},...void 0===⟦2-char-id⟧?{}:{visGraphs:⟦2-char-id⟧}};self.postMessage(⟦2-char-id⟧,⟦2-char-id⟧)}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}catch(⟦2-char-id⟧){console.error(`Worker meshChunk failed for chunk (${ZJ}, ${FJ}, ${UJ})`,⟦2-char-id⟧),⟦2-char-id⟧.keep(⟦2-char-id⟧,null);const ⟦2-char-id⟧=⟦2-char-id⟧ instanceof ⟦2-char-id⟧||⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧&&!⟦2-char-id⟧&&!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)&&!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧);!function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=[];⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer),⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer);const ⟦2-char-id⟧={type:"meshError",i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧,meshJobId:⟦2-char-id⟧,errorMessage:⟦2-char-id⟧ instanceof Error?⟦2-char-id⟧.message:String(⟦2-char-id⟧),cachesTaken:⟦2-char-id⟧,reusableLightBuffer:⟦2-char-id⟧,reusableSkySeedGrid:⟦2-char-id⟧,lostMesher:⟦2-char-id⟧,refusedState:⟦2-char-id⟧};self.postMessage(⟦2-char-id⟧,⟦2-char-id⟧)}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧.meshJobId,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧.data,⟦2-char-id⟧.skySeedGrid,⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧||⟦2-char-id⟧()}}(⟦2-char-id⟧);break;default:console.error("Unrecognised meshing worker message type:",⟦2-char-id⟧)}}})();', "Worker", void 0, ⟦2-char-id⟧.p + "meshing.worker.e7c4a4f0.worker.js")
+      return ⟦2-char-id⟧()('(()=>{var ⟦2-char-id⟧={16:(⟦2-char-id⟧,TB,⟦2-char-id⟧)=>{⟦2-char-id⟧.exports=⟦2-char-id⟧.p+"static/media/bloxd_wasm_bg.83d4d2ae0f6df4b285af.wasm"},22:(⟦2-char-id⟧,TB,⟦2-char-id⟧)=>{⟦2-char-id⟧.exports=⟦2-char-id⟧.p+"static/media/bloxd_wasm_textures_bg.1218b8b300c47f90e7ad.wasm"}},⟦2-char-id⟧={};function ⟦2-char-id⟧(⟦2-char-id⟧){var ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(void 0!==⟦2-char-id⟧)return ⟦2-char-id⟧.exports;var ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧]={exports:{}};return ⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧,⟦2-char-id⟧.exports,⟦2-char-id⟧),⟦2-char-id⟧.exports}⟦2-char-id⟧.m=⟦2-char-id⟧,⟦2-char-id⟧.d=(⟦2-char-id⟧,⟦2-char-id⟧)=>{for(var ⟦2-char-id⟧ in ⟦2-char-id⟧)⟦2-char-id⟧.o(⟦2-char-id⟧,⟦2-char-id⟧)&&!⟦2-char-id⟧.o(⟦2-char-id⟧,⟦2-char-id⟧)&&Object.defineProperty(⟦2-char-id⟧,⟦2-char-id⟧,{enumerable:!0,get:⟦2-char-id⟧[⟦2-char-id⟧]})},⟦2-char-id⟧.f={},⟦2-char-id⟧.e=⟦2-char-id⟧=>Promise.all(Object.keys(⟦2-char-id⟧.f).reduce(((⟦2-char-id⟧,⟦2-char-id⟧)=>(⟦2-char-id⟧.f[⟦2-char-id⟧](⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧)),[])),⟦2-char-id⟧.u=⟦2-char-id⟧=>"static/js/l9xvfg.wasmZstdDecoder.3bc057ed.chunk.worker.js",⟦2-char-id⟧.o=(⟦2-char-id⟧,⟦2-char-id⟧)=>Object.prototype.hasOwnProperty.call(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧.r=⟦2-char-id⟧=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(⟦2-char-id⟧,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(⟦2-char-id⟧,"__esModule",{value:!0})},⟦2-char-id⟧.U=function(⟦2-char-id⟧){var ⟦2-char-id⟧=new URL(⟦2-char-id⟧,"x:/"),⟦2-char-id⟧={};for(var ⟦2-char-id⟧ in ⟦2-char-id⟧)⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧[⟦2-char-id⟧];for(var ⟦2-char-id⟧ in ⟦2-char-id⟧.href=⟦2-char-id⟧,⟦2-char-id⟧.pathname=⟦2-char-id⟧.replace(/[?#].*/,""),⟦2-char-id⟧.origin=⟦2-char-id⟧.protocol="",⟦2-char-id⟧.toString=⟦2-char-id⟧.toJSON=()=>⟦2-char-id⟧,⟦2-char-id⟧)Object.defineProperty(this,⟦2-char-id⟧,{enumerable:!0,configurable:!0,value:⟦2-char-id⟧[⟦2-char-id⟧]})},⟦2-char-id⟧.U.prototype=URL.prototype,⟦2-char-id⟧.p="/",(()=>{var ⟦2-char-id⟧={0:1};⟦2-char-id⟧.f.i=(⟦2-char-id⟧,⟦2-char-id⟧)=>{⟦2-char-id⟧[⟦2-char-id⟧]||importScripts(⟦2-char-id⟧.p+⟦2-char-id⟧.u(⟦2-char-id⟧))};var ⟦2-char-id⟧=self.webpackChunk_bloxd_web=self.webpackChunk_bloxd_web||[],⟦2-char-id⟧=⟦2-char-id⟧.push.bind(⟦2-char-id⟧);⟦2-char-id⟧.push=⟦2-char-id⟧=>{var ⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧=⟦2-char-id⟧[2];for(var ⟦2-char-id⟧ in ⟦2-char-id⟧)⟦2-char-id⟧.o(⟦2-char-id⟧,⟦2-char-id⟧)&&(⟦2-char-id⟧.m[⟦2-char-id⟧]=⟦2-char-id⟧[⟦2-char-id⟧]);for(⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧);⟦2-char-id⟧.length;)⟦2-char-id⟧[⟦2-char-id⟧.pop()]=1;⟦2-char-id⟧(⟦2-char-id⟧)}})();var ⟦2-char-id⟧={};⟦2-char-id⟧.r(⟦2-char-id⟧),⟦2-char-id⟧.d(⟦2-char-id⟧,{eo:()=>⟦2-char-id⟧,EnvelopeKind:()=>⟦2-char-id⟧,Bk:()=>⟦2-char-id⟧,PhysicsEngine:()=>⟦2-char-id⟧,Tk:()=>⟦2-char-id⟧,Vk:()=>⟦2-char-id⟧,yk:()=>⟦2-char-id⟧,lk:()=>⟦2-char-id⟧,Jk:()=>⟦2-char-id⟧,Yk:()=>⟦2-char-id⟧,gk:()=>⟦2-char-id⟧,kk:()=>⟦2-char-id⟧,Lk:()=>⟦2-char-id⟧,Ok:()=>⟦2-char-id⟧,default:()=>⟦2-char-id⟧,initSync:()=>⟦2-char-id⟧,Dk:()=>⟦2-char-id⟧,uk:()=>⟦2-char-id⟧,Hk:()=>⟦2-char-id⟧,Ek:()=>⟦2-char-id⟧,vk:()=>⟦2-char-id⟧,mk:()=>⟦2-char-id⟧,ik:()=>⟦2-char-id⟧,Nk:()=>⟦2-char-id⟧,tk:()=>⟦2-char-id⟧,fk:()=>⟦2-char-id⟧,sk:()=>⟦2-char-id⟧,Mk:()=>⟦2-char-id⟧,zk:()=>⟦2-char-id⟧,wk:()=>⟦2-char-id⟧,Uk:()=>⟦2-char-id⟧});var ⟦2-char-id⟧={};⟦2-char-id⟧.r(⟦2-char-id⟧),⟦2-char-id⟧.d(⟦2-char-id⟧,{BloxdWasmFetchError:()=>⟦2-char-id⟧,BloxdWasmHttpError:()=>⟦2-char-id⟧,BloxdWasmIntegrityError:()=>⟦2-char-id⟧,BloxdWasmTimeoutError:()=>⟦2-char-id⟧,PROMISE_HOOK_CODES:()=>⟦2-char-id⟧,RETRY_DELAYS_MS:()=>⟦2-char-id⟧,STALL_TIMEOUT_MS:()=>⟦2-char-id⟧,WASM_HOOKS_ENFORCED:()=>⟦2-char-id⟧,WasmBufferView:()=>⟦2-char-id⟧,bloxdTextureWasmUrl:()=>⟦2-char-id⟧,bloxdWasmCore:()=>⟦2-char-id⟧,bloxdWasmDownloadHref:()=>⟦2-char-id⟧,compileBloxdTextureWasm:()=>⟦2-char-id⟧,compileBloxdWasmBrowser:()=>⟦2-char-id⟧,describeBloxdWasmFailure:()=>⟦2-char-id⟧,fetchBytes:()=>⟦2-char-id⟧,getBloxdWasm:()=>⟦2-char-id⟧,getBloxdWasmBuild:()=>⟦2-char-id⟧,getBloxdWasmFailureReason:()=>⟦2-char-id⟧,getBloxdWasmFailureStage:()=>⟦2-char-id⟧,getBloxdWasmFailureStatus:()=>⟦2-char-id⟧,getBloxdWasmMemory:()=>⟦2-char-id⟧,getBloxdWasmModule:()=>⟦2-char-id⟧,getBloxdWasmStatus:()=>⟦2-char-id⟧,getBloxdWasmTamper:()=>⟦2-char-id⟧,getLastBloxdWasmPanic:()=>⟦2-char-id⟧,initBloxdWasmBrowser:()=>⟦2-char-id⟧,initBloxdWasmFromModule:()=>⟦2-char-id⟧,isBloxdWasmDownloadFailureRetryable:()=>⟦2-char-id⟧,isBloxdWasmLoadUnstreamed:()=>⟦2-char-id⟧,isBloxdWasmReady:()=>⟦2-char-id⟧,isEnforceableWasmReport:()=>⟦2-char-id⟧,isPromiseHookReport:()=>⟦2-char-id⟧,isPunishedWasmReport:()=>⟦2-char-id⟧,isRendererWasmReport:()=>⟦2-char-id⟧,isWeightedWasmReport:()=>⟦2-char-id⟧,loadBloxdWasmBrowser:()=>⟦2-char-id⟧,markBloxdWasmFailed:()=>⟦2-char-id⟧,onBloxdWasmFailed:()=>⟦2-char-id⟧,onBloxdWasmMemoryGrown:()=>⟦2-char-id⟧,takeBloxdWasmRefusedAllocation:()=>⟦2-char-id⟧,textureLoadFailure:()=>⟦2-char-id⟧,wasmMemoryControl:()=>⟦2-char-id⟧,wasmView:()=>⟦2-char-id⟧,watchBloxdRenderer:()=>⟦2-char-id⟧});class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.mHKB(⟦2-char-id⟧,0)}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.sWkg(this.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.WMqO(this.__wbg_ptr)>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.pq5v();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(){return ⟦2-char-id⟧.ZI30(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.iz9J(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.T9oq(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);const ⟦2-char-id⟧=Object.freeze({Js:0,0:"Js",Error:1,1:"Error",LeaveRoom:2,2:"LeaveRoom",RoomState:3,3:"RoomState",RoomStatePatch:4,4:"RoomStatePatch",RoomDataNone:5,5:"RoomDataNone",RoomDataBin:6,6:"RoomDataBin",RoomDataBytes:7,7:"RoomDataBytes",Ignored:8,8:"Ignored",StringType:16,16:"StringType"});class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.UIrT(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.nALF(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.zOah(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(){⟦2-char-id⟧.sfkk(this.__wbg_ptr)}static ⟦2-char-id⟧(){return ⟦2-char-id⟧.Sx74()>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.OcJh(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.GFEM(this.__wbg_ptr);return 0===⟦2-char-id⟧[0]?void 0:⟦2-char-id⟧[1]}⟦2-char-id⟧(){return ⟦2-char-id⟧.xvRs(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.uEzX(this.__wbg_ptr)>>>0}static ⟦2-char-id⟧(){return ⟦2-char-id⟧.S7Ni()>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.gT8u();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(){return ⟦2-char-id⟧.VuOL(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.w2eH(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.vj7t(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.T2fq(this.__wbg_ptr,⟦2-char-id⟧)>>>0}reserve(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.HGEC(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.GQiQ(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}text(){let ⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧.h3D2(this.__wbg_ptr);return ⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1])}finally{⟦2-char-id⟧.Bg8x(⟦2-char-id⟧,⟦2-char-id⟧,1)}}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.FOkj(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.PKSN(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.oebK(this.__wbg_ptr);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.i1aP(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.CNW0(this.__wbg_ptr);var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],8*⟦2-char-id⟧[1],8),⟦2-char-id⟧}⟦2-char-id⟧(){return ⟦2-char-id⟧.exuy(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.Wv5L(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.gpUB(this.__wbg_ptr)>>>0}constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.vUX7(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return this.__wbg_ptr=⟦2-char-id⟧[0],⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.P6vQ(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.WYkW(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.ZTfj(this.__wbg_ptr)>>>0}resume(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.FPyh(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.WBli(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.SFAM(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.U9Fu(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.Zw2F(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.YZxl(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.Nsff(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧.__wbg_ptr);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.NkS4(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧.T4dZ(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{static __wrap(⟦2-char-id⟧){const ⟦2-char-id⟧=Object.create(⟦2-char-id⟧.prototype);return ⟦2-char-id⟧.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(⟦2-char-id⟧,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧),⟦2-char-id⟧}__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.Mekz(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.q9gF(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.SyAt(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.WGMD(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return 0!==⟦2-char-id⟧.jGDg(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){⟦2-char-id⟧.hBMd(this.__wbg_ptr)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.yxuK(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[3])throw ⟦2-char-id⟧(⟦2-char-id⟧[2]);var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],1*⟦2-char-id⟧[1],1),⟦2-char-id⟧}evict(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.tX4a(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(){⟦2-char-id⟧.AenT(this.__wbg_ptr)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧.oMk0(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.LfLu(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.tcqA(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.WWKW(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧.woUI(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧.ZbEr(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.Kx3Z(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.LVwN(this.__wbg_ptr)>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.qXd1();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}static ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.o9Jd();return ⟦2-char-id⟧.__wrap(⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.GtiM(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.DqqM(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.mbBT(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.aPAt(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.Tr52(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧.L4Dv(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧.TBHF(this.__wbg_ptr,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.ho5I(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.YQiZ(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.zyQE(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.S9a5(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.ekc0(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}steer(){return ⟦2-char-id⟧.xW45(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.I9dQ(this.__wbg_ptr);var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],8*⟦2-char-id⟧[1],8),⟦2-char-id⟧}⟦2-char-id⟧(){return ⟦2-char-id⟧.Qx59(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.gARt(this.__wbg_ptr);var ⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧=(⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧>>>=0,(null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Int32Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧).subarray(⟦2-char-id⟧/4,⟦2-char-id⟧/4+⟦2-char-id⟧)).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.HvIW(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.VFyw(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.ymtw(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.hTBy(this.__wbg_ptr)>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.e2b8();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}run(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.CzS5(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.zudT(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.dJro(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.QulG(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;return ⟦2-char-id⟧.dVMu(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.DTCy(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.TIhB(this.__wbg_ptr,⟦2-char-id⟧)>>>0}constructor(){const ⟦2-char-id⟧=⟦2-char-id⟧.v8w2();return this.__wbg_ptr=⟦2-char-id⟧,⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}scan(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.sXd0(this.__wbg_ptr,⟦2-char-id⟧.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.I2iH(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.mLSx(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.QIOu(this.__wbg_ptr)>>>0}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.plSl(⟦2-char-id⟧,0)}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.d8Ye(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}compute(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)?0:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM,⟦2-char-id⟧.ZG5t),⟦2-char-id⟧=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧.UGai(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧)?Number.MAX_SAFE_INTEGER:⟦2-char-id⟧|0,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM,⟦2-char-id⟧.ZG5t),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.ndet(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.dhV9(this.__wbg_ptr)}⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.A4OC(this.__wbg_ptr,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.oBDq(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.PS49(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.eLe6(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.qBCa(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.QU8L(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.lzVs(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.kttQ(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}⟦2-char-id⟧(){return ⟦2-char-id⟧.dKdx(this.__wbg_ptr)>>>0}mesh(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.BKiM(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)?0:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)?0:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.wjAm(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return this.__wbg_ptr=⟦2-char-id⟧[0],⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.rVWX(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[3])throw ⟦2-char-id⟧(⟦2-char-id⟧[2]);var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],1*⟦2-char-id⟧[1],1),⟦2-char-id⟧}⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧.yCPn(this.__wbg_ptr,⟦2-char-id⟧(⟦2-char-id⟧)?16777215:⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.wdvW(this.__wbg_ptr,⟦2-char-id⟧)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.oOFC(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.Z01O(this.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return 0!==⟦2-char-id⟧[0]}⟦2-char-id⟧(){return ⟦2-char-id⟧.vkgX(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.TvfV(this.__wbg_ptr)>>>0}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);class ⟦2-char-id⟧{__destroy_into_raw(){const ⟦2-char-id⟧=this.__wbg_ptr;return this.__wbg_ptr=0,⟦2-char-id⟧.unregister(this),⟦2-char-id⟧}free(){const ⟦2-char-id⟧=this.__destroy_into_raw();⟦2-char-id⟧.U09M(⟦2-char-id⟧,0)}compute(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)?0:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM,⟦2-char-id⟧.ZG5t),⟦2-char-id⟧=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧.kiOs(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧)?Number.MAX_SAFE_INTEGER:⟦2-char-id⟧|0,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM,⟦2-char-id⟧.ZG5t),⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧.JDul(this.__wbg_ptr,⟦2-char-id⟧,⟦2-char-id⟧)}⟦2-char-id⟧(){return ⟦2-char-id⟧.PjRA(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){return ⟦2-char-id⟧.te9D(this.__wbg_ptr)>>>0}⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.bte3(this.__wbg_ptr,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return ⟦2-char-id⟧[0]>>>0}constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.vnXH(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return this.__wbg_ptr=⟦2-char-id⟧[0],⟦2-char-id⟧.register(this,this.__wbg_ptr,this),this}⟦2-char-id⟧(){return ⟦2-char-id⟧.NVzn(this.__wbg_ptr)>>>0}⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.F7vM(this.__wbg_ptr);if(⟦2-char-id⟧[2])throw ⟦2-char-id⟧(⟦2-char-id⟧[1]);return 0!==⟦2-char-id⟧[0]}⟦2-char-id⟧(){return ⟦2-char-id⟧.mAAE(this.__wbg_ptr)>>>0}}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.dYYN();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM,⟦2-char-id⟧.ZG5t),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.XWFP(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1])}finally{⟦2-char-id⟧.Bg8x(⟦2-char-id⟧,⟦2-char-id⟧,1)}}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.oh9j();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){return 0!==⟦2-char-id⟧.drZv(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.hTqM,⟦2-char-id⟧.ZG5t),⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.UfqU(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧[1])throw ⟦2-char-id⟧(⟦2-char-id⟧[0])}function ⟦2-char-id⟧(){⟦2-char-id⟧.ckOG()}function ⟦2-char-id⟧(){return ⟦2-char-id⟧.QZKp()>>>0}function ⟦2-char-id⟧(⟦2-char-id⟧){return 0!==⟦2-char-id⟧.RVIA(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){return 0!==⟦2-char-id⟧.R6Pt(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧.kmmR(⟦2-char-id⟧)}function ⟦2-char-id⟧(){return ⟦2-char-id⟧.egNP()>>>0}function ⟦2-char-id⟧(){return ⟦2-char-id⟧.kew6()>>>0}function ⟦2-char-id⟧(){return 0!==⟦2-char-id⟧.BGuw()}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.fN9M();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.X0AN();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧.ZSBl();var ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1]).slice();return ⟦2-char-id⟧.Bg8x(⟦2-char-id⟧[0],4*⟦2-char-id⟧[1],4),⟦2-char-id⟧}function ⟦2-char-id⟧(){return ⟦2-char-id⟧.tdPp()>>>0}function ⟦2-char-id⟧(){⟦2-char-id⟧.LTQK()}function ⟦2-char-id⟧(){let ⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧.xZUQ();return ⟦2-char-id⟧=⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧(⟦2-char-id⟧[0],⟦2-char-id⟧[1])}finally{⟦2-char-id⟧.Bg8x(⟦2-char-id⟧,⟦2-char-id⟧,1)}}function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧.Xh7o(⟦2-char-id⟧(⟦2-char-id⟧))}function ⟦2-char-id⟧(){return{__proto__:null,h3dK:{__proto__:null,k4aZ:function(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧(Error(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)))},kGv4:function(⟦2-char-id⟧,⟦2-char-id⟧){throw new Error(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧))},JmI5:function(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧).call()},BBwt:function(⟦2-char-id⟧,⟦2-char-id⟧){console.error(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧))},K970:function(){return performance.now()},KWa1:function(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧)}}}}Symbol.dispose&&(⟦2-char-id⟧.prototype[Symbol.dispose]=⟦2-char-id⟧.prototype.free);const ⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.mHKB(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.UIrT(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.FOkj(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.Mekz(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.HvIW(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.QulG(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.plSl(⟦2-char-id⟧,1))),⟦2-char-id⟧="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((⟦2-char-id⟧=>⟦2-char-id⟧.U09M(⟦2-char-id⟧,1)));function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧===⟦2-char-id⟧.length&&⟦2-char-id⟧.push(⟦2-char-id⟧.length+1);const ⟦2-char-id⟧=⟦2-char-id⟧;return ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){if(!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧))throw new Error(`expected instance of ${TB.name}`)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧>>>=0,⟦2-char-id⟧().subarray(⟦2-char-id⟧/8,⟦2-char-id⟧/8+⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧>>>=0,⟦2-char-id⟧().subarray(⟦2-char-id⟧/4,⟦2-char-id⟧/4+⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧>>>=0,⟦2-char-id⟧().subarray(⟦2-char-id⟧/1,⟦2-char-id⟧/1+⟦2-char-id⟧)}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(){return null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Float64Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return function(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧+=⟦2-char-id⟧,⟦2-char-id⟧>=⟦2-char-id⟧&&(⟦2-char-id⟧=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),⟦2-char-id⟧.decode(),⟦2-char-id⟧=⟦2-char-id⟧);return ⟦2-char-id⟧.decode(⟦2-char-id⟧().subarray(⟦2-char-id⟧,⟦2-char-id⟧+⟦2-char-id⟧))}(⟦2-char-id⟧>>>0,⟦2-char-id⟧)}let ⟦2-char-id⟧=null;let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(){return null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Uint32Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(){return null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧[⟦2-char-id⟧]}let ⟦2-char-id⟧=new Array(1024).fill(void 0);⟦2-char-id⟧.push(void 0,null,!0,!1);let ⟦2-char-id⟧=⟦2-char-id⟧.length;function ⟦2-char-id⟧(⟦2-char-id⟧){return void 0===⟦2-char-id⟧||null===⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(2*⟦2-char-id⟧.length,2)>>>0;return(null!==⟦2-char-id⟧&&0!==⟦2-char-id⟧.byteLength||(⟦2-char-id⟧=new Uint16Array(⟦2-char-id⟧.memory.buffer)),⟦2-char-id⟧).set(⟦2-char-id⟧,⟦2-char-id⟧/2),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(4*⟦2-char-id⟧.length,4)>>>0;return ⟦2-char-id⟧().set(⟦2-char-id⟧,⟦2-char-id⟧/4),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(1*⟦2-char-id⟧.length,1)>>>0;return ⟦2-char-id⟧().set(⟦2-char-id⟧,⟦2-char-id⟧/1),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(8*⟦2-char-id⟧.length,8)>>>0;return ⟦2-char-id⟧().set(⟦2-char-id⟧,⟦2-char-id⟧/8),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(void 0===⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.encode(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧.length,1)>>>0;return ⟦2-char-id⟧().subarray(⟦2-char-id⟧,⟦2-char-id⟧+⟦2-char-id⟧.length).set(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧}let ⟦2-char-id⟧=⟦2-char-id⟧.length,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,1)>>>0;const ⟦2-char-id⟧=⟦2-char-id⟧();let ⟦2-char-id⟧=0;for(;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧);if(⟦2-char-id⟧>127)break;⟦2-char-id⟧[⟦2-char-id⟧+⟦2-char-id⟧]=⟦2-char-id⟧}if(⟦2-char-id⟧!==⟦2-char-id⟧){0!==⟦2-char-id⟧&&(⟦2-char-id⟧=⟦2-char-id⟧.slice(⟦2-char-id⟧)),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧+3*⟦2-char-id⟧.length,1)>>>0;const ⟦2-char-id⟧=⟦2-char-id⟧().subarray(⟦2-char-id⟧+⟦2-char-id⟧,⟦2-char-id⟧+⟦2-char-id⟧);⟦2-char-id⟧+=⟦2-char-id⟧.encodeInto(⟦2-char-id⟧,⟦2-char-id⟧).written,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,1)>>>0}return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧);return function(⟦2-char-id⟧){⟦2-char-id⟧<1028||(⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧)}(⟦2-char-id⟧),⟦2-char-id⟧}let ⟦2-char-id⟧=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});⟦2-char-id⟧.decode();const ⟦2-char-id⟧=2146435072;let ⟦2-char-id⟧=0;const ⟦2-char-id⟧=new TextEncoder;"encodeInto"in ⟦2-char-id⟧||(⟦2-char-id⟧.encodeInto=function(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.encode(⟦2-char-id⟧);return ⟦2-char-id⟧.set(⟦2-char-id⟧),{read:⟦2-char-id⟧.length,written:⟦2-char-id⟧.length}});let ⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧=0;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.exports,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧.ZCFe(),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){if(void 0!==⟦2-char-id⟧)return ⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&(Object.getPrototypeOf(⟦2-char-id⟧)===Object.prototype?({module:⟦2-char-id⟧}=⟦2-char-id⟧):console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const ⟦2-char-id⟧=⟦2-char-id⟧();⟦2-char-id⟧ instanceof WebAssembly.Module||(⟦2-char-id⟧=new WebAssembly.Module(⟦2-char-id⟧));return ⟦2-char-id⟧(new WebAssembly.Instance(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧)}async function ⟦2-char-id⟧(⟦2-char-id⟧){if(void 0!==⟦2-char-id⟧)return ⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&(Object.getPrototypeOf(⟦2-char-id⟧)===Object.prototype?({module_or_path:⟦2-char-id⟧}=⟦2-char-id⟧):console.warn("using deprecated parameters for the initialization function; pass a single object instead"));const ⟦2-char-id⟧=⟦2-char-id⟧();("string"===typeof ⟦2-char-id⟧||"function"===typeof Request&&⟦2-char-id⟧ instanceof Request||"function"===typeof URL&&⟦2-char-id⟧ instanceof URL)&&(⟦2-char-id⟧=fetch(⟦2-char-id⟧));const{instance:⟦2-char-id⟧,module:⟦2-char-id⟧}=await async function(⟦2-char-id⟧,⟦2-char-id⟧){if("function"===typeof Response&&⟦2-char-id⟧ instanceof Response){if(!⟦2-char-id⟧.ok)throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching \'${BB.url}\'`);if("function"===typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(⟦2-char-id⟧,⟦2-char-id⟧)}catch(⟦2-char-id⟧){if(!function(⟦2-char-id⟧){switch(⟦2-char-id⟧){case"basic":case"cors":case"default":return!0}return!1}(⟦2-char-id⟧.type)||"application/wasm"===⟦2-char-id⟧.headers.get("Content-Type"))throw ⟦2-char-id⟧;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n",⟦2-char-id⟧)}const ⟦2-char-id⟧=await ⟦2-char-id⟧.arrayBuffer();return await WebAssembly.instantiate(⟦2-char-id⟧,⟦2-char-id⟧)}{const ⟦2-char-id⟧=await WebAssembly.instantiate(⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧ instanceof WebAssembly.Instance?{instance:⟦2-char-id⟧,module:⟦2-char-id⟧}:⟦2-char-id⟧}}(await ⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)}const ⟦2-char-id⟧=Reflect.apply,⟦2-char-id⟧=Object.getOwnPropertyDescriptor,⟦2-char-id⟧=Object.getPrototypeOf,⟦2-char-id⟧=Promise,⟦2-char-id⟧=Object.getPrototypeOf((async()=>{})()).then;function ⟦2-char-id⟧(⟦2-char-id⟧){return new ⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧;try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧,⟦2-char-id⟧]),⟦2-char-id⟧=!0}catch{⟦2-char-id⟧=!1}⟦2-char-id⟧||⟦2-char-id⟧.then(⟦2-char-id⟧,⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧?.get?⟦2-char-id⟧(⟦2-char-id⟧.get,⟦2-char-id⟧,[]):⟦2-char-id⟧?.value}const ⟦2-char-id⟧="undefined"===typeof WebAssembly?void 0:WebAssembly.Module.prototype,⟦2-char-id⟧="undefined"===typeof WebAssembly?void 0:WebAssembly.Instance.prototype,⟦2-char-id⟧=[["to",Object.prototype,"then",!0],["ta",ArrayBuffer.prototype,"then",!0],["tm",⟦2-char-id⟧,"then",!0],["ti",⟦2-char-id⟧,"then",!0],["pt",Promise.prototype,"then",!1],["pk",Promise.prototype,"constructor",!1],["pg",globalThis,"Promise",!1],["pr",Promise,"race",!1],["pa",Promise,"all",!1]],⟦2-char-id⟧=⟦2-char-id⟧.map((⟦2-char-id⟧=>{let[,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧]=⟦2-char-id⟧;if(void 0!==⟦2-char-id⟧)return ⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧):⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)})),⟦2-char-id⟧=⟦2-char-id⟧.map((⟦2-char-id⟧=>{let[⟦2-char-id⟧]=⟦2-char-id⟧;return`wh:${TB}`}));function ⟦2-char-id⟧(){for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++){const[⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧]=⟦2-char-id⟧[⟦2-char-id⟧];let ⟦2-char-id⟧;try{⟦2-char-id⟧=void 0===⟦2-char-id⟧||(⟦2-char-id⟧?void 0===⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)&&⟦2-char-id⟧(⟦2-char-id⟧)===⟦2-char-id⟧[⟦2-char-id⟧]:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)===⟦2-char-id⟧[⟦2-char-id⟧])}catch{⟦2-char-id⟧=!1}if(!⟦2-char-id⟧)return`wh:${TB}`}return null}let ⟦2-char-id⟧=null;class ⟦2-char-id⟧ extends Error{retryable;constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){super(⟦2-char-id⟧,⟦2-char-id⟧),this.retryable=⟦2-char-id⟧}}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{status;constructor(⟦2-char-id⟧,⟦2-char-id⟧){super(⟦2-char-id⟧,⟦2-char-id⟧>=500),this.status=⟦2-char-id⟧}}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{}class ⟦2-char-id⟧ extends Error{}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧?"integrity":⟦2-char-id⟧ instanceof ⟦2-char-id⟧?"timeout":⟦2-char-id⟧ instanceof ⟦2-char-id⟧?"fetch":"compile"}const ⟦2-char-id⟧=15⟦2-char-id⟧,⟦2-char-id⟧=[1⟦2-char-id⟧,3⟦2-char-id⟧],⟦2-char-id⟧=globalThis.crypto?.subtle,⟦2-char-id⟧=⟦2-char-id⟧?.digest,⟦2-char-id⟧=!0===globalThis.isSecureContext,⟦2-char-id⟧=Reflect.apply,⟦2-char-id⟧=Object.defineProperty,⟦2-char-id⟧="undefined"===typeof Response?void 0:Response.prototype.arrayBuffer,⟦2-char-id⟧=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,⟦2-char-id⟧="undefined"===typeof Response?void 0:Response.prototype.clone,⟦2-char-id⟧="undefined"===typeof Response?void 0:Object.getOwnPropertyDescriptor(Response.prototype,"body")?.get,⟦2-char-id⟧="undefined"===typeof Response?void 0:Object.getOwnPropertyDescriptor(Response.prototype,"type")?.get,⟦2-char-id⟧="undefined"===typeof ReadableStream?void 0:ReadableStream.prototype.getReader,⟦2-char-id⟧="undefined"===typeof ReadableStreamDefaultReader?void 0:ReadableStreamDefaultReader.prototype.read,⟦2-char-id⟧=Uint8Array.prototype.set,⟦2-char-id⟧=Uint8Array,⟦2-char-id⟧="undefined"===typeof fetch?void 0:fetch,⟦2-char-id⟧="undefined"===typeof WebAssembly?void 0:WebAssembly,⟦2-char-id⟧=⟦2-char-id⟧?.compile,⟦2-char-id⟧=⟦2-char-id⟧?.compileStreaming,⟦2-char-id⟧=Array.from({length:256},((⟦2-char-id⟧,⟦2-char-id⟧)=>⟦2-char-id⟧.toString(16).padStart(2,"0"))),⟦2-char-id⟧=new Set;function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧.has(⟦2-char-id⟧.href)}async function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧??=⟦2-char-id⟧(),!⟦2-char-id⟧&&!⟦2-char-id⟧)return;let ⟦2-char-id⟧="";try{const ⟦2-char-id⟧=await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,["SHA-256",⟦2-char-id⟧]),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧);for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧+=⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]]}catch{}if(⟦2-char-id⟧!==⟦2-char-id⟧.sha256)throw ⟦2-char-id⟧&&⟦2-char-id⟧.onMismatch(),new ⟦2-char-id⟧(⟦2-char-id⟧?`${BB} is not the module this build ships`:`${BB} could not be hashed`)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){let{hideThen:⟦2-char-id⟧=!1,priority:⟦2-char-id⟧}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const ⟦2-char-id⟧={useLoadedFetch:!1};return ⟦2-char-id⟧((()=>⟦2-char-id⟧(⟦2-char-id⟧.href,((⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)=>async function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=void 0===⟦2-char-id⟧?{signal:⟦2-char-id⟧}:{signal:⟦2-char-id⟧,priority:⟦2-char-id⟧};⟦2-char-id⟧=await(⟦2-char-id⟧.useLoadedFetch&&⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,globalThis,[⟦2-char-id⟧,⟦2-char-id⟧]):fetch(⟦2-char-id⟧,⟦2-char-id⟧))}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Fetching ${BB} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}try{⟦2-char-id⟧=⟦2-char-id⟧.ok,⟦2-char-id⟧=⟦2-char-id⟧.status,⟦2-char-id⟧=⟦2-char-id⟧.headers.get("Content-Type")}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧.useLoadedFetch=!0,⟦2-char-id⟧(`Reading ${BB}\'s response failed`,⟦2-char-id⟧,⟦2-char-id⟧)}if(!⟦2-char-id⟧)throw new ⟦2-char-id⟧(`Fetching ${BB} failed: HTTP ${oB}`,⟦2-char-id⟧);⟦2-char-id⟧();const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧=null!==⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧&&void 0!==⟦2-char-id⟧&&function(⟦2-char-id⟧){return void 0!==⟦2-char-id⟧&&"default"===⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])}(⟦2-char-id⟧),⟦2-char-id⟧="application/wasm"===⟦2-char-id⟧?.trim().toLowerCase(),⟦2-char-id⟧=⟦2-char-id⟧&&!⟦2-char-id⟧&&⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧&&(!⟦2-char-id⟧||function(⟦2-char-id⟧){try{return ⟦2-char-id⟧(⟦2-char-id⟧),!0}catch{return!1}}(⟦2-char-id⟧)),⟦2-char-id⟧=⟦2-char-id⟧??function(⟦2-char-id⟧){try{const ⟦2-char-id⟧=⟦2-char-id⟧.clone();return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),⟦2-char-id⟧}catch{return null}}(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧&&void 0!==⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧),!0)):null;⟦2-char-id⟧?function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]):⟦2-char-id⟧.body;if(!⟦2-char-id⟧)return void ⟦2-char-id⟧();const ⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]):⟦2-char-id⟧.getReader(),⟦2-char-id⟧=()=>{⟦2-char-id⟧(⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]):⟦2-char-id⟧.read(),(⟦2-char-id⟧=>{⟦2-char-id⟧.done?⟦2-char-id⟧():(⟦2-char-id⟧(),⟦2-char-id⟧())}),⟦2-char-id⟧)};⟦2-char-id⟧()}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧):⟦2-char-id⟧();if(!⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧&&⟦2-char-id⟧;let ⟦2-char-id⟧;⟦2-char-id⟧?console.warn(`${BB} came in a constructed Response, not a fetched one, so it compiles without streaming`):⟦2-char-id⟧?console.warn(`${BB} came in a Response that takes no own properties, so it compiles without streaming`):⟦2-char-id⟧&&console.warn(`${BB} was served as ${kB}, not application/wasm, so it compiles without streaming`);try{⟦2-char-id⟧=function(⟦2-char-id⟧){const ⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]));return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[new ⟦2-char-id⟧(⟦2-char-id⟧)]),⟦2-char-id⟧}(await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧))}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧||(⟦2-char-id⟧.useLoadedFetch=!0),⟦2-char-id⟧(`Downloading ${BB} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}const ⟦2-char-id⟧=await function(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}(⟦2-char-id⟧);return void 0!==⟦2-char-id⟧&&await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧&&⟦2-char-id⟧.add(⟦2-char-id⟧),⟦2-char-id⟧}let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧(⟦2-char-id⟧)}catch(⟦2-char-id⟧){if(⟦2-char-id⟧.aborted||⟦2-char-id⟧ instanceof TypeError)throw ⟦2-char-id⟧(`Downloading ${BB} failed`,⟦2-char-id⟧,⟦2-char-id⟧);throw ⟦2-char-id⟧}if(⟦2-char-id⟧&&void 0!==⟦2-char-id⟧){let ⟦2-char-id⟧;try{⟦2-char-id⟧=new ⟦2-char-id⟧(await ⟦2-char-id⟧)}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Downloading ${BB} failed: its copy for checking broke off`,⟦2-char-id⟧,⟦2-char-id⟧)}await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}return ⟦2-char-id⟧}(⟦2-char-id⟧.href,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)))))}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,"then",{__proto__:null,value:void 0}),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){let{spare:⟦2-char-id⟧=0,priority:⟦2-char-id⟧="auto"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const ⟦2-char-id⟧="string"===typeof ⟦2-char-id⟧?BB:⟦2-char-id⟧.href;return ⟦2-char-id⟧((()=>⟦2-char-id⟧(⟦2-char-id⟧,((⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)=>async function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧;try{⟦2-char-id⟧=await fetch(⟦2-char-id⟧,{signal:⟦2-char-id⟧,priority:⟦2-char-id⟧})}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Fetching ${BB} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}if(!⟦2-char-id⟧.ok)throw new ⟦2-char-id⟧(`Fetching ${BB} failed: HTTP ${lB.status}`,⟦2-char-id⟧.status);if(⟦2-char-id⟧(),null===⟦2-char-id⟧.body){let ⟦2-char-id⟧;⟦2-char-id⟧();try{⟦2-char-id⟧=await ⟦2-char-id⟧.arrayBuffer()}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Downloading ${BB} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}const ⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧+⟦2-char-id⟧.byteLength);return ⟦2-char-id⟧.set(new Uint8Array(⟦2-char-id⟧),⟦2-char-id⟧),⟦2-char-id⟧}const ⟦2-char-id⟧=⟦2-char-id⟧.body.getReader(),⟦2-char-id⟧=[];for(;;){let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧.read()}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(`Downloading ${BB} failed`,⟦2-char-id⟧,⟦2-char-id⟧)}if(⟦2-char-id⟧.done)return ⟦2-char-id⟧(),⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);⟦2-char-id⟧.push(⟦2-char-id⟧.value),⟦2-char-id⟧()}}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)))))}async function ⟦2-char-id⟧(⟦2-char-id⟧){for(let ⟦2-char-id⟧=0;;⟦2-char-id⟧++)try{return await ⟦2-char-id⟧()}catch(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)||!⟦2-char-id⟧.retryable||void 0===⟦2-char-id⟧)throw ⟦2-char-id⟧;console.warn(`${TB.message}, retrying in ${BB/1e3} s`),await ⟦2-char-id⟧((⟦2-char-id⟧=>{setTimeout(⟦2-char-id⟧,⟦2-char-id⟧)}))}}async function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=new AbortController;let ⟦2-char-id⟧,⟦2-char-id⟧=()=>{};const ⟦2-char-id⟧=⟦2-char-id⟧(((⟦2-char-id⟧,⟦2-char-id⟧)=>{⟦2-char-id⟧=⟦2-char-id⟧})),⟦2-char-id⟧=()=>{clearTimeout(⟦2-char-id⟧),⟦2-char-id⟧=setTimeout((()=>{⟦2-char-id⟧(new ⟦2-char-id⟧(`Downloading ${BB} stalled: nothing arrived for ${xT/1e3} s`,!0)),⟦2-char-id⟧.abort()}),⟦2-char-id⟧)},⟦2-char-id⟧=()=>{clearTimeout(⟦2-char-id⟧)};⟦2-char-id⟧();try{return await(⟦2-char-id⟧=[⟦2-char-id⟧(⟦2-char-id⟧.signal,⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧],⟦2-char-id⟧(((⟦2-char-id⟧,⟦2-char-id⟧)=>{for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++)⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧,⟦2-char-id⟧)})))}finally{clearTimeout(⟦2-char-id⟧)}var ⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧&&⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]):⟦2-char-id⟧.arrayBuffer()}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,(()=>{}),(()=>{})),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}function ⟦2-char-id⟧(⟦2-char-id⟧){if(!⟦2-char-id⟧)return ⟦2-char-id⟧.clone();try{return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])}catch{return null}}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.aborted?TB:new ⟦2-char-id⟧(`${BB}: ${TB instanceof Error?TB.message:String(TB)}`,!0,{cause:⟦2-char-id⟧})}function ⟦2-char-id⟧(⟦2-char-id⟧){let ⟦2-char-id⟧=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,⟦2-char-id⟧=⟦2-char-id⟧;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧+=⟦2-char-id⟧.length;const ⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧);let ⟦2-char-id⟧=⟦2-char-id⟧;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.set(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧+=⟦2-char-id⟧.length;return ⟦2-char-id⟧}let ⟦2-char-id⟧="unloaded",⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null;const ⟦2-char-id⟧=new Set,⟦2-char-id⟧=new Set;let ⟦2-char-id⟧=!1,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=null,⟦2-char-id⟧=!1,⟦2-char-id⟧=0;function ⟦2-char-id⟧(){return"ready"===⟦2-char-id⟧}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}const ⟦2-char-id⟧={fetch:"fetch_failed",timeout:"fetch_failed",integrity:"fetch_failed",compile:"compile_failed",instantiate:"instantiate_failed",call:"call_failed"};function ⟦2-char-id⟧(){return null===⟦2-char-id⟧?null:⟦2-char-id⟧[⟦2-char-id⟧]}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}function ⟦2-char-id⟧(){return null===⟦2-char-id⟧?"not failed":`${Kd}: ${(BB=rd)instanceof Error?`${⟦2-char-id⟧.name}: ${⟦2-char-id⟧.message}`:String(BB)}`;var ⟦2-char-id⟧}function ⟦2-char-id⟧(){if(!⟦2-char-id⟧())throw new Error(`Bloxd wasm is not ready (${Cd()}): check isBloxdWasmReady() first`);return ⟦2-char-id⟧}function ⟦2-char-id⟧(){return ⟦2-char-id⟧()?ad:null}function ⟦2-char-id⟧(){return ⟦2-char-id⟧()?Id:null}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}function ⟦2-char-id⟧(){if(!⟦2-char-id⟧||0===⟦2-char-id⟧)return 0;const ⟦2-char-id⟧=new Uint32Array(⟦2-char-id⟧.buffer,⟦2-char-id⟧,1),⟦2-char-id⟧=⟦2-char-id⟧[0]??0;return ⟦2-char-id⟧[0]=0,⟦2-char-id⟧}function ⟦2-char-id⟧(){if(!⟦2-char-id⟧)throw new Error("Bloxd wasm has not been instantiated");return ⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){"failed"!==⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧,"call")}function ⟦2-char-id⟧(){return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧&&⟦2-char-id⟧.retryable}function ⟦2-char-id⟧(){return"unloaded"===⟦2-char-id⟧&&(⟦2-char-id⟧="loading",!0)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.memory;const{Mk:⟦2-char-id⟧}=⟦2-char-id⟧;⟦2-char-id⟧="function"===typeof ⟦2-char-id⟧?⟦2-char-id⟧():0,⟦2-char-id⟧="ready",function(){if(⟦2-char-id⟧)return;⟦2-char-id⟧=!0;const ⟦2-char-id⟧=console.error;console.error=function(){for(var ⟦2-char-id⟧=arguments.length,⟦2-char-id⟧=new Array(⟦2-char-id⟧),⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧]=arguments[⟦2-char-id⟧];const[⟦2-char-id⟧]=⟦2-char-id⟧;"string"===typeof ⟦2-char-id⟧&&⟦2-char-id⟧.startsWith("panicked at")&&(⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧()),⟦2-char-id⟧.apply(console,⟦2-char-id⟧)}}()}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧="failed",⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,console.error(`Bloxd wasm failed (${TB}):`,⟦2-char-id⟧);const ⟦2-char-id⟧=[...Sd];⟦2-char-id⟧.clear();for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){try{⟦2-char-id⟧()}catch(⟦2-char-id⟧){console.error("A Bloxd wasm failure listener threw:",⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){return"failed"===⟦2-char-id⟧?(⟦2-char-id⟧(⟦2-char-id⟧),()=>{}):(⟦2-char-id⟧.add(⟦2-char-id⟧),()=>{⟦2-char-id⟧.delete(⟦2-char-id⟧)})}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧||(⟦2-char-id⟧(),⟦2-char-id⟧.Uk(⟦2-char-id⟧),⟦2-char-id⟧=!0),⟦2-char-id⟧.add(⟦2-char-id⟧),()=>{⟦2-char-id⟧.delete(⟦2-char-id⟧)}}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧().buffer;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)try{⟦2-char-id⟧(⟦2-char-id⟧)}catch(⟦2-char-id⟧){console.error("A Bloxd wasm memory growth listener threw:",⟦2-char-id⟧)}}const ⟦2-char-id⟧={bloxd_wasm:()=>"6a2efd5680223ac4664cc3045620a185da94b2f4e06849c44e38e480fc80e38a",bloxd_wasm_client:()=>"607784131ab158c610f964eeccd0a0852f74d8ce3d4f4aee969d2f319a80e3b6",bloxd_wasm_workers:()=>"d5276c08ec0e736252a42b7c12c1091036eec7cc17105f167a56c574e34a0505",bloxd_wasm_models:()=>"92f9285c30a7dd1629d525045b29e9aca6c3d567d620b4834fec4760fd172ddc",bloxd_wasm_webgpu:()=>"ed656d46a24419edcd62f7bc46fd9a190039bf0f388edff699daa513cf32f6d2",bloxd_wasm_webgl:()=>"52116128612eeabf26c6510c105a72c4a8c70bb8b756449209899fb860a93f15",bloxd_wasm_webgl1:()=>"3697a90b61a47ddbbdceb28b1c9caaf73e71aabf414852b8293dc48cb3f6a6a8",bloxd_wasm_replay:()=>"5464460b78e15b4bb176525399accbb59f863e7383feb54312b177c696166e48",bloxd_wasm_recorder:()=>"e1fdcb56336c3bc38215a981e4378ac3821b8912419bc7fd948eb1da353324ba",bloxd_wasm_anim:()=>"74e56eee078a428190364a7d35938aac7810b6b32140848c6b994c19e70e3042",bloxd_wasm_textures:()=>"4b25ea5144f7ce6b7af54af6beda3d49671ed61aae27771d204b13971136dce5",bloxd_wasm_shader_pack:()=>"4746bfad07ac1f13f98ece970e8e224d9432f9561a8a4390c6f598c4e17052f5"},⟦2-char-id⟧=Function.prototype.toString,⟦2-char-id⟧=RegExp.prototype.exec,⟦2-char-id⟧=Reflect.apply,⟦2-char-id⟧=Function.prototype.call,⟦2-char-id⟧=Function.prototype.apply,⟦2-char-id⟧=Function.prototype.bind,⟦2-char-id⟧=Object.defineProperty,⟦2-char-id⟧=Uint8Array;let ⟦2-char-id⟧,⟦2-char-id⟧;try{⟦2-char-id⟧=globalThis.crypto,⟦2-char-id⟧=void 0===⟦2-char-id⟧||null===⟦2-char-id⟧?void 0:⟦2-char-id⟧.getRandomValues}catch{}const ⟦2-char-id⟧="bloxdBindApply";let ⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧;⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,{__proto__:null,value:⟦2-char-id⟧,configurable:!0});try{⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧)}finally{delete ⟦2-char-id⟧[⟦2-char-id⟧]}}catch{}const ⟦2-char-id⟧=16,⟦2-char-id⟧=256,⟦2-char-id⟧=0,⟦2-char-id⟧=1,⟦2-char-id⟧=2,⟦2-char-id⟧=3;let ⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=0;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧===`function ${TB}() { [native code] }`||⟦2-char-id⟧===`function ${TB}() {\\n    [native code]\\n}`}const ⟦2-char-id⟧=0,⟦2-char-id⟧=1,⟦2-char-id⟧=2;let ⟦2-char-id⟧=⟦2-char-id⟧;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧===⟦2-char-id⟧&&⟦2-char-id⟧===⟦2-char-id⟧&&!function(){const ⟦2-char-id⟧=⟦2-char-id⟧;return ⟦2-char-id⟧>=⟦2-char-id⟧&&(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧]),⟦2-char-id⟧=0),⟦2-char-id⟧[⟦2-char-id⟧++]<256/⟦2-char-id⟧}())return function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧??0)}(...arguments);if(⟦2-char-id⟧===⟦2-char-id⟧||⟦2-char-id⟧===⟦2-char-id⟧)return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);let ⟦2-char-id⟧;⟦2-char-id⟧=⟦2-char-id⟧;try{⟦2-char-id⟧===⟦2-char-id⟧&&(⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=function(){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]);if(⟦2-char-id⟧(⟦2-char-id⟧,"apply"))return ⟦2-char-id⟧;if(null===⟦2-char-id⟧(⟦2-char-id⟧,/\\(\\.\\.\\.arguments\\)/,[⟦2-char-id⟧])&&null===⟦2-char-id⟧(⟦2-char-id⟧,/^function\\s*\\(\\.\\.\\.[\\w$]+\\)/,[⟦2-char-id⟧]))return ⟦2-char-id⟧;if("function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||"function"!==typeof ⟦2-char-id⟧||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"call")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"apply")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"bind")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"defineProperty")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"getRandomValues")||!⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]),"Uint8Array"))return ⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧={},⟦2-char-id⟧=function(⟦2-char-id⟧){return this===⟦2-char-id⟧&&⟦2-char-id⟧===⟦2-char-id⟧};try{if(!0!==⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧]))return ⟦2-char-id⟧;const ⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧);⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧]),⟦2-char-id⟧=⟦2-char-id⟧}catch{return ⟦2-char-id⟧}return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}()),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}let ⟦2-char-id⟧=⟦2-char-id⟧;function ⟦2-char-id⟧(){return(⟦2-char-id⟧===⟦2-char-id⟧?0:3)+⟦2-char-id⟧}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=⟦2-char-id⟧();return ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧>=3?XV:⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧%3}const ⟦2-char-id⟧=Function.prototype.toString,⟦2-char-id⟧=Object.getOwnPropertyDescriptor,⟦2-char-id⟧=RegExp.prototype.exec,⟦2-char-id⟧=Object.prototype.hasOwnProperty,⟦2-char-id⟧=Set.prototype.has,⟦2-char-id⟧=Reflect.get,⟦2-char-id⟧=Object.getPrototypeOf,⟦2-char-id⟧="undefined"===typeof WebAssembly?void 0:WebAssembly;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return{code:⟦2-char-id⟧,holder:⟦2-char-id⟧,key:⟦2-char-id⟧,...arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},native:new RegExp(`^function (get )?${dB}\\\\(\\\\) \\\\{\\\\s*\\\\[native code\\\\]\\\\s*\\\\}$`)}}function ⟦2-char-id⟧(){return ⟦2-char-id⟧}const ⟦2-char-id⟧=⟦2-char-id⟧?.Instance.prototype,⟦2-char-id⟧=⟦2-char-id⟧?.Memory.prototype;function ⟦2-char-id⟧(){return ⟦2-char-id⟧}let ⟦2-char-id⟧,⟦2-char-id⟧;try{const ⟦2-char-id⟧=globalThis.crypto,⟦2-char-id⟧=⟦2-char-id⟧?.subtle;⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧):void 0,⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧):void 0}catch{}const ⟦2-char-id⟧=[⟦2-char-id⟧("in",⟦2-char-id⟧,"instantiate",{tier:"weighted",onNamespace:!0}),⟦2-char-id⟧("is",⟦2-char-id⟧,"instantiateStreaming",{tier:"weighted",onNamespace:!0}),⟦2-char-id⟧("co",⟦2-char-id⟧,"compile",{tier:"weighted",onNamespace:!0}),⟦2-char-id⟧("cs",⟦2-char-id⟧,"compileStreaming",{tier:"weighted",onNamespace:!0}),⟦2-char-id⟧("mo",⟦2-char-id⟧,"Module",{isConstructor:!0,tier:"punished",onNamespace:!0}),⟦2-char-id⟧("it",⟦2-char-id⟧,"Instance",{isConstructor:!0,tier:"punished",onNamespace:!0}),⟦2-char-id⟧("me",⟦2-char-id⟧,"Memory",{isConstructor:!0,tier:"punished",onNamespace:!0}),⟦2-char-id⟧("ex",(function(){return ⟦2-char-id⟧}),"exports",{isGetter:!0,tier:"punished"}),⟦2-char-id⟧("bu",⟦2-char-id⟧,"buffer",{isGetter:!0,tier:"punished"}),⟦2-char-id⟧("gr",⟦2-char-id⟧,"grow",{tier:"punished"}),⟦2-char-id⟧("rc",(function(){return"undefined"===typeof Response?void 0:Response.prototype}),"clone"),⟦2-char-id⟧("cr",(function(){return globalThis}),"crypto",{isGetter:!0,tier:"punished",inSecureContext:!0}),⟦2-char-id⟧("su",(function(){return ⟦2-char-id⟧}),"subtle",{isGetter:!0,tier:"punished",inSecureContext:!0}),⟦2-char-id⟧("dg",(function(){return ⟦2-char-id⟧}),"digest",{tier:"punished",inSecureContext:!0})];function ⟦2-char-id⟧(⟦2-char-id⟧){let ⟦2-char-id⟧;try{const ⟦2-char-id⟧=⟦2-char-id⟧(globalThis,⟦2-char-id⟧);⟦2-char-id⟧="function"===typeof ⟦2-char-id⟧?⟦2-char-id⟧.prototype:void 0}catch{}return()=>⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.map((⟦2-char-id⟧=>⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)))}const ⟦2-char-id⟧=⟦2-char-id⟧("rx",⟦2-char-id⟧("HTMLCanvasElement"),"getContext"),⟦2-char-id⟧=["createShader","shaderSource","compileShader","createProgram","linkProgram","useProgram","drawArrays","drawElements","depthFunc","depthMask","enable","disable","blendFuncSeparate","colorMask"],⟦2-char-id⟧={webgpu:[...oy("gd",gy("GPUDevice"),["createShaderModule","createRenderPipeline","createCommandEncoder"]),...oy("gq",gy("GPUQueue"),["submit","writeBuffer"]),...oy("ge",gy("GPUCommandEncoder"),["beginRenderPass","finish"]),...oy("gp",gy("GPURenderPassEncoder"),["setPipeline","setBindGroup","draw","drawIndexed","drawIndirect","drawIndexedIndirect","executeBundles"]),⟦2-char-id⟧],webgl:[...oy("g2",gy("WebGL2RenderingContext"),[...Ly,"drawArraysInstanced","drawElementsInstanced"]),⟦2-char-id⟧],webgl1:[...oy("g1",gy("WebGLRenderingContext"),⟦2-char-id⟧),⟦2-char-id⟧]};let ⟦2-char-id⟧=[];function ⟦2-char-id⟧(⟦2-char-id⟧){let{code:⟦2-char-id⟧,key:⟦2-char-id⟧}=⟦2-char-id⟧;return`wh:${TB}:${dB}`}const ⟦2-char-id⟧=new Set(Object.values(⟦2-char-id⟧).flatMap((⟦2-char-id⟧=>⟦2-char-id⟧.map(⟦2-char-id⟧)))),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧);function ⟦2-char-id⟧(⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧]}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){return new Set(⟦2-char-id⟧.filter((⟦2-char-id⟧=>⟦2-char-id⟧.tier===⟦2-char-id⟧)).map((⟦2-char-id⟧=>`wh:${BB.code}`)))}const ⟦2-char-id⟧=⟦2-char-id⟧("punished"),⟦2-char-id⟧=!1,⟦2-char-id⟧=new Set(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧("weighted");function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return ⟦2-char-id⟧(⟦2-char-id⟧)}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return ⟦2-char-id⟧(⟦2-char-id⟧)}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}function ⟦2-char-id⟧(⟦2-char-id⟧){return"wb"===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return ⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧(⟦2-char-id⟧)}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧();try{return"wb"===⟦2-char-id⟧||⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧)}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){let{isConstructor:⟦2-char-id⟧,native:⟦2-char-id⟧}=⟦2-char-id⟧;return"function"===typeof ⟦2-char-id⟧&&(!(!⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,["prototype"]))&&null!==⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])]))}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧("",(()=>{}),⟦2-char-id⟧,arguments.length>2&&void 0!==arguments[2]&&arguments[2]?{isConstructor:!0}:{}))}function ⟦2-char-id⟧(⟦2-char-id⟧){const{holder:⟦2-char-id⟧,key:⟦2-char-id⟧,isGetter:⟦2-char-id⟧,onNamespace:⟦2-char-id⟧,inSecureContext:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧(),⟦2-char-id⟧=function(⟦2-char-id⟧,⟦2-char-id⟧){for(let ⟦2-char-id⟧=⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&null!==⟦2-char-id⟧;⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧)){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧)return ⟦2-char-id⟧}}(⟦2-char-id⟧,⟦2-char-id⟧);if(!⟦2-char-id⟧)return!(⟦2-char-id⟧&&!0===globalThis.isSecureContext);const ⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧.get:⟦2-char-id⟧.value;if(!⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧))return!1;if(⟦2-char-id⟧){const ⟦2-char-id⟧=globalThis.WebAssembly;if(⟦2-char-id⟧!==⟦2-char-id⟧&&null!==⟦2-char-id⟧&&("object"===typeof ⟦2-char-id⟧||"function"===typeof ⟦2-char-id⟧)){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧===⟦2-char-id⟧||void 0===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)}}return!0}let ⟦2-char-id⟧=null,⟦2-char-id⟧=!1;function ⟦2-char-id⟧(⟦2-char-id⟧){try{return ⟦2-char-id⟧(⟦2-char-id⟧)}catch{return!1}}function ⟦2-char-id⟧(){if(void 0===⟦2-char-id⟧)return null;let ⟦2-char-id⟧=function(){try{return globalThis.WebAssembly===⟦2-char-id⟧}catch{return!1}}()?null:"wh:wa";const ⟦2-char-id⟧=⟦2-char-id⟧=>{null!==⟦2-char-id⟧&&(null===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧)>⟦2-char-id⟧(⟦2-char-id⟧))&&(⟦2-char-id⟧=⟦2-char-id⟧)};for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];void 0===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧(`wh:${BB.code}`)}⟦2-char-id⟧(⟦2-char-id⟧??⟦2-char-id⟧());for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];void 0===⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧))}return ⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧)?5:⟦2-char-id⟧(⟦2-char-id⟧)?4:⟦2-char-id⟧(⟦2-char-id⟧)?3:function(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}(⟦2-char-id⟧)?⟦2-char-id⟧===⟦2-char-id⟧?0:1:2}function ⟦2-char-id⟧(){const ⟦2-char-id⟧=function(){const ⟦2-char-id⟧=⟦2-char-id⟧();return ⟦2-char-id⟧===⟦2-char-id⟧||⟦2-char-id⟧===⟦2-char-id⟧?(⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧):⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧}();try{if(null===⟦2-char-id⟧||!⟦2-char-id⟧(⟦2-char-id⟧)){const ⟦2-char-id⟧=⟦2-char-id⟧();(null===⟦2-char-id⟧||null!==⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧)>⟦2-char-id⟧(⟦2-char-id⟧))&&(⟦2-char-id⟧=⟦2-char-id⟧)}}finally{⟦2-char-id⟧(⟦2-char-id⟧)}}function ⟦2-char-id⟧(){⟦2-char-id⟧=!0}function ⟦2-char-id⟧(){if(⟦2-char-id⟧)return"wb";if((!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&⟦2-char-id⟧(),null!==⟦2-char-id⟧)return ⟦2-char-id⟧;if(void 0===⟦2-char-id⟧)return"wn:unsupported";const ⟦2-char-id⟧=⟦2-char-id⟧();return null===⟦2-char-id⟧?null:`wn:${BB}`}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=Object.prototype.hasOwnProperty.call(⟦2-char-id⟧,⟦2-char-id⟧)?⟦2-char-id⟧[⟦2-char-id⟧]():void 0;if(void 0!==⟦2-char-id⟧)return{sha256:⟦2-char-id⟧,onMismatch:⟦2-char-id⟧};throw new ⟦2-char-id⟧(`${BB} has no release digest, so this build refuses it`)}const ⟦2-char-id⟧=".zst.bin",⟦2-char-id⟧=Reflect.apply,⟦2-char-id⟧=ArrayBuffer,⟦2-char-id⟧="undefined"===typeof Response?void 0:Response,⟦2-char-id⟧="undefined"===typeof ReadableStream?void 0:ReadableStream,⟦2-char-id⟧=function(){let ⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&new ⟦2-char-id⟧({__proto__:null,start(⟦2-char-id⟧){const{enqueue:⟦2-char-id⟧,close:⟦2-char-id⟧,error:⟦2-char-id⟧}=Object.getPrototypeOf(⟦2-char-id⟧);⟦2-char-id⟧={enqueue:⟦2-char-id⟧,close:⟦2-char-id⟧,error:⟦2-char-id⟧}}},{__proto__:null});return ⟦2-char-id⟧}(),⟦2-char-id⟧=function(){try{return"undefined"!==typeof WebAssembly&&"function"===typeof WebAssembly.compileStreaming&&void 0!==⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧,"Response",!0)&&⟦2-char-id⟧(⟦2-char-id⟧,"ReadableStream",!0)&&⟦2-char-id⟧(⟦2-char-id⟧.enqueue,"enqueue")&&⟦2-char-id⟧(⟦2-char-id⟧.close,"close")&&⟦2-char-id⟧(⟦2-char-id⟧.error,"error")&&⟦2-char-id⟧(⟦2-char-id⟧,"body")&&⟦2-char-id⟧(⟦2-char-id⟧,"getReader")&&⟦2-char-id⟧(⟦2-char-id⟧,"read")}catch{return!1}}();let ⟦2-char-id⟧=!1;function ⟦2-char-id⟧(⟦2-char-id⟧){for(const ⟦2-char-id⟧ of"bloxd_wasm_webgpu:4954899,bloxd_wasm_webgl:5221928,bloxd_wasm_webgl1:4725588,bloxd_wasm_workers:196044,bloxd_wasm_models:312534,bloxd_wasm_client:3648335"?.split(",")??[]){const[⟦2-char-id⟧,⟦2-char-id⟧]=⟦2-char-id⟧.split(":");if(⟦2-char-id⟧===⟦2-char-id⟧){const ⟦2-char-id⟧=Number(⟦2-char-id⟧);return Number.isInteger(⟦2-char-id⟧)&&⟦2-char-id⟧>0?BB:void 0}}}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧.name);if(void 0!==⟦2-char-id⟧&&⟦2-char-id⟧&&!⟦2-char-id⟧)return{href:`${BB.url().href}${Gy}`,length:⟦2-char-id⟧}}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧)?.href??⟦2-char-id⟧.url().href}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.url(),⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧);return void 0!==⟦2-char-id⟧?async function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){let{href:⟦2-char-id⟧,length:⟦2-char-id⟧}=⟦2-char-id⟧;try{return await ⟦2-char-id⟧(⟦2-char-id⟧,((⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)=>async function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧);let ⟦2-char-id⟧;⟦2-char-id⟧??=⟦2-char-id⟧(⟦2-char-id⟧.e(1).then((()=>⟦2-char-id⟧(25))));try{⟦2-char-id⟧=await fetch(⟦2-char-id⟧,void 0===⟦2-char-id⟧?{signal:⟦2-char-id⟧}:{signal:⟦2-char-id⟧,priority:⟦2-char-id⟧})}catch(⟦2-char-id⟧){throw new Error(`Fetching ${BB} failed: ${lp(fB)}`)}const{ok:⟦2-char-id⟧,status:⟦2-char-id⟧,body:⟦2-char-id⟧}=function(⟦2-char-id⟧,⟦2-char-id⟧){try{const{ok:⟦2-char-id⟧,status:⟦2-char-id⟧}=⟦2-char-id⟧;return{ok:⟦2-char-id⟧,status:⟦2-char-id⟧,body:⟦2-char-id⟧(⟦2-char-id⟧,TB,[])}}catch{throw new Error(`${BB} came in a response a page script made`)}}(⟦2-char-id⟧,⟦2-char-id⟧);if(!⟦2-char-id⟧)throw new Error(`Fetching ${BB} failed: HTTP ${kB}`);⟦2-char-id⟧();const{reader:⟦2-char-id⟧,controller:⟦2-char-id⟧,compiled:⟦2-char-id⟧}=function(⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧;try{let ⟦2-char-id⟧;⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[]);const ⟦2-char-id⟧=new ⟦2-char-id⟧({__proto__:null,start(⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧}},{__proto__:null}),⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧,{__proto__:null,headers:{__proto__:null,"Content-Type":"application/wasm"}});return{reader:⟦2-char-id⟧,controller:⟦2-char-id⟧,compiled:⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧)))}}catch(⟦2-char-id⟧){throw void 0!==⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧),new Error(`${BB} could not be streamed into a compile: ${lp(fB)}`)}}(⟦2-char-id⟧,⟦2-char-id⟧),{enqueue:⟦2-char-id⟧,close:⟦2-char-id⟧,error:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧=>{try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[⟦2-char-id⟧])}catch{}finally{⟦2-char-id⟧(⟦2-char-id⟧)}};⟦2-char-id⟧.addEventListener("abort",(()=>{⟦2-char-id⟧(new Error(`${BB} stalled`))}),{once:!0});let ⟦2-char-id⟧=!1;⟦2-char-id⟧(⟦2-char-id⟧,(()=>{}),(()=>{⟦2-char-id⟧=!0,⟦2-char-id⟧(⟦2-char-id⟧)}));let ⟦2-char-id⟧=0;try{let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧=!0,new Error(`The zstd decoder did not load: ${lp(fB)}`)}const{ZstdFrameDecoder:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=new ⟦2-char-id⟧(⟦2-char-id⟧);for(;!⟦2-char-id⟧.done&&!⟦2-char-id⟧;){let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])}catch(⟦2-char-id⟧){throw new Error(`Downloading ${BB} failed: ${lp(fB)}`)}if(⟦2-char-id⟧.done||⟦2-char-id⟧)break;⟦2-char-id⟧();try{⟦2-char-id⟧.push(⟦2-char-id⟧.value)}catch(⟦2-char-id⟧){throw new Error(`${BB} did not decode: ${lp(fB)}`)}const{output:⟦2-char-id⟧,decoded:⟦2-char-id⟧}=⟦2-char-id⟧;if(null!==⟦2-char-id⟧&&⟦2-char-id⟧!==⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,new ⟦2-char-id⟧(⟦2-char-id⟧),[⟦2-char-id⟧.subarray(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧]);try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[new ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧-⟦2-char-id⟧)])}catch{⟦2-char-id⟧=!0}⟦2-char-id⟧=⟦2-char-id⟧}}if(⟦2-char-id⟧(),⟦2-char-id⟧)throw await ⟦2-char-id⟧,new Error(`${BB}\'s compile stopped reading before its end`);if(!⟦2-char-id⟧.done)throw new Error(`${BB} ended before its module did`);⟦2-char-id⟧(⟦2-char-id⟧);try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,[])}catch{}}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧}const ⟦2-char-id⟧=await ⟦2-char-id⟧;void 0!==⟦2-char-id⟧&&await ⟦2-char-id⟧(⟦2-char-id⟧,new ⟦2-char-id⟧(⟦2-char-id⟧),{sha256:⟦2-char-id⟧.sha256,onMismatch:()=>{}});return ⟦2-char-id⟧}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)))}catch(⟦2-char-id⟧){console.warn(`${lp(YB)}: loading ${BB.href} instead`)}const ⟦2-char-id⟧=await ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,{hideThen:!0,priority:⟦2-char-id⟧});return ⟦2-char-id⟧}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧):⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,{hideThen:void 0!==⟦2-char-id⟧(⟦2-char-id⟧.name),priority:⟦2-char-id⟧})}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(⟦2-char-id⟧){try{⟦2-char-id⟧(⟦2-char-id⟧.cancel())}catch{}}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧ instanceof Error?⟦2-char-id⟧.message:String(⟦2-char-id⟧)}let ⟦2-char-id⟧=null,⟦2-char-id⟧=!1;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return null===⟦2-char-id⟧?⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧?.priority):⟦2-char-id⟧!==⟦2-char-id⟧.build?console.warn(`Bloxd wasm: ${BB.name} was asked for after ${Jp.build.name} started loading, which this thread keeps`):⟦2-char-id⟧.name!==⟦2-char-id⟧.workers.name&&console.warn(`Bloxd wasm: ${TB.name} was asked for workers after ${Jp.workers.name}, which this thread keeps`),⟦2-char-id⟧?.reloadFailedDownload&&!⟦2-char-id⟧&&⟦2-char-id⟧()&&(⟦2-char-id⟧="unloaded",⟦2-char-id⟧=null,⟦2-char-id⟧=null,1)&&(⟦2-char-id⟧=!0,⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧.build,⟦2-char-id⟧.workers)),⟦2-char-id⟧.loaded}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=async function(⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧()){let ⟦2-char-id⟧;try{⟦2-char-id⟧=await ⟦2-char-id⟧()}catch(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧)),!1}try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.JD,⟦2-char-id⟧.workerModule,await ⟦2-char-id⟧.init({module_or_path:⟦2-char-id⟧.module}))}catch(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,"instantiate")}}return ⟦2-char-id⟧()}((async()=>{⟦2-char-id⟧();const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧.name===⟦2-char-id⟧.name?VB:⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);var ⟦2-char-id⟧;await(⟦2-char-id⟧=[⟦2-char-id⟧,⟦2-char-id⟧],⟦2-char-id⟧(((⟦2-char-id⟧,⟦2-char-id⟧)=>{let ⟦2-char-id⟧=⟦2-char-id⟧.length;if(0===⟦2-char-id⟧)return void ⟦2-char-id⟧();const ⟦2-char-id⟧=()=>{⟦2-char-id⟧--,0===⟦2-char-id⟧&&⟦2-char-id⟧()};for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++)⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧,⟦2-char-id⟧)})));const ⟦2-char-id⟧=await ⟦2-char-id⟧,⟦2-char-id⟧=await ⟦2-char-id⟧;return ⟦2-char-id⟧(),{module:⟦2-char-id⟧,workerModule:⟦2-char-id⟧}}),⟦2-char-id⟧);return{build:⟦2-char-id⟧,workers:⟦2-char-id⟧,loaded:⟦2-char-id⟧}}async function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧.name),⟦2-char-id⟧)}const ⟦2-char-id⟧={name:"bloxd_wasm",url:()=>new ⟦2-char-id⟧.U(⟦2-char-id⟧(16)),init:⟦2-char-id⟧,JD:⟦2-char-id⟧};function ⟦2-char-id⟧(){return ⟦2-char-id⟧(arguments.length>0&&void 0!==arguments[0]?arguments[0]:⟦2-char-id⟧,arguments.length>1&&void 0!==arguments[1]?arguments[1]:⟦2-char-id⟧,arguments.length>2?arguments[2]:void 0)}function ⟦2-char-id⟧(⟦2-char-id⟧){return function(⟦2-char-id⟧,⟦2-char-id⟧){let ⟦2-char-id⟧=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(⟦2-char-id⟧()){let ⟦2-char-id⟧;try{⟦2-char-id⟧=⟦2-char-id⟧()}catch(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧(⟦2-char-id⟧)),!1}try{⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧.initSync({module:⟦2-char-id⟧}))}catch(⟦2-char-id⟧){⟦2-char-id⟧(⟦2-char-id⟧,"instantiate")}}return ⟦2-char-id⟧()}((()=>⟦2-char-id⟧),⟦2-char-id⟧,⟦2-char-id⟧)}const ⟦2-char-id⟧=["none","idle","now"];function ⟦2-char-id⟧(){const ⟦2-char-id⟧=()=>⟦2-char-id⟧();return{memoryBytes:()=>⟦2-char-id⟧().buffer.byteLength,reserveUpFront:⟦2-char-id⟧=>⟦2-char-id⟧().Ek(⟦2-char-id⟧),reserveAhead:⟦2-char-id⟧=>⟦2-char-id⟧().Hk(⟦2-char-id⟧),setCeiling:⟦2-char-id⟧=>{⟦2-char-id⟧().vk(⟦2-char-id⟧)},lowWater:()=>⟦2-char-id⟧[⟦2-char-id⟧().uk()]??"none",stats:()=>function(⟦2-char-id⟧){const ⟦2-char-id⟧=new Uint32Array(⟦2-char-id⟧().buffer,⟦2-char-id⟧,17),⟦2-char-id⟧=⟦2-char-id⟧=>⟦2-char-id⟧[⟦2-char-id⟧]??0,⟦2-char-id⟧=⟦2-char-id⟧=>({upFront:⟦2-char-id⟧(⟦2-char-id⟧),ahead:⟦2-char-id⟧(⟦2-char-id⟧+1),onDemandInFrame:⟦2-char-id⟧(⟦2-char-id⟧+2),onDemand:⟦2-char-id⟧(⟦2-char-id⟧+3)});return{memoryBytes:⟦2-char-id⟧(0),initialBytes:⟦2-char-id⟧(1),liveBytes:⟦2-char-id⟧(2),peakLiveBytes:⟦2-char-id⟧(3),headroomBytes:⟦2-char-id⟧(4),unusedBytes:⟦2-char-id⟧(5),ceilingBytes:⟦2-char-id⟧(6),reservesRefused:⟦2-char-id⟧(7),grows:⟦2-char-id⟧(8),grownBytes:⟦2-char-id⟧(12),allocationsRefused:⟦2-char-id⟧(16)}}(⟦2-char-id⟧().mk()),takeBallast:()=>⟦2-char-id⟧().ik(),takePressure:()=>⟦2-char-id⟧().Nk()}}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){return new Error(`${BB}: ${TB instanceof Error?`${⟦2-char-id⟧.name}: ${⟦2-char-id⟧.message}`:String(TB)}`,{cause:⟦2-char-id⟧})}function ⟦2-char-id⟧(){return new URL(new ⟦2-char-id⟧.U(⟦2-char-id⟧(22)).href,globalThis.location?.href).href}let ⟦2-char-id⟧=null;function ⟦2-char-id⟧(){return ⟦2-char-id⟧??=(async()=>⟦2-char-id⟧(new URL(⟦2-char-id⟧()),⟦2-char-id⟧("bloxd_wasm_textures")))().catch((⟦2-char-id⟧=>{throw ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧)})),⟦2-char-id⟧}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return new ⟦2-char-id⟧(⟦2-char-id⟧().buffer,⟦2-char-id⟧,⟦2-char-id⟧)}class ⟦2-char-id⟧{type;ptr;length;currentView;constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){this.type=⟦2-char-id⟧,this.ptr=⟦2-char-id⟧,this.length=⟦2-char-id⟧,this.currentView=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}view(){return this.currentView.length!==this.length&&(this.currentView=⟦2-char-id⟧(this.type,this.ptr,this.length)),this.currentView}}const ⟦2-char-id⟧=15;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return!!(⟦2-char-id⟧&&null!==⟦2-char-id⟧&&⟦2-char-id⟧>=⟦2-char-id⟧)}const ⟦2-char-id⟧=27;let ⟦2-char-id⟧=0;class ⟦2-char-id⟧{constructor(⟦2-char-id⟧){this.runs=⟦2-char-id⟧,this.layers=null,this.serial=⟦2-char-id⟧,⟦2-char-id⟧=(⟦2-char-id⟧+1)%4294967295}from(⟦2-char-id⟧,⟦2-char-id⟧){return 0===⟦2-char-id⟧?[0,0]:(this.layers??=function(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧,⟦2-char-id⟧=new Uint32Array(2*⟦2-char-id⟧);let ⟦2-char-id⟧=1,⟦2-char-id⟧=0,⟦2-char-id⟧=0;for(;⟦2-char-id⟧<⟦2-char-id⟧.length&&⟦2-char-id⟧<⟦2-char-id⟧;){const ⟦2-char-id⟧=⟦2-char-id⟧;let ⟦2-char-id⟧=0,⟦2-char-id⟧=0;for(;⟦2-char-id⟧<⟦2-char-id⟧.length&&⟦2-char-id⟧[⟦2-char-id⟧]>=128;)⟦2-char-id⟧+=(127&⟦2-char-id⟧[⟦2-char-id⟧++])<<⟦2-char-id⟧,⟦2-char-id⟧+=7;for(⟦2-char-id⟧+=⟦2-char-id⟧[⟦2-char-id⟧++]<<⟦2-char-id⟧;⟦2-char-id⟧[⟦2-char-id⟧]>=128;)⟦2-char-id⟧++;if(⟦2-char-id⟧++,!(⟦2-char-id⟧<=0))for(⟦2-char-id⟧+=⟦2-char-id⟧;⟦2-char-id⟧<⟦2-char-id⟧&&⟦2-char-id⟧*⟦2-char-id⟧<⟦2-char-id⟧;)⟦2-char-id⟧[2*⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧[2*⟦2-char-id⟧+1]=⟦2-char-id⟧-⟦2-char-id⟧,⟦2-char-id⟧++}for(;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[2*⟦2-char-id⟧]=⟦2-char-id⟧.length,⟦2-char-id⟧[2*⟦2-char-id⟧+1]=⟦2-char-id⟧;return ⟦2-char-id⟧}(this.runs,⟦2-char-id⟧),[this.layers[2*⟦2-char-id⟧],this.layers[2*⟦2-char-id⟧+1]])}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const{runs:⟦2-char-id⟧}=this;if(⟦2-char-id⟧>=⟦2-char-id⟧)return ⟦2-char-id⟧.length;const[⟦2-char-id⟧,⟦2-char-id⟧]=this.from(⟦2-char-id⟧,⟦2-char-id⟧);if(⟦2-char-id⟧===⟦2-char-id⟧*⟦2-char-id⟧*⟦2-char-id⟧)return ⟦2-char-id⟧;let ⟦2-char-id⟧=⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<2&&⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧]<128&&⟦2-char-id⟧++;return ⟦2-char-id⟧}}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧-1;let ⟦2-char-id⟧;⟦2-char-id⟧=⟦2-char-id⟧?new Uint16Array(⟦2-char-id⟧):new Uint8Array(⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧;if(0===⟦2-char-id⟧)⟦2-char-id⟧.set(⟦2-char-id⟧.subarray(0,⟦2-char-id⟧));else if(1===⟦2-char-id⟧)⟦2-char-id⟧.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧*⟦2-char-id⟧,⟦2-char-id⟧*⟦2-char-id⟧));else if(2===⟦2-char-id⟧||3===⟦2-char-id⟧){const ⟦2-char-id⟧=2===⟦2-char-id⟧?0:⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧+⟦2-char-id⟧*⟦2-char-id⟧;⟦2-char-id⟧.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧,⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧*⟦2-char-id⟧)}}else{const ⟦2-char-id⟧=4===⟦2-char-id⟧?0:⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧+⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧*⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧+⟦2-char-id⟧]=⟦2-char-id⟧[⟦2-char-id⟧+⟦2-char-id⟧*⟦2-char-id⟧]}}return ⟦2-char-id⟧}let ⟦2-char-id⟧=function(⟦2-char-id⟧){return ⟦2-char-id⟧[⟦2-char-id⟧.Corner=0]="Corner",⟦2-char-id⟧[⟦2-char-id⟧.EdgeX=1]="EdgeX",⟦2-char-id⟧[⟦2-char-id⟧.EdgeY=2]="EdgeY",⟦2-char-id⟧[⟦2-char-id⟧.EdgeZ=3]="EdgeZ",⟦2-char-id⟧[⟦2-char-id⟧.FaceX=4]="FaceX",⟦2-char-id⟧[⟦2-char-id⟧.FaceY=5]="FaceY",⟦2-char-id⟧[⟦2-char-id⟧.FaceZ=6]="FaceZ",⟦2-char-id⟧[⟦2-char-id⟧.Center=7]="Center",⟦2-char-id⟧}({});⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeZ,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeY,⟦2-char-id⟧.FaceX,⟦2-char-id⟧.EdgeY,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeZ,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeX,⟦2-char-id⟧.FaceY,⟦2-char-id⟧.EdgeX,⟦2-char-id⟧.FaceZ,⟦2-char-id⟧.Center,⟦2-char-id⟧.FaceZ,⟦2-char-id⟧.EdgeX,⟦2-char-id⟧.FaceY,⟦2-char-id⟧.EdgeX,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeZ,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeY,⟦2-char-id⟧.FaceX,⟦2-char-id⟧.EdgeY,⟦2-char-id⟧.Corner,⟦2-char-id⟧.EdgeZ,⟦2-char-id⟧.Corner;const ⟦2-char-id⟧=[22,4,16,10,14,12],⟦2-char-id⟧=Array.from({length:27},((⟦2-char-id⟧,⟦2-char-id⟧)=>[Math.floor(⟦2-char-id⟧/9)-1,Math.floor(⟦2-char-id⟧/3)%3-1,⟦2-char-id⟧%3-1]));function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧[⟦2-char-id⟧]}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧<0?[⟦2-char-id⟧-⟦2-char-id⟧,⟦2-char-id⟧]:⟦2-char-id⟧>0?[0,⟦2-char-id⟧]:[0,⟦2-char-id⟧]}const ⟦2-char-id⟧=/^alloc_failed (\\d+) bytes$/;class ⟦2-char-id⟧{constructor(⟦2-char-id⟧){this.chunkSizeCubed=⟦2-char-id⟧,this.uint8=[],this.uint16=[]}put(⟦2-char-id⟧){const ⟦2-char-id⟧=this.chunkSizeCubed,⟦2-char-id⟧=2*this.chunkSizeCubed;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.byteLength===⟦2-char-id⟧&&this.uint8.length<⟦2-char-id⟧.MAX_SIZE?this.uint8.push(new Uint8Array(⟦2-char-id⟧)):⟦2-char-id⟧.byteLength===⟦2-char-id⟧&&this.uint16.length<⟦2-char-id⟧.MAX_SIZE&&this.uint16.push(new Uint16Array(⟦2-char-id⟧))}drain(){const ⟦2-char-id⟧=[...this.uint8,...this.uint16].map((⟦2-char-id⟧=>⟦2-char-id⟧.buffer));return this.uint8.length=0,this.uint16.length=0,⟦2-char-id⟧}takeUint8(){var ⟦2-char-id⟧;return null!==(⟦2-char-id⟧=this.uint8.pop())&&void 0!==⟦2-char-id⟧?BB:new Uint8Array(this.chunkSizeCubed)}takeUint16(){var ⟦2-char-id⟧;return null!==(⟦2-char-id⟧=this.uint16.pop())&&void 0!==⟦2-char-id⟧?BB:new Uint16Array(this.chunkSizeCubed)}takeZeroedUint8(){const ⟦2-char-id⟧=this.takeUint8();return ⟦2-char-id⟧.fill(0),⟦2-char-id⟧}}⟦2-char-id⟧.MAX_SIZE=16;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return{emission:⟦2-char-id⟧,skyEmission:Float64Array.from({length:⟦2-char-id⟧.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>{var ⟦2-char-id⟧;return null!==(⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧])&&void 0!==⟦2-char-id⟧?VB:0})),filters:Int32Array.from({length:⟦2-char-id⟧.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>{var ⟦2-char-id⟧;const ⟦2-char-id⟧=null!==(⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧])&&void 0!==⟦2-char-id⟧?VB:1;return ⟦2-char-id⟧<0?-1:Math.min(⟦2-char-id⟧,15)})),opacity:Uint8Array.from({length:⟦2-char-id⟧.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>⟦2-char-id⟧[⟦2-char-id⟧]?1:0))}}new Map;function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧ instanceof Error&&Object.getPrototypeOf(⟦2-char-id⟧)===Error.prototype}class ⟦2-char-id⟧ extends RangeError{}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{constructor(⟦2-char-id⟧){super(`alloc_failed ${BB} bytes`),this.bytes=⟦2-char-id⟧}}function ⟦2-char-id⟧(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.exec(⟦2-char-id⟧);return ⟦2-char-id⟧?new ⟦2-char-id⟧(Number(⟦2-char-id⟧[1])):new ⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧(⟦2-char-id⟧)&&⟦2-char-id⟧.test(⟦2-char-id⟧.message)?⟦2-char-id⟧(⟦2-char-id⟧.message):⟦2-char-id⟧}class ⟦2-char-id⟧ extends Error{constructor(⟦2-char-id⟧){super(⟦2-char-id⟧ instanceof Error?⟦2-char-id⟧.message:String(⟦2-char-id⟧)),this.trap=⟦2-char-id⟧}}const ⟦2-char-id⟧=["full","relit","relit-sky","unchanged"];function ⟦2-char-id⟧(⟦2-char-id⟧){return Number.isInteger(⟦2-char-id⟧)&&⟦2-char-id⟧>=-2147483648&&⟦2-char-id⟧<=2147483647}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{constructor(⟦2-char-id⟧,⟦2-char-id⟧){super(⟦2-char-id⟧),this.reason=⟦2-char-id⟧}}class ⟦2-char-id⟧{constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){this.engine=⟦2-char-id⟧,this.lastLightPass="full",this.view=void 0,this.chunkSizeCubed=void 0,this.seedSize=void 0,this.lightU8=void 0,this.lightU16=void 0,this.seedRead=void 0,this.pool=void 0,this.view=⟦2-char-id⟧.view,this.chunkSizeCubed=⟦2-char-id⟧*⟦2-char-id⟧*⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧+30;this.seedSize=⟦2-char-id⟧*⟦2-char-id⟧,this.pool=new ⟦2-char-id⟧(this.chunkSizeCubed),this.lightU8=new ⟦2-char-id⟧.BufferView(Uint8Array,⟦2-char-id⟧.qO(),this.chunkSizeCubed),this.lightU16=new ⟦2-char-id⟧.BufferView(Uint16Array,⟦2-char-id⟧.GO(),this.chunkSizeCubed),this.seedRead=new ⟦2-char-id⟧.BufferView(Uint8Array,⟦2-char-id⟧.BD(),this.seedSize)}returnBuffers(⟦2-char-id⟧){this.pool.put(⟦2-char-id⟧)}takeBuffers(){return this.pool.drain()}getZeroedFullChunkLightData(){return this.pool.takeZeroedUint8()}checkComputeInput(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧.length<this.seedSize)throw new ⟦2-char-id⟧("seed_size",`WasmLightEngine sky seed grid holds ${BB.length} columns, not ${this.seedSize}`);if(!⟦2-char-id⟧(⟦2-char-id⟧)||null!==⟦2-char-id⟧&&!⟦2-char-id⟧(⟦2-char-id⟧))throw new ⟦2-char-id⟧("chunk_j",`WasmLightEngine chunkJ ${dB} or highestChunkJ ${TB} is not a 32-bit integer`)}computeWritten(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){this.checkComputeInput(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);const{engine:⟦2-char-id⟧,view:⟦2-char-id⟧}=this;let ⟦2-char-id⟧;⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧.TD(),this.seedSize).set(⟦2-char-id⟧.subarray(0,this.seedSize));try{⟦2-char-id⟧=⟦2-char-id⟧.compute(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(⟦2-char-id⟧)}if(this.lastLightPass=⟦2-char-id⟧[⟦2-char-id⟧>>1],1&⟦2-char-id⟧){const ⟦2-char-id⟧=this.pool.takeUint16();return ⟦2-char-id⟧.set(this.lightU16.view()),{uD:⟦2-char-id⟧,isUint16:!0}}const ⟦2-char-id⟧=this.pool.takeUint8();return ⟦2-char-id⟧.set(this.lightU8.view()),{uD:⟦2-char-id⟧,isUint16:!1}}skySeedColumnsRead(⟦2-char-id⟧){return!!this.engine.eO()&&(⟦2-char-id⟧.set(this.seedRead.view()),!0)}forgetKeptStates(⟦2-char-id⟧){this.engine.QO(⟦2-char-id⟧)}free(){this.engine.free()}}const ⟦2-char-id⟧=/^(0|[1-9]\\d*)$/;function ⟦2-char-id⟧(⟦2-char-id⟧){return"number"===typeof ⟦2-char-id⟧&&Number.isInteger(⟦2-char-id⟧)&&⟦2-char-id⟧>=0&&⟦2-char-id⟧<=2147483647}new WeakMap,new WeakMap;const ⟦2-char-id⟧=new Uint32Array(0);const ⟦2-char-id⟧=new ArrayBuffer(0);const ⟦2-char-id⟧=[0,1,2,0,2,3];let ⟦2-char-id⟧=new Uint32Array(0);function ⟦2-char-id⟧(⟦2-char-id⟧){if(⟦2-char-id⟧.length<6*⟦2-char-id⟧){const ⟦2-char-id⟧=Math.max(⟦2-char-id⟧,2*⟦2-char-id⟧.length/6);⟦2-char-id⟧=function(⟦2-char-id⟧,⟦2-char-id⟧){for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=4*⟦2-char-id⟧,⟦2-char-id⟧=6*⟦2-char-id⟧;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<6;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧+⟦2-char-id⟧]=⟦2-char-id⟧+⟦2-char-id⟧[⟦2-char-id⟧]}return ⟦2-char-id⟧}(new Uint32Array(6*⟦2-char-id⟧),⟦2-char-id⟧)}return ⟦2-char-id⟧.slice(0,6*⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧,4*⟦2-char-id⟧);return ⟦2-char-id⟧?⟦2-char-id⟧.slice():new Float32Array(⟦2-char-id⟧)}const ⟦2-char-id⟧={computed:1,provided:2,zeroedFull:3},⟦2-char-id⟧=4294967295,⟦2-char-id⟧=[1,2,4,3,0,⟦2-char-id⟧.computed,⟦2-char-id⟧.provided,⟦2-char-id⟧.zeroedFull,4,8,16,32,64,128,256,8,0,1,2,3,4,1,2,0,1,2,3,2,0,1,16,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,4,8,16,15,8,⟦2-char-id⟧,1,2],⟦2-char-id⟧=[],⟦2-char-id⟧=[];function ⟦2-char-id⟧(⟦2-char-id⟧){return Number.isInteger(⟦2-char-id⟧)&&⟦2-char-id⟧>=0&&⟦2-char-id⟧<2**32}function ⟦2-char-id⟧(⟦2-char-id⟧){try{return ⟦2-char-id⟧()}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧(⟦2-char-id⟧)?⟦2-char-id⟧(⟦2-char-id⟧.message):new ⟦2-char-id⟧(⟦2-char-id⟧)}}class ⟦2-char-id⟧ extends ⟦2-char-id⟧{static create(⟦2-char-id⟧,⟦2-char-id⟧){!function(⟦2-char-id⟧){const ⟦2-char-id⟧="function"===typeof ⟦2-char-id⟧.tk?⟦2-char-id⟧((()=>⟦2-char-id⟧.tk())):[];if(⟦2-char-id⟧.length!==⟦2-char-id⟧.length||!⟦2-char-id⟧.every(((⟦2-char-id⟧,⟦2-char-id⟧)=>⟦2-char-id⟧[⟦2-char-id⟧]===⟦2-char-id⟧)))throw new ⟦2-char-id⟧(`@bloxd/wasm\'s mesher constants [${Array.from(TB).join()}] are not wasmChunkMesher.ts\'s [${Jl.join()}]`)}(⟦2-char-id⟧.JD);const ⟦2-char-id⟧=function(⟦2-char-id⟧){var ⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧.lightEmissionLookup,⟦2-char-id⟧.skyLightEmissionLookup,⟦2-char-id⟧.lightFilterLookup,⟦2-char-id⟧.opacityLookup),⟦2-char-id⟧=Int32Array.from({length:⟦2-char-id⟧.blockFaceToMatId.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>{const ⟦2-char-id⟧=⟦2-char-id⟧.blockFaceToMatId[⟦2-char-id⟧];if(void 0===⟦2-char-id⟧)return-1;if(!⟦2-char-id⟧(⟦2-char-id⟧))throw new ⟦2-char-id⟧(`blockFaceToMatId[${dB}] is ${String(VB)}`);return ⟦2-char-id⟧}));let ⟦2-char-id⟧=0;const ⟦2-char-id⟧=[];for(const[⟦2-char-id⟧,⟦2-char-id⟧]of Object.entries(⟦2-char-id⟧.matIdToTerrainId)){const ⟦2-char-id⟧=Number(⟦2-char-id⟧);if(⟦2-char-id⟧.test(⟦2-char-id⟧)&&!(⟦2-char-id⟧>32768)){if(void 0!==⟦2-char-id⟧&&!⟦2-char-id⟧(⟦2-char-id⟧))throw new ⟦2-char-id⟧(`matIdToTerrainId[${DB}] is ${String(uB)}`);⟦2-char-id⟧.push([⟦2-char-id⟧,null!==⟦2-char-id⟧&&void 0!==⟦2-char-id⟧?uB:-1]),⟦2-char-id⟧=Math.max(⟦2-char-id⟧,⟦2-char-id⟧+1)}}const ⟦2-char-id⟧=new Int32Array(⟦2-char-id⟧).fill(-1);for(const[⟦2-char-id⟧,⟦2-char-id⟧]of ⟦2-char-id⟧)⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧.matColorLookup,⟦2-char-id⟧=new Float64Array(3*⟦2-char-id⟧.length),⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧.length);for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧.length;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(⟦2-char-id⟧){if(!Array.isArray(⟦2-char-id⟧))throw new ⟦2-char-id⟧(`matColorLookup[${DB}] is not an array`);⟦2-char-id⟧[⟦2-char-id⟧]=1;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<3;⟦2-char-id⟧++)⟦2-char-id⟧[3*⟦2-char-id⟧+⟦2-char-id⟧]=Number(⟦2-char-id⟧[⟦2-char-id⟧])}}const ⟦2-char-id⟧=Int32Array.from(⟦2-char-id⟧.faceGroupTerrainIds,(⟦2-char-id⟧=>{if(!⟦2-char-id⟧(⟦2-char-id⟧))throw new ⟦2-char-id⟧(`faceGroupTerrainIds holds ${BB}`);return ⟦2-char-id⟧})),⟦2-char-id⟧=Uint8Array.from(⟦2-char-id⟧.faceGroupLayout,(⟦2-char-id⟧=>{if(!Number.isInteger(⟦2-char-id⟧)||⟦2-char-id⟧<0||⟦2-char-id⟧>5)throw new ⟦2-char-id⟧(`faceGroupLayout holds ${BB}`);return ⟦2-char-id⟧}));return{FD:⟦2-char-id⟧.emission,skyEmission:⟦2-char-id⟧.skyEmission,KD:⟦2-char-id⟧.filters,opacity:⟦2-char-id⟧.opacity,solid:Uint8Array.from({length:⟦2-char-id⟧.solidLookupArr.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>⟦2-char-id⟧.solidLookupArr[⟦2-char-id⟧]?1:0)),blockFaceMat:⟦2-char-id⟧,matTerrain:⟦2-char-id⟧,matAtlasIndex:Float64Array.from({length:⟦2-char-id⟧.atlasIndexLookup.length},((⟦2-char-id⟧,⟦2-char-id⟧)=>Number(⟦2-char-id⟧.atlasIndexLookup[⟦2-char-id⟧]))),matColour:⟦2-char-id⟧,matColourSet:⟦2-char-id⟧,materialBlockFlags:⟦2-char-id⟧.materialBlockFlags,faceGroupTerrainIds:⟦2-char-id⟧,faceGroupLayout:⟦2-char-id⟧,visOccluders:null!==(⟦2-char-id⟧=⟦2-char-id⟧.visOccluders)&&void 0!==⟦2-char-id⟧?TB:null,rD:Float64Array.from(⟦2-char-id⟧.rD,Number),cD:Number(⟦2-char-id⟧.cD),flags:(⟦2-char-id⟧.doAO?1:0)|(⟦2-char-id⟧.skipRevAo?2:0)|(⟦2-char-id⟧.compactParts?4:0),UD:⟦2-char-id⟧.UD,keptLightStates:null!==(⟦2-char-id⟧=⟦2-char-id⟧.keptLightStates)&&void 0!==⟦2-char-id⟧?dB:4,decodedChunks:null!==(⟦2-char-id⟧=⟦2-char-id⟧.decodedChunks)&&void 0!==⟦2-char-id⟧?VB:64}}(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧((()=>new ⟦2-char-id⟧.JD.lk(⟦2-char-id⟧.FD,⟦2-char-id⟧.skyEmission,⟦2-char-id⟧.KD,⟦2-char-id⟧.opacity,⟦2-char-id⟧.solid,⟦2-char-id⟧.blockFaceMat,⟦2-char-id⟧.matTerrain,⟦2-char-id⟧.matAtlasIndex,⟦2-char-id⟧.matColour,⟦2-char-id⟧.matColourSet,⟦2-char-id⟧.materialBlockFlags,⟦2-char-id⟧.faceGroupTerrainIds,⟦2-char-id⟧.faceGroupLayout,⟦2-char-id⟧.visOccluders,⟦2-char-id⟧.rD,⟦2-char-id⟧.cD,⟦2-char-id⟧.flags,⟦2-char-id⟧.UD,⟦2-char-id⟧.keptLightStates,⟦2-char-id⟧.decodedChunks)));try{return new ⟦2-char-id⟧(⟦2-char-id⟧,function(⟦2-char-id⟧){return new Proxy(⟦2-char-id⟧,{get(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=Reflect.get(⟦2-char-id⟧,⟦2-char-id⟧);return"function"!==typeof ⟦2-char-id⟧?dB:function(){for(var ⟦2-char-id⟧=arguments.length,⟦2-char-id⟧=new Array(⟦2-char-id⟧),⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧]=arguments[⟦2-char-id⟧];return ⟦2-char-id⟧((()=>⟦2-char-id⟧.apply(⟦2-char-id⟧,⟦2-char-id⟧)))}}})}(⟦2-char-id⟧),⟦2-char-id⟧.UD,⟦2-char-id⟧.compactParts)}catch(⟦2-char-id⟧){throw ⟦2-char-id⟧ instanceof ⟦2-char-id⟧?⟦2-char-id⟧.push(⟦2-char-id⟧):⟦2-char-id⟧.free(),⟦2-char-id⟧}}constructor(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){super(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧),this.mesher=⟦2-char-id⟧,this.compactParts=⟦2-char-id⟧,this.lastComputeKind="wasm",this.lastComputeMs=0,this.UD=void 0,this.hoodStarts=new Uint32Array(⟦2-char-id⟧),this.hoodSerials=new Uint32Array(⟦2-char-id⟧),this.hoodEnds=new Uint32Array(⟦2-char-id⟧),this.hoodFrom=new Uint32Array(⟦2-char-id⟧),this.UD=⟦2-char-id⟧}loadHood(⟦2-char-id⟧,⟦2-char-id⟧){const{mesher:⟦2-char-id⟧,view:⟦2-char-id⟧,UD:⟦2-char-id⟧,hoodSerials:⟦2-char-id⟧,hoodStarts:⟦2-char-id⟧,hoodEnds:⟦2-char-id⟧,hoodFrom:⟦2-char-id⟧}=this;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){var ⟦2-char-id⟧,⟦2-char-id⟧;⟦2-char-id⟧[⟦2-char-id⟧]=null!==(⟦2-char-id⟧=null===(⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧])||void 0===⟦2-char-id⟧?void 0:⟦2-char-id⟧.serial)&&void 0!==⟦2-char-id⟧?gB:⟦2-char-id⟧}const ⟦2-char-id⟧=⟦2-char-id⟧.xO(⟦2-char-id⟧,⟦2-char-id⟧);⟦2-char-id⟧.fill(⟦2-char-id⟧);let ⟦2-char-id⟧=0;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(⟦2-char-id⟧&&(1===⟦2-char-id⟧[⟦2-char-id⟧]||2===⟦2-char-id⟧[⟦2-char-id⟧])){const[⟦2-char-id⟧,⟦2-char-id⟧]=1===⟦2-char-id⟧[⟦2-char-id⟧]?⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧)[0],⟦2-char-id⟧,⟦2-char-id⟧):[0,⟦2-char-id⟧],[⟦2-char-id⟧,⟦2-char-id⟧]=⟦2-char-id⟧.from(⟦2-char-id⟧,⟦2-char-id⟧);⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧,⟦2-char-id⟧+=⟦2-char-id⟧.to(⟦2-char-id⟧,⟦2-char-id⟧)-⟦2-char-id⟧}⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧}const ⟦2-char-id⟧=⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧.ZO(⟦2-char-id⟧),⟦2-char-id⟧);let ⟦2-char-id⟧=0;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++)⟦2-char-id⟧[⟦2-char-id⟧]!==⟦2-char-id⟧&&⟦2-char-id⟧.set(⟦2-char-id⟧[⟦2-char-id⟧].runs.subarray(⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧[⟦2-char-id⟧]+⟦2-char-id⟧[⟦2-char-id⟧]-⟦2-char-id⟧),⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];⟦2-char-id⟧.PO(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}computeFromNeighbours(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){if(⟦2-char-id⟧!==⟦2-char-id⟧)throw new Error("WasmChunkMesher lights the chunks loadHood loaded: pass LOADED_HOOD");const ⟦2-char-id⟧=performance.now(),⟦2-char-id⟧=this.computeWritten(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);return this.lastComputeMs=performance.now()-⟦2-char-id⟧,⟦2-char-id⟧}mesh(⟦2-char-id⟧){const ⟦2-char-id⟧=this.checkJob(⟦2-char-id⟧),{mesher:⟦2-char-id⟧,view:⟦2-char-id⟧}=this,⟦2-char-id⟧=this.writeAndMesh(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧.aO();return function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧[1];if(1&⟦2-char-id⟧[0]){const ⟦2-char-id⟧=[];for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧.subarray(8+2*⟦2-char-id⟧);⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧[0],⟦2-char-id⟧[1],⟦2-char-id⟧))}return{lightOnly:!0,lightDataArrays:⟦2-char-id⟧}}const ⟦2-char-id⟧=[],⟦2-char-id⟧=0!==(2&⟦2-char-id⟧[0])?[]:null;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<⟦2-char-id⟧;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧.subarray(8+16*⟦2-char-id⟧),⟦2-char-id⟧=-1===(0|⟦2-char-id⟧[0])?void 0:0|⟦2-char-id⟧[0],⟦2-char-id⟧=⟦2-char-id⟧[1],⟦2-char-id⟧=⟦2-char-id⟧[2],⟦2-char-id⟧=0!==(8&⟦2-char-id⟧),⟦2-char-id⟧={vertices:⟦2-char-id⟧?Bl:⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧[3],⟦2-char-id⟧[4]).slice().buffer,usesAtlas:0!==(1&⟦2-char-id⟧),indices:⟦2-char-id⟧?ep:⟦2-char-id⟧(⟦2-char-id⟧),uD:2&⟦2-char-id⟧?⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧[5],gB,⟦2-char-id⟧):null,aD:⟦2-char-id⟧,terrainID:⟦2-char-id⟧,faceGroups:16&⟦2-char-id⟧?⟦2-char-id⟧(Int32Array,⟦2-char-id⟧[7],15).slice():null};4&⟦2-char-id⟧&&(⟦2-char-id⟧.packedVertices=⟦2-char-id⟧?⟦2-char-id⟧(Uint32Array,⟦2-char-id⟧[6],3*⟦2-char-id⟧).slice():void 0),⟦2-char-id⟧&&(⟦2-char-id⟧.vertexCount=4*⟦2-char-id⟧),⟦2-char-id⟧.push(⟦2-char-id⟧),⟦2-char-id⟧&&⟦2-char-id⟧.push({terrainID:⟦2-char-id⟧,numFaces:⟦2-char-id⟧,is:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[8],⟦2-char-id⟧).slice(),js:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[9],⟦2-char-id⟧).slice(),ks:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[10],⟦2-char-id⟧).slice(),wids:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[11],⟦2-char-id⟧).slice(),hts:⟦2-char-id⟧(Int16Array,⟦2-char-id⟧[12],⟦2-char-id⟧).slice(),EB:⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧[13],⟦2-char-id⟧).slice(),diagonals:⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧[14],⟦2-char-id⟧).slice()})}const ⟦2-char-id⟧={lightOnly:!1,vertexDataInfo:⟦2-char-id⟧,faceLayout:⟦2-char-id⟧,buildMs:performance.now()-⟦2-char-id⟧},⟦2-char-id⟧=⟦2-char-id⟧[2];return 0!==⟦2-char-id⟧&&(⟦2-char-id⟧.visNegNeighbours=⟦2-char-id⟧[3]),⟦2-char-id⟧>1&&(⟦2-char-id⟧.visGraphs=3===⟦2-char-id⟧?⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧[4],8).slice():null),⟦2-char-id⟧}(⟦2-char-id⟧,⟦2-char-id⟧(Uint32Array,⟦2-char-id⟧.jO(),⟦2-char-id⟧),⟦2-char-id⟧.chunk.aD,this.compactParts,⟦2-char-id⟧)}writeAndMesh(⟦2-char-id⟧,⟦2-char-id⟧){const{mesher:⟦2-char-id⟧,view:⟦2-char-id⟧,UD:⟦2-char-id⟧}=this;⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧.dD(),⟦2-char-id⟧).set(⟦2-char-id⟧.chunk.cO);const{light:⟦2-char-id⟧}=⟦2-char-id⟧;if(⟦2-char-id⟧&&"provided"===⟦2-char-id⟧.kind){const ⟦2-char-id⟧=⟦2-char-id⟧.nO(⟦2-char-id⟧.isUint16);⟦2-char-id⟧.isUint16?⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧,this.chunkSizeCubed).set(⟦2-char-id⟧.data):⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧,this.chunkSizeCubed).set(⟦2-char-id⟧.data)}let ⟦2-char-id⟧=0,⟦2-char-id⟧=0;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<6;⟦2-char-id⟧++){var ⟦2-char-id⟧,⟦2-char-id⟧;const ⟦2-char-id⟧=null===(⟦2-char-id⟧=⟦2-char-id⟧.neighbourLightBorders)||void 0===⟦2-char-id⟧?void 0:⟦2-char-id⟧[⟦2-char-id⟧];⟦2-char-id⟧&&(⟦2-char-id⟧(Uint16Array,⟦2-char-id⟧.SO(⟦2-char-id⟧),⟦2-char-id⟧*⟦2-char-id⟧).set(⟦2-char-id⟧),⟦2-char-id⟧|=1<<⟦2-char-id⟧),null!==(⟦2-char-id⟧=⟦2-char-id⟧.neighbourLightIsUint16)&&void 0!==⟦2-char-id⟧&&⟦2-char-id⟧[⟦2-char-id⟧]&&(⟦2-char-id⟧|=1<<⟦2-char-id⟧)}return 32&⟦2-char-id⟧&&this.writeLayout(⟦2-char-id⟧.lightOnlyLayout),⟦2-char-id⟧.mesh(⟦2-char-id⟧,⟦2-char-id⟧.neighboursBitmask,⟦2-char-id⟧.neighbourOpenSkyFaces,⟦2-char-id⟧,⟦2-char-id⟧)}checkJob(⟦2-char-id⟧){const{chunk:⟦2-char-id⟧,light:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=this.UD;if(⟦2-char-id⟧.cO.length!==⟦2-char-id⟧)throw new ⟦2-char-id⟧(`WasmChunkMesher needs a _wholeLayerVoxel of ${VB}`);if(!⟦2-char-id⟧(⟦2-char-id⟧.neighboursBitmask)||!⟦2-char-id⟧(⟦2-char-id⟧.neighbourOpenSkyFaces))throw new ⟦2-char-id⟧(`WasmChunkMesher neighbours bitmask ${BB.neighboursBitmask} or open sky faces ${BB.neighbourOpenSkyFaces}`);let ⟦2-char-id⟧=0;if(⟦2-char-id⟧){const ⟦2-char-id⟧="provided"===⟦2-char-id⟧.kind;if(⟦2-char-id⟧&&(⟦2-char-id⟧.data.length!==this.chunkSizeCubed||⟦2-char-id⟧.data instanceof Uint16Array!==⟦2-char-id⟧.isUint16))throw new ⟦2-char-id⟧(`WasmChunkMesher light is not ${this.chunkSizeCubed} ${dB.isUint16?"u16":"u8"} values`);⟦2-char-id⟧|=⟦2-char-id⟧[⟦2-char-id⟧.kind]|(⟦2-char-id⟧&&⟦2-char-id⟧.isUint16?4:0)}const ⟦2-char-id⟧=⟦2-char-id⟧.neighbourLightBorders;if(⟦2-char-id⟧){⟦2-char-id⟧|=8;for(let ⟦2-char-id⟧=0;⟦2-char-id⟧<6;⟦2-char-id⟧++){const ⟦2-char-id⟧=⟦2-char-id⟧[⟦2-char-id⟧];if(⟦2-char-id⟧&&⟦2-char-id⟧.length!==⟦2-char-id⟧*⟦2-char-id⟧)throw new ⟦2-char-id⟧(`WasmChunkMesher light border ${BB} is not ${VB*VB} light values`)}}⟦2-char-id⟧.neighbourLightIsUint16&&(⟦2-char-id⟧|=16);const ⟦2-char-id⟧=⟦2-char-id⟧?⟦2-char-id⟧.lightOnlyLayout:null;if(⟦2-char-id⟧){for(const ⟦2-char-id⟧ of ⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.numFaces,⟦2-char-id⟧=[⟦2-char-id⟧.is,⟦2-char-id⟧.js,⟦2-char-id⟧.ks,⟦2-char-id⟧.wids,⟦2-char-id⟧.hts,⟦2-char-id⟧.EB,⟦2-char-id⟧.diagonals];if(!⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧.some((⟦2-char-id⟧=>⟦2-char-id⟧.length!==⟦2-char-id⟧)))throw new ⟦2-char-id⟧("WasmChunkMesher face layout arrays disagree with numFaces")}⟦2-char-id⟧|=32}return ⟦2-char-id⟧|(⟦2-char-id⟧.visGraphs?64:0)|(⟦2-char-id⟧.ED?128:0)|(⟦2-char-id⟧.LD?256:0)}writeLayout(⟦2-char-id⟧){const{mesher:⟦2-char-id⟧,view:⟦2-char-id⟧}=this;let ⟦2-char-id⟧=0;for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧+=⟦2-char-id⟧.numFaces;⟦2-char-id⟧.hO(⟦2-char-id⟧.length,⟦2-char-id⟧);const ⟦2-char-id⟧=⟦2-char-id⟧.WO(),⟦2-char-id⟧=⟦2-char-id⟧.XO(),⟦2-char-id⟧=⟦2-char-id⟧.CO(),⟦2-char-id⟧=⟦2-char-id⟧(Uint32Array,⟦2-char-id⟧,⟦2-char-id⟧.length),⟦2-char-id⟧=⟦2-char-id⟧(Int16Array,⟦2-char-id⟧,5*⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧(Uint8Array,⟦2-char-id⟧,2*⟦2-char-id⟧);let ⟦2-char-id⟧=0;⟦2-char-id⟧.forEach(((⟦2-char-id⟧,⟦2-char-id⟧)=>{⟦2-char-id⟧[⟦2-char-id⟧]=⟦2-char-id⟧.numFaces,⟦2-char-id⟧.set(⟦2-char-id⟧.is,⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.js,⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.ks,2*⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.wids,3*⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.hts,4*⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.EB,⟦2-char-id⟧),⟦2-char-id⟧.set(⟦2-char-id⟧.diagonals,⟦2-char-id⟧+⟦2-char-id⟧),⟦2-char-id⟧+=⟦2-char-id⟧.numFaces}))}}Error;function ⟦2-char-id⟧(⟦2-char-id⟧){return/out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(⟦2-char-id⟧))}new Set(["start_refused","light_state_refused","abort_refused","trap_out_of_memory"]),new Set;function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.push(⟦2-char-id⟧.is.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.js.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.ks.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.wids.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.hts.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.EB.buffer),⟦2-char-id⟧.push(⟦2-char-id⟧.diagonals.buffer)}class ⟦2-char-id⟧ extends Error{}let ⟦2-char-id⟧,⟦2-char-id⟧=null,⟦2-char-id⟧=null;const ⟦2-char-id⟧=[];let ⟦2-char-id⟧=0,⟦2-char-id⟧=!1,⟦2-char-id⟧=0;let ⟦2-char-id⟧=0,⟦2-char-id⟧=null,⟦2-char-id⟧=!1;const ⟦2-char-id⟧=new class{constructor(){this.runs=new Map}take(⟦2-char-id⟧){⟦2-char-id⟧.forgetAll&&this.runs.clear();for(const ⟦2-char-id⟧ of ⟦2-char-id⟧.forgotten)this.runs.delete(⟦2-char-id⟧);return ⟦2-char-id⟧.sentIds.forEach(((⟦2-char-id⟧,⟦2-char-id⟧)=>{this.runs.set(⟦2-char-id⟧,new ⟦2-char-id⟧(⟦2-char-id⟧.sentRuns[⟦2-char-id⟧]))})),Array.from(⟦2-char-id⟧.ids,(⟦2-char-id⟧=>{if(⟦2-char-id⟧<0)return null;const ⟦2-char-id⟧=this.runs.get(⟦2-char-id⟧);if(!⟦2-char-id⟧)throw new Error(`The meshing worker holds no chunk ${BB}`);return ⟦2-char-id⟧}))}clear(){this.runs.clear()}get size(){return this.runs.size}get bytes(){let ⟦2-char-id⟧=0;for(const{runs:⟦2-char-id⟧}of this.runs.values())⟦2-char-id⟧+=⟦2-char-id⟧.byteLength;return ⟦2-char-id⟧}},⟦2-char-id⟧=new class{constructor(){this.entries=new Map}take(⟦2-char-id⟧){var ⟦2-char-id⟧;const{lightHood:⟦2-char-id⟧,hood:⟦2-char-id⟧}=⟦2-char-id⟧;⟦2-char-id⟧.forgetAll&&this.entries.clear();for(const ⟦2-char-id⟧ of ⟦2-char-id⟧.forgotten)this.entries.delete(⟦2-char-id⟧);⟦2-char-id⟧.providedTag&&(⟦2-char-id⟧.providedLightData=this.Dg(⟦2-char-id⟧.ids[13],⟦2-char-id⟧.providedTag).slice()),null===(⟦2-char-id⟧=⟦2-char-id⟧.borderTags)||void 0===⟦2-char-id⟧||⟦2-char-id⟧.forEach(((⟦2-char-id⟧,⟦2-char-id⟧)=>{if(⟦2-char-id⟧){const ⟦2-char-id⟧=this.Dg(⟦2-char-id⟧.ids[⟦2-char-id⟧[⟦2-char-id⟧]],⟦2-char-id⟧);⟦2-char-id⟧.neighbourLightBorders[⟦2-char-id⟧]=⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.neighbourLightIsUint16[⟦2-char-id⟧],⟦2-char-id⟧,⟦2-char-id⟧.chunk.size)}}))}keep(⟦2-char-id⟧,⟦2-char-id⟧){if(!⟦2-char-id⟧.lightHood.keep)return;const ⟦2-char-id⟧=⟦2-char-id⟧.hood.ids[13];⟦2-char-id⟧?this.entries.set(⟦2-char-id⟧,{tag:⟦2-char-id⟧.meshJobId,data:⟦2-char-id⟧.slice()}):this.entries.delete(⟦2-char-id⟧)}⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=this.entries.get(⟦2-char-id⟧);if((null===⟦2-char-id⟧||void 0===⟦2-char-id⟧?void 0:⟦2-char-id⟧.tag)!==⟦2-char-id⟧)throw new Error(`The meshing worker holds no light ${TB} for chunk ${BB}${dB?`, but light ${⟦2-char-id⟧.tag}`:""}`);return ⟦2-char-id⟧.data}clear(){this.entries.clear()}get size(){return this.entries.size}};function ⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧={type:"lightEngineReport",message:⟦2-char-id⟧,failureKind:⟦2-char-id⟧};self.postMessage(⟦2-char-id⟧)}function ⟦2-char-id⟧(){if(⟦2-char-id⟧)return;⟦2-char-id⟧=!0;const ⟦2-char-id⟧={type:"lightEngineReport",message:`No wasm mesher on this worker (${Sl()})`,lost:!0};self.postMessage(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){return ⟦2-char-id⟧ instanceof Error?⟦2-char-id⟧.message:String(⟦2-char-id⟧)}function ⟦2-char-id⟧(⟦2-char-id⟧){try{return ⟦2-char-id⟧=⟦2-char-id⟧.create(⟦2-char-id⟧,⟦2-char-id⟧),!1}catch(⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.takeRefusedAllocation();⟦2-char-id⟧ instanceof ⟦2-char-id⟧&&⟦2-char-id⟧.markFailed(⟦2-char-id⟧.trap);const ⟦2-char-id⟧=⟦2-char-id⟧>0&&!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)?` (alloc_failed ${dB} bytes)`:"",⟦2-char-id⟧=⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧>0||⟦2-char-id⟧ instanceof ⟦2-char-id⟧;return ⟦2-char-id⟧(`Wasm mesher failed${VB} to start: ${Kl(TB)}`,⟦2-char-id⟧?void 0:⟦2-char-id⟧?"start_refused":"start_failed"),⟦2-char-id⟧||⟦2-char-id⟧}}function ⟦2-char-id⟧(){var ⟦2-char-id⟧;null!==(⟦2-char-id⟧=⟦2-char-id⟧)&&void 0!==⟦2-char-id⟧&&⟦2-char-id⟧.isReady()?⟦2-char-id⟧.free():⟦2-char-id⟧.push(⟦2-char-id⟧),⟦2-char-id⟧=null}function ⟦2-char-id⟧(⟦2-char-id⟧){return!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)&&!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)&&⟦2-char-id⟧(⟦2-char-id⟧)}function ⟦2-char-id⟧(){if(null!==⟦2-char-id⟧)return ⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧();return"ready"===⟦2-char-id⟧?"its start failed":"failed"===⟦2-char-id⟧?⟦2-char-id⟧():`wasm ${BB}`}self.onmessage=⟦2-char-id⟧=>{let{data:{type:⟦2-char-id⟧,data:⟦2-char-id⟧}}=⟦2-char-id⟧;switch(⟦2-char-id⟧){case"wasmInit":⟦2-char-id⟧(⟦2-char-id⟧)||⟦2-char-id⟧(`Wasm did not start (${Ad()}), so this worker meshes nothing`);break;case"meshingInit":!function(⟦2-char-id⟧){⟦2-char-id⟧=⟦2-char-id⟧,⟦2-char-id⟧.clear(),⟦2-char-id⟧.clear(),⟦2-char-id⟧=0,⟦2-char-id⟧=!1,⟦2-char-id⟧=0,⟦2-char-id⟧=null,⟦2-char-id⟧&&⟦2-char-id⟧();⟦2-char-id⟧=function(⟦2-char-id⟧){const ⟦2-char-id⟧=function(⟦2-char-id⟧){var ⟦2-char-id⟧;return ⟦2-char-id⟧.isBloxdWasmReady()?{JD:⟦2-char-id⟧.getBloxdWasm(),view:⟦2-char-id⟧.wasmView,BufferView:⟦2-char-id⟧.WasmBufferView,isReady:⟦2-char-id⟧.isBloxdWasmReady,markFailed:⟦2-char-id⟧.markBloxdWasmFailed,takeRefusedAllocation:null!==(⟦2-char-id⟧=⟦2-char-id⟧.takeBloxdWasmRefusedAllocation)&&void 0!==⟦2-char-id⟧?TB:()=>0}:null}(⟦2-char-id⟧);return ⟦2-char-id⟧?{...TB,trapContext:()=>{const ⟦2-char-id⟧=Math.round(⟦2-char-id⟧.getBloxdWasmMemory().buffer.byteLength/2**20),⟦2-char-id⟧=⟦2-char-id⟧.getLastBloxdWasmPanic();return`wasm memory ${TB} MB, ${null===dB?"no panic message":`panic: ${function(⟦2-char-id⟧){return ⟦2-char-id⟧.replace(/\\s*\\n\\s*/g," / ").slice(0,300)}(⟦2-char-id⟧)}`}`},takeRefusedAllocation:⟦2-char-id⟧.takeBloxdWasmRefusedAllocation}:null}(⟦2-char-id⟧),⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧);⟦2-char-id⟧||⟦2-char-id⟧()}(⟦2-char-id⟧);break;case"xD":!function(⟦2-char-id⟧){const ⟦2-char-id⟧=performance.now(),{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧.chunk,⟦2-char-id⟧={data:null,isUint16:!1,kind:"computed",source:"none",seedColumnsRead:null,ms:0,engine:null};let ⟦2-char-id⟧=!1;const ⟦2-char-id⟧=null!==⟦2-char-id⟧;⟦2-char-id⟧=!1;try{const ⟦2-char-id⟧=⟦2-char-id⟧.take(⟦2-char-id⟧.hood);⟦2-char-id⟧.take(⟦2-char-id⟧),⟦2-char-id⟧=!0;const ⟦2-char-id⟧=function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){⟦2-char-id⟧&&!⟦2-char-id⟧.isReady()&&⟦2-char-id⟧();const ⟦2-char-id⟧=⟦2-char-id⟧;if(!⟦2-char-id⟧)throw new ⟦2-char-id⟧(`No wasm mesher on this worker (${Sl()})`);let ⟦2-char-id⟧=!1;try{⟦2-char-id⟧.loadHood(⟦2-char-id⟧,function(⟦2-char-id⟧){const{chunk:⟦2-char-id⟧}=⟦2-char-id⟧;return!⟦2-char-id⟧.computeLighting||⟦2-char-id⟧.providedLightData||⟦2-char-id⟧.LD||⟦2-char-id⟧(⟦2-char-id⟧.ED,⟦2-char-id⟧.chunkJ,⟦2-char-id⟧.highestChunkJ)?1:⟦2-char-id⟧}(⟦2-char-id⟧)),⟦2-char-id⟧=!0;const ⟦2-char-id⟧=function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){!function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const{chunk:⟦2-char-id⟧,skySeedGrid:⟦2-char-id⟧,highestChunkJ:⟦2-char-id⟧,chunkJ:⟦2-char-id⟧}=⟦2-char-id⟧;if(!⟦2-char-id⟧.computeLighting)return;if(⟦2-char-id⟧.returnBuffers(⟦2-char-id⟧.reusableLightBuffers),⟦2-char-id⟧.providedLightData)return ⟦2-char-id⟧.data=⟦2-char-id⟧.providedLightData,⟦2-char-id⟧.isUint16=⟦2-char-id⟧.providedLightIsUint16,⟦2-char-id⟧.kind="provided",void(⟦2-char-id⟧.source=⟦2-char-id⟧.providedLightReused?"reused":"server");if(⟦2-char-id⟧(⟦2-char-id⟧.ED,⟦2-char-id⟧,⟦2-char-id⟧))return;if(⟦2-char-id⟧.LD)return ⟦2-char-id⟧.data=⟦2-char-id⟧.getZeroedFullChunkLightData(),⟦2-char-id⟧.isUint16=!1,void(⟦2-char-id⟧.kind="zeroedFull");const{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.computeFromNeighbours(⟦2-char-id⟧,⟦2-char-id⟧.neighboursBitmask,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,`${YB},${gB},${oB}`);if(⟦2-char-id⟧.ms=⟦2-char-id⟧.lastComputeMs,⟦2-char-id⟧.engine=⟦2-char-id⟧.lastComputeKind,⟦2-char-id⟧.data=⟦2-char-id⟧.uD,⟦2-char-id⟧.isUint16=⟦2-char-id⟧.isUint16,⟦2-char-id⟧.kind="computed",⟦2-char-id⟧.source="clientBfs",function(⟦2-char-id⟧,⟦2-char-id⟧){return null!==⟦2-char-id⟧&&⟦2-char-id⟧<⟦2-char-id⟧}(⟦2-char-id⟧,⟦2-char-id⟧)){const ⟦2-char-id⟧=new Uint8Array(⟦2-char-id⟧.length);⟦2-char-id⟧.skySeedColumnsRead(⟦2-char-id⟧)&&(⟦2-char-id⟧.seedColumnsRead=⟦2-char-id⟧)}}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧=performance.now(),⟦2-char-id⟧=⟦2-char-id⟧.mesh({chunk:⟦2-char-id⟧.chunk,neighboursBitmask:⟦2-char-id⟧.neighboursBitmask,light:⟦2-char-id⟧.data&&{data:⟦2-char-id⟧.data,isUint16:⟦2-char-id⟧.isUint16,kind:⟦2-char-id⟧.kind},neighbourLightBorders:⟦2-char-id⟧.neighbourLightBorders,neighbourLightIsUint16:⟦2-char-id⟧.neighbourLightIsUint16,neighbourOpenSkyFaces:⟦2-char-id⟧.neighbourOpenSkyFaces,lightOnlyLayout:⟦2-char-id⟧.lightOnly?⟦2-char-id⟧.cachedFaceLayout:null,visGraphs:!1!==⟦2-char-id⟧.visGraphs});return{...yB,meshMs:performance.now()-⟦2-char-id⟧}}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);return ⟦2-char-id⟧=0,⟦2-char-id⟧}catch(⟦2-char-id⟧){const{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧.chunk;if(⟦2-char-id⟧ instanceof ⟦2-char-id⟧){const ⟦2-char-id⟧=⟦2-char-id⟧.data;Object.assign(⟦2-char-id⟧,{data:null,isUint16:!1,kind:"computed",source:"none",seedColumnsRead:null,ms:0,engine:null});let ⟦2-char-id⟧=⟦2-char-id⟧.reusableLightBuffers;if(⟦2-char-id⟧&&(⟦2-char-id⟧=⟦2-char-id⟧&&⟦2-char-id⟧!==⟦2-char-id⟧.providedLightData?[⟦2-char-id⟧.buffer]:[]),⟦2-char-id⟧.returnBuffers(⟦2-char-id⟧),⟦2-char-id⟧ instanceof ⟦2-char-id⟧){const ⟦2-char-id⟧=++⟦2-char-id⟧;⟦2-char-id⟧(0===(⟦2-char-id⟧&⟦2-char-id⟧-1)?`Wasm mesher could not keep a light state: ${pB.message} (${BB} on this thread), failing chunk ${TB},${lB},${JB}`:null,"light_state_refused"),++⟦2-char-id⟧>=3&&(⟦2-char-id⟧=`its memory can\'t grow: ${fl} light states refused in a row`,⟦2-char-id⟧())}else{const ⟦2-char-id⟧=⟦2-char-id⟧<3;⟦2-char-id⟧&&⟦2-char-id⟧++,⟦2-char-id⟧(⟦2-char-id⟧?`Wasm mesher could not take chunk ${TB},${lB},${JB}: ${Kl(pB)}`:null,"refused_input")}throw ⟦2-char-id⟧}if(⟦2-char-id⟧(⟦2-char-id⟧))throw ⟦2-char-id⟧;const ⟦2-char-id⟧=⟦2-char-id⟧.takeRefusedAllocation();⟦2-char-id⟧ instanceof ⟦2-char-id⟧&&⟦2-char-id⟧.markFailed(⟦2-char-id⟧.trap),⟦2-char-id⟧();throw ⟦2-char-id⟧(`Wasm mesher failed${YB>0?` (alloc_failed ${⟦2-char-id⟧} bytes)`:""} on chunk ${TB},${lB},${JB}: ${Kl(pB)}`,function(⟦2-char-id⟧,⟦2-char-id⟧){if(!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧))return"threw";if(⟦2-char-id⟧>0)return"abort_refused";return ⟦2-char-id⟧(⟦2-char-id⟧.trap)?"trap_out_of_memory":"trap"}(⟦2-char-id⟧,⟦2-char-id⟧)),⟦2-char-id⟧=⟦2-char-id⟧>0,⟦2-char-id⟧.isReady()&&⟦2-char-id⟧(⟦2-char-id⟧)&&(⟦2-char-id⟧=!0),⟦2-char-id⟧}}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧);⟦2-char-id⟧.keep(⟦2-char-id⟧,"clientBfs"===⟦2-char-id⟧.source?⟦2-char-id⟧.data:null),"lightDataArrays"in ⟦2-char-id⟧?function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧.chunk,{skySeedGrid:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=⟦2-char-id⟧.cachedFaceLayout,⟦2-char-id⟧=⟦2-char-id⟧.data,⟦2-char-id⟧=[];⟦2-char-id⟧.seedColumnsRead&&⟦2-char-id⟧.push(⟦2-char-id⟧.seedColumnsRead.buffer);for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.push(⟦2-char-id⟧.buffer);⟦2-char-id⟧.push(⟦2-char-id⟧.buffer),⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer),⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧);const ⟦2-char-id⟧={type:"meshed",i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧,meshJobId:⟦2-char-id⟧.meshJobId,lightOnlyUpdate:!0,lightDataArrays:⟦2-char-id⟧,faceLayout:⟦2-char-id⟧,computedLightData:⟦2-char-id⟧,Ip:⟦2-char-id⟧.isUint16,lightSource:⟦2-char-id⟧.source,serverLightCovered:⟦2-char-id⟧.serverLightCovered,reusableSkySeedGrid:⟦2-char-id⟧,lightSeedColumnsRead:⟦2-char-id⟧.seedColumnsRead,lightMs:⟦2-char-id⟧.ms,meshMs:⟦2-char-id⟧,jobMs:performance.now()-⟦2-char-id⟧,lightEngineKind:⟦2-char-id⟧.engine};self.postMessage(⟦2-char-id⟧,⟦2-char-id⟧)}(⟦2-char-id⟧,⟦2-char-id⟧.lightDataArrays,⟦2-char-id⟧,⟦2-char-id⟧.meshMs,⟦2-char-id⟧):function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const{i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧}=⟦2-char-id⟧.chunk,{skySeedGrid:⟦2-char-id⟧}=⟦2-char-id⟧,{vertexDataInfo:⟦2-char-id⟧,faceLayout:⟦2-char-id⟧,visGraphs:⟦2-char-id⟧,visNegNeighbours:⟦2-char-id⟧}=⟦2-char-id⟧,⟦2-char-id⟧=[];⟦2-char-id⟧.seedColumnsRead&&⟦2-char-id⟧.push(⟦2-char-id⟧.seedColumnsRead.buffer);for(const ⟦2-char-id⟧ of ⟦2-char-id⟧)⟦2-char-id⟧.vertices.byteLength>0&&⟦2-char-id⟧.push(⟦2-char-id⟧.vertices),⟦2-char-id⟧.indices.buffer.byteLength>0&&⟦2-char-id⟧.push(⟦2-char-id⟧.indices.buffer),⟦2-char-id⟧.uD&&⟦2-char-id⟧.push(⟦2-char-id⟧.uD.buffer),⟦2-char-id⟧.packedVertices&&⟦2-char-id⟧.push(⟦2-char-id⟧.packedVertices.buffer),⟦2-char-id⟧.faceGroups&&⟦2-char-id⟧.push(⟦2-char-id⟧.faceGroups.buffer);⟦2-char-id⟧.data&&⟦2-char-id⟧.push(⟦2-char-id⟧.data.buffer),⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer),⟦2-char-id⟧&&⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer);const ⟦2-char-id⟧={type:"meshed",i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧,meshJobId:⟦2-char-id⟧.meshJobId,lightOnlyUpdate:!1,vertexDataInfo:⟦2-char-id⟧,faceLayout:⟦2-char-id⟧,computedLightData:⟦2-char-id⟧.data,Ip:⟦2-char-id⟧.isUint16,lightSource:⟦2-char-id⟧.source,serverLightCovered:⟦2-char-id⟧.serverLightCovered,reusableSkySeedGrid:⟦2-char-id⟧,lightSeedColumnsRead:⟦2-char-id⟧.seedColumnsRead,lightMs:⟦2-char-id⟧.ms,meshMs:⟦2-char-id⟧.meshMs,jobMs:performance.now()-⟦2-char-id⟧,buildMs:⟦2-char-id⟧.buildMs,mesherEngineKind:"wasm",lightEngineKind:⟦2-char-id⟧.engine,...void 0===⟦2-char-id⟧?{}:{visNegNeighbours:⟦2-char-id⟧},...void 0===⟦2-char-id⟧?{}:{visGraphs:⟦2-char-id⟧}};self.postMessage(⟦2-char-id⟧,⟦2-char-id⟧)}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧)}catch(⟦2-char-id⟧){console.error(`Worker meshChunk failed for chunk (${dB}, ${VB}, ${yB})`,⟦2-char-id⟧),⟦2-char-id⟧.keep(⟦2-char-id⟧,null);const ⟦2-char-id⟧=⟦2-char-id⟧ instanceof ⟦2-char-id⟧||⟦2-char-id⟧||⟦2-char-id⟧(⟦2-char-id⟧),⟦2-char-id⟧=⟦2-char-id⟧&&!⟦2-char-id⟧&&!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)&&!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧);!function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){const ⟦2-char-id⟧=[];⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer),⟦2-char-id⟧&&⟦2-char-id⟧.push(⟦2-char-id⟧.buffer);const ⟦2-char-id⟧={type:"meshError",i:⟦2-char-id⟧,j:⟦2-char-id⟧,k:⟦2-char-id⟧,meshJobId:⟦2-char-id⟧,errorMessage:⟦2-char-id⟧ instanceof Error?⟦2-char-id⟧.message:String(⟦2-char-id⟧),cachesTaken:⟦2-char-id⟧,reusableLightBuffer:⟦2-char-id⟧,reusableSkySeedGrid:⟦2-char-id⟧,lostMesher:⟦2-char-id⟧,refusedState:⟦2-char-id⟧};self.postMessage(⟦2-char-id⟧,⟦2-char-id⟧)}(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧.meshJobId,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧.data,⟦2-char-id⟧.skySeedGrid,⟦2-char-id⟧,⟦2-char-id⟧),⟦2-char-id⟧||⟦2-char-id⟧()}}(⟦2-char-id⟧);break;default:console.error("Unrecognised meshing worker message type:",⟦2-char-id⟧)}}})();', "Worker", void 0, ⟦2-char-id⟧.p + "meshing.worker.c86831a1.worker.js")
     }
   },
-  35402: ⟦2-char-id⟧ => {
+  35308: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = self || window;
       try {
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/192.js</code> · modified · +5 / -5</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +5 / -5</summary>

```diff
@@ -1,20 +1,20 @@
 export const ⟦2-char-id⟧ = 192;
 export const ids = [192];
 export const modules = {
-  35414: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35319: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       reportCappedWasmFailure: () => ⟦2-char-id⟧,
       reportWasmFailure: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2710);
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.d - 4;
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2702);
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.e - 4;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, !1)
+      (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, !1)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, !1, ⟦2-char-id⟧)
+      (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, !1, ⟦2-char-id⟧)
     }
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/193.js</code> · modified · +1 / -1</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 193;
 export const ids = [193];
 export const modules = {
-  35454: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35362: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       ITEM_FILES_WITHOUT_SPRITE: () => ⟦2-char-id⟧,
       ITEM_SPRITES: () => ⟦2-char-id⟧,
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/194.js</code> · modified · +109 / -109</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +27 / -27</summary>

```diff
@@ -1,37 +1,37 @@
 export const ⟦2-char-id⟧ = 194;
 export const ids = [194];
 export const modules = {
-  35465: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35367: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       CreateCustomLobby: () => ⟦2-char-id⟧
     });
-    ⟦2-char-id⟧(35468);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4049),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1566),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    ⟦2-char-id⟧(35373);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4027),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1555),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2623),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1028),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1098),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4006),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35474),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1221),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1406),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1335),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(535),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4345),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(622),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1137),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1122),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4359),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35477),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35481),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2602),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1020),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1089),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3993),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35381),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1214),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1407),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1330),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(572),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4339),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(663),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1117),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1105),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4354),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35386),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35394),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -42,7 +42,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("Enter"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), ⟦2-char-id⟧ = ⟦2-char-id⟧.useRef(null), ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.d[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.showWorldsInsteadOfCustomLobbies, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1 : null === (⟦2-char-id⟧ = ⟦2-char-id⟧.d[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.customLobbyCustomSchematicLimit, [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!⟦2-char-id⟧);
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("Enter"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), ⟦2-char-id⟧ = ⟦2-char-id⟧.useRef(null), ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.e[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.showWorldsInsteadOfCustomLobbies, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1 : null === (⟦2-char-id⟧ = ⟦2-char-id⟧.e[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.customLobbyCustomSchematicLimit, [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!⟦2-char-id⟧);
       ⟦2-char-id⟧ || (⟦2-char-id⟧ = "classic_creative" === ⟦2-char-id⟧ || "classic_creativeFlat" === ⟦2-char-id⟧ ? "creative" : "classic" === ⟦2-char-id⟧ ? "peaceful" : "survival");
       const ⟦2-char-id⟧ = {
         baseOptions: {
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -82,9 +82,9 @@
 
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
         ⟦2-char-id⟧({
-          ...RJ,
+          ...qB,
           baseOptions: {
-            ...RJ.baseOptions,
+            ...qB.baseOptions,
             [⟦2-char-id⟧]: ⟦2-char-id⟧
           }
         })
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -92,9 +92,9 @@
 
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
         ⟦2-char-id⟧({
-          ...RJ,
+          ...qB,
           listedOptions: {
-            ...RJ.listedOptions,
+            ...qB.listedOptions,
             [⟦2-char-id⟧]: ⟦2-char-id⟧
           }
         })
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -102,9 +102,9 @@
 
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
         ⟦2-char-id⟧({
-          ...RJ,
+          ...qB,
           worldOptions: {
-            ...RJ.worldOptions,
+            ...qB.worldOptions,
             [⟦2-char-id⟧]: ⟦2-char-id⟧
           }
         })
```

</details>

<details>
<summary>Hunk 6 · Change · +6 / -6</summary>

```diff
@@ -112,18 +112,18 @@
 
       function ⟦2-char-id⟧(⟦2-char-id⟧) {
         ⟦2-char-id⟧({
-          ...RJ,
+          ...qB,
           mapOptions: {
-            ...RJ.mapOptions,
-            ...JJ
+            ...qB.mapOptions,
+            ...BB
           }
         })
       }(0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧.e.getNewStarterName().then((⟦2-char-id⟧ => {
-          ⟦2-char-id⟧((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.baseOptions.name ? cJ : {
-            ...cJ,
+          ⟦2-char-id⟧((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.baseOptions.name ? TB : {
+            ...TB,
             baseOptions: {
-              ...cJ.baseOptions,
+              ...TB.baseOptions,
               name: ⟦2-char-id⟧
             }
           }))
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -131,7 +131,7 @@
           console.error("Error getting new starter name:", ⟦2-char-id⟧)
         }))
       }), []), (0, ⟦2-char-id⟧.useEffect)((() => {
-        "customSchematic" === ⟦2-char-id⟧.mapOptions.mapType && null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${YJ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
+        "customSchematic" === ⟦2-char-id⟧.mapOptions.mapType && null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${oB.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
           retries: 0,
           minTimeout: 3⟦2-char-id⟧
         }).then((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 8 · Change · +7 / -7</summary>

```diff
@@ -141,43 +141,43 @@
       const ⟦2-char-id⟧ = {
           tpRequests: {
             isEnabled: () => !⟦2-char-id⟧.worldOptions.disableTpRequests,
-            GV: ⟦2-char-id⟧ => {
+            hN: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧("disableTpRequests", !⟦2-char-id⟧)
             }
           },
           spawnProtection: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.spawnProtection,
-            GV: ⟦2-char-id⟧ => {
+            hN: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧("spawnProtection", ⟦2-char-id⟧)
             }
           },
           spawnReset: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.enableSpawnReset,
-            GV: ⟦2-char-id⟧ => {
+            hN: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧("enableSpawnReset", ⟦2-char-id⟧)
             }
           },
           smpMarketplace: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.enableSmpMarketplace,
-            GV: ⟦2-char-id⟧ => {
+            hN: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧("enableSmpMarketplace", ⟦2-char-id⟧)
             }
           },
           survivalGuns: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.enableSurvivalGuns,
-            GV: ⟦2-char-id⟧ => {
+            hN: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧("enableSurvivalGuns", ⟦2-char-id⟧)
             }
           },
           fallDamage: {
             isEnabled: () => !⟦2-char-id⟧.worldOptions.disableFallDamage,
-            GV: ⟦2-char-id⟧ => {
+            hN: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧("disableFallDamage", !⟦2-char-id⟧)
             }
           },
           dayNight: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.enableDayNight,
-            GV: ⟦2-char-id⟧ => {
+            hN: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧("enableDayNight", ⟦2-char-id⟧)
             }
           }
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -190,7 +190,7 @@
           children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             domRef: ⟦2-char-id⟧,
             onValueChange: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.rb)(⟦2-char-id⟧);
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.xb)(⟦2-char-id⟧);
               ⟦2-char-id⟧("name", ⟦2-char-id⟧), ⟦2-char-id⟧.current.value = ⟦2-char-id⟧
             },
             maxLength: ⟦2-char-id⟧.R,
```

</details>

<details>
<summary>Hunk 10 · Change · +3 / -3</summary>

```diff
@@ -206,15 +206,15 @@
           className: "CreateCustomLobbySuccessOverlay",
           children: [(0, ⟦2-char-id⟧.jsxs)("div", {
             className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "check"
             }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})]
           }), (0, ⟦2-char-id⟧.jsx)("div", {
             className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
               padDefaultFocus: !0,
               onClick: () => {
-                (0, ⟦2-char-id⟧.h)("worldCreation"), ⟦2-char-id⟧((0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧.baseOptions.name))
+                (0, ⟦2-char-id⟧.i)("worldCreation"), ⟦2-char-id⟧((0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧.baseOptions.name))
               },
               children: ⟦2-char-id⟧("homePage:joinLobbyName", {
                 lobbyName: ⟦2-char-id⟧.baseOptions.name
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -227,7 +227,7 @@
             className: "CreateCustomLobbyTitle",
             children: ⟦2-char-id⟧(⟦2-char-id⟧ ? "homePage:createWorld" : "homePage:createCustomLobby")
           })
-        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           locked: ⟦2-char-id⟧,
           children: (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "CreateCustomLobbyFields",
```

</details>

<details>
<summary>Hunk 12 · Change · +3 / -3</summary>

```diff
@@ -242,10 +242,10 @@
                   label: "customLobby:visibility",
                   circleInfoText: ⟦2-char-id⟧("customLobby:visibilityDescription"),
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
-                    options: ⟦2-char-id⟧.p.map((⟦2-char-id⟧ => ({
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                    options: ⟦2-char-id⟧.m.map((⟦2-char-id⟧ => ({
                       value: ⟦2-char-id⟧,
-                      label: ⟦2-char-id⟧.f[⟦2-char-id⟧]
+                      label: ⟦2-char-id⟧.c[⟦2-char-id⟧]
                     }))),
                     value: ⟦2-char-id⟧.baseOptions.visibility,
                     onChange: ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 13 · Change · +2 / -2</summary>

```diff
@@ -261,8 +261,8 @@
               },
               showAll: ⟦2-char-id⟧,
               disabled: ⟦2-char-id⟧
-            }), (⟦2-char-id⟧ || !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) && ⟦2-char-id⟧ > 0) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
-              mapTypes: ⟦2-char-id⟧ ? ⟦2-char-id⟧.D : ⟦2-char-id⟧.o,
+            }), (⟦2-char-id⟧ || !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) && ⟦2-char-id⟧ > 0) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
+              mapTypes: ⟦2-char-id⟧ ? ⟦2-char-id⟧.D : ⟦2-char-id⟧.k,
               value: ⟦2-char-id⟧.mapOptions.mapType,
               onChange: ⟦2-char-id⟧ => {
                 const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 14 · Change · +2 / -2</summary>

```diff
@@ -282,9 +282,9 @@
                   className: ⟦2-char-id⟧()("SchematicListContainer AnimFadeIn", {
                     SchematicListContainerDisabled: "Enter" !== ⟦2-char-id⟧
                   }),
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
                     loading: null === ⟦2-char-id⟧,
-                    schematics: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? aJ : [],
+                    schematics: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? jB : [],
                     onSchematicPicked: function(⟦2-char-id⟧) {
                       const ⟦2-char-id⟧ = ⟦2-char-id⟧.mapOptions.schematicIdList;
                       if (⟦2-char-id⟧.includes(⟦2-char-id⟧.schematicId)) ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -293,7 +293,7 @@
                       else {
                         if (⟦2-char-id⟧ && ⟦2-char-id⟧.mapOptions.schematicIdList.length >= ⟦2-char-id⟧) return;
                         ⟦2-char-id⟧({
-                          schematicIdList: [...RJ.mapOptions.schematicIdList, ⟦2-char-id⟧.schematicId]
+                          schematicIdList: [...qB.mapOptions.schematicIdList, ⟦2-char-id⟧.schematicId]
                         })
                       }
                     },
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -366,7 +366,7 @@
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   label: "classic:disableProtectors",
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     checked: ⟦2-char-id⟧.worldOptions.disableProtectors,
                     setChecked: ⟦2-char-id⟧ => {
                       ⟦2-char-id⟧("disableProtectors", ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -375,7 +375,7 @@
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   label: "classic:disableTribeCreation",
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     checked: ⟦2-char-id⟧.worldOptions.disableTribeCreation,
                     setChecked: ⟦2-char-id⟧ => {
                       ⟦2-char-id⟧("disableTribeCreation", ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 18 · Change · +2 / -2</summary>

```diff
@@ -387,8 +387,8 @@
                   disabled: "Enter" !== ⟦2-char-id⟧,
                   children: (0, ⟦2-char-id⟧.jsx)("input", {
                     type: "number",
-                    max: ⟦2-char-id⟧.B,
-                    value: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldOptions.voidDeathHeight) && void 0 !== ⟦2-char-id⟧ ? XJ : "",
+                    max: ⟦2-char-id⟧.z,
+                    value: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldOptions.voidDeathHeight) && void 0 !== ⟦2-char-id⟧ ? lB : "",
                     onChange: ⟦2-char-id⟧ => {
                       const ⟦2-char-id⟧ = parseInt(⟦2-char-id⟧.target.value);
                       ⟦2-char-id⟧("voidDeathHeight", isNaN(⟦2-char-id⟧) ? null : ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -397,7 +397,7 @@
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   label: "classic:disableLobbySpawn",
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     checked: ⟦2-char-id⟧.worldOptions.disableLobbySpawn,
                     setChecked: ⟦2-char-id⟧ => {
                       ⟦2-char-id⟧("disableLobbySpawn", ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 20 · Change · +3 / -3</summary>

```diff
@@ -409,9 +409,9 @@
                   disabled: "Enter" !== ⟦2-char-id⟧,
                   children: (0, ⟦2-char-id⟧.jsx)("input", {
                     type: "number",
-                    min: ⟦2-char-id⟧.J,
-                    max: ⟦2-char-id⟧.C,
-                    value: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldOptions.worldBorder) && void 0 !== ⟦2-char-id⟧ ? bJ : "",
+                    min: ⟦2-char-id⟧.F,
+                    max: ⟦2-char-id⟧.A,
+                    value: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldOptions.worldBorder) && void 0 !== ⟦2-char-id⟧ ? FB : "",
                     onChange: ⟦2-char-id⟧ => {
                       const ⟦2-char-id⟧ = parseInt(⟦2-char-id⟧.target.value);
                       ⟦2-char-id⟧("worldBorder", isNaN(⟦2-char-id⟧) ? null : ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 21 · Change · +1 / -1</summary>

```diff
@@ -420,7 +420,7 @@
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   label: "classic:disableMobs",
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     checked: ⟦2-char-id⟧.worldOptions.disableMobs,
                     setChecked: ⟦2-char-id⟧ => {
                       ⟦2-char-id⟧("disableMobs", ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -436,7 +436,7 @@
           })
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "CreateCustomLobbyFooter",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "CreateCustomLobbyButton",
             padDefaultFocus: !0,
             loading: "Enter" !== ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -462,7 +462,7 @@
               onLabelClick: () => {
                 ⟦2-char-id⟧(!⟦2-char-id⟧)
               },
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                 checked: ⟦2-char-id⟧,
                 setChecked: ⟦2-char-id⟧
               })
```

</details>

<details>
<summary>Hunk 24 · Change · +6 / -6</summary>

```diff
@@ -475,15 +475,15 @@
       })
     }
   },
-  35481: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35394: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3988),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 25 · Change · +1 / -1</summary>

```diff
@@ -491,7 +491,7 @@
         children: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, "y");
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, "y");
       return (0, ⟦2-char-id⟧.jsx)("div", {
         ref: ⟦2-char-id⟧,
         className: ⟦2-char-id⟧()("CreateCustomLobbyBody", {
```

</details>

<details>
<summary>Hunk 26 · Change · +10 / -10</summary>

```diff
@@ -503,18 +503,18 @@
       })
     }
   },
-  35474: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35381: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2969),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4340),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2971),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4334),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 27 · Change · +2 / -2</summary>

```diff
@@ -526,10 +526,10 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SchematicList",
-        children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}), !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)("div", {
+        children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "NoSchematicsText",
           children: ⟦2-char-id⟧("worldBuilder:noSavedSchematic")
         }), !⟦2-char-id⟧ && ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -561,7 +561,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SchematicListWindow",
         children: [null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
```

</details>

<details>
<summary>Hunk 29 · Change · +8 / -8</summary>

```diff
@@ -613,18 +613,18 @@
       })
     }
   },
-  35477: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35386: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      g: () => ⟦2-char-id⟧
     });
-    ⟦2-char-id⟧(47);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    ⟦2-char-id⟧(62);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4049),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4027),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -635,7 +635,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: ⟦2-char-id⟧()("BloxdForm GamemodeForm", {
           BasicOptions: !⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 31 · Change · +1 / -1</summary>

```diff
@@ -645,7 +645,7 @@
           children: ⟦2-char-id⟧("classic:defaultGamemode")
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SectionBody",
-          children: ⟦2-char-id⟧.B.map((⟦2-char-id⟧ => ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)("button", {
+          children: ⟦2-char-id⟧.z.map((⟦2-char-id⟧ => ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)("button", {
             type: "button",
             className: ⟦2-char-id⟧()("WorldGamemode", {
               Selected: ⟦2-char-id⟧ === ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 32 · Change · +2 / -2</summary>

```diff
@@ -655,9 +655,9 @@
               ⟦2-char-id⟧(⟦2-char-id⟧)
             },
             style: {
-              "--background-image": `url(${XJ.q[JJ]})`
+              "--background-image": `url(${lB.o[BB]})`
             },
-            children: ⟦2-char-id⟧.p[⟦2-char-id⟧]
+            children: ⟦2-char-id⟧.n[⟦2-char-id⟧]
           }, ⟦2-char-id⟧) : null))
         })]
       })
```

</details>

<details>
<summary>Hunk 33 · Change · +1 / -1</summary>

```diff
@@ -674,7 +674,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: ⟦2-char-id⟧()("BloxdForm MapTypeForm", {
           BasicOptions: !⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 34 · Change · +1 / -1</summary>

```diff
@@ -684,7 +684,7 @@
           children: ⟦2-char-id⟧("customLobby:mapType")
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SectionBody",
-          children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.w)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)("button", {
+          children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)("button", {
             type: "button",
             className: ⟦2-char-id⟧()("MapType", {
               Selected: ⟦2-char-id⟧ === ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 35 · Change · +3 / -3</summary>

```diff
@@ -694,15 +694,15 @@
               ⟦2-char-id⟧(⟦2-char-id⟧)
             },
             style: {
-              "--background-image": `url(${XJ.k[JJ]})`
+              "--background-image": `url(${lB.l[BB]})`
             },
-            children: ⟦2-char-id⟧.h[⟦2-char-id⟧]
+            children: ⟦2-char-id⟧.k[⟦2-char-id⟧]
           }, ⟦2-char-id⟧) : null))
         }), ⟦2-char-id⟧]
       })
     }
   },
-  35468: () => {}
+  35373: () => {}
 };
 Object.freeze(modules);
 for (const ⟦2-char-id⟧ in modules) Object.freeze(modules[⟦2-char-id⟧]);
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/195.js</code> · modified · +71 / -71</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +10 / -10</summary>

```diff
@@ -1,18 +1,18 @@
 export const ⟦2-char-id⟧ = 195;
 export const ids = [195];
 export const modules = {
-  35474: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35381: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2969),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4340),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2971),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4334),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -24,10 +24,10 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SchematicList",
-        children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}), !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)("div", {
+        children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "NoSchematicsText",
           children: ⟦2-char-id⟧("worldBuilder:noSavedSchematic")
         }), !⟦2-char-id⟧ && ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -59,7 +59,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SchematicListWindow",
         children: [null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
```

</details>

<details>
<summary>Hunk 4 · Change · +14 / -14</summary>

```diff
@@ -111,24 +111,24 @@
       })
     }
   },
-  40455: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40448: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       runClientGameMessage: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3226),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3242),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1213),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35474),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4365),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3239),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3249),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1209),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35381),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4367),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(235),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(279),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -136,7 +136,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), {
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), {
         getRootProps: ⟦2-char-id⟧,
         getInputProps: ⟦2-char-id⟧,
         isDragActive: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 6 · Change · +3 / -3</summary>

```diff
@@ -145,17 +145,17 @@
           ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧(⟦2-char-id⟧[0])
         },
         useFsAccessApi: !1
-      }), ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.size > 1024 * ⟦2-char-id⟧.Qc;
+      }), ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.size > 1024 * ⟦2-char-id⟧.cd;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SchematicUploadContainer",
         children: [(0, ⟦2-char-id⟧.jsxs)("div", {
-          ...eJ({
+          ...pB({
             className: ⟦2-char-id⟧()("SchematicUpload", {
               ActiveDrag: ⟦2-char-id⟧
             })
           }),
           children: [(0, ⟦2-char-id⟧.jsx)("input", {
-            ...XJ({
+            ...lB({
               accept: ".bloxdschem"
             })
           }), !⟦2-char-id⟧ && ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -163,7 +163,7 @@
               className: ⟦2-char-id⟧()("SchematicUploadIcon", "Active", {
                 TooBig: ⟦2-char-id⟧
               }),
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "file-lines"
               })
             }), (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -173,7 +173,7 @@
           }) : (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "SchematicUploadIcon",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "up-from-bracket"
               })
             }), (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 9 · Change · +2 / -2</summary>

```diff
@@ -181,14 +181,14 @@
               children: ⟦2-char-id⟧("worldBuilder:dragAFileHere")
             })]
           })]
-        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
           disabled: ⟦2-char-id⟧ || !⟦2-char-id⟧,
           className: "SchematicUploadButton",
           onClick: () => {
             !⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)
           },
           children: ⟦2-char-id⟧ ? ⟦2-char-id⟧("worldBuilder:fileTooBig", {
-            maxSizeKb: ⟦2-char-id⟧.Qc
+            maxSizeKb: ⟦2-char-id⟧.cd
           }) : ⟦2-char-id⟧("worldBuilder:upload")
         })]
       })
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -203,7 +203,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: [(0, ⟦2-char-id⟧.jsx)("h1", {
           className: "SchematicPopupTitle",
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -213,7 +213,7 @@
           children: ⟦2-char-id⟧("worldBuilder:chooseOneOfYourSchematics")
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SchematicPopupSchematicListContainer",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
             schematics: ⟦2-char-id⟧,
             onSchematicPicked: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧(⟦2-char-id⟧.schematicId), ⟦2-char-id⟧()
```

</details>

<details>
<summary>Hunk 12 · Change · +4 / -4</summary>

```diff
@@ -237,10 +237,10 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4340),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1566),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3826),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1122);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4334),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1555),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3821),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1105);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -253,7 +253,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("choose"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("choose"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: [(0, ⟦2-char-id⟧.jsx)("h1", {
           className: "SchematicPopupTitle",
```

</details>

<details>
<summary>Hunk 14 · Change · +1 / -1</summary>

```diff
@@ -264,7 +264,7 @@
             children: ⟦2-char-id⟧("worldBuilder:overwriteOneOfYourSchematics")
           }), (0, ⟦2-char-id⟧.jsx)("div", {
             className: "SchematicPopupSchematicListContainer",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
               schematics: ⟦2-char-id⟧,
               onSchematicPicked: ⟦2-char-id⟧ => {
                 ⟦2-char-id⟧(⟦2-char-id⟧.schematicId), ⟦2-char-id⟧("existing"), ⟦2-char-id⟧("save")
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -277,7 +277,7 @@
             children: ⟦2-char-id⟧("general:otherOptions")
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "OtherOptions",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
               className: "ChooseUploadSchematicButton",
               onClick: () => {
                 ⟦2-char-id⟧("new"), ⟦2-char-id⟧("save")
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -294,7 +294,7 @@
         }), "choose" !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
           type: ⟦2-char-id⟧,
           ownedSchematics: ⟦2-char-id⟧,
-          onSubmit: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+          onSubmit: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
             "file" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : "new" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧()
           },
           onBack: () => {
```

</details>

<details>
<summary>Hunk 17 · Change · +4 / -4</summary>

```diff
@@ -315,11 +315,11 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!0), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!0), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         var ⟦2-char-id⟧;
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = "new" === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧) : null,
-          ⟦2-char-id⟧ = [...(0, ⟦2-char-id⟧.Bb)(⟦2-char-id⟧), ...UJ ? [⟦2-char-id⟧] : []];
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧;
+        const ⟦2-char-id⟧ = "new" === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧) : null,
+          ⟦2-char-id⟧ = [...(0, ⟦2-char-id⟧.Fb)(⟦2-char-id⟧), ...yB ? [⟦2-char-id⟧] : []];
         return ⟦2-char-id⟧.length > 0 ? (⟦2-char-id⟧(⟦2-char-id⟧.join(", ")), !1) : "new" === ⟦2-char-id⟧ && ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.name === ⟦2-char-id⟧)) ? (⟦2-char-id⟧(⟦2-char-id⟧("worldBuilder:schematicAlreadyExists")), !1) : (⟦2-char-id⟧(null), !0)
       };
       return (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -336,7 +336,7 @@
             ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧)
           },
           placeholderText: ⟦2-char-id⟧("worldBuilder:schematicNamePlaceholder"),
-          maxLength: ⟦2-char-id⟧.qb
+          maxLength: ⟦2-char-id⟧.wb
         }), (0, ⟦2-char-id⟧.jsx)("h2", {
           className: ⟦2-char-id⟧()("SaveSchematicError", {
             Hidden: !⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 19 · Change · +2 / -2</summary>

```diff
@@ -353,13 +353,13 @@
           }),
           onValueChange: ⟦2-char-id⟧,
           placeholderText: ⟦2-char-id⟧("worldBuilder:schematicDescriptionPlaceholder"),
-          maxLength: ⟦2-char-id⟧.nb,
+          maxLength: ⟦2-char-id⟧.vb,
           useTextarea: !0
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: ⟦2-char-id⟧()("SaveSchematicCheckboxContainer", {
             WarningBorder: "existing" === ⟦2-char-id⟧
           }),
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
             checked: ⟦2-char-id⟧,
             onChange: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧(⟦2-char-id⟧.target.checked)
```

</details>

<details>
<summary>Hunk 20 · Change · +2 / -2</summary>

```diff
@@ -375,13 +375,13 @@
           children: ⟦2-char-id⟧("worldBuilder:lobbyCodeWarning")
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SaveSchematicButtons",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "SaveSchematicButton",
             onClick: () => {
               ⟦2-char-id⟧() && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
             },
             children: ⟦2-char-id⟧("file" === ⟦2-char-id⟧ ? "general:download" : "general:save")
-          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.I, {
+          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.K, {
             className: "SaveSchematicButton",
             onClick: ⟦2-char-id⟧,
             children: ⟦2-char-id⟧("general:cancel")
```

</details>

<details>
<summary>Hunk 21 · Change · +3 / -3</summary>

```diff
@@ -389,9 +389,9 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1098),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1599),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1028);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1089),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1596),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1020);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if ("devDownloadJson" !== ⟦2-char-id⟧) ! function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 22 · Change · +3 / -3</summary>

```diff
@@ -407,9 +407,9 @@
             gameNameWithVariation: ⟦2-char-id⟧,
             lobbyName: ⟦2-char-id⟧
           };
-          return await (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${ZJ}/schematic/${JJ}`, ⟦2-char-id⟧.A[⟦2-char-id⟧].toBuffer({
-            ...qJ,
-            ...cJ
+          return await (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${dB}/schematic/${BB}`, ⟦2-char-id⟧.y[⟦2-char-id⟧].toBuffer({
+            ...YB,
+            ...TB
           }), {
             retries: 1
           })
```

</details>

<details>
<summary>Hunk 23 · Change · +3 / -3</summary>

```diff
@@ -446,16 +446,16 @@
                   data: ⟦2-char-id⟧
                 }
               } = ⟦2-char-id⟧;
-              const ⟦2-char-id⟧ = ⟦2-char-id⟧.fn.from(⟦2-char-id⟧);
+              const ⟦2-char-id⟧ = ⟦2-char-id⟧.iD.from(⟦2-char-id⟧);
               (0, ⟦2-char-id⟧.downloadBlob)(new Blob([⟦2-char-id⟧], {
                 type: "application/octet-stream"
-              }), `${JJ}.bloxdschem`)
+              }), `${BB}.bloxdschem`)
             }))
           },
           onClose: () => {
             ⟦2-char-id⟧("cancel", {})
           },
-          onChosenEdit: (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
+          onChosenEdit: (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
             ⟦2-char-id⟧("save-to-profile", {
               schematicId: ⟦2-char-id⟧,
               name: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -463,7 +463,7 @@
               includeLobbyCode: ⟦2-char-id⟧
             })
           },
-          onChosenNew: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+          onChosenNew: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
             ⟦2-char-id⟧("save-to-profile", {
               schematicId: null,
               name: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 25 · Change · +2 / -2</summary>

```diff
@@ -493,12 +493,12 @@
         }({
           ownedSchematics: ⟦2-char-id⟧,
           onChosenFile: async ⟦2-char-id⟧ => {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.fn.from(await ⟦2-char-id⟧.arrayBuffer()),
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.iD.from(await ⟦2-char-id⟧.arrayBuffer()),
               {
                 gameNameWithVariation: ⟦2-char-id⟧,
                 lobbyName: ⟦2-char-id⟧
               } = (0, ⟦2-char-id⟧.e)();
-            await (0, ⟦2-char-id⟧.postBinaryWithMetricsCookiesAndCustomResponse)(`${ZJ}/schematic/upload-schematic`, ⟦2-char-id⟧.A["upload-schematic"].toBuffer({
+            await (0, ⟦2-char-id⟧.postBinaryWithMetricsCookiesAndCustomResponse)(`${dB}/schematic/upload-schematic`, ⟦2-char-id⟧.y["upload-schematic"].toBuffer({
               gameNameWithVariation: ⟦2-char-id⟧,
               lobbyName: ⟦2-char-id⟧,
               schematic: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 26 · Change · +2 / -2</summary>

```diff
@@ -515,8 +515,8 @@
             ⟦2-char-id⟧("cancel", {})
           }
         });
-        else if ("Plugin|WorldBuilder|ListSchematics" === ⟦2-char-id⟧)(0, ⟦2-char-id⟧.g)({
-          ownedSchematics: Array.isArray(⟦2-char-id⟧) ? cJ : ⟦2-char-id⟧.schematics,
+        else if ("Plugin|WorldBuilder|ListSchematics" === ⟦2-char-id⟧)(0, ⟦2-char-id⟧.e)({
+          ownedSchematics: Array.isArray(⟦2-char-id⟧) ? TB : ⟦2-char-id⟧.schematics,
           currentWorldSchematicId: Array.isArray(⟦2-char-id⟧) ? null : ⟦2-char-id⟧.currentWorldSchematicId,
           onClose: () => {
             ⟦2-char-id⟧("cancel", {})
```

</details>

<details>
<summary>Hunk 27 · Change · +3 / -3</summary>

```diff
@@ -524,15 +524,15 @@
         });
         else if ("Plugin|WorldBuilder|ExportWorld" === ⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.schematic) && void 0 !== ⟦2-char-id⟧ ? jJ : ⟦2-char-id⟧;
-          (0, ⟦2-char-id⟧.j)({
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.schematic) && void 0 !== ⟦2-char-id⟧ ? gB : ⟦2-char-id⟧;
+          (0, ⟦2-char-id⟧.i)({
             schematic: ⟦2-char-id⟧,
             inSourceWorld: ⟦2-char-id⟧.schematicId === ⟦2-char-id⟧.currentWorldSchematicId,
             onClose: () => {
               ⟦2-char-id⟧("cancel", {})
             }
           })
-        } else console.error(`Unknown plugin message type ${JJ}`)
+        } else console.error(`Unknown plugin message type ${BB}`)
       }(⟦2-char-id⟧, ⟦2-char-id⟧);
       else {
         const ⟦2-char-id⟧ = JSON.stringify(⟦2-char-id⟧.data, null, 2);
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/196.js</code> · modified · +32 / -32</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +13 / -13</summary>

```diff
@@ -1,23 +1,23 @@
 export const ⟦2-char-id⟧ = 196;
 export const ids = [196];
 export const modules = {
-  35498: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35410: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       default: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1421),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(923),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(622),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1406),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3044),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2969),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2240),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1422),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(931),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(663),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1407),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3052),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2971),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2195),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = 2;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -42,7 +42,7 @@
         useLongRatio: !0,
         disabled: ⟦2-char-id⟧,
         entrySource: "customGamePlace"
-      }) : ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+      }) : ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
         gameWidth: "100%",
         useLongRatio: !0
       }) : null
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -60,7 +60,7 @@
       } = ⟦2-char-id⟧;
       const {
         followsLeader: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.g)(), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.gameCount)) && void 0 !== ⟦2-char-id⟧ ? cJ : [], ⟦2-char-id⟧ = {
+      } = (0, ⟦2-char-id⟧.f)(), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.gameCount)) && void 0 !== ⟦2-char-id⟧ ? TB : [], ⟦2-char-id⟧ = {
         "--custom-game-place-tint": ⟦2-char-id⟧
       };
       return (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 4 · Change · +4 / -4</summary>

```diff
@@ -69,25 +69,25 @@
         children: [(0, ⟦2-char-id⟧.jsx)("h2", {
           className: "CustomGamePlacePanelHeading",
           children: (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.LinkPreserveSearch, {
-            to: `/custom-games/${encodeURIComponent(ZJ)}`,
+            to: `/custom-games/${encodeURIComponent(dB)}`,
             className: "CustomGamePlacePanelTitle SmallTextBold",
             children: [(0, ⟦2-char-id⟧.jsx)("span", {
               children: ⟦2-char-id⟧
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "arrow-up"
             })]
           })
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "CustomGamePlacePanelGames",
           style: {
-            gridTemplateColumns: `repeat(${AJ?eJ.columnCount:fJ}, ${AJ?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
+            gridTemplateColumns: `repeat(${JB?pB.columnCount:HB}, ${JB?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
           },
           children: Array.from({
             length: ⟦2-char-id⟧.gameCount
           }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
             var ⟦2-char-id⟧;
             return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-              game: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : null,
+              game: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : null,
               disabled: ⟦2-char-id⟧,
               showPlaceholder: !⟦2-char-id⟧
             }, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -104,7 +104,7 @@
       function ⟦2-char-id⟧(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
         return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-          ...ZJ,
+          ...dB,
           landscape: !0
         }, ⟦2-char-id⟧.id)
       }
```

</details>

<details>
<summary>Hunk 6 · Change · +4 / -4</summary>

```diff
@@ -116,12 +116,12 @@
             className: "CustomGamePlaceMain",
             children: [(0, ⟦2-char-id⟧.jsxs)("div", {
               className: "CustomGamePlaceRow",
-              children: [⟦2-char-id⟧(0), ZJ(2)]
-            }), ZJ(1)]
-          }), ZJ(4)]
+              children: [⟦2-char-id⟧(0), dB(2)]
+            }), dB(1)]
+          }), dB(4)]
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "CustomGamePlaceRow",
-          children: [⟦2-char-id⟧(3), ZJ(5)]
+          children: [⟦2-char-id⟧(3), dB(5)]
         })]
       })
     }
```

</details>

<details>
<summary>Hunk 7 · Change · +6 / -6</summary>

```diff
@@ -152,21 +152,21 @@
           columnCount: 4
         }
       };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1009);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(993);
 
     function ⟦2-char-id⟧() {
       var ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.x)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)({
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.u)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)({
         refresh: !0
       }), ⟦2-char-id⟧ = ⟦2-char-id⟧.customGamePlace;
-      if (!(0, ⟦2-char-id⟧.j)(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.NavigatePreserveSearch, {
+      if (!(0, ⟦2-char-id⟧.m)(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.NavigatePreserveSearch, {
         to: "/"
       });
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.d[⟦2-char-id⟧],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.c[⟦2-char-id⟧],
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? JJ : null,
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.e[⟦2-char-id⟧],
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.b[⟦2-char-id⟧],
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? BB : null,
         ⟦2-char-id⟧ = [];
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
         var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -179,7 +179,7 @@
           title: ⟦2-char-id⟧(⟦2-char-id⟧.displayTranslationKey),
           tintColour: ⟦2-char-id⟧.tintColour,
           layout: ⟦2-char-id⟧[⟦2-char-id⟧],
-          games: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧.id]) && void 0 !== ⟦2-char-id⟧ ? KJ : null
+          games: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧.id]) && void 0 !== ⟦2-char-id⟧ ? sB : null
         })
       }
       return (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -187,7 +187,7 @@
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
           className: "BackgroundImage",
           style: {
-            backgroundImage: `url(/textures/games/${sJ}/${nJ.largePicture}.png)`
+            backgroundImage: `url(/textures/games/${OB}/${DB.largePicture}.png)`
           }
         }), (0, ⟦2-char-id⟧.jsx)("h1", {
           className: "VisuallyHidden",
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/197.js</code> · modified · +37 / -37</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +2 / -2</summary>

```diff
@@ -1,12 +1,12 @@
 export const ⟦2-char-id⟧ = 197;
 export const ids = [197];
 export const modules = {
-  38033: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  38028: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(17);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(24);
     let ⟦2-char-id⟧ = !1;
 
     function ⟦2-char-id⟧() {
```

</details>

<details>
<summary>Hunk 2 · Change · +8 / -8</summary>

```diff
@@ -14,20 +14,20 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.i.Uf("replayViewer|videoExportChanged"))
+      ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.h.yH("replayViewer|videoExportChanged"))
     }
   },
-  35554: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35479: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
       i: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(235),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(556),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(976),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(29);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(279),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(597),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(974),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(33);
     const ⟦2-char-id⟧ = {
         idStorageKey: "playSessionId",
         lastActivityStorageKey: "playSessionLastActivityMs",
```

</details>

<details>
<summary>Hunk 3 · Change · +19 / -19</summary>

```diff
@@ -37,47 +37,47 @@
       ⟦2-char-id⟧ = "wasMatchmakePlayer";
 
     function ⟦2-char-id⟧() {
-      let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.k;
-      (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧)
+      let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.m;
+      (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧() {
-      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.k).setItem(⟦2-char-id⟧, !0)
+      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.m).setItem(⟦2-char-id⟧, !0)
     }
 
     function ⟦2-char-id⟧() {
-      let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.k;
-      return (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧)
+      let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.m;
+      return (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧.k;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧),
+      let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧.m;
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧),
         ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.getItem(⟦2-char-id⟧);
           return "string" !== typeof ⟦2-char-id⟧ ? null : ⟦2-char-id⟧
         }(⟦2-char-id⟧),
         ⟦2-char-id⟧ = function() {
-          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.k).getItem(⟦2-char-id⟧)
+          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.m).getItem(⟦2-char-id⟧)
         }(⟦2-char-id⟧);
       let ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧) && function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Jb)(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Jb)(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Hb)(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Hb)(⟦2-char-id⟧);
+      return ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧) && function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Vb)(⟦2-char-id⟧),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Vb)(⟦2-char-id⟧),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Qb)(⟦2-char-id⟧),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Qb)(⟦2-char-id⟧);
           return !(⟦2-char-id⟧ !== ⟦2-char-id⟧ || !⟦2-char-id⟧) || ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧
-        }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) ? ZJ : (0, ⟦2-char-id⟧.b)(), (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.setItem(⟦2-char-id⟧, ⟦2-char-id⟧),
+        }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) ? dB : (0, ⟦2-char-id⟧.e)(), (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.setItem(⟦2-char-id⟧, ⟦2-char-id⟧),
         function() {
-          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.k).removeItem(⟦2-char-id⟧)
+          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.m).removeItem(⟦2-char-id⟧)
         }(⟦2-char-id⟧), ⟦2-char-id⟧
     }
   },
-  39487: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39448: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
     let ⟦2-char-id⟧ = null,
       ⟦2-char-id⟧ = null;
```

</details>

<details>
<summary>Hunk 4 · Change · +5 / -5</summary>

```diff
@@ -90,21 +90,21 @@
 
     function ⟦2-char-id⟧() {
       return null === ⟦2-char-id⟧ ? null : {
-        ...UJ
+        ...yB
       }
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       null !== (⟦2-char-id⟧ = ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧) && (⟦2-char-id⟧ = {
-        ...JJ
+        ...BB
       })
     }
   },
-  39482: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39440: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧
     });
     let ⟦2-char-id⟧ = null;
 
```

</details>

<details>
<summary>Hunk 5 · Change · +3 / -3</summary>

```diff
@@ -121,10 +121,10 @@
       return ⟦2-char-id⟧ = null, ⟦2-char-id⟧
     }
   },
-  39459: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39417: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧
     });
     let ⟦2-char-id⟧ = {
       fire: () => {},
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/198.js</code> · modified · +102 / -102</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +3 / -3</summary>

```diff
@@ -1,10 +1,10 @@
-/*! For license information please see symm5.198.febdf7b8.chunk.js.LICENSE.txt */
+/*! For license information please see l9xvfg.198.47eed0fe.chunk.js.LICENSE.txt */
 export const ⟦2-char-id⟧ = 198;
 export const ids = [198];
 export const modules = {
-  38529: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  38475: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧;
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(250);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(287);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (!(this instanceof ⟦2-char-id⟧)) return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -51,7 +51,7 @@
       return new ⟦2-char-id⟧([⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧], [Math.min(⟦2-char-id⟧.max[0], this.max[0]) - ⟦2-char-id⟧, Math.min(⟦2-char-id⟧.max[1], this.max[1]) - ⟦2-char-id⟧, Math.min(⟦2-char-id⟧.max[2], this.max[2]) - ⟦2-char-id⟧])
     }
   },
-  35753: ⟦2-char-id⟧ => {
+  35692: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧ === ⟦2-char-id⟧) return !0;
       if (⟦2-char-id⟧ && ⟦2-char-id⟧ && "object" == typeof ⟦2-char-id⟧ && "object" == typeof ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -78,7 +78,7 @@
       return ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧
     }
   },
-  38520: ⟦2-char-id⟧ => {
+  38470: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = +⟦2-char-id⟧[0],
         ⟦2-char-id⟧ = +⟦2-char-id⟧[1],
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -89,7 +89,7 @@
         ⟦2-char-id⟧ = Math.sqrt(⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧);
       if (0 === ⟦2-char-id⟧) throw new Error("Can't raycast along a zero vector");
       return function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = Math.floor, ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - cJ : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - ZJ : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - FJ : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = -1; ⟦2-char-id⟧ <= ⟦2-char-id⟧;) {
+        for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = Math.floor, ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - TB : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - dB : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - VB : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = -1; ⟦2-char-id⟧ <= ⟦2-char-id⟧;) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
           if (⟦2-char-id⟧) return ⟦2-char-id⟧ && (⟦2-char-id⟧[0] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧[2] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧[0] = ⟦2-char-id⟧[1] = ⟦2-char-id⟧[2] = 0, 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧[0] = -⟦2-char-id⟧), 1 === ⟦2-char-id⟧ && (⟦2-char-id⟧[1] = -⟦2-char-id⟧), 2 === ⟦2-char-id⟧ && (⟦2-char-id⟧[2] = -⟦2-char-id⟧)), ⟦2-char-id⟧;
           ⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧ < ⟦2-char-id⟧ ? (⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = 0) : (⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = 2) : ⟦2-char-id⟧ < ⟦2-char-id⟧ ? (⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = 1) : (⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = 2)
```

</details>

<details>
<summary>Hunk 5 · Change · +4 / -4</summary>

```diff
@@ -98,12 +98,12 @@
       }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ = "undefined" === typeof ⟦2-char-id⟧ ? 64 : +⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
     }
   },
-  38060: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  38049: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3572);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3579);
     let ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +5 / -5</summary>

```diff
@@ -111,18 +111,18 @@
     }
 
     function ⟦2-char-id⟧() {
-      this.kN = !1, this.stopPropagation = !1, this.pN = !1, this.disabled = !1
+      this.YC = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
         this.version = "0.7.0";
         var ⟦2-char-id⟧ = Object.assign({}, new ⟦2-char-id⟧, ⟦2-char-id⟧ || {});
-        this.element = ⟦2-char-id⟧ || document, this.kN = !!⟦2-char-id⟧.kN, this.stopPropagation = !!⟦2-char-id⟧.stopPropagation, this.pN = !!⟦2-char-id⟧.pN, this.disabled = !!⟦2-char-id⟧.disabled, this.filterEvents = (⟦2-char-id⟧, ⟦2-char-id⟧) => !0, this.down = new ⟦2-char-id⟧.EventEmitter, this.up = new ⟦2-char-id⟧.EventEmitter, this.state = {}, this.iN = {
+        this.element = ⟦2-char-id⟧ || document, this.YC = !!⟦2-char-id⟧.YC, this.stopPropagation = !!⟦2-char-id⟧.stopPropagation, this.gC = !!⟦2-char-id⟧.gC, this.disabled = !!⟦2-char-id⟧.disabled, this.filterEvents = (⟦2-char-id⟧, ⟦2-char-id⟧) => !0, this.down = new ⟦2-char-id⟧.EventEmitter, this.up = new ⟦2-char-id⟧.EventEmitter, this.state = {}, this.mC = {
           dx: 0,
           dy: 0,
-          RJJ: 0,
-          LJJ: 0,
-          aJJ: 0
+          fTB: 0,
+          sTB: 0,
+          MTB: 0
         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
           lastX: 0,
           lastY: 0,
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -157,7 +157,7 @@
         return ⟦2-char-id⟧
       }
       ⟦2-char-id⟧() {
-        ⟦2-char-id⟧(this.iN), ⟦2-char-id⟧(this.pressCount), ⟦2-char-id⟧(this.releaseCount)
+        ⟦2-char-id⟧(this.mC), ⟦2-char-id⟧(this.pressCount), ⟦2-char-id⟧(this.releaseCount)
       }
     }
 
```

</details>

<details>
<summary>Hunk 8 · Change · +2 / -2</summary>

```diff
@@ -235,11 +235,11 @@
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.changedTouches[⟦2-char-id⟧],
                 ⟦2-char-id⟧ = [⟦2-char-id⟧.clientX - ⟦2-char-id⟧, ⟦2-char-id⟧.clientY - ⟦2-char-id⟧];
               return ⟦2-char-id⟧ = ⟦2-char-id⟧.clientX, ⟦2-char-id⟧ = ⟦2-char-id⟧.clientY, ⟦2-char-id⟧
-            } return console.error(`Did not find touch id ${DJ}`), [0, 0]
+            } return console.error(`Did not find touch id ${LB}`), [0, 0]
         }(⟦2-char-id⟧);
         ⟦2-char-id⟧ = ⟦2-char-id⟧[0], ⟦2-char-id⟧ = ⟦2-char-id⟧[1]
       }
-      ⟦2-char-id⟧.iN.dx += ⟦2-char-id⟧, ⟦2-char-id⟧.iN.dy += ⟦2-char-id⟧
+      ⟦2-char-id⟧.mC.dx += ⟦2-char-id⟧, ⟦2-char-id⟧.mC.dy += ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 9 · Change · +2 / -2</summary>

```diff
@@ -255,11 +255,11 @@
         case 2:
           ⟦2-char-id⟧ = ⟦2-char-id⟧.element.clientHeight || window.innerHeight
       }
-      ⟦2-char-id⟧.iN.RJJ += (⟦2-char-id⟧.deltaX || 0) * ⟦2-char-id⟧, ⟦2-char-id⟧.iN.LJJ += (⟦2-char-id⟧.deltaY || 0) * ⟦2-char-id⟧, ⟦2-char-id⟧.iN.aJJ += (⟦2-char-id⟧.deltaZ || 0) * ⟦2-char-id⟧
+      ⟦2-char-id⟧.mC.fTB += (⟦2-char-id⟧.deltaX || 0) * ⟦2-char-id⟧, ⟦2-char-id⟧.mC.sTB += (⟦2-char-id⟧.deltaY || 0) * ⟦2-char-id⟧, ⟦2-char-id⟧.mC.MTB += (⟦2-char-id⟧.deltaZ || 0) * ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      if (!⟦2-char-id⟧.pN) return ⟦2-char-id⟧.preventDefault(), !1
+      if (!⟦2-char-id⟧.gC) return ⟦2-char-id⟧.preventDefault(), !1
     }
     var ⟦2-char-id⟧ = {
       AltLeft: "altKey",
```

</details>

<details>
<summary>Hunk 10 · Change · +5 / -5</summary>

```diff
@@ -327,14 +327,14 @@
             ⟦2-char-id⟧.disabled || ⟦2-char-id⟧.emit(⟦2-char-id⟧, ⟦2-char-id⟧)
           }
         }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
-      }))), "button" in ⟦2-char-id⟧ || (⟦2-char-id⟧.kN && !⟦2-char-id⟧.defaultPrevented && ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧.stopPropagation && ⟦2-char-id⟧.stopPropagation()))
+      }))), "button" in ⟦2-char-id⟧ || (⟦2-char-id⟧.YC && !⟦2-char-id⟧.defaultPrevented && ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧.stopPropagation && ⟦2-char-id⟧.stopPropagation()))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ ? !cJ : ⟦2-char-id⟧
-    }
-  },
-  35605: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      return ⟦2-char-id⟧ ? !TB : ⟦2-char-id⟧
+    }
+  },
+  35542: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if (⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.which || ⟦2-char-id⟧.keyCode || ⟦2-char-id⟧.charCode;
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -342,7 +342,7 @@
       }
       if ("number" === typeof ⟦2-char-id⟧) return ⟦2-char-id⟧[⟦2-char-id⟧];
       var ⟦2-char-id⟧, ⟦2-char-id⟧ = String(⟦2-char-id⟧);
-      return (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.toLowerCase()]) ? ZJ : (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.toLowerCase()]) || (1 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧.charCodeAt(0) : void 0)
+      return (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.toLowerCase()]) ? dB : (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.toLowerCase()]) || (1 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧.charCodeAt(0) : void 0)
     }
     ⟦2-char-id⟧.isEventKey = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 12 · Change · +3 / -3</summary>

```diff
@@ -431,15 +431,15 @@
     for (⟦2-char-id⟧ in ⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] = ⟦2-char-id⟧;
     for (var ⟦2-char-id⟧ in ⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧]
   },
-  38505: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  38459: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
     class ⟦2-char-id⟧ {
       constructor() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
           ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
-        this.Cw = !1, this.cW = !1, this.Gy = 30, this.Kw = 0, this.FW = 100, this.Sf = !1, this.fullscreen = !1, this.Km = function(⟦2-char-id⟧) {}, this.UW = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {}, this.fW = function() {}, this.Im = function() {}, this.jW = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(⟦2-char-id⟧) {}, this._data = new ⟦2-char-id⟧(⟦2-char-id⟧),
+        this.mI = !1, this.MI = !1, this.WU = 30, this.pI = 0, this.ZI = 100, this.fH = !1, this.fullscreen = !1, this.WE = function(⟦2-char-id⟧) {}, this.qI = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {}, this.kS = function() {}, this.qE = function() {}, this.xI = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(⟦2-char-id⟧) {}, this._data = new ⟦2-char-id⟧(⟦2-char-id⟧),
           function(⟦2-char-id⟧) {
             if ("loading" === document.readyState) {
               var ⟦2-char-id⟧ = () => {
```

</details>

<details>
<summary>Hunk 13 · Change · +5 / -5</summary>

```diff
@@ -456,19 +456,19 @@
                 requestAnimationFrame(⟦2-char-id⟧.frameCB), ⟦2-char-id⟧(⟦2-char-id⟧);
                 var ⟦2-char-id⟧ = ⟦2-char-id⟧.nowObject.now(),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.lastFrameStarted;
-                if (⟦2-char-id⟧.lastFrameStarted = ⟦2-char-id⟧, ⟦2-char-id⟧.Kw > 0) {
+                if (⟦2-char-id⟧.lastFrameStarted = ⟦2-char-id⟧, ⟦2-char-id⟧.pI > 0) {
                   ⟦2-char-id⟧.renderAccum += ⟦2-char-id⟧;
-                  var ⟦2-char-id⟧ = 1⟦2-char-id⟧ / ⟦2-char-id⟧.Kw;
+                  var ⟦2-char-id⟧ = 1⟦2-char-id⟧ / ⟦2-char-id⟧.pI;
                   if (⟦2-char-id⟧.renderAccum < ⟦2-char-id⟧) return;
                   ⟦2-char-id⟧.renderAccum -= ⟦2-char-id⟧, ⟦2-char-id⟧.renderAccum > ⟦2-char-id⟧ && (⟦2-char-id⟧.renderAccum = ⟦2-char-id⟧)
                 }
                 var ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.lastRenderStarted;
                 ⟦2-char-id⟧.lastRenderStarted = ⟦2-char-id⟧;
-                var ⟦2-char-id⟧ = 1⟦2-char-id⟧ / ⟦2-char-id⟧.Gy,
+                var ⟦2-char-id⟧ = 1⟦2-char-id⟧ / ⟦2-char-id⟧.WU,
                   ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧.lastTickStarted) / ⟦2-char-id⟧;
                 ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = 0);
-                ⟦2-char-id⟧.UW(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), setTimeout(⟦2-char-id⟧, 0, ⟦2-char-id⟧, !0)
-              }(⟦2-char-id⟧), ⟦2-char-id⟧.intervalCB = () => ⟦2-char-id⟧(⟦2-char-id⟧), requestAnimationFrame(⟦2-char-id⟧.frameCB), ⟦2-char-id⟧.pollTime > 0 && (⟦2-char-id⟧.intervalID = setInterval(⟦2-char-id⟧.intervalCB, Math.max(⟦2-char-id⟧.pollTime, 1⟦2-char-id⟧ / ⟦2-char-id⟧.Gy / 2)))
+                ⟦2-char-id⟧.qI(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), setTimeout(⟦2-char-id⟧, 0, ⟦2-char-id⟧, !0)
+              }(⟦2-char-id⟧), ⟦2-char-id⟧.intervalCB = () => ⟦2-char-id⟧(⟦2-char-id⟧), requestAnimationFrame(⟦2-char-id⟧.frameCB), ⟦2-char-id⟧.pollTime > 0 && (⟦2-char-id⟧.intervalID = setInterval(⟦2-char-id⟧.intervalCB, Math.max(⟦2-char-id⟧.pollTime, 1⟦2-char-id⟧ / ⟦2-char-id⟧.WU / 2)))
             }(this),
             function(⟦2-char-id⟧, ⟦2-char-id⟧) {
               if (!⟦2-char-id⟧) return;
```

</details>

<details>
<summary>Hunk 14 · Change · +5 / -5</summary>

```diff
@@ -485,25 +485,25 @@
                   !!⟦2-char-id⟧ !== (⟦2-char-id⟧ = ⟦2-char-id⟧ === document.fullscreenElement) && (⟦2-char-id⟧ ? ⟦2-char-id⟧.requestFullscreen ? ⟦2-char-id⟧.requestFullscreen() : ⟦2-char-id⟧.webkitRequestFullscreen && ⟦2-char-id⟧.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                 };
               document.addEventListener("pointerlockchange", (⟦2-char-id⟧ => {
-                ⟦2-char-id⟧ = ⟦2-char-id⟧ === document.pointerLockElement, ⟦2-char-id⟧.jW(⟦2-char-id⟧)
+                ⟦2-char-id⟧ = ⟦2-char-id⟧ === document.pointerLockElement, ⟦2-char-id⟧.xI(⟦2-char-id⟧)
               })), document.addEventListener("fullscreenchange", (⟦2-char-id⟧ => {
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ === document.fullscreenElement, ⟦2-char-id⟧.onFullscreenChanged(⟦2-char-id⟧)
               })), document.addEventListener("pointerlockerror", (⟦2-char-id⟧ => {
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ === document.pointerLockElement, ⟦2-char-id⟧.onPointerLockError(⟦2-char-id⟧)
-              })), Object.defineProperty(⟦2-char-id⟧, "Sf", {
+              })), Object.defineProperty(⟦2-char-id⟧, "fH", {
                 get: () => ⟦2-char-id⟧,
                 set: ⟦2-char-id⟧
               }), Object.defineProperty(⟦2-char-id⟧, "fullscreen", {
                 get: () => ⟦2-char-id⟧,
                 set: ⟦2-char-id⟧
               }), ⟦2-char-id⟧.addEventListener("click", (⟦2-char-id⟧ => {
-                ⟦2-char-id⟧.Cw && ⟦2-char-id⟧(!0), ⟦2-char-id⟧.cW && ⟦2-char-id⟧(!0)
+                ⟦2-char-id⟧.mI && ⟦2-char-id⟧(!0), ⟦2-char-id⟧.MI && ⟦2-char-id⟧(!0)
               }));
-              var ⟦2-char-id⟧ = () => ⟦2-char-id⟧.Im();
+              var ⟦2-char-id⟧ = () => ⟦2-char-id⟧.qE();
               if (window.ResizeObserver) {
                 new ResizeObserver(⟦2-char-id⟧).observe(⟦2-char-id⟧)
               } else window.addEventListener("resize", ⟦2-char-id⟧)
-            }(this, ⟦2-char-id⟧), this.fW()
+            }(this, ⟦2-char-id⟧), this.kS()
           }))
       }
     }
```

</details>

<details>
<summary>Hunk 15 · Change · +4 / -4</summary>

```diff
@@ -516,18 +516,18 @@
       ⟦2-char-id⟧ = 20;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      for (var ⟦2-char-id⟧ = ⟦2-char-id⟧._data, ⟦2-char-id⟧ = 1⟦2-char-id⟧ / ⟦2-char-id⟧.Gy, ⟦2-char-id⟧ = ⟦2-char-id⟧.nowObject.now() + ⟦2-char-id⟧, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧.nowObject.now() >= ⟦2-char-id⟧.lastTickStarted + ⟦2-char-id⟧ && ⟦2-char-id⟧.nowObject.now() < ⟦2-char-id⟧ && ++⟦2-char-id⟧ <= ⟦2-char-id⟧;) ⟦2-char-id⟧.Km(⟦2-char-id⟧), ⟦2-char-id⟧.lastTickStarted += ⟦2-char-id⟧;
+      for (var ⟦2-char-id⟧ = ⟦2-char-id⟧._data, ⟦2-char-id⟧ = 1⟦2-char-id⟧ / ⟦2-char-id⟧.WU, ⟦2-char-id⟧ = ⟦2-char-id⟧.nowObject.now() + ⟦2-char-id⟧, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧.nowObject.now() >= ⟦2-char-id⟧.lastTickStarted + ⟦2-char-id⟧ && ⟦2-char-id⟧.nowObject.now() < ⟦2-char-id⟧ && ++⟦2-char-id⟧ <= ⟦2-char-id⟧;) ⟦2-char-id⟧.WE(⟦2-char-id⟧), ⟦2-char-id⟧.lastTickStarted += ⟦2-char-id⟧;
       var ⟦2-char-id⟧ = 5 * (⟦2-char-id⟧ + 5),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.nowObject.now();
       if (⟦2-char-id⟧ - ⟦2-char-id⟧.lastTickStarted > ⟦2-char-id⟧)
         for (; ⟦2-char-id⟧ >= ⟦2-char-id⟧.lastTickStarted + ⟦2-char-id⟧;) ⟦2-char-id⟧.lastTickStarted += ⟦2-char-id⟧
     }
   },
-  35778: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35713: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62);
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.useLayoutEffect;
     const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -549,7 +549,7 @@
       }), [])
     }
   },
-  35642: ⟦2-char-id⟧ => {
+  35571: ⟦2-char-id⟧ => {
     var ⟦2-char-id⟧, ⟦2-char-id⟧ = "undefined" !== typeof window ? window.navigator.userAgent : "",
       ⟦2-char-id⟧ = /OS X/.test(⟦2-char-id⟧),
       ⟦2-char-id⟧ = /Opera/.test(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -664,7 +664,7 @@
     for (⟦2-char-id⟧ = 96; ⟦2-char-id⟧ < 106; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = "<num-" + (⟦2-char-id⟧ - 96) + ">";
     for (⟦2-char-id⟧ = 112; ⟦2-char-id⟧ < 136; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = "F" + (⟦2-char-id⟧ - 111)
   },
-  37988: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37979: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = {};
       return Object.keys(⟦2-char-id⟧).forEach((function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 18 · Change · +2 / -2</summary>

```diff
@@ -674,10 +674,10 @@
       }), ⟦2-char-id⟧), ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧.initializer && (⟦2-char-id⟧.value = ⟦2-char-id⟧.initializer ? ⟦2-char-id⟧.initializer.call(⟦2-char-id⟧) : void 0, ⟦2-char-id⟧.initializer = void 0), void 0 === ⟦2-char-id⟧.initializer && (Object.defineProperty(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = null), ⟦2-char-id⟧
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     })
   },
-  37984: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37976: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ && Object.defineProperty(⟦2-char-id⟧, ⟦2-char-id⟧, {
         enumerable: ⟦2-char-id⟧.enumerable,
```

</details>

<details>
<summary>Hunk 19 · Change · +7 / -7</summary>

```diff
@@ -687,16 +687,16 @@
       })
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      d: () => ⟦2-char-id⟧
+    })
+  },
+  37646: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧
-    })
-  },
-  37658: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37660);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37651);
     const ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧.getClassName && "Mesh" === ⟦2-char-id⟧.getClassName() ? null : !⟦2-char-id⟧.getClassName || "SubMesh" !== ⟦2-char-id⟧.getClassName() && "PhysicsBody" !== ⟦2-char-id⟧.getClassName() ? ⟦2-char-id⟧.clone ? ⟦2-char-id⟧.clone() : Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice() : ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ ? {
-      ...JJ
+      ...BB
     } : null : ⟦2-char-id⟧.clone(⟦2-char-id⟧) : null;
     class ⟦2-char-id⟧ {
       static DeepCopy(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +7 / -7</summary>

```diff
@@ -727,26 +727,26 @@
             } else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
             else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧
           } catch (⟦2-char-id⟧) {
-            ⟦2-char-id⟧.c.Warn(⟦2-char-id⟧.message)
+            ⟦2-char-id⟧.b.Warn(⟦2-char-id⟧.message)
           }
         }
       }
     }
   },
-  37683: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37681: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
       e: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧
+      f: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧,
+      l: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36231);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36183);
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         this.gradient = ⟦2-char-id⟧, this.color1 = ⟦2-char-id⟧, this.color2 = ⟦2-char-id⟧
       }
       getColorToRef(⟦2-char-id⟧) {
-        this.color2 ? ⟦2-char-id⟧.f.LerpToRef(this.color1, this.color2, Math.random(), ⟦2-char-id⟧) : ⟦2-char-id⟧.rZJ(this.color1)
+        this.color2 ? ⟦2-char-id⟧.d.LerpToRef(this.color1, this.color2, Math.random(), ⟦2-char-id⟧) : ⟦2-char-id⟧.bdB(this.color1)
       }
     }
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -777,9 +777,9 @@
       }
     }
   },
-  37660: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37651: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
     class ⟦2-char-id⟧ {
       static _CheckLimit(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -800,7 +800,7 @@
         ⟦2-char-id⟧._LogCache = ⟦2-char-id⟧ + ⟦2-char-id⟧._LogCache, ⟦2-char-id⟧.OnNewCacheEntry && ⟦2-char-id⟧.OnNewCacheEntry(⟦2-char-id⟧)
       }
       static _FormatMessage(⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ < 10 ? "0" + JJ : "" + ⟦2-char-id⟧,
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ < 10 ? "0" + BB : "" + ⟦2-char-id⟧,
           ⟦2-char-id⟧ = new Date;
         return "[" + ⟦2-char-id⟧(⟦2-char-id⟧.getHours()) + ":" + ⟦2-char-id⟧(⟦2-char-id⟧.getMinutes()) + ":" + ⟦2-char-id⟧(⟦2-char-id⟧.getSeconds()) + "]: " + ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 23 · Change · +2 / -2</summary>

```diff
@@ -814,8 +814,8 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧._FormatMessage(⟦2-char-id⟧),
           ⟦2-char-id⟧ = this._Levels[⟦2-char-id⟧],
           ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice(1) : [];
-        ⟦2-char-id⟧.logFunc && ⟦2-char-id⟧.logFunc("BJS - " + ⟦2-char-id⟧, ...AJ);
-        const ⟦2-char-id⟧ = `<div style='color:${XJ.color}'>${eJ}</div><br>`;
+        ⟦2-char-id⟧.logFunc && ⟦2-char-id⟧.logFunc("BJS - " + ⟦2-char-id⟧, ...JB);
+        const ⟦2-char-id⟧ = `<div style='color:${lB.color}'>${pB}</div><br>`;
         ⟦2-char-id⟧._AddLogEntry(⟦2-char-id⟧), ⟦2-char-id⟧._GenerateLimitMessage(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       static get LogCache() {
```

</details>

<details>
<summary>Hunk 24 · Change · +8 / -8</summary>

```diff
@@ -848,34 +848,34 @@
       name: "Error"
     }], ⟦2-char-id⟧.errorsCount = 0, ⟦2-char-id⟧.Log = ⟦2-char-id⟧._LogEnabled.bind(⟦2-char-id⟧, ⟦2-char-id⟧.MessageLogLevel), ⟦2-char-id⟧.Warn = ⟦2-char-id⟧._LogEnabled.bind(⟦2-char-id⟧, ⟦2-char-id⟧.WarningLogLevel), ⟦2-char-id⟧.Error = ⟦2-char-id⟧._LogEnabled.bind(⟦2-char-id⟧, ⟦2-char-id⟧.ErrorLogLevel)
   },
-  37686: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37690: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36207),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37658);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36157),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37646);
     class ⟦2-char-id⟧ {
       constructor() {
-        this.direction1 = new ⟦2-char-id⟧.j(0, 1, 0), this.direction2 = new ⟦2-char-id⟧.j(0, 1, 0), this.minEmitBox = new ⟦2-char-id⟧.j(-.5, -.5, -.5), this.maxEmitBox = new ⟦2-char-id⟧.j(.5, .5, .5)
+        this.direction1 = new ⟦2-char-id⟧.p(0, 1, 0), this.direction2 = new ⟦2-char-id⟧.p(0, 1, 0), this.minEmitBox = new ⟦2-char-id⟧.p(-.5, -.5, -.5), this.maxEmitBox = new ⟦2-char-id⟧.p(.5, .5, .5)
       }
       startDirectionFunction(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.x, this.direction2.x),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.y, this.direction2.y),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.z, this.direction2.z);
         if (⟦2-char-id⟧) return ⟦2-char-id⟧.x = ⟦2-char-id⟧, ⟦2-char-id⟧.y = ⟦2-char-id⟧, void(⟦2-char-id⟧.z = ⟦2-char-id⟧);
-        ⟦2-char-id⟧.j.TransformNormalFromFloatsToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+        ⟦2-char-id⟧.p.TransformNormalFromFloatsToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       startPositionFunction(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
         if (⟦2-char-id⟧) return ⟦2-char-id⟧.x = ⟦2-char-id⟧, ⟦2-char-id⟧.y = ⟦2-char-id⟧, void(⟦2-char-id⟧.z = ⟦2-char-id⟧);
-        ⟦2-char-id⟧.j.TransformCoordinatesFromFloatsToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+        ⟦2-char-id⟧.p.TransformCoordinatesFromFloatsToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       clone() {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.e.DeepCopy(this, ⟦2-char-id⟧), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.b.DeepCopy(this, ⟦2-char-id⟧), ⟦2-char-id⟧
       }
       applyToShader(⟦2-char-id⟧) {
         ⟦2-char-id⟧.setVector3("direction1", this.direction1), ⟦2-char-id⟧.setVector3("direction2", this.direction2), ⟦2-char-id⟧.setVector3("minEmitBox", this.minEmitBox), ⟦2-char-id⟧.setVector3("maxEmitBox", this.maxEmitBox)
```

</details>

<details>
<summary>Hunk 25 · Change · +14 / -14</summary>

```diff
@@ -891,34 +891,34 @@
       }
       serialize() {
         const ⟦2-char-id⟧ = {};
-        return ⟦2-char-id⟧.type = this.getClassName(), ⟦2-char-id⟧.direction1 = this.direction1.JFJ(), ⟦2-char-id⟧.direction2 = this.direction2.JFJ(), ⟦2-char-id⟧.minEmitBox = this.minEmitBox.JFJ(), ⟦2-char-id⟧.maxEmitBox = this.maxEmitBox.JFJ(), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.type = this.getClassName(), ⟦2-char-id⟧.direction1 = this.direction1.FVB(), ⟦2-char-id⟧.direction2 = this.direction2.FVB(), ⟦2-char-id⟧.minEmitBox = this.minEmitBox.FVB(), ⟦2-char-id⟧.maxEmitBox = this.maxEmitBox.FVB(), ⟦2-char-id⟧
       }
       parse(⟦2-char-id⟧) {
-        ⟦2-char-id⟧.j.FromArrayToRef(⟦2-char-id⟧.direction1, 0, this.direction1), ⟦2-char-id⟧.j.FromArrayToRef(⟦2-char-id⟧.direction2, 0, this.direction2), ⟦2-char-id⟧.j.FromArrayToRef(⟦2-char-id⟧.minEmitBox, 0, this.minEmitBox), ⟦2-char-id⟧.j.FromArrayToRef(⟦2-char-id⟧.maxEmitBox, 0, this.maxEmitBox)
-      }
-    }
-  },
-  37651: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+        ⟦2-char-id⟧.p.FromArrayToRef(⟦2-char-id⟧.direction1, 0, this.direction1), ⟦2-char-id⟧.p.FromArrayToRef(⟦2-char-id⟧.direction2, 0, this.direction2), ⟦2-char-id⟧.p.FromArrayToRef(⟦2-char-id⟧.minEmitBox, 0, this.minEmitBox), ⟦2-char-id⟧.p.FromArrayToRef(⟦2-char-id⟧.maxEmitBox, 0, this.maxEmitBox)
+      }
+    }
+  },
+  37643: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36207),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37658);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36157),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37646);
     class ⟦2-char-id⟧ {
       constructor() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
           ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
           ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
           ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-        this.radius = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧, this.radiusRange = ⟦2-char-id⟧, this.directionRandomizer = ⟦2-char-id⟧, this._tempVector = ⟦2-char-id⟧.j.Zero()
+        this.radius = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧, this.radiusRange = ⟦2-char-id⟧, this.directionRandomizer = ⟦2-char-id⟧, this._tempVector = ⟦2-char-id⟧.p.Zero()
       }
       startDirectionFunction(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        ⟦2-char-id⟧.position.subtractToRef(⟦2-char-id⟧.getTranslation(), this._tempVector), this._tempVector.normalize(), ⟦2-char-id⟧.j.TransformNormalToRef(this._tempVector, ⟦2-char-id⟧, this._tempVector);
+        ⟦2-char-id⟧.position.subtractToRef(⟦2-char-id⟧.getTranslation(), this._tempVector), this._tempVector.normalize(), ⟦2-char-id⟧.p.TransformNormalToRef(this._tempVector, ⟦2-char-id⟧, this._tempVector);
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
         let ⟦2-char-id⟧ = Math.atan2(this._tempVector.x, this._tempVector.z);
-        ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = ⟦2-char-id⟧, this._tempVector.x = Math.sin(⟦2-char-id⟧), this._tempVector.z = Math.cos(⟦2-char-id⟧), this._tempVector.normalize(), ⟦2-char-id⟧ ? ⟦2-char-id⟧.rZJ(this._tempVector) : ⟦2-char-id⟧.j.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, ⟦2-char-id⟧, ⟦2-char-id⟧)
+        ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = ⟦2-char-id⟧, this._tempVector.x = Math.sin(⟦2-char-id⟧), this._tempVector.z = Math.cos(⟦2-char-id⟧), this._tempVector.normalize(), ⟦2-char-id⟧ ? ⟦2-char-id⟧.bdB(this._tempVector) : ⟦2-char-id⟧.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       startPositionFunction(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(-this.height / 2, this.height / 2),
```

</details>

<details>
<summary>Hunk 26 · Change · +2 / -2</summary>

```diff
@@ -927,11 +927,11 @@
           ⟦2-char-id⟧ = Math.sqrt(⟦2-char-id⟧) * this.radius,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * Math.cos(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * Math.sin(⟦2-char-id⟧);
-        ⟦2-char-id⟧ ? ⟦2-char-id⟧.K9(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.j.TransformCoordinatesFromFloatsToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+        ⟦2-char-id⟧ ? ⟦2-char-id⟧.YBB(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.p.TransformCoordinatesFromFloatsToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       clone() {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.radius, this.directionRandomizer);
-        return ⟦2-char-id⟧.e.DeepCopy(this, ⟦2-char-id⟧), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.b.DeepCopy(this, ⟦2-char-id⟧), ⟦2-char-id⟧
       }
       applyToShader(⟦2-char-id⟧) {
         ⟦2-char-id⟧.setFloat("radius", this.radius), ⟦2-char-id⟧.setFloat("height", this.height), ⟦2-char-id⟧.setFloat("radiusRange", this.radiusRange), ⟦2-char-id⟧.setFloat("directionRandomizer", this.directionRandomizer)
```

</details>

<details>
<summary>Hunk 27 · Change · +4 / -4</summary>

```diff
@@ -958,19 +958,19 @@
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
           ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
           ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-          ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ⟦2-char-id⟧.j(0, 1, 0),
-          ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ⟦2-char-id⟧.j(0, 1, 0);
+          ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ⟦2-char-id⟧.p(0, 1, 0),
+          ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ⟦2-char-id⟧.p(0, 1, 0);
         super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.direction1 = ⟦2-char-id⟧, this.direction2 = ⟦2-char-id⟧
       }
       startDirectionFunction(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.x, this.direction2.x),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.y, this.direction2.y),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.z, this.direction2.z);
-        ⟦2-char-id⟧ ? ⟦2-char-id⟧.K9(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.j.TransformNormalFromFloatsToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+        ⟦2-char-id⟧ ? ⟦2-char-id⟧.YBB(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.p.TransformNormalFromFloatsToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       clone() {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
-        return ⟦2-char-id⟧.e.DeepCopy(this, ⟦2-char-id⟧), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.b.DeepCopy(this, ⟦2-char-id⟧), ⟦2-char-id⟧
       }
       applyToShader(⟦2-char-id⟧) {
         ⟦2-char-id⟧.setFloat("radius", this.radius), ⟦2-char-id⟧.setFloat("height", this.height), ⟦2-char-id⟧.setFloat("radiusRange", this.radiusRange), ⟦2-char-id⟧.setVector3("direction1", this.direction1), ⟦2-char-id⟧.setVector3("direction2", this.direction2)
```

</details>

<details>
<summary>Hunk 28 · Change · +7 / -7</summary>

```diff
@@ -986,16 +986,16 @@
       }
       serialize() {
         const ⟦2-char-id⟧ = super.serialize();
-        return ⟦2-char-id⟧.direction1 = this.direction1.JFJ(), ⟦2-char-id⟧.direction2 = this.direction2.JFJ(), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.direction1 = this.direction1.FVB(), ⟦2-char-id⟧.direction2 = this.direction2.FVB(), ⟦2-char-id⟧
       }
       parse(⟦2-char-id⟧) {
-        super.parse(⟦2-char-id⟧), ⟦2-char-id⟧.j.FromArrayToRef(⟦2-char-id⟧.direction1, 0, this.direction1), ⟦2-char-id⟧.j.FromArrayToRef(⟦2-char-id⟧.direction2, 0, this.direction2)
-      }
-    }
-  },
-  37751: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+        super.parse(⟦2-char-id⟧), ⟦2-char-id⟧.p.FromArrayToRef(⟦2-char-id⟧.direction1, 0, this.direction1), ⟦2-char-id⟧.p.FromArrayToRef(⟦2-char-id⟧.direction2, 0, this.direction2)
+      }
+    }
+  },
+  37765: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = .5 * (Math.sqrt(3) - 1),
       ⟦2-char-id⟧ = (3 - Math.sqrt(3)) / 6,
```

</details>

<details>
<summary>Hunk 29 · Change · +1 / -1</summary>

```diff
@@ -1008,7 +1008,7 @@
     const ⟦2-char-id⟧ = class {
       constructor() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
-        const ⟦2-char-id⟧ = "function" == typeof ⟦2-char-id⟧ ? JJ : function(⟦2-char-id⟧) {
+        const ⟦2-char-id⟧ = "function" == typeof ⟦2-char-id⟧ ? BB : function(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = 0,
             ⟦2-char-id⟧ = 0,
             ⟦2-char-id⟧ = 0,
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/199.js</code> · modified · +58 / -58</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 199;
 export const ids = [199];
 export const modules = {
-  35692: ⟦2-char-id⟧ => {
+  35644: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = {
       aliceblue: [240, 248, 255],
       antiquewhite: [250, 235, 215],
```

</details>

<details>
<summary>Hunk 2 · Change · +3 / -3</summary>

```diff
@@ -153,9 +153,9 @@
       yellowgreen: [154, 205, 50]
     }
   },
-  35689: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35692),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35700),
+  35639: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35644),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35649),
       ⟦2-char-id⟧ = Object.hasOwnProperty,
       ⟦2-char-id⟧ = Object.create(null);
     for (var ⟦2-char-id⟧ in ⟦2-char-id⟧) ⟦2-char-id⟧.call(⟦2-char-id⟧, ⟦2-char-id⟧) && (⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] = ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -170,7 +170,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = Math.round(⟦2-char-id⟧).toString(16).toUpperCase();
-      return ⟦2-char-id⟧.length < 2 ? "0" + cJ : ⟦2-char-id⟧
+      return ⟦2-char-id⟧.length < 2 ? "0" + TB : ⟦2-char-id⟧
     }
     ⟦2-char-id⟧.get = function(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 4 · Change · +4 / -4</summary>

```diff
@@ -249,12 +249,12 @@
       return ⟦2-char-id⟧[⟦2-char-id⟧.slice(0, 3)]
     }
   },
-  35685: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧(35689),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35717),
+  35634: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧(35639),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35661),
       ⟦2-char-id⟧ = ["keyword", "gray", "hex"],
       ⟦2-char-id⟧ = {};
-    for (const ⟦2-char-id⟧ of Object.keys(⟦2-char-id⟧)) ⟦2-char-id⟧[[...UJ[⟦2-char-id⟧].labels].sort().join("")] = ⟦2-char-id⟧;
+    for (const ⟦2-char-id⟧ of Object.keys(⟦2-char-id⟧)) ⟦2-char-id⟧[[...yB[⟦2-char-id⟧].labels].sort().join("")] = ⟦2-char-id⟧;
     const ⟦2-char-id⟧ = {};
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -262,7 +262,7 @@
       if (⟦2-char-id⟧ && ⟦2-char-id⟧ in ⟦2-char-id⟧ && (⟦2-char-id⟧ = null), ⟦2-char-id⟧ && !(⟦2-char-id⟧ in ⟦2-char-id⟧)) throw new Error("Unknown model: " + ⟦2-char-id⟧);
       let ⟦2-char-id⟧, ⟦2-char-id⟧;
       if (null == ⟦2-char-id⟧) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-      else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) this.model = ⟦2-char-id⟧.model, this.color = [...JJ.color], this.valpha = ⟦2-char-id⟧.valpha;
+      else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) this.model = ⟦2-char-id⟧.model, this.color = [...BB.color], this.valpha = ⟦2-char-id⟧.valpha;
       else if ("string" === typeof ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
         if (null === ⟦2-char-id⟧) throw new Error("Unable to parse color from string: " + ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 6 · Change · +4 / -4</summary>

```diff
@@ -301,13 +301,13 @@
       },
       string(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.model in ⟦2-char-id⟧.to ? this : this.rgb();
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.round("number" === typeof ⟦2-char-id⟧ ? JJ : 1);
-        const ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.valpha ? ⟦2-char-id⟧.color : [...cJ.color, this.valpha];
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.round("number" === typeof ⟦2-char-id⟧ ? BB : 1);
+        const ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.valpha ? ⟦2-char-id⟧.color : [...TB.color, this.valpha];
         return ⟦2-char-id⟧.to[⟦2-char-id⟧.model](⟦2-char-id⟧)
       },
       percentString(⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = this.rgb().round("number" === typeof ⟦2-char-id⟧ ? JJ : 1),
-          ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.valpha ? ⟦2-char-id⟧.color : [...cJ.color, this.valpha];
+        const ⟦2-char-id⟧ = this.rgb().round("number" === typeof ⟦2-char-id⟧ ? BB : 1),
+          ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.valpha ? ⟦2-char-id⟧.color : [...TB.color, this.valpha];
         return ⟦2-char-id⟧.to.rgb.percent(⟦2-char-id⟧)
       },
       array() {
```

</details>

<details>
<summary>Hunk 7 · Change · +19 / -19</summary>

```diff
@@ -338,26 +338,26 @@
       alpha(⟦2-char-id⟧) {
         return void 0 !== ⟦2-char-id⟧ ? new ⟦2-char-id⟧([...this.color, Math.max(0, Math.min(1, ⟦2-char-id⟧))], this.model) : this.valpha
       },
-      red: ⟦2-char-id⟧("rgb", 0, hJ(255)),
-      green: ⟦2-char-id⟧("rgb", 1, hJ(255)),
-      blue: ⟦2-char-id⟧("rgb", 2, hJ(255)),
+      red: ⟦2-char-id⟧("rgb", 0, kB(255)),
+      green: ⟦2-char-id⟧("rgb", 1, kB(255)),
+      blue: ⟦2-char-id⟧("rgb", 2, kB(255)),
       hue: ⟦2-char-id⟧(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (⟦2-char-id⟧ => (⟦2-char-id⟧ % 360 + 360) % 360)),
-      saturationl: ⟦2-char-id⟧("hsl", 1, hJ(100)),
-      lightness: ⟦2-char-id⟧("hsl", 2, hJ(100)),
-      saturationv: ⟦2-char-id⟧("hsv", 1, hJ(100)),
-      value: ⟦2-char-id⟧("hsv", 2, hJ(100)),
-      chroma: ⟦2-char-id⟧("hcg", 1, hJ(100)),
-      gray: ⟦2-char-id⟧("hcg", 2, hJ(100)),
-      white: ⟦2-char-id⟧("hwb", 1, hJ(100)),
-      wblack: ⟦2-char-id⟧("hwb", 2, hJ(100)),
-      cyan: ⟦2-char-id⟧("cmyk", 0, hJ(100)),
-      magenta: ⟦2-char-id⟧("cmyk", 1, hJ(100)),
-      yellow: ⟦2-char-id⟧("cmyk", 2, hJ(100)),
-      black: ⟦2-char-id⟧("cmyk", 3, hJ(100)),
-      x: ⟦2-char-id⟧("xyz", 0, hJ(95.047)),
-      y: ⟦2-char-id⟧("xyz", 1, hJ(100)),
-      z: ⟦2-char-id⟧("xyz", 2, hJ(108.833)),
-      l: ⟦2-char-id⟧("lab", 0, hJ(100)),
+      saturationl: ⟦2-char-id⟧("hsl", 1, kB(100)),
+      lightness: ⟦2-char-id⟧("hsl", 2, kB(100)),
+      saturationv: ⟦2-char-id⟧("hsv", 1, kB(100)),
+      value: ⟦2-char-id⟧("hsv", 2, kB(100)),
+      chroma: ⟦2-char-id⟧("hcg", 1, kB(100)),
+      gray: ⟦2-char-id⟧("hcg", 2, kB(100)),
+      white: ⟦2-char-id⟧("hwb", 1, kB(100)),
+      wblack: ⟦2-char-id⟧("hwb", 2, kB(100)),
+      cyan: ⟦2-char-id⟧("cmyk", 0, kB(100)),
+      magenta: ⟦2-char-id⟧("cmyk", 1, kB(100)),
+      yellow: ⟦2-char-id⟧("cmyk", 2, kB(100)),
+      black: ⟦2-char-id⟧("cmyk", 3, kB(100)),
+      x: ⟦2-char-id⟧("xyz", 0, kB(95.047)),
+      y: ⟦2-char-id⟧("xyz", 1, kB(100)),
+      z: ⟦2-char-id⟧("xyz", 2, kB(108.833)),
+      l: ⟦2-char-id⟧("lab", 0, kB(100)),
       a: ⟦2-char-id⟧("lab", 1),
       b: ⟦2-char-id⟧("lab", 2),
       keyword(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -401,7 +401,7 @@
       isLight() {
         return !this.isDark()
       },
-      nZ() {
+      fp() {
         const ⟦2-char-id⟧ = this.rgb();
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 3; ⟦2-char-id⟧++) ⟦2-char-id⟧.color[⟦2-char-id⟧] = 255 - ⟦2-char-id⟧.color[⟦2-char-id⟧];
         return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -444,7 +444,7 @@
       rotate(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.hsl();
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.color[0];
-        return ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧) % 360, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? 360 + ZJ : ⟦2-char-id⟧, ⟦2-char-id⟧.color[0] = ⟦2-char-id⟧, ⟦2-char-id⟧
+        return ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧) % 360, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? 360 + dB : ⟦2-char-id⟧, ⟦2-char-id⟧.color[0] = ⟦2-char-id⟧, ⟦2-char-id⟧
       },
       mix(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -453,7 +453,7 @@
           ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? .5 : ⟦2-char-id⟧,
           ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧ - 1,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.alpha() - ⟦2-char-id⟧.alpha(),
-          ⟦2-char-id⟧ = ((⟦2-char-id⟧ * ⟦2-char-id⟧ === -1 ? eJ : (⟦2-char-id⟧ + ⟦2-char-id⟧) / (1 + ⟦2-char-id⟧ * ⟦2-char-id⟧)) + 1) / 2,
+          ⟦2-char-id⟧ = ((⟦2-char-id⟧ * ⟦2-char-id⟧ === -1 ? pB : (⟦2-char-id⟧ + ⟦2-char-id⟧) / (1 + ⟦2-char-id⟧ * ⟦2-char-id⟧)) + 1) / 2,
           ⟦2-char-id⟧ = 1 - ⟦2-char-id⟧;
         return ⟦2-char-id⟧.rgb(⟦2-char-id⟧ * ⟦2-char-id⟧.red() + ⟦2-char-id⟧ * ⟦2-char-id⟧.red(), ⟦2-char-id⟧ * ⟦2-char-id⟧.green() + ⟦2-char-id⟧ * ⟦2-char-id⟧.green(), ⟦2-char-id⟧ * ⟦2-char-id⟧.blue() + ⟦2-char-id⟧ * ⟦2-char-id⟧.blue(), ⟦2-char-id⟧.alpha() * ⟦2-char-id⟧ + ⟦2-char-id⟧.alpha() * (1 - ⟦2-char-id⟧))
       }
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -466,7 +466,7 @@
       ⟦2-char-id⟧.prototype[⟦2-char-id⟧] = function() {
         if (this.model === ⟦2-char-id⟧) return new ⟦2-char-id⟧(this);
         for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = arguments[⟦2-char-id⟧];
-        return ⟦2-char-id⟧.length > 0 ? new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : new ⟦2-char-id⟧([...(⟦2-char-id⟧ = ⟦2-char-id⟧[this.model][⟦2-char-id⟧].raw(this.color), Array.isArray(⟦2-char-id⟧) ? FJ : [⟦2-char-id⟧]), this.valpha], ⟦2-char-id⟧);
+        return ⟦2-char-id⟧.length > 0 ? new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : new ⟦2-char-id⟧([...(⟦2-char-id⟧ = ⟦2-char-id⟧[this.model][⟦2-char-id⟧].raw(this.color), Array.isArray(⟦2-char-id⟧) ? VB : [⟦2-char-id⟧]), this.valpha], ⟦2-char-id⟧);
         var ⟦2-char-id⟧
       }, ⟦2-char-id⟧[⟦2-char-id⟧] = function() {
         for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = arguments[⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -484,7 +484,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? JJ : [⟦2-char-id⟧];
+      ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? BB : [⟦2-char-id⟧];
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)(⟦2-char-id⟧[⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧] = []))[⟦2-char-id⟧] = ⟦2-char-id⟧;
       return ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
         function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 13 · Change · +2 / -2</summary>

```diff
@@ -505,8 +505,8 @@
     }
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧
   },
-  35720: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧(35727),
+  35665: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧(35672),
       ⟦2-char-id⟧ = {};
     for (const ⟦2-char-id⟧ of Object.keys(⟦2-char-id⟧)) ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] = ⟦2-char-id⟧;
     const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 14 · Change · +1 / -1</summary>

```diff
@@ -594,7 +594,7 @@
         ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
       let ⟦2-char-id⟧, ⟦2-char-id⟧;
-      ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 0 : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧) / XJ : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 2 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / XJ : ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 4 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.min(60 * ⟦2-char-id⟧, 360), ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ += 360);
+      ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 0 : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧) / lB : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 2 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / lB : ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 4 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.min(60 * ⟦2-char-id⟧, 360), ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ += 360);
       const ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧) / 2;
       return ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧ <= .5 ? ⟦2-char-id⟧ / (⟦2-char-id⟧ + ⟦2-char-id⟧) : ⟦2-char-id⟧ / (2 - ⟦2-char-id⟧ - ⟦2-char-id⟧), [⟦2-char-id⟧, 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.rgb.hsv = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -607,7 +607,7 @@
         ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           return (⟦2-char-id⟧ - ⟦2-char-id⟧) / 6 / ⟦2-char-id⟧ + .5
         };
-      return 0 === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0) : (⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧ - ZJ : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 1 / 3 + ⟦2-char-id⟧ - FJ : ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 2 / 3 + ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧ += 1 : ⟦2-char-id⟧ > 1 && (⟦2-char-id⟧ -= 1)), [360 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
+      return 0 === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0) : (⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧ - dB : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 1 / 3 + ⟦2-char-id⟧ - VB : ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 2 / 3 + ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧ += 1 : ⟦2-char-id⟧ > 1 && (⟦2-char-id⟧ -= 1)), [360 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.rgb.hwb = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[1];
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -656,7 +656,7 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧ < .5 ? ⟦2-char-id⟧ * (1 + ⟦2-char-id⟧) : ⟦2-char-id⟧ + ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧ - ⟦2-char-id⟧,
         ⟦2-char-id⟧ = [0, 0, 0];
-      for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 3; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 / 3 * -(⟦2-char-id⟧ - 1), ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧++, ⟦2-char-id⟧ > 1 && ⟦2-char-id⟧--, ⟦2-char-id⟧ = 6 * ⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧ + 6 * (⟦2-char-id⟧ - ⟦2-char-id⟧) * eJ : 2 * ⟦2-char-id⟧ < 1 ? UJ : 3 * ⟦2-char-id⟧ < 2 ? ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧) * (2 / 3 - ⟦2-char-id⟧) * 6 : ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = 255 * ⟦2-char-id⟧;
+      for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 3; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 / 3 * -(⟦2-char-id⟧ - 1), ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧++, ⟦2-char-id⟧ > 1 && ⟦2-char-id⟧--, ⟦2-char-id⟧ = 6 * ⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧ + 6 * (⟦2-char-id⟧ - ⟦2-char-id⟧) * pB : 2 * ⟦2-char-id⟧ < 1 ? yB : 3 * ⟦2-char-id⟧ < 2 ? ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧) * (2 / 3 - ⟦2-char-id⟧) * 6 : ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = 255 * ⟦2-char-id⟧;
       return ⟦2-char-id⟧
     }, ⟦2-char-id⟧.hsl.hsv = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0];
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -664,7 +664,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧[2] / 100,
         ⟦2-char-id⟧ = ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, .01);
-      ⟦2-char-id⟧ *= 2, ⟦2-char-id⟧ *= ⟦2-char-id⟧ <= 1 ? FJ : 2 - ⟦2-char-id⟧, ⟦2-char-id⟧ *= ⟦2-char-id⟧ <= 1 ? eJ : 2 - ⟦2-char-id⟧;
+      ⟦2-char-id⟧ *= 2, ⟦2-char-id⟧ *= ⟦2-char-id⟧ <= 1 ? VB : 2 - ⟦2-char-id⟧, ⟦2-char-id⟧ *= ⟦2-char-id⟧ <= 1 ? pB : 2 - ⟦2-char-id⟧;
       return [⟦2-char-id⟧, 100 * (0 === ⟦2-char-id⟧ ? 2 * ⟦2-char-id⟧ / (⟦2-char-id⟧ + ⟦2-char-id⟧) : 2 * ⟦2-char-id⟧ / (⟦2-char-id⟧ + ⟦2-char-id⟧)), 100 * ((⟦2-char-id⟧ + ⟦2-char-id⟧) / 2)]
     }, ⟦2-char-id⟧.hsv.rgb = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0] / 60,
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -697,7 +697,7 @@
       let ⟦2-char-id⟧, ⟦2-char-id⟧;
       ⟦2-char-id⟧ = (2 - ⟦2-char-id⟧) * ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = (2 - ⟦2-char-id⟧) * ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧ <= 1 ? AJ : 2 - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ || 0, ⟦2-char-id⟧ /= 2, [⟦2-char-id⟧, 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
+      return ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧ <= 1 ? JB : 2 - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ || 0, ⟦2-char-id⟧ /= 2, [⟦2-char-id⟧, 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.hwb.rgb = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0] / 360;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧[1] / 100,
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -756,7 +756,7 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ ** 3,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ** 3,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ** 3;
-      return ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? UJ : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? eJ : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? XJ : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ *= 95.047, ⟦2-char-id⟧ *= 100, ⟦2-char-id⟧ *= 108.883, [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]
+      return ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? yB : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? pB : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? lB : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ *= 95.047, ⟦2-char-id⟧ *= 100, ⟦2-char-id⟧ *= 108.883, [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.lab.lch = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[1],
```

</details>

<details>
<summary>Hunk 20 · Change · +2 / -2</summary>

```diff
@@ -815,11 +815,11 @@
         ⟦2-char-id⟧ = Math.min(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
       let ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧ / (1 - ⟦2-char-id⟧) : 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ <= 0 ? 0 : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧ % 6 : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? 2 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / XJ : 4 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧, ⟦2-char-id⟧ /= 6, ⟦2-char-id⟧ %= 1, [360 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
+      return ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧ / (1 - ⟦2-char-id⟧) : 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ <= 0 ? 0 : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧ % 6 : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? 2 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / lB : 4 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧, ⟦2-char-id⟧ /= 6, ⟦2-char-id⟧ %= 1, [360 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.hsl.hcg = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[1] / 100,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[2] / 100,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ < .5 ? 2 * ⟦2-char-id⟧ * ZJ : 2 * ⟦2-char-id⟧ * (1 - ⟦2-char-id⟧);
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ < .5 ? 2 * ⟦2-char-id⟧ * dB : 2 * ⟦2-char-id⟧ * (1 - ⟦2-char-id⟧);
       let ⟦2-char-id⟧ = 0;
       return ⟦2-char-id⟧ < 1 && (⟦2-char-id⟧ = (⟦2-char-id⟧ - .5 * ⟦2-char-id⟧) / (1 - ⟦2-char-id⟧)), [⟦2-char-id⟧[0], 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.hsv.hcg = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 21 · Change · +3 / -3</summary>

```diff
@@ -900,9 +900,9 @@
       return [(⟦2-char-id⟧[0] + ⟦2-char-id⟧[1] + ⟦2-char-id⟧[2]) / 3 / 255 * 100]
     }
   },
-  35717: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧(35720),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35731),
+  35661: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧(35665),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35676),
       ⟦2-char-id⟧ = {};
     Object.keys(⟦2-char-id⟧).forEach((⟦2-char-id⟧ => {
       ⟦2-char-id⟧[⟦2-char-id⟧] = {}, Object.defineProperty(⟦2-char-id⟧[⟦2-char-id⟧], "channels", {
```

</details>

<details>
<summary>Hunk 22 · Change · +3 / -3</summary>

```diff
@@ -929,15 +929,15 @@
           const ⟦2-char-id⟧ = function() {
             for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = arguments[⟦2-char-id⟧];
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[0];
-            return void 0 === ⟦2-char-id⟧ || null === ⟦2-char-id⟧ ? UJ : (⟦2-char-id⟧.length > 1 && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧))
+            return void 0 === ⟦2-char-id⟧ || null === ⟦2-char-id⟧ ? yB : (⟦2-char-id⟧.length > 1 && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧))
           };
           return "conversion" in ⟦2-char-id⟧ && (⟦2-char-id⟧.conversion = ⟦2-char-id⟧.conversion), ⟦2-char-id⟧
         }(⟦2-char-id⟧)
       }))
     })), ⟦2-char-id⟧.exports = ⟦2-char-id⟧
   },
-  35731: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧(35720);
+  35676: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧(35665);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = function() {
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -985,7 +985,7 @@
       return ⟦2-char-id⟧
     }
   },
-  35727: ⟦2-char-id⟧ => {
+  35672: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = {
       aliceblue: [240, 248, 255],
       antiquewhite: [250, 235, 215],
```

</details>

<details>
<summary>Hunk 24 · Change · +2 / -2</summary>

```diff
@@ -1137,8 +1137,8 @@
       yellowgreen: [154, 205, 50]
     }
   },
-  35700: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35708),
+  35649: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35656),
       ⟦2-char-id⟧ = Array.prototype.concat,
       ⟦2-char-id⟧ = Array.prototype.slice,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.exports = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 25 · Change · +1 / -1</summary>

```diff
@@ -1154,7 +1154,7 @@
       }
     }
   },
-  35708: ⟦2-char-id⟧ => {
+  35656: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧) {
       return !(!⟦2-char-id⟧ || "string" === typeof ⟦2-char-id⟧) && (⟦2-char-id⟧ instanceof Array || Array.isArray(⟦2-char-id⟧) || ⟦2-char-id⟧.length >= 0 && (⟦2-char-id⟧.splice instanceof Function || Object.getOwnPropertyDescriptor(⟦2-char-id⟧, ⟦2-char-id⟧.length - 1) && "String" !== ⟦2-char-id⟧.constructor.name))
     }
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/200.js</code> · modified · +41 / -41</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 200;
 export const ids = [200];
 export const modules = {
-  35740: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35681: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       MAX_BLOCK_ID: () => ⟦2-char-id⟧,
       armourReductionOf: () => ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 2 · Change · +3 / -3</summary>

```diff
@@ -46,15 +46,15 @@
         materials: "Iron Bar",
         worldTools: "Code Block"
       };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2778),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2780);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2760),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2764);
     const ⟦2-char-id⟧ = Object.freeze([]);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = null;
       return ⟦2-char-id⟧ => {
         var ⟦2-char-id⟧;
-        return ⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧, 10081), null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : 0
+        return ⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.B)(⟦2-char-id⟧, 10081), null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : 0
       }
     }
 
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -64,7 +64,7 @@
         ⟦2-char-id⟧ = [];
       return ⟦2-char-id⟧ => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        if (0 !== ⟦2-char-id⟧) return null === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.split(⟦2-char-id⟧.n), ⟦2-char-id⟧ = new Array(⟦2-char-id⟧.length)), ⟦2-char-id⟧[⟦2-char-id⟧ - 1] ??= ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ - 1])
+        if (0 !== ⟦2-char-id⟧) return null === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.split(⟦2-char-id⟧.v), ⟦2-char-id⟧ = new Array(⟦2-char-id⟧.length)), ⟦2-char-id⟧[⟦2-char-id⟧ - 1] ??= ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ - 1])
       }
     }
 
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -73,7 +73,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ === ⟦2-char-id⟧.d ? null : (0, ⟦2-char-id⟧.y)(⟦2-char-id⟧)
+      return ⟦2-char-id⟧ === ⟦2-char-id⟧.h ? null : (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$$1$$)$:$$##1$##.$#*####*C%$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$,($$($&)$################################2R$$################1$##########-$####################/$##+$(#$$1$$)$T%$$########1$##+$################################################################-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#)$2&$(#$(#$$1$$)$<$$.#$####/$####/$####3$##)#'#'#'#)#'#'#'#'#'#'#'##$B#$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#9$9#1$###########$$R&$##)$**$**$0*$%##$%##$%#$#####$%##$%##$%##$%##$%##$%##$%##$%##$%##$%##$%##$%##$%#)$9#9$9#1$$.$*)$*#$*#$*#$*#$*3#)#)#)#)#)#)#)#)#)#)#)#)#)#)#)#,F'$$5$$&$(2$##U$$&2$*5$X$#$H%.$##-$(2$####$&#######'$@#$##$2#######################################b?$1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#IW&$b$I*b$J*b$K*b$L*b$M*b$N*b$O*b$P*b$Q*b$R*b$S*b$T*b$U*b$V*b$W*b$X*b$Y*b$Z*b$[*b$]*b$^*b$_*b$`*b$a*b$b*b$c*b$C+b$D+b$E+b$F+b$G+b$H+Z'&$##b$$A#b$$A#b$$A#b$$A#b$$A#b$$A#b$$A#b$$A#b$$A#b$$A#b$$A#b&$b&#;$1#1$1#1$1#1$1#1$1#1$1#1$1#1$1#1$1#1$1#1$1#########)$J&6$)#;$%#b$$)E,U&$##U&$$#$c&($I$#Y$$1#O%$####-$)I,Q'$b&#)$b&#b($##[+$'#5$$#$$#$$#$$#$$#$$#$$#$B#$$2$,#$$'$$#$##%$##3$##'$########`%$7###S%$##################+$###$##%$###$##%$###$##%$###$##+$###$##%$###$##%$###$##+$###$##'$##%$###$##%$###$##%$###$##%$###$##/$#######$###$##/$$##$##$##$##$##$##$##$##$##$##$##$##$##$##$##$##$##$##S$$c&2$################################################################################################################################U)$2P'$###$##K%$##5$##O&$##C'$##+$##^&$##########A$##########################################)#)#######################################)#)#######################################)#)#######################################)#)###############Y)$##G$$############W'$##W$$", '*|forget-Me-Not|ladder|wheat|jackO\'Lantern|bookshelf|rice|cotton|rocket|cornSeeds|corn|chest|ice|yellowSpawnBlock|whiteSpawnBlock|redSpawnBlock|purpleSpawnBlock|pinkSpawnBlock|orangeSpawnBlock|magentaSpawnBlock|limeSpawnBlock|lightGraySpawnBlock|lightBlueSpawnBlock|greenSpawnBlock|graySpawnBlock|cyanSpawnBlock|brownSpawnBlock|blueSpawnBlock|blackSpawnBlock|redGeneratorSpawnBlock|blueGeneratorSpawnBlock|limeGeneratorSpawnBlock|yellowGeneratorSpawnBlock|cyanGeneratorSpawnBlock|whiteGeneratorSpawnBlock|pinkGeneratorSpawnBlock|grayGeneratorSpawnBlock|diamondGeneratorSpawnBlock|moonstoneGeneratorSpawnBlock|oreGeneratorSpawnBlock|redGoalBlock|blueGoalBlock|pigMobSpawnerBlock|cowMobSpawnerBlock|sheepMobSpawnerBlock|caveGolemMobSpawnerBlock|draugrZombieMobSpawnerBlock|draugrSkeletonMobSpawnerBlock|emptyMobSpawnerBlock|frostGolemMobSpawnerBlock|frostZombieMobSpawnerBlock|frostSkeletonMobSpawnerBlock|draugrKnightMobSpawnerBlock|wolfMobSpawnerBlock|bearMobSpawnerBlock|deerMobSpawnerBlock|stagMobSpawnerBlock|goldWatermelonStagMobSpawnerBlock|colouredChalk^colour=$t(colour:yellow)|colouredChalk^colour=$t(colour:white)|colouredChalk^colour=$t(colour:red)|colouredChalk^colour=$t(colour:purple)|colouredChalk^colour=$t(colour:pink)|colouredChalk^colour=$t(colour:orange)|colouredChalk^colour=$t(colour:magenta)|colouredChalk^colour=$t(colour:lime)|colouredChalk^colour=$t(colour:light_gray)|colouredChalk^colour=$t(colour:light_blue)|colouredChalk^colour=$t(colour:green)|colouredChalk^colour=$t(colour:gray)|colouredChalk^colour=$t(colour:cyan)|colouredChalk^colour=$t(colour:brown)|colouredChalk^colour=$t(colour:blue)|colouredChalk^colour=$t(colour:black)|colouredChalkBricks^colour=$t(colour:yellow)|colouredChalkBricks^colour=$t(colour:white)|colouredChalkBricks^colour=$t(colour:red)|colouredChalkBricks^colour=$t(colour:purple)|colouredChalkBricks^colour=$t(colour:pink)|colouredChalkBricks^colour=$t(colour:orange)|colouredChalkBricks^colour=$t(colour:magenta)|colouredChalkBricks^colour=$t(colour:lime)|colouredChalkBricks^colour=$t(colour:light_gray)|colouredChalkBricks^colour=$t(colour:light_blue)|colouredChalkBricks^colour=$t(colour:green)|colouredChalkBricks^colour=$t(colour:gray)|colouredChalkBricks^colour=$t(colour:cyan)|colouredChalkBricks^colour=$t(colour:brown)|colouredChalkBricks^colour=$t(colour:blue)|colouredChalkBricks^colour=$t(colour:black)|colouredChalkSlab^colour=$t(colour:yellow)|colouredChalkSlab^colour=$t(colour:white)|colouredChalkSlab^colour=$t(colour:red)|colouredChalkSlab^colour=$t(colour:purple)|colouredChalkSlab^colour=$t(colour:pink)|colouredChalkSlab^colour=$t(colour:orange)|colouredChalkSlab^colour=$t(colour:magenta)|colouredChalkSlab^colour=$t(colour:lime)|colouredChalkSlab^colour=$t(colour:light_gray)|colouredChalkSlab^colour=$t(colour:light_blue)|colouredChalkSlab^colour=$t(colour:green)|colouredChalkSlab^colour=$t(colour:gray)|colouredChalkSlab^colour=$t(colour:cyan)|colouredChalkSlab^colour=$t(colour:brown)|colouredChalkSlab^colour=$t(colour:blue)|colouredChalkSlab^colour=$t(colour:black)|colouredChalkBricksSlab^colour=$t(colour:yellow)|colouredChalkBricksSlab^colour=$t(colour:white)|colouredChalkBricksSlab^colour=$t(colour:red)|colouredChalkBricksSlab^colour=$t(colour:purple)|colouredChalkBricksSlab^colour=$t(colour:pink)|colouredChalkBricksSlab^colour=$t(colour:orange)|colouredChalkBricksSlab^colour=$t(colour:magenta)|colouredChalkBricksSlab^colour=$t(colour:lime)|colouredChalkBricksSlab^colour=$t(colour:light_gray)|colouredChalkBricksSlab^colour=$t(colour:light_blue)|colouredChalkBricksSlab^colour=$t(colour:green)|colouredChalkBricksSlab^colour=$t(colour:gray)|colouredChalkBricksSlab^colour=$t(colour:cyan)|colouredChalkBricksSlab^colour=$t(colour:brown)|colouredChalkBricksSlab^colour=$t(colour:blue)|colouredChalkBricksSlab^colour=$t(colour:black)|gorillaMobSpawnerBlock|wildcatMobSpawnerBlock|draugrHuntressMobSpawnerBlock|magmaGolemMobSpawnerBlock|lightbluePortal|lightgrayPortal|horseMobSpawnerBlock|tomato|carrotSeeds|potatoSeeds|strawberries|sugarCane|lettuce|coffeeBean|cauliflower|parsnip|blueberries|redCabbage|beetrootSeeds|whiteBanner|orangeBanner|magentaBanner|lightBlueBanner|yellowBanner|limeBanner|pinkBanner|grayBanner|lightGrayBanner|cyanBanner|purpleBanner|blueBanner|brownBanner|greenBanner|redBanner|blackBanner|draugrBanner|spiritGolemMobSpawnerBlock|spiritWolfMobSpawnerBlock|spiritBearMobSpawnerBlock|spiritStagMobSpawnerBlock|spiritGorillaMobSpawnerBlock|draugrWarperMobSpawnerBlock|smallMagentaPod|smallLightGrayPod|smallRedPod|frostWraithMobSpawnerBlock|draugrReaverMobSpawnerBlock|smallWhitePod|smallOrangePod|smallLightBluePod|smallYellowPod|smallLimePod|smallPinkPod|smallGrayPod|smallCyanPod|smallPurplePod|smallBluePod|smallBrownPod|smallGreenPod|smallBlackPod|skullBanner|rainbowBanner|directionalArrow^colour=$t(colour:white)|directionalArrow^colour=$t(colour:orange)|directionalArrow^colour=$t(colour:magenta)|directionalArrow^colour=$t(colour:light_blue)|directionalArrow^colour=$t(colour:yellow)|directionalArrow^colour=$t(colour:lime)|directionalArrow^colour=$t(colour:pink)|directionalArrow^colour=$t(colour:gray)|directionalArrow^colour=$t(colour:light_gray)|directionalArrow^colour=$t(colour:cyan)|directionalArrow^colour=$t(colour:purple)|directionalArrow^colour=$t(colour:blue)|directionalArrow^colour=$t(colour:brown)|directionalArrow^colour=$t(colour:green)|directionalArrow^colour=$t(colour:red)|directionalArrow^colour=$t(colour:black)|=Smoke Block|stalkerMobSpawnerBlock|croneMobSpawnerBlock|slimeMobSpawnerBlock|ironGuardianMobSpawnerBlock|goldGuardianMobSpawnerBlock|diamondGuardianMobSpawnerBlock|moonstoneGuardianMobSpawnerBlock|camelMobSpawnerBlock|=Rare Lucky Block|=Super Lucky Block|=Rare Weapon Lucky Block|=Super Weapon Lucky Block|=Building Lucky Block|=Rare Building Lucky Block|=Super Building Lucky Block|=Armour Lucky Block|=Rare Armour Lucky Block|=Super Armour Lucky Block|=Tools Lucky Block|=Rare Tools Lucky Block|=Super Tools Lucky Block|=Food Lucky Block|=Rare Food Lucky Block|=Super Food Lucky Block|=Potion Lucky Block|=Rare Potion Lucky Block|=Super Potion Lucky Block|=Block Destroyer TNT|colouredChalkStairs^colour=$t(colour:yellow)|colouredChalkStairs^colour=$t(colour:white)|colouredChalkStairs^colour=$t(colour:red)|colouredChalkStairs^colour=$t(colour:purple)|colouredChalkStairs^colour=$t(colour:pink)|colouredChalkStairs^colour=$t(colour:orange)|colouredChalkStairs^colour=$t(colour:magenta)|colouredChalkStairs^colour=$t(colour:lime)|colouredChalkStairs^colour=$t(colour:light_gray)|colouredChalkStairs^colour=$t(colour:light_blue)|colouredChalkStairs^colour=$t(colour:green)|colouredChalkStairs^colour=$t(colour:gray)|colouredChalkStairs^colour=$t(colour:cyan)|colouredChalkStairs^colour=$t(colour:brown)|colouredChalkStairs^colour=$t(colour:blue)|colouredChalkStairs^colour=$t(colour:black)|colouredChalkBricksStairs^colour=$t(colour:yellow)|colouredChalkBricksStairs^colour=$t(colour:white)|colouredChalkBricksStairs^colour=$t(colour:red)|colouredChalkBricksStairs^colour=$t(colour:purple)|colouredChalkBricksStairs^colour=$t(colour:pink)|colouredChalkBricksStairs^colour=$t(colour:orange)|colouredChalkBricksStairs^colour=$t(colour:magenta)|colouredChalkBricksStairs^colour=$t(colour:lime)|colouredChalkBricksStairs^colour=$t(colour:light_gray)|colouredChalkBricksStairs^colour=$t(colour:light_blue)|colouredChalkBricksStairs^colour=$t(colour:green)|colouredChalkBricksStairs^colour=$t(colour:gray)|colouredChalkBricksStairs^colour=$t(colour:cyan)|colouredChalkBricksStairs^colour=$t(colour:brown)|colouredChalkBricksStairs^colour=$t(colour:blue)|colouredChalkBricksStairs^colour=$t(colour:black)|tikiTerrorMobSpawnerBlock|mapleFence|pineFence|plumFence|cedarFence|aspenFence|jungleFence|palmFence|pearFence|cherryFence|spectralFence|mangoFence|noticeboard|mapleFenceGate|pineFenceGate|plumFenceGate|cedarFenceGate|aspenFenceGate|jungleFenceGate|palmFenceGate|pearFenceGate|cherryFenceGate|spectralFenceGate|mangoFenceGate|ironGoofyGolemMobSpawnerBlock|goldGoofyGolemMobSpawnerBlock|diamondGoofyGolemMobSpawnerBlock|moonstoneGoofyGolemMobSpawnerBlock|autoBench|homesteadCore|starframe|reactorFrame|collider|jetChestplate|atomicSpire|fluidPipe|waterPipe|=Artisan Axe|bowlOfCranberries|=Snowball Launcher|=Bullet|rpg|=67 Base Projectile|=67 Boosted Projectile|=Capitano Grenade|=Scatter Pellet|=Compass|=Chunk Map|=Teleport Heart|=Frost Shard|=Molten Cog|=Choir Bell|=Siege Core|=Flywheel|=Radiant Spark|=Brood Sac|=Bandolier|slownessPotionII|splashSlownessPotionII|poisonPotionII|splashPoisonPotionII|weaknessPotionII|splashWeaknessPotionII|instantDamagePotionII|splashInstantDamagePotionII|speedPotionII|splashSpeedPotionII|defensePotionII|splashDefensePotionII|strengthPotionII|splashStrengthPotionII|jumpPotionII|splashJumpPotionII|splashKnockbackPotionII|regenerationPotionII|splashRegenerationPotionII|instantHealingPotionII|splashInstantHealingPotionII|hastePotionII|splashHastePotionII|shieldPotionII|splashShieldPotionII|xRayVisionPotion|splashXRayVisionPotion|arrowOfXRayVision|miningYieldPotionII|splashMiningYieldPotionII|=AK-47|=M16|=MP40|=TAR-21|=M1911|=One Shot Pistol|=Double Barrel|=AWP|=Deagle|=Striker-12|=VSR|=DMR|=Minigun|=FMR|=SKAR|=Block-19|=Mini Izu|=GPMG|yellowPaintballExplosive|whitePaintballExplosive|redPaintballExplosive|purplePaintballExplosive|pinkPaintballExplosive|orangePaintballExplosive|magentaPaintballExplosive|limePaintballExplosive|lightGrayPaintballExplosive|lightBluePaintballExplosive|greenPaintballExplosive|grayPaintballExplosive|cyanPaintballExplosive|brownPaintballExplosive|bluePaintballExplosive|blackPaintballExplosive|yellowStickyPaintballExplosive|whiteStickyPaintballExplosive|redStickyPaintballExplosive|purpleStickyPaintballExplosive|pinkStickyPaintballExplosive|orangeStickyPaintballExplosive|magentaStickyPaintballExplosive|limeStickyPaintballExplosive|lightGrayStickyPaintballExplosive|lightBlueStickyPaintballExplosive|greenStickyPaintballExplosive|grayStickyPaintballExplosive|cyanStickyPaintballExplosive|brownStickyPaintballExplosive|blueStickyPaintballExplosive|blackStickyPaintballExplosive|yellowSeekingPaintballExplosive|whiteSeekingPaintballExplosive|redSeekingPaintballExplosive|purpleSeekingPaintballExplosive|pinkSeekingPaintballExplosive|orangeSeekingPaintballExplosive|magentaSeekingPaintballExplosive|limeSeekingPaintballExplosive|lightGraySeekingPaintballExplosive|lightBlueSeekingPaintballExplosive|greenSeekingPaintballExplosive|graySeekingPaintballExplosive|cyanSeekingPaintballExplosive|brownSeekingPaintballExplosive|blueSeekingPaintballExplosive|blackSeekingPaintballExplosive|yellowQuickPaintballExplosive|whiteQuickPaintballExplosive|redQuickPaintballExplosive|purpleQuickPaintballExplosive|pinkQuickPaintballExplosive|orangeQuickPaintballExplosive|magentaQuickPaintballExplosive|limeQuickPaintballExplosive|lightGrayQuickPaintballExplosive|lightBlueQuickPaintballExplosive|greenQuickPaintballExplosive|grayQuickPaintballExplosive|cyanQuickPaintballExplosive|brownQuickPaintballExplosive|blueQuickPaintballExplosive|blackQuickPaintballExplosive|auraXpPotionII|splashAuraXpPotionII|worldBuilderWand|barnacleJaw|triPointedNeedlefish|cowsMilk|sheepsMilk|[{"str":"Common Lottery Ticket","style":{"color":"#4d4d4d"}}]|[{"str":"Uncommon Lottery Ticket","style":{"color":"#A9FF21"}}]|[{"str":"Rare Lottery Ticket","style":{"color":"#84E0FF"}}]|[{"str":"Epic Lottery Ticket","style":{"color":"#800080"}}]|[{"str":"Legendary Lottery Ticket","style":{"color":"#ffa500"}}]|=Sword Upgrade|=Armour Upgrade|=Tools Upgrade|=Clovers|=Void Wings|=Lucky Bomb|=Unlucky Bomb|=Swap Orb|=Golden Clover|=Amethite|=Amethite Fragment|=Amethite Pickaxe|=Amethite Axe|=Amethite Spade|=Amethite Sword|=Amethite Hoe|=Amethite Helmet|=Amethite Chestplate|=Amethite Leggings|=Amethite Boots|=Amethite Gauntlets|=Amethite Bow|=Amethite Crossbow|=Amethite Crossbow Charged|=Amethite Spear|=Amethite Dagger|=Amethite Boomerang|=Amethite Club|=Amethite Mace|=Amethite Whip|=Magmasteel|=Magmasteel Fragment|=Magmasteel Pickaxe|=Magmasteel Axe|=Magmasteel Spade|=Magmasteel Sword|=Magmasteel Hoe|=Magmasteel Helmet|=Magmasteel Chestplate|=Magmasteel Leggings|=Magmasteel Boots|=Magmasteel Gauntlets|=Magmasteel Bow|=Magmasteel Crossbow|=Magmasteel Crossbow Charged|=Magmasteel Spear|=Magmasteel Dagger|=Magmasteel Boomerang|=Magmasteel Club|=Magmasteel Mace|=Magmasteel Whip|=Rubellite|=Rubellite Fragment|=Rubellite Pickaxe|=Rubellite Axe|=Rubellite Spade|=Rubellite Sword|=Rubellite Hoe|=Rubellite Helmet|=Rubellite Chestplate|=Rubellite Leggings|=Rubellite Boots|=Rubellite Gauntlets|=Rubellite Bow|=Rubellite Crossbow|=Rubellite Crossbow Charged|=Rubellite Spear|=Rubellite Dagger|=Rubellite Boomerang|=Rubellite Club|=Rubellite Mace|=Rubellite Whip|=Serpentite|=Serpentite Fragment|=Serpentite Pickaxe|=Serpentite Axe|=Serpentite Spade|=Serpentite Sword|=Serpentite Hoe|=Serpentite Helmet|=Serpentite Chestplate|=Serpentite Leggings|=Serpentite Boots|=Serpentite Gauntlets|=Serpentite Bow|=Serpentite Crossbow|=Serpentite Crossbow Charged|=Serpentite Spear|=Serpentite Dagger|=Serpentite Boomerang|=Serpentite Club|=Serpentite Mace|=Serpentite Whip|=Cracked Rubellite Pickaxe|depositSeedCopper|depositSeedGold|depositSeedVoltite|depositSeedCoal|depositSeedIron|depositSeedStone|depositSeedUranium', ⟦2-char-id⟧),
       ⟦2-char-id⟧ = ⟦2-char-id⟧("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$+#%$+##$#4+#+##$+#%$$*$$*$$^%$$#$&#$$#$$#$&#$*#$&#$$#$$'$$^$###%8<#$########[%#$#$7###'#/$###$##/$##%$#D$#A#D$#A#D$#A#D$#A%$$#$*$$##################+$###$##$#$###$##$#$###$##$#$###$##$#$##$#$###$##$#$###$##$#$###$##&#$$#$###$##&#$##$#$###$##$#$###$##$#$###$##$#$###$##&#$&#$&#$$#$###$##&#$&#$2H$$A#B2#A#A#AL%A#A#A#A#b&####################################################################################$2P'$###$##$#$C$##$C$##$$%$$*$$($$#$$6$$%$(E%$$&$F$*$.##-#-#-#-#-#A$+#A###################$###3#4#5#6#74'>#a&#b&#c&#C'#D'#E'$###3#4#5#6#74'>#a&#b&#c&#C'#D'#E'$#Q'#3#4#5#6#74'>#a&#b&#c&#C'#D'#E'$#Q'#3#4#5#6#74'>#a&#b&#c&#C'#D'#E'$1R'#63>#a&#b&#C'#D'#E'#C'$'Q'#63>#a&#b&#C'#D'#E'#C'$'Q'#63>#a&#b&#C'#D'#E'#C'$'R'#63>#a&#b&#C'#D'#E'#C'$,#W&$#######T'#U'#V'#T'#U'#V'#T'#U'#V'#T'#U'#V'#T'#U'#V'#T'#U'#V'#T'#U'#V'#T'#U'#V'#6b$$+#)$", "*|emptyBookshelfDescription|=Prevents other factions from changing blocks and\nopening chests in the placed chunk|spikesDescription|fatMushroomDescription|spawnBlockDescription|teamGeneratorSpawnBlockDescription|goalBlockDescription|enchantingTableDescription|antlersDescription|ceilingClimbableDescription|jumpPadDescription|rocketShipDescription|=Place it to start a 30 second fuse. When it goes off, every placed block on the map is removed. Lucky blocks survive.|fluidPipeDescription|pickaxeDescription|axeDescription|spadeDescription|swordDescription|hoeDescription|throwableItemDescription|=Rapidly fires snowballs!|=The base projectile for the 67 character in Heroes v Brainrots|=The boosted projectile for the 67 character in Heroes v Brainrots|=A small explosive grenade thrown by Capitano Explovissimo in Heroes v Brainrots|=Primary spread shot from Scatter in Heroes v Brainrots|bowDescription|compassDescription|=Drop into any locked chunk to instantly unlock it.|foodDescription|watermelonSliceDescription|melonSliceDescription|rawFoodDescription|=The still-beating core of a Blink. Salvaged from a Warp Stalker.|=A splinter of cryogenic shell that never melts. Salvaged from a Frost Revenant.|=A gear from an overload mechanism, seized mid-cycle. Salvaged from a Magma Warden.|=The toll that calls the dead. Salvaged from a Hollow Choir.|=The firing heart of a barrage. Salvaged from a Siege Engine.|=The wheel a room-mill spins around. Salvaged from a Carousel.|=A mote of the failure state itself. Salvaged from Breach Zero.|=A sac filled with an acidic bile. Still full. Salvaged from a Broodfather.|=Her charge belt. Three still on it, and nobody has volunteered to count again. Salvaged from a Deadlock.|slownessPotionDescription|splashSlownessPotionDescription|poisonPotionDescription|splashPoisonPotionDescription|weaknessPotionDescription|splashWeaknessPotionDescription|instantDamagePotionDescription|splashInstantDamagePotionDescription|milkPotionDescription|speedPotionDescription|splashSpeedPotionDescription|defensePotionDescription|splashDefensePotionDescription|strengthPotionDescription|splashStrengthPotionDescription|jumpPotionDescription|splashJumpPotionDescription|splashKnockbackPotionDescription|regenerationPotionDescription|splashRegenerationPotionDescription|instantHealingPotionDescription|splashInstantHealingPotionDescription|hastePotionDescription|splashHastePotionDescription|shieldPotionDescription|splashShieldPotionDescription|miningYieldPotionDescription|splashMiningYieldPotionDescription|balloonDescription|popupTowerDescription|paintballGunDescription|paintballDescription|paintballExplosiveDescription|stickyPaintballExplosiveDescription|seekingPaintballExplosiveDescription|quickPaintballExplosiveDescription|paintBowDescription|pigSpawnOrbDescription^mob=Pig|cowSpawnOrbDescription^mob=Cow|sheepSpawnOrbDescription^mob=Sheep|horseSpawnOrbDescription^mob=Horse|camelSpawnOrbDescription^mob=Camel|ironGoofyGolemSpawnOrbDescription^mob=Iron Goofy Golem|goldGoofyGolemSpawnOrbDescription^mob=Gold Goofy Golem|diamondGoofyGolemSpawnOrbDescription^mob=Diamond Goofy Golem|moonstoneGoofyGolemSpawnOrbDescription^mob=Moonstone Goofy Golem|deerSpawnOrbDescription^mob=Deer|slimeSpawnOrbDescription^mob=Slime|wolfSpawnOrbDescription^mob=Wolf|wildcatSpawnOrbDescription^mob=Wildcat|spiritGolemSpawnOrbDescription^mob=Spirit Golem|spiritWolfSpawnOrbDescription^mob=Spirit Wolf|spiritBearSpawnOrbDescription^mob=Spirit Bear|spiritStagSpawnOrbDescription^mob=Spirit Stag|spiritGorillaSpawnOrbDescription^mob=Spirit Gorilla|bearSpawnOrbDescription^mob=Bear|stagSpawnOrbDescription^mob=Stag|goldWatermelonStagSpawnOrbDescription^mob=Gold Watermelon Stag|gorillaSpawnOrbDescription^mob=Gorilla|caveGolemSpawnOrbDescription^mob=Cave Golem|draugrZombieSpawnOrbDescription^mob=Draugr Zombie|draugrSkeletonSpawnOrbDescription^mob=Draugr Skeleton|frostGolemSpawnOrbDescription^mob=Frost Golem|frostZombieSpawnOrbDescription^mob=Frost Zombie|frostSkeletonSpawnOrbDescription^mob=Frost Skeleton|draugrKnightSpawnOrbDescription^mob=Draugr Knight|draugrHuntressSpawnOrbDescription^mob=Draugr Huntress|magmaGolemSpawnOrbDescription^mob=Magma Golem|draugrWarperSpawnOrbDescription^mob=Draugr Warper|frostWraithSpawnOrbDescription^mob=Frost Wraith|draugrReaverSpawnOrbDescription^mob=Draugr Reaver|stalkerSpawnOrbDescription^mob=Stalker|croneSpawnOrbDescription^mob=Crone|ironGuardianSpawnOrbDescription^mob=Iron Guardian|goldGuardianSpawnOrbDescription^mob=Gold Guardian|diamondGuardianSpawnOrbDescription^mob=Diamond Guardian|moonstoneGuardianSpawnOrbDescription^mob=Moonstone Guardian|tikiTerrorSpawnOrbDescription^mob=Tiki Terror|auraXpPotionDescription|splashAuraXpPotionDescription|firecrackerDescription|firecrackerPebbleDescription|spearDescription|daggerDescription|boomerangDescription|clubDescription|maceDescription|whipDescription|=Take it to the Lottery stall in the spawn hub to redeem it for a reward.|clockDescription|=Use to permanently advance your Sword tier for this match. Share spare upgrades with your team.|=Use to permanently advance your Armour tier for this match. Share spare upgrades with your team.|=Use to permanently advance your Pickaxe and Axe tier for this match. Share spare upgrades with your team.|=Earned from lucky blocks, kills and beds. Spend them at your base's Lucky Trader and Lucky Upgrades.|=Keep one in your inventory. Falling into the void uses it up and puts you back on solid ground.|=A random lucky effect for everyone it splashes, you included. Usually good!|=A random unlucky effect for everyone it splashes, you included. Usually bad!|=Throw near an enemy or mob to swap places with them.|=A shiny golden four-leaf clover.|elementalShardDescription|forgeFragmentDescription|=Ruby calls it cracked, not beaten. A sturdy pickaxe ready for the stubborn stone in her mine.|swordBladeDescription|swordGuardDescription|swordHandleDescription|cagedMobDescription", ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -82,7 +82,7 @@
     let ⟦2-char-id⟧ = -1;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧ !== (0, ⟦2-char-id⟧.h)() && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(), ⟦2-char-id⟧.clear(), ⟦2-char-id⟧.clear());
+      ⟦2-char-id⟧ !== (0, ⟦2-char-id⟧.d)() && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(), ⟦2-char-id⟧.clear(), ⟦2-char-id⟧.clear());
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
       return void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(), void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧
     }
```

</details>

<details>
<summary>Hunk 6 · Change · +6 / -6</summary>

```diff
@@ -95,24 +95,24 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧("]%cU+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
       ⟦2-char-id⟧ = ⟦2-char-id⟧("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$"),
       ⟦2-char-id⟧ = ⟦2-char-id⟧("$ZN+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (⟦2-char-id⟧ => "" === ⟦2-char-id⟧ ? null : Number(⟦2-char-id⟧))),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$2%$)%$)%$,&$.$$.$$'$$&$$%$$'$$7$$%$$%$$%$$%$$%$$%$$%$$5#$%#$9#$J$&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$-&$'%$)%$)%$,&$'$$:$$G%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$B<$$R$$$%$$-$$%$$;&$0%$)%$)%$,&$'$$%$$%$$%$$%$$%$$&&$/$$%$$&$$F$&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'$$%$$&&$/%$)%$)%$,&$'$$)$$N%$$,&$%#$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$;$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$%$$%$$%$$%$$%$$%$$%$$%$$'$$X$&$%*$5&$%*$I$$$&$$&$$&$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$&$$%$$*&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$U$&$'&$'$$)#$7$$%$$%$$%$$%$$?+$8$$%$$%$$%$$%+$7#$'#$+$$%$$%$$%$$%$$6&$'&$&$$&$$%$$%$$%$$9&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$Q^%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$V3$$b$$$F%%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$-$$%$$%$$%$$%$$%$$0$$%$$%$$%$$%$$%$$%$$%$$&$$%$$%$$%$$%$$P$$$*$$)$$)$$)$$)$$&$$>$$+$$)$$A$$8$$)$$)$$)$$)$$*$$B$$,$$%$$%$$%$$%$$&$$-$$?+$b$$$)+$O)$0E(#$[%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$+#*..:#.@#.,6.*#.&#.&%.$%.($.&$.&%.$%.&$.$%.&%.&%.&%.&%.$%.$$.$$.&$.$%.&$.$P).$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$^(.*&.$M$.$*.$(.$#.$:.0U%.2#.$C&.$%.$8.$%.$8.$%.$8.$%.$=.$%.$3.$%.$3.$%.$3.$%.", "meta,rot1|meta,rot1,closed|meta,rot1,bot|meta,rot1,books6|meta,rot1,books0|meta,rot1,empty|meta,rot1,top|meta,conn,none|meta,input,none|meta,output,none|meta,charging1|meta,dir1", (⟦2-char-id⟧ => ⟦2-char-id⟧.split(⟦2-char-id⟧.k).join(⟦2-char-id⟧.n))),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$2%$)%$)%$,&$.$$.$$'$$&$$%$$'$$7$$%$$%$$%$$%$$%$$%$$%$$5#$%#$9#$J$&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$-&$'%$)%$)%$,&$'$$:$$G%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$B<$$R$$$%$$-$$%$$;&$0%$)%$)%$,&$'$$%$$%$$%$$%$$%$$&&$/$$%$$&$$F$&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'$$%$$&&$/%$)%$)%$,&$'$$)$$N%$$,&$%#$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$5&$%*$;$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$%$$%$$%$$%$$%$$%$$%$$%$$'$$X$&$%*$5&$%*$I$$$&$$&$$&$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$&$$%$$*&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$U$&$'&$'$$)#$7$$%$$%$$%$$%$$?+$8$$%$$%$$%$$%+$7#$'#$+$$%$$%$$%$$%$$6&$'&$&$$&$$%$$%$$%$$9&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$Q^%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$V3$$b$$$F%%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$-$$%$$%$$%$$%$$%$$0$$%$$%$$%$$%$$%$$%$$%$$&$$%$$%$$%$$%$$P$$$*$$)$$)$$)$$)$$&$$>$$+$$)$$A$$8$$)$$)$$)$$)$$*$$B$$,$$%$$%$$%$$%$$&$$-$$?+$b$$$)+$O)$0E(#$[%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$+#*..:#.@#.,6.*#.&#.&%.$%.($.&$.&%.$%.&$.$%.&%.&%.&%.&%.$%.$$.$$.&$.$%.&$.$P).$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$%.$^(.*&.$M$.$*.$(.$#.$:.0U%.2#.$C&.$%.$8.$%.$8.$%.$8.$%.$=.$%.$3.$%.$3.$%.$3.$%.", "meta,rot1|meta,rot1,closed|meta,rot1,bot|meta,rot1,books6|meta,rot1,books0|meta,rot1,empty|meta,rot1,top|meta,conn,none|meta,input,none|meta,output,none|meta,charging1|meta,dir1", (⟦2-char-id⟧ => ⟦2-char-id⟧.split(⟦2-char-id⟧.p).join(⟦2-char-id⟧.v))),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(",GN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$'$,X$+$=(09+", "Break Speed,Momentum,Mining Yield,Mining Aura|Break Speed,Momentum|Break Speed,Momentum,Lumber Aura|Break Speed,Momentum,Digging Aura|Damage,Attack Speed,Critical Damage|Damage,Attack Speed,Critical Damage,Horizontal Knockback|Break Speed,Momentum,Farming Yield,Farming Aura|Protection,Health,Health Regen|Protection,Health,Health Regen,Knockback Resist|Protection,Health,Health Regen,Stomp Damage|Horizontal Knockback,Vertical Knockback,Damage|Firecracker Cooldown,Firecracker Boost,Gliding Speed|Arrow Speed,Arrow Damage,Quick Charge", (⟦2-char-id⟧ => Object.freeze(⟦2-char-id⟧.split(",")))),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(",$#0#$-#-$&#%2#%(#$$$$'%B$##%b$&)$$#$#%A&$&#)%,$%#$#%$&%###%:#$$$$##$%)$%%#)$1).)$$#)$))%$#)$%$$&)B%&#)#&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%$$'$&#$$%%$/)$))$))$))$))$))$))$))$))$))$))$))$))$))$))$))&)$#)$%%#$,#%2%%($$$*$$#%#$#)$1)$1)$1)$1)$1)$1)$))$))$))$))$))$)$#%%$$#$$'%$'%$'%$'%$'%$'%$'%$'$$'$$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%(-$#%#$#)$1)$)$$$%$'$-%##*%$$%$$'$$'$#%$%%$%$$'$B#&#)$%)$%)$%)$%)$%)$%)$%)B%*#)$%)$9)$)$$($($$$%)#$&$$$-&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&&($$#%%$$')$1)$)$$$%$')$%$.$)%$$R%)$))$))$))$))$))$))$))$))$))$))$))$))$))$))$))*,$$0'B#'$R$)$%'4%'$%'6%'#%5#%%$'+#$#%'$$#%#$#)$1)$)$$$%$')$%)$%)$%)$%)$%)&%$*'$)+#*$%*$%+#)$%%C%&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$')&)$$'$(#$$#%#$#)$1)$)$$$%$')(%$$'*#$%+/$%+-)6#)#%#+$H$$$#$#).&$#*$9*$9*$9*$9*$9*$9*$9*$9*$9*$9*$9*$9*$9*$9*$9*$9*,9+$+*$1*$1*$1*$1*$1*$1*$*+&F$)#*$%*$$*$$*&%+#*$$*$$*$$*$$*$$*$$*$$*$$*$$*$$*$$*$$*$$*$9*$E$)$)*$&*$&*$&*$&*$6*$%*$%*$%*$%*$%*$%*$%*$%*$%*$%*$%*$%*$%*$%*$%*$3*$'*$'*$'*$'*$'*$'*$'*$'*$'*$'*$'*$'*$'*$'*$'*$'*B'&+)C$'$$)$&)#$$'$$'*(%$$Q'+$:%%+*&+'$$#$$'*$&$$%+$**$=%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$)&$+$$K_%*$I$+#*$Q$*$Q$*$Q$*$Q$*$Q$*$Q$*$Q$*$Q$*$Q$*$Q$*$Q$*$F'*$1*$1*$1*$1*$1*$1*$1*$1*$1*$1**1+&:%#$.Q)%$+%<R1#,#,-(-,Y)(#,8##&#-*%##-*#,$#,$#,$#,$#,$#,$#,$#,B#,$2,,#,$',$#(&#(4#((#($&($%($%($%($%($%($%($%($%($%($*(#,@..D$#.'-%+'-$++%-+.#().#().#().#(%.#().#().#().#(%.#().#('.#().#().#().#().#(%.#(%.#(%.#().#(%.#(#.&#($#($#($#($#($%($#($#($#($#($#($#($#($#($#($#($#($#-%(#,#(B&,V%R)+.U'.K%((#-#.1-#.--#.#-#.Q$-#.G'-',$&,0*.#(1.#(#-,#(,#(,#(,#(,#(,#($8,$),&2-',#(#,-($%(.&(%-',#(#,-($%(.&(%-',#(#,-($%(.&(%-',#(#,-($%(L$&(#-%($%(8&(#-%($%(8&(#-%($%(8&(#-%($%(8&(+-", "nature|building|colours|worldTools|combat|utility|decoration|mobs|tools|materials|food", ⟦2-char-id⟧),
       ⟦2-char-id⟧ = ⟦2-char-id⟧("$b&#$R)#$)%$)%$)%$)%$1%$)%$)%$)%$)%$)%$)%$)%$)%$)%$_7%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$'%$a$#$T%%$)%$)%$)%$)%$1%$)%$)%$)%$)%$)%$)%$)%$)%$)%$>#B#'$V$&4%'$%'6%'$)#$b%#$%)$G$%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$'%$`'%$9%$9%$9%$9%$Q$%$9%$9%$9%$9%$9%$9%$9%$9%$9%$9%&U(&$&%$$%$$%$'%$$%$$%$$%$'%$$%$$%$$%$$%$$%$$%$$%$$%$9%$E$&D$[*$$$&$&&$P5%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%*CZ&)c'G;%&N$%<#%(G$&$%&&#&&Q)&$#&$#&$#&$#&$%&$#&$#&$#&$#&$#&$#&$#&$#&$#&$#&$#&&,%<#%*W))$-)BS(%B$%", "6|2|8|10|17|9", Number);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-      return null !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, (() => {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
-        return void 0 === ⟦2-char-id⟧ ? void 0 : (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧)
+      return null !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, (() => {
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
+        return void 0 === ⟦2-char-id⟧ ? void 0 : (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧)
       }))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-      return null !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, (() => {
+      return null !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, (() => {
         var ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧(⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? cJ : void 0
+        return null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.G)(⟦2-char-id⟧(⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? TB : void 0
       }))
     }
 
```

</details>

<details>
<summary>Hunk 7 · Change · +6 / -6</summary>

```diff
@@ -154,23 +154,23 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-      if (void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.startsWith(⟦2-char-id⟧.m)) return null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.slice(⟦2-char-id⟧.m.length);
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
-      return void 0 === ⟦2-char-id⟧ ? void 0 : `${ZJ}${YJ.n}${cJ}`
+      if (void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.startsWith(⟦2-char-id⟧.t)) return null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.slice(⟦2-char-id⟧.t.length);
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
+      return void 0 === ⟦2-char-id⟧ ? void 0 : `${dB}${oB.v}${TB}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧
     }
     let ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧() {
       if (null === ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = [],
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧.p(⟦2-char-id⟧);
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧.w(⟦2-char-id⟧);
         let ⟦2-char-id⟧ = 0;
-        for (; !⟦2-char-id⟧.done;) ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.next()), ⟦2-char-id⟧.push(⟦2-char-id⟧);
+        for (; !⟦2-char-id⟧.done;) ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.N)(⟦2-char-id⟧.next()), ⟦2-char-id⟧.push(⟦2-char-id⟧);
         ⟦2-char-id⟧ = Object.freeze(⟦2-char-id⟧)
       }
       return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 8 · Change · +22 / -22</summary>

```diff
@@ -182,41 +182,41 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return 0 !== ((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0) & ⟦2-char-id⟧)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.c.OnlyInSearch)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.c.OnlyInCategory)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.c.DevOnly)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return !⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.c.HiddenByDefault) && void 0
+      return 0 !== ((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : 0) & ⟦2-char-id⟧)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.e.OnlyInSearch)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.e.OnlyInCategory)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.e.DevOnly)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return !⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.e.HiddenByDefault) && void 0
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? UJ : 0;
-      return 0 !== (⟦2-char-id⟧ & ⟦2-char-id⟧.c.DisabledInPublicLobbies) && ⟦2-char-id⟧ || 0 !== (⟦2-char-id⟧ & ⟦2-char-id⟧.c.DisabledInProduction) && !0 || !⟦2-char-id⟧ || !⟦2-char-id⟧ && 0 !== (⟦2-char-id⟧ & ⟦2-char-id⟧.c.DevOnly)
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? yB : 0;
+      return 0 !== (⟦2-char-id⟧ & ⟦2-char-id⟧.e.DisabledInPublicLobbies) && ⟦2-char-id⟧ || 0 !== (⟦2-char-id⟧ & ⟦2-char-id⟧.e.DisabledInProduction) && !0 || !⟦2-char-id⟧ || !⟦2-char-id⟧ && 0 !== (⟦2-char-id⟧ & ⟦2-char-id⟧.e.DevOnly)
     }
     let ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧() {
       if (null === ⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧.split(⟦2-char-id⟧.n),
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧.split(⟦2-char-id⟧.v),
           ⟦2-char-id⟧ = new Map,
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧.p(⟦2-char-id⟧);
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧.w(⟦2-char-id⟧);
         let ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = 0;
         for (; !⟦2-char-id⟧.done;) {
-          ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.next());
+          ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.N)(⟦2-char-id⟧.next());
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.next();
           ⟦2-char-id⟧.set(⟦2-char-id⟧, Object.freeze(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧))), ⟦2-char-id⟧ += ⟦2-char-id⟧
         }
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/201.js</code> · modified · +6 / -6</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +2 / -2</summary>

```diff
@@ -1,9 +1,9 @@
 export const ⟦2-char-id⟧ = 201;
 export const ids = [201];
 export const modules = {
-  35789: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35732: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
+      c: () => ⟦2-char-id⟧,
       g: () => ⟦2-char-id⟧,
       h: () => ⟦2-char-id⟧,
       i: () => ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -26,7 +26,7 @@
       ⟦2-char-id⟧ = JSON.parse('{"src":["/sounds/generatedSprites/survivalFactory.fd0480008e.ogg","/sounds/generatedSprites/survivalFactory.fd0480008e.m4a","/sounds/generatedSprites/survivalFactory.fd0480008e.mp3","/sounds/generatedSprites/survivalFactory.fd0480008e.ac3"],"sprite":{"rocketEngineLoop":[0,13167.369614512472]}}'),
       ⟦2-char-id⟧ = JSON.parse('{"src":["/sounds/generatedSprites/rpg.ea7a80cc0e.ogg","/sounds/generatedSprites/rpg.ea7a80cc0e.m4a","/sounds/generatedSprites/rpg.ea7a80cc0e.mp3","/sounds/generatedSprites/rpg.ea7a80cc0e.ac3"],"sprite":{"rpgBeltCloth1":[0,722.5396825396826],"rpgBeltCloth2":[823.3333333333334,753.3106575963718],"rpgBeltHandle1":[1676.6666666666667,500],"rpgBeltHandle2":[2276.666666666667,500],"rpgBookClose":[2876.6666666666665,500],"rpgBookFlip1":[3476.6666666666665,768.6621315192745],"rpgBookFlip2":[4346.666666666667,500],"rpgBookFlip3":[4946.666666666666,500],"rpgBookOpen":[5546.666666666667,500],"rpgBookPlace1":[6146.666666666666,500],"rpgBookPlace2":[6746.666666666667,500],"rpgBookPlace3":[7346.666666666667,500],"rpgChop":[7946.666666666666,500],"rpgCloth1":[8546.666666666666,661.0430839002267],"rpgCloth2":[9310,500],"rpgCloth3":[9910,500],"rpgCloth4":[10510,500],"rpgCreak1":[11110,661.0430839002267],"rpgCreak2":[11873.333333333334,830.1587301587302],"rpgCreak3":[12806.666666666666,500],"rpgDoorClose1":[13406.666666666666,675.0566893424036],"rpgDoorClose2":[14183.333333333334,612.4943310657596],"rpgDoorClose3":[14896.666666666666,713.9455782312925],"rpgDoorClose4":[15713.333333333332,603.3786848072561],"rpgDoorOpen1":[16420,918.9795918367347],"rpgDoorOpen2":[17440,1413.3333333333333],"rpgDrawKnife1":[18953.333333333332,500],"rpgDrawKnife2":[19553.333333333336,500],"rpgDrawKnife3":[20153.333333333332,500],"rpgDropLeather":[20753.333333333332,500],"rpgFootstep00":[21353.333333333332,500],"rpgFootstep01":[21953.333333333332,500],"rpgFootstep02":[22553.333333333336,500],"rpgFootstep03":[23153.333333333332,500],"rpgFootstep04":[23753.333333333332,500],"rpgFootstep05":[24353.333333333332,500],"rpgFootstep06":[24953.333333333332,500],"rpgFootstep07":[25553.333333333336,500],"rpgFootstep08":[26153.333333333332,500],"rpgFootstep09":[26753.333333333332,500],"rpgHandleCoins1":[27353.333333333332,845.5328798185941],"rpgHandleCoins2":[28300,500],"rpgHandleSmallLeather1":[28900,500],"rpgHandleSmallLeather2":[29500,500],"rpgKnifeSlice1":[30100,599.546485260771],"rpgKnifeSlice2":[30800,568.798185941043],"rpgMetalClick":[31470,500],"rpgMetalLatch":[32070,500],"rpgMetalPot1":[32670,1460.4761904761906],"rpgMetalPot2":[34233.333333333336,937.7777777777778],"rpgMetalPot3":[35273.333333333336,907.0068027210884]}}'),
       ⟦2-char-id⟧ = JSON.parse('{"src":["/sounds/generatedSprites/ambient.061941de00.ogg","/sounds/generatedSprites/ambient.061941de00.m4a","/sounds/generatedSprites/ambient.061941de00.mp3","/sounds/generatedSprites/ambient.061941de00.ac3"],"sprite":{"lavaFlow":[0,34000]}}');
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1098);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1089);
     const ⟦2-char-id⟧ = {
         gunSemiAutomatic: ⟦2-char-id⟧,
         gunSubmachineGun: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -51,7 +51,7 @@
     for (const ⟦2-char-id⟧ in ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
       for (const ⟦2-char-id⟧ in ⟦2-char-id⟧.sprite) {
-        if (⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`duplicate sound name ${cJ} in ${VJ[cJ]} and ${wJ}`);
+        if (⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`duplicate sound name ${TB} in ${fB[TB]} and ${KB}`);
         ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧
       }
     }
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -70,7 +70,7 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
           for (const ⟦2-char-id⟧ in ⟦2-char-id⟧.sprite)
             if (⟦2-char-id⟧.startsWith(⟦2-char-id⟧)) {
-              if (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧) throw new Error(`Sound prefix ${JJ} is in multiple sprite sheets: ${ZJ} and ${FJ}`);
+              if (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧) throw new Error(`Sound prefix ${BB} is in multiple sprite sheets: ${dB} and ${VB}`);
               ⟦2-char-id⟧ = ⟦2-char-id⟧
             }
         }
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -80,7 +80,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-      if (void 0 === ⟦2-char-id⟧) throw new Error(`Invalid sound name ${JJ} (not in any sprite sheet)`);
+      if (void 0 === ⟦2-char-id⟧) throw new Error(`Invalid sound name ${BB} (not in any sprite sheet)`);
       return ⟦2-char-id⟧
     }
 
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/202.js</code> · modified · +172 / -172</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +6 / -6</summary>

```diff
@@ -1,18 +1,18 @@
 export const ⟦2-char-id⟧ = 202;
 export const ids = [202];
 export const modules = {
-  38585: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  38530: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      c: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = "The world isn't loaded, so no blocks can be seen.",
       ⟦2-char-id⟧ = "The world isn't loaded, so nothing in it can be seen."
   },
-  35822: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35772: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
     let ⟦2-char-id⟧ = () => null;
 
```

</details>

<details>
<summary>Hunk 2 · Change · +17 / -17</summary>

```diff
@@ -24,29 +24,29 @@
       return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
   },
-  39376: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39338: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      b: () => ⟦2-char-id⟧,
       e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
-      m: () => ⟦2-char-id⟧
+      g: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(17),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39385),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39360),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39394),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39368),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39399),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39410);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(24),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39341),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39322),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39346),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39330),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39348),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39372);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)();
-      return ⟦2-char-id⟧ ? null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧.api, ⟦2-char-id⟧[0], ⟦2-char-id⟧[1], ⟦2-char-id⟧[2])) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.persisted) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.shared : void 0
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `${JJ[0]},${JJ[1]},${JJ[2]}`
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)();
+      return ⟦2-char-id⟧ ? null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.api, ⟦2-char-id⟧[0], ⟦2-char-id⟧[1], ⟦2-char-id⟧[2])) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.persisted) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.shared : void 0
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return `${BB[0]},${BB[1]},${BB[2]}`
     }
     const ⟦2-char-id⟧ = new Map;
     let ⟦2-char-id⟧ = null,
```

</details>

<details>
<summary>Hunk 3 · Change · +4 / -4</summary>

```diff
@@ -63,15 +63,15 @@
       if ("Iron" === ⟦2-char-id⟧) {
         const {
           cachedPasskey: ⟦2-char-id⟧,
-          ...FJ
+          ...VB
         } = ⟦2-char-id⟧(⟦2-char-id⟧.pos);
         ⟦2-char-id⟧ = {
-          JX: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : [0, 0, 0, 0],
-          ...FJ
+          jl: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : [0, 0, 0, 0],
+          ...VB
         }
       }
       return {
-        ...JJ,
+        ...BB,
         type: ⟦2-char-id⟧,
         ironChest: ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -85,7 +85,7 @@
           let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧(⟦2-char-id⟧);
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
-          return ⟦2-char-id⟧ ? ⟦2-char-id⟧.lastOpened < (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.passkeyLastUpdated) && void 0 !== ⟦2-char-id⟧ ? cJ : 0) ? (⟦2-char-id⟧.delete(⟦2-char-id⟧), null) : [...UJ.JX] : null
+          return ⟦2-char-id⟧ ? ⟦2-char-id⟧.lastOpened < (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.passkeyLastUpdated) && void 0 !== ⟦2-char-id⟧ ? TB : 0) ? (⟦2-char-id⟧.delete(⟦2-char-id⟧), null) : [...yB.jl] : null
         }(⟦2-char-id⟧, ⟦2-char-id⟧);
       return void 0 === ⟦2-char-id⟧ ? {
         cachedPasskey: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 5 · Change · +16 / -16</summary>

```diff
@@ -93,44 +93,44 @@
         ownerDbId: ⟦2-char-id⟧,
         cachedPasskey: ⟦2-char-id⟧
       }
-    }(0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.e, (⟦2-char-id⟧ => {
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.e, ⟦2-char-id⟧);
-      if (!(0, ⟦2-char-id⟧.c)(⟦2-char-id⟧) || ⟦2-char-id⟧.ZZ) return;
-      if (⟦2-char-id⟧++, !⟦2-char-id⟧.tc || null === ⟦2-char-id⟧.JZ) return void(⟦2-char-id⟧ = null);
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.JZ);
+    }(0, ⟦2-char-id⟧.n)(⟦2-char-id⟧.d, (⟦2-char-id⟧ => {
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.d, ⟦2-char-id⟧);
+      if (!(0, ⟦2-char-id⟧.e)(⟦2-char-id⟧) || ⟦2-char-id⟧.Xd) return;
+      if (⟦2-char-id⟧++, !⟦2-char-id⟧.Pd || null === ⟦2-char-id⟧.ad) return void(⟦2-char-id⟧ = null);
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.ad);
       ⟦2-char-id⟧ = {
         key: ⟦2-char-id⟧,
-        type: ⟦2-char-id⟧.lc
-      }, null !== ⟦2-char-id⟧.cZ && ⟦2-char-id⟧.set(⟦2-char-id⟧, {
-        JX: [...cJ.cZ],
+        type: ⟦2-char-id⟧.Rd
+      }, null !== ⟦2-char-id⟧.Zd && ⟦2-char-id⟧.set(⟦2-char-id⟧, {
+        jl: [...TB.Zd],
         lastOpened: Date.now()
       })
-    })), (0, ⟦2-char-id⟧.e)((() => {
+    })), (0, ⟦2-char-id⟧.i)((() => {
       ⟦2-char-id⟧.clear(), ⟦2-char-id⟧ = null, ⟦2-char-id⟧++
-    })), (0, ⟦2-char-id⟧.i)((() => {
-      null !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = null, ⟦2-char-id⟧++, ⟦2-char-id⟧.i.Uf("chestToggleFromServer", !1, !0))
+    })), (0, ⟦2-char-id⟧.m)((() => {
+      null !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = null, ⟦2-char-id⟧++, ⟦2-char-id⟧.h.yH("chestToggleFromServer", !1, !0))
     }));
     const ⟦2-char-id⟧ = {
         boardEditRequested: {
-          watch: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.j)("EditBoard", (⟦2-char-id⟧ => {
+          watch: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.i)("EditBoard", (⟦2-char-id⟧ => {
             let {
               pos: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
             if (null === ⟦2-char-id⟧) return void ⟦2-char-id⟧(null);
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)(),
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.u)();
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(),
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)();
             ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.readBoardToEdit(⟦2-char-id⟧.api, ⟦2-char-id⟧.chunks, ⟦2-char-id⟧))
           }))
         },
         ironChestOpenRequested: {
-          watch: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.j)("OpenIronChest", (⟦2-char-id⟧ => {
+          watch: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.i)("OpenIronChest", (⟦2-char-id⟧ => {
             let {
               pos: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
             ⟦2-char-id⟧(function(⟦2-char-id⟧) {
               return {
                 pos: ⟦2-char-id⟧,
-                ...xJ(⟦2-char-id⟧)
+                ...EB(⟦2-char-id⟧)
               }
             }(⟦2-char-id⟧))
           }))
```

</details>

<details>
<summary>Hunk 6 · Change · +4 / -4</summary>

```diff
@@ -144,10 +144,10 @@
             text: ⟦2-char-id⟧,
             textSize: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.d.UpdateBoard, (0, ⟦2-char-id⟧.bb)({
-            Tj: ⟦2-char-id⟧,
-            Cj: ⟦2-char-id⟧,
-            uj: ⟦2-char-id⟧
+          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.c.UpdateBoard, (0, ⟦2-char-id⟧.U)({
+            gg: ⟦2-char-id⟧,
+            og: ⟦2-char-id⟧,
+            kg: ⟦2-char-id⟧
           }))
         },
         writeBook(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 7 · Change · +24 / -24</summary>

```diff
@@ -157,52 +157,52 @@
             title: ⟦2-char-id⟧,
             published: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.d.UpdateBook, (0, ⟦2-char-id⟧.eb)({
-            DY: ⟦2-char-id⟧,
-            sY: ⟦2-char-id⟧,
-            GY: ⟦2-char-id⟧
+          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.c.UpdateBook, (0, ⟦2-char-id⟧.V)({
+            hg: ⟦2-char-id⟧,
+            Cg: ⟦2-char-id⟧,
+            Gg: ⟦2-char-id⟧
           }))
         },
         writeNameTag(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.d.UpdateNameTag, ⟦2-char-id⟧)
+          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.c.UpdateNameTag, ⟦2-char-id⟧)
         },
         setCustomLobbyBlock(⟦2-char-id⟧) {
           let {
             pos: ⟦2-char-id⟧,
             blockName: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.u)(),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)();
-          ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.send(⟦2-char-id⟧.d.SetCustomLobbyBlock, (0, ⟦2-char-id⟧.M)({
-            EA: ⟦2-char-id⟧.blockIdOf(⟦2-char-id⟧),
-            QA: ⟦2-char-id⟧
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)(),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)();
+          ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.send(⟦2-char-id⟧.c.SetCustomLobbyBlock, (0, ⟦2-char-id⟧.K)({
+            rY: ⟦2-char-id⟧.blockIdOf(⟦2-char-id⟧),
+            KY: ⟦2-char-id⟧
           }))
         }
       }
   },
-  39426: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39385: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧,
+      c: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧,
       i: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39354),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4176),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39360);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39310),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4169),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39322);
 
     function ⟦2-char-id⟧() {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.api.localId;
-      return void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧.Tc ? null : String(⟦2-char-id⟧)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)();
+      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.api.localId;
+      return void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧.ad ? null : String(⟦2-char-id⟧)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)();
       if (null !== ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧);
       let ⟦2-char-id⟧ = null;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.s)((() => {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)();
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)((() => {
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)();
         null !== ⟦2-char-id⟧ && null === ⟦2-char-id⟧ && (⟦2-char-id⟧(), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧))
       }));
       return () => {
```

</details>

<details>
<summary>Hunk 8 · Change · +2 / -2</summary>

```diff
@@ -214,8 +214,8 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       return {
         current: () => {
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)();
-          return null === ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧)()
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)();
+          return null === ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧)()
         },
         watch: ⟦2-char-id⟧ => ⟦2-char-id⟧((⟦2-char-id⟧ => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 9 · Change · +6 / -6</summary>

```diff
@@ -228,17 +228,17 @@
       }
     }
   },
-  39423: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39378: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39360),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39426),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39431);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39322),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39385),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39390);
 
     function ⟦2-char-id⟧() {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.itemBridgeSources) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.c
+      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.itemBridgeSources) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.c
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 10 · Change · +2 / -2</summary>

```diff
@@ -290,11 +290,11 @@
       }
     }
   },
-  39431: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39390: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38585);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38530);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return {
```

</details>

<details>
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -449,8 +449,8 @@
           recordFlyingMiddleText: ⟦2-char-id⟧,
           focusCrafting: ⟦2-char-id⟧,
           craftRecipe: () => ({
-            jj: 0,
-            fA: null,
+            Uo: 0,
+            jg: null,
             amountAddedToSlot: 0
           }),
           salvageItem: () => !1,
```

</details>

<details>
<summary>Hunk 12 · Change · +2 / -2</summary>

```diff
@@ -508,8 +508,8 @@
             perks: [],
             options: []
           }),
-          worldCodeAiChunk: () => ⟦2-char-id⟧.b,
-          worldCodeAiGameState: () => ⟦2-char-id⟧.c
+          worldCodeAiChunk: () => ⟦2-char-id⟧.c,
+          worldCodeAiGameState: () => ⟦2-char-id⟧.g
         },
         lookups: {
           localPos: () => ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 13 · Change · +17 / -17</summary>

```diff
@@ -527,27 +527,27 @@
         }
       }
   },
-  39357: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39315: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧,
+      c: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧,
       k: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38186),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1122),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1725),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1739),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2778),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35822),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1213),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39360),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4217),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2146),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39368),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39376),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39423);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38169),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1105),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1708),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1719),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2760),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35772),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1209),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39322),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4209),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2101),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39330),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39338),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39378);
     let ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -564,13 +564,13 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
-      return void 0 !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧) === ⟦2-char-id⟧
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧);
+      return void 0 !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧) === ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tables;
+      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tables;
       if (void 0 === ⟦2-char-id⟧ || !⟦2-char-id⟧(⟦2-char-id⟧)) return;
       const ⟦2-char-id⟧ = {
           displayName: ⟦2-char-id⟧.getDisplayName(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 15 · Change · +8 / -8</summary>

```diff
@@ -583,27 +583,27 @@
       ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧.rootName = ⟦2-char-id⟧);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.getItemStat(⟦2-char-id⟧, "armourReduction");
       return void 0 !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && (⟦2-char-id⟧.armourReduction = ⟦2-char-id⟧), ⟦2-char-id⟧
-    }(0, ⟦2-char-id⟧.x)((⟦2-char-id⟧ => {
+    }(0, ⟦2-char-id⟧.w)((⟦2-char-id⟧ => {
       ⟦2-char-id⟧ = ⟦2-char-id⟧
     }));
-    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)("DisplayName", "Description");
+    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)("DisplayName", "Description");
 
     function ⟦2-char-id⟧() {
-      return Boolean(⟦2-char-id⟧.b.get("useInventory") && ⟦2-char-id⟧.b.get("useFullInventory"))
+      return Boolean(⟦2-char-id⟧.c.get("useInventory") && ⟦2-char-id⟧.c.get("useFullInventory"))
     }
     let ⟦2-char-id⟧ = null;
     const ⟦2-char-id⟧ = {
         inventory: function() {
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.e.states.inventory;
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.b.states.inventory;
           let ⟦2-char-id⟧ = null;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
             var ⟦2-char-id⟧;
-            return null === ⟦2-char-id⟧.chest ? JJ : ((null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.from) === ⟦2-char-id⟧ && ⟦2-char-id⟧.chestVersion === (0, ⟦2-char-id⟧.e)() || (⟦2-char-id⟧ = {
+            return null === ⟦2-char-id⟧.chest ? BB : ((null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.from) === ⟦2-char-id⟧ && ⟦2-char-id⟧.chestVersion === (0, ⟦2-char-id⟧.b)() || (⟦2-char-id⟧ = {
               from: ⟦2-char-id⟧,
-              chestVersion: (0, ⟦2-char-id⟧.e)(),
+              chestVersion: (0, ⟦2-char-id⟧.b)(),
               view: {
-                ...JJ,
-                chest: (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧.chest)
+                ...BB,
+                chest: (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.chest)
               }
             }), ⟦2-char-id⟧.view)
           };
```

</details>

<details>
<summary>Hunk 16 · Change · +5 / -5</summary>

```diff
@@ -614,18 +614,18 @@
             }))
           }
         }(),
-        crafting: ⟦2-char-id⟧.e.states.crafting,
+        crafting: ⟦2-char-id⟧.b.states.crafting,
         stationItems: {
           current() {
             var ⟦2-char-id⟧;
-            return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.namesVersion) !== (0, ⟦2-char-id⟧.h)() && (⟦2-char-id⟧ = {
-              namesVersion: (0, ⟦2-char-id⟧.h)(),
+            return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.namesVersion) !== (0, ⟦2-char-id⟧.d)() && (⟦2-char-id⟧ = {
+              namesVersion: (0, ⟦2-char-id⟧.d)(),
               items: {
                 enchantable: ⟦2-char-id⟧((⟦2-char-id⟧ => {
-                  const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
+                  const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧);
                   return void 0 !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.enchantmentPerksOf(⟦2-char-id⟧).length > 0 || void 0
                 })),
-                salvageable: ⟦2-char-id⟧((⟦2-char-id⟧ => !(!⟦2-char-id⟧(⟦2-char-id⟧) || null === (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧)) || void 0))
+                salvageable: ⟦2-char-id⟧((⟦2-char-id⟧ => !(!⟦2-char-id⟧(⟦2-char-id⟧) || null === (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)) || void 0))
               }
             }), ⟦2-char-id⟧.items
           },
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -635,8 +635,8 @@
           let ⟦2-char-id⟧ = null;
           const ⟦2-char-id⟧ = () => {
             var ⟦2-char-id⟧;
-            return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.namesVersion) !== (0, ⟦2-char-id⟧.h)() && (⟦2-char-id⟧ = {
-              namesVersion: (0, ⟦2-char-id⟧.h)(),
+            return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.namesVersion) !== (0, ⟦2-char-id⟧.d)() && (⟦2-char-id⟧ = {
+              namesVersion: (0, ⟦2-char-id⟧.d)(),
               infos: ⟦2-char-id⟧(⟦2-char-id⟧)
             }), ⟦2-char-id⟧.infos
           };
```

</details>

<details>
<summary>Hunk 18 · Change · +38 / -38</summary>

```diff
@@ -647,78 +647,78 @@
             }))
           }
         }(),
-        creativeVisibility: (0, ⟦2-char-id⟧.r)((function() {
+        creativeVisibility: (0, ⟦2-char-id⟧.n)((function() {
           const ⟦2-char-id⟧ = {};
-          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.creativeItemIds()) && void 0 !== ⟦2-char-id⟧ ? cJ : []) {
+          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.creativeItemIds()) && void 0 !== ⟦2-char-id⟧ ? TB : []) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
             if (void 0 === ⟦2-char-id⟧) continue;
-            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.b.get((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, "showInCreativeInven"))) && void 0 !== ⟦2-char-id⟧ ? XJ : null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.showInCreativeInvenOf(⟦2-char-id⟧);
+            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.c.get((0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, "showInCreativeInven"))) && void 0 !== ⟦2-char-id⟧ ? lB : null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.showInCreativeInvenOf(⟦2-char-id⟧);
             "boolean" === typeof ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧)
           }
           return {
-            publicLobby: (0, ⟦2-char-id⟧.N)((0, ⟦2-char-id⟧.e)().lobbyName),
+            publicLobby: (0, ⟦2-char-id⟧.O)((0, ⟦2-char-id⟧.e)().lobbyName),
             shownInGame: ⟦2-char-id⟧
           }
-        }), ["connectedGameChanged"], (0, ⟦2-char-id⟧.l)("ShowInCreativeInven")),
-        fullInventory: (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧, [], (0, ⟦2-char-id⟧.n)("useInventory", "useFullInventory"))
+        }), ["connectedGameChanged"], (0, ⟦2-char-id⟧.i)("ShowInCreativeInven")),
+        fullInventory: (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧, [], (0, ⟦2-char-id⟧.j)("useInventory", "useFullInventory"))
       },
       ⟦2-char-id⟧ = {
-        inventoryDropRequested: ⟦2-char-id⟧.e.events.inventoryDropRequested,
-        chestToggled: ⟦2-char-id⟧.e.events.chestToggled,
-        chestRefreshed: ⟦2-char-id⟧.e.events.chestRefreshed,
-        inventorySynced: ⟦2-char-id⟧.e.events.inventorySynced,
-        enchantingTableOpened: ⟦2-char-id⟧.e.events.enchantingTableOpened
+        inventoryDropRequested: ⟦2-char-id⟧.b.events.inventoryDropRequested,
+        chestToggled: ⟦2-char-id⟧.b.events.chestToggled,
+        chestRefreshed: ⟦2-char-id⟧.b.events.chestRefreshed,
+        inventorySynced: ⟦2-char-id⟧.b.events.inventorySynced,
+        enchantingTableOpened: ⟦2-char-id⟧.b.events.enchantingTableOpened
       },
       ⟦2-char-id⟧ = {
-        removeInventoryItem: ⟦2-char-id⟧.e.commands.removeInventoryItem,
-        swapInventorySlots: ⟦2-char-id⟧.e.commands.swapInventorySlots,
-        moveInventoryItem: ⟦2-char-id⟧.e.commands.moveInventoryItem,
-        quickMoveInventoryItem: ⟦2-char-id⟧.e.commands.quickMoveInventoryItem,
-        closeChest: ⟦2-char-id⟧.e.commands.closeChest,
+        removeInventoryItem: ⟦2-char-id⟧.b.commands.removeInventoryItem,
+        swapInventorySlots: ⟦2-char-id⟧.b.commands.swapInventorySlots,
+        moveInventoryItem: ⟦2-char-id⟧.b.commands.moveInventoryItem,
+        quickMoveInventoryItem: ⟦2-char-id⟧.b.commands.quickMoveInventoryItem,
+        closeChest: ⟦2-char-id⟧.b.commands.closeChest,
         setInventoryOpen(⟦2-char-id⟧) {
-          (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.D.InventoryOpen, ⟦2-char-id⟧ ? ⟦2-char-id⟧.D.InventoryOpen : 0)
-        },
-        focusCrafting: ⟦2-char-id⟧.e.commands.focusCrafting,
-        craftRecipe: ⟦2-char-id⟧.e.commands.craftRecipe,
-        salvageItem: ⟦2-char-id⟧.e.commands.salvageItem,
-        enchantItem: ⟦2-char-id⟧.e.commands.enchantItem,
+          (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.A.InventoryOpen, ⟦2-char-id⟧ ? ⟦2-char-id⟧.A.InventoryOpen : 0)
+        },
+        focusCrafting: ⟦2-char-id⟧.b.commands.focusCrafting,
+        craftRecipe: ⟦2-char-id⟧.b.commands.craftRecipe,
+        salvageItem: ⟦2-char-id⟧.b.commands.salvageItem,
+        enchantItem: ⟦2-char-id⟧.b.commands.enchantItem,
         changeIronChestPasskey(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
           let {
             pos: ⟦2-char-id⟧,
-            JX: ⟦2-char-id⟧
+            jl: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.d.ChangeIronChestPasskey, (0, ⟦2-char-id⟧.j)({
-            JZ: ⟦2-char-id⟧,
-            JX: ⟦2-char-id⟧
+          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.c.ChangeIronChestPasskey, (0, ⟦2-char-id⟧.i)({
+            ad: ⟦2-char-id⟧,
+            jl: ⟦2-char-id⟧
           }))
         },
         openIronChest(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
           let {
             pos: ⟦2-char-id⟧,
-            JX: ⟦2-char-id⟧
+            jl: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.d.OpenIronChest, (0, ⟦2-char-id⟧.C)({
-            JZ: ⟦2-char-id⟧,
-            JX: ⟦2-char-id⟧
+          null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)()) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.send(⟦2-char-id⟧.c.OpenIronChest, (0, ⟦2-char-id⟧.D)({
+            ad: ⟦2-char-id⟧,
+            jl: ⟦2-char-id⟧
           }))
         }
       },
       ⟦2-char-id⟧ = {
-        enchantingOffer: ⟦2-char-id⟧.e.queries.enchantingOffer
+        enchantingOffer: ⟦2-char-id⟧.b.queries.enchantingOffer
       }
   },
-  39417: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39376: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
+      c: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧,
       i: () => ⟦2-char-id⟧,
+      j: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧,
-      p: () => ⟦2-char-id⟧,
-      s: () => ⟦2-char-id⟧,
-      u: () => ⟦2-char-id⟧,
-      v: () => ⟦2-char-id⟧
+      p: () => ⟦2-char-id⟧
     });
     class ⟦2-char-id⟧ extends Error {
       constructor() {
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -737,7 +737,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ instanceof WebAssembly.RuntimeError || ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.stack) && void 0 !== ⟦2-char-id⟧ ? cJ : "")
+      return ⟦2-char-id⟧ instanceof WebAssembly.RuntimeError || ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.stack) && void 0 !== ⟦2-char-id⟧ ? TB : "")
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -746,7 +746,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      if (⟦2-char-id⟧ % ⟦2-char-id⟧ !== 0 || ⟦2-char-id⟧ + ⟦2-char-id⟧ > ⟦2-char-id⟧.byteLength) throw new ⟦2-char-id⟧(`${eJ}: ${ZJ} bytes at ${cJ}, ${UJ}-aligned, outside ${JJ.byteLength} bytes of memory`)
+      if (⟦2-char-id⟧ % ⟦2-char-id⟧ !== 0 || ⟦2-char-id⟧ + ⟦2-char-id⟧ > ⟦2-char-id⟧.byteLength) throw new ⟦2-char-id⟧(`${pB}: ${dB} bytes at ${TB}, ${yB}-aligned, outside ${BB.byteLength} bytes of memory`)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 21 · Change · +10 / -10</summary>

```diff
@@ -757,21 +757,21 @@
       return 0 === ⟦2-char-id⟧ ? null : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), new DataView(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
     }
   },
-  39360: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39322: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
-      l: () => ⟦2-char-id⟧,
-      o: () => ⟦2-char-id⟧,
-      s: () => ⟦2-char-id⟧,
-      u: () => ⟦2-char-id⟧,
-      x: () => ⟦2-char-id⟧,
+      c: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧,
+      k: () => ⟦2-char-id⟧,
+      m: () => ⟦2-char-id⟧,
+      q: () => ⟦2-char-id⟧,
+      t: () => ⟦2-char-id⟧,
+      w: () => ⟦2-char-id⟧,
       y: () => ⟦2-char-id⟧
     });
     class ⟦2-char-id⟧ extends Error {
       constructor(⟦2-char-id⟧) {
-        super(`the join's code did not load: ${JJ instanceof Error?JJ.message:String(JJ)}`, {
+        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
           cause: ⟦2-char-id⟧
         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request
       }
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -799,7 +799,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ ??= Promise.all([⟦2-char-id⟧.e(64), ⟦2-char-id⟧.e(88), ⟦2-char-id⟧.e(199), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(200), ⟦2-char-id⟧.e(201), ⟦2-char-id⟧.e(86), ⟦2-char-id⟧.e(228), ⟦2-char-id⟧.e(251), ⟦2-char-id⟧.e(177), ⟦2-char-id⟧.e(186), ⟦2-char-id⟧.e(129), ⟦2-char-id⟧.e(79), ⟦2-char-id⟧.e(107), ⟦2-char-id⟧.e(226), ⟦2-char-id⟧.e(49)]).then((() => ⟦2-char-id⟧(41236))).then((⟦2-char-id⟧ => {
+      return ⟦2-char-id⟧ ??= Promise.all([⟦2-char-id⟧.e(64), ⟦2-char-id⟧.e(88), ⟦2-char-id⟧.e(199), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(200), ⟦2-char-id⟧.e(201), ⟦2-char-id⟧.e(86), ⟦2-char-id⟧.e(228), ⟦2-char-id⟧.e(251), ⟦2-char-id⟧.e(177), ⟦2-char-id⟧.e(186), ⟦2-char-id⟧.e(129), ⟦2-char-id⟧.e(79), ⟦2-char-id⟧.e(107), ⟦2-char-id⟧.e(226), ⟦2-char-id⟧.e(49)]).then((() => ⟦2-char-id⟧(41265))).then((⟦2-char-id⟧ => {
         ⟦2-char-id⟧.loadAudio(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧;
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         return ⟦2-char-id⟧
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/203.js</code> · modified · +105 / -105</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +6 / -6</summary>

```diff
@@ -1,19 +1,19 @@
 export const ⟦2-char-id⟧ = 203;
 export const ids = [203];
 export const modules = {
-  40259: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40263: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2383);
+      c: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2368);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
         {
           width: ⟦2-char-id⟧,
           height: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧);
+        } = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧);
       (0, ⟦2-char-id⟧.useEffect)((() => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.current);
         return ⟦2-char-id⟧.current = ⟦2-char-id⟧, () => {
```

</details>

<details>
<summary>Hunk 2 · Change · +10 / -10</summary>

```diff
@@ -26,36 +26,36 @@
       }), [⟦2-char-id⟧])
     }
   },
-  40265: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40266: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36562),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37623);
+      f: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36496),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37598);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
       return [0, .5, 1].map((⟦2-char-id⟧ => ({
         timeFraction: ⟦2-char-id⟧,
         rotation: {
-          Hc: "catmull-rom-spline",
-          point: [⟦2-char-id⟧, FJ, ⟦2-char-id⟧ + (.5 === ⟦2-char-id⟧ ? cJ : 0)]
+          Xy: "catmull-rom-spline",
+          point: [⟦2-char-id⟧, VB, ⟦2-char-id⟧ + (.5 === ⟦2-char-id⟧ ? TB : 0)]
         }
       })))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       return {
-        Ic: 3200,
+        Sy: 3200,
         loop: !0,
-        bc: {
+        Qy: {
           Root: {
             timeline: [0, .5, 1].map((⟦2-char-id⟧ => ({
               timeFraction: ⟦2-char-id⟧,
               position: {
-                Hc: "catmull-rom-spline",
+                Xy: "catmull-rom-spline",
                 point: [0, .5 === ⟦2-char-id⟧ ? .18 : 0, 0]
               }
             })))
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -64,7 +64,7 @@
             timeline: [0, .25, .75, 1].map((⟦2-char-id⟧ => ({
               timeFraction: ⟦2-char-id⟧,
               rotation: {
-                Hc: "catmull-rom-spline",
+                Xy: "catmull-rom-spline",
                 point: [0, .25 === ⟦2-char-id⟧ ? .12 : .75 === ⟦2-char-id⟧ ? -.12 : 0, 0]
               }
             })))
```

</details>

<details>
<summary>Hunk 4 · Change · +4 / -4</summary>

```diff
@@ -79,13 +79,13 @@
       }
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧([0, 0, 0], [0, 0, 0], .07),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧), "mobIdle"),
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧), "mobIdle"),
       ⟦2-char-id⟧ = ⟦2-char-id⟧([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
       ⟦2-char-id⟧ = ⟦2-char-id⟧([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧), "gunReady"),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧), "gunAimed")
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧), "gunReady"),
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧), "gunAimed")
   },
-  37623: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37598: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
       c: () => ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 5 · Change · +4 / -4</summary>

```diff
@@ -98,13 +98,13 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : null
     }
   },
-  35868: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35819: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = {
         yaw: .61 * Math.PI,
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -115,7 +115,7 @@
       ⟦2-char-id⟧ = {
         player: ⟦2-char-id⟧,
         store: {
-          ...FJ,
+          ...VB,
           radius: 33,
           target: [0, 3.9, 0]
         }
```

</details>

<details>
<summary>Hunk 7 · Change · +4 / -4</summary>

```diff
@@ -220,11 +220,11 @@
       }
     }
   },
-  35860: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35817: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧.g
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35868);
+      e: () => ⟦2-char-id⟧.e
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35819);
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         this.load = ⟦2-char-id⟧, this.loaded = null, this.loading = null
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -237,7 +237,7 @@
     }
     class ⟦2-char-id⟧ {
       constructor() {
-        this.mobScene = new ⟦2-char-id⟧((() => Promise.all([⟦2-char-id⟧.e(215), ⟦2-char-id⟧.e(214), ⟦2-char-id⟧.e(234), ⟦2-char-id⟧.e(235), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(232), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(242), ⟦2-char-id⟧.e(236), ⟦2-char-id⟧.e(241), ⟦2-char-id⟧.e(239), ⟦2-char-id⟧.e(231), ⟦2-char-id⟧.e(206), ⟦2-char-id⟧.e(271), ⟦2-char-id⟧.e(211), ⟦2-char-id⟧.e(225), ⟦2-char-id⟧.e(237), ⟦2-char-id⟧.e(240), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(207), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(205), ⟦2-char-id⟧.e(106), ⟦2-char-id⟧.e(68), ⟦2-char-id⟧.e(272), ⟦2-char-id⟧.e(146)]).then((() => ⟦2-char-id⟧(39946))))), this.characterScene = new ⟦2-char-id⟧((() => Promise.all([⟦2-char-id⟧.e(215), ⟦2-char-id⟧.e(214), ⟦2-char-id⟧.e(234), ⟦2-char-id⟧.e(235), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(232), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(242), ⟦2-char-id⟧.e(236), ⟦2-char-id⟧.e(241), ⟦2-char-id⟧.e(239), ⟦2-char-id⟧.e(231), ⟦2-char-id⟧.e(206), ⟦2-char-id⟧.e(271), ⟦2-char-id⟧.e(211), ⟦2-char-id⟧.e(225), ⟦2-char-id⟧.e(237), ⟦2-char-id⟧.e(240), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(207), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(205), ⟦2-char-id⟧.e(106), ⟦2-char-id⟧.e(68), ⟦2-char-id⟧.e(272), ⟦2-char-id⟧.e(145)]).then((() => ⟦2-char-id⟧(40040)))))
+        this.mobScene = new ⟦2-char-id⟧((() => Promise.all([⟦2-char-id⟧.e(215), ⟦2-char-id⟧.e(214), ⟦2-char-id⟧.e(234), ⟦2-char-id⟧.e(235), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(232), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(242), ⟦2-char-id⟧.e(236), ⟦2-char-id⟧.e(241), ⟦2-char-id⟧.e(239), ⟦2-char-id⟧.e(231), ⟦2-char-id⟧.e(206), ⟦2-char-id⟧.e(271), ⟦2-char-id⟧.e(211), ⟦2-char-id⟧.e(225), ⟦2-char-id⟧.e(237), ⟦2-char-id⟧.e(240), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(207), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(205), ⟦2-char-id⟧.e(106), ⟦2-char-id⟧.e(68), ⟦2-char-id⟧.e(272), ⟦2-char-id⟧.e(146)]).then((() => ⟦2-char-id⟧(39925))))), this.characterScene = new ⟦2-char-id⟧((() => Promise.all([⟦2-char-id⟧.e(215), ⟦2-char-id⟧.e(214), ⟦2-char-id⟧.e(234), ⟦2-char-id⟧.e(235), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(232), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(242), ⟦2-char-id⟧.e(236), ⟦2-char-id⟧.e(241), ⟦2-char-id⟧.e(239), ⟦2-char-id⟧.e(231), ⟦2-char-id⟧.e(206), ⟦2-char-id⟧.e(271), ⟦2-char-id⟧.e(211), ⟦2-char-id⟧.e(225), ⟦2-char-id⟧.e(237), ⟦2-char-id⟧.e(240), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(207), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(205), ⟦2-char-id⟧.e(106), ⟦2-char-id⟧.e(68), ⟦2-char-id⟧.e(272), ⟦2-char-id⟧.e(145)]).then((() => ⟦2-char-id⟧(40024)))))
       }
       openMob(⟦2-char-id⟧) {
         return this.mobScene.run((⟦2-char-id⟧ => ⟦2-char-id⟧.openMobPreview(⟦2-char-id⟧)))
```

</details>

<details>
<summary>Hunk 9 · Change · +11 / -11</summary>

```diff
@@ -252,22 +252,22 @@
         return this.characterScene.run((⟦2-char-id⟧ => ⟦2-char-id⟧.openCharacterPreview(⟦2-char-id⟧, ⟦2-char-id⟧)))
       }
     }
-    ⟦2-char-id⟧.g.setDefaultHost((() => new ⟦2-char-id⟧))
+    ⟦2-char-id⟧.e.setDefaultHost((() => new ⟦2-char-id⟧))
   },
-  40464: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40454: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       FrontlineMvpLineup: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35860),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40265),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40259),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.d.openMobLineup(⟦2-char-id⟧)
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35817),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40266),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40263),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return ⟦2-char-id⟧.e.openMobLineup(⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -284,7 +284,7 @@
           return {
             cosmetics: ⟦2-char-id⟧,
             size: ⟦2-char-id⟧,
-            cV: ⟦2-char-id⟧.name,
+            mN: ⟦2-char-id⟧.name,
             animation: ⟦2-char-id⟧.aimed ? ⟦2-char-id⟧.c : ⟦2-char-id⟧.d
           }
         }))), [⟦2-char-id⟧]),
```

</details>

<details>
<summary>Hunk 11 · Change · +17 / -17</summary>

```diff
@@ -309,41 +309,41 @@
           figures: ⟦2-char-id⟧,
           shown: ⟦2-char-id⟧
         })), [⟦2-char-id⟧, ⟦2-char-id⟧]);
-      return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)("div", {
+      return (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)("div", {
         className: ⟦2-char-id⟧()("MobPreview", ⟦2-char-id⟧),
         ref: ⟦2-char-id⟧
       })
     }))
   },
-  36562: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36496: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       d: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36555),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(235),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1671);
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      if ("Ic" in ⟦2-char-id⟧) return ⟦2-char-id⟧.createAnimationScript(⟦2-char-id⟧);
+      h: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36491),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(279),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1652);
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      if ("Sy" in ⟦2-char-id⟧) return ⟦2-char-id⟧.createAnimationScript(⟦2-char-id⟧);
       return new ⟦2-char-id⟧(⟦2-char-id⟧).createAnimationScript()
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.Ic <= 0 ? 1 : ⟦2-char-id⟧ + ⟦2-char-id⟧ * Math.max(0, ⟦2-char-id⟧) / ⟦2-char-id⟧.Ic;
-      return ⟦2-char-id⟧.Mc === ⟦2-char-id⟧.n.LoopOnLastFrame ? ⟦2-char-id⟧ % 1 : ⟦2-char-id⟧.Mc === ⟦2-char-id⟧.n.NoLoop && ⟦2-char-id⟧ >= 1 ? null : Math.min(1, ⟦2-char-id⟧)
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.Sy <= 0 ? 1 : ⟦2-char-id⟧ + ⟦2-char-id⟧ * Math.max(0, ⟦2-char-id⟧) / ⟦2-char-id⟧.Sy;
+      return ⟦2-char-id⟧.Py === ⟦2-char-id⟧.n.LoopOnLastFrame ? ⟦2-char-id⟧ % 1 : ⟦2-char-id⟧.Py === ⟦2-char-id⟧.n.NoLoop && ⟦2-char-id⟧ >= 1 ? null : Math.min(1, ⟦2-char-id⟧)
     }
     class ⟦2-char-id⟧ {
       createAnimationScript(⟦2-char-id⟧) {
         const {
-          Ic: ⟦2-char-id⟧,
+          Sy: ⟦2-char-id⟧,
           loop: ⟦2-char-id⟧,
-          bc: ⟦2-char-id⟧
+          Qy: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         return {
-          Ic: Math.round(⟦2-char-id⟧),
-          Mc: this.createLoopMode(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧),
-          bc: this.createNodeSkeletonAnimationScript(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : null)
+          Sy: Math.round(⟦2-char-id⟧),
+          Py: this.createLoopMode(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧),
+          Qy: this.createNodeSkeletonAnimationScript(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : null)
         }
       }
       createLoopMode(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -355,7 +355,7 @@
           case "hold-on-last-frame":
             return ⟦2-char-id⟧.n.HoldOnLastFrame
         }
-        throw new Error(`Invalid loop mode schema: ${JJ}`)
+        throw new Error(`Invalid loop mode schema: ${BB}`)
       }
       createNodeSkeletonAnimationScript(⟦2-char-id⟧) {
         if (null === ⟦2-char-id⟧) return null;
```

</details>

<details>
<summary>Hunk 13 · Change · +5 / -5</summary>

```diff
@@ -388,12 +388,12 @@
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧,
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) && void 0 !== ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧,
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 2]) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧;
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧,
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) && void 0 !== ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧,
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 2]) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧;
           ⟦2-char-id⟧.push({
-            ...JJ,
-            ...ZJ(⟦2-char-id⟧.post, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.post, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.pre, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.pre, ⟦2-char-id⟧.timeFraction)
+            ...BB,
+            ...dB(⟦2-char-id⟧.post, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.post, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.pre, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.pre, ⟦2-char-id⟧.timeFraction)
           })
         }
         return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -401,14 +401,14 @@
       createAnimationFrameWithoutPrecomputes(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = null;
         var ⟦2-char-id⟧;
-        if ("object" === typeof ⟦2-char-id⟧ && "point" in ⟦2-char-id⟧) ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.Hc) && void 0 !== ⟦2-char-id⟧ ? eJ : null, ⟦2-char-id⟧ = ⟦2-char-id⟧.point, ⟦2-char-id⟧ = ⟦2-char-id⟧.point;
+        if ("object" === typeof ⟦2-char-id⟧ && "point" in ⟦2-char-id⟧) ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.Xy) && void 0 !== ⟦2-char-id⟧ ? pB : null, ⟦2-char-id⟧ = ⟦2-char-id⟧.point, ⟦2-char-id⟧ = ⟦2-char-id⟧.point;
         else if ("object" === typeof ⟦2-char-id⟧ && "pre" in ⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.Hc) && void 0 !== ⟦2-char-id⟧ ? XJ : null, ⟦2-char-id⟧ = ⟦2-char-id⟧.pre, ⟦2-char-id⟧ = ⟦2-char-id⟧.post
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.Xy) && void 0 !== ⟦2-char-id⟧ ? lB : null, ⟦2-char-id⟧ = ⟦2-char-id⟧.pre, ⟦2-char-id⟧ = ⟦2-char-id⟧.post
         } else ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧;
         return {
           timeFraction: ⟦2-char-id⟧,
-          Hc: this.createLerpMode(⟦2-char-id⟧),
+          Xy: this.createLerpMode(⟦2-char-id⟧),
           pre: ⟦2-char-id⟧,
           post: ⟦2-char-id⟧
         }
```

</details>

<details>
<summary>Hunk 15 · Change · +3 / -3</summary>

```diff
@@ -432,9 +432,9 @@
           bones: ⟦2-char-id⟧
         } = this.animationSchema;
         return {
-          Ic: Math.round(1⟦2-char-id⟧ * ⟦2-char-id⟧),
-          Mc: this.createLoopMode(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧),
-          bc: this.createNodeSkeletonAnimationScript(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : null)
+          Sy: Math.round(1⟦2-char-id⟧ * ⟦2-char-id⟧),
+          Py: this.createLoopMode(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧),
+          Qy: this.createNodeSkeletonAnimationScript(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : null)
         }
       }
       createLoopMode(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -446,7 +446,7 @@
           case "hold_on_last_frame":
             return ⟦2-char-id⟧.n.HoldOnLastFrame
         }
-        throw new Error(`Invalid Blockbench loop mode schema: ${JJ}`)
+        throw new Error(`Invalid Blockbench loop mode schema: ${BB}`)
       }
       createNodeSkeletonAnimationScript(⟦2-char-id⟧) {
         if (null === ⟦2-char-id⟧) return null;
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -463,8 +463,8 @@
           position: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         return {
-          rotation: this.createAnimationTimeline(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : null, fJ, DJ, !0),
-          position: this.createAnimationTimeline(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : null, rJ, nJ, !1)
+          rotation: this.createAnimationTimeline(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : null, HB, LB, !0),
+          position: this.createAnimationTimeline(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : null, vB, DB, !1)
         }
       }
       createAnimationTimeline(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -487,7 +487,7 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.post),
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.pre);
             ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) < ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = {
-              ...FJ,
+              ...VB,
               pre: ⟦2-char-id⟧,
               post: ⟦2-char-id⟧
             })
```

</details>

<details>
<summary>Hunk 19 · Change · +5 / -5</summary>

```diff
@@ -497,12 +497,12 @@
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && void 0 !== ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧,
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧,
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 2]) && void 0 !== ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧;
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && void 0 !== ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧,
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧,
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 2]) && void 0 !== ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧;
           ⟦2-char-id⟧.push({
-            ...JJ,
-            ...ZJ(⟦2-char-id⟧.post, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.post, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.pre, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.pre, ⟦2-char-id⟧.timeFraction)
+            ...BB,
+            ...dB(⟦2-char-id⟧.post, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.post, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.pre, ⟦2-char-id⟧.timeFraction, ⟦2-char-id⟧.pre, ⟦2-char-id⟧.timeFraction)
           })
         }
         return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 20 · Change · +2 / -2</summary>

```diff
@@ -511,14 +511,14 @@
         let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = null;
         if ("object" === typeof ⟦2-char-id⟧ && "post" in ⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lerp_mode) && void 0 !== ⟦2-char-id⟧ ? XJ : null, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.post, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.pre ? ⟦2-char-id⟧(⟦2-char-id⟧.pre, ⟦2-char-id⟧) : ⟦2-char-id⟧
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lerp_mode) && void 0 !== ⟦2-char-id⟧ ? lB : null, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.post, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.pre ? ⟦2-char-id⟧(⟦2-char-id⟧.pre, ⟦2-char-id⟧) : ⟦2-char-id⟧
         } else {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
           ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
         return {
           timeFraction: ⟦2-char-id⟧,
-          Hc: this.createLerpMode(⟦2-char-id⟧),
+          Xy: this.createLerpMode(⟦2-char-id⟧),
           pre: ⟦2-char-id⟧,
           post: ⟦2-char-id⟧
         }
```

</details>

<details>
<summary>Hunk 21 · Change · +5 / -5</summary>

```diff
@@ -543,16 +543,16 @@
         ⟦2-char-id⟧ = [null, null, null];
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧, ⟦2-char-id⟧);
       return {
-        Pc: ⟦2-char-id⟧,
-        kc: ⟦2-char-id⟧
+        Wy: ⟦2-char-id⟧,
+        hy: ⟦2-char-id⟧
       }
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       return {
-        zc: ⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧,
-        Nc: ⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧,
-        delta: ⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧)
+        Gy: ⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧,
+        qy: ⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧,
+        delta: ⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
     }
 
```

</details>

<details>
<summary>Hunk 22 · Change · +10 / -10</summary>

```diff
@@ -562,23 +562,23 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
         ⟦2-char-id⟧ = [null, null, null];
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = {
-        zc: (⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧]) / ⟦2-char-id⟧,
-        Nc: (⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧]) / ⟦2-char-id⟧,
+        Gy: (⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧]) / ⟦2-char-id⟧,
+        qy: (⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧]) / ⟦2-char-id⟧,
         delta: ⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧]
       };
       return {
-        Pc: ⟦2-char-id⟧,
-        kc: ⟦2-char-id⟧
+        Wy: ⟦2-char-id⟧,
+        hy: ⟦2-char-id⟧
       }
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return null === ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧(⟦2-char-id⟧)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧ = -(0, ⟦2-char-id⟧.k)(⟦2-char-id⟧), ⟦2-char-id⟧ = -(0, ⟦2-char-id⟧.k)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.c.quaternionFromEulerZYX(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-      return ⟦2-char-id⟧.c.eulerYXZFromQuaternion(⟦2-char-id⟧)
+      return null === ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧(⟦2-char-id⟧)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧ = -(0, ⟦2-char-id⟧.j)(⟦2-char-id⟧), ⟦2-char-id⟧ = -(0, ⟦2-char-id⟧.j)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.e.quaternionFromEulerZYX(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+      return ⟦2-char-id⟧.e.eulerYXZFromQuaternion(⟦2-char-id⟧)
     }
     ⟦2-char-id⟧.LERP_MODE_SCHEMA_MAPPING = {
       linear: ⟦2-char-id⟧.j.Linear,
```

</details>

<details>
<summary>Hunk 23 · Change · +7 / -7</summary>

```diff
@@ -592,19 +592,19 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-      return [⟦2-char-id⟧ >= 0 ? Math.PI - cJ : -Math.PI - ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧ + Math.PI), ⟦2-char-id⟧(⟦2-char-id⟧ + Math.PI)]
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.c.mod(⟦2-char-id⟧ + Math.PI, 2 * Math.PI) - Math.PI
+      return [⟦2-char-id⟧ >= 0 ? Math.PI - TB : -Math.PI - ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧ + Math.PI), ⟦2-char-id⟧(⟦2-char-id⟧ + Math.PI)]
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return ⟦2-char-id⟧.e.mod(⟦2-char-id⟧ + Math.PI, 2 * Math.PI) - Math.PI
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return Math.abs(⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧[0], ⟦2-char-id⟧[0])) + Math.abs(⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧[1], ⟦2-char-id⟧[1])) + Math.abs(⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧[2], ⟦2-char-id⟧[2]))
+      return Math.abs(⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧[0], ⟦2-char-id⟧[0])) + Math.abs(⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧[1], ⟦2-char-id⟧[1])) + Math.abs(⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧[2], ⟦2-char-id⟧[2]))
     }
     const ⟦2-char-id⟧ = new ⟦2-char-id⟧
   },
-  36555: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36491: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       d: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/204.js</code> · modified · +44 / -44</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +9 / -9</summary>

```diff
@@ -1,26 +1,26 @@
 export const ⟦2-char-id⟧ = 204;
 export const ids = [204];
 export const modules = {
-  40254: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40261: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       MobPreview: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40259),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35860),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40265),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40263),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35817),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40266),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.d.openMob(⟦2-char-id⟧)
+      return ⟦2-char-id⟧.e.openMob(⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
       let {
         mobType: ⟦2-char-id⟧,
         variation: ⟦2-char-id⟧ = null,
-        animation: ⟦2-char-id⟧ = ⟦2-char-id⟧.g,
+        animation: ⟦2-char-id⟧ = ⟦2-char-id⟧.f,
         className: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
```

</details>

<details>
<summary>Hunk 2 · Change · +8 / -8</summary>

```diff
@@ -29,25 +29,25 @@
           variation: ⟦2-char-id⟧,
           animation: ⟦2-char-id⟧
         })), [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]);
-      return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)("div", {
+      return (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)("div", {
         className: ⟦2-char-id⟧()("MobPreview", ⟦2-char-id⟧),
         ref: ⟦2-char-id⟧
       })
     }))
   },
-  40259: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2383);
+  40263: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2368);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
         {
           width: ⟦2-char-id⟧,
           height: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧);
+        } = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧);
       (0, ⟦2-char-id⟧.useEffect)((() => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.current);
         return ⟦2-char-id⟧.current = ⟦2-char-id⟧, () => {
```

</details>

<details>
<summary>Hunk 3 · Change · +10 / -10</summary>

```diff
@@ -60,36 +60,36 @@
       }), [⟦2-char-id⟧])
     }
   },
-  40265: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40266: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36562),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37623);
+      f: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36496),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37598);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
       return [0, .5, 1].map((⟦2-char-id⟧ => ({
         timeFraction: ⟦2-char-id⟧,
         rotation: {
-          Hc: "catmull-rom-spline",
-          point: [⟦2-char-id⟧, FJ, ⟦2-char-id⟧ + (.5 === ⟦2-char-id⟧ ? cJ : 0)]
+          Xy: "catmull-rom-spline",
+          point: [⟦2-char-id⟧, VB, ⟦2-char-id⟧ + (.5 === ⟦2-char-id⟧ ? TB : 0)]
         }
       })))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       return {
-        Ic: 3200,
+        Sy: 3200,
         loop: !0,
-        bc: {
+        Qy: {
           Root: {
             timeline: [0, .5, 1].map((⟦2-char-id⟧ => ({
               timeFraction: ⟦2-char-id⟧,
               position: {
-                Hc: "catmull-rom-spline",
+                Xy: "catmull-rom-spline",
                 point: [0, .5 === ⟦2-char-id⟧ ? .18 : 0, 0]
               }
             })))
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -98,7 +98,7 @@
             timeline: [0, .25, .75, 1].map((⟦2-char-id⟧ => ({
               timeFraction: ⟦2-char-id⟧,
               rotation: {
-                Hc: "catmull-rom-spline",
+                Xy: "catmull-rom-spline",
                 point: [0, .25 === ⟦2-char-id⟧ ? .12 : .75 === ⟦2-char-id⟧ ? -.12 : 0, 0]
               }
             })))
```

</details>

<details>
<summary>Hunk 5 · Change · +8 / -8</summary>

```diff
@@ -113,16 +113,16 @@
       }
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧([0, 0, 0], [0, 0, 0], .07),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧), "mobIdle"),
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧), "mobIdle"),
       ⟦2-char-id⟧ = ⟦2-char-id⟧([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
       ⟦2-char-id⟧ = ⟦2-char-id⟧([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧), "gunReady"),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧), "gunAimed")
-  },
-  35868: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧), "gunReady"),
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧), "gunAimed")
+  },
+  35819: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      d: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = {
         yaw: .61 * Math.PI,
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -133,7 +133,7 @@
       ⟦2-char-id⟧ = {
         player: ⟦2-char-id⟧,
         store: {
-          ...FJ,
+          ...VB,
           radius: 33,
           target: [0, 3.9, 0]
         }
```

</details>

<details>
<summary>Hunk 7 · Change · +5 / -5</summary>

```diff
@@ -238,11 +238,11 @@
       }
     }
   },
-  35860: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧.g
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35868);
+  35817: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      e: () => ⟦2-char-id⟧.e
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35819);
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         this.load = ⟦2-char-id⟧, this.loaded = null, this.loading = null
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -255,7 +255,7 @@
     }
     class ⟦2-char-id⟧ {
       constructor() {
-        this.mobScene = new ⟦2-char-id⟧((() => Promise.all([⟦2-char-id⟧.e(215), ⟦2-char-id⟧.e(214), ⟦2-char-id⟧.e(234), ⟦2-char-id⟧.e(235), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(232), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(242), ⟦2-char-id⟧.e(236), ⟦2-char-id⟧.e(241), ⟦2-char-id⟧.e(239), ⟦2-char-id⟧.e(231), ⟦2-char-id⟧.e(206), ⟦2-char-id⟧.e(271), ⟦2-char-id⟧.e(211), ⟦2-char-id⟧.e(225), ⟦2-char-id⟧.e(237), ⟦2-char-id⟧.e(240), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(207), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(205), ⟦2-char-id⟧.e(106), ⟦2-char-id⟧.e(68), ⟦2-char-id⟧.e(272), ⟦2-char-id⟧.e(146)]).then((() => ⟦2-char-id⟧(39946))))), this.characterScene = new ⟦2-char-id⟧((() => Promise.all([⟦2-char-id⟧.e(215), ⟦2-char-id⟧.e(214), ⟦2-char-id⟧.e(234), ⟦2-char-id⟧.e(235), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(232), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(242), ⟦2-char-id⟧.e(236), ⟦2-char-id⟧.e(241), ⟦2-char-id⟧.e(239), ⟦2-char-id⟧.e(231), ⟦2-char-id⟧.e(206), ⟦2-char-id⟧.e(271), ⟦2-char-id⟧.e(211), ⟦2-char-id⟧.e(225), ⟦2-char-id⟧.e(237), ⟦2-char-id⟧.e(240), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(207), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(205), ⟦2-char-id⟧.e(106), ⟦2-char-id⟧.e(68), ⟦2-char-id⟧.e(272), ⟦2-char-id⟧.e(145)]).then((() => ⟦2-char-id⟧(40040)))))
+        this.mobScene = new ⟦2-char-id⟧((() => Promise.all([⟦2-char-id⟧.e(215), ⟦2-char-id⟧.e(214), ⟦2-char-id⟧.e(234), ⟦2-char-id⟧.e(235), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(232), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(242), ⟦2-char-id⟧.e(236), ⟦2-char-id⟧.e(241), ⟦2-char-id⟧.e(239), ⟦2-char-id⟧.e(231), ⟦2-char-id⟧.e(206), ⟦2-char-id⟧.e(271), ⟦2-char-id⟧.e(211), ⟦2-char-id⟧.e(225), ⟦2-char-id⟧.e(237), ⟦2-char-id⟧.e(240), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(207), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(205), ⟦2-char-id⟧.e(106), ⟦2-char-id⟧.e(68), ⟦2-char-id⟧.e(272), ⟦2-char-id⟧.e(146)]).then((() => ⟦2-char-id⟧(39925))))), this.characterScene = new ⟦2-char-id⟧((() => Promise.all([⟦2-char-id⟧.e(215), ⟦2-char-id⟧.e(214), ⟦2-char-id⟧.e(234), ⟦2-char-id⟧.e(235), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(232), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(242), ⟦2-char-id⟧.e(236), ⟦2-char-id⟧.e(241), ⟦2-char-id⟧.e(239), ⟦2-char-id⟧.e(231), ⟦2-char-id⟧.e(206), ⟦2-char-id⟧.e(271), ⟦2-char-id⟧.e(211), ⟦2-char-id⟧.e(225), ⟦2-char-id⟧.e(237), ⟦2-char-id⟧.e(240), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(207), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(205), ⟦2-char-id⟧.e(106), ⟦2-char-id⟧.e(68), ⟦2-char-id⟧.e(272), ⟦2-char-id⟧.e(145)]).then((() => ⟦2-char-id⟧(40024)))))
       }
       openMob(⟦2-char-id⟧) {
         return this.mobScene.run((⟦2-char-id⟧ => ⟦2-char-id⟧.openMobPreview(⟦2-char-id⟧)))
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -270,7 +270,7 @@
         return this.characterScene.run((⟦2-char-id⟧ => ⟦2-char-id⟧.openCharacterPreview(⟦2-char-id⟧, ⟦2-char-id⟧)))
       }
     }
-    ⟦2-char-id⟧.g.setDefaultHost((() => new ⟦2-char-id⟧))
+    ⟦2-char-id⟧.e.setDefaultHost((() => new ⟦2-char-id⟧))
   }
 };
 Object.freeze(modules);
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/205.js</code> · modified · +134 / -134</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +6 / -6</summary>

```diff
@@ -1,14 +1,14 @@
 export const ⟦2-char-id⟧ = 205;
 export const ids = [205];
 export const modules = {
-  37025: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36946: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
       g: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧,
-      l: () => ⟦2-char-id⟧,
-      n: () => ⟦2-char-id⟧
+      j: () => ⟦2-char-id⟧,
+      k: () => ⟦2-char-id⟧,
+      o: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = 1.001,
       ⟦2-char-id⟧ = .501,
```

</details>

<details>
<summary>Hunk 2 · Change · +15 / -15</summary>

```diff
@@ -35,27 +35,27 @@
       return ⟦2-char-id⟧
     }
   },
-  37414: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37372: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      C: () => ⟦2-char-id⟧,
-      D: () => ⟦2-char-id⟧,
+      A: () => ⟦2-char-id⟧,
+      B: () => ⟦2-char-id⟧,
       E: () => ⟦2-char-id⟧,
-      G: () => ⟦2-char-id⟧,
+      I: () => ⟦2-char-id⟧,
       K: () => ⟦2-char-id⟧,
-      O: () => ⟦2-char-id⟧,
-      R: () => ⟦2-char-id⟧,
-      V: () => ⟦2-char-id⟧,
+      M: () => ⟦2-char-id⟧,
+      P: () => ⟦2-char-id⟧,
+      S: () => ⟦2-char-id⟧,
+      W: () => ⟦2-char-id⟧,
       c: () => ⟦2-char-id⟧,
       e: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
-      m: () => ⟦2-char-id⟧,
-      o: () => ⟦2-char-id⟧,
-      r: () => ⟦2-char-id⟧,
-      u: () => ⟦2-char-id⟧,
-      y: () => ⟦2-char-id⟧
+      h: () => ⟦2-char-id⟧,
+      l: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧,
+      t: () => ⟦2-char-id⟧,
+      v: () => ⟦2-char-id⟧,
+      x: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8717);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8743);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return Math.floor(⟦2-char-id⟧).toLocaleString("en-US")
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -70,7 +70,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.split("|")[0];
-      return (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧) ? ⟦2-char-id⟧ === ⟦2-char-id⟧.d ? "cryo" : "water" : null
+      return (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧) ? ⟦2-char-id⟧ === ⟦2-char-id⟧.e ? "cryo" : "water" : null
     }
     const ⟦2-char-id⟧ = [
         [1, 0, 0],
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -135,7 +135,7 @@
           inputSlot: 0,
           fuelSlot: null,
           outputSlots: [1, 2, 3],
-          recipes: [⟦2-char-id⟧("Uranium Grit", "Uranium Pellet", 1, 12), rJ("Spent Pellet", "Plutonium Pellet", 1, 4)],
+          recipes: [⟦2-char-id⟧("Uranium Grit", "Uranium Pellet", 1, 12), vB("Spent Pellet", "Plutonium Pellet", 1, 4)],
           powerPerOp: 600,
           waterPerOp: 24
         },
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -166,7 +166,7 @@
       };
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return 1⟦2-char-id⟧ * (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : 0) / ⟦2-char-id⟧.opMs
+      return 1⟦2-char-id⟧ * (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : 0) / ⟦2-char-id⟧.opMs
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +5 / -5</summary>

```diff
@@ -178,13 +178,13 @@
       ⟦2-char-id⟧ = "baf2waterclose",
       ⟦2-char-id⟧ = "baf2wateropen"
   },
-  37403: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37361: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8636),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8677);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8653),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8690);
     const ⟦2-char-id⟧ = [
       [1, 0, 0],
       [-1, 0, 0],
```

</details>

<details>
<summary>Hunk 7 · Change · +3 / -3</summary>

```diff
@@ -193,9 +193,9 @@
       [0, 1, 0],
       [0, -1, 0]
     ];
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8692),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37208),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8687);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8701),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37162),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8698);
     const ⟦2-char-id⟧ = {
       1: [0, -1],
       2: [-1, 0],
```

</details>

<details>
<summary>Hunk 8 · Change · +5 / -5</summary>

```diff
@@ -221,16 +221,16 @@
       [0, 0, 1],
       [0, 0, -1]
     ];
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8715);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8737);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ < ⟦2-char-id⟧.p || ⟦2-char-id⟧ >= ⟦2-char-id⟧.p + ⟦2-char-id⟧.r || Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.w) === Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.w) && Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.w) === Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.w)
+      return ⟦2-char-id⟧ < ⟦2-char-id⟧.t || ⟦2-char-id⟧ >= ⟦2-char-id⟧.t + ⟦2-char-id⟧.w || Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.y) === Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.y) && Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.y) === Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.y)
     }
     const ⟦2-char-id⟧ = "Splitter",
       ⟦2-char-id⟧ = "Sorting Gate",
-      ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.I),
-      ⟦2-char-id⟧ = new Set([...nJ.I, "Belt Loader", "Fast Loader", ⟦2-char-id⟧]),
-      ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.t),
+      ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.Q),
+      ⟦2-char-id⟧ = new Set([...DB.Q, "Belt Loader", "Fast Loader", ⟦2-char-id⟧]),
+      ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.x),
       ⟦2-char-id⟧ = [
         [1, 0, 0],
         [-1, 0, 0],
```

</details>

<details>
<summary>Hunk 9 · Change · +8 / -8</summary>

```diff
@@ -242,14 +242,14 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? cJ : ""
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧.i && (0, ⟦2-char-id⟧.Q)(⟦2-char-id⟧.m[⟦2-char-id⟧].name)
-    }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8682),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8703);
+      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? TB : ""
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧.j && (0, ⟦2-char-id⟧.ab)(⟦2-char-id⟧.h[⟦2-char-id⟧].name)
+    }
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8696),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8716);
     const ⟦2-char-id⟧ = [
       [1, 0, 0],
       [-1, 0, 0],
```

</details>

<details>
<summary>Hunk 10 · Change · +4 / -4</summary>

```diff
@@ -259,10 +259,10 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
-      return (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rootName) !== ⟦2-char-id⟧.o ? null : {
-        rot: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.rot) && void 0 !== ⟦2-char-id⟧ ? ZJ : 1,
-        half: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.rootName, ⟦2-char-id⟧.metaStr)
+      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
+      return (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rootName) !== ⟦2-char-id⟧.m ? null : {
+        rot: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.rot) && void 0 !== ⟦2-char-id⟧ ? dB : 1,
+        half: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.rootName, ⟦2-char-id⟧.metaStr)
       }
     }
 
```

</details>

<details>
<summary>Hunk 11 · Change · +3 / -3</summary>

```diff
@@ -275,17 +275,17 @@
         rot: ⟦2-char-id⟧,
         half: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧);
+      const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧);
       return null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.rot === ⟦2-char-id⟧ && ⟦2-char-id⟧.half === ⟦2-char-id⟧.q[⟦2-char-id⟧]
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37407);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37363);
     const ⟦2-char-id⟧ = [new class {
       constructor() {
         this.reshapeOffsets = ⟦2-char-id⟧
       }
       handles(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        return "Stairs" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.model)
+        return "Stairs" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.model)
       }
       affects(⟦2-char-id⟧) {
         return this.handles(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 12 · Change · +3 / -3</summary>

```diff
@@ -293,14 +293,14 @@
       shape(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.stairsOf(⟦2-char-id⟧),
           ⟦2-char-id⟧ = this.cornerAt(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.half === ⟦2-char-id⟧.d.top ? "top" : "bot";
-        return (0, ⟦2-char-id⟧.n)(`${FJ.m[eJ].meta.rootName}|meta|rot${XJ.rot}|${jJ}${null===AJ?"":`|${⟦2-char-id⟧}`}`)
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.half === ⟦2-char-id⟧.e.top ? "top" : "bot";
+        return (0, ⟦2-char-id⟧.j)(`${VB.h[pB].meta.rootName}|meta|rot${lB.rot}|${gB}${null===JB?"":`|${⟦2-char-id⟧}`}`)
       }
       stairsOf(⟦2-char-id⟧) {
         const {
           rot: ⟦2-char-id⟧,
           halfblockPlacement: ⟦2-char-id⟧
-        } = ⟦2-char-id⟧.m[⟦2-char-id⟧].meta;
+        } = ⟦2-char-id⟧.h[⟦2-char-id⟧].meta;
         return {
           rot: ⟦2-char-id⟧,
           half: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 13 · Change · +24 / -24</summary>

```diff
@@ -335,74 +335,74 @@
       }
     }, new class {
       constructor() {
-        this.reshapeOffsets = ⟦2-char-id⟧, this.rootIds = new Set(⟦2-char-id⟧.h.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧))))
+        this.reshapeOffsets = ⟦2-char-id⟧, this.rootIds = new Set(⟦2-char-id⟧.k.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧))))
       }
       handles(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
+        const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
         return void 0 !== ⟦2-char-id⟧ && this.rootIds.has(⟦2-char-id⟧.rootId)
       }
       affects(⟦2-char-id⟧) {
         return this.handles(⟦2-char-id⟧)
       }
       placedBy(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.m[⟦2-char-id⟧].meta.rootName === ⟦2-char-id⟧.m ? null : ⟦2-char-id⟧.m
+        return ⟦2-char-id⟧.h[⟦2-char-id⟧].meta.rootName === ⟦2-char-id⟧.r ? null : ⟦2-char-id⟧.r
       }
       shape(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const {
           rootId: ⟦2-char-id⟧,
           rootName: ⟦2-char-id⟧,
           rot: ⟦2-char-id⟧
-        } = ⟦2-char-id⟧.m[⟦2-char-id⟧].meta;
+        } = ⟦2-char-id⟧.h[⟦2-char-id⟧].meta;
         let ⟦2-char-id⟧ = 0;
-        return ⟦2-char-id⟧.s[⟦2-char-id⟧].forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        return ⟦2-char-id⟧.y[⟦2-char-id⟧].forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           var ⟦2-char-id⟧;
           let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧)]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
+          const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧)]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
           (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rootId) === ⟦2-char-id⟧ && ⟦2-char-id⟧.rot === ⟦2-char-id⟧ && (⟦2-char-id⟧ |= 1 << ⟦2-char-id⟧)
-        })), (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
-      }
-    }, ...XJ.e.map((⟦2-char-id⟧ => new ⟦2-char-id⟧.e(⟦2-char-id⟧))), new class {
+        })), (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
+      }
+    }, ...lB.d.map((⟦2-char-id⟧ => new ⟦2-char-id⟧.c(⟦2-char-id⟧))), new class {
       constructor() {
         this.reshapeOffsets = ⟦2-char-id⟧
       }
       handles(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        return ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧ === ⟦2-char-id⟧.i
+        return ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧ === ⟦2-char-id⟧.j
       }
       affects(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        return ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧ === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧.i || void 0 !== ⟦2-char-id⟧.b[⟦2-char-id⟧]
+        return ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧ === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧.j || void 0 !== ⟦2-char-id⟧.b[⟦2-char-id⟧]
       }
       shape(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const {
           rootName: ⟦2-char-id⟧,
           rot: ⟦2-char-id⟧
-        } = ⟦2-char-id⟧.m[⟦2-char-id⟧].meta;
-        return ⟦2-char-id⟧ === ⟦2-char-id⟧.i ? ⟦2-char-id⟧ ? eJ : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[⟦2-char-id⟧ - 1];
-          for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧.E; ⟦2-char-id⟧++) {
+        } = ⟦2-char-id⟧.h[⟦2-char-id⟧].meta;
+        return ⟦2-char-id⟧ === ⟦2-char-id⟧.j ? ⟦2-char-id⟧ ? pB : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[⟦2-char-id⟧ - 1];
+          for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧.M; ⟦2-char-id⟧++) {
             const [⟦2-char-id⟧, ⟦2-char-id⟧] = [⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-            if (⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧.i && ⟦2-char-id⟧.m[⟦2-char-id⟧].meta.rot === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.X)(⟦2-char-id⟧, !⟦2-char-id⟧(⟦2-char-id⟧)))
+            if (⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧.j && ⟦2-char-id⟧.h[⟦2-char-id⟧].meta.rot === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.jb)(⟦2-char-id⟧, !⟦2-char-id⟧(⟦2-char-id⟧)))
           }
-          return (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.X)(⟦2-char-id⟧, !1))
-        }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.J)(⟦2-char-id⟧, ⟦2-char-id⟧, function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[⟦2-char-id⟧ - 1], ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+          return (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.jb)(⟦2-char-id⟧, !1))
+        }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.U)(⟦2-char-id⟧, ⟦2-char-id⟧, function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[⟦2-char-id⟧ - 1], ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             var ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
+            const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
             if (!⟦2-char-id⟧) return !1;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.rootName,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧);
             if (!⟦2-char-id⟧ && !⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧ !== ⟦2-char-id⟧) return !1;
-            const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[⟦2-char-id⟧.rot - 1];
-            return ⟦2-char-id⟧ ? ⟦2-char-id⟧ === -⟦2-char-id⟧ && ⟦2-char-id⟧ === -ZJ : ⟦2-char-id⟧.has(⟦2-char-id⟧) ? ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ZJ : (0, ⟦2-char-id⟧.V)(⟦2-char-id⟧.m[⟦2-char-id⟧].name, ⟦2-char-id⟧, ⟦2-char-id⟧).some((⟦2-char-id⟧ => {
+            const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[⟦2-char-id⟧.rot - 1];
+            return ⟦2-char-id⟧ ? ⟦2-char-id⟧ === -⟦2-char-id⟧ && ⟦2-char-id⟧ === -dB : ⟦2-char-id⟧.has(⟦2-char-id⟧) ? ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === dB : (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧.h[⟦2-char-id⟧].name, ⟦2-char-id⟧, ⟦2-char-id⟧).some((⟦2-char-id⟧ => {
               let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
               return ⟦2-char-id⟧ === -⟦2-char-id⟧ && ⟦2-char-id⟧ === -⟦2-char-id⟧
             })) && !(⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧)
-          }(⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧ && ⟦2-char-id⟧.m[⟦2-char-id⟧].meta.rot === ⟦2-char-id⟧, ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.b[⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧))] || -1 === ⟦2-char-id⟧.b[⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧))];
+          }(⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧ && ⟦2-char-id⟧.h[⟦2-char-id⟧].meta.rot === ⟦2-char-id⟧, ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.b[⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧))] || -1 === ⟦2-char-id⟧.b[⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧))];
           if (⟦2-char-id⟧ || ⟦2-char-id⟧ || function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
               if (⟦2-char-id⟧(⟦2-char-id⟧) !== ⟦2-char-id⟧) return !1;
-              const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[⟦2-char-id⟧.m[⟦2-char-id⟧].meta.rot - 1], [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.N)(⟦2-char-id⟧.m[⟦2-char-id⟧].name, ⟦2-char-id⟧, ⟦2-char-id⟧);
+              const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[⟦2-char-id⟧.h[⟦2-char-id⟧].meta.rot - 1], [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧.h[⟦2-char-id⟧].name, ⟦2-char-id⟧, ⟦2-char-id⟧);
               return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧
             }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) || ⟦2-char-id⟧(-⟦2-char-id⟧, -⟦2-char-id⟧)) return null;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(-⟦2-char-id⟧, ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -413,18 +413,18 @@
       }
     }, new class {
       constructor() {
-        this.reshapeOffsets = ⟦2-char-id⟧, this.rootId = (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧.o)
+        this.reshapeOffsets = ⟦2-char-id⟧, this.rootId = (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧.m)
       }
       handles(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootId) === this.rootId
+        return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootId) === this.rootId
       }
       affects(⟦2-char-id⟧) {
         return this.handles(⟦2-char-id⟧)
       }
       shape(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        return (0, ⟦2-char-id⟧.n)((⟦2-char-id⟧ = ⟦2-char-id⟧.rot, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.reshapedHalf(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : this.placedHalf(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.rot)) ? (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.o, ⟦2-char-id⟧, ⟦2-char-id⟧) : 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.o : `${yJ.o}|meta|rot${qJ}`));
+        return (0, ⟦2-char-id⟧.j)((⟦2-char-id⟧ = ⟦2-char-id⟧.rot, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.reshapedHalf(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : this.placedHalf(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.rot)) ? (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧.m, ⟦2-char-id⟧, ⟦2-char-id⟧) : 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.m : `${MB.m}|meta|rot${YB}`));
         var ⟦2-char-id⟧, ⟦2-char-id⟧
       }
       placedHalf(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 15 · Change · +2 / -2</summary>

```diff
@@ -443,12 +443,12 @@
       reshapedHalf(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (null !== ⟦2-char-id⟧.half && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) return ⟦2-char-id⟧.half;
         for (const ⟦2-char-id⟧ of ["right", "left"]) {
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧.rot, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧);
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.rot, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧);
           if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.rot === ⟦2-char-id⟧.rot && ⟦2-char-id⟧.half === ⟦2-char-id⟧.q[⟦2-char-id⟧]) return ⟦2-char-id⟧
         }
         return null
       }
-    }, new ⟦2-char-id⟧.d];
+    }, new ⟦2-char-id⟧.b];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
```

</details>

<details>
<summary>Hunk 16 · Change · +14 / -14</summary>

```diff
@@ -460,29 +460,29 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        if (⟦2-char-id⟧.handles(⟦2-char-id⟧)) return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.placedBy) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+        if (⟦2-char-id⟧.handles(⟦2-char-id⟧)) return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.placedBy) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : null
       }
       return null
     }
   },
-  37407: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37363: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8636),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8662),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8717),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37414),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8715);
-    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.O)("pipe"),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.O)("tank"),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.O)("port"),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8653),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8679),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8743),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37372),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8737);
+    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.P)("pipe"),
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.P)("tank"),
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.P)("port"),
       ⟦2-char-id⟧ = "Reactor Port";
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = new Set([⟦2-char-id⟧.h, ⟦2-char-id⟧.d, ⟦2-char-id⟧, ...cJ, ...ZJ, ...JJ ? [⟦2-char-id⟧.j] : []]);
+      const ⟦2-char-id⟧ = new Set([⟦2-char-id⟧.f, ⟦2-char-id⟧.e, ⟦2-char-id⟧, ...TB, ...dB, ...BB ? [⟦2-char-id⟧.l] : []]);
       return {
         makers: new Set(⟦2-char-id⟧),
         roots: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -492,7 +492,7 @@
         water: ⟦2-char-id⟧(!0, ["Condenser"], ["Centrifuge", "Synthesizer", ⟦2-char-id⟧.c]),
         cryo: ⟦2-char-id⟧(!1, [⟦2-char-id⟧.c], [])
       },
-      ⟦2-char-id⟧ = new Set([...sJ.water.roots, ...sJ.cryo.roots]),
+      ⟦2-char-id⟧ = new Set([...OB.water.roots, ...OB.cryo.roots]),
       ⟦2-char-id⟧ = {
         nx: [-1, 0, 0],
         ny: [0, -1, 0],
```

</details>

<details>
<summary>Hunk 18 · Change · +2 / -2</summary>

```diff
@@ -501,10 +501,10 @@
         py: [0, 1, 0],
         pz: [0, 0, 1]
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.map((⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧])),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.e.map((⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧])),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
         let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.y.findIndex((⟦2-char-id⟧ => {
+        return ⟦2-char-id⟧.A.findIndex((⟦2-char-id⟧ => {
           let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧
         }))
```

</details>

<details>
<summary>Hunk 19 · Change · +6 / -6</summary>

```diff
@@ -512,15 +512,15 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧],
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧],
         ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
       if (!⟦2-char-id⟧ || !⟦2-char-id⟧.roots.has(⟦2-char-id⟧)) return null;
-      if ((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧.name) === ⟦2-char-id⟧ ? qJ : null;
-      if (⟦2-char-id⟧ === ⟦2-char-id⟧.j) return ⟦2-char-id⟧;
-      if (⟦2-char-id⟧ === ⟦2-char-id⟧) return ⟦2-char-id⟧.name.endsWith("|Water") ? YJ : null;
-      const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[(⟦2-char-id⟧.meta.rot || 1) - 1];
-      return (0, ⟦2-char-id⟧.O)(⟦2-char-id⟧.makers.has(⟦2-char-id⟧) ? "maker" : "user", [-⟦2-char-id⟧, 0, -⟦2-char-id⟧])
+      if ((0, ⟦2-char-id⟧.j)(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.name) === ⟦2-char-id⟧ ? YB : null;
+      if (⟦2-char-id⟧ === ⟦2-char-id⟧.l) return ⟦2-char-id⟧;
+      if (⟦2-char-id⟧ === ⟦2-char-id⟧) return ⟦2-char-id⟧.name.endsWith("|Water") ? oB : null;
+      const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[(⟦2-char-id⟧.meta.rot || 1) - 1];
+      return (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.makers.has(⟦2-char-id⟧) ? "maker" : "user", [-⟦2-char-id⟧, 0, -⟦2-char-id⟧])
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +3 / -3</summary>

```diff
@@ -533,13 +533,13 @@
         let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.has(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? hJ : "") && !(0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧])
+        return null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.has(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? kB : "") && !(0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧])
       }))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧];
-      return ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧.name) : null
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧];
+      return ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.name) : null
     }
     let ⟦2-char-id⟧ = null;
 
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -548,8 +548,8 @@
         ⟦2-char-id⟧ = new Map;
         for (const ⟦2-char-id⟧ of ["water", "cryo"])
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 64; ⟦2-char-id⟧++)
-            for (const ⟦2-char-id⟧ of [!1, !0]) ⟦2-char-id⟧.set((0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), {
-              LD: ⟦2-char-id⟧,
+            for (const ⟦2-char-id⟧ of [!1, !0]) ⟦2-char-id⟧.set((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), {
+              DO: ⟦2-char-id⟧,
               mask: ⟦2-char-id⟧,
               full: ⟦2-char-id⟧
             })
```

</details>

<details>
<summary>Hunk 22 · Change · +6 / -6</summary>

```diff
@@ -557,20 +557,20 @@
       return ⟦2-char-id⟧.get(⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = new Map(Array.from({
-      length: ⟦2-char-id⟧.k + 1
-    }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => [(0, ⟦2-char-id⟧.r)(⟦2-char-id⟧), ⟦2-char-id⟧])));
+      length: ⟦2-char-id⟧.i + 1
+    }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => [(0, ⟦2-char-id⟧.n)(⟦2-char-id⟧), ⟦2-char-id⟧])));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧.some(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
         if (0 === (⟦2-char-id⟧ >> ⟦2-char-id⟧ & 1)) return !1;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧)]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? jJ : "",
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧)]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? gB : "",
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        return ⟦2-char-id⟧ ? ⟦2-char-id⟧.LD === ⟦2-char-id⟧ && ⟦2-char-id⟧.full : (null !== (⟦2-char-id⟧ = function(⟦2-char-id⟧) {
+        return ⟦2-char-id⟧ ? ⟦2-char-id⟧.DO === ⟦2-char-id⟧ && ⟦2-char-id⟧.full : (null !== (⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : null
-        }(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? hJ : 0) > 0
+          return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : null
+        }(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? kB : 0) > 0
       }))
     }
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 23 · Change · +5 / -5</summary>

```diff
@@ -582,20 +582,20 @@
       }
       affects(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.has(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? cJ : "")
+        return ⟦2-char-id⟧.has(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? TB : "")
       }
       placedBy(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) === ⟦2-char-id⟧.d ? ⟦2-char-id⟧.h : null
+        return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) === ⟦2-char-id⟧.e ? ⟦2-char-id⟧.f : null
       }
       shape(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? YJ : "",
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧ !== ⟦2-char-id⟧.h ? null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? DJ : "water" : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? oB : "",
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧ !== ⟦2-char-id⟧.f ? null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? LB : "water" : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             return ⟦2-char-id⟧.some(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
               let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), "cryo");
-              return null !== ⟦2-char-id⟧ && "port" !== ⟦2-char-id⟧.kind && (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧])
+              return null !== ⟦2-char-id⟧ && "port" !== ⟦2-char-id⟧.kind && (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧])
             })) ? "cryo" : "water"
           }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 24 · Change · +3 / -3</summary>

```diff
@@ -604,18 +604,18 @@
             return ⟦2-char-id⟧.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
               let [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧);
-              ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]) && (⟦2-char-id⟧ |= 1 << ⟦2-char-id⟧)
+              ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]) && (⟦2-char-id⟧ |= 1 << ⟦2-char-id⟧)
             })), ⟦2-char-id⟧
           }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
             var ⟦2-char-id⟧;
             return !0 === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.full)
           }(⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-        return (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
+        return (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
       }
     }
   },
-  37170: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37120: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 25 · Change · +1 / -1</summary>

```diff
@@ -645,7 +645,7 @@
       return ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.exactMatch ? ⟦2-char-id⟧ === ⟦2-char-id⟧.name : ⟦2-char-id⟧.includes(⟦2-char-id⟧.name)))
     }
   },
-  35948: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35894: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return ⟦2-char-id⟧.includes("Leaf Bed")
     }
```

</details>

<details>
<summary>Hunk 26 · Change · +7 / -7</summary>

```diff
@@ -665,25 +665,25 @@
       e: () => ⟦2-char-id⟧,
       h: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧,
-      m: () => ⟦2-char-id⟧
+      p: () => ⟦2-char-id⟧
     })
   },
-  35944: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35886: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35948),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8636);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35894),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8653);
     const ⟦2-char-id⟧ = [],
       ⟦2-char-id⟧ = [],
       ⟦2-char-id⟧ = [],
       ⟦2-char-id⟧ = [];
-    for (const ⟦2-char-id⟧ of Object.keys(⟦2-char-id⟧.o))(0, ⟦2-char-id⟧.h)(⟦2-char-id⟧) ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧), (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧), (⟦2-char-id⟧.includes(" Bed Head") || ⟦2-char-id⟧.includes(" Strongbed Head")) && ⟦2-char-id⟧.push(⟦2-char-id⟧);
+    for (const ⟦2-char-id⟧ of Object.keys(⟦2-char-id⟧.n))(0, ⟦2-char-id⟧.h)(⟦2-char-id⟧) ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧), (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧), (⟦2-char-id⟧.includes(" Bed Head") || ⟦2-char-id⟧.includes(" Strongbed Head")) && ⟦2-char-id⟧.push(⟦2-char-id⟧);
     const ⟦2-char-id⟧ = {
       leafBeds: ⟦2-char-id⟧,
       woolBeds: ⟦2-char-id⟧,
       strongBeds: ⟦2-char-id⟧,
-      beds: [...eJ, ...XJ, ...AJ],
+      beds: [...pB, ...lB, ...JB],
       bedHeads: ⟦2-char-id⟧,
       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
     }
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/206.js</code> · modified · +70 / -70</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +2 / -2</summary>

```diff
@@ -1,9 +1,9 @@
 export const ⟦2-char-id⟧ = 206;
 export const ids = [206];
 export const modules = {
-  35985: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35927: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
       ungzip: () => ⟦2-char-id⟧
     });
 
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -102,7 +102,7 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧.stat_desc.elems;
         let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = -1;
         for (⟦2-char-id⟧.heap_len = 0, ⟦2-char-id⟧.heap_max = 573, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) 0 !== ⟦2-char-id⟧[2 * ⟦2-char-id⟧] ? (⟦2-char-id⟧.heap[++⟦2-char-id⟧.heap_len] = ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.depth[⟦2-char-id⟧] = 0) : ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = 0;
-        for (; ⟦2-char-id⟧.heap_len < 2;) ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[++⟦2-char-id⟧.heap_len] = ⟦2-char-id⟧ < 2 ? ++YJ : 0, ⟦2-char-id⟧[2 * ⟦2-char-id⟧] = 1, ⟦2-char-id⟧.depth[⟦2-char-id⟧] = 0, ⟦2-char-id⟧.opt_len--, ⟦2-char-id⟧ && (⟦2-char-id⟧.static_len -= ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1]);
+        for (; ⟦2-char-id⟧.heap_len < 2;) ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[++⟦2-char-id⟧.heap_len] = ⟦2-char-id⟧ < 2 ? ++oB : 0, ⟦2-char-id⟧[2 * ⟦2-char-id⟧] = 1, ⟦2-char-id⟧.depth[⟦2-char-id⟧] = 0, ⟦2-char-id⟧.opt_len--, ⟦2-char-id⟧ && (⟦2-char-id⟧.static_len -= ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1]);
         for (⟦2-char-id⟧.max_code = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.heap_len >> 1; ⟦2-char-id⟧ >= 1; ⟦2-char-id⟧--) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
         ⟦2-char-id⟧ = ⟦2-char-id⟧;
         do {
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -135,7 +135,7 @@
           ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = 7,
           ⟦2-char-id⟧ = 4;
-        for (0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3), ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1] = 65535, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1], ++⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧ || (⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧] += AJ : 0 !== ⟦2-char-id⟧ ? (⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧]++, ⟦2-char-id⟧.bl_tree[32]++) : ⟦2-char-id⟧ <= 10 ? ⟦2-char-id⟧.bl_tree[34]++ : ⟦2-char-id⟧.bl_tree[36]++, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧, 0 === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3) : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 6, ⟦2-char-id⟧ = 3) : (⟦2-char-id⟧ = 7, ⟦2-char-id⟧ = 4))
+        for (0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3), ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1] = 65535, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1], ++⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧ || (⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧] += JB : 0 !== ⟦2-char-id⟧ ? (⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧]++, ⟦2-char-id⟧.bl_tree[32]++) : ⟦2-char-id⟧ <= 10 ? ⟦2-char-id⟧.bl_tree[34]++ : ⟦2-char-id⟧.bl_tree[36]++, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧, 0 === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3) : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 6, ⟦2-char-id⟧ = 3) : (⟦2-char-id⟧ = 7, ⟦2-char-id⟧ = 4))
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = -1,
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -201,7 +201,7 @@
         },
         _tr_stored_block: ⟦2-char-id⟧,
         _tr_flush_block: ⟦2-char-id⟧,
-        _tr_tally: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => (⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧.last_lit] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧.last_lit + 1] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.l_buf + ⟦2-char-id⟧.last_lit] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.last_lit++, 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.dyn_ltree[2 * ⟦2-char-id⟧]++ : (⟦2-char-id⟧.matches++, ⟦2-char-id⟧--, ⟦2-char-id⟧.dyn_ltree[2 * (⟦2-char-id⟧[⟦2-char-id⟧] + ⟦2-char-id⟧ + 1)]++, ⟦2-char-id⟧.dyn_dtree[2 * ⟦2-char-id⟧(⟦2-char-id⟧)]++), ⟦2-char-id⟧.last_lit === ⟦2-char-id⟧.lit_bufsize - 1),
+        _tr_tally: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => (⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧.last_lit] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧.last_lit + 1] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.l_buf + ⟦2-char-id⟧.last_lit] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.last_lit++, 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.dyn_ltree[2 * ⟦2-char-id⟧]++ : (⟦2-char-id⟧.matches++, ⟦2-char-id⟧--, ⟦2-char-id⟧.dyn_ltree[2 * (⟦2-char-id⟧[⟦2-char-id⟧] + ⟦2-char-id⟧ + 1)]++, ⟦2-char-id⟧.dyn_dtree[2 * ⟦2-char-id⟧(⟦2-char-id⟧)]++), ⟦2-char-id⟧.last_lit === ⟦2-char-id⟧.lit_bufsize - 1),
         _tr_align: ⟦2-char-id⟧ => {
           ⟦2-char-id⟧(⟦2-char-id⟧, 2, 3), ⟦2-char-id⟧(⟦2-char-id⟧, 256, ⟦2-char-id⟧), (⟦2-char-id⟧ => {
             16 === ⟦2-char-id⟧.bi_valid ? (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.bi_buf), ⟦2-char-id⟧.bi_buf = 0, ⟦2-char-id⟧.bi_valid = 0) : ⟦2-char-id⟧.bi_valid >= 8 && (⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.pending++] = 255 & ⟦2-char-id⟧.bi_buf, ⟦2-char-id⟧.bi_buf >>= 8, ⟦2-char-id⟧.bi_valid -= 8)
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -303,7 +303,7 @@
       Z_DEFAULT_STRATEGY: ⟦2-char-id⟧,
       Z_UNKNOWN: ⟦2-char-id⟧,
       Z_DEFLATED: ⟦2-char-id⟧
-    } = ⟦2-char-id⟧, ⟦2-char-id⟧ = 258, ⟦2-char-id⟧ = 262, ⟦2-char-id⟧ = 103, ⟦2-char-id⟧ = 113, ⟦2-char-id⟧ = 666, ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => (⟦2-char-id⟧.JY = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ => (⟦2-char-id⟧ << 1) - (⟦2-char-id⟧ > 4 ? 9 : 0), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
+    } = ⟦2-char-id⟧, ⟦2-char-id⟧ = 258, ⟦2-char-id⟧ = 262, ⟦2-char-id⟧ = 103, ⟦2-char-id⟧ = 113, ⟦2-char-id⟧ = 666, ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => (⟦2-char-id⟧.Jo = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ => (⟦2-char-id⟧ << 1) - (⟦2-char-id⟧ > 4 ? 9 : 0), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
       for (; --⟦2-char-id⟧ >= 0;) ⟦2-char-id⟧[⟦2-char-id⟧] = 0
     };
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -349,7 +349,7 @@
             }
           }
         } while ((⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ & ⟦2-char-id⟧]) > ⟦2-char-id⟧ && 0 !== --⟦2-char-id⟧);
-        return ⟦2-char-id⟧ <= ⟦2-char-id⟧.lookahead ? XJ : ⟦2-char-id⟧.lookahead
+        return ⟦2-char-id⟧ <= ⟦2-char-id⟧.lookahead ? lB : ⟦2-char-id⟧.lookahead
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.w_size;
```

</details>

<details>
<summary>Hunk 7 · Change · +2 / -2</summary>

```diff
@@ -358,11 +358,11 @@
           if (⟦2-char-id⟧ = ⟦2-char-id⟧.window_size - ⟦2-char-id⟧.lookahead - ⟦2-char-id⟧.strstart, ⟦2-char-id⟧.strstart >= ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧)) {
             ⟦2-char-id⟧.window.set(⟦2-char-id⟧.window.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), 0), ⟦2-char-id⟧.match_start -= ⟦2-char-id⟧, ⟦2-char-id⟧.strstart -= ⟦2-char-id⟧, ⟦2-char-id⟧.block_start -= ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.hash_size, ⟦2-char-id⟧ = ⟦2-char-id⟧;
             do {
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.head[--⟦2-char-id⟧], ⟦2-char-id⟧.head[⟦2-char-id⟧] = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - cJ : 0
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.head[--⟦2-char-id⟧], ⟦2-char-id⟧.head[⟦2-char-id⟧] = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - TB : 0
             } while (--⟦2-char-id⟧);
             ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧;
             do {
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.prev[--⟦2-char-id⟧], ⟦2-char-id⟧.prev[⟦2-char-id⟧] = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - cJ : 0
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.prev[--⟦2-char-id⟧], ⟦2-char-id⟧.prev[⟦2-char-id⟧] = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - TB : 0
             } while (--⟦2-char-id⟧);
             ⟦2-char-id⟧ += ⟦2-char-id⟧
           }
```

</details>

<details>
<summary>Hunk 8 · Change · +3 / -3</summary>

```diff
@@ -452,16 +452,16 @@
         return ⟦2-char-id⟧.state = ⟦2-char-id⟧, ⟦2-char-id⟧.strm = ⟦2-char-id⟧, ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, ⟦2-char-id⟧.gzhead = null, ⟦2-char-id⟧.w_bits = ⟦2-char-id⟧, ⟦2-char-id⟧.w_size = 1 << ⟦2-char-id⟧.w_bits, ⟦2-char-id⟧.w_mask = ⟦2-char-id⟧.w_size - 1, ⟦2-char-id⟧.hash_bits = ⟦2-char-id⟧ + 7, ⟦2-char-id⟧.hash_size = 1 << ⟦2-char-id⟧.hash_bits, ⟦2-char-id⟧.hash_mask = ⟦2-char-id⟧.hash_size - 1, ⟦2-char-id⟧.hash_shift = ~~((⟦2-char-id⟧.hash_bits + 3 - 1) / 3), ⟦2-char-id⟧.window = new Uint8Array(2 * ⟦2-char-id⟧.w_size), ⟦2-char-id⟧.head = new Uint16Array(⟦2-char-id⟧.hash_size), ⟦2-char-id⟧.prev = new Uint16Array(⟦2-char-id⟧.w_size), ⟦2-char-id⟧.lit_bufsize = 1 << ⟦2-char-id⟧ + 6, ⟦2-char-id⟧.pending_buf_size = 4 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.pending_buf = new Uint8Array(⟦2-char-id⟧.pending_buf_size), ⟦2-char-id⟧.d_buf = 1 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.l_buf = 3 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.level = ⟦2-char-id⟧, ⟦2-char-id⟧.strategy = ⟦2-char-id⟧, ⟦2-char-id⟧.method = ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧)
       };
     var ⟦2-char-id⟧ = {
-      deflateInit: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, fc, 15, 8, ⟦2-char-id⟧),
+      deflateInit: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, TB, HT, 15, 8, ⟦2-char-id⟧),
       deflateInit2: ⟦2-char-id⟧,
       deflateReset: ⟦2-char-id⟧,
       deflateResetKeep: ⟦2-char-id⟧,
-      deflateSetHeader: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ && ⟦2-char-id⟧.state ? 2 !== ⟦2-char-id⟧.state.wrap ? Xc : (⟦2-char-id⟧.state.gzhead = ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧,
+      deflateSetHeader: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ && ⟦2-char-id⟧.state ? 2 !== ⟦2-char-id⟧.state.wrap ? lT : (⟦2-char-id⟧.state.gzhead = ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧,
       deflate: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         let ⟦2-char-id⟧, ⟦2-char-id⟧;
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state || ⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ < 0) return ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        if (!⟦2-char-id⟧.output || !⟦2-char-id⟧.input && 0 !== ⟦2-char-id⟧.avail_in || ⟦2-char-id⟧.status === ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, 0 === ⟦2-char-id⟧.avail_out ? qc : ⟦2-char-id⟧);
+        if (!⟦2-char-id⟧.output || !⟦2-char-id⟧.input && 0 !== ⟦2-char-id⟧.avail_in || ⟦2-char-id⟧.status === ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, 0 === ⟦2-char-id⟧.avail_out ? YT : ⟦2-char-id⟧);
         ⟦2-char-id⟧.strm = ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.last_flush;
         if (⟦2-char-id⟧.last_flush = ⟦2-char-id⟧, 42 === ⟦2-char-id⟧.status)
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -534,7 +534,7 @@
           if (3 !== ⟦2-char-id⟧ && 4 !== ⟦2-char-id⟧ || (⟦2-char-id⟧.status = ⟦2-char-id⟧), 1 === ⟦2-char-id⟧ || 3 === ⟦2-char-id⟧) return 0 === ⟦2-char-id⟧.avail_out && (⟦2-char-id⟧.last_flush = -1), ⟦2-char-id⟧;
           if (2 === ⟦2-char-id⟧ && (⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, 0, 0, !1), ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧.head), 0 === ⟦2-char-id⟧.lookahead && (⟦2-char-id⟧.strstart = 0, ⟦2-char-id⟧.block_start = 0, ⟦2-char-id⟧.insert = 0))), ⟦2-char-id⟧(⟦2-char-id⟧), 0 === ⟦2-char-id⟧.avail_out)) return ⟦2-char-id⟧.last_flush = -1, ⟦2-char-id⟧
         }
-        return ⟦2-char-id⟧ !== ⟦2-char-id⟧ ? Uc : ⟦2-char-id⟧.wrap <= 0 ? ec : (2 === ⟦2-char-id⟧.wrap ? (⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.adler), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 8 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 16 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 24 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.total_in), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 8 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 16 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 24 & 255)) : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >>> 16), ⟦2-char-id⟧(⟦2-char-id⟧, 65535 & ⟦2-char-id⟧.adler)), ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.wrap > 0 && (⟦2-char-id⟧.wrap = -⟦2-char-id⟧.wrap), 0 !== ⟦2-char-id⟧.pending ? Uc : ⟦2-char-id⟧)
+        return ⟦2-char-id⟧ !== ⟦2-char-id⟧ ? yT : ⟦2-char-id⟧.wrap <= 0 ? pT : (2 === ⟦2-char-id⟧.wrap ? (⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.adler), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 8 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 16 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 24 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.total_in), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 8 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 16 & 255), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 24 & 255)) : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >>> 16), ⟦2-char-id⟧(⟦2-char-id⟧, 65535 & ⟦2-char-id⟧.adler)), ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.wrap > 0 && (⟦2-char-id⟧.wrap = -⟦2-char-id⟧.wrap), 0 !== ⟦2-char-id⟧.pending ? yT : ⟦2-char-id⟧)
       },
       deflateEnd: ⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -603,7 +603,7 @@
         let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.length,
           ⟦2-char-id⟧ = 0;
         for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧), 55296 === (64512 & ⟦2-char-id⟧) && ⟦2-char-id⟧ + 1 < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧ + 1), 56320 === (64512 & ⟦2-char-id⟧) && (⟦2-char-id⟧ = 65536 + (⟦2-char-id⟧ - 55296 << 10) + (⟦2-char-id⟧ - 56320), ⟦2-char-id⟧++)), ⟦2-char-id⟧ += ⟦2-char-id⟧ < 128 ? 1 : ⟦2-char-id⟧ < 2048 ? 2 : ⟦2-char-id⟧ < 65536 ? 3 : 4;
-        for (⟦2-char-id⟧ = new Uint8Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧), 55296 === (64512 & ⟦2-char-id⟧) && ⟦2-char-id⟧ + 1 < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧ + 1), 56320 === (64512 & ⟦2-char-id⟧) && (⟦2-char-id⟧ = 65536 + (⟦2-char-id⟧ - 55296 << 10) + (⟦2-char-id⟧ - 56320), ⟦2-char-id⟧++)), ⟦2-char-id⟧ < 128 ? ⟦2-char-id⟧[⟦2-char-id⟧++] = ZJ : ⟦2-char-id⟧ < 2048 ? (⟦2-char-id⟧[⟦2-char-id⟧++] = 192 | ⟦2-char-id⟧ >>> 6, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | 63 & ⟦2-char-id⟧) : ⟦2-char-id⟧ < 65536 ? (⟦2-char-id⟧[⟦2-char-id⟧++] = 224 | ⟦2-char-id⟧ >>> 12, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | ⟦2-char-id⟧ >>> 6 & 63, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | 63 & ⟦2-char-id⟧) : (⟦2-char-id⟧[⟦2-char-id⟧++] = 240 | ⟦2-char-id⟧ >>> 18, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | ⟦2-char-id⟧ >>> 12 & 63, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | ⟦2-char-id⟧ >>> 6 & 63, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | 63 & ⟦2-char-id⟧);
+        for (⟦2-char-id⟧ = new Uint8Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧), 55296 === (64512 & ⟦2-char-id⟧) && ⟦2-char-id⟧ + 1 < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧ + 1), 56320 === (64512 & ⟦2-char-id⟧) && (⟦2-char-id⟧ = 65536 + (⟦2-char-id⟧ - 55296 << 10) + (⟦2-char-id⟧ - 56320), ⟦2-char-id⟧++)), ⟦2-char-id⟧ < 128 ? ⟦2-char-id⟧[⟦2-char-id⟧++] = dB : ⟦2-char-id⟧ < 2048 ? (⟦2-char-id⟧[⟦2-char-id⟧++] = 192 | ⟦2-char-id⟧ >>> 6, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | 63 & ⟦2-char-id⟧) : ⟦2-char-id⟧ < 65536 ? (⟦2-char-id⟧[⟦2-char-id⟧++] = 224 | ⟦2-char-id⟧ >>> 12, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | ⟦2-char-id⟧ >>> 6 & 63, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | 63 & ⟦2-char-id⟧) : (⟦2-char-id⟧[⟦2-char-id⟧++] = 240 | ⟦2-char-id⟧ >>> 18, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | ⟦2-char-id⟧ >>> 12 & 63, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | ⟦2-char-id⟧ >>> 6 & 63, ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 | 63 & ⟦2-char-id⟧);
         return ⟦2-char-id⟧
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -621,11 +621,11 @@
           if (⟦2-char-id⟧ > 4) ⟦2-char-id⟧[⟦2-char-id⟧++] = 65533, ⟦2-char-id⟧ += ⟦2-char-id⟧ - 1;
           else {
             for (⟦2-char-id⟧ &= 2 === ⟦2-char-id⟧ ? 31 : 3 === ⟦2-char-id⟧ ? 15 : 7; ⟦2-char-id⟧ > 1 && ⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧ = ⟦2-char-id⟧ << 6 | 63 & ⟦2-char-id⟧[⟦2-char-id⟧++], ⟦2-char-id⟧--;
-            ⟦2-char-id⟧ > 1 ? ⟦2-char-id⟧[⟦2-char-id⟧++] = 65533 : ⟦2-char-id⟧ < 65536 ? ⟦2-char-id⟧[⟦2-char-id⟧++] = cJ : (⟦2-char-id⟧ -= 65536, ⟦2-char-id⟧[⟦2-char-id⟧++] = 55296 | ⟦2-char-id⟧ >> 10 & 1023, ⟦2-char-id⟧[⟦2-char-id⟧++] = 56320 | 1023 & ⟦2-char-id⟧)
+            ⟦2-char-id⟧ > 1 ? ⟦2-char-id⟧[⟦2-char-id⟧++] = 65533 : ⟦2-char-id⟧ < 65536 ? ⟦2-char-id⟧[⟦2-char-id⟧++] = TB : (⟦2-char-id⟧ -= 65536, ⟦2-char-id⟧[⟦2-char-id⟧++] = 55296 | ⟦2-char-id⟧ >> 10 & 1023, ⟦2-char-id⟧[⟦2-char-id⟧++] = 56320 | 1023 & ⟦2-char-id⟧)
           }
         }
         return ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-          if (⟦2-char-id⟧ < 65534 && ⟦2-char-id⟧.subarray && ⟦2-char-id⟧) return String.fromCharCode.apply(null, ⟦2-char-id⟧.length === ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.subarray(0, ⟦2-char-id⟧));
+          if (⟦2-char-id⟧ < 65534 && ⟦2-char-id⟧.subarray && ⟦2-char-id⟧) return String.fromCharCode.apply(null, ⟦2-char-id⟧.length === ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.subarray(0, ⟦2-char-id⟧));
           let ⟦2-char-id⟧ = "";
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ += String.fromCharCode(⟦2-char-id⟧[⟦2-char-id⟧]);
           return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 12 · Change · +2 / -2</summary>

```diff
@@ -635,10 +635,10 @@
         (⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧.length) > ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.length);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ - 1;
         for (; ⟦2-char-id⟧ >= 0 && 128 === (192 & ⟦2-char-id⟧[⟦2-char-id⟧]);) ⟦2-char-id⟧--;
-        return ⟦2-char-id⟧ < 0 || 0 === ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧ + ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] > ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧
+        return ⟦2-char-id⟧ < 0 || 0 === ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧ + ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] > ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧
       };
     var ⟦2-char-id⟧ = function() {
-      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.JY = "", this.state = null, this.data_type = 2, this.adler = 0
+      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.Jo = "", this.state = null, this.data_type = 2, this.adler = 0
     };
     const ⟦2-char-id⟧ = Object.prototype.toString,
       {
```

</details>

<details>
<summary>Hunk 13 · Change · +2 / -2</summary>

```diff
@@ -657,13 +657,13 @@
       this.options = ⟦2-char-id⟧({
         level: ⟦2-char-id⟧,
         method: ⟦2-char-id⟧,
-        Kn: 16384,
+        UD: 16384,
         windowBits: 15,
         memLevel: 8,
         strategy: ⟦2-char-id⟧
       }, ⟦2-char-id⟧ || {});
       let ⟦2-char-id⟧ = this.options;
-      ⟦2-char-id⟧.raw && ⟦2-char-id⟧.windowBits > 0 ? ⟦2-char-id⟧.windowBits = -⟦2-char-id⟧.windowBits : ⟦2-char-id⟧.gzip && ⟦2-char-id⟧.windowBits > 0 && ⟦2-char-id⟧.windowBits < 16 && (⟦2-char-id⟧.windowBits += 16), this.err = 0, this.JY = "", this.ended = !1, this.chunks = [], this.strm = new ⟦2-char-id⟧, this.strm.avail_out = 0;
+      ⟦2-char-id⟧.raw && ⟦2-char-id⟧.windowBits > 0 ? ⟦2-char-id⟧.windowBits = -⟦2-char-id⟧.windowBits : ⟦2-char-id⟧.gzip && ⟦2-char-id⟧.windowBits > 0 && ⟦2-char-id⟧.windowBits < 16 && (⟦2-char-id⟧.windowBits += 16), this.err = 0, this.Jo = "", this.ended = !1, this.chunks = [], this.strm = new ⟦2-char-id⟧, this.strm.avail_out = 0;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.deflateInit2(this.strm, ⟦2-char-id⟧.level, ⟦2-char-id⟧.method, ⟦2-char-id⟧.windowBits, ⟦2-char-id⟧.memLevel, ⟦2-char-id⟧.strategy);
       if (⟦2-char-id⟧ !== ⟦2-char-id⟧) throw new Error(⟦2-char-id⟧[⟦2-char-id⟧]);
       if (⟦2-char-id⟧.header && ⟦2-char-id⟧.deflateSetHeader(this.strm, ⟦2-char-id⟧.header), ⟦2-char-id⟧.dictionary) {
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -675,15 +675,15 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧);
-      if (⟦2-char-id⟧.push(⟦2-char-id⟧, !0), ⟦2-char-id⟧.err) throw ⟦2-char-id⟧.JY || ⟦2-char-id⟧[⟦2-char-id⟧.err];
+      if (⟦2-char-id⟧.push(⟦2-char-id⟧, !0), ⟦2-char-id⟧.err) throw ⟦2-char-id⟧.Jo || ⟦2-char-id⟧[⟦2-char-id⟧.err];
       return ⟦2-char-id⟧.result
     }
     ⟦2-char-id⟧.prototype.push = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = this.strm,
-        ⟦2-char-id⟧ = this.options.Kn;
+        ⟦2-char-id⟧ = this.options.UD;
       let ⟦2-char-id⟧, ⟦2-char-id⟧;
       if (this.ended) return !1;
-      for (⟦2-char-id⟧ = ⟦2-char-id⟧ === ~~⟦2-char-id⟧ ? cJ : !0 === ⟦2-char-id⟧ ? FZ : ⟦2-char-id⟧, "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.input = ⟦2-char-id⟧(⟦2-char-id⟧) : "[object ArrayBuffer]" === ⟦2-char-id⟧.call(⟦2-char-id⟧) ? ⟦2-char-id⟧.input = new Uint8Array(⟦2-char-id⟧) : ⟦2-char-id⟧.input = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = 0, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧.input.length;;)
+      for (⟦2-char-id⟧ = ⟦2-char-id⟧ === ~~⟦2-char-id⟧ ? TB : !0 === ⟦2-char-id⟧ ? Vd : ⟦2-char-id⟧, "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.input = ⟦2-char-id⟧(⟦2-char-id⟧) : "[object ArrayBuffer]" === ⟦2-char-id⟧.call(⟦2-char-id⟧) ? ⟦2-char-id⟧.input = new Uint8Array(⟦2-char-id⟧) : ⟦2-char-id⟧.input = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = 0, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧.input.length;;)
         if (0 === ⟦2-char-id⟧.avail_out && (⟦2-char-id⟧.output = new Uint8Array(⟦2-char-id⟧), ⟦2-char-id⟧.next_out = 0, ⟦2-char-id⟧.avail_out = ⟦2-char-id⟧), (⟦2-char-id⟧ === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧) && ⟦2-char-id⟧.avail_out <= 6) this.onData(⟦2-char-id⟧.output.subarray(0, ⟦2-char-id⟧.next_out)), ⟦2-char-id⟧.avail_out = 0;
         else {
           if (⟦2-char-id⟧ = ⟦2-char-id⟧.deflate(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ === ⟦2-char-id⟧) return ⟦2-char-id⟧.next_out > 0 && this.onData(⟦2-char-id⟧.output.subarray(0, ⟦2-char-id⟧.next_out)), ⟦2-char-id⟧ = ⟦2-char-id⟧.deflateEnd(this.strm), this.onEnd(⟦2-char-id⟧), this.ended = !0, ⟦2-char-id⟧ === ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -695,7 +695,7 @@
     }, ⟦2-char-id⟧.prototype.onData = function(⟦2-char-id⟧) {
       this.chunks.push(⟦2-char-id⟧)
     }, ⟦2-char-id⟧.prototype.onEnd = function(⟦2-char-id⟧) {
-      ⟦2-char-id⟧ === ⟦2-char-id⟧ && (this.result = ⟦2-char-id⟧(this.chunks)), this.chunks = [], this.err = ⟦2-char-id⟧, this.JY = this.strm.JY
+      ⟦2-char-id⟧ === ⟦2-char-id⟧ && (this.result = ⟦2-char-id⟧(this.chunks)), this.chunks = [], this.err = ⟦2-char-id⟧, this.Jo = this.strm.Jo
     };
     var ⟦2-char-id⟧ = {
       Deflate: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -712,9 +712,9 @@
       let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
       ⟦2-char-id⟧ = ⟦2-char-id⟧.next_in, ⟦2-char-id⟧ = ⟦2-char-id⟧.input, ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧.avail_in - 5), ⟦2-char-id⟧ = ⟦2-char-id⟧.next_out, ⟦2-char-id⟧ = ⟦2-char-id⟧.output, ⟦2-char-id⟧ = ⟦2-char-id⟧ - (⟦2-char-id⟧ - ⟦2-char-id⟧.avail_out), ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧.avail_out - 257), ⟦2-char-id⟧ = ⟦2-char-id⟧.dmax, ⟦2-char-id⟧ = ⟦2-char-id⟧.wsize, ⟦2-char-id⟧ = ⟦2-char-id⟧.whave, ⟦2-char-id⟧ = ⟦2-char-id⟧.wnext, ⟦2-char-id⟧ = ⟦2-char-id⟧.window, ⟦2-char-id⟧ = ⟦2-char-id⟧.hold, ⟦2-char-id⟧ = ⟦2-char-id⟧.bits, ⟦2-char-id⟧ = ⟦2-char-id⟧.lencode, ⟦2-char-id⟧ = ⟦2-char-id⟧.distcode, ⟦2-char-id⟧ = (1 << ⟦2-char-id⟧.lenbits) - 1, ⟦2-char-id⟧ = (1 << ⟦2-char-id⟧.distbits) - 1;
-      JJ: do {
+      BB: do {
         ⟦2-char-id⟧ < 15 && (⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ & ⟦2-char-id⟧];
-        cJ: for (;;) {
+        TB: for (;;) {
           if (⟦2-char-id⟧ = ⟦2-char-id⟧ >>> 24, ⟦2-char-id⟧ >>>= ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ >>> 16 & 255, 0 === ⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧++] = 65535 & ⟦2-char-id⟧;
           else {
             if (!(16 & ⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 17 · Change · +5 / -5</summary>

```diff
@@ -726,26 +726,26 @@
                 ⟦2-char-id⟧.mode = 12;
                 break ⟦2-char-id⟧
               }
-              ⟦2-char-id⟧.JY = "invalid literal/length code", ⟦2-char-id⟧.mode = 30;
+              ⟦2-char-id⟧.Jo = "invalid literal/length code", ⟦2-char-id⟧.mode = 30;
               break ⟦2-char-id⟧
             }
             ⟦2-char-id⟧ = 65535 & ⟦2-char-id⟧, ⟦2-char-id⟧ &= 15, ⟦2-char-id⟧ && (⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8), ⟦2-char-id⟧ += ⟦2-char-id⟧ & (1 << ⟦2-char-id⟧) - 1, ⟦2-char-id⟧ >>>= ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧), ⟦2-char-id⟧ < 15 && (⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ & ⟦2-char-id⟧];
-            ZJ: for (;;) {
+            dB: for (;;) {
               if (⟦2-char-id⟧ = ⟦2-char-id⟧ >>> 24, ⟦2-char-id⟧ >>>= ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ >>> 16 & 255, !(16 & ⟦2-char-id⟧)) {
                 if (0 === (64 & ⟦2-char-id⟧)) {
                   ⟦2-char-id⟧ = ⟦2-char-id⟧[(65535 & ⟦2-char-id⟧) + (⟦2-char-id⟧ & (1 << ⟦2-char-id⟧) - 1)];
                   continue ⟦2-char-id⟧
                 }
-                ⟦2-char-id⟧.JY = "invalid distance code", ⟦2-char-id⟧.mode = 30;
+                ⟦2-char-id⟧.Jo = "invalid distance code", ⟦2-char-id⟧.mode = 30;
                 break ⟦2-char-id⟧
               }
               if (⟦2-char-id⟧ = 65535 & ⟦2-char-id⟧, ⟦2-char-id⟧ &= 15, ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8, ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8)), ⟦2-char-id⟧ += ⟦2-char-id⟧ & (1 << ⟦2-char-id⟧) - 1, ⟦2-char-id⟧ > ⟦2-char-id⟧) {
-                ⟦2-char-id⟧.JY = "invalid distance too far back", ⟦2-char-id⟧.mode = 30;
+                ⟦2-char-id⟧.Jo = "invalid distance too far back", ⟦2-char-id⟧.mode = 30;
                 break ⟦2-char-id⟧
               }
               if (⟦2-char-id⟧ >>>= ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ > ⟦2-char-id⟧) {
                 if (⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧.sane) {
-                  ⟦2-char-id⟧.JY = "invalid distance too far back", ⟦2-char-id⟧.mode = 30;
+                  ⟦2-char-id⟧.Jo = "invalid distance too far back", ⟦2-char-id⟧.mode = 30;
                   break ⟦2-char-id⟧
                 }
                 if (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧, 0 === ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -866,7 +866,7 @@
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return ⟦2-char-id⟧.total_in = ⟦2-char-id⟧.total_out = ⟦2-char-id⟧.total = 0, ⟦2-char-id⟧.JY = "", ⟦2-char-id⟧.wrap && (⟦2-char-id⟧.adler = 1 & ⟦2-char-id⟧.wrap), ⟦2-char-id⟧.mode = 1, ⟦2-char-id⟧.last = 0, ⟦2-char-id⟧.havedict = 0, ⟦2-char-id⟧.dmax = 32768, ⟦2-char-id⟧.head = null, ⟦2-char-id⟧.hold = 0, ⟦2-char-id⟧.bits = 0, ⟦2-char-id⟧.lencode = ⟦2-char-id⟧.lendyn = new Int32Array(852), ⟦2-char-id⟧.distcode = ⟦2-char-id⟧.distdyn = new Int32Array(592), ⟦2-char-id⟧.sane = 1, ⟦2-char-id⟧.back = -1, ⟦2-char-id⟧
+        return ⟦2-char-id⟧.total_in = ⟦2-char-id⟧.total_out = ⟦2-char-id⟧.total = 0, ⟦2-char-id⟧.Jo = "", ⟦2-char-id⟧.wrap && (⟦2-char-id⟧.adler = 1 & ⟦2-char-id⟧.wrap), ⟦2-char-id⟧.mode = 1, ⟦2-char-id⟧.last = 0, ⟦2-char-id⟧.havedict = 0, ⟦2-char-id⟧.dmax = 32768, ⟦2-char-id⟧.head = null, ⟦2-char-id⟧.hold = 0, ⟦2-char-id⟧.bits = 0, ⟦2-char-id⟧.lencode = ⟦2-char-id⟧.lendyn = new Int32Array(852), ⟦2-char-id⟧.distcode = ⟦2-char-id⟧.distdyn = new Int32Array(592), ⟦2-char-id⟧.sane = 1, ⟦2-char-id⟧.back = -1, ⟦2-char-id⟧
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -877,7 +877,7 @@
         let ⟦2-char-id⟧;
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = -⟦2-char-id⟧) : (⟦2-char-id⟧ = 1 + (⟦2-char-id⟧ >> 4), ⟦2-char-id⟧ < 48 && (⟦2-char-id⟧ &= 15)), ⟦2-char-id⟧ && (⟦2-char-id⟧ < 8 || ⟦2-char-id⟧ > 15) ? yZ : (null !== ⟦2-char-id⟧.window && ⟦2-char-id⟧.wbits !== ⟦2-char-id⟧ && (⟦2-char-id⟧.window = null), ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, ⟦2-char-id⟧.wbits = ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧))
+        return ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = -⟦2-char-id⟧) : (⟦2-char-id⟧ = 1 + (⟦2-char-id⟧ >> 4), ⟦2-char-id⟧ < 48 && (⟦2-char-id⟧ &= 15)), ⟦2-char-id⟧ && (⟦2-char-id⟧ < 8 || ⟦2-char-id⟧ > 15) ? zd : (null !== ⟦2-char-id⟧.window && ⟦2-char-id⟧.wbits !== ⟦2-char-id⟧ && (⟦2-char-id⟧.window = null), ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, ⟦2-char-id⟧.wbits = ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧))
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -922,7 +922,7 @@
         const ⟦2-char-id⟧ = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state || !⟦2-char-id⟧.output || !⟦2-char-id⟧.input && 0 !== ⟦2-char-id⟧.avail_in) return ⟦2-char-id⟧;
         ⟦2-char-id⟧ = ⟦2-char-id⟧.state, ⟦2-char-id⟧.mode === ⟦2-char-id⟧ && (⟦2-char-id⟧.mode = 13), ⟦2-char-id⟧ = ⟦2-char-id⟧.next_out, ⟦2-char-id⟧ = ⟦2-char-id⟧.output, ⟦2-char-id⟧ = ⟦2-char-id⟧.avail_out, ⟦2-char-id⟧ = ⟦2-char-id⟧.next_in, ⟦2-char-id⟧ = ⟦2-char-id⟧.input, ⟦2-char-id⟧ = ⟦2-char-id⟧.avail_in, ⟦2-char-id⟧ = ⟦2-char-id⟧.hold, ⟦2-char-id⟧ = ⟦2-char-id⟧.bits, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧;
-        JJ: for (;;) switch (⟦2-char-id⟧.mode) {
+        BB: for (;;) switch (⟦2-char-id⟧.mode) {
           case 1:
             if (0 === ⟦2-char-id⟧.wrap) {
               ⟦2-char-id⟧.mode = 13;
```

</details>

<details>
<summary>Hunk 21 · Change · +3 / -3</summary>

```diff
@@ -937,16 +937,16 @@
               break
             }
             if (⟦2-char-id⟧.flags = 0, ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.done = !1), !(1 & ⟦2-char-id⟧.wrap) || (((255 & ⟦2-char-id⟧) << 8) + (⟦2-char-id⟧ >> 8)) % 31) {
-              ⟦2-char-id⟧.JY = "incorrect header check", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "incorrect header check", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             if ((15 & ⟦2-char-id⟧) !== ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.JY = "unknown compression method", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "unknown compression method", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             if (⟦2-char-id⟧ >>>= 4, ⟦2-char-id⟧ -= 4, ⟦2-char-id⟧ = 8 + (15 & ⟦2-char-id⟧), 0 === ⟦2-char-id⟧.wbits) ⟦2-char-id⟧.wbits = ⟦2-char-id⟧;
             else if (⟦2-char-id⟧ > ⟦2-char-id⟧.wbits) {
-              ⟦2-char-id⟧.JY = "invalid window size", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid window size", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             ⟦2-char-id⟧.dmax = 1 << ⟦2-char-id⟧.wbits, ⟦2-char-id⟧.adler = ⟦2-char-id⟧.check = 1, ⟦2-char-id⟧.mode = 512 & ⟦2-char-id⟧ ? 10 : ⟦2-char-id⟧, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 22 · Change · +2 / -2</summary>

```diff
@@ -957,11 +957,11 @@
               ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
             }
             if (⟦2-char-id⟧.flags = ⟦2-char-id⟧, (255 & ⟦2-char-id⟧.flags) !== ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.JY = "unknown compression method", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "unknown compression method", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             if (57344 & ⟦2-char-id⟧.flags) {
-              ⟦2-char-id⟧.JY = "unknown header flags set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "unknown header flags set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.text = ⟦2-char-id⟧ >> 8 & 1), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, ⟦2-char-id⟧, 2, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 3;
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -1016,7 +1016,7 @@
                 ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
               }
               if (⟦2-char-id⟧ !== (65535 & ⟦2-char-id⟧.check)) {
-                ⟦2-char-id⟧.JY = "header crc mismatch", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+                ⟦2-char-id⟧.Jo = "header crc mismatch", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
                 break
               }
               ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -1032,7 +1032,7 @@
           case 11:
             if (0 === ⟦2-char-id⟧.havedict) return ⟦2-char-id⟧.next_out = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_out = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.hold = ⟦2-char-id⟧, ⟦2-char-id⟧.bits = ⟦2-char-id⟧, ⟦2-char-id⟧;
             ⟦2-char-id⟧.adler = ⟦2-char-id⟧.check = 1, ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
-          case wZ:
+          case rd:
             if (⟦2-char-id⟧ === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧) break ⟦2-char-id⟧;
           case 13:
             if (⟦2-char-id⟧.last) {
```

</details>

<details>
<summary>Hunk 25 · Change · +1 / -1</summary>

```diff
@@ -1057,7 +1057,7 @@
                 ⟦2-char-id⟧.mode = 17;
                 break;
               case 3:
-                ⟦2-char-id⟧.JY = "invalid block type", ⟦2-char-id⟧.mode = ⟦2-char-id⟧
+                ⟦2-char-id⟧.Jo = "invalid block type", ⟦2-char-id⟧.mode = ⟦2-char-id⟧
             }
             ⟦2-char-id⟧ >>>= 2, ⟦2-char-id⟧ -= 2;
             break;
```

</details>

<details>
<summary>Hunk 26 · Change · +1 / -1</summary>

```diff
@@ -1067,7 +1067,7 @@
               ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
             }
             if ((65535 & ⟦2-char-id⟧) !== (⟦2-char-id⟧ >>> 16 ^ 65535)) {
-              ⟦2-char-id⟧.JY = "invalid stored block lengths", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid stored block lengths", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             if (⟦2-char-id⟧.length = 65535 & ⟦2-char-id⟧, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 15, ⟦2-char-id⟧ === ⟦2-char-id⟧) break ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 27 · Change · +1 / -1</summary>

```diff
@@ -1087,7 +1087,7 @@
               ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
             }
             if (⟦2-char-id⟧.nlen = 257 + (31 & ⟦2-char-id⟧), ⟦2-char-id⟧ >>>= 5, ⟦2-char-id⟧ -= 5, ⟦2-char-id⟧.ndist = 1 + (31 & ⟦2-char-id⟧), ⟦2-char-id⟧ >>>= 5, ⟦2-char-id⟧ -= 5, ⟦2-char-id⟧.ncode = 4 + (15 & ⟦2-char-id⟧), ⟦2-char-id⟧ >>>= 4, ⟦2-char-id⟧ -= 4, ⟦2-char-id⟧.nlen > 286 || ⟦2-char-id⟧.ndist > 30) {
-              ⟦2-char-id⟧.JY = "too many length or distance symbols", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "too many length or distance symbols", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             ⟦2-char-id⟧.have = 0, ⟦2-char-id⟧.mode = 18;
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -1103,7 +1103,7 @@
             if (⟦2-char-id⟧.lencode = ⟦2-char-id⟧.lendyn, ⟦2-char-id⟧.lenbits = 7, ⟦2-char-id⟧ = {
                 bits: ⟦2-char-id⟧.lenbits
               }, ⟦2-char-id⟧ = ⟦2-char-id⟧(0, ⟦2-char-id⟧.lens, 0, 19, ⟦2-char-id⟧.lencode, 0, ⟦2-char-id⟧.work, ⟦2-char-id⟧), ⟦2-char-id⟧.lenbits = ⟦2-char-id⟧.bits, ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.JY = "invalid code lengths set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid code lengths set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             ⟦2-char-id⟧.have = 0, ⟦2-char-id⟧.mode = 19;
```

</details>

<details>
<summary>Hunk 29 · Change · +1 / -1</summary>

```diff
@@ -1121,7 +1121,7 @@
                     ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
                   }
                   if (⟦2-char-id⟧ >>>= ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧, 0 === ⟦2-char-id⟧.have) {
-                    ⟦2-char-id⟧.JY = "invalid bit length repeat", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+                    ⟦2-char-id⟧.Jo = "invalid bit length repeat", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
                     break
                   }
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.lens[⟦2-char-id⟧.have - 1], ⟦2-char-id⟧ = 3 + (3 & ⟦2-char-id⟧), ⟦2-char-id⟧ >>>= 2, ⟦2-char-id⟧ -= 2
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -1139,7 +1139,7 @@
                   ⟦2-char-id⟧ >>>= ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 11 + (127 & ⟦2-char-id⟧), ⟦2-char-id⟧ >>>= 7, ⟦2-char-id⟧ -= 7
                 }
                 if (⟦2-char-id⟧.have + ⟦2-char-id⟧ > ⟦2-char-id⟧.nlen + ⟦2-char-id⟧.ndist) {
-                  ⟦2-char-id⟧.JY = "invalid bit length repeat", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+                  ⟦2-char-id⟧.Jo = "invalid bit length repeat", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
                   break
                 }
                 for (; ⟦2-char-id⟧--;) ⟦2-char-id⟧.lens[⟦2-char-id⟧.have++] = ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 31 · Change · +3 / -3</summary>

```diff
@@ -1147,19 +1147,19 @@
             }
             if (⟦2-char-id⟧.mode === ⟦2-char-id⟧) break;
             if (0 === ⟦2-char-id⟧.lens[256]) {
-              ⟦2-char-id⟧.JY = "invalid code -- missing end-of-block", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid code -- missing end-of-block", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             if (⟦2-char-id⟧.lenbits = 9, ⟦2-char-id⟧ = {
                 bits: ⟦2-char-id⟧.lenbits
               }, ⟦2-char-id⟧ = ⟦2-char-id⟧(1, ⟦2-char-id⟧.lens, 0, ⟦2-char-id⟧.nlen, ⟦2-char-id⟧.lencode, 0, ⟦2-char-id⟧.work, ⟦2-char-id⟧), ⟦2-char-id⟧.lenbits = ⟦2-char-id⟧.bits, ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.JY = "invalid literal/lengths set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid literal/lengths set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             if (⟦2-char-id⟧.distbits = 6, ⟦2-char-id⟧.distcode = ⟦2-char-id⟧.distdyn, ⟦2-char-id⟧ = {
                 bits: ⟦2-char-id⟧.distbits
               }, ⟦2-char-id⟧ = ⟦2-char-id⟧(2, ⟦2-char-id⟧.lens, ⟦2-char-id⟧.nlen, ⟦2-char-id⟧.ndist, ⟦2-char-id⟧.distcode, 0, ⟦2-char-id⟧.work, ⟦2-char-id⟧), ⟦2-char-id⟧.distbits = ⟦2-char-id⟧.bits, ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.JY = "invalid distances set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid distances set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             if (⟦2-char-id⟧.mode = 20, ⟦2-char-id⟧ === ⟦2-char-id⟧) break ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

```diff
@@ -1190,7 +1190,7 @@
               break
             }
             if (64 & ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.JY = "invalid literal/length code", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid literal/length code", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             ⟦2-char-id⟧.extra = 15 & ⟦2-char-id⟧, ⟦2-char-id⟧.mode = 22;
```

</details>

<details>
<summary>Hunk 33 · Change · +1 / -1</summary>

```diff
@@ -1216,7 +1216,7 @@
               ⟦2-char-id⟧ >>>= ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧.back += ⟦2-char-id⟧
             }
             if (⟦2-char-id⟧ >>>= ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧.back += ⟦2-char-id⟧, 64 & ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.JY = "invalid distance code", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid distance code", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             ⟦2-char-id⟧.offset = ⟦2-char-id⟧, ⟦2-char-id⟧.extra = 15 & ⟦2-char-id⟧, ⟦2-char-id⟧.mode = 24;
```

</details>

<details>
<summary>Hunk 34 · Change · +1 / -1</summary>

```diff
@@ -1229,7 +1229,7 @@
               ⟦2-char-id⟧.offset += ⟦2-char-id⟧ & (1 << ⟦2-char-id⟧.extra) - 1, ⟦2-char-id⟧ >>>= ⟦2-char-id⟧.extra, ⟦2-char-id⟧ -= ⟦2-char-id⟧.extra, ⟦2-char-id⟧.back += ⟦2-char-id⟧.extra
             }
             if (⟦2-char-id⟧.offset > ⟦2-char-id⟧.dmax) {
-              ⟦2-char-id⟧.JY = "invalid distance too far back", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "invalid distance too far back", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             ⟦2-char-id⟧.mode = 25;
```

</details>

<details>
<summary>Hunk 35 · Change · +1 / -1</summary>

```diff
@@ -1237,7 +1237,7 @@
             if (0 === ⟦2-char-id⟧) break ⟦2-char-id⟧;
             if (⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧.offset > ⟦2-char-id⟧) {
               if (⟦2-char-id⟧ = ⟦2-char-id⟧.offset - ⟦2-char-id⟧, ⟦2-char-id⟧ > ⟦2-char-id⟧.whave && ⟦2-char-id⟧.sane) {
-                ⟦2-char-id⟧.JY = "invalid distance too far back", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+                ⟦2-char-id⟧.Jo = "invalid distance too far back", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
                 break
               }
               ⟦2-char-id⟧ > ⟦2-char-id⟧.wnext ? (⟦2-char-id⟧ -= ⟦2-char-id⟧.wnext, ⟦2-char-id⟧ = ⟦2-char-id⟧.wsize - ⟦2-char-id⟧) : ⟦2-char-id⟧ = ⟦2-char-id⟧.wnext - ⟦2-char-id⟧, ⟦2-char-id⟧ > ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.length), ⟦2-char-id⟧ = ⟦2-char-id⟧.window
```

</details>

<details>
<summary>Hunk 36 · Change · +2 / -2</summary>

```diff
@@ -1258,8 +1258,8 @@
                 if (0 === ⟦2-char-id⟧) break ⟦2-char-id⟧;
                 ⟦2-char-id⟧--, ⟦2-char-id⟧ |= ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
               }
-              if (⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧.total_out += ⟦2-char-id⟧, ⟦2-char-id⟧.total += ⟦2-char-id⟧, ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧.check = ⟦2-char-id⟧.flags ? ⟦2-char-id⟧(⟦2-char-id⟧.check, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧.check, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧, (⟦2-char-id⟧.flags ? jJ : ⟦2-char-id⟧(⟦2-char-id⟧)) !== ⟦2-char-id⟧.check) {
-                ⟦2-char-id⟧.JY = "incorrect data check", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              if (⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧.total_out += ⟦2-char-id⟧, ⟦2-char-id⟧.total += ⟦2-char-id⟧, ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧.check = ⟦2-char-id⟧.flags ? ⟦2-char-id⟧(⟦2-char-id⟧.check, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧.check, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧, (⟦2-char-id⟧.flags ? gB : ⟦2-char-id⟧(⟦2-char-id⟧)) !== ⟦2-char-id⟧.check) {
+                ⟦2-char-id⟧.Jo = "incorrect data check", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
                 break
               }
               ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0
```

</details>

<details>
<summary>Hunk 37 · Change · +1 / -1</summary>

```diff
@@ -1272,7 +1272,7 @@
                 ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
               }
               if (⟦2-char-id⟧ !== (4294967295 & ⟦2-char-id⟧.total)) {
-                ⟦2-char-id⟧.JY = "incorrect length check", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+                ⟦2-char-id⟧.Jo = "incorrect length check", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
                 break
               }
               ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0
```

</details>

<details>
<summary>Hunk 38 · Change · +1 / -1</summary>

```diff
@@ -1281,7 +1281,7 @@
           case 29:
             ⟦2-char-id⟧ = ⟦2-char-id⟧;
             break ⟦2-char-id⟧;
-          case WZ:
+          case Id:
             ⟦2-char-id⟧ = ⟦2-char-id⟧;
             break ⟦2-char-id⟧;
           case 31:
```

</details>

<details>
<summary>Hunk 39 · Change · +2 / -2</summary>

```diff
@@ -1299,12 +1299,12 @@
       inflateGetHeader: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return 0 === (2 & ⟦2-char-id⟧.wrap) ? yZ : (⟦2-char-id⟧.head = ⟦2-char-id⟧, ⟦2-char-id⟧.done = !1, ⟦2-char-id⟧)
+        return 0 === (2 & ⟦2-char-id⟧.wrap) ? zd : (⟦2-char-id⟧.head = ⟦2-char-id⟧, ⟦2-char-id⟧.done = !1, ⟦2-char-id⟧)
       },
       inflateSetDictionary: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
         let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return ⟦2-char-id⟧ && ⟦2-char-id⟧.state ? (⟦2-char-id⟧ = ⟦2-char-id⟧.state, 0 !== ⟦2-char-id⟧.wrap && 11 !== ⟦2-char-id⟧.mode ? yZ : 11 === ⟦2-char-id⟧.mode && (⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, 0), ⟦2-char-id⟧ !== ⟦2-char-id⟧.check) ? SZ : (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ ? (⟦2-char-id⟧.mode = 31, ⟦2-char-id⟧) : (⟦2-char-id⟧.havedict = 1, ⟦2-char-id⟧))) : ⟦2-char-id⟧
+        return ⟦2-char-id⟧ && ⟦2-char-id⟧.state ? (⟦2-char-id⟧ = ⟦2-char-id⟧.state, 0 !== ⟦2-char-id⟧.wrap && 11 !== ⟦2-char-id⟧.mode ? zd : 11 === ⟦2-char-id⟧.mode && (⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, 0), ⟦2-char-id⟧ !== ⟦2-char-id⟧.check) ? wd : (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ ? (⟦2-char-id⟧.mode = 31, ⟦2-char-id⟧) : (⟦2-char-id⟧.havedict = 1, ⟦2-char-id⟧))) : ⟦2-char-id⟧
       },
       inflateInfo: "pako inflate (from Nodeca project)"
     };
```

</details>

<details>
<summary>Hunk 40 · Change · +2 / -2</summary>

```diff
@@ -1325,12 +1325,12 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       this.options = ⟦2-char-id⟧({
-        Kn: 65536,
+        UD: 65536,
         windowBits: 15,
         to: ""
       }, ⟦2-char-id⟧ || {});
       const ⟦2-char-id⟧ = this.options;
-      ⟦2-char-id⟧.raw && ⟦2-char-id⟧.windowBits >= 0 && ⟦2-char-id⟧.windowBits < 16 && (⟦2-char-id⟧.windowBits = -⟦2-char-id⟧.windowBits, 0 === ⟦2-char-id⟧.windowBits && (⟦2-char-id⟧.windowBits = -15)), !(⟦2-char-id⟧.windowBits >= 0 && ⟦2-char-id⟧.windowBits < 16) || ⟦2-char-id⟧ && ⟦2-char-id⟧.windowBits || (⟦2-char-id⟧.windowBits += 32), ⟦2-char-id⟧.windowBits > 15 && ⟦2-char-id⟧.windowBits < 48 && 0 === (15 & ⟦2-char-id⟧.windowBits) && (⟦2-char-id⟧.windowBits |= 15), this.err = 0, this.JY = "", this.ended = !1, this.chunks = [], this.strm = new ⟦2-char-id⟧, this.strm.avail_out = 0;
+      ⟦2-char-id⟧.raw && ⟦2-char-id⟧.windowBits >= 0 && ⟦2-char-id⟧.windowBits < 16 && (⟦2-char-id⟧.windowBits = -⟦2-char-id⟧.windowBits, 0 === ⟦2-char-id⟧.windowBits && (⟦2-char-id⟧.windowBits = -15)), !(⟦2-char-id⟧.windowBits >= 0 && ⟦2-char-id⟧.windowBits < 16) || ⟦2-char-id⟧ && ⟦2-char-id⟧.windowBits || (⟦2-char-id⟧.windowBits += 32), ⟦2-char-id⟧.windowBits > 15 && ⟦2-char-id⟧.windowBits < 48 && 0 === (15 & ⟦2-char-id⟧.windowBits) && (⟦2-char-id⟧.windowBits |= 15), this.err = 0, this.Jo = "", this.ended = !1, this.chunks = [], this.strm = new ⟦2-char-id⟧, this.strm.avail_out = 0;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.inflateInit2(this.strm, ⟦2-char-id⟧.windowBits);
       if (⟦2-char-id⟧ !== ⟦2-char-id⟧) throw new Error(⟦2-char-id⟧[⟦2-char-id⟧]);
       if (this.header = new ⟦2-char-id⟧, ⟦2-char-id⟧.inflateGetHeader(this.strm, this.header), ⟦2-char-id⟧.dictionary && ("string" === typeof ⟦2-char-id⟧.dictionary ? ⟦2-char-id⟧.dictionary = ⟦2-char-id⟧(⟦2-char-id⟧.dictionary) : "[object ArrayBuffer]" === ⟦2-char-id⟧.call(⟦2-char-id⟧.dictionary) && (⟦2-char-id⟧.dictionary = new Uint8Array(⟦2-char-id⟧.dictionary)), ⟦2-char-id⟧.raw && (⟦2-char-id⟧ = ⟦2-char-id⟧.inflateSetDictionary(this.strm, ⟦2-char-id⟧.dictionary), ⟦2-char-id⟧ !== ⟦2-char-id⟧))) throw new Error(⟦2-char-id⟧[⟦2-char-id⟧])
```

</details>

<details>
<summary>Hunk 41 · Change · +7 / -7</summary>

```diff
@@ -1338,22 +1338,22 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧);
-      if (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.err) throw ⟦2-char-id⟧.JY || ⟦2-char-id⟧[⟦2-char-id⟧.err];
+      if (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.err) throw ⟦2-char-id⟧.Jo || ⟦2-char-id⟧[⟦2-char-id⟧.err];
       return ⟦2-char-id⟧.result
     }
     ⟦2-char-id⟧.prototype.push = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = this.strm,
-        ⟦2-char-id⟧ = this.options.Kn,
+        ⟦2-char-id⟧ = this.options.UD,
         ⟦2-char-id⟧ = this.options.dictionary;
       let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
       if (this.ended) return !1;
-      for (⟦2-char-id⟧ = ⟦2-char-id⟧ === ~~⟦2-char-id⟧ ? cJ : !0 === ⟦2-char-id⟧ ? aZ : ⟦2-char-id⟧, "[object ArrayBuffer]" === ⟦2-char-id⟧.call(⟦2-char-id⟧) ? ⟦2-char-id⟧.input = new Uint8Array(⟦2-char-id⟧) : ⟦2-char-id⟧.input = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = 0, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧.input.length;;) {
+      for (⟦2-char-id⟧ = ⟦2-char-id⟧ === ~~⟦2-char-id⟧ ? TB : !0 === ⟦2-char-id⟧ ? Ad : ⟦2-char-id⟧, "[object ArrayBuffer]" === ⟦2-char-id⟧.call(⟦2-char-id⟧) ? ⟦2-char-id⟧.input = new Uint8Array(⟦2-char-id⟧) : ⟦2-char-id⟧.input = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = 0, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧.input.length;;) {
         for (0 === ⟦2-char-id⟧.avail_out && (⟦2-char-id⟧.output = new Uint8Array(⟦2-char-id⟧), ⟦2-char-id⟧.next_out = 0, ⟦2-char-id⟧.avail_out = ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.inflate(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.inflateSetDictionary(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧.inflate(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧)); ⟦2-char-id⟧.avail_in > 0 && ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧.state.wrap > 0 && 0 !== ⟦2-char-id⟧[⟦2-char-id⟧.next_in];) ⟦2-char-id⟧.inflateReset(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.inflate(⟦2-char-id⟧, ⟦2-char-id⟧);
         switch (⟦2-char-id⟧) {
-          case lZ:
-          case JF:
-          case oZ:
-          case cF:
+          case BV:
+          case TV:
+          case ed:
+          case dV:
             return this.onEnd(⟦2-char-id⟧), this.ended = !0, !1
         }
         if (⟦2-char-id⟧ = ⟦2-char-id⟧.avail_out, ⟦2-char-id⟧.next_out && (0 === ⟦2-char-id⟧.avail_out || ⟦2-char-id⟧ === ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 42 · Change · +1 / -1</summary>

```diff
@@ -1372,7 +1372,7 @@
     }, ⟦2-char-id⟧.prototype.onData = function(⟦2-char-id⟧) {
       this.chunks.push(⟦2-char-id⟧)
     }, ⟦2-char-id⟧.prototype.onEnd = function(⟦2-char-id⟧) {
-      ⟦2-char-id⟧ === ⟦2-char-id⟧ && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = ⟦2-char-id⟧(this.chunks)), this.chunks = [], this.err = ⟦2-char-id⟧, this.JY = this.strm.JY
+      ⟦2-char-id⟧ === ⟦2-char-id⟧ && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = ⟦2-char-id⟧(this.chunks)), this.chunks = [], this.err = ⟦2-char-id⟧, this.Jo = this.strm.Jo
     };
     var ⟦2-char-id⟧ = {
       Inflate: ⟦2-char-id⟧,
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/207.js</code> · modified · +355 / -363</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +4 / -4</summary>

```diff
@@ -1,12 +1,12 @@
 export const ⟦2-char-id⟧ = 207;
 export const ids = [207];
 export const modules = {
-  37458: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37420: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(157),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36618);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(184),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36552);
     const ⟦2-char-id⟧ = 1.2,
       ⟦2-char-id⟧ = {
         poseRig: "golem",
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -20,8 +20,8 @@
         },
         eyeHeight: 2.3,
         rideHeight: 2.3,
-        Oj: .5,
-        scJ: !1
+        ho: .5,
+        CTB: !1
       },
       ⟦2-char-id⟧ = {
         physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 3 · Change · +11 / -11</summary>

```diff
@@ -34,22 +34,22 @@
         },
         eyeHeight: 2.3,
         rideHeight: 2.3,
-        Oj: .5,
-        scJ: !1
+        ho: .5,
+        CTB: !1
       },
       ⟦2-char-id⟧ = {
         physicsBodyDimensions: {
-          width: ⟦2-char-id⟧.c.Av,
-          height: ⟦2-char-id⟧.c.Dv
+          width: ⟦2-char-id⟧.c.lE,
+          height: ⟦2-char-id⟧.c.kE
         },
         hitBoxDimensions: {
-          width: ⟦2-char-id⟧.c.Av + .4,
-          height: ⟦2-char-id⟧.c.Dv + .6
-        },
-        eyeHeight: ⟦2-char-id⟧.c.Dv * ⟦2-char-id⟧.c.playerEyeToHeightRatio,
-        rideHeight: ⟦2-char-id⟧.c.Dv - .3,
-        Oj: .5,
-        scJ: !1
+          width: ⟦2-char-id⟧.c.lE + .4,
+          height: ⟦2-char-id⟧.c.kE + .6
+        },
+        eyeHeight: ⟦2-char-id⟧.c.kE * ⟦2-char-id⟧.c.playerEyeToHeightRatio,
+        rideHeight: ⟦2-char-id⟧.c.kE - .3,
+        ho: .5,
+        CTB: !1
       },
       ⟦2-char-id⟧ = {
         physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -62,8 +62,8 @@
         },
         eyeHeight: .9,
         rideHeight: .5,
-        Oj: .5,
-        scJ: !1
+        ho: .5,
+        CTB: !1
       },
       ⟦2-char-id⟧ = {
         physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -76,8 +76,8 @@
         },
         eyeHeight: 1.3,
         rideHeight: 1.3,
-        Oj: .5,
-        scJ: !1
+        ho: .5,
+        CTB: !1
       },
       ⟦2-char-id⟧ = {
         physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 6 · Change · +2 / -2</summary>

```diff
@@ -90,8 +90,8 @@
         },
         eyeHeight: 1.9,
         rideHeight: 1,
-        Oj: .5,
-        scJ: !1
+        ho: .5,
+        CTB: !1
       },
       ⟦2-char-id⟧ = {
         physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 7 · Change · +13 / -13</summary>

```diff
@@ -104,24 +104,24 @@
         },
         eyeHeight: 2,
         rideHeight: 1.8,
-        Oj: .5,
-        scJ: !1
+        ho: .5,
+        CTB: !1
       },
       ⟦2-char-id⟧ = {
         Player: {
           defaultName: "Player",
           physicsBodyDimensions: {
-            width: ⟦2-char-id⟧.c.Av,
-            height: ⟦2-char-id⟧.c.Dv
-          },
-          hitBoxDimensions: {
-            width: ⟦2-char-id⟧.c.Av + .4,
-            height: ⟦2-char-id⟧.c.Dv + .6
-          },
-          eyeHeight: ⟦2-char-id⟧.c.Dv * ⟦2-char-id⟧.c.playerEyeToHeightRatio,
-          rideHeight: ⟦2-char-id⟧.c.Dv - .1,
-          Oj: ⟦2-char-id⟧.e.Oj,
-          scJ: !0
+            width: ⟦2-char-id⟧.c.lE,
+            height: ⟦2-char-id⟧.c.kE
+          },
+          hitBoxDimensions: {
+            width: ⟦2-char-id⟧.c.lE + .4,
+            height: ⟦2-char-id⟧.c.kE + .6
+          },
+          eyeHeight: ⟦2-char-id⟧.c.kE * ⟦2-char-id⟧.c.playerEyeToHeightRatio,
+          rideHeight: ⟦2-char-id⟧.c.kE - .1,
+          ho: ⟦2-char-id⟧.i.ho,
+          CTB: !0
         },
         Pig: {
           poseNameRise: {
```

</details>

<details>
<summary>Hunk 8 · Change · +2 / -2</summary>

```diff
@@ -137,8 +137,8 @@
           },
           eyeHeight: .8,
           rideHeight: .5,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Cow: {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 9 · Change · +2 / -2</summary>

```diff
@@ -151,8 +151,8 @@
           },
           eyeHeight: 1.2,
           rideHeight: 1,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Sheep: {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 10 · Change · +2 / -2</summary>

```diff
@@ -165,8 +165,8 @@
           },
           eyeHeight: 1.2,
           rideHeight: .8,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Horse: {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -179,8 +179,8 @@
           },
           eyeHeight: 1.9,
           rideHeight: .9,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Camel: {
           modelScale: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 12 · Change · +2 / -2</summary>

```diff
@@ -194,8 +194,8 @@
           },
           eyeHeight: 2.52,
           rideHeight: 1.7999999999999998,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Slime: {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 13 · Change · +11 / -11</summary>

```diff
@@ -208,34 +208,34 @@
           },
           eyeHeight: .5,
           rideHeight: .5,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Cave Golem": ⟦2-char-id⟧,
         "Draugr Zombie": {
-          ...qJ,
+          ...YB,
           defaultPose: "zombie"
         },
         "Draugr Skeleton": ⟦2-char-id⟧,
         "Frost Golem": ⟦2-char-id⟧,
         "Frost Zombie": {
-          ...qJ,
+          ...YB,
           defaultPose: "zombie"
         },
         "Frost Skeleton": ⟦2-char-id⟧,
         "Draugr Knight": {
           physicsBodyDimensions: {
-            width: ⟦2-char-id⟧.c.Av,
-            height: ⟦2-char-id⟧.c.Dv
-          },
-          hitBoxDimensions: {
-            width: ⟦2-char-id⟧.c.Av + .4,
+            width: ⟦2-char-id⟧.c.lE,
+            height: ⟦2-char-id⟧.c.kE
+          },
+          hitBoxDimensions: {
+            width: ⟦2-char-id⟧.c.lE + .4,
             height: 2.8
           },
           eyeHeight: 1.9,
           rideHeight: 1.8,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Wolf: ⟦2-char-id⟧,
         Bear: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 14 · Change · +2 / -2</summary>

```diff
@@ -250,8 +250,8 @@
           },
           eyeHeight: 1.8,
           rideHeight: .8,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Stag: ⟦2-char-id⟧,
         "Gold Watermelon Stag": {
```

</details>

<details>
<summary>Hunk 15 · Change · +2 / -2</summary>

```diff
@@ -265,8 +265,8 @@
           },
           eyeHeight: 1.9,
           rideHeight: 1,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Gorilla: ⟦2-char-id⟧,
         Wildcat: {
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -280,8 +280,8 @@
           },
           eyeHeight: .55,
           rideHeight: .4,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Draugr Huntress": ⟦2-char-id⟧,
         "Magma Golem": ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -301,8 +301,8 @@
           },
           eyeHeight: 2.4,
           rideHeight: 2.8,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Frost Wraith": {
           poseRig: "wraith",
```

</details>

<details>
<summary>Hunk 18 · Change · +2 / -2</summary>

```diff
@@ -316,8 +316,8 @@
           },
           eyeHeight: 2.3,
           rideHeight: 2.6,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Draugr Reaver": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 19 · Change · +13 / -13</summary>

```diff
@@ -330,22 +330,22 @@
           },
           eyeHeight: 2.2,
           rideHeight: 2.5,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         NPC: {
           physicsBodyDimensions: {
-            width: ⟦2-char-id⟧.c.Av,
-            height: ⟦2-char-id⟧.c.Dv
-          },
-          hitBoxDimensions: {
-            width: ⟦2-char-id⟧.c.Av + .4,
-            height: ⟦2-char-id⟧.c.Dv + .6
-          },
-          eyeHeight: ⟦2-char-id⟧.c.Dv * ⟦2-char-id⟧.c.playerEyeToHeightRatio,
-          rideHeight: ⟦2-char-id⟧.c.Dv - .1,
-          Oj: .5,
-          scJ: !1
+            width: ⟦2-char-id⟧.c.lE,
+            height: ⟦2-char-id⟧.c.kE
+          },
+          hitBoxDimensions: {
+            width: ⟦2-char-id⟧.c.lE + .4,
+            height: ⟦2-char-id⟧.c.kE + .6
+          },
+          eyeHeight: ⟦2-char-id⟧.c.kE * ⟦2-char-id⟧.c.playerEyeToHeightRatio,
+          rideHeight: ⟦2-char-id⟧.c.kE - .1,
+          ho: .5,
+          CTB: !1
         },
         67: {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 20 · Change · +13 / -13</summary>

```diff
@@ -358,22 +358,22 @@
           },
           eyeHeight: 1.9,
           rideHeight: 2.5,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Bobino Musculino": {
           physicsBodyDimensions: {
-            width: ⟦2-char-id⟧.c.Av,
-            height: ⟦2-char-id⟧.c.Dv
-          },
-          hitBoxDimensions: {
-            width: ⟦2-char-id⟧.c.Av + .4,
-            height: ⟦2-char-id⟧.c.Dv + .6
-          },
-          eyeHeight: ⟦2-char-id⟧.c.Dv * ⟦2-char-id⟧.c.playerEyeToHeightRatio,
-          rideHeight: ⟦2-char-id⟧.c.Dv - .1,
-          Oj: .5,
-          scJ: !1
+            width: ⟦2-char-id⟧.c.lE,
+            height: ⟦2-char-id⟧.c.kE
+          },
+          hitBoxDimensions: {
+            width: ⟦2-char-id⟧.c.lE + .4,
+            height: ⟦2-char-id⟧.c.kE + .6
+          },
+          eyeHeight: ⟦2-char-id⟧.c.kE * ⟦2-char-id⟧.c.playerEyeToHeightRatio,
+          rideHeight: ⟦2-char-id⟧.c.kE - .1,
+          ho: .5,
+          CTB: !1
         },
         "Capitano Explovissimo": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -386,8 +386,8 @@
           },
           eyeHeight: 1.5,
           rideHeight: 2,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Desert Fennec": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 22 · Change · +2 / -2</summary>

```diff
@@ -400,8 +400,8 @@
           },
           eyeHeight: .65,
           rideHeight: .6,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Armour Collector": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 23 · Change · +2 / -2</summary>

```diff
@@ -414,8 +414,8 @@
           },
           eyeHeight: 3.1,
           rideHeight: 3.6,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Furnace Knight": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 24 · Change · +2 / -2</summary>

```diff
@@ -428,8 +428,8 @@
           },
           eyeHeight: 2,
           rideHeight: 2.45,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Lil Knight": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 25 · Change · +2 / -2</summary>

```diff
@@ -442,8 +442,8 @@
           },
           eyeHeight: 2,
           rideHeight: 2.5,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Glass Gremlin": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 26 · Change · +2 / -2</summary>

```diff
@@ -456,8 +456,8 @@
           },
           eyeHeight: 2.2,
           rideHeight: 2.55,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Glass Bro": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 27 · Change · +2 / -2</summary>

```diff
@@ -470,8 +470,8 @@
           },
           eyeHeight: 1.8,
           rideHeight: 2.1,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Lord Vulcan": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 28 · Change · +4 / -4</summary>

```diff
@@ -484,16 +484,16 @@
           },
           eyeHeight: 4.1,
           rideHeight: 5.4,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Zombie: {
-          ...qJ,
+          ...YB,
           defaultPose: "zombie"
         },
         Skeleton: ⟦2-char-id⟧,
         Mummy: {
-          ...qJ,
+          ...YB,
           defaultPose: "zombie"
         },
         Scorpion: {
```

</details>

<details>
<summary>Hunk 29 · Change · +2 / -2</summary>

```diff
@@ -507,8 +507,8 @@
           },
           eyeHeight: .6,
           rideHeight: .9,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Vulcanite: {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 30 · Change · +2 / -2</summary>

```diff
@@ -521,8 +521,8 @@
           },
           eyeHeight: 1.6,
           rideHeight: 2.1,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Evil Tome": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 31 · Change · +2 / -2</summary>

```diff
@@ -535,8 +535,8 @@
           },
           eyeHeight: .6,
           rideHeight: .95,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Magma Toad": {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 32 · Change · +2 / -2</summary>

```diff
@@ -549,8 +549,8 @@
           },
           eyeHeight: 1,
           rideHeight: 1.1,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Stalker: {
           physicsBodyDimensions: {
```

</details>

<details>
<summary>Hunk 33 · Change · +2 / -2</summary>

```diff
@@ -563,8 +563,8 @@
           },
           eyeHeight: 2.4,
           rideHeight: 2.5,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         Crone: {
           turnRate: 1.2,
```

</details>

<details>
<summary>Hunk 34 · Change · +2 / -2</summary>

```diff
@@ -578,8 +578,8 @@
           },
           eyeHeight: 2.7,
           rideHeight: 2.8,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         },
         "Iron Guardian": ⟦2-char-id⟧,
         "Gold Guardian": ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 35 · Change · +2 / -2</summary>

```diff
@@ -601,8 +601,8 @@
           },
           eyeHeight: 3.9,
           rideHeight: 4.3,
-          Oj: .5,
-          scJ: !1
+          ho: .5,
+          CTB: !1
         }
       };
 
```

</details>

<details>
<summary>Hunk 36 · Change · +2 / -2</summary>

```diff
@@ -610,9 +610,9 @@
       return ⟦2-char-id⟧[⟦2-char-id⟧]
     }
   },
-  36067: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36e3: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = {
       "skyblock:forged:astral-astral-astral": {
```

</details>

<details>
<summary>Hunk 37 · Change · +20 / -20</summary>

```diff
@@ -774,39 +774,39 @@
       }
     }
   },
-  36626: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36561: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(250),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(287),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1671);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1652);
     let ⟦2-char-id⟧;
     var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = [1, "b", 0, 8, 3, 23, 7, 91, 180, 145, 255, "length", "c", 24, "a", 141, "undefined", 217, 63, 6, "fromCodePoint", 12, "push", 4, 101, "h", 175, "f", 249, "e", "i", 221, 230, 183, 97, 9, 22, 80, 8191, 88, 13, 14, "d", "g", 227, 79, 54, 5, 84, 48, 78, 126, 142, 122, 65, 36, 185, 27, 140, 136, 2, 85, 96, 98, null, 103, 104, 105, 99, 100, 102, 114, 115, 116, 117, 118, 119, 189, 132, 237, 53, 60, "wc", 33, 197, 30, 127, 128, 154, 50, 203, "s", "=", ";", 73, 211, 190, void 0, "on"];
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return typeof ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧] = function(...JJ) {
-        for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[0]] = 'BHqaLYiArcZDfhFCQNIVJngldXUeP/Go~wW;bp1{u?.`Sj8T5"xmKy}0|Ek%RMOtv:,$z4#=2!>9*36<(&^_@])7+s[', ⟦2-char-id⟧[⟦2-char-id⟧[1]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[4]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].length, ⟦2-char-id⟧[-⟦2-char-id⟧[9]] = [], ⟦2-char-id⟧[-⟦2-char-id⟧[7]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[8]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[4]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++)
-          if (⟦2-char-id⟧[⟦2-char-id⟧[5]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[3]]]), ⟦2-char-id⟧[⟦2-char-id⟧[5]] !== -⟦2-char-id⟧[0])
-            if (⟦2-char-id⟧[⟦2-char-id⟧[6]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[6]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]];
+    const ⟦2-char-id⟧ = ["b", 0, 1, 8, 198, "a", 218, 239, 5, "f", 235, 255, "length", "c", "d", 227, 130, "undefined", "e", 63, 6, "fromCodePoint", 7, 12, "push", 188, 123, 3, 73, "i", 91, 8191, 88, 13, 14, 221, 2, void 0, 4, 119, 141, !1, !0, 127, 128, 173, 9, "g", 98, 61, 129, 142, 143, null, 137, 138, 139, 140, 144, 145, 146, 155, 156, 157, 158, 159, 160, 68, 192, "gp", 79, "s", 165, 161, "h", 66, 189, 39, 31, 176, 24, 75, 215, 69, "on"];
+
+    function ⟦2-char-id⟧(...BB) {
+      return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = function(...BB) {
+        for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[5]] = 'eA4`X+,Gi|quUsHIoa.nF!0W:6&Bjl^@CL<Yhb#pR)]gdSJ1TN3QzcrV*DE(vZ8mw%OkP=Ktf;xy5_9?$"{>2/7}[~M', ⟦2-char-id⟧[⟦2-char-id⟧[0]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[4]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]].length, ⟦2-char-id⟧[⟦2-char-id⟧[10]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[8]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[9]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[-⟦2-char-id⟧[7]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[4]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++)
+          if (⟦2-char-id⟧[-⟦2-char-id⟧[6]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[3]]]), ⟦2-char-id⟧[-⟦2-char-id⟧[6]] !== -⟦2-char-id⟧[2])
+            if (⟦2-char-id⟧[-⟦2-char-id⟧[7]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[-⟦2-char-id⟧[7]] = ⟦2-char-id⟧[-⟦2-char-id⟧[6]];
             else {
-              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[6]] += ⟦2-char-id⟧[⟦2-char-id⟧[5]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[-⟦2-char-id⟧[7]] |= ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[8]], ⟦2-char-id⟧[⟦2-char-id⟧[8]] += (⟦2-char-id⟧[⟦2-char-id⟧[6]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+              ⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[7]] += ⟦2-char-id⟧[-⟦2-char-id⟧[6]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[8]] |= ⟦2-char-id⟧[-⟦2-char-id⟧[7]] << ⟦2-char-id⟧[⟦2-char-id⟧[9]], ⟦2-char-id⟧[⟦2-char-id⟧[9]] += (⟦2-char-id⟧[-⟦2-char-id⟧[7]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
               do {
-                ⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[9]].push(⟦2-char-id⟧[-⟦2-char-id⟧[7]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[-⟦2-char-id⟧[7]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[8]] -= ⟦2-char-id⟧[3])
-              } while (⟦2-char-id⟧[⟦2-char-id⟧[8]] > ⟦2-char-id⟧[6]);
-              ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]
-            } return ⟦2-char-id⟧[⟦2-char-id⟧[6]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[-⟦2-char-id⟧[9]].push((⟦2-char-id⟧[-⟦2-char-id⟧[7]] | ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[8]]) & ⟦2-char-id⟧[10]), ⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[9]])
-      }(⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧[⟦2-char-id⟧]
+                ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[10]].push(⟦2-char-id⟧[⟦2-char-id⟧[8]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[8]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[9]] -= ⟦2-char-id⟧[3])
+              } while (⟦2-char-id⟧[⟦2-char-id⟧[9]] > ⟦2-char-id⟧[22]);
+              ⟦2-char-id⟧[-⟦2-char-id⟧[7]] = -⟦2-char-id⟧[2]
+            } return ⟦2-char-id⟧[-⟦2-char-id⟧[7]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[10]].push((⟦2-char-id⟧[⟦2-char-id⟧[8]] | ⟦2-char-id⟧[-⟦2-char-id⟧[7]] << ⟦2-char-id⟧[⟦2-char-id⟧[9]]) & ⟦2-char-id⟧[11]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[10]])
+      }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
     }
 
-    function ⟦2-char-id⟧(...JJ) {
-      return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧ !== ⟦2-char-id⟧[16] && ⟦2-char-id⟧ ? (new ⟦2-char-id⟧).decode(new ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[2]])) : typeof ⟦2-char-id⟧ !== ⟦2-char-id⟧[16] && ⟦2-char-id⟧ ? ⟦2-char-id⟧.from(⟦2-char-id⟧[⟦2-char-id⟧[2]]).toString("utf-8") : ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[2]])
+    function ⟦2-char-id⟧(...BB) {
+      return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧ !== ⟦2-char-id⟧[17] && ⟦2-char-id⟧ ? (new ⟦2-char-id⟧).decode(new ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]])) : typeof ⟦2-char-id⟧ !== ⟦2-char-id⟧[17] && ⟦2-char-id⟧ ? ⟦2-char-id⟧.from(⟦2-char-id⟧[⟦2-char-id⟧[1]]).toString("utf-8") : ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]])
     }
 
     function ⟦2-char-id⟧() {}
-    ⟦2-char-id⟧(⟦2-char-id⟧ = {}, ⟦2-char-id⟧ = ["+.nAq@XyY", '6Wr6=xhA~I98IM3VP}MA0@ChdhP2(d.oV}nP`m/EzcUZ5ex{"}q', 'tpG02RZrO%yt%k;X"EXea8w4kOyn+T"u&a/Zj3^d`:<tWhd;xEq', 'uNn03&n4nh^$_1#di/3U%3rd8,OA#"`Xn=9>M{BrwRF21q', "/flLp9@f}VMtPa:d[aP/GKUKL", "@PmrP1ZrvyjAnQ/b?O9x}8_;EFp,/Q6{xu=*@_FkQnc:zC6VP:4LR5&H", "6Xh0[*8vtCh0(elPt5pLF", '_j}A>EIk&cU4"hsgpJ"eB{Mlk:8LNQL`NCOPq>3/:Eb*L_M;tuq', "6|MPVEKua", "|cu!sKNH", "fE{ifxB", "a,U/:y^uq}z,u=ObvNBiX={H[NcMxhEP>B", "c8kmwK[dxVwNY@}?0mI22bWd4hS0Oh^WW`?iqbqk_}%|Fp_?n:f0A>?TY", ')W_3w]dK8|Bq]dLo/>|"l6a4M%sgO&e/%}W98tUqOt/obT,NDH', "VU$Y:8cH", "5:d!z5+KqV/dT#+gdz@3uTn?CCaW7Fid<NGP)*0?(Rs/IYD", "&ag*_4z>F,7CA^AX}agPaO9htIwa;1ne!B", "4z@U2b/VVcrzEX>V", "jUS>[}Wd3FR;y5XPocf>/u+f[Om4RCfU", '"ElPRyOf9|`;iYMbmp/0$8nVTC&gpL', "gC)o`!DV#h8Zf=h", "vO{Ko;1K.:al`1h{@%Oc_%v8ZJz((a$N}=U2;]9tR|WZu_2UnH", "VUmrV10T:E@>!dj1{l)*}#K>oto:0##d7%wmOWcAdkRFpL", '%UWms6{A~Cv"3LDJO:_3z>Zd$Rq}NQ_WYITK]=6W$f=$JCBpDfWm(x1q', 'yaG*"3u8wRf<kkT{SlyZ/', "}asi2R$45Ry", "QtrG?z6fmvhN0#G/N=8Av8Ch;fFG$FR/p>/o%3AybE9HyLR/:z?2<*8fSD", "TOoKH{GI+kZ5!5Ku=pNeU", "l/tc,2&A&RvFP=f13ohZWKN/rN78o^coRJ>mf5/&sN+#f@$oh~gP.}5Ke:p", 'I~u!e]cyeF"(+%he0N!}g1!ASrR', "4}x3d1zfZJ;dKa", "2Jj>j((f9Fc}va", '?OMAFbat"c*|V1;pC"A6*43H', "TW*/T3Jk]hu</pTU[:jAIE~GvIik=#%l8`?mH@!E7hp4%^g?,B", "$WgKpM?9)kPKSeTeP/$Yy9wECtODH", "q;i*i0m/qEj4e1~b]:SZ%2DVR:]#+bnu(m)c!Oi.Wfee;UeP).^mU", '"j%/RRp;_vb<MLlPwf[me6B', 'n84>p!`;kF:Db_Gd0jT"V&B(SF_#r5t.,paYKpB', 'bp("z55q@ct!FpZ1JRpP^w,>/n', ".E$ZA&Fv]hCOIY/b*O&mR<Jk?JccE2cXuz/KykB.a", 's.*xuT}8FngapQd/+:W9hx@f]h&L&d%;W56"ypO)5f9>/LHoq><*=05)i', "]au!XEVTU:$rcR6U`EA*JK(>s:jF=U%;F8@/Lb>k~,X2^4sl,oQi", "nE`3O<)K(tJ<aUnWcuCcU!28i", "y:uiP=!95,b02%gu8`*y&K?A2JW:BePl`Oo!?9q.Aho<a^QU?/SZ|8&]iZP", 'pJ@/NO%?IREK:Lt.ntu"V', 'rI{*5m]/IE>>|eYIJiBiSmmH~t5,9#_WQ~*>bTdGtf#3FFQe"o<cwTyA_fj', "Lt;Z_wo/cF7XBa", "Rac69_ZKF,ZWO4+W&o2i;]PIvtv,LeO.9pSZ", "BtfZ#<P)FIm", "rI}Ac<>Ka", '|a40+*SI+hJ27T7WL><c#RsN+:ZZ."cX%zlwERUrA', "ctumy^B", '%uYZtW8Gzh$#,XMbf~]=b|D9ZOS4F&*{C`{"a<Uq', "q/OoK{KufO%F1hjV456oHyF8:ErM8hel1EHeERV;8ne", "Ol%/TmmHTr?!Sa", "Lzz>`9AAf%=(.M#IDEWe0^eyyk6&pQbX&m?GdTNAxct!&d7?V>k~ib*um}5", '0EY>V1vI3O^x1"4dzN0K>&iKck.ZretG}jq', '/W!mI*GISy/OiY2XK=zxykFk"tHw6XaX', "2OS/=xrIBcbAl1elvO?m!E[K`DHQre4V}Ej>4yB", "IIL>K^jEY", "g>~cM{hh!N!r=kKuXUqm8p7/Y", ",jR/b6Z)%N?Ku=&e&F3Ub|pVSOd50ks;_m}o?TuI(R#Xp2sP", "d>$/W]Q)Tnu!WFmW=j4xCEB", '/p9rz>346ryA."/;|i`~PKB', '<%2mF1)K)kg<fe)uaU3UJOCTHf:!C1vG/WQ}@4TT"Iwn+aZ', '1RzAH0zGofM3le)PmUsmkW@8{h?;l1e/!55"4>O)7h>>#U,G<Oq', "G})A@j&mBEZ5&RhV{m2mE{`AvE4#*RwN", "s{$~I1GqU:8P6Xql756!R<B.y}*(8^%/;ajoAxZkfO+/wQr", "$j9r|RF85f;4[&=psOnAX", "}N*UP1a4]h9|f_ye[a.mgxrbOCdh2CzNmc100@6k[F", "NEmr[1Gqp}D^?QoNsO}AY49]Wf33;^fU", "u/%y(OB", '*:,YC1Brs:($Up:d{z0"t@QbH,2RNRE/u=H', "wf7KK#Gbr0%D@_,GpJ,~V4]NjF^Coq", "*Ow2B8m]yh!!;=vblz?~+wk>W}5DH", 'GEt"v5zITr', "#z<!&*7H", "I{?{iA9)", ",m1o3&Jq", "tKDjzy5/", "70v:=.s#", "pCAB", "^)vB2*H", "p0Gj", '"}3=w}Qq', "w2,5/a6", 'ETX<"wRH', "$TiyW=RH", "TTS<", "ET^}Yr|H", "AT3wRw@H", "n1^}+8LH", "bPM}@", "ET^}Rw1]*e", ";zLbya9e_M", "!R+ivv#(*e", "amcb~}EH", "*m=w}v@H", "y1}dZ^2H", "ET^}Rw@H", "n1X<$BMH", "|;{Gb=EH", "Bn{bb8|H", "[;iy!B@H", "b`=w/}jI", "sVVb%", "]TX<", "ST^de", ";P[b]", "yFqmXLzH", "c/#5%", "ET^}Yrcei", "!RQS4dqBi", "PP>5Tdevi", '[;mb.D"H', "b5mG]=6", "[;mb%8$H", "n1{b+wPI", "y1tb0BFH", "]`=w/}6", "|]o=])X:", "@wo$kF?>", "%JTxk/g0", "T#lg", "/~?`", "5]kR", "vV?`", "VYxC7", ":D}R", "+b!g", "3/tG", "WTM}8v;H", "l;?5I/NI", "IkC<zsoH", "$RawvvRH", "t5fG", "h;#5", "*Pmbh^2H", "cdfG", "$PfbrwMH", 'P`#.PB"H', "~*@<Bv@H", "q2a30B6", "{gN$!Rj6", 'e[Z"}uSx', "#$Zm", "0t[!ZRj2", "7=Lurov2", "?QHCJ5h", "5,)P(+Rx", 'FDZ"pqvx', "PyMY+_Ub", "U$|m]k^", "~}0$e4u6", "+|&Mf", "Dm=w}v@H", "$Pfbt}KH"]), ⟦2-char-id⟧(⟦2-char-id⟧ = function(...JJ) {
-      ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = [function() {
+    ⟦2-char-id⟧(⟦2-char-id⟧ = {}, ⟦2-char-id⟧ = ["FD@,G?6cnDM0#NWY98Sqvpa)EH);*IK#tQ=z@/lc`", "pt5G}#*zNU]!UBbbD|NB8?gGXspq!fY^Erw|8pYD&8uTj>AbbD|y_5A6hDvuA", "LDDQNKTz5amJ&+F<Ea|B{5rJnr4^jB7BU.bG", "Nr=xcpR.3Db;otaB/]t5s36G3vE.*BJp", "0QQi[>SY9mQ!W&X#`CX3$t]JM(/hO6!<hTJN0/+mDaIyab70{S@;ehZ)T.p", ":R23vp4wUH7KaojaW%y+6", "zTR^F3nGd%FV/h70GUT;LzpAU(wYDf;p<W6y//dJ?if;G`4bUNc@l", "{b;,mcnG8I^?F>cjy]3C0z[<RE=_9HK.>jS@H#|s~8$K>tg&zQpNQ_F4", "tb=tUxE.,wyX>#vY~ai,e<`)YwI<DvV)f`8jKT@Y?II{ZTq", "pU3C)Y0wKEg", ",NW;s5mW+qtIENi#5aX3SNA}AI", ')TqQ?"dEUHePW(g6', '9Sc@D?nY"v<<<NR&', "]t1XQJe", "*,Ul~1A)emWE#b2jG.JGD2!1=Ew.Utx#P<vlcQ$JuafK$$}l8@J5jYBGXs:", 'z@_t(K4K*EF=zvMoLRvxS$F:5(5xm`()|lhld$x^em"k7#W)W%Sqj', "jWC^%?DA", "IQG|OT/A+q*YipFjA|e9#;E:#seyn(=6t]|B{#JU,s2Io>ZhYgKtLPQA", 'II:;$hzPAI.T|TR#$K^jZp&4E%8({"R@C,a96', "ClRry>nYOnZAKs%hXrA", "9H^Go5fxOr>IT>yp{%W,2>aGeUvC+h0j", '%QAy/35<Ps"+IHLbk|QiKcks)F3!M6%hFIG5"SGm/nDC*IHFG.yCn>;A', "$*Yx*KOUDFh!ht>)}`T,M(e", 'Sg>_zp#haUZGDT6l{Kf;(Qb=cs"Kz(#.<xW|', "2%NCR*Ys:aGPZhL@[a=Vd$ns{n", "$%M+:>H:B(Uyo`", '_*&Qv2=D0n[xeo"<ce', "|mWX/5Hz%D.?xK!BrF+@%p$,G", "HbtX]Ns==sw.@4n<t%.fk?@m`n*GzBT<mR`", "E%hx55dEtw]`U1TBE<>_[z*.7s:", ".CF_X?77Jiu`iBw:$@rXM504yFFf?`G:GC53SZ=lnvB?2(X^pW4", "Ivxi:16l`v?N^+S&8b/x1Eq^68~6A", "LgVzL;|s`", "/KdlRyQyya>K6b5&!UzqG=}WYD{3|h.Rm(^G}S5xxHz(+fZaavoL@;csM8iyA", 'r`@zrcIGu%{_m#Sp@gYC$"e', "1F6BX8ncEusaV{g&#8`", '"TDCvcK,)aZXgEO:hrL,', ")Rgf?xL1:FY@hB^hQbrjnDf.LrwCi`", 'H|OibR^UJmf6[t$p#D8;g{REdijE^b1plx[,U8$:"voFf(E]', "xSn_Df7:;%yINX", "!W7jG=|)Yw70n4", "eR/xUxiEAUn`$Bu&JQAQS$e", "Ea)QpN+)Ar&Eu{ZhUA", "j<mjU7Ln*EY", 'WvfQ,<p1s.}A7N@l%P3f?D"Q%D2CWHL]3RW5Zv.inr6fg&ha,N1jB', "6C1zR1B)pE:f$he:TU/&pblGRs", ';%1ryxZ)d%3$}47oBJZX4"CUOv](HbU', "lJSjnDpstEN=14b:P|?|", "K%r|YyqKmmO;+o1&lWPxj1L1S.}ln&c)3t956>e", "*W=@&#jhQU5YA", '$,*,3P~/2wjsbX[)VR?Xx")1{m5c"$f#Yx/tP<cs"rVmu&r<<lhlEve', "SgCrhykW,qZj(EeWHX%,E_=WfaxkdXR@9(2xdZmDXnWFB{0R[(/G&", '}p3iLY>sO|7x3HVR1@),1PEE|EDKAfLagDIzO8W"TO|b(KB)j&HV^zmW:s)', "3T)C$Vh^kr!,jt3jcrPG.h(s`", "VHP&[#E:tE+1|oy#JD!j<z#zZHtX4+8aEH[;OfXKYngTu3vW;e", 'tb:N/LB=iF^?zXn)"Q[r@Y+no|^8$Bmhs&:rw?OU0s', "qN=q%h/D]8l%qbH", "{T>+.D/Y@v.{o1La0PAB*Je", "VFFx;v~?%mC", '?*}z9"7<2DV$wh#:!,mz]yMRE(!@CtZh(Ti9T2*^LUEKDs%W', 'YDi,2t^^q8jaH",', '!mAyq"MU+nEH/h$Bot/32t5Ue||QJ6V)SbiL|=mmZuG,rZ7R~8mri7f,4mp', "=TW;dY%sLrc=GB.j#%{C|?kl2s", "[u?Xn8(l,nfjZ:^arT?|BR1/Ba35GB^hBWpj<Z*^(u,%}&^Wz@4", '^URNCRO.2D1=csM):|^5"">G`', 'OTcq~9IcBF_"5`Bay8(iH3WnhnhGI34bFQl@VmERkUWEHZs', "QF}ze7=m}s:8Af5nK,7@^ZalLOz!<Z5pm(O_:9}A%r6Qj(X:7Hay<RkYAU", "TrEc(J^.(H9N]bHFGW$rUVe", "cS]C<;unTvK.$1C:vbECAV`}FwN(z`=nn&4", "JUtXzm{UQ|xK/Xkh(TVj_SWc&8nbA", "B%W5&>9xeUUVJNQB*S1jpr_G5%BaA2AgrtR,j$h$QDa?M6i6uJr@w?e", '>jR;*J[Rmv!5}t=67HVN"##Uj(L:I4mlw;=&?5*z+qR@U`,@', "(|AQCRVGcrC<F>8:vj!q|7#^is", "jPy3{L4EFnisiBI", '<l3CBY:^!rwu&"20JtmN<;IsLOp5*XN&3e', "4mirG<Smcn`b~X", "?K&ly=^h`", '`.Ly^ttGhD0`qZn<ar9GM#JE".8(T>C]sUi^zb8P.U/xUp?B', 'egar"V37yaw;}&=bLlSV^ze', "k|T,pm]$Or)8EZX@2@Ux&##:>wKNNXoBE(o|U", "`l}5Pf,iU(;JA", "v|*|a>5JGVvjn{L@Fl!Vq7e", "J8Fl#1}=y%IyW3ZaGW6,!57U+", 'N%/xQycs"|C@eBBYXrQq)m5RNIMk[hE)|la,', "M%+@fVgnEF", "PQG,YRK:>r]aj(qF`l_x`8%D_i", "]U+xXcI)Xrif5IWjjt/3F", "ETKX<$SDgub", "mPcX$3sA", '"HMQxhQYE(~ipH|pd8lV0', "AD~QQK@YFn26Q#6j?88G", "Am]f_5[<fsyk<E,#M<NrfhW)J!d@jt7<HJ<B]yZAOmH,svG6w@1zj", ".|Pq|hh.{D2hM6C]..:^K8=={rY5epChmr>_E_aAIO@aso,6otw,", '?SL,K"U4*%.=:ff.c%7;thLY+rZ.(HaF<gX3,?*.S*~D~h`@aUm5d$]4', '!JxQmEVlOI3;Ct+:[plGI"e', "gD&y+VT^+", ",D>ccf97}sKO^N|@+CZGF", '"(J|[#4^mi{JY36Y', 'sb>+;D5J"vv(Zv<.sIp;Gxe', "jI~rkfz$@IoB*>u&!I4", '"bDQkJmWq8(HC1%bM*R,O"4$j8d5GB%W2Qnl{3?skn{K;h<:Ve', "KP4+x5$J)FvC(HBj{`,Gi88E6aUqZ:%a&A", '$;y_?#=DwUlq9"5&[(pr75.4*%eB&+7YaJh@mEdwhwA{So})&RhqNKe', '^Jk&shkW<IU<i`X^((qly8JR;%jaM"[j$*rXs32JS.vHftOhWA', 'rU(_2(V)(*{_46whnvr@;"j:Vw;JF`', "{,bGY$]UPs3u`3h.$*Yq", "ACe^sh@li%Y", "^%[Q)ysG)auyLZ20LTBxh$.K,E7hAh2j]81ze7oJAr<5bXrRd<o,0", 't|AB#$N)@!D_I1Eh"S7N3yZ)3|^ffvcBZ%4', "UbycCY^hkvS={NYb", "<lj_Y1mAS8[kqZIpSR`", "VrZV$5@)=nq^A", "4I1|6RRE4|%.]sI&<xC|rc~lNm/K[(R.oD#X`7zPXw9iv>pn$e", "I|{C3*7UhDE", '"HWND_uyTUEKV`5n`X]BS$ZY^m4rd`', 'qmBl1pQs]u_"|2Kbw8:QY9f,fEQmBHQj$b/xf?@yzrj8iIT&ze', 'jtlzz2@"Zc*;ZX|#N<IzvJ1G[F["gE5&v`|B<9}A', "Wxmz@z2z!rGZo`g6{S,|tV#.%ryCX>B]+XmXep@1$m^V)XN<6A", "A.d_?#%sTv*jY4", "1D%rn8&^?i[k7#,", 'gW+q"zRhBH||gH=6trZz"8.xOUY', "oRvqVKKE/rTN!fjh#v|^ihRz:s4<1HR6}<i|", "p`RN1Kc17E+EVKy&X&bVcyM$9*4QV#u#Vr05AchE%I", 'OQ#@_"F4', ":dcfuw*H", "I+gjA)3a", '&Q"6', "<{g6_dx", "&+zv", "c/;<G3U", "HI@W,c5]", "7IRh%k5]", "IIvW", "HIz~?a+]", "*IEc5cC]", "r}z~ig6]", ")0M~C", "HIz~5cC]", "r}@W7BM]", "+_D1)kH]", "BrD))g+]", "3bq)`~H]", "ubkc~QC]", "h}~T8z/]", "t_RhyBC]", "){kcG~(#", "d22)S", "=I@W", "vIzTV", "_0t)=", "hneb@6l]", "qGm<S", "HIz~?aqVR", "y5pvjTeBR", "00P<ITVQR", "t_b)|>,]", ")<b1=kU", "t_b)Sg7]", "r}D)ic0#", "h}L)fBn]", "={kcG~U", "@5WbFLG]", ")!wx", "F=fn", "W@7G", "c/fn", 'F=,G"', "a2;G", "YjRx", "EGL1", "%IM~gQ_]", "%Wg3y9#0", "#$4Wld9]", "753cQQ5]", "L<K1", "[_m<", "u0b)[z/]", "qTK1", "70K)acM]", "0{m|0B,]", "`uCWBQC]", "e/3EfBU", "EM*|~b0s", "4t*m", "[(q:$J6]", "?(p~^sez", "lRv,n+N", "TdCj#+.s", "(e*|_1Us", "S0@aw@[B", "Lt[mH{A", "Y~9tE%bB", "+[DgR", ">bkc~QC]", "70K)L~&]"]), ⟦2-char-id⟧(⟦2-char-id⟧ = function(...BB) {
+      ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[15]] = [function() {
         return globalThis
       }, function() {
         return global
```

</details>

<details>
<summary>Hunk 38 · Change · +205 / -213</summary>

```diff
@@ -814,271 +814,263 @@
         return window
       }, function() {
         return new Function("return this")()
-      }], ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[97], ⟦2-char-id⟧[⟦2-char-id⟧[12]] = []);
+      }], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[37], ⟦2-char-id⟧[⟦2-char-id⟧[13]] = []);
       try {
-        ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[0]] = Object, ⟦2-char-id⟧[⟦2-char-id⟧[12]][⟦2-char-id⟧[22]]("".__proto__.constructor.name))
+        ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[2]] = Object, ⟦2-char-id⟧[⟦2-char-id⟧[13]][⟦2-char-id⟧[24]]("".__proto__.constructor.name))
       } catch (⟦2-char-id⟧) {}
-      JJ: for (⟦2-char-id⟧[⟦2-char-id⟧[13]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[13]] < ⟦2-char-id⟧[⟦2-char-id⟧[14]][⟦2-char-id⟧[11]]; ⟦2-char-id⟧[⟦2-char-id⟧[13]]++) try {
-        for (⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[⟦2-char-id⟧[14]][⟦2-char-id⟧[⟦2-char-id⟧[13]]](), ⟦2-char-id⟧[⟦2-char-id⟧[15]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[15]] < ⟦2-char-id⟧[⟦2-char-id⟧[12]][⟦2-char-id⟧[11]]; ⟦2-char-id⟧[⟦2-char-id⟧[15]]++)
-          if (typeof ⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[12]][⟦2-char-id⟧[⟦2-char-id⟧[15]]]] === ⟦2-char-id⟧[16]) continue ⟦2-char-id⟧;
-        return ⟦2-char-id⟧[⟦2-char-id⟧[0]]
+      BB: for (⟦2-char-id⟧[⟦2-char-id⟧[14]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[14]] < ⟦2-char-id⟧[⟦2-char-id⟧[15]][⟦2-char-id⟧[12]]; ⟦2-char-id⟧[⟦2-char-id⟧[14]]++) try {
+        for (⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[⟦2-char-id⟧[15]][⟦2-char-id⟧[⟦2-char-id⟧[14]]](), ⟦2-char-id⟧[⟦2-char-id⟧[16]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[16]] < ⟦2-char-id⟧[⟦2-char-id⟧[13]][⟦2-char-id⟧[12]]; ⟦2-char-id⟧[⟦2-char-id⟧[16]]++)
+          if (typeof ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[13]][⟦2-char-id⟧[⟦2-char-id⟧[16]]]] === ⟦2-char-id⟧[17]) continue ⟦2-char-id⟧;
+        return ⟦2-char-id⟧[⟦2-char-id⟧[2]]
       } catch (⟦2-char-id⟧) {}
-      return ⟦2-char-id⟧[⟦2-char-id⟧[0]] || this
-    }() || {}, ⟦2-char-id⟧ = ⟦2-char-id⟧.TextDecoder, ⟦2-char-id⟧ = ⟦2-char-id⟧.Uint8Array, ⟦2-char-id⟧ = ⟦2-char-id⟧.fn, ⟦2-char-id⟧ = ⟦2-char-id⟧.String || String, ⟦2-char-id⟧ = ⟦2-char-id⟧.Array || Array, ⟦2-char-id⟧ = function(...JJ) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[23]] = new ⟦2-char-id⟧(⟦2-char-id⟧[87]), ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[⟦2-char-id⟧[20]] || ⟦2-char-id⟧.fromCharCode, ⟦2-char-id⟧[⟦2-char-id⟧[17]] = []),
+      return ⟦2-char-id⟧[⟦2-char-id⟧[2]] || this
+    }() || {}, ⟦2-char-id⟧ = ⟦2-char-id⟧.TextDecoder, ⟦2-char-id⟧ = ⟦2-char-id⟧.Uint8Array, ⟦2-char-id⟧ = ⟦2-char-id⟧.iD, ⟦2-char-id⟧ = ⟦2-char-id⟧.String || String, ⟦2-char-id⟧ = ⟦2-char-id⟧.Array || Array, ⟦2-char-id⟧ = function(...BB) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[13]] = new ⟦2-char-id⟧(⟦2-char-id⟧[44]), ⟦2-char-id⟧[⟦2-char-id⟧[25]] = ⟦2-char-id⟧[⟦2-char-id⟧[21]] || ⟦2-char-id⟧.fromCharCode, ⟦2-char-id⟧[⟦2-char-id⟧[18]] = []),
         function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-          for (⟦2-char-id⟧(⟦2-char-id⟧ = void 0, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[11]], ⟦2-char-id⟧[⟦2-char-id⟧[17]][⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2]), ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧(⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++], ⟦2-char-id⟧ <= ⟦2-char-id⟧[86] ? ⟦2-char-id⟧ = FJ : ⟦2-char-id⟧ <= 223 ? ⟦2-char-id⟧ = (31 & ⟦2-char-id⟧) << ⟦2-char-id⟧[19] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18] : ⟦2-char-id⟧ <= 239 ? ⟦2-char-id⟧ = (15 & ⟦2-char-id⟧) << ⟦2-char-id⟧[21] | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18]) << ⟦2-char-id⟧[19] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18] : ⟦2-char-id⟧[⟦2-char-id⟧[20]] ? ⟦2-char-id⟧ = (⟦2-char-id⟧ & ⟦2-char-id⟧[6]) << 18 | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18]) << ⟦2-char-id⟧[21] | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18]) << ⟦2-char-id⟧[19] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18] : (⟦2-char-id⟧ = ⟦2-char-id⟧[18], ⟦2-char-id⟧ += ⟦2-char-id⟧[4]), ⟦2-char-id⟧[⟦2-char-id⟧[17]][⟦2-char-id⟧[22]](⟦2-char-id⟧[⟦2-char-id⟧[23]][⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧[23]][⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧[0]](⟦2-char-id⟧))));
-          return ⟦2-char-id⟧[⟦2-char-id⟧[17]].join("")
-        }
-    }()), ⟦2-char-id⟧(76) + ⟦2-char-id⟧[25] in ⟦2-char-id⟧ && function(...JJ) {
-      ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[1]] = function(...JJ) {
-        if (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].length), ⟦2-char-id⟧[⟦2-char-id⟧[0]] < ⟦2-char-id⟧[60]) return ⟦2-char-id⟧[2];
-        if (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]] = Math.max(...JJ[⟦2-char-id⟧[2]]), ⟦2-char-id⟧[⟦2-char-id⟧[24]] = Math.min(...JJ[⟦2-char-id⟧[2]])), ⟦2-char-id⟧[⟦2-char-id⟧[1]] === ⟦2-char-id⟧[⟦2-char-id⟧[24]]) return ⟦2-char-id⟧[2];
-        for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[28]] = Array(⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0]).fill(Number.MAX_SAFE_INTEGER), ⟦2-char-id⟧[⟦2-char-id⟧[29]] = Array(⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0]).fill(Number.MIN_SAFE_INTEGER), ⟦2-char-id⟧[⟦2-char-id⟧[27]] = Math.ceil((⟦2-char-id⟧[⟦2-char-id⟧[1]] - ⟦2-char-id⟧[⟦2-char-id⟧[24]]) / (⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0])), ⟦2-char-id⟧[⟦2-char-id⟧[26]] = ⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[25]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[25]] < ⟦2-char-id⟧[⟦2-char-id⟧[0]]; ⟦2-char-id⟧[⟦2-char-id⟧[25]]++) ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[25]]] !== ⟦2-char-id⟧[⟦2-char-id⟧[24]] && ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[25]]] !== ⟦2-char-id⟧[⟦2-char-id⟧[1]] && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[26]] = Math.floor((⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[25]]] - ⟦2-char-id⟧[⟦2-char-id⟧[24]]) / ⟦2-char-id⟧[⟦2-char-id⟧[27]]), ⟦2-char-id⟧[⟦2-char-id⟧[28]][⟦2-char-id⟧[⟦2-char-id⟧[26]]] = Math.min(⟦2-char-id⟧[⟦2-char-id⟧[28]][⟦2-char-id⟧[⟦2-char-id⟧[26]]], ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[25]]]), ⟦2-char-id⟧[⟦2-char-id⟧[29]][⟦2-char-id⟧[⟦2-char-id⟧[26]]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[29]][⟦2-char-id⟧[⟦2-char-id⟧[26]]], ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[25]]]));
-        for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[30]] = Number.MIN_SAFE_INTEGER, ⟦2-char-id⟧[⟦2-char-id⟧[31]] = ⟦2-char-id⟧[⟦2-char-id⟧[24]]), ⟦2-char-id⟧[⟦2-char-id⟧[9]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[9]] < ⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0]; ⟦2-char-id⟧[⟦2-char-id⟧[9]]++) ⟦2-char-id⟧[⟦2-char-id⟧[28]][⟦2-char-id⟧[⟦2-char-id⟧[9]]] === Number.MAX_SAFE_INTEGER && ⟦2-char-id⟧[⟦2-char-id⟧[29]][⟦2-char-id⟧[⟦2-char-id⟧[9]]] === Number.MIN_SAFE_INTEGER || ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[30]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[30]], ⟦2-char-id⟧[⟦2-char-id⟧[28]][⟦2-char-id⟧[⟦2-char-id⟧[9]]] - ⟦2-char-id⟧[⟦2-char-id⟧[31]]), ⟦2-char-id⟧[⟦2-char-id⟧[31]] = ⟦2-char-id⟧[⟦2-char-id⟧[29]][⟦2-char-id⟧[⟦2-char-id⟧[9]]]);
-        return ⟦2-char-id⟧[⟦2-char-id⟧[30]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[30]], ⟦2-char-id⟧[⟦2-char-id⟧[1]] - ⟦2-char-id⟧[⟦2-char-id⟧[31]]), ⟦2-char-id⟧[⟦2-char-id⟧[30]]
-      }, console.log(⟦2-char-id⟧[⟦2-char-id⟧[1]]))
-    }();
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[50])](),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[50])](),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[50])](),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[50])](),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[50])](),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[50])](),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[50])](),
-      ⟦2-char-id⟧ = (...JJ) => {
-        function ⟦2-char-id⟧(...JJ) {
-          return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] = function(...JJ) {
-            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = 'H/#{PnZ3B)jMDo@Q]4?%_G;r9hNpgk2`:Wst|7!bz&80f5}=uIlvVmX,JO(aKTUy^Fdw.1R*e~C[c6$xS+<AL>Eiq"Y', ⟦2-char-id⟧[-⟦2-char-id⟧[51]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[52]] = ⟦2-char-id⟧[-⟦2-char-id⟧[51]].length, ⟦2-char-id⟧[⟦2-char-id⟧[42]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[47]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[54]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[52]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++)
-              if (⟦2-char-id⟧[-⟦2-char-id⟧[53]] = ⟦2-char-id⟧[⟦2-char-id⟧[14]].indexOf(⟦2-char-id⟧[-⟦2-char-id⟧[51]][⟦2-char-id⟧[⟦2-char-id⟧[3]]]), ⟦2-char-id⟧[-⟦2-char-id⟧[53]] !== -⟦2-char-id⟧[0])
-                if (⟦2-char-id⟧[⟦2-char-id⟧[43]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[43]] = ⟦2-char-id⟧[-⟦2-char-id⟧[53]];
+          for (⟦2-char-id⟧(⟦2-char-id⟧ = void 0, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[12]], ⟦2-char-id⟧[⟦2-char-id⟧[18]][⟦2-char-id⟧[12]] = ⟦2-char-id⟧[1]), ⟦2-char-id⟧ = ⟦2-char-id⟧[1]; ⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧(⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++], ⟦2-char-id⟧ <= ⟦2-char-id⟧[43] ? ⟦2-char-id⟧ = VB : ⟦2-char-id⟧ <= 223 ? ⟦2-char-id⟧ = (⟦2-char-id⟧ & ⟦2-char-id⟧[78]) << ⟦2-char-id⟧[20] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[19] : ⟦2-char-id⟧ <= ⟦2-char-id⟧[7] ? ⟦2-char-id⟧ = (15 & ⟦2-char-id⟧) << ⟦2-char-id⟧[23] | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[19]) << ⟦2-char-id⟧[20] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[19] : ⟦2-char-id⟧[⟦2-char-id⟧[21]] ? ⟦2-char-id⟧ = (⟦2-char-id⟧ & ⟦2-char-id⟧[22]) << 18 | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[19]) << ⟦2-char-id⟧[23] | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[19]) << ⟦2-char-id⟧[20] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[19] : (⟦2-char-id⟧ = ⟦2-char-id⟧[19], ⟦2-char-id⟧ += ⟦2-char-id⟧[27]), ⟦2-char-id⟧[⟦2-char-id⟧[18]][⟦2-char-id⟧[24]](⟦2-char-id⟧[⟦2-char-id⟧[13]][⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧[13]][⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧[25]](⟦2-char-id⟧))));
+          return ⟦2-char-id⟧[⟦2-char-id⟧[18]].join("")
+        }
+    }());
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[26])](),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[26])](),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[26])](),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[26])](),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[26])](),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[26])](),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[26])](),
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        function ⟦2-char-id⟧(...BB) {
+          return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = function(...BB) {
+            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = 'xHanqVfB6{vPb.S;G(mJ2zp9][=&LR_0j~3uEI$WM@/+stlAyDig5N:*}KX^>whF<orZ)k4d!TQ?C%,YUce"18#O|`7', ⟦2-char-id⟧[-⟦2-char-id⟧[6]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[27]] = ⟦2-char-id⟧[-⟦2-char-id⟧[6]].length, ⟦2-char-id⟧[-⟦2-char-id⟧[35]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[18]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[20]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[28]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[28]] < ⟦2-char-id⟧[⟦2-char-id⟧[27]]; ⟦2-char-id⟧[⟦2-char-id⟧[28]]++)
+              if (⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].indexOf(⟦2-char-id⟧[-⟦2-char-id⟧[6]][⟦2-char-id⟧[⟦2-char-id⟧[28]]]), ⟦2-char-id⟧[⟦2-char-id⟧[29]] !== -⟦2-char-id⟧[2])
+                if (⟦2-char-id⟧[⟦2-char-id⟧[22]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[⟦2-char-id⟧[22]] = ⟦2-char-id⟧[⟦2-char-id⟧[29]];
                 else {
-                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[43]] += ⟦2-char-id⟧[-⟦2-char-id⟧[53]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[47]] |= ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[⟦2-char-id⟧[54]], ⟦2-char-id⟧[⟦2-char-id⟧[54]] += (⟦2-char-id⟧[⟦2-char-id⟧[43]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[22]] += ⟦2-char-id⟧[⟦2-char-id⟧[29]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[18]] |= ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]], ⟦2-char-id⟧[⟦2-char-id⟧[20]] += (⟦2-char-id⟧[⟦2-char-id⟧[22]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                   do {
-                    ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[42]].push(⟦2-char-id⟧[⟦2-char-id⟧[47]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[47]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[54]] -= ⟦2-char-id⟧[3])
-                  } while (⟦2-char-id⟧[⟦2-char-id⟧[54]] > ⟦2-char-id⟧[6]);
-                  ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]
-                } return ⟦2-char-id⟧[⟦2-char-id⟧[43]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[42]].push((⟦2-char-id⟧[⟦2-char-id⟧[47]] | ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[⟦2-char-id⟧[54]]) & ⟦2-char-id⟧[10]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[42]])
-          }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]
-        }
-        ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[4], ⟦2-char-id⟧(⟦2-char-id⟧[45]) in ⟦2-char-id⟧ && function(...JJ) {
-          ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = function(...JJ) {
-            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[-⟦2-char-id⟧[59]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[56]] = {}, ⟦2-char-id⟧[⟦2-char-id⟧[57]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[58]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[19]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].length), ⟦2-char-id⟧[-⟦2-char-id⟧[55]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[-⟦2-char-id⟧[55]] < ⟦2-char-id⟧[⟦2-char-id⟧[19]]; ⟦2-char-id⟧[-⟦2-char-id⟧[55]]++) {
-              for (⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[56]] = {}, ⟦2-char-id⟧[⟦2-char-id⟧[57]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[58]] = ⟦2-char-id⟧[0]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[-⟦2-char-id⟧[55]] + ⟦2-char-id⟧[0]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[19]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++) ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].x !== ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].x || ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].y !== ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].y ? (⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].y === ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].y ? ⟦2-char-id⟧[⟦2-char-id⟧[29]] = Number.MAX_SAFE_INTEGER : ⟦2-char-id⟧[⟦2-char-id⟧[29]] = (⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].x - ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].x) / (⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].y - ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].y), ⟦2-char-id⟧[-⟦2-char-id⟧[56]][⟦2-char-id⟧[⟦2-char-id⟧[29]]] || (⟦2-char-id⟧[-⟦2-char-id⟧[56]][⟦2-char-id⟧[⟦2-char-id⟧[29]]] = ⟦2-char-id⟧[2]), ⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[56]][⟦2-char-id⟧[⟦2-char-id⟧[29]]]++, ⟦2-char-id⟧[⟦2-char-id⟧[57]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[57]], ⟦2-char-id⟧[-⟦2-char-id⟧[56]][⟦2-char-id⟧[⟦2-char-id⟧[29]]]))) : ⟦2-char-id⟧[⟦2-char-id⟧[58]]++;
-              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[57]] += ⟦2-char-id⟧[⟦2-char-id⟧[58]], ⟦2-char-id⟧[-⟦2-char-id⟧[59]] = Math.max(⟦2-char-id⟧[-⟦2-char-id⟧[59]], ⟦2-char-id⟧[⟦2-char-id⟧[57]]))
-            }
-            return ⟦2-char-id⟧[-⟦2-char-id⟧[59]]
-          }, console.log(⟦2-char-id⟧[⟦2-char-id⟧[14]]))
+                    ⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[35]].push(⟦2-char-id⟧[⟦2-char-id⟧[18]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[18]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[20]] -= ⟦2-char-id⟧[3])
+                  } while (⟦2-char-id⟧[⟦2-char-id⟧[20]] > ⟦2-char-id⟧[22]);
+                  ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]
+                } return ⟦2-char-id⟧[⟦2-char-id⟧[22]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[-⟦2-char-id⟧[35]].push((⟦2-char-id⟧[⟦2-char-id⟧[18]] | ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]]) & ⟦2-char-id⟧[11]), ⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[35]])
+          }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
+        }
+        ⟦2-char-id⟧(124) + "L" in ⟦2-char-id⟧ && function() {
+          var ⟦2-char-id⟧, ⟦2-char-id⟧ = function(...TB) {
+            return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[36], ⟦2-char-id⟧({}, ⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])
+          };
+          ⟦2-char-id⟧(⟦2-char-id⟧ = function(...TB) {
+            if (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[27], ⟦2-char-id⟧[⟦2-char-id⟧[39]] = {}), ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]] !== ⟦2-char-id⟧[37]) return ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]];
+            if (⟦2-char-id⟧[⟦2-char-id⟧[2]] === ⟦2-char-id⟧[⟦2-char-id⟧[36]]) return ⟦2-char-id⟧[42];
+            for (⟦2-char-id⟧[⟦2-char-id⟧[38]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[38]] < ⟦2-char-id⟧[⟦2-char-id⟧[2]].length; ⟦2-char-id⟧[⟦2-char-id⟧[38]]++) ⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]] === ⟦2-char-id⟧[37] && (⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]] = ⟦2-char-id⟧[1]), ⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]] === ⟦2-char-id⟧[37] && (⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]] = ⟦2-char-id⟧[1]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]]++, ⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]]--);
+            for (⟦2-char-id⟧[⟦2-char-id⟧[40]] in ⟦2-char-id⟧[⟦2-char-id⟧[39]])
+              if (⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[40]]] !== ⟦2-char-id⟧[1]) return ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]] = ⟦2-char-id⟧[41], ⟦2-char-id⟧[41];
+            for (⟦2-char-id⟧[⟦2-char-id⟧[14]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[14]] < ⟦2-char-id⟧[⟦2-char-id⟧[2]].length; ⟦2-char-id⟧[⟦2-char-id⟧[14]]++)
+              if (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]].substr(⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[14]]), ⟦2-char-id⟧[⟦2-char-id⟧[36]].substr(⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[14]])) && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]].substr(⟦2-char-id⟧[⟦2-char-id⟧[14]]), ⟦2-char-id⟧[⟦2-char-id⟧[36]].substr(⟦2-char-id⟧[⟦2-char-id⟧[14]])) || ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]].substr(⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[14]]), ⟦2-char-id⟧[⟦2-char-id⟧[36]].substr(⟦2-char-id⟧[⟦2-char-id⟧[36]].length - ⟦2-char-id⟧[⟦2-char-id⟧[14]])) && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]].substr(⟦2-char-id⟧[⟦2-char-id⟧[14]]), ⟦2-char-id⟧[⟦2-char-id⟧[36]].substr(⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[36]].length - ⟦2-char-id⟧[⟦2-char-id⟧[14]]))) return ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]] = ⟦2-char-id⟧[42], ⟦2-char-id⟧[42];
+            return ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]] = ⟦2-char-id⟧[41], ⟦2-char-id⟧[41]
+          }, console.log(⟦2-char-id⟧))
         }();
         const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-        return ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[37]) + ⟦2-char-id⟧(81)](⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧[60]]), ⟦2-char-id⟧()[⟦2-char-id⟧(82)](⟦2-char-id⟧[⟦2-char-id⟧[2]], ⟦2-char-id⟧, ⟦2-char-id⟧()[⟦2-char-id⟧(83)](⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧[0]]))
+        return ⟦2-char-id⟧()[⟦2-char-id⟧(125) + ⟦2-char-id⟧(126)](⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[43])](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[44])](⟦2-char-id⟧, ⟦2-char-id⟧))
       };
 
     function ⟦2-char-id⟧() {
       ⟦2-char-id⟧ = function() {}
     }
-    ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-      function ⟦2-char-id⟧(...JJ) {
-        return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] = function(⟦2-char-id⟧) {
-          var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-          for (⟦2-char-id⟧(⟦2-char-id⟧ = "" + (⟦2-char-id⟧ || ""), ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = [], ⟦2-char-id⟧ = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = -⟦2-char-id⟧[0]), ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
-            var ⟦2-char-id⟧ = '6IHVkSigG5<lR4AT"9EeMXpWK%;c@Y]3b!2[$*|?10_PZnzhoNLm)CFyU`:t/O~&#x7{^Da=,.djw}8>BvsfQr(Ju+q'.indexOf(⟦2-char-id⟧[⟦2-char-id⟧]);
-            if (⟦2-char-id⟧ !== -⟦2-char-id⟧[0])
-              if (⟦2-char-id⟧ < ⟦2-char-id⟧[2]) ⟦2-char-id⟧ = ⟦2-char-id⟧;
+    ⟦2-char-id⟧ = (...BB) => {
+      function ⟦2-char-id⟧(...BB) {
+        return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = function(...BB) {
+          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = 'U#]2$vRx1<WJ5j*I,sHVM@!%&S_qC?=E)y/t7u+Z}fo08rl[9X6b^4nh:{NLGY`"mw.Dz>3k;|T(c~gPBQdKpaAFOie', ⟦2-char-id⟧[⟦2-char-id⟧[0]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[27]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]].length, ⟦2-char-id⟧[⟦2-char-id⟧[38]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[48]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[49]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[47]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[-⟦2-char-id⟧[45]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[-⟦2-char-id⟧[45]] < ⟦2-char-id⟧[⟦2-char-id⟧[27]]; ⟦2-char-id⟧[-⟦2-char-id⟧[45]]++)
+            if (⟦2-char-id⟧[⟦2-char-id⟧[46]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[-⟦2-char-id⟧[45]]]), ⟦2-char-id⟧[⟦2-char-id⟧[46]] !== -⟦2-char-id⟧[2])
+              if (⟦2-char-id⟧[⟦2-char-id⟧[47]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[⟦2-char-id⟧[47]] = ⟦2-char-id⟧[⟦2-char-id⟧[46]];
               else {
-                ⟦2-char-id⟧(⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧[7], ⟦2-char-id⟧ |= ⟦2-char-id⟧ << ⟦2-char-id⟧, ⟦2-char-id⟧ += (⟦2-char-id⟧ & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[47]] += ⟦2-char-id⟧[⟦2-char-id⟧[46]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[48]] |= ⟦2-char-id⟧[⟦2-char-id⟧[47]] << ⟦2-char-id⟧[⟦2-char-id⟧[49]], ⟦2-char-id⟧[⟦2-char-id⟧[49]] += (⟦2-char-id⟧[⟦2-char-id⟧[47]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                 do {
-                  ⟦2-char-id⟧(⟦2-char-id⟧.push(⟦2-char-id⟧ & ⟦2-char-id⟧[10]), ⟦2-char-id⟧ >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧ -= ⟦2-char-id⟧[3])
-                } while (⟦2-char-id⟧ > ⟦2-char-id⟧[6]);
-                ⟦2-char-id⟧ = -⟦2-char-id⟧[0]
-              }
-          }
-          return ⟦2-char-id⟧ > -⟦2-char-id⟧[0] && ⟦2-char-id⟧.push((⟦2-char-id⟧ | ⟦2-char-id⟧ << ⟦2-char-id⟧) & ⟦2-char-id⟧[10]), ⟦2-char-id⟧(⟦2-char-id⟧)
-        }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]
+                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[38]].push(⟦2-char-id⟧[⟦2-char-id⟧[48]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[48]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[49]] -= ⟦2-char-id⟧[3])
+                } while (⟦2-char-id⟧[⟦2-char-id⟧[49]] > ⟦2-char-id⟧[22]);
+                ⟦2-char-id⟧[⟦2-char-id⟧[47]] = -⟦2-char-id⟧[2]
+              } return ⟦2-char-id⟧[⟦2-char-id⟧[47]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[38]].push((⟦2-char-id⟧[⟦2-char-id⟧[48]] | ⟦2-char-id⟧[⟦2-char-id⟧[47]] << ⟦2-char-id⟧[⟦2-char-id⟧[49]]) & ⟦2-char-id⟧[11]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[38]])
+        }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
       }
-      ⟦2-char-id⟧(⟦2-char-id⟧[48]) in ⟦2-char-id⟧ && function() {
-        var ⟦2-char-id⟧ = function(...JJ) {
-          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].length, ⟦2-char-id⟧[⟦2-char-id⟧[1]] = [], ⟦2-char-id⟧[-⟦2-char-id⟧[41]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[41]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ - ⟦2-char-id⟧))), ⟦2-char-id⟧[⟦2-char-id⟧[47]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[47]] < ⟦2-char-id⟧[⟦2-char-id⟧[0]]; ⟦2-char-id⟧[⟦2-char-id⟧[47]]++)
-            if (!(⟦2-char-id⟧[⟦2-char-id⟧[47]] > ⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]]] === ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]] - ⟦2-char-id⟧[0]]))
-              for (⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[41]] = ⟦2-char-id⟧[⟦2-char-id⟧[47]] + ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[41]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0]); ⟦2-char-id⟧[-⟦2-char-id⟧[41]] < ⟦2-char-id⟧[⟦2-char-id⟧[41]];)
-                if (⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]]] + ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[41]]] + ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[41]]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[-⟦2-char-id⟧[41]]++;
-                else if (⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]]] + ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[41]]] + ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[41]]] > ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[41]]--;
-          else {
-            for (⟦2-char-id⟧[⟦2-char-id⟧[1]].push([⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]]], ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[41]]], ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[41]]]]); ⟦2-char-id⟧[-⟦2-char-id⟧[41]] < ⟦2-char-id⟧[⟦2-char-id⟧[41]] && ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[41]]] === ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[41]] + ⟦2-char-id⟧[0]];) ⟦2-char-id⟧[-⟦2-char-id⟧[41]]++;
-            for (; ⟦2-char-id⟧[-⟦2-char-id⟧[41]] < ⟦2-char-id⟧[⟦2-char-id⟧[41]] && ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[41]]] === ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[41]] - ⟦2-char-id⟧[0]];) ⟦2-char-id⟧[⟦2-char-id⟧[41]]--;
-            ⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[41]]++, ⟦2-char-id⟧[⟦2-char-id⟧[41]]--)
-          }
-          return ⟦2-char-id⟧[⟦2-char-id⟧[1]]
-        };
-        console.log(⟦2-char-id⟧)
-      }();
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(86) + ⟦2-char-id⟧(87) + ⟦2-char-id⟧(⟦2-char-id⟧[39])](⟦2-char-id⟧);
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(89) + ⟦2-char-id⟧(90) + ⟦2-char-id⟧(⟦2-char-id⟧[7]) + ⟦2-char-id⟧(92)](⟦2-char-id⟧);
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧[64] ? ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(93) + ⟦2-char-id⟧(94) + ⟦2-char-id⟧(95)](⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧[62]) + ⟦2-char-id⟧(⟦2-char-id⟧[34]) + ⟦2-char-id⟧(⟦2-char-id⟧[63]) + ⟦2-char-id⟧[29]) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[62]) + ⟦2-char-id⟧(⟦2-char-id⟧[34]) + ⟦2-char-id⟧(⟦2-char-id⟧[63]) + ⟦2-char-id⟧[29]],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧[64] ? ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(⟦2-char-id⟧[68]) + ⟦2-char-id⟧(⟦2-char-id⟧[69]) + ⟦2-char-id⟧(⟦2-char-id⟧[24]) + ⟦2-char-id⟧(⟦2-char-id⟧[70])](⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧[65]) + ⟦2-char-id⟧(⟦2-char-id⟧[66]) + ⟦2-char-id⟧(⟦2-char-id⟧[67])) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[65]) + ⟦2-char-id⟧(⟦2-char-id⟧[66]) + ⟦2-char-id⟧(⟦2-char-id⟧[67])];
-      ⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(106)](⟦2-char-id⟧, ⟦2-char-id⟧[2], ⟦2-char-id⟧[2], ⟦2-char-id⟧), ⟦2-char-id⟧().Re(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧()[⟦2-char-id⟧(107)], ⟦2-char-id⟧.heading), ⟦2-char-id⟧()[⟦2-char-id⟧(108)](⟦2-char-id⟧, ⟦2-char-id⟧.jf), ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[2]);
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(109) + ⟦2-char-id⟧(110)]();
-      ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(111) + ⟦2-char-id⟧(112) + ⟦2-char-id⟧(113) + ⟦2-char-id⟧[91]](⟦2-char-id⟧);
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧[64] ? ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(⟦2-char-id⟧[68]) + ⟦2-char-id⟧(⟦2-char-id⟧[69]) + ⟦2-char-id⟧(⟦2-char-id⟧[24]) + ⟦2-char-id⟧(⟦2-char-id⟧[70])](⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧[71]) + ⟦2-char-id⟧(⟦2-char-id⟧[72])) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[71]) + ⟦2-char-id⟧(⟦2-char-id⟧[72])];
-      if (!⟦2-char-id⟧ && ⟦2-char-id⟧()[⟦2-char-id⟧[82]](⟦2-char-id⟧) && (⟦2-char-id⟧ === ⟦2-char-id⟧[64] ? ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(⟦2-char-id⟧[68]) + ⟦2-char-id⟧(⟦2-char-id⟧[69]) + ⟦2-char-id⟧(⟦2-char-id⟧[24]) + ⟦2-char-id⟧(⟦2-char-id⟧[70])](⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧[73]) + ⟦2-char-id⟧(⟦2-char-id⟧[74]) + ⟦2-char-id⟧(⟦2-char-id⟧[75]) + ⟦2-char-id⟧(⟦2-char-id⟧[76])) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[73]) + ⟦2-char-id⟧(⟦2-char-id⟧[74]) + ⟦2-char-id⟧(⟦2-char-id⟧[75]) + ⟦2-char-id⟧(⟦2-char-id⟧[76])])) {
-        function ⟦2-char-id⟧(...JJ) {
-          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = 'u:|BD=@"g`R9bxt~_IZJ{kL/hNV5[+$TnGHpF)0*.rU]AXqvj38E,}>Q7(Sl#WYi?;6os<aPMyK!COde%1^fmcwz24&', ⟦2-char-id⟧[-⟦2-char-id⟧[77]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[-⟦2-char-id⟧[77]].length, ⟦2-char-id⟧[⟦2-char-id⟧[23]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[19]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[-⟦2-char-id⟧[78]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[-⟦2-char-id⟧[78]] < ⟦2-char-id⟧[⟦2-char-id⟧[12]]; ⟦2-char-id⟧[-⟦2-char-id⟧[78]]++)
-            if (⟦2-char-id⟧[⟦2-char-id⟧[35]] = ⟦2-char-id⟧[⟦2-char-id⟧[14]].indexOf(⟦2-char-id⟧[-⟦2-char-id⟧[77]][⟦2-char-id⟧[-⟦2-char-id⟧[78]]]), ⟦2-char-id⟧[⟦2-char-id⟧[35]] !== -⟦2-char-id⟧[0])
-              if (⟦2-char-id⟧[⟦2-char-id⟧[43]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[43]] = ⟦2-char-id⟧[⟦2-char-id⟧[35]];
+      ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[3];
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[16]) + ⟦2-char-id⟧(131) + ⟦2-char-id⟧(132)](⟦2-char-id⟧[⟦2-char-id⟧[2]]);
+      ⟦2-char-id⟧[⟦2-char-id⟧[5]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(133) + ⟦2-char-id⟧(134) + ⟦2-char-id⟧(135) + ⟦2-char-id⟧(136)](⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[5]] === ⟦2-char-id⟧[53] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[54]) + ⟦2-char-id⟧(⟦2-char-id⟧[55]) + ⟦2-char-id⟧(⟦2-char-id⟧[56]) + ⟦2-char-id⟧(⟦2-char-id⟧[57])](⟦2-char-id⟧[⟦2-char-id⟧[2]], ⟦2-char-id⟧(⟦2-char-id⟧[40]) + ⟦2-char-id⟧(⟦2-char-id⟧[51]) + ⟦2-char-id⟧(⟦2-char-id⟧[52]) + ⟦2-char-id⟧[18]) : ⟦2-char-id⟧[⟦2-char-id⟧[5]][⟦2-char-id⟧(⟦2-char-id⟧[40]) + ⟦2-char-id⟧(⟦2-char-id⟧[51]) + ⟦2-char-id⟧(⟦2-char-id⟧[52]) + ⟦2-char-id⟧[18]],
+        ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[5]] === ⟦2-char-id⟧[53] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[54]) + ⟦2-char-id⟧(⟦2-char-id⟧[55]) + ⟦2-char-id⟧(⟦2-char-id⟧[56]) + ⟦2-char-id⟧(⟦2-char-id⟧[57])](⟦2-char-id⟧[⟦2-char-id⟧[2]], ⟦2-char-id⟧(⟦2-char-id⟧[58]) + ⟦2-char-id⟧(⟦2-char-id⟧[59]) + ⟦2-char-id⟧(⟦2-char-id⟧[60])) : ⟦2-char-id⟧[⟦2-char-id⟧[5]][⟦2-char-id⟧(⟦2-char-id⟧[58]) + ⟦2-char-id⟧(⟦2-char-id⟧[59]) + ⟦2-char-id⟧(⟦2-char-id⟧[60])];
+      ⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(147)](⟦2-char-id⟧, ⟦2-char-id⟧[1], ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[8]]), ⟦2-char-id⟧().ol(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧()[⟦2-char-id⟧(148)], ⟦2-char-id⟧[⟦2-char-id⟧[27]].heading), ⟦2-char-id⟧()[⟦2-char-id⟧(149)](⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧[38]].bu), ⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[1]);
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧(150) + ⟦2-char-id⟧(151)]();
+      if (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[5]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(152) + ⟦2-char-id⟧(153) + ⟦2-char-id⟧(154) + ⟦2-char-id⟧[71]](⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧[70]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]] === ⟦2-char-id⟧[53] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[54]) + ⟦2-char-id⟧(⟦2-char-id⟧[55]) + ⟦2-char-id⟧(⟦2-char-id⟧[56]) + ⟦2-char-id⟧(⟦2-char-id⟧[57])](⟦2-char-id⟧[⟦2-char-id⟧[2]], ⟦2-char-id⟧(⟦2-char-id⟧[61]) + ⟦2-char-id⟧(⟦2-char-id⟧[62])) : ⟦2-char-id⟧[⟦2-char-id⟧[5]][⟦2-char-id⟧(⟦2-char-id⟧[61]) + ⟦2-char-id⟧(⟦2-char-id⟧[62])]), !⟦2-char-id⟧ && ⟦2-char-id⟧()[⟦2-char-id⟧[69]](⟦2-char-id⟧) && (⟦2-char-id⟧[⟦2-char-id⟧[5]] === ⟦2-char-id⟧[53] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[54]) + ⟦2-char-id⟧(⟦2-char-id⟧[55]) + ⟦2-char-id⟧(⟦2-char-id⟧[56]) + ⟦2-char-id⟧(⟦2-char-id⟧[57])](⟦2-char-id⟧[⟦2-char-id⟧[2]], ⟦2-char-id⟧(⟦2-char-id⟧[63]) + ⟦2-char-id⟧(⟦2-char-id⟧[64]) + ⟦2-char-id⟧(⟦2-char-id⟧[65]) + ⟦2-char-id⟧(⟦2-char-id⟧[66])) : ⟦2-char-id⟧[⟦2-char-id⟧[5]][⟦2-char-id⟧(⟦2-char-id⟧[63]) + ⟦2-char-id⟧(⟦2-char-id⟧[64]) + ⟦2-char-id⟧(⟦2-char-id⟧[65]) + ⟦2-char-id⟧(⟦2-char-id⟧[66])])) {
+        function ⟦2-char-id⟧(...BB) {
+          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[68]] = '9aCp2,N5xnG^jvK=~%Br67JF:H/W"YX)k[&dDT3I*<Q@i.sco>4Uu;y|ebAw!P#tf?g{E+zL1}8RV(Sq`hMlO_Z$m0]', ⟦2-char-id⟧[⟦2-char-id⟧[36]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[13]] = ⟦2-char-id⟧[⟦2-char-id⟧[36]].length, ⟦2-char-id⟧[⟦2-char-id⟧[38]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[9]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[20]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[-⟦2-char-id⟧[67]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[-⟦2-char-id⟧[67]] < ⟦2-char-id⟧[⟦2-char-id⟧[13]]; ⟦2-char-id⟧[-⟦2-char-id⟧[67]]++)
+            if (⟦2-char-id⟧[⟦2-char-id⟧[46]] = ⟦2-char-id⟧[-⟦2-char-id⟧[68]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[-⟦2-char-id⟧[67]]]), ⟦2-char-id⟧[⟦2-char-id⟧[46]] !== -⟦2-char-id⟧[2])
+              if (⟦2-char-id⟧[⟦2-char-id⟧[22]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[⟦2-char-id⟧[22]] = ⟦2-char-id⟧[⟦2-char-id⟧[46]];
               else {
-                ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[43]] += ⟦2-char-id⟧[⟦2-char-id⟧[35]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[29]] |= ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]], ⟦2-char-id⟧[⟦2-char-id⟧[19]] += (⟦2-char-id⟧[⟦2-char-id⟧[43]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[22]] += ⟦2-char-id⟧[⟦2-char-id⟧[46]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[9]] |= ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]], ⟦2-char-id⟧[⟦2-char-id⟧[20]] += (⟦2-char-id⟧[⟦2-char-id⟧[22]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                 do {
-                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[23]].push(⟦2-char-id⟧[⟦2-char-id⟧[29]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[29]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[19]] -= ⟦2-char-id⟧[3])
-                } while (⟦2-char-id⟧[⟦2-char-id⟧[19]] > ⟦2-char-id⟧[6]);
-                ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]
-              } return ⟦2-char-id⟧[⟦2-char-id⟧[43]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[23]].push((⟦2-char-id⟧[⟦2-char-id⟧[29]] | ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]]) & ⟦2-char-id⟧[10]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[23]])
-        }
-
-        function ⟦2-char-id⟧(...JJ) {
-          return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]
-        }
-
-        function ⟦2-char-id⟧(...JJ) {
-          ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2]
-        }
-        ⟦2-char-id⟧(120) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧()[⟦2-char-id⟧(123)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧));
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(124)](⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(125)](⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧ / ⟦2-char-id⟧,
-          ⟦2-char-id⟧ = Math[⟦2-char-id⟧(⟦2-char-id⟧[51])](⟦2-char-id⟧, ⟦2-char-id⟧[2]) + ⟦2-char-id⟧[0];
-        if (⟦2-char-id⟧ * ⟦2-char-id⟧ < ⟦2-char-id⟧()[⟦2-char-id⟧[82]](⟦2-char-id⟧)) {
-          function ⟦2-char-id⟧(...JJ) {
-            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[-⟦2-char-id⟧[79]] = '0/;98x<)^|C!+RwY?h5]ZUpVK:g=72(@N>*PLDdOeruXzfoBcl#1nb[{sT%A6viM"k3IJy_&maqQ.W$,t}GEHjFS4~`', ⟦2-char-id⟧[⟦2-char-id⟧[1]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[-⟦2-char-id⟧[50]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].length, ⟦2-char-id⟧[⟦2-char-id⟧[85]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[19]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[-⟦2-char-id⟧[83]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[-⟦2-char-id⟧[83]] < ⟦2-char-id⟧[-⟦2-char-id⟧[50]]; ⟦2-char-id⟧[-⟦2-char-id⟧[83]]++)
-              if (⟦2-char-id⟧[⟦2-char-id⟧[84]] = ⟦2-char-id⟧[-⟦2-char-id⟧[79]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[-⟦2-char-id⟧[83]]]), ⟦2-char-id⟧[⟦2-char-id⟧[84]] !== -⟦2-char-id⟧[0])
-                if (⟦2-char-id⟧[⟦2-char-id⟧[6]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[6]] = ⟦2-char-id⟧[⟦2-char-id⟧[84]];
-                else {
-                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[6]] += ⟦2-char-id⟧[⟦2-char-id⟧[84]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[29]] |= ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]], ⟦2-char-id⟧[⟦2-char-id⟧[19]] += (⟦2-char-id⟧[⟦2-char-id⟧[6]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
-                  do {
-                    ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[85]].push(⟦2-char-id⟧[⟦2-char-id⟧[29]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[29]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[19]] -= ⟦2-char-id⟧[3])
-                  } while (⟦2-char-id⟧[⟦2-char-id⟧[19]] > ⟦2-char-id⟧[6]);
-                  ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]
-                } return ⟦2-char-id⟧[⟦2-char-id⟧[6]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[85]].push((⟦2-char-id⟧[⟦2-char-id⟧[29]] | ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]]) & ⟦2-char-id⟧[10]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[85]])
-          }
-
-          function ⟦2-char-id⟧(⟦2-char-id⟧) {
-            return typeof ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧[⟦2-char-id⟧]
-          }
-          ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[86])](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
-        }
-        ⟦2-char-id⟧(⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧, 1, Math[⟦2-char-id⟧(⟦2-char-id⟧[51])](⟦2-char-id⟧[0], Math[⟦2-char-id⟧(⟦2-char-id⟧[87])](⟦2-char-id⟧[2], -⟦2-char-id⟧, ⟦2-char-id⟧[0] - ⟦2-char-id⟧ / ⟦2-char-id⟧))), ⟦2-char-id⟧()[⟦2-char-id⟧(129)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
+                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[38]].push(⟦2-char-id⟧[⟦2-char-id⟧[9]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[9]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[20]] -= ⟦2-char-id⟧[3])
+                } while (⟦2-char-id⟧[⟦2-char-id⟧[20]] > ⟦2-char-id⟧[22]);
+                ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]
+              } return ⟦2-char-id⟧[⟦2-char-id⟧[22]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[38]].push((⟦2-char-id⟧[⟦2-char-id⟧[9]] | ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]]) & ⟦2-char-id⟧[11]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[38]])
+        }
+
+        function ⟦2-char-id⟧(...BB) {
+          return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
+        }
+
+        function ⟦2-char-id⟧() {
+          console.log((function(...BB) {
+            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[5]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].length, ⟦2-char-id⟧[⟦2-char-id⟧[0]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[13]] = ⟦2-char-id⟧[1]), ⟦2-char-id⟧[⟦2-char-id⟧[38]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[38]] < ⟦2-char-id⟧[⟦2-char-id⟧[5]]; ⟦2-char-id⟧[⟦2-char-id⟧[38]]++) ⟦2-char-id⟧[⟦2-char-id⟧[0]].push(⟦2-char-id⟧[⟦2-char-id⟧[38]] !== ⟦2-char-id⟧[1] && ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[38]]] > ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[38]] - ⟦2-char-id⟧[2]] ? ⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[38]] - ⟦2-char-id⟧[2]] + ⟦2-char-id⟧[2] : ⟦2-char-id⟧[2]);
+            for (⟦2-char-id⟧[⟦2-char-id⟧[8]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]] - ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[8]] >= ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[8]]--) ⟦2-char-id⟧[⟦2-char-id⟧[8]] !== ⟦2-char-id⟧[⟦2-char-id⟧[5]] - ⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[8]]] > ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[8]] + ⟦2-char-id⟧[2]] && (⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[8]]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[8]]], ⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[8]] + ⟦2-char-id⟧[2]] + ⟦2-char-id⟧[2])), ⟦2-char-id⟧[⟦2-char-id⟧[13]] += ⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[8]]];
+            return ⟦2-char-id⟧[⟦2-char-id⟧[13]]
+          }))
+        }
+        ⟦2-char-id⟧(⟦2-char-id⟧[73]) + ⟦2-char-id⟧[5] in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧()[⟦2-char-id⟧(162)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧));
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(163)](⟦2-char-id⟧),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(164)](⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧[⟦2-char-id⟧[8]] / ⟦2-char-id⟧,
+          ⟦2-char-id⟧ = Math[⟦2-char-id⟧(⟦2-char-id⟧[72])](⟦2-char-id⟧, ⟦2-char-id⟧[1]) + ⟦2-char-id⟧[2];
+        ⟦2-char-id⟧[⟦2-char-id⟧[8]] * ⟦2-char-id⟧[⟦2-char-id⟧[8]] < ⟦2-char-id⟧()[⟦2-char-id⟧[69]](⟦2-char-id⟧) && ⟦2-char-id⟧()[⟦2-char-id⟧(166)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[70]] = (⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[71]])(⟦2-char-id⟧[⟦2-char-id⟧[70]], 1, Math[⟦2-char-id⟧(⟦2-char-id⟧[72])](⟦2-char-id⟧[2], Math[⟦2-char-id⟧(167)](⟦2-char-id⟧[1], -⟦2-char-id⟧, ⟦2-char-id⟧[2] - ⟦2-char-id⟧ / ⟦2-char-id⟧[⟦2-char-id⟧[8]]))), ⟦2-char-id⟧()[⟦2-char-id⟧(168)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
       }
       const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-      ⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(130)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[2]);
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(131)](⟦2-char-id⟧);
-      if (!⟦2-char-id⟧) {
-        function ⟦2-char-id⟧(...JJ) {
-          ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[88]] = function(⟦2-char-id⟧) {
-            var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
-            for (⟦2-char-id⟧(⟦2-char-id⟧ = [], ⟦2-char-id⟧ = ⟦2-char-id⟧[2]), ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(⟦2-char-id⟧ !== ⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧] > ⟦2-char-id⟧[⟦2-char-id⟧ - ⟦2-char-id⟧[0]] ? ⟦2-char-id⟧[⟦2-char-id⟧ - ⟦2-char-id⟧[0]] + ⟦2-char-id⟧[0] : ⟦2-char-id⟧[0]);
-            for (⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧[0]; ⟦2-char-id⟧ >= ⟦2-char-id⟧[2]; ⟦2-char-id⟧--) ⟦2-char-id⟧ !== ⟦2-char-id⟧ - ⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧] > ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧[0]] && (⟦2-char-id⟧[⟦2-char-id⟧] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧[0]] + ⟦2-char-id⟧[0])), ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧];
-            return ⟦2-char-id⟧
-          }, console.log(⟦2-char-id⟧[-⟦2-char-id⟧[88]]))
-        }
-        ⟦2-char-id⟧(⟦2-char-id⟧[78]) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ *= ⟦2-char-id⟧
+      if (⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(169)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[77]] = ⟦2-char-id⟧()[⟦2-char-id⟧(170)](⟦2-char-id⟧)), !⟦2-char-id⟧) {
+        function ⟦2-char-id⟧(...BB) {
+          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = 'e08W;xdNC7g}@!1>G&:|Kqb.v=_[$n`/Z"^Poi{?6yst*~J5BuV+4R2Ec(AIH9Q#w%fz]D)<3UTLa,YrhXFjlOpkmSM', ⟦2-char-id⟧[⟦2-char-id⟧[0]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[27]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]].length, ⟦2-char-id⟧[⟦2-char-id⟧[14]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[64]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[45]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[-⟦2-char-id⟧[73]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[74]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[74]] < ⟦2-char-id⟧[⟦2-char-id⟧[27]]; ⟦2-char-id⟧[⟦2-char-id⟧[74]]++)
+            if (⟦2-char-id⟧[-⟦2-char-id⟧[75]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[74]]]), ⟦2-char-id⟧[-⟦2-char-id⟧[75]] !== -⟦2-char-id⟧[2])
+              if (⟦2-char-id⟧[-⟦2-char-id⟧[73]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[-⟦2-char-id⟧[73]] = ⟦2-char-id⟧[-⟦2-char-id⟧[75]];
+              else {
+                ⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[73]] += ⟦2-char-id⟧[-⟦2-char-id⟧[75]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[64]] |= ⟦2-char-id⟧[-⟦2-char-id⟧[73]] << ⟦2-char-id⟧[⟦2-char-id⟧[45]], ⟦2-char-id⟧[⟦2-char-id⟧[45]] += (⟦2-char-id⟧[-⟦2-char-id⟧[73]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
+                do {
+                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[14]].push(⟦2-char-id⟧[⟦2-char-id⟧[64]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[64]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[45]] -= ⟦2-char-id⟧[3])
+                } while (⟦2-char-id⟧[⟦2-char-id⟧[45]] > ⟦2-char-id⟧[22]);
+                ⟦2-char-id⟧[-⟦2-char-id⟧[73]] = -⟦2-char-id⟧[2]
+              } return ⟦2-char-id⟧[-⟦2-char-id⟧[73]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[14]].push((⟦2-char-id⟧[⟦2-char-id⟧[64]] | ⟦2-char-id⟧[-⟦2-char-id⟧[73]] << ⟦2-char-id⟧[⟦2-char-id⟧[45]]) & ⟦2-char-id⟧[11]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[14]])
+        }
+
+        function ⟦2-char-id⟧(⟦2-char-id⟧) {
+          return typeof ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧[⟦2-char-id⟧]
+        }
+
+        function ⟦2-char-id⟧() {
+          console.log((function(...BB) {
+            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[5]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].length, ⟦2-char-id⟧[⟦2-char-id⟧[36]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[13]] = ⟦2-char-id⟧[1]), ⟦2-char-id⟧[-⟦2-char-id⟧[76]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[-⟦2-char-id⟧[76]] < ⟦2-char-id⟧[⟦2-char-id⟧[5]]; ⟦2-char-id⟧[-⟦2-char-id⟧[76]]++) ⟦2-char-id⟧[⟦2-char-id⟧[36]].push(⟦2-char-id⟧[-⟦2-char-id⟧[76]] !== ⟦2-char-id⟧[1] && ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[-⟦2-char-id⟧[76]]] > ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[-⟦2-char-id⟧[76]] - ⟦2-char-id⟧[2]] ? ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[-⟦2-char-id⟧[76]] - ⟦2-char-id⟧[2]] + ⟦2-char-id⟧[2] : ⟦2-char-id⟧[2]);
+            for (⟦2-char-id⟧[⟦2-char-id⟧[8]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]] - ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[8]] >= ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[8]]--) ⟦2-char-id⟧[⟦2-char-id⟧[8]] !== ⟦2-char-id⟧[⟦2-char-id⟧[5]] - ⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[8]]] > ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[8]] + ⟦2-char-id⟧[2]] && (⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[8]]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[8]]], ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[8]] + ⟦2-char-id⟧[2]] + ⟦2-char-id⟧[2])), ⟦2-char-id⟧[⟦2-char-id⟧[13]] += ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[8]]];
+            return ⟦2-char-id⟧[⟦2-char-id⟧[13]]
+          }))
+        }
+        ⟦2-char-id⟧(171) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧[⟦2-char-id⟧[77]] *= ⟦2-char-id⟧[⟦2-char-id⟧[70]]
       }
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(133) + ⟦2-char-id⟧(134) + ⟦2-char-id⟧(135)],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? Math[⟦2-char-id⟧(⟦2-char-id⟧[59])](⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧;
-      ⟦2-char-id⟧()[⟦2-char-id⟧(137) + ⟦2-char-id⟧(138)](⟦2-char-id⟧, ⟦2-char-id⟧);
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ !== ⟦2-char-id⟧[64] && void 0 !== ⟦2-char-id⟧ ? hJ : ⟦2-char-id⟧[⟦2-char-id⟧(139) + ⟦2-char-id⟧(⟦2-char-id⟧[58]) + ⟦2-char-id⟧(⟦2-char-id⟧[15]) + ⟦2-char-id⟧(⟦2-char-id⟧[52])];
-      if (⟦2-char-id⟧ > ⟦2-char-id⟧[2]) {
-        function ⟦2-char-id⟧(...JJ) {
-          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = '^6x=hE%~m$P:g)w,NblBva&o2fD7V5]M"r(JeORXStC[8L}{yu@|nF9Y>zpWTdG#U;c`s?Ak_1/iQq+j03.Z!4KI*<H', ⟦2-char-id⟧[⟦2-char-id⟧[1]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[4]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].length, ⟦2-char-id⟧[⟦2-char-id⟧[90]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[47]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[89]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[⟦2-char-id⟧[25]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[25]] < ⟦2-char-id⟧[⟦2-char-id⟧[4]]; ⟦2-char-id⟧[⟦2-char-id⟧[25]]++)
-            if (⟦2-char-id⟧[⟦2-char-id⟧[35]] = ⟦2-char-id⟧[⟦2-char-id⟧[14]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[25]]]), ⟦2-char-id⟧[⟦2-char-id⟧[35]] !== -⟦2-char-id⟧[0])
-              if (⟦2-char-id⟧[⟦2-char-id⟧[43]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[43]] = ⟦2-char-id⟧[⟦2-char-id⟧[35]];
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[20]][⟦2-char-id⟧(172) + ⟦2-char-id⟧(⟦2-char-id⟧[45]) + ⟦2-char-id⟧(174)],
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? Math[⟦2-char-id⟧(175)](⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧[77]]) : ⟦2-char-id⟧[⟦2-char-id⟧[77]];
+      ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[79]) + ⟦2-char-id⟧(177)](⟦2-char-id⟧, ⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[22]] !== ⟦2-char-id⟧[53] && ⟦2-char-id⟧[⟦2-char-id⟧[22]] !== void ⟦2-char-id⟧[1] ? ⟦2-char-id⟧[⟦2-char-id⟧[22]] : ⟦2-char-id⟧[⟦2-char-id⟧[20]][⟦2-char-id⟧(178) + ⟦2-char-id⟧(179) + ⟦2-char-id⟧(180) + ⟦2-char-id⟧(181)];
+      if (⟦2-char-id⟧ > ⟦2-char-id⟧[1]) {
+        function ⟦2-char-id⟧(...BB) {
+          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = 'ABsJXVkYmtjFcCKdiNOPUIDZGReolTHg|W#vE2.}0urMQ7~6ab3[q(5ph"_Sf:z4Lw;x)?]{!=<&`1+89$>*/%,^@yn', ⟦2-char-id⟧[⟦2-char-id⟧[36]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[27]] = ⟦2-char-id⟧[⟦2-char-id⟧[36]].length, ⟦2-char-id⟧[⟦2-char-id⟧[38]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[8]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[78]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[27]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++)
+            if (⟦2-char-id⟧[⟦2-char-id⟧[46]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[3]]]), ⟦2-char-id⟧[⟦2-char-id⟧[46]] !== -⟦2-char-id⟧[2])
+              if (⟦2-char-id⟧[⟦2-char-id⟧[22]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[⟦2-char-id⟧[22]] = ⟦2-char-id⟧[⟦2-char-id⟧[46]];
               else {
-                ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[43]] += ⟦2-char-id⟧[⟦2-char-id⟧[35]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[47]] |= ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[-⟦2-char-id⟧[89]], ⟦2-char-id⟧[-⟦2-char-id⟧[89]] += (⟦2-char-id⟧[⟦2-char-id⟧[43]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[22]] += ⟦2-char-id⟧[⟦2-char-id⟧[46]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[8]] |= ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[78]], ⟦2-char-id⟧[⟦2-char-id⟧[78]] += (⟦2-char-id⟧[⟦2-char-id⟧[22]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                 do {
-                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[90]].push(⟦2-char-id⟧[⟦2-char-id⟧[47]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[47]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[-⟦2-char-id⟧[89]] -= ⟦2-char-id⟧[3])
-                } while (⟦2-char-id⟧[-⟦2-char-id⟧[89]] > ⟦2-char-id⟧[6]);
-                ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]
-              } return ⟦2-char-id⟧[⟦2-char-id⟧[43]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[90]].push((⟦2-char-id⟧[⟦2-char-id⟧[47]] | ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[-⟦2-char-id⟧[89]]) & ⟦2-char-id⟧[10]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[90]])
-        }
-
-        function ⟦2-char-id⟧(...JJ) {
-          return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]
-        }
-
-        function ⟦2-char-id⟧(...JJ) {
-          ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2]
-        }
-        ⟦2-char-id⟧(143) + ⟦2-char-id⟧[91] in ⟦2-char-id⟧ && ⟦2-char-id⟧();
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(144) + ⟦2-char-id⟧(⟦2-char-id⟧[9])] * ⟦2-char-id⟧;
+                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[38]].push(⟦2-char-id⟧[⟦2-char-id⟧[8]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[8]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[78]] -= ⟦2-char-id⟧[3])
+                } while (⟦2-char-id⟧[⟦2-char-id⟧[78]] > ⟦2-char-id⟧[22]);
+                ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]
+              } return ⟦2-char-id⟧[⟦2-char-id⟧[22]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[38]].push((⟦2-char-id⟧[⟦2-char-id⟧[8]] | ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[78]]) & ⟦2-char-id⟧[11]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[38]])
+        }
+
+        function ⟦2-char-id⟧(...BB) {
+          return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
+        }
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧(182) + ⟦2-char-id⟧(183)] * ⟦2-char-id⟧;
         if (!⟦2-char-id⟧) {
-          function ⟦2-char-id⟧(...JJ) {
-            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = 'hz24`G!Ij_CW@1E.liP|s/:t*r=TH"O8uFU7+QMA9y{6#B<V3]DLXZv}wd$>xa?RgnY~pN0k;)bKqco^J5%femS&[(,', ⟦2-char-id⟧[⟦2-char-id⟧[60]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[67]] = ⟦2-char-id⟧[⟦2-char-id⟧[60]].length, ⟦2-char-id⟧[⟦2-char-id⟧[42]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[19]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[-⟦2-char-id⟧[95]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[-⟦2-char-id⟧[95]] < ⟦2-char-id⟧[⟦2-char-id⟧[67]]; ⟦2-char-id⟧[-⟦2-char-id⟧[95]]++)
-              if (⟦2-char-id⟧[⟦2-char-id⟧[35]] = ⟦2-char-id⟧[⟦2-char-id⟧[14]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[60]][⟦2-char-id⟧[-⟦2-char-id⟧[95]]]), ⟦2-char-id⟧[⟦2-char-id⟧[35]] !== -⟦2-char-id⟧[0])
-                if (⟦2-char-id⟧[⟦2-char-id⟧[6]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[6]] = ⟦2-char-id⟧[⟦2-char-id⟧[35]];
+          function ⟦2-char-id⟧(...BB) {
+            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[35]] = 'N]z41y._KV,Yx9W|<FiLMo&;w^(:v#t0~3q?BREUA6u}m`kc*[)p/feP5%C{HTlIdh=SbJXQD$g"2@s!n+ZGOjra8>7', ⟦2-char-id⟧[-⟦2-char-id⟧[79]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[27]] = ⟦2-char-id⟧[-⟦2-char-id⟧[79]].length, ⟦2-char-id⟧[⟦2-char-id⟧[38]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[81]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[20]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[47]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[27]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++)
+              if (⟦2-char-id⟧[-⟦2-char-id⟧[80]] = ⟦2-char-id⟧[⟦2-char-id⟧[35]].indexOf(⟦2-char-id⟧[-⟦2-char-id⟧[79]][⟦2-char-id⟧[⟦2-char-id⟧[3]]]), ⟦2-char-id⟧[-⟦2-char-id⟧[80]] !== -⟦2-char-id⟧[2])
+                if (⟦2-char-id⟧[⟦2-char-id⟧[47]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[⟦2-char-id⟧[47]] = ⟦2-char-id⟧[-⟦2-char-id⟧[80]];
                 else {
-                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[6]] += ⟦2-char-id⟧[⟦2-char-id⟧[35]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[29]] |= ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]], ⟦2-char-id⟧[⟦2-char-id⟧[19]] += (⟦2-char-id⟧[⟦2-char-id⟧[6]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                  ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[47]] += ⟦2-char-id⟧[-⟦2-char-id⟧[80]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[81]] |= ⟦2-char-id⟧[⟦2-char-id⟧[47]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]], ⟦2-char-id⟧[⟦2-char-id⟧[20]] += (⟦2-char-id⟧[⟦2-char-id⟧[47]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                   do {
-                    ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[42]].push(⟦2-char-id⟧[⟦2-char-id⟧[29]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[29]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[19]] -= ⟦2-char-id⟧[3])
-                  } while (⟦2-char-id⟧[⟦2-char-id⟧[19]] > ⟦2-char-id⟧[6]);
-                  ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]
-                } return ⟦2-char-id⟧[⟦2-char-id⟧[6]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[42]].push((⟦2-char-id⟧[⟦2-char-id⟧[29]] | ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]]) & ⟦2-char-id⟧[10]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[42]])
+                    ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[38]].push(⟦2-char-id⟧[⟦2-char-id⟧[81]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[81]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[20]] -= ⟦2-char-id⟧[3])
+                  } while (⟦2-char-id⟧[⟦2-char-id⟧[20]] > ⟦2-char-id⟧[22]);
+                  ⟦2-char-id⟧[⟦2-char-id⟧[47]] = -⟦2-char-id⟧[2]
+                } return ⟦2-char-id⟧[⟦2-char-id⟧[47]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[38]].push((⟦2-char-id⟧[⟦2-char-id⟧[81]] | ⟦2-char-id⟧[⟦2-char-id⟧[47]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]]) & ⟦2-char-id⟧[11]), ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[38]])
           }
 
-          function ⟦2-char-id⟧(⟦2-char-id⟧) {
-            return typeof ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧[⟦2-char-id⟧]
+          function ⟦2-char-id⟧(...BB) {
+            return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
           }
 
-          function ⟦2-char-id⟧(...JJ) {
-            ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = function(...JJ) {
-              for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].length, ⟦2-char-id⟧[⟦2-char-id⟧[1]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[96]] = ⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[42]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[42]] < ⟦2-char-id⟧[⟦2-char-id⟧[0]]; ⟦2-char-id⟧[⟦2-char-id⟧[42]]++) ⟦2-char-id⟧[⟦2-char-id⟧[1]].push(⟦2-char-id⟧[⟦2-char-id⟧[42]] !== ⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[42]]] > ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[42]] - ⟦2-char-id⟧[0]] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[42]] - ⟦2-char-id⟧[0]] + ⟦2-char-id⟧[0] : ⟦2-char-id⟧[0]);
-              for (⟦2-char-id⟧[⟦2-char-id⟧[47]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0]; ⟦2-char-id⟧[⟦2-char-id⟧[47]] >= ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[47]]--) ⟦2-char-id⟧[⟦2-char-id⟧[47]] !== ⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]]] > ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]] + ⟦2-char-id⟧[0]] && (⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[47]]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[47]]], ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[47]] + ⟦2-char-id⟧[0]] + ⟦2-char-id⟧[0])), ⟦2-char-id⟧[⟦2-char-id⟧[96]] += ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[47]]];
-              return ⟦2-char-id⟧[⟦2-char-id⟧[96]]
-            }, console.log(⟦2-char-id⟧[⟦2-char-id⟧[14]]))
+          function ⟦2-char-id⟧() {
+            var ⟦2-char-id⟧ = function(...BB) {
+              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], this.Kk = ⟦2-char-id⟧[⟦2-char-id⟧[1]], this.length = ⟦2-char-id⟧[1], this.map = {}, this.head = ⟦2-char-id⟧[53], this.tail = ⟦2-char-id⟧[53])
+            };
+            ⟦2-char-id⟧(⟦2-char-id⟧.prototype.get = function(...BB) {
+              var ⟦2-char-id⟧;
+              return ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]]), ⟦2-char-id⟧ ? (this.remove(⟦2-char-id⟧), this.insert(⟦2-char-id⟧.key, ⟦2-char-id⟧.val), ⟦2-char-id⟧.val) : -⟦2-char-id⟧[2]
+            }, ⟦2-char-id⟧.prototype.put = function(...BB) {
+              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[36], this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]] ? (this.remove(this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]]), this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])) : this.length === this.Kk ? (this.remove(this.head), this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])) : (this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]]), this.length++))
+            }, ⟦2-char-id⟧.prototype.remove = function(...BB) {
+              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[82]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].prev, ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].next), ⟦2-char-id⟧[⟦2-char-id⟧[0]] && (⟦2-char-id⟧[⟦2-char-id⟧[0]].prev = ⟦2-char-id⟧[-⟦2-char-id⟧[82]]), ⟦2-char-id⟧[-⟦2-char-id⟧[82]] && (⟦2-char-id⟧[-⟦2-char-id⟧[82]].next = ⟦2-char-id⟧[⟦2-char-id⟧[0]]), this.head === ⟦2-char-id⟧[⟦2-char-id⟧[1]] && (this.head = ⟦2-char-id⟧[⟦2-char-id⟧[0]]), this.tail === ⟦2-char-id⟧[⟦2-char-id⟧[1]] && (this.tail = ⟦2-char-id⟧[-⟦2-char-id⟧[82]]), delete this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]].key]
+            }, ⟦2-char-id⟧.prototype.insert = function(...BB) {
+              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[36], ⟦2-char-id⟧[⟦2-char-id⟧[5]] = new List(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]]), this.tail ? (this.tail.next = ⟦2-char-id⟧[⟦2-char-id⟧[5]], ⟦2-char-id⟧[⟦2-char-id⟧[5]].prev = this.tail, this.tail = ⟦2-char-id⟧[⟦2-char-id⟧[5]]) : (this.tail = ⟦2-char-id⟧[⟦2-char-id⟧[5]], this.head = ⟦2-char-id⟧[⟦2-char-id⟧[5]]), this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]])
+            }, console.log(⟦2-char-id⟧))
           }
-          ⟦2-char-id⟧(146) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ *= ⟦2-char-id⟧[⟦2-char-id⟧(147) + ⟦2-char-id⟧(148)]
-        }
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(149) + ⟦2-char-id⟧(150) + "ss"] * ⟦2-char-id⟧;
+          ⟦2-char-id⟧(184) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ *= ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧(185) + ⟦2-char-id⟧(186)]
+        }
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧(187) + ⟦2-char-id⟧(⟦2-char-id⟧[25]) + "ss"] * ⟦2-char-id⟧;
         if (⟦2-char-id⟧ < .3) {
           function ⟦2-char-id⟧(⟦2-char-id⟧) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-            for (⟦2-char-id⟧(⟦2-char-id⟧ = "" + (⟦2-char-id⟧ || ""), ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = [], ⟦2-char-id⟧ = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = -⟦2-char-id⟧[0]), ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
-              var ⟦2-char-id⟧ = 'ablxF8n[tf(N#.gWJ6E3)S0%zkZXVKqA5o{QIPmM=i+&2e1TRYpUH$_dcBuO/GjD?<!Lyh*r`|Cv;~49^:>,w]7@}s"'.indexOf(⟦2-char-id⟧[⟦2-char-id⟧]);
-              if (⟦2-char-id⟧ !== -⟦2-char-id⟧[0])
-                if (⟦2-char-id⟧ < ⟦2-char-id⟧[2]) ⟦2-char-id⟧ = ⟦2-char-id⟧;
+            for (⟦2-char-id⟧(⟦2-char-id⟧ = "" + (⟦2-char-id⟧ || ""), ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = [], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = -⟦2-char-id⟧[2]), ⟦2-char-id⟧ = ⟦2-char-id⟧[1]; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
+              var ⟦2-char-id⟧ = 'GBNkalFPWjiVUhLXrbEAdtQefSDqCJKR14oHI|68&{Y>T5n*$)`}?,]#s/~:wZ"!;<cxgy@0pmO+_[2M%=3z7.v(9^u'.indexOf(⟦2-char-id⟧[⟦2-char-id⟧]);
+              if (⟦2-char-id⟧ !== -⟦2-char-id⟧[2])
+                if (⟦2-char-id⟧ < ⟦2-char-id⟧[1]) ⟦2-char-id⟧ = ⟦2-char-id⟧;
                 else {
-                  ⟦2-char-id⟧(⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧[7], ⟦2-char-id⟧ |= ⟦2-char-id⟧ << ⟦2-char-id⟧, ⟦2-char-id⟧ += (⟦2-char-id⟧ & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                  ⟦2-char-id⟧(⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧[30], ⟦2-char-id⟧ |= ⟦2-char-id⟧ << ⟦2-char-id⟧, ⟦2-char-id⟧ += (⟦2-char-id⟧ & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                   do {
-                    ⟦2-char-id⟧(⟦2-char-id⟧.push(⟦2-char-id⟧ & ⟦2-char-id⟧[10]), ⟦2-char-id⟧ >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧ -= ⟦2-char-id⟧[3])
-                  } while (⟦2-char-id⟧ > ⟦2-char-id⟧[6]);
-                  ⟦2-char-id⟧ = -⟦2-char-id⟧[0]
+                    ⟦2-char-id⟧(⟦2-char-id⟧.push(⟦2-char-id⟧ & ⟦2-char-id⟧[11]), ⟦2-char-id⟧ >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧ -= ⟦2-char-id⟧[3])
+                  } while (⟦2-char-id⟧ > ⟦2-char-id⟧[22]);
+                  ⟦2-char-id⟧ = -⟦2-char-id⟧[2]
                 }
             }
-            return ⟦2-char-id⟧ > -⟦2-char-id⟧[0] && ⟦2-char-id⟧.push((⟦2-char-id⟧ | ⟦2-char-id⟧ << ⟦2-char-id⟧) & ⟦2-char-id⟧[10]), ⟦2-char-id⟧(⟦2-char-id⟧)
+            return ⟦2-char-id⟧ > -⟦2-char-id⟧[2] && ⟦2-char-id⟧.push((⟦2-char-id⟧ | ⟦2-char-id⟧ << ⟦2-char-id⟧) & ⟦2-char-id⟧[11]), ⟦2-char-id⟧(⟦2-char-id⟧)
           }
 
-          function ⟦2-char-id⟧(...JJ) {
-            return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]
+          function ⟦2-char-id⟧(...BB) {
+            return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
           }
 
-          function ⟦2-char-id⟧(...JJ) {
-            ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2]
+          function ⟦2-char-id⟧(...BB) {
+            var ⟦2-char-id⟧;
+            ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = function(...BB) {
+              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], this.Kk = ⟦2-char-id⟧[⟦2-char-id⟧[1]], this.length = ⟦2-char-id⟧[1], this.map = {}, this.head = ⟦2-char-id⟧[53], this.tail = ⟦2-char-id⟧[53])
+            }, ⟦2-char-id⟧.prototype.get = function(...BB) {
+              var ⟦2-char-id⟧;
+              return ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]]), ⟦2-char-id⟧ ? (this.remove(⟦2-char-id⟧), this.insert(⟦2-char-id⟧.key, ⟦2-char-id⟧.val), ⟦2-char-id⟧.val) : -⟦2-char-id⟧[2]
+            }, ⟦2-char-id⟧.prototype.put = function(...BB) {
+              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[36], this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]] ? (this.remove(this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]]), this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])) : this.length === this.Kk ? (this.remove(this.head), this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])) : (this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]]), this.length++))
+            }, ⟦2-char-id⟧.prototype.remove = function(...BB) {
+              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].prev, ⟦2-char-id⟧[⟦2-char-id⟧[83]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].next), ⟦2-char-id⟧[⟦2-char-id⟧[83]] && (⟦2-char-id⟧[⟦2-char-id⟧[83]].prev = ⟦2-char-id⟧[⟦2-char-id⟧[2]]), ⟦2-char-id⟧[⟦2-char-id⟧[2]] && (⟦2-char-id⟧[⟦2-char-id⟧[2]].next = ⟦2-char-id⟧[⟦2-char-id⟧[83]]), this.head === ⟦2-char-id⟧[⟦2-char-id⟧[1]] && (this.head = ⟦2-char-id⟧[⟦2-char-id⟧[83]]), this.tail === ⟦2-char-id⟧[⟦2-char-id⟧[1]] && (this.tail = ⟦2-char-id⟧[⟦2-char-id⟧[2]]), delete this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]].key]
+            }, ⟦2-char-id⟧.prototype.insert = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+              var ⟦2-char-id⟧ = new List(⟦2-char-id⟧, ⟦2-char-id⟧);
+              ⟦2-char-id⟧(this.tail ? (this.tail.next = ⟦2-char-id⟧, ⟦2-char-id⟧.prev = this.tail, this.tail = ⟦2-char-id⟧) : (this.tail = ⟦2-char-id⟧, this.head = ⟦2-char-id⟧), this.map[⟦2-char-id⟧] = ⟦2-char-id⟧)
+            }, console.log(⟦2-char-id⟧))
           }
-          ⟦2-char-id⟧(151) + "U" in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ *= ⟦2-char-id⟧
-        }
-        ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(152)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧(153) + ⟦2-char-id⟧(⟦2-char-id⟧[88])](⟦2-char-id⟧))
+          ⟦2-char-id⟧(⟦2-char-id⟧[76]) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ *= ⟦2-char-id⟧
+        }
+        ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(190)](⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧[38]][⟦2-char-id⟧(191) + ⟦2-char-id⟧(⟦2-char-id⟧[68])](⟦2-char-id⟧))
       }
-      ⟦2-char-id⟧[⟦2-char-id⟧(155) + ⟦2-char-id⟧[98]] = ⟦2-char-id⟧[⟦2-char-id⟧(156) + ⟦2-char-id⟧(⟦2-char-id⟧[34]) + ⟦2-char-id⟧[98]] * (⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧)
+      ⟦2-char-id⟧[⟦2-char-id⟧[38]][⟦2-char-id⟧(193) + ⟦2-char-id⟧[84]] = ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧(194) + ⟦2-char-id⟧(⟦2-char-id⟧[51]) + ⟦2-char-id⟧[84]] * (⟦2-char-id⟧ ? VB : ⟦2-char-id⟧)
     }
   },
-  36618: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36552: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36626),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1671);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36561),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1652);
     const ⟦2-char-id⟧ = 2,
       ⟦2-char-id⟧ = 1,
       ⟦2-char-id⟧ = {
-        Oj: 1,
+        ho: 1,
         fluidDrag: -1,
         fluidDragHorizontal: -1,
         fluidDragVertical: -1,
```

</details>

<details>
<summary>Hunk 39 · Change · +3 / -3</summary>

```diff
@@ -1123,11 +1115,11 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.bloxd.getSyncedClientOptions(⟦2-char-id⟧.bloxd.getPlayerReader(⟦2-char-id⟧)),
         ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.bloxd.getClientPredictedOption(⟦2-char-id⟧, "groundFrictionScale") : ⟦2-char-id⟧.groundFrictionScale,
         ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.bloxd.getClientPredictedOption(⟦2-char-id⟧, "airFrictionScale") : ⟦2-char-id⟧.airFrictionScale,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? sJ : ⟦2-char-id⟧,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? OB : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.ticksToReachMaxIdleFriction / ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-      ⟦2-char-id⟧.friction = ⟦2-char-id⟧.standingFriction * ((null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.bloxd.getClientPredictedOption(⟦2-char-id⟧, "airMomentumConservation") : ⟦2-char-id⟧.airMomentumConservation) ? rJ : ⟦2-char-id⟧), ⟦2-char-id⟧.ticksToReachMaxIdleFriction > 0 && ⟦2-char-id⟧.ticksToReachMaxIdleFriction--
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+      ⟦2-char-id⟧.friction = ⟦2-char-id⟧.standingFriction * ((null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.bloxd.getClientPredictedOption(⟦2-char-id⟧, "airMomentumConservation") : ⟦2-char-id⟧.airMomentumConservation) ? vB : ⟦2-char-id⟧), ⟦2-char-id⟧.ticksToReachMaxIdleFriction > 0 && ⟦2-char-id⟧.ticksToReachMaxIdleFriction--
     }
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/208.js</code> · modified · +20 / -20</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 208;
 export const ids = [208];
 export const modules = {
-  38594: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  38536: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       getBlockFaces: () => ⟦2-char-id⟧,
       getIngameIconUrl: () => ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 2 · Change · +5 / -5</summary>

```diff
@@ -9,17 +9,17 @@
       getItemTextureUrl: () => ⟦2-char-id⟧,
       getParticleTextureUrl: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3872),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36052),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8631),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2649);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3877),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35984),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8644),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2623);
     const ⟦2-char-id⟧ = new Set,
       ⟦2-char-id⟧ = new Set;
     let ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       ⟦2-char-id⟧.has(⟦2-char-id⟧) || (⟦2-char-id⟧.add(⟦2-char-id⟧), ⟦2-char-id⟧.add(⟦2-char-id⟧), ⟦2-char-id⟧ ??= setTimeout((() => {
-        console.warn(`Docs gallery: no default texture for ${qJ.size} names`, [...qJ]), ⟦2-char-id⟧.clear(), ⟦2-char-id⟧ = null
+        console.warn(`Docs gallery: no default texture for ${YB.size} names`, [...YB]), ⟦2-char-id⟧.clear(), ⟦2-char-id⟧ = null
       }), 1⟦2-char-id⟧))
     }
 
```

</details>

<details>
<summary>Hunk 3 · Change · +14 / -14</summary>

```diff
@@ -33,48 +33,48 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧];
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.k[⟦2-char-id⟧];
       if (!⟦2-char-id⟧ || ⟦2-char-id⟧.itemTexture || !⟦2-char-id⟧.textureInfo) return null;
       const {
         textureInfo: ⟦2-char-id⟧,
         texturePerSide: ⟦2-char-id⟧
       } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
-        return "string" === typeof(⟦2-char-id⟧ = ⟦2-char-id⟧ && Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] : ⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.f.BLOCK) : ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ && "animTextures" in ⟦2-char-id⟧ ? ⟦2-char-id⟧((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧), ⟦2-char-id⟧.f.BLOCK) : null;
+        return "string" === typeof(⟦2-char-id⟧ = ⟦2-char-id⟧ && Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] : ⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.e.BLOCK) : ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ && "animTextures" in ⟦2-char-id⟧ ? ⟦2-char-id⟧((0, ⟦2-char-id⟧.l)(⟦2-char-id⟧), ⟦2-char-id⟧.e.BLOCK) : null;
         var ⟦2-char-id⟧
       }, ⟦2-char-id⟧ = ⟦2-char-id⟧(2);
       return ⟦2-char-id⟧ ? {
         top: ⟦2-char-id⟧,
-        left: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(4)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧,
-        right: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(0)) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧
+        left: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(4)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧,
+        right: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(0)) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧
       } : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧];
-      return ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.itemTexture) && void 0 !== ⟦2-char-id⟧ ? cJ : "string" === typeof(null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.textureInfo) ? ⟦2-char-id⟧.textureInfo : ⟦2-char-id⟧, ⟦2-char-id⟧.f.ITEM)
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.k[⟦2-char-id⟧];
+      return ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.itemTexture) && void 0 !== ⟦2-char-id⟧ ? TB : "string" === typeof(null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.textureInfo) ? ⟦2-char-id⟧.textureInfo : ⟦2-char-id⟧, ⟦2-char-id⟧.e.ITEM)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return ⟦2-char-id⟧.m[⟦2-char-id⟧] ? null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.top) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧) : null
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.f.ICON)
+      return ⟦2-char-id⟧.k[⟦2-char-id⟧] ? null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.top) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧) : null
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.e.ICON)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       try {
-        return ⟦2-char-id⟧(2802)(`./${JJ}.png`)
+        return ⟦2-char-id⟧(2785)(`./${BB}.png`)
       } catch {
         return ⟦2-char-id⟧(⟦2-char-id⟧), null
       }
     }
   },
-  36067: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36e3: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = {
       "skyblock:forged:astral-astral-astral": {
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/209.js</code> · modified · +130 / -130</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +9 / -9</summary>

```diff
@@ -1,30 +1,30 @@
 export const ⟦2-char-id⟧ = 209;
 export const ids = [209];
 export const modules = {
-  59412: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  59734: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       DEVTOOLS_SHADERS: () => ⟦2-char-id⟧,
       registerDevtoolsShader: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38658),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36093);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38595),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36033);
     const ⟦2-char-id⟧ = {
       devtoolsNormal: function(⟦2-char-id⟧) {
         return {
-          vertex: `\n\t\t\t${(0,UJ.g)(JJ,"position","vec3")}\n\t\t\t${(0,UJ.g)(JJ,"normal","vec3")}\n\t\t\t${(0,UJ.Gb)(JJ,"worldViewProjection","mat4")}\n\t\t\t${(0,UJ.Gb)(JJ,"world","mat4")}\n\t\t\t${(0,UJ.Ib)(JJ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,UJ.Mb)(JJ,`\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.l)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.Hb)(⟦2-char-id⟧,"worldViewProjection")} * ${(0,⟦2-char-id⟧.p)(⟦2-char-id⟧,"vec4",(0,⟦2-char-id⟧.Nb)(⟦2-char-id⟧,"position"),"1.0")};\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.Ob)(⟦2-char-id⟧,"vNormal")} = normalize((${(0,⟦2-char-id⟧.Hb)(⟦2-char-id⟧,"world")} * ${(0,⟦2-char-id⟧.p)(⟦2-char-id⟧,"vec4",(0,⟦2-char-id⟧.Nb)(⟦2-char-id⟧,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
-          fragment: `\n\t\t\t${(0,UJ.Ib)(JJ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,UJ.Z)(JJ,`\n\t\t\t\t\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.H)(⟦2-char-id⟧,"vec3","normalColor",`abs(${(0,UJ.$)(JJ,"vNormal")})`)}\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.T)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.p)(⟦2-char-id⟧,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+          vertex: `\n\t\t\t${(0,yB.f)(BB,"position","vec3")}\n\t\t\t${(0,yB.f)(BB,"normal","vec3")}\n\t\t\t${(0,yB.Db)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,yB.Db)(BB,"world","mat4")}\n\t\t\t${(0,yB.Jb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yB.Nb)(BB,`\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.l)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.Fb)(⟦2-char-id⟧,"worldViewProjection")} * ${(0,⟦2-char-id⟧.o)(⟦2-char-id⟧,"vec4",(0,⟦2-char-id⟧.Qb)(⟦2-char-id⟧,"position"),"1.0")};\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.Rb)(⟦2-char-id⟧,"vNormal")} = normalize((${(0,⟦2-char-id⟧.Fb)(⟦2-char-id⟧,"world")} * ${(0,⟦2-char-id⟧.o)(⟦2-char-id⟧,"vec4",(0,⟦2-char-id⟧.Qb)(⟦2-char-id⟧,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
+          fragment: `\n\t\t\t${(0,yB.Jb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yB.U)(BB,`\n\t\t\t\t\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.F)(⟦2-char-id⟧,"vec3","normalColor",`abs(${(0,yB.Y)(BB,"vNormal")})`)}\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.P)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.o)(⟦2-char-id⟧,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
         }
       },
       devtoolsWhite: function(⟦2-char-id⟧) {
         return {
-          vertex: `\n\t\t\t${(0,UJ.g)(JJ,"position","vec3")}\n\t\t\t${(0,UJ.Gb)(JJ,"worldViewProjection","mat4")}\n\n\t\t\t${(0,UJ.Mb)(JJ,`\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.l)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.Hb)(⟦2-char-id⟧,"worldViewProjection")} * ${(0,⟦2-char-id⟧.p)(⟦2-char-id⟧,"vec4",(0,⟦2-char-id⟧.Nb)(⟦2-char-id⟧,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
-          fragment: `\n\t\t\t${(0,UJ.Z)(JJ,`\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.T)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.p)(⟦2-char-id⟧,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+          vertex: `\n\t\t\t${(0,yB.f)(BB,"position","vec3")}\n\t\t\t${(0,yB.Db)(BB,"worldViewProjection","mat4")}\n\n\t\t\t${(0,yB.Nb)(BB,`\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.l)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.Fb)(⟦2-char-id⟧,"worldViewProjection")} * ${(0,⟦2-char-id⟧.o)(⟦2-char-id⟧,"vec4",(0,⟦2-char-id⟧.Qb)(⟦2-char-id⟧,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
+          fragment: `\n\t\t\t${(0,yB.U)(BB,`\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.P)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.o)(⟦2-char-id⟧,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
         }
       },
       devtoolsDepth: function(⟦2-char-id⟧) {
         return {
-          vertex: `\n\t\t\t${(0,UJ.g)(JJ,"position","vec3")}\n\t\t\t${(0,UJ.Gb)(JJ,"worldViewProjection","mat4")}\n\t\t\t${(0,UJ.Gb)(JJ,"world","mat4")}\n\t\t\t${(0,UJ.Gb)(JJ,"cameraPosition","vec3")}\n\t\t\t${(0,UJ.Ib)(JJ,"vDepth","float","mediump")}\n\n\t\t\t${(0,UJ.Mb)(JJ,`\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.l)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.Hb)(⟦2-char-id⟧,"worldViewProjection")} * ${(0,⟦2-char-id⟧.p)(⟦2-char-id⟧,"vec4",(0,⟦2-char-id⟧.Nb)(⟦2-char-id⟧,"position"),"1.0")};\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.H)(⟦2-char-id⟧,"vec3","worldPosition",`(${(0,UJ.Hb)(JJ,"world")} * ${(0,UJ.p)(JJ,"vec4",(0,UJ.Nb)(JJ,"position"),"1.0")}).xyz`)}\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.Ob)(⟦2-char-id⟧,"vDepth")} = distance(worldPosition, ${(0,⟦2-char-id⟧.Hb)(⟦2-char-id⟧,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
-          fragment: `\n\t\t\t${(0,UJ.Ib)(JJ,"vDepth","float","mediump")}\n\t\t\t${(0,UJ.Gb)(JJ,"maxDepth","float")}\n\t\t\t${(0,UJ.Gb)(JJ,"minDepth","float")}\n\n\t\t\t${(0,UJ.Z)(JJ,`\n\t\t\t\t\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.H)(⟦2-char-id⟧,"float","normalizedDepth",`clamp((${(0,UJ.$)(JJ,"vDepth")} - ${(0,UJ.Hb)(JJ,"minDepth")}) / (${(0,UJ.Hb)(JJ,"maxDepth")} - ${(0,UJ.Hb)(JJ,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.H)(⟦2-char-id⟧,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.T)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.p)(⟦2-char-id⟧,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
+          vertex: `\n\t\t\t${(0,yB.f)(BB,"position","vec3")}\n\t\t\t${(0,yB.Db)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,yB.Db)(BB,"world","mat4")}\n\t\t\t${(0,yB.Db)(BB,"cameraPosition","vec3")}\n\t\t\t${(0,yB.Jb)(BB,"vDepth","float","mediump")}\n\n\t\t\t${(0,yB.Nb)(BB,`\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.l)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.Fb)(⟦2-char-id⟧,"worldViewProjection")} * ${(0,⟦2-char-id⟧.o)(⟦2-char-id⟧,"vec4",(0,⟦2-char-id⟧.Qb)(⟦2-char-id⟧,"position"),"1.0")};\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.F)(⟦2-char-id⟧,"vec3","worldPosition",`(${(0,yB.Fb)(BB,"world")} * ${(0,yB.o)(BB,"vec4",(0,yB.Qb)(BB,"position"),"1.0")}).xyz`)}\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.Rb)(⟦2-char-id⟧,"vDepth")} = distance(worldPosition, ${(0,⟦2-char-id⟧.Fb)(⟦2-char-id⟧,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
+          fragment: `\n\t\t\t${(0,yB.Jb)(BB,"vDepth","float","mediump")}\n\t\t\t${(0,yB.Db)(BB,"maxDepth","float")}\n\t\t\t${(0,yB.Db)(BB,"minDepth","float")}\n\n\t\t\t${(0,yB.U)(BB,`\n\t\t\t\t\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.F)(⟦2-char-id⟧,"float","normalizedDepth",`clamp((${(0,yB.Y)(BB,"vDepth")} - ${(0,yB.Fb)(BB,"minDepth")}) / (${(0,yB.Fb)(BB,"maxDepth")} - ${(0,yB.Fb)(BB,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.F)(⟦2-char-id⟧,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\⟦2-char-id⟧{(0,⟦2-char-id⟧.P)(⟦2-char-id⟧)} = ${(0,⟦2-char-id⟧.o)(⟦2-char-id⟧,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
         }
       }
     };
```

</details>

<details>
<summary>Hunk 2 · Change · +28 / -28</summary>

```diff
@@ -33,48 +33,48 @@
       const {
         vertex: ⟦2-char-id⟧,
         fragment: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.b.GetShadersStore(⟦2-char-id⟧);
-      ⟦2-char-id⟧[`${JJ}VertexShader`] = ⟦2-char-id⟧, ⟦2-char-id⟧[`${JJ}FragmentShader`] = ⟦2-char-id⟧
+      } = ⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.e.GetShadersStore(⟦2-char-id⟧);
+      ⟦2-char-id⟧[`${BB}VertexShader`] = ⟦2-char-id⟧, ⟦2-char-id⟧[`${BB}FragmentShader`] = ⟦2-char-id⟧
     }
   },
-  36093: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36033: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      $: () => ⟦2-char-id⟧,
-      A: () => ⟦2-char-id⟧,
-      Bb: () => ⟦2-char-id⟧,
-      E: () => ⟦2-char-id⟧,
+      Cb: () => ⟦2-char-id⟧,
+      D: () => ⟦2-char-id⟧,
+      Db: () => ⟦2-char-id⟧,
+      F: () => ⟦2-char-id⟧,
       Fb: () => ⟦2-char-id⟧,
-      Gb: () => ⟦2-char-id⟧,
       H: () => ⟦2-char-id⟧,
-      Hb: () => ⟦2-char-id⟧,
-      Ib: () => ⟦2-char-id⟧,
-      L: () => ⟦2-char-id⟧,
-      Mb: () => ⟦2-char-id⟧,
+      Jb: () => ⟦2-char-id⟧,
+      K: () => ⟦2-char-id⟧,
+      N: () => ⟦2-char-id⟧,
       Nb: () => ⟦2-char-id⟧,
-      Ob: () => ⟦2-char-id⟧,
       P: () => ⟦2-char-id⟧,
-      Q: () => ⟦2-char-id⟧,
-      T: () => ⟦2-char-id⟧,
-      X: () => ⟦2-char-id⟧,
-      Z: () => ⟦2-char-id⟧,
+      Qb: () => ⟦2-char-id⟧,
+      R: () => ⟦2-char-id⟧,
+      Rb: () => ⟦2-char-id⟧,
+      U: () => ⟦2-char-id⟧,
+      Y: () => ⟦2-char-id⟧,
       ab: () => ⟦2-char-id⟧,
-      c: () => ⟦2-char-id⟧,
-      cb: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧,
-      gb: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧,
-      ib: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
+      db: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧,
+      fb: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧,
+      jb: () => ⟦2-char-id⟧,
+      kb: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧,
-      mb: () => ⟦2-char-id⟧,
-      nb: () => ⟦2-char-id⟧,
-      p: () => ⟦2-char-id⟧,
-      pb: () => ⟦2-char-id⟧,
+      o: () => ⟦2-char-id⟧,
+      ob: () => ⟦2-char-id⟧,
       r: () => ⟦2-char-id⟧,
       rb: () => ⟦2-char-id⟧,
+      sb: () => ⟦2-char-id⟧,
       u: () => ⟦2-char-id⟧,
+      ub: () => ⟦2-char-id⟧,
       vb: () => ⟦2-char-id⟧,
       w: () => ⟦2-char-id⟧,
-      yb: () => ⟦2-char-id⟧,
+      xb: () => ⟦2-char-id⟧,
+      z: () => ⟦2-char-id⟧,
       zb: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -87,7 +87,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? ZJ : ⟦2-char-id⟧
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? dB : ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = new Map([
       ["int", "i32"],
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -103,13 +103,13 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (!⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
-      if (!⟦2-char-id⟧) throw new Error(`No WGSL name for shader type "${cJ}"`);
+      if (!⟦2-char-id⟧) throw new Error(`No WGSL name for shader type "${TB}"`);
       return ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧ > 2 ? ⟦2-char-id⟧ - 2 : 0), ⟦2-char-id⟧ = 2; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧ - 2] = arguments[⟦2-char-id⟧];
-      return `${AJ(JJ,cJ)}(${FJ.join(", ")})`
+      return `${JB(BB,TB)}(${VB.join(", ")})`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +28 / -28</summary>

```diff
@@ -117,38 +117,38 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `var ${ZJ}: ${AJ(JJ,cJ)} = ${FJ};` : `${nJ(JJ,eJ)}${cJ} ${ZJ} = ${FJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `var ${ZJ}: ${AJ(JJ,cJ)};` : `${cJ} ${ZJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `const ${ZJ}: ${AJ(JJ,cJ)} = ${FJ};` : `const ${cJ} ${ZJ} = ${FJ};`
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `var ${dB}: ${JB(BB,TB)} = ${VB};` : `${DB(BB,pB)}${TB} ${dB} = ${VB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `var ${dB}: ${JB(BB,TB)};` : `${TB} ${dB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `const ${dB}: ${JB(BB,TB)} = ${VB};` : `const ${TB} ${dB} = ${VB};`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧(⟦2-char-id⟧)) {
-        return `fn ${ZJ}(${FJ.map((cJ=>`${⟦2-char-id⟧.name}: ${⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.type)}`)).join(", ")}) -> ${AJ(JJ,cJ)} {${eJ}}`
-      }
-      return `${cJ} ${ZJ}(${FJ.map((JJ=>`${⟦2-char-id⟧.type} ${⟦2-char-id⟧.name}`)).join(", ")}) {${eJ}}`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return !⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧) ? "" : `${cJ} `
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `attribute ${cJ}: ${AJ(JJ,ZJ)};` : `attribute ${nJ(JJ,FJ)}${ZJ} ${cJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `varying ${cJ}: ${AJ(JJ,ZJ)};` : `varying ${nJ(JJ,FJ)}${ZJ} ${cJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `uniform ${cJ}: ${AJ(JJ,ZJ)};` : `uniform ${ZJ} ${cJ};`
+        return `fn ${dB}(${VB.map((TB=>`${⟦2-char-id⟧.name}: ${⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧.type)}`)).join(", ")}) -> ${JB(BB,TB)} {${pB}}`
+      }
+      return `${TB} ${dB}(${VB.map((BB=>`${⟦2-char-id⟧.type} ${⟦2-char-id⟧.name}`)).join(", ")}) {${pB}}`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return !⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧) ? "" : `${TB} `
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `attribute ${TB}: ${JB(BB,dB)};` : `attribute ${DB(BB,VB)}${dB} ${TB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `varying ${TB}: ${JB(BB,dB)};` : `varying ${DB(BB,VB)}${dB} ${TB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `uniform ${TB}: ${JB(BB,dB)};` : `uniform ${dB} ${TB};`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +14 / -14</summary>

```diff
@@ -156,30 +156,30 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${cJ}}` : `void main() {${cJ}}`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${cJ}}` : `void main() {${cJ}}`
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${TB}}` : `void main() {${TB}}`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${TB}}` : `void main() {${TB}}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧(⟦2-char-id⟧)) {
-        return [`var ${cJ}Sampler: sampler;`, `var ${cJ}: ${"2dArray"===ZJ?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
-      }
-      return `uniform highp ${"2dArray"===ZJ?"sampler2DArray":"sampler2D"} ${cJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `textureSample(${cJ}, ${cJ}Sampler, ${ZJ})` : `texture2D(${cJ}, ${ZJ})`
+        return [`var ${TB}Sampler: sampler;`, `var ${TB}: ${"2dArray"===dB?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+      }
+      return `uniform highp ${"2dArray"===dB?"sampler2DArray":"sampler2D"} ${TB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `textureSample(${TB}, ${TB}Sampler, ${dB})` : `texture2D(${TB}, ${dB})`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧(⟦2-char-id⟧)) {
-        return `${eJ?"textureSampleLevel":"textureSample"}(${cJ}, ${cJ}Sampler, ${ZJ}, ${jJ(JJ,`round(${⟦2-char-id⟧})`)}${eJ?`, ${⟦2-char-id⟧}`:""})`
+        return `${pB?"textureSampleLevel":"textureSample"}(${TB}, ${TB}Sampler, ${dB}, ${gB(BB,`round(${⟦2-char-id⟧})`)}${pB?`, ${⟦2-char-id⟧}`:""})`
       }
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, "vec3", ⟦2-char-id⟧, ⟦2-char-id⟧);
-      return ⟦2-char-id⟧ ? `textureLod(${cJ}, ${XJ}, ${eJ})` : `texture(${cJ}, ${XJ})`
+      return ⟦2-char-id⟧ ? `textureLod(${TB}, ${lB}, ${pB})` : `texture(${TB}, ${lB})`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 7 · Change · +17 / -17</summary>

```diff
@@ -195,23 +195,23 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `vertexInputs.${cJ}` : ⟦2-char-id⟧
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `vertexOutputs.${cJ}` : ⟦2-char-id⟧
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `fragmentInputs.${cJ}` : ⟦2-char-id⟧
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `uniforms.${cJ}` : ⟦2-char-id⟧
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `frame.${cJ}` : ⟦2-char-id⟧
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `vertexInputs.${TB}` : ⟦2-char-id⟧
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `vertexOutputs.${TB}` : ⟦2-char-id⟧
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `fragmentInputs.${TB}` : ⟦2-char-id⟧
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `uniforms.${TB}` : ⟦2-char-id⟧
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `frame.${TB}` : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +31 / -31</summary>

```diff
@@ -231,40 +231,40 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `dpdx(${cJ})` : `dFdx(${cJ})`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `dpdy(${cJ})` : `dFdy(${cJ})`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `inverseSqrt(${cJ})` : `inversesqrt(${cJ})`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `select(${FJ}, ${ZJ}, ${cJ})` : `((${cJ}) ? (${ZJ}) : (${FJ}))`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `((${cJ}) - (${ZJ}) * floor((${cJ}) / (${ZJ})))` : `mod(${cJ}, ${ZJ})`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${cJ} = vec4f(${ZJ}, ${cJ}.a);` : `${cJ}.rgb = ${ZJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${cJ} = vec4f(${cJ}.rgb * (${ZJ}), ${cJ}.a);` : `${cJ}.rgb *= ${ZJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${cJ} = vec4f(${ZJ}, ${cJ}.w);` : `${cJ}.xyz = ${ZJ};`
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `dpdx(${TB})` : `dFdx(${TB})`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `dpdy(${TB})` : `dFdy(${TB})`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `inverseSqrt(${TB})` : `inversesqrt(${TB})`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `select(${VB}, ${dB}, ${TB})` : `((${TB}) ? (${dB}) : (${VB}))`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `((${TB}) - (${dB}) * floor((${TB}) / (${dB})))` : `mod(${TB}, ${dB})`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${TB} = vec4f(${dB}, ${TB}.a);` : `${TB}.rgb = ${dB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${TB} = vec4f(${TB}.rgb * (${dB}), ${TB}.a);` : `${TB}.rgb *= ${dB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${TB} = vec4f(${dB}, ${TB}.w);` : `${TB}.xyz = ${dB};`
     }
   },
-  38658: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  38595: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
     class ⟦2-char-id⟧ {
       static GetShadersRepository() {
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/210.js</code> · modified · +25 / -25</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +3 / -3</summary>

```diff
@@ -1,10 +1,10 @@
 export const ⟦2-char-id⟧ = 210;
 export const ids = [210];
 export const modules = {
-  36177: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36132: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧,
       j: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = 1 / 2.2,
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -12,7 +12,7 @@
     Math.sqrt(5);
     let ⟦2-char-id⟧ = .001
   },
-  36207: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36157: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return parseInt(⟦2-char-id⟧.toString().replace(/\W/g, ""))
     }
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -28,7 +28,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? JJ : Math.random() * (⟦2-char-id⟧ - ⟦2-char-id⟧) + ⟦2-char-id⟧
+      return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? BB : Math.random() * (⟦2-char-id⟧ - ⟦2-char-id⟧) + ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -113,13 +113,13 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧) <= ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧ + Math.sign(⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧, ⟦2-char-id⟧
+      return ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧) <= ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧ + Math.sign(⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧, ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
       let ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = -⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
+      return ⟦2-char-id⟧ = -⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -132,7 +132,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ % ⟦2-char-id⟧;
-      return 0 === ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
+      return 0 === ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       Clamp: () => ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 6 · Change · +12 / -12</summary>

```diff
@@ -161,20 +161,20 @@
       WithinEpsilon: () => ⟦2-char-id⟧
     })
   },
-  36165: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36119: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       Matrix: () => ⟦2-char-id⟧.b,
-      Quaternion: () => ⟦2-char-id⟧.e,
-      RegisterMathVector: () => ⟦2-char-id⟧.f,
-      TmpVectors: () => ⟦2-char-id⟧.h,
-      Vector2: () => ⟦2-char-id⟧.i,
-      Pn: () => ⟦2-char-id⟧.j,
-      Vector4: () => ⟦2-char-id⟧.k
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174);
-    (0, ⟦2-char-id⟧.f)()
-  },
-  36183: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      Quaternion: () => ⟦2-char-id⟧.f,
+      RegisterMathVector: () => ⟦2-char-id⟧.i,
+      TmpVectors: () => ⟦2-char-id⟧.j,
+      Vector2: () => ⟦2-char-id⟧.l,
+      RD: () => ⟦2-char-id⟧.p,
+      Vector4: () => ⟦2-char-id⟧.r
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126);
+    (0, ⟦2-char-id⟧.i)()
+  },
+  36137: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = [];
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) ⟦2-char-id⟧.push(⟦2-char-id⟧());
```

</details>

<details>
<summary>Hunk 7 · Change · +3 / -3</summary>

```diff
@@ -185,9 +185,9 @@
       return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
-      k: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = ["push", "splice", "pop", "shift", "unshift"];
 
```

</details>

<details>
<summary>Hunk 8 · Change · +2 / -2</summary>

```diff
@@ -212,10 +212,10 @@
       }
     }
   },
-  36216: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36166: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
+      g: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = {};
 
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/211.js</code> · modified · +159 / -159</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +6 / -6</summary>

```diff
@@ -1,16 +1,16 @@
-/*! For license information please see symm5.211.129163d5.chunk.js.LICENSE.txt */
+/*! For license information please see l9xvfg.211.34007cd2.chunk.js.LICENSE.txt */
 export const ⟦2-char-id⟧ = 211;
 export const ids = [211, 217];
 export const modules = {
-  37283: ⟦2-char-id⟧ => {
+  37241: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧) {
       return null != ⟦2-char-id⟧ && null != ⟦2-char-id⟧.constructor && "function" === typeof ⟦2-char-id⟧.constructor.isBuffer && ⟦2-char-id⟧.constructor.isBuffer(⟦2-char-id⟧)
     }
   },
-  37267: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37270),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37278),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37283);
+  37219: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37234),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37241);
     ⟦2-char-id⟧.g.__TYPEDARRAY_POOL || (⟦2-char-id⟧.g.__TYPEDARRAY_POOL = {
       UINT8: ⟦2-char-id⟧([32, 0]),
       UINT16: ⟦2-char-id⟧([32, 0]),
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -132,7 +132,7 @@
       for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 32; ++⟦2-char-id⟧) ⟦2-char-id⟧.UINT8[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.UINT16[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.UINT32[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.INT8[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.INT16[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.INT32[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.FLOAT[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.DOUBLE[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.UINT8C[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧[⟦2-char-id⟧].length = 0
     }
   },
-  37270: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  37225: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = 32;
       return (⟦2-char-id⟧ &= -⟦2-char-id⟧) && ⟦2-char-id⟧--, 65535 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 16), 16711935 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 8), 252645135 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 4), 858993459 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 2), 1431655765 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 1), ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -186,7 +186,7 @@
       return ⟦2-char-id⟧ + 1 | (~⟦2-char-id⟧ & -~⟦2-char-id⟧) - 1 >>> ⟦2-char-id⟧(⟦2-char-id⟧) + 1
     }
   },
-  37262: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37213: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       switch (arguments.length) {
         case 1:
```

</details>

<details>
<summary>Hunk 4 · Change · +3 / -3</summary>

```diff
@@ -202,9 +202,9 @@
       }
       var ⟦2-char-id⟧
     };
-    var ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(37267),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37292),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37305);
+    var ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(37219),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37246),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37264);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -249,7 +249,7 @@
       ⟦2-char-id⟧.push([⟦2-char-id⟧, ⟦2-char-id⟧])
     }
   },
-  37310: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  37272: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
     var ⟦2-char-id⟧ = "d",
       ⟦2-char-id⟧ = "ax",
       ⟦2-char-id⟧ = "fp",
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -288,7 +288,7 @@
     }
     ⟦2-char-id⟧.partial = ⟦2-char-id⟧(!1), ⟦2-char-id⟧.full = ⟦2-char-id⟧(!0)
   },
-  37305: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37264: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       ! function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = 8 * ⟦2-char-id⟧.log2(⟦2-char-id⟧ + 1) * (⟦2-char-id⟧ + 1) | 0,
```

</details>

<details>
<summary>Hunk 7 · Change · +6 / -6</summary>

```diff
@@ -364,14 +364,14 @@
         }
       }
     };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37267),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37270),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37310),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37219),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37272),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.partial,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.full,
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37292),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37312),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37319),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37246),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37275),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37281),
       ⟦2-char-id⟧ = 128,
       ⟦2-char-id⟧ = 1 << 22,
       ⟦2-char-id⟧ = 1 << 22,
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -397,7 +397,7 @@
       var ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧];
-      JJ: for (var ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧) {
+      BB: for (var ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧];
         if (!(⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ < ⟦2-char-id⟧) && (!⟦2-char-id⟧ || ⟦2-char-id⟧ !== ⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -416,7 +416,7 @@
       var ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧];
-      JJ: for (var ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧) {
+      BB: for (var ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
         if (⟦2-char-id⟧ !== ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -435,7 +435,7 @@
       }
     }
   },
-  37312: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37275: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧ <= ⟦2-char-id⟧ + 1) return ⟦2-char-id⟧;
       var ⟦2-char-id⟧ = ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -478,7 +478,7 @@
       }
       return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧])
     };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37319)("lo<p0", ["p0"]),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37281)("lo<p0", ["p0"]),
       ⟦2-char-id⟧ = 8;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -493,7 +493,7 @@
         }
     }
   },
-  37319: ⟦2-char-id⟧ => {
+  37281: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = "abcdef".split("").concat(⟦2-char-id⟧),
         ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -503,7 +503,7 @@
     };
     var ⟦2-char-id⟧ = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
   },
-  37301: ⟦2-char-id⟧ => {
+  37255: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ <= 4 * ⟦2-char-id⟧ ? ⟦2-char-id⟧(0, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧) : ⟦2-char-id⟧(0, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧)
     };
```

</details>

<details>
<summary>Hunk 14 · Change · +1 / -1</summary>

```diff
@@ -592,7 +592,7 @@
       ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ - 2 - ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 2, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 2, ⟦2-char-id⟧), ⟦2-char-id⟧ - (⟦2-char-id⟧ + 2) <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧ + 2, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧ + 2, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ - ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
     }
   },
-  37292: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37246: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = {
       init: function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.nextPow2(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -605,7 +605,7 @@
         var ⟦2-char-id⟧ = 8 * ⟦2-char-id⟧;
         ⟦2-char-id⟧.length < ⟦2-char-id⟧ && (⟦2-char-id⟧.free(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocDouble(⟦2-char-id⟧))
       },
-      sweepBipartite: function(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, AJ, DJ, sJ, xJ, ⟦2-char-id⟧) {
+      sweepBipartite: function(⟦2-char-id⟧, TB, dB, VB, yB, JB, LB, OB, EB, ⟦2-char-id⟧) {
         for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - 1, ⟦2-char-id⟧ = ⟦2-char-id⟧ - 1, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -640,7 +640,7 @@
           }
         }
       },
-      sweepComplete: function(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, XJ, AJ, xJ, rJ, ⟦2-char-id⟧) {
+      sweepComplete: function(⟦2-char-id⟧, TB, dB, VB, yB, lB, JB, EB, vB, ⟦2-char-id⟧) {
         for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - 1, ⟦2-char-id⟧ = ⟦2-char-id⟧ - 1, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] + 1 << 1,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -679,14 +679,14 @@
           }
         }
       },
-      scanBipartite: function(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, AJ, YJ, hJ, DJ, sJ, xJ, ⟦2-char-id⟧) {
+      scanBipartite: function(⟦2-char-id⟧, TB, dB, VB, yB, JB, oB, kB, LB, OB, EB, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
           ⟦2-char-id⟧ = 1,
           ⟦2-char-id⟧ = 1;
-        ⟦2-char-id⟧ ? ⟦2-char-id⟧ = XJ : ⟦2-char-id⟧ = ⟦2-char-id⟧;
+        ⟦2-char-id⟧ ? ⟦2-char-id⟧ = lB : ⟦2-char-id⟧ = ⟦2-char-id⟧;
         for (var ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -710,7 +710,7 @@
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧ + 1],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧ + 1 + ⟦2-char-id⟧];
-              JJ: for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
+              BB: for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
                 var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
                 if (!(⟦2-char-id⟧ < ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧ + 1] || ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧ + 1 + ⟦2-char-id⟧] < ⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -724,7 +724,7 @@
           } else ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧--, ⟦2-char-id⟧ - ⟦2-char-id⟧)
         }
       },
-      scanComplete: function(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, AJ, jJ, YJ, hJ, DJ, ⟦2-char-id⟧) {
+      scanComplete: function(⟦2-char-id⟧, TB, dB, VB, yB, JB, gB, oB, kB, LB, ⟦2-char-id⟧) {
         for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -747,7 +747,7 @@
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧ + 1],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧ + 1 + ⟦2-char-id⟧];
-              JJ: for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
+              BB: for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
                 var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
                   ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
                 if (⟦2-char-id⟧ === ⟦2-char-id⟧) break;
```

</details>

<details>
<summary>Hunk 21 · Change · +3 / -3</summary>

```diff
@@ -770,9 +770,9 @@
         }
       }
     };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37267),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37270),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37301),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37219),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37255),
       ⟦2-char-id⟧ = 1 << 28,
       ⟦2-char-id⟧ = 1024,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocInt32(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -793,7 +793,7 @@
       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧
     }
   },
-  37278: ⟦2-char-id⟧ => {
+  37234: ⟦2-char-id⟧ => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧[⟦2-char-id⟧];
       if (⟦2-char-id⟧ <= 0) return [];
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -819,7 +819,7 @@
       return []
     }
   },
-  37223: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37181: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = function() {
       var ⟦2-char-id⟧ = this;
       this.components = {}, this.comps = this.components;
```

</details>

<details>
<summary>Hunk 24 · Change · +3 / -3</summary>

```diff
@@ -838,9 +838,9 @@
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧.hash[⟦2-char-id⟧];
-        ⟦2-char-id⟧ && (⟦2-char-id⟧.remove(⟦2-char-id⟧), ⟦2-char-id⟧.jK && (⟦2-char-id⟧.multi ? (⟦2-char-id⟧.forEach((⟦2-char-id⟧ => {
-          ⟦2-char-id⟧ && ⟦2-char-id⟧.jK(⟦2-char-id⟧, ⟦2-char-id⟧)
-        })), ⟦2-char-id⟧.length = 0) : ⟦2-char-id⟧.jK(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.removals.push(⟦2-char-id⟧), ⟦2-char-id⟧())
+        ⟦2-char-id⟧ && (⟦2-char-id⟧.remove(⟦2-char-id⟧), ⟦2-char-id⟧.Kw && (⟦2-char-id⟧.multi ? (⟦2-char-id⟧.forEach((⟦2-char-id⟧ => {
+          ⟦2-char-id⟧ && ⟦2-char-id⟧.Kw(⟦2-char-id⟧, ⟦2-char-id⟧)
+        })), ⟦2-char-id⟧.length = 0) : ⟦2-char-id⟧.Kw(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.removals.push(⟦2-char-id⟧), ⟦2-char-id⟧())
       }
 
       function ⟦2-char-id⟧() {
```

</details>

<details>
<summary>Hunk 25 · Change · +33 / -33</summary>

```diff
@@ -871,89 +871,89 @@
           ⟦2-char-id⟧.length = 0
         }(⟦2-char-id⟧.removals)
       }
-      this.VG = ⟦2-char-id⟧, this._systems = ⟦2-char-id⟧, this._renderSystems = ⟦2-char-id⟧, this.eC = function(⟦2-char-id⟧) {
+      this.Nu = ⟦2-char-id⟧, this._systems = ⟦2-char-id⟧, this._renderSystems = ⟦2-char-id⟧, this.YG = function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧++;
-        return Array.isArray(⟦2-char-id⟧) && ⟦2-char-id⟧.forEach((⟦2-char-id⟧ => ⟦2-char-id⟧.xI(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧
+        return Array.isArray(⟦2-char-id⟧) && ⟦2-char-id⟧.forEach((⟦2-char-id⟧ => ⟦2-char-id⟧.XF(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧
       }, this.deleteEntity = function(⟦2-char-id⟧) {
         return Object.keys(⟦2-char-id⟧).forEach((⟦2-char-id⟧ => {
           ⟦2-char-id⟧[⟦2-char-id⟧].hash[⟦2-char-id⟧] && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
         })), ⟦2-char-id⟧
-      }, this.McJ = function(⟦2-char-id⟧) {
+      }, this.ldB = function(⟦2-char-id⟧) {
         if (!⟦2-char-id⟧) throw new Error("Missing component definition");
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.name;
         if (!⟦2-char-id⟧) throw new Error("Component definition must have a name property.");
         if ("string" !== typeof ⟦2-char-id⟧) throw new Error("Component name must be a string.");
         if ("" === ⟦2-char-id⟧) throw new Error("Component name must be a non-empty string.");
-        if (⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Component ${ZJ} already exists.`);
+        if (⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Component ${dB} already exists.`);
         var ⟦2-char-id⟧ = {};
-        return ⟦2-char-id⟧.name = ⟦2-char-id⟧, ⟦2-char-id⟧.multi = !!⟦2-char-id⟧.multi, ⟦2-char-id⟧.order = isNaN(⟦2-char-id⟧.order) ? 99 : ⟦2-char-id⟧.order, ⟦2-char-id⟧.stateConstructor = ⟦2-char-id⟧.stateConstructor || null, ⟦2-char-id⟧.state = ⟦2-char-id⟧.state || {}, ⟦2-char-id⟧.XE = ⟦2-char-id⟧.XE || null, ⟦2-char-id⟧.jK = ⟦2-char-id⟧.jK || null, ⟦2-char-id⟧.system = ⟦2-char-id⟧.system || null, ⟦2-char-id⟧.sE = ⟦2-char-id⟧.sE || null, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = new ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]._pendingMultiCleanup = !1, ⟦2-char-id⟧[⟦2-char-id⟧]._multiCleanupIDs = ⟦2-char-id⟧.multi ? [] : null, ⟦2-char-id⟧.system && (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order))), ⟦2-char-id⟧.sE && (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order))), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.name = ⟦2-char-id⟧, ⟦2-char-id⟧.multi = !!⟦2-char-id⟧.multi, ⟦2-char-id⟧.order = isNaN(⟦2-char-id⟧.order) ? 99 : ⟦2-char-id⟧.order, ⟦2-char-id⟧.stateConstructor = ⟦2-char-id⟧.stateConstructor || null, ⟦2-char-id⟧.state = ⟦2-char-id⟧.state || {}, ⟦2-char-id⟧.Om = ⟦2-char-id⟧.Om || null, ⟦2-char-id⟧.Kw = ⟦2-char-id⟧.Kw || null, ⟦2-char-id⟧.system = ⟦2-char-id⟧.system || null, ⟦2-char-id⟧.Im = ⟦2-char-id⟧.Im || null, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = new ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]._pendingMultiCleanup = !1, ⟦2-char-id⟧[⟦2-char-id⟧]._multiCleanupIDs = ⟦2-char-id⟧.multi ? [] : null, ⟦2-char-id⟧.system && (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order))), ⟦2-char-id⟧.Im && (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order))), ⟦2-char-id⟧
       }, this.overwriteComponent = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${JJ}`);
+        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${BB}`);
         if (!⟦2-char-id⟧) throw new Error("Missing component definition");
         if (⟦2-char-id⟧.name !== ⟦2-char-id⟧.name) throw new Error("Overwriting component must use the same name property.");
         var ⟦2-char-id⟧ = {};
-        ⟦2-char-id⟧.name = ⟦2-char-id⟧, ⟦2-char-id⟧.multi = !!⟦2-char-id⟧.multi, ⟦2-char-id⟧.order = isNaN(⟦2-char-id⟧.order) ? 99 : ⟦2-char-id⟧.order, ⟦2-char-id⟧.state = ⟦2-char-id⟧.state || {}, ⟦2-char-id⟧.XE = ⟦2-char-id⟧.XE || null, ⟦2-char-id⟧.jK = ⟦2-char-id⟧.jK || null, ⟦2-char-id⟧.system = ⟦2-char-id⟧.system || null, ⟦2-char-id⟧.sE = ⟦2-char-id⟧.sE || null, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]._pendingMultiCleanup = !1, ⟦2-char-id⟧[⟦2-char-id⟧]._multiCleanupIDs = ⟦2-char-id⟧.multi ? [] : null;
+        ⟦2-char-id⟧.name = ⟦2-char-id⟧, ⟦2-char-id⟧.multi = !!⟦2-char-id⟧.multi, ⟦2-char-id⟧.order = isNaN(⟦2-char-id⟧.order) ? 99 : ⟦2-char-id⟧.order, ⟦2-char-id⟧.state = ⟦2-char-id⟧.state || {}, ⟦2-char-id⟧.Om = ⟦2-char-id⟧.Om || null, ⟦2-char-id⟧.Kw = ⟦2-char-id⟧.Kw || null, ⟦2-char-id⟧.system = ⟦2-char-id⟧.system || null, ⟦2-char-id⟧.Im = ⟦2-char-id⟧.Im || null, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]._pendingMultiCleanup = !1, ⟦2-char-id⟧[⟦2-char-id⟧]._multiCleanupIDs = ⟦2-char-id⟧.multi ? [] : null;
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧);
         ⟦2-char-id⟧.system && ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧.push(⟦2-char-id⟧), !⟦2-char-id⟧.system && ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order));
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧);
-        ⟦2-char-id⟧.sE && ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧.push(⟦2-char-id⟧), !⟦2-char-id⟧.sE && ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order));
+        ⟦2-char-id⟧.Im && ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧.push(⟦2-char-id⟧), !⟦2-char-id⟧.Im && ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order));
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return this.ZI(⟦2-char-id⟧).forEach((⟦2-char-id⟧ => {
+        return this.SF(⟦2-char-id⟧).forEach((⟦2-char-id⟧ => {
           for (var ⟦2-char-id⟧ in ⟦2-char-id⟧) ⟦2-char-id⟧ in ⟦2-char-id⟧ || (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧]);
-          ⟦2-char-id⟧.XE && ⟦2-char-id⟧.XE(⟦2-char-id⟧.qI, ⟦2-char-id⟧)
+          ⟦2-char-id⟧.Om && ⟦2-char-id⟧.Om(⟦2-char-id⟧.ZF, ⟦2-char-id⟧)
         })), ⟦2-char-id⟧
       }, this.deleteComponent = function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${ZJ}`);
+        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${dB}`);
         ⟦2-char-id⟧.flush(), ⟦2-char-id⟧.list.forEach((⟦2-char-id⟧ => {
-          ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.qI || ⟦2-char-id⟧[0].qI, ⟦2-char-id⟧)
+          ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.ZF || ⟦2-char-id⟧[0].ZF, ⟦2-char-id⟧)
         }));
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧);
         return ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧[⟦2-char-id⟧].dispose(), delete ⟦2-char-id⟧[⟦2-char-id⟧], delete ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧
-      }, this.xI = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      }, this.XF = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${ZJ}.`);
-        if (⟦2-char-id⟧.hash[⟦2-char-id⟧] && !⟦2-char-id⟧.multi) throw new Error(`Entity ${JJ} already has component: ${ZJ}.`);
+        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${dB}.`);
+        if (⟦2-char-id⟧.hash[⟦2-char-id⟧] && !⟦2-char-id⟧.multi) throw new Error(`Entity ${BB} already has component: ${dB}.`);
         if (⟦2-char-id⟧.stateConstructor) {
-          if (!(⟦2-char-id⟧ = new ⟦2-char-id⟧.stateConstructor).hasOwnProperty("qI")) throw new Error(`Component ${XJ.name} stateConstructor type does not have property __id`);
+          if (!(⟦2-char-id⟧ = new ⟦2-char-id⟧.stateConstructor).hasOwnProperty("ZF")) throw new Error(`Component ${lB.name} stateConstructor type does not have property __id`);
           Object.assign(⟦2-char-id⟧, ⟦2-char-id⟧.state, ⟦2-char-id⟧)
         } else ⟦2-char-id⟧ = {
-          qI: ⟦2-char-id⟧,
-          ...XJ.state,
-          ...FJ
+          ZF: ⟦2-char-id⟧,
+          ...lB.state,
+          ...VB
         };
-        if (⟦2-char-id⟧.qI = ⟦2-char-id⟧, ⟦2-char-id⟧.multi) {
+        if (⟦2-char-id⟧.ZF = ⟦2-char-id⟧, ⟦2-char-id⟧.multi) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.hash[⟦2-char-id⟧];
           ⟦2-char-id⟧ || (⟦2-char-id⟧ = [], ⟦2-char-id⟧.add(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.push(⟦2-char-id⟧)
         } else ⟦2-char-id⟧.add(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return ⟦2-char-id⟧.XE && ⟦2-char-id⟧.XE(⟦2-char-id⟧, ⟦2-char-id⟧), this
-      }, this.KJJ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧.Om && ⟦2-char-id⟧.Om(⟦2-char-id⟧, ⟦2-char-id⟧), this
+      }, this.TTB = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${cJ}.`);
+        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${TB}.`);
         return !!⟦2-char-id⟧.hash[⟦2-char-id⟧]
-      }, this.vI = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        if (!⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Unknown component: ${ZJ}.`);
+      }, this.jF = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+        if (!⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Unknown component: ${dB}.`);
         return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
       }, this.getState = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${cJ}.`);
+        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${TB}.`);
         return ⟦2-char-id⟧.hash[⟦2-char-id⟧]
-      }, this.ZI = function(⟦2-char-id⟧) {
+      }, this.SF = function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${JJ}.`);
+        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${BB}.`);
         return ⟦2-char-id⟧(), ⟦2-char-id⟧.list
-      }, this.qcJ = function(⟦2-char-id⟧) {
-        if (!⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Unknown component: ${JJ}.`);
+      }, this.aTB = function(⟦2-char-id⟧) {
+        if (!⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Unknown component: ${BB}.`);
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].hash;
         return ⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧]
-      }, this.ncJ = function(⟦2-char-id⟧) {
-        if (!⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Unknown component: ${JJ}.`);
+      }, this.GTB = function(⟦2-char-id⟧) {
+        if (!⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Unknown component: ${BB}.`);
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].hash;
         return ⟦2-char-id⟧ => !!⟦2-char-id⟧[⟦2-char-id⟧]
-      }, this.Hh = function(⟦2-char-id⟧) {
+      }, this.dL = function(⟦2-char-id⟧) {
         ⟦2-char-id⟧();
         for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 26 · Change · +3 / -3</summary>

```diff
@@ -968,19 +968,19 @@
           var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-          ⟦2-char-id⟧.sE(⟦2-char-id⟧, ⟦2-char-id⟧.list), ⟦2-char-id⟧()
+          ⟦2-char-id⟧.Im(⟦2-char-id⟧, ⟦2-char-id⟧.list), ⟦2-char-id⟧()
         }
         return ⟦2-char-id⟧
       }, this.removeMultiComponent = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${FJ}.`);
+        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${VB}.`);
         if (!⟦2-char-id⟧.multi) throw new Error("removeMultiComponent called on non-multi component");
         return function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.hash[⟦2-char-id⟧];
           if (⟦2-char-id⟧) {
             var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-            ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = null, ⟦2-char-id⟧.jK && ⟦2-char-id⟧.jK(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.multiComps.push({
+            ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = null, ⟦2-char-id⟧.Kw && ⟦2-char-id⟧.Kw(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.multiComps.push({
               entID: ⟦2-char-id⟧,
               data: ⟦2-char-id⟧
             }), ⟦2-char-id⟧())
```

</details>

<details>
<summary>Hunk 27 · Change · +3 / -3</summary>

```diff
@@ -988,9 +988,9 @@
         }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
       }
     };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37227)
-  },
-  37227: ⟦2-char-id⟧ => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37185)
+  },
+  37185: ⟦2-char-id⟧ => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧._map[⟦2-char-id⟧];
       if (delete ⟦2-char-id⟧.hash[⟦2-char-id⟧], delete ⟦2-char-id⟧._map[⟦2-char-id⟧], ⟦2-char-id⟧ === ⟦2-char-id⟧.list.length - 1) ⟦2-char-id⟧.list.pop(), ⟦2-char-id⟧._idList.pop();
```

</details>

<details>
<summary>Hunk 28 · Change · +2 / -2</summary>

```diff
@@ -1027,13 +1027,13 @@
       }
     }
   },
-  36698: ⟦2-char-id⟧ => {
+  36631: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧;
       return ⟦2-char-id⟧
     }
   },
-  36700: ⟦2-char-id⟧ => {
+  36636: ⟦2-char-id⟧ => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return !!⟦2-char-id⟧.constructor && "function" === typeof ⟦2-char-id⟧.constructor.isBuffer && ⟦2-char-id⟧.constructor.isBuffer(⟦2-char-id⟧)
     }
```

</details>

<details>
<summary>Hunk 29 · Change · +1 / -1</summary>

```diff
@@ -1043,7 +1043,7 @@
       }(⟦2-char-id⟧) || !!⟦2-char-id⟧._isBuffer)
     }
   },
-  37017: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36936: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧ = ⟦2-char-id⟧.nmd(⟦2-char-id⟧);
     var ⟦2-char-id⟧ = "__lodash_hash_undefined__",
       ⟦2-char-id⟧ = 9007199254740991,
```

</details>

<details>
<summary>Hunk 30 · Change · +2 / -2</summary>

```diff
@@ -1134,13 +1134,13 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧["__core-js_shared__"],
       ⟦2-char-id⟧ = function() {
         var ⟦2-char-id⟧ = /[^.]+$/.exec(⟦2-char-id⟧ && ⟦2-char-id⟧.keys && ⟦2-char-id⟧.keys.IE_PROTO || "");
-        return ⟦2-char-id⟧ ? "Symbol(src)_1." + JJ : ""
+        return ⟦2-char-id⟧ ? "Symbol(src)_1." + BB : ""
       }(),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.toString,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.hasOwnProperty,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.toString,
       ⟦2-char-id⟧ = RegExp("^" + ⟦2-char-id⟧.call(⟦2-char-id⟧).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.fn : void 0,
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.iD : void 0,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.Symbol,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.Uint8Array,
       ⟦2-char-id⟧ = ⟦2-char-id⟧(Object.getPrototypeOf, Object),
```

</details>

<details>
<summary>Hunk 31 · Change · +1 / -1</summary>

```diff
@@ -1250,7 +1250,7 @@
           return ⟦2-char-id⟧.copy(⟦2-char-id⟧), ⟦2-char-id⟧
         }(⟦2-char-id⟧, ⟦2-char-id⟧);
         if (⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧ && !⟦2-char-id⟧) {
-          if (⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧ ? JJ : {};
+          if (⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧ ? BB : {};
           if (⟦2-char-id⟧ = function(⟦2-char-id⟧) {
               return "function" != typeof ⟦2-char-id⟧.constructor || ⟦2-char-id⟧(⟦2-char-id⟧) ? {} : (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧) : {});
               var ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 32 · Change · +20 / -20</summary>

```diff
@@ -1260,52 +1260,52 @@
             return ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧)
           }(⟦2-char-id⟧, ⟦2-char-id⟧))
         } else {
-          if (!⟦2-char-id⟧[⟦2-char-id⟧]) return ⟦2-char-id⟧ ? JJ : {};
+          if (!⟦2-char-id⟧[⟦2-char-id⟧]) return ⟦2-char-id⟧ ? BB : {};
           ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             var ⟦2-char-id⟧ = ⟦2-char-id⟧.constructor;
             switch (⟦2-char-id⟧) {
-              case vJ:
+              case mB:
                 return ⟦2-char-id⟧(⟦2-char-id⟧);
-              case XJ:
-              case AJ:
+              case lB:
+              case JB:
                 return new ⟦2-char-id⟧(+⟦2-char-id⟧);
-              case mJ:
+              case iB:
                 return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                   var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.buffer) : ⟦2-char-id⟧.buffer;
                   return new ⟦2-char-id⟧.constructor(⟦2-char-id⟧, ⟦2-char-id⟧.byteOffset, ⟦2-char-id⟧.byteLength)
                 }(⟦2-char-id⟧, ⟦2-char-id⟧);
-              case QJ:
-              case EJ:
-              case VJ:
-              case KJ:
-              case yJ:
-              case SJ:
-              case IJ:
-              case MJ:
-              case bJ:
+              case NB:
+              case tB:
+              case fB:
+              case sB:
+              case MB:
+              case zB:
+              case wB:
+              case UB:
+              case FB:
                 return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                   var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.buffer) : ⟦2-char-id⟧.buffer;
                   return new ⟦2-char-id⟧.constructor(⟦2-char-id⟧, ⟦2-char-id⟧.byteOffset, ⟦2-char-id⟧.length)
                 }(⟦2-char-id⟧, ⟦2-char-id⟧);
-              case YJ:
+              case oB:
                 return function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                   var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), !0) : ⟦2-char-id⟧(⟦2-char-id⟧);
                   return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, new ⟦2-char-id⟧.constructor)
                 }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-              case hJ:
-              case fJ:
+              case kB:
+              case HB:
                 return new ⟦2-char-id⟧(⟦2-char-id⟧);
-              case nJ:
+              case DB:
                 return function(⟦2-char-id⟧) {
                   var ⟦2-char-id⟧ = new ⟦2-char-id⟧.constructor(⟦2-char-id⟧.source, ⟦2-char-id⟧.exec(⟦2-char-id⟧));
                   return ⟦2-char-id⟧.lastIndex = ⟦2-char-id⟧.lastIndex, ⟦2-char-id⟧
                 }(⟦2-char-id⟧);
-              case GJ:
+              case uB:
                 return function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                   var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), !0) : ⟦2-char-id⟧(⟦2-char-id⟧);
                   return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, new ⟦2-char-id⟧.constructor)
                 }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-              case xJ:
+              case EB:
                 return ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ ? Object(⟦2-char-id⟧.call(⟦2-char-id⟧)) : {}
             }
             var ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 33 · Change · +1 / -1</summary>

```diff
@@ -1318,7 +1318,7 @@
       if (⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), !⟦2-char-id⟧) var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
         return function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-          return ⟦2-char-id⟧(⟦2-char-id⟧) ? FJ : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+          return ⟦2-char-id⟧(⟦2-char-id⟧) ? VB : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             for (var ⟦2-char-id⟧ = -1, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = ⟦2-char-id⟧.length; ++⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧];
             return ⟦2-char-id⟧
           }(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 34 · Change · +1 / -1</summary>

```diff
@@ -1332,7 +1332,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return !(!⟦2-char-id⟧(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ && ⟦2-char-id⟧ in ⟦2-char-id⟧)) && (⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧) ? Fc : ⟦2-char-id⟧).test(⟦2-char-id⟧(⟦2-char-id⟧));
+      return !(!⟦2-char-id⟧(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ && ⟦2-char-id⟧ in ⟦2-char-id⟧)) && (⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧) ? VT : ⟦2-char-id⟧).test(⟦2-char-id⟧(⟦2-char-id⟧));
       var ⟦2-char-id⟧
     }
 
```

</details>

<details>
<summary>Hunk 35 · Change · +1 / -1</summary>

```diff
@@ -1355,7 +1355,7 @@
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.__data__;
       return function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = typeof ⟦2-char-id⟧;
-        return "string" == ⟦2-char-id⟧ || "number" == ⟦2-char-id⟧ || "symbol" == ⟦2-char-id⟧ || "boolean" == ⟦2-char-id⟧ ? "__proto__" !== JJ : null === ⟦2-char-id⟧
+        return "string" == ⟦2-char-id⟧ || "number" == ⟦2-char-id⟧ || "symbol" == ⟦2-char-id⟧ || "boolean" == ⟦2-char-id⟧ ? "__proto__" !== BB : null === ⟦2-char-id⟧
       }(⟦2-char-id⟧) ? ⟦2-char-id⟧["string" == typeof ⟦2-char-id⟧ ? "string" : "hash"] : ⟦2-char-id⟧.map
     }
 
```

</details>

<details>
<summary>Hunk 36 · Change · +1 / -1</summary>

```diff
@@ -1363,7 +1363,7 @@
       var ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return null == ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧]
       }(⟦2-char-id⟧, ⟦2-char-id⟧);
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? ZJ : void 0
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? dB : void 0
     }
     ⟦2-char-id⟧.prototype.clear = function() {
       this.__data__ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(null) : {}
```

</details>

<details>
<summary>Hunk 37 · Change · +1 / -1</summary>

```diff
@@ -1380,7 +1380,7 @@
       var ⟦2-char-id⟧ = this.__data__;
       return ⟦2-char-id⟧ ? void 0 !== ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧.call(⟦2-char-id⟧, ⟦2-char-id⟧)
     }, ⟦2-char-id⟧.prototype.set = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return this.__data__[⟦2-char-id⟧] = ⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧, this
+      return this.__data__[⟦2-char-id⟧] = ⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧, this
     }, ⟦2-char-id⟧.prototype.clear = function() {
       this.__data__ = []
     }, ⟦2-char-id⟧.prototype.delete = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 38 · Change · +1 / -1</summary>

```diff
@@ -1436,7 +1436,7 @@
       };
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return !!(⟦2-char-id⟧ = null == ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧) && ("number" == typeof ⟦2-char-id⟧ || ⟦2-char-id⟧.test(⟦2-char-id⟧)) && ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧ % 1 == 0 && ⟦2-char-id⟧ < ⟦2-char-id⟧
+      return !!(⟦2-char-id⟧ = null == ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧) && ("number" == typeof ⟦2-char-id⟧ || ⟦2-char-id⟧.test(⟦2-char-id⟧)) && ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧ % 1 == 0 && ⟦2-char-id⟧ < ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 39 · Change · +5 / -5</summary>

```diff
@@ -1463,15 +1463,15 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧.constructor : void 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : void 0;
       if (⟦2-char-id⟧) switch (⟦2-char-id⟧) {
-        case mc:
+        case iT:
           return ⟦2-char-id⟧;
-        case Qc:
+        case NT:
           return ⟦2-char-id⟧;
-        case Ec:
+        case tT:
           return ⟦2-char-id⟧;
-        case Vc:
+        case fT:
           return ⟦2-char-id⟧;
-        case Kc:
+        case sT:
           return ⟦2-char-id⟧
       }
       return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 40 · Change · +3 / -3</summary>

```diff
@@ -1509,9 +1509,9 @@
       return ⟦2-char-id⟧(⟦2-char-id⟧, !0, !0)
     }
   },
-  36692: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36698),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36700),
+  36627: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36631),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36636),
       ⟦2-char-id⟧ = "undefined" !== typeof Float64Array;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 41 · Change · +1 / -1</summary>

```diff
@@ -1656,7 +1656,7 @@
       return (0, ⟦2-char-id⟧[⟦2-char-id⟧ + 1])(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
     }
   },
-  37434: ⟦2-char-id⟧ => {
+  37397: ⟦2-char-id⟧ => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = -1 / 0, ⟦2-char-id⟧ = 1 / 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
         var ⟦2-char-id⟧ = (⟦2-char-id⟧[0][⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧]) / ⟦2-char-id⟧[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 42 · Change · +2 / -2</summary>

```diff
@@ -1680,8 +1680,8 @@
       return ⟦2-char-id⟧
     }, ⟦2-char-id⟧.exports.distance = ⟦2-char-id⟧
   },
-  36711: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36715);
+  36649: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36656);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
```

</details>

<details>
<summary>Hunk 43 · Change · +1 / -1</summary>

```diff
@@ -1713,7 +1713,7 @@
       return ⟦2-char-id⟧
     }
   },
-  36715: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  36656: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = 32;
       return (⟦2-char-id⟧ &= -⟦2-char-id⟧) && ⟦2-char-id⟧--, 65535 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 16), 16711935 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 8), 252645135 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 4), 858993459 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 2), 1431655765 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 1), ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 44 · Change · +10 / -10</summary>

```diff
@@ -1767,23 +1767,23 @@
       return ⟦2-char-id⟧ + 1 | (~⟦2-char-id⟧ & -~⟦2-char-id⟧) - 1 >>> ⟦2-char-id⟧(⟦2-char-id⟧) + 1
     }
   },
-  36229: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36180: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      Color3: () => ⟦2-char-id⟧.e,
-      e: () => ⟦2-char-id⟧.f
+      Color3: () => ⟦2-char-id⟧.c,
+      d: () => ⟦2-char-id⟧.d
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36231);
-    (0, ⟦2-char-id⟧.g)()
-  },
-  36742: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36183);
+    (0, ⟦2-char-id⟧.f)()
+  },
+  36688: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36744);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36690);
     class ⟦2-char-id⟧ {
       static GetPlanes(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = [];
-        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(new ⟦2-char-id⟧.c(0, 0, 0, 0));
+        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(new ⟦2-char-id⟧.d(0, 0, 0, 0));
         return ⟦2-char-id⟧.GetPlanesToRef(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
       }
       static GetNearPlaneToRef(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 45 · Change · +6 / -6</summary>

```diff
@@ -1820,16 +1820,16 @@
       }
     }
   },
-  36744: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36690: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126);
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.normal = new ⟦2-char-id⟧.j(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.d = ⟦2-char-id⟧
-      }
-      JFJ() {
+        this.normal = new ⟦2-char-id⟧.p(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.d = ⟦2-char-id⟧
+      }
+      FVB() {
         return [this.normal.x, this.normal.y, this.normal.z, this.d]
       }
       clone() {
```

</details>

<details>
<summary>Hunk 46 · Change · +3 / -3</summary>

```diff
@@ -1876,13 +1876,13 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧,
           ⟦2-char-id⟧ = Math.sqrt(⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧);
         let ⟦2-char-id⟧;
-        return ⟦2-char-id⟧ = 0 !== ⟦2-char-id⟧ ? 1 / DJ : 0, this.normal.x = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.normal.y = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.normal.z = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.d = -(this.normal.x * ⟦2-char-id⟧.x + this.normal.y * ⟦2-char-id⟧.y + this.normal.z * ⟦2-char-id⟧.z), this
+        return ⟦2-char-id⟧ = 0 !== ⟦2-char-id⟧ ? 1 / LB : 0, this.normal.x = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.normal.y = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.normal.z = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.d = -(this.normal.x * ⟦2-char-id⟧.x + this.normal.y * ⟦2-char-id⟧.y + this.normal.z * ⟦2-char-id⟧.z), this
       }
       isFrontFacingTo(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.j.Dot(this.normal, ⟦2-char-id⟧) <= ⟦2-char-id⟧
+        return ⟦2-char-id⟧.p.Dot(this.normal, ⟦2-char-id⟧) <= ⟦2-char-id⟧
       }
       signedDistanceTo(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.j.Dot(⟦2-char-id⟧, this.normal) + this.d
+        return ⟦2-char-id⟧.p.Dot(⟦2-char-id⟧, this.normal) + this.d
       }
       static FromArray(⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(⟦2-char-id⟧[0], ⟦2-char-id⟧[1], ⟦2-char-id⟧[2], ⟦2-char-id⟧[3])
```

</details>

<details>
<summary>Hunk 47 · Change · +13 / -13</summary>

```diff
@@ -1896,29 +1896,29 @@
         return this.FromPositionAndNormalToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       static FromPositionAndNormalToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.normal.rZJ(⟦2-char-id⟧), ⟦2-char-id⟧.normal.normalize(), ⟦2-char-id⟧.d = -⟦2-char-id⟧.dot(⟦2-char-id⟧.normal), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.normal.bdB(⟦2-char-id⟧), ⟦2-char-id⟧.normal.normalize(), ⟦2-char-id⟧.d = -⟦2-char-id⟧.dot(⟦2-char-id⟧.normal), ⟦2-char-id⟧
       }
       static SignedDistanceToPlaneFromPositionAndNormal(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = -(⟦2-char-id⟧.x * ⟦2-char-id⟧.x + ⟦2-char-id⟧.y * ⟦2-char-id⟧.y + ⟦2-char-id⟧.z * ⟦2-char-id⟧.z);
-        return ⟦2-char-id⟧.j.Dot(⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧
+        return ⟦2-char-id⟧.p.Dot(⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧
       }
     }
     ⟦2-char-id⟧._TmpMatrix = ⟦2-char-id⟧.b.Identity()
   },
-  36165: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36119: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       Matrix: () => ⟦2-char-id⟧.b,
-      Quaternion: () => ⟦2-char-id⟧.e,
-      RegisterMathVector: () => ⟦2-char-id⟧.f,
-      TmpVectors: () => ⟦2-char-id⟧.h,
-      Vector2: () => ⟦2-char-id⟧.i,
-      Pn: () => ⟦2-char-id⟧.j,
-      Vector4: () => ⟦2-char-id⟧.k
+      Quaternion: () => ⟦2-char-id⟧.f,
+      RegisterMathVector: () => ⟦2-char-id⟧.i,
+      TmpVectors: () => ⟦2-char-id⟧.j,
+      Vector2: () => ⟦2-char-id⟧.l,
+      RD: () => ⟦2-char-id⟧.p,
+      Vector4: () => ⟦2-char-id⟧.r
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174);
-    (0, ⟦2-char-id⟧.f)()
-  },
-  37100: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126);
+    (0, ⟦2-char-id⟧.i)()
+  },
+  37029: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧
     });
```

</details>

<details>
<summary>Hunk 48 · Change · +3 / -3</summary>

```diff
@@ -1937,15 +1937,15 @@
       }
     }
   },
-  36865: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36822: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧() {
       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (⟦2-char-id⟧ => {
         const ⟦2-char-id⟧ = 16 * Math.random() | 0;
-        return ("x" === ⟦2-char-id⟧ ? cJ : 3 & ⟦2-char-id⟧ | 8).toString(16)
+        return ("x" === ⟦2-char-id⟧ ? TB : 3 & ⟦2-char-id⟧ | 8).toString(16)
       }))
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     })
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/212.js</code> · modified · +177 / -177</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +8 / -8</summary>

```diff
@@ -1,14 +1,14 @@
 export const ⟦2-char-id⟧ = 212;
 export const ids = [212, 217, 220];
 export const modules = {
-  39006: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37660),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38822),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38986),
+  38992: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37651),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(38772),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(38974),
       ⟦2-char-id⟧ = {};
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -16,7 +16,7 @@
       }
       add(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.getSimpleName();
-        this.attached[⟦2-char-id⟧] ? ⟦2-char-id⟧.c.Warn("camera input of type " + ⟦2-char-id⟧ + " already exists on camera") : (this.attached[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧.camera = this.camera, ⟦2-char-id⟧.checkInputs && (this.checkInputs = this._addCheckInputs(⟦2-char-id⟧.checkInputs.bind(⟦2-char-id⟧))), this.attachedToElement && ⟦2-char-id⟧.attachControl(this.noPreventDefault))
+        this.attached[⟦2-char-id⟧] ? ⟦2-char-id⟧.b.Warn("camera input of type " + ⟦2-char-id⟧ + " already exists on camera") : (this.attached[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧.camera = this.camera, ⟦2-char-id⟧.checkInputs && (this.checkInputs = this._addCheckInputs(⟦2-char-id⟧.checkInputs.bind(⟦2-char-id⟧))), this.attachedToElement && ⟦2-char-id⟧.attachControl(this.noPreventDefault))
       }
       remove(⟦2-char-id⟧) {
         for (const ⟦2-char-id⟧ in this.attached) {
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -42,7 +42,7 @@
       attachElement() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
         if (!this.attachedToElement) {
-          ⟦2-char-id⟧ = !⟦2-char-id⟧.e.ForceAttachControlToAlwaysPreventDefault && ⟦2-char-id⟧, this.attachedToElement = !0, this.noPreventDefault = ⟦2-char-id⟧;
+          ⟦2-char-id⟧ = !⟦2-char-id⟧.b.ForceAttachControlToAlwaysPreventDefault && ⟦2-char-id⟧, this.attachedToElement = !0, this.noPreventDefault = ⟦2-char-id⟧;
           for (const ⟦2-char-id⟧ in this.attached) this.attached[⟦2-char-id⟧].attachControl(⟦2-char-id⟧)
         }
       }
```

</details>

<details>
<summary>Hunk 4 · Change · +21 / -21</summary>

```diff
@@ -93,35 +93,35 @@
       }
     }
   },
-  39009: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧.e
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39015);
-    (0, ⟦2-char-id⟧.f)()
-  },
-  39015: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38800),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38806),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36174),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36231),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39023),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38989),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36216);
+  39001: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧.d
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39007);
+    (0, ⟦2-char-id⟧.h)()
+  },
+  39007: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      d: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38745),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(38750),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36126),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36183),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39016),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(38980),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36166);
     let ⟦2-char-id⟧ = (() => {
         var ⟦2-char-id⟧;
-        let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.b,
+        let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.c,
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [];
         return ⟦2-char-id⟧ = class extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.groundColor = (0, ⟦2-char-id⟧.e)(this, ⟦2-char-id⟧, new ⟦2-char-id⟧.e(0, 0, 0)), this.direction = ((0, ⟦2-char-id⟧.e)(this, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.e)(this, ⟦2-char-id⟧, void 0)), (0, ⟦2-char-id⟧.e)(this, ⟦2-char-id⟧), this.direction = ⟦2-char-id⟧ || ⟦2-char-id⟧.j.Up()
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.groundColor = (0, ⟦2-char-id⟧.h)(this, ⟦2-char-id⟧, new ⟦2-char-id⟧.c(0, 0, 0)), this.direction = ((0, ⟦2-char-id⟧.h)(this, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.h)(this, ⟦2-char-id⟧, void 0)), (0, ⟦2-char-id⟧.h)(this, ⟦2-char-id⟧), this.direction = ⟦2-char-id⟧ || ⟦2-char-id⟧.p.Up()
           }
           _buildUniformLayout() {
             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
```

</details>

<details>
<summary>Hunk 5 · Change · +5 / -5</summary>

```diff
@@ -130,31 +130,31 @@
             return "HemisphericLight"
           }
           setDirectionToTarget(⟦2-char-id⟧) {
-            return this.direction = ⟦2-char-id⟧.j.Normalize(⟦2-char-id⟧.subtract(⟦2-char-id⟧.j.Zero())), this.direction
+            return this.direction = ⟦2-char-id⟧.p.Normalize(⟦2-char-id⟧.subtract(⟦2-char-id⟧.p.Zero())), this.direction
           }
           getShadowGenerator() {
             return null
           }
           transferToEffect(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.j.Normalize(this.direction);
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.Normalize(this.direction);
             return this._uniformBuffer.updateFloat4("vLightData", ⟦2-char-id⟧.x, ⟦2-char-id⟧.y, ⟦2-char-id⟧.z, 0, ⟦2-char-id⟧), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ⟦2-char-id⟧), this
           }
           transferToNodeMaterialEffect(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.j.Normalize(this.direction);
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.Normalize(this.direction);
             return ⟦2-char-id⟧.setFloat3(⟦2-char-id⟧, ⟦2-char-id⟧.x, ⟦2-char-id⟧.y, ⟦2-char-id⟧.z), this
           }
           computeWorldMatrix() {
             return this._worldMatrix || (this._worldMatrix = ⟦2-char-id⟧.b.Identity()), this._worldMatrix
           }
           getTypeID() {
-            return ⟦2-char-id⟧.b.LIGHTTYPEID_HEMISPHERICLIGHT
+            return ⟦2-char-id⟧.c.LIGHTTYPEID_HEMISPHERICLIGHT
           }
           prepareLightSpecificDefines(⟦2-char-id⟧, ⟦2-char-id⟧) {
             ⟦2-char-id⟧["HEMILIGHT" + ⟦2-char-id⟧] = !0
           }
         }, (() => {
           const ⟦2-char-id⟧ = "function" === typeof Symbol && Symbol.metadata ? Object.create(⟦2-char-id⟧[Symbol.metadata] ?? null) : void 0;
-          ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.m)()], ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.E)()], (0, ⟦2-char-id⟧.d)(null, null, ⟦2-char-id⟧, {
+          ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.s)()], ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.T)()], (0, ⟦2-char-id⟧.g)(null, null, ⟦2-char-id⟧, {
             kind: "field",
             name: "groundColor",
             static: !1,
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -167,7 +167,7 @@
               }
             },
             metadata: ⟦2-char-id⟧
-          }, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.d)(null, null, ⟦2-char-id⟧, {
+          }, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.g)(null, null, ⟦2-char-id⟧, {
             kind: "field",
             name: "direction",
             static: !1,
```

</details>

<details>
<summary>Hunk 7 · Change · +17 / -17</summary>

```diff
@@ -191,26 +191,26 @@
       ⟦2-char-id⟧ = !1;
 
     function ⟦2-char-id⟧() {
-      ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.b.AddNodeConstructor("Light_Type_3", ((⟦2-char-id⟧, ⟦2-char-id⟧) => () => new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.j.Zero(), ⟦2-char-id⟧))), (0, ⟦2-char-id⟧.f)("BABYLON.HemisphericLight", ⟦2-char-id⟧))
-    }
-  },
-  36229: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      Color3: () => ⟦2-char-id⟧.e,
-      e: () => ⟦2-char-id⟧.f
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36231);
-    (0, ⟦2-char-id⟧.g)()
-  },
-  36742: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36744);
+      ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.e.AddNodeConstructor("Light_Type_3", ((⟦2-char-id⟧, ⟦2-char-id⟧) => () => new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.p.Zero(), ⟦2-char-id⟧))), (0, ⟦2-char-id⟧.g)("BABYLON.HemisphericLight", ⟦2-char-id⟧))
+    }
+  },
+  36180: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      Color3: () => ⟦2-char-id⟧.c,
+      d: () => ⟦2-char-id⟧.d
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36183);
+    (0, ⟦2-char-id⟧.f)()
+  },
+  36688: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      b: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36690);
     class ⟦2-char-id⟧ {
       static GetPlanes(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = [];
-        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(new ⟦2-char-id⟧.c(0, 0, 0, 0));
+        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(new ⟦2-char-id⟧.d(0, 0, 0, 0));
         return ⟦2-char-id⟧.GetPlanesToRef(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
       }
       static GetNearPlaneToRef(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +8 / -8</summary>

```diff
@@ -247,16 +247,16 @@
       }
     }
   },
-  36744: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174);
+  36690: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      d: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126);
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.normal = new ⟦2-char-id⟧.j(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.d = ⟦2-char-id⟧
-      }
-      JFJ() {
+        this.normal = new ⟦2-char-id⟧.p(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.d = ⟦2-char-id⟧
+      }
+      FVB() {
         return [this.normal.x, this.normal.y, this.normal.z, this.d]
       }
       clone() {
```

</details>

<details>
<summary>Hunk 9 · Change · +3 / -3</summary>

```diff
@@ -303,13 +303,13 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧,
           ⟦2-char-id⟧ = Math.sqrt(⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧);
         let ⟦2-char-id⟧;
-        return ⟦2-char-id⟧ = 0 !== ⟦2-char-id⟧ ? 1 / DJ : 0, this.normal.x = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.normal.y = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.normal.z = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.d = -(this.normal.x * ⟦2-char-id⟧.x + this.normal.y * ⟦2-char-id⟧.y + this.normal.z * ⟦2-char-id⟧.z), this
+        return ⟦2-char-id⟧ = 0 !== ⟦2-char-id⟧ ? 1 / LB : 0, this.normal.x = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.normal.y = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.normal.z = ⟦2-char-id⟧ * ⟦2-char-id⟧, this.d = -(this.normal.x * ⟦2-char-id⟧.x + this.normal.y * ⟦2-char-id⟧.y + this.normal.z * ⟦2-char-id⟧.z), this
       }
       isFrontFacingTo(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.j.Dot(this.normal, ⟦2-char-id⟧) <= ⟦2-char-id⟧
+        return ⟦2-char-id⟧.p.Dot(this.normal, ⟦2-char-id⟧) <= ⟦2-char-id⟧
       }
       signedDistanceTo(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.j.Dot(⟦2-char-id⟧, this.normal) + this.d
+        return ⟦2-char-id⟧.p.Dot(⟦2-char-id⟧, this.normal) + this.d
       }
       static FromArray(⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(⟦2-char-id⟧[0], ⟦2-char-id⟧[1], ⟦2-char-id⟧[2], ⟦2-char-id⟧[3])
```

</details>

<details>
<summary>Hunk 10 · Change · +14 / -14</summary>

```diff
@@ -323,29 +323,29 @@
         return this.FromPositionAndNormalToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       static FromPositionAndNormalToRef(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.normal.rZJ(⟦2-char-id⟧), ⟦2-char-id⟧.normal.normalize(), ⟦2-char-id⟧.d = -⟦2-char-id⟧.dot(⟦2-char-id⟧.normal), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.normal.bdB(⟦2-char-id⟧), ⟦2-char-id⟧.normal.normalize(), ⟦2-char-id⟧.d = -⟦2-char-id⟧.dot(⟦2-char-id⟧.normal), ⟦2-char-id⟧
       }
       static SignedDistanceToPlaneFromPositionAndNormal(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = -(⟦2-char-id⟧.x * ⟦2-char-id⟧.x + ⟦2-char-id⟧.y * ⟦2-char-id⟧.y + ⟦2-char-id⟧.z * ⟦2-char-id⟧.z);
-        return ⟦2-char-id⟧.j.Dot(⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧
+        return ⟦2-char-id⟧.p.Dot(⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧
       }
     }
     ⟦2-char-id⟧._TmpMatrix = ⟦2-char-id⟧.b.Identity()
   },
-  36165: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  36119: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       Matrix: () => ⟦2-char-id⟧.b,
-      Quaternion: () => ⟦2-char-id⟧.e,
-      RegisterMathVector: () => ⟦2-char-id⟧.f,
-      TmpVectors: () => ⟦2-char-id⟧.h,
-      Vector2: () => ⟦2-char-id⟧.i,
-      Pn: () => ⟦2-char-id⟧.j,
-      Vector4: () => ⟦2-char-id⟧.k
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174);
-    (0, ⟦2-char-id⟧.f)()
-  },
-  37100: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      Quaternion: () => ⟦2-char-id⟧.f,
+      RegisterMathVector: () => ⟦2-char-id⟧.i,
+      TmpVectors: () => ⟦2-char-id⟧.j,
+      Vector2: () => ⟦2-char-id⟧.l,
+      RD: () => ⟦2-char-id⟧.p,
+      Vector4: () => ⟦2-char-id⟧.r
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126);
+    (0, ⟦2-char-id⟧.i)()
+  },
+  37029: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧
     });
```

</details>

<details>
<summary>Hunk 11 · Change · +9 / -9</summary>

```diff
@@ -364,15 +364,15 @@
       }
     }
   },
-  39156: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36231),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39159),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39170),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39193);
+  39135: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      b: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36183),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39143),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39156),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39172);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
```

</details>

<details>
<summary>Hunk 12 · Change · +6 / -6</summary>

```diff
@@ -410,18 +410,18 @@
       }
       const ⟦2-char-id⟧ = [⟦2-char-id⟧ / 2, ⟦2-char-id⟧ / 2, ⟦2-char-id⟧ / 2],
         ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧ * ⟦2-char-id⟧[⟦2-char-id⟧ % 3])), []),
-        ⟦2-char-id⟧ = 0 === ⟦2-char-id⟧.sideOrientation ? 0 : ⟦2-char-id⟧.sideOrientation || ⟦2-char-id⟧.e.DEFAULTSIDE,
+        ⟦2-char-id⟧ = 0 === ⟦2-char-id⟧.sideOrientation ? 0 : ⟦2-char-id⟧.sideOrientation || ⟦2-char-id⟧.d.DEFAULTSIDE,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.faceUV || new Array(6),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.faceColors,
         ⟦2-char-id⟧ = [];
-      for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++) void 0 === ⟦2-char-id⟧[⟦2-char-id⟧] && (⟦2-char-id⟧[⟦2-char-id⟧] = new ⟦2-char-id⟧.k(0, 0, 1, 1)), ⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧[⟦2-char-id⟧] && (⟦2-char-id⟧[⟦2-char-id⟧] = new ⟦2-char-id⟧.f(1, 1, 1, 1));
+      for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++) void 0 === ⟦2-char-id⟧[⟦2-char-id⟧] && (⟦2-char-id⟧[⟦2-char-id⟧] = new ⟦2-char-id⟧.r(0, 0, 1, 1)), ⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧[⟦2-char-id⟧] && (⟦2-char-id⟧[⟦2-char-id⟧] = new ⟦2-char-id⟧.d(1, 1, 1, 1));
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++)
-        if (⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].z, ⟦2-char-id⟧.d ? 1 - ⟦2-char-id⟧[⟦2-char-id⟧].w : ⟦2-char-id⟧[⟦2-char-id⟧].w), ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].x, ⟦2-char-id⟧.d ? 1 - ⟦2-char-id⟧[⟦2-char-id⟧].w : ⟦2-char-id⟧[⟦2-char-id⟧].w), ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].x, ⟦2-char-id⟧.d ? 1 - ⟦2-char-id⟧[⟦2-char-id⟧].y : ⟦2-char-id⟧[⟦2-char-id⟧].y), ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].z, ⟦2-char-id⟧.d ? 1 - ⟦2-char-id⟧[⟦2-char-id⟧].y : ⟦2-char-id⟧[⟦2-char-id⟧].y), ⟦2-char-id⟧)
+        if (⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].z, ⟦2-char-id⟧.c ? 1 - ⟦2-char-id⟧[⟦2-char-id⟧].w : ⟦2-char-id⟧[⟦2-char-id⟧].w), ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].x, ⟦2-char-id⟧.c ? 1 - ⟦2-char-id⟧[⟦2-char-id⟧].w : ⟦2-char-id⟧[⟦2-char-id⟧].w), ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].x, ⟦2-char-id⟧.c ? 1 - ⟦2-char-id⟧[⟦2-char-id⟧].y : ⟦2-char-id⟧[⟦2-char-id⟧].y), ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].z, ⟦2-char-id⟧.c ? 1 - ⟦2-char-id⟧[⟦2-char-id⟧].y : ⟦2-char-id⟧[⟦2-char-id⟧].y), ⟦2-char-id⟧)
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 4; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].r, ⟦2-char-id⟧[⟦2-char-id⟧].g, ⟦2-char-id⟧[⟦2-char-id⟧].b, ⟦2-char-id⟧[⟦2-char-id⟧].a);
-      ⟦2-char-id⟧.e._ComputeSides(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.frontUVs, ⟦2-char-id⟧.backUVs);
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+      ⟦2-char-id⟧.d._ComputeSides(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.frontUVs, ⟦2-char-id⟧.backUVs);
+      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d;
       if (⟦2-char-id⟧.indices = ⟦2-char-id⟧, ⟦2-char-id⟧.positions = ⟦2-char-id⟧, ⟦2-char-id⟧.normals = ⟦2-char-id⟧, ⟦2-char-id⟧.uvs = ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧.e.DOUBLESIDE ? ⟦2-char-id⟧.concat(⟦2-char-id⟧) : ⟦2-char-id⟧;
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧.d.DOUBLESIDE ? ⟦2-char-id⟧.concat(⟦2-char-id⟧) : ⟦2-char-id⟧;
         ⟦2-char-id⟧.colors = ⟦2-char-id⟧
       }
       return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 13 · Change · +3 / -3</summary>

```diff
@@ -430,12 +430,12 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
         ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d(⟦2-char-id⟧, ⟦2-char-id⟧);
-      ⟦2-char-id⟧.sideOrientation = ⟦2-char-id⟧.d._GetDefaultSideOrientation(⟦2-char-id⟧.sideOrientation), ⟦2-char-id⟧._originalBuilderSideOrientation = ⟦2-char-id⟧.sideOrientation;
+      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e(⟦2-char-id⟧, ⟦2-char-id⟧);
+      ⟦2-char-id⟧.sideOrientation = ⟦2-char-id⟧.e._GetDefaultSideOrientation(⟦2-char-id⟧.sideOrientation), ⟦2-char-id⟧._originalBuilderSideOrientation = ⟦2-char-id⟧.sideOrientation;
       return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), ⟦2-char-id⟧
     }
     let ⟦2-char-id⟧ = !1;
-    ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.e.CreateBox = ⟦2-char-id⟧, ⟦2-char-id⟧.d.CreateBox = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+    ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.d.CreateBox = ⟦2-char-id⟧, ⟦2-char-id⟧.e.CreateBox = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, {
         size: ⟦2-char-id⟧,
         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
```

</details>

<details>
<summary>Hunk 14 · Change · +10 / -10</summary>

```diff
@@ -443,16 +443,16 @@
       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
     })
   },
-  39219: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36174),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39159),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39170),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39224),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38918),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37660);
+  39196: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36126),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39143),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39156),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39205),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(38897),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37651);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = [],
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -482,7 +482,7 @@
           ⟦2-char-id⟧ > 0 && (⟦2-char-id⟧.push(⟦2-char-id⟧ - 1), ⟦2-char-id⟧.push(⟦2-char-id⟧)), ⟦2-char-id⟧++
         }
       }
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d;
       return ⟦2-char-id⟧.indices = ⟦2-char-id⟧, ⟦2-char-id⟧.positions = ⟦2-char-id⟧, ⟦2-char-id⟧ && (⟦2-char-id⟧.colors = ⟦2-char-id⟧), ⟦2-char-id⟧
     }
 
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -493,7 +493,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.points,
         ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = [],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.j.Zero();
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.p.Zero();
       let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = 0,
         ⟦2-char-id⟧ = 0;
       for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧ + 1].subtractToRef(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.length();
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -503,7 +503,7 @@
         ⟦2-char-id⟧[⟦2-char-id⟧ + 1].subtractToRef(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.length() / ⟦2-char-id⟧), ⟦2-char-id⟧.normalize();
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].x + ⟦2-char-id⟧ * ⟦2-char-id⟧.x, ⟦2-char-id⟧[⟦2-char-id⟧].y + ⟦2-char-id⟧ * ⟦2-char-id⟧.y, ⟦2-char-id⟧[⟦2-char-id⟧].z + ⟦2-char-id⟧ * ⟦2-char-id⟧.z), ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].x + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.x, ⟦2-char-id⟧[⟦2-char-id⟧].y + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.y, ⟦2-char-id⟧[⟦2-char-id⟧].z + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.z), ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧ + 1), ⟦2-char-id⟧ += 2
       }
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d;
       return ⟦2-char-id⟧.positions = ⟦2-char-id⟧, ⟦2-char-id⟧.indices = ⟦2-char-id⟧, ⟦2-char-id⟧
     }
 
```

</details>

<details>
<summary>Hunk 18 · Change · +3 / -3</summary>

```diff
@@ -513,16 +513,16 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.lines,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.colors;
       if (⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧.getVerticesData(⟦2-char-id⟧.n.PositionKind);
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧.getVerticesData(⟦2-char-id⟧.m.PositionKind);
         let ⟦2-char-id⟧, ⟦2-char-id⟧;
-        ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.getVerticesData(⟦2-char-id⟧.n.ColorKind));
+        ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.getVerticesData(⟦2-char-id⟧.m.ColorKind));
         let ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = 0;
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧].x, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧].y, ⟦2-char-id⟧[⟦2-char-id⟧ + 2] = ⟦2-char-id⟧[⟦2-char-id⟧].z, ⟦2-char-id⟧ && ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧].r, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧].g, ⟦2-char-id⟧[⟦2-char-id⟧ + 2] = ⟦2-char-id⟧[⟦2-char-id⟧].b, ⟦2-char-id⟧[⟦2-char-id⟧ + 3] = ⟦2-char-id⟧[⟦2-char-id⟧].a, ⟦2-char-id⟧ += 4), ⟦2-char-id⟧ += 3
         }
-        return ⟦2-char-id⟧.updateVerticesData(⟦2-char-id⟧.n.PositionKind, ⟦2-char-id⟧, !1, !1), ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.updateVerticesData(⟦2-char-id⟧.n.ColorKind, ⟦2-char-id⟧, !1, !1), ⟦2-char-id⟧.refreshBoundingInfo(), ⟦2-char-id⟧
+        return ⟦2-char-id⟧.updateVerticesData(⟦2-char-id⟧.m.PositionKind, ⟦2-char-id⟧, !1, !1), ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.updateVerticesData(⟦2-char-id⟧.m.ColorKind, ⟦2-char-id⟧, !1, !1), ⟦2-char-id⟧.refreshBoundingInfo(), ⟦2-char-id⟧
       }
       const ⟦2-char-id⟧ = !!⟦2-char-id⟧,
         ⟦2-char-id⟧ = new ⟦2-char-id⟧.b(⟦2-char-id⟧, ⟦2-char-id⟧, null, void 0, void 0, ⟦2-char-id⟧, ⟦2-char-id⟧.useVertexAlpha, ⟦2-char-id⟧.material);
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -550,7 +550,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.dashSize || 3;
       if (⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.j.Zero(),
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.Zero(),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.length / 6;
           let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = 0,
             ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 20 · Change · +4 / -4</summary>

```diff
@@ -562,19 +562,19 @@
             for (⟦2-char-id⟧[⟦2-char-id⟧ + 1].subtractToRef(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.length() / ⟦2-char-id⟧), ⟦2-char-id⟧.normalize(), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧].x + ⟦2-char-id⟧ * ⟦2-char-id⟧.x, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧].y + ⟦2-char-id⟧ * ⟦2-char-id⟧.y, ⟦2-char-id⟧[⟦2-char-id⟧ + 2] = ⟦2-char-id⟧[⟦2-char-id⟧].z + ⟦2-char-id⟧ * ⟦2-char-id⟧.z, ⟦2-char-id⟧[⟦2-char-id⟧ + 3] = ⟦2-char-id⟧[⟦2-char-id⟧].x + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.x, ⟦2-char-id⟧[⟦2-char-id⟧ + 4] = ⟦2-char-id⟧[⟦2-char-id⟧].y + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.y, ⟦2-char-id⟧[⟦2-char-id⟧ + 5] = ⟦2-char-id⟧[⟦2-char-id⟧].z + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.z, ⟦2-char-id⟧ += 6, ⟦2-char-id⟧++;
           for (; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧].x, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧].y, ⟦2-char-id⟧[⟦2-char-id⟧ + 2] = ⟦2-char-id⟧[⟦2-char-id⟧].z, ⟦2-char-id⟧ += 3
         };
-        return (⟦2-char-id⟧.dashNb || ⟦2-char-id⟧.dashSize || ⟦2-char-id⟧.gapSize || ⟦2-char-id⟧.useVertexAlpha || ⟦2-char-id⟧.material) && ⟦2-char-id⟧.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), ⟦2-char-id⟧.updateMeshPositions(⟦2-char-id⟧, !1), ⟦2-char-id⟧
+        return (⟦2-char-id⟧.dashNb || ⟦2-char-id⟧.dashSize || ⟦2-char-id⟧.gapSize || ⟦2-char-id⟧.useVertexAlpha || ⟦2-char-id⟧.material) && ⟦2-char-id⟧.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), ⟦2-char-id⟧.updateMeshPositions(⟦2-char-id⟧, !1), ⟦2-char-id⟧
       }
       const ⟦2-char-id⟧ = new ⟦2-char-id⟧.b(⟦2-char-id⟧, ⟦2-char-id⟧, null, void 0, void 0, void 0, ⟦2-char-id⟧.useVertexAlpha, ⟦2-char-id⟧.material);
-      return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), ⟦2-char-id⟧._creationDataStorage = new ⟦2-char-id⟧.h, ⟦2-char-id⟧._creationDataStorage.dashSize = ⟦2-char-id⟧, ⟦2-char-id⟧._creationDataStorage.gapSize = ⟦2-char-id⟧, ⟦2-char-id⟧
+      return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), ⟦2-char-id⟧._creationDataStorage = new ⟦2-char-id⟧.j, ⟦2-char-id⟧._creationDataStorage.dashSize = ⟦2-char-id⟧, ⟦2-char-id⟧._creationDataStorage.gapSize = ⟦2-char-id⟧, ⟦2-char-id⟧
     }
     let ⟦2-char-id⟧ = !1;
-    ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.e.CreateLineSystem = ⟦2-char-id⟧, ⟦2-char-id⟧.e.CreateDashedLines = ⟦2-char-id⟧, ⟦2-char-id⟧.d.CreateLines = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+    ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.d.CreateLineSystem = ⟦2-char-id⟧, ⟦2-char-id⟧.d.CreateDashedLines = ⟦2-char-id⟧, ⟦2-char-id⟧.e.CreateLines = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, {
         points: ⟦2-char-id⟧,
         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-    }, ⟦2-char-id⟧.d.CreateDashedLines = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+    }, ⟦2-char-id⟧.e.CreateDashedLines = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, {
         points: ⟦2-char-id⟧,
         dashSize: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 21 · Change · +11 / -11</summary>

```diff
@@ -585,19 +585,19 @@
       }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
     })
   },
-  39224: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39205: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(36231),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38918),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39159),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39049),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39234),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38677);
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.d {
+      d: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(36183),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(38897),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39143),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39214),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39040),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39216),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(38629);
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.e {
       _isShaderMaterial(⟦2-char-id⟧) {
         return !!⟦2-char-id⟧ && "ShaderMaterial" === ⟦2-char-id⟧.getClassName()
       }
```

</details>

<details>
<summary>Hunk 22 · Change · +6 / -6</summary>

```diff
@@ -606,21 +606,21 @@
           ⟦2-char-id⟧ = arguments.length > 5 ? arguments[5] : void 0,
           ⟦2-char-id⟧ = arguments.length > 6 ? arguments[6] : void 0,
           ⟦2-char-id⟧ = arguments.length > 7 ? arguments[7] : void 0;
-        super(⟦2-char-id⟧, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ⟦2-char-id⟧, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = ⟦2-char-id⟧, this.useVertexAlpha = ⟦2-char-id⟧, this.color = new ⟦2-char-id⟧.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ⟦2-char-id⟧ && (this.color = ⟦2-char-id⟧.color.clone(), this.alpha = ⟦2-char-id⟧.alpha, this.useVertexColor = ⟦2-char-id⟧.useVertexColor, this.useVertexAlpha = ⟦2-char-id⟧.useVertexAlpha), this.intersectionThreshold = .1;
+        super(⟦2-char-id⟧, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ⟦2-char-id⟧, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = ⟦2-char-id⟧, this.useVertexAlpha = ⟦2-char-id⟧, this.color = new ⟦2-char-id⟧.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ⟦2-char-id⟧ && (this.color = ⟦2-char-id⟧.color.clone(), this.alpha = ⟦2-char-id⟧.alpha, this.useVertexColor = ⟦2-char-id⟧.useVertexColor, this.useVertexAlpha = ⟦2-char-id⟧.useVertexAlpha), this.intersectionThreshold = .1;
         const ⟦2-char-id⟧ = {
-          attributes: [⟦2-char-id⟧.n.PositionKind],
+          attributes: [⟦2-char-id⟧.m.PositionKind],
           uniforms: ["world", "viewProjection"],
           needAlphaBlending: !0,
           defines: [],
           useClipPlane: null,
           shaderLanguage: 0
         };
-        if (this.useVertexAlpha ? ⟦2-char-id⟧.defines.push("#define VERTEXALPHA") : ⟦2-char-id⟧.needAlphaBlending = !1, this.useVertexColor ? (⟦2-char-id⟧.defines.push("#define VERTEXCOLOR"), ⟦2-char-id⟧.attributes.push(⟦2-char-id⟧.n.ColorKind)) : (⟦2-char-id⟧.uniforms.push("color"), this._color4 = new ⟦2-char-id⟧.f), ⟦2-char-id⟧) this.material = ⟦2-char-id⟧;
+        if (this.useVertexAlpha ? ⟦2-char-id⟧.defines.push("#define VERTEXALPHA") : ⟦2-char-id⟧.needAlphaBlending = !1, this.useVertexColor ? (⟦2-char-id⟧.defines.push("#define VERTEXCOLOR"), ⟦2-char-id⟧.attributes.push(⟦2-char-id⟧.m.ColorKind)) : (⟦2-char-id⟧.uniforms.push("color"), this._color4 = new ⟦2-char-id⟧.d), ⟦2-char-id⟧) this.material = ⟦2-char-id⟧;
         else {
-          this.Qy().gn().isWebGPU && !⟦2-char-id⟧.ForceGLSL && (this._shaderLanguage = 1), ⟦2-char-id⟧.shaderLanguage = this._shaderLanguage, ⟦2-char-id⟧.extraInitializationsAsync = async () => {
-            1 === this._shaderLanguage ? await Promise.all([⟦2-char-id⟧.e(324).then((() => ⟦2-char-id⟧(41211))), ⟦2-char-id⟧.e(330).then((() => ⟦2-char-id⟧(41219)))]) : await Promise.all([⟦2-char-id⟧.e(306).then((() => ⟦2-char-id⟧(41222))), ⟦2-char-id⟧.e(312).then((() => ⟦2-char-id⟧(41230)))])
+          this.jU().PD().isWebGPU && !⟦2-char-id⟧.ForceGLSL && (this._shaderLanguage = 1), ⟦2-char-id⟧.shaderLanguage = this._shaderLanguage, ⟦2-char-id⟧.extraInitializationsAsync = async () => {
+            1 === this._shaderLanguage ? await Promise.all([⟦2-char-id⟧.e(324).then((() => ⟦2-char-id⟧(41239))), ⟦2-char-id⟧.e(330).then((() => ⟦2-char-id⟧(41248)))]) : await Promise.all([⟦2-char-id⟧.e(306).then((() => ⟦2-char-id⟧(41252))), ⟦2-char-id⟧.e(312).then((() => ⟦2-char-id⟧(41260)))])
           };
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.t("colorShader", this.Qy(), "color", ⟦2-char-id⟧, !1);
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.l("colorShader", this.jU(), "color", ⟦2-char-id⟧, !1);
           ⟦2-char-id⟧.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(⟦2-char-id⟧)
         }
       }
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -637,7 +637,7 @@
         this._ownsMaterial = !1, this._setInternalMaterial(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧?.dispose()
       }
       _setInternalMaterial(⟦2-char-id⟧) {
-        this._setMaterial(⟦2-char-id⟧), this.material && (this.material.fillMode = ⟦2-char-id⟧.c.LineListDrawMode, this.material.disableLighting = !0)
+        this._setMaterial(⟦2-char-id⟧), this.material && (this.material.fillMode = ⟦2-char-id⟧.b.LineListDrawMode, this.material.disableLighting = !0)
       }
       get checkCollisions() {
         return !1
```

</details>

<details>
<summary>Hunk 24 · Change · +2 / -2</summary>

```diff
@@ -658,8 +658,8 @@
       }
       _draw(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-        const ⟦2-char-id⟧ = this.Qy().gn();
-        return this._unIndexed ? ⟦2-char-id⟧.drawArraysType(⟦2-char-id⟧.c.LineListDrawMode, ⟦2-char-id⟧.verticesStart, ⟦2-char-id⟧.verticesCount, ⟦2-char-id⟧) : ⟦2-char-id⟧.drawElementsType(⟦2-char-id⟧.c.LineListDrawMode, ⟦2-char-id⟧.indexStart, ⟦2-char-id⟧.indexCount, ⟦2-char-id⟧), this
+        const ⟦2-char-id⟧ = this.jU().PD();
+        return this._unIndexed ? ⟦2-char-id⟧.drawArraysType(⟦2-char-id⟧.b.LineListDrawMode, ⟦2-char-id⟧.verticesStart, ⟦2-char-id⟧.verticesCount, ⟦2-char-id⟧) : ⟦2-char-id⟧.drawElementsType(⟦2-char-id⟧.b.LineListDrawMode, ⟦2-char-id⟧.indexStart, ⟦2-char-id⟧.indexCount, ⟦2-char-id⟧), this
       }
       dispose(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
```

</details>

<details>
<summary>Hunk 25 · Change · +9 / -9</summary>

```diff
@@ -670,28 +670,28 @@
           ⟦2-char-id⟧ = arguments.length > 2 ? arguments[2] : void 0;
         if (⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧._addToSceneRootNodes) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-          return ⟦2-char-id⟧.source = this, new ⟦2-char-id⟧(⟦2-char-id⟧, this.Qy(), ⟦2-char-id⟧.parent, ⟦2-char-id⟧.source, ⟦2-char-id⟧.doNotCloneChildren)
-        }
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, this.Qy(), ⟦2-char-id⟧, this, ⟦2-char-id⟧)
+          return ⟦2-char-id⟧.source = this, new ⟦2-char-id⟧(⟦2-char-id⟧, this.jU(), ⟦2-char-id⟧.parent, ⟦2-char-id⟧.source, ⟦2-char-id⟧.doNotCloneChildren)
+        }
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, this.jU(), ⟦2-char-id⟧, this, ⟦2-char-id⟧)
       }
       createInstance(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, this);
-        if (this.HI) {
-          ⟦2-char-id⟧.HI = {};
-          for (const ⟦2-char-id⟧ in this.HI) ⟦2-char-id⟧.HI[⟦2-char-id⟧] = this.HI[⟦2-char-id⟧]
+        if (this.sK) {
+          ⟦2-char-id⟧.sK = {};
+          for (const ⟦2-char-id⟧ in this.sK) ⟦2-char-id⟧.sK[⟦2-char-id⟧] = this.sK[⟦2-char-id⟧]
         }
         return ⟦2-char-id⟧
       }
       serialize(⟦2-char-id⟧) {
-        super.serialize(⟦2-char-id⟧), ⟦2-char-id⟧.color = this.color.JFJ(), ⟦2-char-id⟧.alpha = this.alpha
+        super.serialize(⟦2-char-id⟧), ⟦2-char-id⟧.color = this.color.FVB(), ⟦2-char-id⟧.alpha = this.alpha
       }
       static Parse(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧);
-        return ⟦2-char-id⟧.color = ⟦2-char-id⟧.e.FromArray(⟦2-char-id⟧.color), ⟦2-char-id⟧.alpha = ⟦2-char-id⟧.alpha, ⟦2-char-id⟧
+        return ⟦2-char-id⟧.color = ⟦2-char-id⟧.c.FromArray(⟦2-char-id⟧.color), ⟦2-char-id⟧.alpha = ⟦2-char-id⟧.alpha, ⟦2-char-id⟧
       }
     }
     ⟦2-char-id⟧.ForceGLSL = !1;
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.b {
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.d {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
         super(⟦2-char-id⟧, ⟦2-char-id⟧), this.intersectionThreshold = ⟦2-char-id⟧.intersectionThreshold
       }
```

</details>

<details>
<summary>Hunk 26 · Change · +9 / -9</summary>

```diff
@@ -702,16 +702,16 @@
     let ⟦2-char-id⟧ = !1;
 
     function ⟦2-char-id⟧() {
-      ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.d._LinesMeshParser = (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.Parse(⟦2-char-id⟧, ⟦2-char-id⟧))
-    }(⟦2-char-id⟧ = ⟦2-char-id⟧.prototype).enableEdgesRendering ?? (⟦2-char-id⟧.enableEdgesRendering = (0, ⟦2-char-id⟧.l)("LinesMesh", "enableEdgesRendering")), (⟦2-char-id⟧ = ⟦2-char-id⟧.prototype).enableEdgesRendering ?? (⟦2-char-id⟧.enableEdgesRendering = (0, ⟦2-char-id⟧.l)("InstancedLinesMesh", "enableEdgesRendering"))
-  },
-  37658: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37660);
+      ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.e._LinesMeshParser = (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.Parse(⟦2-char-id⟧, ⟦2-char-id⟧))
+    }(⟦2-char-id⟧ = ⟦2-char-id⟧.prototype).enableEdgesRendering ?? (⟦2-char-id⟧.enableEdgesRendering = (0, ⟦2-char-id⟧.h)("LinesMesh", "enableEdgesRendering")), (⟦2-char-id⟧ = ⟦2-char-id⟧.prototype).enableEdgesRendering ?? (⟦2-char-id⟧.enableEdgesRendering = (0, ⟦2-char-id⟧.h)("InstancedLinesMesh", "enableEdgesRendering"))
+  },
+  37646: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      b: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37651);
     const ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧.getClassName && "Mesh" === ⟦2-char-id⟧.getClassName() ? null : !⟦2-char-id⟧.getClassName || "SubMesh" !== ⟦2-char-id⟧.getClassName() && "PhysicsBody" !== ⟦2-char-id⟧.getClassName() ? ⟦2-char-id⟧.clone ? ⟦2-char-id⟧.clone() : Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice() : ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ ? {
-      ...JJ
+      ...BB
     } : null : ⟦2-char-id⟧.clone(⟦2-char-id⟧) : null;
     class ⟦2-char-id⟧ {
       static DeepCopy(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 27 · Change · +12 / -12</summary>

```diff
@@ -742,26 +742,26 @@
             } else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
             else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧
           } catch (⟦2-char-id⟧) {
-            ⟦2-char-id⟧.c.Warn(⟦2-char-id⟧.message)
-          }
-        }
-      }
-    }
-  },
-  36865: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+            ⟦2-char-id⟧.b.Warn(⟦2-char-id⟧.message)
+          }
+        }
+      }
+    }
+  },
+  36822: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧() {
       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (⟦2-char-id⟧ => {
         const ⟦2-char-id⟧ = 16 * Math.random() | 0;
-        return ("x" === ⟦2-char-id⟧ ? cJ : 3 & ⟦2-char-id⟧ | 8).toString(16)
+        return ("x" === ⟦2-char-id⟧ ? TB : 3 & ⟦2-char-id⟧ | 8).toString(16)
       }))
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     })
   },
-  37660: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+  37651: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      b: () => ⟦2-char-id⟧
     });
     class ⟦2-char-id⟧ {
       static _CheckLimit(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -782,7 +782,7 @@
         ⟦2-char-id⟧._LogCache = ⟦2-char-id⟧ + ⟦2-char-id⟧._LogCache, ⟦2-char-id⟧.OnNewCacheEntry && ⟦2-char-id⟧.OnNewCacheEntry(⟦2-char-id⟧)
       }
       static _FormatMessage(⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ < 10 ? "0" + JJ : "" + ⟦2-char-id⟧,
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ < 10 ? "0" + BB : "" + ⟦2-char-id⟧,
           ⟦2-char-id⟧ = new Date;
         return "[" + ⟦2-char-id⟧(⟦2-char-id⟧.getHours()) + ":" + ⟦2-char-id⟧(⟦2-char-id⟧.getMinutes()) + ":" + ⟦2-char-id⟧(⟦2-char-id⟧.getSeconds()) + "]: " + ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 29 · Change · +2 / -2</summary>

```diff
@@ -796,8 +796,8 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧._FormatMessage(⟦2-char-id⟧),
           ⟦2-char-id⟧ = this._Levels[⟦2-char-id⟧],
           ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice(1) : [];
-        ⟦2-char-id⟧.logFunc && ⟦2-char-id⟧.logFunc("BJS - " + ⟦2-char-id⟧, ...AJ);
-        const ⟦2-char-id⟧ = `<div style='color:${XJ.color}'>${eJ}</div><br>`;
+        ⟦2-char-id⟧.logFunc && ⟦2-char-id⟧.logFunc("BJS - " + ⟦2-char-id⟧, ...JB);
+        const ⟦2-char-id⟧ = `<div style='color:${lB.color}'>${pB}</div><br>`;
         ⟦2-char-id⟧._AddLogEntry(⟦2-char-id⟧), ⟦2-char-id⟧._GenerateLimitMessage(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       static get LogCache() {
```

</details>

<details>
<summary>Hunk 30 · Change · +6 / -6</summary>

```diff
@@ -830,12 +830,12 @@
       name: "Error"
     }], ⟦2-char-id⟧.errorsCount = 0, ⟦2-char-id⟧.Log = ⟦2-char-id⟧._LogEnabled.bind(⟦2-char-id⟧, ⟦2-char-id⟧.MessageLogLevel), ⟦2-char-id⟧.Warn = ⟦2-char-id⟧._LogEnabled.bind(⟦2-char-id⟧, ⟦2-char-id⟧.WarningLogLevel), ⟦2-char-id⟧.Error = ⟦2-char-id⟧._LogEnabled.bind(⟦2-char-id⟧, ⟦2-char-id⟧.ErrorLogLevel)
   },
-  38872: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧.e
-    });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38874);
-    (0, ⟦2-char-id⟧.d)()
+  38840: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧.g
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38843);
+    (0, ⟦2-char-id⟧.c)()
   }
 };
 Object.freeze(modules);
```

</details>

</details>
