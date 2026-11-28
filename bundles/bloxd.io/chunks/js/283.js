export const id = 283;
export const ids = [283];
export const modules = {
  41441: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd
    });
    var Wd = md(5375);
    const Fd = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function Rd(dd) {
      return new Promise(((Od, md) => {
        dd.onsuccess = () => {
          Od(dd.result)
        }, dd.onerror = () => {
          md(dd.error)
        }
      }))
    }

    function Xd(dd) {
      return new Promise(((Od, md) => {
        dd.oncomplete = () => {
          Od()
        }, dd.onerror = () => {
          md(dd.error)
        }, dd.onabort = () => {
          var Od;
          md(null !== (Od = dd.error) && void 0 !== Od ? Od : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function Kd(dd) {
      return IDBKeyRange.bound([dd], [dd, []])
    }

    function hd(dd, Od) {
      return IDBKeyRange.bound([dd, Od], [dd, Od, []])
    }
    class vd {
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
      putRecording(dd) {
        this.write(["recordings"], (Od => {
          Od.objectStore("recordings").put(dd)
        }))
      }
      putVideoSequence(dd, Od, md) {
        this.write(["recordings", "videoSequences"], (Wd => {
          Wd.objectStore("recordings").put(dd), Wd.objectStore("videoSequences").put({
            recordingId: dd.recordingId,
            segmentId: Od,
            sequence: md
          })
        }))
      }
      appendVideo(dd, Od) {
        this.write(["videoHeaders", "videoChunks"], (md => {
          md.objectStore("videoHeaders").put(dd);
          const Wd = md.objectStore("videoChunks");
          for (const dd of Od) Wd.put(dd)
        }))
      }
      putVideoProgress(dd, Od) {
        this.write(["videoProgress", "videoChunks"], (md => {
          if (md.objectStore("videoProgress").put(dd), Od > 0) {
            const {
              recordingId: Wd,
              segmentId: Fd
            } = dd;
            md.objectStore("videoChunks").delete(IDBKeyRange.bound([Wd, Fd, 0], [Wd, Fd, Od], !1, !0))
          }
        }))
      }
      removeVideoChunks(dd, Od) {
        this.write(["videoChunks"], (md => {
          md.objectStore("videoChunks").delete(hd(dd, Od))
        }))
      }
      removeVideo(dd, Od) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (md => {
          md.objectStore("videoHeaders").delete([dd, Od]), md.objectStore("videoChunks").delete(hd(dd, Od)), md.objectStore("videoSequences").delete([dd, Od]), md.objectStore("videoProgress").delete([dd, Od])
        }))
      }
      putTelemetry(dd) {
        this.write(["telemetry"], (Od => {
          Od.objectStore("telemetry").put(dd)
        }))
      }
      removeTelemetry(dd, Od) {
        this.write(["telemetry"], (md => {
          md.objectStore("telemetry").delete([dd, Od])
        }))
      }
      putDom(dd) {
        this.write(["dom"], (Od => {
          Od.objectStore("dom").put(dd)
        }))
      }
      queueDom(dd, Od, md) {
        this.write(["recordings", "dom", "domTail"], (Wd => {
          Wd.objectStore("recordings").put(dd), Wd.objectStore("dom").put(Od), Wd.objectStore("domTail").delete(hd(Od.recordingId, md))
        }), (Wd => {
          console.warn(`Session replay couldn't journal page recording chunk ${Od.sequence}; a closing tab may lose it.`, Wd), this.write(["recordings", "domTail"], (Wd => {
            Wd.objectStore("recordings").put(dd), Wd.objectStore("domTail").delete(hd(Od.recordingId, md))
          }))
        }))
      }
      putDomTail(dd) {
        this.tailRecordings.add(dd.recordingId), this.write(["domTail"], (Od => {
          Od.objectStore("domTail").put(dd)
        }))
      }
      removeDomTail(dd, Od) {
        this.write(["domTail"], (md => {
          md.objectStore("domTail").delete(hd(dd, Od))
        }))
      }
      removeDom(dd, Od) {
        this.write(["dom"], (md => {
          md.objectStore("dom").delete([dd, Od])
        }))
      }
      async listRecordings() {
        const dd = await this.open();
        return await Rd(dd.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(dd) {
        const Od = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          md = Kd(dd.recordingId),
          Wd = dd => Rd(Od.objectStore(dd).getAll(md)),
          [Fd, Xd, hd, vd, Qd, td, od] = await Promise.all([Wd("videoHeaders"), Wd("videoChunks"), Wd("videoSequences"), Wd("videoProgress"), Wd("telemetry"), Wd("dom"), Wd("domTail")]);
        return {
          recording: dd,
          telemetry: Qd,
          dom: td,
          domTails: od,
          video: Fd.map((dd => {
            var Od, md, Wd;
            return {
              header: dd,
              sequence: null !== (Od = null === (md = hd.find((Od => Od.segmentId === dd.segmentId))) || void 0 === md ? void 0 : md.sequence) && void 0 !== Od ? Od : null,
              progress: null !== (Wd = vd.find((Od => Od.segmentId === dd.segmentId))) && void 0 !== Wd ? Wd : null,
              chunks: Xd.filter((Od => Od.segmentId === dd.segmentId))
            }
          }))
        }
      }
      async deleteRecording(dd) {
        const Od = (await this.open()).transaction([...Fd], "readwrite");
        Od.objectStore("recordings").delete(dd);
        for (const md of Fd.slice(1)) Od.objectStore(md).delete(Kd(dd));
        await Xd(Od)
      }
      async forgetSent(dd, Od) {
        const md = (await this.open()).transaction([...Fd], "readwrite"),
          {
            recordingId: Wd
          } = dd;
        md.objectStore("recordings").put(dd);
        for (const Fd of Od.videoSegmentIds) md.objectStore("videoHeaders").delete([Wd, Fd]), md.objectStore("videoChunks").delete(hd(Wd, Fd)), md.objectStore("videoSequences").delete([Wd, Fd]), md.objectStore("videoProgress").delete([Wd, Fd]);
        for (const Fd of Od.telemetrySequences) md.objectStore("telemetry").delete([Wd, Fd]);
        for (const Fd of Od.domSequences) md.objectStore("dom").delete([Wd, Fd]);
        for (const Fd of Od.domTailChunks) md.objectStore("domTail").delete(hd(Wd, Fd));
        await Xd(md)
      }
      write(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd => {
          this.fail(dd)
        };
        if (this.failed) return;
        const Wd = Wd => {
          try {
            var Fd;
            const Rd = Wd.transaction(dd, "readwrite");
            Od(Rd), null === (Fd = Rd.commit) || void 0 === Fd || Fd.call(Rd), Xd(Rd).catch(md)
          } catch (Rd) {
            md(Rd)
          }
        };
        null === this.db ? this.open().then(Wd, (dd => {
          this.fail(dd)
        })) : Wd(this.db)
      }
      fail(dd) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", dd), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const dd = dd => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", dd)
        };
        try {
          const Od = this.db.transaction(["domTail"], "readwrite");
          for (const dd of this.tailRecordings) Od.objectStore("domTail").delete(Kd(dd));
          Xd(Od).catch(dd)
        } catch (Od) {
          dd(Od)
        }
      }
      open() {
        return this.opening ??= new Promise(((dd, Od) => {
          const md = indexedDB.open(Wd.j, 4);
          md.onupgradeneeded = dd => {
            const Od = md.result;
            dd.oldVersion < 1 && (Od.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), Od.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), Od.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), Od.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), Od.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), dd.oldVersion < 2 && Od.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), dd.oldVersion < 3 && Od.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), Od.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let Fd = !1;
          md.onblocked = () => {
            Fd = !0, Od(new Error("An older tab holds the upload journal at an earlier version"))
          }, md.onsuccess = () => {
            Fd ? md.result.close() : (this.db = md.result, this.db.onversionchange = () => {
              var dd;
              this.dropTails(), null === (dd = this.db) || void 0 === dd || dd.close(), this.db = null, this.opening = null
            }, dd(md.result))
          }, md.onerror = () => {
            Od(md.error)
          }
        })), this.opening
      }
    }
  },
  41390: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd,
      f: () => Rd,
      g: () => Kd
    });
    var Wd = md(41387);
    const Fd = new TextEncoder;

    function Rd(dd, Od) {
      return new Blob([Fd.encode(`${JSON.stringify(dd)}\n`), Od], {
        type: "text/plain"
      })
    }
    class Xd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = dd, this.relay = Od, this.nowMs = md, this.refused = !1, this.skipUntilMs = 0
      }
      async send(dd, Od, md, Fd, Xd) {
        if (this.goesDirect(Od, md)) return null;
        const Kd = Rd({
            token: this.token,
            contentType: md,
            target: dd
          }, Od),
          hd = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: Kd,
            signal: Fd
          };
        let vd;
        try {
          const dd = Od.byteLength <= Wd.b ? await Wd.c.fetch(this.relay.url, hd, Kd.size, md) : await fetch(this.relay.url, hd);
          if (!dd.ok) throw new Error(`HTTP ${dd.status}`);
          if (vd = await dd.json(), "refused" !== vd.outcome && ("forwarded" !== vd.outcome || !Number.isInteger(vd.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(vd)}`)
        } catch (Qd) {
          if (!0 === (null === Xd || void 0 === Xd ? void 0 : Xd.aborted)) throw Qd;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", Qd), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === vd.outcome ? (console.info(`Session replay's part joiner refused to relay (${vd.reason}); uploading straight to storage.`), this.refused = !0, null) : vd.status
      }
      beacon(dd, Od, md, Wd) {
        if (this.goesDirect(Od, md)) return null;
        const Fd = Rd({
          token: this.token,
          contentType: md,
          target: dd
        }, Od);
        return Wd.sendUploadBeacon(this.relay.url, Fd, Fd.size)
      }
      goesDirect(dd, Od) {
        return this.refused || this.nowMs() < this.skipUntilMs || dd.byteLength > this.relay.maxBytes || "video/mp4" === Od
      }
    }

    function Kd(dd) {
      return void 0 === (null === dd || void 0 === dd ? void 0 : dd.relay) ? null : new Xd(dd.token, dd.relay)
    }
    class hd {
      constructor() {
        this.relays = new Map
      }
      for (dd) {
        let Od = this.relays.get(dd.recordingId);
        return void 0 === Od && (Od = Kd(dd.partJoiner), this.relays.set(dd.recordingId, Od)), Od
      }
    }
  },
  41419: (dd, Od, md) => {
    md.d(Od, {
      c: () => qd,
      e: () => Nd,
      f: () => hd
    });
    var Wd = md(41387),
      Fd = md(1268),
      Rd = md(41397);
    const Xd = 1024;

    function Kd(dd) {
      return 6e4 + Math.ceil(dd / 16384 * 1e3)
    }

    function hd(dd, Od, md) {
      const Fd = new FormData;
      let Rd = Od.byteLength + Xd;
      for (const [Xd, Kd] of Object.entries(dd.fields)) Fd.append(Xd, Kd), Rd += (0, Wd.e)(Xd) + (0, Wd.e)(Kd);
      return Fd.append("file", new Blob([Od], {
        type: md
      })), {
        form: Fd,
        byteLength: Rd
      }
    }

    function vd(dd, Od, md) {
      return new Rd.b(`Segment ${dd} failed with ${Od}${null===md?"":` (${md})`}`, Od, md)
    }

    function Qd(dd) {
      if (dd < 200 || dd > 299) throw vd("POST", dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function td(dd, Od) {
      if ((dd < 200 || dd > 299) && (!Od || 412 !== dd)) throw vd("PUT", dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }
    async function od(dd) {
      var Od, md;
      if (dd.ok) return null;
      let Wd;
      try {
        Wd = await dd.text()
      } catch (Fd) {
        return console.warn("Session replay couldn't read storage's error answer", Fd), null
      }
      return null !== (Od = null === (md = /<Code>([^<]+)<\/Code>/.exec(Wd)) || void 0 === md ? void 0 : md[1]) && void 0 !== Od ? Od : null
    }
    class Nd {
      constructor(dd) {
        var Od;
        let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = dd, this.deadline = void 0, this.relay = void 0, this.deadline = md.deadline, this.relay = null !== (Od = md.relay) && void 0 !== Od ? Od : null
      }
      requestPutUrl(dd) {
        return this.presign(dd)
      }
      requestPostTargets(dd) {
        return this.presign(dd)
      }
      async presign(dd) {
        const Od = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dd),
          signal: this.signal(6e4)
        });
        if (!Od.ok) throw new Rd.b(`Segment presign failed with ${Od.status}`, Od.status);
        return await Od.json()
      }
      async put(dd, Od, md, Fd) {
        const Rd = await this.sendThroughRelay({
          method: "PUT",
          url: dd,
          ifNoneMatch: Fd
        }, Od, md);
        if (null !== Rd) return void td(Rd, Fd);
        const Xd = {
            method: "PUT",
            headers: {
              "Content-Type": md,
              ...Fd ? {
                "If-None-Match": "*"
              } : {}
            },
            body: Od,
            signal: this.signal(Kd(Od.byteLength))
          },
          hd = Od.byteLength <= Wd.b ? await Wd.c.fetch(dd, Xd, Od.byteLength, md) : await fetch(dd, Xd);
        td(hd.status, Fd, await od(hd))
      }
      async post(dd, Od, md) {
        const Fd = await this.sendThroughRelay({
          method: "POST",
          url: dd.url,
          fields: dd.fields
        }, Od, md);
        if (null !== Fd) return void Qd(Fd);
        const {
          form: Rd,
          byteLength: Xd
        } = hd(dd, Od, md), vd = {
          method: "POST",
          body: Rd,
          signal: this.signal(Kd(Xd))
        }, td = Xd <= Wd.b ? await Wd.c.fetch(dd.url, vd, Xd, md) : await fetch(dd.url, vd);
        Qd(td.status, await od(td))
      }
      async sendThroughRelay(dd, Od, md) {
        return null === this.relay ? null : await this.relay.send(dd, Od, md, this.signal(Kd(Od.byteLength)), this.deadline)
      }
      signal(dd) {
        const Od = (0, Fd.s)(dd);
        return void 0 === this.deadline ? Od : (0, Fd.j)([this.deadline, Od])
      }
    }
    class qd {
      async requestPutUrl(dd) {
        return {
          uploadUrl: "",
          ifNoneMatch: !1
        }
      }
      async requestPostTargets(dd) {
        return {
          targets: Array.from({
            length: dd.parts.count
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
  41370: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    var Wd = md(37635),
      Fd = md.n(Wd);

    function Rd() {
      return Fd()('(()=>{var dd={5:(dd,Od,md)=>{function Wd(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function Fd(dd){return dd instanceof Uint8Array&&(!Wd()||!Buffer.isBuffer(dd))}function Rd(dd){return dd instanceof ArrayBuffer}function Xd(dd){return!!Wd()&&Buffer.isBuffer(dd)}var Kd=md(12).c,hd=md(20).b,vd="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";Od.c=function(dd){if(!Fd(dd)&&!Rd(dd)&&!Xd(dd))throw new TypeError(vd);var Od=!1,md=!1;Fd(dd)?Od=!0:Rd(dd)&&(md=!0,dd=new Uint8Array(dd));var Wd,Kd,Qd,td=new hd(dd),od=td.maxCompressedLength();if(Od?(Wd=new Uint8Array(od),Qd=td.compressToBuffer(Wd)):md?(Wd=new ArrayBuffer(od),Kd=new Uint8Array(Wd),Qd=td.compressToBuffer(Kd)):(Wd=Buffer.alloc(od),Qd=td.compressToBuffer(Wd)),!Wd.slice){var Nd=new Uint8Array(Array.prototype.slice.call(Wd,0,Qd));if(Od)return Nd;if(md)return Nd.buffer;throw new Error("Not implemented")}return Wd.slice(0,Qd)}},20:(dd,Od)=>{var md=new Array(15);function Wd(dd,Od){return 506832829*dd>>>Od}function Fd(dd,Od){return dd[Od]+(dd[Od+1]<<8)+(dd[Od+2]<<16)+(dd[Od+3]<<24)}function Rd(dd,Od,md){return dd[Od]===dd[md]&&dd[Od+1]===dd[md+1]&&dd[Od+2]===dd[md+2]&&dd[Od+3]===dd[md+3]}function Xd(dd,Od,md,Wd,Fd){return md<=60?(Wd[Fd]=md-1<<2,Fd+=1):md<256?(Wd[Fd]=240,Wd[Fd+1]=md-1,Fd+=2):(Wd[Fd]=244,Wd[Fd+1]=md-1&255,Wd[Fd+2]=md-1>>>8,Fd+=3),function(dd,Od,md,Wd,Fd){var Rd;for(Rd=0;Rd<Fd;Rd++)md[Wd+Rd]=dd[Od+Rd]}(dd,Od,Wd,Fd,md),Fd+md}function Kd(dd,Od,md,Wd){return Wd<12&&md<2048?(dd[Od]=1+(Wd-4<<2)+(md>>>8<<5),dd[Od+1]=255&md,Od+2):(dd[Od]=2+(Wd-1<<2),dd[Od+1]=255&md,dd[Od+2]=md>>>8,Od+3)}function hd(dd,Od,md,Wd){for(;Wd>=68;)Od=Kd(dd,Od,md,64),Wd-=64;return Wd>64&&(Od=Kd(dd,Od,md,60),Wd-=60),Kd(dd,Od,md,Wd)}function vd(dd,Od,Kd,vd,Qd){for(var td=1;1<<td<=Kd&&td<=14;)td+=1;var od=32-(td-=1);"undefined"===typeof md[td]&&(md[td]=new Uint16Array(1<<td));var Nd,qd=md[td];for(Nd=0;Nd<qd.length;Nd++)qd[Nd]=0;var Hd,yd,bd,Td,pd,Yd,gd,wd,Ed,Jd,Ud=Od+Kd,xd=Od,Bd=Od,Sd=!0;if(Kd>=15)for(Hd=Ud-15,bd=Wd(Fd(dd,Od+=1),od);Sd;){Yd=32,Td=Od;do{if(yd=bd,gd=Yd>>>5,Yd+=1,Td=(Od=Td)+gd,Od>Hd){Sd=!1;break}bd=Wd(Fd(dd,Td),od),pd=xd+qd[yd],qd[yd]=Od-xd}while(!Rd(dd,Od,pd));if(!Sd)break;Qd=Xd(dd,Bd,Od-Bd,vd,Qd);do{for(wd=Od,Ed=4;Od+Ed<Ud&&dd[Od+Ed]===dd[pd+Ed];)Ed+=1;if(Od+=Ed,Qd=hd(vd,Qd,wd-pd,Ed),Bd=Od,Od>=Hd){Sd=!1;break}qd[Wd(Fd(dd,Od-1),od)]=Od-1-xd,pd=xd+qd[Jd=Wd(Fd(dd,Od),od)],qd[Jd]=Od-xd}while(Rd(dd,Od,pd));if(!Sd)break;bd=Wd(Fd(dd,Od+=1),od)}return Bd<Ud&&(Qd=Xd(dd,Bd,Ud-Bd,vd,Qd)),Qd}function Qd(dd){this.array=dd}Qd.prototype.maxCompressedLength=function(){var dd=this.array.length;return 32+dd+Math.floor(dd/6)},Qd.prototype.compressToBuffer=function(dd){var Od,md=this.array,Wd=md.length,Fd=0,Rd=0;for(Rd=function(dd,Od,md){do{Od[md]=127&dd,(dd>>>=7)>0&&(Od[md]+=128),md+=1}while(dd>0);return md}(Wd,dd,Rd);Fd<Wd;)Rd=vd(md,Fd,Od=Math.min(Wd-Fd,65536),dd,Rd),Fd+=Od;return Rd},Od.b=Qd},12:(dd,Od)=>{var md=[0,255,65535,16777215,4294967295];function Wd(dd,Od,md,Wd,Fd){var Rd;for(Rd=0;Rd<Fd;Rd++)md[Wd+Rd]=dd[Od+Rd]}function Fd(dd,Od,md,Wd){var Fd;for(Fd=0;Fd<Wd;Fd++)dd[Od+Fd]=dd[Od-md+Fd]}function Rd(dd){this.array=dd,this.pos=0}Rd.prototype.readUncompressedLength=function(){for(var dd,Od,md=0,Wd=0;Wd<32&&this.pos<this.array.length;){if(dd=this.array[this.pos],this.pos+=1,(Od=127&dd)<<Wd>>>Wd!==Od)return-1;if(md|=Od<<Wd,dd<128)return md;Wd+=7}return-1},Rd.prototype.uncompressToBuffer=function(dd){for(var Od,Rd,Xd,Kd,hd=this.array,vd=hd.length,Qd=this.pos,td=0;Qd<hd.length;)if(Od=hd[Qd],Qd+=1,0===(3&Od)){if((Rd=1+(Od>>>2))>60){if(Qd+3>=vd)return!1;Xd=Rd-60,Rd=1+((Rd=hd[Qd]+(hd[Qd+1]<<8)+(hd[Qd+2]<<16)+(hd[Qd+3]<<24))&md[Xd]),Qd+=Xd}if(Qd+Rd>vd)return!1;Wd(hd,Qd,dd,td,Rd),Qd+=Rd,td+=Rd}else{switch(3&Od){case 1:Rd=4+(Od>>>2&7),Kd=hd[Qd]+(Od>>>5<<8),Qd+=1;break;case 2:if(Qd+1>=vd)return!1;Rd=1+(Od>>>2),Kd=hd[Qd]+(hd[Qd+1]<<8),Qd+=2;break;case 3:if(Qd+3>=vd)return!1;Rd=1+(Od>>>2),Kd=hd[Qd]+(hd[Qd+1]<<8)+(hd[Qd+2]<<16)+(hd[Qd+3]<<24),Qd+=4}if(0===Kd||Kd>td)return!1;Fd(dd,td,Kd,Rd),td+=Rd}return!0},Od.c=Rd}},Od={};var md=function md(Wd){var Fd=Od[Wd];if(void 0!==Fd)return Fd.exports;var Rd=Od[Wd]={exports:{}};return dd[Wd](Rd,Rd.exports,md),Rd.exports}(5);function Wd(dd){const Od=(new TextEncoder).encode(dd);return{bytes:(0,md.c)(Od),inflatedBytes:Od.byteLength}}const Fd=self;self.onmessage=dd=>{const{id:Od,text:md}=dd.data,Rd={id:Od,...Wd(md)};Fd.postMessage(Rd,[Rd.bytes.buffer])}})();', "Worker", void 0, md.p + "replayDomChunk.worker.d10a7af2.worker.js")
    }
    class Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        this.quietMs = dd, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
      }
      pack(dd) {
        return new Promise(((Od, md) => {
          var Wd;
          const Fd = null !== (Wd = this.worker) && void 0 !== Wd ? Wd : this.start();
          if (null === Fd) return void md(this.failure);
          const Rd = this.nextId++;
          this.waiting.set(Rd, {
            resolve: Od,
            reject: md
          });
          const Xd = {
            id: Rd,
            text: dd
          };
          Fd.postMessage(Xd), this.watchdog ??= this.startWatchdog()
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
          this.worker = new Rd
        } catch (dd) {
          return this.broke(`didn't start: ${String(dd)}`), null
        }
        return this.worker.onmessage = dd => {
          const {
            id: Od,
            bytes: md,
            inflatedBytes: Wd
          } = dd.data, Fd = this.waiting.get(Od);
          this.waiting.delete(Od), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === Fd || void 0 === Fd || Fd.resolve({
            bytes: md,
            inflatedBytes: Wd
          })
        }, this.worker.onerror = dd => {
          this.broke(dd.message || "it didn't load")
        }, this.worker.onmessageerror = () => {
          this.broke("a reply couldn't be read")
        }, this.worker
      }
      startWatchdog() {
        const dd = performance.now();
        return setTimeout((() => {
          if (!this.rearmed && performance.now() - dd > this.quietMs + 2e3) return this.rearmed = !0, void(this.watchdog = this.startWatchdog());
          this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
        }), this.quietMs)
      }
      stopWatchdog() {
        this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
      }
      broke(dd) {
        console.warn(`Session replay: page recording worker failed, packing on the main thread: ${dd}`), this.fail(new Error(`page recording worker failed: ${dd}`))
      }
      fail(dd) {
        var Od;
        this.failure ??= dd, this.stopWatchdog(), null === (Od = this.worker) || void 0 === Od || Od.terminate(), this.worker = null;
        for (const {
            reject: md
          }
          of this.waiting.values()) md(dd);
        this.waiting.clear()
      }
    }
  },
  41354: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    var Wd = md(41357);

    function Fd(dd) {
      const Od = (new TextEncoder).encode(dd);
      return {
        bytes: (0, Wd.d)(Od),
        inflatedBytes: Od.byteLength
      }
    }
  },
  41405: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    const Wd = 20;
    let Fd = Date.now() - performance.now();

    function Rd() {
      const dd = performance.now(),
        Od = Date.now();
      return Math.abs(Od - (dd + Fd)) > Wd && (Fd = Od - dd), dd + Fd
    }
  },
  41372: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(41381),
      Fd = md(1253);

    function Rd() {
      return {
        segmentUploadUrl: `${Fd.clientSideServerUrls.indexUrl}${Wd.n}`,
        manifestUrl: `${Fd.clientSideServerUrls.indexUrl}${Wd.f}`
      }
    }
  },
  41387: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      c: () => Rd,
      e: () => Fd
    });
    const Wd = 32768;

    function Fd(dd) {
      return (new TextEncoder).encode(dd).byteLength
    }
    const Rd = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(dd, Od, md, Wd) {
        if (this.inFlightBytes + md > 49152) return await fetch(dd, Od);
        this.inFlightBytes += md, this.countLabel(Wd, 1);
        const Fd = () => {
          this.inFlightBytes -= md, this.countLabel(Wd, -1)
        };
        let Rd;
        try {
          Rd = await fetch(dd, {
            ...Od,
            keepalive: !0
          })
        } catch (Kd) {
          var Xd;
          if (Fd(), null !== (Xd = Od.signal) && void 0 !== Xd && Xd.aborted) throw Kd;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", Kd), await fetch(dd, Od)
        }
        return Fd(), Rd
      }
      isInFlight(dd) {
        var Od;
        return (null !== (Od = this.inFlightLabels.get(dd)) && void 0 !== Od ? Od : 0) > 0
      }
      sendBeacon(dd, Od) {
        const md = Fd(Od);
        return !(this.inFlightBytes + md > 57344) && this.beaconSent(navigator.sendBeacon(dd, new Blob([Od], {
          type: "text/plain"
        })), md)
      }
      sendUploadBeacon(dd, Od, md) {
        return !(this.inFlightBytes + md > 40960) && this.beaconSent(navigator.sendBeacon(dd, Od), md)
      }
      countLabel(dd, Od) {
        var md;
        void 0 !== dd && this.inFlightLabels.set(dd, (null !== (md = this.inFlightLabels.get(dd)) && void 0 !== md ? md : 0) + Od)
      }
      beaconSent(dd, Od) {
        return dd && (this.inFlightBytes += Od, setTimeout((() => {
          this.inFlightBytes -= Od
        }), 1e4)), dd
      }
    }
  },
  41407: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    var Wd = md(41387),
      Fd = md(1268);
    const Rd = 6e4;
    async function Xd(dd, Od) {
      const md = JSON.stringify(Od);
      try {
        const Od = await Wd.c.fetch(dd, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: md,
          signal: (0, Fd.s)(Rd)
        }, (0, Wd.e)(md));
        return await async function(dd) {
          if (!dd.ok) return 413 === dd.status ? "refused" : "retryLater";
          const Od = await dd.json();
          return "rejected" in Od ? (console.warn(`Session replay manifest refused: ${Od.reason}`), Od.retryable ? "retryLater" : "refused") : "uploaded"
        }(Od)
      } catch (Xd) {
        return console.warn("Session replay manifest upload failed.", Xd), "retryLater"
      }
    }
  },
  41416: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => hd
    });
    var Wd = md(41387);
    const Fd = 16384,
      Rd = 100,
      Xd = (0, Wd.e)(',"domSegments":[]');

    function Kd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fd;
      const {
        domSegments: Kd,
        ...hd
      } = dd.manifest, vd = () => ({
        ...dd,
        manifest: {
          ...hd,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), Qd = (0, Wd.e)(JSON.stringify(vd())), td = [];
      let od = {
          request: vd(),
          items: []
        },
        Nd = Qd;
      const qd = (dd, Od) => {
          var md;
          return "domSegments" === Od ? null !== (md = dd.manifest.domSegments) && void 0 !== md ? md : [] : "creatorGrants" === Od ? dd.creatorGrants : dd.manifest[Od]
        },
        Hd = (dd, Od, md) => md + (dd.length > 0 ? 1 : "domSegments" === Od.list ? Xd : 0);
      for (const Fd of Od) {
        const dd = (0, Wd.e)(JSON.stringify(Fd.value));
        let Od = qd(od.request, Fd.list);
        od.items.length > 0 && (Nd + Hd(Od, Fd, dd) > md || Od.length >= Rd) && (td.push(od), od = {
          request: vd(),
          items: []
        }, Nd = Qd, Od = qd(od.request, Fd.list)), Nd += Hd(Od, Fd, dd), "domSegments" === Fd.list && (od.request.manifest.domSegments = Od), Od.push(Fd.value), od.items.push(Fd)
      }
      return td.push(od), td
    }

    function hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd;
      return Kd(dd, function(dd) {
        var Od;
        return [...dd.creatorGrants.map((dd => ({
          list: "creatorGrants",
          value: dd
        }))), ...dd.manifest.games.map((dd => ({
          list: "games",
          value: dd
        }))), ...dd.manifest.videoSegments.map((dd => ({
          list: "videoSegments",
          value: dd
        }))), ...dd.manifest.telemetrySegments.map((dd => ({
          list: "telemetrySegments",
          value: dd
        }))), ...(null !== (Od = dd.manifest.domSegments) && void 0 !== Od ? Od : []).map((dd => ({
          list: "domSegments",
          value: dd
        })))]
      }(dd), Od).map((dd => {
        let {
          request: Od
        } = dd;
        return Od
      }))
    }
  },
  41397: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    class Wd extends Error {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(dd), this.status = Od, this.storageCode = md
      }
    }
  },
  41381: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      f: () => Fd,
      j: () => Rd,
      n: () => Wd,
      o: () => Xd
    });
    const Wd = "/index/replay/segment-upload-url",
      Fd = "/index/replay/manifest";
    const Rd = 65536;

    function Xd(dd) {
      return {
        count: Math.ceil(dd.segmentDurationMs / dd.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * dd.bitrate / 8 * (dd.partDurationMs / 1e3)) + 32768
      }
    }
    const Kd = 432e5
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);