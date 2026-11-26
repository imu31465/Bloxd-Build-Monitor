export const id = 63;
export const ids = [63];
export const modules = {
  34907: (VV, eV, xV) => {
    function JV() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function YV(VV) {
      return VV instanceof Uint8Array && (!JV() || !Buffer.isBuffer(VV))
    }

    function UV(VV) {
      return VV instanceof ArrayBuffer
    }

    function yV(VV) {
      return !!JV() && Buffer.isBuffer(VV)
    }
    var pV = xV(34913).b,
      QV = xV(34918).e,
      nV = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    eV.b = function(VV) {
      if (!YV(VV) && !UV(VV) && !yV(VV)) throw new TypeError(nV);
      var eV = !1,
        xV = !1;
      YV(VV) ? eV = !0 : UV(VV) && (xV = !0, VV = new Uint8Array(VV));
      var JV, pV, wV, ZV = new QV(VV),
        vV = ZV.maxCompressedLength();
      if (eV ? (JV = new Uint8Array(vV), wV = ZV.compressToBuffer(JV)) : xV ? (JV = new ArrayBuffer(vV), pV = new Uint8Array(JV), wV = ZV.compressToBuffer(pV)) : (JV = Buffer.alloc(vV), wV = ZV.compressToBuffer(JV)), !JV.slice) {
        var rV = new Uint8Array(Array.prototype.slice.call(JV, 0, wV));
        if (eV) return rV;
        if (xV) return rV.buffer;
        throw new Error("Not implemented")
      }
      return JV.slice(0, wV)
    }
  },
  34918: (VV, eV) => {
    var xV = new Array(15);

    function JV(VV, eV) {
      return 506832829 * VV >>> eV
    }

    function YV(VV, eV) {
      return VV[eV] + (VV[eV + 1] << 8) + (VV[eV + 2] << 16) + (VV[eV + 3] << 24)
    }

    function UV(VV, eV, xV) {
      return VV[eV] === VV[xV] && VV[eV + 1] === VV[xV + 1] && VV[eV + 2] === VV[xV + 2] && VV[eV + 3] === VV[xV + 3]
    }

    function yV(VV, eV, xV, JV, YV) {
      return xV <= 60 ? (JV[YV] = xV - 1 << 2, YV += 1) : xV < 256 ? (JV[YV] = 240, JV[YV + 1] = xV - 1, YV += 2) : (JV[YV] = 244, JV[YV + 1] = xV - 1 & 255, JV[YV + 2] = xV - 1 >>> 8, YV += 3),
        function(VV, eV, xV, JV, YV) {
          var UV;
          for (UV = 0; UV < YV; UV++) xV[JV + UV] = VV[eV + UV]
        }(VV, eV, JV, YV, xV), YV + xV
    }

    function pV(VV, eV, xV, JV) {
      return JV < 12 && xV < 2048 ? (VV[eV] = 1 + (JV - 4 << 2) + (xV >>> 8 << 5), VV[eV + 1] = 255 & xV, eV + 2) : (VV[eV] = 2 + (JV - 1 << 2), VV[eV + 1] = 255 & xV, VV[eV + 2] = xV >>> 8, eV + 3)
    }

    function QV(VV, eV, xV, JV) {
      for (; JV >= 68;) eV = pV(VV, eV, xV, 64), JV -= 64;
      return JV > 64 && (eV = pV(VV, eV, xV, 60), JV -= 60), pV(VV, eV, xV, JV)
    }

    function nV(VV, eV, pV, nV, wV) {
      for (var ZV = 1; 1 << ZV <= pV && ZV <= 14;) ZV += 1;
      var vV = 32 - (ZV -= 1);
      "undefined" === typeof xV[ZV] && (xV[ZV] = new Uint16Array(1 << ZV));
      var rV, kV = xV[ZV];
      for (rV = 0; rV < kV.length; rV++) kV[rV] = 0;
      var bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV = eV + pV,
        XV = eV,
        MV = eV,
        zV = !0;
      if (pV >= 15)
        for (bV = NV - 15, BV = JV(YV(VV, eV += 1), vV); zV;) {
          tV = 32, jV = eV;
          do {
            if (EV = BV, FV = tV >>> 5, tV += 1, jV = (eV = jV) + FV, eV > bV) {
              zV = !1;
              break
            }
            BV = JV(YV(VV, jV), vV), qV = XV + kV[EV], kV[EV] = eV - XV
          } while (!UV(VV, eV, qV));
          if (!zV) break;
          wV = yV(VV, MV, eV - MV, nV, wV);
          do {
            for (TV = eV, PV = 4; eV + PV < NV && VV[eV + PV] === VV[qV + PV];) PV += 1;
            if (eV += PV, wV = QV(nV, wV, TV - qV, PV), MV = eV, eV >= bV) {
              zV = !1;
              break
            }
            kV[JV(YV(VV, eV - 1), vV)] = eV - 1 - XV, qV = XV + kV[AV = JV(YV(VV, eV), vV)], kV[AV] = eV - XV
          } while (UV(VV, eV, qV));
          if (!zV) break;
          BV = JV(YV(VV, eV += 1), vV)
        }
      return MV < NV && (wV = yV(VV, MV, NV - MV, nV, wV)), wV
    }

    function wV(VV) {
      this.array = VV
    }
    wV.prototype.maxCompressedLength = function() {
      var VV = this.array.length;
      return 32 + VV + Math.floor(VV / 6)
    }, wV.prototype.compressToBuffer = function(VV) {
      var eV, xV = this.array,
        JV = xV.length,
        YV = 0,
        UV = 0;
      for (UV = function(VV, eV, xV) {
          do {
            eV[xV] = 127 & VV, (VV >>>= 7) > 0 && (eV[xV] += 128), xV += 1
          } while (VV > 0);
          return xV
        }(JV, VV, UV); YV < JV;) UV = nV(xV, YV, eV = Math.min(JV - YV, 65536), VV, UV), YV += eV;
      return UV
    }, eV.e = wV
  },
  34913: (VV, eV) => {
    var xV = [0, 255, 65535, 16777215, 4294967295];

    function JV(VV, eV, xV, JV, YV) {
      var UV;
      for (UV = 0; UV < YV; UV++) xV[JV + UV] = VV[eV + UV]
    }

    function YV(VV, eV, xV, JV) {
      var YV;
      for (YV = 0; YV < JV; YV++) VV[eV + YV] = VV[eV - xV + YV]
    }

    function UV(VV) {
      this.array = VV, this.pos = 0
    }
    UV.prototype.readUncompressedLength = function() {
      for (var VV, eV, xV = 0, JV = 0; JV < 32 && this.pos < this.array.length;) {
        if (VV = this.array[this.pos], this.pos += 1, (eV = 127 & VV) << JV >>> JV !== eV) return -1;
        if (xV |= eV << JV, VV < 128) return xV;
        JV += 7
      }
      return -1
    }, UV.prototype.uncompressToBuffer = function(VV) {
      for (var eV, UV, yV, pV, QV = this.array, nV = QV.length, wV = this.pos, ZV = 0; wV < QV.length;)
        if (eV = QV[wV], wV += 1, 0 === (3 & eV)) {
          if ((UV = 1 + (eV >>> 2)) > 60) {
            if (wV + 3 >= nV) return !1;
            yV = UV - 60, UV = 1 + ((UV = QV[wV] + (QV[wV + 1] << 8) + (QV[wV + 2] << 16) + (QV[wV + 3] << 24)) & xV[yV]), wV += yV
          }
          if (wV + UV > nV) return !1;
          JV(QV, wV, VV, ZV, UV), wV += UV, ZV += UV
        } else {
          switch (3 & eV) {
            case 1:
              UV = 4 + (eV >>> 2 & 7), pV = QV[wV] + (eV >>> 5 << 8), wV += 1;
              break;
            case 2:
              if (wV + 1 >= nV) return !1;
              UV = 1 + (eV >>> 2), pV = QV[wV] + (QV[wV + 1] << 8), wV += 2;
              break;
            case 3:
              if (wV + 3 >= nV) return !1;
              UV = 1 + (eV >>> 2), pV = QV[wV] + (QV[wV + 1] << 8) + (QV[wV + 2] << 16) + (QV[wV + 3] << 24), wV += 4
          }
          if (0 === pV || pV > ZV) return !1;
          YV(VV, ZV, pV, UV), ZV += UV
        } return !0
    }, eV.b = UV
  },
  35078: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      SessionReplayRecorder: () => fe
    });
    var JV = xV(5589),
      YV = xV(1099),
      UV = xV(35081),
      yV = xV.n(UV);

    function pV() {
      return yV()('/*! For license information please see sessionReplayVideo.worker.d12707b1.worker.js.LICENSE.txt */\n(()=>{var VV={6:()=>{}},eV={};function xV(JV){var YV=eV[JV];if(void 0!==YV)return YV.exports;var UV=eV[JV]={exports:{}};return VV[JV](UV,UV.exports,xV),UV.exports}(()=>{var VV,eV=Object.getPrototypeOf?VV=>Object.getPrototypeOf(VV):VV=>VV.__proto__;xV.t=function(JV,YV){if(1&YV&&(JV=this(JV)),8&YV)return JV;if("object"===typeof JV&&JV){if(4&YV&&JV.__esModule)return JV;if(16&YV&&"function"===typeof JV.then)return JV}var UV=Object.create(null);xV.r(UV);var yV={};VV=VV||[null,eV({}),eV([]),eV(eV)];for(var pV=2&YV&&JV;"object"==typeof pV&&!~VV.indexOf(pV);pV=eV(pV))Object.getOwnPropertyNames(pV).forEach((VV=>yV[VV]=()=>JV[VV]));return yV.default=()=>JV,xV.d(UV,yV),UV}})(),xV.d=(VV,eV)=>{for(var JV in eV)xV.o(eV,JV)&&!xV.o(VV,JV)&&Object.defineProperty(VV,JV,{enumerable:!0,get:eV[JV]})},xV.o=(VV,eV)=>Object.prototype.hasOwnProperty.call(VV,eV),xV.r=VV=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(VV,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(VV,"__esModule",{value:!0})};const JV="bloxdSessionReplayTails";const YV=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function UV(VV){return new Promise(((eV,xV)=>{VV.onsuccess=()=>{eV(VV.result)},VV.onerror=()=>{xV(VV.error)}}))}function yV(VV){return new Promise(((eV,xV)=>{VV.oncomplete=()=>{eV()},VV.onerror=()=>{xV(VV.error)},VV.onabort=()=>{var eV;xV(null!==(eV=VV.error)&&void 0!==eV?eV:new Error("IndexedDB transaction aborted"))}}))}function pV(VV){return IDBKeyRange.bound([VV],[VV,[]])}function QV(VV,eV){return IDBKeyRange.bound([VV,eV],[VV,eV,[]])}class nV{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(VV){this.write(["recordings"],(eV=>{eV.objectStore("recordings").put(VV)}))}putVideoSequence(VV,eV,xV){this.write(["recordings","videoSequences"],(JV=>{JV.objectStore("recordings").put(VV),JV.objectStore("videoSequences").put({recordingId:VV.recordingId,segmentId:eV,sequence:xV})}))}appendVideo(VV,eV){this.write(["videoHeaders","videoChunks"],(xV=>{xV.objectStore("videoHeaders").put(VV);const JV=xV.objectStore("videoChunks");for(const VV of eV)JV.put(VV)}))}putVideoProgress(VV,eV){this.write(["videoProgress","videoChunks"],(xV=>{if(xV.objectStore("videoProgress").put(VV),eV>0){const{recordingId:JV,segmentId:YV}=VV;xV.objectStore("videoChunks").delete(IDBKeyRange.bound([JV,YV,0],[JV,YV,eV],!1,!0))}}))}removeVideoChunks(VV,eV){this.write(["videoChunks"],(xV=>{xV.objectStore("videoChunks").delete(QV(VV,eV))}))}removeVideo(VV,eV){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(xV=>{xV.objectStore("videoHeaders").delete([VV,eV]),xV.objectStore("videoChunks").delete(QV(VV,eV)),xV.objectStore("videoSequences").delete([VV,eV]),xV.objectStore("videoProgress").delete([VV,eV])}))}putTelemetry(VV){this.write(["telemetry"],(eV=>{eV.objectStore("telemetry").put(VV)}))}removeTelemetry(VV,eV){this.write(["telemetry"],(xV=>{xV.objectStore("telemetry").delete([VV,eV])}))}putDom(VV){this.write(["dom"],(eV=>{eV.objectStore("dom").put(VV)}))}queueDom(VV,eV,xV){this.write(["recordings","dom","domTail"],(JV=>{JV.objectStore("recordings").put(VV),JV.objectStore("dom").put(eV),JV.objectStore("domTail").delete(QV(eV.recordingId,xV))}))}putDomTail(VV){this.tailRecordings.add(VV.recordingId),this.write(["domTail"],(eV=>{eV.objectStore("domTail").put(VV)}))}removeDomTail(VV,eV){this.write(["domTail"],(xV=>{xV.objectStore("domTail").delete(QV(VV,eV))}))}removeDom(VV,eV){this.write(["dom"],(xV=>{xV.objectStore("dom").delete([VV,eV])}))}async listRecordings(){const VV=await this.open();return await UV(VV.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(VV){const eV=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),xV=pV(VV.recordingId),JV=VV=>UV(eV.objectStore(VV).getAll(xV)),[YV,yV,QV,nV,wV,ZV,vV]=await Promise.all([JV("videoHeaders"),JV("videoChunks"),JV("videoSequences"),JV("videoProgress"),JV("telemetry"),JV("dom"),JV("domTail")]);return{recording:VV,telemetry:wV,dom:ZV,domTails:vV,video:YV.map((VV=>{var eV,xV,JV;return{header:VV,sequence:null!==(eV=null===(xV=QV.find((eV=>eV.segmentId===VV.segmentId)))||void 0===xV?void 0:xV.sequence)&&void 0!==eV?eV:null,progress:null!==(JV=nV.find((eV=>eV.segmentId===VV.segmentId)))&&void 0!==JV?JV:null,chunks:yV.filter((eV=>eV.segmentId===VV.segmentId))}}))}}async deleteRecording(VV){const eV=(await this.open()).transaction([...YV],"readwrite");eV.objectStore("recordings").delete(VV);for(const xV of YV.slice(1))eV.objectStore(xV).delete(pV(VV));await yV(eV)}async forgetSent(VV,eV){const xV=(await this.open()).transaction([...YV],"readwrite"),{recordingId:JV}=VV;xV.objectStore("recordings").put(VV);for(const YV of eV.videoSegmentIds)xV.objectStore("videoHeaders").delete([JV,YV]),xV.objectStore("videoChunks").delete(QV(JV,YV)),xV.objectStore("videoSequences").delete([JV,YV]),xV.objectStore("videoProgress").delete([JV,YV]);for(const YV of eV.telemetrySequences)xV.objectStore("telemetry").delete([JV,YV]);for(const YV of eV.domSequences)xV.objectStore("dom").delete([JV,YV]);for(const YV of eV.domTailChunks)xV.objectStore("domTail").delete(QV(JV,YV));await yV(xV)}write(VV,eV){if(this.failed)return;const xV=xV=>{try{var JV;const YV=xV.transaction(VV,"readwrite");eV(YV),null===(JV=YV.commit)||void 0===JV||JV.call(YV),yV(YV).catch((VV=>{this.fail(VV)}))}catch(YV){this.fail(YV)}};null===this.db?this.open().then(xV,(VV=>{this.fail(VV)})):xV(this.db)}fail(VV){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",VV),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const VV=VV=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",VV)};try{const eV=this.db.transaction(["domTail"],"readwrite");for(const VV of this.tailRecordings)eV.objectStore("domTail").delete(pV(VV));yV(eV).catch(VV)}catch(eV){VV(eV)}}open(){return this.opening??=new Promise(((VV,eV)=>{const xV=indexedDB.open(JV,4);xV.onupgradeneeded=VV=>{const eV=xV.result;VV.oldVersion<1&&(eV.createObjectStore("recordings",{keyPath:"recordingId"}),eV.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),eV.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),eV.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),eV.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),VV.oldVersion<2&&eV.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),VV.oldVersion<3&&eV.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),eV.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let YV=!1;xV.onblocked=()=>{YV=!0,eV(new Error("An older tab holds the upload journal at an earlier version"))},xV.onsuccess=()=>{YV?xV.result.close():(this.db=xV.result,this.db.onversionchange=()=>{var VV;this.dropTails(),null===(VV=this.db)||void 0===VV||VV.close(),this.db=null,this.opening=null},VV(xV.result))},xV.onerror=()=>{eV(xV.error)}})),this.opening}}const wV=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class ZV{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return wV[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(VV){this.firstSampleMs??=VV.nowMs;const eV=null!==VV.pingMs&&VV.pingMs>300,xV=VV.nowMs-this.firstSampleMs>=3e4;xV&&(null!==VV.gameFps&&VV.gameFps<24||eV)?this.gameStrugglingSinceMs??=VV.nowMs:this.gameStrugglingSinceMs=null,xV&&VV.encoderBackpressureDrops>0?this.backpressureSinceMs??=VV.nowMs:this.backpressureSinceMs=null;const JV=null!==this.backpressureSinceMs&&VV.nowMs-this.backpressureSinceMs>=3e3,YV=JV||null!==this.gameStrugglingSinceMs&&VV.nowMs-this.gameStrugglingSinceMs>=1e4,UV=this.steppedDownForGameFps?45:24,yV=0===VV.encoderBackpressureDrops&&!eV&&(null===VV.gameFps||VV.gameFps>=UV);return YV?(this.healthySinceMs=null,this.level<wV.length-1&&VV.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=VV.nowMs,this.lastChangeReason=JV?"encoderBackpressure":eV?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):yV&&0!==this.level?(this.healthySinceMs??=VV.nowMs,VV.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=VV.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function vV(VV){return Math.max(2,2*Math.floor(VV/2))}function rV(VV){return Math.ceil(VV.width/16)*Math.ceil(VV.height/16)}function kV(VV,eV,xV){const JV=VV.bitrate*rV(eV)/VV.maxMacroblocks;return xV*Math.min(VV.bitrate,Math.max(VV.minBitrate,JV/xV))}class bV{constructor(VV){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/VV}setMaxFps(VV){this.intervalMs=1e3/VV}shouldKeep(VV){return!(VV<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=VV-this.nextDueMs>this.intervalMs?VV+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const EV=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],BV=["variable","constant"],jV=["realtime","quality"];class qV{constructor(){this.canvas=null,this.context=null}scale(VV,eV){if(VV.displayWidth===eV.width&&VV.displayHeight===eV.height)return VV;return this.contextFor(eV).drawImage(VV,0,0,eV.width,eV.height),new VideoFrame(this.canvas,{timestamp:VV.timestamp,alpha:"discard"})}contextFor(VV){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(VV.width,VV.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===VV.width&&this.canvas.height===VV.height||(this.canvas.width=VV.width,this.canvas.height=VV.height),this.context}}const tV=[...[.7,.6,.5,.42,.35].map((VV=>({width:640,quality:VV}))),{width:480,quality:.35},{width:360,quality:.35}],FV=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class TV{constructor(VV,eV){this.steps=VV,this.targetBytes=eV,this.index=0}get step(){return this.steps[this.index]}record(VV){VV>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):VV<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class PV{constructor(VV){this.post=VV,this.full=new TV(tV,28e3),this.small=new TV(FV,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(VV,eV){if(!(this.failed||this.encoding||VV.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=VV.timestamp;try{const xV=AV(VV,VV.displayWidth,VV.displayHeight,this.full.step.width),JV=AV(xV,xV.width,xV.height,this.small.step.width);this.encoding=!0,this.encode(xV,JV,eV).finally((()=>{this.encoding=!1}))}catch(xV){this.fail(xV)}}}async encode(VV,eV,xV){try{const[JV,YV]=await Promise.all([VV.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),eV.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(JV.size),this.small.record(YV.size);const UV=await JV.arrayBuffer(),yV=YV.size<=8192?await YV.arrayBuffer():null;this.post({type:"still",bytes:UV,small:yV,atMs:xV},null===yV?[UV]:[UV,yV])}catch(JV){this.fail(JV)}}fail(VV){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",VV)}}function AV(VV,eV,xV,JV){const YV=Math.min(JV,eV),UV=Math.max(1,Math.round(xV*YV/eV)),yV=new OffscreenCanvas(YV,UV),pV=yV.getContext("2d");if(null===pV)throw new Error("no 2D context");return pV.drawImage(VV,0,0,YV,UV),yV}let NV=Date.now()-performance.now();function XV(){const VV=performance.now(),eV=Date.now();return Math.abs(eV-(VV+NV))>20&&(NV=eV-VV),VV+NV}function MV(VV){if(!VV)throw new Error("Assertion failed.")}const zV=Math.PI/180,GV=(Math.PI,[1,0,0,0,1,0,0,0,1]),WV=VV=>{const eV=VV*zV,xV=Math.round(Math.cos(eV)),JV=Math.round(Math.sin(eV));return[xV,JV,0,-JV,xV,0,0,0,1]},RV=(VV,eV)=>[1,0,0,0,1,0,VV,eV,1],gV=(VV,eV)=>{const xV=new Array(9);for(let JV=0;JV<3;JV++)for(let YV=0;YV<3;YV++)xV[3*JV+YV]=VV[3*JV]*eV[YV]+VV[3*JV+1]*eV[3+YV]+VV[3*JV+2]*eV[6+YV];return xV},DV=VV=>VV&&VV[VV.length-1],iV=VV=>VV>=0&&VV<2**32,CV=VV=>{let eV=0;for(;0===VV.readBits(1)&&eV<32;)eV++;if(eV>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<eV)-1+VV.readBits(eV)},aV=VV=>{const eV=CV(VV);return 0===(1&eV)?-(eV>>1):eV+1>>1},oV=VV=>VV.constructor===Uint8Array?VV:ArrayBuffer.isView(VV)?new Uint8Array(VV.buffer,VV.byteOffset,VV.byteLength):new Uint8Array(VV),cV=VV=>VV.constructor===DataView?VV:ArrayBuffer.isView(VV)?new DataView(VV.buffer,VV.byteOffset,VV.byteLength):new DataView(VV),hV="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let VV=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const eV=new Uint8Array(3*VV.length);let xV=0;for(let JV=0;JV<VV.length;JV++){let YV=VV.charCodeAt(JV);if(YV<128)eV[xV++]=YV;else if(YV<2048)eV[xV++]=192|YV>>6,eV[xV++]=128|63&YV;else if(YV<55296||YV>57343)eV[xV++]=224|YV>>12,eV[xV++]=128|YV>>6&63,eV[xV++]=128|63&YV;else{const UV=JV+1<VV.length?VV.charCodeAt(JV+1):0;YV<56320&&UV>=56320&&UV<=57343?(YV=65536+(YV-55296<<10)+(UV-56320),JV++,eV[xV++]=240|YV>>18,eV[xV++]=128|YV>>12&63,eV[xV++]=128|YV>>6&63,eV[xV++]=128|63&YV):(eV[xV++]=239,eV[xV++]=191,eV[xV++]=189)}}return eV.slice(0,xV)}},lV=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new hV),LV={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},fV={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},mV={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},KV=VV=>!VV||null==VV.primaries&&null==VV.transfer&&null==VV.matrix&&null==VV.fullRange,HV=VV=>VV instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&VV instanceof SharedArrayBuffer||ArrayBuffer.isView(VV);class uV{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let VV;const eV=new Promise((eV=>{let xV=!1;VV=()=>{xV||(eV(),this.pending--,xV=!0)}})),xV=this.currentPromise;return this.currentPromise=eV,this.pending++,await xV,VV}}const sV=()=>{let VV,eV;return{promise:new Promise(((xV,JV)=>{VV=xV,eV=JV})),resolve:VV,reject:eV}},SV=VV=>{throw new Error(`Unexpected value: ${VV}`)},IV=(VV,eV,xV,JV)=>{xV>>>=0,xV&=16777215,JV?(VV.setUint8(eV,255&xV),VV.setUint8(eV+1,xV>>>8&255),VV.setUint8(eV+2,xV>>>16&255)):(VV.setUint8(eV,xV>>>16&255),VV.setUint8(eV+1,xV>>>8&255),VV.setUint8(eV+2,255&xV))},dV="und",OV=VV=>{let eV=0;for(;0!==VV;)VV&=VV-1,eV++;return eV},Ve=/^[a-z]{3}$/,ee=1e6*(1+Number.EPSILON);const xe=(async()=>{})().constructor,Je=VV=>VV instanceof xe||VV instanceof Promise||"function"===typeof VV?.then,Ye=function*(VV){for(const eV in VV){const xV=VV[eV];void 0!==xV&&(yield{key:eV,value:xV})}},Ue=VV=>"number"===typeof VV&&!Number.isNaN(VV),ye=VV=>{MV(Number.isInteger(VV.num)),MV(Number.isInteger(VV.den)),MV(0!==VV.den);let eV=Math.abs(VV.num),xV=Math.abs(VV.den);for(;0!==xV;){const VV=eV%xV;eV=xV,xV=VV}const JV=eV||1;return{num:VV.num/JV,den:VV.den/JV}};new Map,new Map;const pe=VV=>Array.isArray(VV)?VV:[VV];class Qe{constructor(){this._listeners=new Map}on(VV,eV,xV){this._listeners.has(VV)||this._listeners.set(VV,new Set);const JV={bZ:eV,once:xV?.once??!1};return this._listeners.get(VV).add(JV),()=>{this._listeners.get(VV)?.delete(JV)}}_emit(){for(var VV=arguments.length,eV=new Array(VV),xV=0;xV<VV;xV++)eV[xV]=arguments[xV];const[JV,YV]=eV,UV=this._listeners.get(JV);if(UV)for(const pV of UV){try{pV.bZ(YV)}catch(yV){console.error(yV)}pV.once&&UV.delete(pV)}}}const ne=VV=>null!==VV&&"object"===typeof VV&&Object.getPrototypeOf(VV)===Object.prototype&&Object.values(VV).every((VV=>"string"===typeof VV));class we{constructor(VV,eV){if(this.data=VV,this.mimeType=eV,!(VV instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof eV)throw new TypeError("mimeType must be a string.")}}class Ze{constructor(VV,eV,xV,JV){if(this.data=VV,this.mimeType=eV,this.name=xV,this.description=JV,!(VV instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==eV&&"string"!==typeof eV)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==xV&&"string"!==typeof xV)throw new TypeError("name, when provided, must be a string.");if(void 0!==JV&&"string"!==typeof JV)throw new TypeError("description, when provided, must be a string.")}}class ve{constructor(VV){this.bytes=VV,this.pos=0}seekToByte(VV){this.pos=8*VV}readBit(){const VV=Math.floor(this.pos/8),eV=this.bytes[VV]??0,xV=7-(7&this.pos),JV=(eV&1<<xV)>>xV;return this.pos++,JV}readBits(VV){if(1===VV)return this.readBit();let eV=0;for(let xV=0;xV<VV;xV++)eV<<=1,eV|=this.readBit();return eV}writeBits(VV,eV){const xV=this.pos+VV;for(let JV=this.pos;JV<xV;JV++){const VV=Math.floor(JV/8);let YV=this.bytes[VV];const UV=7-(7&JV);YV&=~(1<<UV),YV|=(eV&1<<xV-JV-1)>>xV-JV-1<<UV,this.bytes[VV]=YV}this.pos=xV}copyBits(VV,eV){let xV=0;for(;xV<VV-7;xV+=8)this.writeBits(8,eV.readBits(8));const JV=VV-xV;JV>0&&this.writeBits(JV,eV.readBits(JV))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const VV=this.pos/8,eV=this.bytes[VV]??0;return this.pos+=8,eV}skipBits(VV){this.pos+=VV}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const VV=new ve(this.bytes);return VV.pos=this.pos,VV}}const re=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],ke=[-1,1,2,3,4,5,6,8],be=VV=>{const eV=5===VV.objectType||29===VV.objectType,xV=29===VV.objectType,JV=eV?VV.outputSampleRate/2:VV.outputSampleRate,YV=xV?1:VV.outputNumberOfChannels,UV=ke.indexOf(YV);if(-1===UV)throw new TypeError(`Unsupported number of channels: ${VV.outputNumberOfChannels}`);let yV=16;VV.objectType>=32&&(yV+=6),15===je(JV)&&(yV+=24),eV&&(yV+=9,15===je(VV.outputSampleRate)&&(yV+=24));const pV=Math.ceil(yV/8),QV=new Uint8Array(pV),nV=new ve(QV);return Ee(nV,VV.objectType),Be(nV,JV),nV.writeBits(4,UV),eV&&(Be(nV,VV.outputSampleRate),Ee(nV,2)),nV.writeBits(3,0),QV},Ee=(VV,eV)=>{eV<32?VV.writeBits(5,eV):(VV.writeBits(5,31),VV.writeBits(6,eV-32))},Be=(VV,eV)=>{const xV=je(eV);VV.writeBits(4,xV),15===xV&&VV.writeBits(24,eV)},je=VV=>{const eV=re.indexOf(VV);return-1===eV?15:eV};var qe;!function(VV){VV[VV.Silent=0]="Silent",VV[VV.Errors=1]="Errors",VV[VV.Warnings=2]="Warnings",VV[VV.Info=3]="Info"}(qe||(qe={}));class te{constructor(){}static get level(){return te._level}static set level(VV){if(VV!==qe.Silent&&VV!==qe.Errors&&VV!==qe.Warnings&&VV!==qe.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");te._level=VV}static get _emitter(){return te._emitterInstance??=new Qe}static on(VV,eV,xV){return te._emitter.on(VV,eV,xV)}static _error(){for(var VV=arguments.length,eV=new Array(VV),xV=0;xV<VV;xV++)eV[xV]=arguments[xV];te._emitter._emit("error",eV),te._level>=qe.Errors&&console.error(...eV)}static _warn(){for(var VV=arguments.length,eV=new Array(VV),xV=0;xV<VV;xV++)eV[xV]=arguments[xV];te._emitter._emit("warn",eV),te._level>=qe.Warnings&&console.warn(...eV)}static _info(){for(var VV=arguments.length,eV=new Array(VV),xV=0;xV<VV;xV++)eV[xV]=arguments[xV];te._emitter._emit("info",eV),te._level>=qe.Info&&console.info(...eV)}}te._level=qe.Info,te._emitterInstance=null;const Fe=[48e3,44100,32e3],Te=[24e3,22050,16e3],Pe="Mediabunny v1.61.3";var Ae,Ne;!function(VV){VV[VV.NON_IDR_SLICE=1]="NON_IDR_SLICE",VV[VV.SLICE_DPA=2]="SLICE_DPA",VV[VV.SLICE_DPB=3]="SLICE_DPB",VV[VV.SLICE_DPC=4]="SLICE_DPC",VV[VV.IDR=5]="IDR",VV[VV.SEI=6]="SEI",VV[VV.SPS=7]="SPS",VV[VV.PPS=8]="PPS",VV[VV.AUD=9]="AUD",VV[VV.SPS_EXT=13]="SPS_EXT"}(Ae||(Ae={})),function(VV){VV[VV.RASL_N=8]="RASL_N",VV[VV.RASL_R=9]="RASL_R",VV[VV.BLA_W_LP=16]="BLA_W_LP",VV[VV.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",VV[VV.VPS_NUT=32]="VPS_NUT",VV[VV.SPS_NUT=33]="SPS_NUT",VV[VV.PPS_NUT=34]="PPS_NUT",VV[VV.AUD_NUT=35]="AUD_NUT",VV[VV.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",VV[VV.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(Ne||(Ne={}));const Xe=function*(VV){let eV=0,xV=-1;for(;eV<VV.length-2;){const JV=VV.indexOf(0,eV);if(-1===JV||JV>=VV.length-2)break;eV=JV;let YV=0;eV+3<VV.length&&0===VV[eV+1]&&0===VV[eV+2]&&1===VV[eV+3]?YV=4:0===VV[eV+1]&&1===VV[eV+2]&&(YV=3),0!==YV?(-1!==xV&&eV>xV&&(yield{offset:xV,length:eV-xV}),xV=eV+YV,eV=xV):eV++}-1!==xV&&xV<VV.length&&(yield{offset:xV,length:VV.length-xV})},Me=VV=>31&VV,ze=VV=>{const eV=[],xV=VV.length;for(let JV=0;JV<xV;JV++)JV+2<xV&&0===VV[JV]&&0===VV[JV+1]&&3===VV[JV+2]?(eV.push(0,0),JV+=2):eV.push(VV[JV]);return new Uint8Array(eV)},Ge=(new Uint8Array([0,0,0,1]),(VV,eV)=>{const xV=VV.reduce(((VV,xV)=>VV+eV+xV.byteLength),0),JV=new Uint8Array(xV);let YV=0;for(const UV of VV){const VV=new DataView(JV.buffer,JV.byteOffset,JV.byteLength);switch(eV){case 1:VV.setUint8(YV,UV.byteLength);break;case 2:VV.setUint16(YV,UV.byteLength,!1);break;case 3:IV(VV,YV,UV.byteLength,!1);break;case 4:VV.setUint32(YV,UV.byteLength,!1)}YV+=eV,JV.set(UV,YV),YV+=UV.byteLength}return JV}),We=VV=>{try{const eV=[],xV=[],JV=[];for(const pV of Xe(VV)){const YV=VV.subarray(pV.offset,pV.offset+pV.length),UV=Me(YV[0]);UV===Ae.SPS?eV.push(YV):UV===Ae.PPS?xV.push(YV):UV===Ae.SPS_EXT&&JV.push(YV)}if(0===eV.length)return null;if(0===xV.length)return null;const YV=eV[0],UV=ge(YV);MV(null!==UV);const yV=100===UV.profileIdc||110===UV.profileIdc||122===UV.profileIdc||144===UV.profileIdc;return{configurationVersion:1,avcProfileIndication:UV.profileIdc,profileCompatibility:UV.constraintFlags,avcLevelIndication:UV.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:eV,pictureParameterSets:xV,chromaFormat:yV?UV.chromaFormatIdc:null,bitDepthLumaMinus8:yV?UV.bitDepthLumaMinus8:null,bitDepthChromaMinus8:yV?UV.bitDepthChromaMinus8:null,sequenceParameterSetExt:yV?JV:null}}catch(eV){return te._error("Error building AVC Decoder Configuration Record:",eV),null}},Re={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},ge=VV=>{try{const eV=ze(VV),xV=new ve(eV);xV.skipBits(1),xV.skipBits(2);if(7!==xV.readBits(5))return null;const JV=xV.readAlignedByte(),YV=xV.readAlignedByte(),UV=xV.readAlignedByte();CV(xV);let yV=1,pV=0,QV=0,nV=0;if(100===JV||110===JV||122===JV||244===JV||44===JV||83===JV||86===JV||118===JV||128===JV){yV=CV(xV),3===yV&&(nV=xV.readBits(1)),pV=CV(xV),QV=CV(xV),xV.skipBits(1);if(xV.readBits(1))for(let VV=0;VV<(3!==yV?8:12);VV++){if(xV.readBits(1)){const eV=VV<6?16:64;let JV=8,YV=8;for(let VV=0;VV<eV;VV++){if(0!==YV){YV=(JV+aV(xV)+256)%256}JV=0===YV?JV:YV}}}}CV(xV);const wV=CV(xV);if(0===wV)CV(xV);else if(1===wV){xV.skipBits(1),aV(xV),aV(xV);const VV=CV(xV);for(let eV=0;eV<VV;eV++)aV(xV)}CV(xV),xV.skipBits(1);const ZV=CV(xV),vV=CV(xV),rV=16*(ZV+1),kV=16*(vV+1);let bV=rV,EV=kV;const BV=xV.readBits(1);BV||xV.skipBits(1),xV.skipBits(1);if(xV.readBits(1)){const VV=CV(xV),eV=CV(xV),JV=CV(xV),YV=CV(xV);let UV,pV;if(0===(0===nV?yV:0))UV=1,pV=2-BV;else{UV=3===yV?1:2,pV=(1===yV?2:1)*(2-BV)}bV-=UV*(VV+eV),EV-=pV*(JV+YV)}let jV=2,qV=2,tV=2,FV=0,TV={num:1,den:1},PV=null,AV=null,NV=null,XV=null;const zV=xV.pos;if(xV.readBits(1)){if(xV.readBits(1)){const VV=xV.readBits(8);if(255===VV)TV={num:xV.readBits(16),den:xV.readBits(16)};else{const eV=Re[VV];eV&&(TV=eV)}}xV.readBits(1)&&xV.skipBits(1);if(xV.readBits(1)){xV.skipBits(3),FV=xV.readBits(1);xV.readBits(1)&&(jV=xV.readBits(8),qV=xV.readBits(8),tV=xV.readBits(8))}xV.readBits(1)&&(CV(xV),CV(xV));xV.readBits(1)&&(xV.skipBits(32),xV.skipBits(32),xV.skipBits(1));const VV=xV.readBits(1);VV&&De(xV);const eV=xV.readBits(1);eV&&De(xV),(VV||eV)&&xV.skipBits(1),xV.skipBits(1),NV=xV.pos,XV=xV.readBits(1),XV&&(xV.skipBits(1),CV(xV),CV(xV),CV(xV),CV(xV),PV=CV(xV),AV=CV(xV))}if(null===PV){MV(null===AV);if(44!==JV&&86!==JV&&100!==JV&&110!==JV&&122!==JV&&244!==JV||!(16&YV)){const VV=ZV+1,eV=(2-BV)*(vV+1),xV=vx.find((VV=>VV.level>=UV))??DV(vx),JV=Math.min(Math.floor(xV.maxDpbMbs/(VV*eV)),16);PV=JV,AV=JV}else PV=0,AV=0}return MV(null!==AV),{emulationUnpreventedBytes:eV,profileIdc:JV,constraintFlags:YV,levelIdc:UV,frameMbsOnlyFlag:BV,chromaFormatIdc:yV,bitDepthLumaMinus8:pV,bitDepthChromaMinus8:QV,codedWidth:rV,codedHeight:kV,displayWidth:bV,displayHeight:EV,pixelAspectRatio:TV,colourPrimaries:jV,matrixCoefficients:tV,transferCharacteristics:qV,fullRangeFlag:FV,numReorderFrames:PV,maxDecFrameBuffering:AV,vuiParametersFlagBitOffset:zV,bitstreamRestrictionFlagBitOffset:NV,bitstreamRestrictionFlag:XV}}catch(eV){return te._error("Error parsing AVC SPS:",eV),null}},De=VV=>{const eV=CV(VV);VV.skipBits(4),VV.skipBits(4);for(let xV=0;xV<=eV;xV++)CV(VV),CV(VV),VV.skipBits(1);VV.skipBits(5),VV.skipBits(5),VV.skipBits(5),VV.skipBits(5)},ie=VV=>VV>>1&63,Ce=VV=>{try{const eV=[],xV=[],JV=[],YV=[];for(const QV of Xe(VV)){const UV=VV.subarray(QV.offset,QV.offset+QV.length),yV=ie(UV[0]);yV===Ne.VPS_NUT?eV.push(UV):yV===Ne.SPS_NUT?xV.push(UV):yV===Ne.PPS_NUT?JV.push(UV):yV!==Ne.PREFIX_SEI_NUT&&yV!==Ne.SUFFIX_SEI_NUT||YV.push(UV)}if(0===xV.length||0===JV.length)return null;const UV=(VV=>{try{const eV=new ve(ze(VV));eV.skipBits(16),eV.readBits(4);const xV=eV.readBits(3),JV=eV.readBits(1),{general_profile_space:YV,general_tier_flag:UV,general_profile_idc:yV,general_profile_compatibility_flags:pV,general_constraint_indicator_flags:QV,general_level_idc:nV}=ae(eV,xV);CV(eV);const wV=CV(eV);let ZV=0;3===wV&&(ZV=eV.readBits(1));const vV=CV(eV),rV=CV(eV);let kV=vV,bV=rV;if(eV.readBits(1)){const VV=CV(eV),xV=CV(eV),JV=CV(eV),YV=CV(eV);let UV=1,yV=1;const pV=0===ZV?wV:0;1===pV?(UV=2,yV=2):2===pV&&(UV=2,yV=1),kV-=(VV+xV)*UV,bV-=(JV+YV)*yV}const EV=CV(eV),BV=CV(eV);CV(eV);const jV=eV.readBits(1);let qV=0;for(let VV=jV?0:xV;VV<=xV;VV++)CV(eV),qV=CV(eV),CV(eV);CV(eV),CV(eV),CV(eV),CV(eV),CV(eV),CV(eV),eV.readBits(1)&&eV.readBits(1)&&oe(eV),eV.skipBits(1),eV.skipBits(1),eV.readBits(1)&&(eV.skipBits(4),eV.skipBits(4),CV(eV),CV(eV),eV.skipBits(1));const tV=CV(eV);if(ce(eV,tV),eV.readBits(1)){const VV=CV(eV);for(let xV=0;xV<VV;xV++)CV(eV),eV.skipBits(1)}eV.skipBits(1),eV.skipBits(1);let FV=2,TV=2,PV=2,AV=0,NV=0,XV={num:1,den:1};if(eV.readBits(1)){const VV=le(eV,xV);XV=VV.pixelAspectRatio,FV=VV.colourPrimaries,TV=VV.transferCharacteristics,PV=VV.matrixCoefficients,AV=VV.fullRangeFlag,NV=VV.minSpatialSegmentationIdc}return{displayWidth:kV,displayHeight:bV,pixelAspectRatio:XV,colourPrimaries:FV,transferCharacteristics:TV,matrixCoefficients:PV,fullRangeFlag:AV,maxDecFrameBuffering:qV+1,spsMaxSubLayersMinus1:xV,spsTemporalIdNestingFlag:JV,generalProfileSpace:YV,generalTierFlag:UV,generalProfileIdc:yV,generalProfileCompatibilityFlags:pV,generalConstraintIndicatorFlags:QV,generalLevelIdc:nV,chromaFormatIdc:wV,bitDepthLumaMinus8:EV,bitDepthChromaMinus8:BV,minSpatialSegmentationIdc:NV}}catch(eV){return te._error("Error parsing HEVC SPS:",eV),null}})(xV[0]);if(!UV)return null;let yV=0;if(JV.length>0){const VV=JV[0],eV=new ve(ze(VV));eV.skipBits(16),CV(eV),CV(eV),eV.skipBits(1),eV.skipBits(1),eV.skipBits(3),eV.skipBits(1),eV.skipBits(1),CV(eV),CV(eV),aV(eV),eV.skipBits(1),eV.skipBits(1),eV.readBits(1)&&CV(eV),aV(eV),aV(eV),eV.skipBits(1),eV.skipBits(1),eV.skipBits(1),eV.skipBits(1);const xV=eV.readBits(1),YV=eV.readBits(1);yV=xV||YV?xV&&!YV?2:!xV&&YV?3:0:0}const pV=[...eV.length?[{arrayCompleteness:1,nalUnitType:Ne.VPS_NUT,nalUnits:eV}]:[],...xV.length?[{arrayCompleteness:1,nalUnitType:Ne.SPS_NUT,nalUnits:xV}]:[],...JV.length?[{arrayCompleteness:1,nalUnitType:Ne.PPS_NUT,nalUnits:JV}]:[],...YV.length?[{arrayCompleteness:1,nalUnitType:ie(YV[0][0]),nalUnits:YV}]:[]];return{configurationVersion:1,generalProfileSpace:UV.generalProfileSpace,generalTierFlag:UV.generalTierFlag,generalProfileIdc:UV.generalProfileIdc,generalProfileCompatibilityFlags:UV.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:UV.generalConstraintIndicatorFlags,generalLevelIdc:UV.generalLevelIdc,minSpatialSegmentationIdc:UV.minSpatialSegmentationIdc,parallelismType:yV,chromaFormatIdc:UV.chromaFormatIdc,bitDepthLumaMinus8:UV.bitDepthLumaMinus8,bitDepthChromaMinus8:UV.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:UV.spsMaxSubLayersMinus1+1,temporalIdNested:UV.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:pV}}catch(eV){return te._error("Error building HEVC Decoder Configuration Record:",eV),null}},ae=(VV,eV)=>{const xV=VV.readBits(2),JV=VV.readBits(1),YV=VV.readBits(5);let UV=0;for(let wV=0;wV<32;wV++)UV=UV<<1|VV.readBits(1);const yV=new Uint8Array(6);for(let wV=0;wV<6;wV++)yV[wV]=VV.readBits(8);const pV=VV.readBits(8),QV=[],nV=[];for(let wV=0;wV<eV;wV++)QV.push(VV.readBits(1)),nV.push(VV.readBits(1));if(eV>0)for(let wV=eV;wV<8;wV++)VV.skipBits(2);for(let wV=0;wV<eV;wV++)QV[wV]&&VV.skipBits(88),nV[wV]&&VV.skipBits(8);return{general_profile_space:xV,general_tier_flag:JV,general_profile_idc:YV,general_profile_compatibility_flags:UV,general_constraint_indicator_flags:yV,general_level_idc:pV}},oe=VV=>{for(let eV=0;eV<4;eV++)for(let xV=0;xV<(3===eV?2:6);xV++){if(VV.readBits(1)){const xV=Math.min(64,1<<4+(eV<<1));eV>1&&aV(VV);for(let eV=0;eV<xV;eV++)aV(VV)}else CV(VV)}},ce=(VV,eV)=>{const xV=[];for(let JV=0;JV<eV;JV++)xV[JV]=he(VV,JV,eV,xV)},he=(VV,eV,xV,JV)=>{let YV=0,UV=0,yV=0;if(0!==eV&&(UV=VV.readBits(1)),UV){if(eV===xV){yV=eV-(CV(VV)+1)}else yV=eV-1;VV.readBits(1),CV(VV);const UV=JV[yV]??0;for(let eV=0;eV<=UV;eV++){VV.readBits(1)||VV.readBits(1)}YV=JV[yV]}else{const eV=CV(VV),xV=CV(VV);for(let JV=0;JV<eV;JV++)CV(VV),VV.readBits(1);for(let JV=0;JV<xV;JV++)CV(VV),VV.readBits(1);YV=eV+xV}return YV},le=(VV,eV)=>{let xV=2,JV=2,YV=2,UV=0,yV=0,pV={num:1,den:1};if(VV.readBits(1)){const eV=VV.readBits(8);if(255===eV)pV={num:VV.readBits(16),den:VV.readBits(16)};else{const VV=Re[eV];VV&&(pV=VV)}}return VV.readBits(1)&&VV.readBits(1),VV.readBits(1)&&(VV.readBits(3),UV=VV.readBits(1),VV.readBits(1)&&(xV=VV.readBits(8),JV=VV.readBits(8),YV=VV.readBits(8))),VV.readBits(1)&&(CV(VV),CV(VV)),VV.readBits(1),VV.readBits(1),VV.readBits(1),VV.readBits(1)&&(CV(VV),CV(VV),CV(VV),CV(VV)),VV.readBits(1)&&(VV.readBits(32),VV.readBits(32),VV.readBits(1)&&CV(VV),VV.readBits(1)&&Le(VV,!0,eV)),VV.readBits(1)&&(VV.readBits(1),VV.readBits(1),VV.readBits(1),yV=CV(VV),CV(VV),CV(VV),CV(VV),CV(VV)),{pixelAspectRatio:pV,colourPrimaries:xV,transferCharacteristics:JV,matrixCoefficients:YV,fullRangeFlag:UV,minSpatialSegmentationIdc:yV}},Le=(VV,eV,xV)=>{let JV=!1,YV=!1,UV=!1;eV&&(JV=1===VV.readBits(1),YV=1===VV.readBits(1),(JV||YV)&&(UV=1===VV.readBits(1),UV&&(VV.readBits(8),VV.readBits(5),VV.readBits(1),VV.readBits(5)),VV.readBits(4),VV.readBits(4),UV&&VV.readBits(4),VV.readBits(5),VV.readBits(5),VV.readBits(5)));for(let yV=0;yV<=xV;yV++){let eV=!0;1===VV.readBits(1)||(eV=1===VV.readBits(1));let xV=!1;eV?CV(VV):xV=1===VV.readBits(1);let yV=1;if(!xV){yV=CV(VV)+1}JV&&fe(VV,yV,UV),YV&&fe(VV,yV,UV)}},fe=(VV,eV,xV)=>{for(let JV=0;JV<eV;JV++)CV(VV),CV(VV),xV&&(CV(VV),CV(VV)),VV.readBits(1)};var me;!function(VV){VV[VV.audAllowed=0]="audAllowed",VV[VV.beforeFirstVcl=1]="beforeFirstVcl",VV[VV.afterFirstVcl=2]="afterFirstVcl",VV[VV.eoBitstreamAllowed=3]="eoBitstreamAllowed",VV[VV.noMoreDataAllowed=4]="noMoreDataAllowed"}(me||(me={}));const Ke=VV=>{const eV=cV(VV),xV=eV.getUint8(9),JV=eV.getUint16(10,!0),YV=eV.getUint32(12,!0),UV=eV.getInt16(16,!0),yV=eV.getUint8(18);let pV=null;return yV&&(pV=VV.subarray(19,21+xV)),{outputChannelCount:xV,preSkip:JV,inputSampleRate:YV,outputGain:UV,channelMappingFamily:yV,channelMappingTable:pV}};var He;!function(VV){VV[VV.STREAMINFO=0]="STREAMINFO",VV[VV.VORBIS_COMMENT=4]="VORBIS_COMMENT",VV[VV.PICTURE=6]="PICTURE"}(He||(He={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const ue=[1,2,3,6],se=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Se=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],Ie=[16,16,20,20,0,24,24,0],de=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Oe=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Vx=[32e3,44100,48e3,0],ex=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],xx=[512,1024,2048,4096],Jx=VV=>{const eV=Yx(VV),xV=cV(VV);let JV=eV?4*Math.ceil(eV.frameSize/4):0,YV=null;for(;JV+4<=VV.length&&1683496997===xV.getUint32(JV);){const eV=Ux(VV.subarray(JV));if(!eV)break;YV??=eV,JV+=eV.frameSize}if(eV)return{frameSize:YV?JV:eV.frameSize,sampleRate:eV.sampleRate,numberOfChannels:eV.numberOfChannels,sampleCount:eV.sampleCount,channelLayout:eV.channelLayout,pcmResolution:eV.pcmResolution,bitRate:eV.bitRate,core:eV,hasExtensions:null!==YV};if(!YV?.asset)return null;const{asset:UV}=YV;return{frameSize:JV,sampleRate:UV.sampleRate,numberOfChannels:UV.numberOfChannels,sampleCount:UV.sampleCount,channelLayout:UV.channelLayout,pcmResolution:UV.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Yx=VV=>{if(VV.length<18)return null;if(127!==VV[0]||254!==VV[1]||128!==VV[2]||1!==VV[3])return null;const eV=new ve(VV);if(eV.skipBits(32),eV.skipBits(1),31!==eV.readBits(5))return null;const xV=eV.readBits(1),JV=eV.readBits(7)+1;if(JV%8!==0)return null;const YV=eV.readBits(14)+1;if(YV<96)return null;const UV=eV.readBits(6);if(UV>=de.length)return null;const yV=se[eV.readBits(4)];if(0===yV)return null;const pV=Se[eV.readBits(5)];if(0!==eV.readBits(1))return null;eV.skipBits(4),eV.skipBits(5);const QV=eV.readBits(2);if(3===QV)return null;eV.skipBits(1),xV&&eV.skipBits(16),eV.skipBits(7);const nV=Ie[eV.readBits(3)];if(0===nV)return null;const wV=0!==QV;return{frameSize:YV,sampleRate:yV,numberOfChannels:de[UV]+(wV?1:0),sampleCount:32*JV,channelLayout:Oe[UV]|(wV?8:0),amode:UV,lfePresent:wV,bitRate:pV,pcmResolution:nV}},Ux=VV=>{if(VV.length<10)return null;if(100!==VV[0]||88!==VV[1]||32!==VV[2]||37!==VV[3])return null;const eV=new ve(VV);eV.skipBits(32),eV.skipBits(8);const xV=eV.readBits(2),JV=eV.readBits(1),YV=8+4*JV,UV=16+4*JV;eV.skipBits(YV);const yV=eV.readBits(UV)+1,pV={frameSize:yV,asset:null};if(!eV.readBits(1))return pV;const QV=Vx[eV.readBits(2)],nV=512*(eV.readBits(3)+1);eV.readBits(1)&&eV.skipBits(36);const wV=eV.readBits(3)+1,ZV=eV.readBits(3)+1,vV=[];for(let BV=0;BV<wV;BV++)vV.push(eV.readBits(xV+1));for(const BV of vV)eV.skipBits(8*OV(BV));if(eV.readBits(1)){eV.skipBits(2);const VV=eV.readBits(2)+1<<2,xV=eV.readBits(2)+1;eV.skipBits(xV*VV)}for(let BV=0;BV<ZV;BV++)eV.skipBits(UV);eV.skipBits(9),eV.skipBits(3),eV.readBits(1)&&eV.skipBits(4),eV.readBits(1)&&eV.skipBits(24),eV.readBits(1)&&eV.skipBits(8*(eV.readBits(10)+1));const rV=eV.readBits(5)+1,kV=ex[eV.readBits(4)],bV=eV.readBits(8)+1;let EV=0;if(eV.readBits(1)&&(bV>2&&eV.skipBits(1),bV>6&&eV.skipBits(1),eV.readBits(1))){const VV=eV.readBits(2)+1<<2;EV=eV.readBits(VV)}return 0===QV||eV.getBitsLeft()<0?pV:{frameSize:yV,asset:{sampleRate:kV,numberOfChannels:bV,sampleCount:Math.round(nV*kV/QV),channelLayout:EV,pcmResolution:rV}}},yx=VV=>{const eV=new Uint8Array(20),xV=cV(eV);xV.setUint32(0,VV.sampleRate),xV.setUint32(4,VV.bitRate),xV.setUint32(8,VV.bitRate),eV[12]=VV.pcmResolution;const JV=VV.core&&!VV.hasExtensions?1:0,YV=new ve(eV);return YV.seekToByte(13),YV.writeBits(2,Math.max(xx.indexOf(VV.sampleCount),0)),YV.writeBits(5,JV),YV.writeBits(1,VV.core?.lfePresent?1:0),YV.writeBits(6,VV.core?.amode??0),YV.writeBits(14,VV.core?VV.core.frameSize-1:0),YV.writeBits(1,0),YV.writeBits(3,0),YV.writeBits(16,VV.channelLayout),YV.writeBits(1,0),YV.writeBits(1,0),YV.writeBits(1,0),YV.writeBits(5,0),eV},px=["avc","hevc","vp9","av1","vp8","prores"],Qx=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],nx=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],wx=[...nx,...Qx],Zx=["webvtt"],vx=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],rx=["ap4x","ap4h","apch","apcn","apcs","apco"],kx=["dtsc","dtsh","dtsl","dtse"],bx=VV=>{const eV=VV.split("."),xV=Number(eV[1]),JV=eV[2],YV=(xV<<5)+Number(JV.slice(0,-1)),UV="H"===JV.slice(-1)?1:0,yV=Number(eV[3]);return[129,YV,(UV<<7)+((8===yV?0:1)<<6)+((12===yV?1:0)<<5)+((eV[4]?Number(eV[4]):0)<<4)+((eV[5]?Number(eV[5][0]):1)<<3)+((eV[5]?Number(eV[5][1]):1)<<2)+(eV[5]?Number(eV[5][2]):0),0]},Ex=/^pcm-([usf])(\\d+)(be)?$/,Bx=VV=>{if(MV(Qx.includes(VV)),"ulaw"===VV)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===VV)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const eV=Ex.exec(VV);let xV;MV(eV),xV="u"===eV[1]?"unsigned":"s"===eV[1]?"signed":"float";return{dataType:xV,sampleSize:Number(eV[2])/8,littleEndian:"be"!==eV[3],silentValue:"pcm-u8"===VV?128:0}},jx=VV=>VV.startsWith("avc1")||VV.startsWith("avc3")?"avc":VV.startsWith("hev1")||VV.startsWith("hvc1")?"hevc":"vp8"===VV?"vp8":VV.startsWith("vp09")?"vp9":VV.startsWith("av01")?"av1":rx.includes(VV)?"prores":"mp3"===VV||"mp4a.69"===VV||"mp4a.6B"===VV||"mp4a.6b"===VV||"mp4a.40.34"===VV?"mp3":VV.startsWith("mp4a.40.")||"mp4a.67"===VV?"aac":"opus"===VV||"Opus"===VV?"opus":"vorbis"===VV?"vorbis":"flac"===VV?"flac":"ac-3"===VV||"ac3"===VV?"ac3":"ec-3"===VV||"eac3"===VV?"eac3":kx.includes(VV)?"dts":"ulaw"===VV?"ulaw":"alaw"===VV?"alaw":Ex.test(VV)?VV:"webvtt"===VV?"webvtt":null,qx=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...rx],tx=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,Fx=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,Tx=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,Px=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,Ax=(VV,eV)=>{if(!VV)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof VV)throw new TypeError("Video chunk metadata must be an object.");if(!VV.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof VV.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof VV.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!qx.some((eV=>VV.decoderConfig.codec.startsWith(eV))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(VV.decoderConfig.codedWidth)||VV.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(VV.decoderConfig.codedHeight)||VV.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==VV.decoderConfig.displayAspectWidth&&(!Number.isInteger(VV.decoderConfig.displayAspectWidth)||VV.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==VV.decoderConfig.displayAspectHeight&&(!Number.isInteger(VV.decoderConfig.displayAspectHeight)||VV.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==VV.decoderConfig.displayAspectWidth!==(void 0!==VV.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==VV.decoderConfig.description&&!HV(VV.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==VV.decoderConfig.colorSpace){const{colorSpace:eV}=VV.decoderConfig;if("object"!==typeof eV)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const xV=Object.keys(LV);if(null!=eV.primaries&&!xV.includes(eV.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${xV.join(", ")}.`);const JV=Object.keys(fV);if(null!=eV.transfer&&!JV.includes(eV.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${JV.join(", ")}.`);const YV=Object.keys(mV);if(null!=eV.matrix&&!YV.includes(eV.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${YV.join(", ")}.`);if(null!=eV.fullRange&&"boolean"!==typeof eV.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(VV.decoderConfig.codec.startsWith("avc1")||VV.decoderConfig.codec.startsWith("avc3")){if(!tx.test(VV.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(VV.decoderConfig.codec.startsWith("hev1")||VV.decoderConfig.codec.startsWith("hvc1")){if(!Fx.test(VV.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(VV.decoderConfig.codec.startsWith("vp8")){if("vp8"!==VV.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(VV.decoderConfig.codec.startsWith("vp09")){if(!Tx.test(VV.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(VV.decoderConfig.codec.startsWith("av01")){if(!Px.test(VV.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(rx.some((eV=>VV.decoderConfig.codec.startsWith(eV)))&&!rx.some((eV=>VV.decoderConfig.codec===eV)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${rx.join(", ")}.`);if(null!==eV&&jx(VV.decoderConfig.codec)!==eV)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${VV.decoderConfig.codec}\' does not fit to the track codec \'${eV}\'.`)},Nx=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],Xx=(VV,eV)=>{if(!VV)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof VV)throw new TypeError("Audio chunk metadata must be an object.");if(!VV.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof VV.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof VV.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Nx.some((eV=>VV.decoderConfig.codec.startsWith(eV))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(VV.decoderConfig.sampleRate)||VV.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(VV.decoderConfig.numberOfChannels)||VV.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==VV.decoderConfig.description&&!HV(VV.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(VV.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==VV.decoderConfig.codec&&"mp4a.6B"!==VV.decoderConfig.codec&&"mp4a.6b"!==VV.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(VV.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(VV.decoderConfig.codec.startsWith("mp3")||VV.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==VV.decoderConfig.codec&&"mp4a.69"!==VV.decoderConfig.codec&&"mp4a.6B"!==VV.decoderConfig.codec&&"mp4a.6b"!==VV.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(VV.decoderConfig.codec.startsWith("opus")){if("opus"!==VV.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(VV.decoderConfig.description&&VV.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(VV.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==VV.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!VV.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(VV.decoderConfig.codec.startsWith("flac")){if("flac"!==VV.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const eV=42;if(!VV.decoderConfig.description||VV.decoderConfig.description.byteLength<eV)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(VV.decoderConfig.codec.startsWith("ac-3")||VV.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==VV.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(VV.decoderConfig.codec.startsWith("ec-3")||VV.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==VV.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(VV.decoderConfig.codec.startsWith("dts")){if(!kx.includes(VV.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${kx.join(", ")}.`)}else if((VV.decoderConfig.codec.startsWith("pcm")||VV.decoderConfig.codec.startsWith("ulaw")||VV.decoderConfig.codec.startsWith("alaw"))&&!Qx.includes(VV.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Qx.join(", ")}).`);if(null!==eV&&jx(VV.decoderConfig.codec)!==eV)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${VV.decoderConfig.codec}\' does not fit to the track codec \'${eV}\'.`)},Mx=VV=>{if(!VV)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof VV)throw new TypeError("Subtitle metadata must be an object.");if(!VV.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof VV.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof VV.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var zx;!function(VV){VV[VV.FrameCount=1]="FrameCount",VV[VV.FileSize=2]="FileSize",VV[VV.Toc=4]="Toc"}(zx||(zx={}));class Gx{constructor(VV,eV,xV,JV,YV){this.bytes=VV,this.view=eV,this.offset=xV,this.start=JV,this.end=YV,this.bufferPos=JV-xV}static tempFromBytes(VV){return new Gx(VV,cV(VV),0,0,VV.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(VV){this.bufferPos=VV-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(VV){this.bufferPos+=VV}slice(VV){let eV=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-VV;if(VV<this.start||VV+eV>this.end)throw new RangeError("Slicing outside of original slice.");return new Gx(this.bytes,this.view,this.offset,VV,VV+eV)}}const Wx=(VV,eV)=>{if(VV.filePos<VV.start||VV.filePos+eV>VV.end)throw new RangeError(`Tried reading [${VV.filePos}, ${VV.filePos+eV}), but slice is [${VV.start}, ${VV.end}). This is likely an internal error, please report it alongside the file that caused it.`)},Rx=(VV,eV)=>{Wx(VV,eV);const xV=VV.bytes.subarray(VV.bufferPos,VV.bufferPos+eV);return VV.bufferPos+=eV,xV};var gx,Dx;!function(VV){VV[VV.Unsynchronisation=128]="Unsynchronisation",VV[VV.ExtendedHeader=64]="ExtendedHeader",VV[VV.ExperimentalIndicator=32]="ExperimentalIndicator",VV[VV.Footer=16]="Footer"}(gx||(gx={})),function(VV){VV[VV.ISO_8859_1=0]="ISO_8859_1",VV[VV.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",VV[VV.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",VV[VV.UTF_8=3]="UTF_8"}(Dx||(Dx={}));class ix{constructor(VV){this.mutex=new uV,this.trackTimestampInfo=new WeakMap,this.output=VV}onTrackClose(VV){}validateTimestamp(VV,eV,xV){let JV=this.trackTimestampInfo.get(VV);if(JV){if(xV&&(JV.maxTimestampBeforeLastKeyPacket=JV.maxTimestamp),null!==JV.maxTimestampBeforeLastKeyPacket&&eV<JV.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${eV}s, but largest timestamp is ${JV.maxTimestampBeforeLastKeyPacket}s.`);JV.maxTimestamp=Math.max(JV.maxTimestamp,eV)}else{if(!xV)throw new Error("First packet must be a key packet.");JV={maxTimestamp:eV,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(VV,JV)}}}const Cx=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const ax=VV=>{const eV=Math.floor(VV/36e5),xV=Math.floor(VV%36e5/6e4),JV=Math.floor(VV%6e4/1e3),YV=VV%1e3;return eV.toString().padStart(2,"0")+":"+xV.toString().padStart(2,"0")+":"+JV.toString().padStart(2,"0")+"."+YV.toString().padStart(3,"0")};class ox{constructor(VV){this.writer=VV,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(VV){this.helperView.setUint32(0,VV,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(VV){this.helperView.setUint32(0,Math.floor(VV/2**32),!1),this.helperView.setUint32(4,VV,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(VV){for(let eV=0;eV<VV.length;eV++)this.helperView.setUint8(eV%8,VV.charCodeAt(eV)),eV%8===7&&this.writer.write(this.helper);VV.length%8!==0&&this.writer.write(this.helper.subarray(0,VV.length%8))}writeBox(VV){if(this.offsets.set(VV,this.writer.getPos()),VV.contents&&!VV.children)this.writeBoxHeader(VV,VV.size??VV.contents.byteLength+8),this.writer.write(VV.contents);else{const eV=this.writer.getPos();if(this.writeBoxHeader(VV,0),VV.contents&&this.writer.write(VV.contents),VV.children)for(const YV of VV.children)YV&&this.writeBox(YV);const xV=this.writer.getPos(),JV=VV.size??xV-eV;this.writer.seek(eV),this.writeBoxHeader(VV,JV),this.writer.seek(xV)}}writeBoxHeader(VV,eV){this.writeU32(VV.largeSize?1:eV),this.writeAscii(VV.type),VV.largeSize&&this.writeU64(eV)}measureBoxHeader(VV){return 8+(VV.largeSize?8:0)}patchBox(VV){const eV=this.offsets.get(VV);MV(void 0!==eV);const xV=this.writer.getPos();this.writer.seek(eV),this.writeBox(VV),this.writer.seek(xV)}measureBox(VV){if(VV.contents&&!VV.children){return this.measureBoxHeader(VV)+VV.contents.byteLength}{let eV=this.measureBoxHeader(VV);if(VV.contents&&(eV+=VV.contents.byteLength),VV.children)for(const xV of VV.children)xV&&(eV+=this.measureBox(xV));return eV}}}const cx=new Uint8Array(8),hx=new DataView(cx.buffer),lx=VV=>[(VV%256+256)%256],Lx=VV=>(hx.setUint16(0,VV,!1),[cx[0],cx[1]]),fx=VV=>(hx.setInt16(0,VV,!1),[cx[0],cx[1]]),mx=VV=>(hx.setUint32(0,VV,!1),[cx[1],cx[2],cx[3]]),Kx=VV=>(hx.setUint32(0,VV,!1),[cx[0],cx[1],cx[2],cx[3]]),Hx=VV=>(hx.setInt32(0,VV,!1),[cx[0],cx[1],cx[2],cx[3]]),ux=VV=>(hx.setUint32(0,Math.floor(VV/2**32),!1),hx.setUint32(4,VV,!1),[cx[0],cx[1],cx[2],cx[3],cx[4],cx[5],cx[6],cx[7]]),sx=VV=>(hx.setInt32(0,Math.floor(VV/2**32),!1),hx.setUint32(4,VV,!1),[cx[0],cx[1],cx[2],cx[3],cx[4],cx[5],cx[6],cx[7]]),Sx=VV=>(hx.setInt16(0,256*VV,!1),[cx[0],cx[1]]),Ix=VV=>(hx.setInt32(0,65536*VV,!1),[cx[0],cx[1],cx[2],cx[3]]),dx=VV=>(hx.setInt32(0,2**30*VV,!1),[cx[0],cx[1],cx[2],cx[3]]),Ox=(VV,eV)=>{const xV=[];let JV=VV;do{let VV=127&JV;JV>>=7,xV.length>0&&(VV|=128),xV.push(VV),void 0!==eV&&eV--}while(JV>0||eV);return xV.reverse()},VJ=function(VV){let eV=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const xV=Array(VV.length).fill(null).map(((eV,xV)=>VV.charCodeAt(xV)));return eV&&xV.push(0),xV},eJ=VV=>[Ix(VV[0]),Ix(VV[1]),dx(VV[2]),Ix(VV[3]),Ix(VV[4]),dx(VV[5]),Ix(VV[6]),Ix(VV[7]),dx(VV[8])],xJ=(VV,eV,xV)=>({type:VV,contents:eV&&new Uint8Array(eV.flat(10)),children:xV}),JJ=(VV,eV,xV,JV,YV)=>xJ(VV,[lx(eV),mx(xV),JV??[]],YV),YJ=()=>xJ("styp",[VJ("iso5"),Kx(0),VJ("iso5"),VJ("iso6"),VJ("mp41"),VJ("cmfc"),VJ("dash")]),UJ=(VV,eV)=>{const xV=Math.max(0,VV.minWrittenTimestamp);let JV=Math.max(0,VV.maxWrittenEndTimestamp-xV);return Number.isFinite(JV)||(JV=0),JJ("sidx",1,0,[Kx(1),Kx(iY),ux(aY(xV,iY)),ux(0),Lx(0),Lx(1),Kx(2147483647&eV),Kx(aY(JV,iY)),Kx(0)])},yJ=VV=>({type:"mdat",largeSize:VV}),pJ=VV=>xJ("moov",void 0,[QJ(VV.creationTime,VV.trackDatas),...VV.trackDatas.map((eV=>nJ(eV,VV.creationTime))),VV.isFragmented?SJ(VV.trackDatas):null,wY(VV)]),QJ=(VV,eV)=>{const xV=Math.max(0,...eV.map((VV=>Math.max(0,aY(oY(VV),iY)+aY(VV.startTimestampOffset??0,iY))))),JV=Math.max(0,...eV.map((VV=>VV.track.id)))+1,YV=!iV(VV)||!iV(xV),UV=YV?ux:Kx;return JJ("mvhd",+YV,0,[UV(VV),UV(VV),Kx(iY),UV(xV),Ix(1),Sx(1),Array(10).fill(0),eJ(GV),Array(24).fill(0),Kx(JV)])},nJ=(VV,eV)=>{const xV=CY(VV),JV=null!==VV.startTimestampOffset&&0!==VV.startTimestampOffset;return xJ("trak",void 0,[wJ(VV,eV),JV?ZJ(VV):null,vJ(VV,eV),void 0!==xV.name?xJ("udta",void 0,[xJ("name",[...lV.encode(xV.name)])]):null])},wJ=(VV,eV)=>{const xV=Math.max(0,aY(oY(VV),iY)+aY(VV.startTimestampOffset??0,iY)),JV=!iV(eV)||!iV(xV),YV=JV?ux:Kx;let UV;if("video"===VV.type&&VV.track.metadata.transformationMatrix)UV=VV.track.metadata.transformationMatrix;else if("video"===VV.type){const{rotation:eV,flip:xV}=VV.track.metadata;UV=((VV,eV,xV)=>{const[JV,YV,,UV,yV]=VV,pV=Math.abs(JV)*eV+Math.abs(UV)*xV,QV=Math.abs(YV)*eV+Math.abs(yV)*xV;return gV(gV(RV(-eV/2,-xV/2),VV),RV(pV/2,QV/2))})(gV(WV(eV??0),[xV?-1:1,0,0,0,1,0,0,0,1]),VV.info.width,VV.info.height)}else UV=GV;let yV=2;!1!==VV.track.metadata.disposition?.default&&(yV|=1);const pV="video"===VV.type?0:"audio"===VV.type?1:"subtitle"===VV.type?2:SV(VV);return JJ("tkhd",+JV,yV,[YV(eV),YV(eV),Kx(VV.track.id),Kx(0),YV(xV),Array(8).fill(0),Lx(0),Lx(pV),Sx("audio"===VV.type?1:0),Lx(0),eJ(UV),Ix("video"===VV.type?VV.info.width:0),Ix("video"===VV.type?VV.info.height:0)])},ZJ=VV=>{const eV=VV.startTimestampOffset;if(MV(null!==eV),eV>0){const xV=aY(eV,iY),JV=aY(oY(VV),iY),YV=!iV(xV)||!iV(JV),UV=YV?ux:Kx,yV=YV?sx:Hx;return xJ("edts",void 0,[JJ("elst",YV?1:0,0,[Kx(2),UV(xV),yV(-1),Ix(1),UV(JV),yV(0),Ix(1)])])}{const JV=aY(-eV,VV.timescale),YV=Math.max(0,aY(oY(VV),iY)+aY(eV,iY)),UV=!((xV=JV)>=-(2**31)&&xV<2**31)||!iV(YV),yV=UV?ux:Kx,pV=UV?sx:Hx;return xJ("edts",void 0,[JJ("elst",UV?1:0,0,[Kx(1),yV(YV),pV(JV),Ix(1)])])}var xV},vJ=(VV,eV)=>xJ("mdia",void 0,[rJ(VV,eV),EJ(!0,kJ[VV.type],bJ[VV.type]),BJ(VV)]),rJ=(VV,eV)=>{const xV=aY(oY(VV),VV.timescale),JV=!iV(eV)||!iV(xV),YV=JV?ux:Kx;return JJ("mdhd",+JV,0,[YV(eV),YV(eV),Kx(VV.timescale),YV(xV),Lx(AY(VV.track.metadata.languageCode??dV)),Lx(0)])},kJ={video:"vide",audio:"soun",subtitle:"text"},bJ={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},EJ=function(VV,eV,xV){let JV=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return JJ("hdlr",0,0,[VV?VJ("mhlr"):Kx(0),VJ(eV),VJ(JV),Kx(0),Kx(0),VJ(xV,!0)])},BJ=VV=>xJ("minf",void 0,[jJ[VV.type](),qJ(),TJ(VV)]),jJ={video:()=>JJ("vmhd",0,1,[Lx(0),Lx(0),Lx(0),Lx(0)]),audio:()=>JJ("smhd",0,0,[Lx(0),Lx(0)]),subtitle:()=>JJ("nmhd",0,0)},qJ=()=>xJ("dinf",void 0,[tJ()]),tJ=()=>JJ("dref",0,0,[Kx(1)],[FJ()]),FJ=()=>JJ("url ",0,1),TJ=VV=>{const eV=VV.compositionTimeOffsetTable.length>1||VV.compositionTimeOffsetTable.some((VV=>0!==VV.sampleCompositionTimeOffset));return xJ("stbl",void 0,[PJ(VV),LJ(VV),eV?uJ(VV):null,eV?sJ(VV):null,mJ(VV),KJ(VV),HJ(VV),fJ(VV)])},PJ=VV=>{let eV;if("video"===VV.type)eV=AJ(jY(VV.track.source._codec,VV.info.decoderConfig.codec),VV);else if("audio"===VV.type){const xV=tY(VV.track.source._codec,VV.info.decoderConfig.codec,VV.muxer.isQuickTime);MV(xV),eV=GJ(xV,VV)}else"subtitle"===VV.type&&(eV=lJ(TY[VV.track.source._codec],VV));return MV(eV),JJ("stsd",0,0,[Kx(1)],[eV])},AJ=(VV,eV)=>xJ(VV,[Array(6).fill(0),Lx(1),Lx(0),Lx(0),Array(12).fill(0),Lx(eV.info.width),Lx(eV.info.height),Kx(4718592),Kx(4718592),Kx(0),Lx(1),lx(18),VJ(Pe),Array(13).fill(0),Lx(eV.info.hasAlphaChannel?32:24),fx(65535)],[qY[eV.track.source._codec]?.(eV)??null,XJ(eV),KV(eV.info.decoderConfig.colorSpace)?null:MJ(eV),NJ(eV)]),NJ=VV=>0===VV.avgBitrate&&0===VV.maxBitrate?null:xJ("btrt",[Kx(0),Kx(VV.maxBitrate),Kx(VV.avgBitrate)]),XJ=VV=>VV.info.pixelAspectRatio.num===VV.info.pixelAspectRatio.den?null:xJ("pasp",[Kx(VV.info.pixelAspectRatio.num),Kx(VV.info.pixelAspectRatio.den)]),MJ=VV=>{const eV=VV.info.decoderConfig.colorSpace;return xJ("colr",[VJ(VV.muxer.isQuickTime?"nclc":"nclx"),Lx(null!=eV?.primaries?LV[eV.primaries]:2),Lx(null!=eV?.transfer?fV[eV.transfer]:2),Lx(null!=eV?.matrix?mV[eV.matrix]:2),VV.muxer.isQuickTime?[]:lx((eV?.fullRange?1:0)<<7)])},zJ=VV=>{if(!VV.info.decoderConfig)return null;const eV=VV.info.decoderConfig,xV=eV.codec.split("."),JV=Number(xV[1]),YV=Number(xV[2]),UV=(Number(xV[3])<<4)+((xV[4]?Number(xV[4]):1)<<1)+(xV[8]?Number(xV[8]):Number(eV.colorSpace?.fullRange??0)),yV=xV[5]?Number(xV[5]):eV.colorSpace?.primaries?LV[eV.colorSpace.primaries]:1,pV=xV[6]?Number(xV[6]):eV.colorSpace?.transfer?fV[eV.colorSpace.transfer]:1,QV=xV[7]?Number(xV[7]):eV.colorSpace?.matrix?mV[eV.colorSpace.matrix]:1;return JJ("vpcC",1,0,[lx(JV),lx(YV),lx(UV),lx(yV),lx(pV),lx(QV),Lx(0)])},GJ=(VV,eV)=>{let xV,JV=0,YV=16;const UV=Qx.includes(eV.track.source._codec);if(UV){const VV=eV.track.source._codec,{sampleSize:xV}=Bx(VV);YV=8*xV,YV>16&&(JV=1)}if(eV.muxer.isQuickTime&&(JV=1),0===JV)xV=[Array(6).fill(0),Lx(1),Lx(JV),Lx(0),Kx(0),Lx(eV.info.numberOfChannels),Lx(YV),Lx(0),Lx(0),Lx(eV.info.sampleRate<65536?eV.info.sampleRate:0),Lx(0)];else{const VV=UV?0:-2;xV=[Array(6).fill(0),Lx(1),Lx(JV),Lx(0),Kx(0),Lx(eV.info.numberOfChannels),Lx(Math.min(YV,16)),fx(VV),Lx(0),Lx(eV.info.sampleRate<65536?eV.info.sampleRate:0),Lx(0),UV?[Kx(1),Kx(YV/8),Kx(eV.info.numberOfChannels*YV/8)]:[Kx(0),Kx(0),Kx(0)],Kx(2)]}return xJ(VV,xV,[FY(eV.track.source._codec,eV.muxer.isQuickTime)?.(eV)??null,NJ(eV)])},WJ=VV=>{let eV;switch(VV.track.source._codec){case"aac":eV=64;break;case"mp3":eV=107;break;case"vorbis":eV=221;break;default:throw new Error(`Unhandled audio codec: ${VV.track.source._codec}`)}let xV=[...lx(eV),...lx(21),...mx(0),...Kx(VV.maxBitrate),...Kx(VV.avgBitrate)];if(VV.info.decoderConfig.description){const eV=oV(VV.info.decoderConfig.description);xV=[...xV,...lx(5),...Ox(eV.byteLength),...eV]}return xV=[...Lx(1),...lx(0),...lx(4),...Ox(xV.length),...xV,...lx(6),...lx(1),...lx(2)],xV=[...lx(3),...Ox(xV.length),...xV],JJ("esds",0,0,xV)},RJ=VV=>xJ("wave",void 0,[gJ(VV),DJ(VV),xJ("\\0\\0\\0\\0")]),gJ=VV=>xJ("frma",[VJ(tY(VV.track.source._codec,VV.info.decoderConfig.codec,VV.muxer.isQuickTime))]),DJ=VV=>{const{littleEndian:eV}=Bx(VV.track.source._codec);return xJ("enda",[Lx(+eV)])},iJ=VV=>{let eV=VV.info.numberOfChannels,xV=3840,JV=VV.info.sampleRate,YV=0,UV=0,yV=new Uint8Array(0);const pV=VV.info.decoderConfig?.description;if(pV){MV(pV.byteLength>=18);const VV=oV(pV),QV=Ke(VV);eV=QV.outputChannelCount,xV=QV.preSkip,JV=QV.inputSampleRate,YV=QV.outputGain,UV=QV.channelMappingFamily,QV.channelMappingTable&&(yV=QV.channelMappingTable)}return xJ("dOps",[lx(0),lx(eV),Lx(xV),Kx(JV),fx(YV),lx(UV),...yV])},CJ=VV=>{const eV=VV.info.decoderConfig?.description;MV(eV);const xV=oV(eV);return JJ("dfLa",0,0,[...xV.subarray(4)])},aJ=VV=>{const{littleEndian:eV,sampleSize:xV}=Bx(VV.track.source._codec);return JJ("pcmC",0,0,[lx(+eV),lx(8*xV)])},oJ=VV=>{MV(VV.info.primingPacket);const eV=(VV=>{if(VV.length<7)return null;if(11!==VV[0]||119!==VV[1])return null;const eV=new ve(VV);eV.skipBits(16),eV.skipBits(16);const xV=eV.readBits(2);if(3===xV)return null;const JV=eV.readBits(6),YV=eV.readBits(5);if(YV>8)return null;const UV=eV.readBits(3),yV=eV.readBits(3);return 0!==(1&yV)&&1!==yV&&eV.skipBits(2),0!==(4&yV)&&eV.skipBits(2),2===yV&&eV.skipBits(2),{fscod:xV,bsid:YV,bsmod:UV,acmod:yV,lfeon:eV.readBits(1),bitRateCode:Math.floor(JV/2)}})(VV.info.primingPacket.data);if(!eV)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const xV=new Uint8Array(3),JV=new ve(xV);return JV.writeBits(2,eV.fscod),JV.writeBits(5,eV.bsid),JV.writeBits(3,eV.bsmod),JV.writeBits(3,eV.acmod),JV.writeBits(1,eV.lfeon),JV.writeBits(5,eV.bitRateCode),JV.writeBits(5,0),xJ("dac3",[...xV])},cJ=VV=>{MV(VV.info.primingPacket);const eV=(VV=>{if(VV.length<6)return null;if(11!==VV[0]||119!==VV[1])return null;const eV=new ve(VV);eV.skipBits(16);const xV=eV.readBits(2);if(eV.skipBits(3),0!==xV&&2!==xV)return null;const JV=eV.readBits(11),YV=eV.readBits(2);let UV,yV=0;3===YV?(yV=eV.readBits(2),UV=3):UV=eV.readBits(2);const pV=eV.readBits(3),QV=eV.readBits(1),nV=eV.readBits(5);if(nV<11||nV>16)return null;const wV=ue[UV];let ZV;return ZV=YV<3?Fe[YV]/1e3:Te[yV]/1e3,{dataRate:Math.round((JV+1)*ZV/(16*wV)),substreams:[{fscod:YV,fscod2:yV,bsid:nV,bsmod:0,acmod:pV,lfeon:QV,numDepSub:0,chanLoc:0}]}})(VV.info.primingPacket.data);if(!eV)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let xV=16;for(const yV of eV.substreams)xV+=23,yV.numDepSub>0?xV+=9:xV+=1;const JV=Math.ceil(xV/8),YV=new Uint8Array(JV),UV=new ve(YV);UV.writeBits(13,eV.dataRate),UV.writeBits(3,eV.substreams.length-1);for(const yV of eV.substreams)UV.writeBits(2,yV.fscod),UV.writeBits(5,yV.bsid),UV.writeBits(1,0),UV.writeBits(1,0),UV.writeBits(3,yV.bsmod),UV.writeBits(3,yV.acmod),UV.writeBits(1,yV.lfeon),UV.writeBits(3,0),UV.writeBits(4,yV.numDepSub),yV.numDepSub>0?UV.writeBits(9,yV.chanLoc):UV.writeBits(1,0);return xJ("dec3",[...YV])},hJ=VV=>{MV(VV.info.primingPacket);const eV=Jx(VV.info.primingPacket.data);if(!eV)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return xJ("ddts",[...yx(eV)])},lJ=(VV,eV)=>xJ(VV,[Array(6).fill(0),Lx(1)],[PY[eV.track.source._codec](eV),NJ(eV)]),LJ=VV=>JJ("stts",0,0,[Kx(VV.timeToSampleTable.length),VV.timeToSampleTable.map((VV=>[Kx(VV.sampleCount),Kx(VV.sampleDelta)]))]),fJ=VV=>{if(VV.samples.every((VV=>"key"===VV.type)))return null;const eV=[...VV.samples.entries()].filter((VV=>{let[,eV]=VV;return"key"===eV.type}));return JJ("stss",0,0,[Kx(eV.length),eV.map((VV=>{let[eV]=VV;return Kx(eV+1)}))])},mJ=VV=>JJ("stsc",0,0,[Kx(VV.compactlyCodedChunkTable.length),VV.compactlyCodedChunkTable.map((VV=>[Kx(VV.firstChunk),Kx(VV.samplesPerChunk),Kx(1)]))]),KJ=VV=>{if("audio"===VV.type&&VV.info.requiresPcmTransformation){const{sampleSize:eV}=Bx(VV.track.source._codec);return JJ("stsz",0,0,[Kx(eV*VV.info.numberOfChannels),Kx(VV.samples.reduce(((eV,xV)=>eV+aY(xV.duration,VV.timescale)),0))])}return JJ("stsz",0,0,[Kx(0),Kx(VV.samples.length),VV.samples.map((VV=>Kx(VV.size)))])},HJ=VV=>VV.finalizedChunks.length>0&&DV(VV.finalizedChunks).offset>=2**32?JJ("co64",0,0,[Kx(VV.finalizedChunks.length),VV.finalizedChunks.map((VV=>ux(VV.offset)))]):JJ("stco",0,0,[Kx(VV.finalizedChunks.length),VV.finalizedChunks.map((VV=>Kx(VV.offset)))]),uJ=VV=>JJ("ctts",1,0,[Kx(VV.compositionTimeOffsetTable.length),VV.compositionTimeOffsetTable.map((VV=>[Kx(VV.sampleCount),Hx(VV.sampleCompositionTimeOffset)]))]),sJ=VV=>{let eV=1/0,xV=-1/0,JV=1/0,YV=-1/0;MV(VV.compositionTimeOffsetTable.length>0),MV(VV.samples.length>0);for(let yV=0;yV<VV.compositionTimeOffsetTable.length;yV++){const JV=VV.compositionTimeOffsetTable[yV];eV=Math.min(eV,JV.sampleCompositionTimeOffset),xV=Math.max(xV,JV.sampleCompositionTimeOffset)}for(let yV=0;yV<VV.samples.length;yV++){const eV=VV.samples[yV];JV=Math.min(JV,aY(eV.timestamp,VV.timescale)),YV=Math.max(YV,aY(eV.timestamp+eV.duration,VV.timescale))}const UV=Math.max(-eV,0);return YV>=2**31?null:JJ("cslg",0,0,[Hx(UV),Hx(eV),Hx(xV),Hx(JV),Hx(YV)])},SJ=VV=>xJ("mvex",void 0,VV.map(IJ)),IJ=VV=>JJ("trex",0,0,[Kx(VV.track.id),Kx(1),Kx(0),Kx(0),Kx(0)]),dJ=(VV,eV)=>xJ("moof",void 0,[OJ(VV),...eV.map(eY)]),OJ=VV=>JJ("mfhd",0,0,[Kx(VV)]),VY=VV=>{let eV=0,xV=0;const JV="delta"===VV.type;return xV|=+JV,eV|=JV?1:2,eV<<24|xV<<16},eY=VV=>xJ("traf",void 0,[xY(VV),JY(VV),YY(VV)]),xY=VV=>{MV(VV.currentChunk);let eV=0;eV|=8,eV|=16,eV|=32,eV|=131072;const xV=VV.currentChunk.samples[1]??VV.currentChunk.samples[0],JV={duration:xV.timescaleUnitsToNextSample,size:xV.size,flags:VY(xV)};return JJ("tfhd",0,131128,[Kx(VV.track.id),Kx(JV.duration),Kx(JV.size),Kx(JV.flags)])},JY=VV=>(MV(VV.currentChunk),JJ("tfdt",1,0,[ux(aY(VV.currentChunk.startTimestamp,VV.timescale))])),YY=VV=>{MV(VV.currentChunk);const eV=VV.currentChunk.samples.map((VV=>VV.timescaleUnitsToNextSample)),xV=VV.currentChunk.samples.map((VV=>VV.size)),JV=VV.currentChunk.samples.map(VY),YV=VV.currentChunk.samples.map((eV=>aY(eV.timestamp-eV.decodeTimestamp,VV.timescale))),UV=new Set(eV),yV=new Set(xV),pV=new Set(JV),QV=new Set(YV),nV=2===pV.size&&JV[0]!==JV[1],wV=UV.size>1,ZV=yV.size>1,vV=!nV&&pV.size>1,rV=QV.size>1||[...QV].some((VV=>0!==VV));let kV=0;return kV|=1,kV|=4*+nV,kV|=256*+wV,kV|=512*+ZV,kV|=1024*+vV,kV|=2048*+rV,JJ("trun",1,kV,[Kx(VV.currentChunk.samples.length),Kx(VV.currentChunk.offset-VV.currentChunk.moofOffset||0),nV?Kx(JV[0]):[],VV.currentChunk.samples.map(((VV,UV)=>[wV?Kx(eV[UV]):[],ZV?Kx(xV[UV]):[],vV?Kx(JV[UV]):[],rV?Hx(YV[UV]):[]]))])},UY=VV=>JJ("tfra",1,0,[Kx(VV.track.id),Kx(63),Kx(VV.finalizedChunks.length),VV.finalizedChunks.map((eV=>[ux(aY(eV.samples[0].timestamp,VV.timescale)),ux(eV.moofOffset),Kx(eV.trafIndex+1),Kx(1),Kx(1)]))]),yY=()=>JJ("mfro",0,0,[Kx(0)]),pY=()=>xJ("vtte"),QY=(VV,eV,xV,JV,YV)=>xJ("vttc",void 0,[null!==YV?xJ("vsid",[Hx(YV)]):null,null!==xV?xJ("iden",[...lV.encode(xV)]):null,null!==eV?xJ("ctim",[...lV.encode(ax(eV))]):null,null!==JV?xJ("sttg",[...lV.encode(JV)]):null,xJ("payl",[...lV.encode(VV)])]),nY=VV=>xJ("vtta",[...lV.encode(VV)]),wY=VV=>{const eV=[],xV=VV.format._options.metadataFormat??"auto",JV=VV.output._metadataTags;if("mdir"===xV||"auto"===xV&&!VV.isQuickTime){const VV=bY(JV);VV&&eV.push(VV)}else if("mdta"===xV){const VV=EY(JV);VV&&eV.push(VV)}else("udta"===xV||"auto"===xV&&VV.isQuickTime)&&ZY(eV,VV.output._metadataTags);return 0===eV.length?null:xJ("udta",void 0,eV)},ZY=(VV,eV)=>{for(const{key:xV,value:JV}of Ye(eV))switch(xV){case"title":VV.push(vY("\\xa9nam",JV));break;case"description":VV.push(vY("\\xa9des",JV));break;case"artist":VV.push(vY("\\xa9ART",JV));break;case"album":VV.push(vY("\\xa9alb",JV));break;case"albumArtist":VV.push(vY("albr",JV));break;case"genre":VV.push(vY("\\xa9gen",JV));break;case"date":VV.push(vY("\\xa9day",JV.toISOString().slice(0,10)));break;case"comment":VV.push(vY("\\xa9cmt",JV));break;case"lyrics":VV.push(vY("\\xa9lyr",JV));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:SV(xV)}if(eV.raw)for(const xV in eV.raw){const JV=eV.raw[xV];null==JV||4!==xV.length||VV.some((VV=>VV.type===xV))||("string"===typeof JV?VV.push(vY(xV,JV)):JV instanceof Uint8Array&&VV.push(xJ(xV,Array.from(JV))))}},vY=(VV,eV)=>{const xV=lV.encode(eV);return xJ(VV,[Lx(xV.length),Lx(AY("und")),Array.from(xV)])},rY={"image/jpeg":13,"image/png":14,"image/bmp":27},kY=(VV,eV)=>{const xV=[];for(const{key:JV,value:YV}of Ye(VV))switch(JV){case"title":xV.push({key:eV?"title":"\\xa9nam",value:BY(YV)});break;case"description":xV.push({key:eV?"description":"\\xa9des",value:BY(YV)});break;case"artist":xV.push({key:eV?"artist":"\\xa9ART",value:BY(YV)});break;case"album":xV.push({key:eV?"album":"\\xa9alb",value:BY(YV)});break;case"albumArtist":xV.push({key:eV?"album_artist":"aART",value:BY(YV)});break;case"comment":xV.push({key:eV?"comment":"\\xa9cmt",value:BY(YV)});break;case"genre":xV.push({key:eV?"genre":"\\xa9gen",value:BY(YV)});break;case"beatsPerMinute":eV||xV.push({key:"tmpo",value:xJ("data",[Kx(21),Kx(0),Lx(YV)])});break;case"lyrics":xV.push({key:eV?"lyrics":"\\xa9lyr",value:BY(YV)});break;case"date":xV.push({key:eV?"date":"\\xa9day",value:BY(YV.toISOString().slice(0,10))});break;case"images":for(const VV of YV)"coverFront"===VV.kind&&xV.push({key:"covr",value:xJ("data",[Kx(rY[VV.mimeType]??0),Kx(0),Array.from(VV.data)])});break;case"trackNumber":if(eV){const eV=void 0!==VV.tracksTotal?`${YV}/${VV.tracksTotal}`:YV.toString();xV.push({key:"track",value:BY(eV)})}else xV.push({key:"trkn",value:xJ("data",[Kx(0),Kx(0),Lx(0),Lx(YV),Lx(VV.tracksTotal??0),Lx(0)])});break;case"discNumber":eV||xV.push({key:"disc",value:xJ("data",[Kx(0),Kx(0),Lx(0),Lx(YV),Lx(VV.discsTotal??0),Lx(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:SV(JV)}if(VV.raw)for(const JV in VV.raw){const YV=VV.raw[JV];null==YV||!eV&&4!==JV.length||xV.some((VV=>VV.key===JV))||("string"===typeof YV?xV.push({key:JV,value:BY(YV)}):YV instanceof Uint8Array?xV.push({key:JV,value:xJ("data",[Kx(0),Kx(0),Array.from(YV)])}):YV instanceof we&&xV.push({key:JV,value:xJ("data",[Kx(rY[YV.mimeType]??0),Kx(0),Array.from(YV.data)])}))}return xV},bY=VV=>{const eV=kY(VV,!1);return 0===eV.length?null:JJ("meta",0,0,void 0,[EJ(!1,"mdir","","appl"),xJ("ilst",void 0,eV.map((VV=>xJ(VV.key,void 0,[VV.value]))))])},EY=VV=>{const eV=kY(VV,!0);return 0===eV.length?null:xJ("meta",void 0,[EJ(!1,"mdta",""),JJ("keys",0,0,[Kx(eV.length)],eV.map((VV=>xJ("mdta",[...lV.encode(VV.key)])))),xJ("ilst",void 0,eV.map(((VV,eV)=>{const xV=String.fromCharCode(...Kx(eV+1));return xJ(xV,void 0,[VV.value])})))])},BY=VV=>xJ("data",[Kx(1),Kx(0),...lV.encode(VV)]),jY=(VV,eV)=>{switch(VV){case"avc":return eV.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return eV}},qY={avc:VV=>VV.info.decoderConfig&&xJ("avcC",[...oV(VV.info.decoderConfig.description)]),hevc:VV=>VV.info.decoderConfig&&xJ("hvcC",[...oV(VV.info.decoderConfig.description)]),vp8:zJ,vp9:zJ,av1:VV=>xJ("av1C",bx(VV.info.decoderConfig.codec)),prores:null},tY=(VV,eV,xV)=>{switch(VV){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return eV}if(xV)switch(VV){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(VV){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},FY=(VV,eV)=>{switch(VV){case"aac":case"mp3":case"vorbis":return WJ;case"opus":return iJ;case"flac":return CJ;case"ac3":return oJ;case"eac3":return cJ;case"dts":return hJ}if(eV)switch(VV){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return RJ}else switch(VV){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return aJ}return null},TY={webvtt:"wvtt"},PY={webvtt:VV=>xJ("vttC",[...lV.encode(VV.info.config.description)])},AY=VV=>{MV(3===VV.length);let eV=0;for(let xV=0;xV<3;xV++)eV<<=5,eV+=VV.charCodeAt(xV)-96;return eV};class NY{constructor(VV,eV){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,VV._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=VV,VV._setMonotonicity(eV),VV._writerAcquired=!0}start(){MV(!this.started),this.target._start(),this.started=!0}write(VV){MV(this.started&&!this.finalized),this.maybeTrackWrites(VV),this.target._write(VV,this.pos),this.pos+=VV.byteLength}seek(VV){this.pos=VV}getPos(){return this.pos}async flush(){return MV(this.started&&!this.finalized),this.target._flush()}async finalize(){MV(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(VV){if(!this.trackedWrites)return;let eV=this.getPos();if(eV<this.trackedStart){if(eV+VV.byteLength<=this.trackedStart)return;VV=VV.subarray(this.trackedStart-eV),eV=0}const xV=eV+VV.byteLength-this.trackedStart;let JV=this.trackedWrites.byteLength;for(;JV<xV;)JV*=2;if(JV!==this.trackedWrites.byteLength){const VV=new Uint8Array(JV);VV.set(this.trackedWrites,0),this.trackedWrites=VV}this.trackedWrites.set(VV,eV-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,eV+VV.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const VV={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,VV}}xV(6);class XY extends Qe{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(VV){!1!==this._monotonicity&&(this._monotonicity=VV)}_dispatchWrite(VV,eV){this.onwrite?.(VV,eV),this._emit("write",{start:VV,end:eV})}slice(VV){if(!Number.isInteger(VV)||VV<0)throw new TypeError("offset must be a non-negative integer.");return new RY(this,VV)}}const MY=65536,zY=2**32;class GY extends XY{constructor(){let VV=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!VV||"object"!==typeof VV)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==VV.onFinalize&&"function"!==typeof VV.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=VV,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(MY,{maxByteLength:zY})}catch{this._buffer=new ArrayBuffer(MY),this._supportsResize=!1}else this._buffer=new ArrayBuffer(MY);this._bytes=new Uint8Array(this._buffer)}_ensureSize(VV){let eV=this._buffer.byteLength;for(;eV<VV;)eV*=2;if(eV!==this._buffer.byteLength){if(eV>zY)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(eV);else{const VV=new ArrayBuffer(eV),xV=new Uint8Array(VV);xV.set(this._bytes,0),this._buffer=VV,this._bytes=xV}}}_start(){}_write(VV,eV){this._ensureSize(eV+VV.byteLength),this._bytes.set(VV,eV),this._maxPos=Math.max(this._maxPos,eV+VV.byteLength),this._dispatchWrite(eV,eV+VV.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(VV,eV){return this._bytes.slice(VV,eV)}}class WY extends XY{_start(){}_write(VV,eV){this._dispatchWrite(eV,eV+VV.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class RY extends XY{constructor(VV,eV){super(),this._baseTarget=VV,this._offset=eV}_start(){}_write(VV,eV){this._baseTarget._write(VV,this._offset+eV),this._dispatchWrite(eV,eV+VV.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(VV){super._setMonotonicity(VV),this._baseTarget._setMonotonicity(VV)}}class gY{constructor(VV,eV){if(this.rootPath=VV,this.getTarget=eV,"string"!==typeof VV)throw new TypeError("rootPath must be a string.");if("function"!==typeof eV)throw new TypeError("getTarget must be a function.")}}const DY=VV=>{const eV=VV.filePos,xV=Rx(VV,9),JV=new ve(xV);if(4095!==JV.readBits(12))return null;JV.skipBits(1);if(0!==JV.readBits(2))return null;const YV=JV.readBits(1),UV=JV.readBits(2)+1,yV=JV.readBits(4);if(15===yV)return null;JV.skipBits(1);const pV=JV.readBits(3);if(0===pV)throw new Error("ADTS frames with channel configuration 0 are not supported.");JV.skipBits(1),JV.skipBits(1),JV.skipBits(1),JV.skipBits(1);const QV=JV.readBits(13);JV.skipBits(11);const nV=JV.readBits(2)+1;if(1!==nV)throw new Error("ADTS frames with more than one AAC frame are not supported.");let wV=null;return 1===YV?VV.filePos-=2:wV=JV.readBits(16),{objectType:UV,samplingFrequencyIndex:yV,channelConfiguration:pV,frameLength:QV,numberOfAacFrames:nV,crcCheck:wV,startPos:eV}},iY=57600,CY=VV=>{const eV={},xV=VV.track;return void 0!==xV.metadata.name&&(eV.name=xV.metadata.name),eV},aY=function(VV,eV){const xV=VV*eV;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(xV):xV},oY=VV=>{if(0===VV.samples.length)return 0;let eV=1/0,xV=-1/0;for(let JV=0;JV<VV.samples.length;JV++){const YV=VV.samples[JV];YV.timestamp<eV&&(eV=YV.timestamp),YV.timestamp+YV.duration>xV&&(xV=YV.timestamp+YV.duration)}return eV===1/0?0:xV-eV};class cY extends ix{constructor(VV,eV){super(VV),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new GY,this.auxWriter=new NY(this.auxTarget,!1),this.auxBoxWriter=new ox(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=sV(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=eV,this.formatOptions={...eV._options},this.isQuickTime=eV instanceof nU,this.isCmaf=eV instanceof QU,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(eV instanceof QU?1/0:1),this.auxWriter.start()}async start(){const VV=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((VV=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:VV instanceof GY)),this.boxWriter=new ox(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof GY&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const VV=await this.output._getInitTarget(),eV=new NY(VV,!0);eV.start(),this.initWriter=eV,this.initBoxWriter=new ox(eV)}const eV=this.output.tracks.some((VV=>VV.isVideoTrack()&&"avc"===VV.source._codec));{const VV=this.initBoxWriter??this.boxWriter;if(MV(VV),this.formatOptions.onFtyp&&VV.writer.startTrackingWrites(),VV.writeBox((VV=>{const eV=512;return VV.isQuickTime?xJ("ftyp",[VJ("qt  "),Kx(eV),VJ("qt  ")]):VV.fragmented?VV.cmaf?xJ("ftyp",[VJ("iso5"),Kx(eV),VJ("iso5"),VJ("iso6"),VJ("mp41"),VJ("cmfc"),VJ("dash")]):xJ("ftyp",[VJ("iso5"),Kx(eV),VJ("iso5"),VJ("iso6"),VJ("mp41")]):xJ("ftyp",[VJ("isom"),Kx(eV),VJ("isom"),VV.holdsAvc?VJ("avc1"):[],VJ("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:eV,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:eV,start:xV}=VV.writer.stopTrackingWrites();this.formatOptions.onFtyp(eV,xV)}this.ftypSize=VV.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const xV of this.output.tracks)if(void 0===xV.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(MV(this.writer),MV(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=yJ(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const xV of this.output.tracks)xV.isVideoTrack()&&xV.metadata.decoderConfig?this.getVideoTrackData(xV,xV.metadata.primingPacket??null,{decoderConfig:xV.metadata.decoderConfig}):xV.isAudioTrack()&&xV.metadata.decoderConfig&&this.getAudioTrackData(xV,xV.metadata.primingPacket??null,{decoderConfig:xV.metadata.decoderConfig});VV()}allTracksAreKnown(){for(const VV of this.output.tracks)if(!VV.source._closed&&!this.trackDatas.some((eV=>eV.track===VV)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const VV=this.trackDatas.map((VV=>{if("video"===VV.type)return VV.info.decoderConfig.codec;if("audio"===VV.type)return VV.info.decoderConfig.codec;return{webvtt:"wvtt"}[VV.track.source._codec]}));return(VV=>{let eV=(VV.hasVideo?"video/":VV.hasAudio?"audio/":"application/")+(VV.isQuickTime?"quicktime":"mp4");VV.codecStrings.length>0&&(eV+=`; codecs="${[...new Set(VV.codecStrings)].join(", ")}"`);return eV})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((VV=>"video"===VV.type)),hasAudio:this.trackDatas.some((VV=>"audio"===VV.type)),codecStrings:VV})}getVideoTrackData(VV,eV,xV){const JV=this.trackDatas.find((eV=>eV.track===VV));if(JV)return JV;Ax(xV,VV.source._codec),MV(xV),MV(xV.decoderConfig);const YV={...xV.decoderConfig};MV(void 0!==YV.codedWidth),MV(void 0!==YV.codedHeight);let UV=!1;if("avc"!==VV.source._codec||YV.description){if("hevc"===VV.source._codec&&!YV.description){if(!eV)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const VV=Ce(eV.data);if(!VV)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");YV.description=(VV=>{const eV=[];eV.push(VV.configurationVersion),eV.push((3&VV.generalProfileSpace)<<6|(1&VV.generalTierFlag)<<5|31&VV.generalProfileIdc),eV.push(VV.generalProfileCompatibilityFlags>>>24&255),eV.push(VV.generalProfileCompatibilityFlags>>>16&255),eV.push(VV.generalProfileCompatibilityFlags>>>8&255),eV.push(255&VV.generalProfileCompatibilityFlags),eV.push(...VV.generalConstraintIndicatorFlags),eV.push(255&VV.generalLevelIdc),eV.push(240|VV.minSpatialSegmentationIdc>>8&15),eV.push(255&VV.minSpatialSegmentationIdc),eV.push(252|3&VV.parallelismType),eV.push(252|3&VV.chromaFormatIdc),eV.push(248|7&VV.bitDepthLumaMinus8),eV.push(248|7&VV.bitDepthChromaMinus8),eV.push(VV.avgFrameRate>>8&255),eV.push(255&VV.avgFrameRate),eV.push((3&VV.constantFrameRate)<<6|(7&VV.numTemporalLayers)<<3|(1&VV.temporalIdNested)<<2|3&VV.lengthSizeMinusOne),eV.push(255&VV.arrays.length);for(const xV of VV.arrays){eV.push((1&xV.arrayCompleteness)<<7|63&xV.nalUnitType),eV.push(xV.nalUnits.length>>8&255),eV.push(255&xV.nalUnits.length);for(const VV of xV.nalUnits){eV.push(VV.length>>8&255),eV.push(255&VV.length);for(let xV=0;xV<VV.length;xV++)eV.push(VV[xV])}}return new Uint8Array(eV)})(VV),UV=!0}}else{if(!eV)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const VV=We(eV.data);if(!VV)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");YV.description=(VV=>{const eV=[];eV.push(VV.configurationVersion),eV.push(VV.avcProfileIndication),eV.push(VV.profileCompatibility),eV.push(VV.avcLevelIndication),eV.push(252|3&VV.lengthSizeMinusOne),eV.push(224|31&VV.sequenceParameterSets.length);for(const xV of VV.sequenceParameterSets){const VV=xV.byteLength;eV.push(VV>>8),eV.push(255&VV);for(let JV=0;JV<VV;JV++)eV.push(xV[JV])}eV.push(VV.pictureParameterSets.length);for(const xV of VV.pictureParameterSets){const VV=xV.byteLength;eV.push(VV>>8),eV.push(255&VV);for(let JV=0;JV<VV;JV++)eV.push(xV[JV])}if((100===VV.avcProfileIndication||110===VV.avcProfileIndication||122===VV.avcProfileIndication||144===VV.avcProfileIndication)&&null!==VV.chromaFormat){MV(null!==VV.bitDepthLumaMinus8),MV(null!==VV.bitDepthChromaMinus8),MV(null!==VV.sequenceParameterSetExt),eV.push(252|3&VV.chromaFormat),eV.push(248|7&VV.bitDepthLumaMinus8),eV.push(248|7&VV.bitDepthChromaMinus8),eV.push(VV.sequenceParameterSetExt.length);for(const xV of VV.sequenceParameterSetExt){const VV=xV.byteLength;eV.push(VV>>8),eV.push(255&VV);for(let JV=0;JV<VV;JV++)eV.push(xV[JV])}}return new Uint8Array(eV)})(VV),UV=!0}const yV=((VV,eV)=>{const xV=VV<0?-1:1;let JV=0,YV=1,UV=1,yV=0,pV=VV=Math.abs(VV);for(;;){const VV=Math.floor(pV),QV=VV*UV+JV,nV=VV*yV+YV;if(nV>eV)return{num:xV*UV,den:yV};if(JV=UV,YV=yV,UV=QV,yV=nV,pV=1/(pV-VV),!isFinite(pV))break}return{num:xV*UV,den:yV}})(1/(VV.metadata.frameRate??iY),1e6).den,pV=YV.displayAspectWidth,QV=YV.displayAspectHeight,nV=void 0===pV||void 0===QV?{num:1,den:1}:ye({num:pV*YV.codedHeight,den:QV*YV.codedWidth}),wV="ap4h"===YV.codec||"ap4x"===YV.codec,ZV={muxer:this,track:VV,type:"video",info:{width:YV.codedWidth,height:YV.codedHeight,pixelAspectRatio:nV,decoderConfig:YV,requiresAnnexBTransformation:UV,hasAlphaChannel:wV},timescale:yV,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:VV.source._nominalBitrate??VV.metadata.averageBitrate??0,maxBitrate:VV.source._nominalBitrate??VV.metadata.bitrate??0};return this.trackDatas.push(ZV),this.trackDatas.sort(((VV,eV)=>VV.track.id-eV.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),ZV}getAudioTrackData(VV,eV,xV){const JV=this.trackDatas.find((eV=>eV.track===VV));if(JV)return JV;Xx(xV,VV.source._codec),MV(xV),MV(xV.decoderConfig);const YV={...xV.decoderConfig};let UV=!1;if("aac"===VV.source._codec&&!YV.description){if(!eV)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const VV=DY(Gx.tempFromBytes(eV.data));if(!VV)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const xV=re[VV.samplingFrequencyIndex],JV=ke[VV.channelConfiguration];if(void 0===xV||void 0===JV)throw new Error("Invalid ADTS frame header.");YV.description=be({objectType:VV.objectType,outputSampleRate:xV,outputNumberOfChannels:JV}),UV=!0}if(!eV){if("ac3"===VV.source._codec||"eac3"===VV.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===VV.source._codec)throw new Error("DTS requires a priming packet.")}const yV={muxer:this,track:VV,type:"audio",info:{numberOfChannels:xV.decoderConfig.numberOfChannels,sampleRate:xV.decoderConfig.sampleRate,decoderConfig:YV,requiresPcmTransformation:!this.isFragmented&&Qx.includes(VV.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:UV,primingPacket:eV},timescale:YV.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:VV.source._nominalBitrate??VV.metadata.averageBitrate??0,maxBitrate:VV.source._nominalBitrate??VV.metadata.bitrate??0};return this.trackDatas.push(yV),this.trackDatas.sort(((VV,eV)=>VV.track.id-eV.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),yV}getSubtitleTrackData(VV,eV){const xV=this.trackDatas.find((eV=>eV.track===VV));if(xV)return xV;Mx(eV),MV(eV),MV(eV.config);const JV={muxer:this,track:VV,type:"subtitle",info:{config:eV.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:VV.source._nominalBitrate??VV.metadata.averageBitrate??0,maxBitrate:VV.source._nominalBitrate??VV.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(JV),this.trackDatas.sort(((VV,eV)=>VV.track.id-eV.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),JV}async addEncodedVideoPacket(VV,eV,xV){const JV=await this.mutex.acquire();try{const JV=this.getVideoTrackData(VV,eV,xV);let YV=eV.data;if(JV.info.requiresAnnexBTransformation){const VV=[...Xe(YV)].map((VV=>YV.subarray(VV.offset,VV.offset+VV.length)));if(0===VV.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");YV=Ge(VV,4)}this.validateTimestamp(JV.track,eV.timestamp,"key"===eV.type);const UV=this.createSampleForTrack(JV,YV,eV.timestamp,eV.duration,eV.type);await this.registerSample(JV,UV)}finally{JV()}}async addEncodedAudioPacket(VV,eV,xV){const JV=await this.mutex.acquire();try{const JV=this.getAudioTrackData(VV,eV,xV);let YV=eV.data;if(JV.info.requiresAdtsStripping){const VV=DY(Gx.tempFromBytes(YV));if(!VV)throw new Error("Expected ADTS frame, didn\'t get one.");const eV=null===VV.crcCheck?7:9;YV=YV.subarray(eV)}this.validateTimestamp(JV.track,eV.timestamp,"key"===eV.type);let UV=eV.timestamp,yV=eV.duration;if(JV.info.requiresPcmTransformation){const VV=Bx(JV.info.decoderConfig.codec).sampleSize*JV.info.numberOfChannels;if(yV=YV.byteLength/VV/JV.info.sampleRate,null!==JV.info.expectedNextPcmPacketTimestamp){const VV=UV-JV.info.expectedNextPcmPacketTimestamp;if(VV<.01)UV=JV.info.expectedNextPcmPacketTimestamp;else{const eV=await this.padWithSilence(JV,JV.info.expectedNextPcmPacketTimestamp,VV);UV=JV.info.expectedNextPcmPacketTimestamp+eV}}JV.info.expectedNextPcmPacketTimestamp=UV+yV}const pV=this.createSampleForTrack(JV,YV,UV,yV,eV.type);await this.registerSample(JV,pV)}finally{JV()}}async padWithSilence(VV,eV,xV){const JV=aY(xV,VV.timescale);if(xV=JV/VV.timescale,JV>0){const{sampleSize:YV,silentValue:UV}=Bx(VV.info.decoderConfig.codec),yV=JV*VV.info.numberOfChannels,pV=new Uint8Array(YV*yV).fill(UV),QV=this.createSampleForTrack(VV,new Uint8Array(pV.buffer),eV,xV,"key");await this.registerSample(VV,QV)}return xV}async addSubtitleCue(VV,eV,xV){const JV=await this.mutex.acquire();try{const JV=this.getSubtitleTrackData(VV,xV);this.validateTimestamp(JV.track,eV.timestamp,!0),"webvtt"===VV.source._codec&&(JV.cueQueue.push(eV),await this.processWebVTTCues(JV,eV.timestamp))}finally{JV()}}async processWebVTTCues(VV,eV){for(;VV.cueQueue.length>0;){VV.lastCueEndTimestamp??=Math.min(0,VV.cueQueue[0].timestamp);const xV=new Set([]);for(const QV of VV.cueQueue)MV(QV.timestamp<=eV),MV(VV.lastCueEndTimestamp<=QV.timestamp+QV.duration),xV.add(Math.max(QV.timestamp,VV.lastCueEndTimestamp)),xV.add(QV.timestamp+QV.duration);const JV=[...xV].sort(((VV,eV)=>VV-eV)),YV=JV[0],UV=JV[1]??YV;if(eV<UV)break;if(VV.lastCueEndTimestamp<YV){this.auxWriter.seek(0);const eV=pY();this.auxBoxWriter.writeBox(eV);const xV=this.auxTarget._getSlice(0,this.auxWriter.getPos()),JV=this.createSampleForTrack(VV,xV,VV.lastCueEndTimestamp,YV-VV.lastCueEndTimestamp,"key");await this.registerSample(VV,JV),VV.lastCueEndTimestamp=YV}this.auxWriter.seek(0);for(let eV=0;eV<VV.cueQueue.length;eV++){const xV=VV.cueQueue[eV];if(xV.timestamp>=UV)break;Cx.lastIndex=0;const JV=Cx.test(xV.text),yV=xV.timestamp+xV.duration;let pV=VV.cueToSourceId.get(xV);if(void 0===pV&&UV<yV&&(pV=VV.nextSourceId++,VV.cueToSourceId.set(xV,pV)),xV.notes){const VV=nY(xV.notes);this.auxBoxWriter.writeBox(VV)}const QV=QY(xV.text,JV?YV:null,xV.identifier??null,xV.settings??null,pV??null);this.auxBoxWriter.writeBox(QV),yV===UV&&VV.cueQueue.splice(eV--,1)}const yV=this.auxTarget._getSlice(0,this.auxWriter.getPos()),pV=this.createSampleForTrack(VV,yV,YV,UV-YV,"key");await this.registerSample(VV,pV),VV.lastCueEndTimestamp=UV}}createSampleForTrack(VV,eV,xV,JV,YV){return{timestamp:xV,decodeTimestamp:xV,duration:JV,data:eV,size:eV.byteLength,type:YV,timescaleUnitsToNextSample:aY(JV,VV.timescale)}}processTimestamps(VV,eV){if(0===VV.timestampProcessingQueue.length)return;if("audio"===VV.type&&VV.info.requiresPcmTransformation){MV(!this.isFragmented),VV.startTimestampOffset??=VV.timestampProcessingQueue[0].timestamp;let eV=0;for(let xV=0;xV<VV.timestampProcessingQueue.length;xV++){const JV=VV.timestampProcessingQueue[xV];eV+=aY(JV.duration,VV.timescale)}if(0===VV.timeToSampleTable.length)VV.timeToSampleTable.push({sampleCount:eV,sampleDelta:1});else{DV(VV.timeToSampleTable).sampleCount+=eV}return void(VV.timestampProcessingQueue.length=0)}const xV=VV.timestampProcessingQueue.map((VV=>VV.timestamp)).sort(((VV,eV)=>VV-eV));this.isFragmented?VV.startTimestampOffset??=Math.min(xV[0],0):VV.startTimestampOffset??=xV[0];for(let JV=0;JV<VV.timestampProcessingQueue.length;JV++){const eV=VV.timestampProcessingQueue[JV];eV.decodeTimestamp=xV[JV];const YV=aY(eV.timestamp-eV.decodeTimestamp,VV.timescale),UV=aY(eV.duration,VV.timescale);if(null!==VV.lastTimescaleUnits){MV(VV.lastSample);const xV=aY(eV.decodeTimestamp,VV.timescale,!1),JV=Math.round(xV-VV.lastTimescaleUnits);if(MV(JV>=0),VV.lastTimescaleUnits+=JV,VV.lastSample.timescaleUnitsToNextSample=JV,!this.isFragmented){let eV=DV(VV.timeToSampleTable);if(MV(eV),1===eV.sampleCount){eV.sampleDelta=JV;const xV=VV.timeToSampleTable[VV.timeToSampleTable.length-2];xV&&xV.sampleDelta===JV&&(xV.sampleCount++,VV.timeToSampleTable.pop(),eV=xV)}else eV.sampleDelta!==JV&&(eV.sampleCount--,VV.timeToSampleTable.push(eV={sampleCount:1,sampleDelta:JV}));eV.sampleDelta===UV?eV.sampleCount++:VV.timeToSampleTable.push({sampleCount:1,sampleDelta:UV});const xV=DV(VV.compositionTimeOffsetTable);MV(xV),xV.sampleCompositionTimeOffset===YV?xV.sampleCount++:VV.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:YV})}}else VV.lastTimescaleUnits=aY(eV.decodeTimestamp,VV.timescale,!1),this.isFragmented||(VV.timeToSampleTable.push({sampleCount:1,sampleDelta:UV}),VV.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:YV}));VV.lastSample=eV}if(VV.timestampProcessingQueue.length=0,MV(VV.lastSample),MV(null!==VV.lastTimescaleUnits),void 0!==eV&&0===VV.lastSample.timescaleUnitsToNextSample){MV("key"===eV.type);const xV=aY(eV.timestamp,VV.timescale,!1),JV=Math.round(xV-VV.lastTimescaleUnits);VV.lastSample.timescaleUnitsToNextSample=JV}}async registerSample(VV,eV){"key"===eV.type&&this.processTimestamps(VV,eV),VV.timestampProcessingQueue.push(eV),this.isFragmented?(VV.sampleQueue.push(eV),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(VV,eV):await this.addSampleToTrack(VV,eV)}async addSampleToTrack(VV,eV){if(!this.isFragmented&&(VV.samples.push(eV),"reserve"===this.fastStart)){const eV=VV.track.metadata.maximumPacketCount;if(MV(void 0!==eV),VV.samples.length>eV)throw new Error(`Track #${VV.track.id} has already reached the maximum packet count (${eV}). Either add less packets or increase the maximum packet count.`)}let xV=!1;if(VV.currentChunk){VV.currentChunk.startTimestamp=Math.min(VV.currentChunk.startTimestamp,eV.timestamp);const JV=eV.timestamp-VV.currentChunk.startTimestamp;if(this.isFragmented){const YV=this.trackDatas.every((xV=>{if(VV===xV)return"key"===eV.type;const JV=xV.sampleQueue[0];return JV?"key"===JV.type:xV.closed}));JV>=this.minimumFragmentDuration&&YV&&eV.timestamp>this.maxWrittenTimestamp&&(xV=!0,await this.finalizeFragment())}else xV=JV>=.5}else xV=!0;xV&&(VV.currentChunk&&await this.finalizeCurrentChunk(VV),VV.currentChunk={startTimestamp:eV.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),MV(VV.currentChunk),VV.currentChunk.samples.push(eV),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,eV.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,eV.timestamp+eV.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,eV.timestamp))}async finalizeCurrentChunk(VV){if(MV(!this.isFragmented),MV(this.writer),!VV.currentChunk)return;VV.finalizedChunks.push(VV.currentChunk),this.finalizedChunks.push(VV.currentChunk);let eV=VV.currentChunk.samples.length;if("audio"===VV.type&&VV.info.requiresPcmTransformation&&(eV=VV.currentChunk.samples.reduce(((eV,xV)=>eV+aY(xV.duration,VV.timescale)),0)),0!==VV.compactlyCodedChunkTable.length&&DV(VV.compactlyCodedChunkTable).samplesPerChunk===eV||VV.compactlyCodedChunkTable.push({firstChunk:VV.finalizedChunks.length,samplesPerChunk:eV}),"in-memory"!==this.fastStart){VV.currentChunk.offset=this.writer.getPos();for(const eV of VV.currentChunk.samples)MV(eV.data),this.writer.write(eV.data),eV.data=null;await this.writer.flush()}else VV.currentChunk.offset=0}async interleaveSamples(){let VV=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(MV(this.isFragmented),VV||this.allTracksAreKnown())VV:for(;;){let eV=null,xV=1/0;for(const YV of this.trackDatas){if(!VV&&0===YV.sampleQueue.length&&!YV.closed)break VV;YV.sampleQueue.length>0&&YV.sampleQueue[0].timestamp<xV&&(eV=YV,xV=YV.sampleQueue[0].timestamp)}if(!eV)break;const JV=eV.sampleQueue.shift();await this.addSampleToTrack(eV,JV)}}async finalizeFragment(){let VV=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(MV(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const VV=this.initBoxWriter??this.boxWriter;MV(VV),this.formatOptions.onMoov&&VV.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const eV=pJ(this);if(VV.writeBox(eV),this.formatOptions.onMoov){const{data:eV,start:xV}=VV.writer.stopTrackingWrites();this.formatOptions.onMoov(eV,xV)}if(this.isCmaf){MV(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new ox(this.writer);const VV=this.boxWriter.measureBox(YJ()),eV=this.boxWriter.measureBox(UJ(this,0));this.segmentHeaderSize=VV+eV,this.writer.seek(this.segmentHeaderSize)}}MV(this.writer),MV(this.boxWriter);const eV=this.trackDatas.filter((VV=>VV.currentChunk));if(0===eV.length)return void(VV&&await this.writer.flush());const xV=this.nextFragmentNumber++,JV=dJ(xV,eV),YV=this.writer.getPos(),UV=YV+this.boxWriter.measureBox(JV);let yV=UV+8,pV=1/0;for(let vV=0;vV<eV.length;vV++){const VV=eV[vV];MV(VV.currentChunk),MV(null!==VV.startTimestampOffset),VV.currentChunk.offset=yV,VV.currentChunk.moofOffset=YV,VV.currentChunk.trafIndex=vV,VV.currentChunk.startTimestamp-=VV.startTimestampOffset;for(const eV of VV.currentChunk.samples)yV+=eV.size,eV.timestamp-=VV.startTimestampOffset,eV.decodeTimestamp-=VV.startTimestampOffset;pV=Math.min(pV,VV.currentChunk.startTimestamp)}const QV=yV-UV,nV=QV>=2**32;if(nV)for(const vV of eV)vV.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const wV=dJ(xV,eV);if(this.boxWriter.writeBox(wV),this.formatOptions.onMoof){const{data:VV,start:eV}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(VV,eV,pV)}MV(this.writer.getPos()===UV),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const ZV=yJ(nV);ZV.size=QV,this.boxWriter.writeBox(ZV),this.writer.seek(UV+(nV?16:8));for(const vV of eV)for(const VV of vV.currentChunk.samples)this.writer.write(VV.data),VV.data=null;if(this.formatOptions.onMdat){const{data:VV,start:eV}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(VV,eV)}for(const vV of eV)vV.finalizedChunks.push(vV.currentChunk),this.finalizedChunks.push(vV.currentChunk),vV.currentChunk=null;VV&&await this.writer.flush()}async registerSampleFastStartReserve(VV,eV){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(VV,eV)):VV.sampleQueue.push(eV)}async createFastStartReserveMdat(){MV(this.writer),MV(this.boxWriter),this.ensureOneEnabledTrack();const VV=pJ(this),eV=this.boxWriter.measureBox(VV)+this.computeSampleTableSizeUpperBound()+4096;MV(null!==this.ftypSize),this.writer.seek(this.ftypSize+eV),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=yJ(!0),this.boxWriter.writeBox(this.mdat);for(const xV of this.trackDatas){for(const VV of xV.sampleQueue)await this.addSampleToTrack(xV,VV);xV.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){MV("reserve"===this.fastStart);let VV=0;for(const eV of this.trackDatas){const xV=eV.track.metadata.maximumPacketCount;MV(void 0!==xV),VV+=8*Math.ceil(2/3*xV),VV+=4*xV,VV+=8*Math.ceil(2/3*xV),VV+=12*Math.ceil(2/3*xV),VV+=4*xV,VV+=8*xV}return VV}async onTrackClose(VV){const eV=await this.mutex.acquire(),xV=this.trackDatas.find((eV=>eV.track===VV));xV&&(xV.closed=!0,"subtitle"===xV.type&&"webvtt"===VV.source._codec&&await this.processWebVTTCues(xV,1/0),this.processTimestamps(xV)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),eV()}ensureOneEnabledTrack(){for(const VV of["video","audio","subtitle"]){const eV=this.trackDatas.filter((eV=>eV.type===VV));if(0===eV.length)continue;if(!eV.some((VV=>!1!==VV.track.metadata.disposition?.default))){const VV=eV[0];VV.track.metadata.disposition={...VV.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){MV(this.isFragmented);const VV=await this.mutex.acquire();try{for(const VV of this.trackDatas)"subtitle"===VV.type&&"webvtt"===VV.track.source._codec&&await this.processWebVTTCues(VV,1/0),this.processTimestamps(VV);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{VV()}}async finalize(){const VV=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const xV of this.trackDatas)xV.closed=!0,"subtitle"===xV.type&&"webvtt"===xV.track.source._codec&&await this.processWebVTTCues(xV,1/0),this.processTimestamps(xV);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const xV of this.trackDatas){await this.finalizeCurrentChunk(xV);const VV=oY(xV);if(VV>0){let eV=0;for(const VV of xV.samples)eV+=VV.size;xV.avgBitrate=Math.round(8*eV/VV)}else xV.avgBitrate=0;let eV=0,JV=0,YV=0;for(let UV=0;UV<xV.samples.length;UV++){const VV=xV.samples[UV];for(JV+=VV.size;VV.decodeTimestamp-xV.samples[eV].decodeTimestamp>=1;)JV-=xV.samples[eV].size,eV++;YV=Math.max(YV,JV)}if(xV.maxBitrate=8*YV,null!==xV.startTimestampOffset)for(let UV=0;UV<xV.samples.length;UV++){const VV=xV.samples[UV];VV.timestamp-=xV.startTimestampOffset,VV.decodeTimestamp-=xV.startTimestampOffset}}if(MV(this.writer),MV(this.boxWriter),"in-memory"===this.fastStart){let VV;this.mdat=yJ(!1);for(let xV=0;xV<2;xV++){const eV=pJ(this),xV=this.boxWriter.measureBox(eV);VV=this.boxWriter.measureBox(this.mdat);let JV=this.writer.getPos()+xV+VV;for(const YV of this.finalizedChunks){YV.offset=JV;for(const{data:eV}of YV.samples)MV(eV),JV+=eV.byteLength,VV+=eV.byteLength}if(JV<2**32)break;VV>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const eV=pJ(this);if(this.boxWriter.writeBox(eV),this.formatOptions.onMoov){const{data:VV,start:eV}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(VV,eV)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=VV,this.boxWriter.writeBox(this.mdat);for(const xV of this.finalizedChunks)for(const VV of xV.samples)MV(VV.data),this.writer.write(VV.data),VV.data=null;if(this.formatOptions.onMdat){const{data:VV,start:eV}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(VV,eV)}}else if(this.isFragmented)if(this.isCmaf){const VV=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(YJ()),this.boxWriter.writeBox(UJ(this,VV))}else{const VV=this.writer.getPos(),xV=(eV=this.trackDatas,xJ("mfra",void 0,[...eV.map(UY),yY()]));this.boxWriter.writeBox(xV);const JV=this.writer.getPos()-VV;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(JV)}else{MV(this.mdat);const VV=this.boxWriter.offsets.get(this.mdat);MV(void 0!==VV);const eV=this.writer.getPos()-VV;if(this.mdat.size=eV,this.mdat.largeSize=eV>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:VV,start:eV}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(VV,eV)}const xV=pJ(this);if("reserve"===this.fastStart){MV(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(xV);const VV=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:VV})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(xV);if(this.formatOptions.onMoov){const{data:VV,start:eV}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(VV,eV)}}var eV;VV()}}var hY;!function(VV){VV[VV.EBML=440786851]="EBML",VV[VV.EBMLVersion=17030]="EBMLVersion",VV[VV.EBMLReadVersion=17143]="EBMLReadVersion",VV[VV.EBMLMaxIDLength=17138]="EBMLMaxIDLength",VV[VV.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",VV[VV.DocType=17026]="DocType",VV[VV.DocTypeVersion=17031]="DocTypeVersion",VV[VV.DocTypeReadVersion=17029]="DocTypeReadVersion",VV[VV.Void=236]="Void",VV[VV.Segment=408125543]="Segment",VV[VV.SeekHead=290298740]="SeekHead",VV[VV.Seek=19899]="Seek",VV[VV.SeekID=21419]="SeekID",VV[VV.SeekPosition=21420]="SeekPosition",VV[VV.Duration=17545]="Duration",VV[VV.Info=357149030]="Info",VV[VV.TimestampScale=2807729]="TimestampScale",VV[VV.MuxingApp=19840]="MuxingApp",VV[VV.WritingApp=22337]="WritingApp",VV[VV.Tracks=374648427]="Tracks",VV[VV.TrackEntry=174]="TrackEntry",VV[VV.TrackNumber=215]="TrackNumber",VV[VV.TrackUID=29637]="TrackUID",VV[VV.TrackType=131]="TrackType",VV[VV.FlagEnabled=185]="FlagEnabled",VV[VV.FlagDefault=136]="FlagDefault",VV[VV.FlagForced=21930]="FlagForced",VV[VV.FlagOriginal=21934]="FlagOriginal",VV[VV.FlagHearingImpaired=21931]="FlagHearingImpaired",VV[VV.FlagVisualImpaired=21932]="FlagVisualImpaired",VV[VV.FlagCommentary=21935]="FlagCommentary",VV[VV.FlagLacing=156]="FlagLacing",VV[VV.Name=21358]="Name",VV[VV.Language=2274716]="Language",VV[VV.LanguageBCP47=2274717]="LanguageBCP47",VV[VV.CodecID=134]="CodecID",VV[VV.CodecPrivate=25506]="CodecPrivate",VV[VV.CodecDelay=22186]="CodecDelay",VV[VV.SeekPreRoll=22203]="SeekPreRoll",VV[VV.DefaultDuration=2352003]="DefaultDuration",VV[VV.Video=224]="Video",VV[VV.PixelWidth=176]="PixelWidth",VV[VV.PixelHeight=186]="PixelHeight",VV[VV.DisplayWidth=21680]="DisplayWidth",VV[VV.DisplayHeight=21690]="DisplayHeight",VV[VV.DisplayUnit=21682]="DisplayUnit",VV[VV.AlphaMode=21440]="AlphaMode",VV[VV.Audio=225]="Audio",VV[VV.SamplingFrequency=181]="SamplingFrequency",VV[VV.Channels=159]="Channels",VV[VV.BitDepth=25188]="BitDepth",VV[VV.SimpleBlock=163]="SimpleBlock",VV[VV.BlockGroup=160]="BlockGroup",VV[VV.Block=161]="Block",VV[VV.BlockAdditions=30113]="BlockAdditions",VV[VV.BlockMore=166]="BlockMore",VV[VV.BlockAdditional=165]="BlockAdditional",VV[VV.BlockAddID=238]="BlockAddID",VV[VV.BlockDuration=155]="BlockDuration",VV[VV.ReferenceBlock=251]="ReferenceBlock",VV[VV.Cluster=524531317]="Cluster",VV[VV.Timestamp=231]="Timestamp",VV[VV.Cues=475249515]="Cues",VV[VV.CuePoint=187]="CuePoint",VV[VV.CueTime=179]="CueTime",VV[VV.CueTrackPositions=183]="CueTrackPositions",VV[VV.CueTrack=247]="CueTrack",VV[VV.CueClusterPosition=241]="CueClusterPosition",VV[VV.Colour=21936]="Colour",VV[VV.MatrixCoefficients=21937]="MatrixCoefficients",VV[VV.TransferCharacteristics=21946]="TransferCharacteristics",VV[VV.Primaries=21947]="Primaries",VV[VV.Range=21945]="Range",VV[VV.Projection=30320]="Projection",VV[VV.ProjectionType=30321]="ProjectionType",VV[VV.ProjectionPoseYaw=30323]="ProjectionPoseYaw",VV[VV.ProjectionPosePitch=30324]="ProjectionPosePitch",VV[VV.ProjectionPoseRoll=30325]="ProjectionPoseRoll",VV[VV.Attachments=423732329]="Attachments",VV[VV.AttachedFile=24999]="AttachedFile",VV[VV.FileDescription=18046]="FileDescription",VV[VV.FileName=18030]="FileName",VV[VV.FileMediaType=18016]="FileMediaType",VV[VV.FileData=18012]="FileData",VV[VV.FileUID=18094]="FileUID",VV[VV.Chapters=272869232]="Chapters",VV[VV.Tags=307544935]="Tags",VV[VV.Tag=29555]="Tag",VV[VV.Targets=25536]="Targets",VV[VV.TargetTypeValue=26826]="TargetTypeValue",VV[VV.TargetType=25546]="TargetType",VV[VV.TagTrackUID=25541]="TagTrackUID",VV[VV.TagEditionUID=25545]="TagEditionUID",VV[VV.TagChapterUID=25540]="TagChapterUID",VV[VV.TagAttachmentUID=25542]="TagAttachmentUID",VV[VV.SimpleTag=26568]="SimpleTag",VV[VV.TagName=17827]="TagName",VV[VV.TagLanguage=17530]="TagLanguage",VV[VV.TagString=17543]="TagString",VV[VV.TagBinary=17541]="TagBinary",VV[VV.ContentEncodings=28032]="ContentEncodings",VV[VV.ContentEncoding=25152]="ContentEncoding",VV[VV.ContentEncodingOrder=20529]="ContentEncodingOrder",VV[VV.ContentEncodingScope=20530]="ContentEncodingScope",VV[VV.ContentCompression=20532]="ContentCompression",VV[VV.ContentCompAlgo=16980]="ContentCompAlgo",VV[VV.ContentCompSettings=16981]="ContentCompSettings",VV[VV.ContentEncryption=20533]="ContentEncryption"}(hY||(hY={}));hY.EBML,hY.Segment,hY.SeekHead,hY.Info,hY.Cluster,hY.Tracks,hY.Cues,hY.Attachments,hY.Chapters,hY.Tags;const lY=new Uint32Array(256);for(let MU=0;MU<256;MU++){let VV=MU<<24;for(let eV=0;eV<8;eV++)VV=2147483648&VV?VV<<1^79764919:VV<<1;lY[MU]=VV>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const LY=new Uint32Array(256);for(let MU=0;MU<256;MU++){let VV=MU<<24;for(let eV=0;eV<8;eV++)VV=2147483648&VV?VV<<1^79764919:VV<<1;LY[MU]=VV>>>0&4294967295}const fY=VV=>{let eV=4294967295;for(let xV=0;xV<VV.length;xV++){const JV=VV[xV];eV=(eV<<8^LY[eV>>>24^JV])>>>0}return eV},mY=new Uint8Array(16);{const VV=cV(mY);mY[0]=0,VV.setUint16(1,45069,!1),VV.setUint16(3,1,!1),mY[5]=193,mY[6]=0,mY[7]=0,VV.setUint16(8,1,!1),VV.setUint16(10,61440,!1),VV.setUint32(12,fY(mY.subarray(0,12)),!1)}const KY=new Uint8Array(0);class HY{constructor(VV,eV,xV,JV){let YV=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,UV=arguments.length>5?arguments[5]:void 0,yV=arguments.length>6?arguments[6]:void 0;if(this.data=VV,this.type=eV,this.timestamp=xV,this.duration=JV,this.sequenceNumber=YV,VV===KY&&void 0===UV)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===UV&&(UV=VV.byteLength),!(VV instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==eV&&"delta"!==eV)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(xV))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(JV)||JV<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(YV))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(UV)||UV<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==yV&&("object"!==typeof yV||!yV))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==yV?.alpha&&!(yV.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==yV?.alphaByteLength&&(!Number.isInteger(yV.alphaByteLength)||yV.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=UV,this.sideData=yV??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===KY}get microsecondTimestamp(){return Math.trunc(ee*this.timestamp)}get microsecondDuration(){return Math.trunc(ee*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let VV=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:VV,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(VV,eV){if(!(VV instanceof EncodedVideoChunk||VV instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const xV=new Uint8Array(VV.byteLength);return VV.copyTo(xV),new HY(xV,VV.type,VV.timestamp/1e6,(VV.duration??0)/1e6,void 0,void 0,eV)}clone(VV){if(void 0!==VV&&("object"!==typeof VV||null===VV))throw new TypeError("options, when provided, must be an object.");if(void 0!==VV?.data&&!(VV.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==VV?.type&&"key"!==VV.type&&"delta"!==VV.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==VV?.timestamp&&!Number.isFinite(VV.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==VV?.duration&&!Number.isFinite(VV.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==VV?.sequenceNumber&&!Number.isFinite(VV.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==VV?.sideData&&("object"!==typeof VV.sideData||null===VV.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new HY(VV?.data??this.data,VV?.type??this.type,VV?.timestamp??this.timestamp,VV?.duration??this.duration,VV?.sequenceNumber??this.sequenceNumber,this.byteLength,VV?.sideData??this.sideData)}}var uY;!function(VV){VV[VV.PCM=1]="PCM",VV[VV.IEEE_FLOAT=3]="IEEE_FLOAT",VV[VV.ALAW=6]="ALAW",VV[VV.MULAW=7]="MULAW",VV[VV.EXTENSIBLE=65534]="EXTENSIBLE"}(uY||(uY={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let sY=-1/0,SY=-1/0,IY=null;"undefined"!==typeof FinalizationRegistry&&(IY=new FinalizationRegistry((VV=>{const eV=performance.now();"video"===VV.type?(eV-sY>=1e3&&(te._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),sY=eV),"undefined"!==typeof VideoFrame&&VV.data instanceof VideoFrame&&VV.data.close()):(eV-SY>=1e3&&(te._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),SY=eV),"undefined"!==typeof AudioData&&VV.data instanceof AudioData&&VV.data.close())})));const dY=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(dY);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class OY{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(VV){}close(){if(this._closingPromise)return;const VV=this._connectedTrack;if(!VV)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===VV.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==VV.output.state&&"finalized"!==VV.output.state&&VV.output._muxer.onTrackClose(VV)})()}async _flushOrWaitForOngoingClose(VV){return this._closingPromise??=(async()=>{await this._flushAndClose(VV),this._closed=!0})()}}class VU extends OY{constructor(VV){if(super(),!px.includes(VV))throw new TypeError(`Invalid video codec \'${VV}\'. Must be one of: ${px.join(", ")}.`);this._codec=VV}}const eU=(VV,eV)=>{if(VV.metadata.hasOnlyKeyPackets&&"key"!==eV.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class xU extends VU{constructor(VV){super(VV)}add(VV,eV){if(!(VV instanceof HY))throw new TypeError("packet must be an EncodedPacket.");if(VV.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==eV&&(!eV||"object"!==typeof eV))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),eU(this._connectedTrack,VV),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,VV,eV)}}class JU extends OY{constructor(VV){if(super(),!wx.includes(VV))throw new TypeError(`Invalid audio codec \'${VV}\'. Must be one of: ${wx.join(", ")}.`);this._codec=VV}}class YU extends OY{constructor(VV){if(super(),!Zx.includes(VV))throw new TypeError(`Invalid subtitle codec \'${VV}\'. Must be one of: ${Zx.join(", ")}.`);this._codec=VV}}class UU{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((VV=>px.includes(VV)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((VV=>wx.includes(VV)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((VV=>Zx.includes(VV)))}_codecUnsupportedHint(VV){return""}_isFragmentedIsobmff(){return!1}}class yU extends UU{constructor(){let VV=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!VV||"object"!==typeof VV)throw new TypeError("options must be an object.");if(void 0!==VV.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(VV.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==VV.minimumFragmentDuration&&(!Ue(VV.minimumFragmentDuration)||VV.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==VV.onFtyp&&"function"!==typeof VV.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==VV.onMoov&&"function"!==typeof VV.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==VV.onMdat&&"function"!==typeof VV.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==VV.onMoof&&"function"!==typeof VV.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==VV.metadataFormat&&!["mdir","mdta","udta","auto"].includes(VV.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=VV}getSupportedTrackCounts(){const VV=2**32-1;return{video:{min:0,max:VV},audio:{min:0,max:VV},subtitle:{min:0,max:VV},total:{min:0,max:VV}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(VV){return new cY(VV,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class pU extends yU{constructor(VV){super(VV)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...px,...nx,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Zx]}_codecUnsupportedHint(VV){return(new nU).getSupportedCodecs().includes(VV)?" Switching to MOV will grant support for this codec.":""}}class QU extends yU{constructor(VV){super(VV)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...px,...nx,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Zx]}}class nU extends yU{constructor(VV){super(VV)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...px,...wx]}_codecUnsupportedHint(VV){return(new pU).getSupportedCodecs().includes(VV)?" Switching to MP4 will grant support for this codec.":""}}const wU=["video","audio","subtitle"];class ZU{constructor(VV,eV,xV,JV,YV){this.id=VV,this.output=eV,this.type=xV,this.source=JV,this.metadata=YV}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(VV){if(!(VV instanceof ZU))throw new TypeError("other must be an OutputTrack.");if(this===VV)return!1;const eV=pe(this.metadata.group),xV=pe(VV.metadata.group);for(const JV of eV){if(this.type!==VV.type&&xV.some((VV=>JV===VV)))return!0;if(xV.some((VV=>JV._pairedGroups.has(VV))))return!0}return!1}}class vU extends ZU{constructor(VV,eV,xV,JV){super(VV,eV,"video",xV,JV)}}class rU extends ZU{constructor(VV,eV,xV,JV){super(VV,eV,"audio",xV,JV)}}class kU extends ZU{constructor(VV,eV,xV,JV){super(VV,eV,"subtitle",xV,JV)}}class bU{constructor(){this._pairedGroups=new Set}pairWith(VV){if(!(VV instanceof bU))throw new TypeError("other must be an OutputTrackGroup.");if(this===VV)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(VV),VV._pairedGroups.add(this)}}const EU=VV=>{if(!VV||"object"!==typeof VV)throw new TypeError("metadata must be an object.");if(void 0!==VV.languageCode&&(eV=VV.languageCode,!Ve.test(eV)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var eV;if(void 0!==VV.name&&"string"!==typeof VV.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==VV.disposition&&(VV=>{if(!VV||"object"!==typeof VV)throw new TypeError("disposition must be an object.");if(void 0!==VV.default&&"boolean"!==typeof VV.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==VV.primary&&"boolean"!==typeof VV.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==VV.forced&&"boolean"!==typeof VV.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==VV.original&&"boolean"!==typeof VV.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==VV.commentary&&"boolean"!==typeof VV.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==VV.hearingImpaired&&"boolean"!==typeof VV.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==VV.visuallyImpaired&&"boolean"!==typeof VV.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(VV.disposition),void 0!==VV.maximumPacketCount&&(!Number.isInteger(VV.maximumPacketCount)||VV.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==VV.bitrate&&(!Number.isFinite(VV.bitrate)||VV.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==VV.averageBitrate&&(!Number.isFinite(VV.averageBitrate)||VV.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==VV.group&&!(VV.group instanceof bU)&&(!Array.isArray(VV.group)||VV.group.some((VV=>!(VV instanceof bU)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class BU extends Qe{get target(){const VV="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(VV);const eV=this._getRootTarget();if(Je(eV))throw new TypeError(VV);return eV}constructor(VV){if(super(),this.state="pending",this.defaultTrackGroup=new bU,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new uV,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!VV||"object"!==typeof VV)throw new TypeError("options must be an object.");if(!(VV.format instanceof UU))throw new TypeError("options.format must be an OutputFormat.");if(!(VV.target instanceof XY||VV.target instanceof gY))throw new TypeError("options.target must be a Target or a PathedTarget.");if(VV.target instanceof XY&&this._rememberTarget(VV.target),void 0!==VV.initTarget&&!(VV.initTarget instanceof XY)&&"function"!==typeof VV.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==VV.onFinalize&&"function"!==typeof VV.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=VV.format,this.CZ=VV.target,this._onFinalize=VV.onFinalize??null,this._initTarget=VV.initTarget??null,this._initTarget instanceof XY&&this._rememberTarget(this._initTarget),this._muxer=VV.format._createMuxer(this)}_getTargetValidated(VV){MV(this.CZ instanceof gY);const eV=this.CZ.getTarget(VV),xV=VV=>{if(!(VV instanceof XY))throw new TypeError("getTarget must return a Target.");return VV};return Je(eV)?eV.then(xV):xV(eV)}async _getTarget(VV){MV(this.CZ instanceof gY);const eV=await this._getTargetValidated(VV);return this._emit("target",{target:eV,request:VV,isRoot:VV.isRoot}),"canceled"===this.state?await eV._close():this._rememberTarget(eV),eV}_rememberTarget(VV){this._unfinalizedTargets.add(VV),VV.on("finalized",(()=>this._unfinalizedTargets.delete(VV)),{once:!0})}async _getInitTarget(){if(MV(null!==this._initTarget),this._initTarget instanceof XY)return this._initTarget;const VV=await this._initTarget();return"canceled"===this.state?await VV._close():this._rememberTarget(VV),VV}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.CZ instanceof XY)return this._emit("target",{target:this.CZ,request:null,isRoot:!0}),this._rootTarget=this.CZ,this.CZ;const VV={path:this.CZ.rootPath,isRoot:!0,mimeType:this.format.mimeType},eV=this._getTargetValidated(VV),xV=eV=>("canceled"===this.state?eV._close():this._rememberTarget(eV),this._emit("target",{target:eV,request:VV,isRoot:!0}),this._rootTarget=eV,eV);return Je(eV)?this._rootTargetPromise=eV.then(xV):xV(eV)}_getRootWriter(VV){return this._rootWriterPromise??=(async()=>{const eV=await this._getRootTarget(),xV=new NY(eV,"boolean"===typeof VV?VV:VV(eV));return xV.start(),xV})()}addVideoTrack(VV){let eV=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(VV instanceof VU))throw new TypeError("source must be a VideoSource.");if(EU(eV),void 0!==eV.rotation&&![0,90,180,270].includes(eV.rotation))throw new TypeError(`Invalid video rotation: ${eV.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==eV.flip&&"boolean"!==typeof eV.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==eV.transformationMatrix&&(!Array.isArray(eV.transformationMatrix)||9!==eV.transformationMatrix.length||!eV.transformationMatrix.every((VV=>Number.isFinite(VV)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==eV.frameRate&&(!Number.isFinite(eV.frameRate)||eV.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${eV.frameRate}. Must be a positive number.`);if(void 0!==eV.hasOnlyKeyPackets&&"boolean"!==typeof eV.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==eV.canBeTransparent&&"boolean"!==typeof eV.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==eV.decoderConfig&&Ax({decoderConfig:eV.decoderConfig},VV._codec),void 0!==eV.primingPacket){if(!(eV.primingPacket instanceof HY))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===eV.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const xV={...eV};return xV.group??=this.defaultTrackGroup,this._addTrack(new vU(this.tracks.length+1,this,VV,xV))}addAudioTrack(VV){let eV=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(VV instanceof JU))throw new TypeError("source must be an AudioSource.");if(EU(eV),void 0!==eV.decoderConfig&&Xx({decoderConfig:eV.decoderConfig},VV._codec),void 0!==eV.primingPacket){if(!(eV.primingPacket instanceof HY))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===eV.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const xV={...eV};return xV.group??=this.defaultTrackGroup,this._addTrack(new rU(this.tracks.length+1,this,VV,xV))}addSubtitleTrack(VV){let eV=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(VV instanceof YU))throw new TypeError("source must be a SubtitleSource.");EU(eV);const xV={...eV};return xV.group??=this.defaultTrackGroup,this._addTrack(new kU(this.tracks.length+1,this,VV,xV))}setMetadataTags(VV){if((VV=>{if(!VV||"object"!==typeof VV)throw new TypeError("tags must be an object.");if(void 0!==VV.title&&"string"!==typeof VV.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==VV.description&&"string"!==typeof VV.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==VV.artist&&"string"!==typeof VV.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==VV.album&&"string"!==typeof VV.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==VV.albumArtist&&"string"!==typeof VV.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==VV.trackNumber&&(!Number.isInteger(VV.trackNumber)||VV.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==VV.tracksTotal&&(!Number.isInteger(VV.tracksTotal)||VV.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==VV.discNumber&&(!Number.isInteger(VV.discNumber)||VV.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==VV.discsTotal&&(!Number.isInteger(VV.discsTotal)||VV.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==VV.genre&&"string"!==typeof VV.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==VV.date&&(!(VV.date instanceof Date)||Number.isNaN(VV.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==VV.beatsPerMinute&&(!Number.isInteger(VV.beatsPerMinute)||VV.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==VV.lyrics&&"string"!==typeof VV.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==VV.images){if(!Array.isArray(VV.images))throw new TypeError("tags.images, when provided, must be an array.");for(const eV of VV.images){if(!eV||"object"!==typeof eV)throw new TypeError("Each image in tags.images must be an object.");if(!(eV.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof eV.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(eV.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==VV.comment&&"string"!==typeof VV.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==VV.raw){if(!VV.raw||"object"!==typeof VV.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const eV of Object.values(VV.raw))if(null!==eV&&"string"!==typeof eV&&(!Array.isArray(eV)||!eV.every((VV=>"string"===typeof VV)))&&!(eV instanceof Uint8Array)&&!(eV instanceof we)&&!(eV instanceof Ze)&&!ne(eV))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(VV),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=VV}_addTrack(VV){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(VV.source._connectedTrack)throw new Error("Source is already used for a track.");const eV=this.format.getSupportedTrackCounts(),xV=this.tracks.reduce(((eV,xV)=>eV+(xV.type===VV.type?1:0)),0),JV=eV[VV.type].max;if(xV===JV)throw new Error(0===JV?`${this.format._name} does not support ${VV.type} tracks.`:`${this.format._name} does not support more than ${JV} ${VV.type} track`+(1===JV?"":"s")+".");const YV=eV.total.max;if(this.tracks.length===YV)throw new Error(`${this.format._name} does not support more than ${YV} tracks`+(1===YV?"":"s")+" in total.");if(VV.isVideoTrack()){const eV=this.format.getSupportedVideoCodecs();if(0===eV.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(VV.source._codec));if(!eV.includes(VV.source._codec))throw new Error(`Codec \'${VV.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${eV.map((VV=>`\'${VV}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(VV.source._codec))}else if(VV.isAudioTrack()){const eV=this.format.getSupportedAudioCodecs();if(0===eV.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(VV.source._codec));if(!eV.includes(VV.source._codec))throw new Error(`Codec \'${VV.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${eV.map((VV=>`\'${VV}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(VV.source._codec))}else if(VV.isSubtitleTrack()){const eV=this.format.getSupportedSubtitleCodecs();if(0===eV.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(VV.source._codec));if(!eV.includes(VV.source._codec))throw new Error(`Codec \'${VV.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${eV.map((VV=>`\'${VV}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(VV.source._codec))}return this.tracks.push(VV),VV.source._connectedTrack=VV,VV}hasEnoughTracks(){const VV=this.format.getSupportedTrackCounts();for(const xV of wU){if(this.tracks.reduce(((VV,eV)=>VV+(eV.type===xV?1:0)),0)<VV[xV].min)return!1}const eV=VV.total.min;return!(this.tracks.length<eV)}async start(){const VV=this.format.getSupportedTrackCounts();for(const xV of wU){const eV=this.tracks.reduce(((VV,eV)=>VV+(eV.type===xV?1:0)),0),JV=VV[xV].min;if(eV<JV)throw new Error(JV===VV[xV].max?`${this.format._name} requires exactly ${JV} ${xV} track${1===JV?"":"s"}.`:`${this.format._name} requires at least ${JV} ${xV} track${1===JV?"":"s"}.`)}const eV=VV.total.min;if(this.tracks.length<eV)throw new Error(eV===VV.total.max?`${this.format._name} requires exactly ${eV} track`+(1===eV?"":"s")+".":`${this.format._name} requires at least ${eV} track`+(1===eV?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(te._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const VV=this._mutex.acquire();try{await this._muxer.start();const VV=this.tracks.map((VV=>VV.source._start()));await Promise.all(VV)}finally{(await VV)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const VV=await this._mutex.acquire();try{const VV=this.tracks.map((VV=>VV.source._flushOrWaitForOngoingClose(!0)));await Promise.all(VV),await Promise.all([...this._unfinalizedTargets].map((VV=>VV._close()))),this._unfinalizedTargets.clear()}finally{VV()}})():void("finalized"===this.state&&te._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(te._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const VV=await this._mutex.acquire();try{const VV=this.tracks.map((VV=>VV.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(VV),await this._muxer.finalize(),this._rootWriterPromise){const VV=await this._rootWriterPromise;VV.finalized||(await VV.flush(),await VV.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(eV){throw this.state="canceled",eV}finally{await Promise.all([...this._unfinalizedTargets].map((VV=>VV._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),VV()}})()}}class jU{constructor(VV,eV,xV,JV,YV){this.frameDurationS=xV,this.onFragment=YV,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=eV,this.lastTimestampUs=eV;const UV=VV=>{this.boxes.push(VV)};this.output=new BU({format:new pU({fastStart:"fragmented",minimumFragmentDuration:JV,onFtyp:UV,onMoov:UV,onMoof:UV,onMdat:VV=>{UV(VV),this.fragmentDone()}}),target:new WY}),this.source=new xU(VV),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(VV,eV){const xV=new Uint8Array(VV.byteLength);VV.copyTo(xV),this.addData(xV,VV.type,VV.timestamp,eV)}addData(VV,eV,xV,JV){const YV=new HY(VV,eV,(xV-this.firstTimestampUs)/1e6,this.frameDurationS),UV=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,xV),this.pending=this.pending.then((()=>(this.addingTimestampUs=xV,this.source.add(YV,UV?{decoderConfig:JV}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var VV;const eV=qU(this.boxes);this.boxes=[],this.onFragment({bytes:eV,endUs:null!==(VV=this.addingTimestampUs)&&void 0!==VV?VV:this.lastTimestampUs+1e6*this.frameDurationS})}}function qU(VV){const eV=new Uint8Array(VV.reduce(((VV,eV)=>VV+eV.byteLength),0));let xV=0;for(const JV of VV)eV.set(JV,xV),xV+=JV.byteLength;return eV}class tU{constructor(VV,eV,xV,JV){this.plan=VV,this.emit=xV,this.onSlotsLow=JV,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=eV}get partCount(){return this.nextIndex}addFragment(VV){let{bytes:eV,endUs:xV}=VV;this.pendingBytes>0&&this.pendingBytes+eV.byteLength>this.plan.maxBytes&&this.emitPending();let JV=0;for(;eV.byteLength-JV>this.plan.maxBytes-this.pendingBytes;){const VV=this.plan.maxBytes-this.pendingBytes;this.hold(eV.subarray(JV,JV+VV)),JV+=VV,this.emitPending()}this.hold(eV.subarray(JV)),this.completeUntilUs=xV,xV-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(VV){this.pending.push(VV),this.pendingBytes+=VV.byteLength}emitPending(){var VV;const eV=qU(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(VV=this.completeUntilUs)&&void 0!==VV?VV:this.partStartUs,this.emit({index:this.nextIndex++,bytes:eV,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class FU{constructor(VV,eV,xV,JV){let YV=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,UV=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=VV,this.partPlan=eV,this.post=xV,this.onSegmentEncoded=JV,this.journal=YV,this.onMuxFailed=UV,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(VV){const eV=XV()-VV;(eV<this.epochOffsetMs||eV-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=eV)}recordingMs(VV){return VV/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(VV){const eV=null===this.segment?0:(VV-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||eV>=this.segmentDurationMs))&&(this.pendingCutUs=VV);const xV=this.keyFrameMissed||this.pendingCutUs===VV;return this.cutRequested=!1,this.keyFrameMissed=!1,xV}onChunk(VV,eV,xV){if(null!==eV&&void 0!==eV&&eV.decoderConfig&&(this.decoderConfig=eV.decoderConfig),null!==this.pendingCutUs&&VV.timestamp>=this.pendingCutUs){if("key"!==VV.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(VV.timestamp,xV),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const JV=this.segment;if(null===JV.journalHeader)return JV.mp4.add(VV,this.decoderConfig),VV.byteLength;const YV=new Uint8Array(VV.byteLength);return VV.copyTo(YV),JV.mp4.addData(YV,VV.type,VV.timestamp,this.decoderConfig),JV.chunkTimestampsUs.push(VV.timestamp),JV.unjournaled.push({recordingId:JV.journalHeader.recordingId,segmentId:JV.journalId,index:JV.chunkCount++,timestampUs:VV.timestamp,key:"key"===VV.type,data:YV}),performance.now()-JV.lastJournalMs>=250&&this.journalChunks(JV),VV.byteLength}openSegment(VV,eV){const xV=this.nextJournalId++,JV=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:xV,containerCodec:eV.containerCodec,codec:eV.codec,width:eV.width,height:eV.height,fps:eV.fps,decoderConfig:this.decoderConfig,firstTimestampUs:VV,epochOffsetMs:this.epochOffsetMs}:null,YV=[],UV=new tU(this.partPlan,VV,(UV=>{this.postPart(xV,eV,VV,UV,null===JV?null:YV)}),(()=>{var VV;(null===(VV=this.segment)||void 0===VV?void 0:VV.journalId)===xV&&this.requestCut()})),yV=this.partPlan.keyframeIntervalMs/1e3*.9,pV=new jU(eV.containerCodec,VV,1/eV.fps,yV,(VV=>{UV.addFragment(VV)}));return this.post({type:"videoSegmentOpened",journalId:xV}),{mp4:pV,parts:UV,format:eV,journalId:xV,journalHeader:JV,unjournaled:[],chunkTimestampsUs:YV,chunkCount:0,lastJournalMs:performance.now()}}postPart(VV,eV,xV,JV,YV){const{width:UV,height:yV,codec:pV,fps:QV}=eV,{startMs:nV}=function(VV,eV,xV,JV){const YV=VV/1e3+xV;return{startMs:YV,endMs:YV+eV/1e3+1e3/JV}}(xV,0,this.epochOffsetMs,QV),{completeUntilUs:wV}=JV,ZV=null===wV?nV:this.recordingMs(wV),vV=JV.bytes.buffer,rV=null===YV||null===wV?null:function(VV,eV){let xV=0,JV=VV.length;for(;xV<JV;){const YV=xV+JV>>1;VV[YV]<eV?xV=YV+1:JV=YV}return xV}(YV,wV);this.post({type:"videoPart",journalId:VV,index:JV.index,bytes:vV,meta:{startMs:nV,endMs:ZV,width:UV,height:yV,codec:pV},completeUntilUs:wV,completeUntilIndex:rV},[vV])}journalChunks(VV){const eV=VV.journalHeader;null!==this.journal&&null!==eV&&0!==VV.unjournaled.length&&(eV.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...eV},VV.unjournaled),VV.unjournaled=[],VV.lastJournalMs=performance.now())}closeSegment(VV){const eV=this.segment;this.segment=null,this.pendingCutUs=null,null!==eV&&(VV&&this.onSegmentEncoded(),this.journalChunks(eV),this.finishing=this.finishing.then((async()=>{let VV=null;try{await eV.mp4.finish()}catch(xV){VV=xV}eV.parts.finish(),this.post({type:"videoSegmentClosed",journalId:eV.journalId,parts:eV.parts.partCount}),null!==VV&&(console.error("Failed to finish a session replay video segment.",VV),this.onMuxFailed(VV instanceof Error?VV.message:String(VV)))})).catch((VV=>{console.error("Failed to close a session replay video segment.",VV)})))}whenFinished(){return this.finishing}}function TU(VV,eV){return VV.width===eV.width&&VV.height===eV.height}function PU(VV,eV){return null!==VV&&eV>=VV}class AU{constructor(VV,eV,xV,JV,YV){let UV=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=VV,this.cssSize=xV,this.post=JV,this.preferSoftwareEncoder=YV,this.quality=new ZV,this.limiter=void 0,this.segmenter=void 0,this.scaler=new qV,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new bV(VV.maxFps),this.captureFps=VV.maxFps,this.segmenter=new FU(VV.segmentDurationMs,eV,JV,(()=>{this.encoderFailures=0}),UV,(VV=>{this.failMuxer(VV)})),this.still=new PV(JV),this.stats=this.emptyStats()}handleFrame(VV,eV){const xV=performance.now();try{this.stats.deliveredFrames++;const JV=VV.timestamp/1e3;if(this.segmenter.noteFrameArrival(JV),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(JV))return void this.stats.droppedForFpsCap++;if(this.still.offer(VV,this.segmenter.recordingMs(VV.timestamp)),this.noteBackingSize({width:VV.displayWidth,height:VV.displayHeight}),this.noteCaptureFps(eV,xV),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(PU(this.rebuildDueMs,xV)||PU(this.fpsRebuildDueMs,xV))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,VV)}finally{VV.close();const eV=performance.now()-xV;this.stats.workerBusyMs+=eV,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,eV),this.maybePostStats(xV)}}resize(VV){0!==VV.width&&0!==VV.height&&(this.cssSize=VV,this.scheduleRebuildIfSizeChanged())}updateHealth(VV,eV){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const xV=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:VV,pingMs:eV});this.backpressureDropsSinceHealth=0,xV&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(VV){return this.hidden=VV,VV?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(VV){this.suspended=!0;const eV=this.operations.then(VV).catch((VV=>{console.error("Session replay encoder operation failed.",VV)})).finally((()=>{this.operations===eV&&(this.suspended=!1)}));return this.operations=eV,eV}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var VV;null===(VV=this.active)||void 0===VV||VV.encoder.close(),this.active=null}async drainAndCloseSegment(){const VV=this.active;null===VV||await async function(VV,eV){let xV;const JV=new Promise((VV=>{xV=setTimeout((()=>{VV(!1)}),eV)}));try{return await Promise.race([VV.then((()=>!0)),JV])}finally{clearTimeout(xV)}}(VV.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(VV,"flush timed out")}encode(VV,eV){const xV=this.segmenter.needsKeyFrame(eV.timestamp)||eV.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;xV&&(this.lastKeyframeUs=eV.timestamp);const JV=this.scaleToEncoder(VV,eV);VV.encoder.encode(JV,{keyFrame:xV}),JV!==eV&&JV.close(),this.stats.encodedFrames++}scaleToEncoder(VV,eV){let xV=eV;if(!this.scalerFailed)try{xV=this.scaler.scale(eV,VV.size)}catch(JV){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",JV)}return xV.displayWidth===VV.size.width&&xV.displayHeight===VV.size.height||(VV.sentMismatchedFrame=!0),xV}onEncoderOutput(VV,eV,xV){const JV=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(VV,eV,{containerCodec:xV.candidate.containerCodec,codec:xV.candidate.config.codec,width:xV.size.width,height:xV.size.height,fps:xV.fps}),this.stats.workerBusyMs+=performance.now()-JV}noteBackingSize(VV){null!==this.backingSize&&TU(this.backingSize,VV)||(this.backingSize=VV,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(VV,eV){this.captureFps=VV,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=eV+2e3:this.fpsRebuildDueMs=null}targetSize(){var VV;const eV=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(VV,eV,xV){const JV=eV.width*eV.height<VV.width*VV.height?eV:VV;let YV=vV(Math.max(JV.width,64)),UV=vV(Math.max(JV.height,64));if(rV({width:YV,height:UV})>xV){const VV=YV,eV=UV;for(YV=vV(YV*Math.sqrt(16*xV*16/(YV*UV))),UV=vV(YV*eV/VV);rV({width:YV,height:UV})>xV;)YV-=2,UV=vV(YV*eV/VV)}return{width:YV,height:UV}}(this.cssSize,null!==(VV=this.backingSize)&&void 0!==VV?VV:this.cssSize,eV)}scheduleRebuildIfSizeChanged(){null===this.active||TU(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const VV=this.quality.getLevel(),eV=this.encodeFps(),xV=this.targetSize(),JV=function(VV){const eV={width:VV.width,height:VV.height,bitrate:VV.bitrate,framerate:VV.maxFps},xV=[],JV=[VV.preferSoftware?"prefer-software":"prefer-hardware","no-preference"];for(const YV of JV)for(const VV of EV)for(const JV of BV)for(const UV of jV)xV.push({config:{...eV,codec:VV,hardwareAcceleration:YV,bitrateMode:JV,latencyMode:UV,avc:{format:"avc"}},containerCodec:"avc"});return xV.push({config:{...eV,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),xV}({...xV,bitrate:Math.round(kV(this.config,xV,VV.areaScale)*eV/this.config.maxFps),maxFps:eV,preferSoftware:this.preferSoftwareEncoder});let YV=null,UV=0;for(let nV=this.firstViableCandidate;nV<JV.length&&null===YV;nV++){const VV=await VideoEncoder.isConfigSupported(JV[nV].config).catch((VV=>(console.warn("VideoEncoder.isConfigSupported threw.",JV[nV].config,VV),null)));null!==VV&&void 0!==VV&&VV.supported&&(YV=JV[nV],UV=nV,this.firstViableCandidate=nV)}if(null===YV)return void this.markUnavailable(`No supported encoder config at ${xV.width}x${xV.height}`);const yV=new VideoEncoder({output:(VV,eV)=>{this.onEncoderOutput(VV,eV,pV)},error:VV=>{this.failEncoder(pV,VV.message)}}),pV={encoder:yV,candidates:JV,candidateIndex:UV,candidate:YV,size:xV,fps:eV,sentMismatchedFrame:!1};this.active=pV,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{yV.configure(YV.config)}catch(QV){return void this.failEncoder(pV,QV instanceof Error?QV.message:String(QV))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(VV,eV){console.error("Session replay encoder failed.",VV.candidate.config,eV),this.active===VV&&(this.active=null,"closed"!==VV.encoder.state&&VV.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(VV,eV,xV){var JV;let YV=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const UV=null===(JV=VV[eV])||void 0===JV?void 0:JV.config.hardwareAcceleration;if(!("prefer-hardware"===UV&&xV||"no-preference"!==UV&&YV))return eV+1;for(let yV=eV+1;yV<VV.length;yV++)if(VV[yV].config.hardwareAcceleration!==UV)return yV;return VV.length}(VV.candidates,VV.candidateIndex,VV.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${eV}`))}failMuxer(VV){if(this.unavailable)return;const eV=this.active;this.active=null,null!==eV&&"closed"!==eV.encoder.state&&eV.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(`Muxer failed: ${VV}`)}markUnavailable(VV){console.warn(`Session replay video stopped: ${VV}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:VV})}))}maybePostStats(VV){var eV,xV,JV,YV;const UV=VV-this.statsWindowStartMs;if(UV<5e3)return;const yV=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:UV,qualityLevel:this.quality.getLevelIndex(),codec:null!==(eV=null===yV||void 0===yV?void 0:yV.candidate.config.codec)&&void 0!==eV?eV:null,hardwareAcceleration:null!==(xV=null===yV||void 0===yV?void 0:yV.candidate.config.hardwareAcceleration)&&void 0!==xV?xV:null,encodeWidth:null!==(JV=null===yV||void 0===yV?void 0:yV.size.width)&&void 0!==JV?JV:0,encodeHeight:null!==(YV=null===yV||void 0===yV?void 0:yV.size.height)&&void 0!==YV?YV:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=VV}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let NU=null;function XU(VV){let eV=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(VV,{transfer:eV})}self.onmessage=VV=>{const eV=VV.data;switch(eV.type){case"init":NU=new AU(eV.videoConfig,eV.partPlan,eV.cssSize,XU,eV.preferSoftwareEncoder,eV.journalRecordingId&&nV.supported?{recordingId:eV.journalRecordingId,journal:new nV}:null);break;case"frame":NU.handleFrame(eV.frame,eV.captureFps);break;case"resize":NU.resize(eV.cssSize);break;case"health":NU.updateHealth(eV.gameFps,eV.pingMs);break;case"hidden":NU.setHidden(eV.hidden);break;case"flush":NU.flushSegment();break;case"cut":NU.cutAtNextFrame();break;case"gameJoined":NU.gameJoined()}}})();', "Worker", void 0, xV.p + "sessionReplayVideo.worker.d12707b1.worker.js")
    }
    var QV = xV(3091),
      nV = xV(32),
      wV = xV(99);
    class ZV {
      constructor(VV) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / VV
      }
      setMaxFps(VV) {
        this.intervalMs = 1e3 / VV
      }
      shouldKeep(VV) {
        return !(VV < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = VV - this.nextDueMs > this.intervalMs ? VV + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class vV {
      constructor(VV, eV, xV) {
        this.budgetMsPerSecond = VV, this.minFps = eV, this.smoothedCostMs = xV
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      record(VV) {
        const eV = this.affordableFps() < this.minFps ? .5 : .05;
        this.smoothedCostMs += (VV - this.smoothedCostMs) * eV
      }
      maxFps(VV) {
        const eV = this.affordableFps();
        return eV < this.minFps ? .1 : Math.min(VV, eV)
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class rV {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
        this.worker = VV, this.onUnavailable = JV, this.canvas = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = xV.msPerSecond, this.frameCostFloorMs = xV.frameCostFloorMs, this.budget = new vV(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = eV, this.captureFps = this.budgetedFps(), this.frameLimiter = new ZV(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps
        }
      }
      start(VV) {
        this.canvas = VV
      }
      stop() {
        this.canvas = null
      }
      setMaxFps(VV) {
        this.wantedFps = VV, this.applyFps()
      }
      onAfterRender() {
        const VV = performance.timeOrigin + performance.now();
        if (null === this.canvas || !this.frameLimiter.shouldKeep(VV)) return;
        const eV = performance.now();
        let xV = null;
        try {
          xV = new VideoFrame(this.canvas, {
            timestamp: Math.round(1e3 * VV)
          });
          const eV = {
            type: "frame",
            frame: xV,
            captureFps: this.captureFps
          };
          this.worker.postMessage(eV, [xV])
        } catch (UV) {
          var JV;
          null === (JV = xV) || void 0 === JV || JV.close(), 0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", UV);
          return void(!(UV instanceof DOMException && "InvalidStateError" === UV.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${UV instanceof Error?UV.message:String(UV)}`)))
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0;
        const YV = performance.now() - eV;
        this.budget.record(Math.max(2 * YV, this.frameCostFloorMs)), this.applyFps()
      }
      applyFps() {
        const VV = this.budgetedFps();
        VV !== this.captureFps && (this.captureFps = VV, this.frameLimiter.setMaxFps(VV))
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var kV = xV(1348);
    class bV {
      constructor(VV) {
        this.events = VV, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const VV = (0, kV.K)().gameRender();
        if (null === VV || VV.canvas === this.canvas) return VV;
        const eV = null !== this.canvas;
        return this.canvas = VV.canvas, this.observe(VV.canvas), eV ? this.events.onCanvasSwapped(VV.canvas) : this.events.onFirstCanvas(VV.canvas), VV
      }
      stop() {
        var VV, eV;
        null === (VV = this.resizeObserver) || void 0 === VV || VV.disconnect(), null === (eV = this.listeners) || void 0 === eV || eV.abort()
      }
      observe(VV) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: eV
        } = this.listeners;
        VV.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: eV
        }), VV.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: eV
        });
        const xV = VV.getBoundingClientRect();
        this.size = {
          width: Math.round(xV.width),
          height: Math.round(xV.height)
        }, this.resizeObserver = new ResizeObserver((VV => {
          const eV = VV[VV.length - 1].contentRect,
            xV = {
              width: Math.round(eV.width),
              height: Math.round(eV.height)
            };
          0 !== xV.width && 0 !== xV.height && (this.size = xV, this.events.onResized(xV))
        })), this.resizeObserver.observe(VV)
      }
    }
    const EV = 4194304,
      BV = 16777216,
      jV = [2, 4, 9, 3],
      qV = JV.h,
      tV = [qV.MouseInteraction, qV.MouseMove, qV.TouchMove],
      FV = [qV.MouseMove, qV.MouseInteraction, qV.Scroll, qV.ViewportResize, qV.Input, qV.TouchMove, qV.MediaInteraction, qV.Drag],
      TV = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function PV(VV) {
      if ("object" !== typeof VV || null === VV || Array.isArray(VV)) return !1;
      const eV = VV.timestamp;
      return "number" === typeof eV && eV > 0 && eV <= 864e13
    }
    class AV {
      constructor() {
        this.distinctId = null, this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage(VV) {
        this.distinctId ||= VV, this.messageCount++
      }
      addEvent(VV) {
        this.eventCount++;
        const eV = function(VV) {
          var eV;
          return VV.type === JV.d.IncrementalSnapshot ? null === (eV = VV.data) || void 0 === eV ? void 0 : eV.source : void 0
        }(VV);
        this.timestamps.push(VV.timestamp), this.active.push(FV.includes(eV));
        const xV = function(VV) {
          var eV;
          const xV = VV.data;
          if (VV.type === JV.d.Custom && "$json_ld" === (null === xV || void 0 === xV ? void 0 : xV.tag)) return;
          const YV = "string" === typeof(null === xV || void 0 === xV ? void 0 : xV.href) ? xV.href.trim() : void 0,
            UV = "string" === typeof(null === xV || void 0 === xV || null === (eV = xV.payload) || void 0 === eV ? void 0 : eV.href) ? xV.payload.href.trim() : void 0;
          return YV || UV || void 0
        }(VV);
        xV && this.addUrl(xV), eV === qV.MouseInteraction && jV.includes(VV.data.type) && this.clickCount++, eV === qV.Input && this.keypressCount++, tV.includes(eV) && this.mouseActivityCount++;
        const YV = VV.data;
        if (VV.type === JV.d.Plugin && "rrweb/console@1" === (null === YV || void 0 === YV ? void 0 : YV.plugin)) {
          var UV;
          const VV = TV.get(null === (UV = YV.payload) || void 0 === UV ? void 0 : UV.level);
          "warn" === VV ? this.consoleWarnCount++ : "error" === VV ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(VV) {
        if (null === this.distinctId) throw new Error("A page recording chunk needs a message before its summary");
        return {
          distinctId: this.distinctId,
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: VV,
          clickCount: this.clickCount,
          keypressCount: this.keypressCount,
          mouseActivityCount: this.mouseActivityCount,
          activeMs: this.activeMs(),
          consoleLogCount: this.consoleLogCount,
          consoleWarnCount: this.consoleWarnCount,
          consoleErrorCount: this.consoleErrorCount,
          firstUrl: this.firstUrl,
          urls: [...this.urls]
        }
      }
      addUrl(VV) {
        const eV = VV.slice(0, 4096);
        this.firstUrl ??= eV, this.urls.size < 25 && !this.urls.has(eV) && this.urlsLength + eV.length <= 8192 && (this.urls.add(eV), this.urlsLength += eV.length)
      }
      activeMs() {
        var VV;
        const eV = this.timestamps.map(((VV, eV) => eV)).sort(((VV, eV) => this.timestamps[VV] - this.timestamps[eV]));
        let xV = 0,
          JV = null,
          YV = 0;
        for (const yV of eV) {
          const VV = this.timestamps[yV],
            eV = this.active[yV],
            pV = !JV || eV && !JV.isActive || JV.isActive && YV + 5e3 < VV;
          var UV;
          if (YV = eV ? VV : YV, pV) null !== (UV = JV) && void 0 !== UV && UV.isActive && (xV += Math.max(1, JV.end - JV.start)), JV = {
            start: VV,
            end: VV,
            isActive: eV
          };
          else JV.end = VV
        }
        return null !== (VV = JV) && void 0 !== VV && VV.isActive && (xV += Math.max(1, JV.end - JV.start)), Math.floor(xV)
      }
    }
    const NV = 5592405.333333333;
    class XV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = VV, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.counter = new AV, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get XZ() {
        return 0 === this.lines.length
      }
      add(VV) {
        const eV = [];
        let xV = 0,
          JV = 1 / 0,
          YV = -1 / 0;
        const UV = VV.events.filter(PV);
        for (const pV of UV) {
          const UV = JSON.stringify([VV.windowId, pV]) + "\n";
          eV.push(UV), xV += UV.length, JV = Math.min(JV, pV.timestamp), YV = Math.max(YV, pV.timestamp)
        }
        if (0 === eV.length) return null;
        const yV = !this.XZ && this.chars + xV > this.chunkChars ? this.finish() : null;
        this.counter.addMessage(VV.distinctId);
        for (const pV of UV) this.counter.addEvent(pV);
        return this.lines.push(...eV), this.chars += xV, this.startMs = Math.min(this.startMs, JV), this.endMs = Math.max(this.endMs, YV), yV
      }
      finish() {
        if (this.XZ) return null;
        const {
          startMs: VV,
          endMs: eV,
          counter: xV,
          chunkIndex: JV,
          tailedChars: YV
        } = this, UV = {
          text: this.lines.join(""),
          startMs: VV,
          endMs: eV,
          counter: xV,
          chunkIndex: JV,
          tailedChars: YV
        };
        return this.reset(), UV
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > NV) return null;
        const VV = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, VV
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.counter = new AV, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function MV(VV, eV) {
      let {
        startMs: xV,
        endMs: JV,
        counter: YV
      } = VV, {
        bytes: UV,
        inflatedBytes: yV
      } = eV;
      return UV.byteLength > EV || yV > BV ? (console.warn(`Session replay: dropped a ${yV}-byte page recording chunk, over the size limits`), null) : {
        bytes: UV,
        startMs: xV,
        endMs: JV,
        summary: YV.finish(yV)
      }
    }
    var zV = xV(34905);
    class GV {
      constructor(VV, eV, xV, JV) {
        this.uploader = VV, this.timing = eV, this.journal = xV, this.packer = JV, this.writer = new XV, this.cutNext = !1, this.packing = [], this.tailTimer = null
      }
      add(VV) {
        this.pack(this.writer.add(VV)), (this.cutNext || this.timing.cutsEachBatch()) && (this.cutNext = !1, this.cut());
        const eV = this.journal;
        null === eV || null !== this.tailTimer || this.writer.XZ || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const VV = this.writer.takeTail();
          null !== VV && eV.domTail(VV)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        this.pack(this.writer.finish())
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(VV) {
        if (this.timing.packsNow()) {
          for (const VV of this.packing) VV.packed ??= (0, zV.e)(VV.text.text);
          return this.packer.forgetWaiting(), null !== VV && this.packing.push({
            text: VV,
            packed: (0, zV.e)(VV.text)
          }), void this.queuePacked()
        }
        if (null === VV) return;
        const eV = null === this.journal ? null : function(VV) {
          let {
            text: eV,
            startMs: xV,
            endMs: JV,
            counter: YV,
            chunkIndex: UV,
            tailedChars: yV
          } = VV;
          return yV === eV.length || eV.length > NV ? null : {
            chunkIndex: UV,
            fromChar: yV,
            text: eV.slice(yV),
            startMs: xV,
            endMs: JV,
            summary: YV.finish(0)
          }
        }(VV);
        null !== eV && this.journal.domTail(eV);
        const xV = {
          text: VV,
          packed: null
        };
        this.packing.push(xV), this.packer.pack(VV.text).then((VV => {
          xV.packed = VV, this.queuePacked()
        }), (() => {
          xV.packed = (0, zV.e)(VV.text), this.queuePacked()
        }))
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: VV,
            packed: eV
          } = this.packing.shift();
          this.enqueue(VV.chunkIndex, MV(VV, eV))
        }
      }
      enqueue(VV, eV) {
        var xV;
        if (null === eV) return void(null === (xV = this.journal) || void 0 === xV || xV.domTailDropped(VV));
        const {
          startMs: JV,
          endMs: YV,
          summary: UV
        } = eV, yV = eV.bytes.buffer, pV = {
          startMs: JV,
          endMs: YV,
          byteLength: yV.byteLength,
          summary: UV
        }, QV = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: yV,
          meta: {
            type: "dom",
            chunk: pV
          }
        });
        var nV, wV;
        null === QV ? null === (nV = this.journal) || void 0 === nV || nV.domTailDropped(VV) : null === (wV = this.journal) || void 0 === wV || wV.domQueued(QV, yV, pV, VV)
      }
    }

    function WV() {
      return yV()('(()=>{var VV={4:(VV,eV,xV)=>{function JV(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function YV(VV){return VV instanceof Uint8Array&&(!JV()||!Buffer.isBuffer(VV))}function UV(VV){return VV instanceof ArrayBuffer}function yV(VV){return!!JV()&&Buffer.isBuffer(VV)}var pV=xV(10).e,QV=xV(13).c,nV="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";eV.d=function(VV){if(!YV(VV)&&!UV(VV)&&!yV(VV))throw new TypeError(nV);var eV=!1,xV=!1;YV(VV)?eV=!0:UV(VV)&&(xV=!0,VV=new Uint8Array(VV));var JV,pV,wV,ZV=new QV(VV),vV=ZV.maxCompressedLength();if(eV?(JV=new Uint8Array(vV),wV=ZV.compressToBuffer(JV)):xV?(JV=new ArrayBuffer(vV),pV=new Uint8Array(JV),wV=ZV.compressToBuffer(pV)):(JV=Buffer.alloc(vV),wV=ZV.compressToBuffer(JV)),!JV.slice){var rV=new Uint8Array(Array.prototype.slice.call(JV,0,wV));if(eV)return rV;if(xV)return rV.buffer;throw new Error("Not implemented")}return JV.slice(0,wV)}},13:(VV,eV)=>{var xV=new Array(15);function JV(VV,eV){return 506832829*VV>>>eV}function YV(VV,eV){return VV[eV]+(VV[eV+1]<<8)+(VV[eV+2]<<16)+(VV[eV+3]<<24)}function UV(VV,eV,xV){return VV[eV]===VV[xV]&&VV[eV+1]===VV[xV+1]&&VV[eV+2]===VV[xV+2]&&VV[eV+3]===VV[xV+3]}function yV(VV,eV,xV,JV,YV){return xV<=60?(JV[YV]=xV-1<<2,YV+=1):xV<256?(JV[YV]=240,JV[YV+1]=xV-1,YV+=2):(JV[YV]=244,JV[YV+1]=xV-1&255,JV[YV+2]=xV-1>>>8,YV+=3),function(VV,eV,xV,JV,YV){var UV;for(UV=0;UV<YV;UV++)xV[JV+UV]=VV[eV+UV]}(VV,eV,JV,YV,xV),YV+xV}function pV(VV,eV,xV,JV){return JV<12&&xV<2048?(VV[eV]=1+(JV-4<<2)+(xV>>>8<<5),VV[eV+1]=255&xV,eV+2):(VV[eV]=2+(JV-1<<2),VV[eV+1]=255&xV,VV[eV+2]=xV>>>8,eV+3)}function QV(VV,eV,xV,JV){for(;JV>=68;)eV=pV(VV,eV,xV,64),JV-=64;return JV>64&&(eV=pV(VV,eV,xV,60),JV-=60),pV(VV,eV,xV,JV)}function nV(VV,eV,pV,nV,wV){for(var ZV=1;1<<ZV<=pV&&ZV<=14;)ZV+=1;var vV=32-(ZV-=1);"undefined"===typeof xV[ZV]&&(xV[ZV]=new Uint16Array(1<<ZV));var rV,kV=xV[ZV];for(rV=0;rV<kV.length;rV++)kV[rV]=0;var bV,EV,BV,jV,qV,tV,FV,TV,PV,AV,NV=eV+pV,XV=eV,MV=eV,zV=!0;if(pV>=15)for(bV=NV-15,BV=JV(YV(VV,eV+=1),vV);zV;){tV=32,jV=eV;do{if(EV=BV,FV=tV>>>5,tV+=1,jV=(eV=jV)+FV,eV>bV){zV=!1;break}BV=JV(YV(VV,jV),vV),qV=XV+kV[EV],kV[EV]=eV-XV}while(!UV(VV,eV,qV));if(!zV)break;wV=yV(VV,MV,eV-MV,nV,wV);do{for(TV=eV,PV=4;eV+PV<NV&&VV[eV+PV]===VV[qV+PV];)PV+=1;if(eV+=PV,wV=QV(nV,wV,TV-qV,PV),MV=eV,eV>=bV){zV=!1;break}kV[JV(YV(VV,eV-1),vV)]=eV-1-XV,qV=XV+kV[AV=JV(YV(VV,eV),vV)],kV[AV]=eV-XV}while(UV(VV,eV,qV));if(!zV)break;BV=JV(YV(VV,eV+=1),vV)}return MV<NV&&(wV=yV(VV,MV,NV-MV,nV,wV)),wV}function wV(VV){this.array=VV}wV.prototype.maxCompressedLength=function(){var VV=this.array.length;return 32+VV+Math.floor(VV/6)},wV.prototype.compressToBuffer=function(VV){var eV,xV=this.array,JV=xV.length,YV=0,UV=0;for(UV=function(VV,eV,xV){do{eV[xV]=127&VV,(VV>>>=7)>0&&(eV[xV]+=128),xV+=1}while(VV>0);return xV}(JV,VV,UV);YV<JV;)UV=nV(xV,YV,eV=Math.min(JV-YV,65536),VV,UV),YV+=eV;return UV},eV.c=wV},10:(VV,eV)=>{var xV=[0,255,65535,16777215,4294967295];function JV(VV,eV,xV,JV,YV){var UV;for(UV=0;UV<YV;UV++)xV[JV+UV]=VV[eV+UV]}function YV(VV,eV,xV,JV){var YV;for(YV=0;YV<JV;YV++)VV[eV+YV]=VV[eV-xV+YV]}function UV(VV){this.array=VV,this.pos=0}UV.prototype.readUncompressedLength=function(){for(var VV,eV,xV=0,JV=0;JV<32&&this.pos<this.array.length;){if(VV=this.array[this.pos],this.pos+=1,(eV=127&VV)<<JV>>>JV!==eV)return-1;if(xV|=eV<<JV,VV<128)return xV;JV+=7}return-1},UV.prototype.uncompressToBuffer=function(VV){for(var eV,UV,yV,pV,QV=this.array,nV=QV.length,wV=this.pos,ZV=0;wV<QV.length;)if(eV=QV[wV],wV+=1,0===(3&eV)){if((UV=1+(eV>>>2))>60){if(wV+3>=nV)return!1;yV=UV-60,UV=1+((UV=QV[wV]+(QV[wV+1]<<8)+(QV[wV+2]<<16)+(QV[wV+3]<<24))&xV[yV]),wV+=yV}if(wV+UV>nV)return!1;JV(QV,wV,VV,ZV,UV),wV+=UV,ZV+=UV}else{switch(3&eV){case 1:UV=4+(eV>>>2&7),pV=QV[wV]+(eV>>>5<<8),wV+=1;break;case 2:if(wV+1>=nV)return!1;UV=1+(eV>>>2),pV=QV[wV]+(QV[wV+1]<<8),wV+=2;break;case 3:if(wV+3>=nV)return!1;UV=1+(eV>>>2),pV=QV[wV]+(QV[wV+1]<<8)+(QV[wV+2]<<16)+(QV[wV+3]<<24),wV+=4}if(0===pV||pV>ZV)return!1;YV(VV,ZV,pV,UV),ZV+=UV}return!0},eV.e=UV}},eV={};var xV=function xV(JV){var YV=eV[JV];if(void 0!==YV)return YV.exports;var UV=eV[JV]={exports:{}};return VV[JV](UV,UV.exports,xV),UV.exports}(4);function JV(VV){const eV=(new TextEncoder).encode(VV);return{bytes:(0,xV.d)(eV),inflatedBytes:eV.byteLength}}const YV=self;self.onmessage=VV=>{const{id:eV,text:xV}=VV.data,UV={id:eV,...JV(xV)};YV.postMessage(UV,[UV.bytes.buffer])}})();', "Worker", void 0, xV.p + "replayDomChunk.worker.fdc95de2.worker.js")
    }
    class RV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = VV, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null
      }
      pack(VV) {
        return new Promise(((eV, xV) => {
          var JV;
          const YV = null !== (JV = this.worker) && void 0 !== JV ? JV : this.start();
          if (null === YV) return void xV(this.failure);
          const UV = this.nextId++;
          this.waiting.set(UV, {
            resolve: eV,
            reject: xV
          });
          const yV = {
            id: UV,
            text: VV
          };
          YV.postMessage(yV), this.watchdog ??= this.startWatchdog()
        }))
      }
      forgetWaiting() {
        this.waiting.clear(), this.stopWatchdog()
      }
      close() {
        this.fail(new Error("page recording packer closed"))
      }
      start() {
        if (null !== this.failure) return null;
        try {
          this.worker = new WV
        } catch (VV) {
          return this.broke(`didn't start: ${String(VV)}`), null
        }
        return this.worker.onmessage = VV => {
          const {
            id: eV,
            bytes: xV,
            inflatedBytes: JV
          } = VV.data, YV = this.waiting.get(eV);
          this.waiting.delete(eV), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === YV || void 0 === YV || YV.resolve({
            bytes: xV,
            inflatedBytes: JV
          })
        }, this.worker.onerror = VV => {
          this.broke(VV.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        return setTimeout((() => {
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(VV) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${VV}`), this.fail(new Error(`page recording worker failed: ${VV}`))
      }
      fail(VV) {
        var eV;
        this.failure ??= VV, this.stopWatchdog(), null === (eV = this.worker) || void 0 === eV || eV.terminate(), this.worker = null;
        for (const {
            reject: xV
          }
          of this.waiting.values()) xV(VV);
        this.waiting.clear()
      }
    }
    var gV = xV(35045);
    var DV = xV(34886),
      iV = xV(110),
      CV = xV(40),
      aV = xV(2635);
    const oV = {
      logStats: !1
    };

    function cV(VV) {
      const eV = CV.m.getItem(VV);
      return "number" === typeof eV && Number.isFinite(eV) ? eV : null
    }
    const hV = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      lV = 12e4;
    class LV extends Error {
      constructor(VV, eV) {
        super(eV), this.reason = VV
      }
    }
    class fV {
      constructor(VV, eV, xV, JV, YV) {
        this.access = VV, this.uploadToken = eV, this.transport = xV, this.callbacks = JV, this.options = YV, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
          handBacks: {
            unreachable: 0,
            refused: 0,
            closed: 0,
            shortStored: 0,
            missing: 0,
            byteCap: 0
          },
          releases: 0
        }
      }
      get accepting() {
        return !this.refused && this.options.nowMs() >= this.downUntilMs && this.segments.size < 2 && this.heldBytes() < this.options.maxHeldBytes
      }
      owns(VV) {
        return this.segments.has(VV)
      }
      open(VV, eV) {
        this.segments.set(VV, {
          journalId: VV,
          sequence: eV,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(VV, eV) {
        const xV = this.segments.get(VV);
        if (void 0 !== xV) {
          xV.parts.push(eV), xV.bytes += eV.bytes.byteLength, !xV.cut && null === xV.totalParts && xV.bytes > this.options.maxHeldBytes / 2 && (xV.cut = !0, this.callbacks.cut());
          for (const VV of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(VV, "byteCap"), this.downUntilMs = this.options.nowMs() + lV
          }
          this.pump()
        }
      }
      close(VV, eV) {
        const xV = this.segments.get(VV);
        void 0 !== xV && (xV.totalParts = eV, this.pump())
      }
      forget(VV) {
        this.segments.delete(VV)
      }
      releaseAll() {
        for (const VV of this.segments.values()) VV.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: VV.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let VV = 0;
        for (const eV of this.segments.values()) VV += eV.bytes;
        return VV
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let eV = this.nextWork(); null !== eV; eV = this.nextWork()) try {
            await this.advance(eV)
          } catch (VV) {
            console.warn(`Session replay part joiner failed on video segment ${eV.sequence}; uploading it straight to storage.`, VV), VV instanceof LV || (this.downUntilMs = this.options.nowMs() + lV), this.handBack(eV, VV instanceof LV ? VV.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const VV of this.segments.values())
          if (VV.sentParts < VV.parts.length || VV.totalParts === VV.parts.length) return VV;
        return null
      }
      async advance(VV) {
        if (VV.sentParts < VV.parts.length) return this.expectHeld(await this.sendPart(VV, VV.parts[VV.sentParts])), void VV.sentParts++;
        for (let eV = 0; this.owns(VV.journalId); eV++) {
          const xV = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: VV.sequence,
            parts: VV.parts.length
          })));
          if (!this.owns(VV.journalId)) return;
          if ("stored" === xV.outcome && xV.stored.parts === VV.parts.length) return this.segments.delete(VV.journalId), void this.callbacks.stored(VV.journalId, VV.sequence, xV.stored);
          if ("missing" !== xV.outcome || eV >= 2) throw this.failure(xV);
          for (const eV of xV.parts) {
            if (!this.owns(VV.journalId)) return;
            const xV = VV.parts[eV];
            if (void 0 === xV) throw new LV("missing", `the joiner asked for part ${eV} of ${VV.parts.length}`);
            this.expectHeld(await this.sendPart(VV, xV))
          }
        }
      }
      sendPart(VV, eV) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: VV.sequence,
          index: eV.index,
          meta: {
            ...eV.meta,
            startMs: Math.round(eV.meta.startMs),
            endMs: Math.round(eV.meta.endMs)
          },
          completeUntilUs: eV.completeUntilUs
        }, eV.bytes)))
      }
      expectHeld(VV) {
        if ("buffered" !== VV.outcome) throw this.failure(VV)
      }
      failure(VV) {
        if ("refused" === VV.outcome) {
          this.refused = !0;
          for (const VV of [...this.segments.values()]) this.handBack(VV, "refused");
          return new LV("refused", `refused: ${VV.reason}`)
        }
        const eV = "stored" === VV.outcome ? "shortStored" : "missing" === VV.outcome ? "missing" : "closed";
        return new LV(eV, `answered ${VV.outcome}`)
      }
      async request(VV) {
        for (let xV = 1;; xV++) {
          try {
            return await VV()
          } catch (eV) {
            if (xV >= 3) throw eV
          }
          await this.options.wait(1e3 * 2 ** (xV - 1))
        }
      }
      handBack(VV, eV) {
        this.segments.delete(VV.journalId) && (this.stats.handBacks[eV]++, this.callbacks.handBack(VV.journalId, VV.sequence, VV.parts, VV.totalParts))
      }
    }
    const mV = "/v1/release",
      KV = EV;
    var HV = xV(1241),
      uV = xV(34892),
      sV = xV(35048),
      SV = xV(35063);

    function IV(VV) {
      return `replayJoiner/${VV}`
    }
    class dV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uV.e;
        this.baseUrl = VV, this.keepalive = eV
      }
      postPart(VV, eV) {
        const xV = (0, sV.e)(VV, eV),
          JV = 15e3 + Math.ceil(xV.size / 16384 * 1e3);
        return this.post("/v1/part", xV, xV.size, JV, VV.sequence)
      }
      finish(VV) {
        const eV = JSON.stringify(VV);
        return this.post("/v1/finish", eV, (0, uV.f)(eV), 3e4, VV.sequence)
      }
      release(VV) {
        return !this.keepalive.isInFlight(IV(VV.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${mV}`, JSON.stringify(VV))
      }
      async post(VV, eV, xV, JV, YV) {
        const UV = `${this.baseUrl}${VV}`,
          yV = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: eV,
            signal: (0, HV.u)(JV)
          },
          pV = xV <= uV.b ? await this.keepalive.fetch(UV, yV, xV, IV(YV)) : await fetch(UV, yV);
        if (!pV.ok) throw new SV.d(`Part joiner ${VV} failed with ${pV.status}`, pV.status);
        return await pV.json()
      }
    }

    function OV(VV) {
      return {
        releaseUrl: `${VV.url}${mV}`,
        token: VV.token,
        relay: {
          url: `${VV.url}/v1/relay`,
          maxBytes: KV
        }
      }
    }
    var Ve = xV(34889),
      ee = xV(34924);

    function xe() {
      return (0, DV.c)().manifestUrl
    }
    const Je = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class Ye {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = eV, this.sendEnabled = xV, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Map, this.sending = !1, this.queuedSend = null, this.options = void 0, this.options = {
          ...Je,
          ...JV
        };
        const YV = Math.round((0, gV.c)());
        this.manifest = {
          recordingId: VV,
          startedAtMs: YV,
          endedAtMs: YV,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(VV, eV, xV) {
        const JV = {
            sequence: VV,
            ...eV,
            startMs: Math.round(eV.startMs),
            endMs: Math.round(eV.endMs),
            ...null === xV ? {} : {
              parts: xV
            }
          },
          YV = this.manifest.videoSegments.findIndex((eV => eV.sequence === VV)); - 1 === YV ? this.manifest.videoSegments.push(JV) : this.manifest.videoSegments[YV] = JV, this.sendSoon()
      }
      setStill(VV, eV) {
        var xV, JV;
        VV > (null !== (xV = null === (JV = this.manifest.still) || void 0 === JV ? void 0 : JV.atMs) && void 0 !== xV ? xV : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(VV),
          sequence: eV
        }, this.sendSoon())
      }
      addTelemetrySegment(VV, eV, xV) {
        this.manifest.telemetrySegments.push({
          sequence: VV,
          startMs: Math.round(eV),
          endMs: Math.round(xV)
        }), this.sendSoon()
      }
      addDomSegment(VV, eV) {
        this.pendingDom.set(VV, eV), this.sendSoon()
      }
      addCreatorGrant(VV, eV) {
        this.creatorGrants.set(VV, eV)
      }
      gameJoined(VV) {
        this.gameLeft();
        const eV = {
          ...VV,
          gameDisplayName: null,
          joinedAtMs: Math.round((0, gV.c)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        };
        return this.manifest.games.push(eV), eV
      }
      flagLastGameQuitAfterDeath(VV) {
        const eV = this.manifest.games.at(-1);
        return !(!eV || (null === VV ? null !== eV.leftAtMs : eV.gameNameWithVariation !== VV)) && (eV.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(VV) {
        const eV = this.manifest.games.at(-1);
        eV && null === eV.leftAtMs && (eV[VV] = !0)
      }
      gameLeft() {
        const VV = this.manifest.games.at(-1);
        VV && null === VV.leftAtMs && (VV.leftAtMs = Math.round((0, gV.c)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(VV) {
        this.schedule(1e3, VV)
      }
      send() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var eV;
        if (this.sending) return void(this.queuedSend = Ue(null !== (eV = this.queuedSend) && void 0 !== eV ? eV : [], VV));
        const xV = this.prepareSend(VV);
        null !== xV && (this.sending = !0, this.postInTurn(xV).then((VV => {
          this.sending = !1;
          const eV = this.queuedSend;
          null !== eV ? (this.queuedSend = null, this.send(eV)) : "retryLater" === VV && this.sendSoon()
        })))
      }
      sendFinal() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: xV
          }
          of null !== (eV = this.prepareSend(VV)) && void 0 !== eV ? eV : []) {
          var eV;
          uV.e.sendBeacon(xe(), JSON.stringify(xV)) || (0, Ve.b)(xe(), xV)
        }
      }
      async postInTurn(VV) {
        for (const {
            request: eV,
            items: xV
          }
          of VV) {
          const VV = await (0, Ve.b)(xe(), eV);
          if ("retryLater" === VV) return VV;
          for (const eV of xV) eV.ack("uploaded" === VV)
        }
        return "uploaded"
      }
      schedule(VV, eV) {
        const xV = Date.now() + VV;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= xV) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const JV = setTimeout((() => {
          this.send(eV())
        }), VV);
        this.sendTimer = {
          timer: JV,
          dueMs: xV
        }
      }
      prepareSend(VV) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, gV.c)());
        const eV = this.pendingItems(VV);
        this.options.onSend({
          ...this.manifest,
          games: eV.flatMap((VV => "games" === VV.list ? [VV.value] : []))
        });
        const {
          recordingId: xV,
          startedAtMs: JV,
          endedAtMs: YV,
          still: UV
        } = this.manifest, yV = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: xV,
            startedAtMs: JV,
            endedAtMs: YV,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === UV ? {} : {
              still: UV
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, ee.c)(yV, eV)
      }
      pendingItems(VV) {
        const eV = [];
        for (const JV of this.creatorGrants.values()) this.ackedGrants.has(JV) || eV.push({
          list: "creatorGrants",
          value: JV,
          ack: () => {
            this.ackedGrants.add(JV)
          }
        });
        for (const JV of this.manifest.games) {
          const VV = JSON.stringify(JV);
          this.ackedGames.get(JV) !== VV && eV.push({
            list: "games",
            value: {
              ...JV
            },
            ack: () => {
              this.ackedGames.set(JV, VV)
            }
          })
        }
        for (const JV of this.manifest.videoSegments) this.ackedVideo.get(JV.sequence) !== JV && eV.push({
          list: "videoSegments",
          value: JV,
          ack: VV => {
            this.ackedVideo.set(JV.sequence, JV), VV && this.options.onListed({
              list: "videoSegments",
              value: JV
            })
          }
        });
        const xV = new Set;
        for (const JV of this.manifest.telemetrySegments) xV.add(JV.sequence), this.ackedTelemetry.has(JV) || eV.push({
          list: "telemetrySegments",
          value: JV,
          ack: VV => {
            this.ackedTelemetry.add(JV), VV && this.options.onListed({
              list: "telemetrySegments",
              value: JV
            })
          }
        });
        for (const [JV, YV] of this.pendingDom) eV.push({
          list: "domSegments",
          value: JV,
          ack: VV => {
            this.pendingDom.delete(JV), VV && YV()
          }
        });
        for (const JV of Ue([], VV)) xV.has(JV.sequence) || eV.push({
          list: "telemetrySegments",
          value: JV,
          ack: () => {}
        });
        return eV
      }
    }

    function Ue(VV, eV) {
      const xV = [...VV];
      for (const JV of eV) xV.some((VV => VV.sequence === JV.sequence)) || xV.push({
        sequence: JV.sequence,
        startMs: Math.round(JV.startMs),
        endMs: Math.round(JV.endMs)
      });
      return xV
    }
    var ye = xV(2645);

    function pe(VV) {
      return {
        ...VV,
        videoSegments: [],
        telemetrySegments: [],
        games: VV.games.map((VV => ({
          ...VV
        })))
      }
    }
    class Qe {
      constructor(VV, eV, xV, YV) {
        var UV;
        this.journal = VV, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: eV.recordingId,
          uploadToken: eV.uploadToken,
          expiresAtMs: eV.expiresAtMs,
          nextVideoSequence: 0,
          manifest: pe(xV),
          endpoints: YV,
          lateUploadUntilMs: eV.expiresAtMs + JV.l,
          ...void 0 === eV.partJoiner ? {} : {
            partJoiner: OV(eV.partJoiner)
          }
        }, null === (UV = navigator.locks) || void 0 === UV || UV.request((0, ye.p)(eV.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      manifestSent(VV) {
        this.record.manifest = pe(VV), this.putRecording()
      }
      videoQueued(VV, eV) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, eV + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), VV, eV)
      }
      videoPartLanded(VV, eV, xV) {
        this.landedVideo.set(VV, {
          segmentId: VV,
          ...eV
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: VV,
          ...eV
        }, xV)
      }
      telemetryQueued(VV, eV, xV, JV) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: VV,
          startMs: xV,
          endMs: JV,
          bytes: eV
        })
      }
      videoUploaded(VV) {
        this.journal.removeVideoChunks(this.record.recordingId, VV)
      }
      videoSettled(VV) {
        this.landedVideo.delete(VV), this.journal.removeVideo(this.record.recordingId, VV)
      }
      telemetryLanded(VV, eV, xV, JV) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: VV,
          startMs: xV,
          endMs: JV,
          bytes: eV,
          landed: !0
        })
      }
      telemetrySettled(VV) {
        this.journal.removeTelemetry(this.record.recordingId, VV)
      }
      domQueued(VV, eV, xV, JV) {
        var YV;
        this.record.nextDomSequence = Math.max(null !== (YV = this.record.nextDomSequence) && void 0 !== YV ? YV : 0, VV + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: VV,
          chunk: xV,
          bytes: eV
        }, JV)
      }
      domTail(VV) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...VV
        })
      }
      domTailDropped(VV) {
        this.journal.removeDomTail(this.record.recordingId, VV)
      }
      domLanded(VV, eV) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: VV,
          chunk: eV,
          bytes: null
        })
      }
      domSettled(VV) {
        this.journal.removeDom(this.record.recordingId, VV)
      }
      setMarker() {
        CV.m.setItem(ye.h, !0)
      }
      putRecording() {
        this.setMarker(), this.journal.putRecording(this.snapshot())
      }
      snapshot() {
        return {
          ...this.record,
          videoProgress: [...this.landedVideo.values()]
        }
      }
    }
    class ne {
      constructor(VV) {
        this.deps = VV, this.pageHiding = !1
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(VV) {
        document.addEventListener("visibilitychange", (() => {
          const VV = document.hidden;
          this.deps.writeEvent(VV ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: VV
          }), VV && (this.deps.flushChunks(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()))
        }), {
          signal: VV
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: VV
        }), window.addEventListener("pagehide", (VV => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.deps.flushChunks(), this.deps.stills.beacon(), this.sendManifest(), VV.persisted || this.deps.releaseJoined()
        }), {
          signal: VV
        })
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((VV => {
          let {
            sequence: eV,
            meta: xV
          } = VV;
          return "telemetry" === xV.type ? [{
            sequence: eV,
            startMs: xV.startMs,
            endMs: xV.endMs
          }] : []
        }))
      }
    }
    var we = xV(35055);
    const Ze = {
        count: 1,
        maxBytes: JV.x
      },
      ve = "image/jpeg";
    class re {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uV.e;
        this.uploader = VV, this.manifest = eV, this.relay = xV, this.keepalive = JV, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(VV, eV) {
        let {
          bytes: xV,
          small: JV,
          atMs: YV
        } = VV;
        const UV = xV.byteLength <= Ze.maxBytes ? xV : JV;
        null !== UV && (this.latest = {
          bytes: UV,
          small: JV,
          atMs: YV
        }, eV && this.upload())
      }
      upload() {
        var VV, eV;
        const xV = this.latest;
        if (this.stopped || null === xV || xV.atMs <= (null !== (VV = null === (eV = this.queued) || void 0 === eV ? void 0 : eV.atMs) && void 0 !== VV ? VV : -1 / 0)) return;
        const JV = this.takeSequence();
        this.queued = {
          atMs: xV.atMs,
          sequence: JV
        }, this.uploader.enqueue({
          kind: "still",
          contentType: ve,
          bytes: xV.bytes,
          meta: {
            type: "still",
            atMs: xV.atMs,
            sequence: JV
          },
          part: {
            sequence: JV,
            index: 0,
            slots: Ze
          }
        })
      }
      landed(VV) {
        this.manifest.setStill(VV.atMs, VV.sequence), this.uploader.closeSegment("still", VV.sequence)
      }
      dropped(VV) {
        this.uploader.closeSegment("still", VV.sequence)
      }
      beacon() {
        var VV, eV, xV, JV;
        const YV = this.latest;
        if (this.stopped || null === YV || YV.atMs <= (null !== (VV = null === (eV = this.manifest.contents.still) || void 0 === eV ? void 0 : eV.atMs) && void 0 !== VV ? VV : -1 / 0)) return;
        const UV = (null === (xV = this.queued) || void 0 === xV ? void 0 : xV.atMs) === YV.atMs ? this.queued : null;
        if (null !== UV && this.keepalive.isInFlight(ve)) return void this.manifest.setStill(YV.atMs, UV.sequence);
        const yV = null !== (JV = null === UV || void 0 === UV ? void 0 : UV.sequence) && void 0 !== JV ? JV : this.nextSequence,
          pV = this.uploader.peekTarget("still", yV, 0);
        if (void 0 !== pV)
          for (const QV of [YV.bytes, YV.small])
            if (null !== QV && this.sendBeacon(pV, QV)) return null === UV && this.takeSequence(), void this.manifest.setStill(YV.atMs, yV)
      }
      sendBeacon(VV, eV) {
        var xV, JV;
        const YV = null !== (xV = null === (JV = this.relay) || void 0 === JV ? void 0 : JV.beacon({
          method: "POST",
          url: VV.url,
          fields: VV.fields
        }, eV, ve, this.keepalive)) && void 0 !== xV ? xV : null;
        if (null !== YV) return YV;
        const {
          form: UV,
          byteLength: yV
        } = (0, we.l)(VV, eV, ve);
        return this.keepalive.sendUploadBeacon(VV.url, UV, yV)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const VV = this.nextSequence++;
        return this.prefetchNext(), VV
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, ve, Ze)
      }
    }
    var ke = xV(2647);
    const be = uV.b;
    class Ee {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now;
        this.transport = VV, this.uploadToken = eV, this.nextTelemetrySequence = xV, this.nowMs = JV, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null
      }
      prefetch(VV, eV, xV, JV) {
        this.request(this.segment(VV, eV, xV, JV), 0)
      }
      async get(VV, eV, xV, JV, YV) {
        const UV = this.segment(VV, eV, xV, YV),
          yV = UV.requests.find((VV => JV >= VV.first && JV < VV.end));
        if (void 0 === this.valid(UV, JV) && void 0 !== yV) {
          const VV = await yV.answer.catch((() => null));
          if (null !== VV && "rejected" in VV) return VV
        }
        let pV = this.valid(UV, JV);
        if (void 0 === pV) {
          const VV = await this.request(UV, JV).answer;
          if ("rejected" in VV) return VV;
          pV = VV[0]
        }
        return pV
      }
      takeTelemetry(VV) {
        const eV = this.telemetry;
        if ((null === eV || void 0 === eV ? void 0 : eV.sequence) === VV) return this.telemetry = null, Be(eV.hn, this.nowMs()) ? eV.hn.target : void 0
      }
      peek(VV, eV, xV) {
        const JV = this.segments.get(je(VV, eV));
        return void 0 === JV ? void 0 : this.valid(JV, xV)
      }
      expire(VV, eV, xV) {
        const JV = this.segments.get(je(VV, eV)),
          YV = null === JV || void 0 === JV ? void 0 : JV.hn.get(xV);
        if (void 0 !== JV && void 0 !== YV)
          for (const [UV, yV] of JV.hn) yV.expiresAtMs <= YV.expiresAtMs && JV.hn.delete(UV)
      }
      forget(VV, eV) {
        this.segments.delete(je(VV, eV))
      }
      segment(VV, eV, xV, JV) {
        const YV = je(VV, eV);
        let UV = this.segments.get(YV);
        return void 0 === UV && (UV = {
          kind: VV,
          sequence: eV,
          contentType: xV,
          slots: JV,
          hn: new Map,
          requests: []
        }, this.segments.set(YV, UV)), UV
      }
      valid(VV, eV) {
        const xV = VV.hn.get(eV);
        return void 0 !== xV && Be(xV, this.nowMs()) ? xV.target : void 0
      }
      telemetryToAskFor() {
        const VV = this.nextTelemetrySequence(),
          eV = this.telemetry;
        return this.telemetryAsked === VV || null !== eV && eV.sequence === VV && Be(eV.hn, this.nowMs()) ? null : VV
      }
      request(VV, eV) {
        const xV = eV < VV.slots.count ? VV.slots.count : eV + 1,
          JV = this.nowMs(),
          YV = "video" === VV.kind ? this.telemetryToAskFor() : null;
        null !== YV && (this.telemetryAsked = YV);
        const UV = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: VV.kind,
            sequence: VV.sequence,
            contentType: VV.contentType,
            parts: {
              first: eV,
              count: xV - eV,
              maxBytes: VV.slots.maxBytes
            },
            ...null === YV ? {} : {
              nextTelemetry: {
                sequence: YV,
                maxBytes: be
              }
            }
          }).then((xV => {
            var UV, yV;
            if ("rejected" in xV) return xV;
            const pV = JV + 1e3 * xV.expiresInSecs;
            xV.targets.forEach(((xV, JV) => {
              VV.hn.set(eV + JV, {
                target: xV,
                expiresAtMs: pV
              })
            }));
            return null !== YV && YV >= this.nextTelemetrySequence() && (null !== (UV = null === (yV = this.telemetry) || void 0 === yV ? void 0 : yV.sequence) && void 0 !== UV ? UV : -1) <= YV && void 0 !== xV.telemetryTarget && (this.telemetry = {
              sequence: YV,
              hn: {
                target: xV.telemetryTarget,
                expiresAtMs: pV
              }
            }), xV.targets
          })),
          yV = {
            first: eV,
            end: xV,
            answer: UV
          };
        VV.requests.push(yV);
        const pV = () => {
          VV.requests.splice(VV.requests.indexOf(yV), 1), null !== YV && this.telemetryAsked === YV && (this.telemetryAsked = null)
        };
        return UV.then(pV, pV), yV
      }
    }

    function Be(VV, eV) {
      return VV.expiresAtMs - 6e4 > eV
    }

    function je(VV, eV) {
      return `${VV}:${eV}`
    }
    const qe = {
        maxAttempts: 10,
        baseBackoffMs: 1e3
      },
      te = ["video", "dom"],
      Fe = "video",
      Te = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      Pe = "an earlier part of its segment was dropped",
      Ae = new Set([403, 408, 409, 429]);
    class Ne {
      constructor(VV, eV, xV, JV) {
        this.transport = VV, this.uploadToken = eV, this.options = xV, this.callbacks = JV, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new Ee(VV, eV, (() => {
          var VV;
          return null !== (VV = this.nextSequence.get("telemetry")) && void 0 !== VV ? VV : 0
        }))
      }
      get backlogBytes() {
        return this.queuedBytes
      }
      get uploadingKind() {
        return this.uploadInFlight ? this.queue[0].kind : null
      }
      queued() {
        return this.queue.map((VV => {
          let {
            kind: eV,
            sequence: xV,
            meta: JV
          } = VV;
          return {
            kind: eV,
            sequence: xV,
            meta: JV
          }
        }))
      }
      openSegment(VV, eV, xV) {
        const JV = this.takeSequence(VV);
        return this.prefetchTargets(VV, JV, eV, xV), JV
      }
      prefetchTargets(VV, eV, xV, JV) {
        this.stopped || this.targets.prefetch(VV, eV, xV, JV)
      }
      peekTarget(VV, eV, xV) {
        return this.targets.peek(VV, eV, xV)
      }
      closeSegment(VV, eV) {
        this.targets.forget(VV, eV), VV === Fe && this.brokenSegments.delete(eV)
      }
      enqueue(VV) {
        var eV, xV;
        const JV = null !== (eV = null === (xV = VV.part) || void 0 === xV ? void 0 : xV.sequence) && void 0 !== eV ? eV : null;
        if (this.stopped) return this.callbacks.onDropped(VV, "uploader stopped", JV), null;
        if (null !== JV && VV.kind === Fe && this.brokenSegments.has(JV)) return this.callbacks.onDropped(VV, Pe, JV), null;
        "still" === VV.kind && this.removeQueued(VV.kind);
        const YV = {
            ...VV,
            sequence: null !== JV && void 0 !== JV ? JV : this.takeSequence(VV.kind)
          },
          UV = this.queue.findIndex(((eV, xV) => (xV > 0 || !this.uploadInFlight) && Te[eV.kind] > Te[VV.kind]));
        return this.queue.splice(-1 === UV ? this.queue.length : UV, 0, YV), this.queuedBytes += VV.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(YV) ? YV.sequence : null
      }
      stop() {
        this.stopped = !0;
        for (const VV of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= VV.bytes.byteLength, this.callbacks.onDropped(VV, "uploader stopped", VV.sequence)
      }
      takeSequence(VV) {
        var eV;
        const xV = null !== (eV = this.nextSequence.get(VV)) && void 0 !== eV ? eV : 0;
        return this.nextSequence.set(VV, xV + 1), xV
      }
      removeQueued(VV) {
        for (let eV = this.queue.length - 1; eV >= (this.uploadInFlight ? 1 : 0); eV--)
          if (this.queue[eV].kind === VV) {
            const [VV] = this.queue.splice(eV, 1);
            this.queuedBytes -= VV.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const VV of te)
          for (let eV = this.uploadInFlight ? 1 : 0; eV < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
            if (this.queue[eV].kind !== VV) {
              eV++;
              continue
            }
            const [xV] = this.queue.splice(eV, 1);
            this.queuedBytes -= xV.bytes.byteLength, this.callbacks.onDropped(xV, "backlog over cap", xV.sequence), this.segmentBroken(xV)
          }
      }
      segmentBroken(VV) {
        if (void 0 !== VV.part && VV.kind === Fe) {
          this.brokenSegments.add(VV.sequence);
          for (let eV = this.queue.length - 1; eV >= (this.uploadInFlight ? 1 : 0); eV--) {
            const xV = this.queue[eV];
            xV.kind === Fe && void 0 !== xV.part && xV.sequence === VV.sequence && (this.queue.splice(eV, 1), this.queuedBytes -= xV.bytes.byteLength, this.callbacks.onDropped(xV, Pe, xV.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const VV = this.queue[0];
            this.uploadInFlight = !0;
            const eV = await this.upload(VV);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= VV.bytes.byteLength, "uploaded" !== eV.type ? (this.callbacks.onDropped(VV, eV.reason, VV.sequence), this.segmentBroken(VV), "refused" !== eV.type || this.stopped || "telemetry" !== VV.kind || (console.warn(`Session replay uploads refused (${eV.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(eV.reason))) : this.callbacks.onUploaded(VV, VV.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(VV) {
        let eV = null,
          xV = 0;
        for (let YV = 1;; YV++) {
          try {
            if (null === eV) {
              const xV = await this.requestTarget(VV);
              if ("rejected" in xV) {
                if (!xV.retryable) return {
                  type: "refused",
                  reason: xV.reason
                };
                throw new Error(`rejected for now: ${xV.reason}`)
              }
              eV = xV
            }
            try {
              "put" === eV.type ? await this.transport.put(eV.url, VV.bytes, VV.contentType, "dom" === VV.kind) : await this.transport.post(eV.target, VV.bytes, VV.contentType)
            } catch (JV) {
              if (JV instanceof SV.d && null !== JV.status && JV.status < 500 && !Ae.has(JV.status)) return console.warn(`Session replay ${VV.kind} segment ${VV.sequence} refused by storage:`, JV), {
                type: "dropped",
                reason: JV.message
              };
              throw JV
            }
            return {
              type: "uploaded"
            }
          } catch (JV) {
            const YV = JV instanceof Error ? JV.message : String(JV),
              UV = void 0 === VV.part ? "" : ` part ${VV.part.index}`;
            if (console.warn(`Session replay ${VV.kind} segment ${VV.sequence}${UV} upload failed:`, JV), JV instanceof SV.d && (403 === JV.status && (eV = null, void 0 !== VV.part && this.targets.expire(VV.kind, VV.sequence, VV.part.index)), ++xV >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: YV
            }
          }
          const UV = Math.min(3e4, this.options.baseBackoffMs * 2 ** (YV - 1));
          if (await this.options.wait(UV * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(VV) {
        const {
          part: eV
        } = VV;
        if (void 0 !== eV) {
          const xV = await this.targets.get(VV.kind, VV.sequence, VV.contentType, eV.index, eV.slots);
          return "rejected" in xV ? xV : {
            type: "post",
            target: xV
          }
        }
        const xV = "telemetry" === VV.kind && VV.bytes.byteLength <= be ? this.targets.takeTelemetry(VV.sequence) : void 0;
        if (void 0 !== xV) return {
          type: "post",
          target: xV
        };
        const JV = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: VV.kind,
          sequence: VV.sequence,
          contentType: VV.contentType,
          byteLength: VV.bytes.byteLength
        });
        return "rejected" in JV ? JV : {
          type: "put",
          url: JV.uploadUrl
        }
      }
    }
    var Xe = xV(35090),
      Me = xV(34898),
      ze = xV(7080),
      Ge = xV(7083);
    class We {
      constructor() {
        this.writer = new ze.d((0, gV.c)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(VV, eV) {
        null !== VV && (this.setActionBits(VV.getActionBits(), (0, gV.c)()), this.unsubscribers.push(VV.onKey(((VV, eV, xV, JV, YV) => {
          this.writer.writeKey(YV, JV ? (0, Ge.d)(VV) : 0, eV, xV, JV)
        })), VV.onActions(((VV, eV) => {
          this.setActionBits(VV, eV)
        })), VV.onPointerLock(((VV, eV) => {
          this.writer.writeEvent(eV, VV ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, kV.y)((() => {
          const VV = (0, kV.d)();
          this.writer.writeFrame((0, gV.c)() - VV, VV), this.framesSinceFpsSample++, eV()
        })))
      }
      writeState(VV, eV) {
        this.writer.writeState((0, gV.c)(), {
          backingWidth: VV.canvas.width,
          backingHeight: VV.canvas.height,
          cssWidth: VV.cssWidth,
          cssHeight: VV.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: VV.renderer,
          pingMs: VV.pingMs,
          hidden: eV,
          qualityLevel: VV.qualityLevel
        })
      }
      writeEvent(VV) {
        this.writer.writeEvent((0, gV.c)(), VV)
      }
      sampleFps() {
        const VV = performance.now(),
          eV = VV - this.lastFpsSampleMs,
          xV = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = VV, this.framesSinceFpsSample = 0, 0 === xV || eV <= 0 ? null : 1e3 * xV / eV
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const VV = this.writer.chunkStartMs,
          eV = (0, gV.c)(),
          xV = this.writer.takeChunk(eV);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(eV, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: xV,
          startMs: VV,
          endMs: eV
        }
      }
      stop() {
        for (const VV of this.unsubscribers) VV();
        this.unsubscribers = []
      }
      setActionBits(VV, eV) {
        VV !== this.actionBits && (this.actionBits = VV, this.writer.writeActions(eV, VV))
      }
    }
    class Re {
      constructor(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = VV, this.slots = eV, this.manifest = xV, this.journal = JV, this.cut = YV, this.joiner = UV, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(VV) {
        switch (VV.type) {
          case "videoSegmentOpened": {
            var eV, xV;
            if (null !== (eV = this.joiner) && void 0 !== eV && eV.accepting) {
              var JV;
              const eV = this.uploader.takeSequence("video");
              this.joiner.open(VV.journalId, eV), this.openJournalId = VV.journalId, null === (JV = this.journal) || void 0 === JV || JV.videoQueued(VV.journalId, eV);
              break
            }
            const YV = this.uploader.openSegment("video", "video/mp4", this.slots);
            this.segments.set(VV.journalId, {
              sequence: YV,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = VV.journalId, null === (xV = this.journal) || void 0 === xV || xV.videoQueued(VV.journalId, YV);
            break
          }
          case "videoPart": {
            var YV;
            if (null !== (YV = this.joiner) && void 0 !== YV && YV.owns(VV.journalId)) {
              const {
                index: eV,
                bytes: xV,
                meta: JV,
                completeUntilUs: YV,
                completeUntilIndex: UV
              } = VV;
              this.joiner.addPart(VV.journalId, {
                index: eV,
                bytes: xV,
                meta: JV,
                completeUntilUs: YV,
                completeUntilIndex: UV
              });
              break
            }
            const eV = this.segments.get(VV.journalId);
            void 0 !== eV && this.enqueuePart(VV.journalId, eV.sequence, VV);
            break
          }
          case "videoSegmentClosed": {
            var UV;
            if (null !== (UV = this.joiner) && void 0 !== UV && UV.owns(VV.journalId)) {
              var yV;
              if (this.openJournalId === VV.journalId && (this.openJournalId = null), VV.parts > 0) this.joiner.close(VV.journalId, VV.parts);
              else this.joiner.forget(VV.journalId), null === (yV = this.journal) || void 0 === yV || yV.videoSettled(VV.journalId);
              break
            }
            const eV = this.segments.get(VV.journalId);
            if (void 0 === eV) break;
            eV.totalParts = VV.parts, this.openJournalId === VV.journalId && (this.openJournalId = null), this.maybeDone(VV.journalId, eV);
            break
          }
        }
      }
      joinedStored(VV, eV, xV) {
        this.manifest.setVideoSegment(eV, xV.meta, null), this.storedWhole.set(eV, VV)
      }
      joinedHandedBack(VV, eV, xV, JV) {
        const YV = {
          sequence: eV,
          settledParts: 0,
          totalParts: JV,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(VV, YV), this.uploader.prefetchTargets("video", eV, "video/mp4", this.slots);
        for (const UV of xV) this.enqueuePart(VV, eV, UV)
      }
      enqueuePart(VV, eV, xV) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: xV.bytes,
          meta: {
            type: "video",
            meta: xV.meta,
            journalId: VV,
            index: xV.index,
            completeUntilUs: xV.completeUntilUs,
            completeUntilIndex: xV.completeUntilIndex
          },
          part: {
            sequence: eV,
            index: xV.index,
            slots: this.slots
          }
        })
      }
      landed(VV, eV) {
        if (null !== VV.completeUntilUs && VV.meta.endMs > VV.meta.startMs) {
          var xV, JV;
          const YV = this.segments.get(VV.journalId);
          void 0 !== YV && (YV.landedParts = VV.index + 1), this.manifest.setVideoSegment(eV, VV.meta, VV.index + 1), null === (xV = this.journal) || void 0 === xV || xV.videoPartLanded(VV.journalId, {
            partsLanded: VV.index + 1,
            completeUntilUs: VV.completeUntilUs,
            meta: VV.meta
          }, null !== (JV = VV.completeUntilIndex) && void 0 !== JV ? JV : 0)
        }
        this.settled(VV)
      }
      dropped(VV) {
        this.settled(VV), VV.journalId === this.openJournalId && VV.journalId !== this.cutJournalId && (this.cutJournalId = VV.journalId, this.cut())
      }
      listed(VV, eV) {
        if (null !== eV)
          for (const [JV, YV] of this.segments) YV.sequence === VV && (YV.listedParts = Math.max(YV.listedParts, eV), this.maybeDone(JV, YV));
        else {
          const eV = this.storedWhole.get(VV);
          var xV;
          void 0 !== eV && (this.storedWhole.delete(VV), null === (xV = this.journal) || void 0 === xV || xV.videoSettled(eV))
        }
      }
      settled(VV) {
        const eV = this.segments.get(VV.journalId);
        void 0 !== eV && (eV.settledParts++, this.maybeDone(VV.journalId, eV))
      }
      maybeDone(VV, eV) {
        if (null === eV.totalParts || eV.settledParts < eV.totalParts) return;
        const xV = eV.listedParts >= eV.landedParts;
        var JV, YV;
        eV.uploaded || (eV.uploaded = !0, this.uploader.closeSegment("video", eV.sequence), xV || null === (JV = this.journal) || void 0 === JV || JV.videoUploaded(VV));
        xV && (this.segments.delete(VV), null === (YV = this.journal) || void 0 === YV || YV.videoSettled(VV))
      }
    }
    var ge = xV(2596),
      De = xV(2649),
      ie = xV(2653),
      Ce = xV(2626),
      ae = xV(35103),
      oe = xV(35111);
    const ce = 3 * uV.b / 4,
      he = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };

    function le(VV) {
      return new Promise((eV => {
        const xV = () => {
            clearTimeout(JV), window.removeEventListener("online", xV), eV()
          },
          JV = setTimeout(xV, VV);
        window.addEventListener("online", xV)
      }))
    }

    function Le(VV) {
      var eV;
      if (VV instanceof ErrorEvent) return VV.error instanceof Error && VV.filename.startsWith(window.location.origin);
      const xV = VV.reason;
      return xV instanceof Error && (null !== (eV = xV.stack) && void 0 !== eV ? eV : "").includes(window.location.origin)
    }
    class fe {
      constructor(VV, eV) {
        var xV;
        this.recording = VV, this.telemetry = new We, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = null, this.stills = void 0, this.videoConfig = void 0, this.joinerAccess = void 0, this.joiner = null, this.platformType = void 0, this.debug = void 0, this.experiment = void 0, this.lifetime = new AbortController, this.timers = [], this.canvasWatch = new bV({
          onFirstCanvas: VV => {
            this.attachToCanvas(VV)
          },
          onCanvasSwapped: VV => {
            this.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(VV), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: VV => {
            this.postToWorker({
              type: "resize",
              cssSize: VV
            })
          },
          onContextLost: () => {
            this.telemetry.writeEvent("contextLost"), this.manifest.flagCurrentGame("hadError")
          },
          onContextRestored: () => {
            this.telemetry.writeEvent("contextRestored")
          }
        }), this.worker = null, this.capture = null, this.qualityLevel = 0, this.statsWindows = 0, this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0, this.videoStatus = void 0, this.videoStarted = !1, this.joinerAccess = eV.dryRun ? null : null !== (xV = VV.partJoiner) && void 0 !== xV ? xV : null;
        const YV = null === this.joinerAccess ? null : (0, sV.i)(OV(this.joinerAccess)),
          UV = eV.dryRun ? new we.e : new we.i((0, DV.c)().segmentUploadUrl, {
            relay: YV
          });
        this.videoConfig = eV.dryRun ? function(VV) {
          var eV, xV, YV, UV;
          const yV = JV.b[VV],
            pV = CV.m.getItem("replayEncoder");
          return {
            ...yV,
            maxFps: null !== (eV = cV("replayMaxFps")) && void 0 !== eV ? eV : yV.maxFps,
            maxMacroblocks: null !== (xV = cV("replayMaxMacroblocks")) && void 0 !== xV ? xV : yV.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (YV = cV("replayCaptureBudgetMs")) && void 0 !== YV ? YV : yV.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (UV = cV("replayCaptureCostFloorMs")) && void 0 !== UV ? UV : yV.captureFrameCostFloorMs,
            softwareEncoderOnWindows: "software" === pV || "hardware" !== pV && yV.softwareEncoderOnWindows
          }
        }(eV.platformType) : VV.videoConfig && (0, JV.N)(VV.videoConfig, eV.platformType), this.platformType = eV.platformType;
        const yV = (0, ie.f)();
        this.videoStatus = "supported" !== yV ? yV : null === this.videoConfig ? "unsupported" : "recorded", (0, De.h)("recorded" === this.videoStatus ? "video" : "dom_only", VV), this.experiment = eV.dryRun ? {
          logStats: !0 === CV.m.getItem("replayLogStats")
        } : oV, this.manifest = new Ye(VV.recordingId, VV.uploadToken, !eV.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: VV.expiresAtMs - 6e4,
          onSend: VV => {
            var eV;
            null === (eV = this.journal) || void 0 === eV || eV.manifestSent(VV)
          },
          onListed: VV => {
            let {
              list: eV,
              value: xV
            } = VV;
            var JV, YV, UV;
            "videoSegments" === eV ? null === (JV = this.video) || void 0 === JV || JV.listed(xV.sequence, null !== (YV = xV.parts) && void 0 !== YV ? YV : null) : null === (UV = this.journal) || void 0 === UV || UV.telemetrySettled(xV.sequence)
          }
        }), !eV.dryRun && Me.c.supported && (this.journal = new Qe(new Me.c, VV, this.manifest.contents, (0, DV.c)())), this.debug = function() {
          const VV = {
            stoppedReason: null,
            videoUnavailableReason: null,
            uploadBacklogBytes: 0,
            uploadedBytesByKind: {},
            droppedSegments: 0,
            workerStats: [],
            qualityChanges: [],
            captureFrameCost: null,
            joiner: null
          };
          return window.sessionReplayDebug = VV, VV
        }(), this.uploader = new Ne(UV, VV.uploadToken, {
          ...qe,
          maxBacklogBytes: he[eV.platformType],
          wait: le
        }, {
          onUploaded: (VV, eV) => {
            var xV;
            this.debug.uploadedBytesByKind[VV.kind] = (null !== (xV = this.debug.uploadedBytesByKind[VV.kind]) && void 0 !== xV ? xV : 0) + VV.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(VV.meta, eV, VV.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (VV, eV, xV) => {
            var JV;
            if (console.warn(`Session replay dropped a ${VV.kind} segment: ${eV}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === VV.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (JV = this.video) || void 0 === JV || JV.dropped(VV.meta);
            else if ("still" === VV.meta.type) this.stills.dropped(VV.meta);
            else if ("telemetry" === VV.meta.type && null !== xV) {
              var YV;
              null === (YV = this.journal) || void 0 === YV || YV.telemetrySettled(xV)
            } else if ("dom" === VV.meta.type && null !== xV) {
              var UV;
              null === (UV = this.journal) || void 0 === UV || UV.domSettled(xV)
            }
          },
          onStopped: VV => {
            this.stop(`uploads refused: ${VV}`)
          }
        }), this.stills = new re(this.uploader, this.manifest, YV), this.pageExit = new ne({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushChunks: () => {
            var VV;
            this.flushChunks(), null === (VV = this.dom) || void 0 === VV || VV.cutAfterNextBatch()
          },
          postToWorker: VV => {
            this.postToWorker(VV)
          },
          writeEvent: VV => {
            this.telemetry.writeEvent(VV)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var VV;
            null === (VV = this.joiner) || void 0 === VV || VV.releaseAll()
          }
        });
        const pV = eV.dryRun ? function() {
          var VV;
          const eV = null !== (VV = (0, aV.h)() ? iV.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== VV ? VV : CV.m.getItem("replayPostHogHost");
          return "string" === typeof eV && eV.length > 0 ? {
            apiHost: eV,
            projectApiKey: "dry-run"
          } : null
        }() : VV.posthog;
        if (this.ownFpsMonitor = null === pV ? new ae.e({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, nV.h.subscribe("sessionReplayLowFps", (VV => {
            let {
              low: eV
            } = VV;
            this.isStopped || this.onLowFps(eV)
          })), nV.h.subscribe("sessionReplayGameQuit", (VV => {
            let {
              reasons: eV,
              gameName: xV
            } = VV;
            eV.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(xV) && this.pageExit.sendManifest()
          })), null !== eV.currentGame && this.labelGame(this.manifest.gameJoined(eV.currentGame)), this.start(VV.expiresAtMs), this.dom = null, null !== pV) {
          const xV = new GV(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: () => this.isStopped || this.pageExit.isHiding || document.hidden
          }, this.journal, new RV);
          this.dom = xV, (0, Ce.d)({
            recording: VV,
            posthog: pV,
            deviceId: (0, ge.c)(),
            videoStatus: this.videoStatus,
            dryRun: eV.dryRun,
            onDomBatch: VV => {
              xV.add(VV)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var VV, eV;
        return null !== (VV = null === (eV = this.videoConfig) || void 0 === eV ? void 0 : eV.manifestIntervalMs) && void 0 !== VV ? VV : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      gameJoined(VV) {
        this.isStopped || (this.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.labelGame(this.manifest.gameJoined(VV)), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(VV, eV) {
        this.isStopped || (this.manifest.addCreatorGrant(VV, eV), this.manifest.send())
      }
      onLowFps(VV) {
        this.lowFpsOpen = VV, VV && this.manifest.flagCurrentGame("lowFps")
      }
      labelGame(VV) {
        const eV = VV.gameNameWithVariation;
        (0, YV.l)(eV) && (0, oe.e)((0, YV.p)(eV)).then((eV => {
          VV.gameDisplayName = eV
        }))
      }
      start(VV) {
        const eV = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          this.flushChunks()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, VV - Date.now() - 6e4))), this.pageExit.listen(eV), this.telemetry.attach((0, Xe.e)(), (() => {
          var VV;
          null === (VV = this.capture) || void 0 === VV || VV.onAfterRender()
        }));
        for (const xV of ["error", "unhandledrejection"]) window.addEventListener(xV, (VV => {
          Le(VV) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: eV
        });
        (0, ie.e)((() => {
          this.onCellular()
        }), eV), null !== this.journal && (0, ke.b)(eV)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      stop(VV) {
        var eV;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${VV}`), this.debug.stoppedReason = VV, this.lifetime.abort();
          for (const VV of this.timers) clearTimeout(VV);
          this.stills.stop(), this.canvasWatch.stop(), null !== this.dom && (0, Ce.j)(), this.telemetry.stop(), this.flushChunks(), null === (eV = this.dom) || void 0 === eV || eV.close(), this.endVideo(), this.manifest.send(), (0, De.h)("events_only", this.recording)
        }
      }
      endVideo() {
        var VV;
        null === (VV = this.capture) || void 0 === VV || VV.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const eV = this.worker;
        this.worker = null, setTimeout((() => {
          null === eV || void 0 === eV || eV.terminate()
        }), 15e3)
      }
      onStateTick() {
        var VV;
        const eV = this.canvasWatch.check();
        if (null === eV) return;
        const {
          cssSize: xV
        } = this.canvasWatch, JV = QV.e.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: eV.canvas,
          cssWidth: xV.width,
          cssHeight: xV.height,
          renderer: eV.renderer,
          pingMs: JV,
          qualityLevel: this.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= ce && this.flushTelemetry();
        const YV = this.telemetry.sampleFps(),
          UV = document.hidden ? null : YV;
        if (null === (VV = this.ownFpsMonitor) || void 0 === VV || VV.addSample(UV, Date.now()), document.hidden || this.postToWorker({
            type: "health",
            gameFps: UV,
            pingMs: JV
          }), null !== this.capture) {
          const {
            averageMs: VV,
            fps: eV
          } = this.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: VV,
            budgetFps: eV
          }
        }
      }
      attachToCanvas(VV) {
        if (null !== this.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(VV, this.videoConfig)
        } catch (eV) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", eV), this.videoUnavailable(`video couldn't start: ${eV instanceof Error?eV.message:String(eV)}`)
        }
      }
      startVideo(VV, eV) {
        var xV, YV, UV;
        const yV = new pV,
          QV = (0, JV.K)(eV),
          nV = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          ZV = null === this.joinerAccess ? null : this.createJoiner(this.joinerAccess, (() => vV), nV),
          vV = new Re(this.uploader, QV, this.manifest, this.journal, nV, ZV);
        yV.onmessage = VV => {
          this.onWorkerMessage(VV.data, vV)
        }, yV.onerror = VV => {
          console.error("Session replay video worker error.", VV.message), this.worker === yV && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${VV.message||"it didn't load"}`))
        }, this.worker = yV, this.video = vV, this.joiner = ZV, this.debug.joiner = null !== (xV = null === ZV || void 0 === ZV ? void 0 : ZV.stats) && void 0 !== xV ? xV : null, this.videoStarted = !0, this.stills.start(), this.postToWorker({
          type: "init",
          videoConfig: eV,
          partPlan: {
            ...QV,
            partDurationMs: eV.partDurationMs,
            keyframeIntervalMs: eV.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          preferSoftwareEncoder: eV.softwareEncoderOnWindows && "windows" === (0, wV.getOperatingSystem)(),
          journalRecordingId: null !== (YV = null === (UV = this.journal) || void 0 === UV ? void 0 : UV.recordingId) && void 0 !== YV ? YV : null
        }), this.capture = new rV(yV, eV.maxFps, {
          msPerSecond: eV.captureBudgetMsPerSecond,
          frameCostFloorMs: eV.captureFrameCostFloorMs
        }, (VV => {
          this.endVideo(), this.videoStopped("stopped_error", VV)
        })), this.capture.start(VV)
      }
      createJoiner(VV, eV, xV) {
        return new fV(VV, this.recording.uploadToken, new dV(VV.url), {
          stored: (VV, xV, JV) => {
            eV().joinedStored(VV, xV, JV), this.pageExit.segmentLanded()
          },
          handBack: (VV, xV, JV, YV) => {
            eV().joinedHandedBack(VV, xV, JV, YV)
          },
          cut: xV
        }, {
          wait: le,
          nowMs: Date.now,
          maxHeldBytes: hV[this.platformType]
        })
      }
      onWorkerMessage(VV, eV) {
        var xV, JV, YV;
        switch (VV.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            eV.onWorkerMessage(VV), this.debug.uploadBacklogBytes = this.uploader.backlogBytes;
            break;
          case "still":
            this.stills.received(VV, document.hidden);
            break;
          case "stats":
            JV = this.debug, YV = VV.stats, JV.workerStats.push(YV), JV.workerStats.length > 120 && JV.workerStats.shift(), this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.maybeLogStats(VV.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = VV.level, null === (xV = this.capture) || void 0 === xV || xV.setMaxFps(VV.maxFps), this.debug.qualityChanges.push({
              atMs: (0, gV.c)(),
              level: VV.level,
              maxFps: VV.maxFps,
              reason: VV.reason
            }), this.experiment.logStats && console.warn(`Session replay stats: quality level ${VV.level} (${VV.reason})`), this.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(VV.reason)
        }
      }
      videoUnavailable(VV) {
        var eV, xV;
        null === (eV = this.capture) || void 0 === eV || eV.stop(), this.capture = null, null === (xV = this.worker) || void 0 === xV || xV.terminate(), this.worker = null, this.videoStopped("stopped_error", VV)
      }
      videoStopped(VV, eV) {
        "recorded" !== this.videoStatus || this.isStopped || (this.debug.videoUnavailableReason = eV, "stopped_error" === VV && this.telemetry.writeEvent("captureFailed"), this.setVideoStatus(VV, eV))
      }
      setVideoStatus(VV, eV) {
        this.videoStatus = VV, (0, De.h)("dom_only", this.recording), null !== this.dom && (0, Ce.f)(VV, eV)
      }
      maybeLogStats(VV) {
        if (!this.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const eV = Math.round(1e3 * VV.encodedFrames / VV.windowMs);
        console.warn(`Session replay stats: ${eV} fps encoded, ${VV.encodeWidth}x${VV.encodeHeight} ${VV.hardwareAcceleration}`)
      }
      onSegmentUploaded(VV, eV, xV) {
        var JV;
        if ("video" === VV.type) null === (JV = this.video) || void 0 === JV || JV.landed(VV, eV);
        else if ("still" === VV.type) this.stills.landed(VV);
        else if ("dom" === VV.type) {
          var YV;
          null === (YV = this.journal) || void 0 === YV || YV.domLanded(eV, VV.chunk), this.manifest.addDomSegment({
            sequence: eV,
            ...VV.chunk
          }, (() => {
            var VV;
            null === (VV = this.journal) || void 0 === VV || VV.domSettled(eV)
          }))
        } else {
          var UV;
          null === (UV = this.journal) || void 0 === UV || UV.telemetryLanded(eV, xV, VV.startMs, VV.endMs), this.manifest.addTelemetrySegment(eV, VV.startMs, VV.endMs)
        }
      }
      flushChunks() {
        var VV;
        null === (VV = this.dom) || void 0 === VV || VV.cut(), this.flushTelemetry()
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: VV,
          startMs: eV,
          endMs: xV
        } = this.telemetry.takeChunk(), JV = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: VV,
          meta: {
            type: "telemetry",
            startMs: eV,
            endMs: xV
          }
        });
        var YV;
        null !== JV && (null === (YV = this.journal) || void 0 === YV || YV.telemetryQueued(JV, VV, eV, xV));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
      postToWorker(VV) {
        var eV;
        null === (eV = this.worker) || void 0 === eV || eV.postMessage(VV)
      }
    }
  },
  7080: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => XV,
      e: () => MV
    });
    var JV = xV(7083);
    const YV = 827609666,
      UV = 2,
      yV = 1,
      pV = 13,
      QV = 1,
      nV = 2,
      wV = 3,
      ZV = 4,
      vV = 5,
      rV = 7,
      kV = 19,
      bV = 6,
      EV = 7,
      BV = 7,
      jV = 1,
      qV = 2,
      tV = 4,
      FV = 65535,
      TV = 10,
      PV = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      AV = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function NV(VV) {
      return Math.max(0, Math.min(FV, Math.round(VV)))
    }
    class XV {
      constructor(VV) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(VV)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - pV
      }
      writeFrame(VV, eV) {
        this.reserve(rV);
        const xV = this.view,
          JV = this.length;
        xV.setUint8(JV, QV), xV.setUint32(JV + 1, this.timeUnits(VV), !0), xV.setUint16(JV + 5, NV(100 * eV), !0), this.length += rV
      }
      writeState(VV, eV) {
        this.reserve(kV);
        const xV = this.view,
          JV = this.length;
        xV.setUint8(JV, nV), xV.setUint32(JV + 1, this.timeUnits(VV), !0), xV.setUint16(JV + 5, NV(eV.backingWidth), !0), xV.setUint16(JV + 7, NV(eV.backingHeight), !0), xV.setUint16(JV + 9, NV(eV.cssWidth), !0), xV.setUint16(JV + 11, NV(eV.cssHeight), !0), xV.setUint16(JV + 13, NV(100 * eV.devicePixelRatio), !0), xV.setUint8(JV + 15, PV.indexOf(eV.renderer)), xV.setUint16(JV + 16, null === eV.pingMs ? FV : NV(Math.min(eV.pingMs, FV - 1)), !0), xV.setUint8(JV + 18, (eV.hidden ? 1 : 0) | (7 & eV.qualityLevel) << 1), this.length += kV
      }
      writeEvent(VV, eV) {
        this.reserve(bV);
        const xV = this.length;
        this.view.setUint8(xV, wV), this.view.setUint32(xV + 1, this.timeUnits(VV), !0), this.view.setUint8(xV + 5, AV.indexOf(eV)), this.length += bV
      }
      writeActions(VV, eV) {
        this.reserve(EV);
        const xV = this.length;
        this.view.setUint8(xV, ZV), this.view.setUint32(xV + 1, this.timeUnits(VV), !0), this.view.setUint16(xV + 5, eV, !0), this.length += EV
      }
      writeKey(VV, eV, xV, JV, YV) {
        this.reserve(BV);
        const UV = this.length;
        this.view.setUint8(UV, vV), this.view.setUint32(UV + 1, this.timeUnits(VV), !0), this.view.setUint8(UV + 5, eV), this.view.setUint8(UV + 6, (xV ? jV : 0) | (JV ? qV : 0) | (YV ? tV : 0)), this.length += BV
      }
      takeChunk(VV) {
        const eV = this.buffer.slice(0, this.length);
        return this.startChunk(VV), eV
      }
      startChunk(VV) {
        this.baseEpochMs = VV, this.view.setUint32(0, YV, !0), this.view.setUint8(4, UV), this.view.setFloat64(5, VV, !0), this.length = pV
      }
      timeUnits(VV) {
        return Math.max(0, Math.round((VV - this.baseEpochMs) * TV))
      }
      reserve(VV) {
        if (this.length + VV <= this.buffer.byteLength) return;
        const eV = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(eV).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = eV, this.view = new DataView(eV)
      }
    }

    function MV(VV) {
      const eV = new DataView(VV),
        xV = VV.byteLength < pV ? 0 : eV.getUint8(4);
      if (xV < yV || xV > UV || eV.getUint32(0, !0) !== YV) throw new Error(`Not a version ${yV}-${UV} replay telemetry chunk`);
      const NV = eV.getFloat64(5, !0),
        XV = {
          baseEpochMs: NV,
          inputRecorded: xV >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        MV = VV => NV + eV.getUint32(VV, !0) / TV;
      let zV = pV;
      for (; zV < VV.byteLength;) {
        const VV = eV.getUint8(zV);
        if (VV === QV) XV.frames.push({
          atMs: MV(zV + 1),
          cpuFrameMs: eV.getUint16(zV + 5, !0) / 100
        }), zV += rV;
        else if (VV === nV) {
          var GV;
          const VV = eV.getUint16(zV + 16, !0),
            xV = eV.getUint8(zV + 18);
          XV.states.push({
            atMs: MV(zV + 1),
            backingWidth: eV.getUint16(zV + 5, !0),
            backingHeight: eV.getUint16(zV + 7, !0),
            cssWidth: eV.getUint16(zV + 9, !0),
            cssHeight: eV.getUint16(zV + 11, !0),
            devicePixelRatio: eV.getUint16(zV + 13, !0) / 100,
            renderer: null !== (GV = PV[eV.getUint8(zV + 15)]) && void 0 !== GV ? GV : "unknown",
            pingMs: VV === FV ? null : VV,
            hidden: 1 === (1 & xV),
            qualityLevel: xV >> 1 & 7
          }), zV += kV
        } else if (VV === wV) {
          var WV;
          XV.events.push({
            atMs: MV(zV + 1),
            event: null !== (WV = AV[eV.getUint8(zV + 5)]) && void 0 !== WV ? WV : "none"
          }), zV += bV
        } else if (VV === ZV && XV.inputRecorded) XV.actions.push({
          atMs: MV(zV + 1),
          bits: eV.getUint16(zV + 5, !0)
        }), zV += EV;
        else {
          if (VV !== vV || !XV.inputRecorded) throw new Error(`Unknown replay telemetry record type ${VV} at byte ${zV}`);
          {
            var RV;
            const VV = eV.getUint8(zV + 6);
            XV.keys.push({
              atMs: MV(zV + 1),
              code: null !== (RV = JV.b[eV.getUint8(zV + 5)]) && void 0 !== RV ? RV : JV.b[0],
              down: 0 !== (VV & jV),
              bound: 0 !== (VV & qV),
              inPlay: 0 !== (VV & tV)
            }), zV += BV
          }
        }
      }
      return XV
    }
  },
  35081: VV => {
    VV.exports = function(VV, eV, xV, JV) {
      var YV = self || window;
      try {
        try {
          var UV;
          try {
            UV = new YV.Blob([VV])
          } catch (nV) {
            (UV = new(YV.BlobBuilder || YV.WebKitBlobBuilder || YV.MozBlobBuilder || YV.MSBlobBuilder)).append(VV), UV = UV.getBlob()
          }
          var yV = YV.URL || YV.webkitURL,
            pV = yV.createObjectURL(UV),
            QV = new YV[eV](pV, xV);
          return yV.revokeObjectURL(pV), QV
        } catch (nV) {
          return new YV[eV]("data:application/javascript,".concat(encodeURIComponent(VV)), xV)
        }
      } catch (nV) {
        if (!JV) throw Error("Inline worker is not supported");
        return new YV[eV](JV, xV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);