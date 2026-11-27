export const id = 282;
export const ids = [282];
export const modules = {
  41084: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW
    });
    var mW = OW(5397);
    const EW = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function NW(WW) {
      return new Promise(((iW, OW) => {
        WW.onsuccess = () => {
          iW(WW.result)
        }, WW.onerror = () => {
          OW(WW.error)
        }
      }))
    }

    function PW(WW) {
      return new Promise(((iW, OW) => {
        WW.oncomplete = () => {
          iW()
        }, WW.onerror = () => {
          OW(WW.error)
        }, WW.onabort = () => {
          var iW;
          OW(null !== (iW = WW.error) && void 0 !== iW ? iW : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function LW(WW) {
      return IDBKeyRange.bound([WW], [WW, []])
    }

    function cW(WW, iW) {
      return IDBKeyRange.bound([WW, iW], [WW, iW, []])
    }
    class wW {
      constructor() {
        this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
      }
      get working() {
        return !this.failed
      }
      static get supported() {
        try {
          return "undefined" !== typeof indexedDB
        } catch {
          return !1
        }
      }
      putRecording(WW) {
        this.write(["recordings"], (iW => {
          iW.objectStore("recordings").put(WW)
        }))
      }
      putVideoSequence(WW, iW, OW) {
        this.write(["recordings", "videoSequences"], (mW => {
          mW.objectStore("recordings").put(WW), mW.objectStore("videoSequences").put({
            recordingId: WW.recordingId,
            segmentId: iW,
            sequence: OW
          })
        }))
      }
      appendVideo(WW, iW) {
        this.write(["videoHeaders", "videoChunks"], (OW => {
          OW.objectStore("videoHeaders").put(WW);
          const mW = OW.objectStore("videoChunks");
          for (const WW of iW) mW.put(WW)
        }))
      }
      putVideoProgress(WW, iW) {
        this.write(["videoProgress", "videoChunks"], (OW => {
          if (OW.objectStore("videoProgress").put(WW), iW > 0) {
            const {
              recordingId: mW,
              segmentId: EW
            } = WW;
            OW.objectStore("videoChunks").delete(IDBKeyRange.bound([mW, EW, 0], [mW, EW, iW], !1, !0))
          }
        }))
      }
      removeVideoChunks(WW, iW) {
        this.write(["videoChunks"], (OW => {
          OW.objectStore("videoChunks").delete(cW(WW, iW))
        }))
      }
      removeVideo(WW, iW) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (OW => {
          OW.objectStore("videoHeaders").delete([WW, iW]), OW.objectStore("videoChunks").delete(cW(WW, iW)), OW.objectStore("videoSequences").delete([WW, iW]), OW.objectStore("videoProgress").delete([WW, iW])
        }))
      }
      putTelemetry(WW) {
        this.write(["telemetry"], (iW => {
          iW.objectStore("telemetry").put(WW)
        }))
      }
      removeTelemetry(WW, iW) {
        this.write(["telemetry"], (OW => {
          OW.objectStore("telemetry").delete([WW, iW])
        }))
      }
      putDom(WW) {
        this.write(["dom"], (iW => {
          iW.objectStore("dom").put(WW)
        }))
      }
      queueDom(WW, iW, OW) {
        this.write(["recordings", "dom", "domTail"], (mW => {
          mW.objectStore("recordings").put(WW), mW.objectStore("dom").put(iW), mW.objectStore("domTail").delete(cW(iW.recordingId, OW))
        }), (mW => {
          console.warn(`Session replay couldn't journal page recording chunk ${iW.sequence}; a closing tab may lose it.`, mW), this.write(["recordings", "domTail"], (mW => {
            mW.objectStore("recordings").put(WW), mW.objectStore("domTail").delete(cW(iW.recordingId, OW))
          }))
        }))
      }
      putDomTail(WW) {
        this.tailRecordings.add(WW.recordingId), this.write(["domTail"], (iW => {
          iW.objectStore("domTail").put(WW)
        }))
      }
      removeDomTail(WW, iW) {
        this.write(["domTail"], (OW => {
          OW.objectStore("domTail").delete(cW(WW, iW))
        }))
      }
      removeDom(WW, iW) {
        this.write(["dom"], (OW => {
          OW.objectStore("dom").delete([WW, iW])
        }))
      }
      async listRecordings() {
        const WW = await this.open();
        return await NW(WW.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(WW) {
        const iW = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          OW = LW(WW.recordingId),
          mW = WW => NW(iW.objectStore(WW).getAll(OW)),
          [EW, PW, cW, wW, tW, ZW, xW] = await Promise.all([mW("videoHeaders"), mW("videoChunks"), mW("videoSequences"), mW("videoProgress"), mW("telemetry"), mW("dom"), mW("domTail")]);
        return {
          recording: WW,
          telemetry: tW,
          dom: ZW,
          domTails: xW,
          video: EW.map((WW => {
            var iW, OW, mW;
            return {
              header: WW,
              sequence: null !== (iW = null === (OW = cW.find((iW => iW.segmentId === WW.segmentId))) || void 0 === OW ? void 0 : OW.sequence) && void 0 !== iW ? iW : null,
              progress: null !== (mW = wW.find((iW => iW.segmentId === WW.segmentId))) && void 0 !== mW ? mW : null,
              chunks: PW.filter((iW => iW.segmentId === WW.segmentId))
            }
          }))
        }
      }
      async deleteRecording(WW) {
        const iW = (await this.open()).transaction([...EW], "readwrite");
        iW.objectStore("recordings").delete(WW);
        for (const OW of EW.slice(1)) iW.objectStore(OW).delete(LW(WW));
        await PW(iW)
      }
      async forgetSent(WW, iW) {
        const OW = (await this.open()).transaction([...EW], "readwrite"),
          {
            recordingId: mW
          } = WW;
        OW.objectStore("recordings").put(WW);
        for (const EW of iW.videoSegmentIds) OW.objectStore("videoHeaders").delete([mW, EW]), OW.objectStore("videoChunks").delete(cW(mW, EW)), OW.objectStore("videoSequences").delete([mW, EW]), OW.objectStore("videoProgress").delete([mW, EW]);
        for (const EW of iW.telemetrySequences) OW.objectStore("telemetry").delete([mW, EW]);
        for (const EW of iW.domSequences) OW.objectStore("dom").delete([mW, EW]);
        for (const EW of iW.domTailChunks) OW.objectStore("domTail").delete(cW(mW, EW));
        await PW(OW)
      }
      write(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW => {
          this.fail(WW)
        };
        if (this.failed) return;
        const mW = mW => {
          try {
            var EW;
            const NW = mW.transaction(WW, "readwrite");
            iW(NW), null === (EW = NW.commit) || void 0 === EW || EW.call(NW), PW(NW).catch(OW)
          } catch (NW) {
            OW(NW)
          }
        };
        null === this.db ? this.open().then(mW, (WW => {
          this.fail(WW)
        })) : mW(this.db)
      }
      fail(WW) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", WW), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const WW = WW => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", WW)
        };
        try {
          const iW = this.db.transaction(["domTail"], "readwrite");
          for (const WW of this.tailRecordings) iW.objectStore("domTail").delete(LW(WW));
          PW(iW).catch(WW)
        } catch (iW) {
          WW(iW)
        }
      }
      open() {
        return this.opening ??= new Promise(((WW, iW) => {
          const OW = indexedDB.open(mW.g, 4);
          OW.onupgradeneeded = WW => {
            const iW = OW.result;
            WW.oldVersion < 1 && (iW.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), iW.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), iW.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), iW.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), iW.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), WW.oldVersion < 2 && iW.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), WW.oldVersion < 3 && iW.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), iW.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let EW = !1;
          OW.onblocked = () => {
            EW = !0, iW(new Error("An older tab holds the upload journal at an earlier version"))
          }, OW.onsuccess = () => {
            EW ? OW.result.close() : (this.db = OW.result, this.db.onversionchange = () => {
              var WW;
              this.dropTails(), null === (WW = this.db) || void 0 === WW || WW.close(), this.db = null, this.opening = null
            }, WW(OW.result))
          }, OW.onerror = () => {
            iW(OW.error)
          }
        })), this.opening
      }
    }
  },
  41041: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW,
      h: () => NW,
      l: () => LW
    });
    var mW = OW(41035);
    const EW = new TextEncoder;

    function NW(WW, iW) {
      return new Blob([EW.encode(`${JSON.stringify(WW)}\n`), iW], {
        type: "text/plain"
      })
    }
    class PW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = WW, this.relay = iW, this.nowMs = OW, this.refused = !1, this.skipUntilMs = 0
      }
      async send(WW, iW, OW, EW, PW) {
        if (this.goesDirect(iW, OW)) return null;
        const LW = NW({
            token: this.token,
            contentType: OW,
            target: WW
          }, iW),
          cW = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: LW,
            signal: EW
          };
        let wW;
        try {
          const WW = iW.byteLength <= mW.e ? await mW.f.fetch(this.relay.url, cW, LW.size, OW) : await fetch(this.relay.url, cW);
          if (!WW.ok) throw new Error(`HTTP ${WW.status}`);
          if (wW = await WW.json(), "refused" !== wW.outcome && ("forwarded" !== wW.outcome || !Number.isInteger(wW.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(wW)}`)
        } catch (tW) {
          if (!0 === (null === PW || void 0 === PW ? void 0 : PW.aborted)) throw tW;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", tW), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === wW.outcome ? (console.info(`Session replay's part joiner refused to relay (${wW.reason}); uploading straight to storage.`), this.refused = !0, null) : wW.status
      }
      beacon(WW, iW, OW, mW) {
        if (this.goesDirect(iW, OW)) return null;
        const EW = NW({
          token: this.token,
          contentType: OW,
          target: WW
        }, iW);
        return mW.sendUploadBeacon(this.relay.url, EW, EW.size)
      }
      goesDirect(WW, iW) {
        return this.refused || this.nowMs() < this.skipUntilMs || WW.byteLength > this.relay.maxBytes || "video/mp4" === iW
      }
    }

    function LW(WW) {
      return void 0 === (null === WW || void 0 === WW ? void 0 : WW.relay) ? null : new PW(WW.token, WW.relay)
    }
    class cW {
      constructor() {
        this.relays = new Map
      }
      for (WW) {
        let iW = this.relays.get(WW.recordingId);
        return void 0 === iW && (iW = LW(WW.partJoiner), this.relays.set(WW.recordingId, iW)), iW
      }
    }
  },
  41067: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => AW,
      f: () => lW,
      h: () => cW
    });
    var mW = OW(41035),
      EW = OW(1194),
      NW = OW(41046);
    const PW = 1024;

    function LW(WW) {
      return 6e4 + Math.ceil(WW / 16384 * 1e3)
    }

    function cW(WW, iW, OW) {
      const EW = new FormData;
      let NW = iW.byteLength + PW;
      for (const [PW, LW] of Object.entries(WW.fields)) EW.append(PW, LW), NW += (0, mW.i)(PW) + (0, mW.i)(LW);
      return EW.append("file", new Blob([iW], {
        type: OW
      })), {
        form: EW,
        byteLength: NW
      }
    }

    function wW(WW, iW, OW) {
      return new NW.c(`Segment ${WW} failed with ${iW}${null===OW?"":` (${OW})`}`, iW, OW)
    }

    function tW(WW) {
      if (WW < 200 || WW > 299) throw wW("POST", WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function ZW(WW, iW) {
      if ((WW < 200 || WW > 299) && (!iW || 412 !== WW)) throw wW("PUT", WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function xW(WW) {
      var iW, OW;
      if (WW.ok) return null;
      let mW;
      try {
        mW = await WW.text()
      } catch (EW) {
        return console.warn("Session replay couldn't read storage's error answer", EW), null
      }
      return null !== (iW = null === (OW = /<Code>([^<]+)<\/Code>/.exec(mW)) || void 0 === OW ? void 0 : OW[1]) && void 0 !== iW ? iW : null
    }
    class lW {
      constructor(WW) {
        var iW;
        let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = WW, this.deadline = void 0, this.relay = void 0, this.deadline = OW.deadline, this.relay = null !== (iW = OW.relay) && void 0 !== iW ? iW : null
      }
      requestPutUrl(WW) {
        return this.presign(WW)
      }
      requestPostTargets(WW) {
        return this.presign(WW)
      }
      async presign(WW) {
        const iW = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(WW),
          signal: this.signal(6e4)
        });
        if (!iW.ok) throw new NW.c(`Segment presign failed with ${iW.status}`, iW.status);
        return await iW.json()
      }
      async put(WW, iW, OW, EW) {
        const NW = await this.sendThroughRelay({
          method: "PUT",
          url: WW,
          ifNoneMatch: EW
        }, iW, OW);
        if (null !== NW) return void ZW(NW, EW);
        const PW = {
            method: "PUT",
            headers: {
              "Content-Type": OW,
              ...EW ? {
                "If-None-Match": "*"
              } : {}
            },
            body: iW,
            signal: this.signal(LW(iW.byteLength))
          },
          cW = iW.byteLength <= mW.e ? await mW.f.fetch(WW, PW, iW.byteLength, OW) : await fetch(WW, PW);
        ZW(cW.status, EW, await xW(cW))
      }
      async post(WW, iW, OW) {
        const EW = await this.sendThroughRelay({
          method: "POST",
          url: WW.url,
          fields: WW.fields
        }, iW, OW);
        if (null !== EW) return void tW(EW);
        const {
          form: NW,
          byteLength: PW
        } = cW(WW, iW, OW), wW = {
          method: "POST",
          body: NW,
          signal: this.signal(LW(PW))
        }, ZW = PW <= mW.e ? await mW.f.fetch(WW.url, wW, PW, OW) : await fetch(WW.url, wW);
        tW(ZW.status, await xW(ZW))
      }
      async sendThroughRelay(WW, iW, OW) {
        return null === this.relay ? null : await this.relay.send(WW, iW, OW, this.signal(LW(iW.byteLength)), this.deadline)
      }
      signal(WW) {
        const iW = (0, EW.t)(WW);
        return void 0 === this.deadline ? iW : (0, EW.m)([this.deadline, iW])
      }
    }
    class AW {
      async requestPutUrl(WW) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(WW) {
        return {
          targets: Array.from({
            length: WW.parts.count
          }, (() => ({
            url: "",
            fields: {}
          }))),
          expiresInSecs: 900
        }
      }
      put() {
        return Promise.resolve()
      }
      post() {
        return Promise.resolve()
      }
    }
  },
  41014: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(37245),
      EW = OW.n(mW);

    function NW() {
      return EW()('(()=>{var WW={11:(WW,iW,OW)=>{function mW(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function EW(WW){return WW instanceof Uint8Array&&(!mW()||!Buffer.isBuffer(WW))}function NW(WW){return WW instanceof ArrayBuffer}function PW(WW){return!!mW()&&Buffer.isBuffer(WW)}var LW=OW(14).d,cW=OW(23).b,wW="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";iW.c=function(WW){if(!EW(WW)&&!NW(WW)&&!PW(WW))throw new TypeError(wW);var iW=!1,OW=!1;EW(WW)?iW=!0:NW(WW)&&(OW=!0,WW=new Uint8Array(WW));var mW,LW,tW,ZW=new cW(WW),xW=ZW.maxCompressedLength();if(iW?(mW=new Uint8Array(xW),tW=ZW.compressToBuffer(mW)):OW?(mW=new ArrayBuffer(xW),LW=new Uint8Array(mW),tW=ZW.compressToBuffer(LW)):(mW=Buffer.alloc(xW),tW=ZW.compressToBuffer(mW)),!mW.slice){var lW=new Uint8Array(Array.prototype.slice.call(mW,0,tW));if(iW)return lW;if(OW)return lW.buffer;throw new Error("Not implemented")}return mW.slice(0,tW)}},23:(WW,iW)=>{var OW=new Array(15);function mW(WW,iW){return 506832829*WW>>>iW}function EW(WW,iW){return WW[iW]+(WW[iW+1]<<8)+(WW[iW+2]<<16)+(WW[iW+3]<<24)}function NW(WW,iW,OW){return WW[iW]===WW[OW]&&WW[iW+1]===WW[OW+1]&&WW[iW+2]===WW[OW+2]&&WW[iW+3]===WW[OW+3]}function PW(WW,iW,OW,mW,EW){return OW<=60?(mW[EW]=OW-1<<2,EW+=1):OW<256?(mW[EW]=240,mW[EW+1]=OW-1,EW+=2):(mW[EW]=244,mW[EW+1]=OW-1&255,mW[EW+2]=OW-1>>>8,EW+=3),function(WW,iW,OW,mW,EW){var NW;for(NW=0;NW<EW;NW++)OW[mW+NW]=WW[iW+NW]}(WW,iW,mW,EW,OW),EW+OW}function LW(WW,iW,OW,mW){return mW<12&&OW<2048?(WW[iW]=1+(mW-4<<2)+(OW>>>8<<5),WW[iW+1]=255&OW,iW+2):(WW[iW]=2+(mW-1<<2),WW[iW+1]=255&OW,WW[iW+2]=OW>>>8,iW+3)}function cW(WW,iW,OW,mW){for(;mW>=68;)iW=LW(WW,iW,OW,64),mW-=64;return mW>64&&(iW=LW(WW,iW,OW,60),mW-=60),LW(WW,iW,OW,mW)}function wW(WW,iW,LW,wW,tW){for(var ZW=1;1<<ZW<=LW&&ZW<=14;)ZW+=1;var xW=32-(ZW-=1);"undefined"===typeof OW[ZW]&&(OW[ZW]=new Uint16Array(1<<ZW));var lW,AW=OW[ZW];for(lW=0;lW<AW.length;lW++)AW[lW]=0;var bW,jW,UW,kW,sW,MW,KW,SW,YW,yW,TW=iW+LW,JW=iW,hW=iW,HW=!0;if(LW>=15)for(bW=TW-15,UW=mW(EW(WW,iW+=1),xW);HW;){MW=32,kW=iW;do{if(jW=UW,KW=MW>>>5,MW+=1,kW=(iW=kW)+KW,iW>bW){HW=!1;break}UW=mW(EW(WW,kW),xW),sW=JW+AW[jW],AW[jW]=iW-JW}while(!NW(WW,iW,sW));if(!HW)break;tW=PW(WW,hW,iW-hW,wW,tW);do{for(SW=iW,YW=4;iW+YW<TW&&WW[iW+YW]===WW[sW+YW];)YW+=1;if(iW+=YW,tW=cW(wW,tW,SW-sW,YW),hW=iW,iW>=bW){HW=!1;break}AW[mW(EW(WW,iW-1),xW)]=iW-1-JW,sW=JW+AW[yW=mW(EW(WW,iW),xW)],AW[yW]=iW-JW}while(NW(WW,iW,sW));if(!HW)break;UW=mW(EW(WW,iW+=1),xW)}return hW<TW&&(tW=PW(WW,hW,TW-hW,wW,tW)),tW}function tW(WW){this.array=WW}tW.prototype.maxCompressedLength=function(){var WW=this.array.length;return 32+WW+Math.floor(WW/6)},tW.prototype.compressToBuffer=function(WW){var iW,OW=this.array,mW=OW.length,EW=0,NW=0;for(NW=function(WW,iW,OW){do{iW[OW]=127&WW,(WW>>>=7)>0&&(iW[OW]+=128),OW+=1}while(WW>0);return OW}(mW,WW,NW);EW<mW;)NW=wW(OW,EW,iW=Math.min(mW-EW,65536),WW,NW),EW+=iW;return NW},iW.b=tW},14:(WW,iW)=>{var OW=[0,255,65535,16777215,4294967295];function mW(WW,iW,OW,mW,EW){var NW;for(NW=0;NW<EW;NW++)OW[mW+NW]=WW[iW+NW]}function EW(WW,iW,OW,mW){var EW;for(EW=0;EW<mW;EW++)WW[iW+EW]=WW[iW-OW+EW]}function NW(WW){this.array=WW,this.pos=0}NW.prototype.readUncompressedLength=function(){for(var WW,iW,OW=0,mW=0;mW<32&&this.pos<this.array.length;){if(WW=this.array[this.pos],this.pos+=1,(iW=127&WW)<<mW>>>mW!==iW)return-1;if(OW|=iW<<mW,WW<128)return OW;mW+=7}return-1},NW.prototype.uncompressToBuffer=function(WW){for(var iW,NW,PW,LW,cW=this.array,wW=cW.length,tW=this.pos,ZW=0;tW<cW.length;)if(iW=cW[tW],tW+=1,0===(3&iW)){if((NW=1+(iW>>>2))>60){if(tW+3>=wW)return!1;PW=NW-60,NW=1+((NW=cW[tW]+(cW[tW+1]<<8)+(cW[tW+2]<<16)+(cW[tW+3]<<24))&OW[PW]),tW+=PW}if(tW+NW>wW)return!1;mW(cW,tW,WW,ZW,NW),tW+=NW,ZW+=NW}else{switch(3&iW){case 1:NW=4+(iW>>>2&7),LW=cW[tW]+(iW>>>5<<8),tW+=1;break;case 2:if(tW+1>=wW)return!1;NW=1+(iW>>>2),LW=cW[tW]+(cW[tW+1]<<8),tW+=2;break;case 3:if(tW+3>=wW)return!1;NW=1+(iW>>>2),LW=cW[tW]+(cW[tW+1]<<8)+(cW[tW+2]<<16)+(cW[tW+3]<<24),tW+=4}if(0===LW||LW>ZW)return!1;EW(WW,ZW,LW,NW),ZW+=NW}return!0},iW.d=NW}},iW={};var OW=function OW(mW){var EW=iW[mW];if(void 0!==EW)return EW.exports;var NW=iW[mW]={exports:{}};return WW[mW](NW,NW.exports,OW),NW.exports}(11);function mW(WW){const iW=(new TextEncoder).encode(WW);return{bytes:(0,OW.c)(iW),inflatedBytes:iW.byteLength}}const EW=self;self.onmessage=WW=>{const{id:iW,text:OW}=WW.data,NW={id:iW,...mW(OW)};EW.postMessage(NW,[NW.bytes.buffer])}})();', "Worker", void 0, OW.p + "replayDomChunk.worker.e85c41ff.worker.js")
    }
    class PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = WW, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(WW) {
        return new Promise(((iW, OW) => {
          var mW;
          const EW = null !== (mW = this.worker) && void 0 !== mW ? mW : this.start();
          if (null === EW) return void OW(this.failure);
          const NW = this.nextId++;
          this.waiting.set(NW, {
            resolve: iW,
            reject: OW
          });
          const PW = {
            id: NW,
            text: WW
          };
          EW.postMessage(PW), this.watchdog ??= this.startWatchdog()
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
          this.worker = new NW
        } catch (WW) {
          return this.broke(`didn't start: ${String(WW)}`), null
        }
        return this.worker.onmessage = WW => {
          const {
            id: iW,
            bytes: OW,
            inflatedBytes: mW
          } = WW.data, EW = this.waiting.get(iW);
          this.waiting.delete(iW), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === EW || void 0 === EW || EW.resolve({
            bytes: OW,
            inflatedBytes: mW
          })
        }, this.worker.onerror = WW => {
          this.broke(WW.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const WW = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - WW > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(WW) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${WW}`), this.fail(new Error(`page recording worker failed: ${WW}`))
      }
      fail(WW) {
        var iW;
        this.failure ??= WW, this.stopWatchdog(), null === (iW = this.worker) || void 0 === iW || iW.terminate(), this.worker = null;
        for (const {
            reject: OW
          }
          of this.waiting.values()) OW(WW);
        this.waiting.clear()
      }
    }
  },
  40999: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(41001);

    function EW(WW) {
      const iW = (new TextEncoder).encode(WW);
      return {
        bytes: (0, mW.d)(iW),
        inflatedBytes: iW.byteLength
      }
    }
  },
  41052: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    const mW = 20;
    let EW = Date.now() - performance.now();

    function NW() {
      const WW = performance.now(),
        iW = Date.now();
      return Math.abs(iW - (WW + EW)) > mW && (EW = iW - WW), WW + EW
    }
  },
  41021: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(41028),
      EW = OW(1185);

    function NW() {
      return {
        segmentUploadUrl: `${EW.clientSideServerUrls.indexUrl}${mW.p}`,
        manifestUrl: `${EW.clientSideServerUrls.indexUrl}${mW.i}`
      }
    }
  },
  41035: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      f: () => NW,
      i: () => EW
    });
    const mW = 32768;

    function EW(WW) {
      return (new TextEncoder).encode(WW).byteLength
    }
    const NW = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(WW, iW, OW, mW) {
        if (this.inFlightBytes + OW > 49152) return await fetch(WW, iW);
        this.inFlightBytes += OW, this.countLabel(mW, 1);
        const EW = () => {
          this.inFlightBytes -= OW, this.countLabel(mW, -1)
        };
        let NW;
        try {
          NW = await fetch(WW, {
            ...iW,
            keepalive: !0
          })
        } catch (LW) {
          var PW;
          if (EW(), null !== (PW = iW.signal) && void 0 !== PW && PW.aborted) throw LW;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", LW), await fetch(WW, iW)
        }
        return EW(), NW
      }
      isInFlight(WW) {
        var iW;
        return (null !== (iW = this.inFlightLabels.get(WW)) && void 0 !== iW ? iW : 0) > 0
      }
      sendBeacon(WW, iW) {
        const OW = EW(iW);
        return !(this.inFlightBytes + OW > 57344) && this.beaconSent(navigator.sendBeacon(WW, new Blob([iW], {
          type: "text/plain"
        })), OW)
      }
      sendUploadBeacon(WW, iW, OW) {
        return !(this.inFlightBytes + OW > 40960) && this.beaconSent(navigator.sendBeacon(WW, iW), OW)
      }
      countLabel(WW, iW) {
        var OW;
        void 0 !== WW && this.inFlightLabels.set(WW, (null !== (OW = this.inFlightLabels.get(WW)) && void 0 !== OW ? OW : 0) + iW)
      }
      beaconSent(WW, iW) {
        return WW && (this.inFlightBytes += iW, setTimeout((() => {
          this.inFlightBytes -= iW
        }), 1e4)), WW
      }
    }
  },
  41056: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(41035),
      EW = OW(1194);
    const NW = 6e4;
    async function PW(WW, iW) {
      const OW = JSON.stringify(iW);
      try {
        const iW = await mW.f.fetch(WW, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: OW,
          signal: (0, EW.t)(NW)
        }, (0, mW.i)(OW));
        return await async function(WW) {
          if (!WW.ok) return 413 === WW.status ? "refused" : "retryLater";
          const iW = await WW.json();
          return "rejected" in iW ? (console.warn(`Session replay manifest refused: ${iW.reason}`), iW.retryable ? "retryLater" : "refused") : "uploaded"
        }(iW)
      } catch (PW) {
        return console.warn("Session replay manifest upload failed.", PW), "retryLater"
      }
    }
  },
  41063: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      f: () => cW
    });
    var mW = OW(41035);
    const EW = 16384,
      NW = 100,
      PW = (0, mW.i)(',"domSegments":[]');

    function LW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EW;
      const {
        domSegments: LW,
        ...cW
      } = WW.manifest, wW = () => ({
        ...WW,
        manifest: {
          ...cW,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), tW = (0, mW.i)(JSON.stringify(wW())), ZW = [];
      let xW = {
          request: wW(),
          items: []
        },
        lW = tW;
      const AW = (WW, iW) => {
          var OW;
          return "domSegments" === iW ? null !== (OW = WW.manifest.domSegments) && void 0 !== OW ? OW : [] : "creatorGrants" === iW ? WW.creatorGrants : WW.manifest[iW]
        },
        bW = (WW, iW, OW) => OW + (WW.length > 0 ? 1 : "domSegments" === iW.list ? PW : 0);
      for (const EW of iW) {
        const WW = (0, mW.i)(JSON.stringify(EW.value));
        let iW = AW(xW.request, EW.list);
        xW.items.length > 0 && (lW + bW(iW, EW, WW) > OW || iW.length >= NW) && (ZW.push(xW), xW = {
          request: wW(),
          items: []
        }, lW = tW, iW = AW(xW.request, EW.list)), lW += bW(iW, EW, WW), "domSegments" === EW.list && (xW.request.manifest.domSegments = iW), iW.push(EW.value), xW.items.push(EW)
      }
      return ZW.push(xW), ZW
    }

    function cW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW;
      return LW(WW, function(WW) {
        var iW;
        return [...WW.creatorGrants.map((WW => ({
          list: "creatorGrants",
          value: WW
        }))), ...WW.manifest.games.map((WW => ({
          list: "games",
          value: WW
        }))), ...WW.manifest.videoSegments.map((WW => ({
          list: "videoSegments",
          value: WW
        }))), ...WW.manifest.telemetrySegments.map((WW => ({
          list: "telemetrySegments",
          value: WW
        }))), ...(null !== (iW = WW.manifest.domSegments) && void 0 !== iW ? iW : []).map((WW => ({
          list: "domSegments",
          value: WW
        })))]
      }(WW), iW).map((WW => {
        let {
          request: iW
        } = WW;
        return iW
      }))
    }
  },
  41046: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW extends Error {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(WW), this.status = iW, this.storageCode = OW
      }
    }
  },
  41028: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      i: () => EW,
      l: () => NW,
      p: () => mW,
      t: () => PW
    });
    const mW = "/index/replay/segment-upload-url",
      EW = "/index/replay/manifest";
    const NW = 65536;

    function PW(WW) {
      return {
        count: Math.ceil(WW.segmentDurationMs / WW.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * WW.bitrate / 8 * (WW.partDurationMs / 1e3)) + 32768
      }
    }
    const LW = 432e5
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);