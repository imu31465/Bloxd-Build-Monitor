export const id = 283;
export const ids = [283];
export const modules = {
  41213: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb
    });
    var eb = Mb(5541);
    const Hb = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function pb(bb) {
      return new Promise(((wb, Mb) => {
        bb.onsuccess = () => {
          wb(bb.result)
        }, bb.onerror = () => {
          Mb(bb.error)
        }
      }))
    }

    function Vb(bb) {
      return new Promise(((wb, Mb) => {
        bb.oncomplete = () => {
          wb()
        }, bb.onerror = () => {
          Mb(bb.error)
        }, bb.onabort = () => {
          var wb;
          Mb(null !== (wb = bb.error) && void 0 !== wb ? wb : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function gb(bb) {
      return IDBKeyRange.bound([bb], [bb, []])
    }

    function lb(bb, wb) {
      return IDBKeyRange.bound([bb, wb], [bb, wb, []])
    }
    class Lb {
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
      putRecording(bb) {
        this.write(["recordings"], (wb => {
          wb.objectStore("recordings").put(bb)
        }))
      }
      putVideoSequence(bb, wb, Mb) {
        this.write(["recordings", "videoSequences"], (eb => {
          eb.objectStore("recordings").put(bb), eb.objectStore("videoSequences").put({
            recordingId: bb.recordingId,
            segmentId: wb,
            sequence: Mb
          })
        }))
      }
      appendVideo(bb, wb) {
        this.write(["videoHeaders", "videoChunks"], (Mb => {
          Mb.objectStore("videoHeaders").put(bb);
          const eb = Mb.objectStore("videoChunks");
          for (const bb of wb) eb.put(bb)
        }))
      }
      putVideoProgress(bb, wb) {
        this.write(["videoProgress", "videoChunks"], (Mb => {
          if (Mb.objectStore("videoProgress").put(bb), wb > 0) {
            const {
              recordingId: eb,
              segmentId: Hb
            } = bb;
            Mb.objectStore("videoChunks").delete(IDBKeyRange.bound([eb, Hb, 0], [eb, Hb, wb], !1, !0))
          }
        }))
      }
      removeVideoChunks(bb, wb) {
        this.write(["videoChunks"], (Mb => {
          Mb.objectStore("videoChunks").delete(lb(bb, wb))
        }))
      }
      removeVideo(bb, wb) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (Mb => {
          Mb.objectStore("videoHeaders").delete([bb, wb]), Mb.objectStore("videoChunks").delete(lb(bb, wb)), Mb.objectStore("videoSequences").delete([bb, wb]), Mb.objectStore("videoProgress").delete([bb, wb])
        }))
      }
      putTelemetry(bb) {
        this.write(["telemetry"], (wb => {
          wb.objectStore("telemetry").put(bb)
        }))
      }
      removeTelemetry(bb, wb) {
        this.write(["telemetry"], (Mb => {
          Mb.objectStore("telemetry").delete([bb, wb])
        }))
      }
      putDom(bb) {
        this.write(["dom"], (wb => {
          wb.objectStore("dom").put(bb)
        }))
      }
      queueDom(bb, wb, Mb) {
        this.write(["recordings", "dom", "domTail"], (eb => {
          eb.objectStore("recordings").put(bb), eb.objectStore("dom").put(wb), eb.objectStore("domTail").delete(lb(wb.recordingId, Mb))
        }), (eb => {
          console.warn(`Session replay couldn't journal page recording chunk ${wb.sequence}; a closing tab may lose it.`, eb), this.write(["recordings", "domTail"], (eb => {
            eb.objectStore("recordings").put(bb), eb.objectStore("domTail").delete(lb(wb.recordingId, Mb))
          }))
        }))
      }
      putDomTail(bb) {
        this.tailRecordings.add(bb.recordingId), this.write(["domTail"], (wb => {
          wb.objectStore("domTail").put(bb)
        }))
      }
      removeDomTail(bb, wb) {
        this.write(["domTail"], (Mb => {
          Mb.objectStore("domTail").delete(lb(bb, wb))
        }))
      }
      removeDom(bb, wb) {
        this.write(["dom"], (Mb => {
          Mb.objectStore("dom").delete([bb, wb])
        }))
      }
      async listRecordings() {
        const bb = await this.open();
        return await pb(bb.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(bb) {
        const wb = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          Mb = gb(bb.recordingId),
          eb = bb => pb(wb.objectStore(bb).getAll(Mb)),
          [Hb, Vb, lb, Lb, Ib, Ob, Ub] = await Promise.all([eb("videoHeaders"), eb("videoChunks"), eb("videoSequences"), eb("videoProgress"), eb("telemetry"), eb("dom"), eb("domTail")]);
        return {
          recording: bb,
          telemetry: Ib,
          dom: Ob,
          domTails: Ub,
          video: Hb.map((bb => {
            var wb, Mb, eb;
            return {
              header: bb,
              sequence: null !== (wb = null === (Mb = lb.find((wb => wb.segmentId === bb.segmentId))) || void 0 === Mb ? void 0 : Mb.sequence) && void 0 !== wb ? wb : null,
              progress: null !== (eb = Lb.find((wb => wb.segmentId === bb.segmentId))) && void 0 !== eb ? eb : null,
              chunks: Vb.filter((wb => wb.segmentId === bb.segmentId))
            }
          }))
        }
      }
      async deleteRecording(bb) {
        const wb = (await this.open()).transaction([...Hb], "readwrite");
        wb.objectStore("recordings").delete(bb);
        for (const Mb of Hb.slice(1)) wb.objectStore(Mb).delete(gb(bb));
        await Vb(wb)
      }
      async forgetSent(bb, wb) {
        const Mb = (await this.open()).transaction([...Hb], "readwrite"),
          {
            recordingId: eb
          } = bb;
        Mb.objectStore("recordings").put(bb);
        for (const Hb of wb.videoSegmentIds) Mb.objectStore("videoHeaders").delete([eb, Hb]), Mb.objectStore("videoChunks").delete(lb(eb, Hb)), Mb.objectStore("videoSequences").delete([eb, Hb]), Mb.objectStore("videoProgress").delete([eb, Hb]);
        for (const Hb of wb.telemetrySequences) Mb.objectStore("telemetry").delete([eb, Hb]);
        for (const Hb of wb.domSequences) Mb.objectStore("dom").delete([eb, Hb]);
        for (const Hb of wb.domTailChunks) Mb.objectStore("domTail").delete(lb(eb, Hb));
        await Vb(Mb)
      }
      write(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb => {
          this.fail(bb)
        };
        if (this.failed) return;
        const eb = eb => {
          try {
            var Hb;
            const pb = eb.transaction(bb, "readwrite");
            wb(pb), null === (Hb = pb.commit) || void 0 === Hb || Hb.call(pb), Vb(pb).catch(Mb)
          } catch (pb) {
            Mb(pb)
          }
        };
        null === this.db ? this.open().then(eb, (bb => {
          this.fail(bb)
        })) : eb(this.db)
      }
      fail(bb) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", bb), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const bb = bb => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", bb)
        };
        try {
          const wb = this.db.transaction(["domTail"], "readwrite");
          for (const bb of this.tailRecordings) wb.objectStore("domTail").delete(gb(bb));
          Vb(wb).catch(bb)
        } catch (wb) {
          bb(wb)
        }
      }
      open() {
        return this.opening ??= new Promise(((bb, wb) => {
          const Mb = indexedDB.open(eb.i, 4);
          Mb.onupgradeneeded = bb => {
            const wb = Mb.result;
            bb.oldVersion < 1 && (wb.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), wb.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), wb.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), wb.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), wb.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), bb.oldVersion < 2 && wb.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), bb.oldVersion < 3 && wb.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), wb.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let Hb = !1;
          Mb.onblocked = () => {
            Hb = !0, wb(new Error("An older tab holds the upload journal at an earlier version"))
          }, Mb.onsuccess = () => {
            Hb ? Mb.result.close() : (this.db = Mb.result, this.db.onversionchange = () => {
              var bb;
              this.dropTails(), null === (bb = this.db) || void 0 === bb || bb.close(), this.db = null, this.opening = null
            }, bb(Mb.result))
          }, Mb.onerror = () => {
            wb(Mb.error)
          }
        })), this.opening
      }
    }
  },
  41169: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb,
      f: () => pb,
      i: () => gb
    });
    var eb = Mb(41161);
    const Hb = new TextEncoder;

    function pb(bb, wb) {
      return new Blob([Hb.encode(`${JSON.stringify(bb)}\n`), wb], {
        type: "text/plain"
      })
    }
    class Vb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = bb, this.relay = wb, this.nowMs = Mb, this.refused = !1, this.skipUntilMs = 0
      }
      async send(bb, wb, Mb, Hb, Vb) {
        if (this.goesDirect(wb, Mb)) return null;
        const gb = pb({
            token: this.token,
            contentType: Mb,
            target: bb
          }, wb),
          lb = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: gb,
            signal: Hb
          };
        let Lb;
        try {
          const bb = wb.byteLength <= eb.b ? await eb.c.fetch(this.relay.url, lb, gb.size, Mb) : await fetch(this.relay.url, lb);
          if (!bb.ok) throw new Error(`HTTP ${bb.status}`);
          if (Lb = await bb.json(), "refused" !== Lb.outcome && ("forwarded" !== Lb.outcome || !Number.isInteger(Lb.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(Lb)}`)
        } catch (Ib) {
          if (!0 === (null === Vb || void 0 === Vb ? void 0 : Vb.aborted)) throw Ib;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", Ib), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === Lb.outcome ? (console.info(`Session replay's part joiner refused to relay (${Lb.reason}); uploading straight to storage.`), this.refused = !0, null) : Lb.status
      }
      beacon(bb, wb, Mb, eb) {
        if (this.goesDirect(wb, Mb)) return null;
        const Hb = pb({
          token: this.token,
          contentType: Mb,
          target: bb
        }, wb);
        return eb.sendUploadBeacon(this.relay.url, Hb, Hb.size)
      }
      goesDirect(bb, wb) {
        return this.refused || this.nowMs() < this.skipUntilMs || bb.byteLength > this.relay.maxBytes || "video/mp4" === wb
      }
    }

    function gb(bb) {
      return void 0 === (null === bb || void 0 === bb ? void 0 : bb.relay) ? null : new Vb(bb.token, bb.relay)
    }
    class lb {
      constructor() {
        this.relays = new Map
      }
      for (bb) {
        let wb = this.relays.get(bb.recordingId);
        return void 0 === wb && (wb = gb(bb.partJoiner), this.relays.set(bb.recordingId, wb)), wb
      }
    }
  },
  41197: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Cb,
      f: () => tb,
      g: () => lb
    });
    var eb = Mb(41161),
      Hb = Mb(1280),
      pb = Mb(41172);
    const Vb = 1024;

    function gb(bb) {
      return 6e4 + Math.ceil(bb / 16384 * 1e3)
    }

    function lb(bb, wb, Mb) {
      const Hb = new FormData;
      let pb = wb.byteLength + Vb;
      for (const [Vb, gb] of Object.entries(bb.fields)) Hb.append(Vb, gb), pb += (0, eb.g)(Vb) + (0, eb.g)(gb);
      return Hb.append("file", new Blob([wb], {
        type: Mb
      })), {
        form: Hb,
        byteLength: pb
      }
    }

    function Lb(bb, wb, Mb) {
      return new pb.e(`Segment ${bb} failed with ${wb}${null===Mb?"":` (${Mb})`}`, wb, Mb)
    }

    function Ib(bb) {
      if (bb < 200 || bb > 299) throw Lb("POST", bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Ob(bb, wb) {
      if ((bb < 200 || bb > 299) && (!wb || 412 !== bb)) throw Lb("PUT", bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function Ub(bb) {
      var wb, Mb;
      if (bb.ok) return null;
      let eb;
      try {
        eb = await bb.text()
      } catch (Hb) {
        return console.warn("Session replay couldn't read storage's error answer", Hb), null
      }
      return null !== (wb = null === (Mb = /<Code>([^<]+)<\/Code>/.exec(eb)) || void 0 === Mb ? void 0 : Mb[1]) && void 0 !== wb ? wb : null
    }
    class tb {
      constructor(bb) {
        var wb;
        let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = bb, this.deadline = void 0, this.relay = void 0, this.deadline = Mb.deadline, this.relay = null !== (wb = Mb.relay) && void 0 !== wb ? wb : null
      }
      requestPutUrl(bb) {
        return this.presign(bb)
      }
      requestPostTargets(bb) {
        return this.presign(bb)
      }
      async presign(bb) {
        const wb = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bb),
          signal: this.signal(6e4)
        });
        if (!wb.ok) throw new pb.e(`Segment presign failed with ${wb.status}`, wb.status);
        return await wb.json()
      }
      async put(bb, wb, Mb, Hb) {
        const pb = await this.sendThroughRelay({
          method: "PUT",
          url: bb,
          ifNoneMatch: Hb
        }, wb, Mb);
        if (null !== pb) return void Ob(pb, Hb);
        const Vb = {
            method: "PUT",
            headers: {
              "Content-Type": Mb,
              ...Hb ? {
                "If-None-Match": "*"
              } : {}
            },
            body: wb,
            signal: this.signal(gb(wb.byteLength))
          },
          lb = wb.byteLength <= eb.b ? await eb.c.fetch(bb, Vb, wb.byteLength, Mb) : await fetch(bb, Vb);
        Ob(lb.status, Hb, await Ub(lb))
      }
      async post(bb, wb, Mb) {
        const Hb = await this.sendThroughRelay({
          method: "POST",
          url: bb.url,
          fields: bb.fields
        }, wb, Mb);
        if (null !== Hb) return void Ib(Hb);
        const {
          form: pb,
          byteLength: Vb
        } = lb(bb, wb, Mb), Lb = {
          method: "POST",
          body: pb,
          signal: this.signal(gb(Vb))
        }, Ob = Vb <= eb.b ? await eb.c.fetch(bb.url, Lb, Vb, Mb) : await fetch(bb.url, Lb);
        Ib(Ob.status, await Ub(Ob))
      }
      async sendThroughRelay(bb, wb, Mb) {
        return null === this.relay ? null : await this.relay.send(bb, wb, Mb, this.signal(gb(wb.byteLength)), this.deadline)
      }
      signal(bb) {
        const wb = (0, Hb.t)(bb);
        return void 0 === this.deadline ? wb : (0, Hb.m)([this.deadline, wb])
      }
    }
    class Cb {
      async requestPutUrl(bb) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(bb) {
        return {
          targets: Array.from({
            length: bb.parts.count
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
  41152: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    var eb = Mb(37394),
      Hb = Mb.n(eb);

    function pb() {
      return Hb()('(()=>{var bb={10:(bb,wb,Mb)=>{function eb(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function Hb(bb){return bb instanceof Uint8Array&&(!eb()||!Buffer.isBuffer(bb))}function pb(bb){return bb instanceof ArrayBuffer}function Vb(bb){return!!eb()&&Buffer.isBuffer(bb)}var gb=Mb(16).b,lb=Mb(20).e,Lb="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";wb.c=function(bb){if(!Hb(bb)&&!pb(bb)&&!Vb(bb))throw new TypeError(Lb);var wb=!1,Mb=!1;Hb(bb)?wb=!0:pb(bb)&&(Mb=!0,bb=new Uint8Array(bb));var eb,gb,Ib,Ob=new lb(bb),Ub=Ob.maxCompressedLength();if(wb?(eb=new Uint8Array(Ub),Ib=Ob.compressToBuffer(eb)):Mb?(eb=new ArrayBuffer(Ub),gb=new Uint8Array(eb),Ib=Ob.compressToBuffer(gb)):(eb=Buffer.alloc(Ub),Ib=Ob.compressToBuffer(eb)),!eb.slice){var tb=new Uint8Array(Array.prototype.slice.call(eb,0,Ib));if(wb)return tb;if(Mb)return tb.buffer;throw new Error("Not implemented")}return eb.slice(0,Ib)}},20:(bb,wb)=>{var Mb=new Array(15);function eb(bb,wb){return 506832829*bb>>>wb}function Hb(bb,wb){return bb[wb]+(bb[wb+1]<<8)+(bb[wb+2]<<16)+(bb[wb+3]<<24)}function pb(bb,wb,Mb){return bb[wb]===bb[Mb]&&bb[wb+1]===bb[Mb+1]&&bb[wb+2]===bb[Mb+2]&&bb[wb+3]===bb[Mb+3]}function Vb(bb,wb,Mb,eb,Hb){return Mb<=60?(eb[Hb]=Mb-1<<2,Hb+=1):Mb<256?(eb[Hb]=240,eb[Hb+1]=Mb-1,Hb+=2):(eb[Hb]=244,eb[Hb+1]=Mb-1&255,eb[Hb+2]=Mb-1>>>8,Hb+=3),function(bb,wb,Mb,eb,Hb){var pb;for(pb=0;pb<Hb;pb++)Mb[eb+pb]=bb[wb+pb]}(bb,wb,eb,Hb,Mb),Hb+Mb}function gb(bb,wb,Mb,eb){return eb<12&&Mb<2048?(bb[wb]=1+(eb-4<<2)+(Mb>>>8<<5),bb[wb+1]=255&Mb,wb+2):(bb[wb]=2+(eb-1<<2),bb[wb+1]=255&Mb,bb[wb+2]=Mb>>>8,wb+3)}function lb(bb,wb,Mb,eb){for(;eb>=68;)wb=gb(bb,wb,Mb,64),eb-=64;return eb>64&&(wb=gb(bb,wb,Mb,60),eb-=60),gb(bb,wb,Mb,eb)}function Lb(bb,wb,gb,Lb,Ib){for(var Ob=1;1<<Ob<=gb&&Ob<=14;)Ob+=1;var Ub=32-(Ob-=1);"undefined"===typeof Mb[Ob]&&(Mb[Ob]=new Uint16Array(1<<Ob));var tb,Cb=Mb[Ob];for(tb=0;tb<Cb.length;tb++)Cb[tb]=0;var Eb,Fb,Bb,sb,mb,hb,zb,Xb,xb,jb,Kb=wb+gb,rb=wb,Rb=wb,Db=!0;if(gb>=15)for(Eb=Kb-15,Bb=eb(Hb(bb,wb+=1),Ub);Db;){hb=32,sb=wb;do{if(Fb=Bb,zb=hb>>>5,hb+=1,sb=(wb=sb)+zb,wb>Eb){Db=!1;break}Bb=eb(Hb(bb,sb),Ub),mb=rb+Cb[Fb],Cb[Fb]=wb-rb}while(!pb(bb,wb,mb));if(!Db)break;Ib=Vb(bb,Rb,wb-Rb,Lb,Ib);do{for(Xb=wb,xb=4;wb+xb<Kb&&bb[wb+xb]===bb[mb+xb];)xb+=1;if(wb+=xb,Ib=lb(Lb,Ib,Xb-mb,xb),Rb=wb,wb>=Eb){Db=!1;break}Cb[eb(Hb(bb,wb-1),Ub)]=wb-1-rb,mb=rb+Cb[jb=eb(Hb(bb,wb),Ub)],Cb[jb]=wb-rb}while(pb(bb,wb,mb));if(!Db)break;Bb=eb(Hb(bb,wb+=1),Ub)}return Rb<Kb&&(Ib=Vb(bb,Rb,Kb-Rb,Lb,Ib)),Ib}function Ib(bb){this.array=bb}Ib.prototype.maxCompressedLength=function(){var bb=this.array.length;return 32+bb+Math.floor(bb/6)},Ib.prototype.compressToBuffer=function(bb){var wb,Mb=this.array,eb=Mb.length,Hb=0,pb=0;for(pb=function(bb,wb,Mb){do{wb[Mb]=127&bb,(bb>>>=7)>0&&(wb[Mb]+=128),Mb+=1}while(bb>0);return Mb}(eb,bb,pb);Hb<eb;)pb=Lb(Mb,Hb,wb=Math.min(eb-Hb,65536),bb,pb),Hb+=wb;return pb},wb.e=Ib},16:(bb,wb)=>{var Mb=[0,255,65535,16777215,4294967295];function eb(bb,wb,Mb,eb,Hb){var pb;for(pb=0;pb<Hb;pb++)Mb[eb+pb]=bb[wb+pb]}function Hb(bb,wb,Mb,eb){var Hb;for(Hb=0;Hb<eb;Hb++)bb[wb+Hb]=bb[wb-Mb+Hb]}function pb(bb){this.array=bb,this.pos=0}pb.prototype.readUncompressedLength=function(){for(var bb,wb,Mb=0,eb=0;eb<32&&this.pos<this.array.length;){if(bb=this.array[this.pos],this.pos+=1,(wb=127&bb)<<eb>>>eb!==wb)return-1;if(Mb|=wb<<eb,bb<128)return Mb;eb+=7}return-1},pb.prototype.uncompressToBuffer=function(bb){for(var wb,pb,Vb,gb,lb=this.array,Lb=lb.length,Ib=this.pos,Ob=0;Ib<lb.length;)if(wb=lb[Ib],Ib+=1,0===(3&wb)){if((pb=1+(wb>>>2))>60){if(Ib+3>=Lb)return!1;Vb=pb-60,pb=1+((pb=lb[Ib]+(lb[Ib+1]<<8)+(lb[Ib+2]<<16)+(lb[Ib+3]<<24))&Mb[Vb]),Ib+=Vb}if(Ib+pb>Lb)return!1;eb(lb,Ib,bb,Ob,pb),Ib+=pb,Ob+=pb}else{switch(3&wb){case 1:pb=4+(wb>>>2&7),gb=lb[Ib]+(wb>>>5<<8),Ib+=1;break;case 2:if(Ib+1>=Lb)return!1;pb=1+(wb>>>2),gb=lb[Ib]+(lb[Ib+1]<<8),Ib+=2;break;case 3:if(Ib+3>=Lb)return!1;pb=1+(wb>>>2),gb=lb[Ib]+(lb[Ib+1]<<8)+(lb[Ib+2]<<16)+(lb[Ib+3]<<24),Ib+=4}if(0===gb||gb>Ob)return!1;Hb(bb,Ob,gb,pb),Ob+=pb}return!0},wb.b=pb}},wb={};var Mb=function Mb(eb){var Hb=wb[eb];if(void 0!==Hb)return Hb.exports;var pb=wb[eb]={exports:{}};return bb[eb](pb,pb.exports,Mb),pb.exports}(10);function eb(bb){const wb=(new TextEncoder).encode(bb);return{bytes:(0,Mb.c)(wb),inflatedBytes:wb.byteLength}}const Hb=self;self.onmessage=bb=>{const{id:wb,text:Mb}=bb.data,pb={id:wb,...eb(Mb)};Hb.postMessage(pb,[pb.bytes.buffer])}})();', "Worker", void 0, Mb.p + "replayDomChunk.worker.8f4a41c3.worker.js")
    }
    class Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = bb, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(bb) {
        return new Promise(((wb, Mb) => {
          var eb;
          const Hb = null !== (eb = this.worker) && void 0 !== eb ? eb : this.start();
          if (null === Hb) return void Mb(this.failure);
          const pb = this.nextId++;
          this.waiting.set(pb, {
            resolve: wb,
            reject: Mb
          });
          const Vb = {
            id: pb,
            text: bb
          };
          Hb.postMessage(Vb), this.watchdog ??= this.startWatchdog()
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
          this.worker = new pb
        } catch (bb) {
          return this.broke(`didn't start: ${String(bb)}`), null
        }
        return this.worker.onmessage = bb => {
          const {
            id: wb,
            bytes: Mb,
            inflatedBytes: eb
          } = bb.data, Hb = this.waiting.get(wb);
          this.waiting.delete(wb), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === Hb || void 0 === Hb || Hb.resolve({
            bytes: Mb,
            inflatedBytes: eb
          })
        }, this.worker.onerror = bb => {
          this.broke(bb.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const bb = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - bb > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(bb) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${bb}`), this.fail(new Error(`page recording worker failed: ${bb}`))
      }
      fail(bb) {
        var wb;
        this.failure ??= bb, this.stopWatchdog(), null === (wb = this.worker) || void 0 === wb || wb.terminate(), this.worker = null;
        for (const {
            reject: Mb
          }
          of this.waiting.values()) Mb(bb);
        this.waiting.clear()
      }
    }
  },
  41129: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(41138);

    function Hb(bb) {
      const wb = (new TextEncoder).encode(bb);
      return {
        bytes: (0, eb.d)(wb),
        inflatedBytes: wb.byteLength
      }
    }
  },
  41179: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    const eb = 20;
    let Hb = Date.now() - performance.now();

    function pb() {
      const bb = performance.now(),
        wb = Date.now();
      return Math.abs(wb - (bb + Hb)) > eb && (Hb = wb - bb), bb + Hb
    }
  },
  41155: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(41157),
      Hb = Mb(1271);

    function pb() {
      return {
        segmentUploadUrl: `${Hb.clientSideServerUrls.indexUrl}${eb.p}`,
        manifestUrl: `${Hb.clientSideServerUrls.indexUrl}${eb.h}`
      }
    }
  },
  41161: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      c: () => pb,
      g: () => Hb
    });
    const eb = 32768;

    function Hb(bb) {
      return (new TextEncoder).encode(bb).byteLength
    }
    const pb = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(bb, wb, Mb, eb) {
        if (this.inFlightBytes + Mb > 49152) return await fetch(bb, wb);
        this.inFlightBytes += Mb, this.countLabel(eb, 1);
        const Hb = () => {
          this.inFlightBytes -= Mb, this.countLabel(eb, -1)
        };
        let pb;
        try {
          pb = await fetch(bb, {
            ...wb,
            keepalive: !0
          })
        } catch (gb) {
          var Vb;
          if (Hb(), null !== (Vb = wb.signal) && void 0 !== Vb && Vb.aborted) throw gb;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", gb), await fetch(bb, wb)
        }
        return Hb(), pb
      }
      isInFlight(bb) {
        var wb;
        return (null !== (wb = this.inFlightLabels.get(bb)) && void 0 !== wb ? wb : 0) > 0
      }
      sendBeacon(bb, wb) {
        const Mb = Hb(wb);
        return !(this.inFlightBytes + Mb > 57344) && this.beaconSent(navigator.sendBeacon(bb, new Blob([wb], {
          type: "text/plain"
        })), Mb)
      }
      sendUploadBeacon(bb, wb, Mb) {
        return !(this.inFlightBytes + Mb > 40960) && this.beaconSent(navigator.sendBeacon(bb, wb), Mb)
      }
      countLabel(bb, wb) {
        var Mb;
        void 0 !== bb && this.inFlightLabels.set(bb, (null !== (Mb = this.inFlightLabels.get(bb)) && void 0 !== Mb ? Mb : 0) + wb)
      }
      beaconSent(bb, wb) {
        return bb && (this.inFlightBytes += wb, setTimeout((() => {
          this.inFlightBytes -= wb
        }), 1e4)), bb
      }
    }
  },
  41181: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(41161),
      Hb = Mb(1280);
    const pb = 6e4;
    async function Vb(bb, wb) {
      const Mb = JSON.stringify(wb);
      try {
        const wb = await eb.c.fetch(bb, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: Mb,
          signal: (0, Hb.t)(pb)
        }, (0, eb.g)(Mb));
        return await async function(bb) {
          if (!bb.ok) return 413 === bb.status ? "refused" : "retryLater";
          const wb = await bb.json();
          return "rejected" in wb ? (console.warn(`Session replay manifest refused: ${wb.reason}`), wb.retryable ? "retryLater" : "refused") : "uploaded"
        }(wb)
      } catch (Vb) {
        return console.warn("Session replay manifest upload failed.", Vb), "retryLater"
      }
    }
  },
  41189: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      f: () => lb
    });
    var eb = Mb(41161);
    const Hb = 16384,
      pb = 100,
      Vb = (0, eb.g)(',"domSegments":[]');

    function gb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb;
      const {
        domSegments: gb,
        ...lb
      } = bb.manifest, Lb = () => ({
        ...bb,
        manifest: {
          ...lb,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), Ib = (0, eb.g)(JSON.stringify(Lb())), Ob = [];
      let Ub = {
          request: Lb(),
          items: []
        },
        tb = Ib;
      const Cb = (bb, wb) => {
          var Mb;
          return "domSegments" === wb ? null !== (Mb = bb.manifest.domSegments) && void 0 !== Mb ? Mb : [] : "creatorGrants" === wb ? bb.creatorGrants : bb.manifest[wb]
        },
        Eb = (bb, wb, Mb) => Mb + (bb.length > 0 ? 1 : "domSegments" === wb.list ? Vb : 0);
      for (const Hb of wb) {
        const bb = (0, eb.g)(JSON.stringify(Hb.value));
        let wb = Cb(Ub.request, Hb.list);
        Ub.items.length > 0 && (tb + Eb(wb, Hb, bb) > Mb || wb.length >= pb) && (Ob.push(Ub), Ub = {
          request: Lb(),
          items: []
        }, tb = Ib, wb = Cb(Ub.request, Hb.list)), tb += Eb(wb, Hb, bb), "domSegments" === Hb.list && (Ub.request.manifest.domSegments = wb), wb.push(Hb.value), Ub.items.push(Hb)
      }
      return Ob.push(Ub), Ob
    }

    function lb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb;
      return gb(bb, function(bb) {
        var wb;
        return [...bb.creatorGrants.map((bb => ({
          list: "creatorGrants",
          value: bb
        }))), ...bb.manifest.games.map((bb => ({
          list: "games",
          value: bb
        }))), ...bb.manifest.videoSegments.map((bb => ({
          list: "videoSegments",
          value: bb
        }))), ...bb.manifest.telemetrySegments.map((bb => ({
          list: "telemetrySegments",
          value: bb
        }))), ...(null !== (wb = bb.manifest.domSegments) && void 0 !== wb ? wb : []).map((bb => ({
          list: "domSegments",
          value: bb
        })))]
      }(bb), wb).map((bb => {
        let {
          request: wb
        } = bb;
        return wb
      }))
    }
  },
  41172: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb extends Error {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(bb), this.status = wb, this.storageCode = Mb
      }
    }
  },
  41157: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      h: () => Hb,
      l: () => pb,
      p: () => eb,
      s: () => Vb
    });
    const eb = "/index/replay/segment-upload-url",
      Hb = "/index/replay/manifest";
    const pb = 65536;

    function Vb(bb) {
      return {
        count: Math.ceil(bb.segmentDurationMs / bb.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * bb.bitrate / 8 * (bb.partDurationMs / 1e3)) + 32768
      }
    }
    const gb = 432e5
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);