export const id = 282;
export const ids = [282];
export const modules = {
  41072: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(5506);
    const tR = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function uR(RR) {
      return new Promise(((JR, GR) => {
        RR.onsuccess = () => {
          JR(RR.result)
        }, RR.onerror = () => {
          GR(RR.error)
        }
      }))
    }

    function ZR(RR) {
      return new Promise(((JR, GR) => {
        RR.oncomplete = () => {
          JR()
        }, RR.onerror = () => {
          GR(RR.error)
        }, RR.onabort = () => {
          var JR;
          GR(null !== (JR = RR.error) && void 0 !== JR ? JR : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function qR(RR) {
      return IDBKeyRange.bound([RR], [RR, []])
    }

    function iR(RR, JR) {
      return IDBKeyRange.bound([RR, JR], [RR, JR, []])
    }
    class fR {
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
      putRecording(RR) {
        this.write(["recordings"], (JR => {
          JR.objectStore("recordings").put(RR)
        }))
      }
      putVideoSequence(RR, JR, GR) {
        this.write(["recordings", "videoSequences"], (yR => {
          yR.objectStore("recordings").put(RR), yR.objectStore("videoSequences").put({
            recordingId: RR.recordingId,
            segmentId: JR,
            sequence: GR
          })
        }))
      }
      appendVideo(RR, JR) {
        this.write(["videoHeaders", "videoChunks"], (GR => {
          GR.objectStore("videoHeaders").put(RR);
          const yR = GR.objectStore("videoChunks");
          for (const RR of JR) yR.put(RR)
        }))
      }
      putVideoProgress(RR, JR) {
        this.write(["videoProgress", "videoChunks"], (GR => {
          if (GR.objectStore("videoProgress").put(RR), JR > 0) {
            const {
              recordingId: yR,
              segmentId: tR
            } = RR;
            GR.objectStore("videoChunks").delete(IDBKeyRange.bound([yR, tR, 0], [yR, tR, JR], !1, !0))
          }
        }))
      }
      removeVideoChunks(RR, JR) {
        this.write(["videoChunks"], (GR => {
          GR.objectStore("videoChunks").delete(iR(RR, JR))
        }))
      }
      removeVideo(RR, JR) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (GR => {
          GR.objectStore("videoHeaders").delete([RR, JR]), GR.objectStore("videoChunks").delete(iR(RR, JR)), GR.objectStore("videoSequences").delete([RR, JR]), GR.objectStore("videoProgress").delete([RR, JR])
        }))
      }
      putTelemetry(RR) {
        this.write(["telemetry"], (JR => {
          JR.objectStore("telemetry").put(RR)
        }))
      }
      removeTelemetry(RR, JR) {
        this.write(["telemetry"], (GR => {
          GR.objectStore("telemetry").delete([RR, JR])
        }))
      }
      putDom(RR) {
        this.write(["dom"], (JR => {
          JR.objectStore("dom").put(RR)
        }))
      }
      queueDom(RR, JR, GR) {
        this.write(["recordings", "dom", "domTail"], (yR => {
          yR.objectStore("recordings").put(RR), yR.objectStore("dom").put(JR), yR.objectStore("domTail").delete(iR(JR.recordingId, GR))
        }), (yR => {
          console.warn(`Session replay couldn't journal page recording chunk ${JR.sequence}; a closing tab may lose it.`, yR), this.write(["recordings", "domTail"], (yR => {
            yR.objectStore("recordings").put(RR), yR.objectStore("domTail").delete(iR(JR.recordingId, GR))
          }))
        }))
      }
      putDomTail(RR) {
        this.tailRecordings.add(RR.recordingId), this.write(["domTail"], (JR => {
          JR.objectStore("domTail").put(RR)
        }))
      }
      removeDomTail(RR, JR) {
        this.write(["domTail"], (GR => {
          GR.objectStore("domTail").delete(iR(RR, JR))
        }))
      }
      removeDom(RR, JR) {
        this.write(["dom"], (GR => {
          GR.objectStore("dom").delete([RR, JR])
        }))
      }
      async listRecordings() {
        const RR = await this.open();
        return await uR(RR.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(RR) {
        const JR = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          GR = qR(RR.recordingId),
          yR = RR => uR(JR.objectStore(RR).getAll(GR)),
          [tR, ZR, iR, fR, VR, KR, wR] = await Promise.all([yR("videoHeaders"), yR("videoChunks"), yR("videoSequences"), yR("videoProgress"), yR("telemetry"), yR("dom"), yR("domTail")]);
        return {
          recording: RR,
          telemetry: VR,
          dom: KR,
          domTails: wR,
          video: tR.map((RR => {
            var JR, GR, yR;
            return {
              header: RR,
              sequence: null !== (JR = null === (GR = iR.find((JR => JR.segmentId === RR.segmentId))) || void 0 === GR ? void 0 : GR.sequence) && void 0 !== JR ? JR : null,
              progress: null !== (yR = fR.find((JR => JR.segmentId === RR.segmentId))) && void 0 !== yR ? yR : null,
              chunks: ZR.filter((JR => JR.segmentId === RR.segmentId))
            }
          }))
        }
      }
      async deleteRecording(RR) {
        const JR = (await this.open()).transaction([...tR], "readwrite");
        JR.objectStore("recordings").delete(RR);
        for (const GR of tR.slice(1)) JR.objectStore(GR).delete(qR(RR));
        await ZR(JR)
      }
      async forgetSent(RR, JR) {
        const GR = (await this.open()).transaction([...tR], "readwrite"),
          {
            recordingId: yR
          } = RR;
        GR.objectStore("recordings").put(RR);
        for (const tR of JR.videoSegmentIds) GR.objectStore("videoHeaders").delete([yR, tR]), GR.objectStore("videoChunks").delete(iR(yR, tR)), GR.objectStore("videoSequences").delete([yR, tR]), GR.objectStore("videoProgress").delete([yR, tR]);
        for (const tR of JR.telemetrySequences) GR.objectStore("telemetry").delete([yR, tR]);
        for (const tR of JR.domSequences) GR.objectStore("dom").delete([yR, tR]);
        for (const tR of JR.domTailChunks) GR.objectStore("domTail").delete(iR(yR, tR));
        await ZR(GR)
      }
      write(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RR => {
          this.fail(RR)
        };
        if (this.failed) return;
        const yR = yR => {
          try {
            var tR;
            const uR = yR.transaction(RR, "readwrite");
            JR(uR), null === (tR = uR.commit) || void 0 === tR || tR.call(uR), ZR(uR).catch(GR)
          } catch (uR) {
            GR(uR)
          }
        };
        null === this.db ? this.open().then(yR, (RR => {
          this.fail(RR)
        })) : yR(this.db)
      }
      fail(RR) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", RR), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const RR = RR => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", RR)
        };
        try {
          const JR = this.db.transaction(["domTail"], "readwrite");
          for (const RR of this.tailRecordings) JR.objectStore("domTail").delete(qR(RR));
          ZR(JR).catch(RR)
        } catch (JR) {
          RR(JR)
        }
      }
      open() {
        return this.opening ??= new Promise(((RR, JR) => {
          const GR = indexedDB.open(yR.i, 4);
          GR.onupgradeneeded = RR => {
            const JR = GR.result;
            RR.oldVersion < 1 && (JR.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), JR.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), JR.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), JR.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), JR.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), RR.oldVersion < 2 && JR.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), RR.oldVersion < 3 && JR.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), JR.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let tR = !1;
          GR.onblocked = () => {
            tR = !0, JR(new Error("An older tab holds the upload journal at an earlier version"))
          }, GR.onsuccess = () => {
            tR ? GR.result.close() : (this.db = GR.result, this.db.onversionchange = () => {
              var RR;
              this.dropTails(), null === (RR = this.db) || void 0 === RR || RR.close(), this.db = null, this.opening = null
            }, RR(GR.result))
          }, GR.onerror = () => {
            JR(GR.error)
          }
        })), this.opening
      }
    }
  },
  41041: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      g: () => uR,
      j: () => qR
    });
    var yR = GR(41038);
    const tR = new TextEncoder;

    function uR(RR, JR) {
      return new Blob([tR.encode(`${JSON.stringify(RR)}\n`), JR], {
        type: "text/plain"
      })
    }
    class ZR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = RR, this.relay = JR, this.nowMs = GR, this.refused = !1, this.skipUntilMs = 0
      }
      async send(RR, JR, GR, tR, ZR) {
        if (this.goesDirect(JR, GR)) return null;
        const qR = uR({
            token: this.token,
            contentType: GR,
            target: RR
          }, JR),
          iR = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: qR,
            signal: tR
          };
        let fR;
        try {
          const RR = JR.byteLength <= yR.e ? await yR.i.fetch(this.relay.url, iR, qR.size, GR) : await fetch(this.relay.url, iR);
          if (!RR.ok) throw new Error(`HTTP ${RR.status}`);
          if (fR = await RR.json(), "refused" !== fR.outcome && ("forwarded" !== fR.outcome || !Number.isInteger(fR.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(fR)}`)
        } catch (VR) {
          if (!0 === (null === ZR || void 0 === ZR ? void 0 : ZR.aborted)) throw VR;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", VR), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === fR.outcome ? (console.info(`Session replay's part joiner refused to relay (${fR.reason}); uploading straight to storage.`), this.refused = !0, null) : fR.status
      }
      beacon(RR, JR, GR, yR) {
        if (this.goesDirect(JR, GR)) return null;
        const tR = uR({
          token: this.token,
          contentType: GR,
          target: RR
        }, JR);
        return yR.sendUploadBeacon(this.relay.url, tR, tR.size)
      }
      goesDirect(RR, JR) {
        return this.refused || this.nowMs() < this.skipUntilMs || RR.byteLength > this.relay.maxBytes || "video/mp4" === JR
      }
    }

    function qR(RR) {
      return void 0 === (null === RR || void 0 === RR ? void 0 : RR.relay) ? null : new ZR(RR.token, RR.relay)
    }
    class iR {
      constructor() {
        this.relays = new Map
      }
      for (RR) {
        let JR = this.relays.get(RR.recordingId);
        return void 0 === JR && (JR = qR(RR.partJoiner), this.relays.set(RR.recordingId, JR)), JR
      }
    }
  },
  41060: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => eR,
      c: () => rR,
      d: () => iR
    });
    var yR = GR(41038),
      tR = GR(1295),
      uR = GR(41046);
    const ZR = 1024;

    function qR(RR) {
      return 6e4 + Math.ceil(RR / 16384 * 1e3)
    }

    function iR(RR, JR, GR) {
      const tR = new FormData;
      let uR = JR.byteLength + ZR;
      for (const [ZR, qR] of Object.entries(RR.fields)) tR.append(ZR, qR), uR += (0, yR.j)(ZR) + (0, yR.j)(qR);
      return tR.append("file", new Blob([JR], {
        type: GR
      })), {
        form: tR,
        byteLength: uR
      }
    }

    function fR(RR, JR, GR) {
      return new uR.d(`Segment ${RR} failed with ${JR}${null===GR?"":` (${GR})`}`, JR, GR)
    }

    function VR(RR) {
      if (RR < 200 || RR > 299) throw fR("POST", RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function KR(RR, JR) {
      if ((RR < 200 || RR > 299) && (!JR || 412 !== RR)) throw fR("PUT", RR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function wR(RR) {
      var JR, GR;
      if (RR.ok) return null;
      let yR;
      try {
        yR = await RR.text()
      } catch (tR) {
        return console.warn("Session replay couldn't read storage's error answer", tR), null
      }
      return null !== (JR = null === (GR = /<Code>([^<]+)<\/Code>/.exec(yR)) || void 0 === GR ? void 0 : GR[1]) && void 0 !== JR ? JR : null
    }
    class rR {
      constructor(RR) {
        var JR;
        let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = RR, this.deadline = void 0, this.relay = void 0, this.deadline = GR.deadline, this.relay = null !== (JR = GR.relay) && void 0 !== JR ? JR : null
      }
      requestPutUrl(RR) {
        return this.presign(RR)
      }
      requestPostTargets(RR) {
        return this.presign(RR)
      }
      async presign(RR) {
        const JR = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(RR),
          signal: this.signal(6e4)
        });
        if (!JR.ok) throw new uR.d(`Segment presign failed with ${JR.status}`, JR.status);
        return await JR.json()
      }
      async put(RR, JR, GR, tR) {
        const uR = await this.sendThroughRelay({
          method: "PUT",
          url: RR,
          ifNoneMatch: tR
        }, JR, GR);
        if (null !== uR) return void KR(uR, tR);
        const ZR = {
            method: "PUT",
            headers: {
              "Content-Type": GR,
              ...tR ? {
                "If-None-Match": "*"
              } : {}
            },
            body: JR,
            signal: this.signal(qR(JR.byteLength))
          },
          iR = JR.byteLength <= yR.e ? await yR.i.fetch(RR, ZR, JR.byteLength, GR) : await fetch(RR, ZR);
        KR(iR.status, tR, await wR(iR))
      }
      async post(RR, JR, GR) {
        const tR = await this.sendThroughRelay({
          method: "POST",
          url: RR.url,
          fields: RR.fields
        }, JR, GR);
        if (null !== tR) return void VR(tR);
        const {
          form: uR,
          byteLength: ZR
        } = iR(RR, JR, GR), fR = {
          method: "POST",
          body: uR,
          signal: this.signal(qR(ZR))
        }, KR = ZR <= yR.e ? await yR.i.fetch(RR.url, fR, ZR, GR) : await fetch(RR.url, fR);
        VR(KR.status, await wR(KR))
      }
      async sendThroughRelay(RR, JR, GR) {
        return null === this.relay ? null : await this.relay.send(RR, JR, GR, this.signal(qR(JR.byteLength)), this.deadline)
      }
      signal(RR) {
        const JR = (0, tR.t)(RR);
        return void 0 === this.deadline ? JR : (0, tR.l)([this.deadline, JR])
      }
    }
    class eR {
      async requestPutUrl(RR) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(RR) {
        return {
          targets: Array.from({
            length: RR.parts.count
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
  41028: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(37156),
      tR = GR.n(yR);

    function uR() {
      return tR()('(()=>{var RR={8:(RR,JR,GR)=>{function yR(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function tR(RR){return RR instanceof Uint8Array&&(!yR()||!Buffer.isBuffer(RR))}function uR(RR){return RR instanceof ArrayBuffer}function ZR(RR){return!!yR()&&Buffer.isBuffer(RR)}var qR=GR(16).c,iR=GR(21).c,fR="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";JR.e=function(RR){if(!tR(RR)&&!uR(RR)&&!ZR(RR))throw new TypeError(fR);var JR=!1,GR=!1;tR(RR)?JR=!0:uR(RR)&&(GR=!0,RR=new Uint8Array(RR));var yR,qR,VR,KR=new iR(RR),wR=KR.maxCompressedLength();if(JR?(yR=new Uint8Array(wR),VR=KR.compressToBuffer(yR)):GR?(yR=new ArrayBuffer(wR),qR=new Uint8Array(yR),VR=KR.compressToBuffer(qR)):(yR=Buffer.alloc(wR),VR=KR.compressToBuffer(yR)),!yR.slice){var rR=new Uint8Array(Array.prototype.slice.call(yR,0,VR));if(JR)return rR;if(GR)return rR.buffer;throw new Error("Not implemented")}return yR.slice(0,VR)}},21:(RR,JR)=>{var GR=new Array(15);function yR(RR,JR){return 506832829*RR>>>JR}function tR(RR,JR){return RR[JR]+(RR[JR+1]<<8)+(RR[JR+2]<<16)+(RR[JR+3]<<24)}function uR(RR,JR,GR){return RR[JR]===RR[GR]&&RR[JR+1]===RR[GR+1]&&RR[JR+2]===RR[GR+2]&&RR[JR+3]===RR[GR+3]}function ZR(RR,JR,GR,yR,tR){return GR<=60?(yR[tR]=GR-1<<2,tR+=1):GR<256?(yR[tR]=240,yR[tR+1]=GR-1,tR+=2):(yR[tR]=244,yR[tR+1]=GR-1&255,yR[tR+2]=GR-1>>>8,tR+=3),function(RR,JR,GR,yR,tR){var uR;for(uR=0;uR<tR;uR++)GR[yR+uR]=RR[JR+uR]}(RR,JR,yR,tR,GR),tR+GR}function qR(RR,JR,GR,yR){return yR<12&&GR<2048?(RR[JR]=1+(yR-4<<2)+(GR>>>8<<5),RR[JR+1]=255&GR,JR+2):(RR[JR]=2+(yR-1<<2),RR[JR+1]=255&GR,RR[JR+2]=GR>>>8,JR+3)}function iR(RR,JR,GR,yR){for(;yR>=68;)JR=qR(RR,JR,GR,64),yR-=64;return yR>64&&(JR=qR(RR,JR,GR,60),yR-=60),qR(RR,JR,GR,yR)}function fR(RR,JR,qR,fR,VR){for(var KR=1;1<<KR<=qR&&KR<=14;)KR+=1;var wR=32-(KR-=1);"undefined"===typeof GR[KR]&&(GR[KR]=new Uint16Array(1<<KR));var rR,eR=GR[KR];for(rR=0;rR<eR.length;rR++)eR[rR]=0;var aR,LR,nR,UR,WR,AR,CR,XR,MR,BR,lR=JR+qR,pR=JR,gR=JR,bR=!0;if(qR>=15)for(aR=lR-15,nR=yR(tR(RR,JR+=1),wR);bR;){AR=32,UR=JR;do{if(LR=nR,CR=AR>>>5,AR+=1,UR=(JR=UR)+CR,JR>aR){bR=!1;break}nR=yR(tR(RR,UR),wR),WR=pR+eR[LR],eR[LR]=JR-pR}while(!uR(RR,JR,WR));if(!bR)break;VR=ZR(RR,gR,JR-gR,fR,VR);do{for(XR=JR,MR=4;JR+MR<lR&&RR[JR+MR]===RR[WR+MR];)MR+=1;if(JR+=MR,VR=iR(fR,VR,XR-WR,MR),gR=JR,JR>=aR){bR=!1;break}eR[yR(tR(RR,JR-1),wR)]=JR-1-pR,WR=pR+eR[BR=yR(tR(RR,JR),wR)],eR[BR]=JR-pR}while(uR(RR,JR,WR));if(!bR)break;nR=yR(tR(RR,JR+=1),wR)}return gR<lR&&(VR=ZR(RR,gR,lR-gR,fR,VR)),VR}function VR(RR){this.array=RR}VR.prototype.maxCompressedLength=function(){var RR=this.array.length;return 32+RR+Math.floor(RR/6)},VR.prototype.compressToBuffer=function(RR){var JR,GR=this.array,yR=GR.length,tR=0,uR=0;for(uR=function(RR,JR,GR){do{JR[GR]=127&RR,(RR>>>=7)>0&&(JR[GR]+=128),GR+=1}while(RR>0);return GR}(yR,RR,uR);tR<yR;)uR=fR(GR,tR,JR=Math.min(yR-tR,65536),RR,uR),tR+=JR;return uR},JR.c=VR},16:(RR,JR)=>{var GR=[0,255,65535,16777215,4294967295];function yR(RR,JR,GR,yR,tR){var uR;for(uR=0;uR<tR;uR++)GR[yR+uR]=RR[JR+uR]}function tR(RR,JR,GR,yR){var tR;for(tR=0;tR<yR;tR++)RR[JR+tR]=RR[JR-GR+tR]}function uR(RR){this.array=RR,this.pos=0}uR.prototype.readUncompressedLength=function(){for(var RR,JR,GR=0,yR=0;yR<32&&this.pos<this.array.length;){if(RR=this.array[this.pos],this.pos+=1,(JR=127&RR)<<yR>>>yR!==JR)return-1;if(GR|=JR<<yR,RR<128)return GR;yR+=7}return-1},uR.prototype.uncompressToBuffer=function(RR){for(var JR,uR,ZR,qR,iR=this.array,fR=iR.length,VR=this.pos,KR=0;VR<iR.length;)if(JR=iR[VR],VR+=1,0===(3&JR)){if((uR=1+(JR>>>2))>60){if(VR+3>=fR)return!1;ZR=uR-60,uR=1+((uR=iR[VR]+(iR[VR+1]<<8)+(iR[VR+2]<<16)+(iR[VR+3]<<24))&GR[ZR]),VR+=ZR}if(VR+uR>fR)return!1;yR(iR,VR,RR,KR,uR),VR+=uR,KR+=uR}else{switch(3&JR){case 1:uR=4+(JR>>>2&7),qR=iR[VR]+(JR>>>5<<8),VR+=1;break;case 2:if(VR+1>=fR)return!1;uR=1+(JR>>>2),qR=iR[VR]+(iR[VR+1]<<8),VR+=2;break;case 3:if(VR+3>=fR)return!1;uR=1+(JR>>>2),qR=iR[VR]+(iR[VR+1]<<8)+(iR[VR+2]<<16)+(iR[VR+3]<<24),VR+=4}if(0===qR||qR>KR)return!1;tR(RR,KR,qR,uR),KR+=uR}return!0},JR.c=uR}},JR={};var GR=function GR(yR){var tR=JR[yR];if(void 0!==tR)return tR.exports;var uR=JR[yR]={exports:{}};return RR[yR](uR,uR.exports,GR),uR.exports}(8);function yR(RR){const JR=(new TextEncoder).encode(RR);return{bytes:(0,GR.e)(JR),inflatedBytes:JR.byteLength}}const tR=self;self.onmessage=RR=>{const{id:JR,text:GR}=RR.data,uR={id:JR,...yR(GR)};tR.postMessage(uR,[uR.bytes.buffer])}})();', "Worker", void 0, GR.p + "replayDomChunk.worker.f957ef19.worker.js")
    }
    class ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = RR, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(RR) {
        return new Promise(((JR, GR) => {
          var yR;
          const tR = null !== (yR = this.worker) && void 0 !== yR ? yR : this.start();
          if (null === tR) return void GR(this.failure);
          const uR = this.nextId++;
          this.waiting.set(uR, {
            resolve: JR,
            reject: GR
          });
          const ZR = {
            id: uR,
            text: RR
          };
          tR.postMessage(ZR), this.watchdog ??= this.startWatchdog()
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
          this.worker = new uR
        } catch (RR) {
          return this.broke(`didn't start: ${String(RR)}`), null
        }
        return this.worker.onmessage = RR => {
          const {
            id: JR,
            bytes: GR,
            inflatedBytes: yR
          } = RR.data, tR = this.waiting.get(JR);
          this.waiting.delete(JR), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === tR || void 0 === tR || tR.resolve({
            bytes: GR,
            inflatedBytes: yR
          })
        }, this.worker.onerror = RR => {
          this.broke(RR.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const RR = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - RR > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(RR) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${RR}`), this.fail(new Error(`page recording worker failed: ${RR}`))
      }
      fail(RR) {
        var JR;
        this.failure ??= RR, this.stopWatchdog(), null === (JR = this.worker) || void 0 === JR || JR.terminate(), this.worker = null;
        for (const {
            reject: GR
          }
          of this.waiting.values()) GR(RR);
        this.waiting.clear()
      }
    }
  },
  41001: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    var yR = GR(41009);

    function tR(RR) {
      const JR = (new TextEncoder).encode(RR);
      return {
        bytes: (0, yR.e)(JR),
        inflatedBytes: JR.byteLength
      }
    }
  },
  41049: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR
    });
    const yR = 20;
    let tR = Date.now() - performance.now();

    function uR() {
      const RR = performance.now(),
        JR = Date.now();
      return Math.abs(JR - (RR + tR)) > yR && (tR = JR - RR), RR + tR
    }
  },
  41031: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR
    });
    var yR = GR(41034),
      tR = GR(1282);

    function uR() {
      return {
        segmentUploadUrl: `${tR.clientSideServerUrls.indexUrl}${yR.k}`,
        manifestUrl: `${tR.clientSideServerUrls.indexUrl}${yR.f}`
      }
    }
  },
  41038: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      i: () => uR,
      j: () => tR
    });
    const yR = 32768;

    function tR(RR) {
      return (new TextEncoder).encode(RR).byteLength
    }
    const uR = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(RR, JR, GR, yR) {
        if (this.inFlightBytes + GR > 49152) return await fetch(RR, JR);
        this.inFlightBytes += GR, this.countLabel(yR, 1);
        const tR = () => {
          this.inFlightBytes -= GR, this.countLabel(yR, -1)
        };
        let uR;
        try {
          uR = await fetch(RR, {
            ...JR,
            keepalive: !0
          })
        } catch (qR) {
          var ZR;
          if (tR(), null !== (ZR = JR.signal) && void 0 !== ZR && ZR.aborted) throw qR;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", qR), await fetch(RR, JR)
        }
        return tR(), uR
      }
      isInFlight(RR) {
        var JR;
        return (null !== (JR = this.inFlightLabels.get(RR)) && void 0 !== JR ? JR : 0) > 0
      }
      sendBeacon(RR, JR) {
        const GR = tR(JR);
        return !(this.inFlightBytes + GR > 57344) && this.beaconSent(navigator.sendBeacon(RR, new Blob([JR], {
          type: "text/plain"
        })), GR)
      }
      sendUploadBeacon(RR, JR, GR) {
        return !(this.inFlightBytes + GR > 40960) && this.beaconSent(navigator.sendBeacon(RR, JR), GR)
      }
      countLabel(RR, JR) {
        var GR;
        void 0 !== RR && this.inFlightLabels.set(RR, (null !== (GR = this.inFlightLabels.get(RR)) && void 0 !== GR ? GR : 0) + JR)
      }
      beaconSent(RR, JR) {
        return RR && (this.inFlightBytes += JR, setTimeout((() => {
          this.inFlightBytes -= JR
        }), 1e4)), RR
      }
    }
  },
  41051: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(41038),
      tR = GR(1295);
    const uR = 6e4;
    async function ZR(RR, JR) {
      const GR = JSON.stringify(JR);
      try {
        const JR = await yR.i.fetch(RR, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: GR,
          signal: (0, tR.t)(uR)
        }, (0, yR.j)(GR));
        return await async function(RR) {
          if (!RR.ok) return 413 === RR.status ? "refused" : "retryLater";
          const JR = await RR.json();
          return "rejected" in JR ? (console.warn(`Session replay manifest refused: ${JR.reason}`), JR.retryable ? "retryLater" : "refused") : "uploaded"
        }(JR)
      } catch (ZR) {
        return console.warn("Session replay manifest upload failed.", ZR), "retryLater"
      }
    }
  },
  41053: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => iR
    });
    var yR = GR(41038);
    const tR = 16384,
      uR = 100,
      ZR = (0, yR.j)(',"domSegments":[]');

    function qR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR;
      const {
        domSegments: qR,
        ...iR
      } = RR.manifest, fR = () => ({
        ...RR,
        manifest: {
          ...iR,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), VR = (0, yR.j)(JSON.stringify(fR())), KR = [];
      let wR = {
          request: fR(),
          items: []
        },
        rR = VR;
      const eR = (RR, JR) => {
          var GR;
          return "domSegments" === JR ? null !== (GR = RR.manifest.domSegments) && void 0 !== GR ? GR : [] : "creatorGrants" === JR ? RR.creatorGrants : RR.manifest[JR]
        },
        aR = (RR, JR, GR) => GR + (RR.length > 0 ? 1 : "domSegments" === JR.list ? ZR : 0);
      for (const tR of JR) {
        const RR = (0, yR.j)(JSON.stringify(tR.value));
        let JR = eR(wR.request, tR.list);
        wR.items.length > 0 && (rR + aR(JR, tR, RR) > GR || JR.length >= uR) && (KR.push(wR), wR = {
          request: fR(),
          items: []
        }, rR = VR, JR = eR(wR.request, tR.list)), rR += aR(JR, tR, RR), "domSegments" === tR.list && (wR.request.manifest.domSegments = JR), JR.push(tR.value), wR.items.push(tR)
      }
      return KR.push(wR), KR
    }

    function iR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR;
      return qR(RR, function(RR) {
        var JR;
        return [...RR.creatorGrants.map((RR => ({
          list: "creatorGrants",
          value: RR
        }))), ...RR.manifest.games.map((RR => ({
          list: "games",
          value: RR
        }))), ...RR.manifest.videoSegments.map((RR => ({
          list: "videoSegments",
          value: RR
        }))), ...RR.manifest.telemetrySegments.map((RR => ({
          list: "telemetrySegments",
          value: RR
        }))), ...(null !== (JR = RR.manifest.domSegments) && void 0 !== JR ? JR : []).map((RR => ({
          list: "domSegments",
          value: RR
        })))]
      }(RR), JR).map((RR => {
        let {
          request: JR
        } = RR;
        return JR
      }))
    }
  },
  41046: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR extends Error {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(RR), this.status = JR, this.storageCode = GR
      }
    }
  },
  41034: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      f: () => tR,
      g: () => uR,
      k: () => yR,
      m: () => ZR
    });
    const yR = "/index/replay/segment-upload-url",
      tR = "/index/replay/manifest";
    const uR = 65536;

    function ZR(RR) {
      return {
        count: Math.ceil(RR.segmentDurationMs / RR.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * RR.bitrate / 8 * (RR.partDurationMs / 1e3)) + 32768
      }
    }
    const qR = 432e5
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);