export const id = 63;
export const ids = [63];
export const modules = {
  40549: (UU, XU, zU) => {
    function cU() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function yU(UU) {
      return UU instanceof Uint8Array && (!cU() || !Buffer.isBuffer(UU))
    }

    function QU(UU) {
      return UU instanceof ArrayBuffer
    }

    function AU(UU) {
      return !!cU() && Buffer.isBuffer(UU)
    }
    var FU = zU(40557).b,
      oU = zU(40563).c,
      DU = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    XU.e = function(UU) {
      if (!yU(UU) && !QU(UU) && !AU(UU)) throw new TypeError(DU);
      var XU = !1,
        zU = !1;
      yU(UU) ? XU = !0 : QU(UU) && (zU = !0, UU = new Uint8Array(UU));
      var cU, FU, EU, YU = new oU(UU),
        NU = YU.maxCompressedLength();
      if (XU ? (cU = new Uint8Array(NU), EU = YU.compressToBuffer(cU)) : zU ? (cU = new ArrayBuffer(NU), FU = new Uint8Array(cU), EU = YU.compressToBuffer(FU)) : (cU = Buffer.alloc(NU), EU = YU.compressToBuffer(cU)), !cU.slice) {
        var IU = new Uint8Array(Array.prototype.slice.call(cU, 0, EU));
        if (XU) return IU;
        if (zU) return IU.buffer;
        throw new Error("Not implemented")
      }
      return cU.slice(0, EU)
    }
  },
  40563: (UU, XU) => {
    var zU = new Array(15);

    function cU(UU, XU) {
      return 506832829 * UU >>> XU
    }

    function yU(UU, XU) {
      return UU[XU] + (UU[XU + 1] << 8) + (UU[XU + 2] << 16) + (UU[XU + 3] << 24)
    }

    function QU(UU, XU, zU) {
      return UU[XU] === UU[zU] && UU[XU + 1] === UU[zU + 1] && UU[XU + 2] === UU[zU + 2] && UU[XU + 3] === UU[zU + 3]
    }

    function AU(UU, XU, zU, cU, yU) {
      return zU <= 60 ? (cU[yU] = zU - 1 << 2, yU += 1) : zU < 256 ? (cU[yU] = 240, cU[yU + 1] = zU - 1, yU += 2) : (cU[yU] = 244, cU[yU + 1] = zU - 1 & 255, cU[yU + 2] = zU - 1 >>> 8, yU += 3),
        function(UU, XU, zU, cU, yU) {
          var QU;
          for (QU = 0; QU < yU; QU++) zU[cU + QU] = UU[XU + QU]
        }(UU, XU, cU, yU, zU), yU + zU
    }

    function FU(UU, XU, zU, cU) {
      return cU < 12 && zU < 2048 ? (UU[XU] = 1 + (cU - 4 << 2) + (zU >>> 8 << 5), UU[XU + 1] = 255 & zU, XU + 2) : (UU[XU] = 2 + (cU - 1 << 2), UU[XU + 1] = 255 & zU, UU[XU + 2] = zU >>> 8, XU + 3)
    }

    function oU(UU, XU, zU, cU) {
      for (; cU >= 68;) XU = FU(UU, XU, zU, 64), cU -= 64;
      return cU > 64 && (XU = FU(UU, XU, zU, 60), cU -= 60), FU(UU, XU, zU, cU)
    }

    function DU(UU, XU, FU, DU, EU) {
      for (var YU = 1; 1 << YU <= FU && YU <= 14;) YU += 1;
      var NU = 32 - (YU -= 1);
      "undefined" === typeof zU[YU] && (zU[YU] = new Uint16Array(1 << YU));
      var IU, pU = zU[YU];
      for (IU = 0; IU < pU.length; IU++) pU[IU] = 0;
      var aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU = XU + FU,
        LU = XU,
        eU = XU,
        CU = !0;
      if (FU >= 15)
        for (aU = dU - 15, gU = cU(yU(UU, XU += 1), NU); CU;) {
          BU = 32, kU = XU;
          do {
            if (tU = gU, ZU = BU >>> 5, BU += 1, kU = (XU = kU) + ZU, XU > aU) {
              CU = !1;
              break
            }
            gU = cU(yU(UU, kU), NU), GU = LU + pU[tU], pU[tU] = XU - LU
          } while (!QU(UU, XU, GU));
          if (!CU) break;
          EU = AU(UU, eU, XU - eU, DU, EU);
          do {
            for (RU = XU, PU = 4; XU + PU < dU && UU[XU + PU] === UU[GU + PU];) PU += 1;
            if (XU += PU, EU = oU(DU, EU, RU - GU, PU), eU = XU, XU >= aU) {
              CU = !1;
              break
            }
            pU[cU(yU(UU, XU - 1), NU)] = XU - 1 - LU, GU = LU + pU[WU = cU(yU(UU, XU), NU)], pU[WU] = XU - LU
          } while (QU(UU, XU, GU));
          if (!CU) break;
          gU = cU(yU(UU, XU += 1), NU)
        }
      return eU < dU && (EU = AU(UU, eU, dU - eU, DU, EU)), EU
    }

    function EU(UU) {
      this.array = UU
    }
    EU.prototype.maxCompressedLength = function() {
      var UU = this.array.length;
      return 32 + UU + Math.floor(UU / 6)
    }, EU.prototype.compressToBuffer = function(UU) {
      var XU, zU = this.array,
        cU = zU.length,
        yU = 0,
        QU = 0;
      for (QU = function(UU, XU, zU) {
          do {
            XU[zU] = 127 & UU, (UU >>>= 7) > 0 && (XU[zU] += 128), zU += 1
          } while (UU > 0);
          return zU
        }(cU, UU, QU); yU < cU;) QU = DU(zU, yU, XU = Math.min(cU - yU, 65536), UU, QU), yU += XU;
      return QU
    }, XU.c = EU
  },
  40557: (UU, XU) => {
    var zU = [0, 255, 65535, 16777215, 4294967295];

    function cU(UU, XU, zU, cU, yU) {
      var QU;
      for (QU = 0; QU < yU; QU++) zU[cU + QU] = UU[XU + QU]
    }

    function yU(UU, XU, zU, cU) {
      var yU;
      for (yU = 0; yU < cU; yU++) UU[XU + yU] = UU[XU - zU + yU]
    }

    function QU(UU) {
      this.array = UU, this.pos = 0
    }
    QU.prototype.readUncompressedLength = function() {
      for (var UU, XU, zU = 0, cU = 0; cU < 32 && this.pos < this.array.length;) {
        if (UU = this.array[this.pos], this.pos += 1, (XU = 127 & UU) << cU >>> cU !== XU) return -1;
        if (zU |= XU << cU, UU < 128) return zU;
        cU += 7
      }
      return -1
    }, QU.prototype.uncompressToBuffer = function(UU) {
      for (var XU, QU, AU, FU, oU = this.array, DU = oU.length, EU = this.pos, YU = 0; EU < oU.length;)
        if (XU = oU[EU], EU += 1, 0 === (3 & XU)) {
          if ((QU = 1 + (XU >>> 2)) > 60) {
            if (EU + 3 >= DU) return !1;
            AU = QU - 60, QU = 1 + ((QU = oU[EU] + (oU[EU + 1] << 8) + (oU[EU + 2] << 16) + (oU[EU + 3] << 24)) & zU[AU]), EU += AU
          }
          if (EU + QU > DU) return !1;
          cU(oU, EU, UU, YU, QU), EU += QU, YU += QU
        } else {
          switch (3 & XU) {
            case 1:
              QU = 4 + (XU >>> 2 & 7), FU = oU[EU] + (XU >>> 5 << 8), EU += 1;
              break;
            case 2:
              if (EU + 1 >= DU) return !1;
              QU = 1 + (XU >>> 2), FU = oU[EU] + (oU[EU + 1] << 8), EU += 2;
              break;
            case 3:
              if (EU + 3 >= DU) return !1;
              QU = 1 + (XU >>> 2), FU = oU[EU] + (oU[EU + 1] << 8) + (oU[EU + 2] << 16) + (oU[EU + 3] << 24), EU += 4
          }
          if (0 === FU || FU > YU) return !1;
          yU(UU, YU, FU, QU), YU += QU
        } return !0
    }, XU.b = QU
  },
  40536: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      SessionReplayRecorder: () => hX
    });
    const cU = {
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
        skipLowMemoryDevices: !1
      },
      yU = {
        ...cU,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        skipLowMemoryDevices: !0
      },
      QU = {
        desktop: cU,
        mobile: yU,
        tablet: yU
      };
    var AU = zU(3036),
      FU = zU(31);
    const oU = 4194304,
      DU = 16777216;
    var EU = zU(3788);
    const YU = [2, 4, 9, 3],
      NU = EU.i,
      IU = [NU.MouseInteraction, NU.MouseMove, NU.TouchMove],
      pU = [NU.MouseMove, NU.MouseInteraction, NU.Scroll, NU.ViewportResize, NU.Input, NU.TouchMove, NU.MediaInteraction, NU.Drag],
      aU = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function tU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return !1;
      const XU = UU.timestamp;
      return "number" === typeof XU && XU > 0 && XU <= 864e13
    }
    class gU {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(UU) {
        this.eventCount++;
        const XU = function(UU) {
          var XU;
          return UU.type === EU.e.IncrementalSnapshot ? null === (XU = UU.data) || void 0 === XU ? void 0 : XU.source : void 0
        }(UU);
        this.timestamps.push(UU.timestamp), this.active.push(pU.includes(XU));
        const zU = function(UU) {
          var XU;
          const zU = UU.data;
          if (UU.type === EU.e.Custom && "$json_ld" === (null === zU || void 0 === zU ? void 0 : zU.tag)) return;
          const cU = "string" === typeof(null === zU || void 0 === zU ? void 0 : zU.href) ? zU.href.trim() : void 0,
            yU = "string" === typeof(null === zU || void 0 === zU || null === (XU = zU.payload) || void 0 === XU ? void 0 : XU.href) ? zU.payload.href.trim() : void 0;
          return cU || yU || void 0
        }(UU);
        zU && this.addUrl(zU), XU === NU.MouseInteraction && YU.includes(UU.data.type) && this.clickCount++, XU === NU.Input && this.keypressCount++, IU.includes(XU) && this.mouseActivityCount++;
        const cU = UU.data;
        if (UU.type === EU.e.Plugin && "rrweb/console@1" === (null === cU || void 0 === cU ? void 0 : cU.plugin)) {
          var yU;
          const UU = aU.get(null === (yU = cU.payload) || void 0 === yU ? void 0 : yU.level);
          "warn" === UU ? this.consoleWarnCount++ : "error" === UU ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(UU) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: UU,
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
      addUrl(UU) {
        const XU = UU.slice(0, 4096);
        this.firstUrl ??= XU, this.urls.size < 25 && !this.urls.has(XU) && this.urlsLength + XU.length <= 8192 && (this.urls.add(XU), this.urlsLength += XU.length)
      }
      activeMs() {
        var UU;
        const XU = this.timestamps.map(((UU, XU) => XU)).sort(((UU, XU) => this.timestamps[UU] - this.timestamps[XU]));
        let zU = 0,
          cU = null,
          yU = 0;
        for (const AU of XU) {
          const UU = this.timestamps[AU],
            XU = this.active[AU],
            FU = !cU || XU && !cU.isActive || cU.isActive && yU + 5e3 < UU;
          var QU;
          if (yU = XU ? UU : yU, FU) null !== (QU = cU) && void 0 !== QU && QU.isActive && (zU += Math.max(1, cU.end - cU.start)), cU = {
            start: UU,
            end: UU,
            isActive: XU
          };
          else cU.end = UU
        }
        return null !== (UU = cU) && void 0 !== UU && UU.isActive && (zU += Math.max(1, cU.end - cU.start)), Math.floor(zU)
      }
    }
    const kU = 5592405.333333333;
    class GU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = UU, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new gU, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get kY() {
        return 0 === this.lines.length
      }
      add(UU) {
        const XU = UU.events.filter(tU),
          zU = XU.map((XU => JSON.stringify([UU.windowId, XU]) + "\n"));
        if (0 === zU.length) return [];
        const cU = [],
          yU = zU.reduce(((UU, XU) => UU + XU.length), 0);
        !this.kY && this.chars + yU > this.chunkChars && cU.push(this.finish());
        let QU = !1;
        return XU.forEach(((UU, XU) => {
          const yU = zU[XU];
          !this.kY && this.chars + yU.length > this.chunkChars && (cU.push(this.finish()), QU = !1), QU || (this.counter.addMessage(), QU = !0), this.counter.addEvent(UU), this.lines.push(yU), this.chars += yU.length, this.startMs = Math.min(this.startMs, UU.timestamp), this.endMs = Math.max(this.endMs, UU.timestamp), this.holdsSnapshot ||= UU.type === EU.e.FullSnapshot || UU.type === EU.e.Meta
        })), cU.filter((UU => null !== UU))
      }
      finish() {
        if (this.kY) return null;
        const {
          startMs: UU,
          endMs: XU,
          counter: zU,
          holdsSnapshot: cU,
          chunkIndex: yU,
          tailedChars: QU
        } = this, AU = {
          text: this.lines.join(""),
          startMs: UU,
          endMs: XU,
          counter: zU,
          holdsSnapshot: cU,
          chunkIndex: yU,
          tailedChars: QU
        };
        return this.reset(), AU
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > kU) return null;
        const UU = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, UU
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new gU, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function BU(UU) {
      let {
        text: XU
      } = UU;
      return XU.length <= kU
    }

    function ZU(UU) {
      const {
        text: XU,
        startMs: zU,
        endMs: cU,
        counter: yU,
        chunkIndex: QU,
        tailedChars: AU
      } = UU;
      return AU !== XU.length && BU(UU) ? {
        chunkIndex: QU,
        fromChar: AU,
        text: XU.slice(AU),
        startMs: zU,
        endMs: cU,
        summary: yU.finish(0)
      } : null
    }

    function RU(UU, XU) {
      let {
        startMs: zU,
        endMs: cU,
        counter: yU,
        holdsSnapshot: QU
      } = UU, {
        bytes: AU,
        inflatedBytes: FU
      } = XU;
      return AU.byteLength > oU || FU > DU ? (console.warn(`Session replay: dropped a ${FU}-byte page recording chunk, over the size limits`), null) : {
        bytes: AU,
        startMs: zU,
        endMs: cU,
        summary: yU.finish(FU),
        holdsSnapshot: QU
      }
    }
    var PU = zU(40543);
    class WU {
      constructor(UU, XU, zU, cU) {
        this.uploader = UU, this.timing = XU, this.journal = zU, this.packer = cU, this.writer = new GU, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(UU) {
        this.pack(this.writer.add(UU)), (this.cutNext || this.timing.cutsEachBatch()) && (this.cutNext = !1, this.cut());
        const XU = this.journal;
        null === XU || null !== this.tailTimer || this.writer.kY || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const UU = this.writer.takeTail();
          null !== UU && XU.domTail(UU)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const UU = this.writer.finish();
        this.pack(null === UU ? [] : [UU])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.kY) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const UU = this.packing[this.packing.length - 1];
        return void 0 !== UU ? new Promise((XU => {
          const zU = UU.onQueued;
          UU.onQueued = () => {
            null === zU || void 0 === zU || zU(), XU()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(UU) {
        const XU = UU.filter((UU => {
            const XU = function(UU) {
              let {
                text: XU
              } = UU;
              return XU.length <= DU || (console.warn(`Session replay: dropped a page recording chunk of ${XU.length} characters, over the size limits`), !1)
            }(UU);
            var zU;
            XU || (null === (zU = this.journal) || void 0 === zU || zU.domTailDropped(UU.chunkIndex));
            return XU
          })),
          zU = this.journalWorks() && XU.every((UU => BU(UU))) && this.packing.every((UU => UU.journalled));
        if (this.timing.packsNow(zU)) {
          for (const UU of XU) this.packing.push({
            text: UU,
            packed: null,
            journalled: this.tailHolds(UU)
          });
          for (const UU of [...this.packing]) this.packHere(UU);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const cU of XU) {
          const UU = null === this.journal ? null : ZU(cU);
          null !== UU && this.journal.domTail(UU);
          const XU = {
            text: cU,
            packed: null,
            journalled: this.tailHolds(cU)
          };
          this.packing.push(XU), this.packer.pack(cU.text).then((UU => {
            XU.packed = UU, this.queuePacked()
          }), (() => {
            this.packHere(XU), this.queuePacked()
          }))
        }
      }
      packHere(UU) {
        const XU = this.packing.indexOf(UU);
        if (!(XU < 0)) try {
          UU.packed ??= (0, PU.b)(UU.text.text)
        } catch (yU) {
          var zU, cU;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", yU), this.packing.splice(XU, 1), null === (zU = this.journal) || void 0 === zU || zU.domTailDropped(UU.text.chunkIndex), null === (cU = UU.onQueued) || void 0 === cU || cU.call(UU)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(UU) {
        return this.journalWorks() && BU(UU)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: UU,
            packed: XU,
            onQueued: zU
          } = this.packing.shift();
          this.enqueue(UU.chunkIndex, RU(UU, XU)), null === zU || void 0 === zU || zU()
        }
      }
      enqueue(UU, XU) {
        var zU;
        if (null === XU) return void(null === (zU = this.journal) || void 0 === zU || zU.domTailDropped(UU));
        const {
          startMs: cU,
          endMs: yU,
          summary: QU,
          holdsSnapshot: AU
        } = XU, FU = XU.bytes.buffer, oU = {
          startMs: cU,
          endMs: yU,
          byteLength: FU.byteLength,
          summary: QU
        }, DU = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: FU,
          meta: {
            type: "dom",
            chunk: oU
          },
          dropLast: AU
        });
        var EU, YU;
        null === DU ? null === (EU = this.journal) || void 0 === EU || EU.domTailDropped(UU) : null === (YU = this.journal) || void 0 === YU || YU.domQueued(DU, FU, oU, UU)
      }
    }
    var dU = zU(40569);
    var LU = zU(40573),
      eU = zU(97),
      CU = zU(111),
      wU = zU(42),
      qU = zU(5123);
    const OU = {
      logStats: !1
    };

    function SU(UU) {
      const XU = wU.k.getItem(UU);
      return "number" === typeof XU && Number.isFinite(XU) ? XU : null
    }

    function rU(UU, XU, zU, cU) {
      const yU = wU.k.getItem(UU);
      return yU === XU ? [(0, eU.getOperatingSystem)()] : yU === zU ? [] : cU
    }
    const uU = "/v1/release",
      fU = oU;
    var iU = zU(1220),
      HU = zU(40578),
      MU = zU(40586),
      vU = zU(40594);

    function VU(UU) {
      return `replayJoiner/${UU}`
    }
    class sU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HU.d;
        this.baseUrl = UU, this.keepalive = XU
      }
      postPart(UU, XU) {
        const zU = (0, MU.d)(UU, XU),
          cU = 15e3 + (yU = zU.size, Math.ceil(yU / 16384 * 1e3));
        var yU;
        return this.post("/v1/part", zU, zU.size, cU, UU.sequence)
      }
      finish(UU) {
        const XU = JSON.stringify(UU);
        return this.post("/v1/finish", XU, (0, HU.e)(XU), 3e4, UU.sequence)
      }
      release(UU) {
        return !this.keepalive.isInFlight(VU(UU.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${uU}`, JSON.stringify(UU))
      }
      async post(UU, XU, zU, cU, yU) {
        const QU = `${this.baseUrl}${UU}`,
          AU = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: XU,
            signal: (0, iU.n)(cU)
          },
          FU = zU <= HU.c ? await this.keepalive.fetch(QU, AU, zU, VU(yU)) : await fetch(QU, AU);
        if (!FU.ok) throw new vU.b(`Part joiner ${UU} failed with ${FU.status}`, FU.status);
        return await FU.json()
      }
    }

    function nU(UU) {
      return {
        releaseUrl: `${UU.url}${uU}`,
        token: UU.token,
        relay: {
          url: `${UU.url}/v1/relay`,
          maxBytes: fU
        }
      }
    }
    var mU = zU(7103),
      lU = zU(40603),
      xU = zU(40607),
      JU = zU(40613);

    function jU() {
      return (0, LU.d)().manifestUrl
    }
    const KU = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class bU {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = XU, this.sendEnabled = zU, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...KU,
          ...cU
        };
        const yU = Math.round((0, lU.d)());
        this.manifest = {
          recordingId: UU,
          startedAtMs: yU,
          endedAtMs: yU,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(UU, XU, zU) {
        const cU = {
            sequence: UU,
            ...XU,
            startMs: Math.round(XU.startMs),
            endMs: Math.round(XU.endMs),
            ...null === zU ? {} : {
              parts: zU
            }
          },
          yU = this.manifest.videoSegments.findIndex((XU => XU.sequence === UU)); - 1 === yU ? this.manifest.videoSegments.push(cU) : this.manifest.videoSegments[yU] = cU, this.sendSoon()
      }
      setStill(UU, XU) {
        var zU, cU;
        UU > (null !== (zU = null === (cU = this.manifest.still) || void 0 === cU ? void 0 : cU.atMs) && void 0 !== zU ? zU : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(UU),
          sequence: XU
        }, this.sendSoon())
      }
      addTelemetrySegment(UU, XU, zU) {
        this.manifest.telemetrySegments.push({
          sequence: UU,
          startMs: Math.round(XU),
          endMs: Math.round(zU)
        }), this.sendSoon()
      }
      addDomSegment(UU) {
        this.pendingDom.add(UU), this.sendSoon()
      }
      addCreatorGrant(UU, XU) {
        this.creatorGrants.set(UU, XU)
      }
      gameJoined(UU) {
        this.gameLeft(), this.manifest.games.push({
          ...UU,
          joinedAtMs: Math.round((0, lU.d)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(UU) {
        const XU = this.manifest.games.at(-1);
        return !(!XU || (null === UU ? null !== XU.leftAtMs : XU.gameNameWithVariation !== UU)) && (XU.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(UU) {
        const XU = this.manifest.games.at(-1);
        XU && null === XU.leftAtMs && (XU[UU] = !0)
      }
      updateCurrentStay(UU) {
        var XU, zU, cU;
        const yU = this.manifest.games.at(-1);
        if (!yU || null !== yU.leftAtMs) return !1;
        const QU = (0, mU.i)(yU.furthestStep, UU.furthestStep),
          AU = Math.max(null !== (XU = yU.unboundKeyPresses) && void 0 !== XU ? XU : 0, null !== (zU = UU.unboundKeyPresses) && void 0 !== zU ? zU : 0);
        return (QU !== yU.furthestStep || AU !== (null !== (cU = yU.unboundKeyPresses) && void 0 !== cU ? cU : 0)) && (void 0 !== QU && (yU.furthestStep = QU), AU > 0 && (yU.unboundKeyPresses = AU), !0)
      }
      gameLeft() {
        const UU = this.manifest.games.at(-1);
        UU && null === UU.leftAtMs && (UU.leftAtMs = Math.round((0, lU.d)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(UU) {
        this.schedule(1e3, UU)
      }
      send() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var XU;
        if (this.sending) return void(this.queuedSend = TU(null !== (XU = this.queuedSend) && void 0 !== XU ? XU : [], UU));
        const zU = this.prepareSend(UU);
        null !== zU && (this.sending = !0, this.postInTurn(zU).then((UU => {
          this.sending = !1, this.retries = "retryLater" === UU ? this.retries + 1 : 0;
          const XU = this.queuedSend;
          null !== XU ? (this.queuedSend = null, this.send(XU)) : "retryLater" === UU && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: zU
          }
          of null !== (XU = this.prepareSend(UU)) && void 0 !== XU ? XU : []) {
          var XU;
          HU.d.sendBeacon(jU(), JSON.stringify(zU)) || (0, xU.b)(jU(), zU)
        }
      }
      async postInTurn(UU) {
        for (const {
            request: XU,
            items: zU
          }
          of UU) {
          const UU = await (0, xU.b)(jU(), XU);
          if ("retryLater" === UU) return UU;
          for (const XU of zU) XU.ack("uploaded" === UU);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(UU, XU) {
        const zU = Date.now() + UU;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= zU) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const cU = setTimeout((() => {
          this.send(XU())
        }), UU);
        this.sendTimer = {
          timer: cU,
          dueMs: zU
        }
      }
      prepareSend(UU) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, lU.d)());
        const XU = this.pendingItems(UU);
        this.options.onSend({
          ...this.manifest,
          games: XU.flatMap((UU => "games" === UU.list ? [UU.value] : []))
        });
        const {
          recordingId: zU,
          startedAtMs: cU,
          endedAtMs: yU,
          still: QU
        } = this.manifest, AU = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: zU,
            startedAtMs: cU,
            endedAtMs: yU,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === QU ? {} : {
              still: QU
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, JU.d)(AU, XU)
      }
      pendingItems(UU) {
        const XU = [];
        for (const cU of this.creatorGrants.values()) this.ackedGrants.has(cU) || XU.push({
          list: "creatorGrants",
          value: cU,
          ack: () => {
            this.ackedGrants.add(cU)
          }
        });
        for (const cU of this.manifest.games) {
          const UU = JSON.stringify(cU);
          this.ackedGames.get(cU) !== UU && XU.push({
            list: "games",
            value: {
              ...cU
            },
            ack: () => {
              this.ackedGames.set(cU, UU)
            }
          })
        }
        for (const cU of this.manifest.videoSegments) this.ackedVideo.get(cU.sequence) !== cU && XU.push({
          list: "videoSegments",
          value: cU,
          ack: UU => {
            this.ackedVideo.set(cU.sequence, cU), UU && this.options.onListed({
              list: "videoSegments",
              value: cU
            })
          }
        });
        const zU = new Set;
        for (const cU of this.manifest.telemetrySegments) zU.add(cU.sequence), this.ackedTelemetry.has(cU) || XU.push({
          list: "telemetrySegments",
          value: cU,
          ack: UU => {
            this.ackedTelemetry.add(cU), UU && this.options.onListed({
              list: "telemetrySegments",
              value: cU
            })
          }
        });
        for (const cU of this.pendingDom) XU.push({
          list: "domSegments",
          value: cU,
          ack: UU => {
            this.pendingDom.delete(cU), UU && this.options.onListed({
              list: "domSegments",
              value: cU
            })
          }
        });
        for (const cU of TU([], UU)) zU.has(cU.sequence) || XU.push({
          list: "telemetrySegments",
          value: cU,
          ack: () => {}
        });
        return XU
      }
    }

    function TU(UU, XU) {
      const zU = [...UU];
      for (const cU of XU) zU.some((UU => UU.sequence === cU.sequence)) || zU.push({
        sequence: cU.sequence,
        startMs: Math.round(cU.startMs),
        endMs: Math.round(cU.endMs)
      });
      return zU
    }
    var hU = zU(40576),
      UX = zU(5139);

    function XX(UU) {
      return {
        ...UU,
        videoSegments: [],
        telemetrySegments: [],
        games: UU.games.map((UU => ({
          ...UU
        })))
      }
    }
    class zX {
      constructor(UU, XU, zU, cU) {
        var yU;
        this.journal = UU, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: XU.recordingId,
          uploadToken: XU.uploadToken,
          expiresAtMs: XU.expiresAtMs,
          nextVideoSequence: 0,
          manifest: XX(zU),
          endpoints: cU,
          lateUploadUntilMs: XU.expiresAtMs + hU.e,
          ...void 0 === XU.partJoiner ? {} : {
            partJoiner: nU(XU.partJoiner)
          }
        }, null === (yU = navigator.locks) || void 0 === yU || yU.request((0, UX.v)(XU.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(UU) {
        this.record.manifest = XX(UU), this.putRecording()
      }
      videoQueued(UU, XU) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, XU + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), UU, XU)
      }
      videoPartLanded(UU, XU, zU) {
        this.landedVideo.set(UU, {
          segmentId: UU,
          ...XU
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: UU,
          ...XU
        }, zU)
      }
      telemetryQueued(UU, XU, zU, cU) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: UU,
          startMs: zU,
          endMs: cU,
          bytes: XU
        })
      }
      videoUploaded(UU) {
        this.journal.removeVideoChunks(this.record.recordingId, UU)
      }
      videoSettled(UU) {
        this.landedVideo.delete(UU), this.journal.removeVideo(this.record.recordingId, UU)
      }
      telemetryLanded(UU, XU, zU, cU) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: UU,
          startMs: zU,
          endMs: cU,
          bytes: XU,
          landed: !0
        })
      }
      telemetrySettled(UU) {
        this.journal.removeTelemetry(this.record.recordingId, UU)
      }
      domQueued(UU, XU, zU, cU) {
        var yU;
        this.record.nextDomSequence = Math.max(null !== (yU = this.record.nextDomSequence) && void 0 !== yU ? yU : 0, UU + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: UU,
          chunk: zU,
          bytes: XU
        }, cU)
      }
      domTail(UU) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...UU
        })
      }
      domTailDropped(UU) {
        this.journal.removeDomTail(this.record.recordingId, UU)
      }
      domLanded(UU, XU) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: UU,
          chunk: XU,
          bytes: null
        })
      }
      domSettled(UU) {
        this.journal.removeDom(this.record.recordingId, UU)
      }
      setMarker() {
        wU.k.setItem(UX.k, !0)
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
    class cX {
      constructor(UU) {
        this.deps = UU, this.pageHiding = !1
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(UU) {
        document.addEventListener("visibilitychange", (() => {
          const UU = document.hidden;
          this.deps.writeEvent(UU ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: UU
          }), UU && (this.deps.flushTelemetry(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording())
        }), {
          signal: UU
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: UU
        }), window.addEventListener("pagehide", (UU => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.deps.flushTelemetry(), this.deps.stills.beacon(), this.sendManifest(), UU.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: UU
        })
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((UU => {
          let {
            sequence: XU,
            meta: zU
          } = UU;
          return "telemetry" === zU.type ? [{
            sequence: XU,
            startMs: zU.startMs,
            endMs: zU.endMs
          }] : []
        }))
      }
    }
    var yX = zU(36961),
      QX = zU.n(yX);

    function AX() {
      return QX()('/*! For license information please see sessionReplayVideo.worker.2385deca.worker.js.LICENSE.txt */\n(()=>{var UU={12:()=>{}},XU={};function zU(cU){var yU=XU[cU];if(void 0!==yU)return yU.exports;var QU=XU[cU]={exports:{}};return UU[cU](QU,QU.exports,zU),QU.exports}(()=>{var UU,XU=Object.getPrototypeOf?UU=>Object.getPrototypeOf(UU):UU=>UU.__proto__;zU.t=function(cU,yU){if(1&yU&&(cU=this(cU)),8&yU)return cU;if("object"===typeof cU&&cU){if(4&yU&&cU.__esModule)return cU;if(16&yU&&"function"===typeof cU.then)return cU}var QU=Object.create(null);zU.r(QU);var AU={};UU=UU||[null,XU({}),XU([]),XU(XU)];for(var FU=2&yU&&cU;"object"==typeof FU&&!~UU.indexOf(FU);FU=XU(FU))Object.getOwnPropertyNames(FU).forEach((UU=>AU[UU]=()=>cU[UU]));return AU.default=()=>cU,zU.d(QU,AU),QU}})(),zU.d=(UU,XU)=>{for(var cU in XU)zU.o(XU,cU)&&!zU.o(UU,cU)&&Object.defineProperty(UU,cU,{enumerable:!0,get:XU[cU]})},zU.o=(UU,XU)=>Object.prototype.hasOwnProperty.call(UU,XU),zU.r=UU=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(UU,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(UU,"__esModule",{value:!0})};const cU="bloxdSessionReplayTails";const yU=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function QU(UU){return new Promise(((XU,zU)=>{UU.onsuccess=()=>{XU(UU.result)},UU.onerror=()=>{zU(UU.error)}}))}function AU(UU){return new Promise(((XU,zU)=>{UU.oncomplete=()=>{XU()},UU.onerror=()=>{zU(UU.error)},UU.onabort=()=>{var XU;zU(null!==(XU=UU.error)&&void 0!==XU?XU:new Error("IndexedDB transaction aborted"))}}))}function FU(UU){return IDBKeyRange.bound([UU],[UU,[]])}function oU(UU,XU){return IDBKeyRange.bound([UU,XU],[UU,XU,[]])}class DU{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(UU){this.write(["recordings"],(XU=>{XU.objectStore("recordings").put(UU)}))}putVideoSequence(UU,XU,zU){this.write(["recordings","videoSequences"],(cU=>{cU.objectStore("recordings").put(UU),cU.objectStore("videoSequences").put({recordingId:UU.recordingId,segmentId:XU,sequence:zU})}))}appendVideo(UU,XU){this.write(["videoHeaders","videoChunks"],(zU=>{zU.objectStore("videoHeaders").put(UU);const cU=zU.objectStore("videoChunks");for(const UU of XU)cU.put(UU)}))}putVideoProgress(UU,XU){this.write(["videoProgress","videoChunks"],(zU=>{if(zU.objectStore("videoProgress").put(UU),XU>0){const{recordingId:cU,segmentId:yU}=UU;zU.objectStore("videoChunks").delete(IDBKeyRange.bound([cU,yU,0],[cU,yU,XU],!1,!0))}}))}removeVideoChunks(UU,XU){this.write(["videoChunks"],(zU=>{zU.objectStore("videoChunks").delete(oU(UU,XU))}))}removeVideo(UU,XU){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(zU=>{zU.objectStore("videoHeaders").delete([UU,XU]),zU.objectStore("videoChunks").delete(oU(UU,XU)),zU.objectStore("videoSequences").delete([UU,XU]),zU.objectStore("videoProgress").delete([UU,XU])}))}putTelemetry(UU){this.write(["telemetry"],(XU=>{XU.objectStore("telemetry").put(UU)}))}removeTelemetry(UU,XU){this.write(["telemetry"],(zU=>{zU.objectStore("telemetry").delete([UU,XU])}))}putDom(UU){this.write(["dom"],(XU=>{XU.objectStore("dom").put(UU)}))}queueDom(UU,XU,zU){this.write(["recordings","dom","domTail"],(cU=>{cU.objectStore("recordings").put(UU),cU.objectStore("dom").put(XU),cU.objectStore("domTail").delete(oU(XU.recordingId,zU))}),(cU=>{console.warn(`Session replay couldn\'t journal page recording chunk ${XU.sequence}; a closing tab may lose it.`,cU),this.write(["recordings","domTail"],(cU=>{cU.objectStore("recordings").put(UU),cU.objectStore("domTail").delete(oU(XU.recordingId,zU))}))}))}putDomTail(UU){this.tailRecordings.add(UU.recordingId),this.write(["domTail"],(XU=>{XU.objectStore("domTail").put(UU)}))}removeDomTail(UU,XU){this.write(["domTail"],(zU=>{zU.objectStore("domTail").delete(oU(UU,XU))}))}removeDom(UU,XU){this.write(["dom"],(zU=>{zU.objectStore("dom").delete([UU,XU])}))}async listRecordings(){const UU=await this.open();return await QU(UU.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(UU){const XU=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),zU=FU(UU.recordingId),cU=UU=>QU(XU.objectStore(UU).getAll(zU)),[yU,AU,oU,DU,EU,YU,NU]=await Promise.all([cU("videoHeaders"),cU("videoChunks"),cU("videoSequences"),cU("videoProgress"),cU("telemetry"),cU("dom"),cU("domTail")]);return{recording:UU,telemetry:EU,dom:YU,domTails:NU,video:yU.map((UU=>{var XU,zU,cU;return{header:UU,sequence:null!==(XU=null===(zU=oU.find((XU=>XU.segmentId===UU.segmentId)))||void 0===zU?void 0:zU.sequence)&&void 0!==XU?XU:null,progress:null!==(cU=DU.find((XU=>XU.segmentId===UU.segmentId)))&&void 0!==cU?cU:null,chunks:AU.filter((XU=>XU.segmentId===UU.segmentId))}}))}}async deleteRecording(UU){const XU=(await this.open()).transaction([...yU],"readwrite");XU.objectStore("recordings").delete(UU);for(const zU of yU.slice(1))XU.objectStore(zU).delete(FU(UU));await AU(XU)}async forgetSent(UU,XU){const zU=(await this.open()).transaction([...yU],"readwrite"),{recordingId:cU}=UU;zU.objectStore("recordings").put(UU);for(const yU of XU.videoSegmentIds)zU.objectStore("videoHeaders").delete([cU,yU]),zU.objectStore("videoChunks").delete(oU(cU,yU)),zU.objectStore("videoSequences").delete([cU,yU]),zU.objectStore("videoProgress").delete([cU,yU]);for(const yU of XU.telemetrySequences)zU.objectStore("telemetry").delete([cU,yU]);for(const yU of XU.domSequences)zU.objectStore("dom").delete([cU,yU]);for(const yU of XU.domTailChunks)zU.objectStore("domTail").delete(oU(cU,yU));await AU(zU)}write(UU,XU){let zU=arguments.length>2&&void 0!==arguments[2]?arguments[2]:UU=>{this.fail(UU)};if(this.failed)return;const cU=cU=>{try{var yU;const QU=cU.transaction(UU,"readwrite");XU(QU),null===(yU=QU.commit)||void 0===yU||yU.call(QU),AU(QU).catch(zU)}catch(QU){zU(QU)}};null===this.db?this.open().then(cU,(UU=>{this.fail(UU)})):cU(this.db)}fail(UU){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",UU),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const UU=UU=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",UU)};try{const XU=this.db.transaction(["domTail"],"readwrite");for(const UU of this.tailRecordings)XU.objectStore("domTail").delete(FU(UU));AU(XU).catch(UU)}catch(XU){UU(XU)}}open(){return this.opening??=new Promise(((UU,XU)=>{const zU=indexedDB.open(cU,4);zU.onupgradeneeded=UU=>{const XU=zU.result;UU.oldVersion<1&&(XU.createObjectStore("recordings",{keyPath:"recordingId"}),XU.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),XU.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),XU.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),XU.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),UU.oldVersion<2&&XU.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),UU.oldVersion<3&&XU.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),XU.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let yU=!1;zU.onblocked=()=>{yU=!0,XU(new Error("An older tab holds the upload journal at an earlier version"))},zU.onsuccess=()=>{yU?zU.result.close():(this.db=zU.result,this.db.onversionchange=()=>{var UU;this.dropTails(),null===(UU=this.db)||void 0===UU||UU.close(),this.db=null,this.opening=null},UU(zU.result))},zU.onerror=()=>{XU(zU.error)}})),this.opening}}const EU=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class YU{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return EU[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(UU){this.firstSampleMs??=UU.nowMs;const XU=null!==UU.pingMs&&UU.pingMs>300,zU=UU.nowMs-this.firstSampleMs>=3e4;zU&&(null!==UU.gameFps&&UU.gameFps<24||XU)?this.gameStrugglingSinceMs??=UU.nowMs:this.gameStrugglingSinceMs=null,zU&&UU.encoderBackpressureDrops>0?this.backpressureSinceMs??=UU.nowMs:this.backpressureSinceMs=null;const cU=null!==this.backpressureSinceMs&&UU.nowMs-this.backpressureSinceMs>=3e3,yU=cU||null!==this.gameStrugglingSinceMs&&UU.nowMs-this.gameStrugglingSinceMs>=1e4,QU=this.steppedDownForGameFps?45:24,AU=0===UU.encoderBackpressureDrops&&!XU&&(null===UU.gameFps||UU.gameFps>=QU);return yU?(this.healthySinceMs=null,this.level<EU.length-1&&UU.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=UU.nowMs,this.lastChangeReason=cU?"encoderBackpressure":XU?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):AU&&0!==this.level?(this.healthySinceMs??=UU.nowMs,UU.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=UU.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function NU(UU,XU){return UU.width===XU.width&&UU.height===XU.height}function IU(UU){return Math.max(2,2*Math.floor(UU/2))}function pU(UU){return Math.ceil(UU.width/16)*Math.ceil(UU.height/16)}function aU(UU,XU,zU){const cU=UU.bitrate*pU(XU)/UU.maxMacroblocks;return zU*Math.min(UU.bitrate,Math.max(UU.minBitrate,cU/zU))}class tU{constructor(UU){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/UU}setMaxFps(UU){this.intervalMs=1e3/UU}shouldKeep(UU){return!(UU<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=UU-this.nextDueMs>this.intervalMs?UU+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const gU=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],kU=["variable","constant"],GU=["realtime","quality"];class BU{constructor(){this.canvas=null,this.context=null}scale(UU,XU){if(UU.displayWidth===XU.width&&UU.displayHeight===XU.height)return UU;return this.contextFor(XU).drawImage(UU,0,0,XU.width,XU.height),new VideoFrame(this.canvas,{timestamp:UU.timestamp,alpha:"discard"})}contextFor(UU){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(UU.width,UU.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===UU.width&&this.canvas.height===UU.height||(this.canvas.width=UU.width,this.canvas.height=UU.height),this.context}}const ZU=[...[.7,.6,.5,.42,.35].map((UU=>({width:640,quality:UU}))),{width:480,quality:.35},{width:360,quality:.35}],RU=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class PU{constructor(UU,XU){this.steps=UU,this.targetBytes=XU,this.index=0}get step(){return this.steps[this.index]}record(UU){UU>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):UU<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class WU{constructor(UU){this.post=UU,this.full=new PU(ZU,28e3),this.small=new PU(RU,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(UU,XU){if(!(this.failed||this.encoding||UU.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=UU.timestamp;try{const zU=dU(UU,UU.displayWidth,UU.displayHeight,this.full.step.width),cU=dU(zU,zU.width,zU.height,this.small.step.width);this.encoding=!0,this.encode(zU,cU,XU).finally((()=>{this.encoding=!1}))}catch(zU){this.fail(zU)}}}async encode(UU,XU,zU){try{const[cU,yU]=await Promise.all([UU.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),XU.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(cU.size),this.small.record(yU.size);const QU=await cU.arrayBuffer(),AU=yU.size<=8192?await yU.arrayBuffer():null;this.post({type:"still",bytes:QU,small:AU,atMs:zU},null===AU?[QU]:[QU,AU])}catch(cU){this.fail(cU)}}fail(UU){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",UU)}}function dU(UU,XU,zU,cU){const yU=Math.min(cU,XU),QU=Math.max(1,Math.round(zU*yU/XU)),AU=new OffscreenCanvas(yU,QU),FU=AU.getContext("2d");if(null===FU)throw new Error("no 2D context");return FU.drawImage(UU,0,0,yU,QU),AU}let LU=Date.now()-performance.now();function eU(){const UU=performance.now(),XU=Date.now();return Math.abs(XU-(UU+LU))>20&&(LU=XU-UU),UU+LU}function CU(UU){if(!UU)throw new Error("Assertion failed.")}const wU=Math.PI/180,qU=(Math.PI,[1,0,0,0,1,0,0,0,1]),OU=UU=>{const XU=UU*wU,zU=Math.round(Math.cos(XU)),cU=Math.round(Math.sin(XU));return[zU,cU,0,-cU,zU,0,0,0,1]},SU=(UU,XU)=>[1,0,0,0,1,0,UU,XU,1],rU=(UU,XU)=>{const zU=new Array(9);for(let cU=0;cU<3;cU++)for(let yU=0;yU<3;yU++)zU[3*cU+yU]=UU[3*cU]*XU[yU]+UU[3*cU+1]*XU[3+yU]+UU[3*cU+2]*XU[6+yU];return zU},uU=UU=>UU&&UU[UU.length-1],fU=UU=>UU>=0&&UU<2**32,iU=UU=>{let XU=0;for(;0===UU.readBits(1)&&XU<32;)XU++;if(XU>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<XU)-1+UU.readBits(XU)},HU=UU=>{const XU=iU(UU);return 0===(1&XU)?-(XU>>1):XU+1>>1},MU=UU=>UU.constructor===Uint8Array?UU:ArrayBuffer.isView(UU)?new Uint8Array(UU.buffer,UU.byteOffset,UU.byteLength):new Uint8Array(UU),vU=UU=>UU.constructor===DataView?UU:ArrayBuffer.isView(UU)?new DataView(UU.buffer,UU.byteOffset,UU.byteLength):new DataView(UU),VU="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let UU=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const XU=new Uint8Array(3*UU.length);let zU=0;for(let cU=0;cU<UU.length;cU++){let yU=UU.charCodeAt(cU);if(yU<128)XU[zU++]=yU;else if(yU<2048)XU[zU++]=192|yU>>6,XU[zU++]=128|63&yU;else if(yU<55296||yU>57343)XU[zU++]=224|yU>>12,XU[zU++]=128|yU>>6&63,XU[zU++]=128|63&yU;else{const QU=cU+1<UU.length?UU.charCodeAt(cU+1):0;yU<56320&&QU>=56320&&QU<=57343?(yU=65536+(yU-55296<<10)+(QU-56320),cU++,XU[zU++]=240|yU>>18,XU[zU++]=128|yU>>12&63,XU[zU++]=128|yU>>6&63,XU[zU++]=128|63&yU):(XU[zU++]=239,XU[zU++]=191,XU[zU++]=189)}}return XU.slice(0,zU)}},sU=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new VU),nU={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},mU={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},lU={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},xU=UU=>!UU||null==UU.primaries&&null==UU.transfer&&null==UU.matrix&&null==UU.fullRange,JU=UU=>UU instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&UU instanceof SharedArrayBuffer||ArrayBuffer.isView(UU);class jU{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let UU;const XU=new Promise((XU=>{let zU=!1;UU=()=>{zU||(XU(),this.pending--,zU=!0)}})),zU=this.currentPromise;return this.currentPromise=XU,this.pending++,await zU,UU}}const KU=()=>{let UU,XU;return{promise:new Promise(((zU,cU)=>{UU=zU,XU=cU})),resolve:UU,reject:XU}},bU=UU=>{throw new Error(`Unexpected value: ${UU}`)},TU=(UU,XU,zU,cU)=>{zU>>>=0,zU&=16777215,cU?(UU.setUint8(XU,255&zU),UU.setUint8(XU+1,zU>>>8&255),UU.setUint8(XU+2,zU>>>16&255)):(UU.setUint8(XU,zU>>>16&255),UU.setUint8(XU+1,zU>>>8&255),UU.setUint8(XU+2,255&zU))},hU="und",UX=UU=>{let XU=0;for(;0!==UU;)UU&=UU-1,XU++;return XU},XX=/^[a-z]{3}$/,zX=1e6*(1+Number.EPSILON);const cX=(async()=>{})().constructor,yX=UU=>UU instanceof cX||UU instanceof Promise||"function"===typeof UU?.then,QX=function*(UU){for(const XU in UU){const zU=UU[XU];void 0!==zU&&(yield{key:XU,value:zU})}},AX=UU=>"number"===typeof UU&&!Number.isNaN(UU),FX=UU=>{CU(Number.isInteger(UU.num)),CU(Number.isInteger(UU.den)),CU(0!==UU.den);let XU=Math.abs(UU.num),zU=Math.abs(UU.den);for(;0!==zU;){const UU=XU%zU;XU=zU,zU=UU}const cU=XU||1;return{num:UU.num/cU,den:UU.den/cU}};new Map,new Map;const oX=UU=>Array.isArray(UU)?UU:[UU];class DX{constructor(){this._listeners=new Map}on(UU,XU,zU){this._listeners.has(UU)||this._listeners.set(UU,new Set);const cU={FY:XU,once:zU?.once??!1};return this._listeners.get(UU).add(cU),()=>{this._listeners.get(UU)?.delete(cU)}}_emit(){for(var UU=arguments.length,XU=new Array(UU),zU=0;zU<UU;zU++)XU[zU]=arguments[zU];const[cU,yU]=XU,QU=this._listeners.get(cU);if(QU)for(const FU of QU){try{FU.FY(yU)}catch(AU){console.error(AU)}FU.once&&QU.delete(FU)}}}const EX=UU=>null!==UU&&"object"===typeof UU&&Object.getPrototypeOf(UU)===Object.prototype&&Object.values(UU).every((UU=>"string"===typeof UU));class YX{constructor(UU,XU){if(this.data=UU,this.mimeType=XU,!(UU instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof XU)throw new TypeError("mimeType must be a string.")}}class NX{constructor(UU,XU,zU,cU){if(this.data=UU,this.mimeType=XU,this.name=zU,this.description=cU,!(UU instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==XU&&"string"!==typeof XU)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==zU&&"string"!==typeof zU)throw new TypeError("name, when provided, must be a string.");if(void 0!==cU&&"string"!==typeof cU)throw new TypeError("description, when provided, must be a string.")}}class IX{constructor(UU){this.bytes=UU,this.pos=0}seekToByte(UU){this.pos=8*UU}readBit(){const UU=Math.floor(this.pos/8),XU=this.bytes[UU]??0,zU=7-(7&this.pos),cU=(XU&1<<zU)>>zU;return this.pos++,cU}readBits(UU){if(1===UU)return this.readBit();let XU=0;for(let zU=0;zU<UU;zU++)XU<<=1,XU|=this.readBit();return XU}writeBits(UU,XU){const zU=this.pos+UU;for(let cU=this.pos;cU<zU;cU++){const UU=Math.floor(cU/8);let yU=this.bytes[UU];const QU=7-(7&cU);yU&=~(1<<QU),yU|=(XU&1<<zU-cU-1)>>zU-cU-1<<QU,this.bytes[UU]=yU}this.pos=zU}copyBits(UU,XU){let zU=0;for(;zU<UU-7;zU+=8)this.writeBits(8,XU.readBits(8));const cU=UU-zU;cU>0&&this.writeBits(cU,XU.readBits(cU))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const UU=this.pos/8,XU=this.bytes[UU]??0;return this.pos+=8,XU}skipBits(UU){this.pos+=UU}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const UU=new IX(this.bytes);return UU.pos=this.pos,UU}}const pX=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],aX=[-1,1,2,3,4,5,6,8],tX=UU=>{const XU=5===UU.objectType||29===UU.objectType,zU=29===UU.objectType,cU=XU?UU.outputSampleRate/2:UU.outputSampleRate,yU=zU?1:UU.outputNumberOfChannels,QU=aX.indexOf(yU);if(-1===QU)throw new TypeError(`Unsupported number of channels: ${UU.outputNumberOfChannels}`);let AU=16;UU.objectType>=32&&(AU+=6),15===GX(cU)&&(AU+=24),XU&&(AU+=9,15===GX(UU.outputSampleRate)&&(AU+=24));const FU=Math.ceil(AU/8),oU=new Uint8Array(FU),DU=new IX(oU);return gX(DU,UU.objectType),kX(DU,cU),DU.writeBits(4,QU),XU&&(kX(DU,UU.outputSampleRate),gX(DU,2)),DU.writeBits(3,0),oU},gX=(UU,XU)=>{XU<32?UU.writeBits(5,XU):(UU.writeBits(5,31),UU.writeBits(6,XU-32))},kX=(UU,XU)=>{const zU=GX(XU);UU.writeBits(4,zU),15===zU&&UU.writeBits(24,XU)},GX=UU=>{const XU=pX.indexOf(UU);return-1===XU?15:XU};var BX;!function(UU){UU[UU.Silent=0]="Silent",UU[UU.Errors=1]="Errors",UU[UU.Warnings=2]="Warnings",UU[UU.Info=3]="Info"}(BX||(BX={}));class ZX{constructor(){}static get level(){return ZX._level}static set level(UU){if(UU!==BX.Silent&&UU!==BX.Errors&&UU!==BX.Warnings&&UU!==BX.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ZX._level=UU}static get _emitter(){return ZX._emitterInstance??=new DX}static on(UU,XU,zU){return ZX._emitter.on(UU,XU,zU)}static _error(){for(var UU=arguments.length,XU=new Array(UU),zU=0;zU<UU;zU++)XU[zU]=arguments[zU];ZX._emitter._emit("error",XU),ZX._level>=BX.Errors&&console.error(...XU)}static _warn(){for(var UU=arguments.length,XU=new Array(UU),zU=0;zU<UU;zU++)XU[zU]=arguments[zU];ZX._emitter._emit("warn",XU),ZX._level>=BX.Warnings&&console.warn(...XU)}static _info(){for(var UU=arguments.length,XU=new Array(UU),zU=0;zU<UU;zU++)XU[zU]=arguments[zU];ZX._emitter._emit("info",XU),ZX._level>=BX.Info&&console.info(...XU)}}ZX._level=BX.Info,ZX._emitterInstance=null;const RX=[48e3,44100,32e3],PX=[24e3,22050,16e3],WX="Mediabunny v1.61.3";var dX,LX;!function(UU){UU[UU.NON_IDR_SLICE=1]="NON_IDR_SLICE",UU[UU.SLICE_DPA=2]="SLICE_DPA",UU[UU.SLICE_DPB=3]="SLICE_DPB",UU[UU.SLICE_DPC=4]="SLICE_DPC",UU[UU.IDR=5]="IDR",UU[UU.SEI=6]="SEI",UU[UU.SPS=7]="SPS",UU[UU.PPS=8]="PPS",UU[UU.AUD=9]="AUD",UU[UU.SPS_EXT=13]="SPS_EXT"}(dX||(dX={})),function(UU){UU[UU.RASL_N=8]="RASL_N",UU[UU.RASL_R=9]="RASL_R",UU[UU.BLA_W_LP=16]="BLA_W_LP",UU[UU.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",UU[UU.VPS_NUT=32]="VPS_NUT",UU[UU.SPS_NUT=33]="SPS_NUT",UU[UU.PPS_NUT=34]="PPS_NUT",UU[UU.AUD_NUT=35]="AUD_NUT",UU[UU.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",UU[UU.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(LX||(LX={}));const eX=function*(UU){let XU=0,zU=-1;for(;XU<UU.length-2;){const cU=UU.indexOf(0,XU);if(-1===cU||cU>=UU.length-2)break;XU=cU;let yU=0;XU+3<UU.length&&0===UU[XU+1]&&0===UU[XU+2]&&1===UU[XU+3]?yU=4:0===UU[XU+1]&&1===UU[XU+2]&&(yU=3),0!==yU?(-1!==zU&&XU>zU&&(yield{offset:zU,length:XU-zU}),zU=XU+yU,XU=zU):XU++}-1!==zU&&zU<UU.length&&(yield{offset:zU,length:UU.length-zU})},CX=UU=>31&UU,wX=UU=>{const XU=[],zU=UU.length;for(let cU=0;cU<zU;cU++)cU+2<zU&&0===UU[cU]&&0===UU[cU+1]&&3===UU[cU+2]?(XU.push(0,0),cU+=2):XU.push(UU[cU]);return new Uint8Array(XU)},qX=(new Uint8Array([0,0,0,1]),(UU,XU)=>{const zU=UU.reduce(((UU,zU)=>UU+XU+zU.byteLength),0),cU=new Uint8Array(zU);let yU=0;for(const QU of UU){const UU=new DataView(cU.buffer,cU.byteOffset,cU.byteLength);switch(XU){case 1:UU.setUint8(yU,QU.byteLength);break;case 2:UU.setUint16(yU,QU.byteLength,!1);break;case 3:TU(UU,yU,QU.byteLength,!1);break;case 4:UU.setUint32(yU,QU.byteLength,!1)}yU+=XU,cU.set(QU,yU),yU+=QU.byteLength}return cU}),OX=UU=>{try{const XU=[],zU=[],cU=[];for(const FU of eX(UU)){const yU=UU.subarray(FU.offset,FU.offset+FU.length),QU=CX(yU[0]);QU===dX.SPS?XU.push(yU):QU===dX.PPS?zU.push(yU):QU===dX.SPS_EXT&&cU.push(yU)}if(0===XU.length)return null;if(0===zU.length)return null;const yU=XU[0],QU=rX(yU);CU(null!==QU);const AU=100===QU.profileIdc||110===QU.profileIdc||122===QU.profileIdc||144===QU.profileIdc;return{configurationVersion:1,avcProfileIndication:QU.profileIdc,profileCompatibility:QU.constraintFlags,avcLevelIndication:QU.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:XU,pictureParameterSets:zU,chromaFormat:AU?QU.chromaFormatIdc:null,bitDepthLumaMinus8:AU?QU.bitDepthLumaMinus8:null,bitDepthChromaMinus8:AU?QU.bitDepthChromaMinus8:null,sequenceParameterSetExt:AU?cU:null}}catch(XU){return ZX._error("Error building AVC Decoder Configuration Record:",XU),null}},SX={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},rX=UU=>{try{const XU=wX(UU),zU=new IX(XU);zU.skipBits(1),zU.skipBits(2);if(7!==zU.readBits(5))return null;const cU=zU.readAlignedByte(),yU=zU.readAlignedByte(),QU=zU.readAlignedByte();iU(zU);let AU=1,FU=0,oU=0,DU=0;if(100===cU||110===cU||122===cU||244===cU||44===cU||83===cU||86===cU||118===cU||128===cU){AU=iU(zU),3===AU&&(DU=zU.readBits(1)),FU=iU(zU),oU=iU(zU),zU.skipBits(1);if(zU.readBits(1))for(let UU=0;UU<(3!==AU?8:12);UU++){if(zU.readBits(1)){const XU=UU<6?16:64;let cU=8,yU=8;for(let UU=0;UU<XU;UU++){if(0!==yU){yU=(cU+HU(zU)+256)%256}cU=0===yU?cU:yU}}}}iU(zU);const EU=iU(zU);if(0===EU)iU(zU);else if(1===EU){zU.skipBits(1),HU(zU),HU(zU);const UU=iU(zU);for(let XU=0;XU<UU;XU++)HU(zU)}iU(zU),zU.skipBits(1);const YU=iU(zU),NU=iU(zU),IU=16*(YU+1),pU=16*(NU+1);let aU=IU,tU=pU;const gU=zU.readBits(1);gU||zU.skipBits(1),zU.skipBits(1);if(zU.readBits(1)){const UU=iU(zU),XU=iU(zU),cU=iU(zU),yU=iU(zU);let QU,FU;if(0===(0===DU?AU:0))QU=1,FU=2-gU;else{QU=3===AU?1:2,FU=(1===AU?2:1)*(2-gU)}aU-=QU*(UU+XU),tU-=FU*(cU+yU)}let kU=2,GU=2,BU=2,ZU=0,RU={num:1,den:1},PU=null,WU=null,dU=null,LU=null;const eU=zU.pos;if(zU.readBits(1)){if(zU.readBits(1)){const UU=zU.readBits(8);if(255===UU)RU={num:zU.readBits(16),den:zU.readBits(16)};else{const XU=SX[UU];XU&&(RU=XU)}}zU.readBits(1)&&zU.skipBits(1);if(zU.readBits(1)){zU.skipBits(3),ZU=zU.readBits(1);zU.readBits(1)&&(kU=zU.readBits(8),GU=zU.readBits(8),BU=zU.readBits(8))}zU.readBits(1)&&(iU(zU),iU(zU));zU.readBits(1)&&(zU.skipBits(32),zU.skipBits(32),zU.skipBits(1));const UU=zU.readBits(1);UU&&uX(zU);const XU=zU.readBits(1);XU&&uX(zU),(UU||XU)&&zU.skipBits(1),zU.skipBits(1),dU=zU.pos,LU=zU.readBits(1),LU&&(zU.skipBits(1),iU(zU),iU(zU),iU(zU),iU(zU),PU=iU(zU),WU=iU(zU))}if(null===PU){CU(null===WU);if(44!==cU&&86!==cU&&100!==cU&&110!==cU&&122!==cU&&244!==cU||!(16&yU)){const UU=YU+1,XU=(2-gU)*(NU+1),zU=Iz.find((UU=>UU.level>=QU))??uU(Iz),cU=Math.min(Math.floor(zU.maxDpbMbs/(UU*XU)),16);PU=cU,WU=cU}else PU=0,WU=0}return CU(null!==WU),{emulationUnpreventedBytes:XU,profileIdc:cU,constraintFlags:yU,levelIdc:QU,frameMbsOnlyFlag:gU,chromaFormatIdc:AU,bitDepthLumaMinus8:FU,bitDepthChromaMinus8:oU,codedWidth:IU,codedHeight:pU,displayWidth:aU,displayHeight:tU,pixelAspectRatio:RU,colourPrimaries:kU,matrixCoefficients:BU,transferCharacteristics:GU,fullRangeFlag:ZU,numReorderFrames:PU,maxDecFrameBuffering:WU,vuiParametersFlagBitOffset:eU,bitstreamRestrictionFlagBitOffset:dU,bitstreamRestrictionFlag:LU}}catch(XU){return ZX._error("Error parsing AVC SPS:",XU),null}},uX=UU=>{const XU=iU(UU);UU.skipBits(4),UU.skipBits(4);for(let zU=0;zU<=XU;zU++)iU(UU),iU(UU),UU.skipBits(1);UU.skipBits(5),UU.skipBits(5),UU.skipBits(5),UU.skipBits(5)},fX=UU=>UU>>1&63,iX=UU=>{try{const XU=[],zU=[],cU=[],yU=[];for(const oU of eX(UU)){const QU=UU.subarray(oU.offset,oU.offset+oU.length),AU=fX(QU[0]);AU===LX.VPS_NUT?XU.push(QU):AU===LX.SPS_NUT?zU.push(QU):AU===LX.PPS_NUT?cU.push(QU):AU!==LX.PREFIX_SEI_NUT&&AU!==LX.SUFFIX_SEI_NUT||yU.push(QU)}if(0===zU.length||0===cU.length)return null;const QU=(UU=>{try{const XU=new IX(wX(UU));XU.skipBits(16),XU.readBits(4);const zU=XU.readBits(3),cU=XU.readBits(1),{general_profile_space:yU,general_tier_flag:QU,general_profile_idc:AU,general_profile_compatibility_flags:FU,general_constraint_indicator_flags:oU,general_level_idc:DU}=HX(XU,zU);iU(XU);const EU=iU(XU);let YU=0;3===EU&&(YU=XU.readBits(1));const NU=iU(XU),IU=iU(XU);let pU=NU,aU=IU;if(XU.readBits(1)){const UU=iU(XU),zU=iU(XU),cU=iU(XU),yU=iU(XU);let QU=1,AU=1;const FU=0===YU?EU:0;1===FU?(QU=2,AU=2):2===FU&&(QU=2,AU=1),pU-=(UU+zU)*QU,aU-=(cU+yU)*AU}const tU=iU(XU),gU=iU(XU);iU(XU);const kU=XU.readBits(1);let GU=0;for(let UU=kU?0:zU;UU<=zU;UU++)iU(XU),GU=iU(XU),iU(XU);iU(XU),iU(XU),iU(XU),iU(XU),iU(XU),iU(XU),XU.readBits(1)&&XU.readBits(1)&&MX(XU),XU.skipBits(1),XU.skipBits(1),XU.readBits(1)&&(XU.skipBits(4),XU.skipBits(4),iU(XU),iU(XU),XU.skipBits(1));const BU=iU(XU);if(vX(XU,BU),XU.readBits(1)){const UU=iU(XU);for(let zU=0;zU<UU;zU++)iU(XU),XU.skipBits(1)}XU.skipBits(1),XU.skipBits(1);let ZU=2,RU=2,PU=2,WU=0,dU=0,LU={num:1,den:1};if(XU.readBits(1)){const UU=sX(XU,zU);LU=UU.pixelAspectRatio,ZU=UU.colourPrimaries,RU=UU.transferCharacteristics,PU=UU.matrixCoefficients,WU=UU.fullRangeFlag,dU=UU.minSpatialSegmentationIdc}return{displayWidth:pU,displayHeight:aU,pixelAspectRatio:LU,colourPrimaries:ZU,transferCharacteristics:RU,matrixCoefficients:PU,fullRangeFlag:WU,maxDecFrameBuffering:GU+1,spsMaxSubLayersMinus1:zU,spsTemporalIdNestingFlag:cU,generalProfileSpace:yU,generalTierFlag:QU,generalProfileIdc:AU,generalProfileCompatibilityFlags:FU,generalConstraintIndicatorFlags:oU,generalLevelIdc:DU,chromaFormatIdc:EU,bitDepthLumaMinus8:tU,bitDepthChromaMinus8:gU,minSpatialSegmentationIdc:dU}}catch(XU){return ZX._error("Error parsing HEVC SPS:",XU),null}})(zU[0]);if(!QU)return null;let AU=0;if(cU.length>0){const UU=cU[0],XU=new IX(wX(UU));XU.skipBits(16),iU(XU),iU(XU),XU.skipBits(1),XU.skipBits(1),XU.skipBits(3),XU.skipBits(1),XU.skipBits(1),iU(XU),iU(XU),HU(XU),XU.skipBits(1),XU.skipBits(1),XU.readBits(1)&&iU(XU),HU(XU),HU(XU),XU.skipBits(1),XU.skipBits(1),XU.skipBits(1),XU.skipBits(1);const zU=XU.readBits(1),yU=XU.readBits(1);AU=zU||yU?zU&&!yU?2:!zU&&yU?3:0:0}const FU=[...XU.length?[{arrayCompleteness:1,nalUnitType:LX.VPS_NUT,nalUnits:XU}]:[],...zU.length?[{arrayCompleteness:1,nalUnitType:LX.SPS_NUT,nalUnits:zU}]:[],...cU.length?[{arrayCompleteness:1,nalUnitType:LX.PPS_NUT,nalUnits:cU}]:[],...yU.length?[{arrayCompleteness:1,nalUnitType:fX(yU[0][0]),nalUnits:yU}]:[]];return{configurationVersion:1,generalProfileSpace:QU.generalProfileSpace,generalTierFlag:QU.generalTierFlag,generalProfileIdc:QU.generalProfileIdc,generalProfileCompatibilityFlags:QU.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:QU.generalConstraintIndicatorFlags,generalLevelIdc:QU.generalLevelIdc,minSpatialSegmentationIdc:QU.minSpatialSegmentationIdc,parallelismType:AU,chromaFormatIdc:QU.chromaFormatIdc,bitDepthLumaMinus8:QU.bitDepthLumaMinus8,bitDepthChromaMinus8:QU.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:QU.spsMaxSubLayersMinus1+1,temporalIdNested:QU.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:FU}}catch(XU){return ZX._error("Error building HEVC Decoder Configuration Record:",XU),null}},HX=(UU,XU)=>{const zU=UU.readBits(2),cU=UU.readBits(1),yU=UU.readBits(5);let QU=0;for(let EU=0;EU<32;EU++)QU=QU<<1|UU.readBits(1);const AU=new Uint8Array(6);for(let EU=0;EU<6;EU++)AU[EU]=UU.readBits(8);const FU=UU.readBits(8),oU=[],DU=[];for(let EU=0;EU<XU;EU++)oU.push(UU.readBits(1)),DU.push(UU.readBits(1));if(XU>0)for(let EU=XU;EU<8;EU++)UU.skipBits(2);for(let EU=0;EU<XU;EU++)oU[EU]&&UU.skipBits(88),DU[EU]&&UU.skipBits(8);return{general_profile_space:zU,general_tier_flag:cU,general_profile_idc:yU,general_profile_compatibility_flags:QU,general_constraint_indicator_flags:AU,general_level_idc:FU}},MX=UU=>{for(let XU=0;XU<4;XU++)for(let zU=0;zU<(3===XU?2:6);zU++){if(UU.readBits(1)){const zU=Math.min(64,1<<4+(XU<<1));XU>1&&HU(UU);for(let XU=0;XU<zU;XU++)HU(UU)}else iU(UU)}},vX=(UU,XU)=>{const zU=[];for(let cU=0;cU<XU;cU++)zU[cU]=VX(UU,cU,XU,zU)},VX=(UU,XU,zU,cU)=>{let yU=0,QU=0,AU=0;if(0!==XU&&(QU=UU.readBits(1)),QU){if(XU===zU){AU=XU-(iU(UU)+1)}else AU=XU-1;UU.readBits(1),iU(UU);const QU=cU[AU]??0;for(let XU=0;XU<=QU;XU++){UU.readBits(1)||UU.readBits(1)}yU=cU[AU]}else{const XU=iU(UU),zU=iU(UU);for(let cU=0;cU<XU;cU++)iU(UU),UU.readBits(1);for(let cU=0;cU<zU;cU++)iU(UU),UU.readBits(1);yU=XU+zU}return yU},sX=(UU,XU)=>{let zU=2,cU=2,yU=2,QU=0,AU=0,FU={num:1,den:1};if(UU.readBits(1)){const XU=UU.readBits(8);if(255===XU)FU={num:UU.readBits(16),den:UU.readBits(16)};else{const UU=SX[XU];UU&&(FU=UU)}}return UU.readBits(1)&&UU.readBits(1),UU.readBits(1)&&(UU.readBits(3),QU=UU.readBits(1),UU.readBits(1)&&(zU=UU.readBits(8),cU=UU.readBits(8),yU=UU.readBits(8))),UU.readBits(1)&&(iU(UU),iU(UU)),UU.readBits(1),UU.readBits(1),UU.readBits(1),UU.readBits(1)&&(iU(UU),iU(UU),iU(UU),iU(UU)),UU.readBits(1)&&(UU.readBits(32),UU.readBits(32),UU.readBits(1)&&iU(UU),UU.readBits(1)&&nX(UU,!0,XU)),UU.readBits(1)&&(UU.readBits(1),UU.readBits(1),UU.readBits(1),AU=iU(UU),iU(UU),iU(UU),iU(UU),iU(UU)),{pixelAspectRatio:FU,colourPrimaries:zU,transferCharacteristics:cU,matrixCoefficients:yU,fullRangeFlag:QU,minSpatialSegmentationIdc:AU}},nX=(UU,XU,zU)=>{let cU=!1,yU=!1,QU=!1;XU&&(cU=1===UU.readBits(1),yU=1===UU.readBits(1),(cU||yU)&&(QU=1===UU.readBits(1),QU&&(UU.readBits(8),UU.readBits(5),UU.readBits(1),UU.readBits(5)),UU.readBits(4),UU.readBits(4),QU&&UU.readBits(4),UU.readBits(5),UU.readBits(5),UU.readBits(5)));for(let AU=0;AU<=zU;AU++){let XU=!0;1===UU.readBits(1)||(XU=1===UU.readBits(1));let zU=!1;XU?iU(UU):zU=1===UU.readBits(1);let AU=1;if(!zU){AU=iU(UU)+1}cU&&mX(UU,AU,QU),yU&&mX(UU,AU,QU)}},mX=(UU,XU,zU)=>{for(let cU=0;cU<XU;cU++)iU(UU),iU(UU),zU&&(iU(UU),iU(UU)),UU.readBits(1)};var lX;!function(UU){UU[UU.audAllowed=0]="audAllowed",UU[UU.beforeFirstVcl=1]="beforeFirstVcl",UU[UU.afterFirstVcl=2]="afterFirstVcl",UU[UU.eoBitstreamAllowed=3]="eoBitstreamAllowed",UU[UU.noMoreDataAllowed=4]="noMoreDataAllowed"}(lX||(lX={}));const xX=UU=>{const XU=vU(UU),zU=XU.getUint8(9),cU=XU.getUint16(10,!0),yU=XU.getUint32(12,!0),QU=XU.getInt16(16,!0),AU=XU.getUint8(18);let FU=null;return AU&&(FU=UU.subarray(19,21+zU)),{outputChannelCount:zU,preSkip:cU,inputSampleRate:yU,outputGain:QU,channelMappingFamily:AU,channelMappingTable:FU}};var JX;!function(UU){UU[UU.STREAMINFO=0]="STREAMINFO",UU[UU.VORBIS_COMMENT=4]="VORBIS_COMMENT",UU[UU.PICTURE=6]="PICTURE"}(JX||(JX={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const jX=[1,2,3,6],KX=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],bX=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],TX=[16,16,20,20,0,24,24,0],hX=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Uz=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Xz=[32e3,44100,48e3,0],zz=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],cz=[512,1024,2048,4096],yz=UU=>{const XU=Qz(UU),zU=vU(UU);let cU=XU?4*Math.ceil(XU.frameSize/4):0,yU=null;for(;cU+4<=UU.length&&1683496997===zU.getUint32(cU);){const XU=Az(UU.subarray(cU));if(!XU)break;yU??=XU,cU+=XU.frameSize}if(XU)return{frameSize:yU?cU:XU.frameSize,sampleRate:XU.sampleRate,numberOfChannels:XU.numberOfChannels,sampleCount:XU.sampleCount,channelLayout:XU.channelLayout,pcmResolution:XU.pcmResolution,bitRate:XU.bitRate,core:XU,hasExtensions:null!==yU};if(!yU?.asset)return null;const{asset:QU}=yU;return{frameSize:cU,sampleRate:QU.sampleRate,numberOfChannels:QU.numberOfChannels,sampleCount:QU.sampleCount,channelLayout:QU.channelLayout,pcmResolution:QU.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Qz=UU=>{if(UU.length<18)return null;if(127!==UU[0]||254!==UU[1]||128!==UU[2]||1!==UU[3])return null;const XU=new IX(UU);if(XU.skipBits(32),XU.skipBits(1),31!==XU.readBits(5))return null;const zU=XU.readBits(1),cU=XU.readBits(7)+1;if(cU%8!==0)return null;const yU=XU.readBits(14)+1;if(yU<96)return null;const QU=XU.readBits(6);if(QU>=hX.length)return null;const AU=KX[XU.readBits(4)];if(0===AU)return null;const FU=bX[XU.readBits(5)];if(0!==XU.readBits(1))return null;XU.skipBits(4),XU.skipBits(5);const oU=XU.readBits(2);if(3===oU)return null;XU.skipBits(1),zU&&XU.skipBits(16),XU.skipBits(7);const DU=TX[XU.readBits(3)];if(0===DU)return null;const EU=0!==oU;return{frameSize:yU,sampleRate:AU,numberOfChannels:hX[QU]+(EU?1:0),sampleCount:32*cU,channelLayout:Uz[QU]|(EU?8:0),amode:QU,lfePresent:EU,bitRate:FU,pcmResolution:DU}},Az=UU=>{if(UU.length<10)return null;if(100!==UU[0]||88!==UU[1]||32!==UU[2]||37!==UU[3])return null;const XU=new IX(UU);XU.skipBits(32),XU.skipBits(8);const zU=XU.readBits(2),cU=XU.readBits(1),yU=8+4*cU,QU=16+4*cU;XU.skipBits(yU);const AU=XU.readBits(QU)+1,FU={frameSize:AU,asset:null};if(!XU.readBits(1))return FU;const oU=Xz[XU.readBits(2)],DU=512*(XU.readBits(3)+1);XU.readBits(1)&&XU.skipBits(36);const EU=XU.readBits(3)+1,YU=XU.readBits(3)+1,NU=[];for(let gU=0;gU<EU;gU++)NU.push(XU.readBits(zU+1));for(const gU of NU)XU.skipBits(8*UX(gU));if(XU.readBits(1)){XU.skipBits(2);const UU=XU.readBits(2)+1<<2,zU=XU.readBits(2)+1;XU.skipBits(zU*UU)}for(let gU=0;gU<YU;gU++)XU.skipBits(QU);XU.skipBits(9),XU.skipBits(3),XU.readBits(1)&&XU.skipBits(4),XU.readBits(1)&&XU.skipBits(24),XU.readBits(1)&&XU.skipBits(8*(XU.readBits(10)+1));const IU=XU.readBits(5)+1,pU=zz[XU.readBits(4)],aU=XU.readBits(8)+1;let tU=0;if(XU.readBits(1)&&(aU>2&&XU.skipBits(1),aU>6&&XU.skipBits(1),XU.readBits(1))){const UU=XU.readBits(2)+1<<2;tU=XU.readBits(UU)}return 0===oU||XU.getBitsLeft()<0?FU:{frameSize:AU,asset:{sampleRate:pU,numberOfChannels:aU,sampleCount:Math.round(DU*pU/oU),channelLayout:tU,pcmResolution:IU}}},Fz=UU=>{const XU=new Uint8Array(20),zU=vU(XU);zU.setUint32(0,UU.sampleRate),zU.setUint32(4,UU.bitRate),zU.setUint32(8,UU.bitRate),XU[12]=UU.pcmResolution;const cU=UU.core&&!UU.hasExtensions?1:0,yU=new IX(XU);return yU.seekToByte(13),yU.writeBits(2,Math.max(cz.indexOf(UU.sampleCount),0)),yU.writeBits(5,cU),yU.writeBits(1,UU.core?.lfePresent?1:0),yU.writeBits(6,UU.core?.amode??0),yU.writeBits(14,UU.core?UU.core.frameSize-1:0),yU.writeBits(1,0),yU.writeBits(3,0),yU.writeBits(16,UU.channelLayout),yU.writeBits(1,0),yU.writeBits(1,0),yU.writeBits(1,0),yU.writeBits(5,0),XU},oz=["avc","hevc","vp9","av1","vp8","prores"],Dz=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Ez=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Yz=[...Ez,...Dz],Nz=["webvtt"],Iz=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],pz=["ap4x","ap4h","apch","apcn","apcs","apco"],az=["dtsc","dtsh","dtsl","dtse"],tz=UU=>{const XU=UU.split("."),zU=Number(XU[1]),cU=XU[2],yU=(zU<<5)+Number(cU.slice(0,-1)),QU="H"===cU.slice(-1)?1:0,AU=Number(XU[3]);return[129,yU,(QU<<7)+((8===AU?0:1)<<6)+((12===AU?1:0)<<5)+((XU[4]?Number(XU[4]):0)<<4)+((XU[5]?Number(XU[5][0]):1)<<3)+((XU[5]?Number(XU[5][1]):1)<<2)+(XU[5]?Number(XU[5][2]):0),0]},gz=/^pcm-([usf])(\\d+)(be)?$/,kz=UU=>{if(CU(Dz.includes(UU)),"ulaw"===UU)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===UU)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const XU=gz.exec(UU);let zU;CU(XU),zU="u"===XU[1]?"unsigned":"s"===XU[1]?"signed":"float";return{dataType:zU,sampleSize:Number(XU[2])/8,littleEndian:"be"!==XU[3],silentValue:"pcm-u8"===UU?128:0}},Gz=UU=>UU.startsWith("avc1")||UU.startsWith("avc3")?"avc":UU.startsWith("hev1")||UU.startsWith("hvc1")?"hevc":"vp8"===UU?"vp8":UU.startsWith("vp09")?"vp9":UU.startsWith("av01")?"av1":pz.includes(UU)?"prores":"mp3"===UU||"mp4a.69"===UU||"mp4a.6B"===UU||"mp4a.6b"===UU||"mp4a.40.34"===UU?"mp3":UU.startsWith("mp4a.40.")||"mp4a.67"===UU?"aac":"opus"===UU||"Opus"===UU?"opus":"vorbis"===UU?"vorbis":"flac"===UU?"flac":"ac-3"===UU||"ac3"===UU?"ac3":"ec-3"===UU||"eac3"===UU?"eac3":az.includes(UU)?"dts":"ulaw"===UU?"ulaw":"alaw"===UU?"alaw":gz.test(UU)?UU:"webvtt"===UU?"webvtt":null,Bz=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...pz],Zz=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,Rz=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,Pz=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,Wz=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,dz=(UU,XU)=>{if(!UU)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof UU)throw new TypeError("Video chunk metadata must be an object.");if(!UU.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof UU.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof UU.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Bz.some((XU=>UU.decoderConfig.codec.startsWith(XU))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(UU.decoderConfig.codedWidth)||UU.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(UU.decoderConfig.codedHeight)||UU.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==UU.decoderConfig.displayAspectWidth&&(!Number.isInteger(UU.decoderConfig.displayAspectWidth)||UU.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==UU.decoderConfig.displayAspectHeight&&(!Number.isInteger(UU.decoderConfig.displayAspectHeight)||UU.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==UU.decoderConfig.displayAspectWidth!==(void 0!==UU.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==UU.decoderConfig.description&&!JU(UU.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==UU.decoderConfig.colorSpace){const{colorSpace:XU}=UU.decoderConfig;if("object"!==typeof XU)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const zU=Object.keys(nU);if(null!=XU.primaries&&!zU.includes(XU.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${zU.join(", ")}.`);const cU=Object.keys(mU);if(null!=XU.transfer&&!cU.includes(XU.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${cU.join(", ")}.`);const yU=Object.keys(lU);if(null!=XU.matrix&&!yU.includes(XU.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${yU.join(", ")}.`);if(null!=XU.fullRange&&"boolean"!==typeof XU.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(UU.decoderConfig.codec.startsWith("avc1")||UU.decoderConfig.codec.startsWith("avc3")){if(!Zz.test(UU.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(UU.decoderConfig.codec.startsWith("hev1")||UU.decoderConfig.codec.startsWith("hvc1")){if(!Rz.test(UU.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(UU.decoderConfig.codec.startsWith("vp8")){if("vp8"!==UU.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(UU.decoderConfig.codec.startsWith("vp09")){if(!Pz.test(UU.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(UU.decoderConfig.codec.startsWith("av01")){if(!Wz.test(UU.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(pz.some((XU=>UU.decoderConfig.codec.startsWith(XU)))&&!pz.some((XU=>UU.decoderConfig.codec===XU)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${pz.join(", ")}.`);if(null!==XU&&Gz(UU.decoderConfig.codec)!==XU)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${UU.decoderConfig.codec}\' does not fit to the track codec \'${XU}\'.`)},Lz=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],ez=(UU,XU)=>{if(!UU)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof UU)throw new TypeError("Audio chunk metadata must be an object.");if(!UU.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof UU.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof UU.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Lz.some((XU=>UU.decoderConfig.codec.startsWith(XU))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(UU.decoderConfig.sampleRate)||UU.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(UU.decoderConfig.numberOfChannels)||UU.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==UU.decoderConfig.description&&!JU(UU.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(UU.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==UU.decoderConfig.codec&&"mp4a.6B"!==UU.decoderConfig.codec&&"mp4a.6b"!==UU.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(UU.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(UU.decoderConfig.codec.startsWith("mp3")||UU.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==UU.decoderConfig.codec&&"mp4a.69"!==UU.decoderConfig.codec&&"mp4a.6B"!==UU.decoderConfig.codec&&"mp4a.6b"!==UU.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(UU.decoderConfig.codec.startsWith("opus")){if("opus"!==UU.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(UU.decoderConfig.description&&UU.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(UU.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==UU.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!UU.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(UU.decoderConfig.codec.startsWith("flac")){if("flac"!==UU.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const XU=42;if(!UU.decoderConfig.description||UU.decoderConfig.description.byteLength<XU)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(UU.decoderConfig.codec.startsWith("ac-3")||UU.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==UU.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(UU.decoderConfig.codec.startsWith("ec-3")||UU.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==UU.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(UU.decoderConfig.codec.startsWith("dts")){if(!az.includes(UU.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${az.join(", ")}.`)}else if((UU.decoderConfig.codec.startsWith("pcm")||UU.decoderConfig.codec.startsWith("ulaw")||UU.decoderConfig.codec.startsWith("alaw"))&&!Dz.includes(UU.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Dz.join(", ")}).`);if(null!==XU&&Gz(UU.decoderConfig.codec)!==XU)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${UU.decoderConfig.codec}\' does not fit to the track codec \'${XU}\'.`)},Cz=UU=>{if(!UU)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof UU)throw new TypeError("Subtitle metadata must be an object.");if(!UU.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof UU.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof UU.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var wz;!function(UU){UU[UU.FrameCount=1]="FrameCount",UU[UU.FileSize=2]="FileSize",UU[UU.Toc=4]="Toc"}(wz||(wz={}));class qz{constructor(UU,XU,zU,cU,yU){this.bytes=UU,this.view=XU,this.offset=zU,this.start=cU,this.end=yU,this.bufferPos=cU-zU}static tempFromBytes(UU){return new qz(UU,vU(UU),0,0,UU.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(UU){this.bufferPos=UU-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(UU){this.bufferPos+=UU}slice(UU){let XU=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-UU;if(UU<this.start||UU+XU>this.end)throw new RangeError("Slicing outside of original slice.");return new qz(this.bytes,this.view,this.offset,UU,UU+XU)}}const Oz=(UU,XU)=>{if(UU.filePos<UU.start||UU.filePos+XU>UU.end)throw new RangeError(`Tried reading [${UU.filePos}, ${UU.filePos+XU}), but slice is [${UU.start}, ${UU.end}). This is likely an internal error, please report it alongside the file that caused it.`)},Sz=(UU,XU)=>{Oz(UU,XU);const zU=UU.bytes.subarray(UU.bufferPos,UU.bufferPos+XU);return UU.bufferPos+=XU,zU};var rz,uz;!function(UU){UU[UU.Unsynchronisation=128]="Unsynchronisation",UU[UU.ExtendedHeader=64]="ExtendedHeader",UU[UU.ExperimentalIndicator=32]="ExperimentalIndicator",UU[UU.Footer=16]="Footer"}(rz||(rz={})),function(UU){UU[UU.ISO_8859_1=0]="ISO_8859_1",UU[UU.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",UU[UU.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",UU[UU.UTF_8=3]="UTF_8"}(uz||(uz={}));class fz{constructor(UU){this.mutex=new jU,this.trackTimestampInfo=new WeakMap,this.output=UU}onTrackClose(UU){}validateTimestamp(UU,XU,zU){let cU=this.trackTimestampInfo.get(UU);if(cU){if(zU&&(cU.maxTimestampBeforeLastKeyPacket=cU.maxTimestamp),null!==cU.maxTimestampBeforeLastKeyPacket&&XU<cU.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${XU}s, but largest timestamp is ${cU.maxTimestampBeforeLastKeyPacket}s.`);cU.maxTimestamp=Math.max(cU.maxTimestamp,XU)}else{if(!zU)throw new Error("First packet must be a key packet.");cU={maxTimestamp:XU,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(UU,cU)}}}const iz=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const Hz=UU=>{const XU=Math.floor(UU/36e5),zU=Math.floor(UU%36e5/6e4),cU=Math.floor(UU%6e4/1e3),yU=UU%1e3;return XU.toString().padStart(2,"0")+":"+zU.toString().padStart(2,"0")+":"+cU.toString().padStart(2,"0")+"."+yU.toString().padStart(3,"0")};class Mz{constructor(UU){this.writer=UU,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(UU){this.helperView.setUint32(0,UU,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(UU){this.helperView.setUint32(0,Math.floor(UU/2**32),!1),this.helperView.setUint32(4,UU,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(UU){for(let XU=0;XU<UU.length;XU++)this.helperView.setUint8(XU%8,UU.charCodeAt(XU)),XU%8===7&&this.writer.write(this.helper);UU.length%8!==0&&this.writer.write(this.helper.subarray(0,UU.length%8))}writeBox(UU){if(this.offsets.set(UU,this.writer.getPos()),UU.contents&&!UU.children)this.writeBoxHeader(UU,UU.size??UU.contents.byteLength+8),this.writer.write(UU.contents);else{const XU=this.writer.getPos();if(this.writeBoxHeader(UU,0),UU.contents&&this.writer.write(UU.contents),UU.children)for(const yU of UU.children)yU&&this.writeBox(yU);const zU=this.writer.getPos(),cU=UU.size??zU-XU;this.writer.seek(XU),this.writeBoxHeader(UU,cU),this.writer.seek(zU)}}writeBoxHeader(UU,XU){this.writeU32(UU.largeSize?1:XU),this.writeAscii(UU.type),UU.largeSize&&this.writeU64(XU)}measureBoxHeader(UU){return 8+(UU.largeSize?8:0)}patchBox(UU){const XU=this.offsets.get(UU);CU(void 0!==XU);const zU=this.writer.getPos();this.writer.seek(XU),this.writeBox(UU),this.writer.seek(zU)}measureBox(UU){if(UU.contents&&!UU.children){return this.measureBoxHeader(UU)+UU.contents.byteLength}{let XU=this.measureBoxHeader(UU);if(UU.contents&&(XU+=UU.contents.byteLength),UU.children)for(const zU of UU.children)zU&&(XU+=this.measureBox(zU));return XU}}}const vz=new Uint8Array(8),Vz=new DataView(vz.buffer),sz=UU=>[(UU%256+256)%256],nz=UU=>(Vz.setUint16(0,UU,!1),[vz[0],vz[1]]),mz=UU=>(Vz.setInt16(0,UU,!1),[vz[0],vz[1]]),lz=UU=>(Vz.setUint32(0,UU,!1),[vz[1],vz[2],vz[3]]),xz=UU=>(Vz.setUint32(0,UU,!1),[vz[0],vz[1],vz[2],vz[3]]),Jz=UU=>(Vz.setInt32(0,UU,!1),[vz[0],vz[1],vz[2],vz[3]]),jz=UU=>(Vz.setUint32(0,Math.floor(UU/2**32),!1),Vz.setUint32(4,UU,!1),[vz[0],vz[1],vz[2],vz[3],vz[4],vz[5],vz[6],vz[7]]),Kz=UU=>(Vz.setInt32(0,Math.floor(UU/2**32),!1),Vz.setUint32(4,UU,!1),[vz[0],vz[1],vz[2],vz[3],vz[4],vz[5],vz[6],vz[7]]),bz=UU=>(Vz.setInt16(0,256*UU,!1),[vz[0],vz[1]]),Tz=UU=>(Vz.setInt32(0,65536*UU,!1),[vz[0],vz[1],vz[2],vz[3]]),hz=UU=>(Vz.setInt32(0,2**30*UU,!1),[vz[0],vz[1],vz[2],vz[3]]),Uc=(UU,XU)=>{const zU=[];let cU=UU;do{let UU=127&cU;cU>>=7,zU.length>0&&(UU|=128),zU.push(UU),void 0!==XU&&XU--}while(cU>0||XU);return zU.reverse()},Xc=function(UU){let XU=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const zU=Array(UU.length).fill(null).map(((XU,zU)=>UU.charCodeAt(zU)));return XU&&zU.push(0),zU},zc=UU=>[Tz(UU[0]),Tz(UU[1]),hz(UU[2]),Tz(UU[3]),Tz(UU[4]),hz(UU[5]),Tz(UU[6]),Tz(UU[7]),hz(UU[8])],cc=(UU,XU,zU)=>({type:UU,contents:XU&&new Uint8Array(XU.flat(10)),children:zU}),yc=(UU,XU,zU,cU,yU)=>cc(UU,[sz(XU),lz(zU),cU??[]],yU),Qc=()=>cc("styp",[Xc("iso5"),xz(0),Xc("iso5"),Xc("iso6"),Xc("mp41"),Xc("cmfc"),Xc("dash")]),Ac=(UU,XU)=>{const zU=Math.max(0,UU.minWrittenTimestamp);let cU=Math.max(0,UU.maxWrittenEndTimestamp-zU);return Number.isFinite(cU)||(cU=0),yc("sidx",1,0,[xz(1),xz(fy),jz(Hy(zU,fy)),jz(0),nz(0),nz(1),xz(2147483647&XU),xz(Hy(cU,fy)),xz(0)])},Fc=UU=>({type:"mdat",largeSize:UU}),oc=UU=>cc("moov",void 0,[Dc(UU.creationTime,UU.trackDatas),...UU.trackDatas.map((XU=>Ec(XU,UU.creationTime))),UU.isFragmented?bc(UU.trackDatas):null,Yy(UU)]),Dc=(UU,XU)=>{const zU=Math.max(0,...XU.map((UU=>Math.max(0,Hy(My(UU),fy)+Hy(UU.startTimestampOffset??0,fy))))),cU=Math.max(0,...XU.map((UU=>UU.track.id)))+1,yU=!fU(UU)||!fU(zU),QU=yU?jz:xz;return yc("mvhd",+yU,0,[QU(UU),QU(UU),xz(fy),QU(zU),Tz(1),bz(1),Array(10).fill(0),zc(qU),Array(24).fill(0),xz(cU)])},Ec=(UU,XU)=>{const zU=iy(UU),cU=null!==UU.startTimestampOffset&&0!==UU.startTimestampOffset;return cc("trak",void 0,[Yc(UU,XU),cU?Nc(UU):null,Ic(UU,XU),void 0!==zU.name?cc("udta",void 0,[cc("name",[...sU.encode(zU.name)])]):null])},Yc=(UU,XU)=>{const zU=Math.max(0,Hy(My(UU),fy)+Hy(UU.startTimestampOffset??0,fy)),cU=!fU(XU)||!fU(zU),yU=cU?jz:xz;let QU;if("video"===UU.type&&UU.track.metadata.transformationMatrix)QU=UU.track.metadata.transformationMatrix;else if("video"===UU.type){const{rotation:XU,flip:zU}=UU.track.metadata;QU=((UU,XU,zU)=>{const[cU,yU,,QU,AU]=UU,FU=Math.abs(cU)*XU+Math.abs(QU)*zU,oU=Math.abs(yU)*XU+Math.abs(AU)*zU;return rU(rU(SU(-XU/2,-zU/2),UU),SU(FU/2,oU/2))})(rU(OU(XU??0),[zU?-1:1,0,0,0,1,0,0,0,1]),UU.info.width,UU.info.height)}else QU=qU;let AU=2;!1!==UU.track.metadata.disposition?.default&&(AU|=1);const FU="video"===UU.type?0:"audio"===UU.type?1:"subtitle"===UU.type?2:bU(UU);return yc("tkhd",+cU,AU,[yU(XU),yU(XU),xz(UU.track.id),xz(0),yU(zU),Array(8).fill(0),nz(0),nz(FU),bz("audio"===UU.type?1:0),nz(0),zc(QU),Tz("video"===UU.type?UU.info.width:0),Tz("video"===UU.type?UU.info.height:0)])},Nc=UU=>{const XU=UU.startTimestampOffset;if(CU(null!==XU),XU>0){const zU=Hy(XU,fy),cU=Hy(My(UU),fy),yU=!fU(zU)||!fU(cU),QU=yU?jz:xz,AU=yU?Kz:Jz;return cc("edts",void 0,[yc("elst",yU?1:0,0,[xz(2),QU(zU),AU(-1),Tz(1),QU(cU),AU(0),Tz(1)])])}{const cU=Hy(-XU,UU.timescale),yU=Math.max(0,Hy(My(UU),fy)+Hy(XU,fy)),QU=!((zU=cU)>=-(2**31)&&zU<2**31)||!fU(yU),AU=QU?jz:xz,FU=QU?Kz:Jz;return cc("edts",void 0,[yc("elst",QU?1:0,0,[xz(1),AU(yU),FU(cU),Tz(1)])])}var zU},Ic=(UU,XU)=>cc("mdia",void 0,[pc(UU,XU),gc(!0,ac[UU.type],tc[UU.type]),kc(UU)]),pc=(UU,XU)=>{const zU=Hy(My(UU),UU.timescale),cU=!fU(XU)||!fU(zU),yU=cU?jz:xz;return yc("mdhd",+cU,0,[yU(XU),yU(XU),xz(UU.timescale),yU(zU),nz(dy(UU.track.metadata.languageCode??hU)),nz(0)])},ac={video:"vide",audio:"soun",subtitle:"text"},tc={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},gc=function(UU,XU,zU){let cU=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return yc("hdlr",0,0,[UU?Xc("mhlr"):xz(0),Xc(XU),Xc(cU),xz(0),xz(0),Xc(zU,!0)])},kc=UU=>cc("minf",void 0,[Gc[UU.type](),Bc(),Pc(UU)]),Gc={video:()=>yc("vmhd",0,1,[nz(0),nz(0),nz(0),nz(0)]),audio:()=>yc("smhd",0,0,[nz(0),nz(0)]),subtitle:()=>yc("nmhd",0,0)},Bc=()=>cc("dinf",void 0,[Zc()]),Zc=()=>yc("dref",0,0,[xz(1)],[Rc()]),Rc=()=>yc("url ",0,1),Pc=UU=>{const XU=UU.compositionTimeOffsetTable.length>1||UU.compositionTimeOffsetTable.some((UU=>0!==UU.sampleCompositionTimeOffset));return cc("stbl",void 0,[Wc(UU),nc(UU),XU?jc(UU):null,XU?Kc(UU):null,lc(UU),xc(UU),Jc(UU),mc(UU)])},Wc=UU=>{let XU;if("video"===UU.type)XU=dc(Gy(UU.track.source._codec,UU.info.decoderConfig.codec),UU);else if("audio"===UU.type){const zU=Zy(UU.track.source._codec,UU.info.decoderConfig.codec,UU.muxer.isQuickTime);CU(zU),XU=qc(zU,UU)}else"subtitle"===UU.type&&(XU=sc(Py[UU.track.source._codec],UU));return CU(XU),yc("stsd",0,0,[xz(1)],[XU])},dc=(UU,XU)=>cc(UU,[Array(6).fill(0),nz(1),nz(0),nz(0),Array(12).fill(0),nz(XU.info.width),nz(XU.info.height),xz(4718592),xz(4718592),xz(0),nz(1),sz(18),Xc(WX),Array(13).fill(0),nz(XU.info.hasAlphaChannel?32:24),mz(65535)],[By[XU.track.source._codec]?.(XU)??null,ec(XU),xU(XU.info.decoderConfig.colorSpace)?null:Cc(XU),Lc(XU)]),Lc=UU=>0===UU.avgBitrate&&0===UU.maxBitrate?null:cc("btrt",[xz(0),xz(UU.maxBitrate),xz(UU.avgBitrate)]),ec=UU=>UU.info.pixelAspectRatio.num===UU.info.pixelAspectRatio.den?null:cc("pasp",[xz(UU.info.pixelAspectRatio.num),xz(UU.info.pixelAspectRatio.den)]),Cc=UU=>{const XU=UU.info.decoderConfig.colorSpace;return cc("colr",[Xc(UU.muxer.isQuickTime?"nclc":"nclx"),nz(null!=XU?.primaries?nU[XU.primaries]:2),nz(null!=XU?.transfer?mU[XU.transfer]:2),nz(null!=XU?.matrix?lU[XU.matrix]:2),UU.muxer.isQuickTime?[]:sz((XU?.fullRange?1:0)<<7)])},wc=UU=>{if(!UU.info.decoderConfig)return null;const XU=UU.info.decoderConfig,zU=XU.codec.split("."),cU=Number(zU[1]),yU=Number(zU[2]),QU=(Number(zU[3])<<4)+((zU[4]?Number(zU[4]):1)<<1)+(zU[8]?Number(zU[8]):Number(XU.colorSpace?.fullRange??0)),AU=zU[5]?Number(zU[5]):XU.colorSpace?.primaries?nU[XU.colorSpace.primaries]:1,FU=zU[6]?Number(zU[6]):XU.colorSpace?.transfer?mU[XU.colorSpace.transfer]:1,oU=zU[7]?Number(zU[7]):XU.colorSpace?.matrix?lU[XU.colorSpace.matrix]:1;return yc("vpcC",1,0,[sz(cU),sz(yU),sz(QU),sz(AU),sz(FU),sz(oU),nz(0)])},qc=(UU,XU)=>{let zU,cU=0,yU=16;const QU=Dz.includes(XU.track.source._codec);if(QU){const UU=XU.track.source._codec,{sampleSize:zU}=kz(UU);yU=8*zU,yU>16&&(cU=1)}if(XU.muxer.isQuickTime&&(cU=1),0===cU)zU=[Array(6).fill(0),nz(1),nz(cU),nz(0),xz(0),nz(XU.info.numberOfChannels),nz(yU),nz(0),nz(0),nz(XU.info.sampleRate<65536?XU.info.sampleRate:0),nz(0)];else{const UU=QU?0:-2;zU=[Array(6).fill(0),nz(1),nz(cU),nz(0),xz(0),nz(XU.info.numberOfChannels),nz(Math.min(yU,16)),mz(UU),nz(0),nz(XU.info.sampleRate<65536?XU.info.sampleRate:0),nz(0),QU?[xz(1),xz(yU/8),xz(XU.info.numberOfChannels*yU/8)]:[xz(0),xz(0),xz(0)],xz(2)]}return cc(UU,zU,[Ry(XU.track.source._codec,XU.muxer.isQuickTime)?.(XU)??null,Lc(XU)])},Oc=UU=>{let XU;switch(UU.track.source._codec){case"aac":XU=64;break;case"mp3":XU=107;break;case"vorbis":XU=221;break;default:throw new Error(`Unhandled audio codec: ${UU.track.source._codec}`)}let zU=[...sz(XU),...sz(21),...lz(0),...xz(UU.maxBitrate),...xz(UU.avgBitrate)];if(UU.info.decoderConfig.description){const XU=MU(UU.info.decoderConfig.description);zU=[...zU,...sz(5),...Uc(XU.byteLength),...XU]}return zU=[...nz(1),...sz(0),...sz(4),...Uc(zU.length),...zU,...sz(6),...sz(1),...sz(2)],zU=[...sz(3),...Uc(zU.length),...zU],yc("esds",0,0,zU)},Sc=UU=>cc("wave",void 0,[rc(UU),uc(UU),cc("\\0\\0\\0\\0")]),rc=UU=>cc("frma",[Xc(Zy(UU.track.source._codec,UU.info.decoderConfig.codec,UU.muxer.isQuickTime))]),uc=UU=>{const{littleEndian:XU}=kz(UU.track.source._codec);return cc("enda",[nz(+XU)])},fc=UU=>{let XU=UU.info.numberOfChannels,zU=3840,cU=UU.info.sampleRate,yU=0,QU=0,AU=new Uint8Array(0);const FU=UU.info.decoderConfig?.description;if(FU){CU(FU.byteLength>=18);const UU=MU(FU),oU=xX(UU);XU=oU.outputChannelCount,zU=oU.preSkip,cU=oU.inputSampleRate,yU=oU.outputGain,QU=oU.channelMappingFamily,oU.channelMappingTable&&(AU=oU.channelMappingTable)}return cc("dOps",[sz(0),sz(XU),nz(zU),xz(cU),mz(yU),sz(QU),...AU])},ic=UU=>{const XU=UU.info.decoderConfig?.description;CU(XU);const zU=MU(XU);return yc("dfLa",0,0,[...zU.subarray(4)])},Hc=UU=>{const{littleEndian:XU,sampleSize:zU}=kz(UU.track.source._codec);return yc("pcmC",0,0,[sz(+XU),sz(8*zU)])},Mc=UU=>{CU(UU.info.primingPacket);const XU=(UU=>{if(UU.length<7)return null;if(11!==UU[0]||119!==UU[1])return null;const XU=new IX(UU);XU.skipBits(16),XU.skipBits(16);const zU=XU.readBits(2);if(3===zU)return null;const cU=XU.readBits(6),yU=XU.readBits(5);if(yU>8)return null;const QU=XU.readBits(3),AU=XU.readBits(3);return 0!==(1&AU)&&1!==AU&&XU.skipBits(2),0!==(4&AU)&&XU.skipBits(2),2===AU&&XU.skipBits(2),{fscod:zU,bsid:yU,bsmod:QU,acmod:AU,lfeon:XU.readBits(1),bitRateCode:Math.floor(cU/2)}})(UU.info.primingPacket.data);if(!XU)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const zU=new Uint8Array(3),cU=new IX(zU);return cU.writeBits(2,XU.fscod),cU.writeBits(5,XU.bsid),cU.writeBits(3,XU.bsmod),cU.writeBits(3,XU.acmod),cU.writeBits(1,XU.lfeon),cU.writeBits(5,XU.bitRateCode),cU.writeBits(5,0),cc("dac3",[...zU])},vc=UU=>{CU(UU.info.primingPacket);const XU=(UU=>{if(UU.length<6)return null;if(11!==UU[0]||119!==UU[1])return null;const XU=new IX(UU);XU.skipBits(16);const zU=XU.readBits(2);if(XU.skipBits(3),0!==zU&&2!==zU)return null;const cU=XU.readBits(11),yU=XU.readBits(2);let QU,AU=0;3===yU?(AU=XU.readBits(2),QU=3):QU=XU.readBits(2);const FU=XU.readBits(3),oU=XU.readBits(1),DU=XU.readBits(5);if(DU<11||DU>16)return null;const EU=jX[QU];let YU;return YU=yU<3?RX[yU]/1e3:PX[AU]/1e3,{dataRate:Math.round((cU+1)*YU/(16*EU)),substreams:[{fscod:yU,fscod2:AU,bsid:DU,bsmod:0,acmod:FU,lfeon:oU,numDepSub:0,chanLoc:0}]}})(UU.info.primingPacket.data);if(!XU)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let zU=16;for(const AU of XU.substreams)zU+=23,AU.numDepSub>0?zU+=9:zU+=1;const cU=Math.ceil(zU/8),yU=new Uint8Array(cU),QU=new IX(yU);QU.writeBits(13,XU.dataRate),QU.writeBits(3,XU.substreams.length-1);for(const AU of XU.substreams)QU.writeBits(2,AU.fscod),QU.writeBits(5,AU.bsid),QU.writeBits(1,0),QU.writeBits(1,0),QU.writeBits(3,AU.bsmod),QU.writeBits(3,AU.acmod),QU.writeBits(1,AU.lfeon),QU.writeBits(3,0),QU.writeBits(4,AU.numDepSub),AU.numDepSub>0?QU.writeBits(9,AU.chanLoc):QU.writeBits(1,0);return cc("dec3",[...yU])},Vc=UU=>{CU(UU.info.primingPacket);const XU=yz(UU.info.primingPacket.data);if(!XU)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return cc("ddts",[...Fz(XU)])},sc=(UU,XU)=>cc(UU,[Array(6).fill(0),nz(1)],[Wy[XU.track.source._codec](XU),Lc(XU)]),nc=UU=>yc("stts",0,0,[xz(UU.timeToSampleTable.length),UU.timeToSampleTable.map((UU=>[xz(UU.sampleCount),xz(UU.sampleDelta)]))]),mc=UU=>{if(UU.samples.every((UU=>"key"===UU.type)))return null;const XU=[...UU.samples.entries()].filter((UU=>{let[,XU]=UU;return"key"===XU.type}));return yc("stss",0,0,[xz(XU.length),XU.map((UU=>{let[XU]=UU;return xz(XU+1)}))])},lc=UU=>yc("stsc",0,0,[xz(UU.compactlyCodedChunkTable.length),UU.compactlyCodedChunkTable.map((UU=>[xz(UU.firstChunk),xz(UU.samplesPerChunk),xz(1)]))]),xc=UU=>{if("audio"===UU.type&&UU.info.requiresPcmTransformation){const{sampleSize:XU}=kz(UU.track.source._codec);return yc("stsz",0,0,[xz(XU*UU.info.numberOfChannels),xz(UU.samples.reduce(((XU,zU)=>XU+Hy(zU.duration,UU.timescale)),0))])}return yc("stsz",0,0,[xz(0),xz(UU.samples.length),UU.samples.map((UU=>xz(UU.size)))])},Jc=UU=>UU.finalizedChunks.length>0&&uU(UU.finalizedChunks).offset>=2**32?yc("co64",0,0,[xz(UU.finalizedChunks.length),UU.finalizedChunks.map((UU=>jz(UU.offset)))]):yc("stco",0,0,[xz(UU.finalizedChunks.length),UU.finalizedChunks.map((UU=>xz(UU.offset)))]),jc=UU=>yc("ctts",1,0,[xz(UU.compositionTimeOffsetTable.length),UU.compositionTimeOffsetTable.map((UU=>[xz(UU.sampleCount),Jz(UU.sampleCompositionTimeOffset)]))]),Kc=UU=>{let XU=1/0,zU=-1/0,cU=1/0,yU=-1/0;CU(UU.compositionTimeOffsetTable.length>0),CU(UU.samples.length>0);for(let AU=0;AU<UU.compositionTimeOffsetTable.length;AU++){const cU=UU.compositionTimeOffsetTable[AU];XU=Math.min(XU,cU.sampleCompositionTimeOffset),zU=Math.max(zU,cU.sampleCompositionTimeOffset)}for(let AU=0;AU<UU.samples.length;AU++){const XU=UU.samples[AU];cU=Math.min(cU,Hy(XU.timestamp,UU.timescale)),yU=Math.max(yU,Hy(XU.timestamp+XU.duration,UU.timescale))}const QU=Math.max(-XU,0);return yU>=2**31?null:yc("cslg",0,0,[Jz(QU),Jz(XU),Jz(zU),Jz(cU),Jz(yU)])},bc=UU=>cc("mvex",void 0,UU.map(Tc)),Tc=UU=>yc("trex",0,0,[xz(UU.track.id),xz(1),xz(0),xz(0),xz(0)]),hc=(UU,XU)=>cc("moof",void 0,[Uy(UU),...XU.map(zy)]),Uy=UU=>yc("mfhd",0,0,[xz(UU)]),Xy=UU=>{let XU=0,zU=0;const cU="delta"===UU.type;return zU|=+cU,XU|=cU?1:2,XU<<24|zU<<16},zy=UU=>cc("traf",void 0,[cy(UU),yy(UU),Qy(UU)]),cy=UU=>{CU(UU.currentChunk);let XU=0;XU|=8,XU|=16,XU|=32,XU|=131072;const zU=UU.currentChunk.samples[1]??UU.currentChunk.samples[0],cU={duration:zU.timescaleUnitsToNextSample,size:zU.size,flags:Xy(zU)};return yc("tfhd",0,131128,[xz(UU.track.id),xz(cU.duration),xz(cU.size),xz(cU.flags)])},yy=UU=>(CU(UU.currentChunk),yc("tfdt",1,0,[jz(Hy(UU.currentChunk.startTimestamp,UU.timescale))])),Qy=UU=>{CU(UU.currentChunk);const XU=UU.currentChunk.samples.map((UU=>UU.timescaleUnitsToNextSample)),zU=UU.currentChunk.samples.map((UU=>UU.size)),cU=UU.currentChunk.samples.map(Xy),yU=UU.currentChunk.samples.map((XU=>Hy(XU.timestamp-XU.decodeTimestamp,UU.timescale))),QU=new Set(XU),AU=new Set(zU),FU=new Set(cU),oU=new Set(yU),DU=2===FU.size&&cU[0]!==cU[1],EU=QU.size>1,YU=AU.size>1,NU=!DU&&FU.size>1,IU=oU.size>1||[...oU].some((UU=>0!==UU));let pU=0;return pU|=1,pU|=4*+DU,pU|=256*+EU,pU|=512*+YU,pU|=1024*+NU,pU|=2048*+IU,yc("trun",1,pU,[xz(UU.currentChunk.samples.length),xz(UU.currentChunk.offset-UU.currentChunk.moofOffset||0),DU?xz(cU[0]):[],UU.currentChunk.samples.map(((UU,QU)=>[EU?xz(XU[QU]):[],YU?xz(zU[QU]):[],NU?xz(cU[QU]):[],IU?Jz(yU[QU]):[]]))])},Ay=UU=>yc("tfra",1,0,[xz(UU.track.id),xz(63),xz(UU.finalizedChunks.length),UU.finalizedChunks.map((XU=>[jz(Hy(XU.samples[0].timestamp,UU.timescale)),jz(XU.moofOffset),xz(XU.trafIndex+1),xz(1),xz(1)]))]),Fy=()=>yc("mfro",0,0,[xz(0)]),oy=()=>cc("vtte"),Dy=(UU,XU,zU,cU,yU)=>cc("vttc",void 0,[null!==yU?cc("vsid",[Jz(yU)]):null,null!==zU?cc("iden",[...sU.encode(zU)]):null,null!==XU?cc("ctim",[...sU.encode(Hz(XU))]):null,null!==cU?cc("sttg",[...sU.encode(cU)]):null,cc("payl",[...sU.encode(UU)])]),Ey=UU=>cc("vtta",[...sU.encode(UU)]),Yy=UU=>{const XU=[],zU=UU.format._options.metadataFormat??"auto",cU=UU.output._metadataTags;if("mdir"===zU||"auto"===zU&&!UU.isQuickTime){const UU=ty(cU);UU&&XU.push(UU)}else if("mdta"===zU){const UU=gy(cU);UU&&XU.push(UU)}else("udta"===zU||"auto"===zU&&UU.isQuickTime)&&Ny(XU,UU.output._metadataTags);return 0===XU.length?null:cc("udta",void 0,XU)},Ny=(UU,XU)=>{for(const{key:zU,value:cU}of QX(XU))switch(zU){case"title":UU.push(Iy("\\xa9nam",cU));break;case"description":UU.push(Iy("\\xa9des",cU));break;case"artist":UU.push(Iy("\\xa9ART",cU));break;case"album":UU.push(Iy("\\xa9alb",cU));break;case"albumArtist":UU.push(Iy("albr",cU));break;case"genre":UU.push(Iy("\\xa9gen",cU));break;case"date":UU.push(Iy("\\xa9day",cU.toISOString().slice(0,10)));break;case"comment":UU.push(Iy("\\xa9cmt",cU));break;case"lyrics":UU.push(Iy("\\xa9lyr",cU));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:bU(zU)}if(XU.raw)for(const zU in XU.raw){const cU=XU.raw[zU];null==cU||4!==zU.length||UU.some((UU=>UU.type===zU))||("string"===typeof cU?UU.push(Iy(zU,cU)):cU instanceof Uint8Array&&UU.push(cc(zU,Array.from(cU))))}},Iy=(UU,XU)=>{const zU=sU.encode(XU);return cc(UU,[nz(zU.length),nz(dy("und")),Array.from(zU)])},py={"image/jpeg":13,"image/png":14,"image/bmp":27},ay=(UU,XU)=>{const zU=[];for(const{key:cU,value:yU}of QX(UU))switch(cU){case"title":zU.push({key:XU?"title":"\\xa9nam",value:ky(yU)});break;case"description":zU.push({key:XU?"description":"\\xa9des",value:ky(yU)});break;case"artist":zU.push({key:XU?"artist":"\\xa9ART",value:ky(yU)});break;case"album":zU.push({key:XU?"album":"\\xa9alb",value:ky(yU)});break;case"albumArtist":zU.push({key:XU?"album_artist":"aART",value:ky(yU)});break;case"comment":zU.push({key:XU?"comment":"\\xa9cmt",value:ky(yU)});break;case"genre":zU.push({key:XU?"genre":"\\xa9gen",value:ky(yU)});break;case"beatsPerMinute":XU||zU.push({key:"tmpo",value:cc("data",[xz(21),xz(0),nz(yU)])});break;case"lyrics":zU.push({key:XU?"lyrics":"\\xa9lyr",value:ky(yU)});break;case"date":zU.push({key:XU?"date":"\\xa9day",value:ky(yU.toISOString().slice(0,10))});break;case"images":for(const UU of yU)"coverFront"===UU.kind&&zU.push({key:"covr",value:cc("data",[xz(py[UU.mimeType]??0),xz(0),Array.from(UU.data)])});break;case"trackNumber":if(XU){const XU=void 0!==UU.tracksTotal?`${yU}/${UU.tracksTotal}`:yU.toString();zU.push({key:"track",value:ky(XU)})}else zU.push({key:"trkn",value:cc("data",[xz(0),xz(0),nz(0),nz(yU),nz(UU.tracksTotal??0),nz(0)])});break;case"discNumber":XU||zU.push({key:"disc",value:cc("data",[xz(0),xz(0),nz(0),nz(yU),nz(UU.discsTotal??0),nz(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:bU(cU)}if(UU.raw)for(const cU in UU.raw){const yU=UU.raw[cU];null==yU||!XU&&4!==cU.length||zU.some((UU=>UU.key===cU))||("string"===typeof yU?zU.push({key:cU,value:ky(yU)}):yU instanceof Uint8Array?zU.push({key:cU,value:cc("data",[xz(0),xz(0),Array.from(yU)])}):yU instanceof YX&&zU.push({key:cU,value:cc("data",[xz(py[yU.mimeType]??0),xz(0),Array.from(yU.data)])}))}return zU},ty=UU=>{const XU=ay(UU,!1);return 0===XU.length?null:yc("meta",0,0,void 0,[gc(!1,"mdir","","appl"),cc("ilst",void 0,XU.map((UU=>cc(UU.key,void 0,[UU.value]))))])},gy=UU=>{const XU=ay(UU,!0);return 0===XU.length?null:cc("meta",void 0,[gc(!1,"mdta",""),yc("keys",0,0,[xz(XU.length)],XU.map((UU=>cc("mdta",[...sU.encode(UU.key)])))),cc("ilst",void 0,XU.map(((UU,XU)=>{const zU=String.fromCharCode(...xz(XU+1));return cc(zU,void 0,[UU.value])})))])},ky=UU=>cc("data",[xz(1),xz(0),...sU.encode(UU)]),Gy=(UU,XU)=>{switch(UU){case"avc":return XU.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return XU}},By={avc:UU=>UU.info.decoderConfig&&cc("avcC",[...MU(UU.info.decoderConfig.description)]),hevc:UU=>UU.info.decoderConfig&&cc("hvcC",[...MU(UU.info.decoderConfig.description)]),vp8:wc,vp9:wc,av1:UU=>cc("av1C",tz(UU.info.decoderConfig.codec)),prores:null},Zy=(UU,XU,zU)=>{switch(UU){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return XU}if(zU)switch(UU){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(UU){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},Ry=(UU,XU)=>{switch(UU){case"aac":case"mp3":case"vorbis":return Oc;case"opus":return fc;case"flac":return ic;case"ac3":return Mc;case"eac3":return vc;case"dts":return Vc}if(XU)switch(UU){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return Sc}else switch(UU){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return Hc}return null},Py={webvtt:"wvtt"},Wy={webvtt:UU=>cc("vttC",[...sU.encode(UU.info.config.description)])},dy=UU=>{CU(3===UU.length);let XU=0;for(let zU=0;zU<3;zU++)XU<<=5,XU+=UU.charCodeAt(zU)-96;return XU};class Ly{constructor(UU,XU){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,UU._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=UU,UU._setMonotonicity(XU),UU._writerAcquired=!0}start(){CU(!this.started),this.target._start(),this.started=!0}write(UU){CU(this.started&&!this.finalized),this.maybeTrackWrites(UU),this.target._write(UU,this.pos),this.pos+=UU.byteLength}seek(UU){this.pos=UU}getPos(){return this.pos}async flush(){return CU(this.started&&!this.finalized),this.target._flush()}async finalize(){CU(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(UU){if(!this.trackedWrites)return;let XU=this.getPos();if(XU<this.trackedStart){if(XU+UU.byteLength<=this.trackedStart)return;UU=UU.subarray(this.trackedStart-XU),XU=0}const zU=XU+UU.byteLength-this.trackedStart;let cU=this.trackedWrites.byteLength;for(;cU<zU;)cU*=2;if(cU!==this.trackedWrites.byteLength){const UU=new Uint8Array(cU);UU.set(this.trackedWrites,0),this.trackedWrites=UU}this.trackedWrites.set(UU,XU-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,XU+UU.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const UU={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,UU}}zU(12);class ey extends DX{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(UU){!1!==this._monotonicity&&(this._monotonicity=UU)}_dispatchWrite(UU,XU){this.onwrite?.(UU,XU),this._emit("write",{start:UU,end:XU})}slice(UU){if(!Number.isInteger(UU)||UU<0)throw new TypeError("offset must be a non-negative integer.");return new Sy(this,UU)}}const Cy=65536,wy=2**32;class qy extends ey{constructor(){let UU=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!UU||"object"!==typeof UU)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==UU.onFinalize&&"function"!==typeof UU.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=UU,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Cy,{maxByteLength:wy})}catch{this._buffer=new ArrayBuffer(Cy),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Cy);this._bytes=new Uint8Array(this._buffer)}_ensureSize(UU){let XU=this._buffer.byteLength;for(;XU<UU;)XU*=2;if(XU!==this._buffer.byteLength){if(XU>wy)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(XU);else{const UU=new ArrayBuffer(XU),zU=new Uint8Array(UU);zU.set(this._bytes,0),this._buffer=UU,this._bytes=zU}}}_start(){}_write(UU,XU){this._ensureSize(XU+UU.byteLength),this._bytes.set(UU,XU),this._maxPos=Math.max(this._maxPos,XU+UU.byteLength),this._dispatchWrite(XU,XU+UU.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(UU,XU){return this._bytes.slice(UU,XU)}}class Oy extends ey{_start(){}_write(UU,XU){this._dispatchWrite(XU,XU+UU.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class Sy extends ey{constructor(UU,XU){super(),this._baseTarget=UU,this._offset=XU}_start(){}_write(UU,XU){this._baseTarget._write(UU,this._offset+XU),this._dispatchWrite(XU,XU+UU.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(UU){super._setMonotonicity(UU),this._baseTarget._setMonotonicity(UU)}}class ry{constructor(UU,XU){if(this.rootPath=UU,this.getTarget=XU,"string"!==typeof UU)throw new TypeError("rootPath must be a string.");if("function"!==typeof XU)throw new TypeError("getTarget must be a function.")}}const uy=UU=>{const XU=UU.filePos,zU=Sz(UU,9),cU=new IX(zU);if(4095!==cU.readBits(12))return null;cU.skipBits(1);if(0!==cU.readBits(2))return null;const yU=cU.readBits(1),QU=cU.readBits(2)+1,AU=cU.readBits(4);if(15===AU)return null;cU.skipBits(1);const FU=cU.readBits(3);if(0===FU)throw new Error("ADTS frames with channel configuration 0 are not supported.");cU.skipBits(1),cU.skipBits(1),cU.skipBits(1),cU.skipBits(1);const oU=cU.readBits(13);cU.skipBits(11);const DU=cU.readBits(2)+1;if(1!==DU)throw new Error("ADTS frames with more than one AAC frame are not supported.");let EU=null;return 1===yU?UU.filePos-=2:EU=cU.readBits(16),{objectType:QU,samplingFrequencyIndex:AU,channelConfiguration:FU,frameLength:oU,numberOfAacFrames:DU,crcCheck:EU,startPos:XU}},fy=57600,iy=UU=>{const XU={},zU=UU.track;return void 0!==zU.metadata.name&&(XU.name=zU.metadata.name),XU},Hy=function(UU,XU){const zU=UU*XU;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(zU):zU},My=UU=>{if(0===UU.samples.length)return 0;let XU=1/0,zU=-1/0;for(let cU=0;cU<UU.samples.length;cU++){const yU=UU.samples[cU];yU.timestamp<XU&&(XU=yU.timestamp),yU.timestamp+yU.duration>zU&&(zU=yU.timestamp+yU.duration)}return XU===1/0?0:zU-XU};class vy extends fz{constructor(UU,XU){super(UU),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new qy,this.auxWriter=new Ly(this.auxTarget,!1),this.auxBoxWriter=new Mz(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=KU(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=XU,this.formatOptions={...XU._options},this.isQuickTime=XU instanceof EQ,this.isCmaf=XU instanceof DQ,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(XU instanceof DQ?1/0:1),this.auxWriter.start()}async start(){const UU=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((UU=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:UU instanceof qy)),this.boxWriter=new Mz(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof qy&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const UU=await this.output._getInitTarget(),XU=new Ly(UU,!0);XU.start(),this.initWriter=XU,this.initBoxWriter=new Mz(XU)}const XU=this.output.tracks.some((UU=>UU.isVideoTrack()&&"avc"===UU.source._codec));{const UU=this.initBoxWriter??this.boxWriter;if(CU(UU),this.formatOptions.onFtyp&&UU.writer.startTrackingWrites(),UU.writeBox((UU=>{const XU=512;return UU.isQuickTime?cc("ftyp",[Xc("qt  "),xz(XU),Xc("qt  ")]):UU.fragmented?UU.cmaf?cc("ftyp",[Xc("iso5"),xz(XU),Xc("iso5"),Xc("iso6"),Xc("mp41"),Xc("cmfc"),Xc("dash")]):cc("ftyp",[Xc("iso5"),xz(XU),Xc("iso5"),Xc("iso6"),Xc("mp41")]):cc("ftyp",[Xc("isom"),xz(XU),Xc("isom"),UU.holdsAvc?Xc("avc1"):[],Xc("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:XU,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:XU,start:zU}=UU.writer.stopTrackingWrites();this.formatOptions.onFtyp(XU,zU)}this.ftypSize=UU.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const zU of this.output.tracks)if(void 0===zU.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(CU(this.writer),CU(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Fc(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const zU of this.output.tracks)zU.isVideoTrack()&&zU.metadata.decoderConfig?this.getVideoTrackData(zU,zU.metadata.primingPacket??null,{decoderConfig:zU.metadata.decoderConfig}):zU.isAudioTrack()&&zU.metadata.decoderConfig&&this.getAudioTrackData(zU,zU.metadata.primingPacket??null,{decoderConfig:zU.metadata.decoderConfig});UU()}allTracksAreKnown(){for(const UU of this.output.tracks)if(!UU.source._closed&&!this.trackDatas.some((XU=>XU.track===UU)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const UU=this.trackDatas.map((UU=>{if("video"===UU.type)return UU.info.decoderConfig.codec;if("audio"===UU.type)return UU.info.decoderConfig.codec;return{webvtt:"wvtt"}[UU.track.source._codec]}));return(UU=>{let XU=(UU.hasVideo?"video/":UU.hasAudio?"audio/":"application/")+(UU.isQuickTime?"quicktime":"mp4");UU.codecStrings.length>0&&(XU+=`; codecs="${[...new Set(UU.codecStrings)].join(", ")}"`);return XU})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((UU=>"video"===UU.type)),hasAudio:this.trackDatas.some((UU=>"audio"===UU.type)),codecStrings:UU})}getVideoTrackData(UU,XU,zU){const cU=this.trackDatas.find((XU=>XU.track===UU));if(cU)return cU;dz(zU,UU.source._codec),CU(zU),CU(zU.decoderConfig);const yU={...zU.decoderConfig};CU(void 0!==yU.codedWidth),CU(void 0!==yU.codedHeight);let QU=!1;if("avc"!==UU.source._codec||yU.description){if("hevc"===UU.source._codec&&!yU.description){if(!XU)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const UU=iX(XU.data);if(!UU)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");yU.description=(UU=>{const XU=[];XU.push(UU.configurationVersion),XU.push((3&UU.generalProfileSpace)<<6|(1&UU.generalTierFlag)<<5|31&UU.generalProfileIdc),XU.push(UU.generalProfileCompatibilityFlags>>>24&255),XU.push(UU.generalProfileCompatibilityFlags>>>16&255),XU.push(UU.generalProfileCompatibilityFlags>>>8&255),XU.push(255&UU.generalProfileCompatibilityFlags),XU.push(...UU.generalConstraintIndicatorFlags),XU.push(255&UU.generalLevelIdc),XU.push(240|UU.minSpatialSegmentationIdc>>8&15),XU.push(255&UU.minSpatialSegmentationIdc),XU.push(252|3&UU.parallelismType),XU.push(252|3&UU.chromaFormatIdc),XU.push(248|7&UU.bitDepthLumaMinus8),XU.push(248|7&UU.bitDepthChromaMinus8),XU.push(UU.avgFrameRate>>8&255),XU.push(255&UU.avgFrameRate),XU.push((3&UU.constantFrameRate)<<6|(7&UU.numTemporalLayers)<<3|(1&UU.temporalIdNested)<<2|3&UU.lengthSizeMinusOne),XU.push(255&UU.arrays.length);for(const zU of UU.arrays){XU.push((1&zU.arrayCompleteness)<<7|63&zU.nalUnitType),XU.push(zU.nalUnits.length>>8&255),XU.push(255&zU.nalUnits.length);for(const UU of zU.nalUnits){XU.push(UU.length>>8&255),XU.push(255&UU.length);for(let zU=0;zU<UU.length;zU++)XU.push(UU[zU])}}return new Uint8Array(XU)})(UU),QU=!0}}else{if(!XU)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const UU=OX(XU.data);if(!UU)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");yU.description=(UU=>{const XU=[];XU.push(UU.configurationVersion),XU.push(UU.avcProfileIndication),XU.push(UU.profileCompatibility),XU.push(UU.avcLevelIndication),XU.push(252|3&UU.lengthSizeMinusOne),XU.push(224|31&UU.sequenceParameterSets.length);for(const zU of UU.sequenceParameterSets){const UU=zU.byteLength;XU.push(UU>>8),XU.push(255&UU);for(let cU=0;cU<UU;cU++)XU.push(zU[cU])}XU.push(UU.pictureParameterSets.length);for(const zU of UU.pictureParameterSets){const UU=zU.byteLength;XU.push(UU>>8),XU.push(255&UU);for(let cU=0;cU<UU;cU++)XU.push(zU[cU])}if((100===UU.avcProfileIndication||110===UU.avcProfileIndication||122===UU.avcProfileIndication||144===UU.avcProfileIndication)&&null!==UU.chromaFormat){CU(null!==UU.bitDepthLumaMinus8),CU(null!==UU.bitDepthChromaMinus8),CU(null!==UU.sequenceParameterSetExt),XU.push(252|3&UU.chromaFormat),XU.push(248|7&UU.bitDepthLumaMinus8),XU.push(248|7&UU.bitDepthChromaMinus8),XU.push(UU.sequenceParameterSetExt.length);for(const zU of UU.sequenceParameterSetExt){const UU=zU.byteLength;XU.push(UU>>8),XU.push(255&UU);for(let cU=0;cU<UU;cU++)XU.push(zU[cU])}}return new Uint8Array(XU)})(UU),QU=!0}const AU=((UU,XU)=>{const zU=UU<0?-1:1;let cU=0,yU=1,QU=1,AU=0,FU=UU=Math.abs(UU);for(;;){const UU=Math.floor(FU),oU=UU*QU+cU,DU=UU*AU+yU;if(DU>XU)return{num:zU*QU,den:AU};if(cU=QU,yU=AU,QU=oU,AU=DU,FU=1/(FU-UU),!isFinite(FU))break}return{num:zU*QU,den:AU}})(1/(UU.metadata.frameRate??fy),1e6).den,FU=yU.displayAspectWidth,oU=yU.displayAspectHeight,DU=void 0===FU||void 0===oU?{num:1,den:1}:FX({num:FU*yU.codedHeight,den:oU*yU.codedWidth}),EU="ap4h"===yU.codec||"ap4x"===yU.codec,YU={muxer:this,track:UU,type:"video",info:{width:yU.codedWidth,height:yU.codedHeight,pixelAspectRatio:DU,decoderConfig:yU,requiresAnnexBTransformation:QU,hasAlphaChannel:EU},timescale:AU,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:UU.source._nominalBitrate??UU.metadata.averageBitrate??0,maxBitrate:UU.source._nominalBitrate??UU.metadata.bitrate??0};return this.trackDatas.push(YU),this.trackDatas.sort(((UU,XU)=>UU.track.id-XU.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),YU}getAudioTrackData(UU,XU,zU){const cU=this.trackDatas.find((XU=>XU.track===UU));if(cU)return cU;ez(zU,UU.source._codec),CU(zU),CU(zU.decoderConfig);const yU={...zU.decoderConfig};let QU=!1;if("aac"===UU.source._codec&&!yU.description){if(!XU)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const UU=uy(qz.tempFromBytes(XU.data));if(!UU)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const zU=pX[UU.samplingFrequencyIndex],cU=aX[UU.channelConfiguration];if(void 0===zU||void 0===cU)throw new Error("Invalid ADTS frame header.");yU.description=tX({objectType:UU.objectType,outputSampleRate:zU,outputNumberOfChannels:cU}),QU=!0}if(!XU){if("ac3"===UU.source._codec||"eac3"===UU.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===UU.source._codec)throw new Error("DTS requires a priming packet.")}const AU={muxer:this,track:UU,type:"audio",info:{numberOfChannels:zU.decoderConfig.numberOfChannels,sampleRate:zU.decoderConfig.sampleRate,decoderConfig:yU,requiresPcmTransformation:!this.isFragmented&&Dz.includes(UU.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:QU,primingPacket:XU},timescale:yU.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:UU.source._nominalBitrate??UU.metadata.averageBitrate??0,maxBitrate:UU.source._nominalBitrate??UU.metadata.bitrate??0};return this.trackDatas.push(AU),this.trackDatas.sort(((UU,XU)=>UU.track.id-XU.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),AU}getSubtitleTrackData(UU,XU){const zU=this.trackDatas.find((XU=>XU.track===UU));if(zU)return zU;Cz(XU),CU(XU),CU(XU.config);const cU={muxer:this,track:UU,type:"subtitle",info:{config:XU.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:UU.source._nominalBitrate??UU.metadata.averageBitrate??0,maxBitrate:UU.source._nominalBitrate??UU.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(cU),this.trackDatas.sort(((UU,XU)=>UU.track.id-XU.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),cU}async addEncodedVideoPacket(UU,XU,zU){const cU=await this.mutex.acquire();try{const cU=this.getVideoTrackData(UU,XU,zU);let yU=XU.data;if(cU.info.requiresAnnexBTransformation){const UU=[...eX(yU)].map((UU=>yU.subarray(UU.offset,UU.offset+UU.length)));if(0===UU.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");yU=qX(UU,4)}this.validateTimestamp(cU.track,XU.timestamp,"key"===XU.type);const QU=this.createSampleForTrack(cU,yU,XU.timestamp,XU.duration,XU.type);await this.registerSample(cU,QU)}finally{cU()}}async addEncodedAudioPacket(UU,XU,zU){const cU=await this.mutex.acquire();try{const cU=this.getAudioTrackData(UU,XU,zU);let yU=XU.data;if(cU.info.requiresAdtsStripping){const UU=uy(qz.tempFromBytes(yU));if(!UU)throw new Error("Expected ADTS frame, didn\'t get one.");const XU=null===UU.crcCheck?7:9;yU=yU.subarray(XU)}this.validateTimestamp(cU.track,XU.timestamp,"key"===XU.type);let QU=XU.timestamp,AU=XU.duration;if(cU.info.requiresPcmTransformation){const UU=kz(cU.info.decoderConfig.codec).sampleSize*cU.info.numberOfChannels;if(AU=yU.byteLength/UU/cU.info.sampleRate,null!==cU.info.expectedNextPcmPacketTimestamp){const UU=QU-cU.info.expectedNextPcmPacketTimestamp;if(UU<.01)QU=cU.info.expectedNextPcmPacketTimestamp;else{const XU=await this.padWithSilence(cU,cU.info.expectedNextPcmPacketTimestamp,UU);QU=cU.info.expectedNextPcmPacketTimestamp+XU}}cU.info.expectedNextPcmPacketTimestamp=QU+AU}const FU=this.createSampleForTrack(cU,yU,QU,AU,XU.type);await this.registerSample(cU,FU)}finally{cU()}}async padWithSilence(UU,XU,zU){const cU=Hy(zU,UU.timescale);if(zU=cU/UU.timescale,cU>0){const{sampleSize:yU,silentValue:QU}=kz(UU.info.decoderConfig.codec),AU=cU*UU.info.numberOfChannels,FU=new Uint8Array(yU*AU).fill(QU),oU=this.createSampleForTrack(UU,new Uint8Array(FU.buffer),XU,zU,"key");await this.registerSample(UU,oU)}return zU}async addSubtitleCue(UU,XU,zU){const cU=await this.mutex.acquire();try{const cU=this.getSubtitleTrackData(UU,zU);this.validateTimestamp(cU.track,XU.timestamp,!0),"webvtt"===UU.source._codec&&(cU.cueQueue.push(XU),await this.processWebVTTCues(cU,XU.timestamp))}finally{cU()}}async processWebVTTCues(UU,XU){for(;UU.cueQueue.length>0;){UU.lastCueEndTimestamp??=Math.min(0,UU.cueQueue[0].timestamp);const zU=new Set([]);for(const oU of UU.cueQueue)CU(oU.timestamp<=XU),CU(UU.lastCueEndTimestamp<=oU.timestamp+oU.duration),zU.add(Math.max(oU.timestamp,UU.lastCueEndTimestamp)),zU.add(oU.timestamp+oU.duration);const cU=[...zU].sort(((UU,XU)=>UU-XU)),yU=cU[0],QU=cU[1]??yU;if(XU<QU)break;if(UU.lastCueEndTimestamp<yU){this.auxWriter.seek(0);const XU=oy();this.auxBoxWriter.writeBox(XU);const zU=this.auxTarget._getSlice(0,this.auxWriter.getPos()),cU=this.createSampleForTrack(UU,zU,UU.lastCueEndTimestamp,yU-UU.lastCueEndTimestamp,"key");await this.registerSample(UU,cU),UU.lastCueEndTimestamp=yU}this.auxWriter.seek(0);for(let XU=0;XU<UU.cueQueue.length;XU++){const zU=UU.cueQueue[XU];if(zU.timestamp>=QU)break;iz.lastIndex=0;const cU=iz.test(zU.text),AU=zU.timestamp+zU.duration;let FU=UU.cueToSourceId.get(zU);if(void 0===FU&&QU<AU&&(FU=UU.nextSourceId++,UU.cueToSourceId.set(zU,FU)),zU.notes){const UU=Ey(zU.notes);this.auxBoxWriter.writeBox(UU)}const oU=Dy(zU.text,cU?yU:null,zU.identifier??null,zU.settings??null,FU??null);this.auxBoxWriter.writeBox(oU),AU===QU&&UU.cueQueue.splice(XU--,1)}const AU=this.auxTarget._getSlice(0,this.auxWriter.getPos()),FU=this.createSampleForTrack(UU,AU,yU,QU-yU,"key");await this.registerSample(UU,FU),UU.lastCueEndTimestamp=QU}}createSampleForTrack(UU,XU,zU,cU,yU){return{timestamp:zU,decodeTimestamp:zU,duration:cU,data:XU,size:XU.byteLength,type:yU,timescaleUnitsToNextSample:Hy(cU,UU.timescale)}}processTimestamps(UU,XU){if(0===UU.timestampProcessingQueue.length)return;if("audio"===UU.type&&UU.info.requiresPcmTransformation){CU(!this.isFragmented),UU.startTimestampOffset??=UU.timestampProcessingQueue[0].timestamp;let XU=0;for(let zU=0;zU<UU.timestampProcessingQueue.length;zU++){const cU=UU.timestampProcessingQueue[zU];XU+=Hy(cU.duration,UU.timescale)}if(0===UU.timeToSampleTable.length)UU.timeToSampleTable.push({sampleCount:XU,sampleDelta:1});else{uU(UU.timeToSampleTable).sampleCount+=XU}return void(UU.timestampProcessingQueue.length=0)}const zU=UU.timestampProcessingQueue.map((UU=>UU.timestamp)).sort(((UU,XU)=>UU-XU));this.isFragmented?UU.startTimestampOffset??=Math.min(zU[0],0):UU.startTimestampOffset??=zU[0];for(let cU=0;cU<UU.timestampProcessingQueue.length;cU++){const XU=UU.timestampProcessingQueue[cU];XU.decodeTimestamp=zU[cU];const yU=Hy(XU.timestamp-XU.decodeTimestamp,UU.timescale),QU=Hy(XU.duration,UU.timescale);if(null!==UU.lastTimescaleUnits){CU(UU.lastSample);const zU=Hy(XU.decodeTimestamp,UU.timescale,!1),cU=Math.round(zU-UU.lastTimescaleUnits);if(CU(cU>=0),UU.lastTimescaleUnits+=cU,UU.lastSample.timescaleUnitsToNextSample=cU,!this.isFragmented){let XU=uU(UU.timeToSampleTable);if(CU(XU),1===XU.sampleCount){XU.sampleDelta=cU;const zU=UU.timeToSampleTable[UU.timeToSampleTable.length-2];zU&&zU.sampleDelta===cU&&(zU.sampleCount++,UU.timeToSampleTable.pop(),XU=zU)}else XU.sampleDelta!==cU&&(XU.sampleCount--,UU.timeToSampleTable.push(XU={sampleCount:1,sampleDelta:cU}));XU.sampleDelta===QU?XU.sampleCount++:UU.timeToSampleTable.push({sampleCount:1,sampleDelta:QU});const zU=uU(UU.compositionTimeOffsetTable);CU(zU),zU.sampleCompositionTimeOffset===yU?zU.sampleCount++:UU.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:yU})}}else UU.lastTimescaleUnits=Hy(XU.decodeTimestamp,UU.timescale,!1),this.isFragmented||(UU.timeToSampleTable.push({sampleCount:1,sampleDelta:QU}),UU.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:yU}));UU.lastSample=XU}if(UU.timestampProcessingQueue.length=0,CU(UU.lastSample),CU(null!==UU.lastTimescaleUnits),void 0!==XU&&0===UU.lastSample.timescaleUnitsToNextSample){CU("key"===XU.type);const zU=Hy(XU.timestamp,UU.timescale,!1),cU=Math.round(zU-UU.lastTimescaleUnits);UU.lastSample.timescaleUnitsToNextSample=cU}}async registerSample(UU,XU){"key"===XU.type&&this.processTimestamps(UU,XU),UU.timestampProcessingQueue.push(XU),this.isFragmented?(UU.sampleQueue.push(XU),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(UU,XU):await this.addSampleToTrack(UU,XU)}async addSampleToTrack(UU,XU){if(!this.isFragmented&&(UU.samples.push(XU),"reserve"===this.fastStart)){const XU=UU.track.metadata.maximumPacketCount;if(CU(void 0!==XU),UU.samples.length>XU)throw new Error(`Track #${UU.track.id} has already reached the maximum packet count (${XU}). Either add less packets or increase the maximum packet count.`)}let zU=!1;if(UU.currentChunk){UU.currentChunk.startTimestamp=Math.min(UU.currentChunk.startTimestamp,XU.timestamp);const cU=XU.timestamp-UU.currentChunk.startTimestamp;if(this.isFragmented){const yU=this.trackDatas.every((zU=>{if(UU===zU)return"key"===XU.type;const cU=zU.sampleQueue[0];return cU?"key"===cU.type:zU.closed}));cU>=this.minimumFragmentDuration&&yU&&XU.timestamp>this.maxWrittenTimestamp&&(zU=!0,await this.finalizeFragment())}else zU=cU>=.5}else zU=!0;zU&&(UU.currentChunk&&await this.finalizeCurrentChunk(UU),UU.currentChunk={startTimestamp:XU.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),CU(UU.currentChunk),UU.currentChunk.samples.push(XU),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,XU.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,XU.timestamp+XU.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,XU.timestamp))}async finalizeCurrentChunk(UU){if(CU(!this.isFragmented),CU(this.writer),!UU.currentChunk)return;UU.finalizedChunks.push(UU.currentChunk),this.finalizedChunks.push(UU.currentChunk);let XU=UU.currentChunk.samples.length;if("audio"===UU.type&&UU.info.requiresPcmTransformation&&(XU=UU.currentChunk.samples.reduce(((XU,zU)=>XU+Hy(zU.duration,UU.timescale)),0)),0!==UU.compactlyCodedChunkTable.length&&uU(UU.compactlyCodedChunkTable).samplesPerChunk===XU||UU.compactlyCodedChunkTable.push({firstChunk:UU.finalizedChunks.length,samplesPerChunk:XU}),"in-memory"!==this.fastStart){UU.currentChunk.offset=this.writer.getPos();for(const XU of UU.currentChunk.samples)CU(XU.data),this.writer.write(XU.data),XU.data=null;await this.writer.flush()}else UU.currentChunk.offset=0}async interleaveSamples(){let UU=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(CU(this.isFragmented),UU||this.allTracksAreKnown())UU:for(;;){let XU=null,zU=1/0;for(const yU of this.trackDatas){if(!UU&&0===yU.sampleQueue.length&&!yU.closed)break UU;yU.sampleQueue.length>0&&yU.sampleQueue[0].timestamp<zU&&(XU=yU,zU=yU.sampleQueue[0].timestamp)}if(!XU)break;const cU=XU.sampleQueue.shift();await this.addSampleToTrack(XU,cU)}}async finalizeFragment(){let UU=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(CU(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const UU=this.initBoxWriter??this.boxWriter;CU(UU),this.formatOptions.onMoov&&UU.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const XU=oc(this);if(UU.writeBox(XU),this.formatOptions.onMoov){const{data:XU,start:zU}=UU.writer.stopTrackingWrites();this.formatOptions.onMoov(XU,zU)}if(this.isCmaf){CU(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new Mz(this.writer);const UU=this.boxWriter.measureBox(Qc()),XU=this.boxWriter.measureBox(Ac(this,0));this.segmentHeaderSize=UU+XU,this.writer.seek(this.segmentHeaderSize)}}CU(this.writer),CU(this.boxWriter);const XU=this.trackDatas.filter((UU=>UU.currentChunk));if(0===XU.length)return void(UU&&await this.writer.flush());const zU=this.nextFragmentNumber++,cU=hc(zU,XU),yU=this.writer.getPos(),QU=yU+this.boxWriter.measureBox(cU);let AU=QU+8,FU=1/0;for(let NU=0;NU<XU.length;NU++){const UU=XU[NU];CU(UU.currentChunk),CU(null!==UU.startTimestampOffset),UU.currentChunk.offset=AU,UU.currentChunk.moofOffset=yU,UU.currentChunk.trafIndex=NU,UU.currentChunk.startTimestamp-=UU.startTimestampOffset;for(const XU of UU.currentChunk.samples)AU+=XU.size,XU.timestamp-=UU.startTimestampOffset,XU.decodeTimestamp-=UU.startTimestampOffset;FU=Math.min(FU,UU.currentChunk.startTimestamp)}const oU=AU-QU,DU=oU>=2**32;if(DU)for(const NU of XU)NU.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const EU=hc(zU,XU);if(this.boxWriter.writeBox(EU),this.formatOptions.onMoof){const{data:UU,start:XU}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(UU,XU,FU)}CU(this.writer.getPos()===QU),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const YU=Fc(DU);YU.size=oU,this.boxWriter.writeBox(YU),this.writer.seek(QU+(DU?16:8));for(const NU of XU)for(const UU of NU.currentChunk.samples)this.writer.write(UU.data),UU.data=null;if(this.formatOptions.onMdat){const{data:UU,start:XU}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(UU,XU)}for(const NU of XU)NU.finalizedChunks.push(NU.currentChunk),this.finalizedChunks.push(NU.currentChunk),NU.currentChunk=null;UU&&await this.writer.flush()}async registerSampleFastStartReserve(UU,XU){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(UU,XU)):UU.sampleQueue.push(XU)}async createFastStartReserveMdat(){CU(this.writer),CU(this.boxWriter),this.ensureOneEnabledTrack();const UU=oc(this),XU=this.boxWriter.measureBox(UU)+this.computeSampleTableSizeUpperBound()+4096;CU(null!==this.ftypSize),this.writer.seek(this.ftypSize+XU),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Fc(!0),this.boxWriter.writeBox(this.mdat);for(const zU of this.trackDatas){for(const UU of zU.sampleQueue)await this.addSampleToTrack(zU,UU);zU.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){CU("reserve"===this.fastStart);let UU=0;for(const XU of this.trackDatas){const zU=XU.track.metadata.maximumPacketCount;CU(void 0!==zU),UU+=8*Math.ceil(2/3*zU),UU+=4*zU,UU+=8*Math.ceil(2/3*zU),UU+=12*Math.ceil(2/3*zU),UU+=4*zU,UU+=8*zU}return UU}async onTrackClose(UU){const XU=await this.mutex.acquire(),zU=this.trackDatas.find((XU=>XU.track===UU));zU&&(zU.closed=!0,"subtitle"===zU.type&&"webvtt"===UU.source._codec&&await this.processWebVTTCues(zU,1/0),this.processTimestamps(zU)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),XU()}ensureOneEnabledTrack(){for(const UU of["video","audio","subtitle"]){const XU=this.trackDatas.filter((XU=>XU.type===UU));if(0===XU.length)continue;if(!XU.some((UU=>!1!==UU.track.metadata.disposition?.default))){const UU=XU[0];UU.track.metadata.disposition={...UU.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){CU(this.isFragmented);const UU=await this.mutex.acquire();try{for(const UU of this.trackDatas)"subtitle"===UU.type&&"webvtt"===UU.track.source._codec&&await this.processWebVTTCues(UU,1/0),this.processTimestamps(UU);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{UU()}}async finalize(){const UU=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const zU of this.trackDatas)zU.closed=!0,"subtitle"===zU.type&&"webvtt"===zU.track.source._codec&&await this.processWebVTTCues(zU,1/0),this.processTimestamps(zU);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const zU of this.trackDatas){await this.finalizeCurrentChunk(zU);const UU=My(zU);if(UU>0){let XU=0;for(const UU of zU.samples)XU+=UU.size;zU.avgBitrate=Math.round(8*XU/UU)}else zU.avgBitrate=0;let XU=0,cU=0,yU=0;for(let QU=0;QU<zU.samples.length;QU++){const UU=zU.samples[QU];for(cU+=UU.size;UU.decodeTimestamp-zU.samples[XU].decodeTimestamp>=1;)cU-=zU.samples[XU].size,XU++;yU=Math.max(yU,cU)}if(zU.maxBitrate=8*yU,null!==zU.startTimestampOffset)for(let QU=0;QU<zU.samples.length;QU++){const UU=zU.samples[QU];UU.timestamp-=zU.startTimestampOffset,UU.decodeTimestamp-=zU.startTimestampOffset}}if(CU(this.writer),CU(this.boxWriter),"in-memory"===this.fastStart){let UU;this.mdat=Fc(!1);for(let zU=0;zU<2;zU++){const XU=oc(this),zU=this.boxWriter.measureBox(XU);UU=this.boxWriter.measureBox(this.mdat);let cU=this.writer.getPos()+zU+UU;for(const yU of this.finalizedChunks){yU.offset=cU;for(const{data:XU}of yU.samples)CU(XU),cU+=XU.byteLength,UU+=XU.byteLength}if(cU<2**32)break;UU>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const XU=oc(this);if(this.boxWriter.writeBox(XU),this.formatOptions.onMoov){const{data:UU,start:XU}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(UU,XU)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=UU,this.boxWriter.writeBox(this.mdat);for(const zU of this.finalizedChunks)for(const UU of zU.samples)CU(UU.data),this.writer.write(UU.data),UU.data=null;if(this.formatOptions.onMdat){const{data:UU,start:XU}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(UU,XU)}}else if(this.isFragmented)if(this.isCmaf){const UU=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Qc()),this.boxWriter.writeBox(Ac(this,UU))}else{const UU=this.writer.getPos(),zU=(XU=this.trackDatas,cc("mfra",void 0,[...XU.map(Ay),Fy()]));this.boxWriter.writeBox(zU);const cU=this.writer.getPos()-UU;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(cU)}else{CU(this.mdat);const UU=this.boxWriter.offsets.get(this.mdat);CU(void 0!==UU);const XU=this.writer.getPos()-UU;if(this.mdat.size=XU,this.mdat.largeSize=XU>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:UU,start:XU}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(UU,XU)}const zU=oc(this);if("reserve"===this.fastStart){CU(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(zU);const UU=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:UU})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(zU);if(this.formatOptions.onMoov){const{data:UU,start:XU}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(UU,XU)}}var XU;UU()}}var Vy;!function(UU){UU[UU.EBML=440786851]="EBML",UU[UU.EBMLVersion=17030]="EBMLVersion",UU[UU.EBMLReadVersion=17143]="EBMLReadVersion",UU[UU.EBMLMaxIDLength=17138]="EBMLMaxIDLength",UU[UU.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",UU[UU.DocType=17026]="DocType",UU[UU.DocTypeVersion=17031]="DocTypeVersion",UU[UU.DocTypeReadVersion=17029]="DocTypeReadVersion",UU[UU.Void=236]="Void",UU[UU.Segment=408125543]="Segment",UU[UU.SeekHead=290298740]="SeekHead",UU[UU.Seek=19899]="Seek",UU[UU.SeekID=21419]="SeekID",UU[UU.SeekPosition=21420]="SeekPosition",UU[UU.Duration=17545]="Duration",UU[UU.Info=357149030]="Info",UU[UU.TimestampScale=2807729]="TimestampScale",UU[UU.MuxingApp=19840]="MuxingApp",UU[UU.WritingApp=22337]="WritingApp",UU[UU.Tracks=374648427]="Tracks",UU[UU.TrackEntry=174]="TrackEntry",UU[UU.TrackNumber=215]="TrackNumber",UU[UU.TrackUID=29637]="TrackUID",UU[UU.TrackType=131]="TrackType",UU[UU.FlagEnabled=185]="FlagEnabled",UU[UU.FlagDefault=136]="FlagDefault",UU[UU.FlagForced=21930]="FlagForced",UU[UU.FlagOriginal=21934]="FlagOriginal",UU[UU.FlagHearingImpaired=21931]="FlagHearingImpaired",UU[UU.FlagVisualImpaired=21932]="FlagVisualImpaired",UU[UU.FlagCommentary=21935]="FlagCommentary",UU[UU.FlagLacing=156]="FlagLacing",UU[UU.Name=21358]="Name",UU[UU.Language=2274716]="Language",UU[UU.LanguageBCP47=2274717]="LanguageBCP47",UU[UU.CodecID=134]="CodecID",UU[UU.CodecPrivate=25506]="CodecPrivate",UU[UU.CodecDelay=22186]="CodecDelay",UU[UU.SeekPreRoll=22203]="SeekPreRoll",UU[UU.DefaultDuration=2352003]="DefaultDuration",UU[UU.Video=224]="Video",UU[UU.PixelWidth=176]="PixelWidth",UU[UU.PixelHeight=186]="PixelHeight",UU[UU.DisplayWidth=21680]="DisplayWidth",UU[UU.DisplayHeight=21690]="DisplayHeight",UU[UU.DisplayUnit=21682]="DisplayUnit",UU[UU.AlphaMode=21440]="AlphaMode",UU[UU.Audio=225]="Audio",UU[UU.SamplingFrequency=181]="SamplingFrequency",UU[UU.Channels=159]="Channels",UU[UU.BitDepth=25188]="BitDepth",UU[UU.SimpleBlock=163]="SimpleBlock",UU[UU.BlockGroup=160]="BlockGroup",UU[UU.Block=161]="Block",UU[UU.BlockAdditions=30113]="BlockAdditions",UU[UU.BlockMore=166]="BlockMore",UU[UU.BlockAdditional=165]="BlockAdditional",UU[UU.BlockAddID=238]="BlockAddID",UU[UU.BlockDuration=155]="BlockDuration",UU[UU.ReferenceBlock=251]="ReferenceBlock",UU[UU.Cluster=524531317]="Cluster",UU[UU.Timestamp=231]="Timestamp",UU[UU.Cues=475249515]="Cues",UU[UU.CuePoint=187]="CuePoint",UU[UU.CueTime=179]="CueTime",UU[UU.CueTrackPositions=183]="CueTrackPositions",UU[UU.CueTrack=247]="CueTrack",UU[UU.CueClusterPosition=241]="CueClusterPosition",UU[UU.Colour=21936]="Colour",UU[UU.MatrixCoefficients=21937]="MatrixCoefficients",UU[UU.TransferCharacteristics=21946]="TransferCharacteristics",UU[UU.Primaries=21947]="Primaries",UU[UU.Range=21945]="Range",UU[UU.Projection=30320]="Projection",UU[UU.ProjectionType=30321]="ProjectionType",UU[UU.ProjectionPoseYaw=30323]="ProjectionPoseYaw",UU[UU.ProjectionPosePitch=30324]="ProjectionPosePitch",UU[UU.ProjectionPoseRoll=30325]="ProjectionPoseRoll",UU[UU.Attachments=423732329]="Attachments",UU[UU.AttachedFile=24999]="AttachedFile",UU[UU.FileDescription=18046]="FileDescription",UU[UU.FileName=18030]="FileName",UU[UU.FileMediaType=18016]="FileMediaType",UU[UU.FileData=18012]="FileData",UU[UU.FileUID=18094]="FileUID",UU[UU.Chapters=272869232]="Chapters",UU[UU.Tags=307544935]="Tags",UU[UU.Tag=29555]="Tag",UU[UU.Targets=25536]="Targets",UU[UU.TargetTypeValue=26826]="TargetTypeValue",UU[UU.TargetType=25546]="TargetType",UU[UU.TagTrackUID=25541]="TagTrackUID",UU[UU.TagEditionUID=25545]="TagEditionUID",UU[UU.TagChapterUID=25540]="TagChapterUID",UU[UU.TagAttachmentUID=25542]="TagAttachmentUID",UU[UU.SimpleTag=26568]="SimpleTag",UU[UU.TagName=17827]="TagName",UU[UU.TagLanguage=17530]="TagLanguage",UU[UU.TagString=17543]="TagString",UU[UU.TagBinary=17541]="TagBinary",UU[UU.ContentEncodings=28032]="ContentEncodings",UU[UU.ContentEncoding=25152]="ContentEncoding",UU[UU.ContentEncodingOrder=20529]="ContentEncodingOrder",UU[UU.ContentEncodingScope=20530]="ContentEncodingScope",UU[UU.ContentCompression=20532]="ContentCompression",UU[UU.ContentCompAlgo=16980]="ContentCompAlgo",UU[UU.ContentCompSettings=16981]="ContentCompSettings",UU[UU.ContentEncryption=20533]="ContentEncryption"}(Vy||(Vy={}));Vy.EBML,Vy.Segment,Vy.SeekHead,Vy.Info,Vy.Cluster,Vy.Tracks,Vy.Cues,Vy.Attachments,Vy.Chapters,Vy.Tags;const sy=new Uint32Array(256);for(let CQ=0;CQ<256;CQ++){let UU=CQ<<24;for(let XU=0;XU<8;XU++)UU=2147483648&UU?UU<<1^79764919:UU<<1;sy[CQ]=UU>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const ny=new Uint32Array(256);for(let CQ=0;CQ<256;CQ++){let UU=CQ<<24;for(let XU=0;XU<8;XU++)UU=2147483648&UU?UU<<1^79764919:UU<<1;ny[CQ]=UU>>>0&4294967295}const my=UU=>{let XU=4294967295;for(let zU=0;zU<UU.length;zU++){const cU=UU[zU];XU=(XU<<8^ny[XU>>>24^cU])>>>0}return XU},ly=new Uint8Array(16);{const UU=vU(ly);ly[0]=0,UU.setUint16(1,45069,!1),UU.setUint16(3,1,!1),ly[5]=193,ly[6]=0,ly[7]=0,UU.setUint16(8,1,!1),UU.setUint16(10,61440,!1),UU.setUint32(12,my(ly.subarray(0,12)),!1)}const xy=new Uint8Array(0);class Jy{constructor(UU,XU,zU,cU){let yU=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,QU=arguments.length>5?arguments[5]:void 0,AU=arguments.length>6?arguments[6]:void 0;if(this.data=UU,this.type=XU,this.timestamp=zU,this.duration=cU,this.sequenceNumber=yU,UU===xy&&void 0===QU)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===QU&&(QU=UU.byteLength),!(UU instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==XU&&"delta"!==XU)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(zU))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(cU)||cU<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(yU))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(QU)||QU<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==AU&&("object"!==typeof AU||!AU))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==AU?.alpha&&!(AU.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==AU?.alphaByteLength&&(!Number.isInteger(AU.alphaByteLength)||AU.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=QU,this.sideData=AU??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===xy}get microsecondTimestamp(){return Math.trunc(zX*this.timestamp)}get microsecondDuration(){return Math.trunc(zX*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let UU=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:UU,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(UU,XU){if(!(UU instanceof EncodedVideoChunk||UU instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const zU=new Uint8Array(UU.byteLength);return UU.copyTo(zU),new Jy(zU,UU.type,UU.timestamp/1e6,(UU.duration??0)/1e6,void 0,void 0,XU)}clone(UU){if(void 0!==UU&&("object"!==typeof UU||null===UU))throw new TypeError("options, when provided, must be an object.");if(void 0!==UU?.data&&!(UU.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==UU?.type&&"key"!==UU.type&&"delta"!==UU.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==UU?.timestamp&&!Number.isFinite(UU.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==UU?.duration&&!Number.isFinite(UU.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==UU?.sequenceNumber&&!Number.isFinite(UU.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==UU?.sideData&&("object"!==typeof UU.sideData||null===UU.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new Jy(UU?.data??this.data,UU?.type??this.type,UU?.timestamp??this.timestamp,UU?.duration??this.duration,UU?.sequenceNumber??this.sequenceNumber,this.byteLength,UU?.sideData??this.sideData)}}var jy;!function(UU){UU[UU.PCM=1]="PCM",UU[UU.IEEE_FLOAT=3]="IEEE_FLOAT",UU[UU.ALAW=6]="ALAW",UU[UU.MULAW=7]="MULAW",UU[UU.EXTENSIBLE=65534]="EXTENSIBLE"}(jy||(jy={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let Ky=-1/0,by=-1/0,Ty=null;"undefined"!==typeof FinalizationRegistry&&(Ty=new FinalizationRegistry((UU=>{const XU=performance.now();"video"===UU.type?(XU-Ky>=1e3&&(ZX._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),Ky=XU),"undefined"!==typeof VideoFrame&&UU.data instanceof VideoFrame&&UU.data.close()):(XU-by>=1e3&&(ZX._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),by=XU),"undefined"!==typeof AudioData&&UU.data instanceof AudioData&&UU.data.close())})));const hy=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(hy);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class UQ{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(UU){}close(){if(this._closingPromise)return;const UU=this._connectedTrack;if(!UU)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===UU.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==UU.output.state&&"finalized"!==UU.output.state&&UU.output._muxer.onTrackClose(UU)})()}async _flushOrWaitForOngoingClose(UU){return this._closingPromise??=(async()=>{await this._flushAndClose(UU),this._closed=!0})()}}class XQ extends UQ{constructor(UU){if(super(),!oz.includes(UU))throw new TypeError(`Invalid video codec \'${UU}\'. Must be one of: ${oz.join(", ")}.`);this._codec=UU}}const zQ=(UU,XU)=>{if(UU.metadata.hasOnlyKeyPackets&&"key"!==XU.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class cQ extends XQ{constructor(UU){super(UU)}add(UU,XU){if(!(UU instanceof Jy))throw new TypeError("packet must be an EncodedPacket.");if(UU.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==XU&&(!XU||"object"!==typeof XU))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),zQ(this._connectedTrack,UU),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,UU,XU)}}class yQ extends UQ{constructor(UU){if(super(),!Yz.includes(UU))throw new TypeError(`Invalid audio codec \'${UU}\'. Must be one of: ${Yz.join(", ")}.`);this._codec=UU}}class QQ extends UQ{constructor(UU){if(super(),!Nz.includes(UU))throw new TypeError(`Invalid subtitle codec \'${UU}\'. Must be one of: ${Nz.join(", ")}.`);this._codec=UU}}class AQ{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((UU=>oz.includes(UU)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((UU=>Yz.includes(UU)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((UU=>Nz.includes(UU)))}_codecUnsupportedHint(UU){return""}_isFragmentedIsobmff(){return!1}}class FQ extends AQ{constructor(){let UU=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!UU||"object"!==typeof UU)throw new TypeError("options must be an object.");if(void 0!==UU.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(UU.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==UU.minimumFragmentDuration&&(!AX(UU.minimumFragmentDuration)||UU.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==UU.onFtyp&&"function"!==typeof UU.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==UU.onMoov&&"function"!==typeof UU.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==UU.onMdat&&"function"!==typeof UU.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==UU.onMoof&&"function"!==typeof UU.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==UU.metadataFormat&&!["mdir","mdta","udta","auto"].includes(UU.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=UU}getSupportedTrackCounts(){const UU=2**32-1;return{video:{min:0,max:UU},audio:{min:0,max:UU},subtitle:{min:0,max:UU},total:{min:0,max:UU}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(UU){return new vy(UU,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class oQ extends FQ{constructor(UU){super(UU)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...oz,...Ez,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Nz]}_codecUnsupportedHint(UU){return(new EQ).getSupportedCodecs().includes(UU)?" Switching to MOV will grant support for this codec.":""}}class DQ extends FQ{constructor(UU){super(UU)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...oz,...Ez,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Nz]}}class EQ extends FQ{constructor(UU){super(UU)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...oz,...Yz]}_codecUnsupportedHint(UU){return(new oQ).getSupportedCodecs().includes(UU)?" Switching to MP4 will grant support for this codec.":""}}const YQ=["video","audio","subtitle"];class NQ{constructor(UU,XU,zU,cU,yU){this.id=UU,this.output=XU,this.type=zU,this.source=cU,this.metadata=yU}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(UU){if(!(UU instanceof NQ))throw new TypeError("other must be an OutputTrack.");if(this===UU)return!1;const XU=oX(this.metadata.group),zU=oX(UU.metadata.group);for(const cU of XU){if(this.type!==UU.type&&zU.some((UU=>cU===UU)))return!0;if(zU.some((UU=>cU._pairedGroups.has(UU))))return!0}return!1}}class IQ extends NQ{constructor(UU,XU,zU,cU){super(UU,XU,"video",zU,cU)}}class pQ extends NQ{constructor(UU,XU,zU,cU){super(UU,XU,"audio",zU,cU)}}class aQ extends NQ{constructor(UU,XU,zU,cU){super(UU,XU,"subtitle",zU,cU)}}class tQ{constructor(){this._pairedGroups=new Set}pairWith(UU){if(!(UU instanceof tQ))throw new TypeError("other must be an OutputTrackGroup.");if(this===UU)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(UU),UU._pairedGroups.add(this)}}const gQ=UU=>{if(!UU||"object"!==typeof UU)throw new TypeError("metadata must be an object.");if(void 0!==UU.languageCode&&(XU=UU.languageCode,!XX.test(XU)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var XU;if(void 0!==UU.name&&"string"!==typeof UU.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==UU.disposition&&(UU=>{if(!UU||"object"!==typeof UU)throw new TypeError("disposition must be an object.");if(void 0!==UU.default&&"boolean"!==typeof UU.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==UU.primary&&"boolean"!==typeof UU.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==UU.forced&&"boolean"!==typeof UU.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==UU.original&&"boolean"!==typeof UU.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==UU.commentary&&"boolean"!==typeof UU.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==UU.hearingImpaired&&"boolean"!==typeof UU.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==UU.visuallyImpaired&&"boolean"!==typeof UU.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(UU.disposition),void 0!==UU.maximumPacketCount&&(!Number.isInteger(UU.maximumPacketCount)||UU.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==UU.bitrate&&(!Number.isFinite(UU.bitrate)||UU.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==UU.averageBitrate&&(!Number.isFinite(UU.averageBitrate)||UU.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==UU.group&&!(UU.group instanceof tQ)&&(!Array.isArray(UU.group)||UU.group.some((UU=>!(UU instanceof tQ)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class kQ extends DX{get target(){const UU="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(UU);const XU=this._getRootTarget();if(yX(XU))throw new TypeError(UU);return XU}constructor(UU){if(super(),this.state="pending",this.defaultTrackGroup=new tQ,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new jU,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!UU||"object"!==typeof UU)throw new TypeError("options must be an object.");if(!(UU.format instanceof AQ))throw new TypeError("options.format must be an OutputFormat.");if(!(UU.target instanceof ey||UU.target instanceof ry))throw new TypeError("options.target must be a Target or a PathedTarget.");if(UU.target instanceof ey&&this._rememberTarget(UU.target),void 0!==UU.initTarget&&!(UU.initTarget instanceof ey)&&"function"!==typeof UU.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==UU.onFinalize&&"function"!==typeof UU.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=UU.format,this.eY=UU.target,this._onFinalize=UU.onFinalize??null,this._initTarget=UU.initTarget??null,this._initTarget instanceof ey&&this._rememberTarget(this._initTarget),this._muxer=UU.format._createMuxer(this)}_getTargetValidated(UU){CU(this.eY instanceof ry);const XU=this.eY.getTarget(UU),zU=UU=>{if(!(UU instanceof ey))throw new TypeError("getTarget must return a Target.");return UU};return yX(XU)?XU.then(zU):zU(XU)}async _getTarget(UU){CU(this.eY instanceof ry);const XU=await this._getTargetValidated(UU);return this._emit("target",{target:XU,request:UU,isRoot:UU.isRoot}),"canceled"===this.state?await XU._close():this._rememberTarget(XU),XU}_rememberTarget(UU){this._unfinalizedTargets.add(UU),UU.on("finalized",(()=>this._unfinalizedTargets.delete(UU)),{once:!0})}async _getInitTarget(){if(CU(null!==this._initTarget),this._initTarget instanceof ey)return this._initTarget;const UU=await this._initTarget();return"canceled"===this.state?await UU._close():this._rememberTarget(UU),UU}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.eY instanceof ey)return this._emit("target",{target:this.eY,request:null,isRoot:!0}),this._rootTarget=this.eY,this.eY;const UU={path:this.eY.rootPath,isRoot:!0,mimeType:this.format.mimeType},XU=this._getTargetValidated(UU),zU=XU=>("canceled"===this.state?XU._close():this._rememberTarget(XU),this._emit("target",{target:XU,request:UU,isRoot:!0}),this._rootTarget=XU,XU);return yX(XU)?this._rootTargetPromise=XU.then(zU):zU(XU)}_getRootWriter(UU){return this._rootWriterPromise??=(async()=>{const XU=await this._getRootTarget(),zU=new Ly(XU,"boolean"===typeof UU?UU:UU(XU));return zU.start(),zU})()}addVideoTrack(UU){let XU=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(UU instanceof XQ))throw new TypeError("source must be a VideoSource.");if(gQ(XU),void 0!==XU.rotation&&![0,90,180,270].includes(XU.rotation))throw new TypeError(`Invalid video rotation: ${XU.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==XU.flip&&"boolean"!==typeof XU.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==XU.transformationMatrix&&(!Array.isArray(XU.transformationMatrix)||9!==XU.transformationMatrix.length||!XU.transformationMatrix.every((UU=>Number.isFinite(UU)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==XU.frameRate&&(!Number.isFinite(XU.frameRate)||XU.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${XU.frameRate}. Must be a positive number.`);if(void 0!==XU.hasOnlyKeyPackets&&"boolean"!==typeof XU.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==XU.canBeTransparent&&"boolean"!==typeof XU.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==XU.decoderConfig&&dz({decoderConfig:XU.decoderConfig},UU._codec),void 0!==XU.primingPacket){if(!(XU.primingPacket instanceof Jy))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===XU.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const zU={...XU};return zU.group??=this.defaultTrackGroup,this._addTrack(new IQ(this.tracks.length+1,this,UU,zU))}addAudioTrack(UU){let XU=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(UU instanceof yQ))throw new TypeError("source must be an AudioSource.");if(gQ(XU),void 0!==XU.decoderConfig&&ez({decoderConfig:XU.decoderConfig},UU._codec),void 0!==XU.primingPacket){if(!(XU.primingPacket instanceof Jy))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===XU.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const zU={...XU};return zU.group??=this.defaultTrackGroup,this._addTrack(new pQ(this.tracks.length+1,this,UU,zU))}addSubtitleTrack(UU){let XU=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(UU instanceof QQ))throw new TypeError("source must be a SubtitleSource.");gQ(XU);const zU={...XU};return zU.group??=this.defaultTrackGroup,this._addTrack(new aQ(this.tracks.length+1,this,UU,zU))}setMetadataTags(UU){if((UU=>{if(!UU||"object"!==typeof UU)throw new TypeError("tags must be an object.");if(void 0!==UU.title&&"string"!==typeof UU.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==UU.description&&"string"!==typeof UU.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==UU.artist&&"string"!==typeof UU.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==UU.album&&"string"!==typeof UU.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==UU.albumArtist&&"string"!==typeof UU.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==UU.trackNumber&&(!Number.isInteger(UU.trackNumber)||UU.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==UU.tracksTotal&&(!Number.isInteger(UU.tracksTotal)||UU.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==UU.discNumber&&(!Number.isInteger(UU.discNumber)||UU.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==UU.discsTotal&&(!Number.isInteger(UU.discsTotal)||UU.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==UU.genre&&"string"!==typeof UU.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==UU.date&&(!(UU.date instanceof Date)||Number.isNaN(UU.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==UU.beatsPerMinute&&(!Number.isInteger(UU.beatsPerMinute)||UU.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==UU.lyrics&&"string"!==typeof UU.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==UU.images){if(!Array.isArray(UU.images))throw new TypeError("tags.images, when provided, must be an array.");for(const XU of UU.images){if(!XU||"object"!==typeof XU)throw new TypeError("Each image in tags.images must be an object.");if(!(XU.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof XU.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(XU.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==UU.comment&&"string"!==typeof UU.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==UU.raw){if(!UU.raw||"object"!==typeof UU.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const XU of Object.values(UU.raw))if(null!==XU&&"string"!==typeof XU&&(!Array.isArray(XU)||!XU.every((UU=>"string"===typeof UU)))&&!(XU instanceof Uint8Array)&&!(XU instanceof YX)&&!(XU instanceof NX)&&!EX(XU))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(UU),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=UU}_addTrack(UU){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(UU.source._connectedTrack)throw new Error("Source is already used for a track.");const XU=this.format.getSupportedTrackCounts(),zU=this.tracks.reduce(((XU,zU)=>XU+(zU.type===UU.type?1:0)),0),cU=XU[UU.type].max;if(zU===cU)throw new Error(0===cU?`${this.format._name} does not support ${UU.type} tracks.`:`${this.format._name} does not support more than ${cU} ${UU.type} track`+(1===cU?"":"s")+".");const yU=XU.total.max;if(this.tracks.length===yU)throw new Error(`${this.format._name} does not support more than ${yU} tracks`+(1===yU?"":"s")+" in total.");if(UU.isVideoTrack()){const XU=this.format.getSupportedVideoCodecs();if(0===XU.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(UU.source._codec));if(!XU.includes(UU.source._codec))throw new Error(`Codec \'${UU.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${XU.map((UU=>`\'${UU}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(UU.source._codec))}else if(UU.isAudioTrack()){const XU=this.format.getSupportedAudioCodecs();if(0===XU.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(UU.source._codec));if(!XU.includes(UU.source._codec))throw new Error(`Codec \'${UU.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${XU.map((UU=>`\'${UU}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(UU.source._codec))}else if(UU.isSubtitleTrack()){const XU=this.format.getSupportedSubtitleCodecs();if(0===XU.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(UU.source._codec));if(!XU.includes(UU.source._codec))throw new Error(`Codec \'${UU.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${XU.map((UU=>`\'${UU}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(UU.source._codec))}return this.tracks.push(UU),UU.source._connectedTrack=UU,UU}hasEnoughTracks(){const UU=this.format.getSupportedTrackCounts();for(const zU of YQ){if(this.tracks.reduce(((UU,XU)=>UU+(XU.type===zU?1:0)),0)<UU[zU].min)return!1}const XU=UU.total.min;return!(this.tracks.length<XU)}async start(){const UU=this.format.getSupportedTrackCounts();for(const zU of YQ){const XU=this.tracks.reduce(((UU,XU)=>UU+(XU.type===zU?1:0)),0),cU=UU[zU].min;if(XU<cU)throw new Error(cU===UU[zU].max?`${this.format._name} requires exactly ${cU} ${zU} track${1===cU?"":"s"}.`:`${this.format._name} requires at least ${cU} ${zU} track${1===cU?"":"s"}.`)}const XU=UU.total.min;if(this.tracks.length<XU)throw new Error(XU===UU.total.max?`${this.format._name} requires exactly ${XU} track`+(1===XU?"":"s")+".":`${this.format._name} requires at least ${XU} track`+(1===XU?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(ZX._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const UU=this._mutex.acquire();try{await this._muxer.start();const UU=this.tracks.map((UU=>UU.source._start()));await Promise.all(UU)}finally{(await UU)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const UU=await this._mutex.acquire();try{const UU=this.tracks.map((UU=>UU.source._flushOrWaitForOngoingClose(!0)));await Promise.all(UU),await Promise.all([...this._unfinalizedTargets].map((UU=>UU._close()))),this._unfinalizedTargets.clear()}finally{UU()}})():void("finalized"===this.state&&ZX._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ZX._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const UU=await this._mutex.acquire();try{const UU=this.tracks.map((UU=>UU.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(UU),await this._muxer.finalize(),this._rootWriterPromise){const UU=await this._rootWriterPromise;UU.finalized||(await UU.flush(),await UU.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(XU){throw this.state="canceled",XU}finally{await Promise.all([...this._unfinalizedTargets].map((UU=>UU._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),UU()}})()}}class GQ{constructor(UU,XU,zU,cU,yU){this.frameDurationS=zU,this.onFragment=yU,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=XU,this.lastTimestampUs=XU;const QU=UU=>{this.boxes.push(UU)};this.output=new kQ({format:new oQ({fastStart:"fragmented",minimumFragmentDuration:cU,onFtyp:QU,onMoov:QU,onMoof:QU,onMdat:UU=>{QU(UU),this.fragmentDone()}}),target:new Oy}),this.source=new cQ(UU),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(UU,XU){const zU=new Uint8Array(UU.byteLength);UU.copyTo(zU),this.addData(zU,UU.type,UU.timestamp,XU)}addData(UU,XU,zU,cU){const yU=new Jy(UU,XU,(zU-this.firstTimestampUs)/1e6,this.frameDurationS),QU=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,zU),this.pending=this.pending.then((()=>(this.addingTimestampUs=zU,this.source.add(yU,QU?{decoderConfig:cU}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var UU;const XU=BQ(this.boxes);this.boxes=[],this.onFragment({bytes:XU,endUs:null!==(UU=this.addingTimestampUs)&&void 0!==UU?UU:this.lastTimestampUs+1e6*this.frameDurationS})}}function BQ(UU){const XU=new Uint8Array(UU.reduce(((UU,XU)=>UU+XU.byteLength),0));let zU=0;for(const cU of UU)XU.set(cU,zU),zU+=cU.byteLength;return XU}class ZQ{constructor(UU,XU,zU,cU){this.plan=UU,this.emit=zU,this.onSlotsLow=cU,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=XU}get partCount(){return this.nextIndex}addFragment(UU){let{bytes:XU,endUs:zU}=UU;this.pendingBytes>0&&this.pendingBytes+XU.byteLength>this.plan.maxBytes&&this.emitPending();let cU=0;for(;XU.byteLength-cU>this.plan.maxBytes-this.pendingBytes;){const UU=this.plan.maxBytes-this.pendingBytes;this.hold(XU.subarray(cU,cU+UU)),cU+=UU,this.emitPending()}this.hold(XU.subarray(cU)),this.completeUntilUs=zU,zU-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(UU){this.pending.push(UU),this.pendingBytes+=UU.byteLength}emitPending(){var UU;const XU=BQ(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(UU=this.completeUntilUs)&&void 0!==UU?UU:this.partStartUs,this.emit({index:this.nextIndex++,bytes:XU,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class RQ{constructor(UU,XU,zU,cU){let yU=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,QU=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=UU,this.partPlan=XU,this.post=zU,this.onSegmentEncoded=cU,this.journal=yU,this.onMuxFailed=QU,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(UU){const XU=eU()-UU;(XU<this.epochOffsetMs||XU-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=XU)}recordingMs(UU){return UU/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(UU){const XU=null===this.segment?0:(UU-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||XU>=this.segmentDurationMs))&&(this.pendingCutUs=UU);const zU=this.keyFrameMissed||this.pendingCutUs===UU;return this.cutRequested=!1,this.keyFrameMissed=!1,zU}onChunk(UU,XU,zU){if(null!==XU&&void 0!==XU&&XU.decoderConfig&&(this.decoderConfig=XU.decoderConfig),null!==this.pendingCutUs&&UU.timestamp>=this.pendingCutUs){if("key"!==UU.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(UU.timestamp,zU),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const cU=this.segment;if(null===cU.journalHeader)return cU.mp4.add(UU,this.decoderConfig),UU.byteLength;const yU=new Uint8Array(UU.byteLength);return UU.copyTo(yU),cU.mp4.addData(yU,UU.type,UU.timestamp,this.decoderConfig),cU.chunkTimestampsUs.push(UU.timestamp),cU.unjournaled.push({recordingId:cU.journalHeader.recordingId,segmentId:cU.journalId,index:cU.chunkCount++,timestampUs:UU.timestamp,key:"key"===UU.type,data:yU}),performance.now()-cU.lastJournalMs>=250&&this.journalChunks(cU),UU.byteLength}openSegment(UU,XU){const zU=this.nextJournalId++,cU=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:zU,containerCodec:XU.containerCodec,codec:XU.codec,width:XU.width,height:XU.height,fps:XU.fps,decoderConfig:this.decoderConfig,firstTimestampUs:UU,epochOffsetMs:this.epochOffsetMs}:null,yU=[],QU=new ZQ(this.partPlan,UU,(QU=>{this.postPart(zU,XU,UU,QU,null===cU?null:yU)}),(()=>{var UU;(null===(UU=this.segment)||void 0===UU?void 0:UU.journalId)===zU&&this.requestCut()})),AU=this.partPlan.keyframeIntervalMs/1e3*.9,FU=new GQ(XU.containerCodec,UU,1/XU.fps,AU,(UU=>{QU.addFragment(UU)}));return this.post({type:"videoSegmentOpened",journalId:zU}),{mp4:FU,parts:QU,format:XU,journalId:zU,journalHeader:cU,unjournaled:[],chunkTimestampsUs:yU,chunkCount:0,lastJournalMs:performance.now()}}postPart(UU,XU,zU,cU,yU){const{width:QU,height:AU,codec:FU,fps:oU}=XU,{startMs:DU}=function(UU,XU,zU,cU){const yU=UU/1e3+zU;return{startMs:yU,endMs:yU+XU/1e3+1e3/cU}}(zU,0,this.epochOffsetMs,oU),{completeUntilUs:EU}=cU,YU=null===EU?DU:this.recordingMs(EU),NU=cU.bytes.buffer,IU=null===yU||null===EU?null:function(UU,XU){let zU=0,cU=UU.length;for(;zU<cU;){const yU=zU+cU>>1;UU[yU]<XU?zU=yU+1:cU=yU}return zU}(yU,EU);this.post({type:"videoPart",journalId:UU,index:cU.index,bytes:NU,meta:{startMs:DU,endMs:YU,width:QU,height:AU,codec:FU},completeUntilUs:EU,completeUntilIndex:IU},[NU])}journalChunks(UU){const XU=UU.journalHeader;null!==this.journal&&null!==XU&&0!==UU.unjournaled.length&&(XU.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...XU},UU.unjournaled),UU.unjournaled=[],UU.lastJournalMs=performance.now())}closeSegment(UU){const XU=this.segment;this.segment=null,this.pendingCutUs=null,null!==XU&&(UU&&this.onSegmentEncoded(),this.journalChunks(XU),this.finishing=this.finishing.then((async()=>{let UU=null;try{await XU.mp4.finish()}catch(zU){UU=zU}XU.parts.finish(),this.post({type:"videoSegmentClosed",journalId:XU.journalId,parts:XU.parts.partCount}),null!==UU&&(console.error("Failed to finish a session replay video segment.",UU),this.onMuxFailed(UU instanceof Error?UU.message:String(UU)))})).catch((UU=>{console.error("Failed to close a session replay video segment.",UU)})))}whenFinished(){return this.finishing}}function PQ(UU,XU){return null!==UU&&XU>=UU}class WQ{constructor(UU,XU,zU,cU,yU){let QU=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=UU,this.cssSize=zU,this.post=cU,this.preferSoftwareEncoder=yU,this.quality=new YU,this.limiter=void 0,this.segmenter=void 0,this.scaler=new BU,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new tU(UU.maxFps),this.captureFps=UU.maxFps,this.segmenter=new RQ(UU.segmentDurationMs,XU,cU,(()=>{this.encoderFailures=0}),QU,(UU=>{this.stopVideo(`Muxer failed: ${UU}`)})),this.still=new WU(cU),this.stats=this.emptyStats()}handleFrame(UU,XU,zU){const cU=performance.now();try{this.stats.deliveredFrames++;const yU=UU.timestamp/1e3;if(this.segmenter.noteFrameArrival(yU),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(yU))return void this.stats.droppedForFpsCap++;if(this.noteBackingSize(XU),this.noteCaptureFps(zU,cU),this.still.offer(UU,this.segmenter.recordingMs(UU.timestamp)),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(PQ(this.rebuildDueMs,cU)||PQ(this.fpsRebuildDueMs,cU))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,UU)}finally{UU.close();const XU=performance.now()-cU;this.stats.workerBusyMs+=XU,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,XU),this.maybePostStats(cU)}}resize(UU){0!==UU.width&&0!==UU.height&&(this.cssSize=UU,this.scheduleRebuildIfSizeChanged())}updateHealth(UU,XU){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const zU=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:UU,pingMs:XU});this.backpressureDropsSinceHealth=0,zU&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(UU){return this.hidden=UU,UU?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(UU){this.suspended=!0;const XU=this.operations.then(UU).catch((UU=>{console.error("Session replay encoder operation failed.",UU)})).finally((()=>{this.operations===XU&&(this.suspended=!1)}));return this.operations=XU,XU}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var UU;null===(UU=this.active)||void 0===UU||UU.encoder.close(),this.active=null}async drainAndCloseSegment(){const UU=this.active;null===UU||await async function(UU,XU){let zU;const cU=new Promise((UU=>{zU=setTimeout((()=>{UU(!1)}),XU)}));try{return await Promise.race([UU.then((()=>!0)),cU])}finally{clearTimeout(zU)}}(UU.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(UU,"flush timed out")}encode(UU,XU){const zU=this.segmenter.needsKeyFrame(XU.timestamp)||XU.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;zU&&(this.lastKeyframeUs=XU.timestamp);const cU=this.scaleToEncoder(UU,XU);try{UU.encoder.encode(cU,{keyFrame:zU})}catch(yU){return void(yU instanceof DOMException&&("InvalidStateError"===yU.name||"EncodingError"===yU.name)?this.failEncoder(UU,yU.message):++this.refusedFrames>=30?this.failEncoder(UU,`refused 30 frames in a row: ${String(yU)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",yU))}finally{cU!==XU&&cU.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(UU,XU){let zU=XU;if(!this.scalerFailed)try{zU=this.scaler.scale(XU,UU.size)}catch(cU){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",cU)}return zU.displayWidth===UU.size.width&&zU.displayHeight===UU.size.height||(UU.sentMismatchedFrame=!0),zU}onEncoderOutput(UU,XU,zU){const cU=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(UU,XU,{containerCodec:zU.candidate.containerCodec,codec:zU.candidate.config.codec,width:zU.size.width,height:zU.size.height,fps:zU.fps}),this.stats.workerBusyMs+=performance.now()-cU}noteBackingSize(UU){null!==this.backingSize&&NU(this.backingSize,UU)||(this.backingSize=UU,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(UU,XU){this.captureFps=UU,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=XU+2e3:this.fpsRebuildDueMs=null}targetSize(){var UU;const XU=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(UU,XU,zU){const cU=XU.width*XU.height<UU.width*UU.height?XU:UU;let yU=IU(Math.max(cU.width,64)),QU=IU(Math.max(cU.height,64));if(pU({width:yU,height:QU})>zU){const UU=yU,XU=QU;for(yU=IU(yU*Math.sqrt(16*zU*16/(yU*QU))),QU=IU(yU*XU/UU);pU({width:yU,height:QU})>zU;)yU-=2,QU=IU(yU*XU/UU)}return{width:yU,height:QU}}(this.cssSize,null!==(UU=this.backingSize)&&void 0!==UU?UU:this.cssSize,XU)}scheduleRebuildIfSizeChanged(){null===this.active||NU(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const UU=this.quality.getLevel(),XU=this.encodeFps(),zU=this.targetSize(),cU=function(UU){const XU={width:UU.width,height:UU.height,bitrate:UU.bitrate,framerate:UU.maxFps},zU=[],cU=[UU.preferSoftware?"prefer-software":"prefer-hardware","no-preference"];for(const yU of cU)for(const UU of gU)for(const cU of kU)for(const QU of GU)zU.push({config:{...XU,codec:UU,hardwareAcceleration:yU,bitrateMode:cU,latencyMode:QU,avc:{format:"avc"}},containerCodec:"avc"});return zU.push({config:{...XU,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),zU}({...zU,bitrate:Math.round(aU(this.config,zU,UU.areaScale)*XU/this.config.maxFps),maxFps:XU,preferSoftware:this.preferSoftwareEncoder});let yU=null,QU=0;for(let DU=this.firstViableCandidate;DU<cU.length&&null===yU;DU++){const UU=await VideoEncoder.isConfigSupported(cU[DU].config).catch((UU=>(console.warn("VideoEncoder.isConfigSupported threw.",cU[DU].config,UU),null)));null!==UU&&void 0!==UU&&UU.supported&&(yU=cU[DU],QU=DU,this.firstViableCandidate=DU)}if(null===yU)return void this.markUnavailable(`No supported encoder config at ${zU.width}x${zU.height}`);const AU=new VideoEncoder({output:(UU,XU)=>{this.onEncoderOutput(UU,XU,FU)},error:UU=>{this.failEncoder(FU,UU.message)}}),FU={encoder:AU,candidates:cU,candidateIndex:QU,candidate:yU,size:zU,fps:XU,sentMismatchedFrame:!1};this.active=FU,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{AU.configure(yU.config)}catch(oU){return void this.failEncoder(FU,oU instanceof Error?oU.message:String(oU))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(UU,XU){console.error("Session replay encoder failed.",UU.candidate.config,XU),this.active===UU&&(this.active=null,"closed"!==UU.encoder.state&&UU.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(UU,XU,zU){var cU;let yU=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const QU=null===(cU=UU[XU])||void 0===cU?void 0:cU.config.hardwareAcceleration;if(!("prefer-hardware"===QU&&zU||"no-preference"!==QU&&yU))return XU+1;for(let AU=XU+1;AU<UU.length;AU++)if(UU[AU].config.hardwareAcceleration!==QU)return AU;return UU.length}(UU.candidates,UU.candidateIndex,UU.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${XU}`))}stopVideo(UU){if(this.unavailable)return;const XU=this.active;this.active=null,null!==XU&&"closed"!==XU.encoder.state&&XU.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(UU)}markUnavailable(UU){console.warn(`Session replay video stopped: ${UU}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:UU})}))}maybePostStats(UU){var XU,zU,cU,yU;const QU=UU-this.statsWindowStartMs;if(QU<5e3)return;const AU=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:QU,qualityLevel:this.quality.getLevelIndex(),codec:null!==(XU=null===AU||void 0===AU?void 0:AU.candidate.config.codec)&&void 0!==XU?XU:null,hardwareAcceleration:null!==(zU=null===AU||void 0===AU?void 0:AU.candidate.config.hardwareAcceleration)&&void 0!==zU?zU:null,encodeWidth:null!==(cU=null===AU||void 0===AU?void 0:AU.size.width)&&void 0!==cU?cU:0,encodeHeight:null!==(yU=null===AU||void 0===AU?void 0:AU.size.height)&&void 0!==yU?yU:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=UU}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let dQ=null,LQ=0;function eQ(UU){let XU=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(UU,{transfer:XU})}self.onmessage=UU=>{const XU=UU.data;switch(XU.type){case"init":dQ=new WQ(XU.videoConfig,XU.partPlan,XU.cssSize,eQ,XU.preferSoftwareEncoder,XU.journalRecordingId&&DU.supported?{recordingId:XU.journalRecordingId,journal:new DU}:null);break;case"frame":if(null===dQ){console.warn("Session replay video worker got a frame before its pipeline started"),XU.image.close();break}!function(UU,XU,zU,cU,yU){if(XU instanceof VideoFrame)return void UU.handleFrame(XU,cU,yU);let QU;try{QU=new VideoFrame(XU,{timestamp:zU})}catch(AU){return 0===LQ++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",AU),void(30===LQ&&UU.stopVideo(`Bitmap frames keep failing: ${AU instanceof Error?AU.message:String(AU)}`))}finally{XU.close()}LQ=0,UU.handleFrame(QU,cU,yU)}(dQ,XU.image,XU.timestampUs,XU.nY,XU.captureFps);break;case"resize":dQ.resize(XU.cssSize);break;case"health":dQ.updateHealth(XU.gameFps,XU.pingMs);break;case"hidden":dQ.setHidden(XU.hidden);break;case"flush":dQ.flushSegment();break;case"cut":dQ.cutAtNextFrame();break;case"gameJoined":dQ.gameJoined()}}})();', "Worker", void 0, zU.p + "sessionReplayVideo.worker.2385deca.worker.js")
    }

    function FX(UU) {
      return Math.max(2, 2 * Math.floor(UU / 2))
    }

    function oX(UU) {
      return Math.ceil(UU.width / 16) * Math.ceil(UU.height / 16)
    }
    class DX {
      constructor(UU) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / UU
      }
      setMaxFps(UU) {
        this.intervalMs = 1e3 / UU
      }
      shouldKeep(UU) {
        return !(UU < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = UU - this.nextDueMs > this.intervalMs ? UU + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class EX {
      constructor(UU, XU, zU) {
        this.budgetMsPerSecond = UU, this.minFps = XU, this.smoothedCostMs = zU
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      record(UU) {
        const XU = this.affordableFps() < this.minFps ? .5 : .05;
        this.smoothedCostMs += (UU - this.smoothedCostMs) * XU
      }
      maxFps(UU) {
        const XU = this.affordableFps();
        return XU < this.minFps ? .1 : Math.min(UU, XU)
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class YX {
      constructor(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = UU, this.bitmapGrab = cU, this.onUnavailable = yU, this.render = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = zU.msPerSecond, this.frameCostFloorMs = zU.frameCostFloorMs, this.budget = new EX(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = XU, this.captureFps = this.budgetedFps(), this.frameLimiter = new DX(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps
        }
      }
      start(UU) {
        this.render = UU, this.pendingGrab = null
      }
      stop() {
        this.render = null, this.pendingGrab = null
      }
      setMaxFps(UU) {
        this.wantedFps = UU, this.applyFps()
      }
      onAfterRender() {
        const UU = performance.timeOrigin + performance.now(),
          XU = this.render;
        if (null === XU) return;
        const zU = performance.now();
        if (null !== this.pendingGrab) {
          if (zU - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas bitmap didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(UU)) return;
        const cU = Math.round(1e3 * UU),
          yU = {
            width: XU.canvas.width,
            height: XU.canvas.height
          };
        if (null === this.bitmapGrab) {
          let UU;
          try {
            UU = new VideoFrame(XU.canvas, {
              timestamp: cU
            })
          } catch (oU) {
            return void this.grabFailed(oU)
          }
          return this.send(UU, cU, yU), void this.recordCost(Math.max(2 * (performance.now() - zU), this.frameCostFloorMs))
        }
        const QU = this.bitmapGrab.cssSize(),
          AU = function(UU, XU, zU) {
            const cU = XU.width * XU.height < UU.width * UU.height ? XU : UU;
            let yU = FX(Math.max(cU.width, 64)),
              QU = FX(Math.max(cU.height, 64));
            if (oX({
                width: yU,
                height: QU
              }) > zU) {
              const UU = yU,
                XU = QU;
              for (yU = FX(yU * Math.sqrt(16 * zU * 16 / (yU * QU))), QU = FX(yU * XU / UU); oX({
                  width: yU,
                  height: QU
                }) > zU;) yU -= 2, QU = FX(yU * XU / UU)
            }
            return {
              width: yU,
              height: QU
            }
          }(0 === QU.width ? yU : QU, yU, this.bitmapGrab.maxMacroblocks),
          FU = {
            startMs: zU
          };
        this.pendingGrab = FU, createImageBitmap(XU.canvas, {
          resizeWidth: AU.width,
          resizeHeight: AU.height,
          resizeQuality: "low"
        }).then((UU => {
          this.pendingGrab === FU ? (this.pendingGrab = null, this.send(UU, cU, yU)) : UU.close()
        }), (UU => {
          this.pendingGrab === FU && (this.pendingGrab = null, this.grabFailed(UU))
        })), this.recordCost(Math.max(performance.now() - zU, this.frameCostFloorMs))
      }
      send(UU, XU, zU) {
        const cU = {
          type: "frame",
          image: UU,
          timestampUs: XU,
          nY: zU,
          captureFps: this.captureFps
        };
        try {
          this.worker.postMessage(cU, [UU])
        } catch (yU) {
          return UU.close(), void this.grabFailed(yU)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(UU) {
        this.budget.record(UU), this.applyFps()
      }
      grabFailed(UU) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", UU);
        !(UU instanceof DOMException && "InvalidStateError" === UU.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${UU instanceof Error?UU.message:String(UU)}`))
      }
      applyFps() {
        const UU = this.budgetedFps();
        UU !== this.captureFps && (this.captureFps = UU, this.frameLimiter.setMaxFps(UU))
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var NX = zU(1322);
    class IX {
      constructor(UU) {
        this.events = UU, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const UU = (0, NX.B)().gameRender();
        if (null === UU || UU.canvas === this.canvas) return UU;
        const XU = null !== this.canvas;
        return this.canvas = UU.canvas, this.observe(UU.canvas), XU ? this.events.onCanvasSwapped(UU) : this.events.onFirstCanvas(UU), UU
      }
      stop() {
        var UU, XU;
        null === (UU = this.resizeObserver) || void 0 === UU || UU.disconnect(), null === (XU = this.listeners) || void 0 === XU || XU.abort()
      }
      observe(UU) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: XU
        } = this.listeners;
        UU.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: XU
        }), UU.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: XU
        });
        const zU = UU.getBoundingClientRect();
        this.size = {
          width: Math.round(zU.width),
          height: Math.round(zU.height)
        }, this.resizeObserver = new ResizeObserver((UU => {
          const XU = UU[UU.length - 1].contentRect,
            zU = {
              width: Math.round(XU.width),
              height: Math.round(XU.height)
            };
          0 !== zU.width && 0 !== zU.height && (this.size = zU, this.events.onResized(zU))
        })), this.resizeObserver.observe(UU)
      }
    }
    const pX = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      aX = 12e4;
    class tX extends Error {
      constructor(UU, XU) {
        super(XU), this.reason = UU
      }
    }
    class gX {
      constructor(UU, XU, zU, cU, yU) {
        this.access = UU, this.uploadToken = XU, this.transport = zU, this.callbacks = cU, this.options = yU, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(UU) {
        return this.segments.has(UU)
      }
      open(UU, XU) {
        this.segments.set(UU, {
          journalId: UU,
          sequence: XU,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(UU, XU) {
        const zU = this.segments.get(UU);
        if (void 0 !== zU) {
          zU.parts.push(XU), zU.bytes += XU.bytes.byteLength, !zU.cut && null === zU.totalParts && zU.bytes > this.options.maxHeldBytes / 2 && (zU.cut = !0, this.callbacks.cut());
          for (const UU of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(UU, "byteCap"), this.downUntilMs = this.options.nowMs() + aX
          }
          this.pump()
        }
      }
      close(UU, XU) {
        const zU = this.segments.get(UU);
        void 0 !== zU && (zU.totalParts = XU, this.pump())
      }
      forget(UU) {
        this.segments.delete(UU)
      }
      releaseAll() {
        for (const UU of this.segments.values()) UU.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: UU.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let UU = 0;
        for (const XU of this.segments.values()) UU += XU.bytes;
        return UU
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let XU = this.nextWork(); null !== XU; XU = this.nextWork()) try {
            await this.advance(XU)
          } catch (UU) {
            console.warn(`Session replay part joiner failed on video segment ${XU.sequence}; uploading it straight to storage.`, UU), UU instanceof tX || (this.downUntilMs = this.options.nowMs() + aX), this.handBack(XU, UU instanceof tX ? UU.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const UU of this.segments.values())
          if (UU.sentParts < UU.parts.length || UU.totalParts === UU.parts.length) return UU;
        return null
      }
      async advance(UU) {
        if (UU.sentParts < UU.parts.length) return this.expectHeld(await this.sendPart(UU, UU.parts[UU.sentParts])), void UU.sentParts++;
        for (let XU = 0; this.owns(UU.journalId); XU++) {
          const zU = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: UU.sequence,
            parts: UU.parts.length
          })));
          if (!this.owns(UU.journalId)) return;
          if ("stored" === zU.outcome && zU.stored.parts === UU.parts.length) return this.segments.delete(UU.journalId), void this.callbacks.stored(UU.journalId, UU.sequence, zU.stored);
          if ("missing" !== zU.outcome || XU >= 2) throw this.failure(zU);
          for (const XU of zU.parts) {
            if (!this.owns(UU.journalId)) return;
            const zU = UU.parts[XU];
            if (void 0 === zU) throw new tX("missing", `the joiner asked for part ${XU} of ${UU.parts.length}`);
            this.expectHeld(await this.sendPart(UU, zU))
          }
        }
      }
      sendPart(UU, XU) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: UU.sequence,
          index: XU.index,
          meta: {
            ...XU.meta,
            startMs: Math.round(XU.meta.startMs),
            endMs: Math.round(XU.meta.endMs)
          },
          completeUntilUs: XU.completeUntilUs
        }, XU.bytes)))
      }
      expectHeld(UU) {
        if ("buffered" !== UU.outcome) throw this.failure(UU)
      }
      failure(UU) {
        if ("refused" === UU.outcome) {
          this.refused = !0;
          for (const UU of [...this.segments.values()]) this.handBack(UU, "refused");
          return new tX("refused", `refused: ${UU.reason}`)
        }
        const XU = "stored" === UU.outcome ? "shortStored" : "missing" === UU.outcome ? "missing" : "closed";
        return new tX(XU, `answered ${UU.outcome}`)
      }
      async request(UU) {
        for (let zU = 1;; zU++) {
          try {
            return await UU()
          } catch (XU) {
            if (zU >= 3) throw XU
          }
          await this.options.wait(1e3 * 2 ** (zU - 1))
        }
      }
      handBack(UU, XU) {
        this.segments.delete(UU.journalId) && (this.stats.handBacks[XU]++, this.callbacks.handBack(UU.journalId, UU.sequence, UU.parts, UU.totalParts))
      }
    }
    const kX = HU.c;
    class GX {
      constructor(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = UU, this.uploadToken = XU, this.nextTelemetrySequence = zU, this.queuedDomAfter = cU, this.nowMs = yU, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(UU, XU, zU, cU, yU) {
        const QU = this.segment(UU, XU, zU, cU);
        if (void 0 === yU) return void this.request(QU, 0);
        const AU = yU.then((() => {
          this.stopped || this.segments.get(ZX(UU, XU)) !== QU || QU.requested || this.request(QU, 0), this.videoDue === AU && (this.videoDue = null)
        }));
        this.videoDue = AU
      }
      async takeDom(UU) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, UU);
        const XU = this.dom;
        if ((null === XU || void 0 === XU ? void 0 : XU.sequence) !== UU) return;
        this.dom = null;
        const zU = await XU.upload;
        return void 0 !== zU && BX(zU, this.nowMs()) ? zU.upload : void 0
      }
      async get(UU, XU, zU, cU, yU) {
        const QU = this.segment(UU, XU, zU, yU),
          AU = QU.requests.find((UU => cU >= UU.first && cU < UU.end));
        if (void 0 === this.valid(QU, cU) && void 0 !== AU) {
          const UU = await AU.answer.catch((() => null));
          if (null !== UU && "rejected" in UU) return UU
        }
        let FU = this.valid(QU, cU);
        if (void 0 === FU) {
          const UU = await this.request(QU, cU).answer;
          if ("rejected" in UU) return UU;
          FU = UU[0]
        }
        return FU
      }
      takeTelemetry(UU) {
        const XU = this.telemetry;
        if ((null === XU || void 0 === XU ? void 0 : XU.sequence) === UU) return this.telemetry = null, BX(XU.uD, this.nowMs()) ? XU.uD.target : void 0
      }
      peek(UU, XU, zU) {
        const cU = this.segments.get(ZX(UU, XU));
        return void 0 === cU ? void 0 : this.valid(cU, zU)
      }
      expire(UU, XU, zU) {
        const cU = this.segments.get(ZX(UU, XU)),
          yU = null === cU || void 0 === cU ? void 0 : cU.uD.get(zU);
        if (void 0 !== cU && void 0 !== yU)
          for (const [QU, AU] of cU.uD) AU.expiresAtMs <= yU.expiresAtMs && cU.uD.delete(QU)
      }
      stop() {
        this.stopped = !0
      }
      forget(UU, XU) {
        this.segments.delete(ZX(UU, XU))
      }
      segment(UU, XU, zU, cU) {
        const yU = ZX(UU, XU);
        let QU = this.segments.get(yU);
        return void 0 === QU && (QU = {
          kind: UU,
          sequence: XU,
          contentType: zU,
          slots: cU,
          uD: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(yU, QU)), QU
      }
      valid(UU, XU) {
        const zU = UU.uD.get(XU);
        return void 0 !== zU && BX(zU, this.nowMs()) ? zU.target : void 0
      }
      telemetryToAskFor() {
        const UU = this.nextTelemetrySequence(),
          XU = this.telemetry;
        return this.telemetryAsked === UU || null !== XU && XU.sequence === UU && BX(XU.uD, this.nowMs()) ? null : UU
      }
      domToAskFor() {
        var UU;
        const XU = this.queuedDomAfter(this.domTaken);
        return null === XU || XU.sequence === (null === (UU = this.dom) || void 0 === UU ? void 0 : UU.sequence) ? null : XU
      }
      request(UU, XU) {
        const zU = XU < UU.slots.count ? UU.slots.count : XU + 1,
          cU = this.nowMs();
        UU.requested = !0;
        const yU = "video" === UU.kind ? this.telemetryToAskFor() : null;
        null !== yU && (this.telemetryAsked = yU);
        const QU = "video" === UU.kind ? this.domToAskFor() : null,
          AU = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: UU.kind,
            sequence: UU.sequence,
            contentType: UU.contentType,
            parts: {
              first: XU,
              count: zU - XU,
              maxBytes: UU.slots.maxBytes
            },
            ...null === yU ? {} : {
              nextTelemetry: {
                sequence: yU,
                maxBytes: kX
              }
            },
            ...null === QU ? {} : {
              dom: QU
            }
          });
        if (null !== QU) {
          const UU = AU.then((UU => {
            if ("rejected" in UU || void 0 === UU.domUpload) return;
            const {
              expiresInSecs: XU,
              ...zU
            } = UU.domUpload;
            return {
              upload: zU,
              expiresAtMs: cU + 1e3 * XU
            }
          }), (() => {
            var UU;
            (null === (UU = this.dom) || void 0 === UU ? void 0 : UU.sequence) === QU.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: QU.sequence,
            upload: UU
          }
        }
        const FU = AU.then((zU => {
            var QU, AU;
            if ("rejected" in zU) return zU;
            const FU = cU + 1e3 * zU.expiresInSecs;
            zU.targets.forEach(((zU, cU) => {
              UU.uD.set(XU + cU, {
                target: zU,
                expiresAtMs: FU
              })
            }));
            return null !== yU && yU >= this.nextTelemetrySequence() && (null !== (QU = null === (AU = this.telemetry) || void 0 === AU ? void 0 : AU.sequence) && void 0 !== QU ? QU : -1) <= yU && void 0 !== zU.telemetryTarget && (this.telemetry = {
              sequence: yU,
              uD: {
                target: zU.telemetryTarget,
                expiresAtMs: FU
              }
            }), zU.targets
          })),
          oU = {
            first: XU,
            end: zU,
            answer: FU
          };
        UU.requests.push(oU);
        const DU = () => {
          UU.requests.splice(UU.requests.indexOf(oU), 1), null !== yU && this.telemetryAsked === yU && (this.telemetryAsked = null)
        };
        return FU.then(DU, DU), oU
      }
    }

    function BX(UU, XU) {
      return UU.expiresAtMs - 6e4 > XU
    }

    function ZX(UU, XU) {
      return `${UU}:${XU}`
    }
    const RX = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function PX(UU) {
      return new Promise((XU => {
        const zU = () => {
            clearTimeout(cU), window.removeEventListener("online", zU), XU()
          },
          cU = setTimeout(zU, UU);
        window.addEventListener("online", zU)
      }))
    }
    const WX = ["video", "dom"],
      dX = "video",
      LX = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      eX = "an earlier part of its segment was dropped",
      CX = new Set([403, 408, 409, 429]),
      wX = new Set(["RequestTimeout", "IncompleteBody"]);
    class qX {
      constructor(UU, XU, zU, cU) {
        this.transport = UU, this.uploadToken = XU, this.options = zU, this.callbacks = cU, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new GX(UU, XU, (() => {
          var UU;
          return null !== (UU = this.nextSequence.get("telemetry")) && void 0 !== UU ? UU : 0
        }), (UU => {
          const XU = this.queue.find((XU => "dom" === XU.kind && XU.sequence > UU));
          return void 0 === XU ? null : {
            sequence: XU.sequence,
            byteLength: XU.bytes.byteLength
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
        return this.queue.map((UU => {
          let {
            kind: XU,
            sequence: zU,
            meta: cU
          } = UU;
          return {
            kind: XU,
            sequence: zU,
            meta: cU
          }
        }))
      }
      openSegment(UU, XU, zU, cU) {
        const yU = this.takeSequence(UU);
        return this.prefetchTargets(UU, yU, XU, zU, cU), yU
      }
      prefetchTargets(UU, XU, zU, cU, yU) {
        this.stopped || this.targets.prefetch(UU, XU, zU, cU, yU)
      }
      peekTarget(UU, XU, zU) {
        return this.targets.peek(UU, XU, zU)
      }
      closeSegment(UU, XU) {
        this.targets.forget(UU, XU), UU === dX && this.brokenSegments.delete(XU)
      }
      enqueue(UU) {
        var XU, zU;
        const cU = null !== (XU = null === (zU = UU.part) || void 0 === zU ? void 0 : zU.sequence) && void 0 !== XU ? XU : null;
        if (this.stopped) return this.callbacks.onDropped(UU, "uploader stopped", cU), null;
        if (null !== cU && UU.kind === dX && this.brokenSegments.has(cU)) return this.callbacks.onDropped(UU, eX, cU), null;
        "still" === UU.kind && this.removeQueued(UU.kind);
        const yU = {
            ...UU,
            sequence: null !== cU && void 0 !== cU ? cU : this.takeSequence(UU.kind)
          },
          QU = this.queue.findIndex(((XU, zU) => (zU > 0 || !this.uploadInFlight) && LX[XU.kind] > LX[UU.kind]));
        return this.queue.splice(-1 === QU ? this.queue.length : QU, 0, yU), this.queuedBytes += UU.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(yU) ? yU.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const UU of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= UU.bytes.byteLength, this.callbacks.onDropped(UU, "uploader stopped", UU.sequence)
      }
      takeSequence(UU) {
        var XU;
        const zU = null !== (XU = this.nextSequence.get(UU)) && void 0 !== XU ? XU : 0;
        return this.nextSequence.set(UU, zU + 1), zU
      }
      removeQueued(UU) {
        for (let XU = this.queue.length - 1; XU >= (this.uploadInFlight ? 1 : 0); XU--)
          if (this.queue[XU].kind === UU) {
            const [UU] = this.queue.splice(XU, 1);
            this.queuedBytes -= UU.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const UU of WX)
          for (const XU of [!1, !0])
            for (let zU = this.uploadInFlight ? 1 : 0; zU < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const cU = this.queue[zU];
              if (cU.kind !== UU || !0 === cU.dropLast && !XU) {
                zU++;
                continue
              }
              const [yU] = this.queue.splice(zU, 1);
              this.queuedBytes -= yU.bytes.byteLength, this.callbacks.onDropped(yU, "backlog over cap", yU.sequence), this.segmentBroken(yU)
            }
      }
      segmentBroken(UU) {
        if (void 0 !== UU.part && UU.kind === dX) {
          this.brokenSegments.add(UU.sequence);
          for (let XU = this.queue.length - 1; XU >= (this.uploadInFlight ? 1 : 0); XU--) {
            const zU = this.queue[XU];
            zU.kind === dX && void 0 !== zU.part && zU.sequence === UU.sequence && (this.queue.splice(XU, 1), this.queuedBytes -= zU.bytes.byteLength, this.callbacks.onDropped(zU, eX, zU.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const UU = this.queue[0];
            this.uploadInFlight = !0;
            const XU = await this.upload(UU);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= UU.bytes.byteLength, "uploaded" !== XU.type ? (this.callbacks.onDropped(UU, XU.reason, UU.sequence), this.segmentBroken(UU), "refused" !== XU.type || this.stopped || "telemetry" !== UU.kind || (console.warn(`Session replay uploads refused (${XU.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(XU.reason))) : this.callbacks.onUploaded(UU, UU.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(UU) {
        let XU = null,
          zU = 0;
        for (let yU = 1;; yU++) {
          try {
            if (null === XU) {
              const zU = await this.requestTarget(UU);
              if ("rejected" in zU) {
                if (!zU.retryable) return {
                  type: "refused",
                  reason: zU.reason
                };
                throw new Error(`rejected for now: ${zU.reason}`)
              }
              XU = zU
            }
            try {
              "put" === XU.type ? await this.transport.put(XU.url, UU.bytes, UU.contentType, XU.ifNoneMatch) : await this.transport.post(XU.target, UU.bytes, UU.contentType)
            } catch (cU) {
              if (cU instanceof vU.b && null !== cU.status && cU.status < 500 && !CX.has(cU.status) && (null === cU.storageCode || !wX.has(cU.storageCode))) return console.warn(`Session replay ${UU.kind} segment ${UU.sequence} refused by storage:`, cU), {
                type: "dropped",
                reason: cU.message
              };
              throw cU
            }
            return {
              type: "uploaded"
            }
          } catch (cU) {
            const yU = cU instanceof Error ? cU.message : String(cU),
              QU = void 0 === UU.part ? "" : ` part ${UU.part.index}`;
            if (console.warn(`Session replay ${UU.kind} segment ${UU.sequence}${QU} upload failed:`, cU), cU instanceof vU.b && (403 === cU.status && (XU = null, void 0 !== UU.part && this.targets.expire(UU.kind, UU.sequence, UU.part.index)), ++zU >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: yU
            }
          }
          const QU = Math.min(3e4, this.options.baseBackoffMs * 2 ** (yU - 1));
          if (await this.options.wait(QU * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(UU) {
        const {
          part: XU
        } = UU;
        if (void 0 !== XU) {
          const zU = await this.targets.get(UU.kind, UU.sequence, UU.contentType, XU.index, XU.slots);
          return "rejected" in zU ? zU : {
            type: "post",
            target: zU
          }
        }
        const zU = "dom" === UU.kind ? await this.targets.takeDom(UU.sequence) : void 0;
        if (void 0 !== zU) return {
          type: "put",
          url: zU.uploadUrl,
          ifNoneMatch: zU.ifNoneMatch
        };
        const cU = "telemetry" === UU.kind && UU.bytes.byteLength <= kX ? this.targets.takeTelemetry(UU.sequence) : void 0;
        if (void 0 !== cU) return {
          type: "post",
          target: cU
        };
        const yU = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: UU.kind,
          sequence: UU.sequence,
          contentType: UU.contentType,
          byteLength: UU.bytes.byteLength
        });
        return "rejected" in yU ? yU : {
          type: "put",
          url: yU.uploadUrl,
          ifNoneMatch: yU.ifNoneMatch
        }
      }
    }
    class OX {
      constructor(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = UU, this.slots = XU, this.manifest = zU, this.journal = cU, this.cut = yU, this.joiner = QU, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(UU, XU) {
        switch (UU.type) {
          case "videoSegmentOpened": {
            var zU, cU;
            if (null !== (zU = this.joiner) && void 0 !== zU && zU.accepting) {
              var yU;
              const XU = this.uploader.takeSequence("video");
              this.joiner.open(UU.journalId, XU), this.openJournalId = UU.journalId, null === (yU = this.journal) || void 0 === yU || yU.videoQueued(UU.journalId, XU);
              break
            }
            const QU = this.uploader.openSegment("video", "video/mp4", this.slots, XU);
            this.segments.set(UU.journalId, {
              sequence: QU,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = UU.journalId, null === (cU = this.journal) || void 0 === cU || cU.videoQueued(UU.journalId, QU);
            break
          }
          case "videoPart": {
            var QU;
            if (null !== (QU = this.joiner) && void 0 !== QU && QU.owns(UU.journalId)) {
              const {
                index: XU,
                bytes: zU,
                meta: cU,
                completeUntilUs: yU,
                completeUntilIndex: QU
              } = UU;
              this.joiner.addPart(UU.journalId, {
                index: XU,
                bytes: zU,
                meta: cU,
                completeUntilUs: yU,
                completeUntilIndex: QU
              });
              break
            }
            const XU = this.segments.get(UU.journalId);
            void 0 !== XU && this.enqueuePart(UU.journalId, XU.sequence, UU);
            break
          }
          case "videoSegmentClosed": {
            var AU;
            if (null !== (AU = this.joiner) && void 0 !== AU && AU.owns(UU.journalId)) {
              var FU;
              if (this.openJournalId === UU.journalId && (this.openJournalId = null), UU.parts > 0) this.joiner.close(UU.journalId, UU.parts);
              else this.joiner.forget(UU.journalId), null === (FU = this.journal) || void 0 === FU || FU.videoSettled(UU.journalId);
              break
            }
            const XU = this.segments.get(UU.journalId);
            if (void 0 === XU) break;
            XU.totalParts = UU.parts, this.openJournalId === UU.journalId && (this.openJournalId = null), this.maybeDone(UU.journalId, XU);
            break
          }
        }
      }
      joinedStored(UU, XU, zU) {
        this.manifest.setVideoSegment(XU, zU.meta, null), this.storedWhole.set(XU, UU)
      }
      joinedHandedBack(UU, XU, zU, cU) {
        const yU = {
          sequence: XU,
          settledParts: 0,
          totalParts: cU,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(UU, yU), this.uploader.prefetchTargets("video", XU, "video/mp4", this.slots);
        for (const QU of zU) this.enqueuePart(UU, XU, QU)
      }
      enqueuePart(UU, XU, zU) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: zU.bytes,
          meta: {
            type: "video",
            meta: zU.meta,
            journalId: UU,
            index: zU.index,
            completeUntilUs: zU.completeUntilUs,
            completeUntilIndex: zU.completeUntilIndex
          },
          part: {
            sequence: XU,
            index: zU.index,
            slots: this.slots
          }
        })
      }
      landed(UU, XU) {
        if (null !== UU.completeUntilUs && UU.meta.endMs > UU.meta.startMs) {
          var zU, cU;
          const yU = this.segments.get(UU.journalId);
          void 0 !== yU && (yU.landedParts = UU.index + 1), this.manifest.setVideoSegment(XU, UU.meta, UU.index + 1), null === (zU = this.journal) || void 0 === zU || zU.videoPartLanded(UU.journalId, {
            partsLanded: UU.index + 1,
            completeUntilUs: UU.completeUntilUs,
            meta: UU.meta
          }, null !== (cU = UU.completeUntilIndex) && void 0 !== cU ? cU : 0)
        }
        this.settled(UU)
      }
      dropped(UU) {
        this.settled(UU), UU.journalId === this.openJournalId && UU.journalId !== this.cutJournalId && (this.cutJournalId = UU.journalId, this.cut())
      }
      listed(UU, XU) {
        if (null !== XU)
          for (const [cU, yU] of this.segments) yU.sequence === UU && (yU.listedParts = Math.max(yU.listedParts, XU), this.maybeDone(cU, yU));
        else {
          const XU = this.storedWhole.get(UU);
          var zU;
          void 0 !== XU && (this.storedWhole.delete(UU), null === (zU = this.journal) || void 0 === zU || zU.videoSettled(XU))
        }
      }
      settled(UU) {
        const XU = this.segments.get(UU.journalId);
        void 0 !== XU && (XU.settledParts++, this.maybeDone(UU.journalId, XU))
      }
      maybeDone(UU, XU) {
        if (null === XU.totalParts || XU.settledParts < XU.totalParts) return;
        const zU = XU.listedParts >= XU.landedParts;
        var cU, yU;
        XU.uploaded || (XU.uploaded = !0, this.uploader.closeSegment("video", XU.sequence), zU || null === (cU = this.journal) || void 0 === cU || cU.videoUploaded(UU));
        zU && (this.segments.delete(UU), null === (yU = this.journal) || void 0 === yU || yU.videoSettled(UU))
      }
    }
    var SX = zU(3280),
      rX = zU(5116);
    class uX {
      constructor(UU, XU) {
        this.deps = UU, this.videoStatus = XU, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new IX({
          onFirstCanvas: UU => {
            this.attachToCanvas(UU)
          },
          onCanvasSwapped: UU => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(UU), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: UU => {
            this.postToWorker({
              type: "resize",
              cssSize: UU
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
      attachToCanvas(UU) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(UU, this.deps.videoConfig)
        } catch (XU) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", XU), this.videoUnavailable(`video couldn't start: ${XU instanceof Error?XU.message:String(XU)}`)
        }
      }
      startVideo(UU, XU) {
        var zU, cU, yU;
        const QU = new AX,
          AU = (0, hU.n)(XU),
          FU = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          oU = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => DU), FU),
          DU = new OX(this.deps.uploader, AU, this.deps.manifest, this.deps.journal, FU, oU);
        QU.onmessage = UU => {
          this.onWorkerMessage(UU.data, DU)
        }, QU.onerror = UU => {
          console.error("Session replay video worker error.", UU.message), this.worker === QU && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${UU.message||"it didn't load"}`))
        }, this.worker = QU, this.uploads = DU, this.joiner = oU, this.deps.debug.joiner = null !== (zU = null === oU || void 0 === oU ? void 0 : oU.stats) && void 0 !== zU ? zU : null, this.videoStarted = !0, this.deps.stills.start(), this.postToWorker({
          type: "init",
          videoConfig: XU,
          partPlan: {
            ...AU,
            partDurationMs: XU.partDurationMs,
            keyframeIntervalMs: XU.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          preferSoftwareEncoder: XU.softwareEncoderPlatforms.includes((0, eU.getOperatingSystem)()),
          journalRecordingId: null !== (cU = null === (yU = this.deps.journal) || void 0 === yU ? void 0 : yU.recordingId) && void 0 !== cU ? cU : null
        }), this.capture = new YX(QU, XU.maxFps, {
          msPerSecond: XU.captureBudgetMsPerSecond,
          frameCostFloorMs: XU.captureFrameCostFloorMs
        }, XU.videoFrameGrabPlatforms.includes((0, eU.getOperatingSystem)()) ? null : {
          maxMacroblocks: XU.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (UU => {
          this.endVideo(), this.videoStopped("stopped_error", UU)
        })), this.capture.start(UU)
      }
      createJoiner(UU, XU, zU) {
        return new gX(UU, this.deps.recording.uploadToken, new sU(UU.url), {
          stored: (UU, zU, cU) => {
            XU().joinedStored(UU, zU, cU), this.deps.pageExit.segmentLanded()
          },
          handBack: (UU, zU, cU, yU) => {
            XU().joinedHandedBack(UU, zU, cU, yU)
          },
          cut: zU
        }, {
          wait: PX,
          nowMs: Date.now,
          maxHeldBytes: pX[this.deps.platformType]
        })
      }
      onWorkerMessage(UU, XU) {
        var zU, cU, yU, QU;
        switch (UU.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            XU.onWorkerMessage(UU, "videoSegmentOpened" === UU.type ? null === (zU = this.deps.dom()) || void 0 === zU ? void 0 : zU.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(UU, document.hidden);
            break;
          case "stats":
            yU = this.deps.debug, QU = UU.stats, yU.workerStats.push(QU), yU.workerStats.length > 120 && yU.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(UU.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = UU.level, null === (cU = this.capture) || void 0 === cU || cU.setMaxFps(UU.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, lU.d)(),
              level: UU.level,
              maxFps: UU.maxFps,
              reason: UU.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${UU.level} (${UU.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(UU.reason)
        }
      }
      videoUnavailable(UU) {
        var XU, zU;
        null === (XU = this.capture) || void 0 === XU || XU.stop(), this.capture = null, null === (zU = this.worker) || void 0 === zU || zU.terminate(), this.worker = null, this.videoStopped("stopped_error", UU)
      }
      videoStopped(UU, XU) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = XU, "stopped_error" === UU && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(UU, XU))
      }
      setVideoStatus(UU, XU) {
        this.videoStatus = UU, (0, SX.i)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, rX.g)(UU, XU)
      }
      maybeLogStats(UU) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const XU = Math.round(1e3 * UU.encodedFrames / UU.windowMs);
        console.warn(`Session replay stats: ${XU} fps encoded, ${UU.encodeWidth}x${UU.encodeHeight} ${UU.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var UU;
        null === (UU = this.capture) || void 0 === UU || UU.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const XU = this.worker;
        this.worker = null, setTimeout((() => {
          null === XU || void 0 === XU || XU.terminate()
        }), 15e3)
      }
      postToWorker(UU) {
        var XU;
        null === (XU = this.worker) || void 0 === XU || XU.postMessage(UU)
      }
    }
    const fX = 3 * HU.c / 4,
      iX = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var HX = zU(40622);
    const MX = {
        count: 1,
        maxBytes: hU.j
      },
      vX = "image/jpeg";
    class VX {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HU.d;
        this.uploader = UU, this.manifest = XU, this.relay = zU, this.keepalive = cU, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(UU, XU) {
        let {
          bytes: zU,
          small: cU,
          atMs: yU
        } = UU;
        const QU = zU.byteLength <= MX.maxBytes ? zU : cU;
        null !== QU && (this.latest = {
          bytes: QU,
          small: cU,
          atMs: yU
        }, XU && this.upload())
      }
      upload() {
        var UU, XU;
        const zU = this.latest;
        if (this.stopped || null === zU || zU.atMs <= (null !== (UU = null === (XU = this.queued) || void 0 === XU ? void 0 : XU.atMs) && void 0 !== UU ? UU : -1 / 0)) return;
        const cU = this.takeSequence();
        this.queued = {
          atMs: zU.atMs,
          sequence: cU
        }, this.uploader.enqueue({
          kind: "still",
          contentType: vX,
          bytes: zU.bytes,
          meta: {
            type: "still",
            atMs: zU.atMs,
            sequence: cU
          },
          part: {
            sequence: cU,
            index: 0,
            slots: MX
          }
        })
      }
      landed(UU) {
        this.manifest.setStill(UU.atMs, UU.sequence), this.uploader.closeSegment("still", UU.sequence)
      }
      dropped(UU) {
        this.uploader.closeSegment("still", UU.sequence)
      }
      beacon() {
        var UU, XU, zU, cU;
        const yU = this.latest;
        if (this.stopped || null === yU || yU.atMs <= (null !== (UU = null === (XU = this.manifest.contents.still) || void 0 === XU ? void 0 : XU.atMs) && void 0 !== UU ? UU : -1 / 0)) return;
        const QU = (null === (zU = this.queued) || void 0 === zU ? void 0 : zU.atMs) === yU.atMs ? this.queued : null;
        if (null !== QU && this.keepalive.isInFlight(vX)) return void this.manifest.setStill(yU.atMs, QU.sequence);
        const AU = null !== (cU = null === QU || void 0 === QU ? void 0 : QU.sequence) && void 0 !== cU ? cU : this.nextSequence,
          FU = this.uploader.peekTarget("still", AU, 0);
        if (void 0 !== FU)
          for (const oU of [yU.bytes, yU.small])
            if (null !== oU && this.sendBeacon(FU, oU)) return null === QU && this.takeSequence(), void this.manifest.setStill(yU.atMs, AU)
      }
      sendBeacon(UU, XU) {
        var zU, cU;
        const yU = null !== (zU = null === (cU = this.relay) || void 0 === cU ? void 0 : cU.beacon({
          method: "POST",
          url: UU.url,
          fields: UU.fields
        }, XU, vX, this.keepalive)) && void 0 !== zU ? zU : null;
        if (null !== yU) return yU;
        const {
          form: QU,
          byteLength: AU
        } = (0, HX.k)(UU, XU, vX);
        return this.keepalive.sendUploadBeacon(UU.url, QU, AU)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const UU = this.nextSequence++;
        return this.prefetchNext(), UU
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, vX, MX)
      }
    }
    var sX = zU(5131),
      nX = zU(40626),
      mX = zU(40635),
      lX = zU(40644),
      xX = zU(7106),
      JX = zU(7108);

    function jX(UU) {
      return 50 * Math.floor(UU / 50)
    }
    class KX {
      constructor() {
        this.writer = new xX.d((0, lU.d)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(UU, XU) {
        null !== UU && (this.setActionBits(UU.getActionBits(), (0, lU.d)()), this.unsubscribers.push(UU.onKey(((UU, XU, zU, cU, yU, QU) => {
          const AU = (0, JX.f)(UU);
          yU ? this.writer.writeKey(jX(QU), AU, XU, zU, cU) : 0 !== AU && null === (0, JX.i)(UU) && this.writer.writeKey(jX(QU), 0, XU, zU, cU)
        })), UU.onActions(((UU, XU) => {
          this.setActionBits(UU, XU)
        })), UU.onPointerLock(((UU, XU) => {
          this.writer.writeEvent(XU, UU ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, NX.t)((() => {
          const UU = (0, NX.c)();
          this.writer.writeFrame((0, lU.d)() - UU, UU), this.framesSinceFpsSample++, XU()
        })))
      }
      writeState(UU, XU) {
        this.writer.writeState((0, lU.d)(), {
          backingWidth: UU.canvas.width,
          backingHeight: UU.canvas.height,
          cssWidth: UU.cssWidth,
          cssHeight: UU.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: UU.renderer,
          pingMs: UU.pingMs,
          hidden: XU,
          qualityLevel: UU.qualityLevel
        })
      }
      writeEvent(UU) {
        this.writer.writeEvent((0, lU.d)(), UU)
      }
      sampleFps() {
        const UU = performance.now(),
          XU = UU - this.lastFpsSampleMs,
          zU = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = UU, this.framesSinceFpsSample = 0, 0 === zU || XU <= 0 ? null : 1e3 * zU / XU
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const UU = this.writer.chunkStartMs,
          XU = (0, lU.d)(),
          zU = this.writer.takeChunk(XU);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(XU, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: zU,
          startMs: UU,
          endMs: XU
        }
      }
      stop() {
        for (const UU of this.unsubscribers) UU();
        this.unsubscribers = []
      }
      setActionBits(UU, XU) {
        UU !== this.actionBits && (this.actionBits = UU, this.writer.writeActions(jX(XU), UU))
      }
    }
    var bX = zU(5142),
      TX = zU(40647);
    class hX {
      constructor(UU, XU) {
        var zU;
        this.recording = UU, this.telemetry = new KX, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const cU = XU.dryRun ? null : null !== (zU = UU.partJoiner) && void 0 !== zU ? zU : null,
          yU = null === cU ? null : (0, MU.h)(nU(cU)),
          AU = XU.dryRun ? new HX.c : new HX.g((0, LU.d)().segmentUploadUrl, {
            relay: yU
          });
        var oU, DU;
        this.videoConfig = XU.dryRun ? function(UU) {
          var XU, zU, cU, yU;
          const AU = QU[UU],
            FU = wU.k.getItem("replaySkipLowMemory"),
            oU = "boolean" === typeof FU ? FU : null;
          return {
            ...AU,
            maxFps: null !== (XU = SU("replayMaxFps")) && void 0 !== XU ? XU : AU.maxFps,
            maxMacroblocks: null !== (zU = SU("replayMaxMacroblocks")) && void 0 !== zU ? zU : AU.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (cU = SU("replayCaptureBudgetMs")) && void 0 !== cU ? cU : AU.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (yU = SU("replayCaptureCostFloorMs")) && void 0 !== yU ? yU : AU.captureFrameCostFloorMs,
            softwareEncoderPlatforms: rU("replayEncoder", "software", "hardware", AU.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: rU("replayGrab", "videoFrame", "bitmap", AU.videoFrameGrabPlatforms),
            skipLowMemoryDevices: null !== oU && void 0 !== oU ? oU : AU.skipLowMemoryDevices
          }
        }(XU.platformType) : UU.videoConfig && (oU = UU.videoConfig, DU = XU.platformType, {
          ...QU[DU],
          ...oU
        });
        const EU = (0, bX.c)(this.videoConfig);
        (0, SX.i)("recorded" === EU ? "video" : "dom_only", UU), this.manifest = new bU(UU.recordingId, UU.uploadToken, !XU.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: UU.expiresAtMs - 6e4,
          onSend: UU => {
            var XU;
            null === (XU = this.journal) || void 0 === XU || XU.manifestSent(UU)
          },
          onListed: UU => {
            let {
              list: XU,
              value: zU
            } = UU;
            var cU, yU;
            if ("videoSegments" === XU) null === (cU = this.video.uploads) || void 0 === cU || cU.listed(zU.sequence, null !== (yU = zU.parts) && void 0 !== yU ? yU : null);
            else if ("telemetrySegments" === XU) {
              var QU;
              null === (QU = this.journal) || void 0 === QU || QU.telemetrySettled(zU.sequence)
            } else {
              var AU;
              null === (AU = this.journal) || void 0 === AU || AU.domSettled(zU.sequence)
            }
          }
        }), !XU.dryRun && lX.b.supported && (this.journal = new zX(new lX.b, UU, this.manifest.contents, (0, LU.d)())), this.debug = function() {
          const UU = {
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
          return window.sessionReplayDebug = UU, UU
        }(), this.uploader = new qX(AU, UU.uploadToken, {
          ...RX,
          maxBacklogBytes: iX[XU.platformType],
          wait: PX
        }, {
          onUploaded: (UU, XU) => {
            var zU;
            this.debug.uploadedBytesByKind[UU.kind] = (null !== (zU = this.debug.uploadedBytesByKind[UU.kind]) && void 0 !== zU ? zU : 0) + UU.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(UU.meta, XU, UU.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (UU, XU, zU) => {
            var cU;
            if (console.warn(`Session replay dropped a ${UU.kind} segment: ${XU}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === UU.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (cU = this.video.uploads) || void 0 === cU || cU.dropped(UU.meta);
            else if ("still" === UU.meta.type) this.stills.dropped(UU.meta);
            else if ("telemetry" === UU.meta.type && null !== zU) {
              var yU;
              null === (yU = this.journal) || void 0 === yU || yU.telemetrySettled(zU)
            } else if ("dom" === UU.meta.type && null !== zU) {
              var QU;
              null === (QU = this.journal) || void 0 === QU || QU.domSettled(zU)
            }
          },
          onStopped: UU => {
            this.stop(`uploads refused: ${UU}`)
          }
        }), this.stills = new VX(this.uploader, this.manifest, yU), this.pageExit = new cX({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var UU, XU;
            null === (UU = this.dom) || void 0 === UU || UU.cut(), null === (XU = this.dom) || void 0 === XU || XU.cutAfterNextBatch()
          },
          postToWorker: UU => {
            this.video.postToWorker(UU)
          },
          writeEvent: UU => {
            this.telemetry.writeEvent(UU)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var UU;
            null === (UU = this.video.joiner) || void 0 === UU || UU.releaseAll()
          }
        }), this.video = new uX({
          recording: UU,
          videoConfig: this.videoConfig,
          joinerAccess: cU,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: XU.dryRun ? {
            logStats: !0 === wU.k.getItem("replayLogStats")
          } : OU,
          platformType: XU.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, EU);
        const YU = XU.dryRun ? function() {
          var UU;
          const XU = null !== (UU = (0, qU.f)() ? CU.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== UU ? UU : wU.k.getItem("replayPostHogHost");
          return "string" === typeof XU && XU.length > 0 ? {
            apiHost: XU,
            projectApiKey: "dry-run"
          } : null
        }() : UU.posthog;
        if (this.ownFpsMonitor = null === YU ? new TX.c({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, FU.k.subscribe("sessionReplayLowFps", (UU => {
            let {
              low: XU
            } = UU;
            this.isStopped || this.onLowFps(XU)
          })), FU.k.subscribe("sessionReplayStayProgress", (UU => {
            !this.isStopped && this.manifest.updateCurrentStay(UU) && this.manifest.sendSoon()
          })), FU.k.subscribe("sessionReplayGameQuit", (UU => {
            let {
              reasons: XU,
              gameName: zU
            } = UU;
            XU.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(zU) && this.pageExit.sendManifest()
          })), null !== XU.currentGame && (this.listStay(XU.currentGame), FU.k.UY("sessionReplayStayOpened", XU.currentGame.gameNameWithVariation)), this.start(UU.expiresAtMs), this.dom = null, null !== YU) {
          const zU = new WU(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: UU => this.isStopped || this.pageExit.isHiding || document.hidden && !UU
          }, this.journal, new dU.d);
          this.dom = zU, (0, rX.d)({
            recording: UU,
            posthog: YU,
            videoStatus: this.video.videoStatus,
            dryRun: XU.dryRun,
            onDomBatch: UU => {
              zU.add(UU)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var UU, XU;
        return null !== (UU = null === (XU = this.videoConfig) || void 0 === XU ? void 0 : XU.manifestIntervalMs) && void 0 !== UU ? UU : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(UU) {
        const {
          lobbyName: XU,
          ...zU
        } = UU;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === XU ? zU : {
          ...zU,
          lobbyName: XU
        })
      }
      gameJoined(UU) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(UU), FU.k.UY("sessionReplayStayOpened", UU.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(UU, XU) {
        this.isStopped || (this.manifest.addCreatorGrant(UU, XU), this.manifest.send())
      }
      onLowFps(UU) {
        this.lowFpsOpen = UU, UU && this.manifest.flagCurrentGame("lowFps")
      }
      start(UU) {
        const XU = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var UU;
          this.flushTelemetry(), null === (UU = this.dom) || void 0 === UU || UU.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, UU - Date.now() - 6e4))), this.pageExit.listen(XU), this.telemetry.attach((0, mX.c)(), (() => {
          var UU;
          null === (UU = this.video.capture) || void 0 === UU || UU.onAfterRender()
        }));
        for (const zU of ["error", "unhandledrejection"]) window.addEventListener(zU, (UU => {
          (0, nX.e)(UU) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: XU
        });
        (0, bX.g)((() => {
          this.video.onCellular()
        }), XU), null !== this.journal && (0, sX.c)(XU)
      }
      stop(UU) {
        var XU, zU;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${UU}`), this.debug.stoppedReason = UU, this.lifetime.abort();
          for (const UU of this.timers) clearTimeout(UU);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, rX.k)(), this.telemetry.stop(), this.flushTelemetry(), null === (XU = this.dom) || void 0 === XU || XU.cut(), null === (zU = this.dom) || void 0 === zU || zU.close(), this.video.endVideo(), this.manifest.send(), (0, SX.i)("events_only", this.recording)
        }
      }
      onStateTick() {
        var UU;
        const XU = this.video.canvasWatch.check();
        if (null === XU) return;
        const {
          cssSize: zU
        } = this.video.canvasWatch, cU = AU.d.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: XU.canvas,
          cssWidth: zU.width,
          cssHeight: zU.height,
          renderer: XU.renderer,
          pingMs: cU,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= fX && this.flushTelemetry();
        const yU = this.telemetry.sampleFps(),
          QU = document.hidden ? null : yU;
        if (null === (UU = this.ownFpsMonitor) || void 0 === UU || UU.addSample(QU, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: QU,
            pingMs: cU
          }), null !== this.video.capture) {
          const {
            averageMs: UU,
            fps: XU
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: UU,
            budgetFps: XU
          }
        }
      }
      onSegmentUploaded(UU, XU, zU) {
        var cU;
        if ("video" === UU.type) null === (cU = this.video.uploads) || void 0 === cU || cU.landed(UU, XU);
        else if ("still" === UU.type) this.stills.landed(UU);
        else if ("dom" === UU.type) {
          var yU;
          null === (yU = this.journal) || void 0 === yU || yU.domLanded(XU, UU.chunk), this.manifest.addDomSegment({
            sequence: XU,
            ...UU.chunk
          })
        } else {
          var QU;
          null === (QU = this.journal) || void 0 === QU || QU.telemetryLanded(XU, zU, UU.startMs, UU.endMs), this.manifest.addTelemetrySegment(XU, UU.startMs, UU.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: UU,
          startMs: XU,
          endMs: zU
        } = this.telemetry.takeChunk(), cU = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: UU,
          meta: {
            type: "telemetry",
            startMs: XU,
            endMs: zU
          }
        });
        var yU;
        null !== cU && (null === (yU = this.journal) || void 0 === yU || yU.telemetryQueued(cU, UU, XU, zU));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7106: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => LU,
      g: () => eU
    });
    var cU = zU(7108);
    const yU = 827609666,
      QU = 2,
      AU = 1,
      FU = 13,
      oU = 1,
      DU = 2,
      EU = 3,
      YU = 4,
      NU = 5,
      IU = 7,
      pU = 19,
      aU = 6,
      tU = 7,
      gU = 7,
      kU = 1,
      GU = 2,
      BU = 4,
      ZU = 65535,
      RU = 10,
      PU = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      WU = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function dU(UU) {
      return Math.max(0, Math.min(ZU, Math.round(UU)))
    }
    class LU {
      constructor(UU) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(UU)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - FU
      }
      writeFrame(UU, XU) {
        this.reserve(IU);
        const zU = this.view,
          cU = this.length;
        zU.setUint8(cU, oU), zU.setUint32(cU + 1, this.timeUnits(UU), !0), zU.setUint16(cU + 5, dU(100 * XU), !0), this.length += IU
      }
      writeState(UU, XU) {
        this.reserve(pU);
        const zU = this.view,
          cU = this.length;
        zU.setUint8(cU, DU), zU.setUint32(cU + 1, this.timeUnits(UU), !0), zU.setUint16(cU + 5, dU(XU.backingWidth), !0), zU.setUint16(cU + 7, dU(XU.backingHeight), !0), zU.setUint16(cU + 9, dU(XU.cssWidth), !0), zU.setUint16(cU + 11, dU(XU.cssHeight), !0), zU.setUint16(cU + 13, dU(100 * XU.devicePixelRatio), !0), zU.setUint8(cU + 15, PU.indexOf(XU.renderer)), zU.setUint16(cU + 16, null === XU.pingMs ? ZU : dU(Math.min(XU.pingMs, ZU - 1)), !0), zU.setUint8(cU + 18, (XU.hidden ? 1 : 0) | (7 & XU.qualityLevel) << 1), this.length += pU
      }
      writeEvent(UU, XU) {
        this.reserve(aU);
        const zU = this.length;
        this.view.setUint8(zU, EU), this.view.setUint32(zU + 1, this.timeUnits(UU), !0), this.view.setUint8(zU + 5, WU.indexOf(XU)), this.length += aU
      }
      writeActions(UU, XU) {
        this.reserve(tU);
        const zU = this.length;
        this.view.setUint8(zU, YU), this.view.setUint32(zU + 1, this.timeUnits(UU), !0), this.view.setUint16(zU + 5, XU, !0), this.length += tU
      }
      writeKey(UU, XU, zU, cU, yU) {
        this.reserve(gU);
        const QU = this.length;
        this.view.setUint8(QU, NU), this.view.setUint32(QU + 1, this.timeUnits(UU), !0), this.view.setUint8(QU + 5, XU), this.view.setUint8(QU + 6, (zU ? kU : 0) | (cU ? GU : 0) | (yU ? BU : 0)), this.length += gU
      }
      takeChunk(UU) {
        const XU = this.buffer.slice(0, this.length);
        return this.startChunk(UU), XU
      }
      startChunk(UU) {
        this.baseEpochMs = UU, this.view.setUint32(0, yU, !0), this.view.setUint8(4, QU), this.view.setFloat64(5, UU, !0), this.length = FU
      }
      timeUnits(UU) {
        return Math.max(0, Math.round((UU - this.baseEpochMs) * RU))
      }
      reserve(UU) {
        if (this.length + UU <= this.buffer.byteLength) return;
        const XU = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(XU).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = XU, this.view = new DataView(XU)
      }
    }

    function eU(UU) {
      const XU = new DataView(UU),
        zU = UU.byteLength < FU ? 0 : XU.getUint8(4);
      if (zU < AU || zU > QU || XU.getUint32(0, !0) !== yU) throw new Error(`Not a version ${AU}-${QU} replay telemetry chunk`);
      const dU = XU.getFloat64(5, !0),
        LU = {
          baseEpochMs: dU,
          inputRecorded: zU >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        eU = UU => dU + XU.getUint32(UU, !0) / RU;
      let CU = FU;
      for (; CU < UU.byteLength;) {
        const UU = XU.getUint8(CU);
        if (UU === oU) LU.frames.push({
          atMs: eU(CU + 1),
          cpuFrameMs: XU.getUint16(CU + 5, !0) / 100
        }), CU += IU;
        else if (UU === DU) {
          var wU;
          const UU = XU.getUint16(CU + 16, !0),
            zU = XU.getUint8(CU + 18);
          LU.states.push({
            atMs: eU(CU + 1),
            backingWidth: XU.getUint16(CU + 5, !0),
            backingHeight: XU.getUint16(CU + 7, !0),
            cssWidth: XU.getUint16(CU + 9, !0),
            cssHeight: XU.getUint16(CU + 11, !0),
            devicePixelRatio: XU.getUint16(CU + 13, !0) / 100,
            renderer: null !== (wU = PU[XU.getUint8(CU + 15)]) && void 0 !== wU ? wU : "unknown",
            pingMs: UU === ZU ? null : UU,
            hidden: 1 === (1 & zU),
            qualityLevel: zU >> 1 & 7
          }), CU += pU
        } else if (UU === EU) {
          var qU;
          LU.events.push({
            atMs: eU(CU + 1),
            event: null !== (qU = WU[XU.getUint8(CU + 5)]) && void 0 !== qU ? qU : "none"
          }), CU += aU
        } else if (UU === YU && LU.inputRecorded) LU.actions.push({
          atMs: eU(CU + 1),
          bits: XU.getUint16(CU + 5, !0)
        }), CU += tU;
        else {
          if (UU !== NU || !LU.inputRecorded) throw new Error(`Unknown replay telemetry record type ${UU} at byte ${CU}`);
          {
            var OU;
            const UU = XU.getUint8(CU + 6);
            LU.keys.push({
              atMs: eU(CU + 1),
              code: null !== (OU = cU.c[XU.getUint8(CU + 5)]) && void 0 !== OU ? OU : cU.c[0],
              down: 0 !== (UU & kU),
              bound: 0 !== (UU & GU),
              inPlay: 0 !== (UU & BU)
            }), CU += gU
          }
        }
      }
      return LU
    }
  },
  36961: UU => {
    UU.exports = function(UU, XU, zU, cU) {
      var yU = self || window;
      try {
        try {
          var QU;
          try {
            QU = new yU.Blob([UU])
          } catch (DU) {
            (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
          }
          var AU = yU.URL || yU.webkitURL,
            FU = AU.createObjectURL(QU),
            oU = new yU[XU](FU, zU);
          return AU.revokeObjectURL(FU), oU
        } catch (DU) {
          return new yU[XU]("data:application/javascript,".concat(encodeURIComponent(UU)), zU)
        }
      } catch (DU) {
        if (!cU) throw Error("Inline worker is not supported");
        return new yU[XU](cU, zU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);