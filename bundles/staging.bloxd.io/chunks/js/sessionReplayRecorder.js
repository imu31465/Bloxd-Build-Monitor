export const id = 64;
export const ids = [64];
export const modules = {
  41138: (bb, wb, Mb) => {
    function eb() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function Hb(bb) {
      return bb instanceof Uint8Array && (!eb() || !Buffer.isBuffer(bb))
    }

    function pb(bb) {
      return bb instanceof ArrayBuffer
    }

    function Vb(bb) {
      return !!eb() && Buffer.isBuffer(bb)
    }
    var gb = Mb(41147).b,
      lb = Mb(41149).d,
      Lb = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    wb.d = function(bb) {
      if (!Hb(bb) && !pb(bb) && !Vb(bb)) throw new TypeError(Lb);
      var wb = !1,
        Mb = !1;
      Hb(bb) ? wb = !0 : pb(bb) && (Mb = !0, bb = new Uint8Array(bb));
      var eb, gb, Ib, Ob = new lb(bb),
        Ub = Ob.maxCompressedLength();
      if (wb ? (eb = new Uint8Array(Ub), Ib = Ob.compressToBuffer(eb)) : Mb ? (eb = new ArrayBuffer(Ub), gb = new Uint8Array(eb), Ib = Ob.compressToBuffer(gb)) : (eb = Buffer.alloc(Ub), Ib = Ob.compressToBuffer(eb)), !eb.slice) {
        var tb = new Uint8Array(Array.prototype.slice.call(eb, 0, Ib));
        if (wb) return tb;
        if (Mb) return tb.buffer;
        throw new Error("Not implemented")
      }
      return eb.slice(0, Ib)
    }
  },
  41149: (bb, wb) => {
    var Mb = new Array(15);

    function eb(bb, wb) {
      return 506832829 * bb >>> wb
    }

    function Hb(bb, wb) {
      return bb[wb] + (bb[wb + 1] << 8) + (bb[wb + 2] << 16) + (bb[wb + 3] << 24)
    }

    function pb(bb, wb, Mb) {
      return bb[wb] === bb[Mb] && bb[wb + 1] === bb[Mb + 1] && bb[wb + 2] === bb[Mb + 2] && bb[wb + 3] === bb[Mb + 3]
    }

    function Vb(bb, wb, Mb, eb, Hb) {
      return Mb <= 60 ? (eb[Hb] = Mb - 1 << 2, Hb += 1) : Mb < 256 ? (eb[Hb] = 240, eb[Hb + 1] = Mb - 1, Hb += 2) : (eb[Hb] = 244, eb[Hb + 1] = Mb - 1 & 255, eb[Hb + 2] = Mb - 1 >>> 8, Hb += 3),
        function(bb, wb, Mb, eb, Hb) {
          var pb;
          for (pb = 0; pb < Hb; pb++) Mb[eb + pb] = bb[wb + pb]
        }(bb, wb, eb, Hb, Mb), Hb + Mb
    }

    function gb(bb, wb, Mb, eb) {
      return eb < 12 && Mb < 2048 ? (bb[wb] = 1 + (eb - 4 << 2) + (Mb >>> 8 << 5), bb[wb + 1] = 255 & Mb, wb + 2) : (bb[wb] = 2 + (eb - 1 << 2), bb[wb + 1] = 255 & Mb, bb[wb + 2] = Mb >>> 8, wb + 3)
    }

    function lb(bb, wb, Mb, eb) {
      for (; eb >= 68;) wb = gb(bb, wb, Mb, 64), eb -= 64;
      return eb > 64 && (wb = gb(bb, wb, Mb, 60), eb -= 60), gb(bb, wb, Mb, eb)
    }

    function Lb(bb, wb, gb, Lb, Ib) {
      for (var Ob = 1; 1 << Ob <= gb && Ob <= 14;) Ob += 1;
      var Ub = 32 - (Ob -= 1);
      "undefined" === typeof Mb[Ob] && (Mb[Ob] = new Uint16Array(1 << Ob));
      var tb, Cb = Mb[Ob];
      for (tb = 0; tb < Cb.length; tb++) Cb[tb] = 0;
      var Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb = wb + gb,
        rb = wb,
        Rb = wb,
        Db = !0;
      if (gb >= 15)
        for (Eb = Kb - 15, Bb = eb(Hb(bb, wb += 1), Ub); Db;) {
          hb = 32, sb = wb;
          do {
            if (Fb = Bb, zb = hb >>> 5, hb += 1, sb = (wb = sb) + zb, wb > Eb) {
              Db = !1;
              break
            }
            Bb = eb(Hb(bb, sb), Ub), mb = rb + Cb[Fb], Cb[Fb] = wb - rb
          } while (!pb(bb, wb, mb));
          if (!Db) break;
          Ib = Vb(bb, Rb, wb - Rb, Lb, Ib);
          do {
            for (Xb = wb, xb = 4; wb + xb < Kb && bb[wb + xb] === bb[mb + xb];) xb += 1;
            if (wb += xb, Ib = lb(Lb, Ib, Xb - mb, xb), Rb = wb, wb >= Eb) {
              Db = !1;
              break
            }
            Cb[eb(Hb(bb, wb - 1), Ub)] = wb - 1 - rb, mb = rb + Cb[jb = eb(Hb(bb, wb), Ub)], Cb[jb] = wb - rb
          } while (pb(bb, wb, mb));
          if (!Db) break;
          Bb = eb(Hb(bb, wb += 1), Ub)
        }
      return Rb < Kb && (Ib = Vb(bb, Rb, Kb - Rb, Lb, Ib)), Ib
    }

    function Ib(bb) {
      this.array = bb
    }
    Ib.prototype.maxCompressedLength = function() {
      var bb = this.array.length;
      return 32 + bb + Math.floor(bb / 6)
    }, Ib.prototype.compressToBuffer = function(bb) {
      var wb, Mb = this.array,
        eb = Mb.length,
        Hb = 0,
        pb = 0;
      for (pb = function(bb, wb, Mb) {
          do {
            wb[Mb] = 127 & bb, (bb >>>= 7) > 0 && (wb[Mb] += 128), Mb += 1
          } while (bb > 0);
          return Mb
        }(eb, bb, pb); Hb < eb;) pb = Lb(Mb, Hb, wb = Math.min(eb - Hb, 65536), bb, pb), Hb += wb;
      return pb
    }, wb.d = Ib
  },
  41147: (bb, wb) => {
    var Mb = [0, 255, 65535, 16777215, 4294967295];

    function eb(bb, wb, Mb, eb, Hb) {
      var pb;
      for (pb = 0; pb < Hb; pb++) Mb[eb + pb] = bb[wb + pb]
    }

    function Hb(bb, wb, Mb, eb) {
      var Hb;
      for (Hb = 0; Hb < eb; Hb++) bb[wb + Hb] = bb[wb - Mb + Hb]
    }

    function pb(bb) {
      this.array = bb, this.pos = 0
    }
    pb.prototype.readUncompressedLength = function() {
      for (var bb, wb, Mb = 0, eb = 0; eb < 32 && this.pos < this.array.length;) {
        if (bb = this.array[this.pos], this.pos += 1, (wb = 127 & bb) << eb >>> eb !== wb) return -1;
        if (Mb |= wb << eb, bb < 128) return Mb;
        eb += 7
      }
      return -1
    }, pb.prototype.uncompressToBuffer = function(bb) {
      for (var wb, pb, Vb, gb, lb = this.array, Lb = lb.length, Ib = this.pos, Ob = 0; Ib < lb.length;)
        if (wb = lb[Ib], Ib += 1, 0 === (3 & wb)) {
          if ((pb = 1 + (wb >>> 2)) > 60) {
            if (Ib + 3 >= Lb) return !1;
            Vb = pb - 60, pb = 1 + ((pb = lb[Ib] + (lb[Ib + 1] << 8) + (lb[Ib + 2] << 16) + (lb[Ib + 3] << 24)) & Mb[Vb]), Ib += Vb
          }
          if (Ib + pb > Lb) return !1;
          eb(lb, Ib, bb, Ob, pb), Ib += pb, Ob += pb
        } else {
          switch (3 & wb) {
            case 1:
              pb = 4 + (wb >>> 2 & 7), gb = lb[Ib] + (wb >>> 5 << 8), Ib += 1;
              break;
            case 2:
              if (Ib + 1 >= Lb) return !1;
              pb = 1 + (wb >>> 2), gb = lb[Ib] + (lb[Ib + 1] << 8), Ib += 2;
              break;
            case 3:
              if (Ib + 3 >= Lb) return !1;
              pb = 1 + (wb >>> 2), gb = lb[Ib] + (lb[Ib + 1] << 8) + (lb[Ib + 2] << 16) + (lb[Ib + 3] << 24), Ib += 4
          }
          if (0 === gb || gb > Ob) return !1;
          Hb(bb, Ob, gb, pb), Ob += pb
        } return !0
    }, wb.b = pb
  },
  41125: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      SessionReplayRecorder: () => HM
    });
    const eb = {
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
      Hb = {
        ...eb,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        captureBudgetMsPerSecond: 60,
        skipLowMemoryDevices: !0
      },
      pb = {
        desktop: eb,
        mobile: Hb,
        tablet: Hb
      };
    var Vb = Mb(4015),
      gb = Mb(29);
    const lb = 4194304,
      Lb = 16777216;
    var Ib = Mb(4781);
    const Ob = [2, 4, 9, 3],
      Ub = Ib.f,
      tb = [Ub.MouseInteraction, Ub.MouseMove, Ub.TouchMove],
      Cb = [Ub.MouseMove, Ub.MouseInteraction, Ub.Scroll, Ub.ViewportResize, Ub.Input, Ub.TouchMove, Ub.MediaInteraction, Ub.Drag],
      Eb = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function Fb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return !1;
      const wb = bb.timestamp;
      return "number" === typeof wb && wb > 0 && wb <= 864e13
    }

    function Bb(bb) {
      var wb;
      return bb.type === Ib.c.IncrementalSnapshot ? null === (wb = bb.data) || void 0 === wb ? void 0 : wb.source : void 0
    }
    class sb {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(bb) {
        this.eventCount++;
        const wb = Bb(bb);
        this.timestamps.push(bb.timestamp), this.active.push(function(bb) {
          var wb;
          return Cb.includes(Bb(bb)) || bb.type === Ib.c.Custom && (null === (wb = bb.data) || void 0 === wb ? void 0 : wb.tag) === Ib.j.active
        }(bb));
        const Mb = function(bb) {
          var wb;
          const Mb = bb.data;
          if (bb.type === Ib.c.Custom && "$json_ld" === (null === Mb || void 0 === Mb ? void 0 : Mb.tag)) return;
          const eb = "string" === typeof(null === Mb || void 0 === Mb ? void 0 : Mb.href) ? Mb.href.trim() : void 0,
            Hb = "string" === typeof(null === Mb || void 0 === Mb || null === (wb = Mb.payload) || void 0 === wb ? void 0 : wb.href) ? Mb.payload.href.trim() : void 0;
          return eb || Hb || void 0
        }(bb);
        Mb && this.addUrl(Mb), wb === Ub.MouseInteraction && Ob.includes(bb.data.type) && this.clickCount++, wb === Ub.Input && this.keypressCount++, tb.includes(wb) && this.mouseActivityCount++;
        const eb = bb.data;
        if (bb.type === Ib.c.Plugin && "rrweb/console@1" === (null === eb || void 0 === eb ? void 0 : eb.plugin)) {
          var Hb;
          const bb = Eb.get(null === (Hb = eb.payload) || void 0 === Hb ? void 0 : Hb.level);
          "warn" === bb ? this.consoleWarnCount++ : "error" === bb ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(bb) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: bb,
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
      addUrl(bb) {
        const wb = bb.slice(0, 4096);
        this.firstUrl ??= wb, this.urls.size < 25 && !this.urls.has(wb) && this.urlsLength + wb.length <= 8192 && (this.urls.add(wb), this.urlsLength += wb.length)
      }
      activeMs() {
        var bb;
        const wb = this.timestamps.map(((bb, wb) => wb)).sort(((bb, wb) => this.timestamps[bb] - this.timestamps[wb]));
        let Mb = 0,
          eb = null,
          Hb = 0;
        for (const Vb of wb) {
          const bb = this.timestamps[Vb],
            wb = this.active[Vb],
            gb = !eb || wb && !eb.isActive || eb.isActive && Hb + 5e3 < bb;
          var pb;
          if (Hb = wb ? bb : Hb, gb) null !== (pb = eb) && void 0 !== pb && pb.isActive && (Mb += Math.max(1, eb.end - eb.start)), eb = {
            start: bb,
            end: bb,
            isActive: wb
          };
          else eb.end = bb
        }
        return null !== (bb = eb) && void 0 !== bb && bb.isActive && (Mb += Math.max(1, eb.end - eb.start)), Math.floor(Mb)
      }
    }
    const mb = 5592405.333333333;
    class hb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = bb, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new sb, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get IO() {
        return 0 === this.lines.length
      }
      get tooBigForExit() {
        return this.holdsSnapshot || this.chars >= 262144
      }
      add(bb) {
        const wb = bb.events.filter(Fb),
          Mb = wb.map((wb => JSON.stringify([bb.windowId, wb]) + "\n"));
        if (0 === Mb.length) return [];
        const eb = [],
          Hb = Mb.reduce(((bb, wb) => bb + wb.length), 0);
        !this.IO && this.chars + Hb > this.chunkChars && eb.push(this.finish());
        let pb = !1;
        return wb.forEach(((bb, wb) => {
          const Hb = Mb[wb];
          !this.IO && this.chars + Hb.length > this.chunkChars && (eb.push(this.finish()), pb = !1), pb || (this.counter.addMessage(), pb = !0), this.counter.addEvent(bb), this.lines.push(Hb), this.chars += Hb.length, this.startMs = Math.min(this.startMs, bb.timestamp), this.endMs = Math.max(this.endMs, bb.timestamp), this.holdsSnapshot ||= bb.type === Ib.c.FullSnapshot || bb.type === Ib.c.Meta
        })), eb.filter((bb => null !== bb))
      }
      finish() {
        if (this.IO) return null;
        const {
          startMs: bb,
          endMs: wb,
          counter: Mb,
          holdsSnapshot: eb,
          chunkIndex: Hb,
          tailedChars: pb
        } = this, Vb = {
          text: this.lines.join(""),
          startMs: bb,
          endMs: wb,
          counter: Mb,
          holdsSnapshot: eb,
          chunkIndex: Hb,
          tailedChars: pb
        };
        return this.reset(), Vb
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > mb) return null;
        const bb = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, bb
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new sb, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function zb(bb) {
      let {
        text: wb
      } = bb;
      return wb.length <= mb
    }

    function Xb(bb) {
      const {
        text: wb,
        startMs: Mb,
        endMs: eb,
        counter: Hb,
        chunkIndex: pb,
        tailedChars: Vb
      } = bb;
      return Vb !== wb.length && zb(bb) ? {
        chunkIndex: pb,
        fromChar: Vb,
        text: wb.slice(Vb),
        startMs: Mb,
        endMs: eb,
        summary: Hb.finish(0)
      } : null
    }

    function xb(bb, wb) {
      let {
        startMs: Mb,
        endMs: eb,
        counter: Hb,
        holdsSnapshot: pb
      } = bb, {
        bytes: Vb,
        inflatedBytes: gb
      } = wb;
      return Vb.byteLength > lb || gb > Lb ? (console.warn(`Session replay: dropped a ${gb}-byte page recording chunk, over the size limits`), null) : {
        bytes: Vb,
        startMs: Mb,
        endMs: eb,
        summary: Hb.finish(gb),
        holdsSnapshot: pb
      }
    }
    var jb = Mb(41129);
    class Kb {
      constructor(bb, wb, Mb, eb) {
        this.uploader = bb, this.timing = wb, this.journal = Mb, this.packer = eb, this.writer = new hb, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(bb) {
        this.pack(this.writer.add(bb)), (this.cutNext || this.timing.cutsEachBatch() || this.writer.tooBigForExit) && (this.cutNext = !1, this.cut());
        const wb = this.journal;
        null === wb || null !== this.tailTimer || this.writer.IO || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const bb = this.writer.takeTail();
          null !== bb && wb.domTail(bb)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const bb = this.writer.finish();
        this.pack(null === bb ? [] : [bb])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.IO) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const bb = this.packing[this.packing.length - 1];
        return void 0 !== bb ? new Promise((wb => {
          const Mb = bb.onQueued;
          bb.onQueued = () => {
            null === Mb || void 0 === Mb || Mb(), wb()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(bb) {
        const wb = bb.filter((bb => {
            const wb = function(bb) {
              let {
                text: wb
              } = bb;
              return wb.length <= Lb || (console.warn(`Session replay: dropped a page recording chunk of ${wb.length} characters, over the size limits`), !1)
            }(bb);
            var Mb;
            wb || (null === (Mb = this.journal) || void 0 === Mb || Mb.domTailDropped(bb.chunkIndex));
            return wb
          })),
          Mb = this.journalWorks() && wb.every((bb => zb(bb))) && this.packing.every((bb => bb.journalled));
        if (this.timing.packsNow(Mb)) {
          for (const bb of wb) this.packing.push({
            text: bb,
            packed: null,
            journalled: this.tailHolds(bb)
          });
          for (const bb of [...this.packing]) this.packHere(bb);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const eb of wb) {
          const bb = null === this.journal ? null : Xb(eb);
          null !== bb && this.journal.domTail(bb);
          const wb = {
            text: eb,
            packed: null,
            journalled: this.tailHolds(eb)
          };
          this.packing.push(wb), this.packer.pack(eb.text).then((bb => {
            wb.packed = bb, this.queuePacked()
          }), (() => {
            this.packHere(wb), this.queuePacked()
          }))
        }
      }
      packHere(bb) {
        const wb = this.packing.indexOf(bb);
        if (!(wb < 0)) try {
          bb.packed ??= (0, jb.e)(bb.text.text)
        } catch (Hb) {
          var Mb, eb;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", Hb), this.packing.splice(wb, 1), null === (Mb = this.journal) || void 0 === Mb || Mb.domTailDropped(bb.text.chunkIndex), null === (eb = bb.onQueued) || void 0 === eb || eb.call(bb)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(bb) {
        return this.journalWorks() && zb(bb)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: bb,
            packed: wb,
            onQueued: Mb
          } = this.packing.shift();
          this.enqueue(bb.chunkIndex, xb(bb, wb)), null === Mb || void 0 === Mb || Mb()
        }
      }
      enqueue(bb, wb) {
        var Mb;
        if (null === wb) return void(null === (Mb = this.journal) || void 0 === Mb || Mb.domTailDropped(bb));
        const {
          startMs: eb,
          endMs: Hb,
          summary: pb,
          holdsSnapshot: Vb
        } = wb, gb = wb.bytes.buffer, lb = {
          startMs: eb,
          endMs: Hb,
          byteLength: gb.byteLength,
          summary: pb
        }, Lb = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: gb,
          meta: {
            type: "dom",
            chunk: lb
          },
          dropLast: Vb
        });
        var Ib, Ob;
        null === Lb ? null === (Ib = this.journal) || void 0 === Ib || Ib.domTailDropped(bb) : null === (Ob = this.journal) || void 0 === Ob || Ob.domQueued(Lb, gb, lb, bb)
      }
    }
    var rb = Mb(41152);
    var Rb = Mb(41155),
      Db = Mb(4260),
      cb = Mb(110),
      Yb = Mb(122),
      Zb = Mb(43),
      fb = Mb(5524);
    const Ab = {
      logStats: !1
    };

    function Wb(bb) {
      const wb = Zb.i.getItem(bb);
      return "number" === typeof wb && Number.isFinite(wb) ? wb : null
    }

    function Jb(bb, wb, Mb, eb) {
      const Hb = Zb.i.getItem(bb);
      return Hb === wb ? [(0, cb.getOperatingSystem)()] : Hb === Mb ? [] : eb
    }

    function Sb(bb) {
      const wb = Zb.i.getItem("replayGrab");
      return "stream" === wb ? [(0, Db.c)()] : "videoFrame" === wb || "bitmap" === wb ? [] : bb
    }
    const Nb = "/v1/release",
      vb = lb;
    var Qb = Mb(1280),
      Gb = Mb(41161),
      qb = Mb(41169),
      ab = Mb(41172);

    function ib(bb) {
      return `replayJoiner/${bb}`
    }
    class ub {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Gb.c;
        this.baseUrl = bb, this.keepalive = wb
      }
      postPart(bb, wb) {
        const Mb = (0, qb.f)(bb, wb),
          eb = 15e3 + (Hb = Mb.size, Math.ceil(Hb / 16384 * 1e3));
        var Hb;
        return this.post("/v1/part", Mb, Mb.size, eb, bb.sequence)
      }
      finish(bb) {
        const wb = JSON.stringify(bb);
        return this.post("/v1/finish", wb, (0, Gb.g)(wb), 3e4, bb.sequence)
      }
      release(bb) {
        return !this.keepalive.isInFlight(ib(bb.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${Nb}`, JSON.stringify(bb))
      }
      async post(bb, wb, Mb, eb, Hb) {
        const pb = `${this.baseUrl}${bb}`,
          Vb = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: wb,
            signal: (0, Qb.t)(eb)
          },
          gb = Mb <= Gb.b ? await this.keepalive.fetch(pb, Vb, Mb, ib(Hb)) : await fetch(pb, Vb);
        if (!gb.ok) throw new ab.e(`Part joiner ${bb} failed with ${gb.status}`, gb.status);
        return await gb.json()
      }
    }

    function db(bb) {
      return {
        releaseUrl: `${bb.url}${Nb}`,
        token: bb.token,
        relay: {
          url: `${bb.url}/v1/relay`,
          maxBytes: vb
        }
      }
    }
    var Pb = Mb(7682),
      nb = Mb(41179),
      yb = Mb(41181),
      ob = Mb(41189);

    function Tb() {
      return (0, Rb.c)().manifestUrl
    }
    const kb = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class bw {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = wb, this.sendEnabled = Mb, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...kb,
          ...eb
        };
        const Hb = Math.round((0, nb.e)());
        this.manifest = {
          recordingId: bb,
          startedAtMs: Hb,
          endedAtMs: Hb,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(bb, wb, Mb) {
        const eb = {
            sequence: bb,
            ...wb,
            startMs: Math.round(wb.startMs),
            endMs: Math.round(wb.endMs),
            ...null === Mb ? {} : {
              parts: Mb
            }
          },
          Hb = this.manifest.videoSegments.findIndex((wb => wb.sequence === bb)); - 1 === Hb ? this.manifest.videoSegments.push(eb) : this.manifest.videoSegments[Hb] = eb, this.sendSoon()
      }
      setStill(bb, wb) {
        var Mb, eb;
        bb > (null !== (Mb = null === (eb = this.manifest.still) || void 0 === eb ? void 0 : eb.atMs) && void 0 !== Mb ? Mb : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(bb),
          sequence: wb
        }, this.sendSoon())
      }
      addTelemetrySegment(bb, wb, Mb) {
        this.manifest.telemetrySegments.push({
          sequence: bb,
          startMs: Math.round(wb),
          endMs: Math.round(Mb)
        }), this.sendSoon()
      }
      addDomSegment(bb) {
        this.pendingDom.add(bb), this.sendSoon()
      }
      addCreatorGrant(bb, wb) {
        this.creatorGrants.set(bb, wb)
      }
      gameJoined(bb) {
        this.gameLeft(), this.manifest.games.push({
          ...bb,
          joinedAtMs: Math.round((0, nb.e)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(bb) {
        const wb = this.manifest.games.at(-1);
        return !(!wb || (null === bb ? null !== wb.leftAtMs : wb.gameNameWithVariation !== bb)) && (wb.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(bb) {
        const wb = this.manifest.games.at(-1);
        wb && null === wb.leftAtMs && (wb[bb] = !0)
      }
      updateCurrentStay(bb) {
        var wb, Mb, eb;
        const Hb = this.manifest.games.at(-1);
        if (!Hb || null !== Hb.leftAtMs) return !1;
        const pb = (0, Pb.l)(Hb.furthestStep, bb.furthestStep),
          Vb = Math.max(null !== (wb = Hb.unboundKeyPresses) && void 0 !== wb ? wb : 0, null !== (Mb = bb.unboundKeyPresses) && void 0 !== Mb ? Mb : 0);
        return (pb !== Hb.furthestStep || Vb !== (null !== (eb = Hb.unboundKeyPresses) && void 0 !== eb ? eb : 0)) && (void 0 !== pb && (Hb.furthestStep = pb), Vb > 0 && (Hb.unboundKeyPresses = Vb), !0)
      }
      gameLeft() {
        const bb = this.manifest.games.at(-1);
        bb && null === bb.leftAtMs && (bb.leftAtMs = Math.round((0, nb.e)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(bb) {
        this.schedule(1e3, bb)
      }
      send() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var wb;
        if (this.sending) return void(this.queuedSend = ww(null !== (wb = this.queuedSend) && void 0 !== wb ? wb : [], bb));
        const Mb = this.prepareSend(bb);
        null !== Mb && (this.sending = !0, this.postInTurn(Mb).then((bb => {
          this.sending = !1, this.retries = "retryLater" === bb ? this.retries + 1 : 0;
          const wb = this.queuedSend;
          null !== wb ? (this.queuedSend = null, this.send(wb)) : "retryLater" === bb && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: Mb
          }
          of null !== (wb = this.prepareSend(bb)) && void 0 !== wb ? wb : []) {
          var wb;
          Gb.c.sendBeacon(Tb(), JSON.stringify(Mb)) || (0, yb.b)(Tb(), Mb)
        }
      }
      async postInTurn(bb) {
        for (const {
            request: wb,
            items: Mb
          }
          of bb) {
          const bb = await (0, yb.b)(Tb(), wb);
          if ("retryLater" === bb) return bb;
          for (const wb of Mb) wb.ack("uploaded" === bb);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(bb, wb) {
        const Mb = Date.now() + bb;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= Mb) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const eb = setTimeout((() => {
          this.send(wb())
        }), bb);
        this.sendTimer = {
          timer: eb,
          dueMs: Mb
        }
      }
      prepareSend(bb) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, nb.e)());
        const wb = this.pendingItems(bb);
        this.options.onSend({
          ...this.manifest,
          games: wb.flatMap((bb => "games" === bb.list ? [bb.value] : []))
        });
        const {
          recordingId: Mb,
          startedAtMs: eb,
          endedAtMs: Hb,
          still: pb
        } = this.manifest, Vb = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: Mb,
            startedAtMs: eb,
            endedAtMs: Hb,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === pb ? {} : {
              still: pb
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, ob.d)(Vb, wb)
      }
      pendingItems(bb) {
        const wb = [];
        for (const eb of this.creatorGrants.values()) this.ackedGrants.has(eb) || wb.push({
          list: "creatorGrants",
          value: eb,
          ack: () => {
            this.ackedGrants.add(eb)
          }
        });
        for (const eb of this.manifest.games) {
          const bb = JSON.stringify(eb);
          this.ackedGames.get(eb) !== bb && wb.push({
            list: "games",
            value: {
              ...eb
            },
            ack: () => {
              this.ackedGames.set(eb, bb)
            }
          })
        }
        for (const eb of this.manifest.videoSegments) this.ackedVideo.get(eb.sequence) !== eb && wb.push({
          list: "videoSegments",
          value: eb,
          ack: bb => {
            this.ackedVideo.set(eb.sequence, eb), bb && this.options.onListed({
              list: "videoSegments",
              value: eb
            })
          }
        });
        const Mb = new Set;
        for (const eb of this.manifest.telemetrySegments) Mb.add(eb.sequence), this.ackedTelemetry.has(eb) || wb.push({
          list: "telemetrySegments",
          value: eb,
          ack: bb => {
            this.ackedTelemetry.add(eb), bb && this.options.onListed({
              list: "telemetrySegments",
              value: eb
            })
          }
        });
        for (const eb of this.pendingDom) wb.push({
          list: "domSegments",
          value: eb,
          ack: bb => {
            this.pendingDom.delete(eb), bb && this.options.onListed({
              list: "domSegments",
              value: eb
            })
          }
        });
        for (const eb of ww([], bb)) Mb.has(eb.sequence) || wb.push({
          list: "telemetrySegments",
          value: eb,
          ack: () => {}
        });
        return wb
      }
    }

    function ww(bb, wb) {
      const Mb = [...bb];
      for (const eb of wb) Mb.some((bb => bb.sequence === eb.sequence)) || Mb.push({
        sequence: eb.sequence,
        startMs: Math.round(eb.startMs),
        endMs: Math.round(eb.endMs)
      });
      return Mb
    }
    var Mw = Mb(41157),
      ew = Mb(5541);

    function Hw(bb) {
      return {
        ...bb,
        videoSegments: [],
        telemetrySegments: [],
        games: bb.games.map((bb => ({
          ...bb
        })))
      }
    }
    class pw {
      constructor(bb, wb, Mb, eb) {
        var Hb;
        this.journal = bb, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: wb.recordingId,
          uploadToken: wb.uploadToken,
          expiresAtMs: wb.expiresAtMs,
          nextVideoSequence: 0,
          manifest: Hw(Mb),
          endpoints: eb,
          lateUploadUntilMs: wb.expiresAtMs + Mw.d,
          ...void 0 === wb.partJoiner ? {} : {
            partJoiner: db(wb.partJoiner)
          }
        }, null === (Hb = navigator.locks) || void 0 === Hb || Hb.request((0, ew.u)(wb.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(bb) {
        this.record.manifest = Hw(bb), this.putRecording()
      }
      videoQueued(bb, wb) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, wb + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), bb, wb)
      }
      videoPartLanded(bb, wb, Mb) {
        this.landedVideo.set(bb, {
          segmentId: bb,
          ...wb
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: bb,
          ...wb
        }, Mb)
      }
      telemetryQueued(bb, wb, Mb, eb) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: bb,
          startMs: Mb,
          endMs: eb,
          bytes: wb
        })
      }
      videoUploaded(bb) {
        this.journal.removeVideoChunks(this.record.recordingId, bb)
      }
      videoSettled(bb) {
        this.landedVideo.delete(bb), this.journal.removeVideo(this.record.recordingId, bb)
      }
      telemetryLanded(bb, wb, Mb, eb) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: bb,
          startMs: Mb,
          endMs: eb,
          bytes: wb,
          landed: !0
        })
      }
      telemetrySettled(bb) {
        this.journal.removeTelemetry(this.record.recordingId, bb)
      }
      domQueued(bb, wb, Mb, eb) {
        var Hb;
        this.record.nextDomSequence = Math.max(null !== (Hb = this.record.nextDomSequence) && void 0 !== Hb ? Hb : 0, bb + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: bb,
          chunk: Mb,
          bytes: wb
        }, eb)
      }
      domTail(bb) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...bb
        })
      }
      domTailDropped(bb) {
        this.journal.removeDomTail(this.record.recordingId, bb)
      }
      domLanded(bb, wb) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: bb,
          chunk: wb,
          bytes: null
        })
      }
      domSettled(bb) {
        this.journal.removeDom(this.record.recordingId, bb)
      }
      setMarker() {
        Zb.i.setItem(ew.j, !0)
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
    class Vw {
      constructor(bb) {
        this.deps = bb, this.pageHiding = !1, this.exitFlushedAtMs = -1 / 0
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(bb) {
        document.addEventListener("visibilitychange", (() => {
          const bb = document.hidden;
          this.deps.writeEvent(bb ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: bb
          }), bb ? (this.flushTelemetryOnExit(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording()) : this.exitFlushedAtMs = -1 / 0
        }), {
          signal: bb
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: bb
        }), window.addEventListener("pagehide", (bb => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.flushTelemetryOnExit(), this.deps.stills.beacon(), this.sendManifest(), bb.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: bb
        })
      }
      flushTelemetryOnExit() {
        const bb = performance.now();
        bb - this.exitFlushedAtMs > 1e3 && (this.deps.flushTelemetry(), this.exitFlushedAtMs = bb)
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((bb => {
          let {
            sequence: wb,
            meta: Mb
          } = bb;
          return "telemetry" === Mb.type ? [{
            sequence: wb,
            startMs: Mb.startMs,
            endMs: Mb.endMs
          }] : []
        }))
      }
    }
    var gw = Mb(37394),
      lw = Mb.n(gw);

    function Lw() {
      return lw()('/*! For license information please see sessionReplayVideo.worker.e7971ac7.worker.js.LICENSE.txt */\n(()=>{var bb={5:()=>{}},wb={};function Mb(eb){var Hb=wb[eb];if(void 0!==Hb)return Hb.exports;var pb=wb[eb]={exports:{}};return bb[eb](pb,pb.exports,Mb),pb.exports}(()=>{var bb,wb=Object.getPrototypeOf?bb=>Object.getPrototypeOf(bb):bb=>bb.__proto__;Mb.t=function(eb,Hb){if(1&Hb&&(eb=this(eb)),8&Hb)return eb;if("object"===typeof eb&&eb){if(4&Hb&&eb.__esModule)return eb;if(16&Hb&&"function"===typeof eb.then)return eb}var pb=Object.create(null);Mb.r(pb);var Vb={};bb=bb||[null,wb({}),wb([]),wb(wb)];for(var gb=2&Hb&&eb;"object"==typeof gb&&!~bb.indexOf(gb);gb=wb(gb))Object.getOwnPropertyNames(gb).forEach((bb=>Vb[bb]=()=>eb[bb]));return Vb.default=()=>eb,Mb.d(pb,Vb),pb}})(),Mb.d=(bb,wb)=>{for(var eb in wb)Mb.o(wb,eb)&&!Mb.o(bb,eb)&&Object.defineProperty(bb,eb,{enumerable:!0,get:wb[eb]})},Mb.o=(bb,wb)=>Object.prototype.hasOwnProperty.call(bb,wb),Mb.r=bb=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(bb,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(bb,"__esModule",{value:!0})};const eb="bloxdSessionReplayTails";const Hb=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function pb(bb){return new Promise(((wb,Mb)=>{bb.onsuccess=()=>{wb(bb.result)},bb.onerror=()=>{Mb(bb.error)}}))}function Vb(bb){return new Promise(((wb,Mb)=>{bb.oncomplete=()=>{wb()},bb.onerror=()=>{Mb(bb.error)},bb.onabort=()=>{var wb;Mb(null!==(wb=bb.error)&&void 0!==wb?wb:new Error("IndexedDB transaction aborted"))}}))}function gb(bb){return IDBKeyRange.bound([bb],[bb,[]])}function lb(bb,wb){return IDBKeyRange.bound([bb,wb],[bb,wb,[]])}class Lb{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(bb){this.write(["recordings"],(wb=>{wb.objectStore("recordings").put(bb)}))}putVideoSequence(bb,wb,Mb){this.write(["recordings","videoSequences"],(eb=>{eb.objectStore("recordings").put(bb),eb.objectStore("videoSequences").put({recordingId:bb.recordingId,segmentId:wb,sequence:Mb})}))}appendVideo(bb,wb){this.write(["videoHeaders","videoChunks"],(Mb=>{Mb.objectStore("videoHeaders").put(bb);const eb=Mb.objectStore("videoChunks");for(const bb of wb)eb.put(bb)}))}putVideoProgress(bb,wb){this.write(["videoProgress","videoChunks"],(Mb=>{if(Mb.objectStore("videoProgress").put(bb),wb>0){const{recordingId:eb,segmentId:Hb}=bb;Mb.objectStore("videoChunks").delete(IDBKeyRange.bound([eb,Hb,0],[eb,Hb,wb],!1,!0))}}))}removeVideoChunks(bb,wb){this.write(["videoChunks"],(Mb=>{Mb.objectStore("videoChunks").delete(lb(bb,wb))}))}removeVideo(bb,wb){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(Mb=>{Mb.objectStore("videoHeaders").delete([bb,wb]),Mb.objectStore("videoChunks").delete(lb(bb,wb)),Mb.objectStore("videoSequences").delete([bb,wb]),Mb.objectStore("videoProgress").delete([bb,wb])}))}putTelemetry(bb){this.write(["telemetry"],(wb=>{wb.objectStore("telemetry").put(bb)}))}removeTelemetry(bb,wb){this.write(["telemetry"],(Mb=>{Mb.objectStore("telemetry").delete([bb,wb])}))}putDom(bb){this.write(["dom"],(wb=>{wb.objectStore("dom").put(bb)}))}queueDom(bb,wb,Mb){this.write(["recordings","dom","domTail"],(eb=>{eb.objectStore("recordings").put(bb),eb.objectStore("dom").put(wb),eb.objectStore("domTail").delete(lb(wb.recordingId,Mb))}),(eb=>{console.warn(`Session replay couldn\'t journal page recording chunk ${wb.sequence}; a closing tab may lose it.`,eb),this.write(["recordings","domTail"],(eb=>{eb.objectStore("recordings").put(bb),eb.objectStore("domTail").delete(lb(wb.recordingId,Mb))}))}))}putDomTail(bb){this.tailRecordings.add(bb.recordingId),this.write(["domTail"],(wb=>{wb.objectStore("domTail").put(bb)}))}removeDomTail(bb,wb){this.write(["domTail"],(Mb=>{Mb.objectStore("domTail").delete(lb(bb,wb))}))}removeDom(bb,wb){this.write(["dom"],(Mb=>{Mb.objectStore("dom").delete([bb,wb])}))}async listRecordings(){const bb=await this.open();return await pb(bb.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(bb){const wb=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),Mb=gb(bb.recordingId),eb=bb=>pb(wb.objectStore(bb).getAll(Mb)),[Hb,Vb,lb,Lb,Ib,Ob,Ub]=await Promise.all([eb("videoHeaders"),eb("videoChunks"),eb("videoSequences"),eb("videoProgress"),eb("telemetry"),eb("dom"),eb("domTail")]);return{recording:bb,telemetry:Ib,dom:Ob,domTails:Ub,video:Hb.map((bb=>{var wb,Mb,eb;return{header:bb,sequence:null!==(wb=null===(Mb=lb.find((wb=>wb.segmentId===bb.segmentId)))||void 0===Mb?void 0:Mb.sequence)&&void 0!==wb?wb:null,progress:null!==(eb=Lb.find((wb=>wb.segmentId===bb.segmentId)))&&void 0!==eb?eb:null,chunks:Vb.filter((wb=>wb.segmentId===bb.segmentId))}}))}}async deleteRecording(bb){const wb=(await this.open()).transaction([...Hb],"readwrite");wb.objectStore("recordings").delete(bb);for(const Mb of Hb.slice(1))wb.objectStore(Mb).delete(gb(bb));await Vb(wb)}async forgetSent(bb,wb){const Mb=(await this.open()).transaction([...Hb],"readwrite"),{recordingId:eb}=bb;Mb.objectStore("recordings").put(bb);for(const Hb of wb.videoSegmentIds)Mb.objectStore("videoHeaders").delete([eb,Hb]),Mb.objectStore("videoChunks").delete(lb(eb,Hb)),Mb.objectStore("videoSequences").delete([eb,Hb]),Mb.objectStore("videoProgress").delete([eb,Hb]);for(const Hb of wb.telemetrySequences)Mb.objectStore("telemetry").delete([eb,Hb]);for(const Hb of wb.domSequences)Mb.objectStore("dom").delete([eb,Hb]);for(const Hb of wb.domTailChunks)Mb.objectStore("domTail").delete(lb(eb,Hb));await Vb(Mb)}write(bb,wb){let Mb=arguments.length>2&&void 0!==arguments[2]?arguments[2]:bb=>{this.fail(bb)};if(this.failed)return;const eb=eb=>{try{var Hb;const pb=eb.transaction(bb,"readwrite");wb(pb),null===(Hb=pb.commit)||void 0===Hb||Hb.call(pb),Vb(pb).catch(Mb)}catch(pb){Mb(pb)}};null===this.db?this.open().then(eb,(bb=>{this.fail(bb)})):eb(this.db)}fail(bb){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",bb),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const bb=bb=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",bb)};try{const wb=this.db.transaction(["domTail"],"readwrite");for(const bb of this.tailRecordings)wb.objectStore("domTail").delete(gb(bb));Vb(wb).catch(bb)}catch(wb){bb(wb)}}open(){return this.opening??=new Promise(((bb,wb)=>{const Mb=indexedDB.open(eb,4);Mb.onupgradeneeded=bb=>{const wb=Mb.result;bb.oldVersion<1&&(wb.createObjectStore("recordings",{keyPath:"recordingId"}),wb.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),wb.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),wb.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),wb.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),bb.oldVersion<2&&wb.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),bb.oldVersion<3&&wb.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),wb.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let Hb=!1;Mb.onblocked=()=>{Hb=!0,wb(new Error("An older tab holds the upload journal at an earlier version"))},Mb.onsuccess=()=>{Hb?Mb.result.close():(this.db=Mb.result,this.db.onversionchange=()=>{var bb;this.dropTails(),null===(bb=this.db)||void 0===bb||bb.close(),this.db=null,this.opening=null},bb(Mb.result))},Mb.onerror=()=>{wb(Mb.error)}})),this.opening}}const Ib=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class Ob{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return Ib[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(bb){this.firstSampleMs??=bb.nowMs;const wb=null!==bb.pingMs&&bb.pingMs>300,Mb=bb.nowMs-this.firstSampleMs>=3e4;Mb&&(null!==bb.gameFps&&bb.gameFps<24||wb)?this.gameStrugglingSinceMs??=bb.nowMs:this.gameStrugglingSinceMs=null,Mb&&bb.encoderBackpressureDrops>0?this.backpressureSinceMs??=bb.nowMs:this.backpressureSinceMs=null;const eb=null!==this.backpressureSinceMs&&bb.nowMs-this.backpressureSinceMs>=3e3,Hb=eb||null!==this.gameStrugglingSinceMs&&bb.nowMs-this.gameStrugglingSinceMs>=1e4,pb=this.steppedDownForGameFps?45:24,Vb=0===bb.encoderBackpressureDrops&&!wb&&(null===bb.gameFps||bb.gameFps>=pb);return Hb?(this.healthySinceMs=null,this.level<Ib.length-1&&bb.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=bb.nowMs,this.lastChangeReason=eb?"encoderBackpressure":wb?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):Vb&&0!==this.level?(this.healthySinceMs??=bb.nowMs,bb.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=bb.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function Ub(bb,wb){return bb.width===wb.width&&bb.height===wb.height}function tb(bb){return Math.max(2,2*Math.floor(bb/2))}function Cb(bb){return Math.ceil(bb.width/16)*Math.ceil(bb.height/16)}function Eb(bb,wb,Mb){const eb=bb.bitrate*Cb(wb)/bb.maxMacroblocks;return Mb*Math.min(bb.bitrate,Math.max(bb.minBitrate,eb/Mb))}class Fb{constructor(bb){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/bb}setMaxFps(bb){this.intervalMs=1e3/bb}shouldKeep(bb){return!(bb<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=bb-this.nextDueMs>this.intervalMs?bb+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const Bb=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],sb=["variable","constant"],mb=["realtime","quality"],hb=["quality","realtime"];class zb{constructor(){this.canvas=null,this.context=null}scale(bb,wb){if(bb.displayWidth===wb.width&&bb.displayHeight===wb.height)return bb;return this.contextFor(wb).drawImage(bb,0,0,wb.width,wb.height),new VideoFrame(this.canvas,{timestamp:bb.timestamp,alpha:"discard"})}contextFor(bb){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(bb.width,bb.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===bb.width&&this.canvas.height===bb.height||(this.canvas.width=bb.width,this.canvas.height=bb.height),this.context}}const Xb=[...[.7,.6,.5,.42,.35].map((bb=>({width:640,quality:bb}))),{width:480,quality:.35},{width:360,quality:.35}],xb=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class jb{constructor(bb,wb){this.steps=bb,this.targetBytes=wb,this.index=0}get step(){return this.steps[this.index]}record(bb){bb>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):bb<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class Kb{constructor(bb){this.post=bb,this.full=new jb(Xb,28e3),this.small=new jb(xb,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(bb,wb){if(!(this.failed||this.encoding||bb.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=bb.timestamp;try{const Mb=rb(bb,bb.displayWidth,bb.displayHeight,this.full.step.width),eb=rb(Mb,Mb.width,Mb.height,this.small.step.width);this.encoding=!0,this.encode(Mb,eb,wb).finally((()=>{this.encoding=!1}))}catch(Mb){this.fail(Mb)}}}async encode(bb,wb,Mb){try{const[eb,Hb]=await Promise.all([bb.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),wb.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(eb.size),this.small.record(Hb.size);const pb=await eb.arrayBuffer(),Vb=Hb.size<=8192?await Hb.arrayBuffer():null;this.post({type:"still",bytes:pb,small:Vb,atMs:Mb},null===Vb?[pb]:[pb,Vb])}catch(eb){this.fail(eb)}}fail(bb){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",bb)}}function rb(bb,wb,Mb,eb){const Hb=Math.min(eb,wb),pb=Math.max(1,Math.round(Mb*Hb/wb)),Vb=new OffscreenCanvas(Hb,pb),gb=Vb.getContext("2d");if(null===gb)throw new Error("no 2D context");return gb.drawImage(bb,0,0,Hb,pb),Vb}let Rb=Date.now()-performance.now();function Db(){const bb=performance.now(),wb=Date.now();return Math.abs(wb-(bb+Rb))>20&&(Rb=wb-bb),bb+Rb}function cb(bb){if(!bb)throw new Error("Assertion failed.")}const Yb=Math.PI/180,Zb=(Math.PI,[1,0,0,0,1,0,0,0,1]),fb=bb=>{const wb=bb*Yb,Mb=Math.round(Math.cos(wb)),eb=Math.round(Math.sin(wb));return[Mb,eb,0,-eb,Mb,0,0,0,1]},Ab=(bb,wb)=>[1,0,0,0,1,0,bb,wb,1],Wb=(bb,wb)=>{const Mb=new Array(9);for(let eb=0;eb<3;eb++)for(let Hb=0;Hb<3;Hb++)Mb[3*eb+Hb]=bb[3*eb]*wb[Hb]+bb[3*eb+1]*wb[3+Hb]+bb[3*eb+2]*wb[6+Hb];return Mb},Jb=bb=>bb&&bb[bb.length-1],Sb=bb=>bb>=0&&bb<2**32,Nb=bb=>{let wb=0;for(;0===bb.readBits(1)&&wb<32;)wb++;if(wb>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<wb)-1+bb.readBits(wb)},vb=bb=>{const wb=Nb(bb);return 0===(1&wb)?-(wb>>1):wb+1>>1},Qb=bb=>bb.constructor===Uint8Array?bb:ArrayBuffer.isView(bb)?new Uint8Array(bb.buffer,bb.byteOffset,bb.byteLength):new Uint8Array(bb),Gb=bb=>bb.constructor===DataView?bb:ArrayBuffer.isView(bb)?new DataView(bb.buffer,bb.byteOffset,bb.byteLength):new DataView(bb),qb="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const wb=new Uint8Array(3*bb.length);let Mb=0;for(let eb=0;eb<bb.length;eb++){let Hb=bb.charCodeAt(eb);if(Hb<128)wb[Mb++]=Hb;else if(Hb<2048)wb[Mb++]=192|Hb>>6,wb[Mb++]=128|63&Hb;else if(Hb<55296||Hb>57343)wb[Mb++]=224|Hb>>12,wb[Mb++]=128|Hb>>6&63,wb[Mb++]=128|63&Hb;else{const pb=eb+1<bb.length?bb.charCodeAt(eb+1):0;Hb<56320&&pb>=56320&&pb<=57343?(Hb=65536+(Hb-55296<<10)+(pb-56320),eb++,wb[Mb++]=240|Hb>>18,wb[Mb++]=128|Hb>>12&63,wb[Mb++]=128|Hb>>6&63,wb[Mb++]=128|63&Hb):(wb[Mb++]=239,wb[Mb++]=191,wb[Mb++]=189)}}return wb.slice(0,Mb)}},ab=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new qb),ib={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},ub={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},db={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Pb=bb=>!bb||null==bb.primaries&&null==bb.transfer&&null==bb.matrix&&null==bb.fullRange,nb=bb=>bb instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&bb instanceof SharedArrayBuffer||ArrayBuffer.isView(bb);class yb{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let bb;const wb=new Promise((wb=>{let Mb=!1;bb=()=>{Mb||(wb(),this.pending--,Mb=!0)}})),Mb=this.currentPromise;return this.currentPromise=wb,this.pending++,await Mb,bb}}const ob=()=>{let bb,wb;return{promise:new Promise(((Mb,eb)=>{bb=Mb,wb=eb})),resolve:bb,reject:wb}},Tb=bb=>{throw new Error(`Unexpected value: ${bb}`)},kb=(bb,wb,Mb,eb)=>{Mb>>>=0,Mb&=16777215,eb?(bb.setUint8(wb,255&Mb),bb.setUint8(wb+1,Mb>>>8&255),bb.setUint8(wb+2,Mb>>>16&255)):(bb.setUint8(wb,Mb>>>16&255),bb.setUint8(wb+1,Mb>>>8&255),bb.setUint8(wb+2,255&Mb))},bw="und",ww=bb=>{let wb=0;for(;0!==bb;)bb&=bb-1,wb++;return wb},Mw=/^[a-z]{3}$/,ew=1e6*(1+Number.EPSILON);const Hw=(async()=>{})().constructor,pw=bb=>bb instanceof Hw||bb instanceof Promise||"function"===typeof bb?.then,Vw=function*(bb){for(const wb in bb){const Mb=bb[wb];void 0!==Mb&&(yield{key:wb,value:Mb})}},gw=bb=>"number"===typeof bb&&!Number.isNaN(bb),lw=bb=>{cb(Number.isInteger(bb.num)),cb(Number.isInteger(bb.den)),cb(0!==bb.den);let wb=Math.abs(bb.num),Mb=Math.abs(bb.den);for(;0!==Mb;){const bb=wb%Mb;wb=Mb,Mb=bb}const eb=wb||1;return{num:bb.num/eb,den:bb.den/eb}};new Map,new Map;const Lw=bb=>Array.isArray(bb)?bb:[bb];class Iw{constructor(){this._listeners=new Map}on(bb,wb,Mb){this._listeners.has(bb)||this._listeners.set(bb,new Set);const eb={kI:wb,once:Mb?.once??!1};return this._listeners.get(bb).add(eb),()=>{this._listeners.get(bb)?.delete(eb)}}_emit(){for(var bb=arguments.length,wb=new Array(bb),Mb=0;Mb<bb;Mb++)wb[Mb]=arguments[Mb];const[eb,Hb]=wb,pb=this._listeners.get(eb);if(pb)for(const gb of pb){try{gb.kI(Hb)}catch(Vb){console.error(Vb)}gb.once&&pb.delete(gb)}}}const Ow=bb=>null!==bb&&"object"===typeof bb&&Object.getPrototypeOf(bb)===Object.prototype&&Object.values(bb).every((bb=>"string"===typeof bb));class Uw{constructor(bb,wb){if(this.data=bb,this.mimeType=wb,!(bb instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof wb)throw new TypeError("mimeType must be a string.")}}class tw{constructor(bb,wb,Mb,eb){if(this.data=bb,this.mimeType=wb,this.name=Mb,this.description=eb,!(bb instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==wb&&"string"!==typeof wb)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==Mb&&"string"!==typeof Mb)throw new TypeError("name, when provided, must be a string.");if(void 0!==eb&&"string"!==typeof eb)throw new TypeError("description, when provided, must be a string.")}}class Cw{constructor(bb){this.bytes=bb,this.pos=0}seekToByte(bb){this.pos=8*bb}readBit(){const bb=Math.floor(this.pos/8),wb=this.bytes[bb]??0,Mb=7-(7&this.pos),eb=(wb&1<<Mb)>>Mb;return this.pos++,eb}readBits(bb){if(1===bb)return this.readBit();let wb=0;for(let Mb=0;Mb<bb;Mb++)wb<<=1,wb|=this.readBit();return wb}writeBits(bb,wb){const Mb=this.pos+bb;for(let eb=this.pos;eb<Mb;eb++){const bb=Math.floor(eb/8);let Hb=this.bytes[bb];const pb=7-(7&eb);Hb&=~(1<<pb),Hb|=(wb&1<<Mb-eb-1)>>Mb-eb-1<<pb,this.bytes[bb]=Hb}this.pos=Mb}copyBits(bb,wb){let Mb=0;for(;Mb<bb-7;Mb+=8)this.writeBits(8,wb.readBits(8));const eb=bb-Mb;eb>0&&this.writeBits(eb,wb.readBits(eb))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const bb=this.pos/8,wb=this.bytes[bb]??0;return this.pos+=8,wb}skipBits(bb){this.pos+=bb}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const bb=new Cw(this.bytes);return bb.pos=this.pos,bb}}const Ew=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Fw=[-1,1,2,3,4,5,6,8],Bw=bb=>{const wb=5===bb.objectType||29===bb.objectType,Mb=29===bb.objectType,eb=wb?bb.outputSampleRate/2:bb.outputSampleRate,Hb=Mb?1:bb.outputNumberOfChannels,pb=Fw.indexOf(Hb);if(-1===pb)throw new TypeError(`Unsupported number of channels: ${bb.outputNumberOfChannels}`);let Vb=16;bb.objectType>=32&&(Vb+=6),15===hw(eb)&&(Vb+=24),wb&&(Vb+=9,15===hw(bb.outputSampleRate)&&(Vb+=24));const gb=Math.ceil(Vb/8),lb=new Uint8Array(gb),Lb=new Cw(lb);return sw(Lb,bb.objectType),mw(Lb,eb),Lb.writeBits(4,pb),wb&&(mw(Lb,bb.outputSampleRate),sw(Lb,2)),Lb.writeBits(3,0),lb},sw=(bb,wb)=>{wb<32?bb.writeBits(5,wb):(bb.writeBits(5,31),bb.writeBits(6,wb-32))},mw=(bb,wb)=>{const Mb=hw(wb);bb.writeBits(4,Mb),15===Mb&&bb.writeBits(24,wb)},hw=bb=>{const wb=Ew.indexOf(bb);return-1===wb?15:wb};var zw;!function(bb){bb[bb.Silent=0]="Silent",bb[bb.Errors=1]="Errors",bb[bb.Warnings=2]="Warnings",bb[bb.Info=3]="Info"}(zw||(zw={}));class Xw{constructor(){}static get level(){return Xw._level}static set level(bb){if(bb!==zw.Silent&&bb!==zw.Errors&&bb!==zw.Warnings&&bb!==zw.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");Xw._level=bb}static get _emitter(){return Xw._emitterInstance??=new Iw}static on(bb,wb,Mb){return Xw._emitter.on(bb,wb,Mb)}static _error(){for(var bb=arguments.length,wb=new Array(bb),Mb=0;Mb<bb;Mb++)wb[Mb]=arguments[Mb];Xw._emitter._emit("error",wb),Xw._level>=zw.Errors&&console.error(...wb)}static _warn(){for(var bb=arguments.length,wb=new Array(bb),Mb=0;Mb<bb;Mb++)wb[Mb]=arguments[Mb];Xw._emitter._emit("warn",wb),Xw._level>=zw.Warnings&&console.warn(...wb)}static _info(){for(var bb=arguments.length,wb=new Array(bb),Mb=0;Mb<bb;Mb++)wb[Mb]=arguments[Mb];Xw._emitter._emit("info",wb),Xw._level>=zw.Info&&console.info(...wb)}}Xw._level=zw.Info,Xw._emitterInstance=null;const xw=[48e3,44100,32e3],jw=[24e3,22050,16e3],Kw="Mediabunny v1.61.3";var rw,Rw;!function(bb){bb[bb.NON_IDR_SLICE=1]="NON_IDR_SLICE",bb[bb.SLICE_DPA=2]="SLICE_DPA",bb[bb.SLICE_DPB=3]="SLICE_DPB",bb[bb.SLICE_DPC=4]="SLICE_DPC",bb[bb.IDR=5]="IDR",bb[bb.SEI=6]="SEI",bb[bb.SPS=7]="SPS",bb[bb.PPS=8]="PPS",bb[bb.AUD=9]="AUD",bb[bb.SPS_EXT=13]="SPS_EXT"}(rw||(rw={})),function(bb){bb[bb.RASL_N=8]="RASL_N",bb[bb.RASL_R=9]="RASL_R",bb[bb.BLA_W_LP=16]="BLA_W_LP",bb[bb.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",bb[bb.VPS_NUT=32]="VPS_NUT",bb[bb.SPS_NUT=33]="SPS_NUT",bb[bb.PPS_NUT=34]="PPS_NUT",bb[bb.AUD_NUT=35]="AUD_NUT",bb[bb.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",bb[bb.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(Rw||(Rw={}));const Dw=function*(bb){let wb=0,Mb=-1;for(;wb<bb.length-2;){const eb=bb.indexOf(0,wb);if(-1===eb||eb>=bb.length-2)break;wb=eb;let Hb=0;wb+3<bb.length&&0===bb[wb+1]&&0===bb[wb+2]&&1===bb[wb+3]?Hb=4:0===bb[wb+1]&&1===bb[wb+2]&&(Hb=3),0!==Hb?(-1!==Mb&&wb>Mb&&(yield{offset:Mb,length:wb-Mb}),Mb=wb+Hb,wb=Mb):wb++}-1!==Mb&&Mb<bb.length&&(yield{offset:Mb,length:bb.length-Mb})},Yw=bb=>31&bb,Zw=bb=>{const wb=[],Mb=bb.length;for(let eb=0;eb<Mb;eb++)eb+2<Mb&&0===bb[eb]&&0===bb[eb+1]&&3===bb[eb+2]?(wb.push(0,0),eb+=2):wb.push(bb[eb]);return new Uint8Array(wb)},fw=(new Uint8Array([0,0,0,1]),(bb,wb)=>{const Mb=bb.reduce(((bb,Mb)=>bb+wb+Mb.byteLength),0),eb=new Uint8Array(Mb);let Hb=0;for(const pb of bb){const bb=new DataView(eb.buffer,eb.byteOffset,eb.byteLength);switch(wb){case 1:bb.setUint8(Hb,pb.byteLength);break;case 2:bb.setUint16(Hb,pb.byteLength,!1);break;case 3:kb(bb,Hb,pb.byteLength,!1);break;case 4:bb.setUint32(Hb,pb.byteLength,!1)}Hb+=wb,eb.set(pb,Hb),Hb+=pb.byteLength}return eb}),Aw=bb=>{try{const wb=[],Mb=[],eb=[];for(const gb of Dw(bb)){const Hb=bb.subarray(gb.offset,gb.offset+gb.length),pb=Yw(Hb[0]);pb===rw.SPS?wb.push(Hb):pb===rw.PPS?Mb.push(Hb):pb===rw.SPS_EXT&&eb.push(Hb)}if(0===wb.length)return null;if(0===Mb.length)return null;const Hb=wb[0],pb=Jw(Hb);cb(null!==pb);const Vb=100===pb.profileIdc||110===pb.profileIdc||122===pb.profileIdc||144===pb.profileIdc;return{configurationVersion:1,avcProfileIndication:pb.profileIdc,profileCompatibility:pb.constraintFlags,avcLevelIndication:pb.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:wb,pictureParameterSets:Mb,chromaFormat:Vb?pb.chromaFormatIdc:null,bitDepthLumaMinus8:Vb?pb.bitDepthLumaMinus8:null,bitDepthChromaMinus8:Vb?pb.bitDepthChromaMinus8:null,sequenceParameterSetExt:Vb?eb:null}}catch(wb){return Xw._error("Error building AVC Decoder Configuration Record:",wb),null}},Ww={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Jw=bb=>{try{const wb=Zw(bb),Mb=new Cw(wb);Mb.skipBits(1),Mb.skipBits(2);if(7!==Mb.readBits(5))return null;const eb=Mb.readAlignedByte(),Hb=Mb.readAlignedByte(),pb=Mb.readAlignedByte();Nb(Mb);let Vb=1,gb=0,lb=0,Lb=0;if(100===eb||110===eb||122===eb||244===eb||44===eb||83===eb||86===eb||118===eb||128===eb){Vb=Nb(Mb),3===Vb&&(Lb=Mb.readBits(1)),gb=Nb(Mb),lb=Nb(Mb),Mb.skipBits(1);if(Mb.readBits(1))for(let bb=0;bb<(3!==Vb?8:12);bb++){if(Mb.readBits(1)){const wb=bb<6?16:64;let eb=8,Hb=8;for(let bb=0;bb<wb;bb++){if(0!==Hb){Hb=(eb+vb(Mb)+256)%256}eb=0===Hb?eb:Hb}}}}Nb(Mb);const Ib=Nb(Mb);if(0===Ib)Nb(Mb);else if(1===Ib){Mb.skipBits(1),vb(Mb),vb(Mb);const bb=Nb(Mb);for(let wb=0;wb<bb;wb++)vb(Mb)}Nb(Mb),Mb.skipBits(1);const Ob=Nb(Mb),Ub=Nb(Mb),tb=16*(Ob+1),Cb=16*(Ub+1);let Eb=tb,Fb=Cb;const Bb=Mb.readBits(1);Bb||Mb.skipBits(1),Mb.skipBits(1);if(Mb.readBits(1)){const bb=Nb(Mb),wb=Nb(Mb),eb=Nb(Mb),Hb=Nb(Mb);let pb,gb;if(0===(0===Lb?Vb:0))pb=1,gb=2-Bb;else{pb=3===Vb?1:2,gb=(1===Vb?2:1)*(2-Bb)}Eb-=pb*(bb+wb),Fb-=gb*(eb+Hb)}let sb=2,mb=2,hb=2,zb=0,Xb={num:1,den:1},xb=null,jb=null,Kb=null,rb=null;const Rb=Mb.pos;if(Mb.readBits(1)){if(Mb.readBits(1)){const bb=Mb.readBits(8);if(255===bb)Xb={num:Mb.readBits(16),den:Mb.readBits(16)};else{const wb=Ww[bb];wb&&(Xb=wb)}}Mb.readBits(1)&&Mb.skipBits(1);if(Mb.readBits(1)){Mb.skipBits(3),zb=Mb.readBits(1);Mb.readBits(1)&&(sb=Mb.readBits(8),mb=Mb.readBits(8),hb=Mb.readBits(8))}Mb.readBits(1)&&(Nb(Mb),Nb(Mb));Mb.readBits(1)&&(Mb.skipBits(32),Mb.skipBits(32),Mb.skipBits(1));const bb=Mb.readBits(1);bb&&Sw(Mb);const wb=Mb.readBits(1);wb&&Sw(Mb),(bb||wb)&&Mb.skipBits(1),Mb.skipBits(1),Kb=Mb.pos,rb=Mb.readBits(1),rb&&(Mb.skipBits(1),Nb(Mb),Nb(Mb),Nb(Mb),Nb(Mb),xb=Nb(Mb),jb=Nb(Mb))}if(null===xb){cb(null===jb);if(44!==eb&&86!==eb&&100!==eb&&110!==eb&&122!==eb&&244!==eb||!(16&Hb)){const bb=Ob+1,wb=(2-Bb)*(Ub+1),Mb=EM.find((bb=>bb.level>=pb))??Jb(EM),eb=Math.min(Math.floor(Mb.maxDpbMbs/(bb*wb)),16);xb=eb,jb=eb}else xb=0,jb=0}return cb(null!==jb),{emulationUnpreventedBytes:wb,profileIdc:eb,constraintFlags:Hb,levelIdc:pb,frameMbsOnlyFlag:Bb,chromaFormatIdc:Vb,bitDepthLumaMinus8:gb,bitDepthChromaMinus8:lb,codedWidth:tb,codedHeight:Cb,displayWidth:Eb,displayHeight:Fb,pixelAspectRatio:Xb,colourPrimaries:sb,matrixCoefficients:hb,transferCharacteristics:mb,fullRangeFlag:zb,numReorderFrames:xb,maxDecFrameBuffering:jb,vuiParametersFlagBitOffset:Rb,bitstreamRestrictionFlagBitOffset:Kb,bitstreamRestrictionFlag:rb}}catch(wb){return Xw._error("Error parsing AVC SPS:",wb),null}},Sw=bb=>{const wb=Nb(bb);bb.skipBits(4),bb.skipBits(4);for(let Mb=0;Mb<=wb;Mb++)Nb(bb),Nb(bb),bb.skipBits(1);bb.skipBits(5),bb.skipBits(5),bb.skipBits(5),bb.skipBits(5)},Nw=bb=>bb>>1&63,vw=bb=>{try{const wb=[],Mb=[],eb=[],Hb=[];for(const lb of Dw(bb)){const pb=bb.subarray(lb.offset,lb.offset+lb.length),Vb=Nw(pb[0]);Vb===Rw.VPS_NUT?wb.push(pb):Vb===Rw.SPS_NUT?Mb.push(pb):Vb===Rw.PPS_NUT?eb.push(pb):Vb!==Rw.PREFIX_SEI_NUT&&Vb!==Rw.SUFFIX_SEI_NUT||Hb.push(pb)}if(0===Mb.length||0===eb.length)return null;const pb=(bb=>{try{const wb=new Cw(Zw(bb));wb.skipBits(16),wb.readBits(4);const Mb=wb.readBits(3),eb=wb.readBits(1),{general_profile_space:Hb,general_tier_flag:pb,general_profile_idc:Vb,general_profile_compatibility_flags:gb,general_constraint_indicator_flags:lb,general_level_idc:Lb}=Qw(wb,Mb);Nb(wb);const Ib=Nb(wb);let Ob=0;3===Ib&&(Ob=wb.readBits(1));const Ub=Nb(wb),tb=Nb(wb);let Cb=Ub,Eb=tb;if(wb.readBits(1)){const bb=Nb(wb),Mb=Nb(wb),eb=Nb(wb),Hb=Nb(wb);let pb=1,Vb=1;const gb=0===Ob?Ib:0;1===gb?(pb=2,Vb=2):2===gb&&(pb=2,Vb=1),Cb-=(bb+Mb)*pb,Eb-=(eb+Hb)*Vb}const Fb=Nb(wb),Bb=Nb(wb);Nb(wb);const sb=wb.readBits(1);let mb=0;for(let bb=sb?0:Mb;bb<=Mb;bb++)Nb(wb),mb=Nb(wb),Nb(wb);Nb(wb),Nb(wb),Nb(wb),Nb(wb),Nb(wb),Nb(wb),wb.readBits(1)&&wb.readBits(1)&&Gw(wb),wb.skipBits(1),wb.skipBits(1),wb.readBits(1)&&(wb.skipBits(4),wb.skipBits(4),Nb(wb),Nb(wb),wb.skipBits(1));const hb=Nb(wb);if(qw(wb,hb),wb.readBits(1)){const bb=Nb(wb);for(let Mb=0;Mb<bb;Mb++)Nb(wb),wb.skipBits(1)}wb.skipBits(1),wb.skipBits(1);let zb=2,Xb=2,xb=2,jb=0,Kb=0,rb={num:1,den:1};if(wb.readBits(1)){const bb=iw(wb,Mb);rb=bb.pixelAspectRatio,zb=bb.colourPrimaries,Xb=bb.transferCharacteristics,xb=bb.matrixCoefficients,jb=bb.fullRangeFlag,Kb=bb.minSpatialSegmentationIdc}return{displayWidth:Cb,displayHeight:Eb,pixelAspectRatio:rb,colourPrimaries:zb,transferCharacteristics:Xb,matrixCoefficients:xb,fullRangeFlag:jb,maxDecFrameBuffering:mb+1,spsMaxSubLayersMinus1:Mb,spsTemporalIdNestingFlag:eb,generalProfileSpace:Hb,generalTierFlag:pb,generalProfileIdc:Vb,generalProfileCompatibilityFlags:gb,generalConstraintIndicatorFlags:lb,generalLevelIdc:Lb,chromaFormatIdc:Ib,bitDepthLumaMinus8:Fb,bitDepthChromaMinus8:Bb,minSpatialSegmentationIdc:Kb}}catch(wb){return Xw._error("Error parsing HEVC SPS:",wb),null}})(Mb[0]);if(!pb)return null;let Vb=0;if(eb.length>0){const bb=eb[0],wb=new Cw(Zw(bb));wb.skipBits(16),Nb(wb),Nb(wb),wb.skipBits(1),wb.skipBits(1),wb.skipBits(3),wb.skipBits(1),wb.skipBits(1),Nb(wb),Nb(wb),vb(wb),wb.skipBits(1),wb.skipBits(1),wb.readBits(1)&&Nb(wb),vb(wb),vb(wb),wb.skipBits(1),wb.skipBits(1),wb.skipBits(1),wb.skipBits(1);const Mb=wb.readBits(1),Hb=wb.readBits(1);Vb=Mb||Hb?Mb&&!Hb?2:!Mb&&Hb?3:0:0}const gb=[...wb.length?[{arrayCompleteness:1,nalUnitType:Rw.VPS_NUT,nalUnits:wb}]:[],...Mb.length?[{arrayCompleteness:1,nalUnitType:Rw.SPS_NUT,nalUnits:Mb}]:[],...eb.length?[{arrayCompleteness:1,nalUnitType:Rw.PPS_NUT,nalUnits:eb}]:[],...Hb.length?[{arrayCompleteness:1,nalUnitType:Nw(Hb[0][0]),nalUnits:Hb}]:[]];return{configurationVersion:1,generalProfileSpace:pb.generalProfileSpace,generalTierFlag:pb.generalTierFlag,generalProfileIdc:pb.generalProfileIdc,generalProfileCompatibilityFlags:pb.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:pb.generalConstraintIndicatorFlags,generalLevelIdc:pb.generalLevelIdc,minSpatialSegmentationIdc:pb.minSpatialSegmentationIdc,parallelismType:Vb,chromaFormatIdc:pb.chromaFormatIdc,bitDepthLumaMinus8:pb.bitDepthLumaMinus8,bitDepthChromaMinus8:pb.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:pb.spsMaxSubLayersMinus1+1,temporalIdNested:pb.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:gb}}catch(wb){return Xw._error("Error building HEVC Decoder Configuration Record:",wb),null}},Qw=(bb,wb)=>{const Mb=bb.readBits(2),eb=bb.readBits(1),Hb=bb.readBits(5);let pb=0;for(let Ib=0;Ib<32;Ib++)pb=pb<<1|bb.readBits(1);const Vb=new Uint8Array(6);for(let Ib=0;Ib<6;Ib++)Vb[Ib]=bb.readBits(8);const gb=bb.readBits(8),lb=[],Lb=[];for(let Ib=0;Ib<wb;Ib++)lb.push(bb.readBits(1)),Lb.push(bb.readBits(1));if(wb>0)for(let Ib=wb;Ib<8;Ib++)bb.skipBits(2);for(let Ib=0;Ib<wb;Ib++)lb[Ib]&&bb.skipBits(88),Lb[Ib]&&bb.skipBits(8);return{general_profile_space:Mb,general_tier_flag:eb,general_profile_idc:Hb,general_profile_compatibility_flags:pb,general_constraint_indicator_flags:Vb,general_level_idc:gb}},Gw=bb=>{for(let wb=0;wb<4;wb++)for(let Mb=0;Mb<(3===wb?2:6);Mb++){if(bb.readBits(1)){const Mb=Math.min(64,1<<4+(wb<<1));wb>1&&vb(bb);for(let wb=0;wb<Mb;wb++)vb(bb)}else Nb(bb)}},qw=(bb,wb)=>{const Mb=[];for(let eb=0;eb<wb;eb++)Mb[eb]=aw(bb,eb,wb,Mb)},aw=(bb,wb,Mb,eb)=>{let Hb=0,pb=0,Vb=0;if(0!==wb&&(pb=bb.readBits(1)),pb){if(wb===Mb){Vb=wb-(Nb(bb)+1)}else Vb=wb-1;bb.readBits(1),Nb(bb);const pb=eb[Vb]??0;for(let wb=0;wb<=pb;wb++){bb.readBits(1)||bb.readBits(1)}Hb=eb[Vb]}else{const wb=Nb(bb),Mb=Nb(bb);for(let eb=0;eb<wb;eb++)Nb(bb),bb.readBits(1);for(let eb=0;eb<Mb;eb++)Nb(bb),bb.readBits(1);Hb=wb+Mb}return Hb},iw=(bb,wb)=>{let Mb=2,eb=2,Hb=2,pb=0,Vb=0,gb={num:1,den:1};if(bb.readBits(1)){const wb=bb.readBits(8);if(255===wb)gb={num:bb.readBits(16),den:bb.readBits(16)};else{const bb=Ww[wb];bb&&(gb=bb)}}return bb.readBits(1)&&bb.readBits(1),bb.readBits(1)&&(bb.readBits(3),pb=bb.readBits(1),bb.readBits(1)&&(Mb=bb.readBits(8),eb=bb.readBits(8),Hb=bb.readBits(8))),bb.readBits(1)&&(Nb(bb),Nb(bb)),bb.readBits(1),bb.readBits(1),bb.readBits(1),bb.readBits(1)&&(Nb(bb),Nb(bb),Nb(bb),Nb(bb)),bb.readBits(1)&&(bb.readBits(32),bb.readBits(32),bb.readBits(1)&&Nb(bb),bb.readBits(1)&&uw(bb,!0,wb)),bb.readBits(1)&&(bb.readBits(1),bb.readBits(1),bb.readBits(1),Vb=Nb(bb),Nb(bb),Nb(bb),Nb(bb),Nb(bb)),{pixelAspectRatio:gb,colourPrimaries:Mb,transferCharacteristics:eb,matrixCoefficients:Hb,fullRangeFlag:pb,minSpatialSegmentationIdc:Vb}},uw=(bb,wb,Mb)=>{let eb=!1,Hb=!1,pb=!1;wb&&(eb=1===bb.readBits(1),Hb=1===bb.readBits(1),(eb||Hb)&&(pb=1===bb.readBits(1),pb&&(bb.readBits(8),bb.readBits(5),bb.readBits(1),bb.readBits(5)),bb.readBits(4),bb.readBits(4),pb&&bb.readBits(4),bb.readBits(5),bb.readBits(5),bb.readBits(5)));for(let Vb=0;Vb<=Mb;Vb++){let wb=!0;1===bb.readBits(1)||(wb=1===bb.readBits(1));let Mb=!1;wb?Nb(bb):Mb=1===bb.readBits(1);let Vb=1;if(!Mb){Vb=Nb(bb)+1}eb&&dw(bb,Vb,pb),Hb&&dw(bb,Vb,pb)}},dw=(bb,wb,Mb)=>{for(let eb=0;eb<wb;eb++)Nb(bb),Nb(bb),Mb&&(Nb(bb),Nb(bb)),bb.readBits(1)};var Pw;!function(bb){bb[bb.audAllowed=0]="audAllowed",bb[bb.beforeFirstVcl=1]="beforeFirstVcl",bb[bb.afterFirstVcl=2]="afterFirstVcl",bb[bb.eoBitstreamAllowed=3]="eoBitstreamAllowed",bb[bb.noMoreDataAllowed=4]="noMoreDataAllowed"}(Pw||(Pw={}));const nw=bb=>{const wb=Gb(bb),Mb=wb.getUint8(9),eb=wb.getUint16(10,!0),Hb=wb.getUint32(12,!0),pb=wb.getInt16(16,!0),Vb=wb.getUint8(18);let gb=null;return Vb&&(gb=bb.subarray(19,21+Mb)),{outputChannelCount:Mb,preSkip:eb,inputSampleRate:Hb,outputGain:pb,channelMappingFamily:Vb,channelMappingTable:gb}};var yw;!function(bb){bb[bb.STREAMINFO=0]="STREAMINFO",bb[bb.VORBIS_COMMENT=4]="VORBIS_COMMENT",bb[bb.PICTURE=6]="PICTURE"}(yw||(yw={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const ow=[1,2,3,6],Tw=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],kw=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],bM=[16,16,20,20,0,24,24,0],wM=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],MM=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],eM=[32e3,44100,48e3,0],HM=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],pM=[512,1024,2048,4096],VM=bb=>{const wb=gM(bb),Mb=Gb(bb);let eb=wb?4*Math.ceil(wb.frameSize/4):0,Hb=null;for(;eb+4<=bb.length&&1683496997===Mb.getUint32(eb);){const wb=lM(bb.subarray(eb));if(!wb)break;Hb??=wb,eb+=wb.frameSize}if(wb)return{frameSize:Hb?eb:wb.frameSize,sampleRate:wb.sampleRate,numberOfChannels:wb.numberOfChannels,sampleCount:wb.sampleCount,channelLayout:wb.channelLayout,pcmResolution:wb.pcmResolution,bitRate:wb.bitRate,core:wb,hasExtensions:null!==Hb};if(!Hb?.asset)return null;const{asset:pb}=Hb;return{frameSize:eb,sampleRate:pb.sampleRate,numberOfChannels:pb.numberOfChannels,sampleCount:pb.sampleCount,channelLayout:pb.channelLayout,pcmResolution:pb.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},gM=bb=>{if(bb.length<18)return null;if(127!==bb[0]||254!==bb[1]||128!==bb[2]||1!==bb[3])return null;const wb=new Cw(bb);if(wb.skipBits(32),wb.skipBits(1),31!==wb.readBits(5))return null;const Mb=wb.readBits(1),eb=wb.readBits(7)+1;if(eb%8!==0)return null;const Hb=wb.readBits(14)+1;if(Hb<96)return null;const pb=wb.readBits(6);if(pb>=wM.length)return null;const Vb=Tw[wb.readBits(4)];if(0===Vb)return null;const gb=kw[wb.readBits(5)];if(0!==wb.readBits(1))return null;wb.skipBits(4),wb.skipBits(5);const lb=wb.readBits(2);if(3===lb)return null;wb.skipBits(1),Mb&&wb.skipBits(16),wb.skipBits(7);const Lb=bM[wb.readBits(3)];if(0===Lb)return null;const Ib=0!==lb;return{frameSize:Hb,sampleRate:Vb,numberOfChannels:wM[pb]+(Ib?1:0),sampleCount:32*eb,channelLayout:MM[pb]|(Ib?8:0),amode:pb,lfePresent:Ib,bitRate:gb,pcmResolution:Lb}},lM=bb=>{if(bb.length<10)return null;if(100!==bb[0]||88!==bb[1]||32!==bb[2]||37!==bb[3])return null;const wb=new Cw(bb);wb.skipBits(32),wb.skipBits(8);const Mb=wb.readBits(2),eb=wb.readBits(1),Hb=8+4*eb,pb=16+4*eb;wb.skipBits(Hb);const Vb=wb.readBits(pb)+1,gb={frameSize:Vb,asset:null};if(!wb.readBits(1))return gb;const lb=eM[wb.readBits(2)],Lb=512*(wb.readBits(3)+1);wb.readBits(1)&&wb.skipBits(36);const Ib=wb.readBits(3)+1,Ob=wb.readBits(3)+1,Ub=[];for(let Bb=0;Bb<Ib;Bb++)Ub.push(wb.readBits(Mb+1));for(const Bb of Ub)wb.skipBits(8*ww(Bb));if(wb.readBits(1)){wb.skipBits(2);const bb=wb.readBits(2)+1<<2,Mb=wb.readBits(2)+1;wb.skipBits(Mb*bb)}for(let Bb=0;Bb<Ob;Bb++)wb.skipBits(pb);wb.skipBits(9),wb.skipBits(3),wb.readBits(1)&&wb.skipBits(4),wb.readBits(1)&&wb.skipBits(24),wb.readBits(1)&&wb.skipBits(8*(wb.readBits(10)+1));const tb=wb.readBits(5)+1,Cb=HM[wb.readBits(4)],Eb=wb.readBits(8)+1;let Fb=0;if(wb.readBits(1)&&(Eb>2&&wb.skipBits(1),Eb>6&&wb.skipBits(1),wb.readBits(1))){const bb=wb.readBits(2)+1<<2;Fb=wb.readBits(bb)}return 0===lb||wb.getBitsLeft()<0?gb:{frameSize:Vb,asset:{sampleRate:Cb,numberOfChannels:Eb,sampleCount:Math.round(Lb*Cb/lb),channelLayout:Fb,pcmResolution:tb}}},LM=bb=>{const wb=new Uint8Array(20),Mb=Gb(wb);Mb.setUint32(0,bb.sampleRate),Mb.setUint32(4,bb.bitRate),Mb.setUint32(8,bb.bitRate),wb[12]=bb.pcmResolution;const eb=bb.core&&!bb.hasExtensions?1:0,Hb=new Cw(wb);return Hb.seekToByte(13),Hb.writeBits(2,Math.max(pM.indexOf(bb.sampleCount),0)),Hb.writeBits(5,eb),Hb.writeBits(1,bb.core?.lfePresent?1:0),Hb.writeBits(6,bb.core?.amode??0),Hb.writeBits(14,bb.core?bb.core.frameSize-1:0),Hb.writeBits(1,0),Hb.writeBits(3,0),Hb.writeBits(16,bb.channelLayout),Hb.writeBits(1,0),Hb.writeBits(1,0),Hb.writeBits(1,0),Hb.writeBits(5,0),wb},IM=["avc","hevc","vp9","av1","vp8","prores"],OM=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],UM=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],tM=[...UM,...OM],CM=["webvtt"],EM=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],FM=["ap4x","ap4h","apch","apcn","apcs","apco"],BM=["dtsc","dtsh","dtsl","dtse"],sM=bb=>{const wb=bb.split("."),Mb=Number(wb[1]),eb=wb[2],Hb=(Mb<<5)+Number(eb.slice(0,-1)),pb="H"===eb.slice(-1)?1:0,Vb=Number(wb[3]);return[129,Hb,(pb<<7)+((8===Vb?0:1)<<6)+((12===Vb?1:0)<<5)+((wb[4]?Number(wb[4]):0)<<4)+((wb[5]?Number(wb[5][0]):1)<<3)+((wb[5]?Number(wb[5][1]):1)<<2)+(wb[5]?Number(wb[5][2]):0),0]},mM=/^pcm-([usf])(\\d+)(be)?$/,hM=bb=>{if(cb(OM.includes(bb)),"ulaw"===bb)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===bb)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const wb=mM.exec(bb);let Mb;cb(wb),Mb="u"===wb[1]?"unsigned":"s"===wb[1]?"signed":"float";return{dataType:Mb,sampleSize:Number(wb[2])/8,littleEndian:"be"!==wb[3],silentValue:"pcm-u8"===bb?128:0}},zM=bb=>bb.startsWith("avc1")||bb.startsWith("avc3")?"avc":bb.startsWith("hev1")||bb.startsWith("hvc1")?"hevc":"vp8"===bb?"vp8":bb.startsWith("vp09")?"vp9":bb.startsWith("av01")?"av1":FM.includes(bb)?"prores":"mp3"===bb||"mp4a.69"===bb||"mp4a.6B"===bb||"mp4a.6b"===bb||"mp4a.40.34"===bb?"mp3":bb.startsWith("mp4a.40.")||"mp4a.67"===bb?"aac":"opus"===bb||"Opus"===bb?"opus":"vorbis"===bb?"vorbis":"flac"===bb?"flac":"ac-3"===bb||"ac3"===bb?"ac3":"ec-3"===bb||"eac3"===bb?"eac3":BM.includes(bb)?"dts":"ulaw"===bb?"ulaw":"alaw"===bb?"alaw":mM.test(bb)?bb:"webvtt"===bb?"webvtt":null,XM=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...FM],xM=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,jM=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,KM=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,rM=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,RM=(bb,wb)=>{if(!bb)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof bb)throw new TypeError("Video chunk metadata must be an object.");if(!bb.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof bb.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof bb.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!XM.some((wb=>bb.decoderConfig.codec.startsWith(wb))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(bb.decoderConfig.codedWidth)||bb.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(bb.decoderConfig.codedHeight)||bb.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==bb.decoderConfig.displayAspectWidth&&(!Number.isInteger(bb.decoderConfig.displayAspectWidth)||bb.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==bb.decoderConfig.displayAspectHeight&&(!Number.isInteger(bb.decoderConfig.displayAspectHeight)||bb.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==bb.decoderConfig.displayAspectWidth!==(void 0!==bb.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==bb.decoderConfig.description&&!nb(bb.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==bb.decoderConfig.colorSpace){const{colorSpace:wb}=bb.decoderConfig;if("object"!==typeof wb)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const Mb=Object.keys(ib);if(null!=wb.primaries&&!Mb.includes(wb.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${Mb.join(", ")}.`);const eb=Object.keys(ub);if(null!=wb.transfer&&!eb.includes(wb.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${eb.join(", ")}.`);const Hb=Object.keys(db);if(null!=wb.matrix&&!Hb.includes(wb.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${Hb.join(", ")}.`);if(null!=wb.fullRange&&"boolean"!==typeof wb.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(bb.decoderConfig.codec.startsWith("avc1")||bb.decoderConfig.codec.startsWith("avc3")){if(!xM.test(bb.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(bb.decoderConfig.codec.startsWith("hev1")||bb.decoderConfig.codec.startsWith("hvc1")){if(!jM.test(bb.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(bb.decoderConfig.codec.startsWith("vp8")){if("vp8"!==bb.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(bb.decoderConfig.codec.startsWith("vp09")){if(!KM.test(bb.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(bb.decoderConfig.codec.startsWith("av01")){if(!rM.test(bb.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(FM.some((wb=>bb.decoderConfig.codec.startsWith(wb)))&&!FM.some((wb=>bb.decoderConfig.codec===wb)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${FM.join(", ")}.`);if(null!==wb&&zM(bb.decoderConfig.codec)!==wb)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${bb.decoderConfig.codec}\' does not fit to the track codec \'${wb}\'.`)},DM=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],cM=(bb,wb)=>{if(!bb)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof bb)throw new TypeError("Audio chunk metadata must be an object.");if(!bb.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof bb.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof bb.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!DM.some((wb=>bb.decoderConfig.codec.startsWith(wb))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(bb.decoderConfig.sampleRate)||bb.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(bb.decoderConfig.numberOfChannels)||bb.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==bb.decoderConfig.description&&!nb(bb.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(bb.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==bb.decoderConfig.codec&&"mp4a.6B"!==bb.decoderConfig.codec&&"mp4a.6b"!==bb.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(bb.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(bb.decoderConfig.codec.startsWith("mp3")||bb.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==bb.decoderConfig.codec&&"mp4a.69"!==bb.decoderConfig.codec&&"mp4a.6B"!==bb.decoderConfig.codec&&"mp4a.6b"!==bb.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(bb.decoderConfig.codec.startsWith("opus")){if("opus"!==bb.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(bb.decoderConfig.description&&bb.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(bb.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==bb.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!bb.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(bb.decoderConfig.codec.startsWith("flac")){if("flac"!==bb.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const wb=42;if(!bb.decoderConfig.description||bb.decoderConfig.description.byteLength<wb)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(bb.decoderConfig.codec.startsWith("ac-3")||bb.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==bb.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(bb.decoderConfig.codec.startsWith("ec-3")||bb.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==bb.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(bb.decoderConfig.codec.startsWith("dts")){if(!BM.includes(bb.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${BM.join(", ")}.`)}else if((bb.decoderConfig.codec.startsWith("pcm")||bb.decoderConfig.codec.startsWith("ulaw")||bb.decoderConfig.codec.startsWith("alaw"))&&!OM.includes(bb.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${OM.join(", ")}).`);if(null!==wb&&zM(bb.decoderConfig.codec)!==wb)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${bb.decoderConfig.codec}\' does not fit to the track codec \'${wb}\'.`)},YM=bb=>{if(!bb)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof bb)throw new TypeError("Subtitle metadata must be an object.");if(!bb.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof bb.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof bb.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var ZM;!function(bb){bb[bb.FrameCount=1]="FrameCount",bb[bb.FileSize=2]="FileSize",bb[bb.Toc=4]="Toc"}(ZM||(ZM={}));class fM{constructor(bb,wb,Mb,eb,Hb){this.bytes=bb,this.view=wb,this.offset=Mb,this.start=eb,this.end=Hb,this.bufferPos=eb-Mb}static tempFromBytes(bb){return new fM(bb,Gb(bb),0,0,bb.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(bb){this.bufferPos=bb-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(bb){this.bufferPos+=bb}slice(bb){let wb=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-bb;if(bb<this.start||bb+wb>this.end)throw new RangeError("Slicing outside of original slice.");return new fM(this.bytes,this.view,this.offset,bb,bb+wb)}}const AM=(bb,wb)=>{if(bb.filePos<bb.start||bb.filePos+wb>bb.end)throw new RangeError(`Tried reading [${bb.filePos}, ${bb.filePos+wb}), but slice is [${bb.start}, ${bb.end}). This is likely an internal error, please report it alongside the file that caused it.`)},WM=(bb,wb)=>{AM(bb,wb);const Mb=bb.bytes.subarray(bb.bufferPos,bb.bufferPos+wb);return bb.bufferPos+=wb,Mb};var JM,SM;!function(bb){bb[bb.Unsynchronisation=128]="Unsynchronisation",bb[bb.ExtendedHeader=64]="ExtendedHeader",bb[bb.ExperimentalIndicator=32]="ExperimentalIndicator",bb[bb.Footer=16]="Footer"}(JM||(JM={})),function(bb){bb[bb.ISO_8859_1=0]="ISO_8859_1",bb[bb.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",bb[bb.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",bb[bb.UTF_8=3]="UTF_8"}(SM||(SM={}));class NM{constructor(bb){this.mutex=new yb,this.trackTimestampInfo=new WeakMap,this.output=bb}onTrackClose(bb){}validateTimestamp(bb,wb,Mb){let eb=this.trackTimestampInfo.get(bb);if(eb){if(Mb&&(eb.maxTimestampBeforeLastKeyPacket=eb.maxTimestamp),null!==eb.maxTimestampBeforeLastKeyPacket&&wb<eb.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${wb}s, but largest timestamp is ${eb.maxTimestampBeforeLastKeyPacket}s.`);eb.maxTimestamp=Math.max(eb.maxTimestamp,wb)}else{if(!Mb)throw new Error("First packet must be a key packet.");eb={maxTimestamp:wb,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(bb,eb)}}}const vM=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const QM=bb=>{const wb=Math.floor(bb/36e5),Mb=Math.floor(bb%36e5/6e4),eb=Math.floor(bb%6e4/1e3),Hb=bb%1e3;return wb.toString().padStart(2,"0")+":"+Mb.toString().padStart(2,"0")+":"+eb.toString().padStart(2,"0")+"."+Hb.toString().padStart(3,"0")};class GM{constructor(bb){this.writer=bb,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(bb){this.helperView.setUint32(0,bb,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(bb){this.helperView.setUint32(0,Math.floor(bb/2**32),!1),this.helperView.setUint32(4,bb,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(bb){for(let wb=0;wb<bb.length;wb++)this.helperView.setUint8(wb%8,bb.charCodeAt(wb)),wb%8===7&&this.writer.write(this.helper);bb.length%8!==0&&this.writer.write(this.helper.subarray(0,bb.length%8))}writeBox(bb){if(this.offsets.set(bb,this.writer.getPos()),bb.contents&&!bb.children)this.writeBoxHeader(bb,bb.size??bb.contents.byteLength+8),this.writer.write(bb.contents);else{const wb=this.writer.getPos();if(this.writeBoxHeader(bb,0),bb.contents&&this.writer.write(bb.contents),bb.children)for(const Hb of bb.children)Hb&&this.writeBox(Hb);const Mb=this.writer.getPos(),eb=bb.size??Mb-wb;this.writer.seek(wb),this.writeBoxHeader(bb,eb),this.writer.seek(Mb)}}writeBoxHeader(bb,wb){this.writeU32(bb.largeSize?1:wb),this.writeAscii(bb.type),bb.largeSize&&this.writeU64(wb)}measureBoxHeader(bb){return 8+(bb.largeSize?8:0)}patchBox(bb){const wb=this.offsets.get(bb);cb(void 0!==wb);const Mb=this.writer.getPos();this.writer.seek(wb),this.writeBox(bb),this.writer.seek(Mb)}measureBox(bb){if(bb.contents&&!bb.children){return this.measureBoxHeader(bb)+bb.contents.byteLength}{let wb=this.measureBoxHeader(bb);if(bb.contents&&(wb+=bb.contents.byteLength),bb.children)for(const Mb of bb.children)Mb&&(wb+=this.measureBox(Mb));return wb}}}const qM=new Uint8Array(8),aM=new DataView(qM.buffer),iM=bb=>[(bb%256+256)%256],uM=bb=>(aM.setUint16(0,bb,!1),[qM[0],qM[1]]),dM=bb=>(aM.setInt16(0,bb,!1),[qM[0],qM[1]]),PM=bb=>(aM.setUint32(0,bb,!1),[qM[1],qM[2],qM[3]]),nM=bb=>(aM.setUint32(0,bb,!1),[qM[0],qM[1],qM[2],qM[3]]),yM=bb=>(aM.setInt32(0,bb,!1),[qM[0],qM[1],qM[2],qM[3]]),oM=bb=>(aM.setUint32(0,Math.floor(bb/2**32),!1),aM.setUint32(4,bb,!1),[qM[0],qM[1],qM[2],qM[3],qM[4],qM[5],qM[6],qM[7]]),TM=bb=>(aM.setInt32(0,Math.floor(bb/2**32),!1),aM.setUint32(4,bb,!1),[qM[0],qM[1],qM[2],qM[3],qM[4],qM[5],qM[6],qM[7]]),kM=bb=>(aM.setInt16(0,256*bb,!1),[qM[0],qM[1]]),be=bb=>(aM.setInt32(0,65536*bb,!1),[qM[0],qM[1],qM[2],qM[3]]),we=bb=>(aM.setInt32(0,2**30*bb,!1),[qM[0],qM[1],qM[2],qM[3]]),Me=(bb,wb)=>{const Mb=[];let eb=bb;do{let bb=127&eb;eb>>=7,Mb.length>0&&(bb|=128),Mb.push(bb),void 0!==wb&&wb--}while(eb>0||wb);return Mb.reverse()},ee=function(bb){let wb=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const Mb=Array(bb.length).fill(null).map(((wb,Mb)=>bb.charCodeAt(Mb)));return wb&&Mb.push(0),Mb},He=bb=>[be(bb[0]),be(bb[1]),we(bb[2]),be(bb[3]),be(bb[4]),we(bb[5]),be(bb[6]),be(bb[7]),we(bb[8])],pe=(bb,wb,Mb)=>({type:bb,contents:wb&&new Uint8Array(wb.flat(10)),children:Mb}),Ve=(bb,wb,Mb,eb,Hb)=>pe(bb,[iM(wb),PM(Mb),eb??[]],Hb),ge=()=>pe("styp",[ee("iso5"),nM(0),ee("iso5"),ee("iso6"),ee("mp41"),ee("cmfc"),ee("dash")]),le=(bb,wb)=>{const Mb=Math.max(0,bb.minWrittenTimestamp);let eb=Math.max(0,bb.maxWrittenEndTimestamp-Mb);return Number.isFinite(eb)||(eb=0),Ve("sidx",1,0,[nM(1),nM(NH),oM(QH(Mb,NH)),oM(0),uM(0),uM(1),nM(2147483647&wb),nM(QH(eb,NH)),nM(0)])},Le=bb=>({type:"mdat",largeSize:bb}),Ie=bb=>pe("moov",void 0,[Oe(bb.creationTime,bb.trackDatas),...bb.trackDatas.map((wb=>Ue(wb,bb.creationTime))),bb.isFragmented?ke(bb.trackDatas):null,tH(bb)]),Oe=(bb,wb)=>{const Mb=Math.max(0,...wb.map((bb=>Math.max(0,QH(GH(bb),NH)+QH(bb.startTimestampOffset??0,NH))))),eb=Math.max(0,...wb.map((bb=>bb.track.id)))+1,Hb=!Sb(bb)||!Sb(Mb),pb=Hb?oM:nM;return Ve("mvhd",+Hb,0,[pb(bb),pb(bb),nM(NH),pb(Mb),be(1),kM(1),Array(10).fill(0),He(Zb),Array(24).fill(0),nM(eb)])},Ue=(bb,wb)=>{const Mb=vH(bb),eb=null!==bb.startTimestampOffset&&0!==bb.startTimestampOffset;return pe("trak",void 0,[te(bb,wb),eb?Ce(bb):null,Ee(bb,wb),void 0!==Mb.name?pe("udta",void 0,[pe("name",[...ab.encode(Mb.name)])]):null])},te=(bb,wb)=>{const Mb=Math.max(0,QH(GH(bb),NH)+QH(bb.startTimestampOffset??0,NH)),eb=!Sb(wb)||!Sb(Mb),Hb=eb?oM:nM;let pb;if("video"===bb.type&&bb.track.metadata.transformationMatrix)pb=bb.track.metadata.transformationMatrix;else if("video"===bb.type){const{rotation:wb,flip:Mb}=bb.track.metadata;pb=((bb,wb,Mb)=>{const[eb,Hb,,pb,Vb]=bb,gb=Math.abs(eb)*wb+Math.abs(pb)*Mb,lb=Math.abs(Hb)*wb+Math.abs(Vb)*Mb;return Wb(Wb(Ab(-wb/2,-Mb/2),bb),Ab(gb/2,lb/2))})(Wb(fb(wb??0),[Mb?-1:1,0,0,0,1,0,0,0,1]),bb.info.width,bb.info.height)}else pb=Zb;let Vb=2;!1!==bb.track.metadata.disposition?.default&&(Vb|=1);const gb="video"===bb.type?0:"audio"===bb.type?1:"subtitle"===bb.type?2:Tb(bb);return Ve("tkhd",+eb,Vb,[Hb(wb),Hb(wb),nM(bb.track.id),nM(0),Hb(Mb),Array(8).fill(0),uM(0),uM(gb),kM("audio"===bb.type?1:0),uM(0),He(pb),be("video"===bb.type?bb.info.width:0),be("video"===bb.type?bb.info.height:0)])},Ce=bb=>{const wb=bb.startTimestampOffset;if(cb(null!==wb),wb>0){const Mb=QH(wb,NH),eb=QH(GH(bb),NH),Hb=!Sb(Mb)||!Sb(eb),pb=Hb?oM:nM,Vb=Hb?TM:yM;return pe("edts",void 0,[Ve("elst",Hb?1:0,0,[nM(2),pb(Mb),Vb(-1),be(1),pb(eb),Vb(0),be(1)])])}{const eb=QH(-wb,bb.timescale),Hb=Math.max(0,QH(GH(bb),NH)+QH(wb,NH)),pb=!((Mb=eb)>=-(2**31)&&Mb<2**31)||!Sb(Hb),Vb=pb?oM:nM,gb=pb?TM:yM;return pe("edts",void 0,[Ve("elst",pb?1:0,0,[nM(1),Vb(Hb),gb(eb),be(1)])])}var Mb},Ee=(bb,wb)=>pe("mdia",void 0,[Fe(bb,wb),me(!0,Be[bb.type],se[bb.type]),he(bb)]),Fe=(bb,wb)=>{const Mb=QH(GH(bb),bb.timescale),eb=!Sb(wb)||!Sb(Mb),Hb=eb?oM:nM;return Ve("mdhd",+eb,0,[Hb(wb),Hb(wb),nM(bb.timescale),Hb(Mb),uM(RH(bb.track.metadata.languageCode??bw)),uM(0)])},Be={video:"vide",audio:"soun",subtitle:"text"},se={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},me=function(bb,wb,Mb){let eb=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return Ve("hdlr",0,0,[bb?ee("mhlr"):nM(0),ee(wb),ee(eb),nM(0),nM(0),ee(Mb,!0)])},he=bb=>pe("minf",void 0,[ze[bb.type](),Xe(),Ke(bb)]),ze={video:()=>Ve("vmhd",0,1,[uM(0),uM(0),uM(0),uM(0)]),audio:()=>Ve("smhd",0,0,[uM(0),uM(0)]),subtitle:()=>Ve("nmhd",0,0)},Xe=()=>pe("dinf",void 0,[xe()]),xe=()=>Ve("dref",0,0,[nM(1)],[je()]),je=()=>Ve("url ",0,1),Ke=bb=>{const wb=bb.compositionTimeOffsetTable.length>1||bb.compositionTimeOffsetTable.some((bb=>0!==bb.sampleCompositionTimeOffset));return pe("stbl",void 0,[re(bb),ue(bb),wb?oe(bb):null,wb?Te(bb):null,Pe(bb),ne(bb),ye(bb),de(bb)])},re=bb=>{let wb;if("video"===bb.type)wb=Re(zH(bb.track.source._codec,bb.info.decoderConfig.codec),bb);else if("audio"===bb.type){const Mb=xH(bb.track.source._codec,bb.info.decoderConfig.codec,bb.muxer.isQuickTime);cb(Mb),wb=fe(Mb,bb)}else"subtitle"===bb.type&&(wb=ie(KH[bb.track.source._codec],bb));return cb(wb),Ve("stsd",0,0,[nM(1)],[wb])},Re=(bb,wb)=>pe(bb,[Array(6).fill(0),uM(1),uM(0),uM(0),Array(12).fill(0),uM(wb.info.width),uM(wb.info.height),nM(4718592),nM(4718592),nM(0),uM(1),iM(18),ee(Kw),Array(13).fill(0),uM(wb.info.hasAlphaChannel?32:24),dM(65535)],[XH[wb.track.source._codec]?.(wb)??null,ce(wb),Pb(wb.info.decoderConfig.colorSpace)?null:Ye(wb),De(wb)]),De=bb=>0===bb.avgBitrate&&0===bb.maxBitrate?null:pe("btrt",[nM(0),nM(bb.maxBitrate),nM(bb.avgBitrate)]),ce=bb=>bb.info.pixelAspectRatio.num===bb.info.pixelAspectRatio.den?null:pe("pasp",[nM(bb.info.pixelAspectRatio.num),nM(bb.info.pixelAspectRatio.den)]),Ye=bb=>{const wb=bb.info.decoderConfig.colorSpace;return pe("colr",[ee(bb.muxer.isQuickTime?"nclc":"nclx"),uM(null!=wb?.primaries?ib[wb.primaries]:2),uM(null!=wb?.transfer?ub[wb.transfer]:2),uM(null!=wb?.matrix?db[wb.matrix]:2),bb.muxer.isQuickTime?[]:iM((wb?.fullRange?1:0)<<7)])},Ze=bb=>{if(!bb.info.decoderConfig)return null;const wb=bb.info.decoderConfig,Mb=wb.codec.split("."),eb=Number(Mb[1]),Hb=Number(Mb[2]),pb=(Number(Mb[3])<<4)+((Mb[4]?Number(Mb[4]):1)<<1)+(Mb[8]?Number(Mb[8]):Number(wb.colorSpace?.fullRange??0)),Vb=Mb[5]?Number(Mb[5]):wb.colorSpace?.primaries?ib[wb.colorSpace.primaries]:1,gb=Mb[6]?Number(Mb[6]):wb.colorSpace?.transfer?ub[wb.colorSpace.transfer]:1,lb=Mb[7]?Number(Mb[7]):wb.colorSpace?.matrix?db[wb.colorSpace.matrix]:1;return Ve("vpcC",1,0,[iM(eb),iM(Hb),iM(pb),iM(Vb),iM(gb),iM(lb),uM(0)])},fe=(bb,wb)=>{let Mb,eb=0,Hb=16;const pb=OM.includes(wb.track.source._codec);if(pb){const bb=wb.track.source._codec,{sampleSize:Mb}=hM(bb);Hb=8*Mb,Hb>16&&(eb=1)}if(wb.muxer.isQuickTime&&(eb=1),0===eb)Mb=[Array(6).fill(0),uM(1),uM(eb),uM(0),nM(0),uM(wb.info.numberOfChannels),uM(Hb),uM(0),uM(0),uM(wb.info.sampleRate<65536?wb.info.sampleRate:0),uM(0)];else{const bb=pb?0:-2;Mb=[Array(6).fill(0),uM(1),uM(eb),uM(0),nM(0),uM(wb.info.numberOfChannels),uM(Math.min(Hb,16)),dM(bb),uM(0),uM(wb.info.sampleRate<65536?wb.info.sampleRate:0),uM(0),pb?[nM(1),nM(Hb/8),nM(wb.info.numberOfChannels*Hb/8)]:[nM(0),nM(0),nM(0)],nM(2)]}return pe(bb,Mb,[jH(wb.track.source._codec,wb.muxer.isQuickTime)?.(wb)??null,De(wb)])},Ae=bb=>{let wb;switch(bb.track.source._codec){case"aac":wb=64;break;case"mp3":wb=107;break;case"vorbis":wb=221;break;default:throw new Error(`Unhandled audio codec: ${bb.track.source._codec}`)}let Mb=[...iM(wb),...iM(21),...PM(0),...nM(bb.maxBitrate),...nM(bb.avgBitrate)];if(bb.info.decoderConfig.description){const wb=Qb(bb.info.decoderConfig.description);Mb=[...Mb,...iM(5),...Me(wb.byteLength),...wb]}return Mb=[...uM(1),...iM(0),...iM(4),...Me(Mb.length),...Mb,...iM(6),...iM(1),...iM(2)],Mb=[...iM(3),...Me(Mb.length),...Mb],Ve("esds",0,0,Mb)},We=bb=>pe("wave",void 0,[Je(bb),Se(bb),pe("\\0\\0\\0\\0")]),Je=bb=>pe("frma",[ee(xH(bb.track.source._codec,bb.info.decoderConfig.codec,bb.muxer.isQuickTime))]),Se=bb=>{const{littleEndian:wb}=hM(bb.track.source._codec);return pe("enda",[uM(+wb)])},Ne=bb=>{let wb=bb.info.numberOfChannels,Mb=3840,eb=bb.info.sampleRate,Hb=0,pb=0,Vb=new Uint8Array(0);const gb=bb.info.decoderConfig?.description;if(gb){cb(gb.byteLength>=18);const bb=Qb(gb),lb=nw(bb);wb=lb.outputChannelCount,Mb=lb.preSkip,eb=lb.inputSampleRate,Hb=lb.outputGain,pb=lb.channelMappingFamily,lb.channelMappingTable&&(Vb=lb.channelMappingTable)}return pe("dOps",[iM(0),iM(wb),uM(Mb),nM(eb),dM(Hb),iM(pb),...Vb])},ve=bb=>{const wb=bb.info.decoderConfig?.description;cb(wb);const Mb=Qb(wb);return Ve("dfLa",0,0,[...Mb.subarray(4)])},Qe=bb=>{const{littleEndian:wb,sampleSize:Mb}=hM(bb.track.source._codec);return Ve("pcmC",0,0,[iM(+wb),iM(8*Mb)])},Ge=bb=>{cb(bb.info.primingPacket);const wb=(bb=>{if(bb.length<7)return null;if(11!==bb[0]||119!==bb[1])return null;const wb=new Cw(bb);wb.skipBits(16),wb.skipBits(16);const Mb=wb.readBits(2);if(3===Mb)return null;const eb=wb.readBits(6),Hb=wb.readBits(5);if(Hb>8)return null;const pb=wb.readBits(3),Vb=wb.readBits(3);return 0!==(1&Vb)&&1!==Vb&&wb.skipBits(2),0!==(4&Vb)&&wb.skipBits(2),2===Vb&&wb.skipBits(2),{fscod:Mb,bsid:Hb,bsmod:pb,acmod:Vb,lfeon:wb.readBits(1),bitRateCode:Math.floor(eb/2)}})(bb.info.primingPacket.data);if(!wb)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const Mb=new Uint8Array(3),eb=new Cw(Mb);return eb.writeBits(2,wb.fscod),eb.writeBits(5,wb.bsid),eb.writeBits(3,wb.bsmod),eb.writeBits(3,wb.acmod),eb.writeBits(1,wb.lfeon),eb.writeBits(5,wb.bitRateCode),eb.writeBits(5,0),pe("dac3",[...Mb])},qe=bb=>{cb(bb.info.primingPacket);const wb=(bb=>{if(bb.length<6)return null;if(11!==bb[0]||119!==bb[1])return null;const wb=new Cw(bb);wb.skipBits(16);const Mb=wb.readBits(2);if(wb.skipBits(3),0!==Mb&&2!==Mb)return null;const eb=wb.readBits(11),Hb=wb.readBits(2);let pb,Vb=0;3===Hb?(Vb=wb.readBits(2),pb=3):pb=wb.readBits(2);const gb=wb.readBits(3),lb=wb.readBits(1),Lb=wb.readBits(5);if(Lb<11||Lb>16)return null;const Ib=ow[pb];let Ob;return Ob=Hb<3?xw[Hb]/1e3:jw[Vb]/1e3,{dataRate:Math.round((eb+1)*Ob/(16*Ib)),substreams:[{fscod:Hb,fscod2:Vb,bsid:Lb,bsmod:0,acmod:gb,lfeon:lb,numDepSub:0,chanLoc:0}]}})(bb.info.primingPacket.data);if(!wb)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let Mb=16;for(const Vb of wb.substreams)Mb+=23,Vb.numDepSub>0?Mb+=9:Mb+=1;const eb=Math.ceil(Mb/8),Hb=new Uint8Array(eb),pb=new Cw(Hb);pb.writeBits(13,wb.dataRate),pb.writeBits(3,wb.substreams.length-1);for(const Vb of wb.substreams)pb.writeBits(2,Vb.fscod),pb.writeBits(5,Vb.bsid),pb.writeBits(1,0),pb.writeBits(1,0),pb.writeBits(3,Vb.bsmod),pb.writeBits(3,Vb.acmod),pb.writeBits(1,Vb.lfeon),pb.writeBits(3,0),pb.writeBits(4,Vb.numDepSub),Vb.numDepSub>0?pb.writeBits(9,Vb.chanLoc):pb.writeBits(1,0);return pe("dec3",[...Hb])},ae=bb=>{cb(bb.info.primingPacket);const wb=VM(bb.info.primingPacket.data);if(!wb)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return pe("ddts",[...LM(wb)])},ie=(bb,wb)=>pe(bb,[Array(6).fill(0),uM(1)],[rH[wb.track.source._codec](wb),De(wb)]),ue=bb=>Ve("stts",0,0,[nM(bb.timeToSampleTable.length),bb.timeToSampleTable.map((bb=>[nM(bb.sampleCount),nM(bb.sampleDelta)]))]),de=bb=>{if(bb.samples.every((bb=>"key"===bb.type)))return null;const wb=[...bb.samples.entries()].filter((bb=>{let[,wb]=bb;return"key"===wb.type}));return Ve("stss",0,0,[nM(wb.length),wb.map((bb=>{let[wb]=bb;return nM(wb+1)}))])},Pe=bb=>Ve("stsc",0,0,[nM(bb.compactlyCodedChunkTable.length),bb.compactlyCodedChunkTable.map((bb=>[nM(bb.firstChunk),nM(bb.samplesPerChunk),nM(1)]))]),ne=bb=>{if("audio"===bb.type&&bb.info.requiresPcmTransformation){const{sampleSize:wb}=hM(bb.track.source._codec);return Ve("stsz",0,0,[nM(wb*bb.info.numberOfChannels),nM(bb.samples.reduce(((wb,Mb)=>wb+QH(Mb.duration,bb.timescale)),0))])}return Ve("stsz",0,0,[nM(0),nM(bb.samples.length),bb.samples.map((bb=>nM(bb.size)))])},ye=bb=>bb.finalizedChunks.length>0&&Jb(bb.finalizedChunks).offset>=2**32?Ve("co64",0,0,[nM(bb.finalizedChunks.length),bb.finalizedChunks.map((bb=>oM(bb.offset)))]):Ve("stco",0,0,[nM(bb.finalizedChunks.length),bb.finalizedChunks.map((bb=>nM(bb.offset)))]),oe=bb=>Ve("ctts",1,0,[nM(bb.compositionTimeOffsetTable.length),bb.compositionTimeOffsetTable.map((bb=>[nM(bb.sampleCount),yM(bb.sampleCompositionTimeOffset)]))]),Te=bb=>{let wb=1/0,Mb=-1/0,eb=1/0,Hb=-1/0;cb(bb.compositionTimeOffsetTable.length>0),cb(bb.samples.length>0);for(let Vb=0;Vb<bb.compositionTimeOffsetTable.length;Vb++){const eb=bb.compositionTimeOffsetTable[Vb];wb=Math.min(wb,eb.sampleCompositionTimeOffset),Mb=Math.max(Mb,eb.sampleCompositionTimeOffset)}for(let Vb=0;Vb<bb.samples.length;Vb++){const wb=bb.samples[Vb];eb=Math.min(eb,QH(wb.timestamp,bb.timescale)),Hb=Math.max(Hb,QH(wb.timestamp+wb.duration,bb.timescale))}const pb=Math.max(-wb,0);return Hb>=2**31?null:Ve("cslg",0,0,[yM(pb),yM(wb),yM(Mb),yM(eb),yM(Hb)])},ke=bb=>pe("mvex",void 0,bb.map(bH)),bH=bb=>Ve("trex",0,0,[nM(bb.track.id),nM(1),nM(0),nM(0),nM(0)]),wH=(bb,wb)=>pe("moof",void 0,[MH(bb),...wb.map(HH)]),MH=bb=>Ve("mfhd",0,0,[nM(bb)]),eH=bb=>{let wb=0,Mb=0;const eb="delta"===bb.type;return Mb|=+eb,wb|=eb?1:2,wb<<24|Mb<<16},HH=bb=>pe("traf",void 0,[pH(bb),VH(bb),gH(bb)]),pH=bb=>{cb(bb.currentChunk);let wb=0;wb|=8,wb|=16,wb|=32,wb|=131072;const Mb=bb.currentChunk.samples[1]??bb.currentChunk.samples[0],eb={duration:Mb.timescaleUnitsToNextSample,size:Mb.size,flags:eH(Mb)};return Ve("tfhd",0,131128,[nM(bb.track.id),nM(eb.duration),nM(eb.size),nM(eb.flags)])},VH=bb=>(cb(bb.currentChunk),Ve("tfdt",1,0,[oM(QH(bb.currentChunk.startTimestamp,bb.timescale))])),gH=bb=>{cb(bb.currentChunk);const wb=bb.currentChunk.samples.map((bb=>bb.timescaleUnitsToNextSample)),Mb=bb.currentChunk.samples.map((bb=>bb.size)),eb=bb.currentChunk.samples.map(eH),Hb=bb.currentChunk.samples.map((wb=>QH(wb.timestamp-wb.decodeTimestamp,bb.timescale))),pb=new Set(wb),Vb=new Set(Mb),gb=new Set(eb),lb=new Set(Hb),Lb=2===gb.size&&eb[0]!==eb[1],Ib=pb.size>1,Ob=Vb.size>1,Ub=!Lb&&gb.size>1,tb=lb.size>1||[...lb].some((bb=>0!==bb));let Cb=0;return Cb|=1,Cb|=4*+Lb,Cb|=256*+Ib,Cb|=512*+Ob,Cb|=1024*+Ub,Cb|=2048*+tb,Ve("trun",1,Cb,[nM(bb.currentChunk.samples.length),nM(bb.currentChunk.offset-bb.currentChunk.moofOffset||0),Lb?nM(eb[0]):[],bb.currentChunk.samples.map(((bb,pb)=>[Ib?nM(wb[pb]):[],Ob?nM(Mb[pb]):[],Ub?nM(eb[pb]):[],tb?yM(Hb[pb]):[]]))])},lH=bb=>Ve("tfra",1,0,[nM(bb.track.id),nM(63),nM(bb.finalizedChunks.length),bb.finalizedChunks.map((wb=>[oM(QH(wb.samples[0].timestamp,bb.timescale)),oM(wb.moofOffset),nM(wb.trafIndex+1),nM(1),nM(1)]))]),LH=()=>Ve("mfro",0,0,[nM(0)]),IH=()=>pe("vtte"),OH=(bb,wb,Mb,eb,Hb)=>pe("vttc",void 0,[null!==Hb?pe("vsid",[yM(Hb)]):null,null!==Mb?pe("iden",[...ab.encode(Mb)]):null,null!==wb?pe("ctim",[...ab.encode(QM(wb))]):null,null!==eb?pe("sttg",[...ab.encode(eb)]):null,pe("payl",[...ab.encode(bb)])]),UH=bb=>pe("vtta",[...ab.encode(bb)]),tH=bb=>{const wb=[],Mb=bb.format._options.metadataFormat??"auto",eb=bb.output._metadataTags;if("mdir"===Mb||"auto"===Mb&&!bb.isQuickTime){const bb=sH(eb);bb&&wb.push(bb)}else if("mdta"===Mb){const bb=mH(eb);bb&&wb.push(bb)}else("udta"===Mb||"auto"===Mb&&bb.isQuickTime)&&CH(wb,bb.output._metadataTags);return 0===wb.length?null:pe("udta",void 0,wb)},CH=(bb,wb)=>{for(const{key:Mb,value:eb}of Vw(wb))switch(Mb){case"title":bb.push(EH("\\xa9nam",eb));break;case"description":bb.push(EH("\\xa9des",eb));break;case"artist":bb.push(EH("\\xa9ART",eb));break;case"album":bb.push(EH("\\xa9alb",eb));break;case"albumArtist":bb.push(EH("albr",eb));break;case"genre":bb.push(EH("\\xa9gen",eb));break;case"date":bb.push(EH("\\xa9day",eb.toISOString().slice(0,10)));break;case"comment":bb.push(EH("\\xa9cmt",eb));break;case"lyrics":bb.push(EH("\\xa9lyr",eb));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:Tb(Mb)}if(wb.raw)for(const Mb in wb.raw){const eb=wb.raw[Mb];null==eb||4!==Mb.length||bb.some((bb=>bb.type===Mb))||("string"===typeof eb?bb.push(EH(Mb,eb)):eb instanceof Uint8Array&&bb.push(pe(Mb,Array.from(eb))))}},EH=(bb,wb)=>{const Mb=ab.encode(wb);return pe(bb,[uM(Mb.length),uM(RH("und")),Array.from(Mb)])},FH={"image/jpeg":13,"image/png":14,"image/bmp":27},BH=(bb,wb)=>{const Mb=[];for(const{key:eb,value:Hb}of Vw(bb))switch(eb){case"title":Mb.push({key:wb?"title":"\\xa9nam",value:hH(Hb)});break;case"description":Mb.push({key:wb?"description":"\\xa9des",value:hH(Hb)});break;case"artist":Mb.push({key:wb?"artist":"\\xa9ART",value:hH(Hb)});break;case"album":Mb.push({key:wb?"album":"\\xa9alb",value:hH(Hb)});break;case"albumArtist":Mb.push({key:wb?"album_artist":"aART",value:hH(Hb)});break;case"comment":Mb.push({key:wb?"comment":"\\xa9cmt",value:hH(Hb)});break;case"genre":Mb.push({key:wb?"genre":"\\xa9gen",value:hH(Hb)});break;case"beatsPerMinute":wb||Mb.push({key:"tmpo",value:pe("data",[nM(21),nM(0),uM(Hb)])});break;case"lyrics":Mb.push({key:wb?"lyrics":"\\xa9lyr",value:hH(Hb)});break;case"date":Mb.push({key:wb?"date":"\\xa9day",value:hH(Hb.toISOString().slice(0,10))});break;case"images":for(const bb of Hb)"coverFront"===bb.kind&&Mb.push({key:"covr",value:pe("data",[nM(FH[bb.mimeType]??0),nM(0),Array.from(bb.data)])});break;case"trackNumber":if(wb){const wb=void 0!==bb.tracksTotal?`${Hb}/${bb.tracksTotal}`:Hb.toString();Mb.push({key:"track",value:hH(wb)})}else Mb.push({key:"trkn",value:pe("data",[nM(0),nM(0),uM(0),uM(Hb),uM(bb.tracksTotal??0),uM(0)])});break;case"discNumber":wb||Mb.push({key:"disc",value:pe("data",[nM(0),nM(0),uM(0),uM(Hb),uM(bb.discsTotal??0),uM(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:Tb(eb)}if(bb.raw)for(const eb in bb.raw){const Hb=bb.raw[eb];null==Hb||!wb&&4!==eb.length||Mb.some((bb=>bb.key===eb))||("string"===typeof Hb?Mb.push({key:eb,value:hH(Hb)}):Hb instanceof Uint8Array?Mb.push({key:eb,value:pe("data",[nM(0),nM(0),Array.from(Hb)])}):Hb instanceof Uw&&Mb.push({key:eb,value:pe("data",[nM(FH[Hb.mimeType]??0),nM(0),Array.from(Hb.data)])}))}return Mb},sH=bb=>{const wb=BH(bb,!1);return 0===wb.length?null:Ve("meta",0,0,void 0,[me(!1,"mdir","","appl"),pe("ilst",void 0,wb.map((bb=>pe(bb.key,void 0,[bb.value]))))])},mH=bb=>{const wb=BH(bb,!0);return 0===wb.length?null:pe("meta",void 0,[me(!1,"mdta",""),Ve("keys",0,0,[nM(wb.length)],wb.map((bb=>pe("mdta",[...ab.encode(bb.key)])))),pe("ilst",void 0,wb.map(((bb,wb)=>{const Mb=String.fromCharCode(...nM(wb+1));return pe(Mb,void 0,[bb.value])})))])},hH=bb=>pe("data",[nM(1),nM(0),...ab.encode(bb)]),zH=(bb,wb)=>{switch(bb){case"avc":return wb.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return wb}},XH={avc:bb=>bb.info.decoderConfig&&pe("avcC",[...Qb(bb.info.decoderConfig.description)]),hevc:bb=>bb.info.decoderConfig&&pe("hvcC",[...Qb(bb.info.decoderConfig.description)]),vp8:Ze,vp9:Ze,av1:bb=>pe("av1C",sM(bb.info.decoderConfig.codec)),prores:null},xH=(bb,wb,Mb)=>{switch(bb){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return wb}if(Mb)switch(bb){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(bb){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},jH=(bb,wb)=>{switch(bb){case"aac":case"mp3":case"vorbis":return Ae;case"opus":return Ne;case"flac":return ve;case"ac3":return Ge;case"eac3":return qe;case"dts":return ae}if(wb)switch(bb){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return We}else switch(bb){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return Qe}return null},KH={webvtt:"wvtt"},rH={webvtt:bb=>pe("vttC",[...ab.encode(bb.info.config.description)])},RH=bb=>{cb(3===bb.length);let wb=0;for(let Mb=0;Mb<3;Mb++)wb<<=5,wb+=bb.charCodeAt(Mb)-96;return wb};class DH{constructor(bb,wb){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,bb._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=bb,bb._setMonotonicity(wb),bb._writerAcquired=!0}start(){cb(!this.started),this.target._start(),this.started=!0}write(bb){cb(this.started&&!this.finalized),this.maybeTrackWrites(bb),this.target._write(bb,this.pos),this.pos+=bb.byteLength}seek(bb){this.pos=bb}getPos(){return this.pos}async flush(){return cb(this.started&&!this.finalized),this.target._flush()}async finalize(){cb(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(bb){if(!this.trackedWrites)return;let wb=this.getPos();if(wb<this.trackedStart){if(wb+bb.byteLength<=this.trackedStart)return;bb=bb.subarray(this.trackedStart-wb),wb=0}const Mb=wb+bb.byteLength-this.trackedStart;let eb=this.trackedWrites.byteLength;for(;eb<Mb;)eb*=2;if(eb!==this.trackedWrites.byteLength){const bb=new Uint8Array(eb);bb.set(this.trackedWrites,0),this.trackedWrites=bb}this.trackedWrites.set(bb,wb-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,wb+bb.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const bb={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,bb}}Mb(5);class cH extends Iw{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(bb){!1!==this._monotonicity&&(this._monotonicity=bb)}_dispatchWrite(bb,wb){this.onwrite?.(bb,wb),this._emit("write",{start:bb,end:wb})}slice(bb){if(!Number.isInteger(bb)||bb<0)throw new TypeError("offset must be a non-negative integer.");return new WH(this,bb)}}const YH=65536,ZH=2**32;class fH extends cH{constructor(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!bb||"object"!==typeof bb)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==bb.onFinalize&&"function"!==typeof bb.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=bb,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(YH,{maxByteLength:ZH})}catch{this._buffer=new ArrayBuffer(YH),this._supportsResize=!1}else this._buffer=new ArrayBuffer(YH);this._bytes=new Uint8Array(this._buffer)}_ensureSize(bb){let wb=this._buffer.byteLength;for(;wb<bb;)wb*=2;if(wb!==this._buffer.byteLength){if(wb>ZH)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(wb);else{const bb=new ArrayBuffer(wb),Mb=new Uint8Array(bb);Mb.set(this._bytes,0),this._buffer=bb,this._bytes=Mb}}}_start(){}_write(bb,wb){this._ensureSize(wb+bb.byteLength),this._bytes.set(bb,wb),this._maxPos=Math.max(this._maxPos,wb+bb.byteLength),this._dispatchWrite(wb,wb+bb.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(bb,wb){return this._bytes.slice(bb,wb)}}class AH extends cH{_start(){}_write(bb,wb){this._dispatchWrite(wb,wb+bb.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class WH extends cH{constructor(bb,wb){super(),this._baseTarget=bb,this._offset=wb}_start(){}_write(bb,wb){this._baseTarget._write(bb,this._offset+wb),this._dispatchWrite(wb,wb+bb.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(bb){super._setMonotonicity(bb),this._baseTarget._setMonotonicity(bb)}}class JH{constructor(bb,wb){if(this.rootPath=bb,this.getTarget=wb,"string"!==typeof bb)throw new TypeError("rootPath must be a string.");if("function"!==typeof wb)throw new TypeError("getTarget must be a function.")}}const SH=bb=>{const wb=bb.filePos,Mb=WM(bb,9),eb=new Cw(Mb);if(4095!==eb.readBits(12))return null;eb.skipBits(1);if(0!==eb.readBits(2))return null;const Hb=eb.readBits(1),pb=eb.readBits(2)+1,Vb=eb.readBits(4);if(15===Vb)return null;eb.skipBits(1);const gb=eb.readBits(3);if(0===gb)throw new Error("ADTS frames with channel configuration 0 are not supported.");eb.skipBits(1),eb.skipBits(1),eb.skipBits(1),eb.skipBits(1);const lb=eb.readBits(13);eb.skipBits(11);const Lb=eb.readBits(2)+1;if(1!==Lb)throw new Error("ADTS frames with more than one AAC frame are not supported.");let Ib=null;return 1===Hb?bb.filePos-=2:Ib=eb.readBits(16),{objectType:pb,samplingFrequencyIndex:Vb,channelConfiguration:gb,frameLength:lb,numberOfAacFrames:Lb,crcCheck:Ib,startPos:wb}},NH=57600,vH=bb=>{const wb={},Mb=bb.track;return void 0!==Mb.metadata.name&&(wb.name=Mb.metadata.name),wb},QH=function(bb,wb){const Mb=bb*wb;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(Mb):Mb},GH=bb=>{if(0===bb.samples.length)return 0;let wb=1/0,Mb=-1/0;for(let eb=0;eb<bb.samples.length;eb++){const Hb=bb.samples[eb];Hb.timestamp<wb&&(wb=Hb.timestamp),Hb.timestamp+Hb.duration>Mb&&(Mb=Hb.timestamp+Hb.duration)}return wb===1/0?0:Mb-wb};class qH extends NM{constructor(bb,wb){super(bb),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new fH,this.auxWriter=new DH(this.auxTarget,!1),this.auxBoxWriter=new GM(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=ob(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=wb,this.formatOptions={...wb._options},this.isQuickTime=wb instanceof Up,this.isCmaf=wb instanceof Op,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(wb instanceof Op?1/0:1),this.auxWriter.start()}async start(){const bb=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((bb=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:bb instanceof fH)),this.boxWriter=new GM(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof fH&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const bb=await this.output._getInitTarget(),wb=new DH(bb,!0);wb.start(),this.initWriter=wb,this.initBoxWriter=new GM(wb)}const wb=this.output.tracks.some((bb=>bb.isVideoTrack()&&"avc"===bb.source._codec));{const bb=this.initBoxWriter??this.boxWriter;if(cb(bb),this.formatOptions.onFtyp&&bb.writer.startTrackingWrites(),bb.writeBox((bb=>{const wb=512;return bb.isQuickTime?pe("ftyp",[ee("qt  "),nM(wb),ee("qt  ")]):bb.fragmented?bb.cmaf?pe("ftyp",[ee("iso5"),nM(wb),ee("iso5"),ee("iso6"),ee("mp41"),ee("cmfc"),ee("dash")]):pe("ftyp",[ee("iso5"),nM(wb),ee("iso5"),ee("iso6"),ee("mp41")]):pe("ftyp",[ee("isom"),nM(wb),ee("isom"),bb.holdsAvc?ee("avc1"):[],ee("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:wb,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:wb,start:Mb}=bb.writer.stopTrackingWrites();this.formatOptions.onFtyp(wb,Mb)}this.ftypSize=bb.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const Mb of this.output.tracks)if(void 0===Mb.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(cb(this.writer),cb(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Le(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const Mb of this.output.tracks)Mb.isVideoTrack()&&Mb.metadata.decoderConfig?this.getVideoTrackData(Mb,Mb.metadata.primingPacket??null,{decoderConfig:Mb.metadata.decoderConfig}):Mb.isAudioTrack()&&Mb.metadata.decoderConfig&&this.getAudioTrackData(Mb,Mb.metadata.primingPacket??null,{decoderConfig:Mb.metadata.decoderConfig});bb()}allTracksAreKnown(){for(const bb of this.output.tracks)if(!bb.source._closed&&!this.trackDatas.some((wb=>wb.track===bb)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const bb=this.trackDatas.map((bb=>{if("video"===bb.type)return bb.info.decoderConfig.codec;if("audio"===bb.type)return bb.info.decoderConfig.codec;return{webvtt:"wvtt"}[bb.track.source._codec]}));return(bb=>{let wb=(bb.hasVideo?"video/":bb.hasAudio?"audio/":"application/")+(bb.isQuickTime?"quicktime":"mp4");bb.codecStrings.length>0&&(wb+=`; codecs="${[...new Set(bb.codecStrings)].join(", ")}"`);return wb})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((bb=>"video"===bb.type)),hasAudio:this.trackDatas.some((bb=>"audio"===bb.type)),codecStrings:bb})}getVideoTrackData(bb,wb,Mb){const eb=this.trackDatas.find((wb=>wb.track===bb));if(eb)return eb;RM(Mb,bb.source._codec),cb(Mb),cb(Mb.decoderConfig);const Hb={...Mb.decoderConfig};cb(void 0!==Hb.codedWidth),cb(void 0!==Hb.codedHeight);let pb=!1;if("avc"!==bb.source._codec||Hb.description){if("hevc"===bb.source._codec&&!Hb.description){if(!wb)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const bb=vw(wb.data);if(!bb)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");Hb.description=(bb=>{const wb=[];wb.push(bb.configurationVersion),wb.push((3&bb.generalProfileSpace)<<6|(1&bb.generalTierFlag)<<5|31&bb.generalProfileIdc),wb.push(bb.generalProfileCompatibilityFlags>>>24&255),wb.push(bb.generalProfileCompatibilityFlags>>>16&255),wb.push(bb.generalProfileCompatibilityFlags>>>8&255),wb.push(255&bb.generalProfileCompatibilityFlags),wb.push(...bb.generalConstraintIndicatorFlags),wb.push(255&bb.generalLevelIdc),wb.push(240|bb.minSpatialSegmentationIdc>>8&15),wb.push(255&bb.minSpatialSegmentationIdc),wb.push(252|3&bb.parallelismType),wb.push(252|3&bb.chromaFormatIdc),wb.push(248|7&bb.bitDepthLumaMinus8),wb.push(248|7&bb.bitDepthChromaMinus8),wb.push(bb.avgFrameRate>>8&255),wb.push(255&bb.avgFrameRate),wb.push((3&bb.constantFrameRate)<<6|(7&bb.numTemporalLayers)<<3|(1&bb.temporalIdNested)<<2|3&bb.lengthSizeMinusOne),wb.push(255&bb.arrays.length);for(const Mb of bb.arrays){wb.push((1&Mb.arrayCompleteness)<<7|63&Mb.nalUnitType),wb.push(Mb.nalUnits.length>>8&255),wb.push(255&Mb.nalUnits.length);for(const bb of Mb.nalUnits){wb.push(bb.length>>8&255),wb.push(255&bb.length);for(let Mb=0;Mb<bb.length;Mb++)wb.push(bb[Mb])}}return new Uint8Array(wb)})(bb),pb=!0}}else{if(!wb)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const bb=Aw(wb.data);if(!bb)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");Hb.description=(bb=>{const wb=[];wb.push(bb.configurationVersion),wb.push(bb.avcProfileIndication),wb.push(bb.profileCompatibility),wb.push(bb.avcLevelIndication),wb.push(252|3&bb.lengthSizeMinusOne),wb.push(224|31&bb.sequenceParameterSets.length);for(const Mb of bb.sequenceParameterSets){const bb=Mb.byteLength;wb.push(bb>>8),wb.push(255&bb);for(let eb=0;eb<bb;eb++)wb.push(Mb[eb])}wb.push(bb.pictureParameterSets.length);for(const Mb of bb.pictureParameterSets){const bb=Mb.byteLength;wb.push(bb>>8),wb.push(255&bb);for(let eb=0;eb<bb;eb++)wb.push(Mb[eb])}if((100===bb.avcProfileIndication||110===bb.avcProfileIndication||122===bb.avcProfileIndication||144===bb.avcProfileIndication)&&null!==bb.chromaFormat){cb(null!==bb.bitDepthLumaMinus8),cb(null!==bb.bitDepthChromaMinus8),cb(null!==bb.sequenceParameterSetExt),wb.push(252|3&bb.chromaFormat),wb.push(248|7&bb.bitDepthLumaMinus8),wb.push(248|7&bb.bitDepthChromaMinus8),wb.push(bb.sequenceParameterSetExt.length);for(const Mb of bb.sequenceParameterSetExt){const bb=Mb.byteLength;wb.push(bb>>8),wb.push(255&bb);for(let eb=0;eb<bb;eb++)wb.push(Mb[eb])}}return new Uint8Array(wb)})(bb),pb=!0}const Vb=((bb,wb)=>{const Mb=bb<0?-1:1;let eb=0,Hb=1,pb=1,Vb=0,gb=bb=Math.abs(bb);for(;;){const bb=Math.floor(gb),lb=bb*pb+eb,Lb=bb*Vb+Hb;if(Lb>wb)return{num:Mb*pb,den:Vb};if(eb=pb,Hb=Vb,pb=lb,Vb=Lb,gb=1/(gb-bb),!isFinite(gb))break}return{num:Mb*pb,den:Vb}})(1/(bb.metadata.frameRate??NH),1e6).den,gb=Hb.displayAspectWidth,lb=Hb.displayAspectHeight,Lb=void 0===gb||void 0===lb?{num:1,den:1}:lw({num:gb*Hb.codedHeight,den:lb*Hb.codedWidth}),Ib="ap4h"===Hb.codec||"ap4x"===Hb.codec,Ob={muxer:this,track:bb,type:"video",info:{width:Hb.codedWidth,height:Hb.codedHeight,pixelAspectRatio:Lb,decoderConfig:Hb,requiresAnnexBTransformation:pb,hasAlphaChannel:Ib},timescale:Vb,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:bb.source._nominalBitrate??bb.metadata.averageBitrate??0,maxBitrate:bb.source._nominalBitrate??bb.metadata.bitrate??0};return this.trackDatas.push(Ob),this.trackDatas.sort(((bb,wb)=>bb.track.id-wb.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),Ob}getAudioTrackData(bb,wb,Mb){const eb=this.trackDatas.find((wb=>wb.track===bb));if(eb)return eb;cM(Mb,bb.source._codec),cb(Mb),cb(Mb.decoderConfig);const Hb={...Mb.decoderConfig};let pb=!1;if("aac"===bb.source._codec&&!Hb.description){if(!wb)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const bb=SH(fM.tempFromBytes(wb.data));if(!bb)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const Mb=Ew[bb.samplingFrequencyIndex],eb=Fw[bb.channelConfiguration];if(void 0===Mb||void 0===eb)throw new Error("Invalid ADTS frame header.");Hb.description=Bw({objectType:bb.objectType,outputSampleRate:Mb,outputNumberOfChannels:eb}),pb=!0}if(!wb){if("ac3"===bb.source._codec||"eac3"===bb.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===bb.source._codec)throw new Error("DTS requires a priming packet.")}const Vb={muxer:this,track:bb,type:"audio",info:{numberOfChannels:Mb.decoderConfig.numberOfChannels,sampleRate:Mb.decoderConfig.sampleRate,decoderConfig:Hb,requiresPcmTransformation:!this.isFragmented&&OM.includes(bb.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:pb,primingPacket:wb},timescale:Hb.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:bb.source._nominalBitrate??bb.metadata.averageBitrate??0,maxBitrate:bb.source._nominalBitrate??bb.metadata.bitrate??0};return this.trackDatas.push(Vb),this.trackDatas.sort(((bb,wb)=>bb.track.id-wb.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),Vb}getSubtitleTrackData(bb,wb){const Mb=this.trackDatas.find((wb=>wb.track===bb));if(Mb)return Mb;YM(wb),cb(wb),cb(wb.config);const eb={muxer:this,track:bb,type:"subtitle",info:{config:wb.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:bb.source._nominalBitrate??bb.metadata.averageBitrate??0,maxBitrate:bb.source._nominalBitrate??bb.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(eb),this.trackDatas.sort(((bb,wb)=>bb.track.id-wb.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),eb}async addEncodedVideoPacket(bb,wb,Mb){const eb=await this.mutex.acquire();try{const eb=this.getVideoTrackData(bb,wb,Mb);let Hb=wb.data;if(eb.info.requiresAnnexBTransformation){const bb=[...Dw(Hb)].map((bb=>Hb.subarray(bb.offset,bb.offset+bb.length)));if(0===bb.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");Hb=fw(bb,4)}this.validateTimestamp(eb.track,wb.timestamp,"key"===wb.type);const pb=this.createSampleForTrack(eb,Hb,wb.timestamp,wb.duration,wb.type);await this.registerSample(eb,pb)}finally{eb()}}async addEncodedAudioPacket(bb,wb,Mb){const eb=await this.mutex.acquire();try{const eb=this.getAudioTrackData(bb,wb,Mb);let Hb=wb.data;if(eb.info.requiresAdtsStripping){const bb=SH(fM.tempFromBytes(Hb));if(!bb)throw new Error("Expected ADTS frame, didn\'t get one.");const wb=null===bb.crcCheck?7:9;Hb=Hb.subarray(wb)}this.validateTimestamp(eb.track,wb.timestamp,"key"===wb.type);let pb=wb.timestamp,Vb=wb.duration;if(eb.info.requiresPcmTransformation){const bb=hM(eb.info.decoderConfig.codec).sampleSize*eb.info.numberOfChannels;if(Vb=Hb.byteLength/bb/eb.info.sampleRate,null!==eb.info.expectedNextPcmPacketTimestamp){const bb=pb-eb.info.expectedNextPcmPacketTimestamp;if(bb<.01)pb=eb.info.expectedNextPcmPacketTimestamp;else{const wb=await this.padWithSilence(eb,eb.info.expectedNextPcmPacketTimestamp,bb);pb=eb.info.expectedNextPcmPacketTimestamp+wb}}eb.info.expectedNextPcmPacketTimestamp=pb+Vb}const gb=this.createSampleForTrack(eb,Hb,pb,Vb,wb.type);await this.registerSample(eb,gb)}finally{eb()}}async padWithSilence(bb,wb,Mb){const eb=QH(Mb,bb.timescale);if(Mb=eb/bb.timescale,eb>0){const{sampleSize:Hb,silentValue:pb}=hM(bb.info.decoderConfig.codec),Vb=eb*bb.info.numberOfChannels,gb=new Uint8Array(Hb*Vb).fill(pb),lb=this.createSampleForTrack(bb,new Uint8Array(gb.buffer),wb,Mb,"key");await this.registerSample(bb,lb)}return Mb}async addSubtitleCue(bb,wb,Mb){const eb=await this.mutex.acquire();try{const eb=this.getSubtitleTrackData(bb,Mb);this.validateTimestamp(eb.track,wb.timestamp,!0),"webvtt"===bb.source._codec&&(eb.cueQueue.push(wb),await this.processWebVTTCues(eb,wb.timestamp))}finally{eb()}}async processWebVTTCues(bb,wb){for(;bb.cueQueue.length>0;){bb.lastCueEndTimestamp??=Math.min(0,bb.cueQueue[0].timestamp);const Mb=new Set([]);for(const lb of bb.cueQueue)cb(lb.timestamp<=wb),cb(bb.lastCueEndTimestamp<=lb.timestamp+lb.duration),Mb.add(Math.max(lb.timestamp,bb.lastCueEndTimestamp)),Mb.add(lb.timestamp+lb.duration);const eb=[...Mb].sort(((bb,wb)=>bb-wb)),Hb=eb[0],pb=eb[1]??Hb;if(wb<pb)break;if(bb.lastCueEndTimestamp<Hb){this.auxWriter.seek(0);const wb=IH();this.auxBoxWriter.writeBox(wb);const Mb=this.auxTarget._getSlice(0,this.auxWriter.getPos()),eb=this.createSampleForTrack(bb,Mb,bb.lastCueEndTimestamp,Hb-bb.lastCueEndTimestamp,"key");await this.registerSample(bb,eb),bb.lastCueEndTimestamp=Hb}this.auxWriter.seek(0);for(let wb=0;wb<bb.cueQueue.length;wb++){const Mb=bb.cueQueue[wb];if(Mb.timestamp>=pb)break;vM.lastIndex=0;const eb=vM.test(Mb.text),Vb=Mb.timestamp+Mb.duration;let gb=bb.cueToSourceId.get(Mb);if(void 0===gb&&pb<Vb&&(gb=bb.nextSourceId++,bb.cueToSourceId.set(Mb,gb)),Mb.notes){const bb=UH(Mb.notes);this.auxBoxWriter.writeBox(bb)}const lb=OH(Mb.text,eb?Hb:null,Mb.identifier??null,Mb.settings??null,gb??null);this.auxBoxWriter.writeBox(lb),Vb===pb&&bb.cueQueue.splice(wb--,1)}const Vb=this.auxTarget._getSlice(0,this.auxWriter.getPos()),gb=this.createSampleForTrack(bb,Vb,Hb,pb-Hb,"key");await this.registerSample(bb,gb),bb.lastCueEndTimestamp=pb}}createSampleForTrack(bb,wb,Mb,eb,Hb){return{timestamp:Mb,decodeTimestamp:Mb,duration:eb,data:wb,size:wb.byteLength,type:Hb,timescaleUnitsToNextSample:QH(eb,bb.timescale)}}processTimestamps(bb,wb){if(0===bb.timestampProcessingQueue.length)return;if("audio"===bb.type&&bb.info.requiresPcmTransformation){cb(!this.isFragmented),bb.startTimestampOffset??=bb.timestampProcessingQueue[0].timestamp;let wb=0;for(let Mb=0;Mb<bb.timestampProcessingQueue.length;Mb++){const eb=bb.timestampProcessingQueue[Mb];wb+=QH(eb.duration,bb.timescale)}if(0===bb.timeToSampleTable.length)bb.timeToSampleTable.push({sampleCount:wb,sampleDelta:1});else{Jb(bb.timeToSampleTable).sampleCount+=wb}return void(bb.timestampProcessingQueue.length=0)}const Mb=bb.timestampProcessingQueue.map((bb=>bb.timestamp)).sort(((bb,wb)=>bb-wb));this.isFragmented?bb.startTimestampOffset??=Math.min(Mb[0],0):bb.startTimestampOffset??=Mb[0];for(let eb=0;eb<bb.timestampProcessingQueue.length;eb++){const wb=bb.timestampProcessingQueue[eb];wb.decodeTimestamp=Mb[eb];const Hb=QH(wb.timestamp-wb.decodeTimestamp,bb.timescale),pb=QH(wb.duration,bb.timescale);if(null!==bb.lastTimescaleUnits){cb(bb.lastSample);const Mb=QH(wb.decodeTimestamp,bb.timescale,!1),eb=Math.round(Mb-bb.lastTimescaleUnits);if(cb(eb>=0),bb.lastTimescaleUnits+=eb,bb.lastSample.timescaleUnitsToNextSample=eb,!this.isFragmented){let wb=Jb(bb.timeToSampleTable);if(cb(wb),1===wb.sampleCount){wb.sampleDelta=eb;const Mb=bb.timeToSampleTable[bb.timeToSampleTable.length-2];Mb&&Mb.sampleDelta===eb&&(Mb.sampleCount++,bb.timeToSampleTable.pop(),wb=Mb)}else wb.sampleDelta!==eb&&(wb.sampleCount--,bb.timeToSampleTable.push(wb={sampleCount:1,sampleDelta:eb}));wb.sampleDelta===pb?wb.sampleCount++:bb.timeToSampleTable.push({sampleCount:1,sampleDelta:pb});const Mb=Jb(bb.compositionTimeOffsetTable);cb(Mb),Mb.sampleCompositionTimeOffset===Hb?Mb.sampleCount++:bb.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:Hb})}}else bb.lastTimescaleUnits=QH(wb.decodeTimestamp,bb.timescale,!1),this.isFragmented||(bb.timeToSampleTable.push({sampleCount:1,sampleDelta:pb}),bb.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:Hb}));bb.lastSample=wb}if(bb.timestampProcessingQueue.length=0,cb(bb.lastSample),cb(null!==bb.lastTimescaleUnits),void 0!==wb&&0===bb.lastSample.timescaleUnitsToNextSample){cb("key"===wb.type);const Mb=QH(wb.timestamp,bb.timescale,!1),eb=Math.round(Mb-bb.lastTimescaleUnits);bb.lastSample.timescaleUnitsToNextSample=eb}}async registerSample(bb,wb){"key"===wb.type&&this.processTimestamps(bb,wb),bb.timestampProcessingQueue.push(wb),this.isFragmented?(bb.sampleQueue.push(wb),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(bb,wb):await this.addSampleToTrack(bb,wb)}async addSampleToTrack(bb,wb){if(!this.isFragmented&&(bb.samples.push(wb),"reserve"===this.fastStart)){const wb=bb.track.metadata.maximumPacketCount;if(cb(void 0!==wb),bb.samples.length>wb)throw new Error(`Track #${bb.track.id} has already reached the maximum packet count (${wb}). Either add less packets or increase the maximum packet count.`)}let Mb=!1;if(bb.currentChunk){bb.currentChunk.startTimestamp=Math.min(bb.currentChunk.startTimestamp,wb.timestamp);const eb=wb.timestamp-bb.currentChunk.startTimestamp;if(this.isFragmented){const Hb=this.trackDatas.every((Mb=>{if(bb===Mb)return"key"===wb.type;const eb=Mb.sampleQueue[0];return eb?"key"===eb.type:Mb.closed}));eb>=this.minimumFragmentDuration&&Hb&&wb.timestamp>this.maxWrittenTimestamp&&(Mb=!0,await this.finalizeFragment())}else Mb=eb>=.5}else Mb=!0;Mb&&(bb.currentChunk&&await this.finalizeCurrentChunk(bb),bb.currentChunk={startTimestamp:wb.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),cb(bb.currentChunk),bb.currentChunk.samples.push(wb),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,wb.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,wb.timestamp+wb.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,wb.timestamp))}async finalizeCurrentChunk(bb){if(cb(!this.isFragmented),cb(this.writer),!bb.currentChunk)return;bb.finalizedChunks.push(bb.currentChunk),this.finalizedChunks.push(bb.currentChunk);let wb=bb.currentChunk.samples.length;if("audio"===bb.type&&bb.info.requiresPcmTransformation&&(wb=bb.currentChunk.samples.reduce(((wb,Mb)=>wb+QH(Mb.duration,bb.timescale)),0)),0!==bb.compactlyCodedChunkTable.length&&Jb(bb.compactlyCodedChunkTable).samplesPerChunk===wb||bb.compactlyCodedChunkTable.push({firstChunk:bb.finalizedChunks.length,samplesPerChunk:wb}),"in-memory"!==this.fastStart){bb.currentChunk.offset=this.writer.getPos();for(const wb of bb.currentChunk.samples)cb(wb.data),this.writer.write(wb.data),wb.data=null;await this.writer.flush()}else bb.currentChunk.offset=0}async interleaveSamples(){let bb=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(cb(this.isFragmented),bb||this.allTracksAreKnown())bb:for(;;){let wb=null,Mb=1/0;for(const Hb of this.trackDatas){if(!bb&&0===Hb.sampleQueue.length&&!Hb.closed)break bb;Hb.sampleQueue.length>0&&Hb.sampleQueue[0].timestamp<Mb&&(wb=Hb,Mb=Hb.sampleQueue[0].timestamp)}if(!wb)break;const eb=wb.sampleQueue.shift();await this.addSampleToTrack(wb,eb)}}async finalizeFragment(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(cb(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const bb=this.initBoxWriter??this.boxWriter;cb(bb),this.formatOptions.onMoov&&bb.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const wb=Ie(this);if(bb.writeBox(wb),this.formatOptions.onMoov){const{data:wb,start:Mb}=bb.writer.stopTrackingWrites();this.formatOptions.onMoov(wb,Mb)}if(this.isCmaf){cb(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new GM(this.writer);const bb=this.boxWriter.measureBox(ge()),wb=this.boxWriter.measureBox(le(this,0));this.segmentHeaderSize=bb+wb,this.writer.seek(this.segmentHeaderSize)}}cb(this.writer),cb(this.boxWriter);const wb=this.trackDatas.filter((bb=>bb.currentChunk));if(0===wb.length)return void(bb&&await this.writer.flush());const Mb=this.nextFragmentNumber++,eb=wH(Mb,wb),Hb=this.writer.getPos(),pb=Hb+this.boxWriter.measureBox(eb);let Vb=pb+8,gb=1/0;for(let Ub=0;Ub<wb.length;Ub++){const bb=wb[Ub];cb(bb.currentChunk),cb(null!==bb.startTimestampOffset),bb.currentChunk.offset=Vb,bb.currentChunk.moofOffset=Hb,bb.currentChunk.trafIndex=Ub,bb.currentChunk.startTimestamp-=bb.startTimestampOffset;for(const wb of bb.currentChunk.samples)Vb+=wb.size,wb.timestamp-=bb.startTimestampOffset,wb.decodeTimestamp-=bb.startTimestampOffset;gb=Math.min(gb,bb.currentChunk.startTimestamp)}const lb=Vb-pb,Lb=lb>=2**32;if(Lb)for(const Ub of wb)Ub.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const Ib=wH(Mb,wb);if(this.boxWriter.writeBox(Ib),this.formatOptions.onMoof){const{data:bb,start:wb}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(bb,wb,gb)}cb(this.writer.getPos()===pb),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const Ob=Le(Lb);Ob.size=lb,this.boxWriter.writeBox(Ob),this.writer.seek(pb+(Lb?16:8));for(const Ub of wb)for(const bb of Ub.currentChunk.samples)this.writer.write(bb.data),bb.data=null;if(this.formatOptions.onMdat){const{data:bb,start:wb}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(bb,wb)}for(const Ub of wb)Ub.finalizedChunks.push(Ub.currentChunk),this.finalizedChunks.push(Ub.currentChunk),Ub.currentChunk=null;bb&&await this.writer.flush()}async registerSampleFastStartReserve(bb,wb){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(bb,wb)):bb.sampleQueue.push(wb)}async createFastStartReserveMdat(){cb(this.writer),cb(this.boxWriter),this.ensureOneEnabledTrack();const bb=Ie(this),wb=this.boxWriter.measureBox(bb)+this.computeSampleTableSizeUpperBound()+4096;cb(null!==this.ftypSize),this.writer.seek(this.ftypSize+wb),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Le(!0),this.boxWriter.writeBox(this.mdat);for(const Mb of this.trackDatas){for(const bb of Mb.sampleQueue)await this.addSampleToTrack(Mb,bb);Mb.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){cb("reserve"===this.fastStart);let bb=0;for(const wb of this.trackDatas){const Mb=wb.track.metadata.maximumPacketCount;cb(void 0!==Mb),bb+=8*Math.ceil(2/3*Mb),bb+=4*Mb,bb+=8*Math.ceil(2/3*Mb),bb+=12*Math.ceil(2/3*Mb),bb+=4*Mb,bb+=8*Mb}return bb}async onTrackClose(bb){const wb=await this.mutex.acquire(),Mb=this.trackDatas.find((wb=>wb.track===bb));Mb&&(Mb.closed=!0,"subtitle"===Mb.type&&"webvtt"===bb.source._codec&&await this.processWebVTTCues(Mb,1/0),this.processTimestamps(Mb)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),wb()}ensureOneEnabledTrack(){for(const bb of["video","audio","subtitle"]){const wb=this.trackDatas.filter((wb=>wb.type===bb));if(0===wb.length)continue;if(!wb.some((bb=>!1!==bb.track.metadata.disposition?.default))){const bb=wb[0];bb.track.metadata.disposition={...bb.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){cb(this.isFragmented);const bb=await this.mutex.acquire();try{for(const bb of this.trackDatas)"subtitle"===bb.type&&"webvtt"===bb.track.source._codec&&await this.processWebVTTCues(bb,1/0),this.processTimestamps(bb);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{bb()}}async finalize(){const bb=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const Mb of this.trackDatas)Mb.closed=!0,"subtitle"===Mb.type&&"webvtt"===Mb.track.source._codec&&await this.processWebVTTCues(Mb,1/0),this.processTimestamps(Mb);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const Mb of this.trackDatas){await this.finalizeCurrentChunk(Mb);const bb=GH(Mb);if(bb>0){let wb=0;for(const bb of Mb.samples)wb+=bb.size;Mb.avgBitrate=Math.round(8*wb/bb)}else Mb.avgBitrate=0;let wb=0,eb=0,Hb=0;for(let pb=0;pb<Mb.samples.length;pb++){const bb=Mb.samples[pb];for(eb+=bb.size;bb.decodeTimestamp-Mb.samples[wb].decodeTimestamp>=1;)eb-=Mb.samples[wb].size,wb++;Hb=Math.max(Hb,eb)}if(Mb.maxBitrate=8*Hb,null!==Mb.startTimestampOffset)for(let pb=0;pb<Mb.samples.length;pb++){const bb=Mb.samples[pb];bb.timestamp-=Mb.startTimestampOffset,bb.decodeTimestamp-=Mb.startTimestampOffset}}if(cb(this.writer),cb(this.boxWriter),"in-memory"===this.fastStart){let bb;this.mdat=Le(!1);for(let Mb=0;Mb<2;Mb++){const wb=Ie(this),Mb=this.boxWriter.measureBox(wb);bb=this.boxWriter.measureBox(this.mdat);let eb=this.writer.getPos()+Mb+bb;for(const Hb of this.finalizedChunks){Hb.offset=eb;for(const{data:wb}of Hb.samples)cb(wb),eb+=wb.byteLength,bb+=wb.byteLength}if(eb<2**32)break;bb>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const wb=Ie(this);if(this.boxWriter.writeBox(wb),this.formatOptions.onMoov){const{data:bb,start:wb}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(bb,wb)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=bb,this.boxWriter.writeBox(this.mdat);for(const Mb of this.finalizedChunks)for(const bb of Mb.samples)cb(bb.data),this.writer.write(bb.data),bb.data=null;if(this.formatOptions.onMdat){const{data:bb,start:wb}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(bb,wb)}}else if(this.isFragmented)if(this.isCmaf){const bb=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(ge()),this.boxWriter.writeBox(le(this,bb))}else{const bb=this.writer.getPos(),Mb=(wb=this.trackDatas,pe("mfra",void 0,[...wb.map(lH),LH()]));this.boxWriter.writeBox(Mb);const eb=this.writer.getPos()-bb;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(eb)}else{cb(this.mdat);const bb=this.boxWriter.offsets.get(this.mdat);cb(void 0!==bb);const wb=this.writer.getPos()-bb;if(this.mdat.size=wb,this.mdat.largeSize=wb>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:bb,start:wb}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(bb,wb)}const Mb=Ie(this);if("reserve"===this.fastStart){cb(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(Mb);const bb=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:bb})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(Mb);if(this.formatOptions.onMoov){const{data:bb,start:wb}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(bb,wb)}}var wb;bb()}}var aH;!function(bb){bb[bb.EBML=440786851]="EBML",bb[bb.EBMLVersion=17030]="EBMLVersion",bb[bb.EBMLReadVersion=17143]="EBMLReadVersion",bb[bb.EBMLMaxIDLength=17138]="EBMLMaxIDLength",bb[bb.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",bb[bb.DocType=17026]="DocType",bb[bb.DocTypeVersion=17031]="DocTypeVersion",bb[bb.DocTypeReadVersion=17029]="DocTypeReadVersion",bb[bb.Void=236]="Void",bb[bb.Segment=408125543]="Segment",bb[bb.SeekHead=290298740]="SeekHead",bb[bb.Seek=19899]="Seek",bb[bb.SeekID=21419]="SeekID",bb[bb.SeekPosition=21420]="SeekPosition",bb[bb.Duration=17545]="Duration",bb[bb.Info=357149030]="Info",bb[bb.TimestampScale=2807729]="TimestampScale",bb[bb.MuxingApp=19840]="MuxingApp",bb[bb.WritingApp=22337]="WritingApp",bb[bb.Tracks=374648427]="Tracks",bb[bb.TrackEntry=174]="TrackEntry",bb[bb.TrackNumber=215]="TrackNumber",bb[bb.TrackUID=29637]="TrackUID",bb[bb.TrackType=131]="TrackType",bb[bb.FlagEnabled=185]="FlagEnabled",bb[bb.FlagDefault=136]="FlagDefault",bb[bb.FlagForced=21930]="FlagForced",bb[bb.FlagOriginal=21934]="FlagOriginal",bb[bb.FlagHearingImpaired=21931]="FlagHearingImpaired",bb[bb.FlagVisualImpaired=21932]="FlagVisualImpaired",bb[bb.FlagCommentary=21935]="FlagCommentary",bb[bb.FlagLacing=156]="FlagLacing",bb[bb.Name=21358]="Name",bb[bb.Language=2274716]="Language",bb[bb.LanguageBCP47=2274717]="LanguageBCP47",bb[bb.CodecID=134]="CodecID",bb[bb.CodecPrivate=25506]="CodecPrivate",bb[bb.CodecDelay=22186]="CodecDelay",bb[bb.SeekPreRoll=22203]="SeekPreRoll",bb[bb.DefaultDuration=2352003]="DefaultDuration",bb[bb.Video=224]="Video",bb[bb.PixelWidth=176]="PixelWidth",bb[bb.PixelHeight=186]="PixelHeight",bb[bb.DisplayWidth=21680]="DisplayWidth",bb[bb.DisplayHeight=21690]="DisplayHeight",bb[bb.DisplayUnit=21682]="DisplayUnit",bb[bb.AlphaMode=21440]="AlphaMode",bb[bb.Audio=225]="Audio",bb[bb.SamplingFrequency=181]="SamplingFrequency",bb[bb.Channels=159]="Channels",bb[bb.BitDepth=25188]="BitDepth",bb[bb.SimpleBlock=163]="SimpleBlock",bb[bb.BlockGroup=160]="BlockGroup",bb[bb.Block=161]="Block",bb[bb.BlockAdditions=30113]="BlockAdditions",bb[bb.BlockMore=166]="BlockMore",bb[bb.BlockAdditional=165]="BlockAdditional",bb[bb.BlockAddID=238]="BlockAddID",bb[bb.BlockDuration=155]="BlockDuration",bb[bb.ReferenceBlock=251]="ReferenceBlock",bb[bb.Cluster=524531317]="Cluster",bb[bb.Timestamp=231]="Timestamp",bb[bb.Cues=475249515]="Cues",bb[bb.CuePoint=187]="CuePoint",bb[bb.CueTime=179]="CueTime",bb[bb.CueTrackPositions=183]="CueTrackPositions",bb[bb.CueTrack=247]="CueTrack",bb[bb.CueClusterPosition=241]="CueClusterPosition",bb[bb.Colour=21936]="Colour",bb[bb.MatrixCoefficients=21937]="MatrixCoefficients",bb[bb.TransferCharacteristics=21946]="TransferCharacteristics",bb[bb.Primaries=21947]="Primaries",bb[bb.Range=21945]="Range",bb[bb.Projection=30320]="Projection",bb[bb.ProjectionType=30321]="ProjectionType",bb[bb.ProjectionPoseYaw=30323]="ProjectionPoseYaw",bb[bb.ProjectionPosePitch=30324]="ProjectionPosePitch",bb[bb.ProjectionPoseRoll=30325]="ProjectionPoseRoll",bb[bb.Attachments=423732329]="Attachments",bb[bb.AttachedFile=24999]="AttachedFile",bb[bb.FileDescription=18046]="FileDescription",bb[bb.FileName=18030]="FileName",bb[bb.FileMediaType=18016]="FileMediaType",bb[bb.FileData=18012]="FileData",bb[bb.FileUID=18094]="FileUID",bb[bb.Chapters=272869232]="Chapters",bb[bb.Tags=307544935]="Tags",bb[bb.Tag=29555]="Tag",bb[bb.Targets=25536]="Targets",bb[bb.TargetTypeValue=26826]="TargetTypeValue",bb[bb.TargetType=25546]="TargetType",bb[bb.TagTrackUID=25541]="TagTrackUID",bb[bb.TagEditionUID=25545]="TagEditionUID",bb[bb.TagChapterUID=25540]="TagChapterUID",bb[bb.TagAttachmentUID=25542]="TagAttachmentUID",bb[bb.SimpleTag=26568]="SimpleTag",bb[bb.TagName=17827]="TagName",bb[bb.TagLanguage=17530]="TagLanguage",bb[bb.TagString=17543]="TagString",bb[bb.TagBinary=17541]="TagBinary",bb[bb.ContentEncodings=28032]="ContentEncodings",bb[bb.ContentEncoding=25152]="ContentEncoding",bb[bb.ContentEncodingOrder=20529]="ContentEncodingOrder",bb[bb.ContentEncodingScope=20530]="ContentEncodingScope",bb[bb.ContentCompression=20532]="ContentCompression",bb[bb.ContentCompAlgo=16980]="ContentCompAlgo",bb[bb.ContentCompSettings=16981]="ContentCompSettings",bb[bb.ContentEncryption=20533]="ContentEncryption"}(aH||(aH={}));aH.EBML,aH.Segment,aH.SeekHead,aH.Info,aH.Cluster,aH.Tracks,aH.Cues,aH.Attachments,aH.Chapters,aH.Tags;const iH=new Uint32Array(256);for(let Yp=0;Yp<256;Yp++){let bb=Yp<<24;for(let wb=0;wb<8;wb++)bb=2147483648&bb?bb<<1^79764919:bb<<1;iH[Yp]=bb>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const uH=new Uint32Array(256);for(let Yp=0;Yp<256;Yp++){let bb=Yp<<24;for(let wb=0;wb<8;wb++)bb=2147483648&bb?bb<<1^79764919:bb<<1;uH[Yp]=bb>>>0&4294967295}const dH=bb=>{let wb=4294967295;for(let Mb=0;Mb<bb.length;Mb++){const eb=bb[Mb];wb=(wb<<8^uH[wb>>>24^eb])>>>0}return wb},PH=new Uint8Array(16);{const bb=Gb(PH);PH[0]=0,bb.setUint16(1,45069,!1),bb.setUint16(3,1,!1),PH[5]=193,PH[6]=0,PH[7]=0,bb.setUint16(8,1,!1),bb.setUint16(10,61440,!1),bb.setUint32(12,dH(PH.subarray(0,12)),!1)}const nH=new Uint8Array(0);class yH{constructor(bb,wb,Mb,eb){let Hb=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,pb=arguments.length>5?arguments[5]:void 0,Vb=arguments.length>6?arguments[6]:void 0;if(this.data=bb,this.type=wb,this.timestamp=Mb,this.duration=eb,this.sequenceNumber=Hb,bb===nH&&void 0===pb)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===pb&&(pb=bb.byteLength),!(bb instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==wb&&"delta"!==wb)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(Mb))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(eb)||eb<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(Hb))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(pb)||pb<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==Vb&&("object"!==typeof Vb||!Vb))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==Vb?.alpha&&!(Vb.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==Vb?.alphaByteLength&&(!Number.isInteger(Vb.alphaByteLength)||Vb.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=pb,this.sideData=Vb??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===nH}get microsecondTimestamp(){return Math.trunc(ew*this.timestamp)}get microsecondDuration(){return Math.trunc(ew*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:bb,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(bb,wb){if(!(bb instanceof EncodedVideoChunk||bb instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const Mb=new Uint8Array(bb.byteLength);return bb.copyTo(Mb),new yH(Mb,bb.type,bb.timestamp/1e6,(bb.duration??0)/1e6,void 0,void 0,wb)}clone(bb){if(void 0!==bb&&("object"!==typeof bb||null===bb))throw new TypeError("options, when provided, must be an object.");if(void 0!==bb?.data&&!(bb.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==bb?.type&&"key"!==bb.type&&"delta"!==bb.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==bb?.timestamp&&!Number.isFinite(bb.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==bb?.duration&&!Number.isFinite(bb.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==bb?.sequenceNumber&&!Number.isFinite(bb.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==bb?.sideData&&("object"!==typeof bb.sideData||null===bb.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new yH(bb?.data??this.data,bb?.type??this.type,bb?.timestamp??this.timestamp,bb?.duration??this.duration,bb?.sequenceNumber??this.sequenceNumber,this.byteLength,bb?.sideData??this.sideData)}}var oH;!function(bb){bb[bb.PCM=1]="PCM",bb[bb.IEEE_FLOAT=3]="IEEE_FLOAT",bb[bb.ALAW=6]="ALAW",bb[bb.MULAW=7]="MULAW",bb[bb.EXTENSIBLE=65534]="EXTENSIBLE"}(oH||(oH={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let TH=-1/0,kH=-1/0,bp=null;"undefined"!==typeof FinalizationRegistry&&(bp=new FinalizationRegistry((bb=>{const wb=performance.now();"video"===bb.type?(wb-TH>=1e3&&(Xw._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),TH=wb),"undefined"!==typeof VideoFrame&&bb.data instanceof VideoFrame&&bb.data.close()):(wb-kH>=1e3&&(Xw._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),kH=wb),"undefined"!==typeof AudioData&&bb.data instanceof AudioData&&bb.data.close())})));const wp=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(wp);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class Mp{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(bb){}close(){if(this._closingPromise)return;const bb=this._connectedTrack;if(!bb)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===bb.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==bb.output.state&&"finalized"!==bb.output.state&&bb.output._muxer.onTrackClose(bb)})()}async _flushOrWaitForOngoingClose(bb){return this._closingPromise??=(async()=>{await this._flushAndClose(bb),this._closed=!0})()}}class ep extends Mp{constructor(bb){if(super(),!IM.includes(bb))throw new TypeError(`Invalid video codec \'${bb}\'. Must be one of: ${IM.join(", ")}.`);this._codec=bb}}const Hp=(bb,wb)=>{if(bb.metadata.hasOnlyKeyPackets&&"key"!==wb.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class pp extends ep{constructor(bb){super(bb)}add(bb,wb){if(!(bb instanceof yH))throw new TypeError("packet must be an EncodedPacket.");if(bb.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==wb&&(!wb||"object"!==typeof wb))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),Hp(this._connectedTrack,bb),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,bb,wb)}}class Vp extends Mp{constructor(bb){if(super(),!tM.includes(bb))throw new TypeError(`Invalid audio codec \'${bb}\'. Must be one of: ${tM.join(", ")}.`);this._codec=bb}}class gp extends Mp{constructor(bb){if(super(),!CM.includes(bb))throw new TypeError(`Invalid subtitle codec \'${bb}\'. Must be one of: ${CM.join(", ")}.`);this._codec=bb}}class lp{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((bb=>IM.includes(bb)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((bb=>tM.includes(bb)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((bb=>CM.includes(bb)))}_codecUnsupportedHint(bb){return""}_isFragmentedIsobmff(){return!1}}class Lp extends lp{constructor(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!bb||"object"!==typeof bb)throw new TypeError("options must be an object.");if(void 0!==bb.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(bb.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==bb.minimumFragmentDuration&&(!gw(bb.minimumFragmentDuration)||bb.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==bb.onFtyp&&"function"!==typeof bb.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==bb.onMoov&&"function"!==typeof bb.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==bb.onMdat&&"function"!==typeof bb.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==bb.onMoof&&"function"!==typeof bb.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==bb.metadataFormat&&!["mdir","mdta","udta","auto"].includes(bb.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=bb}getSupportedTrackCounts(){const bb=2**32-1;return{video:{min:0,max:bb},audio:{min:0,max:bb},subtitle:{min:0,max:bb},total:{min:0,max:bb}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(bb){return new qH(bb,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class Ip extends Lp{constructor(bb){super(bb)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...IM,...UM,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...CM]}_codecUnsupportedHint(bb){return(new Up).getSupportedCodecs().includes(bb)?" Switching to MOV will grant support for this codec.":""}}class Op extends Lp{constructor(bb){super(bb)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...IM,...UM,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...CM]}}class Up extends Lp{constructor(bb){super(bb)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...IM,...tM]}_codecUnsupportedHint(bb){return(new Ip).getSupportedCodecs().includes(bb)?" Switching to MP4 will grant support for this codec.":""}}const tp=["video","audio","subtitle"];class Cp{constructor(bb,wb,Mb,eb,Hb){this.id=bb,this.output=wb,this.type=Mb,this.source=eb,this.metadata=Hb}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(bb){if(!(bb instanceof Cp))throw new TypeError("other must be an OutputTrack.");if(this===bb)return!1;const wb=Lw(this.metadata.group),Mb=Lw(bb.metadata.group);for(const eb of wb){if(this.type!==bb.type&&Mb.some((bb=>eb===bb)))return!0;if(Mb.some((bb=>eb._pairedGroups.has(bb))))return!0}return!1}}class Ep extends Cp{constructor(bb,wb,Mb,eb){super(bb,wb,"video",Mb,eb)}}class Fp extends Cp{constructor(bb,wb,Mb,eb){super(bb,wb,"audio",Mb,eb)}}class Bp extends Cp{constructor(bb,wb,Mb,eb){super(bb,wb,"subtitle",Mb,eb)}}class sp{constructor(){this._pairedGroups=new Set}pairWith(bb){if(!(bb instanceof sp))throw new TypeError("other must be an OutputTrackGroup.");if(this===bb)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(bb),bb._pairedGroups.add(this)}}const mp=bb=>{if(!bb||"object"!==typeof bb)throw new TypeError("metadata must be an object.");if(void 0!==bb.languageCode&&(wb=bb.languageCode,!Mw.test(wb)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var wb;if(void 0!==bb.name&&"string"!==typeof bb.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==bb.disposition&&(bb=>{if(!bb||"object"!==typeof bb)throw new TypeError("disposition must be an object.");if(void 0!==bb.default&&"boolean"!==typeof bb.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==bb.primary&&"boolean"!==typeof bb.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==bb.forced&&"boolean"!==typeof bb.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==bb.original&&"boolean"!==typeof bb.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==bb.commentary&&"boolean"!==typeof bb.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==bb.hearingImpaired&&"boolean"!==typeof bb.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==bb.visuallyImpaired&&"boolean"!==typeof bb.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(bb.disposition),void 0!==bb.maximumPacketCount&&(!Number.isInteger(bb.maximumPacketCount)||bb.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==bb.bitrate&&(!Number.isFinite(bb.bitrate)||bb.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==bb.averageBitrate&&(!Number.isFinite(bb.averageBitrate)||bb.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==bb.group&&!(bb.group instanceof sp)&&(!Array.isArray(bb.group)||bb.group.some((bb=>!(bb instanceof sp)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class hp extends Iw{get target(){const bb="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(bb);const wb=this._getRootTarget();if(pw(wb))throw new TypeError(bb);return wb}constructor(bb){if(super(),this.state="pending",this.defaultTrackGroup=new sp,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new yb,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!bb||"object"!==typeof bb)throw new TypeError("options must be an object.");if(!(bb.format instanceof lp))throw new TypeError("options.format must be an OutputFormat.");if(!(bb.target instanceof cH||bb.target instanceof JH))throw new TypeError("options.target must be a Target or a PathedTarget.");if(bb.target instanceof cH&&this._rememberTarget(bb.target),void 0!==bb.initTarget&&!(bb.initTarget instanceof cH)&&"function"!==typeof bb.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==bb.onFinalize&&"function"!==typeof bb.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=bb.format,this.mO=bb.target,this._onFinalize=bb.onFinalize??null,this._initTarget=bb.initTarget??null,this._initTarget instanceof cH&&this._rememberTarget(this._initTarget),this._muxer=bb.format._createMuxer(this)}_getTargetValidated(bb){cb(this.mO instanceof JH);const wb=this.mO.getTarget(bb),Mb=bb=>{if(!(bb instanceof cH))throw new TypeError("getTarget must return a Target.");return bb};return pw(wb)?wb.then(Mb):Mb(wb)}async _getTarget(bb){cb(this.mO instanceof JH);const wb=await this._getTargetValidated(bb);return this._emit("target",{target:wb,request:bb,isRoot:bb.isRoot}),"canceled"===this.state?await wb._close():this._rememberTarget(wb),wb}_rememberTarget(bb){this._unfinalizedTargets.add(bb),bb.on("finalized",(()=>this._unfinalizedTargets.delete(bb)),{once:!0})}async _getInitTarget(){if(cb(null!==this._initTarget),this._initTarget instanceof cH)return this._initTarget;const bb=await this._initTarget();return"canceled"===this.state?await bb._close():this._rememberTarget(bb),bb}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.mO instanceof cH)return this._emit("target",{target:this.mO,request:null,isRoot:!0}),this._rootTarget=this.mO,this.mO;const bb={path:this.mO.rootPath,isRoot:!0,mimeType:this.format.mimeType},wb=this._getTargetValidated(bb),Mb=wb=>("canceled"===this.state?wb._close():this._rememberTarget(wb),this._emit("target",{target:wb,request:bb,isRoot:!0}),this._rootTarget=wb,wb);return pw(wb)?this._rootTargetPromise=wb.then(Mb):Mb(wb)}_getRootWriter(bb){return this._rootWriterPromise??=(async()=>{const wb=await this._getRootTarget(),Mb=new DH(wb,"boolean"===typeof bb?bb:bb(wb));return Mb.start(),Mb})()}addVideoTrack(bb){let wb=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(bb instanceof ep))throw new TypeError("source must be a VideoSource.");if(mp(wb),void 0!==wb.rotation&&![0,90,180,270].includes(wb.rotation))throw new TypeError(`Invalid video rotation: ${wb.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==wb.flip&&"boolean"!==typeof wb.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==wb.transformationMatrix&&(!Array.isArray(wb.transformationMatrix)||9!==wb.transformationMatrix.length||!wb.transformationMatrix.every((bb=>Number.isFinite(bb)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==wb.frameRate&&(!Number.isFinite(wb.frameRate)||wb.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${wb.frameRate}. Must be a positive number.`);if(void 0!==wb.hasOnlyKeyPackets&&"boolean"!==typeof wb.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==wb.canBeTransparent&&"boolean"!==typeof wb.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==wb.decoderConfig&&RM({decoderConfig:wb.decoderConfig},bb._codec),void 0!==wb.primingPacket){if(!(wb.primingPacket instanceof yH))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===wb.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const Mb={...wb};return Mb.group??=this.defaultTrackGroup,this._addTrack(new Ep(this.tracks.length+1,this,bb,Mb))}addAudioTrack(bb){let wb=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(bb instanceof Vp))throw new TypeError("source must be an AudioSource.");if(mp(wb),void 0!==wb.decoderConfig&&cM({decoderConfig:wb.decoderConfig},bb._codec),void 0!==wb.primingPacket){if(!(wb.primingPacket instanceof yH))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===wb.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const Mb={...wb};return Mb.group??=this.defaultTrackGroup,this._addTrack(new Fp(this.tracks.length+1,this,bb,Mb))}addSubtitleTrack(bb){let wb=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(bb instanceof gp))throw new TypeError("source must be a SubtitleSource.");mp(wb);const Mb={...wb};return Mb.group??=this.defaultTrackGroup,this._addTrack(new Bp(this.tracks.length+1,this,bb,Mb))}setMetadataTags(bb){if((bb=>{if(!bb||"object"!==typeof bb)throw new TypeError("tags must be an object.");if(void 0!==bb.title&&"string"!==typeof bb.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==bb.description&&"string"!==typeof bb.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==bb.artist&&"string"!==typeof bb.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==bb.album&&"string"!==typeof bb.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==bb.albumArtist&&"string"!==typeof bb.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==bb.trackNumber&&(!Number.isInteger(bb.trackNumber)||bb.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==bb.tracksTotal&&(!Number.isInteger(bb.tracksTotal)||bb.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==bb.discNumber&&(!Number.isInteger(bb.discNumber)||bb.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==bb.discsTotal&&(!Number.isInteger(bb.discsTotal)||bb.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==bb.genre&&"string"!==typeof bb.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==bb.date&&(!(bb.date instanceof Date)||Number.isNaN(bb.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==bb.beatsPerMinute&&(!Number.isInteger(bb.beatsPerMinute)||bb.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==bb.lyrics&&"string"!==typeof bb.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==bb.images){if(!Array.isArray(bb.images))throw new TypeError("tags.images, when provided, must be an array.");for(const wb of bb.images){if(!wb||"object"!==typeof wb)throw new TypeError("Each image in tags.images must be an object.");if(!(wb.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof wb.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(wb.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==bb.comment&&"string"!==typeof bb.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==bb.raw){if(!bb.raw||"object"!==typeof bb.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const wb of Object.values(bb.raw))if(null!==wb&&"string"!==typeof wb&&(!Array.isArray(wb)||!wb.every((bb=>"string"===typeof bb)))&&!(wb instanceof Uint8Array)&&!(wb instanceof Uw)&&!(wb instanceof tw)&&!Ow(wb))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(bb),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=bb}_addTrack(bb){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(bb.source._connectedTrack)throw new Error("Source is already used for a track.");const wb=this.format.getSupportedTrackCounts(),Mb=this.tracks.reduce(((wb,Mb)=>wb+(Mb.type===bb.type?1:0)),0),eb=wb[bb.type].max;if(Mb===eb)throw new Error(0===eb?`${this.format._name} does not support ${bb.type} tracks.`:`${this.format._name} does not support more than ${eb} ${bb.type} track`+(1===eb?"":"s")+".");const Hb=wb.total.max;if(this.tracks.length===Hb)throw new Error(`${this.format._name} does not support more than ${Hb} tracks`+(1===Hb?"":"s")+" in total.");if(bb.isVideoTrack()){const wb=this.format.getSupportedVideoCodecs();if(0===wb.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(bb.source._codec));if(!wb.includes(bb.source._codec))throw new Error(`Codec \'${bb.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${wb.map((bb=>`\'${bb}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(bb.source._codec))}else if(bb.isAudioTrack()){const wb=this.format.getSupportedAudioCodecs();if(0===wb.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(bb.source._codec));if(!wb.includes(bb.source._codec))throw new Error(`Codec \'${bb.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${wb.map((bb=>`\'${bb}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(bb.source._codec))}else if(bb.isSubtitleTrack()){const wb=this.format.getSupportedSubtitleCodecs();if(0===wb.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(bb.source._codec));if(!wb.includes(bb.source._codec))throw new Error(`Codec \'${bb.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${wb.map((bb=>`\'${bb}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(bb.source._codec))}return this.tracks.push(bb),bb.source._connectedTrack=bb,bb}hasEnoughTracks(){const bb=this.format.getSupportedTrackCounts();for(const Mb of tp){if(this.tracks.reduce(((bb,wb)=>bb+(wb.type===Mb?1:0)),0)<bb[Mb].min)return!1}const wb=bb.total.min;return!(this.tracks.length<wb)}async start(){const bb=this.format.getSupportedTrackCounts();for(const Mb of tp){const wb=this.tracks.reduce(((bb,wb)=>bb+(wb.type===Mb?1:0)),0),eb=bb[Mb].min;if(wb<eb)throw new Error(eb===bb[Mb].max?`${this.format._name} requires exactly ${eb} ${Mb} track${1===eb?"":"s"}.`:`${this.format._name} requires at least ${eb} ${Mb} track${1===eb?"":"s"}.`)}const wb=bb.total.min;if(this.tracks.length<wb)throw new Error(wb===bb.total.max?`${this.format._name} requires exactly ${wb} track`+(1===wb?"":"s")+".":`${this.format._name} requires at least ${wb} track`+(1===wb?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(Xw._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const bb=this._mutex.acquire();try{await this._muxer.start();const bb=this.tracks.map((bb=>bb.source._start()));await Promise.all(bb)}finally{(await bb)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const bb=await this._mutex.acquire();try{const bb=this.tracks.map((bb=>bb.source._flushOrWaitForOngoingClose(!0)));await Promise.all(bb),await Promise.all([...this._unfinalizedTargets].map((bb=>bb._close()))),this._unfinalizedTargets.clear()}finally{bb()}})():void("finalized"===this.state&&Xw._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(Xw._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const bb=await this._mutex.acquire();try{const bb=this.tracks.map((bb=>bb.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(bb),await this._muxer.finalize(),this._rootWriterPromise){const bb=await this._rootWriterPromise;bb.finalized||(await bb.flush(),await bb.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(wb){throw this.state="canceled",wb}finally{await Promise.all([...this._unfinalizedTargets].map((bb=>bb._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),bb()}})()}}class zp{constructor(bb,wb,Mb,eb,Hb){this.frameDurationS=Mb,this.onFragment=Hb,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=wb,this.lastTimestampUs=wb;const pb=bb=>{this.boxes.push(bb)};this.output=new hp({format:new Ip({fastStart:"fragmented",minimumFragmentDuration:eb,onFtyp:pb,onMoov:pb,onMoof:pb,onMdat:bb=>{pb(bb),this.fragmentDone()}}),target:new AH}),this.source=new pp(bb),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(bb,wb){const Mb=new Uint8Array(bb.byteLength);bb.copyTo(Mb),this.addData(Mb,bb.type,bb.timestamp,wb)}addData(bb,wb,Mb,eb){const Hb=new yH(bb,wb,(Mb-this.firstTimestampUs)/1e6,this.frameDurationS),pb=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,Mb),this.pending=this.pending.then((()=>(this.addingTimestampUs=Mb,this.source.add(Hb,pb?{decoderConfig:eb}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var bb;const wb=Xp(this.boxes);this.boxes=[],this.onFragment({bytes:wb,endUs:null!==(bb=this.addingTimestampUs)&&void 0!==bb?bb:this.lastTimestampUs+1e6*this.frameDurationS})}}function Xp(bb){const wb=new Uint8Array(bb.reduce(((bb,wb)=>bb+wb.byteLength),0));let Mb=0;for(const eb of bb)wb.set(eb,Mb),Mb+=eb.byteLength;return wb}class xp{constructor(bb,wb,Mb,eb){this.plan=bb,this.emit=Mb,this.onSlotsLow=eb,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=wb}get partCount(){return this.nextIndex}addFragment(bb){let{bytes:wb,endUs:Mb}=bb;this.pendingBytes>0&&this.pendingBytes+wb.byteLength>this.plan.maxBytes&&this.emitPending();let eb=0;for(;wb.byteLength-eb>this.plan.maxBytes-this.pendingBytes;){const bb=this.plan.maxBytes-this.pendingBytes;this.hold(wb.subarray(eb,eb+bb)),eb+=bb,this.emitPending()}this.hold(wb.subarray(eb)),this.completeUntilUs=Mb,Mb-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(bb){this.pending.push(bb),this.pendingBytes+=bb.byteLength}emitPending(){var bb;const wb=Xp(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(bb=this.completeUntilUs)&&void 0!==bb?bb:this.partStartUs,this.emit({index:this.nextIndex++,bytes:wb,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class jp{constructor(bb,wb,Mb,eb){let Hb=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,pb=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=bb,this.partPlan=wb,this.post=Mb,this.onSegmentEncoded=eb,this.journal=Hb,this.onMuxFailed=pb,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(bb){const wb=Db()-bb;(wb<this.epochOffsetMs||wb-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=wb)}recordingMs(bb){return bb/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(bb){const wb=null===this.segment?0:(bb-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||wb>=this.segmentDurationMs))&&(this.pendingCutUs=bb);const Mb=this.keyFrameMissed||this.pendingCutUs===bb;return this.cutRequested=!1,this.keyFrameMissed=!1,Mb}onChunk(bb,wb,Mb){if(null!==wb&&void 0!==wb&&wb.decoderConfig&&(this.decoderConfig=wb.decoderConfig),null!==this.pendingCutUs&&bb.timestamp>=this.pendingCutUs){if("key"!==bb.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(bb.timestamp,Mb),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const eb=this.segment;if(null===eb.journalHeader)return eb.mp4.add(bb,this.decoderConfig),bb.byteLength;const Hb=new Uint8Array(bb.byteLength);return bb.copyTo(Hb),eb.mp4.addData(Hb,bb.type,bb.timestamp,this.decoderConfig),eb.chunkTimestampsUs.push(bb.timestamp),eb.unjournaled.push({recordingId:eb.journalHeader.recordingId,segmentId:eb.journalId,index:eb.chunkCount++,timestampUs:bb.timestamp,key:"key"===bb.type,data:Hb}),performance.now()-eb.lastJournalMs>=250&&this.journalChunks(eb),bb.byteLength}openSegment(bb,wb){const Mb=this.nextJournalId++,eb=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:Mb,containerCodec:wb.containerCodec,codec:wb.codec,width:wb.width,height:wb.height,fps:wb.fps,decoderConfig:this.decoderConfig,firstTimestampUs:bb,epochOffsetMs:this.epochOffsetMs}:null,Hb=[],pb=new xp(this.partPlan,bb,(pb=>{this.postPart(Mb,wb,bb,pb,null===eb?null:Hb)}),(()=>{var bb;(null===(bb=this.segment)||void 0===bb?void 0:bb.journalId)===Mb&&this.requestCut()})),Vb=this.partPlan.keyframeIntervalMs/1e3*.9,gb=new zp(wb.containerCodec,bb,1/wb.fps,Vb,(bb=>{pb.addFragment(bb)}));return this.post({type:"videoSegmentOpened",journalId:Mb}),{mp4:gb,parts:pb,format:wb,journalId:Mb,journalHeader:eb,unjournaled:[],chunkTimestampsUs:Hb,chunkCount:0,lastJournalMs:performance.now()}}postPart(bb,wb,Mb,eb,Hb){const{width:pb,height:Vb,codec:gb,fps:lb}=wb,{startMs:Lb}=function(bb,wb,Mb,eb){const Hb=bb/1e3+Mb;return{startMs:Hb,endMs:Hb+wb/1e3+1e3/eb}}(Mb,0,this.epochOffsetMs,lb),{completeUntilUs:Ib}=eb,Ob=null===Ib?Lb:this.recordingMs(Ib),Ub=eb.bytes.buffer,tb=null===Hb||null===Ib?null:function(bb,wb){let Mb=0,eb=bb.length;for(;Mb<eb;){const Hb=Mb+eb>>1;bb[Hb]<wb?Mb=Hb+1:eb=Hb}return Mb}(Hb,Ib);this.post({type:"videoPart",journalId:bb,index:eb.index,bytes:Ub,meta:{startMs:Lb,endMs:Ob,width:pb,height:Vb,codec:gb},completeUntilUs:Ib,completeUntilIndex:tb},[Ub])}journalChunks(bb){const wb=bb.journalHeader;null!==this.journal&&null!==wb&&0!==bb.unjournaled.length&&(wb.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...wb},bb.unjournaled),bb.unjournaled=[],bb.lastJournalMs=performance.now())}closeSegment(bb){const wb=this.segment;this.segment=null,this.pendingCutUs=null,null!==wb&&(bb&&this.onSegmentEncoded(),this.journalChunks(wb),this.finishing=this.finishing.then((async()=>{let bb=null;try{await wb.mp4.finish()}catch(Mb){bb=Mb}wb.parts.finish(),this.post({type:"videoSegmentClosed",journalId:wb.journalId,parts:wb.parts.partCount}),null!==bb&&(console.error("Failed to finish a session replay video segment.",bb),this.onMuxFailed(bb instanceof Error?bb.message:String(bb)))})).catch((bb=>{console.error("Failed to close a session replay video segment.",bb)})))}whenFinished(){return this.finishing}}function Kp(bb,wb){return null!==bb&&wb>=bb}class rp{constructor(bb,wb,Mb,eb,Hb){let pb=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=bb,this.cssSize=Mb,this.post=eb,this.encoderPreference=Hb,this.quality=new Ob,this.limiter=void 0,this.segmenter=void 0,this.scaler=new zb,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.capturePaused=!1,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new Fb(bb.maxFps),this.captureFps=bb.maxFps,this.segmenter=new jp(bb.segmentDurationMs,wb,eb,(()=>{this.encoderFailures=0}),pb,(bb=>{this.stopVideo(`Muxer failed: ${bb}`)})),this.still=new Kb(eb),this.stats=this.emptyStats()}handleFrame(bb,wb,Mb){const eb=performance.now();try{this.stats.deliveredFrames++;const Hb=bb.timestamp/1e3;if(this.segmenter.noteFrameArrival(Hb),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(Hb))return void this.stats.droppedForFpsCap++;if(this.still.offer(bb,this.segmenter.recordingMs(bb.timestamp)),null===Mb)return void(this.capturePaused||(this.capturePaused=!0,this.flushSegment()));if(this.capturePaused=!1,this.noteBackingSize(wb),this.noteCaptureFps(Mb,eb),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(Kp(this.rebuildDueMs,eb)||Kp(this.fpsRebuildDueMs,eb))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,bb)}finally{bb.close();const wb=performance.now()-eb;this.stats.workerBusyMs+=wb,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,wb),this.maybePostStats(eb)}}resize(bb){0!==bb.width&&0!==bb.height&&(this.cssSize=bb,this.scheduleRebuildIfSizeChanged())}updateHealth(bb,wb){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const Mb=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:bb,pingMs:wb});this.backpressureDropsSinceHealth=0,Mb&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(bb){return this.hidden=bb,bb?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(bb){this.suspended=!0;const wb=this.operations.then(bb).catch((bb=>{console.error("Session replay encoder operation failed.",bb)})).finally((()=>{this.operations===wb&&(this.suspended=!1)}));return this.operations=wb,wb}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var bb;null===(bb=this.active)||void 0===bb||bb.encoder.close(),this.active=null}async drainAndCloseSegment(){const bb=this.active;null===bb||await async function(bb,wb){let Mb;const eb=new Promise((bb=>{Mb=setTimeout((()=>{bb(!1)}),wb)}));try{return await Promise.race([bb.then((()=>!0)),eb])}finally{clearTimeout(Mb)}}(bb.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(bb,"flush timed out")}encode(bb,wb){const Mb=this.segmenter.needsKeyFrame(wb.timestamp)||wb.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;Mb&&(this.lastKeyframeUs=wb.timestamp);const eb=this.scaleToEncoder(bb,wb);try{bb.encoder.encode(eb,{keyFrame:Mb})}catch(Hb){return void(Hb instanceof DOMException&&("InvalidStateError"===Hb.name||"EncodingError"===Hb.name)?this.failEncoder(bb,Hb.message):++this.refusedFrames>=30?this.failEncoder(bb,`refused 30 frames in a row: ${String(Hb)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",Hb))}finally{eb!==wb&&eb.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(bb,wb){let Mb=wb;if(!this.scalerFailed)try{Mb=this.scaler.scale(wb,bb.size)}catch(eb){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",eb)}return Mb.displayWidth===bb.size.width&&Mb.displayHeight===bb.size.height||(bb.sentMismatchedFrame=!0),Mb}onEncoderOutput(bb,wb,Mb){const eb=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(bb,wb,{containerCodec:Mb.candidate.containerCodec,codec:Mb.candidate.config.codec,width:Mb.size.width,height:Mb.size.height,fps:Mb.fps}),this.stats.workerBusyMs+=performance.now()-eb}noteBackingSize(bb){null!==this.backingSize&&Ub(this.backingSize,bb)||(this.backingSize=bb,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(bb,wb){this.captureFps=bb,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=wb+2e3:this.fpsRebuildDueMs=null}targetSize(){var bb;const wb=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(bb,wb,Mb){const eb=wb.width*wb.height<bb.width*bb.height?wb:bb;let Hb=tb(Math.max(eb.width,64)),pb=tb(Math.max(eb.height,64));if(Cb({width:Hb,height:pb})>Mb){const bb=Hb,wb=pb;for(Hb=tb(Hb*Math.sqrt(16*Mb*16/(Hb*pb))),pb=tb(Hb*wb/bb);Cb({width:Hb,height:pb})>Mb;)Hb-=2,pb=tb(Hb*wb/bb)}return{width:Hb,height:pb}}(this.cssSize,null!==(bb=this.backingSize)&&void 0!==bb?bb:this.cssSize,wb)}scheduleRebuildIfSizeChanged(){null===this.active||Ub(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const bb=this.quality.getLevel(),wb=this.encodeFps(),Mb=this.targetSize(),eb=function(bb){const wb={width:bb.width,height:bb.height,bitrate:bb.bitrate,framerate:bb.maxFps},Mb=[],eb=[bb.preferSoftware?"prefer-software":"prefer-hardware","no-preference"],Hb=bb.preferQualityLatency?hb:mb;for(const pb of eb)for(const bb of Bb)for(const eb of sb)for(const Vb of Hb)Mb.push({config:{...wb,codec:bb,hardwareAcceleration:pb,bitrateMode:eb,latencyMode:Vb,avc:{format:"avc"}},containerCodec:"avc"});return Mb.push({config:{...wb,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),Mb}({...Mb,bitrate:Math.round(Eb(this.config,Mb,bb.areaScale)*wb/this.config.maxFps),maxFps:wb,...this.encoderPreference});let Hb=null,pb=0;for(let Lb=this.firstViableCandidate;Lb<eb.length&&null===Hb;Lb++){const bb=await VideoEncoder.isConfigSupported(eb[Lb].config).catch((bb=>(console.warn("VideoEncoder.isConfigSupported threw.",eb[Lb].config,bb),null)));null!==bb&&void 0!==bb&&bb.supported&&(Hb=eb[Lb],pb=Lb,this.firstViableCandidate=Lb)}if(null===Hb)return void this.markUnavailable(`No supported encoder config at ${Mb.width}x${Mb.height}`);const Vb=new VideoEncoder({output:(bb,wb)=>{this.onEncoderOutput(bb,wb,gb)},error:bb=>{this.failEncoder(gb,bb.message)}}),gb={encoder:Vb,candidates:eb,candidateIndex:pb,candidate:Hb,size:Mb,fps:wb,sentMismatchedFrame:!1};this.active=gb,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{Vb.configure(Hb.config)}catch(lb){return void this.failEncoder(gb,lb instanceof Error?lb.message:String(lb))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(bb,wb){console.error("Session replay encoder failed.",bb.candidate.config,wb),this.active===bb&&(this.active=null,"closed"!==bb.encoder.state&&bb.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(bb,wb,Mb){var eb;let Hb=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const pb=null===(eb=bb[wb])||void 0===eb?void 0:eb.config.hardwareAcceleration;if(!("prefer-hardware"===pb&&Mb||"no-preference"!==pb&&Hb))return wb+1;for(let Vb=wb+1;Vb<bb.length;Vb++)if(bb[Vb].config.hardwareAcceleration!==pb)return Vb;return bb.length}(bb.candidates,bb.candidateIndex,bb.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${wb}`))}stopVideo(bb){if(this.unavailable)return;const wb=this.active;this.active=null,null!==wb&&"closed"!==wb.encoder.state&&wb.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(bb)}markUnavailable(bb){console.warn(`Session replay video stopped: ${bb}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:bb})}))}maybePostStats(bb){var wb,Mb,eb,Hb;const pb=bb-this.statsWindowStartMs;if(pb<5e3)return;const Vb=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:pb,qualityLevel:this.quality.getLevelIndex(),codec:null!==(wb=null===Vb||void 0===Vb?void 0:Vb.candidate.config.codec)&&void 0!==wb?wb:null,hardwareAcceleration:null!==(Mb=null===Vb||void 0===Vb?void 0:Vb.candidate.config.hardwareAcceleration)&&void 0!==Mb?Mb:null,encodeWidth:null!==(eb=null===Vb||void 0===Vb?void 0:Vb.size.width)&&void 0!==eb?eb:0,encodeHeight:null!==(Hb=null===Vb||void 0===Vb?void 0:Vb.size.height)&&void 0!==Hb?Hb:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=bb}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let Rp=null,Dp=0;function cp(bb){let wb=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(bb,{transfer:wb})}self.onmessage=bb=>{const wb=bb.data;switch(wb.type){case"init":Rp=new rp(wb.videoConfig,wb.partPlan,wb.cssSize,cp,wb.encoderPreference,wb.journalRecordingId&&Lb.supported?{recordingId:wb.journalRecordingId,journal:new Lb}:null);break;case"frame":if(null===Rp){console.warn("Session replay video worker got a frame before its pipeline started"),wb.image.close();break}!function(bb,wb,Mb,eb,Hb){if(wb instanceof VideoFrame)return void bb.handleFrame(wb,eb,Hb);let pb;try{pb=new VideoFrame(wb,{timestamp:Mb})}catch(Vb){return 0===Dp++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",Vb),void(30===Dp&&bb.stopVideo(`Bitmap frames keep failing: ${Vb instanceof Error?Vb.message:String(Vb)}`))}finally{wb.close()}Dp=0,bb.handleFrame(pb,eb,Hb)}(Rp,wb.image,wb.timestampUs,wb.AO,wb.captureFps);break;case"resize":Rp.resize(wb.cssSize);break;case"health":Rp.updateHealth(wb.gameFps,wb.pingMs);break;case"hidden":Rp.setHidden(wb.hidden);break;case"flush":Rp.flushSegment();break;case"cut":Rp.cutAtNextFrame();break;case"gameJoined":Rp.gameJoined()}}})();', "Worker", void 0, Mb.p + "sessionReplayVideo.worker.e7971ac7.worker.js")
    }

    function Iw(bb) {
      return Math.max(2, 2 * Math.floor(bb / 2))
    }

    function Ow(bb) {
      return Math.ceil(bb.width / 16) * Math.ceil(bb.height / 16)
    }
    class Uw {
      constructor(bb) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / bb
      }
      setMaxFps(bb) {
        this.intervalMs = 1e3 / bb
      }
      shouldKeep(bb) {
        return !(bb < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = bb - this.nextDueMs > this.intervalMs ? bb + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class tw {
      constructor(bb, wb, Mb) {
        this.budgetMsPerSecond = bb, this.minFps = wb, this.smoothedCostMs = Mb
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      get paused() {
        return this.affordableFps() < this.minFps
      }
      record(bb) {
        const wb = this.paused ? .5 : .05;
        this.smoothedCostMs += (bb - this.smoothedCostMs) * wb
      }
      maxFps(bb) {
        return this.paused ? .1 : Math.min(bb, this.affordableFps())
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class Cw {
      static isSupported() {
        const bb = globalThis.CanvasCaptureMediaStream;
        return ("undefined" !== typeof CanvasCaptureMediaStreamTrack && "requestFrame" in CanvasCaptureMediaStreamTrack.prototype || void 0 !== bb && "requestFrame" in bb.prototype) && "function" === typeof HTMLCanvasElement.prototype.captureStream && "requestVideoFrameCallback" in HTMLVideoElement.prototype
      }
      constructor(bb, wb, Mb) {
        this.onFrame = wb, this.stream = void 0, this.requester = void 0, this.video = document.createElement("video"), this.closed = !1, this.onVideoFrame = () => {
          this.closed || (this.onFrame(this.video), this.video.requestVideoFrameCallback(this.onVideoFrame))
        }, this.stream = bb.captureStream(0);
        const eb = this.stream.getVideoTracks()[0];
        this.requester = "requestFrame" in eb ? eb : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(Mb), this.video.requestVideoFrameCallback(this.onVideoFrame)
      }
      request() {
        this.requester.requestFrame()
      }
      close() {
        this.closed = !0;
        for (const bb of this.stream.getTracks()) bb.stop();
        this.video.srcObject = null
      }
    }
    class Ew {
      constructor(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = bb, this.grab = eb, this.onUnavailable = Hb, this.render = null, this.stream = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.loggedPause = !1, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = Mb.msPerSecond, this.frameCostFloorMs = Mb.frameCostFloorMs, this.budget = new tw(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = wb, this.captureFps = this.budgetedFps(), this.frameLimiter = new Uw(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps,
          grabPath: this.grab.path
        }
      }
      start(bb) {
        if (this.stop(), this.render = bb, "stream" === this.grab.path) {
          const wb = new Cw(bb.canvas, (bb => {
            this.onStreamFrame(bb)
          }), (bb => {
            this.stream === wb && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${bb instanceof Error?bb.message:String(bb)}`))
          }));
          this.stream = wb
        }
      }
      stop() {
        var bb;
        this.render = null, this.pendingGrab = null, null === (bb = this.stream) || void 0 === bb || bb.close(), this.stream = null
      }
      setMaxFps(bb) {
        this.wantedFps = bb, this.applyFps()
      }
      onAfterRender() {
        const bb = performance.timeOrigin + performance.now(),
          wb = this.render;
        if (null === wb) return;
        const Mb = performance.now();
        if (null !== this.pendingGrab) {
          if (Mb - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas grab didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(bb)) return;
        const eb = {
          startMs: Mb,
          timestampUs: Math.round(1e3 * bb),
          AO: {
            width: wb.canvas.width,
            height: wb.canvas.height
          },
          syncMs: 0,
          paused: this.isPaused()
        };
        null !== this.stream ? this.requestStreamFrame(this.stream, eb) : "bitmap" === this.grab.path ? this.grabBitmap(wb.canvas, eb) : this.grabVideoFrame(wb.canvas, eb)
      }
      requestStreamFrame(bb, wb) {
        this.pendingGrab = wb;
        try {
          bb.request()
        } catch (Mb) {
          return this.pendingGrab = null, void this.grabFailed(Mb)
        }
        wb.syncMs = performance.now() - wb.startMs
      }
      grabVideoFrame(bb, wb) {
        let Mb;
        try {
          Mb = new VideoFrame(bb, {
            timestamp: wb.timestampUs
          })
        } catch (eb) {
          return void this.grabFailed(eb)
        }
        this.deliver(Mb, wb), this.recordCost(Math.max(2 * (performance.now() - wb.startMs), this.frameCostFloorMs))
      }
      grabBitmap(bb, wb) {
        const Mb = this.grab.cssSize(),
          eb = function(bb, wb, Mb) {
            const eb = wb.width * wb.height < bb.width * bb.height ? wb : bb;
            let Hb = Iw(Math.max(eb.width, 64)),
              pb = Iw(Math.max(eb.height, 64));
            if (Ow({
                width: Hb,
                height: pb
              }) > Mb) {
              const bb = Hb,
                wb = pb;
              for (Hb = Iw(Hb * Math.sqrt(16 * Mb * 16 / (Hb * pb))), pb = Iw(Hb * wb / bb); Ow({
                  width: Hb,
                  height: pb
                }) > Mb;) Hb -= 2, pb = Iw(Hb * wb / bb)
            }
            return {
              width: Hb,
              height: pb
            }
          }(0 === Mb.width ? wb.AO : Mb, wb.AO, this.grab.maxMacroblocks);
        this.pendingGrab = wb, createImageBitmap(bb, {
          resizeWidth: eb.width,
          resizeHeight: eb.height,
          resizeQuality: "low"
        }).then((bb => {
          this.pendingGrab === wb ? (this.pendingGrab = null, this.deliverMeasured(bb, wb)) : bb.close()
        }), (bb => {
          this.pendingGrab === wb && (this.pendingGrab = null, this.grabFailed(bb))
        })), wb.syncMs = performance.now() - wb.startMs
      }
      onStreamFrame(bb) {
        const wb = this.pendingGrab;
        if (null === wb) return;
        this.pendingGrab = null;
        const Mb = performance.now();
        let eb;
        try {
          eb = new VideoFrame(bb, {
            timestamp: wb.timestampUs
          })
        } catch (Hb) {
          return void this.grabFailed(Hb)
        }
        wb.syncMs += performance.now() - Mb, this.deliverMeasured(eb, wb)
      }
      deliverMeasured(bb, wb) {
        const Mb = performance.now();
        this.deliver(bb, wb), this.recordCost(Math.max(wb.syncMs + performance.now() - Mb, this.frameCostFloorMs))
      }
      deliver(bb, wb) {
        const Mb = {
          type: "frame",
          image: bb,
          timestampUs: wb.timestampUs,
          AO: wb.AO,
          captureFps: wb.paused ? null : this.captureFps
        };
        try {
          this.worker.postMessage(Mb, [bb])
        } catch (eb) {
          return bb.close(), void this.grabFailed(eb)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(bb) {
        this.budget.record(bb), this.applyFps()
      }
      grabFailed(bb) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", bb);
        !(bb instanceof DOMException && "InvalidStateError" === bb.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${bb instanceof Error?bb.message:String(bb)}`))
      }
      applyFps() {
        const bb = this.budgetedFps();
        bb !== this.captureFps && (this.captureFps = bb, this.frameLimiter.setMaxFps(bb), this.isPaused() && !this.loggedPause && (this.loggedPause = !0, console.warn(`Session replay paused video: ${this.grab.path} grabs cost ${this.budget.averageCostMs.toFixed(1)} ms, over a budget of ${this.budgetMsPerSecond} ms/s at 5 fps.`)))
      }
      isPaused() {
        return this.budgetMsPerSecond > 0 && this.budget.paused
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var Fw = Mb(1391);
    class Bw {
      constructor(bb) {
        this.events = bb, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const bb = (0, Fw.K)().gameRender();
        if (null === bb || bb.canvas === this.canvas) return bb;
        const wb = null !== this.canvas;
        return this.canvas = bb.canvas, this.observe(bb.canvas), wb ? this.events.onCanvasSwapped(bb) : this.events.onFirstCanvas(bb), bb
      }
      stop() {
        var bb, wb;
        null === (bb = this.resizeObserver) || void 0 === bb || bb.disconnect(), null === (wb = this.listeners) || void 0 === wb || wb.abort()
      }
      observe(bb) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: wb
        } = this.listeners;
        bb.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: wb
        }), bb.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: wb
        });
        const Mb = bb.getBoundingClientRect();
        this.size = {
          width: Math.round(Mb.width),
          height: Math.round(Mb.height)
        }, this.resizeObserver = new ResizeObserver((bb => {
          const wb = bb[bb.length - 1].contentRect,
            Mb = {
              width: Math.round(wb.width),
              height: Math.round(wb.height)
            };
          0 !== Mb.width && 0 !== Mb.height && (this.size = Mb, this.events.onResized(Mb))
        })), this.resizeObserver.observe(bb)
      }
    }
    const sw = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      mw = 12e4;
    class hw extends Error {
      constructor(bb, wb) {
        super(wb), this.reason = bb
      }
    }
    class zw {
      constructor(bb, wb, Mb, eb, Hb) {
        this.access = bb, this.uploadToken = wb, this.transport = Mb, this.callbacks = eb, this.options = Hb, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(bb) {
        return this.segments.has(bb)
      }
      open(bb, wb) {
        this.segments.set(bb, {
          journalId: bb,
          sequence: wb,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(bb, wb) {
        const Mb = this.segments.get(bb);
        if (void 0 !== Mb) {
          Mb.parts.push(wb), Mb.bytes += wb.bytes.byteLength, !Mb.cut && null === Mb.totalParts && Mb.bytes > this.options.maxHeldBytes / 2 && (Mb.cut = !0, this.callbacks.cut());
          for (const bb of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(bb, "byteCap"), this.downUntilMs = this.options.nowMs() + mw
          }
          this.pump()
        }
      }
      close(bb, wb) {
        const Mb = this.segments.get(bb);
        void 0 !== Mb && (Mb.totalParts = wb, this.pump())
      }
      forget(bb) {
        this.segments.delete(bb)
      }
      releaseAll() {
        for (const bb of this.segments.values()) bb.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: bb.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let bb = 0;
        for (const wb of this.segments.values()) bb += wb.bytes;
        return bb
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let wb = this.nextWork(); null !== wb; wb = this.nextWork()) try {
            await this.advance(wb)
          } catch (bb) {
            console.warn(`Session replay part joiner failed on video segment ${wb.sequence}; uploading it straight to storage.`, bb), bb instanceof hw || (this.downUntilMs = this.options.nowMs() + mw), this.handBack(wb, bb instanceof hw ? bb.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const bb of this.segments.values())
          if (bb.sentParts < bb.parts.length || bb.totalParts === bb.parts.length) return bb;
        return null
      }
      async advance(bb) {
        if (bb.sentParts < bb.parts.length) return this.expectHeld(await this.sendPart(bb, bb.parts[bb.sentParts])), void bb.sentParts++;
        for (let wb = 0; this.owns(bb.journalId); wb++) {
          const Mb = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: bb.sequence,
            parts: bb.parts.length
          })));
          if (!this.owns(bb.journalId)) return;
          if ("stored" === Mb.outcome && Mb.stored.parts === bb.parts.length) return this.segments.delete(bb.journalId), void this.callbacks.stored(bb.journalId, bb.sequence, Mb.stored);
          if ("missing" !== Mb.outcome || wb >= 2) throw this.failure(Mb);
          for (const wb of Mb.parts) {
            if (!this.owns(bb.journalId)) return;
            const Mb = bb.parts[wb];
            if (void 0 === Mb) throw new hw("missing", `the joiner asked for part ${wb} of ${bb.parts.length}`);
            this.expectHeld(await this.sendPart(bb, Mb))
          }
        }
      }
      sendPart(bb, wb) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: bb.sequence,
          index: wb.index,
          meta: {
            ...wb.meta,
            startMs: Math.round(wb.meta.startMs),
            endMs: Math.round(wb.meta.endMs)
          },
          completeUntilUs: wb.completeUntilUs
        }, wb.bytes)))
      }
      expectHeld(bb) {
        if ("buffered" !== bb.outcome) throw this.failure(bb)
      }
      failure(bb) {
        if ("refused" === bb.outcome) {
          this.refused = !0;
          for (const bb of [...this.segments.values()]) this.handBack(bb, "refused");
          return new hw("refused", `refused: ${bb.reason}`)
        }
        const wb = "stored" === bb.outcome ? "shortStored" : "missing" === bb.outcome ? "missing" : "closed";
        return new hw(wb, `answered ${bb.outcome}`)
      }
      async request(bb) {
        for (let Mb = 1;; Mb++) {
          try {
            return await bb()
          } catch (wb) {
            if (Mb >= 3) throw wb
          }
          await this.options.wait(1e3 * 2 ** (Mb - 1))
        }
      }
      handBack(bb, wb) {
        this.segments.delete(bb.journalId) && (this.stats.handBacks[wb]++, this.callbacks.handBack(bb.journalId, bb.sequence, bb.parts, bb.totalParts))
      }
    }
    const Xw = Gb.b;
    class xw {
      constructor(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = bb, this.uploadToken = wb, this.nextTelemetrySequence = Mb, this.queuedDomAfter = eb, this.nowMs = Hb, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(bb, wb, Mb, eb, Hb) {
        const pb = this.segment(bb, wb, Mb, eb);
        if (void 0 === Hb) return void this.request(pb, 0);
        const Vb = Hb.then((() => {
          this.stopped || this.segments.get(Kw(bb, wb)) !== pb || pb.requested || this.request(pb, 0), this.videoDue === Vb && (this.videoDue = null)
        }));
        this.videoDue = Vb
      }
      async takeDom(bb) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, bb);
        const wb = this.dom;
        if ((null === wb || void 0 === wb ? void 0 : wb.sequence) !== bb) return;
        this.dom = null;
        const Mb = await wb.upload;
        return void 0 !== Mb && jw(Mb, this.nowMs()) ? Mb.upload : void 0
      }
      async get(bb, wb, Mb, eb, Hb) {
        const pb = this.segment(bb, wb, Mb, Hb),
          Vb = pb.requests.find((bb => eb >= bb.first && eb < bb.end));
        if (void 0 === this.valid(pb, eb) && void 0 !== Vb) {
          const bb = await Vb.answer.catch((() => null));
          if (null !== bb && "rejected" in bb) return bb
        }
        let gb = this.valid(pb, eb);
        if (void 0 === gb) {
          const bb = await this.request(pb, eb).answer;
          if ("rejected" in bb) return bb;
          gb = bb[0]
        }
        return gb
      }
      takeTelemetry(bb) {
        const wb = this.telemetry;
        if ((null === wb || void 0 === wb ? void 0 : wb.sequence) === bb) return this.telemetry = null, jw(wb.dg, this.nowMs()) ? wb.dg.target : void 0
      }
      peek(bb, wb, Mb) {
        const eb = this.segments.get(Kw(bb, wb));
        return void 0 === eb ? void 0 : this.valid(eb, Mb)
      }
      expire(bb, wb, Mb) {
        const eb = this.segments.get(Kw(bb, wb)),
          Hb = null === eb || void 0 === eb ? void 0 : eb.dg.get(Mb);
        if (void 0 !== eb && void 0 !== Hb)
          for (const [pb, Vb] of eb.dg) Vb.expiresAtMs <= Hb.expiresAtMs && eb.dg.delete(pb)
      }
      stop() {
        this.stopped = !0
      }
      forget(bb, wb) {
        this.segments.delete(Kw(bb, wb))
      }
      segment(bb, wb, Mb, eb) {
        const Hb = Kw(bb, wb);
        let pb = this.segments.get(Hb);
        return void 0 === pb && (pb = {
          kind: bb,
          sequence: wb,
          contentType: Mb,
          slots: eb,
          dg: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(Hb, pb)), pb
      }
      valid(bb, wb) {
        const Mb = bb.dg.get(wb);
        return void 0 !== Mb && jw(Mb, this.nowMs()) ? Mb.target : void 0
      }
      telemetryToAskFor() {
        const bb = this.nextTelemetrySequence(),
          wb = this.telemetry;
        return this.telemetryAsked === bb || null !== wb && wb.sequence === bb && jw(wb.dg, this.nowMs()) ? null : bb
      }
      domToAskFor() {
        var bb;
        const wb = this.queuedDomAfter(this.domTaken);
        return null === wb || wb.sequence === (null === (bb = this.dom) || void 0 === bb ? void 0 : bb.sequence) ? null : wb
      }
      request(bb, wb) {
        const Mb = wb < bb.slots.count ? bb.slots.count : wb + 1,
          eb = this.nowMs();
        bb.requested = !0;
        const Hb = "video" === bb.kind ? this.telemetryToAskFor() : null;
        null !== Hb && (this.telemetryAsked = Hb);
        const pb = "video" === bb.kind ? this.domToAskFor() : null,
          Vb = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: bb.kind,
            sequence: bb.sequence,
            contentType: bb.contentType,
            parts: {
              first: wb,
              count: Mb - wb,
              maxBytes: bb.slots.maxBytes
            },
            ...null === Hb ? {} : {
              nextTelemetry: {
                sequence: Hb,
                maxBytes: Xw
              }
            },
            ...null === pb ? {} : {
              dom: pb
            }
          });
        if (null !== pb) {
          const bb = Vb.then((bb => {
            if ("rejected" in bb || void 0 === bb.domUpload) return;
            const {
              expiresInSecs: wb,
              ...Mb
            } = bb.domUpload;
            return {
              upload: Mb,
              expiresAtMs: eb + 1e3 * wb
            }
          }), (() => {
            var bb;
            (null === (bb = this.dom) || void 0 === bb ? void 0 : bb.sequence) === pb.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: pb.sequence,
            upload: bb
          }
        }
        const gb = Vb.then((Mb => {
            var pb, Vb;
            if ("rejected" in Mb) return Mb;
            const gb = eb + 1e3 * Mb.expiresInSecs;
            Mb.targets.forEach(((Mb, eb) => {
              bb.dg.set(wb + eb, {
                target: Mb,
                expiresAtMs: gb
              })
            }));
            return null !== Hb && Hb >= this.nextTelemetrySequence() && (null !== (pb = null === (Vb = this.telemetry) || void 0 === Vb ? void 0 : Vb.sequence) && void 0 !== pb ? pb : -1) <= Hb && void 0 !== Mb.telemetryTarget && (this.telemetry = {
              sequence: Hb,
              dg: {
                target: Mb.telemetryTarget,
                expiresAtMs: gb
              }
            }), Mb.targets
          })),
          lb = {
            first: wb,
            end: Mb,
            answer: gb
          };
        bb.requests.push(lb);
        const Lb = () => {
          bb.requests.splice(bb.requests.indexOf(lb), 1), null !== Hb && this.telemetryAsked === Hb && (this.telemetryAsked = null)
        };
        return gb.then(Lb, Lb), lb
      }
    }

    function jw(bb, wb) {
      return bb.expiresAtMs - 6e4 > wb
    }

    function Kw(bb, wb) {
      return `${bb}:${wb}`
    }
    const rw = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function Rw(bb) {
      return new Promise((wb => {
        const Mb = () => {
            clearTimeout(eb), window.removeEventListener("online", Mb), wb()
          },
          eb = setTimeout(Mb, bb);
        window.addEventListener("online", Mb)
      }))
    }
    const Dw = ["video", "dom"],
      Yw = "video",
      Zw = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      fw = "an earlier part of its segment was dropped",
      Aw = new Set([403, 408, 409, 429]),
      Ww = new Set(["RequestTimeout", "IncompleteBody"]);
    class Jw {
      constructor(bb, wb, Mb, eb) {
        this.transport = bb, this.uploadToken = wb, this.options = Mb, this.callbacks = eb, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new xw(bb, wb, (() => {
          var bb;
          return null !== (bb = this.nextSequence.get("telemetry")) && void 0 !== bb ? bb : 0
        }), (bb => {
          const wb = this.queue.find((wb => "dom" === wb.kind && wb.sequence > bb));
          return void 0 === wb ? null : {
            sequence: wb.sequence,
            byteLength: wb.bytes.byteLength
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
        return this.queue.map((bb => {
          let {
            kind: wb,
            sequence: Mb,
            meta: eb
          } = bb;
          return {
            kind: wb,
            sequence: Mb,
            meta: eb
          }
        }))
      }
      openSegment(bb, wb, Mb, eb) {
        const Hb = this.takeSequence(bb);
        return this.prefetchTargets(bb, Hb, wb, Mb, eb), Hb
      }
      prefetchTargets(bb, wb, Mb, eb, Hb) {
        this.stopped || this.targets.prefetch(bb, wb, Mb, eb, Hb)
      }
      peekTarget(bb, wb, Mb) {
        return this.targets.peek(bb, wb, Mb)
      }
      closeSegment(bb, wb) {
        this.targets.forget(bb, wb), bb === Yw && this.brokenSegments.delete(wb)
      }
      enqueue(bb) {
        var wb, Mb;
        const eb = null !== (wb = null === (Mb = bb.part) || void 0 === Mb ? void 0 : Mb.sequence) && void 0 !== wb ? wb : null;
        if (this.stopped) return this.callbacks.onDropped(bb, "uploader stopped", eb), null;
        if (null !== eb && bb.kind === Yw && this.brokenSegments.has(eb)) return this.callbacks.onDropped(bb, fw, eb), null;
        "still" === bb.kind && this.removeQueued(bb.kind);
        const Hb = {
            ...bb,
            sequence: null !== eb && void 0 !== eb ? eb : this.takeSequence(bb.kind)
          },
          pb = this.queue.findIndex(((wb, Mb) => (Mb > 0 || !this.uploadInFlight) && Zw[wb.kind] > Zw[bb.kind]));
        return this.queue.splice(-1 === pb ? this.queue.length : pb, 0, Hb), this.queuedBytes += bb.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(Hb) ? Hb.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const bb of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= bb.bytes.byteLength, this.callbacks.onDropped(bb, "uploader stopped", bb.sequence)
      }
      takeSequence(bb) {
        var wb;
        const Mb = null !== (wb = this.nextSequence.get(bb)) && void 0 !== wb ? wb : 0;
        return this.nextSequence.set(bb, Mb + 1), Mb
      }
      removeQueued(bb) {
        for (let wb = this.queue.length - 1; wb >= (this.uploadInFlight ? 1 : 0); wb--)
          if (this.queue[wb].kind === bb) {
            const [bb] = this.queue.splice(wb, 1);
            this.queuedBytes -= bb.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const bb of Dw)
          for (const wb of [!1, !0])
            for (let Mb = this.uploadInFlight ? 1 : 0; Mb < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const eb = this.queue[Mb];
              if (eb.kind !== bb || !0 === eb.dropLast && !wb) {
                Mb++;
                continue
              }
              const [Hb] = this.queue.splice(Mb, 1);
              this.queuedBytes -= Hb.bytes.byteLength, this.callbacks.onDropped(Hb, "backlog over cap", Hb.sequence), this.segmentBroken(Hb)
            }
      }
      segmentBroken(bb) {
        if (void 0 !== bb.part && bb.kind === Yw) {
          this.brokenSegments.add(bb.sequence);
          for (let wb = this.queue.length - 1; wb >= (this.uploadInFlight ? 1 : 0); wb--) {
            const Mb = this.queue[wb];
            Mb.kind === Yw && void 0 !== Mb.part && Mb.sequence === bb.sequence && (this.queue.splice(wb, 1), this.queuedBytes -= Mb.bytes.byteLength, this.callbacks.onDropped(Mb, fw, Mb.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const bb = this.queue[0];
            this.uploadInFlight = !0;
            const wb = await this.upload(bb);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= bb.bytes.byteLength, "uploaded" !== wb.type ? (this.callbacks.onDropped(bb, wb.reason, bb.sequence), this.segmentBroken(bb), "refused" !== wb.type || this.stopped || "telemetry" !== bb.kind || (console.warn(`Session replay uploads refused (${wb.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(wb.reason))) : this.callbacks.onUploaded(bb, bb.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(bb) {
        let wb = null,
          Mb = 0;
        for (let Hb = 1;; Hb++) {
          try {
            if (null === wb) {
              const Mb = await this.requestTarget(bb);
              if ("rejected" in Mb) {
                if (!Mb.retryable) return {
                  type: "refused",
                  reason: Mb.reason
                };
                throw new Error(`rejected for now: ${Mb.reason}`)
              }
              wb = Mb
            }
            try {
              "put" === wb.type ? await this.transport.put(wb.url, bb.bytes, bb.contentType, wb.ifNoneMatch) : await this.transport.post(wb.target, bb.bytes, bb.contentType)
            } catch (eb) {
              if (eb instanceof ab.e && null !== eb.status && eb.status < 500 && !Aw.has(eb.status) && (null === eb.storageCode || !Ww.has(eb.storageCode))) return console.warn(`Session replay ${bb.kind} segment ${bb.sequence} refused by storage:`, eb), {
                type: "dropped",
                reason: eb.message
              };
              throw eb
            }
            return {
              type: "uploaded"
            }
          } catch (eb) {
            const Hb = eb instanceof Error ? eb.message : String(eb),
              pb = void 0 === bb.part ? "" : ` part ${bb.part.index}`;
            if (console.warn(`Session replay ${bb.kind} segment ${bb.sequence}${pb} upload failed:`, eb), eb instanceof ab.e && (403 === eb.status && (wb = null, void 0 !== bb.part && this.targets.expire(bb.kind, bb.sequence, bb.part.index)), ++Mb >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: Hb
            }
          }
          const pb = Math.min(3e4, this.options.baseBackoffMs * 2 ** (Hb - 1));
          if (await this.options.wait(pb * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(bb) {
        const {
          part: wb
        } = bb;
        if (void 0 !== wb) {
          const Mb = await this.targets.get(bb.kind, bb.sequence, bb.contentType, wb.index, wb.slots);
          return "rejected" in Mb ? Mb : {
            type: "post",
            target: Mb
          }
        }
        const Mb = "dom" === bb.kind ? await this.targets.takeDom(bb.sequence) : void 0;
        if (void 0 !== Mb) return {
          type: "put",
          url: Mb.uploadUrl,
          ifNoneMatch: Mb.ifNoneMatch
        };
        const eb = "telemetry" === bb.kind && bb.bytes.byteLength <= Xw ? this.targets.takeTelemetry(bb.sequence) : void 0;
        if (void 0 !== eb) return {
          type: "post",
          target: eb
        };
        const Hb = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: bb.kind,
          sequence: bb.sequence,
          contentType: bb.contentType,
          byteLength: bb.bytes.byteLength
        });
        return "rejected" in Hb ? Hb : {
          type: "put",
          url: Hb.uploadUrl,
          ifNoneMatch: Hb.ifNoneMatch
        }
      }
    }
    class Sw {
      constructor(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = bb, this.slots = wb, this.manifest = Mb, this.journal = eb, this.cut = Hb, this.joiner = pb, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(bb, wb) {
        switch (bb.type) {
          case "videoSegmentOpened": {
            var Mb, eb;
            if (null !== (Mb = this.joiner) && void 0 !== Mb && Mb.accepting) {
              var Hb;
              const wb = this.uploader.takeSequence("video");
              this.joiner.open(bb.journalId, wb), this.openJournalId = bb.journalId, null === (Hb = this.journal) || void 0 === Hb || Hb.videoQueued(bb.journalId, wb);
              break
            }
            const pb = this.uploader.openSegment("video", "video/mp4", this.slots, wb);
            this.segments.set(bb.journalId, {
              sequence: pb,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = bb.journalId, null === (eb = this.journal) || void 0 === eb || eb.videoQueued(bb.journalId, pb);
            break
          }
          case "videoPart": {
            var pb;
            if (null !== (pb = this.joiner) && void 0 !== pb && pb.owns(bb.journalId)) {
              const {
                index: wb,
                bytes: Mb,
                meta: eb,
                completeUntilUs: Hb,
                completeUntilIndex: pb
              } = bb;
              this.joiner.addPart(bb.journalId, {
                index: wb,
                bytes: Mb,
                meta: eb,
                completeUntilUs: Hb,
                completeUntilIndex: pb
              });
              break
            }
            const wb = this.segments.get(bb.journalId);
            void 0 !== wb && this.enqueuePart(bb.journalId, wb.sequence, bb);
            break
          }
          case "videoSegmentClosed": {
            var Vb;
            if (null !== (Vb = this.joiner) && void 0 !== Vb && Vb.owns(bb.journalId)) {
              var gb;
              if (this.openJournalId === bb.journalId && (this.openJournalId = null), bb.parts > 0) this.joiner.close(bb.journalId, bb.parts);
              else this.joiner.forget(bb.journalId), null === (gb = this.journal) || void 0 === gb || gb.videoSettled(bb.journalId);
              break
            }
            const wb = this.segments.get(bb.journalId);
            if (void 0 === wb) break;
            wb.totalParts = bb.parts, this.openJournalId === bb.journalId && (this.openJournalId = null), this.maybeDone(bb.journalId, wb);
            break
          }
        }
      }
      joinedStored(bb, wb, Mb) {
        this.manifest.setVideoSegment(wb, Mb.meta, null), this.storedWhole.set(wb, bb)
      }
      joinedHandedBack(bb, wb, Mb, eb) {
        const Hb = {
          sequence: wb,
          settledParts: 0,
          totalParts: eb,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(bb, Hb), this.uploader.prefetchTargets("video", wb, "video/mp4", this.slots);
        for (const pb of Mb) this.enqueuePart(bb, wb, pb)
      }
      enqueuePart(bb, wb, Mb) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: Mb.bytes,
          meta: {
            type: "video",
            meta: Mb.meta,
            journalId: bb,
            index: Mb.index,
            completeUntilUs: Mb.completeUntilUs,
            completeUntilIndex: Mb.completeUntilIndex
          },
          part: {
            sequence: wb,
            index: Mb.index,
            slots: this.slots
          }
        })
      }
      landed(bb, wb) {
        if (null !== bb.completeUntilUs && bb.meta.endMs > bb.meta.startMs) {
          var Mb, eb;
          const Hb = this.segments.get(bb.journalId);
          void 0 !== Hb && (Hb.landedParts = bb.index + 1), this.manifest.setVideoSegment(wb, bb.meta, bb.index + 1), null === (Mb = this.journal) || void 0 === Mb || Mb.videoPartLanded(bb.journalId, {
            partsLanded: bb.index + 1,
            completeUntilUs: bb.completeUntilUs,
            meta: bb.meta
          }, null !== (eb = bb.completeUntilIndex) && void 0 !== eb ? eb : 0)
        }
        this.settled(bb)
      }
      dropped(bb) {
        this.settled(bb), bb.journalId === this.openJournalId && bb.journalId !== this.cutJournalId && (this.cutJournalId = bb.journalId, this.cut())
      }
      listed(bb, wb) {
        if (null !== wb)
          for (const [eb, Hb] of this.segments) Hb.sequence === bb && (Hb.listedParts = Math.max(Hb.listedParts, wb), this.maybeDone(eb, Hb));
        else {
          const wb = this.storedWhole.get(bb);
          var Mb;
          void 0 !== wb && (this.storedWhole.delete(bb), null === (Mb = this.journal) || void 0 === Mb || Mb.videoSettled(wb))
        }
      }
      settled(bb) {
        const wb = this.segments.get(bb.journalId);
        void 0 !== wb && (wb.settledParts++, this.maybeDone(bb.journalId, wb))
      }
      maybeDone(bb, wb) {
        if (null === wb.totalParts || wb.settledParts < wb.totalParts) return;
        const Mb = wb.listedParts >= wb.landedParts;
        var eb, Hb;
        wb.uploaded || (wb.uploaded = !0, this.uploader.closeSegment("video", wb.sequence), Mb || null === (eb = this.journal) || void 0 === eb || eb.videoUploaded(bb));
        Mb && (this.segments.delete(bb), null === (Hb = this.journal) || void 0 === Hb || Hb.videoSettled(bb))
      }
    }
    var Nw = Mb(4252),
      vw = Mb(5522);
    class Qw {
      constructor(bb, wb) {
        this.deps = bb, this.videoStatus = wb, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new Bw({
          onFirstCanvas: bb => {
            this.attachToCanvas(bb)
          },
          onCanvasSwapped: bb => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(bb), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: bb => {
            this.postToWorker({
              type: "resize",
              cssSize: bb
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
      attachToCanvas(bb) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(bb, this.deps.videoConfig)
        } catch (wb) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", wb), this.videoUnavailable(`video couldn't start: ${wb instanceof Error?wb.message:String(wb)}`)
        }
      }
      startVideo(bb, wb) {
        var Mb, eb, Hb;
        const pb = new Lw,
          Vb = (0, Mw.s)(wb),
          gb = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          lb = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => Lb), gb),
          Lb = new Sw(this.deps.uploader, Vb, this.deps.manifest, this.deps.journal, gb, lb);
        pb.onmessage = bb => {
          this.onWorkerMessage(bb.data, Lb)
        }, pb.onerror = bb => {
          console.error("Session replay video worker error.", bb.message), this.worker === pb && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${bb.message||"it didn't load"}`))
        }, this.worker = pb, this.uploads = Lb, this.joiner = lb, this.deps.debug.joiner = null !== (Mb = null === lb || void 0 === lb ? void 0 : lb.stats) && void 0 !== Mb ? Mb : null, this.videoStarted = !0, this.deps.stills.start();
        const Ib = (0, cb.getOperatingSystem)(),
          Ob = (0, Db.c)();
        this.postToWorker({
          type: "init",
          videoConfig: wb,
          partPlan: {
            ...Vb,
            partDurationMs: wb.partDurationMs,
            keyframeIntervalMs: wb.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          encoderPreference: {
            preferSoftware: wb.softwareEncoderPlatforms.includes(Ib),
            preferQualityLatency: "ios" === Ib
          },
          journalRecordingId: null !== (eb = null === (Hb = this.deps.journal) || void 0 === Hb ? void 0 : Hb.recordingId) && void 0 !== eb ? eb : null
        });
        const Ub = function(bb, wb, Mb, eb) {
          const Hb = eb && bb.streamGrabEngines.includes(Mb) ? "stream" : bb.videoFrameGrabPlatforms.includes(wb) ? "videoFrame" : "bitmap";
          return {
            path: Hb,
            frameCostFloorMs: Math.max(bb.captureFrameCostFloorMs, "stream" === Hb ? 2.5 : 0, "ios" === wb ? 3.5 : 0)
          }
        }(wb, Ib, Ob, Cw.isSupported() && !bb.renderer.endsWith("webgpu"));
        this.capture = new Ew(pb, wb.maxFps, {
          msPerSecond: wb.captureBudgetMsPerSecond,
          frameCostFloorMs: Ub.frameCostFloorMs
        }, {
          path: Ub.path,
          maxMacroblocks: wb.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (bb => {
          this.endVideo(), this.videoStopped("stopped_error", bb)
        })), this.capture.start(bb)
      }
      createJoiner(bb, wb, Mb) {
        return new zw(bb, this.deps.recording.uploadToken, new ub(bb.url), {
          stored: (bb, Mb, eb) => {
            wb().joinedStored(bb, Mb, eb), this.deps.pageExit.segmentLanded()
          },
          handBack: (bb, Mb, eb, Hb) => {
            wb().joinedHandedBack(bb, Mb, eb, Hb)
          },
          cut: Mb
        }, {
          wait: Rw,
          nowMs: Date.now,
          maxHeldBytes: sw[this.deps.platformType]
        })
      }
      onWorkerMessage(bb, wb) {
        var Mb, eb, Hb, pb;
        switch (bb.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            wb.onWorkerMessage(bb, "videoSegmentOpened" === bb.type ? null === (Mb = this.deps.dom()) || void 0 === Mb ? void 0 : Mb.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(bb, document.hidden);
            break;
          case "stats":
            Hb = this.deps.debug, pb = bb.stats, Hb.workerStats.push(pb), Hb.workerStats.length > 120 && Hb.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(bb.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = bb.level, null === (eb = this.capture) || void 0 === eb || eb.setMaxFps(bb.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, nb.e)(),
              level: bb.level,
              maxFps: bb.maxFps,
              reason: bb.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${bb.level} (${bb.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(bb.reason)
        }
      }
      videoUnavailable(bb) {
        var wb, Mb;
        null === (wb = this.capture) || void 0 === wb || wb.stop(), this.capture = null, null === (Mb = this.worker) || void 0 === Mb || Mb.terminate(), this.worker = null, this.videoStopped("stopped_error", bb)
      }
      videoStopped(bb, wb) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = wb, "stopped_error" === bb && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(bb, wb))
      }
      setVideoStatus(bb, wb) {
        this.videoStatus = bb, (0, Nw.f)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, vw.f)(bb, wb)
      }
      maybeLogStats(bb) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const wb = Math.round(1e3 * bb.encodedFrames / bb.windowMs);
        console.warn(`Session replay stats: ${wb} fps encoded, ${bb.encodeWidth}x${bb.encodeHeight} ${bb.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var bb;
        null === (bb = this.capture) || void 0 === bb || bb.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const wb = this.worker;
        this.worker = null, setTimeout((() => {
          null === wb || void 0 === wb || wb.terminate()
        }), 15e3)
      }
      postToWorker(bb) {
        var wb;
        null === (wb = this.worker) || void 0 === wb || wb.postMessage(bb)
      }
    }
    const Gw = 3 * Gb.b / 4,
      qw = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var aw = Mb(41197);
    const iw = {
        count: 1,
        maxBytes: Mw.l
      },
      uw = "image/jpeg";
    class dw {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Gb.c;
        this.uploader = bb, this.manifest = wb, this.relay = Mb, this.keepalive = eb, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(bb, wb) {
        let {
          bytes: Mb,
          small: eb,
          atMs: Hb
        } = bb;
        const pb = Mb.byteLength <= iw.maxBytes ? Mb : eb;
        null !== pb && (this.latest = {
          bytes: pb,
          small: eb,
          atMs: Hb
        }, wb && this.upload())
      }
      upload() {
        var bb, wb;
        const Mb = this.latest;
        if (this.stopped || null === Mb || Mb.atMs <= (null !== (bb = null === (wb = this.queued) || void 0 === wb ? void 0 : wb.atMs) && void 0 !== bb ? bb : -1 / 0)) return;
        const eb = this.takeSequence();
        this.queued = {
          atMs: Mb.atMs,
          sequence: eb
        }, this.uploader.enqueue({
          kind: "still",
          contentType: uw,
          bytes: Mb.bytes,
          meta: {
            type: "still",
            atMs: Mb.atMs,
            sequence: eb
          },
          part: {
            sequence: eb,
            index: 0,
            slots: iw
          }
        })
      }
      landed(bb) {
        this.manifest.setStill(bb.atMs, bb.sequence), this.uploader.closeSegment("still", bb.sequence)
      }
      dropped(bb) {
        this.uploader.closeSegment("still", bb.sequence)
      }
      beacon() {
        var bb, wb, Mb, eb;
        const Hb = this.latest;
        if (this.stopped || null === Hb || Hb.atMs <= (null !== (bb = null === (wb = this.manifest.contents.still) || void 0 === wb ? void 0 : wb.atMs) && void 0 !== bb ? bb : -1 / 0)) return;
        const pb = (null === (Mb = this.queued) || void 0 === Mb ? void 0 : Mb.atMs) === Hb.atMs ? this.queued : null;
        if (null !== pb && this.keepalive.isInFlight(uw)) return void this.manifest.setStill(Hb.atMs, pb.sequence);
        const Vb = null !== (eb = null === pb || void 0 === pb ? void 0 : pb.sequence) && void 0 !== eb ? eb : this.nextSequence,
          gb = this.uploader.peekTarget("still", Vb, 0);
        if (void 0 !== gb)
          for (const lb of [Hb.bytes, Hb.small])
            if (null !== lb && this.sendBeacon(gb, lb)) return null === pb && this.takeSequence(), void this.manifest.setStill(Hb.atMs, Vb)
      }
      sendBeacon(bb, wb) {
        var Mb, eb;
        const Hb = null !== (Mb = null === (eb = this.relay) || void 0 === eb ? void 0 : eb.beacon({
          method: "POST",
          url: bb.url,
          fields: bb.fields
        }, wb, uw, this.keepalive)) && void 0 !== Mb ? Mb : null;
        if (null !== Hb) return Hb;
        const {
          form: pb,
          byteLength: Vb
        } = (0, aw.g)(bb, wb, uw);
        return this.keepalive.sendUploadBeacon(bb.url, pb, Vb)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const bb = this.nextSequence++;
        return this.prefetchNext(), bb
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, uw, iw)
      }
    }
    var Pw = Mb(5532),
      nw = Mb(41204),
      yw = Mb(41210),
      ow = Mb(41213),
      Tw = Mb(7690),
      kw = Mb(7695);

    function bM(bb) {
      return 50 * Math.floor(bb / 50)
    }
    class wM {
      constructor() {
        this.writer = new Tw.b((0, nb.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(bb, wb) {
        null !== bb && (this.setActionBits(bb.getActionBits(), (0, nb.e)()), this.unsubscribers.push(bb.onKey(((bb, wb, Mb, eb, Hb, pb) => {
          const Vb = (0, kw.f)(bb);
          Hb ? this.writer.writeKey(bM(pb), Vb, wb, Mb, eb) : 0 !== Vb && null === (0, kw.g)(bb) && this.writer.writeKey(bM(pb), 0, wb, Mb, eb)
        })), bb.onActions(((bb, wb) => {
          this.setActionBits(bb, wb)
        })), bb.onPointerLock(((bb, wb) => {
          this.writer.writeEvent(wb, bb ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, Fw.C)((() => {
          const bb = (0, Fw.i)();
          this.writer.writeFrame((0, nb.e)() - bb, bb), this.framesSinceFpsSample++, wb()
        })))
      }
      writeState(bb, wb) {
        this.writer.writeState((0, nb.e)(), {
          backingWidth: bb.canvas.width,
          backingHeight: bb.canvas.height,
          cssWidth: bb.cssWidth,
          cssHeight: bb.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: bb.renderer,
          pingMs: bb.pingMs,
          hidden: wb,
          qualityLevel: bb.qualityLevel
        })
      }
      writeEvent(bb) {
        this.writer.writeEvent((0, nb.e)(), bb)
      }
      sampleFps() {
        const bb = performance.now(),
          wb = bb - this.lastFpsSampleMs,
          Mb = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = bb, this.framesSinceFpsSample = 0, 0 === Mb || wb <= 0 ? null : 1e3 * Mb / wb
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const bb = this.writer.chunkStartMs,
          wb = (0, nb.e)(),
          Mb = this.writer.takeChunk(wb);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(wb, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: Mb,
          startMs: bb,
          endMs: wb
        }
      }
      stop() {
        for (const bb of this.unsubscribers) bb();
        this.unsubscribers = []
      }
      setActionBits(bb, wb) {
        bb !== this.actionBits && (this.actionBits = bb, this.writer.writeActions(bM(wb), bb))
      }
    }
    var MM = Mb(5544),
      eM = Mb(41220);
    class HM {
      constructor(bb, wb) {
        var Mb;
        this.recording = bb, this.telemetry = new wM, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const eb = wb.dryRun ? null : null !== (Mb = bb.partJoiner) && void 0 !== Mb ? Mb : null,
          Hb = null === eb ? null : (0, qb.i)(db(eb)),
          Vb = wb.dryRun ? new aw.e : new aw.f((0, Rb.c)().segmentUploadUrl, {
            relay: Hb
          });
        var lb, Lb;
        this.videoConfig = wb.dryRun ? function(bb) {
          var wb, Mb, eb, Hb;
          const Vb = pb[bb],
            gb = Zb.i.getItem("replaySkipLowMemory"),
            lb = "boolean" === typeof gb ? gb : null;
          return {
            ...Vb,
            maxFps: null !== (wb = Wb("replayMaxFps")) && void 0 !== wb ? wb : Vb.maxFps,
            maxMacroblocks: null !== (Mb = Wb("replayMaxMacroblocks")) && void 0 !== Mb ? Mb : Vb.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (eb = Wb("replayCaptureBudgetMs")) && void 0 !== eb ? eb : Vb.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (Hb = Wb("replayCaptureCostFloorMs")) && void 0 !== Hb ? Hb : Vb.captureFrameCostFloorMs,
            softwareEncoderPlatforms: Jb("replayEncoder", "software", "hardware", Vb.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: Jb("replayGrab", "videoFrame", "bitmap", Vb.videoFrameGrabPlatforms),
            streamGrabEngines: Sb(Vb.streamGrabEngines),
            skipLowMemoryDevices: null !== lb && void 0 !== lb ? lb : Vb.skipLowMemoryDevices
          }
        }(wb.platformType) : bb.videoConfig && (lb = bb.videoConfig, Lb = wb.platformType, {
          ...pb[Lb],
          ...lb
        });
        const Ib = (0, MM.c)(this.videoConfig);
        (0, Nw.f)("recorded" === Ib ? "video" : "dom_only", bb), this.manifest = new bw(bb.recordingId, bb.uploadToken, !wb.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: bb.expiresAtMs - 6e4,
          onSend: bb => {
            var wb;
            null === (wb = this.journal) || void 0 === wb || wb.manifestSent(bb)
          },
          onListed: bb => {
            let {
              list: wb,
              value: Mb
            } = bb;
            var eb, Hb;
            if ("videoSegments" === wb) null === (eb = this.video.uploads) || void 0 === eb || eb.listed(Mb.sequence, null !== (Hb = Mb.parts) && void 0 !== Hb ? Hb : null);
            else if ("telemetrySegments" === wb) {
              var pb;
              null === (pb = this.journal) || void 0 === pb || pb.telemetrySettled(Mb.sequence)
            } else {
              var Vb;
              null === (Vb = this.journal) || void 0 === Vb || Vb.domSettled(Mb.sequence)
            }
          }
        }), !wb.dryRun && ow.e.supported && (this.journal = new pw(new ow.e, bb, this.manifest.contents, (0, Rb.c)())), this.debug = function() {
          const bb = {
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
          return window.sessionReplayDebug = bb, bb
        }(), this.uploader = new Jw(Vb, bb.uploadToken, {
          ...rw,
          maxBacklogBytes: qw[wb.platformType],
          wait: Rw
        }, {
          onUploaded: (bb, wb) => {
            var Mb;
            this.debug.uploadedBytesByKind[bb.kind] = (null !== (Mb = this.debug.uploadedBytesByKind[bb.kind]) && void 0 !== Mb ? Mb : 0) + bb.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(bb.meta, wb, bb.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (bb, wb, Mb) => {
            var eb;
            if (console.warn(`Session replay dropped a ${bb.kind} segment: ${wb}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === bb.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (eb = this.video.uploads) || void 0 === eb || eb.dropped(bb.meta);
            else if ("still" === bb.meta.type) this.stills.dropped(bb.meta);
            else if ("telemetry" === bb.meta.type && null !== Mb) {
              var Hb;
              null === (Hb = this.journal) || void 0 === Hb || Hb.telemetrySettled(Mb)
            } else if ("dom" === bb.meta.type && null !== Mb) {
              var pb;
              null === (pb = this.journal) || void 0 === pb || pb.domSettled(Mb)
            }
          },
          onStopped: bb => {
            this.stop(`uploads refused: ${bb}`)
          }
        }), this.stills = new dw(this.uploader, this.manifest, Hb), this.pageExit = new Vw({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var bb, wb;
            null === (bb = this.dom) || void 0 === bb || bb.cut(), null === (wb = this.dom) || void 0 === wb || wb.cutAfterNextBatch()
          },
          postToWorker: bb => {
            this.video.postToWorker(bb)
          },
          writeEvent: bb => {
            this.telemetry.writeEvent(bb)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var bb;
            null === (bb = this.video.joiner) || void 0 === bb || bb.releaseAll()
          }
        }), this.video = new Qw({
          recording: bb,
          videoConfig: this.videoConfig,
          joinerAccess: eb,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: wb.dryRun ? {
            logStats: !0 === Zb.i.getItem("replayLogStats")
          } : Ab,
          platformType: wb.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, Ib);
        const Ob = wb.dryRun ? function() {
          var bb;
          const wb = null !== (bb = (0, fb.g)() ? Yb.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== bb ? bb : Zb.i.getItem("replayPostHogHost");
          return "string" === typeof wb && wb.length > 0 ? {
            apiHost: wb,
            projectApiKey: "dry-run"
          } : null
        }() : bb.posthog;
        if (this.ownFpsMonitor = null === Ob ? new eM.c({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, gb.k.subscribe("sessionReplayLowFps", (bb => {
            let {
              low: wb
            } = bb;
            this.isStopped || this.onLowFps(wb)
          })), gb.k.subscribe("sessionReplayStayProgress", (bb => {
            !this.isStopped && this.manifest.updateCurrentStay(bb) && this.manifest.sendSoon()
          })), gb.k.subscribe("sessionReplayGameQuit", (bb => {
            let {
              reasons: wb,
              gameName: Mb
            } = bb;
            wb.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(Mb) && this.pageExit.sendManifest()
          })), null !== wb.currentGame && (this.listStay(wb.currentGame), gb.k.iI("sessionReplayStayOpened", wb.currentGame.gameNameWithVariation)), this.start(bb.expiresAtMs), this.dom = null, null !== Ob) {
          const Mb = new Kb(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: bb => this.isStopped || this.pageExit.isHiding || document.hidden && !bb
          }, this.journal, new rb.d);
          this.dom = Mb, (0, vw.c)({
            recording: bb,
            posthog: Ob,
            videoStatus: this.video.videoStatus,
            dryRun: wb.dryRun,
            onDomBatch: bb => {
              Mb.add(bb)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var bb, wb;
        return null !== (bb = null === (wb = this.videoConfig) || void 0 === wb ? void 0 : wb.manifestIntervalMs) && void 0 !== bb ? bb : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(bb) {
        const {
          lobbyName: wb,
          ...Mb
        } = bb;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === wb ? Mb : {
          ...Mb,
          lobbyName: wb
        })
      }
      gameJoined(bb) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(bb), gb.k.iI("sessionReplayStayOpened", bb.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(bb, wb) {
        this.isStopped || (this.manifest.addCreatorGrant(bb, wb), this.manifest.send())
      }
      onLowFps(bb) {
        this.lowFpsOpen = bb, bb && this.manifest.flagCurrentGame("lowFps")
      }
      start(bb) {
        const wb = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var bb;
          this.flushTelemetry(), null === (bb = this.dom) || void 0 === bb || bb.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, bb - Date.now() - 6e4))), this.pageExit.listen(wb), this.telemetry.attach((0, yw.e)(), (() => {
          var bb;
          null === (bb = this.video.capture) || void 0 === bb || bb.onAfterRender()
        }));
        for (const Mb of ["error", "unhandledrejection"]) window.addEventListener(Mb, (bb => {
          (0, nw.c)(bb) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: wb
        });
        (0, MM.e)((() => {
          this.video.onCellular()
        }), wb), null !== this.journal && (0, Pw.d)(wb)
      }
      stop(bb) {
        var wb, Mb;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${bb}`), this.debug.stoppedReason = bb, this.lifetime.abort();
          for (const bb of this.timers) clearTimeout(bb);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, vw.g)(), this.telemetry.stop(), this.flushTelemetry(), null === (wb = this.dom) || void 0 === wb || wb.cut(), null === (Mb = this.dom) || void 0 === Mb || Mb.close(), this.video.endVideo(), this.manifest.send(), (0, Nw.f)("events_only", this.recording)
        }
      }
      onStateTick() {
        var bb;
        const wb = this.video.canvasWatch.check();
        if (null === wb) return;
        const {
          cssSize: Mb
        } = this.video.canvasWatch, eb = Vb.c.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: wb.canvas,
          cssWidth: Mb.width,
          cssHeight: Mb.height,
          renderer: wb.renderer,
          pingMs: eb,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= Gw && this.flushTelemetry();
        const Hb = this.telemetry.sampleFps(),
          pb = document.hidden ? null : Hb;
        if (null === (bb = this.ownFpsMonitor) || void 0 === bb || bb.addSample(pb, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: pb,
            pingMs: eb
          }), null !== this.video.capture) {
          const {
            averageMs: bb,
            fps: wb,
            grabPath: Mb
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: bb,
            budgetFps: wb,
            grabPath: Mb
          }
        }
      }
      onSegmentUploaded(bb, wb, Mb) {
        var eb;
        if ("video" === bb.type) null === (eb = this.video.uploads) || void 0 === eb || eb.landed(bb, wb);
        else if ("still" === bb.type) this.stills.landed(bb);
        else if ("dom" === bb.type) {
          var Hb;
          null === (Hb = this.journal) || void 0 === Hb || Hb.domLanded(wb, bb.chunk), this.manifest.addDomSegment({
            sequence: wb,
            ...bb.chunk
          })
        } else {
          var pb;
          null === (pb = this.journal) || void 0 === pb || pb.telemetryLanded(wb, Mb, bb.startMs, bb.endMs), this.manifest.addTelemetrySegment(wb, bb.startMs, bb.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: bb,
          startMs: wb,
          endMs: Mb
        } = this.telemetry.takeChunk(), eb = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: bb,
          meta: {
            type: "telemetry",
            startMs: wb,
            endMs: Mb
          }
        });
        var Hb;
        null !== eb && (null === (Hb = this.journal) || void 0 === Hb || Hb.telemetryQueued(eb, bb, wb, Mb));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7690: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => rb,
      d: () => Rb
    });
    var eb = Mb(7695);
    const Hb = 827609666,
      pb = 2,
      Vb = 1,
      gb = 13,
      lb = 1,
      Lb = 2,
      Ib = 3,
      Ob = 4,
      Ub = 5,
      tb = 7,
      Cb = 19,
      Eb = 6,
      Fb = 7,
      Bb = 7,
      sb = 1,
      mb = 2,
      hb = 4,
      zb = 65535,
      Xb = 10,
      xb = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      jb = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function Kb(bb) {
      return Math.max(0, Math.min(zb, Math.round(bb)))
    }
    class rb {
      constructor(bb) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(bb)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - gb
      }
      writeFrame(bb, wb) {
        this.reserve(tb);
        const Mb = this.view,
          eb = this.length;
        Mb.setUint8(eb, lb), Mb.setUint32(eb + 1, this.timeUnits(bb), !0), Mb.setUint16(eb + 5, Kb(100 * wb), !0), this.length += tb
      }
      writeState(bb, wb) {
        this.reserve(Cb);
        const Mb = this.view,
          eb = this.length;
        Mb.setUint8(eb, Lb), Mb.setUint32(eb + 1, this.timeUnits(bb), !0), Mb.setUint16(eb + 5, Kb(wb.backingWidth), !0), Mb.setUint16(eb + 7, Kb(wb.backingHeight), !0), Mb.setUint16(eb + 9, Kb(wb.cssWidth), !0), Mb.setUint16(eb + 11, Kb(wb.cssHeight), !0), Mb.setUint16(eb + 13, Kb(100 * wb.devicePixelRatio), !0), Mb.setUint8(eb + 15, xb.indexOf(wb.renderer)), Mb.setUint16(eb + 16, null === wb.pingMs ? zb : Kb(Math.min(wb.pingMs, zb - 1)), !0), Mb.setUint8(eb + 18, (wb.hidden ? 1 : 0) | (7 & wb.qualityLevel) << 1), this.length += Cb
      }
      writeEvent(bb, wb) {
        this.reserve(Eb);
        const Mb = this.length;
        this.view.setUint8(Mb, Ib), this.view.setUint32(Mb + 1, this.timeUnits(bb), !0), this.view.setUint8(Mb + 5, jb.indexOf(wb)), this.length += Eb
      }
      writeActions(bb, wb) {
        this.reserve(Fb);
        const Mb = this.length;
        this.view.setUint8(Mb, Ob), this.view.setUint32(Mb + 1, this.timeUnits(bb), !0), this.view.setUint16(Mb + 5, wb, !0), this.length += Fb
      }
      writeKey(bb, wb, Mb, eb, Hb) {
        this.reserve(Bb);
        const pb = this.length;
        this.view.setUint8(pb, Ub), this.view.setUint32(pb + 1, this.timeUnits(bb), !0), this.view.setUint8(pb + 5, wb), this.view.setUint8(pb + 6, (Mb ? sb : 0) | (eb ? mb : 0) | (Hb ? hb : 0)), this.length += Bb
      }
      takeChunk(bb) {
        const wb = this.buffer.slice(0, this.length);
        return this.startChunk(bb), wb
      }
      startChunk(bb) {
        this.baseEpochMs = bb, this.view.setUint32(0, Hb, !0), this.view.setUint8(4, pb), this.view.setFloat64(5, bb, !0), this.length = gb
      }
      timeUnits(bb) {
        return Math.max(0, Math.round((bb - this.baseEpochMs) * Xb))
      }
      reserve(bb) {
        if (this.length + bb <= this.buffer.byteLength) return;
        const wb = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(wb).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = wb, this.view = new DataView(wb)
      }
    }

    function Rb(bb) {
      const wb = new DataView(bb),
        Mb = bb.byteLength < gb ? 0 : wb.getUint8(4);
      if (Mb < Vb || Mb > pb || wb.getUint32(0, !0) !== Hb) throw new Error(`Not a version ${Vb}-${pb} replay telemetry chunk`);
      const Kb = wb.getFloat64(5, !0),
        rb = {
          baseEpochMs: Kb,
          inputRecorded: Mb >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        Rb = bb => Kb + wb.getUint32(bb, !0) / Xb;
      let Db = gb;
      for (; Db < bb.byteLength;) {
        const bb = wb.getUint8(Db);
        if (bb === lb) rb.frames.push({
          atMs: Rb(Db + 1),
          cpuFrameMs: wb.getUint16(Db + 5, !0) / 100
        }), Db += tb;
        else if (bb === Lb) {
          var cb;
          const bb = wb.getUint16(Db + 16, !0),
            Mb = wb.getUint8(Db + 18);
          rb.states.push({
            atMs: Rb(Db + 1),
            backingWidth: wb.getUint16(Db + 5, !0),
            backingHeight: wb.getUint16(Db + 7, !0),
            cssWidth: wb.getUint16(Db + 9, !0),
            cssHeight: wb.getUint16(Db + 11, !0),
            devicePixelRatio: wb.getUint16(Db + 13, !0) / 100,
            renderer: null !== (cb = xb[wb.getUint8(Db + 15)]) && void 0 !== cb ? cb : "unknown",
            pingMs: bb === zb ? null : bb,
            hidden: 1 === (1 & Mb),
            qualityLevel: Mb >> 1 & 7
          }), Db += Cb
        } else if (bb === Ib) {
          var Yb;
          rb.events.push({
            atMs: Rb(Db + 1),
            event: null !== (Yb = jb[wb.getUint8(Db + 5)]) && void 0 !== Yb ? Yb : "none"
          }), Db += Eb
        } else if (bb === Ob && rb.inputRecorded) rb.actions.push({
          atMs: Rb(Db + 1),
          bits: wb.getUint16(Db + 5, !0)
        }), Db += Fb;
        else {
          if (bb !== Ub || !rb.inputRecorded) throw new Error(`Unknown replay telemetry record type ${bb} at byte ${Db}`);
          {
            var Zb;
            const bb = wb.getUint8(Db + 6);
            rb.keys.push({
              atMs: Rb(Db + 1),
              code: null !== (Zb = eb.c[wb.getUint8(Db + 5)]) && void 0 !== Zb ? Zb : eb.c[0],
              down: 0 !== (bb & sb),
              bound: 0 !== (bb & mb),
              inPlay: 0 !== (bb & hb)
            }), Db += Bb
          }
        }
      }
      return rb
    }
  },
  37394: bb => {
    bb.exports = function(bb, wb, Mb, eb) {
      var Hb = self || window;
      try {
        try {
          var pb;
          try {
            pb = new Hb.Blob([bb])
          } catch (Lb) {
            (pb = new(Hb.BlobBuilder || Hb.WebKitBlobBuilder || Hb.MozBlobBuilder || Hb.MSBlobBuilder)).append(bb), pb = pb.getBlob()
          }
          var Vb = Hb.URL || Hb.webkitURL,
            gb = Vb.createObjectURL(pb),
            lb = new Hb[wb](gb, Mb);
          return Vb.revokeObjectURL(gb), lb
        } catch (Lb) {
          return new Hb[wb]("data:application/javascript,".concat(encodeURIComponent(bb)), Mb)
        }
      } catch (Lb) {
        if (!eb) throw Error("Inline worker is not supported");
        return new Hb[wb](eb, Mb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);