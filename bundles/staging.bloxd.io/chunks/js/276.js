export const id = 276;
export const ids = [276];
export const modules = {
  40631: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je
    });
    var ye = He(5106);
    const be = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function Me(ee) {
      return new Promise(((ie, He) => {
        ee.onsuccess = () => {
          ie(ee.result)
        }, ee.onerror = () => {
          He(ee.error)
        }
      }))
    }

    function Ke(ee) {
      return new Promise(((ie, He) => {
        ee.oncomplete = () => {
          ie()
        }, ee.onerror = () => {
          He(ee.error)
        }, ee.onabort = () => {
          var ie;
          He(null !== (ie = ee.error) && void 0 !== ie ? ie : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function Ue(ee) {
      return IDBKeyRange.bound([ee], [ee, []])
    }

    function Fe(ee, ie) {
      return IDBKeyRange.bound([ee, ie], [ee, ie, []])
    }
    class Je {
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
      putRecording(ee) {
        this.write(["recordings"], (ie => {
          ie.objectStore("recordings").put(ee)
        }))
      }
      putVideoSequence(ee, ie, He) {
        this.write(["recordings", "videoSequences"], (ye => {
          ye.objectStore("recordings").put(ee), ye.objectStore("videoSequences").put({
            recordingId: ee.recordingId,
            segmentId: ie,
            sequence: He
          })
        }))
      }
      appendVideo(ee, ie) {
        this.write(["videoHeaders", "videoChunks"], (He => {
          He.objectStore("videoHeaders").put(ee);
          const ye = He.objectStore("videoChunks");
          for (const ee of ie) ye.put(ee)
        }))
      }
      putVideoProgress(ee, ie) {
        this.write(["videoProgress", "videoChunks"], (He => {
          if (He.objectStore("videoProgress").put(ee), ie > 0) {
            const {
              recordingId: ye,
              segmentId: be
            } = ee;
            He.objectStore("videoChunks").delete(IDBKeyRange.bound([ye, be, 0], [ye, be, ie], !1, !0))
          }
        }))
      }
      removeVideoChunks(ee, ie) {
        this.write(["videoChunks"], (He => {
          He.objectStore("videoChunks").delete(Fe(ee, ie))
        }))
      }
      removeVideo(ee, ie) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (He => {
          He.objectStore("videoHeaders").delete([ee, ie]), He.objectStore("videoChunks").delete(Fe(ee, ie)), He.objectStore("videoSequences").delete([ee, ie]), He.objectStore("videoProgress").delete([ee, ie])
        }))
      }
      putTelemetry(ee) {
        this.write(["telemetry"], (ie => {
          ie.objectStore("telemetry").put(ee)
        }))
      }
      removeTelemetry(ee, ie) {
        this.write(["telemetry"], (He => {
          He.objectStore("telemetry").delete([ee, ie])
        }))
      }
      putDom(ee) {
        this.write(["dom"], (ie => {
          ie.objectStore("dom").put(ee)
        }))
      }
      queueDom(ee, ie, He) {
        this.write(["recordings", "dom", "domTail"], (ye => {
          ye.objectStore("recordings").put(ee), ye.objectStore("dom").put(ie), ye.objectStore("domTail").delete(Fe(ie.recordingId, He))
        }), (ye => {
          console.warn(`Session replay couldn't journal page recording chunk ${ie.sequence}; a closing tab may lose it.`, ye), this.write(["recordings", "domTail"], (ye => {
            ye.objectStore("recordings").put(ee), ye.objectStore("domTail").delete(Fe(ie.recordingId, He))
          }))
        }))
      }
      putDomTail(ee) {
        this.tailRecordings.add(ee.recordingId), this.write(["domTail"], (ie => {
          ie.objectStore("domTail").put(ee)
        }))
      }
      removeDomTail(ee, ie) {
        this.write(["domTail"], (He => {
          He.objectStore("domTail").delete(Fe(ee, ie))
        }))
      }
      removeDom(ee, ie) {
        this.write(["dom"], (He => {
          He.objectStore("dom").delete([ee, ie])
        }))
      }
      async listRecordings() {
        const ee = await this.open();
        return await Me(ee.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(ee) {
        const ie = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          He = Ue(ee.recordingId),
          ye = ee => Me(ie.objectStore(ee).getAll(He)),
          [be, Ke, Fe, Je, oe, Re, ke] = await Promise.all([ye("videoHeaders"), ye("videoChunks"), ye("videoSequences"), ye("videoProgress"), ye("telemetry"), ye("dom"), ye("domTail")]);
        return {
          recording: ee,
          telemetry: oe,
          dom: Re,
          domTails: ke,
          video: be.map((ee => {
            var ie, He, ye;
            return {
              header: ee,
              sequence: null !== (ie = null === (He = Fe.find((ie => ie.segmentId === ee.segmentId))) || void 0 === He ? void 0 : He.sequence) && void 0 !== ie ? ie : null,
              progress: null !== (ye = Je.find((ie => ie.segmentId === ee.segmentId))) && void 0 !== ye ? ye : null,
              chunks: Ke.filter((ie => ie.segmentId === ee.segmentId))
            }
          }))
        }
      }
      async deleteRecording(ee) {
        const ie = (await this.open()).transaction([...be], "readwrite");
        ie.objectStore("recordings").delete(ee);
        for (const He of be.slice(1)) ie.objectStore(He).delete(Ue(ee));
        await Ke(ie)
      }
      async forgetSent(ee, ie) {
        const He = (await this.open()).transaction([...be], "readwrite"),
          {
            recordingId: ye
          } = ee;
        He.objectStore("recordings").put(ee);
        for (const be of ie.videoSegmentIds) He.objectStore("videoHeaders").delete([ye, be]), He.objectStore("videoChunks").delete(Fe(ye, be)), He.objectStore("videoSequences").delete([ye, be]), He.objectStore("videoProgress").delete([ye, be]);
        for (const be of ie.telemetrySequences) He.objectStore("telemetry").delete([ye, be]);
        for (const be of ie.domSequences) He.objectStore("dom").delete([ye, be]);
        for (const be of ie.domTailChunks) He.objectStore("domTail").delete(Fe(ye, be));
        await Ke(He)
      }
      write(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee => {
          this.fail(ee)
        };
        if (this.failed) return;
        const ye = ye => {
          try {
            var be;
            const Me = ye.transaction(ee, "readwrite");
            ie(Me), null === (be = Me.commit) || void 0 === be || be.call(Me), Ke(Me).catch(He)
          } catch (Me) {
            He(Me)
          }
        };
        null === this.db ? this.open().then(ye, (ee => {
          this.fail(ee)
        })) : ye(this.db)
      }
      fail(ee) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", ee), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const ee = ee => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", ee)
        };
        try {
          const ie = this.db.transaction(["domTail"], "readwrite");
          for (const ee of this.tailRecordings) ie.objectStore("domTail").delete(Ue(ee));
          Ke(ie).catch(ee)
        } catch (ie) {
          ee(ie)
        }
      }
      open() {
        return this.opening ??= new Promise(((ee, ie) => {
          const He = indexedDB.open(ye.j, 4);
          He.onupgradeneeded = ee => {
            const ie = He.result;
            ee.oldVersion < 1 && (ie.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), ie.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), ie.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), ie.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), ie.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), ee.oldVersion < 2 && ie.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), ee.oldVersion < 3 && ie.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), ie.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let be = !1;
          He.onblocked = () => {
            be = !0, ie(new Error("An older tab holds the upload journal at an earlier version"))
          }, He.onsuccess = () => {
            be ? He.result.close() : (this.db = He.result, this.db.onversionchange = () => {
              var ee;
              this.dropTails(), null === (ee = this.db) || void 0 === ee || ee.close(), this.db = null, this.opening = null
            }, ee(He.result))
          }, He.onerror = () => {
            ie(He.error)
          }
        })), this.opening
      }
    }
  },
  40592: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe,
      g: () => Me,
      k: () => Ue
    });
    var ye = He(40584);
    const be = new TextEncoder;

    function Me(ee, ie) {
      return new Blob([be.encode(`${JSON.stringify(ee)}\n`), ie], {
        type: "text/plain"
      })
    }
    class Ke {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = ee, this.relay = ie, this.nowMs = He, this.refused = !1, this.skipUntilMs = 0
      }
      async send(ee, ie, He, be, Ke) {
        if (this.goesDirect(ie, He)) return null;
        const Ue = Me({
            token: this.token,
            contentType: He,
            target: ee
          }, ie),
          Fe = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: Ue,
            signal: be
          };
        let Je;
        try {
          const ee = ie.byteLength <= ye.d ? await ye.g.fetch(this.relay.url, Fe, Ue.size, He) : await fetch(this.relay.url, Fe);
          if (!ee.ok) throw new Error(`HTTP ${ee.status}`);
          if (Je = await ee.json(), "refused" !== Je.outcome && ("forwarded" !== Je.outcome || !Number.isInteger(Je.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(Je)}`)
        } catch (oe) {
          if (!0 === (null === Ke || void 0 === Ke ? void 0 : Ke.aborted)) throw oe;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", oe), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === Je.outcome ? (console.info(`Session replay's part joiner refused to relay (${Je.reason}); uploading straight to storage.`), this.refused = !0, null) : Je.status
      }
      beacon(ee, ie, He, ye) {
        if (this.goesDirect(ie, He)) return null;
        const be = Me({
          token: this.token,
          contentType: He,
          target: ee
        }, ie);
        return ye.sendUploadBeacon(this.relay.url, be, be.size)
      }
      goesDirect(ee, ie) {
        return this.refused || this.nowMs() < this.skipUntilMs || ee.byteLength > this.relay.maxBytes || "video/mp4" === ie
      }
    }

    function Ue(ee) {
      return void 0 === (null === ee || void 0 === ee ? void 0 : ee.relay) ? null : new Ke(ee.token, ee.relay)
    }
    class Fe {
      constructor() {
        this.relays = new Map
      }
      for (ee) {
        let ie = this.relays.get(ee.recordingId);
        return void 0 === ie && (ie = Ue(ee.partJoiner), this.relays.set(ee.recordingId, ie)), ie
      }
    }
  },
  40617: (ee, ie, He) => {
    He.d(ie, {
      e: () => fe,
      i: () => qe,
      j: () => Fe
    });
    var ye = He(40584),
      be = He(1155),
      Me = He(40594);
    const Ke = 1024;

    function Ue(ee) {
      return 6e4 + Math.ceil(ee / 16384 * 1e3)
    }

    function Fe(ee, ie, He) {
      const be = new FormData;
      let Me = ie.byteLength + Ke;
      for (const [Ke, Ue] of Object.entries(ee.fields)) be.append(Ke, Ue), Me += (0, ye.i)(Ke) + (0, ye.i)(Ue);
      return be.append("file", new Blob([ie], {
        type: He
      })), {
        form: be,
        byteLength: Me
      }
    }

    function Je(ee, ie, He) {
      return new Me.b(`Segment ${ee} failed with ${ie}${null===He?"":` (${He})`}`, ie, He)
    }

    function oe(ee) {
      if (ee < 200 || ee > 299) throw Je("POST", ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Re(ee, ie) {
      if ((ee < 200 || ee > 299) && (!ie || 412 !== ee)) throw Je("PUT", ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function ke(ee) {
      var ie, He;
      if (ee.ok) return null;
      let ye;
      try {
        ye = await ee.text()
      } catch (be) {
        return console.warn("Session replay couldn't read storage's error answer", be), null
      }
      return null !== (ie = null === (He = /<Code>([^<]+)<\/Code>/.exec(ye)) || void 0 === He ? void 0 : He[1]) && void 0 !== ie ? ie : null
    }
    class qe {
      constructor(ee) {
        var ie;
        let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = ee, this.deadline = void 0, this.relay = void 0, this.deadline = He.deadline, this.relay = null !== (ie = He.relay) && void 0 !== ie ? ie : null
      }
      requestPutUrl(ee) {
        return this.presign(ee)
      }
      requestPostTargets(ee) {
        return this.presign(ee)
      }
      async presign(ee) {
        const ie = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(ee),
          signal: this.signal(6e4)
        });
        if (!ie.ok) throw new Me.b(`Segment presign failed with ${ie.status}`, ie.status);
        return await ie.json()
      }
      async put(ee, ie, He, be) {
        const Me = await this.sendThroughRelay({
          method: "PUT",
          url: ee,
          ifNoneMatch: be
        }, ie, He);
        if (null !== Me) return void Re(Me, be);
        const Ke = {
            method: "PUT",
            headers: {
              "Content-Type": He,
              ...be ? {
                "If-None-Match": "*"
              } : {}
            },
            body: ie,
            signal: this.signal(Ue(ie.byteLength))
          },
          Fe = ie.byteLength <= ye.d ? await ye.g.fetch(ee, Ke, ie.byteLength, He) : await fetch(ee, Ke);
        Re(Fe.status, be, await ke(Fe))
      }
      async post(ee, ie, He) {
        const be = await this.sendThroughRelay({
          method: "POST",
          url: ee.url,
          fields: ee.fields
        }, ie, He);
        if (null !== be) return void oe(be);
        const {
          form: Me,
          byteLength: Ke
        } = Fe(ee, ie, He), Je = {
          method: "POST",
          body: Me,
          signal: this.signal(Ue(Ke))
        }, Re = Ke <= ye.d ? await ye.g.fetch(ee.url, Je, Ke, He) : await fetch(ee.url, Je);
        oe(Re.status, await ke(Re))
      }
      async sendThroughRelay(ee, ie, He) {
        return null === this.relay ? null : await this.relay.send(ee, ie, He, this.signal(Ue(ie.byteLength)), this.deadline)
      }
      signal(ee) {
        const ie = (0, be.v)(ee);
        return void 0 === this.deadline ? ie : (0, be.k)([this.deadline, ie])
      }
    }
    class fe {
      async requestPutUrl(ee) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(ee) {
        return {
          targets: Array.from({
            length: ee.parts.count
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
  40570: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(36938),
      be = He.n(ye);

    function Me() {
      return be()('(()=>{var ee={12:(ee,ie,He)=>{function ye(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function be(ee){return ee instanceof Uint8Array&&(!ye()||!Buffer.isBuffer(ee))}function Me(ee){return ee instanceof ArrayBuffer}function Ke(ee){return!!ye()&&Buffer.isBuffer(ee)}var Ue=He(20).d,Fe=He(26).b,Je="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";ie.d=function(ee){if(!be(ee)&&!Me(ee)&&!Ke(ee))throw new TypeError(Je);var ie=!1,He=!1;be(ee)?ie=!0:Me(ee)&&(He=!0,ee=new Uint8Array(ee));var ye,Ue,oe,Re=new Fe(ee),ke=Re.maxCompressedLength();if(ie?(ye=new Uint8Array(ke),oe=Re.compressToBuffer(ye)):He?(ye=new ArrayBuffer(ke),Ue=new Uint8Array(ye),oe=Re.compressToBuffer(Ue)):(ye=Buffer.alloc(ke),oe=Re.compressToBuffer(ye)),!ye.slice){var qe=new Uint8Array(Array.prototype.slice.call(ye,0,oe));if(ie)return qe;if(He)return qe.buffer;throw new Error("Not implemented")}return ye.slice(0,oe)}},26:(ee,ie)=>{var He=new Array(15);function ye(ee,ie){return 506832829*ee>>>ie}function be(ee,ie){return ee[ie]+(ee[ie+1]<<8)+(ee[ie+2]<<16)+(ee[ie+3]<<24)}function Me(ee,ie,He){return ee[ie]===ee[He]&&ee[ie+1]===ee[He+1]&&ee[ie+2]===ee[He+2]&&ee[ie+3]===ee[He+3]}function Ke(ee,ie,He,ye,be){return He<=60?(ye[be]=He-1<<2,be+=1):He<256?(ye[be]=240,ye[be+1]=He-1,be+=2):(ye[be]=244,ye[be+1]=He-1&255,ye[be+2]=He-1>>>8,be+=3),function(ee,ie,He,ye,be){var Me;for(Me=0;Me<be;Me++)He[ye+Me]=ee[ie+Me]}(ee,ie,ye,be,He),be+He}function Ue(ee,ie,He,ye){return ye<12&&He<2048?(ee[ie]=1+(ye-4<<2)+(He>>>8<<5),ee[ie+1]=255&He,ie+2):(ee[ie]=2+(ye-1<<2),ee[ie+1]=255&He,ee[ie+2]=He>>>8,ie+3)}function Fe(ee,ie,He,ye){for(;ye>=68;)ie=Ue(ee,ie,He,64),ye-=64;return ye>64&&(ie=Ue(ee,ie,He,60),ye-=60),Ue(ee,ie,He,ye)}function Je(ee,ie,Ue,Je,oe){for(var Re=1;1<<Re<=Ue&&Re<=14;)Re+=1;var ke=32-(Re-=1);"undefined"===typeof He[Re]&&(He[Re]=new Uint16Array(1<<Re));var qe,fe=He[Re];for(qe=0;qe<fe.length;qe++)fe[qe]=0;var Te,pe,Xe,ze,Be,Ee,ge,Oe,de,We,te=ie+Ue,Ze=ie,we=ie,De=!0;if(Ue>=15)for(Te=te-15,Xe=ye(be(ee,ie+=1),ke);De;){Ee=32,ze=ie;do{if(pe=Xe,ge=Ee>>>5,Ee+=1,ze=(ie=ze)+ge,ie>Te){De=!1;break}Xe=ye(be(ee,ze),ke),Be=Ze+fe[pe],fe[pe]=ie-Ze}while(!Me(ee,ie,Be));if(!De)break;oe=Ke(ee,we,ie-we,Je,oe);do{for(Oe=ie,de=4;ie+de<te&&ee[ie+de]===ee[Be+de];)de+=1;if(ie+=de,oe=Fe(Je,oe,Oe-Be,de),we=ie,ie>=Te){De=!1;break}fe[ye(be(ee,ie-1),ke)]=ie-1-Ze,Be=Ze+fe[We=ye(be(ee,ie),ke)],fe[We]=ie-Ze}while(Me(ee,ie,Be));if(!De)break;Xe=ye(be(ee,ie+=1),ke)}return we<te&&(oe=Ke(ee,we,te-we,Je,oe)),oe}function oe(ee){this.array=ee}oe.prototype.maxCompressedLength=function(){var ee=this.array.length;return 32+ee+Math.floor(ee/6)},oe.prototype.compressToBuffer=function(ee){var ie,He=this.array,ye=He.length,be=0,Me=0;for(Me=function(ee,ie,He){do{ie[He]=127&ee,(ee>>>=7)>0&&(ie[He]+=128),He+=1}while(ee>0);return He}(ye,ee,Me);be<ye;)Me=Je(He,be,ie=Math.min(ye-be,65536),ee,Me),be+=ie;return Me},ie.b=oe},20:(ee,ie)=>{var He=[0,255,65535,16777215,4294967295];function ye(ee,ie,He,ye,be){var Me;for(Me=0;Me<be;Me++)He[ye+Me]=ee[ie+Me]}function be(ee,ie,He,ye){var be;for(be=0;be<ye;be++)ee[ie+be]=ee[ie-He+be]}function Me(ee){this.array=ee,this.pos=0}Me.prototype.readUncompressedLength=function(){for(var ee,ie,He=0,ye=0;ye<32&&this.pos<this.array.length;){if(ee=this.array[this.pos],this.pos+=1,(ie=127&ee)<<ye>>>ye!==ie)return-1;if(He|=ie<<ye,ee<128)return He;ye+=7}return-1},Me.prototype.uncompressToBuffer=function(ee){for(var ie,Me,Ke,Ue,Fe=this.array,Je=Fe.length,oe=this.pos,Re=0;oe<Fe.length;)if(ie=Fe[oe],oe+=1,0===(3&ie)){if((Me=1+(ie>>>2))>60){if(oe+3>=Je)return!1;Ke=Me-60,Me=1+((Me=Fe[oe]+(Fe[oe+1]<<8)+(Fe[oe+2]<<16)+(Fe[oe+3]<<24))&He[Ke]),oe+=Ke}if(oe+Me>Je)return!1;ye(Fe,oe,ee,Re,Me),oe+=Me,Re+=Me}else{switch(3&ie){case 1:Me=4+(ie>>>2&7),Ue=Fe[oe]+(ie>>>5<<8),oe+=1;break;case 2:if(oe+1>=Je)return!1;Me=1+(ie>>>2),Ue=Fe[oe]+(Fe[oe+1]<<8),oe+=2;break;case 3:if(oe+3>=Je)return!1;Me=1+(ie>>>2),Ue=Fe[oe]+(Fe[oe+1]<<8)+(Fe[oe+2]<<16)+(Fe[oe+3]<<24),oe+=4}if(0===Ue||Ue>Re)return!1;be(ee,Re,Ue,Me),Re+=Me}return!0},ie.d=Me}},ie={};var He=function He(ye){var be=ie[ye];if(void 0!==be)return be.exports;var Me=ie[ye]={exports:{}};return ee[ye](Me,Me.exports,He),Me.exports}(12);function ye(ee){const ie=(new TextEncoder).encode(ee);return{bytes:(0,He.d)(ie),inflatedBytes:ie.byteLength}}const be=self;self.onmessage=ee=>{const{id:ie,text:He}=ee.data,Me={id:ie,...ye(He)};be.postMessage(Me,[Me.bytes.buffer])}})();', "Worker", void 0, He.p + "replayDomChunk.worker.37c78087.worker.js")
    }
    class Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = ee, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(ee) {
        return new Promise(((ie, He) => {
          var ye;
          const be = null !== (ye = this.worker) && void 0 !== ye ? ye : this.start();
          if (null === be) return void He(this.failure);
          const Me = this.nextId++;
          this.waiting.set(Me, {
            resolve: ie,
            reject: He
          });
          const Ke = {
            id: Me,
            text: ee
          };
          be.postMessage(Ke), this.watchdog ??= this.startWatchdog()
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
          this.worker = new Me
        } catch (ee) {
          return this.broke(`didn't start: ${String(ee)}`), null
        }
        return this.worker.onmessage = ee => {
          const {
            id: ie,
            bytes: He,
            inflatedBytes: ye
          } = ee.data, be = this.waiting.get(ie);
          this.waiting.delete(ie), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === be || void 0 === be || be.resolve({
            bytes: He,
            inflatedBytes: ye
          })
        }, this.worker.onerror = ee => {
          this.broke(ee.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const ee = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - ee > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(ee) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${ee}`), this.fail(new Error(`page recording worker failed: ${ee}`))
      }
      fail(ee) {
        var ie;
        this.failure ??= ee, this.stopWatchdog(), null === (ie = this.worker) || void 0 === ie || ie.terminate(), this.worker = null;
        for (const {
            reject: He
          }
          of this.waiting.values()) He(ee);
        this.waiting.clear()
      }
    }
  },
  40548: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(40554);

    function be(ee) {
      const ie = (new TextEncoder).encode(ee);
      return {
        bytes: (0, ye.b)(ie),
        inflatedBytes: ie.byteLength
      }
    }
  },
  40602: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    const ye = 20;
    let be = Date.now() - performance.now();

    function Me() {
      const ee = performance.now(),
        ie = Date.now();
      return Math.abs(ie - (ee + be)) > ye && (be = ie - ee), ee + be
    }
  },
  40572: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(40579),
      be = He(1141);

    function Me() {
      return {
        segmentUploadUrl: `${be.clientSideServerUrls.indexUrl}${ye.j}`,
        manifestUrl: `${be.clientSideServerUrls.indexUrl}${ye.f}`
      }
    }
  },
  40584: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      g: () => Me,
      i: () => be
    });
    const ye = 32768;

    function be(ee) {
      return (new TextEncoder).encode(ee).byteLength
    }
    const Me = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(ee, ie, He, ye) {
        if (this.inFlightBytes + He > 49152) return await fetch(ee, ie);
        this.inFlightBytes += He, this.countLabel(ye, 1);
        const be = () => {
          this.inFlightBytes -= He, this.countLabel(ye, -1)
        };
        let Me;
        try {
          Me = await fetch(ee, {
            ...ie,
            keepalive: !0
          })
        } catch (Ue) {
          var Ke;
          if (be(), null !== (Ke = ie.signal) && void 0 !== Ke && Ke.aborted) throw Ue;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", Ue), await fetch(ee, ie)
        }
        return be(), Me
      }
      isInFlight(ee) {
        var ie;
        return (null !== (ie = this.inFlightLabels.get(ee)) && void 0 !== ie ? ie : 0) > 0
      }
      sendBeacon(ee, ie) {
        const He = be(ie);
        return !(this.inFlightBytes + He > 57344) && this.beaconSent(navigator.sendBeacon(ee, new Blob([ie], {
          type: "text/plain"
        })), He)
      }
      sendUploadBeacon(ee, ie, He) {
        return !(this.inFlightBytes + He > 40960) && this.beaconSent(navigator.sendBeacon(ee, ie), He)
      }
      countLabel(ee, ie) {
        var He;
        void 0 !== ee && this.inFlightLabels.set(ee, (null !== (He = this.inFlightLabels.get(ee)) && void 0 !== He ? He : 0) + ie)
      }
      beaconSent(ee, ie) {
        return ee && (this.inFlightBytes += ie, setTimeout((() => {
          this.inFlightBytes -= ie
        }), 1e4)), ee
      }
    }
  },
  40606: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(40584),
      be = He(1155);
    const Me = 6e4;
    async function Ke(ee, ie) {
      const He = JSON.stringify(ie);
      try {
        const ie = await ye.g.fetch(ee, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: He,
          signal: (0, be.v)(Me)
        }, (0, ye.i)(He));
        return await async function(ee) {
          if (!ee.ok) return 413 === ee.status ? "refused" : "retryLater";
          const ie = await ee.json();
          return "rejected" in ie ? (console.warn(`Session replay manifest refused: ${ie.reason}`), ie.retryable ? "retryLater" : "refused") : "uploaded"
        }(ie)
      } catch (Ke) {
        return console.warn("Session replay manifest upload failed.", Ke), "retryLater"
      }
    }
  },
  40609: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      e: () => Fe
    });
    var ye = He(40584);
    const be = 16384,
      Me = 100,
      Ke = (0, ye.i)(',"domSegments":[]');

    function Ue(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be;
      const {
        domSegments: Ue,
        ...Fe
      } = ee.manifest, Je = () => ({
        ...ee,
        manifest: {
          ...Fe,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), oe = (0, ye.i)(JSON.stringify(Je())), Re = [];
      let ke = {
          request: Je(),
          items: []
        },
        qe = oe;
      const fe = (ee, ie) => {
          var He;
          return "domSegments" === ie ? null !== (He = ee.manifest.domSegments) && void 0 !== He ? He : [] : "creatorGrants" === ie ? ee.creatorGrants : ee.manifest[ie]
        },
        Te = (ee, ie, He) => He + (ee.length > 0 ? 1 : "domSegments" === ie.list ? Ke : 0);
      for (const be of ie) {
        const ee = (0, ye.i)(JSON.stringify(be.value));
        let ie = fe(ke.request, be.list);
        ke.items.length > 0 && (qe + Te(ie, be, ee) > He || ie.length >= Me) && (Re.push(ke), ke = {
          request: Je(),
          items: []
        }, qe = oe, ie = fe(ke.request, be.list)), qe += Te(ie, be, ee), "domSegments" === be.list && (ke.request.manifest.domSegments = ie), ie.push(be.value), ke.items.push(be)
      }
      return Re.push(ke), Re
    }

    function Fe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be;
      return Ue(ee, function(ee) {
        var ie;
        return [...ee.creatorGrants.map((ee => ({
          list: "creatorGrants",
          value: ee
        }))), ...ee.manifest.games.map((ee => ({
          list: "games",
          value: ee
        }))), ...ee.manifest.videoSegments.map((ee => ({
          list: "videoSegments",
          value: ee
        }))), ...ee.manifest.telemetrySegments.map((ee => ({
          list: "telemetrySegments",
          value: ee
        }))), ...(null !== (ie = ee.manifest.domSegments) && void 0 !== ie ? ie : []).map((ee => ({
          list: "domSegments",
          value: ee
        })))]
      }(ee), ie).map((ee => {
        let {
          request: ie
        } = ee;
        return ie
      }))
    }
  },
  40594: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    class ye extends Error {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(ee), this.status = ie, this.storageCode = He
      }
    }
  },
  40579: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      f: () => be,
      g: () => Me,
      j: () => ye,
      k: () => Ke
    });
    const ye = "/index/replay/segment-upload-url",
      be = "/index/replay/manifest";
    const Me = 65536;

    function Ke(ee) {
      return {
        count: Math.ceil(ee.segmentDurationMs / ee.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * ee.bitrate / 8 * (ee.partDurationMs / 1e3)) + 32768
      }
    }
    const Ue = 432e5
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);