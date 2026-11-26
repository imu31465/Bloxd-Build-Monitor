export const id = 63;
export const ids = [63];
export const modules = {
  40436: (BB, OB, GB) => {
    function YB() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function DB(BB) {
      return BB instanceof Uint8Array && (!YB() || !Buffer.isBuffer(BB))
    }

    function QB(BB) {
      return BB instanceof ArrayBuffer
    }

    function oB(BB) {
      return !!YB() && Buffer.isBuffer(BB)
    }
    var jB = GB(40440).e,
      yB = GB(40449).b,
      JB = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    OB.e = function(BB) {
      if (!DB(BB) && !QB(BB) && !oB(BB)) throw new TypeError(JB);
      var OB = !1,
        GB = !1;
      DB(BB) ? OB = !0 : QB(BB) && (GB = !0, BB = new Uint8Array(BB));
      var YB, jB, MB, PB = new yB(BB),
        zB = PB.maxCompressedLength();
      if (OB ? (YB = new Uint8Array(zB), MB = PB.compressToBuffer(YB)) : GB ? (YB = new ArrayBuffer(zB), jB = new Uint8Array(YB), MB = PB.compressToBuffer(jB)) : (YB = Buffer.alloc(zB), MB = PB.compressToBuffer(YB)), !YB.slice) {
        var lB = new Uint8Array(Array.prototype.slice.call(YB, 0, MB));
        if (OB) return lB;
        if (GB) return lB.buffer;
        throw new Error("Not implemented")
      }
      return YB.slice(0, MB)
    }
  },
  40449: (BB, OB) => {
    var GB = new Array(15);

    function YB(BB, OB) {
      return 506832829 * BB >>> OB
    }

    function DB(BB, OB) {
      return BB[OB] + (BB[OB + 1] << 8) + (BB[OB + 2] << 16) + (BB[OB + 3] << 24)
    }

    function QB(BB, OB, GB) {
      return BB[OB] === BB[GB] && BB[OB + 1] === BB[GB + 1] && BB[OB + 2] === BB[GB + 2] && BB[OB + 3] === BB[GB + 3]
    }

    function oB(BB, OB, GB, YB, DB) {
      return GB <= 60 ? (YB[DB] = GB - 1 << 2, DB += 1) : GB < 256 ? (YB[DB] = 240, YB[DB + 1] = GB - 1, DB += 2) : (YB[DB] = 244, YB[DB + 1] = GB - 1 & 255, YB[DB + 2] = GB - 1 >>> 8, DB += 3),
        function(BB, OB, GB, YB, DB) {
          var QB;
          for (QB = 0; QB < DB; QB++) GB[YB + QB] = BB[OB + QB]
        }(BB, OB, YB, DB, GB), DB + GB
    }

    function jB(BB, OB, GB, YB) {
      return YB < 12 && GB < 2048 ? (BB[OB] = 1 + (YB - 4 << 2) + (GB >>> 8 << 5), BB[OB + 1] = 255 & GB, OB + 2) : (BB[OB] = 2 + (YB - 1 << 2), BB[OB + 1] = 255 & GB, BB[OB + 2] = GB >>> 8, OB + 3)
    }

    function yB(BB, OB, GB, YB) {
      for (; YB >= 68;) OB = jB(BB, OB, GB, 64), YB -= 64;
      return YB > 64 && (OB = jB(BB, OB, GB, 60), YB -= 60), jB(BB, OB, GB, YB)
    }

    function JB(BB, OB, jB, JB, MB) {
      for (var PB = 1; 1 << PB <= jB && PB <= 14;) PB += 1;
      var zB = 32 - (PB -= 1);
      "undefined" === typeof GB[PB] && (GB[PB] = new Uint16Array(1 << PB));
      var lB, pB = GB[PB];
      for (lB = 0; lB < pB.length; lB++) pB[lB] = 0;
      var qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB = OB + jB,
        kB = OB,
        dB = OB,
        KB = !0;
      if (jB >= 15)
        for (qB = fB - 15, NB = YB(DB(BB, OB += 1), zB); KB;) {
          AB = 32, RB = OB;
          do {
            if (ZB = NB, VB = AB >>> 5, AB += 1, RB = (OB = RB) + VB, OB > qB) {
              KB = !1;
              break
            }
            NB = YB(DB(BB, RB), zB), WB = kB + pB[ZB], pB[ZB] = OB - kB
          } while (!QB(BB, OB, WB));
          if (!KB) break;
          MB = oB(BB, dB, OB - dB, JB, MB);
          do {
            for (SB = OB, nB = 4; OB + nB < fB && BB[OB + nB] === BB[WB + nB];) nB += 1;
            if (OB += nB, MB = yB(JB, MB, SB - WB, nB), dB = OB, OB >= qB) {
              KB = !1;
              break
            }
            pB[YB(DB(BB, OB - 1), zB)] = OB - 1 - kB, WB = kB + pB[UB = YB(DB(BB, OB), zB)], pB[UB] = OB - kB
          } while (QB(BB, OB, WB));
          if (!KB) break;
          NB = YB(DB(BB, OB += 1), zB)
        }
      return dB < fB && (MB = oB(BB, dB, fB - dB, JB, MB)), MB
    }

    function MB(BB) {
      this.array = BB
    }
    MB.prototype.maxCompressedLength = function() {
      var BB = this.array.length;
      return 32 + BB + Math.floor(BB / 6)
    }, MB.prototype.compressToBuffer = function(BB) {
      var OB, GB = this.array,
        YB = GB.length,
        DB = 0,
        QB = 0;
      for (QB = function(BB, OB, GB) {
          do {
            OB[GB] = 127 & BB, (BB >>>= 7) > 0 && (OB[GB] += 128), GB += 1
          } while (BB > 0);
          return GB
        }(YB, BB, QB); DB < YB;) QB = JB(GB, DB, OB = Math.min(YB - DB, 65536), BB, QB), DB += OB;
      return QB
    }, OB.b = MB
  },
  40440: (BB, OB) => {
    var GB = [0, 255, 65535, 16777215, 4294967295];

    function YB(BB, OB, GB, YB, DB) {
      var QB;
      for (QB = 0; QB < DB; QB++) GB[YB + QB] = BB[OB + QB]
    }

    function DB(BB, OB, GB, YB) {
      var DB;
      for (DB = 0; DB < YB; DB++) BB[OB + DB] = BB[OB - GB + DB]
    }

    function QB(BB) {
      this.array = BB, this.pos = 0
    }
    QB.prototype.readUncompressedLength = function() {
      for (var BB, OB, GB = 0, YB = 0; YB < 32 && this.pos < this.array.length;) {
        if (BB = this.array[this.pos], this.pos += 1, (OB = 127 & BB) << YB >>> YB !== OB) return -1;
        if (GB |= OB << YB, BB < 128) return GB;
        YB += 7
      }
      return -1
    }, QB.prototype.uncompressToBuffer = function(BB) {
      for (var OB, QB, oB, jB, yB = this.array, JB = yB.length, MB = this.pos, PB = 0; MB < yB.length;)
        if (OB = yB[MB], MB += 1, 0 === (3 & OB)) {
          if ((QB = 1 + (OB >>> 2)) > 60) {
            if (MB + 3 >= JB) return !1;
            oB = QB - 60, QB = 1 + ((QB = yB[MB] + (yB[MB + 1] << 8) + (yB[MB + 2] << 16) + (yB[MB + 3] << 24)) & GB[oB]), MB += oB
          }
          if (MB + QB > JB) return !1;
          YB(yB, MB, BB, PB, QB), MB += QB, PB += QB
        } else {
          switch (3 & OB) {
            case 1:
              QB = 4 + (OB >>> 2 & 7), jB = yB[MB] + (OB >>> 5 << 8), MB += 1;
              break;
            case 2:
              if (MB + 1 >= JB) return !1;
              QB = 1 + (OB >>> 2), jB = yB[MB] + (yB[MB + 1] << 8), MB += 2;
              break;
            case 3:
              if (MB + 3 >= JB) return !1;
              QB = 1 + (OB >>> 2), jB = yB[MB] + (yB[MB + 1] << 8) + (yB[MB + 2] << 16) + (yB[MB + 3] << 24), MB += 4
          }
          if (0 === jB || jB > PB) return !1;
          DB(BB, PB, jB, QB), PB += QB
        } return !0
    }, OB.e = QB
  },
  40430: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      SessionReplayRecorder: () => GG
    });
    const YB = {
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
      DB = {
        ...YB,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        captureBudgetMsPerSecond: 60,
        skipLowMemoryDevices: !0
      },
      QB = {
        desktop: YB,
        mobile: DB,
        tablet: DB
      };
    var oB = GB(3085),
      jB = GB(25);
    const yB = 4194304,
      JB = 16777216;
    var MB = GB(3816);
    const PB = [2, 4, 9, 3],
      zB = MB.d,
      lB = [zB.MouseInteraction, zB.MouseMove, zB.TouchMove],
      pB = [zB.MouseMove, zB.MouseInteraction, zB.Scroll, zB.ViewportResize, zB.Input, zB.TouchMove, zB.MediaInteraction, zB.Drag],
      qB = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function ZB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return !1;
      const OB = BB.timestamp;
      return "number" === typeof OB && OB > 0 && OB <= 864e13
    }
    class NB {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(BB) {
        this.eventCount++;
        const OB = function(BB) {
          var OB;
          return BB.type === MB.c.IncrementalSnapshot ? null === (OB = BB.data) || void 0 === OB ? void 0 : OB.source : void 0
        }(BB);
        this.timestamps.push(BB.timestamp), this.active.push(pB.includes(OB));
        const GB = function(BB) {
          var OB;
          const GB = BB.data;
          if (BB.type === MB.c.Custom && "$json_ld" === (null === GB || void 0 === GB ? void 0 : GB.tag)) return;
          const YB = "string" === typeof(null === GB || void 0 === GB ? void 0 : GB.href) ? GB.href.trim() : void 0,
            DB = "string" === typeof(null === GB || void 0 === GB || null === (OB = GB.payload) || void 0 === OB ? void 0 : OB.href) ? GB.payload.href.trim() : void 0;
          return YB || DB || void 0
        }(BB);
        GB && this.addUrl(GB), OB === zB.MouseInteraction && PB.includes(BB.data.type) && this.clickCount++, OB === zB.Input && this.keypressCount++, lB.includes(OB) && this.mouseActivityCount++;
        const YB = BB.data;
        if (BB.type === MB.c.Plugin && "rrweb/console@1" === (null === YB || void 0 === YB ? void 0 : YB.plugin)) {
          var DB;
          const BB = qB.get(null === (DB = YB.payload) || void 0 === DB ? void 0 : DB.level);
          "warn" === BB ? this.consoleWarnCount++ : "error" === BB ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(BB) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: BB,
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
      addUrl(BB) {
        const OB = BB.slice(0, 4096);
        this.firstUrl ??= OB, this.urls.size < 25 && !this.urls.has(OB) && this.urlsLength + OB.length <= 8192 && (this.urls.add(OB), this.urlsLength += OB.length)
      }
      activeMs() {
        var BB;
        const OB = this.timestamps.map(((BB, OB) => OB)).sort(((BB, OB) => this.timestamps[BB] - this.timestamps[OB]));
        let GB = 0,
          YB = null,
          DB = 0;
        for (const oB of OB) {
          const BB = this.timestamps[oB],
            OB = this.active[oB],
            jB = !YB || OB && !YB.isActive || YB.isActive && DB + 5e3 < BB;
          var QB;
          if (DB = OB ? BB : DB, jB) null !== (QB = YB) && void 0 !== QB && QB.isActive && (GB += Math.max(1, YB.end - YB.start)), YB = {
            start: BB,
            end: BB,
            isActive: OB
          };
          else YB.end = BB
        }
        return null !== (BB = YB) && void 0 !== BB && BB.isActive && (GB += Math.max(1, YB.end - YB.start)), Math.floor(GB)
      }
    }
    const RB = 5592405.333333333;
    class WB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = BB, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new NB, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get NP() {
        return 0 === this.lines.length
      }
      get tooBigForExit() {
        return this.holdsSnapshot || this.chars >= 262144
      }
      add(BB) {
        const OB = BB.events.filter(ZB),
          GB = OB.map((OB => JSON.stringify([BB.windowId, OB]) + "\n"));
        if (0 === GB.length) return [];
        const YB = [],
          DB = GB.reduce(((BB, OB) => BB + OB.length), 0);
        !this.NP && this.chars + DB > this.chunkChars && YB.push(this.finish());
        let QB = !1;
        return OB.forEach(((BB, OB) => {
          const DB = GB[OB];
          !this.NP && this.chars + DB.length > this.chunkChars && (YB.push(this.finish()), QB = !1), QB || (this.counter.addMessage(), QB = !0), this.counter.addEvent(BB), this.lines.push(DB), this.chars += DB.length, this.startMs = Math.min(this.startMs, BB.timestamp), this.endMs = Math.max(this.endMs, BB.timestamp), this.holdsSnapshot ||= BB.type === MB.c.FullSnapshot || BB.type === MB.c.Meta
        })), YB.filter((BB => null !== BB))
      }
      finish() {
        if (this.NP) return null;
        const {
          startMs: BB,
          endMs: OB,
          counter: GB,
          holdsSnapshot: YB,
          chunkIndex: DB,
          tailedChars: QB
        } = this, oB = {
          text: this.lines.join(""),
          startMs: BB,
          endMs: OB,
          counter: GB,
          holdsSnapshot: YB,
          chunkIndex: DB,
          tailedChars: QB
        };
        return this.reset(), oB
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > RB) return null;
        const BB = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, BB
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new NB, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function AB(BB) {
      let {
        text: OB
      } = BB;
      return OB.length <= RB
    }

    function VB(BB) {
      const {
        text: OB,
        startMs: GB,
        endMs: YB,
        counter: DB,
        chunkIndex: QB,
        tailedChars: oB
      } = BB;
      return oB !== OB.length && AB(BB) ? {
        chunkIndex: QB,
        fromChar: oB,
        text: OB.slice(oB),
        startMs: GB,
        endMs: YB,
        summary: DB.finish(0)
      } : null
    }

    function SB(BB, OB) {
      let {
        startMs: GB,
        endMs: YB,
        counter: DB,
        holdsSnapshot: QB
      } = BB, {
        bytes: oB,
        inflatedBytes: jB
      } = OB;
      return oB.byteLength > yB || jB > JB ? (console.warn(`Session replay: dropped a ${jB}-byte page recording chunk, over the size limits`), null) : {
        bytes: oB,
        startMs: GB,
        endMs: YB,
        summary: DB.finish(jB),
        holdsSnapshot: QB
      }
    }
    var nB = GB(40432);
    class UB {
      constructor(BB, OB, GB, YB) {
        this.uploader = BB, this.timing = OB, this.journal = GB, this.packer = YB, this.writer = new WB, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(BB) {
        this.pack(this.writer.add(BB)), (this.cutNext || this.timing.cutsEachBatch() || this.writer.tooBigForExit) && (this.cutNext = !1, this.cut());
        const OB = this.journal;
        null === OB || null !== this.tailTimer || this.writer.NP || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const BB = this.writer.takeTail();
          null !== BB && OB.domTail(BB)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const BB = this.writer.finish();
        this.pack(null === BB ? [] : [BB])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.NP) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const BB = this.packing[this.packing.length - 1];
        return void 0 !== BB ? new Promise((OB => {
          const GB = BB.onQueued;
          BB.onQueued = () => {
            null === GB || void 0 === GB || GB(), OB()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(BB) {
        const OB = BB.filter((BB => {
            const OB = function(BB) {
              let {
                text: OB
              } = BB;
              return OB.length <= JB || (console.warn(`Session replay: dropped a page recording chunk of ${OB.length} characters, over the size limits`), !1)
            }(BB);
            var GB;
            OB || (null === (GB = this.journal) || void 0 === GB || GB.domTailDropped(BB.chunkIndex));
            return OB
          })),
          GB = this.journalWorks() && OB.every((BB => AB(BB))) && this.packing.every((BB => BB.journalled));
        if (this.timing.packsNow(GB)) {
          for (const BB of OB) this.packing.push({
            text: BB,
            packed: null,
            journalled: this.tailHolds(BB)
          });
          for (const BB of [...this.packing]) this.packHere(BB);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const YB of OB) {
          const BB = null === this.journal ? null : VB(YB);
          null !== BB && this.journal.domTail(BB);
          const OB = {
            text: YB,
            packed: null,
            journalled: this.tailHolds(YB)
          };
          this.packing.push(OB), this.packer.pack(YB.text).then((BB => {
            OB.packed = BB, this.queuePacked()
          }), (() => {
            this.packHere(OB), this.queuePacked()
          }))
        }
      }
      packHere(BB) {
        const OB = this.packing.indexOf(BB);
        if (!(OB < 0)) try {
          BB.packed ??= (0, nB.c)(BB.text.text)
        } catch (DB) {
          var GB, YB;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", DB), this.packing.splice(OB, 1), null === (GB = this.journal) || void 0 === GB || GB.domTailDropped(BB.text.chunkIndex), null === (YB = BB.onQueued) || void 0 === YB || YB.call(BB)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(BB) {
        return this.journalWorks() && AB(BB)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: BB,
            packed: OB,
            onQueued: GB
          } = this.packing.shift();
          this.enqueue(BB.chunkIndex, SB(BB, OB)), null === GB || void 0 === GB || GB()
        }
      }
      enqueue(BB, OB) {
        var GB;
        if (null === OB) return void(null === (GB = this.journal) || void 0 === GB || GB.domTailDropped(BB));
        const {
          startMs: YB,
          endMs: DB,
          summary: QB,
          holdsSnapshot: oB
        } = OB, jB = OB.bytes.buffer, yB = {
          startMs: YB,
          endMs: DB,
          byteLength: jB.byteLength,
          summary: QB
        }, JB = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: jB,
          meta: {
            type: "dom",
            chunk: yB
          },
          dropLast: oB
        });
        var MB, PB;
        null === JB ? null === (MB = this.journal) || void 0 === MB || MB.domTailDropped(BB) : null === (PB = this.journal) || void 0 === PB || PB.domQueued(JB, jB, yB, BB)
      }
    }
    var fB = GB(40457);
    var kB = GB(40464),
      dB = GB(3349),
      KB = GB(92),
      uB = GB(98),
      mB = GB(31),
      IB = GB(5102);
    const FB = {
      logStats: !1
    };

    function iB(BB) {
      const OB = mB.g.getItem(BB);
      return "number" === typeof OB && Number.isFinite(OB) ? OB : null
    }

    function LB(BB, OB, GB, YB) {
      const DB = mB.g.getItem(BB);
      return DB === OB ? [(0, KB.getOperatingSystem)()] : DB === GB ? [] : YB
    }

    function gB(BB) {
      const OB = mB.g.getItem("replayGrab");
      return "stream" === OB ? [(0, dB.d)()] : "videoFrame" === OB || "bitmap" === OB ? [] : BB
    }
    const rB = "/v1/release",
      XB = yB;
    var wB = GB(1200),
      EB = GB(40477),
      cB = GB(40482),
      hB = GB(40491);

    function aB(BB) {
      return `replayJoiner/${BB}`
    }
    class eB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EB.i;
        this.baseUrl = BB, this.keepalive = OB
      }
      postPart(BB, OB) {
        const GB = (0, cB.i)(BB, OB),
          YB = 15e3 + (DB = GB.size, Math.ceil(DB / 16384 * 1e3));
        var DB;
        return this.post("/v1/part", GB, GB.size, YB, BB.sequence)
      }
      finish(BB) {
        const OB = JSON.stringify(BB);
        return this.post("/v1/finish", OB, (0, EB.m)(OB), 3e4, BB.sequence)
      }
      release(BB) {
        return !this.keepalive.isInFlight(aB(BB.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${rB}`, JSON.stringify(BB))
      }
      async post(BB, OB, GB, YB, DB) {
        const QB = `${this.baseUrl}${BB}`,
          oB = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: OB,
            signal: (0, wB.t)(YB)
          },
          jB = GB <= EB.e ? await this.keepalive.fetch(QB, oB, GB, aB(DB)) : await fetch(QB, oB);
        if (!jB.ok) throw new hB.e(`Part joiner ${BB} failed with ${jB.status}`, jB.status);
        return await jB.json()
      }
    }

    function TB(BB) {
      return {
        releaseUrl: `${BB.url}${rB}`,
        token: BB.token,
        relay: {
          url: `${BB.url}/v1/relay`,
          maxBytes: XB
        }
      }
    }
    var bB = GB(7028),
      CB = GB(40497),
      HB = GB(40505),
      vB = GB(40514);

    function sB() {
      return (0, kB.e)().manifestUrl
    }
    const xB = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class tB {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = OB, this.sendEnabled = GB, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...xB,
          ...YB
        };
        const DB = Math.round((0, CB.e)());
        this.manifest = {
          recordingId: BB,
          startedAtMs: DB,
          endedAtMs: DB,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(BB, OB, GB) {
        const YB = {
            sequence: BB,
            ...OB,
            startMs: Math.round(OB.startMs),
            endMs: Math.round(OB.endMs),
            ...null === GB ? {} : {
              parts: GB
            }
          },
          DB = this.manifest.videoSegments.findIndex((OB => OB.sequence === BB)); - 1 === DB ? this.manifest.videoSegments.push(YB) : this.manifest.videoSegments[DB] = YB, this.sendSoon()
      }
      setStill(BB, OB) {
        var GB, YB;
        BB > (null !== (GB = null === (YB = this.manifest.still) || void 0 === YB ? void 0 : YB.atMs) && void 0 !== GB ? GB : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(BB),
          sequence: OB
        }, this.sendSoon())
      }
      addTelemetrySegment(BB, OB, GB) {
        this.manifest.telemetrySegments.push({
          sequence: BB,
          startMs: Math.round(OB),
          endMs: Math.round(GB)
        }), this.sendSoon()
      }
      addDomSegment(BB) {
        this.pendingDom.add(BB), this.sendSoon()
      }
      addCreatorGrant(BB, OB) {
        this.creatorGrants.set(BB, OB)
      }
      gameJoined(BB) {
        this.gameLeft(), this.manifest.games.push({
          ...BB,
          joinedAtMs: Math.round((0, CB.e)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(BB) {
        const OB = this.manifest.games.at(-1);
        return !(!OB || (null === BB ? null !== OB.leftAtMs : OB.gameNameWithVariation !== BB)) && (OB.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(BB) {
        const OB = this.manifest.games.at(-1);
        OB && null === OB.leftAtMs && (OB[BB] = !0)
      }
      updateCurrentStay(BB) {
        var OB, GB, YB;
        const DB = this.manifest.games.at(-1);
        if (!DB || null !== DB.leftAtMs) return !1;
        const QB = (0, bB.l)(DB.furthestStep, BB.furthestStep),
          oB = Math.max(null !== (OB = DB.unboundKeyPresses) && void 0 !== OB ? OB : 0, null !== (GB = BB.unboundKeyPresses) && void 0 !== GB ? GB : 0);
        return (QB !== DB.furthestStep || oB !== (null !== (YB = DB.unboundKeyPresses) && void 0 !== YB ? YB : 0)) && (void 0 !== QB && (DB.furthestStep = QB), oB > 0 && (DB.unboundKeyPresses = oB), !0)
      }
      gameLeft() {
        const BB = this.manifest.games.at(-1);
        BB && null === BB.leftAtMs && (BB.leftAtMs = Math.round((0, CB.e)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(BB) {
        this.schedule(1e3, BB)
      }
      send() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var OB;
        if (this.sending) return void(this.queuedSend = BO(null !== (OB = this.queuedSend) && void 0 !== OB ? OB : [], BB));
        const GB = this.prepareSend(BB);
        null !== GB && (this.sending = !0, this.postInTurn(GB).then((BB => {
          this.sending = !1, this.retries = "retryLater" === BB ? this.retries + 1 : 0;
          const OB = this.queuedSend;
          null !== OB ? (this.queuedSend = null, this.send(OB)) : "retryLater" === BB && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: GB
          }
          of null !== (OB = this.prepareSend(BB)) && void 0 !== OB ? OB : []) {
          var OB;
          EB.i.sendBeacon(sB(), JSON.stringify(GB)) || (0, HB.c)(sB(), GB)
        }
      }
      async postInTurn(BB) {
        for (const {
            request: OB,
            items: GB
          }
          of BB) {
          const BB = await (0, HB.c)(sB(), OB);
          if ("retryLater" === BB) return BB;
          for (const OB of GB) OB.ack("uploaded" === BB);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(BB, OB) {
        const GB = Date.now() + BB;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= GB) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const YB = setTimeout((() => {
          this.send(OB())
        }), BB);
        this.sendTimer = {
          timer: YB,
          dueMs: GB
        }
      }
      prepareSend(BB) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, CB.e)());
        const OB = this.pendingItems(BB);
        this.options.onSend({
          ...this.manifest,
          games: OB.flatMap((BB => "games" === BB.list ? [BB.value] : []))
        });
        const {
          recordingId: GB,
          startedAtMs: YB,
          endedAtMs: DB,
          still: QB
        } = this.manifest, oB = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: GB,
            startedAtMs: YB,
            endedAtMs: DB,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === QB ? {} : {
              still: QB
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, vB.d)(oB, OB)
      }
      pendingItems(BB) {
        const OB = [];
        for (const YB of this.creatorGrants.values()) this.ackedGrants.has(YB) || OB.push({
          list: "creatorGrants",
          value: YB,
          ack: () => {
            this.ackedGrants.add(YB)
          }
        });
        for (const YB of this.manifest.games) {
          const BB = JSON.stringify(YB);
          this.ackedGames.get(YB) !== BB && OB.push({
            list: "games",
            value: {
              ...YB
            },
            ack: () => {
              this.ackedGames.set(YB, BB)
            }
          })
        }
        for (const YB of this.manifest.videoSegments) this.ackedVideo.get(YB.sequence) !== YB && OB.push({
          list: "videoSegments",
          value: YB,
          ack: BB => {
            this.ackedVideo.set(YB.sequence, YB), BB && this.options.onListed({
              list: "videoSegments",
              value: YB
            })
          }
        });
        const GB = new Set;
        for (const YB of this.manifest.telemetrySegments) GB.add(YB.sequence), this.ackedTelemetry.has(YB) || OB.push({
          list: "telemetrySegments",
          value: YB,
          ack: BB => {
            this.ackedTelemetry.add(YB), BB && this.options.onListed({
              list: "telemetrySegments",
              value: YB
            })
          }
        });
        for (const YB of this.pendingDom) OB.push({
          list: "domSegments",
          value: YB,
          ack: BB => {
            this.pendingDom.delete(YB), BB && this.options.onListed({
              list: "domSegments",
              value: YB
            })
          }
        });
        for (const YB of BO([], BB)) GB.has(YB.sequence) || OB.push({
          list: "telemetrySegments",
          value: YB,
          ack: () => {}
        });
        return OB
      }
    }

    function BO(BB, OB) {
      const GB = [...BB];
      for (const YB of OB) GB.some((BB => BB.sequence === YB.sequence)) || GB.push({
        sequence: YB.sequence,
        startMs: Math.round(YB.startMs),
        endMs: Math.round(YB.endMs)
      });
      return GB
    }
    var OO = GB(40469),
      GO = GB(5122);

    function YO(BB) {
      return {
        ...BB,
        videoSegments: [],
        telemetrySegments: [],
        games: BB.games.map((BB => ({
          ...BB
        })))
      }
    }
    class DO {
      constructor(BB, OB, GB, YB) {
        var DB;
        this.journal = BB, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: OB.recordingId,
          uploadToken: OB.uploadToken,
          expiresAtMs: OB.expiresAtMs,
          nextVideoSequence: 0,
          manifest: YO(GB),
          endpoints: YB,
          lateUploadUntilMs: OB.expiresAtMs + OO.c,
          ...void 0 === OB.partJoiner ? {} : {
            partJoiner: TB(OB.partJoiner)
          }
        }, null === (DB = navigator.locks) || void 0 === DB || DB.request((0, GO.u)(OB.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(BB) {
        this.record.manifest = YO(BB), this.putRecording()
      }
      videoQueued(BB, OB) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, OB + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), BB, OB)
      }
      videoPartLanded(BB, OB, GB) {
        this.landedVideo.set(BB, {
          segmentId: BB,
          ...OB
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: BB,
          ...OB
        }, GB)
      }
      telemetryQueued(BB, OB, GB, YB) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: BB,
          startMs: GB,
          endMs: YB,
          bytes: OB
        })
      }
      videoUploaded(BB) {
        this.journal.removeVideoChunks(this.record.recordingId, BB)
      }
      videoSettled(BB) {
        this.landedVideo.delete(BB), this.journal.removeVideo(this.record.recordingId, BB)
      }
      telemetryLanded(BB, OB, GB, YB) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: BB,
          startMs: GB,
          endMs: YB,
          bytes: OB,
          landed: !0
        })
      }
      telemetrySettled(BB) {
        this.journal.removeTelemetry(this.record.recordingId, BB)
      }
      domQueued(BB, OB, GB, YB) {
        var DB;
        this.record.nextDomSequence = Math.max(null !== (DB = this.record.nextDomSequence) && void 0 !== DB ? DB : 0, BB + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: BB,
          chunk: GB,
          bytes: OB
        }, YB)
      }
      domTail(BB) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...BB
        })
      }
      domTailDropped(BB) {
        this.journal.removeDomTail(this.record.recordingId, BB)
      }
      domLanded(BB, OB) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: BB,
          chunk: OB,
          bytes: null
        })
      }
      domSettled(BB) {
        this.journal.removeDom(this.record.recordingId, BB)
      }
      setMarker() {
        mB.g.setItem(GO.m, !0)
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
    class QO {
      constructor(BB) {
        this.deps = BB, this.pageHiding = !1, this.exitFlushedAtMs = -1 / 0
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(BB) {
        document.addEventListener("visibilitychange", (() => {
          const BB = document.hidden;
          this.deps.writeEvent(BB ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: BB
          }), BB ? (this.flushTelemetryOnExit(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording()) : this.exitFlushedAtMs = -1 / 0
        }), {
          signal: BB
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: BB
        }), window.addEventListener("pagehide", (BB => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.flushTelemetryOnExit(), this.deps.stills.beacon(), this.sendManifest(), BB.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: BB
        })
      }
      flushTelemetryOnExit() {
        const BB = performance.now();
        BB - this.exitFlushedAtMs > 1e3 && (this.deps.flushTelemetry(), this.exitFlushedAtMs = BB)
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((BB => {
          let {
            sequence: OB,
            meta: GB
          } = BB;
          return "telemetry" === GB.type ? [{
            sequence: OB,
            startMs: GB.startMs,
            endMs: GB.endMs
          }] : []
        }))
      }
    }
    var oO = GB(36856),
      jO = GB.n(oO);

    function yO() {
      return jO()('/*! For license information please see sessionReplayVideo.worker.b6cc7875.worker.js.LICENSE.txt */\n(()=>{var BB={7:()=>{}},OB={};function GB(YB){var DB=OB[YB];if(void 0!==DB)return DB.exports;var QB=OB[YB]={exports:{}};return BB[YB](QB,QB.exports,GB),QB.exports}(()=>{var BB,OB=Object.getPrototypeOf?BB=>Object.getPrototypeOf(BB):BB=>BB.__proto__;GB.t=function(YB,DB){if(1&DB&&(YB=this(YB)),8&DB)return YB;if("object"===typeof YB&&YB){if(4&DB&&YB.__esModule)return YB;if(16&DB&&"function"===typeof YB.then)return YB}var QB=Object.create(null);GB.r(QB);var oB={};BB=BB||[null,OB({}),OB([]),OB(OB)];for(var jB=2&DB&&YB;"object"==typeof jB&&!~BB.indexOf(jB);jB=OB(jB))Object.getOwnPropertyNames(jB).forEach((BB=>oB[BB]=()=>YB[BB]));return oB.default=()=>YB,GB.d(QB,oB),QB}})(),GB.d=(BB,OB)=>{for(var YB in OB)GB.o(OB,YB)&&!GB.o(BB,YB)&&Object.defineProperty(BB,YB,{enumerable:!0,get:OB[YB]})},GB.o=(BB,OB)=>Object.prototype.hasOwnProperty.call(BB,OB),GB.r=BB=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(BB,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(BB,"__esModule",{value:!0})};const YB="bloxdSessionReplayTails";const DB=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function QB(BB){return new Promise(((OB,GB)=>{BB.onsuccess=()=>{OB(BB.result)},BB.onerror=()=>{GB(BB.error)}}))}function oB(BB){return new Promise(((OB,GB)=>{BB.oncomplete=()=>{OB()},BB.onerror=()=>{GB(BB.error)},BB.onabort=()=>{var OB;GB(null!==(OB=BB.error)&&void 0!==OB?OB:new Error("IndexedDB transaction aborted"))}}))}function jB(BB){return IDBKeyRange.bound([BB],[BB,[]])}function yB(BB,OB){return IDBKeyRange.bound([BB,OB],[BB,OB,[]])}class JB{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(BB){this.write(["recordings"],(OB=>{OB.objectStore("recordings").put(BB)}))}putVideoSequence(BB,OB,GB){this.write(["recordings","videoSequences"],(YB=>{YB.objectStore("recordings").put(BB),YB.objectStore("videoSequences").put({recordingId:BB.recordingId,segmentId:OB,sequence:GB})}))}appendVideo(BB,OB){this.write(["videoHeaders","videoChunks"],(GB=>{GB.objectStore("videoHeaders").put(BB);const YB=GB.objectStore("videoChunks");for(const BB of OB)YB.put(BB)}))}putVideoProgress(BB,OB){this.write(["videoProgress","videoChunks"],(GB=>{if(GB.objectStore("videoProgress").put(BB),OB>0){const{recordingId:YB,segmentId:DB}=BB;GB.objectStore("videoChunks").delete(IDBKeyRange.bound([YB,DB,0],[YB,DB,OB],!1,!0))}}))}removeVideoChunks(BB,OB){this.write(["videoChunks"],(GB=>{GB.objectStore("videoChunks").delete(yB(BB,OB))}))}removeVideo(BB,OB){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(GB=>{GB.objectStore("videoHeaders").delete([BB,OB]),GB.objectStore("videoChunks").delete(yB(BB,OB)),GB.objectStore("videoSequences").delete([BB,OB]),GB.objectStore("videoProgress").delete([BB,OB])}))}putTelemetry(BB){this.write(["telemetry"],(OB=>{OB.objectStore("telemetry").put(BB)}))}removeTelemetry(BB,OB){this.write(["telemetry"],(GB=>{GB.objectStore("telemetry").delete([BB,OB])}))}putDom(BB){this.write(["dom"],(OB=>{OB.objectStore("dom").put(BB)}))}queueDom(BB,OB,GB){this.write(["recordings","dom","domTail"],(YB=>{YB.objectStore("recordings").put(BB),YB.objectStore("dom").put(OB),YB.objectStore("domTail").delete(yB(OB.recordingId,GB))}),(YB=>{console.warn(`Session replay couldn\'t journal page recording chunk ${OB.sequence}; a closing tab may lose it.`,YB),this.write(["recordings","domTail"],(YB=>{YB.objectStore("recordings").put(BB),YB.objectStore("domTail").delete(yB(OB.recordingId,GB))}))}))}putDomTail(BB){this.tailRecordings.add(BB.recordingId),this.write(["domTail"],(OB=>{OB.objectStore("domTail").put(BB)}))}removeDomTail(BB,OB){this.write(["domTail"],(GB=>{GB.objectStore("domTail").delete(yB(BB,OB))}))}removeDom(BB,OB){this.write(["dom"],(GB=>{GB.objectStore("dom").delete([BB,OB])}))}async listRecordings(){const BB=await this.open();return await QB(BB.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(BB){const OB=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),GB=jB(BB.recordingId),YB=BB=>QB(OB.objectStore(BB).getAll(GB)),[DB,oB,yB,JB,MB,PB,zB]=await Promise.all([YB("videoHeaders"),YB("videoChunks"),YB("videoSequences"),YB("videoProgress"),YB("telemetry"),YB("dom"),YB("domTail")]);return{recording:BB,telemetry:MB,dom:PB,domTails:zB,video:DB.map((BB=>{var OB,GB,YB;return{header:BB,sequence:null!==(OB=null===(GB=yB.find((OB=>OB.segmentId===BB.segmentId)))||void 0===GB?void 0:GB.sequence)&&void 0!==OB?OB:null,progress:null!==(YB=JB.find((OB=>OB.segmentId===BB.segmentId)))&&void 0!==YB?YB:null,chunks:oB.filter((OB=>OB.segmentId===BB.segmentId))}}))}}async deleteRecording(BB){const OB=(await this.open()).transaction([...DB],"readwrite");OB.objectStore("recordings").delete(BB);for(const GB of DB.slice(1))OB.objectStore(GB).delete(jB(BB));await oB(OB)}async forgetSent(BB,OB){const GB=(await this.open()).transaction([...DB],"readwrite"),{recordingId:YB}=BB;GB.objectStore("recordings").put(BB);for(const DB of OB.videoSegmentIds)GB.objectStore("videoHeaders").delete([YB,DB]),GB.objectStore("videoChunks").delete(yB(YB,DB)),GB.objectStore("videoSequences").delete([YB,DB]),GB.objectStore("videoProgress").delete([YB,DB]);for(const DB of OB.telemetrySequences)GB.objectStore("telemetry").delete([YB,DB]);for(const DB of OB.domSequences)GB.objectStore("dom").delete([YB,DB]);for(const DB of OB.domTailChunks)GB.objectStore("domTail").delete(yB(YB,DB));await oB(GB)}write(BB,OB){let GB=arguments.length>2&&void 0!==arguments[2]?arguments[2]:BB=>{this.fail(BB)};if(this.failed)return;const YB=YB=>{try{var DB;const QB=YB.transaction(BB,"readwrite");OB(QB),null===(DB=QB.commit)||void 0===DB||DB.call(QB),oB(QB).catch(GB)}catch(QB){GB(QB)}};null===this.db?this.open().then(YB,(BB=>{this.fail(BB)})):YB(this.db)}fail(BB){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",BB),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const BB=BB=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",BB)};try{const OB=this.db.transaction(["domTail"],"readwrite");for(const BB of this.tailRecordings)OB.objectStore("domTail").delete(jB(BB));oB(OB).catch(BB)}catch(OB){BB(OB)}}open(){return this.opening??=new Promise(((BB,OB)=>{const GB=indexedDB.open(YB,4);GB.onupgradeneeded=BB=>{const OB=GB.result;BB.oldVersion<1&&(OB.createObjectStore("recordings",{keyPath:"recordingId"}),OB.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),OB.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),OB.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),OB.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),BB.oldVersion<2&&OB.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),BB.oldVersion<3&&OB.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),OB.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let DB=!1;GB.onblocked=()=>{DB=!0,OB(new Error("An older tab holds the upload journal at an earlier version"))},GB.onsuccess=()=>{DB?GB.result.close():(this.db=GB.result,this.db.onversionchange=()=>{var BB;this.dropTails(),null===(BB=this.db)||void 0===BB||BB.close(),this.db=null,this.opening=null},BB(GB.result))},GB.onerror=()=>{OB(GB.error)}})),this.opening}}const MB=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class PB{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return MB[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(BB){this.firstSampleMs??=BB.nowMs;const OB=null!==BB.pingMs&&BB.pingMs>300,GB=BB.nowMs-this.firstSampleMs>=3e4;GB&&(null!==BB.gameFps&&BB.gameFps<24||OB)?this.gameStrugglingSinceMs??=BB.nowMs:this.gameStrugglingSinceMs=null,GB&&BB.encoderBackpressureDrops>0?this.backpressureSinceMs??=BB.nowMs:this.backpressureSinceMs=null;const YB=null!==this.backpressureSinceMs&&BB.nowMs-this.backpressureSinceMs>=3e3,DB=YB||null!==this.gameStrugglingSinceMs&&BB.nowMs-this.gameStrugglingSinceMs>=1e4,QB=this.steppedDownForGameFps?45:24,oB=0===BB.encoderBackpressureDrops&&!OB&&(null===BB.gameFps||BB.gameFps>=QB);return DB?(this.healthySinceMs=null,this.level<MB.length-1&&BB.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=BB.nowMs,this.lastChangeReason=YB?"encoderBackpressure":OB?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):oB&&0!==this.level?(this.healthySinceMs??=BB.nowMs,BB.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=BB.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function zB(BB,OB){return BB.width===OB.width&&BB.height===OB.height}function lB(BB){return Math.max(2,2*Math.floor(BB/2))}function pB(BB){return Math.ceil(BB.width/16)*Math.ceil(BB.height/16)}function qB(BB,OB,GB){const YB=BB.bitrate*pB(OB)/BB.maxMacroblocks;return GB*Math.min(BB.bitrate,Math.max(BB.minBitrate,YB/GB))}class ZB{constructor(BB){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/BB}setMaxFps(BB){this.intervalMs=1e3/BB}shouldKeep(BB){return!(BB<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=BB-this.nextDueMs>this.intervalMs?BB+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const NB=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],RB=["variable","constant"],WB=["realtime","quality"],AB=["quality","realtime"];class VB{constructor(){this.canvas=null,this.context=null}scale(BB,OB){if(BB.displayWidth===OB.width&&BB.displayHeight===OB.height)return BB;return this.contextFor(OB).drawImage(BB,0,0,OB.width,OB.height),new VideoFrame(this.canvas,{timestamp:BB.timestamp,alpha:"discard"})}contextFor(BB){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(BB.width,BB.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===BB.width&&this.canvas.height===BB.height||(this.canvas.width=BB.width,this.canvas.height=BB.height),this.context}}const SB=[...[.7,.6,.5,.42,.35].map((BB=>({width:640,quality:BB}))),{width:480,quality:.35},{width:360,quality:.35}],nB=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class UB{constructor(BB,OB){this.steps=BB,this.targetBytes=OB,this.index=0}get step(){return this.steps[this.index]}record(BB){BB>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):BB<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class fB{constructor(BB){this.post=BB,this.full=new UB(SB,28e3),this.small=new UB(nB,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(BB,OB){if(!(this.failed||this.encoding||BB.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=BB.timestamp;try{const GB=kB(BB,BB.displayWidth,BB.displayHeight,this.full.step.width),YB=kB(GB,GB.width,GB.height,this.small.step.width);this.encoding=!0,this.encode(GB,YB,OB).finally((()=>{this.encoding=!1}))}catch(GB){this.fail(GB)}}}async encode(BB,OB,GB){try{const[YB,DB]=await Promise.all([BB.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),OB.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(YB.size),this.small.record(DB.size);const QB=await YB.arrayBuffer(),oB=DB.size<=8192?await DB.arrayBuffer():null;this.post({type:"still",bytes:QB,small:oB,atMs:GB},null===oB?[QB]:[QB,oB])}catch(YB){this.fail(YB)}}fail(BB){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",BB)}}function kB(BB,OB,GB,YB){const DB=Math.min(YB,OB),QB=Math.max(1,Math.round(GB*DB/OB)),oB=new OffscreenCanvas(DB,QB),jB=oB.getContext("2d");if(null===jB)throw new Error("no 2D context");return jB.drawImage(BB,0,0,DB,QB),oB}let dB=Date.now()-performance.now();function KB(){const BB=performance.now(),OB=Date.now();return Math.abs(OB-(BB+dB))>20&&(dB=OB-BB),BB+dB}function uB(BB){if(!BB)throw new Error("Assertion failed.")}const mB=Math.PI/180,IB=(Math.PI,[1,0,0,0,1,0,0,0,1]),FB=BB=>{const OB=BB*mB,GB=Math.round(Math.cos(OB)),YB=Math.round(Math.sin(OB));return[GB,YB,0,-YB,GB,0,0,0,1]},iB=(BB,OB)=>[1,0,0,0,1,0,BB,OB,1],LB=(BB,OB)=>{const GB=new Array(9);for(let YB=0;YB<3;YB++)for(let DB=0;DB<3;DB++)GB[3*YB+DB]=BB[3*YB]*OB[DB]+BB[3*YB+1]*OB[3+DB]+BB[3*YB+2]*OB[6+DB];return GB},gB=BB=>BB&&BB[BB.length-1],rB=BB=>BB>=0&&BB<2**32,XB=BB=>{let OB=0;for(;0===BB.readBits(1)&&OB<32;)OB++;if(OB>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<OB)-1+BB.readBits(OB)},wB=BB=>{const OB=XB(BB);return 0===(1&OB)?-(OB>>1):OB+1>>1},EB=BB=>BB.constructor===Uint8Array?BB:ArrayBuffer.isView(BB)?new Uint8Array(BB.buffer,BB.byteOffset,BB.byteLength):new Uint8Array(BB),cB=BB=>BB.constructor===DataView?BB:ArrayBuffer.isView(BB)?new DataView(BB.buffer,BB.byteOffset,BB.byteLength):new DataView(BB),hB="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const OB=new Uint8Array(3*BB.length);let GB=0;for(let YB=0;YB<BB.length;YB++){let DB=BB.charCodeAt(YB);if(DB<128)OB[GB++]=DB;else if(DB<2048)OB[GB++]=192|DB>>6,OB[GB++]=128|63&DB;else if(DB<55296||DB>57343)OB[GB++]=224|DB>>12,OB[GB++]=128|DB>>6&63,OB[GB++]=128|63&DB;else{const QB=YB+1<BB.length?BB.charCodeAt(YB+1):0;DB<56320&&QB>=56320&&QB<=57343?(DB=65536+(DB-55296<<10)+(QB-56320),YB++,OB[GB++]=240|DB>>18,OB[GB++]=128|DB>>12&63,OB[GB++]=128|DB>>6&63,OB[GB++]=128|63&DB):(OB[GB++]=239,OB[GB++]=191,OB[GB++]=189)}}return OB.slice(0,GB)}},aB=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new hB),eB={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},TB={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},bB={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},CB=BB=>!BB||null==BB.primaries&&null==BB.transfer&&null==BB.matrix&&null==BB.fullRange,HB=BB=>BB instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&BB instanceof SharedArrayBuffer||ArrayBuffer.isView(BB);class vB{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let BB;const OB=new Promise((OB=>{let GB=!1;BB=()=>{GB||(OB(),this.pending--,GB=!0)}})),GB=this.currentPromise;return this.currentPromise=OB,this.pending++,await GB,BB}}const sB=()=>{let BB,OB;return{promise:new Promise(((GB,YB)=>{BB=GB,OB=YB})),resolve:BB,reject:OB}},xB=BB=>{throw new Error(`Unexpected value: ${BB}`)},tB=(BB,OB,GB,YB)=>{GB>>>=0,GB&=16777215,YB?(BB.setUint8(OB,255&GB),BB.setUint8(OB+1,GB>>>8&255),BB.setUint8(OB+2,GB>>>16&255)):(BB.setUint8(OB,GB>>>16&255),BB.setUint8(OB+1,GB>>>8&255),BB.setUint8(OB+2,255&GB))},BO="und",OO=BB=>{let OB=0;for(;0!==BB;)BB&=BB-1,OB++;return OB},GO=/^[a-z]{3}$/,YO=1e6*(1+Number.EPSILON);const DO=(async()=>{})().constructor,QO=BB=>BB instanceof DO||BB instanceof Promise||"function"===typeof BB?.then,oO=function*(BB){for(const OB in BB){const GB=BB[OB];void 0!==GB&&(yield{key:OB,value:GB})}},jO=BB=>"number"===typeof BB&&!Number.isNaN(BB),yO=BB=>{uB(Number.isInteger(BB.num)),uB(Number.isInteger(BB.den)),uB(0!==BB.den);let OB=Math.abs(BB.num),GB=Math.abs(BB.den);for(;0!==GB;){const BB=OB%GB;OB=GB,GB=BB}const YB=OB||1;return{num:BB.num/YB,den:BB.den/YB}};new Map,new Map;const JO=BB=>Array.isArray(BB)?BB:[BB];class MO{constructor(){this._listeners=new Map}on(BB,OB,GB){this._listeners.has(BB)||this._listeners.set(BB,new Set);const YB={oP:OB,once:GB?.once??!1};return this._listeners.get(BB).add(YB),()=>{this._listeners.get(BB)?.delete(YB)}}_emit(){for(var BB=arguments.length,OB=new Array(BB),GB=0;GB<BB;GB++)OB[GB]=arguments[GB];const[YB,DB]=OB,QB=this._listeners.get(YB);if(QB)for(const jB of QB){try{jB.oP(DB)}catch(oB){console.error(oB)}jB.once&&QB.delete(jB)}}}const PO=BB=>null!==BB&&"object"===typeof BB&&Object.getPrototypeOf(BB)===Object.prototype&&Object.values(BB).every((BB=>"string"===typeof BB));class zO{constructor(BB,OB){if(this.data=BB,this.mimeType=OB,!(BB instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof OB)throw new TypeError("mimeType must be a string.")}}class lO{constructor(BB,OB,GB,YB){if(this.data=BB,this.mimeType=OB,this.name=GB,this.description=YB,!(BB instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==OB&&"string"!==typeof OB)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==GB&&"string"!==typeof GB)throw new TypeError("name, when provided, must be a string.");if(void 0!==YB&&"string"!==typeof YB)throw new TypeError("description, when provided, must be a string.")}}class pO{constructor(BB){this.bytes=BB,this.pos=0}seekToByte(BB){this.pos=8*BB}readBit(){const BB=Math.floor(this.pos/8),OB=this.bytes[BB]??0,GB=7-(7&this.pos),YB=(OB&1<<GB)>>GB;return this.pos++,YB}readBits(BB){if(1===BB)return this.readBit();let OB=0;for(let GB=0;GB<BB;GB++)OB<<=1,OB|=this.readBit();return OB}writeBits(BB,OB){const GB=this.pos+BB;for(let YB=this.pos;YB<GB;YB++){const BB=Math.floor(YB/8);let DB=this.bytes[BB];const QB=7-(7&YB);DB&=~(1<<QB),DB|=(OB&1<<GB-YB-1)>>GB-YB-1<<QB,this.bytes[BB]=DB}this.pos=GB}copyBits(BB,OB){let GB=0;for(;GB<BB-7;GB+=8)this.writeBits(8,OB.readBits(8));const YB=BB-GB;YB>0&&this.writeBits(YB,OB.readBits(YB))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const BB=this.pos/8,OB=this.bytes[BB]??0;return this.pos+=8,OB}skipBits(BB){this.pos+=BB}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const BB=new pO(this.bytes);return BB.pos=this.pos,BB}}const qO=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],ZO=[-1,1,2,3,4,5,6,8],NO=BB=>{const OB=5===BB.objectType||29===BB.objectType,GB=29===BB.objectType,YB=OB?BB.outputSampleRate/2:BB.outputSampleRate,DB=GB?1:BB.outputNumberOfChannels,QB=ZO.indexOf(DB);if(-1===QB)throw new TypeError(`Unsupported number of channels: ${BB.outputNumberOfChannels}`);let oB=16;BB.objectType>=32&&(oB+=6),15===AO(YB)&&(oB+=24),OB&&(oB+=9,15===AO(BB.outputSampleRate)&&(oB+=24));const jB=Math.ceil(oB/8),yB=new Uint8Array(jB),JB=new pO(yB);return RO(JB,BB.objectType),WO(JB,YB),JB.writeBits(4,QB),OB&&(WO(JB,BB.outputSampleRate),RO(JB,2)),JB.writeBits(3,0),yB},RO=(BB,OB)=>{OB<32?BB.writeBits(5,OB):(BB.writeBits(5,31),BB.writeBits(6,OB-32))},WO=(BB,OB)=>{const GB=AO(OB);BB.writeBits(4,GB),15===GB&&BB.writeBits(24,OB)},AO=BB=>{const OB=qO.indexOf(BB);return-1===OB?15:OB};var VO;!function(BB){BB[BB.Silent=0]="Silent",BB[BB.Errors=1]="Errors",BB[BB.Warnings=2]="Warnings",BB[BB.Info=3]="Info"}(VO||(VO={}));class SO{constructor(){}static get level(){return SO._level}static set level(BB){if(BB!==VO.Silent&&BB!==VO.Errors&&BB!==VO.Warnings&&BB!==VO.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");SO._level=BB}static get _emitter(){return SO._emitterInstance??=new MO}static on(BB,OB,GB){return SO._emitter.on(BB,OB,GB)}static _error(){for(var BB=arguments.length,OB=new Array(BB),GB=0;GB<BB;GB++)OB[GB]=arguments[GB];SO._emitter._emit("error",OB),SO._level>=VO.Errors&&console.error(...OB)}static _warn(){for(var BB=arguments.length,OB=new Array(BB),GB=0;GB<BB;GB++)OB[GB]=arguments[GB];SO._emitter._emit("warn",OB),SO._level>=VO.Warnings&&console.warn(...OB)}static _info(){for(var BB=arguments.length,OB=new Array(BB),GB=0;GB<BB;GB++)OB[GB]=arguments[GB];SO._emitter._emit("info",OB),SO._level>=VO.Info&&console.info(...OB)}}SO._level=VO.Info,SO._emitterInstance=null;const nO=[48e3,44100,32e3],UO=[24e3,22050,16e3],fO="Mediabunny v1.61.3";var kO,dO;!function(BB){BB[BB.NON_IDR_SLICE=1]="NON_IDR_SLICE",BB[BB.SLICE_DPA=2]="SLICE_DPA",BB[BB.SLICE_DPB=3]="SLICE_DPB",BB[BB.SLICE_DPC=4]="SLICE_DPC",BB[BB.IDR=5]="IDR",BB[BB.SEI=6]="SEI",BB[BB.SPS=7]="SPS",BB[BB.PPS=8]="PPS",BB[BB.AUD=9]="AUD",BB[BB.SPS_EXT=13]="SPS_EXT"}(kO||(kO={})),function(BB){BB[BB.RASL_N=8]="RASL_N",BB[BB.RASL_R=9]="RASL_R",BB[BB.BLA_W_LP=16]="BLA_W_LP",BB[BB.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",BB[BB.VPS_NUT=32]="VPS_NUT",BB[BB.SPS_NUT=33]="SPS_NUT",BB[BB.PPS_NUT=34]="PPS_NUT",BB[BB.AUD_NUT=35]="AUD_NUT",BB[BB.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",BB[BB.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(dO||(dO={}));const KO=function*(BB){let OB=0,GB=-1;for(;OB<BB.length-2;){const YB=BB.indexOf(0,OB);if(-1===YB||YB>=BB.length-2)break;OB=YB;let DB=0;OB+3<BB.length&&0===BB[OB+1]&&0===BB[OB+2]&&1===BB[OB+3]?DB=4:0===BB[OB+1]&&1===BB[OB+2]&&(DB=3),0!==DB?(-1!==GB&&OB>GB&&(yield{offset:GB,length:OB-GB}),GB=OB+DB,OB=GB):OB++}-1!==GB&&GB<BB.length&&(yield{offset:GB,length:BB.length-GB})},uO=BB=>31&BB,mO=BB=>{const OB=[],GB=BB.length;for(let YB=0;YB<GB;YB++)YB+2<GB&&0===BB[YB]&&0===BB[YB+1]&&3===BB[YB+2]?(OB.push(0,0),YB+=2):OB.push(BB[YB]);return new Uint8Array(OB)},IO=(new Uint8Array([0,0,0,1]),(BB,OB)=>{const GB=BB.reduce(((BB,GB)=>BB+OB+GB.byteLength),0),YB=new Uint8Array(GB);let DB=0;for(const QB of BB){const BB=new DataView(YB.buffer,YB.byteOffset,YB.byteLength);switch(OB){case 1:BB.setUint8(DB,QB.byteLength);break;case 2:BB.setUint16(DB,QB.byteLength,!1);break;case 3:tB(BB,DB,QB.byteLength,!1);break;case 4:BB.setUint32(DB,QB.byteLength,!1)}DB+=OB,YB.set(QB,DB),DB+=QB.byteLength}return YB}),FO=BB=>{try{const OB=[],GB=[],YB=[];for(const jB of KO(BB)){const DB=BB.subarray(jB.offset,jB.offset+jB.length),QB=uO(DB[0]);QB===kO.SPS?OB.push(DB):QB===kO.PPS?GB.push(DB):QB===kO.SPS_EXT&&YB.push(DB)}if(0===OB.length)return null;if(0===GB.length)return null;const DB=OB[0],QB=LO(DB);uB(null!==QB);const oB=100===QB.profileIdc||110===QB.profileIdc||122===QB.profileIdc||144===QB.profileIdc;return{configurationVersion:1,avcProfileIndication:QB.profileIdc,profileCompatibility:QB.constraintFlags,avcLevelIndication:QB.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:OB,pictureParameterSets:GB,chromaFormat:oB?QB.chromaFormatIdc:null,bitDepthLumaMinus8:oB?QB.bitDepthLumaMinus8:null,bitDepthChromaMinus8:oB?QB.bitDepthChromaMinus8:null,sequenceParameterSetExt:oB?YB:null}}catch(OB){return SO._error("Error building AVC Decoder Configuration Record:",OB),null}},iO={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},LO=BB=>{try{const OB=mO(BB),GB=new pO(OB);GB.skipBits(1),GB.skipBits(2);if(7!==GB.readBits(5))return null;const YB=GB.readAlignedByte(),DB=GB.readAlignedByte(),QB=GB.readAlignedByte();XB(GB);let oB=1,jB=0,yB=0,JB=0;if(100===YB||110===YB||122===YB||244===YB||44===YB||83===YB||86===YB||118===YB||128===YB){oB=XB(GB),3===oB&&(JB=GB.readBits(1)),jB=XB(GB),yB=XB(GB),GB.skipBits(1);if(GB.readBits(1))for(let BB=0;BB<(3!==oB?8:12);BB++){if(GB.readBits(1)){const OB=BB<6?16:64;let YB=8,DB=8;for(let BB=0;BB<OB;BB++){if(0!==DB){DB=(YB+wB(GB)+256)%256}YB=0===DB?YB:DB}}}}XB(GB);const MB=XB(GB);if(0===MB)XB(GB);else if(1===MB){GB.skipBits(1),wB(GB),wB(GB);const BB=XB(GB);for(let OB=0;OB<BB;OB++)wB(GB)}XB(GB),GB.skipBits(1);const PB=XB(GB),zB=XB(GB),lB=16*(PB+1),pB=16*(zB+1);let qB=lB,ZB=pB;const NB=GB.readBits(1);NB||GB.skipBits(1),GB.skipBits(1);if(GB.readBits(1)){const BB=XB(GB),OB=XB(GB),YB=XB(GB),DB=XB(GB);let QB,jB;if(0===(0===JB?oB:0))QB=1,jB=2-NB;else{QB=3===oB?1:2,jB=(1===oB?2:1)*(2-NB)}qB-=QB*(BB+OB),ZB-=jB*(YB+DB)}let RB=2,WB=2,AB=2,VB=0,SB={num:1,den:1},nB=null,UB=null,fB=null,kB=null;const dB=GB.pos;if(GB.readBits(1)){if(GB.readBits(1)){const BB=GB.readBits(8);if(255===BB)SB={num:GB.readBits(16),den:GB.readBits(16)};else{const OB=iO[BB];OB&&(SB=OB)}}GB.readBits(1)&&GB.skipBits(1);if(GB.readBits(1)){GB.skipBits(3),VB=GB.readBits(1);GB.readBits(1)&&(RB=GB.readBits(8),WB=GB.readBits(8),AB=GB.readBits(8))}GB.readBits(1)&&(XB(GB),XB(GB));GB.readBits(1)&&(GB.skipBits(32),GB.skipBits(32),GB.skipBits(1));const BB=GB.readBits(1);BB&&gO(GB);const OB=GB.readBits(1);OB&&gO(GB),(BB||OB)&&GB.skipBits(1),GB.skipBits(1),fB=GB.pos,kB=GB.readBits(1),kB&&(GB.skipBits(1),XB(GB),XB(GB),XB(GB),XB(GB),nB=XB(GB),UB=XB(GB))}if(null===nB){uB(null===UB);if(44!==YB&&86!==YB&&100!==YB&&110!==YB&&122!==YB&&244!==YB||!(16&DB)){const BB=PB+1,OB=(2-NB)*(zB+1),GB=pG.find((BB=>BB.level>=QB))??gB(pG),YB=Math.min(Math.floor(GB.maxDpbMbs/(BB*OB)),16);nB=YB,UB=YB}else nB=0,UB=0}return uB(null!==UB),{emulationUnpreventedBytes:OB,profileIdc:YB,constraintFlags:DB,levelIdc:QB,frameMbsOnlyFlag:NB,chromaFormatIdc:oB,bitDepthLumaMinus8:jB,bitDepthChromaMinus8:yB,codedWidth:lB,codedHeight:pB,displayWidth:qB,displayHeight:ZB,pixelAspectRatio:SB,colourPrimaries:RB,matrixCoefficients:AB,transferCharacteristics:WB,fullRangeFlag:VB,numReorderFrames:nB,maxDecFrameBuffering:UB,vuiParametersFlagBitOffset:dB,bitstreamRestrictionFlagBitOffset:fB,bitstreamRestrictionFlag:kB}}catch(OB){return SO._error("Error parsing AVC SPS:",OB),null}},gO=BB=>{const OB=XB(BB);BB.skipBits(4),BB.skipBits(4);for(let GB=0;GB<=OB;GB++)XB(BB),XB(BB),BB.skipBits(1);BB.skipBits(5),BB.skipBits(5),BB.skipBits(5),BB.skipBits(5)},rO=BB=>BB>>1&63,XO=BB=>{try{const OB=[],GB=[],YB=[],DB=[];for(const yB of KO(BB)){const QB=BB.subarray(yB.offset,yB.offset+yB.length),oB=rO(QB[0]);oB===dO.VPS_NUT?OB.push(QB):oB===dO.SPS_NUT?GB.push(QB):oB===dO.PPS_NUT?YB.push(QB):oB!==dO.PREFIX_SEI_NUT&&oB!==dO.SUFFIX_SEI_NUT||DB.push(QB)}if(0===GB.length||0===YB.length)return null;const QB=(BB=>{try{const OB=new pO(mO(BB));OB.skipBits(16),OB.readBits(4);const GB=OB.readBits(3),YB=OB.readBits(1),{general_profile_space:DB,general_tier_flag:QB,general_profile_idc:oB,general_profile_compatibility_flags:jB,general_constraint_indicator_flags:yB,general_level_idc:JB}=wO(OB,GB);XB(OB);const MB=XB(OB);let PB=0;3===MB&&(PB=OB.readBits(1));const zB=XB(OB),lB=XB(OB);let pB=zB,qB=lB;if(OB.readBits(1)){const BB=XB(OB),GB=XB(OB),YB=XB(OB),DB=XB(OB);let QB=1,oB=1;const jB=0===PB?MB:0;1===jB?(QB=2,oB=2):2===jB&&(QB=2,oB=1),pB-=(BB+GB)*QB,qB-=(YB+DB)*oB}const ZB=XB(OB),NB=XB(OB);XB(OB);const RB=OB.readBits(1);let WB=0;for(let BB=RB?0:GB;BB<=GB;BB++)XB(OB),WB=XB(OB),XB(OB);XB(OB),XB(OB),XB(OB),XB(OB),XB(OB),XB(OB),OB.readBits(1)&&OB.readBits(1)&&EO(OB),OB.skipBits(1),OB.skipBits(1),OB.readBits(1)&&(OB.skipBits(4),OB.skipBits(4),XB(OB),XB(OB),OB.skipBits(1));const AB=XB(OB);if(cO(OB,AB),OB.readBits(1)){const BB=XB(OB);for(let GB=0;GB<BB;GB++)XB(OB),OB.skipBits(1)}OB.skipBits(1),OB.skipBits(1);let VB=2,SB=2,nB=2,UB=0,fB=0,kB={num:1,den:1};if(OB.readBits(1)){const BB=aO(OB,GB);kB=BB.pixelAspectRatio,VB=BB.colourPrimaries,SB=BB.transferCharacteristics,nB=BB.matrixCoefficients,UB=BB.fullRangeFlag,fB=BB.minSpatialSegmentationIdc}return{displayWidth:pB,displayHeight:qB,pixelAspectRatio:kB,colourPrimaries:VB,transferCharacteristics:SB,matrixCoefficients:nB,fullRangeFlag:UB,maxDecFrameBuffering:WB+1,spsMaxSubLayersMinus1:GB,spsTemporalIdNestingFlag:YB,generalProfileSpace:DB,generalTierFlag:QB,generalProfileIdc:oB,generalProfileCompatibilityFlags:jB,generalConstraintIndicatorFlags:yB,generalLevelIdc:JB,chromaFormatIdc:MB,bitDepthLumaMinus8:ZB,bitDepthChromaMinus8:NB,minSpatialSegmentationIdc:fB}}catch(OB){return SO._error("Error parsing HEVC SPS:",OB),null}})(GB[0]);if(!QB)return null;let oB=0;if(YB.length>0){const BB=YB[0],OB=new pO(mO(BB));OB.skipBits(16),XB(OB),XB(OB),OB.skipBits(1),OB.skipBits(1),OB.skipBits(3),OB.skipBits(1),OB.skipBits(1),XB(OB),XB(OB),wB(OB),OB.skipBits(1),OB.skipBits(1),OB.readBits(1)&&XB(OB),wB(OB),wB(OB),OB.skipBits(1),OB.skipBits(1),OB.skipBits(1),OB.skipBits(1);const GB=OB.readBits(1),DB=OB.readBits(1);oB=GB||DB?GB&&!DB?2:!GB&&DB?3:0:0}const jB=[...OB.length?[{arrayCompleteness:1,nalUnitType:dO.VPS_NUT,nalUnits:OB}]:[],...GB.length?[{arrayCompleteness:1,nalUnitType:dO.SPS_NUT,nalUnits:GB}]:[],...YB.length?[{arrayCompleteness:1,nalUnitType:dO.PPS_NUT,nalUnits:YB}]:[],...DB.length?[{arrayCompleteness:1,nalUnitType:rO(DB[0][0]),nalUnits:DB}]:[]];return{configurationVersion:1,generalProfileSpace:QB.generalProfileSpace,generalTierFlag:QB.generalTierFlag,generalProfileIdc:QB.generalProfileIdc,generalProfileCompatibilityFlags:QB.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:QB.generalConstraintIndicatorFlags,generalLevelIdc:QB.generalLevelIdc,minSpatialSegmentationIdc:QB.minSpatialSegmentationIdc,parallelismType:oB,chromaFormatIdc:QB.chromaFormatIdc,bitDepthLumaMinus8:QB.bitDepthLumaMinus8,bitDepthChromaMinus8:QB.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:QB.spsMaxSubLayersMinus1+1,temporalIdNested:QB.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:jB}}catch(OB){return SO._error("Error building HEVC Decoder Configuration Record:",OB),null}},wO=(BB,OB)=>{const GB=BB.readBits(2),YB=BB.readBits(1),DB=BB.readBits(5);let QB=0;for(let MB=0;MB<32;MB++)QB=QB<<1|BB.readBits(1);const oB=new Uint8Array(6);for(let MB=0;MB<6;MB++)oB[MB]=BB.readBits(8);const jB=BB.readBits(8),yB=[],JB=[];for(let MB=0;MB<OB;MB++)yB.push(BB.readBits(1)),JB.push(BB.readBits(1));if(OB>0)for(let MB=OB;MB<8;MB++)BB.skipBits(2);for(let MB=0;MB<OB;MB++)yB[MB]&&BB.skipBits(88),JB[MB]&&BB.skipBits(8);return{general_profile_space:GB,general_tier_flag:YB,general_profile_idc:DB,general_profile_compatibility_flags:QB,general_constraint_indicator_flags:oB,general_level_idc:jB}},EO=BB=>{for(let OB=0;OB<4;OB++)for(let GB=0;GB<(3===OB?2:6);GB++){if(BB.readBits(1)){const GB=Math.min(64,1<<4+(OB<<1));OB>1&&wB(BB);for(let OB=0;OB<GB;OB++)wB(BB)}else XB(BB)}},cO=(BB,OB)=>{const GB=[];for(let YB=0;YB<OB;YB++)GB[YB]=hO(BB,YB,OB,GB)},hO=(BB,OB,GB,YB)=>{let DB=0,QB=0,oB=0;if(0!==OB&&(QB=BB.readBits(1)),QB){if(OB===GB){oB=OB-(XB(BB)+1)}else oB=OB-1;BB.readBits(1),XB(BB);const QB=YB[oB]??0;for(let OB=0;OB<=QB;OB++){BB.readBits(1)||BB.readBits(1)}DB=YB[oB]}else{const OB=XB(BB),GB=XB(BB);for(let YB=0;YB<OB;YB++)XB(BB),BB.readBits(1);for(let YB=0;YB<GB;YB++)XB(BB),BB.readBits(1);DB=OB+GB}return DB},aO=(BB,OB)=>{let GB=2,YB=2,DB=2,QB=0,oB=0,jB={num:1,den:1};if(BB.readBits(1)){const OB=BB.readBits(8);if(255===OB)jB={num:BB.readBits(16),den:BB.readBits(16)};else{const BB=iO[OB];BB&&(jB=BB)}}return BB.readBits(1)&&BB.readBits(1),BB.readBits(1)&&(BB.readBits(3),QB=BB.readBits(1),BB.readBits(1)&&(GB=BB.readBits(8),YB=BB.readBits(8),DB=BB.readBits(8))),BB.readBits(1)&&(XB(BB),XB(BB)),BB.readBits(1),BB.readBits(1),BB.readBits(1),BB.readBits(1)&&(XB(BB),XB(BB),XB(BB),XB(BB)),BB.readBits(1)&&(BB.readBits(32),BB.readBits(32),BB.readBits(1)&&XB(BB),BB.readBits(1)&&eO(BB,!0,OB)),BB.readBits(1)&&(BB.readBits(1),BB.readBits(1),BB.readBits(1),oB=XB(BB),XB(BB),XB(BB),XB(BB),XB(BB)),{pixelAspectRatio:jB,colourPrimaries:GB,transferCharacteristics:YB,matrixCoefficients:DB,fullRangeFlag:QB,minSpatialSegmentationIdc:oB}},eO=(BB,OB,GB)=>{let YB=!1,DB=!1,QB=!1;OB&&(YB=1===BB.readBits(1),DB=1===BB.readBits(1),(YB||DB)&&(QB=1===BB.readBits(1),QB&&(BB.readBits(8),BB.readBits(5),BB.readBits(1),BB.readBits(5)),BB.readBits(4),BB.readBits(4),QB&&BB.readBits(4),BB.readBits(5),BB.readBits(5),BB.readBits(5)));for(let oB=0;oB<=GB;oB++){let OB=!0;1===BB.readBits(1)||(OB=1===BB.readBits(1));let GB=!1;OB?XB(BB):GB=1===BB.readBits(1);let oB=1;if(!GB){oB=XB(BB)+1}YB&&TO(BB,oB,QB),DB&&TO(BB,oB,QB)}},TO=(BB,OB,GB)=>{for(let YB=0;YB<OB;YB++)XB(BB),XB(BB),GB&&(XB(BB),XB(BB)),BB.readBits(1)};var bO;!function(BB){BB[BB.audAllowed=0]="audAllowed",BB[BB.beforeFirstVcl=1]="beforeFirstVcl",BB[BB.afterFirstVcl=2]="afterFirstVcl",BB[BB.eoBitstreamAllowed=3]="eoBitstreamAllowed",BB[BB.noMoreDataAllowed=4]="noMoreDataAllowed"}(bO||(bO={}));const CO=BB=>{const OB=cB(BB),GB=OB.getUint8(9),YB=OB.getUint16(10,!0),DB=OB.getUint32(12,!0),QB=OB.getInt16(16,!0),oB=OB.getUint8(18);let jB=null;return oB&&(jB=BB.subarray(19,21+GB)),{outputChannelCount:GB,preSkip:YB,inputSampleRate:DB,outputGain:QB,channelMappingFamily:oB,channelMappingTable:jB}};var HO;!function(BB){BB[BB.STREAMINFO=0]="STREAMINFO",BB[BB.VORBIS_COMMENT=4]="VORBIS_COMMENT",BB[BB.PICTURE=6]="PICTURE"}(HO||(HO={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const vO=[1,2,3,6],sO=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],xO=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],tO=[16,16,20,20,0,24,24,0],BG=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],OG=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],GG=[32e3,44100,48e3,0],YG=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],DG=[512,1024,2048,4096],QG=BB=>{const OB=oG(BB),GB=cB(BB);let YB=OB?4*Math.ceil(OB.frameSize/4):0,DB=null;for(;YB+4<=BB.length&&1683496997===GB.getUint32(YB);){const OB=jG(BB.subarray(YB));if(!OB)break;DB??=OB,YB+=OB.frameSize}if(OB)return{frameSize:DB?YB:OB.frameSize,sampleRate:OB.sampleRate,numberOfChannels:OB.numberOfChannels,sampleCount:OB.sampleCount,channelLayout:OB.channelLayout,pcmResolution:OB.pcmResolution,bitRate:OB.bitRate,core:OB,hasExtensions:null!==DB};if(!DB?.asset)return null;const{asset:QB}=DB;return{frameSize:YB,sampleRate:QB.sampleRate,numberOfChannels:QB.numberOfChannels,sampleCount:QB.sampleCount,channelLayout:QB.channelLayout,pcmResolution:QB.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},oG=BB=>{if(BB.length<18)return null;if(127!==BB[0]||254!==BB[1]||128!==BB[2]||1!==BB[3])return null;const OB=new pO(BB);if(OB.skipBits(32),OB.skipBits(1),31!==OB.readBits(5))return null;const GB=OB.readBits(1),YB=OB.readBits(7)+1;if(YB%8!==0)return null;const DB=OB.readBits(14)+1;if(DB<96)return null;const QB=OB.readBits(6);if(QB>=BG.length)return null;const oB=sO[OB.readBits(4)];if(0===oB)return null;const jB=xO[OB.readBits(5)];if(0!==OB.readBits(1))return null;OB.skipBits(4),OB.skipBits(5);const yB=OB.readBits(2);if(3===yB)return null;OB.skipBits(1),GB&&OB.skipBits(16),OB.skipBits(7);const JB=tO[OB.readBits(3)];if(0===JB)return null;const MB=0!==yB;return{frameSize:DB,sampleRate:oB,numberOfChannels:BG[QB]+(MB?1:0),sampleCount:32*YB,channelLayout:OG[QB]|(MB?8:0),amode:QB,lfePresent:MB,bitRate:jB,pcmResolution:JB}},jG=BB=>{if(BB.length<10)return null;if(100!==BB[0]||88!==BB[1]||32!==BB[2]||37!==BB[3])return null;const OB=new pO(BB);OB.skipBits(32),OB.skipBits(8);const GB=OB.readBits(2),YB=OB.readBits(1),DB=8+4*YB,QB=16+4*YB;OB.skipBits(DB);const oB=OB.readBits(QB)+1,jB={frameSize:oB,asset:null};if(!OB.readBits(1))return jB;const yB=GG[OB.readBits(2)],JB=512*(OB.readBits(3)+1);OB.readBits(1)&&OB.skipBits(36);const MB=OB.readBits(3)+1,PB=OB.readBits(3)+1,zB=[];for(let NB=0;NB<MB;NB++)zB.push(OB.readBits(GB+1));for(const NB of zB)OB.skipBits(8*OO(NB));if(OB.readBits(1)){OB.skipBits(2);const BB=OB.readBits(2)+1<<2,GB=OB.readBits(2)+1;OB.skipBits(GB*BB)}for(let NB=0;NB<PB;NB++)OB.skipBits(QB);OB.skipBits(9),OB.skipBits(3),OB.readBits(1)&&OB.skipBits(4),OB.readBits(1)&&OB.skipBits(24),OB.readBits(1)&&OB.skipBits(8*(OB.readBits(10)+1));const lB=OB.readBits(5)+1,pB=YG[OB.readBits(4)],qB=OB.readBits(8)+1;let ZB=0;if(OB.readBits(1)&&(qB>2&&OB.skipBits(1),qB>6&&OB.skipBits(1),OB.readBits(1))){const BB=OB.readBits(2)+1<<2;ZB=OB.readBits(BB)}return 0===yB||OB.getBitsLeft()<0?jB:{frameSize:oB,asset:{sampleRate:pB,numberOfChannels:qB,sampleCount:Math.round(JB*pB/yB),channelLayout:ZB,pcmResolution:lB}}},yG=BB=>{const OB=new Uint8Array(20),GB=cB(OB);GB.setUint32(0,BB.sampleRate),GB.setUint32(4,BB.bitRate),GB.setUint32(8,BB.bitRate),OB[12]=BB.pcmResolution;const YB=BB.core&&!BB.hasExtensions?1:0,DB=new pO(OB);return DB.seekToByte(13),DB.writeBits(2,Math.max(DG.indexOf(BB.sampleCount),0)),DB.writeBits(5,YB),DB.writeBits(1,BB.core?.lfePresent?1:0),DB.writeBits(6,BB.core?.amode??0),DB.writeBits(14,BB.core?BB.core.frameSize-1:0),DB.writeBits(1,0),DB.writeBits(3,0),DB.writeBits(16,BB.channelLayout),DB.writeBits(1,0),DB.writeBits(1,0),DB.writeBits(1,0),DB.writeBits(5,0),OB},JG=["avc","hevc","vp9","av1","vp8","prores"],MG=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],PG=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],zG=[...PG,...MG],lG=["webvtt"],pG=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],qG=["ap4x","ap4h","apch","apcn","apcs","apco"],ZG=["dtsc","dtsh","dtsl","dtse"],NG=BB=>{const OB=BB.split("."),GB=Number(OB[1]),YB=OB[2],DB=(GB<<5)+Number(YB.slice(0,-1)),QB="H"===YB.slice(-1)?1:0,oB=Number(OB[3]);return[129,DB,(QB<<7)+((8===oB?0:1)<<6)+((12===oB?1:0)<<5)+((OB[4]?Number(OB[4]):0)<<4)+((OB[5]?Number(OB[5][0]):1)<<3)+((OB[5]?Number(OB[5][1]):1)<<2)+(OB[5]?Number(OB[5][2]):0),0]},RG=/^pcm-([usf])(\\d+)(be)?$/,WG=BB=>{if(uB(MG.includes(BB)),"ulaw"===BB)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===BB)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const OB=RG.exec(BB);let GB;uB(OB),GB="u"===OB[1]?"unsigned":"s"===OB[1]?"signed":"float";return{dataType:GB,sampleSize:Number(OB[2])/8,littleEndian:"be"!==OB[3],silentValue:"pcm-u8"===BB?128:0}},AG=BB=>BB.startsWith("avc1")||BB.startsWith("avc3")?"avc":BB.startsWith("hev1")||BB.startsWith("hvc1")?"hevc":"vp8"===BB?"vp8":BB.startsWith("vp09")?"vp9":BB.startsWith("av01")?"av1":qG.includes(BB)?"prores":"mp3"===BB||"mp4a.69"===BB||"mp4a.6B"===BB||"mp4a.6b"===BB||"mp4a.40.34"===BB?"mp3":BB.startsWith("mp4a.40.")||"mp4a.67"===BB?"aac":"opus"===BB||"Opus"===BB?"opus":"vorbis"===BB?"vorbis":"flac"===BB?"flac":"ac-3"===BB||"ac3"===BB?"ac3":"ec-3"===BB||"eac3"===BB?"eac3":ZG.includes(BB)?"dts":"ulaw"===BB?"ulaw":"alaw"===BB?"alaw":RG.test(BB)?BB:"webvtt"===BB?"webvtt":null,VG=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...qG],SG=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,nG=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,UG=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,fG=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,kG=(BB,OB)=>{if(!BB)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof BB)throw new TypeError("Video chunk metadata must be an object.");if(!BB.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof BB.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof BB.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!VG.some((OB=>BB.decoderConfig.codec.startsWith(OB))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(BB.decoderConfig.codedWidth)||BB.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(BB.decoderConfig.codedHeight)||BB.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==BB.decoderConfig.displayAspectWidth&&(!Number.isInteger(BB.decoderConfig.displayAspectWidth)||BB.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==BB.decoderConfig.displayAspectHeight&&(!Number.isInteger(BB.decoderConfig.displayAspectHeight)||BB.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==BB.decoderConfig.displayAspectWidth!==(void 0!==BB.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==BB.decoderConfig.description&&!HB(BB.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==BB.decoderConfig.colorSpace){const{colorSpace:OB}=BB.decoderConfig;if("object"!==typeof OB)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const GB=Object.keys(eB);if(null!=OB.primaries&&!GB.includes(OB.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${GB.join(", ")}.`);const YB=Object.keys(TB);if(null!=OB.transfer&&!YB.includes(OB.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${YB.join(", ")}.`);const DB=Object.keys(bB);if(null!=OB.matrix&&!DB.includes(OB.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${DB.join(", ")}.`);if(null!=OB.fullRange&&"boolean"!==typeof OB.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(BB.decoderConfig.codec.startsWith("avc1")||BB.decoderConfig.codec.startsWith("avc3")){if(!SG.test(BB.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(BB.decoderConfig.codec.startsWith("hev1")||BB.decoderConfig.codec.startsWith("hvc1")){if(!nG.test(BB.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(BB.decoderConfig.codec.startsWith("vp8")){if("vp8"!==BB.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(BB.decoderConfig.codec.startsWith("vp09")){if(!UG.test(BB.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(BB.decoderConfig.codec.startsWith("av01")){if(!fG.test(BB.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(qG.some((OB=>BB.decoderConfig.codec.startsWith(OB)))&&!qG.some((OB=>BB.decoderConfig.codec===OB)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${qG.join(", ")}.`);if(null!==OB&&AG(BB.decoderConfig.codec)!==OB)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${BB.decoderConfig.codec}\' does not fit to the track codec \'${OB}\'.`)},dG=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],KG=(BB,OB)=>{if(!BB)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof BB)throw new TypeError("Audio chunk metadata must be an object.");if(!BB.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof BB.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof BB.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!dG.some((OB=>BB.decoderConfig.codec.startsWith(OB))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(BB.decoderConfig.sampleRate)||BB.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(BB.decoderConfig.numberOfChannels)||BB.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==BB.decoderConfig.description&&!HB(BB.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(BB.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==BB.decoderConfig.codec&&"mp4a.6B"!==BB.decoderConfig.codec&&"mp4a.6b"!==BB.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(BB.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(BB.decoderConfig.codec.startsWith("mp3")||BB.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==BB.decoderConfig.codec&&"mp4a.69"!==BB.decoderConfig.codec&&"mp4a.6B"!==BB.decoderConfig.codec&&"mp4a.6b"!==BB.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(BB.decoderConfig.codec.startsWith("opus")){if("opus"!==BB.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(BB.decoderConfig.description&&BB.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(BB.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==BB.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!BB.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(BB.decoderConfig.codec.startsWith("flac")){if("flac"!==BB.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const OB=42;if(!BB.decoderConfig.description||BB.decoderConfig.description.byteLength<OB)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(BB.decoderConfig.codec.startsWith("ac-3")||BB.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==BB.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(BB.decoderConfig.codec.startsWith("ec-3")||BB.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==BB.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(BB.decoderConfig.codec.startsWith("dts")){if(!ZG.includes(BB.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${ZG.join(", ")}.`)}else if((BB.decoderConfig.codec.startsWith("pcm")||BB.decoderConfig.codec.startsWith("ulaw")||BB.decoderConfig.codec.startsWith("alaw"))&&!MG.includes(BB.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${MG.join(", ")}).`);if(null!==OB&&AG(BB.decoderConfig.codec)!==OB)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${BB.decoderConfig.codec}\' does not fit to the track codec \'${OB}\'.`)},uG=BB=>{if(!BB)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof BB)throw new TypeError("Subtitle metadata must be an object.");if(!BB.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof BB.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof BB.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var mG;!function(BB){BB[BB.FrameCount=1]="FrameCount",BB[BB.FileSize=2]="FileSize",BB[BB.Toc=4]="Toc"}(mG||(mG={}));class IG{constructor(BB,OB,GB,YB,DB){this.bytes=BB,this.view=OB,this.offset=GB,this.start=YB,this.end=DB,this.bufferPos=YB-GB}static tempFromBytes(BB){return new IG(BB,cB(BB),0,0,BB.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(BB){this.bufferPos=BB-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(BB){this.bufferPos+=BB}slice(BB){let OB=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-BB;if(BB<this.start||BB+OB>this.end)throw new RangeError("Slicing outside of original slice.");return new IG(this.bytes,this.view,this.offset,BB,BB+OB)}}const FG=(BB,OB)=>{if(BB.filePos<BB.start||BB.filePos+OB>BB.end)throw new RangeError(`Tried reading [${BB.filePos}, ${BB.filePos+OB}), but slice is [${BB.start}, ${BB.end}). This is likely an internal error, please report it alongside the file that caused it.`)},iG=(BB,OB)=>{FG(BB,OB);const GB=BB.bytes.subarray(BB.bufferPos,BB.bufferPos+OB);return BB.bufferPos+=OB,GB};var LG,gG;!function(BB){BB[BB.Unsynchronisation=128]="Unsynchronisation",BB[BB.ExtendedHeader=64]="ExtendedHeader",BB[BB.ExperimentalIndicator=32]="ExperimentalIndicator",BB[BB.Footer=16]="Footer"}(LG||(LG={})),function(BB){BB[BB.ISO_8859_1=0]="ISO_8859_1",BB[BB.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",BB[BB.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",BB[BB.UTF_8=3]="UTF_8"}(gG||(gG={}));class rG{constructor(BB){this.mutex=new vB,this.trackTimestampInfo=new WeakMap,this.output=BB}onTrackClose(BB){}validateTimestamp(BB,OB,GB){let YB=this.trackTimestampInfo.get(BB);if(YB){if(GB&&(YB.maxTimestampBeforeLastKeyPacket=YB.maxTimestamp),null!==YB.maxTimestampBeforeLastKeyPacket&&OB<YB.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${OB}s, but largest timestamp is ${YB.maxTimestampBeforeLastKeyPacket}s.`);YB.maxTimestamp=Math.max(YB.maxTimestamp,OB)}else{if(!GB)throw new Error("First packet must be a key packet.");YB={maxTimestamp:OB,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(BB,YB)}}}const XG=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const wG=BB=>{const OB=Math.floor(BB/36e5),GB=Math.floor(BB%36e5/6e4),YB=Math.floor(BB%6e4/1e3),DB=BB%1e3;return OB.toString().padStart(2,"0")+":"+GB.toString().padStart(2,"0")+":"+YB.toString().padStart(2,"0")+"."+DB.toString().padStart(3,"0")};class EG{constructor(BB){this.writer=BB,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(BB){this.helperView.setUint32(0,BB,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(BB){this.helperView.setUint32(0,Math.floor(BB/2**32),!1),this.helperView.setUint32(4,BB,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(BB){for(let OB=0;OB<BB.length;OB++)this.helperView.setUint8(OB%8,BB.charCodeAt(OB)),OB%8===7&&this.writer.write(this.helper);BB.length%8!==0&&this.writer.write(this.helper.subarray(0,BB.length%8))}writeBox(BB){if(this.offsets.set(BB,this.writer.getPos()),BB.contents&&!BB.children)this.writeBoxHeader(BB,BB.size??BB.contents.byteLength+8),this.writer.write(BB.contents);else{const OB=this.writer.getPos();if(this.writeBoxHeader(BB,0),BB.contents&&this.writer.write(BB.contents),BB.children)for(const DB of BB.children)DB&&this.writeBox(DB);const GB=this.writer.getPos(),YB=BB.size??GB-OB;this.writer.seek(OB),this.writeBoxHeader(BB,YB),this.writer.seek(GB)}}writeBoxHeader(BB,OB){this.writeU32(BB.largeSize?1:OB),this.writeAscii(BB.type),BB.largeSize&&this.writeU64(OB)}measureBoxHeader(BB){return 8+(BB.largeSize?8:0)}patchBox(BB){const OB=this.offsets.get(BB);uB(void 0!==OB);const GB=this.writer.getPos();this.writer.seek(OB),this.writeBox(BB),this.writer.seek(GB)}measureBox(BB){if(BB.contents&&!BB.children){return this.measureBoxHeader(BB)+BB.contents.byteLength}{let OB=this.measureBoxHeader(BB);if(BB.contents&&(OB+=BB.contents.byteLength),BB.children)for(const GB of BB.children)GB&&(OB+=this.measureBox(GB));return OB}}}const cG=new Uint8Array(8),hG=new DataView(cG.buffer),aG=BB=>[(BB%256+256)%256],eG=BB=>(hG.setUint16(0,BB,!1),[cG[0],cG[1]]),TG=BB=>(hG.setInt16(0,BB,!1),[cG[0],cG[1]]),bG=BB=>(hG.setUint32(0,BB,!1),[cG[1],cG[2],cG[3]]),CG=BB=>(hG.setUint32(0,BB,!1),[cG[0],cG[1],cG[2],cG[3]]),HG=BB=>(hG.setInt32(0,BB,!1),[cG[0],cG[1],cG[2],cG[3]]),vG=BB=>(hG.setUint32(0,Math.floor(BB/2**32),!1),hG.setUint32(4,BB,!1),[cG[0],cG[1],cG[2],cG[3],cG[4],cG[5],cG[6],cG[7]]),sG=BB=>(hG.setInt32(0,Math.floor(BB/2**32),!1),hG.setUint32(4,BB,!1),[cG[0],cG[1],cG[2],cG[3],cG[4],cG[5],cG[6],cG[7]]),xG=BB=>(hG.setInt16(0,256*BB,!1),[cG[0],cG[1]]),tG=BB=>(hG.setInt32(0,65536*BB,!1),[cG[0],cG[1],cG[2],cG[3]]),BY=BB=>(hG.setInt32(0,2**30*BB,!1),[cG[0],cG[1],cG[2],cG[3]]),OY=(BB,OB)=>{const GB=[];let YB=BB;do{let BB=127&YB;YB>>=7,GB.length>0&&(BB|=128),GB.push(BB),void 0!==OB&&OB--}while(YB>0||OB);return GB.reverse()},GY=function(BB){let OB=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const GB=Array(BB.length).fill(null).map(((OB,GB)=>BB.charCodeAt(GB)));return OB&&GB.push(0),GB},YY=BB=>[tG(BB[0]),tG(BB[1]),BY(BB[2]),tG(BB[3]),tG(BB[4]),BY(BB[5]),tG(BB[6]),tG(BB[7]),BY(BB[8])],DY=(BB,OB,GB)=>({type:BB,contents:OB&&new Uint8Array(OB.flat(10)),children:GB}),QY=(BB,OB,GB,YB,DB)=>DY(BB,[aG(OB),bG(GB),YB??[]],DB),oY=()=>DY("styp",[GY("iso5"),CG(0),GY("iso5"),GY("iso6"),GY("mp41"),GY("cmfc"),GY("dash")]),jY=(BB,OB)=>{const GB=Math.max(0,BB.minWrittenTimestamp);let YB=Math.max(0,BB.maxWrittenEndTimestamp-GB);return Number.isFinite(YB)||(YB=0),QY("sidx",1,0,[CG(1),CG(rD),vG(wD(GB,rD)),vG(0),eG(0),eG(1),CG(2147483647&OB),CG(wD(YB,rD)),CG(0)])},yY=BB=>({type:"mdat",largeSize:BB}),JY=BB=>DY("moov",void 0,[MY(BB.creationTime,BB.trackDatas),...BB.trackDatas.map((OB=>PY(OB,BB.creationTime))),BB.isFragmented?xY(BB.trackDatas):null,zD(BB)]),MY=(BB,OB)=>{const GB=Math.max(0,...OB.map((BB=>Math.max(0,wD(ED(BB),rD)+wD(BB.startTimestampOffset??0,rD))))),YB=Math.max(0,...OB.map((BB=>BB.track.id)))+1,DB=!rB(BB)||!rB(GB),QB=DB?vG:CG;return QY("mvhd",+DB,0,[QB(BB),QB(BB),CG(rD),QB(GB),tG(1),xG(1),Array(10).fill(0),YY(IB),Array(24).fill(0),CG(YB)])},PY=(BB,OB)=>{const GB=XD(BB),YB=null!==BB.startTimestampOffset&&0!==BB.startTimestampOffset;return DY("trak",void 0,[zY(BB,OB),YB?lY(BB):null,pY(BB,OB),void 0!==GB.name?DY("udta",void 0,[DY("name",[...aB.encode(GB.name)])]):null])},zY=(BB,OB)=>{const GB=Math.max(0,wD(ED(BB),rD)+wD(BB.startTimestampOffset??0,rD)),YB=!rB(OB)||!rB(GB),DB=YB?vG:CG;let QB;if("video"===BB.type&&BB.track.metadata.transformationMatrix)QB=BB.track.metadata.transformationMatrix;else if("video"===BB.type){const{rotation:OB,flip:GB}=BB.track.metadata;QB=((BB,OB,GB)=>{const[YB,DB,,QB,oB]=BB,jB=Math.abs(YB)*OB+Math.abs(QB)*GB,yB=Math.abs(DB)*OB+Math.abs(oB)*GB;return LB(LB(iB(-OB/2,-GB/2),BB),iB(jB/2,yB/2))})(LB(FB(OB??0),[GB?-1:1,0,0,0,1,0,0,0,1]),BB.info.width,BB.info.height)}else QB=IB;let oB=2;!1!==BB.track.metadata.disposition?.default&&(oB|=1);const jB="video"===BB.type?0:"audio"===BB.type?1:"subtitle"===BB.type?2:xB(BB);return QY("tkhd",+YB,oB,[DB(OB),DB(OB),CG(BB.track.id),CG(0),DB(GB),Array(8).fill(0),eG(0),eG(jB),xG("audio"===BB.type?1:0),eG(0),YY(QB),tG("video"===BB.type?BB.info.width:0),tG("video"===BB.type?BB.info.height:0)])},lY=BB=>{const OB=BB.startTimestampOffset;if(uB(null!==OB),OB>0){const GB=wD(OB,rD),YB=wD(ED(BB),rD),DB=!rB(GB)||!rB(YB),QB=DB?vG:CG,oB=DB?sG:HG;return DY("edts",void 0,[QY("elst",DB?1:0,0,[CG(2),QB(GB),oB(-1),tG(1),QB(YB),oB(0),tG(1)])])}{const YB=wD(-OB,BB.timescale),DB=Math.max(0,wD(ED(BB),rD)+wD(OB,rD)),QB=!((GB=YB)>=-(2**31)&&GB<2**31)||!rB(DB),oB=QB?vG:CG,jB=QB?sG:HG;return DY("edts",void 0,[QY("elst",QB?1:0,0,[CG(1),oB(DB),jB(YB),tG(1)])])}var GB},pY=(BB,OB)=>DY("mdia",void 0,[qY(BB,OB),RY(!0,ZY[BB.type],NY[BB.type]),WY(BB)]),qY=(BB,OB)=>{const GB=wD(ED(BB),BB.timescale),YB=!rB(OB)||!rB(GB),DB=YB?vG:CG;return QY("mdhd",+YB,0,[DB(OB),DB(OB),CG(BB.timescale),DB(GB),eG(kD(BB.track.metadata.languageCode??BO)),eG(0)])},ZY={video:"vide",audio:"soun",subtitle:"text"},NY={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},RY=function(BB,OB,GB){let YB=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return QY("hdlr",0,0,[BB?GY("mhlr"):CG(0),GY(OB),GY(YB),CG(0),CG(0),GY(GB,!0)])},WY=BB=>DY("minf",void 0,[AY[BB.type](),VY(),UY(BB)]),AY={video:()=>QY("vmhd",0,1,[eG(0),eG(0),eG(0),eG(0)]),audio:()=>QY("smhd",0,0,[eG(0),eG(0)]),subtitle:()=>QY("nmhd",0,0)},VY=()=>DY("dinf",void 0,[SY()]),SY=()=>QY("dref",0,0,[CG(1)],[nY()]),nY=()=>QY("url ",0,1),UY=BB=>{const OB=BB.compositionTimeOffsetTable.length>1||BB.compositionTimeOffsetTable.some((BB=>0!==BB.sampleCompositionTimeOffset));return DY("stbl",void 0,[fY(BB),eY(BB),OB?vY(BB):null,OB?sY(BB):null,bY(BB),CY(BB),HY(BB),TY(BB)])},fY=BB=>{let OB;if("video"===BB.type)OB=kY(AD(BB.track.source._codec,BB.info.decoderConfig.codec),BB);else if("audio"===BB.type){const GB=SD(BB.track.source._codec,BB.info.decoderConfig.codec,BB.muxer.isQuickTime);uB(GB),OB=IY(GB,BB)}else"subtitle"===BB.type&&(OB=aY(UD[BB.track.source._codec],BB));return uB(OB),QY("stsd",0,0,[CG(1)],[OB])},kY=(BB,OB)=>DY(BB,[Array(6).fill(0),eG(1),eG(0),eG(0),Array(12).fill(0),eG(OB.info.width),eG(OB.info.height),CG(4718592),CG(4718592),CG(0),eG(1),aG(18),GY(fO),Array(13).fill(0),eG(OB.info.hasAlphaChannel?32:24),TG(65535)],[VD[OB.track.source._codec]?.(OB)??null,KY(OB),CB(OB.info.decoderConfig.colorSpace)?null:uY(OB),dY(OB)]),dY=BB=>0===BB.avgBitrate&&0===BB.maxBitrate?null:DY("btrt",[CG(0),CG(BB.maxBitrate),CG(BB.avgBitrate)]),KY=BB=>BB.info.pixelAspectRatio.num===BB.info.pixelAspectRatio.den?null:DY("pasp",[CG(BB.info.pixelAspectRatio.num),CG(BB.info.pixelAspectRatio.den)]),uY=BB=>{const OB=BB.info.decoderConfig.colorSpace;return DY("colr",[GY(BB.muxer.isQuickTime?"nclc":"nclx"),eG(null!=OB?.primaries?eB[OB.primaries]:2),eG(null!=OB?.transfer?TB[OB.transfer]:2),eG(null!=OB?.matrix?bB[OB.matrix]:2),BB.muxer.isQuickTime?[]:aG((OB?.fullRange?1:0)<<7)])},mY=BB=>{if(!BB.info.decoderConfig)return null;const OB=BB.info.decoderConfig,GB=OB.codec.split("."),YB=Number(GB[1]),DB=Number(GB[2]),QB=(Number(GB[3])<<4)+((GB[4]?Number(GB[4]):1)<<1)+(GB[8]?Number(GB[8]):Number(OB.colorSpace?.fullRange??0)),oB=GB[5]?Number(GB[5]):OB.colorSpace?.primaries?eB[OB.colorSpace.primaries]:1,jB=GB[6]?Number(GB[6]):OB.colorSpace?.transfer?TB[OB.colorSpace.transfer]:1,yB=GB[7]?Number(GB[7]):OB.colorSpace?.matrix?bB[OB.colorSpace.matrix]:1;return QY("vpcC",1,0,[aG(YB),aG(DB),aG(QB),aG(oB),aG(jB),aG(yB),eG(0)])},IY=(BB,OB)=>{let GB,YB=0,DB=16;const QB=MG.includes(OB.track.source._codec);if(QB){const BB=OB.track.source._codec,{sampleSize:GB}=WG(BB);DB=8*GB,DB>16&&(YB=1)}if(OB.muxer.isQuickTime&&(YB=1),0===YB)GB=[Array(6).fill(0),eG(1),eG(YB),eG(0),CG(0),eG(OB.info.numberOfChannels),eG(DB),eG(0),eG(0),eG(OB.info.sampleRate<65536?OB.info.sampleRate:0),eG(0)];else{const BB=QB?0:-2;GB=[Array(6).fill(0),eG(1),eG(YB),eG(0),CG(0),eG(OB.info.numberOfChannels),eG(Math.min(DB,16)),TG(BB),eG(0),eG(OB.info.sampleRate<65536?OB.info.sampleRate:0),eG(0),QB?[CG(1),CG(DB/8),CG(OB.info.numberOfChannels*DB/8)]:[CG(0),CG(0),CG(0)],CG(2)]}return DY(BB,GB,[nD(OB.track.source._codec,OB.muxer.isQuickTime)?.(OB)??null,dY(OB)])},FY=BB=>{let OB;switch(BB.track.source._codec){case"aac":OB=64;break;case"mp3":OB=107;break;case"vorbis":OB=221;break;default:throw new Error(`Unhandled audio codec: ${BB.track.source._codec}`)}let GB=[...aG(OB),...aG(21),...bG(0),...CG(BB.maxBitrate),...CG(BB.avgBitrate)];if(BB.info.decoderConfig.description){const OB=EB(BB.info.decoderConfig.description);GB=[...GB,...aG(5),...OY(OB.byteLength),...OB]}return GB=[...eG(1),...aG(0),...aG(4),...OY(GB.length),...GB,...aG(6),...aG(1),...aG(2)],GB=[...aG(3),...OY(GB.length),...GB],QY("esds",0,0,GB)},iY=BB=>DY("wave",void 0,[LY(BB),gY(BB),DY("\\0\\0\\0\\0")]),LY=BB=>DY("frma",[GY(SD(BB.track.source._codec,BB.info.decoderConfig.codec,BB.muxer.isQuickTime))]),gY=BB=>{const{littleEndian:OB}=WG(BB.track.source._codec);return DY("enda",[eG(+OB)])},rY=BB=>{let OB=BB.info.numberOfChannels,GB=3840,YB=BB.info.sampleRate,DB=0,QB=0,oB=new Uint8Array(0);const jB=BB.info.decoderConfig?.description;if(jB){uB(jB.byteLength>=18);const BB=EB(jB),yB=CO(BB);OB=yB.outputChannelCount,GB=yB.preSkip,YB=yB.inputSampleRate,DB=yB.outputGain,QB=yB.channelMappingFamily,yB.channelMappingTable&&(oB=yB.channelMappingTable)}return DY("dOps",[aG(0),aG(OB),eG(GB),CG(YB),TG(DB),aG(QB),...oB])},XY=BB=>{const OB=BB.info.decoderConfig?.description;uB(OB);const GB=EB(OB);return QY("dfLa",0,0,[...GB.subarray(4)])},wY=BB=>{const{littleEndian:OB,sampleSize:GB}=WG(BB.track.source._codec);return QY("pcmC",0,0,[aG(+OB),aG(8*GB)])},EY=BB=>{uB(BB.info.primingPacket);const OB=(BB=>{if(BB.length<7)return null;if(11!==BB[0]||119!==BB[1])return null;const OB=new pO(BB);OB.skipBits(16),OB.skipBits(16);const GB=OB.readBits(2);if(3===GB)return null;const YB=OB.readBits(6),DB=OB.readBits(5);if(DB>8)return null;const QB=OB.readBits(3),oB=OB.readBits(3);return 0!==(1&oB)&&1!==oB&&OB.skipBits(2),0!==(4&oB)&&OB.skipBits(2),2===oB&&OB.skipBits(2),{fscod:GB,bsid:DB,bsmod:QB,acmod:oB,lfeon:OB.readBits(1),bitRateCode:Math.floor(YB/2)}})(BB.info.primingPacket.data);if(!OB)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const GB=new Uint8Array(3),YB=new pO(GB);return YB.writeBits(2,OB.fscod),YB.writeBits(5,OB.bsid),YB.writeBits(3,OB.bsmod),YB.writeBits(3,OB.acmod),YB.writeBits(1,OB.lfeon),YB.writeBits(5,OB.bitRateCode),YB.writeBits(5,0),DY("dac3",[...GB])},cY=BB=>{uB(BB.info.primingPacket);const OB=(BB=>{if(BB.length<6)return null;if(11!==BB[0]||119!==BB[1])return null;const OB=new pO(BB);OB.skipBits(16);const GB=OB.readBits(2);if(OB.skipBits(3),0!==GB&&2!==GB)return null;const YB=OB.readBits(11),DB=OB.readBits(2);let QB,oB=0;3===DB?(oB=OB.readBits(2),QB=3):QB=OB.readBits(2);const jB=OB.readBits(3),yB=OB.readBits(1),JB=OB.readBits(5);if(JB<11||JB>16)return null;const MB=vO[QB];let PB;return PB=DB<3?nO[DB]/1e3:UO[oB]/1e3,{dataRate:Math.round((YB+1)*PB/(16*MB)),substreams:[{fscod:DB,fscod2:oB,bsid:JB,bsmod:0,acmod:jB,lfeon:yB,numDepSub:0,chanLoc:0}]}})(BB.info.primingPacket.data);if(!OB)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let GB=16;for(const oB of OB.substreams)GB+=23,oB.numDepSub>0?GB+=9:GB+=1;const YB=Math.ceil(GB/8),DB=new Uint8Array(YB),QB=new pO(DB);QB.writeBits(13,OB.dataRate),QB.writeBits(3,OB.substreams.length-1);for(const oB of OB.substreams)QB.writeBits(2,oB.fscod),QB.writeBits(5,oB.bsid),QB.writeBits(1,0),QB.writeBits(1,0),QB.writeBits(3,oB.bsmod),QB.writeBits(3,oB.acmod),QB.writeBits(1,oB.lfeon),QB.writeBits(3,0),QB.writeBits(4,oB.numDepSub),oB.numDepSub>0?QB.writeBits(9,oB.chanLoc):QB.writeBits(1,0);return DY("dec3",[...DB])},hY=BB=>{uB(BB.info.primingPacket);const OB=QG(BB.info.primingPacket.data);if(!OB)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return DY("ddts",[...yG(OB)])},aY=(BB,OB)=>DY(BB,[Array(6).fill(0),eG(1)],[fD[OB.track.source._codec](OB),dY(OB)]),eY=BB=>QY("stts",0,0,[CG(BB.timeToSampleTable.length),BB.timeToSampleTable.map((BB=>[CG(BB.sampleCount),CG(BB.sampleDelta)]))]),TY=BB=>{if(BB.samples.every((BB=>"key"===BB.type)))return null;const OB=[...BB.samples.entries()].filter((BB=>{let[,OB]=BB;return"key"===OB.type}));return QY("stss",0,0,[CG(OB.length),OB.map((BB=>{let[OB]=BB;return CG(OB+1)}))])},bY=BB=>QY("stsc",0,0,[CG(BB.compactlyCodedChunkTable.length),BB.compactlyCodedChunkTable.map((BB=>[CG(BB.firstChunk),CG(BB.samplesPerChunk),CG(1)]))]),CY=BB=>{if("audio"===BB.type&&BB.info.requiresPcmTransformation){const{sampleSize:OB}=WG(BB.track.source._codec);return QY("stsz",0,0,[CG(OB*BB.info.numberOfChannels),CG(BB.samples.reduce(((OB,GB)=>OB+wD(GB.duration,BB.timescale)),0))])}return QY("stsz",0,0,[CG(0),CG(BB.samples.length),BB.samples.map((BB=>CG(BB.size)))])},HY=BB=>BB.finalizedChunks.length>0&&gB(BB.finalizedChunks).offset>=2**32?QY("co64",0,0,[CG(BB.finalizedChunks.length),BB.finalizedChunks.map((BB=>vG(BB.offset)))]):QY("stco",0,0,[CG(BB.finalizedChunks.length),BB.finalizedChunks.map((BB=>CG(BB.offset)))]),vY=BB=>QY("ctts",1,0,[CG(BB.compositionTimeOffsetTable.length),BB.compositionTimeOffsetTable.map((BB=>[CG(BB.sampleCount),HG(BB.sampleCompositionTimeOffset)]))]),sY=BB=>{let OB=1/0,GB=-1/0,YB=1/0,DB=-1/0;uB(BB.compositionTimeOffsetTable.length>0),uB(BB.samples.length>0);for(let oB=0;oB<BB.compositionTimeOffsetTable.length;oB++){const YB=BB.compositionTimeOffsetTable[oB];OB=Math.min(OB,YB.sampleCompositionTimeOffset),GB=Math.max(GB,YB.sampleCompositionTimeOffset)}for(let oB=0;oB<BB.samples.length;oB++){const OB=BB.samples[oB];YB=Math.min(YB,wD(OB.timestamp,BB.timescale)),DB=Math.max(DB,wD(OB.timestamp+OB.duration,BB.timescale))}const QB=Math.max(-OB,0);return DB>=2**31?null:QY("cslg",0,0,[HG(QB),HG(OB),HG(GB),HG(YB),HG(DB)])},xY=BB=>DY("mvex",void 0,BB.map(tY)),tY=BB=>QY("trex",0,0,[CG(BB.track.id),CG(1),CG(0),CG(0),CG(0)]),BD=(BB,OB)=>DY("moof",void 0,[OD(BB),...OB.map(YD)]),OD=BB=>QY("mfhd",0,0,[CG(BB)]),GD=BB=>{let OB=0,GB=0;const YB="delta"===BB.type;return GB|=+YB,OB|=YB?1:2,OB<<24|GB<<16},YD=BB=>DY("traf",void 0,[DD(BB),QD(BB),oD(BB)]),DD=BB=>{uB(BB.currentChunk);let OB=0;OB|=8,OB|=16,OB|=32,OB|=131072;const GB=BB.currentChunk.samples[1]??BB.currentChunk.samples[0],YB={duration:GB.timescaleUnitsToNextSample,size:GB.size,flags:GD(GB)};return QY("tfhd",0,131128,[CG(BB.track.id),CG(YB.duration),CG(YB.size),CG(YB.flags)])},QD=BB=>(uB(BB.currentChunk),QY("tfdt",1,0,[vG(wD(BB.currentChunk.startTimestamp,BB.timescale))])),oD=BB=>{uB(BB.currentChunk);const OB=BB.currentChunk.samples.map((BB=>BB.timescaleUnitsToNextSample)),GB=BB.currentChunk.samples.map((BB=>BB.size)),YB=BB.currentChunk.samples.map(GD),DB=BB.currentChunk.samples.map((OB=>wD(OB.timestamp-OB.decodeTimestamp,BB.timescale))),QB=new Set(OB),oB=new Set(GB),jB=new Set(YB),yB=new Set(DB),JB=2===jB.size&&YB[0]!==YB[1],MB=QB.size>1,PB=oB.size>1,zB=!JB&&jB.size>1,lB=yB.size>1||[...yB].some((BB=>0!==BB));let pB=0;return pB|=1,pB|=4*+JB,pB|=256*+MB,pB|=512*+PB,pB|=1024*+zB,pB|=2048*+lB,QY("trun",1,pB,[CG(BB.currentChunk.samples.length),CG(BB.currentChunk.offset-BB.currentChunk.moofOffset||0),JB?CG(YB[0]):[],BB.currentChunk.samples.map(((BB,QB)=>[MB?CG(OB[QB]):[],PB?CG(GB[QB]):[],zB?CG(YB[QB]):[],lB?HG(DB[QB]):[]]))])},jD=BB=>QY("tfra",1,0,[CG(BB.track.id),CG(63),CG(BB.finalizedChunks.length),BB.finalizedChunks.map((OB=>[vG(wD(OB.samples[0].timestamp,BB.timescale)),vG(OB.moofOffset),CG(OB.trafIndex+1),CG(1),CG(1)]))]),yD=()=>QY("mfro",0,0,[CG(0)]),JD=()=>DY("vtte"),MD=(BB,OB,GB,YB,DB)=>DY("vttc",void 0,[null!==DB?DY("vsid",[HG(DB)]):null,null!==GB?DY("iden",[...aB.encode(GB)]):null,null!==OB?DY("ctim",[...aB.encode(wG(OB))]):null,null!==YB?DY("sttg",[...aB.encode(YB)]):null,DY("payl",[...aB.encode(BB)])]),PD=BB=>DY("vtta",[...aB.encode(BB)]),zD=BB=>{const OB=[],GB=BB.format._options.metadataFormat??"auto",YB=BB.output._metadataTags;if("mdir"===GB||"auto"===GB&&!BB.isQuickTime){const BB=ND(YB);BB&&OB.push(BB)}else if("mdta"===GB){const BB=RD(YB);BB&&OB.push(BB)}else("udta"===GB||"auto"===GB&&BB.isQuickTime)&&lD(OB,BB.output._metadataTags);return 0===OB.length?null:DY("udta",void 0,OB)},lD=(BB,OB)=>{for(const{key:GB,value:YB}of oO(OB))switch(GB){case"title":BB.push(pD("\\xa9nam",YB));break;case"description":BB.push(pD("\\xa9des",YB));break;case"artist":BB.push(pD("\\xa9ART",YB));break;case"album":BB.push(pD("\\xa9alb",YB));break;case"albumArtist":BB.push(pD("albr",YB));break;case"genre":BB.push(pD("\\xa9gen",YB));break;case"date":BB.push(pD("\\xa9day",YB.toISOString().slice(0,10)));break;case"comment":BB.push(pD("\\xa9cmt",YB));break;case"lyrics":BB.push(pD("\\xa9lyr",YB));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:xB(GB)}if(OB.raw)for(const GB in OB.raw){const YB=OB.raw[GB];null==YB||4!==GB.length||BB.some((BB=>BB.type===GB))||("string"===typeof YB?BB.push(pD(GB,YB)):YB instanceof Uint8Array&&BB.push(DY(GB,Array.from(YB))))}},pD=(BB,OB)=>{const GB=aB.encode(OB);return DY(BB,[eG(GB.length),eG(kD("und")),Array.from(GB)])},qD={"image/jpeg":13,"image/png":14,"image/bmp":27},ZD=(BB,OB)=>{const GB=[];for(const{key:YB,value:DB}of oO(BB))switch(YB){case"title":GB.push({key:OB?"title":"\\xa9nam",value:WD(DB)});break;case"description":GB.push({key:OB?"description":"\\xa9des",value:WD(DB)});break;case"artist":GB.push({key:OB?"artist":"\\xa9ART",value:WD(DB)});break;case"album":GB.push({key:OB?"album":"\\xa9alb",value:WD(DB)});break;case"albumArtist":GB.push({key:OB?"album_artist":"aART",value:WD(DB)});break;case"comment":GB.push({key:OB?"comment":"\\xa9cmt",value:WD(DB)});break;case"genre":GB.push({key:OB?"genre":"\\xa9gen",value:WD(DB)});break;case"beatsPerMinute":OB||GB.push({key:"tmpo",value:DY("data",[CG(21),CG(0),eG(DB)])});break;case"lyrics":GB.push({key:OB?"lyrics":"\\xa9lyr",value:WD(DB)});break;case"date":GB.push({key:OB?"date":"\\xa9day",value:WD(DB.toISOString().slice(0,10))});break;case"images":for(const BB of DB)"coverFront"===BB.kind&&GB.push({key:"covr",value:DY("data",[CG(qD[BB.mimeType]??0),CG(0),Array.from(BB.data)])});break;case"trackNumber":if(OB){const OB=void 0!==BB.tracksTotal?`${DB}/${BB.tracksTotal}`:DB.toString();GB.push({key:"track",value:WD(OB)})}else GB.push({key:"trkn",value:DY("data",[CG(0),CG(0),eG(0),eG(DB),eG(BB.tracksTotal??0),eG(0)])});break;case"discNumber":OB||GB.push({key:"disc",value:DY("data",[CG(0),CG(0),eG(0),eG(DB),eG(BB.discsTotal??0),eG(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:xB(YB)}if(BB.raw)for(const YB in BB.raw){const DB=BB.raw[YB];null==DB||!OB&&4!==YB.length||GB.some((BB=>BB.key===YB))||("string"===typeof DB?GB.push({key:YB,value:WD(DB)}):DB instanceof Uint8Array?GB.push({key:YB,value:DY("data",[CG(0),CG(0),Array.from(DB)])}):DB instanceof zO&&GB.push({key:YB,value:DY("data",[CG(qD[DB.mimeType]??0),CG(0),Array.from(DB.data)])}))}return GB},ND=BB=>{const OB=ZD(BB,!1);return 0===OB.length?null:QY("meta",0,0,void 0,[RY(!1,"mdir","","appl"),DY("ilst",void 0,OB.map((BB=>DY(BB.key,void 0,[BB.value]))))])},RD=BB=>{const OB=ZD(BB,!0);return 0===OB.length?null:DY("meta",void 0,[RY(!1,"mdta",""),QY("keys",0,0,[CG(OB.length)],OB.map((BB=>DY("mdta",[...aB.encode(BB.key)])))),DY("ilst",void 0,OB.map(((BB,OB)=>{const GB=String.fromCharCode(...CG(OB+1));return DY(GB,void 0,[BB.value])})))])},WD=BB=>DY("data",[CG(1),CG(0),...aB.encode(BB)]),AD=(BB,OB)=>{switch(BB){case"avc":return OB.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return OB}},VD={avc:BB=>BB.info.decoderConfig&&DY("avcC",[...EB(BB.info.decoderConfig.description)]),hevc:BB=>BB.info.decoderConfig&&DY("hvcC",[...EB(BB.info.decoderConfig.description)]),vp8:mY,vp9:mY,av1:BB=>DY("av1C",NG(BB.info.decoderConfig.codec)),prores:null},SD=(BB,OB,GB)=>{switch(BB){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return OB}if(GB)switch(BB){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(BB){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},nD=(BB,OB)=>{switch(BB){case"aac":case"mp3":case"vorbis":return FY;case"opus":return rY;case"flac":return XY;case"ac3":return EY;case"eac3":return cY;case"dts":return hY}if(OB)switch(BB){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return iY}else switch(BB){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return wY}return null},UD={webvtt:"wvtt"},fD={webvtt:BB=>DY("vttC",[...aB.encode(BB.info.config.description)])},kD=BB=>{uB(3===BB.length);let OB=0;for(let GB=0;GB<3;GB++)OB<<=5,OB+=BB.charCodeAt(GB)-96;return OB};class dD{constructor(BB,OB){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,BB._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=BB,BB._setMonotonicity(OB),BB._writerAcquired=!0}start(){uB(!this.started),this.target._start(),this.started=!0}write(BB){uB(this.started&&!this.finalized),this.maybeTrackWrites(BB),this.target._write(BB,this.pos),this.pos+=BB.byteLength}seek(BB){this.pos=BB}getPos(){return this.pos}async flush(){return uB(this.started&&!this.finalized),this.target._flush()}async finalize(){uB(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(BB){if(!this.trackedWrites)return;let OB=this.getPos();if(OB<this.trackedStart){if(OB+BB.byteLength<=this.trackedStart)return;BB=BB.subarray(this.trackedStart-OB),OB=0}const GB=OB+BB.byteLength-this.trackedStart;let YB=this.trackedWrites.byteLength;for(;YB<GB;)YB*=2;if(YB!==this.trackedWrites.byteLength){const BB=new Uint8Array(YB);BB.set(this.trackedWrites,0),this.trackedWrites=BB}this.trackedWrites.set(BB,OB-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,OB+BB.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const BB={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,BB}}GB(7);class KD extends MO{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(BB){!1!==this._monotonicity&&(this._monotonicity=BB)}_dispatchWrite(BB,OB){this.onwrite?.(BB,OB),this._emit("write",{start:BB,end:OB})}slice(BB){if(!Number.isInteger(BB)||BB<0)throw new TypeError("offset must be a non-negative integer.");return new iD(this,BB)}}const uD=65536,mD=2**32;class ID extends KD{constructor(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!BB||"object"!==typeof BB)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==BB.onFinalize&&"function"!==typeof BB.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=BB,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(uD,{maxByteLength:mD})}catch{this._buffer=new ArrayBuffer(uD),this._supportsResize=!1}else this._buffer=new ArrayBuffer(uD);this._bytes=new Uint8Array(this._buffer)}_ensureSize(BB){let OB=this._buffer.byteLength;for(;OB<BB;)OB*=2;if(OB!==this._buffer.byteLength){if(OB>mD)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(OB);else{const BB=new ArrayBuffer(OB),GB=new Uint8Array(BB);GB.set(this._bytes,0),this._buffer=BB,this._bytes=GB}}}_start(){}_write(BB,OB){this._ensureSize(OB+BB.byteLength),this._bytes.set(BB,OB),this._maxPos=Math.max(this._maxPos,OB+BB.byteLength),this._dispatchWrite(OB,OB+BB.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(BB,OB){return this._bytes.slice(BB,OB)}}class FD extends KD{_start(){}_write(BB,OB){this._dispatchWrite(OB,OB+BB.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class iD extends KD{constructor(BB,OB){super(),this._baseTarget=BB,this._offset=OB}_start(){}_write(BB,OB){this._baseTarget._write(BB,this._offset+OB),this._dispatchWrite(OB,OB+BB.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(BB){super._setMonotonicity(BB),this._baseTarget._setMonotonicity(BB)}}class LD{constructor(BB,OB){if(this.rootPath=BB,this.getTarget=OB,"string"!==typeof BB)throw new TypeError("rootPath must be a string.");if("function"!==typeof OB)throw new TypeError("getTarget must be a function.")}}const gD=BB=>{const OB=BB.filePos,GB=iG(BB,9),YB=new pO(GB);if(4095!==YB.readBits(12))return null;YB.skipBits(1);if(0!==YB.readBits(2))return null;const DB=YB.readBits(1),QB=YB.readBits(2)+1,oB=YB.readBits(4);if(15===oB)return null;YB.skipBits(1);const jB=YB.readBits(3);if(0===jB)throw new Error("ADTS frames with channel configuration 0 are not supported.");YB.skipBits(1),YB.skipBits(1),YB.skipBits(1),YB.skipBits(1);const yB=YB.readBits(13);YB.skipBits(11);const JB=YB.readBits(2)+1;if(1!==JB)throw new Error("ADTS frames with more than one AAC frame are not supported.");let MB=null;return 1===DB?BB.filePos-=2:MB=YB.readBits(16),{objectType:QB,samplingFrequencyIndex:oB,channelConfiguration:jB,frameLength:yB,numberOfAacFrames:JB,crcCheck:MB,startPos:OB}},rD=57600,XD=BB=>{const OB={},GB=BB.track;return void 0!==GB.metadata.name&&(OB.name=GB.metadata.name),OB},wD=function(BB,OB){const GB=BB*OB;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(GB):GB},ED=BB=>{if(0===BB.samples.length)return 0;let OB=1/0,GB=-1/0;for(let YB=0;YB<BB.samples.length;YB++){const DB=BB.samples[YB];DB.timestamp<OB&&(OB=DB.timestamp),DB.timestamp+DB.duration>GB&&(GB=DB.timestamp+DB.duration)}return OB===1/0?0:GB-OB};class cD extends rG{constructor(BB,OB){super(BB),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new ID,this.auxWriter=new dD(this.auxTarget,!1),this.auxBoxWriter=new EG(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=sB(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=OB,this.formatOptions={...OB._options},this.isQuickTime=OB instanceof PQ,this.isCmaf=OB instanceof MQ,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(OB instanceof MQ?1/0:1),this.auxWriter.start()}async start(){const BB=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((BB=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:BB instanceof ID)),this.boxWriter=new EG(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof ID&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const BB=await this.output._getInitTarget(),OB=new dD(BB,!0);OB.start(),this.initWriter=OB,this.initBoxWriter=new EG(OB)}const OB=this.output.tracks.some((BB=>BB.isVideoTrack()&&"avc"===BB.source._codec));{const BB=this.initBoxWriter??this.boxWriter;if(uB(BB),this.formatOptions.onFtyp&&BB.writer.startTrackingWrites(),BB.writeBox((BB=>{const OB=512;return BB.isQuickTime?DY("ftyp",[GY("qt  "),CG(OB),GY("qt  ")]):BB.fragmented?BB.cmaf?DY("ftyp",[GY("iso5"),CG(OB),GY("iso5"),GY("iso6"),GY("mp41"),GY("cmfc"),GY("dash")]):DY("ftyp",[GY("iso5"),CG(OB),GY("iso5"),GY("iso6"),GY("mp41")]):DY("ftyp",[GY("isom"),CG(OB),GY("isom"),BB.holdsAvc?GY("avc1"):[],GY("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:OB,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:OB,start:GB}=BB.writer.stopTrackingWrites();this.formatOptions.onFtyp(OB,GB)}this.ftypSize=BB.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const GB of this.output.tracks)if(void 0===GB.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(uB(this.writer),uB(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=yY(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const GB of this.output.tracks)GB.isVideoTrack()&&GB.metadata.decoderConfig?this.getVideoTrackData(GB,GB.metadata.primingPacket??null,{decoderConfig:GB.metadata.decoderConfig}):GB.isAudioTrack()&&GB.metadata.decoderConfig&&this.getAudioTrackData(GB,GB.metadata.primingPacket??null,{decoderConfig:GB.metadata.decoderConfig});BB()}allTracksAreKnown(){for(const BB of this.output.tracks)if(!BB.source._closed&&!this.trackDatas.some((OB=>OB.track===BB)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const BB=this.trackDatas.map((BB=>{if("video"===BB.type)return BB.info.decoderConfig.codec;if("audio"===BB.type)return BB.info.decoderConfig.codec;return{webvtt:"wvtt"}[BB.track.source._codec]}));return(BB=>{let OB=(BB.hasVideo?"video/":BB.hasAudio?"audio/":"application/")+(BB.isQuickTime?"quicktime":"mp4");BB.codecStrings.length>0&&(OB+=`; codecs="${[...new Set(BB.codecStrings)].join(", ")}"`);return OB})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((BB=>"video"===BB.type)),hasAudio:this.trackDatas.some((BB=>"audio"===BB.type)),codecStrings:BB})}getVideoTrackData(BB,OB,GB){const YB=this.trackDatas.find((OB=>OB.track===BB));if(YB)return YB;kG(GB,BB.source._codec),uB(GB),uB(GB.decoderConfig);const DB={...GB.decoderConfig};uB(void 0!==DB.codedWidth),uB(void 0!==DB.codedHeight);let QB=!1;if("avc"!==BB.source._codec||DB.description){if("hevc"===BB.source._codec&&!DB.description){if(!OB)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const BB=XO(OB.data);if(!BB)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");DB.description=(BB=>{const OB=[];OB.push(BB.configurationVersion),OB.push((3&BB.generalProfileSpace)<<6|(1&BB.generalTierFlag)<<5|31&BB.generalProfileIdc),OB.push(BB.generalProfileCompatibilityFlags>>>24&255),OB.push(BB.generalProfileCompatibilityFlags>>>16&255),OB.push(BB.generalProfileCompatibilityFlags>>>8&255),OB.push(255&BB.generalProfileCompatibilityFlags),OB.push(...BB.generalConstraintIndicatorFlags),OB.push(255&BB.generalLevelIdc),OB.push(240|BB.minSpatialSegmentationIdc>>8&15),OB.push(255&BB.minSpatialSegmentationIdc),OB.push(252|3&BB.parallelismType),OB.push(252|3&BB.chromaFormatIdc),OB.push(248|7&BB.bitDepthLumaMinus8),OB.push(248|7&BB.bitDepthChromaMinus8),OB.push(BB.avgFrameRate>>8&255),OB.push(255&BB.avgFrameRate),OB.push((3&BB.constantFrameRate)<<6|(7&BB.numTemporalLayers)<<3|(1&BB.temporalIdNested)<<2|3&BB.lengthSizeMinusOne),OB.push(255&BB.arrays.length);for(const GB of BB.arrays){OB.push((1&GB.arrayCompleteness)<<7|63&GB.nalUnitType),OB.push(GB.nalUnits.length>>8&255),OB.push(255&GB.nalUnits.length);for(const BB of GB.nalUnits){OB.push(BB.length>>8&255),OB.push(255&BB.length);for(let GB=0;GB<BB.length;GB++)OB.push(BB[GB])}}return new Uint8Array(OB)})(BB),QB=!0}}else{if(!OB)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const BB=FO(OB.data);if(!BB)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");DB.description=(BB=>{const OB=[];OB.push(BB.configurationVersion),OB.push(BB.avcProfileIndication),OB.push(BB.profileCompatibility),OB.push(BB.avcLevelIndication),OB.push(252|3&BB.lengthSizeMinusOne),OB.push(224|31&BB.sequenceParameterSets.length);for(const GB of BB.sequenceParameterSets){const BB=GB.byteLength;OB.push(BB>>8),OB.push(255&BB);for(let YB=0;YB<BB;YB++)OB.push(GB[YB])}OB.push(BB.pictureParameterSets.length);for(const GB of BB.pictureParameterSets){const BB=GB.byteLength;OB.push(BB>>8),OB.push(255&BB);for(let YB=0;YB<BB;YB++)OB.push(GB[YB])}if((100===BB.avcProfileIndication||110===BB.avcProfileIndication||122===BB.avcProfileIndication||144===BB.avcProfileIndication)&&null!==BB.chromaFormat){uB(null!==BB.bitDepthLumaMinus8),uB(null!==BB.bitDepthChromaMinus8),uB(null!==BB.sequenceParameterSetExt),OB.push(252|3&BB.chromaFormat),OB.push(248|7&BB.bitDepthLumaMinus8),OB.push(248|7&BB.bitDepthChromaMinus8),OB.push(BB.sequenceParameterSetExt.length);for(const GB of BB.sequenceParameterSetExt){const BB=GB.byteLength;OB.push(BB>>8),OB.push(255&BB);for(let YB=0;YB<BB;YB++)OB.push(GB[YB])}}return new Uint8Array(OB)})(BB),QB=!0}const oB=((BB,OB)=>{const GB=BB<0?-1:1;let YB=0,DB=1,QB=1,oB=0,jB=BB=Math.abs(BB);for(;;){const BB=Math.floor(jB),yB=BB*QB+YB,JB=BB*oB+DB;if(JB>OB)return{num:GB*QB,den:oB};if(YB=QB,DB=oB,QB=yB,oB=JB,jB=1/(jB-BB),!isFinite(jB))break}return{num:GB*QB,den:oB}})(1/(BB.metadata.frameRate??rD),1e6).den,jB=DB.displayAspectWidth,yB=DB.displayAspectHeight,JB=void 0===jB||void 0===yB?{num:1,den:1}:yO({num:jB*DB.codedHeight,den:yB*DB.codedWidth}),MB="ap4h"===DB.codec||"ap4x"===DB.codec,PB={muxer:this,track:BB,type:"video",info:{width:DB.codedWidth,height:DB.codedHeight,pixelAspectRatio:JB,decoderConfig:DB,requiresAnnexBTransformation:QB,hasAlphaChannel:MB},timescale:oB,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:BB.source._nominalBitrate??BB.metadata.averageBitrate??0,maxBitrate:BB.source._nominalBitrate??BB.metadata.bitrate??0};return this.trackDatas.push(PB),this.trackDatas.sort(((BB,OB)=>BB.track.id-OB.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),PB}getAudioTrackData(BB,OB,GB){const YB=this.trackDatas.find((OB=>OB.track===BB));if(YB)return YB;KG(GB,BB.source._codec),uB(GB),uB(GB.decoderConfig);const DB={...GB.decoderConfig};let QB=!1;if("aac"===BB.source._codec&&!DB.description){if(!OB)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const BB=gD(IG.tempFromBytes(OB.data));if(!BB)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const GB=qO[BB.samplingFrequencyIndex],YB=ZO[BB.channelConfiguration];if(void 0===GB||void 0===YB)throw new Error("Invalid ADTS frame header.");DB.description=NO({objectType:BB.objectType,outputSampleRate:GB,outputNumberOfChannels:YB}),QB=!0}if(!OB){if("ac3"===BB.source._codec||"eac3"===BB.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===BB.source._codec)throw new Error("DTS requires a priming packet.")}const oB={muxer:this,track:BB,type:"audio",info:{numberOfChannels:GB.decoderConfig.numberOfChannels,sampleRate:GB.decoderConfig.sampleRate,decoderConfig:DB,requiresPcmTransformation:!this.isFragmented&&MG.includes(BB.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:QB,primingPacket:OB},timescale:DB.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:BB.source._nominalBitrate??BB.metadata.averageBitrate??0,maxBitrate:BB.source._nominalBitrate??BB.metadata.bitrate??0};return this.trackDatas.push(oB),this.trackDatas.sort(((BB,OB)=>BB.track.id-OB.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),oB}getSubtitleTrackData(BB,OB){const GB=this.trackDatas.find((OB=>OB.track===BB));if(GB)return GB;uG(OB),uB(OB),uB(OB.config);const YB={muxer:this,track:BB,type:"subtitle",info:{config:OB.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:BB.source._nominalBitrate??BB.metadata.averageBitrate??0,maxBitrate:BB.source._nominalBitrate??BB.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(YB),this.trackDatas.sort(((BB,OB)=>BB.track.id-OB.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),YB}async addEncodedVideoPacket(BB,OB,GB){const YB=await this.mutex.acquire();try{const YB=this.getVideoTrackData(BB,OB,GB);let DB=OB.data;if(YB.info.requiresAnnexBTransformation){const BB=[...KO(DB)].map((BB=>DB.subarray(BB.offset,BB.offset+BB.length)));if(0===BB.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");DB=IO(BB,4)}this.validateTimestamp(YB.track,OB.timestamp,"key"===OB.type);const QB=this.createSampleForTrack(YB,DB,OB.timestamp,OB.duration,OB.type);await this.registerSample(YB,QB)}finally{YB()}}async addEncodedAudioPacket(BB,OB,GB){const YB=await this.mutex.acquire();try{const YB=this.getAudioTrackData(BB,OB,GB);let DB=OB.data;if(YB.info.requiresAdtsStripping){const BB=gD(IG.tempFromBytes(DB));if(!BB)throw new Error("Expected ADTS frame, didn\'t get one.");const OB=null===BB.crcCheck?7:9;DB=DB.subarray(OB)}this.validateTimestamp(YB.track,OB.timestamp,"key"===OB.type);let QB=OB.timestamp,oB=OB.duration;if(YB.info.requiresPcmTransformation){const BB=WG(YB.info.decoderConfig.codec).sampleSize*YB.info.numberOfChannels;if(oB=DB.byteLength/BB/YB.info.sampleRate,null!==YB.info.expectedNextPcmPacketTimestamp){const BB=QB-YB.info.expectedNextPcmPacketTimestamp;if(BB<.01)QB=YB.info.expectedNextPcmPacketTimestamp;else{const OB=await this.padWithSilence(YB,YB.info.expectedNextPcmPacketTimestamp,BB);QB=YB.info.expectedNextPcmPacketTimestamp+OB}}YB.info.expectedNextPcmPacketTimestamp=QB+oB}const jB=this.createSampleForTrack(YB,DB,QB,oB,OB.type);await this.registerSample(YB,jB)}finally{YB()}}async padWithSilence(BB,OB,GB){const YB=wD(GB,BB.timescale);if(GB=YB/BB.timescale,YB>0){const{sampleSize:DB,silentValue:QB}=WG(BB.info.decoderConfig.codec),oB=YB*BB.info.numberOfChannels,jB=new Uint8Array(DB*oB).fill(QB),yB=this.createSampleForTrack(BB,new Uint8Array(jB.buffer),OB,GB,"key");await this.registerSample(BB,yB)}return GB}async addSubtitleCue(BB,OB,GB){const YB=await this.mutex.acquire();try{const YB=this.getSubtitleTrackData(BB,GB);this.validateTimestamp(YB.track,OB.timestamp,!0),"webvtt"===BB.source._codec&&(YB.cueQueue.push(OB),await this.processWebVTTCues(YB,OB.timestamp))}finally{YB()}}async processWebVTTCues(BB,OB){for(;BB.cueQueue.length>0;){BB.lastCueEndTimestamp??=Math.min(0,BB.cueQueue[0].timestamp);const GB=new Set([]);for(const yB of BB.cueQueue)uB(yB.timestamp<=OB),uB(BB.lastCueEndTimestamp<=yB.timestamp+yB.duration),GB.add(Math.max(yB.timestamp,BB.lastCueEndTimestamp)),GB.add(yB.timestamp+yB.duration);const YB=[...GB].sort(((BB,OB)=>BB-OB)),DB=YB[0],QB=YB[1]??DB;if(OB<QB)break;if(BB.lastCueEndTimestamp<DB){this.auxWriter.seek(0);const OB=JD();this.auxBoxWriter.writeBox(OB);const GB=this.auxTarget._getSlice(0,this.auxWriter.getPos()),YB=this.createSampleForTrack(BB,GB,BB.lastCueEndTimestamp,DB-BB.lastCueEndTimestamp,"key");await this.registerSample(BB,YB),BB.lastCueEndTimestamp=DB}this.auxWriter.seek(0);for(let OB=0;OB<BB.cueQueue.length;OB++){const GB=BB.cueQueue[OB];if(GB.timestamp>=QB)break;XG.lastIndex=0;const YB=XG.test(GB.text),oB=GB.timestamp+GB.duration;let jB=BB.cueToSourceId.get(GB);if(void 0===jB&&QB<oB&&(jB=BB.nextSourceId++,BB.cueToSourceId.set(GB,jB)),GB.notes){const BB=PD(GB.notes);this.auxBoxWriter.writeBox(BB)}const yB=MD(GB.text,YB?DB:null,GB.identifier??null,GB.settings??null,jB??null);this.auxBoxWriter.writeBox(yB),oB===QB&&BB.cueQueue.splice(OB--,1)}const oB=this.auxTarget._getSlice(0,this.auxWriter.getPos()),jB=this.createSampleForTrack(BB,oB,DB,QB-DB,"key");await this.registerSample(BB,jB),BB.lastCueEndTimestamp=QB}}createSampleForTrack(BB,OB,GB,YB,DB){return{timestamp:GB,decodeTimestamp:GB,duration:YB,data:OB,size:OB.byteLength,type:DB,timescaleUnitsToNextSample:wD(YB,BB.timescale)}}processTimestamps(BB,OB){if(0===BB.timestampProcessingQueue.length)return;if("audio"===BB.type&&BB.info.requiresPcmTransformation){uB(!this.isFragmented),BB.startTimestampOffset??=BB.timestampProcessingQueue[0].timestamp;let OB=0;for(let GB=0;GB<BB.timestampProcessingQueue.length;GB++){const YB=BB.timestampProcessingQueue[GB];OB+=wD(YB.duration,BB.timescale)}if(0===BB.timeToSampleTable.length)BB.timeToSampleTable.push({sampleCount:OB,sampleDelta:1});else{gB(BB.timeToSampleTable).sampleCount+=OB}return void(BB.timestampProcessingQueue.length=0)}const GB=BB.timestampProcessingQueue.map((BB=>BB.timestamp)).sort(((BB,OB)=>BB-OB));this.isFragmented?BB.startTimestampOffset??=Math.min(GB[0],0):BB.startTimestampOffset??=GB[0];for(let YB=0;YB<BB.timestampProcessingQueue.length;YB++){const OB=BB.timestampProcessingQueue[YB];OB.decodeTimestamp=GB[YB];const DB=wD(OB.timestamp-OB.decodeTimestamp,BB.timescale),QB=wD(OB.duration,BB.timescale);if(null!==BB.lastTimescaleUnits){uB(BB.lastSample);const GB=wD(OB.decodeTimestamp,BB.timescale,!1),YB=Math.round(GB-BB.lastTimescaleUnits);if(uB(YB>=0),BB.lastTimescaleUnits+=YB,BB.lastSample.timescaleUnitsToNextSample=YB,!this.isFragmented){let OB=gB(BB.timeToSampleTable);if(uB(OB),1===OB.sampleCount){OB.sampleDelta=YB;const GB=BB.timeToSampleTable[BB.timeToSampleTable.length-2];GB&&GB.sampleDelta===YB&&(GB.sampleCount++,BB.timeToSampleTable.pop(),OB=GB)}else OB.sampleDelta!==YB&&(OB.sampleCount--,BB.timeToSampleTable.push(OB={sampleCount:1,sampleDelta:YB}));OB.sampleDelta===QB?OB.sampleCount++:BB.timeToSampleTable.push({sampleCount:1,sampleDelta:QB});const GB=gB(BB.compositionTimeOffsetTable);uB(GB),GB.sampleCompositionTimeOffset===DB?GB.sampleCount++:BB.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:DB})}}else BB.lastTimescaleUnits=wD(OB.decodeTimestamp,BB.timescale,!1),this.isFragmented||(BB.timeToSampleTable.push({sampleCount:1,sampleDelta:QB}),BB.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:DB}));BB.lastSample=OB}if(BB.timestampProcessingQueue.length=0,uB(BB.lastSample),uB(null!==BB.lastTimescaleUnits),void 0!==OB&&0===BB.lastSample.timescaleUnitsToNextSample){uB("key"===OB.type);const GB=wD(OB.timestamp,BB.timescale,!1),YB=Math.round(GB-BB.lastTimescaleUnits);BB.lastSample.timescaleUnitsToNextSample=YB}}async registerSample(BB,OB){"key"===OB.type&&this.processTimestamps(BB,OB),BB.timestampProcessingQueue.push(OB),this.isFragmented?(BB.sampleQueue.push(OB),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(BB,OB):await this.addSampleToTrack(BB,OB)}async addSampleToTrack(BB,OB){if(!this.isFragmented&&(BB.samples.push(OB),"reserve"===this.fastStart)){const OB=BB.track.metadata.maximumPacketCount;if(uB(void 0!==OB),BB.samples.length>OB)throw new Error(`Track #${BB.track.id} has already reached the maximum packet count (${OB}). Either add less packets or increase the maximum packet count.`)}let GB=!1;if(BB.currentChunk){BB.currentChunk.startTimestamp=Math.min(BB.currentChunk.startTimestamp,OB.timestamp);const YB=OB.timestamp-BB.currentChunk.startTimestamp;if(this.isFragmented){const DB=this.trackDatas.every((GB=>{if(BB===GB)return"key"===OB.type;const YB=GB.sampleQueue[0];return YB?"key"===YB.type:GB.closed}));YB>=this.minimumFragmentDuration&&DB&&OB.timestamp>this.maxWrittenTimestamp&&(GB=!0,await this.finalizeFragment())}else GB=YB>=.5}else GB=!0;GB&&(BB.currentChunk&&await this.finalizeCurrentChunk(BB),BB.currentChunk={startTimestamp:OB.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),uB(BB.currentChunk),BB.currentChunk.samples.push(OB),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,OB.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,OB.timestamp+OB.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,OB.timestamp))}async finalizeCurrentChunk(BB){if(uB(!this.isFragmented),uB(this.writer),!BB.currentChunk)return;BB.finalizedChunks.push(BB.currentChunk),this.finalizedChunks.push(BB.currentChunk);let OB=BB.currentChunk.samples.length;if("audio"===BB.type&&BB.info.requiresPcmTransformation&&(OB=BB.currentChunk.samples.reduce(((OB,GB)=>OB+wD(GB.duration,BB.timescale)),0)),0!==BB.compactlyCodedChunkTable.length&&gB(BB.compactlyCodedChunkTable).samplesPerChunk===OB||BB.compactlyCodedChunkTable.push({firstChunk:BB.finalizedChunks.length,samplesPerChunk:OB}),"in-memory"!==this.fastStart){BB.currentChunk.offset=this.writer.getPos();for(const OB of BB.currentChunk.samples)uB(OB.data),this.writer.write(OB.data),OB.data=null;await this.writer.flush()}else BB.currentChunk.offset=0}async interleaveSamples(){let BB=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(uB(this.isFragmented),BB||this.allTracksAreKnown())BB:for(;;){let OB=null,GB=1/0;for(const DB of this.trackDatas){if(!BB&&0===DB.sampleQueue.length&&!DB.closed)break BB;DB.sampleQueue.length>0&&DB.sampleQueue[0].timestamp<GB&&(OB=DB,GB=DB.sampleQueue[0].timestamp)}if(!OB)break;const YB=OB.sampleQueue.shift();await this.addSampleToTrack(OB,YB)}}async finalizeFragment(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(uB(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const BB=this.initBoxWriter??this.boxWriter;uB(BB),this.formatOptions.onMoov&&BB.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const OB=JY(this);if(BB.writeBox(OB),this.formatOptions.onMoov){const{data:OB,start:GB}=BB.writer.stopTrackingWrites();this.formatOptions.onMoov(OB,GB)}if(this.isCmaf){uB(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new EG(this.writer);const BB=this.boxWriter.measureBox(oY()),OB=this.boxWriter.measureBox(jY(this,0));this.segmentHeaderSize=BB+OB,this.writer.seek(this.segmentHeaderSize)}}uB(this.writer),uB(this.boxWriter);const OB=this.trackDatas.filter((BB=>BB.currentChunk));if(0===OB.length)return void(BB&&await this.writer.flush());const GB=this.nextFragmentNumber++,YB=BD(GB,OB),DB=this.writer.getPos(),QB=DB+this.boxWriter.measureBox(YB);let oB=QB+8,jB=1/0;for(let zB=0;zB<OB.length;zB++){const BB=OB[zB];uB(BB.currentChunk),uB(null!==BB.startTimestampOffset),BB.currentChunk.offset=oB,BB.currentChunk.moofOffset=DB,BB.currentChunk.trafIndex=zB,BB.currentChunk.startTimestamp-=BB.startTimestampOffset;for(const OB of BB.currentChunk.samples)oB+=OB.size,OB.timestamp-=BB.startTimestampOffset,OB.decodeTimestamp-=BB.startTimestampOffset;jB=Math.min(jB,BB.currentChunk.startTimestamp)}const yB=oB-QB,JB=yB>=2**32;if(JB)for(const zB of OB)zB.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const MB=BD(GB,OB);if(this.boxWriter.writeBox(MB),this.formatOptions.onMoof){const{data:BB,start:OB}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(BB,OB,jB)}uB(this.writer.getPos()===QB),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const PB=yY(JB);PB.size=yB,this.boxWriter.writeBox(PB),this.writer.seek(QB+(JB?16:8));for(const zB of OB)for(const BB of zB.currentChunk.samples)this.writer.write(BB.data),BB.data=null;if(this.formatOptions.onMdat){const{data:BB,start:OB}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(BB,OB)}for(const zB of OB)zB.finalizedChunks.push(zB.currentChunk),this.finalizedChunks.push(zB.currentChunk),zB.currentChunk=null;BB&&await this.writer.flush()}async registerSampleFastStartReserve(BB,OB){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(BB,OB)):BB.sampleQueue.push(OB)}async createFastStartReserveMdat(){uB(this.writer),uB(this.boxWriter),this.ensureOneEnabledTrack();const BB=JY(this),OB=this.boxWriter.measureBox(BB)+this.computeSampleTableSizeUpperBound()+4096;uB(null!==this.ftypSize),this.writer.seek(this.ftypSize+OB),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=yY(!0),this.boxWriter.writeBox(this.mdat);for(const GB of this.trackDatas){for(const BB of GB.sampleQueue)await this.addSampleToTrack(GB,BB);GB.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){uB("reserve"===this.fastStart);let BB=0;for(const OB of this.trackDatas){const GB=OB.track.metadata.maximumPacketCount;uB(void 0!==GB),BB+=8*Math.ceil(2/3*GB),BB+=4*GB,BB+=8*Math.ceil(2/3*GB),BB+=12*Math.ceil(2/3*GB),BB+=4*GB,BB+=8*GB}return BB}async onTrackClose(BB){const OB=await this.mutex.acquire(),GB=this.trackDatas.find((OB=>OB.track===BB));GB&&(GB.closed=!0,"subtitle"===GB.type&&"webvtt"===BB.source._codec&&await this.processWebVTTCues(GB,1/0),this.processTimestamps(GB)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),OB()}ensureOneEnabledTrack(){for(const BB of["video","audio","subtitle"]){const OB=this.trackDatas.filter((OB=>OB.type===BB));if(0===OB.length)continue;if(!OB.some((BB=>!1!==BB.track.metadata.disposition?.default))){const BB=OB[0];BB.track.metadata.disposition={...BB.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){uB(this.isFragmented);const BB=await this.mutex.acquire();try{for(const BB of this.trackDatas)"subtitle"===BB.type&&"webvtt"===BB.track.source._codec&&await this.processWebVTTCues(BB,1/0),this.processTimestamps(BB);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{BB()}}async finalize(){const BB=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const GB of this.trackDatas)GB.closed=!0,"subtitle"===GB.type&&"webvtt"===GB.track.source._codec&&await this.processWebVTTCues(GB,1/0),this.processTimestamps(GB);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const GB of this.trackDatas){await this.finalizeCurrentChunk(GB);const BB=ED(GB);if(BB>0){let OB=0;for(const BB of GB.samples)OB+=BB.size;GB.avgBitrate=Math.round(8*OB/BB)}else GB.avgBitrate=0;let OB=0,YB=0,DB=0;for(let QB=0;QB<GB.samples.length;QB++){const BB=GB.samples[QB];for(YB+=BB.size;BB.decodeTimestamp-GB.samples[OB].decodeTimestamp>=1;)YB-=GB.samples[OB].size,OB++;DB=Math.max(DB,YB)}if(GB.maxBitrate=8*DB,null!==GB.startTimestampOffset)for(let QB=0;QB<GB.samples.length;QB++){const BB=GB.samples[QB];BB.timestamp-=GB.startTimestampOffset,BB.decodeTimestamp-=GB.startTimestampOffset}}if(uB(this.writer),uB(this.boxWriter),"in-memory"===this.fastStart){let BB;this.mdat=yY(!1);for(let GB=0;GB<2;GB++){const OB=JY(this),GB=this.boxWriter.measureBox(OB);BB=this.boxWriter.measureBox(this.mdat);let YB=this.writer.getPos()+GB+BB;for(const DB of this.finalizedChunks){DB.offset=YB;for(const{data:OB}of DB.samples)uB(OB),YB+=OB.byteLength,BB+=OB.byteLength}if(YB<2**32)break;BB>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const OB=JY(this);if(this.boxWriter.writeBox(OB),this.formatOptions.onMoov){const{data:BB,start:OB}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(BB,OB)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=BB,this.boxWriter.writeBox(this.mdat);for(const GB of this.finalizedChunks)for(const BB of GB.samples)uB(BB.data),this.writer.write(BB.data),BB.data=null;if(this.formatOptions.onMdat){const{data:BB,start:OB}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(BB,OB)}}else if(this.isFragmented)if(this.isCmaf){const BB=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(oY()),this.boxWriter.writeBox(jY(this,BB))}else{const BB=this.writer.getPos(),GB=(OB=this.trackDatas,DY("mfra",void 0,[...OB.map(jD),yD()]));this.boxWriter.writeBox(GB);const YB=this.writer.getPos()-BB;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(YB)}else{uB(this.mdat);const BB=this.boxWriter.offsets.get(this.mdat);uB(void 0!==BB);const OB=this.writer.getPos()-BB;if(this.mdat.size=OB,this.mdat.largeSize=OB>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:BB,start:OB}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(BB,OB)}const GB=JY(this);if("reserve"===this.fastStart){uB(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(GB);const BB=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:BB})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(GB);if(this.formatOptions.onMoov){const{data:BB,start:OB}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(BB,OB)}}var OB;BB()}}var hD;!function(BB){BB[BB.EBML=440786851]="EBML",BB[BB.EBMLVersion=17030]="EBMLVersion",BB[BB.EBMLReadVersion=17143]="EBMLReadVersion",BB[BB.EBMLMaxIDLength=17138]="EBMLMaxIDLength",BB[BB.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",BB[BB.DocType=17026]="DocType",BB[BB.DocTypeVersion=17031]="DocTypeVersion",BB[BB.DocTypeReadVersion=17029]="DocTypeReadVersion",BB[BB.Void=236]="Void",BB[BB.Segment=408125543]="Segment",BB[BB.SeekHead=290298740]="SeekHead",BB[BB.Seek=19899]="Seek",BB[BB.SeekID=21419]="SeekID",BB[BB.SeekPosition=21420]="SeekPosition",BB[BB.Duration=17545]="Duration",BB[BB.Info=357149030]="Info",BB[BB.TimestampScale=2807729]="TimestampScale",BB[BB.MuxingApp=19840]="MuxingApp",BB[BB.WritingApp=22337]="WritingApp",BB[BB.Tracks=374648427]="Tracks",BB[BB.TrackEntry=174]="TrackEntry",BB[BB.TrackNumber=215]="TrackNumber",BB[BB.TrackUID=29637]="TrackUID",BB[BB.TrackType=131]="TrackType",BB[BB.FlagEnabled=185]="FlagEnabled",BB[BB.FlagDefault=136]="FlagDefault",BB[BB.FlagForced=21930]="FlagForced",BB[BB.FlagOriginal=21934]="FlagOriginal",BB[BB.FlagHearingImpaired=21931]="FlagHearingImpaired",BB[BB.FlagVisualImpaired=21932]="FlagVisualImpaired",BB[BB.FlagCommentary=21935]="FlagCommentary",BB[BB.FlagLacing=156]="FlagLacing",BB[BB.Name=21358]="Name",BB[BB.Language=2274716]="Language",BB[BB.LanguageBCP47=2274717]="LanguageBCP47",BB[BB.CodecID=134]="CodecID",BB[BB.CodecPrivate=25506]="CodecPrivate",BB[BB.CodecDelay=22186]="CodecDelay",BB[BB.SeekPreRoll=22203]="SeekPreRoll",BB[BB.DefaultDuration=2352003]="DefaultDuration",BB[BB.Video=224]="Video",BB[BB.PixelWidth=176]="PixelWidth",BB[BB.PixelHeight=186]="PixelHeight",BB[BB.DisplayWidth=21680]="DisplayWidth",BB[BB.DisplayHeight=21690]="DisplayHeight",BB[BB.DisplayUnit=21682]="DisplayUnit",BB[BB.AlphaMode=21440]="AlphaMode",BB[BB.Audio=225]="Audio",BB[BB.SamplingFrequency=181]="SamplingFrequency",BB[BB.Channels=159]="Channels",BB[BB.BitDepth=25188]="BitDepth",BB[BB.SimpleBlock=163]="SimpleBlock",BB[BB.BlockGroup=160]="BlockGroup",BB[BB.Block=161]="Block",BB[BB.BlockAdditions=30113]="BlockAdditions",BB[BB.BlockMore=166]="BlockMore",BB[BB.BlockAdditional=165]="BlockAdditional",BB[BB.BlockAddID=238]="BlockAddID",BB[BB.BlockDuration=155]="BlockDuration",BB[BB.ReferenceBlock=251]="ReferenceBlock",BB[BB.Cluster=524531317]="Cluster",BB[BB.Timestamp=231]="Timestamp",BB[BB.Cues=475249515]="Cues",BB[BB.CuePoint=187]="CuePoint",BB[BB.CueTime=179]="CueTime",BB[BB.CueTrackPositions=183]="CueTrackPositions",BB[BB.CueTrack=247]="CueTrack",BB[BB.CueClusterPosition=241]="CueClusterPosition",BB[BB.Colour=21936]="Colour",BB[BB.MatrixCoefficients=21937]="MatrixCoefficients",BB[BB.TransferCharacteristics=21946]="TransferCharacteristics",BB[BB.Primaries=21947]="Primaries",BB[BB.Range=21945]="Range",BB[BB.Projection=30320]="Projection",BB[BB.ProjectionType=30321]="ProjectionType",BB[BB.ProjectionPoseYaw=30323]="ProjectionPoseYaw",BB[BB.ProjectionPosePitch=30324]="ProjectionPosePitch",BB[BB.ProjectionPoseRoll=30325]="ProjectionPoseRoll",BB[BB.Attachments=423732329]="Attachments",BB[BB.AttachedFile=24999]="AttachedFile",BB[BB.FileDescription=18046]="FileDescription",BB[BB.FileName=18030]="FileName",BB[BB.FileMediaType=18016]="FileMediaType",BB[BB.FileData=18012]="FileData",BB[BB.FileUID=18094]="FileUID",BB[BB.Chapters=272869232]="Chapters",BB[BB.Tags=307544935]="Tags",BB[BB.Tag=29555]="Tag",BB[BB.Targets=25536]="Targets",BB[BB.TargetTypeValue=26826]="TargetTypeValue",BB[BB.TargetType=25546]="TargetType",BB[BB.TagTrackUID=25541]="TagTrackUID",BB[BB.TagEditionUID=25545]="TagEditionUID",BB[BB.TagChapterUID=25540]="TagChapterUID",BB[BB.TagAttachmentUID=25542]="TagAttachmentUID",BB[BB.SimpleTag=26568]="SimpleTag",BB[BB.TagName=17827]="TagName",BB[BB.TagLanguage=17530]="TagLanguage",BB[BB.TagString=17543]="TagString",BB[BB.TagBinary=17541]="TagBinary",BB[BB.ContentEncodings=28032]="ContentEncodings",BB[BB.ContentEncoding=25152]="ContentEncoding",BB[BB.ContentEncodingOrder=20529]="ContentEncodingOrder",BB[BB.ContentEncodingScope=20530]="ContentEncodingScope",BB[BB.ContentCompression=20532]="ContentCompression",BB[BB.ContentCompAlgo=16980]="ContentCompAlgo",BB[BB.ContentCompSettings=16981]="ContentCompSettings",BB[BB.ContentEncryption=20533]="ContentEncryption"}(hD||(hD={}));hD.EBML,hD.Segment,hD.SeekHead,hD.Info,hD.Cluster,hD.Tracks,hD.Cues,hD.Attachments,hD.Chapters,hD.Tags;const aD=new Uint32Array(256);for(let uQ=0;uQ<256;uQ++){let BB=uQ<<24;for(let OB=0;OB<8;OB++)BB=2147483648&BB?BB<<1^79764919:BB<<1;aD[uQ]=BB>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const eD=new Uint32Array(256);for(let uQ=0;uQ<256;uQ++){let BB=uQ<<24;for(let OB=0;OB<8;OB++)BB=2147483648&BB?BB<<1^79764919:BB<<1;eD[uQ]=BB>>>0&4294967295}const TD=BB=>{let OB=4294967295;for(let GB=0;GB<BB.length;GB++){const YB=BB[GB];OB=(OB<<8^eD[OB>>>24^YB])>>>0}return OB},bD=new Uint8Array(16);{const BB=cB(bD);bD[0]=0,BB.setUint16(1,45069,!1),BB.setUint16(3,1,!1),bD[5]=193,bD[6]=0,bD[7]=0,BB.setUint16(8,1,!1),BB.setUint16(10,61440,!1),BB.setUint32(12,TD(bD.subarray(0,12)),!1)}const CD=new Uint8Array(0);class HD{constructor(BB,OB,GB,YB){let DB=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,QB=arguments.length>5?arguments[5]:void 0,oB=arguments.length>6?arguments[6]:void 0;if(this.data=BB,this.type=OB,this.timestamp=GB,this.duration=YB,this.sequenceNumber=DB,BB===CD&&void 0===QB)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===QB&&(QB=BB.byteLength),!(BB instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==OB&&"delta"!==OB)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(GB))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(YB)||YB<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(DB))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(QB)||QB<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==oB&&("object"!==typeof oB||!oB))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==oB?.alpha&&!(oB.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==oB?.alphaByteLength&&(!Number.isInteger(oB.alphaByteLength)||oB.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=QB,this.sideData=oB??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===CD}get microsecondTimestamp(){return Math.trunc(YO*this.timestamp)}get microsecondDuration(){return Math.trunc(YO*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:BB,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(BB,OB){if(!(BB instanceof EncodedVideoChunk||BB instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const GB=new Uint8Array(BB.byteLength);return BB.copyTo(GB),new HD(GB,BB.type,BB.timestamp/1e6,(BB.duration??0)/1e6,void 0,void 0,OB)}clone(BB){if(void 0!==BB&&("object"!==typeof BB||null===BB))throw new TypeError("options, when provided, must be an object.");if(void 0!==BB?.data&&!(BB.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==BB?.type&&"key"!==BB.type&&"delta"!==BB.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==BB?.timestamp&&!Number.isFinite(BB.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==BB?.duration&&!Number.isFinite(BB.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==BB?.sequenceNumber&&!Number.isFinite(BB.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==BB?.sideData&&("object"!==typeof BB.sideData||null===BB.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new HD(BB?.data??this.data,BB?.type??this.type,BB?.timestamp??this.timestamp,BB?.duration??this.duration,BB?.sequenceNumber??this.sequenceNumber,this.byteLength,BB?.sideData??this.sideData)}}var vD;!function(BB){BB[BB.PCM=1]="PCM",BB[BB.IEEE_FLOAT=3]="IEEE_FLOAT",BB[BB.ALAW=6]="ALAW",BB[BB.MULAW=7]="MULAW",BB[BB.EXTENSIBLE=65534]="EXTENSIBLE"}(vD||(vD={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let sD=-1/0,xD=-1/0,tD=null;"undefined"!==typeof FinalizationRegistry&&(tD=new FinalizationRegistry((BB=>{const OB=performance.now();"video"===BB.type?(OB-sD>=1e3&&(SO._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),sD=OB),"undefined"!==typeof VideoFrame&&BB.data instanceof VideoFrame&&BB.data.close()):(OB-xD>=1e3&&(SO._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),xD=OB),"undefined"!==typeof AudioData&&BB.data instanceof AudioData&&BB.data.close())})));const BQ=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(BQ);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class OQ{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(BB){}close(){if(this._closingPromise)return;const BB=this._connectedTrack;if(!BB)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===BB.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==BB.output.state&&"finalized"!==BB.output.state&&BB.output._muxer.onTrackClose(BB)})()}async _flushOrWaitForOngoingClose(BB){return this._closingPromise??=(async()=>{await this._flushAndClose(BB),this._closed=!0})()}}class GQ extends OQ{constructor(BB){if(super(),!JG.includes(BB))throw new TypeError(`Invalid video codec \'${BB}\'. Must be one of: ${JG.join(", ")}.`);this._codec=BB}}const YQ=(BB,OB)=>{if(BB.metadata.hasOnlyKeyPackets&&"key"!==OB.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class DQ extends GQ{constructor(BB){super(BB)}add(BB,OB){if(!(BB instanceof HD))throw new TypeError("packet must be an EncodedPacket.");if(BB.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==OB&&(!OB||"object"!==typeof OB))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),YQ(this._connectedTrack,BB),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,BB,OB)}}class QQ extends OQ{constructor(BB){if(super(),!zG.includes(BB))throw new TypeError(`Invalid audio codec \'${BB}\'. Must be one of: ${zG.join(", ")}.`);this._codec=BB}}class oQ extends OQ{constructor(BB){if(super(),!lG.includes(BB))throw new TypeError(`Invalid subtitle codec \'${BB}\'. Must be one of: ${lG.join(", ")}.`);this._codec=BB}}class jQ{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((BB=>JG.includes(BB)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((BB=>zG.includes(BB)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((BB=>lG.includes(BB)))}_codecUnsupportedHint(BB){return""}_isFragmentedIsobmff(){return!1}}class yQ extends jQ{constructor(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!BB||"object"!==typeof BB)throw new TypeError("options must be an object.");if(void 0!==BB.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(BB.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==BB.minimumFragmentDuration&&(!jO(BB.minimumFragmentDuration)||BB.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==BB.onFtyp&&"function"!==typeof BB.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==BB.onMoov&&"function"!==typeof BB.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==BB.onMdat&&"function"!==typeof BB.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==BB.onMoof&&"function"!==typeof BB.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==BB.metadataFormat&&!["mdir","mdta","udta","auto"].includes(BB.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=BB}getSupportedTrackCounts(){const BB=2**32-1;return{video:{min:0,max:BB},audio:{min:0,max:BB},subtitle:{min:0,max:BB},total:{min:0,max:BB}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(BB){return new cD(BB,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class JQ extends yQ{constructor(BB){super(BB)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...JG,...PG,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...lG]}_codecUnsupportedHint(BB){return(new PQ).getSupportedCodecs().includes(BB)?" Switching to MOV will grant support for this codec.":""}}class MQ extends yQ{constructor(BB){super(BB)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...JG,...PG,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...lG]}}class PQ extends yQ{constructor(BB){super(BB)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...JG,...zG]}_codecUnsupportedHint(BB){return(new JQ).getSupportedCodecs().includes(BB)?" Switching to MP4 will grant support for this codec.":""}}const zQ=["video","audio","subtitle"];class lQ{constructor(BB,OB,GB,YB,DB){this.id=BB,this.output=OB,this.type=GB,this.source=YB,this.metadata=DB}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(BB){if(!(BB instanceof lQ))throw new TypeError("other must be an OutputTrack.");if(this===BB)return!1;const OB=JO(this.metadata.group),GB=JO(BB.metadata.group);for(const YB of OB){if(this.type!==BB.type&&GB.some((BB=>YB===BB)))return!0;if(GB.some((BB=>YB._pairedGroups.has(BB))))return!0}return!1}}class pQ extends lQ{constructor(BB,OB,GB,YB){super(BB,OB,"video",GB,YB)}}class qQ extends lQ{constructor(BB,OB,GB,YB){super(BB,OB,"audio",GB,YB)}}class ZQ extends lQ{constructor(BB,OB,GB,YB){super(BB,OB,"subtitle",GB,YB)}}class NQ{constructor(){this._pairedGroups=new Set}pairWith(BB){if(!(BB instanceof NQ))throw new TypeError("other must be an OutputTrackGroup.");if(this===BB)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(BB),BB._pairedGroups.add(this)}}const RQ=BB=>{if(!BB||"object"!==typeof BB)throw new TypeError("metadata must be an object.");if(void 0!==BB.languageCode&&(OB=BB.languageCode,!GO.test(OB)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var OB;if(void 0!==BB.name&&"string"!==typeof BB.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==BB.disposition&&(BB=>{if(!BB||"object"!==typeof BB)throw new TypeError("disposition must be an object.");if(void 0!==BB.default&&"boolean"!==typeof BB.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==BB.primary&&"boolean"!==typeof BB.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==BB.forced&&"boolean"!==typeof BB.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==BB.original&&"boolean"!==typeof BB.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==BB.commentary&&"boolean"!==typeof BB.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==BB.hearingImpaired&&"boolean"!==typeof BB.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==BB.visuallyImpaired&&"boolean"!==typeof BB.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(BB.disposition),void 0!==BB.maximumPacketCount&&(!Number.isInteger(BB.maximumPacketCount)||BB.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==BB.bitrate&&(!Number.isFinite(BB.bitrate)||BB.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==BB.averageBitrate&&(!Number.isFinite(BB.averageBitrate)||BB.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==BB.group&&!(BB.group instanceof NQ)&&(!Array.isArray(BB.group)||BB.group.some((BB=>!(BB instanceof NQ)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class WQ extends MO{get target(){const BB="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(BB);const OB=this._getRootTarget();if(QO(OB))throw new TypeError(BB);return OB}constructor(BB){if(super(),this.state="pending",this.defaultTrackGroup=new NQ,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new vB,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!BB||"object"!==typeof BB)throw new TypeError("options must be an object.");if(!(BB.format instanceof jQ))throw new TypeError("options.format must be an OutputFormat.");if(!(BB.target instanceof KD||BB.target instanceof LD))throw new TypeError("options.target must be a Target or a PathedTarget.");if(BB.target instanceof KD&&this._rememberTarget(BB.target),void 0!==BB.initTarget&&!(BB.initTarget instanceof KD)&&"function"!==typeof BB.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==BB.onFinalize&&"function"!==typeof BB.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=BB.format,this.dP=BB.target,this._onFinalize=BB.onFinalize??null,this._initTarget=BB.initTarget??null,this._initTarget instanceof KD&&this._rememberTarget(this._initTarget),this._muxer=BB.format._createMuxer(this)}_getTargetValidated(BB){uB(this.dP instanceof LD);const OB=this.dP.getTarget(BB),GB=BB=>{if(!(BB instanceof KD))throw new TypeError("getTarget must return a Target.");return BB};return QO(OB)?OB.then(GB):GB(OB)}async _getTarget(BB){uB(this.dP instanceof LD);const OB=await this._getTargetValidated(BB);return this._emit("target",{target:OB,request:BB,isRoot:BB.isRoot}),"canceled"===this.state?await OB._close():this._rememberTarget(OB),OB}_rememberTarget(BB){this._unfinalizedTargets.add(BB),BB.on("finalized",(()=>this._unfinalizedTargets.delete(BB)),{once:!0})}async _getInitTarget(){if(uB(null!==this._initTarget),this._initTarget instanceof KD)return this._initTarget;const BB=await this._initTarget();return"canceled"===this.state?await BB._close():this._rememberTarget(BB),BB}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.dP instanceof KD)return this._emit("target",{target:this.dP,request:null,isRoot:!0}),this._rootTarget=this.dP,this.dP;const BB={path:this.dP.rootPath,isRoot:!0,mimeType:this.format.mimeType},OB=this._getTargetValidated(BB),GB=OB=>("canceled"===this.state?OB._close():this._rememberTarget(OB),this._emit("target",{target:OB,request:BB,isRoot:!0}),this._rootTarget=OB,OB);return QO(OB)?this._rootTargetPromise=OB.then(GB):GB(OB)}_getRootWriter(BB){return this._rootWriterPromise??=(async()=>{const OB=await this._getRootTarget(),GB=new dD(OB,"boolean"===typeof BB?BB:BB(OB));return GB.start(),GB})()}addVideoTrack(BB){let OB=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(BB instanceof GQ))throw new TypeError("source must be a VideoSource.");if(RQ(OB),void 0!==OB.rotation&&![0,90,180,270].includes(OB.rotation))throw new TypeError(`Invalid video rotation: ${OB.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==OB.flip&&"boolean"!==typeof OB.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==OB.transformationMatrix&&(!Array.isArray(OB.transformationMatrix)||9!==OB.transformationMatrix.length||!OB.transformationMatrix.every((BB=>Number.isFinite(BB)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==OB.frameRate&&(!Number.isFinite(OB.frameRate)||OB.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${OB.frameRate}. Must be a positive number.`);if(void 0!==OB.hasOnlyKeyPackets&&"boolean"!==typeof OB.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==OB.canBeTransparent&&"boolean"!==typeof OB.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==OB.decoderConfig&&kG({decoderConfig:OB.decoderConfig},BB._codec),void 0!==OB.primingPacket){if(!(OB.primingPacket instanceof HD))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===OB.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const GB={...OB};return GB.group??=this.defaultTrackGroup,this._addTrack(new pQ(this.tracks.length+1,this,BB,GB))}addAudioTrack(BB){let OB=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(BB instanceof QQ))throw new TypeError("source must be an AudioSource.");if(RQ(OB),void 0!==OB.decoderConfig&&KG({decoderConfig:OB.decoderConfig},BB._codec),void 0!==OB.primingPacket){if(!(OB.primingPacket instanceof HD))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===OB.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const GB={...OB};return GB.group??=this.defaultTrackGroup,this._addTrack(new qQ(this.tracks.length+1,this,BB,GB))}addSubtitleTrack(BB){let OB=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(BB instanceof oQ))throw new TypeError("source must be a SubtitleSource.");RQ(OB);const GB={...OB};return GB.group??=this.defaultTrackGroup,this._addTrack(new ZQ(this.tracks.length+1,this,BB,GB))}setMetadataTags(BB){if((BB=>{if(!BB||"object"!==typeof BB)throw new TypeError("tags must be an object.");if(void 0!==BB.title&&"string"!==typeof BB.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==BB.description&&"string"!==typeof BB.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==BB.artist&&"string"!==typeof BB.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==BB.album&&"string"!==typeof BB.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==BB.albumArtist&&"string"!==typeof BB.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==BB.trackNumber&&(!Number.isInteger(BB.trackNumber)||BB.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==BB.tracksTotal&&(!Number.isInteger(BB.tracksTotal)||BB.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==BB.discNumber&&(!Number.isInteger(BB.discNumber)||BB.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==BB.discsTotal&&(!Number.isInteger(BB.discsTotal)||BB.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==BB.genre&&"string"!==typeof BB.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==BB.date&&(!(BB.date instanceof Date)||Number.isNaN(BB.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==BB.beatsPerMinute&&(!Number.isInteger(BB.beatsPerMinute)||BB.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==BB.lyrics&&"string"!==typeof BB.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==BB.images){if(!Array.isArray(BB.images))throw new TypeError("tags.images, when provided, must be an array.");for(const OB of BB.images){if(!OB||"object"!==typeof OB)throw new TypeError("Each image in tags.images must be an object.");if(!(OB.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof OB.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(OB.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==BB.comment&&"string"!==typeof BB.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==BB.raw){if(!BB.raw||"object"!==typeof BB.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const OB of Object.values(BB.raw))if(null!==OB&&"string"!==typeof OB&&(!Array.isArray(OB)||!OB.every((BB=>"string"===typeof BB)))&&!(OB instanceof Uint8Array)&&!(OB instanceof zO)&&!(OB instanceof lO)&&!PO(OB))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(BB),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=BB}_addTrack(BB){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(BB.source._connectedTrack)throw new Error("Source is already used for a track.");const OB=this.format.getSupportedTrackCounts(),GB=this.tracks.reduce(((OB,GB)=>OB+(GB.type===BB.type?1:0)),0),YB=OB[BB.type].max;if(GB===YB)throw new Error(0===YB?`${this.format._name} does not support ${BB.type} tracks.`:`${this.format._name} does not support more than ${YB} ${BB.type} track`+(1===YB?"":"s")+".");const DB=OB.total.max;if(this.tracks.length===DB)throw new Error(`${this.format._name} does not support more than ${DB} tracks`+(1===DB?"":"s")+" in total.");if(BB.isVideoTrack()){const OB=this.format.getSupportedVideoCodecs();if(0===OB.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(BB.source._codec));if(!OB.includes(BB.source._codec))throw new Error(`Codec \'${BB.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${OB.map((BB=>`\'${BB}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(BB.source._codec))}else if(BB.isAudioTrack()){const OB=this.format.getSupportedAudioCodecs();if(0===OB.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(BB.source._codec));if(!OB.includes(BB.source._codec))throw new Error(`Codec \'${BB.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${OB.map((BB=>`\'${BB}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(BB.source._codec))}else if(BB.isSubtitleTrack()){const OB=this.format.getSupportedSubtitleCodecs();if(0===OB.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(BB.source._codec));if(!OB.includes(BB.source._codec))throw new Error(`Codec \'${BB.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${OB.map((BB=>`\'${BB}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(BB.source._codec))}return this.tracks.push(BB),BB.source._connectedTrack=BB,BB}hasEnoughTracks(){const BB=this.format.getSupportedTrackCounts();for(const GB of zQ){if(this.tracks.reduce(((BB,OB)=>BB+(OB.type===GB?1:0)),0)<BB[GB].min)return!1}const OB=BB.total.min;return!(this.tracks.length<OB)}async start(){const BB=this.format.getSupportedTrackCounts();for(const GB of zQ){const OB=this.tracks.reduce(((BB,OB)=>BB+(OB.type===GB?1:0)),0),YB=BB[GB].min;if(OB<YB)throw new Error(YB===BB[GB].max?`${this.format._name} requires exactly ${YB} ${GB} track${1===YB?"":"s"}.`:`${this.format._name} requires at least ${YB} ${GB} track${1===YB?"":"s"}.`)}const OB=BB.total.min;if(this.tracks.length<OB)throw new Error(OB===BB.total.max?`${this.format._name} requires exactly ${OB} track`+(1===OB?"":"s")+".":`${this.format._name} requires at least ${OB} track`+(1===OB?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(SO._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const BB=this._mutex.acquire();try{await this._muxer.start();const BB=this.tracks.map((BB=>BB.source._start()));await Promise.all(BB)}finally{(await BB)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const BB=await this._mutex.acquire();try{const BB=this.tracks.map((BB=>BB.source._flushOrWaitForOngoingClose(!0)));await Promise.all(BB),await Promise.all([...this._unfinalizedTargets].map((BB=>BB._close()))),this._unfinalizedTargets.clear()}finally{BB()}})():void("finalized"===this.state&&SO._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(SO._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const BB=await this._mutex.acquire();try{const BB=this.tracks.map((BB=>BB.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(BB),await this._muxer.finalize(),this._rootWriterPromise){const BB=await this._rootWriterPromise;BB.finalized||(await BB.flush(),await BB.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(OB){throw this.state="canceled",OB}finally{await Promise.all([...this._unfinalizedTargets].map((BB=>BB._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),BB()}})()}}class AQ{constructor(BB,OB,GB,YB,DB){this.frameDurationS=GB,this.onFragment=DB,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=OB,this.lastTimestampUs=OB;const QB=BB=>{this.boxes.push(BB)};this.output=new WQ({format:new JQ({fastStart:"fragmented",minimumFragmentDuration:YB,onFtyp:QB,onMoov:QB,onMoof:QB,onMdat:BB=>{QB(BB),this.fragmentDone()}}),target:new FD}),this.source=new DQ(BB),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(BB,OB){const GB=new Uint8Array(BB.byteLength);BB.copyTo(GB),this.addData(GB,BB.type,BB.timestamp,OB)}addData(BB,OB,GB,YB){const DB=new HD(BB,OB,(GB-this.firstTimestampUs)/1e6,this.frameDurationS),QB=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,GB),this.pending=this.pending.then((()=>(this.addingTimestampUs=GB,this.source.add(DB,QB?{decoderConfig:YB}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var BB;const OB=VQ(this.boxes);this.boxes=[],this.onFragment({bytes:OB,endUs:null!==(BB=this.addingTimestampUs)&&void 0!==BB?BB:this.lastTimestampUs+1e6*this.frameDurationS})}}function VQ(BB){const OB=new Uint8Array(BB.reduce(((BB,OB)=>BB+OB.byteLength),0));let GB=0;for(const YB of BB)OB.set(YB,GB),GB+=YB.byteLength;return OB}class SQ{constructor(BB,OB,GB,YB){this.plan=BB,this.emit=GB,this.onSlotsLow=YB,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=OB}get partCount(){return this.nextIndex}addFragment(BB){let{bytes:OB,endUs:GB}=BB;this.pendingBytes>0&&this.pendingBytes+OB.byteLength>this.plan.maxBytes&&this.emitPending();let YB=0;for(;OB.byteLength-YB>this.plan.maxBytes-this.pendingBytes;){const BB=this.plan.maxBytes-this.pendingBytes;this.hold(OB.subarray(YB,YB+BB)),YB+=BB,this.emitPending()}this.hold(OB.subarray(YB)),this.completeUntilUs=GB,GB-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(BB){this.pending.push(BB),this.pendingBytes+=BB.byteLength}emitPending(){var BB;const OB=VQ(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(BB=this.completeUntilUs)&&void 0!==BB?BB:this.partStartUs,this.emit({index:this.nextIndex++,bytes:OB,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class nQ{constructor(BB,OB,GB,YB){let DB=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,QB=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=BB,this.partPlan=OB,this.post=GB,this.onSegmentEncoded=YB,this.journal=DB,this.onMuxFailed=QB,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(BB){const OB=KB()-BB;(OB<this.epochOffsetMs||OB-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=OB)}recordingMs(BB){return BB/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(BB){const OB=null===this.segment?0:(BB-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||OB>=this.segmentDurationMs))&&(this.pendingCutUs=BB);const GB=this.keyFrameMissed||this.pendingCutUs===BB;return this.cutRequested=!1,this.keyFrameMissed=!1,GB}onChunk(BB,OB,GB){if(null!==OB&&void 0!==OB&&OB.decoderConfig&&(this.decoderConfig=OB.decoderConfig),null!==this.pendingCutUs&&BB.timestamp>=this.pendingCutUs){if("key"!==BB.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(BB.timestamp,GB),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const YB=this.segment;if(null===YB.journalHeader)return YB.mp4.add(BB,this.decoderConfig),BB.byteLength;const DB=new Uint8Array(BB.byteLength);return BB.copyTo(DB),YB.mp4.addData(DB,BB.type,BB.timestamp,this.decoderConfig),YB.chunkTimestampsUs.push(BB.timestamp),YB.unjournaled.push({recordingId:YB.journalHeader.recordingId,segmentId:YB.journalId,index:YB.chunkCount++,timestampUs:BB.timestamp,key:"key"===BB.type,data:DB}),performance.now()-YB.lastJournalMs>=250&&this.journalChunks(YB),BB.byteLength}openSegment(BB,OB){const GB=this.nextJournalId++,YB=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:GB,containerCodec:OB.containerCodec,codec:OB.codec,width:OB.width,height:OB.height,fps:OB.fps,decoderConfig:this.decoderConfig,firstTimestampUs:BB,epochOffsetMs:this.epochOffsetMs}:null,DB=[],QB=new SQ(this.partPlan,BB,(QB=>{this.postPart(GB,OB,BB,QB,null===YB?null:DB)}),(()=>{var BB;(null===(BB=this.segment)||void 0===BB?void 0:BB.journalId)===GB&&this.requestCut()})),oB=this.partPlan.keyframeIntervalMs/1e3*.9,jB=new AQ(OB.containerCodec,BB,1/OB.fps,oB,(BB=>{QB.addFragment(BB)}));return this.post({type:"videoSegmentOpened",journalId:GB}),{mp4:jB,parts:QB,format:OB,journalId:GB,journalHeader:YB,unjournaled:[],chunkTimestampsUs:DB,chunkCount:0,lastJournalMs:performance.now()}}postPart(BB,OB,GB,YB,DB){const{width:QB,height:oB,codec:jB,fps:yB}=OB,{startMs:JB}=function(BB,OB,GB,YB){const DB=BB/1e3+GB;return{startMs:DB,endMs:DB+OB/1e3+1e3/YB}}(GB,0,this.epochOffsetMs,yB),{completeUntilUs:MB}=YB,PB=null===MB?JB:this.recordingMs(MB),zB=YB.bytes.buffer,lB=null===DB||null===MB?null:function(BB,OB){let GB=0,YB=BB.length;for(;GB<YB;){const DB=GB+YB>>1;BB[DB]<OB?GB=DB+1:YB=DB}return GB}(DB,MB);this.post({type:"videoPart",journalId:BB,index:YB.index,bytes:zB,meta:{startMs:JB,endMs:PB,width:QB,height:oB,codec:jB},completeUntilUs:MB,completeUntilIndex:lB},[zB])}journalChunks(BB){const OB=BB.journalHeader;null!==this.journal&&null!==OB&&0!==BB.unjournaled.length&&(OB.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...OB},BB.unjournaled),BB.unjournaled=[],BB.lastJournalMs=performance.now())}closeSegment(BB){const OB=this.segment;this.segment=null,this.pendingCutUs=null,null!==OB&&(BB&&this.onSegmentEncoded(),this.journalChunks(OB),this.finishing=this.finishing.then((async()=>{let BB=null;try{await OB.mp4.finish()}catch(GB){BB=GB}OB.parts.finish(),this.post({type:"videoSegmentClosed",journalId:OB.journalId,parts:OB.parts.partCount}),null!==BB&&(console.error("Failed to finish a session replay video segment.",BB),this.onMuxFailed(BB instanceof Error?BB.message:String(BB)))})).catch((BB=>{console.error("Failed to close a session replay video segment.",BB)})))}whenFinished(){return this.finishing}}function UQ(BB,OB){return null!==BB&&OB>=BB}class fQ{constructor(BB,OB,GB,YB,DB){let QB=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=BB,this.cssSize=GB,this.post=YB,this.encoderPreference=DB,this.quality=new PB,this.limiter=void 0,this.segmenter=void 0,this.scaler=new VB,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.capturePaused=!1,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new ZB(BB.maxFps),this.captureFps=BB.maxFps,this.segmenter=new nQ(BB.segmentDurationMs,OB,YB,(()=>{this.encoderFailures=0}),QB,(BB=>{this.stopVideo(`Muxer failed: ${BB}`)})),this.still=new fB(YB),this.stats=this.emptyStats()}handleFrame(BB,OB,GB){const YB=performance.now();try{this.stats.deliveredFrames++;const DB=BB.timestamp/1e3;if(this.segmenter.noteFrameArrival(DB),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(DB))return void this.stats.droppedForFpsCap++;if(this.still.offer(BB,this.segmenter.recordingMs(BB.timestamp)),null===GB)return void(this.capturePaused||(this.capturePaused=!0,this.flushSegment()));if(this.capturePaused=!1,this.noteBackingSize(OB),this.noteCaptureFps(GB,YB),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(UQ(this.rebuildDueMs,YB)||UQ(this.fpsRebuildDueMs,YB))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,BB)}finally{BB.close();const OB=performance.now()-YB;this.stats.workerBusyMs+=OB,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,OB),this.maybePostStats(YB)}}resize(BB){0!==BB.width&&0!==BB.height&&(this.cssSize=BB,this.scheduleRebuildIfSizeChanged())}updateHealth(BB,OB){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const GB=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:BB,pingMs:OB});this.backpressureDropsSinceHealth=0,GB&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(BB){return this.hidden=BB,BB?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(BB){this.suspended=!0;const OB=this.operations.then(BB).catch((BB=>{console.error("Session replay encoder operation failed.",BB)})).finally((()=>{this.operations===OB&&(this.suspended=!1)}));return this.operations=OB,OB}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var BB;null===(BB=this.active)||void 0===BB||BB.encoder.close(),this.active=null}async drainAndCloseSegment(){const BB=this.active;null===BB||await async function(BB,OB){let GB;const YB=new Promise((BB=>{GB=setTimeout((()=>{BB(!1)}),OB)}));try{return await Promise.race([BB.then((()=>!0)),YB])}finally{clearTimeout(GB)}}(BB.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(BB,"flush timed out")}encode(BB,OB){const GB=this.segmenter.needsKeyFrame(OB.timestamp)||OB.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;GB&&(this.lastKeyframeUs=OB.timestamp);const YB=this.scaleToEncoder(BB,OB);try{BB.encoder.encode(YB,{keyFrame:GB})}catch(DB){return void(DB instanceof DOMException&&("InvalidStateError"===DB.name||"EncodingError"===DB.name)?this.failEncoder(BB,DB.message):++this.refusedFrames>=30?this.failEncoder(BB,`refused 30 frames in a row: ${String(DB)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",DB))}finally{YB!==OB&&YB.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(BB,OB){let GB=OB;if(!this.scalerFailed)try{GB=this.scaler.scale(OB,BB.size)}catch(YB){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",YB)}return GB.displayWidth===BB.size.width&&GB.displayHeight===BB.size.height||(BB.sentMismatchedFrame=!0),GB}onEncoderOutput(BB,OB,GB){const YB=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(BB,OB,{containerCodec:GB.candidate.containerCodec,codec:GB.candidate.config.codec,width:GB.size.width,height:GB.size.height,fps:GB.fps}),this.stats.workerBusyMs+=performance.now()-YB}noteBackingSize(BB){null!==this.backingSize&&zB(this.backingSize,BB)||(this.backingSize=BB,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(BB,OB){this.captureFps=BB,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=OB+2e3:this.fpsRebuildDueMs=null}targetSize(){var BB;const OB=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(BB,OB,GB){const YB=OB.width*OB.height<BB.width*BB.height?OB:BB;let DB=lB(Math.max(YB.width,64)),QB=lB(Math.max(YB.height,64));if(pB({width:DB,height:QB})>GB){const BB=DB,OB=QB;for(DB=lB(DB*Math.sqrt(16*GB*16/(DB*QB))),QB=lB(DB*OB/BB);pB({width:DB,height:QB})>GB;)DB-=2,QB=lB(DB*OB/BB)}return{width:DB,height:QB}}(this.cssSize,null!==(BB=this.backingSize)&&void 0!==BB?BB:this.cssSize,OB)}scheduleRebuildIfSizeChanged(){null===this.active||zB(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const BB=this.quality.getLevel(),OB=this.encodeFps(),GB=this.targetSize(),YB=function(BB){const OB={width:BB.width,height:BB.height,bitrate:BB.bitrate,framerate:BB.maxFps},GB=[],YB=[BB.preferSoftware?"prefer-software":"prefer-hardware","no-preference"],DB=BB.preferQualityLatency?AB:WB;for(const QB of YB)for(const BB of NB)for(const YB of RB)for(const oB of DB)GB.push({config:{...OB,codec:BB,hardwareAcceleration:QB,bitrateMode:YB,latencyMode:oB,avc:{format:"avc"}},containerCodec:"avc"});return GB.push({config:{...OB,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),GB}({...GB,bitrate:Math.round(qB(this.config,GB,BB.areaScale)*OB/this.config.maxFps),maxFps:OB,...this.encoderPreference});let DB=null,QB=0;for(let JB=this.firstViableCandidate;JB<YB.length&&null===DB;JB++){const BB=await VideoEncoder.isConfigSupported(YB[JB].config).catch((BB=>(console.warn("VideoEncoder.isConfigSupported threw.",YB[JB].config,BB),null)));null!==BB&&void 0!==BB&&BB.supported&&(DB=YB[JB],QB=JB,this.firstViableCandidate=JB)}if(null===DB)return void this.markUnavailable(`No supported encoder config at ${GB.width}x${GB.height}`);const oB=new VideoEncoder({output:(BB,OB)=>{this.onEncoderOutput(BB,OB,jB)},error:BB=>{this.failEncoder(jB,BB.message)}}),jB={encoder:oB,candidates:YB,candidateIndex:QB,candidate:DB,size:GB,fps:OB,sentMismatchedFrame:!1};this.active=jB,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{oB.configure(DB.config)}catch(yB){return void this.failEncoder(jB,yB instanceof Error?yB.message:String(yB))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(BB,OB){console.error("Session replay encoder failed.",BB.candidate.config,OB),this.active===BB&&(this.active=null,"closed"!==BB.encoder.state&&BB.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(BB,OB,GB){var YB;let DB=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const QB=null===(YB=BB[OB])||void 0===YB?void 0:YB.config.hardwareAcceleration;if(!("prefer-hardware"===QB&&GB||"no-preference"!==QB&&DB))return OB+1;for(let oB=OB+1;oB<BB.length;oB++)if(BB[oB].config.hardwareAcceleration!==QB)return oB;return BB.length}(BB.candidates,BB.candidateIndex,BB.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${OB}`))}stopVideo(BB){if(this.unavailable)return;const OB=this.active;this.active=null,null!==OB&&"closed"!==OB.encoder.state&&OB.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(BB)}markUnavailable(BB){console.warn(`Session replay video stopped: ${BB}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:BB})}))}maybePostStats(BB){var OB,GB,YB,DB;const QB=BB-this.statsWindowStartMs;if(QB<5e3)return;const oB=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:QB,qualityLevel:this.quality.getLevelIndex(),codec:null!==(OB=null===oB||void 0===oB?void 0:oB.candidate.config.codec)&&void 0!==OB?OB:null,hardwareAcceleration:null!==(GB=null===oB||void 0===oB?void 0:oB.candidate.config.hardwareAcceleration)&&void 0!==GB?GB:null,encodeWidth:null!==(YB=null===oB||void 0===oB?void 0:oB.size.width)&&void 0!==YB?YB:0,encodeHeight:null!==(DB=null===oB||void 0===oB?void 0:oB.size.height)&&void 0!==DB?DB:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=BB}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let kQ=null,dQ=0;function KQ(BB){let OB=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(BB,{transfer:OB})}self.onmessage=BB=>{const OB=BB.data;switch(OB.type){case"init":kQ=new fQ(OB.videoConfig,OB.partPlan,OB.cssSize,KQ,OB.encoderPreference,OB.journalRecordingId&&JB.supported?{recordingId:OB.journalRecordingId,journal:new JB}:null);break;case"frame":if(null===kQ){console.warn("Session replay video worker got a frame before its pipeline started"),OB.image.close();break}!function(BB,OB,GB,YB,DB){if(OB instanceof VideoFrame)return void BB.handleFrame(OB,YB,DB);let QB;try{QB=new VideoFrame(OB,{timestamp:GB})}catch(oB){return 0===dQ++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",oB),void(30===dQ&&BB.stopVideo(`Bitmap frames keep failing: ${oB instanceof Error?oB.message:String(oB)}`))}finally{OB.close()}dQ=0,BB.handleFrame(QB,YB,DB)}(kQ,OB.image,OB.timestampUs,OB.KB,OB.captureFps);break;case"resize":kQ.resize(OB.cssSize);break;case"health":kQ.updateHealth(OB.gameFps,OB.pingMs);break;case"hidden":kQ.setHidden(OB.hidden);break;case"flush":kQ.flushSegment();break;case"cut":kQ.cutAtNextFrame();break;case"gameJoined":kQ.gameJoined()}}})();', "Worker", void 0, GB.p + "sessionReplayVideo.worker.b6cc7875.worker.js")
    }

    function JO(BB) {
      return Math.max(2, 2 * Math.floor(BB / 2))
    }

    function MO(BB) {
      return Math.ceil(BB.width / 16) * Math.ceil(BB.height / 16)
    }
    class PO {
      constructor(BB) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / BB
      }
      setMaxFps(BB) {
        this.intervalMs = 1e3 / BB
      }
      shouldKeep(BB) {
        return !(BB < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = BB - this.nextDueMs > this.intervalMs ? BB + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class zO {
      constructor(BB, OB, GB) {
        this.budgetMsPerSecond = BB, this.minFps = OB, this.smoothedCostMs = GB
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      get paused() {
        return this.affordableFps() < this.minFps
      }
      record(BB) {
        const OB = this.paused ? .5 : .05;
        this.smoothedCostMs += (BB - this.smoothedCostMs) * OB
      }
      maxFps(BB) {
        return this.paused ? .1 : Math.min(BB, this.affordableFps())
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class lO {
      static isSupported() {
        const BB = globalThis.CanvasCaptureMediaStream;
        return ("undefined" !== typeof CanvasCaptureMediaStreamTrack && "requestFrame" in CanvasCaptureMediaStreamTrack.prototype || void 0 !== BB && "requestFrame" in BB.prototype) && "function" === typeof HTMLCanvasElement.prototype.captureStream && "requestVideoFrameCallback" in HTMLVideoElement.prototype
      }
      constructor(BB, OB, GB) {
        this.onFrame = OB, this.stream = void 0, this.requester = void 0, this.video = document.createElement("video"), this.closed = !1, this.onVideoFrame = () => {
          this.closed || (this.onFrame(this.video), this.video.requestVideoFrameCallback(this.onVideoFrame))
        }, this.stream = BB.captureStream(0);
        const YB = this.stream.getVideoTracks()[0];
        this.requester = "requestFrame" in YB ? YB : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(GB), this.video.requestVideoFrameCallback(this.onVideoFrame)
      }
      request() {
        this.requester.requestFrame()
      }
      close() {
        this.closed = !0;
        for (const BB of this.stream.getTracks()) BB.stop();
        this.video.srcObject = null
      }
    }
    class pO {
      constructor(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = BB, this.grab = YB, this.onUnavailable = DB, this.render = null, this.stream = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.loggedPause = !1, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = GB.msPerSecond, this.frameCostFloorMs = GB.frameCostFloorMs, this.budget = new zO(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = OB, this.captureFps = this.budgetedFps(), this.frameLimiter = new PO(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps,
          grabPath: this.grab.path
        }
      }
      start(BB) {
        if (this.stop(), this.render = BB, "stream" === this.grab.path) {
          const OB = new lO(BB.canvas, (BB => {
            this.onStreamFrame(BB)
          }), (BB => {
            this.stream === OB && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${BB instanceof Error?BB.message:String(BB)}`))
          }));
          this.stream = OB
        }
      }
      stop() {
        var BB;
        this.render = null, this.pendingGrab = null, null === (BB = this.stream) || void 0 === BB || BB.close(), this.stream = null
      }
      setMaxFps(BB) {
        this.wantedFps = BB, this.applyFps()
      }
      onAfterRender() {
        const BB = performance.timeOrigin + performance.now(),
          OB = this.render;
        if (null === OB) return;
        const GB = performance.now();
        if (null !== this.pendingGrab) {
          if (GB - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas grab didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(BB)) return;
        const YB = {
          startMs: GB,
          timestampUs: Math.round(1e3 * BB),
          KB: {
            width: OB.canvas.width,
            height: OB.canvas.height
          },
          syncMs: 0,
          paused: this.isPaused()
        };
        null !== this.stream ? this.requestStreamFrame(this.stream, YB) : "bitmap" === this.grab.path ? this.grabBitmap(OB.canvas, YB) : this.grabVideoFrame(OB.canvas, YB)
      }
      requestStreamFrame(BB, OB) {
        this.pendingGrab = OB;
        try {
          BB.request()
        } catch (GB) {
          return this.pendingGrab = null, void this.grabFailed(GB)
        }
        OB.syncMs = performance.now() - OB.startMs
      }
      grabVideoFrame(BB, OB) {
        let GB;
        try {
          GB = new VideoFrame(BB, {
            timestamp: OB.timestampUs
          })
        } catch (YB) {
          return void this.grabFailed(YB)
        }
        this.deliver(GB, OB), this.recordCost(Math.max(2 * (performance.now() - OB.startMs), this.frameCostFloorMs))
      }
      grabBitmap(BB, OB) {
        const GB = this.grab.cssSize(),
          YB = function(BB, OB, GB) {
            const YB = OB.width * OB.height < BB.width * BB.height ? OB : BB;
            let DB = JO(Math.max(YB.width, 64)),
              QB = JO(Math.max(YB.height, 64));
            if (MO({
                width: DB,
                height: QB
              }) > GB) {
              const BB = DB,
                OB = QB;
              for (DB = JO(DB * Math.sqrt(16 * GB * 16 / (DB * QB))), QB = JO(DB * OB / BB); MO({
                  width: DB,
                  height: QB
                }) > GB;) DB -= 2, QB = JO(DB * OB / BB)
            }
            return {
              width: DB,
              height: QB
            }
          }(0 === GB.width ? OB.KB : GB, OB.KB, this.grab.maxMacroblocks);
        this.pendingGrab = OB, createImageBitmap(BB, {
          resizeWidth: YB.width,
          resizeHeight: YB.height,
          resizeQuality: "low"
        }).then((BB => {
          this.pendingGrab === OB ? (this.pendingGrab = null, this.deliverMeasured(BB, OB)) : BB.close()
        }), (BB => {
          this.pendingGrab === OB && (this.pendingGrab = null, this.grabFailed(BB))
        })), OB.syncMs = performance.now() - OB.startMs
      }
      onStreamFrame(BB) {
        const OB = this.pendingGrab;
        if (null === OB) return;
        this.pendingGrab = null;
        const GB = performance.now();
        let YB;
        try {
          YB = new VideoFrame(BB, {
            timestamp: OB.timestampUs
          })
        } catch (DB) {
          return void this.grabFailed(DB)
        }
        OB.syncMs += performance.now() - GB, this.deliverMeasured(YB, OB)
      }
      deliverMeasured(BB, OB) {
        const GB = performance.now();
        this.deliver(BB, OB), this.recordCost(Math.max(OB.syncMs + performance.now() - GB, this.frameCostFloorMs))
      }
      deliver(BB, OB) {
        const GB = {
          type: "frame",
          image: BB,
          timestampUs: OB.timestampUs,
          KB: OB.KB,
          captureFps: OB.paused ? null : this.captureFps
        };
        try {
          this.worker.postMessage(GB, [BB])
        } catch (YB) {
          return BB.close(), void this.grabFailed(YB)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(BB) {
        this.budget.record(BB), this.applyFps()
      }
      grabFailed(BB) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", BB);
        !(BB instanceof DOMException && "InvalidStateError" === BB.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${BB instanceof Error?BB.message:String(BB)}`))
      }
      applyFps() {
        const BB = this.budgetedFps();
        BB !== this.captureFps && (this.captureFps = BB, this.frameLimiter.setMaxFps(BB), this.isPaused() && !this.loggedPause && (this.loggedPause = !0, console.warn(`Session replay paused video: ${this.grab.path} grabs cost ${this.budget.averageCostMs.toFixed(1)} ms, over a budget of ${this.budgetMsPerSecond} ms/s at 5 fps.`)))
      }
      isPaused() {
        return this.budgetMsPerSecond > 0 && this.budget.paused
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var qO = GB(1299);
    class ZO {
      constructor(BB) {
        this.events = BB, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const BB = (0, qO.D)().gameRender();
        if (null === BB || BB.canvas === this.canvas) return BB;
        const OB = null !== this.canvas;
        return this.canvas = BB.canvas, this.observe(BB.canvas), OB ? this.events.onCanvasSwapped(BB) : this.events.onFirstCanvas(BB), BB
      }
      stop() {
        var BB, OB;
        null === (BB = this.resizeObserver) || void 0 === BB || BB.disconnect(), null === (OB = this.listeners) || void 0 === OB || OB.abort()
      }
      observe(BB) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: OB
        } = this.listeners;
        BB.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: OB
        }), BB.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: OB
        });
        const GB = BB.getBoundingClientRect();
        this.size = {
          width: Math.round(GB.width),
          height: Math.round(GB.height)
        }, this.resizeObserver = new ResizeObserver((BB => {
          const OB = BB[BB.length - 1].contentRect,
            GB = {
              width: Math.round(OB.width),
              height: Math.round(OB.height)
            };
          0 !== GB.width && 0 !== GB.height && (this.size = GB, this.events.onResized(GB))
        })), this.resizeObserver.observe(BB)
      }
    }
    const NO = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      RO = 12e4;
    class WO extends Error {
      constructor(BB, OB) {
        super(OB), this.reason = BB
      }
    }
    class AO {
      constructor(BB, OB, GB, YB, DB) {
        this.access = BB, this.uploadToken = OB, this.transport = GB, this.callbacks = YB, this.options = DB, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(BB) {
        return this.segments.has(BB)
      }
      open(BB, OB) {
        this.segments.set(BB, {
          journalId: BB,
          sequence: OB,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(BB, OB) {
        const GB = this.segments.get(BB);
        if (void 0 !== GB) {
          GB.parts.push(OB), GB.bytes += OB.bytes.byteLength, !GB.cut && null === GB.totalParts && GB.bytes > this.options.maxHeldBytes / 2 && (GB.cut = !0, this.callbacks.cut());
          for (const BB of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(BB, "byteCap"), this.downUntilMs = this.options.nowMs() + RO
          }
          this.pump()
        }
      }
      close(BB, OB) {
        const GB = this.segments.get(BB);
        void 0 !== GB && (GB.totalParts = OB, this.pump())
      }
      forget(BB) {
        this.segments.delete(BB)
      }
      releaseAll() {
        for (const BB of this.segments.values()) BB.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: BB.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let BB = 0;
        for (const OB of this.segments.values()) BB += OB.bytes;
        return BB
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let OB = this.nextWork(); null !== OB; OB = this.nextWork()) try {
            await this.advance(OB)
          } catch (BB) {
            console.warn(`Session replay part joiner failed on video segment ${OB.sequence}; uploading it straight to storage.`, BB), BB instanceof WO || (this.downUntilMs = this.options.nowMs() + RO), this.handBack(OB, BB instanceof WO ? BB.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const BB of this.segments.values())
          if (BB.sentParts < BB.parts.length || BB.totalParts === BB.parts.length) return BB;
        return null
      }
      async advance(BB) {
        if (BB.sentParts < BB.parts.length) return this.expectHeld(await this.sendPart(BB, BB.parts[BB.sentParts])), void BB.sentParts++;
        for (let OB = 0; this.owns(BB.journalId); OB++) {
          const GB = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: BB.sequence,
            parts: BB.parts.length
          })));
          if (!this.owns(BB.journalId)) return;
          if ("stored" === GB.outcome && GB.stored.parts === BB.parts.length) return this.segments.delete(BB.journalId), void this.callbacks.stored(BB.journalId, BB.sequence, GB.stored);
          if ("missing" !== GB.outcome || OB >= 2) throw this.failure(GB);
          for (const OB of GB.parts) {
            if (!this.owns(BB.journalId)) return;
            const GB = BB.parts[OB];
            if (void 0 === GB) throw new WO("missing", `the joiner asked for part ${OB} of ${BB.parts.length}`);
            this.expectHeld(await this.sendPart(BB, GB))
          }
        }
      }
      sendPart(BB, OB) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: BB.sequence,
          index: OB.index,
          meta: {
            ...OB.meta,
            startMs: Math.round(OB.meta.startMs),
            endMs: Math.round(OB.meta.endMs)
          },
          completeUntilUs: OB.completeUntilUs
        }, OB.bytes)))
      }
      expectHeld(BB) {
        if ("buffered" !== BB.outcome) throw this.failure(BB)
      }
      failure(BB) {
        if ("refused" === BB.outcome) {
          this.refused = !0;
          for (const BB of [...this.segments.values()]) this.handBack(BB, "refused");
          return new WO("refused", `refused: ${BB.reason}`)
        }
        const OB = "stored" === BB.outcome ? "shortStored" : "missing" === BB.outcome ? "missing" : "closed";
        return new WO(OB, `answered ${BB.outcome}`)
      }
      async request(BB) {
        for (let GB = 1;; GB++) {
          try {
            return await BB()
          } catch (OB) {
            if (GB >= 3) throw OB
          }
          await this.options.wait(1e3 * 2 ** (GB - 1))
        }
      }
      handBack(BB, OB) {
        this.segments.delete(BB.journalId) && (this.stats.handBacks[OB]++, this.callbacks.handBack(BB.journalId, BB.sequence, BB.parts, BB.totalParts))
      }
    }
    const VO = EB.e;
    class SO {
      constructor(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = BB, this.uploadToken = OB, this.nextTelemetrySequence = GB, this.queuedDomAfter = YB, this.nowMs = DB, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(BB, OB, GB, YB, DB) {
        const QB = this.segment(BB, OB, GB, YB);
        if (void 0 === DB) return void this.request(QB, 0);
        const oB = DB.then((() => {
          this.stopped || this.segments.get(UO(BB, OB)) !== QB || QB.requested || this.request(QB, 0), this.videoDue === oB && (this.videoDue = null)
        }));
        this.videoDue = oB
      }
      async takeDom(BB) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, BB);
        const OB = this.dom;
        if ((null === OB || void 0 === OB ? void 0 : OB.sequence) !== BB) return;
        this.dom = null;
        const GB = await OB.upload;
        return void 0 !== GB && nO(GB, this.nowMs()) ? GB.upload : void 0
      }
      async get(BB, OB, GB, YB, DB) {
        const QB = this.segment(BB, OB, GB, DB),
          oB = QB.requests.find((BB => YB >= BB.first && YB < BB.end));
        if (void 0 === this.valid(QB, YB) && void 0 !== oB) {
          const BB = await oB.answer.catch((() => null));
          if (null !== BB && "rejected" in BB) return BB
        }
        let jB = this.valid(QB, YB);
        if (void 0 === jB) {
          const BB = await this.request(QB, YB).answer;
          if ("rejected" in BB) return BB;
          jB = BB[0]
        }
        return jB
      }
      takeTelemetry(BB) {
        const OB = this.telemetry;
        if ((null === OB || void 0 === OB ? void 0 : OB.sequence) === BB) return this.telemetry = null, nO(OB.sJ, this.nowMs()) ? OB.sJ.target : void 0
      }
      peek(BB, OB, GB) {
        const YB = this.segments.get(UO(BB, OB));
        return void 0 === YB ? void 0 : this.valid(YB, GB)
      }
      expire(BB, OB, GB) {
        const YB = this.segments.get(UO(BB, OB)),
          DB = null === YB || void 0 === YB ? void 0 : YB.sJ.get(GB);
        if (void 0 !== YB && void 0 !== DB)
          for (const [QB, oB] of YB.sJ) oB.expiresAtMs <= DB.expiresAtMs && YB.sJ.delete(QB)
      }
      stop() {
        this.stopped = !0
      }
      forget(BB, OB) {
        this.segments.delete(UO(BB, OB))
      }
      segment(BB, OB, GB, YB) {
        const DB = UO(BB, OB);
        let QB = this.segments.get(DB);
        return void 0 === QB && (QB = {
          kind: BB,
          sequence: OB,
          contentType: GB,
          slots: YB,
          sJ: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(DB, QB)), QB
      }
      valid(BB, OB) {
        const GB = BB.sJ.get(OB);
        return void 0 !== GB && nO(GB, this.nowMs()) ? GB.target : void 0
      }
      telemetryToAskFor() {
        const BB = this.nextTelemetrySequence(),
          OB = this.telemetry;
        return this.telemetryAsked === BB || null !== OB && OB.sequence === BB && nO(OB.sJ, this.nowMs()) ? null : BB
      }
      domToAskFor() {
        var BB;
        const OB = this.queuedDomAfter(this.domTaken);
        return null === OB || OB.sequence === (null === (BB = this.dom) || void 0 === BB ? void 0 : BB.sequence) ? null : OB
      }
      request(BB, OB) {
        const GB = OB < BB.slots.count ? BB.slots.count : OB + 1,
          YB = this.nowMs();
        BB.requested = !0;
        const DB = "video" === BB.kind ? this.telemetryToAskFor() : null;
        null !== DB && (this.telemetryAsked = DB);
        const QB = "video" === BB.kind ? this.domToAskFor() : null,
          oB = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: BB.kind,
            sequence: BB.sequence,
            contentType: BB.contentType,
            parts: {
              first: OB,
              count: GB - OB,
              maxBytes: BB.slots.maxBytes
            },
            ...null === DB ? {} : {
              nextTelemetry: {
                sequence: DB,
                maxBytes: VO
              }
            },
            ...null === QB ? {} : {
              dom: QB
            }
          });
        if (null !== QB) {
          const BB = oB.then((BB => {
            if ("rejected" in BB || void 0 === BB.domUpload) return;
            const {
              expiresInSecs: OB,
              ...GB
            } = BB.domUpload;
            return {
              upload: GB,
              expiresAtMs: YB + 1e3 * OB
            }
          }), (() => {
            var BB;
            (null === (BB = this.dom) || void 0 === BB ? void 0 : BB.sequence) === QB.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: QB.sequence,
            upload: BB
          }
        }
        const jB = oB.then((GB => {
            var QB, oB;
            if ("rejected" in GB) return GB;
            const jB = YB + 1e3 * GB.expiresInSecs;
            GB.targets.forEach(((GB, YB) => {
              BB.sJ.set(OB + YB, {
                target: GB,
                expiresAtMs: jB
              })
            }));
            return null !== DB && DB >= this.nextTelemetrySequence() && (null !== (QB = null === (oB = this.telemetry) || void 0 === oB ? void 0 : oB.sequence) && void 0 !== QB ? QB : -1) <= DB && void 0 !== GB.telemetryTarget && (this.telemetry = {
              sequence: DB,
              sJ: {
                target: GB.telemetryTarget,
                expiresAtMs: jB
              }
            }), GB.targets
          })),
          yB = {
            first: OB,
            end: GB,
            answer: jB
          };
        BB.requests.push(yB);
        const JB = () => {
          BB.requests.splice(BB.requests.indexOf(yB), 1), null !== DB && this.telemetryAsked === DB && (this.telemetryAsked = null)
        };
        return jB.then(JB, JB), yB
      }
    }

    function nO(BB, OB) {
      return BB.expiresAtMs - 6e4 > OB
    }

    function UO(BB, OB) {
      return `${BB}:${OB}`
    }
    const fO = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function kO(BB) {
      return new Promise((OB => {
        const GB = () => {
            clearTimeout(YB), window.removeEventListener("online", GB), OB()
          },
          YB = setTimeout(GB, BB);
        window.addEventListener("online", GB)
      }))
    }
    const dO = ["video", "dom"],
      KO = "video",
      uO = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      mO = "an earlier part of its segment was dropped",
      IO = new Set([403, 408, 409, 429]),
      FO = new Set(["RequestTimeout", "IncompleteBody"]);
    class iO {
      constructor(BB, OB, GB, YB) {
        this.transport = BB, this.uploadToken = OB, this.options = GB, this.callbacks = YB, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new SO(BB, OB, (() => {
          var BB;
          return null !== (BB = this.nextSequence.get("telemetry")) && void 0 !== BB ? BB : 0
        }), (BB => {
          const OB = this.queue.find((OB => "dom" === OB.kind && OB.sequence > BB));
          return void 0 === OB ? null : {
            sequence: OB.sequence,
            byteLength: OB.bytes.byteLength
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
        return this.queue.map((BB => {
          let {
            kind: OB,
            sequence: GB,
            meta: YB
          } = BB;
          return {
            kind: OB,
            sequence: GB,
            meta: YB
          }
        }))
      }
      openSegment(BB, OB, GB, YB) {
        const DB = this.takeSequence(BB);
        return this.prefetchTargets(BB, DB, OB, GB, YB), DB
      }
      prefetchTargets(BB, OB, GB, YB, DB) {
        this.stopped || this.targets.prefetch(BB, OB, GB, YB, DB)
      }
      peekTarget(BB, OB, GB) {
        return this.targets.peek(BB, OB, GB)
      }
      closeSegment(BB, OB) {
        this.targets.forget(BB, OB), BB === KO && this.brokenSegments.delete(OB)
      }
      enqueue(BB) {
        var OB, GB;
        const YB = null !== (OB = null === (GB = BB.part) || void 0 === GB ? void 0 : GB.sequence) && void 0 !== OB ? OB : null;
        if (this.stopped) return this.callbacks.onDropped(BB, "uploader stopped", YB), null;
        if (null !== YB && BB.kind === KO && this.brokenSegments.has(YB)) return this.callbacks.onDropped(BB, mO, YB), null;
        "still" === BB.kind && this.removeQueued(BB.kind);
        const DB = {
            ...BB,
            sequence: null !== YB && void 0 !== YB ? YB : this.takeSequence(BB.kind)
          },
          QB = this.queue.findIndex(((OB, GB) => (GB > 0 || !this.uploadInFlight) && uO[OB.kind] > uO[BB.kind]));
        return this.queue.splice(-1 === QB ? this.queue.length : QB, 0, DB), this.queuedBytes += BB.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(DB) ? DB.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const BB of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= BB.bytes.byteLength, this.callbacks.onDropped(BB, "uploader stopped", BB.sequence)
      }
      takeSequence(BB) {
        var OB;
        const GB = null !== (OB = this.nextSequence.get(BB)) && void 0 !== OB ? OB : 0;
        return this.nextSequence.set(BB, GB + 1), GB
      }
      removeQueued(BB) {
        for (let OB = this.queue.length - 1; OB >= (this.uploadInFlight ? 1 : 0); OB--)
          if (this.queue[OB].kind === BB) {
            const [BB] = this.queue.splice(OB, 1);
            this.queuedBytes -= BB.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const BB of dO)
          for (const OB of [!1, !0])
            for (let GB = this.uploadInFlight ? 1 : 0; GB < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const YB = this.queue[GB];
              if (YB.kind !== BB || !0 === YB.dropLast && !OB) {
                GB++;
                continue
              }
              const [DB] = this.queue.splice(GB, 1);
              this.queuedBytes -= DB.bytes.byteLength, this.callbacks.onDropped(DB, "backlog over cap", DB.sequence), this.segmentBroken(DB)
            }
      }
      segmentBroken(BB) {
        if (void 0 !== BB.part && BB.kind === KO) {
          this.brokenSegments.add(BB.sequence);
          for (let OB = this.queue.length - 1; OB >= (this.uploadInFlight ? 1 : 0); OB--) {
            const GB = this.queue[OB];
            GB.kind === KO && void 0 !== GB.part && GB.sequence === BB.sequence && (this.queue.splice(OB, 1), this.queuedBytes -= GB.bytes.byteLength, this.callbacks.onDropped(GB, mO, GB.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const BB = this.queue[0];
            this.uploadInFlight = !0;
            const OB = await this.upload(BB);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= BB.bytes.byteLength, "uploaded" !== OB.type ? (this.callbacks.onDropped(BB, OB.reason, BB.sequence), this.segmentBroken(BB), "refused" !== OB.type || this.stopped || "telemetry" !== BB.kind || (console.warn(`Session replay uploads refused (${OB.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(OB.reason))) : this.callbacks.onUploaded(BB, BB.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(BB) {
        let OB = null,
          GB = 0;
        for (let DB = 1;; DB++) {
          try {
            if (null === OB) {
              const GB = await this.requestTarget(BB);
              if ("rejected" in GB) {
                if (!GB.retryable) return {
                  type: "refused",
                  reason: GB.reason
                };
                throw new Error(`rejected for now: ${GB.reason}`)
              }
              OB = GB
            }
            try {
              "put" === OB.type ? await this.transport.put(OB.url, BB.bytes, BB.contentType, OB.ifNoneMatch) : await this.transport.post(OB.target, BB.bytes, BB.contentType)
            } catch (YB) {
              if (YB instanceof hB.e && null !== YB.status && YB.status < 500 && !IO.has(YB.status) && (null === YB.storageCode || !FO.has(YB.storageCode))) return console.warn(`Session replay ${BB.kind} segment ${BB.sequence} refused by storage:`, YB), {
                type: "dropped",
                reason: YB.message
              };
              throw YB
            }
            return {
              type: "uploaded"
            }
          } catch (YB) {
            const DB = YB instanceof Error ? YB.message : String(YB),
              QB = void 0 === BB.part ? "" : ` part ${BB.part.index}`;
            if (console.warn(`Session replay ${BB.kind} segment ${BB.sequence}${QB} upload failed:`, YB), YB instanceof hB.e && (403 === YB.status && (OB = null, void 0 !== BB.part && this.targets.expire(BB.kind, BB.sequence, BB.part.index)), ++GB >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: DB
            }
          }
          const QB = Math.min(3e4, this.options.baseBackoffMs * 2 ** (DB - 1));
          if (await this.options.wait(QB * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(BB) {
        const {
          part: OB
        } = BB;
        if (void 0 !== OB) {
          const GB = await this.targets.get(BB.kind, BB.sequence, BB.contentType, OB.index, OB.slots);
          return "rejected" in GB ? GB : {
            type: "post",
            target: GB
          }
        }
        const GB = "dom" === BB.kind ? await this.targets.takeDom(BB.sequence) : void 0;
        if (void 0 !== GB) return {
          type: "put",
          url: GB.uploadUrl,
          ifNoneMatch: GB.ifNoneMatch
        };
        const YB = "telemetry" === BB.kind && BB.bytes.byteLength <= VO ? this.targets.takeTelemetry(BB.sequence) : void 0;
        if (void 0 !== YB) return {
          type: "post",
          target: YB
        };
        const DB = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: BB.kind,
          sequence: BB.sequence,
          contentType: BB.contentType,
          byteLength: BB.bytes.byteLength
        });
        return "rejected" in DB ? DB : {
          type: "put",
          url: DB.uploadUrl,
          ifNoneMatch: DB.ifNoneMatch
        }
      }
    }
    class LO {
      constructor(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = BB, this.slots = OB, this.manifest = GB, this.journal = YB, this.cut = DB, this.joiner = QB, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(BB, OB) {
        switch (BB.type) {
          case "videoSegmentOpened": {
            var GB, YB;
            if (null !== (GB = this.joiner) && void 0 !== GB && GB.accepting) {
              var DB;
              const OB = this.uploader.takeSequence("video");
              this.joiner.open(BB.journalId, OB), this.openJournalId = BB.journalId, null === (DB = this.journal) || void 0 === DB || DB.videoQueued(BB.journalId, OB);
              break
            }
            const QB = this.uploader.openSegment("video", "video/mp4", this.slots, OB);
            this.segments.set(BB.journalId, {
              sequence: QB,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = BB.journalId, null === (YB = this.journal) || void 0 === YB || YB.videoQueued(BB.journalId, QB);
            break
          }
          case "videoPart": {
            var QB;
            if (null !== (QB = this.joiner) && void 0 !== QB && QB.owns(BB.journalId)) {
              const {
                index: OB,
                bytes: GB,
                meta: YB,
                completeUntilUs: DB,
                completeUntilIndex: QB
              } = BB;
              this.joiner.addPart(BB.journalId, {
                index: OB,
                bytes: GB,
                meta: YB,
                completeUntilUs: DB,
                completeUntilIndex: QB
              });
              break
            }
            const OB = this.segments.get(BB.journalId);
            void 0 !== OB && this.enqueuePart(BB.journalId, OB.sequence, BB);
            break
          }
          case "videoSegmentClosed": {
            var oB;
            if (null !== (oB = this.joiner) && void 0 !== oB && oB.owns(BB.journalId)) {
              var jB;
              if (this.openJournalId === BB.journalId && (this.openJournalId = null), BB.parts > 0) this.joiner.close(BB.journalId, BB.parts);
              else this.joiner.forget(BB.journalId), null === (jB = this.journal) || void 0 === jB || jB.videoSettled(BB.journalId);
              break
            }
            const OB = this.segments.get(BB.journalId);
            if (void 0 === OB) break;
            OB.totalParts = BB.parts, this.openJournalId === BB.journalId && (this.openJournalId = null), this.maybeDone(BB.journalId, OB);
            break
          }
        }
      }
      joinedStored(BB, OB, GB) {
        this.manifest.setVideoSegment(OB, GB.meta, null), this.storedWhole.set(OB, BB)
      }
      joinedHandedBack(BB, OB, GB, YB) {
        const DB = {
          sequence: OB,
          settledParts: 0,
          totalParts: YB,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(BB, DB), this.uploader.prefetchTargets("video", OB, "video/mp4", this.slots);
        for (const QB of GB) this.enqueuePart(BB, OB, QB)
      }
      enqueuePart(BB, OB, GB) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: GB.bytes,
          meta: {
            type: "video",
            meta: GB.meta,
            journalId: BB,
            index: GB.index,
            completeUntilUs: GB.completeUntilUs,
            completeUntilIndex: GB.completeUntilIndex
          },
          part: {
            sequence: OB,
            index: GB.index,
            slots: this.slots
          }
        })
      }
      landed(BB, OB) {
        if (null !== BB.completeUntilUs && BB.meta.endMs > BB.meta.startMs) {
          var GB, YB;
          const DB = this.segments.get(BB.journalId);
          void 0 !== DB && (DB.landedParts = BB.index + 1), this.manifest.setVideoSegment(OB, BB.meta, BB.index + 1), null === (GB = this.journal) || void 0 === GB || GB.videoPartLanded(BB.journalId, {
            partsLanded: BB.index + 1,
            completeUntilUs: BB.completeUntilUs,
            meta: BB.meta
          }, null !== (YB = BB.completeUntilIndex) && void 0 !== YB ? YB : 0)
        }
        this.settled(BB)
      }
      dropped(BB) {
        this.settled(BB), BB.journalId === this.openJournalId && BB.journalId !== this.cutJournalId && (this.cutJournalId = BB.journalId, this.cut())
      }
      listed(BB, OB) {
        if (null !== OB)
          for (const [YB, DB] of this.segments) DB.sequence === BB && (DB.listedParts = Math.max(DB.listedParts, OB), this.maybeDone(YB, DB));
        else {
          const OB = this.storedWhole.get(BB);
          var GB;
          void 0 !== OB && (this.storedWhole.delete(BB), null === (GB = this.journal) || void 0 === GB || GB.videoSettled(OB))
        }
      }
      settled(BB) {
        const OB = this.segments.get(BB.journalId);
        void 0 !== OB && (OB.settledParts++, this.maybeDone(BB.journalId, OB))
      }
      maybeDone(BB, OB) {
        if (null === OB.totalParts || OB.settledParts < OB.totalParts) return;
        const GB = OB.listedParts >= OB.landedParts;
        var YB, DB;
        OB.uploaded || (OB.uploaded = !0, this.uploader.closeSegment("video", OB.sequence), GB || null === (YB = this.journal) || void 0 === YB || YB.videoUploaded(BB));
        GB && (this.segments.delete(BB), null === (DB = this.journal) || void 0 === DB || DB.videoSettled(BB))
      }
    }
    var gO = GB(3347),
      rO = GB(5095);
    class XO {
      constructor(BB, OB) {
        this.deps = BB, this.videoStatus = OB, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new ZO({
          onFirstCanvas: BB => {
            this.attachToCanvas(BB)
          },
          onCanvasSwapped: BB => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(BB), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: BB => {
            this.postToWorker({
              type: "resize",
              cssSize: BB
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
      attachToCanvas(BB) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(BB, this.deps.videoConfig)
        } catch (OB) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", OB), this.videoUnavailable(`video couldn't start: ${OB instanceof Error?OB.message:String(OB)}`)
        }
      }
      startVideo(BB, OB) {
        var GB, YB, DB;
        const QB = new yO,
          oB = (0, OO.l)(OB),
          jB = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          yB = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => JB), jB),
          JB = new LO(this.deps.uploader, oB, this.deps.manifest, this.deps.journal, jB, yB);
        QB.onmessage = BB => {
          this.onWorkerMessage(BB.data, JB)
        }, QB.onerror = BB => {
          console.error("Session replay video worker error.", BB.message), this.worker === QB && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${BB.message||"it didn't load"}`))
        }, this.worker = QB, this.uploads = JB, this.joiner = yB, this.deps.debug.joiner = null !== (GB = null === yB || void 0 === yB ? void 0 : yB.stats) && void 0 !== GB ? GB : null, this.videoStarted = !0, this.deps.stills.start();
        const MB = (0, KB.getOperatingSystem)(),
          PB = (0, dB.d)();
        this.postToWorker({
          type: "init",
          videoConfig: OB,
          partPlan: {
            ...oB,
            partDurationMs: OB.partDurationMs,
            keyframeIntervalMs: OB.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          encoderPreference: {
            preferSoftware: OB.softwareEncoderPlatforms.includes(MB),
            preferQualityLatency: "ios" === MB
          },
          journalRecordingId: null !== (YB = null === (DB = this.deps.journal) || void 0 === DB ? void 0 : DB.recordingId) && void 0 !== YB ? YB : null
        });
        const zB = function(BB, OB, GB, YB) {
          const DB = YB && BB.streamGrabEngines.includes(GB) ? "stream" : BB.videoFrameGrabPlatforms.includes(OB) ? "videoFrame" : "bitmap";
          return {
            path: DB,
            frameCostFloorMs: Math.max(BB.captureFrameCostFloorMs, "stream" === DB ? 2.5 : 0, "ios" === OB ? 3.5 : 0)
          }
        }(OB, MB, PB, lO.isSupported() && !BB.renderer.endsWith("webgpu"));
        this.capture = new pO(QB, OB.maxFps, {
          msPerSecond: OB.captureBudgetMsPerSecond,
          frameCostFloorMs: zB.frameCostFloorMs
        }, {
          path: zB.path,
          maxMacroblocks: OB.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (BB => {
          this.endVideo(), this.videoStopped("stopped_error", BB)
        })), this.capture.start(BB)
      }
      createJoiner(BB, OB, GB) {
        return new AO(BB, this.deps.recording.uploadToken, new eB(BB.url), {
          stored: (BB, GB, YB) => {
            OB().joinedStored(BB, GB, YB), this.deps.pageExit.segmentLanded()
          },
          handBack: (BB, GB, YB, DB) => {
            OB().joinedHandedBack(BB, GB, YB, DB)
          },
          cut: GB
        }, {
          wait: kO,
          nowMs: Date.now,
          maxHeldBytes: NO[this.deps.platformType]
        })
      }
      onWorkerMessage(BB, OB) {
        var GB, YB, DB, QB;
        switch (BB.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            OB.onWorkerMessage(BB, "videoSegmentOpened" === BB.type ? null === (GB = this.deps.dom()) || void 0 === GB ? void 0 : GB.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(BB, document.hidden);
            break;
          case "stats":
            DB = this.deps.debug, QB = BB.stats, DB.workerStats.push(QB), DB.workerStats.length > 120 && DB.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(BB.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = BB.level, null === (YB = this.capture) || void 0 === YB || YB.setMaxFps(BB.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, CB.e)(),
              level: BB.level,
              maxFps: BB.maxFps,
              reason: BB.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${BB.level} (${BB.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(BB.reason)
        }
      }
      videoUnavailable(BB) {
        var OB, GB;
        null === (OB = this.capture) || void 0 === OB || OB.stop(), this.capture = null, null === (GB = this.worker) || void 0 === GB || GB.terminate(), this.worker = null, this.videoStopped("stopped_error", BB)
      }
      videoStopped(BB, OB) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = OB, "stopped_error" === BB && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(BB, OB))
      }
      setVideoStatus(BB, OB) {
        this.videoStatus = BB, (0, gO.i)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, rO.d)(BB, OB)
      }
      maybeLogStats(BB) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const OB = Math.round(1e3 * BB.encodedFrames / BB.windowMs);
        console.warn(`Session replay stats: ${OB} fps encoded, ${BB.encodeWidth}x${BB.encodeHeight} ${BB.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var BB;
        null === (BB = this.capture) || void 0 === BB || BB.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const OB = this.worker;
        this.worker = null, setTimeout((() => {
          null === OB || void 0 === OB || OB.terminate()
        }), 15e3)
      }
      postToWorker(BB) {
        var OB;
        null === (OB = this.worker) || void 0 === OB || OB.postMessage(BB)
      }
    }
    const wO = 3 * EB.e / 4,
      EO = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var cO = GB(40520);
    const hO = {
        count: 1,
        maxBytes: OO.g
      },
      aO = "image/jpeg";
    class eO {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EB.i;
        this.uploader = BB, this.manifest = OB, this.relay = GB, this.keepalive = YB, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(BB, OB) {
        let {
          bytes: GB,
          small: YB,
          atMs: DB
        } = BB;
        const QB = GB.byteLength <= hO.maxBytes ? GB : YB;
        null !== QB && (this.latest = {
          bytes: QB,
          small: YB,
          atMs: DB
        }, OB && this.upload())
      }
      upload() {
        var BB, OB;
        const GB = this.latest;
        if (this.stopped || null === GB || GB.atMs <= (null !== (BB = null === (OB = this.queued) || void 0 === OB ? void 0 : OB.atMs) && void 0 !== BB ? BB : -1 / 0)) return;
        const YB = this.takeSequence();
        this.queued = {
          atMs: GB.atMs,
          sequence: YB
        }, this.uploader.enqueue({
          kind: "still",
          contentType: aO,
          bytes: GB.bytes,
          meta: {
            type: "still",
            atMs: GB.atMs,
            sequence: YB
          },
          part: {
            sequence: YB,
            index: 0,
            slots: hO
          }
        })
      }
      landed(BB) {
        this.manifest.setStill(BB.atMs, BB.sequence), this.uploader.closeSegment("still", BB.sequence)
      }
      dropped(BB) {
        this.uploader.closeSegment("still", BB.sequence)
      }
      beacon() {
        var BB, OB, GB, YB;
        const DB = this.latest;
        if (this.stopped || null === DB || DB.atMs <= (null !== (BB = null === (OB = this.manifest.contents.still) || void 0 === OB ? void 0 : OB.atMs) && void 0 !== BB ? BB : -1 / 0)) return;
        const QB = (null === (GB = this.queued) || void 0 === GB ? void 0 : GB.atMs) === DB.atMs ? this.queued : null;
        if (null !== QB && this.keepalive.isInFlight(aO)) return void this.manifest.setStill(DB.atMs, QB.sequence);
        const oB = null !== (YB = null === QB || void 0 === QB ? void 0 : QB.sequence) && void 0 !== YB ? YB : this.nextSequence,
          jB = this.uploader.peekTarget("still", oB, 0);
        if (void 0 !== jB)
          for (const yB of [DB.bytes, DB.small])
            if (null !== yB && this.sendBeacon(jB, yB)) return null === QB && this.takeSequence(), void this.manifest.setStill(DB.atMs, oB)
      }
      sendBeacon(BB, OB) {
        var GB, YB;
        const DB = null !== (GB = null === (YB = this.relay) || void 0 === YB ? void 0 : YB.beacon({
          method: "POST",
          url: BB.url,
          fields: BB.fields
        }, OB, aO, this.keepalive)) && void 0 !== GB ? GB : null;
        if (null !== DB) return DB;
        const {
          form: QB,
          byteLength: oB
        } = (0, cO.h)(BB, OB, aO);
        return this.keepalive.sendUploadBeacon(BB.url, QB, oB)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const BB = this.nextSequence++;
        return this.prefetchNext(), BB
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, aO, hO)
      }
    }
    var TO = GB(5116),
      bO = GB(40523),
      CO = GB(40529),
      HO = GB(40537),
      vO = GB(7036),
      sO = GB(7043);

    function xO(BB) {
      return 50 * Math.floor(BB / 50)
    }
    class tO {
      constructor() {
        this.writer = new vO.d((0, CB.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(BB, OB) {
        null !== BB && (this.setActionBits(BB.getActionBits(), (0, CB.e)()), this.unsubscribers.push(BB.onKey(((BB, OB, GB, YB, DB, QB) => {
          const oB = (0, sO.c)(BB);
          DB ? this.writer.writeKey(xO(QB), oB, OB, GB, YB) : 0 !== oB && null === (0, sO.e)(BB) && this.writer.writeKey(xO(QB), 0, OB, GB, YB)
        })), BB.onActions(((BB, OB) => {
          this.setActionBits(BB, OB)
        })), BB.onPointerLock(((BB, OB) => {
          this.writer.writeEvent(OB, BB ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, qO.u)((() => {
          const BB = (0, qO.e)();
          this.writer.writeFrame((0, CB.e)() - BB, BB), this.framesSinceFpsSample++, OB()
        })))
      }
      writeState(BB, OB) {
        this.writer.writeState((0, CB.e)(), {
          backingWidth: BB.canvas.width,
          backingHeight: BB.canvas.height,
          cssWidth: BB.cssWidth,
          cssHeight: BB.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: BB.renderer,
          pingMs: BB.pingMs,
          hidden: OB,
          qualityLevel: BB.qualityLevel
        })
      }
      writeEvent(BB) {
        this.writer.writeEvent((0, CB.e)(), BB)
      }
      sampleFps() {
        const BB = performance.now(),
          OB = BB - this.lastFpsSampleMs,
          GB = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = BB, this.framesSinceFpsSample = 0, 0 === GB || OB <= 0 ? null : 1e3 * GB / OB
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const BB = this.writer.chunkStartMs,
          OB = (0, CB.e)(),
          GB = this.writer.takeChunk(OB);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(OB, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: GB,
          startMs: BB,
          endMs: OB
        }
      }
      stop() {
        for (const BB of this.unsubscribers) BB();
        this.unsubscribers = []
      }
      setActionBits(BB, OB) {
        BB !== this.actionBits && (this.actionBits = BB, this.writer.writeActions(xO(OB), BB))
      }
    }
    var BG = GB(5131),
      OG = GB(40546);
    class GG {
      constructor(BB, OB) {
        var GB;
        this.recording = BB, this.telemetry = new tO, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const YB = OB.dryRun ? null : null !== (GB = BB.partJoiner) && void 0 !== GB ? GB : null,
          DB = null === YB ? null : (0, cB.l)(TB(YB)),
          oB = OB.dryRun ? new cO.b : new cO.f((0, kB.e)().segmentUploadUrl, {
            relay: DB
          });
        var yB, JB;
        this.videoConfig = OB.dryRun ? function(BB) {
          var OB, GB, YB, DB;
          const oB = QB[BB],
            jB = mB.g.getItem("replaySkipLowMemory"),
            yB = "boolean" === typeof jB ? jB : null;
          return {
            ...oB,
            maxFps: null !== (OB = iB("replayMaxFps")) && void 0 !== OB ? OB : oB.maxFps,
            maxMacroblocks: null !== (GB = iB("replayMaxMacroblocks")) && void 0 !== GB ? GB : oB.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (YB = iB("replayCaptureBudgetMs")) && void 0 !== YB ? YB : oB.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (DB = iB("replayCaptureCostFloorMs")) && void 0 !== DB ? DB : oB.captureFrameCostFloorMs,
            softwareEncoderPlatforms: LB("replayEncoder", "software", "hardware", oB.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: LB("replayGrab", "videoFrame", "bitmap", oB.videoFrameGrabPlatforms),
            streamGrabEngines: gB(oB.streamGrabEngines),
            skipLowMemoryDevices: null !== yB && void 0 !== yB ? yB : oB.skipLowMemoryDevices
          }
        }(OB.platformType) : BB.videoConfig && (yB = BB.videoConfig, JB = OB.platformType, {
          ...QB[JB],
          ...yB
        });
        const MB = (0, BG.b)(this.videoConfig);
        (0, gO.i)("recorded" === MB ? "video" : "dom_only", BB), this.manifest = new tB(BB.recordingId, BB.uploadToken, !OB.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: BB.expiresAtMs - 6e4,
          onSend: BB => {
            var OB;
            null === (OB = this.journal) || void 0 === OB || OB.manifestSent(BB)
          },
          onListed: BB => {
            let {
              list: OB,
              value: GB
            } = BB;
            var YB, DB;
            if ("videoSegments" === OB) null === (YB = this.video.uploads) || void 0 === YB || YB.listed(GB.sequence, null !== (DB = GB.parts) && void 0 !== DB ? DB : null);
            else if ("telemetrySegments" === OB) {
              var QB;
              null === (QB = this.journal) || void 0 === QB || QB.telemetrySettled(GB.sequence)
            } else {
              var oB;
              null === (oB = this.journal) || void 0 === oB || oB.domSettled(GB.sequence)
            }
          }
        }), !OB.dryRun && HO.c.supported && (this.journal = new DO(new HO.c, BB, this.manifest.contents, (0, kB.e)())), this.debug = function() {
          const BB = {
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
          return window.sessionReplayDebug = BB, BB
        }(), this.uploader = new iO(oB, BB.uploadToken, {
          ...fO,
          maxBacklogBytes: EO[OB.platformType],
          wait: kO
        }, {
          onUploaded: (BB, OB) => {
            var GB;
            this.debug.uploadedBytesByKind[BB.kind] = (null !== (GB = this.debug.uploadedBytesByKind[BB.kind]) && void 0 !== GB ? GB : 0) + BB.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(BB.meta, OB, BB.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (BB, OB, GB) => {
            var YB;
            if (console.warn(`Session replay dropped a ${BB.kind} segment: ${OB}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === BB.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (YB = this.video.uploads) || void 0 === YB || YB.dropped(BB.meta);
            else if ("still" === BB.meta.type) this.stills.dropped(BB.meta);
            else if ("telemetry" === BB.meta.type && null !== GB) {
              var DB;
              null === (DB = this.journal) || void 0 === DB || DB.telemetrySettled(GB)
            } else if ("dom" === BB.meta.type && null !== GB) {
              var QB;
              null === (QB = this.journal) || void 0 === QB || QB.domSettled(GB)
            }
          },
          onStopped: BB => {
            this.stop(`uploads refused: ${BB}`)
          }
        }), this.stills = new eO(this.uploader, this.manifest, DB), this.pageExit = new QO({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var BB, OB;
            null === (BB = this.dom) || void 0 === BB || BB.cut(), null === (OB = this.dom) || void 0 === OB || OB.cutAfterNextBatch()
          },
          postToWorker: BB => {
            this.video.postToWorker(BB)
          },
          writeEvent: BB => {
            this.telemetry.writeEvent(BB)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var BB;
            null === (BB = this.video.joiner) || void 0 === BB || BB.releaseAll()
          }
        }), this.video = new XO({
          recording: BB,
          videoConfig: this.videoConfig,
          joinerAccess: YB,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: OB.dryRun ? {
            logStats: !0 === mB.g.getItem("replayLogStats")
          } : FB,
          platformType: OB.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, MB);
        const PB = OB.dryRun ? function() {
          var BB;
          const OB = null !== (BB = (0, IB.g)() ? uB.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== BB ? BB : mB.g.getItem("replayPostHogHost");
          return "string" === typeof OB && OB.length > 0 ? {
            apiHost: OB,
            projectApiKey: "dry-run"
          } : null
        }() : BB.posthog;
        if (this.ownFpsMonitor = null === PB ? new OG.c({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, jB.o.subscribe("sessionReplayLowFps", (BB => {
            let {
              low: OB
            } = BB;
            this.isStopped || this.onLowFps(OB)
          })), jB.o.subscribe("sessionReplayStayProgress", (BB => {
            !this.isStopped && this.manifest.updateCurrentStay(BB) && this.manifest.sendSoon()
          })), jB.o.subscribe("sessionReplayGameQuit", (BB => {
            let {
              reasons: OB,
              gameName: GB
            } = BB;
            OB.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(GB) && this.pageExit.sendManifest()
          })), null !== OB.currentGame && (this.listStay(OB.currentGame), jB.o.tM("sessionReplayStayOpened", OB.currentGame.gameNameWithVariation)), this.start(BB.expiresAtMs), this.dom = null, null !== PB) {
          const GB = new UB(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: BB => this.isStopped || this.pageExit.isHiding || document.hidden && !BB
          }, this.journal, new fB.b);
          this.dom = GB, (0, rO.c)({
            recording: BB,
            posthog: PB,
            videoStatus: this.video.videoStatus,
            dryRun: OB.dryRun,
            onDomBatch: BB => {
              GB.add(BB)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var BB, OB;
        return null !== (BB = null === (OB = this.videoConfig) || void 0 === OB ? void 0 : OB.manifestIntervalMs) && void 0 !== BB ? BB : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(BB) {
        const {
          lobbyName: OB,
          ...GB
        } = BB;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === OB ? GB : {
          ...GB,
          lobbyName: OB
        })
      }
      gameJoined(BB) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(BB), jB.o.tM("sessionReplayStayOpened", BB.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(BB, OB) {
        this.isStopped || (this.manifest.addCreatorGrant(BB, OB), this.manifest.send())
      }
      onLowFps(BB) {
        this.lowFpsOpen = BB, BB && this.manifest.flagCurrentGame("lowFps")
      }
      start(BB) {
        const OB = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var BB;
          this.flushTelemetry(), null === (BB = this.dom) || void 0 === BB || BB.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, BB - Date.now() - 6e4))), this.pageExit.listen(OB), this.telemetry.attach((0, CO.b)(), (() => {
          var BB;
          null === (BB = this.video.capture) || void 0 === BB || BB.onAfterRender()
        }));
        for (const GB of ["error", "unhandledrejection"]) window.addEventListener(GB, (BB => {
          (0, bO.d)(BB) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: OB
        });
        (0, BG.f)((() => {
          this.video.onCellular()
        }), OB), null !== this.journal && (0, TO.e)(OB)
      }
      stop(BB) {
        var OB, GB;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${BB}`), this.debug.stoppedReason = BB, this.lifetime.abort();
          for (const BB of this.timers) clearTimeout(BB);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, rO.g)(), this.telemetry.stop(), this.flushTelemetry(), null === (OB = this.dom) || void 0 === OB || OB.cut(), null === (GB = this.dom) || void 0 === GB || GB.close(), this.video.endVideo(), this.manifest.send(), (0, gO.i)("events_only", this.recording)
        }
      }
      onStateTick() {
        var BB;
        const OB = this.video.canvasWatch.check();
        if (null === OB) return;
        const {
          cssSize: GB
        } = this.video.canvasWatch, YB = oB.b.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: OB.canvas,
          cssWidth: GB.width,
          cssHeight: GB.height,
          renderer: OB.renderer,
          pingMs: YB,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= wO && this.flushTelemetry();
        const DB = this.telemetry.sampleFps(),
          QB = document.hidden ? null : DB;
        if (null === (BB = this.ownFpsMonitor) || void 0 === BB || BB.addSample(QB, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: QB,
            pingMs: YB
          }), null !== this.video.capture) {
          const {
            averageMs: BB,
            fps: OB,
            grabPath: GB
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: BB,
            budgetFps: OB,
            grabPath: GB
          }
        }
      }
      onSegmentUploaded(BB, OB, GB) {
        var YB;
        if ("video" === BB.type) null === (YB = this.video.uploads) || void 0 === YB || YB.landed(BB, OB);
        else if ("still" === BB.type) this.stills.landed(BB);
        else if ("dom" === BB.type) {
          var DB;
          null === (DB = this.journal) || void 0 === DB || DB.domLanded(OB, BB.chunk), this.manifest.addDomSegment({
            sequence: OB,
            ...BB.chunk
          })
        } else {
          var QB;
          null === (QB = this.journal) || void 0 === QB || QB.telemetryLanded(OB, GB, BB.startMs, BB.endMs), this.manifest.addTelemetrySegment(OB, BB.startMs, BB.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: BB,
          startMs: OB,
          endMs: GB
        } = this.telemetry.takeChunk(), YB = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: BB,
          meta: {
            type: "telemetry",
            startMs: OB,
            endMs: GB
          }
        });
        var DB;
        null !== YB && (null === (DB = this.journal) || void 0 === DB || DB.telemetryQueued(YB, BB, OB, GB));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7036: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => kB,
      g: () => dB
    });
    var YB = GB(7043);
    const DB = 827609666,
      QB = 2,
      oB = 1,
      jB = 13,
      yB = 1,
      JB = 2,
      MB = 3,
      PB = 4,
      zB = 5,
      lB = 7,
      pB = 19,
      qB = 6,
      ZB = 7,
      NB = 7,
      RB = 1,
      WB = 2,
      AB = 4,
      VB = 65535,
      SB = 10,
      nB = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      UB = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function fB(BB) {
      return Math.max(0, Math.min(VB, Math.round(BB)))
    }
    class kB {
      constructor(BB) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(BB)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - jB
      }
      writeFrame(BB, OB) {
        this.reserve(lB);
        const GB = this.view,
          YB = this.length;
        GB.setUint8(YB, yB), GB.setUint32(YB + 1, this.timeUnits(BB), !0), GB.setUint16(YB + 5, fB(100 * OB), !0), this.length += lB
      }
      writeState(BB, OB) {
        this.reserve(pB);
        const GB = this.view,
          YB = this.length;
        GB.setUint8(YB, JB), GB.setUint32(YB + 1, this.timeUnits(BB), !0), GB.setUint16(YB + 5, fB(OB.backingWidth), !0), GB.setUint16(YB + 7, fB(OB.backingHeight), !0), GB.setUint16(YB + 9, fB(OB.cssWidth), !0), GB.setUint16(YB + 11, fB(OB.cssHeight), !0), GB.setUint16(YB + 13, fB(100 * OB.devicePixelRatio), !0), GB.setUint8(YB + 15, nB.indexOf(OB.renderer)), GB.setUint16(YB + 16, null === OB.pingMs ? VB : fB(Math.min(OB.pingMs, VB - 1)), !0), GB.setUint8(YB + 18, (OB.hidden ? 1 : 0) | (7 & OB.qualityLevel) << 1), this.length += pB
      }
      writeEvent(BB, OB) {
        this.reserve(qB);
        const GB = this.length;
        this.view.setUint8(GB, MB), this.view.setUint32(GB + 1, this.timeUnits(BB), !0), this.view.setUint8(GB + 5, UB.indexOf(OB)), this.length += qB
      }
      writeActions(BB, OB) {
        this.reserve(ZB);
        const GB = this.length;
        this.view.setUint8(GB, PB), this.view.setUint32(GB + 1, this.timeUnits(BB), !0), this.view.setUint16(GB + 5, OB, !0), this.length += ZB
      }
      writeKey(BB, OB, GB, YB, DB) {
        this.reserve(NB);
        const QB = this.length;
        this.view.setUint8(QB, zB), this.view.setUint32(QB + 1, this.timeUnits(BB), !0), this.view.setUint8(QB + 5, OB), this.view.setUint8(QB + 6, (GB ? RB : 0) | (YB ? WB : 0) | (DB ? AB : 0)), this.length += NB
      }
      takeChunk(BB) {
        const OB = this.buffer.slice(0, this.length);
        return this.startChunk(BB), OB
      }
      startChunk(BB) {
        this.baseEpochMs = BB, this.view.setUint32(0, DB, !0), this.view.setUint8(4, QB), this.view.setFloat64(5, BB, !0), this.length = jB
      }
      timeUnits(BB) {
        return Math.max(0, Math.round((BB - this.baseEpochMs) * SB))
      }
      reserve(BB) {
        if (this.length + BB <= this.buffer.byteLength) return;
        const OB = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(OB).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = OB, this.view = new DataView(OB)
      }
    }

    function dB(BB) {
      const OB = new DataView(BB),
        GB = BB.byteLength < jB ? 0 : OB.getUint8(4);
      if (GB < oB || GB > QB || OB.getUint32(0, !0) !== DB) throw new Error(`Not a version ${oB}-${QB} replay telemetry chunk`);
      const fB = OB.getFloat64(5, !0),
        kB = {
          baseEpochMs: fB,
          inputRecorded: GB >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        dB = BB => fB + OB.getUint32(BB, !0) / SB;
      let KB = jB;
      for (; KB < BB.byteLength;) {
        const BB = OB.getUint8(KB);
        if (BB === yB) kB.frames.push({
          atMs: dB(KB + 1),
          cpuFrameMs: OB.getUint16(KB + 5, !0) / 100
        }), KB += lB;
        else if (BB === JB) {
          var uB;
          const BB = OB.getUint16(KB + 16, !0),
            GB = OB.getUint8(KB + 18);
          kB.states.push({
            atMs: dB(KB + 1),
            backingWidth: OB.getUint16(KB + 5, !0),
            backingHeight: OB.getUint16(KB + 7, !0),
            cssWidth: OB.getUint16(KB + 9, !0),
            cssHeight: OB.getUint16(KB + 11, !0),
            devicePixelRatio: OB.getUint16(KB + 13, !0) / 100,
            renderer: null !== (uB = nB[OB.getUint8(KB + 15)]) && void 0 !== uB ? uB : "unknown",
            pingMs: BB === VB ? null : BB,
            hidden: 1 === (1 & GB),
            qualityLevel: GB >> 1 & 7
          }), KB += pB
        } else if (BB === MB) {
          var mB;
          kB.events.push({
            atMs: dB(KB + 1),
            event: null !== (mB = UB[OB.getUint8(KB + 5)]) && void 0 !== mB ? mB : "none"
          }), KB += qB
        } else if (BB === PB && kB.inputRecorded) kB.actions.push({
          atMs: dB(KB + 1),
          bits: OB.getUint16(KB + 5, !0)
        }), KB += ZB;
        else {
          if (BB !== zB || !kB.inputRecorded) throw new Error(`Unknown replay telemetry record type ${BB} at byte ${KB}`);
          {
            var IB;
            const BB = OB.getUint8(KB + 6);
            kB.keys.push({
              atMs: dB(KB + 1),
              code: null !== (IB = YB.b[OB.getUint8(KB + 5)]) && void 0 !== IB ? IB : YB.b[0],
              down: 0 !== (BB & RB),
              bound: 0 !== (BB & WB),
              inPlay: 0 !== (BB & AB)
            }), KB += NB
          }
        }
      }
      return kB
    }
  },
  36856: BB => {
    BB.exports = function(BB, OB, GB, YB) {
      var DB = self || window;
      try {
        try {
          var QB;
          try {
            QB = new DB.Blob([BB])
          } catch (JB) {
            (QB = new(DB.BlobBuilder || DB.WebKitBlobBuilder || DB.MozBlobBuilder || DB.MSBlobBuilder)).append(BB), QB = QB.getBlob()
          }
          var oB = DB.URL || DB.webkitURL,
            jB = oB.createObjectURL(QB),
            yB = new DB[OB](jB, GB);
          return oB.revokeObjectURL(jB), yB
        } catch (JB) {
          return new DB[OB]("data:application/javascript,".concat(encodeURIComponent(BB)), GB)
        }
      } catch (JB) {
        if (!YB) throw Error("Inline worker is not supported");
        return new DB[OB](YB, GB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);