export const id = 276;
export const ids = [276];
export const modules = {
  40537: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB
    });
    var YB = GB(5122);
    const DB = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function QB(BB) {
      return new Promise(((OB, GB) => {
        BB.onsuccess = () => {
          OB(BB.result)
        }, BB.onerror = () => {
          GB(BB.error)
        }
      }))
    }

    function oB(BB) {
      return new Promise(((OB, GB) => {
        BB.oncomplete = () => {
          OB()
        }, BB.onerror = () => {
          GB(BB.error)
        }, BB.onabort = () => {
          var OB;
          GB(null !== (OB = BB.error) && void 0 !== OB ? OB : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function jB(BB) {
      return IDBKeyRange.bound([BB], [BB, []])
    }

    function yB(BB, OB) {
      return IDBKeyRange.bound([BB, OB], [BB, OB, []])
    }
    class JB {
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
      putRecording(BB) {
        this.write(["recordings"], (OB => {
          OB.objectStore("recordings").put(BB)
        }))
      }
      putVideoSequence(BB, OB, GB) {
        this.write(["recordings", "videoSequences"], (YB => {
          YB.objectStore("recordings").put(BB), YB.objectStore("videoSequences").put({
            recordingId: BB.recordingId,
            segmentId: OB,
            sequence: GB
          })
        }))
      }
      appendVideo(BB, OB) {
        this.write(["videoHeaders", "videoChunks"], (GB => {
          GB.objectStore("videoHeaders").put(BB);
          const YB = GB.objectStore("videoChunks");
          for (const BB of OB) YB.put(BB)
        }))
      }
      putVideoProgress(BB, OB) {
        this.write(["videoProgress", "videoChunks"], (GB => {
          if (GB.objectStore("videoProgress").put(BB), OB > 0) {
            const {
              recordingId: YB,
              segmentId: DB
            } = BB;
            GB.objectStore("videoChunks").delete(IDBKeyRange.bound([YB, DB, 0], [YB, DB, OB], !1, !0))
          }
        }))
      }
      removeVideoChunks(BB, OB) {
        this.write(["videoChunks"], (GB => {
          GB.objectStore("videoChunks").delete(yB(BB, OB))
        }))
      }
      removeVideo(BB, OB) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (GB => {
          GB.objectStore("videoHeaders").delete([BB, OB]), GB.objectStore("videoChunks").delete(yB(BB, OB)), GB.objectStore("videoSequences").delete([BB, OB]), GB.objectStore("videoProgress").delete([BB, OB])
        }))
      }
      putTelemetry(BB) {
        this.write(["telemetry"], (OB => {
          OB.objectStore("telemetry").put(BB)
        }))
      }
      removeTelemetry(BB, OB) {
        this.write(["telemetry"], (GB => {
          GB.objectStore("telemetry").delete([BB, OB])
        }))
      }
      putDom(BB) {
        this.write(["dom"], (OB => {
          OB.objectStore("dom").put(BB)
        }))
      }
      queueDom(BB, OB, GB) {
        this.write(["recordings", "dom", "domTail"], (YB => {
          YB.objectStore("recordings").put(BB), YB.objectStore("dom").put(OB), YB.objectStore("domTail").delete(yB(OB.recordingId, GB))
        }), (YB => {
          console.warn(`Session replay couldn't journal page recording chunk ${OB.sequence}; a closing tab may lose it.`, YB), this.write(["recordings", "domTail"], (YB => {
            YB.objectStore("recordings").put(BB), YB.objectStore("domTail").delete(yB(OB.recordingId, GB))
          }))
        }))
      }
      putDomTail(BB) {
        this.tailRecordings.add(BB.recordingId), this.write(["domTail"], (OB => {
          OB.objectStore("domTail").put(BB)
        }))
      }
      removeDomTail(BB, OB) {
        this.write(["domTail"], (GB => {
          GB.objectStore("domTail").delete(yB(BB, OB))
        }))
      }
      removeDom(BB, OB) {
        this.write(["dom"], (GB => {
          GB.objectStore("dom").delete([BB, OB])
        }))
      }
      async listRecordings() {
        const BB = await this.open();
        return await QB(BB.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(BB) {
        const OB = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          GB = jB(BB.recordingId),
          YB = BB => QB(OB.objectStore(BB).getAll(GB)),
          [DB, oB, yB, JB, MB, PB, zB] = await Promise.all([YB("videoHeaders"), YB("videoChunks"), YB("videoSequences"), YB("videoProgress"), YB("telemetry"), YB("dom"), YB("domTail")]);
        return {
          recording: BB,
          telemetry: MB,
          dom: PB,
          domTails: zB,
          video: DB.map((BB => {
            var OB, GB, YB;
            return {
              header: BB,
              sequence: null !== (OB = null === (GB = yB.find((OB => OB.segmentId === BB.segmentId))) || void 0 === GB ? void 0 : GB.sequence) && void 0 !== OB ? OB : null,
              progress: null !== (YB = JB.find((OB => OB.segmentId === BB.segmentId))) && void 0 !== YB ? YB : null,
              chunks: oB.filter((OB => OB.segmentId === BB.segmentId))
            }
          }))
        }
      }
      async deleteRecording(BB) {
        const OB = (await this.open()).transaction([...DB], "readwrite");
        OB.objectStore("recordings").delete(BB);
        for (const GB of DB.slice(1)) OB.objectStore(GB).delete(jB(BB));
        await oB(OB)
      }
      async forgetSent(BB, OB) {
        const GB = (await this.open()).transaction([...DB], "readwrite"),
          {
            recordingId: YB
          } = BB;
        GB.objectStore("recordings").put(BB);
        for (const DB of OB.videoSegmentIds) GB.objectStore("videoHeaders").delete([YB, DB]), GB.objectStore("videoChunks").delete(yB(YB, DB)), GB.objectStore("videoSequences").delete([YB, DB]), GB.objectStore("videoProgress").delete([YB, DB]);
        for (const DB of OB.telemetrySequences) GB.objectStore("telemetry").delete([YB, DB]);
        for (const DB of OB.domSequences) GB.objectStore("dom").delete([YB, DB]);
        for (const DB of OB.domTailChunks) GB.objectStore("domTail").delete(yB(YB, DB));
        await oB(GB)
      }
      write(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB => {
          this.fail(BB)
        };
        if (this.failed) return;
        const YB = YB => {
          try {
            var DB;
            const QB = YB.transaction(BB, "readwrite");
            OB(QB), null === (DB = QB.commit) || void 0 === DB || DB.call(QB), oB(QB).catch(GB)
          } catch (QB) {
            GB(QB)
          }
        };
        null === this.db ? this.open().then(YB, (BB => {
          this.fail(BB)
        })) : YB(this.db)
      }
      fail(BB) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", BB), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const BB = BB => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", BB)
        };
        try {
          const OB = this.db.transaction(["domTail"], "readwrite");
          for (const BB of this.tailRecordings) OB.objectStore("domTail").delete(jB(BB));
          oB(OB).catch(BB)
        } catch (OB) {
          BB(OB)
        }
      }
      open() {
        return this.opening ??= new Promise(((BB, OB) => {
          const GB = indexedDB.open(YB.i, 4);
          GB.onupgradeneeded = BB => {
            const OB = GB.result;
            BB.oldVersion < 1 && (OB.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), OB.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), OB.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), OB.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), OB.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), BB.oldVersion < 2 && OB.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), BB.oldVersion < 3 && OB.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), OB.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let DB = !1;
          GB.onblocked = () => {
            DB = !0, OB(new Error("An older tab holds the upload journal at an earlier version"))
          }, GB.onsuccess = () => {
            DB ? GB.result.close() : (this.db = GB.result, this.db.onversionchange = () => {
              var BB;
              this.dropTails(), null === (BB = this.db) || void 0 === BB || BB.close(), this.db = null, this.opening = null
            }, BB(GB.result))
          }, GB.onerror = () => {
            OB(GB.error)
          }
        })), this.opening
      }
    }
  },
  40482: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      i: () => QB,
      l: () => jB
    });
    var YB = GB(40477);
    const DB = new TextEncoder;

    function QB(BB, OB) {
      return new Blob([DB.encode(`${JSON.stringify(BB)}\n`), OB], {
        type: "text/plain"
      })
    }
    class oB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = BB, this.relay = OB, this.nowMs = GB, this.refused = !1, this.skipUntilMs = 0
      }
      async send(BB, OB, GB, DB, oB) {
        if (this.goesDirect(OB, GB)) return null;
        const jB = QB({
            token: this.token,
            contentType: GB,
            target: BB
          }, OB),
          yB = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: jB,
            signal: DB
          };
        let JB;
        try {
          const BB = OB.byteLength <= YB.e ? await YB.i.fetch(this.relay.url, yB, jB.size, GB) : await fetch(this.relay.url, yB);
          if (!BB.ok) throw new Error(`HTTP ${BB.status}`);
          if (JB = await BB.json(), "refused" !== JB.outcome && ("forwarded" !== JB.outcome || !Number.isInteger(JB.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(JB)}`)
        } catch (MB) {
          if (!0 === (null === oB || void 0 === oB ? void 0 : oB.aborted)) throw MB;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", MB), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === JB.outcome ? (console.info(`Session replay's part joiner refused to relay (${JB.reason}); uploading straight to storage.`), this.refused = !0, null) : JB.status
      }
      beacon(BB, OB, GB, YB) {
        if (this.goesDirect(OB, GB)) return null;
        const DB = QB({
          token: this.token,
          contentType: GB,
          target: BB
        }, OB);
        return YB.sendUploadBeacon(this.relay.url, DB, DB.size)
      }
      goesDirect(BB, OB) {
        return this.refused || this.nowMs() < this.skipUntilMs || BB.byteLength > this.relay.maxBytes || "video/mp4" === OB
      }
    }

    function jB(BB) {
      return void 0 === (null === BB || void 0 === BB ? void 0 : BB.relay) ? null : new oB(BB.token, BB.relay)
    }
    class yB {
      constructor() {
        this.relays = new Map
      }
      for (BB) {
        let OB = this.relays.get(BB.recordingId);
        return void 0 === OB && (OB = jB(BB.partJoiner), this.relays.set(BB.recordingId, OB)), OB
      }
    }
  },
  40520: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => pB,
      f: () => lB,
      h: () => yB
    });
    var YB = GB(40477),
      DB = GB(1200),
      QB = GB(40491);
    const oB = 1024;

    function jB(BB) {
      return 6e4 + Math.ceil(BB / 16384 * 1e3)
    }

    function yB(BB, OB, GB) {
      const DB = new FormData;
      let QB = OB.byteLength + oB;
      for (const [oB, jB] of Object.entries(BB.fields)) DB.append(oB, jB), QB += (0, YB.m)(oB) + (0, YB.m)(jB);
      return DB.append("file", new Blob([OB], {
        type: GB
      })), {
        form: DB,
        byteLength: QB
      }
    }

    function JB(BB, OB, GB) {
      return new QB.e(`Segment ${BB} failed with ${OB}${null===GB?"":` (${GB})`}`, OB, GB)
    }

    function MB(BB) {
      if (BB < 200 || BB > 299) throw JB("POST", BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function PB(BB, OB) {
      if ((BB < 200 || BB > 299) && (!OB || 412 !== BB)) throw JB("PUT", BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function zB(BB) {
      var OB, GB;
      if (BB.ok) return null;
      let YB;
      try {
        YB = await BB.text()
      } catch (DB) {
        return console.warn("Session replay couldn't read storage's error answer", DB), null
      }
      return null !== (OB = null === (GB = /<Code>([^<]+)<\/Code>/.exec(YB)) || void 0 === GB ? void 0 : GB[1]) && void 0 !== OB ? OB : null
    }
    class lB {
      constructor(BB) {
        var OB;
        let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = BB, this.deadline = void 0, this.relay = void 0, this.deadline = GB.deadline, this.relay = null !== (OB = GB.relay) && void 0 !== OB ? OB : null
      }
      requestPutUrl(BB) {
        return this.presign(BB)
      }
      requestPostTargets(BB) {
        return this.presign(BB)
      }
      async presign(BB) {
        const OB = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(BB),
          signal: this.signal(6e4)
        });
        if (!OB.ok) throw new QB.e(`Segment presign failed with ${OB.status}`, OB.status);
        return await OB.json()
      }
      async put(BB, OB, GB, DB) {
        const QB = await this.sendThroughRelay({
          method: "PUT",
          url: BB,
          ifNoneMatch: DB
        }, OB, GB);
        if (null !== QB) return void PB(QB, DB);
        const oB = {
            method: "PUT",
            headers: {
              "Content-Type": GB,
              ...DB ? {
                "If-None-Match": "*"
              } : {}
            },
            body: OB,
            signal: this.signal(jB(OB.byteLength))
          },
          yB = OB.byteLength <= YB.e ? await YB.i.fetch(BB, oB, OB.byteLength, GB) : await fetch(BB, oB);
        PB(yB.status, DB, await zB(yB))
      }
      async post(BB, OB, GB) {
        const DB = await this.sendThroughRelay({
          method: "POST",
          url: BB.url,
          fields: BB.fields
        }, OB, GB);
        if (null !== DB) return void MB(DB);
        const {
          form: QB,
          byteLength: oB
        } = yB(BB, OB, GB), JB = {
          method: "POST",
          body: QB,
          signal: this.signal(jB(oB))
        }, PB = oB <= YB.e ? await YB.i.fetch(BB.url, JB, oB, GB) : await fetch(BB.url, JB);
        MB(PB.status, await zB(PB))
      }
      async sendThroughRelay(BB, OB, GB) {
        return null === this.relay ? null : await this.relay.send(BB, OB, GB, this.signal(jB(OB.byteLength)), this.deadline)
      }
      signal(BB) {
        const OB = (0, DB.t)(BB);
        return void 0 === this.deadline ? OB : (0, DB.p)([this.deadline, OB])
      }
    }
    class pB {
      async requestPutUrl(BB) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(BB) {
        return {
          targets: Array.from({
            length: BB.parts.count
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
  40457: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    var YB = GB(36856),
      DB = GB.n(YB);

    function QB() {
      return DB()('(()=>{var BB={10:(BB,OB,GB)=>{function YB(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function DB(BB){return BB instanceof Uint8Array&&(!YB()||!Buffer.isBuffer(BB))}function QB(BB){return BB instanceof ArrayBuffer}function oB(BB){return!!YB()&&Buffer.isBuffer(BB)}var jB=GB(12).d,yB=GB(19).b,JB="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";OB.b=function(BB){if(!DB(BB)&&!QB(BB)&&!oB(BB))throw new TypeError(JB);var OB=!1,GB=!1;DB(BB)?OB=!0:QB(BB)&&(GB=!0,BB=new Uint8Array(BB));var YB,jB,MB,PB=new yB(BB),zB=PB.maxCompressedLength();if(OB?(YB=new Uint8Array(zB),MB=PB.compressToBuffer(YB)):GB?(YB=new ArrayBuffer(zB),jB=new Uint8Array(YB),MB=PB.compressToBuffer(jB)):(YB=Buffer.alloc(zB),MB=PB.compressToBuffer(YB)),!YB.slice){var lB=new Uint8Array(Array.prototype.slice.call(YB,0,MB));if(OB)return lB;if(GB)return lB.buffer;throw new Error("Not implemented")}return YB.slice(0,MB)}},19:(BB,OB)=>{var GB=new Array(15);function YB(BB,OB){return 506832829*BB>>>OB}function DB(BB,OB){return BB[OB]+(BB[OB+1]<<8)+(BB[OB+2]<<16)+(BB[OB+3]<<24)}function QB(BB,OB,GB){return BB[OB]===BB[GB]&&BB[OB+1]===BB[GB+1]&&BB[OB+2]===BB[GB+2]&&BB[OB+3]===BB[GB+3]}function oB(BB,OB,GB,YB,DB){return GB<=60?(YB[DB]=GB-1<<2,DB+=1):GB<256?(YB[DB]=240,YB[DB+1]=GB-1,DB+=2):(YB[DB]=244,YB[DB+1]=GB-1&255,YB[DB+2]=GB-1>>>8,DB+=3),function(BB,OB,GB,YB,DB){var QB;for(QB=0;QB<DB;QB++)GB[YB+QB]=BB[OB+QB]}(BB,OB,YB,DB,GB),DB+GB}function jB(BB,OB,GB,YB){return YB<12&&GB<2048?(BB[OB]=1+(YB-4<<2)+(GB>>>8<<5),BB[OB+1]=255&GB,OB+2):(BB[OB]=2+(YB-1<<2),BB[OB+1]=255&GB,BB[OB+2]=GB>>>8,OB+3)}function yB(BB,OB,GB,YB){for(;YB>=68;)OB=jB(BB,OB,GB,64),YB-=64;return YB>64&&(OB=jB(BB,OB,GB,60),YB-=60),jB(BB,OB,GB,YB)}function JB(BB,OB,jB,JB,MB){for(var PB=1;1<<PB<=jB&&PB<=14;)PB+=1;var zB=32-(PB-=1);"undefined"===typeof GB[PB]&&(GB[PB]=new Uint16Array(1<<PB));var lB,pB=GB[PB];for(lB=0;lB<pB.length;lB++)pB[lB]=0;var qB,ZB,NB,RB,WB,AB,VB,SB,nB,UB,fB=OB+jB,kB=OB,dB=OB,KB=!0;if(jB>=15)for(qB=fB-15,NB=YB(DB(BB,OB+=1),zB);KB;){AB=32,RB=OB;do{if(ZB=NB,VB=AB>>>5,AB+=1,RB=(OB=RB)+VB,OB>qB){KB=!1;break}NB=YB(DB(BB,RB),zB),WB=kB+pB[ZB],pB[ZB]=OB-kB}while(!QB(BB,OB,WB));if(!KB)break;MB=oB(BB,dB,OB-dB,JB,MB);do{for(SB=OB,nB=4;OB+nB<fB&&BB[OB+nB]===BB[WB+nB];)nB+=1;if(OB+=nB,MB=yB(JB,MB,SB-WB,nB),dB=OB,OB>=qB){KB=!1;break}pB[YB(DB(BB,OB-1),zB)]=OB-1-kB,WB=kB+pB[UB=YB(DB(BB,OB),zB)],pB[UB]=OB-kB}while(QB(BB,OB,WB));if(!KB)break;NB=YB(DB(BB,OB+=1),zB)}return dB<fB&&(MB=oB(BB,dB,fB-dB,JB,MB)),MB}function MB(BB){this.array=BB}MB.prototype.maxCompressedLength=function(){var BB=this.array.length;return 32+BB+Math.floor(BB/6)},MB.prototype.compressToBuffer=function(BB){var OB,GB=this.array,YB=GB.length,DB=0,QB=0;for(QB=function(BB,OB,GB){do{OB[GB]=127&BB,(BB>>>=7)>0&&(OB[GB]+=128),GB+=1}while(BB>0);return GB}(YB,BB,QB);DB<YB;)QB=JB(GB,DB,OB=Math.min(YB-DB,65536),BB,QB),DB+=OB;return QB},OB.b=MB},12:(BB,OB)=>{var GB=[0,255,65535,16777215,4294967295];function YB(BB,OB,GB,YB,DB){var QB;for(QB=0;QB<DB;QB++)GB[YB+QB]=BB[OB+QB]}function DB(BB,OB,GB,YB){var DB;for(DB=0;DB<YB;DB++)BB[OB+DB]=BB[OB-GB+DB]}function QB(BB){this.array=BB,this.pos=0}QB.prototype.readUncompressedLength=function(){for(var BB,OB,GB=0,YB=0;YB<32&&this.pos<this.array.length;){if(BB=this.array[this.pos],this.pos+=1,(OB=127&BB)<<YB>>>YB!==OB)return-1;if(GB|=OB<<YB,BB<128)return GB;YB+=7}return-1},QB.prototype.uncompressToBuffer=function(BB){for(var OB,QB,oB,jB,yB=this.array,JB=yB.length,MB=this.pos,PB=0;MB<yB.length;)if(OB=yB[MB],MB+=1,0===(3&OB)){if((QB=1+(OB>>>2))>60){if(MB+3>=JB)return!1;oB=QB-60,QB=1+((QB=yB[MB]+(yB[MB+1]<<8)+(yB[MB+2]<<16)+(yB[MB+3]<<24))&GB[oB]),MB+=oB}if(MB+QB>JB)return!1;YB(yB,MB,BB,PB,QB),MB+=QB,PB+=QB}else{switch(3&OB){case 1:QB=4+(OB>>>2&7),jB=yB[MB]+(OB>>>5<<8),MB+=1;break;case 2:if(MB+1>=JB)return!1;QB=1+(OB>>>2),jB=yB[MB]+(yB[MB+1]<<8),MB+=2;break;case 3:if(MB+3>=JB)return!1;QB=1+(OB>>>2),jB=yB[MB]+(yB[MB+1]<<8)+(yB[MB+2]<<16)+(yB[MB+3]<<24),MB+=4}if(0===jB||jB>PB)return!1;DB(BB,PB,jB,QB),PB+=QB}return!0},OB.d=QB}},OB={};var GB=function GB(YB){var DB=OB[YB];if(void 0!==DB)return DB.exports;var QB=OB[YB]={exports:{}};return BB[YB](QB,QB.exports,GB),QB.exports}(10);function YB(BB){const OB=(new TextEncoder).encode(BB);return{bytes:(0,GB.b)(OB),inflatedBytes:OB.byteLength}}const DB=self;self.onmessage=BB=>{const{id:OB,text:GB}=BB.data,QB={id:OB,...YB(GB)};DB.postMessage(QB,[QB.bytes.buffer])}})();', "Worker", void 0, GB.p + "replayDomChunk.worker.9266ddc3.worker.js")
    }
    class oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = BB, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(BB) {
        return new Promise(((OB, GB) => {
          var YB;
          const DB = null !== (YB = this.worker) && void 0 !== YB ? YB : this.start();
          if (null === DB) return void GB(this.failure);
          const QB = this.nextId++;
          this.waiting.set(QB, {
            resolve: OB,
            reject: GB
          });
          const oB = {
            id: QB,
            text: BB
          };
          DB.postMessage(oB), this.watchdog ??= this.startWatchdog()
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
          this.worker = new QB
        } catch (BB) {
          return this.broke(`didn't start: ${String(BB)}`), null
        }
        return this.worker.onmessage = BB => {
          const {
            id: OB,
            bytes: GB,
            inflatedBytes: YB
          } = BB.data, DB = this.waiting.get(OB);
          this.waiting.delete(OB), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === DB || void 0 === DB || DB.resolve({
            bytes: GB,
            inflatedBytes: YB
          })
        }, this.worker.onerror = BB => {
          this.broke(BB.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const BB = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - BB > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(BB) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${BB}`), this.fail(new Error(`page recording worker failed: ${BB}`))
      }
      fail(BB) {
        var OB;
        this.failure ??= BB, this.stopWatchdog(), null === (OB = this.worker) || void 0 === OB || OB.terminate(), this.worker = null;
        for (const {
            reject: GB
          }
          of this.waiting.values()) GB(BB);
        this.waiting.clear()
      }
    }
  },
  40432: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(40436);

    function DB(BB) {
      const OB = (new TextEncoder).encode(BB);
      return {
        bytes: (0, YB.e)(OB),
        inflatedBytes: OB.byteLength
      }
    }
  },
  40497: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    const YB = 20;
    let DB = Date.now() - performance.now();

    function QB() {
      const BB = performance.now(),
        OB = Date.now();
      return Math.abs(OB - (BB + DB)) > YB && (DB = OB - BB), BB + DB
    }
  },
  40464: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    var YB = GB(40469),
      DB = GB(1186);

    function QB() {
      return {
        segmentUploadUrl: `${DB.clientSideServerUrls.indexUrl}${YB.h}`,
        manifestUrl: `${DB.clientSideServerUrls.indexUrl}${YB.f}`
      }
    }
  },
  40477: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      i: () => QB,
      m: () => DB
    });
    const YB = 32768;

    function DB(BB) {
      return (new TextEncoder).encode(BB).byteLength
    }
    const QB = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(BB, OB, GB, YB) {
        if (this.inFlightBytes + GB > 49152) return await fetch(BB, OB);
        this.inFlightBytes += GB, this.countLabel(YB, 1);
        const DB = () => {
          this.inFlightBytes -= GB, this.countLabel(YB, -1)
        };
        let QB;
        try {
          QB = await fetch(BB, {
            ...OB,
            keepalive: !0
          })
        } catch (jB) {
          var oB;
          if (DB(), null !== (oB = OB.signal) && void 0 !== oB && oB.aborted) throw jB;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", jB), await fetch(BB, OB)
        }
        return DB(), QB
      }
      isInFlight(BB) {
        var OB;
        return (null !== (OB = this.inFlightLabels.get(BB)) && void 0 !== OB ? OB : 0) > 0
      }
      sendBeacon(BB, OB) {
        const GB = DB(OB);
        return !(this.inFlightBytes + GB > 57344) && this.beaconSent(navigator.sendBeacon(BB, new Blob([OB], {
          type: "text/plain"
        })), GB)
      }
      sendUploadBeacon(BB, OB, GB) {
        return !(this.inFlightBytes + GB > 40960) && this.beaconSent(navigator.sendBeacon(BB, OB), GB)
      }
      countLabel(BB, OB) {
        var GB;
        void 0 !== BB && this.inFlightLabels.set(BB, (null !== (GB = this.inFlightLabels.get(BB)) && void 0 !== GB ? GB : 0) + OB)
      }
      beaconSent(BB, OB) {
        return BB && (this.inFlightBytes += OB, setTimeout((() => {
          this.inFlightBytes -= OB
        }), 1e4)), BB
      }
    }
  },
  40505: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(40477),
      DB = GB(1200);
    const QB = 6e4;
    async function oB(BB, OB) {
      const GB = JSON.stringify(OB);
      try {
        const OB = await YB.i.fetch(BB, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: GB,
          signal: (0, DB.t)(QB)
        }, (0, YB.m)(GB));
        return await async function(BB) {
          if (!BB.ok) return 413 === BB.status ? "refused" : "retryLater";
          const OB = await BB.json();
          return "rejected" in OB ? (console.warn(`Session replay manifest refused: ${OB.reason}`), OB.retryable ? "retryLater" : "refused") : "uploaded"
        }(OB)
      } catch (oB) {
        return console.warn("Session replay manifest upload failed.", oB), "retryLater"
      }
    }
  },
  40514: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      g: () => yB
    });
    var YB = GB(40477);
    const DB = 16384,
      QB = 100,
      oB = (0, YB.m)(',"domSegments":[]');

    function jB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB;
      const {
        domSegments: jB,
        ...yB
      } = BB.manifest, JB = () => ({
        ...BB,
        manifest: {
          ...yB,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), MB = (0, YB.m)(JSON.stringify(JB())), PB = [];
      let zB = {
          request: JB(),
          items: []
        },
        lB = MB;
      const pB = (BB, OB) => {
          var GB;
          return "domSegments" === OB ? null !== (GB = BB.manifest.domSegments) && void 0 !== GB ? GB : [] : "creatorGrants" === OB ? BB.creatorGrants : BB.manifest[OB]
        },
        qB = (BB, OB, GB) => GB + (BB.length > 0 ? 1 : "domSegments" === OB.list ? oB : 0);
      for (const DB of OB) {
        const BB = (0, YB.m)(JSON.stringify(DB.value));
        let OB = pB(zB.request, DB.list);
        zB.items.length > 0 && (lB + qB(OB, DB, BB) > GB || OB.length >= QB) && (PB.push(zB), zB = {
          request: JB(),
          items: []
        }, lB = MB, OB = pB(zB.request, DB.list)), lB += qB(OB, DB, BB), "domSegments" === DB.list && (zB.request.manifest.domSegments = OB), OB.push(DB.value), zB.items.push(DB)
      }
      return PB.push(zB), PB
    }

    function yB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB;
      return jB(BB, function(BB) {
        var OB;
        return [...BB.creatorGrants.map((BB => ({
          list: "creatorGrants",
          value: BB
        }))), ...BB.manifest.games.map((BB => ({
          list: "games",
          value: BB
        }))), ...BB.manifest.videoSegments.map((BB => ({
          list: "videoSegments",
          value: BB
        }))), ...BB.manifest.telemetrySegments.map((BB => ({
          list: "telemetrySegments",
          value: BB
        }))), ...(null !== (OB = BB.manifest.domSegments) && void 0 !== OB ? OB : []).map((BB => ({
          list: "domSegments",
          value: BB
        })))]
      }(BB), OB).map((BB => {
        let {
          request: OB
        } = BB;
        return OB
      }))
    }
  },
  40491: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    class YB extends Error {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(BB), this.status = OB, this.storageCode = GB
      }
    }
  },
  40469: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      f: () => DB,
      g: () => QB,
      h: () => YB,
      l: () => oB
    });
    const YB = "/index/replay/segment-upload-url",
      DB = "/index/replay/manifest";
    const QB = 65536;

    function oB(BB) {
      return {
        count: Math.ceil(BB.segmentDurationMs / BB.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * BB.bitrate / 8 * (BB.partDurationMs / 1e3)) + 32768
      }
    }
    const jB = 432e5
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);