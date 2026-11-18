# Historical build diff — part 008

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 22

<details>
<summary><code>bundles/bloxd.io/chunks/js/191.js</code> · modified · +6 / -6</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +5 / -5</summary>

```diff
@@ -1,19 +1,19 @@
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
-      return ⟦2-char-id⟧()('(()=>{var JJ={11:(JJ,cJ,ZJ)=>{JJ.exports=ZJ.p+"static/media/bloxd_wasm_bg.d6cb02368a1f50c0df7d.wasm"},13:(JJ,cJ,ZJ)=>{JJ.exports=ZJ.p+"static/media/bloxd_wasm_textures_bg.91449dd66a7e88721c00.wasm"}},cJ={};function ZJ(FJ){var UJ=cJ[FJ];if(void 0!==UJ)return UJ.exports;var eJ=cJ[FJ]={exports:{}};return JJ[FJ](eJ,eJ.exports,ZJ),eJ.exports}ZJ.m=JJ,ZJ.d=(JJ,cJ)=>{for(var FJ in cJ)ZJ.o(cJ,FJ)&&!ZJ.o(JJ,FJ)&&Object.defineProperty(JJ,FJ,{enumerable:!0,get:cJ[FJ]})},ZJ.f={},ZJ.e=JJ=>Promise.all(Object.keys(ZJ.f).reduce(((cJ,FJ)=>(ZJ.f[FJ](JJ,cJ),cJ)),[])),ZJ.u=JJ=>"static/js/symm5.wasmZstdDecoder.6a400432.chunk.worker.js",ZJ.o=(JJ,cJ)=>Object.prototype.hasOwnProperty.call(JJ,cJ),ZJ.r=JJ=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(JJ,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(JJ,"__esModule",{value:!0})},ZJ.U=function(JJ){var cJ=new URL(JJ,"x:/"),ZJ={};for(var FJ in cJ)ZJ[FJ]=cJ[FJ];for(var FJ in ZJ.href=JJ,ZJ.pathname=JJ.replace(/[?#].*/,""),ZJ.origin=ZJ.protocol="",ZJ.toString=ZJ.toJSON=()=>JJ,ZJ)Object.defineProperty(this,FJ,{enumerable:!0,configurable:!0,value:ZJ[FJ]})},ZJ.U.prototype=URL.prototype,ZJ.p="/",(()=>{var JJ={0:1};ZJ.f.i=(cJ,FJ)=>{JJ[cJ]||importScripts(ZJ.p+ZJ.u(cJ))};var cJ=self.webpackChunk_bloxd_web=self.webpackChunk_bloxd_web||[],FJ=cJ.push.bind(cJ);cJ.push=cJ=>{var UJ=cJ[0],eJ=cJ[1],XJ=cJ[2];for(var AJ in eJ)ZJ.o(eJ,AJ)&&(ZJ.m[AJ]=eJ[AJ]);for(XJ&&XJ(ZJ);UJ.length;)JJ[UJ.pop()]=1;FJ(cJ)}})();var FJ={};ZJ.r(FJ),ZJ.d(FJ,{WY:()=>eJ,EnvelopeKind:()=>XJ,gY:()=>AJ,PhysicsEngine:()=>qJ,HY:()=>jJ,PY:()=>YJ,kY:()=>hJ,pY:()=>DJ,dY:()=>sJ,zY:()=>nJ,NY:()=>GJ,OY:()=>fJ,TY:()=>xJ,CY:()=>rJ,default:()=>yc,initSync:()=>Kc,uY:()=>vJ,iY:()=>mJ,RY:()=>QJ,LY:()=>EJ,aY:()=>VJ,BY:()=>KJ,tY:()=>yJ,oY:()=>SJ,lY:()=>IJ,Jh:()=>MJ,Zh:()=>bJ,Fh:()=>wJ,Uh:()=>WJ,eh:()=>gJ,Xh:()=>HJ});var UJ={};ZJ.r(UJ),ZJ.d(UJ,{BloxdWasmFetchError:()=>Tc,BloxdWasmHttpError:()=>Cc,BloxdWasmIntegrityError:()=>ic,BloxdWasmTimeoutError:()=>uc,PROMISE_HOOK_CODES:()=>zc,RETRY_DELAYS_MS:()=>ac,STALL_TIMEOUT_MS:()=>Lc,WASM_HOOKS_ENFORCED:()=>EU,WasmBufferView:()=>Ve,bloxdTextureWasmUrl:()=>ve,bloxdWasmCore:()=>se,bloxdWasmDownloadHref:()=>Ze,compileBloxdTextureWasm:()=>Qe,compileBloxdWasmBrowser:()=>he,describeBloxdWasmFailure:()=>BZ,fetchBytes:()=>mZ,getBloxdWasm:()=>tZ,getBloxdWasmBuild:()=>oZ,getBloxdWasmFailureReason:()=>aZ,getBloxdWasmFailureStage:()=>iZ,getBloxdWasmFailureStatus:()=>LZ,getBloxdWasmMemory:()=>ZF,getBloxdWasmModule:()=>lZ,getBloxdWasmStatus:()=>uZ,getBloxdWasmTamper:()=>CU,getLastBloxdWasmPanic:()=>JF,initBloxdWasmBrowser:()=>ne,initBloxdWasmFromModule:()=>Ge,isBloxdWasmDownloadFailureRetryable:()=>UF,isBloxdWasmLoadUnstreamed:()=>fZ,isBloxdWasmReady:()=>CZ,isEnforceableWasmReport:()=>wU,isPromiseHookReport:()=>IU,isPunishedWasmReport:()=>WU,isRendererWasmReport:()=>vU,isWeightedWasmReport:()=>yU,loadBloxdWasmBrowser:()=>je,markBloxdWasmFailed:()=>FF,onBloxdWasmFailed:()=>jF,onBloxdWasmMemoryGrown:()=>YF,takeBloxdWasmRefusedAllocation:()=>cF,textureLoadFailure:()=>re,wasmMemoryControl:()=>xe,wasmView:()=>Ee,watchBloxdRenderer:()=>rU});class eJ{__destroy_into_raw(){const JJ=this.__wbg_ptr;return this.__wbg_ptr=0,kJ.unregister(this),JJ}free(){const JJ=this.__destroy_into_raw();Qc.b8CL(JJ,0)}Ah(){const JJ=Qc.Akzp(this.__wbg_ptr);if(JJ[2])throw nc(JJ[1]);return JJ[0]>>>0}qh(){return Qc.skNI(this.__wbg_ptr)>>>0}constructor(){const JJ=Qc.Raxv();return this.__wbg_ptr=JJ,kJ.register(this,this.__wbg_ptr,this),this}jh(){return Qc.RTqK(this.__wbg_ptr)>>>0}Yh(JJ){const cJ=Qc.dDSE(this.__wbg_ptr,JJ);if(cJ[2])throw nc(cJ[1]);return cJ[0]>>>0}hh(JJ){const cJ=Qc.bDgb(this.__wbg_ptr,JJ);if(cJ[2])throw nc(cJ[1]);return cJ[0]>>>0}}Symbol.dispose&&(eJ.prototype[Symbol.dispose]=eJ.prototype.free);const XJ=Object.freeze({Js:0,0:"Js",Error:1,1:"Error",LeaveRoom:2,2:"LeaveRoom",RoomState:3,3:"RoomState",RoomStatePatch:4,4:"RoomStatePatch",RoomDataNone:5,5:"RoomDataNone",RoomDataBin:6,6:"RoomDataBin",RoomDataBytes:7,7:"RoomDataBytes",Ignored:8,8:"Ignored",StringType:16,16:"StringType"});class AJ{__destroy_into_raw(){const JJ=this.__wbg_ptr;return this.__wbg_ptr=0,pJ.unregister(this),JJ}free(){const JJ=this.__destroy_into_raw();Qc.BFf0(JJ,0)}nh(JJ,cJ){const ZJ=Qc.g2v6(this.__wbg_ptr,JJ,cJ);if(ZJ[2])throw nc(ZJ[1]);return ZJ[0]>>>0}Gh(JJ){const cJ=Qc.sS0S(this.__wbg_ptr,JJ);if(cJ[2])throw nc(cJ[1]);return cJ[0]>>>0}xh(){Qc.pvEy(this.__wbg_ptr)}static rh(){return Qc.id8F()>>>0}mh(){return Qc.K0Un(this.__wbg_ptr)>>>0}Qh(){const JJ=Qc.adq0(this.__wbg_ptr);return 0===JJ[0]?void 0:JJ[1]}Eh(){return Qc.CUS4(this.__wbg_ptr)>>>0}Vh(){return Qc.qOQw(this.__wbg_ptr)>>>0}static sh(){return Qc.VChA()>>>0}constructor(){const JJ=Qc.ZCYM();return this.__wbg_ptr=JJ,pJ.register(this,this.__wbg_ptr,this),this}Kh(){return Qc.IF5D(this.__wbg_ptr)>>>0}yh(){return Qc.usr7(this.__wbg_ptr)>>>0}Sh(){return Qc.VzC9(this.__wbg_ptr)>>>0}Dh(JJ){return Qc.Z3w0(this.__wbg_ptr,JJ)>>>0}reserve(JJ,cJ){const ZJ=Qc.ch8C(this.__wbg_ptr,JJ,cJ);if(ZJ[1])throw nc(ZJ[0])}bh(JJ,cJ){const ZJ=Yc(JJ,Qc.P3EW),FJ=Ec;Qc.GU3m(this.__wbg_ptr,ZJ,FJ,cJ)}text(){let JJ,cJ;try{const ZJ=Qc.hq0T(this.__wbg_ptr);return JJ=ZJ[0],cJ=ZJ[1],lJ(ZJ[0],ZJ[1])}finally{Qc.DGph(JJ,cJ,1)}}}Symbol.dispose&&(AJ.prototype[Symbol.dispose]=AJ.prototype.free);class qJ{__destroy_into_raw(){const JJ=this.__wbg_ptr;return this.__wbg_ptr=0,dJ.unregister(this),JJ}free(){const JJ=this.__destroy_into_raw();Qc.YuqN(JJ,0)}gh(JJ,cJ){iJ(cJ,eJ);const ZJ=Qc.kjAs(this.__wbg_ptr,JJ,cJ.__wbg_ptr);if(ZJ[2])throw nc(ZJ[1]);return ZJ[0]>>>0}Ph(){const JJ=Qc.A4hV(this.__wbg_ptr);if(JJ[1])throw nc(JJ[0])}Nh(JJ,cJ,ZJ,FJ,UJ,eJ,XJ,AJ,qJ,YJ,hJ){iJ(JJ,jJ);const DJ=Qc.JH1T(this.__wbg_ptr,JJ.__wbg_ptr,cJ,ZJ,FJ,UJ,eJ,XJ,AJ,qJ,YJ,hJ);if(DJ[2])throw nc(DJ[1]);return DJ[0]}Oh(){const JJ=Qc.uFOv(this.__wbg_ptr);var cJ=RJ(JJ[0],JJ[1]).slice();return Qc.DGph(JJ[0],8*JJ[1],8),cJ}Th(){return Qc.rx80(this.__wbg_ptr)>>>0}Ch(){return Qc.wasp(this.__wbg_ptr)>>>0}uh(){return Qc.IR9V(this.__wbg_ptr)>>>0}constructor(JJ,cJ,ZJ,FJ,UJ,eJ,XJ,AJ){const qJ=Qc.eEuk(JJ,cJ,ZJ,FJ,UJ,eJ,XJ,AJ);if(qJ[2])throw nc(qJ[1]);return this.__wbg_ptr=qJ[0],dJ.register(this,this.__wbg_ptr,this),this}Lh(JJ){iJ(JJ,eJ);const cJ=Qc.dpGv(this.__wbg_ptr,JJ.__wbg_ptr);if(cJ[2])throw nc(cJ[1]);return cJ[0]>>>0}ah(JJ){const cJ=Qc.culY(this.__wbg_ptr,JJ);if(cJ[1])throw nc(cJ[0])}Bh(){return Qc.YTqn(this.__wbg_ptr)>>>0}resume(JJ,cJ){iJ(JJ,jJ),iJ(cJ,eJ);const ZJ=Qc.bwer(this.__wbg_ptr,JJ.__wbg_ptr,cJ.__wbg_ptr);if(ZJ[2])throw nc(ZJ[1]);return ZJ[0]>>>0}FD(JJ){const cJ=Qc.nuRc(this.__wbg_ptr,JJ);if(cJ[1])throw nc(cJ[0])}XD(JJ,cJ){iJ(cJ,eJ);const ZJ=Qc.ICVJ(this.__wbg_ptr,JJ,cJ.__wbg_ptr);if(ZJ[1])throw nc(ZJ[0])}jD(JJ){const cJ=Dc(JJ,Qc.P3EW),ZJ=Ec,FJ=Qc.fkZB(this.__wbg_ptr,cJ,ZJ);if(FJ[1])throw nc(FJ[0])}ph(JJ,cJ,ZJ,FJ,UJ,eJ){const XJ=Qc.UF1t(this.__wbg_ptr,JJ,cJ,ZJ,FJ,UJ,eJ);if(XJ[1])throw nc(XJ[0])}dh(JJ,cJ,ZJ,FJ){const UJ=Yc(JJ,Qc.P3EW),eJ=Ec,XJ=Dc(cJ,Qc.P3EW),AJ=Ec,qJ=Dc(ZJ,Qc.P3EW),jJ=Ec,YJ=Dc(FJ,Qc.P3EW),hJ=Ec,DJ=Qc.fYNO(this.__wbg_ptr,UJ,eJ,XJ,AJ,qJ,jJ,YJ,hJ);if(DJ[1])throw nc(DJ[0])}hD(JJ,cJ){iJ(cJ,eJ);const ZJ=Qc.tHCS(this.__wbg_ptr,JJ,cJ.__wbg_ptr);if(ZJ[1])throw nc(ZJ[0])}Rh(JJ,cJ,ZJ){const FJ=Qc.qOUh(this.__wbg_ptr,JJ,cJ,ZJ);if(FJ[1])throw nc(FJ[0])}sD(JJ,cJ,ZJ,FJ,UJ,eJ,XJ,AJ,qJ,YJ){iJ(JJ,jJ);return Qc.RPmI(this.__wbg_ptr,JJ.__wbg_ptr,cJ,ZJ,FJ,UJ,eJ,XJ,AJ,qJ,YJ)}}Symbol.dispose&&(qJ.prototype[Symbol.dispose]=qJ.prototype.free);class jJ{static __wrap(JJ){const cJ=Object.create(jJ.prototype);return cJ.__wbg_ptr=JJ,zJ.register(cJ,cJ.__wbg_ptr,cJ),cJ}__destroy_into_raw(){const JJ=this.__wbg_ptr;return this.__wbg_ptr=0,zJ.unregister(this),JJ}free(){const JJ=this.__destroy_into_raw();Qc.jwdK(JJ,0)}fD(JJ){const cJ=Qc.Yvcx(this.__wbg_ptr,JJ);if(cJ[2])throw nc(cJ[1]);return cJ[0]>>>0}xD(JJ,cJ,ZJ){return Qc.SP17(this.__wbg_ptr,JJ,cJ,ZJ)}rD(JJ,cJ,ZJ){return Qc.NT3H(this.__wbg_ptr,JJ,cJ,ZJ)>>>0}vD(JJ,cJ,ZJ,FJ){return 0!==Qc.zsw3(this.__wbg_ptr,JJ,cJ,ZJ,FJ)}mD(){Qc.yoWg(this.__wbg_ptr)}ED(JJ){const cJ=Qc.eQHQ(this.__wbg_ptr,JJ);if(cJ[3])throw nc(cJ[2]);var ZJ=aJ(cJ[0],cJ[1]).slice();return Qc.DGph(cJ[0],1*cJ[1],1),ZJ}evict(JJ,cJ){return Qc.S8rl(this.__wbg_ptr,JJ,cJ)>>>0}VD(){Qc.cTES(this.__wbg_ptr)}KD(JJ,cJ,ZJ){Qc.pu5E(this.__wbg_ptr,JJ,cJ,ZJ)}yD(JJ){const cJ=Qc.kf9O(this.__wbg_ptr,JJ);if(cJ[1])throw nc(cJ[0])}SD(){return Qc.Ews0(this.__wbg_ptr)>>>0}MD(){return Qc.R4sb(this.__wbg_ptr)>>>0}bD(JJ,cJ,ZJ){Qc.FygS(this.__wbg_ptr,JJ,cJ,ZJ)}wD(JJ,cJ,ZJ){Qc.NLeB(this.__wbg_ptr,JJ,cJ,ZJ)}WD(){return Qc.mJTC(this.__wbg_ptr)>>>0}gD(){return Qc.z2kH(this.__wbg_ptr)>>>0}constructor(){const JJ=Qc.c5x5();return this.__wbg_ptr=JJ,zJ.register(this,this.__wbg_ptr,this),this}static HD(){const JJ=Qc.LPzD();return jJ.__wrap(JJ)}PD(){return Qc.i46m(this.__wbg_ptr)>>>0}kD(){return Qc.oF1X(this.__wbg_ptr)>>>0}pD(JJ,cJ,ZJ,FJ){const UJ=Qc.m6fX(this.__wbg_ptr,JJ,cJ,ZJ,FJ);if(UJ[1])throw nc(UJ[0])}dD(){return Qc.fTXD(this.__wbg_ptr)>>>0}zD(){return Qc.FF1y(this.__wbg_ptr)>>>0}ND(JJ,cJ,ZJ,FJ){Qc.q0uT(this.__wbg_ptr,JJ,cJ,ZJ,FJ)}OD(JJ){Qc.fuc6(this.__wbg_ptr,JJ)}CD(JJ,cJ,ZJ,FJ,UJ){const eJ=hc(cJ,Qc.P3EW),XJ=Ec,AJ=Yc(ZJ,Qc.P3EW),qJ=Ec,jJ=Dc(FJ,Qc.P3EW),YJ=Ec,hJ=Qc.EPYr(this.__wbg_ptr,JJ,eJ,XJ,AJ,qJ,jJ,YJ,UJ);if(hJ[1])throw nc(hJ[0])}TD(JJ,cJ,ZJ,FJ){const UJ=hc(JJ,Qc.P3EW),eJ=Ec,XJ=Yc(cJ,Qc.P3EW),AJ=Ec,qJ=Dc(ZJ,Qc.P3EW),jJ=Ec,YJ=hc(FJ,Qc.P3EW),hJ=Ec,DJ=Qc.hlCq(this.__wbg_ptr,UJ,eJ,XJ,AJ,qJ,jJ,YJ,hJ);if(DJ[1])throw nc(DJ[0])}BD(JJ){const cJ=hc(JJ,Qc.P3EW),ZJ=Ec,FJ=Qc.g8Qo(this.__wbg_ptr,cJ,ZJ);if(FJ[1])throw nc(FJ[0])}tD(){return Qc.HgkB(this.__wbg_ptr)>>>0}oD(JJ){const cJ=Qc.apUo(this.__wbg_ptr,JJ);if(cJ[2])throw nc(cJ[1]);return cJ[0]>>>0}steer(){return Qc.gKOs(this.__wbg_ptr)>>>0}lD(){const JJ=Qc.t4CX(this.__wbg_ptr);var cJ=RJ(JJ[0],JJ[1]).slice();return Qc.DGph(JJ[0],8*JJ[1],8),cJ}Zs(){return Qc.Bsut(this.__wbg_ptr)>>>0}JD(){const JJ=Qc.X1J8(this.__wbg_ptr);var cJ,ZJ,FJ=(cJ=JJ[0],ZJ=JJ[1],cJ>>>=0,(null!==oJ&&0!==oJ.byteLength||(oJ=new Int32Array(Qc.memory.buffer)),oJ).subarray(cJ/4,cJ/4+ZJ)).slice();return Qc.DGph(JJ[0],4*JJ[1],4),FJ}}Symbol.dispose&&(jJ.prototype[Symbol.dispose]=jJ.prototype.free);class YJ{__destroy_into_raw(){const JJ=this.__wbg_ptr;return this.__wbg_ptr=0,NJ.unregister(this),JJ}free(){const JJ=this.__destroy_into_raw();Qc.l0uB(JJ,0)}Fs(JJ){const cJ=Yc(JJ,Qc.P3EW),ZJ=Ec,FJ=Qc.AXwt(this.__wbg_ptr,cJ,ZJ);if(FJ[1])throw nc(FJ[0])}Us(){return Qc.Em3O(this.__wbg_ptr)>>>0}es(){return Qc.oFFP(this.__wbg_ptr)>>>0}constructor(){const JJ=Qc.nKNa();return this.__wbg_ptr=JJ,NJ.register(this,this.__wbg_ptr,this),this}run(JJ,cJ){iJ(JJ,jJ);const ZJ=Qc.bzlb(this.__wbg_ptr,JJ.__wbg_ptr,cJ);if(ZJ[2])throw nc(ZJ[1]);return ZJ[0]>>>0}Xs(JJ){const cJ=Yc(JJ,Qc.P3EW),ZJ=Ec;Qc.Nl7G(this.__wbg_ptr,cJ,ZJ)}qs(JJ){const cJ=Yc(JJ,Qc.P3EW),ZJ=Ec;Qc.ky3r(this.__wbg_ptr,cJ,ZJ)}}Symbol.dispose&&(YJ.prototype[Symbol.dispose]=YJ.prototype.free);class hJ{__destroy_into_raw(){const JJ=this.__wbg_ptr;return this.__wbg_ptr=0,OJ.unregister(this),JJ}free(){const JJ=this.__destroy_into_raw();Qc.KhUs(JJ,0)}hs(JJ,cJ){const ZJ=hc(JJ,Qc.P3EW),FJ=Ec;return Qc.DOyv(this.__wbg_ptr,ZJ,FJ,cJ)>>>0}Ds(JJ,cJ,ZJ){iJ(JJ,jJ);const FJ=hc(ZJ,Qc.P3EW),UJ=Ec,eJ=Qc.yIJU(this.__wbg_ptr,JJ.__wbg_ptr,cJ,FJ,UJ);if(eJ[2])throw nc(eJ[1]);return eJ[0]>>>0}Ys(JJ){return Qc.Dudg(this.__wbg_ptr,JJ)>>>0}constructor(){const JJ=Qc.wHbP();return this.__wbg_ptr=JJ,OJ.register(this,this.__wbg_ptr,this),this}scan(JJ,cJ){iJ(JJ,jJ);const ZJ=Qc.RkqI(this.__wbg_ptr,JJ.__wbg_ptr,cJ);if(ZJ[2])throw nc(ZJ[1]);return ZJ[0]>>>0}xs(JJ){const cJ=hc(JJ,Qc.P3EW),ZJ=Ec;Qc.Q5gd(this.__wbg_ptr,cJ,ZJ)}fs(){return Qc.Htj6(this.__wbg_ptr)>>>0}Gs(){return Qc.xNtC(this.__wbg_ptr)>>>0}}Symbol.dispose&&(hJ.prototype[Symbol.dispose]=hJ.prototype.free);class DJ{__destroy_into_raw(){const JJ=this.__wbg_ptr;return this.__wbg_ptr=0,TJ.unregister(this),JJ}free(){const JJ=this.__destroy_into_raw();Qc.yfQg(JJ,0)}Es(JJ){const cJ=Qc.zfGv(this.__wbg_ptr,JJ);if(cJ[2])throw nc(cJ[1]);return cJ[0]>>>0}compute(JJ,cJ,ZJ,FJ){var UJ=qc(FJ)?0:sc(FJ,Qc.P3EW,Qc.sxx3),eJ=Ec;const XJ=Qc.GAxm(this.__wbg_ptr,JJ,qc(cJ)?Number.MAX_SAFE_INTEGER:cJ|0,ZJ,UJ,eJ);if(XJ[2])throw nc(XJ[1]);return XJ[0]>>>0}Ks(JJ){const cJ=sc(JJ,Qc.P3EW,Qc.sxx3),ZJ=Ec;Qc.EgOq(this.__wbg_ptr,cJ,ZJ)}Ss(){return Qc.h3X9(this.__wbg_ptr)}Is(JJ){return Qc.czEk(this.__wbg_ptr,JJ)>>>0}Ms(){return Qc.lsui(this.__wbg_ptr)>>>0}Ws(){return Qc.PSZs(this.__wbg_ptr)>>>0}gs(JJ,cJ){const ZJ=Qc.mej4(this.__wbg_ptr,JJ,cJ);if(ZJ[1])throw nc(ZJ[0])}Hs(){return Qc.swam(this.__wbg_ptr)>>>0}Ps(){return Qc.KU0w(this.__wbg_ptr)>>>0}ds(){return Qc.ZkED(this.__wbg_ptr)>>>0}Vs(JJ,cJ,ZJ){const FJ=Yc(JJ,Qc.P3EW),UJ=Ec,eJ=Yc(cJ,Qc.P3EW),XJ=Ec,AJ=Qc.aZMd(this.__wbg_ptr,FJ,UJ,eJ,XJ,ZJ);if(AJ[1])throw nc(AJ[0])}Ns(){return Qc.lXAR(this.__wbg_ptr)>>>0}mesh(JJ,cJ,ZJ,FJ,UJ){const eJ=Qc.fg4O(this.__wbg_ptr,JJ,cJ,ZJ,FJ,UJ);if(eJ[2])throw nc(eJ[1]);return eJ[0]>>>0}constructor(JJ,cJ,ZJ,FJ,UJ,eJ,XJ,AJ,qJ,jJ,YJ,hJ,DJ,sJ,nJ,GJ,fJ,xJ,rJ,vJ){const mJ=jc(JJ,Qc.P3EW),QJ=Ec,EJ=Dc(cJ,Qc.P3EW),VJ=Ec,KJ=Yc(ZJ,Qc.P3EW),yJ=Ec,SJ=hc(FJ,Qc.P3EW),IJ=Ec,MJ=hc(UJ,Qc.P3EW),bJ=Ec,wJ=Yc(eJ,Qc.P3EW),WJ=Ec,gJ=Yc(XJ,Qc.P3EW),HJ=Ec,PJ=Dc(AJ,Qc.P3EW),kJ=Ec,pJ=Dc(qJ,Qc.P3EW),dJ=Ec,zJ=hc(jJ,Qc.P3EW),NJ=Ec;var OJ=qc(YJ)?0:jc(YJ,Qc.P3EW),CJ=Ec;const uJ=Yc(hJ,Qc.P3EW),iJ=Ec,RJ=hc(DJ,Qc.P3EW),LJ=Ec;var aJ=qc(sJ)?0:hc(sJ,Qc.P3EW),BJ=Ec;const tJ=Dc(nJ,Qc.P3EW),oJ=Ec,lJ=Qc.ykzU(mJ,QJ,EJ,VJ,KJ,yJ,SJ,IJ,MJ,bJ,wJ,WJ,gJ,HJ,PJ,kJ,pJ,dJ,zJ,NJ,OJ,CJ,uJ,iJ,RJ,LJ,aJ,BJ,tJ,oJ,GJ,fJ,xJ,rJ,vJ);if(lJ[2])throw nc(lJ[1]);return this.__wbg_ptr=lJ[0],TJ.register(this,this.__wbg_ptr,this),this}zs(JJ,cJ){const ZJ=Yc(JJ,Qc.P3EW),FJ=Ec,UJ=Qc.v9aH(this.__wbg_ptr,ZJ,FJ,cJ);if(UJ[3])throw nc(UJ[2]);var eJ=aJ(UJ[0],UJ[1]).slice();return Qc.DGph(UJ[0],1*UJ[1],1),eJ}Os(JJ){Qc.mYGY(this.__wbg_ptr,qc(JJ)?16777215:JJ)}Ts(JJ){return Qc.eCL0(this.__wbg_ptr,JJ)>>>0}Rs(){return Qc.tGVN(this.__wbg_ptr)>>>0}Cs(){const JJ=Qc.fWou(this.__wbg_ptr);if(JJ[2])throw nc(JJ[1]);return 0!==JJ[0]}Ls(){return Qc.bOXy(this.__wbg_ptr)>>>0}Bs(){return Qc.dJOv(this.__wbg_ptr)>>>0}}Symbol.dispose&&(DJ.prototype[Symbol.dispose]=DJ.prototype.free);class sJ{__destroy_into_raw(){const JJ=this.__wbg_ptr;return this.__wbg_ptr=0,CJ.unregister(this),JJ}free(){const JJ=this.__destroy_into_raw();Qc.jVsj(JJ,0)}compute(JJ,cJ,ZJ,FJ){var UJ=qc(FJ)?0:sc(FJ,Qc.P3EW,Qc.sxx3),eJ=Ec;const XJ=Qc.VaoS(this.__wbg_ptr,JJ,qc(cJ)?Number.MAX_SAFE_INTEGER:cJ|0,ZJ,UJ,eJ);if(XJ[2])throw nc(XJ[1]);return XJ[0]>>>0}Ks(JJ){const cJ=sc(JJ,Qc.P3EW,Qc.sxx3),ZJ=Ec;Qc.Q2fa(this.__wbg_ptr,cJ,ZJ)}Ps(){return Qc.IpQ1(this.__wbg_ptr)>>>0}ds(){return Qc.O4iq(this.__wbg_ptr)>>>0}os(JJ){const cJ=Qc.nM5M(this.__wbg_ptr,JJ);if(cJ[2])throw nc(cJ[1]);return cJ[0]>>>0}constructor(JJ,cJ,ZJ,FJ,UJ,eJ){const XJ=jc(JJ,Qc.P3EW),AJ=Ec,qJ=Dc(cJ,Qc.P3EW),jJ=Ec,YJ=Yc(ZJ,Qc.P3EW),hJ=Ec,DJ=hc(FJ,Qc.P3EW),sJ=Ec,nJ=Qc.ZQQC(XJ,AJ,qJ,jJ,YJ,hJ,DJ,sJ,UJ,eJ);if(nJ[2])throw nc(nJ[1]);return this.__wbg_ptr=nJ[0],CJ.register(this,this.__wbg_ptr,this),this}Rs(){return Qc.Ypzg(this.__wbg_ptr)>>>0}Cs(){const JJ=Qc.QPOF(this.__wbg_ptr);if(JJ[2])throw nc(JJ[1]);return 0!==JJ[0]}Ls(){return Qc.ObTi(this.__wbg_ptr)>>>0}}function nJ(){const JJ=Qc.lOAp();var cJ=LJ(JJ[0],JJ[1]).slice();return Qc.DGph(JJ[0],4*JJ[1],4),cJ}function GJ(JJ,cJ){let ZJ,FJ;try{const UJ=jc(JJ,Qc.P3EW),eJ=Ec,XJ=sc(cJ,Qc.P3EW,Qc.sxx3),AJ=Ec,qJ=Qc.bqU9(UJ,eJ,XJ,AJ);return ZJ=qJ[0],FJ=qJ[1],lJ(qJ[0],qJ[1])}finally{Qc.DGph(ZJ,FJ,1)}}function fJ(){const JJ=Qc.ER1z();var cJ=LJ(JJ[0],JJ[1]).slice();return Qc.DGph(JJ[0],4*JJ[1],4),cJ}function xJ(JJ){return 0!==Qc.f75l(JJ)}function rJ(JJ,cJ){const ZJ=sc(JJ,Qc.P3EW,Qc.sxx3),FJ=Ec,UJ=Qc.gNX0(ZJ,FJ,cJ);if(UJ[1])throw nc(UJ[0])}function vJ(){Qc.xXmN()}function mJ(){return Qc.YvdD()>>>0}function QJ(JJ){return 0!==Qc.vplG(JJ)}function EJ(JJ){return 0!==Qc.zq4M(JJ)}function VJ(JJ){Qc.TDbF(JJ)}function KJ(){return Qc.qOOL()>>>0}function yJ(){return Qc.XLay()>>>0}function SJ(){return 0!==Qc.OYbv()}function IJ(){const JJ=Qc.bCNv();var cJ=LJ(JJ[0],JJ[1]).slice();return Qc.DGph(JJ[0],4*JJ[1],4),cJ}function MJ(){const JJ=Qc.bZva();var cJ=LJ(JJ[0],JJ[1]).slice();return Qc.DGph(JJ[0],4*JJ[1],4),cJ}function bJ(){const JJ=Qc.U82G();var cJ=LJ(JJ[0],JJ[1]).slice();return Qc.DGph(JJ[0],4*JJ[1],4),cJ}function wJ(){return Qc.bkO9()>>>0}function WJ(){Qc.p1SM()}function gJ(){let JJ,cJ;try{const ZJ=Qc.dJkk();return JJ=ZJ[0],cJ=ZJ[1],lJ(ZJ[0],ZJ[1])}finally{Qc.DGph(JJ,cJ,1)}}function HJ(JJ){Qc.Coif(uJ(JJ))}function PJ(){return{__proto__:null,QRHq:{__proto__:null,btiL:function(JJ,cJ){return uJ(Error(lJ(JJ,cJ)))},pQjc:function(JJ,cJ){throw new Error(lJ(JJ,cJ))},hVOW:function(JJ){ec(JJ).call()},R2m4:function(JJ,cJ){console.error(lJ(JJ,cJ))},iL7n:function(){return performance.now()},EiBK:function(JJ){nc(JJ)}}}}Symbol.dispose&&(sJ.prototype[Symbol.dispose]=sJ.prototype.free);const kJ="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((JJ=>Qc.b8CL(JJ,1))),pJ="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((JJ=>Qc.BFf0(JJ,1))),dJ="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((JJ=>Qc.YuqN(JJ,1))),zJ="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((JJ=>Qc.jwdK(JJ,1))),NJ="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((JJ=>Qc.l0uB(JJ,1))),OJ="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((JJ=>Qc.KhUs(JJ,1))),TJ="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((JJ=>Qc.yfQg(JJ,1))),CJ="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((JJ=>Qc.jVsj(JJ,1)));function uJ(JJ){Ac===Xc.length&&Xc.push(Xc.length+1);const cJ=Ac;return Ac=Xc[cJ],Xc[cJ]=JJ,cJ}function iJ(JJ,cJ){if(!(JJ instanceof cJ))throw new Error(`expected instance of ${cJ.name}`)}function RJ(JJ,cJ){return JJ>>>=0,tJ().subarray(JJ/8,JJ/8+cJ)}function LJ(JJ,cJ){return JJ>>>=0,Zc().subarray(JJ/4,JJ/4+cJ)}function aJ(JJ,cJ){return JJ>>>=0,Uc().subarray(JJ/1,JJ/1+cJ)}let BJ=null;function tJ(){return null!==BJ&&0!==BJ.byteLength||(BJ=new Float64Array(Qc.memory.buffer)),BJ}let oJ=null;function lJ(JJ,cJ){return function(JJ,cJ){xc+=cJ,xc>=fc&&(Gc=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Gc.decode(),xc=cJ);return Gc.decode(Uc().subarray(JJ,JJ+cJ))}(JJ>>>0,cJ)}let Jc=null;let cc=null;function Zc(){return null!==cc&&0!==cc.byteLength||(cc=new Uint32Array(Qc.memory.buffer)),cc}let Fc=null;function Uc(){return null!==Fc&&0!==Fc.byteLength||(Fc=new Uint8Array(Qc.memory.buffer)),Fc}function ec(JJ){return Xc[JJ]}let Xc=new Array(1024).fill(void 0);Xc.push(void 0,null,!0,!1);let Ac=Xc.length;function qc(JJ){return void 0===JJ||null===JJ}function jc(JJ,cJ){const ZJ=cJ(2*JJ.length,2)>>>0;return(null!==Jc&&0!==Jc.byteLength||(Jc=new Uint16Array(Qc.memory.buffer)),Jc).set(JJ,ZJ/2),Ec=JJ.length,ZJ}function Yc(JJ,cJ){const ZJ=cJ(4*JJ.length,4)>>>0;return Zc().set(JJ,ZJ/4),Ec=JJ.length,ZJ}function hc(JJ,cJ){const ZJ=cJ(1*JJ.length,1)>>>0;return Uc().set(JJ,ZJ/1),Ec=JJ.length,ZJ}function Dc(JJ,cJ){const ZJ=cJ(8*JJ.length,8)>>>0;return tJ().set(JJ,ZJ/8),Ec=JJ.length,ZJ}function sc(JJ,cJ,ZJ){if(void 0===ZJ){const ZJ=rc.encode(JJ),FJ=cJ(ZJ.length,1)>>>0;return Uc().subarray(FJ,FJ+ZJ.length).set(ZJ),Ec=ZJ.length,FJ}let FJ=JJ.length,UJ=cJ(FJ,1)>>>0;const eJ=Uc();let XJ=0;for(;XJ<FJ;XJ++){const cJ=JJ.charCodeAt(XJ);if(cJ>127)break;eJ[UJ+XJ]=cJ}if(XJ!==FJ){0!==XJ&&(JJ=JJ.slice(XJ)),UJ=ZJ(UJ,FJ,FJ=XJ+3*JJ.length,1)>>>0;const cJ=Uc().subarray(UJ+XJ,UJ+FJ);XJ+=rc.encodeInto(JJ,cJ).written,UJ=ZJ(UJ,FJ,XJ,1)>>>0}return Ec=XJ,UJ}function nc(JJ){const cJ=ec(JJ);return function(JJ){JJ<1028||(Xc[JJ]=Ac,Ac=JJ)}(JJ),cJ}let Gc=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Gc.decode();const fc=2146435072;let xc=0;const rc=new TextEncoder;"encodeInto"in rc||(rc.encodeInto=function(JJ,cJ){const ZJ=rc.encode(JJ);return cJ.set(ZJ),{read:JJ.length,written:ZJ.length}});let vc,mc,Qc,Ec=0;function Vc(JJ,cJ){return mc=JJ,Qc=JJ.exports,vc=cJ,BJ=null,oJ=null,Jc=null,cc=null,Fc=null,Qc.mSYH(),Qc}function Kc(JJ){if(void 0!==Qc)return Qc;void 0!==JJ&&(Object.getPrototypeOf(JJ)===Object.prototype?({module:JJ}=JJ):console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const cJ=PJ();JJ instanceof WebAssembly.Module||(JJ=new WebAssembly.Module(JJ));return Vc(new WebAssembly.Instance(JJ,cJ),JJ)}async function yc(JJ){if(void 0!==Qc)return Qc;void 0!==JJ&&(Object.getPrototypeOf(JJ)===Object.prototype?({module_or_path:JJ}=JJ):console.warn("using deprecated parameters for the initialization function; pass a single object instead"));const cJ=PJ();("string"===typeof JJ||"function"===typeof Request&&JJ instanceof Request||"function"===typeof URL&&JJ instanceof URL)&&(JJ=fetch(JJ));const{instance:ZJ,module:FJ}=await async function(JJ,cJ){if("function"===typeof Response&&JJ instanceof Response){if(!JJ.ok)throw new Error(`failed to fetch Wasm: ${JJ.status} ${JJ.statusText} fetching \'${JJ.url}\'`);if("function"===typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(JJ,cJ)}catch(ZJ){if(!function(JJ){switch(JJ){case"basic":case"cors":case"default":return!0}return!1}(JJ.type)||"application/wasm"===JJ.headers.get("Content-Type"))throw ZJ;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n",ZJ)}const FJ=await JJ.arrayBuffer();return await WebAssembly.instantiate(FJ,cJ)}{const ZJ=await WebAssembly.instantiate(JJ,cJ);return ZJ instanceof WebAssembly.Instance?{instance:ZJ,module:JJ}:ZJ}}(await JJ,cJ);return Vc(ZJ,FJ)}const Sc=Reflect.apply,Ic=Object.getOwnPropertyDescriptor,Mc=Object.getPrototypeOf,bc=Promise,wc=Object.getPrototypeOf((async()=>{})()).then;function Wc(JJ){return new bc(JJ)}function gc(JJ,cJ,ZJ){let FJ;try{Sc(wc,JJ,[cJ,ZJ]),FJ=!0}catch{FJ=!1}FJ||JJ.then(cJ,ZJ)}function Hc(JJ,cJ){const ZJ=Ic(JJ,cJ);return ZJ?.get?Sc(ZJ.get,JJ,[]):ZJ?.value}const Pc="undefined"===typeof WebAssembly?void 0:WebAssembly.Module.prototype,kc="undefined"===typeof WebAssembly?void 0:WebAssembly.Instance.prototype,pc=[["to",Object.prototype,"then",!0],["ta",ArrayBuffer.prototype,"then",!0],["tm",Pc,"then",!0],["ti",kc,"then",!0],["pt",Promise.prototype,"then",!1],["pk",Promise.prototype,"constructor",!1],["pg",globalThis,"Promise",!1],["pr",Promise,"race",!1],["pa",Promise,"all",!1]],dc=pc.map((JJ=>{let[,cJ,ZJ,FJ]=JJ;if(void 0!==cJ)return FJ?Mc(cJ):Hc(cJ,ZJ)})),zc=pc.map((JJ=>{let[cJ]=JJ;return`wh:${cJ}`}));function Nc(){for(let JJ=0;JJ<pc.length;JJ++){const[cJ,ZJ,FJ,UJ]=pc[JJ];let eJ;try{eJ=void 0===ZJ||(UJ?void 0===Ic(ZJ,FJ)&&Mc(ZJ)===dc[JJ]:Hc(ZJ,FJ)===dc[JJ])}catch{eJ=!1}if(!eJ)return`wh:${cJ}`}return null}let Oc=null;class Tc extends Error{retryable;constructor(JJ,cJ,ZJ){super(JJ,ZJ),this.retryable=cJ}}class Cc extends Tc{status;constructor(JJ,cJ){super(JJ,cJ>=500),this.status=cJ}}class uc extends Tc{}class ic extends Error{}function Rc(JJ){return JJ instanceof ic?"integrity":JJ instanceof uc?"timeout":JJ instanceof Tc?"fetch":"compile"}const Lc=15e3,ac=[1e3,3e3],Bc=globalThis.crypto?.subtle,tc=Bc?.digest,oc=!0===globalThis.isSecureContext,lc=Reflect.apply,JZ=Object.defineProperty,cZ="undefined"===typeof Response?void 0:Response.prototype.arrayBuffer,ZZ=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,FZ="undefined"===typeof Response?void 0:Response.prototype.clone,UZ="undefined"===typeof Response?void 0:Object.getOwnPropertyDescriptor(Response.prototype,"body")?.get,eZ="undefined"===typeof Response?void 0:Object.getOwnPropertyDescriptor(Response.prototype,"type")?.get,XZ="undefined"===typeof ReadableStream?void 0:ReadableStream.prototype.getReader,AZ="undefined"===typeof ReadableStreamDefaultReader?void 0:ReadableStreamDefaultReader.prototype.read,qZ=Uint8Array.prototype.set,jZ=Uint8Array,YZ="undefined"===typeof fetch?void 0:fetch,hZ="undefined"===typeof WebAssembly?void 0:WebAssembly,DZ=hZ?.compile,sZ=hZ?.compileStreaming,nZ=Array.from({length:256},((JJ,cJ)=>cJ.toString(16).padStart(2,"0"))),GZ=new Set;function fZ(JJ){return GZ.has(JJ.href)}async function xZ(JJ,cJ,ZJ){if(Oc??=Nc(),!Bc&&!oc)return;let FJ="";try{const JJ=await lc(tc,Bc,["SHA-256",cJ]),ZJ=lc(ZZ,JJ,[]),UJ=new jZ(JJ);for(let cJ=0;cJ<ZJ;cJ++)FJ+=nZ[UJ[cJ]]}catch{}if(FJ!==ZJ.sha256)throw FJ&&ZJ.onMismatch(),new ic(FJ?`${JJ} is not the module this build ships`:`${JJ} could not be hashed`)}function rZ(JJ,cJ){let{hideThen:ZJ=!1,priority:FJ}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const UJ={useLoadedFetch:!1};return QZ((()=>EZ(JJ.href,((eJ,XJ,AJ)=>async function(JJ,cJ,ZJ,FJ,UJ,eJ,XJ,AJ){let qJ,jJ,YJ,hJ;try{const ZJ=void 0===AJ?{signal:cJ}:{signal:cJ,priority:AJ};qJ=await(eJ.useLoadedFetch&&YZ?lc(YZ,globalThis,[JJ,ZJ]):fetch(JJ,ZJ))}catch(QJ){throw IZ(`Fetching ${JJ} failed`,QJ,cJ)}try{jJ=qJ.ok,YJ=qJ.status,hJ=qJ.headers.get("Content-Type")}catch(QJ){throw eJ.useLoadedFetch=!0,IZ(`Reading ${JJ}\'s response failed`,QJ,cJ)}if(!jJ)throw new Cc(`Fetching ${JJ} failed: HTTP ${YJ}`,YJ);ZJ();const DJ=SZ(qJ),sJ=null!==DJ,nJ=sJ&&void 0!==UJ&&function(JJ){return void 0!==eZ&&"default"===lc(eZ,JJ,[])}(qJ),GJ="application/wasm"===hJ?.trim().toLowerCase(),fJ=sJ&&!nJ&&GJ,xJ=fJ&&(!XJ||function(JJ){try{return vZ(JJ),!0}catch{return!1}}(qJ)),rJ=DJ??function(JJ){try{const cJ=JJ.clone();return lc(UZ,cJ,[]),cJ}catch{return null}}(qJ),vJ=xJ&&void 0!==UJ?KZ(VZ(SZ(qJ),!0)):null;rJ?function(JJ,cJ,ZJ){const FJ=UZ?lc(UZ,JJ,[]):JJ.body;if(!FJ)return void ZJ();const UJ=XZ?lc(XZ,FJ,[]):FJ.getReader(),eJ=()=>{gc(AZ?lc(AZ,UJ,[]):UJ.read(),(JJ=>{JJ.done?ZJ():(cJ(),eJ())}),ZJ)};eJ()}(rJ,ZJ,FJ):FJ();if(!xJ){const ZJ=nJ&&GJ;let FJ;ZJ?console.warn(`${JJ} came in a constructed Response, not a fetched one, so it compiles without streaming`):fJ?console.warn(`${JJ} came in a Response that takes no own properties, so it compiles without streaming`):sJ&&console.warn(`${JJ} was served as ${hJ}, not application/wasm, so it compiles without streaming`);try{FJ=function(JJ){const cJ=new jZ(lc(ZZ,JJ,[]));return lc(qZ,cJ,[new jZ(JJ)]),cJ}(await VZ(qJ,sJ))}catch(QJ){throw sJ||(eJ.useLoadedFetch=!0),IZ(`Downloading ${JJ} failed`,QJ,cJ)}const XJ=await function(JJ){return lc(DZ,hZ,[JJ])}(FJ);return void 0!==UJ&&await xZ(JJ,FJ,UJ),ZJ&&GZ.add(JJ),XJ}let mJ;try{mJ=await yZ(qJ)}catch(QJ){if(cJ.aborted||QJ instanceof TypeError)throw IZ(`Downloading ${JJ} failed`,QJ,cJ);throw QJ}if(vJ&&void 0!==UJ){let ZJ;try{ZJ=new jZ(await vJ)}catch(QJ){throw IZ(`Downloading ${JJ} failed: its copy for checking broke off`,QJ,cJ)}await xZ(JJ,ZJ,UJ)}return mJ}(JJ.href,eJ,XJ,AJ,cJ,UJ,ZJ,FJ)))))}function vZ(JJ){return JZ(JJ,"then",{__proto__:null,value:void 0}),JJ}function mZ(JJ){let{spare:cJ=0,priority:ZJ="auto"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const FJ="string"===typeof JJ?JJ:JJ.href;return QZ((()=>EZ(FJ,((JJ,UJ,eJ)=>async function(JJ,cJ,ZJ,FJ,UJ,eJ){let XJ;try{XJ=await fetch(JJ,{signal:cJ,priority:eJ})}catch(jJ){throw IZ(`Fetching ${JJ} failed`,jJ,cJ)}if(!XJ.ok)throw new Cc(`Fetching ${JJ} failed: HTTP ${XJ.status}`,XJ.status);if(ZJ(),null===XJ.body){let ZJ;FJ();try{ZJ=await XJ.arrayBuffer()}catch(jJ){throw IZ(`Downloading ${JJ} failed`,jJ,cJ)}const eJ=new Uint8Array(UJ+ZJ.byteLength);return eJ.set(new Uint8Array(ZJ),UJ),eJ}const AJ=XJ.body.getReader(),qJ=[];for(;;){let eJ;try{eJ=await AJ.read()}catch(jJ){throw IZ(`Downloading ${JJ} failed`,jJ,cJ)}if(eJ.done)return FJ(),MZ(qJ,UJ);qJ.push(eJ.value),ZJ()}}(FJ,JJ,UJ,eJ,cJ,ZJ)))))}async function QZ(JJ){for(let ZJ=0;;ZJ++)try{return await JJ()}catch(cJ){const JJ=ac[ZJ];if(!(cJ instanceof Tc)||!cJ.retryable||void 0===JJ)throw cJ;console.warn(`${cJ.message}, retrying in ${JJ/1e3} s`),await Wc((cJ=>{setTimeout(cJ,JJ)}))}}async function EZ(JJ,cJ){const ZJ=new AbortController;let FJ,UJ=()=>{};const eJ=Wc(((JJ,cJ)=>{UJ=cJ})),XJ=()=>{clearTimeout(FJ),FJ=setTimeout((()=>{UJ(new uc(`Downloading ${JJ} stalled: nothing arrived for ${Lc/1e3} s`,!0)),ZJ.abort()}),Lc)},AJ=()=>{clearTimeout(FJ)};XJ();try{return await(qJ=[cJ(ZJ.signal,XJ,AJ),eJ],Wc(((JJ,cJ)=>{for(let ZJ=0;ZJ<qJ.length;ZJ++)gc(qJ[ZJ],JJ,cJ)})))}finally{clearTimeout(FJ)}var qJ}function VZ(JJ,cJ){return cJ&&cZ?lc(cZ,JJ,[]):JJ.arrayBuffer()}function KZ(JJ){return gc(JJ,(()=>{}),(()=>{})),JJ}function yZ(JJ){return lc(sZ,hZ,[JJ])}function SZ(JJ){if(!FZ)return JJ.clone();try{return lc(FZ,JJ,[])}catch{return null}}function IZ(JJ,cJ,ZJ){return ZJ.aborted?cJ:new Tc(`${JJ}: ${cJ instanceof Error?cJ.message:String(cJ)}`,!0,{cause:cJ})}function MZ(JJ){let cJ=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,ZJ=cJ;for(const eJ of JJ)ZJ+=eJ.length;const FJ=new Uint8Array(ZJ);let UJ=cJ;for(const eJ of JJ)FJ.set(eJ,UJ),UJ+=eJ.length;return FJ}let bZ="unloaded",wZ=null,WZ=null,gZ=null,HZ=null;const PZ=new Set,kZ=new Set;let pZ=!1,dZ=null,zZ=null,NZ=null,OZ=!1,TZ=0;function CZ(){return"ready"===bZ}function uZ(){return bZ}function iZ(){return wZ}const RZ={fetch:"fetch_failed",timeout:"fetch_failed",integrity:"fetch_failed",compile:"compile_failed",instantiate:"instantiate_failed",call:"call_failed"};function LZ(){return null===wZ?null:RZ[wZ]}function aZ(){return WZ}function BZ(){return null===wZ?"not failed":`${wZ}: ${(JJ=WZ)instanceof Error?`${JJ.name}: ${JJ.message}`:String(JJ)}`;var JJ}function tZ(){if(!CZ())throw new Error(`Bloxd wasm is not ready (${uZ()}): check isBloxdWasmReady() first`);return dZ}function oZ(){return CZ()?zZ:null}function lZ(){return CZ()?gZ:null}function JF(){return NZ}function cF(){if(!HZ||0===TZ)return 0;const JJ=new Uint32Array(HZ.buffer,TZ,1),cJ=JJ[0]??0;return JJ[0]=0,cJ}function ZF(){if(!HZ)throw new Error("Bloxd wasm has not been instantiated");return HZ}function FF(JJ){"failed"!==bZ&&AF(JJ,"call")}function UF(){return WZ instanceof Tc&&WZ.retryable}function eF(){return"unloaded"===bZ&&(bZ="loading",!0)}function XF(JJ,cJ,ZJ,FJ){zZ=JJ,dZ=cJ,gZ=ZJ,HZ=FJ.memory;const{Fh:UJ}=cJ;TZ="function"===typeof UJ?UJ():0,bZ="ready",function(){if(OZ)return;OZ=!0;const JJ=console.error;console.error=function(){for(var cJ=arguments.length,ZJ=new Array(cJ),FJ=0;FJ<cJ;FJ++)ZJ[FJ]=arguments[FJ];const[UJ]=ZJ;"string"===typeof UJ&&UJ.startsWith("panicked at")&&(NZ=UJ,cF()),JJ.apply(console,ZJ)}}()}function AF(JJ,cJ){bZ="failed",wZ=cJ,WZ=JJ,console.error(`Bloxd wasm failed (${cJ}):`,JJ);const ZJ=[...PZ];PZ.clear();for(const FJ of ZJ)qF(FJ)}function qF(JJ){try{JJ()}catch(cJ){console.error("A Bloxd wasm failure listener threw:",cJ)}}function jF(JJ){return"failed"===bZ?(qF(JJ),()=>{}):(PZ.add(JJ),()=>{PZ.delete(JJ)})}function YF(JJ){return pZ||(tZ(),dZ.Xh(hF),pZ=!0),kZ.add(JJ),()=>{kZ.delete(JJ)}}function hF(){const JJ=ZF().buffer;for(const ZJ of kZ)try{ZJ(JJ)}catch(cJ){console.error("A Bloxd wasm memory growth listener threw:",cJ)}}const DF={bloxd_wasm:()=>"523d3e5949bf2a4753ef5ca2a73400ebb345835b7971369ead2f990b98be43ec",bloxd_wasm_client:()=>"d4cb36df94a07de19e42eeffa0530f0524c7d89d6cd225e6e3040a8fe33cb61f",bloxd_wasm_workers:()=>"b13b723c21ff4be0aa4bb62ce03a9989f6e3a955e9dbcbcab4ce4af24b202aca",bloxd_wasm_models:()=>"f6812c5c938dcbac86f88041ffced930fe9d08400f719159d23aa9e3370f1e40",bloxd_wasm_webgpu:()=>"e406b84c9505f7a02226339b21c94d9a9039f99b240ba6ea17b3503c03394d97",bloxd_wasm_webgl:()=>"31e54300aadfdf39d9adf46e78a03ba62332faca6c028e444167fa4ad879a305",bloxd_wasm_webgl1:()=>"eabb7ee7c8fbfb9be543faab1ff74311865cfd0aa56a6ee1f3f14d03e5ae7d24",bloxd_wasm_replay:()=>"4f3a9b06c75077dd5f30c00cad61978d804090ee39979df7a1cfbfc9252724da",bloxd_wasm_recorder:()=>"27d0a05e493ac60b3abbc822d35e07432c9fd8fda5fab082d13b04b57a84627e",bloxd_wasm_anim:()=>"df3ee160579d661f445b2f411e354890d481e89dda8265b662e7e3f787cf6236",bloxd_wasm_textures:()=>"1fc5f5b691e5b407d47f375467e6fd9d0f10cb030443922e1b8b25cd186e7173",bloxd_wasm_shader_pack:()=>"749cb76383a9de0896958e82b823c3a4f9479f89c71e25be0da5c1167b8eeea1"},sF=Function.prototype.toString,nF=RegExp.prototype.exec,GF=Reflect.apply,fF=Function.prototype.call,xF=Function.prototype.apply,rF=Function.prototype.bind,vF=Object.defineProperty,mF=Uint8Array;let QF,EF;try{QF=globalThis.crypto,EF=void 0===QF||null===QF?void 0:QF.getRandomValues}catch{}const VF="bloxdBindApply";let KF;try{const JJ=fF;vF(JJ,VF,{__proto__:null,value:rF,configurable:!0});try{KF=JJ[VF](xF)}finally{delete JJ[VF]}}catch{}const yF=16,SF=256,IF=0,MF=1,bF=2,wF=3;let WF,gF=IF,HF=GF,PF=0;function kF(JJ,cJ){return JJ===`function ${cJ}() { [native code] }`||JJ===`function ${cJ}() {\\n    [native code]\\n}`}const pF=0,dF=1,zF=2;let NF=pF;function OF(JJ,cJ,ZJ){if(NF===zF&&gF===MF&&!function(){const JJ=WF;return PF>=SF&&(HF(EF,QF,[JJ]),PF=0),JJ[PF++]<256/yF}())return function(JJ,cJ,ZJ){return HF(JJ,cJ,ZJ??0)}(...arguments);if(NF===pF||gF===bF)return GF(JJ,cJ,ZJ);let FJ;NF=pF;try{gF===IF&&(gF=wF,gF=function(){const JJ=GF(sF,GF,[]);if(kF(JJ,"apply"))return bF;if(null===GF(nF,/\\(\\.\\.\\.arguments\\)/,[JJ])&&null===GF(nF,/^function\\s*\\(\\.\\.\\.[\\w$]+\\)/,[JJ]))return bF;if("function"!==typeof KF||"function"!==typeof fF||"function"!==typeof xF||"function"!==typeof rF||"function"!==typeof vF||"function"!==typeof EF||"function"!==typeof mF||!kF(GF(sF,fF,[]),"call")||!kF(GF(sF,xF,[]),"apply")||!kF(GF(sF,rF,[]),"bind")||!kF(GF(sF,vF,[]),"defineProperty")||!kF(GF(sF,EF,[]),"getRandomValues")||!kF(GF(sF,mF,[]),"Uint8Array"))return bF;const cJ=KF,ZJ={},FJ=function(JJ){return this===ZJ&&JJ===ZJ};try{if(!0!==cJ(FJ,ZJ,[ZJ]))return bF;const JJ=new mF(SF);cJ(EF,QF,[JJ]),WF=JJ}catch{return bF}return HF=cJ,MF}()),FJ=GF(JJ,cJ,ZJ)}catch(UJ){throw gF=bF,UJ}return NF=zF,FJ}let TF=GF;function CF(){return(TF===GF?0:3)+NF}function uF(){const JJ=CF();return TF=GF,JJ}function iF(JJ){TF=JJ>=3?OF:GF,NF=JJ%3}const RF=Function.prototype.toString,LF=Object.getOwnPropertyDescriptor,aF=RegExp.prototype.exec,BF=Object.prototype.hasOwnProperty,tF=Set.prototype.has,oF=Reflect.get,lF=Object.getPrototypeOf,JU="undefined"===typeof WebAssembly?void 0:WebAssembly;function cU(JJ,cJ,ZJ){return{code:JJ,holder:cJ,key:ZJ,...arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},native:new RegExp(`^function (get )?${ZJ}\\\\(\\\\) \\\\{\\\\s*\\\\[native code\\\\]\\\\s*\\\\}$`)}}function ZU(){return JU}const FU=JU?.Instance.prototype,UU=JU?.Memory.prototype;function eU(){return UU}let XU,AU;try{const JJ=globalThis.crypto,cJ=JJ?.subtle;XU=JJ?lF(JJ):void 0,AU=cJ?lF(cJ):void 0}catch{}const qU=[cU("in",ZU,"instantiate",{tier:"weighted",onNamespace:!0}),cU("is",ZU,"instantiateStreaming",{tier:"weighted",onNamespace:!0}),cU("co",ZU,"compile",{tier:"weighted",onNamespace:!0}),cU("cs",ZU,"compileStreaming",{tier:"weighted",onNamespace:!0}),cU("mo",ZU,"Module",{isConstructor:!0,tier:"punished",onNamespace:!0}),cU("it",ZU,"Instance",{isConstructor:!0,tier:"punished",onNamespace:!0}),cU("me",ZU,"Memory",{isConstructor:!0,tier:"punished",onNamespace:!0}),cU("ex",(function(){return FU}),"exports",{isGetter:!0,tier:"punished"}),cU("bu",eU,"buffer",{isGetter:!0,tier:"punished"}),cU("gr",eU,"grow",{tier:"punished"}),cU("rc",(function(){return"undefined"===typeof Response?void 0:Response.prototype}),"clone"),cU("cr",(function(){return globalThis}),"crypto",{isGetter:!0,tier:"punished",inSecureContext:!0}),cU("su",(function(){return XU}),"subtle",{isGetter:!0,tier:"punished",inSecureContext:!0}),cU("dg",(function(){return AU}),"digest",{tier:"punished",inSecureContext:!0})];function jU(JJ){let cJ;try{const ZJ=oF(globalThis,JJ);cJ="function"===typeof ZJ?ZJ.prototype:void 0}catch{}return()=>cJ}function YU(JJ,cJ,ZJ){return ZJ.map((ZJ=>cU(JJ,cJ,ZJ)))}const hU=cU("rx",jU("HTMLCanvasElement"),"getContext"),DU=["createShader","shaderSource","compileShader","createProgram","linkProgram","useProgram","drawArrays","drawElements","depthFunc","depthMask","enable","disable","blendFuncSeparate","colorMask"],sU={webgpu:[...YU("gd",jU("GPUDevice"),["createShaderModule","createRenderPipeline","createCommandEncoder"]),...YU("gq",jU("GPUQueue"),["submit","writeBuffer"]),...YU("ge",jU("GPUCommandEncoder"),["beginRenderPass","finish"]),...YU("gp",jU("GPURenderPassEncoder"),["setPipeline","setBindGroup","draw","drawIndexed","drawIndirect","drawIndexedIndirect","executeBundles"]),hU],webgl:[...YU("g2",jU("WebGL2RenderingContext"),[...DU,"drawArraysInstanced","drawElementsInstanced"]),hU],webgl1:[...YU("g1",jU("WebGLRenderingContext"),DU),hU]};let nU=[];function GU(JJ){let{code:cJ,key:ZJ}=JJ;return`wh:${cJ}:${ZJ}`}const fU=new Set(Object.values(sU).flatMap((JJ=>JJ.map(GU)))),xU=GU(hU);function rU(JJ){nU=sU[JJ]}function vU(JJ){const cJ=uF();try{return TF(tF,fU,[JJ])}finally{iF(cJ)}}function mU(JJ){return new Set(qU.filter((cJ=>cJ.tier===JJ)).map((JJ=>`wh:${JJ.code}`)))}const QU=mU("punished"),EU=!1,VU=new Set(zc),KU=mU("weighted");function yU(JJ){const cJ=uF();try{return SU(JJ)}finally{iF(cJ)}}function SU(JJ){return TF(tF,KU,[JJ])}function IU(JJ){const cJ=uF();try{return MU(JJ)}finally{iF(cJ)}}function MU(JJ){return TF(tF,VU,[JJ])}function bU(JJ){return"wb"===JJ||TF(tF,QU,[JJ])}function wU(JJ){const cJ=uF();try{return bU(JJ)||MU(JJ)}finally{iF(cJ)}}function WU(JJ){const cJ=uF();try{return"wb"===JJ||EU&&bU(JJ)}finally{iF(cJ)}}function gU(JJ,cJ){let{isConstructor:ZJ,native:FJ}=cJ;return"function"===typeof JJ&&(!(!ZJ&&TF(BF,JJ,["prototype"]))&&null!==TF(aF,FJ,[TF(RF,JJ,[])]))}function HU(JJ,cJ){return gU(JJ,cU("",(()=>{}),cJ,arguments.length>2&&void 0!==arguments[2]&&arguments[2]?{isConstructor:!0}:{}))}function PU(JJ){const{holder:cJ,key:ZJ,isGetter:FJ,onNamespace:UJ,inSecureContext:eJ}=JJ,XJ=cJ(),AJ=function(JJ,cJ){for(let ZJ=JJ;void 0!==ZJ&&null!==ZJ;ZJ=lF(ZJ)){const JJ=LF(ZJ,cJ);if(JJ)return JJ}}(XJ,ZJ);if(!AJ)return!(eJ&&!0===globalThis.isSecureContext);const qJ=FJ?AJ.get:AJ.value;if(!gU(qJ,JJ))return!1;if(UJ){const cJ=globalThis.WebAssembly;if(cJ!==XJ&&null!==cJ&&("object"===typeof cJ||"function"===typeof cJ)){const FJ=oF(cJ,ZJ);return FJ===qJ||void 0===FJ||gU(FJ,JJ)}}return!0}let kU=null,pU=!1;function dU(JJ){try{return PU(JJ)}catch{return!1}}function zU(){if(void 0===JU)return null;let JJ=function(){try{return globalThis.WebAssembly===JU}catch{return!1}}()?null:"wh:wa";const cJ=cJ=>{null!==cJ&&(null===JJ||NU(cJ)>NU(JJ))&&(JJ=cJ)};for(let ZJ=0;ZJ<qU.length;ZJ++){const JJ=qU[ZJ];void 0===JJ||dU(JJ)||cJ(`wh:${JJ.code}`)}cJ(Oc??Nc());for(let ZJ=0;ZJ<nU.length;ZJ++){const JJ=nU[ZJ];void 0===JJ||dU(JJ)||cJ(GU(JJ))}return JJ}function NU(JJ){return bU(JJ)?5:SU(JJ)?4:MU(JJ)?3:function(JJ){return TF(tF,fU,[JJ])}(JJ)?JJ===xU?0:1:2}function OU(){const JJ=function(){const JJ=CF();return gF===IF||gF===MF?(TF=OF,NF=dF):TF=GF,JJ}();try{if(null===kU||!bU(kU)){const JJ=zU();(null===kU||null!==JJ&&NU(JJ)>NU(kU))&&(kU=JJ)}}finally{iF(JJ)}}function TU(){pU=!0}function CU(){if(pU)return"wb";if((!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&OU(),null!==kU)return kU;if(void 0===JU)return"wn:unsupported";const JJ=iZ();return null===JJ?null:`wn:${JJ}`}function uU(JJ){const cJ=Object.prototype.hasOwnProperty.call(DF,JJ)?DF[JJ]():void 0;if(void 0!==cJ)return{sha256:cJ,onMismatch:TU};throw new ic(`${JJ} has no release digest, so this build refuses it`)}const iU=".zst.bin",RU=Reflect.apply,LU=ArrayBuffer,aU="undefined"===typeof Response?void 0:Response,BU="undefined"===typeof ReadableStream?void 0:ReadableStream,tU=function(){let JJ;void 0!==BU&&new BU({__proto__:null,start(cJ){const{enqueue:ZJ,close:FJ,error:UJ}=Object.getPrototypeOf(cJ);JJ={enqueue:ZJ,close:FJ,error:UJ}}},{__proto__:null});return JJ}(),oU=function(){try{return"undefined"!==typeof WebAssembly&&"function"===typeof WebAssembly.compileStreaming&&void 0!==tU&&HU(aU,"Response",!0)&&HU(BU,"ReadableStream",!0)&&HU(tU.enqueue,"enqueue")&&HU(tU.close,"close")&&HU(tU.error,"error")&&HU(UZ,"body")&&HU(XZ,"getReader")&&HU(AZ,"read")}catch{return!1}}();let lU=!1;function Je(JJ){for(const cJ of"bloxd_wasm_webgpu:4943446,bloxd_wasm_webgl:5219211,bloxd_wasm_webgl1:4722370,bloxd_wasm_workers:196044,bloxd_wasm_models:312534,bloxd_wasm_client:3645615"?.split(",")??[]){const[ZJ,FJ]=cJ.split(":");if(ZJ===JJ){const JJ=Number(FJ);return Number.isInteger(JJ)&&JJ>0?JJ:void 0}}}function ce(JJ){const cJ=Je(JJ.name);if(void 0!==cJ&&oU&&!lU)return{href:`${JJ.url().href}${iU}`,length:cJ}}function Ze(JJ){return ce(JJ)?.href??JJ.url().href}function Fe(JJ,cJ,FJ){const UJ=JJ.url(),eJ=ce(JJ);return void 0!==eJ?async function(JJ,cJ,FJ,UJ){let{href:eJ,length:XJ}=cJ;try{return await EZ(eJ,((JJ,cJ,AJ)=>async function(JJ,cJ,FJ,UJ,eJ,XJ,AJ){const qJ=new LU(cJ);let jJ;Ue??=KZ(ZJ.e(1).then((()=>ZJ(22))));try{jJ=await fetch(JJ,void 0===AJ?{signal:FJ}:{signal:FJ,priority:AJ})}catch(VJ){throw new Error(`Fetching ${JJ} failed: ${Xe(VJ)}`)}const{ok:YJ,status:hJ,body:DJ}=function(JJ,cJ){try{const{ok:JJ,status:ZJ}=cJ;return{ok:JJ,status:ZJ,body:RU(UZ,cJ,[])}}catch{throw new Error(`${JJ} came in a response a page script made`)}}(JJ,jJ);if(!YJ)throw new Error(`Fetching ${JJ} failed: HTTP ${hJ}`);UJ();const{reader:sJ,controller:nJ,compiled:GJ}=function(JJ,cJ){let ZJ;try{let JJ;ZJ=RU(XZ,cJ,[]);const FJ=new BU({__proto__:null,start(cJ){JJ=cJ}},{__proto__:null}),UJ=new aU(FJ,{__proto__:null,headers:{__proto__:null,"Content-Type":"application/wasm"}});return{reader:ZJ,controller:JJ,compiled:KZ(yZ(vZ(UJ)))}}catch(VJ){throw void 0!==ZJ&&ee(ZJ),new Error(`${JJ} could not be streamed into a compile: ${Xe(VJ)}`)}}(JJ,DJ),{enqueue:fJ,close:xJ,error:rJ}=tU,vJ=JJ=>{try{RU(rJ,nJ,[JJ])}catch{}finally{ee(sJ)}};FJ.addEventListener("abort",(()=>{vJ(new Error(`${JJ} stalled`))}),{once:!0});let mJ=!1;gc(GJ,(()=>{}),(()=>{mJ=!0,ee(sJ)}));let QJ=0;try{let ZJ;try{ZJ=await Ue}catch(VJ){throw lU=!0,new Error(`The zstd decoder did not load: ${Xe(VJ)}`)}const{ZstdFrameDecoder:FJ}=ZJ,XJ=new FJ(cJ);for(;!XJ.done&&!mJ;){let cJ;try{cJ=await RU(AZ,sJ,[])}catch(VJ){throw new Error(`Downloading ${JJ} failed: ${Xe(VJ)}`)}if(cJ.done||mJ)break;UJ();try{XJ.push(cJ.value)}catch(VJ){throw new Error(`${JJ} did not decode: ${Xe(VJ)}`)}const{output:ZJ,decoded:FJ}=XJ;if(null!==ZJ&&FJ!==QJ){RU(qZ,new jZ(qJ),[ZJ.subarray(QJ,FJ),QJ]);try{RU(fJ,nJ,[new jZ(qJ,QJ,FJ-QJ)])}catch{mJ=!0}QJ=FJ}}if(eJ(),mJ)throw await GJ,new Error(`${JJ}\'s compile stopped reading before its end`);if(!XJ.done)throw new Error(`${JJ} ended before its module did`);ee(sJ);try{RU(xJ,nJ,[])}catch{}}catch(VJ){throw vJ(VJ),VJ}const EJ=await GJ;void 0!==XJ&&await xZ(JJ,new jZ(qJ),{sha256:XJ.sha256,onMismatch:()=>{}});return EJ}(eJ,XJ,JJ,cJ,AJ,FJ,UJ)))}catch(qJ){console.warn(`${Xe(qJ)}: loading ${JJ.href} instead`)}const AJ=await rZ(JJ,FJ,{hideThen:!0,priority:UJ});return AJ}(UJ,eJ,cJ,FJ):rZ(UJ,cJ,{hideThen:void 0!==Je(JJ.name),priority:FJ})}let Ue=null;function ee(JJ){try{KZ(JJ.cancel())}catch{}}function Xe(JJ){return JJ instanceof Error?JJ.message:String(JJ)}let Ae=null,qe=!1;function je(JJ,cJ,ZJ){return null===Ae?Ae=Ye(JJ,cJ,ZJ?.priority):JJ!==Ae.build?console.warn(`Bloxd wasm: ${JJ.name} was asked for after ${Ae.build.name} started loading, which this thread keeps`):cJ.name!==Ae.workers.name&&console.warn(`Bloxd wasm: ${cJ.name} was asked for workers after ${Ae.workers.name}, which this thread keeps`),ZJ?.reloadFailedDownload&&!qe&&UF()&&(bZ="unloaded",wZ=null,WZ=null,1)&&(qe=!0,Ae=Ye(Ae.build,Ae.workers)),Ae.loaded}function Ye(JJ,cJ,ZJ){const FJ=async function(JJ,cJ){if(eF()){let FJ;try{FJ=await JJ()}catch(ZJ){return AF(ZJ,Rc(ZJ)),!1}try{XF(cJ,cJ.Zn,FJ.workerModule,await cJ.init({module_or_path:FJ.module}))}catch(ZJ){AF(ZJ,"instantiate")}}return CZ()}((async()=>{OU();const FJ=De(JJ,ZJ),UJ=cJ.name===JJ.name?FJ:De(cJ,ZJ);var eJ;await(eJ=[FJ,UJ],Wc(((JJ,cJ)=>{let ZJ=eJ.length;if(0===ZJ)return void JJ();const FJ=()=>{ZJ--,0===ZJ&&JJ()};for(let UJ=0;UJ<eJ.length;UJ++)gc(eJ[UJ],FJ,cJ)})));const XJ=await FJ,AJ=await UJ;return OU(),{module:XJ,workerModule:AJ}}),JJ);return{build:JJ,workers:cJ,loaded:FJ}}async function he(JJ){return De(JJ)}function De(JJ,cJ){return Fe(JJ,uU(JJ.name),cJ)}const se={name:"bloxd_wasm",url:()=>new ZJ.U(ZJ(11)),init:yc,Zn:FJ};function ne(){return je(arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,arguments.length>1&&void 0!==arguments[1]?arguments[1]:se,arguments.length>2?arguments[2]:void 0)}function Ge(JJ){return function(JJ,cJ){let ZJ=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(eF()){let UJ;try{UJ=JJ()}catch(FJ){return AF(FJ,Rc(FJ)),!1}try{XF(ZJ,cJ,UJ,cJ.initSync({module:UJ}))}catch(FJ){AF(FJ,"instantiate")}}return CZ()}((()=>JJ),FJ,se)}const fe=["none","idle","now"];function xe(){const JJ=()=>tZ();return{memoryBytes:()=>ZF().buffer.byteLength,reserveUpFront:cJ=>JJ().LY(cJ),reserveAhead:cJ=>JJ().RY(cJ),setCeiling:cJ=>{JJ().aY(cJ)},lowWater:()=>fe[JJ().iY()]??"none",stats:()=>function(JJ){const cJ=new Uint32Array(ZF().buffer,JJ,17),ZJ=JJ=>cJ[JJ]??0,FJ=JJ=>({upFront:ZJ(JJ),ahead:ZJ(JJ+1),onDemandInFrame:ZJ(JJ+2),onDemand:ZJ(JJ+3)});return{memoryBytes:ZJ(0),initialBytes:ZJ(1),liveBytes:ZJ(2),peakLiveBytes:ZJ(3),headroomBytes:ZJ(4),unusedBytes:ZJ(5),ceilingBytes:ZJ(6),reservesRefused:ZJ(7),grows:FJ(8),grownBytes:FJ(12),allocationsRefused:ZJ(16)}}(JJ().BY()),takeBallast:()=>JJ().tY(),takePressure:()=>JJ().oY()}}function re(JJ,cJ){return new Error(`${JJ}: ${cJ instanceof Error?`${cJ.name}: ${cJ.message}`:String(cJ)}`,{cause:cJ})}function ve(){return new URL(new ZJ.U(ZJ(13)).href,globalThis.location?.href).href}let me=null;function Qe(){return me??=(async()=>rZ(new URL(ve()),uU("bloxd_wasm_textures")))().catch((JJ=>{throw re(Rc(JJ),JJ)})),me}function Ee(JJ,cJ,ZJ){return new JJ(ZF().buffer,cJ,ZJ)}class Ve{type;ptr;length;currentView;constructor(JJ,cJ,ZJ){this.type=JJ,this.ptr=cJ,this.length=ZJ,this.currentView=Ee(JJ,cJ,ZJ)}view(){return this.currentView.length!==this.length&&(this.currentView=Ee(this.type,this.ptr,this.length)),this.currentView}}const Ke=15;function ye(JJ,cJ,ZJ){return!!(JJ&&null!==ZJ&&cJ>=ZJ)}const Se=27;let Ie=0;class Me{constructor(JJ){this.runs=JJ,this.layers=null,this.serial=Ie,Ie=(Ie+1)%4294967295}from(JJ,cJ){return 0===JJ?[0,0]:(this.layers??=function(JJ,cJ){const ZJ=cJ*cJ,FJ=new Uint32Array(2*cJ);let UJ=1,eJ=0,XJ=0;for(;XJ<JJ.length&&UJ<cJ;){const AJ=XJ;let qJ=0,jJ=0;for(;XJ<JJ.length&&JJ[XJ]>=128;)qJ+=(127&JJ[XJ++])<<jJ,jJ+=7;for(qJ+=JJ[XJ++]<<jJ;JJ[XJ]>=128;)XJ++;if(XJ++,!(qJ<=0))for(eJ+=qJ;UJ<cJ&&UJ*ZJ<eJ;)FJ[2*UJ]=AJ,FJ[2*UJ+1]=eJ-qJ,UJ++}for(;UJ<cJ;UJ++)FJ[2*UJ]=JJ.length,FJ[2*UJ+1]=eJ;return FJ}(this.runs,cJ),[this.layers[2*JJ],this.layers[2*JJ+1]])}to(JJ,cJ){const{runs:ZJ}=this;if(JJ>=cJ)return ZJ.length;const[FJ,UJ]=this.from(JJ,cJ);if(UJ===JJ*cJ*cJ)return FJ;let eJ=FJ;for(let XJ=0;XJ<2&&eJ<ZJ.length;eJ++)ZJ[eJ]<128&&XJ++;return eJ}}function be(JJ,cJ,ZJ,FJ){const UJ=FJ*FJ,eJ=FJ-1;let XJ;XJ=cJ?new Uint16Array(UJ):new Uint8Array(UJ);const AJ=XJ,qJ=JJ;if(0===ZJ)AJ.set(qJ.subarray(0,UJ));else if(1===ZJ)AJ.set(qJ.subarray(eJ*UJ,FJ*UJ));else if(2===ZJ||3===ZJ){const JJ=2===ZJ?0:eJ;for(let cJ=0;cJ<FJ;cJ++){const ZJ=cJ*UJ+JJ*FJ;AJ.set(qJ.subarray(ZJ,ZJ+FJ),cJ*FJ)}}else{const cJ=4===ZJ?0:eJ;for(let ZJ=0;ZJ<FJ;ZJ++){const eJ=ZJ*UJ+cJ,AJ=ZJ*FJ;for(let cJ=0;cJ<FJ;cJ++)XJ[AJ+cJ]=JJ[eJ+cJ*FJ]}}return XJ}let we=function(JJ){return JJ[JJ.Corner=0]="Corner",JJ[JJ.EdgeX=1]="EdgeX",JJ[JJ.EdgeY=2]="EdgeY",JJ[JJ.EdgeZ=3]="EdgeZ",JJ[JJ.FaceX=4]="FaceX",JJ[JJ.FaceY=5]="FaceY",JJ[JJ.FaceZ=6]="FaceZ",JJ[JJ.Center=7]="Center",JJ}({});we.Corner,we.EdgeZ,we.Corner,we.EdgeY,we.FaceX,we.EdgeY,we.Corner,we.EdgeZ,we.Corner,we.EdgeX,we.FaceY,we.EdgeX,we.FaceZ,we.Center,we.FaceZ,we.EdgeX,we.FaceY,we.EdgeX,we.Corner,we.EdgeZ,we.Corner,we.EdgeY,we.FaceX,we.EdgeY,we.Corner,we.EdgeZ,we.Corner;const We=[22,4,16,10,14,12],ge=Array.from({length:27},((JJ,cJ)=>[Math.floor(cJ/9)-1,Math.floor(cJ/3)%3-1,cJ%3-1]));function He(JJ){return ge[JJ]}function Pe(JJ,cJ,ZJ){return JJ<0?[ZJ-cJ,ZJ]:JJ>0?[0,cJ]:[0,ZJ]}const ke=/^alloc_failed (\\d+) bytes$/;class pe{constructor(JJ){this.chunkSizeCubed=JJ,this.uint8=[],this.uint16=[]}put(JJ){const cJ=this.chunkSizeCubed,ZJ=2*this.chunkSizeCubed;for(const FJ of JJ)FJ.byteLength===cJ&&this.uint8.length<pe.MAX_SIZE?this.uint8.push(new Uint8Array(FJ)):FJ.byteLength===ZJ&&this.uint16.length<pe.MAX_SIZE&&this.uint16.push(new Uint16Array(FJ))}drain(){const JJ=[...this.uint8,...this.uint16].map((JJ=>JJ.buffer));return this.uint8.length=0,this.uint16.length=0,JJ}takeUint8(){var JJ;return null!==(JJ=this.uint8.pop())&&void 0!==JJ?JJ:new Uint8Array(this.chunkSizeCubed)}takeUint16(){var JJ;return null!==(JJ=this.uint16.pop())&&void 0!==JJ?JJ:new Uint16Array(this.chunkSizeCubed)}takeZeroedUint8(){const JJ=this.takeUint8();return JJ.fill(0),JJ}}pe.MAX_SIZE=16;function de(JJ,cJ,ZJ,FJ){return{emission:JJ,skyEmission:Float64Array.from({length:cJ.length},((JJ,ZJ)=>{var FJ;return null!==(FJ=cJ[ZJ])&&void 0!==FJ?FJ:0})),filters:Int32Array.from({length:ZJ.length},((JJ,cJ)=>{var FJ;const UJ=null!==(FJ=ZJ[cJ])&&void 0!==FJ?FJ:1;return UJ<0?-1:Math.min(UJ,15)})),opacity:Uint8Array.from({length:FJ.length},((JJ,cJ)=>FJ[cJ]?1:0))}}new Map;function ze(JJ){return JJ instanceof Error&&Object.getPrototypeOf(JJ)===Error.prototype}class Ne extends RangeError{}class Oe extends Ne{constructor(JJ){super(`alloc_failed ${JJ} bytes`),this.bytes=JJ}}function Te(JJ){const cJ=ke.exec(JJ);return cJ?new Oe(Number(cJ[1])):new Ne(JJ)}function Ce(JJ){return ze(JJ)&&ke.test(JJ.message)?Te(JJ.message):JJ}class ue extends Error{constructor(JJ){super(JJ instanceof Error?JJ.message:String(JJ)),this.trap=JJ}}const ie=["full","relit","relit-sky","unchanged"];function Re(JJ){return Number.isInteger(JJ)&&JJ>=-2147483648&&JJ<=2147483647}class Le extends Ne{constructor(JJ,cJ){super(cJ),this.reason=JJ}}class ae{constructor(JJ,cJ,ZJ){this.engine=cJ,this.lastLightPass="full",this.view=void 0,this.chunkSizeCubed=void 0,this.seedSize=void 0,this.lightU8=void 0,this.lightU16=void 0,this.seedRead=void 0,this.pool=void 0,this.view=JJ.view,this.chunkSizeCubed=ZJ*ZJ*ZJ;const FJ=ZJ+30;this.seedSize=FJ*FJ,this.pool=new pe(this.chunkSizeCubed),this.lightU8=new JJ.BufferView(Uint8Array,cJ.ds(),this.chunkSizeCubed),this.lightU16=new JJ.BufferView(Uint16Array,cJ.Ps(),this.chunkSizeCubed),this.seedRead=new JJ.BufferView(Uint8Array,cJ.Rs(),this.seedSize)}returnBuffers(JJ){this.pool.put(JJ)}takeBuffers(){return this.pool.drain()}getZeroedFullChunkLightData(){return this.pool.takeZeroedUint8()}checkComputeInput(JJ,cJ,ZJ){if(JJ.length<this.seedSize)throw new Le("seed_size",`WasmLightEngine sky seed grid holds ${JJ.length} columns, not ${this.seedSize}`);if(!Re(ZJ)||null!==cJ&&!Re(cJ))throw new Le("chunk_j",`WasmLightEngine chunkJ ${ZJ} or highestChunkJ ${cJ} is not a 32-bit integer`)}computeWritten(JJ,cJ,ZJ,FJ,UJ){this.checkComputeInput(cJ,ZJ,FJ);const{engine:eJ,view:XJ}=this;let AJ;XJ(Uint8Array,eJ.Ls(),this.seedSize).set(cJ.subarray(0,this.seedSize));try{AJ=eJ.compute(JJ,ZJ,FJ,UJ)}catch(jJ){throw Ce(jJ)}if(this.lastLightPass=ie[AJ>>1],1&AJ){const JJ=this.pool.takeUint16();return JJ.set(this.lightU16.view()),{hn:JJ,isUint16:!0}}const qJ=this.pool.takeUint8();return qJ.set(this.lightU8.view()),{hn:qJ,isUint16:!1}}skySeedColumnsRead(JJ){return!!this.engine.Cs()&&(JJ.set(this.seedRead.view()),!0)}forgetKeptStates(JJ){this.engine.Ks(JJ)}free(){this.engine.free()}}const Be=/^(0|[1-9]\\d*)$/;function te(JJ){return"number"===typeof JJ&&Number.isInteger(JJ)&&JJ>=0&&JJ<=2147483647}new WeakMap,new WeakMap;const oe=new Uint32Array(0);const le=new ArrayBuffer(0);const JX=[0,1,2,0,2,3];let cX=new Uint32Array(0);function ZX(JJ){if(cX.length<6*JJ){const cJ=Math.max(JJ,2*cX.length/6);cX=function(JJ,cJ){for(let ZJ=0;ZJ<cJ;ZJ++){const cJ=4*ZJ,FJ=6*ZJ;for(let ZJ=0;ZJ<6;ZJ++)JJ[FJ+ZJ]=cJ+JX[ZJ]}return JJ}(new Uint32Array(6*cJ),cJ)}return cX.slice(0,6*JJ)}function FX(JJ,cJ,ZJ,FJ){const UJ=JJ(Uint16Array,cJ,4*ZJ);return FJ?UJ.slice():new Float32Array(UJ)}const UX={computed:1,provided:2,zeroedFull:3},eX=4294967295,XX=[1,2,4,3,0,UX.computed,UX.provided,UX.zeroedFull,4,8,16,32,64,128,256,8,0,1,2,3,4,1,2,0,1,2,3,2,0,1,16,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,4,8,16,15,8,eX,1,2],AX=[],qX=[];function jX(JJ){return Number.isInteger(JJ)&&JJ>=0&&JJ<2**32}function YX(JJ){try{return JJ()}catch(cJ){throw ze(cJ)?Te(cJ.message):new ue(cJ)}}class hX extends ae{static create(JJ,cJ){!function(JJ){const cJ="function"===typeof JJ.lY?YX((()=>JJ.lY())):[];if(cJ.length!==XX.length||!XX.every(((JJ,ZJ)=>cJ[ZJ]===JJ)))throw new Ne(`@bloxd/wasm\'s mesher constants [${Array.from(cJ).join()}] are not wasmChunkMesher.ts\'s [${XX.join()}]`)}(JJ.Zn);const ZJ=function(JJ){var cJ,ZJ,FJ;const UJ=de(JJ.lightEmissionLookup,JJ.skyLightEmissionLookup,JJ.lightFilterLookup,JJ.opacityLookup),eJ=Int32Array.from({length:JJ.blockFaceToMatId.length},((cJ,ZJ)=>{const FJ=JJ.blockFaceToMatId[ZJ];if(void 0===FJ)return-1;if(!te(FJ))throw new Ne(`blockFaceToMatId[${ZJ}] is ${String(FJ)}`);return FJ}));let XJ=0;const AJ=[];for(const[nJ,GJ]of Object.entries(JJ.matIdToTerrainId)){const JJ=Number(nJ);if(Be.test(nJ)&&!(JJ>32768)){if(void 0!==GJ&&!te(GJ))throw new Ne(`matIdToTerrainId[${nJ}] is ${String(GJ)}`);AJ.push([JJ,null!==GJ&&void 0!==GJ?GJ:-1]),XJ=Math.max(XJ,JJ+1)}}const qJ=new Int32Array(XJ).fill(-1);for(const[nJ,GJ]of AJ)qJ[nJ]=GJ;const jJ=JJ.matColorLookup,YJ=new Float64Array(3*jJ.length),hJ=new Uint8Array(jJ.length);for(let nJ=0;nJ<jJ.length;nJ++){const JJ=jJ[nJ];if(JJ){if(!Array.isArray(JJ))throw new Ne(`matColorLookup[${nJ}] is not an array`);hJ[nJ]=1;for(let cJ=0;cJ<3;cJ++)YJ[3*nJ+cJ]=Number(JJ[cJ])}}const DJ=Int32Array.from(JJ.faceGroupTerrainIds,(JJ=>{if(!te(JJ))throw new Ne(`faceGroupTerrainIds holds ${JJ}`);return JJ})),sJ=Uint8Array.from(JJ.faceGroupLayout,(JJ=>{if(!Number.isInteger(JJ)||JJ<0||JJ>5)throw new Ne(`faceGroupLayout holds ${JJ}`);return JJ}));return{yn:UJ.emission,skyEmission:UJ.skyEmission,Sn:UJ.filters,opacity:UJ.opacity,solid:Uint8Array.from({length:JJ.solidLookupArr.length},((cJ,ZJ)=>JJ.solidLookupArr[ZJ]?1:0)),blockFaceMat:eJ,matTerrain:qJ,matAtlasIndex:Float64Array.from({length:JJ.atlasIndexLookup.length},((cJ,ZJ)=>Number(JJ.atlasIndexLookup[ZJ]))),matColour:YJ,matColourSet:hJ,materialBlockFlags:JJ.materialBlockFlags,faceGroupTerrainIds:DJ,faceGroupLayout:sJ,visOccluders:null!==(cJ=JJ.visOccluders)&&void 0!==cJ?cJ:null,Mn:Float64Array.from(JJ.Mn,Number),bn:Number(JJ.bn),flags:(JJ.doAO?1:0)|(JJ.skipRevAo?2:0)|(JJ.compactParts?4:0),Kn:JJ.Kn,keptLightStates:null!==(ZJ=JJ.keptLightStates)&&void 0!==ZJ?ZJ:4,decodedChunks:null!==(FJ=JJ.decodedChunks)&&void 0!==FJ?FJ:64}}(cJ),FJ=YX((()=>new JJ.Zn.pY(ZJ.yn,ZJ.skyEmission,ZJ.Sn,ZJ.opacity,ZJ.solid,ZJ.blockFaceMat,ZJ.matTerrain,ZJ.matAtlasIndex,ZJ.matColour,ZJ.matColourSet,ZJ.materialBlockFlags,ZJ.faceGroupTerrainIds,ZJ.faceGroupLayout,ZJ.visOccluders,ZJ.Mn,ZJ.bn,ZJ.flags,ZJ.Kn,ZJ.keptLightStates,ZJ.decodedChunks)));try{return new hX(JJ,function(JJ){return new Proxy(JJ,{get(JJ,cJ){const ZJ=Reflect.get(JJ,cJ);return"function"!==typeof ZJ?ZJ:function(){for(var cJ=arguments.length,FJ=new Array(cJ),UJ=0;UJ<cJ;UJ++)FJ[UJ]=arguments[UJ];return YX((()=>ZJ.apply(JJ,FJ)))}}})}(FJ),cJ.Kn,cJ.compactParts)}catch(UJ){throw UJ instanceof ue?qX.push(FJ):FJ.free(),UJ}}constructor(JJ,cJ,ZJ,FJ){super(JJ,cJ,ZJ),this.mesher=cJ,this.compactParts=FJ,this.lastComputeKind="wasm",this.lastComputeMs=0,this.Kn=void 0,this.hoodStarts=new Uint32Array(Se),this.hoodSerials=new Uint32Array(Se),this.hoodEnds=new Uint32Array(Se),this.hoodFrom=new Uint32Array(Se),this.Kn=ZJ}loadHood(JJ,cJ){const{mesher:ZJ,view:FJ,Kn:UJ,hoodSerials:eJ,hoodStarts:XJ,hoodEnds:AJ,hoodFrom:qJ}=this;for(let GJ=0;GJ<Se;GJ++){var jJ,YJ;eJ[GJ]=null!==(jJ=null===(YJ=JJ[GJ])||void 0===YJ?void 0:YJ.serial)&&void 0!==jJ?jJ:eX}const hJ=ZJ.zs(eJ,cJ);qJ.fill(eX);let DJ=0;for(let GJ=0;GJ<Se;GJ++){const ZJ=JJ[GJ];if(ZJ&&(1===hJ[GJ]||2===hJ[GJ])){const[JJ,FJ]=1===hJ[GJ]?Pe(He(GJ)[0],cJ,UJ):[0,UJ],[eJ,AJ]=ZJ.from(JJ,UJ);XJ[GJ]=eJ,qJ[GJ]=AJ,DJ+=ZJ.to(FJ,UJ)-eJ}AJ[GJ]=DJ}const sJ=FJ(Uint8Array,ZJ.Is(DJ),DJ);let nJ=0;for(let GJ=0;GJ<Se;GJ++)qJ[GJ]!==eX&&sJ.set(JJ[GJ].runs.subarray(XJ[GJ],XJ[GJ]+AJ[GJ]-nJ),nJ),nJ=AJ[GJ];ZJ.Vs(AJ,qJ,cJ)}computeFromNeighbours(JJ,cJ,ZJ,FJ,UJ,eJ){if(JJ!==AX)throw new Error("WasmChunkMesher lights the chunks loadHood loaded: pass LOADED_HOOD");const XJ=performance.now(),AJ=this.computeWritten(cJ,ZJ,FJ,UJ,eJ);return this.lastComputeMs=performance.now()-XJ,AJ}mesh(JJ){const cJ=this.checkJob(JJ),{mesher:ZJ,view:FJ}=this,UJ=this.writeAndMesh(JJ,cJ),eJ=ZJ.Ss();return function(JJ,cJ,ZJ,FJ,UJ){const eJ=cJ[1];if(1&cJ[0]){const ZJ=[];for(let UJ=0;UJ<eJ;UJ++){const eJ=cJ.subarray(8+2*UJ);ZJ.push(FX(JJ,eJ[0],eJ[1],FJ))}return{lightOnly:!0,lightDataArrays:ZJ}}const XJ=[],AJ=0!==(2&cJ[0])?[]:null;for(let YJ=0;YJ<eJ;YJ++){const UJ=cJ.subarray(8+16*YJ),eJ=-1===(0|UJ[0])?void 0:0|UJ[0],qJ=UJ[1],jJ=UJ[2],hJ=0!==(8&qJ),DJ={vertices:hJ?le:JJ(Uint8Array,UJ[3],UJ[4]).slice().buffer,usesAtlas:0!==(1&qJ),indices:FJ?oe:ZX(jJ),hn:2&qJ?FX(JJ,UJ[5],jJ,FJ):null,kn:ZJ,terrainID:eJ,faceGroups:16&qJ?JJ(Int32Array,UJ[7],15).slice():null};4&qJ&&(DJ.packedVertices=hJ?JJ(Uint32Array,UJ[6],3*jJ).slice():void 0),hJ&&(DJ.vertexCount=4*jJ),XJ.push(DJ),AJ&&AJ.push({terrainID:eJ,numFaces:jJ,is:JJ(Int16Array,UJ[8],jJ).slice(),js:JJ(Int16Array,UJ[9],jJ).slice(),ks:JJ(Int16Array,UJ[10],jJ).slice(),wids:JJ(Int16Array,UJ[11],jJ).slice(),hts:JJ(Int16Array,UJ[12],jJ).slice(),vU:JJ(Uint8Array,UJ[13],jJ).slice(),diagonals:JJ(Uint8Array,UJ[14],jJ).slice()})}const qJ={lightOnly:!1,vertexDataInfo:XJ,faceLayout:AJ,buildMs:performance.now()-UJ},jJ=cJ[2];return 0!==jJ&&(qJ.visNegNeighbours=cJ[3]),jJ>1&&(qJ.visGraphs=3===jJ?JJ(Uint16Array,cJ[4],8).slice():null),qJ}(FJ,FJ(Uint32Array,ZJ.Ns(),UJ),JJ.chunk.kn,this.compactParts,eJ)}writeAndMesh(JJ,cJ){const{mesher:ZJ,view:FJ,Kn:UJ}=this;FJ(Uint16Array,ZJ.Bs(),UJ).set(JJ.chunk.Qs);const{light:eJ}=JJ;if(eJ&&"provided"===eJ.kind){const JJ=ZJ.Ts(eJ.isUint16);eJ.isUint16?FJ(Uint16Array,JJ,this.chunkSizeCubed).set(eJ.data):FJ(Uint8Array,JJ,this.chunkSizeCubed).set(eJ.data)}let XJ=0,AJ=0;for(let YJ=0;YJ<6;YJ++){var qJ,jJ;const cJ=null===(qJ=JJ.neighbourLightBorders)||void 0===qJ?void 0:qJ[YJ];cJ&&(FJ(Uint16Array,ZJ.Es(YJ),UJ*UJ).set(cJ),XJ|=1<<YJ),null!==(jJ=JJ.neighbourLightIsUint16)&&void 0!==jJ&&jJ[YJ]&&(AJ|=1<<YJ)}return 32&cJ&&this.writeLayout(JJ.lightOnlyLayout),ZJ.mesh(cJ,JJ.neighboursBitmask,JJ.neighbourOpenSkyFaces,XJ,AJ)}checkJob(JJ){const{chunk:cJ,light:ZJ}=JJ,FJ=this.Kn;if(cJ.Qs.length!==FJ)throw new Ne(`WasmChunkMesher needs a _wholeLayerVoxel of ${FJ}`);if(!jX(JJ.neighboursBitmask)||!jX(JJ.neighbourOpenSkyFaces))throw new Ne(`WasmChunkMesher neighbours bitmask ${JJ.neighboursBitmask} or open sky faces ${JJ.neighbourOpenSkyFaces}`);let UJ=0;if(ZJ){const JJ="provided"===ZJ.kind;if(JJ&&(ZJ.data.length!==this.chunkSizeCubed||ZJ.data instanceof Uint16Array!==ZJ.isUint16))throw new Ne(`WasmChunkMesher light is not ${this.chunkSizeCubed} ${ZJ.isUint16?"u16":"u8"} values`);UJ|=UX[ZJ.kind]|(JJ&&ZJ.isUint16?4:0)}const eJ=JJ.neighbourLightBorders;if(eJ){UJ|=8;for(let JJ=0;JJ<6;JJ++){const cJ=eJ[JJ];if(cJ&&cJ.length!==FJ*FJ)throw new Ne(`WasmChunkMesher light border ${JJ} is not ${FJ*FJ} light values`)}}JJ.neighbourLightIsUint16&&(UJ|=16);const XJ=ZJ?JJ.lightOnlyLayout:null;if(XJ){for(const JJ of XJ){const cJ=JJ.numFaces,ZJ=[JJ.is,JJ.js,JJ.ks,JJ.wids,JJ.hts,JJ.vU,JJ.diagonals];if(!jX(cJ)||ZJ.some((JJ=>JJ.length!==cJ)))throw new Ne("WasmChunkMesher face layout arrays disagree with numFaces")}UJ|=32}return UJ|(JJ.visGraphs?64:0)|(cJ.sn?128:0)|(cJ.qn?256:0)}writeLayout(JJ){const{mesher:cJ,view:ZJ}=this;let FJ=0;for(const hJ of JJ)FJ+=hJ.numFaces;cJ.gs(JJ.length,FJ);const UJ=cJ.Ws(),eJ=cJ.Ms(),XJ=cJ.Hs(),AJ=ZJ(Uint32Array,UJ,JJ.length),qJ=ZJ(Int16Array,eJ,5*FJ),jJ=ZJ(Uint8Array,XJ,2*FJ);let YJ=0;JJ.forEach(((JJ,cJ)=>{AJ[cJ]=JJ.numFaces,qJ.set(JJ.is,YJ),qJ.set(JJ.js,FJ+YJ),qJ.set(JJ.ks,2*FJ+YJ),qJ.set(JJ.wids,3*FJ+YJ),qJ.set(JJ.hts,4*FJ+YJ),jJ.set(JJ.vU,YJ),jJ.set(JJ.diagonals,FJ+YJ),YJ+=JJ.numFaces}))}}Error;function DX(JJ){return/out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(JJ))}new Set(["start_refused","light_state_refused","abort_refused","trap_out_of_memory"]),new Set;function sX(JJ,cJ){for(const ZJ of cJ)JJ.push(ZJ.is.buffer),JJ.push(ZJ.js.buffer),JJ.push(ZJ.ks.buffer),JJ.push(ZJ.wids.buffer),JJ.push(ZJ.hts.buffer),JJ.push(ZJ.vU.buffer),JJ.push(ZJ.diagonals.buffer)}class nX extends Error{}let GX,fX=null,xX=null;const rX=[];let vX=0,mX=!1,QX=0;let EX=0,VX=null,KX=!1;const yX=new class{constructor(){this.runs=new Map}take(JJ){JJ.forgetAll&&this.runs.clear();for(const cJ of JJ.forgotten)this.runs.delete(cJ);return JJ.sentIds.forEach(((cJ,ZJ)=>{this.runs.set(cJ,new Me(JJ.sentRuns[ZJ]))})),Array.from(JJ.ids,(JJ=>{if(JJ<0)return null;const cJ=this.runs.get(JJ);if(!cJ)throw new Error(`The meshing worker holds no chunk ${JJ}`);return cJ}))}clear(){this.runs.clear()}get size(){return this.runs.size}get bytes(){let JJ=0;for(const{runs:cJ}of this.runs.values())JJ+=cJ.byteLength;return JJ}},SX=new class{constructor(){this.entries=new Map}take(JJ){var cJ;const{lightHood:ZJ,hood:FJ}=JJ;ZJ.forgetAll&&this.entries.clear();for(const UJ of ZJ.forgotten)this.entries.delete(UJ);ZJ.providedTag&&(JJ.providedLightData=this.hj(FJ.ids[13],ZJ.providedTag).slice()),null===(cJ=ZJ.borderTags)||void 0===cJ||cJ.forEach(((cJ,ZJ)=>{if(cJ){const UJ=this.hj(FJ.ids[We[ZJ]],cJ);JJ.neighbourLightBorders[ZJ]=be(UJ,JJ.neighbourLightIsUint16[ZJ],ZJ,JJ.chunk.size)}}))}keep(JJ,cJ){if(!JJ.lightHood.keep)return;const ZJ=JJ.hood.ids[13];cJ?this.entries.set(ZJ,{tag:JJ.meshJobId,data:cJ.slice()}):this.entries.delete(ZJ)}hj(JJ,cJ){const ZJ=this.entries.get(JJ);if((null===ZJ||void 0===ZJ?void 0:ZJ.tag)!==cJ)throw new Error(`The meshing worker holds no light ${cJ} for chunk ${JJ}${ZJ?`, but light ${ZJ.tag}`:""}`);return ZJ.data}clear(){this.entries.clear()}get size(){return this.entries.size}};function IX(JJ,cJ){const ZJ={type:"lightEngineReport",message:JJ,failureKind:cJ};self.postMessage(ZJ)}function MX(){if(mX)return;mX=!0;const JJ={type:"lightEngineReport",message:`No wasm mesher on this worker (${HX()})`,lost:!0};self.postMessage(JJ)}function bX(JJ){return JJ instanceof Error?JJ.message:String(JJ)}function wX(JJ){try{return xX=hX.create(JJ,GX),!1}catch(cJ){const ZJ=JJ.takeRefusedAllocation();cJ instanceof ue&&JJ.markFailed(cJ.trap);const FJ=ZJ>0&&!(cJ instanceof Oe)?` (alloc_failed ${ZJ} bytes)`:"",UJ=gX(cJ),eJ=ZJ>0||cJ instanceof Oe;return IX(`Wasm mesher failed${FJ} to start: ${bX(cJ)}`,UJ?void 0:eJ?"start_refused":"start_failed"),eJ||UJ}}function WX(){var JJ;null!==(JJ=fX)&&void 0!==JJ&&JJ.isReady()?xX.free():rX.push(xX),xX=null}function gX(JJ){return!(JJ instanceof ue)&&!(JJ instanceof nX)&&DX(JJ)}function HX(){if(null!==VX)return VX;const JJ=uZ();return"ready"===JJ?"its start failed":"failed"===JJ?BZ():`wasm ${JJ}`}self.onmessage=JJ=>{let{data:{type:cJ,data:ZJ}}=JJ;switch(cJ){case"wasmInit":Ge(ZJ)||IX(`Wasm did not start (${BZ()}), so this worker meshes nothing`);break;case"meshingInit":!function(JJ){GX=JJ,yX.clear(),SX.clear(),vX=0,mX=!1,EX=0,VX=null,xX&&WX();fX=function(JJ){const cJ=function(JJ){var cJ;return JJ.isBloxdWasmReady()?{Zn:JJ.getBloxdWasm(),view:JJ.wasmView,BufferView:JJ.WasmBufferView,isReady:JJ.isBloxdWasmReady,markFailed:JJ.markBloxdWasmFailed,takeRefusedAllocation:null!==(cJ=JJ.takeBloxdWasmRefusedAllocation)&&void 0!==cJ?cJ:()=>0}:null}(JJ);return cJ?{...cJ,trapContext:()=>{const cJ=Math.round(JJ.getBloxdWasmMemory().buffer.byteLength/2**20),ZJ=JJ.getLastBloxdWasmPanic();return`wasm memory ${cJ} MB, ${null===ZJ?"no panic message":`panic: ${function(JJ){return JJ.replace(/\\s*\\n\\s*/g," / ").slice(0,300)}(ZJ)}`}`},takeRefusedAllocation:JJ.takeBloxdWasmRefusedAllocation}:null}(UJ),fX&&wX(fX);xX||MX()}(ZJ);break;case"Ln":!function(JJ){const cJ=performance.now(),{i:ZJ,j:FJ,k:UJ}=JJ.chunk,eJ={data:null,isUint16:!1,kind:"computed",source:"none",seedColumnsRead:null,ms:0,engine:null};let XJ=!1;const AJ=null!==xX;KX=!1;try{const ZJ=yX.take(JJ.hood);SX.take(JJ),XJ=!0;const FJ=function(JJ,cJ,ZJ){xX&&!fX.isReady()&&WX();const FJ=xX;if(!FJ)throw new nX(`No wasm mesher on this worker (${HX()})`);let UJ=!1;try{FJ.loadHood(cJ,function(JJ){const{chunk:cJ}=JJ;return!JJ.computeLighting||JJ.providedLightData||cJ.qn||ye(cJ.sn,JJ.chunkJ,JJ.highestChunkJ)?1:Ke}(JJ)),UJ=!0;const eJ=function(JJ,cJ,ZJ){!function(JJ,cJ,ZJ,FJ){const{chunk:UJ,skySeedGrid:eJ,highestChunkJ:XJ,chunkJ:AJ}=cJ;if(!cJ.computeLighting)return;if(JJ.returnBuffers(cJ.reusableLightBuffers),cJ.providedLightData)return FJ.data=cJ.providedLightData,FJ.isUint16=cJ.providedLightIsUint16,FJ.kind="provided",void(FJ.source=cJ.providedLightReused?"reused":"server");if(ye(UJ.sn,AJ,XJ))return;if(UJ.qn)return FJ.data=JJ.getZeroedFullChunkLightData(),FJ.isUint16=!1,void(FJ.kind="zeroedFull");const{i:qJ,j:jJ,k:YJ}=UJ,hJ=JJ.computeFromNeighbours(ZJ,cJ.neighboursBitmask,eJ,XJ,AJ,`${qJ},${jJ},${YJ}`);if(FJ.ms=JJ.lastComputeMs,FJ.engine=JJ.lastComputeKind,FJ.data=hJ.hn,FJ.isUint16=hJ.isUint16,FJ.kind="computed",FJ.source="clientBfs",function(JJ,cJ){return null!==cJ&&JJ<cJ}(AJ,XJ)){const cJ=new Uint8Array(eJ.length);JJ.skySeedColumnsRead(cJ)&&(FJ.seedColumnsRead=cJ)}}(JJ,cJ,AX,ZJ);const FJ=performance.now(),UJ=JJ.mesh({chunk:cJ.chunk,neighboursBitmask:cJ.neighboursBitmask,light:ZJ.data&&{data:ZJ.data,isUint16:ZJ.isUint16,kind:ZJ.kind},neighbourLightBorders:cJ.neighbourLightBorders,neighbourLightIsUint16:cJ.neighbourLightIsUint16,neighbourOpenSkyFaces:cJ.neighbourOpenSkyFaces,lightOnlyLayout:cJ.lightOnly?cJ.cachedFaceLayout:null,visGraphs:!1!==cJ.visGraphs});return{...UJ,meshMs:performance.now()-FJ}}(FJ,JJ,ZJ);return EX=0,eJ}catch(eJ){const{i:cJ,j:XJ,k:AJ}=JJ.chunk;if(eJ instanceof Ne){const qJ=ZJ.data;Object.assign(ZJ,{data:null,isUint16:!1,kind:"computed",source:"none",seedColumnsRead:null,ms:0,engine:null});let jJ=JJ.reusableLightBuffers;if(UJ&&(jJ=qJ&&qJ!==JJ.providedLightData?[qJ.buffer]:[]),FJ.returnBuffers(jJ),eJ instanceof Oe){const JJ=++QX;IX(0===(JJ&JJ-1)?`Wasm mesher could not keep a light state: ${eJ.message} (${JJ} on this thread), failing chunk ${cJ},${XJ},${AJ}`:null,"light_state_refused"),++EX>=3&&(VX=`its memory can\'t grow: ${EX} light states refused in a row`,WX())}else{const JJ=vX<3;JJ&&vX++,IX(JJ?`Wasm mesher could not take chunk ${cJ},${XJ},${AJ}: ${bX(eJ)}`:null,"refused_input")}throw eJ}if(gX(eJ))throw eJ;const qJ=fX.takeRefusedAllocation();eJ instanceof ue&&fX.markFailed(eJ.trap),WX();throw IX(`Wasm mesher failed${qJ>0?` (alloc_failed ${qJ} bytes)`:""} on chunk ${cJ},${XJ},${AJ}: ${bX(eJ)}`,function(JJ,cJ){if(!(JJ instanceof ue))return"threw";if(cJ>0)return"abort_refused";return DX(JJ.trap)?"trap_out_of_memory":"trap"}(eJ,qJ)),KX=qJ>0,fX.isReady()&&wX(fX)&&(KX=!0),eJ}}(JJ,ZJ,eJ);SX.keep(JJ,"clientBfs"===eJ.source?eJ.data:null),"lightDataArrays"in FJ?function(JJ,cJ,ZJ,FJ,UJ){const{i:eJ,j:XJ,k:AJ}=JJ.chunk,{skySeedGrid:qJ}=JJ,jJ=JJ.cachedFaceLayout,YJ=ZJ.data,hJ=[];ZJ.seedColumnsRead&&hJ.push(ZJ.seedColumnsRead.buffer);for(const sJ of cJ)hJ.push(sJ.buffer);hJ.push(YJ.buffer),qJ&&hJ.push(qJ.buffer),sX(hJ,jJ);const DJ={type:"meshed",i:eJ,j:XJ,k:AJ,meshJobId:JJ.meshJobId,lightOnlyUpdate:!0,lightDataArrays:cJ,faceLayout:jJ,computedLightData:YJ,fZ:ZJ.isUint16,lightSource:ZJ.source,serverLightCovered:JJ.serverLightCovered,reusableSkySeedGrid:qJ,lightSeedColumnsRead:ZJ.seedColumnsRead,lightMs:ZJ.ms,meshMs:FJ,jobMs:performance.now()-UJ,lightEngineKind:ZJ.engine};self.postMessage(DJ,hJ)}(JJ,FJ.lightDataArrays,eJ,FJ.meshMs,cJ):function(JJ,cJ,ZJ,FJ){const{i:UJ,j:eJ,k:XJ}=JJ.chunk,{skySeedGrid:AJ}=JJ,{vertexDataInfo:qJ,faceLayout:jJ,visGraphs:YJ,visNegNeighbours:hJ}=cJ,DJ=[];ZJ.seedColumnsRead&&DJ.push(ZJ.seedColumnsRead.buffer);for(const nJ of qJ)nJ.vertices.byteLength>0&&DJ.push(nJ.vertices),nJ.indices.buffer.byteLength>0&&DJ.push(nJ.indices.buffer),nJ.hn&&DJ.push(nJ.hn.buffer),nJ.packedVertices&&DJ.push(nJ.packedVertices.buffer),nJ.faceGroups&&DJ.push(nJ.faceGroups.buffer);ZJ.data&&DJ.push(ZJ.data.buffer),AJ&&DJ.push(AJ.buffer),jJ&&sX(DJ,jJ),YJ&&DJ.push(YJ.buffer);const sJ={type:"meshed",i:UJ,j:eJ,k:XJ,meshJobId:JJ.meshJobId,lightOnlyUpdate:!1,vertexDataInfo:qJ,faceLayout:jJ,computedLightData:ZJ.data,fZ:ZJ.isUint16,lightSource:ZJ.source,serverLightCovered:JJ.serverLightCovered,reusableSkySeedGrid:AJ,lightSeedColumnsRead:ZJ.seedColumnsRead,lightMs:ZJ.ms,meshMs:cJ.meshMs,jobMs:performance.now()-FJ,buildMs:cJ.buildMs,mesherEngineKind:"wasm",lightEngineKind:ZJ.engine,...void 0===hJ?{}:{visNegNeighbours:hJ},...void 0===YJ?{}:{visGraphs:YJ}};self.postMessage(sJ,DJ)}(JJ,FJ,eJ,cJ)}catch(qJ){console.error(`Worker meshChunk failed for chunk (${ZJ}, ${FJ}, ${UJ})`,qJ),SX.keep(JJ,null);const cJ=qJ instanceof Oe||KX||gX(qJ),jJ=AJ&&!xX&&!(qJ instanceof Ne)&&!(qJ instanceof nX);!function(JJ,cJ,ZJ,FJ,UJ,eJ,XJ,AJ,qJ,jJ){const YJ=[];XJ&&YJ.push(XJ.buffer),AJ&&YJ.push(AJ.buffer);const hJ={type:"meshError",i:JJ,j:cJ,k:ZJ,meshJobId:FJ,errorMessage:UJ instanceof Error?UJ.message:String(UJ),cachesTaken:eJ,reusableLightBuffer:XJ,reusableSkySeedGrid:AJ,lostMesher:qJ,refusedState:jJ};self.postMessage(hJ,YJ)}(ZJ,FJ,UJ,JJ.meshJobId,qJ,XJ,eJ.data,JJ.skySeedGrid,jJ,cJ),xX||MX()}}(ZJ);break;default:console.error("Unrecognised meshing worker message type:",cJ)}}})();', "Worker", void 0, ⟦2-char-id⟧.p + "meshing.worker.e7c4a4f0.worker.js")
+      return ⟦2-char-id⟧()('(()=>{var BB={16:(BB,TB,dB)=>{BB.exports=dB.p+"static/media/bloxd_wasm_bg.83d4d2ae0f6df4b285af.wasm"},22:(BB,TB,dB)=>{BB.exports=dB.p+"static/media/bloxd_wasm_textures_bg.1218b8b300c47f90e7ad.wasm"}},TB={};function dB(VB){var yB=TB[VB];if(void 0!==yB)return yB.exports;var pB=TB[VB]={exports:{}};return BB[VB](pB,pB.exports,dB),pB.exports}dB.m=BB,dB.d=(BB,TB)=>{for(var VB in TB)dB.o(TB,VB)&&!dB.o(BB,VB)&&Object.defineProperty(BB,VB,{enumerable:!0,get:TB[VB]})},dB.f={},dB.e=BB=>Promise.all(Object.keys(dB.f).reduce(((TB,VB)=>(dB.f[VB](BB,TB),TB)),[])),dB.u=BB=>"static/js/l9xvfg.wasmZstdDecoder.3bc057ed.chunk.worker.js",dB.o=(BB,TB)=>Object.prototype.hasOwnProperty.call(BB,TB),dB.r=BB=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(BB,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(BB,"__esModule",{value:!0})},dB.U=function(BB){var TB=new URL(BB,"x:/"),dB={};for(var VB in TB)dB[VB]=TB[VB];for(var VB in dB.href=BB,dB.pathname=BB.replace(/[?#].*/,""),dB.origin=dB.protocol="",dB.toString=dB.toJSON=()=>BB,dB)Object.defineProperty(this,VB,{enumerable:!0,configurable:!0,value:dB[VB]})},dB.U.prototype=URL.prototype,dB.p="/",(()=>{var BB={0:1};dB.f.i=(TB,VB)=>{BB[TB]||importScripts(dB.p+dB.u(TB))};var TB=self.webpackChunk_bloxd_web=self.webpackChunk_bloxd_web||[],VB=TB.push.bind(TB);TB.push=TB=>{var yB=TB[0],pB=TB[1],lB=TB[2];for(var JB in pB)dB.o(pB,JB)&&(dB.m[JB]=pB[JB]);for(lB&&lB(dB);yB.length;)BB[yB.pop()]=1;VB(TB)}})();var VB={};dB.r(VB),dB.d(VB,{eo:()=>pB,EnvelopeKind:()=>lB,Bk:()=>JB,PhysicsEngine:()=>YB,Tk:()=>gB,Vk:()=>oB,yk:()=>kB,lk:()=>LB,Jk:()=>OB,Yk:()=>DB,gk:()=>uB,kk:()=>HB,Lk:()=>EB,Ok:()=>vB,default:()=>MT,initSync:()=>sT,Dk:()=>mB,uk:()=>iB,Hk:()=>NB,Ek:()=>tB,vk:()=>fB,mk:()=>sB,ik:()=>MB,Nk:()=>zB,tk:()=>wB,fk:()=>UB,sk:()=>FB,Mk:()=>KB,zk:()=>rB,wk:()=>IB,Uk:()=>cB});var yB={};dB.r(yB),dB.d(yB,{BloxdWasmFetchError:()=>WT,BloxdWasmHttpError:()=>hT,BloxdWasmIntegrityError:()=>GT,BloxdWasmTimeoutError:()=>CT,PROMISE_HOOK_CODES:()=>aT,RETRY_DELAYS_MS:()=>jT,STALL_TIMEOUT_MS:()=>xT,WASM_HOOKS_ENFORCED:()=>ty,WasmBufferView:()=>sp,bloxdTextureWasmUrl:()=>ip,bloxdWasmCore:()=>Op,bloxdWasmDownloadHref:()=>dp,compileBloxdTextureWasm:()=>tp,compileBloxdWasmBrowser:()=>kp,describeBloxdWasmFailure:()=>Ad,fetchBytes:()=>id,getBloxdWasm:()=>bd,getBloxdWasmBuild:()=>nd,getBloxdWasmFailureReason:()=>jd,getBloxdWasmFailureStage:()=>Gd,getBloxdWasmFailureStatus:()=>xd,getBloxdWasmMemory:()=>dV,getBloxdWasmModule:()=>ed,getBloxdWasmStatus:()=>Cd,getBloxdWasmTamper:()=>hy,getLastBloxdWasmPanic:()=>BV,initBloxdWasmBrowser:()=>Dp,initBloxdWasmFromModule:()=>Hp,isBloxdWasmDownloadFailureRetryable:()=>yV,isBloxdWasmLoadUnstreamed:()=>Hd,isBloxdWasmReady:()=>hd,isEnforceableWasmReport:()=>Ky,isPromiseHookReport:()=>wy,isPunishedWasmReport:()=>ry,isRendererWasmReport:()=>my,isWeightedWasmReport:()=>My,loadBloxdWasmBrowser:()=>gp,markBloxdWasmFailed:()=>VV,onBloxdWasmFailed:()=>gV,onBloxdWasmMemoryGrown:()=>oV,takeBloxdWasmRefusedAllocation:()=>TV,textureLoadFailure:()=>mp,wasmMemoryControl:()=>vp,wasmView:()=>fp,watchBloxdRenderer:()=>vy});class pB{__destroy_into_raw(){const BB=this.__wbg_ptr;return this.__wbg_ptr=0,PB.unregister(this),BB}free(){const BB=this.__destroy_into_raw();NT.mHKB(BB,0)}Fk(){const BB=NT.sWkg(this.__wbg_ptr);if(BB[2])throw DT(BB[1]);return BB[0]>>>0}Kk(){return NT.WMqO(this.__wbg_ptr)>>>0}constructor(){const BB=NT.pq5v();return this.__wbg_ptr=BB,PB.register(this,this.__wbg_ptr,this),this}rk(){return NT.ZI30(this.__wbg_ptr)>>>0}Ik(BB){const TB=NT.iz9J(this.__wbg_ptr,BB);if(TB[2])throw DT(TB[1]);return TB[0]>>>0}Sk(BB){const TB=NT.T9oq(this.__wbg_ptr,BB);if(TB[2])throw DT(TB[1]);return TB[0]>>>0}}Symbol.dispose&&(pB.prototype[Symbol.dispose]=pB.prototype.free);const lB=Object.freeze({Js:0,0:"Js",Error:1,1:"Error",LeaveRoom:2,2:"LeaveRoom",RoomState:3,3:"RoomState",RoomStatePatch:4,4:"RoomStatePatch",RoomDataNone:5,5:"RoomDataNone",RoomDataBin:6,6:"RoomDataBin",RoomDataBytes:7,7:"RoomDataBytes",Ignored:8,8:"Ignored",StringType:16,16:"StringType"});class JB{__destroy_into_raw(){const BB=this.__wbg_ptr;return this.__wbg_ptr=0,QB.unregister(this),BB}free(){const BB=this.__destroy_into_raw();NT.UIrT(BB,0)}Rk(BB,TB){const dB=NT.nALF(this.__wbg_ptr,BB,TB);if(dB[2])throw DT(dB[1]);return dB[0]>>>0}ak(BB){const TB=NT.zOah(this.__wbg_ptr,BB);if(TB[2])throw DT(TB[1]);return TB[0]>>>0}Zk(){NT.sfkk(this.__wbg_ptr)}static Xk(){return NT.Sx74()>>>0}Wk(){return NT.OcJh(this.__wbg_ptr)>>>0}hk(){const BB=NT.GFEM(this.__wbg_ptr);return 0===BB[0]?void 0:BB[1]}Ck(){return NT.xvRs(this.__wbg_ptr)>>>0}Gk(){return NT.uEzX(this.__wbg_ptr)>>>0}static Qk(){return NT.S7Ni()>>>0}constructor(){const BB=NT.gT8u();return this.__wbg_ptr=BB,QB.register(this,this.__wbg_ptr,this),this}qk(){return NT.VuOL(this.__wbg_ptr)>>>0}xk(){return NT.w2eH(this.__wbg_ptr)>>>0}jk(){return NT.vj7t(this.__wbg_ptr)>>>0}Pk(BB){return NT.T2fq(this.__wbg_ptr,BB)>>>0}reserve(BB,TB){const dB=NT.HGEC(this.__wbg_ptr,BB,TB);if(dB[1])throw DT(dB[0])}nk(BB,TB){const dB=oT(BB,NT.hTqM),VB=tT;NT.GQiQ(this.__wbg_ptr,dB,VB,TB)}text(){let BB,TB;try{const dB=NT.h3D2(this.__wbg_ptr);return BB=dB[0],TB=dB[1],eB(dB[0],dB[1])}finally{NT.Bg8x(BB,TB,1)}}}Symbol.dispose&&(JB.prototype[Symbol.dispose]=JB.prototype.free);class YB{__destroy_into_raw(){const BB=this.__wbg_ptr;return this.__wbg_ptr=0,RB.unregister(this),BB}free(){const BB=this.__destroy_into_raw();NT.FOkj(BB,0)}TL(BB,TB){GB(TB,pB);const dB=NT.PKSN(this.__wbg_ptr,BB,TB.__wbg_ptr);if(dB[2])throw DT(dB[1]);return dB[0]>>>0}VL(){const BB=NT.oebK(this.__wbg_ptr);if(BB[1])throw DT(BB[0])}YL(BB,TB,dB,VB,yB,pB,lB,JB,YB,oB,kB){GB(BB,gB);const LB=NT.i1aP(this.__wbg_ptr,BB.__wbg_ptr,TB,dB,VB,yB,pB,lB,JB,YB,oB,kB);if(LB[2])throw DT(LB[1]);return LB[0]}gL(){const BB=NT.CNW0(this.__wbg_ptr);var TB=qB(BB[0],BB[1]).slice();return NT.Bg8x(BB[0],8*BB[1],8),TB}oL(){return NT.exuy(this.__wbg_ptr)>>>0}kL(){return NT.Wv5L(this.__wbg_ptr)>>>0}LL(){return NT.gpUB(this.__wbg_ptr)>>>0}constructor(BB,TB,dB,VB,yB,pB,lB,JB){const YB=NT.vUX7(BB,TB,dB,VB,yB,pB,lB,JB);if(YB[2])throw DT(YB[1]);return this.__wbg_ptr=YB[0],RB.register(this,this.__wbg_ptr,this),this}uL(BB){GB(BB,pB);const TB=NT.P6vQ(this.__wbg_ptr,BB.__wbg_ptr);if(TB[2])throw DT(TB[1]);return TB[0]>>>0}HL(BB){const TB=NT.WYkW(this.__wbg_ptr,BB);if(TB[1])throw DT(TB[0])}EL(){return NT.ZTfj(this.__wbg_ptr)>>>0}resume(BB,TB){GB(BB,gB),GB(TB,pB);const dB=NT.FPyh(this.__wbg_ptr,BB.__wbg_ptr,TB.__wbg_ptr);if(dB[2])throw DT(dB[1]);return dB[0]>>>0}tL(BB){const TB=NT.WBli(this.__wbg_ptr,BB);if(TB[1])throw DT(TB[0])}ML(BB,TB){GB(TB,pB);const dB=NT.SFAM(this.__wbg_ptr,BB,TB.__wbg_ptr);if(dB[1])throw DT(dB[0])}UL(BB){const TB=LT(BB,NT.hTqM),dB=tT,VB=NT.U9Fu(this.__wbg_ptr,TB,dB);if(VB[1])throw DT(VB[0])}pL(BB,TB,dB,VB,yB,pB){const lB=NT.Zw2F(this.__wbg_ptr,BB,TB,dB,VB,yB,pB);if(lB[1])throw DT(lB[0])}lL(BB,TB,dB,VB){const yB=oT(BB,NT.hTqM),pB=tT,lB=LT(TB,NT.hTqM),JB=tT,YB=LT(dB,NT.hTqM),gB=tT,oB=LT(VB,NT.hTqM),kB=tT,LB=NT.YZxl(this.__wbg_ptr,yB,pB,lB,JB,YB,gB,oB,kB);if(LB[1])throw DT(LB[0])}KL(BB,TB){GB(TB,pB);const dB=NT.Nsff(this.__wbg_ptr,BB,TB.__wbg_ptr);if(dB[1])throw DT(dB[0])}DL(BB,TB,dB){const VB=NT.NkS4(this.__wbg_ptr,BB,TB,dB);if(VB[1])throw DT(VB[0])}IL(BB,TB,dB,VB,yB,pB,lB,JB,YB,oB){GB(BB,gB);return NT.T4dZ(this.__wbg_ptr,BB.__wbg_ptr,TB,dB,VB,yB,pB,lB,JB,YB,oB)}}Symbol.dispose&&(YB.prototype[Symbol.dispose]=YB.prototype.free);class gB{static __wrap(BB){const TB=Object.create(gB.prototype);return TB.__wbg_ptr=BB,aB.register(TB,TB.__wbg_ptr,TB),TB}__destroy_into_raw(){const BB=this.__wbg_ptr;return this.__wbg_ptr=0,aB.unregister(this),BB}free(){const BB=this.__destroy_into_raw();NT.Mekz(BB,0)}PL(BB){const TB=NT.q9gF(this.__wbg_ptr,BB);if(TB[2])throw DT(TB[1]);return TB[0]>>>0}QL(BB,TB,dB){return NT.SyAt(this.__wbg_ptr,BB,TB,dB)}RL(BB,TB,dB){return NT.WGMD(this.__wbg_ptr,BB,TB,dB)>>>0}aL(BB,TB,dB,VB){return 0!==NT.jGDg(this.__wbg_ptr,BB,TB,dB,VB)}ZL(){NT.hBMd(this.__wbg_ptr)}WL(BB){const TB=NT.yxuK(this.__wbg_ptr,BB);if(TB[3])throw DT(TB[2]);var dB=jB(TB[0],TB[1]).slice();return NT.Bg8x(TB[0],1*TB[1],1),dB}evict(BB,TB){return NT.tX4a(this.__wbg_ptr,BB,TB)>>>0}hL(){NT.AenT(this.__wbg_ptr)}CL(BB,TB,dB){NT.oMk0(this.__wbg_ptr,BB,TB,dB)}qL(BB){const TB=NT.LfLu(this.__wbg_ptr,BB);if(TB[1])throw DT(TB[0])}xL(){return NT.tcqA(this.__wbg_ptr)>>>0}jL(){return NT.WWKW(this.__wbg_ptr)>>>0}AL(BB,TB,dB){NT.woUI(this.__wbg_ptr,BB,TB,dB)}bL(BB,TB,dB){NT.ZbEr(this.__wbg_ptr,BB,TB,dB)}nL(){return NT.Kx3Z(this.__wbg_ptr)>>>0}eL(){return NT.LVwN(this.__wbg_ptr)>>>0}constructor(){const BB=NT.qXd1();return this.__wbg_ptr=BB,aB.register(this,this.__wbg_ptr,this),this}static BO(){const BB=NT.o9Jd();return gB.__wrap(BB)}dO(){return NT.GtiM(this.__wbg_ptr)>>>0}VO(){return NT.DqqM(this.__wbg_ptr)>>>0}yO(BB,TB,dB,VB){const yB=NT.mbBT(this.__wbg_ptr,BB,TB,dB,VB);if(yB[1])throw DT(yB[0])}pO(){return NT.aPAt(this.__wbg_ptr)>>>0}lO(){return NT.Tr52(this.__wbg_ptr)>>>0}JO(BB,TB,dB,VB){NT.L4Dv(this.__wbg_ptr,BB,TB,dB,VB)}YO(BB){NT.TBHF(this.__wbg_ptr,BB)}oO(BB,TB,dB,VB,yB){const pB=kT(TB,NT.hTqM),lB=tT,JB=oT(dB,NT.hTqM),YB=tT,gB=LT(VB,NT.hTqM),oB=tT,kB=NT.ho5I(this.__wbg_ptr,BB,pB,lB,JB,YB,gB,oB,yB);if(kB[1])throw DT(kB[0])}gO(BB,TB,dB,VB){const yB=kT(BB,NT.hTqM),pB=tT,lB=oT(TB,NT.hTqM),JB=tT,YB=LT(dB,NT.hTqM),gB=tT,oB=kT(VB,NT.hTqM),kB=tT,LB=NT.YQiZ(this.__wbg_ptr,yB,pB,lB,JB,YB,gB,oB,kB);if(LB[1])throw DT(LB[0])}HO(BB){const TB=kT(BB,NT.hTqM),dB=tT,VB=NT.zyQE(this.__wbg_ptr,TB,dB);if(VB[1])throw DT(VB[0])}EO(){return NT.S9a5(this.__wbg_ptr)>>>0}vO(BB){const TB=NT.ekc0(this.__wbg_ptr,BB);if(TB[2])throw DT(TB[1]);return TB[0]>>>0}steer(){return NT.xW45(this.__wbg_ptr)>>>0}mO(){const BB=NT.I9dQ(this.__wbg_ptr);var TB=qB(BB[0],BB[1]).slice();return NT.Bg8x(BB[0],8*BB[1],8),TB}iO(){return NT.Qx59(this.__wbg_ptr)>>>0}mL(){const BB=NT.gARt(this.__wbg_ptr);var TB,dB,VB=(TB=BB[0],dB=BB[1],TB>>>=0,(null!==nB&&0!==nB.byteLength||(nB=new Int32Array(NT.memory.buffer)),nB).subarray(TB/4,TB/4+dB)).slice();return NT.Bg8x(BB[0],4*BB[1],4),VB}}Symbol.dispose&&(gB.prototype[Symbol.dispose]=gB.prototype.free);class oB{__destroy_into_raw(){const BB=this.__wbg_ptr;return this.__wbg_ptr=0,ZB.unregister(this),BB}free(){const BB=this.__destroy_into_raw();NT.HvIW(BB,0)}tO(BB){const TB=oT(BB,NT.hTqM),dB=tT,VB=NT.VFyw(this.__wbg_ptr,TB,dB);if(VB[1])throw DT(VB[0])}fO(){return NT.ymtw(this.__wbg_ptr)>>>0}sO(){return NT.hTBy(this.__wbg_ptr)>>>0}constructor(){const BB=NT.e2b8();return this.__wbg_ptr=BB,ZB.register(this,this.__wbg_ptr,this),this}run(BB,TB){GB(BB,gB);const dB=NT.CzS5(this.__wbg_ptr,BB.__wbg_ptr,TB);if(dB[2])throw DT(dB[1]);return dB[0]>>>0}MO(BB){const TB=oT(BB,NT.hTqM),dB=tT;NT.zudT(this.__wbg_ptr,TB,dB)}zO(BB){const TB=oT(BB,NT.hTqM),dB=tT;NT.dJro(this.__wbg_ptr,TB,dB)}}Symbol.dispose&&(oB.prototype[Symbol.dispose]=oB.prototype.free);class kB{__destroy_into_raw(){const BB=this.__wbg_ptr;return this.__wbg_ptr=0,XB.unregister(this),BB}free(){const BB=this.__destroy_into_raw();NT.QulG(BB,0)}UO(BB,TB){const dB=kT(BB,NT.hTqM),VB=tT;return NT.dVMu(this.__wbg_ptr,dB,VB,TB)>>>0}FO(BB,TB,dB){GB(BB,gB);const VB=kT(dB,NT.hTqM),yB=tT,pB=NT.DTCy(this.__wbg_ptr,BB.__wbg_ptr,TB,VB,yB);if(pB[2])throw DT(pB[1]);return pB[0]>>>0}wO(BB){return NT.TIhB(this.__wbg_ptr,BB)>>>0}constructor(){const BB=NT.v8w2();return this.__wbg_ptr=BB,XB.register(this,this.__wbg_ptr,this),this}scan(BB,TB){GB(BB,gB);const dB=NT.sXd0(this.__wbg_ptr,BB.__wbg_ptr,TB);if(dB[2])throw DT(dB[1]);return dB[0]>>>0}IO(BB){const TB=kT(BB,NT.hTqM),dB=tT;NT.I2iH(this.__wbg_ptr,TB,dB)}rO(){return NT.mLSx(this.__wbg_ptr)>>>0}KO(){return NT.QIOu(this.__wbg_ptr)>>>0}}Symbol.dispose&&(kB.prototype[Symbol.dispose]=kB.prototype.free);class LB{__destroy_into_raw(){const BB=this.__wbg_ptr;return this.__wbg_ptr=0,WB.unregister(this),BB}free(){const BB=this.__destroy_into_raw();NT.plSl(BB,0)}SO(BB){const TB=NT.d8Ye(this.__wbg_ptr,BB);if(TB[2])throw DT(TB[1]);return TB[0]>>>0}compute(BB,TB,dB,VB){var yB=YT(VB)?0:OT(VB,NT.hTqM,NT.ZG5t),pB=tT;const lB=NT.UGai(this.__wbg_ptr,BB,YT(TB)?Number.MAX_SAFE_INTEGER:TB|0,dB,yB,pB);if(lB[2])throw DT(lB[1]);return lB[0]>>>0}QO(BB){const TB=OT(BB,NT.hTqM,NT.ZG5t),dB=tT;NT.ndet(this.__wbg_ptr,TB,dB)}aO(){return NT.dhV9(this.__wbg_ptr)}ZO(BB){return NT.A4OC(this.__wbg_ptr,BB)>>>0}XO(){return NT.oBDq(this.__wbg_ptr)>>>0}WO(){return NT.PS49(this.__wbg_ptr)>>>0}hO(BB,TB){const dB=NT.eLe6(this.__wbg_ptr,BB,TB);if(dB[1])throw DT(dB[0])}CO(){return NT.qBCa(this.__wbg_ptr)>>>0}GO(){return NT.QU8L(this.__wbg_ptr)>>>0}qO(){return NT.lzVs(this.__wbg_ptr)>>>0}PO(BB,TB,dB){const VB=oT(BB,NT.hTqM),yB=tT,pB=oT(TB,NT.hTqM),lB=tT,JB=NT.kttQ(this.__wbg_ptr,VB,yB,pB,lB,dB);if(JB[1])throw DT(JB[0])}jO(){return NT.dKdx(this.__wbg_ptr)>>>0}mesh(BB,TB,dB,VB,yB){const pB=NT.BKiM(this.__wbg_ptr,BB,TB,dB,VB,yB);if(pB[2])throw DT(pB[1]);return pB[0]>>>0}constructor(BB,TB,dB,VB,yB,pB,lB,JB,YB,gB,oB,kB,LB,OB,DB,uB,HB,EB,vB,mB){const iB=gT(BB,NT.hTqM),NB=tT,tB=LT(TB,NT.hTqM),fB=tT,sB=oT(dB,NT.hTqM),MB=tT,zB=kT(VB,NT.hTqM),wB=tT,UB=kT(yB,NT.hTqM),FB=tT,KB=oT(pB,NT.hTqM),rB=tT,IB=oT(lB,NT.hTqM),cB=tT,SB=LT(JB,NT.hTqM),PB=tT,QB=LT(YB,NT.hTqM),RB=tT,aB=kT(gB,NT.hTqM),ZB=tT;var XB=YT(oB)?0:gT(oB,NT.hTqM),hB=tT;const CB=oT(kB,NT.hTqM),GB=tT,qB=kT(LB,NT.hTqM),xB=tT;var jB=YT(OB)?0:kT(OB,NT.hTqM),AB=tT;const bB=LT(DB,NT.hTqM),nB=tT,eB=NT.wjAm(iB,NB,tB,fB,sB,MB,zB,wB,UB,FB,KB,rB,IB,cB,SB,PB,QB,RB,aB,ZB,XB,hB,CB,GB,qB,xB,jB,AB,bB,nB,uB,HB,EB,vB,mB);if(eB[2])throw DT(eB[1]);return this.__wbg_ptr=eB[0],WB.register(this,this.__wbg_ptr,this),this}xO(BB,TB){const dB=oT(BB,NT.hTqM),VB=tT,yB=NT.rVWX(this.__wbg_ptr,dB,VB,TB);if(yB[3])throw DT(yB[2]);var pB=jB(yB[0],yB[1]).slice();return NT.Bg8x(yB[0],1*yB[1],1),pB}bO(BB){NT.yCPn(this.__wbg_ptr,YT(BB)?16777215:BB)}nO(BB){return NT.wdvW(this.__wbg_ptr,BB)>>>0}BD(){return NT.oOFC(this.__wbg_ptr)>>>0}eO(){const BB=NT.Z01O(this.__wbg_ptr);if(BB[2])throw DT(BB[1]);return 0!==BB[0]}TD(){return NT.vkgX(this.__wbg_ptr)>>>0}dD(){return NT.TvfV(this.__wbg_ptr)>>>0}}Symbol.dispose&&(LB.prototype[Symbol.dispose]=LB.prototype.free);class OB{__destroy_into_raw(){const BB=this.__wbg_ptr;return this.__wbg_ptr=0,hB.unregister(this),BB}free(){const BB=this.__destroy_into_raw();NT.U09M(BB,0)}compute(BB,TB,dB,VB){var yB=YT(VB)?0:OT(VB,NT.hTqM,NT.ZG5t),pB=tT;const lB=NT.kiOs(this.__wbg_ptr,BB,YT(TB)?Number.MAX_SAFE_INTEGER:TB|0,dB,yB,pB);if(lB[2])throw DT(lB[1]);return lB[0]>>>0}QO(BB){const TB=OT(BB,NT.hTqM,NT.ZG5t),dB=tT;NT.JDul(this.__wbg_ptr,TB,dB)}GO(){return NT.PjRA(this.__wbg_ptr)>>>0}qO(){return NT.te9D(this.__wbg_ptr)>>>0}VD(BB){const TB=NT.bte3(this.__wbg_ptr,BB);if(TB[2])throw DT(TB[1]);return TB[0]>>>0}constructor(BB,TB,dB,VB,yB,pB){const lB=gT(BB,NT.hTqM),JB=tT,YB=LT(TB,NT.hTqM),gB=tT,oB=oT(dB,NT.hTqM),kB=tT,LB=kT(VB,NT.hTqM),OB=tT,DB=NT.vnXH(lB,JB,YB,gB,oB,kB,LB,OB,yB,pB);if(DB[2])throw DT(DB[1]);return this.__wbg_ptr=DB[0],hB.register(this,this.__wbg_ptr,this),this}BD(){return NT.NVzn(this.__wbg_ptr)>>>0}eO(){const BB=NT.F7vM(this.__wbg_ptr);if(BB[2])throw DT(BB[1]);return 0!==BB[0]}TD(){return NT.mAAE(this.__wbg_ptr)>>>0}}function DB(){const BB=NT.dYYN();var TB=xB(BB[0],BB[1]).slice();return NT.Bg8x(BB[0],4*BB[1],4),TB}function uB(BB,TB){let dB,VB;try{const yB=gT(BB,NT.hTqM),pB=tT,lB=OT(TB,NT.hTqM,NT.ZG5t),JB=tT,YB=NT.XWFP(yB,pB,lB,JB);return dB=YB[0],VB=YB[1],eB(YB[0],YB[1])}finally{NT.Bg8x(dB,VB,1)}}function HB(){const BB=NT.oh9j();var TB=xB(BB[0],BB[1]).slice();return NT.Bg8x(BB[0],4*BB[1],4),TB}function EB(BB){return 0!==NT.drZv(BB)}function vB(BB,TB){const dB=OT(BB,NT.hTqM,NT.ZG5t),VB=tT,yB=NT.UfqU(dB,VB,TB);if(yB[1])throw DT(yB[0])}function mB(){NT.ckOG()}function iB(){return NT.QZKp()>>>0}function NB(BB){return 0!==NT.RVIA(BB)}function tB(BB){return 0!==NT.R6Pt(BB)}function fB(BB){NT.kmmR(BB)}function sB(){return NT.egNP()>>>0}function MB(){return NT.kew6()>>>0}function zB(){return 0!==NT.BGuw()}function wB(){const BB=NT.fN9M();var TB=xB(BB[0],BB[1]).slice();return NT.Bg8x(BB[0],4*BB[1],4),TB}function UB(){const BB=NT.X0AN();var TB=xB(BB[0],BB[1]).slice();return NT.Bg8x(BB[0],4*BB[1],4),TB}function FB(){const BB=NT.ZSBl();var TB=xB(BB[0],BB[1]).slice();return NT.Bg8x(BB[0],4*BB[1],4),TB}function KB(){return NT.tdPp()>>>0}function rB(){NT.LTQK()}function IB(){let BB,TB;try{const dB=NT.xZUQ();return BB=dB[0],TB=dB[1],eB(dB[0],dB[1])}finally{NT.Bg8x(BB,TB,1)}}function cB(BB){NT.Xh7o(CB(BB))}function SB(){return{__proto__:null,h3dK:{__proto__:null,k4aZ:function(BB,TB){return CB(Error(eB(BB,TB)))},kGv4:function(BB,TB){throw new Error(eB(BB,TB))},JmI5:function(BB){pT(BB).call()},BBwt:function(BB,TB){console.error(eB(BB,TB))},K970:function(){return performance.now()},KWa1:function(BB){DT(BB)}}}}Symbol.dispose&&(OB.prototype[Symbol.dispose]=OB.prototype.free);const PB="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((BB=>NT.mHKB(BB,1))),QB="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((BB=>NT.UIrT(BB,1))),RB="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((BB=>NT.FOkj(BB,1))),aB="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((BB=>NT.Mekz(BB,1))),ZB="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((BB=>NT.HvIW(BB,1))),XB="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((BB=>NT.QulG(BB,1))),WB="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((BB=>NT.plSl(BB,1))),hB="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((BB=>NT.U09M(BB,1)));function CB(BB){JT===lT.length&&lT.push(lT.length+1);const TB=JT;return JT=lT[TB],lT[TB]=BB,TB}function GB(BB,TB){if(!(BB instanceof TB))throw new Error(`expected instance of ${TB.name}`)}function qB(BB,TB){return BB>>>=0,bB().subarray(BB/8,BB/8+TB)}function xB(BB,TB){return BB>>>=0,dT().subarray(BB/4,BB/4+TB)}function jB(BB,TB){return BB>>>=0,yT().subarray(BB/1,BB/1+TB)}let AB=null;function bB(){return null!==AB&&0!==AB.byteLength||(AB=new Float64Array(NT.memory.buffer)),AB}let nB=null;function eB(BB,TB){return function(BB,TB){ET+=TB,ET>=HT&&(uT=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),uT.decode(),ET=TB);return uT.decode(yT().subarray(BB,BB+TB))}(BB>>>0,TB)}let BT=null;let TT=null;function dT(){return null!==TT&&0!==TT.byteLength||(TT=new Uint32Array(NT.memory.buffer)),TT}let VT=null;function yT(){return null!==VT&&0!==VT.byteLength||(VT=new Uint8Array(NT.memory.buffer)),VT}function pT(BB){return lT[BB]}let lT=new Array(1024).fill(void 0);lT.push(void 0,null,!0,!1);let JT=lT.length;function YT(BB){return void 0===BB||null===BB}function gT(BB,TB){const dB=TB(2*BB.length,2)>>>0;return(null!==BT&&0!==BT.byteLength||(BT=new Uint16Array(NT.memory.buffer)),BT).set(BB,dB/2),tT=BB.length,dB}function oT(BB,TB){const dB=TB(4*BB.length,4)>>>0;return dT().set(BB,dB/4),tT=BB.length,dB}function kT(BB,TB){const dB=TB(1*BB.length,1)>>>0;return yT().set(BB,dB/1),tT=BB.length,dB}function LT(BB,TB){const dB=TB(8*BB.length,8)>>>0;return bB().set(BB,dB/8),tT=BB.length,dB}function OT(BB,TB,dB){if(void 0===dB){const dB=vT.encode(BB),VB=TB(dB.length,1)>>>0;return yT().subarray(VB,VB+dB.length).set(dB),tT=dB.length,VB}let VB=BB.length,yB=TB(VB,1)>>>0;const pB=yT();let lB=0;for(;lB<VB;lB++){const TB=BB.charCodeAt(lB);if(TB>127)break;pB[yB+lB]=TB}if(lB!==VB){0!==lB&&(BB=BB.slice(lB)),yB=dB(yB,VB,VB=lB+3*BB.length,1)>>>0;const TB=yT().subarray(yB+lB,yB+VB);lB+=vT.encodeInto(BB,TB).written,yB=dB(yB,VB,lB,1)>>>0}return tT=lB,yB}function DT(BB){const TB=pT(BB);return function(BB){BB<1028||(lT[BB]=JT,JT=BB)}(BB),TB}let uT=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});uT.decode();const HT=2146435072;let ET=0;const vT=new TextEncoder;"encodeInto"in vT||(vT.encodeInto=function(BB,TB){const dB=vT.encode(BB);return TB.set(dB),{read:BB.length,written:dB.length}});let mT,iT,NT,tT=0;function fT(BB,TB){return iT=BB,NT=BB.exports,mT=TB,AB=null,nB=null,BT=null,TT=null,VT=null,NT.ZCFe(),NT}function sT(BB){if(void 0!==NT)return NT;void 0!==BB&&(Object.getPrototypeOf(BB)===Object.prototype?({module:BB}=BB):console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const TB=SB();BB instanceof WebAssembly.Module||(BB=new WebAssembly.Module(BB));return fT(new WebAssembly.Instance(BB,TB),BB)}async function MT(BB){if(void 0!==NT)return NT;void 0!==BB&&(Object.getPrototypeOf(BB)===Object.prototype?({module_or_path:BB}=BB):console.warn("using deprecated parameters for the initialization function; pass a single object instead"));const TB=SB();("string"===typeof BB||"function"===typeof Request&&BB instanceof Request||"function"===typeof URL&&BB instanceof URL)&&(BB=fetch(BB));const{instance:dB,module:VB}=await async function(BB,TB){if("function"===typeof Response&&BB instanceof Response){if(!BB.ok)throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching \'${BB.url}\'`);if("function"===typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(BB,TB)}catch(dB){if(!function(BB){switch(BB){case"basic":case"cors":case"default":return!0}return!1}(BB.type)||"application/wasm"===BB.headers.get("Content-Type"))throw dB;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n",dB)}const VB=await BB.arrayBuffer();return await WebAssembly.instantiate(VB,TB)}{const dB=await WebAssembly.instantiate(BB,TB);return dB instanceof WebAssembly.Instance?{instance:dB,module:BB}:dB}}(await BB,TB);return fT(dB,VB)}const zT=Reflect.apply,wT=Object.getOwnPropertyDescriptor,UT=Object.getPrototypeOf,FT=Promise,KT=Object.getPrototypeOf((async()=>{})()).then;function rT(BB){return new FT(BB)}function IT(BB,TB,dB){let VB;try{zT(KT,BB,[TB,dB]),VB=!0}catch{VB=!1}VB||BB.then(TB,dB)}function cT(BB,TB){const dB=wT(BB,TB);return dB?.get?zT(dB.get,BB,[]):dB?.value}const ST="undefined"===typeof WebAssembly?void 0:WebAssembly.Module.prototype,PT="undefined"===typeof WebAssembly?void 0:WebAssembly.Instance.prototype,QT=[["to",Object.prototype,"then",!0],["ta",ArrayBuffer.prototype,"then",!0],["tm",ST,"then",!0],["ti",PT,"then",!0],["pt",Promise.prototype,"then",!1],["pk",Promise.prototype,"constructor",!1],["pg",globalThis,"Promise",!1],["pr",Promise,"race",!1],["pa",Promise,"all",!1]],RT=QT.map((BB=>{let[,TB,dB,VB]=BB;if(void 0!==TB)return VB?UT(TB):cT(TB,dB)})),aT=QT.map((BB=>{let[TB]=BB;return`wh:${TB}`}));function ZT(){for(let BB=0;BB<QT.length;BB++){const[TB,dB,VB,yB]=QT[BB];let pB;try{pB=void 0===dB||(yB?void 0===wT(dB,VB)&&UT(dB)===RT[BB]:cT(dB,VB)===RT[BB])}catch{pB=!1}if(!pB)return`wh:${TB}`}return null}let XT=null;class WT extends Error{retryable;constructor(BB,TB,dB){super(BB,dB),this.retryable=TB}}class hT extends WT{status;constructor(BB,TB){super(BB,TB>=500),this.status=TB}}class CT extends WT{}class GT extends Error{}function qT(BB){return BB instanceof GT?"integrity":BB instanceof CT?"timeout":BB instanceof WT?"fetch":"compile"}const xT=15e3,jT=[1e3,3e3],AT=globalThis.crypto?.subtle,bT=AT?.digest,nT=!0===globalThis.isSecureContext,eT=Reflect.apply,Bd=Object.defineProperty,Td="undefined"===typeof Response?void 0:Response.prototype.arrayBuffer,dd=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,Vd="undefined"===typeof Response?void 0:Response.prototype.clone,yd="undefined"===typeof Response?void 0:Object.getOwnPropertyDescriptor(Response.prototype,"body")?.get,pd="undefined"===typeof Response?void 0:Object.getOwnPropertyDescriptor(Response.prototype,"type")?.get,ld="undefined"===typeof ReadableStream?void 0:ReadableStream.prototype.getReader,Jd="undefined"===typeof ReadableStreamDefaultReader?void 0:ReadableStreamDefaultReader.prototype.read,Yd=Uint8Array.prototype.set,gd=Uint8Array,od="undefined"===typeof fetch?void 0:fetch,kd="undefined"===typeof WebAssembly?void 0:WebAssembly,Ld=kd?.compile,Od=kd?.compileStreaming,Dd=Array.from({length:256},((BB,TB)=>TB.toString(16).padStart(2,"0"))),ud=new Set;function Hd(BB){return ud.has(BB.href)}async function Ed(BB,TB,dB){if(XT??=ZT(),!AT&&!nT)return;let VB="";try{const BB=await eT(bT,AT,["SHA-256",TB]),dB=eT(dd,BB,[]),yB=new gd(BB);for(let TB=0;TB<dB;TB++)VB+=Dd[yB[TB]]}catch{}if(VB!==dB.sha256)throw VB&&dB.onMismatch(),new GT(VB?`${BB} is not the module this build ships`:`${BB} could not be hashed`)}function vd(BB,TB){let{hideThen:dB=!1,priority:VB}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const yB={useLoadedFetch:!1};return Nd((()=>td(BB.href,((pB,lB,JB)=>async function(BB,TB,dB,VB,yB,pB,lB,JB){let YB,gB,oB,kB;try{const dB=void 0===JB?{signal:TB}:{signal:TB,priority:JB};YB=await(pB.useLoadedFetch&&od?eT(od,globalThis,[BB,dB]):fetch(BB,dB))}catch(NB){throw wd(`Fetching ${BB} failed`,NB,TB)}try{gB=YB.ok,oB=YB.status,kB=YB.headers.get("Content-Type")}catch(NB){throw pB.useLoadedFetch=!0,wd(`Reading ${BB}\'s response failed`,NB,TB)}if(!gB)throw new hT(`Fetching ${BB} failed: HTTP ${oB}`,oB);dB();const LB=zd(YB),OB=null!==LB,DB=OB&&void 0!==yB&&function(BB){return void 0!==pd&&"default"===eT(pd,BB,[])}(YB),uB="application/wasm"===kB?.trim().toLowerCase(),HB=OB&&!DB&&uB,EB=HB&&(!lB||function(BB){try{return md(BB),!0}catch{return!1}}(YB)),vB=LB??function(BB){try{const TB=BB.clone();return eT(yd,TB,[]),TB}catch{return null}}(YB),mB=EB&&void 0!==yB?sd(fd(zd(YB),!0)):null;vB?function(BB,TB,dB){const VB=yd?eT(yd,BB,[]):BB.body;if(!VB)return void dB();const yB=ld?eT(ld,VB,[]):VB.getReader(),pB=()=>{IT(Jd?eT(Jd,yB,[]):yB.read(),(BB=>{BB.done?dB():(TB(),pB())}),dB)};pB()}(vB,dB,VB):VB();if(!EB){const dB=DB&&uB;let VB;dB?console.warn(`${BB} came in a constructed Response, not a fetched one, so it compiles without streaming`):HB?console.warn(`${BB} came in a Response that takes no own properties, so it compiles without streaming`):OB&&console.warn(`${BB} was served as ${kB}, not application/wasm, so it compiles without streaming`);try{VB=function(BB){const TB=new gd(eT(dd,BB,[]));return eT(Yd,TB,[new gd(BB)]),TB}(await fd(YB,OB))}catch(NB){throw OB||(pB.useLoadedFetch=!0),wd(`Downloading ${BB} failed`,NB,TB)}const lB=await function(BB){return eT(Ld,kd,[BB])}(VB);return void 0!==yB&&await Ed(BB,VB,yB),dB&&ud.add(BB),lB}let iB;try{iB=await Md(YB)}catch(NB){if(TB.aborted||NB instanceof TypeError)throw wd(`Downloading ${BB} failed`,NB,TB);throw NB}if(mB&&void 0!==yB){let dB;try{dB=new gd(await mB)}catch(NB){throw wd(`Downloading ${BB} failed: its copy for checking broke off`,NB,TB)}await Ed(BB,dB,yB)}return iB}(BB.href,pB,lB,JB,TB,yB,dB,VB)))))}function md(BB){return Bd(BB,"then",{__proto__:null,value:void 0}),BB}function id(BB){let{spare:TB=0,priority:dB="auto"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const VB="string"===typeof BB?BB:BB.href;return Nd((()=>td(VB,((BB,yB,pB)=>async function(BB,TB,dB,VB,yB,pB){let lB;try{lB=await fetch(BB,{signal:TB,priority:pB})}catch(gB){throw wd(`Fetching ${BB} failed`,gB,TB)}if(!lB.ok)throw new hT(`Fetching ${BB} failed: HTTP ${lB.status}`,lB.status);if(dB(),null===lB.body){let dB;VB();try{dB=await lB.arrayBuffer()}catch(gB){throw wd(`Downloading ${BB} failed`,gB,TB)}const pB=new Uint8Array(yB+dB.byteLength);return pB.set(new Uint8Array(dB),yB),pB}const JB=lB.body.getReader(),YB=[];for(;;){let pB;try{pB=await JB.read()}catch(gB){throw wd(`Downloading ${BB} failed`,gB,TB)}if(pB.done)return VB(),Ud(YB,yB);YB.push(pB.value),dB()}}(VB,BB,yB,pB,TB,dB)))))}async function Nd(BB){for(let dB=0;;dB++)try{return await BB()}catch(TB){const BB=jT[dB];if(!(TB instanceof WT)||!TB.retryable||void 0===BB)throw TB;console.warn(`${TB.message}, retrying in ${BB/1e3} s`),await rT((TB=>{setTimeout(TB,BB)}))}}async function td(BB,TB){const dB=new AbortController;let VB,yB=()=>{};const pB=rT(((BB,TB)=>{yB=TB})),lB=()=>{clearTimeout(VB),VB=setTimeout((()=>{yB(new CT(`Downloading ${BB} stalled: nothing arrived for ${xT/1e3} s`,!0)),dB.abort()}),xT)},JB=()=>{clearTimeout(VB)};lB();try{return await(YB=[TB(dB.signal,lB,JB),pB],rT(((BB,TB)=>{for(let dB=0;dB<YB.length;dB++)IT(YB[dB],BB,TB)})))}finally{clearTimeout(VB)}var YB}function fd(BB,TB){return TB&&Td?eT(Td,BB,[]):BB.arrayBuffer()}function sd(BB){return IT(BB,(()=>{}),(()=>{})),BB}function Md(BB){return eT(Od,kd,[BB])}function zd(BB){if(!Vd)return BB.clone();try{return eT(Vd,BB,[])}catch{return null}}function wd(BB,TB,dB){return dB.aborted?TB:new WT(`${BB}: ${TB instanceof Error?TB.message:String(TB)}`,!0,{cause:TB})}function Ud(BB){let TB=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,dB=TB;for(const pB of BB)dB+=pB.length;const VB=new Uint8Array(dB);let yB=TB;for(const pB of BB)VB.set(pB,yB),yB+=pB.length;return VB}let Fd="unloaded",Kd=null,rd=null,Id=null,cd=null;const Sd=new Set,Pd=new Set;let Qd=!1,Rd=null,ad=null,Zd=null,Xd=!1,Wd=0;function hd(){return"ready"===Fd}function Cd(){return Fd}function Gd(){return Kd}const qd={fetch:"fetch_failed",timeout:"fetch_failed",integrity:"fetch_failed",compile:"compile_failed",instantiate:"instantiate_failed",call:"call_failed"};function xd(){return null===Kd?null:qd[Kd]}function jd(){return rd}function Ad(){return null===Kd?"not failed":`${Kd}: ${(BB=rd)instanceof Error?`${BB.name}: ${BB.message}`:String(BB)}`;var BB}function bd(){if(!hd())throw new Error(`Bloxd wasm is not ready (${Cd()}): check isBloxdWasmReady() first`);return Rd}function nd(){return hd()?ad:null}function ed(){return hd()?Id:null}function BV(){return Zd}function TV(){if(!cd||0===Wd)return 0;const BB=new Uint32Array(cd.buffer,Wd,1),TB=BB[0]??0;return BB[0]=0,TB}function dV(){if(!cd)throw new Error("Bloxd wasm has not been instantiated");return cd}function VV(BB){"failed"!==Fd&&JV(BB,"call")}function yV(){return rd instanceof WT&&rd.retryable}function pV(){return"unloaded"===Fd&&(Fd="loading",!0)}function lV(BB,TB,dB,VB){ad=BB,Rd=TB,Id=dB,cd=VB.memory;const{Mk:yB}=TB;Wd="function"===typeof yB?yB():0,Fd="ready",function(){if(Xd)return;Xd=!0;const BB=console.error;console.error=function(){for(var TB=arguments.length,dB=new Array(TB),VB=0;VB<TB;VB++)dB[VB]=arguments[VB];const[yB]=dB;"string"===typeof yB&&yB.startsWith("panicked at")&&(Zd=yB,TV()),BB.apply(console,dB)}}()}function JV(BB,TB){Fd="failed",Kd=TB,rd=BB,console.error(`Bloxd wasm failed (${TB}):`,BB);const dB=[...Sd];Sd.clear();for(const VB of dB)YV(VB)}function YV(BB){try{BB()}catch(TB){console.error("A Bloxd wasm failure listener threw:",TB)}}function gV(BB){return"failed"===Fd?(YV(BB),()=>{}):(Sd.add(BB),()=>{Sd.delete(BB)})}function oV(BB){return Qd||(bd(),Rd.Uk(kV),Qd=!0),Pd.add(BB),()=>{Pd.delete(BB)}}function kV(){const BB=dV().buffer;for(const dB of Pd)try{dB(BB)}catch(TB){console.error("A Bloxd wasm memory growth listener threw:",TB)}}const LV={bloxd_wasm:()=>"6a2efd5680223ac4664cc3045620a185da94b2f4e06849c44e38e480fc80e38a",bloxd_wasm_client:()=>"607784131ab158c610f964eeccd0a0852f74d8ce3d4f4aee969d2f319a80e3b6",bloxd_wasm_workers:()=>"d5276c08ec0e736252a42b7c12c1091036eec7cc17105f167a56c574e34a0505",bloxd_wasm_models:()=>"92f9285c30a7dd1629d525045b29e9aca6c3d567d620b4834fec4760fd172ddc",bloxd_wasm_webgpu:()=>"ed656d46a24419edcd62f7bc46fd9a190039bf0f388edff699daa513cf32f6d2",bloxd_wasm_webgl:()=>"52116128612eeabf26c6510c105a72c4a8c70bb8b756449209899fb860a93f15",bloxd_wasm_webgl1:()=>"3697a90b61a47ddbbdceb28b1c9caaf73e71aabf414852b8293dc48cb3f6a6a8",bloxd_wasm_replay:()=>"5464460b78e15b4bb176525399accbb59f863e7383feb54312b177c696166e48",bloxd_wasm_recorder:()=>"e1fdcb56336c3bc38215a981e4378ac3821b8912419bc7fd948eb1da353324ba",bloxd_wasm_anim:()=>"74e56eee078a428190364a7d35938aac7810b6b32140848c6b994c19e70e3042",bloxd_wasm_textures:()=>"4b25ea5144f7ce6b7af54af6beda3d49671ed61aae27771d204b13971136dce5",bloxd_wasm_shader_pack:()=>"4746bfad07ac1f13f98ece970e8e224d9432f9561a8a4390c6f598c4e17052f5"},OV=Function.prototype.toString,DV=RegExp.prototype.exec,uV=Reflect.apply,HV=Function.prototype.call,EV=Function.prototype.apply,vV=Function.prototype.bind,mV=Object.defineProperty,iV=Uint8Array;let NV,tV;try{NV=globalThis.crypto,tV=void 0===NV||null===NV?void 0:NV.getRandomValues}catch{}const fV="bloxdBindApply";let sV;try{const BB=HV;mV(BB,fV,{__proto__:null,value:vV,configurable:!0});try{sV=BB[fV](EV)}finally{delete BB[fV]}}catch{}const MV=16,zV=256,wV=0,UV=1,FV=2,KV=3;let rV,IV=wV,cV=uV,SV=0;function PV(BB,TB){return BB===`function ${TB}() { [native code] }`||BB===`function ${TB}() {\\n    [native code]\\n}`}const QV=0,RV=1,aV=2;let ZV=QV;function XV(BB,TB,dB){if(ZV===aV&&IV===UV&&!function(){const BB=rV;return SV>=zV&&(cV(tV,NV,[BB]),SV=0),BB[SV++]<256/MV}())return function(BB,TB,dB){return cV(BB,TB,dB??0)}(...arguments);if(ZV===QV||IV===FV)return uV(BB,TB,dB);let VB;ZV=QV;try{IV===wV&&(IV=KV,IV=function(){const BB=uV(OV,uV,[]);if(PV(BB,"apply"))return FV;if(null===uV(DV,/\\(\\.\\.\\.arguments\\)/,[BB])&&null===uV(DV,/^function\\s*\\(\\.\\.\\.[\\w$]+\\)/,[BB]))return FV;if("function"!==typeof sV||"function"!==typeof HV||"function"!==typeof EV||"function"!==typeof vV||"function"!==typeof mV||"function"!==typeof tV||"function"!==typeof iV||!PV(uV(OV,HV,[]),"call")||!PV(uV(OV,EV,[]),"apply")||!PV(uV(OV,vV,[]),"bind")||!PV(uV(OV,mV,[]),"defineProperty")||!PV(uV(OV,tV,[]),"getRandomValues")||!PV(uV(OV,iV,[]),"Uint8Array"))return FV;const TB=sV,dB={},VB=function(BB){return this===dB&&BB===dB};try{if(!0!==TB(VB,dB,[dB]))return FV;const BB=new iV(zV);TB(tV,NV,[BB]),rV=BB}catch{return FV}return cV=TB,UV}()),VB=uV(BB,TB,dB)}catch(yB){throw IV=FV,yB}return ZV=aV,VB}let WV=uV;function hV(){return(WV===uV?0:3)+ZV}function CV(){const BB=hV();return WV=uV,BB}function GV(BB){WV=BB>=3?XV:uV,ZV=BB%3}const qV=Function.prototype.toString,xV=Object.getOwnPropertyDescriptor,jV=RegExp.prototype.exec,AV=Object.prototype.hasOwnProperty,bV=Set.prototype.has,nV=Reflect.get,eV=Object.getPrototypeOf,By="undefined"===typeof WebAssembly?void 0:WebAssembly;function Ty(BB,TB,dB){return{code:BB,holder:TB,key:dB,...arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},native:new RegExp(`^function (get )?${dB}\\\\(\\\\) \\\\{\\\\s*\\\\[native code\\\\]\\\\s*\\\\}$`)}}function dy(){return By}const Vy=By?.Instance.prototype,yy=By?.Memory.prototype;function py(){return yy}let ly,Jy;try{const BB=globalThis.crypto,TB=BB?.subtle;ly=BB?eV(BB):void 0,Jy=TB?eV(TB):void 0}catch{}const Yy=[Ty("in",dy,"instantiate",{tier:"weighted",onNamespace:!0}),Ty("is",dy,"instantiateStreaming",{tier:"weighted",onNamespace:!0}),Ty("co",dy,"compile",{tier:"weighted",onNamespace:!0}),Ty("cs",dy,"compileStreaming",{tier:"weighted",onNamespace:!0}),Ty("mo",dy,"Module",{isConstructor:!0,tier:"punished",onNamespace:!0}),Ty("it",dy,"Instance",{isConstructor:!0,tier:"punished",onNamespace:!0}),Ty("me",dy,"Memory",{isConstructor:!0,tier:"punished",onNamespace:!0}),Ty("ex",(function(){return Vy}),"exports",{isGetter:!0,tier:"punished"}),Ty("bu",py,"buffer",{isGetter:!0,tier:"punished"}),Ty("gr",py,"grow",{tier:"punished"}),Ty("rc",(function(){return"undefined"===typeof Response?void 0:Response.prototype}),"clone"),Ty("cr",(function(){return globalThis}),"crypto",{isGetter:!0,tier:"punished",inSecureContext:!0}),Ty("su",(function(){return ly}),"subtle",{isGetter:!0,tier:"punished",inSecureContext:!0}),Ty("dg",(function(){return Jy}),"digest",{tier:"punished",inSecureContext:!0})];function gy(BB){let TB;try{const dB=nV(globalThis,BB);TB="function"===typeof dB?dB.prototype:void 0}catch{}return()=>TB}function oy(BB,TB,dB){return dB.map((dB=>Ty(BB,TB,dB)))}const ky=Ty("rx",gy("HTMLCanvasElement"),"getContext"),Ly=["createShader","shaderSource","compileShader","createProgram","linkProgram","useProgram","drawArrays","drawElements","depthFunc","depthMask","enable","disable","blendFuncSeparate","colorMask"],Oy={webgpu:[...oy("gd",gy("GPUDevice"),["createShaderModule","createRenderPipeline","createCommandEncoder"]),...oy("gq",gy("GPUQueue"),["submit","writeBuffer"]),...oy("ge",gy("GPUCommandEncoder"),["beginRenderPass","finish"]),...oy("gp",gy("GPURenderPassEncoder"),["setPipeline","setBindGroup","draw","drawIndexed","drawIndirect","drawIndexedIndirect","executeBundles"]),ky],webgl:[...oy("g2",gy("WebGL2RenderingContext"),[...Ly,"drawArraysInstanced","drawElementsInstanced"]),ky],webgl1:[...oy("g1",gy("WebGLRenderingContext"),Ly),ky]};let Dy=[];function uy(BB){let{code:TB,key:dB}=BB;return`wh:${TB}:${dB}`}const Hy=new Set(Object.values(Oy).flatMap((BB=>BB.map(uy)))),Ey=uy(ky);function vy(BB){Dy=Oy[BB]}function my(BB){const TB=CV();try{return WV(bV,Hy,[BB])}finally{GV(TB)}}function iy(BB){return new Set(Yy.filter((TB=>TB.tier===BB)).map((BB=>`wh:${BB.code}`)))}const Ny=iy("punished"),ty=!1,fy=new Set(aT),sy=iy("weighted");function My(BB){const TB=CV();try{return zy(BB)}finally{GV(TB)}}function zy(BB){return WV(bV,sy,[BB])}function wy(BB){const TB=CV();try{return Uy(BB)}finally{GV(TB)}}function Uy(BB){return WV(bV,fy,[BB])}function Fy(BB){return"wb"===BB||WV(bV,Ny,[BB])}function Ky(BB){const TB=CV();try{return Fy(BB)||Uy(BB)}finally{GV(TB)}}function ry(BB){const TB=CV();try{return"wb"===BB||ty&&Fy(BB)}finally{GV(TB)}}function Iy(BB,TB){let{isConstructor:dB,native:VB}=TB;return"function"===typeof BB&&(!(!dB&&WV(AV,BB,["prototype"]))&&null!==WV(jV,VB,[WV(qV,BB,[])]))}function cy(BB,TB){return Iy(BB,Ty("",(()=>{}),TB,arguments.length>2&&void 0!==arguments[2]&&arguments[2]?{isConstructor:!0}:{}))}function Sy(BB){const{holder:TB,key:dB,isGetter:VB,onNamespace:yB,inSecureContext:pB}=BB,lB=TB(),JB=function(BB,TB){for(let dB=BB;void 0!==dB&&null!==dB;dB=eV(dB)){const BB=xV(dB,TB);if(BB)return BB}}(lB,dB);if(!JB)return!(pB&&!0===globalThis.isSecureContext);const YB=VB?JB.get:JB.value;if(!Iy(YB,BB))return!1;if(yB){const TB=globalThis.WebAssembly;if(TB!==lB&&null!==TB&&("object"===typeof TB||"function"===typeof TB)){const VB=nV(TB,dB);return VB===YB||void 0===VB||Iy(VB,BB)}}return!0}let Py=null,Qy=!1;function Ry(BB){try{return Sy(BB)}catch{return!1}}function ay(){if(void 0===By)return null;let BB=function(){try{return globalThis.WebAssembly===By}catch{return!1}}()?null:"wh:wa";const TB=TB=>{null!==TB&&(null===BB||Zy(TB)>Zy(BB))&&(BB=TB)};for(let dB=0;dB<Yy.length;dB++){const BB=Yy[dB];void 0===BB||Ry(BB)||TB(`wh:${BB.code}`)}TB(XT??ZT());for(let dB=0;dB<Dy.length;dB++){const BB=Dy[dB];void 0===BB||Ry(BB)||TB(uy(BB))}return BB}function Zy(BB){return Fy(BB)?5:zy(BB)?4:Uy(BB)?3:function(BB){return WV(bV,Hy,[BB])}(BB)?BB===Ey?0:1:2}function Xy(){const BB=function(){const BB=hV();return IV===wV||IV===UV?(WV=XV,ZV=RV):WV=uV,BB}();try{if(null===Py||!Fy(Py)){const BB=ay();(null===Py||null!==BB&&Zy(BB)>Zy(Py))&&(Py=BB)}}finally{GV(BB)}}function Wy(){Qy=!0}function hy(){if(Qy)return"wb";if((!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&Xy(),null!==Py)return Py;if(void 0===By)return"wn:unsupported";const BB=Gd();return null===BB?null:`wn:${BB}`}function Cy(BB){const TB=Object.prototype.hasOwnProperty.call(LV,BB)?LV[BB]():void 0;if(void 0!==TB)return{sha256:TB,onMismatch:Wy};throw new GT(`${BB} has no release digest, so this build refuses it`)}const Gy=".zst.bin",qy=Reflect.apply,xy=ArrayBuffer,jy="undefined"===typeof Response?void 0:Response,Ay="undefined"===typeof ReadableStream?void 0:ReadableStream,by=function(){let BB;void 0!==Ay&&new Ay({__proto__:null,start(TB){const{enqueue:dB,close:VB,error:yB}=Object.getPrototypeOf(TB);BB={enqueue:dB,close:VB,error:yB}}},{__proto__:null});return BB}(),ny=function(){try{return"undefined"!==typeof WebAssembly&&"function"===typeof WebAssembly.compileStreaming&&void 0!==by&&cy(jy,"Response",!0)&&cy(Ay,"ReadableStream",!0)&&cy(by.enqueue,"enqueue")&&cy(by.close,"close")&&cy(by.error,"error")&&cy(yd,"body")&&cy(ld,"getReader")&&cy(Jd,"read")}catch{return!1}}();let ey=!1;function Bp(BB){for(const TB of"bloxd_wasm_webgpu:4954899,bloxd_wasm_webgl:5221928,bloxd_wasm_webgl1:4725588,bloxd_wasm_workers:196044,bloxd_wasm_models:312534,bloxd_wasm_client:3648335"?.split(",")??[]){const[dB,VB]=TB.split(":");if(dB===BB){const BB=Number(VB);return Number.isInteger(BB)&&BB>0?BB:void 0}}}function Tp(BB){const TB=Bp(BB.name);if(void 0!==TB&&ny&&!ey)return{href:`${BB.url().href}${Gy}`,length:TB}}function dp(BB){return Tp(BB)?.href??BB.url().href}function Vp(BB,TB,VB){const yB=BB.url(),pB=Tp(BB);return void 0!==pB?async function(BB,TB,VB,yB){let{href:pB,length:lB}=TB;try{return await td(pB,((BB,TB,JB)=>async function(BB,TB,VB,yB,pB,lB,JB){const YB=new xy(TB);let gB;yp??=sd(dB.e(1).then((()=>dB(25))));try{gB=await fetch(BB,void 0===JB?{signal:VB}:{signal:VB,priority:JB})}catch(fB){throw new Error(`Fetching ${BB} failed: ${lp(fB)}`)}const{ok:oB,status:kB,body:LB}=function(BB,TB){try{const{ok:BB,status:dB}=TB;return{ok:BB,status:dB,body:qy(yd,TB,[])}}catch{throw new Error(`${BB} came in a response a page script made`)}}(BB,gB);if(!oB)throw new Error(`Fetching ${BB} failed: HTTP ${kB}`);yB();const{reader:OB,controller:DB,compiled:uB}=function(BB,TB){let dB;try{let BB;dB=qy(ld,TB,[]);const VB=new Ay({__proto__:null,start(TB){BB=TB}},{__proto__:null}),yB=new jy(VB,{__proto__:null,headers:{__proto__:null,"Content-Type":"application/wasm"}});return{reader:dB,controller:BB,compiled:sd(Md(md(yB)))}}catch(fB){throw void 0!==dB&&pp(dB),new Error(`${BB} could not be streamed into a compile: ${lp(fB)}`)}}(BB,LB),{enqueue:HB,close:EB,error:vB}=by,mB=BB=>{try{qy(vB,DB,[BB])}catch{}finally{pp(OB)}};VB.addEventListener("abort",(()=>{mB(new Error(`${BB} stalled`))}),{once:!0});let iB=!1;IT(uB,(()=>{}),(()=>{iB=!0,pp(OB)}));let NB=0;try{let dB;try{dB=await yp}catch(fB){throw ey=!0,new Error(`The zstd decoder did not load: ${lp(fB)}`)}const{ZstdFrameDecoder:VB}=dB,lB=new VB(TB);for(;!lB.done&&!iB;){let TB;try{TB=await qy(Jd,OB,[])}catch(fB){throw new Error(`Downloading ${BB} failed: ${lp(fB)}`)}if(TB.done||iB)break;yB();try{lB.push(TB.value)}catch(fB){throw new Error(`${BB} did not decode: ${lp(fB)}`)}const{output:dB,decoded:VB}=lB;if(null!==dB&&VB!==NB){qy(Yd,new gd(YB),[dB.subarray(NB,VB),NB]);try{qy(HB,DB,[new gd(YB,NB,VB-NB)])}catch{iB=!0}NB=VB}}if(pB(),iB)throw await uB,new Error(`${BB}\'s compile stopped reading before its end`);if(!lB.done)throw new Error(`${BB} ended before its module did`);pp(OB);try{qy(EB,DB,[])}catch{}}catch(fB){throw mB(fB),fB}const tB=await uB;void 0!==lB&&await Ed(BB,new gd(YB),{sha256:lB.sha256,onMismatch:()=>{}});return tB}(pB,lB,BB,TB,JB,VB,yB)))}catch(YB){console.warn(`${lp(YB)}: loading ${BB.href} instead`)}const JB=await vd(BB,VB,{hideThen:!0,priority:yB});return JB}(yB,pB,TB,VB):vd(yB,TB,{hideThen:void 0!==Bp(BB.name),priority:VB})}let yp=null;function pp(BB){try{sd(BB.cancel())}catch{}}function lp(BB){return BB instanceof Error?BB.message:String(BB)}let Jp=null,Yp=!1;function gp(BB,TB,dB){return null===Jp?Jp=op(BB,TB,dB?.priority):BB!==Jp.build?console.warn(`Bloxd wasm: ${BB.name} was asked for after ${Jp.build.name} started loading, which this thread keeps`):TB.name!==Jp.workers.name&&console.warn(`Bloxd wasm: ${TB.name} was asked for workers after ${Jp.workers.name}, which this thread keeps`),dB?.reloadFailedDownload&&!Yp&&yV()&&(Fd="unloaded",Kd=null,rd=null,1)&&(Yp=!0,Jp=op(Jp.build,Jp.workers)),Jp.loaded}function op(BB,TB,dB){const VB=async function(BB,TB){if(pV()){let VB;try{VB=await BB()}catch(dB){return JV(dB,qT(dB)),!1}try{lV(TB,TB.JD,VB.workerModule,await TB.init({module_or_path:VB.module}))}catch(dB){JV(dB,"instantiate")}}return hd()}((async()=>{Xy();const VB=Lp(BB,dB),yB=TB.name===BB.name?VB:Lp(TB,dB);var pB;await(pB=[VB,yB],rT(((BB,TB)=>{let dB=pB.length;if(0===dB)return void BB();const VB=()=>{dB--,0===dB&&BB()};for(let yB=0;yB<pB.length;yB++)IT(pB[yB],VB,TB)})));const lB=await VB,JB=await yB;return Xy(),{module:lB,workerModule:JB}}),BB);return{build:BB,workers:TB,loaded:VB}}async function kp(BB){return Lp(BB)}function Lp(BB,TB){return Vp(BB,Cy(BB.name),TB)}const Op={name:"bloxd_wasm",url:()=>new dB.U(dB(16)),init:MT,JD:VB};function Dp(){return gp(arguments.length>0&&void 0!==arguments[0]?arguments[0]:Op,arguments.length>1&&void 0!==arguments[1]?arguments[1]:Op,arguments.length>2?arguments[2]:void 0)}function Hp(BB){return function(BB,TB){let dB=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(pV()){let yB;try{yB=BB()}catch(VB){return JV(VB,qT(VB)),!1}try{lV(dB,TB,yB,TB.initSync({module:yB}))}catch(VB){JV(VB,"instantiate")}}return hd()}((()=>BB),VB,Op)}const Ep=["none","idle","now"];function vp(){const BB=()=>bd();return{memoryBytes:()=>dV().buffer.byteLength,reserveUpFront:TB=>BB().Ek(TB),reserveAhead:TB=>BB().Hk(TB),setCeiling:TB=>{BB().vk(TB)},lowWater:()=>Ep[BB().uk()]??"none",stats:()=>function(BB){const TB=new Uint32Array(dV().buffer,BB,17),dB=BB=>TB[BB]??0,VB=BB=>({upFront:dB(BB),ahead:dB(BB+1),onDemandInFrame:dB(BB+2),onDemand:dB(BB+3)});return{memoryBytes:dB(0),initialBytes:dB(1),liveBytes:dB(2),peakLiveBytes:dB(3),headroomBytes:dB(4),unusedBytes:dB(5),ceilingBytes:dB(6),reservesRefused:dB(7),grows:VB(8),grownBytes:VB(12),allocationsRefused:dB(16)}}(BB().mk()),takeBallast:()=>BB().ik(),takePressure:()=>BB().Nk()}}function mp(BB,TB){return new Error(`${BB}: ${TB instanceof Error?`${TB.name}: ${TB.message}`:String(TB)}`,{cause:TB})}function ip(){return new URL(new dB.U(dB(22)).href,globalThis.location?.href).href}let Np=null;function tp(){return Np??=(async()=>vd(new URL(ip()),Cy("bloxd_wasm_textures")))().catch((BB=>{throw mp(qT(BB),BB)})),Np}function fp(BB,TB,dB){return new BB(dV().buffer,TB,dB)}class sp{type;ptr;length;currentView;constructor(BB,TB,dB){this.type=BB,this.ptr=TB,this.length=dB,this.currentView=fp(BB,TB,dB)}view(){return this.currentView.length!==this.length&&(this.currentView=fp(this.type,this.ptr,this.length)),this.currentView}}const Mp=15;function zp(BB,TB,dB){return!!(BB&&null!==dB&&TB>=dB)}const wp=27;let Up=0;class Fp{constructor(BB){this.runs=BB,this.layers=null,this.serial=Up,Up=(Up+1)%4294967295}from(BB,TB){return 0===BB?[0,0]:(this.layers??=function(BB,TB){const dB=TB*TB,VB=new Uint32Array(2*TB);let yB=1,pB=0,lB=0;for(;lB<BB.length&&yB<TB;){const JB=lB;let YB=0,gB=0;for(;lB<BB.length&&BB[lB]>=128;)YB+=(127&BB[lB++])<<gB,gB+=7;for(YB+=BB[lB++]<<gB;BB[lB]>=128;)lB++;if(lB++,!(YB<=0))for(pB+=YB;yB<TB&&yB*dB<pB;)VB[2*yB]=JB,VB[2*yB+1]=pB-YB,yB++}for(;yB<TB;yB++)VB[2*yB]=BB.length,VB[2*yB+1]=pB;return VB}(this.runs,TB),[this.layers[2*BB],this.layers[2*BB+1]])}to(BB,TB){const{runs:dB}=this;if(BB>=TB)return dB.length;const[VB,yB]=this.from(BB,TB);if(yB===BB*TB*TB)return VB;let pB=VB;for(let lB=0;lB<2&&pB<dB.length;pB++)dB[pB]<128&&lB++;return pB}}function Kp(BB,TB,dB,VB){const yB=VB*VB,pB=VB-1;let lB;lB=TB?new Uint16Array(yB):new Uint8Array(yB);const JB=lB,YB=BB;if(0===dB)JB.set(YB.subarray(0,yB));else if(1===dB)JB.set(YB.subarray(pB*yB,VB*yB));else if(2===dB||3===dB){const BB=2===dB?0:pB;for(let TB=0;TB<VB;TB++){const dB=TB*yB+BB*VB;JB.set(YB.subarray(dB,dB+VB),TB*VB)}}else{const TB=4===dB?0:pB;for(let dB=0;dB<VB;dB++){const pB=dB*yB+TB,JB=dB*VB;for(let TB=0;TB<VB;TB++)lB[JB+TB]=BB[pB+TB*VB]}}return lB}let rp=function(BB){return BB[BB.Corner=0]="Corner",BB[BB.EdgeX=1]="EdgeX",BB[BB.EdgeY=2]="EdgeY",BB[BB.EdgeZ=3]="EdgeZ",BB[BB.FaceX=4]="FaceX",BB[BB.FaceY=5]="FaceY",BB[BB.FaceZ=6]="FaceZ",BB[BB.Center=7]="Center",BB}({});rp.Corner,rp.EdgeZ,rp.Corner,rp.EdgeY,rp.FaceX,rp.EdgeY,rp.Corner,rp.EdgeZ,rp.Corner,rp.EdgeX,rp.FaceY,rp.EdgeX,rp.FaceZ,rp.Center,rp.FaceZ,rp.EdgeX,rp.FaceY,rp.EdgeX,rp.Corner,rp.EdgeZ,rp.Corner,rp.EdgeY,rp.FaceX,rp.EdgeY,rp.Corner,rp.EdgeZ,rp.Corner;const Ip=[22,4,16,10,14,12],cp=Array.from({length:27},((BB,TB)=>[Math.floor(TB/9)-1,Math.floor(TB/3)%3-1,TB%3-1]));function Sp(BB){return cp[BB]}function Pp(BB,TB,dB){return BB<0?[dB-TB,dB]:BB>0?[0,TB]:[0,dB]}const Qp=/^alloc_failed (\\d+) bytes$/;class Rp{constructor(BB){this.chunkSizeCubed=BB,this.uint8=[],this.uint16=[]}put(BB){const TB=this.chunkSizeCubed,dB=2*this.chunkSizeCubed;for(const VB of BB)VB.byteLength===TB&&this.uint8.length<Rp.MAX_SIZE?this.uint8.push(new Uint8Array(VB)):VB.byteLength===dB&&this.uint16.length<Rp.MAX_SIZE&&this.uint16.push(new Uint16Array(VB))}drain(){const BB=[...this.uint8,...this.uint16].map((BB=>BB.buffer));return this.uint8.length=0,this.uint16.length=0,BB}takeUint8(){var BB;return null!==(BB=this.uint8.pop())&&void 0!==BB?BB:new Uint8Array(this.chunkSizeCubed)}takeUint16(){var BB;return null!==(BB=this.uint16.pop())&&void 0!==BB?BB:new Uint16Array(this.chunkSizeCubed)}takeZeroedUint8(){const BB=this.takeUint8();return BB.fill(0),BB}}Rp.MAX_SIZE=16;function ap(BB,TB,dB,VB){return{emission:BB,skyEmission:Float64Array.from({length:TB.length},((BB,dB)=>{var VB;return null!==(VB=TB[dB])&&void 0!==VB?VB:0})),filters:Int32Array.from({length:dB.length},((BB,TB)=>{var VB;const yB=null!==(VB=dB[TB])&&void 0!==VB?VB:1;return yB<0?-1:Math.min(yB,15)})),opacity:Uint8Array.from({length:VB.length},((BB,TB)=>VB[TB]?1:0))}}new Map;function Zp(BB){return BB instanceof Error&&Object.getPrototypeOf(BB)===Error.prototype}class Xp extends RangeError{}class Wp extends Xp{constructor(BB){super(`alloc_failed ${BB} bytes`),this.bytes=BB}}function hp(BB){const TB=Qp.exec(BB);return TB?new Wp(Number(TB[1])):new Xp(BB)}function Cp(BB){return Zp(BB)&&Qp.test(BB.message)?hp(BB.message):BB}class Gp extends Error{constructor(BB){super(BB instanceof Error?BB.message:String(BB)),this.trap=BB}}const qp=["full","relit","relit-sky","unchanged"];function xp(BB){return Number.isInteger(BB)&&BB>=-2147483648&&BB<=2147483647}class jp extends Xp{constructor(BB,TB){super(TB),this.reason=BB}}class Ap{constructor(BB,TB,dB){this.engine=TB,this.lastLightPass="full",this.view=void 0,this.chunkSizeCubed=void 0,this.seedSize=void 0,this.lightU8=void 0,this.lightU16=void 0,this.seedRead=void 0,this.pool=void 0,this.view=BB.view,this.chunkSizeCubed=dB*dB*dB;const VB=dB+30;this.seedSize=VB*VB,this.pool=new Rp(this.chunkSizeCubed),this.lightU8=new BB.BufferView(Uint8Array,TB.qO(),this.chunkSizeCubed),this.lightU16=new BB.BufferView(Uint16Array,TB.GO(),this.chunkSizeCubed),this.seedRead=new BB.BufferView(Uint8Array,TB.BD(),this.seedSize)}returnBuffers(BB){this.pool.put(BB)}takeBuffers(){return this.pool.drain()}getZeroedFullChunkLightData(){return this.pool.takeZeroedUint8()}checkComputeInput(BB,TB,dB){if(BB.length<this.seedSize)throw new jp("seed_size",`WasmLightEngine sky seed grid holds ${BB.length} columns, not ${this.seedSize}`);if(!xp(dB)||null!==TB&&!xp(TB))throw new jp("chunk_j",`WasmLightEngine chunkJ ${dB} or highestChunkJ ${TB} is not a 32-bit integer`)}computeWritten(BB,TB,dB,VB,yB){this.checkComputeInput(TB,dB,VB);const{engine:pB,view:lB}=this;let JB;lB(Uint8Array,pB.TD(),this.seedSize).set(TB.subarray(0,this.seedSize));try{JB=pB.compute(BB,dB,VB,yB)}catch(gB){throw Cp(gB)}if(this.lastLightPass=qp[JB>>1],1&JB){const BB=this.pool.takeUint16();return BB.set(this.lightU16.view()),{uD:BB,isUint16:!0}}const YB=this.pool.takeUint8();return YB.set(this.lightU8.view()),{uD:YB,isUint16:!1}}skySeedColumnsRead(BB){return!!this.engine.eO()&&(BB.set(this.seedRead.view()),!0)}forgetKeptStates(BB){this.engine.QO(BB)}free(){this.engine.free()}}const bp=/^(0|[1-9]\\d*)$/;function np(BB){return"number"===typeof BB&&Number.isInteger(BB)&&BB>=0&&BB<=2147483647}new WeakMap,new WeakMap;const ep=new Uint32Array(0);const Bl=new ArrayBuffer(0);const Tl=[0,1,2,0,2,3];let dl=new Uint32Array(0);function Vl(BB){if(dl.length<6*BB){const TB=Math.max(BB,2*dl.length/6);dl=function(BB,TB){for(let dB=0;dB<TB;dB++){const TB=4*dB,VB=6*dB;for(let dB=0;dB<6;dB++)BB[VB+dB]=TB+Tl[dB]}return BB}(new Uint32Array(6*TB),TB)}return dl.slice(0,6*BB)}function yl(BB,TB,dB,VB){const yB=BB(Uint16Array,TB,4*dB);return VB?yB.slice():new Float32Array(yB)}const pl={computed:1,provided:2,zeroedFull:3},ll=4294967295,Jl=[1,2,4,3,0,pl.computed,pl.provided,pl.zeroedFull,4,8,16,32,64,128,256,8,0,1,2,3,4,1,2,0,1,2,3,2,0,1,16,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,4,8,16,15,8,ll,1,2],Yl=[],gl=[];function ol(BB){return Number.isInteger(BB)&&BB>=0&&BB<2**32}function kl(BB){try{return BB()}catch(TB){throw Zp(TB)?hp(TB.message):new Gp(TB)}}class Ll extends Ap{static create(BB,TB){!function(BB){const TB="function"===typeof BB.tk?kl((()=>BB.tk())):[];if(TB.length!==Jl.length||!Jl.every(((BB,dB)=>TB[dB]===BB)))throw new Xp(`@bloxd/wasm\'s mesher constants [${Array.from(TB).join()}] are not wasmChunkMesher.ts\'s [${Jl.join()}]`)}(BB.JD);const dB=function(BB){var TB,dB,VB;const yB=ap(BB.lightEmissionLookup,BB.skyLightEmissionLookup,BB.lightFilterLookup,BB.opacityLookup),pB=Int32Array.from({length:BB.blockFaceToMatId.length},((TB,dB)=>{const VB=BB.blockFaceToMatId[dB];if(void 0===VB)return-1;if(!np(VB))throw new Xp(`blockFaceToMatId[${dB}] is ${String(VB)}`);return VB}));let lB=0;const JB=[];for(const[DB,uB]of Object.entries(BB.matIdToTerrainId)){const BB=Number(DB);if(bp.test(DB)&&!(BB>32768)){if(void 0!==uB&&!np(uB))throw new Xp(`matIdToTerrainId[${DB}] is ${String(uB)}`);JB.push([BB,null!==uB&&void 0!==uB?uB:-1]),lB=Math.max(lB,BB+1)}}const YB=new Int32Array(lB).fill(-1);for(const[DB,uB]of JB)YB[DB]=uB;const gB=BB.matColorLookup,oB=new Float64Array(3*gB.length),kB=new Uint8Array(gB.length);for(let DB=0;DB<gB.length;DB++){const BB=gB[DB];if(BB){if(!Array.isArray(BB))throw new Xp(`matColorLookup[${DB}] is not an array`);kB[DB]=1;for(let TB=0;TB<3;TB++)oB[3*DB+TB]=Number(BB[TB])}}const LB=Int32Array.from(BB.faceGroupTerrainIds,(BB=>{if(!np(BB))throw new Xp(`faceGroupTerrainIds holds ${BB}`);return BB})),OB=Uint8Array.from(BB.faceGroupLayout,(BB=>{if(!Number.isInteger(BB)||BB<0||BB>5)throw new Xp(`faceGroupLayout holds ${BB}`);return BB}));return{FD:yB.emission,skyEmission:yB.skyEmission,KD:yB.filters,opacity:yB.opacity,solid:Uint8Array.from({length:BB.solidLookupArr.length},((TB,dB)=>BB.solidLookupArr[dB]?1:0)),blockFaceMat:pB,matTerrain:YB,matAtlasIndex:Float64Array.from({length:BB.atlasIndexLookup.length},((TB,dB)=>Number(BB.atlasIndexLookup[dB]))),matColour:oB,matColourSet:kB,materialBlockFlags:BB.materialBlockFlags,faceGroupTerrainIds:LB,faceGroupLayout:OB,visOccluders:null!==(TB=BB.visOccluders)&&void 0!==TB?TB:null,rD:Float64Array.from(BB.rD,Number),cD:Number(BB.cD),flags:(BB.doAO?1:0)|(BB.skipRevAo?2:0)|(BB.compactParts?4:0),UD:BB.UD,keptLightStates:null!==(dB=BB.keptLightStates)&&void 0!==dB?dB:4,decodedChunks:null!==(VB=BB.decodedChunks)&&void 0!==VB?VB:64}}(TB),VB=kl((()=>new BB.JD.lk(dB.FD,dB.skyEmission,dB.KD,dB.opacity,dB.solid,dB.blockFaceMat,dB.matTerrain,dB.matAtlasIndex,dB.matColour,dB.matColourSet,dB.materialBlockFlags,dB.faceGroupTerrainIds,dB.faceGroupLayout,dB.visOccluders,dB.rD,dB.cD,dB.flags,dB.UD,dB.keptLightStates,dB.decodedChunks)));try{return new Ll(BB,function(BB){return new Proxy(BB,{get(BB,TB){const dB=Reflect.get(BB,TB);return"function"!==typeof dB?dB:function(){for(var TB=arguments.length,VB=new Array(TB),yB=0;yB<TB;yB++)VB[yB]=arguments[yB];return kl((()=>dB.apply(BB,VB)))}}})}(VB),TB.UD,TB.compactParts)}catch(yB){throw yB instanceof Gp?gl.push(VB):VB.free(),yB}}constructor(BB,TB,dB,VB){super(BB,TB,dB),this.mesher=TB,this.compactParts=VB,this.lastComputeKind="wasm",this.lastComputeMs=0,this.UD=void 0,this.hoodStarts=new Uint32Array(wp),this.hoodSerials=new Uint32Array(wp),this.hoodEnds=new Uint32Array(wp),this.hoodFrom=new Uint32Array(wp),this.UD=dB}loadHood(BB,TB){const{mesher:dB,view:VB,UD:yB,hoodSerials:pB,hoodStarts:lB,hoodEnds:JB,hoodFrom:YB}=this;for(let uB=0;uB<wp;uB++){var gB,oB;pB[uB]=null!==(gB=null===(oB=BB[uB])||void 0===oB?void 0:oB.serial)&&void 0!==gB?gB:ll}const kB=dB.xO(pB,TB);YB.fill(ll);let LB=0;for(let uB=0;uB<wp;uB++){const dB=BB[uB];if(dB&&(1===kB[uB]||2===kB[uB])){const[BB,VB]=1===kB[uB]?Pp(Sp(uB)[0],TB,yB):[0,yB],[pB,JB]=dB.from(BB,yB);lB[uB]=pB,YB[uB]=JB,LB+=dB.to(VB,yB)-pB}JB[uB]=LB}const OB=VB(Uint8Array,dB.ZO(LB),LB);let DB=0;for(let uB=0;uB<wp;uB++)YB[uB]!==ll&&OB.set(BB[uB].runs.subarray(lB[uB],lB[uB]+JB[uB]-DB),DB),DB=JB[uB];dB.PO(JB,YB,TB)}computeFromNeighbours(BB,TB,dB,VB,yB,pB){if(BB!==Yl)throw new Error("WasmChunkMesher lights the chunks loadHood loaded: pass LOADED_HOOD");const lB=performance.now(),JB=this.computeWritten(TB,dB,VB,yB,pB);return this.lastComputeMs=performance.now()-lB,JB}mesh(BB){const TB=this.checkJob(BB),{mesher:dB,view:VB}=this,yB=this.writeAndMesh(BB,TB),pB=dB.aO();return function(BB,TB,dB,VB,yB){const pB=TB[1];if(1&TB[0]){const dB=[];for(let yB=0;yB<pB;yB++){const pB=TB.subarray(8+2*yB);dB.push(yl(BB,pB[0],pB[1],VB))}return{lightOnly:!0,lightDataArrays:dB}}const lB=[],JB=0!==(2&TB[0])?[]:null;for(let oB=0;oB<pB;oB++){const yB=TB.subarray(8+16*oB),pB=-1===(0|yB[0])?void 0:0|yB[0],YB=yB[1],gB=yB[2],kB=0!==(8&YB),LB={vertices:kB?Bl:BB(Uint8Array,yB[3],yB[4]).slice().buffer,usesAtlas:0!==(1&YB),indices:VB?ep:Vl(gB),uD:2&YB?yl(BB,yB[5],gB,VB):null,aD:dB,terrainID:pB,faceGroups:16&YB?BB(Int32Array,yB[7],15).slice():null};4&YB&&(LB.packedVertices=kB?BB(Uint32Array,yB[6],3*gB).slice():void 0),kB&&(LB.vertexCount=4*gB),lB.push(LB),JB&&JB.push({terrainID:pB,numFaces:gB,is:BB(Int16Array,yB[8],gB).slice(),js:BB(Int16Array,yB[9],gB).slice(),ks:BB(Int16Array,yB[10],gB).slice(),wids:BB(Int16Array,yB[11],gB).slice(),hts:BB(Int16Array,yB[12],gB).slice(),EB:BB(Uint8Array,yB[13],gB).slice(),diagonals:BB(Uint8Array,yB[14],gB).slice()})}const YB={lightOnly:!1,vertexDataInfo:lB,faceLayout:JB,buildMs:performance.now()-yB},gB=TB[2];return 0!==gB&&(YB.visNegNeighbours=TB[3]),gB>1&&(YB.visGraphs=3===gB?BB(Uint16Array,TB[4],8).slice():null),YB}(VB,VB(Uint32Array,dB.jO(),yB),BB.chunk.aD,this.compactParts,pB)}writeAndMesh(BB,TB){const{mesher:dB,view:VB,UD:yB}=this;VB(Uint16Array,dB.dD(),yB).set(BB.chunk.cO);const{light:pB}=BB;if(pB&&"provided"===pB.kind){const BB=dB.nO(pB.isUint16);pB.isUint16?VB(Uint16Array,BB,this.chunkSizeCubed).set(pB.data):VB(Uint8Array,BB,this.chunkSizeCubed).set(pB.data)}let lB=0,JB=0;for(let oB=0;oB<6;oB++){var YB,gB;const TB=null===(YB=BB.neighbourLightBorders)||void 0===YB?void 0:YB[oB];TB&&(VB(Uint16Array,dB.SO(oB),yB*yB).set(TB),lB|=1<<oB),null!==(gB=BB.neighbourLightIsUint16)&&void 0!==gB&&gB[oB]&&(JB|=1<<oB)}return 32&TB&&this.writeLayout(BB.lightOnlyLayout),dB.mesh(TB,BB.neighboursBitmask,BB.neighbourOpenSkyFaces,lB,JB)}checkJob(BB){const{chunk:TB,light:dB}=BB,VB=this.UD;if(TB.cO.length!==VB)throw new Xp(`WasmChunkMesher needs a _wholeLayerVoxel of ${VB}`);if(!ol(BB.neighboursBitmask)||!ol(BB.neighbourOpenSkyFaces))throw new Xp(`WasmChunkMesher neighbours bitmask ${BB.neighboursBitmask} or open sky faces ${BB.neighbourOpenSkyFaces}`);let yB=0;if(dB){const BB="provided"===dB.kind;if(BB&&(dB.data.length!==this.chunkSizeCubed||dB.data instanceof Uint16Array!==dB.isUint16))throw new Xp(`WasmChunkMesher light is not ${this.chunkSizeCubed} ${dB.isUint16?"u16":"u8"} values`);yB|=pl[dB.kind]|(BB&&dB.isUint16?4:0)}const pB=BB.neighbourLightBorders;if(pB){yB|=8;for(let BB=0;BB<6;BB++){const TB=pB[BB];if(TB&&TB.length!==VB*VB)throw new Xp(`WasmChunkMesher light border ${BB} is not ${VB*VB} light values`)}}BB.neighbourLightIsUint16&&(yB|=16);const lB=dB?BB.lightOnlyLayout:null;if(lB){for(const BB of lB){const TB=BB.numFaces,dB=[BB.is,BB.js,BB.ks,BB.wids,BB.hts,BB.EB,BB.diagonals];if(!ol(TB)||dB.some((BB=>BB.length!==TB)))throw new Xp("WasmChunkMesher face layout arrays disagree with numFaces")}yB|=32}return yB|(BB.visGraphs?64:0)|(TB.ED?128:0)|(TB.LD?256:0)}writeLayout(BB){const{mesher:TB,view:dB}=this;let VB=0;for(const kB of BB)VB+=kB.numFaces;TB.hO(BB.length,VB);const yB=TB.WO(),pB=TB.XO(),lB=TB.CO(),JB=dB(Uint32Array,yB,BB.length),YB=dB(Int16Array,pB,5*VB),gB=dB(Uint8Array,lB,2*VB);let oB=0;BB.forEach(((BB,TB)=>{JB[TB]=BB.numFaces,YB.set(BB.is,oB),YB.set(BB.js,VB+oB),YB.set(BB.ks,2*VB+oB),YB.set(BB.wids,3*VB+oB),YB.set(BB.hts,4*VB+oB),gB.set(BB.EB,oB),gB.set(BB.diagonals,VB+oB),oB+=BB.numFaces}))}}Error;function Ol(BB){return/out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(BB))}new Set(["start_refused","light_state_refused","abort_refused","trap_out_of_memory"]),new Set;function Dl(BB,TB){for(const dB of TB)BB.push(dB.is.buffer),BB.push(dB.js.buffer),BB.push(dB.ks.buffer),BB.push(dB.wids.buffer),BB.push(dB.hts.buffer),BB.push(dB.EB.buffer),BB.push(dB.diagonals.buffer)}class ul extends Error{}let Hl,El=null,vl=null;const ml=[];let il=0,Nl=!1,tl=0;let fl=0,sl=null,Ml=!1;const zl=new class{constructor(){this.runs=new Map}take(BB){BB.forgetAll&&this.runs.clear();for(const TB of BB.forgotten)this.runs.delete(TB);return BB.sentIds.forEach(((TB,dB)=>{this.runs.set(TB,new Fp(BB.sentRuns[dB]))})),Array.from(BB.ids,(BB=>{if(BB<0)return null;const TB=this.runs.get(BB);if(!TB)throw new Error(`The meshing worker holds no chunk ${BB}`);return TB}))}clear(){this.runs.clear()}get size(){return this.runs.size}get bytes(){let BB=0;for(const{runs:TB}of this.runs.values())BB+=TB.byteLength;return BB}},wl=new class{constructor(){this.entries=new Map}take(BB){var TB;const{lightHood:dB,hood:VB}=BB;dB.forgetAll&&this.entries.clear();for(const yB of dB.forgotten)this.entries.delete(yB);dB.providedTag&&(BB.providedLightData=this.Dg(VB.ids[13],dB.providedTag).slice()),null===(TB=dB.borderTags)||void 0===TB||TB.forEach(((TB,dB)=>{if(TB){const yB=this.Dg(VB.ids[Ip[dB]],TB);BB.neighbourLightBorders[dB]=Kp(yB,BB.neighbourLightIsUint16[dB],dB,BB.chunk.size)}}))}keep(BB,TB){if(!BB.lightHood.keep)return;const dB=BB.hood.ids[13];TB?this.entries.set(dB,{tag:BB.meshJobId,data:TB.slice()}):this.entries.delete(dB)}Dg(BB,TB){const dB=this.entries.get(BB);if((null===dB||void 0===dB?void 0:dB.tag)!==TB)throw new Error(`The meshing worker holds no light ${TB} for chunk ${BB}${dB?`, but light ${dB.tag}`:""}`);return dB.data}clear(){this.entries.clear()}get size(){return this.entries.size}};function Ul(BB,TB){const dB={type:"lightEngineReport",message:BB,failureKind:TB};self.postMessage(dB)}function Fl(){if(Nl)return;Nl=!0;const BB={type:"lightEngineReport",message:`No wasm mesher on this worker (${Sl()})`,lost:!0};self.postMessage(BB)}function Kl(BB){return BB instanceof Error?BB.message:String(BB)}function rl(BB){try{return vl=Ll.create(BB,Hl),!1}catch(TB){const dB=BB.takeRefusedAllocation();TB instanceof Gp&&BB.markFailed(TB.trap);const VB=dB>0&&!(TB instanceof Wp)?` (alloc_failed ${dB} bytes)`:"",yB=cl(TB),pB=dB>0||TB instanceof Wp;return Ul(`Wasm mesher failed${VB} to start: ${Kl(TB)}`,yB?void 0:pB?"start_refused":"start_failed"),pB||yB}}function Il(){var BB;null!==(BB=El)&&void 0!==BB&&BB.isReady()?vl.free():ml.push(vl),vl=null}function cl(BB){return!(BB instanceof Gp)&&!(BB instanceof ul)&&Ol(BB)}function Sl(){if(null!==sl)return sl;const BB=Cd();return"ready"===BB?"its start failed":"failed"===BB?Ad():`wasm ${BB}`}self.onmessage=BB=>{let{data:{type:TB,data:dB}}=BB;switch(TB){case"wasmInit":Hp(dB)||Ul(`Wasm did not start (${Ad()}), so this worker meshes nothing`);break;case"meshingInit":!function(BB){Hl=BB,zl.clear(),wl.clear(),il=0,Nl=!1,fl=0,sl=null,vl&&Il();El=function(BB){const TB=function(BB){var TB;return BB.isBloxdWasmReady()?{JD:BB.getBloxdWasm(),view:BB.wasmView,BufferView:BB.WasmBufferView,isReady:BB.isBloxdWasmReady,markFailed:BB.markBloxdWasmFailed,takeRefusedAllocation:null!==(TB=BB.takeBloxdWasmRefusedAllocation)&&void 0!==TB?TB:()=>0}:null}(BB);return TB?{...TB,trapContext:()=>{const TB=Math.round(BB.getBloxdWasmMemory().buffer.byteLength/2**20),dB=BB.getLastBloxdWasmPanic();return`wasm memory ${TB} MB, ${null===dB?"no panic message":`panic: ${function(BB){return BB.replace(/\\s*\\n\\s*/g," / ").slice(0,300)}(dB)}`}`},takeRefusedAllocation:BB.takeBloxdWasmRefusedAllocation}:null}(yB),El&&rl(El);vl||Fl()}(dB);break;case"xD":!function(BB){const TB=performance.now(),{i:dB,j:VB,k:yB}=BB.chunk,pB={data:null,isUint16:!1,kind:"computed",source:"none",seedColumnsRead:null,ms:0,engine:null};let lB=!1;const JB=null!==vl;Ml=!1;try{const dB=zl.take(BB.hood);wl.take(BB),lB=!0;const VB=function(BB,TB,dB){vl&&!El.isReady()&&Il();const VB=vl;if(!VB)throw new ul(`No wasm mesher on this worker (${Sl()})`);let yB=!1;try{VB.loadHood(TB,function(BB){const{chunk:TB}=BB;return!BB.computeLighting||BB.providedLightData||TB.LD||zp(TB.ED,BB.chunkJ,BB.highestChunkJ)?1:Mp}(BB)),yB=!0;const pB=function(BB,TB,dB){!function(BB,TB,dB,VB){const{chunk:yB,skySeedGrid:pB,highestChunkJ:lB,chunkJ:JB}=TB;if(!TB.computeLighting)return;if(BB.returnBuffers(TB.reusableLightBuffers),TB.providedLightData)return VB.data=TB.providedLightData,VB.isUint16=TB.providedLightIsUint16,VB.kind="provided",void(VB.source=TB.providedLightReused?"reused":"server");if(zp(yB.ED,JB,lB))return;if(yB.LD)return VB.data=BB.getZeroedFullChunkLightData(),VB.isUint16=!1,void(VB.kind="zeroedFull");const{i:YB,j:gB,k:oB}=yB,kB=BB.computeFromNeighbours(dB,TB.neighboursBitmask,pB,lB,JB,`${YB},${gB},${oB}`);if(VB.ms=BB.lastComputeMs,VB.engine=BB.lastComputeKind,VB.data=kB.uD,VB.isUint16=kB.isUint16,VB.kind="computed",VB.source="clientBfs",function(BB,TB){return null!==TB&&BB<TB}(JB,lB)){const TB=new Uint8Array(pB.length);BB.skySeedColumnsRead(TB)&&(VB.seedColumnsRead=TB)}}(BB,TB,Yl,dB);const VB=performance.now(),yB=BB.mesh({chunk:TB.chunk,neighboursBitmask:TB.neighboursBitmask,light:dB.data&&{data:dB.data,isUint16:dB.isUint16,kind:dB.kind},neighbourLightBorders:TB.neighbourLightBorders,neighbourLightIsUint16:TB.neighbourLightIsUint16,neighbourOpenSkyFaces:TB.neighbourOpenSkyFaces,lightOnlyLayout:TB.lightOnly?TB.cachedFaceLayout:null,visGraphs:!1!==TB.visGraphs});return{...yB,meshMs:performance.now()-VB}}(VB,BB,dB);return fl=0,pB}catch(pB){const{i:TB,j:lB,k:JB}=BB.chunk;if(pB instanceof Xp){const YB=dB.data;Object.assign(dB,{data:null,isUint16:!1,kind:"computed",source:"none",seedColumnsRead:null,ms:0,engine:null});let gB=BB.reusableLightBuffers;if(yB&&(gB=YB&&YB!==BB.providedLightData?[YB.buffer]:[]),VB.returnBuffers(gB),pB instanceof Wp){const BB=++tl;Ul(0===(BB&BB-1)?`Wasm mesher could not keep a light state: ${pB.message} (${BB} on this thread), failing chunk ${TB},${lB},${JB}`:null,"light_state_refused"),++fl>=3&&(sl=`its memory can\'t grow: ${fl} light states refused in a row`,Il())}else{const BB=il<3;BB&&il++,Ul(BB?`Wasm mesher could not take chunk ${TB},${lB},${JB}: ${Kl(pB)}`:null,"refused_input")}throw pB}if(cl(pB))throw pB;const YB=El.takeRefusedAllocation();pB instanceof Gp&&El.markFailed(pB.trap),Il();throw Ul(`Wasm mesher failed${YB>0?` (alloc_failed ${YB} bytes)`:""} on chunk ${TB},${lB},${JB}: ${Kl(pB)}`,function(BB,TB){if(!(BB instanceof Gp))return"threw";if(TB>0)return"abort_refused";return Ol(BB.trap)?"trap_out_of_memory":"trap"}(pB,YB)),Ml=YB>0,El.isReady()&&rl(El)&&(Ml=!0),pB}}(BB,dB,pB);wl.keep(BB,"clientBfs"===pB.source?pB.data:null),"lightDataArrays"in VB?function(BB,TB,dB,VB,yB){const{i:pB,j:lB,k:JB}=BB.chunk,{skySeedGrid:YB}=BB,gB=BB.cachedFaceLayout,oB=dB.data,kB=[];dB.seedColumnsRead&&kB.push(dB.seedColumnsRead.buffer);for(const OB of TB)kB.push(OB.buffer);kB.push(oB.buffer),YB&&kB.push(YB.buffer),Dl(kB,gB);const LB={type:"meshed",i:pB,j:lB,k:JB,meshJobId:BB.meshJobId,lightOnlyUpdate:!0,lightDataArrays:TB,faceLayout:gB,computedLightData:oB,Ip:dB.isUint16,lightSource:dB.source,serverLightCovered:BB.serverLightCovered,reusableSkySeedGrid:YB,lightSeedColumnsRead:dB.seedColumnsRead,lightMs:dB.ms,meshMs:VB,jobMs:performance.now()-yB,lightEngineKind:dB.engine};self.postMessage(LB,kB)}(BB,VB.lightDataArrays,pB,VB.meshMs,TB):function(BB,TB,dB,VB){const{i:yB,j:pB,k:lB}=BB.chunk,{skySeedGrid:JB}=BB,{vertexDataInfo:YB,faceLayout:gB,visGraphs:oB,visNegNeighbours:kB}=TB,LB=[];dB.seedColumnsRead&&LB.push(dB.seedColumnsRead.buffer);for(const DB of YB)DB.vertices.byteLength>0&&LB.push(DB.vertices),DB.indices.buffer.byteLength>0&&LB.push(DB.indices.buffer),DB.uD&&LB.push(DB.uD.buffer),DB.packedVertices&&LB.push(DB.packedVertices.buffer),DB.faceGroups&&LB.push(DB.faceGroups.buffer);dB.data&&LB.push(dB.data.buffer),JB&&LB.push(JB.buffer),gB&&Dl(LB,gB),oB&&LB.push(oB.buffer);const OB={type:"meshed",i:yB,j:pB,k:lB,meshJobId:BB.meshJobId,lightOnlyUpdate:!1,vertexDataInfo:YB,faceLayout:gB,computedLightData:dB.data,Ip:dB.isUint16,lightSource:dB.source,serverLightCovered:BB.serverLightCovered,reusableSkySeedGrid:JB,lightSeedColumnsRead:dB.seedColumnsRead,lightMs:dB.ms,meshMs:TB.meshMs,jobMs:performance.now()-VB,buildMs:TB.buildMs,mesherEngineKind:"wasm",lightEngineKind:dB.engine,...void 0===kB?{}:{visNegNeighbours:kB},...void 0===oB?{}:{visGraphs:oB}};self.postMessage(OB,LB)}(BB,VB,pB,TB)}catch(YB){console.error(`Worker meshChunk failed for chunk (${dB}, ${VB}, ${yB})`,YB),wl.keep(BB,null);const TB=YB instanceof Wp||Ml||cl(YB),gB=JB&&!vl&&!(YB instanceof Xp)&&!(YB instanceof ul);!function(BB,TB,dB,VB,yB,pB,lB,JB,YB,gB){const oB=[];lB&&oB.push(lB.buffer),JB&&oB.push(JB.buffer);const kB={type:"meshError",i:BB,j:TB,k:dB,meshJobId:VB,errorMessage:yB instanceof Error?yB.message:String(yB),cachesTaken:pB,reusableLightBuffer:lB,reusableSkySeedGrid:JB,lostMesher:YB,refusedState:gB};self.postMessage(kB,oB)}(dB,VB,yB,BB.meshJobId,YB,lB,pB.data,BB.skySeedGrid,gB,TB),vl||Fl()}}(dB);break;default:console.error("Unrecognised meshing worker message type:",TB)}}})();', "Worker", void 0, ⟦2-char-id⟧.p + "meshing.worker.c86831a1.worker.js")
     }
   },
-  35402: ⟦2-char-id⟧ => {
-    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+  35308: ⟦2-char-id⟧ => {
+    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = self || window;
       try {
         try {
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -26,7 +26,7 @@
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.URL || ⟦2-char-id⟧.webkitURL,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.createObjectURL(⟦2-char-id⟧),
             ⟦2-char-id⟧ = new ⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧, ⟦2-char-id⟧);
-          return ⟦2-char-id⟧.revokeObjectURL(⟦2-char-id⟧), qJ
+          return ⟦2-char-id⟧.revokeObjectURL(⟦2-char-id⟧), YB
         } catch (⟦2-char-id⟧) {
           return new ⟦2-char-id⟧[⟦2-char-id⟧]("data:application/javascript,".concat(encodeURIComponent(⟦2-char-id⟧)), ⟦2-char-id⟧)
         }
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/192.js</code> · modified · +7 / -7</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +7 / -7</summary>

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
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, cJ, ZJ, !1)
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, TB, dB, !1)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, cJ, ZJ, !1, ⟦2-char-id⟧)
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, TB, dB, !1, ⟦2-char-id⟧)
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
<summary><code>bundles/bloxd.io/chunks/js/194.js</code> · modified · +143 / -143</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +28 / -28</summary>

```diff
@@ -1,40 +1,40 @@
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
-      var ⟦2-char-id⟧, ZJ, XJ, ⟦2-char-id⟧;
+      var ⟦2-char-id⟧, dB, lB, ⟦2-char-id⟧;
       let {
         gameNameWithVariation: ⟦2-char-id⟧,
         close: ⟦2-char-id⟧,
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
<summary>Hunk 3 · Change · +16 / -16</summary>

```diff
@@ -81,49 +81,49 @@
       const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
 
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        LJ({
-          ...RJ,
+        xB({
+          ...qB,
           baseOptions: {
-            ...RJ.baseOptions,
+            ...qB.baseOptions,
             [⟦2-char-id⟧]: ⟦2-char-id⟧
           }
         })
       }
 
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        LJ({
-          ...RJ,
+        xB({
+          ...qB,
           listedOptions: {
-            ...RJ.listedOptions,
+            ...qB.listedOptions,
             [⟦2-char-id⟧]: ⟦2-char-id⟧
           }
         })
       }
 
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        LJ({
-          ...RJ,
+        xB({
+          ...qB,
           worldOptions: {
-            ...RJ.worldOptions,
+            ...qB.worldOptions,
             [⟦2-char-id⟧]: ⟦2-char-id⟧
           }
         })
       }
 
       function ⟦2-char-id⟧(⟦2-char-id⟧) {
-        LJ({
-          ...RJ,
+        xB({
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
-          LJ((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.baseOptions.name ? cJ : {
-            ...cJ,
+          xB((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.baseOptions.name ? TB : {
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
<summary>Hunk 4 · Change · +16 / -16</summary>

```diff
@@ -131,54 +131,54 @@
           console.error("Error getting new starter name:", ⟦2-char-id⟧)
         }))
       }), []), (0, ⟦2-char-id⟧.useEffect)((() => {
-        "customSchematic" === ⟦2-char-id⟧.mapOptions.mapType && null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${YJ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
+        "customSchematic" === ⟦2-char-id⟧.mapOptions.mapType && null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${oB.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
           retries: 0,
           minTimeout: 3⟦2-char-id⟧
         }).then((⟦2-char-id⟧ => {
-          BJ(⟦2-char-id⟧)
+          AB(⟦2-char-id⟧)
         }))
       }), [⟦2-char-id⟧.mapOptions.mapType, ⟦2-char-id⟧]);
       const ⟦2-char-id⟧ = {
           tpRequests: {
             isEnabled: () => !⟦2-char-id⟧.worldOptions.disableTpRequests,
-            GV: ⟦2-char-id⟧ => {
-              lJ("disableTpRequests", !⟦2-char-id⟧)
+            hN: ⟦2-char-id⟧ => {
+              eB("disableTpRequests", !⟦2-char-id⟧)
             }
           },
           spawnProtection: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.spawnProtection,
-            GV: ⟦2-char-id⟧ => {
-              lJ("spawnProtection", ⟦2-char-id⟧)
+            hN: ⟦2-char-id⟧ => {
+              eB("spawnProtection", ⟦2-char-id⟧)
             }
           },
           spawnReset: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.enableSpawnReset,
-            GV: ⟦2-char-id⟧ => {
-              lJ("enableSpawnReset", ⟦2-char-id⟧)
+            hN: ⟦2-char-id⟧ => {
+              eB("enableSpawnReset", ⟦2-char-id⟧)
             }
           },
           smpMarketplace: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.enableSmpMarketplace,
-            GV: ⟦2-char-id⟧ => {
-              lJ("enableSmpMarketplace", ⟦2-char-id⟧)
+            hN: ⟦2-char-id⟧ => {
+              eB("enableSmpMarketplace", ⟦2-char-id⟧)
             }
           },
           survivalGuns: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.enableSurvivalGuns,
-            GV: ⟦2-char-id⟧ => {
-              lJ("enableSurvivalGuns", ⟦2-char-id⟧)
+            hN: ⟦2-char-id⟧ => {
+              eB("enableSurvivalGuns", ⟦2-char-id⟧)
             }
           },
           fallDamage: {
             isEnabled: () => !⟦2-char-id⟧.worldOptions.disableFallDamage,
-            GV: ⟦2-char-id⟧ => {
-              lJ("disableFallDamage", !⟦2-char-id⟧)
+            hN: ⟦2-char-id⟧ => {
+              eB("disableFallDamage", !⟦2-char-id⟧)
             }
           },
           dayNight: {
             isEnabled: () => ⟦2-char-id⟧.worldOptions.enableDayNight,
-            GV: ⟦2-char-id⟧ => {
-              lJ("enableDayNight", ⟦2-char-id⟧)
+            hN: ⟦2-char-id⟧ => {
+              eB("enableDayNight", ⟦2-char-id⟧)
             }
           }
         },
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

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
<summary>Hunk 6 · Change · +3 / -3</summary>

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
-                (0, ⟦2-char-id⟧.h)("worldCreation"), PJ((0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧.baseOptions.name))
+                (0, ⟦2-char-id⟧.i)("worldCreation"), SB((0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧.baseOptions.name))
               },
               children: ⟦2-char-id⟧("homePage:joinLobbyName", {
                 lobbyName: ⟦2-char-id⟧.baseOptions.name
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

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
<summary>Hunk 8 · Change · +4 / -4</summary>

```diff
@@ -242,14 +242,14 @@
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
-                      tJ("visibility", ⟦2-char-id⟧.value)
+                      bB("visibility", ⟦2-char-id⟧.value)
                     }
                   })
                 })]
```

</details>

<details>
<summary>Hunk 9 · Change · +4 / -4</summary>

```diff
@@ -257,18 +257,18 @@
             }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               value: ⟦2-char-id⟧.worldOptions.defaultGamemode,
               onChange: ⟦2-char-id⟧ => {
-                lJ("defaultGamemode", ⟦2-char-id⟧)
+                eB("defaultGamemode", ⟦2-char-id⟧)
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
                   mapType: ⟦2-char-id⟧
                 };
-                "customSchematic" !== ⟦2-char-id⟧ && (⟦2-char-id⟧.schematicIdList = []), Jc(⟦2-char-id⟧)
+                "customSchematic" !== ⟦2-char-id⟧ && (⟦2-char-id⟧.schematicIdList = []), BT(⟦2-char-id⟧)
               },
               showAll: ⟦2-char-id⟧,
               disabled: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 10 · Change · +2 / -2</summary>

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
<summary>Hunk 11 · Change · +1 / -1</summary>

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
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -315,7 +315,7 @@
                   disabled: "Enter" !== ⟦2-char-id⟧,
                   children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     onValueChange: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                      oJ("description", ⟦2-char-id⟧)
+                      nB("description", ⟦2-char-id⟧)
                     },
                     maxLength: 100,
                     defaultValue: ⟦2-char-id⟧.listedOptions.description
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -330,7 +330,7 @@
                       type: "color",
                       value: ⟦2-char-id⟧.listedOptions.color,
                       onChange: ⟦2-char-id⟧ => {
-                        oJ("color", ⟦2-char-id⟧.target.value)
+                        nB("color", ⟦2-char-id⟧.target.value)
                       }
                     })
                   })
```

</details>

<details>
<summary>Hunk 14 · Change · +1 / -1</summary>

```diff
@@ -340,7 +340,7 @@
                   disabled: "Enter" !== ⟦2-char-id⟧,
                   children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     onValueChange: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                      oJ("emojis", ⟦2-char-id⟧)
+                      nB("emojis", ⟦2-char-id⟧)
                     },
                     maxLength: 6,
                     defaultValue: ⟦2-char-id⟧.listedOptions.emojis
```

</details>

<details>
<summary>Hunk 15 · Change · +5 / -5</summary>

```diff
@@ -359,26 +359,26 @@
                   disabled: "Enter" !== ⟦2-char-id⟧,
                   children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     onValueChange: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                      lJ("worldGenSeed", ⟦2-char-id⟧)
+                      eB("worldGenSeed", ⟦2-char-id⟧)
                     },
                     maxLength: ⟦2-char-id⟧.R
                   })
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   label: "classic:disableProtectors",
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     checked: ⟦2-char-id⟧.worldOptions.disableProtectors,
                     setChecked: ⟦2-char-id⟧ => {
-                      lJ("disableProtectors", ⟦2-char-id⟧)
+                      eB("disableProtectors", ⟦2-char-id⟧)
                     }
                   })
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   label: "classic:disableTribeCreation",
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     checked: ⟦2-char-id⟧.worldOptions.disableTribeCreation,
                     setChecked: ⟦2-char-id⟧ => {
-                      lJ("disableTribeCreation", ⟦2-char-id⟧)
+                      eB("disableTribeCreation", ⟦2-char-id⟧)
                     }
                   })
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

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
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -397,10 +397,10 @@
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   label: "classic:disableLobbySpawn",
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     checked: ⟦2-char-id⟧.worldOptions.disableLobbySpawn,
                     setChecked: ⟦2-char-id⟧ => {
-                      lJ("disableLobbySpawn", ⟦2-char-id⟧)
+                      eB("disableLobbySpawn", ⟦2-char-id⟧)
                     }
                   })
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
```

</details>

<details>
<summary>Hunk 18 · Change · +3 / -3</summary>

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
<summary>Hunk 19 · Change · +2 / -2</summary>

```diff
@@ -420,10 +420,10 @@
                 }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   label: "classic:disableMobs",
                   disabled: "Enter" !== ⟦2-char-id⟧,
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     checked: ⟦2-char-id⟧.worldOptions.disableMobs,
                     setChecked: ⟦2-char-id⟧ => {
-                      lJ("disableMobs", ⟦2-char-id⟧)
+                      eB("disableMobs", ⟦2-char-id⟧)
                     }
                   })
                 })]
```

</details>

<details>
<summary>Hunk 20 · Change · +4 / -4</summary>

```diff
@@ -436,18 +436,18 @@
           })
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "CreateCustomLobbyFooter",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "CreateCustomLobbyButton",
             padDefaultFocus: !0,
             loading: "Enter" !== ⟦2-char-id⟧,
             onClick: () => {
               !async function() {
                 if ("Enter" === ⟦2-char-id⟧) {
-                  pJ("Loading"), zJ("");
+                  QB("Loading"), aB("");
                   try {
-                    await ⟦2-char-id⟧.e.createCustomLobby(⟦2-char-id⟧), pJ("Success")
+                    await ⟦2-char-id⟧.e.createCustomLobby(⟦2-char-id⟧), QB("Success")
                   } catch (⟦2-char-id⟧) {
-                    zJ(⟦2-char-id⟧.message), console.error(⟦2-char-id⟧.message), pJ("Enter")
+                    aB(⟦2-char-id⟧.message), console.error(⟦2-char-id⟧.message), QB("Enter")
                   }
                 }
               }()
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -460,9 +460,9 @@
               label: "customLobby:showAdvancedOptions",
               disabled: ⟦2-char-id⟧,
               onLabelClick: () => {
-                uJ(!⟦2-char-id⟧)
+                CB(!⟦2-char-id⟧)
               },
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                 checked: ⟦2-char-id⟧,
                 setChecked: ⟦2-char-id⟧
               })
```

</details>

<details>
<summary>Hunk 22 · Change · +6 / -6</summary>

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
<summary>Hunk 23 · Change · +1 / -1</summary>

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
<summary>Hunk 24 · Change · +10 / -10</summary>

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
<summary>Hunk 25 · Change · +2 / -2</summary>

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
<summary>Hunk 26 · Change · +1 / -1</summary>

```diff
@@ -540,7 +540,7 @@
           gameWidth: "25%",
           useLongRatio: !0,
           onClick: () => {
-            FJ(⟦2-char-id⟧)
+            VB(⟦2-char-id⟧)
           },
           isSelected: ⟦2-char-id⟧.includes(⟦2-char-id⟧.schematicId),
           hideCcu: !0,
```

</details>

<details>
<summary>Hunk 27 · Change · +1 / -1</summary>

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
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -577,7 +577,7 @@
               loading: !1,
               schematics: ⟦2-char-id⟧,
               onSchematicPicked: ⟦2-char-id⟧ => {
-                hJ(⟦2-char-id⟧)
+                kB(⟦2-char-id⟧)
               },
               disableAutoExport: !1
             })
```

</details>

<details>
<summary>Hunk 29 · Change · +2 / -2</summary>

```diff
@@ -586,10 +586,10 @@
           schematic: ⟦2-char-id⟧,
           inSourceWorld: ⟦2-char-id⟧.schematicId === ⟦2-char-id⟧,
           onSchematicUpdate: ⟦2-char-id⟧ => {
-            hJ(⟦2-char-id⟧)
+            kB(⟦2-char-id⟧)
           },
           onClose: () => {
-            hJ(null), UJ()
+            kB(null), yB()
           }
         })]
       })
```

</details>

<details>
<summary>Hunk 30 · Change · +8 / -8</summary>

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
<summary>Hunk 31 · Change · +1 / -1</summary>

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
<summary>Hunk 32 · Change · +4 / -4</summary>

```diff
@@ -645,19 +645,19 @@
           children: ⟦2-char-id⟧("classic:defaultGamemode")
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SectionBody",
-          children: ⟦2-char-id⟧.B.map((⟦2-char-id⟧ => ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)("button", {
+          children: ⟦2-char-id⟧.z.map((⟦2-char-id⟧ => ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)("button", {
             type: "button",
             className: ⟦2-char-id⟧()("WorldGamemode", {
               Selected: ⟦2-char-id⟧ === ⟦2-char-id⟧
             }),
             disabled: ⟦2-char-id⟧,
             onClick: () => {
-              ZJ(⟦2-char-id⟧)
+              dB(⟦2-char-id⟧)
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
<summary>Hunk 34 · Change · +5 / -5</summary>

```diff
@@ -684,25 +684,25 @@
           children: ⟦2-char-id⟧("customLobby:mapType")
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SectionBody",
-          children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.w)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)("button", {
+          children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)("button", {
             type: "button",
             className: ⟦2-char-id⟧()("MapType", {
               Selected: ⟦2-char-id⟧ === ⟦2-char-id⟧
             }),
             disabled: ⟦2-char-id⟧,
             onClick: () => {
-              FJ(⟦2-char-id⟧)
+              VB(⟦2-char-id⟧)
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
<summary><code>bundles/bloxd.io/chunks/js/195.js</code> · modified · +94 / -94</summary>

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
@@ -38,7 +38,7 @@
           gameWidth: "25%",
           useLongRatio: !0,
           onClick: () => {
-            FJ(⟦2-char-id⟧)
+            VB(⟦2-char-id⟧)
           },
           isSelected: ⟦2-char-id⟧.includes(⟦2-char-id⟧.schematicId),
           hideCcu: !0,
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

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
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -75,7 +75,7 @@
               loading: !1,
               schematics: ⟦2-char-id⟧,
               onSchematicPicked: ⟦2-char-id⟧ => {
-                hJ(⟦2-char-id⟧)
+                kB(⟦2-char-id⟧)
               },
               disableAutoExport: !1
             })
```

</details>

<details>
<summary>Hunk 6 · Change · +2 / -2</summary>

```diff
@@ -84,10 +84,10 @@
           schematic: ⟦2-char-id⟧,
           inSourceWorld: ⟦2-char-id⟧.schematicId === ⟦2-char-id⟧,
           onSchematicUpdate: ⟦2-char-id⟧ => {
-            hJ(⟦2-char-id⟧)
+            kB(⟦2-char-id⟧)
           },
           onClose: () => {
-            hJ(null), UJ()
+            kB(null), yB()
           }
         })]
       })
```

</details>

<details>
<summary>Hunk 7 · Change · +14 / -14</summary>

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
<summary>Hunk 8 · Change · +1 / -1</summary>

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
<summary>Hunk 9 · Change · +3 / -3</summary>

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
<summary>Hunk 10 · Change · +1 / -1</summary>

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
<summary>Hunk 11 · Change · +1 / -1</summary>

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
<summary>Hunk 12 · Change · +2 / -2</summary>

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
<summary>Hunk 13 · Change · +1 / -1</summary>

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
<summary>Hunk 14 · Change · +2 / -2</summary>

```diff
@@ -213,10 +213,10 @@
           children: ⟦2-char-id⟧("worldBuilder:chooseOneOfYourSchematics")
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SchematicPopupSchematicListContainer",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
             schematics: ⟦2-char-id⟧,
             onSchematicPicked: ⟦2-char-id⟧ => {
-              FJ(⟦2-char-id⟧.schematicId), ZJ()
+              VB(⟦2-char-id⟧.schematicId), dB()
             },
             loading: !1,
             disableAutoExport: !0
```

</details>

<details>
<summary>Hunk 15 · Change · +5 / -5</summary>

```diff
@@ -231,16 +231,16 @@
             } catch (⟦2-char-id⟧) {
               console.warn("Schematic upload failed", ⟦2-char-id⟧)
             } finally {
-              ZJ()
+              dB()
             }
           }
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
<summary>Hunk 16 · Change · +1 / -1</summary>

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
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -264,10 +264,10 @@
             children: ⟦2-char-id⟧("worldBuilder:overwriteOneOfYourSchematics")
           }), (0, ⟦2-char-id⟧.jsx)("div", {
             className: "SchematicPopupSchematicListContainer",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
               schematics: ⟦2-char-id⟧,
               onSchematicPicked: ⟦2-char-id⟧ => {
-                GJ(⟦2-char-id⟧.schematicId), rJ("existing"), hJ("save")
+                uB(⟦2-char-id⟧.schematicId), vB("existing"), kB("save")
               },
               loading: !1,
               disableAutoExport: !1
```

</details>

<details>
<summary>Hunk 18 · Change · +3 / -3</summary>

```diff
@@ -277,16 +277,16 @@
             children: ⟦2-char-id⟧("general:otherOptions")
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "OtherOptions",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
               className: "ChooseUploadSchematicButton",
               onClick: () => {
-                rJ("new"), hJ("save")
+                vB("new"), kB("save")
               },
               children: ⟦2-char-id⟧("worldBuilder:saveAsNewSchematic")
             }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
               className: "ChooseUploadSchematicButton",
               onClick: () => {
-                rJ("file"), hJ("save")
+                vB("file"), kB("save")
               },
               children: ⟦2-char-id⟧("worldBuilder:downloadSchematic")
             })]
```

</details>

<details>
<summary>Hunk 19 · Change · +3 / -3</summary>

```diff
@@ -294,11 +294,11 @@
         }), "choose" !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
           type: ⟦2-char-id⟧,
           ownedSchematics: ⟦2-char-id⟧,
-          onSubmit: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-            "file" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : "new" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧), FJ()
+          onSubmit: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+            "file" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : "new" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧), VB()
           },
           onBack: () => {
-            hJ("choose")
+            kB("choose")
           },
           prepopName: "existing" === ⟦2-char-id⟧ ? null === (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.schematicId === ⟦2-char-id⟧))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name : null
         })]
```

</details>

<details>
<summary>Hunk 20 · Change · +4 / -4</summary>

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
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -333,10 +333,10 @@
           }),
           forcedText: ⟦2-char-id⟧,
           onValueChange: ⟦2-char-id⟧ => {
-            qJ(⟦2-char-id⟧), VJ(⟦2-char-id⟧)
+            YB(⟦2-char-id⟧), fB(⟦2-char-id⟧)
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
<summary>Hunk 22 · Change · +3 / -3</summary>

```diff
@@ -353,16 +353,16 @@
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
-              vJ(⟦2-char-id⟧.target.checked)
+              mB(⟦2-char-id⟧.target.checked)
             },
             disabled: !1,
             className: "SaveSchematicCheckbox"
```

</details>

<details>
<summary>Hunk 23 · Change · +3 / -3</summary>

```diff
@@ -375,13 +375,13 @@
           children: ⟦2-char-id⟧("worldBuilder:lobbyCodeWarning")
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SaveSchematicButtons",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "SaveSchematicButton",
             onClick: () => {
-              VJ() && ⟦2-char-id⟧(⟦2-char-id⟧, AJ, ⟦2-char-id⟧)
+              fB() && ⟦2-char-id⟧(⟦2-char-id⟧, JB, ⟦2-char-id⟧)
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
<summary>Hunk 24 · Change · +3 / -3</summary>

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
<summary>Hunk 25 · Change · +3 / -3</summary>

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
<summary>Hunk 26 · Change · +1 / -1</summary>

```diff
@@ -437,7 +437,7 @@
         }({
           ownedSchematics: ⟦2-char-id⟧,
           onChosenDownload: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            qJ("download-schematic", {
+            YB("download-schematic", {
               name: ⟦2-char-id⟧,
               includeLobbyCode: ⟦2-char-id⟧
             }).then((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 27 · Change · +8 / -8</summary>

```diff
@@ -446,25 +446,25 @@
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
-            qJ("cancel", {})
-          },
-          onChosenEdit: (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
-            qJ("save-to-profile", {
+            YB("cancel", {})
+          },
+          onChosenEdit: (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
+            YB("save-to-profile", {
               schematicId: ⟦2-char-id⟧,
               name: ⟦2-char-id⟧,
               description: ⟦2-char-id⟧,
               includeLobbyCode: ⟦2-char-id⟧
             })
           },
-          onChosenNew: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-            qJ("save-to-profile", {
+          onChosenNew: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+            YB("save-to-profile", {
               schematicId: null,
               name: ⟦2-char-id⟧,
               description: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 28 · Change · +2 / -2</summary>

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
<summary>Hunk 29 · Change · +9 / -9</summary>

```diff
@@ -507,32 +507,32 @@
             }, ⟦2-char-id⟧.HttpPayloadType.json)
           },
           onChosenPreset: ⟦2-char-id⟧ => {
-            qJ("load-from-profile", {
+            YB("load-from-profile", {
               schematicId: ⟦2-char-id⟧
             })
           },
           onClose: () => {
-            qJ("cancel", {})
+            YB("cancel", {})
           }
         });
-        else if ("Plugin|WorldBuilder|ListSchematics" === ⟦2-char-id⟧)(0, ⟦2-char-id⟧.g)({
-          ownedSchematics: Array.isArray(⟦2-char-id⟧) ? cJ : ⟦2-char-id⟧.schematics,
+        else if ("Plugin|WorldBuilder|ListSchematics" === ⟦2-char-id⟧)(0, ⟦2-char-id⟧.e)({
+          ownedSchematics: Array.isArray(⟦2-char-id⟧) ? TB : ⟦2-char-id⟧.schematics,
           currentWorldSchematicId: Array.isArray(⟦2-char-id⟧) ? null : ⟦2-char-id⟧.currentWorldSchematicId,
           onClose: () => {
-            qJ("cancel", {})
+            YB("cancel", {})
           }
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
-              qJ("cancel", {})
+              YB("cancel", {})
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
<summary><code>bundles/bloxd.io/chunks/js/197.js</code> · modified · +40 / -40</summary>

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
<summary>Hunk 3 · Change · +26 / -26</summary>

```diff
@@ -37,74 +37,74 @@
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
-      return ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧) && function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Jb)(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Jb)(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Hb)(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Hb)(⟦2-char-id⟧);
+      return ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧) && function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Vb)(⟦2-char-id⟧),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Vb)(⟦2-char-id⟧),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Qb)(⟦2-char-id⟧),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Qb)(⟦2-char-id⟧);
           return !(⟦2-char-id⟧ !== ⟦2-char-id⟧ || !⟦2-char-id⟧) || ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧
-        }(⟦2-char-id⟧, JJ, ⟦2-char-id⟧) ? ZJ : (0, ⟦2-char-id⟧.b)(), (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, AJ, ⟦2-char-id⟧), ⟦2-char-id⟧.setItem(⟦2-char-id⟧, ⟦2-char-id⟧),
+        }(⟦2-char-id⟧, BB, ⟦2-char-id⟧) ? dB : (0, ⟦2-char-id⟧.e)(), (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧, JB, ⟦2-char-id⟧), ⟦2-char-id⟧.setItem(⟦2-char-id⟧, ⟦2-char-id⟧),
         function() {
-          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.k).removeItem(⟦2-char-id⟧)
-        }(⟦2-char-id⟧), DJ
+          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ⟦2-char-id⟧.m).removeItem(⟦2-char-id⟧)
+        }(⟦2-char-id⟧), LB
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
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = null, AJ(⟦2-char-id⟧), () => {
+      return ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = null, JB(⟦2-char-id⟧), () => {
         ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = null, ⟦2-char-id⟧ = null)
       }
     }
 
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
<summary>Hunk 4 · Change · +4 / -4</summary>

```diff
@@ -118,13 +118,13 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = (null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.conn) === ⟦2-char-id⟧ ? ⟦2-char-id⟧.reason : null;
-      return ⟦2-char-id⟧ = null, ZJ
+      return ⟦2-char-id⟧ = null, dB
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
<summary><code>bundles/bloxd.io/chunks/js/198.js</code> · modified · +171 / -171</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +4 / -4</summary>

```diff
@@ -1,15 +1,15 @@
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
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.create();
-      ⟦2-char-id⟧.add(⟦2-char-id⟧, JJ, ⟦2-char-id⟧), this.base = ⟦2-char-id⟧.min(⟦2-char-id⟧.create(), JJ, ⟦2-char-id⟧), this.vec = ⟦2-char-id⟧.clone(⟦2-char-id⟧), this.max = ⟦2-char-id⟧.max(⟦2-char-id⟧.create(), JJ, ⟦2-char-id⟧), this.mag = ⟦2-char-id⟧.length(this.vec)
+      ⟦2-char-id⟧.add(⟦2-char-id⟧, BB, ⟦2-char-id⟧), this.base = ⟦2-char-id⟧.min(⟦2-char-id⟧.create(), BB, ⟦2-char-id⟧), this.vec = ⟦2-char-id⟧.clone(⟦2-char-id⟧), this.max = ⟦2-char-id⟧.max(⟦2-char-id⟧.create(), BB, ⟦2-char-id⟧), this.mag = ⟦2-char-id⟧.length(this.vec)
     }
     var ⟦2-char-id⟧ = ⟦2-char-id⟧.prototype;
     ⟦2-char-id⟧.width = function() {
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -33,11 +33,11 @@
     }, ⟦2-char-id⟧.translate = function(⟦2-char-id⟧) {
       return ⟦2-char-id⟧.add(this.max, this.max, ⟦2-char-id⟧), ⟦2-char-id⟧.add(this.base, this.base, ⟦2-char-id⟧), this
     }, ⟦2-char-id⟧.setPosition = function(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.add(this.max, JJ, this.vec), ⟦2-char-id⟧.copy(this.base, ⟦2-char-id⟧), this
+      return ⟦2-char-id⟧.add(this.max, BB, this.vec), ⟦2-char-id⟧.copy(this.base, ⟦2-char-id⟧), this
     }, ⟦2-char-id⟧.expand = function(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.create(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.create();
-      return ⟦2-char-id⟧.max(⟦2-char-id⟧, ⟦2-char-id⟧.max, this.max), ⟦2-char-id⟧.min(⟦2-char-id⟧, ⟦2-char-id⟧.base, this.base), ⟦2-char-id⟧.subtract(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
+      return ⟦2-char-id⟧.max(⟦2-char-id⟧, ⟦2-char-id⟧.max, this.max), ⟦2-char-id⟧.min(⟦2-char-id⟧, ⟦2-char-id⟧.base, this.base), ⟦2-char-id⟧.subtract(⟦2-char-id⟧, TB, ⟦2-char-id⟧), new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }, ⟦2-char-id⟧.intersects = function(⟦2-char-id⟧) {
       return !(⟦2-char-id⟧.base[0] > this.max[0]) && (!(⟦2-char-id⟧.base[1] > this.max[1]) && (!(⟦2-char-id⟧.base[2] > this.max[2]) && (!(⟦2-char-id⟧.max[0] < this.base[0]) && (!(⟦2-char-id⟧.max[1] < this.base[1]) && !(⟦2-char-id⟧.max[2] < this.base[2])))))
     }, ⟦2-char-id⟧.touches = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 3 · Change · +5 / -5</summary>

```diff
@@ -48,15 +48,15 @@
       var ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.base[0], this.base[0]),
         ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.base[1], this.base[1]),
         ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.base[2], this.base[2]);
-      return new ⟦2-char-id⟧([⟦2-char-id⟧, ZJ, ⟦2-char-id⟧], [Math.min(⟦2-char-id⟧.max[0], this.max[0]) - ⟦2-char-id⟧, Math.min(⟦2-char-id⟧.max[1], this.max[1]) - ⟦2-char-id⟧, Math.min(⟦2-char-id⟧.max[2], this.max[2]) - ⟦2-char-id⟧])
-    }
-  },
-  35753: ⟦2-char-id⟧ => {
+      return new ⟦2-char-id⟧([⟦2-char-id⟧, dB, ⟦2-char-id⟧], [Math.min(⟦2-char-id⟧.max[0], this.max[0]) - ⟦2-char-id⟧, Math.min(⟦2-char-id⟧.max[1], this.max[1]) - ⟦2-char-id⟧, Math.min(⟦2-char-id⟧.max[2], this.max[2]) - ⟦2-char-id⟧])
+    }
+  },
+  35692: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧ === ⟦2-char-id⟧) return !0;
       if (⟦2-char-id⟧ && ⟦2-char-id⟧ && "object" == typeof ⟦2-char-id⟧ && "object" == typeof ⟦2-char-id⟧) {
         if (⟦2-char-id⟧.constructor !== ⟦2-char-id⟧.constructor) return !1;
-        var ⟦2-char-id⟧, UJ, ⟦2-char-id⟧;
+        var ⟦2-char-id⟧, yB, ⟦2-char-id⟧;
         if (Array.isArray(⟦2-char-id⟧)) {
           if ((⟦2-char-id⟧ = ⟦2-char-id⟧.length) != ⟦2-char-id⟧.length) return !1;
           for (⟦2-char-id⟧ = ⟦2-char-id⟧; 0 !== ⟦2-char-id⟧--;)
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -78,8 +78,8 @@
       return ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧
     }
   },
-  38520: ⟦2-char-id⟧ => {
-    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+  38470: ⟦2-char-id⟧ => {
+    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = +⟦2-char-id⟧[0],
         ⟦2-char-id⟧ = +⟦2-char-id⟧[1],
         ⟦2-char-id⟧ = +⟦2-char-id⟧[2],
```

</details>

<details>
<summary>Hunk 5 · Change · +10 / -10</summary>

```diff
@@ -88,22 +88,22 @@
         ⟦2-char-id⟧ = +⟦2-char-id⟧[2],
         ⟦2-char-id⟧ = Math.sqrt(⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧);
       if (0 === ⟦2-char-id⟧) throw new Error("Can't raycast along a zero vector");
-      return function(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, ⟦2-char-id⟧) {
-        for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = Math.floor, ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - cJ : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - ZJ : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - FJ : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = -1; ⟦2-char-id⟧ <= ⟦2-char-id⟧;) {
-          var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, sJ, ⟦2-char-id⟧);
+      return function(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, JB, YB, ⟦2-char-id⟧) {
+        for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = Math.floor, ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? 1 : -1, ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.abs(1 / ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - TB : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - dB : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 / 0 ? ⟦2-char-id⟧ * (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ + 1 - VB : ⟦2-char-id⟧ - ⟦2-char-id⟧) : 1 / 0, ⟦2-char-id⟧ = -1; ⟦2-char-id⟧ <= ⟦2-char-id⟧;) {
+          var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, OB, ⟦2-char-id⟧);
           if (⟦2-char-id⟧) return ⟦2-char-id⟧ && (⟦2-char-id⟧[0] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧[2] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧[0] = ⟦2-char-id⟧[1] = ⟦2-char-id⟧[2] = 0, 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧[0] = -⟦2-char-id⟧), 1 === ⟦2-char-id⟧ && (⟦2-char-id⟧[1] = -⟦2-char-id⟧), 2 === ⟦2-char-id⟧ && (⟦2-char-id⟧[2] = -⟦2-char-id⟧)), ⟦2-char-id⟧;
           ⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧ < ⟦2-char-id⟧ ? (⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = 0) : (⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = 2) : ⟦2-char-id⟧ < ⟦2-char-id⟧ ? (⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = 1) : (⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = 2)
         }
         return ⟦2-char-id⟧ && (⟦2-char-id⟧[0] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧[2] = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧[0] = ⟦2-char-id⟧[1] = ⟦2-char-id⟧[2] = 0), 0
-      }(⟦2-char-id⟧, XJ, AJ, qJ, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ = "undefined" === typeof ⟦2-char-id⟧ ? 64 : +⟦2-char-id⟧, UJ, ⟦2-char-id⟧)
-    }
-  },
-  38060: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      }(⟦2-char-id⟧, lB, JB, YB, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ /= ⟦2-char-id⟧, ⟦2-char-id⟧ = "undefined" === typeof ⟦2-char-id⟧ ? 64 : +⟦2-char-id⟧, yB, ⟦2-char-id⟧)
+    }
+  },
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
<summary>Hunk 6 · Change · +6 / -6</summary>

```diff
@@ -111,24 +111,24 @@
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
           currID: null
         }, "loading" !== document.readyState ? ⟦2-char-id⟧(this) : document.addEventListener("DOMContentLoaded", (⟦2-char-id⟧ => {
-          jJ(this)
+          gB(this)
         }), {
           once: !0
         })
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -157,7 +157,7 @@
         return ⟦2-char-id⟧
       }
       ⟦2-char-id⟧() {
-        qJ(this.iN), qJ(this.pressCount), qJ(this.releaseCount)
+        YB(this.mC), YB(this.pressCount), YB(this.releaseCount)
       }
     }
 
```

</details>

<details>
<summary>Hunk 8 · Change · +3 / -3</summary>

```diff
@@ -166,20 +166,20 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      window.addEventListener("keydown", ⟦2-char-id⟧.bind(null, JJ, !0), !1), window.addEventListener("keyup", ⟦2-char-id⟧.bind(null, JJ, !1), !1);
+      window.addEventListener("keydown", ⟦2-char-id⟧.bind(null, BB, !0), !1), window.addEventListener("keyup", ⟦2-char-id⟧.bind(null, BB, !1), !1);
       var ⟦2-char-id⟧ = {
         passive: !0
       };
       ⟦2-char-id⟧.element.addEventListener("touchstart", ⟦2-char-id⟧.bind(void 0, ⟦2-char-id⟧), {
         passive: !1
-      }), ⟦2-char-id⟧.element.addEventListener("touchend", ⟦2-char-id⟧.bind(void 0, ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.element.addEventListener("mousedown", ⟦2-char-id⟧.bind(null, JJ, !0), ⟦2-char-id⟧), window.document.addEventListener("mouseup", ⟦2-char-id⟧.bind(null, JJ, !1), ⟦2-char-id⟧), ⟦2-char-id⟧.element.addEventListener("touchmove", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.element.addEventListener("mousemove", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), ⟦2-char-id⟧), window.PointerEvent, ⟦2-char-id⟧.element.addEventListener("wheel", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.element.addEventListener("contextmenu", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), !1), window.addEventListener("blur", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), !1)
+      }), ⟦2-char-id⟧.element.addEventListener("touchend", ⟦2-char-id⟧.bind(void 0, ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.element.addEventListener("mousedown", ⟦2-char-id⟧.bind(null, BB, !0), ⟦2-char-id⟧), window.document.addEventListener("mouseup", ⟦2-char-id⟧.bind(null, BB, !1), ⟦2-char-id⟧), ⟦2-char-id⟧.element.addEventListener("touchmove", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.element.addEventListener("mousemove", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), ⟦2-char-id⟧), window.PointerEvent, ⟦2-char-id⟧.element.addEventListener("wheel", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.element.addEventListener("contextmenu", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), !1), window.addEventListener("blur", ⟦2-char-id⟧.bind(null, ⟦2-char-id⟧), !1)
     }
     var ⟦2-char-id⟧ = 0,
       ⟦2-char-id⟧ = 0,
       ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧.preventDefault(), nJ(⟦2-char-id⟧)
+      ⟦2-char-id⟧.preventDefault(), DB(⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 9 · Change · +9 / -9</summary>

```diff
@@ -198,19 +198,19 @@
       for (var ⟦2-char-id⟧ = ⟦2-char-id⟧.changedTouches, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧].identifier === ⟦2-char-id⟧ && (⟦2-char-id⟧ = null)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       try {
-        KJ(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧.isTrusted && !⟦2-char-id⟧.repeat && ⟦2-char-id⟧._keyStates[⟦2-char-id⟧.code] && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.code)
+        sB(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧.isTrusted && !⟦2-char-id⟧.repeat && ⟦2-char-id⟧._keyStates[⟦2-char-id⟧.code] && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.code)
       } finally {
-        SJ(⟦2-char-id⟧.code, cJ, JJ, ⟦2-char-id⟧)
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        zB(⟦2-char-id⟧.code, TB, BB, ⟦2-char-id⟧)
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       try {
-        KJ(⟦2-char-id⟧, ⟦2-char-id⟧)
+        sB(⟦2-char-id⟧, ⟦2-char-id⟧)
       } finally {
-        ! function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        ! function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           if ("pointerId" in ⟦2-char-id⟧)
             if (⟦2-char-id⟧) {
               if (null !== ⟦2-char-id⟧._touches.currID) return;
```

</details>

<details>
<summary>Hunk 10 · Change · +2 / -2</summary>

```diff
@@ -219,8 +219,8 @@
               if (⟦2-char-id⟧._touches.currID !== ⟦2-char-id⟧.pointerId) return;
               ⟦2-char-id⟧._touches.currID = null
             } var ⟦2-char-id⟧ = "button" in ⟦2-char-id⟧ ? ⟦2-char-id⟧.button + 1 : 1;
-          ⟦2-char-id⟧("Mouse" + ⟦2-char-id⟧, cJ, JJ, ⟦2-char-id⟧)
-        }(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+          ⟦2-char-id⟧("Mouse" + ⟦2-char-id⟧, TB, BB, ⟦2-char-id⟧)
+        }(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
     }
 
```

</details>

<details>
<summary>Hunk 11 · Change · +5 / -5</summary>

```diff
@@ -229,21 +229,21 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.movementY || ⟦2-char-id⟧.mozMovementY || 0;
       if (⟦2-char-id⟧.touches && 0 === (⟦2-char-id⟧ | ⟦2-char-id⟧)) {
         var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-          nJ(⟦2-char-id⟧);
+          DB(⟦2-char-id⟧);
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.changedTouches.length; ++⟦2-char-id⟧)
             if (⟦2-char-id⟧.changedTouches[⟦2-char-id⟧].identifier == ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.changedTouches[⟦2-char-id⟧],
                 ⟦2-char-id⟧ = [⟦2-char-id⟧.clientX - ⟦2-char-id⟧, ⟦2-char-id⟧.clientY - ⟦2-char-id⟧];
-              return ⟦2-char-id⟧ = ⟦2-char-id⟧.clientX, ⟦2-char-id⟧ = ⟦2-char-id⟧.clientY, FJ
-            } return console.error(`Did not find touch id ${DJ}`), [0, 0]
+              return ⟦2-char-id⟧ = ⟦2-char-id⟧.clientX, ⟦2-char-id⟧ = ⟦2-char-id⟧.clientY, VB
+            } return console.error(`Did not find touch id ${LB}`), [0, 0]
         }(⟦2-char-id⟧);
         ⟦2-char-id⟧ = ⟦2-char-id⟧[0], ⟦2-char-id⟧ = ⟦2-char-id⟧[1]
       }
-      ⟦2-char-id⟧.iN.dx += ⟦2-char-id⟧, ⟦2-char-id⟧.iN.dy += ⟦2-char-id⟧
+      ⟦2-char-id⟧.mC.dx += ⟦2-char-id⟧, ⟦2-char-id⟧.mC.dy += ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      KJ(⟦2-char-id⟧, ⟦2-char-id⟧);
+      sB(⟦2-char-id⟧, ⟦2-char-id⟧);
       var ⟦2-char-id⟧ = 1;
       switch (⟦2-char-id⟧.deltaMode) {
         case 0:
```

</details>

<details>
<summary>Hunk 12 · Change · +2 / -2</summary>

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
<summary>Hunk 13 · Change · +3 / -3</summary>

```diff
@@ -305,16 +305,16 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧;
       ⟦2-char-id⟧ = ⟦2-char-id⟧;
       try {
-        SJ(⟦2-char-id⟧, !1, JJ, ⟦2-char-id⟧)
+        zB(⟦2-char-id⟧, !1, BB, ⟦2-char-id⟧)
       } finally {
         ⟦2-char-id⟧ = ⟦2-char-id⟧
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧._keyBindmap[⟦2-char-id⟧];
       ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧._keyStates[⟦2-char-id⟧], ⟦2-char-id⟧) && (⟦2-char-id⟧._keyStates[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧.forEach((⟦2-char-id⟧ => {
-        (!⟦2-char-id⟧.filterEvents || ⟦2-char-id⟧.filterEvents(⟦2-char-id⟧, ⟦2-char-id⟧)) && function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        (!⟦2-char-id⟧.filterEvents || ⟦2-char-id⟧.filterEvents(⟦2-char-id⟧, ⟦2-char-id⟧)) && function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.pressCount : ⟦2-char-id⟧.releaseCount;
           ⟦2-char-id⟧[⟦2-char-id⟧] = (⟦2-char-id⟧[⟦2-char-id⟧] || 0) + 1;
           var ⟦2-char-id⟧ = ⟦2-char-id⟧._bindPressCount[⟦2-char-id⟧] || 0;
```

</details>

<details>
<summary>Hunk 14 · Change · +6 / -6</summary>

```diff
@@ -326,15 +326,15 @@
             var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.down : ⟦2-char-id⟧.up;
             ⟦2-char-id⟧.disabled || ⟦2-char-id⟧.emit(⟦2-char-id⟧, ⟦2-char-id⟧)
           }
-        }(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧)
-      }))), "button" in ⟦2-char-id⟧ || (⟦2-char-id⟧.kN && !⟦2-char-id⟧.defaultPrevented && ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧.stopPropagation && ⟦2-char-id⟧.stopPropagation()))
+        }(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧)
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
<summary>Hunk 15 · Change · +1 / -1</summary>

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
<summary>Hunk 16 · Change · +4 / -4</summary>

```diff
@@ -431,19 +431,19 @@
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
-        this.Cw = !1, this.cW = !1, this.Gy = 30, this.Kw = 0, this.FW = 100, this.Sf = !1, this.fullscreen = !1, this.Km = function(⟦2-char-id⟧) {}, this.UW = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {}, this.fW = function() {}, this.Im = function() {}, this.jW = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(⟦2-char-id⟧) {}, this._data = new ⟦2-char-id⟧(⟦2-char-id⟧),
+        this.mI = !1, this.MI = !1, this.WU = 30, this.pI = 0, this.ZI = 100, this.fH = !1, this.fullscreen = !1, this.WE = function(⟦2-char-id⟧) {}, this.qI = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {}, this.kS = function() {}, this.qE = function() {}, this.xI = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(⟦2-char-id⟧) {}, this._data = new ⟦2-char-id⟧(⟦2-char-id⟧),
           function(⟦2-char-id⟧) {
             if ("loading" === document.readyState) {
               var ⟦2-char-id⟧ = () => {
-                document.removeEventListener("readystatechange", ⟦2-char-id⟧), JJ()
+                document.removeEventListener("readystatechange", ⟦2-char-id⟧), BB()
               };
               document.addEventListener("readystatechange", ⟦2-char-id⟧)
             } else setTimeout(⟦2-char-id⟧, 0)
```

</details>

<details>
<summary>Hunk 17 · Change · +6 / -6</summary>

```diff
@@ -453,22 +453,22 @@
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.nowObject.now();
               ⟦2-char-id⟧.lastTickStarted = ⟦2-char-id⟧, ⟦2-char-id⟧.lastFrameStarted = ⟦2-char-id⟧, ⟦2-char-id⟧.lastRenderStarted = ⟦2-char-id⟧, ⟦2-char-id⟧.frameCB = () => function(⟦2-char-id⟧) {
                 var ⟦2-char-id⟧ = ⟦2-char-id⟧._data;
-                requestAnimationFrame(⟦2-char-id⟧.frameCB), AJ(⟦2-char-id⟧);
+                requestAnimationFrame(⟦2-char-id⟧.frameCB), JB(⟦2-char-id⟧);
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
-                ⟦2-char-id⟧.UW(⟦2-char-id⟧, qJ, ⟦2-char-id⟧), setTimeout(⟦2-char-id⟧, 0, JJ, !0)
-              }(⟦2-char-id⟧), ⟦2-char-id⟧.intervalCB = () => ⟦2-char-id⟧(⟦2-char-id⟧), requestAnimationFrame(⟦2-char-id⟧.frameCB), ⟦2-char-id⟧.pollTime > 0 && (⟦2-char-id⟧.intervalID = setInterval(⟦2-char-id⟧.intervalCB, Math.max(⟦2-char-id⟧.pollTime, 1⟦2-char-id⟧ / ⟦2-char-id⟧.Gy / 2)))
+                ⟦2-char-id⟧.qI(⟦2-char-id⟧, YB, ⟦2-char-id⟧), setTimeout(⟦2-char-id⟧, 0, BB, !0)
+              }(⟦2-char-id⟧), ⟦2-char-id⟧.intervalCB = () => ⟦2-char-id⟧(⟦2-char-id⟧), requestAnimationFrame(⟦2-char-id⟧.frameCB), ⟦2-char-id⟧.pollTime > 0 && (⟦2-char-id⟧.intervalID = setInterval(⟦2-char-id⟧.intervalCB, Math.max(⟦2-char-id⟧.pollTime, 1⟦2-char-id⟧ / ⟦2-char-id⟧.WU / 2)))
             }(this),
             function(⟦2-char-id⟧, ⟦2-char-id⟧) {
               if (!⟦2-char-id⟧) return;
```

</details>

<details>
<summary>Hunk 18 · Change · +5 / -5</summary>

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
<summary>Hunk 19 · Change · +6 / -6</summary>

```diff
@@ -516,31 +516,31 @@
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
       return ⟦2-char-id⟧((function() {
         ⟦2-char-id⟧.current = ⟦2-char-id⟧
-      })), cJ
+      })), TB
     };
     var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
       (0, ⟦2-char-id⟧.useEffect)((function() {
         var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          if (null != ⟦2-char-id⟧.current && (⟦2-char-id⟧ = ⟦2-char-id⟧.current(⟦2-char-id⟧)), ⟦2-char-id⟧.defaultPrevented && (⟦2-char-id⟧.returnValue = ""), "string" === typeof ⟦2-char-id⟧) return ⟦2-char-id⟧.returnValue = ⟦2-char-id⟧, ZJ
+          if (null != ⟦2-char-id⟧.current && (⟦2-char-id⟧ = ⟦2-char-id⟧.current(⟦2-char-id⟧)), ⟦2-char-id⟧.defaultPrevented && (⟦2-char-id⟧.returnValue = ""), "string" === typeof ⟦2-char-id⟧) return ⟦2-char-id⟧.returnValue = ⟦2-char-id⟧, dB
         };
         return window.addEventListener("beforeunload", ⟦2-char-id⟧),
           function() {
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

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
<summary>Hunk 21 · Change · +8 / -8</summary>

```diff
@@ -664,22 +664,22 @@
     for (⟦2-char-id⟧ = 96; ⟦2-char-id⟧ < 106; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = "<num-" + (⟦2-char-id⟧ - 96) + ">";
     for (⟦2-char-id⟧ = 112; ⟦2-char-id⟧ < 136; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = "F" + (⟦2-char-id⟧ - 111)
   },
-  37988: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+  37979: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = {};
       return Object.keys(⟦2-char-id⟧).forEach((function(⟦2-char-id⟧) {
         ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧]
       })), ⟦2-char-id⟧.enumerable = !!⟦2-char-id⟧.enumerable, ⟦2-char-id⟧.configurable = !!⟦2-char-id⟧.configurable, ("value" in ⟦2-char-id⟧ || ⟦2-char-id⟧.initializer) && (⟦2-char-id⟧.writable = !0), ⟦2-char-id⟧ = ⟦2-char-id⟧.slice().reverse().reduce((function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) || ⟦2-char-id⟧
-      }), ⟦2-char-id⟧), ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧.initializer && (⟦2-char-id⟧.value = ⟦2-char-id⟧.initializer ? ⟦2-char-id⟧.initializer.call(⟦2-char-id⟧) : void 0, ⟦2-char-id⟧.initializer = void 0), void 0 === ⟦2-char-id⟧.initializer && (Object.defineProperty(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = null), eJ
+        return ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) || ⟦2-char-id⟧
+      }), ⟦2-char-id⟧), ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧.initializer && (⟦2-char-id⟧.value = ⟦2-char-id⟧.initializer ? ⟦2-char-id⟧.initializer.call(⟦2-char-id⟧) : void 0, ⟦2-char-id⟧.initializer = void 0), void 0 === ⟦2-char-id⟧.initializer && (Object.defineProperty(⟦2-char-id⟧, TB, ⟦2-char-id⟧), ⟦2-char-id⟧ = null), pB
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     })
   },
-  37984: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧ && Object.defineProperty(⟦2-char-id⟧, cJ, {
+  37976: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      ⟦2-char-id⟧ && Object.defineProperty(⟦2-char-id⟧, TB, {
         enumerable: ⟦2-char-id⟧.enumerable,
         configurable: ⟦2-char-id⟧.configurable,
         writable: ⟦2-char-id⟧.writable,
```

</details>

<details>
<summary>Hunk 22 · Change · +9 / -9</summary>

```diff
@@ -687,19 +687,19 @@
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
-    const ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧.getClassName && "Mesh" === ⟦2-char-id⟧.getClassName() ? null : !⟦2-char-id⟧.getClassName || "SubMesh" !== ⟦2-char-id⟧.getClassName() && "PhysicsBody" !== ⟦2-char-id⟧.getClassName() ? ⟦2-char-id⟧.clone ? ⟦2-char-id⟧.clone() : Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice() : ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ ? {
-      ...JJ
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37651);
+    const ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧.getClassName && "Mesh" === ⟦2-char-id⟧.getClassName() ? null : !⟦2-char-id⟧.getClassName || "SubMesh" !== ⟦2-char-id⟧.getClassName() && "PhysicsBody" !== ⟦2-char-id⟧.getClassName() ? ⟦2-char-id⟧.clone ? ⟦2-char-id⟧.clone() : Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice() : ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ ? {
+      ...BB
     } : null : ⟦2-char-id⟧.clone(⟦2-char-id⟧) : null;
     class ⟦2-char-id⟧ {
-      static DeepCopy(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      static DeepCopy(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
         const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 23 · Change · +10 / -10</summary>

```diff
@@ -722,31 +722,31 @@
               if (⟦2-char-id⟧[⟦2-char-id⟧] = [], ⟦2-char-id⟧.length > 0)
                 if ("object" == typeof ⟦2-char-id⟧[0])
                   for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
-                    const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], cJ, ⟦2-char-id⟧); - 1 === ⟦2-char-id⟧[⟦2-char-id⟧].indexOf(⟦2-char-id⟧) && ⟦2-char-id⟧[⟦2-char-id⟧].push(⟦2-char-id⟧)
+                    const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], TB, ⟦2-char-id⟧); - 1 === ⟦2-char-id⟧[⟦2-char-id⟧].indexOf(⟦2-char-id⟧) && ⟦2-char-id⟧[⟦2-char-id⟧].push(⟦2-char-id⟧)
                   } else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.slice(0)
-            } else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+            } else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
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
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -755,7 +755,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.gradient = ⟦2-char-id⟧, this.factor1 = ⟦2-char-id⟧, this.factor2 = ⟦2-char-id⟧
       }
       getFactor() {
```

</details>

<details>
<summary>Hunk 25 · Change · +2 / -2</summary>

```diff
@@ -763,13 +763,13 @@
       }
     }
     class ⟦2-char-id⟧ {
-      static GetCurrentGradient(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static GetCurrentGradient(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         if (⟦2-char-id⟧[0].gradient > ⟦2-char-id⟧) return void ⟦2-char-id⟧(⟦2-char-id⟧[0], ⟦2-char-id⟧[0], 1);
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1];
           if (⟦2-char-id⟧ >= ⟦2-char-id⟧.gradient && ⟦2-char-id⟧ <= ⟦2-char-id⟧.gradient) {
-            return void ⟦2-char-id⟧(⟦2-char-id⟧, eJ, (⟦2-char-id⟧ - ⟦2-char-id⟧.gradient) / (⟦2-char-id⟧.gradient - ⟦2-char-id⟧.gradient))
+            return void ⟦2-char-id⟧(⟦2-char-id⟧, pB, (⟦2-char-id⟧ - ⟦2-char-id⟧.gradient) / (⟦2-char-id⟧.gradient - ⟦2-char-id⟧.gradient))
           }
         }
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1;
```

</details>

<details>
<summary>Hunk 26 · Change · +2 / -2</summary>

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
<summary>Hunk 27 · Change · +1 / -1</summary>

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
<summary>Hunk 28 · Change · +2 / -2</summary>

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
<summary>Hunk 29 · Change · +12 / -12</summary>

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
-      }
-      startDirectionFunction(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        this.direction1 = new ⟦2-char-id⟧.p(0, 1, 0), this.direction2 = new ⟦2-char-id⟧.p(0, 1, 0), this.minEmitBox = new ⟦2-char-id⟧.p(-.5, -.5, -.5), this.maxEmitBox = new ⟦2-char-id⟧.p(.5, .5, .5)
+      }
+      startDirectionFunction(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.x, this.direction2.x),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.y, this.direction2.y),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.z, this.direction2.z);
         if (⟦2-char-id⟧) return ⟦2-char-id⟧.x = ⟦2-char-id⟧, ⟦2-char-id⟧.y = ⟦2-char-id⟧, void(⟦2-char-id⟧.z = ⟦2-char-id⟧);
-        ⟦2-char-id⟧.j.TransformNormalFromFloatsToRef(⟦2-char-id⟧, AJ, qJ, JJ, ⟦2-char-id⟧)
-      }
-      startPositionFunction(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        ⟦2-char-id⟧.p.TransformNormalFromFloatsToRef(⟦2-char-id⟧, JB, YB, BB, ⟦2-char-id⟧)
+      }
+      startPositionFunction(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
         if (⟦2-char-id⟧) return ⟦2-char-id⟧.x = ⟦2-char-id⟧, ⟦2-char-id⟧.y = ⟦2-char-id⟧, void(⟦2-char-id⟧.z = ⟦2-char-id⟧);
-        ⟦2-char-id⟧.j.TransformCoordinatesFromFloatsToRef(⟦2-char-id⟧, AJ, qJ, JJ, ⟦2-char-id⟧)
+        ⟦2-char-id⟧.p.TransformCoordinatesFromFloatsToRef(⟦2-char-id⟧, JB, YB, BB, ⟦2-char-id⟧)
       }
       clone() {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.e.DeepCopy(this, ⟦2-char-id⟧), JJ
+        return ⟦2-char-id⟧.b.DeepCopy(this, ⟦2-char-id⟧), BB
       }
       applyToShader(⟦2-char-id⟧) {
         ⟦2-char-id⟧.setVector3("direction1", this.direction1), ⟦2-char-id⟧.setVector3("direction2", this.direction2), ⟦2-char-id⟧.setVector3("minEmitBox", this.minEmitBox), ⟦2-char-id⟧.setVector3("maxEmitBox", this.maxEmitBox)
```

</details>

<details>
<summary>Hunk 30 · Change · +20 / -20</summary>

```diff
@@ -891,47 +891,47 @@
       }
       serialize() {
         const ⟦2-char-id⟧ = {};
-        return ⟦2-char-id⟧.type = this.getClassName(), ⟦2-char-id⟧.direction1 = this.direction1.JFJ(), ⟦2-char-id⟧.direction2 = this.direction2.JFJ(), ⟦2-char-id⟧.minEmitBox = this.minEmitBox.JFJ(), ⟦2-char-id⟧.maxEmitBox = this.maxEmitBox.JFJ(), JJ
+        return ⟦2-char-id⟧.type = this.getClassName(), ⟦2-char-id⟧.direction1 = this.direction1.FVB(), ⟦2-char-id⟧.direction2 = this.direction2.FVB(), ⟦2-char-id⟧.minEmitBox = this.minEmitBox.FVB(), ⟦2-char-id⟧.maxEmitBox = this.maxEmitBox.FVB(), BB
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
-      }
-      startDirectionFunction(⟦2-char-id⟧, cJ, ZJ, eJ, ⟦2-char-id⟧) {
-        ⟦2-char-id⟧.position.subtractToRef(⟦2-char-id⟧.getTranslation(), this._tempVector), this._tempVector.normalize(), ⟦2-char-id⟧.j.TransformNormalToRef(this._tempVector, XJ, this._tempVector);
+        this.radius = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧, this.radiusRange = ⟦2-char-id⟧, this.directionRandomizer = ⟦2-char-id⟧, this._tempVector = ⟦2-char-id⟧.p.Zero()
+      }
+      startDirectionFunction(⟦2-char-id⟧, TB, dB, pB, ⟦2-char-id⟧) {
+        ⟦2-char-id⟧.position.subtractToRef(⟦2-char-id⟧.getTranslation(), this._tempVector), this._tempVector.normalize(), ⟦2-char-id⟧.p.TransformNormalToRef(this._tempVector, lB, this._tempVector);
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
         let ⟦2-char-id⟧ = Math.atan2(this._tempVector.x, this._tempVector.z);
-        ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = ⟦2-char-id⟧, this._tempVector.x = Math.sin(⟦2-char-id⟧), this._tempVector.z = Math.cos(⟦2-char-id⟧), this._tempVector.normalize(), ⟦2-char-id⟧ ? ⟦2-char-id⟧.rZJ(this._tempVector) : ⟦2-char-id⟧.j.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, JJ, ⟦2-char-id⟧)
-      }
-      startPositionFunction(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = ⟦2-char-id⟧, this._tempVector.x = Math.sin(⟦2-char-id⟧), this._tempVector.z = Math.cos(⟦2-char-id⟧), this._tempVector.normalize(), ⟦2-char-id⟧ ? ⟦2-char-id⟧.bdB(this._tempVector) : ⟦2-char-id⟧.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, BB, ⟦2-char-id⟧)
+      }
+      startPositionFunction(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(-this.height / 2, this.height / 2),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(0, 2 * Math.PI),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
           ⟦2-char-id⟧ = Math.sqrt(⟦2-char-id⟧) * this.radius,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * Math.cos(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * Math.sin(⟦2-char-id⟧);
-        ⟦2-char-id⟧ ? ⟦2-char-id⟧.K9(⟦2-char-id⟧, XJ, ⟦2-char-id⟧) : ⟦2-char-id⟧.j.TransformCoordinatesFromFloatsToRef(⟦2-char-id⟧, XJ, hJ, JJ, ⟦2-char-id⟧)
+        ⟦2-char-id⟧ ? ⟦2-char-id⟧.YBB(⟦2-char-id⟧, lB, ⟦2-char-id⟧) : ⟦2-char-id⟧.p.TransformCoordinatesFromFloatsToRef(⟦2-char-id⟧, lB, kB, BB, ⟦2-char-id⟧)
       }
       clone() {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.radius, this.directionRandomizer);
-        return ⟦2-char-id⟧.e.DeepCopy(this, ⟦2-char-id⟧), JJ
+        return ⟦2-char-id⟧.b.DeepCopy(this, ⟦2-char-id⟧), BB
       }
       applyToShader(⟦2-char-id⟧) {
         ⟦2-char-id⟧.setFloat("radius", this.radius), ⟦2-char-id⟧.setFloat("height", this.height), ⟦2-char-id⟧.setFloat("radiusRange", this.radiusRange), ⟦2-char-id⟧.setFloat("directionRandomizer", this.directionRandomizer)
```

</details>

<details>
<summary>Hunk 31 · Change · +1 / -1</summary>

```diff
@@ -947,7 +947,7 @@
       }
       serialize() {
         const ⟦2-char-id⟧ = {};
-        return ⟦2-char-id⟧.type = this.getClassName(), ⟦2-char-id⟧.radius = this.radius, ⟦2-char-id⟧.height = this.height, ⟦2-char-id⟧.radiusRange = this.radiusRange, ⟦2-char-id⟧.directionRandomizer = this.directionRandomizer, JJ
+        return ⟦2-char-id⟧.type = this.getClassName(), ⟦2-char-id⟧.radius = this.radius, ⟦2-char-id⟧.height = this.height, ⟦2-char-id⟧.radiusRange = this.radiusRange, ⟦2-char-id⟧.directionRandomizer = this.directionRandomizer, BB
       }
       parse(⟦2-char-id⟧) {
         this.radius = ⟦2-char-id⟧.radius, this.height = ⟦2-char-id⟧.height, this.radiusRange = ⟦2-char-id⟧.radiusRange, this.directionRandomizer = ⟦2-char-id⟧.directionRandomizer
```

</details>

<details>
<summary>Hunk 32 · Change · +7 / -7</summary>

```diff
@@ -958,19 +958,19 @@
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
           ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
           ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-          ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ⟦2-char-id⟧.j(0, 1, 0),
-          ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ⟦2-char-id⟧.j(0, 1, 0);
-        super(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), this.direction1 = ⟦2-char-id⟧, this.direction2 = ⟦2-char-id⟧
-      }
-      startDirectionFunction(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+          ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ⟦2-char-id⟧.p(0, 1, 0),
+          ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ⟦2-char-id⟧.p(0, 1, 0);
+        super(⟦2-char-id⟧, TB, ⟦2-char-id⟧), this.direction1 = ⟦2-char-id⟧, this.direction2 = ⟦2-char-id⟧
+      }
+      startDirectionFunction(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.x, this.direction2.x),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.y, this.direction2.y),
           ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.RandomRange)(this.direction1.z, this.direction2.z);
-        ⟦2-char-id⟧ ? ⟦2-char-id⟧.K9(⟦2-char-id⟧, AJ, ⟦2-char-id⟧) : ⟦2-char-id⟧.j.TransformNormalFromFloatsToRef(⟦2-char-id⟧, AJ, qJ, JJ, ⟦2-char-id⟧)
+        ⟦2-char-id⟧ ? ⟦2-char-id⟧.YBB(⟦2-char-id⟧, JB, ⟦2-char-id⟧) : ⟦2-char-id⟧.p.TransformNormalFromFloatsToRef(⟦2-char-id⟧, JB, YB, BB, ⟦2-char-id⟧)
       }
       clone() {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
-        return ⟦2-char-id⟧.e.DeepCopy(this, ⟦2-char-id⟧), JJ
+        return ⟦2-char-id⟧.b.DeepCopy(this, ⟦2-char-id⟧), BB
       }
       applyToShader(⟦2-char-id⟧) {
         ⟦2-char-id⟧.setFloat("radius", this.radius), ⟦2-char-id⟧.setFloat("height", this.height), ⟦2-char-id⟧.setFloat("radiusRange", this.radiusRange), ⟦2-char-id⟧.setVector3("direction1", this.direction1), ⟦2-char-id⟧.setVector3("direction2", this.direction2)
```

</details>

<details>
<summary>Hunk 33 · Change · +7 / -7</summary>

```diff
@@ -986,16 +986,16 @@
       }
       serialize() {
         const ⟦2-char-id⟧ = super.serialize();
-        return ⟦2-char-id⟧.direction1 = this.direction1.JFJ(), ⟦2-char-id⟧.direction2 = this.direction2.JFJ(), JJ
+        return ⟦2-char-id⟧.direction1 = this.direction1.FVB(), ⟦2-char-id⟧.direction2 = this.direction2.FVB(), BB
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
<summary>Hunk 34 · Change · +1 / -1</summary>

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

<details>
<summary>Hunk 35 · Change · +2 / -2</summary>

```diff
@@ -1082,10 +1082,10 @@
         }
         return 70 * (⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧)
       }
-      noise3D(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      noise3D(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.permMod12,
           ⟦2-char-id⟧ = this.perm;
-        let ⟦2-char-id⟧, qJ, YJ, ⟦2-char-id⟧;
+        let ⟦2-char-id⟧, YB, oB, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧,
           ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ + ⟦2-char-id⟧),
           ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ + ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 36 · Change · +1 / -1</summary>

```diff
@@ -1094,7 +1094,7 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧ - (⟦2-char-id⟧ - ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ - (⟦2-char-id⟧ - ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ - (⟦2-char-id⟧ - ⟦2-char-id⟧);
-        let ⟦2-char-id⟧, QJ, EJ, VJ, KJ, ⟦2-char-id⟧;
+        let ⟦2-char-id⟧, NB, tB, fB, sB, ⟦2-char-id⟧;
         ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0) : ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1) : (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1) : ⟦2-char-id⟧ < ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 1) : ⟦2-char-id⟧ < ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 1) : (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧ + ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧ + ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 37 · Change · +2 / -2</summary>

```diff
@@ -1134,9 +1134,9 @@
         }
         return 32 * (⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧)
       }
-      noise4D(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      noise4D(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.perm;
-        let ⟦2-char-id⟧, XJ, jJ, hJ, ⟦2-char-id⟧;
+        let ⟦2-char-id⟧, lB, gB, kB, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧,
           ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ + ⟦2-char-id⟧),
           ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ + ⟦2-char-id⟧),
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/199.js</code> · modified · +97 / -97</summary>

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
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -164,13 +164,13 @@
       get: {}
     };
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return Math.min(Math.max(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧)
     }
 
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
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -190,7 +190,7 @@
       } : null
     }, ⟦2-char-id⟧.get.rgb = function(⟦2-char-id⟧) {
       if (!⟦2-char-id⟧) return null;
-      var ⟦2-char-id⟧, ZJ, UJ, ⟦2-char-id⟧ = [0, 0, 0, 1];
+      var ⟦2-char-id⟧, dB, yB, ⟦2-char-id⟧ = [0, 0, 0, 1];
       if (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
         for (⟦2-char-id⟧ = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 3; ⟦2-char-id⟧++) {
           var ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -209,13 +209,13 @@
         ⟦2-char-id⟧[4] && (⟦2-char-id⟧[5] ? ⟦2-char-id⟧[3] = .01 * parseFloat(⟦2-char-id⟧[4]) : ⟦2-char-id⟧[3] = parseFloat(⟦2-char-id⟧[4]))
       }
       for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 3; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], 0, 255);
-      return ⟦2-char-id⟧[3] = ⟦2-char-id⟧(⟦2-char-id⟧[3], 0, 1), XJ
+      return ⟦2-char-id⟧[3] = ⟦2-char-id⟧(⟦2-char-id⟧[3], 0, 1), lB
     }, ⟦2-char-id⟧.get.hsl = function(⟦2-char-id⟧) {
       if (!⟦2-char-id⟧) return null;
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
       if (⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = parseFloat(⟦2-char-id⟧[4]);
-        return [(parseFloat(⟦2-char-id⟧[1]) % 360 + 360) % 360, jJ(parseFloat(⟦2-char-id⟧[2]), 0, 100), jJ(parseFloat(⟦2-char-id⟧[3]), 0, 100), jJ(isNaN(⟦2-char-id⟧) ? 1 : ⟦2-char-id⟧, 0, 1)]
+        return [(parseFloat(⟦2-char-id⟧[1]) % 360 + 360) % 360, gB(parseFloat(⟦2-char-id⟧[2]), 0, 100), gB(parseFloat(⟦2-char-id⟧[3]), 0, 100), gB(isNaN(⟦2-char-id⟧) ? 1 : ⟦2-char-id⟧, 0, 1)]
       }
       return null
     }, ⟦2-char-id⟧.get.hwb = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -223,7 +223,7 @@
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
       if (⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = parseFloat(⟦2-char-id⟧[4]);
-        return [(parseFloat(⟦2-char-id⟧[1]) % 360 + 360) % 360, jJ(parseFloat(⟦2-char-id⟧[2]), 0, 100), jJ(parseFloat(⟦2-char-id⟧[3]), 0, 100), jJ(isNaN(⟦2-char-id⟧) ? 1 : ⟦2-char-id⟧, 0, 1)]
+        return [(parseFloat(⟦2-char-id⟧[1]) % 360 + 360) % 360, gB(parseFloat(⟦2-char-id⟧[2]), 0, 100), gB(parseFloat(⟦2-char-id⟧[3]), 0, 100), gB(isNaN(⟦2-char-id⟧) ? 1 : ⟦2-char-id⟧, 0, 1)]
       }
       return null
     }, ⟦2-char-id⟧.to.hex = function() {
```

</details>

<details>
<summary>Hunk 7 · Change · +4 / -4</summary>

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
<summary>Hunk 8 · Change · +1 / -1</summary>

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
<summary>Hunk 9 · Change · +4 / -4</summary>

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
<summary>Hunk 10 · Change · +3 / -3</summary>

```diff
@@ -322,15 +322,15 @@
             labels: ⟦2-char-id⟧
           } = ⟦2-char-id⟧[this.model];
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] = this.color[⟦2-char-id⟧];
-        return 1 !== this.valpha && (⟦2-char-id⟧.alpha = this.valpha), JJ
+        return 1 !== this.valpha && (⟦2-char-id⟧.alpha = this.valpha), BB
       },
       unitArray() {
         const ⟦2-char-id⟧ = this.rgb().color;
-        return ⟦2-char-id⟧[0] /= 255, ⟦2-char-id⟧[1] /= 255, ⟦2-char-id⟧[2] /= 255, 1 !== this.valpha && ⟦2-char-id⟧.push(this.valpha), JJ
+        return ⟦2-char-id⟧[0] /= 255, ⟦2-char-id⟧[1] /= 255, ⟦2-char-id⟧[2] /= 255, 1 !== this.valpha && ⟦2-char-id⟧.push(this.valpha), BB
       },
       unitObject() {
         const ⟦2-char-id⟧ = this.rgb().object();
-        return ⟦2-char-id⟧.r /= 255, ⟦2-char-id⟧.g /= 255, ⟦2-char-id⟧.b /= 255, 1 !== this.valpha && (⟦2-char-id⟧.alpha = this.valpha), JJ
+        return ⟦2-char-id⟧.r /= 255, ⟦2-char-id⟧.g /= 255, ⟦2-char-id⟧.b /= 255, 1 !== this.valpha && (⟦2-char-id⟧.alpha = this.valpha), BB
       },
       round(⟦2-char-id⟧) {
         return ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧ || 0, 0), new ⟦2-char-id⟧([...this.color.map(⟦2-char-id⟧(⟦2-char-id⟧)), this.valpha], this.model)
```

</details>

<details>
<summary>Hunk 11 · Change · +19 / -19</summary>

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
<summary>Hunk 12 · Change · +8 / -8</summary>

```diff
@@ -401,39 +401,39 @@
       isLight() {
         return !this.isDark()
       },
-      nZ() {
+      fp() {
         const ⟦2-char-id⟧ = this.rgb();
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 3; ⟦2-char-id⟧++) ⟦2-char-id⟧.color[⟦2-char-id⟧] = 255 - ⟦2-char-id⟧.color[⟦2-char-id⟧];
         return ⟦2-char-id⟧
       },
       lighten(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.hsl();
-        return ⟦2-char-id⟧.color[2] += ⟦2-char-id⟧.color[2] * ⟦2-char-id⟧, cJ
+        return ⟦2-char-id⟧.color[2] += ⟦2-char-id⟧.color[2] * ⟦2-char-id⟧, TB
       },
       darken(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.hsl();
-        return ⟦2-char-id⟧.color[2] -= ⟦2-char-id⟧.color[2] * ⟦2-char-id⟧, cJ
+        return ⟦2-char-id⟧.color[2] -= ⟦2-char-id⟧.color[2] * ⟦2-char-id⟧, TB
       },
       saturate(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.hsl();
-        return ⟦2-char-id⟧.color[1] += ⟦2-char-id⟧.color[1] * ⟦2-char-id⟧, cJ
+        return ⟦2-char-id⟧.color[1] += ⟦2-char-id⟧.color[1] * ⟦2-char-id⟧, TB
       },
       desaturate(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.hsl();
-        return ⟦2-char-id⟧.color[1] -= ⟦2-char-id⟧.color[1] * ⟦2-char-id⟧, cJ
+        return ⟦2-char-id⟧.color[1] -= ⟦2-char-id⟧.color[1] * ⟦2-char-id⟧, TB
       },
       whiten(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.hwb();
-        return ⟦2-char-id⟧.color[1] += ⟦2-char-id⟧.color[1] * ⟦2-char-id⟧, cJ
+        return ⟦2-char-id⟧.color[1] += ⟦2-char-id⟧.color[1] * ⟦2-char-id⟧, TB
       },
       blacken(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.hwb();
-        return ⟦2-char-id⟧.color[2] += ⟦2-char-id⟧.color[2] * ⟦2-char-id⟧, cJ
+        return ⟦2-char-id⟧.color[2] += ⟦2-char-id⟧.color[2] * ⟦2-char-id⟧, TB
       },
       grayscale() {
         const ⟦2-char-id⟧ = this.rgb().color,
           ⟦2-char-id⟧ = .3 * ⟦2-char-id⟧[0] + .59 * ⟦2-char-id⟧[1] + .11 * ⟦2-char-id⟧[2];
-        return ⟦2-char-id⟧.rgb(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+        return ⟦2-char-id⟧.rgb(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       },
       fade(⟦2-char-id⟧) {
         return this.alpha(this.valpha - this.valpha * ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -444,7 +444,7 @@
       rotate(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.hsl();
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.color[0];
-        return ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧) % 360, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? 360 + ZJ : ⟦2-char-id⟧, ⟦2-char-id⟧.color[0] = ⟦2-char-id⟧, cJ
+        return ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧) % 360, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? 360 + dB : ⟦2-char-id⟧, ⟦2-char-id⟧.color[0] = ⟦2-char-id⟧, TB
       },
       mix(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 14 · Change · +1 / -1</summary>

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
<summary>Hunk 15 · Change · +1 / -1</summary>

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
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -483,8 +483,8 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? JJ : [⟦2-char-id⟧];
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? BB : [⟦2-char-id⟧];
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)(⟦2-char-id⟧[⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧] = []))[⟦2-char-id⟧] = ⟦2-char-id⟧;
       return ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
         function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

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
<summary>Hunk 18 · Change · +7 / -7</summary>

```diff
@@ -590,24 +590,24 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0] / 255,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[1] / 255,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[2] / 255,
-        ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧),
+        ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, dB, ⟦2-char-id⟧),
+        ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, dB, ⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
       let ⟦2-char-id⟧, ⟦2-char-id⟧;
-      ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 0 : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧) / XJ : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 2 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / XJ : ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 4 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.min(60 * ⟦2-char-id⟧, 360), ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ += 360);
+      ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 0 : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧) / lB : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 2 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / lB : ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 4 + (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.min(60 * ⟦2-char-id⟧, 360), ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ += 360);
       const ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧) / 2;
       return ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧ <= .5 ? ⟦2-char-id⟧ / (⟦2-char-id⟧ + ⟦2-char-id⟧) : ⟦2-char-id⟧ / (2 - ⟦2-char-id⟧ - ⟦2-char-id⟧), [⟦2-char-id⟧, 100 * ⟦2-char-id⟧, 100 * ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.rgb.hsv = function(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧, ZJ, FJ, UJ, ⟦2-char-id⟧;
+      let ⟦2-char-id⟧, dB, VB, yB, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0] / 255,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[1] / 255,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[2] / 255,
-        ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, AJ, ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ - Math.min(⟦2-char-id⟧, AJ, ⟦2-char-id⟧),
+        ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, JB, ⟦2-char-id⟧),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ - Math.min(⟦2-char-id⟧, JB, ⟦2-char-id⟧),
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
<summary>Hunk 19 · Change · +3 / -3</summary>

```diff
@@ -651,12 +651,12 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0] / 360,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[1] / 100,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[2] / 100;
-      let ⟦2-char-id⟧, eJ, ⟦2-char-id⟧;
-      if (0 === ⟦2-char-id⟧) return ⟦2-char-id⟧ = 255 * ⟦2-char-id⟧, [⟦2-char-id⟧, XJ, ⟦2-char-id⟧];
+      let ⟦2-char-id⟧, pB, ⟦2-char-id⟧;
+      if (0 === ⟦2-char-id⟧) return ⟦2-char-id⟧ = 255 * ⟦2-char-id⟧, [⟦2-char-id⟧, lB, ⟦2-char-id⟧];
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
<summary>Hunk 20 · Change · +1 / -1</summary>

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
<summary>Hunk 21 · Change · +6 / -6</summary>

```diff
@@ -677,17 +677,17 @@
         ⟦2-char-id⟧ = 255 * ⟦2-char-id⟧ * (1 - ⟦2-char-id⟧ * (1 - ⟦2-char-id⟧));
       switch (⟦2-char-id⟧ *= 255, ⟦2-char-id⟧) {
         case 0:
-          return [⟦2-char-id⟧, qJ, ⟦2-char-id⟧];
+          return [⟦2-char-id⟧, YB, ⟦2-char-id⟧];
         case 1:
-          return [⟦2-char-id⟧, FJ, ⟦2-char-id⟧];
+          return [⟦2-char-id⟧, VB, ⟦2-char-id⟧];
         case 2:
-          return [⟦2-char-id⟧, FJ, ⟦2-char-id⟧];
+          return [⟦2-char-id⟧, VB, ⟦2-char-id⟧];
         case 3:
-          return [⟦2-char-id⟧, AJ, ⟦2-char-id⟧];
+          return [⟦2-char-id⟧, JB, ⟦2-char-id⟧];
         case 4:
-          return [⟦2-char-id⟧, XJ, ⟦2-char-id⟧];
+          return [⟦2-char-id⟧, lB, ⟦2-char-id⟧];
         case 5:
-          return [⟦2-char-id⟧, XJ, ⟦2-char-id⟧]
+          return [⟦2-char-id⟧, lB, ⟦2-char-id⟧]
       }
     }, ⟦2-char-id⟧.hsv.hsl = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

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
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -709,7 +709,7 @@
         ⟦2-char-id⟧ = 1 - ⟦2-char-id⟧;
       ⟦2-char-id⟧ = 6 * ⟦2-char-id⟧ - ⟦2-char-id⟧, 0 !== (1 & ⟦2-char-id⟧) && (⟦2-char-id⟧ = 1 - ⟦2-char-id⟧);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ * (⟦2-char-id⟧ - ⟦2-char-id⟧);
-      let ⟦2-char-id⟧, YJ, ⟦2-char-id⟧;
+      let ⟦2-char-id⟧, oB, ⟦2-char-id⟧;
       switch (⟦2-char-id⟧) {
         default:
         case 6:
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -742,7 +742,7 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0] / 100,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[1] / 100,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[2] / 100;
-      let ⟦2-char-id⟧, eJ, ⟦2-char-id⟧;
+      let ⟦2-char-id⟧, pB, ⟦2-char-id⟧;
       return ⟦2-char-id⟧ = 3.2406 * ⟦2-char-id⟧ + -1.5372 * ⟦2-char-id⟧ + -.4986 * ⟦2-char-id⟧, ⟦2-char-id⟧ = -.9689 * ⟦2-char-id⟧ + 1.8758 * ⟦2-char-id⟧ + .0415 * ⟦2-char-id⟧, ⟦2-char-id⟧ = .0557 * ⟦2-char-id⟧ + -.204 * ⟦2-char-id⟧ + 1.057 * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .0031308 ? 1.055 * ⟦2-char-id⟧ ** (1 / 2.4) - .055 : 12.92 * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .0031308 ? 1.055 * ⟦2-char-id⟧ ** (1 / 2.4) - .055 : 12.92 * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .0031308 ? 1.055 * ⟦2-char-id⟧ ** (1 / 2.4) - .055 : 12.92 * ⟦2-char-id⟧, ⟦2-char-id⟧ = Math.min(Math.max(0, ⟦2-char-id⟧), 1), ⟦2-char-id⟧ = Math.min(Math.max(0, ⟦2-char-id⟧), 1), ⟦2-char-id⟧ = Math.min(Math.max(0, ⟦2-char-id⟧), 1), [255 * ⟦2-char-id⟧, 255 * ⟦2-char-id⟧, 255 * ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.xyz.lab = function(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
```

</details>

<details>
<summary>Hunk 25 · Change · +2 / -2</summary>

```diff
@@ -751,12 +751,12 @@
       ⟦2-char-id⟧ /= 95.047, ⟦2-char-id⟧ /= 100, ⟦2-char-id⟧ /= 108.883, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? ⟦2-char-id⟧ ** (1 / 3) : 7.787 * ⟦2-char-id⟧ + 16 / 116, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? ⟦2-char-id⟧ ** (1 / 3) : 7.787 * ⟦2-char-id⟧ + 16 / 116, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? ⟦2-char-id⟧ ** (1 / 3) : 7.787 * ⟦2-char-id⟧ + 16 / 116;
       return [116 * ⟦2-char-id⟧ - 16, 500 * (⟦2-char-id⟧ - ⟦2-char-id⟧), 200 * (⟦2-char-id⟧ - ⟦2-char-id⟧)]
     }, ⟦2-char-id⟧.lab.xyz = function(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧;
+      let ⟦2-char-id⟧, dB, ⟦2-char-id⟧;
       ⟦2-char-id⟧ = (⟦2-char-id⟧[0] + 16) / 116, ⟦2-char-id⟧ = ⟦2-char-id⟧[1] / 500 + ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧[2] / 200;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ ** 3,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ** 3,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ** 3;
-      return ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? UJ : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? eJ : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? XJ : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ *= 95.047, ⟦2-char-id⟧ *= 100, ⟦2-char-id⟧ *= 108.883, [⟦2-char-id⟧, ZJ, ⟦2-char-id⟧]
+      return ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? yB : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? pB : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ = ⟦2-char-id⟧ > .008856 ? lB : (⟦2-char-id⟧ - 16 / 116) / 7.787, ⟦2-char-id⟧ *= 95.047, ⟦2-char-id⟧ *= 100, ⟦2-char-id⟧ *= 108.883, [⟦2-char-id⟧, dB, ⟦2-char-id⟧]
     }, ⟦2-char-id⟧.lab.lch = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[1],
```

</details>

<details>
<summary>Hunk 26 · Change · +2 / -2</summary>

```diff
@@ -771,11 +771,11 @@
       return [⟦2-char-id⟧, ⟦2-char-id⟧ * Math.cos(⟦2-char-id⟧), ⟦2-char-id⟧ * Math.sin(⟦2-char-id⟧)]
     }, ⟦2-char-id⟧.rgb.ansi16 = function(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-      const [⟦2-char-id⟧, FJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+      const [⟦2-char-id⟧, VB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.rgb.hsv(⟦2-char-id⟧)[2] : ⟦2-char-id⟧;
       if (⟦2-char-id⟧ = Math.round(⟦2-char-id⟧ / 50), 0 === ⟦2-char-id⟧) return 30;
       let ⟦2-char-id⟧ = 30 + (Math.round(⟦2-char-id⟧ / 255) << 2 | Math.round(⟦2-char-id⟧ / 255) << 1 | Math.round(⟦2-char-id⟧ / 255));
-      return 2 === ⟦2-char-id⟧ && (⟦2-char-id⟧ += 60), AJ
+      return 2 === ⟦2-char-id⟧ && (⟦2-char-id⟧ += 60), JB
     }, ⟦2-char-id⟧.hsv.ansi16 = function(⟦2-char-id⟧) {
       return ⟦2-char-id⟧.rgb.ansi16(⟦2-char-id⟧.hsv.rgb(⟦2-char-id⟧), ⟦2-char-id⟧[2])
     }, ⟦2-char-id⟧.rgb.ansi256 = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 27 · Change · +2 / -2</summary>

```diff
@@ -786,13 +786,13 @@
       return 16 + 36 * Math.round(⟦2-char-id⟧ / 255 * 5) + 6 * Math.round(⟦2-char-id⟧ / 255 * 5) + Math.round(⟦2-char-id⟧ / 255 * 5)
     }, ⟦2-char-id⟧.ansi16.rgb = function(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ % 10;
-      if (0 === ⟦2-char-id⟧ || 7 === ⟦2-char-id⟧) return ⟦2-char-id⟧ > 50 && (⟦2-char-id⟧ += 3.5), ⟦2-char-id⟧ = ⟦2-char-id⟧ / 10.5 * 255, [⟦2-char-id⟧, cJ, ⟦2-char-id⟧];
+      if (0 === ⟦2-char-id⟧ || 7 === ⟦2-char-id⟧) return ⟦2-char-id⟧ > 50 && (⟦2-char-id⟧ += 3.5), ⟦2-char-id⟧ = ⟦2-char-id⟧ / 10.5 * 255, [⟦2-char-id⟧, TB, ⟦2-char-id⟧];
       const ⟦2-char-id⟧ = .5 * (1 + ~~(⟦2-char-id⟧ > 50));
       return [(1 & ⟦2-char-id⟧) * ⟦2-char-id⟧ * 255, (⟦2-char-id⟧ >> 1 & 1) * ⟦2-char-id⟧ * 255, (⟦2-char-id⟧ >> 2 & 1) * ⟦2-char-id⟧ * 255]
     }, ⟦2-char-id⟧.ansi256.rgb = function(⟦2-char-id⟧) {
       if (⟦2-char-id⟧ >= 232) {
         const ⟦2-char-id⟧ = 10 * (⟦2-char-id⟧ - 232) + 8;
-        return [⟦2-char-id⟧, cJ, ⟦2-char-id⟧]
+        return [⟦2-char-id⟧, TB, ⟦2-char-id⟧]
       }
       let ⟦2-char-id⟧;
       ⟦2-char-id⟧ -= 16;
```

</details>

<details>
<summary>Hunk 28 · Change · +2 / -2</summary>

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
<summary>Hunk 29 · Change · +3 / -3</summary>

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
<summary>Hunk 30 · Change · +5 / -5</summary>

```diff
@@ -924,20 +924,20 @@
               for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = Math.round(⟦2-char-id⟧[⟦2-char-id⟧]);
             return ⟦2-char-id⟧
           };
-          return "conversion" in ⟦2-char-id⟧ && (⟦2-char-id⟧.conversion = ⟦2-char-id⟧.conversion), cJ
+          return "conversion" in ⟦2-char-id⟧ && (⟦2-char-id⟧.conversion = ⟦2-char-id⟧.conversion), TB
         }(⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧][⟦2-char-id⟧].raw = function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = function() {
             for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = arguments[⟦2-char-id⟧];
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[0];
-            return void 0 === ⟦2-char-id⟧ || null === ⟦2-char-id⟧ ? UJ : (⟦2-char-id⟧.length > 1 && (⟦2-char-id⟧ = ⟦2-char-id⟧), JJ(⟦2-char-id⟧))
+            return void 0 === ⟦2-char-id⟧ || null === ⟦2-char-id⟧ ? yB : (⟦2-char-id⟧.length > 1 && (⟦2-char-id⟧ = ⟦2-char-id⟧), BB(⟦2-char-id⟧))
           };
-          return "conversion" in ⟦2-char-id⟧ && (⟦2-char-id⟧.conversion = ⟦2-char-id⟧.conversion), cJ
+          return "conversion" in ⟦2-char-id⟧ && (⟦2-char-id⟧.conversion = ⟦2-char-id⟧.conversion), TB
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
<summary>Hunk 31 · Change · +1 / -1</summary>

```diff
@@ -972,7 +972,7 @@
       let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧].parent][⟦2-char-id⟧],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].parent;
       for (; ⟦2-char-id⟧[⟦2-char-id⟧].parent;) ⟦2-char-id⟧.unshift(⟦2-char-id⟧[⟦2-char-id⟧].parent), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧].parent][⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].parent;
-      return ⟦2-char-id⟧.conversion = ⟦2-char-id⟧, UJ
+      return ⟦2-char-id⟧.conversion = ⟦2-char-id⟧, yB
     }
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

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
<summary>Hunk 33 · Change · +2 / -2</summary>

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
<summary>Hunk 34 · Change · +1 / -1</summary>

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
<summary><code>bundles/bloxd.io/chunks/js/200.js</code> · modified · +50 / -50</summary>

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
<summary>Hunk 2 · Change · +8 / -8</summary>

```diff
@@ -46,25 +46,25 @@
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
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.B)(⟦2-char-id⟧, 10081), null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : 0
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
       let ⟦2-char-id⟧ = null,
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
<summary>Hunk 3 · Change · +1 / -1</summary>

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
<summary>Hunk 4 · Change · +3 / -3</summary>

```diff
@@ -81,10 +81,10 @@
       ⟦2-char-id⟧ = new Map;
     let ⟦2-char-id⟧ = -1;
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧ !== (0, ⟦2-char-id⟧.h)() && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(), ⟦2-char-id⟧.clear(), ⟦2-char-id⟧.clear());
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      ⟦2-char-id⟧ !== (0, ⟦2-char-id⟧.d)() && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(), ⟦2-char-id⟧.clear(), ⟦2-char-id⟧.clear());
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
-      return void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(), void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)), FJ
+      return void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(), void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)), VB
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧("_$GN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$3(-$+&#%#$3(-$+&#%#$3(-$+&+%#$;%#$I$%#$1%#$5%+&W$%#$O$%/&#$-%#$'%", "Tool|Item|Armour|GrayscaleArmour|Chargeable|FullAuto|Directional|Gun", ⟦2-char-id⟧),
       ⟦2-char-id⟧ = ⟦2-char-id⟧("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-&'%#$C$%C%$b.&1%#$-&'%+$#%/$#%/$#%/$#%%$-&)%%$5%/$%%E$$O%%%$#%-$#%#$#%#$^<%#$b)%#$+%)$1%)$1%)$)%%$G*%#$I1%A$+%O$$#%#$A%)$U%%#$b%%A$E%%#$#%%$I$%'$5%%$#%#$-&U$%I$$bO$#)$bV('CQ$%+$Y/%G%$1&;$1&I($)&=$A&U%$#%#$-%1$7%^)$Y$&=$b&%1$b&%)$b*%5$)%+$^$###Y$#b'#%(=)/#I')##7))-+)[%,#)9##)),#)9,#)?,I$)',')%,')%,')%,')#,%)%,')%,')%,')#,%)%,')#,')%,')%,')%,')%,')#,%)#,%)#,%)%,')#,%)%,#)I%##)%-M&)A-A)A-b&)b&,Q.)),#)),W%)#,1)#,-)#,#)#,Q$)#,G()/,#)1,')I%(b%)+(+*3,-(%)+(+*3,-(%)+(+*3,-(%)+(+*3,-(?*#)#(3,-(+*#)#(3,-(+*#)#(3,-(+*#)#(3,-(+*+)#(;)#(I$)#(1)#(5)+*W$)#(O$)/*#(-)#(')", "CubeBlock|TwoDBlock|SlabBlock|StairsBlock|TwoDTool|TwoDItem|TwoDArmour|GrayscaleTwoDArmour|Chargeable|FullAuto|Directional|Gun", ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 5 · Change · +6 / -6</summary>

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
-      return null !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧, JJ, (() => {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
-        return void 0 === ⟦2-char-id⟧ ? void 0 : (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧)
+      return null !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧, BB, (() => {
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
+        return void 0 === ⟦2-char-id⟧ ? void 0 : (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧)
       }))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-      return null !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧, JJ, (() => {
+      return null !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧, BB, (() => {
         var ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧(⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? cJ : void 0
+        return null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.G)(⟦2-char-id⟧(⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? TB : void 0
       }))
     }
 
```

</details>

<details>
<summary>Hunk 6 · Change · +6 / -6</summary>

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
<summary>Hunk 7 · Change · +25 / -25</summary>

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
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
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
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
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
<summary><code>bundles/bloxd.io/chunks/js/201.js</code> · modified · +7 / -7</summary>

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
<summary>Hunk 4 · Change · +3 / -3</summary>

```diff
@@ -70,17 +70,17 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
           for (const ⟦2-char-id⟧ in ⟦2-char-id⟧.sprite)
             if (⟦2-char-id⟧.startsWith(⟦2-char-id⟧)) {
-              if (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧) throw new Error(`Sound prefix ${JJ} is in multiple sprite sheets: ${ZJ} and ${FJ}`);
+              if (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧) throw new Error(`Sound prefix ${BB} is in multiple sprite sheets: ${dB} and ${VB}`);
               ⟦2-char-id⟧ = ⟦2-char-id⟧
             }
         }
-        return ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, bJ(⟦2-char-id⟧)
+        return ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, FB(⟦2-char-id⟧)
       }
     }
 
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
<summary><code>bundles/bloxd.io/chunks/js/202.js</code> · modified · +192 / -192</summary>

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
<summary>Hunk 8 · Change · +11 / -11</summary>

```diff
@@ -211,34 +211,34 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return {
         current: () => {
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)();
-          return null === ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧)()
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)();
+          return null === ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧)()
         },
         watch: ⟦2-char-id⟧ => ⟦2-char-id⟧((⟦2-char-id⟧ => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧();
-          return ⟦2-char-id⟧(⟦2-char-id⟧), ZJ((() => {
+          return ⟦2-char-id⟧(⟦2-char-id⟧), dB((() => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧();
-            ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, cJ(⟦2-char-id⟧))
+            ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, TB(⟦2-char-id⟧))
           }))
         }))
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
<summary>Hunk 9 · Change · +2 / -2</summary>

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
<summary>Hunk 10 · Change · +2 / -2</summary>

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
<summary>Hunk 11 · Change · +2 / -2</summary>

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
<summary>Hunk 12 · Change · +17 / -17</summary>

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
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -555,7 +555,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
           if ("string" !== typeof ⟦2-char-id⟧) return;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
-          return void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)), FJ
+          return void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)), VB
         };
       return new Proxy({}, {
         get: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧),
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
<summary>Hunk 15 · Change · +15 / -15</summary>

```diff
@@ -582,50 +582,50 @@
       } = ⟦2-char-id⟧.getMetaInfo(⟦2-char-id⟧);
       ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧.rootName = ⟦2-char-id⟧);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.getItemStat(⟦2-char-id⟧, "armourReduction");
-      return void 0 !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && (⟦2-char-id⟧.armourReduction = ⟦2-char-id⟧), FJ
-    }(0, ⟦2-char-id⟧.x)((⟦2-char-id⟧ => {
+      return void 0 !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && (⟦2-char-id⟧.armourReduction = ⟦2-char-id⟧), VB
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
           return {
             current: () => ⟦2-char-id⟧(⟦2-char-id⟧.current()),
             watch: ⟦2-char-id⟧ => ⟦2-char-id⟧.watch((⟦2-char-id⟧ => {
-              cJ(⟦2-char-id⟧(⟦2-char-id⟧))
+              TB(⟦2-char-id⟧(⟦2-char-id⟧))
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
<summary>Hunk 16 · Change · +42 / -42</summary>

```diff
@@ -635,90 +635,90 @@
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
           return {
             current: ⟦2-char-id⟧,
             watch: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.v)((⟦2-char-id⟧ => {
-              ⟦2-char-id⟧.some(⟦2-char-id⟧) && (⟦2-char-id⟧ = null, ZJ(⟦2-char-id⟧()))
+              ⟦2-char-id⟧.some(⟦2-char-id⟧) && (⟦2-char-id⟧ = null, dB(⟦2-char-id⟧()))
             }))
           }
         }(),
-        creativeVisibility: (0, ⟦2-char-id⟧.r)((function() {
+        creativeVisibility: (0, ⟦2-char-id⟧.n)((function() {
           const ⟦2-char-id⟧ = {};
-          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.creativeItemIds()) && void 0 !== ⟦2-char-id⟧ ? cJ : []) {
-            var ⟦2-char-id⟧, ZJ, XJ, ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
+          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.creativeItemIds()) && void 0 !== ⟦2-char-id⟧ ? TB : []) {
+            var ⟦2-char-id⟧, dB, lB, ⟦2-char-id⟧;
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
<summary>Hunk 17 · Change · +1 / -1</summary>

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
<summary>Hunk 18 · Change · +20 / -20</summary>

```diff
@@ -745,33 +745,33 @@
       console.error(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
-      if (⟦2-char-id⟧ % ⟦2-char-id⟧ !== 0 || ⟦2-char-id⟧ + ⟦2-char-id⟧ > ⟦2-char-id⟧.byteLength) throw new ⟦2-char-id⟧(`${eJ}: ${ZJ} bytes at ${cJ}, ${UJ}-aligned, outside ${JJ.byteLength} bytes of memory`)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-      return 0 === ⟦2-char-id⟧ ? null : (⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ * ⟦2-char-id⟧.BYTES_PER_ELEMENT, ⟦2-char-id⟧.BYTES_PER_ELEMENT, ⟦2-char-id⟧), new ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧))
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-      return 0 === ⟦2-char-id⟧ ? null : (⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧), new DataView(⟦2-char-id⟧, cJ, ⟦2-char-id⟧))
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
+      if (⟦2-char-id⟧ % ⟦2-char-id⟧ !== 0 || ⟦2-char-id⟧ + ⟦2-char-id⟧ > ⟦2-char-id⟧.byteLength) throw new ⟦2-char-id⟧(`${pB}: ${dB} bytes at ${TB}, ${yB}-aligned, outside ${BB.byteLength} bytes of memory`)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
+      return 0 === ⟦2-char-id⟧ ? null : (⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧ * ⟦2-char-id⟧.BYTES_PER_ELEMENT, ⟦2-char-id⟧.BYTES_PER_ELEMENT, ⟦2-char-id⟧), new ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧))
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
+      return 0 === ⟦2-char-id⟧ ? null : (⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧), new DataView(⟦2-char-id⟧, TB, ⟦2-char-id⟧))
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
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -784,7 +784,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       try {
-        JJ(⟦2-char-id⟧)
+        BB(⟦2-char-id⟧)
       } catch (⟦2-char-id⟧) {
         console.error("[bloxd-wasm-client] the game chunk's listener failed", ⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 20 · Change · +3 / -3</summary>

```diff
@@ -799,13 +799,13 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ ??= Promise.all([⟦2-char-id⟧.e(64), ⟦2-char-id⟧.e(88), ⟦2-char-id⟧.e(199), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(200), ⟦2-char-id⟧.e(201), ⟦2-char-id⟧.e(86), ⟦2-char-id⟧.e(228), ⟦2-char-id⟧.e(251), ⟦2-char-id⟧.e(177), ⟦2-char-id⟧.e(186), ⟦2-char-id⟧.e(129), ⟦2-char-id⟧.e(79), ⟦2-char-id⟧.e(107), ⟦2-char-id⟧.e(226), ⟦2-char-id⟧.e(49)]).then((() => ⟦2-char-id⟧(41236))).then((⟦2-char-id⟧ => {
+      return ⟦2-char-id⟧ ??= Promise.all([⟦2-char-id⟧.e(64), ⟦2-char-id⟧.e(88), ⟦2-char-id⟧.e(199), ⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(222), ⟦2-char-id⟧.e(200), ⟦2-char-id⟧.e(201), ⟦2-char-id⟧.e(86), ⟦2-char-id⟧.e(228), ⟦2-char-id⟧.e(251), ⟦2-char-id⟧.e(177), ⟦2-char-id⟧.e(186), ⟦2-char-id⟧.e(129), ⟦2-char-id⟧.e(79), ⟦2-char-id⟧.e(107), ⟦2-char-id⟧.e(226), ⟦2-char-id⟧.e(49)]).then((() => ⟦2-char-id⟧(41265))).then((⟦2-char-id⟧ => {
         ⟦2-char-id⟧.loadAudio(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧;
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         return ⟦2-char-id⟧
       })).catch((⟦2-char-id⟧ => {
-        throw ⟦2-char-id⟧ = null, JJ
-      })), UJ
+        throw ⟦2-char-id⟧ = null, BB
+      })), yB
     }
     async function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       try {
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/203.js</code> · modified · +143 / -143</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +8 / -8</summary>

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
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      c: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2368);
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
<summary>Hunk 2 · Change · +12 / -12</summary>

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
-      let [⟦2-char-id⟧, FJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+      let [⟦2-char-id⟧, VB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
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
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
<summary>Hunk 5 · Change · +5 / -5</summary>

```diff
@@ -93,18 +93,18 @@
     const ⟦2-char-id⟧ = new WeakMap;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), JJ
+      return ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), BB
     }
 
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
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -128,7 +128,7 @@
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.opened = null, this.view = null, this.size = null, this.closed = !1, eJ(⟦2-char-id⟧, (⟦2-char-id⟧ => {
+        this.opened = null, this.view = null, this.size = null, this.closed = !1, pB(⟦2-char-id⟧, (⟦2-char-id⟧ => {
           this.closed ? ⟦2-char-id⟧.close() : (this.opened = ⟦2-char-id⟧, null !== this.size && ⟦2-char-id⟧.resize(this.size.width, this.size.height), null !== this.view && ⟦2-char-id⟧.show(this.view))
         }))
       }
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -150,7 +150,7 @@
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(⟦2-char-id⟧).then((⟦2-char-id⟧ => ⟦2-char-id⟧.ready)), eJ(⟦2-char-id⟧, (⟦2-char-id⟧ => {
+        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(⟦2-char-id⟧).then((⟦2-char-id⟧ => ⟦2-char-id⟧.ready)), pB(⟦2-char-id⟧, (⟦2-char-id⟧ => {
           this.closed ? ⟦2-char-id⟧.close() : (this.opened = ⟦2-char-id⟧, null !== this.size && ⟦2-char-id⟧.resize(this.size.width, this.size.height))
         }))
       }
```

</details>

<details>
<summary>Hunk 9 · Change · +6 / -6</summary>

```diff
@@ -220,24 +220,24 @@
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
       }
       run(⟦2-char-id⟧) {
         return null !== this.loaded ? ⟦2-char-id⟧(this.loaded) : (this.loading ??= this.load().then((⟦2-char-id⟧ => (this.loaded = ⟦2-char-id⟧, ⟦2-char-id⟧)), (⟦2-char-id⟧ => {
-          throw this.loading = null, JJ
+          throw this.loading = null, BB
         })), this.loading.then(⟦2-char-id⟧))
       }
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
<summary>Hunk 10 · Change · +11 / -11</summary>

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
<summary>Hunk 11 · Change · +22 / -22</summary>

```diff
@@ -284,66 +284,66 @@
           return {
             cosmetics: ⟦2-char-id⟧,
             size: ⟦2-char-id⟧,
-            cV: ⟦2-char-id⟧.name,
+            mN: ⟦2-char-id⟧.name,
             animation: ⟦2-char-id⟧.aimed ? ⟦2-char-id⟧.c : ⟦2-char-id⟧.d
           }
         }))), [⟦2-char-id⟧]),
         ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]);
           return (0, ⟦2-char-id⟧.useEffect)((() => {
-            ZJ(⟦2-char-id⟧.map((() => !1)));
+            dB(⟦2-char-id⟧.map((() => !1)));
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
               let {
                 showAfterMs: ⟦2-char-id⟧
               } = ⟦2-char-id⟧;
               return window.setTimeout((() => {
-                ZJ((⟦2-char-id⟧ => ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧))))
+                dB((⟦2-char-id⟧ => ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧))))
               }), ⟦2-char-id⟧)
             }));
             return () => {
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) window.clearTimeout(⟦2-char-id⟧)
             }
-          }), [⟦2-char-id⟧]), cJ
+          }), [⟦2-char-id⟧]), TB
         }(⟦2-char-id⟧),
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => ({
           figures: ⟦2-char-id⟧,
           shown: ⟦2-char-id⟧
         })), [⟦2-char-id⟧, ⟦2-char-id⟧]);
-      return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, YJ, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)("div", {
+      return (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, oB, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)("div", {
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
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.Ic <= 0 ? 1 : ⟦2-char-id⟧ + ⟦2-char-id⟧ * Math.max(0, ⟦2-char-id⟧) / ⟦2-char-id⟧.Ic;
-      return ⟦2-char-id⟧.Mc === ⟦2-char-id⟧.n.LoopOnLastFrame ? ⟦2-char-id⟧ % 1 : ⟦2-char-id⟧.Mc === ⟦2-char-id⟧.n.NoLoop && ⟦2-char-id⟧ >= 1 ? null : Math.min(1, ⟦2-char-id⟧)
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
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
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -375,7 +375,7 @@
           position: this.createTimelineFromKeyframes(⟦2-char-id⟧, "position", ⟦2-char-id⟧)
         }
       }
-      createTimelineFromKeyframes(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      createTimelineFromKeyframes(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = [];
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 14 · Change · +11 / -11</summary>

```diff
@@ -386,29 +386,29 @@
         }
         const ⟦2-char-id⟧ = [];
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
-          var ⟦2-char-id⟧, XJ, ⟦2-char-id⟧;
+          var ⟦2-char-id⟧, lB, ⟦2-char-id⟧;
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
       }
       createAnimationFrameWithoutPrecomputes(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, FJ, ⟦2-char-id⟧ = null;
-        var ⟦2-char-id⟧;
-        if ("object" === typeof ⟦2-char-id⟧ && "point" in ⟦2-char-id⟧) ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.Hc) && void 0 !== ⟦2-char-id⟧ ? eJ : null, ⟦2-char-id⟧ = ⟦2-char-id⟧.point, ⟦2-char-id⟧ = ⟦2-char-id⟧.point;
+        let ⟦2-char-id⟧, VB, ⟦2-char-id⟧ = null;
+        var ⟦2-char-id⟧;
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
<summary>Hunk 17 · Change · +5 / -5</summary>

```diff
@@ -463,11 +463,11 @@
           position: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         return {
-          rotation: this.createAnimationTimeline(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : null, fJ, DJ, !0),
-          position: this.createAnimationTimeline(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : null, rJ, nJ, !1)
-        }
-      }
-      createAnimationTimeline(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+          rotation: this.createAnimationTimeline(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : null, HB, LB, !0),
+          position: this.createAnimationTimeline(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : null, vB, DB, !1)
+        }
+      }
+      createAnimationTimeline(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         if (null === ⟦2-char-id⟧) return [];
         if (Array.isArray(⟦2-char-id⟧)) {
           ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -477,7 +477,7 @@
         const ⟦2-char-id⟧ = Object.entries(⟦2-char-id⟧).map((⟦2-char-id⟧ => {
           let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = Number(⟦2-char-id⟧) / this.animationSchema.animation_length;
-          return this.createAnimationFrameWithoutPrecomputes(⟦2-char-id⟧, FJ, ⟦2-char-id⟧)
+          return this.createAnimationFrameWithoutPrecomputes(⟦2-char-id⟧, VB, ⟦2-char-id⟧)
         })).filter(⟦2-char-id⟧);
         ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.timeFraction - ⟦2-char-id⟧.timeFraction)), ⟦2-char-id⟧ && function(⟦2-char-id⟧) {
           for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

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
<summary>Hunk 20 · Change · +10 / -10</summary>

```diff
@@ -495,30 +495,30 @@
         }(⟦2-char-id⟧);
         const ⟦2-char-id⟧ = [];
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
-          var ⟦2-char-id⟧, AJ, ⟦2-char-id⟧;
+          var ⟦2-char-id⟧, JB, ⟦2-char-id⟧;
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
       }
-      createAnimationFrameWithoutPrecomputes(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, UJ, ⟦2-char-id⟧ = null;
+      createAnimationFrameWithoutPrecomputes(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧, yB, ⟦2-char-id⟧ = null;
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
<summary>Hunk 21 · Change · +25 / -25</summary>

```diff
@@ -536,49 +536,49 @@
       return Number.isFinite(⟦2-char-id⟧[0]) && Number.isFinite(⟦2-char-id⟧[1]) && Number.isFinite(⟦2-char-id⟧[2])
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
         ⟦2-char-id⟧ = [null, null, null];
-      for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], qJ, ⟦2-char-id⟧);
+      for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], YB, ⟦2-char-id⟧);
       return {
-        Pc: ⟦2-char-id⟧,
-        kc: ⟦2-char-id⟧
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, eJ, ⟦2-char-id⟧) {
+        Wy: ⟦2-char-id⟧,
+        hy: ⟦2-char-id⟧
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, pB, ⟦2-char-id⟧) {
       return {
-        zc: ⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧,
-        Nc: ⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧,
-        delta: ⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧)
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, ⟦2-char-id⟧) {
+        Gy: ⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧,
+        qy: ⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧,
+        delta: ⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧)
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
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
-      const [⟦2-char-id⟧, ZJ, ⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧ = -(0, ⟦2-char-id⟧.k)(⟦2-char-id⟧), ⟦2-char-id⟧ = -(0, ⟦2-char-id⟧.k)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.c.quaternionFromEulerZYX(⟦2-char-id⟧, AJ, ⟦2-char-id⟧);
-      return ⟦2-char-id⟧.c.eulerYXZFromQuaternion(⟦2-char-id⟧)
+      return null === ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧(⟦2-char-id⟧)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      const [⟦2-char-id⟧, dB, ⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧ = -(0, ⟦2-char-id⟧.j)(⟦2-char-id⟧), ⟦2-char-id⟧ = -(0, ⟦2-char-id⟧.j)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.e.quaternionFromEulerZYX(⟦2-char-id⟧, JB, ⟦2-char-id⟧);
+      return ⟦2-char-id⟧.e.eulerYXZFromQuaternion(⟦2-char-id⟧)
     }
     ⟦2-char-id⟧.LERP_MODE_SCHEMA_MAPPING = {
       linear: ⟦2-char-id⟧.j.Linear,
```

</details>

<details>
<summary>Hunk 22 · Change · +8 / -8</summary>

```diff
@@ -591,20 +591,20 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const [⟦2-char-id⟧, ZJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-      return [⟦2-char-id⟧ >= 0 ? Math.PI - cJ : -Math.PI - ⟦2-char-id⟧, mJ(⟦2-char-id⟧ + Math.PI), mJ(⟦2-char-id⟧ + Math.PI)]
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.c.mod(⟦2-char-id⟧ + Math.PI, 2 * Math.PI) - Math.PI
+      const [⟦2-char-id⟧, dB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+      return [⟦2-char-id⟧ >= 0 ? Math.PI - TB : -Math.PI - ⟦2-char-id⟧, iB(⟦2-char-id⟧ + Math.PI), iB(⟦2-char-id⟧ + Math.PI)]
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

<details>
<summary>Hunk 23 · Change · +4 / -4</summary>

```diff
@@ -612,16 +612,16 @@
       n: () => ⟦2-char-id⟧
     });
     let ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧[⟦2-char-id⟧.Linear = 0] = "Linear", ⟦2-char-id⟧[⟦2-char-id⟧.CatmullRomSpline = 1] = "CatmullRomSpline", JJ
+        return ⟦2-char-id⟧[⟦2-char-id⟧.Linear = 0] = "Linear", ⟦2-char-id⟧[⟦2-char-id⟧.CatmullRomSpline = 1] = "CatmullRomSpline", BB
       }({}),
       ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧[⟦2-char-id⟧.NoLoop = 0] = "NoLoop", ⟦2-char-id⟧[⟦2-char-id⟧.LoopOnLastFrame = 1] = "LoopOnLastFrame", ⟦2-char-id⟧[⟦2-char-id⟧.HoldOnLastFrame = 2] = "HoldOnLastFrame", JJ
+        return ⟦2-char-id⟧[⟦2-char-id⟧.NoLoop = 0] = "NoLoop", ⟦2-char-id⟧[⟦2-char-id⟧.LoopOnLastFrame = 1] = "LoopOnLastFrame", ⟦2-char-id⟧[⟦2-char-id⟧.HoldOnLastFrame = 2] = "HoldOnLastFrame", BB
       }({}),
       ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧[⟦2-char-id⟧.Movement = 0] = "Movement", ⟦2-char-id⟧[⟦2-char-id⟧.Action = 1] = "Action", ⟦2-char-id⟧[⟦2-char-id⟧.Emote = 2] = "Emote", ⟦2-char-id⟧[⟦2-char-id⟧.Custom = 3] = "Custom", JJ
+        return ⟦2-char-id⟧[⟦2-char-id⟧.Movement = 0] = "Movement", ⟦2-char-id⟧[⟦2-char-id⟧.Action = 1] = "Action", ⟦2-char-id⟧[⟦2-char-id⟧.Emote = 2] = "Emote", ⟦2-char-id⟧[⟦2-char-id⟧.Custom = 3] = "Custom", BB
       }({}),
       ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧[⟦2-char-id⟧.Start = 0] = "Start", ⟦2-char-id⟧[⟦2-char-id⟧.Stop = 1] = "Stop", JJ
+        return ⟦2-char-id⟧[⟦2-char-id⟧.Start = 0] = "Start", ⟦2-char-id⟧[⟦2-char-id⟧.Stop = 1] = "Stop", BB
       }({})
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/204.js</code> · modified · +52 / -52</summary>

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
<summary>Hunk 2 · Change · +11 / -11</summary>

```diff
@@ -28,26 +28,26 @@
           mobType: ⟦2-char-id⟧,
           variation: ⟦2-char-id⟧,
           animation: ⟦2-char-id⟧
-        })), [⟦2-char-id⟧, ZJ, ⟦2-char-id⟧]);
-      return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, YJ, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)("div", {
+        })), [⟦2-char-id⟧, dB, ⟦2-char-id⟧]);
+      return (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, oB, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)("div", {
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
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+  40263: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2368);
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
<summary>Hunk 3 · Change · +12 / -12</summary>

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
-      let [⟦2-char-id⟧, FJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+      let [⟦2-char-id⟧, VB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
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
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -146,7 +146,7 @@
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.opened = null, this.view = null, this.size = null, this.closed = !1, eJ(⟦2-char-id⟧, (⟦2-char-id⟧ => {
+        this.opened = null, this.view = null, this.size = null, this.closed = !1, pB(⟦2-char-id⟧, (⟦2-char-id⟧ => {
           this.closed ? ⟦2-char-id⟧.close() : (this.opened = ⟦2-char-id⟧, null !== this.size && ⟦2-char-id⟧.resize(this.size.width, this.size.height), null !== this.view && ⟦2-char-id⟧.show(this.view))
         }))
       }
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -168,7 +168,7 @@
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(⟦2-char-id⟧).then((⟦2-char-id⟧ => ⟦2-char-id⟧.ready)), eJ(⟦2-char-id⟧, (⟦2-char-id⟧ => {
+        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(⟦2-char-id⟧).then((⟦2-char-id⟧ => ⟦2-char-id⟧.ready)), pB(⟦2-char-id⟧, (⟦2-char-id⟧ => {
           this.closed ? ⟦2-char-id⟧.close() : (this.opened = ⟦2-char-id⟧, null !== this.size && ⟦2-char-id⟧.resize(this.size.width, this.size.height))
         }))
       }
```

</details>

<details>
<summary>Hunk 9 · Change · +7 / -7</summary>

```diff
@@ -238,24 +238,24 @@
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
       }
       run(⟦2-char-id⟧) {
         return null !== this.loaded ? ⟦2-char-id⟧(this.loaded) : (this.loading ??= this.load().then((⟦2-char-id⟧ => (this.loaded = ⟦2-char-id⟧, ⟦2-char-id⟧)), (⟦2-char-id⟧ => {
-          throw this.loading = null, JJ
+          throw this.loading = null, BB
         })), this.loading.then(⟦2-char-id⟧))
       }
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
<summary>Hunk 10 · Change · +1 / -1</summary>

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
<summary><code>bundles/bloxd.io/chunks/js/205.js</code> · modified · +201 / -201</summary>

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
<summary>Hunk 2 · Change · +17 / -17</summary>

```diff
@@ -27,35 +27,35 @@
         for (const ⟦2-char-id⟧ of [-⟦2-char-id⟧, ⟦2-char-id⟧])
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
             const ⟦2-char-id⟧ = -⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧ * (2 * ⟦2-char-id⟧ + .5);
-            ⟦2-char-id⟧.push([⟦2-char-id⟧, cJ, cJ, AJ, UJ, ⟦2-char-id⟧]), ⟦2-char-id⟧.push([⟦2-char-id⟧, FJ, cJ, UJ, AJ, ⟦2-char-id⟧]), ⟦2-char-id⟧.push([⟦2-char-id⟧, cJ, FJ, UJ, eJ, ⟦2-char-id⟧])
+            ⟦2-char-id⟧.push([⟦2-char-id⟧, TB, TB, JB, yB, ⟦2-char-id⟧]), ⟦2-char-id⟧.push([⟦2-char-id⟧, VB, TB, yB, JB, ⟦2-char-id⟧]), ⟦2-char-id⟧.push([⟦2-char-id⟧, TB, VB, yB, pB, ⟦2-char-id⟧])
           }
       for (const ⟦2-char-id⟧ of [-⟦2-char-id⟧, ⟦2-char-id⟧])
         for (const ⟦2-char-id⟧ of [-⟦2-char-id⟧, ⟦2-char-id⟧])
-          for (const ⟦2-char-id⟧ of [-⟦2-char-id⟧, ⟦2-char-id⟧]) ⟦2-char-id⟧.push([⟦2-char-id⟧, cJ, cJ, UJ, JJ, ⟦2-char-id⟧]);
+          for (const ⟦2-char-id⟧ of [-⟦2-char-id⟧, ⟦2-char-id⟧]) ⟦2-char-id⟧.push([⟦2-char-id⟧, TB, TB, yB, BB, ⟦2-char-id⟧]);
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
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -84,9 +84,9 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.findIndex((⟦2-char-id⟧ => {
-          let [⟦2-char-id⟧, eJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+          let [⟦2-char-id⟧, pB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧
         }));
         return ⟦2-char-id⟧ < 0 ? 0 : 1 << ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -107,10 +107,10 @@
       return "pipe" === ⟦2-char-id⟧ || "tank" === ⟦2-char-id⟧ || "maker" === ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return 0 !== (⟦2-char-id⟧.faces & 1 << ⟦2-char-id⟧) && 0 !== (⟦2-char-id⟧.faces & 1 << (1 ^ ⟦2-char-id⟧)) && (⟦2-char-id⟧(⟦2-char-id⟧.kind) || ⟦2-char-id⟧(⟦2-char-id⟧.kind))
     }
-    const ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => ({
+    const ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => ({
         input: ⟦2-char-id⟧,
         inputAmount: ⟦2-char-id⟧,
         output: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

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
<summary>Hunk 7 · Change · +1 / -1</summary>

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
<summary>Hunk 8 · Change · +5 / -5</summary>

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
<summary>Hunk 9 · Change · +3 / -3</summary>

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
<summary>Hunk 10 · Change · +7 / -7</summary>

```diff
@@ -221,16 +221,16 @@
       [0, 0, 1],
       [0, 0, -1]
     ];
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8715);
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ < ⟦2-char-id⟧.p || ⟦2-char-id⟧ >= ⟦2-char-id⟧.p + ⟦2-char-id⟧.r || Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.w) === Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.w) && Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.w) === Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧.w)
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8737);
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
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
<summary>Hunk 11 · Change · +8 / -8</summary>

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
<summary>Hunk 12 · Change · +23 / -23</summary>

```diff
@@ -259,58 +259,58 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
-      return (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rootName) !== ⟦2-char-id⟧.o ? null : {
-        rot: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.rot) && void 0 !== ⟦2-char-id⟧ ? ZJ : 1,
-        half: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.rootName, ⟦2-char-id⟧.metaStr)
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧))
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
+      return (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rootName) !== ⟦2-char-id⟧.m ? null : {
+        rot: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.rot) && void 0 !== ⟦2-char-id⟧ ? dB : 1,
+        half: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.rootName, ⟦2-char-id⟧.metaStr)
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧))
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       let {
         rot: ⟦2-char-id⟧,
         half: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ + ⟦2-char-id⟧);
+      const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, dB, ⟦2-char-id⟧ + ⟦2-char-id⟧);
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
       }
-      shape(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
+      shape(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.stairsOf(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = this.cornerAt(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.half === ⟦2-char-id⟧.d.top ? "top" : "bot";
-        return (0, ⟦2-char-id⟧.n)(`${FJ.m[eJ].meta.rootName}|meta|rot${XJ.rot}|${jJ}${null===AJ?"":`|${AJ}`}`)
+          ⟦2-char-id⟧ = this.cornerAt(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.half === ⟦2-char-id⟧.e.top ? "top" : "bot";
+        return (0, ⟦2-char-id⟧.j)(`${VB.h[pB].meta.rootName}|meta|rot${lB.rot}|${gB}${null===JB?"":`|${JB}`}`)
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
         }
       }
-      stairsAt(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧);
+      stairsAt(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧);
         return this.handles(⟦2-char-id⟧) ? this.stairsOf(⟦2-char-id⟧) : null
       }
-      cornerAt(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      cornerAt(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         let {
           rot: ⟦2-char-id⟧,
           half: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 13 · Change · +45 / -45</summary>

```diff
@@ -318,116 +318,116 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
             let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = this.stairsAt(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ + ⟦2-char-id⟧);
+            const ⟦2-char-id⟧ = this.stairsAt(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, dB, ⟦2-char-id⟧ + ⟦2-char-id⟧);
             return null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.rot === ⟦2-char-id⟧ && ⟦2-char-id⟧.half === ⟦2-char-id⟧
           },
-          ⟦2-char-id⟧ = this.stairsAt(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧[0], ZJ, ⟦2-char-id⟧ + ⟦2-char-id⟧[1]);
+          ⟦2-char-id⟧ = this.stairsAt(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧[0], dB, ⟦2-char-id⟧ + ⟦2-char-id⟧[1]);
         if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.half === ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.rot];
-          if (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && !⟦2-char-id⟧([-⟦2-char-id⟧[0], -⟦2-char-id⟧[1]])) return ⟦2-char-id⟧(⟦2-char-id⟧, YJ(⟦2-char-id⟧)) ? "outerLeft" : "outerRight"
+          if (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && !⟦2-char-id⟧([-⟦2-char-id⟧[0], -⟦2-char-id⟧[1]])) return ⟦2-char-id⟧(⟦2-char-id⟧, oB(⟦2-char-id⟧)) ? "outerLeft" : "outerRight"
         }
-        const ⟦2-char-id⟧ = this.stairsAt(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧[0], ZJ, ⟦2-char-id⟧ - ⟦2-char-id⟧[1]);
+        const ⟦2-char-id⟧ = this.stairsAt(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧[0], dB, ⟦2-char-id⟧ - ⟦2-char-id⟧[1]);
         if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.half === ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.rot];
-          if (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && !⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧(⟦2-char-id⟧, YJ(⟦2-char-id⟧)) ? "innerLeft" : "innerRight"
+          if (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && !⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧(⟦2-char-id⟧, oB(⟦2-char-id⟧)) ? "innerLeft" : "innerRight"
         }
         return null
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
-      }
-      shape(⟦2-char-id⟧, cJ, ZJ, eJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧.h[⟦2-char-id⟧].meta.rootName === ⟦2-char-id⟧.r ? null : ⟦2-char-id⟧.r
+      }
+      shape(⟦2-char-id⟧, TB, dB, pB, ⟦2-char-id⟧) {
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
-          let [⟦2-char-id⟧, DJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧)]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
+          let [⟦2-char-id⟧, LB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+          const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧)]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
           (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rootId) === ⟦2-char-id⟧ && ⟦2-char-id⟧.rot === ⟦2-char-id⟧ && (⟦2-char-id⟧ |= 1 << ⟦2-char-id⟧)
-        })), (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, jJ, ⟦2-char-id⟧))
-      }
-    }, ...XJ.e.map((⟦2-char-id⟧ => new ⟦2-char-id⟧.e(⟦2-char-id⟧))), new class {
+        })), (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, gB, ⟦2-char-id⟧))
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
-      }
-      shape(⟦2-char-id⟧, cJ, ZJ, UJ, eJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧ === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧.j || void 0 !== ⟦2-char-id⟧.b[⟦2-char-id⟧]
+      }
+      shape(⟦2-char-id⟧, TB, dB, yB, pB, ⟦2-char-id⟧) {
         const {
           rootName: ⟦2-char-id⟧,
           rot: ⟦2-char-id⟧
-        } = ⟦2-char-id⟧.m[⟦2-char-id⟧].meta;
-        return ⟦2-char-id⟧ === ⟦2-char-id⟧.i ? ⟦2-char-id⟧ ? eJ : function(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[⟦2-char-id⟧ - 1];
-          for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧.E; ⟦2-char-id⟧++) {
-            const [⟦2-char-id⟧, ⟦2-char-id⟧] = [⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧);
-            if (⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧.i && ⟦2-char-id⟧.m[⟦2-char-id⟧].meta.rot === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, UJ, jJ, ⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.X)(⟦2-char-id⟧, !⟦2-char-id⟧(⟦2-char-id⟧)))
+        } = ⟦2-char-id⟧.h[⟦2-char-id⟧].meta;
+        return ⟦2-char-id⟧ === ⟦2-char-id⟧.j ? ⟦2-char-id⟧ ? pB : function(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[⟦2-char-id⟧ - 1];
+          for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧.M; ⟦2-char-id⟧++) {
+            const [⟦2-char-id⟧, ⟦2-char-id⟧] = [⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧);
+            if (⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧.j && ⟦2-char-id⟧.h[⟦2-char-id⟧].meta.rot === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, dB, yB, gB, ⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.jb)(⟦2-char-id⟧, !⟦2-char-id⟧(⟦2-char-id⟧)))
           }
-          return (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.X)(⟦2-char-id⟧, !1))
-        }(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) : (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.J)(⟦2-char-id⟧, qJ, function(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[⟦2-char-id⟧ - 1], ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => function(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
+          return (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.jb)(⟦2-char-id⟧, !1))
+        }(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) : (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.U)(⟦2-char-id⟧, YB, function(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[⟦2-char-id⟧ - 1], ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => function(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
             var ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
+            const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta;
             if (!⟦2-char-id⟧) return !1;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.rootName,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧);
             if (!⟦2-char-id⟧ && !⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧ !== ⟦2-char-id⟧) return !1;
-            const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[⟦2-char-id⟧.rot - 1];
-            return ⟦2-char-id⟧ ? ⟦2-char-id⟧ === -⟦2-char-id⟧ && ⟦2-char-id⟧ === -ZJ : ⟦2-char-id⟧.has(⟦2-char-id⟧) ? ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ZJ : (0, ⟦2-char-id⟧.V)(⟦2-char-id⟧.m[⟦2-char-id⟧].name, YJ, ⟦2-char-id⟧).some((⟦2-char-id⟧ => {
+            const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[⟦2-char-id⟧.rot - 1];
+            return ⟦2-char-id⟧ ? ⟦2-char-id⟧ === -⟦2-char-id⟧ && ⟦2-char-id⟧ === -dB : ⟦2-char-id⟧.has(⟦2-char-id⟧) ? ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === dB : (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧.h[⟦2-char-id⟧].name, oB, ⟦2-char-id⟧).some((⟦2-char-id⟧ => {
               let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
               return ⟦2-char-id⟧ === -⟦2-char-id⟧ && ⟦2-char-id⟧ === -⟦2-char-id⟧
             })) && !(⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧)
-          }(⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ + ⟦2-char-id⟧), eJ, qJ, XJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧ && ⟦2-char-id⟧.m[⟦2-char-id⟧].meta.rot === ⟦2-char-id⟧, ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.b[⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧))] || -1 === ⟦2-char-id⟧.b[⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧))];
-          if (⟦2-char-id⟧ || ⟦2-char-id⟧ || function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          }(⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, dB, ⟦2-char-id⟧ + ⟦2-char-id⟧), pB, YB, lB, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧, dB, ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧ && ⟦2-char-id⟧.h[⟦2-char-id⟧].meta.rot === ⟦2-char-id⟧, ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.b[⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧))] || -1 === ⟦2-char-id⟧.b[⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧))];
+          if (⟦2-char-id⟧ || ⟦2-char-id⟧ || function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
               if (⟦2-char-id⟧(⟦2-char-id⟧) !== ⟦2-char-id⟧) return !1;
-              const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.e[⟦2-char-id⟧.m[⟦2-char-id⟧].meta.rot - 1], [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.N)(⟦2-char-id⟧.m[⟦2-char-id⟧].name, UJ, ⟦2-char-id⟧);
+              const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[⟦2-char-id⟧.h[⟦2-char-id⟧].meta.rot - 1], [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧.h[⟦2-char-id⟧].name, yB, ⟦2-char-id⟧);
               return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧
-            }(⟦2-char-id⟧, XJ, ⟦2-char-id⟧) || ⟦2-char-id⟧(-⟦2-char-id⟧, -⟦2-char-id⟧)) return null;
+            }(⟦2-char-id⟧, lB, ⟦2-char-id⟧) || ⟦2-char-id⟧(-⟦2-char-id⟧, -⟦2-char-id⟧)) return null;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(-⟦2-char-id⟧, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, -⟦2-char-id⟧);
           if (⟦2-char-id⟧ === ⟦2-char-id⟧) return null;
           return ⟦2-char-id⟧ ? "turnLeft" : "turnRight"
-        }(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧)))
+        }(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧)))
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
-      shape(⟦2-char-id⟧, cJ, ZJ, UJ, eJ, ⟦2-char-id⟧) {
+      shape(⟦2-char-id⟧, TB, dB, yB, pB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        return (0, ⟦2-char-id⟧.n)((⟦2-char-id⟧ = ⟦2-char-id⟧.rot, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.reshapedHalf(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) : this.placedHalf(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧.rot)) ? (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.o, qJ, ⟦2-char-id⟧) : 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.o : `${yJ.o}|meta|rot${qJ}`));
-        var ⟦2-char-id⟧, jJ
-      }
-      placedHalf(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+        return (0, ⟦2-char-id⟧.j)((⟦2-char-id⟧ = ⟦2-char-id⟧.rot, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.reshapedHalf(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) : this.placedHalf(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧.rot)) ? (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧.m, YB, ⟦2-char-id⟧) : 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.m : `${MB.m}|meta|rot${YB}`));
+        var ⟦2-char-id⟧, gB
+      }
+      placedHalf(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.d[⟦2-char-id⟧];
         for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of [
             ["right", 1],
```

</details>

<details>
<summary>Hunk 14 · Change · +24 / -24</summary>

```diff
@@ -435,54 +435,54 @@
           ]) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧,
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, jJ, ZJ, ⟦2-char-id⟧);
-          if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.rot === ⟦2-char-id⟧ && (null === ⟦2-char-id⟧.half || !⟦2-char-id⟧(⟦2-char-id⟧, jJ, ZJ, YJ, ⟦2-char-id⟧))) return ⟦2-char-id⟧
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, gB, dB, ⟦2-char-id⟧);
+          if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.rot === ⟦2-char-id⟧ && (null === ⟦2-char-id⟧.half || !⟦2-char-id⟧(⟦2-char-id⟧, gB, dB, oB, ⟦2-char-id⟧))) return ⟦2-char-id⟧
         }
         return null
       }
-      reshapedHalf(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-        if (null !== ⟦2-char-id⟧.half && ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧)) return ⟦2-char-id⟧.half;
+      reshapedHalf(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
+        if (null !== ⟦2-char-id⟧.half && ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧)) return ⟦2-char-id⟧.half;
         for (const ⟦2-char-id⟧ of ["right", "left"]) {
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧.rot, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ + ⟦2-char-id⟧);
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.rot, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, dB, ⟦2-char-id⟧ + ⟦2-char-id⟧);
           if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.rot === ⟦2-char-id⟧.rot && ⟦2-char-id⟧.half === ⟦2-char-id⟧.q[⟦2-char-id⟧]) return ⟦2-char-id⟧
         }
         return null
       }
-    }, new ⟦2-char-id⟧.d];
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    }, new ⟦2-char-id⟧.b];
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
-        if (⟦2-char-id⟧.handles(⟦2-char-id⟧)) return ⟦2-char-id⟧.shape(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧);
+        if (⟦2-char-id⟧.handles(⟦2-char-id⟧)) return ⟦2-char-id⟧.shape(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧);
       return ⟦2-char-id⟧
     }
 
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
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = new Set([⟦2-char-id⟧.h, ⟦2-char-id⟧.d, hJ, ...cJ, ...ZJ, ...JJ ? [⟦2-char-id⟧.j] : []]);
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      const ⟦2-char-id⟧ = new Set([⟦2-char-id⟧.f, ⟦2-char-id⟧.e, kB, ...TB, ...dB, ...BB ? [⟦2-char-id⟧.l] : []]);
       return {
         makers: new Set(⟦2-char-id⟧),
         roots: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

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
<summary>Hunk 16 · Change · +17 / -17</summary>

```diff
@@ -501,45 +501,45 @@
         py: [0, 1, 0],
         pz: [0, 0, 1]
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.map((⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧])),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.e.map((⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧])),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
-        let [⟦2-char-id⟧, ZJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.y.findIndex((⟦2-char-id⟧ => {
-          let [⟦2-char-id⟧, eJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+        let [⟦2-char-id⟧, dB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+        return ⟦2-char-id⟧.A.findIndex((⟦2-char-id⟧ => {
+          let [⟦2-char-id⟧, pB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧
         }))
       }));
 
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
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      if ((0, ⟦2-char-id⟧.j)(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.name) === ⟦2-char-id⟧ ? YB : null;
+      if (⟦2-char-id⟧ === ⟦2-char-id⟧.l) return ⟦2-char-id⟧;
+      if (⟦2-char-id⟧ === ⟦2-char-id⟧) return ⟦2-char-id⟧.name.endsWith("|Water") ? oB : null;
+      const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.f[(⟦2-char-id⟧.meta.rot || 1) - 1];
+      return (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.makers.has(⟦2-char-id⟧) ? "maker" : "user", [-⟦2-char-id⟧, 0, -⟦2-char-id⟧])
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
       const {
         makers: ⟦2-char-id⟧
       } = ⟦2-char-id⟧[⟦2-char-id⟧];
       return ⟦2-char-id⟧.some(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        let [⟦2-char-id⟧, nJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+        let [⟦2-char-id⟧, DB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.has(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? hJ : "") && !(0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, vJ, ⟦2-char-id⟧[⟦2-char-id⟧])
+        return null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.has(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? kB : "") && !(0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, mB, ⟦2-char-id⟧[⟦2-char-id⟧])
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
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -548,8 +548,8 @@
         ⟦2-char-id⟧ = new Map;
         for (const ⟦2-char-id⟧ of ["water", "cryo"])
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 64; ⟦2-char-id⟧++)
-            for (const ⟦2-char-id⟧ of [!1, !0]) ⟦2-char-id⟧.set((0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), {
-              LD: ⟦2-char-id⟧,
+            for (const ⟦2-char-id⟧ of [!1, !0]) ⟦2-char-id⟧.set((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, TB, ⟦2-char-id⟧), {
+              DO: ⟦2-char-id⟧,
               mask: ⟦2-char-id⟧,
               full: ⟦2-char-id⟧
             })
```

</details>

<details>
<summary>Hunk 18 · Change · +10 / -10</summary>

```diff
@@ -557,20 +557,20 @@
       return ⟦2-char-id⟧.get(⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = new Map(Array.from({
-      length: ⟦2-char-id⟧.k + 1
-    }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => [(0, ⟦2-char-id⟧.r)(⟦2-char-id⟧), ⟦2-char-id⟧])));
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, UJ, eJ, ⟦2-char-id⟧) {
+      length: ⟦2-char-id⟧.i + 1
+    }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => [(0, ⟦2-char-id⟧.n)(⟦2-char-id⟧), ⟦2-char-id⟧])));
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, yB, pB, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧.some(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        var ⟦2-char-id⟧, YJ, ⟦2-char-id⟧;
-        let [⟦2-char-id⟧, sJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+        var ⟦2-char-id⟧, oB, ⟦2-char-id⟧;
+        let [⟦2-char-id⟧, OB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
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
<summary>Hunk 19 · Change · +18 / -18</summary>

```diff
@@ -582,40 +582,40 @@
       }
       affects(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.has(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? cJ : "")
+        return ⟦2-char-id⟧.has(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) && void 0 !== ⟦2-char-id⟧ ? TB : "")
       }
       placedBy(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) === ⟦2-char-id⟧.d ? ⟦2-char-id⟧.h : null
-      }
-      shape(⟦2-char-id⟧, cJ, ZJ, UJ, AJ, ⟦2-char-id⟧) {
-        var ⟦2-char-id⟧, hJ, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? YJ : "",
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧ !== ⟦2-char-id⟧.h ? null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? DJ : "water" : function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.meta.rootName) === ⟦2-char-id⟧.e ? ⟦2-char-id⟧.f : null
+      }
+      shape(⟦2-char-id⟧, TB, dB, yB, JB, ⟦2-char-id⟧) {
+        var ⟦2-char-id⟧, kB, ⟦2-char-id⟧;
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? oB : "",
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧ !== ⟦2-char-id⟧.f ? null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? LB : "water" : function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
             return ⟦2-char-id⟧.some(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              let [⟦2-char-id⟧, jJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+              let [⟦2-char-id⟧, gB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), "cryo");
-              return null !== ⟦2-char-id⟧ && "port" !== ⟦2-char-id⟧.kind && (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, hJ, ⟦2-char-id⟧[⟦2-char-id⟧])
+              return null !== ⟦2-char-id⟧ && "port" !== ⟦2-char-id⟧.kind && (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, kB, ⟦2-char-id⟧[⟦2-char-id⟧])
             })) ? "cryo" : "water"
-          }(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+          }(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧),
+          ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
               ⟦2-char-id⟧ = 0;
             return ⟦2-char-id⟧.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              let [⟦2-char-id⟧, hJ, ⟦2-char-id⟧] = ⟦2-char-id⟧;
+              let [⟦2-char-id⟧, kB, ⟦2-char-id⟧] = ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧);
-              ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, sJ, ⟦2-char-id⟧[⟦2-char-id⟧]) && (⟦2-char-id⟧ |= 1 << ⟦2-char-id⟧)
-            })), eJ
-          }(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧),
+              ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, OB, ⟦2-char-id⟧[⟦2-char-id⟧]) && (⟦2-char-id⟧ |= 1 << ⟦2-char-id⟧)
+            })), pB
+          }(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
             var ⟦2-char-id⟧;
             return !0 === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.full)
-          }(⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, UJ, nJ, ⟦2-char-id⟧);
-        return (0, ⟦2-char-id⟧.n)((0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, GJ, ⟦2-char-id⟧))
+          }(⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, yB, DB, ⟦2-char-id⟧);
+        return (0, ⟦2-char-id⟧.j)((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, uB, ⟦2-char-id⟧))
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
<summary>Hunk 20 · Change · +1 / -1</summary>

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
<summary>Hunk 21 · Change · +7 / -7</summary>

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
<summary><code>bundles/bloxd.io/chunks/js/206.js</code> · modified · +179 / -179</summary>

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
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -31,10 +31,10 @@
     ⟦2-char-id⟧(⟦2-char-id⟧);
     const ⟦2-char-id⟧ = new Array(⟦2-char-id⟧);
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       this.static_tree = ⟦2-char-id⟧, this.extra_bits = ⟦2-char-id⟧, this.extra_base = ⟦2-char-id⟧, this.elems = ⟦2-char-id⟧, this.max_length = ⟦2-char-id⟧, this.has_stree = ⟦2-char-id⟧ && ⟦2-char-id⟧.length
     }
-    let ⟦2-char-id⟧, mJ, ⟦2-char-id⟧;
+    let ⟦2-char-id⟧, iB, ⟦2-char-id⟧;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       this.dyn_tree = ⟦2-char-id⟧, this.max_code = 0, this.stat_desc = ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 3 · Change · +5 / -5</summary>

```diff
@@ -44,11 +44,11 @@
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.pending++] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.pending++] = ⟦2-char-id⟧ >>> 8 & 255
       },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-        ⟦2-char-id⟧.bi_valid > 16 - ⟦2-char-id⟧ ? (⟦2-char-id⟧.bi_buf |= ⟦2-char-id⟧ << ⟦2-char-id⟧.bi_valid & 65535, KJ(⟦2-char-id⟧, ⟦2-char-id⟧.bi_buf), ⟦2-char-id⟧.bi_buf = ⟦2-char-id⟧ >> 16 - ⟦2-char-id⟧.bi_valid, ⟦2-char-id⟧.bi_valid += ⟦2-char-id⟧ - 16) : (⟦2-char-id⟧.bi_buf |= ⟦2-char-id⟧ << ⟦2-char-id⟧.bi_valid & 65535, ⟦2-char-id⟧.bi_valid += ⟦2-char-id⟧)
-      },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-        yJ(⟦2-char-id⟧, ⟦2-char-id⟧[2 * ⟦2-char-id⟧], ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1])
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+        ⟦2-char-id⟧.bi_valid > 16 - ⟦2-char-id⟧ ? (⟦2-char-id⟧.bi_buf |= ⟦2-char-id⟧ << ⟦2-char-id⟧.bi_valid & 65535, sB(⟦2-char-id⟧, ⟦2-char-id⟧.bi_buf), ⟦2-char-id⟧.bi_buf = ⟦2-char-id⟧ >> 16 - ⟦2-char-id⟧.bi_valid, ⟦2-char-id⟧.bi_valid += ⟦2-char-id⟧ - 16) : (⟦2-char-id⟧.bi_buf |= ⟦2-char-id⟧ << ⟦2-char-id⟧.bi_valid & 65535, ⟦2-char-id⟧.bi_valid += ⟦2-char-id⟧)
+      },
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+        MB(⟦2-char-id⟧, ⟦2-char-id⟧[2 * ⟦2-char-id⟧], ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1])
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         let ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -57,9 +57,9 @@
         } while (--⟦2-char-id⟧ > 0);
         return ⟦2-char-id⟧ >>> 1
       },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = new Array(16);
-        let ⟦2-char-id⟧, eJ, ⟦2-char-id⟧ = 0;
+        let ⟦2-char-id⟧, pB, ⟦2-char-id⟧ = 0;
         for (⟦2-char-id⟧ = 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧[⟦2-char-id⟧ - 1] << 1;
         for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1];
```

</details>

<details>
<summary>Hunk 5 · Change · +6 / -6</summary>

```diff
@@ -76,22 +76,22 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         ⟦2-char-id⟧.bi_valid > 8 ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.bi_buf) : ⟦2-char-id⟧.bi_valid > 0 && (⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.pending++] = ⟦2-char-id⟧.bi_buf), ⟦2-char-id⟧.bi_buf = 0, ⟦2-char-id⟧.bi_valid = 0
       },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧,
           ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧;
         return ⟦2-char-id⟧[⟦2-char-id⟧] < ⟦2-char-id⟧[⟦2-char-id⟧] || ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧[⟦2-char-id⟧] && ⟦2-char-id⟧[⟦2-char-id⟧] <= ⟦2-char-id⟧[⟦2-char-id⟧]
       },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[⟦2-char-id⟧];
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ << 1;
-        for (; ⟦2-char-id⟧ <= ⟦2-char-id⟧.heap_len && (⟦2-char-id⟧ < ⟦2-char-id⟧.heap_len && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.heap[⟦2-char-id⟧ + 1], ⟦2-char-id⟧.heap[⟦2-char-id⟧], ⟦2-char-id⟧.depth) && ⟦2-char-id⟧++, !⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧.heap[⟦2-char-id⟧], ⟦2-char-id⟧.depth));) ⟦2-char-id⟧.heap[⟦2-char-id⟧] = ⟦2-char-id⟧.heap[⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ <<= 1;
+        for (; ⟦2-char-id⟧ <= ⟦2-char-id⟧.heap_len && (⟦2-char-id⟧ < ⟦2-char-id⟧.heap_len && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.heap[⟦2-char-id⟧ + 1], ⟦2-char-id⟧.heap[⟦2-char-id⟧], ⟦2-char-id⟧.depth) && ⟦2-char-id⟧++, !⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧.heap[⟦2-char-id⟧], ⟦2-char-id⟧.depth));) ⟦2-char-id⟧.heap[⟦2-char-id⟧] = ⟦2-char-id⟧.heap[⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ <<= 1;
         ⟦2-char-id⟧.heap[⟦2-char-id⟧] = ⟦2-char-id⟧
       },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-        let ⟦2-char-id⟧, eJ, XJ, AJ, ⟦2-char-id⟧ = 0;
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+        let ⟦2-char-id⟧, pB, lB, JB, ⟦2-char-id⟧ = 0;
         if (0 !== ⟦2-char-id⟧.last_lit)
           do {
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧] << 8 | ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧ + 1], ⟦2-char-id⟧ = ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.l_buf + ⟦2-char-id⟧], ⟦2-char-id⟧++, 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, eJ, ⟦2-char-id⟧) : (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], SJ(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧ + 1, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧ -= ⟦2-char-id⟧[⟦2-char-id⟧], yJ(⟦2-char-id⟧, eJ, ⟦2-char-id⟧)), ⟦2-char-id⟧--, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), SJ(⟦2-char-id⟧, XJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧ -= ⟦2-char-id⟧[⟦2-char-id⟧], yJ(⟦2-char-id⟧, FJ, ⟦2-char-id⟧)))
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧] << 8 | ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧ + 1], ⟦2-char-id⟧ = ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.l_buf + ⟦2-char-id⟧], ⟦2-char-id⟧++, 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, pB, ⟦2-char-id⟧) : (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], zB(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧ + 1, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧ -= ⟦2-char-id⟧[⟦2-char-id⟧], MB(⟦2-char-id⟧, pB, ⟦2-char-id⟧)), ⟦2-char-id⟧--, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), zB(⟦2-char-id⟧, lB, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧ -= ⟦2-char-id⟧[⟦2-char-id⟧], MB(⟦2-char-id⟧, VB, ⟦2-char-id⟧)))
           } while (⟦2-char-id⟧ < ⟦2-char-id⟧.last_lit);
         ⟦2-char-id⟧(⟦2-char-id⟧, 256, ⟦2-char-id⟧)
       },
```

</details>

<details>
<summary>Hunk 6 · Change · +4 / -4</summary>

```diff
@@ -100,13 +100,13 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧.stat_desc.static_tree,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.stat_desc.has_stree,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.stat_desc.elems;
-        let ⟦2-char-id⟧, qJ, jJ, ⟦2-char-id⟧ = -1;
+        let ⟦2-char-id⟧, YB, gB, ⟦2-char-id⟧ = -1;
         for (⟦2-char-id⟧.heap_len = 0, ⟦2-char-id⟧.heap_max = 573, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) 0 !== ⟦2-char-id⟧[2 * ⟦2-char-id⟧] ? (⟦2-char-id⟧.heap[++⟦2-char-id⟧.heap_len] = ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.depth[⟦2-char-id⟧] = 0) : ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = 0;
-        for (; ⟦2-char-id⟧.heap_len < 2;) ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[++⟦2-char-id⟧.heap_len] = ⟦2-char-id⟧ < 2 ? ++YJ : 0, ⟦2-char-id⟧[2 * ⟦2-char-id⟧] = 1, ⟦2-char-id⟧.depth[⟦2-char-id⟧] = 0, ⟦2-char-id⟧.opt_len--, ⟦2-char-id⟧ && (⟦2-char-id⟧.static_len -= ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1]);
-        for (⟦2-char-id⟧.max_code = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.heap_len >> 1; ⟦2-char-id⟧ >= 1; ⟦2-char-id⟧--) ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧);
+        for (; ⟦2-char-id⟧.heap_len < 2;) ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[++⟦2-char-id⟧.heap_len] = ⟦2-char-id⟧ < 2 ? ++oB : 0, ⟦2-char-id⟧[2 * ⟦2-char-id⟧] = 1, ⟦2-char-id⟧.depth[⟦2-char-id⟧] = 0, ⟦2-char-id⟧.opt_len--, ⟦2-char-id⟧ && (⟦2-char-id⟧.static_len -= ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1]);
+        for (⟦2-char-id⟧.max_code = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.heap_len >> 1; ⟦2-char-id⟧ >= 1; ⟦2-char-id⟧--) ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧);
         ⟦2-char-id⟧ = ⟦2-char-id⟧;
         do {
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[1], ⟦2-char-id⟧.heap[1] = ⟦2-char-id⟧.heap[⟦2-char-id⟧.heap_len--], gJ(⟦2-char-id⟧, ZJ, 1), ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[1], ⟦2-char-id⟧.heap[--⟦2-char-id⟧.heap_max] = ⟦2-char-id⟧, ⟦2-char-id⟧.heap[--⟦2-char-id⟧.heap_max] = ⟦2-char-id⟧, ⟦2-char-id⟧[2 * ⟦2-char-id⟧] = ⟦2-char-id⟧[2 * ⟦2-char-id⟧] + ⟦2-char-id⟧[2 * ⟦2-char-id⟧], ⟦2-char-id⟧.depth[⟦2-char-id⟧] = (⟦2-char-id⟧.depth[⟦2-char-id⟧] >= ⟦2-char-id⟧.depth[⟦2-char-id⟧] ? ⟦2-char-id⟧.depth[⟦2-char-id⟧] : ⟦2-char-id⟧.depth[⟦2-char-id⟧]) + 1, ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = ⟦2-char-id⟧, ⟦2-char-id⟧.heap[1] = ⟦2-char-id⟧++, gJ(⟦2-char-id⟧, ZJ, 1)
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[1], ⟦2-char-id⟧.heap[1] = ⟦2-char-id⟧.heap[⟦2-char-id⟧.heap_len--], IB(⟦2-char-id⟧, dB, 1), ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[1], ⟦2-char-id⟧.heap[--⟦2-char-id⟧.heap_max] = ⟦2-char-id⟧, ⟦2-char-id⟧.heap[--⟦2-char-id⟧.heap_max] = ⟦2-char-id⟧, ⟦2-char-id⟧[2 * ⟦2-char-id⟧] = ⟦2-char-id⟧[2 * ⟦2-char-id⟧] + ⟦2-char-id⟧[2 * ⟦2-char-id⟧], ⟦2-char-id⟧.depth[⟦2-char-id⟧] = (⟦2-char-id⟧.depth[⟦2-char-id⟧] >= ⟦2-char-id⟧.depth[⟦2-char-id⟧] ? ⟦2-char-id⟧.depth[⟦2-char-id⟧] : ⟦2-char-id⟧.depth[⟦2-char-id⟧]) + 1, ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = ⟦2-char-id⟧, ⟦2-char-id⟧.heap[1] = ⟦2-char-id⟧++, IB(⟦2-char-id⟧, dB, 1)
         } while (⟦2-char-id⟧.heap_len >= 2);
         ⟦2-char-id⟧.heap[--⟦2-char-id⟧.heap_max] = ⟦2-char-id⟧.heap[1], ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.dyn_tree,
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -116,7 +116,7 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧.stat_desc.extra_bits,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.stat_desc.extra_base,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.stat_desc.max_length;
-          let ⟦2-char-id⟧, hJ, DJ, sJ, nJ, GJ, ⟦2-char-id⟧ = 0;
+          let ⟦2-char-id⟧, kB, LB, OB, DB, uB, ⟦2-char-id⟧ = 0;
           for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧.bl_count[⟦2-char-id⟧] = 0;
           for (⟦2-char-id⟧[2 * ⟦2-char-id⟧.heap[⟦2-char-id⟧.heap_max] + 1] = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.heap_max + 1; ⟦2-char-id⟧ < 573; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] + 1] + 1, ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧++), ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = ⟦2-char-id⟧, ⟦2-char-id⟧ > ⟦2-char-id⟧ || (⟦2-char-id⟧.bl_count[⟦2-char-id⟧]++, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - ⟦2-char-id⟧]), ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * ⟦2-char-id⟧], ⟦2-char-id⟧.opt_len += ⟦2-char-id⟧ * (⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧.static_len += ⟦2-char-id⟧ * (⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] + ⟦2-char-id⟧)));
           if (0 !== ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +8 / -8</summary>

```diff
@@ -127,18 +127,18 @@
             for (⟦2-char-id⟧ = ⟦2-char-id⟧; 0 !== ⟦2-char-id⟧; ⟦2-char-id⟧--)
               for (⟦2-char-id⟧ = ⟦2-char-id⟧.bl_count[⟦2-char-id⟧]; 0 !== ⟦2-char-id⟧;) ⟦2-char-id⟧ = ⟦2-char-id⟧.heap[--⟦2-char-id⟧], ⟦2-char-id⟧ > ⟦2-char-id⟧ || (⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] !== ⟦2-char-id⟧ && (⟦2-char-id⟧.opt_len += (⟦2-char-id⟧ - ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1]) * ⟦2-char-id⟧[2 * ⟦2-char-id⟧], ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = ⟦2-char-id⟧), ⟦2-char-id⟧--)
           }
-        })(⟦2-char-id⟧, ⟦2-char-id⟧), MJ(⟦2-char-id⟧, YJ, ⟦2-char-id⟧.bl_count)
-      },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-        let ⟦2-char-id⟧, UJ, ⟦2-char-id⟧ = -1,
+        })(⟦2-char-id⟧, ⟦2-char-id⟧), UB(⟦2-char-id⟧, oB, ⟦2-char-id⟧.bl_count)
+      },
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+        let ⟦2-char-id⟧, yB, ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = ⟦2-char-id⟧[1],
           ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = 7,
           ⟦2-char-id⟧ = 4;
-        for (0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3), ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1] = 65535, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1], ++⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧ || (⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧] += AJ : 0 !== ⟦2-char-id⟧ ? (⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧]++, ⟦2-char-id⟧.bl_tree[32]++) : ⟦2-char-id⟧ <= 10 ? ⟦2-char-id⟧.bl_tree[34]++ : ⟦2-char-id⟧.bl_tree[36]++, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧, 0 === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3) : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 6, ⟦2-char-id⟧ = 3) : (⟦2-char-id⟧ = 7, ⟦2-char-id⟧ = 4))
-      },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-        let ⟦2-char-id⟧, UJ, ⟦2-char-id⟧ = -1,
+        for (0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3), ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1] = 65535, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1], ++⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧ || (⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧] += JB : 0 !== ⟦2-char-id⟧ ? (⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧]++, ⟦2-char-id⟧.bl_tree[32]++) : ⟦2-char-id⟧ <= 10 ? ⟦2-char-id⟧.bl_tree[34]++ : ⟦2-char-id⟧.bl_tree[36]++, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧, 0 === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3) : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 6, ⟦2-char-id⟧ = 3) : (⟦2-char-id⟧ = 7, ⟦2-char-id⟧ = 4))
+      },
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+        let ⟦2-char-id⟧, yB, ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = ⟦2-char-id⟧[1],
           ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = 7,
```

</details>

<details>
<summary>Hunk 9 · Change · +8 / -8</summary>

```diff
@@ -147,20 +147,20 @@
           if (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * (⟦2-char-id⟧ + 1) + 1], !(++⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧)) {
             if (⟦2-char-id⟧ < ⟦2-char-id⟧)
               do {
-                SJ(⟦2-char-id⟧, UJ, ⟦2-char-id⟧.bl_tree)
+                zB(⟦2-char-id⟧, yB, ⟦2-char-id⟧.bl_tree)
               } while (0 !== --⟦2-char-id⟧);
-            else 0 !== ⟦2-char-id⟧ ? (⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, UJ, ⟦2-char-id⟧.bl_tree), ⟦2-char-id⟧--), SJ(⟦2-char-id⟧, 16, ⟦2-char-id⟧.bl_tree), yJ(⟦2-char-id⟧, ⟦2-char-id⟧ - 3, 2)) : ⟦2-char-id⟧ <= 10 ? (⟦2-char-id⟧(⟦2-char-id⟧, 17, ⟦2-char-id⟧.bl_tree), yJ(⟦2-char-id⟧, ⟦2-char-id⟧ - 3, 3)) : (⟦2-char-id⟧(⟦2-char-id⟧, 18, ⟦2-char-id⟧.bl_tree), yJ(⟦2-char-id⟧, ⟦2-char-id⟧ - 11, 7));
+            else 0 !== ⟦2-char-id⟧ ? (⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, yB, ⟦2-char-id⟧.bl_tree), ⟦2-char-id⟧--), zB(⟦2-char-id⟧, 16, ⟦2-char-id⟧.bl_tree), MB(⟦2-char-id⟧, ⟦2-char-id⟧ - 3, 2)) : ⟦2-char-id⟧ <= 10 ? (⟦2-char-id⟧(⟦2-char-id⟧, 17, ⟦2-char-id⟧.bl_tree), MB(⟦2-char-id⟧, ⟦2-char-id⟧ - 3, 3)) : (⟦2-char-id⟧(⟦2-char-id⟧, 18, ⟦2-char-id⟧.bl_tree), MB(⟦2-char-id⟧, ⟦2-char-id⟧ - 11, 7));
             ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧, 0 === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 138, ⟦2-char-id⟧ = 3) : ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧ = 6, ⟦2-char-id⟧ = 3) : (⟦2-char-id⟧ = 7, ⟦2-char-id⟧ = 4)
           }
       };
     let ⟦2-char-id⟧ = !1;
-    const ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
-      yJ(⟦2-char-id⟧, 0 + (⟦2-char-id⟧ ? 1 : 0), 3), ((⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
-        wJ(⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), KJ(⟦2-char-id⟧, ~⟦2-char-id⟧)), ⟦2-char-id⟧.pending_buf.set(⟦2-char-id⟧.window.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧.pending), ⟦2-char-id⟧.pending += ⟦2-char-id⟧
-      })(⟦2-char-id⟧, cJ, ZJ, !0)
+    const ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
+      MB(⟦2-char-id⟧, 0 + (⟦2-char-id⟧ ? 1 : 0), 3), ((⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
+        KB(⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), sB(⟦2-char-id⟧, ~⟦2-char-id⟧)), ⟦2-char-id⟧.pending_buf.set(⟦2-char-id⟧.window.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧.pending), ⟦2-char-id⟧.pending += ⟦2-char-id⟧
+      })(⟦2-char-id⟧, TB, dB, !0)
     };
-    var ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
-        let ⟦2-char-id⟧, XJ, ⟦2-char-id⟧ = 0;
+    var ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
+        let ⟦2-char-id⟧, lB, ⟦2-char-id⟧ = 0;
         ⟦2-char-id⟧.level > 0 ? (2 === ⟦2-char-id⟧.strm.data_type && (⟦2-char-id⟧.strm.data_type = (⟦2-char-id⟧ => {
           let ⟦2-char-id⟧, ⟦2-char-id⟧ = 4093624447;
           for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= 31; ⟦2-char-id⟧++, ⟦2-char-id⟧ >>>= 1)
```

</details>

<details>
<summary>Hunk 10 · Change · +8 / -8</summary>

```diff
@@ -169,20 +169,20 @@
           for (⟦2-char-id⟧ = 32; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
             if (0 !== ⟦2-char-id⟧.dyn_ltree[2 * ⟦2-char-id⟧]) return 1;
           return 0
-        })(⟦2-char-id⟧)), PJ(⟦2-char-id⟧, ⟦2-char-id⟧.l_desc), PJ(⟦2-char-id⟧, ⟦2-char-id⟧.d_desc), ⟦2-char-id⟧ = (⟦2-char-id⟧ => {
+        })(⟦2-char-id⟧)), SB(⟦2-char-id⟧, ⟦2-char-id⟧.l_desc), SB(⟦2-char-id⟧, ⟦2-char-id⟧.d_desc), ⟦2-char-id⟧ = (⟦2-char-id⟧ => {
           let ⟦2-char-id⟧;
-          for (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_ltree, ⟦2-char-id⟧.l_desc.max_code), kJ(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_dtree, ⟦2-char-id⟧.d_desc.max_code), PJ(⟦2-char-id⟧, ⟦2-char-id⟧.bl_desc), ⟦2-char-id⟧ = 18; ⟦2-char-id⟧ >= 3 && 0 === ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧[⟦2-char-id⟧] + 1]; ⟦2-char-id⟧--);
-          return ⟦2-char-id⟧.opt_len += 3 * (⟦2-char-id⟧ + 1) + 5 + 5 + 4, cJ
-        })(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.opt_len + 3 + 7 >>> 3, ⟦2-char-id⟧ = ⟦2-char-id⟧.static_len + 3 + 7 >>> 3, ⟦2-char-id⟧ <= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧)) : ⟦2-char-id⟧ = ⟦2-char-id⟧ = ⟦2-char-id⟧ + 5, ⟦2-char-id⟧ + 4 <= ⟦2-char-id⟧ && -1 !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) : 4 === ⟦2-char-id⟧.strategy || ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧(⟦2-char-id⟧, 2 + (⟦2-char-id⟧ ? 1 : 0), 3), HJ(⟦2-char-id⟧, DJ, ⟦2-char-id⟧)) : (⟦2-char-id⟧(⟦2-char-id⟧, 4 + (⟦2-char-id⟧ ? 1 : 0), 3), ((⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
+          for (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_ltree, ⟦2-char-id⟧.l_desc.max_code), PB(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_dtree, ⟦2-char-id⟧.d_desc.max_code), SB(⟦2-char-id⟧, ⟦2-char-id⟧.bl_desc), ⟦2-char-id⟧ = 18; ⟦2-char-id⟧ >= 3 && 0 === ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧[⟦2-char-id⟧] + 1]; ⟦2-char-id⟧--);
+          return ⟦2-char-id⟧.opt_len += 3 * (⟦2-char-id⟧ + 1) + 5 + 5 + 4, TB
+        })(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.opt_len + 3 + 7 >>> 3, ⟦2-char-id⟧ = ⟦2-char-id⟧.static_len + 3 + 7 >>> 3, ⟦2-char-id⟧ <= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧)) : ⟦2-char-id⟧ = ⟦2-char-id⟧ = ⟦2-char-id⟧ + 5, ⟦2-char-id⟧ + 4 <= ⟦2-char-id⟧ && -1 !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) : 4 === ⟦2-char-id⟧.strategy || ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧(⟦2-char-id⟧, 2 + (⟦2-char-id⟧ ? 1 : 0), 3), cB(⟦2-char-id⟧, LB, ⟦2-char-id⟧)) : (⟦2-char-id⟧(⟦2-char-id⟧, 4 + (⟦2-char-id⟧ ? 1 : 0), 3), ((⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
           let ⟦2-char-id⟧;
-          for (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 257, 5), yJ(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, 5), yJ(⟦2-char-id⟧, ⟦2-char-id⟧ - 4, 4), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧[⟦2-char-id⟧] + 1], 3);
-          ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_ltree, ⟦2-char-id⟧ - 1), pJ(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_dtree, ⟦2-char-id⟧ - 1)
-        })(⟦2-char-id⟧, ⟦2-char-id⟧.l_desc.max_code + 1, ⟦2-char-id⟧.d_desc.max_code + 1, ⟦2-char-id⟧ + 1), HJ(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_ltree, ⟦2-char-id⟧.dyn_dtree)), bJ(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)
+          for (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 257, 5), MB(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, 5), MB(⟦2-char-id⟧, ⟦2-char-id⟧ - 4, 4), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.bl_tree[2 * ⟦2-char-id⟧[⟦2-char-id⟧] + 1], 3);
+          ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_ltree, ⟦2-char-id⟧ - 1), QB(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_dtree, ⟦2-char-id⟧ - 1)
+        })(⟦2-char-id⟧, ⟦2-char-id⟧.l_desc.max_code + 1, ⟦2-char-id⟧.d_desc.max_code + 1, ⟦2-char-id⟧ + 1), cB(⟦2-char-id⟧, ⟦2-char-id⟧.dyn_ltree, ⟦2-char-id⟧.dyn_dtree)), FB(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)
       },
       ⟦2-char-id⟧ = {
         _tr_init: ⟦2-char-id⟧ => {
           ⟦2-char-id⟧ || ((() => {
-            let ⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧;
+            let ⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = new Array(16);
             for (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 28; ⟦2-char-id⟧++)
               for (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 1 << ⟦2-char-id⟧[⟦2-char-id⟧]; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 11 · Change · +5 / -5</summary>

```diff
@@ -196,19 +196,19 @@
             for (; ⟦2-char-id⟧ <= 279;) ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = 7, ⟦2-char-id⟧++, ⟦2-char-id⟧[7]++;
             for (; ⟦2-char-id⟧ <= 287;) ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = 8, ⟦2-char-id⟧++, ⟦2-char-id⟧[8]++;
             for (⟦2-char-id⟧(⟦2-char-id⟧, 287, ⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1] = 5, ⟦2-char-id⟧[2 * ⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, 5);
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, qJ, 257, eJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, jJ, 0, XJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = new ⟦2-char-id⟧(new Array(0), YJ, 0, 19, 7)
-          })(), ⟦2-char-id⟧ = !0), ⟦2-char-id⟧.l_desc = new ⟦2-char-id⟧(⟦2-char-id⟧.dyn_ltree, ⟦2-char-id⟧), ⟦2-char-id⟧.d_desc = new ⟦2-char-id⟧(⟦2-char-id⟧.dyn_dtree, ⟦2-char-id⟧), ⟦2-char-id⟧.bl_desc = new ⟦2-char-id⟧(⟦2-char-id⟧.bl_tree, ⟦2-char-id⟧), ⟦2-char-id⟧.bi_buf = 0, ⟦2-char-id⟧.bi_valid = 0, bJ(⟦2-char-id⟧)
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, YB, 257, pB, ⟦2-char-id⟧), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, gB, 0, lB, ⟦2-char-id⟧), ⟦2-char-id⟧ = new ⟦2-char-id⟧(new Array(0), oB, 0, 19, 7)
+          })(), ⟦2-char-id⟧ = !0), ⟦2-char-id⟧.l_desc = new ⟦2-char-id⟧(⟦2-char-id⟧.dyn_ltree, ⟦2-char-id⟧), ⟦2-char-id⟧.d_desc = new ⟦2-char-id⟧(⟦2-char-id⟧.dyn_dtree, ⟦2-char-id⟧), ⟦2-char-id⟧.bl_desc = new ⟦2-char-id⟧(⟦2-char-id⟧.bl_tree, ⟦2-char-id⟧), ⟦2-char-id⟧.bi_buf = 0, ⟦2-char-id⟧.bi_valid = 0, FB(⟦2-char-id⟧)
         },
         _tr_stored_block: ⟦2-char-id⟧,
         _tr_flush_block: ⟦2-char-id⟧,
-        _tr_tally: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => (⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧.last_lit] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧.last_lit + 1] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.l_buf + ⟦2-char-id⟧.last_lit] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.last_lit++, 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.dyn_ltree[2 * ⟦2-char-id⟧]++ : (⟦2-char-id⟧.matches++, ⟦2-char-id⟧--, ⟦2-char-id⟧.dyn_ltree[2 * (⟦2-char-id⟧[⟦2-char-id⟧] + ⟦2-char-id⟧ + 1)]++, ⟦2-char-id⟧.dyn_dtree[2 * ⟦2-char-id⟧(⟦2-char-id⟧)]++), ⟦2-char-id⟧.last_lit === ⟦2-char-id⟧.lit_bufsize - 1),
+        _tr_tally: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => (⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧.last_lit] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.d_buf + 2 * ⟦2-char-id⟧.last_lit + 1] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.l_buf + ⟦2-char-id⟧.last_lit] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.last_lit++, 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.dyn_ltree[2 * ⟦2-char-id⟧]++ : (⟦2-char-id⟧.matches++, ⟦2-char-id⟧--, ⟦2-char-id⟧.dyn_ltree[2 * (⟦2-char-id⟧[⟦2-char-id⟧] + ⟦2-char-id⟧ + 1)]++, ⟦2-char-id⟧.dyn_dtree[2 * ⟦2-char-id⟧(⟦2-char-id⟧)]++), ⟦2-char-id⟧.last_lit === ⟦2-char-id⟧.lit_bufsize - 1),
         _tr_align: ⟦2-char-id⟧ => {
-          yJ(⟦2-char-id⟧, 2, 3), SJ(⟦2-char-id⟧, 256, ⟦2-char-id⟧), (⟦2-char-id⟧ => {
+          MB(⟦2-char-id⟧, 2, 3), zB(⟦2-char-id⟧, 256, ⟦2-char-id⟧), (⟦2-char-id⟧ => {
             16 === ⟦2-char-id⟧.bi_valid ? (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.bi_buf), ⟦2-char-id⟧.bi_buf = 0, ⟦2-char-id⟧.bi_valid = 0) : ⟦2-char-id⟧.bi_valid >= 8 && (⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.pending++] = 255 & ⟦2-char-id⟧.bi_buf, ⟦2-char-id⟧.bi_buf >>= 8, ⟦2-char-id⟧.bi_valid -= 8)
           })(⟦2-char-id⟧)
         }
       };
-    var ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
       let ⟦2-char-id⟧ = 65535 & ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ >>> 16 & 65535,
         ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -230,7 +230,7 @@
       }
       return ⟦2-char-id⟧
     })());
-    var ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧;
         ⟦2-char-id⟧ ^= -1;
```

</details>

<details>
<summary>Hunk 13 · Change · +3 / -3</summary>

```diff
@@ -303,18 +303,18 @@
       Z_DEFAULT_STRATEGY: ⟦2-char-id⟧,
       Z_UNKNOWN: ⟦2-char-id⟧,
       Z_DEFLATED: ⟦2-char-id⟧
-    } = ⟦2-char-id⟧, ⟦2-char-id⟧ = 258, ⟦2-char-id⟧ = 262, ⟦2-char-id⟧ = 103, ⟦2-char-id⟧ = 113, ⟦2-char-id⟧ = 666, ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => (⟦2-char-id⟧.JY = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ => (⟦2-char-id⟧ << 1) - (⟦2-char-id⟧ > 4 ? 9 : 0), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
+    } = ⟦2-char-id⟧, ⟦2-char-id⟧ = 258, ⟦2-char-id⟧ = 262, ⟦2-char-id⟧ = 103, ⟦2-char-id⟧ = 113, ⟦2-char-id⟧ = 666, ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => (⟦2-char-id⟧.Jo = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ => (⟦2-char-id⟧ << 1) - (⟦2-char-id⟧ > 4 ? 9 : 0), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
       for (; --⟦2-char-id⟧ >= 0;) ⟦2-char-id⟧[⟦2-char-id⟧] = 0
     };
-    let ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => (⟦2-char-id⟧ << ⟦2-char-id⟧.hash_shift ^ ⟦2-char-id⟧) & ⟦2-char-id⟧.hash_mask;
+    let ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => (⟦2-char-id⟧ << ⟦2-char-id⟧.hash_shift ^ ⟦2-char-id⟧) & ⟦2-char-id⟧.hash_mask;
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.pending;
         ⟦2-char-id⟧ > ⟦2-char-id⟧.avail_out && (⟦2-char-id⟧ = ⟦2-char-id⟧.avail_out), 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧.output.set(⟦2-char-id⟧.pending_buf.subarray(⟦2-char-id⟧.pending_out, ⟦2-char-id⟧.pending_out + ⟦2-char-id⟧), ⟦2-char-id⟧.next_out), ⟦2-char-id⟧.next_out += ⟦2-char-id⟧, ⟦2-char-id⟧.pending_out += ⟦2-char-id⟧, ⟦2-char-id⟧.total_out += ⟦2-char-id⟧, ⟦2-char-id⟧.avail_out -= ⟦2-char-id⟧, ⟦2-char-id⟧.pending -= ⟦2-char-id⟧, 0 === ⟦2-char-id⟧.pending && (⟦2-char-id⟧.pending_out = 0))
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        BJ(⟦2-char-id⟧, ⟦2-char-id⟧.block_start >= 0 ? ⟦2-char-id⟧.block_start : -1, ⟦2-char-id⟧.strstart - ⟦2-char-id⟧.block_start, ⟦2-char-id⟧), ⟦2-char-id⟧.block_start = ⟦2-char-id⟧.strstart, Sc(⟦2-char-id⟧.strm)
+        AB(⟦2-char-id⟧, ⟦2-char-id⟧.block_start >= 0 ? ⟦2-char-id⟧.block_start : -1, ⟦2-char-id⟧.strstart - ⟦2-char-id⟧.block_start, ⟦2-char-id⟧), ⟦2-char-id⟧.block_start = ⟦2-char-id⟧.strstart, zT(⟦2-char-id⟧.strm)
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.pending++] = ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -322,12 +322,12 @@
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.pending++] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.pending_buf[⟦2-char-id⟧.pending++] = 255 & ⟦2-char-id⟧
       },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.avail_in;
-        return ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), 0 === ⟦2-char-id⟧ ? 0 : (⟦2-char-id⟧.avail_in -= ⟦2-char-id⟧, ⟦2-char-id⟧.set(⟦2-char-id⟧.input.subarray(⟦2-char-id⟧.next_in, ⟦2-char-id⟧.next_in + ⟦2-char-id⟧), ⟦2-char-id⟧), 1 === ⟦2-char-id⟧.state.wrap ? ⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, cJ, UJ, ⟦2-char-id⟧) : 2 === ⟦2-char-id⟧.state.wrap && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, cJ, UJ, ⟦2-char-id⟧)), ⟦2-char-id⟧.next_in += ⟦2-char-id⟧, ⟦2-char-id⟧.total_in += ⟦2-char-id⟧, ⟦2-char-id⟧)
+        return ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), 0 === ⟦2-char-id⟧ ? 0 : (⟦2-char-id⟧.avail_in -= ⟦2-char-id⟧, ⟦2-char-id⟧.set(⟦2-char-id⟧.input.subarray(⟦2-char-id⟧.next_in, ⟦2-char-id⟧.next_in + ⟦2-char-id⟧), ⟦2-char-id⟧), 1 === ⟦2-char-id⟧.state.wrap ? ⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, TB, yB, ⟦2-char-id⟧) : 2 === ⟦2-char-id⟧.state.wrap && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, TB, yB, ⟦2-char-id⟧)), ⟦2-char-id⟧.next_in += ⟦2-char-id⟧, ⟦2-char-id⟧.total_in += ⟦2-char-id⟧, ⟦2-char-id⟧)
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        let ⟦2-char-id⟧, FJ, ⟦2-char-id⟧ = ⟦2-char-id⟧.max_chain_length,
+        let ⟦2-char-id⟧, VB, ⟦2-char-id⟧ = ⟦2-char-id⟧.max_chain_length,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.strstart,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.prev_length,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.nice_match;
```

</details>

<details>
<summary>Hunk 15 · Change · +4 / -4</summary>

```diff
@@ -349,20 +349,20 @@
             }
           }
         } while ((⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ & ⟦2-char-id⟧]) > ⟦2-char-id⟧ && 0 !== --⟦2-char-id⟧);
-        return ⟦2-char-id⟧ <= ⟦2-char-id⟧.lookahead ? XJ : ⟦2-char-id⟧.lookahead
+        return ⟦2-char-id⟧ <= ⟦2-char-id⟧.lookahead ? lB : ⟦2-char-id⟧.lookahead
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.w_size;
-        let ⟦2-char-id⟧, FJ, UJ, eJ, ⟦2-char-id⟧;
+        let ⟦2-char-id⟧, VB, yB, pB, ⟦2-char-id⟧;
         do {
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
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -392,7 +392,7 @@
         return ⟦2-char-id⟧.insert = ⟦2-char-id⟧.strstart < 2 ? ⟦2-char-id⟧.strstart : 2, ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧(⟦2-char-id⟧, !0), 0 === ⟦2-char-id⟧.strm.avail_out ? 3 : 4) : ⟦2-char-id⟧.last_lit && (⟦2-char-id⟧(⟦2-char-id⟧, !1), 0 === ⟦2-char-id⟧.strm.avail_out) ? 1 : 2
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        let ⟦2-char-id⟧, FJ, ⟦2-char-id⟧;
+        let ⟦2-char-id⟧, VB, ⟦2-char-id⟧;
         for (;;) {
           if (⟦2-char-id⟧.lookahead < ⟦2-char-id⟧) {
             if (⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.lookahead < ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧) return 1;
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -411,7 +411,7 @@
         return ⟦2-char-id⟧.match_available && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧.window[⟦2-char-id⟧.strstart - 1]), ⟦2-char-id⟧.match_available = 0), ⟦2-char-id⟧.insert = ⟦2-char-id⟧.strstart < 2 ? ⟦2-char-id⟧.strstart : 2, ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧(⟦2-char-id⟧, !0), 0 === ⟦2-char-id⟧.strm.avail_out ? 3 : 4) : ⟦2-char-id⟧.last_lit && (⟦2-char-id⟧(⟦2-char-id⟧, !1), 0 === ⟦2-char-id⟧.strm.avail_out) ? 1 : 2
       };
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       this.good_length = ⟦2-char-id⟧, this.max_lazy = ⟦2-char-id⟧, this.nice_length = ⟦2-char-id⟧, this.max_chain = ⟦2-char-id⟧, this.func = ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = [new ⟦2-char-id⟧(0, 0, 0, 0, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 18 · Change · +15 / -15</summary>

```diff
@@ -423,67 +423,67 @@
         }
         ⟦2-char-id⟧.strstart += ⟦2-char-id⟧.lookahead, ⟦2-char-id⟧.lookahead = 0;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.block_start + ⟦2-char-id⟧;
-        if ((0 === ⟦2-char-id⟧.strstart || ⟦2-char-id⟧.strstart >= ⟦2-char-id⟧) && (⟦2-char-id⟧.lookahead = ⟦2-char-id⟧.strstart - ⟦2-char-id⟧, ⟦2-char-id⟧.strstart = ⟦2-char-id⟧, Ic(⟦2-char-id⟧, !1), 0 === ⟦2-char-id⟧.strm.avail_out)) return 1;
+        if ((0 === ⟦2-char-id⟧.strstart || ⟦2-char-id⟧.strstart >= ⟦2-char-id⟧) && (⟦2-char-id⟧.lookahead = ⟦2-char-id⟧.strstart - ⟦2-char-id⟧, ⟦2-char-id⟧.strstart = ⟦2-char-id⟧, wT(⟦2-char-id⟧, !1), 0 === ⟦2-char-id⟧.strm.avail_out)) return 1;
         if (⟦2-char-id⟧.strstart - ⟦2-char-id⟧.block_start >= ⟦2-char-id⟧.w_size - ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, !1), 0 === ⟦2-char-id⟧.strm.avail_out)) return 1
       }
       return ⟦2-char-id⟧.insert = 0, ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧(⟦2-char-id⟧, !0), 0 === ⟦2-char-id⟧.strm.avail_out ? 3 : 4) : (⟦2-char-id⟧.strstart > ⟦2-char-id⟧.block_start && (⟦2-char-id⟧(⟦2-char-id⟧, !1), ⟦2-char-id⟧.strm.avail_out), 1)
     })), new ⟦2-char-id⟧(4, 4, 8, 4, ⟦2-char-id⟧), new ⟦2-char-id⟧(4, 5, 16, 8, ⟦2-char-id⟧), new ⟦2-char-id⟧(4, 6, 32, 32, ⟦2-char-id⟧), new ⟦2-char-id⟧(4, 4, 16, 16, ⟦2-char-id⟧), new ⟦2-char-id⟧(8, 16, 32, 32, ⟦2-char-id⟧), new ⟦2-char-id⟧(8, 16, 128, 128, ⟦2-char-id⟧), new ⟦2-char-id⟧(8, 32, 128, 256, ⟦2-char-id⟧), new ⟦2-char-id⟧(32, 128, 258, 1024, ⟦2-char-id⟧), new ⟦2-char-id⟧(32, 258, 258, 4096, ⟦2-char-id⟧)];
 
     function ⟦2-char-id⟧() {
-      this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ⟦2-char-id⟧, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), Kc(this.dyn_ltree), Kc(this.dyn_dtree), Kc(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), Kc(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), Kc(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
+      this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ⟦2-char-id⟧, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), sT(this.dyn_ltree), sT(this.dyn_dtree), sT(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), sT(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), sT(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         ⟦2-char-id⟧.total_in = ⟦2-char-id⟧.total_out = 0, ⟦2-char-id⟧.data_type = ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return ⟦2-char-id⟧.pending = 0, ⟦2-char-id⟧.pending_out = 0, ⟦2-char-id⟧.wrap < 0 && (⟦2-char-id⟧.wrap = -⟦2-char-id⟧.wrap), ⟦2-char-id⟧.status = ⟦2-char-id⟧.wrap ? 42 : ⟦2-char-id⟧, ⟦2-char-id⟧.adler = 2 === ⟦2-char-id⟧.wrap ? 0 : 1, ⟦2-char-id⟧.last_flush = ⟦2-char-id⟧, LJ(⟦2-char-id⟧), Uc
+        return ⟦2-char-id⟧.pending = 0, ⟦2-char-id⟧.pending_out = 0, ⟦2-char-id⟧.wrap < 0 && (⟦2-char-id⟧.wrap = -⟦2-char-id⟧.wrap), ⟦2-char-id⟧.status = ⟦2-char-id⟧.wrap ? 42 : ⟦2-char-id⟧, ⟦2-char-id⟧.adler = 2 === ⟦2-char-id⟧.wrap ? 0 : 1, ⟦2-char-id⟧.last_flush = ⟦2-char-id⟧, xB(⟦2-char-id⟧), yT
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
         var ⟦2-char-id⟧;
-        return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ((⟦2-char-id⟧ = ⟦2-char-id⟧.state).window_size = 2 * ⟦2-char-id⟧.w_size, Kc(⟦2-char-id⟧.head), ⟦2-char-id⟧.max_lazy_match = ⟦2-char-id⟧[⟦2-char-id⟧.level].max_lazy, ⟦2-char-id⟧.good_match = ⟦2-char-id⟧[⟦2-char-id⟧.level].good_length, ⟦2-char-id⟧.nice_match = ⟦2-char-id⟧[⟦2-char-id⟧.level].nice_length, ⟦2-char-id⟧.max_chain_length = ⟦2-char-id⟧[⟦2-char-id⟧.level].max_chain, ⟦2-char-id⟧.strstart = 0, ⟦2-char-id⟧.block_start = 0, ⟦2-char-id⟧.lookahead = 0, ⟦2-char-id⟧.insert = 0, ⟦2-char-id⟧.match_length = ⟦2-char-id⟧.prev_length = 2, ⟦2-char-id⟧.match_available = 0, ⟦2-char-id⟧.ins_h = 0), cJ
-      },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) => {
+        return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ((⟦2-char-id⟧ = ⟦2-char-id⟧.state).window_size = 2 * ⟦2-char-id⟧.w_size, sT(⟦2-char-id⟧.head), ⟦2-char-id⟧.max_lazy_match = ⟦2-char-id⟧[⟦2-char-id⟧.level].max_lazy, ⟦2-char-id⟧.good_match = ⟦2-char-id⟧[⟦2-char-id⟧.level].good_length, ⟦2-char-id⟧.nice_match = ⟦2-char-id⟧[⟦2-char-id⟧.level].nice_length, ⟦2-char-id⟧.max_chain_length = ⟦2-char-id⟧[⟦2-char-id⟧.level].max_chain, ⟦2-char-id⟧.strstart = 0, ⟦2-char-id⟧.block_start = 0, ⟦2-char-id⟧.lookahead = 0, ⟦2-char-id⟧.insert = 0, ⟦2-char-id⟧.match_length = ⟦2-char-id⟧.prev_length = 2, ⟦2-char-id⟧.match_available = 0, ⟦2-char-id⟧.ins_h = 0), TB
+      },
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) => {
         if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = 1;
         if (⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 6), ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = -⟦2-char-id⟧) : ⟦2-char-id⟧ > 15 && (⟦2-char-id⟧ = 2, ⟦2-char-id⟧ -= 16), ⟦2-char-id⟧ < 1 || ⟦2-char-id⟧ > 9 || ⟦2-char-id⟧ !== ⟦2-char-id⟧ || ⟦2-char-id⟧ < 8 || ⟦2-char-id⟧ > 15 || ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > 9 || ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         8 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = 9);
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.state = ⟦2-char-id⟧, ⟦2-char-id⟧.strm = ⟦2-char-id⟧, ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, ⟦2-char-id⟧.gzhead = null, ⟦2-char-id⟧.w_bits = ⟦2-char-id⟧, ⟦2-char-id⟧.w_size = 1 << ⟦2-char-id⟧.w_bits, ⟦2-char-id⟧.w_mask = ⟦2-char-id⟧.w_size - 1, ⟦2-char-id⟧.hash_bits = ⟦2-char-id⟧ + 7, ⟦2-char-id⟧.hash_size = 1 << ⟦2-char-id⟧.hash_bits, ⟦2-char-id⟧.hash_mask = ⟦2-char-id⟧.hash_size - 1, ⟦2-char-id⟧.hash_shift = ~~((⟦2-char-id⟧.hash_bits + 3 - 1) / 3), ⟦2-char-id⟧.window = new Uint8Array(2 * ⟦2-char-id⟧.w_size), ⟦2-char-id⟧.head = new Uint16Array(⟦2-char-id⟧.hash_size), ⟦2-char-id⟧.prev = new Uint16Array(⟦2-char-id⟧.w_size), ⟦2-char-id⟧.lit_bufsize = 1 << ⟦2-char-id⟧ + 6, ⟦2-char-id⟧.pending_buf_size = 4 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.pending_buf = new Uint8Array(⟦2-char-id⟧.pending_buf_size), ⟦2-char-id⟧.d_buf = 1 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.l_buf = 3 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.level = ⟦2-char-id⟧, ⟦2-char-id⟧.strategy = ⟦2-char-id⟧, ⟦2-char-id⟧.method = ⟦2-char-id⟧, Nc(⟦2-char-id⟧)
+        return ⟦2-char-id⟧.state = ⟦2-char-id⟧, ⟦2-char-id⟧.strm = ⟦2-char-id⟧, ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, ⟦2-char-id⟧.gzhead = null, ⟦2-char-id⟧.w_bits = ⟦2-char-id⟧, ⟦2-char-id⟧.w_size = 1 << ⟦2-char-id⟧.w_bits, ⟦2-char-id⟧.w_mask = ⟦2-char-id⟧.w_size - 1, ⟦2-char-id⟧.hash_bits = ⟦2-char-id⟧ + 7, ⟦2-char-id⟧.hash_size = 1 << ⟦2-char-id⟧.hash_bits, ⟦2-char-id⟧.hash_mask = ⟦2-char-id⟧.hash_size - 1, ⟦2-char-id⟧.hash_shift = ~~((⟦2-char-id⟧.hash_bits + 3 - 1) / 3), ⟦2-char-id⟧.window = new Uint8Array(2 * ⟦2-char-id⟧.w_size), ⟦2-char-id⟧.head = new Uint16Array(⟦2-char-id⟧.hash_size), ⟦2-char-id⟧.prev = new Uint16Array(⟦2-char-id⟧.w_size), ⟦2-char-id⟧.lit_bufsize = 1 << ⟦2-char-id⟧ + 6, ⟦2-char-id⟧.pending_buf_size = 4 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.pending_buf = new Uint8Array(⟦2-char-id⟧.pending_buf_size), ⟦2-char-id⟧.d_buf = 1 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.l_buf = 3 * ⟦2-char-id⟧.lit_bufsize, ⟦2-char-id⟧.level = ⟦2-char-id⟧, ⟦2-char-id⟧.strategy = ⟦2-char-id⟧, ⟦2-char-id⟧.method = ⟦2-char-id⟧, ZT(⟦2-char-id⟧)
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
-          if (2 === ⟦2-char-id⟧.wrap) ⟦2-char-id⟧.adler = 0, Mc(⟦2-char-id⟧, 31), Mc(⟦2-char-id⟧, 139), Mc(⟦2-char-id⟧, 8), ⟦2-char-id⟧.gzhead ? (⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧.gzhead.text ? 1 : 0) + (⟦2-char-id⟧.gzhead.hcrc ? 2 : 0) + (⟦2-char-id⟧.gzhead.extra ? 4 : 0) + (⟦2-char-id⟧.gzhead.name ? 8 : 0) + (⟦2-char-id⟧.gzhead.comment ? 16 : 0)), Mc(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.gzhead.time), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.gzhead.time >> 8 & 255), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.gzhead.time >> 16 & 255), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.gzhead.time >> 24 & 255), Mc(⟦2-char-id⟧, 9 === ⟦2-char-id⟧.level ? 2 : ⟦2-char-id⟧.strategy >= ⟦2-char-id⟧ || ⟦2-char-id⟧.level < 2 ? 4 : 0), Mc(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.gzhead.os), ⟦2-char-id⟧.gzhead.extra && ⟦2-char-id⟧.gzhead.extra.length && (⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.gzhead.extra.length), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.gzhead.extra.length >> 8 & 255)), ⟦2-char-id⟧.gzhead.hcrc && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending, 0)), ⟦2-char-id⟧.gzindex = 0, ⟦2-char-id⟧.status = 69) : (⟦2-char-id⟧(⟦2-char-id⟧, 0), Mc(⟦2-char-id⟧, 0), Mc(⟦2-char-id⟧, 0), Mc(⟦2-char-id⟧, 0), Mc(⟦2-char-id⟧, 0), Mc(⟦2-char-id⟧, 9 === ⟦2-char-id⟧.level ? 2 : ⟦2-char-id⟧.strategy >= ⟦2-char-id⟧ || ⟦2-char-id⟧.level < 2 ? 4 : 0), Mc(⟦2-char-id⟧, 3), ⟦2-char-id⟧.status = ⟦2-char-id⟧);
+          if (2 === ⟦2-char-id⟧.wrap) ⟦2-char-id⟧.adler = 0, UT(⟦2-char-id⟧, 31), UT(⟦2-char-id⟧, 139), UT(⟦2-char-id⟧, 8), ⟦2-char-id⟧.gzhead ? (⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧.gzhead.text ? 1 : 0) + (⟦2-char-id⟧.gzhead.hcrc ? 2 : 0) + (⟦2-char-id⟧.gzhead.extra ? 4 : 0) + (⟦2-char-id⟧.gzhead.name ? 8 : 0) + (⟦2-char-id⟧.gzhead.comment ? 16 : 0)), UT(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.gzhead.time), UT(⟦2-char-id⟧, ⟦2-char-id⟧.gzhead.time >> 8 & 255), UT(⟦2-char-id⟧, ⟦2-char-id⟧.gzhead.time >> 16 & 255), UT(⟦2-char-id⟧, ⟦2-char-id⟧.gzhead.time >> 24 & 255), UT(⟦2-char-id⟧, 9 === ⟦2-char-id⟧.level ? 2 : ⟦2-char-id⟧.strategy >= ⟦2-char-id⟧ || ⟦2-char-id⟧.level < 2 ? 4 : 0), UT(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.gzhead.os), ⟦2-char-id⟧.gzhead.extra && ⟦2-char-id⟧.gzhead.extra.length && (⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.gzhead.extra.length), UT(⟦2-char-id⟧, ⟦2-char-id⟧.gzhead.extra.length >> 8 & 255)), ⟦2-char-id⟧.gzhead.hcrc && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending, 0)), ⟦2-char-id⟧.gzindex = 0, ⟦2-char-id⟧.status = 69) : (⟦2-char-id⟧(⟦2-char-id⟧, 0), UT(⟦2-char-id⟧, 0), UT(⟦2-char-id⟧, 0), UT(⟦2-char-id⟧, 0), UT(⟦2-char-id⟧, 0), UT(⟦2-char-id⟧, 9 === ⟦2-char-id⟧.level ? 2 : ⟦2-char-id⟧.strategy >= ⟦2-char-id⟧ || ⟦2-char-id⟧.level < 2 ? 4 : 0), UT(⟦2-char-id⟧, 3), ⟦2-char-id⟧.status = ⟦2-char-id⟧);
           else {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧.w_bits - 8 << 4) << 8,
               ⟦2-char-id⟧ = -1;
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.strategy >= ⟦2-char-id⟧ || ⟦2-char-id⟧.level < 2 ? 0 : ⟦2-char-id⟧.level < 6 ? 1 : 6 === ⟦2-char-id⟧.level ? 2 : 3, ⟦2-char-id⟧ |= ⟦2-char-id⟧ << 6, 0 !== ⟦2-char-id⟧.strstart && (⟦2-char-id⟧ |= 32), ⟦2-char-id⟧ += 31 - ⟦2-char-id⟧ % 31, ⟦2-char-id⟧.status = ⟦2-char-id⟧, bc(⟦2-char-id⟧, ⟦2-char-id⟧), 0 !== ⟦2-char-id⟧.strstart && (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >>> 16), bc(⟦2-char-id⟧, 65535 & ⟦2-char-id⟧.adler)), ⟦2-char-id⟧.adler = 1
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.strategy >= ⟦2-char-id⟧ || ⟦2-char-id⟧.level < 2 ? 0 : ⟦2-char-id⟧.level < 6 ? 1 : 6 === ⟦2-char-id⟧.level ? 2 : 3, ⟦2-char-id⟧ |= ⟦2-char-id⟧ << 6, 0 !== ⟦2-char-id⟧.strstart && (⟦2-char-id⟧ |= 32), ⟦2-char-id⟧ += 31 - ⟦2-char-id⟧ % 31, ⟦2-char-id⟧.status = ⟦2-char-id⟧, FT(⟦2-char-id⟧, ⟦2-char-id⟧), 0 !== ⟦2-char-id⟧.strstart && (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >>> 16), FT(⟦2-char-id⟧, 65535 & ⟦2-char-id⟧.adler)), ⟦2-char-id⟧.adler = 1
           } if (69 === ⟦2-char-id⟧.status)
           if (⟦2-char-id⟧.gzhead.extra) {
-            for (⟦2-char-id⟧ = ⟦2-char-id⟧.pending; ⟦2-char-id⟧.gzindex < (65535 & ⟦2-char-id⟧.gzhead.extra.length) && (⟦2-char-id⟧.pending !== ⟦2-char-id⟧.pending_buf_size || (⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), Sc(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.pending, ⟦2-char-id⟧.pending !== ⟦2-char-id⟧.pending_buf_size));) ⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.gzhead.extra[⟦2-char-id⟧.gzindex]), ⟦2-char-id⟧.gzindex++;
+            for (⟦2-char-id⟧ = ⟦2-char-id⟧.pending; ⟦2-char-id⟧.gzindex < (65535 & ⟦2-char-id⟧.gzhead.extra.length) && (⟦2-char-id⟧.pending !== ⟦2-char-id⟧.pending_buf_size || (⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), zT(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.pending, ⟦2-char-id⟧.pending !== ⟦2-char-id⟧.pending_buf_size));) ⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.gzhead.extra[⟦2-char-id⟧.gzindex]), ⟦2-char-id⟧.gzindex++;
             ⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.gzindex === ⟦2-char-id⟧.gzhead.extra.length && (⟦2-char-id⟧.gzindex = 0, ⟦2-char-id⟧.status = 73)
           } else ⟦2-char-id⟧.status = 73;
         if (73 === ⟦2-char-id⟧.status)
           if (⟦2-char-id⟧.gzhead.name) {
             ⟦2-char-id⟧ = ⟦2-char-id⟧.pending;
             do {
-              if (⟦2-char-id⟧.pending === ⟦2-char-id⟧.pending_buf_size && (⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), Sc(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.pending, ⟦2-char-id⟧.pending === ⟦2-char-id⟧.pending_buf_size)) {
+              if (⟦2-char-id⟧.pending === ⟦2-char-id⟧.pending_buf_size && (⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), zT(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.pending, ⟦2-char-id⟧.pending === ⟦2-char-id⟧.pending_buf_size)) {
                 ⟦2-char-id⟧ = 1;
                 break
               }
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.gzindex < ⟦2-char-id⟧.gzhead.name.length ? 255 & ⟦2-char-id⟧.gzhead.name.charCodeAt(⟦2-char-id⟧.gzindex++) : 0, Mc(⟦2-char-id⟧, ⟦2-char-id⟧)
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.gzindex < ⟦2-char-id⟧.gzhead.name.length ? 255 & ⟦2-char-id⟧.gzhead.name.charCodeAt(⟦2-char-id⟧.gzindex++) : 0, UT(⟦2-char-id⟧, ⟦2-char-id⟧)
             } while (0 !== ⟦2-char-id⟧);
             ⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧.gzindex = 0, ⟦2-char-id⟧.status = 91)
           } else ⟦2-char-id⟧.status = 91;
```

</details>

<details>
<summary>Hunk 19 · Change · +4 / -4</summary>

```diff
@@ -491,16 +491,16 @@
           if (⟦2-char-id⟧.gzhead.comment) {
             ⟦2-char-id⟧ = ⟦2-char-id⟧.pending;
             do {
-              if (⟦2-char-id⟧.pending === ⟦2-char-id⟧.pending_buf_size && (⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), Sc(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.pending, ⟦2-char-id⟧.pending === ⟦2-char-id⟧.pending_buf_size)) {
+              if (⟦2-char-id⟧.pending === ⟦2-char-id⟧.pending_buf_size && (⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), zT(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.pending, ⟦2-char-id⟧.pending === ⟦2-char-id⟧.pending_buf_size)) {
                 ⟦2-char-id⟧ = 1;
                 break
               }
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.gzindex < ⟦2-char-id⟧.gzhead.comment.length ? 255 & ⟦2-char-id⟧.gzhead.comment.charCodeAt(⟦2-char-id⟧.gzindex++) : 0, Mc(⟦2-char-id⟧, ⟦2-char-id⟧)
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.gzindex < ⟦2-char-id⟧.gzhead.comment.length ? 255 & ⟦2-char-id⟧.gzhead.comment.charCodeAt(⟦2-char-id⟧.gzindex++) : 0, UT(⟦2-char-id⟧, ⟦2-char-id⟧)
             } while (0 !== ⟦2-char-id⟧);
             ⟦2-char-id⟧.gzhead.hcrc && ⟦2-char-id⟧.pending > ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, ⟦2-char-id⟧.pending_buf, ⟦2-char-id⟧.pending - ⟦2-char-id⟧, ⟦2-char-id⟧)), 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧.status = ⟦2-char-id⟧)
           } else ⟦2-char-id⟧.status = ⟦2-char-id⟧;
-        if (⟦2-char-id⟧.status === ⟦2-char-id⟧ && (⟦2-char-id⟧.gzhead.hcrc ? (⟦2-char-id⟧.pending + 2 > ⟦2-char-id⟧.pending_buf_size && ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.pending + 2 <= ⟦2-char-id⟧.pending_buf_size && (⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.adler), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 8 & 255), ⟦2-char-id⟧.adler = 0, ⟦2-char-id⟧.status = ⟦2-char-id⟧)) : ⟦2-char-id⟧.status = ⟦2-char-id⟧), 0 !== ⟦2-char-id⟧.pending) {
-          if (⟦2-char-id⟧(⟦2-char-id⟧), 0 === ⟦2-char-id⟧.avail_out) return ⟦2-char-id⟧.last_flush = -1, Uc
+        if (⟦2-char-id⟧.status === ⟦2-char-id⟧ && (⟦2-char-id⟧.gzhead.hcrc ? (⟦2-char-id⟧.pending + 2 > ⟦2-char-id⟧.pending_buf_size && ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.pending + 2 <= ⟦2-char-id⟧.pending_buf_size && (⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.adler), UT(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 8 & 255), ⟦2-char-id⟧.adler = 0, ⟦2-char-id⟧.status = ⟦2-char-id⟧)) : ⟦2-char-id⟧.status = ⟦2-char-id⟧), 0 !== ⟦2-char-id⟧.pending) {
+          if (⟦2-char-id⟧(⟦2-char-id⟧), 0 === ⟦2-char-id⟧.avail_out) return ⟦2-char-id⟧.last_flush = -1, yT
         } else if (0 === ⟦2-char-id⟧.avail_in && ⟦2-char-id⟧(⟦2-char-id⟧) <= ⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧ !== ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         if (⟦2-char-id⟧.status === ⟦2-char-id⟧ && 0 !== ⟦2-char-id⟧.avail_in) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         if (0 !== ⟦2-char-id⟧.avail_in || 0 !== ⟦2-char-id⟧.lookahead || ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧.status !== ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -515,7 +515,7 @@
             }
             return ⟦2-char-id⟧.insert = 0, ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧(⟦2-char-id⟧, !0), 0 === ⟦2-char-id⟧.strm.avail_out ? 3 : 4) : ⟦2-char-id⟧.last_lit && (⟦2-char-id⟧(⟦2-char-id⟧, !1), 0 === ⟦2-char-id⟧.strm.avail_out) ? 1 : 2
           })(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.strategy === ⟦2-char-id⟧ ? ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            let ⟦2-char-id⟧, FJ, UJ, ⟦2-char-id⟧;
+            let ⟦2-char-id⟧, VB, yB, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.window;
             for (;;) {
               if (⟦2-char-id⟧.lookahead <= ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 21 · Change · +3 / -3</summary>

```diff
@@ -532,9 +532,9 @@
             return ⟦2-char-id⟧.insert = 0, ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (⟦2-char-id⟧(⟦2-char-id⟧, !0), 0 === ⟦2-char-id⟧.strm.avail_out ? 3 : 4) : ⟦2-char-id⟧.last_lit && (⟦2-char-id⟧(⟦2-char-id⟧, !1), 0 === ⟦2-char-id⟧.strm.avail_out) ? 1 : 2
           })(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧[⟦2-char-id⟧.level].func(⟦2-char-id⟧, ⟦2-char-id⟧);
           if (3 !== ⟦2-char-id⟧ && 4 !== ⟦2-char-id⟧ || (⟦2-char-id⟧.status = ⟦2-char-id⟧), 1 === ⟦2-char-id⟧ || 3 === ⟦2-char-id⟧) return 0 === ⟦2-char-id⟧.avail_out && (⟦2-char-id⟧.last_flush = -1), ⟦2-char-id⟧;
-          if (2 === ⟦2-char-id⟧ && (⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, 0, 0, !1), ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧.head), 0 === ⟦2-char-id⟧.lookahead && (⟦2-char-id⟧.strstart = 0, ⟦2-char-id⟧.block_start = 0, ⟦2-char-id⟧.insert = 0))), Sc(⟦2-char-id⟧), 0 === ⟦2-char-id⟧.avail_out)) return ⟦2-char-id⟧.last_flush = -1, Uc
-        }
-        return ⟦2-char-id⟧ !== ⟦2-char-id⟧ ? Uc : ⟦2-char-id⟧.wrap <= 0 ? ec : (2 === ⟦2-char-id⟧.wrap ? (⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.adler), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 8 & 255), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 16 & 255), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 24 & 255), Mc(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.total_in), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 8 & 255), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 16 & 255), Mc(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 24 & 255)) : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >>> 16), bc(⟦2-char-id⟧, 65535 & ⟦2-char-id⟧.adler)), Sc(⟦2-char-id⟧), ⟦2-char-id⟧.wrap > 0 && (⟦2-char-id⟧.wrap = -⟦2-char-id⟧.wrap), 0 !== ⟦2-char-id⟧.pending ? Uc : ⟦2-char-id⟧)
+          if (2 === ⟦2-char-id⟧ && (⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, 0, 0, !1), ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧.head), 0 === ⟦2-char-id⟧.lookahead && (⟦2-char-id⟧.strstart = 0, ⟦2-char-id⟧.block_start = 0, ⟦2-char-id⟧.insert = 0))), zT(⟦2-char-id⟧), 0 === ⟦2-char-id⟧.avail_out)) return ⟦2-char-id⟧.last_flush = -1, yT
+        }
+        return ⟦2-char-id⟧ !== ⟦2-char-id⟧ ? yT : ⟦2-char-id⟧.wrap <= 0 ? pT : (2 === ⟦2-char-id⟧.wrap ? (⟦2-char-id⟧(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.adler), UT(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 8 & 255), UT(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 16 & 255), UT(⟦2-char-id⟧, ⟦2-char-id⟧.adler >> 24 & 255), UT(⟦2-char-id⟧, 255 & ⟦2-char-id⟧.total_in), UT(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 8 & 255), UT(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 16 & 255), UT(⟦2-char-id⟧, ⟦2-char-id⟧.total_in >> 24 & 255)) : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.adler >>> 16), FT(⟦2-char-id⟧, 65535 & ⟦2-char-id⟧.adler)), zT(⟦2-char-id⟧), ⟦2-char-id⟧.wrap > 0 && (⟦2-char-id⟧.wrap = -⟦2-char-id⟧.wrap), 0 !== ⟦2-char-id⟧.pending ? yT : ⟦2-char-id⟧)
       },
       deflateEnd: ⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -547,7 +547,7 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.wrap;
         if (2 === ⟦2-char-id⟧ || 1 === ⟦2-char-id⟧ && 42 !== ⟦2-char-id⟧.status || ⟦2-char-id⟧.lookahead) return ⟦2-char-id⟧;
-        if (1 === ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, cJ, ZJ, 0)), ⟦2-char-id⟧.wrap = 0, ⟦2-char-id⟧ >= ⟦2-char-id⟧.w_size) {
+        if (1 === ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧(⟦2-char-id⟧.adler, TB, dB, 0)), ⟦2-char-id⟧.wrap = 0, ⟦2-char-id⟧ >= ⟦2-char-id⟧.w_size) {
           0 === ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧.head), ⟦2-char-id⟧.strstart = 0, ⟦2-char-id⟧.block_start = 0, ⟦2-char-id⟧.insert = 0);
           let ⟦2-char-id⟧ = new Uint8Array(⟦2-char-id⟧.w_size);
           ⟦2-char-id⟧.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧ - ⟦2-char-id⟧.w_size, ⟦2-char-id⟧), 0), ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.w_size
```

</details>

<details>
<summary>Hunk 23 · Change · +4 / -4</summary>

```diff
@@ -555,15 +555,15 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.avail_in,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.next_in,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.input;
-        for (⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = 0, ⟦2-char-id⟧.input = ⟦2-char-id⟧, gc(⟦2-char-id⟧); ⟦2-char-id⟧.lookahead >= 3;) {
+        for (⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = 0, ⟦2-char-id⟧.input = ⟦2-char-id⟧, IT(⟦2-char-id⟧); ⟦2-char-id⟧.lookahead >= 3;) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.strstart,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.lookahead - 2;
           do {
             ⟦2-char-id⟧.ins_h = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.ins_h, ⟦2-char-id⟧.window[⟦2-char-id⟧ + 3 - 1]), ⟦2-char-id⟧.prev[⟦2-char-id⟧ & ⟦2-char-id⟧.w_mask] = ⟦2-char-id⟧.head[⟦2-char-id⟧.ins_h], ⟦2-char-id⟧.head[⟦2-char-id⟧.ins_h] = ⟦2-char-id⟧, ⟦2-char-id⟧++
           } while (--⟦2-char-id⟧);
-          ⟦2-char-id⟧.strstart = ⟦2-char-id⟧, ⟦2-char-id⟧.lookahead = 2, gc(⟦2-char-id⟧)
-        }
-        return ⟦2-char-id⟧.strstart += ⟦2-char-id⟧.lookahead, ⟦2-char-id⟧.block_start = ⟦2-char-id⟧.strstart, ⟦2-char-id⟧.insert = ⟦2-char-id⟧.lookahead, ⟦2-char-id⟧.lookahead = 0, ⟦2-char-id⟧.match_length = ⟦2-char-id⟧.prev_length = 2, ⟦2-char-id⟧.match_available = 0, ⟦2-char-id⟧.next_in = ⟦2-char-id⟧, ⟦2-char-id⟧.input = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, Uc
+          ⟦2-char-id⟧.strstart = ⟦2-char-id⟧, ⟦2-char-id⟧.lookahead = 2, IT(⟦2-char-id⟧)
+        }
+        return ⟦2-char-id⟧.strstart += ⟦2-char-id⟧.lookahead, ⟦2-char-id⟧.block_start = ⟦2-char-id⟧.strstart, ⟦2-char-id⟧.insert = ⟦2-char-id⟧.lookahead, ⟦2-char-id⟧.lookahead = 0, ⟦2-char-id⟧.match_length = ⟦2-char-id⟧.prev_length = 2, ⟦2-char-id⟧.match_available = 0, ⟦2-char-id⟧.next_in = ⟦2-char-id⟧, ⟦2-char-id⟧.input = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, yT
       },
       deflateInfo: "pako deflate (from Nodeca project)"
     };
```

</details>

<details>
<summary>Hunk 24 · Change · +2 / -2</summary>

```diff
@@ -600,10 +600,10 @@
     ⟦2-char-id⟧[254] = ⟦2-char-id⟧[254] = 1;
     var ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         if ("function" === typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(⟦2-char-id⟧);
-        let ⟦2-char-id⟧, ZJ, FJ, UJ, eJ, ⟦2-char-id⟧ = ⟦2-char-id⟧.length,
+        let ⟦2-char-id⟧, dB, VB, yB, pB, ⟦2-char-id⟧ = ⟦2-char-id⟧.length,
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
<summary>Hunk 25 · Change · +2 / -2</summary>

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
<summary>Hunk 26 · Change · +2 / -2</summary>

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
<summary>Hunk 27 · Change · +2 / -2</summary>

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
<summary>Hunk 28 · Change · +3 / -3</summary>

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
<summary>Hunk 29 · Change · +6 / -6</summary>

```diff
@@ -695,26 +695,26 @@
     }, ⟦2-char-id⟧.prototype.onData = function(⟦2-char-id⟧) {
       this.chunks.push(⟦2-char-id⟧)
     }, ⟦2-char-id⟧.prototype.onEnd = function(⟦2-char-id⟧) {
-      ⟦2-char-id⟧ === ⟦2-char-id⟧ && (this.result = ⟦2-char-id⟧(this.chunks)), this.chunks = [], this.err = ⟦2-char-id⟧, this.JY = this.strm.JY
+      ⟦2-char-id⟧ === ⟦2-char-id⟧ && (this.result = ⟦2-char-id⟧(this.chunks)), this.chunks = [], this.err = ⟦2-char-id⟧, this.Jo = this.strm.Jo
     };
     var ⟦2-char-id⟧ = {
       Deflate: ⟦2-char-id⟧,
       deflate: ⟦2-char-id⟧,
       deflateRaw: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return (⟦2-char-id⟧ = ⟦2-char-id⟧ || {}).raw = !0, YZ(⟦2-char-id⟧, ⟦2-char-id⟧)
+        return (⟦2-char-id⟧ = ⟦2-char-id⟧ || {}).raw = !0, od(⟦2-char-id⟧, ⟦2-char-id⟧)
       },
       gzip: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return (⟦2-char-id⟧ = ⟦2-char-id⟧ || {}).gzip = !0, YZ(⟦2-char-id⟧, ⟦2-char-id⟧)
+        return (⟦2-char-id⟧ = ⟦2-char-id⟧ || {}).gzip = !0, od(⟦2-char-id⟧, ⟦2-char-id⟧)
       },
       constants: ⟦2-char-id⟧
     };
     var ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, ⟦2-char-id⟧;
+      let ⟦2-char-id⟧, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB, ⟦2-char-id⟧;
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
<summary>Hunk 30 · Change · +5 / -5</summary>

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
<summary>Hunk 31 · Change · +2 / -2</summary>

```diff
@@ -799,9 +799,9 @@
       ⟦2-char-id⟧ = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
       ⟦2-char-id⟧ = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
       ⟦2-char-id⟧ = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
-    var ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, ⟦2-char-id⟧) => {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.bits;
-      let ⟦2-char-id⟧, YJ, hJ, DJ, sJ, nJ, ⟦2-char-id⟧ = 0,
+      let ⟦2-char-id⟧, oB, kB, LB, OB, DB, ⟦2-char-id⟧ = 0,
         ⟦2-char-id⟧ = 0,
         ⟦2-char-id⟧ = 0,
         ⟦2-char-id⟧ = 0,
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

```diff
@@ -815,7 +815,7 @@
         ⟦2-char-id⟧ = 0;
       const ⟦2-char-id⟧ = new Uint16Array(16),
         ⟦2-char-id⟧ = new Uint16Array(16);
-      let ⟦2-char-id⟧, wJ, WJ, ⟦2-char-id⟧ = null,
+      let ⟦2-char-id⟧, KB, rB, ⟦2-char-id⟧ = null,
         ⟦2-char-id⟧ = 0;
       for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = 0;
       for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧]]++;
```

</details>

<details>
<summary>Hunk 33 · Change · +5 / -5</summary>

```diff
@@ -866,27 +866,27 @@
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return ⟦2-char-id⟧.total_in = ⟦2-char-id⟧.total_out = ⟦2-char-id⟧.total = 0, ⟦2-char-id⟧.JY = "", ⟦2-char-id⟧.wrap && (⟦2-char-id⟧.adler = 1 & ⟦2-char-id⟧.wrap), ⟦2-char-id⟧.mode = 1, ⟦2-char-id⟧.last = 0, ⟦2-char-id⟧.havedict = 0, ⟦2-char-id⟧.dmax = 32768, ⟦2-char-id⟧.head = null, ⟦2-char-id⟧.hold = 0, ⟦2-char-id⟧.bits = 0, ⟦2-char-id⟧.lencode = ⟦2-char-id⟧.lendyn = new Int32Array(852), ⟦2-char-id⟧.distcode = ⟦2-char-id⟧.distdyn = new Int32Array(592), ⟦2-char-id⟧.sane = 1, ⟦2-char-id⟧.back = -1, EZ
+        return ⟦2-char-id⟧.total_in = ⟦2-char-id⟧.total_out = ⟦2-char-id⟧.total = 0, ⟦2-char-id⟧.Jo = "", ⟦2-char-id⟧.wrap && (⟦2-char-id⟧.adler = 1 & ⟦2-char-id⟧.wrap), ⟦2-char-id⟧.mode = 1, ⟦2-char-id⟧.last = 0, ⟦2-char-id⟧.havedict = 0, ⟦2-char-id⟧.dmax = 32768, ⟦2-char-id⟧.head = null, ⟦2-char-id⟧.hold = 0, ⟦2-char-id⟧.bits = 0, ⟦2-char-id⟧.lencode = ⟦2-char-id⟧.lendyn = new Int32Array(852), ⟦2-char-id⟧.distcode = ⟦2-char-id⟧.distdyn = new Int32Array(592), ⟦2-char-id⟧.sane = 1, ⟦2-char-id⟧.back = -1, fd
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return ⟦2-char-id⟧.wsize = 0, ⟦2-char-id⟧.whave = 0, ⟦2-char-id⟧.wnext = 0, PZ(⟦2-char-id⟧)
+        return ⟦2-char-id⟧.wsize = 0, ⟦2-char-id⟧.whave = 0, ⟦2-char-id⟧.wnext = 0, Pd(⟦2-char-id⟧)
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         let ⟦2-char-id⟧;
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = -⟦2-char-id⟧) : (⟦2-char-id⟧ = 1 + (⟦2-char-id⟧ >> 4), ⟦2-char-id⟧ < 48 && (⟦2-char-id⟧ &= 15)), ⟦2-char-id⟧ && (⟦2-char-id⟧ < 8 || ⟦2-char-id⟧ > 15) ? yZ : (null !== ⟦2-char-id⟧.window && ⟦2-char-id⟧.wbits !== ⟦2-char-id⟧ && (⟦2-char-id⟧.window = null), ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, ⟦2-char-id⟧.wbits = ⟦2-char-id⟧, kZ(⟦2-char-id⟧))
+        return ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = -⟦2-char-id⟧) : (⟦2-char-id⟧ = 1 + (⟦2-char-id⟧ >> 4), ⟦2-char-id⟧ < 48 && (⟦2-char-id⟧ &= 15)), ⟦2-char-id⟧ && (⟦2-char-id⟧ < 8 || ⟦2-char-id⟧ > 15) ? zd : (null !== ⟦2-char-id⟧.window && ⟦2-char-id⟧.wbits !== ⟦2-char-id⟧ && (⟦2-char-id⟧.window = null), ⟦2-char-id⟧.wrap = ⟦2-char-id⟧, ⟦2-char-id⟧.wbits = ⟦2-char-id⟧, Qd(⟦2-char-id⟧))
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧;
         ⟦2-char-id⟧.state = ⟦2-char-id⟧, ⟦2-char-id⟧.window = null;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧.state = null), FJ
+        return ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧.state = null), VB
       };
-    let ⟦2-char-id⟧, NZ, ⟦2-char-id⟧ = !0;
+    let ⟦2-char-id⟧, Xd, ⟦2-char-id⟧ = !0;
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         if (⟦2-char-id⟧) {
           ⟦2-char-id⟧ = new Int32Array(512), ⟦2-char-id⟧ = new Int32Array(32);
```

</details>

<details>
<summary>Hunk 34 · Change · +3 / -3</summary>

```diff
@@ -895,16 +895,16 @@
           for (; ⟦2-char-id⟧ < 256;) ⟦2-char-id⟧.lens[⟦2-char-id⟧++] = 9;
           for (; ⟦2-char-id⟧ < 280;) ⟦2-char-id⟧.lens[⟦2-char-id⟧++] = 7;
           for (; ⟦2-char-id⟧ < 288;) ⟦2-char-id⟧.lens[⟦2-char-id⟧++] = 8;
-          for (⟦2-char-id⟧(1, ⟦2-char-id⟧.lens, 0, 288, zZ, 0, ⟦2-char-id⟧.work, {
+          for (⟦2-char-id⟧(1, ⟦2-char-id⟧.lens, 0, 288, Zd, 0, ⟦2-char-id⟧.work, {
               bits: 9
             }), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 32;) ⟦2-char-id⟧.lens[⟦2-char-id⟧++] = 5;
-          ⟦2-char-id⟧(2, ⟦2-char-id⟧.lens, 0, 32, NZ, 0, ⟦2-char-id⟧.work, {
+          ⟦2-char-id⟧(2, ⟦2-char-id⟧.lens, 0, 32, Xd, 0, ⟦2-char-id⟧.work, {
             bits: 5
           }), ⟦2-char-id⟧ = !1
         }
         ⟦2-char-id⟧.lencode = ⟦2-char-id⟧, ⟦2-char-id⟧.lenbits = 9, ⟦2-char-id⟧.distcode = ⟦2-char-id⟧, ⟦2-char-id⟧.distbits = 5
       },
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
         let ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
         return null === ⟦2-char-id⟧.window && (⟦2-char-id⟧.wsize = 1 << ⟦2-char-id⟧.wbits, ⟦2-char-id⟧.wnext = 0, ⟦2-char-id⟧.whave = 0, ⟦2-char-id⟧.window = new Uint8Array(⟦2-char-id⟧.wsize)), ⟦2-char-id⟧ >= ⟦2-char-id⟧.wsize ? (⟦2-char-id⟧.window.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧ - ⟦2-char-id⟧.wsize, ⟦2-char-id⟧), 0), ⟦2-char-id⟧.wnext = 0, ⟦2-char-id⟧.whave = ⟦2-char-id⟧.wsize) : (⟦2-char-id⟧ = ⟦2-char-id⟧.wsize - ⟦2-char-id⟧.wnext, ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧.window.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧.wnext), (⟦2-char-id⟧ -= ⟦2-char-id⟧) ? (⟦2-char-id⟧.window.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧), 0), ⟦2-char-id⟧.wnext = ⟦2-char-id⟧, ⟦2-char-id⟧.whave = ⟦2-char-id⟧.wsize) : (⟦2-char-id⟧.wnext += ⟦2-char-id⟧, ⟦2-char-id⟧.wnext === ⟦2-char-id⟧.wsize && (⟦2-char-id⟧.wnext = 0), ⟦2-char-id⟧.whave < ⟦2-char-id⟧.wsize && (⟦2-char-id⟧.whave += ⟦2-char-id⟧))), 0
```

</details>

<details>
<summary>Hunk 35 · Change · +2 / -2</summary>

```diff
@@ -916,13 +916,13 @@
       inflateInit: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, 15),
       inflateInit2: ⟦2-char-id⟧,
       inflate: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        let ⟦2-char-id⟧, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, ⟦2-char-id⟧ = 0;
+        let ⟦2-char-id⟧, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, ⟦2-char-id⟧ = 0;
         const ⟦2-char-id⟧ = new Uint8Array(4);
         let ⟦2-char-id⟧, ⟦2-char-id⟧;
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
<summary>Hunk 36 · Change · +4 / -4</summary>

```diff
@@ -933,20 +933,20 @@
               ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
             }
             if (2 & ⟦2-char-id⟧.wrap && 35615 === ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.check = 0, ⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, yJ, 2, 0), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 2;
+              ⟦2-char-id⟧.check = 0, ⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, MB, 2, 0), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 2;
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
<summary>Hunk 37 · Change · +9 / -9</summary>

```diff
@@ -957,37 +957,37 @@
               ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
             }
             if (⟦2-char-id⟧.flags = ⟦2-char-id⟧, (255 & ⟦2-char-id⟧.flags) !== ⟦2-char-id⟧) {
-              ⟦2-char-id⟧.JY = "unknown compression method", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              ⟦2-char-id⟧.Jo = "unknown compression method", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
               break
             }
             if (57344 & ⟦2-char-id⟧.flags) {
-              ⟦2-char-id⟧.JY = "unknown header flags set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
-              break
-            }
-            ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.text = ⟦2-char-id⟧ >> 8 & 1), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, yJ, 2, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 3;
+              ⟦2-char-id⟧.Jo = "unknown header flags set", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              break
+            }
+            ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.text = ⟦2-char-id⟧ >> 8 & 1), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, MB, 2, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 3;
           case 3:
             for (; ⟦2-char-id⟧ < 32;) {
               if (0 === ⟦2-char-id⟧) break ⟦2-char-id⟧;
               ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
             }
-            ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.time = ⟦2-char-id⟧), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧[2] = ⟦2-char-id⟧ >>> 16 & 255, ⟦2-char-id⟧[3] = ⟦2-char-id⟧ >>> 24 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, yJ, 4, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 4;
+            ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.time = ⟦2-char-id⟧), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧[2] = ⟦2-char-id⟧ >>> 16 & 255, ⟦2-char-id⟧[3] = ⟦2-char-id⟧ >>> 24 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, MB, 4, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 4;
           case 4:
             for (; ⟦2-char-id⟧ < 16;) {
               if (0 === ⟦2-char-id⟧) break ⟦2-char-id⟧;
               ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
             }
-            ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.xflags = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.head.os = ⟦2-char-id⟧ >> 8), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, yJ, 2, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 5;
+            ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.xflags = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧.head.os = ⟦2-char-id⟧ >> 8), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, MB, 2, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧.mode = 5;
           case 5:
             if (1024 & ⟦2-char-id⟧.flags) {
               for (; ⟦2-char-id⟧ < 16;) {
                 if (0 === ⟦2-char-id⟧) break ⟦2-char-id⟧;
                 ⟦2-char-id⟧--, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
               }
-              ⟦2-char-id⟧.length = ⟦2-char-id⟧, ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.extra_len = ⟦2-char-id⟧), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, yJ, 2, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0
+              ⟦2-char-id⟧.length = ⟦2-char-id⟧, ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.extra_len = ⟦2-char-id⟧), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧[0] = 255 & ⟦2-char-id⟧, ⟦2-char-id⟧[1] = ⟦2-char-id⟧ >>> 8 & 255, ⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, MB, 2, 0)), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0
             } else ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.extra = null);
             ⟦2-char-id⟧.mode = 6;
           case 6:
-            if (1024 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧.head && (⟦2-char-id⟧ = ⟦2-char-id⟧.head.extra_len - ⟦2-char-id⟧.length, ⟦2-char-id⟧.head.extra || (⟦2-char-id⟧.head.extra = new Uint8Array(⟦2-char-id⟧.head.extra_len)), ⟦2-char-id⟧.head.extra.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧)), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, FJ, sJ, ⟦2-char-id⟧)), ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧.length -= ⟦2-char-id⟧), ⟦2-char-id⟧.length)) break ⟦2-char-id⟧;
+            if (1024 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧.head && (⟦2-char-id⟧ = ⟦2-char-id⟧.head.extra_len - ⟦2-char-id⟧.length, ⟦2-char-id⟧.head.extra || (⟦2-char-id⟧.head.extra = new Uint8Array(⟦2-char-id⟧.head.extra_len)), ⟦2-char-id⟧.head.extra.set(⟦2-char-id⟧.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧)), 512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, VB, OB, ⟦2-char-id⟧)), ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧.length -= ⟦2-char-id⟧), ⟦2-char-id⟧.length)) break ⟦2-char-id⟧;
             ⟦2-char-id⟧.length = 0, ⟦2-char-id⟧.mode = 7;
           case 7:
             if (2048 & ⟦2-char-id⟧.flags) {
```

</details>

<details>
<summary>Hunk 38 · Change · +1 / -1</summary>

```diff
@@ -996,7 +996,7 @@
               do {
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧++], ⟦2-char-id⟧.head && ⟦2-char-id⟧ && ⟦2-char-id⟧.length < 65536 && (⟦2-char-id⟧.head.name += String.fromCharCode(⟦2-char-id⟧))
               } while (⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧);
-              if (512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, FJ, sJ, ⟦2-char-id⟧)), ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧) break ⟦2-char-id⟧
+              if (512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, VB, OB, ⟦2-char-id⟧)), ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧) break ⟦2-char-id⟧
             } else ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.name = null);
             ⟦2-char-id⟧.length = 0, ⟦2-char-id⟧.mode = 8;
           case 8:
```

</details>

<details>
<summary>Hunk 39 · Change · +1 / -1</summary>

```diff
@@ -1006,7 +1006,7 @@
               do {
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧++], ⟦2-char-id⟧.head && ⟦2-char-id⟧ && ⟦2-char-id⟧.length < 65536 && (⟦2-char-id⟧.head.comment += String.fromCharCode(⟦2-char-id⟧))
               } while (⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧);
-              if (512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, FJ, sJ, ⟦2-char-id⟧)), ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧) break ⟦2-char-id⟧
+              if (512 & ⟦2-char-id⟧.flags && (⟦2-char-id⟧.check = ⟦2-char-id⟧(⟦2-char-id⟧.check, VB, OB, ⟦2-char-id⟧)), ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧) break ⟦2-char-id⟧
             } else ⟦2-char-id⟧.head && (⟦2-char-id⟧.head.comment = null);
             ⟦2-char-id⟧.mode = 9;
           case 9:
```

</details>

<details>
<summary>Hunk 40 · Change · +1 / -1</summary>

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
<summary>Hunk 41 · Change · +1 / -1</summary>

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
<summary>Hunk 42 · Change · +1 / -1</summary>

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
<summary>Hunk 43 · Change · +1 / -1</summary>

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
<summary>Hunk 44 · Change · +1 / -1</summary>

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
<summary>Hunk 45 · Change · +1 / -1</summary>

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
<summary>Hunk 46 · Change · +1 / -1</summary>

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
<summary>Hunk 47 · Change · +1 / -1</summary>

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
<summary>Hunk 48 · Change · +3 / -3</summary>

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
<summary>Hunk 49 · Change · +1 / -1</summary>

```diff
@@ -1167,7 +1167,7 @@
             ⟦2-char-id⟧.mode = 21;
           case 21:
             if (⟦2-char-id⟧ >= 6 && ⟦2-char-id⟧ >= 258) {
-              ⟦2-char-id⟧.next_out = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_out = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.hold = ⟦2-char-id⟧, ⟦2-char-id⟧.bits = ⟦2-char-id⟧, DZ(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.next_out, ⟦2-char-id⟧ = ⟦2-char-id⟧.output, ⟦2-char-id⟧ = ⟦2-char-id⟧.avail_out, ⟦2-char-id⟧ = ⟦2-char-id⟧.next_in, ⟦2-char-id⟧ = ⟦2-char-id⟧.input, ⟦2-char-id⟧ = ⟦2-char-id⟧.avail_in, ⟦2-char-id⟧ = ⟦2-char-id⟧.hold, ⟦2-char-id⟧ = ⟦2-char-id⟧.bits, ⟦2-char-id⟧.mode === ⟦2-char-id⟧ && (⟦2-char-id⟧.back = -1);
+              ⟦2-char-id⟧.next_out = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_out = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.hold = ⟦2-char-id⟧, ⟦2-char-id⟧.bits = ⟦2-char-id⟧, Ld(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.next_out, ⟦2-char-id⟧ = ⟦2-char-id⟧.output, ⟦2-char-id⟧ = ⟦2-char-id⟧.avail_out, ⟦2-char-id⟧ = ⟦2-char-id⟧.next_in, ⟦2-char-id⟧ = ⟦2-char-id⟧.input, ⟦2-char-id⟧ = ⟦2-char-id⟧.avail_in, ⟦2-char-id⟧ = ⟦2-char-id⟧.hold, ⟦2-char-id⟧ = ⟦2-char-id⟧.bits, ⟦2-char-id⟧.mode === ⟦2-char-id⟧ && (⟦2-char-id⟧.back = -1);
               break
             }
             for (⟦2-char-id⟧.back = 0; ⟦2-char-id⟧ = ⟦2-char-id⟧.lencode[⟦2-char-id⟧ & (1 << ⟦2-char-id⟧.lenbits) - 1], ⟦2-char-id⟧ = ⟦2-char-id⟧ >>> 24, ⟦2-char-id⟧ = ⟦2-char-id⟧ >>> 16 & 255, ⟦2-char-id⟧ = 65535 & ⟦2-char-id⟧, !(⟦2-char-id⟧ <= ⟦2-char-id⟧);) {
```

</details>

<details>
<summary>Hunk 50 · Change · +1 / -1</summary>

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
<summary>Hunk 51 · Change · +1 / -1</summary>

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
<summary>Hunk 52 · Change · +1 / -1</summary>

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
<summary>Hunk 53 · Change · +1 / -1</summary>

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
<summary>Hunk 54 · Change · +2 / -2</summary>

```diff
@@ -1258,8 +1258,8 @@
                 if (0 === ⟦2-char-id⟧) break ⟦2-char-id⟧;
                 ⟦2-char-id⟧--, ⟦2-char-id⟧ |= ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ += 8
               }
-              if (⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧.total_out += ⟦2-char-id⟧, ⟦2-char-id⟧.total += ⟦2-char-id⟧, ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧.check = ⟦2-char-id⟧.flags ? ⟦2-char-id⟧(⟦2-char-id⟧.check, UJ, DJ, ⟦2-char-id⟧ - ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧.check, UJ, DJ, ⟦2-char-id⟧ - ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧, (⟦2-char-id⟧.flags ? jJ : ⟦2-char-id⟧(⟦2-char-id⟧)) !== ⟦2-char-id⟧.check) {
-                ⟦2-char-id⟧.JY = "incorrect data check", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
+              if (⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧.total_out += ⟦2-char-id⟧, ⟦2-char-id⟧.total += ⟦2-char-id⟧, ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧.check = ⟦2-char-id⟧.flags ? ⟦2-char-id⟧(⟦2-char-id⟧.check, yB, LB, ⟦2-char-id⟧ - ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧.check, yB, LB, ⟦2-char-id⟧ - ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧, (⟦2-char-id⟧.flags ? gB : ⟦2-char-id⟧(⟦2-char-id⟧)) !== ⟦2-char-id⟧.check) {
+                ⟦2-char-id⟧.Jo = "incorrect data check", ⟦2-char-id⟧.mode = ⟦2-char-id⟧;
                 break
               }
               ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0
```

</details>

<details>
<summary>Hunk 55 · Change · +1 / -1</summary>

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
<summary>Hunk 56 · Change · +1 / -1</summary>

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
<summary>Hunk 57 · Change · +5 / -5</summary>

```diff
@@ -1289,22 +1289,22 @@
           default:
             return ⟦2-char-id⟧
         }
-        return ⟦2-char-id⟧.next_out = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_out = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.hold = ⟦2-char-id⟧, ⟦2-char-id⟧.bits = ⟦2-char-id⟧, (⟦2-char-id⟧.wsize || ⟦2-char-id⟧ !== ⟦2-char-id⟧.avail_out && ⟦2-char-id⟧.mode < ⟦2-char-id⟧ && (⟦2-char-id⟧.mode < 27 || ⟦2-char-id⟧ !== ⟦2-char-id⟧)) && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.output, ⟦2-char-id⟧.next_out, ⟦2-char-id⟧ - ⟦2-char-id⟧.avail_out), ⟦2-char-id⟧ -= ⟦2-char-id⟧.avail_in, ⟦2-char-id⟧ -= ⟦2-char-id⟧.avail_out, ⟦2-char-id⟧.total_in += ⟦2-char-id⟧, ⟦2-char-id⟧.total_out += ⟦2-char-id⟧, ⟦2-char-id⟧.total += ⟦2-char-id⟧, ⟦2-char-id⟧.wrap && ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧.check = ⟦2-char-id⟧.flags ? ⟦2-char-id⟧(⟦2-char-id⟧.check, UJ, DJ, ⟦2-char-id⟧.next_out - ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧.check, UJ, DJ, ⟦2-char-id⟧.next_out - ⟦2-char-id⟧)), ⟦2-char-id⟧.data_type = ⟦2-char-id⟧.bits + (⟦2-char-id⟧.last ? 64 : 0) + (⟦2-char-id⟧.mode === ⟦2-char-id⟧ ? 128 : 0) + (20 === ⟦2-char-id⟧.mode || 15 === ⟦2-char-id⟧.mode ? 256 : 0), (0 === ⟦2-char-id⟧ && 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧) && ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), VJ
+        return ⟦2-char-id⟧.next_out = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_out = ⟦2-char-id⟧, ⟦2-char-id⟧.next_in = ⟦2-char-id⟧, ⟦2-char-id⟧.avail_in = ⟦2-char-id⟧, ⟦2-char-id⟧.hold = ⟦2-char-id⟧, ⟦2-char-id⟧.bits = ⟦2-char-id⟧, (⟦2-char-id⟧.wsize || ⟦2-char-id⟧ !== ⟦2-char-id⟧.avail_out && ⟦2-char-id⟧.mode < ⟦2-char-id⟧ && (⟦2-char-id⟧.mode < 27 || ⟦2-char-id⟧ !== ⟦2-char-id⟧)) && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.output, ⟦2-char-id⟧.next_out, ⟦2-char-id⟧ - ⟦2-char-id⟧.avail_out), ⟦2-char-id⟧ -= ⟦2-char-id⟧.avail_in, ⟦2-char-id⟧ -= ⟦2-char-id⟧.avail_out, ⟦2-char-id⟧.total_in += ⟦2-char-id⟧, ⟦2-char-id⟧.total_out += ⟦2-char-id⟧, ⟦2-char-id⟧.total += ⟦2-char-id⟧, ⟦2-char-id⟧.wrap && ⟦2-char-id⟧ && (⟦2-char-id⟧.adler = ⟦2-char-id⟧.check = ⟦2-char-id⟧.flags ? ⟦2-char-id⟧(⟦2-char-id⟧.check, yB, LB, ⟦2-char-id⟧.next_out - ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧.check, yB, LB, ⟦2-char-id⟧.next_out - ⟦2-char-id⟧)), ⟦2-char-id⟧.data_type = ⟦2-char-id⟧.bits + (⟦2-char-id⟧.last ? 64 : 0) + (⟦2-char-id⟧.mode === ⟦2-char-id⟧ ? 128 : 0) + (20 === ⟦2-char-id⟧.mode || 15 === ⟦2-char-id⟧.mode ? 256 : 0), (0 === ⟦2-char-id⟧ && 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧) && ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), fB
       },
       inflateEnd: ⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return ⟦2-char-id⟧.window && (⟦2-char-id⟧.window = null), ⟦2-char-id⟧.state = null, EZ
+        return ⟦2-char-id⟧.window && (⟦2-char-id⟧.window = null), ⟦2-char-id⟧.state = null, fd
       },
       inflateGetHeader: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.state) return ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
-        return 0 === (2 & ⟦2-char-id⟧.wrap) ? yZ : (⟦2-char-id⟧.head = ⟦2-char-id⟧, ⟦2-char-id⟧.done = !1, ⟦2-char-id⟧)
+        return 0 === (2 & ⟦2-char-id⟧.wrap) ? zd : (⟦2-char-id⟧.head = ⟦2-char-id⟧, ⟦2-char-id⟧.done = !1, ⟦2-char-id⟧)
       },
       inflateSetDictionary: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
-        let ⟦2-char-id⟧, UJ, ⟦2-char-id⟧;
-        return ⟦2-char-id⟧ && ⟦2-char-id⟧.state ? (⟦2-char-id⟧ = ⟦2-char-id⟧.state, 0 !== ⟦2-char-id⟧.wrap && 11 !== ⟦2-char-id⟧.mode ? yZ : 11 === ⟦2-char-id⟧.mode && (⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, 0), ⟦2-char-id⟧ !== ⟦2-char-id⟧.check) ? SZ : (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧), ⟦2-char-id⟧ ? (⟦2-char-id⟧.mode = 31, ⟦2-char-id⟧) : (⟦2-char-id⟧.havedict = 1, ⟦2-char-id⟧))) : ⟦2-char-id⟧
+        let ⟦2-char-id⟧, yB, ⟦2-char-id⟧;
+        return ⟦2-char-id⟧ && ⟦2-char-id⟧.state ? (⟦2-char-id⟧ = ⟦2-char-id⟧.state, 0 !== ⟦2-char-id⟧.wrap && 11 !== ⟦2-char-id⟧.mode ? zd : 11 === ⟦2-char-id⟧.mode && (⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, 0), ⟦2-char-id⟧ !== ⟦2-char-id⟧.check) ? wd : (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧), ⟦2-char-id⟧ ? (⟦2-char-id⟧.mode = 31, ⟦2-char-id⟧) : (⟦2-char-id⟧.havedict = 1, ⟦2-char-id⟧))) : ⟦2-char-id⟧
       },
       inflateInfo: "pako inflate (from Nodeca project)"
     };
```

</details>

<details>
<summary>Hunk 58 · Change · +2 / -2</summary>

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
<summary>Hunk 59 · Change · +8 / -8</summary>

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
-      let ⟦2-char-id⟧, XJ, ⟦2-char-id⟧;
+      let ⟦2-char-id⟧, lB, ⟦2-char-id⟧;
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
<summary>Hunk 60 · Change · +2 / -2</summary>

```diff
@@ -1372,13 +1372,13 @@
     }, ⟦2-char-id⟧.prototype.onData = function(⟦2-char-id⟧) {
       this.chunks.push(⟦2-char-id⟧)
     }, ⟦2-char-id⟧.prototype.onEnd = function(⟦2-char-id⟧) {
-      ⟦2-char-id⟧ === ⟦2-char-id⟧ && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = ⟦2-char-id⟧(this.chunks)), this.chunks = [], this.err = ⟦2-char-id⟧, this.JY = this.strm.JY
+      ⟦2-char-id⟧ === ⟦2-char-id⟧ && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = ⟦2-char-id⟧(this.chunks)), this.chunks = [], this.err = ⟦2-char-id⟧, this.Jo = this.strm.Jo
     };
     var ⟦2-char-id⟧ = {
       Inflate: ⟦2-char-id⟧,
       inflate: ⟦2-char-id⟧,
       inflateRaw: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return (⟦2-char-id⟧ = ⟦2-char-id⟧ || {}).raw = !0, FF(⟦2-char-id⟧, ⟦2-char-id⟧)
+        return (⟦2-char-id⟧ = ⟦2-char-id⟧ || {}).raw = !0, yV(⟦2-char-id⟧, ⟦2-char-id⟧)
       },
       ungzip: ⟦2-char-id⟧,
       constants: ⟦2-char-id⟧
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/207.js</code> · modified · +360 / -368</summary>

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
<summary>Hunk 37 · Change · +21 / -21</summary>

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
-    var ⟦2-char-id⟧, qJ, jJ, YJ, hJ, DJ, sJ, nJ, ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = [1, "b", 0, 8, 3, 23, 7, 91, 180, 145, 255, "length", "c", 24, "a", 141, "undefined", 217, 63, 6, "fromCodePoint", 12, "push", 4, 101, "h", 175, "f", 249, "e", "i", 221, 230, 183, 97, 9, 22, 80, 8191, 88, 13, 14, "d", "g", 227, 79, 54, 5, 84, 48, 78, 126, 142, 122, 65, 36, 185, 27, 140, 136, 2, 85, 96, 98, null, 103, 104, 105, 99, 100, 102, 114, 115, 116, 117, 118, 119, 189, 132, 237, 53, 60, "wc", 33, 197, 30, 127, 128, 154, 50, 203, "s", "=", ";", 73, 211, 190, void 0, "on"];
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return typeof ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧] = function(...JJ) {
-        for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[0]] = 'BHqaLYiArcZDfhFCQNIVJngldXUeP/Go~wW;bp1{u?.`Sj8T5"xmKy}0|Ek%RMOtv:,$z4#=2!>9*36<(&^_@])7+s[', ⟦2-char-id⟧[⟦2-char-id⟧[1]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[4]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].length, ⟦2-char-id⟧[-⟦2-char-id⟧[9]] = [], ⟦2-char-id⟧[-⟦2-char-id⟧[7]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[8]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[4]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++)
-          if (⟦2-char-id⟧[⟦2-char-id⟧[5]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[3]]]), ⟦2-char-id⟧[⟦2-char-id⟧[5]] !== -⟦2-char-id⟧[0])
-            if (⟦2-char-id⟧[⟦2-char-id⟧[6]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[6]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]];
+    var ⟦2-char-id⟧, YB, gB, oB, kB, LB, OB, DB, ⟦2-char-id⟧;
+    const ⟦2-char-id⟧ = ["b", 0, 1, 8, 198, "a", 218, 239, 5, "f", 235, 255, "length", "c", "d", 227, 130, "undefined", "e", 63, 6, "fromCodePoint", 7, 12, "push", 188, 123, 3, 73, "i", 91, 8191, 88, 13, 14, 221, 2, void 0, 4, 119, 141, !1, !0, 127, 128, 173, 9, "g", 98, 61, 129, 142, 143, null, 137, 138, 139, 140, 144, 145, 146, 155, 156, 157, 158, 159, 160, 68, 192, "gp", 79, "s", 165, 161, "h", 66, 189, 39, 31, 176, 24, 75, 215, 69, "on"];
+
+    function ⟦2-char-id⟧(...BB) {
+      return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = function(...BB) {
+        for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[5]] = 'eA4`X+,Gi|quUsHIoa.nF!0W:6&Bjl^@CL<Yhb#pR)]gdSJ1TN3QzcrV*DE(vZ8mw%OkP=Ktf;xy5_9?$"{>2/7}[~M', ⟦2-char-id⟧[⟦2-char-id⟧[0]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[4]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]].length, ⟦2-char-id⟧[⟦2-char-id⟧[10]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[8]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[9]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[-⟦2-char-id⟧[7]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[4]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++)
+          if (⟦2-char-id⟧[-⟦2-char-id⟧[6]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[3]]]), ⟦2-char-id⟧[-⟦2-char-id⟧[6]] !== -⟦2-char-id⟧[2])
+            if (⟦2-char-id⟧[-⟦2-char-id⟧[7]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[-⟦2-char-id⟧[7]] = ⟦2-char-id⟧[-⟦2-char-id⟧[6]];
             else {
-              MJ(⟦2-char-id⟧[⟦2-char-id⟧[6]] += ⟦2-char-id⟧[⟦2-char-id⟧[5]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[-⟦2-char-id⟧[7]] |= ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[8]], ⟦2-char-id⟧[⟦2-char-id⟧[8]] += (⟦2-char-id⟧[⟦2-char-id⟧[6]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+              UB(⟦2-char-id⟧[-⟦2-char-id⟧[7]] += ⟦2-char-id⟧[-⟦2-char-id⟧[6]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[8]] |= ⟦2-char-id⟧[-⟦2-char-id⟧[7]] << ⟦2-char-id⟧[⟦2-char-id⟧[9]], ⟦2-char-id⟧[⟦2-char-id⟧[9]] += (⟦2-char-id⟧[-⟦2-char-id⟧[7]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
               do {
-                MJ(⟦2-char-id⟧[-⟦2-char-id⟧[9]].push(⟦2-char-id⟧[-⟦2-char-id⟧[7]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[-⟦2-char-id⟧[7]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[8]] -= ⟦2-char-id⟧[3])
-              } while (⟦2-char-id⟧[⟦2-char-id⟧[8]] > ⟦2-char-id⟧[6]);
-              ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]
-            } return ⟦2-char-id⟧[⟦2-char-id⟧[6]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[-⟦2-char-id⟧[9]].push((⟦2-char-id⟧[-⟦2-char-id⟧[7]] | ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[8]]) & ⟦2-char-id⟧[10]), rJ(⟦2-char-id⟧[-⟦2-char-id⟧[9]])
-      }(⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧[⟦2-char-id⟧]
+                UB(⟦2-char-id⟧[⟦2-char-id⟧[10]].push(⟦2-char-id⟧[⟦2-char-id⟧[8]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[8]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[9]] -= ⟦2-char-id⟧[3])
+              } while (⟦2-char-id⟧[⟦2-char-id⟧[9]] > ⟦2-char-id⟧[22]);
+              ⟦2-char-id⟧[-⟦2-char-id⟧[7]] = -⟦2-char-id⟧[2]
+            } return ⟦2-char-id⟧[-⟦2-char-id⟧[7]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[10]].push((⟦2-char-id⟧[⟦2-char-id⟧[8]] | ⟦2-char-id⟧[-⟦2-char-id⟧[7]] << ⟦2-char-id⟧[⟦2-char-id⟧[9]]) & ⟦2-char-id⟧[11]), vB(⟦2-char-id⟧[⟦2-char-id⟧[10]])
+      }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
     }
 
-    function ⟦2-char-id⟧(...JJ) {
-      return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧ !== ⟦2-char-id⟧[16] && ⟦2-char-id⟧ ? (new ⟦2-char-id⟧).decode(new ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[2]])) : typeof ⟦2-char-id⟧ !== ⟦2-char-id⟧[16] && ⟦2-char-id⟧ ? ⟦2-char-id⟧.from(⟦2-char-id⟧[⟦2-char-id⟧[2]]).toString("utf-8") : ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[2]])
+    function ⟦2-char-id⟧(...BB) {
+      return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧ !== ⟦2-char-id⟧[17] && ⟦2-char-id⟧ ? (new ⟦2-char-id⟧).decode(new ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]])) : typeof ⟦2-char-id⟧ !== ⟦2-char-id⟧[17] && ⟦2-char-id⟧ ? ⟦2-char-id⟧.from(⟦2-char-id⟧[⟦2-char-id⟧[1]]).toString("utf-8") : ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]])
     }
 
     function ⟦2-char-id⟧() {}
-    ⟦2-char-id⟧(⟦2-char-id⟧ = {}, ⟦2-char-id⟧ = ["+.nAq@XyY", '6Wr6=xhA~I98IM3VP}MA0@ChdhP2(d.oV}nP`m/EzcUZ5ex{"}q', 'tpG02RZrO%yt%k;X"EXea8w4kOyn+T"u&a/Zj3^d`:<tWhd;xEq', 'uNn03&n4nh^$_1#di/3U%3rd8,OA#"`Xn=9>M{BrwRF21q', "/flLp9@f}VMtPa:d[aP/GKUKL", "@PmrP1ZrvyjAnQ/b?O9x}8_;EFp,/Q6{xu=*@_FkQnc:zC6VP:4LR5&H", "6Xh0[*8vtCh0(elPt5pLF", '_j}A>EIk&cU4"hsgpJ"eB{Mlk:8LNQL`NCOPq>3/:Eb*L_M;tuq', "6|MPVEKua", "|cu!sKNH", "fE{ifxB", "a,U/:y^uq}z,u=ObvNBiX={H[NcMxhEP>B", "c8kmwK[dxVwNY@}?0mI22bWd4hS0Oh^WW`?iqbqk_}%|Fp_?n:f0A>?TY", ')W_3w]dK8|Bq]dLo/>|"l6a4M%sgO&e/%}W98tUqOt/obT,NDH', "VU$Y:8cH", "5:d!z5+KqV/dT#+gdz@3uTn?CCaW7Fid<NGP)*0?(Rs/IYD", "&ag*_4z>F,7CA^AX}agPaO9htIwa;1ne!B", "4z@U2b/VVcrzEX>V", "jUS>[}Wd3FR;y5XPocf>/u+f[Om4RCfU", '"ElPRyOf9|`;iYMbmp/0$8nVTC&gpL', "gC)o`!DV#h8Zf=h", "vO{Ko;1K.:al`1h{@%Oc_%v8ZJz((a$N}=U2;]9tR|WZu_2UnH", "VUmrV10T:E@>!dj1{l)*}#K>oto:0##d7%wmOWcAdkRFpL", '%UWms6{A~Cv"3LDJO:_3z>Zd$Rq}NQ_WYITK]=6W$f=$JCBpDfWm(x1q', 'yaG*"3u8wRf<kkT{SlyZ/', "}asi2R$45Ry", "QtrG?z6fmvhN0#G/N=8Av8Ch;fFG$FR/p>/o%3AybE9HyLR/:z?2<*8fSD", "TOoKH{GI+kZ5!5Ku=pNeU", "l/tc,2&A&RvFP=f13ohZWKN/rN78o^coRJ>mf5/&sN+#f@$oh~gP.}5Ke:p", 'I~u!e]cyeF"(+%he0N!}g1!ASrR', "4}x3d1zfZJ;dKa", "2Jj>j((f9Fc}va", '?OMAFbat"c*|V1;pC"A6*43H', "TW*/T3Jk]hu</pTU[:jAIE~GvIik=#%l8`?mH@!E7hp4%^g?,B", "$WgKpM?9)kPKSeTeP/$Yy9wECtODH", "q;i*i0m/qEj4e1~b]:SZ%2DVR:]#+bnu(m)c!Oi.Wfee;UeP).^mU", '"j%/RRp;_vb<MLlPwf[me6B', 'n84>p!`;kF:Db_Gd0jT"V&B(SF_#r5t.,paYKpB', 'bp("z55q@ct!FpZ1JRpP^w,>/n', ".E$ZA&Fv]hCOIY/b*O&mR<Jk?JccE2cXuz/KykB.a", 's.*xuT}8FngapQd/+:W9hx@f]h&L&d%;W56"ypO)5f9>/LHoq><*=05)i', "]au!XEVTU:$rcR6U`EA*JK(>s:jF=U%;F8@/Lb>k~,X2^4sl,oQi", "nE`3O<)K(tJ<aUnWcuCcU!28i", "y:uiP=!95,b02%gu8`*y&K?A2JW:BePl`Oo!?9q.Aho<a^QU?/SZ|8&]iZP", 'pJ@/NO%?IREK:Lt.ntu"V', 'rI{*5m]/IE>>|eYIJiBiSmmH~t5,9#_WQ~*>bTdGtf#3FFQe"o<cwTyA_fj', "Lt;Z_wo/cF7XBa", "Rac69_ZKF,ZWO4+W&o2i;]PIvtv,LeO.9pSZ", "BtfZ#<P)FIm", "rI}Ac<>Ka", '|a40+*SI+hJ27T7WL><c#RsN+:ZZ."cX%zlwERUrA', "ctumy^B", '%uYZtW8Gzh$#,XMbf~]=b|D9ZOS4F&*{C`{"a<Uq', "q/OoK{KufO%F1hjV456oHyF8:ErM8hel1EHeERV;8ne", "Ol%/TmmHTr?!Sa", "Lzz>`9AAf%=(.M#IDEWe0^eyyk6&pQbX&m?GdTNAxct!&d7?V>k~ib*um}5", '0EY>V1vI3O^x1"4dzN0K>&iKck.ZretG}jq', '/W!mI*GISy/OiY2XK=zxykFk"tHw6XaX', "2OS/=xrIBcbAl1elvO?m!E[K`DHQre4V}Ej>4yB", "IIL>K^jEY", "g>~cM{hh!N!r=kKuXUqm8p7/Y", ",jR/b6Z)%N?Ku=&e&F3Ub|pVSOd50ks;_m}o?TuI(R#Xp2sP", "d>$/W]Q)Tnu!WFmW=j4xCEB", '/p9rz>346ryA."/;|i`~PKB', '<%2mF1)K)kg<fe)uaU3UJOCTHf:!C1vG/WQ}@4TT"Iwn+aZ', '1RzAH0zGofM3le)PmUsmkW@8{h?;l1e/!55"4>O)7h>>#U,G<Oq', "G})A@j&mBEZ5&RhV{m2mE{`AvE4#*RwN", "s{$~I1GqU:8P6Xql756!R<B.y}*(8^%/;ajoAxZkfO+/wQr", "$j9r|RF85f;4[&=psOnAX", "}N*UP1a4]h9|f_ye[a.mgxrbOCdh2CzNmc100@6k[F", "NEmr[1Gqp}D^?QoNsO}AY49]Wf33;^fU", "u/%y(OB", '*:,YC1Brs:($Up:d{z0"t@QbH,2RNRE/u=H', "wf7KK#Gbr0%D@_,GpJ,~V4]NjF^Coq", "*Ow2B8m]yh!!;=vblz?~+wk>W}5DH", 'GEt"v5zITr', "#z<!&*7H", "I{?{iA9)", ",m1o3&Jq", "tKDjzy5/", "70v:=.s#", "pCAB", "^)vB2*H", "p0Gj", '"}3=w}Qq', "w2,5/a6", 'ETX<"wRH', "$TiyW=RH", "TTS<", "ET^}Yr|H", "AT3wRw@H", "n1^}+8LH", "bPM}@", "ET^}Rw1]*e", ";zLbya9e_M", "!R+ivv#(*e", "amcb~}EH", "*m=w}v@H", "y1}dZ^2H", "ET^}Rw@H", "n1X<$BMH", "|;{Gb=EH", "Bn{bb8|H", "[;iy!B@H", "b`=w/}jI", "sVVb%", "]TX<", "ST^de", ";P[b]", "yFqmXLzH", "c/#5%", "ET^}Yrcei", "!RQS4dqBi", "PP>5Tdevi", '[;mb.D"H', "b5mG]=6", "[;mb%8$H", "n1{b+wPI", "y1tb0BFH", "]`=w/}6", "|]o=])X:", "@wo$kF?>", "%JTxk/g0", "T#lg", "/~?`", "5]kR", "vV?`", "VYxC7", ":D}R", "+b!g", "3/tG", "WTM}8v;H", "l;?5I/NI", "IkC<zsoH", "$RawvvRH", "t5fG", "h;#5", "*Pmbh^2H", "cdfG", "$PfbrwMH", 'P`#.PB"H', "~*@<Bv@H", "q2a30B6", "{gN$!Rj6", 'e[Z"}uSx', "#$Zm", "0t[!ZRj2", "7=Lurov2", "?QHCJ5h", "5,)P(+Rx", 'FDZ"pqvx', "PyMY+_Ub", "U$|m]k^", "~}0$e4u6", "+|&Mf", "Dm=w}v@H", "$Pfbt}KH"]), MJ(⟦2-char-id⟧ = function(...JJ) {
-      MJ(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = [function() {
+    ⟦2-char-id⟧(⟦2-char-id⟧ = {}, ⟦2-char-id⟧ = ["FD@,G?6cnDM0#NWY98Sqvpa)EH);*IK#tQ=z@/lc`", "pt5G}#*zNU]!UBbbD|NB8?gGXspq!fY^Erw|8pYD&8uTj>AbbD|y_5A6hDvuA", "LDDQNKTz5amJ&+F<Ea|B{5rJnr4^jB7BU.bG", "Nr=xcpR.3Db;otaB/]t5s36G3vE.*BJp", "0QQi[>SY9mQ!W&X#`CX3$t]JM(/hO6!<hTJN0/+mDaIyab70{S@;ehZ)T.p", ":R23vp4wUH7KaojaW%y+6", "zTR^F3nGd%FV/h70GUT;LzpAU(wYDf;p<W6y//dJ?if;G`4bUNc@l", "{b;,mcnG8I^?F>cjy]3C0z[<RE=_9HK.>jS@H#|s~8$K>tg&zQpNQ_F4", "tb=tUxE.,wyX>#vY~ai,e<`)YwI<DvV)f`8jKT@Y?II{ZTq", "pU3C)Y0wKEg", ",NW;s5mW+qtIENi#5aX3SNA}AI", ')TqQ?"dEUHePW(g6', '9Sc@D?nY"v<<<NR&', "]t1XQJe", "*,Ul~1A)emWE#b2jG.JGD2!1=Ew.Utx#P<vlcQ$JuafK$$}l8@J5jYBGXs:", 'z@_t(K4K*EF=zvMoLRvxS$F:5(5xm`()|lhld$x^em"k7#W)W%Sqj', "jWC^%?DA", "IQG|OT/A+q*YipFjA|e9#;E:#seyn(=6t]|B{#JU,s2Io>ZhYgKtLPQA", 'II:;$hzPAI.T|TR#$K^jZp&4E%8({"R@C,a96', "ClRry>nYOnZAKs%hXrA", "9H^Go5fxOr>IT>yp{%W,2>aGeUvC+h0j", '%QAy/35<Ps"+IHLbk|QiKcks)F3!M6%hFIG5"SGm/nDC*IHFG.yCn>;A', "$*Yx*KOUDFh!ht>)}`T,M(e", 'Sg>_zp#haUZGDT6l{Kf;(Qb=cs"Kz(#.<xW|', "2%NCR*Ys:aGPZhL@[a=Vd$ns{n", "$%M+:>H:B(Uyo`", '_*&Qv2=D0n[xeo"<ce', "|mWX/5Hz%D.?xK!BrF+@%p$,G", "HbtX]Ns==sw.@4n<t%.fk?@m`n*GzBT<mR`", "E%hx55dEtw]`U1TBE<>_[z*.7s:", ".CF_X?77Jiu`iBw:$@rXM504yFFf?`G:GC53SZ=lnvB?2(X^pW4", "Ivxi:16l`v?N^+S&8b/x1Eq^68~6A", "LgVzL;|s`", "/KdlRyQyya>K6b5&!UzqG=}WYD{3|h.Rm(^G}S5xxHz(+fZaavoL@;csM8iyA", 'r`@zrcIGu%{_m#Sp@gYC$"e', "1F6BX8ncEusaV{g&#8`", '"TDCvcK,)aZXgEO:hrL,', ")Rgf?xL1:FY@hB^hQbrjnDf.LrwCi`", 'H|OibR^UJmf6[t$p#D8;g{REdijE^b1plx[,U8$:"voFf(E]', "xSn_Df7:;%yINX", "!W7jG=|)Yw70n4", "eR/xUxiEAUn`$Bu&JQAQS$e", "Ea)QpN+)Ar&Eu{ZhUA", "j<mjU7Ln*EY", 'WvfQ,<p1s.}A7N@l%P3f?D"Q%D2CWHL]3RW5Zv.inr6fg&ha,N1jB', "6C1zR1B)pE:f$he:TU/&pblGRs", ';%1ryxZ)d%3$}47oBJZX4"CUOv](HbU', "lJSjnDpstEN=14b:P|?|", "K%r|YyqKmmO;+o1&lWPxj1L1S.}ln&c)3t956>e", "*W=@&#jhQU5YA", '$,*,3P~/2wjsbX[)VR?Xx")1{m5c"$f#Yx/tP<cs"rVmu&r<<lhlEve', "SgCrhykW,qZj(EeWHX%,E_=WfaxkdXR@9(2xdZmDXnWFB{0R[(/G&", '}p3iLY>sO|7x3HVR1@),1PEE|EDKAfLagDIzO8W"TO|b(KB)j&HV^zmW:s)', "3T)C$Vh^kr!,jt3jcrPG.h(s`", "VHP&[#E:tE+1|oy#JD!j<z#zZHtX4+8aEH[;OfXKYngTu3vW;e", 'tb:N/LB=iF^?zXn)"Q[r@Y+no|^8$Bmhs&:rw?OU0s', "qN=q%h/D]8l%qbH", "{T>+.D/Y@v.{o1La0PAB*Je", "VFFx;v~?%mC", '?*}z9"7<2DV$wh#:!,mz]yMRE(!@CtZh(Ti9T2*^LUEKDs%W', 'YDi,2t^^q8jaH",', '!mAyq"MU+nEH/h$Bot/32t5Ue||QJ6V)SbiL|=mmZuG,rZ7R~8mri7f,4mp', "=TW;dY%sLrc=GB.j#%{C|?kl2s", "[u?Xn8(l,nfjZ:^arT?|BR1/Ba35GB^hBWpj<Z*^(u,%}&^Wz@4", '^URNCRO.2D1=csM):|^5"">G`', 'OTcq~9IcBF_"5`Bay8(iH3WnhnhGI34bFQl@VmERkUWEHZs', "QF}ze7=m}s:8Af5nK,7@^ZalLOz!<Z5pm(O_:9}A%r6Qj(X:7Hay<RkYAU", "TrEc(J^.(H9N]bHFGW$rUVe", "cS]C<;unTvK.$1C:vbECAV`}FwN(z`=nn&4", "JUtXzm{UQ|xK/Xkh(TVj_SWc&8nbA", "B%W5&>9xeUUVJNQB*S1jpr_G5%BaA2AgrtR,j$h$QDa?M6i6uJr@w?e", '>jR;*J[Rmv!5}t=67HVN"##Uj(L:I4mlw;=&?5*z+qR@U`,@', "(|AQCRVGcrC<F>8:vj!q|7#^is", "jPy3{L4EFnisiBI", '<l3CBY:^!rwu&"20JtmN<;IsLOp5*XN&3e', "4mirG<Smcn`b~X", "?K&ly=^h`", '`.Ly^ttGhD0`qZn<ar9GM#JE".8(T>C]sUi^zb8P.U/xUp?B', 'egar"V37yaw;}&=bLlSV^ze', "k|T,pm]$Or)8EZX@2@Ux&##:>wKNNXoBE(o|U", "`l}5Pf,iU(;JA", "v|*|a>5JGVvjn{L@Fl!Vq7e", "J8Fl#1}=y%IyW3ZaGW6,!57U+", 'N%/xQycs"|C@eBBYXrQq)m5RNIMk[hE)|la,', "M%+@fVgnEF", "PQG,YRK:>r]aj(qF`l_x`8%D_i", "]U+xXcI)Xrif5IWjjt/3F", "ETKX<$SDgub", "mPcX$3sA", '"HMQxhQYE(~ipH|pd8lV0', "AD~QQK@YFn26Q#6j?88G", "Am]f_5[<fsyk<E,#M<NrfhW)J!d@jt7<HJ<B]yZAOmH,svG6w@1zj", ".|Pq|hh.{D2hM6C]..:^K8=={rY5epChmr>_E_aAIO@aso,6otw,", '?SL,K"U4*%.=:ff.c%7;thLY+rZ.(HaF<gX3,?*.S*~D~h`@aUm5d$]4', '!JxQmEVlOI3;Ct+:[plGI"e', "gD&y+VT^+", ",D>ccf97}sKO^N|@+CZGF", '"(J|[#4^mi{JY36Y', 'sb>+;D5J"vv(Zv<.sIp;Gxe', "jI~rkfz$@IoB*>u&!I4", '"bDQkJmWq8(HC1%bM*R,O"4$j8d5GB%W2Qnl{3?skn{K;h<:Ve', "KP4+x5$J)FvC(HBj{`,Gi88E6aUqZ:%a&A", '$;y_?#=DwUlq9"5&[(pr75.4*%eB&+7YaJh@mEdwhwA{So})&RhqNKe', '^Jk&shkW<IU<i`X^((qly8JR;%jaM"[j$*rXs32JS.vHftOhWA', 'rU(_2(V)(*{_46whnvr@;"j:Vw;JF`', "{,bGY$]UPs3u`3h.$*Yq", "ACe^sh@li%Y", "^%[Q)ysG)auyLZ20LTBxh$.K,E7hAh2j]81ze7oJAr<5bXrRd<o,0", 't|AB#$N)@!D_I1Eh"S7N3yZ)3|^ffvcBZ%4', "UbycCY^hkvS={NYb", "<lj_Y1mAS8[kqZIpSR`", "VrZV$5@)=nq^A", "4I1|6RRE4|%.]sI&<xC|rc~lNm/K[(R.oD#X`7zPXw9iv>pn$e", "I|{C3*7UhDE", '"HWND_uyTUEKV`5n`X]BS$ZY^m4rd`', 'qmBl1pQs]u_"|2Kbw8:QY9f,fEQmBHQj$b/xf?@yzrj8iIT&ze', 'jtlzz2@"Zc*;ZX|#N<IzvJ1G[F["gE5&v`|B<9}A', "Wxmz@z2z!rGZo`g6{S,|tV#.%ryCX>B]+XmXep@1$m^V)XN<6A", "A.d_?#%sTv*jY4", "1D%rn8&^?i[k7#,", 'gW+q"zRhBH||gH=6trZz"8.xOUY', "oRvqVKKE/rTN!fjh#v|^ihRz:s4<1HR6}<i|", "p`RN1Kc17E+EVKy&X&bVcyM$9*4QV#u#Vr05AchE%I", 'OQ#@_"F4', ":dcfuw*H", "I+gjA)3a", '&Q"6', "<{g6_dx", "&+zv", "c/;<G3U", "HI@W,c5]", "7IRh%k5]", "IIvW", "HIz~?a+]", "*IEc5cC]", "r}z~ig6]", ")0M~C", "HIz~5cC]", "r}@W7BM]", "+_D1)kH]", "BrD))g+]", "3bq)`~H]", "ubkc~QC]", "h}~T8z/]", "t_RhyBC]", "){kcG~(#", "d22)S", "=I@W", "vIzTV", "_0t)=", "hneb@6l]", "qGm<S", "HIz~?aqVR", "y5pvjTeBR", "00P<ITVQR", "t_b)|>,]", ")<b1=kU", "t_b)Sg7]", "r}D)ic0#", "h}L)fBn]", "={kcG~U", "@5WbFLG]", ")!wx", "F=fn", "W@7G", "c/fn", 'F=,G"', "a2;G", "YjRx", "EGL1", "%IM~gQ_]", "%Wg3y9#0", "#$4Wld9]", "753cQQ5]", "L<K1", "[_m<", "u0b)[z/]", "qTK1", "70K)acM]", "0{m|0B,]", "`uCWBQC]", "e/3EfBU", "EM*|~b0s", "4t*m", "[(q:$J6]", "?(p~^sez", "lRv,n+N", "TdCj#+.s", "(e*|_1Us", "S0@aw@[B", "Lt[mH{A", "Y~9tE%bB", "+[DgR", ">bkc~QC]", "70K)L~&]"]), UB(⟦2-char-id⟧ = function(...BB) {
+      UB(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[15]] = [function() {
         return globalThis
       }, function() {
         return global
```

</details>

<details>
<summary>Hunk 38 · Change · +207 / -215</summary>

```diff
@@ -814,271 +814,263 @@
         return window
       }, function() {
         return new Function("return this")()
-      }], ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[97], ⟦2-char-id⟧[⟦2-char-id⟧[12]] = []);
+      }], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[37], ⟦2-char-id⟧[⟦2-char-id⟧[13]] = []);
       try {
-        MJ(⟦2-char-id⟧[⟦2-char-id⟧[0]] = Object, ⟦2-char-id⟧[⟦2-char-id⟧[12]][⟦2-char-id⟧[22]]("".__proto__.constructor.name))
+        UB(⟦2-char-id⟧[⟦2-char-id⟧[2]] = Object, ⟦2-char-id⟧[⟦2-char-id⟧[13]][⟦2-char-id⟧[24]]("".__proto__.constructor.name))
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
-          var ⟦2-char-id⟧, FJ, UJ, ⟦2-char-id⟧;
-          for (⟦2-char-id⟧(⟦2-char-id⟧ = void 0, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[11]], ⟦2-char-id⟧[⟦2-char-id⟧[17]][⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2]), ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧(⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++], ⟦2-char-id⟧ <= ⟦2-char-id⟧[86] ? ⟦2-char-id⟧ = FJ : ⟦2-char-id⟧ <= 223 ? ⟦2-char-id⟧ = (31 & ⟦2-char-id⟧) << ⟦2-char-id⟧[19] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18] : ⟦2-char-id⟧ <= 239 ? ⟦2-char-id⟧ = (15 & ⟦2-char-id⟧) << ⟦2-char-id⟧[21] | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18]) << ⟦2-char-id⟧[19] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18] : ⟦2-char-id⟧[⟦2-char-id⟧[20]] ? ⟦2-char-id⟧ = (⟦2-char-id⟧ & ⟦2-char-id⟧[6]) << 18 | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18]) << ⟦2-char-id⟧[21] | (⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18]) << ⟦2-char-id⟧[19] | ⟦2-char-id⟧[⟦2-char-id⟧++] & ⟦2-char-id⟧[18] : (⟦2-char-id⟧ = ⟦2-char-id⟧[18], ⟦2-char-id⟧ += ⟦2-char-id⟧[4]), ⟦2-char-id⟧[⟦2-char-id⟧[17]][⟦2-char-id⟧[22]](⟦2-char-id⟧[⟦2-char-id⟧[23]][⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧[23]][⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧[0]](⟦2-char-id⟧))));
-          return ⟦2-char-id⟧[⟦2-char-id⟧[17]].join("")
-        }
-    }()), xJ(76) + ⟦2-char-id⟧[25] in ⟦2-char-id⟧ && function(...JJ) {
-      MJ(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[1]] = function(...JJ) {
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
+          var ⟦2-char-id⟧, VB, yB, ⟦2-char-id⟧;
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
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+        function ⟦2-char-id⟧(...BB) {
+          return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = function(...BB) {
+            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = 'xHanqVfB6{vPb.S;G(mJ2zp9][=&LR_0j~3uEI$WM@/+stlAyDig5N:*}KX^>whF<orZ)k4d!TQ?C%,YUce"18#O|`7', ⟦2-char-id⟧[-⟦2-char-id⟧[6]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[27]] = ⟦2-char-id⟧[-⟦2-char-id⟧[6]].length, ⟦2-char-id⟧[-⟦2-char-id⟧[35]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[18]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[20]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[28]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[28]] < ⟦2-char-id⟧[⟦2-char-id⟧[27]]; ⟦2-char-id⟧[⟦2-char-id⟧[28]]++)
+              if (⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].indexOf(⟦2-char-id⟧[-⟦2-char-id⟧[6]][⟦2-char-id⟧[⟦2-char-id⟧[28]]]), ⟦2-char-id⟧[⟦2-char-id⟧[29]] !== -⟦2-char-id⟧[2])
+                if (⟦2-char-id⟧[⟦2-char-id⟧[22]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[⟦2-char-id⟧[22]] = ⟦2-char-id⟧[⟦2-char-id⟧[29]];
                 else {
-                  MJ(⟦2-char-id⟧[⟦2-char-id⟧[43]] += ⟦2-char-id⟧[-⟦2-char-id⟧[53]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[47]] |= ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[⟦2-char-id⟧[54]], ⟦2-char-id⟧[⟦2-char-id⟧[54]] += (⟦2-char-id⟧[⟦2-char-id⟧[43]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                  UB(⟦2-char-id⟧[⟦2-char-id⟧[22]] += ⟦2-char-id⟧[⟦2-char-id⟧[29]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[18]] |= ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]], ⟦2-char-id⟧[⟦2-char-id⟧[20]] += (⟦2-char-id⟧[⟦2-char-id⟧[22]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                   do {
-                    MJ(⟦2-char-id⟧[⟦2-char-id⟧[42]].push(⟦2-char-id⟧[⟦2-char-id⟧[47]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[47]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[54]] -= ⟦2-char-id⟧[3])
-                  } while (⟦2-char-id⟧[⟦2-char-id⟧[54]] > ⟦2-char-id⟧[6]);
-                  ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]
-                } return ⟦2-char-id⟧[⟦2-char-id⟧[43]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[42]].push((⟦2-char-id⟧[⟦2-char-id⟧[47]] | ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[⟦2-char-id⟧[54]]) & ⟦2-char-id⟧[10]), rJ(⟦2-char-id⟧[⟦2-char-id⟧[42]])
-          }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]
-        }
-        ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[4], cJ(⟦2-char-id⟧[45]) in ⟦2-char-id⟧ && function(...JJ) {
-          MJ(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = function(...JJ) {
-            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[-⟦2-char-id⟧[59]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[56]] = {}, ⟦2-char-id⟧[⟦2-char-id⟧[57]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[58]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[19]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].length), ⟦2-char-id⟧[-⟦2-char-id⟧[55]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[-⟦2-char-id⟧[55]] < ⟦2-char-id⟧[⟦2-char-id⟧[19]]; ⟦2-char-id⟧[-⟦2-char-id⟧[55]]++) {
-              for (⟦2-char-id⟧(⟦2-char-id⟧[-⟦2-char-id⟧[56]] = {}, ⟦2-char-id⟧[⟦2-char-id⟧[57]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[58]] = ⟦2-char-id⟧[0]), ⟦2-char-id⟧[⟦2-char-id⟧[3]] = ⟦2-char-id⟧[-⟦2-char-id⟧[55]] + ⟦2-char-id⟧[0]; ⟦2-char-id⟧[⟦2-char-id⟧[3]] < ⟦2-char-id⟧[⟦2-char-id⟧[19]]; ⟦2-char-id⟧[⟦2-char-id⟧[3]]++) ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].x !== ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].x || ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].y !== ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].y ? (⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].y === ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].y ? ⟦2-char-id⟧[⟦2-char-id⟧[29]] = Number.MAX_SAFE_INTEGER : ⟦2-char-id⟧[⟦2-char-id⟧[29]] = (⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].x - ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].x) / (⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[-⟦2-char-id⟧[55]]].y - ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[3]]].y), ⟦2-char-id⟧[-⟦2-char-id⟧[56]][⟦2-char-id⟧[⟦2-char-id⟧[29]]] || (⟦2-char-id⟧[-⟦2-char-id⟧[56]][⟦2-char-id⟧[⟦2-char-id⟧[29]]] = ⟦2-char-id⟧[2]), MJ(⟦2-char-id⟧[-⟦2-char-id⟧[56]][⟦2-char-id⟧[⟦2-char-id⟧[29]]]++, ⟦2-char-id⟧[⟦2-char-id⟧[57]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[57]], ⟦2-char-id⟧[-⟦2-char-id⟧[56]][⟦2-char-id⟧[⟦2-char-id⟧[29]]]))) : ⟦2-char-id⟧[⟦2-char-id⟧[58]]++;
-              ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[57]] += ⟦2-char-id⟧[⟦2-char-id⟧[58]], ⟦2-char-id⟧[-⟦2-char-id⟧[59]] = Math.max(⟦2-char-id⟧[-⟦2-char-id⟧[59]], ⟦2-char-id⟧[⟦2-char-id⟧[57]]))
-            }
-            return ⟦2-char-id⟧[-⟦2-char-id⟧[59]]
-          }, console.log(⟦2-char-id⟧[⟦2-char-id⟧[14]]))
+                    UB(⟦2-char-id⟧[-⟦2-char-id⟧[35]].push(⟦2-char-id⟧[⟦2-char-id⟧[18]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[18]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[20]] -= ⟦2-char-id⟧[3])
+                  } while (⟦2-char-id⟧[⟦2-char-id⟧[20]] > ⟦2-char-id⟧[22]);
+                  ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]
+                } return ⟦2-char-id⟧[⟦2-char-id⟧[22]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[-⟦2-char-id⟧[35]].push((⟦2-char-id⟧[⟦2-char-id⟧[18]] | ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]]) & ⟦2-char-id⟧[11]), vB(⟦2-char-id⟧[-⟦2-char-id⟧[35]])
+          }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
+        }
+        ⟦2-char-id⟧(124) + "L" in ⟦2-char-id⟧ && function() {
+          var ⟦2-char-id⟧, ⟦2-char-id⟧ = function(...TB) {
+            return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[36], BB({}, ⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])
+          };
+          ⟦2-char-id⟧(⟦2-char-id⟧ = function(...TB) {
+            if (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[27], ⟦2-char-id⟧[⟦2-char-id⟧[39]] = {}), ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]] !== ⟦2-char-id⟧[37]) return ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]];
+            if (⟦2-char-id⟧[⟦2-char-id⟧[2]] === ⟦2-char-id⟧[⟦2-char-id⟧[36]]) return ⟦2-char-id⟧[42];
+            for (⟦2-char-id⟧[⟦2-char-id⟧[38]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[38]] < ⟦2-char-id⟧[⟦2-char-id⟧[2]].length; ⟦2-char-id⟧[⟦2-char-id⟧[38]]++) ⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]] === ⟦2-char-id⟧[37] && (⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]] = ⟦2-char-id⟧[1]), ⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]] === ⟦2-char-id⟧[37] && (⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]] = ⟦2-char-id⟧[1]), UB(⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]]++, ⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[⟦2-char-id⟧[38]]]]--);
+            for (⟦2-char-id⟧[⟦2-char-id⟧[40]] in ⟦2-char-id⟧[⟦2-char-id⟧[39]])
+              if (⟦2-char-id⟧[⟦2-char-id⟧[39]][⟦2-char-id⟧[⟦2-char-id⟧[40]]] !== ⟦2-char-id⟧[1]) return ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]] = ⟦2-char-id⟧[41], ⟦2-char-id⟧[41];
+            for (⟦2-char-id⟧[⟦2-char-id⟧[14]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[14]] < ⟦2-char-id⟧[⟦2-char-id⟧[2]].length; ⟦2-char-id⟧[⟦2-char-id⟧[14]]++)
+              if (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]].substr(⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[14]]), ⟦2-char-id⟧[⟦2-char-id⟧[36]].substr(⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[14]])) && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]].substr(⟦2-char-id⟧[⟦2-char-id⟧[14]]), ⟦2-char-id⟧[⟦2-char-id⟧[36]].substr(⟦2-char-id⟧[⟦2-char-id⟧[14]])) || ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]].substr(⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[14]]), ⟦2-char-id⟧[⟦2-char-id⟧[36]].substr(⟦2-char-id⟧[⟦2-char-id⟧[36]].length - ⟦2-char-id⟧[⟦2-char-id⟧[14]])) && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]].substr(⟦2-char-id⟧[⟦2-char-id⟧[14]]), ⟦2-char-id⟧[⟦2-char-id⟧[36]].substr(⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[36]].length - ⟦2-char-id⟧[⟦2-char-id⟧[14]]))) return ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]] = ⟦2-char-id⟧[42], ⟦2-char-id⟧[42];
+            return ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[2]] + ⟦2-char-id⟧[⟦2-char-id⟧[36]]] = ⟦2-char-id⟧[41], ⟦2-char-id⟧[41]
+          }, console.log(⟦2-char-id⟧))
         }();
         const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-        return ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[37]) + ⟦2-char-id⟧(81)](⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧[60]]), UJ()[⟦2-char-id⟧(82)](⟦2-char-id⟧[⟦2-char-id⟧[2]], ZJ, UJ()[⟦2-char-id⟧(83)](⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧[0]]))
+        return ⟦2-char-id⟧()[⟦2-char-id⟧(125) + ⟦2-char-id⟧(126)](⟦2-char-id⟧, ⟦2-char-id⟧), yB()[⟦2-char-id⟧(⟦2-char-id⟧[43])](⟦2-char-id⟧, pB, yB()[⟦2-char-id⟧(⟦2-char-id⟧[44])](⟦2-char-id⟧, ⟦2-char-id⟧))
       };
 
     function ⟦2-char-id⟧() {
       ⟦2-char-id⟧ = function() {}
     }
-    ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, FJ, XJ, jJ, YJ, ⟦2-char-id⟧) => {
-      function ⟦2-char-id⟧(...JJ) {
-        return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] = function(⟦2-char-id⟧) {
-          var ⟦2-char-id⟧, ZJ, FJ, UJ, eJ, XJ, ⟦2-char-id⟧;
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
-                MJ(⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧[7], ⟦2-char-id⟧ |= ⟦2-char-id⟧ << ⟦2-char-id⟧, ⟦2-char-id⟧ += (⟦2-char-id⟧ & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                UB(⟦2-char-id⟧[⟦2-char-id⟧[47]] += ⟦2-char-id⟧[⟦2-char-id⟧[46]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[48]] |= ⟦2-char-id⟧[⟦2-char-id⟧[47]] << ⟦2-char-id⟧[⟦2-char-id⟧[49]], ⟦2-char-id⟧[⟦2-char-id⟧[49]] += (⟦2-char-id⟧[⟦2-char-id⟧[47]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                 do {
-                  MJ(⟦2-char-id⟧.push(⟦2-char-id⟧ & ⟦2-char-id⟧[10]), ⟦2-char-id⟧ >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧ -= ⟦2-char-id⟧[3])
-                } while (⟦2-char-id⟧ > ⟦2-char-id⟧[6]);
-                ⟦2-char-id⟧ = -⟦2-char-id⟧[0]
-              }
-          }
-          return ⟦2-char-id⟧ > -⟦2-char-id⟧[0] && ⟦2-char-id⟧.push((⟦2-char-id⟧ | ⟦2-char-id⟧ << ⟦2-char-id⟧) & ⟦2-char-id⟧[10]), rJ(⟦2-char-id⟧)
-        }(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]
+                  UB(⟦2-char-id⟧[⟦2-char-id⟧[38]].push(⟦2-char-id⟧[⟦2-char-id⟧[48]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[48]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[49]] -= ⟦2-char-id⟧[3])
+                } while (⟦2-char-id⟧[⟦2-char-id⟧[49]] > ⟦2-char-id⟧[22]);
+                ⟦2-char-id⟧[⟦2-char-id⟧[47]] = -⟦2-char-id⟧[2]
+              } return ⟦2-char-id⟧[⟦2-char-id⟧[47]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[38]].push((⟦2-char-id⟧[⟦2-char-id⟧[48]] | ⟦2-char-id⟧[⟦2-char-id⟧[47]] << ⟦2-char-id⟧[⟦2-char-id⟧[49]]) & ⟦2-char-id⟧[11]), vB(⟦2-char-id⟧[⟦2-char-id⟧[38]])
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
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧[64] ? ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(93) + ⟦2-char-id⟧(94) + ⟦2-char-id⟧(95)](⟦2-char-id⟧, DJ(⟦2-char-id⟧[62]) + ⟦2-char-id⟧(⟦2-char-id⟧[34]) + ⟦2-char-id⟧(⟦2-char-id⟧[63]) + ⟦2-char-id⟧[29]) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[62]) + ⟦2-char-id⟧(⟦2-char-id⟧[34]) + ⟦2-char-id⟧(⟦2-char-id⟧[63]) + ⟦2-char-id⟧[29]],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧[64] ? ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(⟦2-char-id⟧[68]) + ⟦2-char-id⟧(⟦2-char-id⟧[69]) + ⟦2-char-id⟧(⟦2-char-id⟧[24]) + ⟦2-char-id⟧(⟦2-char-id⟧[70])](⟦2-char-id⟧, DJ(⟦2-char-id⟧[65]) + ⟦2-char-id⟧(⟦2-char-id⟧[66]) + ⟦2-char-id⟧(⟦2-char-id⟧[67])) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[65]) + ⟦2-char-id⟧(⟦2-char-id⟧[66]) + ⟦2-char-id⟧(⟦2-char-id⟧[67])];
-      ⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(106)](⟦2-char-id⟧, ⟦2-char-id⟧[2], ⟦2-char-id⟧[2], ⟦2-char-id⟧), UJ().Re(⟦2-char-id⟧, mJ, UJ()[⟦2-char-id⟧(107)], ⟦2-char-id⟧.heading), UJ()[⟦2-char-id⟧(108)](⟦2-char-id⟧, ⟦2-char-id⟧.jf), ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[2]);
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(109) + ⟦2-char-id⟧(110)]();
-      ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(111) + ⟦2-char-id⟧(112) + ⟦2-char-id⟧(113) + ⟦2-char-id⟧[91]](⟦2-char-id⟧);
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧[64] ? ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(⟦2-char-id⟧[68]) + ⟦2-char-id⟧(⟦2-char-id⟧[69]) + ⟦2-char-id⟧(⟦2-char-id⟧[24]) + ⟦2-char-id⟧(⟦2-char-id⟧[70])](⟦2-char-id⟧, DJ(⟦2-char-id⟧[71]) + ⟦2-char-id⟧(⟦2-char-id⟧[72])) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[71]) + ⟦2-char-id⟧(⟦2-char-id⟧[72])];
-      if (!⟦2-char-id⟧ && ⟦2-char-id⟧()[⟦2-char-id⟧[82]](⟦2-char-id⟧) && (⟦2-char-id⟧ === ⟦2-char-id⟧[64] ? ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[61])][⟦2-char-id⟧(⟦2-char-id⟧[68]) + ⟦2-char-id⟧(⟦2-char-id⟧[69]) + ⟦2-char-id⟧(⟦2-char-id⟧[24]) + ⟦2-char-id⟧(⟦2-char-id⟧[70])](⟦2-char-id⟧, DJ(⟦2-char-id⟧[73]) + ⟦2-char-id⟧(⟦2-char-id⟧[74]) + ⟦2-char-id⟧(⟦2-char-id⟧[75]) + ⟦2-char-id⟧(⟦2-char-id⟧[76])) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧[73]) + ⟦2-char-id⟧(⟦2-char-id⟧[74]) + ⟦2-char-id⟧(⟦2-char-id⟧[75]) + ⟦2-char-id⟧(⟦2-char-id⟧[76])])) {
-        function ⟦2-char-id⟧(...JJ) {
-          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = 'u:|BD=@"g`R9bxt~_IZJ{kL/hNV5[+$TnGHpF)0*.rU]AXqvj38E,}>Q7(Sl#WYi?;6os<aPMyK!COde%1^fmcwz24&', ⟦2-char-id⟧[-⟦2-char-id⟧[77]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[-⟦2-char-id⟧[77]].length, ⟦2-char-id⟧[⟦2-char-id⟧[23]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[19]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[-⟦2-char-id⟧[78]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[-⟦2-char-id⟧[78]] < ⟦2-char-id⟧[⟦2-char-id⟧[12]]; ⟦2-char-id⟧[-⟦2-char-id⟧[78]]++)
-            if (⟦2-char-id⟧[⟦2-char-id⟧[35]] = ⟦2-char-id⟧[⟦2-char-id⟧[14]].indexOf(⟦2-char-id⟧[-⟦2-char-id⟧[77]][⟦2-char-id⟧[-⟦2-char-id⟧[78]]]), ⟦2-char-id⟧[⟦2-char-id⟧[35]] !== -⟦2-char-id⟧[0])
-              if (⟦2-char-id⟧[⟦2-char-id⟧[43]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[43]] = ⟦2-char-id⟧[⟦2-char-id⟧[35]];
+      ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[3];
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[16]) + ⟦2-char-id⟧(131) + ⟦2-char-id⟧(132)](⟦2-char-id⟧[⟦2-char-id⟧[2]]);
+      ⟦2-char-id⟧[⟦2-char-id⟧[5]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(133) + ⟦2-char-id⟧(134) + ⟦2-char-id⟧(135) + ⟦2-char-id⟧(136)](⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[5]] === ⟦2-char-id⟧[53] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[54]) + ⟦2-char-id⟧(⟦2-char-id⟧[55]) + ⟦2-char-id⟧(⟦2-char-id⟧[56]) + ⟦2-char-id⟧(⟦2-char-id⟧[57])](⟦2-char-id⟧[⟦2-char-id⟧[2]], TB(⟦2-char-id⟧[40]) + ⟦2-char-id⟧(⟦2-char-id⟧[51]) + ⟦2-char-id⟧(⟦2-char-id⟧[52]) + ⟦2-char-id⟧[18]) : ⟦2-char-id⟧[⟦2-char-id⟧[5]][⟦2-char-id⟧(⟦2-char-id⟧[40]) + ⟦2-char-id⟧(⟦2-char-id⟧[51]) + ⟦2-char-id⟧(⟦2-char-id⟧[52]) + ⟦2-char-id⟧[18]],
+        ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[5]] === ⟦2-char-id⟧[53] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[54]) + ⟦2-char-id⟧(⟦2-char-id⟧[55]) + ⟦2-char-id⟧(⟦2-char-id⟧[56]) + ⟦2-char-id⟧(⟦2-char-id⟧[57])](⟦2-char-id⟧[⟦2-char-id⟧[2]], TB(⟦2-char-id⟧[58]) + ⟦2-char-id⟧(⟦2-char-id⟧[59]) + ⟦2-char-id⟧(⟦2-char-id⟧[60])) : ⟦2-char-id⟧[⟦2-char-id⟧[5]][⟦2-char-id⟧(⟦2-char-id⟧[58]) + ⟦2-char-id⟧(⟦2-char-id⟧[59]) + ⟦2-char-id⟧(⟦2-char-id⟧[60])];
+      ⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(147)](⟦2-char-id⟧, ⟦2-char-id⟧[1], ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[8]]), yB().ol(⟦2-char-id⟧, iB, yB()[⟦2-char-id⟧(148)], ⟦2-char-id⟧[⟦2-char-id⟧[27]].heading), yB()[⟦2-char-id⟧(149)](⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧[38]].bu), ⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[1]);
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧(150) + ⟦2-char-id⟧(151)]();
+      if (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[5]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(152) + ⟦2-char-id⟧(153) + ⟦2-char-id⟧(154) + ⟦2-char-id⟧[71]](⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧[70]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]] === ⟦2-char-id⟧[53] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[54]) + ⟦2-char-id⟧(⟦2-char-id⟧[55]) + ⟦2-char-id⟧(⟦2-char-id⟧[56]) + ⟦2-char-id⟧(⟦2-char-id⟧[57])](⟦2-char-id⟧[⟦2-char-id⟧[2]], TB(⟦2-char-id⟧[61]) + ⟦2-char-id⟧(⟦2-char-id⟧[62])) : ⟦2-char-id⟧[⟦2-char-id⟧[5]][⟦2-char-id⟧(⟦2-char-id⟧[61]) + ⟦2-char-id⟧(⟦2-char-id⟧[62])]), !⟦2-char-id⟧ && ⟦2-char-id⟧()[⟦2-char-id⟧[69]](⟦2-char-id⟧) && (⟦2-char-id⟧[⟦2-char-id⟧[5]] === ⟦2-char-id⟧[53] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧(⟦2-char-id⟧[50])][⟦2-char-id⟧(⟦2-char-id⟧[54]) + ⟦2-char-id⟧(⟦2-char-id⟧[55]) + ⟦2-char-id⟧(⟦2-char-id⟧[56]) + ⟦2-char-id⟧(⟦2-char-id⟧[57])](⟦2-char-id⟧[⟦2-char-id⟧[2]], TB(⟦2-char-id⟧[63]) + ⟦2-char-id⟧(⟦2-char-id⟧[64]) + ⟦2-char-id⟧(⟦2-char-id⟧[65]) + ⟦2-char-id⟧(⟦2-char-id⟧[66])) : ⟦2-char-id⟧[⟦2-char-id⟧[5]][⟦2-char-id⟧(⟦2-char-id⟧[63]) + ⟦2-char-id⟧(⟦2-char-id⟧[64]) + ⟦2-char-id⟧(⟦2-char-id⟧[65]) + ⟦2-char-id⟧(⟦2-char-id⟧[66])])) {
+        function ⟦2-char-id⟧(...BB) {
+          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[68]] = '9aCp2,N5xnG^jvK=~%Br67JF:H/W"YX)k[&dDT3I*<Q@i.sco>4Uu;y|ebAw!P#tf?g{E+zL1}8RV(Sq`hMlO_Z$m0]', ⟦2-char-id⟧[⟦2-char-id⟧[36]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[13]] = ⟦2-char-id⟧[⟦2-char-id⟧[36]].length, ⟦2-char-id⟧[⟦2-char-id⟧[38]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[9]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[20]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[-⟦2-char-id⟧[67]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[-⟦2-char-id⟧[67]] < ⟦2-char-id⟧[⟦2-char-id⟧[13]]; ⟦2-char-id⟧[-⟦2-char-id⟧[67]]++)
+            if (⟦2-char-id⟧[⟦2-char-id⟧[46]] = ⟦2-char-id⟧[-⟦2-char-id⟧[68]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[36]][⟦2-char-id⟧[-⟦2-char-id⟧[67]]]), ⟦2-char-id⟧[⟦2-char-id⟧[46]] !== -⟦2-char-id⟧[2])
+              if (⟦2-char-id⟧[⟦2-char-id⟧[22]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[⟦2-char-id⟧[22]] = ⟦2-char-id⟧[⟦2-char-id⟧[46]];
               else {
-                MJ(⟦2-char-id⟧[⟦2-char-id⟧[43]] += ⟦2-char-id⟧[⟦2-char-id⟧[35]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[29]] |= ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]], ⟦2-char-id⟧[⟦2-char-id⟧[19]] += (⟦2-char-id⟧[⟦2-char-id⟧[43]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                UB(⟦2-char-id⟧[⟦2-char-id⟧[22]] += ⟦2-char-id⟧[⟦2-char-id⟧[46]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[9]] |= ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]], ⟦2-char-id⟧[⟦2-char-id⟧[20]] += (⟦2-char-id⟧[⟦2-char-id⟧[22]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                 do {
-                  MJ(⟦2-char-id⟧[⟦2-char-id⟧[23]].push(⟦2-char-id⟧[⟦2-char-id⟧[29]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[29]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[19]] -= ⟦2-char-id⟧[3])
-                } while (⟦2-char-id⟧[⟦2-char-id⟧[19]] > ⟦2-char-id⟧[6]);
-                ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]
-              } return ⟦2-char-id⟧[⟦2-char-id⟧[43]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[23]].push((⟦2-char-id⟧[⟦2-char-id⟧[29]] | ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]]) & ⟦2-char-id⟧[10]), rJ(⟦2-char-id⟧[⟦2-char-id⟧[23]])
-        }
-
-        function ⟦2-char-id⟧(...JJ) {
-          return ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[2]]]
-        }
-
-        function ⟦2-char-id⟧(...JJ) {
-          ⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2]
-        }
-        ⟦2-char-id⟧(120) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), MJ(⟦2-char-id⟧(⟦2-char-id⟧, mJ, ⟦2-char-id⟧), IJ(⟦2-char-id⟧, SJ, ⟦2-char-id⟧), UJ()[⟦2-char-id⟧(123)](⟦2-char-id⟧, SJ, ⟦2-char-id⟧));
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(124)](⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(125)](⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧ / ⟦2-char-id⟧,
-          ⟦2-char-id⟧ = Math[⟦2-char-id⟧(⟦2-char-id⟧[51])](⟦2-char-id⟧, ⟦2-char-id⟧[2]) + ⟦2-char-id⟧[0];
-        if (⟦2-char-id⟧ * ⟦2-char-id⟧ < ⟦2-char-id⟧()[⟦2-char-id⟧[82]](⟦2-char-id⟧)) {
-          function ⟦2-char-id⟧(...JJ) {
-            for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[-⟦2-char-id⟧[79]] = '0/;98x<)^|C!+RwY?h5]ZUpVK:g=72(@N>*PLDdOeruXzfoBcl#1nb[{sT%A6viM"k3IJy_&maqQ.W$,t}GEHjFS4~`', ⟦2-char-id⟧[⟦2-char-id⟧[1]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[2]] || ""), ⟦2-char-id⟧[-⟦2-char-id⟧[50]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].length, ⟦2-char-id⟧[⟦2-char-id⟧[85]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[29]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[19]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]), ⟦2-char-id⟧[-⟦2-char-id⟧[83]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[-⟦2-char-id⟧[83]] < ⟦2-char-id⟧[-⟦2-char-id⟧[50]]; ⟦2-char-id⟧[-⟦2-char-id⟧[83]]++)
-              if (⟦2-char-id⟧[⟦2-char-id⟧[84]] = ⟦2-char-id⟧[-⟦2-char-id⟧[79]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[-⟦2-char-id⟧[83]]]), ⟦2-char-id⟧[⟦2-char-id⟧[84]] !== -⟦2-char-id⟧[0])
-                if (⟦2-char-id⟧[⟦2-char-id⟧[6]] < ⟦2-char-id⟧[2]) ⟦2-char-id⟧[⟦2-char-id⟧[6]] = ⟦2-char-id⟧[⟦2-char-id⟧[84]];
-                else {
-                  MJ(⟦2-char-id⟧[⟦2-char-id⟧[6]] += ⟦2-char-id⟧[⟦2-char-id⟧[84]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[29]] |= ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]], ⟦2-char-id⟧[⟦2-char-id⟧[19]] += (⟦2-char-id⟧[⟦2-char-id⟧[6]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
-                  do {
-                    MJ(⟦2-char-id⟧[⟦2-char-id⟧[85]].push(⟦2-char-id⟧[⟦2-char-id⟧[29]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[29]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[19]] -= ⟦2-char-id⟧[3])
-                  } while (⟦2-char-id⟧[⟦2-char-id⟧[19]] > ⟦2-char-id⟧[6]);
-                  ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]
-                } return ⟦2-char-id⟧[⟦2-char-id⟧[6]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[85]].push((⟦2-char-id⟧[⟦2-char-id⟧[29]] | ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]]) & ⟦2-char-id⟧[10]), rJ(⟦2-char-id⟧[⟦2-char-id⟧[85]])
-          }
-
-          function ⟦2-char-id⟧(⟦2-char-id⟧) {
-            return typeof ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧[⟦2-char-id⟧]
-          }
-          ⟦2-char-id⟧()[⟦2-char-id⟧(⟦2-char-id⟧[86])](⟦2-char-id⟧, mJ, EJ, ⟦2-char-id⟧)
-        }
-        ⟦2-char-id⟧(⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧, 1, Math[⟦2-char-id⟧(⟦2-char-id⟧[51])](⟦2-char-id⟧[0], Math[⟦2-char-id⟧(⟦2-char-id⟧[87])](⟦2-char-id⟧[2], -⟦2-char-id⟧, ⟦2-char-id⟧[0] - ⟦2-char-id⟧ / ⟦2-char-id⟧))), UJ()[⟦2-char-id⟧(129)](⟦2-char-id⟧, mJ, ⟦2-char-id⟧))
+                  UB(⟦2-char-id⟧[⟦2-char-id⟧[38]].push(⟦2-char-id⟧[⟦2-char-id⟧[9]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[9]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[20]] -= ⟦2-char-id⟧[3])
+                } while (⟦2-char-id⟧[⟦2-char-id⟧[20]] > ⟦2-char-id⟧[22]);
+                ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]
+              } return ⟦2-char-id⟧[⟦2-char-id⟧[22]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[38]].push((⟦2-char-id⟧[⟦2-char-id⟧[9]] | ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]]) & ⟦2-char-id⟧[11]), vB(⟦2-char-id⟧[⟦2-char-id⟧[38]])
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
+        ⟦2-char-id⟧(⟦2-char-id⟧[73]) + ⟦2-char-id⟧[5] in ⟦2-char-id⟧ && ⟦2-char-id⟧(), UB(⟦2-char-id⟧(⟦2-char-id⟧, iB, ⟦2-char-id⟧), wB(⟦2-char-id⟧, zB, ⟦2-char-id⟧), yB()[⟦2-char-id⟧(162)](⟦2-char-id⟧, zB, ⟦2-char-id⟧));
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(163)](⟦2-char-id⟧),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(164)](⟦2-char-id⟧, ⟦2-char-id⟧) / ⟦2-char-id⟧[⟦2-char-id⟧[8]] / ⟦2-char-id⟧,
+          ⟦2-char-id⟧ = Math[⟦2-char-id⟧(⟦2-char-id⟧[72])](⟦2-char-id⟧, ⟦2-char-id⟧[1]) + ⟦2-char-id⟧[2];
+        ⟦2-char-id⟧[⟦2-char-id⟧[8]] * ⟦2-char-id⟧[⟦2-char-id⟧[8]] < ⟦2-char-id⟧()[⟦2-char-id⟧[69]](⟦2-char-id⟧) && ⟦2-char-id⟧()[⟦2-char-id⟧(166)](⟦2-char-id⟧, iB, tB, ⟦2-char-id⟧), UB(⟦2-char-id⟧[⟦2-char-id⟧[70]] = (⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[71]])(⟦2-char-id⟧[⟦2-char-id⟧[70]], 1, Math[⟦2-char-id⟧(⟦2-char-id⟧[72])](⟦2-char-id⟧[2], Math[⟦2-char-id⟧(167)](⟦2-char-id⟧[1], -⟦2-char-id⟧, ⟦2-char-id⟧[2] - ⟦2-char-id⟧ / ⟦2-char-id⟧[⟦2-char-id⟧[8]]))), yB()[⟦2-char-id⟧(168)](⟦2-char-id⟧, iB, ⟦2-char-id⟧))
       }
       const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-      ⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(130)](⟦2-char-id⟧, mJ, ⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[2]);
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧()[⟦2-char-id⟧(131)](⟦2-char-id⟧);
-      if (!⟦2-char-id⟧) {
-        function ⟦2-char-id⟧(...JJ) {
-          MJ(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[88]] = function(⟦2-char-id⟧) {
-            var ⟦2-char-id⟧, ZJ, FJ, UJ, ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
-            for (⟦2-char-id⟧(⟦2-char-id⟧ = [], ⟦2-char-id⟧ = ⟦2-char-id⟧[2]), ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(⟦2-char-id⟧ !== ⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧] > ⟦2-char-id⟧[⟦2-char-id⟧ - ⟦2-char-id⟧[0]] ? ⟦2-char-id⟧[⟦2-char-id⟧ - ⟦2-char-id⟧[0]] + ⟦2-char-id⟧[0] : ⟦2-char-id⟧[0]);
-            for (⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧[0]; ⟦2-char-id⟧ >= ⟦2-char-id⟧[2]; ⟦2-char-id⟧--) ⟦2-char-id⟧ !== ⟦2-char-id⟧ - ⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧] > ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧[0]] && (⟦2-char-id⟧[⟦2-char-id⟧] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧[0]] + ⟦2-char-id⟧[0])), ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧];
-            return ⟦2-char-id⟧
-          }, console.log(⟦2-char-id⟧[-⟦2-char-id⟧[88]]))
-        }
-        ⟦2-char-id⟧(⟦2-char-id⟧[78]) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ *= ⟦2-char-id⟧
+      if (⟦2-char-id⟧(⟦2-char-id⟧()[⟦2-char-id⟧(169)](⟦2-char-id⟧, iB, ⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[77]] = ⟦2-char-id⟧()[⟦2-char-id⟧(170)](⟦2-char-id⟧)), !⟦2-char-id⟧) {
+        function ⟦2-char-id⟧(...BB) {
+          for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = 'e08W;xdNC7g}@!1>G&:|Kqb.v=_[$n`/Z"^Poi{?6yst*~J5BuV+4R2Ec(AIH9Q#w%fz]D)<3UTLa,YrhXFjlOpkmSM', ⟦2-char-id⟧[⟦2-char-id⟧[0]] = "" + (⟦2-char-id⟧[⟦2-char-id⟧[1]] || ""), ⟦2-char-id⟧[⟦2-char-id⟧[27]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]].length, ⟦2-char-id⟧[⟦2-char-id⟧[14]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[64]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[⟦2-char-id⟧[45]] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[-⟦2-char-id⟧[73]] = -⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[74]] = ⟦2-char-id⟧[1]; ⟦2-char-id⟧[⟦2-char-id⟧[74]] < ⟦2-char-id⟧[⟦2-char-id⟧[27]]; ⟦2-char-id⟧[⟦2-char-id⟧[74]]++)
+            if (⟦2-char-id⟧[-⟦2-char-id⟧[75]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].indexOf(⟦2-char-id⟧[⟦2-char-id⟧[0]][⟦2-char-id⟧[⟦2-char-id⟧[74]]]), ⟦2-char-id⟧[-⟦2-char-id⟧[75]] !== -⟦2-char-id⟧[2])
+              if (⟦2-char-id⟧[-⟦2-char-id⟧[73]] < ⟦2-char-id⟧[1]) ⟦2-char-id⟧[-⟦2-char-id⟧[73]] = ⟦2-char-id⟧[-⟦2-char-id⟧[75]];
+              else {
+                UB(⟦2-char-id⟧[-⟦2-char-id⟧[73]] += ⟦2-char-id⟧[-⟦2-char-id⟧[75]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[64]] |= ⟦2-char-id⟧[-⟦2-char-id⟧[73]] << ⟦2-char-id⟧[⟦2-char-id⟧[45]], ⟦2-char-id⟧[⟦2-char-id⟧[45]] += (⟦2-char-id⟧[-⟦2-char-id⟧[73]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
+                do {
+                  UB(⟦2-char-id⟧[⟦2-char-id⟧[14]].push(⟦2-char-id⟧[⟦2-char-id⟧[64]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[64]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[45]] -= ⟦2-char-id⟧[3])
+                } while (⟦2-char-id⟧[⟦2-char-id⟧[45]] > ⟦2-char-id⟧[22]);
+                ⟦2-char-id⟧[-⟦2-char-id⟧[73]] = -⟦2-char-id⟧[2]
+              } return ⟦2-char-id⟧[-⟦2-char-id⟧[73]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[14]].push((⟦2-char-id⟧[⟦2-char-id⟧[64]] | ⟦2-char-id⟧[-⟦2-char-id⟧[73]] << ⟦2-char-id⟧[⟦2-char-id⟧[45]]) & ⟦2-char-id⟧[11]), vB(⟦2-char-id⟧[⟦2-char-id⟧[14]])
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
-                MJ(⟦2-char-id⟧[⟦2-char-id⟧[43]] += ⟦2-char-id⟧[⟦2-char-id⟧[35]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[47]] |= ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[-⟦2-char-id⟧[89]], ⟦2-char-id⟧[-⟦2-char-id⟧[89]] += (⟦2-char-id⟧[⟦2-char-id⟧[43]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                UB(⟦2-char-id⟧[⟦2-char-id⟧[22]] += ⟦2-char-id⟧[⟦2-char-id⟧[46]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[8]] |= ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[78]], ⟦2-char-id⟧[⟦2-char-id⟧[78]] += (⟦2-char-id⟧[⟦2-char-id⟧[22]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                 do {
-                  MJ(⟦2-char-id⟧[⟦2-char-id⟧[90]].push(⟦2-char-id⟧[⟦2-char-id⟧[47]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[47]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[-⟦2-char-id⟧[89]] -= ⟦2-char-id⟧[3])
-                } while (⟦2-char-id⟧[-⟦2-char-id⟧[89]] > ⟦2-char-id⟧[6]);
-                ⟦2-char-id⟧[⟦2-char-id⟧[43]] = -⟦2-char-id⟧[0]
-              } return ⟦2-char-id⟧[⟦2-char-id⟧[43]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[90]].push((⟦2-char-id⟧[⟦2-char-id⟧[47]] | ⟦2-char-id⟧[⟦2-char-id⟧[43]] << ⟦2-char-id⟧[-⟦2-char-id⟧[89]]) & ⟦2-char-id⟧[10]), rJ(⟦2-char-id⟧[⟦2-char-id⟧[90]])
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
+                  UB(⟦2-char-id⟧[⟦2-char-id⟧[38]].push(⟦2-char-id⟧[⟦2-char-id⟧[8]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[8]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[78]] -= ⟦2-char-id⟧[3])
+                } while (⟦2-char-id⟧[⟦2-char-id⟧[78]] > ⟦2-char-id⟧[22]);
+                ⟦2-char-id⟧[⟦2-char-id⟧[22]] = -⟦2-char-id⟧[2]
+              } return ⟦2-char-id⟧[⟦2-char-id⟧[22]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[38]].push((⟦2-char-id⟧[⟦2-char-id⟧[8]] | ⟦2-char-id⟧[⟦2-char-id⟧[22]] << ⟦2-char-id⟧[⟦2-char-id⟧[78]]) & ⟦2-char-id⟧[11]), vB(⟦2-char-id⟧[⟦2-char-id⟧[38]])
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
-                  MJ(⟦2-char-id⟧[⟦2-char-id⟧[6]] += ⟦2-char-id⟧[⟦2-char-id⟧[35]] * ⟦2-char-id⟧[7], ⟦2-char-id⟧[⟦2-char-id⟧[29]] |= ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]], ⟦2-char-id⟧[⟦2-char-id⟧[19]] += (⟦2-char-id⟧[⟦2-char-id⟧[6]] & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                  UB(⟦2-char-id⟧[⟦2-char-id⟧[47]] += ⟦2-char-id⟧[-⟦2-char-id⟧[80]] * ⟦2-char-id⟧[30], ⟦2-char-id⟧[⟦2-char-id⟧[81]] |= ⟦2-char-id⟧[⟦2-char-id⟧[47]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]], ⟦2-char-id⟧[⟦2-char-id⟧[20]] += (⟦2-char-id⟧[⟦2-char-id⟧[47]] & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                   do {
-                    MJ(⟦2-char-id⟧[⟦2-char-id⟧[42]].push(⟦2-char-id⟧[⟦2-char-id⟧[29]] & ⟦2-char-id⟧[10]), ⟦2-char-id⟧[⟦2-char-id⟧[29]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[19]] -= ⟦2-char-id⟧[3])
-                  } while (⟦2-char-id⟧[⟦2-char-id⟧[19]] > ⟦2-char-id⟧[6]);
-                  ⟦2-char-id⟧[⟦2-char-id⟧[6]] = -⟦2-char-id⟧[0]
-                } return ⟦2-char-id⟧[⟦2-char-id⟧[6]] > -⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[42]].push((⟦2-char-id⟧[⟦2-char-id⟧[29]] | ⟦2-char-id⟧[⟦2-char-id⟧[6]] << ⟦2-char-id⟧[⟦2-char-id⟧[19]]) & ⟦2-char-id⟧[10]), rJ(⟦2-char-id⟧[⟦2-char-id⟧[42]])
+                    UB(⟦2-char-id⟧[⟦2-char-id⟧[38]].push(⟦2-char-id⟧[⟦2-char-id⟧[81]] & ⟦2-char-id⟧[11]), ⟦2-char-id⟧[⟦2-char-id⟧[81]] >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧[⟦2-char-id⟧[20]] -= ⟦2-char-id⟧[3])
+                  } while (⟦2-char-id⟧[⟦2-char-id⟧[20]] > ⟦2-char-id⟧[22]);
+                  ⟦2-char-id⟧[⟦2-char-id⟧[47]] = -⟦2-char-id⟧[2]
+                } return ⟦2-char-id⟧[⟦2-char-id⟧[47]] > -⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[38]].push((⟦2-char-id⟧[⟦2-char-id⟧[81]] | ⟦2-char-id⟧[⟦2-char-id⟧[47]] << ⟦2-char-id⟧[⟦2-char-id⟧[20]]) & ⟦2-char-id⟧[11]), vB(⟦2-char-id⟧[⟦2-char-id⟧[38]])
           }
 
-          function ⟦2-char-id⟧(⟦2-char-id⟧) {
-            return typeof ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧[16] ? ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧[⟦2-char-id⟧]
+          function ⟦2-char-id⟧(...BB) {
+            return ⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], typeof ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] === ⟦2-char-id⟧[17] ? ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]) : ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧[1]]]
           }
 
-          function ⟦2-char-id⟧(...JJ) {
-            MJ(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[14]] = function(...JJ) {
-              for (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[11]] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[⟦2-char-id⟧[2]].length, ⟦2-char-id⟧[⟦2-char-id⟧[1]] = [], ⟦2-char-id⟧[⟦2-char-id⟧[96]] = ⟦2-char-id⟧[2]), ⟦2-char-id⟧[⟦2-char-id⟧[42]] = ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[42]] < ⟦2-char-id⟧[⟦2-char-id⟧[0]]; ⟦2-char-id⟧[⟦2-char-id⟧[42]]++) ⟦2-char-id⟧[⟦2-char-id⟧[1]].push(⟦2-char-id⟧[⟦2-char-id⟧[42]] !== ⟦2-char-id⟧[2] && ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[42]]] > ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[42]] - ⟦2-char-id⟧[0]] ? ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[42]] - ⟦2-char-id⟧[0]] + ⟦2-char-id⟧[0] : ⟦2-char-id⟧[0]);
-              for (⟦2-char-id⟧[⟦2-char-id⟧[47]] = ⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0]; ⟦2-char-id⟧[⟦2-char-id⟧[47]] >= ⟦2-char-id⟧[2]; ⟦2-char-id⟧[⟦2-char-id⟧[47]]--) ⟦2-char-id⟧[⟦2-char-id⟧[47]] !== ⟦2-char-id⟧[⟦2-char-id⟧[0]] - ⟦2-char-id⟧[0] && ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]]] > ⟦2-char-id⟧[⟦2-char-id⟧[2]][⟦2-char-id⟧[⟦2-char-id⟧[47]] + ⟦2-char-id⟧[0]] && (⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[47]]] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[47]]], ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[47]] + ⟦2-char-id⟧[0]] + ⟦2-char-id⟧[0])), ⟦2-char-id⟧[⟦2-char-id⟧[96]] += ⟦2-char-id⟧[⟦2-char-id⟧[1]][⟦2-char-id⟧[⟦2-char-id⟧[47]]];
-              return ⟦2-char-id⟧[⟦2-char-id⟧[96]]
-            }, console.log(⟦2-char-id⟧[⟦2-char-id⟧[14]]))
+          function ⟦2-char-id⟧() {
+            var ⟦2-char-id⟧ = function(...BB) {
+              UB(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], this.Kk = ⟦2-char-id⟧[⟦2-char-id⟧[1]], this.length = ⟦2-char-id⟧[1], this.map = {}, this.head = ⟦2-char-id⟧[53], this.tail = ⟦2-char-id⟧[53])
+            };
+            ⟦2-char-id⟧(⟦2-char-id⟧.prototype.get = function(...BB) {
+              var ⟦2-char-id⟧;
+              return ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]]), ⟦2-char-id⟧ ? (this.remove(⟦2-char-id⟧), this.insert(⟦2-char-id⟧.key, ⟦2-char-id⟧.val), ⟦2-char-id⟧.val) : -⟦2-char-id⟧[2]
+            }, ⟦2-char-id⟧.prototype.put = function(...BB) {
+              UB(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[36], this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]] ? (this.remove(this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]]), this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])) : this.length === this.Kk ? (this.remove(this.head), this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])) : (this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]]), this.length++))
+            }, ⟦2-char-id⟧.prototype.remove = function(...BB) {
+              UB(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[-⟦2-char-id⟧[82]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].prev, ⟦2-char-id⟧[⟦2-char-id⟧[0]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].next), ⟦2-char-id⟧[⟦2-char-id⟧[0]] && (⟦2-char-id⟧[⟦2-char-id⟧[0]].prev = ⟦2-char-id⟧[-⟦2-char-id⟧[82]]), ⟦2-char-id⟧[-⟦2-char-id⟧[82]] && (⟦2-char-id⟧[-⟦2-char-id⟧[82]].next = ⟦2-char-id⟧[⟦2-char-id⟧[0]]), this.head === ⟦2-char-id⟧[⟦2-char-id⟧[1]] && (this.head = ⟦2-char-id⟧[⟦2-char-id⟧[0]]), this.tail === ⟦2-char-id⟧[⟦2-char-id⟧[1]] && (this.tail = ⟦2-char-id⟧[-⟦2-char-id⟧[82]]), delete this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]].key]
+            }, ⟦2-char-id⟧.prototype.insert = function(...BB) {
+              UB(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[36], ⟦2-char-id⟧[⟦2-char-id⟧[5]] = new List(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]]), this.tail ? (this.tail.next = ⟦2-char-id⟧[⟦2-char-id⟧[5]], ⟦2-char-id⟧[⟦2-char-id⟧[5]].prev = this.tail, this.tail = ⟦2-char-id⟧[⟦2-char-id⟧[5]]) : (this.tail = ⟦2-char-id⟧[⟦2-char-id⟧[5]], this.head = ⟦2-char-id⟧[⟦2-char-id⟧[5]]), this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]] = ⟦2-char-id⟧[⟦2-char-id⟧[5]])
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
-            var ⟦2-char-id⟧, ZJ, FJ, UJ, eJ, XJ, ⟦2-char-id⟧;
-            for (⟦2-char-id⟧(⟦2-char-id⟧ = "" + (⟦2-char-id⟧ || ""), ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = [], ⟦2-char-id⟧ = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = -⟦2-char-id⟧[0]), ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
-              var ⟦2-char-id⟧ = 'ablxF8n[tf(N#.gWJ6E3)S0%zkZXVKqA5o{QIPmM=i+&2e1TRYpUH$_dcBuO/GjD?<!Lyh*r`|Cv;~49^:>,w]7@}s"'.indexOf(⟦2-char-id⟧[⟦2-char-id⟧]);
-              if (⟦2-char-id⟧ !== -⟦2-char-id⟧[0])
-                if (⟦2-char-id⟧ < ⟦2-char-id⟧[2]) ⟦2-char-id⟧ = ⟦2-char-id⟧;
+            var ⟦2-char-id⟧, dB, VB, yB, pB, lB, ⟦2-char-id⟧;
+            for (⟦2-char-id⟧(⟦2-char-id⟧ = "" + (⟦2-char-id⟧ || ""), ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = [], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = -⟦2-char-id⟧[2]), ⟦2-char-id⟧ = ⟦2-char-id⟧[1]; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
+              var ⟦2-char-id⟧ = 'GBNkalFPWjiVUhLXrbEAdtQefSDqCJKR14oHI|68&{Y>T5n*$)`}?,]#s/~:wZ"!;<cxgy@0pmO+_[2M%=3z7.v(9^u'.indexOf(⟦2-char-id⟧[⟦2-char-id⟧]);
+              if (⟦2-char-id⟧ !== -⟦2-char-id⟧[2])
+                if (⟦2-char-id⟧ < ⟦2-char-id⟧[1]) ⟦2-char-id⟧ = ⟦2-char-id⟧;
                 else {
-                  MJ(⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧[7], ⟦2-char-id⟧ |= ⟦2-char-id⟧ << ⟦2-char-id⟧, ⟦2-char-id⟧ += (⟦2-char-id⟧ & ⟦2-char-id⟧[38]) > ⟦2-char-id⟧[39] ? ⟦2-char-id⟧[40] : ⟦2-char-id⟧[41]);
+                  UB(⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧[30], ⟦2-char-id⟧ |= ⟦2-char-id⟧ << ⟦2-char-id⟧, ⟦2-char-id⟧ += (⟦2-char-id⟧ & ⟦2-char-id⟧[31]) > ⟦2-char-id⟧[32] ? ⟦2-char-id⟧[33] : ⟦2-char-id⟧[34]);
                   do {
-                    MJ(⟦2-char-id⟧.push(⟦2-char-id⟧ & ⟦2-char-id⟧[10]), ⟦2-char-id⟧ >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧ -= ⟦2-char-id⟧[3])
-                  } while (⟦2-char-id⟧ > ⟦2-char-id⟧[6]);
-                  ⟦2-char-id⟧ = -⟦2-char-id⟧[0]
+                    UB(⟦2-char-id⟧.push(⟦2-char-id⟧ & ⟦2-char-id⟧[11]), ⟦2-char-id⟧ >>= ⟦2-char-id⟧[3], ⟦2-char-id⟧ -= ⟦2-char-id⟧[3])
+                  } while (⟦2-char-id⟧ > ⟦2-char-id⟧[22]);
+                  ⟦2-char-id⟧ = -⟦2-char-id⟧[2]
                 }
             }
-            return ⟦2-char-id⟧ > -⟦2-char-id⟧[0] && ⟦2-char-id⟧.push((⟦2-char-id⟧ | ⟦2-char-id⟧ << ⟦2-char-id⟧) & ⟦2-char-id⟧[10]), rJ(⟦2-char-id⟧)
+            return ⟦2-char-id⟧ > -⟦2-char-id⟧[2] && ⟦2-char-id⟧.push((⟦2-char-id⟧ | ⟦2-char-id⟧ << ⟦2-char-id⟧) & ⟦2-char-id⟧[11]), vB(⟦2-char-id⟧)
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
+              UB(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], this.Kk = ⟦2-char-id⟧[⟦2-char-id⟧[1]], this.length = ⟦2-char-id⟧[1], this.map = {}, this.head = ⟦2-char-id⟧[53], this.tail = ⟦2-char-id⟧[53])
+            }, ⟦2-char-id⟧.prototype.get = function(...BB) {
+              var ⟦2-char-id⟧;
+              return ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧ = this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]]), ⟦2-char-id⟧ ? (this.remove(⟦2-char-id⟧), this.insert(⟦2-char-id⟧.key, ⟦2-char-id⟧.val), ⟦2-char-id⟧.val) : -⟦2-char-id⟧[2]
+            }, ⟦2-char-id⟧.prototype.put = function(...BB) {
+              UB(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[36], this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]] ? (this.remove(this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]]]), this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])) : this.length === this.Kk ? (this.remove(this.head), this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]])) : (this.insert(⟦2-char-id⟧[⟦2-char-id⟧[1]], ⟦2-char-id⟧[⟦2-char-id⟧[2]]), this.length++))
+            }, ⟦2-char-id⟧.prototype.remove = function(...BB) {
+              UB(⟦2-char-id⟧[⟦2-char-id⟧[12]] = ⟦2-char-id⟧[2], ⟦2-char-id⟧[⟦2-char-id⟧[2]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].prev, ⟦2-char-id⟧[⟦2-char-id⟧[83]] = ⟦2-char-id⟧[⟦2-char-id⟧[1]].next), ⟦2-char-id⟧[⟦2-char-id⟧[83]] && (⟦2-char-id⟧[⟦2-char-id⟧[83]].prev = ⟦2-char-id⟧[⟦2-char-id⟧[2]]), ⟦2-char-id⟧[⟦2-char-id⟧[2]] && (⟦2-char-id⟧[⟦2-char-id⟧[2]].next = ⟦2-char-id⟧[⟦2-char-id⟧[83]]), this.head === ⟦2-char-id⟧[⟦2-char-id⟧[1]] && (this.head = ⟦2-char-id⟧[⟦2-char-id⟧[83]]), this.tail === ⟦2-char-id⟧[⟦2-char-id⟧[1]] && (this.tail = ⟦2-char-id⟧[⟦2-char-id⟧[2]]), delete this.map[⟦2-char-id⟧[⟦2-char-id⟧[1]].key]
+            }, ⟦2-char-id⟧.prototype.insert = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+              var ⟦2-char-id⟧ = new List(⟦2-char-id⟧, ⟦2-char-id⟧);
+              ⟦2-char-id⟧(this.tail ? (this.tail.next = ⟦2-char-id⟧, ⟦2-char-id⟧.prev = this.tail, this.tail = ⟦2-char-id⟧) : (this.tail = ⟦2-char-id⟧, this.head = ⟦2-char-id⟧), this.map[⟦2-char-id⟧] = ⟦2-char-id⟧)
+            }, console.log(⟦2-char-id⟧))
           }
-          ⟦2-char-id⟧(151) + "U" in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ *= ⟦2-char-id⟧
-        }
-        ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), MJ(⟦2-char-id⟧()[⟦2-char-id⟧(152)](⟦2-char-id⟧, WJ, ⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧(153) + ⟦2-char-id⟧(⟦2-char-id⟧[88])](⟦2-char-id⟧))
+          ⟦2-char-id⟧(⟦2-char-id⟧[76]) in ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ *= ⟦2-char-id⟧
+        }
+        ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), UB(⟦2-char-id⟧()[⟦2-char-id⟧(190)](⟦2-char-id⟧, oB, ⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧[38]][⟦2-char-id⟧(191) + ⟦2-char-id⟧(⟦2-char-id⟧[68])](⟦2-char-id⟧))
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
<summary>Hunk 39 · Change · +5 / -5</summary>

```diff
@@ -1117,17 +1109,17 @@
         airborneFallSpeedLimit: null
       };
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, AJ, qJ, jJ, ⟦2-char-id⟧) {
-      if (⟦2-char-id⟧.speed) return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ZJ, AJ, qJ, jJ, YJ, ⟦2-char-id⟧), void(⟦2-char-id⟧.ticksToReachMaxIdleFriction = ⟦2-char-id⟧);
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, JB, YB, gB, ⟦2-char-id⟧) {
+      if (⟦2-char-id⟧.speed) return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, dB, JB, YB, gB, oB, ⟦2-char-id⟧), void(⟦2-char-id⟧.ticksToReachMaxIdleFriction = ⟦2-char-id⟧);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.isOnGround(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.bloxd.getSyncedClientOptions(⟦2-char-id⟧.bloxd.getPlayerReader(⟦2-char-id⟧)),
         ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.bloxd.getClientPredictedOption(⟦2-char-id⟧, "groundFrictionScale") : ⟦2-char-id⟧.groundFrictionScale,
         ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.bloxd.getClientPredictedOption(⟦2-char-id⟧, "airFrictionScale") : ⟦2-char-id⟧.airFrictionScale,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? sJ : ⟦2-char-id⟧,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? OB : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.ticksToReachMaxIdleFriction / ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧, GJ, ⟦2-char-id⟧);
-      ⟦2-char-id⟧.friction = ⟦2-char-id⟧.standingFriction * ((null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.bloxd.getClientPredictedOption(⟦2-char-id⟧, "airMomentumConservation") : ⟦2-char-id⟧.airMomentumConservation) ? rJ : ⟦2-char-id⟧), ⟦2-char-id⟧.ticksToReachMaxIdleFriction > 0 && ⟦2-char-id⟧.ticksToReachMaxIdleFriction--
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧, uB, ⟦2-char-id⟧);
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
<summary><code>bundles/bloxd.io/chunks/js/209.js</code> · modified · +143 / -143</summary>

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
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -86,8 +86,8 @@
       return ⟦2-char-id⟧ === ⟦2-char-id⟧.WGSL
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? ZJ : ⟦2-char-id⟧
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? dB : ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = new Map([
       ["int", "i32"],
```

</details>

<details>
<summary>Hunk 4 · Change · +34 / -34</summary>

```diff
@@ -103,52 +103,52 @@
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
       return ⟦2-char-id⟧(⟦2-char-id⟧, "int", ⟦2-char-id⟧)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `var ${ZJ}: ${AJ(JJ,cJ)} = ${FJ};` : `${nJ(JJ,eJ)}${cJ} ${ZJ} = ${FJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `var ${ZJ}: ${AJ(JJ,cJ)};` : `${cJ} ${ZJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `const ${ZJ}: ${AJ(JJ,cJ)} = ${FJ};` : `const ${cJ} ${ZJ} = ${FJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `var ${dB}: ${JB(BB,TB)} = ${VB};` : `${DB(BB,pB)}${TB} ${dB} = ${VB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `var ${dB}: ${JB(BB,TB)};` : `${TB} ${dB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `const ${dB}: ${JB(BB,TB)} = ${VB};` : `const ${TB} ${dB} = ${VB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧(⟦2-char-id⟧)) {
-        return `fn ${ZJ}(${FJ.map((cJ=>`${⟦2-char-id⟧.name}: ${AJ(⟦2-char-id⟧,⟦2-char-id⟧.type)}`)).join(", ")}) -> ${AJ(JJ,cJ)} {${eJ}}`
-      }
-      return `${cJ} ${ZJ}(${FJ.map((JJ=>`${⟦2-char-id⟧.type} ${⟦2-char-id⟧.name}`)).join(", ")}) {${eJ}}`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return !⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧) ? "" : `${cJ} `
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `attribute ${cJ}: ${AJ(JJ,ZJ)};` : `attribute ${nJ(JJ,FJ)}${ZJ} ${cJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `varying ${cJ}: ${AJ(JJ,ZJ)};` : `varying ${nJ(JJ,FJ)}${ZJ} ${cJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `uniform ${cJ}: ${AJ(JJ,ZJ)};` : `uniform ${ZJ} ${cJ};`
+        return `fn ${dB}(${VB.map((TB=>`${⟦2-char-id⟧.name}: ${JB(⟦2-char-id⟧,⟦2-char-id⟧.type)}`)).join(", ")}) -> ${JB(BB,TB)} {${pB}}`
+      }
+      return `${TB} ${dB}(${VB.map((BB=>`${⟦2-char-id⟧.type} ${⟦2-char-id⟧.name}`)).join(", ")}) {${pB}}`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return !⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧) ? "" : `${TB} `
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `attribute ${TB}: ${JB(BB,dB)};` : `attribute ${DB(BB,VB)}${dB} ${TB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `varying ${TB}: ${JB(BB,dB)};` : `varying ${DB(BB,VB)}${dB} ${TB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `uniform ${TB}: ${JB(BB,dB)};` : `uniform ${dB} ${TB};`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +22 / -22</summary>

```diff
@@ -156,30 +156,30 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${cJ}}` : `void main() {${cJ}}`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${cJ}}` : `void main() {${cJ}}`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${TB}}` : `void main() {${TB}}`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${TB}}` : `void main() {${TB}}`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧(⟦2-char-id⟧)) {
-        return [`var ${cJ}Sampler: sampler;`, `var ${cJ}: ${"2dArray"===ZJ?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
-      }
-      return `uniform highp ${"2dArray"===ZJ?"sampler2DArray":"sampler2D"} ${cJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `textureSample(${cJ}, ${cJ}Sampler, ${ZJ})` : `texture2D(${cJ}, ${ZJ})`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+        return [`var ${TB}Sampler: sampler;`, `var ${TB}: ${"2dArray"===dB?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+      }
+      return `uniform highp ${"2dArray"===dB?"sampler2DArray":"sampler2D"} ${TB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `textureSample(${TB}, ${TB}Sampler, ${dB})` : `texture2D(${TB}, ${dB})`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧(⟦2-char-id⟧)) {
-        return `${eJ?"textureSampleLevel":"textureSample"}(${cJ}, ${cJ}Sampler, ${ZJ}, ${jJ(JJ,`round(${FJ})`)}${eJ?`, ${eJ}`:""})`
-      }
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, "vec3", ZJ, ⟦2-char-id⟧);
-      return ⟦2-char-id⟧ ? `textureLod(${cJ}, ${XJ}, ${eJ})` : `texture(${cJ}, ${XJ})`
+        return `${pB?"textureSampleLevel":"textureSample"}(${TB}, ${TB}Sampler, ${dB}, ${gB(BB,`round(${VB})`)}${pB?`, ${pB}`:""})`
+      }
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, "vec3", dB, ⟦2-char-id⟧);
+      return ⟦2-char-id⟧ ? `textureLod(${TB}, ${lB}, ${pB})` : `texture(${TB}, ${lB})`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +17 / -17</summary>

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
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
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
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `frame.${TB}` : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 7 · Change · +31 / -31</summary>

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
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `select(${FJ}, ${ZJ}, ${cJ})` : `((${cJ}) ? (${ZJ}) : (${FJ}))`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `((${cJ}) - (${ZJ}) * floor((${cJ}) / (${ZJ})))` : `mod(${cJ}, ${ZJ})`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${cJ} = vec4f(${ZJ}, ${cJ}.a);` : `${cJ}.rgb = ${ZJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${cJ} = vec4f(${cJ}.rgb * (${ZJ}), ${cJ}.a);` : `${cJ}.rgb *= ${ZJ};`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
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
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `select(${VB}, ${dB}, ${TB})` : `((${TB}) ? (${dB}) : (${VB}))`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `((${TB}) - (${dB}) * floor((${TB}) / (${dB})))` : `mod(${TB}, ${dB})`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${TB} = vec4f(${dB}, ${TB}.a);` : `${TB}.rgb = ${dB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧) ? `${TB} = vec4f(${TB}.rgb * (${dB}), ${TB}.a);` : `${TB}.rgb *= ${dB};`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
<summary><code>bundles/bloxd.io/chunks/js/210.js</code> · modified · +51 / -51</summary>

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
<summary>Hunk 3 · Change · +12 / -12</summary>

```diff
@@ -22,36 +22,36 @@
       return Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧) <= ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
       return ⟦2-char-id⟧ < ⟦2-char-id⟧ - ⟦2-char-id⟧ || ⟦2-char-id⟧ > ⟦2-char-id⟧ + ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? JJ : Math.random() * (⟦2-char-id⟧ - ⟦2-char-id⟧) + ⟦2-char-id⟧
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? BB : Math.random() * (⟦2-char-id⟧ - ⟦2-char-id⟧) + ⟦2-char-id⟧
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧, 360);
       return ⟦2-char-id⟧ > 180 && (⟦2-char-id⟧ -= 360), ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧(⟦2-char-id⟧)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = ⟦2-char-id⟧ != ⟦2-char-id⟧ ? ⟦2-char-id⟧((⟦2-char-id⟧ - ⟦2-char-id⟧) / (⟦2-char-id⟧ - ⟦2-char-id⟧)) : 0, FJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧ = ⟦2-char-id⟧ != ⟦2-char-id⟧ ? ⟦2-char-id⟧((⟦2-char-id⟧ - ⟦2-char-id⟧) / (⟦2-char-id⟧ - ⟦2-char-id⟧)) : 0, VB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
       return ⟦2-char-id⟧ * (2 * ⟦2-char-id⟧ - 3 * ⟦2-char-id⟧ + 1) + ⟦2-char-id⟧ * (-2 * ⟦2-char-id⟧ + 3 * ⟦2-char-id⟧) + ⟦2-char-id⟧ * (⟦2-char-id⟧ - 2 * ⟦2-char-id⟧ + ⟦2-char-id⟧) + ⟦2-char-id⟧ * (⟦2-char-id⟧ - ⟦2-char-id⟧)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
       return 6 * (⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧ + (3 * ⟦2-char-id⟧ - 4 * ⟦2-char-id⟧ + 1) * ⟦2-char-id⟧ + 6 * (-⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧ + (3 * ⟦2-char-id⟧ - 2 * ⟦2-char-id⟧) * ⟦2-char-id⟧
     }
```

</details>

<details>
<summary>Hunk 4 · Change · +3 / -3</summary>

```diff
@@ -88,17 +88,17 @@
       return ⟦2-char-id⟧ - Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧) * ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return (⟦2-char-id⟧ - ⟦2-char-id⟧) / (⟦2-char-id⟧ - ⟦2-char-id⟧)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧ * (⟦2-char-id⟧ - ⟦2-char-id⟧) + ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧, 360);
-      return ⟦2-char-id⟧ > 180 && (⟦2-char-id⟧ -= 360), ZJ
+      return ⟦2-char-id⟧ > 180 && (⟦2-char-id⟧ -= 360), dB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +12 / -12</summary>

```diff
@@ -106,33 +106,33 @@
       return ⟦2-char-id⟧ - Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
       return ⟦2-char-id⟧ = -2 * ⟦2-char-id⟧ * ⟦2-char-id⟧ * ⟦2-char-id⟧ + 3 * ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * (1 - ⟦2-char-id⟧)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧) <= ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧ + Math.sign(⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧, FJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧) <= ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧ + Math.sign(⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧, VB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
       let ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = -⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧), UJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧ = -⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧), yB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return (⟦2-char-id⟧ - ⟦2-char-id⟧) / (⟦2-char-id⟧ - ⟦2-char-id⟧)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return (⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧ + ⟦2-char-id⟧
     }
 
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
<summary>Hunk 7 · Change · +5 / -5</summary>

```diff
@@ -185,20 +185,20 @@
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
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
         if ("function" !== typeof ⟦2-char-id⟧) return null;
         const ⟦2-char-id⟧ = function() {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.length,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.previous.apply(⟦2-char-id⟧, arguments);
-          return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), eJ
+          return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), pB
         };
         return ⟦2-char-id⟧.next = ⟦2-char-id⟧, ⟦2-char-id⟧.previous = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, () => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.previous;
```

</details>

<details>
<summary>Hunk 8 · Change · +3 / -3</summary>

```diff
@@ -206,16 +206,16 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.next;
           ⟦2-char-id⟧ ? (⟦2-char-id⟧.next = ⟦2-char-id⟧, ⟦2-char-id⟧.previous = ⟦2-char-id⟧) : (⟦2-char-id⟧.next = void 0, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧), ⟦2-char-id⟧.next = void 0, ⟦2-char-id⟧.previous = void 0
         }
-      }(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧)));
+      }(⟦2-char-id⟧, dB, ⟦2-char-id⟧)));
       return () => {
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧?.()
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
<summary><code>bundles/bloxd.io/chunks/js/211.js</code> · modified · +317 / -317</summary>

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
@@ -93,7 +93,7 @@
         ⟦2-char-id⟧[⟦2-char-id⟧].push(⟦2-char-id⟧)
       }
     }, ⟦2-char-id⟧.freeUint8 = ⟦2-char-id⟧.freeUint16 = ⟦2-char-id⟧.freeUint32 = ⟦2-char-id⟧.freeInt8 = ⟦2-char-id⟧.freeInt16 = ⟦2-char-id⟧.freeInt32 = ⟦2-char-id⟧.freeFloat32 = ⟦2-char-id⟧.freeFloat = ⟦2-char-id⟧.freeFloat64 = ⟦2-char-id⟧.freeDouble = ⟦2-char-id⟧.freeUint8Clamped = ⟦2-char-id⟧.freeDataView = function(⟦2-char-id⟧) {
-      YJ(⟦2-char-id⟧.buffer)
+      oB(⟦2-char-id⟧.buffer)
     }, ⟦2-char-id⟧.freeArrayBuffer = ⟦2-char-id⟧, ⟦2-char-id⟧.freeBuffer = function(⟦2-char-id⟧) {
       ⟦2-char-id⟧[⟦2-char-id⟧.log2(⟦2-char-id⟧.length)].push(⟦2-char-id⟧)
     }, ⟦2-char-id⟧.malloc = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -132,10 +132,10 @@
       for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 32; ++⟦2-char-id⟧) ⟦2-char-id⟧.UINT8[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.UINT16[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.UINT32[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.INT8[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.INT16[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.INT32[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.FLOAT[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.DOUBLE[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧.UINT8C[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧[⟦2-char-id⟧].length = 0, ⟦2-char-id⟧[⟦2-char-id⟧].length = 0
     }
   },
-  37270: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  37225: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = 32;
-      return (⟦2-char-id⟧ &= -⟦2-char-id⟧) && ⟦2-char-id⟧--, 65535 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 16), 16711935 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 8), 252645135 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 4), 858993459 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 2), 1431655765 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 1), cJ
+      return (⟦2-char-id⟧ &= -⟦2-char-id⟧) && ⟦2-char-id⟧--, 65535 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 16), 16711935 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 8), 252645135 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 4), 858993459 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 2), 1431655765 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 1), TB
     }
     ⟦2-char-id⟧.INT_BITS = 32, ⟦2-char-id⟧.INT_MAX = 2147483647, ⟦2-char-id⟧.INT_MIN = -1 << 31, ⟦2-char-id⟧.sign = function(⟦2-char-id⟧) {
       return (⟦2-char-id⟧ > 0) - (⟦2-char-id⟧ < 0)
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -177,7 +177,7 @@
       return (⟦2-char-id⟧ = 1431655765 & ((⟦2-char-id⟧ = 858993459 & ((⟦2-char-id⟧ = 252645135 & ((⟦2-char-id⟧ = 16711935 & ((⟦2-char-id⟧ &= 65535) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2)) | ⟦2-char-id⟧ << 1)) | (⟦2-char-id⟧ = 1431655765 & ((⟦2-char-id⟧ = 858993459 & ((⟦2-char-id⟧ = 252645135 & ((⟦2-char-id⟧ = 16711935 & ((⟦2-char-id⟧ &= 65535) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2)) | ⟦2-char-id⟧ << 1)) << 1
     }, ⟦2-char-id⟧.deinterleave2 = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return (⟦2-char-id⟧ = 65535 & ((⟦2-char-id⟧ = 16711935 & ((⟦2-char-id⟧ = 252645135 & ((⟦2-char-id⟧ = 858993459 & ((⟦2-char-id⟧ = ⟦2-char-id⟧ >>> ⟦2-char-id⟧ & 1431655765) | ⟦2-char-id⟧ >>> 1)) | ⟦2-char-id⟧ >>> 2)) | ⟦2-char-id⟧ >>> 4)) | ⟦2-char-id⟧ >>> 16)) << 16 >> 16
-    }, ⟦2-char-id⟧.interleave3 = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    }, ⟦2-char-id⟧.interleave3 = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧ = 1227133513 & ((⟦2-char-id⟧ = 3272356035 & ((⟦2-char-id⟧ = 251719695 & ((⟦2-char-id⟧ = 4278190335 & ((⟦2-char-id⟧ &= 1023) | ⟦2-char-id⟧ << 16)) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2), (⟦2-char-id⟧ |= (⟦2-char-id⟧ = 1227133513 & ((⟦2-char-id⟧ = 3272356035 & ((⟦2-char-id⟧ = 251719695 & ((⟦2-char-id⟧ = 4278190335 & ((⟦2-char-id⟧ &= 1023) | ⟦2-char-id⟧ << 16)) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2)) << 1) | (⟦2-char-id⟧ = 1227133513 & ((⟦2-char-id⟧ = 3272356035 & ((⟦2-char-id⟧ = 251719695 & ((⟦2-char-id⟧ = 4278190335 & ((⟦2-char-id⟧ &= 1023) | ⟦2-char-id⟧ << 16)) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2)) << 2
     }, ⟦2-char-id⟧.deinterleave3 = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return (⟦2-char-id⟧ = 1023 & ((⟦2-char-id⟧ = 4278190335 & ((⟦2-char-id⟧ = 251719695 & ((⟦2-char-id⟧ = 3272356035 & ((⟦2-char-id⟧ = ⟦2-char-id⟧ >>> ⟦2-char-id⟧ & 1227133513) | ⟦2-char-id⟧ >>> 2)) | ⟦2-char-id⟧ >>> 4)) | ⟦2-char-id⟧ >>> 8)) | ⟦2-char-id⟧ >>> 16)) << 22 >> 22
```

</details>

<details>
<summary>Hunk 5 · Change · +9 / -9</summary>

```diff
@@ -186,25 +186,25 @@
       return ⟦2-char-id⟧ + 1 | (~⟦2-char-id⟧ & -~⟦2-char-id⟧) - 1 >>> ⟦2-char-id⟧(⟦2-char-id⟧) + 1
     }
   },
-  37262: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+  37213: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       switch (arguments.length) {
         case 1:
-          return ⟦2-char-id⟧ = [], jJ(⟦2-char-id⟧ = ⟦2-char-id⟧, UJ, YJ, !0), ⟦2-char-id⟧;
+          return ⟦2-char-id⟧ = [], gB(⟦2-char-id⟧ = ⟦2-char-id⟧, yB, oB, !0), ⟦2-char-id⟧;
         case 2:
-          return "function" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, JJ, cJ, !0) : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return ⟦2-char-id⟧ = [], jJ(⟦2-char-id⟧, cJ, YJ, !1), FJ
+          return "function" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, BB, TB, !0) : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+            return ⟦2-char-id⟧ = [], gB(⟦2-char-id⟧, TB, oB, !1), VB
           }(⟦2-char-id⟧, ⟦2-char-id⟧);
         case 3:
-          return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, !1);
+          return ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, !1);
         default:
           throw new Error("box-intersect: Invalid arguments")
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
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -212,7 +212,7 @@
       return !1
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
         if (!⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -223,7 +223,7 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.length,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
       if (!(⟦2-char-id⟧ <= 0 || ⟦2-char-id⟧ <= 0)) {
```

</details>

<details>
<summary>Hunk 8 · Change · +3 / -3</summary>

```diff
@@ -231,12 +231,12 @@
         if (!(⟦2-char-id⟧ <= 0)) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocDouble(2 * ⟦2-char-id⟧ * ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocInt32(⟦2-char-id⟧);
-          if ((⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, YJ, DJ, ⟦2-char-id⟧)) > 0) {
-            if (1 === ⟦2-char-id⟧ && ⟦2-char-id⟧) ⟦2-char-id⟧.init(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.sweepComplete(⟦2-char-id⟧, ZJ, 0, AJ, DJ, sJ, 0, AJ, DJ, ⟦2-char-id⟧);
+          if ((⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, oB, LB, ⟦2-char-id⟧)) > 0) {
+            if (1 === ⟦2-char-id⟧ && ⟦2-char-id⟧) ⟦2-char-id⟧.init(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.sweepComplete(⟦2-char-id⟧, dB, 0, JB, LB, OB, 0, JB, LB, ⟦2-char-id⟧);
             else {
               var ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocDouble(2 * ⟦2-char-id⟧ * ⟦2-char-id⟧),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocInt32(⟦2-char-id⟧);
-              (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, YJ, nJ, ⟦2-char-id⟧)) > 0 && (⟦2-char-id⟧.init(⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, ZJ, 0, AJ, DJ, sJ, 0, jJ, nJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, FJ, AJ, DJ, sJ, jJ, nJ, ⟦2-char-id⟧), ⟦2-char-id⟧.free(⟦2-char-id⟧), ⟦2-char-id⟧.free(⟦2-char-id⟧))
+              (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, oB, DB, ⟦2-char-id⟧)) > 0 && (⟦2-char-id⟧.init(⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, dB, 0, JB, LB, OB, 0, gB, DB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, dB, VB, JB, LB, OB, gB, DB, ⟦2-char-id⟧), ⟦2-char-id⟧.free(⟦2-char-id⟧), ⟦2-char-id⟧.free(⟦2-char-id⟧))
             }
             ⟦2-char-id⟧.free(⟦2-char-id⟧), ⟦2-char-id⟧.free(⟦2-char-id⟧)
           }
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

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
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -260,7 +260,7 @@
       ⟦2-char-id⟧ = "bs",
       ⟦2-char-id⟧ = "be",
       ⟦2-char-id⟧ = "bb",
-      ⟦2-char-id⟧ = [⟦2-char-id⟧, FJ, "vv", XJ, AJ, qJ, "ri", jJ, YJ, hJ, "bi"];
+      ⟦2-char-id⟧ = [⟦2-char-id⟧, VB, "vv", lB, JB, YB, "ri", gB, oB, kB, "bi"];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = "bruteForce" + (⟦2-char-id⟧ ? "Full" : "Partial"),
```

</details>

<details>
<summary>Hunk 11 · Change · +6 / -6</summary>

```diff
@@ -270,26 +270,26 @@
       var ⟦2-char-id⟧ = ["function " + ⟦2-char-id⟧ + "(" + ⟦2-char-id⟧.join() + "){"];
 
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        var ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        var ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = "bruteForce" + (⟦2-char-id⟧ ? "Red" : "Blue") + (⟦2-char-id⟧ ? "Flip" : "") + (⟦2-char-id⟧ ? "Full" : ""),
-            ⟦2-char-id⟧ = ["function ", UJ, "(", ⟦2-char-id⟧.join(), "){", "var ", eJ, "=2*", ZJ, ";"],
+            ⟦2-char-id⟧ = ["function ", yB, "(", ⟦2-char-id⟧.join(), "){", "var ", pB, "=2*", dB, ";"],
             ⟦2-char-id⟧ = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
             ⟦2-char-id⟧ = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (⟦2-char-id⟧ ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
           return ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧, "Q", ":", ⟦2-char-id⟧) : ⟦2-char-id⟧.push(⟦2-char-id⟧, "Q", ":", ⟦2-char-id⟧), ⟦2-char-id⟧ ? ⟦2-char-id⟧.push("if(y1<x0||x1<y0)continue;") : ⟦2-char-id⟧ ? ⟦2-char-id⟧.push("if(y0<=x0||x1<y0)continue;") : ⟦2-char-id⟧.push("if(y0<x0||x1<y0)continue;"), ⟦2-char-id⟧.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), ⟦2-char-id⟧ ? ⟦2-char-id⟧.push("yi,xi") : ⟦2-char-id⟧.push("xi,yi"), ⟦2-char-id⟧.push(");if(rv!==void 0)return rv;}}}"), {
             name: ⟦2-char-id⟧,
             code: ⟦2-char-id⟧.join("")
           }
-        }(⟦2-char-id⟧, UJ, ⟦2-char-id⟧);
+        }(⟦2-char-id⟧, yB, ⟦2-char-id⟧);
         ⟦2-char-id⟧.push(⟦2-char-id⟧.code), ⟦2-char-id⟧.push("return " + ⟦2-char-id⟧.name + "(" + ⟦2-char-id⟧.join() + ");")
       }
-      ⟦2-char-id⟧.push("if(re-rs>be-bs){"), ⟦2-char-id⟧ ? (⟦2-char-id⟧(!0, !1), ⟦2-char-id⟧.push("}else{"), qJ(!1, !1)) : (⟦2-char-id⟧.push("if(fp){"), qJ(!0, !0), ⟦2-char-id⟧.push("}else{"), qJ(!0, !1), ⟦2-char-id⟧.push("}}else{if(fp){"), qJ(!1, !0), ⟦2-char-id⟧.push("}else{"), qJ(!1, !1), ⟦2-char-id⟧.push("}")), ⟦2-char-id⟧.push("}}return " + ⟦2-char-id⟧);
+      ⟦2-char-id⟧.push("if(re-rs>be-bs){"), ⟦2-char-id⟧ ? (⟦2-char-id⟧(!0, !1), ⟦2-char-id⟧.push("}else{"), YB(!1, !1)) : (⟦2-char-id⟧.push("if(fp){"), YB(!0, !0), ⟦2-char-id⟧.push("}else{"), YB(!0, !1), ⟦2-char-id⟧.push("}}else{if(fp){"), YB(!1, !0), ⟦2-char-id⟧.push("}else{"), YB(!1, !1), ⟦2-char-id⟧.push("}")), ⟦2-char-id⟧.push("}}return " + ⟦2-char-id⟧);
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.join("") + ⟦2-char-id⟧.join("");
       return new Function(⟦2-char-id⟧)()
     }
     ⟦2-char-id⟧.partial = ⟦2-char-id⟧(!1), ⟦2-char-id⟧.full = ⟦2-char-id⟧(!0)
   },
-  37305: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, cJ, ZJ, eJ, YJ, IJ, MJ, bJ, ⟦2-char-id⟧) {
+  37264: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, TB, dB, pB, oB, wB, UB, FB, ⟦2-char-id⟧) {
       ! function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = 8 * ⟦2-char-id⟧.log2(⟦2-char-id⟧ + 1) * (⟦2-char-id⟧ + 1) | 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.nextPow2(⟦2-char-id⟧ * ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -299,7 +299,7 @@
       }(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧);
       var ⟦2-char-id⟧, ⟦2-char-id⟧ = 0,
         ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧;
-      ⟦2-char-id⟧(⟦2-char-id⟧++, 0, 0, eJ, 0, MJ, ⟦2-char-id⟧ ? 16 : 0, -1 / 0, 1 / 0), ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧++, 0, 0, MJ, 0, eJ, 1, -1 / 0, 1 / 0);
+      ⟦2-char-id⟧(⟦2-char-id⟧++, 0, 0, pB, 0, UB, ⟦2-char-id⟧ ? 16 : 0, -1 / 0, 1 / 0), ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧++, 0, 0, UB, 0, pB, 1, -1 / 0, 1 / 0);
       for (; ⟦2-char-id⟧ > 0;) {
         var ⟦2-char-id⟧ = (⟦2-char-id⟧ -= 1) * ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 13 · Change · +24 / -24</summary>

```diff
@@ -317,61 +317,61 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧;
-        if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), !(2 & ⟦2-char-id⟧ && ⟦2-char-id⟧ >= (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, kJ, pJ, dJ, LJ, aJ, ⟦2-char-id⟧))) && !(4 & ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, kJ, pJ, dJ, LJ, aJ, ⟦2-char-id⟧)) >= ⟦2-char-id⟧)) {
+        if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), !(2 & ⟦2-char-id⟧ && ⟦2-char-id⟧ >= (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, PB, QB, RB, xB, jB, ⟦2-char-id⟧))) && !(4 & ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, PB, QB, RB, xB, jB, ⟦2-char-id⟧)) >= ⟦2-char-id⟧)) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
           if (⟦2-char-id⟧) {
             if (⟦2-char-id⟧ * ⟦2-char-id⟧ * (⟦2-char-id⟧ + ⟦2-char-id⟧) < ⟦2-char-id⟧) {
-              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧.scanComplete(⟦2-char-id⟧, kJ, cJ, pJ, dJ, LJ, aJ, zJ, NJ, BJ, ⟦2-char-id⟧))) return ⟦2-char-id⟧;
+              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧.scanComplete(⟦2-char-id⟧, PB, TB, QB, RB, xB, jB, aB, ZB, AB, ⟦2-char-id⟧))) return ⟦2-char-id⟧;
               continue
             }
           } else {
             if (⟦2-char-id⟧ * Math.min(⟦2-char-id⟧, ⟦2-char-id⟧) < ⟦2-char-id⟧) {
-              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, kJ, cJ, iJ, pJ, dJ, LJ, aJ, zJ, NJ, BJ, ⟦2-char-id⟧))) return ⟦2-char-id⟧;
+              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, PB, TB, GB, QB, RB, xB, jB, aB, ZB, AB, ⟦2-char-id⟧))) return ⟦2-char-id⟧;
               continue
             }
             if (⟦2-char-id⟧ * ⟦2-char-id⟧ * ⟦2-char-id⟧ < ⟦2-char-id⟧) {
-              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧.scanBipartite(⟦2-char-id⟧, kJ, cJ, iJ, pJ, dJ, LJ, aJ, zJ, NJ, BJ, ⟦2-char-id⟧))) return ⟦2-char-id⟧;
+              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧.scanBipartite(⟦2-char-id⟧, PB, TB, GB, QB, RB, xB, jB, aB, ZB, AB, ⟦2-char-id⟧))) return ⟦2-char-id⟧;
               continue
             }
           }
-          var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, kJ, pJ, dJ, LJ, aJ, CJ, ⟦2-char-id⟧);
+          var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, PB, QB, RB, xB, jB, hB, ⟦2-char-id⟧);
           if (⟦2-char-id⟧ < ⟦2-char-id⟧)
             if (⟦2-char-id⟧ * (⟦2-char-id⟧ - ⟦2-char-id⟧) < ⟦2-char-id⟧) {
-              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, cJ, pJ, Jc, LJ, aJ, zJ, NJ, BJ, ⟦2-char-id⟧))) return ⟦2-char-id⟧
+              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, TB, QB, BT, xB, jB, aB, ZB, AB, ⟦2-char-id⟧))) return ⟦2-char-id⟧
             } else if (⟦2-char-id⟧ === ⟦2-char-id⟧ - 2) {
-            if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, cJ, zJ, NJ, BJ, tJ, pJ, Jc, LJ, ⟦2-char-id⟧) : ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, cJ, pJ, Jc, LJ, aJ, zJ, NJ, BJ, ⟦2-char-id⟧))) return ⟦2-char-id⟧
-          } else ⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, pJ, Jc, zJ, NJ, iJ, -1 / 0, 1 / 0), KJ(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, zJ, NJ, pJ, Jc, 1 ^ ⟦2-char-id⟧, -1 / 0, 1 / 0);
+            if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, TB, aB, ZB, AB, bB, QB, BT, xB, ⟦2-char-id⟧) : ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, TB, QB, BT, xB, jB, aB, ZB, AB, ⟦2-char-id⟧))) return ⟦2-char-id⟧
+          } else ⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, QB, BT, aB, ZB, GB, -1 / 0, 1 / 0), sB(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, aB, ZB, QB, BT, 1 ^ ⟦2-char-id⟧, -1 / 0, 1 / 0);
           if (⟦2-char-id⟧ < ⟦2-char-id⟧) {
-            var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, kJ, zJ, NJ, BJ, ⟦2-char-id⟧),
+            var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, PB, aB, ZB, AB, ⟦2-char-id⟧),
               ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧],
-              ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, kJ, cc, NJ, BJ, tJ, ⟦2-char-id⟧);
-            if (⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧++, kJ, Jc, dJ, Fc, NJ, (4 | ⟦2-char-id⟧) + (⟦2-char-id⟧ ? 16 : 0), Zc, ⟦2-char-id⟧), ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧++, kJ, Jc, dJ, zJ, cc, (2 | ⟦2-char-id⟧) + (⟦2-char-id⟧ ? 16 : 0), CJ, ⟦2-char-id⟧), ⟦2-char-id⟧ + 1 === ⟦2-char-id⟧) {
-              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, kJ, cJ, Jc, dJ, LJ, aJ, cc, BJ, ⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧(⟦2-char-id⟧, kJ, cJ, iJ, Jc, dJ, LJ, aJ, cc, BJ, ⟦2-char-id⟧[⟦2-char-id⟧]))) return ⟦2-char-id⟧
+              ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, PB, TT, ZB, AB, bB, ⟦2-char-id⟧);
+            if (⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧++, PB, BT, RB, VT, ZB, (4 | ⟦2-char-id⟧) + (⟦2-char-id⟧ ? 16 : 0), dT, ⟦2-char-id⟧), ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧++, PB, BT, RB, aB, TT, (2 | ⟦2-char-id⟧) + (⟦2-char-id⟧ ? 16 : 0), hB, ⟦2-char-id⟧), ⟦2-char-id⟧ + 1 === ⟦2-char-id⟧) {
+              if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, PB, TB, BT, RB, xB, jB, TT, AB, ⟦2-char-id⟧[⟦2-char-id⟧]) : ⟦2-char-id⟧(⟦2-char-id⟧, PB, TB, GB, BT, RB, xB, jB, TT, AB, ⟦2-char-id⟧[⟦2-char-id⟧]))) return ⟦2-char-id⟧
             } else if (⟦2-char-id⟧ < ⟦2-char-id⟧) {
               var ⟦2-char-id⟧;
               if (⟦2-char-id⟧) {
-                if (⟦2-char-id⟧ < (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, kJ, Jc, dJ, LJ, aJ, ⟦2-char-id⟧))) {
-                  var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, kJ, Jc, Uc, LJ, aJ, ⟦2-char-id⟧);
+                if (⟦2-char-id⟧ < (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, PB, BT, RB, xB, jB, ⟦2-char-id⟧))) {
+                  var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, PB, BT, yT, xB, jB, ⟦2-char-id⟧);
                   if (⟦2-char-id⟧ === ⟦2-char-id⟧ - 2) {
-                    if (⟦2-char-id⟧ < ⟦2-char-id⟧ && void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧.sweepComplete(⟦2-char-id⟧, cJ, Jc, ec, LJ, aJ, cc, Fc, BJ, ⟦2-char-id⟧))) return ⟦2-char-id⟧;
-                    if (⟦2-char-id⟧ < ⟦2-char-id⟧ && void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, cJ, ec, Uc, LJ, aJ, cc, Fc, BJ, ⟦2-char-id⟧))) return ⟦2-char-id⟧
-                  } else ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, Jc, ec, cc, Fc, 16, -1 / 0, 1 / 0), ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, ec, Uc, cc, Fc, 0, -1 / 0, 1 / 0), KJ(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, cc, Fc, ec, Uc, 1, -1 / 0, 1 / 0))
+                    if (⟦2-char-id⟧ < ⟦2-char-id⟧ && void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧.sweepComplete(⟦2-char-id⟧, TB, BT, pT, xB, jB, TT, VT, AB, ⟦2-char-id⟧))) return ⟦2-char-id⟧;
+                    if (⟦2-char-id⟧ < ⟦2-char-id⟧ && void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, TB, pT, yT, xB, jB, TT, VT, AB, ⟦2-char-id⟧))) return ⟦2-char-id⟧
+                  } else ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, BT, pT, TT, VT, 16, -1 / 0, 1 / 0), ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, pT, yT, TT, VT, 0, -1 / 0, 1 / 0), sB(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, TT, VT, pT, yT, 1, -1 / 0, 1 / 0))
                 }
-              } else ⟦2-char-id⟧ < (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, kJ, Jc, dJ, LJ, aJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, kJ, Jc, dJ, LJ, aJ, ⟦2-char-id⟧)) && (⟦2-char-id⟧ === ⟦2-char-id⟧ - 2 ? ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, cJ, cc, Fc, BJ, tJ, Jc, Uc, LJ, ⟦2-char-id⟧) : ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, cJ, Jc, Uc, LJ, aJ, cc, Fc, BJ, ⟦2-char-id⟧) : (⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, Jc, Uc, cc, Fc, iJ, -1 / 0, 1 / 0), KJ(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, cc, Fc, Jc, Uc, 1 ^ ⟦2-char-id⟧, -1 / 0, 1 / 0)))
+              } else ⟦2-char-id⟧ < (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, PB, BT, RB, xB, jB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, PB, BT, RB, xB, jB, ⟦2-char-id⟧)) && (⟦2-char-id⟧ === ⟦2-char-id⟧ - 2 ? ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, TB, TT, VT, AB, bB, BT, yT, xB, ⟦2-char-id⟧) : ⟦2-char-id⟧.sweepBipartite(⟦2-char-id⟧, TB, BT, yT, xB, jB, TT, VT, AB, ⟦2-char-id⟧) : (⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, BT, yT, TT, VT, GB, -1 / 0, 1 / 0), sB(⟦2-char-id⟧++, ⟦2-char-id⟧ + 1, TT, VT, BT, yT, 1 ^ ⟦2-char-id⟧, -1 / 0, 1 / 0)))
             }
           }
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
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -386,18 +386,18 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocInt32(1024),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocDouble(1024);
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, JB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 2] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 3] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 4] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 5] = ⟦2-char-id⟧;
       var ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧;
       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, JB, YB, gB, ⟦2-char-id⟧) {
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
<summary>Hunk 15 · Change · +2 / -2</summary>

```diff
@@ -412,11 +412,11 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, JB, YB, ⟦2-char-id⟧) {
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
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -435,8 +435,8 @@
       }
     }
   },
-  37312: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, cJ, ZJ, XJ, AJ, ⟦2-char-id⟧) {
+  37275: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, TB, dB, lB, JB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧ <= ⟦2-char-id⟧ + 1) return ⟦2-char-id⟧;
       var ⟦2-char-id⟧ = ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -446,7 +446,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧];
       for (; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
         if (⟦2-char-id⟧ - ⟦2-char-id⟧ < ⟦2-char-id⟧) {
-          eJ(⟦2-char-id⟧, cJ, jJ, YJ, AJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧];
+          pB(⟦2-char-id⟧, TB, gB, oB, JB, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧];
           break
         }
         var ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -463,7 +463,7 @@
         }
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1];
         ⟦2-char-id⟧[⟦2-char-id⟧ - 1] = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧;
-        for (⟦2-char-id⟧ = ⟦2-char-id⟧ * (⟦2-char-id⟧ - 1), ⟦2-char-id⟧ = ⟦2-char-id⟧ * (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, jJ, ⟦2-char-id⟧ - 1, AJ, qJ, ⟦2-char-id⟧)), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧, ++⟦2-char-id⟧, ++⟦2-char-id⟧) {
+        for (⟦2-char-id⟧ = ⟦2-char-id⟧ * (⟦2-char-id⟧ - 1), ⟦2-char-id⟧ = ⟦2-char-id⟧ * (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, gB, ⟦2-char-id⟧ - 1, JB, YB, ⟦2-char-id⟧)), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧, ++⟦2-char-id⟧, ++⟦2-char-id⟧) {
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
           ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧
         }
```

</details>

<details>
<summary>Hunk 19 · Change · +3 / -3</summary>

```diff
@@ -476,12 +476,12 @@
           for (⟦2-char-id⟧ = ⟦2-char-id⟧ + 1; ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧] === ⟦2-char-id⟧;) ⟦2-char-id⟧ += 1
         }
       }
-      return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, hJ, AJ, qJ, ⟦2-char-id⟧[⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧])
+      return ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, kB, JB, YB, ⟦2-char-id⟧[⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧])
     };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37319)("lo<p0", ["p0"]),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37281)("lo<p0", ["p0"]),
       ⟦2-char-id⟧ = 8;
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ * (⟦2-char-id⟧ + 1) + ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧)
         for (var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ * (⟦2-char-id⟧ - 1); ⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧] > ⟦2-char-id⟧; --⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧) {
           for (var ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧, ++⟦2-char-id⟧, ++⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

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
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -503,13 +503,13 @@
     };
     var ⟦2-char-id⟧ = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
   },
-  37301: ⟦2-char-id⟧ => {
+  37255: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ <= 4 * ⟦2-char-id⟧ ? ⟦2-char-id⟧(0, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧) : ⟦2-char-id⟧(0, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧)
     };
     var ⟦2-char-id⟧ = 32;
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧ = 2 * (⟦2-char-id⟧ + 1), ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ++⟦2-char-id⟧) {
         for (var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++], ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++], ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - 2; ⟦2-char-id⟧-- > ⟦2-char-id⟧;) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 2],
```

</details>

<details>
<summary>Hunk 22 · Change · +7 / -7</summary>

```diff
@@ -522,41 +522,41 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ *= 2;
       var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ *= 2],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1];
       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧ + 1], ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ *= 2, ⟦2-char-id⟧[⟦2-char-id⟧ *= 2] = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ *= 2, ⟦2-char-id⟧ *= 2;
       var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ *= 2],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1];
       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧ + 1], ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧ + 1], ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ *= 2, ⟦2-char-id⟧[⟦2-char-id⟧ *= 2] = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧ + 1], ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ *= 2;
       var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ *= 2],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
       return !(⟦2-char-id⟧ < ⟦2-char-id⟧) && (⟦2-char-id⟧ !== ⟦2-char-id⟧ || ⟦2-char-id⟧[⟦2-char-id⟧ + 1] > ⟦2-char-id⟧[⟦2-char-id⟧ + 1])
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ *= 2];
       return ⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧ + 1] < ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, YJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, oB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧ + 1) / 6 | 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 23 · Change · +10 / -10</summary>

```diff
@@ -571,28 +571,28 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ - 1,
         ⟦2-char-id⟧ = 0;
-      ⟦2-char-id⟧(⟦2-char-id⟧, vJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), AJ(⟦2-char-id⟧, EJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), AJ(⟦2-char-id⟧, mJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), AJ(⟦2-char-id⟧, mJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), AJ(⟦2-char-id⟧, QJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), AJ(⟦2-char-id⟧, QJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), AJ(⟦2-char-id⟧, EJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), AJ(⟦2-char-id⟧, mJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), AJ(⟦2-char-id⟧, EJ, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧);
+      ⟦2-char-id⟧(⟦2-char-id⟧, mB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), JB(⟦2-char-id⟧, tB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), JB(⟦2-char-id⟧, iB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), JB(⟦2-char-id⟧, iB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), JB(⟦2-char-id⟧, NB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), JB(⟦2-char-id⟧, NB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), JB(⟦2-char-id⟧, tB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), JB(⟦2-char-id⟧, iB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), JB(⟦2-char-id⟧, tB, ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧);
       for (var ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * ⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1], ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * ⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1], ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 2; ++⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧];
         ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧] = ⟦2-char-id⟧
       }
-      ⟦2-char-id⟧(⟦2-char-id⟧, JJ, ⟦2-char-id⟧), UJ(⟦2-char-id⟧, YJ, ⟦2-char-id⟧);
+      ⟦2-char-id⟧(⟦2-char-id⟧, BB, ⟦2-char-id⟧), yB(⟦2-char-id⟧, oB, ⟦2-char-id⟧);
       for (var ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ++⟦2-char-id⟧)
-        if (⟦2-char-id⟧(⟦2-char-id⟧, SJ, IJ, ⟦2-char-id⟧)) ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, VJ, ⟦2-char-id⟧), ++⟦2-char-id⟧;
-        else if (!⟦2-char-id⟧(⟦2-char-id⟧, MJ, bJ, ⟦2-char-id⟧))
+        if (⟦2-char-id⟧(⟦2-char-id⟧, zB, wB, ⟦2-char-id⟧)) ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, fB, ⟦2-char-id⟧), ++⟦2-char-id⟧;
+        else if (!⟦2-char-id⟧(⟦2-char-id⟧, UB, FB, ⟦2-char-id⟧))
         for (;;) {
-          if (⟦2-char-id⟧(⟦2-char-id⟧, MJ, bJ, ⟦2-char-id⟧)) {
-            qJ(⟦2-char-id⟧, SJ, IJ, ⟦2-char-id⟧) ? (⟦2-char-id⟧(⟦2-char-id⟧, VJ, KJ, ⟦2-char-id⟧), ++⟦2-char-id⟧, --⟦2-char-id⟧) : (⟦2-char-id⟧(⟦2-char-id⟧, KJ, ⟦2-char-id⟧), --⟦2-char-id⟧);
+          if (⟦2-char-id⟧(⟦2-char-id⟧, UB, FB, ⟦2-char-id⟧)) {
+            YB(⟦2-char-id⟧, zB, wB, ⟦2-char-id⟧) ? (⟦2-char-id⟧(⟦2-char-id⟧, fB, sB, ⟦2-char-id⟧), ++⟦2-char-id⟧, --⟦2-char-id⟧) : (⟦2-char-id⟧(⟦2-char-id⟧, sB, ⟦2-char-id⟧), --⟦2-char-id⟧);
             break
           }
           if (--⟦2-char-id⟧ < ⟦2-char-id⟧) break
         }
-      ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, SJ, IJ, ⟦2-char-id⟧), XJ(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, MJ, bJ, ⟦2-char-id⟧), ⟦2-char-id⟧ - 2 - ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 2, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 2, ⟦2-char-id⟧), ⟦2-char-id⟧ - (⟦2-char-id⟧ + 2) <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧ + 2, YJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧ + 2, YJ, ⟦2-char-id⟧), ⟦2-char-id⟧ - ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, KJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, KJ, ⟦2-char-id⟧)
-    }
-  },
-  37292: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, zB, wB, ⟦2-char-id⟧), lB(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, UB, FB, ⟦2-char-id⟧), ⟦2-char-id⟧ - 2 - ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 2, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 2, ⟦2-char-id⟧), ⟦2-char-id⟧ - (⟦2-char-id⟧ + 2) <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧ + 2, oB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧ + 2, oB, ⟦2-char-id⟧), ⟦2-char-id⟧ - ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, sB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, sB, ⟦2-char-id⟧)
+    }
+  },
+  37246: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = {
       init: function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.nextPow2(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

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
<summary>Hunk 25 · Change · +5 / -5</summary>

```diff
@@ -622,25 +622,25 @@
           ⟦2-char-id⟧ = 0;
         for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1];
-          if (⟦2-char-id⟧ >= ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, hJ, ⟦2-char-id⟧--, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧ | 0);
-          else if (⟦2-char-id⟧ >= 0) ⟦2-char-id⟧(⟦2-char-id⟧, jJ, ⟦2-char-id⟧--, ⟦2-char-id⟧);
+          if (⟦2-char-id⟧ >= ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, kB, ⟦2-char-id⟧--, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧ | 0);
+          else if (⟦2-char-id⟧ >= 0) ⟦2-char-id⟧(⟦2-char-id⟧, gB, ⟦2-char-id⟧--, ⟦2-char-id⟧);
           else if (⟦2-char-id⟧ <= -⟦2-char-id⟧) {
             ⟦2-char-id⟧ = -⟦2-char-id⟧ - ⟦2-char-id⟧ | 0;
             for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
               if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧))) return ⟦2-char-id⟧
             }
-            ⟦2-char-id⟧(⟦2-char-id⟧, hJ, ⟦2-char-id⟧++, ⟦2-char-id⟧)
+            ⟦2-char-id⟧(⟦2-char-id⟧, kB, ⟦2-char-id⟧++, ⟦2-char-id⟧)
           } else {
             ⟦2-char-id⟧ = -⟦2-char-id⟧ - 1 | 0;
             for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) {
               var ⟦2-char-id⟧;
               if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]))) return ⟦2-char-id⟧
             }
-            ⟦2-char-id⟧(⟦2-char-id⟧, jJ, ⟦2-char-id⟧++, ⟦2-char-id⟧)
+            ⟦2-char-id⟧(⟦2-char-id⟧, gB, ⟦2-char-id⟧++, ⟦2-char-id⟧)
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
<summary>Hunk 26 · Change · +4 / -4</summary>

```diff
@@ -672,21 +672,21 @@
                 var ⟦2-char-id⟧;
                 if (void 0 !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧))) return ⟦2-char-id⟧
               }
-            0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, jJ, ⟦2-char-id⟧++, ⟦2-char-id⟧) : 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, hJ, ⟦2-char-id⟧++, ⟦2-char-id⟧) : 2 === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, sJ, ⟦2-char-id⟧++, ⟦2-char-id⟧)
+            0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, gB, ⟦2-char-id⟧++, ⟦2-char-id⟧) : 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, kB, ⟦2-char-id⟧++, ⟦2-char-id⟧) : 2 === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, OB, ⟦2-char-id⟧++, ⟦2-char-id⟧)
           } else {
             ⟦2-char-id⟧ = (⟦2-char-id⟧ >> 1) - 1;
-            0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, jJ, ⟦2-char-id⟧--, ⟦2-char-id⟧) : 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, hJ, ⟦2-char-id⟧--, ⟦2-char-id⟧) : 2 === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, sJ, ⟦2-char-id⟧--, ⟦2-char-id⟧)
+            0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, gB, ⟦2-char-id⟧--, ⟦2-char-id⟧) : 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, kB, ⟦2-char-id⟧--, ⟦2-char-id⟧) : 2 === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, OB, ⟦2-char-id⟧--, ⟦2-char-id⟧)
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
<summary>Hunk 27 · Change · +2 / -2</summary>

```diff
@@ -704,13 +704,13 @@
           var ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧[2 * ⟦2-char-id⟧ + 1];
           if (⟦2-char-id⟧ < 0) {
             var ⟦2-char-id⟧ = !1;
-            if ((⟦2-char-id⟧ = -⟦2-char-id⟧) >= ⟦2-char-id⟧ ? (⟦2-char-id⟧ = !⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧) : (⟦2-char-id⟧ = !!⟦2-char-id⟧, ⟦2-char-id⟧ -= 1), ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, jJ, ⟦2-char-id⟧++, ⟦2-char-id⟧);
+            if ((⟦2-char-id⟧ = -⟦2-char-id⟧) >= ⟦2-char-id⟧ ? (⟦2-char-id⟧ = !⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧) : (⟦2-char-id⟧ = !!⟦2-char-id⟧, ⟦2-char-id⟧ -= 1), ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, gB, ⟦2-char-id⟧++, ⟦2-char-id⟧);
             else {
               var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
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
<summary>Hunk 28 · Change · +2 / -2</summary>

```diff
@@ -721,10 +721,10 @@
                 }
               }
             }
-          } else ⟦2-char-id⟧(⟦2-char-id⟧, jJ, ⟦2-char-id⟧--, ⟦2-char-id⟧ - ⟦2-char-id⟧)
+          } else ⟦2-char-id⟧(⟦2-char-id⟧, gB, ⟦2-char-id⟧--, ⟦2-char-id⟧ - ⟦2-char-id⟧)
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
<summary>Hunk 29 · Change · +1 / -1</summary>

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
<summary>Hunk 30 · Change · +3 / -3</summary>

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
<summary>Hunk 31 · Change · +5 / -5</summary>

```diff
@@ -783,25 +783,25 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocInt32(⟦2-char-id⟧),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.mallocDouble(8192);
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1];
       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧
     }
   },
-  37278: ⟦2-char-id⟧ => {
-    function ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) {
+  37234: ⟦2-char-id⟧ => {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = 0 | ⟦2-char-id⟧[⟦2-char-id⟧];
       if (⟦2-char-id⟧ <= 0) return [];
       var ⟦2-char-id⟧, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧);
       if (⟦2-char-id⟧ === ⟦2-char-id⟧.length - 1)
         for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧;
       else
-        for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ + 1);
+        for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧ + 1);
       return ⟦2-char-id⟧
     }
     ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 32 · Change · +2 / -2</summary>

```diff
@@ -814,12 +814,12 @@
           }(0 | ⟦2-char-id⟧, ⟦2-char-id⟧);
           break;
         case "object":
-          if ("number" === typeof ⟦2-char-id⟧.length) return ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, 0)
+          if ("number" === typeof ⟦2-char-id⟧.length) return ⟦2-char-id⟧(⟦2-char-id⟧, dB, 0)
       }
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
<summary>Hunk 33 · Change · +3 / -3</summary>

```diff
@@ -838,9 +838,9 @@
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧.hash[⟦2-char-id⟧];
-        ⟦2-char-id⟧ && (⟦2-char-id⟧.remove(⟦2-char-id⟧), ⟦2-char-id⟧.jK && (⟦2-char-id⟧.multi ? (⟦2-char-id⟧.forEach((⟦2-char-id⟧ => {
-          ⟦2-char-id⟧ && ⟦2-char-id⟧.jK(⟦2-char-id⟧, ⟦2-char-id⟧)
-        })), ⟦2-char-id⟧.length = 0) : ⟦2-char-id⟧.jK(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.removals.push(⟦2-char-id⟧), jJ())
+        ⟦2-char-id⟧ && (⟦2-char-id⟧.remove(⟦2-char-id⟧), ⟦2-char-id⟧.Kw && (⟦2-char-id⟧.multi ? (⟦2-char-id⟧.forEach((⟦2-char-id⟧ => {
+          ⟦2-char-id⟧ && ⟦2-char-id⟧.Kw(⟦2-char-id⟧, ⟦2-char-id⟧)
+        })), ⟦2-char-id⟧.length = 0) : ⟦2-char-id⟧.Kw(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.removals.push(⟦2-char-id⟧), gB())
       }
 
       function ⟦2-char-id⟧() {
```

</details>

<details>
<summary>Hunk 34 · Change · +1 / -1</summary>

```diff
@@ -848,7 +848,7 @@
       }
 
       function ⟦2-char-id⟧() {
-        ⟦2-char-id⟧.timeout = !1, hJ()
+        ⟦2-char-id⟧.timeout = !1, kB()
       }
 
       function ⟦2-char-id⟧() {
```

</details>

<details>
<summary>Hunk 35 · Change · +50 / -50</summary>

```diff
@@ -871,126 +871,126 @@
           ⟦2-char-id⟧.length = 0
         }(⟦2-char-id⟧.removals)
       }
-      this.VG = ⟦2-char-id⟧, this._systems = ⟦2-char-id⟧, this._renderSystems = ⟦2-char-id⟧, this.eC = function(⟦2-char-id⟧) {
+      this.Nu = ⟦2-char-id⟧, this._systems = ⟦2-char-id⟧, this._renderSystems = ⟦2-char-id⟧, this.YG = function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧++;
-        return Array.isArray(⟦2-char-id⟧) && ⟦2-char-id⟧.forEach((⟦2-char-id⟧ => ⟦2-char-id⟧.xI(⟦2-char-id⟧, ⟦2-char-id⟧))), FJ
+        return Array.isArray(⟦2-char-id⟧) && ⟦2-char-id⟧.forEach((⟦2-char-id⟧ => ⟦2-char-id⟧.XF(⟦2-char-id⟧, ⟦2-char-id⟧))), VB
       }, this.deleteEntity = function(⟦2-char-id⟧) {
         return Object.keys(⟦2-char-id⟧).forEach((⟦2-char-id⟧ => {
           ⟦2-char-id⟧[⟦2-char-id⟧].hash[⟦2-char-id⟧] && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
-        })), JJ
-      }, this.McJ = function(⟦2-char-id⟧) {
+        })), BB
+      }, this.ldB = function(⟦2-char-id⟧) {
         if (!⟦2-char-id⟧) throw new Error("Missing component definition");
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.name;
         if (!⟦2-char-id⟧) throw new Error("Component definition must have a name property.");
         if ("string" !== typeof ⟦2-char-id⟧) throw new Error("Component name must be a string.");
         if ("" === ⟦2-char-id⟧) throw new Error("Component name must be a non-empty string.");
-        if (⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Component ${ZJ} already exists.`);
+        if (⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Component ${dB} already exists.`);
         var ⟦2-char-id⟧ = {};
-        return ⟦2-char-id⟧.name = ⟦2-char-id⟧, ⟦2-char-id⟧.multi = !!⟦2-char-id⟧.multi, ⟦2-char-id⟧.order = isNaN(⟦2-char-id⟧.order) ? 99 : ⟦2-char-id⟧.order, ⟦2-char-id⟧.stateConstructor = ⟦2-char-id⟧.stateConstructor || null, ⟦2-char-id⟧.state = ⟦2-char-id⟧.state || {}, ⟦2-char-id⟧.XE = ⟦2-char-id⟧.XE || null, ⟦2-char-id⟧.jK = ⟦2-char-id⟧.jK || null, ⟦2-char-id⟧.system = ⟦2-char-id⟧.system || null, ⟦2-char-id⟧.sE = ⟦2-char-id⟧.sE || null, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = new ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]._pendingMultiCleanup = !1, ⟦2-char-id⟧[⟦2-char-id⟧]._multiCleanupIDs = ⟦2-char-id⟧.multi ? [] : null, ⟦2-char-id⟧.system && (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order))), ⟦2-char-id⟧.sE && (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order))), ZJ
+        return ⟦2-char-id⟧.name = ⟦2-char-id⟧, ⟦2-char-id⟧.multi = !!⟦2-char-id⟧.multi, ⟦2-char-id⟧.order = isNaN(⟦2-char-id⟧.order) ? 99 : ⟦2-char-id⟧.order, ⟦2-char-id⟧.stateConstructor = ⟦2-char-id⟧.stateConstructor || null, ⟦2-char-id⟧.state = ⟦2-char-id⟧.state || {}, ⟦2-char-id⟧.Om = ⟦2-char-id⟧.Om || null, ⟦2-char-id⟧.Kw = ⟦2-char-id⟧.Kw || null, ⟦2-char-id⟧.system = ⟦2-char-id⟧.system || null, ⟦2-char-id⟧.Im = ⟦2-char-id⟧.Im || null, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = new ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]._pendingMultiCleanup = !1, ⟦2-char-id⟧[⟦2-char-id⟧]._multiCleanupIDs = ⟦2-char-id⟧.multi ? [] : null, ⟦2-char-id⟧.system && (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order))), ⟦2-char-id⟧.Im && (⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[⟦2-char-id⟧].order - ⟦2-char-id⟧[⟦2-char-id⟧].order))), dB
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
-        })), JJ
+          ⟦2-char-id⟧.Om && ⟦2-char-id⟧.Om(⟦2-char-id⟧.ZF, ⟦2-char-id⟧)
+        })), BB
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
-        return ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧[⟦2-char-id⟧].dispose(), delete ⟦2-char-id⟧[⟦2-char-id⟧], delete ⟦2-char-id⟧[⟦2-char-id⟧], JJ
-      }, this.xI = function(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧[⟦2-char-id⟧].dispose(), delete ⟦2-char-id⟧[⟦2-char-id⟧], delete ⟦2-char-id⟧[⟦2-char-id⟧], BB
+      }, this.XF = function(⟦2-char-id⟧, dB, ⟦2-char-id⟧) {
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
-        return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), JJ
+      }, this.jF = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+        if (!⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Unknown component: ${dB}.`);
+        return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), BB
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
-        hJ();
+      }, this.dL = function(⟦2-char-id⟧) {
+        kB();
         for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-          ⟦2-char-id⟧.system(⟦2-char-id⟧, ⟦2-char-id⟧.list), hJ()
+          ⟦2-char-id⟧.system(⟦2-char-id⟧, ⟦2-char-id⟧.list), kB()
         }
         return ⟦2-char-id⟧
       }, this.render = function(⟦2-char-id⟧) {
-        hJ();
+        kB();
         for (var ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-          ⟦2-char-id⟧.sE(⟦2-char-id⟧, ⟦2-char-id⟧.list), hJ()
+          ⟦2-char-id⟧.Im(⟦2-char-id⟧, ⟦2-char-id⟧.list), kB()
         }
         return ⟦2-char-id⟧
-      }, this.removeMultiComponent = function(⟦2-char-id⟧, FJ, ⟦2-char-id⟧) {
+      }, this.removeMultiComponent = function(⟦2-char-id⟧, VB, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${FJ}.`);
+        if (!⟦2-char-id⟧) throw new Error(`Unknown component: ${VB}.`);
         if (!⟦2-char-id⟧.multi) throw new Error("removeMultiComponent called on non-multi component");
-        return function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        return function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.hash[⟦2-char-id⟧];
           if (⟦2-char-id⟧) {
             var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-            ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = null, ⟦2-char-id⟧.jK && ⟦2-char-id⟧.jK(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.multiComps.push({
+            ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = null, ⟦2-char-id⟧.Kw && ⟦2-char-id⟧.Kw(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.multiComps.push({
               entID: ⟦2-char-id⟧,
               data: ⟦2-char-id⟧
-            }), jJ())
+            }), gB())
           }
-        }(⟦2-char-id⟧, XJ, qJ, ⟦2-char-id⟧), JJ
+        }(⟦2-char-id⟧, lB, YB, ⟦2-char-id⟧), BB
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
<summary>Hunk 36 · Change · +2 / -2</summary>

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
<summary>Hunk 37 · Change · +1 / -1</summary>

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
<summary>Hunk 38 · Change · +6 / -6</summary>

```diff
@@ -1085,17 +1085,17 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.exports === ⟦2-char-id⟧;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.set(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]), JJ
+      return ⟦2-char-id⟧.set(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]), BB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.add(⟦2-char-id⟧), JJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧.add(⟦2-char-id⟧), BB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = -1,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.length : 0;
-      for (⟦2-char-id⟧ && ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧[++⟦2-char-id⟧]); ++⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧], UJ, ⟦2-char-id⟧);
+      for (⟦2-char-id⟧ && ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧[++⟦2-char-id⟧]); ++⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧], yB, ⟦2-char-id⟧);
       return ⟦2-char-id⟧
     }
 
```

</details>

<details>
<summary>Hunk 39 · Change · +1 / -1</summary>

```diff
@@ -1112,7 +1112,7 @@
         ⟦2-char-id⟧ = Array(⟦2-char-id⟧.size);
       return ⟦2-char-id⟧.forEach((function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         ⟦2-char-id⟧[++⟦2-char-id⟧] = [⟦2-char-id⟧, ⟦2-char-id⟧]
-      })), ZJ
+      })), dB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 40 · Change · +1 / -1</summary>

```diff
@@ -1126,7 +1126,7 @@
         ⟦2-char-id⟧ = Array(⟦2-char-id⟧.size);
       return ⟦2-char-id⟧.forEach((function(⟦2-char-id⟧) {
         ⟦2-char-id⟧[++⟦2-char-id⟧] = ⟦2-char-id⟧
-      })), ZJ
+      })), dB
     }
     var ⟦2-char-id⟧ = Array.prototype,
       ⟦2-char-id⟧ = Function.prototype,
```

</details>

<details>
<summary>Hunk 41 · Change · +2 / -2</summary>

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
<summary>Hunk 42 · Change · +1 / -1</summary>

```diff
@@ -1212,7 +1212,7 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
       ⟦2-char-id⟧.call(⟦2-char-id⟧, ⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && (void 0 !== ⟦2-char-id⟧ || ⟦2-char-id⟧ in ⟦2-char-id⟧) || (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧)
     }
```

</details>

<details>
<summary>Hunk 43 · Change · +2 / -2</summary>

```diff
@@ -1223,9 +1223,9 @@
       return -1
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, sJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, OB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, UJ, sJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧)), void 0 !== ⟦2-char-id⟧) return ⟦2-char-id⟧;
+      if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, yB, OB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧)), void 0 !== ⟦2-char-id⟧) return ⟦2-char-id⟧;
       if (!⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧;
       var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
       if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 44 · Change · +51 / -51</summary>

```diff
@@ -1247,106 +1247,106 @@
         if (⟦2-char-id⟧(⟦2-char-id⟧)) return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           if (⟦2-char-id⟧) return ⟦2-char-id⟧.slice();
           var ⟦2-char-id⟧ = new ⟦2-char-id⟧.constructor(⟦2-char-id⟧.length);
-          return ⟦2-char-id⟧.copy(⟦2-char-id⟧), ZJ
+          return ⟦2-char-id⟧.copy(⟦2-char-id⟧), dB
         }(⟦2-char-id⟧, ⟦2-char-id⟧);
         if (⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧ && !⟦2-char-id⟧) {
-          if (⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧ ? JJ : {};
+          if (⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧ ? BB : {};
           if (⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-              return "function" != typeof ⟦2-char-id⟧.constructor || ⟦2-char-id⟧(⟦2-char-id⟧) ? {} : (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), oc(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧) : {});
+              return "function" != typeof ⟦2-char-id⟧.constructor || ⟦2-char-id⟧(⟦2-char-id⟧) ? {} : (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), nT(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧) : {});
               var ⟦2-char-id⟧
             }(⟦2-char-id⟧ ? {} : ⟦2-char-id⟧), !⟦2-char-id⟧) return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return ⟦2-char-id⟧(⟦2-char-id⟧, Oc(⟦2-char-id⟧), ⟦2-char-id⟧)
+            return ⟦2-char-id⟧(⟦2-char-id⟧, XT(⟦2-char-id⟧), ⟦2-char-id⟧)
           }(⟦2-char-id⟧, function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, lc(⟦2-char-id⟧), ⟦2-char-id⟧)
+            return ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, eT(⟦2-char-id⟧), ⟦2-char-id⟧)
           }(⟦2-char-id⟧, ⟦2-char-id⟧))
         } else {
-          if (!⟦2-char-id⟧[⟦2-char-id⟧]) return ⟦2-char-id⟧ ? JJ : {};
-          ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+          if (!⟦2-char-id⟧[⟦2-char-id⟧]) return ⟦2-char-id⟧ ? BB : {};
+          ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
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
-                return function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+              case oB:
+                return function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
                   var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), !0) : ⟦2-char-id⟧(⟦2-char-id⟧);
-                  return ⟦2-char-id⟧(⟦2-char-id⟧, OJ, new ⟦2-char-id⟧.constructor)
-                }(⟦2-char-id⟧, FJ, ⟦2-char-id⟧);
-              case hJ:
-              case fJ:
+                  return ⟦2-char-id⟧(⟦2-char-id⟧, XB, new ⟦2-char-id⟧.constructor)
+                }(⟦2-char-id⟧, VB, ⟦2-char-id⟧);
+              case kB:
+              case HB:
                 return new ⟦2-char-id⟧(⟦2-char-id⟧);
-              case nJ:
+              case DB:
                 return function(⟦2-char-id⟧) {
                   var ⟦2-char-id⟧ = new ⟦2-char-id⟧.constructor(⟦2-char-id⟧.source, ⟦2-char-id⟧.exec(⟦2-char-id⟧));
-                  return ⟦2-char-id⟧.lastIndex = ⟦2-char-id⟧.lastIndex, cJ
+                  return ⟦2-char-id⟧.lastIndex = ⟦2-char-id⟧.lastIndex, TB
                 }(⟦2-char-id⟧);
-              case GJ:
-                return function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+              case uB:
+                return function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
                   var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), !0) : ⟦2-char-id⟧(⟦2-char-id⟧);
-                  return ⟦2-char-id⟧(⟦2-char-id⟧, TJ, new ⟦2-char-id⟧.constructor)
-                }(⟦2-char-id⟧, FJ, ⟦2-char-id⟧);
-              case xJ:
+                  return ⟦2-char-id⟧(⟦2-char-id⟧, WB, new ⟦2-char-id⟧.constructor)
+                }(⟦2-char-id⟧, VB, ⟦2-char-id⟧);
+              case EB:
                 return ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ ? Object(⟦2-char-id⟧.call(⟦2-char-id⟧)) : {}
             }
             var ⟦2-char-id⟧
-          }(⟦2-char-id⟧, PJ, Pc, ⟦2-char-id⟧)
+          }(⟦2-char-id⟧, SB, ST, ⟦2-char-id⟧)
         }
       }
       ⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧);
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
       if (⟦2-char-id⟧) return ⟦2-char-id⟧;
       if (⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), !⟦2-char-id⟧) var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
-        return function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-          return ⟦2-char-id⟧(⟦2-char-id⟧) ? FJ : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+          return ⟦2-char-id⟧(⟦2-char-id⟧) ? VB : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             for (var ⟦2-char-id⟧ = -1, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = ⟦2-char-id⟧.length; ++⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧];
             return ⟦2-char-id⟧
-          }(⟦2-char-id⟧, ZJ(⟦2-char-id⟧))
-        }(⟦2-char-id⟧, lc, ⟦2-char-id⟧)
+          }(⟦2-char-id⟧, dB(⟦2-char-id⟧))
+        }(⟦2-char-id⟧, eT, ⟦2-char-id⟧)
       }(⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧);
       return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        for (var ⟦2-char-id⟧ = -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.length : 0; ++⟦2-char-id⟧ < ⟦2-char-id⟧ && !1 !== ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ZJ, ⟦2-char-id⟧););
+        for (var ⟦2-char-id⟧ = -1, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.length : 0; ++⟦2-char-id⟧ < ⟦2-char-id⟧ && !1 !== ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], dB, ⟦2-char-id⟧););
       }(⟦2-char-id⟧ || ⟦2-char-id⟧, (function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ = ⟦2-char-id⟧]), gc(⟦2-char-id⟧, eJ, Pc(⟦2-char-id⟧, cJ, ZJ, FJ, eJ, JJ, ⟦2-char-id⟧))
-      })), WJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return !(!⟦2-char-id⟧(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ && ⟦2-char-id⟧ in ⟦2-char-id⟧)) && (⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧) ? Fc : ⟦2-char-id⟧).test(⟦2-char-id⟧(⟦2-char-id⟧));
+        ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ = ⟦2-char-id⟧]), IT(⟦2-char-id⟧, pB, ST(⟦2-char-id⟧, TB, dB, VB, pB, BB, ⟦2-char-id⟧))
+      })), rB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return !(!⟦2-char-id⟧(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ && ⟦2-char-id⟧ in ⟦2-char-id⟧)) && (⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧) ? VT : ⟦2-char-id⟧).test(⟦2-char-id⟧(⟦2-char-id⟧));
       var ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = new ⟦2-char-id⟧.constructor(⟦2-char-id⟧.byteLength);
-      return new ⟦2-char-id⟧(⟦2-char-id⟧).set(new ⟦2-char-id⟧(⟦2-char-id⟧)), cJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      return new ⟦2-char-id⟧(⟦2-char-id⟧).set(new ⟦2-char-id⟧(⟦2-char-id⟧)), TB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ || (⟦2-char-id⟧ = {});
       for (var ⟦2-char-id⟧ = -1, ⟦2-char-id⟧ = ⟦2-char-id⟧.length; ++⟦2-char-id⟧ < ⟦2-char-id⟧;) {
         var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], XJ, ZJ, ⟦2-char-id⟧) : void 0;
-        ⟦2-char-id⟧(⟦2-char-id⟧, XJ, void 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧)
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧], lB, dB, ⟦2-char-id⟧) : void 0;
+        ⟦2-char-id⟧(⟦2-char-id⟧, lB, void 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧)
       }
       return ⟦2-char-id⟧
     }
```

</details>

<details>
<summary>Hunk 45 · Change · +1 / -1</summary>

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
<summary>Hunk 46 · Change · +1 / -1</summary>

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
<summary>Hunk 47 · Change · +2 / -2</summary>

```diff
@@ -1380,13 +1380,13 @@
       var ⟦2-char-id⟧ = this.__data__;
       return ⟦2-char-id⟧ ? void 0 !== ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧.call(⟦2-char-id⟧, ⟦2-char-id⟧)
     }, ⟦2-char-id⟧.prototype.set = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return this.__data__[⟦2-char-id⟧] = ⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧, this
+      return this.__data__[⟦2-char-id⟧] = ⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧, this
     }, ⟦2-char-id⟧.prototype.clear = function() {
       this.__data__ = []
     }, ⟦2-char-id⟧.prototype.delete = function(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = this.__data__,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-      return !(⟦2-char-id⟧ < 0) && (⟦2-char-id⟧ == ⟦2-char-id⟧.length - 1 ? ⟦2-char-id⟧.pop() : ⟦2-char-id⟧.call(⟦2-char-id⟧, ZJ, 1), !0)
+      return !(⟦2-char-id⟧ < 0) && (⟦2-char-id⟧ == ⟦2-char-id⟧.length - 1 ? ⟦2-char-id⟧.pop() : ⟦2-char-id⟧.call(⟦2-char-id⟧, dB, 1), !0)
     }, ⟦2-char-id⟧.prototype.get = function(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = this.__data__,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 48 · Change · +1 / -1</summary>

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
<summary>Hunk 49 · Change · +5 / -5</summary>

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
<summary>Hunk 50 · Change · +3 / -3</summary>

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
<summary>Hunk 51 · Change · +1 / -1</summary>

```diff
@@ -1529,7 +1529,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      var ⟦2-char-id⟧ = ["View", cJ, "d", ⟦2-char-id⟧].join("");
+      var ⟦2-char-id⟧ = ["View", TB, "d", ⟦2-char-id⟧].join("");
       ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = "View_Nil" + ⟦2-char-id⟧);
       var ⟦2-char-id⟧ = "generic" === ⟦2-char-id⟧;
       if (-1 === ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 52 · Change · +1 / -1</summary>

```diff
@@ -1557,7 +1557,7 @@
       ⟦2-char-id⟧.push("function " + ⟦2-char-id⟧ + "(a," + ⟦2-char-id⟧ + "," + ⟦2-char-id⟧ + ",d){this.data=a", "this.shape=[" + ⟦2-char-id⟧ + "]", "this.stride=[" + ⟦2-char-id⟧ + "]", "this.offset=d|0}", "var proto=" + ⟦2-char-id⟧ + ".prototype", "proto.dtype='" + ⟦2-char-id⟧ + "'", "proto.dimension=" + ⟦2-char-id⟧), ⟦2-char-id⟧.push("Object.defineProperty(proto,'size',{get:function " + ⟦2-char-id⟧ + "_size(){return " + ⟦2-char-id⟧.map((function(⟦2-char-id⟧) {
         return "this.shape[" + ⟦2-char-id⟧ + "]"
       })).join("*"), "}})"), 1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.push("proto.order=[0]") : (⟦2-char-id⟧.push("Object.defineProperty(proto,'order',{get:"), ⟦2-char-id⟧ < 4 ? (⟦2-char-id⟧.push("function " + ⟦2-char-id⟧ + "_order(){"), 2 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === ⟦2-char-id⟧ && ⟦2-char-id⟧.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : ⟦2-char-id⟧.push("ORDER})")), ⟦2-char-id⟧.push("proto.set=function " + ⟦2-char-id⟧ + "_set(" + ⟦2-char-id⟧.join(",") + ",v){"), ⟦2-char-id⟧ ? ⟦2-char-id⟧.push("return this.data.set(" + ⟦2-char-id⟧ + ",v)}") : ⟦2-char-id⟧.push("return this.data[" + ⟦2-char-id⟧ + "]=v}"), ⟦2-char-id⟧.push("proto.get=function " + ⟦2-char-id⟧ + "_get(" + ⟦2-char-id⟧.join(",") + "){"), ⟦2-char-id⟧ ? ⟦2-char-id⟧.push("return this.data.get(" + ⟦2-char-id⟧ + ")}") : ⟦2-char-id⟧.push("return this.data[" + ⟦2-char-id⟧ + "]}"), ⟦2-char-id⟧.push("proto.index=function " + ⟦2-char-id⟧ + "_index(", ⟦2-char-id⟧.join(), "){return " + ⟦2-char-id⟧ + "}"), ⟦2-char-id⟧.push("proto.hi=function " + ⟦2-char-id⟧ + "_hi(" + ⟦2-char-id⟧.join(",") + "){return new " + ⟦2-char-id⟧ + "(this.data," + ⟦2-char-id⟧.map((function(⟦2-char-id⟧) {
-        return ["(typeof i", JJ, "!=='number'||i", JJ, "<0)?this.shape[", JJ, "]:i", JJ, "|0"].join("")
+        return ["(typeof i", BB, "!=='number'||i", BB, "<0)?this.shape[", BB, "]:i", BB, "|0"].join("")
       })).join(",") + "," + ⟦2-char-id⟧.map((function(⟦2-char-id⟧) {
         return "this.stride[" + ⟦2-char-id⟧ + "]"
       })).join(",") + ",this.offset)}");
```

</details>

<details>
<summary>Hunk 53 · Change · +1 / -1</summary>

```diff
@@ -1613,7 +1613,7 @@
       buffer: [],
       generic: []
     };
-    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       if (void 0 === ⟦2-char-id⟧) return (0, ⟦2-char-id⟧.array[0])([]);
       "number" === typeof ⟦2-char-id⟧ && (⟦2-char-id⟧ = [⟦2-char-id⟧]), void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = [⟦2-char-id⟧.length]);
       var ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
```

</details>

<details>
<summary>Hunk 54 · Change · +5 / -5</summary>

```diff
@@ -1653,11 +1653,11 @@
           }
           return Array.isArray(⟦2-char-id⟧) ? "array" : "generic"
         }(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]; ⟦2-char-id⟧.length <= ⟦2-char-id⟧ + 1;) ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length - 1));
-      return (0, ⟦2-char-id⟧[⟦2-char-id⟧ + 1])(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧)
-    }
-  },
-  37434: ⟦2-char-id⟧ => {
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return (0, ⟦2-char-id⟧[⟦2-char-id⟧ + 1])(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧)
+    }
+  },
+  37397: ⟦2-char-id⟧ => {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = -1 / 0, ⟦2-char-id⟧ = 1 / 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
         var ⟦2-char-id⟧ = (⟦2-char-id⟧[0][⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧]) / ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = (⟦2-char-id⟧[1][⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧]) / ⟦2-char-id⟧[⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 55 · Change · +2 / -2</summary>

```diff
@@ -1670,8 +1670,8 @@
       }
       return ⟦2-char-id⟧ > ⟦2-char-id⟧ ? 1 / 0 : ⟦2-char-id⟧
     }
-    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧) {
-      var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧);
+    ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧) {
+      var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧);
       if (⟦2-char-id⟧ === 1 / 0) ⟦2-char-id⟧ = null;
       else {
         ⟦2-char-id⟧ = ⟦2-char-id⟧ || [];
```

</details>

<details>
<summary>Hunk 56 · Change · +5 / -5</summary>

```diff
@@ -1680,11 +1680,11 @@
       return ⟦2-char-id⟧
     }, ⟦2-char-id⟧.exports.distance = ⟦2-char-id⟧
   },
-  36711: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36715);
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      for (var ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
+  36649: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36656);
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      for (var ⟦2-char-id⟧, dB, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
         for (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧;) ++⟦2-char-id⟧, ++⟦2-char-id⟧;
         ⟦2-char-id⟧ += ⟦2-char-id⟧.log2(⟦2-char-id⟧) / 7 | 0, ⟦2-char-id⟧ += ⟦2-char-id⟧.log2(⟦2-char-id⟧ >>> 0) / 7 | 0, ⟦2-char-id⟧ += 2
       }
```

</details>

<details>
<summary>Hunk 57 · Change · +1 / -1</summary>

```diff
@@ -1692,7 +1692,7 @@
     }
     ⟦2-char-id⟧.size = ⟦2-char-id⟧, ⟦2-char-id⟧.encode = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ || (⟦2-char-id⟧ = new Uint8Array(⟦2-char-id⟧(⟦2-char-id⟧)));
-      for (var ⟦2-char-id⟧, FJ, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
+      for (var ⟦2-char-id⟧, VB, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
         for (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧[⟦2-char-id⟧] === ⟦2-char-id⟧;) ++⟦2-char-id⟧, ++⟦2-char-id⟧;
         for (; ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ >= 128;) ⟦2-char-id⟧[⟦2-char-id⟧++] = 128 + (127 & ⟦2-char-id⟧), ⟦2-char-id⟧ >>>= 7;
         if (⟦2-char-id⟧ >= ⟦2-char-id⟧) throw new Error("RLE buffer overflow");
```

</details>

<details>
<summary>Hunk 58 · Change · +1 / -1</summary>

```diff
@@ -1702,7 +1702,7 @@
       }
       return ⟦2-char-id⟧
     }, ⟦2-char-id⟧.decode = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      for (var ⟦2-char-id⟧, FJ, UJ, eJ, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
+      for (var ⟦2-char-id⟧, VB, yB, pB, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
         for (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧] >= 128;) ⟦2-char-id⟧ += (127 & ⟦2-char-id⟧[⟦2-char-id⟧++]) << ⟦2-char-id⟧, ⟦2-char-id⟧ += 7;
         if (⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧++] << ⟦2-char-id⟧, ⟦2-char-id⟧ >= ⟦2-char-id⟧) throw new Error("RLE buffer underrun");
         if (⟦2-char-id⟧ + ⟦2-char-id⟧ > ⟦2-char-id⟧) throw new Error("Chunk buffer overflow");
```

</details>

<details>
<summary>Hunk 59 · Change · +2 / -2</summary>

```diff
@@ -1713,10 +1713,10 @@
       return ⟦2-char-id⟧
     }
   },
-  36715: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  36656: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = 32;
-      return (⟦2-char-id⟧ &= -⟦2-char-id⟧) && ⟦2-char-id⟧--, 65535 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 16), 16711935 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 8), 252645135 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 4), 858993459 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 2), 1431655765 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 1), cJ
+      return (⟦2-char-id⟧ &= -⟦2-char-id⟧) && ⟦2-char-id⟧--, 65535 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 16), 16711935 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 8), 252645135 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 4), 858993459 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 2), 1431655765 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 1), TB
     }
     ⟦2-char-id⟧.INT_BITS = 32, ⟦2-char-id⟧.INT_MAX = 2147483647, ⟦2-char-id⟧.INT_MIN = -1 << 31, ⟦2-char-id⟧.sign = function(⟦2-char-id⟧) {
       return (⟦2-char-id⟧ > 0) - (⟦2-char-id⟧ < 0)
```

</details>

<details>
<summary>Hunk 60 · Change · +1 / -1</summary>

```diff
@@ -1758,7 +1758,7 @@
       return (⟦2-char-id⟧ = 1431655765 & ((⟦2-char-id⟧ = 858993459 & ((⟦2-char-id⟧ = 252645135 & ((⟦2-char-id⟧ = 16711935 & ((⟦2-char-id⟧ &= 65535) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2)) | ⟦2-char-id⟧ << 1)) | (⟦2-char-id⟧ = 1431655765 & ((⟦2-char-id⟧ = 858993459 & ((⟦2-char-id⟧ = 252645135 & ((⟦2-char-id⟧ = 16711935 & ((⟦2-char-id⟧ &= 65535) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2)) | ⟦2-char-id⟧ << 1)) << 1
     }, ⟦2-char-id⟧.deinterleave2 = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return (⟦2-char-id⟧ = 65535 & ((⟦2-char-id⟧ = 16711935 & ((⟦2-char-id⟧ = 252645135 & ((⟦2-char-id⟧ = 858993459 & ((⟦2-char-id⟧ = ⟦2-char-id⟧ >>> ⟦2-char-id⟧ & 1431655765) | ⟦2-char-id⟧ >>> 1)) | ⟦2-char-id⟧ >>> 2)) | ⟦2-char-id⟧ >>> 4)) | ⟦2-char-id⟧ >>> 16)) << 16 >> 16
-    }, ⟦2-char-id⟧.interleave3 = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    }, ⟦2-char-id⟧.interleave3 = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧ = 1227133513 & ((⟦2-char-id⟧ = 3272356035 & ((⟦2-char-id⟧ = 251719695 & ((⟦2-char-id⟧ = 4278190335 & ((⟦2-char-id⟧ &= 1023) | ⟦2-char-id⟧ << 16)) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2), (⟦2-char-id⟧ |= (⟦2-char-id⟧ = 1227133513 & ((⟦2-char-id⟧ = 3272356035 & ((⟦2-char-id⟧ = 251719695 & ((⟦2-char-id⟧ = 4278190335 & ((⟦2-char-id⟧ &= 1023) | ⟦2-char-id⟧ << 16)) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2)) << 1) | (⟦2-char-id⟧ = 1227133513 & ((⟦2-char-id⟧ = 3272356035 & ((⟦2-char-id⟧ = 251719695 & ((⟦2-char-id⟧ = 4278190335 & ((⟦2-char-id⟧ &= 1023) | ⟦2-char-id⟧ << 16)) | ⟦2-char-id⟧ << 8)) | ⟦2-char-id⟧ << 4)) | ⟦2-char-id⟧ << 2)) << 2
     }, ⟦2-char-id⟧.deinterleave3 = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return (⟦2-char-id⟧ = 1023 & ((⟦2-char-id⟧ = 4278190335 & ((⟦2-char-id⟧ = 251719695 & ((⟦2-char-id⟧ = 3272356035 & ((⟦2-char-id⟧ = ⟦2-char-id⟧ >>> ⟦2-char-id⟧ & 1227133513) | ⟦2-char-id⟧ >>> 2)) | ⟦2-char-id⟧ >>> 4)) | ⟦2-char-id⟧ >>> 8)) | ⟦2-char-id⟧ >>> 16)) << 22 >> 22
```

</details>

<details>
<summary>Hunk 61 · Change · +11 / -11</summary>

```diff
@@ -1767,24 +1767,24 @@
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
-        return ⟦2-char-id⟧.GetPlanesToRef(⟦2-char-id⟧, ⟦2-char-id⟧), cJ
+        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(new ⟦2-char-id⟧.d(0, 0, 0, 0));
+        return ⟦2-char-id⟧.GetPlanesToRef(⟦2-char-id⟧, ⟦2-char-id⟧), TB
       }
       static GetNearPlaneToRef(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.m;
```

</details>

<details>
<summary>Hunk 62 · Change · +7 / -7</summary>

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
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        this.normal = new ⟦2-char-id⟧.j(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), this.d = ⟦2-char-id⟧
-      }
-      JFJ() {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        this.normal = new ⟦2-char-id⟧.p(⟦2-char-id⟧, TB, ⟦2-char-id⟧), this.d = ⟦2-char-id⟧
+      }
+      FVB() {
         return [this.normal.x, this.normal.y, this.normal.z, this.d]
       }
       clone() {
```

</details>

<details>
<summary>Hunk 63 · Change · +1 / -1</summary>

```diff
@@ -1840,7 +1840,7 @@
       }
       getHashCode() {
         let ⟦2-char-id⟧ = this.normal.getHashCode();
-        return ⟦2-char-id⟧ = 397 * ⟦2-char-id⟧ ^ this.d, JJ
+        return ⟦2-char-id⟧ = 397 * ⟦2-char-id⟧ ^ this.d, BB
       }
       normalize() {
         const ⟦2-char-id⟧ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
```

</details>

<details>
<summary>Hunk 64 · Change · +2 / -2</summary>

```diff
@@ -1859,12 +1859,12 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧[4] + ⟦2-char-id⟧ * ⟦2-char-id⟧[5] + ⟦2-char-id⟧ * ⟦2-char-id⟧[6] + ⟦2-char-id⟧ * ⟦2-char-id⟧[7],
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧[8] + ⟦2-char-id⟧ * ⟦2-char-id⟧[9] + ⟦2-char-id⟧ * ⟦2-char-id⟧[10] + ⟦2-char-id⟧ * ⟦2-char-id⟧[11],
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧[12] + ⟦2-char-id⟧ * ⟦2-char-id⟧[13] + ⟦2-char-id⟧ * ⟦2-char-id⟧[14] + ⟦2-char-id⟧ * ⟦2-char-id⟧[15];
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, jJ, YJ, ⟦2-char-id⟧)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, gB, oB, ⟦2-char-id⟧)
       }
       dotCoordinate(⟦2-char-id⟧) {
         return this.normal.x * ⟦2-char-id⟧.x + this.normal.y * ⟦2-char-id⟧.y + this.normal.z * ⟦2-char-id⟧.z + this.d
       }
-      copyFromPoints(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      copyFromPoints(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.x - ⟦2-char-id⟧.x,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.y - ⟦2-char-id⟧.y,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.z - ⟦2-char-id⟧.z,
```

</details>

<details>
<summary>Hunk 65 · Change · +25 / -25</summary>

```diff
@@ -1876,60 +1876,60 @@
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
       }
-      static FromPoints(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static FromPoints(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(0, 0, 0, 0);
-        return ⟦2-char-id⟧.copyFromPoints(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), FJ
+        return ⟦2-char-id⟧.copyFromPoints(⟦2-char-id⟧, TB, ⟦2-char-id⟧), VB
       }
       static FromPositionAndNormal(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(0, 0, 0, 0);
-        return this.FromPositionAndNormalToRef(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
-      }
-      static FromPositionAndNormalToRef(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.normal.rZJ(⟦2-char-id⟧), ⟦2-char-id⟧.normal.normalize(), ⟦2-char-id⟧.d = -⟦2-char-id⟧.dot(⟦2-char-id⟧.normal), ZJ
-      }
-      static SignedDistanceToPlaneFromPositionAndNormal(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return this.FromPositionAndNormalToRef(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
+      }
+      static FromPositionAndNormalToRef(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧.normal.bdB(⟦2-char-id⟧), ⟦2-char-id⟧.normal.normalize(), ⟦2-char-id⟧.d = -⟦2-char-id⟧.dot(⟦2-char-id⟧.normal), dB
+      }
+      static SignedDistanceToPlaneFromPositionAndNormal(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.x = ⟦2-char-id⟧, this.y = ⟦2-char-id⟧, this.width = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧
       }
       toGlobal(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(this.x * ⟦2-char-id⟧, this.y * ⟦2-char-id⟧, this.width * ⟦2-char-id⟧, this.height * ⟦2-char-id⟧)
       }
-      toGlobalToRef(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      toGlobalToRef(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         return ⟦2-char-id⟧.x = this.x * ⟦2-char-id⟧, ⟦2-char-id⟧.y = this.y * ⟦2-char-id⟧, ⟦2-char-id⟧.width = this.width * ⟦2-char-id⟧, ⟦2-char-id⟧.height = this.height * ⟦2-char-id⟧, this
       }
       clone() {
```

</details>

<details>
<summary>Hunk 66 · Change · +3 / -3</summary>

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
<summary><code>bundles/bloxd.io/chunks/js/212.js</code> · modified · +216 / -216</summary>

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
@@ -33,7 +33,7 @@
       _addCheckInputs(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.checkInputs;
         return () => {
-          cJ(), JJ()
+          TB(), BB()
         }
       }
       attachInput(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

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
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -78,7 +78,7 @@
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
             if (⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
-                ⟦2-char-id⟧ = ⟦2-char-id⟧.c.Parse((() => new ⟦2-char-id⟧), FJ, null);
+                ⟦2-char-id⟧ = ⟦2-char-id⟧.c.Parse((() => new ⟦2-char-id⟧), VB, null);
               this.add(⟦2-char-id⟧)
             }
           }
```

</details>

<details>
<summary>Hunk 6 · Change · +23 / -23</summary>

```diff
@@ -86,42 +86,42 @@
           for (const ⟦2-char-id⟧ in this.attached) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[this.attached[⟦2-char-id⟧].getClassName()];
             if (⟦2-char-id⟧) {
-              const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.Parse((() => new ⟦2-char-id⟧), JJ, null);
+              const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.Parse((() => new ⟦2-char-id⟧), BB, null);
               this.remove(this.attached[⟦2-char-id⟧]), this.add(⟦2-char-id⟧)
             }
           }
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
-        let ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ = ⟦2-char-id⟧.b,
+        let ⟦2-char-id⟧, dB, ⟦2-char-id⟧ = ⟦2-char-id⟧.c,
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [];
         return ⟦2-char-id⟧ = class extends ⟦2-char-id⟧ {
-          constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧), this.groundColor = (0, ⟦2-char-id⟧.e)(this, jJ, new ⟦2-char-id⟧.e(0, 0, 0)), this.direction = ((0, ⟦2-char-id⟧.e)(this, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.e)(this, hJ, void 0)), (0, ⟦2-char-id⟧.e)(this, ⟦2-char-id⟧), this.direction = ⟦2-char-id⟧ || ⟦2-char-id⟧.j.Up()
+          constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+            super(⟦2-char-id⟧, dB, ⟦2-char-id⟧), this.groundColor = (0, ⟦2-char-id⟧.h)(this, gB, new ⟦2-char-id⟧.c(0, 0, 0)), this.direction = ((0, ⟦2-char-id⟧.h)(this, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.h)(this, kB, void 0)), (0, ⟦2-char-id⟧.h)(this, ⟦2-char-id⟧), this.direction = ⟦2-char-id⟧ || ⟦2-char-id⟧.p.Up()
           }
           _buildUniformLayout() {
             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
```

</details>

<details>
<summary>Hunk 7 · Change · +5 / -5</summary>

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
-          ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.m)()], ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.E)()], (0, ⟦2-char-id⟧.d)(null, null, cJ, {
+          ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.s)()], ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.T)()], (0, ⟦2-char-id⟧.g)(null, null, TB, {
             kind: "field",
             name: "groundColor",
             static: !1,
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -167,7 +167,7 @@
               }
             },
             metadata: ⟦2-char-id⟧
-          }, jJ, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.d)(null, null, ZJ, {
+          }, gB, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.g)(null, null, dB, {
             kind: "field",
             name: "direction",
             static: !1,
```

</details>

<details>
<summary>Hunk 9 · Change · +20 / -20</summary>

```diff
@@ -180,38 +180,38 @@
               }
             },
             metadata: ⟦2-char-id⟧
-          }, hJ, ⟦2-char-id⟧), ⟦2-char-id⟧ && Object.defineProperty(⟦2-char-id⟧, Symbol.metadata, {
+          }, kB, ⟦2-char-id⟧), ⟦2-char-id⟧ && Object.defineProperty(⟦2-char-id⟧, Symbol.metadata, {
             enumerable: !0,
             configurable: !0,
             writable: !0,
             value: ⟦2-char-id⟧
           })
-        })(), JJ
+        })(), BB
       })(),
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
-        return ⟦2-char-id⟧.GetPlanesToRef(⟦2-char-id⟧, ⟦2-char-id⟧), cJ
+        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 6; ⟦2-char-id⟧++) ⟦2-char-id⟧.push(new ⟦2-char-id⟧.d(0, 0, 0, 0));
+        return ⟦2-char-id⟧.GetPlanesToRef(⟦2-char-id⟧, ⟦2-char-id⟧), TB
       }
       static GetNearPlaneToRef(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.m;
```

</details>

<details>
<summary>Hunk 10 · Change · +9 / -9</summary>

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
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        this.normal = new ⟦2-char-id⟧.j(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), this.d = ⟦2-char-id⟧
-      }
-      JFJ() {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        this.normal = new ⟦2-char-id⟧.p(⟦2-char-id⟧, TB, ⟦2-char-id⟧), this.d = ⟦2-char-id⟧
+      }
+      FVB() {
         return [this.normal.x, this.normal.y, this.normal.z, this.d]
       }
       clone() {
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -267,7 +267,7 @@
       }
       getHashCode() {
         let ⟦2-char-id⟧ = this.normal.getHashCode();
-        return ⟦2-char-id⟧ = 397 * ⟦2-char-id⟧ ^ this.d, JJ
+        return ⟦2-char-id⟧ = 397 * ⟦2-char-id⟧ ^ this.d, BB
       }
       normalize() {
         const ⟦2-char-id⟧ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
```

</details>

<details>
<summary>Hunk 12 · Change · +2 / -2</summary>

```diff
@@ -286,12 +286,12 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧[4] + ⟦2-char-id⟧ * ⟦2-char-id⟧[5] + ⟦2-char-id⟧ * ⟦2-char-id⟧[6] + ⟦2-char-id⟧ * ⟦2-char-id⟧[7],
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧[8] + ⟦2-char-id⟧ * ⟦2-char-id⟧[9] + ⟦2-char-id⟧ * ⟦2-char-id⟧[10] + ⟦2-char-id⟧ * ⟦2-char-id⟧[11],
           ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧[12] + ⟦2-char-id⟧ * ⟦2-char-id⟧[13] + ⟦2-char-id⟧ * ⟦2-char-id⟧[14] + ⟦2-char-id⟧ * ⟦2-char-id⟧[15];
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, jJ, YJ, ⟦2-char-id⟧)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, gB, oB, ⟦2-char-id⟧)
       }
       dotCoordinate(⟦2-char-id⟧) {
         return this.normal.x * ⟦2-char-id⟧.x + this.normal.y * ⟦2-char-id⟧.y + this.normal.z * ⟦2-char-id⟧.z + this.d
       }
-      copyFromPoints(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      copyFromPoints(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.x - ⟦2-char-id⟧.x,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.y - ⟦2-char-id⟧.y,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.z - ⟦2-char-id⟧.z,
```

</details>

<details>
<summary>Hunk 13 · Change · +26 / -26</summary>

```diff
@@ -303,60 +303,60 @@
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
       }
-      static FromPoints(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static FromPoints(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(0, 0, 0, 0);
-        return ⟦2-char-id⟧.copyFromPoints(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), FJ
+        return ⟦2-char-id⟧.copyFromPoints(⟦2-char-id⟧, TB, ⟦2-char-id⟧), VB
       }
       static FromPositionAndNormal(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧(0, 0, 0, 0);
-        return this.FromPositionAndNormalToRef(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
-      }
-      static FromPositionAndNormalToRef(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.normal.rZJ(⟦2-char-id⟧), ⟦2-char-id⟧.normal.normalize(), ⟦2-char-id⟧.d = -⟦2-char-id⟧.dot(⟦2-char-id⟧.normal), ZJ
-      }
-      static SignedDistanceToPlaneFromPositionAndNormal(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return this.FromPositionAndNormalToRef(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
+      }
+      static FromPositionAndNormalToRef(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧.normal.bdB(⟦2-char-id⟧), ⟦2-char-id⟧.normal.normalize(), ⟦2-char-id⟧.d = -⟦2-char-id⟧.dot(⟦2-char-id⟧.normal), dB
+      }
+      static SignedDistanceToPlaneFromPositionAndNormal(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.x = ⟦2-char-id⟧, this.y = ⟦2-char-id⟧, this.width = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧
       }
       toGlobal(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(this.x * ⟦2-char-id⟧, this.y * ⟦2-char-id⟧, this.width * ⟦2-char-id⟧, this.height * ⟦2-char-id⟧)
       }
-      toGlobalToRef(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      toGlobalToRef(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         return ⟦2-char-id⟧.x = this.x * ⟦2-char-id⟧, ⟦2-char-id⟧.y = this.y * ⟦2-char-id⟧, ⟦2-char-id⟧.width = this.width * ⟦2-char-id⟧, ⟦2-char-id⟧.height = this.height * ⟦2-char-id⟧, this
       }
       clone() {
```

</details>

<details>
<summary>Hunk 14 · Change · +9 / -9</summary>

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
<summary>Hunk 15 · Change · +7 / -7</summary>

```diff
@@ -409,19 +409,19 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.flat(), ⟦2-char-id⟧ = ⟦2-char-id⟧.flat(), ⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧).concat(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧[0], ⟦2-char-id⟧[2], ⟦2-char-id⟧[3], ⟦2-char-id⟧[0], ⟦2-char-id⟧[1], ⟦2-char-id⟧[2]), ⟦2-char-id⟧.push(⟦2-char-id⟧[0], ⟦2-char-id⟧[2], ⟦2-char-id⟧[3], ⟦2-char-id⟧[0], ⟦2-char-id⟧[1], ⟦2-char-id⟧[2])
       }
       const ⟦2-char-id⟧ = [⟦2-char-id⟧ / 2, ⟦2-char-id⟧ / 2, ⟦2-char-id⟧ / 2],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧ * ⟦2-char-id⟧[⟦2-char-id⟧ % 3])), []),
-        ⟦2-char-id⟧ = 0 === ⟦2-char-id⟧.sideOrientation ? 0 : ⟦2-char-id⟧.sideOrientation || ⟦2-char-id⟧.e.DEFAULTSIDE,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, TB, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧ * ⟦2-char-id⟧[⟦2-char-id⟧ % 3])), []),
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
-      ⟦2-char-id⟧.e._ComputeSides(⟦2-char-id⟧, rJ, cJ, ZJ, eJ, ⟦2-char-id⟧.frontUVs, ⟦2-char-id⟧.backUVs);
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+      ⟦2-char-id⟧.d._ComputeSides(⟦2-char-id⟧, vB, TB, dB, pB, ⟦2-char-id⟧.frontUVs, ⟦2-char-id⟧.backUVs);
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
<summary>Hunk 16 · Change · +4 / -4</summary>

```diff
@@ -430,12 +430,12 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
         ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d(⟦2-char-id⟧, ⟦2-char-id⟧);
-      ⟦2-char-id⟧.sideOrientation = ⟦2-char-id⟧.d._GetDefaultSideOrientation(⟦2-char-id⟧.sideOrientation), ⟦2-char-id⟧._originalBuilderSideOrientation = ⟦2-char-id⟧.sideOrientation;
-      return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), FJ
+      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e(⟦2-char-id⟧, ⟦2-char-id⟧);
+      ⟦2-char-id⟧.sideOrientation = ⟦2-char-id⟧.e._GetDefaultSideOrientation(⟦2-char-id⟧.sideOrientation), ⟦2-char-id⟧._originalBuilderSideOrientation = ⟦2-char-id⟧.sideOrientation;
+      return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), VB
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
<summary>Hunk 17 · Change · +10 / -10</summary>

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
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -469,7 +469,7 @@
             y: ⟦2-char-id⟧,
             z: ⟦2-char-id⟧
           } = ⟦2-char-id⟧[⟦2-char-id⟧];
-          if (⟦2-char-id⟧.push(⟦2-char-id⟧, jJ, ⟦2-char-id⟧), ⟦2-char-id⟧) {
+          if (⟦2-char-id⟧.push(⟦2-char-id⟧, gB, ⟦2-char-id⟧), ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
               {
                 r: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 19 · Change · +3 / -3</summary>

```diff
@@ -477,13 +477,13 @@
                 b: ⟦2-char-id⟧,
                 a: ⟦2-char-id⟧
               } = ⟦2-char-id⟧[⟦2-char-id⟧];
-            ⟦2-char-id⟧.push(⟦2-char-id⟧, ZJ, AJ, ⟦2-char-id⟧)
+            ⟦2-char-id⟧.push(⟦2-char-id⟧, dB, JB, ⟦2-char-id⟧)
           }
           ⟦2-char-id⟧ > 0 && (⟦2-char-id⟧.push(⟦2-char-id⟧ - 1), ⟦2-char-id⟧.push(⟦2-char-id⟧)), ⟦2-char-id⟧++
         }
       }
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
-      return ⟦2-char-id⟧.indices = ⟦2-char-id⟧, ⟦2-char-id⟧.positions = ⟦2-char-id⟧, ⟦2-char-id⟧ && (⟦2-char-id⟧.colors = ⟦2-char-id⟧), qJ
+      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d;
+      return ⟦2-char-id⟧.indices = ⟦2-char-id⟧, ⟦2-char-id⟧.positions = ⟦2-char-id⟧, ⟦2-char-id⟧ && (⟦2-char-id⟧.colors = ⟦2-char-id⟧), YB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +2 / -2</summary>

```diff
@@ -493,8 +493,8 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.points,
         ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = [],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.j.Zero();
-      let ⟦2-char-id⟧, hJ, DJ, ⟦2-char-id⟧ = 0,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.p.Zero();
+      let ⟦2-char-id⟧, kB, LB, ⟦2-char-id⟧ = 0,
         ⟦2-char-id⟧ = 0;
       for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧ + 1].subtractToRef(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.length();
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -503,8 +503,8 @@
         ⟦2-char-id⟧[⟦2-char-id⟧ + 1].subtractToRef(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.length() / ⟦2-char-id⟧), ⟦2-char-id⟧.normalize();
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].x + ⟦2-char-id⟧ * ⟦2-char-id⟧.x, ⟦2-char-id⟧[⟦2-char-id⟧].y + ⟦2-char-id⟧ * ⟦2-char-id⟧.y, ⟦2-char-id⟧[⟦2-char-id⟧].z + ⟦2-char-id⟧ * ⟦2-char-id⟧.z), ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].x + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.x, ⟦2-char-id⟧[⟦2-char-id⟧].y + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.y, ⟦2-char-id⟧[⟦2-char-id⟧].z + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.z), ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧ + 1), ⟦2-char-id⟧ += 2
       }
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
-      return ⟦2-char-id⟧.positions = ⟦2-char-id⟧, ⟦2-char-id⟧.indices = ⟦2-char-id⟧, xJ
+      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d;
+      return ⟦2-char-id⟧.positions = ⟦2-char-id⟧, ⟦2-char-id⟧.indices = ⟦2-char-id⟧, EB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 22 · Change · +5 / -5</summary>

```diff
@@ -513,20 +513,20 @@
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
-        return ⟦2-char-id⟧.updateVerticesData(⟦2-char-id⟧.n.PositionKind, JJ, !1, !1), ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.updateVerticesData(⟦2-char-id⟧.n.ColorKind, cJ, !1, !1), ⟦2-char-id⟧.refreshBoundingInfo(), FJ
+        return ⟦2-char-id⟧.updateVerticesData(⟦2-char-id⟧.m.PositionKind, BB, !1, !1), ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.updateVerticesData(⟦2-char-id⟧.m.ColorKind, TB, !1, !1), ⟦2-char-id⟧.refreshBoundingInfo(), VB
       }
       const ⟦2-char-id⟧ = !!⟦2-char-id⟧,
-        ⟦2-char-id⟧ = new ⟦2-char-id⟧.b(⟦2-char-id⟧, ZJ, null, void 0, void 0, qJ, ⟦2-char-id⟧.useVertexAlpha, ⟦2-char-id⟧.material);
-      return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), YJ
+        ⟦2-char-id⟧ = new ⟦2-char-id⟧.b(⟦2-char-id⟧, dB, null, void 0, void 0, YB, ⟦2-char-id⟧.useVertexAlpha, ⟦2-char-id⟧.material);
+      return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), oB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 23 · Change · +2 / -2</summary>

```diff
@@ -550,9 +550,9 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.dashSize || 3;
       if (⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.j.Zero(),
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.Zero(),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.length / 6;
-          let ⟦2-char-id⟧, XJ, qJ, jJ, ⟦2-char-id⟧ = 0,
+          let ⟦2-char-id⟧, lB, YB, gB, ⟦2-char-id⟧ = 0,
             ⟦2-char-id⟧ = 0;
           for (⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧ + 1].subtractToRef(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.length();
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 24 · Change · +6 / -6</summary>

```diff
@@ -562,19 +562,19 @@
             for (⟦2-char-id⟧[⟦2-char-id⟧ + 1].subtractToRef(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.length() / ⟦2-char-id⟧), ⟦2-char-id⟧.normalize(), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧].x + ⟦2-char-id⟧ * ⟦2-char-id⟧.x, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧].y + ⟦2-char-id⟧ * ⟦2-char-id⟧.y, ⟦2-char-id⟧[⟦2-char-id⟧ + 2] = ⟦2-char-id⟧[⟦2-char-id⟧].z + ⟦2-char-id⟧ * ⟦2-char-id⟧.z, ⟦2-char-id⟧[⟦2-char-id⟧ + 3] = ⟦2-char-id⟧[⟦2-char-id⟧].x + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.x, ⟦2-char-id⟧[⟦2-char-id⟧ + 4] = ⟦2-char-id⟧[⟦2-char-id⟧].y + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.y, ⟦2-char-id⟧[⟦2-char-id⟧ + 5] = ⟦2-char-id⟧[⟦2-char-id⟧].z + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧.z, ⟦2-char-id⟧ += 6, ⟦2-char-id⟧++;
           for (; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧].x, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧].y, ⟦2-char-id⟧[⟦2-char-id⟧ + 2] = ⟦2-char-id⟧[⟦2-char-id⟧].z, ⟦2-char-id⟧ += 3
         };
-        return (⟦2-char-id⟧.dashNb || ⟦2-char-id⟧.dashSize || ⟦2-char-id⟧.gapSize || ⟦2-char-id⟧.useVertexAlpha || ⟦2-char-id⟧.material) && ⟦2-char-id⟧.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), ⟦2-char-id⟧.updateMeshPositions(⟦2-char-id⟧, !1), AJ
-      }
-      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.b(⟦2-char-id⟧, ZJ, null, void 0, void 0, void 0, ⟦2-char-id⟧.useVertexAlpha, ⟦2-char-id⟧.material);
-      return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), ⟦2-char-id⟧._creationDataStorage = new ⟦2-char-id⟧.h, ⟦2-char-id⟧._creationDataStorage.dashSize = ⟦2-char-id⟧, ⟦2-char-id⟧._creationDataStorage.gapSize = ⟦2-char-id⟧, DJ
+        return (⟦2-char-id⟧.dashNb || ⟦2-char-id⟧.dashSize || ⟦2-char-id⟧.gapSize || ⟦2-char-id⟧.useVertexAlpha || ⟦2-char-id⟧.material) && ⟦2-char-id⟧.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), ⟦2-char-id⟧.updateMeshPositions(⟦2-char-id⟧, !1), JB
+      }
+      const ⟦2-char-id⟧ = new ⟦2-char-id⟧.b(⟦2-char-id⟧, dB, null, void 0, void 0, void 0, ⟦2-char-id⟧.useVertexAlpha, ⟦2-char-id⟧.material);
+      return ⟦2-char-id⟧(⟦2-char-id⟧).applyToMesh(⟦2-char-id⟧, ⟦2-char-id⟧.updatable), ⟦2-char-id⟧._creationDataStorage = new ⟦2-char-id⟧.j, ⟦2-char-id⟧._creationDataStorage.dashSize = ⟦2-char-id⟧, ⟦2-char-id⟧._creationDataStorage.gapSize = ⟦2-char-id⟧, LB
     }
     let ⟦2-char-id⟧ = !1;
-    ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.e.CreateLineSystem = ⟦2-char-id⟧, ⟦2-char-id⟧.e.CreateDashedLines = ⟦2-char-id⟧, ⟦2-char-id⟧.d.CreateLines = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+    ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.d.CreateLineSystem = ⟦2-char-id⟧, ⟦2-char-id⟧.d.CreateDashedLines = ⟦2-char-id⟧, ⟦2-char-id⟧.e.CreateLines = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, {
         points: ⟦2-char-id⟧,
         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-    }, ⟦2-char-id⟧.d.CreateDashedLines = function(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    }, ⟦2-char-id⟧.e.CreateDashedLines = function(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, {
         points: ⟦2-char-id⟧,
         dashSize: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 25 · Change · +11 / -11</summary>

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
-    var ⟦2-char-id⟧, UJ, ⟦2-char-id⟧ = ⟦2-char-id⟧(36231),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38918),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39159),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39049),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39234),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(38677);
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.d {
+      d: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧, yB, ⟦2-char-id⟧ = ⟦2-char-id⟧(36183),
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
<summary>Hunk 26 · Change · +6 / -6</summary>

```diff
@@ -606,21 +606,21 @@
           ⟦2-char-id⟧ = arguments.length > 5 ? arguments[5] : void 0,
           ⟦2-char-id⟧ = arguments.length > 6 ? arguments[6] : void 0,
           ⟦2-char-id⟧ = arguments.length > 7 ? arguments[7] : void 0;
-        super(⟦2-char-id⟧, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, cJ, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = ⟦2-char-id⟧, this.useVertexAlpha = ⟦2-char-id⟧, this.color = new ⟦2-char-id⟧.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ⟦2-char-id⟧ && (this.color = ⟦2-char-id⟧.color.clone(), this.alpha = ⟦2-char-id⟧.alpha, this.useVertexColor = ⟦2-char-id⟧.useVertexColor, this.useVertexAlpha = ⟦2-char-id⟧.useVertexAlpha), this.intersectionThreshold = .1;
+        super(⟦2-char-id⟧, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, TB, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = ⟦2-char-id⟧, this.useVertexAlpha = ⟦2-char-id⟧, this.color = new ⟦2-char-id⟧.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ⟦2-char-id⟧ && (this.color = ⟦2-char-id⟧.color.clone(), this.alpha = ⟦2-char-id⟧.alpha, this.useVertexColor = ⟦2-char-id⟧.useVertexColor, this.useVertexAlpha = ⟦2-char-id⟧.useVertexAlpha), this.intersectionThreshold = .1;
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
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.t("colorShader", this.Qy(), "color", qJ, !1);
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.l("colorShader", this.jU(), "color", YB, !1);
           ⟦2-char-id⟧.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(⟦2-char-id⟧)
         }
       }
```

</details>

<details>
<summary>Hunk 27 · Change · +1 / -1</summary>

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
<summary>Hunk 28 · Change · +5 / -5</summary>

```diff
@@ -646,20 +646,20 @@
       _bind(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (!this._geometry) return this;
         const ⟦2-char-id⟧ = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
-        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(⟦2-char-id⟧, ⟦2-char-id⟧) : this._geometry._bind(⟦2-char-id⟧, ZJ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
+        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(⟦2-char-id⟧, ⟦2-char-id⟧) : this._geometry._bind(⟦2-char-id⟧, dB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
           const {
             r: ⟦2-char-id⟧,
             g: ⟦2-char-id⟧,
             b: ⟦2-char-id⟧
           } = this.color;
-          this._color4.set(⟦2-char-id⟧, cJ, ZJ, this.alpha), this.material.setColor4("color", this._color4)
+          this._color4.set(⟦2-char-id⟧, TB, dB, this.alpha), this.material.setColor4("color", this._color4)
         }
         return this
       }
-      _draw(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      _draw(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
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
<summary>Hunk 29 · Change · +9 / -9</summary>

```diff
@@ -670,28 +670,28 @@
           ⟦2-char-id⟧ = arguments.length > 2 ? arguments[2] : void 0;
         if (⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧._addToSceneRootNodes) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-          return ⟦2-char-id⟧.source = this, new ⟦2-char-id⟧(⟦2-char-id⟧, this.Qy(), ⟦2-char-id⟧.parent, ⟦2-char-id⟧.source, ⟦2-char-id⟧.doNotCloneChildren)
-        }
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, this.Qy(), cJ, this, ⟦2-char-id⟧)
+          return ⟦2-char-id⟧.source = this, new ⟦2-char-id⟧(⟦2-char-id⟧, this.jU(), ⟦2-char-id⟧.parent, ⟦2-char-id⟧.source, ⟦2-char-id⟧.doNotCloneChildren)
+        }
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, this.jU(), TB, this, ⟦2-char-id⟧)
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
-        return ⟦2-char-id⟧.color = ⟦2-char-id⟧.e.FromArray(⟦2-char-id⟧.color), ⟦2-char-id⟧.alpha = ⟦2-char-id⟧.alpha, ZJ
+        return ⟦2-char-id⟧.color = ⟦2-char-id⟧.c.FromArray(⟦2-char-id⟧.color), ⟦2-char-id⟧.alpha = ⟦2-char-id⟧.alpha, dB
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
<summary>Hunk 30 · Change · +11 / -11</summary>

```diff
@@ -702,19 +702,19 @@
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
-    const ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧.getClassName && "Mesh" === ⟦2-char-id⟧.getClassName() ? null : !⟦2-char-id⟧.getClassName || "SubMesh" !== ⟦2-char-id⟧.getClassName() && "PhysicsBody" !== ⟦2-char-id⟧.getClassName() ? ⟦2-char-id⟧.clone ? ⟦2-char-id⟧.clone() : Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice() : ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ ? {
-      ...JJ
+      ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.e._LinesMeshParser = (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.Parse(⟦2-char-id⟧, ⟦2-char-id⟧))
+    }(⟦2-char-id⟧ = ⟦2-char-id⟧.prototype).enableEdgesRendering ?? (⟦2-char-id⟧.enableEdgesRendering = (0, ⟦2-char-id⟧.h)("LinesMesh", "enableEdgesRendering")), (⟦2-char-id⟧ = ⟦2-char-id⟧.prototype).enableEdgesRendering ?? (⟦2-char-id⟧.enableEdgesRendering = (0, ⟦2-char-id⟧.h)("InstancedLinesMesh", "enableEdgesRendering"))
+  },
+  37646: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      b: () => ⟦2-char-id⟧
+    });
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37651);
+    const ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧.getClassName && "Mesh" === ⟦2-char-id⟧.getClassName() ? null : !⟦2-char-id⟧.getClassName || "SubMesh" !== ⟦2-char-id⟧.getClassName() && "PhysicsBody" !== ⟦2-char-id⟧.getClassName() ? ⟦2-char-id⟧.clone ? ⟦2-char-id⟧.clone() : Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice() : ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ ? {
+      ...BB
     } : null : ⟦2-char-id⟧.clone(⟦2-char-id⟧) : null;
     class ⟦2-char-id⟧ {
-      static DeepCopy(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      static DeepCopy(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
         const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 31 · Change · +14 / -14</summary>

```diff
@@ -737,31 +737,31 @@
               if (⟦2-char-id⟧[⟦2-char-id⟧] = [], ⟦2-char-id⟧.length > 0)
                 if ("object" == typeof ⟦2-char-id⟧[0])
                   for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
-                    const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], cJ, ⟦2-char-id⟧); - 1 === ⟦2-char-id⟧[⟦2-char-id⟧].indexOf(⟦2-char-id⟧) && ⟦2-char-id⟧[⟦2-char-id⟧].push(⟦2-char-id⟧)
+                    const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], TB, ⟦2-char-id⟧); - 1 === ⟦2-char-id⟧[⟦2-char-id⟧].indexOf(⟦2-char-id⟧) && ⟦2-char-id⟧[⟦2-char-id⟧].push(⟦2-char-id⟧)
                   } else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.slice(0)
-            } else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+            } else ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
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
<summary>Hunk 32 · Change · +1 / -1</summary>

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
<summary>Hunk 33 · Change · +2 / -2</summary>

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
<summary>Hunk 34 · Change · +6 / -6</summary>

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
