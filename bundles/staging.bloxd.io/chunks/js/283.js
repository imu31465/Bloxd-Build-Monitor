export const id = 283;
export const ids = [283];
export const modules = {
  41438: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er
    });
    var Zr = Qr(5459);
    const Wr = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function ar(rr) {
      return new Promise(((Sr, Qr) => {
        rr.onsuccess = () => {
          Sr(rr.result)
        }, rr.onerror = () => {
          Qr(rr.error)
        }
      }))
    }

    function jr(rr) {
      return new Promise(((Sr, Qr) => {
        rr.oncomplete = () => {
          Sr()
        }, rr.onerror = () => {
          Qr(rr.error)
        }, rr.onabort = () => {
          var Sr;
          Qr(null !== (Sr = rr.error) && void 0 !== Sr ? Sr : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function Ir(rr) {
      return IDBKeyRange.bound([rr], [rr, []])
    }

    function fr(rr, Sr) {
      return IDBKeyRange.bound([rr, Sr], [rr, Sr, []])
    }
    class Er {
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
      putRecording(rr) {
        this.write(["recordings"], (Sr => {
          Sr.objectStore("recordings").put(rr)
        }))
      }
      putVideoSequence(rr, Sr, Qr) {
        this.write(["recordings", "videoSequences"], (Zr => {
          Zr.objectStore("recordings").put(rr), Zr.objectStore("videoSequences").put({
            recordingId: rr.recordingId,
            segmentId: Sr,
            sequence: Qr
          })
        }))
      }
      appendVideo(rr, Sr) {
        this.write(["videoHeaders", "videoChunks"], (Qr => {
          Qr.objectStore("videoHeaders").put(rr);
          const Zr = Qr.objectStore("videoChunks");
          for (const rr of Sr) Zr.put(rr)
        }))
      }
      putVideoProgress(rr, Sr) {
        this.write(["videoProgress", "videoChunks"], (Qr => {
          if (Qr.objectStore("videoProgress").put(rr), Sr > 0) {
            const {
              recordingId: Zr,
              segmentId: Wr
            } = rr;
            Qr.objectStore("videoChunks").delete(IDBKeyRange.bound([Zr, Wr, 0], [Zr, Wr, Sr], !1, !0))
          }
        }))
      }
      removeVideoChunks(rr, Sr) {
        this.write(["videoChunks"], (Qr => {
          Qr.objectStore("videoChunks").delete(fr(rr, Sr))
        }))
      }
      removeVideo(rr, Sr) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (Qr => {
          Qr.objectStore("videoHeaders").delete([rr, Sr]), Qr.objectStore("videoChunks").delete(fr(rr, Sr)), Qr.objectStore("videoSequences").delete([rr, Sr]), Qr.objectStore("videoProgress").delete([rr, Sr])
        }))
      }
      putTelemetry(rr) {
        this.write(["telemetry"], (Sr => {
          Sr.objectStore("telemetry").put(rr)
        }))
      }
      removeTelemetry(rr, Sr) {
        this.write(["telemetry"], (Qr => {
          Qr.objectStore("telemetry").delete([rr, Sr])
        }))
      }
      putDom(rr) {
        this.write(["dom"], (Sr => {
          Sr.objectStore("dom").put(rr)
        }))
      }
      queueDom(rr, Sr, Qr) {
        this.write(["recordings", "dom", "domTail"], (Zr => {
          Zr.objectStore("recordings").put(rr), Zr.objectStore("dom").put(Sr), Zr.objectStore("domTail").delete(fr(Sr.recordingId, Qr))
        }), (Zr => {
          console.warn(`Session replay couldn't journal page recording chunk ${Sr.sequence}; a closing tab may lose it.`, Zr), this.write(["recordings", "domTail"], (Zr => {
            Zr.objectStore("recordings").put(rr), Zr.objectStore("domTail").delete(fr(Sr.recordingId, Qr))
          }))
        }))
      }
      putDomTail(rr) {
        this.tailRecordings.add(rr.recordingId), this.write(["domTail"], (Sr => {
          Sr.objectStore("domTail").put(rr)
        }))
      }
      removeDomTail(rr, Sr) {
        this.write(["domTail"], (Qr => {
          Qr.objectStore("domTail").delete(fr(rr, Sr))
        }))
      }
      removeDom(rr, Sr) {
        this.write(["dom"], (Qr => {
          Qr.objectStore("dom").delete([rr, Sr])
        }))
      }
      async listRecordings() {
        const rr = await this.open();
        return await ar(rr.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(rr) {
        const Sr = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          Qr = Ir(rr.recordingId),
          Zr = rr => ar(Sr.objectStore(rr).getAll(Qr)),
          [Wr, jr, fr, Er, pr, xr, mr] = await Promise.all([Zr("videoHeaders"), Zr("videoChunks"), Zr("videoSequences"), Zr("videoProgress"), Zr("telemetry"), Zr("dom"), Zr("domTail")]);
        return {
          recording: rr,
          telemetry: pr,
          dom: xr,
          domTails: mr,
          video: Wr.map((rr => {
            var Sr, Qr, Zr;
            return {
              header: rr,
              sequence: null !== (Sr = null === (Qr = fr.find((Sr => Sr.segmentId === rr.segmentId))) || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== Sr ? Sr : null,
              progress: null !== (Zr = Er.find((Sr => Sr.segmentId === rr.segmentId))) && void 0 !== Zr ? Zr : null,
              chunks: jr.filter((Sr => Sr.segmentId === rr.segmentId))
            }
          }))
        }
      }
      async deleteRecording(rr) {
        const Sr = (await this.open()).transaction([...Wr], "readwrite");
        Sr.objectStore("recordings").delete(rr);
        for (const Qr of Wr.slice(1)) Sr.objectStore(Qr).delete(Ir(rr));
        await jr(Sr)
      }
      async forgetSent(rr, Sr) {
        const Qr = (await this.open()).transaction([...Wr], "readwrite"),
          {
            recordingId: Zr
          } = rr;
        Qr.objectStore("recordings").put(rr);
        for (const Wr of Sr.videoSegmentIds) Qr.objectStore("videoHeaders").delete([Zr, Wr]), Qr.objectStore("videoChunks").delete(fr(Zr, Wr)), Qr.objectStore("videoSequences").delete([Zr, Wr]), Qr.objectStore("videoProgress").delete([Zr, Wr]);
        for (const Wr of Sr.telemetrySequences) Qr.objectStore("telemetry").delete([Zr, Wr]);
        for (const Wr of Sr.domSequences) Qr.objectStore("dom").delete([Zr, Wr]);
        for (const Wr of Sr.domTailChunks) Qr.objectStore("domTail").delete(fr(Zr, Wr));
        await jr(Qr)
      }
      write(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rr => {
          this.fail(rr)
        };
        if (this.failed) return;
        const Zr = Zr => {
          try {
            var Wr;
            const ar = Zr.transaction(rr, "readwrite");
            Sr(ar), null === (Wr = ar.commit) || void 0 === Wr || Wr.call(ar), jr(ar).catch(Qr)
          } catch (ar) {
            Qr(ar)
          }
        };
        null === this.db ? this.open().then(Zr, (rr => {
          this.fail(rr)
        })) : Zr(this.db)
      }
      fail(rr) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", rr), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const rr = rr => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", rr)
        };
        try {
          const Sr = this.db.transaction(["domTail"], "readwrite");
          for (const rr of this.tailRecordings) Sr.objectStore("domTail").delete(Ir(rr));
          jr(Sr).catch(rr)
        } catch (Sr) {
          rr(Sr)
        }
      }
      open() {
        return this.opening ??= new Promise(((rr, Sr) => {
          const Qr = indexedDB.open(Zr.j, 4);
          Qr.onupgradeneeded = rr => {
            const Sr = Qr.result;
            rr.oldVersion < 1 && (Sr.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), Sr.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), Sr.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), Sr.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), Sr.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), rr.oldVersion < 2 && Sr.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), rr.oldVersion < 3 && Sr.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), Sr.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let Wr = !1;
          Qr.onblocked = () => {
            Wr = !0, Sr(new Error("An older tab holds the upload journal at an earlier version"))
          }, Qr.onsuccess = () => {
            Wr ? Qr.result.close() : (this.db = Qr.result, this.db.onversionchange = () => {
              var rr;
              this.dropTails(), null === (rr = this.db) || void 0 === rr || rr.close(), this.db = null, this.opening = null
            }, rr(Qr.result))
          }, Qr.onerror = () => {
            Sr(Qr.error)
          }
        })), this.opening
      }
    }
  },
  41392: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      e: () => ar,
      f: () => Ir
    });
    var Zr = Qr(41387);
    const Wr = new TextEncoder;

    function ar(rr, Sr) {
      return new Blob([Wr.encode(`${JSON.stringify(rr)}\n`), Sr], {
        type: "text/plain"
      })
    }
    class jr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = rr, this.relay = Sr, this.nowMs = Qr, this.refused = !1, this.skipUntilMs = 0
      }
      async send(rr, Sr, Qr, Wr, jr) {
        if (this.goesDirect(Sr, Qr)) return null;
        const Ir = ar({
            token: this.token,
            contentType: Qr,
            target: rr
          }, Sr),
          fr = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: Ir,
            signal: Wr
          };
        let Er;
        try {
          const rr = Sr.byteLength <= Zr.d ? await Zr.g.fetch(this.relay.url, fr, Ir.size, Qr) : await fetch(this.relay.url, fr);
          if (!rr.ok) throw new Error(`HTTP ${rr.status}`);
          if (Er = await rr.json(), "refused" !== Er.outcome && ("forwarded" !== Er.outcome || !Number.isInteger(Er.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(Er)}`)
        } catch (pr) {
          if (!0 === (null === jr || void 0 === jr ? void 0 : jr.aborted)) throw pr;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", pr), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === Er.outcome ? (console.info(`Session replay's part joiner refused to relay (${Er.reason}); uploading straight to storage.`), this.refused = !0, null) : Er.status
      }
      beacon(rr, Sr, Qr, Zr) {
        if (this.goesDirect(Sr, Qr)) return null;
        const Wr = ar({
          token: this.token,
          contentType: Qr,
          target: rr
        }, Sr);
        return Zr.sendUploadBeacon(this.relay.url, Wr, Wr.size)
      }
      goesDirect(rr, Sr) {
        return this.refused || this.nowMs() < this.skipUntilMs || rr.byteLength > this.relay.maxBytes || "video/mp4" === Sr
      }
    }

    function Ir(rr) {
      return void 0 === (null === rr || void 0 === rr ? void 0 : rr.relay) ? null : new jr(rr.token, rr.relay)
    }
    class fr {
      constructor() {
        this.relays = new Map
      }
      for (rr) {
        let Sr = this.relays.get(rr.recordingId);
        return void 0 === Sr && (Sr = Ir(rr.partJoiner), this.relays.set(rr.recordingId, Sr)), Sr
      }
    }
  },
  41420: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ur,
      d: () => Nr,
      g: () => fr
    });
    var Zr = Qr(41387),
      Wr = Qr(1267),
      ar = Qr(41398);
    const jr = 1024;

    function Ir(rr) {
      return 6e4 + Math.ceil(rr / 16384 * 1e3)
    }

    function fr(rr, Sr, Qr) {
      const Wr = new FormData;
      let ar = Sr.byteLength + jr;
      for (const [jr, Ir] of Object.entries(rr.fields)) Wr.append(jr, Ir), ar += (0, Zr.i)(jr) + (0, Zr.i)(Ir);
      return Wr.append("file", new Blob([Sr], {
        type: Qr
      })), {
        form: Wr,
        byteLength: ar
      }
    }

    function Er(rr, Sr, Qr) {
      return new ar.d(`Segment ${rr} failed with ${Sr}${null===Qr?"":` (${Qr})`}`, Sr, Qr)
    }

    function pr(rr) {
      if (rr < 200 || rr > 299) throw Er("POST", rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function xr(rr, Sr) {
      if ((rr < 200 || rr > 299) && (!Sr || 412 !== rr)) throw Er("PUT", rr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function mr(rr) {
      var Sr, Qr;
      if (rr.ok) return null;
      let Zr;
      try {
        Zr = await rr.text()
      } catch (Wr) {
        return console.warn("Session replay couldn't read storage's error answer", Wr), null
      }
      return null !== (Sr = null === (Qr = /<Code>([^<]+)<\/Code>/.exec(Zr)) || void 0 === Qr ? void 0 : Qr[1]) && void 0 !== Sr ? Sr : null
    }
    class Nr {
      constructor(rr) {
        var Sr;
        let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = rr, this.deadline = void 0, this.relay = void 0, this.deadline = Qr.deadline, this.relay = null !== (Sr = Qr.relay) && void 0 !== Sr ? Sr : null
      }
      requestPutUrl(rr) {
        return this.presign(rr)
      }
      requestPostTargets(rr) {
        return this.presign(rr)
      }
      async presign(rr) {
        const Sr = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(rr),
          signal: this.signal(6e4)
        });
        if (!Sr.ok) throw new ar.d(`Segment presign failed with ${Sr.status}`, Sr.status);
        return await Sr.json()
      }
      async put(rr, Sr, Qr, Wr) {
        const ar = await this.sendThroughRelay({
          method: "PUT",
          url: rr,
          ifNoneMatch: Wr
        }, Sr, Qr);
        if (null !== ar) return void xr(ar, Wr);
        const jr = {
            method: "PUT",
            headers: {
              "Content-Type": Qr,
              ...Wr ? {
                "If-None-Match": "*"
              } : {}
            },
            body: Sr,
            signal: this.signal(Ir(Sr.byteLength))
          },
          fr = Sr.byteLength <= Zr.d ? await Zr.g.fetch(rr, jr, Sr.byteLength, Qr) : await fetch(rr, jr);
        xr(fr.status, Wr, await mr(fr))
      }
      async post(rr, Sr, Qr) {
        const Wr = await this.sendThroughRelay({
          method: "POST",
          url: rr.url,
          fields: rr.fields
        }, Sr, Qr);
        if (null !== Wr) return void pr(Wr);
        const {
          form: ar,
          byteLength: jr
        } = fr(rr, Sr, Qr), Er = {
          method: "POST",
          body: ar,
          signal: this.signal(Ir(jr))
        }, xr = jr <= Zr.d ? await Zr.g.fetch(rr.url, Er, jr, Qr) : await fetch(rr.url, Er);
        pr(xr.status, await mr(xr))
      }
      async sendThroughRelay(rr, Sr, Qr) {
        return null === this.relay ? null : await this.relay.send(rr, Sr, Qr, this.signal(Ir(Sr.byteLength)), this.deadline)
      }
      signal(rr) {
        const Sr = (0, Wr.o)(rr);
        return void 0 === this.deadline ? Sr : (0, Wr.i)([this.deadline, Sr])
      }
    }
    class Ur {
      async requestPutUrl(rr) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(rr) {
        return {
          targets: Array.from({
            length: rr.parts.count
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
  41371: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(37500),
      Wr = Qr.n(Zr);

    function ar() {
      return Wr()('(()=>{var rr={13:(rr,Sr,Qr)=>{function Zr(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function Wr(rr){return rr instanceof Uint8Array&&(!Zr()||!Buffer.isBuffer(rr))}function ar(rr){return rr instanceof ArrayBuffer}function jr(rr){return!!Zr()&&Buffer.isBuffer(rr)}var Ir=Qr(16).c,fr=Qr(18).b,Er="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";Sr.e=function(rr){if(!Wr(rr)&&!ar(rr)&&!jr(rr))throw new TypeError(Er);var Sr=!1,Qr=!1;Wr(rr)?Sr=!0:ar(rr)&&(Qr=!0,rr=new Uint8Array(rr));var Zr,Ir,pr,xr=new fr(rr),mr=xr.maxCompressedLength();if(Sr?(Zr=new Uint8Array(mr),pr=xr.compressToBuffer(Zr)):Qr?(Zr=new ArrayBuffer(mr),Ir=new Uint8Array(Zr),pr=xr.compressToBuffer(Ir)):(Zr=Buffer.alloc(mr),pr=xr.compressToBuffer(Zr)),!Zr.slice){var Nr=new Uint8Array(Array.prototype.slice.call(Zr,0,pr));if(Sr)return Nr;if(Qr)return Nr.buffer;throw new Error("Not implemented")}return Zr.slice(0,pr)}},18:(rr,Sr)=>{var Qr=new Array(15);function Zr(rr,Sr){return 506832829*rr>>>Sr}function Wr(rr,Sr){return rr[Sr]+(rr[Sr+1]<<8)+(rr[Sr+2]<<16)+(rr[Sr+3]<<24)}function ar(rr,Sr,Qr){return rr[Sr]===rr[Qr]&&rr[Sr+1]===rr[Qr+1]&&rr[Sr+2]===rr[Qr+2]&&rr[Sr+3]===rr[Qr+3]}function jr(rr,Sr,Qr,Zr,Wr){return Qr<=60?(Zr[Wr]=Qr-1<<2,Wr+=1):Qr<256?(Zr[Wr]=240,Zr[Wr+1]=Qr-1,Wr+=2):(Zr[Wr]=244,Zr[Wr+1]=Qr-1&255,Zr[Wr+2]=Qr-1>>>8,Wr+=3),function(rr,Sr,Qr,Zr,Wr){var ar;for(ar=0;ar<Wr;ar++)Qr[Zr+ar]=rr[Sr+ar]}(rr,Sr,Zr,Wr,Qr),Wr+Qr}function Ir(rr,Sr,Qr,Zr){return Zr<12&&Qr<2048?(rr[Sr]=1+(Zr-4<<2)+(Qr>>>8<<5),rr[Sr+1]=255&Qr,Sr+2):(rr[Sr]=2+(Zr-1<<2),rr[Sr+1]=255&Qr,rr[Sr+2]=Qr>>>8,Sr+3)}function fr(rr,Sr,Qr,Zr){for(;Zr>=68;)Sr=Ir(rr,Sr,Qr,64),Zr-=64;return Zr>64&&(Sr=Ir(rr,Sr,Qr,60),Zr-=60),Ir(rr,Sr,Qr,Zr)}function Er(rr,Sr,Ir,Er,pr){for(var xr=1;1<<xr<=Ir&&xr<=14;)xr+=1;var mr=32-(xr-=1);"undefined"===typeof Qr[xr]&&(Qr[xr]=new Uint16Array(1<<xr));var Nr,Ur=Qr[xr];for(Nr=0;Nr<Ur.length;Nr++)Ur[Nr]=0;var tr,hr,zr,Yr,nr,er,Kr,yr,Br,Tr,vr=Sr+Ir,Or=Sr,Lr=Sr,lr=!0;if(Ir>=15)for(tr=vr-15,zr=Zr(Wr(rr,Sr+=1),mr);lr;){er=32,Yr=Sr;do{if(hr=zr,Kr=er>>>5,er+=1,Yr=(Sr=Yr)+Kr,Sr>tr){lr=!1;break}zr=Zr(Wr(rr,Yr),mr),nr=Or+Ur[hr],Ur[hr]=Sr-Or}while(!ar(rr,Sr,nr));if(!lr)break;pr=jr(rr,Lr,Sr-Lr,Er,pr);do{for(yr=Sr,Br=4;Sr+Br<vr&&rr[Sr+Br]===rr[nr+Br];)Br+=1;if(Sr+=Br,pr=fr(Er,pr,yr-nr,Br),Lr=Sr,Sr>=tr){lr=!1;break}Ur[Zr(Wr(rr,Sr-1),mr)]=Sr-1-Or,nr=Or+Ur[Tr=Zr(Wr(rr,Sr),mr)],Ur[Tr]=Sr-Or}while(ar(rr,Sr,nr));if(!lr)break;zr=Zr(Wr(rr,Sr+=1),mr)}return Lr<vr&&(pr=jr(rr,Lr,vr-Lr,Er,pr)),pr}function pr(rr){this.array=rr}pr.prototype.maxCompressedLength=function(){var rr=this.array.length;return 32+rr+Math.floor(rr/6)},pr.prototype.compressToBuffer=function(rr){var Sr,Qr=this.array,Zr=Qr.length,Wr=0,ar=0;for(ar=function(rr,Sr,Qr){do{Sr[Qr]=127&rr,(rr>>>=7)>0&&(Sr[Qr]+=128),Qr+=1}while(rr>0);return Qr}(Zr,rr,ar);Wr<Zr;)ar=Er(Qr,Wr,Sr=Math.min(Zr-Wr,65536),rr,ar),Wr+=Sr;return ar},Sr.b=pr},16:(rr,Sr)=>{var Qr=[0,255,65535,16777215,4294967295];function Zr(rr,Sr,Qr,Zr,Wr){var ar;for(ar=0;ar<Wr;ar++)Qr[Zr+ar]=rr[Sr+ar]}function Wr(rr,Sr,Qr,Zr){var Wr;for(Wr=0;Wr<Zr;Wr++)rr[Sr+Wr]=rr[Sr-Qr+Wr]}function ar(rr){this.array=rr,this.pos=0}ar.prototype.readUncompressedLength=function(){for(var rr,Sr,Qr=0,Zr=0;Zr<32&&this.pos<this.array.length;){if(rr=this.array[this.pos],this.pos+=1,(Sr=127&rr)<<Zr>>>Zr!==Sr)return-1;if(Qr|=Sr<<Zr,rr<128)return Qr;Zr+=7}return-1},ar.prototype.uncompressToBuffer=function(rr){for(var Sr,ar,jr,Ir,fr=this.array,Er=fr.length,pr=this.pos,xr=0;pr<fr.length;)if(Sr=fr[pr],pr+=1,0===(3&Sr)){if((ar=1+(Sr>>>2))>60){if(pr+3>=Er)return!1;jr=ar-60,ar=1+((ar=fr[pr]+(fr[pr+1]<<8)+(fr[pr+2]<<16)+(fr[pr+3]<<24))&Qr[jr]),pr+=jr}if(pr+ar>Er)return!1;Zr(fr,pr,rr,xr,ar),pr+=ar,xr+=ar}else{switch(3&Sr){case 1:ar=4+(Sr>>>2&7),Ir=fr[pr]+(Sr>>>5<<8),pr+=1;break;case 2:if(pr+1>=Er)return!1;ar=1+(Sr>>>2),Ir=fr[pr]+(fr[pr+1]<<8),pr+=2;break;case 3:if(pr+3>=Er)return!1;ar=1+(Sr>>>2),Ir=fr[pr]+(fr[pr+1]<<8)+(fr[pr+2]<<16)+(fr[pr+3]<<24),pr+=4}if(0===Ir||Ir>xr)return!1;Wr(rr,xr,Ir,ar),xr+=ar}return!0},Sr.c=ar}},Sr={};var Qr=function Qr(Zr){var Wr=Sr[Zr];if(void 0!==Wr)return Wr.exports;var ar=Sr[Zr]={exports:{}};return rr[Zr](ar,ar.exports,Qr),ar.exports}(13);function Zr(rr){const Sr=(new TextEncoder).encode(rr);return{bytes:(0,Qr.e)(Sr),inflatedBytes:Sr.byteLength}}const Wr=self;self.onmessage=rr=>{const{id:Sr,text:Qr}=rr.data,ar={id:Sr,...Zr(Qr)};Wr.postMessage(ar,[ar.bytes.buffer])}})();', "Worker", void 0, Qr.p + "replayDomChunk.worker.6aa18e5d.worker.js")
    }
    class jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = rr, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(rr) {
        return new Promise(((Sr, Qr) => {
          var Zr;
          const Wr = null !== (Zr = this.worker) && void 0 !== Zr ? Zr : this.start();
          if (null === Wr) return void Qr(this.failure);
          const ar = this.nextId++;
          this.waiting.set(ar, {
            resolve: Sr,
            reject: Qr
          });
          const jr = {
            id: ar,
            text: rr
          };
          Wr.postMessage(jr), this.watchdog ??= this.startWatchdog()
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
          this.worker = new ar
        } catch (rr) {
          return this.broke(`didn't start: ${String(rr)}`), null
        }
        return this.worker.onmessage = rr => {
          const {
            id: Sr,
            bytes: Qr,
            inflatedBytes: Zr
          } = rr.data, Wr = this.waiting.get(Sr);
          this.waiting.delete(Sr), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === Wr || void 0 === Wr || Wr.resolve({
            bytes: Qr,
            inflatedBytes: Zr
          })
        }, this.worker.onerror = rr => {
          this.broke(rr.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const rr = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - rr > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(rr) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${rr}`), this.fail(new Error(`page recording worker failed: ${rr}`))
      }
      fail(rr) {
        var Sr;
        this.failure ??= rr, this.stopWatchdog(), null === (Sr = this.worker) || void 0 === Sr || Sr.terminate(), this.worker = null;
        for (const {
            reject: Qr
          }
          of this.waiting.values()) Qr(rr);
        this.waiting.clear()
      }
    }
  },
  41355: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(41361);

    function Wr(rr) {
      const Sr = (new TextEncoder).encode(rr);
      return {
        bytes: (0, Zr.d)(Sr),
        inflatedBytes: Sr.byteLength
      }
    }
  },
  41403: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    const Zr = 20;
    let Wr = Date.now() - performance.now();

    function ar() {
      const rr = performance.now(),
        Sr = Date.now();
      return Math.abs(Sr - (rr + Wr)) > Zr && (Wr = Sr - rr), rr + Wr
    }
  },
  41379: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(41385),
      Wr = Qr(1262);

    function ar() {
      return {
        segmentUploadUrl: `${Wr.clientSideServerUrls.indexUrl}${Zr.i}`,
        manifestUrl: `${Wr.clientSideServerUrls.indexUrl}${Zr.f}`
      }
    }
  },
  41387: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      g: () => ar,
      i: () => Wr
    });
    const Zr = 32768;

    function Wr(rr) {
      return (new TextEncoder).encode(rr).byteLength
    }
    const ar = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(rr, Sr, Qr, Zr) {
        if (this.inFlightBytes + Qr > 49152) return await fetch(rr, Sr);
        this.inFlightBytes += Qr, this.countLabel(Zr, 1);
        const Wr = () => {
          this.inFlightBytes -= Qr, this.countLabel(Zr, -1)
        };
        let ar;
        try {
          ar = await fetch(rr, {
            ...Sr,
            keepalive: !0
          })
        } catch (Ir) {
          var jr;
          if (Wr(), null !== (jr = Sr.signal) && void 0 !== jr && jr.aborted) throw Ir;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", Ir), await fetch(rr, Sr)
        }
        return Wr(), ar
      }
      isInFlight(rr) {
        var Sr;
        return (null !== (Sr = this.inFlightLabels.get(rr)) && void 0 !== Sr ? Sr : 0) > 0
      }
      sendBeacon(rr, Sr) {
        const Qr = Wr(Sr);
        return !(this.inFlightBytes + Qr > 57344) && this.beaconSent(navigator.sendBeacon(rr, new Blob([Sr], {
          type: "text/plain"
        })), Qr)
      }
      sendUploadBeacon(rr, Sr, Qr) {
        return !(this.inFlightBytes + Qr > 40960) && this.beaconSent(navigator.sendBeacon(rr, Sr), Qr)
      }
      countLabel(rr, Sr) {
        var Qr;
        void 0 !== rr && this.inFlightLabels.set(rr, (null !== (Qr = this.inFlightLabels.get(rr)) && void 0 !== Qr ? Qr : 0) + Sr)
      }
      beaconSent(rr, Sr) {
        return rr && (this.inFlightBytes += Sr, setTimeout((() => {
          this.inFlightBytes -= Sr
        }), 1e4)), rr
      }
    }
  },
  41405: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr
    });
    var Zr = Qr(41387),
      Wr = Qr(1267);
    const ar = 6e4;
    async function jr(rr, Sr) {
      const Qr = JSON.stringify(Sr);
      try {
        const Sr = await Zr.g.fetch(rr, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: Qr,
          signal: (0, Wr.o)(ar)
        }, (0, Zr.i)(Qr));
        return await async function(rr) {
          if (!rr.ok) return 413 === rr.status ? "refused" : "retryLater";
          const Sr = await rr.json();
          return "rejected" in Sr ? (console.warn(`Session replay manifest refused: ${Sr.reason}`), Sr.retryable ? "retryLater" : "refused") : "uploaded"
        }(Sr)
      } catch (jr) {
        return console.warn("Session replay manifest upload failed.", jr), "retryLater"
      }
    }
  },
  41413: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      c: () => fr
    });
    var Zr = Qr(41387);
    const Wr = 16384,
      ar = 100,
      jr = (0, Zr.i)(',"domSegments":[]');

    function Ir(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr;
      const {
        domSegments: Ir,
        ...fr
      } = rr.manifest, Er = () => ({
        ...rr,
        manifest: {
          ...fr,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), pr = (0, Zr.i)(JSON.stringify(Er())), xr = [];
      let mr = {
          request: Er(),
          items: []
        },
        Nr = pr;
      const Ur = (rr, Sr) => {
          var Qr;
          return "domSegments" === Sr ? null !== (Qr = rr.manifest.domSegments) && void 0 !== Qr ? Qr : [] : "creatorGrants" === Sr ? rr.creatorGrants : rr.manifest[Sr]
        },
        tr = (rr, Sr, Qr) => Qr + (rr.length > 0 ? 1 : "domSegments" === Sr.list ? jr : 0);
      for (const Wr of Sr) {
        const rr = (0, Zr.i)(JSON.stringify(Wr.value));
        let Sr = Ur(mr.request, Wr.list);
        mr.items.length > 0 && (Nr + tr(Sr, Wr, rr) > Qr || Sr.length >= ar) && (xr.push(mr), mr = {
          request: Er(),
          items: []
        }, Nr = pr, Sr = Ur(mr.request, Wr.list)), Nr += tr(Sr, Wr, rr), "domSegments" === Wr.list && (mr.request.manifest.domSegments = Sr), Sr.push(Wr.value), mr.items.push(Wr)
      }
      return xr.push(mr), xr
    }

    function fr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr;
      return Ir(rr, function(rr) {
        var Sr;
        return [...rr.creatorGrants.map((rr => ({
          list: "creatorGrants",
          value: rr
        }))), ...rr.manifest.games.map((rr => ({
          list: "games",
          value: rr
        }))), ...rr.manifest.videoSegments.map((rr => ({
          list: "videoSegments",
          value: rr
        }))), ...rr.manifest.telemetrySegments.map((rr => ({
          list: "telemetrySegments",
          value: rr
        }))), ...(null !== (Sr = rr.manifest.domSegments) && void 0 !== Sr ? Sr : []).map((rr => ({
          list: "domSegments",
          value: rr
        })))]
      }(rr), Sr).map((rr => {
        let {
          request: Sr
        } = rr;
        return Sr
      }))
    }
  },
  41398: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr extends Error {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(rr), this.status = Sr, this.storageCode = Qr
      }
    }
  },
  41385: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      f: () => Wr,
      h: () => ar,
      i: () => Zr,
      j: () => jr
    });
    const Zr = "/index/replay/segment-upload-url",
      Wr = "/index/replay/manifest";
    const ar = 65536;

    function jr(rr) {
      return {
        count: Math.ceil(rr.segmentDurationMs / rr.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * rr.bitrate / 8 * (rr.partDurationMs / 1e3)) + 32768
      }
    }
    const Ir = 432e5
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);