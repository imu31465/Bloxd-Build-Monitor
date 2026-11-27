export const id = 64;
export const ids = [64];
export const modules = {
  41001: (WW, iW, OW) => {
    function mW() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function EW(WW) {
      return WW instanceof Uint8Array && (!mW() || !Buffer.isBuffer(WW))
    }

    function NW(WW) {
      return WW instanceof ArrayBuffer
    }

    function PW(WW) {
      return !!mW() && Buffer.isBuffer(WW)
    }
    var LW = OW(41009).c,
      cW = OW(41012).d,
      wW = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    iW.d = function(WW) {
      if (!EW(WW) && !NW(WW) && !PW(WW)) throw new TypeError(wW);
      var iW = !1,
        OW = !1;
      EW(WW) ? iW = !0 : NW(WW) && (OW = !0, WW = new Uint8Array(WW));
      var mW, LW, tW, ZW = new cW(WW),
        xW = ZW.maxCompressedLength();
      if (iW ? (mW = new Uint8Array(xW), tW = ZW.compressToBuffer(mW)) : OW ? (mW = new ArrayBuffer(xW), LW = new Uint8Array(mW), tW = ZW.compressToBuffer(LW)) : (mW = Buffer.alloc(xW), tW = ZW.compressToBuffer(mW)), !mW.slice) {
        var lW = new Uint8Array(Array.prototype.slice.call(mW, 0, tW));
        if (iW) return lW;
        if (OW) return lW.buffer;
        throw new Error("Not implemented")
      }
      return mW.slice(0, tW)
    }
  },
  41012: (WW, iW) => {
    var OW = new Array(15);

    function mW(WW, iW) {
      return 506832829 * WW >>> iW
    }

    function EW(WW, iW) {
      return WW[iW] + (WW[iW + 1] << 8) + (WW[iW + 2] << 16) + (WW[iW + 3] << 24)
    }

    function NW(WW, iW, OW) {
      return WW[iW] === WW[OW] && WW[iW + 1] === WW[OW + 1] && WW[iW + 2] === WW[OW + 2] && WW[iW + 3] === WW[OW + 3]
    }

    function PW(WW, iW, OW, mW, EW) {
      return OW <= 60 ? (mW[EW] = OW - 1 << 2, EW += 1) : OW < 256 ? (mW[EW] = 240, mW[EW + 1] = OW - 1, EW += 2) : (mW[EW] = 244, mW[EW + 1] = OW - 1 & 255, mW[EW + 2] = OW - 1 >>> 8, EW += 3),
        function(WW, iW, OW, mW, EW) {
          var NW;
          for (NW = 0; NW < EW; NW++) OW[mW + NW] = WW[iW + NW]
        }(WW, iW, mW, EW, OW), EW + OW
    }

    function LW(WW, iW, OW, mW) {
      return mW < 12 && OW < 2048 ? (WW[iW] = 1 + (mW - 4 << 2) + (OW >>> 8 << 5), WW[iW + 1] = 255 & OW, iW + 2) : (WW[iW] = 2 + (mW - 1 << 2), WW[iW + 1] = 255 & OW, WW[iW + 2] = OW >>> 8, iW + 3)
    }

    function cW(WW, iW, OW, mW) {
      for (; mW >= 68;) iW = LW(WW, iW, OW, 64), mW -= 64;
      return mW > 64 && (iW = LW(WW, iW, OW, 60), mW -= 60), LW(WW, iW, OW, mW)
    }

    function wW(WW, iW, LW, wW, tW) {
      for (var ZW = 1; 1 << ZW <= LW && ZW <= 14;) ZW += 1;
      var xW = 32 - (ZW -= 1);
      "undefined" === typeof OW[ZW] && (OW[ZW] = new Uint16Array(1 << ZW));
      var lW, AW = OW[ZW];
      for (lW = 0; lW < AW.length; lW++) AW[lW] = 0;
      var bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW = iW + LW,
        JW = iW,
        hW = iW,
        HW = !0;
      if (LW >= 15)
        for (bW = TW - 15, UW = mW(EW(WW, iW += 1), xW); HW;) {
          MW = 32, kW = iW;
          do {
            if (jW = UW, KW = MW >>> 5, MW += 1, kW = (iW = kW) + KW, iW > bW) {
              HW = !1;
              break
            }
            UW = mW(EW(WW, kW), xW), sW = JW + AW[jW], AW[jW] = iW - JW
          } while (!NW(WW, iW, sW));
          if (!HW) break;
          tW = PW(WW, hW, iW - hW, wW, tW);
          do {
            for (SW = iW, YW = 4; iW + YW < TW && WW[iW + YW] === WW[sW + YW];) YW += 1;
            if (iW += YW, tW = cW(wW, tW, SW - sW, YW), hW = iW, iW >= bW) {
              HW = !1;
              break
            }
            AW[mW(EW(WW, iW - 1), xW)] = iW - 1 - JW, sW = JW + AW[yW = mW(EW(WW, iW), xW)], AW[yW] = iW - JW
          } while (NW(WW, iW, sW));
          if (!HW) break;
          UW = mW(EW(WW, iW += 1), xW)
        }
      return hW < TW && (tW = PW(WW, hW, TW - hW, wW, tW)), tW
    }

    function tW(WW) {
      this.array = WW
    }
    tW.prototype.maxCompressedLength = function() {
      var WW = this.array.length;
      return 32 + WW + Math.floor(WW / 6)
    }, tW.prototype.compressToBuffer = function(WW) {
      var iW, OW = this.array,
        mW = OW.length,
        EW = 0,
        NW = 0;
      for (NW = function(WW, iW, OW) {
          do {
            iW[OW] = 127 & WW, (WW >>>= 7) > 0 && (iW[OW] += 128), OW += 1
          } while (WW > 0);
          return OW
        }(mW, WW, NW); EW < mW;) NW = wW(OW, EW, iW = Math.min(mW - EW, 65536), WW, NW), EW += iW;
      return NW
    }, iW.d = tW
  },
  41009: (WW, iW) => {
    var OW = [0, 255, 65535, 16777215, 4294967295];

    function mW(WW, iW, OW, mW, EW) {
      var NW;
      for (NW = 0; NW < EW; NW++) OW[mW + NW] = WW[iW + NW]
    }

    function EW(WW, iW, OW, mW) {
      var EW;
      for (EW = 0; EW < mW; EW++) WW[iW + EW] = WW[iW - OW + EW]
    }

    function NW(WW) {
      this.array = WW, this.pos = 0
    }
    NW.prototype.readUncompressedLength = function() {
      for (var WW, iW, OW = 0, mW = 0; mW < 32 && this.pos < this.array.length;) {
        if (WW = this.array[this.pos], this.pos += 1, (iW = 127 & WW) << mW >>> mW !== iW) return -1;
        if (OW |= iW << mW, WW < 128) return OW;
        mW += 7
      }
      return -1
    }, NW.prototype.uncompressToBuffer = function(WW) {
      for (var iW, NW, PW, LW, cW = this.array, wW = cW.length, tW = this.pos, ZW = 0; tW < cW.length;)
        if (iW = cW[tW], tW += 1, 0 === (3 & iW)) {
          if ((NW = 1 + (iW >>> 2)) > 60) {
            if (tW + 3 >= wW) return !1;
            PW = NW - 60, NW = 1 + ((NW = cW[tW] + (cW[tW + 1] << 8) + (cW[tW + 2] << 16) + (cW[tW + 3] << 24)) & OW[PW]), tW += PW
          }
          if (tW + NW > wW) return !1;
          mW(cW, tW, WW, ZW, NW), tW += NW, ZW += NW
        } else {
          switch (3 & iW) {
            case 1:
              NW = 4 + (iW >>> 2 & 7), LW = cW[tW] + (iW >>> 5 << 8), tW += 1;
              break;
            case 2:
              if (tW + 1 >= wW) return !1;
              NW = 1 + (iW >>> 2), LW = cW[tW] + (cW[tW + 1] << 8), tW += 2;
              break;
            case 3:
              if (tW + 3 >= wW) return !1;
              NW = 1 + (iW >>> 2), LW = cW[tW] + (cW[tW + 1] << 8) + (cW[tW + 2] << 16) + (cW[tW + 3] << 24), tW += 4
          }
          if (0 === LW || LW > ZW) return !1;
          EW(WW, ZW, LW, NW), ZW += NW
        } return !0
    }, iW.c = NW
  },
  40993: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      SessionReplayRecorder: () => NO
    });
    const mW = {
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
      EW = {
        ...mW,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        captureBudgetMsPerSecond: 60,
        skipLowMemoryDevices: !0
      },
      NW = {
        desktop: mW,
        mobile: EW,
        tablet: EW
      };
    var PW = OW(3822),
      LW = OW(27);
    const cW = 4194304,
      wW = 16777216;
    var tW = OW(4605);
    const ZW = [2, 4, 9, 3],
      xW = tW.g,
      lW = [xW.MouseInteraction, xW.MouseMove, xW.TouchMove],
      AW = [xW.MouseMove, xW.MouseInteraction, xW.Scroll, xW.ViewportResize, xW.Input, xW.TouchMove, xW.MediaInteraction, xW.Drag],
      bW = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function jW(WW) {
      if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return !1;
      const iW = WW.timestamp;
      return "number" === typeof iW && iW > 0 && iW <= 864e13
    }

    function UW(WW) {
      var iW;
      return WW.type === tW.c.IncrementalSnapshot ? null === (iW = WW.data) || void 0 === iW ? void 0 : iW.source : void 0
    }
    class kW {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(WW) {
        this.eventCount++;
        const iW = UW(WW);
        this.timestamps.push(WW.timestamp), this.active.push(function(WW) {
          var iW;
          return AW.includes(UW(WW)) || WW.type === tW.c.Custom && (null === (iW = WW.data) || void 0 === iW ? void 0 : iW.tag) === tW.l.active
        }(WW));
        const OW = function(WW) {
          var iW;
          const OW = WW.data;
          if (WW.type === tW.c.Custom && "$json_ld" === (null === OW || void 0 === OW ? void 0 : OW.tag)) return;
          const mW = "string" === typeof(null === OW || void 0 === OW ? void 0 : OW.href) ? OW.href.trim() : void 0,
            EW = "string" === typeof(null === OW || void 0 === OW || null === (iW = OW.payload) || void 0 === iW ? void 0 : iW.href) ? OW.payload.href.trim() : void 0;
          return mW || EW || void 0
        }(WW);
        OW && this.addUrl(OW), iW === xW.MouseInteraction && ZW.includes(WW.data.type) && this.clickCount++, iW === xW.Input && this.keypressCount++, lW.includes(iW) && this.mouseActivityCount++;
        const mW = WW.data;
        if (WW.type === tW.c.Plugin && "rrweb/console@1" === (null === mW || void 0 === mW ? void 0 : mW.plugin)) {
          var EW;
          const WW = bW.get(null === (EW = mW.payload) || void 0 === EW ? void 0 : EW.level);
          "warn" === WW ? this.consoleWarnCount++ : "error" === WW ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(WW) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: WW,
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
      addUrl(WW) {
        const iW = WW.slice(0, 4096);
        this.firstUrl ??= iW, this.urls.size < 25 && !this.urls.has(iW) && this.urlsLength + iW.length <= 8192 && (this.urls.add(iW), this.urlsLength += iW.length)
      }
      activeMs() {
        var WW;
        const iW = this.timestamps.map(((WW, iW) => iW)).sort(((WW, iW) => this.timestamps[WW] - this.timestamps[iW]));
        let OW = 0,
          mW = null,
          EW = 0;
        for (const PW of iW) {
          const WW = this.timestamps[PW],
            iW = this.active[PW],
            LW = !mW || iW && !mW.isActive || mW.isActive && EW + 5e3 < WW;
          var NW;
          if (EW = iW ? WW : EW, LW) null !== (NW = mW) && void 0 !== NW && NW.isActive && (OW += Math.max(1, mW.end - mW.start)), mW = {
            start: WW,
            end: WW,
            isActive: iW
          };
          else mW.end = WW
        }
        return null !== (WW = mW) && void 0 !== WW && WW.isActive && (OW += Math.max(1, mW.end - mW.start)), Math.floor(OW)
      }
    }
    const sW = 5592405.333333333;
    class MW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = WW, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new kW, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get sZ() {
        return 0 === this.lines.length
      }
      get tooBigForExit() {
        return this.holdsSnapshot || this.chars >= 262144
      }
      add(WW) {
        const iW = WW.events.filter(jW),
          OW = iW.map((iW => JSON.stringify([WW.windowId, iW]) + "\n"));
        if (0 === OW.length) return [];
        const mW = [],
          EW = OW.reduce(((WW, iW) => WW + iW.length), 0);
        !this.sZ && this.chars + EW > this.chunkChars && mW.push(this.finish());
        let NW = !1;
        return iW.forEach(((WW, iW) => {
          const EW = OW[iW];
          !this.sZ && this.chars + EW.length > this.chunkChars && (mW.push(this.finish()), NW = !1), NW || (this.counter.addMessage(), NW = !0), this.counter.addEvent(WW), this.lines.push(EW), this.chars += EW.length, this.startMs = Math.min(this.startMs, WW.timestamp), this.endMs = Math.max(this.endMs, WW.timestamp), this.holdsSnapshot ||= WW.type === tW.c.FullSnapshot || WW.type === tW.c.Meta
        })), mW.filter((WW => null !== WW))
      }
      finish() {
        if (this.sZ) return null;
        const {
          startMs: WW,
          endMs: iW,
          counter: OW,
          holdsSnapshot: mW,
          chunkIndex: EW,
          tailedChars: NW
        } = this, PW = {
          text: this.lines.join(""),
          startMs: WW,
          endMs: iW,
          counter: OW,
          holdsSnapshot: mW,
          chunkIndex: EW,
          tailedChars: NW
        };
        return this.reset(), PW
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > sW) return null;
        const WW = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, WW
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new kW, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function KW(WW) {
      let {
        text: iW
      } = WW;
      return iW.length <= sW
    }

    function SW(WW) {
      const {
        text: iW,
        startMs: OW,
        endMs: mW,
        counter: EW,
        chunkIndex: NW,
        tailedChars: PW
      } = WW;
      return PW !== iW.length && KW(WW) ? {
        chunkIndex: NW,
        fromChar: PW,
        text: iW.slice(PW),
        startMs: OW,
        endMs: mW,
        summary: EW.finish(0)
      } : null
    }

    function YW(WW, iW) {
      let {
        startMs: OW,
        endMs: mW,
        counter: EW,
        holdsSnapshot: NW
      } = WW, {
        bytes: PW,
        inflatedBytes: LW
      } = iW;
      return PW.byteLength > cW || LW > wW ? (console.warn(`Session replay: dropped a ${LW}-byte page recording chunk, over the size limits`), null) : {
        bytes: PW,
        startMs: OW,
        endMs: mW,
        summary: EW.finish(LW),
        holdsSnapshot: NW
      }
    }
    var yW = OW(40999);
    class TW {
      constructor(WW, iW, OW, mW) {
        this.uploader = WW, this.timing = iW, this.journal = OW, this.packer = mW, this.writer = new MW, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(WW) {
        this.pack(this.writer.add(WW)), (this.cutNext || this.timing.cutsEachBatch() || this.writer.tooBigForExit) && (this.cutNext = !1, this.cut());
        const iW = this.journal;
        null === iW || null !== this.tailTimer || this.writer.sZ || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const WW = this.writer.takeTail();
          null !== WW && iW.domTail(WW)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const WW = this.writer.finish();
        this.pack(null === WW ? [] : [WW])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.sZ) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const WW = this.packing[this.packing.length - 1];
        return void 0 !== WW ? new Promise((iW => {
          const OW = WW.onQueued;
          WW.onQueued = () => {
            null === OW || void 0 === OW || OW(), iW()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(WW) {
        const iW = WW.filter((WW => {
            const iW = function(WW) {
              let {
                text: iW
              } = WW;
              return iW.length <= wW || (console.warn(`Session replay: dropped a page recording chunk of ${iW.length} characters, over the size limits`), !1)
            }(WW);
            var OW;
            iW || (null === (OW = this.journal) || void 0 === OW || OW.domTailDropped(WW.chunkIndex));
            return iW
          })),
          OW = this.journalWorks() && iW.every((WW => KW(WW))) && this.packing.every((WW => WW.journalled));
        if (this.timing.packsNow(OW)) {
          for (const WW of iW) this.packing.push({
            text: WW,
            packed: null,
            journalled: this.tailHolds(WW)
          });
          for (const WW of [...this.packing]) this.packHere(WW);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const mW of iW) {
          const WW = null === this.journal ? null : SW(mW);
          null !== WW && this.journal.domTail(WW);
          const iW = {
            text: mW,
            packed: null,
            journalled: this.tailHolds(mW)
          };
          this.packing.push(iW), this.packer.pack(mW.text).then((WW => {
            iW.packed = WW, this.queuePacked()
          }), (() => {
            this.packHere(iW), this.queuePacked()
          }))
        }
      }
      packHere(WW) {
        const iW = this.packing.indexOf(WW);
        if (!(iW < 0)) try {
          WW.packed ??= (0, yW.d)(WW.text.text)
        } catch (EW) {
          var OW, mW;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", EW), this.packing.splice(iW, 1), null === (OW = this.journal) || void 0 === OW || OW.domTailDropped(WW.text.chunkIndex), null === (mW = WW.onQueued) || void 0 === mW || mW.call(WW)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(WW) {
        return this.journalWorks() && KW(WW)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: WW,
            packed: iW,
            onQueued: OW
          } = this.packing.shift();
          this.enqueue(WW.chunkIndex, YW(WW, iW)), null === OW || void 0 === OW || OW()
        }
      }
      enqueue(WW, iW) {
        var OW;
        if (null === iW) return void(null === (OW = this.journal) || void 0 === OW || OW.domTailDropped(WW));
        const {
          startMs: mW,
          endMs: EW,
          summary: NW,
          holdsSnapshot: PW
        } = iW, LW = iW.bytes.buffer, cW = {
          startMs: mW,
          endMs: EW,
          byteLength: LW.byteLength,
          summary: NW
        }, wW = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: LW,
          meta: {
            type: "dom",
            chunk: cW
          },
          dropLast: PW
        });
        var tW, ZW;
        null === wW ? null === (tW = this.journal) || void 0 === tW || tW.domTailDropped(WW) : null === (ZW = this.journal) || void 0 === ZW || ZW.domQueued(wW, LW, cW, WW)
      }
    }
    var JW = OW(41014);
    var hW = OW(41021),
      HW = OW(4048),
      nW = OW(100),
      uW = OW(109),
      oW = OW(39),
      dW = OW(5386);
    const eW = {
      logStats: !1
    };

    function vW(WW) {
      const iW = oW.i.getItem(WW);
      return "number" === typeof iW && Number.isFinite(iW) ? iW : null
    }

    function gW(WW, iW, OW, mW) {
      const EW = oW.i.getItem(WW);
      return EW === iW ? [(0, nW.getOperatingSystem)()] : EW === OW ? [] : mW
    }

    function DW(WW) {
      const iW = oW.i.getItem("replayGrab");
      return "stream" === iW ? [(0, HW.c)()] : "videoFrame" === iW || "bitmap" === iW ? [] : WW
    }
    const VW = "/v1/release",
      pW = cW;
    var fW = OW(1194),
      CW = OW(41035),
      XW = OW(41041),
      BW = OW(41046);

    function qW(WW) {
      return `replayJoiner/${WW}`
    }
    class RW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW.f;
        this.baseUrl = WW, this.keepalive = iW
      }
      postPart(WW, iW) {
        const OW = (0, XW.h)(WW, iW),
          mW = 15e3 + (EW = OW.size, Math.ceil(EW / 16384 * 1e3));
        var EW;
        return this.post("/v1/part", OW, OW.size, mW, WW.sequence)
      }
      finish(WW) {
        const iW = JSON.stringify(WW);
        return this.post("/v1/finish", iW, (0, CW.i)(iW), 3e4, WW.sequence)
      }
      release(WW) {
        return !this.keepalive.isInFlight(qW(WW.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${VW}`, JSON.stringify(WW))
      }
      async post(WW, iW, OW, mW, EW) {
        const NW = `${this.baseUrl}${WW}`,
          PW = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: iW,
            signal: (0, fW.t)(mW)
          },
          LW = OW <= CW.e ? await this.keepalive.fetch(NW, PW, OW, qW(EW)) : await fetch(NW, PW);
        if (!LW.ok) throw new BW.c(`Part joiner ${WW} failed with ${LW.status}`, LW.status);
        return await LW.json()
      }
    }

    function GW(WW) {
      return {
        releaseUrl: `${WW.url}${VW}`,
        token: WW.token,
        relay: {
          url: `${WW.url}/v1/relay`,
          maxBytes: pW
        }
      }
    }
    var IW = OW(7493),
      aW = OW(41052),
      rW = OW(41056),
      zW = OW(41063);

    function FW() {
      return (0, hW.d)().manifestUrl
    }
    const QW = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class Wi {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = iW, this.sendEnabled = OW, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...QW,
          ...mW
        };
        const EW = Math.round((0, aW.e)());
        this.manifest = {
          recordingId: WW,
          startedAtMs: EW,
          endedAtMs: EW,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(WW, iW, OW) {
        const mW = {
            sequence: WW,
            ...iW,
            startMs: Math.round(iW.startMs),
            endMs: Math.round(iW.endMs),
            ...null === OW ? {} : {
              parts: OW
            }
          },
          EW = this.manifest.videoSegments.findIndex((iW => iW.sequence === WW)); - 1 === EW ? this.manifest.videoSegments.push(mW) : this.manifest.videoSegments[EW] = mW, this.sendSoon()
      }
      setStill(WW, iW) {
        var OW, mW;
        WW > (null !== (OW = null === (mW = this.manifest.still) || void 0 === mW ? void 0 : mW.atMs) && void 0 !== OW ? OW : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(WW),
          sequence: iW
        }, this.sendSoon())
      }
      addTelemetrySegment(WW, iW, OW) {
        this.manifest.telemetrySegments.push({
          sequence: WW,
          startMs: Math.round(iW),
          endMs: Math.round(OW)
        }), this.sendSoon()
      }
      addDomSegment(WW) {
        this.pendingDom.add(WW), this.sendSoon()
      }
      addCreatorGrant(WW, iW) {
        this.creatorGrants.set(WW, iW)
      }
      gameJoined(WW) {
        this.gameLeft(), this.manifest.games.push({
          ...WW,
          joinedAtMs: Math.round((0, aW.e)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(WW) {
        const iW = this.manifest.games.at(-1);
        return !(!iW || (null === WW ? null !== iW.leftAtMs : iW.gameNameWithVariation !== WW)) && (iW.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(WW) {
        const iW = this.manifest.games.at(-1);
        iW && null === iW.leftAtMs && (iW[WW] = !0)
      }
      updateCurrentStay(WW) {
        var iW, OW, mW;
        const EW = this.manifest.games.at(-1);
        if (!EW || null !== EW.leftAtMs) return !1;
        const NW = (0, IW.o)(EW.furthestStep, WW.furthestStep),
          PW = Math.max(null !== (iW = EW.unboundKeyPresses) && void 0 !== iW ? iW : 0, null !== (OW = WW.unboundKeyPresses) && void 0 !== OW ? OW : 0);
        return (NW !== EW.furthestStep || PW !== (null !== (mW = EW.unboundKeyPresses) && void 0 !== mW ? mW : 0)) && (void 0 !== NW && (EW.furthestStep = NW), PW > 0 && (EW.unboundKeyPresses = PW), !0)
      }
      gameLeft() {
        const WW = this.manifest.games.at(-1);
        WW && null === WW.leftAtMs && (WW.leftAtMs = Math.round((0, aW.e)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(WW) {
        this.schedule(1e3, WW)
      }
      send() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var iW;
        if (this.sending) return void(this.queuedSend = ii(null !== (iW = this.queuedSend) && void 0 !== iW ? iW : [], WW));
        const OW = this.prepareSend(WW);
        null !== OW && (this.sending = !0, this.postInTurn(OW).then((WW => {
          this.sending = !1, this.retries = "retryLater" === WW ? this.retries + 1 : 0;
          const iW = this.queuedSend;
          null !== iW ? (this.queuedSend = null, this.send(iW)) : "retryLater" === WW && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: OW
          }
          of null !== (iW = this.prepareSend(WW)) && void 0 !== iW ? iW : []) {
          var iW;
          CW.f.sendBeacon(FW(), JSON.stringify(OW)) || (0, rW.b)(FW(), OW)
        }
      }
      async postInTurn(WW) {
        for (const {
            request: iW,
            items: OW
          }
          of WW) {
          const WW = await (0, rW.b)(FW(), iW);
          if ("retryLater" === WW) return WW;
          for (const iW of OW) iW.ack("uploaded" === WW);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(WW, iW) {
        const OW = Date.now() + WW;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= OW) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const mW = setTimeout((() => {
          this.send(iW())
        }), WW);
        this.sendTimer = {
          timer: mW,
          dueMs: OW
        }
      }
      prepareSend(WW) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, aW.e)());
        const iW = this.pendingItems(WW);
        this.options.onSend({
          ...this.manifest,
          games: iW.flatMap((WW => "games" === WW.list ? [WW.value] : []))
        });
        const {
          recordingId: OW,
          startedAtMs: mW,
          endedAtMs: EW,
          still: NW
        } = this.manifest, PW = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: OW,
            startedAtMs: mW,
            endedAtMs: EW,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === NW ? {} : {
              still: NW
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, zW.d)(PW, iW)
      }
      pendingItems(WW) {
        const iW = [];
        for (const mW of this.creatorGrants.values()) this.ackedGrants.has(mW) || iW.push({
          list: "creatorGrants",
          value: mW,
          ack: () => {
            this.ackedGrants.add(mW)
          }
        });
        for (const mW of this.manifest.games) {
          const WW = JSON.stringify(mW);
          this.ackedGames.get(mW) !== WW && iW.push({
            list: "games",
            value: {
              ...mW
            },
            ack: () => {
              this.ackedGames.set(mW, WW)
            }
          })
        }
        for (const mW of this.manifest.videoSegments) this.ackedVideo.get(mW.sequence) !== mW && iW.push({
          list: "videoSegments",
          value: mW,
          ack: WW => {
            this.ackedVideo.set(mW.sequence, mW), WW && this.options.onListed({
              list: "videoSegments",
              value: mW
            })
          }
        });
        const OW = new Set;
        for (const mW of this.manifest.telemetrySegments) OW.add(mW.sequence), this.ackedTelemetry.has(mW) || iW.push({
          list: "telemetrySegments",
          value: mW,
          ack: WW => {
            this.ackedTelemetry.add(mW), WW && this.options.onListed({
              list: "telemetrySegments",
              value: mW
            })
          }
        });
        for (const mW of this.pendingDom) iW.push({
          list: "domSegments",
          value: mW,
          ack: WW => {
            this.pendingDom.delete(mW), WW && this.options.onListed({
              list: "domSegments",
              value: mW
            })
          }
        });
        for (const mW of ii([], WW)) OW.has(mW.sequence) || iW.push({
          list: "telemetrySegments",
          value: mW,
          ack: () => {}
        });
        return iW
      }
    }

    function ii(WW, iW) {
      const OW = [...WW];
      for (const mW of iW) OW.some((WW => WW.sequence === mW.sequence)) || OW.push({
        sequence: mW.sequence,
        startMs: Math.round(mW.startMs),
        endMs: Math.round(mW.endMs)
      });
      return OW
    }
    var Oi = OW(41028),
      mi = OW(5397);

    function Ei(WW) {
      return {
        ...WW,
        videoSegments: [],
        telemetrySegments: [],
        games: WW.games.map((WW => ({
          ...WW
        })))
      }
    }
    class Ni {
      constructor(WW, iW, OW, mW) {
        var EW;
        this.journal = WW, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: iW.recordingId,
          uploadToken: iW.uploadToken,
          expiresAtMs: iW.expiresAtMs,
          nextVideoSequence: 0,
          manifest: Ei(OW),
          endpoints: mW,
          lateUploadUntilMs: iW.expiresAtMs + Oi.e,
          ...void 0 === iW.partJoiner ? {} : {
            partJoiner: GW(iW.partJoiner)
          }
        }, null === (EW = navigator.locks) || void 0 === EW || EW.request((0, mi.u)(iW.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(WW) {
        this.record.manifest = Ei(WW), this.putRecording()
      }
      videoQueued(WW, iW) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, iW + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), WW, iW)
      }
      videoPartLanded(WW, iW, OW) {
        this.landedVideo.set(WW, {
          segmentId: WW,
          ...iW
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: WW,
          ...iW
        }, OW)
      }
      telemetryQueued(WW, iW, OW, mW) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: WW,
          startMs: OW,
          endMs: mW,
          bytes: iW
        })
      }
      videoUploaded(WW) {
        this.journal.removeVideoChunks(this.record.recordingId, WW)
      }
      videoSettled(WW) {
        this.landedVideo.delete(WW), this.journal.removeVideo(this.record.recordingId, WW)
      }
      telemetryLanded(WW, iW, OW, mW) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: WW,
          startMs: OW,
          endMs: mW,
          bytes: iW,
          landed: !0
        })
      }
      telemetrySettled(WW) {
        this.journal.removeTelemetry(this.record.recordingId, WW)
      }
      domQueued(WW, iW, OW, mW) {
        var EW;
        this.record.nextDomSequence = Math.max(null !== (EW = this.record.nextDomSequence) && void 0 !== EW ? EW : 0, WW + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: WW,
          chunk: OW,
          bytes: iW
        }, mW)
      }
      domTail(WW) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...WW
        })
      }
      domTailDropped(WW) {
        this.journal.removeDomTail(this.record.recordingId, WW)
      }
      domLanded(WW, iW) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: WW,
          chunk: iW,
          bytes: null
        })
      }
      domSettled(WW) {
        this.journal.removeDom(this.record.recordingId, WW)
      }
      setMarker() {
        oW.i.setItem(mi.j, !0)
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
    class Pi {
      constructor(WW) {
        this.deps = WW, this.pageHiding = !1, this.exitFlushedAtMs = -1 / 0
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(WW) {
        document.addEventListener("visibilitychange", (() => {
          const WW = document.hidden;
          this.deps.writeEvent(WW ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: WW
          }), WW ? (this.flushTelemetryOnExit(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording()) : this.exitFlushedAtMs = -1 / 0
        }), {
          signal: WW
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: WW
        }), window.addEventListener("pagehide", (WW => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.flushTelemetryOnExit(), this.deps.stills.beacon(), this.sendManifest(), WW.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: WW
        })
      }
      flushTelemetryOnExit() {
        const WW = performance.now();
        WW - this.exitFlushedAtMs > 1e3 && (this.deps.flushTelemetry(), this.exitFlushedAtMs = WW)
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((WW => {
          let {
            sequence: iW,
            meta: OW
          } = WW;
          return "telemetry" === OW.type ? [{
            sequence: iW,
            startMs: OW.startMs,
            endMs: OW.endMs
          }] : []
        }))
      }
    }
    var Li = OW(37245),
      ci = OW.n(Li);

    function wi() {
      return ci()('/*! For license information please see sessionReplayVideo.worker.36aaf5cc.worker.js.LICENSE.txt */\n(()=>{var WW={6:()=>{}},iW={};function OW(mW){var EW=iW[mW];if(void 0!==EW)return EW.exports;var NW=iW[mW]={exports:{}};return WW[mW](NW,NW.exports,OW),NW.exports}(()=>{var WW,iW=Object.getPrototypeOf?WW=>Object.getPrototypeOf(WW):WW=>WW.__proto__;OW.t=function(mW,EW){if(1&EW&&(mW=this(mW)),8&EW)return mW;if("object"===typeof mW&&mW){if(4&EW&&mW.__esModule)return mW;if(16&EW&&"function"===typeof mW.then)return mW}var NW=Object.create(null);OW.r(NW);var PW={};WW=WW||[null,iW({}),iW([]),iW(iW)];for(var LW=2&EW&&mW;"object"==typeof LW&&!~WW.indexOf(LW);LW=iW(LW))Object.getOwnPropertyNames(LW).forEach((WW=>PW[WW]=()=>mW[WW]));return PW.default=()=>mW,OW.d(NW,PW),NW}})(),OW.d=(WW,iW)=>{for(var mW in iW)OW.o(iW,mW)&&!OW.o(WW,mW)&&Object.defineProperty(WW,mW,{enumerable:!0,get:iW[mW]})},OW.o=(WW,iW)=>Object.prototype.hasOwnProperty.call(WW,iW),OW.r=WW=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(WW,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(WW,"__esModule",{value:!0})};const mW="bloxdSessionReplayTails";const EW=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function NW(WW){return new Promise(((iW,OW)=>{WW.onsuccess=()=>{iW(WW.result)},WW.onerror=()=>{OW(WW.error)}}))}function PW(WW){return new Promise(((iW,OW)=>{WW.oncomplete=()=>{iW()},WW.onerror=()=>{OW(WW.error)},WW.onabort=()=>{var iW;OW(null!==(iW=WW.error)&&void 0!==iW?iW:new Error("IndexedDB transaction aborted"))}}))}function LW(WW){return IDBKeyRange.bound([WW],[WW,[]])}function cW(WW,iW){return IDBKeyRange.bound([WW,iW],[WW,iW,[]])}class wW{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(WW){this.write(["recordings"],(iW=>{iW.objectStore("recordings").put(WW)}))}putVideoSequence(WW,iW,OW){this.write(["recordings","videoSequences"],(mW=>{mW.objectStore("recordings").put(WW),mW.objectStore("videoSequences").put({recordingId:WW.recordingId,segmentId:iW,sequence:OW})}))}appendVideo(WW,iW){this.write(["videoHeaders","videoChunks"],(OW=>{OW.objectStore("videoHeaders").put(WW);const mW=OW.objectStore("videoChunks");for(const WW of iW)mW.put(WW)}))}putVideoProgress(WW,iW){this.write(["videoProgress","videoChunks"],(OW=>{if(OW.objectStore("videoProgress").put(WW),iW>0){const{recordingId:mW,segmentId:EW}=WW;OW.objectStore("videoChunks").delete(IDBKeyRange.bound([mW,EW,0],[mW,EW,iW],!1,!0))}}))}removeVideoChunks(WW,iW){this.write(["videoChunks"],(OW=>{OW.objectStore("videoChunks").delete(cW(WW,iW))}))}removeVideo(WW,iW){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(OW=>{OW.objectStore("videoHeaders").delete([WW,iW]),OW.objectStore("videoChunks").delete(cW(WW,iW)),OW.objectStore("videoSequences").delete([WW,iW]),OW.objectStore("videoProgress").delete([WW,iW])}))}putTelemetry(WW){this.write(["telemetry"],(iW=>{iW.objectStore("telemetry").put(WW)}))}removeTelemetry(WW,iW){this.write(["telemetry"],(OW=>{OW.objectStore("telemetry").delete([WW,iW])}))}putDom(WW){this.write(["dom"],(iW=>{iW.objectStore("dom").put(WW)}))}queueDom(WW,iW,OW){this.write(["recordings","dom","domTail"],(mW=>{mW.objectStore("recordings").put(WW),mW.objectStore("dom").put(iW),mW.objectStore("domTail").delete(cW(iW.recordingId,OW))}),(mW=>{console.warn(`Session replay couldn\'t journal page recording chunk ${iW.sequence}; a closing tab may lose it.`,mW),this.write(["recordings","domTail"],(mW=>{mW.objectStore("recordings").put(WW),mW.objectStore("domTail").delete(cW(iW.recordingId,OW))}))}))}putDomTail(WW){this.tailRecordings.add(WW.recordingId),this.write(["domTail"],(iW=>{iW.objectStore("domTail").put(WW)}))}removeDomTail(WW,iW){this.write(["domTail"],(OW=>{OW.objectStore("domTail").delete(cW(WW,iW))}))}removeDom(WW,iW){this.write(["dom"],(OW=>{OW.objectStore("dom").delete([WW,iW])}))}async listRecordings(){const WW=await this.open();return await NW(WW.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(WW){const iW=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),OW=LW(WW.recordingId),mW=WW=>NW(iW.objectStore(WW).getAll(OW)),[EW,PW,cW,wW,tW,ZW,xW]=await Promise.all([mW("videoHeaders"),mW("videoChunks"),mW("videoSequences"),mW("videoProgress"),mW("telemetry"),mW("dom"),mW("domTail")]);return{recording:WW,telemetry:tW,dom:ZW,domTails:xW,video:EW.map((WW=>{var iW,OW,mW;return{header:WW,sequence:null!==(iW=null===(OW=cW.find((iW=>iW.segmentId===WW.segmentId)))||void 0===OW?void 0:OW.sequence)&&void 0!==iW?iW:null,progress:null!==(mW=wW.find((iW=>iW.segmentId===WW.segmentId)))&&void 0!==mW?mW:null,chunks:PW.filter((iW=>iW.segmentId===WW.segmentId))}}))}}async deleteRecording(WW){const iW=(await this.open()).transaction([...EW],"readwrite");iW.objectStore("recordings").delete(WW);for(const OW of EW.slice(1))iW.objectStore(OW).delete(LW(WW));await PW(iW)}async forgetSent(WW,iW){const OW=(await this.open()).transaction([...EW],"readwrite"),{recordingId:mW}=WW;OW.objectStore("recordings").put(WW);for(const EW of iW.videoSegmentIds)OW.objectStore("videoHeaders").delete([mW,EW]),OW.objectStore("videoChunks").delete(cW(mW,EW)),OW.objectStore("videoSequences").delete([mW,EW]),OW.objectStore("videoProgress").delete([mW,EW]);for(const EW of iW.telemetrySequences)OW.objectStore("telemetry").delete([mW,EW]);for(const EW of iW.domSequences)OW.objectStore("dom").delete([mW,EW]);for(const EW of iW.domTailChunks)OW.objectStore("domTail").delete(cW(mW,EW));await PW(OW)}write(WW,iW){let OW=arguments.length>2&&void 0!==arguments[2]?arguments[2]:WW=>{this.fail(WW)};if(this.failed)return;const mW=mW=>{try{var EW;const NW=mW.transaction(WW,"readwrite");iW(NW),null===(EW=NW.commit)||void 0===EW||EW.call(NW),PW(NW).catch(OW)}catch(NW){OW(NW)}};null===this.db?this.open().then(mW,(WW=>{this.fail(WW)})):mW(this.db)}fail(WW){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",WW),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const WW=WW=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",WW)};try{const iW=this.db.transaction(["domTail"],"readwrite");for(const WW of this.tailRecordings)iW.objectStore("domTail").delete(LW(WW));PW(iW).catch(WW)}catch(iW){WW(iW)}}open(){return this.opening??=new Promise(((WW,iW)=>{const OW=indexedDB.open(mW,4);OW.onupgradeneeded=WW=>{const iW=OW.result;WW.oldVersion<1&&(iW.createObjectStore("recordings",{keyPath:"recordingId"}),iW.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),iW.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),iW.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),iW.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),WW.oldVersion<2&&iW.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),WW.oldVersion<3&&iW.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),iW.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let EW=!1;OW.onblocked=()=>{EW=!0,iW(new Error("An older tab holds the upload journal at an earlier version"))},OW.onsuccess=()=>{EW?OW.result.close():(this.db=OW.result,this.db.onversionchange=()=>{var WW;this.dropTails(),null===(WW=this.db)||void 0===WW||WW.close(),this.db=null,this.opening=null},WW(OW.result))},OW.onerror=()=>{iW(OW.error)}})),this.opening}}const tW=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class ZW{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return tW[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(WW){this.firstSampleMs??=WW.nowMs;const iW=null!==WW.pingMs&&WW.pingMs>300,OW=WW.nowMs-this.firstSampleMs>=3e4;OW&&(null!==WW.gameFps&&WW.gameFps<24||iW)?this.gameStrugglingSinceMs??=WW.nowMs:this.gameStrugglingSinceMs=null,OW&&WW.encoderBackpressureDrops>0?this.backpressureSinceMs??=WW.nowMs:this.backpressureSinceMs=null;const mW=null!==this.backpressureSinceMs&&WW.nowMs-this.backpressureSinceMs>=3e3,EW=mW||null!==this.gameStrugglingSinceMs&&WW.nowMs-this.gameStrugglingSinceMs>=1e4,NW=this.steppedDownForGameFps?45:24,PW=0===WW.encoderBackpressureDrops&&!iW&&(null===WW.gameFps||WW.gameFps>=NW);return EW?(this.healthySinceMs=null,this.level<tW.length-1&&WW.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=WW.nowMs,this.lastChangeReason=mW?"encoderBackpressure":iW?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):PW&&0!==this.level?(this.healthySinceMs??=WW.nowMs,WW.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=WW.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function xW(WW,iW){return WW.width===iW.width&&WW.height===iW.height}function lW(WW){return Math.max(2,2*Math.floor(WW/2))}function AW(WW){return Math.ceil(WW.width/16)*Math.ceil(WW.height/16)}function bW(WW,iW,OW){const mW=WW.bitrate*AW(iW)/WW.maxMacroblocks;return OW*Math.min(WW.bitrate,Math.max(WW.minBitrate,mW/OW))}class jW{constructor(WW){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/WW}setMaxFps(WW){this.intervalMs=1e3/WW}shouldKeep(WW){return!(WW<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=WW-this.nextDueMs>this.intervalMs?WW+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const UW=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],kW=["variable","constant"],sW=["realtime","quality"],MW=["quality","realtime"];class KW{constructor(){this.canvas=null,this.context=null}scale(WW,iW){if(WW.displayWidth===iW.width&&WW.displayHeight===iW.height)return WW;return this.contextFor(iW).drawImage(WW,0,0,iW.width,iW.height),new VideoFrame(this.canvas,{timestamp:WW.timestamp,alpha:"discard"})}contextFor(WW){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(WW.width,WW.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===WW.width&&this.canvas.height===WW.height||(this.canvas.width=WW.width,this.canvas.height=WW.height),this.context}}const SW=[...[.7,.6,.5,.42,.35].map((WW=>({width:640,quality:WW}))),{width:480,quality:.35},{width:360,quality:.35}],YW=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class yW{constructor(WW,iW){this.steps=WW,this.targetBytes=iW,this.index=0}get step(){return this.steps[this.index]}record(WW){WW>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):WW<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class TW{constructor(WW){this.post=WW,this.full=new yW(SW,28e3),this.small=new yW(YW,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(WW,iW){if(!(this.failed||this.encoding||WW.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=WW.timestamp;try{const OW=JW(WW,WW.displayWidth,WW.displayHeight,this.full.step.width),mW=JW(OW,OW.width,OW.height,this.small.step.width);this.encoding=!0,this.encode(OW,mW,iW).finally((()=>{this.encoding=!1}))}catch(OW){this.fail(OW)}}}async encode(WW,iW,OW){try{const[mW,EW]=await Promise.all([WW.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),iW.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(mW.size),this.small.record(EW.size);const NW=await mW.arrayBuffer(),PW=EW.size<=8192?await EW.arrayBuffer():null;this.post({type:"still",bytes:NW,small:PW,atMs:OW},null===PW?[NW]:[NW,PW])}catch(mW){this.fail(mW)}}fail(WW){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",WW)}}function JW(WW,iW,OW,mW){const EW=Math.min(mW,iW),NW=Math.max(1,Math.round(OW*EW/iW)),PW=new OffscreenCanvas(EW,NW),LW=PW.getContext("2d");if(null===LW)throw new Error("no 2D context");return LW.drawImage(WW,0,0,EW,NW),PW}let hW=Date.now()-performance.now();function HW(){const WW=performance.now(),iW=Date.now();return Math.abs(iW-(WW+hW))>20&&(hW=iW-WW),WW+hW}function nW(WW){if(!WW)throw new Error("Assertion failed.")}const uW=Math.PI/180,oW=(Math.PI,[1,0,0,0,1,0,0,0,1]),dW=WW=>{const iW=WW*uW,OW=Math.round(Math.cos(iW)),mW=Math.round(Math.sin(iW));return[OW,mW,0,-mW,OW,0,0,0,1]},eW=(WW,iW)=>[1,0,0,0,1,0,WW,iW,1],vW=(WW,iW)=>{const OW=new Array(9);for(let mW=0;mW<3;mW++)for(let EW=0;EW<3;EW++)OW[3*mW+EW]=WW[3*mW]*iW[EW]+WW[3*mW+1]*iW[3+EW]+WW[3*mW+2]*iW[6+EW];return OW},gW=WW=>WW&&WW[WW.length-1],DW=WW=>WW>=0&&WW<2**32,VW=WW=>{let iW=0;for(;0===WW.readBits(1)&&iW<32;)iW++;if(iW>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<iW)-1+WW.readBits(iW)},pW=WW=>{const iW=VW(WW);return 0===(1&iW)?-(iW>>1):iW+1>>1},fW=WW=>WW.constructor===Uint8Array?WW:ArrayBuffer.isView(WW)?new Uint8Array(WW.buffer,WW.byteOffset,WW.byteLength):new Uint8Array(WW),CW=WW=>WW.constructor===DataView?WW:ArrayBuffer.isView(WW)?new DataView(WW.buffer,WW.byteOffset,WW.byteLength):new DataView(WW),XW="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let WW=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const iW=new Uint8Array(3*WW.length);let OW=0;for(let mW=0;mW<WW.length;mW++){let EW=WW.charCodeAt(mW);if(EW<128)iW[OW++]=EW;else if(EW<2048)iW[OW++]=192|EW>>6,iW[OW++]=128|63&EW;else if(EW<55296||EW>57343)iW[OW++]=224|EW>>12,iW[OW++]=128|EW>>6&63,iW[OW++]=128|63&EW;else{const NW=mW+1<WW.length?WW.charCodeAt(mW+1):0;EW<56320&&NW>=56320&&NW<=57343?(EW=65536+(EW-55296<<10)+(NW-56320),mW++,iW[OW++]=240|EW>>18,iW[OW++]=128|EW>>12&63,iW[OW++]=128|EW>>6&63,iW[OW++]=128|63&EW):(iW[OW++]=239,iW[OW++]=191,iW[OW++]=189)}}return iW.slice(0,OW)}},BW=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new XW),qW={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},RW={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},GW={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},IW=WW=>!WW||null==WW.primaries&&null==WW.transfer&&null==WW.matrix&&null==WW.fullRange,aW=WW=>WW instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&WW instanceof SharedArrayBuffer||ArrayBuffer.isView(WW);class rW{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let WW;const iW=new Promise((iW=>{let OW=!1;WW=()=>{OW||(iW(),this.pending--,OW=!0)}})),OW=this.currentPromise;return this.currentPromise=iW,this.pending++,await OW,WW}}const zW=()=>{let WW,iW;return{promise:new Promise(((OW,mW)=>{WW=OW,iW=mW})),resolve:WW,reject:iW}},FW=WW=>{throw new Error(`Unexpected value: ${WW}`)},QW=(WW,iW,OW,mW)=>{OW>>>=0,OW&=16777215,mW?(WW.setUint8(iW,255&OW),WW.setUint8(iW+1,OW>>>8&255),WW.setUint8(iW+2,OW>>>16&255)):(WW.setUint8(iW,OW>>>16&255),WW.setUint8(iW+1,OW>>>8&255),WW.setUint8(iW+2,255&OW))},Wi="und",ii=WW=>{let iW=0;for(;0!==WW;)WW&=WW-1,iW++;return iW},Oi=/^[a-z]{3}$/,mi=1e6*(1+Number.EPSILON);const Ei=(async()=>{})().constructor,Ni=WW=>WW instanceof Ei||WW instanceof Promise||"function"===typeof WW?.then,Pi=function*(WW){for(const iW in WW){const OW=WW[iW];void 0!==OW&&(yield{key:iW,value:OW})}},Li=WW=>"number"===typeof WW&&!Number.isNaN(WW),ci=WW=>{nW(Number.isInteger(WW.num)),nW(Number.isInteger(WW.den)),nW(0!==WW.den);let iW=Math.abs(WW.num),OW=Math.abs(WW.den);for(;0!==OW;){const WW=iW%OW;iW=OW,OW=WW}const mW=iW||1;return{num:WW.num/mW,den:WW.den/mW}};new Map,new Map;const wi=WW=>Array.isArray(WW)?WW:[WW];class ti{constructor(){this._listeners=new Map}on(WW,iW,OW){this._listeners.has(WW)||this._listeners.set(WW,new Set);const mW={cZ:iW,once:OW?.once??!1};return this._listeners.get(WW).add(mW),()=>{this._listeners.get(WW)?.delete(mW)}}_emit(){for(var WW=arguments.length,iW=new Array(WW),OW=0;OW<WW;OW++)iW[OW]=arguments[OW];const[mW,EW]=iW,NW=this._listeners.get(mW);if(NW)for(const LW of NW){try{LW.cZ(EW)}catch(PW){console.error(PW)}LW.once&&NW.delete(LW)}}}const Zi=WW=>null!==WW&&"object"===typeof WW&&Object.getPrototypeOf(WW)===Object.prototype&&Object.values(WW).every((WW=>"string"===typeof WW));class xi{constructor(WW,iW){if(this.data=WW,this.mimeType=iW,!(WW instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof iW)throw new TypeError("mimeType must be a string.")}}class li{constructor(WW,iW,OW,mW){if(this.data=WW,this.mimeType=iW,this.name=OW,this.description=mW,!(WW instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==iW&&"string"!==typeof iW)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==OW&&"string"!==typeof OW)throw new TypeError("name, when provided, must be a string.");if(void 0!==mW&&"string"!==typeof mW)throw new TypeError("description, when provided, must be a string.")}}class Ai{constructor(WW){this.bytes=WW,this.pos=0}seekToByte(WW){this.pos=8*WW}readBit(){const WW=Math.floor(this.pos/8),iW=this.bytes[WW]??0,OW=7-(7&this.pos),mW=(iW&1<<OW)>>OW;return this.pos++,mW}readBits(WW){if(1===WW)return this.readBit();let iW=0;for(let OW=0;OW<WW;OW++)iW<<=1,iW|=this.readBit();return iW}writeBits(WW,iW){const OW=this.pos+WW;for(let mW=this.pos;mW<OW;mW++){const WW=Math.floor(mW/8);let EW=this.bytes[WW];const NW=7-(7&mW);EW&=~(1<<NW),EW|=(iW&1<<OW-mW-1)>>OW-mW-1<<NW,this.bytes[WW]=EW}this.pos=OW}copyBits(WW,iW){let OW=0;for(;OW<WW-7;OW+=8)this.writeBits(8,iW.readBits(8));const mW=WW-OW;mW>0&&this.writeBits(mW,iW.readBits(mW))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const WW=this.pos/8,iW=this.bytes[WW]??0;return this.pos+=8,iW}skipBits(WW){this.pos+=WW}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const WW=new Ai(this.bytes);return WW.pos=this.pos,WW}}const bi=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],ji=[-1,1,2,3,4,5,6,8],Ui=WW=>{const iW=5===WW.objectType||29===WW.objectType,OW=29===WW.objectType,mW=iW?WW.outputSampleRate/2:WW.outputSampleRate,EW=OW?1:WW.outputNumberOfChannels,NW=ji.indexOf(EW);if(-1===NW)throw new TypeError(`Unsupported number of channels: ${WW.outputNumberOfChannels}`);let PW=16;WW.objectType>=32&&(PW+=6),15===Mi(mW)&&(PW+=24),iW&&(PW+=9,15===Mi(WW.outputSampleRate)&&(PW+=24));const LW=Math.ceil(PW/8),cW=new Uint8Array(LW),wW=new Ai(cW);return ki(wW,WW.objectType),si(wW,mW),wW.writeBits(4,NW),iW&&(si(wW,WW.outputSampleRate),ki(wW,2)),wW.writeBits(3,0),cW},ki=(WW,iW)=>{iW<32?WW.writeBits(5,iW):(WW.writeBits(5,31),WW.writeBits(6,iW-32))},si=(WW,iW)=>{const OW=Mi(iW);WW.writeBits(4,OW),15===OW&&WW.writeBits(24,iW)},Mi=WW=>{const iW=bi.indexOf(WW);return-1===iW?15:iW};var Ki;!function(WW){WW[WW.Silent=0]="Silent",WW[WW.Errors=1]="Errors",WW[WW.Warnings=2]="Warnings",WW[WW.Info=3]="Info"}(Ki||(Ki={}));class Si{constructor(){}static get level(){return Si._level}static set level(WW){if(WW!==Ki.Silent&&WW!==Ki.Errors&&WW!==Ki.Warnings&&WW!==Ki.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");Si._level=WW}static get _emitter(){return Si._emitterInstance??=new ti}static on(WW,iW,OW){return Si._emitter.on(WW,iW,OW)}static _error(){for(var WW=arguments.length,iW=new Array(WW),OW=0;OW<WW;OW++)iW[OW]=arguments[OW];Si._emitter._emit("error",iW),Si._level>=Ki.Errors&&console.error(...iW)}static _warn(){for(var WW=arguments.length,iW=new Array(WW),OW=0;OW<WW;OW++)iW[OW]=arguments[OW];Si._emitter._emit("warn",iW),Si._level>=Ki.Warnings&&console.warn(...iW)}static _info(){for(var WW=arguments.length,iW=new Array(WW),OW=0;OW<WW;OW++)iW[OW]=arguments[OW];Si._emitter._emit("info",iW),Si._level>=Ki.Info&&console.info(...iW)}}Si._level=Ki.Info,Si._emitterInstance=null;const Yi=[48e3,44100,32e3],yi=[24e3,22050,16e3],Ti="Mediabunny v1.61.3";var Ji,Hi;!function(WW){WW[WW.NON_IDR_SLICE=1]="NON_IDR_SLICE",WW[WW.SLICE_DPA=2]="SLICE_DPA",WW[WW.SLICE_DPB=3]="SLICE_DPB",WW[WW.SLICE_DPC=4]="SLICE_DPC",WW[WW.IDR=5]="IDR",WW[WW.SEI=6]="SEI",WW[WW.SPS=7]="SPS",WW[WW.PPS=8]="PPS",WW[WW.AUD=9]="AUD",WW[WW.SPS_EXT=13]="SPS_EXT"}(Ji||(Ji={})),function(WW){WW[WW.RASL_N=8]="RASL_N",WW[WW.RASL_R=9]="RASL_R",WW[WW.BLA_W_LP=16]="BLA_W_LP",WW[WW.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",WW[WW.VPS_NUT=32]="VPS_NUT",WW[WW.SPS_NUT=33]="SPS_NUT",WW[WW.PPS_NUT=34]="PPS_NUT",WW[WW.AUD_NUT=35]="AUD_NUT",WW[WW.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",WW[WW.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(Hi||(Hi={}));const ni=function*(WW){let iW=0,OW=-1;for(;iW<WW.length-2;){const mW=WW.indexOf(0,iW);if(-1===mW||mW>=WW.length-2)break;iW=mW;let EW=0;iW+3<WW.length&&0===WW[iW+1]&&0===WW[iW+2]&&1===WW[iW+3]?EW=4:0===WW[iW+1]&&1===WW[iW+2]&&(EW=3),0!==EW?(-1!==OW&&iW>OW&&(yield{offset:OW,length:iW-OW}),OW=iW+EW,iW=OW):iW++}-1!==OW&&OW<WW.length&&(yield{offset:OW,length:WW.length-OW})},ui=WW=>31&WW,oi=WW=>{const iW=[],OW=WW.length;for(let mW=0;mW<OW;mW++)mW+2<OW&&0===WW[mW]&&0===WW[mW+1]&&3===WW[mW+2]?(iW.push(0,0),mW+=2):iW.push(WW[mW]);return new Uint8Array(iW)},di=(new Uint8Array([0,0,0,1]),(WW,iW)=>{const OW=WW.reduce(((WW,OW)=>WW+iW+OW.byteLength),0),mW=new Uint8Array(OW);let EW=0;for(const NW of WW){const WW=new DataView(mW.buffer,mW.byteOffset,mW.byteLength);switch(iW){case 1:WW.setUint8(EW,NW.byteLength);break;case 2:WW.setUint16(EW,NW.byteLength,!1);break;case 3:QW(WW,EW,NW.byteLength,!1);break;case 4:WW.setUint32(EW,NW.byteLength,!1)}EW+=iW,mW.set(NW,EW),EW+=NW.byteLength}return mW}),ei=WW=>{try{const iW=[],OW=[],mW=[];for(const LW of ni(WW)){const EW=WW.subarray(LW.offset,LW.offset+LW.length),NW=ui(EW[0]);NW===Ji.SPS?iW.push(EW):NW===Ji.PPS?OW.push(EW):NW===Ji.SPS_EXT&&mW.push(EW)}if(0===iW.length)return null;if(0===OW.length)return null;const EW=iW[0],NW=gi(EW);nW(null!==NW);const PW=100===NW.profileIdc||110===NW.profileIdc||122===NW.profileIdc||144===NW.profileIdc;return{configurationVersion:1,avcProfileIndication:NW.profileIdc,profileCompatibility:NW.constraintFlags,avcLevelIndication:NW.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:iW,pictureParameterSets:OW,chromaFormat:PW?NW.chromaFormatIdc:null,bitDepthLumaMinus8:PW?NW.bitDepthLumaMinus8:null,bitDepthChromaMinus8:PW?NW.bitDepthChromaMinus8:null,sequenceParameterSetExt:PW?mW:null}}catch(iW){return Si._error("Error building AVC Decoder Configuration Record:",iW),null}},vi={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},gi=WW=>{try{const iW=oi(WW),OW=new Ai(iW);OW.skipBits(1),OW.skipBits(2);if(7!==OW.readBits(5))return null;const mW=OW.readAlignedByte(),EW=OW.readAlignedByte(),NW=OW.readAlignedByte();VW(OW);let PW=1,LW=0,cW=0,wW=0;if(100===mW||110===mW||122===mW||244===mW||44===mW||83===mW||86===mW||118===mW||128===mW){PW=VW(OW),3===PW&&(wW=OW.readBits(1)),LW=VW(OW),cW=VW(OW),OW.skipBits(1);if(OW.readBits(1))for(let WW=0;WW<(3!==PW?8:12);WW++){if(OW.readBits(1)){const iW=WW<6?16:64;let mW=8,EW=8;for(let WW=0;WW<iW;WW++){if(0!==EW){EW=(mW+pW(OW)+256)%256}mW=0===EW?mW:EW}}}}VW(OW);const tW=VW(OW);if(0===tW)VW(OW);else if(1===tW){OW.skipBits(1),pW(OW),pW(OW);const WW=VW(OW);for(let iW=0;iW<WW;iW++)pW(OW)}VW(OW),OW.skipBits(1);const ZW=VW(OW),xW=VW(OW),lW=16*(ZW+1),AW=16*(xW+1);let bW=lW,jW=AW;const UW=OW.readBits(1);UW||OW.skipBits(1),OW.skipBits(1);if(OW.readBits(1)){const WW=VW(OW),iW=VW(OW),mW=VW(OW),EW=VW(OW);let NW,LW;if(0===(0===wW?PW:0))NW=1,LW=2-UW;else{NW=3===PW?1:2,LW=(1===PW?2:1)*(2-UW)}bW-=NW*(WW+iW),jW-=LW*(mW+EW)}let kW=2,sW=2,MW=2,KW=0,SW={num:1,den:1},YW=null,yW=null,TW=null,JW=null;const hW=OW.pos;if(OW.readBits(1)){if(OW.readBits(1)){const WW=OW.readBits(8);if(255===WW)SW={num:OW.readBits(16),den:OW.readBits(16)};else{const iW=vi[WW];iW&&(SW=iW)}}OW.readBits(1)&&OW.skipBits(1);if(OW.readBits(1)){OW.skipBits(3),KW=OW.readBits(1);OW.readBits(1)&&(kW=OW.readBits(8),sW=OW.readBits(8),MW=OW.readBits(8))}OW.readBits(1)&&(VW(OW),VW(OW));OW.readBits(1)&&(OW.skipBits(32),OW.skipBits(32),OW.skipBits(1));const WW=OW.readBits(1);WW&&Di(OW);const iW=OW.readBits(1);iW&&Di(OW),(WW||iW)&&OW.skipBits(1),OW.skipBits(1),TW=OW.pos,JW=OW.readBits(1),JW&&(OW.skipBits(1),VW(OW),VW(OW),VW(OW),VW(OW),YW=VW(OW),yW=VW(OW))}if(null===YW){nW(null===yW);if(44!==mW&&86!==mW&&100!==mW&&110!==mW&&122!==mW&&244!==mW||!(16&EW)){const WW=ZW+1,iW=(2-UW)*(xW+1),OW=jO.find((WW=>WW.level>=NW))??gW(jO),mW=Math.min(Math.floor(OW.maxDpbMbs/(WW*iW)),16);YW=mW,yW=mW}else YW=0,yW=0}return nW(null!==yW),{emulationUnpreventedBytes:iW,profileIdc:mW,constraintFlags:EW,levelIdc:NW,frameMbsOnlyFlag:UW,chromaFormatIdc:PW,bitDepthLumaMinus8:LW,bitDepthChromaMinus8:cW,codedWidth:lW,codedHeight:AW,displayWidth:bW,displayHeight:jW,pixelAspectRatio:SW,colourPrimaries:kW,matrixCoefficients:MW,transferCharacteristics:sW,fullRangeFlag:KW,numReorderFrames:YW,maxDecFrameBuffering:yW,vuiParametersFlagBitOffset:hW,bitstreamRestrictionFlagBitOffset:TW,bitstreamRestrictionFlag:JW}}catch(iW){return Si._error("Error parsing AVC SPS:",iW),null}},Di=WW=>{const iW=VW(WW);WW.skipBits(4),WW.skipBits(4);for(let OW=0;OW<=iW;OW++)VW(WW),VW(WW),WW.skipBits(1);WW.skipBits(5),WW.skipBits(5),WW.skipBits(5),WW.skipBits(5)},Vi=WW=>WW>>1&63,fi=WW=>{try{const iW=[],OW=[],mW=[],EW=[];for(const cW of ni(WW)){const NW=WW.subarray(cW.offset,cW.offset+cW.length),PW=Vi(NW[0]);PW===Hi.VPS_NUT?iW.push(NW):PW===Hi.SPS_NUT?OW.push(NW):PW===Hi.PPS_NUT?mW.push(NW):PW!==Hi.PREFIX_SEI_NUT&&PW!==Hi.SUFFIX_SEI_NUT||EW.push(NW)}if(0===OW.length||0===mW.length)return null;const NW=(WW=>{try{const iW=new Ai(oi(WW));iW.skipBits(16),iW.readBits(4);const OW=iW.readBits(3),mW=iW.readBits(1),{general_profile_space:EW,general_tier_flag:NW,general_profile_idc:PW,general_profile_compatibility_flags:LW,general_constraint_indicator_flags:cW,general_level_idc:wW}=Ci(iW,OW);VW(iW);const tW=VW(iW);let ZW=0;3===tW&&(ZW=iW.readBits(1));const xW=VW(iW),lW=VW(iW);let AW=xW,bW=lW;if(iW.readBits(1)){const WW=VW(iW),OW=VW(iW),mW=VW(iW),EW=VW(iW);let NW=1,PW=1;const LW=0===ZW?tW:0;1===LW?(NW=2,PW=2):2===LW&&(NW=2,PW=1),AW-=(WW+OW)*NW,bW-=(mW+EW)*PW}const jW=VW(iW),UW=VW(iW);VW(iW);const kW=iW.readBits(1);let sW=0;for(let WW=kW?0:OW;WW<=OW;WW++)VW(iW),sW=VW(iW),VW(iW);VW(iW),VW(iW),VW(iW),VW(iW),VW(iW),VW(iW),iW.readBits(1)&&iW.readBits(1)&&Xi(iW),iW.skipBits(1),iW.skipBits(1),iW.readBits(1)&&(iW.skipBits(4),iW.skipBits(4),VW(iW),VW(iW),iW.skipBits(1));const MW=VW(iW);if(Bi(iW,MW),iW.readBits(1)){const WW=VW(iW);for(let OW=0;OW<WW;OW++)VW(iW),iW.skipBits(1)}iW.skipBits(1),iW.skipBits(1);let KW=2,SW=2,YW=2,yW=0,TW=0,JW={num:1,den:1};if(iW.readBits(1)){const WW=Ri(iW,OW);JW=WW.pixelAspectRatio,KW=WW.colourPrimaries,SW=WW.transferCharacteristics,YW=WW.matrixCoefficients,yW=WW.fullRangeFlag,TW=WW.minSpatialSegmentationIdc}return{displayWidth:AW,displayHeight:bW,pixelAspectRatio:JW,colourPrimaries:KW,transferCharacteristics:SW,matrixCoefficients:YW,fullRangeFlag:yW,maxDecFrameBuffering:sW+1,spsMaxSubLayersMinus1:OW,spsTemporalIdNestingFlag:mW,generalProfileSpace:EW,generalTierFlag:NW,generalProfileIdc:PW,generalProfileCompatibilityFlags:LW,generalConstraintIndicatorFlags:cW,generalLevelIdc:wW,chromaFormatIdc:tW,bitDepthLumaMinus8:jW,bitDepthChromaMinus8:UW,minSpatialSegmentationIdc:TW}}catch(iW){return Si._error("Error parsing HEVC SPS:",iW),null}})(OW[0]);if(!NW)return null;let PW=0;if(mW.length>0){const WW=mW[0],iW=new Ai(oi(WW));iW.skipBits(16),VW(iW),VW(iW),iW.skipBits(1),iW.skipBits(1),iW.skipBits(3),iW.skipBits(1),iW.skipBits(1),VW(iW),VW(iW),pW(iW),iW.skipBits(1),iW.skipBits(1),iW.readBits(1)&&VW(iW),pW(iW),pW(iW),iW.skipBits(1),iW.skipBits(1),iW.skipBits(1),iW.skipBits(1);const OW=iW.readBits(1),EW=iW.readBits(1);PW=OW||EW?OW&&!EW?2:!OW&&EW?3:0:0}const LW=[...iW.length?[{arrayCompleteness:1,nalUnitType:Hi.VPS_NUT,nalUnits:iW}]:[],...OW.length?[{arrayCompleteness:1,nalUnitType:Hi.SPS_NUT,nalUnits:OW}]:[],...mW.length?[{arrayCompleteness:1,nalUnitType:Hi.PPS_NUT,nalUnits:mW}]:[],...EW.length?[{arrayCompleteness:1,nalUnitType:Vi(EW[0][0]),nalUnits:EW}]:[]];return{configurationVersion:1,generalProfileSpace:NW.generalProfileSpace,generalTierFlag:NW.generalTierFlag,generalProfileIdc:NW.generalProfileIdc,generalProfileCompatibilityFlags:NW.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:NW.generalConstraintIndicatorFlags,generalLevelIdc:NW.generalLevelIdc,minSpatialSegmentationIdc:NW.minSpatialSegmentationIdc,parallelismType:PW,chromaFormatIdc:NW.chromaFormatIdc,bitDepthLumaMinus8:NW.bitDepthLumaMinus8,bitDepthChromaMinus8:NW.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:NW.spsMaxSubLayersMinus1+1,temporalIdNested:NW.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:LW}}catch(iW){return Si._error("Error building HEVC Decoder Configuration Record:",iW),null}},Ci=(WW,iW)=>{const OW=WW.readBits(2),mW=WW.readBits(1),EW=WW.readBits(5);let NW=0;for(let tW=0;tW<32;tW++)NW=NW<<1|WW.readBits(1);const PW=new Uint8Array(6);for(let tW=0;tW<6;tW++)PW[tW]=WW.readBits(8);const LW=WW.readBits(8),cW=[],wW=[];for(let tW=0;tW<iW;tW++)cW.push(WW.readBits(1)),wW.push(WW.readBits(1));if(iW>0)for(let tW=iW;tW<8;tW++)WW.skipBits(2);for(let tW=0;tW<iW;tW++)cW[tW]&&WW.skipBits(88),wW[tW]&&WW.skipBits(8);return{general_profile_space:OW,general_tier_flag:mW,general_profile_idc:EW,general_profile_compatibility_flags:NW,general_constraint_indicator_flags:PW,general_level_idc:LW}},Xi=WW=>{for(let iW=0;iW<4;iW++)for(let OW=0;OW<(3===iW?2:6);OW++){if(WW.readBits(1)){const OW=Math.min(64,1<<4+(iW<<1));iW>1&&pW(WW);for(let iW=0;iW<OW;iW++)pW(WW)}else VW(WW)}},Bi=(WW,iW)=>{const OW=[];for(let mW=0;mW<iW;mW++)OW[mW]=qi(WW,mW,iW,OW)},qi=(WW,iW,OW,mW)=>{let EW=0,NW=0,PW=0;if(0!==iW&&(NW=WW.readBits(1)),NW){if(iW===OW){PW=iW-(VW(WW)+1)}else PW=iW-1;WW.readBits(1),VW(WW);const NW=mW[PW]??0;for(let iW=0;iW<=NW;iW++){WW.readBits(1)||WW.readBits(1)}EW=mW[PW]}else{const iW=VW(WW),OW=VW(WW);for(let mW=0;mW<iW;mW++)VW(WW),WW.readBits(1);for(let mW=0;mW<OW;mW++)VW(WW),WW.readBits(1);EW=iW+OW}return EW},Ri=(WW,iW)=>{let OW=2,mW=2,EW=2,NW=0,PW=0,LW={num:1,den:1};if(WW.readBits(1)){const iW=WW.readBits(8);if(255===iW)LW={num:WW.readBits(16),den:WW.readBits(16)};else{const WW=vi[iW];WW&&(LW=WW)}}return WW.readBits(1)&&WW.readBits(1),WW.readBits(1)&&(WW.readBits(3),NW=WW.readBits(1),WW.readBits(1)&&(OW=WW.readBits(8),mW=WW.readBits(8),EW=WW.readBits(8))),WW.readBits(1)&&(VW(WW),VW(WW)),WW.readBits(1),WW.readBits(1),WW.readBits(1),WW.readBits(1)&&(VW(WW),VW(WW),VW(WW),VW(WW)),WW.readBits(1)&&(WW.readBits(32),WW.readBits(32),WW.readBits(1)&&VW(WW),WW.readBits(1)&&Gi(WW,!0,iW)),WW.readBits(1)&&(WW.readBits(1),WW.readBits(1),WW.readBits(1),PW=VW(WW),VW(WW),VW(WW),VW(WW),VW(WW)),{pixelAspectRatio:LW,colourPrimaries:OW,transferCharacteristics:mW,matrixCoefficients:EW,fullRangeFlag:NW,minSpatialSegmentationIdc:PW}},Gi=(WW,iW,OW)=>{let mW=!1,EW=!1,NW=!1;iW&&(mW=1===WW.readBits(1),EW=1===WW.readBits(1),(mW||EW)&&(NW=1===WW.readBits(1),NW&&(WW.readBits(8),WW.readBits(5),WW.readBits(1),WW.readBits(5)),WW.readBits(4),WW.readBits(4),NW&&WW.readBits(4),WW.readBits(5),WW.readBits(5),WW.readBits(5)));for(let PW=0;PW<=OW;PW++){let iW=!0;1===WW.readBits(1)||(iW=1===WW.readBits(1));let OW=!1;iW?VW(WW):OW=1===WW.readBits(1);let PW=1;if(!OW){PW=VW(WW)+1}mW&&Ii(WW,PW,NW),EW&&Ii(WW,PW,NW)}},Ii=(WW,iW,OW)=>{for(let mW=0;mW<iW;mW++)VW(WW),VW(WW),OW&&(VW(WW),VW(WW)),WW.readBits(1)};var ai;!function(WW){WW[WW.audAllowed=0]="audAllowed",WW[WW.beforeFirstVcl=1]="beforeFirstVcl",WW[WW.afterFirstVcl=2]="afterFirstVcl",WW[WW.eoBitstreamAllowed=3]="eoBitstreamAllowed",WW[WW.noMoreDataAllowed=4]="noMoreDataAllowed"}(ai||(ai={}));const ri=WW=>{const iW=CW(WW),OW=iW.getUint8(9),mW=iW.getUint16(10,!0),EW=iW.getUint32(12,!0),NW=iW.getInt16(16,!0),PW=iW.getUint8(18);let LW=null;return PW&&(LW=WW.subarray(19,21+OW)),{outputChannelCount:OW,preSkip:mW,inputSampleRate:EW,outputGain:NW,channelMappingFamily:PW,channelMappingTable:LW}};var zi;!function(WW){WW[WW.STREAMINFO=0]="STREAMINFO",WW[WW.VORBIS_COMMENT=4]="VORBIS_COMMENT",WW[WW.PICTURE=6]="PICTURE"}(zi||(zi={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const Fi=[1,2,3,6],Qi=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],WO=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],iO=[16,16,20,20,0,24,24,0],OO=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],mO=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],EO=[32e3,44100,48e3,0],NO=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],PO=[512,1024,2048,4096],LO=WW=>{const iW=cO(WW),OW=CW(WW);let mW=iW?4*Math.ceil(iW.frameSize/4):0,EW=null;for(;mW+4<=WW.length&&1683496997===OW.getUint32(mW);){const iW=wO(WW.subarray(mW));if(!iW)break;EW??=iW,mW+=iW.frameSize}if(iW)return{frameSize:EW?mW:iW.frameSize,sampleRate:iW.sampleRate,numberOfChannels:iW.numberOfChannels,sampleCount:iW.sampleCount,channelLayout:iW.channelLayout,pcmResolution:iW.pcmResolution,bitRate:iW.bitRate,core:iW,hasExtensions:null!==EW};if(!EW?.asset)return null;const{asset:NW}=EW;return{frameSize:mW,sampleRate:NW.sampleRate,numberOfChannels:NW.numberOfChannels,sampleCount:NW.sampleCount,channelLayout:NW.channelLayout,pcmResolution:NW.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},cO=WW=>{if(WW.length<18)return null;if(127!==WW[0]||254!==WW[1]||128!==WW[2]||1!==WW[3])return null;const iW=new Ai(WW);if(iW.skipBits(32),iW.skipBits(1),31!==iW.readBits(5))return null;const OW=iW.readBits(1),mW=iW.readBits(7)+1;if(mW%8!==0)return null;const EW=iW.readBits(14)+1;if(EW<96)return null;const NW=iW.readBits(6);if(NW>=OO.length)return null;const PW=Qi[iW.readBits(4)];if(0===PW)return null;const LW=WO[iW.readBits(5)];if(0!==iW.readBits(1))return null;iW.skipBits(4),iW.skipBits(5);const cW=iW.readBits(2);if(3===cW)return null;iW.skipBits(1),OW&&iW.skipBits(16),iW.skipBits(7);const wW=iO[iW.readBits(3)];if(0===wW)return null;const tW=0!==cW;return{frameSize:EW,sampleRate:PW,numberOfChannels:OO[NW]+(tW?1:0),sampleCount:32*mW,channelLayout:mO[NW]|(tW?8:0),amode:NW,lfePresent:tW,bitRate:LW,pcmResolution:wW}},wO=WW=>{if(WW.length<10)return null;if(100!==WW[0]||88!==WW[1]||32!==WW[2]||37!==WW[3])return null;const iW=new Ai(WW);iW.skipBits(32),iW.skipBits(8);const OW=iW.readBits(2),mW=iW.readBits(1),EW=8+4*mW,NW=16+4*mW;iW.skipBits(EW);const PW=iW.readBits(NW)+1,LW={frameSize:PW,asset:null};if(!iW.readBits(1))return LW;const cW=EO[iW.readBits(2)],wW=512*(iW.readBits(3)+1);iW.readBits(1)&&iW.skipBits(36);const tW=iW.readBits(3)+1,ZW=iW.readBits(3)+1,xW=[];for(let UW=0;UW<tW;UW++)xW.push(iW.readBits(OW+1));for(const UW of xW)iW.skipBits(8*ii(UW));if(iW.readBits(1)){iW.skipBits(2);const WW=iW.readBits(2)+1<<2,OW=iW.readBits(2)+1;iW.skipBits(OW*WW)}for(let UW=0;UW<ZW;UW++)iW.skipBits(NW);iW.skipBits(9),iW.skipBits(3),iW.readBits(1)&&iW.skipBits(4),iW.readBits(1)&&iW.skipBits(24),iW.readBits(1)&&iW.skipBits(8*(iW.readBits(10)+1));const lW=iW.readBits(5)+1,AW=NO[iW.readBits(4)],bW=iW.readBits(8)+1;let jW=0;if(iW.readBits(1)&&(bW>2&&iW.skipBits(1),bW>6&&iW.skipBits(1),iW.readBits(1))){const WW=iW.readBits(2)+1<<2;jW=iW.readBits(WW)}return 0===cW||iW.getBitsLeft()<0?LW:{frameSize:PW,asset:{sampleRate:AW,numberOfChannels:bW,sampleCount:Math.round(wW*AW/cW),channelLayout:jW,pcmResolution:lW}}},tO=WW=>{const iW=new Uint8Array(20),OW=CW(iW);OW.setUint32(0,WW.sampleRate),OW.setUint32(4,WW.bitRate),OW.setUint32(8,WW.bitRate),iW[12]=WW.pcmResolution;const mW=WW.core&&!WW.hasExtensions?1:0,EW=new Ai(iW);return EW.seekToByte(13),EW.writeBits(2,Math.max(PO.indexOf(WW.sampleCount),0)),EW.writeBits(5,mW),EW.writeBits(1,WW.core?.lfePresent?1:0),EW.writeBits(6,WW.core?.amode??0),EW.writeBits(14,WW.core?WW.core.frameSize-1:0),EW.writeBits(1,0),EW.writeBits(3,0),EW.writeBits(16,WW.channelLayout),EW.writeBits(1,0),EW.writeBits(1,0),EW.writeBits(1,0),EW.writeBits(5,0),iW},ZO=["avc","hevc","vp9","av1","vp8","prores"],xO=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],lO=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],AO=[...lO,...xO],bO=["webvtt"],jO=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],UO=["ap4x","ap4h","apch","apcn","apcs","apco"],kO=["dtsc","dtsh","dtsl","dtse"],sO=WW=>{const iW=WW.split("."),OW=Number(iW[1]),mW=iW[2],EW=(OW<<5)+Number(mW.slice(0,-1)),NW="H"===mW.slice(-1)?1:0,PW=Number(iW[3]);return[129,EW,(NW<<7)+((8===PW?0:1)<<6)+((12===PW?1:0)<<5)+((iW[4]?Number(iW[4]):0)<<4)+((iW[5]?Number(iW[5][0]):1)<<3)+((iW[5]?Number(iW[5][1]):1)<<2)+(iW[5]?Number(iW[5][2]):0),0]},MO=/^pcm-([usf])(\\d+)(be)?$/,KO=WW=>{if(nW(xO.includes(WW)),"ulaw"===WW)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===WW)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const iW=MO.exec(WW);let OW;nW(iW),OW="u"===iW[1]?"unsigned":"s"===iW[1]?"signed":"float";return{dataType:OW,sampleSize:Number(iW[2])/8,littleEndian:"be"!==iW[3],silentValue:"pcm-u8"===WW?128:0}},SO=WW=>WW.startsWith("avc1")||WW.startsWith("avc3")?"avc":WW.startsWith("hev1")||WW.startsWith("hvc1")?"hevc":"vp8"===WW?"vp8":WW.startsWith("vp09")?"vp9":WW.startsWith("av01")?"av1":UO.includes(WW)?"prores":"mp3"===WW||"mp4a.69"===WW||"mp4a.6B"===WW||"mp4a.6b"===WW||"mp4a.40.34"===WW?"mp3":WW.startsWith("mp4a.40.")||"mp4a.67"===WW?"aac":"opus"===WW||"Opus"===WW?"opus":"vorbis"===WW?"vorbis":"flac"===WW?"flac":"ac-3"===WW||"ac3"===WW?"ac3":"ec-3"===WW||"eac3"===WW?"eac3":kO.includes(WW)?"dts":"ulaw"===WW?"ulaw":"alaw"===WW?"alaw":MO.test(WW)?WW:"webvtt"===WW?"webvtt":null,YO=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...UO],yO=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,TO=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,JO=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,hO=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,HO=(WW,iW)=>{if(!WW)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof WW)throw new TypeError("Video chunk metadata must be an object.");if(!WW.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof WW.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof WW.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!YO.some((iW=>WW.decoderConfig.codec.startsWith(iW))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(WW.decoderConfig.codedWidth)||WW.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(WW.decoderConfig.codedHeight)||WW.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==WW.decoderConfig.displayAspectWidth&&(!Number.isInteger(WW.decoderConfig.displayAspectWidth)||WW.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==WW.decoderConfig.displayAspectHeight&&(!Number.isInteger(WW.decoderConfig.displayAspectHeight)||WW.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==WW.decoderConfig.displayAspectWidth!==(void 0!==WW.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==WW.decoderConfig.description&&!aW(WW.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==WW.decoderConfig.colorSpace){const{colorSpace:iW}=WW.decoderConfig;if("object"!==typeof iW)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const OW=Object.keys(qW);if(null!=iW.primaries&&!OW.includes(iW.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${OW.join(", ")}.`);const mW=Object.keys(RW);if(null!=iW.transfer&&!mW.includes(iW.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${mW.join(", ")}.`);const EW=Object.keys(GW);if(null!=iW.matrix&&!EW.includes(iW.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${EW.join(", ")}.`);if(null!=iW.fullRange&&"boolean"!==typeof iW.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(WW.decoderConfig.codec.startsWith("avc1")||WW.decoderConfig.codec.startsWith("avc3")){if(!yO.test(WW.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(WW.decoderConfig.codec.startsWith("hev1")||WW.decoderConfig.codec.startsWith("hvc1")){if(!TO.test(WW.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(WW.decoderConfig.codec.startsWith("vp8")){if("vp8"!==WW.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(WW.decoderConfig.codec.startsWith("vp09")){if(!JO.test(WW.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(WW.decoderConfig.codec.startsWith("av01")){if(!hO.test(WW.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(UO.some((iW=>WW.decoderConfig.codec.startsWith(iW)))&&!UO.some((iW=>WW.decoderConfig.codec===iW)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${UO.join(", ")}.`);if(null!==iW&&SO(WW.decoderConfig.codec)!==iW)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${WW.decoderConfig.codec}\' does not fit to the track codec \'${iW}\'.`)},nO=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],uO=(WW,iW)=>{if(!WW)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof WW)throw new TypeError("Audio chunk metadata must be an object.");if(!WW.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof WW.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof WW.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!nO.some((iW=>WW.decoderConfig.codec.startsWith(iW))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(WW.decoderConfig.sampleRate)||WW.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(WW.decoderConfig.numberOfChannels)||WW.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==WW.decoderConfig.description&&!aW(WW.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(WW.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==WW.decoderConfig.codec&&"mp4a.6B"!==WW.decoderConfig.codec&&"mp4a.6b"!==WW.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(WW.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(WW.decoderConfig.codec.startsWith("mp3")||WW.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==WW.decoderConfig.codec&&"mp4a.69"!==WW.decoderConfig.codec&&"mp4a.6B"!==WW.decoderConfig.codec&&"mp4a.6b"!==WW.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(WW.decoderConfig.codec.startsWith("opus")){if("opus"!==WW.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(WW.decoderConfig.description&&WW.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(WW.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==WW.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!WW.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(WW.decoderConfig.codec.startsWith("flac")){if("flac"!==WW.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const iW=42;if(!WW.decoderConfig.description||WW.decoderConfig.description.byteLength<iW)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(WW.decoderConfig.codec.startsWith("ac-3")||WW.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==WW.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(WW.decoderConfig.codec.startsWith("ec-3")||WW.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==WW.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(WW.decoderConfig.codec.startsWith("dts")){if(!kO.includes(WW.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${kO.join(", ")}.`)}else if((WW.decoderConfig.codec.startsWith("pcm")||WW.decoderConfig.codec.startsWith("ulaw")||WW.decoderConfig.codec.startsWith("alaw"))&&!xO.includes(WW.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${xO.join(", ")}).`);if(null!==iW&&SO(WW.decoderConfig.codec)!==iW)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${WW.decoderConfig.codec}\' does not fit to the track codec \'${iW}\'.`)},oO=WW=>{if(!WW)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof WW)throw new TypeError("Subtitle metadata must be an object.");if(!WW.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof WW.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof WW.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var dO;!function(WW){WW[WW.FrameCount=1]="FrameCount",WW[WW.FileSize=2]="FileSize",WW[WW.Toc=4]="Toc"}(dO||(dO={}));class eO{constructor(WW,iW,OW,mW,EW){this.bytes=WW,this.view=iW,this.offset=OW,this.start=mW,this.end=EW,this.bufferPos=mW-OW}static tempFromBytes(WW){return new eO(WW,CW(WW),0,0,WW.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(WW){this.bufferPos=WW-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(WW){this.bufferPos+=WW}slice(WW){let iW=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-WW;if(WW<this.start||WW+iW>this.end)throw new RangeError("Slicing outside of original slice.");return new eO(this.bytes,this.view,this.offset,WW,WW+iW)}}const vO=(WW,iW)=>{if(WW.filePos<WW.start||WW.filePos+iW>WW.end)throw new RangeError(`Tried reading [${WW.filePos}, ${WW.filePos+iW}), but slice is [${WW.start}, ${WW.end}). This is likely an internal error, please report it alongside the file that caused it.`)},gO=(WW,iW)=>{vO(WW,iW);const OW=WW.bytes.subarray(WW.bufferPos,WW.bufferPos+iW);return WW.bufferPos+=iW,OW};var DO,VO;!function(WW){WW[WW.Unsynchronisation=128]="Unsynchronisation",WW[WW.ExtendedHeader=64]="ExtendedHeader",WW[WW.ExperimentalIndicator=32]="ExperimentalIndicator",WW[WW.Footer=16]="Footer"}(DO||(DO={})),function(WW){WW[WW.ISO_8859_1=0]="ISO_8859_1",WW[WW.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",WW[WW.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",WW[WW.UTF_8=3]="UTF_8"}(VO||(VO={}));class pO{constructor(WW){this.mutex=new rW,this.trackTimestampInfo=new WeakMap,this.output=WW}onTrackClose(WW){}validateTimestamp(WW,iW,OW){let mW=this.trackTimestampInfo.get(WW);if(mW){if(OW&&(mW.maxTimestampBeforeLastKeyPacket=mW.maxTimestamp),null!==mW.maxTimestampBeforeLastKeyPacket&&iW<mW.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${iW}s, but largest timestamp is ${mW.maxTimestampBeforeLastKeyPacket}s.`);mW.maxTimestamp=Math.max(mW.maxTimestamp,iW)}else{if(!OW)throw new Error("First packet must be a key packet.");mW={maxTimestamp:iW,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(WW,mW)}}}const fO=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const CO=WW=>{const iW=Math.floor(WW/36e5),OW=Math.floor(WW%36e5/6e4),mW=Math.floor(WW%6e4/1e3),EW=WW%1e3;return iW.toString().padStart(2,"0")+":"+OW.toString().padStart(2,"0")+":"+mW.toString().padStart(2,"0")+"."+EW.toString().padStart(3,"0")};class XO{constructor(WW){this.writer=WW,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(WW){this.helperView.setUint32(0,WW,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(WW){this.helperView.setUint32(0,Math.floor(WW/2**32),!1),this.helperView.setUint32(4,WW,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(WW){for(let iW=0;iW<WW.length;iW++)this.helperView.setUint8(iW%8,WW.charCodeAt(iW)),iW%8===7&&this.writer.write(this.helper);WW.length%8!==0&&this.writer.write(this.helper.subarray(0,WW.length%8))}writeBox(WW){if(this.offsets.set(WW,this.writer.getPos()),WW.contents&&!WW.children)this.writeBoxHeader(WW,WW.size??WW.contents.byteLength+8),this.writer.write(WW.contents);else{const iW=this.writer.getPos();if(this.writeBoxHeader(WW,0),WW.contents&&this.writer.write(WW.contents),WW.children)for(const EW of WW.children)EW&&this.writeBox(EW);const OW=this.writer.getPos(),mW=WW.size??OW-iW;this.writer.seek(iW),this.writeBoxHeader(WW,mW),this.writer.seek(OW)}}writeBoxHeader(WW,iW){this.writeU32(WW.largeSize?1:iW),this.writeAscii(WW.type),WW.largeSize&&this.writeU64(iW)}measureBoxHeader(WW){return 8+(WW.largeSize?8:0)}patchBox(WW){const iW=this.offsets.get(WW);nW(void 0!==iW);const OW=this.writer.getPos();this.writer.seek(iW),this.writeBox(WW),this.writer.seek(OW)}measureBox(WW){if(WW.contents&&!WW.children){return this.measureBoxHeader(WW)+WW.contents.byteLength}{let iW=this.measureBoxHeader(WW);if(WW.contents&&(iW+=WW.contents.byteLength),WW.children)for(const OW of WW.children)OW&&(iW+=this.measureBox(OW));return iW}}}const BO=new Uint8Array(8),qO=new DataView(BO.buffer),RO=WW=>[(WW%256+256)%256],GO=WW=>(qO.setUint16(0,WW,!1),[BO[0],BO[1]]),IO=WW=>(qO.setInt16(0,WW,!1),[BO[0],BO[1]]),aO=WW=>(qO.setUint32(0,WW,!1),[BO[1],BO[2],BO[3]]),rO=WW=>(qO.setUint32(0,WW,!1),[BO[0],BO[1],BO[2],BO[3]]),zO=WW=>(qO.setInt32(0,WW,!1),[BO[0],BO[1],BO[2],BO[3]]),FO=WW=>(qO.setUint32(0,Math.floor(WW/2**32),!1),qO.setUint32(4,WW,!1),[BO[0],BO[1],BO[2],BO[3],BO[4],BO[5],BO[6],BO[7]]),QO=WW=>(qO.setInt32(0,Math.floor(WW/2**32),!1),qO.setUint32(4,WW,!1),[BO[0],BO[1],BO[2],BO[3],BO[4],BO[5],BO[6],BO[7]]),Wm=WW=>(qO.setInt16(0,256*WW,!1),[BO[0],BO[1]]),im=WW=>(qO.setInt32(0,65536*WW,!1),[BO[0],BO[1],BO[2],BO[3]]),Om=WW=>(qO.setInt32(0,2**30*WW,!1),[BO[0],BO[1],BO[2],BO[3]]),mm=(WW,iW)=>{const OW=[];let mW=WW;do{let WW=127&mW;mW>>=7,OW.length>0&&(WW|=128),OW.push(WW),void 0!==iW&&iW--}while(mW>0||iW);return OW.reverse()},Em=function(WW){let iW=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const OW=Array(WW.length).fill(null).map(((iW,OW)=>WW.charCodeAt(OW)));return iW&&OW.push(0),OW},Nm=WW=>[im(WW[0]),im(WW[1]),Om(WW[2]),im(WW[3]),im(WW[4]),Om(WW[5]),im(WW[6]),im(WW[7]),Om(WW[8])],Pm=(WW,iW,OW)=>({type:WW,contents:iW&&new Uint8Array(iW.flat(10)),children:OW}),Lm=(WW,iW,OW,mW,EW)=>Pm(WW,[RO(iW),aO(OW),mW??[]],EW),cm=()=>Pm("styp",[Em("iso5"),rO(0),Em("iso5"),Em("iso6"),Em("mp41"),Em("cmfc"),Em("dash")]),wm=(WW,iW)=>{const OW=Math.max(0,WW.minWrittenTimestamp);let mW=Math.max(0,WW.maxWrittenEndTimestamp-OW);return Number.isFinite(mW)||(mW=0),Lm("sidx",1,0,[rO(1),rO(fE),FO(XE(OW,fE)),FO(0),GO(0),GO(1),rO(2147483647&iW),rO(XE(mW,fE)),rO(0)])},tm=WW=>({type:"mdat",largeSize:WW}),Zm=WW=>Pm("moov",void 0,[xm(WW.creationTime,WW.trackDatas),...WW.trackDatas.map((iW=>lm(iW,WW.creationTime))),WW.isFragmented?iE(WW.trackDatas):null,bE(WW)]),xm=(WW,iW)=>{const OW=Math.max(0,...iW.map((WW=>Math.max(0,XE(BE(WW),fE)+XE(WW.startTimestampOffset??0,fE))))),mW=Math.max(0,...iW.map((WW=>WW.track.id)))+1,EW=!DW(WW)||!DW(OW),NW=EW?FO:rO;return Lm("mvhd",+EW,0,[NW(WW),NW(WW),rO(fE),NW(OW),im(1),Wm(1),Array(10).fill(0),Nm(oW),Array(24).fill(0),rO(mW)])},lm=(WW,iW)=>{const OW=CE(WW),mW=null!==WW.startTimestampOffset&&0!==WW.startTimestampOffset;return Pm("trak",void 0,[Am(WW,iW),mW?bm(WW):null,jm(WW,iW),void 0!==OW.name?Pm("udta",void 0,[Pm("name",[...BW.encode(OW.name)])]):null])},Am=(WW,iW)=>{const OW=Math.max(0,XE(BE(WW),fE)+XE(WW.startTimestampOffset??0,fE)),mW=!DW(iW)||!DW(OW),EW=mW?FO:rO;let NW;if("video"===WW.type&&WW.track.metadata.transformationMatrix)NW=WW.track.metadata.transformationMatrix;else if("video"===WW.type){const{rotation:iW,flip:OW}=WW.track.metadata;NW=((WW,iW,OW)=>{const[mW,EW,,NW,PW]=WW,LW=Math.abs(mW)*iW+Math.abs(NW)*OW,cW=Math.abs(EW)*iW+Math.abs(PW)*OW;return vW(vW(eW(-iW/2,-OW/2),WW),eW(LW/2,cW/2))})(vW(dW(iW??0),[OW?-1:1,0,0,0,1,0,0,0,1]),WW.info.width,WW.info.height)}else NW=oW;let PW=2;!1!==WW.track.metadata.disposition?.default&&(PW|=1);const LW="video"===WW.type?0:"audio"===WW.type?1:"subtitle"===WW.type?2:FW(WW);return Lm("tkhd",+mW,PW,[EW(iW),EW(iW),rO(WW.track.id),rO(0),EW(OW),Array(8).fill(0),GO(0),GO(LW),Wm("audio"===WW.type?1:0),GO(0),Nm(NW),im("video"===WW.type?WW.info.width:0),im("video"===WW.type?WW.info.height:0)])},bm=WW=>{const iW=WW.startTimestampOffset;if(nW(null!==iW),iW>0){const OW=XE(iW,fE),mW=XE(BE(WW),fE),EW=!DW(OW)||!DW(mW),NW=EW?FO:rO,PW=EW?QO:zO;return Pm("edts",void 0,[Lm("elst",EW?1:0,0,[rO(2),NW(OW),PW(-1),im(1),NW(mW),PW(0),im(1)])])}{const mW=XE(-iW,WW.timescale),EW=Math.max(0,XE(BE(WW),fE)+XE(iW,fE)),NW=!((OW=mW)>=-(2**31)&&OW<2**31)||!DW(EW),PW=NW?FO:rO,LW=NW?QO:zO;return Pm("edts",void 0,[Lm("elst",NW?1:0,0,[rO(1),PW(EW),LW(mW),im(1)])])}var OW},jm=(WW,iW)=>Pm("mdia",void 0,[Um(WW,iW),Mm(!0,km[WW.type],sm[WW.type]),Km(WW)]),Um=(WW,iW)=>{const OW=XE(BE(WW),WW.timescale),mW=!DW(iW)||!DW(OW),EW=mW?FO:rO;return Lm("mdhd",+mW,0,[EW(iW),EW(iW),rO(WW.timescale),EW(OW),GO(nE(WW.track.metadata.languageCode??Wi)),GO(0)])},km={video:"vide",audio:"soun",subtitle:"text"},sm={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Mm=function(WW,iW,OW){let mW=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return Lm("hdlr",0,0,[WW?Em("mhlr"):rO(0),Em(iW),Em(mW),rO(0),rO(0),Em(OW,!0)])},Km=WW=>Pm("minf",void 0,[Sm[WW.type](),Ym(),Jm(WW)]),Sm={video:()=>Lm("vmhd",0,1,[GO(0),GO(0),GO(0),GO(0)]),audio:()=>Lm("smhd",0,0,[GO(0),GO(0)]),subtitle:()=>Lm("nmhd",0,0)},Ym=()=>Pm("dinf",void 0,[ym()]),ym=()=>Lm("dref",0,0,[rO(1)],[Tm()]),Tm=()=>Lm("url ",0,1),Jm=WW=>{const iW=WW.compositionTimeOffsetTable.length>1||WW.compositionTimeOffsetTable.some((WW=>0!==WW.sampleCompositionTimeOffset));return Pm("stbl",void 0,[hm(WW),Im(WW),iW?Qm(WW):null,iW?WE(WW):null,rm(WW),zm(WW),Fm(WW),am(WW)])},hm=WW=>{let iW;if("video"===WW.type)iW=Hm(YE(WW.track.source._codec,WW.info.decoderConfig.codec),WW);else if("audio"===WW.type){const OW=TE(WW.track.source._codec,WW.info.decoderConfig.codec,WW.muxer.isQuickTime);nW(OW),iW=em(OW,WW)}else"subtitle"===WW.type&&(iW=Gm(hE[WW.track.source._codec],WW));return nW(iW),Lm("stsd",0,0,[rO(1)],[iW])},Hm=(WW,iW)=>Pm(WW,[Array(6).fill(0),GO(1),GO(0),GO(0),Array(12).fill(0),GO(iW.info.width),GO(iW.info.height),rO(4718592),rO(4718592),rO(0),GO(1),RO(18),Em(Ti),Array(13).fill(0),GO(iW.info.hasAlphaChannel?32:24),IO(65535)],[yE[iW.track.source._codec]?.(iW)??null,um(iW),IW(iW.info.decoderConfig.colorSpace)?null:om(iW),nm(iW)]),nm=WW=>0===WW.avgBitrate&&0===WW.maxBitrate?null:Pm("btrt",[rO(0),rO(WW.maxBitrate),rO(WW.avgBitrate)]),um=WW=>WW.info.pixelAspectRatio.num===WW.info.pixelAspectRatio.den?null:Pm("pasp",[rO(WW.info.pixelAspectRatio.num),rO(WW.info.pixelAspectRatio.den)]),om=WW=>{const iW=WW.info.decoderConfig.colorSpace;return Pm("colr",[Em(WW.muxer.isQuickTime?"nclc":"nclx"),GO(null!=iW?.primaries?qW[iW.primaries]:2),GO(null!=iW?.transfer?RW[iW.transfer]:2),GO(null!=iW?.matrix?GW[iW.matrix]:2),WW.muxer.isQuickTime?[]:RO((iW?.fullRange?1:0)<<7)])},dm=WW=>{if(!WW.info.decoderConfig)return null;const iW=WW.info.decoderConfig,OW=iW.codec.split("."),mW=Number(OW[1]),EW=Number(OW[2]),NW=(Number(OW[3])<<4)+((OW[4]?Number(OW[4]):1)<<1)+(OW[8]?Number(OW[8]):Number(iW.colorSpace?.fullRange??0)),PW=OW[5]?Number(OW[5]):iW.colorSpace?.primaries?qW[iW.colorSpace.primaries]:1,LW=OW[6]?Number(OW[6]):iW.colorSpace?.transfer?RW[iW.colorSpace.transfer]:1,cW=OW[7]?Number(OW[7]):iW.colorSpace?.matrix?GW[iW.colorSpace.matrix]:1;return Lm("vpcC",1,0,[RO(mW),RO(EW),RO(NW),RO(PW),RO(LW),RO(cW),GO(0)])},em=(WW,iW)=>{let OW,mW=0,EW=16;const NW=xO.includes(iW.track.source._codec);if(NW){const WW=iW.track.source._codec,{sampleSize:OW}=KO(WW);EW=8*OW,EW>16&&(mW=1)}if(iW.muxer.isQuickTime&&(mW=1),0===mW)OW=[Array(6).fill(0),GO(1),GO(mW),GO(0),rO(0),GO(iW.info.numberOfChannels),GO(EW),GO(0),GO(0),GO(iW.info.sampleRate<65536?iW.info.sampleRate:0),GO(0)];else{const WW=NW?0:-2;OW=[Array(6).fill(0),GO(1),GO(mW),GO(0),rO(0),GO(iW.info.numberOfChannels),GO(Math.min(EW,16)),IO(WW),GO(0),GO(iW.info.sampleRate<65536?iW.info.sampleRate:0),GO(0),NW?[rO(1),rO(EW/8),rO(iW.info.numberOfChannels*EW/8)]:[rO(0),rO(0),rO(0)],rO(2)]}return Pm(WW,OW,[JE(iW.track.source._codec,iW.muxer.isQuickTime)?.(iW)??null,nm(iW)])},gm=WW=>{let iW;switch(WW.track.source._codec){case"aac":iW=64;break;case"mp3":iW=107;break;case"vorbis":iW=221;break;default:throw new Error(`Unhandled audio codec: ${WW.track.source._codec}`)}let OW=[...RO(iW),...RO(21),...aO(0),...rO(WW.maxBitrate),...rO(WW.avgBitrate)];if(WW.info.decoderConfig.description){const iW=fW(WW.info.decoderConfig.description);OW=[...OW,...RO(5),...mm(iW.byteLength),...iW]}return OW=[...GO(1),...RO(0),...RO(4),...mm(OW.length),...OW,...RO(6),...RO(1),...RO(2)],OW=[...RO(3),...mm(OW.length),...OW],Lm("esds",0,0,OW)},Dm=WW=>Pm("wave",void 0,[Vm(WW),pm(WW),Pm("\\0\\0\\0\\0")]),Vm=WW=>Pm("frma",[Em(TE(WW.track.source._codec,WW.info.decoderConfig.codec,WW.muxer.isQuickTime))]),pm=WW=>{const{littleEndian:iW}=KO(WW.track.source._codec);return Pm("enda",[GO(+iW)])},fm=WW=>{let iW=WW.info.numberOfChannels,OW=3840,mW=WW.info.sampleRate,EW=0,NW=0,PW=new Uint8Array(0);const LW=WW.info.decoderConfig?.description;if(LW){nW(LW.byteLength>=18);const WW=fW(LW),cW=ri(WW);iW=cW.outputChannelCount,OW=cW.preSkip,mW=cW.inputSampleRate,EW=cW.outputGain,NW=cW.channelMappingFamily,cW.channelMappingTable&&(PW=cW.channelMappingTable)}return Pm("dOps",[RO(0),RO(iW),GO(OW),rO(mW),IO(EW),RO(NW),...PW])},Cm=WW=>{const iW=WW.info.decoderConfig?.description;nW(iW);const OW=fW(iW);return Lm("dfLa",0,0,[...OW.subarray(4)])},Xm=WW=>{const{littleEndian:iW,sampleSize:OW}=KO(WW.track.source._codec);return Lm("pcmC",0,0,[RO(+iW),RO(8*OW)])},Bm=WW=>{nW(WW.info.primingPacket);const iW=(WW=>{if(WW.length<7)return null;if(11!==WW[0]||119!==WW[1])return null;const iW=new Ai(WW);iW.skipBits(16),iW.skipBits(16);const OW=iW.readBits(2);if(3===OW)return null;const mW=iW.readBits(6),EW=iW.readBits(5);if(EW>8)return null;const NW=iW.readBits(3),PW=iW.readBits(3);return 0!==(1&PW)&&1!==PW&&iW.skipBits(2),0!==(4&PW)&&iW.skipBits(2),2===PW&&iW.skipBits(2),{fscod:OW,bsid:EW,bsmod:NW,acmod:PW,lfeon:iW.readBits(1),bitRateCode:Math.floor(mW/2)}})(WW.info.primingPacket.data);if(!iW)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const OW=new Uint8Array(3),mW=new Ai(OW);return mW.writeBits(2,iW.fscod),mW.writeBits(5,iW.bsid),mW.writeBits(3,iW.bsmod),mW.writeBits(3,iW.acmod),mW.writeBits(1,iW.lfeon),mW.writeBits(5,iW.bitRateCode),mW.writeBits(5,0),Pm("dac3",[...OW])},qm=WW=>{nW(WW.info.primingPacket);const iW=(WW=>{if(WW.length<6)return null;if(11!==WW[0]||119!==WW[1])return null;const iW=new Ai(WW);iW.skipBits(16);const OW=iW.readBits(2);if(iW.skipBits(3),0!==OW&&2!==OW)return null;const mW=iW.readBits(11),EW=iW.readBits(2);let NW,PW=0;3===EW?(PW=iW.readBits(2),NW=3):NW=iW.readBits(2);const LW=iW.readBits(3),cW=iW.readBits(1),wW=iW.readBits(5);if(wW<11||wW>16)return null;const tW=Fi[NW];let ZW;return ZW=EW<3?Yi[EW]/1e3:yi[PW]/1e3,{dataRate:Math.round((mW+1)*ZW/(16*tW)),substreams:[{fscod:EW,fscod2:PW,bsid:wW,bsmod:0,acmod:LW,lfeon:cW,numDepSub:0,chanLoc:0}]}})(WW.info.primingPacket.data);if(!iW)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let OW=16;for(const PW of iW.substreams)OW+=23,PW.numDepSub>0?OW+=9:OW+=1;const mW=Math.ceil(OW/8),EW=new Uint8Array(mW),NW=new Ai(EW);NW.writeBits(13,iW.dataRate),NW.writeBits(3,iW.substreams.length-1);for(const PW of iW.substreams)NW.writeBits(2,PW.fscod),NW.writeBits(5,PW.bsid),NW.writeBits(1,0),NW.writeBits(1,0),NW.writeBits(3,PW.bsmod),NW.writeBits(3,PW.acmod),NW.writeBits(1,PW.lfeon),NW.writeBits(3,0),NW.writeBits(4,PW.numDepSub),PW.numDepSub>0?NW.writeBits(9,PW.chanLoc):NW.writeBits(1,0);return Pm("dec3",[...EW])},Rm=WW=>{nW(WW.info.primingPacket);const iW=LO(WW.info.primingPacket.data);if(!iW)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return Pm("ddts",[...tO(iW)])},Gm=(WW,iW)=>Pm(WW,[Array(6).fill(0),GO(1)],[HE[iW.track.source._codec](iW),nm(iW)]),Im=WW=>Lm("stts",0,0,[rO(WW.timeToSampleTable.length),WW.timeToSampleTable.map((WW=>[rO(WW.sampleCount),rO(WW.sampleDelta)]))]),am=WW=>{if(WW.samples.every((WW=>"key"===WW.type)))return null;const iW=[...WW.samples.entries()].filter((WW=>{let[,iW]=WW;return"key"===iW.type}));return Lm("stss",0,0,[rO(iW.length),iW.map((WW=>{let[iW]=WW;return rO(iW+1)}))])},rm=WW=>Lm("stsc",0,0,[rO(WW.compactlyCodedChunkTable.length),WW.compactlyCodedChunkTable.map((WW=>[rO(WW.firstChunk),rO(WW.samplesPerChunk),rO(1)]))]),zm=WW=>{if("audio"===WW.type&&WW.info.requiresPcmTransformation){const{sampleSize:iW}=KO(WW.track.source._codec);return Lm("stsz",0,0,[rO(iW*WW.info.numberOfChannels),rO(WW.samples.reduce(((iW,OW)=>iW+XE(OW.duration,WW.timescale)),0))])}return Lm("stsz",0,0,[rO(0),rO(WW.samples.length),WW.samples.map((WW=>rO(WW.size)))])},Fm=WW=>WW.finalizedChunks.length>0&&gW(WW.finalizedChunks).offset>=2**32?Lm("co64",0,0,[rO(WW.finalizedChunks.length),WW.finalizedChunks.map((WW=>FO(WW.offset)))]):Lm("stco",0,0,[rO(WW.finalizedChunks.length),WW.finalizedChunks.map((WW=>rO(WW.offset)))]),Qm=WW=>Lm("ctts",1,0,[rO(WW.compositionTimeOffsetTable.length),WW.compositionTimeOffsetTable.map((WW=>[rO(WW.sampleCount),zO(WW.sampleCompositionTimeOffset)]))]),WE=WW=>{let iW=1/0,OW=-1/0,mW=1/0,EW=-1/0;nW(WW.compositionTimeOffsetTable.length>0),nW(WW.samples.length>0);for(let PW=0;PW<WW.compositionTimeOffsetTable.length;PW++){const mW=WW.compositionTimeOffsetTable[PW];iW=Math.min(iW,mW.sampleCompositionTimeOffset),OW=Math.max(OW,mW.sampleCompositionTimeOffset)}for(let PW=0;PW<WW.samples.length;PW++){const iW=WW.samples[PW];mW=Math.min(mW,XE(iW.timestamp,WW.timescale)),EW=Math.max(EW,XE(iW.timestamp+iW.duration,WW.timescale))}const NW=Math.max(-iW,0);return EW>=2**31?null:Lm("cslg",0,0,[zO(NW),zO(iW),zO(OW),zO(mW),zO(EW)])},iE=WW=>Pm("mvex",void 0,WW.map(OE)),OE=WW=>Lm("trex",0,0,[rO(WW.track.id),rO(1),rO(0),rO(0),rO(0)]),mE=(WW,iW)=>Pm("moof",void 0,[EE(WW),...iW.map(PE)]),EE=WW=>Lm("mfhd",0,0,[rO(WW)]),NE=WW=>{let iW=0,OW=0;const mW="delta"===WW.type;return OW|=+mW,iW|=mW?1:2,iW<<24|OW<<16},PE=WW=>Pm("traf",void 0,[LE(WW),cE(WW),wE(WW)]),LE=WW=>{nW(WW.currentChunk);let iW=0;iW|=8,iW|=16,iW|=32,iW|=131072;const OW=WW.currentChunk.samples[1]??WW.currentChunk.samples[0],mW={duration:OW.timescaleUnitsToNextSample,size:OW.size,flags:NE(OW)};return Lm("tfhd",0,131128,[rO(WW.track.id),rO(mW.duration),rO(mW.size),rO(mW.flags)])},cE=WW=>(nW(WW.currentChunk),Lm("tfdt",1,0,[FO(XE(WW.currentChunk.startTimestamp,WW.timescale))])),wE=WW=>{nW(WW.currentChunk);const iW=WW.currentChunk.samples.map((WW=>WW.timescaleUnitsToNextSample)),OW=WW.currentChunk.samples.map((WW=>WW.size)),mW=WW.currentChunk.samples.map(NE),EW=WW.currentChunk.samples.map((iW=>XE(iW.timestamp-iW.decodeTimestamp,WW.timescale))),NW=new Set(iW),PW=new Set(OW),LW=new Set(mW),cW=new Set(EW),wW=2===LW.size&&mW[0]!==mW[1],tW=NW.size>1,ZW=PW.size>1,xW=!wW&&LW.size>1,lW=cW.size>1||[...cW].some((WW=>0!==WW));let AW=0;return AW|=1,AW|=4*+wW,AW|=256*+tW,AW|=512*+ZW,AW|=1024*+xW,AW|=2048*+lW,Lm("trun",1,AW,[rO(WW.currentChunk.samples.length),rO(WW.currentChunk.offset-WW.currentChunk.moofOffset||0),wW?rO(mW[0]):[],WW.currentChunk.samples.map(((WW,NW)=>[tW?rO(iW[NW]):[],ZW?rO(OW[NW]):[],xW?rO(mW[NW]):[],lW?zO(EW[NW]):[]]))])},tE=WW=>Lm("tfra",1,0,[rO(WW.track.id),rO(63),rO(WW.finalizedChunks.length),WW.finalizedChunks.map((iW=>[FO(XE(iW.samples[0].timestamp,WW.timescale)),FO(iW.moofOffset),rO(iW.trafIndex+1),rO(1),rO(1)]))]),ZE=()=>Lm("mfro",0,0,[rO(0)]),xE=()=>Pm("vtte"),lE=(WW,iW,OW,mW,EW)=>Pm("vttc",void 0,[null!==EW?Pm("vsid",[zO(EW)]):null,null!==OW?Pm("iden",[...BW.encode(OW)]):null,null!==iW?Pm("ctim",[...BW.encode(CO(iW))]):null,null!==mW?Pm("sttg",[...BW.encode(mW)]):null,Pm("payl",[...BW.encode(WW)])]),AE=WW=>Pm("vtta",[...BW.encode(WW)]),bE=WW=>{const iW=[],OW=WW.format._options.metadataFormat??"auto",mW=WW.output._metadataTags;if("mdir"===OW||"auto"===OW&&!WW.isQuickTime){const WW=ME(mW);WW&&iW.push(WW)}else if("mdta"===OW){const WW=KE(mW);WW&&iW.push(WW)}else("udta"===OW||"auto"===OW&&WW.isQuickTime)&&jE(iW,WW.output._metadataTags);return 0===iW.length?null:Pm("udta",void 0,iW)},jE=(WW,iW)=>{for(const{key:OW,value:mW}of Pi(iW))switch(OW){case"title":WW.push(UE("\\xa9nam",mW));break;case"description":WW.push(UE("\\xa9des",mW));break;case"artist":WW.push(UE("\\xa9ART",mW));break;case"album":WW.push(UE("\\xa9alb",mW));break;case"albumArtist":WW.push(UE("albr",mW));break;case"genre":WW.push(UE("\\xa9gen",mW));break;case"date":WW.push(UE("\\xa9day",mW.toISOString().slice(0,10)));break;case"comment":WW.push(UE("\\xa9cmt",mW));break;case"lyrics":WW.push(UE("\\xa9lyr",mW));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:FW(OW)}if(iW.raw)for(const OW in iW.raw){const mW=iW.raw[OW];null==mW||4!==OW.length||WW.some((WW=>WW.type===OW))||("string"===typeof mW?WW.push(UE(OW,mW)):mW instanceof Uint8Array&&WW.push(Pm(OW,Array.from(mW))))}},UE=(WW,iW)=>{const OW=BW.encode(iW);return Pm(WW,[GO(OW.length),GO(nE("und")),Array.from(OW)])},kE={"image/jpeg":13,"image/png":14,"image/bmp":27},sE=(WW,iW)=>{const OW=[];for(const{key:mW,value:EW}of Pi(WW))switch(mW){case"title":OW.push({key:iW?"title":"\\xa9nam",value:SE(EW)});break;case"description":OW.push({key:iW?"description":"\\xa9des",value:SE(EW)});break;case"artist":OW.push({key:iW?"artist":"\\xa9ART",value:SE(EW)});break;case"album":OW.push({key:iW?"album":"\\xa9alb",value:SE(EW)});break;case"albumArtist":OW.push({key:iW?"album_artist":"aART",value:SE(EW)});break;case"comment":OW.push({key:iW?"comment":"\\xa9cmt",value:SE(EW)});break;case"genre":OW.push({key:iW?"genre":"\\xa9gen",value:SE(EW)});break;case"beatsPerMinute":iW||OW.push({key:"tmpo",value:Pm("data",[rO(21),rO(0),GO(EW)])});break;case"lyrics":OW.push({key:iW?"lyrics":"\\xa9lyr",value:SE(EW)});break;case"date":OW.push({key:iW?"date":"\\xa9day",value:SE(EW.toISOString().slice(0,10))});break;case"images":for(const WW of EW)"coverFront"===WW.kind&&OW.push({key:"covr",value:Pm("data",[rO(kE[WW.mimeType]??0),rO(0),Array.from(WW.data)])});break;case"trackNumber":if(iW){const iW=void 0!==WW.tracksTotal?`${EW}/${WW.tracksTotal}`:EW.toString();OW.push({key:"track",value:SE(iW)})}else OW.push({key:"trkn",value:Pm("data",[rO(0),rO(0),GO(0),GO(EW),GO(WW.tracksTotal??0),GO(0)])});break;case"discNumber":iW||OW.push({key:"disc",value:Pm("data",[rO(0),rO(0),GO(0),GO(EW),GO(WW.discsTotal??0),GO(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:FW(mW)}if(WW.raw)for(const mW in WW.raw){const EW=WW.raw[mW];null==EW||!iW&&4!==mW.length||OW.some((WW=>WW.key===mW))||("string"===typeof EW?OW.push({key:mW,value:SE(EW)}):EW instanceof Uint8Array?OW.push({key:mW,value:Pm("data",[rO(0),rO(0),Array.from(EW)])}):EW instanceof xi&&OW.push({key:mW,value:Pm("data",[rO(kE[EW.mimeType]??0),rO(0),Array.from(EW.data)])}))}return OW},ME=WW=>{const iW=sE(WW,!1);return 0===iW.length?null:Lm("meta",0,0,void 0,[Mm(!1,"mdir","","appl"),Pm("ilst",void 0,iW.map((WW=>Pm(WW.key,void 0,[WW.value]))))])},KE=WW=>{const iW=sE(WW,!0);return 0===iW.length?null:Pm("meta",void 0,[Mm(!1,"mdta",""),Lm("keys",0,0,[rO(iW.length)],iW.map((WW=>Pm("mdta",[...BW.encode(WW.key)])))),Pm("ilst",void 0,iW.map(((WW,iW)=>{const OW=String.fromCharCode(...rO(iW+1));return Pm(OW,void 0,[WW.value])})))])},SE=WW=>Pm("data",[rO(1),rO(0),...BW.encode(WW)]),YE=(WW,iW)=>{switch(WW){case"avc":return iW.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return iW}},yE={avc:WW=>WW.info.decoderConfig&&Pm("avcC",[...fW(WW.info.decoderConfig.description)]),hevc:WW=>WW.info.decoderConfig&&Pm("hvcC",[...fW(WW.info.decoderConfig.description)]),vp8:dm,vp9:dm,av1:WW=>Pm("av1C",sO(WW.info.decoderConfig.codec)),prores:null},TE=(WW,iW,OW)=>{switch(WW){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return iW}if(OW)switch(WW){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(WW){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},JE=(WW,iW)=>{switch(WW){case"aac":case"mp3":case"vorbis":return gm;case"opus":return fm;case"flac":return Cm;case"ac3":return Bm;case"eac3":return qm;case"dts":return Rm}if(iW)switch(WW){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return Dm}else switch(WW){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return Xm}return null},hE={webvtt:"wvtt"},HE={webvtt:WW=>Pm("vttC",[...BW.encode(WW.info.config.description)])},nE=WW=>{nW(3===WW.length);let iW=0;for(let OW=0;OW<3;OW++)iW<<=5,iW+=WW.charCodeAt(OW)-96;return iW};class uE{constructor(WW,iW){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,WW._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=WW,WW._setMonotonicity(iW),WW._writerAcquired=!0}start(){nW(!this.started),this.target._start(),this.started=!0}write(WW){nW(this.started&&!this.finalized),this.maybeTrackWrites(WW),this.target._write(WW,this.pos),this.pos+=WW.byteLength}seek(WW){this.pos=WW}getPos(){return this.pos}async flush(){return nW(this.started&&!this.finalized),this.target._flush()}async finalize(){nW(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(WW){if(!this.trackedWrites)return;let iW=this.getPos();if(iW<this.trackedStart){if(iW+WW.byteLength<=this.trackedStart)return;WW=WW.subarray(this.trackedStart-iW),iW=0}const OW=iW+WW.byteLength-this.trackedStart;let mW=this.trackedWrites.byteLength;for(;mW<OW;)mW*=2;if(mW!==this.trackedWrites.byteLength){const WW=new Uint8Array(mW);WW.set(this.trackedWrites,0),this.trackedWrites=WW}this.trackedWrites.set(WW,iW-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,iW+WW.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const WW={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,WW}}OW(6);class oE extends ti{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(WW){!1!==this._monotonicity&&(this._monotonicity=WW)}_dispatchWrite(WW,iW){this.onwrite?.(WW,iW),this._emit("write",{start:WW,end:iW})}slice(WW){if(!Number.isInteger(WW)||WW<0)throw new TypeError("offset must be a non-negative integer.");return new DE(this,WW)}}const dE=65536,eE=2**32;class vE extends oE{constructor(){let WW=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!WW||"object"!==typeof WW)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==WW.onFinalize&&"function"!==typeof WW.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=WW,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(dE,{maxByteLength:eE})}catch{this._buffer=new ArrayBuffer(dE),this._supportsResize=!1}else this._buffer=new ArrayBuffer(dE);this._bytes=new Uint8Array(this._buffer)}_ensureSize(WW){let iW=this._buffer.byteLength;for(;iW<WW;)iW*=2;if(iW!==this._buffer.byteLength){if(iW>eE)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(iW);else{const WW=new ArrayBuffer(iW),OW=new Uint8Array(WW);OW.set(this._bytes,0),this._buffer=WW,this._bytes=OW}}}_start(){}_write(WW,iW){this._ensureSize(iW+WW.byteLength),this._bytes.set(WW,iW),this._maxPos=Math.max(this._maxPos,iW+WW.byteLength),this._dispatchWrite(iW,iW+WW.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(WW,iW){return this._bytes.slice(WW,iW)}}class gE extends oE{_start(){}_write(WW,iW){this._dispatchWrite(iW,iW+WW.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class DE extends oE{constructor(WW,iW){super(),this._baseTarget=WW,this._offset=iW}_start(){}_write(WW,iW){this._baseTarget._write(WW,this._offset+iW),this._dispatchWrite(iW,iW+WW.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(WW){super._setMonotonicity(WW),this._baseTarget._setMonotonicity(WW)}}class VE{constructor(WW,iW){if(this.rootPath=WW,this.getTarget=iW,"string"!==typeof WW)throw new TypeError("rootPath must be a string.");if("function"!==typeof iW)throw new TypeError("getTarget must be a function.")}}const pE=WW=>{const iW=WW.filePos,OW=gO(WW,9),mW=new Ai(OW);if(4095!==mW.readBits(12))return null;mW.skipBits(1);if(0!==mW.readBits(2))return null;const EW=mW.readBits(1),NW=mW.readBits(2)+1,PW=mW.readBits(4);if(15===PW)return null;mW.skipBits(1);const LW=mW.readBits(3);if(0===LW)throw new Error("ADTS frames with channel configuration 0 are not supported.");mW.skipBits(1),mW.skipBits(1),mW.skipBits(1),mW.skipBits(1);const cW=mW.readBits(13);mW.skipBits(11);const wW=mW.readBits(2)+1;if(1!==wW)throw new Error("ADTS frames with more than one AAC frame are not supported.");let tW=null;return 1===EW?WW.filePos-=2:tW=mW.readBits(16),{objectType:NW,samplingFrequencyIndex:PW,channelConfiguration:LW,frameLength:cW,numberOfAacFrames:wW,crcCheck:tW,startPos:iW}},fE=57600,CE=WW=>{const iW={},OW=WW.track;return void 0!==OW.metadata.name&&(iW.name=OW.metadata.name),iW},XE=function(WW,iW){const OW=WW*iW;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(OW):OW},BE=WW=>{if(0===WW.samples.length)return 0;let iW=1/0,OW=-1/0;for(let mW=0;mW<WW.samples.length;mW++){const EW=WW.samples[mW];EW.timestamp<iW&&(iW=EW.timestamp),EW.timestamp+EW.duration>OW&&(OW=EW.timestamp+EW.duration)}return iW===1/0?0:OW-iW};class qE extends pO{constructor(WW,iW){super(WW),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new vE,this.auxWriter=new uE(this.auxTarget,!1),this.auxBoxWriter=new XO(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=zW(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=iW,this.formatOptions={...iW._options},this.isQuickTime=iW instanceof AN,this.isCmaf=iW instanceof lN,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(iW instanceof lN?1/0:1),this.auxWriter.start()}async start(){const WW=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((WW=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:WW instanceof vE)),this.boxWriter=new XO(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof vE&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const WW=await this.output._getInitTarget(),iW=new uE(WW,!0);iW.start(),this.initWriter=iW,this.initBoxWriter=new XO(iW)}const iW=this.output.tracks.some((WW=>WW.isVideoTrack()&&"avc"===WW.source._codec));{const WW=this.initBoxWriter??this.boxWriter;if(nW(WW),this.formatOptions.onFtyp&&WW.writer.startTrackingWrites(),WW.writeBox((WW=>{const iW=512;return WW.isQuickTime?Pm("ftyp",[Em("qt  "),rO(iW),Em("qt  ")]):WW.fragmented?WW.cmaf?Pm("ftyp",[Em("iso5"),rO(iW),Em("iso5"),Em("iso6"),Em("mp41"),Em("cmfc"),Em("dash")]):Pm("ftyp",[Em("iso5"),rO(iW),Em("iso5"),Em("iso6"),Em("mp41")]):Pm("ftyp",[Em("isom"),rO(iW),Em("isom"),WW.holdsAvc?Em("avc1"):[],Em("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:iW,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:iW,start:OW}=WW.writer.stopTrackingWrites();this.formatOptions.onFtyp(iW,OW)}this.ftypSize=WW.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const OW of this.output.tracks)if(void 0===OW.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(nW(this.writer),nW(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=tm(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const OW of this.output.tracks)OW.isVideoTrack()&&OW.metadata.decoderConfig?this.getVideoTrackData(OW,OW.metadata.primingPacket??null,{decoderConfig:OW.metadata.decoderConfig}):OW.isAudioTrack()&&OW.metadata.decoderConfig&&this.getAudioTrackData(OW,OW.metadata.primingPacket??null,{decoderConfig:OW.metadata.decoderConfig});WW()}allTracksAreKnown(){for(const WW of this.output.tracks)if(!WW.source._closed&&!this.trackDatas.some((iW=>iW.track===WW)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const WW=this.trackDatas.map((WW=>{if("video"===WW.type)return WW.info.decoderConfig.codec;if("audio"===WW.type)return WW.info.decoderConfig.codec;return{webvtt:"wvtt"}[WW.track.source._codec]}));return(WW=>{let iW=(WW.hasVideo?"video/":WW.hasAudio?"audio/":"application/")+(WW.isQuickTime?"quicktime":"mp4");WW.codecStrings.length>0&&(iW+=`; codecs="${[...new Set(WW.codecStrings)].join(", ")}"`);return iW})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((WW=>"video"===WW.type)),hasAudio:this.trackDatas.some((WW=>"audio"===WW.type)),codecStrings:WW})}getVideoTrackData(WW,iW,OW){const mW=this.trackDatas.find((iW=>iW.track===WW));if(mW)return mW;HO(OW,WW.source._codec),nW(OW),nW(OW.decoderConfig);const EW={...OW.decoderConfig};nW(void 0!==EW.codedWidth),nW(void 0!==EW.codedHeight);let NW=!1;if("avc"!==WW.source._codec||EW.description){if("hevc"===WW.source._codec&&!EW.description){if(!iW)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const WW=fi(iW.data);if(!WW)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");EW.description=(WW=>{const iW=[];iW.push(WW.configurationVersion),iW.push((3&WW.generalProfileSpace)<<6|(1&WW.generalTierFlag)<<5|31&WW.generalProfileIdc),iW.push(WW.generalProfileCompatibilityFlags>>>24&255),iW.push(WW.generalProfileCompatibilityFlags>>>16&255),iW.push(WW.generalProfileCompatibilityFlags>>>8&255),iW.push(255&WW.generalProfileCompatibilityFlags),iW.push(...WW.generalConstraintIndicatorFlags),iW.push(255&WW.generalLevelIdc),iW.push(240|WW.minSpatialSegmentationIdc>>8&15),iW.push(255&WW.minSpatialSegmentationIdc),iW.push(252|3&WW.parallelismType),iW.push(252|3&WW.chromaFormatIdc),iW.push(248|7&WW.bitDepthLumaMinus8),iW.push(248|7&WW.bitDepthChromaMinus8),iW.push(WW.avgFrameRate>>8&255),iW.push(255&WW.avgFrameRate),iW.push((3&WW.constantFrameRate)<<6|(7&WW.numTemporalLayers)<<3|(1&WW.temporalIdNested)<<2|3&WW.lengthSizeMinusOne),iW.push(255&WW.arrays.length);for(const OW of WW.arrays){iW.push((1&OW.arrayCompleteness)<<7|63&OW.nalUnitType),iW.push(OW.nalUnits.length>>8&255),iW.push(255&OW.nalUnits.length);for(const WW of OW.nalUnits){iW.push(WW.length>>8&255),iW.push(255&WW.length);for(let OW=0;OW<WW.length;OW++)iW.push(WW[OW])}}return new Uint8Array(iW)})(WW),NW=!0}}else{if(!iW)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const WW=ei(iW.data);if(!WW)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");EW.description=(WW=>{const iW=[];iW.push(WW.configurationVersion),iW.push(WW.avcProfileIndication),iW.push(WW.profileCompatibility),iW.push(WW.avcLevelIndication),iW.push(252|3&WW.lengthSizeMinusOne),iW.push(224|31&WW.sequenceParameterSets.length);for(const OW of WW.sequenceParameterSets){const WW=OW.byteLength;iW.push(WW>>8),iW.push(255&WW);for(let mW=0;mW<WW;mW++)iW.push(OW[mW])}iW.push(WW.pictureParameterSets.length);for(const OW of WW.pictureParameterSets){const WW=OW.byteLength;iW.push(WW>>8),iW.push(255&WW);for(let mW=0;mW<WW;mW++)iW.push(OW[mW])}if((100===WW.avcProfileIndication||110===WW.avcProfileIndication||122===WW.avcProfileIndication||144===WW.avcProfileIndication)&&null!==WW.chromaFormat){nW(null!==WW.bitDepthLumaMinus8),nW(null!==WW.bitDepthChromaMinus8),nW(null!==WW.sequenceParameterSetExt),iW.push(252|3&WW.chromaFormat),iW.push(248|7&WW.bitDepthLumaMinus8),iW.push(248|7&WW.bitDepthChromaMinus8),iW.push(WW.sequenceParameterSetExt.length);for(const OW of WW.sequenceParameterSetExt){const WW=OW.byteLength;iW.push(WW>>8),iW.push(255&WW);for(let mW=0;mW<WW;mW++)iW.push(OW[mW])}}return new Uint8Array(iW)})(WW),NW=!0}const PW=((WW,iW)=>{const OW=WW<0?-1:1;let mW=0,EW=1,NW=1,PW=0,LW=WW=Math.abs(WW);for(;;){const WW=Math.floor(LW),cW=WW*NW+mW,wW=WW*PW+EW;if(wW>iW)return{num:OW*NW,den:PW};if(mW=NW,EW=PW,NW=cW,PW=wW,LW=1/(LW-WW),!isFinite(LW))break}return{num:OW*NW,den:PW}})(1/(WW.metadata.frameRate??fE),1e6).den,LW=EW.displayAspectWidth,cW=EW.displayAspectHeight,wW=void 0===LW||void 0===cW?{num:1,den:1}:ci({num:LW*EW.codedHeight,den:cW*EW.codedWidth}),tW="ap4h"===EW.codec||"ap4x"===EW.codec,ZW={muxer:this,track:WW,type:"video",info:{width:EW.codedWidth,height:EW.codedHeight,pixelAspectRatio:wW,decoderConfig:EW,requiresAnnexBTransformation:NW,hasAlphaChannel:tW},timescale:PW,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:WW.source._nominalBitrate??WW.metadata.averageBitrate??0,maxBitrate:WW.source._nominalBitrate??WW.metadata.bitrate??0};return this.trackDatas.push(ZW),this.trackDatas.sort(((WW,iW)=>WW.track.id-iW.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),ZW}getAudioTrackData(WW,iW,OW){const mW=this.trackDatas.find((iW=>iW.track===WW));if(mW)return mW;uO(OW,WW.source._codec),nW(OW),nW(OW.decoderConfig);const EW={...OW.decoderConfig};let NW=!1;if("aac"===WW.source._codec&&!EW.description){if(!iW)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const WW=pE(eO.tempFromBytes(iW.data));if(!WW)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const OW=bi[WW.samplingFrequencyIndex],mW=ji[WW.channelConfiguration];if(void 0===OW||void 0===mW)throw new Error("Invalid ADTS frame header.");EW.description=Ui({objectType:WW.objectType,outputSampleRate:OW,outputNumberOfChannels:mW}),NW=!0}if(!iW){if("ac3"===WW.source._codec||"eac3"===WW.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===WW.source._codec)throw new Error("DTS requires a priming packet.")}const PW={muxer:this,track:WW,type:"audio",info:{numberOfChannels:OW.decoderConfig.numberOfChannels,sampleRate:OW.decoderConfig.sampleRate,decoderConfig:EW,requiresPcmTransformation:!this.isFragmented&&xO.includes(WW.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:NW,primingPacket:iW},timescale:EW.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:WW.source._nominalBitrate??WW.metadata.averageBitrate??0,maxBitrate:WW.source._nominalBitrate??WW.metadata.bitrate??0};return this.trackDatas.push(PW),this.trackDatas.sort(((WW,iW)=>WW.track.id-iW.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),PW}getSubtitleTrackData(WW,iW){const OW=this.trackDatas.find((iW=>iW.track===WW));if(OW)return OW;oO(iW),nW(iW),nW(iW.config);const mW={muxer:this,track:WW,type:"subtitle",info:{config:iW.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:WW.source._nominalBitrate??WW.metadata.averageBitrate??0,maxBitrate:WW.source._nominalBitrate??WW.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(mW),this.trackDatas.sort(((WW,iW)=>WW.track.id-iW.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),mW}async addEncodedVideoPacket(WW,iW,OW){const mW=await this.mutex.acquire();try{const mW=this.getVideoTrackData(WW,iW,OW);let EW=iW.data;if(mW.info.requiresAnnexBTransformation){const WW=[...ni(EW)].map((WW=>EW.subarray(WW.offset,WW.offset+WW.length)));if(0===WW.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");EW=di(WW,4)}this.validateTimestamp(mW.track,iW.timestamp,"key"===iW.type);const NW=this.createSampleForTrack(mW,EW,iW.timestamp,iW.duration,iW.type);await this.registerSample(mW,NW)}finally{mW()}}async addEncodedAudioPacket(WW,iW,OW){const mW=await this.mutex.acquire();try{const mW=this.getAudioTrackData(WW,iW,OW);let EW=iW.data;if(mW.info.requiresAdtsStripping){const WW=pE(eO.tempFromBytes(EW));if(!WW)throw new Error("Expected ADTS frame, didn\'t get one.");const iW=null===WW.crcCheck?7:9;EW=EW.subarray(iW)}this.validateTimestamp(mW.track,iW.timestamp,"key"===iW.type);let NW=iW.timestamp,PW=iW.duration;if(mW.info.requiresPcmTransformation){const WW=KO(mW.info.decoderConfig.codec).sampleSize*mW.info.numberOfChannels;if(PW=EW.byteLength/WW/mW.info.sampleRate,null!==mW.info.expectedNextPcmPacketTimestamp){const WW=NW-mW.info.expectedNextPcmPacketTimestamp;if(WW<.01)NW=mW.info.expectedNextPcmPacketTimestamp;else{const iW=await this.padWithSilence(mW,mW.info.expectedNextPcmPacketTimestamp,WW);NW=mW.info.expectedNextPcmPacketTimestamp+iW}}mW.info.expectedNextPcmPacketTimestamp=NW+PW}const LW=this.createSampleForTrack(mW,EW,NW,PW,iW.type);await this.registerSample(mW,LW)}finally{mW()}}async padWithSilence(WW,iW,OW){const mW=XE(OW,WW.timescale);if(OW=mW/WW.timescale,mW>0){const{sampleSize:EW,silentValue:NW}=KO(WW.info.decoderConfig.codec),PW=mW*WW.info.numberOfChannels,LW=new Uint8Array(EW*PW).fill(NW),cW=this.createSampleForTrack(WW,new Uint8Array(LW.buffer),iW,OW,"key");await this.registerSample(WW,cW)}return OW}async addSubtitleCue(WW,iW,OW){const mW=await this.mutex.acquire();try{const mW=this.getSubtitleTrackData(WW,OW);this.validateTimestamp(mW.track,iW.timestamp,!0),"webvtt"===WW.source._codec&&(mW.cueQueue.push(iW),await this.processWebVTTCues(mW,iW.timestamp))}finally{mW()}}async processWebVTTCues(WW,iW){for(;WW.cueQueue.length>0;){WW.lastCueEndTimestamp??=Math.min(0,WW.cueQueue[0].timestamp);const OW=new Set([]);for(const cW of WW.cueQueue)nW(cW.timestamp<=iW),nW(WW.lastCueEndTimestamp<=cW.timestamp+cW.duration),OW.add(Math.max(cW.timestamp,WW.lastCueEndTimestamp)),OW.add(cW.timestamp+cW.duration);const mW=[...OW].sort(((WW,iW)=>WW-iW)),EW=mW[0],NW=mW[1]??EW;if(iW<NW)break;if(WW.lastCueEndTimestamp<EW){this.auxWriter.seek(0);const iW=xE();this.auxBoxWriter.writeBox(iW);const OW=this.auxTarget._getSlice(0,this.auxWriter.getPos()),mW=this.createSampleForTrack(WW,OW,WW.lastCueEndTimestamp,EW-WW.lastCueEndTimestamp,"key");await this.registerSample(WW,mW),WW.lastCueEndTimestamp=EW}this.auxWriter.seek(0);for(let iW=0;iW<WW.cueQueue.length;iW++){const OW=WW.cueQueue[iW];if(OW.timestamp>=NW)break;fO.lastIndex=0;const mW=fO.test(OW.text),PW=OW.timestamp+OW.duration;let LW=WW.cueToSourceId.get(OW);if(void 0===LW&&NW<PW&&(LW=WW.nextSourceId++,WW.cueToSourceId.set(OW,LW)),OW.notes){const WW=AE(OW.notes);this.auxBoxWriter.writeBox(WW)}const cW=lE(OW.text,mW?EW:null,OW.identifier??null,OW.settings??null,LW??null);this.auxBoxWriter.writeBox(cW),PW===NW&&WW.cueQueue.splice(iW--,1)}const PW=this.auxTarget._getSlice(0,this.auxWriter.getPos()),LW=this.createSampleForTrack(WW,PW,EW,NW-EW,"key");await this.registerSample(WW,LW),WW.lastCueEndTimestamp=NW}}createSampleForTrack(WW,iW,OW,mW,EW){return{timestamp:OW,decodeTimestamp:OW,duration:mW,data:iW,size:iW.byteLength,type:EW,timescaleUnitsToNextSample:XE(mW,WW.timescale)}}processTimestamps(WW,iW){if(0===WW.timestampProcessingQueue.length)return;if("audio"===WW.type&&WW.info.requiresPcmTransformation){nW(!this.isFragmented),WW.startTimestampOffset??=WW.timestampProcessingQueue[0].timestamp;let iW=0;for(let OW=0;OW<WW.timestampProcessingQueue.length;OW++){const mW=WW.timestampProcessingQueue[OW];iW+=XE(mW.duration,WW.timescale)}if(0===WW.timeToSampleTable.length)WW.timeToSampleTable.push({sampleCount:iW,sampleDelta:1});else{gW(WW.timeToSampleTable).sampleCount+=iW}return void(WW.timestampProcessingQueue.length=0)}const OW=WW.timestampProcessingQueue.map((WW=>WW.timestamp)).sort(((WW,iW)=>WW-iW));this.isFragmented?WW.startTimestampOffset??=Math.min(OW[0],0):WW.startTimestampOffset??=OW[0];for(let mW=0;mW<WW.timestampProcessingQueue.length;mW++){const iW=WW.timestampProcessingQueue[mW];iW.decodeTimestamp=OW[mW];const EW=XE(iW.timestamp-iW.decodeTimestamp,WW.timescale),NW=XE(iW.duration,WW.timescale);if(null!==WW.lastTimescaleUnits){nW(WW.lastSample);const OW=XE(iW.decodeTimestamp,WW.timescale,!1),mW=Math.round(OW-WW.lastTimescaleUnits);if(nW(mW>=0),WW.lastTimescaleUnits+=mW,WW.lastSample.timescaleUnitsToNextSample=mW,!this.isFragmented){let iW=gW(WW.timeToSampleTable);if(nW(iW),1===iW.sampleCount){iW.sampleDelta=mW;const OW=WW.timeToSampleTable[WW.timeToSampleTable.length-2];OW&&OW.sampleDelta===mW&&(OW.sampleCount++,WW.timeToSampleTable.pop(),iW=OW)}else iW.sampleDelta!==mW&&(iW.sampleCount--,WW.timeToSampleTable.push(iW={sampleCount:1,sampleDelta:mW}));iW.sampleDelta===NW?iW.sampleCount++:WW.timeToSampleTable.push({sampleCount:1,sampleDelta:NW});const OW=gW(WW.compositionTimeOffsetTable);nW(OW),OW.sampleCompositionTimeOffset===EW?OW.sampleCount++:WW.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:EW})}}else WW.lastTimescaleUnits=XE(iW.decodeTimestamp,WW.timescale,!1),this.isFragmented||(WW.timeToSampleTable.push({sampleCount:1,sampleDelta:NW}),WW.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:EW}));WW.lastSample=iW}if(WW.timestampProcessingQueue.length=0,nW(WW.lastSample),nW(null!==WW.lastTimescaleUnits),void 0!==iW&&0===WW.lastSample.timescaleUnitsToNextSample){nW("key"===iW.type);const OW=XE(iW.timestamp,WW.timescale,!1),mW=Math.round(OW-WW.lastTimescaleUnits);WW.lastSample.timescaleUnitsToNextSample=mW}}async registerSample(WW,iW){"key"===iW.type&&this.processTimestamps(WW,iW),WW.timestampProcessingQueue.push(iW),this.isFragmented?(WW.sampleQueue.push(iW),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(WW,iW):await this.addSampleToTrack(WW,iW)}async addSampleToTrack(WW,iW){if(!this.isFragmented&&(WW.samples.push(iW),"reserve"===this.fastStart)){const iW=WW.track.metadata.maximumPacketCount;if(nW(void 0!==iW),WW.samples.length>iW)throw new Error(`Track #${WW.track.id} has already reached the maximum packet count (${iW}). Either add less packets or increase the maximum packet count.`)}let OW=!1;if(WW.currentChunk){WW.currentChunk.startTimestamp=Math.min(WW.currentChunk.startTimestamp,iW.timestamp);const mW=iW.timestamp-WW.currentChunk.startTimestamp;if(this.isFragmented){const EW=this.trackDatas.every((OW=>{if(WW===OW)return"key"===iW.type;const mW=OW.sampleQueue[0];return mW?"key"===mW.type:OW.closed}));mW>=this.minimumFragmentDuration&&EW&&iW.timestamp>this.maxWrittenTimestamp&&(OW=!0,await this.finalizeFragment())}else OW=mW>=.5}else OW=!0;OW&&(WW.currentChunk&&await this.finalizeCurrentChunk(WW),WW.currentChunk={startTimestamp:iW.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),nW(WW.currentChunk),WW.currentChunk.samples.push(iW),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,iW.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,iW.timestamp+iW.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,iW.timestamp))}async finalizeCurrentChunk(WW){if(nW(!this.isFragmented),nW(this.writer),!WW.currentChunk)return;WW.finalizedChunks.push(WW.currentChunk),this.finalizedChunks.push(WW.currentChunk);let iW=WW.currentChunk.samples.length;if("audio"===WW.type&&WW.info.requiresPcmTransformation&&(iW=WW.currentChunk.samples.reduce(((iW,OW)=>iW+XE(OW.duration,WW.timescale)),0)),0!==WW.compactlyCodedChunkTable.length&&gW(WW.compactlyCodedChunkTable).samplesPerChunk===iW||WW.compactlyCodedChunkTable.push({firstChunk:WW.finalizedChunks.length,samplesPerChunk:iW}),"in-memory"!==this.fastStart){WW.currentChunk.offset=this.writer.getPos();for(const iW of WW.currentChunk.samples)nW(iW.data),this.writer.write(iW.data),iW.data=null;await this.writer.flush()}else WW.currentChunk.offset=0}async interleaveSamples(){let WW=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(nW(this.isFragmented),WW||this.allTracksAreKnown())WW:for(;;){let iW=null,OW=1/0;for(const EW of this.trackDatas){if(!WW&&0===EW.sampleQueue.length&&!EW.closed)break WW;EW.sampleQueue.length>0&&EW.sampleQueue[0].timestamp<OW&&(iW=EW,OW=EW.sampleQueue[0].timestamp)}if(!iW)break;const mW=iW.sampleQueue.shift();await this.addSampleToTrack(iW,mW)}}async finalizeFragment(){let WW=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(nW(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const WW=this.initBoxWriter??this.boxWriter;nW(WW),this.formatOptions.onMoov&&WW.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const iW=Zm(this);if(WW.writeBox(iW),this.formatOptions.onMoov){const{data:iW,start:OW}=WW.writer.stopTrackingWrites();this.formatOptions.onMoov(iW,OW)}if(this.isCmaf){nW(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new XO(this.writer);const WW=this.boxWriter.measureBox(cm()),iW=this.boxWriter.measureBox(wm(this,0));this.segmentHeaderSize=WW+iW,this.writer.seek(this.segmentHeaderSize)}}nW(this.writer),nW(this.boxWriter);const iW=this.trackDatas.filter((WW=>WW.currentChunk));if(0===iW.length)return void(WW&&await this.writer.flush());const OW=this.nextFragmentNumber++,mW=mE(OW,iW),EW=this.writer.getPos(),NW=EW+this.boxWriter.measureBox(mW);let PW=NW+8,LW=1/0;for(let xW=0;xW<iW.length;xW++){const WW=iW[xW];nW(WW.currentChunk),nW(null!==WW.startTimestampOffset),WW.currentChunk.offset=PW,WW.currentChunk.moofOffset=EW,WW.currentChunk.trafIndex=xW,WW.currentChunk.startTimestamp-=WW.startTimestampOffset;for(const iW of WW.currentChunk.samples)PW+=iW.size,iW.timestamp-=WW.startTimestampOffset,iW.decodeTimestamp-=WW.startTimestampOffset;LW=Math.min(LW,WW.currentChunk.startTimestamp)}const cW=PW-NW,wW=cW>=2**32;if(wW)for(const xW of iW)xW.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const tW=mE(OW,iW);if(this.boxWriter.writeBox(tW),this.formatOptions.onMoof){const{data:WW,start:iW}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(WW,iW,LW)}nW(this.writer.getPos()===NW),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const ZW=tm(wW);ZW.size=cW,this.boxWriter.writeBox(ZW),this.writer.seek(NW+(wW?16:8));for(const xW of iW)for(const WW of xW.currentChunk.samples)this.writer.write(WW.data),WW.data=null;if(this.formatOptions.onMdat){const{data:WW,start:iW}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(WW,iW)}for(const xW of iW)xW.finalizedChunks.push(xW.currentChunk),this.finalizedChunks.push(xW.currentChunk),xW.currentChunk=null;WW&&await this.writer.flush()}async registerSampleFastStartReserve(WW,iW){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(WW,iW)):WW.sampleQueue.push(iW)}async createFastStartReserveMdat(){nW(this.writer),nW(this.boxWriter),this.ensureOneEnabledTrack();const WW=Zm(this),iW=this.boxWriter.measureBox(WW)+this.computeSampleTableSizeUpperBound()+4096;nW(null!==this.ftypSize),this.writer.seek(this.ftypSize+iW),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=tm(!0),this.boxWriter.writeBox(this.mdat);for(const OW of this.trackDatas){for(const WW of OW.sampleQueue)await this.addSampleToTrack(OW,WW);OW.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){nW("reserve"===this.fastStart);let WW=0;for(const iW of this.trackDatas){const OW=iW.track.metadata.maximumPacketCount;nW(void 0!==OW),WW+=8*Math.ceil(2/3*OW),WW+=4*OW,WW+=8*Math.ceil(2/3*OW),WW+=12*Math.ceil(2/3*OW),WW+=4*OW,WW+=8*OW}return WW}async onTrackClose(WW){const iW=await this.mutex.acquire(),OW=this.trackDatas.find((iW=>iW.track===WW));OW&&(OW.closed=!0,"subtitle"===OW.type&&"webvtt"===WW.source._codec&&await this.processWebVTTCues(OW,1/0),this.processTimestamps(OW)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),iW()}ensureOneEnabledTrack(){for(const WW of["video","audio","subtitle"]){const iW=this.trackDatas.filter((iW=>iW.type===WW));if(0===iW.length)continue;if(!iW.some((WW=>!1!==WW.track.metadata.disposition?.default))){const WW=iW[0];WW.track.metadata.disposition={...WW.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){nW(this.isFragmented);const WW=await this.mutex.acquire();try{for(const WW of this.trackDatas)"subtitle"===WW.type&&"webvtt"===WW.track.source._codec&&await this.processWebVTTCues(WW,1/0),this.processTimestamps(WW);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{WW()}}async finalize(){const WW=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const OW of this.trackDatas)OW.closed=!0,"subtitle"===OW.type&&"webvtt"===OW.track.source._codec&&await this.processWebVTTCues(OW,1/0),this.processTimestamps(OW);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const OW of this.trackDatas){await this.finalizeCurrentChunk(OW);const WW=BE(OW);if(WW>0){let iW=0;for(const WW of OW.samples)iW+=WW.size;OW.avgBitrate=Math.round(8*iW/WW)}else OW.avgBitrate=0;let iW=0,mW=0,EW=0;for(let NW=0;NW<OW.samples.length;NW++){const WW=OW.samples[NW];for(mW+=WW.size;WW.decodeTimestamp-OW.samples[iW].decodeTimestamp>=1;)mW-=OW.samples[iW].size,iW++;EW=Math.max(EW,mW)}if(OW.maxBitrate=8*EW,null!==OW.startTimestampOffset)for(let NW=0;NW<OW.samples.length;NW++){const WW=OW.samples[NW];WW.timestamp-=OW.startTimestampOffset,WW.decodeTimestamp-=OW.startTimestampOffset}}if(nW(this.writer),nW(this.boxWriter),"in-memory"===this.fastStart){let WW;this.mdat=tm(!1);for(let OW=0;OW<2;OW++){const iW=Zm(this),OW=this.boxWriter.measureBox(iW);WW=this.boxWriter.measureBox(this.mdat);let mW=this.writer.getPos()+OW+WW;for(const EW of this.finalizedChunks){EW.offset=mW;for(const{data:iW}of EW.samples)nW(iW),mW+=iW.byteLength,WW+=iW.byteLength}if(mW<2**32)break;WW>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const iW=Zm(this);if(this.boxWriter.writeBox(iW),this.formatOptions.onMoov){const{data:WW,start:iW}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(WW,iW)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=WW,this.boxWriter.writeBox(this.mdat);for(const OW of this.finalizedChunks)for(const WW of OW.samples)nW(WW.data),this.writer.write(WW.data),WW.data=null;if(this.formatOptions.onMdat){const{data:WW,start:iW}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(WW,iW)}}else if(this.isFragmented)if(this.isCmaf){const WW=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(cm()),this.boxWriter.writeBox(wm(this,WW))}else{const WW=this.writer.getPos(),OW=(iW=this.trackDatas,Pm("mfra",void 0,[...iW.map(tE),ZE()]));this.boxWriter.writeBox(OW);const mW=this.writer.getPos()-WW;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(mW)}else{nW(this.mdat);const WW=this.boxWriter.offsets.get(this.mdat);nW(void 0!==WW);const iW=this.writer.getPos()-WW;if(this.mdat.size=iW,this.mdat.largeSize=iW>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:WW,start:iW}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(WW,iW)}const OW=Zm(this);if("reserve"===this.fastStart){nW(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(OW);const WW=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:WW})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(OW);if(this.formatOptions.onMoov){const{data:WW,start:iW}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(WW,iW)}}var iW;WW()}}var RE;!function(WW){WW[WW.EBML=440786851]="EBML",WW[WW.EBMLVersion=17030]="EBMLVersion",WW[WW.EBMLReadVersion=17143]="EBMLReadVersion",WW[WW.EBMLMaxIDLength=17138]="EBMLMaxIDLength",WW[WW.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",WW[WW.DocType=17026]="DocType",WW[WW.DocTypeVersion=17031]="DocTypeVersion",WW[WW.DocTypeReadVersion=17029]="DocTypeReadVersion",WW[WW.Void=236]="Void",WW[WW.Segment=408125543]="Segment",WW[WW.SeekHead=290298740]="SeekHead",WW[WW.Seek=19899]="Seek",WW[WW.SeekID=21419]="SeekID",WW[WW.SeekPosition=21420]="SeekPosition",WW[WW.Duration=17545]="Duration",WW[WW.Info=357149030]="Info",WW[WW.TimestampScale=2807729]="TimestampScale",WW[WW.MuxingApp=19840]="MuxingApp",WW[WW.WritingApp=22337]="WritingApp",WW[WW.Tracks=374648427]="Tracks",WW[WW.TrackEntry=174]="TrackEntry",WW[WW.TrackNumber=215]="TrackNumber",WW[WW.TrackUID=29637]="TrackUID",WW[WW.TrackType=131]="TrackType",WW[WW.FlagEnabled=185]="FlagEnabled",WW[WW.FlagDefault=136]="FlagDefault",WW[WW.FlagForced=21930]="FlagForced",WW[WW.FlagOriginal=21934]="FlagOriginal",WW[WW.FlagHearingImpaired=21931]="FlagHearingImpaired",WW[WW.FlagVisualImpaired=21932]="FlagVisualImpaired",WW[WW.FlagCommentary=21935]="FlagCommentary",WW[WW.FlagLacing=156]="FlagLacing",WW[WW.Name=21358]="Name",WW[WW.Language=2274716]="Language",WW[WW.LanguageBCP47=2274717]="LanguageBCP47",WW[WW.CodecID=134]="CodecID",WW[WW.CodecPrivate=25506]="CodecPrivate",WW[WW.CodecDelay=22186]="CodecDelay",WW[WW.SeekPreRoll=22203]="SeekPreRoll",WW[WW.DefaultDuration=2352003]="DefaultDuration",WW[WW.Video=224]="Video",WW[WW.PixelWidth=176]="PixelWidth",WW[WW.PixelHeight=186]="PixelHeight",WW[WW.DisplayWidth=21680]="DisplayWidth",WW[WW.DisplayHeight=21690]="DisplayHeight",WW[WW.DisplayUnit=21682]="DisplayUnit",WW[WW.AlphaMode=21440]="AlphaMode",WW[WW.Audio=225]="Audio",WW[WW.SamplingFrequency=181]="SamplingFrequency",WW[WW.Channels=159]="Channels",WW[WW.BitDepth=25188]="BitDepth",WW[WW.SimpleBlock=163]="SimpleBlock",WW[WW.BlockGroup=160]="BlockGroup",WW[WW.Block=161]="Block",WW[WW.BlockAdditions=30113]="BlockAdditions",WW[WW.BlockMore=166]="BlockMore",WW[WW.BlockAdditional=165]="BlockAdditional",WW[WW.BlockAddID=238]="BlockAddID",WW[WW.BlockDuration=155]="BlockDuration",WW[WW.ReferenceBlock=251]="ReferenceBlock",WW[WW.Cluster=524531317]="Cluster",WW[WW.Timestamp=231]="Timestamp",WW[WW.Cues=475249515]="Cues",WW[WW.CuePoint=187]="CuePoint",WW[WW.CueTime=179]="CueTime",WW[WW.CueTrackPositions=183]="CueTrackPositions",WW[WW.CueTrack=247]="CueTrack",WW[WW.CueClusterPosition=241]="CueClusterPosition",WW[WW.Colour=21936]="Colour",WW[WW.MatrixCoefficients=21937]="MatrixCoefficients",WW[WW.TransferCharacteristics=21946]="TransferCharacteristics",WW[WW.Primaries=21947]="Primaries",WW[WW.Range=21945]="Range",WW[WW.Projection=30320]="Projection",WW[WW.ProjectionType=30321]="ProjectionType",WW[WW.ProjectionPoseYaw=30323]="ProjectionPoseYaw",WW[WW.ProjectionPosePitch=30324]="ProjectionPosePitch",WW[WW.ProjectionPoseRoll=30325]="ProjectionPoseRoll",WW[WW.Attachments=423732329]="Attachments",WW[WW.AttachedFile=24999]="AttachedFile",WW[WW.FileDescription=18046]="FileDescription",WW[WW.FileName=18030]="FileName",WW[WW.FileMediaType=18016]="FileMediaType",WW[WW.FileData=18012]="FileData",WW[WW.FileUID=18094]="FileUID",WW[WW.Chapters=272869232]="Chapters",WW[WW.Tags=307544935]="Tags",WW[WW.Tag=29555]="Tag",WW[WW.Targets=25536]="Targets",WW[WW.TargetTypeValue=26826]="TargetTypeValue",WW[WW.TargetType=25546]="TargetType",WW[WW.TagTrackUID=25541]="TagTrackUID",WW[WW.TagEditionUID=25545]="TagEditionUID",WW[WW.TagChapterUID=25540]="TagChapterUID",WW[WW.TagAttachmentUID=25542]="TagAttachmentUID",WW[WW.SimpleTag=26568]="SimpleTag",WW[WW.TagName=17827]="TagName",WW[WW.TagLanguage=17530]="TagLanguage",WW[WW.TagString=17543]="TagString",WW[WW.TagBinary=17541]="TagBinary",WW[WW.ContentEncodings=28032]="ContentEncodings",WW[WW.ContentEncoding=25152]="ContentEncoding",WW[WW.ContentEncodingOrder=20529]="ContentEncodingOrder",WW[WW.ContentEncodingScope=20530]="ContentEncodingScope",WW[WW.ContentCompression=20532]="ContentCompression",WW[WW.ContentCompAlgo=16980]="ContentCompAlgo",WW[WW.ContentCompSettings=16981]="ContentCompSettings",WW[WW.ContentEncryption=20533]="ContentEncryption"}(RE||(RE={}));RE.EBML,RE.Segment,RE.SeekHead,RE.Info,RE.Cluster,RE.Tracks,RE.Cues,RE.Attachments,RE.Chapters,RE.Tags;const GE=new Uint32Array(256);for(let dN=0;dN<256;dN++){let WW=dN<<24;for(let iW=0;iW<8;iW++)WW=2147483648&WW?WW<<1^79764919:WW<<1;GE[dN]=WW>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const IE=new Uint32Array(256);for(let dN=0;dN<256;dN++){let WW=dN<<24;for(let iW=0;iW<8;iW++)WW=2147483648&WW?WW<<1^79764919:WW<<1;IE[dN]=WW>>>0&4294967295}const aE=WW=>{let iW=4294967295;for(let OW=0;OW<WW.length;OW++){const mW=WW[OW];iW=(iW<<8^IE[iW>>>24^mW])>>>0}return iW},rE=new Uint8Array(16);{const WW=CW(rE);rE[0]=0,WW.setUint16(1,45069,!1),WW.setUint16(3,1,!1),rE[5]=193,rE[6]=0,rE[7]=0,WW.setUint16(8,1,!1),WW.setUint16(10,61440,!1),WW.setUint32(12,aE(rE.subarray(0,12)),!1)}const zE=new Uint8Array(0);class FE{constructor(WW,iW,OW,mW){let EW=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,NW=arguments.length>5?arguments[5]:void 0,PW=arguments.length>6?arguments[6]:void 0;if(this.data=WW,this.type=iW,this.timestamp=OW,this.duration=mW,this.sequenceNumber=EW,WW===zE&&void 0===NW)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===NW&&(NW=WW.byteLength),!(WW instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==iW&&"delta"!==iW)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(OW))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(mW)||mW<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(EW))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(NW)||NW<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==PW&&("object"!==typeof PW||!PW))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==PW?.alpha&&!(PW.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==PW?.alphaByteLength&&(!Number.isInteger(PW.alphaByteLength)||PW.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=NW,this.sideData=PW??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===zE}get microsecondTimestamp(){return Math.trunc(mi*this.timestamp)}get microsecondDuration(){return Math.trunc(mi*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let WW=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:WW,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(WW,iW){if(!(WW instanceof EncodedVideoChunk||WW instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const OW=new Uint8Array(WW.byteLength);return WW.copyTo(OW),new FE(OW,WW.type,WW.timestamp/1e6,(WW.duration??0)/1e6,void 0,void 0,iW)}clone(WW){if(void 0!==WW&&("object"!==typeof WW||null===WW))throw new TypeError("options, when provided, must be an object.");if(void 0!==WW?.data&&!(WW.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==WW?.type&&"key"!==WW.type&&"delta"!==WW.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==WW?.timestamp&&!Number.isFinite(WW.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==WW?.duration&&!Number.isFinite(WW.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==WW?.sequenceNumber&&!Number.isFinite(WW.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==WW?.sideData&&("object"!==typeof WW.sideData||null===WW.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new FE(WW?.data??this.data,WW?.type??this.type,WW?.timestamp??this.timestamp,WW?.duration??this.duration,WW?.sequenceNumber??this.sequenceNumber,this.byteLength,WW?.sideData??this.sideData)}}var QE;!function(WW){WW[WW.PCM=1]="PCM",WW[WW.IEEE_FLOAT=3]="IEEE_FLOAT",WW[WW.ALAW=6]="ALAW",WW[WW.MULAW=7]="MULAW",WW[WW.EXTENSIBLE=65534]="EXTENSIBLE"}(QE||(QE={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let WN=-1/0,iN=-1/0,ON=null;"undefined"!==typeof FinalizationRegistry&&(ON=new FinalizationRegistry((WW=>{const iW=performance.now();"video"===WW.type?(iW-WN>=1e3&&(Si._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),WN=iW),"undefined"!==typeof VideoFrame&&WW.data instanceof VideoFrame&&WW.data.close()):(iW-iN>=1e3&&(Si._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),iN=iW),"undefined"!==typeof AudioData&&WW.data instanceof AudioData&&WW.data.close())})));const mN=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(mN);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class EN{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(WW){}close(){if(this._closingPromise)return;const WW=this._connectedTrack;if(!WW)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===WW.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==WW.output.state&&"finalized"!==WW.output.state&&WW.output._muxer.onTrackClose(WW)})()}async _flushOrWaitForOngoingClose(WW){return this._closingPromise??=(async()=>{await this._flushAndClose(WW),this._closed=!0})()}}class NN extends EN{constructor(WW){if(super(),!ZO.includes(WW))throw new TypeError(`Invalid video codec \'${WW}\'. Must be one of: ${ZO.join(", ")}.`);this._codec=WW}}const PN=(WW,iW)=>{if(WW.metadata.hasOnlyKeyPackets&&"key"!==iW.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class LN extends NN{constructor(WW){super(WW)}add(WW,iW){if(!(WW instanceof FE))throw new TypeError("packet must be an EncodedPacket.");if(WW.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==iW&&(!iW||"object"!==typeof iW))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),PN(this._connectedTrack,WW),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,WW,iW)}}class cN extends EN{constructor(WW){if(super(),!AO.includes(WW))throw new TypeError(`Invalid audio codec \'${WW}\'. Must be one of: ${AO.join(", ")}.`);this._codec=WW}}class wN extends EN{constructor(WW){if(super(),!bO.includes(WW))throw new TypeError(`Invalid subtitle codec \'${WW}\'. Must be one of: ${bO.join(", ")}.`);this._codec=WW}}class tN{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((WW=>ZO.includes(WW)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((WW=>AO.includes(WW)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((WW=>bO.includes(WW)))}_codecUnsupportedHint(WW){return""}_isFragmentedIsobmff(){return!1}}class ZN extends tN{constructor(){let WW=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!WW||"object"!==typeof WW)throw new TypeError("options must be an object.");if(void 0!==WW.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(WW.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==WW.minimumFragmentDuration&&(!Li(WW.minimumFragmentDuration)||WW.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==WW.onFtyp&&"function"!==typeof WW.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==WW.onMoov&&"function"!==typeof WW.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==WW.onMdat&&"function"!==typeof WW.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==WW.onMoof&&"function"!==typeof WW.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==WW.metadataFormat&&!["mdir","mdta","udta","auto"].includes(WW.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=WW}getSupportedTrackCounts(){const WW=2**32-1;return{video:{min:0,max:WW},audio:{min:0,max:WW},subtitle:{min:0,max:WW},total:{min:0,max:WW}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(WW){return new qE(WW,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class xN extends ZN{constructor(WW){super(WW)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...ZO,...lO,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...bO]}_codecUnsupportedHint(WW){return(new AN).getSupportedCodecs().includes(WW)?" Switching to MOV will grant support for this codec.":""}}class lN extends ZN{constructor(WW){super(WW)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...ZO,...lO,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...bO]}}class AN extends ZN{constructor(WW){super(WW)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...ZO,...AO]}_codecUnsupportedHint(WW){return(new xN).getSupportedCodecs().includes(WW)?" Switching to MP4 will grant support for this codec.":""}}const bN=["video","audio","subtitle"];class jN{constructor(WW,iW,OW,mW,EW){this.id=WW,this.output=iW,this.type=OW,this.source=mW,this.metadata=EW}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(WW){if(!(WW instanceof jN))throw new TypeError("other must be an OutputTrack.");if(this===WW)return!1;const iW=wi(this.metadata.group),OW=wi(WW.metadata.group);for(const mW of iW){if(this.type!==WW.type&&OW.some((WW=>mW===WW)))return!0;if(OW.some((WW=>mW._pairedGroups.has(WW))))return!0}return!1}}class UN extends jN{constructor(WW,iW,OW,mW){super(WW,iW,"video",OW,mW)}}class kN extends jN{constructor(WW,iW,OW,mW){super(WW,iW,"audio",OW,mW)}}class sN extends jN{constructor(WW,iW,OW,mW){super(WW,iW,"subtitle",OW,mW)}}class MN{constructor(){this._pairedGroups=new Set}pairWith(WW){if(!(WW instanceof MN))throw new TypeError("other must be an OutputTrackGroup.");if(this===WW)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(WW),WW._pairedGroups.add(this)}}const KN=WW=>{if(!WW||"object"!==typeof WW)throw new TypeError("metadata must be an object.");if(void 0!==WW.languageCode&&(iW=WW.languageCode,!Oi.test(iW)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var iW;if(void 0!==WW.name&&"string"!==typeof WW.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==WW.disposition&&(WW=>{if(!WW||"object"!==typeof WW)throw new TypeError("disposition must be an object.");if(void 0!==WW.default&&"boolean"!==typeof WW.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==WW.primary&&"boolean"!==typeof WW.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==WW.forced&&"boolean"!==typeof WW.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==WW.original&&"boolean"!==typeof WW.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==WW.commentary&&"boolean"!==typeof WW.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==WW.hearingImpaired&&"boolean"!==typeof WW.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==WW.visuallyImpaired&&"boolean"!==typeof WW.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(WW.disposition),void 0!==WW.maximumPacketCount&&(!Number.isInteger(WW.maximumPacketCount)||WW.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==WW.bitrate&&(!Number.isFinite(WW.bitrate)||WW.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==WW.averageBitrate&&(!Number.isFinite(WW.averageBitrate)||WW.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==WW.group&&!(WW.group instanceof MN)&&(!Array.isArray(WW.group)||WW.group.some((WW=>!(WW instanceof MN)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class SN extends ti{get target(){const WW="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(WW);const iW=this._getRootTarget();if(Ni(iW))throw new TypeError(WW);return iW}constructor(WW){if(super(),this.state="pending",this.defaultTrackGroup=new MN,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new rW,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!WW||"object"!==typeof WW)throw new TypeError("options must be an object.");if(!(WW.format instanceof tN))throw new TypeError("options.format must be an OutputFormat.");if(!(WW.target instanceof oE||WW.target instanceof VE))throw new TypeError("options.target must be a Target or a PathedTarget.");if(WW.target instanceof oE&&this._rememberTarget(WW.target),void 0!==WW.initTarget&&!(WW.initTarget instanceof oE)&&"function"!==typeof WW.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==WW.onFinalize&&"function"!==typeof WW.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=WW.format,this.HZ=WW.target,this._onFinalize=WW.onFinalize??null,this._initTarget=WW.initTarget??null,this._initTarget instanceof oE&&this._rememberTarget(this._initTarget),this._muxer=WW.format._createMuxer(this)}_getTargetValidated(WW){nW(this.HZ instanceof VE);const iW=this.HZ.getTarget(WW),OW=WW=>{if(!(WW instanceof oE))throw new TypeError("getTarget must return a Target.");return WW};return Ni(iW)?iW.then(OW):OW(iW)}async _getTarget(WW){nW(this.HZ instanceof VE);const iW=await this._getTargetValidated(WW);return this._emit("target",{target:iW,request:WW,isRoot:WW.isRoot}),"canceled"===this.state?await iW._close():this._rememberTarget(iW),iW}_rememberTarget(WW){this._unfinalizedTargets.add(WW),WW.on("finalized",(()=>this._unfinalizedTargets.delete(WW)),{once:!0})}async _getInitTarget(){if(nW(null!==this._initTarget),this._initTarget instanceof oE)return this._initTarget;const WW=await this._initTarget();return"canceled"===this.state?await WW._close():this._rememberTarget(WW),WW}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.HZ instanceof oE)return this._emit("target",{target:this.HZ,request:null,isRoot:!0}),this._rootTarget=this.HZ,this.HZ;const WW={path:this.HZ.rootPath,isRoot:!0,mimeType:this.format.mimeType},iW=this._getTargetValidated(WW),OW=iW=>("canceled"===this.state?iW._close():this._rememberTarget(iW),this._emit("target",{target:iW,request:WW,isRoot:!0}),this._rootTarget=iW,iW);return Ni(iW)?this._rootTargetPromise=iW.then(OW):OW(iW)}_getRootWriter(WW){return this._rootWriterPromise??=(async()=>{const iW=await this._getRootTarget(),OW=new uE(iW,"boolean"===typeof WW?WW:WW(iW));return OW.start(),OW})()}addVideoTrack(WW){let iW=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(WW instanceof NN))throw new TypeError("source must be a VideoSource.");if(KN(iW),void 0!==iW.rotation&&![0,90,180,270].includes(iW.rotation))throw new TypeError(`Invalid video rotation: ${iW.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==iW.flip&&"boolean"!==typeof iW.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==iW.transformationMatrix&&(!Array.isArray(iW.transformationMatrix)||9!==iW.transformationMatrix.length||!iW.transformationMatrix.every((WW=>Number.isFinite(WW)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==iW.frameRate&&(!Number.isFinite(iW.frameRate)||iW.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${iW.frameRate}. Must be a positive number.`);if(void 0!==iW.hasOnlyKeyPackets&&"boolean"!==typeof iW.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==iW.canBeTransparent&&"boolean"!==typeof iW.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==iW.decoderConfig&&HO({decoderConfig:iW.decoderConfig},WW._codec),void 0!==iW.primingPacket){if(!(iW.primingPacket instanceof FE))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===iW.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const OW={...iW};return OW.group??=this.defaultTrackGroup,this._addTrack(new UN(this.tracks.length+1,this,WW,OW))}addAudioTrack(WW){let iW=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(WW instanceof cN))throw new TypeError("source must be an AudioSource.");if(KN(iW),void 0!==iW.decoderConfig&&uO({decoderConfig:iW.decoderConfig},WW._codec),void 0!==iW.primingPacket){if(!(iW.primingPacket instanceof FE))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===iW.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const OW={...iW};return OW.group??=this.defaultTrackGroup,this._addTrack(new kN(this.tracks.length+1,this,WW,OW))}addSubtitleTrack(WW){let iW=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(WW instanceof wN))throw new TypeError("source must be a SubtitleSource.");KN(iW);const OW={...iW};return OW.group??=this.defaultTrackGroup,this._addTrack(new sN(this.tracks.length+1,this,WW,OW))}setMetadataTags(WW){if((WW=>{if(!WW||"object"!==typeof WW)throw new TypeError("tags must be an object.");if(void 0!==WW.title&&"string"!==typeof WW.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==WW.description&&"string"!==typeof WW.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==WW.artist&&"string"!==typeof WW.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==WW.album&&"string"!==typeof WW.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==WW.albumArtist&&"string"!==typeof WW.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==WW.trackNumber&&(!Number.isInteger(WW.trackNumber)||WW.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==WW.tracksTotal&&(!Number.isInteger(WW.tracksTotal)||WW.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==WW.discNumber&&(!Number.isInteger(WW.discNumber)||WW.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==WW.discsTotal&&(!Number.isInteger(WW.discsTotal)||WW.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==WW.genre&&"string"!==typeof WW.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==WW.date&&(!(WW.date instanceof Date)||Number.isNaN(WW.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==WW.beatsPerMinute&&(!Number.isInteger(WW.beatsPerMinute)||WW.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==WW.lyrics&&"string"!==typeof WW.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==WW.images){if(!Array.isArray(WW.images))throw new TypeError("tags.images, when provided, must be an array.");for(const iW of WW.images){if(!iW||"object"!==typeof iW)throw new TypeError("Each image in tags.images must be an object.");if(!(iW.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof iW.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(iW.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==WW.comment&&"string"!==typeof WW.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==WW.raw){if(!WW.raw||"object"!==typeof WW.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const iW of Object.values(WW.raw))if(null!==iW&&"string"!==typeof iW&&(!Array.isArray(iW)||!iW.every((WW=>"string"===typeof WW)))&&!(iW instanceof Uint8Array)&&!(iW instanceof xi)&&!(iW instanceof li)&&!Zi(iW))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(WW),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=WW}_addTrack(WW){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(WW.source._connectedTrack)throw new Error("Source is already used for a track.");const iW=this.format.getSupportedTrackCounts(),OW=this.tracks.reduce(((iW,OW)=>iW+(OW.type===WW.type?1:0)),0),mW=iW[WW.type].max;if(OW===mW)throw new Error(0===mW?`${this.format._name} does not support ${WW.type} tracks.`:`${this.format._name} does not support more than ${mW} ${WW.type} track`+(1===mW?"":"s")+".");const EW=iW.total.max;if(this.tracks.length===EW)throw new Error(`${this.format._name} does not support more than ${EW} tracks`+(1===EW?"":"s")+" in total.");if(WW.isVideoTrack()){const iW=this.format.getSupportedVideoCodecs();if(0===iW.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(WW.source._codec));if(!iW.includes(WW.source._codec))throw new Error(`Codec \'${WW.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${iW.map((WW=>`\'${WW}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(WW.source._codec))}else if(WW.isAudioTrack()){const iW=this.format.getSupportedAudioCodecs();if(0===iW.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(WW.source._codec));if(!iW.includes(WW.source._codec))throw new Error(`Codec \'${WW.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${iW.map((WW=>`\'${WW}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(WW.source._codec))}else if(WW.isSubtitleTrack()){const iW=this.format.getSupportedSubtitleCodecs();if(0===iW.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(WW.source._codec));if(!iW.includes(WW.source._codec))throw new Error(`Codec \'${WW.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${iW.map((WW=>`\'${WW}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(WW.source._codec))}return this.tracks.push(WW),WW.source._connectedTrack=WW,WW}hasEnoughTracks(){const WW=this.format.getSupportedTrackCounts();for(const OW of bN){if(this.tracks.reduce(((WW,iW)=>WW+(iW.type===OW?1:0)),0)<WW[OW].min)return!1}const iW=WW.total.min;return!(this.tracks.length<iW)}async start(){const WW=this.format.getSupportedTrackCounts();for(const OW of bN){const iW=this.tracks.reduce(((WW,iW)=>WW+(iW.type===OW?1:0)),0),mW=WW[OW].min;if(iW<mW)throw new Error(mW===WW[OW].max?`${this.format._name} requires exactly ${mW} ${OW} track${1===mW?"":"s"}.`:`${this.format._name} requires at least ${mW} ${OW} track${1===mW?"":"s"}.`)}const iW=WW.total.min;if(this.tracks.length<iW)throw new Error(iW===WW.total.max?`${this.format._name} requires exactly ${iW} track`+(1===iW?"":"s")+".":`${this.format._name} requires at least ${iW} track`+(1===iW?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(Si._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const WW=this._mutex.acquire();try{await this._muxer.start();const WW=this.tracks.map((WW=>WW.source._start()));await Promise.all(WW)}finally{(await WW)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const WW=await this._mutex.acquire();try{const WW=this.tracks.map((WW=>WW.source._flushOrWaitForOngoingClose(!0)));await Promise.all(WW),await Promise.all([...this._unfinalizedTargets].map((WW=>WW._close()))),this._unfinalizedTargets.clear()}finally{WW()}})():void("finalized"===this.state&&Si._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(Si._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const WW=await this._mutex.acquire();try{const WW=this.tracks.map((WW=>WW.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(WW),await this._muxer.finalize(),this._rootWriterPromise){const WW=await this._rootWriterPromise;WW.finalized||(await WW.flush(),await WW.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(iW){throw this.state="canceled",iW}finally{await Promise.all([...this._unfinalizedTargets].map((WW=>WW._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),WW()}})()}}class YN{constructor(WW,iW,OW,mW,EW){this.frameDurationS=OW,this.onFragment=EW,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=iW,this.lastTimestampUs=iW;const NW=WW=>{this.boxes.push(WW)};this.output=new SN({format:new xN({fastStart:"fragmented",minimumFragmentDuration:mW,onFtyp:NW,onMoov:NW,onMoof:NW,onMdat:WW=>{NW(WW),this.fragmentDone()}}),target:new gE}),this.source=new LN(WW),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(WW,iW){const OW=new Uint8Array(WW.byteLength);WW.copyTo(OW),this.addData(OW,WW.type,WW.timestamp,iW)}addData(WW,iW,OW,mW){const EW=new FE(WW,iW,(OW-this.firstTimestampUs)/1e6,this.frameDurationS),NW=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,OW),this.pending=this.pending.then((()=>(this.addingTimestampUs=OW,this.source.add(EW,NW?{decoderConfig:mW}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var WW;const iW=yN(this.boxes);this.boxes=[],this.onFragment({bytes:iW,endUs:null!==(WW=this.addingTimestampUs)&&void 0!==WW?WW:this.lastTimestampUs+1e6*this.frameDurationS})}}function yN(WW){const iW=new Uint8Array(WW.reduce(((WW,iW)=>WW+iW.byteLength),0));let OW=0;for(const mW of WW)iW.set(mW,OW),OW+=mW.byteLength;return iW}class TN{constructor(WW,iW,OW,mW){this.plan=WW,this.emit=OW,this.onSlotsLow=mW,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=iW}get partCount(){return this.nextIndex}addFragment(WW){let{bytes:iW,endUs:OW}=WW;this.pendingBytes>0&&this.pendingBytes+iW.byteLength>this.plan.maxBytes&&this.emitPending();let mW=0;for(;iW.byteLength-mW>this.plan.maxBytes-this.pendingBytes;){const WW=this.plan.maxBytes-this.pendingBytes;this.hold(iW.subarray(mW,mW+WW)),mW+=WW,this.emitPending()}this.hold(iW.subarray(mW)),this.completeUntilUs=OW,OW-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(WW){this.pending.push(WW),this.pendingBytes+=WW.byteLength}emitPending(){var WW;const iW=yN(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(WW=this.completeUntilUs)&&void 0!==WW?WW:this.partStartUs,this.emit({index:this.nextIndex++,bytes:iW,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class JN{constructor(WW,iW,OW,mW){let EW=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,NW=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=WW,this.partPlan=iW,this.post=OW,this.onSegmentEncoded=mW,this.journal=EW,this.onMuxFailed=NW,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(WW){const iW=HW()-WW;(iW<this.epochOffsetMs||iW-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=iW)}recordingMs(WW){return WW/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(WW){const iW=null===this.segment?0:(WW-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||iW>=this.segmentDurationMs))&&(this.pendingCutUs=WW);const OW=this.keyFrameMissed||this.pendingCutUs===WW;return this.cutRequested=!1,this.keyFrameMissed=!1,OW}onChunk(WW,iW,OW){if(null!==iW&&void 0!==iW&&iW.decoderConfig&&(this.decoderConfig=iW.decoderConfig),null!==this.pendingCutUs&&WW.timestamp>=this.pendingCutUs){if("key"!==WW.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(WW.timestamp,OW),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const mW=this.segment;if(null===mW.journalHeader)return mW.mp4.add(WW,this.decoderConfig),WW.byteLength;const EW=new Uint8Array(WW.byteLength);return WW.copyTo(EW),mW.mp4.addData(EW,WW.type,WW.timestamp,this.decoderConfig),mW.chunkTimestampsUs.push(WW.timestamp),mW.unjournaled.push({recordingId:mW.journalHeader.recordingId,segmentId:mW.journalId,index:mW.chunkCount++,timestampUs:WW.timestamp,key:"key"===WW.type,data:EW}),performance.now()-mW.lastJournalMs>=250&&this.journalChunks(mW),WW.byteLength}openSegment(WW,iW){const OW=this.nextJournalId++,mW=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:OW,containerCodec:iW.containerCodec,codec:iW.codec,width:iW.width,height:iW.height,fps:iW.fps,decoderConfig:this.decoderConfig,firstTimestampUs:WW,epochOffsetMs:this.epochOffsetMs}:null,EW=[],NW=new TN(this.partPlan,WW,(NW=>{this.postPart(OW,iW,WW,NW,null===mW?null:EW)}),(()=>{var WW;(null===(WW=this.segment)||void 0===WW?void 0:WW.journalId)===OW&&this.requestCut()})),PW=this.partPlan.keyframeIntervalMs/1e3*.9,LW=new YN(iW.containerCodec,WW,1/iW.fps,PW,(WW=>{NW.addFragment(WW)}));return this.post({type:"videoSegmentOpened",journalId:OW}),{mp4:LW,parts:NW,format:iW,journalId:OW,journalHeader:mW,unjournaled:[],chunkTimestampsUs:EW,chunkCount:0,lastJournalMs:performance.now()}}postPart(WW,iW,OW,mW,EW){const{width:NW,height:PW,codec:LW,fps:cW}=iW,{startMs:wW}=function(WW,iW,OW,mW){const EW=WW/1e3+OW;return{startMs:EW,endMs:EW+iW/1e3+1e3/mW}}(OW,0,this.epochOffsetMs,cW),{completeUntilUs:tW}=mW,ZW=null===tW?wW:this.recordingMs(tW),xW=mW.bytes.buffer,lW=null===EW||null===tW?null:function(WW,iW){let OW=0,mW=WW.length;for(;OW<mW;){const EW=OW+mW>>1;WW[EW]<iW?OW=EW+1:mW=EW}return OW}(EW,tW);this.post({type:"videoPart",journalId:WW,index:mW.index,bytes:xW,meta:{startMs:wW,endMs:ZW,width:NW,height:PW,codec:LW},completeUntilUs:tW,completeUntilIndex:lW},[xW])}journalChunks(WW){const iW=WW.journalHeader;null!==this.journal&&null!==iW&&0!==WW.unjournaled.length&&(iW.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...iW},WW.unjournaled),WW.unjournaled=[],WW.lastJournalMs=performance.now())}closeSegment(WW){const iW=this.segment;this.segment=null,this.pendingCutUs=null,null!==iW&&(WW&&this.onSegmentEncoded(),this.journalChunks(iW),this.finishing=this.finishing.then((async()=>{let WW=null;try{await iW.mp4.finish()}catch(OW){WW=OW}iW.parts.finish(),this.post({type:"videoSegmentClosed",journalId:iW.journalId,parts:iW.parts.partCount}),null!==WW&&(console.error("Failed to finish a session replay video segment.",WW),this.onMuxFailed(WW instanceof Error?WW.message:String(WW)))})).catch((WW=>{console.error("Failed to close a session replay video segment.",WW)})))}whenFinished(){return this.finishing}}function hN(WW,iW){return null!==WW&&iW>=WW}class HN{constructor(WW,iW,OW,mW,EW){let NW=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=WW,this.cssSize=OW,this.post=mW,this.encoderPreference=EW,this.quality=new ZW,this.limiter=void 0,this.segmenter=void 0,this.scaler=new KW,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.capturePaused=!1,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new jW(WW.maxFps),this.captureFps=WW.maxFps,this.segmenter=new JN(WW.segmentDurationMs,iW,mW,(()=>{this.encoderFailures=0}),NW,(WW=>{this.stopVideo(`Muxer failed: ${WW}`)})),this.still=new TW(mW),this.stats=this.emptyStats()}handleFrame(WW,iW,OW){const mW=performance.now();try{this.stats.deliveredFrames++;const EW=WW.timestamp/1e3;if(this.segmenter.noteFrameArrival(EW),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(EW))return void this.stats.droppedForFpsCap++;if(this.still.offer(WW,this.segmenter.recordingMs(WW.timestamp)),null===OW)return void(this.capturePaused||(this.capturePaused=!0,this.flushSegment()));if(this.capturePaused=!1,this.noteBackingSize(iW),this.noteCaptureFps(OW,mW),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(hN(this.rebuildDueMs,mW)||hN(this.fpsRebuildDueMs,mW))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,WW)}finally{WW.close();const iW=performance.now()-mW;this.stats.workerBusyMs+=iW,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,iW),this.maybePostStats(mW)}}resize(WW){0!==WW.width&&0!==WW.height&&(this.cssSize=WW,this.scheduleRebuildIfSizeChanged())}updateHealth(WW,iW){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const OW=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:WW,pingMs:iW});this.backpressureDropsSinceHealth=0,OW&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(WW){return this.hidden=WW,WW?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(WW){this.suspended=!0;const iW=this.operations.then(WW).catch((WW=>{console.error("Session replay encoder operation failed.",WW)})).finally((()=>{this.operations===iW&&(this.suspended=!1)}));return this.operations=iW,iW}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var WW;null===(WW=this.active)||void 0===WW||WW.encoder.close(),this.active=null}async drainAndCloseSegment(){const WW=this.active;null===WW||await async function(WW,iW){let OW;const mW=new Promise((WW=>{OW=setTimeout((()=>{WW(!1)}),iW)}));try{return await Promise.race([WW.then((()=>!0)),mW])}finally{clearTimeout(OW)}}(WW.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(WW,"flush timed out")}encode(WW,iW){const OW=this.segmenter.needsKeyFrame(iW.timestamp)||iW.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;OW&&(this.lastKeyframeUs=iW.timestamp);const mW=this.scaleToEncoder(WW,iW);try{WW.encoder.encode(mW,{keyFrame:OW})}catch(EW){return void(EW instanceof DOMException&&("InvalidStateError"===EW.name||"EncodingError"===EW.name)?this.failEncoder(WW,EW.message):++this.refusedFrames>=30?this.failEncoder(WW,`refused 30 frames in a row: ${String(EW)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",EW))}finally{mW!==iW&&mW.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(WW,iW){let OW=iW;if(!this.scalerFailed)try{OW=this.scaler.scale(iW,WW.size)}catch(mW){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",mW)}return OW.displayWidth===WW.size.width&&OW.displayHeight===WW.size.height||(WW.sentMismatchedFrame=!0),OW}onEncoderOutput(WW,iW,OW){const mW=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(WW,iW,{containerCodec:OW.candidate.containerCodec,codec:OW.candidate.config.codec,width:OW.size.width,height:OW.size.height,fps:OW.fps}),this.stats.workerBusyMs+=performance.now()-mW}noteBackingSize(WW){null!==this.backingSize&&xW(this.backingSize,WW)||(this.backingSize=WW,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(WW,iW){this.captureFps=WW,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=iW+2e3:this.fpsRebuildDueMs=null}targetSize(){var WW;const iW=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(WW,iW,OW){const mW=iW.width*iW.height<WW.width*WW.height?iW:WW;let EW=lW(Math.max(mW.width,64)),NW=lW(Math.max(mW.height,64));if(AW({width:EW,height:NW})>OW){const WW=EW,iW=NW;for(EW=lW(EW*Math.sqrt(16*OW*16/(EW*NW))),NW=lW(EW*iW/WW);AW({width:EW,height:NW})>OW;)EW-=2,NW=lW(EW*iW/WW)}return{width:EW,height:NW}}(this.cssSize,null!==(WW=this.backingSize)&&void 0!==WW?WW:this.cssSize,iW)}scheduleRebuildIfSizeChanged(){null===this.active||xW(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const WW=this.quality.getLevel(),iW=this.encodeFps(),OW=this.targetSize(),mW=function(WW){const iW={width:WW.width,height:WW.height,bitrate:WW.bitrate,framerate:WW.maxFps},OW=[],mW=[WW.preferSoftware?"prefer-software":"prefer-hardware","no-preference"],EW=WW.preferQualityLatency?MW:sW;for(const NW of mW)for(const WW of UW)for(const mW of kW)for(const PW of EW)OW.push({config:{...iW,codec:WW,hardwareAcceleration:NW,bitrateMode:mW,latencyMode:PW,avc:{format:"avc"}},containerCodec:"avc"});return OW.push({config:{...iW,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),OW}({...OW,bitrate:Math.round(bW(this.config,OW,WW.areaScale)*iW/this.config.maxFps),maxFps:iW,...this.encoderPreference});let EW=null,NW=0;for(let wW=this.firstViableCandidate;wW<mW.length&&null===EW;wW++){const WW=await VideoEncoder.isConfigSupported(mW[wW].config).catch((WW=>(console.warn("VideoEncoder.isConfigSupported threw.",mW[wW].config,WW),null)));null!==WW&&void 0!==WW&&WW.supported&&(EW=mW[wW],NW=wW,this.firstViableCandidate=wW)}if(null===EW)return void this.markUnavailable(`No supported encoder config at ${OW.width}x${OW.height}`);const PW=new VideoEncoder({output:(WW,iW)=>{this.onEncoderOutput(WW,iW,LW)},error:WW=>{this.failEncoder(LW,WW.message)}}),LW={encoder:PW,candidates:mW,candidateIndex:NW,candidate:EW,size:OW,fps:iW,sentMismatchedFrame:!1};this.active=LW,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{PW.configure(EW.config)}catch(cW){return void this.failEncoder(LW,cW instanceof Error?cW.message:String(cW))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(WW,iW){console.error("Session replay encoder failed.",WW.candidate.config,iW),this.active===WW&&(this.active=null,"closed"!==WW.encoder.state&&WW.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(WW,iW,OW){var mW;let EW=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const NW=null===(mW=WW[iW])||void 0===mW?void 0:mW.config.hardwareAcceleration;if(!("prefer-hardware"===NW&&OW||"no-preference"!==NW&&EW))return iW+1;for(let PW=iW+1;PW<WW.length;PW++)if(WW[PW].config.hardwareAcceleration!==NW)return PW;return WW.length}(WW.candidates,WW.candidateIndex,WW.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${iW}`))}stopVideo(WW){if(this.unavailable)return;const iW=this.active;this.active=null,null!==iW&&"closed"!==iW.encoder.state&&iW.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(WW)}markUnavailable(WW){console.warn(`Session replay video stopped: ${WW}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:WW})}))}maybePostStats(WW){var iW,OW,mW,EW;const NW=WW-this.statsWindowStartMs;if(NW<5e3)return;const PW=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:NW,qualityLevel:this.quality.getLevelIndex(),codec:null!==(iW=null===PW||void 0===PW?void 0:PW.candidate.config.codec)&&void 0!==iW?iW:null,hardwareAcceleration:null!==(OW=null===PW||void 0===PW?void 0:PW.candidate.config.hardwareAcceleration)&&void 0!==OW?OW:null,encodeWidth:null!==(mW=null===PW||void 0===PW?void 0:PW.size.width)&&void 0!==mW?mW:0,encodeHeight:null!==(EW=null===PW||void 0===PW?void 0:PW.size.height)&&void 0!==EW?EW:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=WW}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let nN=null,uN=0;function oN(WW){let iW=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(WW,{transfer:iW})}self.onmessage=WW=>{const iW=WW.data;switch(iW.type){case"init":nN=new HN(iW.videoConfig,iW.partPlan,iW.cssSize,oN,iW.encoderPreference,iW.journalRecordingId&&wW.supported?{recordingId:iW.journalRecordingId,journal:new wW}:null);break;case"frame":if(null===nN){console.warn("Session replay video worker got a frame before its pipeline started"),iW.image.close();break}!function(WW,iW,OW,mW,EW){if(iW instanceof VideoFrame)return void WW.handleFrame(iW,mW,EW);let NW;try{NW=new VideoFrame(iW,{timestamp:OW})}catch(PW){return 0===uN++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",PW),void(30===uN&&WW.stopVideo(`Bitmap frames keep failing: ${PW instanceof Error?PW.message:String(PW)}`))}finally{iW.close()}uN=0,WW.handleFrame(NW,mW,EW)}(nN,iW.image,iW.timestampUs,iW.xx,iW.captureFps);break;case"resize":nN.resize(iW.cssSize);break;case"health":nN.updateHealth(iW.gameFps,iW.pingMs);break;case"hidden":nN.setHidden(iW.hidden);break;case"flush":nN.flushSegment();break;case"cut":nN.cutAtNextFrame();break;case"gameJoined":nN.gameJoined()}}})();', "Worker", void 0, OW.p + "sessionReplayVideo.worker.36aaf5cc.worker.js")
    }

    function ti(WW) {
      return Math.max(2, 2 * Math.floor(WW / 2))
    }

    function Zi(WW) {
      return Math.ceil(WW.width / 16) * Math.ceil(WW.height / 16)
    }
    class xi {
      constructor(WW) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / WW
      }
      setMaxFps(WW) {
        this.intervalMs = 1e3 / WW
      }
      shouldKeep(WW) {
        return !(WW < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = WW - this.nextDueMs > this.intervalMs ? WW + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class li {
      constructor(WW, iW, OW) {
        this.budgetMsPerSecond = WW, this.minFps = iW, this.smoothedCostMs = OW
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      get paused() {
        return this.affordableFps() < this.minFps
      }
      record(WW) {
        const iW = this.paused ? .5 : .05;
        this.smoothedCostMs += (WW - this.smoothedCostMs) * iW
      }
      maxFps(WW) {
        return this.paused ? .1 : Math.min(WW, this.affordableFps())
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class Ai {
      static isSupported() {
        const WW = globalThis.CanvasCaptureMediaStream;
        return ("undefined" !== typeof CanvasCaptureMediaStreamTrack && "requestFrame" in CanvasCaptureMediaStreamTrack.prototype || void 0 !== WW && "requestFrame" in WW.prototype) && "function" === typeof HTMLCanvasElement.prototype.captureStream && "requestVideoFrameCallback" in HTMLVideoElement.prototype
      }
      constructor(WW, iW, OW) {
        this.onFrame = iW, this.stream = void 0, this.requester = void 0, this.video = document.createElement("video"), this.closed = !1, this.onVideoFrame = () => {
          this.closed || (this.onFrame(this.video), this.video.requestVideoFrameCallback(this.onVideoFrame))
        }, this.stream = WW.captureStream(0);
        const mW = this.stream.getVideoTracks()[0];
        this.requester = "requestFrame" in mW ? mW : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(OW), this.video.requestVideoFrameCallback(this.onVideoFrame)
      }
      request() {
        this.requester.requestFrame()
      }
      close() {
        this.closed = !0;
        for (const WW of this.stream.getTracks()) WW.stop();
        this.video.srcObject = null
      }
    }
    class bi {
      constructor(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = WW, this.grab = mW, this.onUnavailable = EW, this.render = null, this.stream = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.loggedPause = !1, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = OW.msPerSecond, this.frameCostFloorMs = OW.frameCostFloorMs, this.budget = new li(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = iW, this.captureFps = this.budgetedFps(), this.frameLimiter = new xi(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps,
          grabPath: this.grab.path
        }
      }
      start(WW) {
        if (this.stop(), this.render = WW, "stream" === this.grab.path) {
          const iW = new Ai(WW.canvas, (WW => {
            this.onStreamFrame(WW)
          }), (WW => {
            this.stream === iW && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${WW instanceof Error?WW.message:String(WW)}`))
          }));
          this.stream = iW
        }
      }
      stop() {
        var WW;
        this.render = null, this.pendingGrab = null, null === (WW = this.stream) || void 0 === WW || WW.close(), this.stream = null
      }
      setMaxFps(WW) {
        this.wantedFps = WW, this.applyFps()
      }
      onAfterRender() {
        const WW = performance.timeOrigin + performance.now(),
          iW = this.render;
        if (null === iW) return;
        const OW = performance.now();
        if (null !== this.pendingGrab) {
          if (OW - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas grab didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(WW)) return;
        const mW = {
          startMs: OW,
          timestampUs: Math.round(1e3 * WW),
          xx: {
            width: iW.canvas.width,
            height: iW.canvas.height
          },
          syncMs: 0,
          paused: this.isPaused()
        };
        null !== this.stream ? this.requestStreamFrame(this.stream, mW) : "bitmap" === this.grab.path ? this.grabBitmap(iW.canvas, mW) : this.grabVideoFrame(iW.canvas, mW)
      }
      requestStreamFrame(WW, iW) {
        this.pendingGrab = iW;
        try {
          WW.request()
        } catch (OW) {
          return this.pendingGrab = null, void this.grabFailed(OW)
        }
        iW.syncMs = performance.now() - iW.startMs
      }
      grabVideoFrame(WW, iW) {
        let OW;
        try {
          OW = new VideoFrame(WW, {
            timestamp: iW.timestampUs
          })
        } catch (mW) {
          return void this.grabFailed(mW)
        }
        this.deliver(OW, iW), this.recordCost(Math.max(2 * (performance.now() - iW.startMs), this.frameCostFloorMs))
      }
      grabBitmap(WW, iW) {
        const OW = this.grab.cssSize(),
          mW = function(WW, iW, OW) {
            const mW = iW.width * iW.height < WW.width * WW.height ? iW : WW;
            let EW = ti(Math.max(mW.width, 64)),
              NW = ti(Math.max(mW.height, 64));
            if (Zi({
                width: EW,
                height: NW
              }) > OW) {
              const WW = EW,
                iW = NW;
              for (EW = ti(EW * Math.sqrt(16 * OW * 16 / (EW * NW))), NW = ti(EW * iW / WW); Zi({
                  width: EW,
                  height: NW
                }) > OW;) EW -= 2, NW = ti(EW * iW / WW)
            }
            return {
              width: EW,
              height: NW
            }
          }(0 === OW.width ? iW.xx : OW, iW.xx, this.grab.maxMacroblocks);
        this.pendingGrab = iW, createImageBitmap(WW, {
          resizeWidth: mW.width,
          resizeHeight: mW.height,
          resizeQuality: "low"
        }).then((WW => {
          this.pendingGrab === iW ? (this.pendingGrab = null, this.deliverMeasured(WW, iW)) : WW.close()
        }), (WW => {
          this.pendingGrab === iW && (this.pendingGrab = null, this.grabFailed(WW))
        })), iW.syncMs = performance.now() - iW.startMs
      }
      onStreamFrame(WW) {
        const iW = this.pendingGrab;
        if (null === iW) return;
        this.pendingGrab = null;
        const OW = performance.now();
        let mW;
        try {
          mW = new VideoFrame(WW, {
            timestamp: iW.timestampUs
          })
        } catch (EW) {
          return void this.grabFailed(EW)
        }
        iW.syncMs += performance.now() - OW, this.deliverMeasured(mW, iW)
      }
      deliverMeasured(WW, iW) {
        const OW = performance.now();
        this.deliver(WW, iW), this.recordCost(Math.max(iW.syncMs + performance.now() - OW, this.frameCostFloorMs))
      }
      deliver(WW, iW) {
        const OW = {
          type: "frame",
          image: WW,
          timestampUs: iW.timestampUs,
          xx: iW.xx,
          captureFps: iW.paused ? null : this.captureFps
        };
        try {
          this.worker.postMessage(OW, [WW])
        } catch (mW) {
          return WW.close(), void this.grabFailed(mW)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(WW) {
        this.budget.record(WW), this.applyFps()
      }
      grabFailed(WW) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", WW);
        !(WW instanceof DOMException && "InvalidStateError" === WW.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${WW instanceof Error?WW.message:String(WW)}`))
      }
      applyFps() {
        const WW = this.budgetedFps();
        WW !== this.captureFps && (this.captureFps = WW, this.frameLimiter.setMaxFps(WW), this.isPaused() && !this.loggedPause && (this.loggedPause = !0, console.warn(`Session replay paused video: ${this.grab.path} grabs cost ${this.budget.averageCostMs.toFixed(1)} ms, over a budget of ${this.budgetMsPerSecond} ms/s at 5 fps.`)))
      }
      isPaused() {
        return this.budgetMsPerSecond > 0 && this.budget.paused
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var ji = OW(1301);
    class Ui {
      constructor(WW) {
        this.events = WW, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const WW = (0, ji.y)().gameRender();
        if (null === WW || WW.canvas === this.canvas) return WW;
        const iW = null !== this.canvas;
        return this.canvas = WW.canvas, this.observe(WW.canvas), iW ? this.events.onCanvasSwapped(WW) : this.events.onFirstCanvas(WW), WW
      }
      stop() {
        var WW, iW;
        null === (WW = this.resizeObserver) || void 0 === WW || WW.disconnect(), null === (iW = this.listeners) || void 0 === iW || iW.abort()
      }
      observe(WW) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: iW
        } = this.listeners;
        WW.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: iW
        }), WW.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: iW
        });
        const OW = WW.getBoundingClientRect();
        this.size = {
          width: Math.round(OW.width),
          height: Math.round(OW.height)
        }, this.resizeObserver = new ResizeObserver((WW => {
          const iW = WW[WW.length - 1].contentRect,
            OW = {
              width: Math.round(iW.width),
              height: Math.round(iW.height)
            };
          0 !== OW.width && 0 !== OW.height && (this.size = OW, this.events.onResized(OW))
        })), this.resizeObserver.observe(WW)
      }
    }
    const ki = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      si = 12e4;
    class Mi extends Error {
      constructor(WW, iW) {
        super(iW), this.reason = WW
      }
    }
    class Ki {
      constructor(WW, iW, OW, mW, EW) {
        this.access = WW, this.uploadToken = iW, this.transport = OW, this.callbacks = mW, this.options = EW, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(WW) {
        return this.segments.has(WW)
      }
      open(WW, iW) {
        this.segments.set(WW, {
          journalId: WW,
          sequence: iW,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(WW, iW) {
        const OW = this.segments.get(WW);
        if (void 0 !== OW) {
          OW.parts.push(iW), OW.bytes += iW.bytes.byteLength, !OW.cut && null === OW.totalParts && OW.bytes > this.options.maxHeldBytes / 2 && (OW.cut = !0, this.callbacks.cut());
          for (const WW of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(WW, "byteCap"), this.downUntilMs = this.options.nowMs() + si
          }
          this.pump()
        }
      }
      close(WW, iW) {
        const OW = this.segments.get(WW);
        void 0 !== OW && (OW.totalParts = iW, this.pump())
      }
      forget(WW) {
        this.segments.delete(WW)
      }
      releaseAll() {
        for (const WW of this.segments.values()) WW.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: WW.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let WW = 0;
        for (const iW of this.segments.values()) WW += iW.bytes;
        return WW
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let iW = this.nextWork(); null !== iW; iW = this.nextWork()) try {
            await this.advance(iW)
          } catch (WW) {
            console.warn(`Session replay part joiner failed on video segment ${iW.sequence}; uploading it straight to storage.`, WW), WW instanceof Mi || (this.downUntilMs = this.options.nowMs() + si), this.handBack(iW, WW instanceof Mi ? WW.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const WW of this.segments.values())
          if (WW.sentParts < WW.parts.length || WW.totalParts === WW.parts.length) return WW;
        return null
      }
      async advance(WW) {
        if (WW.sentParts < WW.parts.length) return this.expectHeld(await this.sendPart(WW, WW.parts[WW.sentParts])), void WW.sentParts++;
        for (let iW = 0; this.owns(WW.journalId); iW++) {
          const OW = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: WW.sequence,
            parts: WW.parts.length
          })));
          if (!this.owns(WW.journalId)) return;
          if ("stored" === OW.outcome && OW.stored.parts === WW.parts.length) return this.segments.delete(WW.journalId), void this.callbacks.stored(WW.journalId, WW.sequence, OW.stored);
          if ("missing" !== OW.outcome || iW >= 2) throw this.failure(OW);
          for (const iW of OW.parts) {
            if (!this.owns(WW.journalId)) return;
            const OW = WW.parts[iW];
            if (void 0 === OW) throw new Mi("missing", `the joiner asked for part ${iW} of ${WW.parts.length}`);
            this.expectHeld(await this.sendPart(WW, OW))
          }
        }
      }
      sendPart(WW, iW) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: WW.sequence,
          index: iW.index,
          meta: {
            ...iW.meta,
            startMs: Math.round(iW.meta.startMs),
            endMs: Math.round(iW.meta.endMs)
          },
          completeUntilUs: iW.completeUntilUs
        }, iW.bytes)))
      }
      expectHeld(WW) {
        if ("buffered" !== WW.outcome) throw this.failure(WW)
      }
      failure(WW) {
        if ("refused" === WW.outcome) {
          this.refused = !0;
          for (const WW of [...this.segments.values()]) this.handBack(WW, "refused");
          return new Mi("refused", `refused: ${WW.reason}`)
        }
        const iW = "stored" === WW.outcome ? "shortStored" : "missing" === WW.outcome ? "missing" : "closed";
        return new Mi(iW, `answered ${WW.outcome}`)
      }
      async request(WW) {
        for (let OW = 1;; OW++) {
          try {
            return await WW()
          } catch (iW) {
            if (OW >= 3) throw iW
          }
          await this.options.wait(1e3 * 2 ** (OW - 1))
        }
      }
      handBack(WW, iW) {
        this.segments.delete(WW.journalId) && (this.stats.handBacks[iW]++, this.callbacks.handBack(WW.journalId, WW.sequence, WW.parts, WW.totalParts))
      }
    }
    const Si = CW.e;
    class Yi {
      constructor(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = WW, this.uploadToken = iW, this.nextTelemetrySequence = OW, this.queuedDomAfter = mW, this.nowMs = EW, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(WW, iW, OW, mW, EW) {
        const NW = this.segment(WW, iW, OW, mW);
        if (void 0 === EW) return void this.request(NW, 0);
        const PW = EW.then((() => {
          this.stopped || this.segments.get(Ti(WW, iW)) !== NW || NW.requested || this.request(NW, 0), this.videoDue === PW && (this.videoDue = null)
        }));
        this.videoDue = PW
      }
      async takeDom(WW) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, WW);
        const iW = this.dom;
        if ((null === iW || void 0 === iW ? void 0 : iW.sequence) !== WW) return;
        this.dom = null;
        const OW = await iW.upload;
        return void 0 !== OW && yi(OW, this.nowMs()) ? OW.upload : void 0
      }
      async get(WW, iW, OW, mW, EW) {
        const NW = this.segment(WW, iW, OW, EW),
          PW = NW.requests.find((WW => mW >= WW.first && mW < WW.end));
        if (void 0 === this.valid(NW, mW) && void 0 !== PW) {
          const WW = await PW.answer.catch((() => null));
          if (null !== WW && "rejected" in WW) return WW
        }
        let LW = this.valid(NW, mW);
        if (void 0 === LW) {
          const WW = await this.request(NW, mW).answer;
          if ("rejected" in WW) return WW;
          LW = WW[0]
        }
        return LW
      }
      takeTelemetry(WW) {
        const iW = this.telemetry;
        if ((null === iW || void 0 === iW ? void 0 : iW.sequence) === WW) return this.telemetry = null, yi(iW.BL, this.nowMs()) ? iW.BL.target : void 0
      }
      peek(WW, iW, OW) {
        const mW = this.segments.get(Ti(WW, iW));
        return void 0 === mW ? void 0 : this.valid(mW, OW)
      }
      expire(WW, iW, OW) {
        const mW = this.segments.get(Ti(WW, iW)),
          EW = null === mW || void 0 === mW ? void 0 : mW.BL.get(OW);
        if (void 0 !== mW && void 0 !== EW)
          for (const [NW, PW] of mW.BL) PW.expiresAtMs <= EW.expiresAtMs && mW.BL.delete(NW)
      }
      stop() {
        this.stopped = !0
      }
      forget(WW, iW) {
        this.segments.delete(Ti(WW, iW))
      }
      segment(WW, iW, OW, mW) {
        const EW = Ti(WW, iW);
        let NW = this.segments.get(EW);
        return void 0 === NW && (NW = {
          kind: WW,
          sequence: iW,
          contentType: OW,
          slots: mW,
          BL: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(EW, NW)), NW
      }
      valid(WW, iW) {
        const OW = WW.BL.get(iW);
        return void 0 !== OW && yi(OW, this.nowMs()) ? OW.target : void 0
      }
      telemetryToAskFor() {
        const WW = this.nextTelemetrySequence(),
          iW = this.telemetry;
        return this.telemetryAsked === WW || null !== iW && iW.sequence === WW && yi(iW.BL, this.nowMs()) ? null : WW
      }
      domToAskFor() {
        var WW;
        const iW = this.queuedDomAfter(this.domTaken);
        return null === iW || iW.sequence === (null === (WW = this.dom) || void 0 === WW ? void 0 : WW.sequence) ? null : iW
      }
      request(WW, iW) {
        const OW = iW < WW.slots.count ? WW.slots.count : iW + 1,
          mW = this.nowMs();
        WW.requested = !0;
        const EW = "video" === WW.kind ? this.telemetryToAskFor() : null;
        null !== EW && (this.telemetryAsked = EW);
        const NW = "video" === WW.kind ? this.domToAskFor() : null,
          PW = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: WW.kind,
            sequence: WW.sequence,
            contentType: WW.contentType,
            parts: {
              first: iW,
              count: OW - iW,
              maxBytes: WW.slots.maxBytes
            },
            ...null === EW ? {} : {
              nextTelemetry: {
                sequence: EW,
                maxBytes: Si
              }
            },
            ...null === NW ? {} : {
              dom: NW
            }
          });
        if (null !== NW) {
          const WW = PW.then((WW => {
            if ("rejected" in WW || void 0 === WW.domUpload) return;
            const {
              expiresInSecs: iW,
              ...OW
            } = WW.domUpload;
            return {
              upload: OW,
              expiresAtMs: mW + 1e3 * iW
            }
          }), (() => {
            var WW;
            (null === (WW = this.dom) || void 0 === WW ? void 0 : WW.sequence) === NW.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: NW.sequence,
            upload: WW
          }
        }
        const LW = PW.then((OW => {
            var NW, PW;
            if ("rejected" in OW) return OW;
            const LW = mW + 1e3 * OW.expiresInSecs;
            OW.targets.forEach(((OW, mW) => {
              WW.BL.set(iW + mW, {
                target: OW,
                expiresAtMs: LW
              })
            }));
            return null !== EW && EW >= this.nextTelemetrySequence() && (null !== (NW = null === (PW = this.telemetry) || void 0 === PW ? void 0 : PW.sequence) && void 0 !== NW ? NW : -1) <= EW && void 0 !== OW.telemetryTarget && (this.telemetry = {
              sequence: EW,
              BL: {
                target: OW.telemetryTarget,
                expiresAtMs: LW
              }
            }), OW.targets
          })),
          cW = {
            first: iW,
            end: OW,
            answer: LW
          };
        WW.requests.push(cW);
        const wW = () => {
          WW.requests.splice(WW.requests.indexOf(cW), 1), null !== EW && this.telemetryAsked === EW && (this.telemetryAsked = null)
        };
        return LW.then(wW, wW), cW
      }
    }

    function yi(WW, iW) {
      return WW.expiresAtMs - 6e4 > iW
    }

    function Ti(WW, iW) {
      return `${WW}:${iW}`
    }
    const Ji = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function Hi(WW) {
      return new Promise((iW => {
        const OW = () => {
            clearTimeout(mW), window.removeEventListener("online", OW), iW()
          },
          mW = setTimeout(OW, WW);
        window.addEventListener("online", OW)
      }))
    }
    const ni = ["video", "dom"],
      ui = "video",
      oi = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      di = "an earlier part of its segment was dropped",
      ei = new Set([403, 408, 409, 429]),
      vi = new Set(["RequestTimeout", "IncompleteBody"]);
    class gi {
      constructor(WW, iW, OW, mW) {
        this.transport = WW, this.uploadToken = iW, this.options = OW, this.callbacks = mW, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new Yi(WW, iW, (() => {
          var WW;
          return null !== (WW = this.nextSequence.get("telemetry")) && void 0 !== WW ? WW : 0
        }), (WW => {
          const iW = this.queue.find((iW => "dom" === iW.kind && iW.sequence > WW));
          return void 0 === iW ? null : {
            sequence: iW.sequence,
            byteLength: iW.bytes.byteLength
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
        return this.queue.map((WW => {
          let {
            kind: iW,
            sequence: OW,
            meta: mW
          } = WW;
          return {
            kind: iW,
            sequence: OW,
            meta: mW
          }
        }))
      }
      openSegment(WW, iW, OW, mW) {
        const EW = this.takeSequence(WW);
        return this.prefetchTargets(WW, EW, iW, OW, mW), EW
      }
      prefetchTargets(WW, iW, OW, mW, EW) {
        this.stopped || this.targets.prefetch(WW, iW, OW, mW, EW)
      }
      peekTarget(WW, iW, OW) {
        return this.targets.peek(WW, iW, OW)
      }
      closeSegment(WW, iW) {
        this.targets.forget(WW, iW), WW === ui && this.brokenSegments.delete(iW)
      }
      enqueue(WW) {
        var iW, OW;
        const mW = null !== (iW = null === (OW = WW.part) || void 0 === OW ? void 0 : OW.sequence) && void 0 !== iW ? iW : null;
        if (this.stopped) return this.callbacks.onDropped(WW, "uploader stopped", mW), null;
        if (null !== mW && WW.kind === ui && this.brokenSegments.has(mW)) return this.callbacks.onDropped(WW, di, mW), null;
        "still" === WW.kind && this.removeQueued(WW.kind);
        const EW = {
            ...WW,
            sequence: null !== mW && void 0 !== mW ? mW : this.takeSequence(WW.kind)
          },
          NW = this.queue.findIndex(((iW, OW) => (OW > 0 || !this.uploadInFlight) && oi[iW.kind] > oi[WW.kind]));
        return this.queue.splice(-1 === NW ? this.queue.length : NW, 0, EW), this.queuedBytes += WW.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(EW) ? EW.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const WW of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= WW.bytes.byteLength, this.callbacks.onDropped(WW, "uploader stopped", WW.sequence)
      }
      takeSequence(WW) {
        var iW;
        const OW = null !== (iW = this.nextSequence.get(WW)) && void 0 !== iW ? iW : 0;
        return this.nextSequence.set(WW, OW + 1), OW
      }
      removeQueued(WW) {
        for (let iW = this.queue.length - 1; iW >= (this.uploadInFlight ? 1 : 0); iW--)
          if (this.queue[iW].kind === WW) {
            const [WW] = this.queue.splice(iW, 1);
            this.queuedBytes -= WW.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const WW of ni)
          for (const iW of [!1, !0])
            for (let OW = this.uploadInFlight ? 1 : 0; OW < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const mW = this.queue[OW];
              if (mW.kind !== WW || !0 === mW.dropLast && !iW) {
                OW++;
                continue
              }
              const [EW] = this.queue.splice(OW, 1);
              this.queuedBytes -= EW.bytes.byteLength, this.callbacks.onDropped(EW, "backlog over cap", EW.sequence), this.segmentBroken(EW)
            }
      }
      segmentBroken(WW) {
        if (void 0 !== WW.part && WW.kind === ui) {
          this.brokenSegments.add(WW.sequence);
          for (let iW = this.queue.length - 1; iW >= (this.uploadInFlight ? 1 : 0); iW--) {
            const OW = this.queue[iW];
            OW.kind === ui && void 0 !== OW.part && OW.sequence === WW.sequence && (this.queue.splice(iW, 1), this.queuedBytes -= OW.bytes.byteLength, this.callbacks.onDropped(OW, di, OW.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const WW = this.queue[0];
            this.uploadInFlight = !0;
            const iW = await this.upload(WW);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= WW.bytes.byteLength, "uploaded" !== iW.type ? (this.callbacks.onDropped(WW, iW.reason, WW.sequence), this.segmentBroken(WW), "refused" !== iW.type || this.stopped || "telemetry" !== WW.kind || (console.warn(`Session replay uploads refused (${iW.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(iW.reason))) : this.callbacks.onUploaded(WW, WW.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(WW) {
        let iW = null,
          OW = 0;
        for (let EW = 1;; EW++) {
          try {
            if (null === iW) {
              const OW = await this.requestTarget(WW);
              if ("rejected" in OW) {
                if (!OW.retryable) return {
                  type: "refused",
                  reason: OW.reason
                };
                throw new Error(`rejected for now: ${OW.reason}`)
              }
              iW = OW
            }
            try {
              "put" === iW.type ? await this.transport.put(iW.url, WW.bytes, WW.contentType, iW.ifNoneMatch) : await this.transport.post(iW.target, WW.bytes, WW.contentType)
            } catch (mW) {
              if (mW instanceof BW.c && null !== mW.status && mW.status < 500 && !ei.has(mW.status) && (null === mW.storageCode || !vi.has(mW.storageCode))) return console.warn(`Session replay ${WW.kind} segment ${WW.sequence} refused by storage:`, mW), {
                type: "dropped",
                reason: mW.message
              };
              throw mW
            }
            return {
              type: "uploaded"
            }
          } catch (mW) {
            const EW = mW instanceof Error ? mW.message : String(mW),
              NW = void 0 === WW.part ? "" : ` part ${WW.part.index}`;
            if (console.warn(`Session replay ${WW.kind} segment ${WW.sequence}${NW} upload failed:`, mW), mW instanceof BW.c && (403 === mW.status && (iW = null, void 0 !== WW.part && this.targets.expire(WW.kind, WW.sequence, WW.part.index)), ++OW >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: EW
            }
          }
          const NW = Math.min(3e4, this.options.baseBackoffMs * 2 ** (EW - 1));
          if (await this.options.wait(NW * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(WW) {
        const {
          part: iW
        } = WW;
        if (void 0 !== iW) {
          const OW = await this.targets.get(WW.kind, WW.sequence, WW.contentType, iW.index, iW.slots);
          return "rejected" in OW ? OW : {
            type: "post",
            target: OW
          }
        }
        const OW = "dom" === WW.kind ? await this.targets.takeDom(WW.sequence) : void 0;
        if (void 0 !== OW) return {
          type: "put",
          url: OW.uploadUrl,
          ifNoneMatch: OW.ifNoneMatch
        };
        const mW = "telemetry" === WW.kind && WW.bytes.byteLength <= Si ? this.targets.takeTelemetry(WW.sequence) : void 0;
        if (void 0 !== mW) return {
          type: "post",
          target: mW
        };
        const EW = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: WW.kind,
          sequence: WW.sequence,
          contentType: WW.contentType,
          byteLength: WW.bytes.byteLength
        });
        return "rejected" in EW ? EW : {
          type: "put",
          url: EW.uploadUrl,
          ifNoneMatch: EW.ifNoneMatch
        }
      }
    }
    class Di {
      constructor(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = WW, this.slots = iW, this.manifest = OW, this.journal = mW, this.cut = EW, this.joiner = NW, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(WW, iW) {
        switch (WW.type) {
          case "videoSegmentOpened": {
            var OW, mW;
            if (null !== (OW = this.joiner) && void 0 !== OW && OW.accepting) {
              var EW;
              const iW = this.uploader.takeSequence("video");
              this.joiner.open(WW.journalId, iW), this.openJournalId = WW.journalId, null === (EW = this.journal) || void 0 === EW || EW.videoQueued(WW.journalId, iW);
              break
            }
            const NW = this.uploader.openSegment("video", "video/mp4", this.slots, iW);
            this.segments.set(WW.journalId, {
              sequence: NW,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = WW.journalId, null === (mW = this.journal) || void 0 === mW || mW.videoQueued(WW.journalId, NW);
            break
          }
          case "videoPart": {
            var NW;
            if (null !== (NW = this.joiner) && void 0 !== NW && NW.owns(WW.journalId)) {
              const {
                index: iW,
                bytes: OW,
                meta: mW,
                completeUntilUs: EW,
                completeUntilIndex: NW
              } = WW;
              this.joiner.addPart(WW.journalId, {
                index: iW,
                bytes: OW,
                meta: mW,
                completeUntilUs: EW,
                completeUntilIndex: NW
              });
              break
            }
            const iW = this.segments.get(WW.journalId);
            void 0 !== iW && this.enqueuePart(WW.journalId, iW.sequence, WW);
            break
          }
          case "videoSegmentClosed": {
            var PW;
            if (null !== (PW = this.joiner) && void 0 !== PW && PW.owns(WW.journalId)) {
              var LW;
              if (this.openJournalId === WW.journalId && (this.openJournalId = null), WW.parts > 0) this.joiner.close(WW.journalId, WW.parts);
              else this.joiner.forget(WW.journalId), null === (LW = this.journal) || void 0 === LW || LW.videoSettled(WW.journalId);
              break
            }
            const iW = this.segments.get(WW.journalId);
            if (void 0 === iW) break;
            iW.totalParts = WW.parts, this.openJournalId === WW.journalId && (this.openJournalId = null), this.maybeDone(WW.journalId, iW);
            break
          }
        }
      }
      joinedStored(WW, iW, OW) {
        this.manifest.setVideoSegment(iW, OW.meta, null), this.storedWhole.set(iW, WW)
      }
      joinedHandedBack(WW, iW, OW, mW) {
        const EW = {
          sequence: iW,
          settledParts: 0,
          totalParts: mW,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(WW, EW), this.uploader.prefetchTargets("video", iW, "video/mp4", this.slots);
        for (const NW of OW) this.enqueuePart(WW, iW, NW)
      }
      enqueuePart(WW, iW, OW) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: OW.bytes,
          meta: {
            type: "video",
            meta: OW.meta,
            journalId: WW,
            index: OW.index,
            completeUntilUs: OW.completeUntilUs,
            completeUntilIndex: OW.completeUntilIndex
          },
          part: {
            sequence: iW,
            index: OW.index,
            slots: this.slots
          }
        })
      }
      landed(WW, iW) {
        if (null !== WW.completeUntilUs && WW.meta.endMs > WW.meta.startMs) {
          var OW, mW;
          const EW = this.segments.get(WW.journalId);
          void 0 !== EW && (EW.landedParts = WW.index + 1), this.manifest.setVideoSegment(iW, WW.meta, WW.index + 1), null === (OW = this.journal) || void 0 === OW || OW.videoPartLanded(WW.journalId, {
            partsLanded: WW.index + 1,
            completeUntilUs: WW.completeUntilUs,
            meta: WW.meta
          }, null !== (mW = WW.completeUntilIndex) && void 0 !== mW ? mW : 0)
        }
        this.settled(WW)
      }
      dropped(WW) {
        this.settled(WW), WW.journalId === this.openJournalId && WW.journalId !== this.cutJournalId && (this.cutJournalId = WW.journalId, this.cut())
      }
      listed(WW, iW) {
        if (null !== iW)
          for (const [mW, EW] of this.segments) EW.sequence === WW && (EW.listedParts = Math.max(EW.listedParts, iW), this.maybeDone(mW, EW));
        else {
          const iW = this.storedWhole.get(WW);
          var OW;
          void 0 !== iW && (this.storedWhole.delete(WW), null === (OW = this.journal) || void 0 === OW || OW.videoSettled(iW))
        }
      }
      settled(WW) {
        const iW = this.segments.get(WW.journalId);
        void 0 !== iW && (iW.settledParts++, this.maybeDone(WW.journalId, iW))
      }
      maybeDone(WW, iW) {
        if (null === iW.totalParts || iW.settledParts < iW.totalParts) return;
        const OW = iW.listedParts >= iW.landedParts;
        var mW, EW;
        iW.uploaded || (iW.uploaded = !0, this.uploader.closeSegment("video", iW.sequence), OW || null === (mW = this.journal) || void 0 === mW || mW.videoUploaded(WW));
        OW && (this.segments.delete(WW), null === (EW = this.journal) || void 0 === EW || EW.videoSettled(WW))
      }
    }
    var Vi = OW(4045),
      fi = OW(5380);
    class Ci {
      constructor(WW, iW) {
        this.deps = WW, this.videoStatus = iW, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new Ui({
          onFirstCanvas: WW => {
            this.attachToCanvas(WW)
          },
          onCanvasSwapped: WW => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(WW), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: WW => {
            this.postToWorker({
              type: "resize",
              cssSize: WW
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
      attachToCanvas(WW) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(WW, this.deps.videoConfig)
        } catch (iW) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", iW), this.videoUnavailable(`video couldn't start: ${iW instanceof Error?iW.message:String(iW)}`)
        }
      }
      startVideo(WW, iW) {
        var OW, mW, EW;
        const NW = new wi,
          PW = (0, Oi.t)(iW),
          LW = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          cW = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => wW), LW),
          wW = new Di(this.deps.uploader, PW, this.deps.manifest, this.deps.journal, LW, cW);
        NW.onmessage = WW => {
          this.onWorkerMessage(WW.data, wW)
        }, NW.onerror = WW => {
          console.error("Session replay video worker error.", WW.message), this.worker === NW && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${WW.message||"it didn't load"}`))
        }, this.worker = NW, this.uploads = wW, this.joiner = cW, this.deps.debug.joiner = null !== (OW = null === cW || void 0 === cW ? void 0 : cW.stats) && void 0 !== OW ? OW : null, this.videoStarted = !0, this.deps.stills.start();
        const tW = (0, nW.getOperatingSystem)(),
          ZW = (0, HW.c)();
        this.postToWorker({
          type: "init",
          videoConfig: iW,
          partPlan: {
            ...PW,
            partDurationMs: iW.partDurationMs,
            keyframeIntervalMs: iW.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          encoderPreference: {
            preferSoftware: iW.softwareEncoderPlatforms.includes(tW),
            preferQualityLatency: "ios" === tW
          },
          journalRecordingId: null !== (mW = null === (EW = this.deps.journal) || void 0 === EW ? void 0 : EW.recordingId) && void 0 !== mW ? mW : null
        });
        const xW = function(WW, iW, OW, mW) {
          const EW = mW && WW.streamGrabEngines.includes(OW) ? "stream" : WW.videoFrameGrabPlatforms.includes(iW) ? "videoFrame" : "bitmap";
          return {
            path: EW,
            frameCostFloorMs: Math.max(WW.captureFrameCostFloorMs, "stream" === EW ? 2.5 : 0, "ios" === iW ? 3.5 : 0)
          }
        }(iW, tW, ZW, Ai.isSupported() && !WW.renderer.endsWith("webgpu"));
        this.capture = new bi(NW, iW.maxFps, {
          msPerSecond: iW.captureBudgetMsPerSecond,
          frameCostFloorMs: xW.frameCostFloorMs
        }, {
          path: xW.path,
          maxMacroblocks: iW.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (WW => {
          this.endVideo(), this.videoStopped("stopped_error", WW)
        })), this.capture.start(WW)
      }
      createJoiner(WW, iW, OW) {
        return new Ki(WW, this.deps.recording.uploadToken, new RW(WW.url), {
          stored: (WW, OW, mW) => {
            iW().joinedStored(WW, OW, mW), this.deps.pageExit.segmentLanded()
          },
          handBack: (WW, OW, mW, EW) => {
            iW().joinedHandedBack(WW, OW, mW, EW)
          },
          cut: OW
        }, {
          wait: Hi,
          nowMs: Date.now,
          maxHeldBytes: ki[this.deps.platformType]
        })
      }
      onWorkerMessage(WW, iW) {
        var OW, mW, EW, NW;
        switch (WW.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            iW.onWorkerMessage(WW, "videoSegmentOpened" === WW.type ? null === (OW = this.deps.dom()) || void 0 === OW ? void 0 : OW.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(WW, document.hidden);
            break;
          case "stats":
            EW = this.deps.debug, NW = WW.stats, EW.workerStats.push(NW), EW.workerStats.length > 120 && EW.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(WW.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = WW.level, null === (mW = this.capture) || void 0 === mW || mW.setMaxFps(WW.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, aW.e)(),
              level: WW.level,
              maxFps: WW.maxFps,
              reason: WW.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${WW.level} (${WW.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(WW.reason)
        }
      }
      videoUnavailable(WW) {
        var iW, OW;
        null === (iW = this.capture) || void 0 === iW || iW.stop(), this.capture = null, null === (OW = this.worker) || void 0 === OW || OW.terminate(), this.worker = null, this.videoStopped("stopped_error", WW)
      }
      videoStopped(WW, iW) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = iW, "stopped_error" === WW && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(WW, iW))
      }
      setVideoStatus(WW, iW) {
        this.videoStatus = WW, (0, Vi.i)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, fi.d)(WW, iW)
      }
      maybeLogStats(WW) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const iW = Math.round(1e3 * WW.encodedFrames / WW.windowMs);
        console.warn(`Session replay stats: ${iW} fps encoded, ${WW.encodeWidth}x${WW.encodeHeight} ${WW.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var WW;
        null === (WW = this.capture) || void 0 === WW || WW.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const iW = this.worker;
        this.worker = null, setTimeout((() => {
          null === iW || void 0 === iW || iW.terminate()
        }), 15e3)
      }
      postToWorker(WW) {
        var iW;
        null === (iW = this.worker) || void 0 === iW || iW.postMessage(WW)
      }
    }
    const Xi = 3 * CW.e / 4,
      Bi = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var qi = OW(41067);
    const Ri = {
        count: 1,
        maxBytes: Oi.l
      },
      Gi = "image/jpeg";
    class Ii {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CW.f;
        this.uploader = WW, this.manifest = iW, this.relay = OW, this.keepalive = mW, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(WW, iW) {
        let {
          bytes: OW,
          small: mW,
          atMs: EW
        } = WW;
        const NW = OW.byteLength <= Ri.maxBytes ? OW : mW;
        null !== NW && (this.latest = {
          bytes: NW,
          small: mW,
          atMs: EW
        }, iW && this.upload())
      }
      upload() {
        var WW, iW;
        const OW = this.latest;
        if (this.stopped || null === OW || OW.atMs <= (null !== (WW = null === (iW = this.queued) || void 0 === iW ? void 0 : iW.atMs) && void 0 !== WW ? WW : -1 / 0)) return;
        const mW = this.takeSequence();
        this.queued = {
          atMs: OW.atMs,
          sequence: mW
        }, this.uploader.enqueue({
          kind: "still",
          contentType: Gi,
          bytes: OW.bytes,
          meta: {
            type: "still",
            atMs: OW.atMs,
            sequence: mW
          },
          part: {
            sequence: mW,
            index: 0,
            slots: Ri
          }
        })
      }
      landed(WW) {
        this.manifest.setStill(WW.atMs, WW.sequence), this.uploader.closeSegment("still", WW.sequence)
      }
      dropped(WW) {
        this.uploader.closeSegment("still", WW.sequence)
      }
      beacon() {
        var WW, iW, OW, mW;
        const EW = this.latest;
        if (this.stopped || null === EW || EW.atMs <= (null !== (WW = null === (iW = this.manifest.contents.still) || void 0 === iW ? void 0 : iW.atMs) && void 0 !== WW ? WW : -1 / 0)) return;
        const NW = (null === (OW = this.queued) || void 0 === OW ? void 0 : OW.atMs) === EW.atMs ? this.queued : null;
        if (null !== NW && this.keepalive.isInFlight(Gi)) return void this.manifest.setStill(EW.atMs, NW.sequence);
        const PW = null !== (mW = null === NW || void 0 === NW ? void 0 : NW.sequence) && void 0 !== mW ? mW : this.nextSequence,
          LW = this.uploader.peekTarget("still", PW, 0);
        if (void 0 !== LW)
          for (const cW of [EW.bytes, EW.small])
            if (null !== cW && this.sendBeacon(LW, cW)) return null === NW && this.takeSequence(), void this.manifest.setStill(EW.atMs, PW)
      }
      sendBeacon(WW, iW) {
        var OW, mW;
        const EW = null !== (OW = null === (mW = this.relay) || void 0 === mW ? void 0 : mW.beacon({
          method: "POST",
          url: WW.url,
          fields: WW.fields
        }, iW, Gi, this.keepalive)) && void 0 !== OW ? OW : null;
        if (null !== EW) return EW;
        const {
          form: NW,
          byteLength: PW
        } = (0, qi.h)(WW, iW, Gi);
        return this.keepalive.sendUploadBeacon(WW.url, NW, PW)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const WW = this.nextSequence++;
        return this.prefetchNext(), WW
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, Gi, Ri)
      }
    }
    var ai = OW(5390),
      ri = OW(41073),
      zi = OW(41082),
      Fi = OW(41084),
      Qi = OW(7500),
      WO = OW(7502);

    function iO(WW) {
      return 50 * Math.floor(WW / 50)
    }
    class OO {
      constructor() {
        this.writer = new Qi.e((0, aW.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(WW, iW) {
        null !== WW && (this.setActionBits(WW.getActionBits(), (0, aW.e)()), this.unsubscribers.push(WW.onKey(((WW, iW, OW, mW, EW, NW) => {
          const PW = (0, WO.e)(WW);
          EW ? this.writer.writeKey(iO(NW), PW, iW, OW, mW) : 0 !== PW && null === (0, WO.g)(WW) && this.writer.writeKey(iO(NW), 0, iW, OW, mW)
        })), WW.onActions(((WW, iW) => {
          this.setActionBits(WW, iW)
        })), WW.onPointerLock(((WW, iW) => {
          this.writer.writeEvent(iW, WW ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, ji.r)((() => {
          const WW = (0, ji.e)();
          this.writer.writeFrame((0, aW.e)() - WW, WW), this.framesSinceFpsSample++, iW()
        })))
      }
      writeState(WW, iW) {
        this.writer.writeState((0, aW.e)(), {
          backingWidth: WW.canvas.width,
          backingHeight: WW.canvas.height,
          cssWidth: WW.cssWidth,
          cssHeight: WW.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: WW.renderer,
          pingMs: WW.pingMs,
          hidden: iW,
          qualityLevel: WW.qualityLevel
        })
      }
      writeEvent(WW) {
        this.writer.writeEvent((0, aW.e)(), WW)
      }
      sampleFps() {
        const WW = performance.now(),
          iW = WW - this.lastFpsSampleMs,
          OW = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = WW, this.framesSinceFpsSample = 0, 0 === OW || iW <= 0 ? null : 1e3 * OW / iW
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const WW = this.writer.chunkStartMs,
          iW = (0, aW.e)(),
          OW = this.writer.takeChunk(iW);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(iW, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: OW,
          startMs: WW,
          endMs: iW
        }
      }
      stop() {
        for (const WW of this.unsubscribers) WW();
        this.unsubscribers = []
      }
      setActionBits(WW, iW) {
        WW !== this.actionBits && (this.actionBits = WW, this.writer.writeActions(iO(iW), WW))
      }
    }
    var mO = OW(5399),
      EO = OW(41091);
    class NO {
      constructor(WW, iW) {
        var OW;
        this.recording = WW, this.telemetry = new OO, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const mW = iW.dryRun ? null : null !== (OW = WW.partJoiner) && void 0 !== OW ? OW : null,
          EW = null === mW ? null : (0, XW.l)(GW(mW)),
          PW = iW.dryRun ? new qi.d : new qi.f((0, hW.d)().segmentUploadUrl, {
            relay: EW
          });
        var cW, wW;
        this.videoConfig = iW.dryRun ? function(WW) {
          var iW, OW, mW, EW;
          const PW = NW[WW],
            LW = oW.i.getItem("replaySkipLowMemory"),
            cW = "boolean" === typeof LW ? LW : null;
          return {
            ...PW,
            maxFps: null !== (iW = vW("replayMaxFps")) && void 0 !== iW ? iW : PW.maxFps,
            maxMacroblocks: null !== (OW = vW("replayMaxMacroblocks")) && void 0 !== OW ? OW : PW.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (mW = vW("replayCaptureBudgetMs")) && void 0 !== mW ? mW : PW.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (EW = vW("replayCaptureCostFloorMs")) && void 0 !== EW ? EW : PW.captureFrameCostFloorMs,
            softwareEncoderPlatforms: gW("replayEncoder", "software", "hardware", PW.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: gW("replayGrab", "videoFrame", "bitmap", PW.videoFrameGrabPlatforms),
            streamGrabEngines: DW(PW.streamGrabEngines),
            skipLowMemoryDevices: null !== cW && void 0 !== cW ? cW : PW.skipLowMemoryDevices
          }
        }(iW.platformType) : WW.videoConfig && (cW = WW.videoConfig, wW = iW.platformType, {
          ...NW[wW],
          ...cW
        });
        const tW = (0, mO.b)(this.videoConfig);
        (0, Vi.i)("recorded" === tW ? "video" : "dom_only", WW), this.manifest = new Wi(WW.recordingId, WW.uploadToken, !iW.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: WW.expiresAtMs - 6e4,
          onSend: WW => {
            var iW;
            null === (iW = this.journal) || void 0 === iW || iW.manifestSent(WW)
          },
          onListed: WW => {
            let {
              list: iW,
              value: OW
            } = WW;
            var mW, EW;
            if ("videoSegments" === iW) null === (mW = this.video.uploads) || void 0 === mW || mW.listed(OW.sequence, null !== (EW = OW.parts) && void 0 !== EW ? EW : null);
            else if ("telemetrySegments" === iW) {
              var NW;
              null === (NW = this.journal) || void 0 === NW || NW.telemetrySettled(OW.sequence)
            } else {
              var PW;
              null === (PW = this.journal) || void 0 === PW || PW.domSettled(OW.sequence)
            }
          }
        }), !iW.dryRun && Fi.d.supported && (this.journal = new Ni(new Fi.d, WW, this.manifest.contents, (0, hW.d)())), this.debug = function() {
          const WW = {
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
          return window.sessionReplayDebug = WW, WW
        }(), this.uploader = new gi(PW, WW.uploadToken, {
          ...Ji,
          maxBacklogBytes: Bi[iW.platformType],
          wait: Hi
        }, {
          onUploaded: (WW, iW) => {
            var OW;
            this.debug.uploadedBytesByKind[WW.kind] = (null !== (OW = this.debug.uploadedBytesByKind[WW.kind]) && void 0 !== OW ? OW : 0) + WW.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(WW.meta, iW, WW.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (WW, iW, OW) => {
            var mW;
            if (console.warn(`Session replay dropped a ${WW.kind} segment: ${iW}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === WW.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (mW = this.video.uploads) || void 0 === mW || mW.dropped(WW.meta);
            else if ("still" === WW.meta.type) this.stills.dropped(WW.meta);
            else if ("telemetry" === WW.meta.type && null !== OW) {
              var EW;
              null === (EW = this.journal) || void 0 === EW || EW.telemetrySettled(OW)
            } else if ("dom" === WW.meta.type && null !== OW) {
              var NW;
              null === (NW = this.journal) || void 0 === NW || NW.domSettled(OW)
            }
          },
          onStopped: WW => {
            this.stop(`uploads refused: ${WW}`)
          }
        }), this.stills = new Ii(this.uploader, this.manifest, EW), this.pageExit = new Pi({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var WW, iW;
            null === (WW = this.dom) || void 0 === WW || WW.cut(), null === (iW = this.dom) || void 0 === iW || iW.cutAfterNextBatch()
          },
          postToWorker: WW => {
            this.video.postToWorker(WW)
          },
          writeEvent: WW => {
            this.telemetry.writeEvent(WW)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var WW;
            null === (WW = this.video.joiner) || void 0 === WW || WW.releaseAll()
          }
        }), this.video = new Ci({
          recording: WW,
          videoConfig: this.videoConfig,
          joinerAccess: mW,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: iW.dryRun ? {
            logStats: !0 === oW.i.getItem("replayLogStats")
          } : eW,
          platformType: iW.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, tW);
        const ZW = iW.dryRun ? function() {
          var WW;
          const iW = null !== (WW = (0, dW.f)() ? uW.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== WW ? WW : oW.i.getItem("replayPostHogHost");
          return "string" === typeof iW && iW.length > 0 ? {
            apiHost: iW,
            projectApiKey: "dry-run"
          } : null
        }() : WW.posthog;
        if (this.ownFpsMonitor = null === ZW ? new EO.b({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, LW.l.subscribe("sessionReplayLowFps", (WW => {
            let {
              low: iW
            } = WW;
            this.isStopped || this.onLowFps(iW)
          })), LW.l.subscribe("sessionReplayStayProgress", (WW => {
            !this.isStopped && this.manifest.updateCurrentStay(WW) && this.manifest.sendSoon()
          })), LW.l.subscribe("sessionReplayGameQuit", (WW => {
            let {
              reasons: iW,
              gameName: OW
            } = WW;
            iW.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(OW) && this.pageExit.sendManifest()
          })), null !== iW.currentGame && (this.listStay(iW.currentGame), LW.l.iZ("sessionReplayStayOpened", iW.currentGame.gameNameWithVariation)), this.start(WW.expiresAtMs), this.dom = null, null !== ZW) {
          const OW = new TW(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: WW => this.isStopped || this.pageExit.isHiding || document.hidden && !WW
          }, this.journal, new JW.d);
          this.dom = OW, (0, fi.c)({
            recording: WW,
            posthog: ZW,
            videoStatus: this.video.videoStatus,
            dryRun: iW.dryRun,
            onDomBatch: WW => {
              OW.add(WW)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var WW, iW;
        return null !== (WW = null === (iW = this.videoConfig) || void 0 === iW ? void 0 : iW.manifestIntervalMs) && void 0 !== WW ? WW : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(WW) {
        const {
          lobbyName: iW,
          ...OW
        } = WW;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === iW ? OW : {
          ...OW,
          lobbyName: iW
        })
      }
      gameJoined(WW) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(WW), LW.l.iZ("sessionReplayStayOpened", WW.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(WW, iW) {
        this.isStopped || (this.manifest.addCreatorGrant(WW, iW), this.manifest.send())
      }
      onLowFps(WW) {
        this.lowFpsOpen = WW, WW && this.manifest.flagCurrentGame("lowFps")
      }
      start(WW) {
        const iW = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var WW;
          this.flushTelemetry(), null === (WW = this.dom) || void 0 === WW || WW.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, WW - Date.now() - 6e4))), this.pageExit.listen(iW), this.telemetry.attach((0, zi.e)(), (() => {
          var WW;
          null === (WW = this.video.capture) || void 0 === WW || WW.onAfterRender()
        }));
        for (const OW of ["error", "unhandledrejection"]) window.addEventListener(OW, (WW => {
          (0, ri.c)(WW) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: iW
        });
        (0, mO.c)((() => {
          this.video.onCellular()
        }), iW), null !== this.journal && (0, ai.c)(iW)
      }
      stop(WW) {
        var iW, OW;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${WW}`), this.debug.stoppedReason = WW, this.lifetime.abort();
          for (const WW of this.timers) clearTimeout(WW);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, fi.h)(), this.telemetry.stop(), this.flushTelemetry(), null === (iW = this.dom) || void 0 === iW || iW.cut(), null === (OW = this.dom) || void 0 === OW || OW.close(), this.video.endVideo(), this.manifest.send(), (0, Vi.i)("events_only", this.recording)
        }
      }
      onStateTick() {
        var WW;
        const iW = this.video.canvasWatch.check();
        if (null === iW) return;
        const {
          cssSize: OW
        } = this.video.canvasWatch, mW = PW.b.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: iW.canvas,
          cssWidth: OW.width,
          cssHeight: OW.height,
          renderer: iW.renderer,
          pingMs: mW,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= Xi && this.flushTelemetry();
        const EW = this.telemetry.sampleFps(),
          NW = document.hidden ? null : EW;
        if (null === (WW = this.ownFpsMonitor) || void 0 === WW || WW.addSample(NW, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: NW,
            pingMs: mW
          }), null !== this.video.capture) {
          const {
            averageMs: WW,
            fps: iW,
            grabPath: OW
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: WW,
            budgetFps: iW,
            grabPath: OW
          }
        }
      }
      onSegmentUploaded(WW, iW, OW) {
        var mW;
        if ("video" === WW.type) null === (mW = this.video.uploads) || void 0 === mW || mW.landed(WW, iW);
        else if ("still" === WW.type) this.stills.landed(WW);
        else if ("dom" === WW.type) {
          var EW;
          null === (EW = this.journal) || void 0 === EW || EW.domLanded(iW, WW.chunk), this.manifest.addDomSegment({
            sequence: iW,
            ...WW.chunk
          })
        } else {
          var NW;
          null === (NW = this.journal) || void 0 === NW || NW.telemetryLanded(iW, OW, WW.startMs, WW.endMs), this.manifest.addTelemetrySegment(iW, WW.startMs, WW.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: WW,
          startMs: iW,
          endMs: OW
        } = this.telemetry.takeChunk(), mW = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: WW,
          meta: {
            type: "telemetry",
            startMs: iW,
            endMs: OW
          }
        });
        var EW;
        null !== mW && (null === (EW = this.journal) || void 0 === EW || EW.telemetryQueued(mW, WW, iW, OW));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7500: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => JW,
      h: () => hW
    });
    var mW = OW(7502);
    const EW = 827609666,
      NW = 2,
      PW = 1,
      LW = 13,
      cW = 1,
      wW = 2,
      tW = 3,
      ZW = 4,
      xW = 5,
      lW = 7,
      AW = 19,
      bW = 6,
      jW = 7,
      UW = 7,
      kW = 1,
      sW = 2,
      MW = 4,
      KW = 65535,
      SW = 10,
      YW = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      yW = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function TW(WW) {
      return Math.max(0, Math.min(KW, Math.round(WW)))
    }
    class JW {
      constructor(WW) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(WW)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - LW
      }
      writeFrame(WW, iW) {
        this.reserve(lW);
        const OW = this.view,
          mW = this.length;
        OW.setUint8(mW, cW), OW.setUint32(mW + 1, this.timeUnits(WW), !0), OW.setUint16(mW + 5, TW(100 * iW), !0), this.length += lW
      }
      writeState(WW, iW) {
        this.reserve(AW);
        const OW = this.view,
          mW = this.length;
        OW.setUint8(mW, wW), OW.setUint32(mW + 1, this.timeUnits(WW), !0), OW.setUint16(mW + 5, TW(iW.backingWidth), !0), OW.setUint16(mW + 7, TW(iW.backingHeight), !0), OW.setUint16(mW + 9, TW(iW.cssWidth), !0), OW.setUint16(mW + 11, TW(iW.cssHeight), !0), OW.setUint16(mW + 13, TW(100 * iW.devicePixelRatio), !0), OW.setUint8(mW + 15, YW.indexOf(iW.renderer)), OW.setUint16(mW + 16, null === iW.pingMs ? KW : TW(Math.min(iW.pingMs, KW - 1)), !0), OW.setUint8(mW + 18, (iW.hidden ? 1 : 0) | (7 & iW.qualityLevel) << 1), this.length += AW
      }
      writeEvent(WW, iW) {
        this.reserve(bW);
        const OW = this.length;
        this.view.setUint8(OW, tW), this.view.setUint32(OW + 1, this.timeUnits(WW), !0), this.view.setUint8(OW + 5, yW.indexOf(iW)), this.length += bW
      }
      writeActions(WW, iW) {
        this.reserve(jW);
        const OW = this.length;
        this.view.setUint8(OW, ZW), this.view.setUint32(OW + 1, this.timeUnits(WW), !0), this.view.setUint16(OW + 5, iW, !0), this.length += jW
      }
      writeKey(WW, iW, OW, mW, EW) {
        this.reserve(UW);
        const NW = this.length;
        this.view.setUint8(NW, xW), this.view.setUint32(NW + 1, this.timeUnits(WW), !0), this.view.setUint8(NW + 5, iW), this.view.setUint8(NW + 6, (OW ? kW : 0) | (mW ? sW : 0) | (EW ? MW : 0)), this.length += UW
      }
      takeChunk(WW) {
        const iW = this.buffer.slice(0, this.length);
        return this.startChunk(WW), iW
      }
      startChunk(WW) {
        this.baseEpochMs = WW, this.view.setUint32(0, EW, !0), this.view.setUint8(4, NW), this.view.setFloat64(5, WW, !0), this.length = LW
      }
      timeUnits(WW) {
        return Math.max(0, Math.round((WW - this.baseEpochMs) * SW))
      }
      reserve(WW) {
        if (this.length + WW <= this.buffer.byteLength) return;
        const iW = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(iW).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = iW, this.view = new DataView(iW)
      }
    }

    function hW(WW) {
      const iW = new DataView(WW),
        OW = WW.byteLength < LW ? 0 : iW.getUint8(4);
      if (OW < PW || OW > NW || iW.getUint32(0, !0) !== EW) throw new Error(`Not a version ${PW}-${NW} replay telemetry chunk`);
      const TW = iW.getFloat64(5, !0),
        JW = {
          baseEpochMs: TW,
          inputRecorded: OW >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        hW = WW => TW + iW.getUint32(WW, !0) / SW;
      let HW = LW;
      for (; HW < WW.byteLength;) {
        const WW = iW.getUint8(HW);
        if (WW === cW) JW.frames.push({
          atMs: hW(HW + 1),
          cpuFrameMs: iW.getUint16(HW + 5, !0) / 100
        }), HW += lW;
        else if (WW === wW) {
          var nW;
          const WW = iW.getUint16(HW + 16, !0),
            OW = iW.getUint8(HW + 18);
          JW.states.push({
            atMs: hW(HW + 1),
            backingWidth: iW.getUint16(HW + 5, !0),
            backingHeight: iW.getUint16(HW + 7, !0),
            cssWidth: iW.getUint16(HW + 9, !0),
            cssHeight: iW.getUint16(HW + 11, !0),
            devicePixelRatio: iW.getUint16(HW + 13, !0) / 100,
            renderer: null !== (nW = YW[iW.getUint8(HW + 15)]) && void 0 !== nW ? nW : "unknown",
            pingMs: WW === KW ? null : WW,
            hidden: 1 === (1 & OW),
            qualityLevel: OW >> 1 & 7
          }), HW += AW
        } else if (WW === tW) {
          var uW;
          JW.events.push({
            atMs: hW(HW + 1),
            event: null !== (uW = yW[iW.getUint8(HW + 5)]) && void 0 !== uW ? uW : "none"
          }), HW += bW
        } else if (WW === ZW && JW.inputRecorded) JW.actions.push({
          atMs: hW(HW + 1),
          bits: iW.getUint16(HW + 5, !0)
        }), HW += jW;
        else {
          if (WW !== xW || !JW.inputRecorded) throw new Error(`Unknown replay telemetry record type ${WW} at byte ${HW}`);
          {
            var oW;
            const WW = iW.getUint8(HW + 6);
            JW.keys.push({
              atMs: hW(HW + 1),
              code: null !== (oW = mW.c[iW.getUint8(HW + 5)]) && void 0 !== oW ? oW : mW.c[0],
              down: 0 !== (WW & kW),
              bound: 0 !== (WW & sW),
              inPlay: 0 !== (WW & MW)
            }), HW += UW
          }
        }
      }
      return JW
    }
  },
  37245: WW => {
    WW.exports = function(WW, iW, OW, mW) {
      var EW = self || window;
      try {
        try {
          var NW;
          try {
            NW = new EW.Blob([WW])
          } catch (wW) {
            (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
          }
          var PW = EW.URL || EW.webkitURL,
            LW = PW.createObjectURL(NW),
            cW = new EW[iW](LW, OW);
          return PW.revokeObjectURL(LW), cW
        } catch (wW) {
          return new EW[iW]("data:application/javascript,".concat(encodeURIComponent(WW)), OW)
        }
      } catch (wW) {
        if (!mW) throw Error("Inline worker is not supported");
        return new EW[iW](mW, OW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);