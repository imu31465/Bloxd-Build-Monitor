export const id = 276;
export const ids = [276];
export const modules = {
  40785: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH
    });
    var AH = LH(5111);
    const rH = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function SH(HH) {
      return new Promise(((BH, LH) => {
        HH.onsuccess = () => {
          BH(HH.result)
        }, HH.onerror = () => {
          LH(HH.error)
        }
      }))
    }

    function hH(HH) {
      return new Promise(((BH, LH) => {
        HH.oncomplete = () => {
          BH()
        }, HH.onerror = () => {
          LH(HH.error)
        }, HH.onabort = () => {
          var BH;
          LH(null !== (BH = HH.error) && void 0 !== BH ? BH : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function tH(HH) {
      return IDBKeyRange.bound([HH], [HH, []])
    }

    function zH(HH, BH) {
      return IDBKeyRange.bound([HH, BH], [HH, BH, []])
    }
    class CH {
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
      putRecording(HH) {
        this.write(["recordings"], (BH => {
          BH.objectStore("recordings").put(HH)
        }))
      }
      putVideoSequence(HH, BH, LH) {
        this.write(["recordings", "videoSequences"], (AH => {
          AH.objectStore("recordings").put(HH), AH.objectStore("videoSequences").put({
            recordingId: HH.recordingId,
            segmentId: BH,
            sequence: LH
          })
        }))
      }
      appendVideo(HH, BH) {
        this.write(["videoHeaders", "videoChunks"], (LH => {
          LH.objectStore("videoHeaders").put(HH);
          const AH = LH.objectStore("videoChunks");
          for (const HH of BH) AH.put(HH)
        }))
      }
      putVideoProgress(HH, BH) {
        this.write(["videoProgress", "videoChunks"], (LH => {
          if (LH.objectStore("videoProgress").put(HH), BH > 0) {
            const {
              recordingId: AH,
              segmentId: rH
            } = HH;
            LH.objectStore("videoChunks").delete(IDBKeyRange.bound([AH, rH, 0], [AH, rH, BH], !1, !0))
          }
        }))
      }
      removeVideoChunks(HH, BH) {
        this.write(["videoChunks"], (LH => {
          LH.objectStore("videoChunks").delete(zH(HH, BH))
        }))
      }
      removeVideo(HH, BH) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (LH => {
          LH.objectStore("videoHeaders").delete([HH, BH]), LH.objectStore("videoChunks").delete(zH(HH, BH)), LH.objectStore("videoSequences").delete([HH, BH]), LH.objectStore("videoProgress").delete([HH, BH])
        }))
      }
      putTelemetry(HH) {
        this.write(["telemetry"], (BH => {
          BH.objectStore("telemetry").put(HH)
        }))
      }
      removeTelemetry(HH, BH) {
        this.write(["telemetry"], (LH => {
          LH.objectStore("telemetry").delete([HH, BH])
        }))
      }
      putDom(HH) {
        this.write(["dom"], (BH => {
          BH.objectStore("dom").put(HH)
        }))
      }
      queueDom(HH, BH, LH) {
        this.write(["recordings", "dom", "domTail"], (AH => {
          AH.objectStore("recordings").put(HH), AH.objectStore("dom").put(BH), AH.objectStore("domTail").delete(zH(BH.recordingId, LH))
        }), (AH => {
          console.warn(`Session replay couldn't journal page recording chunk ${BH.sequence}; a closing tab may lose it.`, AH), this.write(["recordings", "domTail"], (AH => {
            AH.objectStore("recordings").put(HH), AH.objectStore("domTail").delete(zH(BH.recordingId, LH))
          }))
        }))
      }
      putDomTail(HH) {
        this.tailRecordings.add(HH.recordingId), this.write(["domTail"], (BH => {
          BH.objectStore("domTail").put(HH)
        }))
      }
      removeDomTail(HH, BH) {
        this.write(["domTail"], (LH => {
          LH.objectStore("domTail").delete(zH(HH, BH))
        }))
      }
      removeDom(HH, BH) {
        this.write(["dom"], (LH => {
          LH.objectStore("dom").delete([HH, BH])
        }))
      }
      async listRecordings() {
        const HH = await this.open();
        return await SH(HH.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(HH) {
        const BH = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          LH = tH(HH.recordingId),
          AH = HH => SH(BH.objectStore(HH).getAll(LH)),
          [rH, hH, zH, CH, EH, XH, GH] = await Promise.all([AH("videoHeaders"), AH("videoChunks"), AH("videoSequences"), AH("videoProgress"), AH("telemetry"), AH("dom"), AH("domTail")]);
        return {
          recording: HH,
          telemetry: EH,
          dom: XH,
          domTails: GH,
          video: rH.map((HH => {
            var BH, LH, AH;
            return {
              header: HH,
              sequence: null !== (BH = null === (LH = zH.find((BH => BH.segmentId === HH.segmentId))) || void 0 === LH ? void 0 : LH.sequence) && void 0 !== BH ? BH : null,
              progress: null !== (AH = CH.find((BH => BH.segmentId === HH.segmentId))) && void 0 !== AH ? AH : null,
              chunks: hH.filter((BH => BH.segmentId === HH.segmentId))
            }
          }))
        }
      }
      async deleteRecording(HH) {
        const BH = (await this.open()).transaction([...rH], "readwrite");
        BH.objectStore("recordings").delete(HH);
        for (const LH of rH.slice(1)) BH.objectStore(LH).delete(tH(HH));
        await hH(BH)
      }
      async forgetSent(HH, BH) {
        const LH = (await this.open()).transaction([...rH], "readwrite"),
          {
            recordingId: AH
          } = HH;
        LH.objectStore("recordings").put(HH);
        for (const rH of BH.videoSegmentIds) LH.objectStore("videoHeaders").delete([AH, rH]), LH.objectStore("videoChunks").delete(zH(AH, rH)), LH.objectStore("videoSequences").delete([AH, rH]), LH.objectStore("videoProgress").delete([AH, rH]);
        for (const rH of BH.telemetrySequences) LH.objectStore("telemetry").delete([AH, rH]);
        for (const rH of BH.domSequences) LH.objectStore("dom").delete([AH, rH]);
        for (const rH of BH.domTailChunks) LH.objectStore("domTail").delete(zH(AH, rH));
        await hH(LH)
      }
      write(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH => {
          this.fail(HH)
        };
        if (this.failed) return;
        const AH = AH => {
          try {
            var rH;
            const SH = AH.transaction(HH, "readwrite");
            BH(SH), null === (rH = SH.commit) || void 0 === rH || rH.call(SH), hH(SH).catch(LH)
          } catch (SH) {
            LH(SH)
          }
        };
        null === this.db ? this.open().then(AH, (HH => {
          this.fail(HH)
        })) : AH(this.db)
      }
      fail(HH) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", HH), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const HH = HH => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", HH)
        };
        try {
          const BH = this.db.transaction(["domTail"], "readwrite");
          for (const HH of this.tailRecordings) BH.objectStore("domTail").delete(tH(HH));
          hH(BH).catch(HH)
        } catch (BH) {
          HH(BH)
        }
      }
      open() {
        return this.opening ??= new Promise(((HH, BH) => {
          const LH = indexedDB.open(AH.i, 4);
          LH.onupgradeneeded = HH => {
            const BH = LH.result;
            HH.oldVersion < 1 && (BH.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), BH.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), BH.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), BH.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), BH.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), HH.oldVersion < 2 && BH.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), HH.oldVersion < 3 && BH.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), BH.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let rH = !1;
          LH.onblocked = () => {
            rH = !0, BH(new Error("An older tab holds the upload journal at an earlier version"))
          }, LH.onsuccess = () => {
            rH ? LH.result.close() : (this.db = LH.result, this.db.onversionchange = () => {
              var HH;
              this.dropTails(), null === (HH = this.db) || void 0 === HH || HH.close(), this.db = null, this.opening = null
            }, HH(LH.result))
          }, LH.onerror = () => {
            BH(LH.error)
          }
        })), this.opening
      }
    }
  },
  40745: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      c: () => SH,
      d: () => tH
    });
    var AH = LH(40738);
    const rH = new TextEncoder;

    function SH(HH, BH) {
      return new Blob([rH.encode(`${JSON.stringify(HH)}\n`), BH], {
        type: "text/plain"
      })
    }
    class hH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = HH, this.relay = BH, this.nowMs = LH, this.refused = !1, this.skipUntilMs = 0
      }
      async send(HH, BH, LH, rH, hH) {
        if (this.goesDirect(BH, LH)) return null;
        const tH = SH({
            token: this.token,
            contentType: LH,
            target: HH
          }, BH),
          zH = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: tH,
            signal: rH
          };
        let CH;
        try {
          const HH = BH.byteLength <= AH.c ? await AH.g.fetch(this.relay.url, zH, tH.size, LH) : await fetch(this.relay.url, zH);
          if (!HH.ok) throw new Error(`HTTP ${HH.status}`);
          if (CH = await HH.json(), "refused" !== CH.outcome && ("forwarded" !== CH.outcome || !Number.isInteger(CH.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(CH)}`)
        } catch (EH) {
          if (!0 === (null === hH || void 0 === hH ? void 0 : hH.aborted)) throw EH;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", EH), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === CH.outcome ? (console.info(`Session replay's part joiner refused to relay (${CH.reason}); uploading straight to storage.`), this.refused = !0, null) : CH.status
      }
      beacon(HH, BH, LH, AH) {
        if (this.goesDirect(BH, LH)) return null;
        const rH = SH({
          token: this.token,
          contentType: LH,
          target: HH
        }, BH);
        return AH.sendUploadBeacon(this.relay.url, rH, rH.size)
      }
      goesDirect(HH, BH) {
        return this.refused || this.nowMs() < this.skipUntilMs || HH.byteLength > this.relay.maxBytes || "video/mp4" === BH
      }
    }

    function tH(HH) {
      return void 0 === (null === HH || void 0 === HH ? void 0 : HH.relay) ? null : new hH(HH.token, HH.relay)
    }
    class zH {
      constructor() {
        this.relays = new Map
      }
      for (HH) {
        let BH = this.relays.get(HH.recordingId);
        return void 0 === BH && (BH = tH(HH.partJoiner), this.relays.set(HH.recordingId, BH)), BH
      }
    }
  },
  40769: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => uH,
      e: () => YH,
      i: () => zH
    });
    var AH = LH(40738),
      rH = LH(1148),
      SH = LH(40748);
    const hH = 1024;

    function tH(HH) {
      return 6e4 + Math.ceil(HH / 16384 * 1e3)
    }

    function zH(HH, BH, LH) {
      const rH = new FormData;
      let SH = BH.byteLength + hH;
      for (const [hH, tH] of Object.entries(HH.fields)) rH.append(hH, tH), SH += (0, AH.h)(hH) + (0, AH.h)(tH);
      return rH.append("file", new Blob([BH], {
        type: LH
      })), {
        form: rH,
        byteLength: SH
      }
    }

    function CH(HH, BH, LH) {
      return new SH.c(`Segment ${HH} failed with ${BH}${null===LH?"":` (${LH})`}`, BH, LH)
    }

    function EH(HH) {
      if (HH < 200 || HH > 299) throw CH("POST", HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function XH(HH, BH) {
      if ((HH < 200 || HH > 299) && (!BH || 412 !== HH)) throw CH("PUT", HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function GH(HH) {
      var BH, LH;
      if (HH.ok) return null;
      let AH;
      try {
        AH = await HH.text()
      } catch (rH) {
        return console.warn("Session replay couldn't read storage's error answer", rH), null
      }
      return null !== (BH = null === (LH = /<Code>([^<]+)<\/Code>/.exec(AH)) || void 0 === LH ? void 0 : LH[1]) && void 0 !== BH ? BH : null
    }
    class YH {
      constructor(HH) {
        var BH;
        let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = HH, this.deadline = void 0, this.relay = void 0, this.deadline = LH.deadline, this.relay = null !== (BH = LH.relay) && void 0 !== BH ? BH : null
      }
      requestPutUrl(HH) {
        return this.presign(HH)
      }
      requestPostTargets(HH) {
        return this.presign(HH)
      }
      async presign(HH) {
        const BH = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(HH),
          signal: this.signal(6e4)
        });
        if (!BH.ok) throw new SH.c(`Segment presign failed with ${BH.status}`, BH.status);
        return await BH.json()
      }
      async put(HH, BH, LH, rH) {
        const SH = await this.sendThroughRelay({
          method: "PUT",
          url: HH,
          ifNoneMatch: rH
        }, BH, LH);
        if (null !== SH) return void XH(SH, rH);
        const hH = {
            method: "PUT",
            headers: {
              "Content-Type": LH,
              ...rH ? {
                "If-None-Match": "*"
              } : {}
            },
            body: BH,
            signal: this.signal(tH(BH.byteLength))
          },
          zH = BH.byteLength <= AH.c ? await AH.g.fetch(HH, hH, BH.byteLength, LH) : await fetch(HH, hH);
        XH(zH.status, rH, await GH(zH))
      }
      async post(HH, BH, LH) {
        const rH = await this.sendThroughRelay({
          method: "POST",
          url: HH.url,
          fields: HH.fields
        }, BH, LH);
        if (null !== rH) return void EH(rH);
        const {
          form: SH,
          byteLength: hH
        } = zH(HH, BH, LH), CH = {
          method: "POST",
          body: SH,
          signal: this.signal(tH(hH))
        }, XH = hH <= AH.c ? await AH.g.fetch(HH.url, CH, hH, LH) : await fetch(HH.url, CH);
        EH(XH.status, await GH(XH))
      }
      async sendThroughRelay(HH, BH, LH) {
        return null === this.relay ? null : await this.relay.send(HH, BH, LH, this.signal(tH(BH.byteLength)), this.deadline)
      }
      signal(HH) {
        const BH = (0, rH.u)(HH);
        return void 0 === this.deadline ? BH : (0, rH.o)([this.deadline, BH])
      }
    }
    class uH {
      async requestPutUrl(HH) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(HH) {
        return {
          targets: Array.from({
            length: HH.parts.count
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
  40725: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(37014),
      rH = LH.n(AH);

    function SH() {
      return rH()('(()=>{var HH={9:(HH,BH,LH)=>{function AH(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function rH(HH){return HH instanceof Uint8Array&&(!AH()||!Buffer.isBuffer(HH))}function SH(HH){return HH instanceof ArrayBuffer}function hH(HH){return!!AH()&&Buffer.isBuffer(HH)}var tH=LH(11).e,zH=LH(19).c,CH="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";BH.c=function(HH){if(!rH(HH)&&!SH(HH)&&!hH(HH))throw new TypeError(CH);var BH=!1,LH=!1;rH(HH)?BH=!0:SH(HH)&&(LH=!0,HH=new Uint8Array(HH));var AH,tH,EH,XH=new zH(HH),GH=XH.maxCompressedLength();if(BH?(AH=new Uint8Array(GH),EH=XH.compressToBuffer(AH)):LH?(AH=new ArrayBuffer(GH),tH=new Uint8Array(AH),EH=XH.compressToBuffer(tH)):(AH=Buffer.alloc(GH),EH=XH.compressToBuffer(AH)),!AH.slice){var YH=new Uint8Array(Array.prototype.slice.call(AH,0,EH));if(BH)return YH;if(LH)return YH.buffer;throw new Error("Not implemented")}return AH.slice(0,EH)}},19:(HH,BH)=>{var LH=new Array(15);function AH(HH,BH){return 506832829*HH>>>BH}function rH(HH,BH){return HH[BH]+(HH[BH+1]<<8)+(HH[BH+2]<<16)+(HH[BH+3]<<24)}function SH(HH,BH,LH){return HH[BH]===HH[LH]&&HH[BH+1]===HH[LH+1]&&HH[BH+2]===HH[LH+2]&&HH[BH+3]===HH[LH+3]}function hH(HH,BH,LH,AH,rH){return LH<=60?(AH[rH]=LH-1<<2,rH+=1):LH<256?(AH[rH]=240,AH[rH+1]=LH-1,rH+=2):(AH[rH]=244,AH[rH+1]=LH-1&255,AH[rH+2]=LH-1>>>8,rH+=3),function(HH,BH,LH,AH,rH){var SH;for(SH=0;SH<rH;SH++)LH[AH+SH]=HH[BH+SH]}(HH,BH,AH,rH,LH),rH+LH}function tH(HH,BH,LH,AH){return AH<12&&LH<2048?(HH[BH]=1+(AH-4<<2)+(LH>>>8<<5),HH[BH+1]=255&LH,BH+2):(HH[BH]=2+(AH-1<<2),HH[BH+1]=255&LH,HH[BH+2]=LH>>>8,BH+3)}function zH(HH,BH,LH,AH){for(;AH>=68;)BH=tH(HH,BH,LH,64),AH-=64;return AH>64&&(BH=tH(HH,BH,LH,60),AH-=60),tH(HH,BH,LH,AH)}function CH(HH,BH,tH,CH,EH){for(var XH=1;1<<XH<=tH&&XH<=14;)XH+=1;var GH=32-(XH-=1);"undefined"===typeof LH[XH]&&(LH[XH]=new Uint16Array(1<<XH));var YH,uH=LH[XH];for(YH=0;YH<uH.length;YH++)uH[YH]=0;var QH,WH,MH,xH,vH,PH,TH,UH,VH,OH,bH=BH+tH,kH=BH,mH=BH,oH=!0;if(tH>=15)for(QH=bH-15,MH=AH(rH(HH,BH+=1),GH);oH;){PH=32,xH=BH;do{if(WH=MH,TH=PH>>>5,PH+=1,xH=(BH=xH)+TH,BH>QH){oH=!1;break}MH=AH(rH(HH,xH),GH),vH=kH+uH[WH],uH[WH]=BH-kH}while(!SH(HH,BH,vH));if(!oH)break;EH=hH(HH,mH,BH-mH,CH,EH);do{for(UH=BH,VH=4;BH+VH<bH&&HH[BH+VH]===HH[vH+VH];)VH+=1;if(BH+=VH,EH=zH(CH,EH,UH-vH,VH),mH=BH,BH>=QH){oH=!1;break}uH[AH(rH(HH,BH-1),GH)]=BH-1-kH,vH=kH+uH[OH=AH(rH(HH,BH),GH)],uH[OH]=BH-kH}while(SH(HH,BH,vH));if(!oH)break;MH=AH(rH(HH,BH+=1),GH)}return mH<bH&&(EH=hH(HH,mH,bH-mH,CH,EH)),EH}function EH(HH){this.array=HH}EH.prototype.maxCompressedLength=function(){var HH=this.array.length;return 32+HH+Math.floor(HH/6)},EH.prototype.compressToBuffer=function(HH){var BH,LH=this.array,AH=LH.length,rH=0,SH=0;for(SH=function(HH,BH,LH){do{BH[LH]=127&HH,(HH>>>=7)>0&&(BH[LH]+=128),LH+=1}while(HH>0);return LH}(AH,HH,SH);rH<AH;)SH=CH(LH,rH,BH=Math.min(AH-rH,65536),HH,SH),rH+=BH;return SH},BH.c=EH},11:(HH,BH)=>{var LH=[0,255,65535,16777215,4294967295];function AH(HH,BH,LH,AH,rH){var SH;for(SH=0;SH<rH;SH++)LH[AH+SH]=HH[BH+SH]}function rH(HH,BH,LH,AH){var rH;for(rH=0;rH<AH;rH++)HH[BH+rH]=HH[BH-LH+rH]}function SH(HH){this.array=HH,this.pos=0}SH.prototype.readUncompressedLength=function(){for(var HH,BH,LH=0,AH=0;AH<32&&this.pos<this.array.length;){if(HH=this.array[this.pos],this.pos+=1,(BH=127&HH)<<AH>>>AH!==BH)return-1;if(LH|=BH<<AH,HH<128)return LH;AH+=7}return-1},SH.prototype.uncompressToBuffer=function(HH){for(var BH,SH,hH,tH,zH=this.array,CH=zH.length,EH=this.pos,XH=0;EH<zH.length;)if(BH=zH[EH],EH+=1,0===(3&BH)){if((SH=1+(BH>>>2))>60){if(EH+3>=CH)return!1;hH=SH-60,SH=1+((SH=zH[EH]+(zH[EH+1]<<8)+(zH[EH+2]<<16)+(zH[EH+3]<<24))&LH[hH]),EH+=hH}if(EH+SH>CH)return!1;AH(zH,EH,HH,XH,SH),EH+=SH,XH+=SH}else{switch(3&BH){case 1:SH=4+(BH>>>2&7),tH=zH[EH]+(BH>>>5<<8),EH+=1;break;case 2:if(EH+1>=CH)return!1;SH=1+(BH>>>2),tH=zH[EH]+(zH[EH+1]<<8),EH+=2;break;case 3:if(EH+3>=CH)return!1;SH=1+(BH>>>2),tH=zH[EH]+(zH[EH+1]<<8)+(zH[EH+2]<<16)+(zH[EH+3]<<24),EH+=4}if(0===tH||tH>XH)return!1;rH(HH,XH,tH,SH),XH+=SH}return!0},BH.e=SH}},BH={};var LH=function LH(AH){var rH=BH[AH];if(void 0!==rH)return rH.exports;var SH=BH[AH]={exports:{}};return HH[AH](SH,SH.exports,LH),SH.exports}(9);function AH(HH){const BH=(new TextEncoder).encode(HH);return{bytes:(0,LH.c)(BH),inflatedBytes:BH.byteLength}}const rH=self;self.onmessage=HH=>{const{id:BH,text:LH}=HH.data,SH={id:BH,...AH(LH)};rH.postMessage(SH,[SH.bytes.buffer])}})();', "Worker", void 0, LH.p + "replayDomChunk.worker.8304717f.worker.js")
    }
    class hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = HH, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(HH) {
        return new Promise(((BH, LH) => {
          var AH;
          const rH = null !== (AH = this.worker) && void 0 !== AH ? AH : this.start();
          if (null === rH) return void LH(this.failure);
          const SH = this.nextId++;
          this.waiting.set(SH, {
            resolve: BH,
            reject: LH
          });
          const hH = {
            id: SH,
            text: HH
          };
          rH.postMessage(hH), this.watchdog ??= this.startWatchdog()
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
          this.worker = new SH
        } catch (HH) {
          return this.broke(`didn't start: ${String(HH)}`), null
        }
        return this.worker.onmessage = HH => {
          const {
            id: BH,
            bytes: LH,
            inflatedBytes: AH
          } = HH.data, rH = this.waiting.get(BH);
          this.waiting.delete(BH), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === rH || void 0 === rH || rH.resolve({
            bytes: LH,
            inflatedBytes: AH
          })
        }, this.worker.onerror = HH => {
          this.broke(HH.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const HH = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - HH > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(HH) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${HH}`), this.fail(new Error(`page recording worker failed: ${HH}`))
      }
      fail(HH) {
        var BH;
        this.failure ??= HH, this.stopWatchdog(), null === (BH = this.worker) || void 0 === BH || BH.terminate(), this.worker = null;
        for (const {
            reject: LH
          }
          of this.waiting.values()) LH(HH);
        this.waiting.clear()
      }
    }
  },
  40704: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = LH(40708);

    function rH(HH) {
      const BH = (new TextEncoder).encode(HH);
      return {
        bytes: (0, AH.c)(BH),
        inflatedBytes: BH.byteLength
      }
    }
  },
  40751: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    const AH = 20;
    let rH = Date.now() - performance.now();

    function SH() {
      const HH = performance.now(),
        BH = Date.now();
      return Math.abs(BH - (HH + rH)) > AH && (rH = BH - HH), HH + rH
    }
  },
  40732: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(40735),
      rH = LH(1131);

    function SH() {
      return {
        segmentUploadUrl: `${rH.clientSideServerUrls.indexUrl}${AH.k}`,
        manifestUrl: `${rH.clientSideServerUrls.indexUrl}${AH.e}`
      }
    }
  },
  40738: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      g: () => SH,
      h: () => rH
    });
    const AH = 32768;

    function rH(HH) {
      return (new TextEncoder).encode(HH).byteLength
    }
    const SH = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(HH, BH, LH, AH) {
        if (this.inFlightBytes + LH > 49152) return await fetch(HH, BH);
        this.inFlightBytes += LH, this.countLabel(AH, 1);
        const rH = () => {
          this.inFlightBytes -= LH, this.countLabel(AH, -1)
        };
        let SH;
        try {
          SH = await fetch(HH, {
            ...BH,
            keepalive: !0
          })
        } catch (tH) {
          var hH;
          if (rH(), null !== (hH = BH.signal) && void 0 !== hH && hH.aborted) throw tH;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", tH), await fetch(HH, BH)
        }
        return rH(), SH
      }
      isInFlight(HH) {
        var BH;
        return (null !== (BH = this.inFlightLabels.get(HH)) && void 0 !== BH ? BH : 0) > 0
      }
      sendBeacon(HH, BH) {
        const LH = rH(BH);
        return !(this.inFlightBytes + LH > 57344) && this.beaconSent(navigator.sendBeacon(HH, new Blob([BH], {
          type: "text/plain"
        })), LH)
      }
      sendUploadBeacon(HH, BH, LH) {
        return !(this.inFlightBytes + LH > 40960) && this.beaconSent(navigator.sendBeacon(HH, BH), LH)
      }
      countLabel(HH, BH) {
        var LH;
        void 0 !== HH && this.inFlightLabels.set(HH, (null !== (LH = this.inFlightLabels.get(HH)) && void 0 !== LH ? LH : 0) + BH)
      }
      beaconSent(HH, BH) {
        return HH && (this.inFlightBytes += BH, setTimeout((() => {
          this.inFlightBytes -= BH
        }), 1e4)), HH
      }
    }
  },
  40756: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(40738),
      rH = LH(1148);
    const SH = 6e4;
    async function hH(HH, BH) {
      const LH = JSON.stringify(BH);
      try {
        const BH = await AH.g.fetch(HH, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: LH,
          signal: (0, rH.u)(SH)
        }, (0, AH.h)(LH));
        return await async function(HH) {
          if (!HH.ok) return 413 === HH.status ? "refused" : "retryLater";
          const BH = await HH.json();
          return "rejected" in BH ? (console.warn(`Session replay manifest refused: ${BH.reason}`), BH.retryable ? "retryLater" : "refused") : "uploaded"
        }(BH)
      } catch (hH) {
        return console.warn("Session replay manifest upload failed.", hH), "retryLater"
      }
    }
  },
  40760: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      i: () => zH
    });
    var AH = LH(40738);
    const rH = 16384,
      SH = 100,
      hH = (0, AH.h)(',"domSegments":[]');

    function tH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH;
      const {
        domSegments: tH,
        ...zH
      } = HH.manifest, CH = () => ({
        ...HH,
        manifest: {
          ...zH,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), EH = (0, AH.h)(JSON.stringify(CH())), XH = [];
      let GH = {
          request: CH(),
          items: []
        },
        YH = EH;
      const uH = (HH, BH) => {
          var LH;
          return "domSegments" === BH ? null !== (LH = HH.manifest.domSegments) && void 0 !== LH ? LH : [] : "creatorGrants" === BH ? HH.creatorGrants : HH.manifest[BH]
        },
        QH = (HH, BH, LH) => LH + (HH.length > 0 ? 1 : "domSegments" === BH.list ? hH : 0);
      for (const rH of BH) {
        const HH = (0, AH.h)(JSON.stringify(rH.value));
        let BH = uH(GH.request, rH.list);
        GH.items.length > 0 && (YH + QH(BH, rH, HH) > LH || BH.length >= SH) && (XH.push(GH), GH = {
          request: CH(),
          items: []
        }, YH = EH, BH = uH(GH.request, rH.list)), YH += QH(BH, rH, HH), "domSegments" === rH.list && (GH.request.manifest.domSegments = BH), BH.push(rH.value), GH.items.push(rH)
      }
      return XH.push(GH), XH
    }

    function zH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH;
      return tH(HH, function(HH) {
        var BH;
        return [...HH.creatorGrants.map((HH => ({
          list: "creatorGrants",
          value: HH
        }))), ...HH.manifest.games.map((HH => ({
          list: "games",
          value: HH
        }))), ...HH.manifest.videoSegments.map((HH => ({
          list: "videoSegments",
          value: HH
        }))), ...HH.manifest.telemetrySegments.map((HH => ({
          list: "telemetrySegments",
          value: HH
        }))), ...(null !== (BH = HH.manifest.domSegments) && void 0 !== BH ? BH : []).map((HH => ({
          list: "domSegments",
          value: HH
        })))]
      }(HH), BH).map((HH => {
        let {
          request: BH
        } = HH;
        return BH
      }))
    }
  },
  40748: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH extends Error {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(HH), this.status = BH, this.storageCode = LH
      }
    }
  },
  40735: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      e: () => rH,
      i: () => SH,
      k: () => AH,
      m: () => hH
    });
    const AH = "/index/replay/segment-upload-url",
      rH = "/index/replay/manifest";
    const SH = 65536;

    function hH(HH) {
      return {
        count: Math.ceil(HH.segmentDurationMs / HH.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * HH.bitrate / 8 * (HH.partDurationMs / 1e3)) + 32768
      }
    }
    const tH = 432e5
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);