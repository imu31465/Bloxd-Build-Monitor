export const id = 270;
export const ids = [270];
export const modules = {
  40644: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    var cU = zU(5139);
    const yU = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function QU(UU) {
      return new Promise(((XU, zU) => {
        UU.onsuccess = () => {
          XU(UU.result)
        }, UU.onerror = () => {
          zU(UU.error)
        }
      }))
    }

    function AU(UU) {
      return new Promise(((XU, zU) => {
        UU.oncomplete = () => {
          XU()
        }, UU.onerror = () => {
          zU(UU.error)
        }, UU.onabort = () => {
          var XU;
          zU(null !== (XU = UU.error) && void 0 !== XU ? XU : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function FU(UU) {
      return IDBKeyRange.bound([UU], [UU, []])
    }

    function oU(UU, XU) {
      return IDBKeyRange.bound([UU, XU], [UU, XU, []])
    }
    class DU {
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
      putRecording(UU) {
        this.write(["recordings"], (XU => {
          XU.objectStore("recordings").put(UU)
        }))
      }
      putVideoSequence(UU, XU, zU) {
        this.write(["recordings", "videoSequences"], (cU => {
          cU.objectStore("recordings").put(UU), cU.objectStore("videoSequences").put({
            recordingId: UU.recordingId,
            segmentId: XU,
            sequence: zU
          })
        }))
      }
      appendVideo(UU, XU) {
        this.write(["videoHeaders", "videoChunks"], (zU => {
          zU.objectStore("videoHeaders").put(UU);
          const cU = zU.objectStore("videoChunks");
          for (const UU of XU) cU.put(UU)
        }))
      }
      putVideoProgress(UU, XU) {
        this.write(["videoProgress", "videoChunks"], (zU => {
          if (zU.objectStore("videoProgress").put(UU), XU > 0) {
            const {
              recordingId: cU,
              segmentId: yU
            } = UU;
            zU.objectStore("videoChunks").delete(IDBKeyRange.bound([cU, yU, 0], [cU, yU, XU], !1, !0))
          }
        }))
      }
      removeVideoChunks(UU, XU) {
        this.write(["videoChunks"], (zU => {
          zU.objectStore("videoChunks").delete(oU(UU, XU))
        }))
      }
      removeVideo(UU, XU) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (zU => {
          zU.objectStore("videoHeaders").delete([UU, XU]), zU.objectStore("videoChunks").delete(oU(UU, XU)), zU.objectStore("videoSequences").delete([UU, XU]), zU.objectStore("videoProgress").delete([UU, XU])
        }))
      }
      putTelemetry(UU) {
        this.write(["telemetry"], (XU => {
          XU.objectStore("telemetry").put(UU)
        }))
      }
      removeTelemetry(UU, XU) {
        this.write(["telemetry"], (zU => {
          zU.objectStore("telemetry").delete([UU, XU])
        }))
      }
      putDom(UU) {
        this.write(["dom"], (XU => {
          XU.objectStore("dom").put(UU)
        }))
      }
      queueDom(UU, XU, zU) {
        this.write(["recordings", "dom", "domTail"], (cU => {
          cU.objectStore("recordings").put(UU), cU.objectStore("dom").put(XU), cU.objectStore("domTail").delete(oU(XU.recordingId, zU))
        }), (cU => {
          console.warn(`Session replay couldn't journal page recording chunk ${XU.sequence}; a closing tab may lose it.`, cU), this.write(["recordings", "domTail"], (cU => {
            cU.objectStore("recordings").put(UU), cU.objectStore("domTail").delete(oU(XU.recordingId, zU))
          }))
        }))
      }
      putDomTail(UU) {
        this.tailRecordings.add(UU.recordingId), this.write(["domTail"], (XU => {
          XU.objectStore("domTail").put(UU)
        }))
      }
      removeDomTail(UU, XU) {
        this.write(["domTail"], (zU => {
          zU.objectStore("domTail").delete(oU(UU, XU))
        }))
      }
      removeDom(UU, XU) {
        this.write(["dom"], (zU => {
          zU.objectStore("dom").delete([UU, XU])
        }))
      }
      async listRecordings() {
        const UU = await this.open();
        return await QU(UU.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(UU) {
        const XU = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          zU = FU(UU.recordingId),
          cU = UU => QU(XU.objectStore(UU).getAll(zU)),
          [yU, AU, oU, DU, EU, YU, NU] = await Promise.all([cU("videoHeaders"), cU("videoChunks"), cU("videoSequences"), cU("videoProgress"), cU("telemetry"), cU("dom"), cU("domTail")]);
        return {
          recording: UU,
          telemetry: EU,
          dom: YU,
          domTails: NU,
          video: yU.map((UU => {
            var XU, zU, cU;
            return {
              header: UU,
              sequence: null !== (XU = null === (zU = oU.find((XU => XU.segmentId === UU.segmentId))) || void 0 === zU ? void 0 : zU.sequence) && void 0 !== XU ? XU : null,
              progress: null !== (cU = DU.find((XU => XU.segmentId === UU.segmentId))) && void 0 !== cU ? cU : null,
              chunks: AU.filter((XU => XU.segmentId === UU.segmentId))
            }
          }))
        }
      }
      async deleteRecording(UU) {
        const XU = (await this.open()).transaction([...yU], "readwrite");
        XU.objectStore("recordings").delete(UU);
        for (const zU of yU.slice(1)) XU.objectStore(zU).delete(FU(UU));
        await AU(XU)
      }
      async forgetSent(UU, XU) {
        const zU = (await this.open()).transaction([...yU], "readwrite"),
          {
            recordingId: cU
          } = UU;
        zU.objectStore("recordings").put(UU);
        for (const yU of XU.videoSegmentIds) zU.objectStore("videoHeaders").delete([cU, yU]), zU.objectStore("videoChunks").delete(oU(cU, yU)), zU.objectStore("videoSequences").delete([cU, yU]), zU.objectStore("videoProgress").delete([cU, yU]);
        for (const yU of XU.telemetrySequences) zU.objectStore("telemetry").delete([cU, yU]);
        for (const yU of XU.domSequences) zU.objectStore("dom").delete([cU, yU]);
        for (const yU of XU.domTailChunks) zU.objectStore("domTail").delete(oU(cU, yU));
        await AU(zU)
      }
      write(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU => {
          this.fail(UU)
        };
        if (this.failed) return;
        const cU = cU => {
          try {
            var yU;
            const QU = cU.transaction(UU, "readwrite");
            XU(QU), null === (yU = QU.commit) || void 0 === yU || yU.call(QU), AU(QU).catch(zU)
          } catch (QU) {
            zU(QU)
          }
        };
        null === this.db ? this.open().then(cU, (UU => {
          this.fail(UU)
        })) : cU(this.db)
      }
      fail(UU) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", UU), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const UU = UU => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", UU)
        };
        try {
          const XU = this.db.transaction(["domTail"], "readwrite");
          for (const UU of this.tailRecordings) XU.objectStore("domTail").delete(FU(UU));
          AU(XU).catch(UU)
        } catch (XU) {
          UU(XU)
        }
      }
      open() {
        return this.opening ??= new Promise(((UU, XU) => {
          const zU = indexedDB.open(cU.i, 4);
          zU.onupgradeneeded = UU => {
            const XU = zU.result;
            UU.oldVersion < 1 && (XU.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), XU.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), XU.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), XU.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), XU.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), UU.oldVersion < 2 && XU.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), UU.oldVersion < 3 && XU.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), XU.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let yU = !1;
          zU.onblocked = () => {
            yU = !0, XU(new Error("An older tab holds the upload journal at an earlier version"))
          }, zU.onsuccess = () => {
            yU ? zU.result.close() : (this.db = zU.result, this.db.onversionchange = () => {
              var UU;
              this.dropTails(), null === (UU = this.db) || void 0 === UU || UU.close(), this.db = null, this.opening = null
            }, UU(zU.result))
          }, zU.onerror = () => {
            XU(zU.error)
          }
        })), this.opening
      }
    }
  },
  40586: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU,
      d: () => QU,
      h: () => FU
    });
    var cU = zU(40578);
    const yU = new TextEncoder;

    function QU(UU, XU) {
      return new Blob([yU.encode(`${JSON.stringify(UU)}\n`), XU], {
        type: "text/plain"
      })
    }
    class AU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = UU, this.relay = XU, this.nowMs = zU, this.refused = !1, this.skipUntilMs = 0
      }
      async send(UU, XU, zU, yU, AU) {
        if (this.goesDirect(XU, zU)) return null;
        const FU = QU({
            token: this.token,
            contentType: zU,
            target: UU
          }, XU),
          oU = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: FU,
            signal: yU
          };
        let DU;
        try {
          const UU = XU.byteLength <= cU.c ? await cU.d.fetch(this.relay.url, oU, FU.size, zU) : await fetch(this.relay.url, oU);
          if (!UU.ok) throw new Error(`HTTP ${UU.status}`);
          if (DU = await UU.json(), "refused" !== DU.outcome && ("forwarded" !== DU.outcome || !Number.isInteger(DU.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(DU)}`)
        } catch (EU) {
          if (!0 === (null === AU || void 0 === AU ? void 0 : AU.aborted)) throw EU;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", EU), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === DU.outcome ? (console.info(`Session replay's part joiner refused to relay (${DU.reason}); uploading straight to storage.`), this.refused = !0, null) : DU.status
      }
      beacon(UU, XU, zU, cU) {
        if (this.goesDirect(XU, zU)) return null;
        const yU = QU({
          token: this.token,
          contentType: zU,
          target: UU
        }, XU);
        return cU.sendUploadBeacon(this.relay.url, yU, yU.size)
      }
      goesDirect(UU, XU) {
        return this.refused || this.nowMs() < this.skipUntilMs || UU.byteLength > this.relay.maxBytes || "video/mp4" === XU
      }
    }

    function FU(UU) {
      return void 0 === (null === UU || void 0 === UU ? void 0 : UU.relay) ? null : new AU(UU.token, UU.relay)
    }
    class oU {
      constructor() {
        this.relays = new Map
      }
      for (UU) {
        let XU = this.relays.get(UU.recordingId);
        return void 0 === XU && (XU = FU(UU.partJoiner), this.relays.set(UU.recordingId, XU)), XU
      }
    }
  },
  40622: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => pU,
      g: () => IU,
      k: () => oU
    });
    var cU = zU(40578),
      yU = zU(1220),
      QU = zU(40594);
    const AU = 1024;

    function FU(UU) {
      return 6e4 + Math.ceil(UU / 16384 * 1e3)
    }

    function oU(UU, XU, zU) {
      const yU = new FormData;
      let QU = XU.byteLength + AU;
      for (const [AU, FU] of Object.entries(UU.fields)) yU.append(AU, FU), QU += (0, cU.e)(AU) + (0, cU.e)(FU);
      return yU.append("file", new Blob([XU], {
        type: zU
      })), {
        form: yU,
        byteLength: QU
      }
    }

    function DU(UU, XU, zU) {
      return new QU.b(`Segment ${UU} failed with ${XU}${null===zU?"":` (${zU})`}`, XU, zU)
    }

    function EU(UU) {
      if (UU < 200 || UU > 299) throw DU("POST", UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function YU(UU, XU) {
      if ((UU < 200 || UU > 299) && (!XU || 412 !== UU)) throw DU("PUT", UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function NU(UU) {
      var XU, zU;
      if (UU.ok) return null;
      let cU;
      try {
        cU = await UU.text()
      } catch (yU) {
        return console.warn("Session replay couldn't read storage's error answer", yU), null
      }
      return null !== (XU = null === (zU = /<Code>([^<]+)<\/Code>/.exec(cU)) || void 0 === zU ? void 0 : zU[1]) && void 0 !== XU ? XU : null
    }
    class IU {
      constructor(UU) {
        var XU;
        let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = UU, this.deadline = void 0, this.relay = void 0, this.deadline = zU.deadline, this.relay = null !== (XU = zU.relay) && void 0 !== XU ? XU : null
      }
      requestPutUrl(UU) {
        return this.presign(UU)
      }
      requestPostTargets(UU) {
        return this.presign(UU)
      }
      async presign(UU) {
        const XU = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(UU),
          signal: this.signal(6e4)
        });
        if (!XU.ok) throw new QU.b(`Segment presign failed with ${XU.status}`, XU.status);
        return await XU.json()
      }
      async put(UU, XU, zU, yU) {
        const QU = await this.sendThroughRelay({
          method: "PUT",
          url: UU,
          ifNoneMatch: yU
        }, XU, zU);
        if (null !== QU) return void YU(QU, yU);
        const AU = {
            method: "PUT",
            headers: {
              "Content-Type": zU,
              ...yU ? {
                "If-None-Match": "*"
              } : {}
            },
            body: XU,
            signal: this.signal(FU(XU.byteLength))
          },
          oU = XU.byteLength <= cU.c ? await cU.d.fetch(UU, AU, XU.byteLength, zU) : await fetch(UU, AU);
        YU(oU.status, yU, await NU(oU))
      }
      async post(UU, XU, zU) {
        const yU = await this.sendThroughRelay({
          method: "POST",
          url: UU.url,
          fields: UU.fields
        }, XU, zU);
        if (null !== yU) return void EU(yU);
        const {
          form: QU,
          byteLength: AU
        } = oU(UU, XU, zU), DU = {
          method: "POST",
          body: QU,
          signal: this.signal(FU(AU))
        }, YU = AU <= cU.c ? await cU.d.fetch(UU.url, DU, AU, zU) : await fetch(UU.url, DU);
        EU(YU.status, await NU(YU))
      }
      async sendThroughRelay(UU, XU, zU) {
        return null === this.relay ? null : await this.relay.send(UU, XU, zU, this.signal(FU(XU.byteLength)), this.deadline)
      }
      signal(UU) {
        const XU = (0, yU.n)(UU);
        return void 0 === this.deadline ? XU : (0, yU.i)([this.deadline, XU])
      }
    }
    class pU {
      async requestPutUrl(UU) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(UU) {
        return {
          targets: Array.from({
            length: UU.parts.count
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
  40569: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(36961),
      yU = zU.n(cU);

    function QU() {
      return yU()('(()=>{var UU={10:(UU,XU,zU)=>{function cU(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function yU(UU){return UU instanceof Uint8Array&&(!cU()||!Buffer.isBuffer(UU))}function QU(UU){return UU instanceof ArrayBuffer}function AU(UU){return!!cU()&&Buffer.isBuffer(UU)}var FU=zU(19).e,oU=zU(23).e,DU="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";XU.d=function(UU){if(!yU(UU)&&!QU(UU)&&!AU(UU))throw new TypeError(DU);var XU=!1,zU=!1;yU(UU)?XU=!0:QU(UU)&&(zU=!0,UU=new Uint8Array(UU));var cU,FU,EU,YU=new oU(UU),NU=YU.maxCompressedLength();if(XU?(cU=new Uint8Array(NU),EU=YU.compressToBuffer(cU)):zU?(cU=new ArrayBuffer(NU),FU=new Uint8Array(cU),EU=YU.compressToBuffer(FU)):(cU=Buffer.alloc(NU),EU=YU.compressToBuffer(cU)),!cU.slice){var IU=new Uint8Array(Array.prototype.slice.call(cU,0,EU));if(XU)return IU;if(zU)return IU.buffer;throw new Error("Not implemented")}return cU.slice(0,EU)}},23:(UU,XU)=>{var zU=new Array(15);function cU(UU,XU){return 506832829*UU>>>XU}function yU(UU,XU){return UU[XU]+(UU[XU+1]<<8)+(UU[XU+2]<<16)+(UU[XU+3]<<24)}function QU(UU,XU,zU){return UU[XU]===UU[zU]&&UU[XU+1]===UU[zU+1]&&UU[XU+2]===UU[zU+2]&&UU[XU+3]===UU[zU+3]}function AU(UU,XU,zU,cU,yU){return zU<=60?(cU[yU]=zU-1<<2,yU+=1):zU<256?(cU[yU]=240,cU[yU+1]=zU-1,yU+=2):(cU[yU]=244,cU[yU+1]=zU-1&255,cU[yU+2]=zU-1>>>8,yU+=3),function(UU,XU,zU,cU,yU){var QU;for(QU=0;QU<yU;QU++)zU[cU+QU]=UU[XU+QU]}(UU,XU,cU,yU,zU),yU+zU}function FU(UU,XU,zU,cU){return cU<12&&zU<2048?(UU[XU]=1+(cU-4<<2)+(zU>>>8<<5),UU[XU+1]=255&zU,XU+2):(UU[XU]=2+(cU-1<<2),UU[XU+1]=255&zU,UU[XU+2]=zU>>>8,XU+3)}function oU(UU,XU,zU,cU){for(;cU>=68;)XU=FU(UU,XU,zU,64),cU-=64;return cU>64&&(XU=FU(UU,XU,zU,60),cU-=60),FU(UU,XU,zU,cU)}function DU(UU,XU,FU,DU,EU){for(var YU=1;1<<YU<=FU&&YU<=14;)YU+=1;var NU=32-(YU-=1);"undefined"===typeof zU[YU]&&(zU[YU]=new Uint16Array(1<<YU));var IU,pU=zU[YU];for(IU=0;IU<pU.length;IU++)pU[IU]=0;var aU,tU,gU,kU,GU,BU,ZU,RU,PU,WU,dU=XU+FU,LU=XU,eU=XU,CU=!0;if(FU>=15)for(aU=dU-15,gU=cU(yU(UU,XU+=1),NU);CU;){BU=32,kU=XU;do{if(tU=gU,ZU=BU>>>5,BU+=1,kU=(XU=kU)+ZU,XU>aU){CU=!1;break}gU=cU(yU(UU,kU),NU),GU=LU+pU[tU],pU[tU]=XU-LU}while(!QU(UU,XU,GU));if(!CU)break;EU=AU(UU,eU,XU-eU,DU,EU);do{for(RU=XU,PU=4;XU+PU<dU&&UU[XU+PU]===UU[GU+PU];)PU+=1;if(XU+=PU,EU=oU(DU,EU,RU-GU,PU),eU=XU,XU>=aU){CU=!1;break}pU[cU(yU(UU,XU-1),NU)]=XU-1-LU,GU=LU+pU[WU=cU(yU(UU,XU),NU)],pU[WU]=XU-LU}while(QU(UU,XU,GU));if(!CU)break;gU=cU(yU(UU,XU+=1),NU)}return eU<dU&&(EU=AU(UU,eU,dU-eU,DU,EU)),EU}function EU(UU){this.array=UU}EU.prototype.maxCompressedLength=function(){var UU=this.array.length;return 32+UU+Math.floor(UU/6)},EU.prototype.compressToBuffer=function(UU){var XU,zU=this.array,cU=zU.length,yU=0,QU=0;for(QU=function(UU,XU,zU){do{XU[zU]=127&UU,(UU>>>=7)>0&&(XU[zU]+=128),zU+=1}while(UU>0);return zU}(cU,UU,QU);yU<cU;)QU=DU(zU,yU,XU=Math.min(cU-yU,65536),UU,QU),yU+=XU;return QU},XU.e=EU},19:(UU,XU)=>{var zU=[0,255,65535,16777215,4294967295];function cU(UU,XU,zU,cU,yU){var QU;for(QU=0;QU<yU;QU++)zU[cU+QU]=UU[XU+QU]}function yU(UU,XU,zU,cU){var yU;for(yU=0;yU<cU;yU++)UU[XU+yU]=UU[XU-zU+yU]}function QU(UU){this.array=UU,this.pos=0}QU.prototype.readUncompressedLength=function(){for(var UU,XU,zU=0,cU=0;cU<32&&this.pos<this.array.length;){if(UU=this.array[this.pos],this.pos+=1,(XU=127&UU)<<cU>>>cU!==XU)return-1;if(zU|=XU<<cU,UU<128)return zU;cU+=7}return-1},QU.prototype.uncompressToBuffer=function(UU){for(var XU,QU,AU,FU,oU=this.array,DU=oU.length,EU=this.pos,YU=0;EU<oU.length;)if(XU=oU[EU],EU+=1,0===(3&XU)){if((QU=1+(XU>>>2))>60){if(EU+3>=DU)return!1;AU=QU-60,QU=1+((QU=oU[EU]+(oU[EU+1]<<8)+(oU[EU+2]<<16)+(oU[EU+3]<<24))&zU[AU]),EU+=AU}if(EU+QU>DU)return!1;cU(oU,EU,UU,YU,QU),EU+=QU,YU+=QU}else{switch(3&XU){case 1:QU=4+(XU>>>2&7),FU=oU[EU]+(XU>>>5<<8),EU+=1;break;case 2:if(EU+1>=DU)return!1;QU=1+(XU>>>2),FU=oU[EU]+(oU[EU+1]<<8),EU+=2;break;case 3:if(EU+3>=DU)return!1;QU=1+(XU>>>2),FU=oU[EU]+(oU[EU+1]<<8)+(oU[EU+2]<<16)+(oU[EU+3]<<24),EU+=4}if(0===FU||FU>YU)return!1;yU(UU,YU,FU,QU),YU+=QU}return!0},XU.e=QU}},XU={};var zU=function zU(cU){var yU=XU[cU];if(void 0!==yU)return yU.exports;var QU=XU[cU]={exports:{}};return UU[cU](QU,QU.exports,zU),QU.exports}(10);function cU(UU){const XU=(new TextEncoder).encode(UU);return{bytes:(0,zU.d)(XU),inflatedBytes:XU.byteLength}}const yU=self;self.onmessage=UU=>{const{id:XU,text:zU}=UU.data,QU={id:XU,...cU(zU)};yU.postMessage(QU,[QU.bytes.buffer])}})();', "Worker", void 0, zU.p + "replayDomChunk.worker.f68effaf.worker.js")
    }
    class AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = UU, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(UU) {
        return new Promise(((XU, zU) => {
          var cU;
          const yU = null !== (cU = this.worker) && void 0 !== cU ? cU : this.start();
          if (null === yU) return void zU(this.failure);
          const QU = this.nextId++;
          this.waiting.set(QU, {
            resolve: XU,
            reject: zU
          });
          const AU = {
            id: QU,
            text: UU
          };
          yU.postMessage(AU), this.watchdog ??= this.startWatchdog()
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
          this.worker = new QU
        } catch (UU) {
          return this.broke(`didn't start: ${String(UU)}`), null
        }
        return this.worker.onmessage = UU => {
          const {
            id: XU,
            bytes: zU,
            inflatedBytes: cU
          } = UU.data, yU = this.waiting.get(XU);
          this.waiting.delete(XU), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === yU || void 0 === yU || yU.resolve({
            bytes: zU,
            inflatedBytes: cU
          })
        }, this.worker.onerror = UU => {
          this.broke(UU.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const UU = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - UU > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(UU) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${UU}`), this.fail(new Error(`page recording worker failed: ${UU}`))
      }
      fail(UU) {
        var XU;
        this.failure ??= UU, this.stopWatchdog(), null === (XU = this.worker) || void 0 === XU || XU.terminate(), this.worker = null;
        for (const {
            reject: zU
          }
          of this.waiting.values()) zU(UU);
        this.waiting.clear()
      }
    }
  },
  40543: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(40549);

    function yU(UU) {
      const XU = (new TextEncoder).encode(UU);
      return {
        bytes: (0, cU.e)(XU),
        inflatedBytes: XU.byteLength
      }
    }
  },
  40603: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    const cU = 20;
    let yU = Date.now() - performance.now();

    function QU() {
      const UU = performance.now(),
        XU = Date.now();
      return Math.abs(XU - (UU + yU)) > cU && (yU = XU - UU), UU + yU
    }
  },
  40573: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    var cU = zU(40576),
      yU = zU(1203);

    function QU() {
      return {
        segmentUploadUrl: `${yU.clientSideServerUrls.indexUrl}${cU.m}`,
        manifestUrl: `${yU.clientSideServerUrls.indexUrl}${cU.i}`
      }
    }
  },
  40578: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      d: () => QU,
      e: () => yU
    });
    const cU = 32768;

    function yU(UU) {
      return (new TextEncoder).encode(UU).byteLength
    }
    const QU = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(UU, XU, zU, cU) {
        if (this.inFlightBytes + zU > 49152) return await fetch(UU, XU);
        this.inFlightBytes += zU, this.countLabel(cU, 1);
        const yU = () => {
          this.inFlightBytes -= zU, this.countLabel(cU, -1)
        };
        let QU;
        try {
          QU = await fetch(UU, {
            ...XU,
            keepalive: !0
          })
        } catch (FU) {
          var AU;
          if (yU(), null !== (AU = XU.signal) && void 0 !== AU && AU.aborted) throw FU;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", FU), await fetch(UU, XU)
        }
        return yU(), QU
      }
      isInFlight(UU) {
        var XU;
        return (null !== (XU = this.inFlightLabels.get(UU)) && void 0 !== XU ? XU : 0) > 0
      }
      sendBeacon(UU, XU) {
        const zU = yU(XU);
        return !(this.inFlightBytes + zU > 57344) && this.beaconSent(navigator.sendBeacon(UU, new Blob([XU], {
          type: "text/plain"
        })), zU)
      }
      sendUploadBeacon(UU, XU, zU) {
        return !(this.inFlightBytes + zU > 40960) && this.beaconSent(navigator.sendBeacon(UU, XU), zU)
      }
      countLabel(UU, XU) {
        var zU;
        void 0 !== UU && this.inFlightLabels.set(UU, (null !== (zU = this.inFlightLabels.get(UU)) && void 0 !== zU ? zU : 0) + XU)
      }
      beaconSent(UU, XU) {
        return UU && (this.inFlightBytes += XU, setTimeout((() => {
          this.inFlightBytes -= XU
        }), 1e4)), UU
      }
    }
  },
  40607: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU
    });
    var cU = zU(40578),
      yU = zU(1220);
    const QU = 6e4;
    async function AU(UU, XU) {
      const zU = JSON.stringify(XU);
      try {
        const XU = await cU.d.fetch(UU, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: zU,
          signal: (0, yU.n)(QU)
        }, (0, cU.e)(zU));
        return await async function(UU) {
          if (!UU.ok) return 413 === UU.status ? "refused" : "retryLater";
          const XU = await UU.json();
          return "rejected" in XU ? (console.warn(`Session replay manifest refused: ${XU.reason}`), XU.retryable ? "retryLater" : "refused") : "uploaded"
        }(XU)
      } catch (AU) {
        return console.warn("Session replay manifest upload failed.", AU), "retryLater"
      }
    }
  },
  40613: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      e: () => oU
    });
    var cU = zU(40578);
    const yU = 16384,
      QU = 100,
      AU = (0, cU.e)(',"domSegments":[]');

    function FU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU;
      const {
        domSegments: FU,
        ...oU
      } = UU.manifest, DU = () => ({
        ...UU,
        manifest: {
          ...oU,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), EU = (0, cU.e)(JSON.stringify(DU())), YU = [];
      let NU = {
          request: DU(),
          items: []
        },
        IU = EU;
      const pU = (UU, XU) => {
          var zU;
          return "domSegments" === XU ? null !== (zU = UU.manifest.domSegments) && void 0 !== zU ? zU : [] : "creatorGrants" === XU ? UU.creatorGrants : UU.manifest[XU]
        },
        aU = (UU, XU, zU) => zU + (UU.length > 0 ? 1 : "domSegments" === XU.list ? AU : 0);
      for (const yU of XU) {
        const UU = (0, cU.e)(JSON.stringify(yU.value));
        let XU = pU(NU.request, yU.list);
        NU.items.length > 0 && (IU + aU(XU, yU, UU) > zU || XU.length >= QU) && (YU.push(NU), NU = {
          request: DU(),
          items: []
        }, IU = EU, XU = pU(NU.request, yU.list)), IU += aU(XU, yU, UU), "domSegments" === yU.list && (NU.request.manifest.domSegments = XU), XU.push(yU.value), NU.items.push(yU)
      }
      return YU.push(NU), YU
    }

    function oU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU;
      return FU(UU, function(UU) {
        var XU;
        return [...UU.creatorGrants.map((UU => ({
          list: "creatorGrants",
          value: UU
        }))), ...UU.manifest.games.map((UU => ({
          list: "games",
          value: UU
        }))), ...UU.manifest.videoSegments.map((UU => ({
          list: "videoSegments",
          value: UU
        }))), ...UU.manifest.telemetrySegments.map((UU => ({
          list: "telemetrySegments",
          value: UU
        }))), ...(null !== (XU = UU.manifest.domSegments) && void 0 !== XU ? XU : []).map((UU => ({
          list: "domSegments",
          value: UU
        })))]
      }(UU), XU).map((UU => {
        let {
          request: XU
        } = UU;
        return XU
      }))
    }
  },
  40594: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU extends Error {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(UU), this.status = XU, this.storageCode = zU
      }
    }
  },
  40576: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      i: () => yU,
      j: () => QU,
      m: () => cU,
      n: () => AU
    });
    const cU = "/index/replay/segment-upload-url",
      yU = "/index/replay/manifest";
    const QU = 65536;

    function AU(UU) {
      return {
        count: Math.ceil(UU.segmentDurationMs / UU.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * UU.bitrate / 8 * (UU.partDurationMs / 1e3)) + 32768
      }
    }
    const FU = 432e5
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);