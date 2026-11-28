export const id = 64;
export const ids = [64];
export const modules = {
  41357: (dd, Od, md) => {
    function Wd() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function Fd(dd) {
      return dd instanceof Uint8Array && (!Wd() || !Buffer.isBuffer(dd))
    }

    function Rd(dd) {
      return dd instanceof ArrayBuffer
    }

    function Xd(dd) {
      return !!Wd() && Buffer.isBuffer(dd)
    }
    var Kd = md(41365).c,
      hd = md(41368).e,
      vd = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    Od.d = function(dd) {
      if (!Fd(dd) && !Rd(dd) && !Xd(dd)) throw new TypeError(vd);
      var Od = !1,
        md = !1;
      Fd(dd) ? Od = !0 : Rd(dd) && (md = !0, dd = new Uint8Array(dd));
      var Wd, Kd, Qd, td = new hd(dd),
        od = td.maxCompressedLength();
      if (Od ? (Wd = new Uint8Array(od), Qd = td.compressToBuffer(Wd)) : md ? (Wd = new ArrayBuffer(od), Kd = new Uint8Array(Wd), Qd = td.compressToBuffer(Kd)) : (Wd = Buffer.alloc(od), Qd = td.compressToBuffer(Wd)), !Wd.slice) {
        var Nd = new Uint8Array(Array.prototype.slice.call(Wd, 0, Qd));
        if (Od) return Nd;
        if (md) return Nd.buffer;
        throw new Error("Not implemented")
      }
      return Wd.slice(0, Qd)
    }
  },
  41368: (dd, Od) => {
    var md = new Array(15);

    function Wd(dd, Od) {
      return 506832829 * dd >>> Od
    }

    function Fd(dd, Od) {
      return dd[Od] + (dd[Od + 1] << 8) + (dd[Od + 2] << 16) + (dd[Od + 3] << 24)
    }

    function Rd(dd, Od, md) {
      return dd[Od] === dd[md] && dd[Od + 1] === dd[md + 1] && dd[Od + 2] === dd[md + 2] && dd[Od + 3] === dd[md + 3]
    }

    function Xd(dd, Od, md, Wd, Fd) {
      return md <= 60 ? (Wd[Fd] = md - 1 << 2, Fd += 1) : md < 256 ? (Wd[Fd] = 240, Wd[Fd + 1] = md - 1, Fd += 2) : (Wd[Fd] = 244, Wd[Fd + 1] = md - 1 & 255, Wd[Fd + 2] = md - 1 >>> 8, Fd += 3),
        function(dd, Od, md, Wd, Fd) {
          var Rd;
          for (Rd = 0; Rd < Fd; Rd++) md[Wd + Rd] = dd[Od + Rd]
        }(dd, Od, Wd, Fd, md), Fd + md
    }

    function Kd(dd, Od, md, Wd) {
      return Wd < 12 && md < 2048 ? (dd[Od] = 1 + (Wd - 4 << 2) + (md >>> 8 << 5), dd[Od + 1] = 255 & md, Od + 2) : (dd[Od] = 2 + (Wd - 1 << 2), dd[Od + 1] = 255 & md, dd[Od + 2] = md >>> 8, Od + 3)
    }

    function hd(dd, Od, md, Wd) {
      for (; Wd >= 68;) Od = Kd(dd, Od, md, 64), Wd -= 64;
      return Wd > 64 && (Od = Kd(dd, Od, md, 60), Wd -= 60), Kd(dd, Od, md, Wd)
    }

    function vd(dd, Od, Kd, vd, Qd) {
      for (var td = 1; 1 << td <= Kd && td <= 14;) td += 1;
      var od = 32 - (td -= 1);
      "undefined" === typeof md[td] && (md[td] = new Uint16Array(1 << td));
      var Nd, qd = md[td];
      for (Nd = 0; Nd < qd.length; Nd++) qd[Nd] = 0;
      var Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud = Od + Kd,
        xd = Od,
        Bd = Od,
        Sd = !0;
      if (Kd >= 15)
        for (Hd = Ud - 15, bd = Wd(Fd(dd, Od += 1), od); Sd;) {
          Yd = 32, Td = Od;
          do {
            if (yd = bd, gd = Yd >>> 5, Yd += 1, Td = (Od = Td) + gd, Od > Hd) {
              Sd = !1;
              break
            }
            bd = Wd(Fd(dd, Td), od), pd = xd + qd[yd], qd[yd] = Od - xd
          } while (!Rd(dd, Od, pd));
          if (!Sd) break;
          Qd = Xd(dd, Bd, Od - Bd, vd, Qd);
          do {
            for (wd = Od, Ed = 4; Od + Ed < Ud && dd[Od + Ed] === dd[pd + Ed];) Ed += 1;
            if (Od += Ed, Qd = hd(vd, Qd, wd - pd, Ed), Bd = Od, Od >= Hd) {
              Sd = !1;
              break
            }
            qd[Wd(Fd(dd, Od - 1), od)] = Od - 1 - xd, pd = xd + qd[Jd = Wd(Fd(dd, Od), od)], qd[Jd] = Od - xd
          } while (Rd(dd, Od, pd));
          if (!Sd) break;
          bd = Wd(Fd(dd, Od += 1), od)
        }
      return Bd < Ud && (Qd = Xd(dd, Bd, Ud - Bd, vd, Qd)), Qd
    }

    function Qd(dd) {
      this.array = dd
    }
    Qd.prototype.maxCompressedLength = function() {
      var dd = this.array.length;
      return 32 + dd + Math.floor(dd / 6)
    }, Qd.prototype.compressToBuffer = function(dd) {
      var Od, md = this.array,
        Wd = md.length,
        Fd = 0,
        Rd = 0;
      for (Rd = function(dd, Od, md) {
          do {
            Od[md] = 127 & dd, (dd >>>= 7) > 0 && (Od[md] += 128), md += 1
          } while (dd > 0);
          return md
        }(Wd, dd, Rd); Fd < Wd;) Rd = vd(md, Fd, Od = Math.min(Wd - Fd, 65536), dd, Rd), Fd += Od;
      return Rd
    }, Od.e = Qd
  },
  41365: (dd, Od) => {
    var md = [0, 255, 65535, 16777215, 4294967295];

    function Wd(dd, Od, md, Wd, Fd) {
      var Rd;
      for (Rd = 0; Rd < Fd; Rd++) md[Wd + Rd] = dd[Od + Rd]
    }

    function Fd(dd, Od, md, Wd) {
      var Fd;
      for (Fd = 0; Fd < Wd; Fd++) dd[Od + Fd] = dd[Od - md + Fd]
    }

    function Rd(dd) {
      this.array = dd, this.pos = 0
    }
    Rd.prototype.readUncompressedLength = function() {
      for (var dd, Od, md = 0, Wd = 0; Wd < 32 && this.pos < this.array.length;) {
        if (dd = this.array[this.pos], this.pos += 1, (Od = 127 & dd) << Wd >>> Wd !== Od) return -1;
        if (md |= Od << Wd, dd < 128) return md;
        Wd += 7
      }
      return -1
    }, Rd.prototype.uncompressToBuffer = function(dd) {
      for (var Od, Rd, Xd, Kd, hd = this.array, vd = hd.length, Qd = this.pos, td = 0; Qd < hd.length;)
        if (Od = hd[Qd], Qd += 1, 0 === (3 & Od)) {
          if ((Rd = 1 + (Od >>> 2)) > 60) {
            if (Qd + 3 >= vd) return !1;
            Xd = Rd - 60, Rd = 1 + ((Rd = hd[Qd] + (hd[Qd + 1] << 8) + (hd[Qd + 2] << 16) + (hd[Qd + 3] << 24)) & md[Xd]), Qd += Xd
          }
          if (Qd + Rd > vd) return !1;
          Wd(hd, Qd, dd, td, Rd), Qd += Rd, td += Rd
        } else {
          switch (3 & Od) {
            case 1:
              Rd = 4 + (Od >>> 2 & 7), Kd = hd[Qd] + (Od >>> 5 << 8), Qd += 1;
              break;
            case 2:
              if (Qd + 1 >= vd) return !1;
              Rd = 1 + (Od >>> 2), Kd = hd[Qd] + (hd[Qd + 1] << 8), Qd += 2;
              break;
            case 3:
              if (Qd + 3 >= vd) return !1;
              Rd = 1 + (Od >>> 2), Kd = hd[Qd] + (hd[Qd + 1] << 8) + (hd[Qd + 2] << 16) + (hd[Qd + 3] << 24), Qd += 4
          }
          if (0 === Kd || Kd > td) return !1;
          Fd(dd, td, Kd, Rd), td += Rd
        } return !0
    }, Od.c = Rd
  },
  41352: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      SessionReplayRecorder: () => Rm
    });
    const Wd = {
        maxFps: 30,
        bitrate: 178e4,
        minBitrate: 5e5,
        maxMacroblocks: 3600,
        keyframeIntervalMs: 2e3,
        segmentDurationMs: 3e4,
        manifestIntervalMs: 3e4,
        partDurationMs: 4e3,
        captureBudgetMsPerSecond: 20,
        captureFrameCostFloorMs: .6,
        softwareEncoderPlatforms: ["windows", "macos"],
        videoFrameGrabPlatforms: ["android"],
        streamGrabEngines: ["gecko"],
        skipLowMemoryDevices: !1
      },
      Fd = {
        ...Wd,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        captureBudgetMsPerSecond: 60,
        skipLowMemoryDevices: !0
      },
      Rd = {
        desktop: Wd,
        mobile: Fd,
        tablet: Fd
      };
    var Xd = md(3860),
      Kd = md(32);
    const hd = 4194304,
      vd = 16777216;
    var Qd = md(4615);
    const td = [2, 4, 9, 3],
      od = Qd.f,
      Nd = [od.MouseInteraction, od.MouseMove, od.TouchMove],
      qd = [od.MouseMove, od.MouseInteraction, od.Scroll, od.ViewportResize, od.Input, od.TouchMove, od.MediaInteraction, od.Drag],
      Hd = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function yd(dd) {
      if ("object" !== typeof dd || null === dd || Array.isArray(dd)) return !1;
      const Od = dd.timestamp;
      return "number" === typeof Od && Od > 0 && Od <= 864e13
    }

    function bd(dd) {
      var Od;
      return dd.type === Qd.b.IncrementalSnapshot ? null === (Od = dd.data) || void 0 === Od ? void 0 : Od.source : void 0
    }
    class Td {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(dd) {
        this.eventCount++;
        const Od = bd(dd);
        this.timestamps.push(dd.timestamp), this.active.push(function(dd) {
          var Od;
          return qd.includes(bd(dd)) || dd.type === Qd.b.Custom && (null === (Od = dd.data) || void 0 === Od ? void 0 : Od.tag) === Qd.j.active
        }(dd));
        const md = function(dd) {
          var Od;
          const md = dd.data;
          if (dd.type === Qd.b.Custom && "$json_ld" === (null === md || void 0 === md ? void 0 : md.tag)) return;
          const Wd = "string" === typeof(null === md || void 0 === md ? void 0 : md.href) ? md.href.trim() : void 0,
            Fd = "string" === typeof(null === md || void 0 === md || null === (Od = md.payload) || void 0 === Od ? void 0 : Od.href) ? md.payload.href.trim() : void 0;
          return Wd || Fd || void 0
        }(dd);
        md && this.addUrl(md), Od === od.MouseInteraction && td.includes(dd.data.type) && this.clickCount++, Od === od.Input && this.keypressCount++, Nd.includes(Od) && this.mouseActivityCount++;
        const Wd = dd.data;
        if (dd.type === Qd.b.Plugin && "rrweb/console@1" === (null === Wd || void 0 === Wd ? void 0 : Wd.plugin)) {
          var Fd;
          const dd = Hd.get(null === (Fd = Wd.payload) || void 0 === Fd ? void 0 : Fd.level);
          "warn" === dd ? this.consoleWarnCount++ : "error" === dd ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(dd) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: dd,
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
      addUrl(dd) {
        const Od = dd.slice(0, 4096);
        this.firstUrl ??= Od, this.urls.size < 25 && !this.urls.has(Od) && this.urlsLength + Od.length <= 8192 && (this.urls.add(Od), this.urlsLength += Od.length)
      }
      activeMs() {
        var dd;
        const Od = this.timestamps.map(((dd, Od) => Od)).sort(((dd, Od) => this.timestamps[dd] - this.timestamps[Od]));
        let md = 0,
          Wd = null,
          Fd = 0;
        for (const Xd of Od) {
          const dd = this.timestamps[Xd],
            Od = this.active[Xd],
            Kd = !Wd || Od && !Wd.isActive || Wd.isActive && Fd + 5e3 < dd;
          var Rd;
          if (Fd = Od ? dd : Fd, Kd) null !== (Rd = Wd) && void 0 !== Rd && Rd.isActive && (md += Math.max(1, Wd.end - Wd.start)), Wd = {
            start: dd,
            end: dd,
            isActive: Od
          };
          else Wd.end = dd
        }
        return null !== (dd = Wd) && void 0 !== dd && dd.isActive && (md += Math.max(1, Wd.end - Wd.start)), Math.floor(md)
      }
    }
    const pd = 5592405.333333333;
    class Yd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = dd, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new Td, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get Nt() {
        return 0 === this.lines.length
      }
      get tooBigForExit() {
        return this.holdsSnapshot || this.chars >= 262144
      }
      add(dd) {
        const Od = dd.events.filter(yd),
          md = Od.map((Od => JSON.stringify([dd.windowId, Od]) + "\n"));
        if (0 === md.length) return [];
        const Wd = [],
          Fd = md.reduce(((dd, Od) => dd + Od.length), 0);
        !this.Nt && this.chars + Fd > this.chunkChars && Wd.push(this.finish());
        let Rd = !1;
        return Od.forEach(((dd, Od) => {
          const Fd = md[Od];
          !this.Nt && this.chars + Fd.length > this.chunkChars && (Wd.push(this.finish()), Rd = !1), Rd || (this.counter.addMessage(), Rd = !0), this.counter.addEvent(dd), this.lines.push(Fd), this.chars += Fd.length, this.startMs = Math.min(this.startMs, dd.timestamp), this.endMs = Math.max(this.endMs, dd.timestamp), this.holdsSnapshot ||= dd.type === Qd.b.FullSnapshot || dd.type === Qd.b.Meta
        })), Wd.filter((dd => null !== dd))
      }
      finish() {
        if (this.Nt) return null;
        const {
          startMs: dd,
          endMs: Od,
          counter: md,
          holdsSnapshot: Wd,
          chunkIndex: Fd,
          tailedChars: Rd
        } = this, Xd = {
          text: this.lines.join(""),
          startMs: dd,
          endMs: Od,
          counter: md,
          holdsSnapshot: Wd,
          chunkIndex: Fd,
          tailedChars: Rd
        };
        return this.reset(), Xd
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > pd) return null;
        const dd = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, dd
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new Td, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function gd(dd) {
      let {
        text: Od
      } = dd;
      return Od.length <= pd
    }

    function wd(dd) {
      const {
        text: Od,
        startMs: md,
        endMs: Wd,
        counter: Fd,
        chunkIndex: Rd,
        tailedChars: Xd
      } = dd;
      return Xd !== Od.length && gd(dd) ? {
        chunkIndex: Rd,
        fromChar: Xd,
        text: Od.slice(Xd),
        startMs: md,
        endMs: Wd,
        summary: Fd.finish(0)
      } : null
    }

    function Ed(dd, Od) {
      let {
        startMs: md,
        endMs: Wd,
        counter: Fd,
        holdsSnapshot: Rd
      } = dd, {
        bytes: Xd,
        inflatedBytes: Kd
      } = Od;
      return Xd.byteLength > hd || Kd > vd ? (console.warn(`Session replay: dropped a ${Kd}-byte page recording chunk, over the size limits`), null) : {
        bytes: Xd,
        startMs: md,
        endMs: Wd,
        summary: Fd.finish(Kd),
        holdsSnapshot: Rd
      }
    }
    var Jd = md(41354);
    class Ud {
      constructor(dd, Od, md, Wd) {
        this.uploader = dd, this.timing = Od, this.journal = md, this.packer = Wd, this.writer = new Yd, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(dd) {
        this.pack(this.writer.add(dd)), (this.cutNext || this.timing.cutsEachBatch() || this.writer.tooBigForExit) && (this.cutNext = !1, this.cut());
        const Od = this.journal;
        null === Od || null !== this.tailTimer || this.writer.Nt || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const dd = this.writer.takeTail();
          null !== dd && Od.domTail(dd)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const dd = this.writer.finish();
        this.pack(null === dd ? [] : [dd])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.Nt) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const dd = this.packing[this.packing.length - 1];
        return void 0 !== dd ? new Promise((Od => {
          const md = dd.onQueued;
          dd.onQueued = () => {
            null === md || void 0 === md || md(), Od()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(dd) {
        const Od = dd.filter((dd => {
            const Od = function(dd) {
              let {
                text: Od
              } = dd;
              return Od.length <= vd || (console.warn(`Session replay: dropped a page recording chunk of ${Od.length} characters, over the size limits`), !1)
            }(dd);
            var md;
            Od || (null === (md = this.journal) || void 0 === md || md.domTailDropped(dd.chunkIndex));
            return Od
          })),
          md = this.journalWorks() && Od.every((dd => gd(dd))) && this.packing.every((dd => dd.journalled));
        if (this.timing.packsNow(md)) {
          for (const dd of Od) this.packing.push({
            text: dd,
            packed: null,
            journalled: this.tailHolds(dd)
          });
          for (const dd of [...this.packing]) this.packHere(dd);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const Wd of Od) {
          const dd = null === this.journal ? null : wd(Wd);
          null !== dd && this.journal.domTail(dd);
          const Od = {
            text: Wd,
            packed: null,
            journalled: this.tailHolds(Wd)
          };
          this.packing.push(Od), this.packer.pack(Wd.text).then((dd => {
            Od.packed = dd, this.queuePacked()
          }), (() => {
            this.packHere(Od), this.queuePacked()
          }))
        }
      }
      packHere(dd) {
        const Od = this.packing.indexOf(dd);
        if (!(Od < 0)) try {
          dd.packed ??= (0, Jd.c)(dd.text.text)
        } catch (Fd) {
          var md, Wd;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", Fd), this.packing.splice(Od, 1), null === (md = this.journal) || void 0 === md || md.domTailDropped(dd.text.chunkIndex), null === (Wd = dd.onQueued) || void 0 === Wd || Wd.call(dd)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(dd) {
        return this.journalWorks() && gd(dd)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: dd,
            packed: Od,
            onQueued: md
          } = this.packing.shift();
          this.enqueue(dd.chunkIndex, Ed(dd, Od)), null === md || void 0 === md || md()
        }
      }
      enqueue(dd, Od) {
        var md;
        if (null === Od) return void(null === (md = this.journal) || void 0 === md || md.domTailDropped(dd));
        const {
          startMs: Wd,
          endMs: Fd,
          summary: Rd,
          holdsSnapshot: Xd
        } = Od, Kd = Od.bytes.buffer, hd = {
          startMs: Wd,
          endMs: Fd,
          byteLength: Kd.byteLength,
          summary: Rd
        }, vd = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: Kd,
          meta: {
            type: "dom",
            chunk: hd
          },
          dropLast: Xd
        });
        var Qd, td;
        null === vd ? null === (Qd = this.journal) || void 0 === Qd || Qd.domTailDropped(dd) : null === (td = this.journal) || void 0 === td || td.domQueued(vd, Kd, hd, dd)
      }
    }
    var xd = md(41370);
    var Bd = md(41372),
      Sd = md(4087),
      sd = md(107),
      ud = md(118),
      Vd = md(46),
      Ad = md(5359);
    const rd = {
      logStats: !1
    };

    function Gd(dd) {
      const Od = Vd.k.getItem(dd);
      return "number" === typeof Od && Number.isFinite(Od) ? Od : null
    }

    function nd(dd, Od, md, Wd) {
      const Fd = Vd.k.getItem(dd);
      return Fd === Od ? [(0, sd.getOperatingSystem)()] : Fd === md ? [] : Wd
    }

    function Ld(dd) {
      const Od = Vd.k.getItem("replayGrab");
      return "stream" === Od ? [(0, Sd.d)()] : "videoFrame" === Od || "bitmap" === Od ? [] : dd
    }
    const Pd = "/v1/release",
      zd = hd;
    var cd = md(1268),
      jd = md(41387),
      Dd = md(41390),
      ed = md(41397);

    function Id(dd) {
      return `replayJoiner/${dd}`
    }
    class ld {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jd.c;
        this.baseUrl = dd, this.keepalive = Od
      }
      postPart(dd, Od) {
        const md = (0, Dd.f)(dd, Od),
          Wd = 15e3 + (Fd = md.size, Math.ceil(Fd / 16384 * 1e3));
        var Fd;
        return this.post("/v1/part", md, md.size, Wd, dd.sequence)
      }
      finish(dd) {
        const Od = JSON.stringify(dd);
        return this.post("/v1/finish", Od, (0, jd.e)(Od), 3e4, dd.sequence)
      }
      release(dd) {
        return !this.keepalive.isInFlight(Id(dd.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${Pd}`, JSON.stringify(dd))
      }
      async post(dd, Od, md, Wd, Fd) {
        const Rd = `${this.baseUrl}${dd}`,
          Xd = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: Od,
            signal: (0, cd.s)(Wd)
          },
          Kd = md <= jd.b ? await this.keepalive.fetch(Rd, Xd, md, Id(Fd)) : await fetch(Rd, Xd);
        if (!Kd.ok) throw new ed.b(`Part joiner ${dd} failed with ${Kd.status}`, Kd.status);
        return await Kd.json()
      }
    }

    function Cd(dd) {
      return {
        releaseUrl: `${dd.url}${Pd}`,
        token: dd.token,
        relay: {
          url: `${dd.url}/v1/relay`,
          maxBytes: zd
        }
      }
    }
    var Zd = md(7458),
      kd = md(41405),
      fd = md(41407),
      Md = md(41416);

    function dO() {
      return (0, Bd.c)().manifestUrl
    }
    const OO = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class mO {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = Od, this.sendEnabled = md, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...OO,
          ...Wd
        };
        const Fd = Math.round((0, kd.b)());
        this.manifest = {
          recordingId: dd,
          startedAtMs: Fd,
          endedAtMs: Fd,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(dd, Od, md) {
        const Wd = {
            sequence: dd,
            ...Od,
            startMs: Math.round(Od.startMs),
            endMs: Math.round(Od.endMs),
            ...null === md ? {} : {
              parts: md
            }
          },
          Fd = this.manifest.videoSegments.findIndex((Od => Od.sequence === dd)); - 1 === Fd ? this.manifest.videoSegments.push(Wd) : this.manifest.videoSegments[Fd] = Wd, this.sendSoon()
      }
      setStill(dd, Od) {
        var md, Wd;
        dd > (null !== (md = null === (Wd = this.manifest.still) || void 0 === Wd ? void 0 : Wd.atMs) && void 0 !== md ? md : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(dd),
          sequence: Od
        }, this.sendSoon())
      }
      addTelemetrySegment(dd, Od, md) {
        this.manifest.telemetrySegments.push({
          sequence: dd,
          startMs: Math.round(Od),
          endMs: Math.round(md)
        }), this.sendSoon()
      }
      addDomSegment(dd) {
        this.pendingDom.add(dd), this.sendSoon()
      }
      addCreatorGrant(dd, Od) {
        this.creatorGrants.set(dd, Od)
      }
      gameJoined(dd) {
        this.gameLeft(), this.manifest.games.push({
          ...dd,
          joinedAtMs: Math.round((0, kd.b)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(dd) {
        const Od = this.manifest.games.at(-1);
        return !(!Od || (null === dd ? null !== Od.leftAtMs : Od.gameNameWithVariation !== dd)) && (Od.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(dd) {
        const Od = this.manifest.games.at(-1);
        Od && null === Od.leftAtMs && (Od[dd] = !0)
      }
      updateCurrentStay(dd) {
        var Od, md, Wd;
        const Fd = this.manifest.games.at(-1);
        if (!Fd || null !== Fd.leftAtMs) return !1;
        const Rd = (0, Zd.k)(Fd.furthestStep, dd.furthestStep),
          Xd = Math.max(null !== (Od = Fd.unboundKeyPresses) && void 0 !== Od ? Od : 0, null !== (md = dd.unboundKeyPresses) && void 0 !== md ? md : 0);
        return (Rd !== Fd.furthestStep || Xd !== (null !== (Wd = Fd.unboundKeyPresses) && void 0 !== Wd ? Wd : 0)) && (void 0 !== Rd && (Fd.furthestStep = Rd), Xd > 0 && (Fd.unboundKeyPresses = Xd), !0)
      }
      gameLeft() {
        const dd = this.manifest.games.at(-1);
        dd && null === dd.leftAtMs && (dd.leftAtMs = Math.round((0, kd.b)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(dd) {
        this.schedule(1e3, dd)
      }
      send() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var Od;
        if (this.sending) return void(this.queuedSend = WO(null !== (Od = this.queuedSend) && void 0 !== Od ? Od : [], dd));
        const md = this.prepareSend(dd);
        null !== md && (this.sending = !0, this.postInTurn(md).then((dd => {
          this.sending = !1, this.retries = "retryLater" === dd ? this.retries + 1 : 0;
          const Od = this.queuedSend;
          null !== Od ? (this.queuedSend = null, this.send(Od)) : "retryLater" === dd && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: md
          }
          of null !== (Od = this.prepareSend(dd)) && void 0 !== Od ? Od : []) {
          var Od;
          jd.c.sendBeacon(dO(), JSON.stringify(md)) || (0, fd.d)(dO(), md)
        }
      }
      async postInTurn(dd) {
        for (const {
            request: Od,
            items: md
          }
          of dd) {
          const dd = await (0, fd.d)(dO(), Od);
          if ("retryLater" === dd) return dd;
          for (const Od of md) Od.ack("uploaded" === dd);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(dd, Od) {
        const md = Date.now() + dd;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= md) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const Wd = setTimeout((() => {
          this.send(Od())
        }), dd);
        this.sendTimer = {
          timer: Wd,
          dueMs: md
        }
      }
      prepareSend(dd) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, kd.b)());
        const Od = this.pendingItems(dd);
        this.options.onSend({
          ...this.manifest,
          games: Od.flatMap((dd => "games" === dd.list ? [dd.value] : []))
        });
        const {
          recordingId: md,
          startedAtMs: Wd,
          endedAtMs: Fd,
          still: Rd
        } = this.manifest, Xd = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: md,
            startedAtMs: Wd,
            endedAtMs: Fd,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === Rd ? {} : {
              still: Rd
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, Md.b)(Xd, Od)
      }
      pendingItems(dd) {
        const Od = [];
        for (const Wd of this.creatorGrants.values()) this.ackedGrants.has(Wd) || Od.push({
          list: "creatorGrants",
          value: Wd,
          ack: () => {
            this.ackedGrants.add(Wd)
          }
        });
        for (const Wd of this.manifest.games) {
          const dd = JSON.stringify(Wd);
          this.ackedGames.get(Wd) !== dd && Od.push({
            list: "games",
            value: {
              ...Wd
            },
            ack: () => {
              this.ackedGames.set(Wd, dd)
            }
          })
        }
        for (const Wd of this.manifest.videoSegments) this.ackedVideo.get(Wd.sequence) !== Wd && Od.push({
          list: "videoSegments",
          value: Wd,
          ack: dd => {
            this.ackedVideo.set(Wd.sequence, Wd), dd && this.options.onListed({
              list: "videoSegments",
              value: Wd
            })
          }
        });
        const md = new Set;
        for (const Wd of this.manifest.telemetrySegments) md.add(Wd.sequence), this.ackedTelemetry.has(Wd) || Od.push({
          list: "telemetrySegments",
          value: Wd,
          ack: dd => {
            this.ackedTelemetry.add(Wd), dd && this.options.onListed({
              list: "telemetrySegments",
              value: Wd
            })
          }
        });
        for (const Wd of this.pendingDom) Od.push({
          list: "domSegments",
          value: Wd,
          ack: dd => {
            this.pendingDom.delete(Wd), dd && this.options.onListed({
              list: "domSegments",
              value: Wd
            })
          }
        });
        for (const Wd of WO([], dd)) md.has(Wd.sequence) || Od.push({
          list: "telemetrySegments",
          value: Wd,
          ack: () => {}
        });
        return Od
      }
    }

    function WO(dd, Od) {
      const md = [...dd];
      for (const Wd of Od) md.some((dd => dd.sequence === Wd.sequence)) || md.push({
        sequence: Wd.sequence,
        startMs: Math.round(Wd.startMs),
        endMs: Math.round(Wd.endMs)
      });
      return md
    }
    var FO = md(41381),
      RO = md(5375);

    function XO(dd) {
      return {
        ...dd,
        videoSegments: [],
        telemetrySegments: [],
        games: dd.games.map((dd => ({
          ...dd
        })))
      }
    }
    class KO {
      constructor(dd, Od, md, Wd) {
        var Fd;
        this.journal = dd, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: Od.recordingId,
          uploadToken: Od.uploadToken,
          expiresAtMs: Od.expiresAtMs,
          nextVideoSequence: 0,
          manifest: XO(md),
          endpoints: Wd,
          lateUploadUntilMs: Od.expiresAtMs + FO.e,
          ...void 0 === Od.partJoiner ? {} : {
            partJoiner: Cd(Od.partJoiner)
          }
        }, null === (Fd = navigator.locks) || void 0 === Fd || Fd.request((0, RO.s)(Od.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(dd) {
        this.record.manifest = XO(dd), this.putRecording()
      }
      videoQueued(dd, Od) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, Od + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), dd, Od)
      }
      videoPartLanded(dd, Od, md) {
        this.landedVideo.set(dd, {
          segmentId: dd,
          ...Od
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: dd,
          ...Od
        }, md)
      }
      telemetryQueued(dd, Od, md, Wd) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: dd,
          startMs: md,
          endMs: Wd,
          bytes: Od
        })
      }
      videoUploaded(dd) {
        this.journal.removeVideoChunks(this.record.recordingId, dd)
      }
      videoSettled(dd) {
        this.landedVideo.delete(dd), this.journal.removeVideo(this.record.recordingId, dd)
      }
      telemetryLanded(dd, Od, md, Wd) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: dd,
          startMs: md,
          endMs: Wd,
          bytes: Od,
          landed: !0
        })
      }
      telemetrySettled(dd) {
        this.journal.removeTelemetry(this.record.recordingId, dd)
      }
      domQueued(dd, Od, md, Wd) {
        var Fd;
        this.record.nextDomSequence = Math.max(null !== (Fd = this.record.nextDomSequence) && void 0 !== Fd ? Fd : 0, dd + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: dd,
          chunk: md,
          bytes: Od
        }, Wd)
      }
      domTail(dd) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...dd
        })
      }
      domTailDropped(dd) {
        this.journal.removeDomTail(this.record.recordingId, dd)
      }
      domLanded(dd, Od) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: dd,
          chunk: Od,
          bytes: null
        })
      }
      domSettled(dd) {
        this.journal.removeDom(this.record.recordingId, dd)
      }
      setMarker() {
        Vd.k.setItem(RO.l, !0)
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
    class hO {
      constructor(dd) {
        this.deps = dd, this.pageHiding = !1, this.exitFlushedAtMs = -1 / 0
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(dd) {
        document.addEventListener("visibilitychange", (() => {
          const dd = document.hidden;
          this.deps.writeEvent(dd ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: dd
          }), dd ? (this.flushTelemetryOnExit(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording()) : this.exitFlushedAtMs = -1 / 0
        }), {
          signal: dd
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: dd
        }), window.addEventListener("pagehide", (dd => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.flushTelemetryOnExit(), this.deps.stills.beacon(), this.sendManifest(), dd.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: dd
        })
      }
      flushTelemetryOnExit() {
        const dd = performance.now();
        dd - this.exitFlushedAtMs > 1e3 && (this.deps.flushTelemetry(), this.exitFlushedAtMs = dd)
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((dd => {
          let {
            sequence: Od,
            meta: md
          } = dd;
          return "telemetry" === md.type ? [{
            sequence: Od,
            startMs: md.startMs,
            endMs: md.endMs
          }] : []
        }))
      }
    }
    var vO = md(37635),
      QO = md.n(vO);

    function tO() {
      return QO()('/*! For license information please see sessionReplayVideo.worker.a5cacc48.worker.js.LICENSE.txt */\n(()=>{var dd={13:()=>{}},Od={};function md(Wd){var Fd=Od[Wd];if(void 0!==Fd)return Fd.exports;var Rd=Od[Wd]={exports:{}};return dd[Wd](Rd,Rd.exports,md),Rd.exports}(()=>{var dd,Od=Object.getPrototypeOf?dd=>Object.getPrototypeOf(dd):dd=>dd.__proto__;md.t=function(Wd,Fd){if(1&Fd&&(Wd=this(Wd)),8&Fd)return Wd;if("object"===typeof Wd&&Wd){if(4&Fd&&Wd.__esModule)return Wd;if(16&Fd&&"function"===typeof Wd.then)return Wd}var Rd=Object.create(null);md.r(Rd);var Xd={};dd=dd||[null,Od({}),Od([]),Od(Od)];for(var Kd=2&Fd&&Wd;"object"==typeof Kd&&!~dd.indexOf(Kd);Kd=Od(Kd))Object.getOwnPropertyNames(Kd).forEach((dd=>Xd[dd]=()=>Wd[dd]));return Xd.default=()=>Wd,md.d(Rd,Xd),Rd}})(),md.d=(dd,Od)=>{for(var Wd in Od)md.o(Od,Wd)&&!md.o(dd,Wd)&&Object.defineProperty(dd,Wd,{enumerable:!0,get:Od[Wd]})},md.o=(dd,Od)=>Object.prototype.hasOwnProperty.call(dd,Od),md.r=dd=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(dd,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(dd,"__esModule",{value:!0})};const Wd="bloxdSessionReplayTails";const Fd=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function Rd(dd){return new Promise(((Od,md)=>{dd.onsuccess=()=>{Od(dd.result)},dd.onerror=()=>{md(dd.error)}}))}function Xd(dd){return new Promise(((Od,md)=>{dd.oncomplete=()=>{Od()},dd.onerror=()=>{md(dd.error)},dd.onabort=()=>{var Od;md(null!==(Od=dd.error)&&void 0!==Od?Od:new Error("IndexedDB transaction aborted"))}}))}function Kd(dd){return IDBKeyRange.bound([dd],[dd,[]])}function hd(dd,Od){return IDBKeyRange.bound([dd,Od],[dd,Od,[]])}class vd{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(dd){this.write(["recordings"],(Od=>{Od.objectStore("recordings").put(dd)}))}putVideoSequence(dd,Od,md){this.write(["recordings","videoSequences"],(Wd=>{Wd.objectStore("recordings").put(dd),Wd.objectStore("videoSequences").put({recordingId:dd.recordingId,segmentId:Od,sequence:md})}))}appendVideo(dd,Od){this.write(["videoHeaders","videoChunks"],(md=>{md.objectStore("videoHeaders").put(dd);const Wd=md.objectStore("videoChunks");for(const dd of Od)Wd.put(dd)}))}putVideoProgress(dd,Od){this.write(["videoProgress","videoChunks"],(md=>{if(md.objectStore("videoProgress").put(dd),Od>0){const{recordingId:Wd,segmentId:Fd}=dd;md.objectStore("videoChunks").delete(IDBKeyRange.bound([Wd,Fd,0],[Wd,Fd,Od],!1,!0))}}))}removeVideoChunks(dd,Od){this.write(["videoChunks"],(md=>{md.objectStore("videoChunks").delete(hd(dd,Od))}))}removeVideo(dd,Od){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(md=>{md.objectStore("videoHeaders").delete([dd,Od]),md.objectStore("videoChunks").delete(hd(dd,Od)),md.objectStore("videoSequences").delete([dd,Od]),md.objectStore("videoProgress").delete([dd,Od])}))}putTelemetry(dd){this.write(["telemetry"],(Od=>{Od.objectStore("telemetry").put(dd)}))}removeTelemetry(dd,Od){this.write(["telemetry"],(md=>{md.objectStore("telemetry").delete([dd,Od])}))}putDom(dd){this.write(["dom"],(Od=>{Od.objectStore("dom").put(dd)}))}queueDom(dd,Od,md){this.write(["recordings","dom","domTail"],(Wd=>{Wd.objectStore("recordings").put(dd),Wd.objectStore("dom").put(Od),Wd.objectStore("domTail").delete(hd(Od.recordingId,md))}),(Wd=>{console.warn(`Session replay couldn\'t journal page recording chunk ${Od.sequence}; a closing tab may lose it.`,Wd),this.write(["recordings","domTail"],(Wd=>{Wd.objectStore("recordings").put(dd),Wd.objectStore("domTail").delete(hd(Od.recordingId,md))}))}))}putDomTail(dd){this.tailRecordings.add(dd.recordingId),this.write(["domTail"],(Od=>{Od.objectStore("domTail").put(dd)}))}removeDomTail(dd,Od){this.write(["domTail"],(md=>{md.objectStore("domTail").delete(hd(dd,Od))}))}removeDom(dd,Od){this.write(["dom"],(md=>{md.objectStore("dom").delete([dd,Od])}))}async listRecordings(){const dd=await this.open();return await Rd(dd.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(dd){const Od=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),md=Kd(dd.recordingId),Wd=dd=>Rd(Od.objectStore(dd).getAll(md)),[Fd,Xd,hd,vd,Qd,td,od]=await Promise.all([Wd("videoHeaders"),Wd("videoChunks"),Wd("videoSequences"),Wd("videoProgress"),Wd("telemetry"),Wd("dom"),Wd("domTail")]);return{recording:dd,telemetry:Qd,dom:td,domTails:od,video:Fd.map((dd=>{var Od,md,Wd;return{header:dd,sequence:null!==(Od=null===(md=hd.find((Od=>Od.segmentId===dd.segmentId)))||void 0===md?void 0:md.sequence)&&void 0!==Od?Od:null,progress:null!==(Wd=vd.find((Od=>Od.segmentId===dd.segmentId)))&&void 0!==Wd?Wd:null,chunks:Xd.filter((Od=>Od.segmentId===dd.segmentId))}}))}}async deleteRecording(dd){const Od=(await this.open()).transaction([...Fd],"readwrite");Od.objectStore("recordings").delete(dd);for(const md of Fd.slice(1))Od.objectStore(md).delete(Kd(dd));await Xd(Od)}async forgetSent(dd,Od){const md=(await this.open()).transaction([...Fd],"readwrite"),{recordingId:Wd}=dd;md.objectStore("recordings").put(dd);for(const Fd of Od.videoSegmentIds)md.objectStore("videoHeaders").delete([Wd,Fd]),md.objectStore("videoChunks").delete(hd(Wd,Fd)),md.objectStore("videoSequences").delete([Wd,Fd]),md.objectStore("videoProgress").delete([Wd,Fd]);for(const Fd of Od.telemetrySequences)md.objectStore("telemetry").delete([Wd,Fd]);for(const Fd of Od.domSequences)md.objectStore("dom").delete([Wd,Fd]);for(const Fd of Od.domTailChunks)md.objectStore("domTail").delete(hd(Wd,Fd));await Xd(md)}write(dd,Od){let md=arguments.length>2&&void 0!==arguments[2]?arguments[2]:dd=>{this.fail(dd)};if(this.failed)return;const Wd=Wd=>{try{var Fd;const Rd=Wd.transaction(dd,"readwrite");Od(Rd),null===(Fd=Rd.commit)||void 0===Fd||Fd.call(Rd),Xd(Rd).catch(md)}catch(Rd){md(Rd)}};null===this.db?this.open().then(Wd,(dd=>{this.fail(dd)})):Wd(this.db)}fail(dd){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",dd),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const dd=dd=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",dd)};try{const Od=this.db.transaction(["domTail"],"readwrite");for(const dd of this.tailRecordings)Od.objectStore("domTail").delete(Kd(dd));Xd(Od).catch(dd)}catch(Od){dd(Od)}}open(){return this.opening??=new Promise(((dd,Od)=>{const md=indexedDB.open(Wd,4);md.onupgradeneeded=dd=>{const Od=md.result;dd.oldVersion<1&&(Od.createObjectStore("recordings",{keyPath:"recordingId"}),Od.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),Od.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),Od.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),Od.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),dd.oldVersion<2&&Od.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),dd.oldVersion<3&&Od.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),Od.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let Fd=!1;md.onblocked=()=>{Fd=!0,Od(new Error("An older tab holds the upload journal at an earlier version"))},md.onsuccess=()=>{Fd?md.result.close():(this.db=md.result,this.db.onversionchange=()=>{var dd;this.dropTails(),null===(dd=this.db)||void 0===dd||dd.close(),this.db=null,this.opening=null},dd(md.result))},md.onerror=()=>{Od(md.error)}})),this.opening}}const Qd=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class td{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return Qd[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(dd){this.firstSampleMs??=dd.nowMs;const Od=null!==dd.pingMs&&dd.pingMs>300,md=dd.nowMs-this.firstSampleMs>=3e4;md&&(null!==dd.gameFps&&dd.gameFps<24||Od)?this.gameStrugglingSinceMs??=dd.nowMs:this.gameStrugglingSinceMs=null,md&&dd.encoderBackpressureDrops>0?this.backpressureSinceMs??=dd.nowMs:this.backpressureSinceMs=null;const Wd=null!==this.backpressureSinceMs&&dd.nowMs-this.backpressureSinceMs>=3e3,Fd=Wd||null!==this.gameStrugglingSinceMs&&dd.nowMs-this.gameStrugglingSinceMs>=1e4,Rd=this.steppedDownForGameFps?45:24,Xd=0===dd.encoderBackpressureDrops&&!Od&&(null===dd.gameFps||dd.gameFps>=Rd);return Fd?(this.healthySinceMs=null,this.level<Qd.length-1&&dd.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=dd.nowMs,this.lastChangeReason=Wd?"encoderBackpressure":Od?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):Xd&&0!==this.level?(this.healthySinceMs??=dd.nowMs,dd.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=dd.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function od(dd,Od){return dd.width===Od.width&&dd.height===Od.height}function Nd(dd){return Math.max(2,2*Math.floor(dd/2))}function qd(dd){return Math.ceil(dd.width/16)*Math.ceil(dd.height/16)}function Hd(dd,Od,md){const Wd=dd.bitrate*qd(Od)/dd.maxMacroblocks;return md*Math.min(dd.bitrate,Math.max(dd.minBitrate,Wd/md))}class yd{constructor(dd){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/dd}setMaxFps(dd){this.intervalMs=1e3/dd}shouldKeep(dd){return!(dd<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=dd-this.nextDueMs>this.intervalMs?dd+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const bd=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],Td=["variable","constant"],pd=["realtime","quality"],Yd=["quality","realtime"];class gd{constructor(){this.canvas=null,this.context=null}scale(dd,Od){if(dd.displayWidth===Od.width&&dd.displayHeight===Od.height)return dd;return this.contextFor(Od).drawImage(dd,0,0,Od.width,Od.height),new VideoFrame(this.canvas,{timestamp:dd.timestamp,alpha:"discard"})}contextFor(dd){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(dd.width,dd.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===dd.width&&this.canvas.height===dd.height||(this.canvas.width=dd.width,this.canvas.height=dd.height),this.context}}const wd=[...[.7,.6,.5,.42,.35].map((dd=>({width:640,quality:dd}))),{width:480,quality:.35},{width:360,quality:.35}],Ed=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class Jd{constructor(dd,Od){this.steps=dd,this.targetBytes=Od,this.index=0}get step(){return this.steps[this.index]}record(dd){dd>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):dd<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class Ud{constructor(dd){this.post=dd,this.full=new Jd(wd,28e3),this.small=new Jd(Ed,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(dd,Od){if(!(this.failed||this.encoding||dd.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=dd.timestamp;try{const md=xd(dd,dd.displayWidth,dd.displayHeight,this.full.step.width),Wd=xd(md,md.width,md.height,this.small.step.width);this.encoding=!0,this.encode(md,Wd,Od).finally((()=>{this.encoding=!1}))}catch(md){this.fail(md)}}}async encode(dd,Od,md){try{const[Wd,Fd]=await Promise.all([dd.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),Od.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(Wd.size),this.small.record(Fd.size);const Rd=await Wd.arrayBuffer(),Xd=Fd.size<=8192?await Fd.arrayBuffer():null;this.post({type:"still",bytes:Rd,small:Xd,atMs:md},null===Xd?[Rd]:[Rd,Xd])}catch(Wd){this.fail(Wd)}}fail(dd){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",dd)}}function xd(dd,Od,md,Wd){const Fd=Math.min(Wd,Od),Rd=Math.max(1,Math.round(md*Fd/Od)),Xd=new OffscreenCanvas(Fd,Rd),Kd=Xd.getContext("2d");if(null===Kd)throw new Error("no 2D context");return Kd.drawImage(dd,0,0,Fd,Rd),Xd}let Bd=Date.now()-performance.now();function Sd(){const dd=performance.now(),Od=Date.now();return Math.abs(Od-(dd+Bd))>20&&(Bd=Od-dd),dd+Bd}function sd(dd){if(!dd)throw new Error("Assertion failed.")}const ud=Math.PI/180,Vd=(Math.PI,[1,0,0,0,1,0,0,0,1]),id=dd=>{const Od=dd*ud,md=Math.round(Math.cos(Od)),Wd=Math.round(Math.sin(Od));return[md,Wd,0,-Wd,md,0,0,0,1]},Ad=(dd,Od)=>[1,0,0,0,1,0,dd,Od,1],rd=(dd,Od)=>{const md=new Array(9);for(let Wd=0;Wd<3;Wd++)for(let Fd=0;Fd<3;Fd++)md[3*Wd+Fd]=dd[3*Wd]*Od[Fd]+dd[3*Wd+1]*Od[3+Fd]+dd[3*Wd+2]*Od[6+Fd];return md},Gd=dd=>dd&&dd[dd.length-1],nd=dd=>dd>=0&&dd<2**32,Ld=dd=>{let Od=0;for(;0===dd.readBits(1)&&Od<32;)Od++;if(Od>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<Od)-1+dd.readBits(Od)},Pd=dd=>{const Od=Ld(dd);return 0===(1&Od)?-(Od>>1):Od+1>>1},zd=dd=>dd.constructor===Uint8Array?dd:ArrayBuffer.isView(dd)?new Uint8Array(dd.buffer,dd.byteOffset,dd.byteLength):new Uint8Array(dd),cd=dd=>dd.constructor===DataView?dd:ArrayBuffer.isView(dd)?new DataView(dd.buffer,dd.byteOffset,dd.byteLength):new DataView(dd),jd="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let dd=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const Od=new Uint8Array(3*dd.length);let md=0;for(let Wd=0;Wd<dd.length;Wd++){let Fd=dd.charCodeAt(Wd);if(Fd<128)Od[md++]=Fd;else if(Fd<2048)Od[md++]=192|Fd>>6,Od[md++]=128|63&Fd;else if(Fd<55296||Fd>57343)Od[md++]=224|Fd>>12,Od[md++]=128|Fd>>6&63,Od[md++]=128|63&Fd;else{const Rd=Wd+1<dd.length?dd.charCodeAt(Wd+1):0;Fd<56320&&Rd>=56320&&Rd<=57343?(Fd=65536+(Fd-55296<<10)+(Rd-56320),Wd++,Od[md++]=240|Fd>>18,Od[md++]=128|Fd>>12&63,Od[md++]=128|Fd>>6&63,Od[md++]=128|63&Fd):(Od[md++]=239,Od[md++]=191,Od[md++]=189)}}return Od.slice(0,md)}},Dd=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new jd),ed={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Id={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},ld={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Cd=dd=>!dd||null==dd.primaries&&null==dd.transfer&&null==dd.matrix&&null==dd.fullRange,Zd=dd=>dd instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&dd instanceof SharedArrayBuffer||ArrayBuffer.isView(dd);class kd{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let dd;const Od=new Promise((Od=>{let md=!1;dd=()=>{md||(Od(),this.pending--,md=!0)}})),md=this.currentPromise;return this.currentPromise=Od,this.pending++,await md,dd}}const fd=()=>{let dd,Od;return{promise:new Promise(((md,Wd)=>{dd=md,Od=Wd})),resolve:dd,reject:Od}},Md=dd=>{throw new Error(`Unexpected value: ${dd}`)},dO=(dd,Od,md,Wd)=>{md>>>=0,md&=16777215,Wd?(dd.setUint8(Od,255&md),dd.setUint8(Od+1,md>>>8&255),dd.setUint8(Od+2,md>>>16&255)):(dd.setUint8(Od,md>>>16&255),dd.setUint8(Od+1,md>>>8&255),dd.setUint8(Od+2,255&md))},OO="und",mO=dd=>{let Od=0;for(;0!==dd;)dd&=dd-1,Od++;return Od},WO=/^[a-z]{3}$/,FO=1e6*(1+Number.EPSILON);const RO=(async()=>{})().constructor,XO=dd=>dd instanceof RO||dd instanceof Promise||"function"===typeof dd?.then,KO=function*(dd){for(const Od in dd){const md=dd[Od];void 0!==md&&(yield{key:Od,value:md})}},hO=dd=>"number"===typeof dd&&!Number.isNaN(dd),vO=dd=>{sd(Number.isInteger(dd.num)),sd(Number.isInteger(dd.den)),sd(0!==dd.den);let Od=Math.abs(dd.num),md=Math.abs(dd.den);for(;0!==md;){const dd=Od%md;Od=md,md=dd}const Wd=Od||1;return{num:dd.num/Wd,den:dd.den/Wd}};new Map,new Map;const QO=dd=>Array.isArray(dd)?dd:[dd];class tO{constructor(){this._listeners=new Map}on(dd,Od,md){this._listeners.has(dd)||this._listeners.set(dd,new Set);const Wd={Ot:Od,once:md?.once??!1};return this._listeners.get(dd).add(Wd),()=>{this._listeners.get(dd)?.delete(Wd)}}_emit(){for(var dd=arguments.length,Od=new Array(dd),md=0;md<dd;md++)Od[md]=arguments[md];const[Wd,Fd]=Od,Rd=this._listeners.get(Wd);if(Rd)for(const Kd of Rd){try{Kd.Ot(Fd)}catch(Xd){console.error(Xd)}Kd.once&&Rd.delete(Kd)}}}const oO=dd=>null!==dd&&"object"===typeof dd&&Object.getPrototypeOf(dd)===Object.prototype&&Object.values(dd).every((dd=>"string"===typeof dd));class NO{constructor(dd,Od){if(this.data=dd,this.mimeType=Od,!(dd instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof Od)throw new TypeError("mimeType must be a string.")}}class qO{constructor(dd,Od,md,Wd){if(this.data=dd,this.mimeType=Od,this.name=md,this.description=Wd,!(dd instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==Od&&"string"!==typeof Od)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==md&&"string"!==typeof md)throw new TypeError("name, when provided, must be a string.");if(void 0!==Wd&&"string"!==typeof Wd)throw new TypeError("description, when provided, must be a string.")}}class HO{constructor(dd){this.bytes=dd,this.pos=0}seekToByte(dd){this.pos=8*dd}readBit(){const dd=Math.floor(this.pos/8),Od=this.bytes[dd]??0,md=7-(7&this.pos),Wd=(Od&1<<md)>>md;return this.pos++,Wd}readBits(dd){if(1===dd)return this.readBit();let Od=0;for(let md=0;md<dd;md++)Od<<=1,Od|=this.readBit();return Od}writeBits(dd,Od){const md=this.pos+dd;for(let Wd=this.pos;Wd<md;Wd++){const dd=Math.floor(Wd/8);let Fd=this.bytes[dd];const Rd=7-(7&Wd);Fd&=~(1<<Rd),Fd|=(Od&1<<md-Wd-1)>>md-Wd-1<<Rd,this.bytes[dd]=Fd}this.pos=md}copyBits(dd,Od){let md=0;for(;md<dd-7;md+=8)this.writeBits(8,Od.readBits(8));const Wd=dd-md;Wd>0&&this.writeBits(Wd,Od.readBits(Wd))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const dd=this.pos/8,Od=this.bytes[dd]??0;return this.pos+=8,Od}skipBits(dd){this.pos+=dd}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const dd=new HO(this.bytes);return dd.pos=this.pos,dd}}const yO=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],bO=[-1,1,2,3,4,5,6,8],TO=dd=>{const Od=5===dd.objectType||29===dd.objectType,md=29===dd.objectType,Wd=Od?dd.outputSampleRate/2:dd.outputSampleRate,Fd=md?1:dd.outputNumberOfChannels,Rd=bO.indexOf(Fd);if(-1===Rd)throw new TypeError(`Unsupported number of channels: ${dd.outputNumberOfChannels}`);let Xd=16;dd.objectType>=32&&(Xd+=6),15===gO(Wd)&&(Xd+=24),Od&&(Xd+=9,15===gO(dd.outputSampleRate)&&(Xd+=24));const Kd=Math.ceil(Xd/8),hd=new Uint8Array(Kd),vd=new HO(hd);return pO(vd,dd.objectType),YO(vd,Wd),vd.writeBits(4,Rd),Od&&(YO(vd,dd.outputSampleRate),pO(vd,2)),vd.writeBits(3,0),hd},pO=(dd,Od)=>{Od<32?dd.writeBits(5,Od):(dd.writeBits(5,31),dd.writeBits(6,Od-32))},YO=(dd,Od)=>{const md=gO(Od);dd.writeBits(4,md),15===md&&dd.writeBits(24,Od)},gO=dd=>{const Od=yO.indexOf(dd);return-1===Od?15:Od};var wO;!function(dd){dd[dd.Silent=0]="Silent",dd[dd.Errors=1]="Errors",dd[dd.Warnings=2]="Warnings",dd[dd.Info=3]="Info"}(wO||(wO={}));class aO{constructor(){}static get level(){return aO._level}static set level(dd){if(dd!==wO.Silent&&dd!==wO.Errors&&dd!==wO.Warnings&&dd!==wO.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");aO._level=dd}static get _emitter(){return aO._emitterInstance??=new tO}static on(dd,Od,md){return aO._emitter.on(dd,Od,md)}static _error(){for(var dd=arguments.length,Od=new Array(dd),md=0;md<dd;md++)Od[md]=arguments[md];aO._emitter._emit("error",Od),aO._level>=wO.Errors&&console.error(...Od)}static _warn(){for(var dd=arguments.length,Od=new Array(dd),md=0;md<dd;md++)Od[md]=arguments[md];aO._emitter._emit("warn",Od),aO._level>=wO.Warnings&&console.warn(...Od)}static _info(){for(var dd=arguments.length,Od=new Array(dd),md=0;md<dd;md++)Od[md]=arguments[md];aO._emitter._emit("info",Od),aO._level>=wO.Info&&console.info(...Od)}}aO._level=wO.Info,aO._emitterInstance=null;const EO=[48e3,44100,32e3],JO=[24e3,22050,16e3],UO="Mediabunny v1.61.3";var xO,BO;!function(dd){dd[dd.NON_IDR_SLICE=1]="NON_IDR_SLICE",dd[dd.SLICE_DPA=2]="SLICE_DPA",dd[dd.SLICE_DPB=3]="SLICE_DPB",dd[dd.SLICE_DPC=4]="SLICE_DPC",dd[dd.IDR=5]="IDR",dd[dd.SEI=6]="SEI",dd[dd.SPS=7]="SPS",dd[dd.PPS=8]="PPS",dd[dd.AUD=9]="AUD",dd[dd.SPS_EXT=13]="SPS_EXT"}(xO||(xO={})),function(dd){dd[dd.RASL_N=8]="RASL_N",dd[dd.RASL_R=9]="RASL_R",dd[dd.BLA_W_LP=16]="BLA_W_LP",dd[dd.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",dd[dd.VPS_NUT=32]="VPS_NUT",dd[dd.SPS_NUT=33]="SPS_NUT",dd[dd.PPS_NUT=34]="PPS_NUT",dd[dd.AUD_NUT=35]="AUD_NUT",dd[dd.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",dd[dd.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(BO||(BO={}));const SO=function*(dd){let Od=0,md=-1;for(;Od<dd.length-2;){const Wd=dd.indexOf(0,Od);if(-1===Wd||Wd>=dd.length-2)break;Od=Wd;let Fd=0;Od+3<dd.length&&0===dd[Od+1]&&0===dd[Od+2]&&1===dd[Od+3]?Fd=4:0===dd[Od+1]&&1===dd[Od+2]&&(Fd=3),0!==Fd?(-1!==md&&Od>md&&(yield{offset:md,length:Od-md}),md=Od+Fd,Od=md):Od++}-1!==md&&md<dd.length&&(yield{offset:md,length:dd.length-md})},sO=dd=>31&dd,uO=dd=>{const Od=[],md=dd.length;for(let Wd=0;Wd<md;Wd++)Wd+2<md&&0===dd[Wd]&&0===dd[Wd+1]&&3===dd[Wd+2]?(Od.push(0,0),Wd+=2):Od.push(dd[Wd]);return new Uint8Array(Od)},VO=(new Uint8Array([0,0,0,1]),(dd,Od)=>{const md=dd.reduce(((dd,md)=>dd+Od+md.byteLength),0),Wd=new Uint8Array(md);let Fd=0;for(const Rd of dd){const dd=new DataView(Wd.buffer,Wd.byteOffset,Wd.byteLength);switch(Od){case 1:dd.setUint8(Fd,Rd.byteLength);break;case 2:dd.setUint16(Fd,Rd.byteLength,!1);break;case 3:dO(dd,Fd,Rd.byteLength,!1);break;case 4:dd.setUint32(Fd,Rd.byteLength,!1)}Fd+=Od,Wd.set(Rd,Fd),Fd+=Rd.byteLength}return Wd}),iO=dd=>{try{const Od=[],md=[],Wd=[];for(const Kd of SO(dd)){const Fd=dd.subarray(Kd.offset,Kd.offset+Kd.length),Rd=sO(Fd[0]);Rd===xO.SPS?Od.push(Fd):Rd===xO.PPS?md.push(Fd):Rd===xO.SPS_EXT&&Wd.push(Fd)}if(0===Od.length)return null;if(0===md.length)return null;const Fd=Od[0],Rd=rO(Fd);sd(null!==Rd);const Xd=100===Rd.profileIdc||110===Rd.profileIdc||122===Rd.profileIdc||144===Rd.profileIdc;return{configurationVersion:1,avcProfileIndication:Rd.profileIdc,profileCompatibility:Rd.constraintFlags,avcLevelIndication:Rd.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:Od,pictureParameterSets:md,chromaFormat:Xd?Rd.chromaFormatIdc:null,bitDepthLumaMinus8:Xd?Rd.bitDepthLumaMinus8:null,bitDepthChromaMinus8:Xd?Rd.bitDepthChromaMinus8:null,sequenceParameterSetExt:Xd?Wd:null}}catch(Od){return aO._error("Error building AVC Decoder Configuration Record:",Od),null}},AO={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},rO=dd=>{try{const Od=uO(dd),md=new HO(Od);md.skipBits(1),md.skipBits(2);if(7!==md.readBits(5))return null;const Wd=md.readAlignedByte(),Fd=md.readAlignedByte(),Rd=md.readAlignedByte();Ld(md);let Xd=1,Kd=0,hd=0,vd=0;if(100===Wd||110===Wd||122===Wd||244===Wd||44===Wd||83===Wd||86===Wd||118===Wd||128===Wd){Xd=Ld(md),3===Xd&&(vd=md.readBits(1)),Kd=Ld(md),hd=Ld(md),md.skipBits(1);if(md.readBits(1))for(let dd=0;dd<(3!==Xd?8:12);dd++){if(md.readBits(1)){const Od=dd<6?16:64;let Wd=8,Fd=8;for(let dd=0;dd<Od;dd++){if(0!==Fd){Fd=(Wd+Pd(md)+256)%256}Wd=0===Fd?Wd:Fd}}}}Ld(md);const Qd=Ld(md);if(0===Qd)Ld(md);else if(1===Qd){md.skipBits(1),Pd(md),Pd(md);const dd=Ld(md);for(let Od=0;Od<dd;Od++)Pd(md)}Ld(md),md.skipBits(1);const td=Ld(md),od=Ld(md),Nd=16*(td+1),qd=16*(od+1);let Hd=Nd,yd=qd;const bd=md.readBits(1);bd||md.skipBits(1),md.skipBits(1);if(md.readBits(1)){const dd=Ld(md),Od=Ld(md),Wd=Ld(md),Fd=Ld(md);let Rd,Kd;if(0===(0===vd?Xd:0))Rd=1,Kd=2-bd;else{Rd=3===Xd?1:2,Kd=(1===Xd?2:1)*(2-bd)}Hd-=Rd*(dd+Od),yd-=Kd*(Wd+Fd)}let Td=2,pd=2,Yd=2,gd=0,wd={num:1,den:1},Ed=null,Jd=null,Ud=null,xd=null;const Bd=md.pos;if(md.readBits(1)){if(md.readBits(1)){const dd=md.readBits(8);if(255===dd)wd={num:md.readBits(16),den:md.readBits(16)};else{const Od=AO[dd];Od&&(wd=Od)}}md.readBits(1)&&md.skipBits(1);if(md.readBits(1)){md.skipBits(3),gd=md.readBits(1);md.readBits(1)&&(Td=md.readBits(8),pd=md.readBits(8),Yd=md.readBits(8))}md.readBits(1)&&(Ld(md),Ld(md));md.readBits(1)&&(md.skipBits(32),md.skipBits(32),md.skipBits(1));const dd=md.readBits(1);dd&&GO(md);const Od=md.readBits(1);Od&&GO(md),(dd||Od)&&md.skipBits(1),md.skipBits(1),Ud=md.pos,xd=md.readBits(1),xd&&(md.skipBits(1),Ld(md),Ld(md),Ld(md),Ld(md),Ed=Ld(md),Jd=Ld(md))}if(null===Ed){sd(null===Jd);if(44!==Wd&&86!==Wd&&100!==Wd&&110!==Wd&&122!==Wd&&244!==Wd||!(16&Fd)){const dd=td+1,Od=(2-bd)*(od+1),md=ym.find((dd=>dd.level>=Rd))??Gd(ym),Wd=Math.min(Math.floor(md.maxDpbMbs/(dd*Od)),16);Ed=Wd,Jd=Wd}else Ed=0,Jd=0}return sd(null!==Jd),{emulationUnpreventedBytes:Od,profileIdc:Wd,constraintFlags:Fd,levelIdc:Rd,frameMbsOnlyFlag:bd,chromaFormatIdc:Xd,bitDepthLumaMinus8:Kd,bitDepthChromaMinus8:hd,codedWidth:Nd,codedHeight:qd,displayWidth:Hd,displayHeight:yd,pixelAspectRatio:wd,colourPrimaries:Td,matrixCoefficients:Yd,transferCharacteristics:pd,fullRangeFlag:gd,numReorderFrames:Ed,maxDecFrameBuffering:Jd,vuiParametersFlagBitOffset:Bd,bitstreamRestrictionFlagBitOffset:Ud,bitstreamRestrictionFlag:xd}}catch(Od){return aO._error("Error parsing AVC SPS:",Od),null}},GO=dd=>{const Od=Ld(dd);dd.skipBits(4),dd.skipBits(4);for(let md=0;md<=Od;md++)Ld(dd),Ld(dd),dd.skipBits(1);dd.skipBits(5),dd.skipBits(5),dd.skipBits(5),dd.skipBits(5)},nO=dd=>dd>>1&63,LO=dd=>{try{const Od=[],md=[],Wd=[],Fd=[];for(const hd of SO(dd)){const Rd=dd.subarray(hd.offset,hd.offset+hd.length),Xd=nO(Rd[0]);Xd===BO.VPS_NUT?Od.push(Rd):Xd===BO.SPS_NUT?md.push(Rd):Xd===BO.PPS_NUT?Wd.push(Rd):Xd!==BO.PREFIX_SEI_NUT&&Xd!==BO.SUFFIX_SEI_NUT||Fd.push(Rd)}if(0===md.length||0===Wd.length)return null;const Rd=(dd=>{try{const Od=new HO(uO(dd));Od.skipBits(16),Od.readBits(4);const md=Od.readBits(3),Wd=Od.readBits(1),{general_profile_space:Fd,general_tier_flag:Rd,general_profile_idc:Xd,general_profile_compatibility_flags:Kd,general_constraint_indicator_flags:hd,general_level_idc:vd}=PO(Od,md);Ld(Od);const Qd=Ld(Od);let td=0;3===Qd&&(td=Od.readBits(1));const od=Ld(Od),Nd=Ld(Od);let qd=od,Hd=Nd;if(Od.readBits(1)){const dd=Ld(Od),md=Ld(Od),Wd=Ld(Od),Fd=Ld(Od);let Rd=1,Xd=1;const Kd=0===td?Qd:0;1===Kd?(Rd=2,Xd=2):2===Kd&&(Rd=2,Xd=1),qd-=(dd+md)*Rd,Hd-=(Wd+Fd)*Xd}const yd=Ld(Od),bd=Ld(Od);Ld(Od);const Td=Od.readBits(1);let pd=0;for(let dd=Td?0:md;dd<=md;dd++)Ld(Od),pd=Ld(Od),Ld(Od);Ld(Od),Ld(Od),Ld(Od),Ld(Od),Ld(Od),Ld(Od),Od.readBits(1)&&Od.readBits(1)&&zO(Od),Od.skipBits(1),Od.skipBits(1),Od.readBits(1)&&(Od.skipBits(4),Od.skipBits(4),Ld(Od),Ld(Od),Od.skipBits(1));const Yd=Ld(Od);if(cO(Od,Yd),Od.readBits(1)){const dd=Ld(Od);for(let md=0;md<dd;md++)Ld(Od),Od.skipBits(1)}Od.skipBits(1),Od.skipBits(1);let gd=2,wd=2,Ed=2,Jd=0,Ud=0,xd={num:1,den:1};if(Od.readBits(1)){const dd=DO(Od,md);xd=dd.pixelAspectRatio,gd=dd.colourPrimaries,wd=dd.transferCharacteristics,Ed=dd.matrixCoefficients,Jd=dd.fullRangeFlag,Ud=dd.minSpatialSegmentationIdc}return{displayWidth:qd,displayHeight:Hd,pixelAspectRatio:xd,colourPrimaries:gd,transferCharacteristics:wd,matrixCoefficients:Ed,fullRangeFlag:Jd,maxDecFrameBuffering:pd+1,spsMaxSubLayersMinus1:md,spsTemporalIdNestingFlag:Wd,generalProfileSpace:Fd,generalTierFlag:Rd,generalProfileIdc:Xd,generalProfileCompatibilityFlags:Kd,generalConstraintIndicatorFlags:hd,generalLevelIdc:vd,chromaFormatIdc:Qd,bitDepthLumaMinus8:yd,bitDepthChromaMinus8:bd,minSpatialSegmentationIdc:Ud}}catch(Od){return aO._error("Error parsing HEVC SPS:",Od),null}})(md[0]);if(!Rd)return null;let Xd=0;if(Wd.length>0){const dd=Wd[0],Od=new HO(uO(dd));Od.skipBits(16),Ld(Od),Ld(Od),Od.skipBits(1),Od.skipBits(1),Od.skipBits(3),Od.skipBits(1),Od.skipBits(1),Ld(Od),Ld(Od),Pd(Od),Od.skipBits(1),Od.skipBits(1),Od.readBits(1)&&Ld(Od),Pd(Od),Pd(Od),Od.skipBits(1),Od.skipBits(1),Od.skipBits(1),Od.skipBits(1);const md=Od.readBits(1),Fd=Od.readBits(1);Xd=md||Fd?md&&!Fd?2:!md&&Fd?3:0:0}const Kd=[...Od.length?[{arrayCompleteness:1,nalUnitType:BO.VPS_NUT,nalUnits:Od}]:[],...md.length?[{arrayCompleteness:1,nalUnitType:BO.SPS_NUT,nalUnits:md}]:[],...Wd.length?[{arrayCompleteness:1,nalUnitType:BO.PPS_NUT,nalUnits:Wd}]:[],...Fd.length?[{arrayCompleteness:1,nalUnitType:nO(Fd[0][0]),nalUnits:Fd}]:[]];return{configurationVersion:1,generalProfileSpace:Rd.generalProfileSpace,generalTierFlag:Rd.generalTierFlag,generalProfileIdc:Rd.generalProfileIdc,generalProfileCompatibilityFlags:Rd.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:Rd.generalConstraintIndicatorFlags,generalLevelIdc:Rd.generalLevelIdc,minSpatialSegmentationIdc:Rd.minSpatialSegmentationIdc,parallelismType:Xd,chromaFormatIdc:Rd.chromaFormatIdc,bitDepthLumaMinus8:Rd.bitDepthLumaMinus8,bitDepthChromaMinus8:Rd.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:Rd.spsMaxSubLayersMinus1+1,temporalIdNested:Rd.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:Kd}}catch(Od){return aO._error("Error building HEVC Decoder Configuration Record:",Od),null}},PO=(dd,Od)=>{const md=dd.readBits(2),Wd=dd.readBits(1),Fd=dd.readBits(5);let Rd=0;for(let Qd=0;Qd<32;Qd++)Rd=Rd<<1|dd.readBits(1);const Xd=new Uint8Array(6);for(let Qd=0;Qd<6;Qd++)Xd[Qd]=dd.readBits(8);const Kd=dd.readBits(8),hd=[],vd=[];for(let Qd=0;Qd<Od;Qd++)hd.push(dd.readBits(1)),vd.push(dd.readBits(1));if(Od>0)for(let Qd=Od;Qd<8;Qd++)dd.skipBits(2);for(let Qd=0;Qd<Od;Qd++)hd[Qd]&&dd.skipBits(88),vd[Qd]&&dd.skipBits(8);return{general_profile_space:md,general_tier_flag:Wd,general_profile_idc:Fd,general_profile_compatibility_flags:Rd,general_constraint_indicator_flags:Xd,general_level_idc:Kd}},zO=dd=>{for(let Od=0;Od<4;Od++)for(let md=0;md<(3===Od?2:6);md++){if(dd.readBits(1)){const md=Math.min(64,1<<4+(Od<<1));Od>1&&Pd(dd);for(let Od=0;Od<md;Od++)Pd(dd)}else Ld(dd)}},cO=(dd,Od)=>{const md=[];for(let Wd=0;Wd<Od;Wd++)md[Wd]=jO(dd,Wd,Od,md)},jO=(dd,Od,md,Wd)=>{let Fd=0,Rd=0,Xd=0;if(0!==Od&&(Rd=dd.readBits(1)),Rd){if(Od===md){Xd=Od-(Ld(dd)+1)}else Xd=Od-1;dd.readBits(1),Ld(dd);const Rd=Wd[Xd]??0;for(let Od=0;Od<=Rd;Od++){dd.readBits(1)||dd.readBits(1)}Fd=Wd[Xd]}else{const Od=Ld(dd),md=Ld(dd);for(let Wd=0;Wd<Od;Wd++)Ld(dd),dd.readBits(1);for(let Wd=0;Wd<md;Wd++)Ld(dd),dd.readBits(1);Fd=Od+md}return Fd},DO=(dd,Od)=>{let md=2,Wd=2,Fd=2,Rd=0,Xd=0,Kd={num:1,den:1};if(dd.readBits(1)){const Od=dd.readBits(8);if(255===Od)Kd={num:dd.readBits(16),den:dd.readBits(16)};else{const dd=AO[Od];dd&&(Kd=dd)}}return dd.readBits(1)&&dd.readBits(1),dd.readBits(1)&&(dd.readBits(3),Rd=dd.readBits(1),dd.readBits(1)&&(md=dd.readBits(8),Wd=dd.readBits(8),Fd=dd.readBits(8))),dd.readBits(1)&&(Ld(dd),Ld(dd)),dd.readBits(1),dd.readBits(1),dd.readBits(1),dd.readBits(1)&&(Ld(dd),Ld(dd),Ld(dd),Ld(dd)),dd.readBits(1)&&(dd.readBits(32),dd.readBits(32),dd.readBits(1)&&Ld(dd),dd.readBits(1)&&eO(dd,!0,Od)),dd.readBits(1)&&(dd.readBits(1),dd.readBits(1),dd.readBits(1),Xd=Ld(dd),Ld(dd),Ld(dd),Ld(dd),Ld(dd)),{pixelAspectRatio:Kd,colourPrimaries:md,transferCharacteristics:Wd,matrixCoefficients:Fd,fullRangeFlag:Rd,minSpatialSegmentationIdc:Xd}},eO=(dd,Od,md)=>{let Wd=!1,Fd=!1,Rd=!1;Od&&(Wd=1===dd.readBits(1),Fd=1===dd.readBits(1),(Wd||Fd)&&(Rd=1===dd.readBits(1),Rd&&(dd.readBits(8),dd.readBits(5),dd.readBits(1),dd.readBits(5)),dd.readBits(4),dd.readBits(4),Rd&&dd.readBits(4),dd.readBits(5),dd.readBits(5),dd.readBits(5)));for(let Xd=0;Xd<=md;Xd++){let Od=!0;1===dd.readBits(1)||(Od=1===dd.readBits(1));let md=!1;Od?Ld(dd):md=1===dd.readBits(1);let Xd=1;if(!md){Xd=Ld(dd)+1}Wd&&IO(dd,Xd,Rd),Fd&&IO(dd,Xd,Rd)}},IO=(dd,Od,md)=>{for(let Wd=0;Wd<Od;Wd++)Ld(dd),Ld(dd),md&&(Ld(dd),Ld(dd)),dd.readBits(1)};var lO;!function(dd){dd[dd.audAllowed=0]="audAllowed",dd[dd.beforeFirstVcl=1]="beforeFirstVcl",dd[dd.afterFirstVcl=2]="afterFirstVcl",dd[dd.eoBitstreamAllowed=3]="eoBitstreamAllowed",dd[dd.noMoreDataAllowed=4]="noMoreDataAllowed"}(lO||(lO={}));const CO=dd=>{const Od=cd(dd),md=Od.getUint8(9),Wd=Od.getUint16(10,!0),Fd=Od.getUint32(12,!0),Rd=Od.getInt16(16,!0),Xd=Od.getUint8(18);let Kd=null;return Xd&&(Kd=dd.subarray(19,21+md)),{outputChannelCount:md,preSkip:Wd,inputSampleRate:Fd,outputGain:Rd,channelMappingFamily:Xd,channelMappingTable:Kd}};var ZO;!function(dd){dd[dd.STREAMINFO=0]="STREAMINFO",dd[dd.VORBIS_COMMENT=4]="VORBIS_COMMENT",dd[dd.PICTURE=6]="PICTURE"}(ZO||(ZO={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const kO=[1,2,3,6],fO=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],MO=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],dm=[16,16,20,20,0,24,24,0],Om=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],mm=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Wm=[32e3,44100,48e3,0],Fm=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Rm=[512,1024,2048,4096],Xm=dd=>{const Od=Km(dd),md=cd(dd);let Wd=Od?4*Math.ceil(Od.frameSize/4):0,Fd=null;for(;Wd+4<=dd.length&&1683496997===md.getUint32(Wd);){const Od=hm(dd.subarray(Wd));if(!Od)break;Fd??=Od,Wd+=Od.frameSize}if(Od)return{frameSize:Fd?Wd:Od.frameSize,sampleRate:Od.sampleRate,numberOfChannels:Od.numberOfChannels,sampleCount:Od.sampleCount,channelLayout:Od.channelLayout,pcmResolution:Od.pcmResolution,bitRate:Od.bitRate,core:Od,hasExtensions:null!==Fd};if(!Fd?.asset)return null;const{asset:Rd}=Fd;return{frameSize:Wd,sampleRate:Rd.sampleRate,numberOfChannels:Rd.numberOfChannels,sampleCount:Rd.sampleCount,channelLayout:Rd.channelLayout,pcmResolution:Rd.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Km=dd=>{if(dd.length<18)return null;if(127!==dd[0]||254!==dd[1]||128!==dd[2]||1!==dd[3])return null;const Od=new HO(dd);if(Od.skipBits(32),Od.skipBits(1),31!==Od.readBits(5))return null;const md=Od.readBits(1),Wd=Od.readBits(7)+1;if(Wd%8!==0)return null;const Fd=Od.readBits(14)+1;if(Fd<96)return null;const Rd=Od.readBits(6);if(Rd>=Om.length)return null;const Xd=fO[Od.readBits(4)];if(0===Xd)return null;const Kd=MO[Od.readBits(5)];if(0!==Od.readBits(1))return null;Od.skipBits(4),Od.skipBits(5);const hd=Od.readBits(2);if(3===hd)return null;Od.skipBits(1),md&&Od.skipBits(16),Od.skipBits(7);const vd=dm[Od.readBits(3)];if(0===vd)return null;const Qd=0!==hd;return{frameSize:Fd,sampleRate:Xd,numberOfChannels:Om[Rd]+(Qd?1:0),sampleCount:32*Wd,channelLayout:mm[Rd]|(Qd?8:0),amode:Rd,lfePresent:Qd,bitRate:Kd,pcmResolution:vd}},hm=dd=>{if(dd.length<10)return null;if(100!==dd[0]||88!==dd[1]||32!==dd[2]||37!==dd[3])return null;const Od=new HO(dd);Od.skipBits(32),Od.skipBits(8);const md=Od.readBits(2),Wd=Od.readBits(1),Fd=8+4*Wd,Rd=16+4*Wd;Od.skipBits(Fd);const Xd=Od.readBits(Rd)+1,Kd={frameSize:Xd,asset:null};if(!Od.readBits(1))return Kd;const hd=Wm[Od.readBits(2)],vd=512*(Od.readBits(3)+1);Od.readBits(1)&&Od.skipBits(36);const Qd=Od.readBits(3)+1,td=Od.readBits(3)+1,od=[];for(let bd=0;bd<Qd;bd++)od.push(Od.readBits(md+1));for(const bd of od)Od.skipBits(8*mO(bd));if(Od.readBits(1)){Od.skipBits(2);const dd=Od.readBits(2)+1<<2,md=Od.readBits(2)+1;Od.skipBits(md*dd)}for(let bd=0;bd<td;bd++)Od.skipBits(Rd);Od.skipBits(9),Od.skipBits(3),Od.readBits(1)&&Od.skipBits(4),Od.readBits(1)&&Od.skipBits(24),Od.readBits(1)&&Od.skipBits(8*(Od.readBits(10)+1));const Nd=Od.readBits(5)+1,qd=Fm[Od.readBits(4)],Hd=Od.readBits(8)+1;let yd=0;if(Od.readBits(1)&&(Hd>2&&Od.skipBits(1),Hd>6&&Od.skipBits(1),Od.readBits(1))){const dd=Od.readBits(2)+1<<2;yd=Od.readBits(dd)}return 0===hd||Od.getBitsLeft()<0?Kd:{frameSize:Xd,asset:{sampleRate:qd,numberOfChannels:Hd,sampleCount:Math.round(vd*qd/hd),channelLayout:yd,pcmResolution:Nd}}},Qm=dd=>{const Od=new Uint8Array(20),md=cd(Od);md.setUint32(0,dd.sampleRate),md.setUint32(4,dd.bitRate),md.setUint32(8,dd.bitRate),Od[12]=dd.pcmResolution;const Wd=dd.core&&!dd.hasExtensions?1:0,Fd=new HO(Od);return Fd.seekToByte(13),Fd.writeBits(2,Math.max(Rm.indexOf(dd.sampleCount),0)),Fd.writeBits(5,Wd),Fd.writeBits(1,dd.core?.lfePresent?1:0),Fd.writeBits(6,dd.core?.amode??0),Fd.writeBits(14,dd.core?dd.core.frameSize-1:0),Fd.writeBits(1,0),Fd.writeBits(3,0),Fd.writeBits(16,dd.channelLayout),Fd.writeBits(1,0),Fd.writeBits(1,0),Fd.writeBits(1,0),Fd.writeBits(5,0),Od},tm=["avc","hevc","vp9","av1","vp8","prores"],om=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Nm=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],qm=[...Nm,...om],Hm=["webvtt"],ym=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],bm=["ap4x","ap4h","apch","apcn","apcs","apco"],Tm=["dtsc","dtsh","dtsl","dtse"],pm=dd=>{const Od=dd.split("."),md=Number(Od[1]),Wd=Od[2],Fd=(md<<5)+Number(Wd.slice(0,-1)),Rd="H"===Wd.slice(-1)?1:0,Xd=Number(Od[3]);return[129,Fd,(Rd<<7)+((8===Xd?0:1)<<6)+((12===Xd?1:0)<<5)+((Od[4]?Number(Od[4]):0)<<4)+((Od[5]?Number(Od[5][0]):1)<<3)+((Od[5]?Number(Od[5][1]):1)<<2)+(Od[5]?Number(Od[5][2]):0),0]},Ym=/^pcm-([usf])(\\d+)(be)?$/,gm=dd=>{if(sd(om.includes(dd)),"ulaw"===dd)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===dd)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const Od=Ym.exec(dd);let md;sd(Od),md="u"===Od[1]?"unsigned":"s"===Od[1]?"signed":"float";return{dataType:md,sampleSize:Number(Od[2])/8,littleEndian:"be"!==Od[3],silentValue:"pcm-u8"===dd?128:0}},wm=dd=>dd.startsWith("avc1")||dd.startsWith("avc3")?"avc":dd.startsWith("hev1")||dd.startsWith("hvc1")?"hevc":"vp8"===dd?"vp8":dd.startsWith("vp09")?"vp9":dd.startsWith("av01")?"av1":bm.includes(dd)?"prores":"mp3"===dd||"mp4a.69"===dd||"mp4a.6B"===dd||"mp4a.6b"===dd||"mp4a.40.34"===dd?"mp3":dd.startsWith("mp4a.40.")||"mp4a.67"===dd?"aac":"opus"===dd||"Opus"===dd?"opus":"vorbis"===dd?"vorbis":"flac"===dd?"flac":"ac-3"===dd||"ac3"===dd?"ac3":"ec-3"===dd||"eac3"===dd?"eac3":Tm.includes(dd)?"dts":"ulaw"===dd?"ulaw":"alaw"===dd?"alaw":Ym.test(dd)?dd:"webvtt"===dd?"webvtt":null,am=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...bm],Em=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,Jm=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,Um=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,xm=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,Bm=(dd,Od)=>{if(!dd)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof dd)throw new TypeError("Video chunk metadata must be an object.");if(!dd.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof dd.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof dd.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!am.some((Od=>dd.decoderConfig.codec.startsWith(Od))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(dd.decoderConfig.codedWidth)||dd.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(dd.decoderConfig.codedHeight)||dd.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==dd.decoderConfig.displayAspectWidth&&(!Number.isInteger(dd.decoderConfig.displayAspectWidth)||dd.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==dd.decoderConfig.displayAspectHeight&&(!Number.isInteger(dd.decoderConfig.displayAspectHeight)||dd.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==dd.decoderConfig.displayAspectWidth!==(void 0!==dd.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==dd.decoderConfig.description&&!Zd(dd.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==dd.decoderConfig.colorSpace){const{colorSpace:Od}=dd.decoderConfig;if("object"!==typeof Od)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const md=Object.keys(ed);if(null!=Od.primaries&&!md.includes(Od.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${md.join(", ")}.`);const Wd=Object.keys(Id);if(null!=Od.transfer&&!Wd.includes(Od.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${Wd.join(", ")}.`);const Fd=Object.keys(ld);if(null!=Od.matrix&&!Fd.includes(Od.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${Fd.join(", ")}.`);if(null!=Od.fullRange&&"boolean"!==typeof Od.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(dd.decoderConfig.codec.startsWith("avc1")||dd.decoderConfig.codec.startsWith("avc3")){if(!Em.test(dd.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(dd.decoderConfig.codec.startsWith("hev1")||dd.decoderConfig.codec.startsWith("hvc1")){if(!Jm.test(dd.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(dd.decoderConfig.codec.startsWith("vp8")){if("vp8"!==dd.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(dd.decoderConfig.codec.startsWith("vp09")){if(!Um.test(dd.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(dd.decoderConfig.codec.startsWith("av01")){if(!xm.test(dd.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(bm.some((Od=>dd.decoderConfig.codec.startsWith(Od)))&&!bm.some((Od=>dd.decoderConfig.codec===Od)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${bm.join(", ")}.`);if(null!==Od&&wm(dd.decoderConfig.codec)!==Od)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${dd.decoderConfig.codec}\' does not fit to the track codec \'${Od}\'.`)},Sm=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],sm=(dd,Od)=>{if(!dd)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof dd)throw new TypeError("Audio chunk metadata must be an object.");if(!dd.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof dd.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof dd.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Sm.some((Od=>dd.decoderConfig.codec.startsWith(Od))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(dd.decoderConfig.sampleRate)||dd.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(dd.decoderConfig.numberOfChannels)||dd.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==dd.decoderConfig.description&&!Zd(dd.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(dd.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==dd.decoderConfig.codec&&"mp4a.6B"!==dd.decoderConfig.codec&&"mp4a.6b"!==dd.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(dd.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(dd.decoderConfig.codec.startsWith("mp3")||dd.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==dd.decoderConfig.codec&&"mp4a.69"!==dd.decoderConfig.codec&&"mp4a.6B"!==dd.decoderConfig.codec&&"mp4a.6b"!==dd.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(dd.decoderConfig.codec.startsWith("opus")){if("opus"!==dd.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(dd.decoderConfig.description&&dd.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(dd.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==dd.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!dd.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(dd.decoderConfig.codec.startsWith("flac")){if("flac"!==dd.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const Od=42;if(!dd.decoderConfig.description||dd.decoderConfig.description.byteLength<Od)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(dd.decoderConfig.codec.startsWith("ac-3")||dd.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==dd.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(dd.decoderConfig.codec.startsWith("ec-3")||dd.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==dd.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(dd.decoderConfig.codec.startsWith("dts")){if(!Tm.includes(dd.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Tm.join(", ")}.`)}else if((dd.decoderConfig.codec.startsWith("pcm")||dd.decoderConfig.codec.startsWith("ulaw")||dd.decoderConfig.codec.startsWith("alaw"))&&!om.includes(dd.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${om.join(", ")}).`);if(null!==Od&&wm(dd.decoderConfig.codec)!==Od)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${dd.decoderConfig.codec}\' does not fit to the track codec \'${Od}\'.`)},um=dd=>{if(!dd)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof dd)throw new TypeError("Subtitle metadata must be an object.");if(!dd.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof dd.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof dd.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var Vm;!function(dd){dd[dd.FrameCount=1]="FrameCount",dd[dd.FileSize=2]="FileSize",dd[dd.Toc=4]="Toc"}(Vm||(Vm={}));class im{constructor(dd,Od,md,Wd,Fd){this.bytes=dd,this.view=Od,this.offset=md,this.start=Wd,this.end=Fd,this.bufferPos=Wd-md}static tempFromBytes(dd){return new im(dd,cd(dd),0,0,dd.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(dd){this.bufferPos=dd-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(dd){this.bufferPos+=dd}slice(dd){let Od=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-dd;if(dd<this.start||dd+Od>this.end)throw new RangeError("Slicing outside of original slice.");return new im(this.bytes,this.view,this.offset,dd,dd+Od)}}const Am=(dd,Od)=>{if(dd.filePos<dd.start||dd.filePos+Od>dd.end)throw new RangeError(`Tried reading [${dd.filePos}, ${dd.filePos+Od}), but slice is [${dd.start}, ${dd.end}). This is likely an internal error, please report it alongside the file that caused it.`)},rm=(dd,Od)=>{Am(dd,Od);const md=dd.bytes.subarray(dd.bufferPos,dd.bufferPos+Od);return dd.bufferPos+=Od,md};var Gm,nm;!function(dd){dd[dd.Unsynchronisation=128]="Unsynchronisation",dd[dd.ExtendedHeader=64]="ExtendedHeader",dd[dd.ExperimentalIndicator=32]="ExperimentalIndicator",dd[dd.Footer=16]="Footer"}(Gm||(Gm={})),function(dd){dd[dd.ISO_8859_1=0]="ISO_8859_1",dd[dd.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",dd[dd.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",dd[dd.UTF_8=3]="UTF_8"}(nm||(nm={}));class Lm{constructor(dd){this.mutex=new kd,this.trackTimestampInfo=new WeakMap,this.output=dd}onTrackClose(dd){}validateTimestamp(dd,Od,md){let Wd=this.trackTimestampInfo.get(dd);if(Wd){if(md&&(Wd.maxTimestampBeforeLastKeyPacket=Wd.maxTimestamp),null!==Wd.maxTimestampBeforeLastKeyPacket&&Od<Wd.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${Od}s, but largest timestamp is ${Wd.maxTimestampBeforeLastKeyPacket}s.`);Wd.maxTimestamp=Math.max(Wd.maxTimestamp,Od)}else{if(!md)throw new Error("First packet must be a key packet.");Wd={maxTimestamp:Od,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(dd,Wd)}}}const Pm=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const zm=dd=>{const Od=Math.floor(dd/36e5),md=Math.floor(dd%36e5/6e4),Wd=Math.floor(dd%6e4/1e3),Fd=dd%1e3;return Od.toString().padStart(2,"0")+":"+md.toString().padStart(2,"0")+":"+Wd.toString().padStart(2,"0")+"."+Fd.toString().padStart(3,"0")};class cm{constructor(dd){this.writer=dd,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(dd){this.helperView.setUint32(0,dd,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(dd){this.helperView.setUint32(0,Math.floor(dd/2**32),!1),this.helperView.setUint32(4,dd,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(dd){for(let Od=0;Od<dd.length;Od++)this.helperView.setUint8(Od%8,dd.charCodeAt(Od)),Od%8===7&&this.writer.write(this.helper);dd.length%8!==0&&this.writer.write(this.helper.subarray(0,dd.length%8))}writeBox(dd){if(this.offsets.set(dd,this.writer.getPos()),dd.contents&&!dd.children)this.writeBoxHeader(dd,dd.size??dd.contents.byteLength+8),this.writer.write(dd.contents);else{const Od=this.writer.getPos();if(this.writeBoxHeader(dd,0),dd.contents&&this.writer.write(dd.contents),dd.children)for(const Fd of dd.children)Fd&&this.writeBox(Fd);const md=this.writer.getPos(),Wd=dd.size??md-Od;this.writer.seek(Od),this.writeBoxHeader(dd,Wd),this.writer.seek(md)}}writeBoxHeader(dd,Od){this.writeU32(dd.largeSize?1:Od),this.writeAscii(dd.type),dd.largeSize&&this.writeU64(Od)}measureBoxHeader(dd){return 8+(dd.largeSize?8:0)}patchBox(dd){const Od=this.offsets.get(dd);sd(void 0!==Od);const md=this.writer.getPos();this.writer.seek(Od),this.writeBox(dd),this.writer.seek(md)}measureBox(dd){if(dd.contents&&!dd.children){return this.measureBoxHeader(dd)+dd.contents.byteLength}{let Od=this.measureBoxHeader(dd);if(dd.contents&&(Od+=dd.contents.byteLength),dd.children)for(const md of dd.children)md&&(Od+=this.measureBox(md));return Od}}}const jm=new Uint8Array(8),Dm=new DataView(jm.buffer),em=dd=>[(dd%256+256)%256],Im=dd=>(Dm.setUint16(0,dd,!1),[jm[0],jm[1]]),lm=dd=>(Dm.setInt16(0,dd,!1),[jm[0],jm[1]]),Cm=dd=>(Dm.setUint32(0,dd,!1),[jm[1],jm[2],jm[3]]),Zm=dd=>(Dm.setUint32(0,dd,!1),[jm[0],jm[1],jm[2],jm[3]]),km=dd=>(Dm.setInt32(0,dd,!1),[jm[0],jm[1],jm[2],jm[3]]),fm=dd=>(Dm.setUint32(0,Math.floor(dd/2**32),!1),Dm.setUint32(4,dd,!1),[jm[0],jm[1],jm[2],jm[3],jm[4],jm[5],jm[6],jm[7]]),Mm=dd=>(Dm.setInt32(0,Math.floor(dd/2**32),!1),Dm.setUint32(4,dd,!1),[jm[0],jm[1],jm[2],jm[3],jm[4],jm[5],jm[6],jm[7]]),dW=dd=>(Dm.setInt16(0,256*dd,!1),[jm[0],jm[1]]),OW=dd=>(Dm.setInt32(0,65536*dd,!1),[jm[0],jm[1],jm[2],jm[3]]),mW=dd=>(Dm.setInt32(0,2**30*dd,!1),[jm[0],jm[1],jm[2],jm[3]]),WW=(dd,Od)=>{const md=[];let Wd=dd;do{let dd=127&Wd;Wd>>=7,md.length>0&&(dd|=128),md.push(dd),void 0!==Od&&Od--}while(Wd>0||Od);return md.reverse()},FW=function(dd){let Od=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const md=Array(dd.length).fill(null).map(((Od,md)=>dd.charCodeAt(md)));return Od&&md.push(0),md},RW=dd=>[OW(dd[0]),OW(dd[1]),mW(dd[2]),OW(dd[3]),OW(dd[4]),mW(dd[5]),OW(dd[6]),OW(dd[7]),mW(dd[8])],XW=(dd,Od,md)=>({type:dd,contents:Od&&new Uint8Array(Od.flat(10)),children:md}),KW=(dd,Od,md,Wd,Fd)=>XW(dd,[em(Od),Cm(md),Wd??[]],Fd),hW=()=>XW("styp",[FW("iso5"),Zm(0),FW("iso5"),FW("iso6"),FW("mp41"),FW("cmfc"),FW("dash")]),vW=(dd,Od)=>{const md=Math.max(0,dd.minWrittenTimestamp);let Wd=Math.max(0,dd.maxWrittenEndTimestamp-md);return Number.isFinite(Wd)||(Wd=0),KW("sidx",1,0,[Zm(1),Zm(LF),fm(zF(md,LF)),fm(0),Im(0),Im(1),Zm(2147483647&Od),Zm(zF(Wd,LF)),Zm(0)])},QW=dd=>({type:"mdat",largeSize:dd}),tW=dd=>XW("moov",void 0,[oW(dd.creationTime,dd.trackDatas),...dd.trackDatas.map((Od=>NW(Od,dd.creationTime))),dd.isFragmented?dF(dd.trackDatas):null,qF(dd)]),oW=(dd,Od)=>{const md=Math.max(0,...Od.map((dd=>Math.max(0,zF(cF(dd),LF)+zF(dd.startTimestampOffset??0,LF))))),Wd=Math.max(0,...Od.map((dd=>dd.track.id)))+1,Fd=!nd(dd)||!nd(md),Rd=Fd?fm:Zm;return KW("mvhd",+Fd,0,[Rd(dd),Rd(dd),Zm(LF),Rd(md),OW(1),dW(1),Array(10).fill(0),RW(Vd),Array(24).fill(0),Zm(Wd)])},NW=(dd,Od)=>{const md=PF(dd),Wd=null!==dd.startTimestampOffset&&0!==dd.startTimestampOffset;return XW("trak",void 0,[qW(dd,Od),Wd?HW(dd):null,yW(dd,Od),void 0!==md.name?XW("udta",void 0,[XW("name",[...Dd.encode(md.name)])]):null])},qW=(dd,Od)=>{const md=Math.max(0,zF(cF(dd),LF)+zF(dd.startTimestampOffset??0,LF)),Wd=!nd(Od)||!nd(md),Fd=Wd?fm:Zm;let Rd;if("video"===dd.type&&dd.track.metadata.transformationMatrix)Rd=dd.track.metadata.transformationMatrix;else if("video"===dd.type){const{rotation:Od,flip:md}=dd.track.metadata;Rd=((dd,Od,md)=>{const[Wd,Fd,,Rd,Xd]=dd,Kd=Math.abs(Wd)*Od+Math.abs(Rd)*md,hd=Math.abs(Fd)*Od+Math.abs(Xd)*md;return rd(rd(Ad(-Od/2,-md/2),dd),Ad(Kd/2,hd/2))})(rd(id(Od??0),[md?-1:1,0,0,0,1,0,0,0,1]),dd.info.width,dd.info.height)}else Rd=Vd;let Xd=2;!1!==dd.track.metadata.disposition?.default&&(Xd|=1);const Kd="video"===dd.type?0:"audio"===dd.type?1:"subtitle"===dd.type?2:Md(dd);return KW("tkhd",+Wd,Xd,[Fd(Od),Fd(Od),Zm(dd.track.id),Zm(0),Fd(md),Array(8).fill(0),Im(0),Im(Kd),dW("audio"===dd.type?1:0),Im(0),RW(Rd),OW("video"===dd.type?dd.info.width:0),OW("video"===dd.type?dd.info.height:0)])},HW=dd=>{const Od=dd.startTimestampOffset;if(sd(null!==Od),Od>0){const md=zF(Od,LF),Wd=zF(cF(dd),LF),Fd=!nd(md)||!nd(Wd),Rd=Fd?fm:Zm,Xd=Fd?Mm:km;return XW("edts",void 0,[KW("elst",Fd?1:0,0,[Zm(2),Rd(md),Xd(-1),OW(1),Rd(Wd),Xd(0),OW(1)])])}{const Wd=zF(-Od,dd.timescale),Fd=Math.max(0,zF(cF(dd),LF)+zF(Od,LF)),Rd=!((md=Wd)>=-(2**31)&&md<2**31)||!nd(Fd),Xd=Rd?fm:Zm,Kd=Rd?Mm:km;return XW("edts",void 0,[KW("elst",Rd?1:0,0,[Zm(1),Xd(Fd),Kd(Wd),OW(1)])])}var md},yW=(dd,Od)=>XW("mdia",void 0,[bW(dd,Od),YW(!0,TW[dd.type],pW[dd.type]),gW(dd)]),bW=(dd,Od)=>{const md=zF(cF(dd),dd.timescale),Wd=!nd(Od)||!nd(md),Fd=Wd?fm:Zm;return KW("mdhd",+Wd,0,[Fd(Od),Fd(Od),Zm(dd.timescale),Fd(md),Im(BF(dd.track.metadata.languageCode??OO)),Im(0)])},TW={video:"vide",audio:"soun",subtitle:"text"},pW={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},YW=function(dd,Od,md){let Wd=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return KW("hdlr",0,0,[dd?FW("mhlr"):Zm(0),FW(Od),FW(Wd),Zm(0),Zm(0),FW(md,!0)])},gW=dd=>XW("minf",void 0,[wW[dd.type](),aW(),UW(dd)]),wW={video:()=>KW("vmhd",0,1,[Im(0),Im(0),Im(0),Im(0)]),audio:()=>KW("smhd",0,0,[Im(0),Im(0)]),subtitle:()=>KW("nmhd",0,0)},aW=()=>XW("dinf",void 0,[EW()]),EW=()=>KW("dref",0,0,[Zm(1)],[JW()]),JW=()=>KW("url ",0,1),UW=dd=>{const Od=dd.compositionTimeOffsetTable.length>1||dd.compositionTimeOffsetTable.some((dd=>0!==dd.sampleCompositionTimeOffset));return XW("stbl",void 0,[xW(dd),IW(dd),Od?fW(dd):null,Od?MW(dd):null,CW(dd),ZW(dd),kW(dd),lW(dd)])},xW=dd=>{let Od;if("video"===dd.type)Od=BW(wF(dd.track.source._codec,dd.info.decoderConfig.codec),dd);else if("audio"===dd.type){const md=EF(dd.track.source._codec,dd.info.decoderConfig.codec,dd.muxer.isQuickTime);sd(md),Od=iW(md,dd)}else"subtitle"===dd.type&&(Od=eW(UF[dd.track.source._codec],dd));return sd(Od),KW("stsd",0,0,[Zm(1)],[Od])},BW=(dd,Od)=>XW(dd,[Array(6).fill(0),Im(1),Im(0),Im(0),Array(12).fill(0),Im(Od.info.width),Im(Od.info.height),Zm(4718592),Zm(4718592),Zm(0),Im(1),em(18),FW(UO),Array(13).fill(0),Im(Od.info.hasAlphaChannel?32:24),lm(65535)],[aF[Od.track.source._codec]?.(Od)??null,sW(Od),Cd(Od.info.decoderConfig.colorSpace)?null:uW(Od),SW(Od)]),SW=dd=>0===dd.avgBitrate&&0===dd.maxBitrate?null:XW("btrt",[Zm(0),Zm(dd.maxBitrate),Zm(dd.avgBitrate)]),sW=dd=>dd.info.pixelAspectRatio.num===dd.info.pixelAspectRatio.den?null:XW("pasp",[Zm(dd.info.pixelAspectRatio.num),Zm(dd.info.pixelAspectRatio.den)]),uW=dd=>{const Od=dd.info.decoderConfig.colorSpace;return XW("colr",[FW(dd.muxer.isQuickTime?"nclc":"nclx"),Im(null!=Od?.primaries?ed[Od.primaries]:2),Im(null!=Od?.transfer?Id[Od.transfer]:2),Im(null!=Od?.matrix?ld[Od.matrix]:2),dd.muxer.isQuickTime?[]:em((Od?.fullRange?1:0)<<7)])},VW=dd=>{if(!dd.info.decoderConfig)return null;const Od=dd.info.decoderConfig,md=Od.codec.split("."),Wd=Number(md[1]),Fd=Number(md[2]),Rd=(Number(md[3])<<4)+((md[4]?Number(md[4]):1)<<1)+(md[8]?Number(md[8]):Number(Od.colorSpace?.fullRange??0)),Xd=md[5]?Number(md[5]):Od.colorSpace?.primaries?ed[Od.colorSpace.primaries]:1,Kd=md[6]?Number(md[6]):Od.colorSpace?.transfer?Id[Od.colorSpace.transfer]:1,hd=md[7]?Number(md[7]):Od.colorSpace?.matrix?ld[Od.colorSpace.matrix]:1;return KW("vpcC",1,0,[em(Wd),em(Fd),em(Rd),em(Xd),em(Kd),em(hd),Im(0)])},iW=(dd,Od)=>{let md,Wd=0,Fd=16;const Rd=om.includes(Od.track.source._codec);if(Rd){const dd=Od.track.source._codec,{sampleSize:md}=gm(dd);Fd=8*md,Fd>16&&(Wd=1)}if(Od.muxer.isQuickTime&&(Wd=1),0===Wd)md=[Array(6).fill(0),Im(1),Im(Wd),Im(0),Zm(0),Im(Od.info.numberOfChannels),Im(Fd),Im(0),Im(0),Im(Od.info.sampleRate<65536?Od.info.sampleRate:0),Im(0)];else{const dd=Rd?0:-2;md=[Array(6).fill(0),Im(1),Im(Wd),Im(0),Zm(0),Im(Od.info.numberOfChannels),Im(Math.min(Fd,16)),lm(dd),Im(0),Im(Od.info.sampleRate<65536?Od.info.sampleRate:0),Im(0),Rd?[Zm(1),Zm(Fd/8),Zm(Od.info.numberOfChannels*Fd/8)]:[Zm(0),Zm(0),Zm(0)],Zm(2)]}return XW(dd,md,[JF(Od.track.source._codec,Od.muxer.isQuickTime)?.(Od)??null,SW(Od)])},AW=dd=>{let Od;switch(dd.track.source._codec){case"aac":Od=64;break;case"mp3":Od=107;break;case"vorbis":Od=221;break;default:throw new Error(`Unhandled audio codec: ${dd.track.source._codec}`)}let md=[...em(Od),...em(21),...Cm(0),...Zm(dd.maxBitrate),...Zm(dd.avgBitrate)];if(dd.info.decoderConfig.description){const Od=zd(dd.info.decoderConfig.description);md=[...md,...em(5),...WW(Od.byteLength),...Od]}return md=[...Im(1),...em(0),...em(4),...WW(md.length),...md,...em(6),...em(1),...em(2)],md=[...em(3),...WW(md.length),...md],KW("esds",0,0,md)},rW=dd=>XW("wave",void 0,[GW(dd),nW(dd),XW("\\0\\0\\0\\0")]),GW=dd=>XW("frma",[FW(EF(dd.track.source._codec,dd.info.decoderConfig.codec,dd.muxer.isQuickTime))]),nW=dd=>{const{littleEndian:Od}=gm(dd.track.source._codec);return XW("enda",[Im(+Od)])},LW=dd=>{let Od=dd.info.numberOfChannels,md=3840,Wd=dd.info.sampleRate,Fd=0,Rd=0,Xd=new Uint8Array(0);const Kd=dd.info.decoderConfig?.description;if(Kd){sd(Kd.byteLength>=18);const dd=zd(Kd),hd=CO(dd);Od=hd.outputChannelCount,md=hd.preSkip,Wd=hd.inputSampleRate,Fd=hd.outputGain,Rd=hd.channelMappingFamily,hd.channelMappingTable&&(Xd=hd.channelMappingTable)}return XW("dOps",[em(0),em(Od),Im(md),Zm(Wd),lm(Fd),em(Rd),...Xd])},PW=dd=>{const Od=dd.info.decoderConfig?.description;sd(Od);const md=zd(Od);return KW("dfLa",0,0,[...md.subarray(4)])},zW=dd=>{const{littleEndian:Od,sampleSize:md}=gm(dd.track.source._codec);return KW("pcmC",0,0,[em(+Od),em(8*md)])},cW=dd=>{sd(dd.info.primingPacket);const Od=(dd=>{if(dd.length<7)return null;if(11!==dd[0]||119!==dd[1])return null;const Od=new HO(dd);Od.skipBits(16),Od.skipBits(16);const md=Od.readBits(2);if(3===md)return null;const Wd=Od.readBits(6),Fd=Od.readBits(5);if(Fd>8)return null;const Rd=Od.readBits(3),Xd=Od.readBits(3);return 0!==(1&Xd)&&1!==Xd&&Od.skipBits(2),0!==(4&Xd)&&Od.skipBits(2),2===Xd&&Od.skipBits(2),{fscod:md,bsid:Fd,bsmod:Rd,acmod:Xd,lfeon:Od.readBits(1),bitRateCode:Math.floor(Wd/2)}})(dd.info.primingPacket.data);if(!Od)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const md=new Uint8Array(3),Wd=new HO(md);return Wd.writeBits(2,Od.fscod),Wd.writeBits(5,Od.bsid),Wd.writeBits(3,Od.bsmod),Wd.writeBits(3,Od.acmod),Wd.writeBits(1,Od.lfeon),Wd.writeBits(5,Od.bitRateCode),Wd.writeBits(5,0),XW("dac3",[...md])},jW=dd=>{sd(dd.info.primingPacket);const Od=(dd=>{if(dd.length<6)return null;if(11!==dd[0]||119!==dd[1])return null;const Od=new HO(dd);Od.skipBits(16);const md=Od.readBits(2);if(Od.skipBits(3),0!==md&&2!==md)return null;const Wd=Od.readBits(11),Fd=Od.readBits(2);let Rd,Xd=0;3===Fd?(Xd=Od.readBits(2),Rd=3):Rd=Od.readBits(2);const Kd=Od.readBits(3),hd=Od.readBits(1),vd=Od.readBits(5);if(vd<11||vd>16)return null;const Qd=kO[Rd];let td;return td=Fd<3?EO[Fd]/1e3:JO[Xd]/1e3,{dataRate:Math.round((Wd+1)*td/(16*Qd)),substreams:[{fscod:Fd,fscod2:Xd,bsid:vd,bsmod:0,acmod:Kd,lfeon:hd,numDepSub:0,chanLoc:0}]}})(dd.info.primingPacket.data);if(!Od)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let md=16;for(const Xd of Od.substreams)md+=23,Xd.numDepSub>0?md+=9:md+=1;const Wd=Math.ceil(md/8),Fd=new Uint8Array(Wd),Rd=new HO(Fd);Rd.writeBits(13,Od.dataRate),Rd.writeBits(3,Od.substreams.length-1);for(const Xd of Od.substreams)Rd.writeBits(2,Xd.fscod),Rd.writeBits(5,Xd.bsid),Rd.writeBits(1,0),Rd.writeBits(1,0),Rd.writeBits(3,Xd.bsmod),Rd.writeBits(3,Xd.acmod),Rd.writeBits(1,Xd.lfeon),Rd.writeBits(3,0),Rd.writeBits(4,Xd.numDepSub),Xd.numDepSub>0?Rd.writeBits(9,Xd.chanLoc):Rd.writeBits(1,0);return XW("dec3",[...Fd])},DW=dd=>{sd(dd.info.primingPacket);const Od=Xm(dd.info.primingPacket.data);if(!Od)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return XW("ddts",[...Qm(Od)])},eW=(dd,Od)=>XW(dd,[Array(6).fill(0),Im(1)],[xF[Od.track.source._codec](Od),SW(Od)]),IW=dd=>KW("stts",0,0,[Zm(dd.timeToSampleTable.length),dd.timeToSampleTable.map((dd=>[Zm(dd.sampleCount),Zm(dd.sampleDelta)]))]),lW=dd=>{if(dd.samples.every((dd=>"key"===dd.type)))return null;const Od=[...dd.samples.entries()].filter((dd=>{let[,Od]=dd;return"key"===Od.type}));return KW("stss",0,0,[Zm(Od.length),Od.map((dd=>{let[Od]=dd;return Zm(Od+1)}))])},CW=dd=>KW("stsc",0,0,[Zm(dd.compactlyCodedChunkTable.length),dd.compactlyCodedChunkTable.map((dd=>[Zm(dd.firstChunk),Zm(dd.samplesPerChunk),Zm(1)]))]),ZW=dd=>{if("audio"===dd.type&&dd.info.requiresPcmTransformation){const{sampleSize:Od}=gm(dd.track.source._codec);return KW("stsz",0,0,[Zm(Od*dd.info.numberOfChannels),Zm(dd.samples.reduce(((Od,md)=>Od+zF(md.duration,dd.timescale)),0))])}return KW("stsz",0,0,[Zm(0),Zm(dd.samples.length),dd.samples.map((dd=>Zm(dd.size)))])},kW=dd=>dd.finalizedChunks.length>0&&Gd(dd.finalizedChunks).offset>=2**32?KW("co64",0,0,[Zm(dd.finalizedChunks.length),dd.finalizedChunks.map((dd=>fm(dd.offset)))]):KW("stco",0,0,[Zm(dd.finalizedChunks.length),dd.finalizedChunks.map((dd=>Zm(dd.offset)))]),fW=dd=>KW("ctts",1,0,[Zm(dd.compositionTimeOffsetTable.length),dd.compositionTimeOffsetTable.map((dd=>[Zm(dd.sampleCount),km(dd.sampleCompositionTimeOffset)]))]),MW=dd=>{let Od=1/0,md=-1/0,Wd=1/0,Fd=-1/0;sd(dd.compositionTimeOffsetTable.length>0),sd(dd.samples.length>0);for(let Xd=0;Xd<dd.compositionTimeOffsetTable.length;Xd++){const Wd=dd.compositionTimeOffsetTable[Xd];Od=Math.min(Od,Wd.sampleCompositionTimeOffset),md=Math.max(md,Wd.sampleCompositionTimeOffset)}for(let Xd=0;Xd<dd.samples.length;Xd++){const Od=dd.samples[Xd];Wd=Math.min(Wd,zF(Od.timestamp,dd.timescale)),Fd=Math.max(Fd,zF(Od.timestamp+Od.duration,dd.timescale))}const Rd=Math.max(-Od,0);return Fd>=2**31?null:KW("cslg",0,0,[km(Rd),km(Od),km(md),km(Wd),km(Fd)])},dF=dd=>XW("mvex",void 0,dd.map(OF)),OF=dd=>KW("trex",0,0,[Zm(dd.track.id),Zm(1),Zm(0),Zm(0),Zm(0)]),mF=(dd,Od)=>XW("moof",void 0,[WF(dd),...Od.map(RF)]),WF=dd=>KW("mfhd",0,0,[Zm(dd)]),FF=dd=>{let Od=0,md=0;const Wd="delta"===dd.type;return md|=+Wd,Od|=Wd?1:2,Od<<24|md<<16},RF=dd=>XW("traf",void 0,[XF(dd),KF(dd),hF(dd)]),XF=dd=>{sd(dd.currentChunk);let Od=0;Od|=8,Od|=16,Od|=32,Od|=131072;const md=dd.currentChunk.samples[1]??dd.currentChunk.samples[0],Wd={duration:md.timescaleUnitsToNextSample,size:md.size,flags:FF(md)};return KW("tfhd",0,131128,[Zm(dd.track.id),Zm(Wd.duration),Zm(Wd.size),Zm(Wd.flags)])},KF=dd=>(sd(dd.currentChunk),KW("tfdt",1,0,[fm(zF(dd.currentChunk.startTimestamp,dd.timescale))])),hF=dd=>{sd(dd.currentChunk);const Od=dd.currentChunk.samples.map((dd=>dd.timescaleUnitsToNextSample)),md=dd.currentChunk.samples.map((dd=>dd.size)),Wd=dd.currentChunk.samples.map(FF),Fd=dd.currentChunk.samples.map((Od=>zF(Od.timestamp-Od.decodeTimestamp,dd.timescale))),Rd=new Set(Od),Xd=new Set(md),Kd=new Set(Wd),hd=new Set(Fd),vd=2===Kd.size&&Wd[0]!==Wd[1],Qd=Rd.size>1,td=Xd.size>1,od=!vd&&Kd.size>1,Nd=hd.size>1||[...hd].some((dd=>0!==dd));let qd=0;return qd|=1,qd|=4*+vd,qd|=256*+Qd,qd|=512*+td,qd|=1024*+od,qd|=2048*+Nd,KW("trun",1,qd,[Zm(dd.currentChunk.samples.length),Zm(dd.currentChunk.offset-dd.currentChunk.moofOffset||0),vd?Zm(Wd[0]):[],dd.currentChunk.samples.map(((dd,Rd)=>[Qd?Zm(Od[Rd]):[],td?Zm(md[Rd]):[],od?Zm(Wd[Rd]):[],Nd?km(Fd[Rd]):[]]))])},vF=dd=>KW("tfra",1,0,[Zm(dd.track.id),Zm(63),Zm(dd.finalizedChunks.length),dd.finalizedChunks.map((Od=>[fm(zF(Od.samples[0].timestamp,dd.timescale)),fm(Od.moofOffset),Zm(Od.trafIndex+1),Zm(1),Zm(1)]))]),QF=()=>KW("mfro",0,0,[Zm(0)]),tF=()=>XW("vtte"),oF=(dd,Od,md,Wd,Fd)=>XW("vttc",void 0,[null!==Fd?XW("vsid",[km(Fd)]):null,null!==md?XW("iden",[...Dd.encode(md)]):null,null!==Od?XW("ctim",[...Dd.encode(zm(Od))]):null,null!==Wd?XW("sttg",[...Dd.encode(Wd)]):null,XW("payl",[...Dd.encode(dd)])]),NF=dd=>XW("vtta",[...Dd.encode(dd)]),qF=dd=>{const Od=[],md=dd.format._options.metadataFormat??"auto",Wd=dd.output._metadataTags;if("mdir"===md||"auto"===md&&!dd.isQuickTime){const dd=pF(Wd);dd&&Od.push(dd)}else if("mdta"===md){const dd=YF(Wd);dd&&Od.push(dd)}else("udta"===md||"auto"===md&&dd.isQuickTime)&&HF(Od,dd.output._metadataTags);return 0===Od.length?null:XW("udta",void 0,Od)},HF=(dd,Od)=>{for(const{key:md,value:Wd}of KO(Od))switch(md){case"title":dd.push(yF("\\xa9nam",Wd));break;case"description":dd.push(yF("\\xa9des",Wd));break;case"artist":dd.push(yF("\\xa9ART",Wd));break;case"album":dd.push(yF("\\xa9alb",Wd));break;case"albumArtist":dd.push(yF("albr",Wd));break;case"genre":dd.push(yF("\\xa9gen",Wd));break;case"date":dd.push(yF("\\xa9day",Wd.toISOString().slice(0,10)));break;case"comment":dd.push(yF("\\xa9cmt",Wd));break;case"lyrics":dd.push(yF("\\xa9lyr",Wd));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:Md(md)}if(Od.raw)for(const md in Od.raw){const Wd=Od.raw[md];null==Wd||4!==md.length||dd.some((dd=>dd.type===md))||("string"===typeof Wd?dd.push(yF(md,Wd)):Wd instanceof Uint8Array&&dd.push(XW(md,Array.from(Wd))))}},yF=(dd,Od)=>{const md=Dd.encode(Od);return XW(dd,[Im(md.length),Im(BF("und")),Array.from(md)])},bF={"image/jpeg":13,"image/png":14,"image/bmp":27},TF=(dd,Od)=>{const md=[];for(const{key:Wd,value:Fd}of KO(dd))switch(Wd){case"title":md.push({key:Od?"title":"\\xa9nam",value:gF(Fd)});break;case"description":md.push({key:Od?"description":"\\xa9des",value:gF(Fd)});break;case"artist":md.push({key:Od?"artist":"\\xa9ART",value:gF(Fd)});break;case"album":md.push({key:Od?"album":"\\xa9alb",value:gF(Fd)});break;case"albumArtist":md.push({key:Od?"album_artist":"aART",value:gF(Fd)});break;case"comment":md.push({key:Od?"comment":"\\xa9cmt",value:gF(Fd)});break;case"genre":md.push({key:Od?"genre":"\\xa9gen",value:gF(Fd)});break;case"beatsPerMinute":Od||md.push({key:"tmpo",value:XW("data",[Zm(21),Zm(0),Im(Fd)])});break;case"lyrics":md.push({key:Od?"lyrics":"\\xa9lyr",value:gF(Fd)});break;case"date":md.push({key:Od?"date":"\\xa9day",value:gF(Fd.toISOString().slice(0,10))});break;case"images":for(const dd of Fd)"coverFront"===dd.kind&&md.push({key:"covr",value:XW("data",[Zm(bF[dd.mimeType]??0),Zm(0),Array.from(dd.data)])});break;case"trackNumber":if(Od){const Od=void 0!==dd.tracksTotal?`${Fd}/${dd.tracksTotal}`:Fd.toString();md.push({key:"track",value:gF(Od)})}else md.push({key:"trkn",value:XW("data",[Zm(0),Zm(0),Im(0),Im(Fd),Im(dd.tracksTotal??0),Im(0)])});break;case"discNumber":Od||md.push({key:"disc",value:XW("data",[Zm(0),Zm(0),Im(0),Im(Fd),Im(dd.discsTotal??0),Im(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:Md(Wd)}if(dd.raw)for(const Wd in dd.raw){const Fd=dd.raw[Wd];null==Fd||!Od&&4!==Wd.length||md.some((dd=>dd.key===Wd))||("string"===typeof Fd?md.push({key:Wd,value:gF(Fd)}):Fd instanceof Uint8Array?md.push({key:Wd,value:XW("data",[Zm(0),Zm(0),Array.from(Fd)])}):Fd instanceof NO&&md.push({key:Wd,value:XW("data",[Zm(bF[Fd.mimeType]??0),Zm(0),Array.from(Fd.data)])}))}return md},pF=dd=>{const Od=TF(dd,!1);return 0===Od.length?null:KW("meta",0,0,void 0,[YW(!1,"mdir","","appl"),XW("ilst",void 0,Od.map((dd=>XW(dd.key,void 0,[dd.value]))))])},YF=dd=>{const Od=TF(dd,!0);return 0===Od.length?null:XW("meta",void 0,[YW(!1,"mdta",""),KW("keys",0,0,[Zm(Od.length)],Od.map((dd=>XW("mdta",[...Dd.encode(dd.key)])))),XW("ilst",void 0,Od.map(((dd,Od)=>{const md=String.fromCharCode(...Zm(Od+1));return XW(md,void 0,[dd.value])})))])},gF=dd=>XW("data",[Zm(1),Zm(0),...Dd.encode(dd)]),wF=(dd,Od)=>{switch(dd){case"avc":return Od.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return Od}},aF={avc:dd=>dd.info.decoderConfig&&XW("avcC",[...zd(dd.info.decoderConfig.description)]),hevc:dd=>dd.info.decoderConfig&&XW("hvcC",[...zd(dd.info.decoderConfig.description)]),vp8:VW,vp9:VW,av1:dd=>XW("av1C",pm(dd.info.decoderConfig.codec)),prores:null},EF=(dd,Od,md)=>{switch(dd){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return Od}if(md)switch(dd){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(dd){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},JF=(dd,Od)=>{switch(dd){case"aac":case"mp3":case"vorbis":return AW;case"opus":return LW;case"flac":return PW;case"ac3":return cW;case"eac3":return jW;case"dts":return DW}if(Od)switch(dd){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return rW}else switch(dd){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return zW}return null},UF={webvtt:"wvtt"},xF={webvtt:dd=>XW("vttC",[...Dd.encode(dd.info.config.description)])},BF=dd=>{sd(3===dd.length);let Od=0;for(let md=0;md<3;md++)Od<<=5,Od+=dd.charCodeAt(md)-96;return Od};class SF{constructor(dd,Od){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,dd._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=dd,dd._setMonotonicity(Od),dd._writerAcquired=!0}start(){sd(!this.started),this.target._start(),this.started=!0}write(dd){sd(this.started&&!this.finalized),this.maybeTrackWrites(dd),this.target._write(dd,this.pos),this.pos+=dd.byteLength}seek(dd){this.pos=dd}getPos(){return this.pos}async flush(){return sd(this.started&&!this.finalized),this.target._flush()}async finalize(){sd(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(dd){if(!this.trackedWrites)return;let Od=this.getPos();if(Od<this.trackedStart){if(Od+dd.byteLength<=this.trackedStart)return;dd=dd.subarray(this.trackedStart-Od),Od=0}const md=Od+dd.byteLength-this.trackedStart;let Wd=this.trackedWrites.byteLength;for(;Wd<md;)Wd*=2;if(Wd!==this.trackedWrites.byteLength){const dd=new Uint8Array(Wd);dd.set(this.trackedWrites,0),this.trackedWrites=dd}this.trackedWrites.set(dd,Od-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,Od+dd.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const dd={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,dd}}md(13);class sF extends tO{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(dd){!1!==this._monotonicity&&(this._monotonicity=dd)}_dispatchWrite(dd,Od){this.onwrite?.(dd,Od),this._emit("write",{start:dd,end:Od})}slice(dd){if(!Number.isInteger(dd)||dd<0)throw new TypeError("offset must be a non-negative integer.");return new rF(this,dd)}}const uF=65536,VF=2**32;class iF extends sF{constructor(){let dd=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!dd||"object"!==typeof dd)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==dd.onFinalize&&"function"!==typeof dd.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=dd,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(uF,{maxByteLength:VF})}catch{this._buffer=new ArrayBuffer(uF),this._supportsResize=!1}else this._buffer=new ArrayBuffer(uF);this._bytes=new Uint8Array(this._buffer)}_ensureSize(dd){let Od=this._buffer.byteLength;for(;Od<dd;)Od*=2;if(Od!==this._buffer.byteLength){if(Od>VF)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(Od);else{const dd=new ArrayBuffer(Od),md=new Uint8Array(dd);md.set(this._bytes,0),this._buffer=dd,this._bytes=md}}}_start(){}_write(dd,Od){this._ensureSize(Od+dd.byteLength),this._bytes.set(dd,Od),this._maxPos=Math.max(this._maxPos,Od+dd.byteLength),this._dispatchWrite(Od,Od+dd.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(dd,Od){return this._bytes.slice(dd,Od)}}class AF extends sF{_start(){}_write(dd,Od){this._dispatchWrite(Od,Od+dd.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class rF extends sF{constructor(dd,Od){super(),this._baseTarget=dd,this._offset=Od}_start(){}_write(dd,Od){this._baseTarget._write(dd,this._offset+Od),this._dispatchWrite(Od,Od+dd.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(dd){super._setMonotonicity(dd),this._baseTarget._setMonotonicity(dd)}}class GF{constructor(dd,Od){if(this.rootPath=dd,this.getTarget=Od,"string"!==typeof dd)throw new TypeError("rootPath must be a string.");if("function"!==typeof Od)throw new TypeError("getTarget must be a function.")}}const nF=dd=>{const Od=dd.filePos,md=rm(dd,9),Wd=new HO(md);if(4095!==Wd.readBits(12))return null;Wd.skipBits(1);if(0!==Wd.readBits(2))return null;const Fd=Wd.readBits(1),Rd=Wd.readBits(2)+1,Xd=Wd.readBits(4);if(15===Xd)return null;Wd.skipBits(1);const Kd=Wd.readBits(3);if(0===Kd)throw new Error("ADTS frames with channel configuration 0 are not supported.");Wd.skipBits(1),Wd.skipBits(1),Wd.skipBits(1),Wd.skipBits(1);const hd=Wd.readBits(13);Wd.skipBits(11);const vd=Wd.readBits(2)+1;if(1!==vd)throw new Error("ADTS frames with more than one AAC frame are not supported.");let Qd=null;return 1===Fd?dd.filePos-=2:Qd=Wd.readBits(16),{objectType:Rd,samplingFrequencyIndex:Xd,channelConfiguration:Kd,frameLength:hd,numberOfAacFrames:vd,crcCheck:Qd,startPos:Od}},LF=57600,PF=dd=>{const Od={},md=dd.track;return void 0!==md.metadata.name&&(Od.name=md.metadata.name),Od},zF=function(dd,Od){const md=dd*Od;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(md):md},cF=dd=>{if(0===dd.samples.length)return 0;let Od=1/0,md=-1/0;for(let Wd=0;Wd<dd.samples.length;Wd++){const Fd=dd.samples[Wd];Fd.timestamp<Od&&(Od=Fd.timestamp),Fd.timestamp+Fd.duration>md&&(md=Fd.timestamp+Fd.duration)}return Od===1/0?0:md-Od};class jF extends Lm{constructor(dd,Od){super(dd),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new iF,this.auxWriter=new SF(this.auxTarget,!1),this.auxBoxWriter=new cm(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=fd(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=Od,this.formatOptions={...Od._options},this.isQuickTime=Od instanceof NR,this.isCmaf=Od instanceof oR,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(Od instanceof oR?1/0:1),this.auxWriter.start()}async start(){const dd=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((dd=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:dd instanceof iF)),this.boxWriter=new cm(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof iF&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const dd=await this.output._getInitTarget(),Od=new SF(dd,!0);Od.start(),this.initWriter=Od,this.initBoxWriter=new cm(Od)}const Od=this.output.tracks.some((dd=>dd.isVideoTrack()&&"avc"===dd.source._codec));{const dd=this.initBoxWriter??this.boxWriter;if(sd(dd),this.formatOptions.onFtyp&&dd.writer.startTrackingWrites(),dd.writeBox((dd=>{const Od=512;return dd.isQuickTime?XW("ftyp",[FW("qt  "),Zm(Od),FW("qt  ")]):dd.fragmented?dd.cmaf?XW("ftyp",[FW("iso5"),Zm(Od),FW("iso5"),FW("iso6"),FW("mp41"),FW("cmfc"),FW("dash")]):XW("ftyp",[FW("iso5"),Zm(Od),FW("iso5"),FW("iso6"),FW("mp41")]):XW("ftyp",[FW("isom"),Zm(Od),FW("isom"),dd.holdsAvc?FW("avc1"):[],FW("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:Od,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:Od,start:md}=dd.writer.stopTrackingWrites();this.formatOptions.onFtyp(Od,md)}this.ftypSize=dd.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const md of this.output.tracks)if(void 0===md.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(sd(this.writer),sd(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=QW(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const md of this.output.tracks)md.isVideoTrack()&&md.metadata.decoderConfig?this.getVideoTrackData(md,md.metadata.primingPacket??null,{decoderConfig:md.metadata.decoderConfig}):md.isAudioTrack()&&md.metadata.decoderConfig&&this.getAudioTrackData(md,md.metadata.primingPacket??null,{decoderConfig:md.metadata.decoderConfig});dd()}allTracksAreKnown(){for(const dd of this.output.tracks)if(!dd.source._closed&&!this.trackDatas.some((Od=>Od.track===dd)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const dd=this.trackDatas.map((dd=>{if("video"===dd.type)return dd.info.decoderConfig.codec;if("audio"===dd.type)return dd.info.decoderConfig.codec;return{webvtt:"wvtt"}[dd.track.source._codec]}));return(dd=>{let Od=(dd.hasVideo?"video/":dd.hasAudio?"audio/":"application/")+(dd.isQuickTime?"quicktime":"mp4");dd.codecStrings.length>0&&(Od+=`; codecs="${[...new Set(dd.codecStrings)].join(", ")}"`);return Od})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((dd=>"video"===dd.type)),hasAudio:this.trackDatas.some((dd=>"audio"===dd.type)),codecStrings:dd})}getVideoTrackData(dd,Od,md){const Wd=this.trackDatas.find((Od=>Od.track===dd));if(Wd)return Wd;Bm(md,dd.source._codec),sd(md),sd(md.decoderConfig);const Fd={...md.decoderConfig};sd(void 0!==Fd.codedWidth),sd(void 0!==Fd.codedHeight);let Rd=!1;if("avc"!==dd.source._codec||Fd.description){if("hevc"===dd.source._codec&&!Fd.description){if(!Od)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const dd=LO(Od.data);if(!dd)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");Fd.description=(dd=>{const Od=[];Od.push(dd.configurationVersion),Od.push((3&dd.generalProfileSpace)<<6|(1&dd.generalTierFlag)<<5|31&dd.generalProfileIdc),Od.push(dd.generalProfileCompatibilityFlags>>>24&255),Od.push(dd.generalProfileCompatibilityFlags>>>16&255),Od.push(dd.generalProfileCompatibilityFlags>>>8&255),Od.push(255&dd.generalProfileCompatibilityFlags),Od.push(...dd.generalConstraintIndicatorFlags),Od.push(255&dd.generalLevelIdc),Od.push(240|dd.minSpatialSegmentationIdc>>8&15),Od.push(255&dd.minSpatialSegmentationIdc),Od.push(252|3&dd.parallelismType),Od.push(252|3&dd.chromaFormatIdc),Od.push(248|7&dd.bitDepthLumaMinus8),Od.push(248|7&dd.bitDepthChromaMinus8),Od.push(dd.avgFrameRate>>8&255),Od.push(255&dd.avgFrameRate),Od.push((3&dd.constantFrameRate)<<6|(7&dd.numTemporalLayers)<<3|(1&dd.temporalIdNested)<<2|3&dd.lengthSizeMinusOne),Od.push(255&dd.arrays.length);for(const md of dd.arrays){Od.push((1&md.arrayCompleteness)<<7|63&md.nalUnitType),Od.push(md.nalUnits.length>>8&255),Od.push(255&md.nalUnits.length);for(const dd of md.nalUnits){Od.push(dd.length>>8&255),Od.push(255&dd.length);for(let md=0;md<dd.length;md++)Od.push(dd[md])}}return new Uint8Array(Od)})(dd),Rd=!0}}else{if(!Od)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const dd=iO(Od.data);if(!dd)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");Fd.description=(dd=>{const Od=[];Od.push(dd.configurationVersion),Od.push(dd.avcProfileIndication),Od.push(dd.profileCompatibility),Od.push(dd.avcLevelIndication),Od.push(252|3&dd.lengthSizeMinusOne),Od.push(224|31&dd.sequenceParameterSets.length);for(const md of dd.sequenceParameterSets){const dd=md.byteLength;Od.push(dd>>8),Od.push(255&dd);for(let Wd=0;Wd<dd;Wd++)Od.push(md[Wd])}Od.push(dd.pictureParameterSets.length);for(const md of dd.pictureParameterSets){const dd=md.byteLength;Od.push(dd>>8),Od.push(255&dd);for(let Wd=0;Wd<dd;Wd++)Od.push(md[Wd])}if((100===dd.avcProfileIndication||110===dd.avcProfileIndication||122===dd.avcProfileIndication||144===dd.avcProfileIndication)&&null!==dd.chromaFormat){sd(null!==dd.bitDepthLumaMinus8),sd(null!==dd.bitDepthChromaMinus8),sd(null!==dd.sequenceParameterSetExt),Od.push(252|3&dd.chromaFormat),Od.push(248|7&dd.bitDepthLumaMinus8),Od.push(248|7&dd.bitDepthChromaMinus8),Od.push(dd.sequenceParameterSetExt.length);for(const md of dd.sequenceParameterSetExt){const dd=md.byteLength;Od.push(dd>>8),Od.push(255&dd);for(let Wd=0;Wd<dd;Wd++)Od.push(md[Wd])}}return new Uint8Array(Od)})(dd),Rd=!0}const Xd=((dd,Od)=>{const md=dd<0?-1:1;let Wd=0,Fd=1,Rd=1,Xd=0,Kd=dd=Math.abs(dd);for(;;){const dd=Math.floor(Kd),hd=dd*Rd+Wd,vd=dd*Xd+Fd;if(vd>Od)return{num:md*Rd,den:Xd};if(Wd=Rd,Fd=Xd,Rd=hd,Xd=vd,Kd=1/(Kd-dd),!isFinite(Kd))break}return{num:md*Rd,den:Xd}})(1/(dd.metadata.frameRate??LF),1e6).den,Kd=Fd.displayAspectWidth,hd=Fd.displayAspectHeight,vd=void 0===Kd||void 0===hd?{num:1,den:1}:vO({num:Kd*Fd.codedHeight,den:hd*Fd.codedWidth}),Qd="ap4h"===Fd.codec||"ap4x"===Fd.codec,td={muxer:this,track:dd,type:"video",info:{width:Fd.codedWidth,height:Fd.codedHeight,pixelAspectRatio:vd,decoderConfig:Fd,requiresAnnexBTransformation:Rd,hasAlphaChannel:Qd},timescale:Xd,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:dd.source._nominalBitrate??dd.metadata.averageBitrate??0,maxBitrate:dd.source._nominalBitrate??dd.metadata.bitrate??0};return this.trackDatas.push(td),this.trackDatas.sort(((dd,Od)=>dd.track.id-Od.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),td}getAudioTrackData(dd,Od,md){const Wd=this.trackDatas.find((Od=>Od.track===dd));if(Wd)return Wd;sm(md,dd.source._codec),sd(md),sd(md.decoderConfig);const Fd={...md.decoderConfig};let Rd=!1;if("aac"===dd.source._codec&&!Fd.description){if(!Od)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const dd=nF(im.tempFromBytes(Od.data));if(!dd)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const md=yO[dd.samplingFrequencyIndex],Wd=bO[dd.channelConfiguration];if(void 0===md||void 0===Wd)throw new Error("Invalid ADTS frame header.");Fd.description=TO({objectType:dd.objectType,outputSampleRate:md,outputNumberOfChannels:Wd}),Rd=!0}if(!Od){if("ac3"===dd.source._codec||"eac3"===dd.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===dd.source._codec)throw new Error("DTS requires a priming packet.")}const Xd={muxer:this,track:dd,type:"audio",info:{numberOfChannels:md.decoderConfig.numberOfChannels,sampleRate:md.decoderConfig.sampleRate,decoderConfig:Fd,requiresPcmTransformation:!this.isFragmented&&om.includes(dd.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:Rd,primingPacket:Od},timescale:Fd.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:dd.source._nominalBitrate??dd.metadata.averageBitrate??0,maxBitrate:dd.source._nominalBitrate??dd.metadata.bitrate??0};return this.trackDatas.push(Xd),this.trackDatas.sort(((dd,Od)=>dd.track.id-Od.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),Xd}getSubtitleTrackData(dd,Od){const md=this.trackDatas.find((Od=>Od.track===dd));if(md)return md;um(Od),sd(Od),sd(Od.config);const Wd={muxer:this,track:dd,type:"subtitle",info:{config:Od.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:dd.source._nominalBitrate??dd.metadata.averageBitrate??0,maxBitrate:dd.source._nominalBitrate??dd.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(Wd),this.trackDatas.sort(((dd,Od)=>dd.track.id-Od.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),Wd}async addEncodedVideoPacket(dd,Od,md){const Wd=await this.mutex.acquire();try{const Wd=this.getVideoTrackData(dd,Od,md);let Fd=Od.data;if(Wd.info.requiresAnnexBTransformation){const dd=[...SO(Fd)].map((dd=>Fd.subarray(dd.offset,dd.offset+dd.length)));if(0===dd.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");Fd=VO(dd,4)}this.validateTimestamp(Wd.track,Od.timestamp,"key"===Od.type);const Rd=this.createSampleForTrack(Wd,Fd,Od.timestamp,Od.duration,Od.type);await this.registerSample(Wd,Rd)}finally{Wd()}}async addEncodedAudioPacket(dd,Od,md){const Wd=await this.mutex.acquire();try{const Wd=this.getAudioTrackData(dd,Od,md);let Fd=Od.data;if(Wd.info.requiresAdtsStripping){const dd=nF(im.tempFromBytes(Fd));if(!dd)throw new Error("Expected ADTS frame, didn\'t get one.");const Od=null===dd.crcCheck?7:9;Fd=Fd.subarray(Od)}this.validateTimestamp(Wd.track,Od.timestamp,"key"===Od.type);let Rd=Od.timestamp,Xd=Od.duration;if(Wd.info.requiresPcmTransformation){const dd=gm(Wd.info.decoderConfig.codec).sampleSize*Wd.info.numberOfChannels;if(Xd=Fd.byteLength/dd/Wd.info.sampleRate,null!==Wd.info.expectedNextPcmPacketTimestamp){const dd=Rd-Wd.info.expectedNextPcmPacketTimestamp;if(dd<.01)Rd=Wd.info.expectedNextPcmPacketTimestamp;else{const Od=await this.padWithSilence(Wd,Wd.info.expectedNextPcmPacketTimestamp,dd);Rd=Wd.info.expectedNextPcmPacketTimestamp+Od}}Wd.info.expectedNextPcmPacketTimestamp=Rd+Xd}const Kd=this.createSampleForTrack(Wd,Fd,Rd,Xd,Od.type);await this.registerSample(Wd,Kd)}finally{Wd()}}async padWithSilence(dd,Od,md){const Wd=zF(md,dd.timescale);if(md=Wd/dd.timescale,Wd>0){const{sampleSize:Fd,silentValue:Rd}=gm(dd.info.decoderConfig.codec),Xd=Wd*dd.info.numberOfChannels,Kd=new Uint8Array(Fd*Xd).fill(Rd),hd=this.createSampleForTrack(dd,new Uint8Array(Kd.buffer),Od,md,"key");await this.registerSample(dd,hd)}return md}async addSubtitleCue(dd,Od,md){const Wd=await this.mutex.acquire();try{const Wd=this.getSubtitleTrackData(dd,md);this.validateTimestamp(Wd.track,Od.timestamp,!0),"webvtt"===dd.source._codec&&(Wd.cueQueue.push(Od),await this.processWebVTTCues(Wd,Od.timestamp))}finally{Wd()}}async processWebVTTCues(dd,Od){for(;dd.cueQueue.length>0;){dd.lastCueEndTimestamp??=Math.min(0,dd.cueQueue[0].timestamp);const md=new Set([]);for(const hd of dd.cueQueue)sd(hd.timestamp<=Od),sd(dd.lastCueEndTimestamp<=hd.timestamp+hd.duration),md.add(Math.max(hd.timestamp,dd.lastCueEndTimestamp)),md.add(hd.timestamp+hd.duration);const Wd=[...md].sort(((dd,Od)=>dd-Od)),Fd=Wd[0],Rd=Wd[1]??Fd;if(Od<Rd)break;if(dd.lastCueEndTimestamp<Fd){this.auxWriter.seek(0);const Od=tF();this.auxBoxWriter.writeBox(Od);const md=this.auxTarget._getSlice(0,this.auxWriter.getPos()),Wd=this.createSampleForTrack(dd,md,dd.lastCueEndTimestamp,Fd-dd.lastCueEndTimestamp,"key");await this.registerSample(dd,Wd),dd.lastCueEndTimestamp=Fd}this.auxWriter.seek(0);for(let Od=0;Od<dd.cueQueue.length;Od++){const md=dd.cueQueue[Od];if(md.timestamp>=Rd)break;Pm.lastIndex=0;const Wd=Pm.test(md.text),Xd=md.timestamp+md.duration;let Kd=dd.cueToSourceId.get(md);if(void 0===Kd&&Rd<Xd&&(Kd=dd.nextSourceId++,dd.cueToSourceId.set(md,Kd)),md.notes){const dd=NF(md.notes);this.auxBoxWriter.writeBox(dd)}const hd=oF(md.text,Wd?Fd:null,md.identifier??null,md.settings??null,Kd??null);this.auxBoxWriter.writeBox(hd),Xd===Rd&&dd.cueQueue.splice(Od--,1)}const Xd=this.auxTarget._getSlice(0,this.auxWriter.getPos()),Kd=this.createSampleForTrack(dd,Xd,Fd,Rd-Fd,"key");await this.registerSample(dd,Kd),dd.lastCueEndTimestamp=Rd}}createSampleForTrack(dd,Od,md,Wd,Fd){return{timestamp:md,decodeTimestamp:md,duration:Wd,data:Od,size:Od.byteLength,type:Fd,timescaleUnitsToNextSample:zF(Wd,dd.timescale)}}processTimestamps(dd,Od){if(0===dd.timestampProcessingQueue.length)return;if("audio"===dd.type&&dd.info.requiresPcmTransformation){sd(!this.isFragmented),dd.startTimestampOffset??=dd.timestampProcessingQueue[0].timestamp;let Od=0;for(let md=0;md<dd.timestampProcessingQueue.length;md++){const Wd=dd.timestampProcessingQueue[md];Od+=zF(Wd.duration,dd.timescale)}if(0===dd.timeToSampleTable.length)dd.timeToSampleTable.push({sampleCount:Od,sampleDelta:1});else{Gd(dd.timeToSampleTable).sampleCount+=Od}return void(dd.timestampProcessingQueue.length=0)}const md=dd.timestampProcessingQueue.map((dd=>dd.timestamp)).sort(((dd,Od)=>dd-Od));this.isFragmented?dd.startTimestampOffset??=Math.min(md[0],0):dd.startTimestampOffset??=md[0];for(let Wd=0;Wd<dd.timestampProcessingQueue.length;Wd++){const Od=dd.timestampProcessingQueue[Wd];Od.decodeTimestamp=md[Wd];const Fd=zF(Od.timestamp-Od.decodeTimestamp,dd.timescale),Rd=zF(Od.duration,dd.timescale);if(null!==dd.lastTimescaleUnits){sd(dd.lastSample);const md=zF(Od.decodeTimestamp,dd.timescale,!1),Wd=Math.round(md-dd.lastTimescaleUnits);if(sd(Wd>=0),dd.lastTimescaleUnits+=Wd,dd.lastSample.timescaleUnitsToNextSample=Wd,!this.isFragmented){let Od=Gd(dd.timeToSampleTable);if(sd(Od),1===Od.sampleCount){Od.sampleDelta=Wd;const md=dd.timeToSampleTable[dd.timeToSampleTable.length-2];md&&md.sampleDelta===Wd&&(md.sampleCount++,dd.timeToSampleTable.pop(),Od=md)}else Od.sampleDelta!==Wd&&(Od.sampleCount--,dd.timeToSampleTable.push(Od={sampleCount:1,sampleDelta:Wd}));Od.sampleDelta===Rd?Od.sampleCount++:dd.timeToSampleTable.push({sampleCount:1,sampleDelta:Rd});const md=Gd(dd.compositionTimeOffsetTable);sd(md),md.sampleCompositionTimeOffset===Fd?md.sampleCount++:dd.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:Fd})}}else dd.lastTimescaleUnits=zF(Od.decodeTimestamp,dd.timescale,!1),this.isFragmented||(dd.timeToSampleTable.push({sampleCount:1,sampleDelta:Rd}),dd.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:Fd}));dd.lastSample=Od}if(dd.timestampProcessingQueue.length=0,sd(dd.lastSample),sd(null!==dd.lastTimescaleUnits),void 0!==Od&&0===dd.lastSample.timescaleUnitsToNextSample){sd("key"===Od.type);const md=zF(Od.timestamp,dd.timescale,!1),Wd=Math.round(md-dd.lastTimescaleUnits);dd.lastSample.timescaleUnitsToNextSample=Wd}}async registerSample(dd,Od){"key"===Od.type&&this.processTimestamps(dd,Od),dd.timestampProcessingQueue.push(Od),this.isFragmented?(dd.sampleQueue.push(Od),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(dd,Od):await this.addSampleToTrack(dd,Od)}async addSampleToTrack(dd,Od){if(!this.isFragmented&&(dd.samples.push(Od),"reserve"===this.fastStart)){const Od=dd.track.metadata.maximumPacketCount;if(sd(void 0!==Od),dd.samples.length>Od)throw new Error(`Track #${dd.track.id} has already reached the maximum packet count (${Od}). Either add less packets or increase the maximum packet count.`)}let md=!1;if(dd.currentChunk){dd.currentChunk.startTimestamp=Math.min(dd.currentChunk.startTimestamp,Od.timestamp);const Wd=Od.timestamp-dd.currentChunk.startTimestamp;if(this.isFragmented){const Fd=this.trackDatas.every((md=>{if(dd===md)return"key"===Od.type;const Wd=md.sampleQueue[0];return Wd?"key"===Wd.type:md.closed}));Wd>=this.minimumFragmentDuration&&Fd&&Od.timestamp>this.maxWrittenTimestamp&&(md=!0,await this.finalizeFragment())}else md=Wd>=.5}else md=!0;md&&(dd.currentChunk&&await this.finalizeCurrentChunk(dd),dd.currentChunk={startTimestamp:Od.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),sd(dd.currentChunk),dd.currentChunk.samples.push(Od),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,Od.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,Od.timestamp+Od.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,Od.timestamp))}async finalizeCurrentChunk(dd){if(sd(!this.isFragmented),sd(this.writer),!dd.currentChunk)return;dd.finalizedChunks.push(dd.currentChunk),this.finalizedChunks.push(dd.currentChunk);let Od=dd.currentChunk.samples.length;if("audio"===dd.type&&dd.info.requiresPcmTransformation&&(Od=dd.currentChunk.samples.reduce(((Od,md)=>Od+zF(md.duration,dd.timescale)),0)),0!==dd.compactlyCodedChunkTable.length&&Gd(dd.compactlyCodedChunkTable).samplesPerChunk===Od||dd.compactlyCodedChunkTable.push({firstChunk:dd.finalizedChunks.length,samplesPerChunk:Od}),"in-memory"!==this.fastStart){dd.currentChunk.offset=this.writer.getPos();for(const Od of dd.currentChunk.samples)sd(Od.data),this.writer.write(Od.data),Od.data=null;await this.writer.flush()}else dd.currentChunk.offset=0}async interleaveSamples(){let dd=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(sd(this.isFragmented),dd||this.allTracksAreKnown())dd:for(;;){let Od=null,md=1/0;for(const Fd of this.trackDatas){if(!dd&&0===Fd.sampleQueue.length&&!Fd.closed)break dd;Fd.sampleQueue.length>0&&Fd.sampleQueue[0].timestamp<md&&(Od=Fd,md=Fd.sampleQueue[0].timestamp)}if(!Od)break;const Wd=Od.sampleQueue.shift();await this.addSampleToTrack(Od,Wd)}}async finalizeFragment(){let dd=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(sd(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const dd=this.initBoxWriter??this.boxWriter;sd(dd),this.formatOptions.onMoov&&dd.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const Od=tW(this);if(dd.writeBox(Od),this.formatOptions.onMoov){const{data:Od,start:md}=dd.writer.stopTrackingWrites();this.formatOptions.onMoov(Od,md)}if(this.isCmaf){sd(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new cm(this.writer);const dd=this.boxWriter.measureBox(hW()),Od=this.boxWriter.measureBox(vW(this,0));this.segmentHeaderSize=dd+Od,this.writer.seek(this.segmentHeaderSize)}}sd(this.writer),sd(this.boxWriter);const Od=this.trackDatas.filter((dd=>dd.currentChunk));if(0===Od.length)return void(dd&&await this.writer.flush());const md=this.nextFragmentNumber++,Wd=mF(md,Od),Fd=this.writer.getPos(),Rd=Fd+this.boxWriter.measureBox(Wd);let Xd=Rd+8,Kd=1/0;for(let od=0;od<Od.length;od++){const dd=Od[od];sd(dd.currentChunk),sd(null!==dd.startTimestampOffset),dd.currentChunk.offset=Xd,dd.currentChunk.moofOffset=Fd,dd.currentChunk.trafIndex=od,dd.currentChunk.startTimestamp-=dd.startTimestampOffset;for(const Od of dd.currentChunk.samples)Xd+=Od.size,Od.timestamp-=dd.startTimestampOffset,Od.decodeTimestamp-=dd.startTimestampOffset;Kd=Math.min(Kd,dd.currentChunk.startTimestamp)}const hd=Xd-Rd,vd=hd>=2**32;if(vd)for(const od of Od)od.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const Qd=mF(md,Od);if(this.boxWriter.writeBox(Qd),this.formatOptions.onMoof){const{data:dd,start:Od}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(dd,Od,Kd)}sd(this.writer.getPos()===Rd),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const td=QW(vd);td.size=hd,this.boxWriter.writeBox(td),this.writer.seek(Rd+(vd?16:8));for(const od of Od)for(const dd of od.currentChunk.samples)this.writer.write(dd.data),dd.data=null;if(this.formatOptions.onMdat){const{data:dd,start:Od}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(dd,Od)}for(const od of Od)od.finalizedChunks.push(od.currentChunk),this.finalizedChunks.push(od.currentChunk),od.currentChunk=null;dd&&await this.writer.flush()}async registerSampleFastStartReserve(dd,Od){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(dd,Od)):dd.sampleQueue.push(Od)}async createFastStartReserveMdat(){sd(this.writer),sd(this.boxWriter),this.ensureOneEnabledTrack();const dd=tW(this),Od=this.boxWriter.measureBox(dd)+this.computeSampleTableSizeUpperBound()+4096;sd(null!==this.ftypSize),this.writer.seek(this.ftypSize+Od),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=QW(!0),this.boxWriter.writeBox(this.mdat);for(const md of this.trackDatas){for(const dd of md.sampleQueue)await this.addSampleToTrack(md,dd);md.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){sd("reserve"===this.fastStart);let dd=0;for(const Od of this.trackDatas){const md=Od.track.metadata.maximumPacketCount;sd(void 0!==md),dd+=8*Math.ceil(2/3*md),dd+=4*md,dd+=8*Math.ceil(2/3*md),dd+=12*Math.ceil(2/3*md),dd+=4*md,dd+=8*md}return dd}async onTrackClose(dd){const Od=await this.mutex.acquire(),md=this.trackDatas.find((Od=>Od.track===dd));md&&(md.closed=!0,"subtitle"===md.type&&"webvtt"===dd.source._codec&&await this.processWebVTTCues(md,1/0),this.processTimestamps(md)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),Od()}ensureOneEnabledTrack(){for(const dd of["video","audio","subtitle"]){const Od=this.trackDatas.filter((Od=>Od.type===dd));if(0===Od.length)continue;if(!Od.some((dd=>!1!==dd.track.metadata.disposition?.default))){const dd=Od[0];dd.track.metadata.disposition={...dd.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){sd(this.isFragmented);const dd=await this.mutex.acquire();try{for(const dd of this.trackDatas)"subtitle"===dd.type&&"webvtt"===dd.track.source._codec&&await this.processWebVTTCues(dd,1/0),this.processTimestamps(dd);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{dd()}}async finalize(){const dd=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const md of this.trackDatas)md.closed=!0,"subtitle"===md.type&&"webvtt"===md.track.source._codec&&await this.processWebVTTCues(md,1/0),this.processTimestamps(md);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const md of this.trackDatas){await this.finalizeCurrentChunk(md);const dd=cF(md);if(dd>0){let Od=0;for(const dd of md.samples)Od+=dd.size;md.avgBitrate=Math.round(8*Od/dd)}else md.avgBitrate=0;let Od=0,Wd=0,Fd=0;for(let Rd=0;Rd<md.samples.length;Rd++){const dd=md.samples[Rd];for(Wd+=dd.size;dd.decodeTimestamp-md.samples[Od].decodeTimestamp>=1;)Wd-=md.samples[Od].size,Od++;Fd=Math.max(Fd,Wd)}if(md.maxBitrate=8*Fd,null!==md.startTimestampOffset)for(let Rd=0;Rd<md.samples.length;Rd++){const dd=md.samples[Rd];dd.timestamp-=md.startTimestampOffset,dd.decodeTimestamp-=md.startTimestampOffset}}if(sd(this.writer),sd(this.boxWriter),"in-memory"===this.fastStart){let dd;this.mdat=QW(!1);for(let md=0;md<2;md++){const Od=tW(this),md=this.boxWriter.measureBox(Od);dd=this.boxWriter.measureBox(this.mdat);let Wd=this.writer.getPos()+md+dd;for(const Fd of this.finalizedChunks){Fd.offset=Wd;for(const{data:Od}of Fd.samples)sd(Od),Wd+=Od.byteLength,dd+=Od.byteLength}if(Wd<2**32)break;dd>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const Od=tW(this);if(this.boxWriter.writeBox(Od),this.formatOptions.onMoov){const{data:dd,start:Od}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(dd,Od)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=dd,this.boxWriter.writeBox(this.mdat);for(const md of this.finalizedChunks)for(const dd of md.samples)sd(dd.data),this.writer.write(dd.data),dd.data=null;if(this.formatOptions.onMdat){const{data:dd,start:Od}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(dd,Od)}}else if(this.isFragmented)if(this.isCmaf){const dd=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(hW()),this.boxWriter.writeBox(vW(this,dd))}else{const dd=this.writer.getPos(),md=(Od=this.trackDatas,XW("mfra",void 0,[...Od.map(vF),QF()]));this.boxWriter.writeBox(md);const Wd=this.writer.getPos()-dd;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(Wd)}else{sd(this.mdat);const dd=this.boxWriter.offsets.get(this.mdat);sd(void 0!==dd);const Od=this.writer.getPos()-dd;if(this.mdat.size=Od,this.mdat.largeSize=Od>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:dd,start:Od}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(dd,Od)}const md=tW(this);if("reserve"===this.fastStart){sd(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(md);const dd=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:dd})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(md);if(this.formatOptions.onMoov){const{data:dd,start:Od}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(dd,Od)}}var Od;dd()}}var DF;!function(dd){dd[dd.EBML=440786851]="EBML",dd[dd.EBMLVersion=17030]="EBMLVersion",dd[dd.EBMLReadVersion=17143]="EBMLReadVersion",dd[dd.EBMLMaxIDLength=17138]="EBMLMaxIDLength",dd[dd.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",dd[dd.DocType=17026]="DocType",dd[dd.DocTypeVersion=17031]="DocTypeVersion",dd[dd.DocTypeReadVersion=17029]="DocTypeReadVersion",dd[dd.Void=236]="Void",dd[dd.Segment=408125543]="Segment",dd[dd.SeekHead=290298740]="SeekHead",dd[dd.Seek=19899]="Seek",dd[dd.SeekID=21419]="SeekID",dd[dd.SeekPosition=21420]="SeekPosition",dd[dd.Duration=17545]="Duration",dd[dd.Info=357149030]="Info",dd[dd.TimestampScale=2807729]="TimestampScale",dd[dd.MuxingApp=19840]="MuxingApp",dd[dd.WritingApp=22337]="WritingApp",dd[dd.Tracks=374648427]="Tracks",dd[dd.TrackEntry=174]="TrackEntry",dd[dd.TrackNumber=215]="TrackNumber",dd[dd.TrackUID=29637]="TrackUID",dd[dd.TrackType=131]="TrackType",dd[dd.FlagEnabled=185]="FlagEnabled",dd[dd.FlagDefault=136]="FlagDefault",dd[dd.FlagForced=21930]="FlagForced",dd[dd.FlagOriginal=21934]="FlagOriginal",dd[dd.FlagHearingImpaired=21931]="FlagHearingImpaired",dd[dd.FlagVisualImpaired=21932]="FlagVisualImpaired",dd[dd.FlagCommentary=21935]="FlagCommentary",dd[dd.FlagLacing=156]="FlagLacing",dd[dd.Name=21358]="Name",dd[dd.Language=2274716]="Language",dd[dd.LanguageBCP47=2274717]="LanguageBCP47",dd[dd.CodecID=134]="CodecID",dd[dd.CodecPrivate=25506]="CodecPrivate",dd[dd.CodecDelay=22186]="CodecDelay",dd[dd.SeekPreRoll=22203]="SeekPreRoll",dd[dd.DefaultDuration=2352003]="DefaultDuration",dd[dd.Video=224]="Video",dd[dd.PixelWidth=176]="PixelWidth",dd[dd.PixelHeight=186]="PixelHeight",dd[dd.DisplayWidth=21680]="DisplayWidth",dd[dd.DisplayHeight=21690]="DisplayHeight",dd[dd.DisplayUnit=21682]="DisplayUnit",dd[dd.AlphaMode=21440]="AlphaMode",dd[dd.Audio=225]="Audio",dd[dd.SamplingFrequency=181]="SamplingFrequency",dd[dd.Channels=159]="Channels",dd[dd.BitDepth=25188]="BitDepth",dd[dd.SimpleBlock=163]="SimpleBlock",dd[dd.BlockGroup=160]="BlockGroup",dd[dd.Block=161]="Block",dd[dd.BlockAdditions=30113]="BlockAdditions",dd[dd.BlockMore=166]="BlockMore",dd[dd.BlockAdditional=165]="BlockAdditional",dd[dd.BlockAddID=238]="BlockAddID",dd[dd.BlockDuration=155]="BlockDuration",dd[dd.ReferenceBlock=251]="ReferenceBlock",dd[dd.Cluster=524531317]="Cluster",dd[dd.Timestamp=231]="Timestamp",dd[dd.Cues=475249515]="Cues",dd[dd.CuePoint=187]="CuePoint",dd[dd.CueTime=179]="CueTime",dd[dd.CueTrackPositions=183]="CueTrackPositions",dd[dd.CueTrack=247]="CueTrack",dd[dd.CueClusterPosition=241]="CueClusterPosition",dd[dd.Colour=21936]="Colour",dd[dd.MatrixCoefficients=21937]="MatrixCoefficients",dd[dd.TransferCharacteristics=21946]="TransferCharacteristics",dd[dd.Primaries=21947]="Primaries",dd[dd.Range=21945]="Range",dd[dd.Projection=30320]="Projection",dd[dd.ProjectionType=30321]="ProjectionType",dd[dd.ProjectionPoseYaw=30323]="ProjectionPoseYaw",dd[dd.ProjectionPosePitch=30324]="ProjectionPosePitch",dd[dd.ProjectionPoseRoll=30325]="ProjectionPoseRoll",dd[dd.Attachments=423732329]="Attachments",dd[dd.AttachedFile=24999]="AttachedFile",dd[dd.FileDescription=18046]="FileDescription",dd[dd.FileName=18030]="FileName",dd[dd.FileMediaType=18016]="FileMediaType",dd[dd.FileData=18012]="FileData",dd[dd.FileUID=18094]="FileUID",dd[dd.Chapters=272869232]="Chapters",dd[dd.Tags=307544935]="Tags",dd[dd.Tag=29555]="Tag",dd[dd.Targets=25536]="Targets",dd[dd.TargetTypeValue=26826]="TargetTypeValue",dd[dd.TargetType=25546]="TargetType",dd[dd.TagTrackUID=25541]="TagTrackUID",dd[dd.TagEditionUID=25545]="TagEditionUID",dd[dd.TagChapterUID=25540]="TagChapterUID",dd[dd.TagAttachmentUID=25542]="TagAttachmentUID",dd[dd.SimpleTag=26568]="SimpleTag",dd[dd.TagName=17827]="TagName",dd[dd.TagLanguage=17530]="TagLanguage",dd[dd.TagString=17543]="TagString",dd[dd.TagBinary=17541]="TagBinary",dd[dd.ContentEncodings=28032]="ContentEncodings",dd[dd.ContentEncoding=25152]="ContentEncoding",dd[dd.ContentEncodingOrder=20529]="ContentEncodingOrder",dd[dd.ContentEncodingScope=20530]="ContentEncodingScope",dd[dd.ContentCompression=20532]="ContentCompression",dd[dd.ContentCompAlgo=16980]="ContentCompAlgo",dd[dd.ContentCompSettings=16981]="ContentCompSettings",dd[dd.ContentEncryption=20533]="ContentEncryption"}(DF||(DF={}));DF.EBML,DF.Segment,DF.SeekHead,DF.Info,DF.Cluster,DF.Tracks,DF.Cues,DF.Attachments,DF.Chapters,DF.Tags;const eF=new Uint32Array(256);for(let uR=0;uR<256;uR++){let dd=uR<<24;for(let Od=0;Od<8;Od++)dd=2147483648&dd?dd<<1^79764919:dd<<1;eF[uR]=dd>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const IF=new Uint32Array(256);for(let uR=0;uR<256;uR++){let dd=uR<<24;for(let Od=0;Od<8;Od++)dd=2147483648&dd?dd<<1^79764919:dd<<1;IF[uR]=dd>>>0&4294967295}const lF=dd=>{let Od=4294967295;for(let md=0;md<dd.length;md++){const Wd=dd[md];Od=(Od<<8^IF[Od>>>24^Wd])>>>0}return Od},CF=new Uint8Array(16);{const dd=cd(CF);CF[0]=0,dd.setUint16(1,45069,!1),dd.setUint16(3,1,!1),CF[5]=193,CF[6]=0,CF[7]=0,dd.setUint16(8,1,!1),dd.setUint16(10,61440,!1),dd.setUint32(12,lF(CF.subarray(0,12)),!1)}const ZF=new Uint8Array(0);class kF{constructor(dd,Od,md,Wd){let Fd=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,Rd=arguments.length>5?arguments[5]:void 0,Xd=arguments.length>6?arguments[6]:void 0;if(this.data=dd,this.type=Od,this.timestamp=md,this.duration=Wd,this.sequenceNumber=Fd,dd===ZF&&void 0===Rd)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===Rd&&(Rd=dd.byteLength),!(dd instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==Od&&"delta"!==Od)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(md))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(Wd)||Wd<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(Fd))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(Rd)||Rd<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==Xd&&("object"!==typeof Xd||!Xd))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==Xd?.alpha&&!(Xd.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==Xd?.alphaByteLength&&(!Number.isInteger(Xd.alphaByteLength)||Xd.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=Rd,this.sideData=Xd??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===ZF}get microsecondTimestamp(){return Math.trunc(FO*this.timestamp)}get microsecondDuration(){return Math.trunc(FO*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let dd=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:dd,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(dd,Od){if(!(dd instanceof EncodedVideoChunk||dd instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const md=new Uint8Array(dd.byteLength);return dd.copyTo(md),new kF(md,dd.type,dd.timestamp/1e6,(dd.duration??0)/1e6,void 0,void 0,Od)}clone(dd){if(void 0!==dd&&("object"!==typeof dd||null===dd))throw new TypeError("options, when provided, must be an object.");if(void 0!==dd?.data&&!(dd.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==dd?.type&&"key"!==dd.type&&"delta"!==dd.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==dd?.timestamp&&!Number.isFinite(dd.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==dd?.duration&&!Number.isFinite(dd.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==dd?.sequenceNumber&&!Number.isFinite(dd.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==dd?.sideData&&("object"!==typeof dd.sideData||null===dd.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new kF(dd?.data??this.data,dd?.type??this.type,dd?.timestamp??this.timestamp,dd?.duration??this.duration,dd?.sequenceNumber??this.sequenceNumber,this.byteLength,dd?.sideData??this.sideData)}}var fF;!function(dd){dd[dd.PCM=1]="PCM",dd[dd.IEEE_FLOAT=3]="IEEE_FLOAT",dd[dd.ALAW=6]="ALAW",dd[dd.MULAW=7]="MULAW",dd[dd.EXTENSIBLE=65534]="EXTENSIBLE"}(fF||(fF={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let MF=-1/0,dR=-1/0,OR=null;"undefined"!==typeof FinalizationRegistry&&(OR=new FinalizationRegistry((dd=>{const Od=performance.now();"video"===dd.type?(Od-MF>=1e3&&(aO._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),MF=Od),"undefined"!==typeof VideoFrame&&dd.data instanceof VideoFrame&&dd.data.close()):(Od-dR>=1e3&&(aO._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),dR=Od),"undefined"!==typeof AudioData&&dd.data instanceof AudioData&&dd.data.close())})));const mR=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(mR);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class WR{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(dd){}close(){if(this._closingPromise)return;const dd=this._connectedTrack;if(!dd)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===dd.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==dd.output.state&&"finalized"!==dd.output.state&&dd.output._muxer.onTrackClose(dd)})()}async _flushOrWaitForOngoingClose(dd){return this._closingPromise??=(async()=>{await this._flushAndClose(dd),this._closed=!0})()}}class FR extends WR{constructor(dd){if(super(),!tm.includes(dd))throw new TypeError(`Invalid video codec \'${dd}\'. Must be one of: ${tm.join(", ")}.`);this._codec=dd}}const RR=(dd,Od)=>{if(dd.metadata.hasOnlyKeyPackets&&"key"!==Od.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class XR extends FR{constructor(dd){super(dd)}add(dd,Od){if(!(dd instanceof kF))throw new TypeError("packet must be an EncodedPacket.");if(dd.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==Od&&(!Od||"object"!==typeof Od))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),RR(this._connectedTrack,dd),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,dd,Od)}}class KR extends WR{constructor(dd){if(super(),!qm.includes(dd))throw new TypeError(`Invalid audio codec \'${dd}\'. Must be one of: ${qm.join(", ")}.`);this._codec=dd}}class hR extends WR{constructor(dd){if(super(),!Hm.includes(dd))throw new TypeError(`Invalid subtitle codec \'${dd}\'. Must be one of: ${Hm.join(", ")}.`);this._codec=dd}}class vR{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((dd=>tm.includes(dd)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((dd=>qm.includes(dd)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((dd=>Hm.includes(dd)))}_codecUnsupportedHint(dd){return""}_isFragmentedIsobmff(){return!1}}class QR extends vR{constructor(){let dd=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!dd||"object"!==typeof dd)throw new TypeError("options must be an object.");if(void 0!==dd.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(dd.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==dd.minimumFragmentDuration&&(!hO(dd.minimumFragmentDuration)||dd.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==dd.onFtyp&&"function"!==typeof dd.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==dd.onMoov&&"function"!==typeof dd.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==dd.onMdat&&"function"!==typeof dd.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==dd.onMoof&&"function"!==typeof dd.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==dd.metadataFormat&&!["mdir","mdta","udta","auto"].includes(dd.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=dd}getSupportedTrackCounts(){const dd=2**32-1;return{video:{min:0,max:dd},audio:{min:0,max:dd},subtitle:{min:0,max:dd},total:{min:0,max:dd}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(dd){return new jF(dd,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class tR extends QR{constructor(dd){super(dd)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...tm,...Nm,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Hm]}_codecUnsupportedHint(dd){return(new NR).getSupportedCodecs().includes(dd)?" Switching to MOV will grant support for this codec.":""}}class oR extends QR{constructor(dd){super(dd)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...tm,...Nm,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Hm]}}class NR extends QR{constructor(dd){super(dd)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...tm,...qm]}_codecUnsupportedHint(dd){return(new tR).getSupportedCodecs().includes(dd)?" Switching to MP4 will grant support for this codec.":""}}const qR=["video","audio","subtitle"];class HR{constructor(dd,Od,md,Wd,Fd){this.id=dd,this.output=Od,this.type=md,this.source=Wd,this.metadata=Fd}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(dd){if(!(dd instanceof HR))throw new TypeError("other must be an OutputTrack.");if(this===dd)return!1;const Od=QO(this.metadata.group),md=QO(dd.metadata.group);for(const Wd of Od){if(this.type!==dd.type&&md.some((dd=>Wd===dd)))return!0;if(md.some((dd=>Wd._pairedGroups.has(dd))))return!0}return!1}}class yR extends HR{constructor(dd,Od,md,Wd){super(dd,Od,"video",md,Wd)}}class bR extends HR{constructor(dd,Od,md,Wd){super(dd,Od,"audio",md,Wd)}}class TR extends HR{constructor(dd,Od,md,Wd){super(dd,Od,"subtitle",md,Wd)}}class pR{constructor(){this._pairedGroups=new Set}pairWith(dd){if(!(dd instanceof pR))throw new TypeError("other must be an OutputTrackGroup.");if(this===dd)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(dd),dd._pairedGroups.add(this)}}const YR=dd=>{if(!dd||"object"!==typeof dd)throw new TypeError("metadata must be an object.");if(void 0!==dd.languageCode&&(Od=dd.languageCode,!WO.test(Od)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var Od;if(void 0!==dd.name&&"string"!==typeof dd.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==dd.disposition&&(dd=>{if(!dd||"object"!==typeof dd)throw new TypeError("disposition must be an object.");if(void 0!==dd.default&&"boolean"!==typeof dd.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==dd.primary&&"boolean"!==typeof dd.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==dd.forced&&"boolean"!==typeof dd.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==dd.original&&"boolean"!==typeof dd.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==dd.commentary&&"boolean"!==typeof dd.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==dd.hearingImpaired&&"boolean"!==typeof dd.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==dd.visuallyImpaired&&"boolean"!==typeof dd.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(dd.disposition),void 0!==dd.maximumPacketCount&&(!Number.isInteger(dd.maximumPacketCount)||dd.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==dd.bitrate&&(!Number.isFinite(dd.bitrate)||dd.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==dd.averageBitrate&&(!Number.isFinite(dd.averageBitrate)||dd.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==dd.group&&!(dd.group instanceof pR)&&(!Array.isArray(dd.group)||dd.group.some((dd=>!(dd instanceof pR)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class gR extends tO{get target(){const dd="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(dd);const Od=this._getRootTarget();if(XO(Od))throw new TypeError(dd);return Od}constructor(dd){if(super(),this.state="pending",this.defaultTrackGroup=new pR,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new kd,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!dd||"object"!==typeof dd)throw new TypeError("options must be an object.");if(!(dd.format instanceof vR))throw new TypeError("options.format must be an OutputFormat.");if(!(dd.target instanceof sF||dd.target instanceof GF))throw new TypeError("options.target must be a Target or a PathedTarget.");if(dd.target instanceof sF&&this._rememberTarget(dd.target),void 0!==dd.initTarget&&!(dd.initTarget instanceof sF)&&"function"!==typeof dd.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==dd.onFinalize&&"function"!==typeof dd.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=dd.format,this.Jt=dd.target,this._onFinalize=dd.onFinalize??null,this._initTarget=dd.initTarget??null,this._initTarget instanceof sF&&this._rememberTarget(this._initTarget),this._muxer=dd.format._createMuxer(this)}_getTargetValidated(dd){sd(this.Jt instanceof GF);const Od=this.Jt.getTarget(dd),md=dd=>{if(!(dd instanceof sF))throw new TypeError("getTarget must return a Target.");return dd};return XO(Od)?Od.then(md):md(Od)}async _getTarget(dd){sd(this.Jt instanceof GF);const Od=await this._getTargetValidated(dd);return this._emit("target",{target:Od,request:dd,isRoot:dd.isRoot}),"canceled"===this.state?await Od._close():this._rememberTarget(Od),Od}_rememberTarget(dd){this._unfinalizedTargets.add(dd),dd.on("finalized",(()=>this._unfinalizedTargets.delete(dd)),{once:!0})}async _getInitTarget(){if(sd(null!==this._initTarget),this._initTarget instanceof sF)return this._initTarget;const dd=await this._initTarget();return"canceled"===this.state?await dd._close():this._rememberTarget(dd),dd}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.Jt instanceof sF)return this._emit("target",{target:this.Jt,request:null,isRoot:!0}),this._rootTarget=this.Jt,this.Jt;const dd={path:this.Jt.rootPath,isRoot:!0,mimeType:this.format.mimeType},Od=this._getTargetValidated(dd),md=Od=>("canceled"===this.state?Od._close():this._rememberTarget(Od),this._emit("target",{target:Od,request:dd,isRoot:!0}),this._rootTarget=Od,Od);return XO(Od)?this._rootTargetPromise=Od.then(md):md(Od)}_getRootWriter(dd){return this._rootWriterPromise??=(async()=>{const Od=await this._getRootTarget(),md=new SF(Od,"boolean"===typeof dd?dd:dd(Od));return md.start(),md})()}addVideoTrack(dd){let Od=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(dd instanceof FR))throw new TypeError("source must be a VideoSource.");if(YR(Od),void 0!==Od.rotation&&![0,90,180,270].includes(Od.rotation))throw new TypeError(`Invalid video rotation: ${Od.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==Od.flip&&"boolean"!==typeof Od.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==Od.transformationMatrix&&(!Array.isArray(Od.transformationMatrix)||9!==Od.transformationMatrix.length||!Od.transformationMatrix.every((dd=>Number.isFinite(dd)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==Od.frameRate&&(!Number.isFinite(Od.frameRate)||Od.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${Od.frameRate}. Must be a positive number.`);if(void 0!==Od.hasOnlyKeyPackets&&"boolean"!==typeof Od.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==Od.canBeTransparent&&"boolean"!==typeof Od.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==Od.decoderConfig&&Bm({decoderConfig:Od.decoderConfig},dd._codec),void 0!==Od.primingPacket){if(!(Od.primingPacket instanceof kF))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===Od.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const md={...Od};return md.group??=this.defaultTrackGroup,this._addTrack(new yR(this.tracks.length+1,this,dd,md))}addAudioTrack(dd){let Od=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(dd instanceof KR))throw new TypeError("source must be an AudioSource.");if(YR(Od),void 0!==Od.decoderConfig&&sm({decoderConfig:Od.decoderConfig},dd._codec),void 0!==Od.primingPacket){if(!(Od.primingPacket instanceof kF))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===Od.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const md={...Od};return md.group??=this.defaultTrackGroup,this._addTrack(new bR(this.tracks.length+1,this,dd,md))}addSubtitleTrack(dd){let Od=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(dd instanceof hR))throw new TypeError("source must be a SubtitleSource.");YR(Od);const md={...Od};return md.group??=this.defaultTrackGroup,this._addTrack(new TR(this.tracks.length+1,this,dd,md))}setMetadataTags(dd){if((dd=>{if(!dd||"object"!==typeof dd)throw new TypeError("tags must be an object.");if(void 0!==dd.title&&"string"!==typeof dd.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==dd.description&&"string"!==typeof dd.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==dd.artist&&"string"!==typeof dd.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==dd.album&&"string"!==typeof dd.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==dd.albumArtist&&"string"!==typeof dd.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==dd.trackNumber&&(!Number.isInteger(dd.trackNumber)||dd.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==dd.tracksTotal&&(!Number.isInteger(dd.tracksTotal)||dd.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==dd.discNumber&&(!Number.isInteger(dd.discNumber)||dd.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==dd.discsTotal&&(!Number.isInteger(dd.discsTotal)||dd.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==dd.genre&&"string"!==typeof dd.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==dd.date&&(!(dd.date instanceof Date)||Number.isNaN(dd.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==dd.beatsPerMinute&&(!Number.isInteger(dd.beatsPerMinute)||dd.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==dd.lyrics&&"string"!==typeof dd.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==dd.images){if(!Array.isArray(dd.images))throw new TypeError("tags.images, when provided, must be an array.");for(const Od of dd.images){if(!Od||"object"!==typeof Od)throw new TypeError("Each image in tags.images must be an object.");if(!(Od.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof Od.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(Od.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==dd.comment&&"string"!==typeof dd.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==dd.raw){if(!dd.raw||"object"!==typeof dd.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const Od of Object.values(dd.raw))if(null!==Od&&"string"!==typeof Od&&(!Array.isArray(Od)||!Od.every((dd=>"string"===typeof dd)))&&!(Od instanceof Uint8Array)&&!(Od instanceof NO)&&!(Od instanceof qO)&&!oO(Od))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(dd),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=dd}_addTrack(dd){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(dd.source._connectedTrack)throw new Error("Source is already used for a track.");const Od=this.format.getSupportedTrackCounts(),md=this.tracks.reduce(((Od,md)=>Od+(md.type===dd.type?1:0)),0),Wd=Od[dd.type].max;if(md===Wd)throw new Error(0===Wd?`${this.format._name} does not support ${dd.type} tracks.`:`${this.format._name} does not support more than ${Wd} ${dd.type} track`+(1===Wd?"":"s")+".");const Fd=Od.total.max;if(this.tracks.length===Fd)throw new Error(`${this.format._name} does not support more than ${Fd} tracks`+(1===Fd?"":"s")+" in total.");if(dd.isVideoTrack()){const Od=this.format.getSupportedVideoCodecs();if(0===Od.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(dd.source._codec));if(!Od.includes(dd.source._codec))throw new Error(`Codec \'${dd.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${Od.map((dd=>`\'${dd}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(dd.source._codec))}else if(dd.isAudioTrack()){const Od=this.format.getSupportedAudioCodecs();if(0===Od.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(dd.source._codec));if(!Od.includes(dd.source._codec))throw new Error(`Codec \'${dd.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${Od.map((dd=>`\'${dd}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(dd.source._codec))}else if(dd.isSubtitleTrack()){const Od=this.format.getSupportedSubtitleCodecs();if(0===Od.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(dd.source._codec));if(!Od.includes(dd.source._codec))throw new Error(`Codec \'${dd.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${Od.map((dd=>`\'${dd}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(dd.source._codec))}return this.tracks.push(dd),dd.source._connectedTrack=dd,dd}hasEnoughTracks(){const dd=this.format.getSupportedTrackCounts();for(const md of qR){if(this.tracks.reduce(((dd,Od)=>dd+(Od.type===md?1:0)),0)<dd[md].min)return!1}const Od=dd.total.min;return!(this.tracks.length<Od)}async start(){const dd=this.format.getSupportedTrackCounts();for(const md of qR){const Od=this.tracks.reduce(((dd,Od)=>dd+(Od.type===md?1:0)),0),Wd=dd[md].min;if(Od<Wd)throw new Error(Wd===dd[md].max?`${this.format._name} requires exactly ${Wd} ${md} track${1===Wd?"":"s"}.`:`${this.format._name} requires at least ${Wd} ${md} track${1===Wd?"":"s"}.`)}const Od=dd.total.min;if(this.tracks.length<Od)throw new Error(Od===dd.total.max?`${this.format._name} requires exactly ${Od} track`+(1===Od?"":"s")+".":`${this.format._name} requires at least ${Od} track`+(1===Od?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(aO._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const dd=this._mutex.acquire();try{await this._muxer.start();const dd=this.tracks.map((dd=>dd.source._start()));await Promise.all(dd)}finally{(await dd)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const dd=await this._mutex.acquire();try{const dd=this.tracks.map((dd=>dd.source._flushOrWaitForOngoingClose(!0)));await Promise.all(dd),await Promise.all([...this._unfinalizedTargets].map((dd=>dd._close()))),this._unfinalizedTargets.clear()}finally{dd()}})():void("finalized"===this.state&&aO._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(aO._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const dd=await this._mutex.acquire();try{const dd=this.tracks.map((dd=>dd.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(dd),await this._muxer.finalize(),this._rootWriterPromise){const dd=await this._rootWriterPromise;dd.finalized||(await dd.flush(),await dd.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(Od){throw this.state="canceled",Od}finally{await Promise.all([...this._unfinalizedTargets].map((dd=>dd._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),dd()}})()}}class wR{constructor(dd,Od,md,Wd,Fd){this.frameDurationS=md,this.onFragment=Fd,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=Od,this.lastTimestampUs=Od;const Rd=dd=>{this.boxes.push(dd)};this.output=new gR({format:new tR({fastStart:"fragmented",minimumFragmentDuration:Wd,onFtyp:Rd,onMoov:Rd,onMoof:Rd,onMdat:dd=>{Rd(dd),this.fragmentDone()}}),target:new AF}),this.source=new XR(dd),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(dd,Od){const md=new Uint8Array(dd.byteLength);dd.copyTo(md),this.addData(md,dd.type,dd.timestamp,Od)}addData(dd,Od,md,Wd){const Fd=new kF(dd,Od,(md-this.firstTimestampUs)/1e6,this.frameDurationS),Rd=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,md),this.pending=this.pending.then((()=>(this.addingTimestampUs=md,this.source.add(Fd,Rd?{decoderConfig:Wd}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var dd;const Od=aR(this.boxes);this.boxes=[],this.onFragment({bytes:Od,endUs:null!==(dd=this.addingTimestampUs)&&void 0!==dd?dd:this.lastTimestampUs+1e6*this.frameDurationS})}}function aR(dd){const Od=new Uint8Array(dd.reduce(((dd,Od)=>dd+Od.byteLength),0));let md=0;for(const Wd of dd)Od.set(Wd,md),md+=Wd.byteLength;return Od}class ER{constructor(dd,Od,md,Wd){this.plan=dd,this.emit=md,this.onSlotsLow=Wd,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=Od}get partCount(){return this.nextIndex}addFragment(dd){let{bytes:Od,endUs:md}=dd;this.pendingBytes>0&&this.pendingBytes+Od.byteLength>this.plan.maxBytes&&this.emitPending();let Wd=0;for(;Od.byteLength-Wd>this.plan.maxBytes-this.pendingBytes;){const dd=this.plan.maxBytes-this.pendingBytes;this.hold(Od.subarray(Wd,Wd+dd)),Wd+=dd,this.emitPending()}this.hold(Od.subarray(Wd)),this.completeUntilUs=md,md-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(dd){this.pending.push(dd),this.pendingBytes+=dd.byteLength}emitPending(){var dd;const Od=aR(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(dd=this.completeUntilUs)&&void 0!==dd?dd:this.partStartUs,this.emit({index:this.nextIndex++,bytes:Od,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class JR{constructor(dd,Od,md,Wd){let Fd=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,Rd=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=dd,this.partPlan=Od,this.post=md,this.onSegmentEncoded=Wd,this.journal=Fd,this.onMuxFailed=Rd,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(dd){const Od=Sd()-dd;(Od<this.epochOffsetMs||Od-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=Od)}recordingMs(dd){return dd/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(dd){const Od=null===this.segment?0:(dd-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||Od>=this.segmentDurationMs))&&(this.pendingCutUs=dd);const md=this.keyFrameMissed||this.pendingCutUs===dd;return this.cutRequested=!1,this.keyFrameMissed=!1,md}onChunk(dd,Od,md){if(null!==Od&&void 0!==Od&&Od.decoderConfig&&(this.decoderConfig=Od.decoderConfig),null!==this.pendingCutUs&&dd.timestamp>=this.pendingCutUs){if("key"!==dd.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(dd.timestamp,md),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const Wd=this.segment;if(null===Wd.journalHeader)return Wd.mp4.add(dd,this.decoderConfig),dd.byteLength;const Fd=new Uint8Array(dd.byteLength);return dd.copyTo(Fd),Wd.mp4.addData(Fd,dd.type,dd.timestamp,this.decoderConfig),Wd.chunkTimestampsUs.push(dd.timestamp),Wd.unjournaled.push({recordingId:Wd.journalHeader.recordingId,segmentId:Wd.journalId,index:Wd.chunkCount++,timestampUs:dd.timestamp,key:"key"===dd.type,data:Fd}),performance.now()-Wd.lastJournalMs>=250&&this.journalChunks(Wd),dd.byteLength}openSegment(dd,Od){const md=this.nextJournalId++,Wd=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:md,containerCodec:Od.containerCodec,codec:Od.codec,width:Od.width,height:Od.height,fps:Od.fps,decoderConfig:this.decoderConfig,firstTimestampUs:dd,epochOffsetMs:this.epochOffsetMs}:null,Fd=[],Rd=new ER(this.partPlan,dd,(Rd=>{this.postPart(md,Od,dd,Rd,null===Wd?null:Fd)}),(()=>{var dd;(null===(dd=this.segment)||void 0===dd?void 0:dd.journalId)===md&&this.requestCut()})),Xd=this.partPlan.keyframeIntervalMs/1e3*.9,Kd=new wR(Od.containerCodec,dd,1/Od.fps,Xd,(dd=>{Rd.addFragment(dd)}));return this.post({type:"videoSegmentOpened",journalId:md}),{mp4:Kd,parts:Rd,format:Od,journalId:md,journalHeader:Wd,unjournaled:[],chunkTimestampsUs:Fd,chunkCount:0,lastJournalMs:performance.now()}}postPart(dd,Od,md,Wd,Fd){const{width:Rd,height:Xd,codec:Kd,fps:hd}=Od,{startMs:vd}=function(dd,Od,md,Wd){const Fd=dd/1e3+md;return{startMs:Fd,endMs:Fd+Od/1e3+1e3/Wd}}(md,0,this.epochOffsetMs,hd),{completeUntilUs:Qd}=Wd,td=null===Qd?vd:this.recordingMs(Qd),od=Wd.bytes.buffer,Nd=null===Fd||null===Qd?null:function(dd,Od){let md=0,Wd=dd.length;for(;md<Wd;){const Fd=md+Wd>>1;dd[Fd]<Od?md=Fd+1:Wd=Fd}return md}(Fd,Qd);this.post({type:"videoPart",journalId:dd,index:Wd.index,bytes:od,meta:{startMs:vd,endMs:td,width:Rd,height:Xd,codec:Kd},completeUntilUs:Qd,completeUntilIndex:Nd},[od])}journalChunks(dd){const Od=dd.journalHeader;null!==this.journal&&null!==Od&&0!==dd.unjournaled.length&&(Od.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...Od},dd.unjournaled),dd.unjournaled=[],dd.lastJournalMs=performance.now())}closeSegment(dd){const Od=this.segment;this.segment=null,this.pendingCutUs=null,null!==Od&&(dd&&this.onSegmentEncoded(),this.journalChunks(Od),this.finishing=this.finishing.then((async()=>{let dd=null;try{await Od.mp4.finish()}catch(md){dd=md}Od.parts.finish(),this.post({type:"videoSegmentClosed",journalId:Od.journalId,parts:Od.parts.partCount}),null!==dd&&(console.error("Failed to finish a session replay video segment.",dd),this.onMuxFailed(dd instanceof Error?dd.message:String(dd)))})).catch((dd=>{console.error("Failed to close a session replay video segment.",dd)})))}whenFinished(){return this.finishing}}function UR(dd,Od){return null!==dd&&Od>=dd}class xR{constructor(dd,Od,md,Wd,Fd){let Rd=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=dd,this.cssSize=md,this.post=Wd,this.encoderPreference=Fd,this.quality=new td,this.limiter=void 0,this.segmenter=void 0,this.scaler=new gd,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.capturePaused=!1,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new yd(dd.maxFps),this.captureFps=dd.maxFps,this.segmenter=new JR(dd.segmentDurationMs,Od,Wd,(()=>{this.encoderFailures=0}),Rd,(dd=>{this.stopVideo(`Muxer failed: ${dd}`)})),this.still=new Ud(Wd),this.stats=this.emptyStats()}handleFrame(dd,Od,md){const Wd=performance.now();try{this.stats.deliveredFrames++;const Fd=dd.timestamp/1e3;if(this.segmenter.noteFrameArrival(Fd),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(Fd))return void this.stats.droppedForFpsCap++;if(this.still.offer(dd,this.segmenter.recordingMs(dd.timestamp)),null===md)return void(this.capturePaused||(this.capturePaused=!0,this.flushSegment()));if(this.capturePaused=!1,this.noteBackingSize(Od),this.noteCaptureFps(md,Wd),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(UR(this.rebuildDueMs,Wd)||UR(this.fpsRebuildDueMs,Wd))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,dd)}finally{dd.close();const Od=performance.now()-Wd;this.stats.workerBusyMs+=Od,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,Od),this.maybePostStats(Wd)}}resize(dd){0!==dd.width&&0!==dd.height&&(this.cssSize=dd,this.scheduleRebuildIfSizeChanged())}updateHealth(dd,Od){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const md=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:dd,pingMs:Od});this.backpressureDropsSinceHealth=0,md&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(dd){return this.hidden=dd,dd?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(dd){this.suspended=!0;const Od=this.operations.then(dd).catch((dd=>{console.error("Session replay encoder operation failed.",dd)})).finally((()=>{this.operations===Od&&(this.suspended=!1)}));return this.operations=Od,Od}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var dd;null===(dd=this.active)||void 0===dd||dd.encoder.close(),this.active=null}async drainAndCloseSegment(){const dd=this.active;null===dd||await async function(dd,Od){let md;const Wd=new Promise((dd=>{md=setTimeout((()=>{dd(!1)}),Od)}));try{return await Promise.race([dd.then((()=>!0)),Wd])}finally{clearTimeout(md)}}(dd.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(dd,"flush timed out")}encode(dd,Od){const md=this.segmenter.needsKeyFrame(Od.timestamp)||Od.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;md&&(this.lastKeyframeUs=Od.timestamp);const Wd=this.scaleToEncoder(dd,Od);try{dd.encoder.encode(Wd,{keyFrame:md})}catch(Fd){return void(Fd instanceof DOMException&&("InvalidStateError"===Fd.name||"EncodingError"===Fd.name)?this.failEncoder(dd,Fd.message):++this.refusedFrames>=30?this.failEncoder(dd,`refused 30 frames in a row: ${String(Fd)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",Fd))}finally{Wd!==Od&&Wd.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(dd,Od){let md=Od;if(!this.scalerFailed)try{md=this.scaler.scale(Od,dd.size)}catch(Wd){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",Wd)}return md.displayWidth===dd.size.width&&md.displayHeight===dd.size.height||(dd.sentMismatchedFrame=!0),md}onEncoderOutput(dd,Od,md){const Wd=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(dd,Od,{containerCodec:md.candidate.containerCodec,codec:md.candidate.config.codec,width:md.size.width,height:md.size.height,fps:md.fps}),this.stats.workerBusyMs+=performance.now()-Wd}noteBackingSize(dd){null!==this.backingSize&&od(this.backingSize,dd)||(this.backingSize=dd,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(dd,Od){this.captureFps=dd,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=Od+2e3:this.fpsRebuildDueMs=null}targetSize(){var dd;const Od=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(dd,Od,md){const Wd=Od.width*Od.height<dd.width*dd.height?Od:dd;let Fd=Nd(Math.max(Wd.width,64)),Rd=Nd(Math.max(Wd.height,64));if(qd({width:Fd,height:Rd})>md){const dd=Fd,Od=Rd;for(Fd=Nd(Fd*Math.sqrt(16*md*16/(Fd*Rd))),Rd=Nd(Fd*Od/dd);qd({width:Fd,height:Rd})>md;)Fd-=2,Rd=Nd(Fd*Od/dd)}return{width:Fd,height:Rd}}(this.cssSize,null!==(dd=this.backingSize)&&void 0!==dd?dd:this.cssSize,Od)}scheduleRebuildIfSizeChanged(){null===this.active||od(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const dd=this.quality.getLevel(),Od=this.encodeFps(),md=this.targetSize(),Wd=function(dd){const Od={width:dd.width,height:dd.height,bitrate:dd.bitrate,framerate:dd.maxFps},md=[],Wd=[dd.preferSoftware?"prefer-software":"prefer-hardware","no-preference"],Fd=dd.preferQualityLatency?Yd:pd;for(const Rd of Wd)for(const dd of bd)for(const Wd of Td)for(const Xd of Fd)md.push({config:{...Od,codec:dd,hardwareAcceleration:Rd,bitrateMode:Wd,latencyMode:Xd,avc:{format:"avc"}},containerCodec:"avc"});return md.push({config:{...Od,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),md}({...md,bitrate:Math.round(Hd(this.config,md,dd.areaScale)*Od/this.config.maxFps),maxFps:Od,...this.encoderPreference});let Fd=null,Rd=0;for(let vd=this.firstViableCandidate;vd<Wd.length&&null===Fd;vd++){const dd=await VideoEncoder.isConfigSupported(Wd[vd].config).catch((dd=>(console.warn("VideoEncoder.isConfigSupported threw.",Wd[vd].config,dd),null)));null!==dd&&void 0!==dd&&dd.supported&&(Fd=Wd[vd],Rd=vd,this.firstViableCandidate=vd)}if(null===Fd)return void this.markUnavailable(`No supported encoder config at ${md.width}x${md.height}`);const Xd=new VideoEncoder({output:(dd,Od)=>{this.onEncoderOutput(dd,Od,Kd)},error:dd=>{this.failEncoder(Kd,dd.message)}}),Kd={encoder:Xd,candidates:Wd,candidateIndex:Rd,candidate:Fd,size:md,fps:Od,sentMismatchedFrame:!1};this.active=Kd,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{Xd.configure(Fd.config)}catch(hd){return void this.failEncoder(Kd,hd instanceof Error?hd.message:String(hd))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(dd,Od){console.error("Session replay encoder failed.",dd.candidate.config,Od),this.active===dd&&(this.active=null,"closed"!==dd.encoder.state&&dd.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(dd,Od,md){var Wd;let Fd=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const Rd=null===(Wd=dd[Od])||void 0===Wd?void 0:Wd.config.hardwareAcceleration;if(!("prefer-hardware"===Rd&&md||"no-preference"!==Rd&&Fd))return Od+1;for(let Xd=Od+1;Xd<dd.length;Xd++)if(dd[Xd].config.hardwareAcceleration!==Rd)return Xd;return dd.length}(dd.candidates,dd.candidateIndex,dd.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${Od}`))}stopVideo(dd){if(this.unavailable)return;const Od=this.active;this.active=null,null!==Od&&"closed"!==Od.encoder.state&&Od.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(dd)}markUnavailable(dd){console.warn(`Session replay video stopped: ${dd}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:dd})}))}maybePostStats(dd){var Od,md,Wd,Fd;const Rd=dd-this.statsWindowStartMs;if(Rd<5e3)return;const Xd=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:Rd,qualityLevel:this.quality.getLevelIndex(),codec:null!==(Od=null===Xd||void 0===Xd?void 0:Xd.candidate.config.codec)&&void 0!==Od?Od:null,hardwareAcceleration:null!==(md=null===Xd||void 0===Xd?void 0:Xd.candidate.config.hardwareAcceleration)&&void 0!==md?md:null,encodeWidth:null!==(Wd=null===Xd||void 0===Xd?void 0:Xd.size.width)&&void 0!==Wd?Wd:0,encodeHeight:null!==(Fd=null===Xd||void 0===Xd?void 0:Xd.size.height)&&void 0!==Fd?Fd:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=dd}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let BR=null,SR=0;function sR(dd){let Od=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(dd,{transfer:Od})}self.onmessage=dd=>{const Od=dd.data;switch(Od.type){case"init":BR=new xR(Od.videoConfig,Od.partPlan,Od.cssSize,sR,Od.encoderPreference,Od.journalRecordingId&&vd.supported?{recordingId:Od.journalRecordingId,journal:new vd}:null);break;case"frame":if(null===BR){console.warn("Session replay video worker got a frame before its pipeline started"),Od.image.close();break}!function(dd,Od,md,Wd,Fd){if(Od instanceof VideoFrame)return void dd.handleFrame(Od,Wd,Fd);let Rd;try{Rd=new VideoFrame(Od,{timestamp:md})}catch(Xd){return 0===SR++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",Xd),void(30===SR&&dd.stopVideo(`Bitmap frames keep failing: ${Xd instanceof Error?Xd.message:String(Xd)}`))}finally{Od.close()}SR=0,dd.handleFrame(Rd,Wd,Fd)}(BR,Od.image,Od.timestampUs,Od.NO,Od.captureFps);break;case"resize":BR.resize(Od.cssSize);break;case"health":BR.updateHealth(Od.gameFps,Od.pingMs);break;case"hidden":BR.setHidden(Od.hidden);break;case"flush":BR.flushSegment();break;case"cut":BR.cutAtNextFrame();break;case"gameJoined":BR.gameJoined()}}})();', "Worker", void 0, md.p + "sessionReplayVideo.worker.a5cacc48.worker.js")
    }

    function oO(dd) {
      return Math.max(2, 2 * Math.floor(dd / 2))
    }

    function NO(dd) {
      return Math.ceil(dd.width / 16) * Math.ceil(dd.height / 16)
    }
    class qO {
      constructor(dd) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / dd
      }
      setMaxFps(dd) {
        this.intervalMs = 1e3 / dd
      }
      shouldKeep(dd) {
        return !(dd < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = dd - this.nextDueMs > this.intervalMs ? dd + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class HO {
      constructor(dd, Od, md) {
        this.budgetMsPerSecond = dd, this.minFps = Od, this.smoothedCostMs = md
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      get paused() {
        return this.affordableFps() < this.minFps
      }
      record(dd) {
        const Od = this.paused ? .5 : .05;
        this.smoothedCostMs += (dd - this.smoothedCostMs) * Od
      }
      maxFps(dd) {
        return this.paused ? .1 : Math.min(dd, this.affordableFps())
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class yO {
      static isSupported() {
        const dd = globalThis.CanvasCaptureMediaStream;
        return ("undefined" !== typeof CanvasCaptureMediaStreamTrack && "requestFrame" in CanvasCaptureMediaStreamTrack.prototype || void 0 !== dd && "requestFrame" in dd.prototype) && "function" === typeof HTMLCanvasElement.prototype.captureStream && "requestVideoFrameCallback" in HTMLVideoElement.prototype
      }
      constructor(dd, Od, md) {
        this.onFrame = Od, this.stream = void 0, this.requester = void 0, this.video = document.createElement("video"), this.closed = !1, this.onVideoFrame = () => {
          this.closed || (this.onFrame(this.video), this.video.requestVideoFrameCallback(this.onVideoFrame))
        }, this.stream = dd.captureStream(0);
        const Wd = this.stream.getVideoTracks()[0];
        this.requester = "requestFrame" in Wd ? Wd : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(md), this.video.requestVideoFrameCallback(this.onVideoFrame)
      }
      request() {
        this.requester.requestFrame()
      }
      close() {
        this.closed = !0;
        for (const dd of this.stream.getTracks()) dd.stop();
        this.video.srcObject = null
      }
    }
    class bO {
      constructor(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = dd, this.grab = Wd, this.onUnavailable = Fd, this.render = null, this.stream = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.loggedPause = !1, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = md.msPerSecond, this.frameCostFloorMs = md.frameCostFloorMs, this.budget = new HO(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = Od, this.captureFps = this.budgetedFps(), this.frameLimiter = new qO(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps,
          grabPath: this.grab.path
        }
      }
      start(dd) {
        if (this.stop(), this.render = dd, "stream" === this.grab.path) {
          const Od = new yO(dd.canvas, (dd => {
            this.onStreamFrame(dd)
          }), (dd => {
            this.stream === Od && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${dd instanceof Error?dd.message:String(dd)}`))
          }));
          this.stream = Od
        }
      }
      stop() {
        var dd;
        this.render = null, this.pendingGrab = null, null === (dd = this.stream) || void 0 === dd || dd.close(), this.stream = null
      }
      setMaxFps(dd) {
        this.wantedFps = dd, this.applyFps()
      }
      onAfterRender() {
        const dd = performance.timeOrigin + performance.now(),
          Od = this.render;
        if (null === Od) return;
        const md = performance.now();
        if (null !== this.pendingGrab) {
          if (md - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas grab didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(dd)) return;
        const Wd = {
          startMs: md,
          timestampUs: Math.round(1e3 * dd),
          NO: {
            width: Od.canvas.width,
            height: Od.canvas.height
          },
          syncMs: 0,
          paused: this.isPaused()
        };
        null !== this.stream ? this.requestStreamFrame(this.stream, Wd) : "bitmap" === this.grab.path ? this.grabBitmap(Od.canvas, Wd) : this.grabVideoFrame(Od.canvas, Wd)
      }
      requestStreamFrame(dd, Od) {
        this.pendingGrab = Od;
        try {
          dd.request()
        } catch (md) {
          return this.pendingGrab = null, void this.grabFailed(md)
        }
        Od.syncMs = performance.now() - Od.startMs
      }
      grabVideoFrame(dd, Od) {
        let md;
        try {
          md = new VideoFrame(dd, {
            timestamp: Od.timestampUs
          })
        } catch (Wd) {
          return void this.grabFailed(Wd)
        }
        this.deliver(md, Od), this.recordCost(Math.max(2 * (performance.now() - Od.startMs), this.frameCostFloorMs))
      }
      grabBitmap(dd, Od) {
        const md = this.grab.cssSize(),
          Wd = function(dd, Od, md) {
            const Wd = Od.width * Od.height < dd.width * dd.height ? Od : dd;
            let Fd = oO(Math.max(Wd.width, 64)),
              Rd = oO(Math.max(Wd.height, 64));
            if (NO({
                width: Fd,
                height: Rd
              }) > md) {
              const dd = Fd,
                Od = Rd;
              for (Fd = oO(Fd * Math.sqrt(16 * md * 16 / (Fd * Rd))), Rd = oO(Fd * Od / dd); NO({
                  width: Fd,
                  height: Rd
                }) > md;) Fd -= 2, Rd = oO(Fd * Od / dd)
            }
            return {
              width: Fd,
              height: Rd
            }
          }(0 === md.width ? Od.NO : md, Od.NO, this.grab.maxMacroblocks);
        this.pendingGrab = Od, createImageBitmap(dd, {
          resizeWidth: Wd.width,
          resizeHeight: Wd.height,
          resizeQuality: "low"
        }).then((dd => {
          this.pendingGrab === Od ? (this.pendingGrab = null, this.deliverMeasured(dd, Od)) : dd.close()
        }), (dd => {
          this.pendingGrab === Od && (this.pendingGrab = null, this.grabFailed(dd))
        })), Od.syncMs = performance.now() - Od.startMs
      }
      onStreamFrame(dd) {
        const Od = this.pendingGrab;
        if (null === Od) return;
        this.pendingGrab = null;
        const md = performance.now();
        let Wd;
        try {
          Wd = new VideoFrame(dd, {
            timestamp: Od.timestampUs
          })
        } catch (Fd) {
          return void this.grabFailed(Fd)
        }
        Od.syncMs += performance.now() - md, this.deliverMeasured(Wd, Od)
      }
      deliverMeasured(dd, Od) {
        const md = performance.now();
        this.deliver(dd, Od), this.recordCost(Math.max(Od.syncMs + performance.now() - md, this.frameCostFloorMs))
      }
      deliver(dd, Od) {
        const md = {
          type: "frame",
          image: dd,
          timestampUs: Od.timestampUs,
          NO: Od.NO,
          captureFps: Od.paused ? null : this.captureFps
        };
        try {
          this.worker.postMessage(md, [dd])
        } catch (Wd) {
          return dd.close(), void this.grabFailed(Wd)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(dd) {
        this.budget.record(dd), this.applyFps()
      }
      grabFailed(dd) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", dd);
        !(dd instanceof DOMException && "InvalidStateError" === dd.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${dd instanceof Error?dd.message:String(dd)}`))
      }
      applyFps() {
        const dd = this.budgetedFps();
        dd !== this.captureFps && (this.captureFps = dd, this.frameLimiter.setMaxFps(dd), this.isPaused() && !this.loggedPause && (this.loggedPause = !0, console.warn(`Session replay paused video: ${this.grab.path} grabs cost ${this.budget.averageCostMs.toFixed(1)} ms, over a budget of ${this.budgetMsPerSecond} ms/s at 5 fps.`)))
      }
      isPaused() {
        return this.budgetMsPerSecond > 0 && this.budget.paused
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var TO = md(1361);
    class pO {
      constructor(dd) {
        this.events = dd, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const dd = (0, TO.V)().gameRender();
        if (null === dd || dd.canvas === this.canvas) return dd;
        const Od = null !== this.canvas;
        return this.canvas = dd.canvas, this.observe(dd.canvas), Od ? this.events.onCanvasSwapped(dd) : this.events.onFirstCanvas(dd), dd
      }
      stop() {
        var dd, Od;
        null === (dd = this.resizeObserver) || void 0 === dd || dd.disconnect(), null === (Od = this.listeners) || void 0 === Od || Od.abort()
      }
      observe(dd) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: Od
        } = this.listeners;
        dd.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: Od
        }), dd.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: Od
        });
        const md = dd.getBoundingClientRect();
        this.size = {
          width: Math.round(md.width),
          height: Math.round(md.height)
        }, this.resizeObserver = new ResizeObserver((dd => {
          const Od = dd[dd.length - 1].contentRect,
            md = {
              width: Math.round(Od.width),
              height: Math.round(Od.height)
            };
          0 !== md.width && 0 !== md.height && (this.size = md, this.events.onResized(md))
        })), this.resizeObserver.observe(dd)
      }
    }
    const YO = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      gO = 12e4;
    class wO extends Error {
      constructor(dd, Od) {
        super(Od), this.reason = dd
      }
    }
    class aO {
      constructor(dd, Od, md, Wd, Fd) {
        this.access = dd, this.uploadToken = Od, this.transport = md, this.callbacks = Wd, this.options = Fd, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(dd) {
        return this.segments.has(dd)
      }
      open(dd, Od) {
        this.segments.set(dd, {
          journalId: dd,
          sequence: Od,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(dd, Od) {
        const md = this.segments.get(dd);
        if (void 0 !== md) {
          md.parts.push(Od), md.bytes += Od.bytes.byteLength, !md.cut && null === md.totalParts && md.bytes > this.options.maxHeldBytes / 2 && (md.cut = !0, this.callbacks.cut());
          for (const dd of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(dd, "byteCap"), this.downUntilMs = this.options.nowMs() + gO
          }
          this.pump()
        }
      }
      close(dd, Od) {
        const md = this.segments.get(dd);
        void 0 !== md && (md.totalParts = Od, this.pump())
      }
      forget(dd) {
        this.segments.delete(dd)
      }
      releaseAll() {
        for (const dd of this.segments.values()) dd.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: dd.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let dd = 0;
        for (const Od of this.segments.values()) dd += Od.bytes;
        return dd
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let Od = this.nextWork(); null !== Od; Od = this.nextWork()) try {
            await this.advance(Od)
          } catch (dd) {
            console.warn(`Session replay part joiner failed on video segment ${Od.sequence}; uploading it straight to storage.`, dd), dd instanceof wO || (this.downUntilMs = this.options.nowMs() + gO), this.handBack(Od, dd instanceof wO ? dd.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const dd of this.segments.values())
          if (dd.sentParts < dd.parts.length || dd.totalParts === dd.parts.length) return dd;
        return null
      }
      async advance(dd) {
        if (dd.sentParts < dd.parts.length) return this.expectHeld(await this.sendPart(dd, dd.parts[dd.sentParts])), void dd.sentParts++;
        for (let Od = 0; this.owns(dd.journalId); Od++) {
          const md = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: dd.sequence,
            parts: dd.parts.length
          })));
          if (!this.owns(dd.journalId)) return;
          if ("stored" === md.outcome && md.stored.parts === dd.parts.length) return this.segments.delete(dd.journalId), void this.callbacks.stored(dd.journalId, dd.sequence, md.stored);
          if ("missing" !== md.outcome || Od >= 2) throw this.failure(md);
          for (const Od of md.parts) {
            if (!this.owns(dd.journalId)) return;
            const md = dd.parts[Od];
            if (void 0 === md) throw new wO("missing", `the joiner asked for part ${Od} of ${dd.parts.length}`);
            this.expectHeld(await this.sendPart(dd, md))
          }
        }
      }
      sendPart(dd, Od) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: dd.sequence,
          index: Od.index,
          meta: {
            ...Od.meta,
            startMs: Math.round(Od.meta.startMs),
            endMs: Math.round(Od.meta.endMs)
          },
          completeUntilUs: Od.completeUntilUs
        }, Od.bytes)))
      }
      expectHeld(dd) {
        if ("buffered" !== dd.outcome) throw this.failure(dd)
      }
      failure(dd) {
        if ("refused" === dd.outcome) {
          this.refused = !0;
          for (const dd of [...this.segments.values()]) this.handBack(dd, "refused");
          return new wO("refused", `refused: ${dd.reason}`)
        }
        const Od = "stored" === dd.outcome ? "shortStored" : "missing" === dd.outcome ? "missing" : "closed";
        return new wO(Od, `answered ${dd.outcome}`)
      }
      async request(dd) {
        for (let md = 1;; md++) {
          try {
            return await dd()
          } catch (Od) {
            if (md >= 3) throw Od
          }
          await this.options.wait(1e3 * 2 ** (md - 1))
        }
      }
      handBack(dd, Od) {
        this.segments.delete(dd.journalId) && (this.stats.handBacks[Od]++, this.callbacks.handBack(dd.journalId, dd.sequence, dd.parts, dd.totalParts))
      }
    }
    const EO = jd.b;
    class JO {
      constructor(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = dd, this.uploadToken = Od, this.nextTelemetrySequence = md, this.queuedDomAfter = Wd, this.nowMs = Fd, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(dd, Od, md, Wd, Fd) {
        const Rd = this.segment(dd, Od, md, Wd);
        if (void 0 === Fd) return void this.request(Rd, 0);
        const Xd = Fd.then((() => {
          this.stopped || this.segments.get(xO(dd, Od)) !== Rd || Rd.requested || this.request(Rd, 0), this.videoDue === Xd && (this.videoDue = null)
        }));
        this.videoDue = Xd
      }
      async takeDom(dd) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, dd);
        const Od = this.dom;
        if ((null === Od || void 0 === Od ? void 0 : Od.sequence) !== dd) return;
        this.dom = null;
        const md = await Od.upload;
        return void 0 !== md && UO(md, this.nowMs()) ? md.upload : void 0
      }
      async get(dd, Od, md, Wd, Fd) {
        const Rd = this.segment(dd, Od, md, Fd),
          Xd = Rd.requests.find((dd => Wd >= dd.first && Wd < dd.end));
        if (void 0 === this.valid(Rd, Wd) && void 0 !== Xd) {
          const dd = await Xd.answer.catch((() => null));
          if (null !== dd && "rejected" in dd) return dd
        }
        let Kd = this.valid(Rd, Wd);
        if (void 0 === Kd) {
          const dd = await this.request(Rd, Wd).answer;
          if ("rejected" in dd) return dd;
          Kd = dd[0]
        }
        return Kd
      }
      takeTelemetry(dd) {
        const Od = this.telemetry;
        if ((null === Od || void 0 === Od ? void 0 : Od.sequence) === dd) return this.telemetry = null, UO(Od.jK, this.nowMs()) ? Od.jK.target : void 0
      }
      peek(dd, Od, md) {
        const Wd = this.segments.get(xO(dd, Od));
        return void 0 === Wd ? void 0 : this.valid(Wd, md)
      }
      expire(dd, Od, md) {
        const Wd = this.segments.get(xO(dd, Od)),
          Fd = null === Wd || void 0 === Wd ? void 0 : Wd.jK.get(md);
        if (void 0 !== Wd && void 0 !== Fd)
          for (const [Rd, Xd] of Wd.jK) Xd.expiresAtMs <= Fd.expiresAtMs && Wd.jK.delete(Rd)
      }
      stop() {
        this.stopped = !0
      }
      forget(dd, Od) {
        this.segments.delete(xO(dd, Od))
      }
      segment(dd, Od, md, Wd) {
        const Fd = xO(dd, Od);
        let Rd = this.segments.get(Fd);
        return void 0 === Rd && (Rd = {
          kind: dd,
          sequence: Od,
          contentType: md,
          slots: Wd,
          jK: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(Fd, Rd)), Rd
      }
      valid(dd, Od) {
        const md = dd.jK.get(Od);
        return void 0 !== md && UO(md, this.nowMs()) ? md.target : void 0
      }
      telemetryToAskFor() {
        const dd = this.nextTelemetrySequence(),
          Od = this.telemetry;
        return this.telemetryAsked === dd || null !== Od && Od.sequence === dd && UO(Od.jK, this.nowMs()) ? null : dd
      }
      domToAskFor() {
        var dd;
        const Od = this.queuedDomAfter(this.domTaken);
        return null === Od || Od.sequence === (null === (dd = this.dom) || void 0 === dd ? void 0 : dd.sequence) ? null : Od
      }
      request(dd, Od) {
        const md = Od < dd.slots.count ? dd.slots.count : Od + 1,
          Wd = this.nowMs();
        dd.requested = !0;
        const Fd = "video" === dd.kind ? this.telemetryToAskFor() : null;
        null !== Fd && (this.telemetryAsked = Fd);
        const Rd = "video" === dd.kind ? this.domToAskFor() : null,
          Xd = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: dd.kind,
            sequence: dd.sequence,
            contentType: dd.contentType,
            parts: {
              first: Od,
              count: md - Od,
              maxBytes: dd.slots.maxBytes
            },
            ...null === Fd ? {} : {
              nextTelemetry: {
                sequence: Fd,
                maxBytes: EO
              }
            },
            ...null === Rd ? {} : {
              dom: Rd
            }
          });
        if (null !== Rd) {
          const dd = Xd.then((dd => {
            if ("rejected" in dd || void 0 === dd.domUpload) return;
            const {
              expiresInSecs: Od,
              ...md
            } = dd.domUpload;
            return {
              upload: md,
              expiresAtMs: Wd + 1e3 * Od
            }
          }), (() => {
            var dd;
            (null === (dd = this.dom) || void 0 === dd ? void 0 : dd.sequence) === Rd.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: Rd.sequence,
            upload: dd
          }
        }
        const Kd = Xd.then((md => {
            var Rd, Xd;
            if ("rejected" in md) return md;
            const Kd = Wd + 1e3 * md.expiresInSecs;
            md.targets.forEach(((md, Wd) => {
              dd.jK.set(Od + Wd, {
                target: md,
                expiresAtMs: Kd
              })
            }));
            return null !== Fd && Fd >= this.nextTelemetrySequence() && (null !== (Rd = null === (Xd = this.telemetry) || void 0 === Xd ? void 0 : Xd.sequence) && void 0 !== Rd ? Rd : -1) <= Fd && void 0 !== md.telemetryTarget && (this.telemetry = {
              sequence: Fd,
              jK: {
                target: md.telemetryTarget,
                expiresAtMs: Kd
              }
            }), md.targets
          })),
          hd = {
            first: Od,
            end: md,
            answer: Kd
          };
        dd.requests.push(hd);
        const vd = () => {
          dd.requests.splice(dd.requests.indexOf(hd), 1), null !== Fd && this.telemetryAsked === Fd && (this.telemetryAsked = null)
        };
        return Kd.then(vd, vd), hd
      }
    }

    function UO(dd, Od) {
      return dd.expiresAtMs - 6e4 > Od
    }

    function xO(dd, Od) {
      return `${dd}:${Od}`
    }
    const BO = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function SO(dd) {
      return new Promise((Od => {
        const md = () => {
            clearTimeout(Wd), window.removeEventListener("online", md), Od()
          },
          Wd = setTimeout(md, dd);
        window.addEventListener("online", md)
      }))
    }
    const sO = ["video", "dom"],
      uO = "video",
      VO = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      iO = "an earlier part of its segment was dropped",
      AO = new Set([403, 408, 409, 429]),
      rO = new Set(["RequestTimeout", "IncompleteBody"]);
    class GO {
      constructor(dd, Od, md, Wd) {
        this.transport = dd, this.uploadToken = Od, this.options = md, this.callbacks = Wd, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new JO(dd, Od, (() => {
          var dd;
          return null !== (dd = this.nextSequence.get("telemetry")) && void 0 !== dd ? dd : 0
        }), (dd => {
          const Od = this.queue.find((Od => "dom" === Od.kind && Od.sequence > dd));
          return void 0 === Od ? null : {
            sequence: Od.sequence,
            byteLength: Od.bytes.byteLength
          }
        }))
      }
      get backlogBytes() {
        return this.queuedBytes
      }
      get uploadingKind() {
        return this.uploadInFlight ? this.queue[0].kind : null
      }
      queued() {
        return this.queue.map((dd => {
          let {
            kind: Od,
            sequence: md,
            meta: Wd
          } = dd;
          return {
            kind: Od,
            sequence: md,
            meta: Wd
          }
        }))
      }
      openSegment(dd, Od, md, Wd) {
        const Fd = this.takeSequence(dd);
        return this.prefetchTargets(dd, Fd, Od, md, Wd), Fd
      }
      prefetchTargets(dd, Od, md, Wd, Fd) {
        this.stopped || this.targets.prefetch(dd, Od, md, Wd, Fd)
      }
      peekTarget(dd, Od, md) {
        return this.targets.peek(dd, Od, md)
      }
      closeSegment(dd, Od) {
        this.targets.forget(dd, Od), dd === uO && this.brokenSegments.delete(Od)
      }
      enqueue(dd) {
        var Od, md;
        const Wd = null !== (Od = null === (md = dd.part) || void 0 === md ? void 0 : md.sequence) && void 0 !== Od ? Od : null;
        if (this.stopped) return this.callbacks.onDropped(dd, "uploader stopped", Wd), null;
        if (null !== Wd && dd.kind === uO && this.brokenSegments.has(Wd)) return this.callbacks.onDropped(dd, iO, Wd), null;
        "still" === dd.kind && this.removeQueued(dd.kind);
        const Fd = {
            ...dd,
            sequence: null !== Wd && void 0 !== Wd ? Wd : this.takeSequence(dd.kind)
          },
          Rd = this.queue.findIndex(((Od, md) => (md > 0 || !this.uploadInFlight) && VO[Od.kind] > VO[dd.kind]));
        return this.queue.splice(-1 === Rd ? this.queue.length : Rd, 0, Fd), this.queuedBytes += dd.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(Fd) ? Fd.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const dd of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= dd.bytes.byteLength, this.callbacks.onDropped(dd, "uploader stopped", dd.sequence)
      }
      takeSequence(dd) {
        var Od;
        const md = null !== (Od = this.nextSequence.get(dd)) && void 0 !== Od ? Od : 0;
        return this.nextSequence.set(dd, md + 1), md
      }
      removeQueued(dd) {
        for (let Od = this.queue.length - 1; Od >= (this.uploadInFlight ? 1 : 0); Od--)
          if (this.queue[Od].kind === dd) {
            const [dd] = this.queue.splice(Od, 1);
            this.queuedBytes -= dd.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const dd of sO)
          for (const Od of [!1, !0])
            for (let md = this.uploadInFlight ? 1 : 0; md < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const Wd = this.queue[md];
              if (Wd.kind !== dd || !0 === Wd.dropLast && !Od) {
                md++;
                continue
              }
              const [Fd] = this.queue.splice(md, 1);
              this.queuedBytes -= Fd.bytes.byteLength, this.callbacks.onDropped(Fd, "backlog over cap", Fd.sequence), this.segmentBroken(Fd)
            }
      }
      segmentBroken(dd) {
        if (void 0 !== dd.part && dd.kind === uO) {
          this.brokenSegments.add(dd.sequence);
          for (let Od = this.queue.length - 1; Od >= (this.uploadInFlight ? 1 : 0); Od--) {
            const md = this.queue[Od];
            md.kind === uO && void 0 !== md.part && md.sequence === dd.sequence && (this.queue.splice(Od, 1), this.queuedBytes -= md.bytes.byteLength, this.callbacks.onDropped(md, iO, md.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const dd = this.queue[0];
            this.uploadInFlight = !0;
            const Od = await this.upload(dd);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= dd.bytes.byteLength, "uploaded" !== Od.type ? (this.callbacks.onDropped(dd, Od.reason, dd.sequence), this.segmentBroken(dd), "refused" !== Od.type || this.stopped || "telemetry" !== dd.kind || (console.warn(`Session replay uploads refused (${Od.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(Od.reason))) : this.callbacks.onUploaded(dd, dd.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(dd) {
        let Od = null,
          md = 0;
        for (let Fd = 1;; Fd++) {
          try {
            if (null === Od) {
              const md = await this.requestTarget(dd);
              if ("rejected" in md) {
                if (!md.retryable) return {
                  type: "refused",
                  reason: md.reason
                };
                throw new Error(`rejected for now: ${md.reason}`)
              }
              Od = md
            }
            try {
              "put" === Od.type ? await this.transport.put(Od.url, dd.bytes, dd.contentType, Od.ifNoneMatch) : await this.transport.post(Od.target, dd.bytes, dd.contentType)
            } catch (Wd) {
              if (Wd instanceof ed.b && null !== Wd.status && Wd.status < 500 && !AO.has(Wd.status) && (null === Wd.storageCode || !rO.has(Wd.storageCode))) return console.warn(`Session replay ${dd.kind} segment ${dd.sequence} refused by storage:`, Wd), {
                type: "dropped",
                reason: Wd.message
              };
              throw Wd
            }
            return {
              type: "uploaded"
            }
          } catch (Wd) {
            const Fd = Wd instanceof Error ? Wd.message : String(Wd),
              Rd = void 0 === dd.part ? "" : ` part ${dd.part.index}`;
            if (console.warn(`Session replay ${dd.kind} segment ${dd.sequence}${Rd} upload failed:`, Wd), Wd instanceof ed.b && (403 === Wd.status && (Od = null, void 0 !== dd.part && this.targets.expire(dd.kind, dd.sequence, dd.part.index)), ++md >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: Fd
            }
          }
          const Rd = Math.min(3e4, this.options.baseBackoffMs * 2 ** (Fd - 1));
          if (await this.options.wait(Rd * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(dd) {
        const {
          part: Od
        } = dd;
        if (void 0 !== Od) {
          const md = await this.targets.get(dd.kind, dd.sequence, dd.contentType, Od.index, Od.slots);
          return "rejected" in md ? md : {
            type: "post",
            target: md
          }
        }
        const md = "dom" === dd.kind ? await this.targets.takeDom(dd.sequence) : void 0;
        if (void 0 !== md) return {
          type: "put",
          url: md.uploadUrl,
          ifNoneMatch: md.ifNoneMatch
        };
        const Wd = "telemetry" === dd.kind && dd.bytes.byteLength <= EO ? this.targets.takeTelemetry(dd.sequence) : void 0;
        if (void 0 !== Wd) return {
          type: "post",
          target: Wd
        };
        const Fd = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: dd.kind,
          sequence: dd.sequence,
          contentType: dd.contentType,
          byteLength: dd.bytes.byteLength
        });
        return "rejected" in Fd ? Fd : {
          type: "put",
          url: Fd.uploadUrl,
          ifNoneMatch: Fd.ifNoneMatch
        }
      }
    }
    class nO {
      constructor(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = dd, this.slots = Od, this.manifest = md, this.journal = Wd, this.cut = Fd, this.joiner = Rd, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(dd, Od) {
        switch (dd.type) {
          case "videoSegmentOpened": {
            var md, Wd;
            if (null !== (md = this.joiner) && void 0 !== md && md.accepting) {
              var Fd;
              const Od = this.uploader.takeSequence("video");
              this.joiner.open(dd.journalId, Od), this.openJournalId = dd.journalId, null === (Fd = this.journal) || void 0 === Fd || Fd.videoQueued(dd.journalId, Od);
              break
            }
            const Rd = this.uploader.openSegment("video", "video/mp4", this.slots, Od);
            this.segments.set(dd.journalId, {
              sequence: Rd,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = dd.journalId, null === (Wd = this.journal) || void 0 === Wd || Wd.videoQueued(dd.journalId, Rd);
            break
          }
          case "videoPart": {
            var Rd;
            if (null !== (Rd = this.joiner) && void 0 !== Rd && Rd.owns(dd.journalId)) {
              const {
                index: Od,
                bytes: md,
                meta: Wd,
                completeUntilUs: Fd,
                completeUntilIndex: Rd
              } = dd;
              this.joiner.addPart(dd.journalId, {
                index: Od,
                bytes: md,
                meta: Wd,
                completeUntilUs: Fd,
                completeUntilIndex: Rd
              });
              break
            }
            const Od = this.segments.get(dd.journalId);
            void 0 !== Od && this.enqueuePart(dd.journalId, Od.sequence, dd);
            break
          }
          case "videoSegmentClosed": {
            var Xd;
            if (null !== (Xd = this.joiner) && void 0 !== Xd && Xd.owns(dd.journalId)) {
              var Kd;
              if (this.openJournalId === dd.journalId && (this.openJournalId = null), dd.parts > 0) this.joiner.close(dd.journalId, dd.parts);
              else this.joiner.forget(dd.journalId), null === (Kd = this.journal) || void 0 === Kd || Kd.videoSettled(dd.journalId);
              break
            }
            const Od = this.segments.get(dd.journalId);
            if (void 0 === Od) break;
            Od.totalParts = dd.parts, this.openJournalId === dd.journalId && (this.openJournalId = null), this.maybeDone(dd.journalId, Od);
            break
          }
        }
      }
      joinedStored(dd, Od, md) {
        this.manifest.setVideoSegment(Od, md.meta, null), this.storedWhole.set(Od, dd)
      }
      joinedHandedBack(dd, Od, md, Wd) {
        const Fd = {
          sequence: Od,
          settledParts: 0,
          totalParts: Wd,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(dd, Fd), this.uploader.prefetchTargets("video", Od, "video/mp4", this.slots);
        for (const Rd of md) this.enqueuePart(dd, Od, Rd)
      }
      enqueuePart(dd, Od, md) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: md.bytes,
          meta: {
            type: "video",
            meta: md.meta,
            journalId: dd,
            index: md.index,
            completeUntilUs: md.completeUntilUs,
            completeUntilIndex: md.completeUntilIndex
          },
          part: {
            sequence: Od,
            index: md.index,
            slots: this.slots
          }
        })
      }
      landed(dd, Od) {
        if (null !== dd.completeUntilUs && dd.meta.endMs > dd.meta.startMs) {
          var md, Wd;
          const Fd = this.segments.get(dd.journalId);
          void 0 !== Fd && (Fd.landedParts = dd.index + 1), this.manifest.setVideoSegment(Od, dd.meta, dd.index + 1), null === (md = this.journal) || void 0 === md || md.videoPartLanded(dd.journalId, {
            partsLanded: dd.index + 1,
            completeUntilUs: dd.completeUntilUs,
            meta: dd.meta
          }, null !== (Wd = dd.completeUntilIndex) && void 0 !== Wd ? Wd : 0)
        }
        this.settled(dd)
      }
      dropped(dd) {
        this.settled(dd), dd.journalId === this.openJournalId && dd.journalId !== this.cutJournalId && (this.cutJournalId = dd.journalId, this.cut())
      }
      listed(dd, Od) {
        if (null !== Od)
          for (const [Wd, Fd] of this.segments) Fd.sequence === dd && (Fd.listedParts = Math.max(Fd.listedParts, Od), this.maybeDone(Wd, Fd));
        else {
          const Od = this.storedWhole.get(dd);
          var md;
          void 0 !== Od && (this.storedWhole.delete(dd), null === (md = this.journal) || void 0 === md || md.videoSettled(Od))
        }
      }
      settled(dd) {
        const Od = this.segments.get(dd.journalId);
        void 0 !== Od && (Od.settledParts++, this.maybeDone(dd.journalId, Od))
      }
      maybeDone(dd, Od) {
        if (null === Od.totalParts || Od.settledParts < Od.totalParts) return;
        const md = Od.listedParts >= Od.landedParts;
        var Wd, Fd;
        Od.uploaded || (Od.uploaded = !0, this.uploader.closeSegment("video", Od.sequence), md || null === (Wd = this.journal) || void 0 === Wd || Wd.videoUploaded(dd));
        md && (this.segments.delete(dd), null === (Fd = this.journal) || void 0 === Fd || Fd.videoSettled(dd))
      }
    }
    var LO = md(4081),
      PO = md(5350);
    class zO {
      constructor(dd, Od) {
        this.deps = dd, this.videoStatus = Od, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new pO({
          onFirstCanvas: dd => {
            this.attachToCanvas(dd)
          },
          onCanvasSwapped: dd => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(dd), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: dd => {
            this.postToWorker({
              type: "resize",
              cssSize: dd
            })
          },
          onContextLost: () => {
            this.deps.telemetry.writeEvent("contextLost"), this.deps.manifest.flagCurrentGame("hadError")
          },
          onContextRestored: () => {
            this.deps.telemetry.writeEvent("contextRestored")
          }
        })
      }
      attachToCanvas(dd) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(dd, this.deps.videoConfig)
        } catch (Od) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", Od), this.videoUnavailable(`video couldn't start: ${Od instanceof Error?Od.message:String(Od)}`)
        }
      }
      startVideo(dd, Od) {
        var md, Wd, Fd;
        const Rd = new tO,
          Xd = (0, FO.o)(Od),
          Kd = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          hd = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => vd), Kd),
          vd = new nO(this.deps.uploader, Xd, this.deps.manifest, this.deps.journal, Kd, hd);
        Rd.onmessage = dd => {
          this.onWorkerMessage(dd.data, vd)
        }, Rd.onerror = dd => {
          console.error("Session replay video worker error.", dd.message), this.worker === Rd && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${dd.message||"it didn't load"}`))
        }, this.worker = Rd, this.uploads = vd, this.joiner = hd, this.deps.debug.joiner = null !== (md = null === hd || void 0 === hd ? void 0 : hd.stats) && void 0 !== md ? md : null, this.videoStarted = !0, this.deps.stills.start();
        const Qd = (0, sd.getOperatingSystem)(),
          td = (0, Sd.d)();
        this.postToWorker({
          type: "init",
          videoConfig: Od,
          partPlan: {
            ...Xd,
            partDurationMs: Od.partDurationMs,
            keyframeIntervalMs: Od.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          encoderPreference: {
            preferSoftware: Od.softwareEncoderPlatforms.includes(Qd),
            preferQualityLatency: "ios" === Qd
          },
          journalRecordingId: null !== (Wd = null === (Fd = this.deps.journal) || void 0 === Fd ? void 0 : Fd.recordingId) && void 0 !== Wd ? Wd : null
        });
        const od = function(dd, Od, md, Wd) {
          const Fd = Wd && dd.streamGrabEngines.includes(md) ? "stream" : dd.videoFrameGrabPlatforms.includes(Od) ? "videoFrame" : "bitmap";
          return {
            path: Fd,
            frameCostFloorMs: Math.max(dd.captureFrameCostFloorMs, "stream" === Fd ? 2.5 : 0, "ios" === Od ? 3.5 : 0)
          }
        }(Od, Qd, td, yO.isSupported() && !dd.renderer.endsWith("webgpu"));
        this.capture = new bO(Rd, Od.maxFps, {
          msPerSecond: Od.captureBudgetMsPerSecond,
          frameCostFloorMs: od.frameCostFloorMs
        }, {
          path: od.path,
          maxMacroblocks: Od.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (dd => {
          this.endVideo(), this.videoStopped("stopped_error", dd)
        })), this.capture.start(dd)
      }
      createJoiner(dd, Od, md) {
        return new aO(dd, this.deps.recording.uploadToken, new ld(dd.url), {
          stored: (dd, md, Wd) => {
            Od().joinedStored(dd, md, Wd), this.deps.pageExit.segmentLanded()
          },
          handBack: (dd, md, Wd, Fd) => {
            Od().joinedHandedBack(dd, md, Wd, Fd)
          },
          cut: md
        }, {
          wait: SO,
          nowMs: Date.now,
          maxHeldBytes: YO[this.deps.platformType]
        })
      }
      onWorkerMessage(dd, Od) {
        var md, Wd, Fd, Rd;
        switch (dd.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            Od.onWorkerMessage(dd, "videoSegmentOpened" === dd.type ? null === (md = this.deps.dom()) || void 0 === md ? void 0 : md.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(dd, document.hidden);
            break;
          case "stats":
            Fd = this.deps.debug, Rd = dd.stats, Fd.workerStats.push(Rd), Fd.workerStats.length > 120 && Fd.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(dd.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = dd.level, null === (Wd = this.capture) || void 0 === Wd || Wd.setMaxFps(dd.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, kd.b)(),
              level: dd.level,
              maxFps: dd.maxFps,
              reason: dd.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${dd.level} (${dd.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(dd.reason)
        }
      }
      videoUnavailable(dd) {
        var Od, md;
        null === (Od = this.capture) || void 0 === Od || Od.stop(), this.capture = null, null === (md = this.worker) || void 0 === md || md.terminate(), this.worker = null, this.videoStopped("stopped_error", dd)
      }
      videoStopped(dd, Od) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = Od, "stopped_error" === dd && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(dd, Od))
      }
      setVideoStatus(dd, Od) {
        this.videoStatus = dd, (0, LO.j)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, PO.h)(dd, Od)
      }
      maybeLogStats(dd) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const Od = Math.round(1e3 * dd.encodedFrames / dd.windowMs);
        console.warn(`Session replay stats: ${Od} fps encoded, ${dd.encodeWidth}x${dd.encodeHeight} ${dd.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var dd;
        null === (dd = this.capture) || void 0 === dd || dd.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const Od = this.worker;
        this.worker = null, setTimeout((() => {
          null === Od || void 0 === Od || Od.terminate()
        }), 15e3)
      }
      postToWorker(dd) {
        var Od;
        null === (Od = this.worker) || void 0 === Od || Od.postMessage(dd)
      }
    }
    const cO = 3 * jd.b / 4,
      jO = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var DO = md(41419);
    const eO = {
        count: 1,
        maxBytes: FO.j
      },
      IO = "image/jpeg";
    class lO {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jd.c;
        this.uploader = dd, this.manifest = Od, this.relay = md, this.keepalive = Wd, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(dd, Od) {
        let {
          bytes: md,
          small: Wd,
          atMs: Fd
        } = dd;
        const Rd = md.byteLength <= eO.maxBytes ? md : Wd;
        null !== Rd && (this.latest = {
          bytes: Rd,
          small: Wd,
          atMs: Fd
        }, Od && this.upload())
      }
      upload() {
        var dd, Od;
        const md = this.latest;
        if (this.stopped || null === md || md.atMs <= (null !== (dd = null === (Od = this.queued) || void 0 === Od ? void 0 : Od.atMs) && void 0 !== dd ? dd : -1 / 0)) return;
        const Wd = this.takeSequence();
        this.queued = {
          atMs: md.atMs,
          sequence: Wd
        }, this.uploader.enqueue({
          kind: "still",
          contentType: IO,
          bytes: md.bytes,
          meta: {
            type: "still",
            atMs: md.atMs,
            sequence: Wd
          },
          part: {
            sequence: Wd,
            index: 0,
            slots: eO
          }
        })
      }
      landed(dd) {
        this.manifest.setStill(dd.atMs, dd.sequence), this.uploader.closeSegment("still", dd.sequence)
      }
      dropped(dd) {
        this.uploader.closeSegment("still", dd.sequence)
      }
      beacon() {
        var dd, Od, md, Wd;
        const Fd = this.latest;
        if (this.stopped || null === Fd || Fd.atMs <= (null !== (dd = null === (Od = this.manifest.contents.still) || void 0 === Od ? void 0 : Od.atMs) && void 0 !== dd ? dd : -1 / 0)) return;
        const Rd = (null === (md = this.queued) || void 0 === md ? void 0 : md.atMs) === Fd.atMs ? this.queued : null;
        if (null !== Rd && this.keepalive.isInFlight(IO)) return void this.manifest.setStill(Fd.atMs, Rd.sequence);
        const Xd = null !== (Wd = null === Rd || void 0 === Rd ? void 0 : Rd.sequence) && void 0 !== Wd ? Wd : this.nextSequence,
          Kd = this.uploader.peekTarget("still", Xd, 0);
        if (void 0 !== Kd)
          for (const hd of [Fd.bytes, Fd.small])
            if (null !== hd && this.sendBeacon(Kd, hd)) return null === Rd && this.takeSequence(), void this.manifest.setStill(Fd.atMs, Xd)
      }
      sendBeacon(dd, Od) {
        var md, Wd;
        const Fd = null !== (md = null === (Wd = this.relay) || void 0 === Wd ? void 0 : Wd.beacon({
          method: "POST",
          url: dd.url,
          fields: dd.fields
        }, Od, IO, this.keepalive)) && void 0 !== md ? md : null;
        if (null !== Fd) return Fd;
        const {
          form: Rd,
          byteLength: Xd
        } = (0, DO.f)(dd, Od, IO);
        return this.keepalive.sendUploadBeacon(dd.url, Rd, Xd)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const dd = this.nextSequence++;
        return this.prefetchNext(), dd
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, IO, eO)
      }
    }
    var CO = md(5367),
      ZO = md(41428),
      kO = md(41432),
      fO = md(41441),
      MO = md(7460),
      dm = md(7465);

    function Om(dd) {
      return 50 * Math.floor(dd / 50)
    }
    class mm {
      constructor() {
        this.writer = new MO.d((0, kd.b)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(dd, Od) {
        null !== dd && (this.setActionBits(dd.getActionBits(), (0, kd.b)()), this.unsubscribers.push(dd.onKey(((dd, Od, md, Wd, Fd, Rd) => {
          const Xd = (0, dm.g)(dd);
          Fd ? this.writer.writeKey(Om(Rd), Xd, Od, md, Wd) : 0 !== Xd && null === (0, dm.i)(dd) && this.writer.writeKey(Om(Rd), 0, Od, md, Wd)
        })), dd.onActions(((dd, Od) => {
          this.setActionBits(dd, Od)
        })), dd.onPointerLock(((dd, Od) => {
          this.writer.writeEvent(Od, dd ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, TO.H)((() => {
          const dd = (0, TO.k)();
          this.writer.writeFrame((0, kd.b)() - dd, dd), this.framesSinceFpsSample++, Od()
        })))
      }
      writeState(dd, Od) {
        this.writer.writeState((0, kd.b)(), {
          backingWidth: dd.canvas.width,
          backingHeight: dd.canvas.height,
          cssWidth: dd.cssWidth,
          cssHeight: dd.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: dd.renderer,
          pingMs: dd.pingMs,
          hidden: Od,
          qualityLevel: dd.qualityLevel
        })
      }
      writeEvent(dd) {
        this.writer.writeEvent((0, kd.b)(), dd)
      }
      sampleFps() {
        const dd = performance.now(),
          Od = dd - this.lastFpsSampleMs,
          md = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = dd, this.framesSinceFpsSample = 0, 0 === md || Od <= 0 ? null : 1e3 * md / Od
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const dd = this.writer.chunkStartMs,
          Od = (0, kd.b)(),
          md = this.writer.takeChunk(Od);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(Od, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: md,
          startMs: dd,
          endMs: Od
        }
      }
      stop() {
        for (const dd of this.unsubscribers) dd();
        this.unsubscribers = []
      }
      setActionBits(dd, Od) {
        dd !== this.actionBits && (this.actionBits = dd, this.writer.writeActions(Om(Od), dd))
      }
    }
    var Wm = md(5380),
      Fm = md(41450);
    class Rm {
      constructor(dd, Od) {
        var md;
        this.recording = dd, this.telemetry = new mm, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const Wd = Od.dryRun ? null : null !== (md = dd.partJoiner) && void 0 !== md ? md : null,
          Fd = null === Wd ? null : (0, Dd.g)(Cd(Wd)),
          Xd = Od.dryRun ? new DO.c : new DO.e((0, Bd.c)().segmentUploadUrl, {
            relay: Fd
          });
        var hd, vd;
        this.videoConfig = Od.dryRun ? function(dd) {
          var Od, md, Wd, Fd;
          const Xd = Rd[dd],
            Kd = Vd.k.getItem("replaySkipLowMemory"),
            hd = "boolean" === typeof Kd ? Kd : null;
          return {
            ...Xd,
            maxFps: null !== (Od = Gd("replayMaxFps")) && void 0 !== Od ? Od : Xd.maxFps,
            maxMacroblocks: null !== (md = Gd("replayMaxMacroblocks")) && void 0 !== md ? md : Xd.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (Wd = Gd("replayCaptureBudgetMs")) && void 0 !== Wd ? Wd : Xd.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (Fd = Gd("replayCaptureCostFloorMs")) && void 0 !== Fd ? Fd : Xd.captureFrameCostFloorMs,
            softwareEncoderPlatforms: nd("replayEncoder", "software", "hardware", Xd.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: nd("replayGrab", "videoFrame", "bitmap", Xd.videoFrameGrabPlatforms),
            streamGrabEngines: Ld(Xd.streamGrabEngines),
            skipLowMemoryDevices: null !== hd && void 0 !== hd ? hd : Xd.skipLowMemoryDevices
          }
        }(Od.platformType) : dd.videoConfig && (hd = dd.videoConfig, vd = Od.platformType, {
          ...Rd[vd],
          ...hd
        });
        const Qd = (0, Wm.c)(this.videoConfig);
        (0, LO.j)("recorded" === Qd ? "video" : "dom_only", dd), this.manifest = new mO(dd.recordingId, dd.uploadToken, !Od.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: dd.expiresAtMs - 6e4,
          onSend: dd => {
            var Od;
            null === (Od = this.journal) || void 0 === Od || Od.manifestSent(dd)
          },
          onListed: dd => {
            let {
              list: Od,
              value: md
            } = dd;
            var Wd, Fd;
            if ("videoSegments" === Od) null === (Wd = this.video.uploads) || void 0 === Wd || Wd.listed(md.sequence, null !== (Fd = md.parts) && void 0 !== Fd ? Fd : null);
            else if ("telemetrySegments" === Od) {
              var Rd;
              null === (Rd = this.journal) || void 0 === Rd || Rd.telemetrySettled(md.sequence)
            } else {
              var Xd;
              null === (Xd = this.journal) || void 0 === Xd || Xd.domSettled(md.sequence)
            }
          }
        }), !Od.dryRun && fO.b.supported && (this.journal = new KO(new fO.b, dd, this.manifest.contents, (0, Bd.c)())), this.debug = function() {
          const dd = {
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
          return window.sessionReplayDebug = dd, dd
        }(), this.uploader = new GO(Xd, dd.uploadToken, {
          ...BO,
          maxBacklogBytes: jO[Od.platformType],
          wait: SO
        }, {
          onUploaded: (dd, Od) => {
            var md;
            this.debug.uploadedBytesByKind[dd.kind] = (null !== (md = this.debug.uploadedBytesByKind[dd.kind]) && void 0 !== md ? md : 0) + dd.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(dd.meta, Od, dd.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (dd, Od, md) => {
            var Wd;
            if (console.warn(`Session replay dropped a ${dd.kind} segment: ${Od}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === dd.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (Wd = this.video.uploads) || void 0 === Wd || Wd.dropped(dd.meta);
            else if ("still" === dd.meta.type) this.stills.dropped(dd.meta);
            else if ("telemetry" === dd.meta.type && null !== md) {
              var Fd;
              null === (Fd = this.journal) || void 0 === Fd || Fd.telemetrySettled(md)
            } else if ("dom" === dd.meta.type && null !== md) {
              var Rd;
              null === (Rd = this.journal) || void 0 === Rd || Rd.domSettled(md)
            }
          },
          onStopped: dd => {
            this.stop(`uploads refused: ${dd}`)
          }
        }), this.stills = new lO(this.uploader, this.manifest, Fd), this.pageExit = new hO({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var dd, Od;
            null === (dd = this.dom) || void 0 === dd || dd.cut(), null === (Od = this.dom) || void 0 === Od || Od.cutAfterNextBatch()
          },
          postToWorker: dd => {
            this.video.postToWorker(dd)
          },
          writeEvent: dd => {
            this.telemetry.writeEvent(dd)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var dd;
            null === (dd = this.video.joiner) || void 0 === dd || dd.releaseAll()
          }
        }), this.video = new zO({
          recording: dd,
          videoConfig: this.videoConfig,
          joinerAccess: Wd,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: Od.dryRun ? {
            logStats: !0 === Vd.k.getItem("replayLogStats")
          } : rd,
          platformType: Od.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, Qd);
        const td = Od.dryRun ? function() {
          var dd;
          const Od = null !== (dd = (0, Ad.e)() ? ud.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== dd ? dd : Vd.k.getItem("replayPostHogHost");
          return "string" === typeof Od && Od.length > 0 ? {
            apiHost: Od,
            projectApiKey: "dry-run"
          } : null
        }() : dd.posthog;
        if (this.ownFpsMonitor = null === td ? new Fm.d({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, Kd.j.subscribe("sessionReplayLowFps", (dd => {
            let {
              low: Od
            } = dd;
            this.isStopped || this.onLowFps(Od)
          })), Kd.j.subscribe("sessionReplayStayProgress", (dd => {
            !this.isStopped && this.manifest.updateCurrentStay(dd) && this.manifest.sendSoon()
          })), Kd.j.subscribe("sessionReplayGameQuit", (dd => {
            let {
              reasons: Od,
              gameName: md
            } = dd;
            Od.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(md) && this.pageExit.sendManifest()
          })), null !== Od.currentGame && (this.listStay(Od.currentGame), Kd.j.lQ("sessionReplayStayOpened", Od.currentGame.gameNameWithVariation)), this.start(dd.expiresAtMs), this.dom = null, null !== td) {
          const md = new Ud(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: dd => this.isStopped || this.pageExit.isHiding || document.hidden && !dd
          }, this.journal, new xd.d);
          this.dom = md, (0, PO.e)({
            recording: dd,
            posthog: td,
            videoStatus: this.video.videoStatus,
            dryRun: Od.dryRun,
            onDomBatch: dd => {
              md.add(dd)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var dd, Od;
        return null !== (dd = null === (Od = this.videoConfig) || void 0 === Od ? void 0 : Od.manifestIntervalMs) && void 0 !== dd ? dd : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(dd) {
        const {
          lobbyName: Od,
          ...md
        } = dd;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === Od ? md : {
          ...md,
          lobbyName: Od
        })
      }
      gameJoined(dd) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(dd), Kd.j.lQ("sessionReplayStayOpened", dd.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(dd, Od) {
        this.isStopped || (this.manifest.addCreatorGrant(dd, Od), this.manifest.send())
      }
      onLowFps(dd) {
        this.lowFpsOpen = dd, dd && this.manifest.flagCurrentGame("lowFps")
      }
      start(dd) {
        const Od = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var dd;
          this.flushTelemetry(), null === (dd = this.dom) || void 0 === dd || dd.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, dd - Date.now() - 6e4))), this.pageExit.listen(Od), this.telemetry.attach((0, kO.b)(), (() => {
          var dd;
          null === (dd = this.video.capture) || void 0 === dd || dd.onAfterRender()
        }));
        for (const md of ["error", "unhandledrejection"]) window.addEventListener(md, (dd => {
          (0, ZO.e)(dd) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: Od
        });
        (0, Wm.d)((() => {
          this.video.onCellular()
        }), Od), null !== this.journal && (0, CO.b)(Od)
      }
      stop(dd) {
        var Od, md;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${dd}`), this.debug.stoppedReason = dd, this.lifetime.abort();
          for (const dd of this.timers) clearTimeout(dd);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, PO.i)(), this.telemetry.stop(), this.flushTelemetry(), null === (Od = this.dom) || void 0 === Od || Od.cut(), null === (md = this.dom) || void 0 === md || md.close(), this.video.endVideo(), this.manifest.send(), (0, LO.j)("events_only", this.recording)
        }
      }
      onStateTick() {
        var dd;
        const Od = this.video.canvasWatch.check();
        if (null === Od) return;
        const {
          cssSize: md
        } = this.video.canvasWatch, Wd = Xd.c.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: Od.canvas,
          cssWidth: md.width,
          cssHeight: md.height,
          renderer: Od.renderer,
          pingMs: Wd,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= cO && this.flushTelemetry();
        const Fd = this.telemetry.sampleFps(),
          Rd = document.hidden ? null : Fd;
        if (null === (dd = this.ownFpsMonitor) || void 0 === dd || dd.addSample(Rd, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: Rd,
            pingMs: Wd
          }), null !== this.video.capture) {
          const {
            averageMs: dd,
            fps: Od,
            grabPath: md
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: dd,
            budgetFps: Od,
            grabPath: md
          }
        }
      }
      onSegmentUploaded(dd, Od, md) {
        var Wd;
        if ("video" === dd.type) null === (Wd = this.video.uploads) || void 0 === Wd || Wd.landed(dd, Od);
        else if ("still" === dd.type) this.stills.landed(dd);
        else if ("dom" === dd.type) {
          var Fd;
          null === (Fd = this.journal) || void 0 === Fd || Fd.domLanded(Od, dd.chunk), this.manifest.addDomSegment({
            sequence: Od,
            ...dd.chunk
          })
        } else {
          var Rd;
          null === (Rd = this.journal) || void 0 === Rd || Rd.telemetryLanded(Od, md, dd.startMs, dd.endMs), this.manifest.addTelemetrySegment(Od, dd.startMs, dd.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: dd,
          startMs: Od,
          endMs: md
        } = this.telemetry.takeChunk(), Wd = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: dd,
          meta: {
            type: "telemetry",
            startMs: Od,
            endMs: md
          }
        });
        var Fd;
        null !== Wd && (null === (Fd = this.journal) || void 0 === Fd || Fd.telemetryQueued(Wd, dd, Od, md));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7460: (dd, Od, md) => {
    md.d(Od, {
      d: () => xd,
      g: () => Bd
    });
    var Wd = md(7465);
    const Fd = 827609666,
      Rd = 2,
      Xd = 1,
      Kd = 13,
      hd = 1,
      vd = 2,
      Qd = 3,
      td = 4,
      od = 5,
      Nd = 7,
      qd = 19,
      Hd = 6,
      yd = 7,
      bd = 7,
      Td = 1,
      pd = 2,
      Yd = 4,
      gd = 65535,
      wd = 10,
      Ed = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      Jd = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function Ud(dd) {
      return Math.max(0, Math.min(gd, Math.round(dd)))
    }
    class xd {
      constructor(dd) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(dd)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - Kd
      }
      writeFrame(dd, Od) {
        this.reserve(Nd);
        const md = this.view,
          Wd = this.length;
        md.setUint8(Wd, hd), md.setUint32(Wd + 1, this.timeUnits(dd), !0), md.setUint16(Wd + 5, Ud(100 * Od), !0), this.length += Nd
      }
      writeState(dd, Od) {
        this.reserve(qd);
        const md = this.view,
          Wd = this.length;
        md.setUint8(Wd, vd), md.setUint32(Wd + 1, this.timeUnits(dd), !0), md.setUint16(Wd + 5, Ud(Od.backingWidth), !0), md.setUint16(Wd + 7, Ud(Od.backingHeight), !0), md.setUint16(Wd + 9, Ud(Od.cssWidth), !0), md.setUint16(Wd + 11, Ud(Od.cssHeight), !0), md.setUint16(Wd + 13, Ud(100 * Od.devicePixelRatio), !0), md.setUint8(Wd + 15, Ed.indexOf(Od.renderer)), md.setUint16(Wd + 16, null === Od.pingMs ? gd : Ud(Math.min(Od.pingMs, gd - 1)), !0), md.setUint8(Wd + 18, (Od.hidden ? 1 : 0) | (7 & Od.qualityLevel) << 1), this.length += qd
      }
      writeEvent(dd, Od) {
        this.reserve(Hd);
        const md = this.length;
        this.view.setUint8(md, Qd), this.view.setUint32(md + 1, this.timeUnits(dd), !0), this.view.setUint8(md + 5, Jd.indexOf(Od)), this.length += Hd
      }
      writeActions(dd, Od) {
        this.reserve(yd);
        const md = this.length;
        this.view.setUint8(md, td), this.view.setUint32(md + 1, this.timeUnits(dd), !0), this.view.setUint16(md + 5, Od, !0), this.length += yd
      }
      writeKey(dd, Od, md, Wd, Fd) {
        this.reserve(bd);
        const Rd = this.length;
        this.view.setUint8(Rd, od), this.view.setUint32(Rd + 1, this.timeUnits(dd), !0), this.view.setUint8(Rd + 5, Od), this.view.setUint8(Rd + 6, (md ? Td : 0) | (Wd ? pd : 0) | (Fd ? Yd : 0)), this.length += bd
      }
      takeChunk(dd) {
        const Od = this.buffer.slice(0, this.length);
        return this.startChunk(dd), Od
      }
      startChunk(dd) {
        this.baseEpochMs = dd, this.view.setUint32(0, Fd, !0), this.view.setUint8(4, Rd), this.view.setFloat64(5, dd, !0), this.length = Kd
      }
      timeUnits(dd) {
        return Math.max(0, Math.round((dd - this.baseEpochMs) * wd))
      }
      reserve(dd) {
        if (this.length + dd <= this.buffer.byteLength) return;
        const Od = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(Od).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = Od, this.view = new DataView(Od)
      }
    }

    function Bd(dd) {
      const Od = new DataView(dd),
        md = dd.byteLength < Kd ? 0 : Od.getUint8(4);
      if (md < Xd || md > Rd || Od.getUint32(0, !0) !== Fd) throw new Error(`Not a version ${Xd}-${Rd} replay telemetry chunk`);
      const Ud = Od.getFloat64(5, !0),
        xd = {
          baseEpochMs: Ud,
          inputRecorded: md >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        Bd = dd => Ud + Od.getUint32(dd, !0) / wd;
      let Sd = Kd;
      for (; Sd < dd.byteLength;) {
        const dd = Od.getUint8(Sd);
        if (dd === hd) xd.frames.push({
          atMs: Bd(Sd + 1),
          cpuFrameMs: Od.getUint16(Sd + 5, !0) / 100
        }), Sd += Nd;
        else if (dd === vd) {
          var sd;
          const dd = Od.getUint16(Sd + 16, !0),
            md = Od.getUint8(Sd + 18);
          xd.states.push({
            atMs: Bd(Sd + 1),
            backingWidth: Od.getUint16(Sd + 5, !0),
            backingHeight: Od.getUint16(Sd + 7, !0),
            cssWidth: Od.getUint16(Sd + 9, !0),
            cssHeight: Od.getUint16(Sd + 11, !0),
            devicePixelRatio: Od.getUint16(Sd + 13, !0) / 100,
            renderer: null !== (sd = Ed[Od.getUint8(Sd + 15)]) && void 0 !== sd ? sd : "unknown",
            pingMs: dd === gd ? null : dd,
            hidden: 1 === (1 & md),
            qualityLevel: md >> 1 & 7
          }), Sd += qd
        } else if (dd === Qd) {
          var ud;
          xd.events.push({
            atMs: Bd(Sd + 1),
            event: null !== (ud = Jd[Od.getUint8(Sd + 5)]) && void 0 !== ud ? ud : "none"
          }), Sd += Hd
        } else if (dd === td && xd.inputRecorded) xd.actions.push({
          atMs: Bd(Sd + 1),
          bits: Od.getUint16(Sd + 5, !0)
        }), Sd += yd;
        else {
          if (dd !== od || !xd.inputRecorded) throw new Error(`Unknown replay telemetry record type ${dd} at byte ${Sd}`);
          {
            var Vd;
            const dd = Od.getUint8(Sd + 6);
            xd.keys.push({
              atMs: Bd(Sd + 1),
              code: null !== (Vd = Wd.d[Od.getUint8(Sd + 5)]) && void 0 !== Vd ? Vd : Wd.d[0],
              down: 0 !== (dd & Td),
              bound: 0 !== (dd & pd),
              inPlay: 0 !== (dd & Yd)
            }), Sd += bd
          }
        }
      }
      return xd
    }
  },
  37635: dd => {
    dd.exports = function(dd, Od, md, Wd) {
      var Fd = self || window;
      try {
        try {
          var Rd;
          try {
            Rd = new Fd.Blob([dd])
          } catch (vd) {
            (Rd = new(Fd.BlobBuilder || Fd.WebKitBlobBuilder || Fd.MozBlobBuilder || Fd.MSBlobBuilder)).append(dd), Rd = Rd.getBlob()
          }
          var Xd = Fd.URL || Fd.webkitURL,
            Kd = Xd.createObjectURL(Rd),
            hd = new Fd[Od](Kd, md);
          return Xd.revokeObjectURL(Kd), hd
        } catch (vd) {
          return new Fd[Od]("data:application/javascript,".concat(encodeURIComponent(dd)), md)
        }
      } catch (vd) {
        if (!Wd) throw Error("Inline worker is not supported");
        return new Fd[Od](Wd, md)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);