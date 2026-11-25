export const id = 63;
export const ids = [63];
export const modules = {
  34654: (MM, rM, iM) => {
    function OM() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function SM(MM) {
      return MM instanceof Uint8Array && (!OM() || !Buffer.isBuffer(MM))
    }

    function jM(MM) {
      return MM instanceof ArrayBuffer
    }

    function aM(MM) {
      return !!OM() && Buffer.isBuffer(MM)
    }
    var PM = iM(34660).d,
      nM = iM(34663).b,
      QM = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    rM.e = function(MM) {
      if (!SM(MM) && !jM(MM) && !aM(MM)) throw new TypeError(QM);
      var rM = !1,
        iM = !1;
      SM(MM) ? rM = !0 : jM(MM) && (iM = !0, MM = new Uint8Array(MM));
      var OM, PM, zM, LM = new nM(MM),
        mM = LM.maxCompressedLength();
      if (rM ? (OM = new Uint8Array(mM), zM = LM.compressToBuffer(OM)) : iM ? (OM = new ArrayBuffer(mM), PM = new Uint8Array(OM), zM = LM.compressToBuffer(PM)) : (OM = Buffer.alloc(mM), zM = LM.compressToBuffer(OM)), !OM.slice) {
        var HM = new Uint8Array(Array.prototype.slice.call(OM, 0, zM));
        if (rM) return HM;
        if (iM) return HM.buffer;
        throw new Error("Not implemented")
      }
      return OM.slice(0, zM)
    }
  },
  34663: (MM, rM) => {
    var iM = new Array(15);

    function OM(MM, rM) {
      return 506832829 * MM >>> rM
    }

    function SM(MM, rM) {
      return MM[rM] + (MM[rM + 1] << 8) + (MM[rM + 2] << 16) + (MM[rM + 3] << 24)
    }

    function jM(MM, rM, iM) {
      return MM[rM] === MM[iM] && MM[rM + 1] === MM[iM + 1] && MM[rM + 2] === MM[iM + 2] && MM[rM + 3] === MM[iM + 3]
    }

    function aM(MM, rM, iM, OM, SM) {
      return iM <= 60 ? (OM[SM] = iM - 1 << 2, SM += 1) : iM < 256 ? (OM[SM] = 240, OM[SM + 1] = iM - 1, SM += 2) : (OM[SM] = 244, OM[SM + 1] = iM - 1 & 255, OM[SM + 2] = iM - 1 >>> 8, SM += 3),
        function(MM, rM, iM, OM, SM) {
          var jM;
          for (jM = 0; jM < SM; jM++) iM[OM + jM] = MM[rM + jM]
        }(MM, rM, OM, SM, iM), SM + iM
    }

    function PM(MM, rM, iM, OM) {
      return OM < 12 && iM < 2048 ? (MM[rM] = 1 + (OM - 4 << 2) + (iM >>> 8 << 5), MM[rM + 1] = 255 & iM, rM + 2) : (MM[rM] = 2 + (OM - 1 << 2), MM[rM + 1] = 255 & iM, MM[rM + 2] = iM >>> 8, rM + 3)
    }

    function nM(MM, rM, iM, OM) {
      for (; OM >= 68;) rM = PM(MM, rM, iM, 64), OM -= 64;
      return OM > 64 && (rM = PM(MM, rM, iM, 60), OM -= 60), PM(MM, rM, iM, OM)
    }

    function QM(MM, rM, PM, QM, zM) {
      for (var LM = 1; 1 << LM <= PM && LM <= 14;) LM += 1;
      var mM = 32 - (LM -= 1);
      "undefined" === typeof iM[LM] && (iM[LM] = new Uint16Array(1 << LM));
      var HM, hM = iM[LM];
      for (HM = 0; HM < hM.length; HM++) hM[HM] = 0;
      var JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM = rM + PM,
        tM = rM,
        gM = rM,
        uM = !0;
      if (PM >= 15)
        for (JM = wM - 15, yM = OM(SM(MM, rM += 1), mM); uM;) {
          UM = 32, lM = rM;
          do {
            if (dM = yM, GM = UM >>> 5, UM += 1, lM = (rM = lM) + GM, rM > JM) {
              uM = !1;
              break
            }
            yM = OM(SM(MM, lM), mM), EM = tM + hM[dM], hM[dM] = rM - tM
          } while (!jM(MM, rM, EM));
          if (!uM) break;
          zM = aM(MM, gM, rM - gM, QM, zM);
          do {
            for (CM = rM, eM = 4; rM + eM < wM && MM[rM + eM] === MM[EM + eM];) eM += 1;
            if (rM += eM, zM = nM(QM, zM, CM - EM, eM), gM = rM, rM >= JM) {
              uM = !1;
              break
            }
            hM[OM(SM(MM, rM - 1), mM)] = rM - 1 - tM, EM = tM + hM[bM = OM(SM(MM, rM), mM)], hM[bM] = rM - tM
          } while (jM(MM, rM, EM));
          if (!uM) break;
          yM = OM(SM(MM, rM += 1), mM)
        }
      return gM < wM && (zM = aM(MM, gM, wM - gM, QM, zM)), zM
    }

    function zM(MM) {
      this.array = MM
    }
    zM.prototype.maxCompressedLength = function() {
      var MM = this.array.length;
      return 32 + MM + Math.floor(MM / 6)
    }, zM.prototype.compressToBuffer = function(MM) {
      var rM, iM = this.array,
        OM = iM.length,
        SM = 0,
        jM = 0;
      for (jM = function(MM, rM, iM) {
          do {
            rM[iM] = 127 & MM, (MM >>>= 7) > 0 && (rM[iM] += 128), iM += 1
          } while (MM > 0);
          return iM
        }(OM, MM, jM); SM < OM;) jM = QM(iM, SM, rM = Math.min(OM - SM, 65536), MM, jM), SM += rM;
      return jM
    }, rM.b = zM
  },
  34660: (MM, rM) => {
    var iM = [0, 255, 65535, 16777215, 4294967295];

    function OM(MM, rM, iM, OM, SM) {
      var jM;
      for (jM = 0; jM < SM; jM++) iM[OM + jM] = MM[rM + jM]
    }

    function SM(MM, rM, iM, OM) {
      var SM;
      for (SM = 0; SM < OM; SM++) MM[rM + SM] = MM[rM - iM + SM]
    }

    function jM(MM) {
      this.array = MM, this.pos = 0
    }
    jM.prototype.readUncompressedLength = function() {
      for (var MM, rM, iM = 0, OM = 0; OM < 32 && this.pos < this.array.length;) {
        if (MM = this.array[this.pos], this.pos += 1, (rM = 127 & MM) << OM >>> OM !== rM) return -1;
        if (iM |= rM << OM, MM < 128) return iM;
        OM += 7
      }
      return -1
    }, jM.prototype.uncompressToBuffer = function(MM) {
      for (var rM, jM, aM, PM, nM = this.array, QM = nM.length, zM = this.pos, LM = 0; zM < nM.length;)
        if (rM = nM[zM], zM += 1, 0 === (3 & rM)) {
          if ((jM = 1 + (rM >>> 2)) > 60) {
            if (zM + 3 >= QM) return !1;
            aM = jM - 60, jM = 1 + ((jM = nM[zM] + (nM[zM + 1] << 8) + (nM[zM + 2] << 16) + (nM[zM + 3] << 24)) & iM[aM]), zM += aM
          }
          if (zM + jM > QM) return !1;
          OM(nM, zM, MM, LM, jM), zM += jM, LM += jM
        } else {
          switch (3 & rM) {
            case 1:
              jM = 4 + (rM >>> 2 & 7), PM = nM[zM] + (rM >>> 5 << 8), zM += 1;
              break;
            case 2:
              if (zM + 1 >= QM) return !1;
              jM = 1 + (rM >>> 2), PM = nM[zM] + (nM[zM + 1] << 8), zM += 2;
              break;
            case 3:
              if (zM + 3 >= QM) return !1;
              jM = 1 + (rM >>> 2), PM = nM[zM] + (nM[zM + 1] << 8) + (nM[zM + 2] << 16) + (nM[zM + 3] << 24), zM += 4
          }
          if (0 === PM || PM > LM) return !1;
          SM(MM, LM, PM, jM), LM += jM
        } return !0
    }, rM.d = jM
  },
  34810: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      SessionReplayRecorder: () => vr
    });
    var OM = iM(5479),
      SM = iM(1073),
      jM = iM(34814),
      aM = iM.n(jM);

    function PM() {
      return aM()('/*! For license information please see sessionReplayVideo.worker.63062aef.worker.js.LICENSE.txt */\n(()=>{var MM={5:()=>{}},rM={};function iM(OM){var SM=rM[OM];if(void 0!==SM)return SM.exports;var jM=rM[OM]={exports:{}};return MM[OM](jM,jM.exports,iM),jM.exports}(()=>{var MM,rM=Object.getPrototypeOf?MM=>Object.getPrototypeOf(MM):MM=>MM.__proto__;iM.t=function(OM,SM){if(1&SM&&(OM=this(OM)),8&SM)return OM;if("object"===typeof OM&&OM){if(4&SM&&OM.__esModule)return OM;if(16&SM&&"function"===typeof OM.then)return OM}var jM=Object.create(null);iM.r(jM);var aM={};MM=MM||[null,rM({}),rM([]),rM(rM)];for(var PM=2&SM&&OM;"object"==typeof PM&&!~MM.indexOf(PM);PM=rM(PM))Object.getOwnPropertyNames(PM).forEach((MM=>aM[MM]=()=>OM[MM]));return aM.default=()=>OM,iM.d(jM,aM),jM}})(),iM.d=(MM,rM)=>{for(var OM in rM)iM.o(rM,OM)&&!iM.o(MM,OM)&&Object.defineProperty(MM,OM,{enumerable:!0,get:rM[OM]})},iM.o=(MM,rM)=>Object.prototype.hasOwnProperty.call(MM,rM),iM.r=MM=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(MM,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(MM,"__esModule",{value:!0})};const OM="bloxdSessionReplayTails";const SM=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function jM(MM){return new Promise(((rM,iM)=>{MM.onsuccess=()=>{rM(MM.result)},MM.onerror=()=>{iM(MM.error)}}))}function aM(MM){return new Promise(((rM,iM)=>{MM.oncomplete=()=>{rM()},MM.onerror=()=>{iM(MM.error)},MM.onabort=()=>{var rM;iM(null!==(rM=MM.error)&&void 0!==rM?rM:new Error("IndexedDB transaction aborted"))}}))}function PM(MM){return IDBKeyRange.bound([MM],[MM,[]])}function nM(MM,rM){return IDBKeyRange.bound([MM,rM],[MM,rM,[]])}class QM{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(MM){this.write(["recordings"],(rM=>{rM.objectStore("recordings").put(MM)}))}putVideoSequence(MM,rM,iM){this.write(["recordings","videoSequences"],(OM=>{OM.objectStore("recordings").put(MM),OM.objectStore("videoSequences").put({recordingId:MM.recordingId,segmentId:rM,sequence:iM})}))}appendVideo(MM,rM){this.write(["videoHeaders","videoChunks"],(iM=>{iM.objectStore("videoHeaders").put(MM);const OM=iM.objectStore("videoChunks");for(const MM of rM)OM.put(MM)}))}putVideoProgress(MM,rM){this.write(["videoProgress","videoChunks"],(iM=>{if(iM.objectStore("videoProgress").put(MM),rM>0){const{recordingId:OM,segmentId:SM}=MM;iM.objectStore("videoChunks").delete(IDBKeyRange.bound([OM,SM,0],[OM,SM,rM],!1,!0))}}))}removeVideoChunks(MM,rM){this.write(["videoChunks"],(iM=>{iM.objectStore("videoChunks").delete(nM(MM,rM))}))}removeVideo(MM,rM){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(iM=>{iM.objectStore("videoHeaders").delete([MM,rM]),iM.objectStore("videoChunks").delete(nM(MM,rM)),iM.objectStore("videoSequences").delete([MM,rM]),iM.objectStore("videoProgress").delete([MM,rM])}))}putTelemetry(MM){this.write(["telemetry"],(rM=>{rM.objectStore("telemetry").put(MM)}))}removeTelemetry(MM,rM){this.write(["telemetry"],(iM=>{iM.objectStore("telemetry").delete([MM,rM])}))}putDom(MM){this.write(["dom"],(rM=>{rM.objectStore("dom").put(MM)}))}queueDom(MM,rM,iM){this.write(["recordings","dom","domTail"],(OM=>{OM.objectStore("recordings").put(MM),OM.objectStore("dom").put(rM),OM.objectStore("domTail").delete(nM(rM.recordingId,iM))}))}putDomTail(MM){this.tailRecordings.add(MM.recordingId),this.write(["domTail"],(rM=>{rM.objectStore("domTail").put(MM)}))}removeDomTail(MM,rM){this.write(["domTail"],(iM=>{iM.objectStore("domTail").delete(nM(MM,rM))}))}removeDom(MM,rM){this.write(["dom"],(iM=>{iM.objectStore("dom").delete([MM,rM])}))}async listRecordings(){const MM=await this.open();return await jM(MM.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(MM){const rM=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),iM=PM(MM.recordingId),OM=MM=>jM(rM.objectStore(MM).getAll(iM)),[SM,aM,nM,QM,zM,LM,mM]=await Promise.all([OM("videoHeaders"),OM("videoChunks"),OM("videoSequences"),OM("videoProgress"),OM("telemetry"),OM("dom"),OM("domTail")]);return{recording:MM,telemetry:zM,dom:LM,domTails:mM,video:SM.map((MM=>{var rM,iM,OM;return{header:MM,sequence:null!==(rM=null===(iM=nM.find((rM=>rM.segmentId===MM.segmentId)))||void 0===iM?void 0:iM.sequence)&&void 0!==rM?rM:null,progress:null!==(OM=QM.find((rM=>rM.segmentId===MM.segmentId)))&&void 0!==OM?OM:null,chunks:aM.filter((rM=>rM.segmentId===MM.segmentId))}}))}}async deleteRecording(MM){const rM=(await this.open()).transaction([...SM],"readwrite");rM.objectStore("recordings").delete(MM);for(const iM of SM.slice(1))rM.objectStore(iM).delete(PM(MM));await aM(rM)}async forgetSent(MM,rM){const iM=(await this.open()).transaction([...SM],"readwrite"),{recordingId:OM}=MM;iM.objectStore("recordings").put(MM);for(const SM of rM.videoSegmentIds)iM.objectStore("videoHeaders").delete([OM,SM]),iM.objectStore("videoChunks").delete(nM(OM,SM)),iM.objectStore("videoSequences").delete([OM,SM]),iM.objectStore("videoProgress").delete([OM,SM]);for(const SM of rM.telemetrySequences)iM.objectStore("telemetry").delete([OM,SM]);for(const SM of rM.domSequences)iM.objectStore("dom").delete([OM,SM]);for(const SM of rM.domTailChunks)iM.objectStore("domTail").delete(nM(OM,SM));await aM(iM)}write(MM,rM){if(this.failed)return;const iM=iM=>{try{var OM;const SM=iM.transaction(MM,"readwrite");rM(SM),null===(OM=SM.commit)||void 0===OM||OM.call(SM),aM(SM).catch((MM=>{this.fail(MM)}))}catch(SM){this.fail(SM)}};null===this.db?this.open().then(iM,(MM=>{this.fail(MM)})):iM(this.db)}fail(MM){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",MM),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const MM=MM=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",MM)};try{const rM=this.db.transaction(["domTail"],"readwrite");for(const MM of this.tailRecordings)rM.objectStore("domTail").delete(PM(MM));aM(rM).catch(MM)}catch(rM){MM(rM)}}open(){return this.opening??=new Promise(((MM,rM)=>{const iM=indexedDB.open(OM,4);iM.onupgradeneeded=MM=>{const rM=iM.result;MM.oldVersion<1&&(rM.createObjectStore("recordings",{keyPath:"recordingId"}),rM.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),rM.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),rM.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),rM.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),MM.oldVersion<2&&rM.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),MM.oldVersion<3&&rM.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),rM.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let SM=!1;iM.onblocked=()=>{SM=!0,rM(new Error("An older tab holds the upload journal at an earlier version"))},iM.onsuccess=()=>{SM?iM.result.close():(this.db=iM.result,this.db.onversionchange=()=>{var MM;this.dropTails(),null===(MM=this.db)||void 0===MM||MM.close(),this.db=null,this.opening=null},MM(iM.result))},iM.onerror=()=>{rM(iM.error)}})),this.opening}}const zM=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class LM{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return zM[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(MM){this.firstSampleMs??=MM.nowMs;const rM=null!==MM.pingMs&&MM.pingMs>300,iM=MM.nowMs-this.firstSampleMs>=3e4;iM&&(null!==MM.gameFps&&MM.gameFps<24||rM)?this.gameStrugglingSinceMs??=MM.nowMs:this.gameStrugglingSinceMs=null,iM&&MM.encoderBackpressureDrops>0?this.backpressureSinceMs??=MM.nowMs:this.backpressureSinceMs=null;const OM=null!==this.backpressureSinceMs&&MM.nowMs-this.backpressureSinceMs>=3e3,SM=OM||null!==this.gameStrugglingSinceMs&&MM.nowMs-this.gameStrugglingSinceMs>=1e4,jM=this.steppedDownForGameFps?45:24,aM=0===MM.encoderBackpressureDrops&&!rM&&(null===MM.gameFps||MM.gameFps>=jM);return SM?(this.healthySinceMs=null,this.level<zM.length-1&&MM.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=MM.nowMs,this.lastChangeReason=OM?"encoderBackpressure":rM?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):aM&&0!==this.level?(this.healthySinceMs??=MM.nowMs,MM.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=MM.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function mM(MM){return Math.max(2,2*Math.floor(MM/2))}function HM(MM){return Math.ceil(MM.width/16)*Math.ceil(MM.height/16)}function hM(MM,rM,iM){const OM=MM.bitrate*HM(rM)/MM.maxMacroblocks;return iM*Math.min(MM.bitrate,Math.max(MM.minBitrate,OM/iM))}class JM{constructor(MM){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/MM}setMaxFps(MM){this.intervalMs=1e3/MM}shouldKeep(MM){return!(MM<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=MM-this.nextDueMs>this.intervalMs?MM+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const dM=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],yM=["variable","constant"],lM=["realtime","quality"];class EM{constructor(){this.canvas=null,this.context=null}scale(MM,rM){if(MM.displayWidth===rM.width&&MM.displayHeight===rM.height)return MM;return this.contextFor(rM).drawImage(MM,0,0,rM.width,rM.height),new VideoFrame(this.canvas,{timestamp:MM.timestamp,alpha:"discard"})}contextFor(MM){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(MM.width,MM.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===MM.width&&this.canvas.height===MM.height||(this.canvas.width=MM.width,this.canvas.height=MM.height),this.context}}const UM=[...[.7,.6,.5,.42,.35].map((MM=>({width:640,quality:MM}))),{width:480,quality:.35},{width:360,quality:.35}],GM=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class CM{constructor(MM,rM){this.steps=MM,this.targetBytes=rM,this.index=0}get step(){return this.steps[this.index]}record(MM){MM>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):MM<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class eM{constructor(MM){this.post=MM,this.full=new CM(UM,28e3),this.small=new CM(GM,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(MM,rM){if(!(this.failed||this.encoding||MM.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=MM.timestamp;try{const iM=bM(MM,MM.displayWidth,MM.displayHeight,this.full.step.width),OM=bM(iM,iM.width,iM.height,this.small.step.width);this.encoding=!0,this.encode(iM,OM,rM).finally((()=>{this.encoding=!1}))}catch(iM){this.fail(iM)}}}async encode(MM,rM,iM){try{const[OM,SM]=await Promise.all([MM.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),rM.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(OM.size),this.small.record(SM.size);const jM=await OM.arrayBuffer(),aM=SM.size<=8192?await SM.arrayBuffer():null;this.post({type:"still",bytes:jM,small:aM,atMs:iM},null===aM?[jM]:[jM,aM])}catch(OM){this.fail(OM)}}fail(MM){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",MM)}}function bM(MM,rM,iM,OM){const SM=Math.min(OM,rM),jM=Math.max(1,Math.round(iM*SM/rM)),aM=new OffscreenCanvas(SM,jM),PM=aM.getContext("2d");if(null===PM)throw new Error("no 2D context");return PM.drawImage(MM,0,0,SM,jM),aM}let wM=Date.now()-performance.now();function tM(){const MM=performance.now(),rM=Date.now();return Math.abs(rM-(MM+wM))>20&&(wM=rM-MM),MM+wM}function gM(MM){if(!MM)throw new Error("Assertion failed.")}const uM=Math.PI/180,RM=(Math.PI,[1,0,0,0,1,0,0,0,1]),pM=MM=>{const rM=MM*uM,iM=Math.round(Math.cos(rM)),OM=Math.round(Math.sin(rM));return[iM,OM,0,-OM,iM,0,0,0,1]},WM=(MM,rM)=>[1,0,0,0,1,0,MM,rM,1],sM=(MM,rM)=>{const iM=new Array(9);for(let OM=0;OM<3;OM++)for(let SM=0;SM<3;SM++)iM[3*OM+SM]=MM[3*OM]*rM[SM]+MM[3*OM+1]*rM[3+SM]+MM[3*OM+2]*rM[6+SM];return iM},DM=MM=>MM&&MM[MM.length-1],kM=MM=>MM>=0&&MM<2**32,ZM=MM=>{let rM=0;for(;0===MM.readBits(1)&&rM<32;)rM++;if(rM>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<rM)-1+MM.readBits(rM)},oM=MM=>{const rM=ZM(MM);return 0===(1&rM)?-(rM>>1):rM+1>>1},fM=MM=>MM.constructor===Uint8Array?MM:ArrayBuffer.isView(MM)?new Uint8Array(MM.buffer,MM.byteOffset,MM.byteLength):new Uint8Array(MM),YM=MM=>MM.constructor===DataView?MM:ArrayBuffer.isView(MM)?new DataView(MM.buffer,MM.byteOffset,MM.byteLength):new DataView(MM),NM="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let MM=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const rM=new Uint8Array(3*MM.length);let iM=0;for(let OM=0;OM<MM.length;OM++){let SM=MM.charCodeAt(OM);if(SM<128)rM[iM++]=SM;else if(SM<2048)rM[iM++]=192|SM>>6,rM[iM++]=128|63&SM;else if(SM<55296||SM>57343)rM[iM++]=224|SM>>12,rM[iM++]=128|SM>>6&63,rM[iM++]=128|63&SM;else{const jM=OM+1<MM.length?MM.charCodeAt(OM+1):0;SM<56320&&jM>=56320&&jM<=57343?(SM=65536+(SM-55296<<10)+(jM-56320),OM++,rM[iM++]=240|SM>>18,rM[iM++]=128|SM>>12&63,rM[iM++]=128|SM>>6&63,rM[iM++]=128|63&SM):(rM[iM++]=239,rM[iM++]=191,rM[iM++]=189)}}return rM.slice(0,iM)}},AM=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new NM),xM={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},vM={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},FM={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},BM=MM=>!MM||null==MM.primaries&&null==MM.transfer&&null==MM.matrix&&null==MM.fullRange,XM=MM=>MM instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&MM instanceof SharedArrayBuffer||ArrayBuffer.isView(MM);class IM{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let MM;const rM=new Promise((rM=>{let iM=!1;MM=()=>{iM||(rM(),this.pending--,iM=!0)}})),iM=this.currentPromise;return this.currentPromise=rM,this.pending++,await iM,MM}}const KM=()=>{let MM,rM;return{promise:new Promise(((iM,OM)=>{MM=iM,rM=OM})),resolve:MM,reject:rM}},qM=MM=>{throw new Error(`Unexpected value: ${MM}`)},TM=(MM,rM,iM,OM)=>{iM>>>=0,iM&=16777215,OM?(MM.setUint8(rM,255&iM),MM.setUint8(rM+1,iM>>>8&255),MM.setUint8(rM+2,iM>>>16&255)):(MM.setUint8(rM,iM>>>16&255),MM.setUint8(rM+1,iM>>>8&255),MM.setUint8(rM+2,255&iM))},VM="und",cM=MM=>{let rM=0;for(;0!==MM;)MM&=MM-1,rM++;return rM},Mr=/^[a-z]{3}$/,rr=1e6*(1+Number.EPSILON);const ir=(async()=>{})().constructor,Or=MM=>MM instanceof ir||MM instanceof Promise||"function"===typeof MM?.then,Sr=function*(MM){for(const rM in MM){const iM=MM[rM];void 0!==iM&&(yield{key:rM,value:iM})}},jr=MM=>"number"===typeof MM&&!Number.isNaN(MM),ar=MM=>{gM(Number.isInteger(MM.num)),gM(Number.isInteger(MM.den)),gM(0!==MM.den);let rM=Math.abs(MM.num),iM=Math.abs(MM.den);for(;0!==iM;){const MM=rM%iM;rM=iM,iM=MM}const OM=rM||1;return{num:MM.num/OM,den:MM.den/OM}};new Map,new Map;const Pr=MM=>Array.isArray(MM)?MM:[MM];class nr{constructor(){this._listeners=new Map}on(MM,rM,iM){this._listeners.has(MM)||this._listeners.set(MM,new Set);const OM={jL:rM,once:iM?.once??!1};return this._listeners.get(MM).add(OM),()=>{this._listeners.get(MM)?.delete(OM)}}_emit(){for(var MM=arguments.length,rM=new Array(MM),iM=0;iM<MM;iM++)rM[iM]=arguments[iM];const[OM,SM]=rM,jM=this._listeners.get(OM);if(jM)for(const PM of jM){try{PM.jL(SM)}catch(aM){console.error(aM)}PM.once&&jM.delete(PM)}}}const Qr=MM=>null!==MM&&"object"===typeof MM&&Object.getPrototypeOf(MM)===Object.prototype&&Object.values(MM).every((MM=>"string"===typeof MM));class zr{constructor(MM,rM){if(this.data=MM,this.mimeType=rM,!(MM instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof rM)throw new TypeError("mimeType must be a string.")}}class Lr{constructor(MM,rM,iM,OM){if(this.data=MM,this.mimeType=rM,this.name=iM,this.description=OM,!(MM instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==rM&&"string"!==typeof rM)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==iM&&"string"!==typeof iM)throw new TypeError("name, when provided, must be a string.");if(void 0!==OM&&"string"!==typeof OM)throw new TypeError("description, when provided, must be a string.")}}class mr{constructor(MM){this.bytes=MM,this.pos=0}seekToByte(MM){this.pos=8*MM}readBit(){const MM=Math.floor(this.pos/8),rM=this.bytes[MM]??0,iM=7-(7&this.pos),OM=(rM&1<<iM)>>iM;return this.pos++,OM}readBits(MM){if(1===MM)return this.readBit();let rM=0;for(let iM=0;iM<MM;iM++)rM<<=1,rM|=this.readBit();return rM}writeBits(MM,rM){const iM=this.pos+MM;for(let OM=this.pos;OM<iM;OM++){const MM=Math.floor(OM/8);let SM=this.bytes[MM];const jM=7-(7&OM);SM&=~(1<<jM),SM|=(rM&1<<iM-OM-1)>>iM-OM-1<<jM,this.bytes[MM]=SM}this.pos=iM}copyBits(MM,rM){let iM=0;for(;iM<MM-7;iM+=8)this.writeBits(8,rM.readBits(8));const OM=MM-iM;OM>0&&this.writeBits(OM,rM.readBits(OM))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const MM=this.pos/8,rM=this.bytes[MM]??0;return this.pos+=8,rM}skipBits(MM){this.pos+=MM}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const MM=new mr(this.bytes);return MM.pos=this.pos,MM}}const Hr=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],hr=[-1,1,2,3,4,5,6,8],Jr=MM=>{const rM=5===MM.objectType||29===MM.objectType,iM=29===MM.objectType,OM=rM?MM.outputSampleRate/2:MM.outputSampleRate,SM=iM?1:MM.outputNumberOfChannels,jM=hr.indexOf(SM);if(-1===jM)throw new TypeError(`Unsupported number of channels: ${MM.outputNumberOfChannels}`);let aM=16;MM.objectType>=32&&(aM+=6),15===lr(OM)&&(aM+=24),rM&&(aM+=9,15===lr(MM.outputSampleRate)&&(aM+=24));const PM=Math.ceil(aM/8),nM=new Uint8Array(PM),QM=new mr(nM);return dr(QM,MM.objectType),yr(QM,OM),QM.writeBits(4,jM),rM&&(yr(QM,MM.outputSampleRate),dr(QM,2)),QM.writeBits(3,0),nM},dr=(MM,rM)=>{rM<32?MM.writeBits(5,rM):(MM.writeBits(5,31),MM.writeBits(6,rM-32))},yr=(MM,rM)=>{const iM=lr(rM);MM.writeBits(4,iM),15===iM&&MM.writeBits(24,rM)},lr=MM=>{const rM=Hr.indexOf(MM);return-1===rM?15:rM};var Er;!function(MM){MM[MM.Silent=0]="Silent",MM[MM.Errors=1]="Errors",MM[MM.Warnings=2]="Warnings",MM[MM.Info=3]="Info"}(Er||(Er={}));class Ur{constructor(){}static get level(){return Ur._level}static set level(MM){if(MM!==Er.Silent&&MM!==Er.Errors&&MM!==Er.Warnings&&MM!==Er.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");Ur._level=MM}static get _emitter(){return Ur._emitterInstance??=new nr}static on(MM,rM,iM){return Ur._emitter.on(MM,rM,iM)}static _error(){for(var MM=arguments.length,rM=new Array(MM),iM=0;iM<MM;iM++)rM[iM]=arguments[iM];Ur._emitter._emit("error",rM),Ur._level>=Er.Errors&&console.error(...rM)}static _warn(){for(var MM=arguments.length,rM=new Array(MM),iM=0;iM<MM;iM++)rM[iM]=arguments[iM];Ur._emitter._emit("warn",rM),Ur._level>=Er.Warnings&&console.warn(...rM)}static _info(){for(var MM=arguments.length,rM=new Array(MM),iM=0;iM<MM;iM++)rM[iM]=arguments[iM];Ur._emitter._emit("info",rM),Ur._level>=Er.Info&&console.info(...rM)}}Ur._level=Er.Info,Ur._emitterInstance=null;const Gr=[48e3,44100,32e3],Cr=[24e3,22050,16e3],er="Mediabunny v1.61.3";var br,wr;!function(MM){MM[MM.NON_IDR_SLICE=1]="NON_IDR_SLICE",MM[MM.SLICE_DPA=2]="SLICE_DPA",MM[MM.SLICE_DPB=3]="SLICE_DPB",MM[MM.SLICE_DPC=4]="SLICE_DPC",MM[MM.IDR=5]="IDR",MM[MM.SEI=6]="SEI",MM[MM.SPS=7]="SPS",MM[MM.PPS=8]="PPS",MM[MM.AUD=9]="AUD",MM[MM.SPS_EXT=13]="SPS_EXT"}(br||(br={})),function(MM){MM[MM.RASL_N=8]="RASL_N",MM[MM.RASL_R=9]="RASL_R",MM[MM.BLA_W_LP=16]="BLA_W_LP",MM[MM.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",MM[MM.VPS_NUT=32]="VPS_NUT",MM[MM.SPS_NUT=33]="SPS_NUT",MM[MM.PPS_NUT=34]="PPS_NUT",MM[MM.AUD_NUT=35]="AUD_NUT",MM[MM.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",MM[MM.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(wr||(wr={}));const tr=function*(MM){let rM=0,iM=-1;for(;rM<MM.length-2;){const OM=MM.indexOf(0,rM);if(-1===OM||OM>=MM.length-2)break;rM=OM;let SM=0;rM+3<MM.length&&0===MM[rM+1]&&0===MM[rM+2]&&1===MM[rM+3]?SM=4:0===MM[rM+1]&&1===MM[rM+2]&&(SM=3),0!==SM?(-1!==iM&&rM>iM&&(yield{offset:iM,length:rM-iM}),iM=rM+SM,rM=iM):rM++}-1!==iM&&iM<MM.length&&(yield{offset:iM,length:MM.length-iM})},gr=MM=>31&MM,ur=MM=>{const rM=[],iM=MM.length;for(let OM=0;OM<iM;OM++)OM+2<iM&&0===MM[OM]&&0===MM[OM+1]&&3===MM[OM+2]?(rM.push(0,0),OM+=2):rM.push(MM[OM]);return new Uint8Array(rM)},Rr=(new Uint8Array([0,0,0,1]),(MM,rM)=>{const iM=MM.reduce(((MM,iM)=>MM+rM+iM.byteLength),0),OM=new Uint8Array(iM);let SM=0;for(const jM of MM){const MM=new DataView(OM.buffer,OM.byteOffset,OM.byteLength);switch(rM){case 1:MM.setUint8(SM,jM.byteLength);break;case 2:MM.setUint16(SM,jM.byteLength,!1);break;case 3:TM(MM,SM,jM.byteLength,!1);break;case 4:MM.setUint32(SM,jM.byteLength,!1)}SM+=rM,OM.set(jM,SM),SM+=jM.byteLength}return OM}),pr=MM=>{try{const rM=[],iM=[],OM=[];for(const PM of tr(MM)){const SM=MM.subarray(PM.offset,PM.offset+PM.length),jM=gr(SM[0]);jM===br.SPS?rM.push(SM):jM===br.PPS?iM.push(SM):jM===br.SPS_EXT&&OM.push(SM)}if(0===rM.length)return null;if(0===iM.length)return null;const SM=rM[0],jM=sr(SM);gM(null!==jM);const aM=100===jM.profileIdc||110===jM.profileIdc||122===jM.profileIdc||144===jM.profileIdc;return{configurationVersion:1,avcProfileIndication:jM.profileIdc,profileCompatibility:jM.constraintFlags,avcLevelIndication:jM.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:rM,pictureParameterSets:iM,chromaFormat:aM?jM.chromaFormatIdc:null,bitDepthLumaMinus8:aM?jM.bitDepthLumaMinus8:null,bitDepthChromaMinus8:aM?jM.bitDepthChromaMinus8:null,sequenceParameterSetExt:aM?OM:null}}catch(rM){return Ur._error("Error building AVC Decoder Configuration Record:",rM),null}},Wr={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},sr=MM=>{try{const rM=ur(MM),iM=new mr(rM);iM.skipBits(1),iM.skipBits(2);if(7!==iM.readBits(5))return null;const OM=iM.readAlignedByte(),SM=iM.readAlignedByte(),jM=iM.readAlignedByte();ZM(iM);let aM=1,PM=0,nM=0,QM=0;if(100===OM||110===OM||122===OM||244===OM||44===OM||83===OM||86===OM||118===OM||128===OM){aM=ZM(iM),3===aM&&(QM=iM.readBits(1)),PM=ZM(iM),nM=ZM(iM),iM.skipBits(1);if(iM.readBits(1))for(let MM=0;MM<(3!==aM?8:12);MM++){if(iM.readBits(1)){const rM=MM<6?16:64;let OM=8,SM=8;for(let MM=0;MM<rM;MM++){if(0!==SM){SM=(OM+oM(iM)+256)%256}OM=0===SM?OM:SM}}}}ZM(iM);const zM=ZM(iM);if(0===zM)ZM(iM);else if(1===zM){iM.skipBits(1),oM(iM),oM(iM);const MM=ZM(iM);for(let rM=0;rM<MM;rM++)oM(iM)}ZM(iM),iM.skipBits(1);const LM=ZM(iM),mM=ZM(iM),HM=16*(LM+1),hM=16*(mM+1);let JM=HM,dM=hM;const yM=iM.readBits(1);yM||iM.skipBits(1),iM.skipBits(1);if(iM.readBits(1)){const MM=ZM(iM),rM=ZM(iM),OM=ZM(iM),SM=ZM(iM);let jM,PM;if(0===(0===QM?aM:0))jM=1,PM=2-yM;else{jM=3===aM?1:2,PM=(1===aM?2:1)*(2-yM)}JM-=jM*(MM+rM),dM-=PM*(OM+SM)}let lM=2,EM=2,UM=2,GM=0,CM={num:1,den:1},eM=null,bM=null,wM=null,tM=null;const uM=iM.pos;if(iM.readBits(1)){if(iM.readBits(1)){const MM=iM.readBits(8);if(255===MM)CM={num:iM.readBits(16),den:iM.readBits(16)};else{const rM=Wr[MM];rM&&(CM=rM)}}iM.readBits(1)&&iM.skipBits(1);if(iM.readBits(1)){iM.skipBits(3),GM=iM.readBits(1);iM.readBits(1)&&(lM=iM.readBits(8),EM=iM.readBits(8),UM=iM.readBits(8))}iM.readBits(1)&&(ZM(iM),ZM(iM));iM.readBits(1)&&(iM.skipBits(32),iM.skipBits(32),iM.skipBits(1));const MM=iM.readBits(1);MM&&Dr(iM);const rM=iM.readBits(1);rM&&Dr(iM),(MM||rM)&&iM.skipBits(1),iM.skipBits(1),wM=iM.pos,tM=iM.readBits(1),tM&&(iM.skipBits(1),ZM(iM),ZM(iM),ZM(iM),ZM(iM),eM=ZM(iM),bM=ZM(iM))}if(null===eM){gM(null===bM);if(44!==OM&&86!==OM&&100!==OM&&110!==OM&&122!==OM&&244!==OM||!(16&SM)){const MM=LM+1,rM=(2-yM)*(mM+1),iM=mi.find((MM=>MM.level>=jM))??DM(mi),OM=Math.min(Math.floor(iM.maxDpbMbs/(MM*rM)),16);eM=OM,bM=OM}else eM=0,bM=0}return gM(null!==bM),{emulationUnpreventedBytes:rM,profileIdc:OM,constraintFlags:SM,levelIdc:jM,frameMbsOnlyFlag:yM,chromaFormatIdc:aM,bitDepthLumaMinus8:PM,bitDepthChromaMinus8:nM,codedWidth:HM,codedHeight:hM,displayWidth:JM,displayHeight:dM,pixelAspectRatio:CM,colourPrimaries:lM,matrixCoefficients:UM,transferCharacteristics:EM,fullRangeFlag:GM,numReorderFrames:eM,maxDecFrameBuffering:bM,vuiParametersFlagBitOffset:uM,bitstreamRestrictionFlagBitOffset:wM,bitstreamRestrictionFlag:tM}}catch(rM){return Ur._error("Error parsing AVC SPS:",rM),null}},Dr=MM=>{const rM=ZM(MM);MM.skipBits(4),MM.skipBits(4);for(let iM=0;iM<=rM;iM++)ZM(MM),ZM(MM),MM.skipBits(1);MM.skipBits(5),MM.skipBits(5),MM.skipBits(5),MM.skipBits(5)},kr=MM=>MM>>1&63,Zr=MM=>{try{const rM=[],iM=[],OM=[],SM=[];for(const nM of tr(MM)){const jM=MM.subarray(nM.offset,nM.offset+nM.length),aM=kr(jM[0]);aM===wr.VPS_NUT?rM.push(jM):aM===wr.SPS_NUT?iM.push(jM):aM===wr.PPS_NUT?OM.push(jM):aM!==wr.PREFIX_SEI_NUT&&aM!==wr.SUFFIX_SEI_NUT||SM.push(jM)}if(0===iM.length||0===OM.length)return null;const jM=(MM=>{try{const rM=new mr(ur(MM));rM.skipBits(16),rM.readBits(4);const iM=rM.readBits(3),OM=rM.readBits(1),{general_profile_space:SM,general_tier_flag:jM,general_profile_idc:aM,general_profile_compatibility_flags:PM,general_constraint_indicator_flags:nM,general_level_idc:QM}=or(rM,iM);ZM(rM);const zM=ZM(rM);let LM=0;3===zM&&(LM=rM.readBits(1));const mM=ZM(rM),HM=ZM(rM);let hM=mM,JM=HM;if(rM.readBits(1)){const MM=ZM(rM),iM=ZM(rM),OM=ZM(rM),SM=ZM(rM);let jM=1,aM=1;const PM=0===LM?zM:0;1===PM?(jM=2,aM=2):2===PM&&(jM=2,aM=1),hM-=(MM+iM)*jM,JM-=(OM+SM)*aM}const dM=ZM(rM),yM=ZM(rM);ZM(rM);const lM=rM.readBits(1);let EM=0;for(let MM=lM?0:iM;MM<=iM;MM++)ZM(rM),EM=ZM(rM),ZM(rM);ZM(rM),ZM(rM),ZM(rM),ZM(rM),ZM(rM),ZM(rM),rM.readBits(1)&&rM.readBits(1)&&fr(rM),rM.skipBits(1),rM.skipBits(1),rM.readBits(1)&&(rM.skipBits(4),rM.skipBits(4),ZM(rM),ZM(rM),rM.skipBits(1));const UM=ZM(rM);if(Yr(rM,UM),rM.readBits(1)){const MM=ZM(rM);for(let iM=0;iM<MM;iM++)ZM(rM),rM.skipBits(1)}rM.skipBits(1),rM.skipBits(1);let GM=2,CM=2,eM=2,bM=0,wM=0,tM={num:1,den:1};if(rM.readBits(1)){const MM=Ar(rM,iM);tM=MM.pixelAspectRatio,GM=MM.colourPrimaries,CM=MM.transferCharacteristics,eM=MM.matrixCoefficients,bM=MM.fullRangeFlag,wM=MM.minSpatialSegmentationIdc}return{displayWidth:hM,displayHeight:JM,pixelAspectRatio:tM,colourPrimaries:GM,transferCharacteristics:CM,matrixCoefficients:eM,fullRangeFlag:bM,maxDecFrameBuffering:EM+1,spsMaxSubLayersMinus1:iM,spsTemporalIdNestingFlag:OM,generalProfileSpace:SM,generalTierFlag:jM,generalProfileIdc:aM,generalProfileCompatibilityFlags:PM,generalConstraintIndicatorFlags:nM,generalLevelIdc:QM,chromaFormatIdc:zM,bitDepthLumaMinus8:dM,bitDepthChromaMinus8:yM,minSpatialSegmentationIdc:wM}}catch(rM){return Ur._error("Error parsing HEVC SPS:",rM),null}})(iM[0]);if(!jM)return null;let aM=0;if(OM.length>0){const MM=OM[0],rM=new mr(ur(MM));rM.skipBits(16),ZM(rM),ZM(rM),rM.skipBits(1),rM.skipBits(1),rM.skipBits(3),rM.skipBits(1),rM.skipBits(1),ZM(rM),ZM(rM),oM(rM),rM.skipBits(1),rM.skipBits(1),rM.readBits(1)&&ZM(rM),oM(rM),oM(rM),rM.skipBits(1),rM.skipBits(1),rM.skipBits(1),rM.skipBits(1);const iM=rM.readBits(1),SM=rM.readBits(1);aM=iM||SM?iM&&!SM?2:!iM&&SM?3:0:0}const PM=[...rM.length?[{arrayCompleteness:1,nalUnitType:wr.VPS_NUT,nalUnits:rM}]:[],...iM.length?[{arrayCompleteness:1,nalUnitType:wr.SPS_NUT,nalUnits:iM}]:[],...OM.length?[{arrayCompleteness:1,nalUnitType:wr.PPS_NUT,nalUnits:OM}]:[],...SM.length?[{arrayCompleteness:1,nalUnitType:kr(SM[0][0]),nalUnits:SM}]:[]];return{configurationVersion:1,generalProfileSpace:jM.generalProfileSpace,generalTierFlag:jM.generalTierFlag,generalProfileIdc:jM.generalProfileIdc,generalProfileCompatibilityFlags:jM.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:jM.generalConstraintIndicatorFlags,generalLevelIdc:jM.generalLevelIdc,minSpatialSegmentationIdc:jM.minSpatialSegmentationIdc,parallelismType:aM,chromaFormatIdc:jM.chromaFormatIdc,bitDepthLumaMinus8:jM.bitDepthLumaMinus8,bitDepthChromaMinus8:jM.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:jM.spsMaxSubLayersMinus1+1,temporalIdNested:jM.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:PM}}catch(rM){return Ur._error("Error building HEVC Decoder Configuration Record:",rM),null}},or=(MM,rM)=>{const iM=MM.readBits(2),OM=MM.readBits(1),SM=MM.readBits(5);let jM=0;for(let zM=0;zM<32;zM++)jM=jM<<1|MM.readBits(1);const aM=new Uint8Array(6);for(let zM=0;zM<6;zM++)aM[zM]=MM.readBits(8);const PM=MM.readBits(8),nM=[],QM=[];for(let zM=0;zM<rM;zM++)nM.push(MM.readBits(1)),QM.push(MM.readBits(1));if(rM>0)for(let zM=rM;zM<8;zM++)MM.skipBits(2);for(let zM=0;zM<rM;zM++)nM[zM]&&MM.skipBits(88),QM[zM]&&MM.skipBits(8);return{general_profile_space:iM,general_tier_flag:OM,general_profile_idc:SM,general_profile_compatibility_flags:jM,general_constraint_indicator_flags:aM,general_level_idc:PM}},fr=MM=>{for(let rM=0;rM<4;rM++)for(let iM=0;iM<(3===rM?2:6);iM++){if(MM.readBits(1)){const iM=Math.min(64,1<<4+(rM<<1));rM>1&&oM(MM);for(let rM=0;rM<iM;rM++)oM(MM)}else ZM(MM)}},Yr=(MM,rM)=>{const iM=[];for(let OM=0;OM<rM;OM++)iM[OM]=Nr(MM,OM,rM,iM)},Nr=(MM,rM,iM,OM)=>{let SM=0,jM=0,aM=0;if(0!==rM&&(jM=MM.readBits(1)),jM){if(rM===iM){aM=rM-(ZM(MM)+1)}else aM=rM-1;MM.readBits(1),ZM(MM);const jM=OM[aM]??0;for(let rM=0;rM<=jM;rM++){MM.readBits(1)||MM.readBits(1)}SM=OM[aM]}else{const rM=ZM(MM),iM=ZM(MM);for(let OM=0;OM<rM;OM++)ZM(MM),MM.readBits(1);for(let OM=0;OM<iM;OM++)ZM(MM),MM.readBits(1);SM=rM+iM}return SM},Ar=(MM,rM)=>{let iM=2,OM=2,SM=2,jM=0,aM=0,PM={num:1,den:1};if(MM.readBits(1)){const rM=MM.readBits(8);if(255===rM)PM={num:MM.readBits(16),den:MM.readBits(16)};else{const MM=Wr[rM];MM&&(PM=MM)}}return MM.readBits(1)&&MM.readBits(1),MM.readBits(1)&&(MM.readBits(3),jM=MM.readBits(1),MM.readBits(1)&&(iM=MM.readBits(8),OM=MM.readBits(8),SM=MM.readBits(8))),MM.readBits(1)&&(ZM(MM),ZM(MM)),MM.readBits(1),MM.readBits(1),MM.readBits(1),MM.readBits(1)&&(ZM(MM),ZM(MM),ZM(MM),ZM(MM)),MM.readBits(1)&&(MM.readBits(32),MM.readBits(32),MM.readBits(1)&&ZM(MM),MM.readBits(1)&&xr(MM,!0,rM)),MM.readBits(1)&&(MM.readBits(1),MM.readBits(1),MM.readBits(1),aM=ZM(MM),ZM(MM),ZM(MM),ZM(MM),ZM(MM)),{pixelAspectRatio:PM,colourPrimaries:iM,transferCharacteristics:OM,matrixCoefficients:SM,fullRangeFlag:jM,minSpatialSegmentationIdc:aM}},xr=(MM,rM,iM)=>{let OM=!1,SM=!1,jM=!1;rM&&(OM=1===MM.readBits(1),SM=1===MM.readBits(1),(OM||SM)&&(jM=1===MM.readBits(1),jM&&(MM.readBits(8),MM.readBits(5),MM.readBits(1),MM.readBits(5)),MM.readBits(4),MM.readBits(4),jM&&MM.readBits(4),MM.readBits(5),MM.readBits(5),MM.readBits(5)));for(let aM=0;aM<=iM;aM++){let rM=!0;1===MM.readBits(1)||(rM=1===MM.readBits(1));let iM=!1;rM?ZM(MM):iM=1===MM.readBits(1);let aM=1;if(!iM){aM=ZM(MM)+1}OM&&vr(MM,aM,jM),SM&&vr(MM,aM,jM)}},vr=(MM,rM,iM)=>{for(let OM=0;OM<rM;OM++)ZM(MM),ZM(MM),iM&&(ZM(MM),ZM(MM)),MM.readBits(1)};var Fr;!function(MM){MM[MM.audAllowed=0]="audAllowed",MM[MM.beforeFirstVcl=1]="beforeFirstVcl",MM[MM.afterFirstVcl=2]="afterFirstVcl",MM[MM.eoBitstreamAllowed=3]="eoBitstreamAllowed",MM[MM.noMoreDataAllowed=4]="noMoreDataAllowed"}(Fr||(Fr={}));const Br=MM=>{const rM=YM(MM),iM=rM.getUint8(9),OM=rM.getUint16(10,!0),SM=rM.getUint32(12,!0),jM=rM.getInt16(16,!0),aM=rM.getUint8(18);let PM=null;return aM&&(PM=MM.subarray(19,21+iM)),{outputChannelCount:iM,preSkip:OM,inputSampleRate:SM,outputGain:jM,channelMappingFamily:aM,channelMappingTable:PM}};var Xr;!function(MM){MM[MM.STREAMINFO=0]="STREAMINFO",MM[MM.VORBIS_COMMENT=4]="VORBIS_COMMENT",MM[MM.PICTURE=6]="PICTURE"}(Xr||(Xr={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const Ir=[1,2,3,6],Kr=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],qr=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],Tr=[16,16,20,20,0,24,24,0],Vr=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],cr=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Mi=[32e3,44100,48e3,0],ri=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],ii=[512,1024,2048,4096],Oi=MM=>{const rM=Si(MM),iM=YM(MM);let OM=rM?4*Math.ceil(rM.frameSize/4):0,SM=null;for(;OM+4<=MM.length&&1683496997===iM.getUint32(OM);){const rM=ji(MM.subarray(OM));if(!rM)break;SM??=rM,OM+=rM.frameSize}if(rM)return{frameSize:SM?OM:rM.frameSize,sampleRate:rM.sampleRate,numberOfChannels:rM.numberOfChannels,sampleCount:rM.sampleCount,channelLayout:rM.channelLayout,pcmResolution:rM.pcmResolution,bitRate:rM.bitRate,core:rM,hasExtensions:null!==SM};if(!SM?.asset)return null;const{asset:jM}=SM;return{frameSize:OM,sampleRate:jM.sampleRate,numberOfChannels:jM.numberOfChannels,sampleCount:jM.sampleCount,channelLayout:jM.channelLayout,pcmResolution:jM.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Si=MM=>{if(MM.length<18)return null;if(127!==MM[0]||254!==MM[1]||128!==MM[2]||1!==MM[3])return null;const rM=new mr(MM);if(rM.skipBits(32),rM.skipBits(1),31!==rM.readBits(5))return null;const iM=rM.readBits(1),OM=rM.readBits(7)+1;if(OM%8!==0)return null;const SM=rM.readBits(14)+1;if(SM<96)return null;const jM=rM.readBits(6);if(jM>=Vr.length)return null;const aM=Kr[rM.readBits(4)];if(0===aM)return null;const PM=qr[rM.readBits(5)];if(0!==rM.readBits(1))return null;rM.skipBits(4),rM.skipBits(5);const nM=rM.readBits(2);if(3===nM)return null;rM.skipBits(1),iM&&rM.skipBits(16),rM.skipBits(7);const QM=Tr[rM.readBits(3)];if(0===QM)return null;const zM=0!==nM;return{frameSize:SM,sampleRate:aM,numberOfChannels:Vr[jM]+(zM?1:0),sampleCount:32*OM,channelLayout:cr[jM]|(zM?8:0),amode:jM,lfePresent:zM,bitRate:PM,pcmResolution:QM}},ji=MM=>{if(MM.length<10)return null;if(100!==MM[0]||88!==MM[1]||32!==MM[2]||37!==MM[3])return null;const rM=new mr(MM);rM.skipBits(32),rM.skipBits(8);const iM=rM.readBits(2),OM=rM.readBits(1),SM=8+4*OM,jM=16+4*OM;rM.skipBits(SM);const aM=rM.readBits(jM)+1,PM={frameSize:aM,asset:null};if(!rM.readBits(1))return PM;const nM=Mi[rM.readBits(2)],QM=512*(rM.readBits(3)+1);rM.readBits(1)&&rM.skipBits(36);const zM=rM.readBits(3)+1,LM=rM.readBits(3)+1,mM=[];for(let yM=0;yM<zM;yM++)mM.push(rM.readBits(iM+1));for(const yM of mM)rM.skipBits(8*cM(yM));if(rM.readBits(1)){rM.skipBits(2);const MM=rM.readBits(2)+1<<2,iM=rM.readBits(2)+1;rM.skipBits(iM*MM)}for(let yM=0;yM<LM;yM++)rM.skipBits(jM);rM.skipBits(9),rM.skipBits(3),rM.readBits(1)&&rM.skipBits(4),rM.readBits(1)&&rM.skipBits(24),rM.readBits(1)&&rM.skipBits(8*(rM.readBits(10)+1));const HM=rM.readBits(5)+1,hM=ri[rM.readBits(4)],JM=rM.readBits(8)+1;let dM=0;if(rM.readBits(1)&&(JM>2&&rM.skipBits(1),JM>6&&rM.skipBits(1),rM.readBits(1))){const MM=rM.readBits(2)+1<<2;dM=rM.readBits(MM)}return 0===nM||rM.getBitsLeft()<0?PM:{frameSize:aM,asset:{sampleRate:hM,numberOfChannels:JM,sampleCount:Math.round(QM*hM/nM),channelLayout:dM,pcmResolution:HM}}},ai=MM=>{const rM=new Uint8Array(20),iM=YM(rM);iM.setUint32(0,MM.sampleRate),iM.setUint32(4,MM.bitRate),iM.setUint32(8,MM.bitRate),rM[12]=MM.pcmResolution;const OM=MM.core&&!MM.hasExtensions?1:0,SM=new mr(rM);return SM.seekToByte(13),SM.writeBits(2,Math.max(ii.indexOf(MM.sampleCount),0)),SM.writeBits(5,OM),SM.writeBits(1,MM.core?.lfePresent?1:0),SM.writeBits(6,MM.core?.amode??0),SM.writeBits(14,MM.core?MM.core.frameSize-1:0),SM.writeBits(1,0),SM.writeBits(3,0),SM.writeBits(16,MM.channelLayout),SM.writeBits(1,0),SM.writeBits(1,0),SM.writeBits(1,0),SM.writeBits(5,0),rM},Pi=["avc","hevc","vp9","av1","vp8","prores"],ni=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Qi=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],zi=[...Qi,...ni],Li=["webvtt"],mi=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Hi=["ap4x","ap4h","apch","apcn","apcs","apco"],Ji=["dtsc","dtsh","dtsl","dtse"],di=MM=>{const rM=MM.split("."),iM=Number(rM[1]),OM=rM[2],SM=(iM<<5)+Number(OM.slice(0,-1)),jM="H"===OM.slice(-1)?1:0,aM=Number(rM[3]);return[129,SM,(jM<<7)+((8===aM?0:1)<<6)+((12===aM?1:0)<<5)+((rM[4]?Number(rM[4]):0)<<4)+((rM[5]?Number(rM[5][0]):1)<<3)+((rM[5]?Number(rM[5][1]):1)<<2)+(rM[5]?Number(rM[5][2]):0),0]},yi=/^pcm-([usf])(\\d+)(be)?$/,li=MM=>{if(gM(ni.includes(MM)),"ulaw"===MM)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===MM)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const rM=yi.exec(MM);let iM;gM(rM),iM="u"===rM[1]?"unsigned":"s"===rM[1]?"signed":"float";return{dataType:iM,sampleSize:Number(rM[2])/8,littleEndian:"be"!==rM[3],silentValue:"pcm-u8"===MM?128:0}},Ei=MM=>MM.startsWith("avc1")||MM.startsWith("avc3")?"avc":MM.startsWith("hev1")||MM.startsWith("hvc1")?"hevc":"vp8"===MM?"vp8":MM.startsWith("vp09")?"vp9":MM.startsWith("av01")?"av1":Hi.includes(MM)?"prores":"mp3"===MM||"mp4a.69"===MM||"mp4a.6B"===MM||"mp4a.6b"===MM||"mp4a.40.34"===MM?"mp3":MM.startsWith("mp4a.40.")||"mp4a.67"===MM?"aac":"opus"===MM||"Opus"===MM?"opus":"vorbis"===MM?"vorbis":"flac"===MM?"flac":"ac-3"===MM||"ac3"===MM?"ac3":"ec-3"===MM||"eac3"===MM?"eac3":Ji.includes(MM)?"dts":"ulaw"===MM?"ulaw":"alaw"===MM?"alaw":yi.test(MM)?MM:"webvtt"===MM?"webvtt":null,Ui=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Hi],Gi=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,Ci=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,ei=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,bi=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,wi=(MM,rM)=>{if(!MM)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof MM)throw new TypeError("Video chunk metadata must be an object.");if(!MM.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof MM.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof MM.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Ui.some((rM=>MM.decoderConfig.codec.startsWith(rM))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(MM.decoderConfig.codedWidth)||MM.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(MM.decoderConfig.codedHeight)||MM.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==MM.decoderConfig.displayAspectWidth&&(!Number.isInteger(MM.decoderConfig.displayAspectWidth)||MM.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==MM.decoderConfig.displayAspectHeight&&(!Number.isInteger(MM.decoderConfig.displayAspectHeight)||MM.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==MM.decoderConfig.displayAspectWidth!==(void 0!==MM.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==MM.decoderConfig.description&&!XM(MM.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==MM.decoderConfig.colorSpace){const{colorSpace:rM}=MM.decoderConfig;if("object"!==typeof rM)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const iM=Object.keys(xM);if(null!=rM.primaries&&!iM.includes(rM.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${iM.join(", ")}.`);const OM=Object.keys(vM);if(null!=rM.transfer&&!OM.includes(rM.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${OM.join(", ")}.`);const SM=Object.keys(FM);if(null!=rM.matrix&&!SM.includes(rM.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${SM.join(", ")}.`);if(null!=rM.fullRange&&"boolean"!==typeof rM.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(MM.decoderConfig.codec.startsWith("avc1")||MM.decoderConfig.codec.startsWith("avc3")){if(!Gi.test(MM.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(MM.decoderConfig.codec.startsWith("hev1")||MM.decoderConfig.codec.startsWith("hvc1")){if(!Ci.test(MM.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(MM.decoderConfig.codec.startsWith("vp8")){if("vp8"!==MM.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(MM.decoderConfig.codec.startsWith("vp09")){if(!ei.test(MM.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(MM.decoderConfig.codec.startsWith("av01")){if(!bi.test(MM.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(Hi.some((rM=>MM.decoderConfig.codec.startsWith(rM)))&&!Hi.some((rM=>MM.decoderConfig.codec===rM)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Hi.join(", ")}.`);if(null!==rM&&Ei(MM.decoderConfig.codec)!==rM)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${MM.decoderConfig.codec}\' does not fit to the track codec \'${rM}\'.`)},ti=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],gi=(MM,rM)=>{if(!MM)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof MM)throw new TypeError("Audio chunk metadata must be an object.");if(!MM.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof MM.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof MM.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!ti.some((rM=>MM.decoderConfig.codec.startsWith(rM))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(MM.decoderConfig.sampleRate)||MM.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(MM.decoderConfig.numberOfChannels)||MM.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==MM.decoderConfig.description&&!XM(MM.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(MM.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==MM.decoderConfig.codec&&"mp4a.6B"!==MM.decoderConfig.codec&&"mp4a.6b"!==MM.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(MM.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(MM.decoderConfig.codec.startsWith("mp3")||MM.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==MM.decoderConfig.codec&&"mp4a.69"!==MM.decoderConfig.codec&&"mp4a.6B"!==MM.decoderConfig.codec&&"mp4a.6b"!==MM.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(MM.decoderConfig.codec.startsWith("opus")){if("opus"!==MM.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(MM.decoderConfig.description&&MM.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(MM.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==MM.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!MM.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(MM.decoderConfig.codec.startsWith("flac")){if("flac"!==MM.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const rM=42;if(!MM.decoderConfig.description||MM.decoderConfig.description.byteLength<rM)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(MM.decoderConfig.codec.startsWith("ac-3")||MM.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==MM.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(MM.decoderConfig.codec.startsWith("ec-3")||MM.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==MM.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(MM.decoderConfig.codec.startsWith("dts")){if(!Ji.includes(MM.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Ji.join(", ")}.`)}else if((MM.decoderConfig.codec.startsWith("pcm")||MM.decoderConfig.codec.startsWith("ulaw")||MM.decoderConfig.codec.startsWith("alaw"))&&!ni.includes(MM.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${ni.join(", ")}).`);if(null!==rM&&Ei(MM.decoderConfig.codec)!==rM)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${MM.decoderConfig.codec}\' does not fit to the track codec \'${rM}\'.`)},ui=MM=>{if(!MM)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof MM)throw new TypeError("Subtitle metadata must be an object.");if(!MM.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof MM.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof MM.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var Ri;!function(MM){MM[MM.FrameCount=1]="FrameCount",MM[MM.FileSize=2]="FileSize",MM[MM.Toc=4]="Toc"}(Ri||(Ri={}));class Wi{constructor(MM,rM,iM,OM,SM){this.bytes=MM,this.view=rM,this.offset=iM,this.start=OM,this.end=SM,this.bufferPos=OM-iM}static tempFromBytes(MM){return new Wi(MM,YM(MM),0,0,MM.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(MM){this.bufferPos=MM-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(MM){this.bufferPos+=MM}slice(MM){let rM=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-MM;if(MM<this.start||MM+rM>this.end)throw new RangeError("Slicing outside of original slice.");return new Wi(this.bytes,this.view,this.offset,MM,MM+rM)}}const si=(MM,rM)=>{if(MM.filePos<MM.start||MM.filePos+rM>MM.end)throw new RangeError(`Tried reading [${MM.filePos}, ${MM.filePos+rM}), but slice is [${MM.start}, ${MM.end}). This is likely an internal error, please report it alongside the file that caused it.`)},Di=(MM,rM)=>{si(MM,rM);const iM=MM.bytes.subarray(MM.bufferPos,MM.bufferPos+rM);return MM.bufferPos+=rM,iM};var ki,Zi;!function(MM){MM[MM.Unsynchronisation=128]="Unsynchronisation",MM[MM.ExtendedHeader=64]="ExtendedHeader",MM[MM.ExperimentalIndicator=32]="ExperimentalIndicator",MM[MM.Footer=16]="Footer"}(ki||(ki={})),function(MM){MM[MM.ISO_8859_1=0]="ISO_8859_1",MM[MM.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",MM[MM.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",MM[MM.UTF_8=3]="UTF_8"}(Zi||(Zi={}));class oi{constructor(MM){this.mutex=new IM,this.trackTimestampInfo=new WeakMap,this.output=MM}onTrackClose(MM){}validateTimestamp(MM,rM,iM){let OM=this.trackTimestampInfo.get(MM);if(OM){if(iM&&(OM.maxTimestampBeforeLastKeyPacket=OM.maxTimestamp),null!==OM.maxTimestampBeforeLastKeyPacket&&rM<OM.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${rM}s, but largest timestamp is ${OM.maxTimestampBeforeLastKeyPacket}s.`);OM.maxTimestamp=Math.max(OM.maxTimestamp,rM)}else{if(!iM)throw new Error("First packet must be a key packet.");OM={maxTimestamp:rM,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(MM,OM)}}}const fi=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const Yi=MM=>{const rM=Math.floor(MM/36e5),iM=Math.floor(MM%36e5/6e4),OM=Math.floor(MM%6e4/1e3),SM=MM%1e3;return rM.toString().padStart(2,"0")+":"+iM.toString().padStart(2,"0")+":"+OM.toString().padStart(2,"0")+"."+SM.toString().padStart(3,"0")};class Ni{constructor(MM){this.writer=MM,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(MM){this.helperView.setUint32(0,MM,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(MM){this.helperView.setUint32(0,Math.floor(MM/2**32),!1),this.helperView.setUint32(4,MM,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(MM){for(let rM=0;rM<MM.length;rM++)this.helperView.setUint8(rM%8,MM.charCodeAt(rM)),rM%8===7&&this.writer.write(this.helper);MM.length%8!==0&&this.writer.write(this.helper.subarray(0,MM.length%8))}writeBox(MM){if(this.offsets.set(MM,this.writer.getPos()),MM.contents&&!MM.children)this.writeBoxHeader(MM,MM.size??MM.contents.byteLength+8),this.writer.write(MM.contents);else{const rM=this.writer.getPos();if(this.writeBoxHeader(MM,0),MM.contents&&this.writer.write(MM.contents),MM.children)for(const SM of MM.children)SM&&this.writeBox(SM);const iM=this.writer.getPos(),OM=MM.size??iM-rM;this.writer.seek(rM),this.writeBoxHeader(MM,OM),this.writer.seek(iM)}}writeBoxHeader(MM,rM){this.writeU32(MM.largeSize?1:rM),this.writeAscii(MM.type),MM.largeSize&&this.writeU64(rM)}measureBoxHeader(MM){return 8+(MM.largeSize?8:0)}patchBox(MM){const rM=this.offsets.get(MM);gM(void 0!==rM);const iM=this.writer.getPos();this.writer.seek(rM),this.writeBox(MM),this.writer.seek(iM)}measureBox(MM){if(MM.contents&&!MM.children){return this.measureBoxHeader(MM)+MM.contents.byteLength}{let rM=this.measureBoxHeader(MM);if(MM.contents&&(rM+=MM.contents.byteLength),MM.children)for(const iM of MM.children)iM&&(rM+=this.measureBox(iM));return rM}}}const Ai=new Uint8Array(8),xi=new DataView(Ai.buffer),vi=MM=>[(MM%256+256)%256],Fi=MM=>(xi.setUint16(0,MM,!1),[Ai[0],Ai[1]]),Bi=MM=>(xi.setInt16(0,MM,!1),[Ai[0],Ai[1]]),Xi=MM=>(xi.setUint32(0,MM,!1),[Ai[1],Ai[2],Ai[3]]),Ii=MM=>(xi.setUint32(0,MM,!1),[Ai[0],Ai[1],Ai[2],Ai[3]]),Ki=MM=>(xi.setInt32(0,MM,!1),[Ai[0],Ai[1],Ai[2],Ai[3]]),qi=MM=>(xi.setUint32(0,Math.floor(MM/2**32),!1),xi.setUint32(4,MM,!1),[Ai[0],Ai[1],Ai[2],Ai[3],Ai[4],Ai[5],Ai[6],Ai[7]]),Ti=MM=>(xi.setInt32(0,Math.floor(MM/2**32),!1),xi.setUint32(4,MM,!1),[Ai[0],Ai[1],Ai[2],Ai[3],Ai[4],Ai[5],Ai[6],Ai[7]]),Vi=MM=>(xi.setInt16(0,256*MM,!1),[Ai[0],Ai[1]]),ci=MM=>(xi.setInt32(0,65536*MM,!1),[Ai[0],Ai[1],Ai[2],Ai[3]]),MO=MM=>(xi.setInt32(0,2**30*MM,!1),[Ai[0],Ai[1],Ai[2],Ai[3]]),rO=(MM,rM)=>{const iM=[];let OM=MM;do{let MM=127&OM;OM>>=7,iM.length>0&&(MM|=128),iM.push(MM),void 0!==rM&&rM--}while(OM>0||rM);return iM.reverse()},iO=function(MM){let rM=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const iM=Array(MM.length).fill(null).map(((rM,iM)=>MM.charCodeAt(iM)));return rM&&iM.push(0),iM},OO=MM=>[ci(MM[0]),ci(MM[1]),MO(MM[2]),ci(MM[3]),ci(MM[4]),MO(MM[5]),ci(MM[6]),ci(MM[7]),MO(MM[8])],SO=(MM,rM,iM)=>({type:MM,contents:rM&&new Uint8Array(rM.flat(10)),children:iM}),jO=(MM,rM,iM,OM,SM)=>SO(MM,[vi(rM),Xi(iM),OM??[]],SM),aO=()=>SO("styp",[iO("iso5"),Ii(0),iO("iso5"),iO("iso6"),iO("mp41"),iO("cmfc"),iO("dash")]),PO=(MM,rM)=>{const iM=Math.max(0,MM.minWrittenTimestamp);let OM=Math.max(0,MM.maxWrittenEndTimestamp-iM);return Number.isFinite(OM)||(OM=0),jO("sidx",1,0,[Ii(1),Ii(oS),qi(YS(iM,oS)),qi(0),Fi(0),Fi(1),Ii(2147483647&rM),Ii(YS(OM,oS)),Ii(0)])},nO=MM=>({type:"mdat",largeSize:MM}),QO=MM=>SO("moov",void 0,[zO(MM.creationTime,MM.trackDatas),...MM.trackDatas.map((rM=>LO(rM,MM.creationTime))),MM.isFragmented?VO(MM.trackDatas):null,mS(MM)]),zO=(MM,rM)=>{const iM=Math.max(0,...rM.map((MM=>Math.max(0,YS(NS(MM),oS)+YS(MM.startTimestampOffset??0,oS))))),OM=Math.max(0,...rM.map((MM=>MM.track.id)))+1,SM=!kM(MM)||!kM(iM),jM=SM?qi:Ii;return jO("mvhd",+SM,0,[jM(MM),jM(MM),Ii(oS),jM(iM),ci(1),Vi(1),Array(10).fill(0),OO(RM),Array(24).fill(0),Ii(OM)])},LO=(MM,rM)=>{const iM=fS(MM),OM=null!==MM.startTimestampOffset&&0!==MM.startTimestampOffset;return SO("trak",void 0,[mO(MM,rM),OM?HO(MM):null,hO(MM,rM),void 0!==iM.name?SO("udta",void 0,[SO("name",[...AM.encode(iM.name)])]):null])},mO=(MM,rM)=>{const iM=Math.max(0,YS(NS(MM),oS)+YS(MM.startTimestampOffset??0,oS)),OM=!kM(rM)||!kM(iM),SM=OM?qi:Ii;let jM;if("video"===MM.type&&MM.track.metadata.transformationMatrix)jM=MM.track.metadata.transformationMatrix;else if("video"===MM.type){const{rotation:rM,flip:iM}=MM.track.metadata;jM=((MM,rM,iM)=>{const[OM,SM,,jM,aM]=MM,PM=Math.abs(OM)*rM+Math.abs(jM)*iM,nM=Math.abs(SM)*rM+Math.abs(aM)*iM;return sM(sM(WM(-rM/2,-iM/2),MM),WM(PM/2,nM/2))})(sM(pM(rM??0),[iM?-1:1,0,0,0,1,0,0,0,1]),MM.info.width,MM.info.height)}else jM=RM;let aM=2;!1!==MM.track.metadata.disposition?.default&&(aM|=1);const PM="video"===MM.type?0:"audio"===MM.type?1:"subtitle"===MM.type?2:qM(MM);return jO("tkhd",+OM,aM,[SM(rM),SM(rM),Ii(MM.track.id),Ii(0),SM(iM),Array(8).fill(0),Fi(0),Fi(PM),Vi("audio"===MM.type?1:0),Fi(0),OO(jM),ci("video"===MM.type?MM.info.width:0),ci("video"===MM.type?MM.info.height:0)])},HO=MM=>{const rM=MM.startTimestampOffset;if(gM(null!==rM),rM>0){const iM=YS(rM,oS),OM=YS(NS(MM),oS),SM=!kM(iM)||!kM(OM),jM=SM?qi:Ii,aM=SM?Ti:Ki;return SO("edts",void 0,[jO("elst",SM?1:0,0,[Ii(2),jM(iM),aM(-1),ci(1),jM(OM),aM(0),ci(1)])])}{const OM=YS(-rM,MM.timescale),SM=Math.max(0,YS(NS(MM),oS)+YS(rM,oS)),jM=!((iM=OM)>=-(2**31)&&iM<2**31)||!kM(SM),aM=jM?qi:Ii,PM=jM?Ti:Ki;return SO("edts",void 0,[jO("elst",jM?1:0,0,[Ii(1),aM(SM),PM(OM),ci(1)])])}var iM},hO=(MM,rM)=>SO("mdia",void 0,[JO(MM,rM),lO(!0,dO[MM.type],yO[MM.type]),EO(MM)]),JO=(MM,rM)=>{const iM=YS(NS(MM),MM.timescale),OM=!kM(rM)||!kM(iM),SM=OM?qi:Ii;return jO("mdhd",+OM,0,[SM(rM),SM(rM),Ii(MM.timescale),SM(iM),Fi(tS(MM.track.metadata.languageCode??VM)),Fi(0)])},dO={video:"vide",audio:"soun",subtitle:"text"},yO={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},lO=function(MM,rM,iM){let OM=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return jO("hdlr",0,0,[MM?iO("mhlr"):Ii(0),iO(rM),iO(OM),Ii(0),Ii(0),iO(iM,!0)])},EO=MM=>SO("minf",void 0,[UO[MM.type](),GO(),bO(MM)]),UO={video:()=>jO("vmhd",0,1,[Fi(0),Fi(0),Fi(0),Fi(0)]),audio:()=>jO("smhd",0,0,[Fi(0),Fi(0)]),subtitle:()=>jO("nmhd",0,0)},GO=()=>SO("dinf",void 0,[CO()]),CO=()=>jO("dref",0,0,[Ii(1)],[eO()]),eO=()=>jO("url ",0,1),bO=MM=>{const rM=MM.compositionTimeOffsetTable.length>1||MM.compositionTimeOffsetTable.some((MM=>0!==MM.sampleCompositionTimeOffset));return SO("stbl",void 0,[wO(MM),FO(MM),rM?qO(MM):null,rM?TO(MM):null,XO(MM),IO(MM),KO(MM),BO(MM)])},wO=MM=>{let rM;if("video"===MM.type)rM=tO(US(MM.track.source._codec,MM.info.decoderConfig.codec),MM);else if("audio"===MM.type){const iM=CS(MM.track.source._codec,MM.info.decoderConfig.codec,MM.muxer.isQuickTime);gM(iM),rM=WO(iM,MM)}else"subtitle"===MM.type&&(rM=vO(bS[MM.track.source._codec],MM));return gM(rM),jO("stsd",0,0,[Ii(1)],[rM])},tO=(MM,rM)=>SO(MM,[Array(6).fill(0),Fi(1),Fi(0),Fi(0),Array(12).fill(0),Fi(rM.info.width),Fi(rM.info.height),Ii(4718592),Ii(4718592),Ii(0),Fi(1),vi(18),iO(er),Array(13).fill(0),Fi(rM.info.hasAlphaChannel?32:24),Bi(65535)],[GS[rM.track.source._codec]?.(rM)??null,uO(rM),BM(rM.info.decoderConfig.colorSpace)?null:RO(rM),gO(rM)]),gO=MM=>0===MM.avgBitrate&&0===MM.maxBitrate?null:SO("btrt",[Ii(0),Ii(MM.maxBitrate),Ii(MM.avgBitrate)]),uO=MM=>MM.info.pixelAspectRatio.num===MM.info.pixelAspectRatio.den?null:SO("pasp",[Ii(MM.info.pixelAspectRatio.num),Ii(MM.info.pixelAspectRatio.den)]),RO=MM=>{const rM=MM.info.decoderConfig.colorSpace;return SO("colr",[iO(MM.muxer.isQuickTime?"nclc":"nclx"),Fi(null!=rM?.primaries?xM[rM.primaries]:2),Fi(null!=rM?.transfer?vM[rM.transfer]:2),Fi(null!=rM?.matrix?FM[rM.matrix]:2),MM.muxer.isQuickTime?[]:vi((rM?.fullRange?1:0)<<7)])},pO=MM=>{if(!MM.info.decoderConfig)return null;const rM=MM.info.decoderConfig,iM=rM.codec.split("."),OM=Number(iM[1]),SM=Number(iM[2]),jM=(Number(iM[3])<<4)+((iM[4]?Number(iM[4]):1)<<1)+(iM[8]?Number(iM[8]):Number(rM.colorSpace?.fullRange??0)),aM=iM[5]?Number(iM[5]):rM.colorSpace?.primaries?xM[rM.colorSpace.primaries]:1,PM=iM[6]?Number(iM[6]):rM.colorSpace?.transfer?vM[rM.colorSpace.transfer]:1,nM=iM[7]?Number(iM[7]):rM.colorSpace?.matrix?FM[rM.colorSpace.matrix]:1;return jO("vpcC",1,0,[vi(OM),vi(SM),vi(jM),vi(aM),vi(PM),vi(nM),Fi(0)])},WO=(MM,rM)=>{let iM,OM=0,SM=16;const jM=ni.includes(rM.track.source._codec);if(jM){const MM=rM.track.source._codec,{sampleSize:iM}=li(MM);SM=8*iM,SM>16&&(OM=1)}if(rM.muxer.isQuickTime&&(OM=1),0===OM)iM=[Array(6).fill(0),Fi(1),Fi(OM),Fi(0),Ii(0),Fi(rM.info.numberOfChannels),Fi(SM),Fi(0),Fi(0),Fi(rM.info.sampleRate<65536?rM.info.sampleRate:0),Fi(0)];else{const MM=jM?0:-2;iM=[Array(6).fill(0),Fi(1),Fi(OM),Fi(0),Ii(0),Fi(rM.info.numberOfChannels),Fi(Math.min(SM,16)),Bi(MM),Fi(0),Fi(rM.info.sampleRate<65536?rM.info.sampleRate:0),Fi(0),jM?[Ii(1),Ii(SM/8),Ii(rM.info.numberOfChannels*SM/8)]:[Ii(0),Ii(0),Ii(0)],Ii(2)]}return SO(MM,iM,[eS(rM.track.source._codec,rM.muxer.isQuickTime)?.(rM)??null,gO(rM)])},sO=MM=>{let rM;switch(MM.track.source._codec){case"aac":rM=64;break;case"mp3":rM=107;break;case"vorbis":rM=221;break;default:throw new Error(`Unhandled audio codec: ${MM.track.source._codec}`)}let iM=[...vi(rM),...vi(21),...Xi(0),...Ii(MM.maxBitrate),...Ii(MM.avgBitrate)];if(MM.info.decoderConfig.description){const rM=fM(MM.info.decoderConfig.description);iM=[...iM,...vi(5),...rO(rM.byteLength),...rM]}return iM=[...Fi(1),...vi(0),...vi(4),...rO(iM.length),...iM,...vi(6),...vi(1),...vi(2)],iM=[...vi(3),...rO(iM.length),...iM],jO("esds",0,0,iM)},DO=MM=>SO("wave",void 0,[kO(MM),ZO(MM),SO("\\0\\0\\0\\0")]),kO=MM=>SO("frma",[iO(CS(MM.track.source._codec,MM.info.decoderConfig.codec,MM.muxer.isQuickTime))]),ZO=MM=>{const{littleEndian:rM}=li(MM.track.source._codec);return SO("enda",[Fi(+rM)])},oO=MM=>{let rM=MM.info.numberOfChannels,iM=3840,OM=MM.info.sampleRate,SM=0,jM=0,aM=new Uint8Array(0);const PM=MM.info.decoderConfig?.description;if(PM){gM(PM.byteLength>=18);const MM=fM(PM),nM=Br(MM);rM=nM.outputChannelCount,iM=nM.preSkip,OM=nM.inputSampleRate,SM=nM.outputGain,jM=nM.channelMappingFamily,nM.channelMappingTable&&(aM=nM.channelMappingTable)}return SO("dOps",[vi(0),vi(rM),Fi(iM),Ii(OM),Bi(SM),vi(jM),...aM])},fO=MM=>{const rM=MM.info.decoderConfig?.description;gM(rM);const iM=fM(rM);return jO("dfLa",0,0,[...iM.subarray(4)])},YO=MM=>{const{littleEndian:rM,sampleSize:iM}=li(MM.track.source._codec);return jO("pcmC",0,0,[vi(+rM),vi(8*iM)])},NO=MM=>{gM(MM.info.primingPacket);const rM=(MM=>{if(MM.length<7)return null;if(11!==MM[0]||119!==MM[1])return null;const rM=new mr(MM);rM.skipBits(16),rM.skipBits(16);const iM=rM.readBits(2);if(3===iM)return null;const OM=rM.readBits(6),SM=rM.readBits(5);if(SM>8)return null;const jM=rM.readBits(3),aM=rM.readBits(3);return 0!==(1&aM)&&1!==aM&&rM.skipBits(2),0!==(4&aM)&&rM.skipBits(2),2===aM&&rM.skipBits(2),{fscod:iM,bsid:SM,bsmod:jM,acmod:aM,lfeon:rM.readBits(1),bitRateCode:Math.floor(OM/2)}})(MM.info.primingPacket.data);if(!rM)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const iM=new Uint8Array(3),OM=new mr(iM);return OM.writeBits(2,rM.fscod),OM.writeBits(5,rM.bsid),OM.writeBits(3,rM.bsmod),OM.writeBits(3,rM.acmod),OM.writeBits(1,rM.lfeon),OM.writeBits(5,rM.bitRateCode),OM.writeBits(5,0),SO("dac3",[...iM])},AO=MM=>{gM(MM.info.primingPacket);const rM=(MM=>{if(MM.length<6)return null;if(11!==MM[0]||119!==MM[1])return null;const rM=new mr(MM);rM.skipBits(16);const iM=rM.readBits(2);if(rM.skipBits(3),0!==iM&&2!==iM)return null;const OM=rM.readBits(11),SM=rM.readBits(2);let jM,aM=0;3===SM?(aM=rM.readBits(2),jM=3):jM=rM.readBits(2);const PM=rM.readBits(3),nM=rM.readBits(1),QM=rM.readBits(5);if(QM<11||QM>16)return null;const zM=Ir[jM];let LM;return LM=SM<3?Gr[SM]/1e3:Cr[aM]/1e3,{dataRate:Math.round((OM+1)*LM/(16*zM)),substreams:[{fscod:SM,fscod2:aM,bsid:QM,bsmod:0,acmod:PM,lfeon:nM,numDepSub:0,chanLoc:0}]}})(MM.info.primingPacket.data);if(!rM)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let iM=16;for(const aM of rM.substreams)iM+=23,aM.numDepSub>0?iM+=9:iM+=1;const OM=Math.ceil(iM/8),SM=new Uint8Array(OM),jM=new mr(SM);jM.writeBits(13,rM.dataRate),jM.writeBits(3,rM.substreams.length-1);for(const aM of rM.substreams)jM.writeBits(2,aM.fscod),jM.writeBits(5,aM.bsid),jM.writeBits(1,0),jM.writeBits(1,0),jM.writeBits(3,aM.bsmod),jM.writeBits(3,aM.acmod),jM.writeBits(1,aM.lfeon),jM.writeBits(3,0),jM.writeBits(4,aM.numDepSub),aM.numDepSub>0?jM.writeBits(9,aM.chanLoc):jM.writeBits(1,0);return SO("dec3",[...SM])},xO=MM=>{gM(MM.info.primingPacket);const rM=Oi(MM.info.primingPacket.data);if(!rM)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return SO("ddts",[...ai(rM)])},vO=(MM,rM)=>SO(MM,[Array(6).fill(0),Fi(1)],[wS[rM.track.source._codec](rM),gO(rM)]),FO=MM=>jO("stts",0,0,[Ii(MM.timeToSampleTable.length),MM.timeToSampleTable.map((MM=>[Ii(MM.sampleCount),Ii(MM.sampleDelta)]))]),BO=MM=>{if(MM.samples.every((MM=>"key"===MM.type)))return null;const rM=[...MM.samples.entries()].filter((MM=>{let[,rM]=MM;return"key"===rM.type}));return jO("stss",0,0,[Ii(rM.length),rM.map((MM=>{let[rM]=MM;return Ii(rM+1)}))])},XO=MM=>jO("stsc",0,0,[Ii(MM.compactlyCodedChunkTable.length),MM.compactlyCodedChunkTable.map((MM=>[Ii(MM.firstChunk),Ii(MM.samplesPerChunk),Ii(1)]))]),IO=MM=>{if("audio"===MM.type&&MM.info.requiresPcmTransformation){const{sampleSize:rM}=li(MM.track.source._codec);return jO("stsz",0,0,[Ii(rM*MM.info.numberOfChannels),Ii(MM.samples.reduce(((rM,iM)=>rM+YS(iM.duration,MM.timescale)),0))])}return jO("stsz",0,0,[Ii(0),Ii(MM.samples.length),MM.samples.map((MM=>Ii(MM.size)))])},KO=MM=>MM.finalizedChunks.length>0&&DM(MM.finalizedChunks).offset>=2**32?jO("co64",0,0,[Ii(MM.finalizedChunks.length),MM.finalizedChunks.map((MM=>qi(MM.offset)))]):jO("stco",0,0,[Ii(MM.finalizedChunks.length),MM.finalizedChunks.map((MM=>Ii(MM.offset)))]),qO=MM=>jO("ctts",1,0,[Ii(MM.compositionTimeOffsetTable.length),MM.compositionTimeOffsetTable.map((MM=>[Ii(MM.sampleCount),Ki(MM.sampleCompositionTimeOffset)]))]),TO=MM=>{let rM=1/0,iM=-1/0,OM=1/0,SM=-1/0;gM(MM.compositionTimeOffsetTable.length>0),gM(MM.samples.length>0);for(let aM=0;aM<MM.compositionTimeOffsetTable.length;aM++){const OM=MM.compositionTimeOffsetTable[aM];rM=Math.min(rM,OM.sampleCompositionTimeOffset),iM=Math.max(iM,OM.sampleCompositionTimeOffset)}for(let aM=0;aM<MM.samples.length;aM++){const rM=MM.samples[aM];OM=Math.min(OM,YS(rM.timestamp,MM.timescale)),SM=Math.max(SM,YS(rM.timestamp+rM.duration,MM.timescale))}const jM=Math.max(-rM,0);return SM>=2**31?null:jO("cslg",0,0,[Ki(jM),Ki(rM),Ki(iM),Ki(OM),Ki(SM)])},VO=MM=>SO("mvex",void 0,MM.map(cO)),cO=MM=>jO("trex",0,0,[Ii(MM.track.id),Ii(1),Ii(0),Ii(0),Ii(0)]),MS=(MM,rM)=>SO("moof",void 0,[rS(MM),...rM.map(OS)]),rS=MM=>jO("mfhd",0,0,[Ii(MM)]),iS=MM=>{let rM=0,iM=0;const OM="delta"===MM.type;return iM|=+OM,rM|=OM?1:2,rM<<24|iM<<16},OS=MM=>SO("traf",void 0,[SS(MM),jS(MM),aS(MM)]),SS=MM=>{gM(MM.currentChunk);let rM=0;rM|=8,rM|=16,rM|=32,rM|=131072;const iM=MM.currentChunk.samples[1]??MM.currentChunk.samples[0],OM={duration:iM.timescaleUnitsToNextSample,size:iM.size,flags:iS(iM)};return jO("tfhd",0,131128,[Ii(MM.track.id),Ii(OM.duration),Ii(OM.size),Ii(OM.flags)])},jS=MM=>(gM(MM.currentChunk),jO("tfdt",1,0,[qi(YS(MM.currentChunk.startTimestamp,MM.timescale))])),aS=MM=>{gM(MM.currentChunk);const rM=MM.currentChunk.samples.map((MM=>MM.timescaleUnitsToNextSample)),iM=MM.currentChunk.samples.map((MM=>MM.size)),OM=MM.currentChunk.samples.map(iS),SM=MM.currentChunk.samples.map((rM=>YS(rM.timestamp-rM.decodeTimestamp,MM.timescale))),jM=new Set(rM),aM=new Set(iM),PM=new Set(OM),nM=new Set(SM),QM=2===PM.size&&OM[0]!==OM[1],zM=jM.size>1,LM=aM.size>1,mM=!QM&&PM.size>1,HM=nM.size>1||[...nM].some((MM=>0!==MM));let hM=0;return hM|=1,hM|=4*+QM,hM|=256*+zM,hM|=512*+LM,hM|=1024*+mM,hM|=2048*+HM,jO("trun",1,hM,[Ii(MM.currentChunk.samples.length),Ii(MM.currentChunk.offset-MM.currentChunk.moofOffset||0),QM?Ii(OM[0]):[],MM.currentChunk.samples.map(((MM,jM)=>[zM?Ii(rM[jM]):[],LM?Ii(iM[jM]):[],mM?Ii(OM[jM]):[],HM?Ki(SM[jM]):[]]))])},PS=MM=>jO("tfra",1,0,[Ii(MM.track.id),Ii(63),Ii(MM.finalizedChunks.length),MM.finalizedChunks.map((rM=>[qi(YS(rM.samples[0].timestamp,MM.timescale)),qi(rM.moofOffset),Ii(rM.trafIndex+1),Ii(1),Ii(1)]))]),nS=()=>jO("mfro",0,0,[Ii(0)]),QS=()=>SO("vtte"),zS=(MM,rM,iM,OM,SM)=>SO("vttc",void 0,[null!==SM?SO("vsid",[Ki(SM)]):null,null!==iM?SO("iden",[...AM.encode(iM)]):null,null!==rM?SO("ctim",[...AM.encode(Yi(rM))]):null,null!==OM?SO("sttg",[...AM.encode(OM)]):null,SO("payl",[...AM.encode(MM)])]),LS=MM=>SO("vtta",[...AM.encode(MM)]),mS=MM=>{const rM=[],iM=MM.format._options.metadataFormat??"auto",OM=MM.output._metadataTags;if("mdir"===iM||"auto"===iM&&!MM.isQuickTime){const MM=yS(OM);MM&&rM.push(MM)}else if("mdta"===iM){const MM=lS(OM);MM&&rM.push(MM)}else("udta"===iM||"auto"===iM&&MM.isQuickTime)&&HS(rM,MM.output._metadataTags);return 0===rM.length?null:SO("udta",void 0,rM)},HS=(MM,rM)=>{for(const{key:iM,value:OM}of Sr(rM))switch(iM){case"title":MM.push(hS("\\xa9nam",OM));break;case"description":MM.push(hS("\\xa9des",OM));break;case"artist":MM.push(hS("\\xa9ART",OM));break;case"album":MM.push(hS("\\xa9alb",OM));break;case"albumArtist":MM.push(hS("albr",OM));break;case"genre":MM.push(hS("\\xa9gen",OM));break;case"date":MM.push(hS("\\xa9day",OM.toISOString().slice(0,10)));break;case"comment":MM.push(hS("\\xa9cmt",OM));break;case"lyrics":MM.push(hS("\\xa9lyr",OM));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:qM(iM)}if(rM.raw)for(const iM in rM.raw){const OM=rM.raw[iM];null==OM||4!==iM.length||MM.some((MM=>MM.type===iM))||("string"===typeof OM?MM.push(hS(iM,OM)):OM instanceof Uint8Array&&MM.push(SO(iM,Array.from(OM))))}},hS=(MM,rM)=>{const iM=AM.encode(rM);return SO(MM,[Fi(iM.length),Fi(tS("und")),Array.from(iM)])},JS={"image/jpeg":13,"image/png":14,"image/bmp":27},dS=(MM,rM)=>{const iM=[];for(const{key:OM,value:SM}of Sr(MM))switch(OM){case"title":iM.push({key:rM?"title":"\\xa9nam",value:ES(SM)});break;case"description":iM.push({key:rM?"description":"\\xa9des",value:ES(SM)});break;case"artist":iM.push({key:rM?"artist":"\\xa9ART",value:ES(SM)});break;case"album":iM.push({key:rM?"album":"\\xa9alb",value:ES(SM)});break;case"albumArtist":iM.push({key:rM?"album_artist":"aART",value:ES(SM)});break;case"comment":iM.push({key:rM?"comment":"\\xa9cmt",value:ES(SM)});break;case"genre":iM.push({key:rM?"genre":"\\xa9gen",value:ES(SM)});break;case"beatsPerMinute":rM||iM.push({key:"tmpo",value:SO("data",[Ii(21),Ii(0),Fi(SM)])});break;case"lyrics":iM.push({key:rM?"lyrics":"\\xa9lyr",value:ES(SM)});break;case"date":iM.push({key:rM?"date":"\\xa9day",value:ES(SM.toISOString().slice(0,10))});break;case"images":for(const MM of SM)"coverFront"===MM.kind&&iM.push({key:"covr",value:SO("data",[Ii(JS[MM.mimeType]??0),Ii(0),Array.from(MM.data)])});break;case"trackNumber":if(rM){const rM=void 0!==MM.tracksTotal?`${SM}/${MM.tracksTotal}`:SM.toString();iM.push({key:"track",value:ES(rM)})}else iM.push({key:"trkn",value:SO("data",[Ii(0),Ii(0),Fi(0),Fi(SM),Fi(MM.tracksTotal??0),Fi(0)])});break;case"discNumber":rM||iM.push({key:"disc",value:SO("data",[Ii(0),Ii(0),Fi(0),Fi(SM),Fi(MM.discsTotal??0),Fi(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:qM(OM)}if(MM.raw)for(const OM in MM.raw){const SM=MM.raw[OM];null==SM||!rM&&4!==OM.length||iM.some((MM=>MM.key===OM))||("string"===typeof SM?iM.push({key:OM,value:ES(SM)}):SM instanceof Uint8Array?iM.push({key:OM,value:SO("data",[Ii(0),Ii(0),Array.from(SM)])}):SM instanceof zr&&iM.push({key:OM,value:SO("data",[Ii(JS[SM.mimeType]??0),Ii(0),Array.from(SM.data)])}))}return iM},yS=MM=>{const rM=dS(MM,!1);return 0===rM.length?null:jO("meta",0,0,void 0,[lO(!1,"mdir","","appl"),SO("ilst",void 0,rM.map((MM=>SO(MM.key,void 0,[MM.value]))))])},lS=MM=>{const rM=dS(MM,!0);return 0===rM.length?null:SO("meta",void 0,[lO(!1,"mdta",""),jO("keys",0,0,[Ii(rM.length)],rM.map((MM=>SO("mdta",[...AM.encode(MM.key)])))),SO("ilst",void 0,rM.map(((MM,rM)=>{const iM=String.fromCharCode(...Ii(rM+1));return SO(iM,void 0,[MM.value])})))])},ES=MM=>SO("data",[Ii(1),Ii(0),...AM.encode(MM)]),US=(MM,rM)=>{switch(MM){case"avc":return rM.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return rM}},GS={avc:MM=>MM.info.decoderConfig&&SO("avcC",[...fM(MM.info.decoderConfig.description)]),hevc:MM=>MM.info.decoderConfig&&SO("hvcC",[...fM(MM.info.decoderConfig.description)]),vp8:pO,vp9:pO,av1:MM=>SO("av1C",di(MM.info.decoderConfig.codec)),prores:null},CS=(MM,rM,iM)=>{switch(MM){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return rM}if(iM)switch(MM){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(MM){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},eS=(MM,rM)=>{switch(MM){case"aac":case"mp3":case"vorbis":return sO;case"opus":return oO;case"flac":return fO;case"ac3":return NO;case"eac3":return AO;case"dts":return xO}if(rM)switch(MM){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return DO}else switch(MM){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return YO}return null},bS={webvtt:"wvtt"},wS={webvtt:MM=>SO("vttC",[...AM.encode(MM.info.config.description)])},tS=MM=>{gM(3===MM.length);let rM=0;for(let iM=0;iM<3;iM++)rM<<=5,rM+=MM.charCodeAt(iM)-96;return rM};class gS{constructor(MM,rM){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,MM._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=MM,MM._setMonotonicity(rM),MM._writerAcquired=!0}start(){gM(!this.started),this.target._start(),this.started=!0}write(MM){gM(this.started&&!this.finalized),this.maybeTrackWrites(MM),this.target._write(MM,this.pos),this.pos+=MM.byteLength}seek(MM){this.pos=MM}getPos(){return this.pos}async flush(){return gM(this.started&&!this.finalized),this.target._flush()}async finalize(){gM(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(MM){if(!this.trackedWrites)return;let rM=this.getPos();if(rM<this.trackedStart){if(rM+MM.byteLength<=this.trackedStart)return;MM=MM.subarray(this.trackedStart-rM),rM=0}const iM=rM+MM.byteLength-this.trackedStart;let OM=this.trackedWrites.byteLength;for(;OM<iM;)OM*=2;if(OM!==this.trackedWrites.byteLength){const MM=new Uint8Array(OM);MM.set(this.trackedWrites,0),this.trackedWrites=MM}this.trackedWrites.set(MM,rM-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,rM+MM.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const MM={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,MM}}iM(5);class uS extends nr{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(MM){!1!==this._monotonicity&&(this._monotonicity=MM)}_dispatchWrite(MM,rM){this.onwrite?.(MM,rM),this._emit("write",{start:MM,end:rM})}slice(MM){if(!Number.isInteger(MM)||MM<0)throw new TypeError("offset must be a non-negative integer.");return new DS(this,MM)}}const RS=65536,pS=2**32;class WS extends uS{constructor(){let MM=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!MM||"object"!==typeof MM)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==MM.onFinalize&&"function"!==typeof MM.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=MM,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(RS,{maxByteLength:pS})}catch{this._buffer=new ArrayBuffer(RS),this._supportsResize=!1}else this._buffer=new ArrayBuffer(RS);this._bytes=new Uint8Array(this._buffer)}_ensureSize(MM){let rM=this._buffer.byteLength;for(;rM<MM;)rM*=2;if(rM!==this._buffer.byteLength){if(rM>pS)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(rM);else{const MM=new ArrayBuffer(rM),iM=new Uint8Array(MM);iM.set(this._bytes,0),this._buffer=MM,this._bytes=iM}}}_start(){}_write(MM,rM){this._ensureSize(rM+MM.byteLength),this._bytes.set(MM,rM),this._maxPos=Math.max(this._maxPos,rM+MM.byteLength),this._dispatchWrite(rM,rM+MM.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(MM,rM){return this._bytes.slice(MM,rM)}}class sS extends uS{_start(){}_write(MM,rM){this._dispatchWrite(rM,rM+MM.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class DS extends uS{constructor(MM,rM){super(),this._baseTarget=MM,this._offset=rM}_start(){}_write(MM,rM){this._baseTarget._write(MM,this._offset+rM),this._dispatchWrite(rM,rM+MM.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(MM){super._setMonotonicity(MM),this._baseTarget._setMonotonicity(MM)}}class kS{constructor(MM,rM){if(this.rootPath=MM,this.getTarget=rM,"string"!==typeof MM)throw new TypeError("rootPath must be a string.");if("function"!==typeof rM)throw new TypeError("getTarget must be a function.")}}const ZS=MM=>{const rM=MM.filePos,iM=Di(MM,9),OM=new mr(iM);if(4095!==OM.readBits(12))return null;OM.skipBits(1);if(0!==OM.readBits(2))return null;const SM=OM.readBits(1),jM=OM.readBits(2)+1,aM=OM.readBits(4);if(15===aM)return null;OM.skipBits(1);const PM=OM.readBits(3);if(0===PM)throw new Error("ADTS frames with channel configuration 0 are not supported.");OM.skipBits(1),OM.skipBits(1),OM.skipBits(1),OM.skipBits(1);const nM=OM.readBits(13);OM.skipBits(11);const QM=OM.readBits(2)+1;if(1!==QM)throw new Error("ADTS frames with more than one AAC frame are not supported.");let zM=null;return 1===SM?MM.filePos-=2:zM=OM.readBits(16),{objectType:jM,samplingFrequencyIndex:aM,channelConfiguration:PM,frameLength:nM,numberOfAacFrames:QM,crcCheck:zM,startPos:rM}},oS=57600,fS=MM=>{const rM={},iM=MM.track;return void 0!==iM.metadata.name&&(rM.name=iM.metadata.name),rM},YS=function(MM,rM){const iM=MM*rM;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(iM):iM},NS=MM=>{if(0===MM.samples.length)return 0;let rM=1/0,iM=-1/0;for(let OM=0;OM<MM.samples.length;OM++){const SM=MM.samples[OM];SM.timestamp<rM&&(rM=SM.timestamp),SM.timestamp+SM.duration>iM&&(iM=SM.timestamp+SM.duration)}return rM===1/0?0:iM-rM};class AS extends oi{constructor(MM,rM){super(MM),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new WS,this.auxWriter=new gS(this.auxTarget,!1),this.auxBoxWriter=new Ni(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=KM(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=rM,this.formatOptions={...rM._options},this.isQuickTime=rM instanceof Lj,this.isCmaf=rM instanceof zj,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(rM instanceof zj?1/0:1),this.auxWriter.start()}async start(){const MM=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((MM=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:MM instanceof WS)),this.boxWriter=new Ni(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof WS&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const MM=await this.output._getInitTarget(),rM=new gS(MM,!0);rM.start(),this.initWriter=rM,this.initBoxWriter=new Ni(rM)}const rM=this.output.tracks.some((MM=>MM.isVideoTrack()&&"avc"===MM.source._codec));{const MM=this.initBoxWriter??this.boxWriter;if(gM(MM),this.formatOptions.onFtyp&&MM.writer.startTrackingWrites(),MM.writeBox((MM=>{const rM=512;return MM.isQuickTime?SO("ftyp",[iO("qt  "),Ii(rM),iO("qt  ")]):MM.fragmented?MM.cmaf?SO("ftyp",[iO("iso5"),Ii(rM),iO("iso5"),iO("iso6"),iO("mp41"),iO("cmfc"),iO("dash")]):SO("ftyp",[iO("iso5"),Ii(rM),iO("iso5"),iO("iso6"),iO("mp41")]):SO("ftyp",[iO("isom"),Ii(rM),iO("isom"),MM.holdsAvc?iO("avc1"):[],iO("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:rM,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:rM,start:iM}=MM.writer.stopTrackingWrites();this.formatOptions.onFtyp(rM,iM)}this.ftypSize=MM.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const iM of this.output.tracks)if(void 0===iM.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(gM(this.writer),gM(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=nO(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const iM of this.output.tracks)iM.isVideoTrack()&&iM.metadata.decoderConfig?this.getVideoTrackData(iM,iM.metadata.primingPacket??null,{decoderConfig:iM.metadata.decoderConfig}):iM.isAudioTrack()&&iM.metadata.decoderConfig&&this.getAudioTrackData(iM,iM.metadata.primingPacket??null,{decoderConfig:iM.metadata.decoderConfig});MM()}allTracksAreKnown(){for(const MM of this.output.tracks)if(!MM.source._closed&&!this.trackDatas.some((rM=>rM.track===MM)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const MM=this.trackDatas.map((MM=>{if("video"===MM.type)return MM.info.decoderConfig.codec;if("audio"===MM.type)return MM.info.decoderConfig.codec;return{webvtt:"wvtt"}[MM.track.source._codec]}));return(MM=>{let rM=(MM.hasVideo?"video/":MM.hasAudio?"audio/":"application/")+(MM.isQuickTime?"quicktime":"mp4");MM.codecStrings.length>0&&(rM+=`; codecs="${[...new Set(MM.codecStrings)].join(", ")}"`);return rM})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((MM=>"video"===MM.type)),hasAudio:this.trackDatas.some((MM=>"audio"===MM.type)),codecStrings:MM})}getVideoTrackData(MM,rM,iM){const OM=this.trackDatas.find((rM=>rM.track===MM));if(OM)return OM;wi(iM,MM.source._codec),gM(iM),gM(iM.decoderConfig);const SM={...iM.decoderConfig};gM(void 0!==SM.codedWidth),gM(void 0!==SM.codedHeight);let jM=!1;if("avc"!==MM.source._codec||SM.description){if("hevc"===MM.source._codec&&!SM.description){if(!rM)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const MM=Zr(rM.data);if(!MM)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");SM.description=(MM=>{const rM=[];rM.push(MM.configurationVersion),rM.push((3&MM.generalProfileSpace)<<6|(1&MM.generalTierFlag)<<5|31&MM.generalProfileIdc),rM.push(MM.generalProfileCompatibilityFlags>>>24&255),rM.push(MM.generalProfileCompatibilityFlags>>>16&255),rM.push(MM.generalProfileCompatibilityFlags>>>8&255),rM.push(255&MM.generalProfileCompatibilityFlags),rM.push(...MM.generalConstraintIndicatorFlags),rM.push(255&MM.generalLevelIdc),rM.push(240|MM.minSpatialSegmentationIdc>>8&15),rM.push(255&MM.minSpatialSegmentationIdc),rM.push(252|3&MM.parallelismType),rM.push(252|3&MM.chromaFormatIdc),rM.push(248|7&MM.bitDepthLumaMinus8),rM.push(248|7&MM.bitDepthChromaMinus8),rM.push(MM.avgFrameRate>>8&255),rM.push(255&MM.avgFrameRate),rM.push((3&MM.constantFrameRate)<<6|(7&MM.numTemporalLayers)<<3|(1&MM.temporalIdNested)<<2|3&MM.lengthSizeMinusOne),rM.push(255&MM.arrays.length);for(const iM of MM.arrays){rM.push((1&iM.arrayCompleteness)<<7|63&iM.nalUnitType),rM.push(iM.nalUnits.length>>8&255),rM.push(255&iM.nalUnits.length);for(const MM of iM.nalUnits){rM.push(MM.length>>8&255),rM.push(255&MM.length);for(let iM=0;iM<MM.length;iM++)rM.push(MM[iM])}}return new Uint8Array(rM)})(MM),jM=!0}}else{if(!rM)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const MM=pr(rM.data);if(!MM)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");SM.description=(MM=>{const rM=[];rM.push(MM.configurationVersion),rM.push(MM.avcProfileIndication),rM.push(MM.profileCompatibility),rM.push(MM.avcLevelIndication),rM.push(252|3&MM.lengthSizeMinusOne),rM.push(224|31&MM.sequenceParameterSets.length);for(const iM of MM.sequenceParameterSets){const MM=iM.byteLength;rM.push(MM>>8),rM.push(255&MM);for(let OM=0;OM<MM;OM++)rM.push(iM[OM])}rM.push(MM.pictureParameterSets.length);for(const iM of MM.pictureParameterSets){const MM=iM.byteLength;rM.push(MM>>8),rM.push(255&MM);for(let OM=0;OM<MM;OM++)rM.push(iM[OM])}if((100===MM.avcProfileIndication||110===MM.avcProfileIndication||122===MM.avcProfileIndication||144===MM.avcProfileIndication)&&null!==MM.chromaFormat){gM(null!==MM.bitDepthLumaMinus8),gM(null!==MM.bitDepthChromaMinus8),gM(null!==MM.sequenceParameterSetExt),rM.push(252|3&MM.chromaFormat),rM.push(248|7&MM.bitDepthLumaMinus8),rM.push(248|7&MM.bitDepthChromaMinus8),rM.push(MM.sequenceParameterSetExt.length);for(const iM of MM.sequenceParameterSetExt){const MM=iM.byteLength;rM.push(MM>>8),rM.push(255&MM);for(let OM=0;OM<MM;OM++)rM.push(iM[OM])}}return new Uint8Array(rM)})(MM),jM=!0}const aM=((MM,rM)=>{const iM=MM<0?-1:1;let OM=0,SM=1,jM=1,aM=0,PM=MM=Math.abs(MM);for(;;){const MM=Math.floor(PM),nM=MM*jM+OM,QM=MM*aM+SM;if(QM>rM)return{num:iM*jM,den:aM};if(OM=jM,SM=aM,jM=nM,aM=QM,PM=1/(PM-MM),!isFinite(PM))break}return{num:iM*jM,den:aM}})(1/(MM.metadata.frameRate??oS),1e6).den,PM=SM.displayAspectWidth,nM=SM.displayAspectHeight,QM=void 0===PM||void 0===nM?{num:1,den:1}:ar({num:PM*SM.codedHeight,den:nM*SM.codedWidth}),zM="ap4h"===SM.codec||"ap4x"===SM.codec,LM={muxer:this,track:MM,type:"video",info:{width:SM.codedWidth,height:SM.codedHeight,pixelAspectRatio:QM,decoderConfig:SM,requiresAnnexBTransformation:jM,hasAlphaChannel:zM},timescale:aM,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:MM.source._nominalBitrate??MM.metadata.averageBitrate??0,maxBitrate:MM.source._nominalBitrate??MM.metadata.bitrate??0};return this.trackDatas.push(LM),this.trackDatas.sort(((MM,rM)=>MM.track.id-rM.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),LM}getAudioTrackData(MM,rM,iM){const OM=this.trackDatas.find((rM=>rM.track===MM));if(OM)return OM;gi(iM,MM.source._codec),gM(iM),gM(iM.decoderConfig);const SM={...iM.decoderConfig};let jM=!1;if("aac"===MM.source._codec&&!SM.description){if(!rM)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const MM=ZS(Wi.tempFromBytes(rM.data));if(!MM)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const iM=Hr[MM.samplingFrequencyIndex],OM=hr[MM.channelConfiguration];if(void 0===iM||void 0===OM)throw new Error("Invalid ADTS frame header.");SM.description=Jr({objectType:MM.objectType,outputSampleRate:iM,outputNumberOfChannels:OM}),jM=!0}if(!rM){if("ac3"===MM.source._codec||"eac3"===MM.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===MM.source._codec)throw new Error("DTS requires a priming packet.")}const aM={muxer:this,track:MM,type:"audio",info:{numberOfChannels:iM.decoderConfig.numberOfChannels,sampleRate:iM.decoderConfig.sampleRate,decoderConfig:SM,requiresPcmTransformation:!this.isFragmented&&ni.includes(MM.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:jM,primingPacket:rM},timescale:SM.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:MM.source._nominalBitrate??MM.metadata.averageBitrate??0,maxBitrate:MM.source._nominalBitrate??MM.metadata.bitrate??0};return this.trackDatas.push(aM),this.trackDatas.sort(((MM,rM)=>MM.track.id-rM.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),aM}getSubtitleTrackData(MM,rM){const iM=this.trackDatas.find((rM=>rM.track===MM));if(iM)return iM;ui(rM),gM(rM),gM(rM.config);const OM={muxer:this,track:MM,type:"subtitle",info:{config:rM.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:MM.source._nominalBitrate??MM.metadata.averageBitrate??0,maxBitrate:MM.source._nominalBitrate??MM.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(OM),this.trackDatas.sort(((MM,rM)=>MM.track.id-rM.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),OM}async addEncodedVideoPacket(MM,rM,iM){const OM=await this.mutex.acquire();try{const OM=this.getVideoTrackData(MM,rM,iM);let SM=rM.data;if(OM.info.requiresAnnexBTransformation){const MM=[...tr(SM)].map((MM=>SM.subarray(MM.offset,MM.offset+MM.length)));if(0===MM.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");SM=Rr(MM,4)}this.validateTimestamp(OM.track,rM.timestamp,"key"===rM.type);const jM=this.createSampleForTrack(OM,SM,rM.timestamp,rM.duration,rM.type);await this.registerSample(OM,jM)}finally{OM()}}async addEncodedAudioPacket(MM,rM,iM){const OM=await this.mutex.acquire();try{const OM=this.getAudioTrackData(MM,rM,iM);let SM=rM.data;if(OM.info.requiresAdtsStripping){const MM=ZS(Wi.tempFromBytes(SM));if(!MM)throw new Error("Expected ADTS frame, didn\'t get one.");const rM=null===MM.crcCheck?7:9;SM=SM.subarray(rM)}this.validateTimestamp(OM.track,rM.timestamp,"key"===rM.type);let jM=rM.timestamp,aM=rM.duration;if(OM.info.requiresPcmTransformation){const MM=li(OM.info.decoderConfig.codec).sampleSize*OM.info.numberOfChannels;if(aM=SM.byteLength/MM/OM.info.sampleRate,null!==OM.info.expectedNextPcmPacketTimestamp){const MM=jM-OM.info.expectedNextPcmPacketTimestamp;if(MM<.01)jM=OM.info.expectedNextPcmPacketTimestamp;else{const rM=await this.padWithSilence(OM,OM.info.expectedNextPcmPacketTimestamp,MM);jM=OM.info.expectedNextPcmPacketTimestamp+rM}}OM.info.expectedNextPcmPacketTimestamp=jM+aM}const PM=this.createSampleForTrack(OM,SM,jM,aM,rM.type);await this.registerSample(OM,PM)}finally{OM()}}async padWithSilence(MM,rM,iM){const OM=YS(iM,MM.timescale);if(iM=OM/MM.timescale,OM>0){const{sampleSize:SM,silentValue:jM}=li(MM.info.decoderConfig.codec),aM=OM*MM.info.numberOfChannels,PM=new Uint8Array(SM*aM).fill(jM),nM=this.createSampleForTrack(MM,new Uint8Array(PM.buffer),rM,iM,"key");await this.registerSample(MM,nM)}return iM}async addSubtitleCue(MM,rM,iM){const OM=await this.mutex.acquire();try{const OM=this.getSubtitleTrackData(MM,iM);this.validateTimestamp(OM.track,rM.timestamp,!0),"webvtt"===MM.source._codec&&(OM.cueQueue.push(rM),await this.processWebVTTCues(OM,rM.timestamp))}finally{OM()}}async processWebVTTCues(MM,rM){for(;MM.cueQueue.length>0;){MM.lastCueEndTimestamp??=Math.min(0,MM.cueQueue[0].timestamp);const iM=new Set([]);for(const nM of MM.cueQueue)gM(nM.timestamp<=rM),gM(MM.lastCueEndTimestamp<=nM.timestamp+nM.duration),iM.add(Math.max(nM.timestamp,MM.lastCueEndTimestamp)),iM.add(nM.timestamp+nM.duration);const OM=[...iM].sort(((MM,rM)=>MM-rM)),SM=OM[0],jM=OM[1]??SM;if(rM<jM)break;if(MM.lastCueEndTimestamp<SM){this.auxWriter.seek(0);const rM=QS();this.auxBoxWriter.writeBox(rM);const iM=this.auxTarget._getSlice(0,this.auxWriter.getPos()),OM=this.createSampleForTrack(MM,iM,MM.lastCueEndTimestamp,SM-MM.lastCueEndTimestamp,"key");await this.registerSample(MM,OM),MM.lastCueEndTimestamp=SM}this.auxWriter.seek(0);for(let rM=0;rM<MM.cueQueue.length;rM++){const iM=MM.cueQueue[rM];if(iM.timestamp>=jM)break;fi.lastIndex=0;const OM=fi.test(iM.text),aM=iM.timestamp+iM.duration;let PM=MM.cueToSourceId.get(iM);if(void 0===PM&&jM<aM&&(PM=MM.nextSourceId++,MM.cueToSourceId.set(iM,PM)),iM.notes){const MM=LS(iM.notes);this.auxBoxWriter.writeBox(MM)}const nM=zS(iM.text,OM?SM:null,iM.identifier??null,iM.settings??null,PM??null);this.auxBoxWriter.writeBox(nM),aM===jM&&MM.cueQueue.splice(rM--,1)}const aM=this.auxTarget._getSlice(0,this.auxWriter.getPos()),PM=this.createSampleForTrack(MM,aM,SM,jM-SM,"key");await this.registerSample(MM,PM),MM.lastCueEndTimestamp=jM}}createSampleForTrack(MM,rM,iM,OM,SM){return{timestamp:iM,decodeTimestamp:iM,duration:OM,data:rM,size:rM.byteLength,type:SM,timescaleUnitsToNextSample:YS(OM,MM.timescale)}}processTimestamps(MM,rM){if(0===MM.timestampProcessingQueue.length)return;if("audio"===MM.type&&MM.info.requiresPcmTransformation){gM(!this.isFragmented),MM.startTimestampOffset??=MM.timestampProcessingQueue[0].timestamp;let rM=0;for(let iM=0;iM<MM.timestampProcessingQueue.length;iM++){const OM=MM.timestampProcessingQueue[iM];rM+=YS(OM.duration,MM.timescale)}if(0===MM.timeToSampleTable.length)MM.timeToSampleTable.push({sampleCount:rM,sampleDelta:1});else{DM(MM.timeToSampleTable).sampleCount+=rM}return void(MM.timestampProcessingQueue.length=0)}const iM=MM.timestampProcessingQueue.map((MM=>MM.timestamp)).sort(((MM,rM)=>MM-rM));this.isFragmented?MM.startTimestampOffset??=Math.min(iM[0],0):MM.startTimestampOffset??=iM[0];for(let OM=0;OM<MM.timestampProcessingQueue.length;OM++){const rM=MM.timestampProcessingQueue[OM];rM.decodeTimestamp=iM[OM];const SM=YS(rM.timestamp-rM.decodeTimestamp,MM.timescale),jM=YS(rM.duration,MM.timescale);if(null!==MM.lastTimescaleUnits){gM(MM.lastSample);const iM=YS(rM.decodeTimestamp,MM.timescale,!1),OM=Math.round(iM-MM.lastTimescaleUnits);if(gM(OM>=0),MM.lastTimescaleUnits+=OM,MM.lastSample.timescaleUnitsToNextSample=OM,!this.isFragmented){let rM=DM(MM.timeToSampleTable);if(gM(rM),1===rM.sampleCount){rM.sampleDelta=OM;const iM=MM.timeToSampleTable[MM.timeToSampleTable.length-2];iM&&iM.sampleDelta===OM&&(iM.sampleCount++,MM.timeToSampleTable.pop(),rM=iM)}else rM.sampleDelta!==OM&&(rM.sampleCount--,MM.timeToSampleTable.push(rM={sampleCount:1,sampleDelta:OM}));rM.sampleDelta===jM?rM.sampleCount++:MM.timeToSampleTable.push({sampleCount:1,sampleDelta:jM});const iM=DM(MM.compositionTimeOffsetTable);gM(iM),iM.sampleCompositionTimeOffset===SM?iM.sampleCount++:MM.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:SM})}}else MM.lastTimescaleUnits=YS(rM.decodeTimestamp,MM.timescale,!1),this.isFragmented||(MM.timeToSampleTable.push({sampleCount:1,sampleDelta:jM}),MM.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:SM}));MM.lastSample=rM}if(MM.timestampProcessingQueue.length=0,gM(MM.lastSample),gM(null!==MM.lastTimescaleUnits),void 0!==rM&&0===MM.lastSample.timescaleUnitsToNextSample){gM("key"===rM.type);const iM=YS(rM.timestamp,MM.timescale,!1),OM=Math.round(iM-MM.lastTimescaleUnits);MM.lastSample.timescaleUnitsToNextSample=OM}}async registerSample(MM,rM){"key"===rM.type&&this.processTimestamps(MM,rM),MM.timestampProcessingQueue.push(rM),this.isFragmented?(MM.sampleQueue.push(rM),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(MM,rM):await this.addSampleToTrack(MM,rM)}async addSampleToTrack(MM,rM){if(!this.isFragmented&&(MM.samples.push(rM),"reserve"===this.fastStart)){const rM=MM.track.metadata.maximumPacketCount;if(gM(void 0!==rM),MM.samples.length>rM)throw new Error(`Track #${MM.track.id} has already reached the maximum packet count (${rM}). Either add less packets or increase the maximum packet count.`)}let iM=!1;if(MM.currentChunk){MM.currentChunk.startTimestamp=Math.min(MM.currentChunk.startTimestamp,rM.timestamp);const OM=rM.timestamp-MM.currentChunk.startTimestamp;if(this.isFragmented){const SM=this.trackDatas.every((iM=>{if(MM===iM)return"key"===rM.type;const OM=iM.sampleQueue[0];return OM?"key"===OM.type:iM.closed}));OM>=this.minimumFragmentDuration&&SM&&rM.timestamp>this.maxWrittenTimestamp&&(iM=!0,await this.finalizeFragment())}else iM=OM>=.5}else iM=!0;iM&&(MM.currentChunk&&await this.finalizeCurrentChunk(MM),MM.currentChunk={startTimestamp:rM.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),gM(MM.currentChunk),MM.currentChunk.samples.push(rM),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,rM.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,rM.timestamp+rM.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,rM.timestamp))}async finalizeCurrentChunk(MM){if(gM(!this.isFragmented),gM(this.writer),!MM.currentChunk)return;MM.finalizedChunks.push(MM.currentChunk),this.finalizedChunks.push(MM.currentChunk);let rM=MM.currentChunk.samples.length;if("audio"===MM.type&&MM.info.requiresPcmTransformation&&(rM=MM.currentChunk.samples.reduce(((rM,iM)=>rM+YS(iM.duration,MM.timescale)),0)),0!==MM.compactlyCodedChunkTable.length&&DM(MM.compactlyCodedChunkTable).samplesPerChunk===rM||MM.compactlyCodedChunkTable.push({firstChunk:MM.finalizedChunks.length,samplesPerChunk:rM}),"in-memory"!==this.fastStart){MM.currentChunk.offset=this.writer.getPos();for(const rM of MM.currentChunk.samples)gM(rM.data),this.writer.write(rM.data),rM.data=null;await this.writer.flush()}else MM.currentChunk.offset=0}async interleaveSamples(){let MM=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(gM(this.isFragmented),MM||this.allTracksAreKnown())MM:for(;;){let rM=null,iM=1/0;for(const SM of this.trackDatas){if(!MM&&0===SM.sampleQueue.length&&!SM.closed)break MM;SM.sampleQueue.length>0&&SM.sampleQueue[0].timestamp<iM&&(rM=SM,iM=SM.sampleQueue[0].timestamp)}if(!rM)break;const OM=rM.sampleQueue.shift();await this.addSampleToTrack(rM,OM)}}async finalizeFragment(){let MM=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(gM(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const MM=this.initBoxWriter??this.boxWriter;gM(MM),this.formatOptions.onMoov&&MM.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const rM=QO(this);if(MM.writeBox(rM),this.formatOptions.onMoov){const{data:rM,start:iM}=MM.writer.stopTrackingWrites();this.formatOptions.onMoov(rM,iM)}if(this.isCmaf){gM(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new Ni(this.writer);const MM=this.boxWriter.measureBox(aO()),rM=this.boxWriter.measureBox(PO(this,0));this.segmentHeaderSize=MM+rM,this.writer.seek(this.segmentHeaderSize)}}gM(this.writer),gM(this.boxWriter);const rM=this.trackDatas.filter((MM=>MM.currentChunk));if(0===rM.length)return void(MM&&await this.writer.flush());const iM=this.nextFragmentNumber++,OM=MS(iM,rM),SM=this.writer.getPos(),jM=SM+this.boxWriter.measureBox(OM);let aM=jM+8,PM=1/0;for(let mM=0;mM<rM.length;mM++){const MM=rM[mM];gM(MM.currentChunk),gM(null!==MM.startTimestampOffset),MM.currentChunk.offset=aM,MM.currentChunk.moofOffset=SM,MM.currentChunk.trafIndex=mM,MM.currentChunk.startTimestamp-=MM.startTimestampOffset;for(const rM of MM.currentChunk.samples)aM+=rM.size,rM.timestamp-=MM.startTimestampOffset,rM.decodeTimestamp-=MM.startTimestampOffset;PM=Math.min(PM,MM.currentChunk.startTimestamp)}const nM=aM-jM,QM=nM>=2**32;if(QM)for(const mM of rM)mM.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const zM=MS(iM,rM);if(this.boxWriter.writeBox(zM),this.formatOptions.onMoof){const{data:MM,start:rM}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(MM,rM,PM)}gM(this.writer.getPos()===jM),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const LM=nO(QM);LM.size=nM,this.boxWriter.writeBox(LM),this.writer.seek(jM+(QM?16:8));for(const mM of rM)for(const MM of mM.currentChunk.samples)this.writer.write(MM.data),MM.data=null;if(this.formatOptions.onMdat){const{data:MM,start:rM}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(MM,rM)}for(const mM of rM)mM.finalizedChunks.push(mM.currentChunk),this.finalizedChunks.push(mM.currentChunk),mM.currentChunk=null;MM&&await this.writer.flush()}async registerSampleFastStartReserve(MM,rM){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(MM,rM)):MM.sampleQueue.push(rM)}async createFastStartReserveMdat(){gM(this.writer),gM(this.boxWriter),this.ensureOneEnabledTrack();const MM=QO(this),rM=this.boxWriter.measureBox(MM)+this.computeSampleTableSizeUpperBound()+4096;gM(null!==this.ftypSize),this.writer.seek(this.ftypSize+rM),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=nO(!0),this.boxWriter.writeBox(this.mdat);for(const iM of this.trackDatas){for(const MM of iM.sampleQueue)await this.addSampleToTrack(iM,MM);iM.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){gM("reserve"===this.fastStart);let MM=0;for(const rM of this.trackDatas){const iM=rM.track.metadata.maximumPacketCount;gM(void 0!==iM),MM+=8*Math.ceil(2/3*iM),MM+=4*iM,MM+=8*Math.ceil(2/3*iM),MM+=12*Math.ceil(2/3*iM),MM+=4*iM,MM+=8*iM}return MM}async onTrackClose(MM){const rM=await this.mutex.acquire(),iM=this.trackDatas.find((rM=>rM.track===MM));iM&&(iM.closed=!0,"subtitle"===iM.type&&"webvtt"===MM.source._codec&&await this.processWebVTTCues(iM,1/0),this.processTimestamps(iM)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),rM()}ensureOneEnabledTrack(){for(const MM of["video","audio","subtitle"]){const rM=this.trackDatas.filter((rM=>rM.type===MM));if(0===rM.length)continue;if(!rM.some((MM=>!1!==MM.track.metadata.disposition?.default))){const MM=rM[0];MM.track.metadata.disposition={...MM.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){gM(this.isFragmented);const MM=await this.mutex.acquire();try{for(const MM of this.trackDatas)"subtitle"===MM.type&&"webvtt"===MM.track.source._codec&&await this.processWebVTTCues(MM,1/0),this.processTimestamps(MM);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{MM()}}async finalize(){const MM=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const iM of this.trackDatas)iM.closed=!0,"subtitle"===iM.type&&"webvtt"===iM.track.source._codec&&await this.processWebVTTCues(iM,1/0),this.processTimestamps(iM);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const iM of this.trackDatas){await this.finalizeCurrentChunk(iM);const MM=NS(iM);if(MM>0){let rM=0;for(const MM of iM.samples)rM+=MM.size;iM.avgBitrate=Math.round(8*rM/MM)}else iM.avgBitrate=0;let rM=0,OM=0,SM=0;for(let jM=0;jM<iM.samples.length;jM++){const MM=iM.samples[jM];for(OM+=MM.size;MM.decodeTimestamp-iM.samples[rM].decodeTimestamp>=1;)OM-=iM.samples[rM].size,rM++;SM=Math.max(SM,OM)}if(iM.maxBitrate=8*SM,null!==iM.startTimestampOffset)for(let jM=0;jM<iM.samples.length;jM++){const MM=iM.samples[jM];MM.timestamp-=iM.startTimestampOffset,MM.decodeTimestamp-=iM.startTimestampOffset}}if(gM(this.writer),gM(this.boxWriter),"in-memory"===this.fastStart){let MM;this.mdat=nO(!1);for(let iM=0;iM<2;iM++){const rM=QO(this),iM=this.boxWriter.measureBox(rM);MM=this.boxWriter.measureBox(this.mdat);let OM=this.writer.getPos()+iM+MM;for(const SM of this.finalizedChunks){SM.offset=OM;for(const{data:rM}of SM.samples)gM(rM),OM+=rM.byteLength,MM+=rM.byteLength}if(OM<2**32)break;MM>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const rM=QO(this);if(this.boxWriter.writeBox(rM),this.formatOptions.onMoov){const{data:MM,start:rM}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(MM,rM)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=MM,this.boxWriter.writeBox(this.mdat);for(const iM of this.finalizedChunks)for(const MM of iM.samples)gM(MM.data),this.writer.write(MM.data),MM.data=null;if(this.formatOptions.onMdat){const{data:MM,start:rM}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(MM,rM)}}else if(this.isFragmented)if(this.isCmaf){const MM=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(aO()),this.boxWriter.writeBox(PO(this,MM))}else{const MM=this.writer.getPos(),iM=(rM=this.trackDatas,SO("mfra",void 0,[...rM.map(PS),nS()]));this.boxWriter.writeBox(iM);const OM=this.writer.getPos()-MM;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(OM)}else{gM(this.mdat);const MM=this.boxWriter.offsets.get(this.mdat);gM(void 0!==MM);const rM=this.writer.getPos()-MM;if(this.mdat.size=rM,this.mdat.largeSize=rM>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:MM,start:rM}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(MM,rM)}const iM=QO(this);if("reserve"===this.fastStart){gM(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(iM);const MM=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:MM})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(iM);if(this.formatOptions.onMoov){const{data:MM,start:rM}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(MM,rM)}}var rM;MM()}}var xS;!function(MM){MM[MM.EBML=440786851]="EBML",MM[MM.EBMLVersion=17030]="EBMLVersion",MM[MM.EBMLReadVersion=17143]="EBMLReadVersion",MM[MM.EBMLMaxIDLength=17138]="EBMLMaxIDLength",MM[MM.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",MM[MM.DocType=17026]="DocType",MM[MM.DocTypeVersion=17031]="DocTypeVersion",MM[MM.DocTypeReadVersion=17029]="DocTypeReadVersion",MM[MM.Void=236]="Void",MM[MM.Segment=408125543]="Segment",MM[MM.SeekHead=290298740]="SeekHead",MM[MM.Seek=19899]="Seek",MM[MM.SeekID=21419]="SeekID",MM[MM.SeekPosition=21420]="SeekPosition",MM[MM.Duration=17545]="Duration",MM[MM.Info=357149030]="Info",MM[MM.TimestampScale=2807729]="TimestampScale",MM[MM.MuxingApp=19840]="MuxingApp",MM[MM.WritingApp=22337]="WritingApp",MM[MM.Tracks=374648427]="Tracks",MM[MM.TrackEntry=174]="TrackEntry",MM[MM.TrackNumber=215]="TrackNumber",MM[MM.TrackUID=29637]="TrackUID",MM[MM.TrackType=131]="TrackType",MM[MM.FlagEnabled=185]="FlagEnabled",MM[MM.FlagDefault=136]="FlagDefault",MM[MM.FlagForced=21930]="FlagForced",MM[MM.FlagOriginal=21934]="FlagOriginal",MM[MM.FlagHearingImpaired=21931]="FlagHearingImpaired",MM[MM.FlagVisualImpaired=21932]="FlagVisualImpaired",MM[MM.FlagCommentary=21935]="FlagCommentary",MM[MM.FlagLacing=156]="FlagLacing",MM[MM.Name=21358]="Name",MM[MM.Language=2274716]="Language",MM[MM.LanguageBCP47=2274717]="LanguageBCP47",MM[MM.CodecID=134]="CodecID",MM[MM.CodecPrivate=25506]="CodecPrivate",MM[MM.CodecDelay=22186]="CodecDelay",MM[MM.SeekPreRoll=22203]="SeekPreRoll",MM[MM.DefaultDuration=2352003]="DefaultDuration",MM[MM.Video=224]="Video",MM[MM.PixelWidth=176]="PixelWidth",MM[MM.PixelHeight=186]="PixelHeight",MM[MM.DisplayWidth=21680]="DisplayWidth",MM[MM.DisplayHeight=21690]="DisplayHeight",MM[MM.DisplayUnit=21682]="DisplayUnit",MM[MM.AlphaMode=21440]="AlphaMode",MM[MM.Audio=225]="Audio",MM[MM.SamplingFrequency=181]="SamplingFrequency",MM[MM.Channels=159]="Channels",MM[MM.BitDepth=25188]="BitDepth",MM[MM.SimpleBlock=163]="SimpleBlock",MM[MM.BlockGroup=160]="BlockGroup",MM[MM.Block=161]="Block",MM[MM.BlockAdditions=30113]="BlockAdditions",MM[MM.BlockMore=166]="BlockMore",MM[MM.BlockAdditional=165]="BlockAdditional",MM[MM.BlockAddID=238]="BlockAddID",MM[MM.BlockDuration=155]="BlockDuration",MM[MM.ReferenceBlock=251]="ReferenceBlock",MM[MM.Cluster=524531317]="Cluster",MM[MM.Timestamp=231]="Timestamp",MM[MM.Cues=475249515]="Cues",MM[MM.CuePoint=187]="CuePoint",MM[MM.CueTime=179]="CueTime",MM[MM.CueTrackPositions=183]="CueTrackPositions",MM[MM.CueTrack=247]="CueTrack",MM[MM.CueClusterPosition=241]="CueClusterPosition",MM[MM.Colour=21936]="Colour",MM[MM.MatrixCoefficients=21937]="MatrixCoefficients",MM[MM.TransferCharacteristics=21946]="TransferCharacteristics",MM[MM.Primaries=21947]="Primaries",MM[MM.Range=21945]="Range",MM[MM.Projection=30320]="Projection",MM[MM.ProjectionType=30321]="ProjectionType",MM[MM.ProjectionPoseYaw=30323]="ProjectionPoseYaw",MM[MM.ProjectionPosePitch=30324]="ProjectionPosePitch",MM[MM.ProjectionPoseRoll=30325]="ProjectionPoseRoll",MM[MM.Attachments=423732329]="Attachments",MM[MM.AttachedFile=24999]="AttachedFile",MM[MM.FileDescription=18046]="FileDescription",MM[MM.FileName=18030]="FileName",MM[MM.FileMediaType=18016]="FileMediaType",MM[MM.FileData=18012]="FileData",MM[MM.FileUID=18094]="FileUID",MM[MM.Chapters=272869232]="Chapters",MM[MM.Tags=307544935]="Tags",MM[MM.Tag=29555]="Tag",MM[MM.Targets=25536]="Targets",MM[MM.TargetTypeValue=26826]="TargetTypeValue",MM[MM.TargetType=25546]="TargetType",MM[MM.TagTrackUID=25541]="TagTrackUID",MM[MM.TagEditionUID=25545]="TagEditionUID",MM[MM.TagChapterUID=25540]="TagChapterUID",MM[MM.TagAttachmentUID=25542]="TagAttachmentUID",MM[MM.SimpleTag=26568]="SimpleTag",MM[MM.TagName=17827]="TagName",MM[MM.TagLanguage=17530]="TagLanguage",MM[MM.TagString=17543]="TagString",MM[MM.TagBinary=17541]="TagBinary",MM[MM.ContentEncodings=28032]="ContentEncodings",MM[MM.ContentEncoding=25152]="ContentEncoding",MM[MM.ContentEncodingOrder=20529]="ContentEncodingOrder",MM[MM.ContentEncodingScope=20530]="ContentEncodingScope",MM[MM.ContentCompression=20532]="ContentCompression",MM[MM.ContentCompAlgo=16980]="ContentCompAlgo",MM[MM.ContentCompSettings=16981]="ContentCompSettings",MM[MM.ContentEncryption=20533]="ContentEncryption"}(xS||(xS={}));xS.EBML,xS.Segment,xS.SeekHead,xS.Info,xS.Cluster,xS.Tracks,xS.Cues,xS.Attachments,xS.Chapters,xS.Tags;const vS=new Uint32Array(256);for(let Rj=0;Rj<256;Rj++){let MM=Rj<<24;for(let rM=0;rM<8;rM++)MM=2147483648&MM?MM<<1^79764919:MM<<1;vS[Rj]=MM>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const FS=new Uint32Array(256);for(let Rj=0;Rj<256;Rj++){let MM=Rj<<24;for(let rM=0;rM<8;rM++)MM=2147483648&MM?MM<<1^79764919:MM<<1;FS[Rj]=MM>>>0&4294967295}const BS=MM=>{let rM=4294967295;for(let iM=0;iM<MM.length;iM++){const OM=MM[iM];rM=(rM<<8^FS[rM>>>24^OM])>>>0}return rM},XS=new Uint8Array(16);{const MM=YM(XS);XS[0]=0,MM.setUint16(1,45069,!1),MM.setUint16(3,1,!1),XS[5]=193,XS[6]=0,XS[7]=0,MM.setUint16(8,1,!1),MM.setUint16(10,61440,!1),MM.setUint32(12,BS(XS.subarray(0,12)),!1)}const IS=new Uint8Array(0);class KS{constructor(MM,rM,iM,OM){let SM=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,jM=arguments.length>5?arguments[5]:void 0,aM=arguments.length>6?arguments[6]:void 0;if(this.data=MM,this.type=rM,this.timestamp=iM,this.duration=OM,this.sequenceNumber=SM,MM===IS&&void 0===jM)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===jM&&(jM=MM.byteLength),!(MM instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==rM&&"delta"!==rM)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(iM))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(OM)||OM<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(SM))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(jM)||jM<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==aM&&("object"!==typeof aM||!aM))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==aM?.alpha&&!(aM.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==aM?.alphaByteLength&&(!Number.isInteger(aM.alphaByteLength)||aM.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=jM,this.sideData=aM??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===IS}get microsecondTimestamp(){return Math.trunc(rr*this.timestamp)}get microsecondDuration(){return Math.trunc(rr*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let MM=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:MM,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(MM,rM){if(!(MM instanceof EncodedVideoChunk||MM instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const iM=new Uint8Array(MM.byteLength);return MM.copyTo(iM),new KS(iM,MM.type,MM.timestamp/1e6,(MM.duration??0)/1e6,void 0,void 0,rM)}clone(MM){if(void 0!==MM&&("object"!==typeof MM||null===MM))throw new TypeError("options, when provided, must be an object.");if(void 0!==MM?.data&&!(MM.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==MM?.type&&"key"!==MM.type&&"delta"!==MM.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==MM?.timestamp&&!Number.isFinite(MM.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==MM?.duration&&!Number.isFinite(MM.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==MM?.sequenceNumber&&!Number.isFinite(MM.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==MM?.sideData&&("object"!==typeof MM.sideData||null===MM.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new KS(MM?.data??this.data,MM?.type??this.type,MM?.timestamp??this.timestamp,MM?.duration??this.duration,MM?.sequenceNumber??this.sequenceNumber,this.byteLength,MM?.sideData??this.sideData)}}var qS;!function(MM){MM[MM.PCM=1]="PCM",MM[MM.IEEE_FLOAT=3]="IEEE_FLOAT",MM[MM.ALAW=6]="ALAW",MM[MM.MULAW=7]="MULAW",MM[MM.EXTENSIBLE=65534]="EXTENSIBLE"}(qS||(qS={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let TS=-1/0,VS=-1/0,cS=null;"undefined"!==typeof FinalizationRegistry&&(cS=new FinalizationRegistry((MM=>{const rM=performance.now();"video"===MM.type?(rM-TS>=1e3&&(Ur._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),TS=rM),"undefined"!==typeof VideoFrame&&MM.data instanceof VideoFrame&&MM.data.close()):(rM-VS>=1e3&&(Ur._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),VS=rM),"undefined"!==typeof AudioData&&MM.data instanceof AudioData&&MM.data.close())})));const Mj=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(Mj);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class rj{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(MM){}close(){if(this._closingPromise)return;const MM=this._connectedTrack;if(!MM)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===MM.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==MM.output.state&&"finalized"!==MM.output.state&&MM.output._muxer.onTrackClose(MM)})()}async _flushOrWaitForOngoingClose(MM){return this._closingPromise??=(async()=>{await this._flushAndClose(MM),this._closed=!0})()}}class ij extends rj{constructor(MM){if(super(),!Pi.includes(MM))throw new TypeError(`Invalid video codec \'${MM}\'. Must be one of: ${Pi.join(", ")}.`);this._codec=MM}}const Oj=(MM,rM)=>{if(MM.metadata.hasOnlyKeyPackets&&"key"!==rM.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Sj extends ij{constructor(MM){super(MM)}add(MM,rM){if(!(MM instanceof KS))throw new TypeError("packet must be an EncodedPacket.");if(MM.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==rM&&(!rM||"object"!==typeof rM))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),Oj(this._connectedTrack,MM),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,MM,rM)}}class jj extends rj{constructor(MM){if(super(),!zi.includes(MM))throw new TypeError(`Invalid audio codec \'${MM}\'. Must be one of: ${zi.join(", ")}.`);this._codec=MM}}class aj extends rj{constructor(MM){if(super(),!Li.includes(MM))throw new TypeError(`Invalid subtitle codec \'${MM}\'. Must be one of: ${Li.join(", ")}.`);this._codec=MM}}class Pj{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((MM=>Pi.includes(MM)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((MM=>zi.includes(MM)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((MM=>Li.includes(MM)))}_codecUnsupportedHint(MM){return""}_isFragmentedIsobmff(){return!1}}class nj extends Pj{constructor(){let MM=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!MM||"object"!==typeof MM)throw new TypeError("options must be an object.");if(void 0!==MM.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(MM.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==MM.minimumFragmentDuration&&(!jr(MM.minimumFragmentDuration)||MM.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==MM.onFtyp&&"function"!==typeof MM.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==MM.onMoov&&"function"!==typeof MM.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==MM.onMdat&&"function"!==typeof MM.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==MM.onMoof&&"function"!==typeof MM.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==MM.metadataFormat&&!["mdir","mdta","udta","auto"].includes(MM.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=MM}getSupportedTrackCounts(){const MM=2**32-1;return{video:{min:0,max:MM},audio:{min:0,max:MM},subtitle:{min:0,max:MM},total:{min:0,max:MM}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(MM){return new AS(MM,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class Qj extends nj{constructor(MM){super(MM)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Pi,...Qi,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Li]}_codecUnsupportedHint(MM){return(new Lj).getSupportedCodecs().includes(MM)?" Switching to MOV will grant support for this codec.":""}}class zj extends nj{constructor(MM){super(MM)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Pi,...Qi,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Li]}}class Lj extends nj{constructor(MM){super(MM)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...Pi,...zi]}_codecUnsupportedHint(MM){return(new Qj).getSupportedCodecs().includes(MM)?" Switching to MP4 will grant support for this codec.":""}}const mj=["video","audio","subtitle"];class Hj{constructor(MM,rM,iM,OM,SM){this.id=MM,this.output=rM,this.type=iM,this.source=OM,this.metadata=SM}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(MM){if(!(MM instanceof Hj))throw new TypeError("other must be an OutputTrack.");if(this===MM)return!1;const rM=Pr(this.metadata.group),iM=Pr(MM.metadata.group);for(const OM of rM){if(this.type!==MM.type&&iM.some((MM=>OM===MM)))return!0;if(iM.some((MM=>OM._pairedGroups.has(MM))))return!0}return!1}}class hj extends Hj{constructor(MM,rM,iM,OM){super(MM,rM,"video",iM,OM)}}class Jj extends Hj{constructor(MM,rM,iM,OM){super(MM,rM,"audio",iM,OM)}}class dj extends Hj{constructor(MM,rM,iM,OM){super(MM,rM,"subtitle",iM,OM)}}class yj{constructor(){this._pairedGroups=new Set}pairWith(MM){if(!(MM instanceof yj))throw new TypeError("other must be an OutputTrackGroup.");if(this===MM)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(MM),MM._pairedGroups.add(this)}}const lj=MM=>{if(!MM||"object"!==typeof MM)throw new TypeError("metadata must be an object.");if(void 0!==MM.languageCode&&(rM=MM.languageCode,!Mr.test(rM)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var rM;if(void 0!==MM.name&&"string"!==typeof MM.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==MM.disposition&&(MM=>{if(!MM||"object"!==typeof MM)throw new TypeError("disposition must be an object.");if(void 0!==MM.default&&"boolean"!==typeof MM.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==MM.primary&&"boolean"!==typeof MM.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==MM.forced&&"boolean"!==typeof MM.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==MM.original&&"boolean"!==typeof MM.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==MM.commentary&&"boolean"!==typeof MM.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==MM.hearingImpaired&&"boolean"!==typeof MM.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==MM.visuallyImpaired&&"boolean"!==typeof MM.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(MM.disposition),void 0!==MM.maximumPacketCount&&(!Number.isInteger(MM.maximumPacketCount)||MM.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==MM.bitrate&&(!Number.isFinite(MM.bitrate)||MM.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==MM.averageBitrate&&(!Number.isFinite(MM.averageBitrate)||MM.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==MM.group&&!(MM.group instanceof yj)&&(!Array.isArray(MM.group)||MM.group.some((MM=>!(MM instanceof yj)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Ej extends nr{get target(){const MM="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(MM);const rM=this._getRootTarget();if(Or(rM))throw new TypeError(MM);return rM}constructor(MM){if(super(),this.state="pending",this.defaultTrackGroup=new yj,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new IM,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!MM||"object"!==typeof MM)throw new TypeError("options must be an object.");if(!(MM.format instanceof Pj))throw new TypeError("options.format must be an OutputFormat.");if(!(MM.target instanceof uS||MM.target instanceof kS))throw new TypeError("options.target must be a Target or a PathedTarget.");if(MM.target instanceof uS&&this._rememberTarget(MM.target),void 0!==MM.initTarget&&!(MM.initTarget instanceof uS)&&"function"!==typeof MM.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==MM.onFinalize&&"function"!==typeof MM.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=MM.format,this.wL=MM.target,this._onFinalize=MM.onFinalize??null,this._initTarget=MM.initTarget??null,this._initTarget instanceof uS&&this._rememberTarget(this._initTarget),this._muxer=MM.format._createMuxer(this)}_getTargetValidated(MM){gM(this.wL instanceof kS);const rM=this.wL.getTarget(MM),iM=MM=>{if(!(MM instanceof uS))throw new TypeError("getTarget must return a Target.");return MM};return Or(rM)?rM.then(iM):iM(rM)}async _getTarget(MM){gM(this.wL instanceof kS);const rM=await this._getTargetValidated(MM);return this._emit("target",{target:rM,request:MM,isRoot:MM.isRoot}),"canceled"===this.state?await rM._close():this._rememberTarget(rM),rM}_rememberTarget(MM){this._unfinalizedTargets.add(MM),MM.on("finalized",(()=>this._unfinalizedTargets.delete(MM)),{once:!0})}async _getInitTarget(){if(gM(null!==this._initTarget),this._initTarget instanceof uS)return this._initTarget;const MM=await this._initTarget();return"canceled"===this.state?await MM._close():this._rememberTarget(MM),MM}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.wL instanceof uS)return this._emit("target",{target:this.wL,request:null,isRoot:!0}),this._rootTarget=this.wL,this.wL;const MM={path:this.wL.rootPath,isRoot:!0,mimeType:this.format.mimeType},rM=this._getTargetValidated(MM),iM=rM=>("canceled"===this.state?rM._close():this._rememberTarget(rM),this._emit("target",{target:rM,request:MM,isRoot:!0}),this._rootTarget=rM,rM);return Or(rM)?this._rootTargetPromise=rM.then(iM):iM(rM)}_getRootWriter(MM){return this._rootWriterPromise??=(async()=>{const rM=await this._getRootTarget(),iM=new gS(rM,"boolean"===typeof MM?MM:MM(rM));return iM.start(),iM})()}addVideoTrack(MM){let rM=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(MM instanceof ij))throw new TypeError("source must be a VideoSource.");if(lj(rM),void 0!==rM.rotation&&![0,90,180,270].includes(rM.rotation))throw new TypeError(`Invalid video rotation: ${rM.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==rM.flip&&"boolean"!==typeof rM.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==rM.transformationMatrix&&(!Array.isArray(rM.transformationMatrix)||9!==rM.transformationMatrix.length||!rM.transformationMatrix.every((MM=>Number.isFinite(MM)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==rM.frameRate&&(!Number.isFinite(rM.frameRate)||rM.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${rM.frameRate}. Must be a positive number.`);if(void 0!==rM.hasOnlyKeyPackets&&"boolean"!==typeof rM.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==rM.canBeTransparent&&"boolean"!==typeof rM.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==rM.decoderConfig&&wi({decoderConfig:rM.decoderConfig},MM._codec),void 0!==rM.primingPacket){if(!(rM.primingPacket instanceof KS))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===rM.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const iM={...rM};return iM.group??=this.defaultTrackGroup,this._addTrack(new hj(this.tracks.length+1,this,MM,iM))}addAudioTrack(MM){let rM=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(MM instanceof jj))throw new TypeError("source must be an AudioSource.");if(lj(rM),void 0!==rM.decoderConfig&&gi({decoderConfig:rM.decoderConfig},MM._codec),void 0!==rM.primingPacket){if(!(rM.primingPacket instanceof KS))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===rM.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const iM={...rM};return iM.group??=this.defaultTrackGroup,this._addTrack(new Jj(this.tracks.length+1,this,MM,iM))}addSubtitleTrack(MM){let rM=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(MM instanceof aj))throw new TypeError("source must be a SubtitleSource.");lj(rM);const iM={...rM};return iM.group??=this.defaultTrackGroup,this._addTrack(new dj(this.tracks.length+1,this,MM,iM))}setMetadataTags(MM){if((MM=>{if(!MM||"object"!==typeof MM)throw new TypeError("tags must be an object.");if(void 0!==MM.title&&"string"!==typeof MM.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==MM.description&&"string"!==typeof MM.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==MM.artist&&"string"!==typeof MM.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==MM.album&&"string"!==typeof MM.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==MM.albumArtist&&"string"!==typeof MM.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==MM.trackNumber&&(!Number.isInteger(MM.trackNumber)||MM.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==MM.tracksTotal&&(!Number.isInteger(MM.tracksTotal)||MM.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==MM.discNumber&&(!Number.isInteger(MM.discNumber)||MM.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==MM.discsTotal&&(!Number.isInteger(MM.discsTotal)||MM.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==MM.genre&&"string"!==typeof MM.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==MM.date&&(!(MM.date instanceof Date)||Number.isNaN(MM.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==MM.beatsPerMinute&&(!Number.isInteger(MM.beatsPerMinute)||MM.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==MM.lyrics&&"string"!==typeof MM.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==MM.images){if(!Array.isArray(MM.images))throw new TypeError("tags.images, when provided, must be an array.");for(const rM of MM.images){if(!rM||"object"!==typeof rM)throw new TypeError("Each image in tags.images must be an object.");if(!(rM.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof rM.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(rM.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==MM.comment&&"string"!==typeof MM.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==MM.raw){if(!MM.raw||"object"!==typeof MM.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const rM of Object.values(MM.raw))if(null!==rM&&"string"!==typeof rM&&(!Array.isArray(rM)||!rM.every((MM=>"string"===typeof MM)))&&!(rM instanceof Uint8Array)&&!(rM instanceof zr)&&!(rM instanceof Lr)&&!Qr(rM))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(MM),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=MM}_addTrack(MM){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(MM.source._connectedTrack)throw new Error("Source is already used for a track.");const rM=this.format.getSupportedTrackCounts(),iM=this.tracks.reduce(((rM,iM)=>rM+(iM.type===MM.type?1:0)),0),OM=rM[MM.type].max;if(iM===OM)throw new Error(0===OM?`${this.format._name} does not support ${MM.type} tracks.`:`${this.format._name} does not support more than ${OM} ${MM.type} track`+(1===OM?"":"s")+".");const SM=rM.total.max;if(this.tracks.length===SM)throw new Error(`${this.format._name} does not support more than ${SM} tracks`+(1===SM?"":"s")+" in total.");if(MM.isVideoTrack()){const rM=this.format.getSupportedVideoCodecs();if(0===rM.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(MM.source._codec));if(!rM.includes(MM.source._codec))throw new Error(`Codec \'${MM.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${rM.map((MM=>`\'${MM}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(MM.source._codec))}else if(MM.isAudioTrack()){const rM=this.format.getSupportedAudioCodecs();if(0===rM.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(MM.source._codec));if(!rM.includes(MM.source._codec))throw new Error(`Codec \'${MM.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${rM.map((MM=>`\'${MM}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(MM.source._codec))}else if(MM.isSubtitleTrack()){const rM=this.format.getSupportedSubtitleCodecs();if(0===rM.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(MM.source._codec));if(!rM.includes(MM.source._codec))throw new Error(`Codec \'${MM.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${rM.map((MM=>`\'${MM}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(MM.source._codec))}return this.tracks.push(MM),MM.source._connectedTrack=MM,MM}hasEnoughTracks(){const MM=this.format.getSupportedTrackCounts();for(const iM of mj){if(this.tracks.reduce(((MM,rM)=>MM+(rM.type===iM?1:0)),0)<MM[iM].min)return!1}const rM=MM.total.min;return!(this.tracks.length<rM)}async start(){const MM=this.format.getSupportedTrackCounts();for(const iM of mj){const rM=this.tracks.reduce(((MM,rM)=>MM+(rM.type===iM?1:0)),0),OM=MM[iM].min;if(rM<OM)throw new Error(OM===MM[iM].max?`${this.format._name} requires exactly ${OM} ${iM} track${1===OM?"":"s"}.`:`${this.format._name} requires at least ${OM} ${iM} track${1===OM?"":"s"}.`)}const rM=MM.total.min;if(this.tracks.length<rM)throw new Error(rM===MM.total.max?`${this.format._name} requires exactly ${rM} track`+(1===rM?"":"s")+".":`${this.format._name} requires at least ${rM} track`+(1===rM?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(Ur._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const MM=this._mutex.acquire();try{await this._muxer.start();const MM=this.tracks.map((MM=>MM.source._start()));await Promise.all(MM)}finally{(await MM)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const MM=await this._mutex.acquire();try{const MM=this.tracks.map((MM=>MM.source._flushOrWaitForOngoingClose(!0)));await Promise.all(MM),await Promise.all([...this._unfinalizedTargets].map((MM=>MM._close()))),this._unfinalizedTargets.clear()}finally{MM()}})():void("finalized"===this.state&&Ur._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(Ur._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const MM=await this._mutex.acquire();try{const MM=this.tracks.map((MM=>MM.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(MM),await this._muxer.finalize(),this._rootWriterPromise){const MM=await this._rootWriterPromise;MM.finalized||(await MM.flush(),await MM.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(rM){throw this.state="canceled",rM}finally{await Promise.all([...this._unfinalizedTargets].map((MM=>MM._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),MM()}})()}}class Uj{constructor(MM,rM,iM,OM,SM){this.frameDurationS=iM,this.onFragment=SM,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=rM,this.lastTimestampUs=rM;const jM=MM=>{this.boxes.push(MM)};this.output=new Ej({format:new Qj({fastStart:"fragmented",minimumFragmentDuration:OM,onFtyp:jM,onMoov:jM,onMoof:jM,onMdat:MM=>{jM(MM),this.fragmentDone()}}),target:new sS}),this.source=new Sj(MM),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(MM,rM){const iM=new Uint8Array(MM.byteLength);MM.copyTo(iM),this.addData(iM,MM.type,MM.timestamp,rM)}addData(MM,rM,iM,OM){const SM=new KS(MM,rM,(iM-this.firstTimestampUs)/1e6,this.frameDurationS),jM=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,iM),this.pending=this.pending.then((()=>(this.addingTimestampUs=iM,this.source.add(SM,jM?{decoderConfig:OM}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var MM;const rM=Gj(this.boxes);this.boxes=[],this.onFragment({bytes:rM,endUs:null!==(MM=this.addingTimestampUs)&&void 0!==MM?MM:this.lastTimestampUs+1e6*this.frameDurationS})}}function Gj(MM){const rM=new Uint8Array(MM.reduce(((MM,rM)=>MM+rM.byteLength),0));let iM=0;for(const OM of MM)rM.set(OM,iM),iM+=OM.byteLength;return rM}class Cj{constructor(MM,rM,iM,OM){this.plan=MM,this.emit=iM,this.onSlotsLow=OM,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=rM}get partCount(){return this.nextIndex}addFragment(MM){let{bytes:rM,endUs:iM}=MM;this.pendingBytes>0&&this.pendingBytes+rM.byteLength>this.plan.maxBytes&&this.emitPending();let OM=0;for(;rM.byteLength-OM>this.plan.maxBytes-this.pendingBytes;){const MM=this.plan.maxBytes-this.pendingBytes;this.hold(rM.subarray(OM,OM+MM)),OM+=MM,this.emitPending()}this.hold(rM.subarray(OM)),this.completeUntilUs=iM,iM-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(MM){this.pending.push(MM),this.pendingBytes+=MM.byteLength}emitPending(){var MM;const rM=Gj(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(MM=this.completeUntilUs)&&void 0!==MM?MM:this.partStartUs,this.emit({index:this.nextIndex++,bytes:rM,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class ej{constructor(MM,rM,iM,OM){let SM=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,jM=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=MM,this.partPlan=rM,this.post=iM,this.onSegmentEncoded=OM,this.journal=SM,this.onMuxFailed=jM,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(MM){const rM=tM()-MM;(rM<this.epochOffsetMs||rM-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=rM)}recordingMs(MM){return MM/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(MM){const rM=null===this.segment?0:(MM-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||rM>=this.segmentDurationMs))&&(this.pendingCutUs=MM);const iM=this.keyFrameMissed||this.pendingCutUs===MM;return this.cutRequested=!1,this.keyFrameMissed=!1,iM}onChunk(MM,rM,iM){if(null!==rM&&void 0!==rM&&rM.decoderConfig&&(this.decoderConfig=rM.decoderConfig),null!==this.pendingCutUs&&MM.timestamp>=this.pendingCutUs){if("key"!==MM.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(MM.timestamp,iM),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const OM=this.segment;if(null===OM.journalHeader)return OM.mp4.add(MM,this.decoderConfig),MM.byteLength;const SM=new Uint8Array(MM.byteLength);return MM.copyTo(SM),OM.mp4.addData(SM,MM.type,MM.timestamp,this.decoderConfig),OM.chunkTimestampsUs.push(MM.timestamp),OM.unjournaled.push({recordingId:OM.journalHeader.recordingId,segmentId:OM.journalId,index:OM.chunkCount++,timestampUs:MM.timestamp,key:"key"===MM.type,data:SM}),performance.now()-OM.lastJournalMs>=250&&this.journalChunks(OM),MM.byteLength}openSegment(MM,rM){const iM=this.nextJournalId++,OM=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:iM,containerCodec:rM.containerCodec,codec:rM.codec,width:rM.width,height:rM.height,fps:rM.fps,decoderConfig:this.decoderConfig,firstTimestampUs:MM,epochOffsetMs:this.epochOffsetMs}:null,SM=[],jM=new Cj(this.partPlan,MM,(jM=>{this.postPart(iM,rM,MM,jM,null===OM?null:SM)}),(()=>{var MM;(null===(MM=this.segment)||void 0===MM?void 0:MM.journalId)===iM&&this.requestCut()})),aM=this.partPlan.keyframeIntervalMs/1e3*.9,PM=new Uj(rM.containerCodec,MM,1/rM.fps,aM,(MM=>{jM.addFragment(MM)}));return this.post({type:"videoSegmentOpened",journalId:iM}),{mp4:PM,parts:jM,format:rM,journalId:iM,journalHeader:OM,unjournaled:[],chunkTimestampsUs:SM,chunkCount:0,lastJournalMs:performance.now()}}postPart(MM,rM,iM,OM,SM){const{width:jM,height:aM,codec:PM,fps:nM}=rM,{startMs:QM}=function(MM,rM,iM,OM){const SM=MM/1e3+iM;return{startMs:SM,endMs:SM+rM/1e3+1e3/OM}}(iM,0,this.epochOffsetMs,nM),{completeUntilUs:zM}=OM,LM=null===zM?QM:this.recordingMs(zM),mM=OM.bytes.buffer,HM=null===SM||null===zM?null:function(MM,rM){let iM=0,OM=MM.length;for(;iM<OM;){const SM=iM+OM>>1;MM[SM]<rM?iM=SM+1:OM=SM}return iM}(SM,zM);this.post({type:"videoPart",journalId:MM,index:OM.index,bytes:mM,meta:{startMs:QM,endMs:LM,width:jM,height:aM,codec:PM},completeUntilUs:zM,completeUntilIndex:HM},[mM])}journalChunks(MM){const rM=MM.journalHeader;null!==this.journal&&null!==rM&&0!==MM.unjournaled.length&&(rM.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...rM},MM.unjournaled),MM.unjournaled=[],MM.lastJournalMs=performance.now())}closeSegment(MM){const rM=this.segment;this.segment=null,this.pendingCutUs=null,null!==rM&&(MM&&this.onSegmentEncoded(),this.journalChunks(rM),this.finishing=this.finishing.then((async()=>{let MM=null;try{await rM.mp4.finish()}catch(iM){MM=iM}rM.parts.finish(),this.post({type:"videoSegmentClosed",journalId:rM.journalId,parts:rM.parts.partCount}),null!==MM&&(console.error("Failed to finish a session replay video segment.",MM),this.onMuxFailed(MM instanceof Error?MM.message:String(MM)))})).catch((MM=>{console.error("Failed to close a session replay video segment.",MM)})))}whenFinished(){return this.finishing}}function bj(MM,rM){return MM.width===rM.width&&MM.height===rM.height}function wj(MM,rM){return null!==MM&&rM>=MM}class tj{constructor(MM,rM,iM,OM,SM){let jM=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=MM,this.cssSize=iM,this.post=OM,this.preferSoftwareEncoder=SM,this.quality=new LM,this.limiter=void 0,this.segmenter=void 0,this.scaler=new EM,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new JM(MM.maxFps),this.captureFps=MM.maxFps,this.segmenter=new ej(MM.segmentDurationMs,rM,OM,(()=>{this.encoderFailures=0}),jM,(MM=>{this.failMuxer(MM)})),this.still=new eM(OM),this.stats=this.emptyStats()}handleFrame(MM,rM){const iM=performance.now();try{this.stats.deliveredFrames++;const OM=MM.timestamp/1e3;if(this.segmenter.noteFrameArrival(OM),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(OM))return void this.stats.droppedForFpsCap++;if(this.still.offer(MM,this.segmenter.recordingMs(MM.timestamp)),this.noteBackingSize({width:MM.displayWidth,height:MM.displayHeight}),this.noteCaptureFps(rM,iM),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(wj(this.rebuildDueMs,iM)||wj(this.fpsRebuildDueMs,iM))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,MM)}finally{MM.close();const rM=performance.now()-iM;this.stats.workerBusyMs+=rM,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,rM),this.maybePostStats(iM)}}resize(MM){0!==MM.width&&0!==MM.height&&(this.cssSize=MM,this.scheduleRebuildIfSizeChanged())}updateHealth(MM,rM){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const iM=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:MM,pingMs:rM});this.backpressureDropsSinceHealth=0,iM&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(MM){return this.hidden=MM,MM?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(MM){this.suspended=!0;const rM=this.operations.then(MM).catch((MM=>{console.error("Session replay encoder operation failed.",MM)})).finally((()=>{this.operations===rM&&(this.suspended=!1)}));return this.operations=rM,rM}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var MM;null===(MM=this.active)||void 0===MM||MM.encoder.close(),this.active=null}async drainAndCloseSegment(){const MM=this.active;null===MM||await async function(MM,rM){let iM;const OM=new Promise((MM=>{iM=setTimeout((()=>{MM(!1)}),rM)}));try{return await Promise.race([MM.then((()=>!0)),OM])}finally{clearTimeout(iM)}}(MM.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(MM,"flush timed out")}encode(MM,rM){const iM=this.segmenter.needsKeyFrame(rM.timestamp)||rM.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;iM&&(this.lastKeyframeUs=rM.timestamp);const OM=this.scaleToEncoder(MM,rM);MM.encoder.encode(OM,{keyFrame:iM}),OM!==rM&&OM.close(),this.stats.encodedFrames++}scaleToEncoder(MM,rM){let iM=rM;if(!this.scalerFailed)try{iM=this.scaler.scale(rM,MM.size)}catch(OM){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",OM)}return iM.displayWidth===MM.size.width&&iM.displayHeight===MM.size.height||(MM.sentMismatchedFrame=!0),iM}onEncoderOutput(MM,rM,iM){const OM=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(MM,rM,{containerCodec:iM.candidate.containerCodec,codec:iM.candidate.config.codec,width:iM.size.width,height:iM.size.height,fps:iM.fps}),this.stats.workerBusyMs+=performance.now()-OM}noteBackingSize(MM){null!==this.backingSize&&bj(this.backingSize,MM)||(this.backingSize=MM,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(MM,rM){this.captureFps=MM,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=rM+2e3:this.fpsRebuildDueMs=null}targetSize(){var MM;const rM=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(MM,rM,iM){const OM=rM.width*rM.height<MM.width*MM.height?rM:MM;let SM=mM(Math.max(OM.width,64)),jM=mM(Math.max(OM.height,64));if(HM({width:SM,height:jM})>iM){const MM=SM,rM=jM;for(SM=mM(SM*Math.sqrt(16*iM*16/(SM*jM))),jM=mM(SM*rM/MM);HM({width:SM,height:jM})>iM;)SM-=2,jM=mM(SM*rM/MM)}return{width:SM,height:jM}}(this.cssSize,null!==(MM=this.backingSize)&&void 0!==MM?MM:this.cssSize,rM)}scheduleRebuildIfSizeChanged(){null===this.active||bj(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const MM=this.quality.getLevel(),rM=this.encodeFps(),iM=this.targetSize(),OM=function(MM){const rM={width:MM.width,height:MM.height,bitrate:MM.bitrate,framerate:MM.maxFps},iM=[],OM=[MM.preferSoftware?"prefer-software":"prefer-hardware","no-preference"];for(const SM of OM)for(const MM of dM)for(const OM of yM)for(const jM of lM)iM.push({config:{...rM,codec:MM,hardwareAcceleration:SM,bitrateMode:OM,latencyMode:jM,avc:{format:"avc"}},containerCodec:"avc"});return iM.push({config:{...rM,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),iM}({...iM,bitrate:Math.round(hM(this.config,iM,MM.areaScale)*rM/this.config.maxFps),maxFps:rM,preferSoftware:this.preferSoftwareEncoder});let SM=null,jM=0;for(let QM=this.firstViableCandidate;QM<OM.length&&null===SM;QM++){const MM=await VideoEncoder.isConfigSupported(OM[QM].config).catch((MM=>(console.warn("VideoEncoder.isConfigSupported threw.",OM[QM].config,MM),null)));null!==MM&&void 0!==MM&&MM.supported&&(SM=OM[QM],jM=QM,this.firstViableCandidate=QM)}if(null===SM)return void this.markUnavailable(`No supported encoder config at ${iM.width}x${iM.height}`);const aM=new VideoEncoder({output:(MM,rM)=>{this.onEncoderOutput(MM,rM,PM)},error:MM=>{this.failEncoder(PM,MM.message)}}),PM={encoder:aM,candidates:OM,candidateIndex:jM,candidate:SM,size:iM,fps:rM,sentMismatchedFrame:!1};this.active=PM,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{aM.configure(SM.config)}catch(nM){return void this.failEncoder(PM,nM instanceof Error?nM.message:String(nM))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(MM,rM){console.error("Session replay encoder failed.",MM.candidate.config,rM),this.active===MM&&(this.active=null,"closed"!==MM.encoder.state&&MM.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(MM,rM,iM){var OM;let SM=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const jM=null===(OM=MM[rM])||void 0===OM?void 0:OM.config.hardwareAcceleration;if(!("prefer-hardware"===jM&&iM||"no-preference"!==jM&&SM))return rM+1;for(let aM=rM+1;aM<MM.length;aM++)if(MM[aM].config.hardwareAcceleration!==jM)return aM;return MM.length}(MM.candidates,MM.candidateIndex,MM.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${rM}`))}failMuxer(MM){if(this.unavailable)return;const rM=this.active;this.active=null,null!==rM&&"closed"!==rM.encoder.state&&rM.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(`Muxer failed: ${MM}`)}markUnavailable(MM){console.warn(`Session replay video stopped: ${MM}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:MM})}))}maybePostStats(MM){var rM,iM,OM,SM;const jM=MM-this.statsWindowStartMs;if(jM<5e3)return;const aM=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:jM,qualityLevel:this.quality.getLevelIndex(),codec:null!==(rM=null===aM||void 0===aM?void 0:aM.candidate.config.codec)&&void 0!==rM?rM:null,hardwareAcceleration:null!==(iM=null===aM||void 0===aM?void 0:aM.candidate.config.hardwareAcceleration)&&void 0!==iM?iM:null,encodeWidth:null!==(OM=null===aM||void 0===aM?void 0:aM.size.width)&&void 0!==OM?OM:0,encodeHeight:null!==(SM=null===aM||void 0===aM?void 0:aM.size.height)&&void 0!==SM?SM:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=MM}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let gj=null;function uj(MM){let rM=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(MM,{transfer:rM})}self.onmessage=MM=>{const rM=MM.data;switch(rM.type){case"init":gj=new tj(rM.videoConfig,rM.partPlan,rM.cssSize,uj,rM.preferSoftwareEncoder,rM.journalRecordingId&&QM.supported?{recordingId:rM.journalRecordingId,journal:new QM}:null);break;case"frame":gj.handleFrame(rM.frame,rM.captureFps);break;case"resize":gj.resize(rM.cssSize);break;case"health":gj.updateHealth(rM.gameFps,rM.pingMs);break;case"hidden":gj.setHidden(rM.hidden);break;case"flush":gj.flushSegment();break;case"cut":gj.cutAtNextFrame();break;case"gameJoined":gj.gameJoined()}}})();', "Worker", void 0, iM.p + "sessionReplayVideo.worker.63062aef.worker.js")
    }
    var nM = iM(3057),
      QM = iM(22),
      zM = iM(83);
    class LM {
      constructor(MM) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / MM
      }
      setMaxFps(MM) {
        this.intervalMs = 1e3 / MM
      }
      shouldKeep(MM) {
        return !(MM < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = MM - this.nextDueMs > this.intervalMs ? MM + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class mM {
      constructor(MM, rM, iM) {
        this.budgetMsPerSecond = MM, this.minFps = rM, this.smoothedCostMs = iM
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      record(MM) {
        const rM = this.affordableFps() < this.minFps ? .5 : .05;
        this.smoothedCostMs += (MM - this.smoothedCostMs) * rM
      }
      maxFps(MM) {
        const rM = this.affordableFps();
        return rM < this.minFps ? .1 : Math.min(MM, rM)
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class HM {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
        this.worker = MM, this.onUnavailable = OM, this.canvas = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = iM.msPerSecond, this.frameCostFloorMs = iM.frameCostFloorMs, this.budget = new mM(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = rM, this.captureFps = this.budgetedFps(), this.frameLimiter = new LM(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps
        }
      }
      start(MM) {
        this.canvas = MM
      }
      stop() {
        this.canvas = null
      }
      setMaxFps(MM) {
        this.wantedFps = MM, this.applyFps()
      }
      onAfterRender() {
        const MM = performance.timeOrigin + performance.now();
        if (null === this.canvas || !this.frameLimiter.shouldKeep(MM)) return;
        const rM = performance.now();
        let iM = null;
        try {
          iM = new VideoFrame(this.canvas, {
            timestamp: Math.round(1e3 * MM)
          });
          const rM = {
            type: "frame",
            frame: iM,
            captureFps: this.captureFps
          };
          this.worker.postMessage(rM, [iM])
        } catch (jM) {
          var OM;
          null === (OM = iM) || void 0 === OM || OM.close(), 0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", jM);
          return void(!(jM instanceof DOMException && "InvalidStateError" === jM.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${jM instanceof Error?jM.message:String(jM)}`)))
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0;
        const SM = performance.now() - rM;
        this.budget.record(Math.max(2 * SM, this.frameCostFloorMs)), this.applyFps()
      }
      applyFps() {
        const MM = this.budgetedFps();
        MM !== this.captureFps && (this.captureFps = MM, this.frameLimiter.setMaxFps(MM))
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var hM = iM(1327);
    class JM {
      constructor(MM) {
        this.events = MM, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const MM = (0, hM.M)().gameRender();
        if (null === MM || MM.canvas === this.canvas) return MM;
        const rM = null !== this.canvas;
        return this.canvas = MM.canvas, this.observe(MM.canvas), rM ? this.events.onCanvasSwapped(MM.canvas) : this.events.onFirstCanvas(MM.canvas), MM
      }
      stop() {
        var MM, rM;
        null === (MM = this.resizeObserver) || void 0 === MM || MM.disconnect(), null === (rM = this.listeners) || void 0 === rM || rM.abort()
      }
      observe(MM) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: rM
        } = this.listeners;
        MM.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: rM
        }), MM.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: rM
        });
        const iM = MM.getBoundingClientRect();
        this.size = {
          width: Math.round(iM.width),
          height: Math.round(iM.height)
        }, this.resizeObserver = new ResizeObserver((MM => {
          const rM = MM[MM.length - 1].contentRect,
            iM = {
              width: Math.round(rM.width),
              height: Math.round(rM.height)
            };
          0 !== iM.width && 0 !== iM.height && (this.size = iM, this.events.onResized(iM))
        })), this.resizeObserver.observe(MM)
      }
    }
    const dM = 4194304,
      yM = 16777216,
      lM = [2, 4, 9, 3],
      EM = OM.h,
      UM = [EM.MouseInteraction, EM.MouseMove, EM.TouchMove],
      GM = [EM.MouseMove, EM.MouseInteraction, EM.Scroll, EM.ViewportResize, EM.Input, EM.TouchMove, EM.MediaInteraction, EM.Drag],
      CM = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function eM(MM) {
      if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return !1;
      const rM = MM.timestamp;
      return "number" === typeof rM && rM > 0 && rM <= 864e13
    }
    class bM {
      constructor() {
        this.distinctId = null, this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage(MM) {
        this.distinctId ||= MM, this.messageCount++
      }
      addEvent(MM) {
        this.eventCount++;
        const rM = function(MM) {
          var rM;
          return MM.type === OM.g.IncrementalSnapshot ? null === (rM = MM.data) || void 0 === rM ? void 0 : rM.source : void 0
        }(MM);
        this.timestamps.push(MM.timestamp), this.active.push(GM.includes(rM));
        const iM = function(MM) {
          var rM;
          const iM = MM.data;
          if (MM.type === OM.g.Custom && "$json_ld" === (null === iM || void 0 === iM ? void 0 : iM.tag)) return;
          const SM = "string" === typeof(null === iM || void 0 === iM ? void 0 : iM.href) ? iM.href.trim() : void 0,
            jM = "string" === typeof(null === iM || void 0 === iM || null === (rM = iM.payload) || void 0 === rM ? void 0 : rM.href) ? iM.payload.href.trim() : void 0;
          return SM || jM || void 0
        }(MM);
        iM && this.addUrl(iM), rM === EM.MouseInteraction && lM.includes(MM.data.type) && this.clickCount++, rM === EM.Input && this.keypressCount++, UM.includes(rM) && this.mouseActivityCount++;
        const SM = MM.data;
        if (MM.type === OM.g.Plugin && "rrweb/console@1" === (null === SM || void 0 === SM ? void 0 : SM.plugin)) {
          var jM;
          const MM = CM.get(null === (jM = SM.payload) || void 0 === jM ? void 0 : jM.level);
          "warn" === MM ? this.consoleWarnCount++ : "error" === MM ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(MM) {
        if (null === this.distinctId) throw new Error("A page recording chunk needs a message before its summary");
        return {
          distinctId: this.distinctId,
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: MM,
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
      addUrl(MM) {
        const rM = MM.slice(0, 4096);
        this.firstUrl ??= rM, this.urls.size < 25 && !this.urls.has(rM) && this.urlsLength + rM.length <= 8192 && (this.urls.add(rM), this.urlsLength += rM.length)
      }
      activeMs() {
        var MM;
        const rM = this.timestamps.map(((MM, rM) => rM)).sort(((MM, rM) => this.timestamps[MM] - this.timestamps[rM]));
        let iM = 0,
          OM = null,
          SM = 0;
        for (const aM of rM) {
          const MM = this.timestamps[aM],
            rM = this.active[aM],
            PM = !OM || rM && !OM.isActive || OM.isActive && SM + 5e3 < MM;
          var jM;
          if (SM = rM ? MM : SM, PM) null !== (jM = OM) && void 0 !== jM && jM.isActive && (iM += Math.max(1, OM.end - OM.start)), OM = {
            start: MM,
            end: MM,
            isActive: rM
          };
          else OM.end = MM
        }
        return null !== (MM = OM) && void 0 !== MM && MM.isActive && (iM += Math.max(1, OM.end - OM.start)), Math.floor(iM)
      }
    }
    const wM = 5592405.333333333;
    class tM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = MM, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.counter = new bM, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get dL() {
        return 0 === this.lines.length
      }
      add(MM) {
        const rM = [];
        let iM = 0,
          OM = 1 / 0,
          SM = -1 / 0;
        const jM = MM.events.filter(eM);
        for (const PM of jM) {
          const jM = JSON.stringify([MM.windowId, PM]) + "\n";
          rM.push(jM), iM += jM.length, OM = Math.min(OM, PM.timestamp), SM = Math.max(SM, PM.timestamp)
        }
        if (0 === rM.length) return null;
        const aM = !this.dL && this.chars + iM > this.chunkChars ? this.finish() : null;
        this.counter.addMessage(MM.distinctId);
        for (const PM of jM) this.counter.addEvent(PM);
        return this.lines.push(...rM), this.chars += iM, this.startMs = Math.min(this.startMs, OM), this.endMs = Math.max(this.endMs, SM), aM
      }
      finish() {
        if (this.dL) return null;
        const {
          startMs: MM,
          endMs: rM,
          counter: iM,
          chunkIndex: OM,
          tailedChars: SM
        } = this, jM = {
          text: this.lines.join(""),
          startMs: MM,
          endMs: rM,
          counter: iM,
          chunkIndex: OM,
          tailedChars: SM
        };
        return this.reset(), jM
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > wM) return null;
        const MM = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, MM
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.counter = new bM, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function gM(MM, rM) {
      let {
        startMs: iM,
        endMs: OM,
        counter: SM
      } = MM, {
        bytes: jM,
        inflatedBytes: aM
      } = rM;
      return jM.byteLength > dM || aM > yM ? (console.warn(`Session replay: dropped a ${aM}-byte page recording chunk, over the size limits`), null) : {
        bytes: jM,
        startMs: iM,
        endMs: OM,
        summary: SM.finish(aM)
      }
    }
    var uM = iM(34647);
    class RM {
      constructor(MM, rM, iM, OM) {
        this.uploader = MM, this.timing = rM, this.journal = iM, this.packer = OM, this.writer = new tM, this.cutNext = !1, this.packing = [], this.tailTimer = null
      }
      add(MM) {
        this.pack(this.writer.add(MM)), (this.cutNext || this.timing.cutsEachBatch()) && (this.cutNext = !1, this.cut());
        const rM = this.journal;
        null === rM || null !== this.tailTimer || this.writer.dL || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const MM = this.writer.takeTail();
          null !== MM && rM.domTail(MM)
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
      pack(MM) {
        if (this.timing.packsNow()) {
          for (const MM of this.packing) MM.packed ??= (0, uM.c)(MM.text.text);
          return this.packer.forgetWaiting(), null !== MM && this.packing.push({
            text: MM,
            packed: (0, uM.c)(MM.text)
          }), void this.queuePacked()
        }
        if (null === MM) return;
        const rM = null === this.journal ? null : function(MM) {
          let {
            text: rM,
            startMs: iM,
            endMs: OM,
            counter: SM,
            chunkIndex: jM,
            tailedChars: aM
          } = MM;
          return aM === rM.length || rM.length > wM ? null : {
            chunkIndex: jM,
            fromChar: aM,
            text: rM.slice(aM),
            startMs: iM,
            endMs: OM,
            summary: SM.finish(0)
          }
        }(MM);
        null !== rM && this.journal.domTail(rM);
        const iM = {
          text: MM,
          packed: null
        };
        this.packing.push(iM), this.packer.pack(MM.text).then((MM => {
          iM.packed = MM, this.queuePacked()
        }), (() => {
          iM.packed = (0, uM.c)(MM.text), this.queuePacked()
        }))
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: MM,
            packed: rM
          } = this.packing.shift();
          this.enqueue(MM.chunkIndex, gM(MM, rM))
        }
      }
      enqueue(MM, rM) {
        var iM;
        if (null === rM) return void(null === (iM = this.journal) || void 0 === iM || iM.domTailDropped(MM));
        const {
          startMs: OM,
          endMs: SM,
          summary: jM
        } = rM, aM = rM.bytes.buffer, PM = {
          startMs: OM,
          endMs: SM,
          byteLength: aM.byteLength,
          summary: jM
        }, nM = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: aM,
          meta: {
            type: "dom",
            chunk: PM
          }
        });
        var QM, zM;
        null === nM ? null === (QM = this.journal) || void 0 === QM || QM.domTailDropped(MM) : null === (zM = this.journal) || void 0 === zM || zM.domQueued(nM, aM, PM, MM)
      }
    }

    function pM() {
      return aM()('(()=>{var MM={7:(MM,rM,iM)=>{function OM(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function SM(MM){return MM instanceof Uint8Array&&(!OM()||!Buffer.isBuffer(MM))}function jM(MM){return MM instanceof ArrayBuffer}function aM(MM){return!!OM()&&Buffer.isBuffer(MM)}var PM=iM(16).d,nM=iM(18).e,QM="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";rM.e=function(MM){if(!SM(MM)&&!jM(MM)&&!aM(MM))throw new TypeError(QM);var rM=!1,iM=!1;SM(MM)?rM=!0:jM(MM)&&(iM=!0,MM=new Uint8Array(MM));var OM,PM,zM,LM=new nM(MM),mM=LM.maxCompressedLength();if(rM?(OM=new Uint8Array(mM),zM=LM.compressToBuffer(OM)):iM?(OM=new ArrayBuffer(mM),PM=new Uint8Array(OM),zM=LM.compressToBuffer(PM)):(OM=Buffer.alloc(mM),zM=LM.compressToBuffer(OM)),!OM.slice){var HM=new Uint8Array(Array.prototype.slice.call(OM,0,zM));if(rM)return HM;if(iM)return HM.buffer;throw new Error("Not implemented")}return OM.slice(0,zM)}},18:(MM,rM)=>{var iM=new Array(15);function OM(MM,rM){return 506832829*MM>>>rM}function SM(MM,rM){return MM[rM]+(MM[rM+1]<<8)+(MM[rM+2]<<16)+(MM[rM+3]<<24)}function jM(MM,rM,iM){return MM[rM]===MM[iM]&&MM[rM+1]===MM[iM+1]&&MM[rM+2]===MM[iM+2]&&MM[rM+3]===MM[iM+3]}function aM(MM,rM,iM,OM,SM){return iM<=60?(OM[SM]=iM-1<<2,SM+=1):iM<256?(OM[SM]=240,OM[SM+1]=iM-1,SM+=2):(OM[SM]=244,OM[SM+1]=iM-1&255,OM[SM+2]=iM-1>>>8,SM+=3),function(MM,rM,iM,OM,SM){var jM;for(jM=0;jM<SM;jM++)iM[OM+jM]=MM[rM+jM]}(MM,rM,OM,SM,iM),SM+iM}function PM(MM,rM,iM,OM){return OM<12&&iM<2048?(MM[rM]=1+(OM-4<<2)+(iM>>>8<<5),MM[rM+1]=255&iM,rM+2):(MM[rM]=2+(OM-1<<2),MM[rM+1]=255&iM,MM[rM+2]=iM>>>8,rM+3)}function nM(MM,rM,iM,OM){for(;OM>=68;)rM=PM(MM,rM,iM,64),OM-=64;return OM>64&&(rM=PM(MM,rM,iM,60),OM-=60),PM(MM,rM,iM,OM)}function QM(MM,rM,PM,QM,zM){for(var LM=1;1<<LM<=PM&&LM<=14;)LM+=1;var mM=32-(LM-=1);"undefined"===typeof iM[LM]&&(iM[LM]=new Uint16Array(1<<LM));var HM,hM=iM[LM];for(HM=0;HM<hM.length;HM++)hM[HM]=0;var JM,dM,yM,lM,EM,UM,GM,CM,eM,bM,wM=rM+PM,tM=rM,gM=rM,uM=!0;if(PM>=15)for(JM=wM-15,yM=OM(SM(MM,rM+=1),mM);uM;){UM=32,lM=rM;do{if(dM=yM,GM=UM>>>5,UM+=1,lM=(rM=lM)+GM,rM>JM){uM=!1;break}yM=OM(SM(MM,lM),mM),EM=tM+hM[dM],hM[dM]=rM-tM}while(!jM(MM,rM,EM));if(!uM)break;zM=aM(MM,gM,rM-gM,QM,zM);do{for(CM=rM,eM=4;rM+eM<wM&&MM[rM+eM]===MM[EM+eM];)eM+=1;if(rM+=eM,zM=nM(QM,zM,CM-EM,eM),gM=rM,rM>=JM){uM=!1;break}hM[OM(SM(MM,rM-1),mM)]=rM-1-tM,EM=tM+hM[bM=OM(SM(MM,rM),mM)],hM[bM]=rM-tM}while(jM(MM,rM,EM));if(!uM)break;yM=OM(SM(MM,rM+=1),mM)}return gM<wM&&(zM=aM(MM,gM,wM-gM,QM,zM)),zM}function zM(MM){this.array=MM}zM.prototype.maxCompressedLength=function(){var MM=this.array.length;return 32+MM+Math.floor(MM/6)},zM.prototype.compressToBuffer=function(MM){var rM,iM=this.array,OM=iM.length,SM=0,jM=0;for(jM=function(MM,rM,iM){do{rM[iM]=127&MM,(MM>>>=7)>0&&(rM[iM]+=128),iM+=1}while(MM>0);return iM}(OM,MM,jM);SM<OM;)jM=QM(iM,SM,rM=Math.min(OM-SM,65536),MM,jM),SM+=rM;return jM},rM.e=zM},16:(MM,rM)=>{var iM=[0,255,65535,16777215,4294967295];function OM(MM,rM,iM,OM,SM){var jM;for(jM=0;jM<SM;jM++)iM[OM+jM]=MM[rM+jM]}function SM(MM,rM,iM,OM){var SM;for(SM=0;SM<OM;SM++)MM[rM+SM]=MM[rM-iM+SM]}function jM(MM){this.array=MM,this.pos=0}jM.prototype.readUncompressedLength=function(){for(var MM,rM,iM=0,OM=0;OM<32&&this.pos<this.array.length;){if(MM=this.array[this.pos],this.pos+=1,(rM=127&MM)<<OM>>>OM!==rM)return-1;if(iM|=rM<<OM,MM<128)return iM;OM+=7}return-1},jM.prototype.uncompressToBuffer=function(MM){for(var rM,jM,aM,PM,nM=this.array,QM=nM.length,zM=this.pos,LM=0;zM<nM.length;)if(rM=nM[zM],zM+=1,0===(3&rM)){if((jM=1+(rM>>>2))>60){if(zM+3>=QM)return!1;aM=jM-60,jM=1+((jM=nM[zM]+(nM[zM+1]<<8)+(nM[zM+2]<<16)+(nM[zM+3]<<24))&iM[aM]),zM+=aM}if(zM+jM>QM)return!1;OM(nM,zM,MM,LM,jM),zM+=jM,LM+=jM}else{switch(3&rM){case 1:jM=4+(rM>>>2&7),PM=nM[zM]+(rM>>>5<<8),zM+=1;break;case 2:if(zM+1>=QM)return!1;jM=1+(rM>>>2),PM=nM[zM]+(nM[zM+1]<<8),zM+=2;break;case 3:if(zM+3>=QM)return!1;jM=1+(rM>>>2),PM=nM[zM]+(nM[zM+1]<<8)+(nM[zM+2]<<16)+(nM[zM+3]<<24),zM+=4}if(0===PM||PM>LM)return!1;SM(MM,LM,PM,jM),LM+=jM}return!0},rM.d=jM}},rM={};var iM=function iM(OM){var SM=rM[OM];if(void 0!==SM)return SM.exports;var jM=rM[OM]={exports:{}};return MM[OM](jM,jM.exports,iM),jM.exports}(7);function OM(MM){const rM=(new TextEncoder).encode(MM);return{bytes:(0,iM.e)(rM),inflatedBytes:rM.byteLength}}const SM=self;self.onmessage=MM=>{const{id:rM,text:iM}=MM.data,jM={id:rM,...OM(iM)};SM.postMessage(jM,[jM.bytes.buffer])}})();', "Worker", void 0, iM.p + "replayDomChunk.worker.7b7a2cca.worker.js")
    }
    class WM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = MM, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null
      }
      pack(MM) {
        return new Promise(((rM, iM) => {
          var OM;
          const SM = null !== (OM = this.worker) && void 0 !== OM ? OM : this.start();
          if (null === SM) return void iM(this.failure);
          const jM = this.nextId++;
          this.waiting.set(jM, {
            resolve: rM,
            reject: iM
          });
          const aM = {
            id: jM,
            text: MM
          };
          SM.postMessage(aM), this.watchdog ??= this.startWatchdog()
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
          this.worker = new pM
        } catch (MM) {
          return this.broke(`didn't start: ${String(MM)}`), null
        }
        return this.worker.onmessage = MM => {
          const {
            id: rM,
            bytes: iM,
            inflatedBytes: OM
          } = MM.data, SM = this.waiting.get(rM);
          this.waiting.delete(rM), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === SM || void 0 === SM || SM.resolve({
            bytes: iM,
            inflatedBytes: OM
          })
        }, this.worker.onerror = MM => {
          this.broke(MM.message || "it didn't load")
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
      broke(MM) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${MM}`), this.fail(new Error(`page recording worker failed: ${MM}`))
      }
      fail(MM) {
        var rM;
        this.failure ??= MM, this.stopWatchdog(), null === (rM = this.worker) || void 0 === rM || rM.terminate(), this.worker = null;
        for (const {
            reject: iM
          }
          of this.waiting.values()) iM(MM);
        this.waiting.clear()
      }
    }
    var sM = iM(34785);
    var DM = iM(34631),
      kM = iM(94),
      ZM = iM(30),
      oM = iM(2579);
    const fM = {
      logStats: !1
    };

    function YM(MM) {
      const rM = ZM.g.getItem(MM);
      return "number" === typeof rM && Number.isFinite(rM) ? rM : null
    }
    const NM = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      AM = 12e4;
    class xM extends Error {
      constructor(MM, rM) {
        super(rM), this.reason = MM
      }
    }
    class vM {
      constructor(MM, rM, iM, OM, SM) {
        this.access = MM, this.uploadToken = rM, this.transport = iM, this.callbacks = OM, this.options = SM, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(MM) {
        return this.segments.has(MM)
      }
      open(MM, rM) {
        this.segments.set(MM, {
          journalId: MM,
          sequence: rM,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(MM, rM) {
        const iM = this.segments.get(MM);
        if (void 0 !== iM) {
          iM.parts.push(rM), iM.bytes += rM.bytes.byteLength, !iM.cut && null === iM.totalParts && iM.bytes > this.options.maxHeldBytes / 2 && (iM.cut = !0, this.callbacks.cut());
          for (const MM of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(MM, "byteCap"), this.downUntilMs = this.options.nowMs() + AM
          }
          this.pump()
        }
      }
      close(MM, rM) {
        const iM = this.segments.get(MM);
        void 0 !== iM && (iM.totalParts = rM, this.pump())
      }
      forget(MM) {
        this.segments.delete(MM)
      }
      releaseAll() {
        for (const MM of this.segments.values()) MM.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: MM.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let MM = 0;
        for (const rM of this.segments.values()) MM += rM.bytes;
        return MM
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let rM = this.nextWork(); null !== rM; rM = this.nextWork()) try {
            await this.advance(rM)
          } catch (MM) {
            console.warn(`Session replay part joiner failed on video segment ${rM.sequence}; uploading it straight to storage.`, MM), MM instanceof xM || (this.downUntilMs = this.options.nowMs() + AM), this.handBack(rM, MM instanceof xM ? MM.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const MM of this.segments.values())
          if (MM.sentParts < MM.parts.length || MM.totalParts === MM.parts.length) return MM;
        return null
      }
      async advance(MM) {
        if (MM.sentParts < MM.parts.length) return this.expectHeld(await this.sendPart(MM, MM.parts[MM.sentParts])), void MM.sentParts++;
        for (let rM = 0; this.owns(MM.journalId); rM++) {
          const iM = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: MM.sequence,
            parts: MM.parts.length
          })));
          if (!this.owns(MM.journalId)) return;
          if ("stored" === iM.outcome && iM.stored.parts === MM.parts.length) return this.segments.delete(MM.journalId), void this.callbacks.stored(MM.journalId, MM.sequence, iM.stored);
          if ("missing" !== iM.outcome || rM >= 2) throw this.failure(iM);
          for (const rM of iM.parts) {
            if (!this.owns(MM.journalId)) return;
            const iM = MM.parts[rM];
            if (void 0 === iM) throw new xM("missing", `the joiner asked for part ${rM} of ${MM.parts.length}`);
            this.expectHeld(await this.sendPart(MM, iM))
          }
        }
      }
      sendPart(MM, rM) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: MM.sequence,
          index: rM.index,
          meta: {
            ...rM.meta,
            startMs: Math.round(rM.meta.startMs),
            endMs: Math.round(rM.meta.endMs)
          },
          completeUntilUs: rM.completeUntilUs
        }, rM.bytes)))
      }
      expectHeld(MM) {
        if ("buffered" !== MM.outcome) throw this.failure(MM)
      }
      failure(MM) {
        if ("refused" === MM.outcome) {
          this.refused = !0;
          for (const MM of [...this.segments.values()]) this.handBack(MM, "refused");
          return new xM("refused", `refused: ${MM.reason}`)
        }
        const rM = "stored" === MM.outcome ? "shortStored" : "missing" === MM.outcome ? "missing" : "closed";
        return new xM(rM, `answered ${MM.outcome}`)
      }
      async request(MM) {
        for (let iM = 1;; iM++) {
          try {
            return await MM()
          } catch (rM) {
            if (iM >= 3) throw rM
          }
          await this.options.wait(1e3 * 2 ** (iM - 1))
        }
      }
      handBack(MM, rM) {
        this.segments.delete(MM.journalId) && (this.stats.handBacks[rM]++, this.callbacks.handBack(MM.journalId, MM.sequence, MM.parts, MM.totalParts))
      }
    }
    const FM = "/v1/release",
      BM = dM;
    var XM = iM(1215),
      IM = iM(34639),
      KM = iM(34788),
      qM = iM(34799);

    function TM(MM) {
      return `replayJoiner/${MM}`
    }
    class VM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IM.h;
        this.baseUrl = MM, this.keepalive = rM
      }
      postPart(MM, rM) {
        const iM = (0, KM.i)(MM, rM),
          OM = 15e3 + Math.ceil(iM.size / 16384 * 1e3);
        return this.post("/v1/part", iM, iM.size, OM, MM.sequence)
      }
      finish(MM) {
        const rM = JSON.stringify(MM);
        return this.post("/v1/finish", rM, (0, IM.k)(rM), 3e4, MM.sequence)
      }
      release(MM) {
        return !this.keepalive.isInFlight(TM(MM.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${FM}`, JSON.stringify(MM))
      }
      async post(MM, rM, iM, OM, SM) {
        const jM = `${this.baseUrl}${MM}`,
          aM = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: rM,
            signal: (0, XM.q)(OM)
          },
          PM = iM <= IM.e ? await this.keepalive.fetch(jM, aM, iM, TM(SM)) : await fetch(jM, aM);
        if (!PM.ok) throw new qM.d(`Part joiner ${MM} failed with ${PM.status}`, PM.status);
        return await PM.json()
      }
    }

    function cM(MM) {
      return {
        releaseUrl: `${MM.url}${FM}`,
        token: MM.token,
        relay: {
          url: `${MM.url}/v1/relay`,
          maxBytes: BM
        }
      }
    }
    var Mr = iM(34633),
      rr = iM(34670);

    function ir() {
      return (0, DM.d)().manifestUrl
    }
    const Or = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class Sr {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = rM, this.sendEnabled = iM, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Map, this.sending = !1, this.queuedSend = null, this.options = void 0, this.options = {
          ...Or,
          ...OM
        };
        const SM = Math.round((0, sM.e)());
        this.manifest = {
          recordingId: MM,
          startedAtMs: SM,
          endedAtMs: SM,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(MM, rM, iM) {
        const OM = {
            sequence: MM,
            ...rM,
            startMs: Math.round(rM.startMs),
            endMs: Math.round(rM.endMs),
            ...null === iM ? {} : {
              parts: iM
            }
          },
          SM = this.manifest.videoSegments.findIndex((rM => rM.sequence === MM)); - 1 === SM ? this.manifest.videoSegments.push(OM) : this.manifest.videoSegments[SM] = OM, this.sendSoon()
      }
      setStill(MM, rM) {
        var iM, OM;
        MM > (null !== (iM = null === (OM = this.manifest.still) || void 0 === OM ? void 0 : OM.atMs) && void 0 !== iM ? iM : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(MM),
          sequence: rM
        }, this.sendSoon())
      }
      addTelemetrySegment(MM, rM, iM) {
        this.manifest.telemetrySegments.push({
          sequence: MM,
          startMs: Math.round(rM),
          endMs: Math.round(iM)
        }), this.sendSoon()
      }
      addDomSegment(MM, rM) {
        this.pendingDom.set(MM, rM), this.sendSoon()
      }
      addCreatorGrant(MM, rM) {
        this.creatorGrants.set(MM, rM)
      }
      gameJoined(MM) {
        this.gameLeft();
        const rM = {
          ...MM,
          gameDisplayName: null,
          joinedAtMs: Math.round((0, sM.e)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        };
        return this.manifest.games.push(rM), rM
      }
      flagLastGameQuitAfterDeath(MM) {
        const rM = this.manifest.games.at(-1);
        return !(!rM || (null === MM ? null !== rM.leftAtMs : rM.gameNameWithVariation !== MM)) && (rM.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(MM) {
        const rM = this.manifest.games.at(-1);
        rM && null === rM.leftAtMs && (rM[MM] = !0)
      }
      gameLeft() {
        const MM = this.manifest.games.at(-1);
        MM && null === MM.leftAtMs && (MM.leftAtMs = Math.round((0, sM.e)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(MM) {
        this.schedule(1e3, MM)
      }
      send() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var rM;
        if (this.sending) return void(this.queuedSend = jr(null !== (rM = this.queuedSend) && void 0 !== rM ? rM : [], MM));
        const iM = this.prepareSend(MM);
        null !== iM && (this.sending = !0, this.postInTurn(iM).then((MM => {
          this.sending = !1;
          const rM = this.queuedSend;
          null !== rM ? (this.queuedSend = null, this.send(rM)) : "retryLater" === MM && this.sendSoon()
        })))
      }
      sendFinal() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: iM
          }
          of null !== (rM = this.prepareSend(MM)) && void 0 !== rM ? rM : []) {
          var rM;
          IM.h.sendBeacon(ir(), JSON.stringify(iM)) || (0, Mr.b)(ir(), iM)
        }
      }
      async postInTurn(MM) {
        for (const {
            request: rM,
            items: iM
          }
          of MM) {
          const MM = await (0, Mr.b)(ir(), rM);
          if ("retryLater" === MM) return MM;
          for (const rM of iM) rM.ack("uploaded" === MM)
        }
        return "uploaded"
      }
      schedule(MM, rM) {
        const iM = Date.now() + MM;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= iM) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const OM = setTimeout((() => {
          this.send(rM())
        }), MM);
        this.sendTimer = {
          timer: OM,
          dueMs: iM
        }
      }
      prepareSend(MM) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, sM.e)());
        const rM = this.pendingItems(MM);
        this.options.onSend({
          ...this.manifest,
          games: rM.flatMap((MM => "games" === MM.list ? [MM.value] : []))
        });
        const {
          recordingId: iM,
          startedAtMs: OM,
          endedAtMs: SM,
          still: jM
        } = this.manifest, aM = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: iM,
            startedAtMs: OM,
            endedAtMs: SM,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === jM ? {} : {
              still: jM
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, rr.c)(aM, rM)
      }
      pendingItems(MM) {
        const rM = [];
        for (const OM of this.creatorGrants.values()) this.ackedGrants.has(OM) || rM.push({
          list: "creatorGrants",
          value: OM,
          ack: () => {
            this.ackedGrants.add(OM)
          }
        });
        for (const OM of this.manifest.games) {
          const MM = JSON.stringify(OM);
          this.ackedGames.get(OM) !== MM && rM.push({
            list: "games",
            value: {
              ...OM
            },
            ack: () => {
              this.ackedGames.set(OM, MM)
            }
          })
        }
        for (const OM of this.manifest.videoSegments) this.ackedVideo.get(OM.sequence) !== OM && rM.push({
          list: "videoSegments",
          value: OM,
          ack: MM => {
            this.ackedVideo.set(OM.sequence, OM), MM && this.options.onListed({
              list: "videoSegments",
              value: OM
            })
          }
        });
        const iM = new Set;
        for (const OM of this.manifest.telemetrySegments) iM.add(OM.sequence), this.ackedTelemetry.has(OM) || rM.push({
          list: "telemetrySegments",
          value: OM,
          ack: MM => {
            this.ackedTelemetry.add(OM), MM && this.options.onListed({
              list: "telemetrySegments",
              value: OM
            })
          }
        });
        for (const [OM, SM] of this.pendingDom) rM.push({
          list: "domSegments",
          value: OM,
          ack: MM => {
            this.pendingDom.delete(OM), MM && SM()
          }
        });
        for (const OM of jr([], MM)) iM.has(OM.sequence) || rM.push({
          list: "telemetrySegments",
          value: OM,
          ack: () => {}
        });
        return rM
      }
    }

    function jr(MM, rM) {
      const iM = [...MM];
      for (const OM of rM) iM.some((MM => MM.sequence === OM.sequence)) || iM.push({
        sequence: OM.sequence,
        startMs: Math.round(OM.startMs),
        endMs: Math.round(OM.endMs)
      });
      return iM
    }
    var ar = iM(2590);

    function Pr(MM) {
      return {
        ...MM,
        videoSegments: [],
        telemetrySegments: [],
        games: MM.games.map((MM => ({
          ...MM
        })))
      }
    }
    class nr {
      constructor(MM, rM, iM, SM) {
        var jM;
        this.journal = MM, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: rM.recordingId,
          uploadToken: rM.uploadToken,
          expiresAtMs: rM.expiresAtMs,
          nextVideoSequence: 0,
          manifest: Pr(iM),
          endpoints: SM,
          lateUploadUntilMs: rM.expiresAtMs + OM.l,
          ...void 0 === rM.partJoiner ? {} : {
            partJoiner: cM(rM.partJoiner)
          }
        }, null === (jM = navigator.locks) || void 0 === jM || jM.request((0, ar.q)(rM.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      manifestSent(MM) {
        this.record.manifest = Pr(MM), this.putRecording()
      }
      videoQueued(MM, rM) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, rM + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), MM, rM)
      }
      videoPartLanded(MM, rM, iM) {
        this.landedVideo.set(MM, {
          segmentId: MM,
          ...rM
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: MM,
          ...rM
        }, iM)
      }
      telemetryQueued(MM, rM, iM, OM) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: MM,
          startMs: iM,
          endMs: OM,
          bytes: rM
        })
      }
      videoUploaded(MM) {
        this.journal.removeVideoChunks(this.record.recordingId, MM)
      }
      videoSettled(MM) {
        this.landedVideo.delete(MM), this.journal.removeVideo(this.record.recordingId, MM)
      }
      telemetryLanded(MM, rM, iM, OM) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: MM,
          startMs: iM,
          endMs: OM,
          bytes: rM,
          landed: !0
        })
      }
      telemetrySettled(MM) {
        this.journal.removeTelemetry(this.record.recordingId, MM)
      }
      domQueued(MM, rM, iM, OM) {
        var SM;
        this.record.nextDomSequence = Math.max(null !== (SM = this.record.nextDomSequence) && void 0 !== SM ? SM : 0, MM + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: MM,
          chunk: iM,
          bytes: rM
        }, OM)
      }
      domTail(MM) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...MM
        })
      }
      domTailDropped(MM) {
        this.journal.removeDomTail(this.record.recordingId, MM)
      }
      domLanded(MM, rM) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: MM,
          chunk: rM,
          bytes: null
        })
      }
      domSettled(MM) {
        this.journal.removeDom(this.record.recordingId, MM)
      }
      setMarker() {
        ZM.g.setItem(ar.m, !0)
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
    class Qr {
      constructor(MM) {
        this.deps = MM, this.pageHiding = !1
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(MM) {
        document.addEventListener("visibilitychange", (() => {
          const MM = document.hidden;
          this.deps.writeEvent(MM ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: MM
          }), MM && (this.deps.flushChunks(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()))
        }), {
          signal: MM
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: MM
        }), window.addEventListener("pagehide", (MM => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.deps.flushChunks(), this.deps.stills.beacon(), this.sendManifest(), MM.persisted || this.deps.releaseJoined()
        }), {
          signal: MM
        })
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((MM => {
          let {
            sequence: rM,
            meta: iM
          } = MM;
          return "telemetry" === iM.type ? [{
            sequence: rM,
            startMs: iM.startMs,
            endMs: iM.endMs
          }] : []
        }))
      }
    }
    var zr = iM(34793);
    const Lr = {
        count: 1,
        maxBytes: OM.s
      },
      mr = "image/jpeg";
    class Hr {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IM.h;
        this.uploader = MM, this.manifest = rM, this.relay = iM, this.keepalive = OM, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(MM, rM) {
        let {
          bytes: iM,
          small: OM,
          atMs: SM
        } = MM;
        const jM = iM.byteLength <= Lr.maxBytes ? iM : OM;
        null !== jM && (this.latest = {
          bytes: jM,
          small: OM,
          atMs: SM
        }, rM && this.upload())
      }
      upload() {
        var MM, rM;
        const iM = this.latest;
        if (this.stopped || null === iM || iM.atMs <= (null !== (MM = null === (rM = this.queued) || void 0 === rM ? void 0 : rM.atMs) && void 0 !== MM ? MM : -1 / 0)) return;
        const OM = this.takeSequence();
        this.queued = {
          atMs: iM.atMs,
          sequence: OM
        }, this.uploader.enqueue({
          kind: "still",
          contentType: mr,
          bytes: iM.bytes,
          meta: {
            type: "still",
            atMs: iM.atMs,
            sequence: OM
          },
          part: {
            sequence: OM,
            index: 0,
            slots: Lr
          }
        })
      }
      landed(MM) {
        this.manifest.setStill(MM.atMs, MM.sequence), this.uploader.closeSegment("still", MM.sequence)
      }
      dropped(MM) {
        this.uploader.closeSegment("still", MM.sequence)
      }
      beacon() {
        var MM, rM, iM, OM;
        const SM = this.latest;
        if (this.stopped || null === SM || SM.atMs <= (null !== (MM = null === (rM = this.manifest.contents.still) || void 0 === rM ? void 0 : rM.atMs) && void 0 !== MM ? MM : -1 / 0)) return;
        const jM = (null === (iM = this.queued) || void 0 === iM ? void 0 : iM.atMs) === SM.atMs ? this.queued : null;
        if (null !== jM && this.keepalive.isInFlight(mr)) return void this.manifest.setStill(SM.atMs, jM.sequence);
        const aM = null !== (OM = null === jM || void 0 === jM ? void 0 : jM.sequence) && void 0 !== OM ? OM : this.nextSequence,
          PM = this.uploader.peekTarget("still", aM, 0);
        if (void 0 !== PM)
          for (const nM of [SM.bytes, SM.small])
            if (null !== nM && this.sendBeacon(PM, nM)) return null === jM && this.takeSequence(), void this.manifest.setStill(SM.atMs, aM)
      }
      sendBeacon(MM, rM) {
        var iM, OM;
        const SM = null !== (iM = null === (OM = this.relay) || void 0 === OM ? void 0 : OM.beacon({
          method: "POST",
          url: MM.url,
          fields: MM.fields
        }, rM, mr, this.keepalive)) && void 0 !== iM ? iM : null;
        if (null !== SM) return SM;
        const {
          form: jM,
          byteLength: aM
        } = (0, zr.f)(MM, rM, mr);
        return this.keepalive.sendUploadBeacon(MM.url, jM, aM)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const MM = this.nextSequence++;
        return this.prefetchNext(), MM
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, mr, Lr)
      }
    }
    var hr = iM(2595);
    const Jr = IM.e;
    class dr {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now;
        this.transport = MM, this.uploadToken = rM, this.nextTelemetrySequence = iM, this.nowMs = OM, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null
      }
      prefetch(MM, rM, iM, OM) {
        this.request(this.segment(MM, rM, iM, OM), 0)
      }
      async get(MM, rM, iM, OM, SM) {
        const jM = this.segment(MM, rM, iM, SM),
          aM = jM.requests.find((MM => OM >= MM.first && OM < MM.end));
        if (void 0 === this.valid(jM, OM) && void 0 !== aM) {
          const MM = await aM.answer.catch((() => null));
          if (null !== MM && "rejected" in MM) return MM
        }
        let PM = this.valid(jM, OM);
        if (void 0 === PM) {
          const MM = await this.request(jM, OM).answer;
          if ("rejected" in MM) return MM;
          PM = MM[0]
        }
        return PM
      }
      takeTelemetry(MM) {
        const rM = this.telemetry;
        if ((null === rM || void 0 === rM ? void 0 : rM.sequence) === MM) return this.telemetry = null, yr(rM.sQ, this.nowMs()) ? rM.sQ.target : void 0
      }
      peek(MM, rM, iM) {
        const OM = this.segments.get(lr(MM, rM));
        return void 0 === OM ? void 0 : this.valid(OM, iM)
      }
      expire(MM, rM, iM) {
        const OM = this.segments.get(lr(MM, rM)),
          SM = null === OM || void 0 === OM ? void 0 : OM.sQ.get(iM);
        if (void 0 !== OM && void 0 !== SM)
          for (const [jM, aM] of OM.sQ) aM.expiresAtMs <= SM.expiresAtMs && OM.sQ.delete(jM)
      }
      forget(MM, rM) {
        this.segments.delete(lr(MM, rM))
      }
      segment(MM, rM, iM, OM) {
        const SM = lr(MM, rM);
        let jM = this.segments.get(SM);
        return void 0 === jM && (jM = {
          kind: MM,
          sequence: rM,
          contentType: iM,
          slots: OM,
          sQ: new Map,
          requests: []
        }, this.segments.set(SM, jM)), jM
      }
      valid(MM, rM) {
        const iM = MM.sQ.get(rM);
        return void 0 !== iM && yr(iM, this.nowMs()) ? iM.target : void 0
      }
      telemetryToAskFor() {
        const MM = this.nextTelemetrySequence(),
          rM = this.telemetry;
        return this.telemetryAsked === MM || null !== rM && rM.sequence === MM && yr(rM.sQ, this.nowMs()) ? null : MM
      }
      request(MM, rM) {
        const iM = rM < MM.slots.count ? MM.slots.count : rM + 1,
          OM = this.nowMs(),
          SM = "video" === MM.kind ? this.telemetryToAskFor() : null;
        null !== SM && (this.telemetryAsked = SM);
        const jM = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: MM.kind,
            sequence: MM.sequence,
            contentType: MM.contentType,
            parts: {
              first: rM,
              count: iM - rM,
              maxBytes: MM.slots.maxBytes
            },
            ...null === SM ? {} : {
              nextTelemetry: {
                sequence: SM,
                maxBytes: Jr
              }
            }
          }).then((iM => {
            var jM, aM;
            if ("rejected" in iM) return iM;
            const PM = OM + 1e3 * iM.expiresInSecs;
            iM.targets.forEach(((iM, OM) => {
              MM.sQ.set(rM + OM, {
                target: iM,
                expiresAtMs: PM
              })
            }));
            return null !== SM && SM >= this.nextTelemetrySequence() && (null !== (jM = null === (aM = this.telemetry) || void 0 === aM ? void 0 : aM.sequence) && void 0 !== jM ? jM : -1) <= SM && void 0 !== iM.telemetryTarget && (this.telemetry = {
              sequence: SM,
              sQ: {
                target: iM.telemetryTarget,
                expiresAtMs: PM
              }
            }), iM.targets
          })),
          aM = {
            first: rM,
            end: iM,
            answer: jM
          };
        MM.requests.push(aM);
        const PM = () => {
          MM.requests.splice(MM.requests.indexOf(aM), 1), null !== SM && this.telemetryAsked === SM && (this.telemetryAsked = null)
        };
        return jM.then(PM, PM), aM
      }
    }

    function yr(MM, rM) {
      return MM.expiresAtMs - 6e4 > rM
    }

    function lr(MM, rM) {
      return `${MM}:${rM}`
    }
    const Er = {
        maxAttempts: 10,
        baseBackoffMs: 1e3
      },
      Ur = ["video", "dom"],
      Gr = "video",
      Cr = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      er = "an earlier part of its segment was dropped",
      br = new Set([403, 408, 409, 429]);
    class wr {
      constructor(MM, rM, iM, OM) {
        this.transport = MM, this.uploadToken = rM, this.options = iM, this.callbacks = OM, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new dr(MM, rM, (() => {
          var MM;
          return null !== (MM = this.nextSequence.get("telemetry")) && void 0 !== MM ? MM : 0
        }))
      }
      get backlogBytes() {
        return this.queuedBytes
      }
      get uploadingKind() {
        return this.uploadInFlight ? this.queue[0].kind : null
      }
      queued() {
        return this.queue.map((MM => {
          let {
            kind: rM,
            sequence: iM,
            meta: OM
          } = MM;
          return {
            kind: rM,
            sequence: iM,
            meta: OM
          }
        }))
      }
      openSegment(MM, rM, iM) {
        const OM = this.takeSequence(MM);
        return this.prefetchTargets(MM, OM, rM, iM), OM
      }
      prefetchTargets(MM, rM, iM, OM) {
        this.stopped || this.targets.prefetch(MM, rM, iM, OM)
      }
      peekTarget(MM, rM, iM) {
        return this.targets.peek(MM, rM, iM)
      }
      closeSegment(MM, rM) {
        this.targets.forget(MM, rM), MM === Gr && this.brokenSegments.delete(rM)
      }
      enqueue(MM) {
        var rM, iM;
        const OM = null !== (rM = null === (iM = MM.part) || void 0 === iM ? void 0 : iM.sequence) && void 0 !== rM ? rM : null;
        if (this.stopped) return this.callbacks.onDropped(MM, "uploader stopped", OM), null;
        if (null !== OM && MM.kind === Gr && this.brokenSegments.has(OM)) return this.callbacks.onDropped(MM, er, OM), null;
        "still" === MM.kind && this.removeQueued(MM.kind);
        const SM = {
            ...MM,
            sequence: null !== OM && void 0 !== OM ? OM : this.takeSequence(MM.kind)
          },
          jM = this.queue.findIndex(((rM, iM) => (iM > 0 || !this.uploadInFlight) && Cr[rM.kind] > Cr[MM.kind]));
        return this.queue.splice(-1 === jM ? this.queue.length : jM, 0, SM), this.queuedBytes += MM.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(SM) ? SM.sequence : null
      }
      stop() {
        this.stopped = !0;
        for (const MM of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= MM.bytes.byteLength, this.callbacks.onDropped(MM, "uploader stopped", MM.sequence)
      }
      takeSequence(MM) {
        var rM;
        const iM = null !== (rM = this.nextSequence.get(MM)) && void 0 !== rM ? rM : 0;
        return this.nextSequence.set(MM, iM + 1), iM
      }
      removeQueued(MM) {
        for (let rM = this.queue.length - 1; rM >= (this.uploadInFlight ? 1 : 0); rM--)
          if (this.queue[rM].kind === MM) {
            const [MM] = this.queue.splice(rM, 1);
            this.queuedBytes -= MM.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const MM of Ur)
          for (let rM = this.uploadInFlight ? 1 : 0; rM < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
            if (this.queue[rM].kind !== MM) {
              rM++;
              continue
            }
            const [iM] = this.queue.splice(rM, 1);
            this.queuedBytes -= iM.bytes.byteLength, this.callbacks.onDropped(iM, "backlog over cap", iM.sequence), this.segmentBroken(iM)
          }
      }
      segmentBroken(MM) {
        if (void 0 !== MM.part && MM.kind === Gr) {
          this.brokenSegments.add(MM.sequence);
          for (let rM = this.queue.length - 1; rM >= (this.uploadInFlight ? 1 : 0); rM--) {
            const iM = this.queue[rM];
            iM.kind === Gr && void 0 !== iM.part && iM.sequence === MM.sequence && (this.queue.splice(rM, 1), this.queuedBytes -= iM.bytes.byteLength, this.callbacks.onDropped(iM, er, iM.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const MM = this.queue[0];
            this.uploadInFlight = !0;
            const rM = await this.upload(MM);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= MM.bytes.byteLength, "uploaded" !== rM.type ? (this.callbacks.onDropped(MM, rM.reason, MM.sequence), this.segmentBroken(MM), "refused" !== rM.type || this.stopped || "telemetry" !== MM.kind || (console.warn(`Session replay uploads refused (${rM.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(rM.reason))) : this.callbacks.onUploaded(MM, MM.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(MM) {
        let rM = null,
          iM = 0;
        for (let SM = 1;; SM++) {
          try {
            if (null === rM) {
              const iM = await this.requestTarget(MM);
              if ("rejected" in iM) {
                if (!iM.retryable) return {
                  type: "refused",
                  reason: iM.reason
                };
                throw new Error(`rejected for now: ${iM.reason}`)
              }
              rM = iM
            }
            try {
              "put" === rM.type ? await this.transport.put(rM.url, MM.bytes, MM.contentType, "dom" === MM.kind) : await this.transport.post(rM.target, MM.bytes, MM.contentType)
            } catch (OM) {
              if (OM instanceof qM.d && null !== OM.status && OM.status < 500 && !br.has(OM.status)) return console.warn(`Session replay ${MM.kind} segment ${MM.sequence} refused by storage:`, OM), {
                type: "dropped",
                reason: OM.message
              };
              throw OM
            }
            return {
              type: "uploaded"
            }
          } catch (OM) {
            const SM = OM instanceof Error ? OM.message : String(OM),
              jM = void 0 === MM.part ? "" : ` part ${MM.part.index}`;
            if (console.warn(`Session replay ${MM.kind} segment ${MM.sequence}${jM} upload failed:`, OM), OM instanceof qM.d && (403 === OM.status && (rM = null, void 0 !== MM.part && this.targets.expire(MM.kind, MM.sequence, MM.part.index)), ++iM >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: SM
            }
          }
          const jM = Math.min(3e4, this.options.baseBackoffMs * 2 ** (SM - 1));
          if (await this.options.wait(jM * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(MM) {
        const {
          part: rM
        } = MM;
        if (void 0 !== rM) {
          const iM = await this.targets.get(MM.kind, MM.sequence, MM.contentType, rM.index, rM.slots);
          return "rejected" in iM ? iM : {
            type: "post",
            target: iM
          }
        }
        const iM = "telemetry" === MM.kind && MM.bytes.byteLength <= Jr ? this.targets.takeTelemetry(MM.sequence) : void 0;
        if (void 0 !== iM) return {
          type: "post",
          target: iM
        };
        const OM = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: MM.kind,
          sequence: MM.sequence,
          contentType: MM.contentType,
          byteLength: MM.bytes.byteLength
        });
        return "rejected" in OM ? OM : {
          type: "put",
          url: OM.uploadUrl
        }
      }
    }
    var tr = iM(34820),
      gr = iM(34641),
      ur = iM(6998),
      Rr = iM(7006);
    class pr {
      constructor() {
        this.writer = new ur.d((0, sM.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(MM, rM) {
        null !== MM && (this.setActionBits(MM.getActionBits(), (0, sM.e)()), this.unsubscribers.push(MM.onKey(((MM, rM, iM, OM, SM) => {
          this.writer.writeKey(SM, OM ? (0, Rr.f)(MM) : 0, rM, iM, OM)
        })), MM.onActions(((MM, rM) => {
          this.setActionBits(MM, rM)
        })), MM.onPointerLock(((MM, rM) => {
          this.writer.writeEvent(rM, MM ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, hM.x)((() => {
          const MM = (0, hM.b)();
          this.writer.writeFrame((0, sM.e)() - MM, MM), this.framesSinceFpsSample++, rM()
        })))
      }
      writeState(MM, rM) {
        this.writer.writeState((0, sM.e)(), {
          backingWidth: MM.canvas.width,
          backingHeight: MM.canvas.height,
          cssWidth: MM.cssWidth,
          cssHeight: MM.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: MM.renderer,
          pingMs: MM.pingMs,
          hidden: rM,
          qualityLevel: MM.qualityLevel
        })
      }
      writeEvent(MM) {
        this.writer.writeEvent((0, sM.e)(), MM)
      }
      sampleFps() {
        const MM = performance.now(),
          rM = MM - this.lastFpsSampleMs,
          iM = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = MM, this.framesSinceFpsSample = 0, 0 === iM || rM <= 0 ? null : 1e3 * iM / rM
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const MM = this.writer.chunkStartMs,
          rM = (0, sM.e)(),
          iM = this.writer.takeChunk(rM);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(rM, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: iM,
          startMs: MM,
          endMs: rM
        }
      }
      stop() {
        for (const MM of this.unsubscribers) MM();
        this.unsubscribers = []
      }
      setActionBits(MM, rM) {
        MM !== this.actionBits && (this.actionBits = MM, this.writer.writeActions(rM, MM))
      }
    }
    class Wr {
      constructor(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = MM, this.slots = rM, this.manifest = iM, this.journal = OM, this.cut = SM, this.joiner = jM, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(MM) {
        switch (MM.type) {
          case "videoSegmentOpened": {
            var rM, iM;
            if (null !== (rM = this.joiner) && void 0 !== rM && rM.accepting) {
              var OM;
              const rM = this.uploader.takeSequence("video");
              this.joiner.open(MM.journalId, rM), this.openJournalId = MM.journalId, null === (OM = this.journal) || void 0 === OM || OM.videoQueued(MM.journalId, rM);
              break
            }
            const SM = this.uploader.openSegment("video", "video/mp4", this.slots);
            this.segments.set(MM.journalId, {
              sequence: SM,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = MM.journalId, null === (iM = this.journal) || void 0 === iM || iM.videoQueued(MM.journalId, SM);
            break
          }
          case "videoPart": {
            var SM;
            if (null !== (SM = this.joiner) && void 0 !== SM && SM.owns(MM.journalId)) {
              const {
                index: rM,
                bytes: iM,
                meta: OM,
                completeUntilUs: SM,
                completeUntilIndex: jM
              } = MM;
              this.joiner.addPart(MM.journalId, {
                index: rM,
                bytes: iM,
                meta: OM,
                completeUntilUs: SM,
                completeUntilIndex: jM
              });
              break
            }
            const rM = this.segments.get(MM.journalId);
            void 0 !== rM && this.enqueuePart(MM.journalId, rM.sequence, MM);
            break
          }
          case "videoSegmentClosed": {
            var jM;
            if (null !== (jM = this.joiner) && void 0 !== jM && jM.owns(MM.journalId)) {
              var aM;
              if (this.openJournalId === MM.journalId && (this.openJournalId = null), MM.parts > 0) this.joiner.close(MM.journalId, MM.parts);
              else this.joiner.forget(MM.journalId), null === (aM = this.journal) || void 0 === aM || aM.videoSettled(MM.journalId);
              break
            }
            const rM = this.segments.get(MM.journalId);
            if (void 0 === rM) break;
            rM.totalParts = MM.parts, this.openJournalId === MM.journalId && (this.openJournalId = null), this.maybeDone(MM.journalId, rM);
            break
          }
        }
      }
      joinedStored(MM, rM, iM) {
        this.manifest.setVideoSegment(rM, iM.meta, null), this.storedWhole.set(rM, MM)
      }
      joinedHandedBack(MM, rM, iM, OM) {
        const SM = {
          sequence: rM,
          settledParts: 0,
          totalParts: OM,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(MM, SM), this.uploader.prefetchTargets("video", rM, "video/mp4", this.slots);
        for (const jM of iM) this.enqueuePart(MM, rM, jM)
      }
      enqueuePart(MM, rM, iM) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: iM.bytes,
          meta: {
            type: "video",
            meta: iM.meta,
            journalId: MM,
            index: iM.index,
            completeUntilUs: iM.completeUntilUs,
            completeUntilIndex: iM.completeUntilIndex
          },
          part: {
            sequence: rM,
            index: iM.index,
            slots: this.slots
          }
        })
      }
      landed(MM, rM) {
        if (null !== MM.completeUntilUs && MM.meta.endMs > MM.meta.startMs) {
          var iM, OM;
          const SM = this.segments.get(MM.journalId);
          void 0 !== SM && (SM.landedParts = MM.index + 1), this.manifest.setVideoSegment(rM, MM.meta, MM.index + 1), null === (iM = this.journal) || void 0 === iM || iM.videoPartLanded(MM.journalId, {
            partsLanded: MM.index + 1,
            completeUntilUs: MM.completeUntilUs,
            meta: MM.meta
          }, null !== (OM = MM.completeUntilIndex) && void 0 !== OM ? OM : 0)
        }
        this.settled(MM)
      }
      dropped(MM) {
        this.settled(MM), MM.journalId === this.openJournalId && MM.journalId !== this.cutJournalId && (this.cutJournalId = MM.journalId, this.cut())
      }
      listed(MM, rM) {
        if (null !== rM)
          for (const [OM, SM] of this.segments) SM.sequence === MM && (SM.listedParts = Math.max(SM.listedParts, rM), this.maybeDone(OM, SM));
        else {
          const rM = this.storedWhole.get(MM);
          var iM;
          void 0 !== rM && (this.storedWhole.delete(MM), null === (iM = this.journal) || void 0 === iM || iM.videoSettled(rM))
        }
      }
      settled(MM) {
        const rM = this.segments.get(MM.journalId);
        void 0 !== rM && (rM.settledParts++, this.maybeDone(MM.journalId, rM))
      }
      maybeDone(MM, rM) {
        if (null === rM.totalParts || rM.settledParts < rM.totalParts) return;
        const iM = rM.listedParts >= rM.landedParts;
        var OM, SM;
        rM.uploaded || (rM.uploaded = !0, this.uploader.closeSegment("video", rM.sequence), iM || null === (OM = this.journal) || void 0 === OM || OM.videoUploaded(MM));
        iM && (this.segments.delete(MM), null === (SM = this.journal) || void 0 === SM || SM.videoSettled(MM))
      }
    }
    var sr = iM(2546),
      Dr = iM(2602),
      kr = iM(2611),
      Zr = iM(2571),
      or = iM(34833),
      fr = iM(34841);
    const Yr = 3 * IM.e / 4,
      Nr = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };

    function Ar(MM) {
      return new Promise((rM => {
        const iM = () => {
            clearTimeout(OM), window.removeEventListener("online", iM), rM()
          },
          OM = setTimeout(iM, MM);
        window.addEventListener("online", iM)
      }))
    }

    function xr(MM) {
      var rM;
      if (MM instanceof ErrorEvent) return MM.error instanceof Error && MM.filename.startsWith(window.location.origin);
      const iM = MM.reason;
      return iM instanceof Error && (null !== (rM = iM.stack) && void 0 !== rM ? rM : "").includes(window.location.origin)
    }
    class vr {
      constructor(MM, rM) {
        var iM;
        this.recording = MM, this.telemetry = new pr, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = null, this.stills = void 0, this.videoConfig = void 0, this.joinerAccess = void 0, this.joiner = null, this.platformType = void 0, this.debug = void 0, this.experiment = void 0, this.lifetime = new AbortController, this.timers = [], this.canvasWatch = new JM({
          onFirstCanvas: MM => {
            this.attachToCanvas(MM)
          },
          onCanvasSwapped: MM => {
            this.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(MM), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: MM => {
            this.postToWorker({
              type: "resize",
              cssSize: MM
            })
          },
          onContextLost: () => {
            this.telemetry.writeEvent("contextLost"), this.manifest.flagCurrentGame("hadError")
          },
          onContextRestored: () => {
            this.telemetry.writeEvent("contextRestored")
          }
        }), this.worker = null, this.capture = null, this.qualityLevel = 0, this.statsWindows = 0, this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0, this.videoStatus = void 0, this.videoStarted = !1, this.joinerAccess = rM.dryRun ? null : null !== (iM = MM.partJoiner) && void 0 !== iM ? iM : null;
        const SM = null === this.joinerAccess ? null : (0, KM.l)(cM(this.joinerAccess)),
          jM = rM.dryRun ? new zr.c : new zr.e((0, DM.d)().segmentUploadUrl, {
            relay: SM
          });
        this.videoConfig = rM.dryRun ? function(MM) {
          var rM, iM, SM, jM;
          const aM = OM.c[MM],
            PM = ZM.g.getItem("replayEncoder");
          return {
            ...aM,
            maxFps: null !== (rM = YM("replayMaxFps")) && void 0 !== rM ? rM : aM.maxFps,
            maxMacroblocks: null !== (iM = YM("replayMaxMacroblocks")) && void 0 !== iM ? iM : aM.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (SM = YM("replayCaptureBudgetMs")) && void 0 !== SM ? SM : aM.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (jM = YM("replayCaptureCostFloorMs")) && void 0 !== jM ? jM : aM.captureFrameCostFloorMs,
            softwareEncoderOnWindows: "software" === PM || "hardware" !== PM && aM.softwareEncoderOnWindows
          }
        }(rM.platformType) : MM.videoConfig && (0, OM.J)(MM.videoConfig, rM.platformType), this.platformType = rM.platformType;
        const aM = (0, kr.f)();
        this.videoStatus = "supported" !== aM ? aM : null === this.videoConfig ? "unsupported" : "recorded", (0, Dr.e)("recorded" === this.videoStatus ? "video" : "dom_only", MM), this.experiment = rM.dryRun ? {
          logStats: !0 === ZM.g.getItem("replayLogStats")
        } : fM, this.manifest = new Sr(MM.recordingId, MM.uploadToken, !rM.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: MM.expiresAtMs - 6e4,
          onSend: MM => {
            var rM;
            null === (rM = this.journal) || void 0 === rM || rM.manifestSent(MM)
          },
          onListed: MM => {
            let {
              list: rM,
              value: iM
            } = MM;
            var OM, SM, jM;
            "videoSegments" === rM ? null === (OM = this.video) || void 0 === OM || OM.listed(iM.sequence, null !== (SM = iM.parts) && void 0 !== SM ? SM : null) : null === (jM = this.journal) || void 0 === jM || jM.telemetrySettled(iM.sequence)
          }
        }), !rM.dryRun && gr.d.supported && (this.journal = new nr(new gr.d, MM, this.manifest.contents, (0, DM.d)())), this.debug = function() {
          const MM = {
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
          return window.sessionReplayDebug = MM, MM
        }(), this.uploader = new wr(jM, MM.uploadToken, {
          ...Er,
          maxBacklogBytes: Nr[rM.platformType],
          wait: Ar
        }, {
          onUploaded: (MM, rM) => {
            var iM;
            this.debug.uploadedBytesByKind[MM.kind] = (null !== (iM = this.debug.uploadedBytesByKind[MM.kind]) && void 0 !== iM ? iM : 0) + MM.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(MM.meta, rM, MM.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (MM, rM, iM) => {
            var OM;
            if (console.warn(`Session replay dropped a ${MM.kind} segment: ${rM}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === MM.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (OM = this.video) || void 0 === OM || OM.dropped(MM.meta);
            else if ("still" === MM.meta.type) this.stills.dropped(MM.meta);
            else if ("telemetry" === MM.meta.type && null !== iM) {
              var SM;
              null === (SM = this.journal) || void 0 === SM || SM.telemetrySettled(iM)
            } else if ("dom" === MM.meta.type && null !== iM) {
              var jM;
              null === (jM = this.journal) || void 0 === jM || jM.domSettled(iM)
            }
          },
          onStopped: MM => {
            this.stop(`uploads refused: ${MM}`)
          }
        }), this.stills = new Hr(this.uploader, this.manifest, SM), this.pageExit = new Qr({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushChunks: () => {
            var MM;
            this.flushChunks(), null === (MM = this.dom) || void 0 === MM || MM.cutAfterNextBatch()
          },
          postToWorker: MM => {
            this.postToWorker(MM)
          },
          writeEvent: MM => {
            this.telemetry.writeEvent(MM)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var MM;
            null === (MM = this.joiner) || void 0 === MM || MM.releaseAll()
          }
        });
        const PM = rM.dryRun ? function() {
          var MM;
          const rM = null !== (MM = (0, oM.d)() ? kM.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== MM ? MM : ZM.g.getItem("replayPostHogHost");
          return "string" === typeof rM && rM.length > 0 ? {
            apiHost: rM,
            projectApiKey: "dry-run"
          } : null
        }() : MM.posthog;
        if (this.ownFpsMonitor = null === PM ? new or.e({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, QM.i.subscribe("sessionReplayLowFps", (MM => {
            let {
              low: rM
            } = MM;
            this.isStopped || this.onLowFps(rM)
          })), QM.i.subscribe("sessionReplayGameQuit", (MM => {
            let {
              reasons: rM,
              gameName: iM
            } = MM;
            rM.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(iM) && this.pageExit.sendManifest()
          })), null !== rM.currentGame && this.labelGame(this.manifest.gameJoined(rM.currentGame)), this.start(MM.expiresAtMs), this.dom = null, null !== PM) {
          const iM = new RM(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: () => this.isStopped || this.pageExit.isHiding || document.hidden
          }, this.journal, new WM);
          this.dom = iM, (0, Zr.c)({
            recording: MM,
            posthog: PM,
            deviceId: (0, sr.c)(),
            videoStatus: this.videoStatus,
            dryRun: rM.dryRun,
            onDomBatch: MM => {
              iM.add(MM)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var MM, rM;
        return null !== (MM = null === (rM = this.videoConfig) || void 0 === rM ? void 0 : rM.manifestIntervalMs) && void 0 !== MM ? MM : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      gameJoined(MM) {
        this.isStopped || (this.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.labelGame(this.manifest.gameJoined(MM)), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(MM, rM) {
        this.isStopped || (this.manifest.addCreatorGrant(MM, rM), this.manifest.send())
      }
      onLowFps(MM) {
        this.lowFpsOpen = MM, MM && this.manifest.flagCurrentGame("lowFps")
      }
      labelGame(MM) {
        const rM = MM.gameNameWithVariation;
        (0, SM.m)(rM) && (0, fr.f)((0, SM.p)(rM)).then((rM => {
          MM.gameDisplayName = rM
        }))
      }
      start(MM) {
        const rM = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          this.flushChunks()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, MM - Date.now() - 6e4))), this.pageExit.listen(rM), this.telemetry.attach((0, tr.e)(), (() => {
          var MM;
          null === (MM = this.capture) || void 0 === MM || MM.onAfterRender()
        }));
        for (const iM of ["error", "unhandledrejection"]) window.addEventListener(iM, (MM => {
          xr(MM) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: rM
        });
        (0, kr.c)((() => {
          this.onCellular()
        }), rM), null !== this.journal && (0, hr.e)(rM)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      stop(MM) {
        var rM;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${MM}`), this.debug.stoppedReason = MM, this.lifetime.abort();
          for (const MM of this.timers) clearTimeout(MM);
          this.stills.stop(), this.canvasWatch.stop(), null !== this.dom && (0, Zr.i)(), this.telemetry.stop(), this.flushChunks(), null === (rM = this.dom) || void 0 === rM || rM.close(), this.endVideo(), this.manifest.send(), (0, Dr.e)("events_only", this.recording)
        }
      }
      endVideo() {
        var MM;
        null === (MM = this.capture) || void 0 === MM || MM.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const rM = this.worker;
        this.worker = null, setTimeout((() => {
          null === rM || void 0 === rM || rM.terminate()
        }), 15e3)
      }
      onStateTick() {
        var MM;
        const rM = this.canvasWatch.check();
        if (null === rM) return;
        const {
          cssSize: iM
        } = this.canvasWatch, OM = nM.b.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: rM.canvas,
          cssWidth: iM.width,
          cssHeight: iM.height,
          renderer: rM.renderer,
          pingMs: OM,
          qualityLevel: this.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= Yr && this.flushTelemetry();
        const SM = this.telemetry.sampleFps(),
          jM = document.hidden ? null : SM;
        if (null === (MM = this.ownFpsMonitor) || void 0 === MM || MM.addSample(jM, Date.now()), document.hidden || this.postToWorker({
            type: "health",
            gameFps: jM,
            pingMs: OM
          }), null !== this.capture) {
          const {
            averageMs: MM,
            fps: rM
          } = this.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: MM,
            budgetFps: rM
          }
        }
      }
      attachToCanvas(MM) {
        if (null !== this.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(MM, this.videoConfig)
        } catch (rM) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", rM), this.videoUnavailable(`video couldn't start: ${rM instanceof Error?rM.message:String(rM)}`)
        }
      }
      startVideo(MM, rM) {
        var iM, SM, jM;
        const aM = new PM,
          nM = (0, OM.G)(rM),
          QM = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          LM = null === this.joinerAccess ? null : this.createJoiner(this.joinerAccess, (() => mM), QM),
          mM = new Wr(this.uploader, nM, this.manifest, this.journal, QM, LM);
        aM.onmessage = MM => {
          this.onWorkerMessage(MM.data, mM)
        }, aM.onerror = MM => {
          console.error("Session replay video worker error.", MM.message), this.worker === aM && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${MM.message||"it didn't load"}`))
        }, this.worker = aM, this.video = mM, this.joiner = LM, this.debug.joiner = null !== (iM = null === LM || void 0 === LM ? void 0 : LM.stats) && void 0 !== iM ? iM : null, this.videoStarted = !0, this.stills.start(), this.postToWorker({
          type: "init",
          videoConfig: rM,
          partPlan: {
            ...nM,
            partDurationMs: rM.partDurationMs,
            keyframeIntervalMs: rM.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          preferSoftwareEncoder: rM.softwareEncoderOnWindows && "windows" === (0, zM.getOperatingSystem)(),
          journalRecordingId: null !== (SM = null === (jM = this.journal) || void 0 === jM ? void 0 : jM.recordingId) && void 0 !== SM ? SM : null
        }), this.capture = new HM(aM, rM.maxFps, {
          msPerSecond: rM.captureBudgetMsPerSecond,
          frameCostFloorMs: rM.captureFrameCostFloorMs
        }, (MM => {
          this.endVideo(), this.videoStopped("stopped_error", MM)
        })), this.capture.start(MM)
      }
      createJoiner(MM, rM, iM) {
        return new vM(MM, this.recording.uploadToken, new VM(MM.url), {
          stored: (MM, iM, OM) => {
            rM().joinedStored(MM, iM, OM), this.pageExit.segmentLanded()
          },
          handBack: (MM, iM, OM, SM) => {
            rM().joinedHandedBack(MM, iM, OM, SM)
          },
          cut: iM
        }, {
          wait: Ar,
          nowMs: Date.now,
          maxHeldBytes: NM[this.platformType]
        })
      }
      onWorkerMessage(MM, rM) {
        var iM, OM, SM;
        switch (MM.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            rM.onWorkerMessage(MM), this.debug.uploadBacklogBytes = this.uploader.backlogBytes;
            break;
          case "still":
            this.stills.received(MM, document.hidden);
            break;
          case "stats":
            OM = this.debug, SM = MM.stats, OM.workerStats.push(SM), OM.workerStats.length > 120 && OM.workerStats.shift(), this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.maybeLogStats(MM.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = MM.level, null === (iM = this.capture) || void 0 === iM || iM.setMaxFps(MM.maxFps), this.debug.qualityChanges.push({
              atMs: (0, sM.e)(),
              level: MM.level,
              maxFps: MM.maxFps,
              reason: MM.reason
            }), this.experiment.logStats && console.warn(`Session replay stats: quality level ${MM.level} (${MM.reason})`), this.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(MM.reason)
        }
      }
      videoUnavailable(MM) {
        var rM, iM;
        null === (rM = this.capture) || void 0 === rM || rM.stop(), this.capture = null, null === (iM = this.worker) || void 0 === iM || iM.terminate(), this.worker = null, this.videoStopped("stopped_error", MM)
      }
      videoStopped(MM, rM) {
        "recorded" !== this.videoStatus || this.isStopped || (this.debug.videoUnavailableReason = rM, "stopped_error" === MM && this.telemetry.writeEvent("captureFailed"), this.setVideoStatus(MM, rM))
      }
      setVideoStatus(MM, rM) {
        this.videoStatus = MM, (0, Dr.e)("dom_only", this.recording), null !== this.dom && (0, Zr.f)(MM, rM)
      }
      maybeLogStats(MM) {
        if (!this.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const rM = Math.round(1e3 * MM.encodedFrames / MM.windowMs);
        console.warn(`Session replay stats: ${rM} fps encoded, ${MM.encodeWidth}x${MM.encodeHeight} ${MM.hardwareAcceleration}`)
      }
      onSegmentUploaded(MM, rM, iM) {
        var OM;
        if ("video" === MM.type) null === (OM = this.video) || void 0 === OM || OM.landed(MM, rM);
        else if ("still" === MM.type) this.stills.landed(MM);
        else if ("dom" === MM.type) {
          var SM;
          null === (SM = this.journal) || void 0 === SM || SM.domLanded(rM, MM.chunk), this.manifest.addDomSegment({
            sequence: rM,
            ...MM.chunk
          }, (() => {
            var MM;
            null === (MM = this.journal) || void 0 === MM || MM.domSettled(rM)
          }))
        } else {
          var jM;
          null === (jM = this.journal) || void 0 === jM || jM.telemetryLanded(rM, iM, MM.startMs, MM.endMs), this.manifest.addTelemetrySegment(rM, MM.startMs, MM.endMs)
        }
      }
      flushChunks() {
        var MM;
        null === (MM = this.dom) || void 0 === MM || MM.cut(), this.flushTelemetry()
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: MM,
          startMs: rM,
          endMs: iM
        } = this.telemetry.takeChunk(), OM = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: MM,
          meta: {
            type: "telemetry",
            startMs: rM,
            endMs: iM
          }
        });
        var SM;
        null !== OM && (null === (SM = this.journal) || void 0 === SM || SM.telemetryQueued(OM, MM, rM, iM));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
      postToWorker(MM) {
        var rM;
        null === (rM = this.worker) || void 0 === rM || rM.postMessage(MM)
      }
    }
  },
  6998: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => tM,
      e: () => gM
    });
    var OM = iM(7006);
    const SM = 827609666,
      jM = 2,
      aM = 1,
      PM = 13,
      nM = 1,
      QM = 2,
      zM = 3,
      LM = 4,
      mM = 5,
      HM = 7,
      hM = 19,
      JM = 6,
      dM = 7,
      yM = 7,
      lM = 1,
      EM = 2,
      UM = 4,
      GM = 65535,
      CM = 10,
      eM = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      bM = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function wM(MM) {
      return Math.max(0, Math.min(GM, Math.round(MM)))
    }
    class tM {
      constructor(MM) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(MM)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - PM
      }
      writeFrame(MM, rM) {
        this.reserve(HM);
        const iM = this.view,
          OM = this.length;
        iM.setUint8(OM, nM), iM.setUint32(OM + 1, this.timeUnits(MM), !0), iM.setUint16(OM + 5, wM(100 * rM), !0), this.length += HM
      }
      writeState(MM, rM) {
        this.reserve(hM);
        const iM = this.view,
          OM = this.length;
        iM.setUint8(OM, QM), iM.setUint32(OM + 1, this.timeUnits(MM), !0), iM.setUint16(OM + 5, wM(rM.backingWidth), !0), iM.setUint16(OM + 7, wM(rM.backingHeight), !0), iM.setUint16(OM + 9, wM(rM.cssWidth), !0), iM.setUint16(OM + 11, wM(rM.cssHeight), !0), iM.setUint16(OM + 13, wM(100 * rM.devicePixelRatio), !0), iM.setUint8(OM + 15, eM.indexOf(rM.renderer)), iM.setUint16(OM + 16, null === rM.pingMs ? GM : wM(Math.min(rM.pingMs, GM - 1)), !0), iM.setUint8(OM + 18, (rM.hidden ? 1 : 0) | (7 & rM.qualityLevel) << 1), this.length += hM
      }
      writeEvent(MM, rM) {
        this.reserve(JM);
        const iM = this.length;
        this.view.setUint8(iM, zM), this.view.setUint32(iM + 1, this.timeUnits(MM), !0), this.view.setUint8(iM + 5, bM.indexOf(rM)), this.length += JM
      }
      writeActions(MM, rM) {
        this.reserve(dM);
        const iM = this.length;
        this.view.setUint8(iM, LM), this.view.setUint32(iM + 1, this.timeUnits(MM), !0), this.view.setUint16(iM + 5, rM, !0), this.length += dM
      }
      writeKey(MM, rM, iM, OM, SM) {
        this.reserve(yM);
        const jM = this.length;
        this.view.setUint8(jM, mM), this.view.setUint32(jM + 1, this.timeUnits(MM), !0), this.view.setUint8(jM + 5, rM), this.view.setUint8(jM + 6, (iM ? lM : 0) | (OM ? EM : 0) | (SM ? UM : 0)), this.length += yM
      }
      takeChunk(MM) {
        const rM = this.buffer.slice(0, this.length);
        return this.startChunk(MM), rM
      }
      startChunk(MM) {
        this.baseEpochMs = MM, this.view.setUint32(0, SM, !0), this.view.setUint8(4, jM), this.view.setFloat64(5, MM, !0), this.length = PM
      }
      timeUnits(MM) {
        return Math.max(0, Math.round((MM - this.baseEpochMs) * CM))
      }
      reserve(MM) {
        if (this.length + MM <= this.buffer.byteLength) return;
        const rM = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(rM).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = rM, this.view = new DataView(rM)
      }
    }

    function gM(MM) {
      const rM = new DataView(MM),
        iM = MM.byteLength < PM ? 0 : rM.getUint8(4);
      if (iM < aM || iM > jM || rM.getUint32(0, !0) !== SM) throw new Error(`Not a version ${aM}-${jM} replay telemetry chunk`);
      const wM = rM.getFloat64(5, !0),
        tM = {
          baseEpochMs: wM,
          inputRecorded: iM >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        gM = MM => wM + rM.getUint32(MM, !0) / CM;
      let uM = PM;
      for (; uM < MM.byteLength;) {
        const MM = rM.getUint8(uM);
        if (MM === nM) tM.frames.push({
          atMs: gM(uM + 1),
          cpuFrameMs: rM.getUint16(uM + 5, !0) / 100
        }), uM += HM;
        else if (MM === QM) {
          var RM;
          const MM = rM.getUint16(uM + 16, !0),
            iM = rM.getUint8(uM + 18);
          tM.states.push({
            atMs: gM(uM + 1),
            backingWidth: rM.getUint16(uM + 5, !0),
            backingHeight: rM.getUint16(uM + 7, !0),
            cssWidth: rM.getUint16(uM + 9, !0),
            cssHeight: rM.getUint16(uM + 11, !0),
            devicePixelRatio: rM.getUint16(uM + 13, !0) / 100,
            renderer: null !== (RM = eM[rM.getUint8(uM + 15)]) && void 0 !== RM ? RM : "unknown",
            pingMs: MM === GM ? null : MM,
            hidden: 1 === (1 & iM),
            qualityLevel: iM >> 1 & 7
          }), uM += hM
        } else if (MM === zM) {
          var pM;
          tM.events.push({
            atMs: gM(uM + 1),
            event: null !== (pM = bM[rM.getUint8(uM + 5)]) && void 0 !== pM ? pM : "none"
          }), uM += JM
        } else if (MM === LM && tM.inputRecorded) tM.actions.push({
          atMs: gM(uM + 1),
          bits: rM.getUint16(uM + 5, !0)
        }), uM += dM;
        else {
          if (MM !== mM || !tM.inputRecorded) throw new Error(`Unknown replay telemetry record type ${MM} at byte ${uM}`);
          {
            var WM;
            const MM = rM.getUint8(uM + 6);
            tM.keys.push({
              atMs: gM(uM + 1),
              code: null !== (WM = OM.e[rM.getUint8(uM + 5)]) && void 0 !== WM ? WM : OM.e[0],
              down: 0 !== (MM & lM),
              bound: 0 !== (MM & EM),
              inPlay: 0 !== (MM & UM)
            }), uM += yM
          }
        }
      }
      return tM
    }
  },
  34814: MM => {
    MM.exports = function(MM, rM, iM, OM) {
      var SM = self || window;
      try {
        try {
          var jM;
          try {
            jM = new SM.Blob([MM])
          } catch (QM) {
            (jM = new(SM.BlobBuilder || SM.WebKitBlobBuilder || SM.MozBlobBuilder || SM.MSBlobBuilder)).append(MM), jM = jM.getBlob()
          }
          var aM = SM.URL || SM.webkitURL,
            PM = aM.createObjectURL(jM),
            nM = new SM[rM](PM, iM);
          return aM.revokeObjectURL(PM), nM
        } catch (QM) {
          return new SM[rM]("data:application/javascript,".concat(encodeURIComponent(MM)), iM)
        }
      } catch (QM) {
        if (!OM) throw Error("Inline worker is not supported");
        return new SM[rM](OM, iM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);