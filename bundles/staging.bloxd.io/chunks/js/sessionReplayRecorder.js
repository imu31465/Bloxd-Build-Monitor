export const id = 63;
export const ids = [63];
export const modules = {
  40708: (HH, BH, LH) => {
    function AH() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function rH(HH) {
      return HH instanceof Uint8Array && (!AH() || !Buffer.isBuffer(HH))
    }

    function SH(HH) {
      return HH instanceof ArrayBuffer
    }

    function hH(HH) {
      return !!AH() && Buffer.isBuffer(HH)
    }
    var tH = LH(40712).d,
      zH = LH(40716).d,
      CH = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    BH.c = function(HH) {
      if (!rH(HH) && !SH(HH) && !hH(HH)) throw new TypeError(CH);
      var BH = !1,
        LH = !1;
      rH(HH) ? BH = !0 : SH(HH) && (LH = !0, HH = new Uint8Array(HH));
      var AH, tH, EH, XH = new zH(HH),
        GH = XH.maxCompressedLength();
      if (BH ? (AH = new Uint8Array(GH), EH = XH.compressToBuffer(AH)) : LH ? (AH = new ArrayBuffer(GH), tH = new Uint8Array(AH), EH = XH.compressToBuffer(tH)) : (AH = Buffer.alloc(GH), EH = XH.compressToBuffer(AH)), !AH.slice) {
        var YH = new Uint8Array(Array.prototype.slice.call(AH, 0, EH));
        if (BH) return YH;
        if (LH) return YH.buffer;
        throw new Error("Not implemented")
      }
      return AH.slice(0, EH)
    }
  },
  40716: (HH, BH) => {
    var LH = new Array(15);

    function AH(HH, BH) {
      return 506832829 * HH >>> BH
    }

    function rH(HH, BH) {
      return HH[BH] + (HH[BH + 1] << 8) + (HH[BH + 2] << 16) + (HH[BH + 3] << 24)
    }

    function SH(HH, BH, LH) {
      return HH[BH] === HH[LH] && HH[BH + 1] === HH[LH + 1] && HH[BH + 2] === HH[LH + 2] && HH[BH + 3] === HH[LH + 3]
    }

    function hH(HH, BH, LH, AH, rH) {
      return LH <= 60 ? (AH[rH] = LH - 1 << 2, rH += 1) : LH < 256 ? (AH[rH] = 240, AH[rH + 1] = LH - 1, rH += 2) : (AH[rH] = 244, AH[rH + 1] = LH - 1 & 255, AH[rH + 2] = LH - 1 >>> 8, rH += 3),
        function(HH, BH, LH, AH, rH) {
          var SH;
          for (SH = 0; SH < rH; SH++) LH[AH + SH] = HH[BH + SH]
        }(HH, BH, AH, rH, LH), rH + LH
    }

    function tH(HH, BH, LH, AH) {
      return AH < 12 && LH < 2048 ? (HH[BH] = 1 + (AH - 4 << 2) + (LH >>> 8 << 5), HH[BH + 1] = 255 & LH, BH + 2) : (HH[BH] = 2 + (AH - 1 << 2), HH[BH + 1] = 255 & LH, HH[BH + 2] = LH >>> 8, BH + 3)
    }

    function zH(HH, BH, LH, AH) {
      for (; AH >= 68;) BH = tH(HH, BH, LH, 64), AH -= 64;
      return AH > 64 && (BH = tH(HH, BH, LH, 60), AH -= 60), tH(HH, BH, LH, AH)
    }

    function CH(HH, BH, tH, CH, EH) {
      for (var XH = 1; 1 << XH <= tH && XH <= 14;) XH += 1;
      var GH = 32 - (XH -= 1);
      "undefined" === typeof LH[XH] && (LH[XH] = new Uint16Array(1 << XH));
      var YH, uH = LH[XH];
      for (YH = 0; YH < uH.length; YH++) uH[YH] = 0;
      var QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH = BH + tH,
        kH = BH,
        mH = BH,
        oH = !0;
      if (tH >= 15)
        for (QH = bH - 15, MH = AH(rH(HH, BH += 1), GH); oH;) {
          PH = 32, xH = BH;
          do {
            if (WH = MH, TH = PH >>> 5, PH += 1, xH = (BH = xH) + TH, BH > QH) {
              oH = !1;
              break
            }
            MH = AH(rH(HH, xH), GH), vH = kH + uH[WH], uH[WH] = BH - kH
          } while (!SH(HH, BH, vH));
          if (!oH) break;
          EH = hH(HH, mH, BH - mH, CH, EH);
          do {
            for (UH = BH, VH = 4; BH + VH < bH && HH[BH + VH] === HH[vH + VH];) VH += 1;
            if (BH += VH, EH = zH(CH, EH, UH - vH, VH), mH = BH, BH >= QH) {
              oH = !1;
              break
            }
            uH[AH(rH(HH, BH - 1), GH)] = BH - 1 - kH, vH = kH + uH[OH = AH(rH(HH, BH), GH)], uH[OH] = BH - kH
          } while (SH(HH, BH, vH));
          if (!oH) break;
          MH = AH(rH(HH, BH += 1), GH)
        }
      return mH < bH && (EH = hH(HH, mH, bH - mH, CH, EH)), EH
    }

    function EH(HH) {
      this.array = HH
    }
    EH.prototype.maxCompressedLength = function() {
      var HH = this.array.length;
      return 32 + HH + Math.floor(HH / 6)
    }, EH.prototype.compressToBuffer = function(HH) {
      var BH, LH = this.array,
        AH = LH.length,
        rH = 0,
        SH = 0;
      for (SH = function(HH, BH, LH) {
          do {
            BH[LH] = 127 & HH, (HH >>>= 7) > 0 && (BH[LH] += 128), LH += 1
          } while (HH > 0);
          return LH
        }(AH, HH, SH); rH < AH;) SH = CH(LH, rH, BH = Math.min(AH - rH, 65536), HH, SH), rH += BH;
      return SH
    }, BH.d = EH
  },
  40712: (HH, BH) => {
    var LH = [0, 255, 65535, 16777215, 4294967295];

    function AH(HH, BH, LH, AH, rH) {
      var SH;
      for (SH = 0; SH < rH; SH++) LH[AH + SH] = HH[BH + SH]
    }

    function rH(HH, BH, LH, AH) {
      var rH;
      for (rH = 0; rH < AH; rH++) HH[BH + rH] = HH[BH - LH + rH]
    }

    function SH(HH) {
      this.array = HH, this.pos = 0
    }
    SH.prototype.readUncompressedLength = function() {
      for (var HH, BH, LH = 0, AH = 0; AH < 32 && this.pos < this.array.length;) {
        if (HH = this.array[this.pos], this.pos += 1, (BH = 127 & HH) << AH >>> AH !== BH) return -1;
        if (LH |= BH << AH, HH < 128) return LH;
        AH += 7
      }
      return -1
    }, SH.prototype.uncompressToBuffer = function(HH) {
      for (var BH, SH, hH, tH, zH = this.array, CH = zH.length, EH = this.pos, XH = 0; EH < zH.length;)
        if (BH = zH[EH], EH += 1, 0 === (3 & BH)) {
          if ((SH = 1 + (BH >>> 2)) > 60) {
            if (EH + 3 >= CH) return !1;
            hH = SH - 60, SH = 1 + ((SH = zH[EH] + (zH[EH + 1] << 8) + (zH[EH + 2] << 16) + (zH[EH + 3] << 24)) & LH[hH]), EH += hH
          }
          if (EH + SH > CH) return !1;
          AH(zH, EH, HH, XH, SH), EH += SH, XH += SH
        } else {
          switch (3 & BH) {
            case 1:
              SH = 4 + (BH >>> 2 & 7), tH = zH[EH] + (BH >>> 5 << 8), EH += 1;
              break;
            case 2:
              if (EH + 1 >= CH) return !1;
              SH = 1 + (BH >>> 2), tH = zH[EH] + (zH[EH + 1] << 8), EH += 2;
              break;
            case 3:
              if (EH + 3 >= CH) return !1;
              SH = 1 + (BH >>> 2), tH = zH[EH] + (zH[EH + 1] << 8) + (zH[EH + 2] << 16) + (zH[EH + 3] << 24), EH += 4
          }
          if (0 === tH || tH > XH) return !1;
          rH(HH, XH, tH, SH), XH += SH
        } return !0
    }, BH.d = SH
  },
  40699: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      SessionReplayRecorder: () => LL
    });
    const AH = {
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
      rH = {
        ...AH,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        captureBudgetMsPerSecond: 60,
        skipLowMemoryDevices: !0
      },
      SH = {
        desktop: AH,
        mobile: rH,
        tablet: rH
      };
    var hH = LH(3030),
      tH = LH(18);
    const zH = 4194304,
      CH = 16777216;
    var EH = LH(3761);
    const XH = [2, 4, 9, 3],
      GH = EH.e,
      YH = [GH.MouseInteraction, GH.MouseMove, GH.TouchMove],
      uH = [GH.MouseMove, GH.MouseInteraction, GH.Scroll, GH.ViewportResize, GH.Input, GH.TouchMove, GH.MediaInteraction, GH.Drag],
      QH = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function WH(HH) {
      if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return !1;
      const BH = HH.timestamp;
      return "number" === typeof BH && BH > 0 && BH <= 864e13
    }
    class MH {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(HH) {
        this.eventCount++;
        const BH = function(HH) {
          var BH;
          return HH.type === EH.c.IncrementalSnapshot ? null === (BH = HH.data) || void 0 === BH ? void 0 : BH.source : void 0
        }(HH);
        this.timestamps.push(HH.timestamp), this.active.push(uH.includes(BH));
        const LH = function(HH) {
          var BH;
          const LH = HH.data;
          if (HH.type === EH.c.Custom && "$json_ld" === (null === LH || void 0 === LH ? void 0 : LH.tag)) return;
          const AH = "string" === typeof(null === LH || void 0 === LH ? void 0 : LH.href) ? LH.href.trim() : void 0,
            rH = "string" === typeof(null === LH || void 0 === LH || null === (BH = LH.payload) || void 0 === BH ? void 0 : BH.href) ? LH.payload.href.trim() : void 0;
          return AH || rH || void 0
        }(HH);
        LH && this.addUrl(LH), BH === GH.MouseInteraction && XH.includes(HH.data.type) && this.clickCount++, BH === GH.Input && this.keypressCount++, YH.includes(BH) && this.mouseActivityCount++;
        const AH = HH.data;
        if (HH.type === EH.c.Plugin && "rrweb/console@1" === (null === AH || void 0 === AH ? void 0 : AH.plugin)) {
          var rH;
          const HH = QH.get(null === (rH = AH.payload) || void 0 === rH ? void 0 : rH.level);
          "warn" === HH ? this.consoleWarnCount++ : "error" === HH ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(HH) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: HH,
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
      addUrl(HH) {
        const BH = HH.slice(0, 4096);
        this.firstUrl ??= BH, this.urls.size < 25 && !this.urls.has(BH) && this.urlsLength + BH.length <= 8192 && (this.urls.add(BH), this.urlsLength += BH.length)
      }
      activeMs() {
        var HH;
        const BH = this.timestamps.map(((HH, BH) => BH)).sort(((HH, BH) => this.timestamps[HH] - this.timestamps[BH]));
        let LH = 0,
          AH = null,
          rH = 0;
        for (const hH of BH) {
          const HH = this.timestamps[hH],
            BH = this.active[hH],
            tH = !AH || BH && !AH.isActive || AH.isActive && rH + 5e3 < HH;
          var SH;
          if (rH = BH ? HH : rH, tH) null !== (SH = AH) && void 0 !== SH && SH.isActive && (LH += Math.max(1, AH.end - AH.start)), AH = {
            start: HH,
            end: HH,
            isActive: BH
          };
          else AH.end = HH
        }
        return null !== (HH = AH) && void 0 !== HH && HH.isActive && (LH += Math.max(1, AH.end - AH.start)), Math.floor(LH)
      }
    }
    const xH = 5592405.333333333;
    class vH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = HH, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new MH, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get TX() {
        return 0 === this.lines.length
      }
      add(HH) {
        const BH = HH.events.filter(WH),
          LH = BH.map((BH => JSON.stringify([HH.windowId, BH]) + "\n"));
        if (0 === LH.length) return [];
        const AH = [],
          rH = LH.reduce(((HH, BH) => HH + BH.length), 0);
        !this.TX && this.chars + rH > this.chunkChars && AH.push(this.finish());
        let SH = !1;
        return BH.forEach(((HH, BH) => {
          const rH = LH[BH];
          !this.TX && this.chars + rH.length > this.chunkChars && (AH.push(this.finish()), SH = !1), SH || (this.counter.addMessage(), SH = !0), this.counter.addEvent(HH), this.lines.push(rH), this.chars += rH.length, this.startMs = Math.min(this.startMs, HH.timestamp), this.endMs = Math.max(this.endMs, HH.timestamp), this.holdsSnapshot ||= HH.type === EH.c.FullSnapshot || HH.type === EH.c.Meta
        })), AH.filter((HH => null !== HH))
      }
      finish() {
        if (this.TX) return null;
        const {
          startMs: HH,
          endMs: BH,
          counter: LH,
          holdsSnapshot: AH,
          chunkIndex: rH,
          tailedChars: SH
        } = this, hH = {
          text: this.lines.join(""),
          startMs: HH,
          endMs: BH,
          counter: LH,
          holdsSnapshot: AH,
          chunkIndex: rH,
          tailedChars: SH
        };
        return this.reset(), hH
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > xH) return null;
        const HH = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, HH
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new MH, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function PH(HH) {
      let {
        text: BH
      } = HH;
      return BH.length <= xH
    }

    function TH(HH) {
      const {
        text: BH,
        startMs: LH,
        endMs: AH,
        counter: rH,
        chunkIndex: SH,
        tailedChars: hH
      } = HH;
      return hH !== BH.length && PH(HH) ? {
        chunkIndex: SH,
        fromChar: hH,
        text: BH.slice(hH),
        startMs: LH,
        endMs: AH,
        summary: rH.finish(0)
      } : null
    }

    function UH(HH, BH) {
      let {
        startMs: LH,
        endMs: AH,
        counter: rH,
        holdsSnapshot: SH
      } = HH, {
        bytes: hH,
        inflatedBytes: tH
      } = BH;
      return hH.byteLength > zH || tH > CH ? (console.warn(`Session replay: dropped a ${tH}-byte page recording chunk, over the size limits`), null) : {
        bytes: hH,
        startMs: LH,
        endMs: AH,
        summary: rH.finish(tH),
        holdsSnapshot: SH
      }
    }
    var VH = LH(40704);
    class OH {
      constructor(HH, BH, LH, AH) {
        this.uploader = HH, this.timing = BH, this.journal = LH, this.packer = AH, this.writer = new vH, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(HH) {
        this.pack(this.writer.add(HH)), (this.cutNext || this.timing.cutsEachBatch()) && (this.cutNext = !1, this.cut());
        const BH = this.journal;
        null === BH || null !== this.tailTimer || this.writer.TX || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const HH = this.writer.takeTail();
          null !== HH && BH.domTail(HH)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const HH = this.writer.finish();
        this.pack(null === HH ? [] : [HH])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.TX) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const HH = this.packing[this.packing.length - 1];
        return void 0 !== HH ? new Promise((BH => {
          const LH = HH.onQueued;
          HH.onQueued = () => {
            null === LH || void 0 === LH || LH(), BH()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(HH) {
        const BH = HH.filter((HH => {
            const BH = function(HH) {
              let {
                text: BH
              } = HH;
              return BH.length <= CH || (console.warn(`Session replay: dropped a page recording chunk of ${BH.length} characters, over the size limits`), !1)
            }(HH);
            var LH;
            BH || (null === (LH = this.journal) || void 0 === LH || LH.domTailDropped(HH.chunkIndex));
            return BH
          })),
          LH = this.journalWorks() && BH.every((HH => PH(HH))) && this.packing.every((HH => HH.journalled));
        if (this.timing.packsNow(LH)) {
          for (const HH of BH) this.packing.push({
            text: HH,
            packed: null,
            journalled: this.tailHolds(HH)
          });
          for (const HH of [...this.packing]) this.packHere(HH);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const AH of BH) {
          const HH = null === this.journal ? null : TH(AH);
          null !== HH && this.journal.domTail(HH);
          const BH = {
            text: AH,
            packed: null,
            journalled: this.tailHolds(AH)
          };
          this.packing.push(BH), this.packer.pack(AH.text).then((HH => {
            BH.packed = HH, this.queuePacked()
          }), (() => {
            this.packHere(BH), this.queuePacked()
          }))
        }
      }
      packHere(HH) {
        const BH = this.packing.indexOf(HH);
        if (!(BH < 0)) try {
          HH.packed ??= (0, VH.c)(HH.text.text)
        } catch (rH) {
          var LH, AH;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", rH), this.packing.splice(BH, 1), null === (LH = this.journal) || void 0 === LH || LH.domTailDropped(HH.text.chunkIndex), null === (AH = HH.onQueued) || void 0 === AH || AH.call(HH)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(HH) {
        return this.journalWorks() && PH(HH)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: HH,
            packed: BH,
            onQueued: LH
          } = this.packing.shift();
          this.enqueue(HH.chunkIndex, UH(HH, BH)), null === LH || void 0 === LH || LH()
        }
      }
      enqueue(HH, BH) {
        var LH;
        if (null === BH) return void(null === (LH = this.journal) || void 0 === LH || LH.domTailDropped(HH));
        const {
          startMs: AH,
          endMs: rH,
          summary: SH,
          holdsSnapshot: hH
        } = BH, tH = BH.bytes.buffer, zH = {
          startMs: AH,
          endMs: rH,
          byteLength: tH.byteLength,
          summary: SH
        }, CH = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: tH,
          meta: {
            type: "dom",
            chunk: zH
          },
          dropLast: hH
        });
        var EH, XH;
        null === CH ? null === (EH = this.journal) || void 0 === EH || EH.domTailDropped(HH) : null === (XH = this.journal) || void 0 === XH || XH.domQueued(CH, tH, zH, HH)
      }
    }
    var bH = LH(40725);
    var kH = LH(40732),
      mH = LH(3292),
      oH = LH(81),
      IH = LH(92),
      fH = LH(30),
      lH = LH(5096);
    const KH = {
      logStats: !1
    };

    function cH(HH) {
      const BH = fH.e.getItem(HH);
      return "number" === typeof BH && Number.isFinite(BH) ? BH : null
    }

    function eH(HH, BH, LH, AH) {
      const rH = fH.e.getItem(HH);
      return rH === BH ? [(0, oH.getOperatingSystem)()] : rH === LH ? [] : AH
    }

    function qH(HH) {
      const BH = fH.e.getItem("replayGrab");
      return "stream" === BH ? [(0, mH.c)()] : "videoFrame" === BH || "bitmap" === BH ? [] : HH
    }
    const gH = "/v1/release",
      NH = zH;
    var RH = LH(1148),
      jH = LH(40738),
      nH = LH(40745),
      FH = LH(40748);

    function DH(HH) {
      return `replayJoiner/${HH}`
    }
    class wH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jH.g;
        this.baseUrl = HH, this.keepalive = BH
      }
      postPart(HH, BH) {
        const LH = (0, nH.c)(HH, BH),
          AH = 15e3 + (rH = LH.size, Math.ceil(rH / 16384 * 1e3));
        var rH;
        return this.post("/v1/part", LH, LH.size, AH, HH.sequence)
      }
      finish(HH) {
        const BH = JSON.stringify(HH);
        return this.post("/v1/finish", BH, (0, jH.h)(BH), 3e4, HH.sequence)
      }
      release(HH) {
        return !this.keepalive.isInFlight(DH(HH.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${gH}`, JSON.stringify(HH))
      }
      async post(HH, BH, LH, AH, rH) {
        const SH = `${this.baseUrl}${HH}`,
          hH = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: BH,
            signal: (0, RH.u)(AH)
          },
          tH = LH <= jH.c ? await this.keepalive.fetch(SH, hH, LH, DH(rH)) : await fetch(SH, hH);
        if (!tH.ok) throw new FH.c(`Part joiner ${HH} failed with ${tH.status}`, tH.status);
        return await tH.json()
      }
    }

    function ZH(HH) {
      return {
        releaseUrl: `${HH.url}${gH}`,
        token: HH.token,
        relay: {
          url: `${HH.url}/v1/relay`,
          maxBytes: NH
        }
      }
    }
    var dH = LH(7057),
      aH = LH(40751),
      sH = LH(40756),
      JH = LH(40760);

    function iH() {
      return (0, kH.c)().manifestUrl
    }
    const pH = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class yH {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = BH, this.sendEnabled = LH, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...pH,
          ...AH
        };
        const rH = Math.round((0, aH.d)());
        this.manifest = {
          recordingId: HH,
          startedAtMs: rH,
          endedAtMs: rH,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(HH, BH, LH) {
        const AH = {
            sequence: HH,
            ...BH,
            startMs: Math.round(BH.startMs),
            endMs: Math.round(BH.endMs),
            ...null === LH ? {} : {
              parts: LH
            }
          },
          rH = this.manifest.videoSegments.findIndex((BH => BH.sequence === HH)); - 1 === rH ? this.manifest.videoSegments.push(AH) : this.manifest.videoSegments[rH] = AH, this.sendSoon()
      }
      setStill(HH, BH) {
        var LH, AH;
        HH > (null !== (LH = null === (AH = this.manifest.still) || void 0 === AH ? void 0 : AH.atMs) && void 0 !== LH ? LH : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(HH),
          sequence: BH
        }, this.sendSoon())
      }
      addTelemetrySegment(HH, BH, LH) {
        this.manifest.telemetrySegments.push({
          sequence: HH,
          startMs: Math.round(BH),
          endMs: Math.round(LH)
        }), this.sendSoon()
      }
      addDomSegment(HH) {
        this.pendingDom.add(HH), this.sendSoon()
      }
      addCreatorGrant(HH, BH) {
        this.creatorGrants.set(HH, BH)
      }
      gameJoined(HH) {
        this.gameLeft(), this.manifest.games.push({
          ...HH,
          joinedAtMs: Math.round((0, aH.d)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(HH) {
        const BH = this.manifest.games.at(-1);
        return !(!BH || (null === HH ? null !== BH.leftAtMs : BH.gameNameWithVariation !== HH)) && (BH.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(HH) {
        const BH = this.manifest.games.at(-1);
        BH && null === BH.leftAtMs && (BH[HH] = !0)
      }
      updateCurrentStay(HH) {
        var BH, LH, AH;
        const rH = this.manifest.games.at(-1);
        if (!rH || null !== rH.leftAtMs) return !1;
        const SH = (0, dH.m)(rH.furthestStep, HH.furthestStep),
          hH = Math.max(null !== (BH = rH.unboundKeyPresses) && void 0 !== BH ? BH : 0, null !== (LH = HH.unboundKeyPresses) && void 0 !== LH ? LH : 0);
        return (SH !== rH.furthestStep || hH !== (null !== (AH = rH.unboundKeyPresses) && void 0 !== AH ? AH : 0)) && (void 0 !== SH && (rH.furthestStep = SH), hH > 0 && (rH.unboundKeyPresses = hH), !0)
      }
      gameLeft() {
        const HH = this.manifest.games.at(-1);
        HH && null === HH.leftAtMs && (HH.leftAtMs = Math.round((0, aH.d)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(HH) {
        this.schedule(1e3, HH)
      }
      send() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var BH;
        if (this.sending) return void(this.queuedSend = HB(null !== (BH = this.queuedSend) && void 0 !== BH ? BH : [], HH));
        const LH = this.prepareSend(HH);
        null !== LH && (this.sending = !0, this.postInTurn(LH).then((HH => {
          this.sending = !1, this.retries = "retryLater" === HH ? this.retries + 1 : 0;
          const BH = this.queuedSend;
          null !== BH ? (this.queuedSend = null, this.send(BH)) : "retryLater" === HH && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: LH
          }
          of null !== (BH = this.prepareSend(HH)) && void 0 !== BH ? BH : []) {
          var BH;
          jH.g.sendBeacon(iH(), JSON.stringify(LH)) || (0, sH.e)(iH(), LH)
        }
      }
      async postInTurn(HH) {
        for (const {
            request: BH,
            items: LH
          }
          of HH) {
          const HH = await (0, sH.e)(iH(), BH);
          if ("retryLater" === HH) return HH;
          for (const BH of LH) BH.ack("uploaded" === HH);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(HH, BH) {
        const LH = Date.now() + HH;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= LH) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const AH = setTimeout((() => {
          this.send(BH())
        }), HH);
        this.sendTimer = {
          timer: AH,
          dueMs: LH
        }
      }
      prepareSend(HH) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, aH.d)());
        const BH = this.pendingItems(HH);
        this.options.onSend({
          ...this.manifest,
          games: BH.flatMap((HH => "games" === HH.list ? [HH.value] : []))
        });
        const {
          recordingId: LH,
          startedAtMs: AH,
          endedAtMs: rH,
          still: SH
        } = this.manifest, hH = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: LH,
            startedAtMs: AH,
            endedAtMs: rH,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === SH ? {} : {
              still: SH
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, JH.e)(hH, BH)
      }
      pendingItems(HH) {
        const BH = [];
        for (const AH of this.creatorGrants.values()) this.ackedGrants.has(AH) || BH.push({
          list: "creatorGrants",
          value: AH,
          ack: () => {
            this.ackedGrants.add(AH)
          }
        });
        for (const AH of this.manifest.games) {
          const HH = JSON.stringify(AH);
          this.ackedGames.get(AH) !== HH && BH.push({
            list: "games",
            value: {
              ...AH
            },
            ack: () => {
              this.ackedGames.set(AH, HH)
            }
          })
        }
        for (const AH of this.manifest.videoSegments) this.ackedVideo.get(AH.sequence) !== AH && BH.push({
          list: "videoSegments",
          value: AH,
          ack: HH => {
            this.ackedVideo.set(AH.sequence, AH), HH && this.options.onListed({
              list: "videoSegments",
              value: AH
            })
          }
        });
        const LH = new Set;
        for (const AH of this.manifest.telemetrySegments) LH.add(AH.sequence), this.ackedTelemetry.has(AH) || BH.push({
          list: "telemetrySegments",
          value: AH,
          ack: HH => {
            this.ackedTelemetry.add(AH), HH && this.options.onListed({
              list: "telemetrySegments",
              value: AH
            })
          }
        });
        for (const AH of this.pendingDom) BH.push({
          list: "domSegments",
          value: AH,
          ack: HH => {
            this.pendingDom.delete(AH), HH && this.options.onListed({
              list: "domSegments",
              value: AH
            })
          }
        });
        for (const AH of HB([], HH)) LH.has(AH.sequence) || BH.push({
          list: "telemetrySegments",
          value: AH,
          ack: () => {}
        });
        return BH
      }
    }

    function HB(HH, BH) {
      const LH = [...HH];
      for (const AH of BH) LH.some((HH => HH.sequence === AH.sequence)) || LH.push({
        sequence: AH.sequence,
        startMs: Math.round(AH.startMs),
        endMs: Math.round(AH.endMs)
      });
      return LH
    }
    var BB = LH(40735),
      LB = LH(5111);

    function AB(HH) {
      return {
        ...HH,
        videoSegments: [],
        telemetrySegments: [],
        games: HH.games.map((HH => ({
          ...HH
        })))
      }
    }
    class rB {
      constructor(HH, BH, LH, AH) {
        var rH;
        this.journal = HH, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: BH.recordingId,
          uploadToken: BH.uploadToken,
          expiresAtMs: BH.expiresAtMs,
          nextVideoSequence: 0,
          manifest: AB(LH),
          endpoints: AH,
          lateUploadUntilMs: BH.expiresAtMs + BB.b,
          ...void 0 === BH.partJoiner ? {} : {
            partJoiner: ZH(BH.partJoiner)
          }
        }, null === (rH = navigator.locks) || void 0 === rH || rH.request((0, LB.u)(BH.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(HH) {
        this.record.manifest = AB(HH), this.putRecording()
      }
      videoQueued(HH, BH) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, BH + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), HH, BH)
      }
      videoPartLanded(HH, BH, LH) {
        this.landedVideo.set(HH, {
          segmentId: HH,
          ...BH
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: HH,
          ...BH
        }, LH)
      }
      telemetryQueued(HH, BH, LH, AH) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: HH,
          startMs: LH,
          endMs: AH,
          bytes: BH
        })
      }
      videoUploaded(HH) {
        this.journal.removeVideoChunks(this.record.recordingId, HH)
      }
      videoSettled(HH) {
        this.landedVideo.delete(HH), this.journal.removeVideo(this.record.recordingId, HH)
      }
      telemetryLanded(HH, BH, LH, AH) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: HH,
          startMs: LH,
          endMs: AH,
          bytes: BH,
          landed: !0
        })
      }
      telemetrySettled(HH) {
        this.journal.removeTelemetry(this.record.recordingId, HH)
      }
      domQueued(HH, BH, LH, AH) {
        var rH;
        this.record.nextDomSequence = Math.max(null !== (rH = this.record.nextDomSequence) && void 0 !== rH ? rH : 0, HH + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: HH,
          chunk: LH,
          bytes: BH
        }, AH)
      }
      domTail(HH) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...HH
        })
      }
      domTailDropped(HH) {
        this.journal.removeDomTail(this.record.recordingId, HH)
      }
      domLanded(HH, BH) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: HH,
          chunk: BH,
          bytes: null
        })
      }
      domSettled(HH) {
        this.journal.removeDom(this.record.recordingId, HH)
      }
      setMarker() {
        fH.e.setItem(LB.m, !0)
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
    class SB {
      constructor(HH) {
        this.deps = HH, this.pageHiding = !1
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(HH) {
        document.addEventListener("visibilitychange", (() => {
          const HH = document.hidden;
          this.deps.writeEvent(HH ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: HH
          }), HH && (this.deps.flushTelemetry(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording())
        }), {
          signal: HH
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: HH
        }), window.addEventListener("pagehide", (HH => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.deps.flushTelemetry(), this.deps.stills.beacon(), this.sendManifest(), HH.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: HH
        })
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((HH => {
          let {
            sequence: BH,
            meta: LH
          } = HH;
          return "telemetry" === LH.type ? [{
            sequence: BH,
            startMs: LH.startMs,
            endMs: LH.endMs
          }] : []
        }))
      }
    }
    var hB = LH(37014),
      tB = LH.n(hB);

    function zB() {
      return tB()('/*! For license information please see sessionReplayVideo.worker.331ace5a.worker.js.LICENSE.txt */\n(()=>{var HH={12:()=>{}},BH={};function LH(AH){var rH=BH[AH];if(void 0!==rH)return rH.exports;var SH=BH[AH]={exports:{}};return HH[AH](SH,SH.exports,LH),SH.exports}(()=>{var HH,BH=Object.getPrototypeOf?HH=>Object.getPrototypeOf(HH):HH=>HH.__proto__;LH.t=function(AH,rH){if(1&rH&&(AH=this(AH)),8&rH)return AH;if("object"===typeof AH&&AH){if(4&rH&&AH.__esModule)return AH;if(16&rH&&"function"===typeof AH.then)return AH}var SH=Object.create(null);LH.r(SH);var hH={};HH=HH||[null,BH({}),BH([]),BH(BH)];for(var tH=2&rH&&AH;"object"==typeof tH&&!~HH.indexOf(tH);tH=BH(tH))Object.getOwnPropertyNames(tH).forEach((HH=>hH[HH]=()=>AH[HH]));return hH.default=()=>AH,LH.d(SH,hH),SH}})(),LH.d=(HH,BH)=>{for(var AH in BH)LH.o(BH,AH)&&!LH.o(HH,AH)&&Object.defineProperty(HH,AH,{enumerable:!0,get:BH[AH]})},LH.o=(HH,BH)=>Object.prototype.hasOwnProperty.call(HH,BH),LH.r=HH=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(HH,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(HH,"__esModule",{value:!0})};const AH="bloxdSessionReplayTails";const rH=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function SH(HH){return new Promise(((BH,LH)=>{HH.onsuccess=()=>{BH(HH.result)},HH.onerror=()=>{LH(HH.error)}}))}function hH(HH){return new Promise(((BH,LH)=>{HH.oncomplete=()=>{BH()},HH.onerror=()=>{LH(HH.error)},HH.onabort=()=>{var BH;LH(null!==(BH=HH.error)&&void 0!==BH?BH:new Error("IndexedDB transaction aborted"))}}))}function tH(HH){return IDBKeyRange.bound([HH],[HH,[]])}function zH(HH,BH){return IDBKeyRange.bound([HH,BH],[HH,BH,[]])}class CH{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(HH){this.write(["recordings"],(BH=>{BH.objectStore("recordings").put(HH)}))}putVideoSequence(HH,BH,LH){this.write(["recordings","videoSequences"],(AH=>{AH.objectStore("recordings").put(HH),AH.objectStore("videoSequences").put({recordingId:HH.recordingId,segmentId:BH,sequence:LH})}))}appendVideo(HH,BH){this.write(["videoHeaders","videoChunks"],(LH=>{LH.objectStore("videoHeaders").put(HH);const AH=LH.objectStore("videoChunks");for(const HH of BH)AH.put(HH)}))}putVideoProgress(HH,BH){this.write(["videoProgress","videoChunks"],(LH=>{if(LH.objectStore("videoProgress").put(HH),BH>0){const{recordingId:AH,segmentId:rH}=HH;LH.objectStore("videoChunks").delete(IDBKeyRange.bound([AH,rH,0],[AH,rH,BH],!1,!0))}}))}removeVideoChunks(HH,BH){this.write(["videoChunks"],(LH=>{LH.objectStore("videoChunks").delete(zH(HH,BH))}))}removeVideo(HH,BH){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(LH=>{LH.objectStore("videoHeaders").delete([HH,BH]),LH.objectStore("videoChunks").delete(zH(HH,BH)),LH.objectStore("videoSequences").delete([HH,BH]),LH.objectStore("videoProgress").delete([HH,BH])}))}putTelemetry(HH){this.write(["telemetry"],(BH=>{BH.objectStore("telemetry").put(HH)}))}removeTelemetry(HH,BH){this.write(["telemetry"],(LH=>{LH.objectStore("telemetry").delete([HH,BH])}))}putDom(HH){this.write(["dom"],(BH=>{BH.objectStore("dom").put(HH)}))}queueDom(HH,BH,LH){this.write(["recordings","dom","domTail"],(AH=>{AH.objectStore("recordings").put(HH),AH.objectStore("dom").put(BH),AH.objectStore("domTail").delete(zH(BH.recordingId,LH))}),(AH=>{console.warn(`Session replay couldn\'t journal page recording chunk ${BH.sequence}; a closing tab may lose it.`,AH),this.write(["recordings","domTail"],(AH=>{AH.objectStore("recordings").put(HH),AH.objectStore("domTail").delete(zH(BH.recordingId,LH))}))}))}putDomTail(HH){this.tailRecordings.add(HH.recordingId),this.write(["domTail"],(BH=>{BH.objectStore("domTail").put(HH)}))}removeDomTail(HH,BH){this.write(["domTail"],(LH=>{LH.objectStore("domTail").delete(zH(HH,BH))}))}removeDom(HH,BH){this.write(["dom"],(LH=>{LH.objectStore("dom").delete([HH,BH])}))}async listRecordings(){const HH=await this.open();return await SH(HH.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(HH){const BH=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),LH=tH(HH.recordingId),AH=HH=>SH(BH.objectStore(HH).getAll(LH)),[rH,hH,zH,CH,EH,XH,GH]=await Promise.all([AH("videoHeaders"),AH("videoChunks"),AH("videoSequences"),AH("videoProgress"),AH("telemetry"),AH("dom"),AH("domTail")]);return{recording:HH,telemetry:EH,dom:XH,domTails:GH,video:rH.map((HH=>{var BH,LH,AH;return{header:HH,sequence:null!==(BH=null===(LH=zH.find((BH=>BH.segmentId===HH.segmentId)))||void 0===LH?void 0:LH.sequence)&&void 0!==BH?BH:null,progress:null!==(AH=CH.find((BH=>BH.segmentId===HH.segmentId)))&&void 0!==AH?AH:null,chunks:hH.filter((BH=>BH.segmentId===HH.segmentId))}}))}}async deleteRecording(HH){const BH=(await this.open()).transaction([...rH],"readwrite");BH.objectStore("recordings").delete(HH);for(const LH of rH.slice(1))BH.objectStore(LH).delete(tH(HH));await hH(BH)}async forgetSent(HH,BH){const LH=(await this.open()).transaction([...rH],"readwrite"),{recordingId:AH}=HH;LH.objectStore("recordings").put(HH);for(const rH of BH.videoSegmentIds)LH.objectStore("videoHeaders").delete([AH,rH]),LH.objectStore("videoChunks").delete(zH(AH,rH)),LH.objectStore("videoSequences").delete([AH,rH]),LH.objectStore("videoProgress").delete([AH,rH]);for(const rH of BH.telemetrySequences)LH.objectStore("telemetry").delete([AH,rH]);for(const rH of BH.domSequences)LH.objectStore("dom").delete([AH,rH]);for(const rH of BH.domTailChunks)LH.objectStore("domTail").delete(zH(AH,rH));await hH(LH)}write(HH,BH){let LH=arguments.length>2&&void 0!==arguments[2]?arguments[2]:HH=>{this.fail(HH)};if(this.failed)return;const AH=AH=>{try{var rH;const SH=AH.transaction(HH,"readwrite");BH(SH),null===(rH=SH.commit)||void 0===rH||rH.call(SH),hH(SH).catch(LH)}catch(SH){LH(SH)}};null===this.db?this.open().then(AH,(HH=>{this.fail(HH)})):AH(this.db)}fail(HH){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",HH),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const HH=HH=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",HH)};try{const BH=this.db.transaction(["domTail"],"readwrite");for(const HH of this.tailRecordings)BH.objectStore("domTail").delete(tH(HH));hH(BH).catch(HH)}catch(BH){HH(BH)}}open(){return this.opening??=new Promise(((HH,BH)=>{const LH=indexedDB.open(AH,4);LH.onupgradeneeded=HH=>{const BH=LH.result;HH.oldVersion<1&&(BH.createObjectStore("recordings",{keyPath:"recordingId"}),BH.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),BH.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),BH.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),BH.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),HH.oldVersion<2&&BH.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),HH.oldVersion<3&&BH.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),BH.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let rH=!1;LH.onblocked=()=>{rH=!0,BH(new Error("An older tab holds the upload journal at an earlier version"))},LH.onsuccess=()=>{rH?LH.result.close():(this.db=LH.result,this.db.onversionchange=()=>{var HH;this.dropTails(),null===(HH=this.db)||void 0===HH||HH.close(),this.db=null,this.opening=null},HH(LH.result))},LH.onerror=()=>{BH(LH.error)}})),this.opening}}const EH=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class XH{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return EH[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(HH){this.firstSampleMs??=HH.nowMs;const BH=null!==HH.pingMs&&HH.pingMs>300,LH=HH.nowMs-this.firstSampleMs>=3e4;LH&&(null!==HH.gameFps&&HH.gameFps<24||BH)?this.gameStrugglingSinceMs??=HH.nowMs:this.gameStrugglingSinceMs=null,LH&&HH.encoderBackpressureDrops>0?this.backpressureSinceMs??=HH.nowMs:this.backpressureSinceMs=null;const AH=null!==this.backpressureSinceMs&&HH.nowMs-this.backpressureSinceMs>=3e3,rH=AH||null!==this.gameStrugglingSinceMs&&HH.nowMs-this.gameStrugglingSinceMs>=1e4,SH=this.steppedDownForGameFps?45:24,hH=0===HH.encoderBackpressureDrops&&!BH&&(null===HH.gameFps||HH.gameFps>=SH);return rH?(this.healthySinceMs=null,this.level<EH.length-1&&HH.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=HH.nowMs,this.lastChangeReason=AH?"encoderBackpressure":BH?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):hH&&0!==this.level?(this.healthySinceMs??=HH.nowMs,HH.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=HH.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function GH(HH,BH){return HH.width===BH.width&&HH.height===BH.height}function YH(HH){return Math.max(2,2*Math.floor(HH/2))}function uH(HH){return Math.ceil(HH.width/16)*Math.ceil(HH.height/16)}function QH(HH,BH,LH){const AH=HH.bitrate*uH(BH)/HH.maxMacroblocks;return LH*Math.min(HH.bitrate,Math.max(HH.minBitrate,AH/LH))}class WH{constructor(HH){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/HH}setMaxFps(HH){this.intervalMs=1e3/HH}shouldKeep(HH){return!(HH<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=HH-this.nextDueMs>this.intervalMs?HH+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const MH=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],xH=["variable","constant"],vH=["realtime","quality"],PH=["quality","realtime"];class TH{constructor(){this.canvas=null,this.context=null}scale(HH,BH){if(HH.displayWidth===BH.width&&HH.displayHeight===BH.height)return HH;return this.contextFor(BH).drawImage(HH,0,0,BH.width,BH.height),new VideoFrame(this.canvas,{timestamp:HH.timestamp,alpha:"discard"})}contextFor(HH){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(HH.width,HH.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===HH.width&&this.canvas.height===HH.height||(this.canvas.width=HH.width,this.canvas.height=HH.height),this.context}}const UH=[...[.7,.6,.5,.42,.35].map((HH=>({width:640,quality:HH}))),{width:480,quality:.35},{width:360,quality:.35}],VH=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class OH{constructor(HH,BH){this.steps=HH,this.targetBytes=BH,this.index=0}get step(){return this.steps[this.index]}record(HH){HH>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):HH<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class bH{constructor(HH){this.post=HH,this.full=new OH(UH,28e3),this.small=new OH(VH,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(HH,BH){if(!(this.failed||this.encoding||HH.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=HH.timestamp;try{const LH=kH(HH,HH.displayWidth,HH.displayHeight,this.full.step.width),AH=kH(LH,LH.width,LH.height,this.small.step.width);this.encoding=!0,this.encode(LH,AH,BH).finally((()=>{this.encoding=!1}))}catch(LH){this.fail(LH)}}}async encode(HH,BH,LH){try{const[AH,rH]=await Promise.all([HH.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),BH.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(AH.size),this.small.record(rH.size);const SH=await AH.arrayBuffer(),hH=rH.size<=8192?await rH.arrayBuffer():null;this.post({type:"still",bytes:SH,small:hH,atMs:LH},null===hH?[SH]:[SH,hH])}catch(AH){this.fail(AH)}}fail(HH){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",HH)}}function kH(HH,BH,LH,AH){const rH=Math.min(AH,BH),SH=Math.max(1,Math.round(LH*rH/BH)),hH=new OffscreenCanvas(rH,SH),tH=hH.getContext("2d");if(null===tH)throw new Error("no 2D context");return tH.drawImage(HH,0,0,rH,SH),hH}let mH=Date.now()-performance.now();function oH(){const HH=performance.now(),BH=Date.now();return Math.abs(BH-(HH+mH))>20&&(mH=BH-HH),HH+mH}function IH(HH){if(!HH)throw new Error("Assertion failed.")}const fH=Math.PI/180,lH=(Math.PI,[1,0,0,0,1,0,0,0,1]),KH=HH=>{const BH=HH*fH,LH=Math.round(Math.cos(BH)),AH=Math.round(Math.sin(BH));return[LH,AH,0,-AH,LH,0,0,0,1]},cH=(HH,BH)=>[1,0,0,0,1,0,HH,BH,1],eH=(HH,BH)=>{const LH=new Array(9);for(let AH=0;AH<3;AH++)for(let rH=0;rH<3;rH++)LH[3*AH+rH]=HH[3*AH]*BH[rH]+HH[3*AH+1]*BH[3+rH]+HH[3*AH+2]*BH[6+rH];return LH},qH=HH=>HH&&HH[HH.length-1],gH=HH=>HH>=0&&HH<2**32,NH=HH=>{let BH=0;for(;0===HH.readBits(1)&&BH<32;)BH++;if(BH>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<BH)-1+HH.readBits(BH)},RH=HH=>{const BH=NH(HH);return 0===(1&BH)?-(BH>>1):BH+1>>1},jH=HH=>HH.constructor===Uint8Array?HH:ArrayBuffer.isView(HH)?new Uint8Array(HH.buffer,HH.byteOffset,HH.byteLength):new Uint8Array(HH),nH=HH=>HH.constructor===DataView?HH:ArrayBuffer.isView(HH)?new DataView(HH.buffer,HH.byteOffset,HH.byteLength):new DataView(HH),FH="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let HH=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const BH=new Uint8Array(3*HH.length);let LH=0;for(let AH=0;AH<HH.length;AH++){let rH=HH.charCodeAt(AH);if(rH<128)BH[LH++]=rH;else if(rH<2048)BH[LH++]=192|rH>>6,BH[LH++]=128|63&rH;else if(rH<55296||rH>57343)BH[LH++]=224|rH>>12,BH[LH++]=128|rH>>6&63,BH[LH++]=128|63&rH;else{const SH=AH+1<HH.length?HH.charCodeAt(AH+1):0;rH<56320&&SH>=56320&&SH<=57343?(rH=65536+(rH-55296<<10)+(SH-56320),AH++,BH[LH++]=240|rH>>18,BH[LH++]=128|rH>>12&63,BH[LH++]=128|rH>>6&63,BH[LH++]=128|63&rH):(BH[LH++]=239,BH[LH++]=191,BH[LH++]=189)}}return BH.slice(0,LH)}},DH=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new FH),wH={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},ZH={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},dH={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},aH=HH=>!HH||null==HH.primaries&&null==HH.transfer&&null==HH.matrix&&null==HH.fullRange,sH=HH=>HH instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&HH instanceof SharedArrayBuffer||ArrayBuffer.isView(HH);class JH{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let HH;const BH=new Promise((BH=>{let LH=!1;HH=()=>{LH||(BH(),this.pending--,LH=!0)}})),LH=this.currentPromise;return this.currentPromise=BH,this.pending++,await LH,HH}}const iH=()=>{let HH,BH;return{promise:new Promise(((LH,AH)=>{HH=LH,BH=AH})),resolve:HH,reject:BH}},pH=HH=>{throw new Error(`Unexpected value: ${HH}`)},yH=(HH,BH,LH,AH)=>{LH>>>=0,LH&=16777215,AH?(HH.setUint8(BH,255&LH),HH.setUint8(BH+1,LH>>>8&255),HH.setUint8(BH+2,LH>>>16&255)):(HH.setUint8(BH,LH>>>16&255),HH.setUint8(BH+1,LH>>>8&255),HH.setUint8(BH+2,255&LH))},HB="und",BB=HH=>{let BH=0;for(;0!==HH;)HH&=HH-1,BH++;return BH},LB=/^[a-z]{3}$/,AB=1e6*(1+Number.EPSILON);const rB=(async()=>{})().constructor,SB=HH=>HH instanceof rB||HH instanceof Promise||"function"===typeof HH?.then,hB=function*(HH){for(const BH in HH){const LH=HH[BH];void 0!==LH&&(yield{key:BH,value:LH})}},tB=HH=>"number"===typeof HH&&!Number.isNaN(HH),zB=HH=>{IH(Number.isInteger(HH.num)),IH(Number.isInteger(HH.den)),IH(0!==HH.den);let BH=Math.abs(HH.num),LH=Math.abs(HH.den);for(;0!==LH;){const HH=BH%LH;BH=LH,LH=HH}const AH=BH||1;return{num:HH.num/AH,den:HH.den/AH}};new Map,new Map;const CB=HH=>Array.isArray(HH)?HH:[HH];class EB{constructor(){this._listeners=new Map}on(HH,BH,LH){this._listeners.has(HH)||this._listeners.set(HH,new Set);const AH={EX:BH,once:LH?.once??!1};return this._listeners.get(HH).add(AH),()=>{this._listeners.get(HH)?.delete(AH)}}_emit(){for(var HH=arguments.length,BH=new Array(HH),LH=0;LH<HH;LH++)BH[LH]=arguments[LH];const[AH,rH]=BH,SH=this._listeners.get(AH);if(SH)for(const tH of SH){try{tH.EX(rH)}catch(hH){console.error(hH)}tH.once&&SH.delete(tH)}}}const XB=HH=>null!==HH&&"object"===typeof HH&&Object.getPrototypeOf(HH)===Object.prototype&&Object.values(HH).every((HH=>"string"===typeof HH));class GB{constructor(HH,BH){if(this.data=HH,this.mimeType=BH,!(HH instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof BH)throw new TypeError("mimeType must be a string.")}}class YB{constructor(HH,BH,LH,AH){if(this.data=HH,this.mimeType=BH,this.name=LH,this.description=AH,!(HH instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==BH&&"string"!==typeof BH)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==LH&&"string"!==typeof LH)throw new TypeError("name, when provided, must be a string.");if(void 0!==AH&&"string"!==typeof AH)throw new TypeError("description, when provided, must be a string.")}}class uB{constructor(HH){this.bytes=HH,this.pos=0}seekToByte(HH){this.pos=8*HH}readBit(){const HH=Math.floor(this.pos/8),BH=this.bytes[HH]??0,LH=7-(7&this.pos),AH=(BH&1<<LH)>>LH;return this.pos++,AH}readBits(HH){if(1===HH)return this.readBit();let BH=0;for(let LH=0;LH<HH;LH++)BH<<=1,BH|=this.readBit();return BH}writeBits(HH,BH){const LH=this.pos+HH;for(let AH=this.pos;AH<LH;AH++){const HH=Math.floor(AH/8);let rH=this.bytes[HH];const SH=7-(7&AH);rH&=~(1<<SH),rH|=(BH&1<<LH-AH-1)>>LH-AH-1<<SH,this.bytes[HH]=rH}this.pos=LH}copyBits(HH,BH){let LH=0;for(;LH<HH-7;LH+=8)this.writeBits(8,BH.readBits(8));const AH=HH-LH;AH>0&&this.writeBits(AH,BH.readBits(AH))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const HH=this.pos/8,BH=this.bytes[HH]??0;return this.pos+=8,BH}skipBits(HH){this.pos+=HH}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const HH=new uB(this.bytes);return HH.pos=this.pos,HH}}const QB=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],WB=[-1,1,2,3,4,5,6,8],MB=HH=>{const BH=5===HH.objectType||29===HH.objectType,LH=29===HH.objectType,AH=BH?HH.outputSampleRate/2:HH.outputSampleRate,rH=LH?1:HH.outputNumberOfChannels,SH=WB.indexOf(rH);if(-1===SH)throw new TypeError(`Unsupported number of channels: ${HH.outputNumberOfChannels}`);let hH=16;HH.objectType>=32&&(hH+=6),15===PB(AH)&&(hH+=24),BH&&(hH+=9,15===PB(HH.outputSampleRate)&&(hH+=24));const tH=Math.ceil(hH/8),zH=new Uint8Array(tH),CH=new uB(zH);return xB(CH,HH.objectType),vB(CH,AH),CH.writeBits(4,SH),BH&&(vB(CH,HH.outputSampleRate),xB(CH,2)),CH.writeBits(3,0),zH},xB=(HH,BH)=>{BH<32?HH.writeBits(5,BH):(HH.writeBits(5,31),HH.writeBits(6,BH-32))},vB=(HH,BH)=>{const LH=PB(BH);HH.writeBits(4,LH),15===LH&&HH.writeBits(24,BH)},PB=HH=>{const BH=QB.indexOf(HH);return-1===BH?15:BH};var TB;!function(HH){HH[HH.Silent=0]="Silent",HH[HH.Errors=1]="Errors",HH[HH.Warnings=2]="Warnings",HH[HH.Info=3]="Info"}(TB||(TB={}));class UB{constructor(){}static get level(){return UB._level}static set level(HH){if(HH!==TB.Silent&&HH!==TB.Errors&&HH!==TB.Warnings&&HH!==TB.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");UB._level=HH}static get _emitter(){return UB._emitterInstance??=new EB}static on(HH,BH,LH){return UB._emitter.on(HH,BH,LH)}static _error(){for(var HH=arguments.length,BH=new Array(HH),LH=0;LH<HH;LH++)BH[LH]=arguments[LH];UB._emitter._emit("error",BH),UB._level>=TB.Errors&&console.error(...BH)}static _warn(){for(var HH=arguments.length,BH=new Array(HH),LH=0;LH<HH;LH++)BH[LH]=arguments[LH];UB._emitter._emit("warn",BH),UB._level>=TB.Warnings&&console.warn(...BH)}static _info(){for(var HH=arguments.length,BH=new Array(HH),LH=0;LH<HH;LH++)BH[LH]=arguments[LH];UB._emitter._emit("info",BH),UB._level>=TB.Info&&console.info(...BH)}}UB._level=TB.Info,UB._emitterInstance=null;const VB=[48e3,44100,32e3],OB=[24e3,22050,16e3],bB="Mediabunny v1.61.3";var kB,mB;!function(HH){HH[HH.NON_IDR_SLICE=1]="NON_IDR_SLICE",HH[HH.SLICE_DPA=2]="SLICE_DPA",HH[HH.SLICE_DPB=3]="SLICE_DPB",HH[HH.SLICE_DPC=4]="SLICE_DPC",HH[HH.IDR=5]="IDR",HH[HH.SEI=6]="SEI",HH[HH.SPS=7]="SPS",HH[HH.PPS=8]="PPS",HH[HH.AUD=9]="AUD",HH[HH.SPS_EXT=13]="SPS_EXT"}(kB||(kB={})),function(HH){HH[HH.RASL_N=8]="RASL_N",HH[HH.RASL_R=9]="RASL_R",HH[HH.BLA_W_LP=16]="BLA_W_LP",HH[HH.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",HH[HH.VPS_NUT=32]="VPS_NUT",HH[HH.SPS_NUT=33]="SPS_NUT",HH[HH.PPS_NUT=34]="PPS_NUT",HH[HH.AUD_NUT=35]="AUD_NUT",HH[HH.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",HH[HH.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(mB||(mB={}));const oB=function*(HH){let BH=0,LH=-1;for(;BH<HH.length-2;){const AH=HH.indexOf(0,BH);if(-1===AH||AH>=HH.length-2)break;BH=AH;let rH=0;BH+3<HH.length&&0===HH[BH+1]&&0===HH[BH+2]&&1===HH[BH+3]?rH=4:0===HH[BH+1]&&1===HH[BH+2]&&(rH=3),0!==rH?(-1!==LH&&BH>LH&&(yield{offset:LH,length:BH-LH}),LH=BH+rH,BH=LH):BH++}-1!==LH&&LH<HH.length&&(yield{offset:LH,length:HH.length-LH})},IB=HH=>31&HH,fB=HH=>{const BH=[],LH=HH.length;for(let AH=0;AH<LH;AH++)AH+2<LH&&0===HH[AH]&&0===HH[AH+1]&&3===HH[AH+2]?(BH.push(0,0),AH+=2):BH.push(HH[AH]);return new Uint8Array(BH)},lB=(new Uint8Array([0,0,0,1]),(HH,BH)=>{const LH=HH.reduce(((HH,LH)=>HH+BH+LH.byteLength),0),AH=new Uint8Array(LH);let rH=0;for(const SH of HH){const HH=new DataView(AH.buffer,AH.byteOffset,AH.byteLength);switch(BH){case 1:HH.setUint8(rH,SH.byteLength);break;case 2:HH.setUint16(rH,SH.byteLength,!1);break;case 3:yH(HH,rH,SH.byteLength,!1);break;case 4:HH.setUint32(rH,SH.byteLength,!1)}rH+=BH,AH.set(SH,rH),rH+=SH.byteLength}return AH}),KB=HH=>{try{const BH=[],LH=[],AH=[];for(const tH of oB(HH)){const rH=HH.subarray(tH.offset,tH.offset+tH.length),SH=IB(rH[0]);SH===kB.SPS?BH.push(rH):SH===kB.PPS?LH.push(rH):SH===kB.SPS_EXT&&AH.push(rH)}if(0===BH.length)return null;if(0===LH.length)return null;const rH=BH[0],SH=eB(rH);IH(null!==SH);const hH=100===SH.profileIdc||110===SH.profileIdc||122===SH.profileIdc||144===SH.profileIdc;return{configurationVersion:1,avcProfileIndication:SH.profileIdc,profileCompatibility:SH.constraintFlags,avcLevelIndication:SH.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:BH,pictureParameterSets:LH,chromaFormat:hH?SH.chromaFormatIdc:null,bitDepthLumaMinus8:hH?SH.bitDepthLumaMinus8:null,bitDepthChromaMinus8:hH?SH.bitDepthChromaMinus8:null,sequenceParameterSetExt:hH?AH:null}}catch(BH){return UB._error("Error building AVC Decoder Configuration Record:",BH),null}},cB={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},eB=HH=>{try{const BH=fB(HH),LH=new uB(BH);LH.skipBits(1),LH.skipBits(2);if(7!==LH.readBits(5))return null;const AH=LH.readAlignedByte(),rH=LH.readAlignedByte(),SH=LH.readAlignedByte();NH(LH);let hH=1,tH=0,zH=0,CH=0;if(100===AH||110===AH||122===AH||244===AH||44===AH||83===AH||86===AH||118===AH||128===AH){hH=NH(LH),3===hH&&(CH=LH.readBits(1)),tH=NH(LH),zH=NH(LH),LH.skipBits(1);if(LH.readBits(1))for(let HH=0;HH<(3!==hH?8:12);HH++){if(LH.readBits(1)){const BH=HH<6?16:64;let AH=8,rH=8;for(let HH=0;HH<BH;HH++){if(0!==rH){rH=(AH+RH(LH)+256)%256}AH=0===rH?AH:rH}}}}NH(LH);const EH=NH(LH);if(0===EH)NH(LH);else if(1===EH){LH.skipBits(1),RH(LH),RH(LH);const HH=NH(LH);for(let BH=0;BH<HH;BH++)RH(LH)}NH(LH),LH.skipBits(1);const XH=NH(LH),GH=NH(LH),YH=16*(XH+1),uH=16*(GH+1);let QH=YH,WH=uH;const MH=LH.readBits(1);MH||LH.skipBits(1),LH.skipBits(1);if(LH.readBits(1)){const HH=NH(LH),BH=NH(LH),AH=NH(LH),rH=NH(LH);let SH,tH;if(0===(0===CH?hH:0))SH=1,tH=2-MH;else{SH=3===hH?1:2,tH=(1===hH?2:1)*(2-MH)}QH-=SH*(HH+BH),WH-=tH*(AH+rH)}let xH=2,vH=2,PH=2,TH=0,UH={num:1,den:1},VH=null,OH=null,bH=null,kH=null;const mH=LH.pos;if(LH.readBits(1)){if(LH.readBits(1)){const HH=LH.readBits(8);if(255===HH)UH={num:LH.readBits(16),den:LH.readBits(16)};else{const BH=cB[HH];BH&&(UH=BH)}}LH.readBits(1)&&LH.skipBits(1);if(LH.readBits(1)){LH.skipBits(3),TH=LH.readBits(1);LH.readBits(1)&&(xH=LH.readBits(8),vH=LH.readBits(8),PH=LH.readBits(8))}LH.readBits(1)&&(NH(LH),NH(LH));LH.readBits(1)&&(LH.skipBits(32),LH.skipBits(32),LH.skipBits(1));const HH=LH.readBits(1);HH&&qB(LH);const BH=LH.readBits(1);BH&&qB(LH),(HH||BH)&&LH.skipBits(1),LH.skipBits(1),bH=LH.pos,kH=LH.readBits(1),kH&&(LH.skipBits(1),NH(LH),NH(LH),NH(LH),NH(LH),VH=NH(LH),OH=NH(LH))}if(null===VH){IH(null===OH);if(44!==AH&&86!==AH&&100!==AH&&110!==AH&&122!==AH&&244!==AH||!(16&rH)){const HH=XH+1,BH=(2-MH)*(GH+1),LH=uL.find((HH=>HH.level>=SH))??qH(uL),AH=Math.min(Math.floor(LH.maxDpbMbs/(HH*BH)),16);VH=AH,OH=AH}else VH=0,OH=0}return IH(null!==OH),{emulationUnpreventedBytes:BH,profileIdc:AH,constraintFlags:rH,levelIdc:SH,frameMbsOnlyFlag:MH,chromaFormatIdc:hH,bitDepthLumaMinus8:tH,bitDepthChromaMinus8:zH,codedWidth:YH,codedHeight:uH,displayWidth:QH,displayHeight:WH,pixelAspectRatio:UH,colourPrimaries:xH,matrixCoefficients:PH,transferCharacteristics:vH,fullRangeFlag:TH,numReorderFrames:VH,maxDecFrameBuffering:OH,vuiParametersFlagBitOffset:mH,bitstreamRestrictionFlagBitOffset:bH,bitstreamRestrictionFlag:kH}}catch(BH){return UB._error("Error parsing AVC SPS:",BH),null}},qB=HH=>{const BH=NH(HH);HH.skipBits(4),HH.skipBits(4);for(let LH=0;LH<=BH;LH++)NH(HH),NH(HH),HH.skipBits(1);HH.skipBits(5),HH.skipBits(5),HH.skipBits(5),HH.skipBits(5)},gB=HH=>HH>>1&63,NB=HH=>{try{const BH=[],LH=[],AH=[],rH=[];for(const zH of oB(HH)){const SH=HH.subarray(zH.offset,zH.offset+zH.length),hH=gB(SH[0]);hH===mB.VPS_NUT?BH.push(SH):hH===mB.SPS_NUT?LH.push(SH):hH===mB.PPS_NUT?AH.push(SH):hH!==mB.PREFIX_SEI_NUT&&hH!==mB.SUFFIX_SEI_NUT||rH.push(SH)}if(0===LH.length||0===AH.length)return null;const SH=(HH=>{try{const BH=new uB(fB(HH));BH.skipBits(16),BH.readBits(4);const LH=BH.readBits(3),AH=BH.readBits(1),{general_profile_space:rH,general_tier_flag:SH,general_profile_idc:hH,general_profile_compatibility_flags:tH,general_constraint_indicator_flags:zH,general_level_idc:CH}=RB(BH,LH);NH(BH);const EH=NH(BH);let XH=0;3===EH&&(XH=BH.readBits(1));const GH=NH(BH),YH=NH(BH);let uH=GH,QH=YH;if(BH.readBits(1)){const HH=NH(BH),LH=NH(BH),AH=NH(BH),rH=NH(BH);let SH=1,hH=1;const tH=0===XH?EH:0;1===tH?(SH=2,hH=2):2===tH&&(SH=2,hH=1),uH-=(HH+LH)*SH,QH-=(AH+rH)*hH}const WH=NH(BH),MH=NH(BH);NH(BH);const xH=BH.readBits(1);let vH=0;for(let HH=xH?0:LH;HH<=LH;HH++)NH(BH),vH=NH(BH),NH(BH);NH(BH),NH(BH),NH(BH),NH(BH),NH(BH),NH(BH),BH.readBits(1)&&BH.readBits(1)&&jB(BH),BH.skipBits(1),BH.skipBits(1),BH.readBits(1)&&(BH.skipBits(4),BH.skipBits(4),NH(BH),NH(BH),BH.skipBits(1));const PH=NH(BH);if(nB(BH,PH),BH.readBits(1)){const HH=NH(BH);for(let LH=0;LH<HH;LH++)NH(BH),BH.skipBits(1)}BH.skipBits(1),BH.skipBits(1);let TH=2,UH=2,VH=2,OH=0,bH=0,kH={num:1,den:1};if(BH.readBits(1)){const HH=DB(BH,LH);kH=HH.pixelAspectRatio,TH=HH.colourPrimaries,UH=HH.transferCharacteristics,VH=HH.matrixCoefficients,OH=HH.fullRangeFlag,bH=HH.minSpatialSegmentationIdc}return{displayWidth:uH,displayHeight:QH,pixelAspectRatio:kH,colourPrimaries:TH,transferCharacteristics:UH,matrixCoefficients:VH,fullRangeFlag:OH,maxDecFrameBuffering:vH+1,spsMaxSubLayersMinus1:LH,spsTemporalIdNestingFlag:AH,generalProfileSpace:rH,generalTierFlag:SH,generalProfileIdc:hH,generalProfileCompatibilityFlags:tH,generalConstraintIndicatorFlags:zH,generalLevelIdc:CH,chromaFormatIdc:EH,bitDepthLumaMinus8:WH,bitDepthChromaMinus8:MH,minSpatialSegmentationIdc:bH}}catch(BH){return UB._error("Error parsing HEVC SPS:",BH),null}})(LH[0]);if(!SH)return null;let hH=0;if(AH.length>0){const HH=AH[0],BH=new uB(fB(HH));BH.skipBits(16),NH(BH),NH(BH),BH.skipBits(1),BH.skipBits(1),BH.skipBits(3),BH.skipBits(1),BH.skipBits(1),NH(BH),NH(BH),RH(BH),BH.skipBits(1),BH.skipBits(1),BH.readBits(1)&&NH(BH),RH(BH),RH(BH),BH.skipBits(1),BH.skipBits(1),BH.skipBits(1),BH.skipBits(1);const LH=BH.readBits(1),rH=BH.readBits(1);hH=LH||rH?LH&&!rH?2:!LH&&rH?3:0:0}const tH=[...BH.length?[{arrayCompleteness:1,nalUnitType:mB.VPS_NUT,nalUnits:BH}]:[],...LH.length?[{arrayCompleteness:1,nalUnitType:mB.SPS_NUT,nalUnits:LH}]:[],...AH.length?[{arrayCompleteness:1,nalUnitType:mB.PPS_NUT,nalUnits:AH}]:[],...rH.length?[{arrayCompleteness:1,nalUnitType:gB(rH[0][0]),nalUnits:rH}]:[]];return{configurationVersion:1,generalProfileSpace:SH.generalProfileSpace,generalTierFlag:SH.generalTierFlag,generalProfileIdc:SH.generalProfileIdc,generalProfileCompatibilityFlags:SH.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:SH.generalConstraintIndicatorFlags,generalLevelIdc:SH.generalLevelIdc,minSpatialSegmentationIdc:SH.minSpatialSegmentationIdc,parallelismType:hH,chromaFormatIdc:SH.chromaFormatIdc,bitDepthLumaMinus8:SH.bitDepthLumaMinus8,bitDepthChromaMinus8:SH.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:SH.spsMaxSubLayersMinus1+1,temporalIdNested:SH.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:tH}}catch(BH){return UB._error("Error building HEVC Decoder Configuration Record:",BH),null}},RB=(HH,BH)=>{const LH=HH.readBits(2),AH=HH.readBits(1),rH=HH.readBits(5);let SH=0;for(let EH=0;EH<32;EH++)SH=SH<<1|HH.readBits(1);const hH=new Uint8Array(6);for(let EH=0;EH<6;EH++)hH[EH]=HH.readBits(8);const tH=HH.readBits(8),zH=[],CH=[];for(let EH=0;EH<BH;EH++)zH.push(HH.readBits(1)),CH.push(HH.readBits(1));if(BH>0)for(let EH=BH;EH<8;EH++)HH.skipBits(2);for(let EH=0;EH<BH;EH++)zH[EH]&&HH.skipBits(88),CH[EH]&&HH.skipBits(8);return{general_profile_space:LH,general_tier_flag:AH,general_profile_idc:rH,general_profile_compatibility_flags:SH,general_constraint_indicator_flags:hH,general_level_idc:tH}},jB=HH=>{for(let BH=0;BH<4;BH++)for(let LH=0;LH<(3===BH?2:6);LH++){if(HH.readBits(1)){const LH=Math.min(64,1<<4+(BH<<1));BH>1&&RH(HH);for(let BH=0;BH<LH;BH++)RH(HH)}else NH(HH)}},nB=(HH,BH)=>{const LH=[];for(let AH=0;AH<BH;AH++)LH[AH]=FB(HH,AH,BH,LH)},FB=(HH,BH,LH,AH)=>{let rH=0,SH=0,hH=0;if(0!==BH&&(SH=HH.readBits(1)),SH){if(BH===LH){hH=BH-(NH(HH)+1)}else hH=BH-1;HH.readBits(1),NH(HH);const SH=AH[hH]??0;for(let BH=0;BH<=SH;BH++){HH.readBits(1)||HH.readBits(1)}rH=AH[hH]}else{const BH=NH(HH),LH=NH(HH);for(let AH=0;AH<BH;AH++)NH(HH),HH.readBits(1);for(let AH=0;AH<LH;AH++)NH(HH),HH.readBits(1);rH=BH+LH}return rH},DB=(HH,BH)=>{let LH=2,AH=2,rH=2,SH=0,hH=0,tH={num:1,den:1};if(HH.readBits(1)){const BH=HH.readBits(8);if(255===BH)tH={num:HH.readBits(16),den:HH.readBits(16)};else{const HH=cB[BH];HH&&(tH=HH)}}return HH.readBits(1)&&HH.readBits(1),HH.readBits(1)&&(HH.readBits(3),SH=HH.readBits(1),HH.readBits(1)&&(LH=HH.readBits(8),AH=HH.readBits(8),rH=HH.readBits(8))),HH.readBits(1)&&(NH(HH),NH(HH)),HH.readBits(1),HH.readBits(1),HH.readBits(1),HH.readBits(1)&&(NH(HH),NH(HH),NH(HH),NH(HH)),HH.readBits(1)&&(HH.readBits(32),HH.readBits(32),HH.readBits(1)&&NH(HH),HH.readBits(1)&&wB(HH,!0,BH)),HH.readBits(1)&&(HH.readBits(1),HH.readBits(1),HH.readBits(1),hH=NH(HH),NH(HH),NH(HH),NH(HH),NH(HH)),{pixelAspectRatio:tH,colourPrimaries:LH,transferCharacteristics:AH,matrixCoefficients:rH,fullRangeFlag:SH,minSpatialSegmentationIdc:hH}},wB=(HH,BH,LH)=>{let AH=!1,rH=!1,SH=!1;BH&&(AH=1===HH.readBits(1),rH=1===HH.readBits(1),(AH||rH)&&(SH=1===HH.readBits(1),SH&&(HH.readBits(8),HH.readBits(5),HH.readBits(1),HH.readBits(5)),HH.readBits(4),HH.readBits(4),SH&&HH.readBits(4),HH.readBits(5),HH.readBits(5),HH.readBits(5)));for(let hH=0;hH<=LH;hH++){let BH=!0;1===HH.readBits(1)||(BH=1===HH.readBits(1));let LH=!1;BH?NH(HH):LH=1===HH.readBits(1);let hH=1;if(!LH){hH=NH(HH)+1}AH&&ZB(HH,hH,SH),rH&&ZB(HH,hH,SH)}},ZB=(HH,BH,LH)=>{for(let AH=0;AH<BH;AH++)NH(HH),NH(HH),LH&&(NH(HH),NH(HH)),HH.readBits(1)};var dB;!function(HH){HH[HH.audAllowed=0]="audAllowed",HH[HH.beforeFirstVcl=1]="beforeFirstVcl",HH[HH.afterFirstVcl=2]="afterFirstVcl",HH[HH.eoBitstreamAllowed=3]="eoBitstreamAllowed",HH[HH.noMoreDataAllowed=4]="noMoreDataAllowed"}(dB||(dB={}));const aB=HH=>{const BH=nH(HH),LH=BH.getUint8(9),AH=BH.getUint16(10,!0),rH=BH.getUint32(12,!0),SH=BH.getInt16(16,!0),hH=BH.getUint8(18);let tH=null;return hH&&(tH=HH.subarray(19,21+LH)),{outputChannelCount:LH,preSkip:AH,inputSampleRate:rH,outputGain:SH,channelMappingFamily:hH,channelMappingTable:tH}};var sB;!function(HH){HH[HH.STREAMINFO=0]="STREAMINFO",HH[HH.VORBIS_COMMENT=4]="VORBIS_COMMENT",HH[HH.PICTURE=6]="PICTURE"}(sB||(sB={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const JB=[1,2,3,6],iB=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],pB=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],yB=[16,16,20,20,0,24,24,0],HL=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],BL=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],LL=[32e3,44100,48e3,0],AL=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],rL=[512,1024,2048,4096],SL=HH=>{const BH=hL(HH),LH=nH(HH);let AH=BH?4*Math.ceil(BH.frameSize/4):0,rH=null;for(;AH+4<=HH.length&&1683496997===LH.getUint32(AH);){const BH=tL(HH.subarray(AH));if(!BH)break;rH??=BH,AH+=BH.frameSize}if(BH)return{frameSize:rH?AH:BH.frameSize,sampleRate:BH.sampleRate,numberOfChannels:BH.numberOfChannels,sampleCount:BH.sampleCount,channelLayout:BH.channelLayout,pcmResolution:BH.pcmResolution,bitRate:BH.bitRate,core:BH,hasExtensions:null!==rH};if(!rH?.asset)return null;const{asset:SH}=rH;return{frameSize:AH,sampleRate:SH.sampleRate,numberOfChannels:SH.numberOfChannels,sampleCount:SH.sampleCount,channelLayout:SH.channelLayout,pcmResolution:SH.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},hL=HH=>{if(HH.length<18)return null;if(127!==HH[0]||254!==HH[1]||128!==HH[2]||1!==HH[3])return null;const BH=new uB(HH);if(BH.skipBits(32),BH.skipBits(1),31!==BH.readBits(5))return null;const LH=BH.readBits(1),AH=BH.readBits(7)+1;if(AH%8!==0)return null;const rH=BH.readBits(14)+1;if(rH<96)return null;const SH=BH.readBits(6);if(SH>=HL.length)return null;const hH=iB[BH.readBits(4)];if(0===hH)return null;const tH=pB[BH.readBits(5)];if(0!==BH.readBits(1))return null;BH.skipBits(4),BH.skipBits(5);const zH=BH.readBits(2);if(3===zH)return null;BH.skipBits(1),LH&&BH.skipBits(16),BH.skipBits(7);const CH=yB[BH.readBits(3)];if(0===CH)return null;const EH=0!==zH;return{frameSize:rH,sampleRate:hH,numberOfChannels:HL[SH]+(EH?1:0),sampleCount:32*AH,channelLayout:BL[SH]|(EH?8:0),amode:SH,lfePresent:EH,bitRate:tH,pcmResolution:CH}},tL=HH=>{if(HH.length<10)return null;if(100!==HH[0]||88!==HH[1]||32!==HH[2]||37!==HH[3])return null;const BH=new uB(HH);BH.skipBits(32),BH.skipBits(8);const LH=BH.readBits(2),AH=BH.readBits(1),rH=8+4*AH,SH=16+4*AH;BH.skipBits(rH);const hH=BH.readBits(SH)+1,tH={frameSize:hH,asset:null};if(!BH.readBits(1))return tH;const zH=LL[BH.readBits(2)],CH=512*(BH.readBits(3)+1);BH.readBits(1)&&BH.skipBits(36);const EH=BH.readBits(3)+1,XH=BH.readBits(3)+1,GH=[];for(let MH=0;MH<EH;MH++)GH.push(BH.readBits(LH+1));for(const MH of GH)BH.skipBits(8*BB(MH));if(BH.readBits(1)){BH.skipBits(2);const HH=BH.readBits(2)+1<<2,LH=BH.readBits(2)+1;BH.skipBits(LH*HH)}for(let MH=0;MH<XH;MH++)BH.skipBits(SH);BH.skipBits(9),BH.skipBits(3),BH.readBits(1)&&BH.skipBits(4),BH.readBits(1)&&BH.skipBits(24),BH.readBits(1)&&BH.skipBits(8*(BH.readBits(10)+1));const YH=BH.readBits(5)+1,uH=AL[BH.readBits(4)],QH=BH.readBits(8)+1;let WH=0;if(BH.readBits(1)&&(QH>2&&BH.skipBits(1),QH>6&&BH.skipBits(1),BH.readBits(1))){const HH=BH.readBits(2)+1<<2;WH=BH.readBits(HH)}return 0===zH||BH.getBitsLeft()<0?tH:{frameSize:hH,asset:{sampleRate:uH,numberOfChannels:QH,sampleCount:Math.round(CH*uH/zH),channelLayout:WH,pcmResolution:YH}}},zL=HH=>{const BH=new Uint8Array(20),LH=nH(BH);LH.setUint32(0,HH.sampleRate),LH.setUint32(4,HH.bitRate),LH.setUint32(8,HH.bitRate),BH[12]=HH.pcmResolution;const AH=HH.core&&!HH.hasExtensions?1:0,rH=new uB(BH);return rH.seekToByte(13),rH.writeBits(2,Math.max(rL.indexOf(HH.sampleCount),0)),rH.writeBits(5,AH),rH.writeBits(1,HH.core?.lfePresent?1:0),rH.writeBits(6,HH.core?.amode??0),rH.writeBits(14,HH.core?HH.core.frameSize-1:0),rH.writeBits(1,0),rH.writeBits(3,0),rH.writeBits(16,HH.channelLayout),rH.writeBits(1,0),rH.writeBits(1,0),rH.writeBits(1,0),rH.writeBits(5,0),BH},CL=["avc","hevc","vp9","av1","vp8","prores"],EL=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],XL=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],GL=[...XL,...EL],YL=["webvtt"],uL=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],QL=["ap4x","ap4h","apch","apcn","apcs","apco"],WL=["dtsc","dtsh","dtsl","dtse"],ML=HH=>{const BH=HH.split("."),LH=Number(BH[1]),AH=BH[2],rH=(LH<<5)+Number(AH.slice(0,-1)),SH="H"===AH.slice(-1)?1:0,hH=Number(BH[3]);return[129,rH,(SH<<7)+((8===hH?0:1)<<6)+((12===hH?1:0)<<5)+((BH[4]?Number(BH[4]):0)<<4)+((BH[5]?Number(BH[5][0]):1)<<3)+((BH[5]?Number(BH[5][1]):1)<<2)+(BH[5]?Number(BH[5][2]):0),0]},xL=/^pcm-([usf])(\\d+)(be)?$/,vL=HH=>{if(IH(EL.includes(HH)),"ulaw"===HH)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===HH)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const BH=xL.exec(HH);let LH;IH(BH),LH="u"===BH[1]?"unsigned":"s"===BH[1]?"signed":"float";return{dataType:LH,sampleSize:Number(BH[2])/8,littleEndian:"be"!==BH[3],silentValue:"pcm-u8"===HH?128:0}},PL=HH=>HH.startsWith("avc1")||HH.startsWith("avc3")?"avc":HH.startsWith("hev1")||HH.startsWith("hvc1")?"hevc":"vp8"===HH?"vp8":HH.startsWith("vp09")?"vp9":HH.startsWith("av01")?"av1":QL.includes(HH)?"prores":"mp3"===HH||"mp4a.69"===HH||"mp4a.6B"===HH||"mp4a.6b"===HH||"mp4a.40.34"===HH?"mp3":HH.startsWith("mp4a.40.")||"mp4a.67"===HH?"aac":"opus"===HH||"Opus"===HH?"opus":"vorbis"===HH?"vorbis":"flac"===HH?"flac":"ac-3"===HH||"ac3"===HH?"ac3":"ec-3"===HH||"eac3"===HH?"eac3":WL.includes(HH)?"dts":"ulaw"===HH?"ulaw":"alaw"===HH?"alaw":xL.test(HH)?HH:"webvtt"===HH?"webvtt":null,TL=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...QL],UL=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,VL=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,OL=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,bL=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,kL=(HH,BH)=>{if(!HH)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof HH)throw new TypeError("Video chunk metadata must be an object.");if(!HH.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof HH.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof HH.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!TL.some((BH=>HH.decoderConfig.codec.startsWith(BH))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(HH.decoderConfig.codedWidth)||HH.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(HH.decoderConfig.codedHeight)||HH.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==HH.decoderConfig.displayAspectWidth&&(!Number.isInteger(HH.decoderConfig.displayAspectWidth)||HH.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==HH.decoderConfig.displayAspectHeight&&(!Number.isInteger(HH.decoderConfig.displayAspectHeight)||HH.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==HH.decoderConfig.displayAspectWidth!==(void 0!==HH.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==HH.decoderConfig.description&&!sH(HH.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==HH.decoderConfig.colorSpace){const{colorSpace:BH}=HH.decoderConfig;if("object"!==typeof BH)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const LH=Object.keys(wH);if(null!=BH.primaries&&!LH.includes(BH.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${LH.join(", ")}.`);const AH=Object.keys(ZH);if(null!=BH.transfer&&!AH.includes(BH.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${AH.join(", ")}.`);const rH=Object.keys(dH);if(null!=BH.matrix&&!rH.includes(BH.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${rH.join(", ")}.`);if(null!=BH.fullRange&&"boolean"!==typeof BH.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(HH.decoderConfig.codec.startsWith("avc1")||HH.decoderConfig.codec.startsWith("avc3")){if(!UL.test(HH.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(HH.decoderConfig.codec.startsWith("hev1")||HH.decoderConfig.codec.startsWith("hvc1")){if(!VL.test(HH.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(HH.decoderConfig.codec.startsWith("vp8")){if("vp8"!==HH.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(HH.decoderConfig.codec.startsWith("vp09")){if(!OL.test(HH.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(HH.decoderConfig.codec.startsWith("av01")){if(!bL.test(HH.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(QL.some((BH=>HH.decoderConfig.codec.startsWith(BH)))&&!QL.some((BH=>HH.decoderConfig.codec===BH)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${QL.join(", ")}.`);if(null!==BH&&PL(HH.decoderConfig.codec)!==BH)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${HH.decoderConfig.codec}\' does not fit to the track codec \'${BH}\'.`)},mL=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],oL=(HH,BH)=>{if(!HH)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof HH)throw new TypeError("Audio chunk metadata must be an object.");if(!HH.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof HH.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof HH.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!mL.some((BH=>HH.decoderConfig.codec.startsWith(BH))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(HH.decoderConfig.sampleRate)||HH.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(HH.decoderConfig.numberOfChannels)||HH.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==HH.decoderConfig.description&&!sH(HH.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(HH.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==HH.decoderConfig.codec&&"mp4a.6B"!==HH.decoderConfig.codec&&"mp4a.6b"!==HH.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(HH.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(HH.decoderConfig.codec.startsWith("mp3")||HH.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==HH.decoderConfig.codec&&"mp4a.69"!==HH.decoderConfig.codec&&"mp4a.6B"!==HH.decoderConfig.codec&&"mp4a.6b"!==HH.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(HH.decoderConfig.codec.startsWith("opus")){if("opus"!==HH.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(HH.decoderConfig.description&&HH.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(HH.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==HH.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!HH.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(HH.decoderConfig.codec.startsWith("flac")){if("flac"!==HH.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const BH=42;if(!HH.decoderConfig.description||HH.decoderConfig.description.byteLength<BH)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(HH.decoderConfig.codec.startsWith("ac-3")||HH.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==HH.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(HH.decoderConfig.codec.startsWith("ec-3")||HH.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==HH.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(HH.decoderConfig.codec.startsWith("dts")){if(!WL.includes(HH.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${WL.join(", ")}.`)}else if((HH.decoderConfig.codec.startsWith("pcm")||HH.decoderConfig.codec.startsWith("ulaw")||HH.decoderConfig.codec.startsWith("alaw"))&&!EL.includes(HH.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${EL.join(", ")}).`);if(null!==BH&&PL(HH.decoderConfig.codec)!==BH)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${HH.decoderConfig.codec}\' does not fit to the track codec \'${BH}\'.`)},IL=HH=>{if(!HH)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof HH)throw new TypeError("Subtitle metadata must be an object.");if(!HH.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof HH.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof HH.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var fL;!function(HH){HH[HH.FrameCount=1]="FrameCount",HH[HH.FileSize=2]="FileSize",HH[HH.Toc=4]="Toc"}(fL||(fL={}));class lL{constructor(HH,BH,LH,AH,rH){this.bytes=HH,this.view=BH,this.offset=LH,this.start=AH,this.end=rH,this.bufferPos=AH-LH}static tempFromBytes(HH){return new lL(HH,nH(HH),0,0,HH.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(HH){this.bufferPos=HH-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(HH){this.bufferPos+=HH}slice(HH){let BH=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-HH;if(HH<this.start||HH+BH>this.end)throw new RangeError("Slicing outside of original slice.");return new lL(this.bytes,this.view,this.offset,HH,HH+BH)}}const KL=(HH,BH)=>{if(HH.filePos<HH.start||HH.filePos+BH>HH.end)throw new RangeError(`Tried reading [${HH.filePos}, ${HH.filePos+BH}), but slice is [${HH.start}, ${HH.end}). This is likely an internal error, please report it alongside the file that caused it.`)},cL=(HH,BH)=>{KL(HH,BH);const LH=HH.bytes.subarray(HH.bufferPos,HH.bufferPos+BH);return HH.bufferPos+=BH,LH};var eL,qL;!function(HH){HH[HH.Unsynchronisation=128]="Unsynchronisation",HH[HH.ExtendedHeader=64]="ExtendedHeader",HH[HH.ExperimentalIndicator=32]="ExperimentalIndicator",HH[HH.Footer=16]="Footer"}(eL||(eL={})),function(HH){HH[HH.ISO_8859_1=0]="ISO_8859_1",HH[HH.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",HH[HH.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",HH[HH.UTF_8=3]="UTF_8"}(qL||(qL={}));class gL{constructor(HH){this.mutex=new JH,this.trackTimestampInfo=new WeakMap,this.output=HH}onTrackClose(HH){}validateTimestamp(HH,BH,LH){let AH=this.trackTimestampInfo.get(HH);if(AH){if(LH&&(AH.maxTimestampBeforeLastKeyPacket=AH.maxTimestamp),null!==AH.maxTimestampBeforeLastKeyPacket&&BH<AH.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${BH}s, but largest timestamp is ${AH.maxTimestampBeforeLastKeyPacket}s.`);AH.maxTimestamp=Math.max(AH.maxTimestamp,BH)}else{if(!LH)throw new Error("First packet must be a key packet.");AH={maxTimestamp:BH,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(HH,AH)}}}const NL=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const RL=HH=>{const BH=Math.floor(HH/36e5),LH=Math.floor(HH%36e5/6e4),AH=Math.floor(HH%6e4/1e3),rH=HH%1e3;return BH.toString().padStart(2,"0")+":"+LH.toString().padStart(2,"0")+":"+AH.toString().padStart(2,"0")+"."+rH.toString().padStart(3,"0")};class jL{constructor(HH){this.writer=HH,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(HH){this.helperView.setUint32(0,HH,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(HH){this.helperView.setUint32(0,Math.floor(HH/2**32),!1),this.helperView.setUint32(4,HH,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(HH){for(let BH=0;BH<HH.length;BH++)this.helperView.setUint8(BH%8,HH.charCodeAt(BH)),BH%8===7&&this.writer.write(this.helper);HH.length%8!==0&&this.writer.write(this.helper.subarray(0,HH.length%8))}writeBox(HH){if(this.offsets.set(HH,this.writer.getPos()),HH.contents&&!HH.children)this.writeBoxHeader(HH,HH.size??HH.contents.byteLength+8),this.writer.write(HH.contents);else{const BH=this.writer.getPos();if(this.writeBoxHeader(HH,0),HH.contents&&this.writer.write(HH.contents),HH.children)for(const rH of HH.children)rH&&this.writeBox(rH);const LH=this.writer.getPos(),AH=HH.size??LH-BH;this.writer.seek(BH),this.writeBoxHeader(HH,AH),this.writer.seek(LH)}}writeBoxHeader(HH,BH){this.writeU32(HH.largeSize?1:BH),this.writeAscii(HH.type),HH.largeSize&&this.writeU64(BH)}measureBoxHeader(HH){return 8+(HH.largeSize?8:0)}patchBox(HH){const BH=this.offsets.get(HH);IH(void 0!==BH);const LH=this.writer.getPos();this.writer.seek(BH),this.writeBox(HH),this.writer.seek(LH)}measureBox(HH){if(HH.contents&&!HH.children){return this.measureBoxHeader(HH)+HH.contents.byteLength}{let BH=this.measureBoxHeader(HH);if(HH.contents&&(BH+=HH.contents.byteLength),HH.children)for(const LH of HH.children)LH&&(BH+=this.measureBox(LH));return BH}}}const nL=new Uint8Array(8),FL=new DataView(nL.buffer),DL=HH=>[(HH%256+256)%256],wL=HH=>(FL.setUint16(0,HH,!1),[nL[0],nL[1]]),ZL=HH=>(FL.setInt16(0,HH,!1),[nL[0],nL[1]]),dL=HH=>(FL.setUint32(0,HH,!1),[nL[1],nL[2],nL[3]]),aL=HH=>(FL.setUint32(0,HH,!1),[nL[0],nL[1],nL[2],nL[3]]),sL=HH=>(FL.setInt32(0,HH,!1),[nL[0],nL[1],nL[2],nL[3]]),JL=HH=>(FL.setUint32(0,Math.floor(HH/2**32),!1),FL.setUint32(4,HH,!1),[nL[0],nL[1],nL[2],nL[3],nL[4],nL[5],nL[6],nL[7]]),iL=HH=>(FL.setInt32(0,Math.floor(HH/2**32),!1),FL.setUint32(4,HH,!1),[nL[0],nL[1],nL[2],nL[3],nL[4],nL[5],nL[6],nL[7]]),pL=HH=>(FL.setInt16(0,256*HH,!1),[nL[0],nL[1]]),yL=HH=>(FL.setInt32(0,65536*HH,!1),[nL[0],nL[1],nL[2],nL[3]]),HA=HH=>(FL.setInt32(0,2**30*HH,!1),[nL[0],nL[1],nL[2],nL[3]]),BA=(HH,BH)=>{const LH=[];let AH=HH;do{let HH=127&AH;AH>>=7,LH.length>0&&(HH|=128),LH.push(HH),void 0!==BH&&BH--}while(AH>0||BH);return LH.reverse()},LA=function(HH){let BH=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const LH=Array(HH.length).fill(null).map(((BH,LH)=>HH.charCodeAt(LH)));return BH&&LH.push(0),LH},AA=HH=>[yL(HH[0]),yL(HH[1]),HA(HH[2]),yL(HH[3]),yL(HH[4]),HA(HH[5]),yL(HH[6]),yL(HH[7]),HA(HH[8])],rA=(HH,BH,LH)=>({type:HH,contents:BH&&new Uint8Array(BH.flat(10)),children:LH}),SA=(HH,BH,LH,AH,rH)=>rA(HH,[DL(BH),dL(LH),AH??[]],rH),hA=()=>rA("styp",[LA("iso5"),aL(0),LA("iso5"),LA("iso6"),LA("mp41"),LA("cmfc"),LA("dash")]),tA=(HH,BH)=>{const LH=Math.max(0,HH.minWrittenTimestamp);let AH=Math.max(0,HH.maxWrittenEndTimestamp-LH);return Number.isFinite(AH)||(AH=0),SA("sidx",1,0,[aL(1),aL(gr),JL(Rr(LH,gr)),JL(0),wL(0),wL(1),aL(2147483647&BH),aL(Rr(AH,gr)),aL(0)])},zA=HH=>({type:"mdat",largeSize:HH}),CA=HH=>rA("moov",void 0,[EA(HH.creationTime,HH.trackDatas),...HH.trackDatas.map((BH=>XA(BH,HH.creationTime))),HH.isFragmented?pA(HH.trackDatas):null,Gr(HH)]),EA=(HH,BH)=>{const LH=Math.max(0,...BH.map((HH=>Math.max(0,Rr(jr(HH),gr)+Rr(HH.startTimestampOffset??0,gr))))),AH=Math.max(0,...BH.map((HH=>HH.track.id)))+1,rH=!gH(HH)||!gH(LH),SH=rH?JL:aL;return SA("mvhd",+rH,0,[SH(HH),SH(HH),aL(gr),SH(LH),yL(1),pL(1),Array(10).fill(0),AA(lH),Array(24).fill(0),aL(AH)])},XA=(HH,BH)=>{const LH=Nr(HH),AH=null!==HH.startTimestampOffset&&0!==HH.startTimestampOffset;return rA("trak",void 0,[GA(HH,BH),AH?YA(HH):null,uA(HH,BH),void 0!==LH.name?rA("udta",void 0,[rA("name",[...DH.encode(LH.name)])]):null])},GA=(HH,BH)=>{const LH=Math.max(0,Rr(jr(HH),gr)+Rr(HH.startTimestampOffset??0,gr)),AH=!gH(BH)||!gH(LH),rH=AH?JL:aL;let SH;if("video"===HH.type&&HH.track.metadata.transformationMatrix)SH=HH.track.metadata.transformationMatrix;else if("video"===HH.type){const{rotation:BH,flip:LH}=HH.track.metadata;SH=((HH,BH,LH)=>{const[AH,rH,,SH,hH]=HH,tH=Math.abs(AH)*BH+Math.abs(SH)*LH,zH=Math.abs(rH)*BH+Math.abs(hH)*LH;return eH(eH(cH(-BH/2,-LH/2),HH),cH(tH/2,zH/2))})(eH(KH(BH??0),[LH?-1:1,0,0,0,1,0,0,0,1]),HH.info.width,HH.info.height)}else SH=lH;let hH=2;!1!==HH.track.metadata.disposition?.default&&(hH|=1);const tH="video"===HH.type?0:"audio"===HH.type?1:"subtitle"===HH.type?2:pH(HH);return SA("tkhd",+AH,hH,[rH(BH),rH(BH),aL(HH.track.id),aL(0),rH(LH),Array(8).fill(0),wL(0),wL(tH),pL("audio"===HH.type?1:0),wL(0),AA(SH),yL("video"===HH.type?HH.info.width:0),yL("video"===HH.type?HH.info.height:0)])},YA=HH=>{const BH=HH.startTimestampOffset;if(IH(null!==BH),BH>0){const LH=Rr(BH,gr),AH=Rr(jr(HH),gr),rH=!gH(LH)||!gH(AH),SH=rH?JL:aL,hH=rH?iL:sL;return rA("edts",void 0,[SA("elst",rH?1:0,0,[aL(2),SH(LH),hH(-1),yL(1),SH(AH),hH(0),yL(1)])])}{const AH=Rr(-BH,HH.timescale),rH=Math.max(0,Rr(jr(HH),gr)+Rr(BH,gr)),SH=!((LH=AH)>=-(2**31)&&LH<2**31)||!gH(rH),hH=SH?JL:aL,tH=SH?iL:sL;return rA("edts",void 0,[SA("elst",SH?1:0,0,[aL(1),hH(rH),tH(AH),yL(1)])])}var LH},uA=(HH,BH)=>rA("mdia",void 0,[QA(HH,BH),xA(!0,WA[HH.type],MA[HH.type]),vA(HH)]),QA=(HH,BH)=>{const LH=Rr(jr(HH),HH.timescale),AH=!gH(BH)||!gH(LH),rH=AH?JL:aL;return SA("mdhd",+AH,0,[rH(BH),rH(BH),aL(HH.timescale),rH(LH),wL(kr(HH.track.metadata.languageCode??HB)),wL(0)])},WA={video:"vide",audio:"soun",subtitle:"text"},MA={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},xA=function(HH,BH,LH){let AH=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return SA("hdlr",0,0,[HH?LA("mhlr"):aL(0),LA(BH),LA(AH),aL(0),aL(0),LA(LH,!0)])},vA=HH=>rA("minf",void 0,[PA[HH.type](),TA(),OA(HH)]),PA={video:()=>SA("vmhd",0,1,[wL(0),wL(0),wL(0),wL(0)]),audio:()=>SA("smhd",0,0,[wL(0),wL(0)]),subtitle:()=>SA("nmhd",0,0)},TA=()=>rA("dinf",void 0,[UA()]),UA=()=>SA("dref",0,0,[aL(1)],[VA()]),VA=()=>SA("url ",0,1),OA=HH=>{const BH=HH.compositionTimeOffsetTable.length>1||HH.compositionTimeOffsetTable.some((HH=>0!==HH.sampleCompositionTimeOffset));return rA("stbl",void 0,[bA(HH),wA(HH),BH?JA(HH):null,BH?iA(HH):null,dA(HH),aA(HH),sA(HH),ZA(HH)])},bA=HH=>{let BH;if("video"===HH.type)BH=kA(Pr(HH.track.source._codec,HH.info.decoderConfig.codec),HH);else if("audio"===HH.type){const LH=Ur(HH.track.source._codec,HH.info.decoderConfig.codec,HH.muxer.isQuickTime);IH(LH),BH=lA(LH,HH)}else"subtitle"===HH.type&&(BH=DA(Or[HH.track.source._codec],HH));return IH(BH),SA("stsd",0,0,[aL(1)],[BH])},kA=(HH,BH)=>rA(HH,[Array(6).fill(0),wL(1),wL(0),wL(0),Array(12).fill(0),wL(BH.info.width),wL(BH.info.height),aL(4718592),aL(4718592),aL(0),wL(1),DL(18),LA(bB),Array(13).fill(0),wL(BH.info.hasAlphaChannel?32:24),ZL(65535)],[Tr[BH.track.source._codec]?.(BH)??null,oA(BH),aH(BH.info.decoderConfig.colorSpace)?null:IA(BH),mA(BH)]),mA=HH=>0===HH.avgBitrate&&0===HH.maxBitrate?null:rA("btrt",[aL(0),aL(HH.maxBitrate),aL(HH.avgBitrate)]),oA=HH=>HH.info.pixelAspectRatio.num===HH.info.pixelAspectRatio.den?null:rA("pasp",[aL(HH.info.pixelAspectRatio.num),aL(HH.info.pixelAspectRatio.den)]),IA=HH=>{const BH=HH.info.decoderConfig.colorSpace;return rA("colr",[LA(HH.muxer.isQuickTime?"nclc":"nclx"),wL(null!=BH?.primaries?wH[BH.primaries]:2),wL(null!=BH?.transfer?ZH[BH.transfer]:2),wL(null!=BH?.matrix?dH[BH.matrix]:2),HH.muxer.isQuickTime?[]:DL((BH?.fullRange?1:0)<<7)])},fA=HH=>{if(!HH.info.decoderConfig)return null;const BH=HH.info.decoderConfig,LH=BH.codec.split("."),AH=Number(LH[1]),rH=Number(LH[2]),SH=(Number(LH[3])<<4)+((LH[4]?Number(LH[4]):1)<<1)+(LH[8]?Number(LH[8]):Number(BH.colorSpace?.fullRange??0)),hH=LH[5]?Number(LH[5]):BH.colorSpace?.primaries?wH[BH.colorSpace.primaries]:1,tH=LH[6]?Number(LH[6]):BH.colorSpace?.transfer?ZH[BH.colorSpace.transfer]:1,zH=LH[7]?Number(LH[7]):BH.colorSpace?.matrix?dH[BH.colorSpace.matrix]:1;return SA("vpcC",1,0,[DL(AH),DL(rH),DL(SH),DL(hH),DL(tH),DL(zH),wL(0)])},lA=(HH,BH)=>{let LH,AH=0,rH=16;const SH=EL.includes(BH.track.source._codec);if(SH){const HH=BH.track.source._codec,{sampleSize:LH}=vL(HH);rH=8*LH,rH>16&&(AH=1)}if(BH.muxer.isQuickTime&&(AH=1),0===AH)LH=[Array(6).fill(0),wL(1),wL(AH),wL(0),aL(0),wL(BH.info.numberOfChannels),wL(rH),wL(0),wL(0),wL(BH.info.sampleRate<65536?BH.info.sampleRate:0),wL(0)];else{const HH=SH?0:-2;LH=[Array(6).fill(0),wL(1),wL(AH),wL(0),aL(0),wL(BH.info.numberOfChannels),wL(Math.min(rH,16)),ZL(HH),wL(0),wL(BH.info.sampleRate<65536?BH.info.sampleRate:0),wL(0),SH?[aL(1),aL(rH/8),aL(BH.info.numberOfChannels*rH/8)]:[aL(0),aL(0),aL(0)],aL(2)]}return rA(HH,LH,[Vr(BH.track.source._codec,BH.muxer.isQuickTime)?.(BH)??null,mA(BH)])},KA=HH=>{let BH;switch(HH.track.source._codec){case"aac":BH=64;break;case"mp3":BH=107;break;case"vorbis":BH=221;break;default:throw new Error(`Unhandled audio codec: ${HH.track.source._codec}`)}let LH=[...DL(BH),...DL(21),...dL(0),...aL(HH.maxBitrate),...aL(HH.avgBitrate)];if(HH.info.decoderConfig.description){const BH=jH(HH.info.decoderConfig.description);LH=[...LH,...DL(5),...BA(BH.byteLength),...BH]}return LH=[...wL(1),...DL(0),...DL(4),...BA(LH.length),...LH,...DL(6),...DL(1),...DL(2)],LH=[...DL(3),...BA(LH.length),...LH],SA("esds",0,0,LH)},cA=HH=>rA("wave",void 0,[eA(HH),qA(HH),rA("\\0\\0\\0\\0")]),eA=HH=>rA("frma",[LA(Ur(HH.track.source._codec,HH.info.decoderConfig.codec,HH.muxer.isQuickTime))]),qA=HH=>{const{littleEndian:BH}=vL(HH.track.source._codec);return rA("enda",[wL(+BH)])},gA=HH=>{let BH=HH.info.numberOfChannels,LH=3840,AH=HH.info.sampleRate,rH=0,SH=0,hH=new Uint8Array(0);const tH=HH.info.decoderConfig?.description;if(tH){IH(tH.byteLength>=18);const HH=jH(tH),zH=aB(HH);BH=zH.outputChannelCount,LH=zH.preSkip,AH=zH.inputSampleRate,rH=zH.outputGain,SH=zH.channelMappingFamily,zH.channelMappingTable&&(hH=zH.channelMappingTable)}return rA("dOps",[DL(0),DL(BH),wL(LH),aL(AH),ZL(rH),DL(SH),...hH])},NA=HH=>{const BH=HH.info.decoderConfig?.description;IH(BH);const LH=jH(BH);return SA("dfLa",0,0,[...LH.subarray(4)])},RA=HH=>{const{littleEndian:BH,sampleSize:LH}=vL(HH.track.source._codec);return SA("pcmC",0,0,[DL(+BH),DL(8*LH)])},jA=HH=>{IH(HH.info.primingPacket);const BH=(HH=>{if(HH.length<7)return null;if(11!==HH[0]||119!==HH[1])return null;const BH=new uB(HH);BH.skipBits(16),BH.skipBits(16);const LH=BH.readBits(2);if(3===LH)return null;const AH=BH.readBits(6),rH=BH.readBits(5);if(rH>8)return null;const SH=BH.readBits(3),hH=BH.readBits(3);return 0!==(1&hH)&&1!==hH&&BH.skipBits(2),0!==(4&hH)&&BH.skipBits(2),2===hH&&BH.skipBits(2),{fscod:LH,bsid:rH,bsmod:SH,acmod:hH,lfeon:BH.readBits(1),bitRateCode:Math.floor(AH/2)}})(HH.info.primingPacket.data);if(!BH)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const LH=new Uint8Array(3),AH=new uB(LH);return AH.writeBits(2,BH.fscod),AH.writeBits(5,BH.bsid),AH.writeBits(3,BH.bsmod),AH.writeBits(3,BH.acmod),AH.writeBits(1,BH.lfeon),AH.writeBits(5,BH.bitRateCode),AH.writeBits(5,0),rA("dac3",[...LH])},nA=HH=>{IH(HH.info.primingPacket);const BH=(HH=>{if(HH.length<6)return null;if(11!==HH[0]||119!==HH[1])return null;const BH=new uB(HH);BH.skipBits(16);const LH=BH.readBits(2);if(BH.skipBits(3),0!==LH&&2!==LH)return null;const AH=BH.readBits(11),rH=BH.readBits(2);let SH,hH=0;3===rH?(hH=BH.readBits(2),SH=3):SH=BH.readBits(2);const tH=BH.readBits(3),zH=BH.readBits(1),CH=BH.readBits(5);if(CH<11||CH>16)return null;const EH=JB[SH];let XH;return XH=rH<3?VB[rH]/1e3:OB[hH]/1e3,{dataRate:Math.round((AH+1)*XH/(16*EH)),substreams:[{fscod:rH,fscod2:hH,bsid:CH,bsmod:0,acmod:tH,lfeon:zH,numDepSub:0,chanLoc:0}]}})(HH.info.primingPacket.data);if(!BH)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let LH=16;for(const hH of BH.substreams)LH+=23,hH.numDepSub>0?LH+=9:LH+=1;const AH=Math.ceil(LH/8),rH=new Uint8Array(AH),SH=new uB(rH);SH.writeBits(13,BH.dataRate),SH.writeBits(3,BH.substreams.length-1);for(const hH of BH.substreams)SH.writeBits(2,hH.fscod),SH.writeBits(5,hH.bsid),SH.writeBits(1,0),SH.writeBits(1,0),SH.writeBits(3,hH.bsmod),SH.writeBits(3,hH.acmod),SH.writeBits(1,hH.lfeon),SH.writeBits(3,0),SH.writeBits(4,hH.numDepSub),hH.numDepSub>0?SH.writeBits(9,hH.chanLoc):SH.writeBits(1,0);return rA("dec3",[...rH])},FA=HH=>{IH(HH.info.primingPacket);const BH=SL(HH.info.primingPacket.data);if(!BH)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return rA("ddts",[...zL(BH)])},DA=(HH,BH)=>rA(HH,[Array(6).fill(0),wL(1)],[br[BH.track.source._codec](BH),mA(BH)]),wA=HH=>SA("stts",0,0,[aL(HH.timeToSampleTable.length),HH.timeToSampleTable.map((HH=>[aL(HH.sampleCount),aL(HH.sampleDelta)]))]),ZA=HH=>{if(HH.samples.every((HH=>"key"===HH.type)))return null;const BH=[...HH.samples.entries()].filter((HH=>{let[,BH]=HH;return"key"===BH.type}));return SA("stss",0,0,[aL(BH.length),BH.map((HH=>{let[BH]=HH;return aL(BH+1)}))])},dA=HH=>SA("stsc",0,0,[aL(HH.compactlyCodedChunkTable.length),HH.compactlyCodedChunkTable.map((HH=>[aL(HH.firstChunk),aL(HH.samplesPerChunk),aL(1)]))]),aA=HH=>{if("audio"===HH.type&&HH.info.requiresPcmTransformation){const{sampleSize:BH}=vL(HH.track.source._codec);return SA("stsz",0,0,[aL(BH*HH.info.numberOfChannels),aL(HH.samples.reduce(((BH,LH)=>BH+Rr(LH.duration,HH.timescale)),0))])}return SA("stsz",0,0,[aL(0),aL(HH.samples.length),HH.samples.map((HH=>aL(HH.size)))])},sA=HH=>HH.finalizedChunks.length>0&&qH(HH.finalizedChunks).offset>=2**32?SA("co64",0,0,[aL(HH.finalizedChunks.length),HH.finalizedChunks.map((HH=>JL(HH.offset)))]):SA("stco",0,0,[aL(HH.finalizedChunks.length),HH.finalizedChunks.map((HH=>aL(HH.offset)))]),JA=HH=>SA("ctts",1,0,[aL(HH.compositionTimeOffsetTable.length),HH.compositionTimeOffsetTable.map((HH=>[aL(HH.sampleCount),sL(HH.sampleCompositionTimeOffset)]))]),iA=HH=>{let BH=1/0,LH=-1/0,AH=1/0,rH=-1/0;IH(HH.compositionTimeOffsetTable.length>0),IH(HH.samples.length>0);for(let hH=0;hH<HH.compositionTimeOffsetTable.length;hH++){const AH=HH.compositionTimeOffsetTable[hH];BH=Math.min(BH,AH.sampleCompositionTimeOffset),LH=Math.max(LH,AH.sampleCompositionTimeOffset)}for(let hH=0;hH<HH.samples.length;hH++){const BH=HH.samples[hH];AH=Math.min(AH,Rr(BH.timestamp,HH.timescale)),rH=Math.max(rH,Rr(BH.timestamp+BH.duration,HH.timescale))}const SH=Math.max(-BH,0);return rH>=2**31?null:SA("cslg",0,0,[sL(SH),sL(BH),sL(LH),sL(AH),sL(rH)])},pA=HH=>rA("mvex",void 0,HH.map(yA)),yA=HH=>SA("trex",0,0,[aL(HH.track.id),aL(1),aL(0),aL(0),aL(0)]),Hr=(HH,BH)=>rA("moof",void 0,[Br(HH),...BH.map(Ar)]),Br=HH=>SA("mfhd",0,0,[aL(HH)]),Lr=HH=>{let BH=0,LH=0;const AH="delta"===HH.type;return LH|=+AH,BH|=AH?1:2,BH<<24|LH<<16},Ar=HH=>rA("traf",void 0,[rr(HH),Sr(HH),hr(HH)]),rr=HH=>{IH(HH.currentChunk);let BH=0;BH|=8,BH|=16,BH|=32,BH|=131072;const LH=HH.currentChunk.samples[1]??HH.currentChunk.samples[0],AH={duration:LH.timescaleUnitsToNextSample,size:LH.size,flags:Lr(LH)};return SA("tfhd",0,131128,[aL(HH.track.id),aL(AH.duration),aL(AH.size),aL(AH.flags)])},Sr=HH=>(IH(HH.currentChunk),SA("tfdt",1,0,[JL(Rr(HH.currentChunk.startTimestamp,HH.timescale))])),hr=HH=>{IH(HH.currentChunk);const BH=HH.currentChunk.samples.map((HH=>HH.timescaleUnitsToNextSample)),LH=HH.currentChunk.samples.map((HH=>HH.size)),AH=HH.currentChunk.samples.map(Lr),rH=HH.currentChunk.samples.map((BH=>Rr(BH.timestamp-BH.decodeTimestamp,HH.timescale))),SH=new Set(BH),hH=new Set(LH),tH=new Set(AH),zH=new Set(rH),CH=2===tH.size&&AH[0]!==AH[1],EH=SH.size>1,XH=hH.size>1,GH=!CH&&tH.size>1,YH=zH.size>1||[...zH].some((HH=>0!==HH));let uH=0;return uH|=1,uH|=4*+CH,uH|=256*+EH,uH|=512*+XH,uH|=1024*+GH,uH|=2048*+YH,SA("trun",1,uH,[aL(HH.currentChunk.samples.length),aL(HH.currentChunk.offset-HH.currentChunk.moofOffset||0),CH?aL(AH[0]):[],HH.currentChunk.samples.map(((HH,SH)=>[EH?aL(BH[SH]):[],XH?aL(LH[SH]):[],GH?aL(AH[SH]):[],YH?sL(rH[SH]):[]]))])},tr=HH=>SA("tfra",1,0,[aL(HH.track.id),aL(63),aL(HH.finalizedChunks.length),HH.finalizedChunks.map((BH=>[JL(Rr(BH.samples[0].timestamp,HH.timescale)),JL(BH.moofOffset),aL(BH.trafIndex+1),aL(1),aL(1)]))]),zr=()=>SA("mfro",0,0,[aL(0)]),Cr=()=>rA("vtte"),Er=(HH,BH,LH,AH,rH)=>rA("vttc",void 0,[null!==rH?rA("vsid",[sL(rH)]):null,null!==LH?rA("iden",[...DH.encode(LH)]):null,null!==BH?rA("ctim",[...DH.encode(RL(BH))]):null,null!==AH?rA("sttg",[...DH.encode(AH)]):null,rA("payl",[...DH.encode(HH)])]),Xr=HH=>rA("vtta",[...DH.encode(HH)]),Gr=HH=>{const BH=[],LH=HH.format._options.metadataFormat??"auto",AH=HH.output._metadataTags;if("mdir"===LH||"auto"===LH&&!HH.isQuickTime){const HH=Mr(AH);HH&&BH.push(HH)}else if("mdta"===LH){const HH=xr(AH);HH&&BH.push(HH)}else("udta"===LH||"auto"===LH&&HH.isQuickTime)&&Yr(BH,HH.output._metadataTags);return 0===BH.length?null:rA("udta",void 0,BH)},Yr=(HH,BH)=>{for(const{key:LH,value:AH}of hB(BH))switch(LH){case"title":HH.push(ur("\\xa9nam",AH));break;case"description":HH.push(ur("\\xa9des",AH));break;case"artist":HH.push(ur("\\xa9ART",AH));break;case"album":HH.push(ur("\\xa9alb",AH));break;case"albumArtist":HH.push(ur("albr",AH));break;case"genre":HH.push(ur("\\xa9gen",AH));break;case"date":HH.push(ur("\\xa9day",AH.toISOString().slice(0,10)));break;case"comment":HH.push(ur("\\xa9cmt",AH));break;case"lyrics":HH.push(ur("\\xa9lyr",AH));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:pH(LH)}if(BH.raw)for(const LH in BH.raw){const AH=BH.raw[LH];null==AH||4!==LH.length||HH.some((HH=>HH.type===LH))||("string"===typeof AH?HH.push(ur(LH,AH)):AH instanceof Uint8Array&&HH.push(rA(LH,Array.from(AH))))}},ur=(HH,BH)=>{const LH=DH.encode(BH);return rA(HH,[wL(LH.length),wL(kr("und")),Array.from(LH)])},Qr={"image/jpeg":13,"image/png":14,"image/bmp":27},Wr=(HH,BH)=>{const LH=[];for(const{key:AH,value:rH}of hB(HH))switch(AH){case"title":LH.push({key:BH?"title":"\\xa9nam",value:vr(rH)});break;case"description":LH.push({key:BH?"description":"\\xa9des",value:vr(rH)});break;case"artist":LH.push({key:BH?"artist":"\\xa9ART",value:vr(rH)});break;case"album":LH.push({key:BH?"album":"\\xa9alb",value:vr(rH)});break;case"albumArtist":LH.push({key:BH?"album_artist":"aART",value:vr(rH)});break;case"comment":LH.push({key:BH?"comment":"\\xa9cmt",value:vr(rH)});break;case"genre":LH.push({key:BH?"genre":"\\xa9gen",value:vr(rH)});break;case"beatsPerMinute":BH||LH.push({key:"tmpo",value:rA("data",[aL(21),aL(0),wL(rH)])});break;case"lyrics":LH.push({key:BH?"lyrics":"\\xa9lyr",value:vr(rH)});break;case"date":LH.push({key:BH?"date":"\\xa9day",value:vr(rH.toISOString().slice(0,10))});break;case"images":for(const HH of rH)"coverFront"===HH.kind&&LH.push({key:"covr",value:rA("data",[aL(Qr[HH.mimeType]??0),aL(0),Array.from(HH.data)])});break;case"trackNumber":if(BH){const BH=void 0!==HH.tracksTotal?`${rH}/${HH.tracksTotal}`:rH.toString();LH.push({key:"track",value:vr(BH)})}else LH.push({key:"trkn",value:rA("data",[aL(0),aL(0),wL(0),wL(rH),wL(HH.tracksTotal??0),wL(0)])});break;case"discNumber":BH||LH.push({key:"disc",value:rA("data",[aL(0),aL(0),wL(0),wL(rH),wL(HH.discsTotal??0),wL(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:pH(AH)}if(HH.raw)for(const AH in HH.raw){const rH=HH.raw[AH];null==rH||!BH&&4!==AH.length||LH.some((HH=>HH.key===AH))||("string"===typeof rH?LH.push({key:AH,value:vr(rH)}):rH instanceof Uint8Array?LH.push({key:AH,value:rA("data",[aL(0),aL(0),Array.from(rH)])}):rH instanceof GB&&LH.push({key:AH,value:rA("data",[aL(Qr[rH.mimeType]??0),aL(0),Array.from(rH.data)])}))}return LH},Mr=HH=>{const BH=Wr(HH,!1);return 0===BH.length?null:SA("meta",0,0,void 0,[xA(!1,"mdir","","appl"),rA("ilst",void 0,BH.map((HH=>rA(HH.key,void 0,[HH.value]))))])},xr=HH=>{const BH=Wr(HH,!0);return 0===BH.length?null:rA("meta",void 0,[xA(!1,"mdta",""),SA("keys",0,0,[aL(BH.length)],BH.map((HH=>rA("mdta",[...DH.encode(HH.key)])))),rA("ilst",void 0,BH.map(((HH,BH)=>{const LH=String.fromCharCode(...aL(BH+1));return rA(LH,void 0,[HH.value])})))])},vr=HH=>rA("data",[aL(1),aL(0),...DH.encode(HH)]),Pr=(HH,BH)=>{switch(HH){case"avc":return BH.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return BH}},Tr={avc:HH=>HH.info.decoderConfig&&rA("avcC",[...jH(HH.info.decoderConfig.description)]),hevc:HH=>HH.info.decoderConfig&&rA("hvcC",[...jH(HH.info.decoderConfig.description)]),vp8:fA,vp9:fA,av1:HH=>rA("av1C",ML(HH.info.decoderConfig.codec)),prores:null},Ur=(HH,BH,LH)=>{switch(HH){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return BH}if(LH)switch(HH){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(HH){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},Vr=(HH,BH)=>{switch(HH){case"aac":case"mp3":case"vorbis":return KA;case"opus":return gA;case"flac":return NA;case"ac3":return jA;case"eac3":return nA;case"dts":return FA}if(BH)switch(HH){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return cA}else switch(HH){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return RA}return null},Or={webvtt:"wvtt"},br={webvtt:HH=>rA("vttC",[...DH.encode(HH.info.config.description)])},kr=HH=>{IH(3===HH.length);let BH=0;for(let LH=0;LH<3;LH++)BH<<=5,BH+=HH.charCodeAt(LH)-96;return BH};class mr{constructor(HH,BH){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,HH._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=HH,HH._setMonotonicity(BH),HH._writerAcquired=!0}start(){IH(!this.started),this.target._start(),this.started=!0}write(HH){IH(this.started&&!this.finalized),this.maybeTrackWrites(HH),this.target._write(HH,this.pos),this.pos+=HH.byteLength}seek(HH){this.pos=HH}getPos(){return this.pos}async flush(){return IH(this.started&&!this.finalized),this.target._flush()}async finalize(){IH(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(HH){if(!this.trackedWrites)return;let BH=this.getPos();if(BH<this.trackedStart){if(BH+HH.byteLength<=this.trackedStart)return;HH=HH.subarray(this.trackedStart-BH),BH=0}const LH=BH+HH.byteLength-this.trackedStart;let AH=this.trackedWrites.byteLength;for(;AH<LH;)AH*=2;if(AH!==this.trackedWrites.byteLength){const HH=new Uint8Array(AH);HH.set(this.trackedWrites,0),this.trackedWrites=HH}this.trackedWrites.set(HH,BH-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,BH+HH.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const HH={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,HH}}LH(12);class or extends EB{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(HH){!1!==this._monotonicity&&(this._monotonicity=HH)}_dispatchWrite(HH,BH){this.onwrite?.(HH,BH),this._emit("write",{start:HH,end:BH})}slice(HH){if(!Number.isInteger(HH)||HH<0)throw new TypeError("offset must be a non-negative integer.");return new cr(this,HH)}}const Ir=65536,fr=2**32;class lr extends or{constructor(){let HH=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!HH||"object"!==typeof HH)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==HH.onFinalize&&"function"!==typeof HH.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=HH,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Ir,{maxByteLength:fr})}catch{this._buffer=new ArrayBuffer(Ir),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Ir);this._bytes=new Uint8Array(this._buffer)}_ensureSize(HH){let BH=this._buffer.byteLength;for(;BH<HH;)BH*=2;if(BH!==this._buffer.byteLength){if(BH>fr)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(BH);else{const HH=new ArrayBuffer(BH),LH=new Uint8Array(HH);LH.set(this._bytes,0),this._buffer=HH,this._bytes=LH}}}_start(){}_write(HH,BH){this._ensureSize(BH+HH.byteLength),this._bytes.set(HH,BH),this._maxPos=Math.max(this._maxPos,BH+HH.byteLength),this._dispatchWrite(BH,BH+HH.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(HH,BH){return this._bytes.slice(HH,BH)}}class Kr extends or{_start(){}_write(HH,BH){this._dispatchWrite(BH,BH+HH.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class cr extends or{constructor(HH,BH){super(),this._baseTarget=HH,this._offset=BH}_start(){}_write(HH,BH){this._baseTarget._write(HH,this._offset+BH),this._dispatchWrite(BH,BH+HH.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(HH){super._setMonotonicity(HH),this._baseTarget._setMonotonicity(HH)}}class er{constructor(HH,BH){if(this.rootPath=HH,this.getTarget=BH,"string"!==typeof HH)throw new TypeError("rootPath must be a string.");if("function"!==typeof BH)throw new TypeError("getTarget must be a function.")}}const qr=HH=>{const BH=HH.filePos,LH=cL(HH,9),AH=new uB(LH);if(4095!==AH.readBits(12))return null;AH.skipBits(1);if(0!==AH.readBits(2))return null;const rH=AH.readBits(1),SH=AH.readBits(2)+1,hH=AH.readBits(4);if(15===hH)return null;AH.skipBits(1);const tH=AH.readBits(3);if(0===tH)throw new Error("ADTS frames with channel configuration 0 are not supported.");AH.skipBits(1),AH.skipBits(1),AH.skipBits(1),AH.skipBits(1);const zH=AH.readBits(13);AH.skipBits(11);const CH=AH.readBits(2)+1;if(1!==CH)throw new Error("ADTS frames with more than one AAC frame are not supported.");let EH=null;return 1===rH?HH.filePos-=2:EH=AH.readBits(16),{objectType:SH,samplingFrequencyIndex:hH,channelConfiguration:tH,frameLength:zH,numberOfAacFrames:CH,crcCheck:EH,startPos:BH}},gr=57600,Nr=HH=>{const BH={},LH=HH.track;return void 0!==LH.metadata.name&&(BH.name=LH.metadata.name),BH},Rr=function(HH,BH){const LH=HH*BH;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(LH):LH},jr=HH=>{if(0===HH.samples.length)return 0;let BH=1/0,LH=-1/0;for(let AH=0;AH<HH.samples.length;AH++){const rH=HH.samples[AH];rH.timestamp<BH&&(BH=rH.timestamp),rH.timestamp+rH.duration>LH&&(LH=rH.timestamp+rH.duration)}return BH===1/0?0:LH-BH};class nr extends gL{constructor(HH,BH){super(HH),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new lr,this.auxWriter=new mr(this.auxTarget,!1),this.auxBoxWriter=new jL(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=iH(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=BH,this.formatOptions={...BH._options},this.isQuickTime=BH instanceof XS,this.isCmaf=BH instanceof ES,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(BH instanceof ES?1/0:1),this.auxWriter.start()}async start(){const HH=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((HH=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:HH instanceof lr)),this.boxWriter=new jL(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof lr&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const HH=await this.output._getInitTarget(),BH=new mr(HH,!0);BH.start(),this.initWriter=BH,this.initBoxWriter=new jL(BH)}const BH=this.output.tracks.some((HH=>HH.isVideoTrack()&&"avc"===HH.source._codec));{const HH=this.initBoxWriter??this.boxWriter;if(IH(HH),this.formatOptions.onFtyp&&HH.writer.startTrackingWrites(),HH.writeBox((HH=>{const BH=512;return HH.isQuickTime?rA("ftyp",[LA("qt  "),aL(BH),LA("qt  ")]):HH.fragmented?HH.cmaf?rA("ftyp",[LA("iso5"),aL(BH),LA("iso5"),LA("iso6"),LA("mp41"),LA("cmfc"),LA("dash")]):rA("ftyp",[LA("iso5"),aL(BH),LA("iso5"),LA("iso6"),LA("mp41")]):rA("ftyp",[LA("isom"),aL(BH),LA("isom"),HH.holdsAvc?LA("avc1"):[],LA("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:BH,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:BH,start:LH}=HH.writer.stopTrackingWrites();this.formatOptions.onFtyp(BH,LH)}this.ftypSize=HH.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const LH of this.output.tracks)if(void 0===LH.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(IH(this.writer),IH(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=zA(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const LH of this.output.tracks)LH.isVideoTrack()&&LH.metadata.decoderConfig?this.getVideoTrackData(LH,LH.metadata.primingPacket??null,{decoderConfig:LH.metadata.decoderConfig}):LH.isAudioTrack()&&LH.metadata.decoderConfig&&this.getAudioTrackData(LH,LH.metadata.primingPacket??null,{decoderConfig:LH.metadata.decoderConfig});HH()}allTracksAreKnown(){for(const HH of this.output.tracks)if(!HH.source._closed&&!this.trackDatas.some((BH=>BH.track===HH)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const HH=this.trackDatas.map((HH=>{if("video"===HH.type)return HH.info.decoderConfig.codec;if("audio"===HH.type)return HH.info.decoderConfig.codec;return{webvtt:"wvtt"}[HH.track.source._codec]}));return(HH=>{let BH=(HH.hasVideo?"video/":HH.hasAudio?"audio/":"application/")+(HH.isQuickTime?"quicktime":"mp4");HH.codecStrings.length>0&&(BH+=`; codecs="${[...new Set(HH.codecStrings)].join(", ")}"`);return BH})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((HH=>"video"===HH.type)),hasAudio:this.trackDatas.some((HH=>"audio"===HH.type)),codecStrings:HH})}getVideoTrackData(HH,BH,LH){const AH=this.trackDatas.find((BH=>BH.track===HH));if(AH)return AH;kL(LH,HH.source._codec),IH(LH),IH(LH.decoderConfig);const rH={...LH.decoderConfig};IH(void 0!==rH.codedWidth),IH(void 0!==rH.codedHeight);let SH=!1;if("avc"!==HH.source._codec||rH.description){if("hevc"===HH.source._codec&&!rH.description){if(!BH)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const HH=NB(BH.data);if(!HH)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");rH.description=(HH=>{const BH=[];BH.push(HH.configurationVersion),BH.push((3&HH.generalProfileSpace)<<6|(1&HH.generalTierFlag)<<5|31&HH.generalProfileIdc),BH.push(HH.generalProfileCompatibilityFlags>>>24&255),BH.push(HH.generalProfileCompatibilityFlags>>>16&255),BH.push(HH.generalProfileCompatibilityFlags>>>8&255),BH.push(255&HH.generalProfileCompatibilityFlags),BH.push(...HH.generalConstraintIndicatorFlags),BH.push(255&HH.generalLevelIdc),BH.push(240|HH.minSpatialSegmentationIdc>>8&15),BH.push(255&HH.minSpatialSegmentationIdc),BH.push(252|3&HH.parallelismType),BH.push(252|3&HH.chromaFormatIdc),BH.push(248|7&HH.bitDepthLumaMinus8),BH.push(248|7&HH.bitDepthChromaMinus8),BH.push(HH.avgFrameRate>>8&255),BH.push(255&HH.avgFrameRate),BH.push((3&HH.constantFrameRate)<<6|(7&HH.numTemporalLayers)<<3|(1&HH.temporalIdNested)<<2|3&HH.lengthSizeMinusOne),BH.push(255&HH.arrays.length);for(const LH of HH.arrays){BH.push((1&LH.arrayCompleteness)<<7|63&LH.nalUnitType),BH.push(LH.nalUnits.length>>8&255),BH.push(255&LH.nalUnits.length);for(const HH of LH.nalUnits){BH.push(HH.length>>8&255),BH.push(255&HH.length);for(let LH=0;LH<HH.length;LH++)BH.push(HH[LH])}}return new Uint8Array(BH)})(HH),SH=!0}}else{if(!BH)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const HH=KB(BH.data);if(!HH)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");rH.description=(HH=>{const BH=[];BH.push(HH.configurationVersion),BH.push(HH.avcProfileIndication),BH.push(HH.profileCompatibility),BH.push(HH.avcLevelIndication),BH.push(252|3&HH.lengthSizeMinusOne),BH.push(224|31&HH.sequenceParameterSets.length);for(const LH of HH.sequenceParameterSets){const HH=LH.byteLength;BH.push(HH>>8),BH.push(255&HH);for(let AH=0;AH<HH;AH++)BH.push(LH[AH])}BH.push(HH.pictureParameterSets.length);for(const LH of HH.pictureParameterSets){const HH=LH.byteLength;BH.push(HH>>8),BH.push(255&HH);for(let AH=0;AH<HH;AH++)BH.push(LH[AH])}if((100===HH.avcProfileIndication||110===HH.avcProfileIndication||122===HH.avcProfileIndication||144===HH.avcProfileIndication)&&null!==HH.chromaFormat){IH(null!==HH.bitDepthLumaMinus8),IH(null!==HH.bitDepthChromaMinus8),IH(null!==HH.sequenceParameterSetExt),BH.push(252|3&HH.chromaFormat),BH.push(248|7&HH.bitDepthLumaMinus8),BH.push(248|7&HH.bitDepthChromaMinus8),BH.push(HH.sequenceParameterSetExt.length);for(const LH of HH.sequenceParameterSetExt){const HH=LH.byteLength;BH.push(HH>>8),BH.push(255&HH);for(let AH=0;AH<HH;AH++)BH.push(LH[AH])}}return new Uint8Array(BH)})(HH),SH=!0}const hH=((HH,BH)=>{const LH=HH<0?-1:1;let AH=0,rH=1,SH=1,hH=0,tH=HH=Math.abs(HH);for(;;){const HH=Math.floor(tH),zH=HH*SH+AH,CH=HH*hH+rH;if(CH>BH)return{num:LH*SH,den:hH};if(AH=SH,rH=hH,SH=zH,hH=CH,tH=1/(tH-HH),!isFinite(tH))break}return{num:LH*SH,den:hH}})(1/(HH.metadata.frameRate??gr),1e6).den,tH=rH.displayAspectWidth,zH=rH.displayAspectHeight,CH=void 0===tH||void 0===zH?{num:1,den:1}:zB({num:tH*rH.codedHeight,den:zH*rH.codedWidth}),EH="ap4h"===rH.codec||"ap4x"===rH.codec,XH={muxer:this,track:HH,type:"video",info:{width:rH.codedWidth,height:rH.codedHeight,pixelAspectRatio:CH,decoderConfig:rH,requiresAnnexBTransformation:SH,hasAlphaChannel:EH},timescale:hH,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:HH.source._nominalBitrate??HH.metadata.averageBitrate??0,maxBitrate:HH.source._nominalBitrate??HH.metadata.bitrate??0};return this.trackDatas.push(XH),this.trackDatas.sort(((HH,BH)=>HH.track.id-BH.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),XH}getAudioTrackData(HH,BH,LH){const AH=this.trackDatas.find((BH=>BH.track===HH));if(AH)return AH;oL(LH,HH.source._codec),IH(LH),IH(LH.decoderConfig);const rH={...LH.decoderConfig};let SH=!1;if("aac"===HH.source._codec&&!rH.description){if(!BH)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const HH=qr(lL.tempFromBytes(BH.data));if(!HH)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const LH=QB[HH.samplingFrequencyIndex],AH=WB[HH.channelConfiguration];if(void 0===LH||void 0===AH)throw new Error("Invalid ADTS frame header.");rH.description=MB({objectType:HH.objectType,outputSampleRate:LH,outputNumberOfChannels:AH}),SH=!0}if(!BH){if("ac3"===HH.source._codec||"eac3"===HH.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===HH.source._codec)throw new Error("DTS requires a priming packet.")}const hH={muxer:this,track:HH,type:"audio",info:{numberOfChannels:LH.decoderConfig.numberOfChannels,sampleRate:LH.decoderConfig.sampleRate,decoderConfig:rH,requiresPcmTransformation:!this.isFragmented&&EL.includes(HH.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:SH,primingPacket:BH},timescale:rH.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:HH.source._nominalBitrate??HH.metadata.averageBitrate??0,maxBitrate:HH.source._nominalBitrate??HH.metadata.bitrate??0};return this.trackDatas.push(hH),this.trackDatas.sort(((HH,BH)=>HH.track.id-BH.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),hH}getSubtitleTrackData(HH,BH){const LH=this.trackDatas.find((BH=>BH.track===HH));if(LH)return LH;IL(BH),IH(BH),IH(BH.config);const AH={muxer:this,track:HH,type:"subtitle",info:{config:BH.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:HH.source._nominalBitrate??HH.metadata.averageBitrate??0,maxBitrate:HH.source._nominalBitrate??HH.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(AH),this.trackDatas.sort(((HH,BH)=>HH.track.id-BH.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),AH}async addEncodedVideoPacket(HH,BH,LH){const AH=await this.mutex.acquire();try{const AH=this.getVideoTrackData(HH,BH,LH);let rH=BH.data;if(AH.info.requiresAnnexBTransformation){const HH=[...oB(rH)].map((HH=>rH.subarray(HH.offset,HH.offset+HH.length)));if(0===HH.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");rH=lB(HH,4)}this.validateTimestamp(AH.track,BH.timestamp,"key"===BH.type);const SH=this.createSampleForTrack(AH,rH,BH.timestamp,BH.duration,BH.type);await this.registerSample(AH,SH)}finally{AH()}}async addEncodedAudioPacket(HH,BH,LH){const AH=await this.mutex.acquire();try{const AH=this.getAudioTrackData(HH,BH,LH);let rH=BH.data;if(AH.info.requiresAdtsStripping){const HH=qr(lL.tempFromBytes(rH));if(!HH)throw new Error("Expected ADTS frame, didn\'t get one.");const BH=null===HH.crcCheck?7:9;rH=rH.subarray(BH)}this.validateTimestamp(AH.track,BH.timestamp,"key"===BH.type);let SH=BH.timestamp,hH=BH.duration;if(AH.info.requiresPcmTransformation){const HH=vL(AH.info.decoderConfig.codec).sampleSize*AH.info.numberOfChannels;if(hH=rH.byteLength/HH/AH.info.sampleRate,null!==AH.info.expectedNextPcmPacketTimestamp){const HH=SH-AH.info.expectedNextPcmPacketTimestamp;if(HH<.01)SH=AH.info.expectedNextPcmPacketTimestamp;else{const BH=await this.padWithSilence(AH,AH.info.expectedNextPcmPacketTimestamp,HH);SH=AH.info.expectedNextPcmPacketTimestamp+BH}}AH.info.expectedNextPcmPacketTimestamp=SH+hH}const tH=this.createSampleForTrack(AH,rH,SH,hH,BH.type);await this.registerSample(AH,tH)}finally{AH()}}async padWithSilence(HH,BH,LH){const AH=Rr(LH,HH.timescale);if(LH=AH/HH.timescale,AH>0){const{sampleSize:rH,silentValue:SH}=vL(HH.info.decoderConfig.codec),hH=AH*HH.info.numberOfChannels,tH=new Uint8Array(rH*hH).fill(SH),zH=this.createSampleForTrack(HH,new Uint8Array(tH.buffer),BH,LH,"key");await this.registerSample(HH,zH)}return LH}async addSubtitleCue(HH,BH,LH){const AH=await this.mutex.acquire();try{const AH=this.getSubtitleTrackData(HH,LH);this.validateTimestamp(AH.track,BH.timestamp,!0),"webvtt"===HH.source._codec&&(AH.cueQueue.push(BH),await this.processWebVTTCues(AH,BH.timestamp))}finally{AH()}}async processWebVTTCues(HH,BH){for(;HH.cueQueue.length>0;){HH.lastCueEndTimestamp??=Math.min(0,HH.cueQueue[0].timestamp);const LH=new Set([]);for(const zH of HH.cueQueue)IH(zH.timestamp<=BH),IH(HH.lastCueEndTimestamp<=zH.timestamp+zH.duration),LH.add(Math.max(zH.timestamp,HH.lastCueEndTimestamp)),LH.add(zH.timestamp+zH.duration);const AH=[...LH].sort(((HH,BH)=>HH-BH)),rH=AH[0],SH=AH[1]??rH;if(BH<SH)break;if(HH.lastCueEndTimestamp<rH){this.auxWriter.seek(0);const BH=Cr();this.auxBoxWriter.writeBox(BH);const LH=this.auxTarget._getSlice(0,this.auxWriter.getPos()),AH=this.createSampleForTrack(HH,LH,HH.lastCueEndTimestamp,rH-HH.lastCueEndTimestamp,"key");await this.registerSample(HH,AH),HH.lastCueEndTimestamp=rH}this.auxWriter.seek(0);for(let BH=0;BH<HH.cueQueue.length;BH++){const LH=HH.cueQueue[BH];if(LH.timestamp>=SH)break;NL.lastIndex=0;const AH=NL.test(LH.text),hH=LH.timestamp+LH.duration;let tH=HH.cueToSourceId.get(LH);if(void 0===tH&&SH<hH&&(tH=HH.nextSourceId++,HH.cueToSourceId.set(LH,tH)),LH.notes){const HH=Xr(LH.notes);this.auxBoxWriter.writeBox(HH)}const zH=Er(LH.text,AH?rH:null,LH.identifier??null,LH.settings??null,tH??null);this.auxBoxWriter.writeBox(zH),hH===SH&&HH.cueQueue.splice(BH--,1)}const hH=this.auxTarget._getSlice(0,this.auxWriter.getPos()),tH=this.createSampleForTrack(HH,hH,rH,SH-rH,"key");await this.registerSample(HH,tH),HH.lastCueEndTimestamp=SH}}createSampleForTrack(HH,BH,LH,AH,rH){return{timestamp:LH,decodeTimestamp:LH,duration:AH,data:BH,size:BH.byteLength,type:rH,timescaleUnitsToNextSample:Rr(AH,HH.timescale)}}processTimestamps(HH,BH){if(0===HH.timestampProcessingQueue.length)return;if("audio"===HH.type&&HH.info.requiresPcmTransformation){IH(!this.isFragmented),HH.startTimestampOffset??=HH.timestampProcessingQueue[0].timestamp;let BH=0;for(let LH=0;LH<HH.timestampProcessingQueue.length;LH++){const AH=HH.timestampProcessingQueue[LH];BH+=Rr(AH.duration,HH.timescale)}if(0===HH.timeToSampleTable.length)HH.timeToSampleTable.push({sampleCount:BH,sampleDelta:1});else{qH(HH.timeToSampleTable).sampleCount+=BH}return void(HH.timestampProcessingQueue.length=0)}const LH=HH.timestampProcessingQueue.map((HH=>HH.timestamp)).sort(((HH,BH)=>HH-BH));this.isFragmented?HH.startTimestampOffset??=Math.min(LH[0],0):HH.startTimestampOffset??=LH[0];for(let AH=0;AH<HH.timestampProcessingQueue.length;AH++){const BH=HH.timestampProcessingQueue[AH];BH.decodeTimestamp=LH[AH];const rH=Rr(BH.timestamp-BH.decodeTimestamp,HH.timescale),SH=Rr(BH.duration,HH.timescale);if(null!==HH.lastTimescaleUnits){IH(HH.lastSample);const LH=Rr(BH.decodeTimestamp,HH.timescale,!1),AH=Math.round(LH-HH.lastTimescaleUnits);if(IH(AH>=0),HH.lastTimescaleUnits+=AH,HH.lastSample.timescaleUnitsToNextSample=AH,!this.isFragmented){let BH=qH(HH.timeToSampleTable);if(IH(BH),1===BH.sampleCount){BH.sampleDelta=AH;const LH=HH.timeToSampleTable[HH.timeToSampleTable.length-2];LH&&LH.sampleDelta===AH&&(LH.sampleCount++,HH.timeToSampleTable.pop(),BH=LH)}else BH.sampleDelta!==AH&&(BH.sampleCount--,HH.timeToSampleTable.push(BH={sampleCount:1,sampleDelta:AH}));BH.sampleDelta===SH?BH.sampleCount++:HH.timeToSampleTable.push({sampleCount:1,sampleDelta:SH});const LH=qH(HH.compositionTimeOffsetTable);IH(LH),LH.sampleCompositionTimeOffset===rH?LH.sampleCount++:HH.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:rH})}}else HH.lastTimescaleUnits=Rr(BH.decodeTimestamp,HH.timescale,!1),this.isFragmented||(HH.timeToSampleTable.push({sampleCount:1,sampleDelta:SH}),HH.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:rH}));HH.lastSample=BH}if(HH.timestampProcessingQueue.length=0,IH(HH.lastSample),IH(null!==HH.lastTimescaleUnits),void 0!==BH&&0===HH.lastSample.timescaleUnitsToNextSample){IH("key"===BH.type);const LH=Rr(BH.timestamp,HH.timescale,!1),AH=Math.round(LH-HH.lastTimescaleUnits);HH.lastSample.timescaleUnitsToNextSample=AH}}async registerSample(HH,BH){"key"===BH.type&&this.processTimestamps(HH,BH),HH.timestampProcessingQueue.push(BH),this.isFragmented?(HH.sampleQueue.push(BH),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(HH,BH):await this.addSampleToTrack(HH,BH)}async addSampleToTrack(HH,BH){if(!this.isFragmented&&(HH.samples.push(BH),"reserve"===this.fastStart)){const BH=HH.track.metadata.maximumPacketCount;if(IH(void 0!==BH),HH.samples.length>BH)throw new Error(`Track #${HH.track.id} has already reached the maximum packet count (${BH}). Either add less packets or increase the maximum packet count.`)}let LH=!1;if(HH.currentChunk){HH.currentChunk.startTimestamp=Math.min(HH.currentChunk.startTimestamp,BH.timestamp);const AH=BH.timestamp-HH.currentChunk.startTimestamp;if(this.isFragmented){const rH=this.trackDatas.every((LH=>{if(HH===LH)return"key"===BH.type;const AH=LH.sampleQueue[0];return AH?"key"===AH.type:LH.closed}));AH>=this.minimumFragmentDuration&&rH&&BH.timestamp>this.maxWrittenTimestamp&&(LH=!0,await this.finalizeFragment())}else LH=AH>=.5}else LH=!0;LH&&(HH.currentChunk&&await this.finalizeCurrentChunk(HH),HH.currentChunk={startTimestamp:BH.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),IH(HH.currentChunk),HH.currentChunk.samples.push(BH),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,BH.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,BH.timestamp+BH.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,BH.timestamp))}async finalizeCurrentChunk(HH){if(IH(!this.isFragmented),IH(this.writer),!HH.currentChunk)return;HH.finalizedChunks.push(HH.currentChunk),this.finalizedChunks.push(HH.currentChunk);let BH=HH.currentChunk.samples.length;if("audio"===HH.type&&HH.info.requiresPcmTransformation&&(BH=HH.currentChunk.samples.reduce(((BH,LH)=>BH+Rr(LH.duration,HH.timescale)),0)),0!==HH.compactlyCodedChunkTable.length&&qH(HH.compactlyCodedChunkTable).samplesPerChunk===BH||HH.compactlyCodedChunkTable.push({firstChunk:HH.finalizedChunks.length,samplesPerChunk:BH}),"in-memory"!==this.fastStart){HH.currentChunk.offset=this.writer.getPos();for(const BH of HH.currentChunk.samples)IH(BH.data),this.writer.write(BH.data),BH.data=null;await this.writer.flush()}else HH.currentChunk.offset=0}async interleaveSamples(){let HH=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(IH(this.isFragmented),HH||this.allTracksAreKnown())HH:for(;;){let BH=null,LH=1/0;for(const rH of this.trackDatas){if(!HH&&0===rH.sampleQueue.length&&!rH.closed)break HH;rH.sampleQueue.length>0&&rH.sampleQueue[0].timestamp<LH&&(BH=rH,LH=rH.sampleQueue[0].timestamp)}if(!BH)break;const AH=BH.sampleQueue.shift();await this.addSampleToTrack(BH,AH)}}async finalizeFragment(){let HH=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(IH(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const HH=this.initBoxWriter??this.boxWriter;IH(HH),this.formatOptions.onMoov&&HH.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const BH=CA(this);if(HH.writeBox(BH),this.formatOptions.onMoov){const{data:BH,start:LH}=HH.writer.stopTrackingWrites();this.formatOptions.onMoov(BH,LH)}if(this.isCmaf){IH(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new jL(this.writer);const HH=this.boxWriter.measureBox(hA()),BH=this.boxWriter.measureBox(tA(this,0));this.segmentHeaderSize=HH+BH,this.writer.seek(this.segmentHeaderSize)}}IH(this.writer),IH(this.boxWriter);const BH=this.trackDatas.filter((HH=>HH.currentChunk));if(0===BH.length)return void(HH&&await this.writer.flush());const LH=this.nextFragmentNumber++,AH=Hr(LH,BH),rH=this.writer.getPos(),SH=rH+this.boxWriter.measureBox(AH);let hH=SH+8,tH=1/0;for(let GH=0;GH<BH.length;GH++){const HH=BH[GH];IH(HH.currentChunk),IH(null!==HH.startTimestampOffset),HH.currentChunk.offset=hH,HH.currentChunk.moofOffset=rH,HH.currentChunk.trafIndex=GH,HH.currentChunk.startTimestamp-=HH.startTimestampOffset;for(const BH of HH.currentChunk.samples)hH+=BH.size,BH.timestamp-=HH.startTimestampOffset,BH.decodeTimestamp-=HH.startTimestampOffset;tH=Math.min(tH,HH.currentChunk.startTimestamp)}const zH=hH-SH,CH=zH>=2**32;if(CH)for(const GH of BH)GH.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const EH=Hr(LH,BH);if(this.boxWriter.writeBox(EH),this.formatOptions.onMoof){const{data:HH,start:BH}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(HH,BH,tH)}IH(this.writer.getPos()===SH),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const XH=zA(CH);XH.size=zH,this.boxWriter.writeBox(XH),this.writer.seek(SH+(CH?16:8));for(const GH of BH)for(const HH of GH.currentChunk.samples)this.writer.write(HH.data),HH.data=null;if(this.formatOptions.onMdat){const{data:HH,start:BH}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(HH,BH)}for(const GH of BH)GH.finalizedChunks.push(GH.currentChunk),this.finalizedChunks.push(GH.currentChunk),GH.currentChunk=null;HH&&await this.writer.flush()}async registerSampleFastStartReserve(HH,BH){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(HH,BH)):HH.sampleQueue.push(BH)}async createFastStartReserveMdat(){IH(this.writer),IH(this.boxWriter),this.ensureOneEnabledTrack();const HH=CA(this),BH=this.boxWriter.measureBox(HH)+this.computeSampleTableSizeUpperBound()+4096;IH(null!==this.ftypSize),this.writer.seek(this.ftypSize+BH),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=zA(!0),this.boxWriter.writeBox(this.mdat);for(const LH of this.trackDatas){for(const HH of LH.sampleQueue)await this.addSampleToTrack(LH,HH);LH.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){IH("reserve"===this.fastStart);let HH=0;for(const BH of this.trackDatas){const LH=BH.track.metadata.maximumPacketCount;IH(void 0!==LH),HH+=8*Math.ceil(2/3*LH),HH+=4*LH,HH+=8*Math.ceil(2/3*LH),HH+=12*Math.ceil(2/3*LH),HH+=4*LH,HH+=8*LH}return HH}async onTrackClose(HH){const BH=await this.mutex.acquire(),LH=this.trackDatas.find((BH=>BH.track===HH));LH&&(LH.closed=!0,"subtitle"===LH.type&&"webvtt"===HH.source._codec&&await this.processWebVTTCues(LH,1/0),this.processTimestamps(LH)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),BH()}ensureOneEnabledTrack(){for(const HH of["video","audio","subtitle"]){const BH=this.trackDatas.filter((BH=>BH.type===HH));if(0===BH.length)continue;if(!BH.some((HH=>!1!==HH.track.metadata.disposition?.default))){const HH=BH[0];HH.track.metadata.disposition={...HH.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){IH(this.isFragmented);const HH=await this.mutex.acquire();try{for(const HH of this.trackDatas)"subtitle"===HH.type&&"webvtt"===HH.track.source._codec&&await this.processWebVTTCues(HH,1/0),this.processTimestamps(HH);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{HH()}}async finalize(){const HH=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const LH of this.trackDatas)LH.closed=!0,"subtitle"===LH.type&&"webvtt"===LH.track.source._codec&&await this.processWebVTTCues(LH,1/0),this.processTimestamps(LH);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const LH of this.trackDatas){await this.finalizeCurrentChunk(LH);const HH=jr(LH);if(HH>0){let BH=0;for(const HH of LH.samples)BH+=HH.size;LH.avgBitrate=Math.round(8*BH/HH)}else LH.avgBitrate=0;let BH=0,AH=0,rH=0;for(let SH=0;SH<LH.samples.length;SH++){const HH=LH.samples[SH];for(AH+=HH.size;HH.decodeTimestamp-LH.samples[BH].decodeTimestamp>=1;)AH-=LH.samples[BH].size,BH++;rH=Math.max(rH,AH)}if(LH.maxBitrate=8*rH,null!==LH.startTimestampOffset)for(let SH=0;SH<LH.samples.length;SH++){const HH=LH.samples[SH];HH.timestamp-=LH.startTimestampOffset,HH.decodeTimestamp-=LH.startTimestampOffset}}if(IH(this.writer),IH(this.boxWriter),"in-memory"===this.fastStart){let HH;this.mdat=zA(!1);for(let LH=0;LH<2;LH++){const BH=CA(this),LH=this.boxWriter.measureBox(BH);HH=this.boxWriter.measureBox(this.mdat);let AH=this.writer.getPos()+LH+HH;for(const rH of this.finalizedChunks){rH.offset=AH;for(const{data:BH}of rH.samples)IH(BH),AH+=BH.byteLength,HH+=BH.byteLength}if(AH<2**32)break;HH>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const BH=CA(this);if(this.boxWriter.writeBox(BH),this.formatOptions.onMoov){const{data:HH,start:BH}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(HH,BH)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=HH,this.boxWriter.writeBox(this.mdat);for(const LH of this.finalizedChunks)for(const HH of LH.samples)IH(HH.data),this.writer.write(HH.data),HH.data=null;if(this.formatOptions.onMdat){const{data:HH,start:BH}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(HH,BH)}}else if(this.isFragmented)if(this.isCmaf){const HH=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(hA()),this.boxWriter.writeBox(tA(this,HH))}else{const HH=this.writer.getPos(),LH=(BH=this.trackDatas,rA("mfra",void 0,[...BH.map(tr),zr()]));this.boxWriter.writeBox(LH);const AH=this.writer.getPos()-HH;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(AH)}else{IH(this.mdat);const HH=this.boxWriter.offsets.get(this.mdat);IH(void 0!==HH);const BH=this.writer.getPos()-HH;if(this.mdat.size=BH,this.mdat.largeSize=BH>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:HH,start:BH}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(HH,BH)}const LH=CA(this);if("reserve"===this.fastStart){IH(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(LH);const HH=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:HH})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(LH);if(this.formatOptions.onMoov){const{data:HH,start:BH}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(HH,BH)}}var BH;HH()}}var Fr;!function(HH){HH[HH.EBML=440786851]="EBML",HH[HH.EBMLVersion=17030]="EBMLVersion",HH[HH.EBMLReadVersion=17143]="EBMLReadVersion",HH[HH.EBMLMaxIDLength=17138]="EBMLMaxIDLength",HH[HH.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",HH[HH.DocType=17026]="DocType",HH[HH.DocTypeVersion=17031]="DocTypeVersion",HH[HH.DocTypeReadVersion=17029]="DocTypeReadVersion",HH[HH.Void=236]="Void",HH[HH.Segment=408125543]="Segment",HH[HH.SeekHead=290298740]="SeekHead",HH[HH.Seek=19899]="Seek",HH[HH.SeekID=21419]="SeekID",HH[HH.SeekPosition=21420]="SeekPosition",HH[HH.Duration=17545]="Duration",HH[HH.Info=357149030]="Info",HH[HH.TimestampScale=2807729]="TimestampScale",HH[HH.MuxingApp=19840]="MuxingApp",HH[HH.WritingApp=22337]="WritingApp",HH[HH.Tracks=374648427]="Tracks",HH[HH.TrackEntry=174]="TrackEntry",HH[HH.TrackNumber=215]="TrackNumber",HH[HH.TrackUID=29637]="TrackUID",HH[HH.TrackType=131]="TrackType",HH[HH.FlagEnabled=185]="FlagEnabled",HH[HH.FlagDefault=136]="FlagDefault",HH[HH.FlagForced=21930]="FlagForced",HH[HH.FlagOriginal=21934]="FlagOriginal",HH[HH.FlagHearingImpaired=21931]="FlagHearingImpaired",HH[HH.FlagVisualImpaired=21932]="FlagVisualImpaired",HH[HH.FlagCommentary=21935]="FlagCommentary",HH[HH.FlagLacing=156]="FlagLacing",HH[HH.Name=21358]="Name",HH[HH.Language=2274716]="Language",HH[HH.LanguageBCP47=2274717]="LanguageBCP47",HH[HH.CodecID=134]="CodecID",HH[HH.CodecPrivate=25506]="CodecPrivate",HH[HH.CodecDelay=22186]="CodecDelay",HH[HH.SeekPreRoll=22203]="SeekPreRoll",HH[HH.DefaultDuration=2352003]="DefaultDuration",HH[HH.Video=224]="Video",HH[HH.PixelWidth=176]="PixelWidth",HH[HH.PixelHeight=186]="PixelHeight",HH[HH.DisplayWidth=21680]="DisplayWidth",HH[HH.DisplayHeight=21690]="DisplayHeight",HH[HH.DisplayUnit=21682]="DisplayUnit",HH[HH.AlphaMode=21440]="AlphaMode",HH[HH.Audio=225]="Audio",HH[HH.SamplingFrequency=181]="SamplingFrequency",HH[HH.Channels=159]="Channels",HH[HH.BitDepth=25188]="BitDepth",HH[HH.SimpleBlock=163]="SimpleBlock",HH[HH.BlockGroup=160]="BlockGroup",HH[HH.Block=161]="Block",HH[HH.BlockAdditions=30113]="BlockAdditions",HH[HH.BlockMore=166]="BlockMore",HH[HH.BlockAdditional=165]="BlockAdditional",HH[HH.BlockAddID=238]="BlockAddID",HH[HH.BlockDuration=155]="BlockDuration",HH[HH.ReferenceBlock=251]="ReferenceBlock",HH[HH.Cluster=524531317]="Cluster",HH[HH.Timestamp=231]="Timestamp",HH[HH.Cues=475249515]="Cues",HH[HH.CuePoint=187]="CuePoint",HH[HH.CueTime=179]="CueTime",HH[HH.CueTrackPositions=183]="CueTrackPositions",HH[HH.CueTrack=247]="CueTrack",HH[HH.CueClusterPosition=241]="CueClusterPosition",HH[HH.Colour=21936]="Colour",HH[HH.MatrixCoefficients=21937]="MatrixCoefficients",HH[HH.TransferCharacteristics=21946]="TransferCharacteristics",HH[HH.Primaries=21947]="Primaries",HH[HH.Range=21945]="Range",HH[HH.Projection=30320]="Projection",HH[HH.ProjectionType=30321]="ProjectionType",HH[HH.ProjectionPoseYaw=30323]="ProjectionPoseYaw",HH[HH.ProjectionPosePitch=30324]="ProjectionPosePitch",HH[HH.ProjectionPoseRoll=30325]="ProjectionPoseRoll",HH[HH.Attachments=423732329]="Attachments",HH[HH.AttachedFile=24999]="AttachedFile",HH[HH.FileDescription=18046]="FileDescription",HH[HH.FileName=18030]="FileName",HH[HH.FileMediaType=18016]="FileMediaType",HH[HH.FileData=18012]="FileData",HH[HH.FileUID=18094]="FileUID",HH[HH.Chapters=272869232]="Chapters",HH[HH.Tags=307544935]="Tags",HH[HH.Tag=29555]="Tag",HH[HH.Targets=25536]="Targets",HH[HH.TargetTypeValue=26826]="TargetTypeValue",HH[HH.TargetType=25546]="TargetType",HH[HH.TagTrackUID=25541]="TagTrackUID",HH[HH.TagEditionUID=25545]="TagEditionUID",HH[HH.TagChapterUID=25540]="TagChapterUID",HH[HH.TagAttachmentUID=25542]="TagAttachmentUID",HH[HH.SimpleTag=26568]="SimpleTag",HH[HH.TagName=17827]="TagName",HH[HH.TagLanguage=17530]="TagLanguage",HH[HH.TagString=17543]="TagString",HH[HH.TagBinary=17541]="TagBinary",HH[HH.ContentEncodings=28032]="ContentEncodings",HH[HH.ContentEncoding=25152]="ContentEncoding",HH[HH.ContentEncodingOrder=20529]="ContentEncodingOrder",HH[HH.ContentEncodingScope=20530]="ContentEncodingScope",HH[HH.ContentCompression=20532]="ContentCompression",HH[HH.ContentCompAlgo=16980]="ContentCompAlgo",HH[HH.ContentCompSettings=16981]="ContentCompSettings",HH[HH.ContentEncryption=20533]="ContentEncryption"}(Fr||(Fr={}));Fr.EBML,Fr.Segment,Fr.SeekHead,Fr.Info,Fr.Cluster,Fr.Tracks,Fr.Cues,Fr.Attachments,Fr.Chapters,Fr.Tags;const Dr=new Uint32Array(256);for(let IS=0;IS<256;IS++){let HH=IS<<24;for(let BH=0;BH<8;BH++)HH=2147483648&HH?HH<<1^79764919:HH<<1;Dr[IS]=HH>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const wr=new Uint32Array(256);for(let IS=0;IS<256;IS++){let HH=IS<<24;for(let BH=0;BH<8;BH++)HH=2147483648&HH?HH<<1^79764919:HH<<1;wr[IS]=HH>>>0&4294967295}const Zr=HH=>{let BH=4294967295;for(let LH=0;LH<HH.length;LH++){const AH=HH[LH];BH=(BH<<8^wr[BH>>>24^AH])>>>0}return BH},dr=new Uint8Array(16);{const HH=nH(dr);dr[0]=0,HH.setUint16(1,45069,!1),HH.setUint16(3,1,!1),dr[5]=193,dr[6]=0,dr[7]=0,HH.setUint16(8,1,!1),HH.setUint16(10,61440,!1),HH.setUint32(12,Zr(dr.subarray(0,12)),!1)}const ar=new Uint8Array(0);class sr{constructor(HH,BH,LH,AH){let rH=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,SH=arguments.length>5?arguments[5]:void 0,hH=arguments.length>6?arguments[6]:void 0;if(this.data=HH,this.type=BH,this.timestamp=LH,this.duration=AH,this.sequenceNumber=rH,HH===ar&&void 0===SH)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===SH&&(SH=HH.byteLength),!(HH instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==BH&&"delta"!==BH)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(LH))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(AH)||AH<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(rH))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(SH)||SH<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==hH&&("object"!==typeof hH||!hH))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==hH?.alpha&&!(hH.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==hH?.alphaByteLength&&(!Number.isInteger(hH.alphaByteLength)||hH.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=SH,this.sideData=hH??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===ar}get microsecondTimestamp(){return Math.trunc(AB*this.timestamp)}get microsecondDuration(){return Math.trunc(AB*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let HH=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:HH,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(HH,BH){if(!(HH instanceof EncodedVideoChunk||HH instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const LH=new Uint8Array(HH.byteLength);return HH.copyTo(LH),new sr(LH,HH.type,HH.timestamp/1e6,(HH.duration??0)/1e6,void 0,void 0,BH)}clone(HH){if(void 0!==HH&&("object"!==typeof HH||null===HH))throw new TypeError("options, when provided, must be an object.");if(void 0!==HH?.data&&!(HH.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==HH?.type&&"key"!==HH.type&&"delta"!==HH.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==HH?.timestamp&&!Number.isFinite(HH.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==HH?.duration&&!Number.isFinite(HH.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==HH?.sequenceNumber&&!Number.isFinite(HH.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==HH?.sideData&&("object"!==typeof HH.sideData||null===HH.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new sr(HH?.data??this.data,HH?.type??this.type,HH?.timestamp??this.timestamp,HH?.duration??this.duration,HH?.sequenceNumber??this.sequenceNumber,this.byteLength,HH?.sideData??this.sideData)}}var Jr;!function(HH){HH[HH.PCM=1]="PCM",HH[HH.IEEE_FLOAT=3]="IEEE_FLOAT",HH[HH.ALAW=6]="ALAW",HH[HH.MULAW=7]="MULAW",HH[HH.EXTENSIBLE=65534]="EXTENSIBLE"}(Jr||(Jr={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let ir=-1/0,pr=-1/0,yr=null;"undefined"!==typeof FinalizationRegistry&&(yr=new FinalizationRegistry((HH=>{const BH=performance.now();"video"===HH.type?(BH-ir>=1e3&&(UB._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),ir=BH),"undefined"!==typeof VideoFrame&&HH.data instanceof VideoFrame&&HH.data.close()):(BH-pr>=1e3&&(UB._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),pr=BH),"undefined"!==typeof AudioData&&HH.data instanceof AudioData&&HH.data.close())})));const HS=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(HS);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class BS{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(HH){}close(){if(this._closingPromise)return;const HH=this._connectedTrack;if(!HH)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===HH.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==HH.output.state&&"finalized"!==HH.output.state&&HH.output._muxer.onTrackClose(HH)})()}async _flushOrWaitForOngoingClose(HH){return this._closingPromise??=(async()=>{await this._flushAndClose(HH),this._closed=!0})()}}class LS extends BS{constructor(HH){if(super(),!CL.includes(HH))throw new TypeError(`Invalid video codec \'${HH}\'. Must be one of: ${CL.join(", ")}.`);this._codec=HH}}const AS=(HH,BH)=>{if(HH.metadata.hasOnlyKeyPackets&&"key"!==BH.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class rS extends LS{constructor(HH){super(HH)}add(HH,BH){if(!(HH instanceof sr))throw new TypeError("packet must be an EncodedPacket.");if(HH.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==BH&&(!BH||"object"!==typeof BH))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),AS(this._connectedTrack,HH),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,HH,BH)}}class SS extends BS{constructor(HH){if(super(),!GL.includes(HH))throw new TypeError(`Invalid audio codec \'${HH}\'. Must be one of: ${GL.join(", ")}.`);this._codec=HH}}class hS extends BS{constructor(HH){if(super(),!YL.includes(HH))throw new TypeError(`Invalid subtitle codec \'${HH}\'. Must be one of: ${YL.join(", ")}.`);this._codec=HH}}class tS{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((HH=>CL.includes(HH)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((HH=>GL.includes(HH)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((HH=>YL.includes(HH)))}_codecUnsupportedHint(HH){return""}_isFragmentedIsobmff(){return!1}}class zS extends tS{constructor(){let HH=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!HH||"object"!==typeof HH)throw new TypeError("options must be an object.");if(void 0!==HH.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(HH.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==HH.minimumFragmentDuration&&(!tB(HH.minimumFragmentDuration)||HH.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==HH.onFtyp&&"function"!==typeof HH.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==HH.onMoov&&"function"!==typeof HH.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==HH.onMdat&&"function"!==typeof HH.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==HH.onMoof&&"function"!==typeof HH.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==HH.metadataFormat&&!["mdir","mdta","udta","auto"].includes(HH.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=HH}getSupportedTrackCounts(){const HH=2**32-1;return{video:{min:0,max:HH},audio:{min:0,max:HH},subtitle:{min:0,max:HH},total:{min:0,max:HH}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(HH){return new nr(HH,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class CS extends zS{constructor(HH){super(HH)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...CL,...XL,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...YL]}_codecUnsupportedHint(HH){return(new XS).getSupportedCodecs().includes(HH)?" Switching to MOV will grant support for this codec.":""}}class ES extends zS{constructor(HH){super(HH)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...CL,...XL,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...YL]}}class XS extends zS{constructor(HH){super(HH)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...CL,...GL]}_codecUnsupportedHint(HH){return(new CS).getSupportedCodecs().includes(HH)?" Switching to MP4 will grant support for this codec.":""}}const GS=["video","audio","subtitle"];class YS{constructor(HH,BH,LH,AH,rH){this.id=HH,this.output=BH,this.type=LH,this.source=AH,this.metadata=rH}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(HH){if(!(HH instanceof YS))throw new TypeError("other must be an OutputTrack.");if(this===HH)return!1;const BH=CB(this.metadata.group),LH=CB(HH.metadata.group);for(const AH of BH){if(this.type!==HH.type&&LH.some((HH=>AH===HH)))return!0;if(LH.some((HH=>AH._pairedGroups.has(HH))))return!0}return!1}}class uS extends YS{constructor(HH,BH,LH,AH){super(HH,BH,"video",LH,AH)}}class QS extends YS{constructor(HH,BH,LH,AH){super(HH,BH,"audio",LH,AH)}}class WS extends YS{constructor(HH,BH,LH,AH){super(HH,BH,"subtitle",LH,AH)}}class MS{constructor(){this._pairedGroups=new Set}pairWith(HH){if(!(HH instanceof MS))throw new TypeError("other must be an OutputTrackGroup.");if(this===HH)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(HH),HH._pairedGroups.add(this)}}const xS=HH=>{if(!HH||"object"!==typeof HH)throw new TypeError("metadata must be an object.");if(void 0!==HH.languageCode&&(BH=HH.languageCode,!LB.test(BH)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var BH;if(void 0!==HH.name&&"string"!==typeof HH.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==HH.disposition&&(HH=>{if(!HH||"object"!==typeof HH)throw new TypeError("disposition must be an object.");if(void 0!==HH.default&&"boolean"!==typeof HH.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==HH.primary&&"boolean"!==typeof HH.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==HH.forced&&"boolean"!==typeof HH.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==HH.original&&"boolean"!==typeof HH.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==HH.commentary&&"boolean"!==typeof HH.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==HH.hearingImpaired&&"boolean"!==typeof HH.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==HH.visuallyImpaired&&"boolean"!==typeof HH.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(HH.disposition),void 0!==HH.maximumPacketCount&&(!Number.isInteger(HH.maximumPacketCount)||HH.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==HH.bitrate&&(!Number.isFinite(HH.bitrate)||HH.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==HH.averageBitrate&&(!Number.isFinite(HH.averageBitrate)||HH.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==HH.group&&!(HH.group instanceof MS)&&(!Array.isArray(HH.group)||HH.group.some((HH=>!(HH instanceof MS)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class vS extends EB{get target(){const HH="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(HH);const BH=this._getRootTarget();if(SB(BH))throw new TypeError(HH);return BH}constructor(HH){if(super(),this.state="pending",this.defaultTrackGroup=new MS,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new JH,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!HH||"object"!==typeof HH)throw new TypeError("options must be an object.");if(!(HH.format instanceof tS))throw new TypeError("options.format must be an OutputFormat.");if(!(HH.target instanceof or||HH.target instanceof er))throw new TypeError("options.target must be a Target or a PathedTarget.");if(HH.target instanceof or&&this._rememberTarget(HH.target),void 0!==HH.initTarget&&!(HH.initTarget instanceof or)&&"function"!==typeof HH.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==HH.onFinalize&&"function"!==typeof HH.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=HH.format,this.fX=HH.target,this._onFinalize=HH.onFinalize??null,this._initTarget=HH.initTarget??null,this._initTarget instanceof or&&this._rememberTarget(this._initTarget),this._muxer=HH.format._createMuxer(this)}_getTargetValidated(HH){IH(this.fX instanceof er);const BH=this.fX.getTarget(HH),LH=HH=>{if(!(HH instanceof or))throw new TypeError("getTarget must return a Target.");return HH};return SB(BH)?BH.then(LH):LH(BH)}async _getTarget(HH){IH(this.fX instanceof er);const BH=await this._getTargetValidated(HH);return this._emit("target",{target:BH,request:HH,isRoot:HH.isRoot}),"canceled"===this.state?await BH._close():this._rememberTarget(BH),BH}_rememberTarget(HH){this._unfinalizedTargets.add(HH),HH.on("finalized",(()=>this._unfinalizedTargets.delete(HH)),{once:!0})}async _getInitTarget(){if(IH(null!==this._initTarget),this._initTarget instanceof or)return this._initTarget;const HH=await this._initTarget();return"canceled"===this.state?await HH._close():this._rememberTarget(HH),HH}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.fX instanceof or)return this._emit("target",{target:this.fX,request:null,isRoot:!0}),this._rootTarget=this.fX,this.fX;const HH={path:this.fX.rootPath,isRoot:!0,mimeType:this.format.mimeType},BH=this._getTargetValidated(HH),LH=BH=>("canceled"===this.state?BH._close():this._rememberTarget(BH),this._emit("target",{target:BH,request:HH,isRoot:!0}),this._rootTarget=BH,BH);return SB(BH)?this._rootTargetPromise=BH.then(LH):LH(BH)}_getRootWriter(HH){return this._rootWriterPromise??=(async()=>{const BH=await this._getRootTarget(),LH=new mr(BH,"boolean"===typeof HH?HH:HH(BH));return LH.start(),LH})()}addVideoTrack(HH){let BH=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(HH instanceof LS))throw new TypeError("source must be a VideoSource.");if(xS(BH),void 0!==BH.rotation&&![0,90,180,270].includes(BH.rotation))throw new TypeError(`Invalid video rotation: ${BH.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==BH.flip&&"boolean"!==typeof BH.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==BH.transformationMatrix&&(!Array.isArray(BH.transformationMatrix)||9!==BH.transformationMatrix.length||!BH.transformationMatrix.every((HH=>Number.isFinite(HH)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==BH.frameRate&&(!Number.isFinite(BH.frameRate)||BH.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${BH.frameRate}. Must be a positive number.`);if(void 0!==BH.hasOnlyKeyPackets&&"boolean"!==typeof BH.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==BH.canBeTransparent&&"boolean"!==typeof BH.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==BH.decoderConfig&&kL({decoderConfig:BH.decoderConfig},HH._codec),void 0!==BH.primingPacket){if(!(BH.primingPacket instanceof sr))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===BH.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const LH={...BH};return LH.group??=this.defaultTrackGroup,this._addTrack(new uS(this.tracks.length+1,this,HH,LH))}addAudioTrack(HH){let BH=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(HH instanceof SS))throw new TypeError("source must be an AudioSource.");if(xS(BH),void 0!==BH.decoderConfig&&oL({decoderConfig:BH.decoderConfig},HH._codec),void 0!==BH.primingPacket){if(!(BH.primingPacket instanceof sr))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===BH.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const LH={...BH};return LH.group??=this.defaultTrackGroup,this._addTrack(new QS(this.tracks.length+1,this,HH,LH))}addSubtitleTrack(HH){let BH=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(HH instanceof hS))throw new TypeError("source must be a SubtitleSource.");xS(BH);const LH={...BH};return LH.group??=this.defaultTrackGroup,this._addTrack(new WS(this.tracks.length+1,this,HH,LH))}setMetadataTags(HH){if((HH=>{if(!HH||"object"!==typeof HH)throw new TypeError("tags must be an object.");if(void 0!==HH.title&&"string"!==typeof HH.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==HH.description&&"string"!==typeof HH.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==HH.artist&&"string"!==typeof HH.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==HH.album&&"string"!==typeof HH.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==HH.albumArtist&&"string"!==typeof HH.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==HH.trackNumber&&(!Number.isInteger(HH.trackNumber)||HH.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==HH.tracksTotal&&(!Number.isInteger(HH.tracksTotal)||HH.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==HH.discNumber&&(!Number.isInteger(HH.discNumber)||HH.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==HH.discsTotal&&(!Number.isInteger(HH.discsTotal)||HH.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==HH.genre&&"string"!==typeof HH.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==HH.date&&(!(HH.date instanceof Date)||Number.isNaN(HH.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==HH.beatsPerMinute&&(!Number.isInteger(HH.beatsPerMinute)||HH.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==HH.lyrics&&"string"!==typeof HH.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==HH.images){if(!Array.isArray(HH.images))throw new TypeError("tags.images, when provided, must be an array.");for(const BH of HH.images){if(!BH||"object"!==typeof BH)throw new TypeError("Each image in tags.images must be an object.");if(!(BH.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof BH.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(BH.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==HH.comment&&"string"!==typeof HH.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==HH.raw){if(!HH.raw||"object"!==typeof HH.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const BH of Object.values(HH.raw))if(null!==BH&&"string"!==typeof BH&&(!Array.isArray(BH)||!BH.every((HH=>"string"===typeof HH)))&&!(BH instanceof Uint8Array)&&!(BH instanceof GB)&&!(BH instanceof YB)&&!XB(BH))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(HH),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=HH}_addTrack(HH){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(HH.source._connectedTrack)throw new Error("Source is already used for a track.");const BH=this.format.getSupportedTrackCounts(),LH=this.tracks.reduce(((BH,LH)=>BH+(LH.type===HH.type?1:0)),0),AH=BH[HH.type].max;if(LH===AH)throw new Error(0===AH?`${this.format._name} does not support ${HH.type} tracks.`:`${this.format._name} does not support more than ${AH} ${HH.type} track`+(1===AH?"":"s")+".");const rH=BH.total.max;if(this.tracks.length===rH)throw new Error(`${this.format._name} does not support more than ${rH} tracks`+(1===rH?"":"s")+" in total.");if(HH.isVideoTrack()){const BH=this.format.getSupportedVideoCodecs();if(0===BH.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(HH.source._codec));if(!BH.includes(HH.source._codec))throw new Error(`Codec \'${HH.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${BH.map((HH=>`\'${HH}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(HH.source._codec))}else if(HH.isAudioTrack()){const BH=this.format.getSupportedAudioCodecs();if(0===BH.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(HH.source._codec));if(!BH.includes(HH.source._codec))throw new Error(`Codec \'${HH.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${BH.map((HH=>`\'${HH}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(HH.source._codec))}else if(HH.isSubtitleTrack()){const BH=this.format.getSupportedSubtitleCodecs();if(0===BH.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(HH.source._codec));if(!BH.includes(HH.source._codec))throw new Error(`Codec \'${HH.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${BH.map((HH=>`\'${HH}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(HH.source._codec))}return this.tracks.push(HH),HH.source._connectedTrack=HH,HH}hasEnoughTracks(){const HH=this.format.getSupportedTrackCounts();for(const LH of GS){if(this.tracks.reduce(((HH,BH)=>HH+(BH.type===LH?1:0)),0)<HH[LH].min)return!1}const BH=HH.total.min;return!(this.tracks.length<BH)}async start(){const HH=this.format.getSupportedTrackCounts();for(const LH of GS){const BH=this.tracks.reduce(((HH,BH)=>HH+(BH.type===LH?1:0)),0),AH=HH[LH].min;if(BH<AH)throw new Error(AH===HH[LH].max?`${this.format._name} requires exactly ${AH} ${LH} track${1===AH?"":"s"}.`:`${this.format._name} requires at least ${AH} ${LH} track${1===AH?"":"s"}.`)}const BH=HH.total.min;if(this.tracks.length<BH)throw new Error(BH===HH.total.max?`${this.format._name} requires exactly ${BH} track`+(1===BH?"":"s")+".":`${this.format._name} requires at least ${BH} track`+(1===BH?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(UB._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const HH=this._mutex.acquire();try{await this._muxer.start();const HH=this.tracks.map((HH=>HH.source._start()));await Promise.all(HH)}finally{(await HH)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const HH=await this._mutex.acquire();try{const HH=this.tracks.map((HH=>HH.source._flushOrWaitForOngoingClose(!0)));await Promise.all(HH),await Promise.all([...this._unfinalizedTargets].map((HH=>HH._close()))),this._unfinalizedTargets.clear()}finally{HH()}})():void("finalized"===this.state&&UB._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(UB._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const HH=await this._mutex.acquire();try{const HH=this.tracks.map((HH=>HH.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(HH),await this._muxer.finalize(),this._rootWriterPromise){const HH=await this._rootWriterPromise;HH.finalized||(await HH.flush(),await HH.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(BH){throw this.state="canceled",BH}finally{await Promise.all([...this._unfinalizedTargets].map((HH=>HH._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),HH()}})()}}class PS{constructor(HH,BH,LH,AH,rH){this.frameDurationS=LH,this.onFragment=rH,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=BH,this.lastTimestampUs=BH;const SH=HH=>{this.boxes.push(HH)};this.output=new vS({format:new CS({fastStart:"fragmented",minimumFragmentDuration:AH,onFtyp:SH,onMoov:SH,onMoof:SH,onMdat:HH=>{SH(HH),this.fragmentDone()}}),target:new Kr}),this.source=new rS(HH),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(HH,BH){const LH=new Uint8Array(HH.byteLength);HH.copyTo(LH),this.addData(LH,HH.type,HH.timestamp,BH)}addData(HH,BH,LH,AH){const rH=new sr(HH,BH,(LH-this.firstTimestampUs)/1e6,this.frameDurationS),SH=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,LH),this.pending=this.pending.then((()=>(this.addingTimestampUs=LH,this.source.add(rH,SH?{decoderConfig:AH}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var HH;const BH=TS(this.boxes);this.boxes=[],this.onFragment({bytes:BH,endUs:null!==(HH=this.addingTimestampUs)&&void 0!==HH?HH:this.lastTimestampUs+1e6*this.frameDurationS})}}function TS(HH){const BH=new Uint8Array(HH.reduce(((HH,BH)=>HH+BH.byteLength),0));let LH=0;for(const AH of HH)BH.set(AH,LH),LH+=AH.byteLength;return BH}class US{constructor(HH,BH,LH,AH){this.plan=HH,this.emit=LH,this.onSlotsLow=AH,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=BH}get partCount(){return this.nextIndex}addFragment(HH){let{bytes:BH,endUs:LH}=HH;this.pendingBytes>0&&this.pendingBytes+BH.byteLength>this.plan.maxBytes&&this.emitPending();let AH=0;for(;BH.byteLength-AH>this.plan.maxBytes-this.pendingBytes;){const HH=this.plan.maxBytes-this.pendingBytes;this.hold(BH.subarray(AH,AH+HH)),AH+=HH,this.emitPending()}this.hold(BH.subarray(AH)),this.completeUntilUs=LH,LH-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(HH){this.pending.push(HH),this.pendingBytes+=HH.byteLength}emitPending(){var HH;const BH=TS(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(HH=this.completeUntilUs)&&void 0!==HH?HH:this.partStartUs,this.emit({index:this.nextIndex++,bytes:BH,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class VS{constructor(HH,BH,LH,AH){let rH=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,SH=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=HH,this.partPlan=BH,this.post=LH,this.onSegmentEncoded=AH,this.journal=rH,this.onMuxFailed=SH,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(HH){const BH=oH()-HH;(BH<this.epochOffsetMs||BH-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=BH)}recordingMs(HH){return HH/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(HH){const BH=null===this.segment?0:(HH-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||BH>=this.segmentDurationMs))&&(this.pendingCutUs=HH);const LH=this.keyFrameMissed||this.pendingCutUs===HH;return this.cutRequested=!1,this.keyFrameMissed=!1,LH}onChunk(HH,BH,LH){if(null!==BH&&void 0!==BH&&BH.decoderConfig&&(this.decoderConfig=BH.decoderConfig),null!==this.pendingCutUs&&HH.timestamp>=this.pendingCutUs){if("key"!==HH.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(HH.timestamp,LH),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const AH=this.segment;if(null===AH.journalHeader)return AH.mp4.add(HH,this.decoderConfig),HH.byteLength;const rH=new Uint8Array(HH.byteLength);return HH.copyTo(rH),AH.mp4.addData(rH,HH.type,HH.timestamp,this.decoderConfig),AH.chunkTimestampsUs.push(HH.timestamp),AH.unjournaled.push({recordingId:AH.journalHeader.recordingId,segmentId:AH.journalId,index:AH.chunkCount++,timestampUs:HH.timestamp,key:"key"===HH.type,data:rH}),performance.now()-AH.lastJournalMs>=250&&this.journalChunks(AH),HH.byteLength}openSegment(HH,BH){const LH=this.nextJournalId++,AH=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:LH,containerCodec:BH.containerCodec,codec:BH.codec,width:BH.width,height:BH.height,fps:BH.fps,decoderConfig:this.decoderConfig,firstTimestampUs:HH,epochOffsetMs:this.epochOffsetMs}:null,rH=[],SH=new US(this.partPlan,HH,(SH=>{this.postPart(LH,BH,HH,SH,null===AH?null:rH)}),(()=>{var HH;(null===(HH=this.segment)||void 0===HH?void 0:HH.journalId)===LH&&this.requestCut()})),hH=this.partPlan.keyframeIntervalMs/1e3*.9,tH=new PS(BH.containerCodec,HH,1/BH.fps,hH,(HH=>{SH.addFragment(HH)}));return this.post({type:"videoSegmentOpened",journalId:LH}),{mp4:tH,parts:SH,format:BH,journalId:LH,journalHeader:AH,unjournaled:[],chunkTimestampsUs:rH,chunkCount:0,lastJournalMs:performance.now()}}postPart(HH,BH,LH,AH,rH){const{width:SH,height:hH,codec:tH,fps:zH}=BH,{startMs:CH}=function(HH,BH,LH,AH){const rH=HH/1e3+LH;return{startMs:rH,endMs:rH+BH/1e3+1e3/AH}}(LH,0,this.epochOffsetMs,zH),{completeUntilUs:EH}=AH,XH=null===EH?CH:this.recordingMs(EH),GH=AH.bytes.buffer,YH=null===rH||null===EH?null:function(HH,BH){let LH=0,AH=HH.length;for(;LH<AH;){const rH=LH+AH>>1;HH[rH]<BH?LH=rH+1:AH=rH}return LH}(rH,EH);this.post({type:"videoPart",journalId:HH,index:AH.index,bytes:GH,meta:{startMs:CH,endMs:XH,width:SH,height:hH,codec:tH},completeUntilUs:EH,completeUntilIndex:YH},[GH])}journalChunks(HH){const BH=HH.journalHeader;null!==this.journal&&null!==BH&&0!==HH.unjournaled.length&&(BH.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...BH},HH.unjournaled),HH.unjournaled=[],HH.lastJournalMs=performance.now())}closeSegment(HH){const BH=this.segment;this.segment=null,this.pendingCutUs=null,null!==BH&&(HH&&this.onSegmentEncoded(),this.journalChunks(BH),this.finishing=this.finishing.then((async()=>{let HH=null;try{await BH.mp4.finish()}catch(LH){HH=LH}BH.parts.finish(),this.post({type:"videoSegmentClosed",journalId:BH.journalId,parts:BH.parts.partCount}),null!==HH&&(console.error("Failed to finish a session replay video segment.",HH),this.onMuxFailed(HH instanceof Error?HH.message:String(HH)))})).catch((HH=>{console.error("Failed to close a session replay video segment.",HH)})))}whenFinished(){return this.finishing}}function OS(HH,BH){return null!==HH&&BH>=HH}class bS{constructor(HH,BH,LH,AH,rH){let SH=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=HH,this.cssSize=LH,this.post=AH,this.encoderPreference=rH,this.quality=new XH,this.limiter=void 0,this.segmenter=void 0,this.scaler=new TH,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.capturePaused=!1,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new WH(HH.maxFps),this.captureFps=HH.maxFps,this.segmenter=new VS(HH.segmentDurationMs,BH,AH,(()=>{this.encoderFailures=0}),SH,(HH=>{this.stopVideo(`Muxer failed: ${HH}`)})),this.still=new bH(AH),this.stats=this.emptyStats()}handleFrame(HH,BH,LH){const AH=performance.now();try{this.stats.deliveredFrames++;const rH=HH.timestamp/1e3;if(this.segmenter.noteFrameArrival(rH),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(rH))return void this.stats.droppedForFpsCap++;if(this.still.offer(HH,this.segmenter.recordingMs(HH.timestamp)),null===LH)return void(this.capturePaused||(this.capturePaused=!0,this.flushSegment()));if(this.capturePaused=!1,this.noteBackingSize(BH),this.noteCaptureFps(LH,AH),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(OS(this.rebuildDueMs,AH)||OS(this.fpsRebuildDueMs,AH))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,HH)}finally{HH.close();const BH=performance.now()-AH;this.stats.workerBusyMs+=BH,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,BH),this.maybePostStats(AH)}}resize(HH){0!==HH.width&&0!==HH.height&&(this.cssSize=HH,this.scheduleRebuildIfSizeChanged())}updateHealth(HH,BH){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const LH=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:HH,pingMs:BH});this.backpressureDropsSinceHealth=0,LH&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(HH){return this.hidden=HH,HH?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(HH){this.suspended=!0;const BH=this.operations.then(HH).catch((HH=>{console.error("Session replay encoder operation failed.",HH)})).finally((()=>{this.operations===BH&&(this.suspended=!1)}));return this.operations=BH,BH}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var HH;null===(HH=this.active)||void 0===HH||HH.encoder.close(),this.active=null}async drainAndCloseSegment(){const HH=this.active;null===HH||await async function(HH,BH){let LH;const AH=new Promise((HH=>{LH=setTimeout((()=>{HH(!1)}),BH)}));try{return await Promise.race([HH.then((()=>!0)),AH])}finally{clearTimeout(LH)}}(HH.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(HH,"flush timed out")}encode(HH,BH){const LH=this.segmenter.needsKeyFrame(BH.timestamp)||BH.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;LH&&(this.lastKeyframeUs=BH.timestamp);const AH=this.scaleToEncoder(HH,BH);try{HH.encoder.encode(AH,{keyFrame:LH})}catch(rH){return void(rH instanceof DOMException&&("InvalidStateError"===rH.name||"EncodingError"===rH.name)?this.failEncoder(HH,rH.message):++this.refusedFrames>=30?this.failEncoder(HH,`refused 30 frames in a row: ${String(rH)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",rH))}finally{AH!==BH&&AH.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(HH,BH){let LH=BH;if(!this.scalerFailed)try{LH=this.scaler.scale(BH,HH.size)}catch(AH){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",AH)}return LH.displayWidth===HH.size.width&&LH.displayHeight===HH.size.height||(HH.sentMismatchedFrame=!0),LH}onEncoderOutput(HH,BH,LH){const AH=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(HH,BH,{containerCodec:LH.candidate.containerCodec,codec:LH.candidate.config.codec,width:LH.size.width,height:LH.size.height,fps:LH.fps}),this.stats.workerBusyMs+=performance.now()-AH}noteBackingSize(HH){null!==this.backingSize&&GH(this.backingSize,HH)||(this.backingSize=HH,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(HH,BH){this.captureFps=HH,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=BH+2e3:this.fpsRebuildDueMs=null}targetSize(){var HH;const BH=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(HH,BH,LH){const AH=BH.width*BH.height<HH.width*HH.height?BH:HH;let rH=YH(Math.max(AH.width,64)),SH=YH(Math.max(AH.height,64));if(uH({width:rH,height:SH})>LH){const HH=rH,BH=SH;for(rH=YH(rH*Math.sqrt(16*LH*16/(rH*SH))),SH=YH(rH*BH/HH);uH({width:rH,height:SH})>LH;)rH-=2,SH=YH(rH*BH/HH)}return{width:rH,height:SH}}(this.cssSize,null!==(HH=this.backingSize)&&void 0!==HH?HH:this.cssSize,BH)}scheduleRebuildIfSizeChanged(){null===this.active||GH(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const HH=this.quality.getLevel(),BH=this.encodeFps(),LH=this.targetSize(),AH=function(HH){const BH={width:HH.width,height:HH.height,bitrate:HH.bitrate,framerate:HH.maxFps},LH=[],AH=[HH.preferSoftware?"prefer-software":"prefer-hardware","no-preference"],rH=HH.preferQualityLatency?PH:vH;for(const SH of AH)for(const HH of MH)for(const AH of xH)for(const hH of rH)LH.push({config:{...BH,codec:HH,hardwareAcceleration:SH,bitrateMode:AH,latencyMode:hH,avc:{format:"avc"}},containerCodec:"avc"});return LH.push({config:{...BH,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),LH}({...LH,bitrate:Math.round(QH(this.config,LH,HH.areaScale)*BH/this.config.maxFps),maxFps:BH,...this.encoderPreference});let rH=null,SH=0;for(let CH=this.firstViableCandidate;CH<AH.length&&null===rH;CH++){const HH=await VideoEncoder.isConfigSupported(AH[CH].config).catch((HH=>(console.warn("VideoEncoder.isConfigSupported threw.",AH[CH].config,HH),null)));null!==HH&&void 0!==HH&&HH.supported&&(rH=AH[CH],SH=CH,this.firstViableCandidate=CH)}if(null===rH)return void this.markUnavailable(`No supported encoder config at ${LH.width}x${LH.height}`);const hH=new VideoEncoder({output:(HH,BH)=>{this.onEncoderOutput(HH,BH,tH)},error:HH=>{this.failEncoder(tH,HH.message)}}),tH={encoder:hH,candidates:AH,candidateIndex:SH,candidate:rH,size:LH,fps:BH,sentMismatchedFrame:!1};this.active=tH,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{hH.configure(rH.config)}catch(zH){return void this.failEncoder(tH,zH instanceof Error?zH.message:String(zH))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(HH,BH){console.error("Session replay encoder failed.",HH.candidate.config,BH),this.active===HH&&(this.active=null,"closed"!==HH.encoder.state&&HH.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(HH,BH,LH){var AH;let rH=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const SH=null===(AH=HH[BH])||void 0===AH?void 0:AH.config.hardwareAcceleration;if(!("prefer-hardware"===SH&&LH||"no-preference"!==SH&&rH))return BH+1;for(let hH=BH+1;hH<HH.length;hH++)if(HH[hH].config.hardwareAcceleration!==SH)return hH;return HH.length}(HH.candidates,HH.candidateIndex,HH.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${BH}`))}stopVideo(HH){if(this.unavailable)return;const BH=this.active;this.active=null,null!==BH&&"closed"!==BH.encoder.state&&BH.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(HH)}markUnavailable(HH){console.warn(`Session replay video stopped: ${HH}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:HH})}))}maybePostStats(HH){var BH,LH,AH,rH;const SH=HH-this.statsWindowStartMs;if(SH<5e3)return;const hH=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:SH,qualityLevel:this.quality.getLevelIndex(),codec:null!==(BH=null===hH||void 0===hH?void 0:hH.candidate.config.codec)&&void 0!==BH?BH:null,hardwareAcceleration:null!==(LH=null===hH||void 0===hH?void 0:hH.candidate.config.hardwareAcceleration)&&void 0!==LH?LH:null,encodeWidth:null!==(AH=null===hH||void 0===hH?void 0:hH.size.width)&&void 0!==AH?AH:0,encodeHeight:null!==(rH=null===hH||void 0===hH?void 0:hH.size.height)&&void 0!==rH?rH:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=HH}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let kS=null,mS=0;function oS(HH){let BH=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(HH,{transfer:BH})}self.onmessage=HH=>{const BH=HH.data;switch(BH.type){case"init":kS=new bS(BH.videoConfig,BH.partPlan,BH.cssSize,oS,BH.encoderPreference,BH.journalRecordingId&&CH.supported?{recordingId:BH.journalRecordingId,journal:new CH}:null);break;case"frame":if(null===kS){console.warn("Session replay video worker got a frame before its pipeline started"),BH.image.close();break}!function(HH,BH,LH,AH,rH){if(BH instanceof VideoFrame)return void HH.handleFrame(BH,AH,rH);let SH;try{SH=new VideoFrame(BH,{timestamp:LH})}catch(hH){return 0===mS++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",hH),void(30===mS&&HH.stopVideo(`Bitmap frames keep failing: ${hH instanceof Error?hH.message:String(hH)}`))}finally{BH.close()}mS=0,HH.handleFrame(SH,AH,rH)}(kS,BH.image,BH.timestampUs,BH.KB,BH.captureFps);break;case"resize":kS.resize(BH.cssSize);break;case"health":kS.updateHealth(BH.gameFps,BH.pingMs);break;case"hidden":kS.setHidden(BH.hidden);break;case"flush":kS.flushSegment();break;case"cut":kS.cutAtNextFrame();break;case"gameJoined":kS.gameJoined()}}})();', "Worker", void 0, LH.p + "sessionReplayVideo.worker.331ace5a.worker.js")
    }

    function CB(HH) {
      return Math.max(2, 2 * Math.floor(HH / 2))
    }

    function EB(HH) {
      return Math.ceil(HH.width / 16) * Math.ceil(HH.height / 16)
    }
    class XB {
      constructor(HH) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / HH
      }
      setMaxFps(HH) {
        this.intervalMs = 1e3 / HH
      }
      shouldKeep(HH) {
        return !(HH < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = HH - this.nextDueMs > this.intervalMs ? HH + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class GB {
      constructor(HH, BH, LH) {
        this.budgetMsPerSecond = HH, this.minFps = BH, this.smoothedCostMs = LH
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      get paused() {
        return this.affordableFps() < this.minFps
      }
      record(HH) {
        const BH = this.paused ? .5 : .05;
        this.smoothedCostMs += (HH - this.smoothedCostMs) * BH
      }
      maxFps(HH) {
        return this.paused ? .1 : Math.min(HH, this.affordableFps())
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class YB {
      static isSupported() {
        const HH = globalThis.CanvasCaptureMediaStream;
        return ("undefined" !== typeof CanvasCaptureMediaStreamTrack && "requestFrame" in CanvasCaptureMediaStreamTrack.prototype || void 0 !== HH && "requestFrame" in HH.prototype) && "function" === typeof HTMLCanvasElement.prototype.captureStream && "requestVideoFrameCallback" in HTMLVideoElement.prototype
      }
      constructor(HH, BH, LH) {
        this.onFrame = BH, this.stream = void 0, this.requester = void 0, this.video = document.createElement("video"), this.closed = !1, this.onVideoFrame = () => {
          this.closed || (this.onFrame(this.video), this.video.requestVideoFrameCallback(this.onVideoFrame))
        }, this.stream = HH.captureStream(0);
        const AH = this.stream.getVideoTracks()[0];
        this.requester = "requestFrame" in AH ? AH : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(LH), this.video.requestVideoFrameCallback(this.onVideoFrame)
      }
      request() {
        this.requester.requestFrame()
      }
      close() {
        this.closed = !0;
        for (const HH of this.stream.getTracks()) HH.stop();
        this.video.srcObject = null
      }
    }
    class uB {
      constructor(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = HH, this.grab = AH, this.onUnavailable = rH, this.render = null, this.stream = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.loggedPause = !1, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = LH.msPerSecond, this.frameCostFloorMs = LH.frameCostFloorMs, this.budget = new GB(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = BH, this.captureFps = this.budgetedFps(), this.frameLimiter = new XB(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps,
          grabPath: this.grab.path
        }
      }
      start(HH) {
        if (this.stop(), this.render = HH, "stream" === this.grab.path) {
          const BH = new YB(HH.canvas, (HH => {
            this.onStreamFrame(HH)
          }), (HH => {
            this.stream === BH && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${HH instanceof Error?HH.message:String(HH)}`))
          }));
          this.stream = BH
        }
      }
      stop() {
        var HH;
        this.render = null, this.pendingGrab = null, null === (HH = this.stream) || void 0 === HH || HH.close(), this.stream = null
      }
      setMaxFps(HH) {
        this.wantedFps = HH, this.applyFps()
      }
      onAfterRender() {
        const HH = performance.timeOrigin + performance.now(),
          BH = this.render;
        if (null === BH) return;
        const LH = performance.now();
        if (null !== this.pendingGrab) {
          if (LH - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas grab didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(HH)) return;
        const AH = {
          startMs: LH,
          timestampUs: Math.round(1e3 * HH),
          KB: {
            width: BH.canvas.width,
            height: BH.canvas.height
          },
          syncMs: 0,
          paused: this.isPaused()
        };
        null !== this.stream ? this.requestStreamFrame(this.stream, AH) : "bitmap" === this.grab.path ? this.grabBitmap(BH.canvas, AH) : this.grabVideoFrame(BH.canvas, AH)
      }
      requestStreamFrame(HH, BH) {
        this.pendingGrab = BH;
        try {
          HH.request()
        } catch (LH) {
          return this.pendingGrab = null, void this.grabFailed(LH)
        }
        BH.syncMs = performance.now() - BH.startMs
      }
      grabVideoFrame(HH, BH) {
        let LH;
        try {
          LH = new VideoFrame(HH, {
            timestamp: BH.timestampUs
          })
        } catch (AH) {
          return void this.grabFailed(AH)
        }
        this.deliver(LH, BH), this.recordCost(Math.max(2 * (performance.now() - BH.startMs), this.frameCostFloorMs))
      }
      grabBitmap(HH, BH) {
        const LH = this.grab.cssSize(),
          AH = function(HH, BH, LH) {
            const AH = BH.width * BH.height < HH.width * HH.height ? BH : HH;
            let rH = CB(Math.max(AH.width, 64)),
              SH = CB(Math.max(AH.height, 64));
            if (EB({
                width: rH,
                height: SH
              }) > LH) {
              const HH = rH,
                BH = SH;
              for (rH = CB(rH * Math.sqrt(16 * LH * 16 / (rH * SH))), SH = CB(rH * BH / HH); EB({
                  width: rH,
                  height: SH
                }) > LH;) rH -= 2, SH = CB(rH * BH / HH)
            }
            return {
              width: rH,
              height: SH
            }
          }(0 === LH.width ? BH.KB : LH, BH.KB, this.grab.maxMacroblocks);
        this.pendingGrab = BH, createImageBitmap(HH, {
          resizeWidth: AH.width,
          resizeHeight: AH.height,
          resizeQuality: "low"
        }).then((HH => {
          this.pendingGrab === BH ? (this.pendingGrab = null, this.deliverMeasured(HH, BH)) : HH.close()
        }), (HH => {
          this.pendingGrab === BH && (this.pendingGrab = null, this.grabFailed(HH))
        })), BH.syncMs = performance.now() - BH.startMs
      }
      onStreamFrame(HH) {
        const BH = this.pendingGrab;
        if (null === BH) return;
        this.pendingGrab = null;
        const LH = performance.now();
        let AH;
        try {
          AH = new VideoFrame(HH, {
            timestamp: BH.timestampUs
          })
        } catch (rH) {
          return void this.grabFailed(rH)
        }
        BH.syncMs += performance.now() - LH, this.deliverMeasured(AH, BH)
      }
      deliverMeasured(HH, BH) {
        const LH = performance.now();
        this.deliver(HH, BH), this.recordCost(Math.max(BH.syncMs + performance.now() - LH, this.frameCostFloorMs))
      }
      deliver(HH, BH) {
        const LH = {
          type: "frame",
          image: HH,
          timestampUs: BH.timestampUs,
          KB: BH.KB,
          captureFps: BH.paused ? null : this.captureFps
        };
        try {
          this.worker.postMessage(LH, [HH])
        } catch (AH) {
          return HH.close(), void this.grabFailed(AH)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(HH) {
        this.budget.record(HH), this.applyFps()
      }
      grabFailed(HH) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", HH);
        !(HH instanceof DOMException && "InvalidStateError" === HH.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${HH instanceof Error?HH.message:String(HH)}`))
      }
      applyFps() {
        const HH = this.budgetedFps();
        HH !== this.captureFps && (this.captureFps = HH, this.frameLimiter.setMaxFps(HH), this.isPaused() && !this.loggedPause && (this.loggedPause = !0, console.warn(`Session replay paused video: ${this.grab.path} grabs cost ${this.budget.averageCostMs.toFixed(1)} ms, over a budget of ${this.budgetMsPerSecond} ms/s at 5 fps.`)))
      }
      isPaused() {
        return this.budgetMsPerSecond > 0 && this.budget.paused
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var QB = LH(1253);
    class WB {
      constructor(HH) {
        this.events = HH, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const HH = (0, QB.K)().gameRender();
        if (null === HH || HH.canvas === this.canvas) return HH;
        const BH = null !== this.canvas;
        return this.canvas = HH.canvas, this.observe(HH.canvas), BH ? this.events.onCanvasSwapped(HH) : this.events.onFirstCanvas(HH), HH
      }
      stop() {
        var HH, BH;
        null === (HH = this.resizeObserver) || void 0 === HH || HH.disconnect(), null === (BH = this.listeners) || void 0 === BH || BH.abort()
      }
      observe(HH) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: BH
        } = this.listeners;
        HH.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: BH
        }), HH.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: BH
        });
        const LH = HH.getBoundingClientRect();
        this.size = {
          width: Math.round(LH.width),
          height: Math.round(LH.height)
        }, this.resizeObserver = new ResizeObserver((HH => {
          const BH = HH[HH.length - 1].contentRect,
            LH = {
              width: Math.round(BH.width),
              height: Math.round(BH.height)
            };
          0 !== LH.width && 0 !== LH.height && (this.size = LH, this.events.onResized(LH))
        })), this.resizeObserver.observe(HH)
      }
    }
    const MB = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      xB = 12e4;
    class vB extends Error {
      constructor(HH, BH) {
        super(BH), this.reason = HH
      }
    }
    class PB {
      constructor(HH, BH, LH, AH, rH) {
        this.access = HH, this.uploadToken = BH, this.transport = LH, this.callbacks = AH, this.options = rH, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(HH) {
        return this.segments.has(HH)
      }
      open(HH, BH) {
        this.segments.set(HH, {
          journalId: HH,
          sequence: BH,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(HH, BH) {
        const LH = this.segments.get(HH);
        if (void 0 !== LH) {
          LH.parts.push(BH), LH.bytes += BH.bytes.byteLength, !LH.cut && null === LH.totalParts && LH.bytes > this.options.maxHeldBytes / 2 && (LH.cut = !0, this.callbacks.cut());
          for (const HH of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(HH, "byteCap"), this.downUntilMs = this.options.nowMs() + xB
          }
          this.pump()
        }
      }
      close(HH, BH) {
        const LH = this.segments.get(HH);
        void 0 !== LH && (LH.totalParts = BH, this.pump())
      }
      forget(HH) {
        this.segments.delete(HH)
      }
      releaseAll() {
        for (const HH of this.segments.values()) HH.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: HH.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let HH = 0;
        for (const BH of this.segments.values()) HH += BH.bytes;
        return HH
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let BH = this.nextWork(); null !== BH; BH = this.nextWork()) try {
            await this.advance(BH)
          } catch (HH) {
            console.warn(`Session replay part joiner failed on video segment ${BH.sequence}; uploading it straight to storage.`, HH), HH instanceof vB || (this.downUntilMs = this.options.nowMs() + xB), this.handBack(BH, HH instanceof vB ? HH.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const HH of this.segments.values())
          if (HH.sentParts < HH.parts.length || HH.totalParts === HH.parts.length) return HH;
        return null
      }
      async advance(HH) {
        if (HH.sentParts < HH.parts.length) return this.expectHeld(await this.sendPart(HH, HH.parts[HH.sentParts])), void HH.sentParts++;
        for (let BH = 0; this.owns(HH.journalId); BH++) {
          const LH = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: HH.sequence,
            parts: HH.parts.length
          })));
          if (!this.owns(HH.journalId)) return;
          if ("stored" === LH.outcome && LH.stored.parts === HH.parts.length) return this.segments.delete(HH.journalId), void this.callbacks.stored(HH.journalId, HH.sequence, LH.stored);
          if ("missing" !== LH.outcome || BH >= 2) throw this.failure(LH);
          for (const BH of LH.parts) {
            if (!this.owns(HH.journalId)) return;
            const LH = HH.parts[BH];
            if (void 0 === LH) throw new vB("missing", `the joiner asked for part ${BH} of ${HH.parts.length}`);
            this.expectHeld(await this.sendPart(HH, LH))
          }
        }
      }
      sendPart(HH, BH) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: HH.sequence,
          index: BH.index,
          meta: {
            ...BH.meta,
            startMs: Math.round(BH.meta.startMs),
            endMs: Math.round(BH.meta.endMs)
          },
          completeUntilUs: BH.completeUntilUs
        }, BH.bytes)))
      }
      expectHeld(HH) {
        if ("buffered" !== HH.outcome) throw this.failure(HH)
      }
      failure(HH) {
        if ("refused" === HH.outcome) {
          this.refused = !0;
          for (const HH of [...this.segments.values()]) this.handBack(HH, "refused");
          return new vB("refused", `refused: ${HH.reason}`)
        }
        const BH = "stored" === HH.outcome ? "shortStored" : "missing" === HH.outcome ? "missing" : "closed";
        return new vB(BH, `answered ${HH.outcome}`)
      }
      async request(HH) {
        for (let LH = 1;; LH++) {
          try {
            return await HH()
          } catch (BH) {
            if (LH >= 3) throw BH
          }
          await this.options.wait(1e3 * 2 ** (LH - 1))
        }
      }
      handBack(HH, BH) {
        this.segments.delete(HH.journalId) && (this.stats.handBacks[BH]++, this.callbacks.handBack(HH.journalId, HH.sequence, HH.parts, HH.totalParts))
      }
    }
    const TB = jH.c;
    class UB {
      constructor(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = HH, this.uploadToken = BH, this.nextTelemetrySequence = LH, this.queuedDomAfter = AH, this.nowMs = rH, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(HH, BH, LH, AH, rH) {
        const SH = this.segment(HH, BH, LH, AH);
        if (void 0 === rH) return void this.request(SH, 0);
        const hH = rH.then((() => {
          this.stopped || this.segments.get(OB(HH, BH)) !== SH || SH.requested || this.request(SH, 0), this.videoDue === hH && (this.videoDue = null)
        }));
        this.videoDue = hH
      }
      async takeDom(HH) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, HH);
        const BH = this.dom;
        if ((null === BH || void 0 === BH ? void 0 : BH.sequence) !== HH) return;
        this.dom = null;
        const LH = await BH.upload;
        return void 0 !== LH && VB(LH, this.nowMs()) ? LH.upload : void 0
      }
      async get(HH, BH, LH, AH, rH) {
        const SH = this.segment(HH, BH, LH, rH),
          hH = SH.requests.find((HH => AH >= HH.first && AH < HH.end));
        if (void 0 === this.valid(SH, AH) && void 0 !== hH) {
          const HH = await hH.answer.catch((() => null));
          if (null !== HH && "rejected" in HH) return HH
        }
        let tH = this.valid(SH, AH);
        if (void 0 === tH) {
          const HH = await this.request(SH, AH).answer;
          if ("rejected" in HH) return HH;
          tH = HH[0]
        }
        return tH
      }
      takeTelemetry(HH) {
        const BH = this.telemetry;
        if ((null === BH || void 0 === BH ? void 0 : BH.sequence) === HH) return this.telemetry = null, VB(BH.LX, this.nowMs()) ? BH.LX.target : void 0
      }
      peek(HH, BH, LH) {
        const AH = this.segments.get(OB(HH, BH));
        return void 0 === AH ? void 0 : this.valid(AH, LH)
      }
      expire(HH, BH, LH) {
        const AH = this.segments.get(OB(HH, BH)),
          rH = null === AH || void 0 === AH ? void 0 : AH.LX.get(LH);
        if (void 0 !== AH && void 0 !== rH)
          for (const [SH, hH] of AH.LX) hH.expiresAtMs <= rH.expiresAtMs && AH.LX.delete(SH)
      }
      stop() {
        this.stopped = !0
      }
      forget(HH, BH) {
        this.segments.delete(OB(HH, BH))
      }
      segment(HH, BH, LH, AH) {
        const rH = OB(HH, BH);
        let SH = this.segments.get(rH);
        return void 0 === SH && (SH = {
          kind: HH,
          sequence: BH,
          contentType: LH,
          slots: AH,
          LX: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(rH, SH)), SH
      }
      valid(HH, BH) {
        const LH = HH.LX.get(BH);
        return void 0 !== LH && VB(LH, this.nowMs()) ? LH.target : void 0
      }
      telemetryToAskFor() {
        const HH = this.nextTelemetrySequence(),
          BH = this.telemetry;
        return this.telemetryAsked === HH || null !== BH && BH.sequence === HH && VB(BH.LX, this.nowMs()) ? null : HH
      }
      domToAskFor() {
        var HH;
        const BH = this.queuedDomAfter(this.domTaken);
        return null === BH || BH.sequence === (null === (HH = this.dom) || void 0 === HH ? void 0 : HH.sequence) ? null : BH
      }
      request(HH, BH) {
        const LH = BH < HH.slots.count ? HH.slots.count : BH + 1,
          AH = this.nowMs();
        HH.requested = !0;
        const rH = "video" === HH.kind ? this.telemetryToAskFor() : null;
        null !== rH && (this.telemetryAsked = rH);
        const SH = "video" === HH.kind ? this.domToAskFor() : null,
          hH = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: HH.kind,
            sequence: HH.sequence,
            contentType: HH.contentType,
            parts: {
              first: BH,
              count: LH - BH,
              maxBytes: HH.slots.maxBytes
            },
            ...null === rH ? {} : {
              nextTelemetry: {
                sequence: rH,
                maxBytes: TB
              }
            },
            ...null === SH ? {} : {
              dom: SH
            }
          });
        if (null !== SH) {
          const HH = hH.then((HH => {
            if ("rejected" in HH || void 0 === HH.domUpload) return;
            const {
              expiresInSecs: BH,
              ...LH
            } = HH.domUpload;
            return {
              upload: LH,
              expiresAtMs: AH + 1e3 * BH
            }
          }), (() => {
            var HH;
            (null === (HH = this.dom) || void 0 === HH ? void 0 : HH.sequence) === SH.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: SH.sequence,
            upload: HH
          }
        }
        const tH = hH.then((LH => {
            var SH, hH;
            if ("rejected" in LH) return LH;
            const tH = AH + 1e3 * LH.expiresInSecs;
            LH.targets.forEach(((LH, AH) => {
              HH.LX.set(BH + AH, {
                target: LH,
                expiresAtMs: tH
              })
            }));
            return null !== rH && rH >= this.nextTelemetrySequence() && (null !== (SH = null === (hH = this.telemetry) || void 0 === hH ? void 0 : hH.sequence) && void 0 !== SH ? SH : -1) <= rH && void 0 !== LH.telemetryTarget && (this.telemetry = {
              sequence: rH,
              LX: {
                target: LH.telemetryTarget,
                expiresAtMs: tH
              }
            }), LH.targets
          })),
          zH = {
            first: BH,
            end: LH,
            answer: tH
          };
        HH.requests.push(zH);
        const CH = () => {
          HH.requests.splice(HH.requests.indexOf(zH), 1), null !== rH && this.telemetryAsked === rH && (this.telemetryAsked = null)
        };
        return tH.then(CH, CH), zH
      }
    }

    function VB(HH, BH) {
      return HH.expiresAtMs - 6e4 > BH
    }

    function OB(HH, BH) {
      return `${HH}:${BH}`
    }
    const bB = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function kB(HH) {
      return new Promise((BH => {
        const LH = () => {
            clearTimeout(AH), window.removeEventListener("online", LH), BH()
          },
          AH = setTimeout(LH, HH);
        window.addEventListener("online", LH)
      }))
    }
    const mB = ["video", "dom"],
      oB = "video",
      IB = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      fB = "an earlier part of its segment was dropped",
      lB = new Set([403, 408, 409, 429]),
      KB = new Set(["RequestTimeout", "IncompleteBody"]);
    class cB {
      constructor(HH, BH, LH, AH) {
        this.transport = HH, this.uploadToken = BH, this.options = LH, this.callbacks = AH, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new UB(HH, BH, (() => {
          var HH;
          return null !== (HH = this.nextSequence.get("telemetry")) && void 0 !== HH ? HH : 0
        }), (HH => {
          const BH = this.queue.find((BH => "dom" === BH.kind && BH.sequence > HH));
          return void 0 === BH ? null : {
            sequence: BH.sequence,
            byteLength: BH.bytes.byteLength
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
        return this.queue.map((HH => {
          let {
            kind: BH,
            sequence: LH,
            meta: AH
          } = HH;
          return {
            kind: BH,
            sequence: LH,
            meta: AH
          }
        }))
      }
      openSegment(HH, BH, LH, AH) {
        const rH = this.takeSequence(HH);
        return this.prefetchTargets(HH, rH, BH, LH, AH), rH
      }
      prefetchTargets(HH, BH, LH, AH, rH) {
        this.stopped || this.targets.prefetch(HH, BH, LH, AH, rH)
      }
      peekTarget(HH, BH, LH) {
        return this.targets.peek(HH, BH, LH)
      }
      closeSegment(HH, BH) {
        this.targets.forget(HH, BH), HH === oB && this.brokenSegments.delete(BH)
      }
      enqueue(HH) {
        var BH, LH;
        const AH = null !== (BH = null === (LH = HH.part) || void 0 === LH ? void 0 : LH.sequence) && void 0 !== BH ? BH : null;
        if (this.stopped) return this.callbacks.onDropped(HH, "uploader stopped", AH), null;
        if (null !== AH && HH.kind === oB && this.brokenSegments.has(AH)) return this.callbacks.onDropped(HH, fB, AH), null;
        "still" === HH.kind && this.removeQueued(HH.kind);
        const rH = {
            ...HH,
            sequence: null !== AH && void 0 !== AH ? AH : this.takeSequence(HH.kind)
          },
          SH = this.queue.findIndex(((BH, LH) => (LH > 0 || !this.uploadInFlight) && IB[BH.kind] > IB[HH.kind]));
        return this.queue.splice(-1 === SH ? this.queue.length : SH, 0, rH), this.queuedBytes += HH.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(rH) ? rH.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const HH of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= HH.bytes.byteLength, this.callbacks.onDropped(HH, "uploader stopped", HH.sequence)
      }
      takeSequence(HH) {
        var BH;
        const LH = null !== (BH = this.nextSequence.get(HH)) && void 0 !== BH ? BH : 0;
        return this.nextSequence.set(HH, LH + 1), LH
      }
      removeQueued(HH) {
        for (let BH = this.queue.length - 1; BH >= (this.uploadInFlight ? 1 : 0); BH--)
          if (this.queue[BH].kind === HH) {
            const [HH] = this.queue.splice(BH, 1);
            this.queuedBytes -= HH.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const HH of mB)
          for (const BH of [!1, !0])
            for (let LH = this.uploadInFlight ? 1 : 0; LH < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const AH = this.queue[LH];
              if (AH.kind !== HH || !0 === AH.dropLast && !BH) {
                LH++;
                continue
              }
              const [rH] = this.queue.splice(LH, 1);
              this.queuedBytes -= rH.bytes.byteLength, this.callbacks.onDropped(rH, "backlog over cap", rH.sequence), this.segmentBroken(rH)
            }
      }
      segmentBroken(HH) {
        if (void 0 !== HH.part && HH.kind === oB) {
          this.brokenSegments.add(HH.sequence);
          for (let BH = this.queue.length - 1; BH >= (this.uploadInFlight ? 1 : 0); BH--) {
            const LH = this.queue[BH];
            LH.kind === oB && void 0 !== LH.part && LH.sequence === HH.sequence && (this.queue.splice(BH, 1), this.queuedBytes -= LH.bytes.byteLength, this.callbacks.onDropped(LH, fB, LH.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const HH = this.queue[0];
            this.uploadInFlight = !0;
            const BH = await this.upload(HH);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= HH.bytes.byteLength, "uploaded" !== BH.type ? (this.callbacks.onDropped(HH, BH.reason, HH.sequence), this.segmentBroken(HH), "refused" !== BH.type || this.stopped || "telemetry" !== HH.kind || (console.warn(`Session replay uploads refused (${BH.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(BH.reason))) : this.callbacks.onUploaded(HH, HH.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(HH) {
        let BH = null,
          LH = 0;
        for (let rH = 1;; rH++) {
          try {
            if (null === BH) {
              const LH = await this.requestTarget(HH);
              if ("rejected" in LH) {
                if (!LH.retryable) return {
                  type: "refused",
                  reason: LH.reason
                };
                throw new Error(`rejected for now: ${LH.reason}`)
              }
              BH = LH
            }
            try {
              "put" === BH.type ? await this.transport.put(BH.url, HH.bytes, HH.contentType, BH.ifNoneMatch) : await this.transport.post(BH.target, HH.bytes, HH.contentType)
            } catch (AH) {
              if (AH instanceof FH.c && null !== AH.status && AH.status < 500 && !lB.has(AH.status) && (null === AH.storageCode || !KB.has(AH.storageCode))) return console.warn(`Session replay ${HH.kind} segment ${HH.sequence} refused by storage:`, AH), {
                type: "dropped",
                reason: AH.message
              };
              throw AH
            }
            return {
              type: "uploaded"
            }
          } catch (AH) {
            const rH = AH instanceof Error ? AH.message : String(AH),
              SH = void 0 === HH.part ? "" : ` part ${HH.part.index}`;
            if (console.warn(`Session replay ${HH.kind} segment ${HH.sequence}${SH} upload failed:`, AH), AH instanceof FH.c && (403 === AH.status && (BH = null, void 0 !== HH.part && this.targets.expire(HH.kind, HH.sequence, HH.part.index)), ++LH >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: rH
            }
          }
          const SH = Math.min(3e4, this.options.baseBackoffMs * 2 ** (rH - 1));
          if (await this.options.wait(SH * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(HH) {
        const {
          part: BH
        } = HH;
        if (void 0 !== BH) {
          const LH = await this.targets.get(HH.kind, HH.sequence, HH.contentType, BH.index, BH.slots);
          return "rejected" in LH ? LH : {
            type: "post",
            target: LH
          }
        }
        const LH = "dom" === HH.kind ? await this.targets.takeDom(HH.sequence) : void 0;
        if (void 0 !== LH) return {
          type: "put",
          url: LH.uploadUrl,
          ifNoneMatch: LH.ifNoneMatch
        };
        const AH = "telemetry" === HH.kind && HH.bytes.byteLength <= TB ? this.targets.takeTelemetry(HH.sequence) : void 0;
        if (void 0 !== AH) return {
          type: "post",
          target: AH
        };
        const rH = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: HH.kind,
          sequence: HH.sequence,
          contentType: HH.contentType,
          byteLength: HH.bytes.byteLength
        });
        return "rejected" in rH ? rH : {
          type: "put",
          url: rH.uploadUrl,
          ifNoneMatch: rH.ifNoneMatch
        }
      }
    }
    class eB {
      constructor(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = HH, this.slots = BH, this.manifest = LH, this.journal = AH, this.cut = rH, this.joiner = SH, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(HH, BH) {
        switch (HH.type) {
          case "videoSegmentOpened": {
            var LH, AH;
            if (null !== (LH = this.joiner) && void 0 !== LH && LH.accepting) {
              var rH;
              const BH = this.uploader.takeSequence("video");
              this.joiner.open(HH.journalId, BH), this.openJournalId = HH.journalId, null === (rH = this.journal) || void 0 === rH || rH.videoQueued(HH.journalId, BH);
              break
            }
            const SH = this.uploader.openSegment("video", "video/mp4", this.slots, BH);
            this.segments.set(HH.journalId, {
              sequence: SH,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = HH.journalId, null === (AH = this.journal) || void 0 === AH || AH.videoQueued(HH.journalId, SH);
            break
          }
          case "videoPart": {
            var SH;
            if (null !== (SH = this.joiner) && void 0 !== SH && SH.owns(HH.journalId)) {
              const {
                index: BH,
                bytes: LH,
                meta: AH,
                completeUntilUs: rH,
                completeUntilIndex: SH
              } = HH;
              this.joiner.addPart(HH.journalId, {
                index: BH,
                bytes: LH,
                meta: AH,
                completeUntilUs: rH,
                completeUntilIndex: SH
              });
              break
            }
            const BH = this.segments.get(HH.journalId);
            void 0 !== BH && this.enqueuePart(HH.journalId, BH.sequence, HH);
            break
          }
          case "videoSegmentClosed": {
            var hH;
            if (null !== (hH = this.joiner) && void 0 !== hH && hH.owns(HH.journalId)) {
              var tH;
              if (this.openJournalId === HH.journalId && (this.openJournalId = null), HH.parts > 0) this.joiner.close(HH.journalId, HH.parts);
              else this.joiner.forget(HH.journalId), null === (tH = this.journal) || void 0 === tH || tH.videoSettled(HH.journalId);
              break
            }
            const BH = this.segments.get(HH.journalId);
            if (void 0 === BH) break;
            BH.totalParts = HH.parts, this.openJournalId === HH.journalId && (this.openJournalId = null), this.maybeDone(HH.journalId, BH);
            break
          }
        }
      }
      joinedStored(HH, BH, LH) {
        this.manifest.setVideoSegment(BH, LH.meta, null), this.storedWhole.set(BH, HH)
      }
      joinedHandedBack(HH, BH, LH, AH) {
        const rH = {
          sequence: BH,
          settledParts: 0,
          totalParts: AH,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(HH, rH), this.uploader.prefetchTargets("video", BH, "video/mp4", this.slots);
        for (const SH of LH) this.enqueuePart(HH, BH, SH)
      }
      enqueuePart(HH, BH, LH) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: LH.bytes,
          meta: {
            type: "video",
            meta: LH.meta,
            journalId: HH,
            index: LH.index,
            completeUntilUs: LH.completeUntilUs,
            completeUntilIndex: LH.completeUntilIndex
          },
          part: {
            sequence: BH,
            index: LH.index,
            slots: this.slots
          }
        })
      }
      landed(HH, BH) {
        if (null !== HH.completeUntilUs && HH.meta.endMs > HH.meta.startMs) {
          var LH, AH;
          const rH = this.segments.get(HH.journalId);
          void 0 !== rH && (rH.landedParts = HH.index + 1), this.manifest.setVideoSegment(BH, HH.meta, HH.index + 1), null === (LH = this.journal) || void 0 === LH || LH.videoPartLanded(HH.journalId, {
            partsLanded: HH.index + 1,
            completeUntilUs: HH.completeUntilUs,
            meta: HH.meta
          }, null !== (AH = HH.completeUntilIndex) && void 0 !== AH ? AH : 0)
        }
        this.settled(HH)
      }
      dropped(HH) {
        this.settled(HH), HH.journalId === this.openJournalId && HH.journalId !== this.cutJournalId && (this.cutJournalId = HH.journalId, this.cut())
      }
      listed(HH, BH) {
        if (null !== BH)
          for (const [AH, rH] of this.segments) rH.sequence === HH && (rH.listedParts = Math.max(rH.listedParts, BH), this.maybeDone(AH, rH));
        else {
          const BH = this.storedWhole.get(HH);
          var LH;
          void 0 !== BH && (this.storedWhole.delete(HH), null === (LH = this.journal) || void 0 === LH || LH.videoSettled(BH))
        }
      }
      settled(HH) {
        const BH = this.segments.get(HH.journalId);
        void 0 !== BH && (BH.settledParts++, this.maybeDone(HH.journalId, BH))
      }
      maybeDone(HH, BH) {
        if (null === BH.totalParts || BH.settledParts < BH.totalParts) return;
        const LH = BH.listedParts >= BH.landedParts;
        var AH, rH;
        BH.uploaded || (BH.uploaded = !0, this.uploader.closeSegment("video", BH.sequence), LH || null === (AH = this.journal) || void 0 === AH || AH.videoUploaded(HH));
        LH && (this.segments.delete(HH), null === (rH = this.journal) || void 0 === rH || rH.videoSettled(HH))
      }
    }
    var qB = LH(3287),
      gB = LH(5089);
    class NB {
      constructor(HH, BH) {
        this.deps = HH, this.videoStatus = BH, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new WB({
          onFirstCanvas: HH => {
            this.attachToCanvas(HH)
          },
          onCanvasSwapped: HH => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(HH), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: HH => {
            this.postToWorker({
              type: "resize",
              cssSize: HH
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
      attachToCanvas(HH) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(HH, this.deps.videoConfig)
        } catch (BH) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", BH), this.videoUnavailable(`video couldn't start: ${BH instanceof Error?BH.message:String(BH)}`)
        }
      }
      startVideo(HH, BH) {
        var LH, AH, rH;
        const SH = new zB,
          hH = (0, BB.m)(BH),
          tH = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          zH = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => CH), tH),
          CH = new eB(this.deps.uploader, hH, this.deps.manifest, this.deps.journal, tH, zH);
        SH.onmessage = HH => {
          this.onWorkerMessage(HH.data, CH)
        }, SH.onerror = HH => {
          console.error("Session replay video worker error.", HH.message), this.worker === SH && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${HH.message||"it didn't load"}`))
        }, this.worker = SH, this.uploads = CH, this.joiner = zH, this.deps.debug.joiner = null !== (LH = null === zH || void 0 === zH ? void 0 : zH.stats) && void 0 !== LH ? LH : null, this.videoStarted = !0, this.deps.stills.start();
        const EH = (0, oH.getOperatingSystem)(),
          XH = (0, mH.c)();
        this.postToWorker({
          type: "init",
          videoConfig: BH,
          partPlan: {
            ...hH,
            partDurationMs: BH.partDurationMs,
            keyframeIntervalMs: BH.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          encoderPreference: {
            preferSoftware: BH.softwareEncoderPlatforms.includes(EH),
            preferQualityLatency: "ios" === EH
          },
          journalRecordingId: null !== (AH = null === (rH = this.deps.journal) || void 0 === rH ? void 0 : rH.recordingId) && void 0 !== AH ? AH : null
        });
        const GH = function(HH, BH, LH, AH) {
          const rH = AH && HH.streamGrabEngines.includes(LH) ? "stream" : HH.videoFrameGrabPlatforms.includes(BH) ? "videoFrame" : "bitmap";
          return {
            path: rH,
            frameCostFloorMs: Math.max(HH.captureFrameCostFloorMs, "stream" === rH ? 2.5 : 0, "ios" === BH ? 3.5 : 0)
          }
        }(BH, EH, XH, YB.isSupported() && !HH.renderer.endsWith("webgpu"));
        this.capture = new uB(SH, BH.maxFps, {
          msPerSecond: BH.captureBudgetMsPerSecond,
          frameCostFloorMs: GH.frameCostFloorMs
        }, {
          path: GH.path,
          maxMacroblocks: BH.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (HH => {
          this.endVideo(), this.videoStopped("stopped_error", HH)
        })), this.capture.start(HH)
      }
      createJoiner(HH, BH, LH) {
        return new PB(HH, this.deps.recording.uploadToken, new wH(HH.url), {
          stored: (HH, LH, AH) => {
            BH().joinedStored(HH, LH, AH), this.deps.pageExit.segmentLanded()
          },
          handBack: (HH, LH, AH, rH) => {
            BH().joinedHandedBack(HH, LH, AH, rH)
          },
          cut: LH
        }, {
          wait: kB,
          nowMs: Date.now,
          maxHeldBytes: MB[this.deps.platformType]
        })
      }
      onWorkerMessage(HH, BH) {
        var LH, AH, rH, SH;
        switch (HH.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            BH.onWorkerMessage(HH, "videoSegmentOpened" === HH.type ? null === (LH = this.deps.dom()) || void 0 === LH ? void 0 : LH.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(HH, document.hidden);
            break;
          case "stats":
            rH = this.deps.debug, SH = HH.stats, rH.workerStats.push(SH), rH.workerStats.length > 120 && rH.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(HH.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = HH.level, null === (AH = this.capture) || void 0 === AH || AH.setMaxFps(HH.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, aH.d)(),
              level: HH.level,
              maxFps: HH.maxFps,
              reason: HH.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${HH.level} (${HH.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(HH.reason)
        }
      }
      videoUnavailable(HH) {
        var BH, LH;
        null === (BH = this.capture) || void 0 === BH || BH.stop(), this.capture = null, null === (LH = this.worker) || void 0 === LH || LH.terminate(), this.worker = null, this.videoStopped("stopped_error", HH)
      }
      videoStopped(HH, BH) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = BH, "stopped_error" === HH && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(HH, BH))
      }
      setVideoStatus(HH, BH) {
        this.videoStatus = HH, (0, qB.h)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, gB.f)(HH, BH)
      }
      maybeLogStats(HH) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const BH = Math.round(1e3 * HH.encodedFrames / HH.windowMs);
        console.warn(`Session replay stats: ${BH} fps encoded, ${HH.encodeWidth}x${HH.encodeHeight} ${HH.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var HH;
        null === (HH = this.capture) || void 0 === HH || HH.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const BH = this.worker;
        this.worker = null, setTimeout((() => {
          null === BH || void 0 === BH || BH.terminate()
        }), 15e3)
      }
      postToWorker(HH) {
        var BH;
        null === (BH = this.worker) || void 0 === BH || BH.postMessage(HH)
      }
    }
    const RB = 3 * jH.c / 4,
      jB = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var nB = LH(40769);
    const FB = {
        count: 1,
        maxBytes: BB.i
      },
      DB = "image/jpeg";
    class wB {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jH.g;
        this.uploader = HH, this.manifest = BH, this.relay = LH, this.keepalive = AH, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(HH, BH) {
        let {
          bytes: LH,
          small: AH,
          atMs: rH
        } = HH;
        const SH = LH.byteLength <= FB.maxBytes ? LH : AH;
        null !== SH && (this.latest = {
          bytes: SH,
          small: AH,
          atMs: rH
        }, BH && this.upload())
      }
      upload() {
        var HH, BH;
        const LH = this.latest;
        if (this.stopped || null === LH || LH.atMs <= (null !== (HH = null === (BH = this.queued) || void 0 === BH ? void 0 : BH.atMs) && void 0 !== HH ? HH : -1 / 0)) return;
        const AH = this.takeSequence();
        this.queued = {
          atMs: LH.atMs,
          sequence: AH
        }, this.uploader.enqueue({
          kind: "still",
          contentType: DB,
          bytes: LH.bytes,
          meta: {
            type: "still",
            atMs: LH.atMs,
            sequence: AH
          },
          part: {
            sequence: AH,
            index: 0,
            slots: FB
          }
        })
      }
      landed(HH) {
        this.manifest.setStill(HH.atMs, HH.sequence), this.uploader.closeSegment("still", HH.sequence)
      }
      dropped(HH) {
        this.uploader.closeSegment("still", HH.sequence)
      }
      beacon() {
        var HH, BH, LH, AH;
        const rH = this.latest;
        if (this.stopped || null === rH || rH.atMs <= (null !== (HH = null === (BH = this.manifest.contents.still) || void 0 === BH ? void 0 : BH.atMs) && void 0 !== HH ? HH : -1 / 0)) return;
        const SH = (null === (LH = this.queued) || void 0 === LH ? void 0 : LH.atMs) === rH.atMs ? this.queued : null;
        if (null !== SH && this.keepalive.isInFlight(DB)) return void this.manifest.setStill(rH.atMs, SH.sequence);
        const hH = null !== (AH = null === SH || void 0 === SH ? void 0 : SH.sequence) && void 0 !== AH ? AH : this.nextSequence,
          tH = this.uploader.peekTarget("still", hH, 0);
        if (void 0 !== tH)
          for (const zH of [rH.bytes, rH.small])
            if (null !== zH && this.sendBeacon(tH, zH)) return null === SH && this.takeSequence(), void this.manifest.setStill(rH.atMs, hH)
      }
      sendBeacon(HH, BH) {
        var LH, AH;
        const rH = null !== (LH = null === (AH = this.relay) || void 0 === AH ? void 0 : AH.beacon({
          method: "POST",
          url: HH.url,
          fields: HH.fields
        }, BH, DB, this.keepalive)) && void 0 !== LH ? LH : null;
        if (null !== rH) return rH;
        const {
          form: SH,
          byteLength: hH
        } = (0, nB.i)(HH, BH, DB);
        return this.keepalive.sendUploadBeacon(HH.url, SH, hH)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const HH = this.nextSequence++;
        return this.prefetchNext(), HH
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, DB, FB)
      }
    }
    var ZB = LH(5105),
      dB = LH(40772),
      aB = LH(40779),
      sB = LH(40785),
      JB = LH(7061),
      iB = LH(7065);

    function pB(HH) {
      return 50 * Math.floor(HH / 50)
    }
    class yB {
      constructor() {
        this.writer = new JB.e((0, aH.d)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(HH, BH) {
        null !== HH && (this.setActionBits(HH.getActionBits(), (0, aH.d)()), this.unsubscribers.push(HH.onKey(((HH, BH, LH, AH, rH, SH) => {
          const hH = (0, iB.h)(HH);
          rH ? this.writer.writeKey(pB(SH), hH, BH, LH, AH) : 0 !== hH && null === (0, iB.i)(HH) && this.writer.writeKey(pB(SH), 0, BH, LH, AH)
        })), HH.onActions(((HH, BH) => {
          this.setActionBits(HH, BH)
        })), HH.onPointerLock(((HH, BH) => {
          this.writer.writeEvent(BH, HH ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, QB.B)((() => {
          const HH = (0, QB.e)();
          this.writer.writeFrame((0, aH.d)() - HH, HH), this.framesSinceFpsSample++, BH()
        })))
      }
      writeState(HH, BH) {
        this.writer.writeState((0, aH.d)(), {
          backingWidth: HH.canvas.width,
          backingHeight: HH.canvas.height,
          cssWidth: HH.cssWidth,
          cssHeight: HH.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: HH.renderer,
          pingMs: HH.pingMs,
          hidden: BH,
          qualityLevel: HH.qualityLevel
        })
      }
      writeEvent(HH) {
        this.writer.writeEvent((0, aH.d)(), HH)
      }
      sampleFps() {
        const HH = performance.now(),
          BH = HH - this.lastFpsSampleMs,
          LH = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = HH, this.framesSinceFpsSample = 0, 0 === LH || BH <= 0 ? null : 1e3 * LH / BH
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const HH = this.writer.chunkStartMs,
          BH = (0, aH.d)(),
          LH = this.writer.takeChunk(BH);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(BH, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: LH,
          startMs: HH,
          endMs: BH
        }
      }
      stop() {
        for (const HH of this.unsubscribers) HH();
        this.unsubscribers = []
      }
      setActionBits(HH, BH) {
        HH !== this.actionBits && (this.actionBits = HH, this.writer.writeActions(pB(BH), HH))
      }
    }
    var HL = LH(5113),
      BL = LH(40792);
    class LL {
      constructor(HH, BH) {
        var LH;
        this.recording = HH, this.telemetry = new yB, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const AH = BH.dryRun ? null : null !== (LH = HH.partJoiner) && void 0 !== LH ? LH : null,
          rH = null === AH ? null : (0, nH.d)(ZH(AH)),
          hH = BH.dryRun ? new nB.c : new nB.e((0, kH.c)().segmentUploadUrl, {
            relay: rH
          });
        var zH, CH;
        this.videoConfig = BH.dryRun ? function(HH) {
          var BH, LH, AH, rH;
          const hH = SH[HH],
            tH = fH.e.getItem("replaySkipLowMemory"),
            zH = "boolean" === typeof tH ? tH : null;
          return {
            ...hH,
            maxFps: null !== (BH = cH("replayMaxFps")) && void 0 !== BH ? BH : hH.maxFps,
            maxMacroblocks: null !== (LH = cH("replayMaxMacroblocks")) && void 0 !== LH ? LH : hH.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (AH = cH("replayCaptureBudgetMs")) && void 0 !== AH ? AH : hH.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (rH = cH("replayCaptureCostFloorMs")) && void 0 !== rH ? rH : hH.captureFrameCostFloorMs,
            softwareEncoderPlatforms: eH("replayEncoder", "software", "hardware", hH.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: eH("replayGrab", "videoFrame", "bitmap", hH.videoFrameGrabPlatforms),
            streamGrabEngines: qH(hH.streamGrabEngines),
            skipLowMemoryDevices: null !== zH && void 0 !== zH ? zH : hH.skipLowMemoryDevices
          }
        }(BH.platformType) : HH.videoConfig && (zH = HH.videoConfig, CH = BH.platformType, {
          ...SH[CH],
          ...zH
        });
        const EH = (0, HL.e)(this.videoConfig);
        (0, qB.h)("recorded" === EH ? "video" : "dom_only", HH), this.manifest = new yH(HH.recordingId, HH.uploadToken, !BH.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: HH.expiresAtMs - 6e4,
          onSend: HH => {
            var BH;
            null === (BH = this.journal) || void 0 === BH || BH.manifestSent(HH)
          },
          onListed: HH => {
            let {
              list: BH,
              value: LH
            } = HH;
            var AH, rH;
            if ("videoSegments" === BH) null === (AH = this.video.uploads) || void 0 === AH || AH.listed(LH.sequence, null !== (rH = LH.parts) && void 0 !== rH ? rH : null);
            else if ("telemetrySegments" === BH) {
              var SH;
              null === (SH = this.journal) || void 0 === SH || SH.telemetrySettled(LH.sequence)
            } else {
              var hH;
              null === (hH = this.journal) || void 0 === hH || hH.domSettled(LH.sequence)
            }
          }
        }), !BH.dryRun && sB.d.supported && (this.journal = new rB(new sB.d, HH, this.manifest.contents, (0, kH.c)())), this.debug = function() {
          const HH = {
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
          return window.sessionReplayDebug = HH, HH
        }(), this.uploader = new cB(hH, HH.uploadToken, {
          ...bB,
          maxBacklogBytes: jB[BH.platformType],
          wait: kB
        }, {
          onUploaded: (HH, BH) => {
            var LH;
            this.debug.uploadedBytesByKind[HH.kind] = (null !== (LH = this.debug.uploadedBytesByKind[HH.kind]) && void 0 !== LH ? LH : 0) + HH.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(HH.meta, BH, HH.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (HH, BH, LH) => {
            var AH;
            if (console.warn(`Session replay dropped a ${HH.kind} segment: ${BH}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === HH.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (AH = this.video.uploads) || void 0 === AH || AH.dropped(HH.meta);
            else if ("still" === HH.meta.type) this.stills.dropped(HH.meta);
            else if ("telemetry" === HH.meta.type && null !== LH) {
              var rH;
              null === (rH = this.journal) || void 0 === rH || rH.telemetrySettled(LH)
            } else if ("dom" === HH.meta.type && null !== LH) {
              var SH;
              null === (SH = this.journal) || void 0 === SH || SH.domSettled(LH)
            }
          },
          onStopped: HH => {
            this.stop(`uploads refused: ${HH}`)
          }
        }), this.stills = new wB(this.uploader, this.manifest, rH), this.pageExit = new SB({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var HH, BH;
            null === (HH = this.dom) || void 0 === HH || HH.cut(), null === (BH = this.dom) || void 0 === BH || BH.cutAfterNextBatch()
          },
          postToWorker: HH => {
            this.video.postToWorker(HH)
          },
          writeEvent: HH => {
            this.telemetry.writeEvent(HH)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var HH;
            null === (HH = this.video.joiner) || void 0 === HH || HH.releaseAll()
          }
        }), this.video = new NB({
          recording: HH,
          videoConfig: this.videoConfig,
          joinerAccess: AH,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: BH.dryRun ? {
            logStats: !0 === fH.e.getItem("replayLogStats")
          } : KH,
          platformType: BH.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, EH);
        const XH = BH.dryRun ? function() {
          var HH;
          const BH = null !== (HH = (0, lH.g)() ? IH.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== HH ? HH : fH.e.getItem("replayPostHogHost");
          return "string" === typeof BH && BH.length > 0 ? {
            apiHost: BH,
            projectApiKey: "dry-run"
          } : null
        }() : HH.posthog;
        if (this.ownFpsMonitor = null === XH ? new BL.d({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, tH.k.subscribe("sessionReplayLowFps", (HH => {
            let {
              low: BH
            } = HH;
            this.isStopped || this.onLowFps(BH)
          })), tH.k.subscribe("sessionReplayStayProgress", (HH => {
            !this.isStopped && this.manifest.updateCurrentStay(HH) && this.manifest.sendSoon()
          })), tH.k.subscribe("sessionReplayGameQuit", (HH => {
            let {
              reasons: BH,
              gameName: LH
            } = HH;
            BH.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(LH) && this.pageExit.sendManifest()
          })), null !== BH.currentGame && (this.listStay(BH.currentGame), tH.k.AX("sessionReplayStayOpened", BH.currentGame.gameNameWithVariation)), this.start(HH.expiresAtMs), this.dom = null, null !== XH) {
          const LH = new OH(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: HH => this.isStopped || this.pageExit.isHiding || document.hidden && !HH
          }, this.journal, new bH.c);
          this.dom = LH, (0, gB.d)({
            recording: HH,
            posthog: XH,
            videoStatus: this.video.videoStatus,
            dryRun: BH.dryRun,
            onDomBatch: HH => {
              LH.add(HH)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var HH, BH;
        return null !== (HH = null === (BH = this.videoConfig) || void 0 === BH ? void 0 : BH.manifestIntervalMs) && void 0 !== HH ? HH : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(HH) {
        const {
          lobbyName: BH,
          ...LH
        } = HH;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === BH ? LH : {
          ...LH,
          lobbyName: BH
        })
      }
      gameJoined(HH) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(HH), tH.k.AX("sessionReplayStayOpened", HH.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(HH, BH) {
        this.isStopped || (this.manifest.addCreatorGrant(HH, BH), this.manifest.send())
      }
      onLowFps(HH) {
        this.lowFpsOpen = HH, HH && this.manifest.flagCurrentGame("lowFps")
      }
      start(HH) {
        const BH = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var HH;
          this.flushTelemetry(), null === (HH = this.dom) || void 0 === HH || HH.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, HH - Date.now() - 6e4))), this.pageExit.listen(BH), this.telemetry.attach((0, aB.c)(), (() => {
          var HH;
          null === (HH = this.video.capture) || void 0 === HH || HH.onAfterRender()
        }));
        for (const LH of ["error", "unhandledrejection"]) window.addEventListener(LH, (HH => {
          (0, dB.c)(HH) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: BH
        });
        (0, HL.h)((() => {
          this.video.onCellular()
        }), BH), null !== this.journal && (0, ZB.e)(BH)
      }
      stop(HH) {
        var BH, LH;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${HH}`), this.debug.stoppedReason = HH, this.lifetime.abort();
          for (const HH of this.timers) clearTimeout(HH);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, gB.g)(), this.telemetry.stop(), this.flushTelemetry(), null === (BH = this.dom) || void 0 === BH || BH.cut(), null === (LH = this.dom) || void 0 === LH || LH.close(), this.video.endVideo(), this.manifest.send(), (0, qB.h)("events_only", this.recording)
        }
      }
      onStateTick() {
        var HH;
        const BH = this.video.canvasWatch.check();
        if (null === BH) return;
        const {
          cssSize: LH
        } = this.video.canvasWatch, AH = hH.c.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: BH.canvas,
          cssWidth: LH.width,
          cssHeight: LH.height,
          renderer: BH.renderer,
          pingMs: AH,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= RB && this.flushTelemetry();
        const rH = this.telemetry.sampleFps(),
          SH = document.hidden ? null : rH;
        if (null === (HH = this.ownFpsMonitor) || void 0 === HH || HH.addSample(SH, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: SH,
            pingMs: AH
          }), null !== this.video.capture) {
          const {
            averageMs: HH,
            fps: BH,
            grabPath: LH
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: HH,
            budgetFps: BH,
            grabPath: LH
          }
        }
      }
      onSegmentUploaded(HH, BH, LH) {
        var AH;
        if ("video" === HH.type) null === (AH = this.video.uploads) || void 0 === AH || AH.landed(HH, BH);
        else if ("still" === HH.type) this.stills.landed(HH);
        else if ("dom" === HH.type) {
          var rH;
          null === (rH = this.journal) || void 0 === rH || rH.domLanded(BH, HH.chunk), this.manifest.addDomSegment({
            sequence: BH,
            ...HH.chunk
          })
        } else {
          var SH;
          null === (SH = this.journal) || void 0 === SH || SH.telemetryLanded(BH, LH, HH.startMs, HH.endMs), this.manifest.addTelemetrySegment(BH, HH.startMs, HH.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: HH,
          startMs: BH,
          endMs: LH
        } = this.telemetry.takeChunk(), AH = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: HH,
          meta: {
            type: "telemetry",
            startMs: BH,
            endMs: LH
          }
        });
        var rH;
        null !== AH && (null === (rH = this.journal) || void 0 === rH || rH.telemetryQueued(AH, HH, BH, LH));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7061: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => kH,
      i: () => mH
    });
    var AH = LH(7065);
    const rH = 827609666,
      SH = 2,
      hH = 1,
      tH = 13,
      zH = 1,
      CH = 2,
      EH = 3,
      XH = 4,
      GH = 5,
      YH = 7,
      uH = 19,
      QH = 6,
      WH = 7,
      MH = 7,
      xH = 1,
      vH = 2,
      PH = 4,
      TH = 65535,
      UH = 10,
      VH = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      OH = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function bH(HH) {
      return Math.max(0, Math.min(TH, Math.round(HH)))
    }
    class kH {
      constructor(HH) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(HH)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - tH
      }
      writeFrame(HH, BH) {
        this.reserve(YH);
        const LH = this.view,
          AH = this.length;
        LH.setUint8(AH, zH), LH.setUint32(AH + 1, this.timeUnits(HH), !0), LH.setUint16(AH + 5, bH(100 * BH), !0), this.length += YH
      }
      writeState(HH, BH) {
        this.reserve(uH);
        const LH = this.view,
          AH = this.length;
        LH.setUint8(AH, CH), LH.setUint32(AH + 1, this.timeUnits(HH), !0), LH.setUint16(AH + 5, bH(BH.backingWidth), !0), LH.setUint16(AH + 7, bH(BH.backingHeight), !0), LH.setUint16(AH + 9, bH(BH.cssWidth), !0), LH.setUint16(AH + 11, bH(BH.cssHeight), !0), LH.setUint16(AH + 13, bH(100 * BH.devicePixelRatio), !0), LH.setUint8(AH + 15, VH.indexOf(BH.renderer)), LH.setUint16(AH + 16, null === BH.pingMs ? TH : bH(Math.min(BH.pingMs, TH - 1)), !0), LH.setUint8(AH + 18, (BH.hidden ? 1 : 0) | (7 & BH.qualityLevel) << 1), this.length += uH
      }
      writeEvent(HH, BH) {
        this.reserve(QH);
        const LH = this.length;
        this.view.setUint8(LH, EH), this.view.setUint32(LH + 1, this.timeUnits(HH), !0), this.view.setUint8(LH + 5, OH.indexOf(BH)), this.length += QH
      }
      writeActions(HH, BH) {
        this.reserve(WH);
        const LH = this.length;
        this.view.setUint8(LH, XH), this.view.setUint32(LH + 1, this.timeUnits(HH), !0), this.view.setUint16(LH + 5, BH, !0), this.length += WH
      }
      writeKey(HH, BH, LH, AH, rH) {
        this.reserve(MH);
        const SH = this.length;
        this.view.setUint8(SH, GH), this.view.setUint32(SH + 1, this.timeUnits(HH), !0), this.view.setUint8(SH + 5, BH), this.view.setUint8(SH + 6, (LH ? xH : 0) | (AH ? vH : 0) | (rH ? PH : 0)), this.length += MH
      }
      takeChunk(HH) {
        const BH = this.buffer.slice(0, this.length);
        return this.startChunk(HH), BH
      }
      startChunk(HH) {
        this.baseEpochMs = HH, this.view.setUint32(0, rH, !0), this.view.setUint8(4, SH), this.view.setFloat64(5, HH, !0), this.length = tH
      }
      timeUnits(HH) {
        return Math.max(0, Math.round((HH - this.baseEpochMs) * UH))
      }
      reserve(HH) {
        if (this.length + HH <= this.buffer.byteLength) return;
        const BH = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(BH).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = BH, this.view = new DataView(BH)
      }
    }

    function mH(HH) {
      const BH = new DataView(HH),
        LH = HH.byteLength < tH ? 0 : BH.getUint8(4);
      if (LH < hH || LH > SH || BH.getUint32(0, !0) !== rH) throw new Error(`Not a version ${hH}-${SH} replay telemetry chunk`);
      const bH = BH.getFloat64(5, !0),
        kH = {
          baseEpochMs: bH,
          inputRecorded: LH >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        mH = HH => bH + BH.getUint32(HH, !0) / UH;
      let oH = tH;
      for (; oH < HH.byteLength;) {
        const HH = BH.getUint8(oH);
        if (HH === zH) kH.frames.push({
          atMs: mH(oH + 1),
          cpuFrameMs: BH.getUint16(oH + 5, !0) / 100
        }), oH += YH;
        else if (HH === CH) {
          var IH;
          const HH = BH.getUint16(oH + 16, !0),
            LH = BH.getUint8(oH + 18);
          kH.states.push({
            atMs: mH(oH + 1),
            backingWidth: BH.getUint16(oH + 5, !0),
            backingHeight: BH.getUint16(oH + 7, !0),
            cssWidth: BH.getUint16(oH + 9, !0),
            cssHeight: BH.getUint16(oH + 11, !0),
            devicePixelRatio: BH.getUint16(oH + 13, !0) / 100,
            renderer: null !== (IH = VH[BH.getUint8(oH + 15)]) && void 0 !== IH ? IH : "unknown",
            pingMs: HH === TH ? null : HH,
            hidden: 1 === (1 & LH),
            qualityLevel: LH >> 1 & 7
          }), oH += uH
        } else if (HH === EH) {
          var fH;
          kH.events.push({
            atMs: mH(oH + 1),
            event: null !== (fH = OH[BH.getUint8(oH + 5)]) && void 0 !== fH ? fH : "none"
          }), oH += QH
        } else if (HH === XH && kH.inputRecorded) kH.actions.push({
          atMs: mH(oH + 1),
          bits: BH.getUint16(oH + 5, !0)
        }), oH += WH;
        else {
          if (HH !== GH || !kH.inputRecorded) throw new Error(`Unknown replay telemetry record type ${HH} at byte ${oH}`);
          {
            var lH;
            const HH = BH.getUint8(oH + 6);
            kH.keys.push({
              atMs: mH(oH + 1),
              code: null !== (lH = AH.e[BH.getUint8(oH + 5)]) && void 0 !== lH ? lH : AH.e[0],
              down: 0 !== (HH & xH),
              bound: 0 !== (HH & vH),
              inPlay: 0 !== (HH & PH)
            }), oH += MH
          }
        }
      }
      return kH
    }
  },
  37014: HH => {
    HH.exports = function(HH, BH, LH, AH) {
      var rH = self || window;
      try {
        try {
          var SH;
          try {
            SH = new rH.Blob([HH])
          } catch (CH) {
            (SH = new(rH.BlobBuilder || rH.WebKitBlobBuilder || rH.MozBlobBuilder || rH.MSBlobBuilder)).append(HH), SH = SH.getBlob()
          }
          var hH = rH.URL || rH.webkitURL,
            tH = hH.createObjectURL(SH),
            zH = new rH[BH](tH, LH);
          return hH.revokeObjectURL(tH), zH
        } catch (CH) {
          return new rH[BH]("data:application/javascript,".concat(encodeURIComponent(HH)), LH)
        }
      } catch (CH) {
        if (!AH) throw Error("Inline worker is not supported");
        return new rH[BH](AH, LH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);