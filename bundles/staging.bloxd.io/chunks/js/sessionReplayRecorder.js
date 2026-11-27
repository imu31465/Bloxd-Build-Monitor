export const id = 64;
export const ids = [64];
export const modules = {
  41009: (RR, JR, GR) => {
    function yR() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function tR(RR) {
      return RR instanceof Uint8Array && (!yR() || !Buffer.isBuffer(RR))
    }

    function uR(RR) {
      return RR instanceof ArrayBuffer
    }

    function ZR(RR) {
      return !!yR() && Buffer.isBuffer(RR)
    }
    var qR = GR(41017).b,
      iR = GR(41023).d,
      fR = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    JR.e = function(RR) {
      if (!tR(RR) && !uR(RR) && !ZR(RR)) throw new TypeError(fR);
      var JR = !1,
        GR = !1;
      tR(RR) ? JR = !0 : uR(RR) && (GR = !0, RR = new Uint8Array(RR));
      var yR, qR, VR, KR = new iR(RR),
        wR = KR.maxCompressedLength();
      if (JR ? (yR = new Uint8Array(wR), VR = KR.compressToBuffer(yR)) : GR ? (yR = new ArrayBuffer(wR), qR = new Uint8Array(yR), VR = KR.compressToBuffer(qR)) : (yR = Buffer.alloc(wR), VR = KR.compressToBuffer(yR)), !yR.slice) {
        var rR = new Uint8Array(Array.prototype.slice.call(yR, 0, VR));
        if (JR) return rR;
        if (GR) return rR.buffer;
        throw new Error("Not implemented")
      }
      return yR.slice(0, VR)
    }
  },
  41023: (RR, JR) => {
    var GR = new Array(15);

    function yR(RR, JR) {
      return 506832829 * RR >>> JR
    }

    function tR(RR, JR) {
      return RR[JR] + (RR[JR + 1] << 8) + (RR[JR + 2] << 16) + (RR[JR + 3] << 24)
    }

    function uR(RR, JR, GR) {
      return RR[JR] === RR[GR] && RR[JR + 1] === RR[GR + 1] && RR[JR + 2] === RR[GR + 2] && RR[JR + 3] === RR[GR + 3]
    }

    function ZR(RR, JR, GR, yR, tR) {
      return GR <= 60 ? (yR[tR] = GR - 1 << 2, tR += 1) : GR < 256 ? (yR[tR] = 240, yR[tR + 1] = GR - 1, tR += 2) : (yR[tR] = 244, yR[tR + 1] = GR - 1 & 255, yR[tR + 2] = GR - 1 >>> 8, tR += 3),
        function(RR, JR, GR, yR, tR) {
          var uR;
          for (uR = 0; uR < tR; uR++) GR[yR + uR] = RR[JR + uR]
        }(RR, JR, yR, tR, GR), tR + GR
    }

    function qR(RR, JR, GR, yR) {
      return yR < 12 && GR < 2048 ? (RR[JR] = 1 + (yR - 4 << 2) + (GR >>> 8 << 5), RR[JR + 1] = 255 & GR, JR + 2) : (RR[JR] = 2 + (yR - 1 << 2), RR[JR + 1] = 255 & GR, RR[JR + 2] = GR >>> 8, JR + 3)
    }

    function iR(RR, JR, GR, yR) {
      for (; yR >= 68;) JR = qR(RR, JR, GR, 64), yR -= 64;
      return yR > 64 && (JR = qR(RR, JR, GR, 60), yR -= 60), qR(RR, JR, GR, yR)
    }

    function fR(RR, JR, qR, fR, VR) {
      for (var KR = 1; 1 << KR <= qR && KR <= 14;) KR += 1;
      var wR = 32 - (KR -= 1);
      "undefined" === typeof GR[KR] && (GR[KR] = new Uint16Array(1 << KR));
      var rR, eR = GR[KR];
      for (rR = 0; rR < eR.length; rR++) eR[rR] = 0;
      var aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR = JR + qR,
        pR = JR,
        gR = JR,
        bR = !0;
      if (qR >= 15)
        for (aR = lR - 15, nR = yR(tR(RR, JR += 1), wR); bR;) {
          AR = 32, UR = JR;
          do {
            if (LR = nR, CR = AR >>> 5, AR += 1, UR = (JR = UR) + CR, JR > aR) {
              bR = !1;
              break
            }
            nR = yR(tR(RR, UR), wR), WR = pR + eR[LR], eR[LR] = JR - pR
          } while (!uR(RR, JR, WR));
          if (!bR) break;
          VR = ZR(RR, gR, JR - gR, fR, VR);
          do {
            for (XR = JR, MR = 4; JR + MR < lR && RR[JR + MR] === RR[WR + MR];) MR += 1;
            if (JR += MR, VR = iR(fR, VR, XR - WR, MR), gR = JR, JR >= aR) {
              bR = !1;
              break
            }
            eR[yR(tR(RR, JR - 1), wR)] = JR - 1 - pR, WR = pR + eR[BR = yR(tR(RR, JR), wR)], eR[BR] = JR - pR
          } while (uR(RR, JR, WR));
          if (!bR) break;
          nR = yR(tR(RR, JR += 1), wR)
        }
      return gR < lR && (VR = ZR(RR, gR, lR - gR, fR, VR)), VR
    }

    function VR(RR) {
      this.array = RR
    }
    VR.prototype.maxCompressedLength = function() {
      var RR = this.array.length;
      return 32 + RR + Math.floor(RR / 6)
    }, VR.prototype.compressToBuffer = function(RR) {
      var JR, GR = this.array,
        yR = GR.length,
        tR = 0,
        uR = 0;
      for (uR = function(RR, JR, GR) {
          do {
            JR[GR] = 127 & RR, (RR >>>= 7) > 0 && (JR[GR] += 128), GR += 1
          } while (RR > 0);
          return GR
        }(yR, RR, uR); tR < yR;) uR = fR(GR, tR, JR = Math.min(yR - tR, 65536), RR, uR), tR += JR;
      return uR
    }, JR.d = VR
  },
  41017: (RR, JR) => {
    var GR = [0, 255, 65535, 16777215, 4294967295];

    function yR(RR, JR, GR, yR, tR) {
      var uR;
      for (uR = 0; uR < tR; uR++) GR[yR + uR] = RR[JR + uR]
    }

    function tR(RR, JR, GR, yR) {
      var tR;
      for (tR = 0; tR < yR; tR++) RR[JR + tR] = RR[JR - GR + tR]
    }

    function uR(RR) {
      this.array = RR, this.pos = 0
    }
    uR.prototype.readUncompressedLength = function() {
      for (var RR, JR, GR = 0, yR = 0; yR < 32 && this.pos < this.array.length;) {
        if (RR = this.array[this.pos], this.pos += 1, (JR = 127 & RR) << yR >>> yR !== JR) return -1;
        if (GR |= JR << yR, RR < 128) return GR;
        yR += 7
      }
      return -1
    }, uR.prototype.uncompressToBuffer = function(RR) {
      for (var JR, uR, ZR, qR, iR = this.array, fR = iR.length, VR = this.pos, KR = 0; VR < iR.length;)
        if (JR = iR[VR], VR += 1, 0 === (3 & JR)) {
          if ((uR = 1 + (JR >>> 2)) > 60) {
            if (VR + 3 >= fR) return !1;
            ZR = uR - 60, uR = 1 + ((uR = iR[VR] + (iR[VR + 1] << 8) + (iR[VR + 2] << 16) + (iR[VR + 3] << 24)) & GR[ZR]), VR += ZR
          }
          if (VR + uR > fR) return !1;
          yR(iR, VR, RR, KR, uR), VR += uR, KR += uR
        } else {
          switch (3 & JR) {
            case 1:
              uR = 4 + (JR >>> 2 & 7), qR = iR[VR] + (JR >>> 5 << 8), VR += 1;
              break;
            case 2:
              if (VR + 1 >= fR) return !1;
              uR = 1 + (JR >>> 2), qR = iR[VR] + (iR[VR + 1] << 8), VR += 2;
              break;
            case 3:
              if (VR + 3 >= fR) return !1;
              uR = 1 + (JR >>> 2), qR = iR[VR] + (iR[VR + 1] << 8) + (iR[VR + 2] << 16) + (iR[VR + 3] << 24), VR += 4
          }
          if (0 === qR || qR > KR) return !1;
          tR(RR, KR, qR, uR), KR += uR
        } return !0
    }, JR.b = uR
  },
  40994: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      SessionReplayRecorder: () => yG
    });
    const yR = {
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
      tR = {
        ...yR,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        captureBudgetMsPerSecond: 60,
        skipLowMemoryDevices: !0
      },
      uR = {
        desktop: yR,
        mobile: tR,
        tablet: tR
      };
    var ZR = GR(3918),
      qR = GR(32);
    const iR = 4194304,
      fR = 16777216;
    var VR = GR(4700);
    const KR = [2, 4, 9, 3],
      wR = VR.g,
      rR = [wR.MouseInteraction, wR.MouseMove, wR.TouchMove],
      eR = [wR.MouseMove, wR.MouseInteraction, wR.Scroll, wR.ViewportResize, wR.Input, wR.TouchMove, wR.MediaInteraction, wR.Drag],
      aR = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function LR(RR) {
      if ("object" !== typeof RR || null === RR || Array.isArray(RR)) return !1;
      const JR = RR.timestamp;
      return "number" === typeof JR && JR > 0 && JR <= 864e13
    }

    function nR(RR) {
      var JR;
      return RR.type === VR.d.IncrementalSnapshot ? null === (JR = RR.data) || void 0 === JR ? void 0 : JR.source : void 0
    }
    class UR {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(RR) {
        this.eventCount++;
        const JR = nR(RR);
        this.timestamps.push(RR.timestamp), this.active.push(function(RR) {
          var JR;
          return eR.includes(nR(RR)) || RR.type === VR.d.Custom && (null === (JR = RR.data) || void 0 === JR ? void 0 : JR.tag) === VR.l.active
        }(RR));
        const GR = function(RR) {
          var JR;
          const GR = RR.data;
          if (RR.type === VR.d.Custom && "$json_ld" === (null === GR || void 0 === GR ? void 0 : GR.tag)) return;
          const yR = "string" === typeof(null === GR || void 0 === GR ? void 0 : GR.href) ? GR.href.trim() : void 0,
            tR = "string" === typeof(null === GR || void 0 === GR || null === (JR = GR.payload) || void 0 === JR ? void 0 : JR.href) ? GR.payload.href.trim() : void 0;
          return yR || tR || void 0
        }(RR);
        GR && this.addUrl(GR), JR === wR.MouseInteraction && KR.includes(RR.data.type) && this.clickCount++, JR === wR.Input && this.keypressCount++, rR.includes(JR) && this.mouseActivityCount++;
        const yR = RR.data;
        if (RR.type === VR.d.Plugin && "rrweb/console@1" === (null === yR || void 0 === yR ? void 0 : yR.plugin)) {
          var tR;
          const RR = aR.get(null === (tR = yR.payload) || void 0 === tR ? void 0 : tR.level);
          "warn" === RR ? this.consoleWarnCount++ : "error" === RR ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(RR) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: RR,
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
      addUrl(RR) {
        const JR = RR.slice(0, 4096);
        this.firstUrl ??= JR, this.urls.size < 25 && !this.urls.has(JR) && this.urlsLength + JR.length <= 8192 && (this.urls.add(JR), this.urlsLength += JR.length)
      }
      activeMs() {
        var RR;
        const JR = this.timestamps.map(((RR, JR) => JR)).sort(((RR, JR) => this.timestamps[RR] - this.timestamps[JR]));
        let GR = 0,
          yR = null,
          tR = 0;
        for (const ZR of JR) {
          const RR = this.timestamps[ZR],
            JR = this.active[ZR],
            qR = !yR || JR && !yR.isActive || yR.isActive && tR + 5e3 < RR;
          var uR;
          if (tR = JR ? RR : tR, qR) null !== (uR = yR) && void 0 !== uR && uR.isActive && (GR += Math.max(1, yR.end - yR.start)), yR = {
            start: RR,
            end: RR,
            isActive: JR
          };
          else yR.end = RR
        }
        return null !== (RR = yR) && void 0 !== RR && RR.isActive && (GR += Math.max(1, yR.end - yR.start)), Math.floor(GR)
      }
    }
    const WR = 5592405.333333333;
    class AR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = RR, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new UR, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get WK() {
        return 0 === this.lines.length
      }
      get tooBigForExit() {
        return this.holdsSnapshot || this.chars >= 262144
      }
      add(RR) {
        const JR = RR.events.filter(LR),
          GR = JR.map((JR => JSON.stringify([RR.windowId, JR]) + "\n"));
        if (0 === GR.length) return [];
        const yR = [],
          tR = GR.reduce(((RR, JR) => RR + JR.length), 0);
        !this.WK && this.chars + tR > this.chunkChars && yR.push(this.finish());
        let uR = !1;
        return JR.forEach(((RR, JR) => {
          const tR = GR[JR];
          !this.WK && this.chars + tR.length > this.chunkChars && (yR.push(this.finish()), uR = !1), uR || (this.counter.addMessage(), uR = !0), this.counter.addEvent(RR), this.lines.push(tR), this.chars += tR.length, this.startMs = Math.min(this.startMs, RR.timestamp), this.endMs = Math.max(this.endMs, RR.timestamp), this.holdsSnapshot ||= RR.type === VR.d.FullSnapshot || RR.type === VR.d.Meta
        })), yR.filter((RR => null !== RR))
      }
      finish() {
        if (this.WK) return null;
        const {
          startMs: RR,
          endMs: JR,
          counter: GR,
          holdsSnapshot: yR,
          chunkIndex: tR,
          tailedChars: uR
        } = this, ZR = {
          text: this.lines.join(""),
          startMs: RR,
          endMs: JR,
          counter: GR,
          holdsSnapshot: yR,
          chunkIndex: tR,
          tailedChars: uR
        };
        return this.reset(), ZR
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > WR) return null;
        const RR = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, RR
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new UR, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function CR(RR) {
      let {
        text: JR
      } = RR;
      return JR.length <= WR
    }

    function XR(RR) {
      const {
        text: JR,
        startMs: GR,
        endMs: yR,
        counter: tR,
        chunkIndex: uR,
        tailedChars: ZR
      } = RR;
      return ZR !== JR.length && CR(RR) ? {
        chunkIndex: uR,
        fromChar: ZR,
        text: JR.slice(ZR),
        startMs: GR,
        endMs: yR,
        summary: tR.finish(0)
      } : null
    }

    function MR(RR, JR) {
      let {
        startMs: GR,
        endMs: yR,
        counter: tR,
        holdsSnapshot: uR
      } = RR, {
        bytes: ZR,
        inflatedBytes: qR
      } = JR;
      return ZR.byteLength > iR || qR > fR ? (console.warn(`Session replay: dropped a ${qR}-byte page recording chunk, over the size limits`), null) : {
        bytes: ZR,
        startMs: GR,
        endMs: yR,
        summary: tR.finish(qR),
        holdsSnapshot: uR
      }
    }
    var BR = GR(41001);
    class lR {
      constructor(RR, JR, GR, yR) {
        this.uploader = RR, this.timing = JR, this.journal = GR, this.packer = yR, this.writer = new AR, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(RR) {
        this.pack(this.writer.add(RR)), (this.cutNext || this.timing.cutsEachBatch() || this.writer.tooBigForExit) && (this.cutNext = !1, this.cut());
        const JR = this.journal;
        null === JR || null !== this.tailTimer || this.writer.WK || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const RR = this.writer.takeTail();
          null !== RR && JR.domTail(RR)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const RR = this.writer.finish();
        this.pack(null === RR ? [] : [RR])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.WK) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const RR = this.packing[this.packing.length - 1];
        return void 0 !== RR ? new Promise((JR => {
          const GR = RR.onQueued;
          RR.onQueued = () => {
            null === GR || void 0 === GR || GR(), JR()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(RR) {
        const JR = RR.filter((RR => {
            const JR = function(RR) {
              let {
                text: JR
              } = RR;
              return JR.length <= fR || (console.warn(`Session replay: dropped a page recording chunk of ${JR.length} characters, over the size limits`), !1)
            }(RR);
            var GR;
            JR || (null === (GR = this.journal) || void 0 === GR || GR.domTailDropped(RR.chunkIndex));
            return JR
          })),
          GR = this.journalWorks() && JR.every((RR => CR(RR))) && this.packing.every((RR => RR.journalled));
        if (this.timing.packsNow(GR)) {
          for (const RR of JR) this.packing.push({
            text: RR,
            packed: null,
            journalled: this.tailHolds(RR)
          });
          for (const RR of [...this.packing]) this.packHere(RR);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const yR of JR) {
          const RR = null === this.journal ? null : XR(yR);
          null !== RR && this.journal.domTail(RR);
          const JR = {
            text: yR,
            packed: null,
            journalled: this.tailHolds(yR)
          };
          this.packing.push(JR), this.packer.pack(yR.text).then((RR => {
            JR.packed = RR, this.queuePacked()
          }), (() => {
            this.packHere(JR), this.queuePacked()
          }))
        }
      }
      packHere(RR) {
        const JR = this.packing.indexOf(RR);
        if (!(JR < 0)) try {
          RR.packed ??= (0, BR.d)(RR.text.text)
        } catch (tR) {
          var GR, yR;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", tR), this.packing.splice(JR, 1), null === (GR = this.journal) || void 0 === GR || GR.domTailDropped(RR.text.chunkIndex), null === (yR = RR.onQueued) || void 0 === yR || yR.call(RR)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(RR) {
        return this.journalWorks() && CR(RR)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: RR,
            packed: JR,
            onQueued: GR
          } = this.packing.shift();
          this.enqueue(RR.chunkIndex, MR(RR, JR)), null === GR || void 0 === GR || GR()
        }
      }
      enqueue(RR, JR) {
        var GR;
        if (null === JR) return void(null === (GR = this.journal) || void 0 === GR || GR.domTailDropped(RR));
        const {
          startMs: yR,
          endMs: tR,
          summary: uR,
          holdsSnapshot: ZR
        } = JR, qR = JR.bytes.buffer, iR = {
          startMs: yR,
          endMs: tR,
          byteLength: qR.byteLength,
          summary: uR
        }, fR = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: qR,
          meta: {
            type: "dom",
            chunk: iR
          },
          dropLast: ZR
        });
        var VR, KR;
        null === fR ? null === (VR = this.journal) || void 0 === VR || VR.domTailDropped(RR) : null === (KR = this.journal) || void 0 === KR || KR.domQueued(fR, qR, iR, RR)
      }
    }
    var pR = GR(41028);
    var gR = GR(41031),
      bR = GR(4139),
      vR = GR(103),
      OR = GR(112),
      xR = GR(46),
      NR = GR(5492);
    const DR = {
      logStats: !1
    };

    function HR(RR) {
      const JR = xR.i.getItem(RR);
      return "number" === typeof JR && Number.isFinite(JR) ? JR : null
    }

    function oR(RR, JR, GR, yR) {
      const tR = xR.i.getItem(RR);
      return tR === JR ? [(0, vR.getOperatingSystem)()] : tR === GR ? [] : yR
    }

    function cR(RR) {
      const JR = xR.i.getItem("replayGrab");
      return "stream" === JR ? [(0, bR.d)()] : "videoFrame" === JR || "bitmap" === JR ? [] : RR
    }
    const PR = "/v1/release",
      IR = iR;
    var mR = GR(1295),
      zR = GR(41038),
      SR = GR(41041),
      jR = GR(41046);

    function dR(RR) {
      return `replayJoiner/${RR}`
    }
    class ER {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zR.i;
        this.baseUrl = RR, this.keepalive = JR
      }
      postPart(RR, JR) {
        const GR = (0, SR.g)(RR, JR),
          yR = 15e3 + (tR = GR.size, Math.ceil(tR / 16384 * 1e3));
        var tR;
        return this.post("/v1/part", GR, GR.size, yR, RR.sequence)
      }
      finish(RR) {
        const JR = JSON.stringify(RR);
        return this.post("/v1/finish", JR, (0, zR.j)(JR), 3e4, RR.sequence)
      }
      release(RR) {
        return !this.keepalive.isInFlight(dR(RR.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${PR}`, JSON.stringify(RR))
      }
      async post(RR, JR, GR, yR, tR) {
        const uR = `${this.baseUrl}${RR}`,
          ZR = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: JR,
            signal: (0, mR.t)(yR)
          },
          qR = GR <= zR.e ? await this.keepalive.fetch(uR, ZR, GR, dR(tR)) : await fetch(uR, ZR);
        if (!qR.ok) throw new jR.d(`Part joiner ${RR} failed with ${qR.status}`, qR.status);
        return await qR.json()
      }
    }

    function YR(RR) {
      return {
        releaseUrl: `${RR.url}${PR}`,
        token: RR.token,
        relay: {
          url: `${RR.url}/v1/relay`,
          maxBytes: IR
        }
      }
    }
    var kR = GR(7630),
      QR = GR(41049),
      FR = GR(41051),
      TR = GR(41053);

    function sR() {
      return (0, gR.c)().manifestUrl
    }
    const hR = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class RJ {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = JR, this.sendEnabled = GR, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...hR,
          ...yR
        };
        const tR = Math.round((0, QR.c)());
        this.manifest = {
          recordingId: RR,
          startedAtMs: tR,
          endedAtMs: tR,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(RR, JR, GR) {
        const yR = {
            sequence: RR,
            ...JR,
            startMs: Math.round(JR.startMs),
            endMs: Math.round(JR.endMs),
            ...null === GR ? {} : {
              parts: GR
            }
          },
          tR = this.manifest.videoSegments.findIndex((JR => JR.sequence === RR)); - 1 === tR ? this.manifest.videoSegments.push(yR) : this.manifest.videoSegments[tR] = yR, this.sendSoon()
      }
      setStill(RR, JR) {
        var GR, yR;
        RR > (null !== (GR = null === (yR = this.manifest.still) || void 0 === yR ? void 0 : yR.atMs) && void 0 !== GR ? GR : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(RR),
          sequence: JR
        }, this.sendSoon())
      }
      addTelemetrySegment(RR, JR, GR) {
        this.manifest.telemetrySegments.push({
          sequence: RR,
          startMs: Math.round(JR),
          endMs: Math.round(GR)
        }), this.sendSoon()
      }
      addDomSegment(RR) {
        this.pendingDom.add(RR), this.sendSoon()
      }
      addCreatorGrant(RR, JR) {
        this.creatorGrants.set(RR, JR)
      }
      gameJoined(RR) {
        this.gameLeft(), this.manifest.games.push({
          ...RR,
          joinedAtMs: Math.round((0, QR.c)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(RR) {
        const JR = this.manifest.games.at(-1);
        return !(!JR || (null === RR ? null !== JR.leftAtMs : JR.gameNameWithVariation !== RR)) && (JR.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(RR) {
        const JR = this.manifest.games.at(-1);
        JR && null === JR.leftAtMs && (JR[RR] = !0)
      }
      updateCurrentStay(RR) {
        var JR, GR, yR;
        const tR = this.manifest.games.at(-1);
        if (!tR || null !== tR.leftAtMs) return !1;
        const uR = (0, kR.l)(tR.furthestStep, RR.furthestStep),
          ZR = Math.max(null !== (JR = tR.unboundKeyPresses) && void 0 !== JR ? JR : 0, null !== (GR = RR.unboundKeyPresses) && void 0 !== GR ? GR : 0);
        return (uR !== tR.furthestStep || ZR !== (null !== (yR = tR.unboundKeyPresses) && void 0 !== yR ? yR : 0)) && (void 0 !== uR && (tR.furthestStep = uR), ZR > 0 && (tR.unboundKeyPresses = ZR), !0)
      }
      gameLeft() {
        const RR = this.manifest.games.at(-1);
        RR && null === RR.leftAtMs && (RR.leftAtMs = Math.round((0, QR.c)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(RR) {
        this.schedule(1e3, RR)
      }
      send() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var JR;
        if (this.sending) return void(this.queuedSend = JJ(null !== (JR = this.queuedSend) && void 0 !== JR ? JR : [], RR));
        const GR = this.prepareSend(RR);
        null !== GR && (this.sending = !0, this.postInTurn(GR).then((RR => {
          this.sending = !1, this.retries = "retryLater" === RR ? this.retries + 1 : 0;
          const JR = this.queuedSend;
          null !== JR ? (this.queuedSend = null, this.send(JR)) : "retryLater" === RR && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: GR
          }
          of null !== (JR = this.prepareSend(RR)) && void 0 !== JR ? JR : []) {
          var JR;
          zR.i.sendBeacon(sR(), JSON.stringify(GR)) || (0, FR.b)(sR(), GR)
        }
      }
      async postInTurn(RR) {
        for (const {
            request: JR,
            items: GR
          }
          of RR) {
          const RR = await (0, FR.b)(sR(), JR);
          if ("retryLater" === RR) return RR;
          for (const JR of GR) JR.ack("uploaded" === RR);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(RR, JR) {
        const GR = Date.now() + RR;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= GR) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const yR = setTimeout((() => {
          this.send(JR())
        }), RR);
        this.sendTimer = {
          timer: yR,
          dueMs: GR
        }
      }
      prepareSend(RR) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, QR.c)());
        const JR = this.pendingItems(RR);
        this.options.onSend({
          ...this.manifest,
          games: JR.flatMap((RR => "games" === RR.list ? [RR.value] : []))
        });
        const {
          recordingId: GR,
          startedAtMs: yR,
          endedAtMs: tR,
          still: uR
        } = this.manifest, ZR = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: GR,
            startedAtMs: yR,
            endedAtMs: tR,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === uR ? {} : {
              still: uR
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, TR.b)(ZR, JR)
      }
      pendingItems(RR) {
        const JR = [];
        for (const yR of this.creatorGrants.values()) this.ackedGrants.has(yR) || JR.push({
          list: "creatorGrants",
          value: yR,
          ack: () => {
            this.ackedGrants.add(yR)
          }
        });
        for (const yR of this.manifest.games) {
          const RR = JSON.stringify(yR);
          this.ackedGames.get(yR) !== RR && JR.push({
            list: "games",
            value: {
              ...yR
            },
            ack: () => {
              this.ackedGames.set(yR, RR)
            }
          })
        }
        for (const yR of this.manifest.videoSegments) this.ackedVideo.get(yR.sequence) !== yR && JR.push({
          list: "videoSegments",
          value: yR,
          ack: RR => {
            this.ackedVideo.set(yR.sequence, yR), RR && this.options.onListed({
              list: "videoSegments",
              value: yR
            })
          }
        });
        const GR = new Set;
        for (const yR of this.manifest.telemetrySegments) GR.add(yR.sequence), this.ackedTelemetry.has(yR) || JR.push({
          list: "telemetrySegments",
          value: yR,
          ack: RR => {
            this.ackedTelemetry.add(yR), RR && this.options.onListed({
              list: "telemetrySegments",
              value: yR
            })
          }
        });
        for (const yR of this.pendingDom) JR.push({
          list: "domSegments",
          value: yR,
          ack: RR => {
            this.pendingDom.delete(yR), RR && this.options.onListed({
              list: "domSegments",
              value: yR
            })
          }
        });
        for (const yR of JJ([], RR)) GR.has(yR.sequence) || JR.push({
          list: "telemetrySegments",
          value: yR,
          ack: () => {}
        });
        return JR
      }
    }

    function JJ(RR, JR) {
      const GR = [...RR];
      for (const yR of JR) GR.some((RR => RR.sequence === yR.sequence)) || GR.push({
        sequence: yR.sequence,
        startMs: Math.round(yR.startMs),
        endMs: Math.round(yR.endMs)
      });
      return GR
    }
    var GJ = GR(41034),
      yJ = GR(5506);

    function tJ(RR) {
      return {
        ...RR,
        videoSegments: [],
        telemetrySegments: [],
        games: RR.games.map((RR => ({
          ...RR
        })))
      }
    }
    class uJ {
      constructor(RR, JR, GR, yR) {
        var tR;
        this.journal = RR, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: JR.recordingId,
          uploadToken: JR.uploadToken,
          expiresAtMs: JR.expiresAtMs,
          nextVideoSequence: 0,
          manifest: tJ(GR),
          endpoints: yR,
          lateUploadUntilMs: JR.expiresAtMs + GJ.d,
          ...void 0 === JR.partJoiner ? {} : {
            partJoiner: YR(JR.partJoiner)
          }
        }, null === (tR = navigator.locks) || void 0 === tR || tR.request((0, yJ.w)(JR.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(RR) {
        this.record.manifest = tJ(RR), this.putRecording()
      }
      videoQueued(RR, JR) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, JR + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), RR, JR)
      }
      videoPartLanded(RR, JR, GR) {
        this.landedVideo.set(RR, {
          segmentId: RR,
          ...JR
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: RR,
          ...JR
        }, GR)
      }
      telemetryQueued(RR, JR, GR, yR) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: RR,
          startMs: GR,
          endMs: yR,
          bytes: JR
        })
      }
      videoUploaded(RR) {
        this.journal.removeVideoChunks(this.record.recordingId, RR)
      }
      videoSettled(RR) {
        this.landedVideo.delete(RR), this.journal.removeVideo(this.record.recordingId, RR)
      }
      telemetryLanded(RR, JR, GR, yR) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: RR,
          startMs: GR,
          endMs: yR,
          bytes: JR,
          landed: !0
        })
      }
      telemetrySettled(RR) {
        this.journal.removeTelemetry(this.record.recordingId, RR)
      }
      domQueued(RR, JR, GR, yR) {
        var tR;
        this.record.nextDomSequence = Math.max(null !== (tR = this.record.nextDomSequence) && void 0 !== tR ? tR : 0, RR + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: RR,
          chunk: GR,
          bytes: JR
        }, yR)
      }
      domTail(RR) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...RR
        })
      }
      domTailDropped(RR) {
        this.journal.removeDomTail(this.record.recordingId, RR)
      }
      domLanded(RR, JR) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: RR,
          chunk: JR,
          bytes: null
        })
      }
      domSettled(RR) {
        this.journal.removeDom(this.record.recordingId, RR)
      }
      setMarker() {
        xR.i.setItem(yJ.m, !0)
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
    class ZJ {
      constructor(RR) {
        this.deps = RR, this.pageHiding = !1, this.exitFlushedAtMs = -1 / 0
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(RR) {
        document.addEventListener("visibilitychange", (() => {
          const RR = document.hidden;
          this.deps.writeEvent(RR ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: RR
          }), RR ? (this.flushTelemetryOnExit(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording()) : this.exitFlushedAtMs = -1 / 0
        }), {
          signal: RR
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: RR
        }), window.addEventListener("pagehide", (RR => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.flushTelemetryOnExit(), this.deps.stills.beacon(), this.sendManifest(), RR.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: RR
        })
      }
      flushTelemetryOnExit() {
        const RR = performance.now();
        RR - this.exitFlushedAtMs > 1e3 && (this.deps.flushTelemetry(), this.exitFlushedAtMs = RR)
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((RR => {
          let {
            sequence: JR,
            meta: GR
          } = RR;
          return "telemetry" === GR.type ? [{
            sequence: JR,
            startMs: GR.startMs,
            endMs: GR.endMs
          }] : []
        }))
      }
    }
    var qJ = GR(37156),
      iJ = GR.n(qJ);

    function fJ() {
      return iJ()('/*! For license information please see sessionReplayVideo.worker.14b10f1e.worker.js.LICENSE.txt */\n(()=>{var RR={5:()=>{}},JR={};function GR(yR){var tR=JR[yR];if(void 0!==tR)return tR.exports;var uR=JR[yR]={exports:{}};return RR[yR](uR,uR.exports,GR),uR.exports}(()=>{var RR,JR=Object.getPrototypeOf?RR=>Object.getPrototypeOf(RR):RR=>RR.__proto__;GR.t=function(yR,tR){if(1&tR&&(yR=this(yR)),8&tR)return yR;if("object"===typeof yR&&yR){if(4&tR&&yR.__esModule)return yR;if(16&tR&&"function"===typeof yR.then)return yR}var uR=Object.create(null);GR.r(uR);var ZR={};RR=RR||[null,JR({}),JR([]),JR(JR)];for(var qR=2&tR&&yR;"object"==typeof qR&&!~RR.indexOf(qR);qR=JR(qR))Object.getOwnPropertyNames(qR).forEach((RR=>ZR[RR]=()=>yR[RR]));return ZR.default=()=>yR,GR.d(uR,ZR),uR}})(),GR.d=(RR,JR)=>{for(var yR in JR)GR.o(JR,yR)&&!GR.o(RR,yR)&&Object.defineProperty(RR,yR,{enumerable:!0,get:JR[yR]})},GR.o=(RR,JR)=>Object.prototype.hasOwnProperty.call(RR,JR),GR.r=RR=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(RR,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(RR,"__esModule",{value:!0})};const yR="bloxdSessionReplayTails";const tR=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function uR(RR){return new Promise(((JR,GR)=>{RR.onsuccess=()=>{JR(RR.result)},RR.onerror=()=>{GR(RR.error)}}))}function ZR(RR){return new Promise(((JR,GR)=>{RR.oncomplete=()=>{JR()},RR.onerror=()=>{GR(RR.error)},RR.onabort=()=>{var JR;GR(null!==(JR=RR.error)&&void 0!==JR?JR:new Error("IndexedDB transaction aborted"))}}))}function qR(RR){return IDBKeyRange.bound([RR],[RR,[]])}function iR(RR,JR){return IDBKeyRange.bound([RR,JR],[RR,JR,[]])}class fR{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(RR){this.write(["recordings"],(JR=>{JR.objectStore("recordings").put(RR)}))}putVideoSequence(RR,JR,GR){this.write(["recordings","videoSequences"],(yR=>{yR.objectStore("recordings").put(RR),yR.objectStore("videoSequences").put({recordingId:RR.recordingId,segmentId:JR,sequence:GR})}))}appendVideo(RR,JR){this.write(["videoHeaders","videoChunks"],(GR=>{GR.objectStore("videoHeaders").put(RR);const yR=GR.objectStore("videoChunks");for(const RR of JR)yR.put(RR)}))}putVideoProgress(RR,JR){this.write(["videoProgress","videoChunks"],(GR=>{if(GR.objectStore("videoProgress").put(RR),JR>0){const{recordingId:yR,segmentId:tR}=RR;GR.objectStore("videoChunks").delete(IDBKeyRange.bound([yR,tR,0],[yR,tR,JR],!1,!0))}}))}removeVideoChunks(RR,JR){this.write(["videoChunks"],(GR=>{GR.objectStore("videoChunks").delete(iR(RR,JR))}))}removeVideo(RR,JR){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(GR=>{GR.objectStore("videoHeaders").delete([RR,JR]),GR.objectStore("videoChunks").delete(iR(RR,JR)),GR.objectStore("videoSequences").delete([RR,JR]),GR.objectStore("videoProgress").delete([RR,JR])}))}putTelemetry(RR){this.write(["telemetry"],(JR=>{JR.objectStore("telemetry").put(RR)}))}removeTelemetry(RR,JR){this.write(["telemetry"],(GR=>{GR.objectStore("telemetry").delete([RR,JR])}))}putDom(RR){this.write(["dom"],(JR=>{JR.objectStore("dom").put(RR)}))}queueDom(RR,JR,GR){this.write(["recordings","dom","domTail"],(yR=>{yR.objectStore("recordings").put(RR),yR.objectStore("dom").put(JR),yR.objectStore("domTail").delete(iR(JR.recordingId,GR))}),(yR=>{console.warn(`Session replay couldn\'t journal page recording chunk ${JR.sequence}; a closing tab may lose it.`,yR),this.write(["recordings","domTail"],(yR=>{yR.objectStore("recordings").put(RR),yR.objectStore("domTail").delete(iR(JR.recordingId,GR))}))}))}putDomTail(RR){this.tailRecordings.add(RR.recordingId),this.write(["domTail"],(JR=>{JR.objectStore("domTail").put(RR)}))}removeDomTail(RR,JR){this.write(["domTail"],(GR=>{GR.objectStore("domTail").delete(iR(RR,JR))}))}removeDom(RR,JR){this.write(["dom"],(GR=>{GR.objectStore("dom").delete([RR,JR])}))}async listRecordings(){const RR=await this.open();return await uR(RR.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(RR){const JR=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),GR=qR(RR.recordingId),yR=RR=>uR(JR.objectStore(RR).getAll(GR)),[tR,ZR,iR,fR,VR,KR,wR]=await Promise.all([yR("videoHeaders"),yR("videoChunks"),yR("videoSequences"),yR("videoProgress"),yR("telemetry"),yR("dom"),yR("domTail")]);return{recording:RR,telemetry:VR,dom:KR,domTails:wR,video:tR.map((RR=>{var JR,GR,yR;return{header:RR,sequence:null!==(JR=null===(GR=iR.find((JR=>JR.segmentId===RR.segmentId)))||void 0===GR?void 0:GR.sequence)&&void 0!==JR?JR:null,progress:null!==(yR=fR.find((JR=>JR.segmentId===RR.segmentId)))&&void 0!==yR?yR:null,chunks:ZR.filter((JR=>JR.segmentId===RR.segmentId))}}))}}async deleteRecording(RR){const JR=(await this.open()).transaction([...tR],"readwrite");JR.objectStore("recordings").delete(RR);for(const GR of tR.slice(1))JR.objectStore(GR).delete(qR(RR));await ZR(JR)}async forgetSent(RR,JR){const GR=(await this.open()).transaction([...tR],"readwrite"),{recordingId:yR}=RR;GR.objectStore("recordings").put(RR);for(const tR of JR.videoSegmentIds)GR.objectStore("videoHeaders").delete([yR,tR]),GR.objectStore("videoChunks").delete(iR(yR,tR)),GR.objectStore("videoSequences").delete([yR,tR]),GR.objectStore("videoProgress").delete([yR,tR]);for(const tR of JR.telemetrySequences)GR.objectStore("telemetry").delete([yR,tR]);for(const tR of JR.domSequences)GR.objectStore("dom").delete([yR,tR]);for(const tR of JR.domTailChunks)GR.objectStore("domTail").delete(iR(yR,tR));await ZR(GR)}write(RR,JR){let GR=arguments.length>2&&void 0!==arguments[2]?arguments[2]:RR=>{this.fail(RR)};if(this.failed)return;const yR=yR=>{try{var tR;const uR=yR.transaction(RR,"readwrite");JR(uR),null===(tR=uR.commit)||void 0===tR||tR.call(uR),ZR(uR).catch(GR)}catch(uR){GR(uR)}};null===this.db?this.open().then(yR,(RR=>{this.fail(RR)})):yR(this.db)}fail(RR){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",RR),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const RR=RR=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",RR)};try{const JR=this.db.transaction(["domTail"],"readwrite");for(const RR of this.tailRecordings)JR.objectStore("domTail").delete(qR(RR));ZR(JR).catch(RR)}catch(JR){RR(JR)}}open(){return this.opening??=new Promise(((RR,JR)=>{const GR=indexedDB.open(yR,4);GR.onupgradeneeded=RR=>{const JR=GR.result;RR.oldVersion<1&&(JR.createObjectStore("recordings",{keyPath:"recordingId"}),JR.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),JR.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),JR.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),JR.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),RR.oldVersion<2&&JR.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),RR.oldVersion<3&&JR.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),JR.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let tR=!1;GR.onblocked=()=>{tR=!0,JR(new Error("An older tab holds the upload journal at an earlier version"))},GR.onsuccess=()=>{tR?GR.result.close():(this.db=GR.result,this.db.onversionchange=()=>{var RR;this.dropTails(),null===(RR=this.db)||void 0===RR||RR.close(),this.db=null,this.opening=null},RR(GR.result))},GR.onerror=()=>{JR(GR.error)}})),this.opening}}const VR=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class KR{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return VR[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(RR){this.firstSampleMs??=RR.nowMs;const JR=null!==RR.pingMs&&RR.pingMs>300,GR=RR.nowMs-this.firstSampleMs>=3e4;GR&&(null!==RR.gameFps&&RR.gameFps<24||JR)?this.gameStrugglingSinceMs??=RR.nowMs:this.gameStrugglingSinceMs=null,GR&&RR.encoderBackpressureDrops>0?this.backpressureSinceMs??=RR.nowMs:this.backpressureSinceMs=null;const yR=null!==this.backpressureSinceMs&&RR.nowMs-this.backpressureSinceMs>=3e3,tR=yR||null!==this.gameStrugglingSinceMs&&RR.nowMs-this.gameStrugglingSinceMs>=1e4,uR=this.steppedDownForGameFps?45:24,ZR=0===RR.encoderBackpressureDrops&&!JR&&(null===RR.gameFps||RR.gameFps>=uR);return tR?(this.healthySinceMs=null,this.level<VR.length-1&&RR.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=RR.nowMs,this.lastChangeReason=yR?"encoderBackpressure":JR?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):ZR&&0!==this.level?(this.healthySinceMs??=RR.nowMs,RR.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=RR.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function wR(RR,JR){return RR.width===JR.width&&RR.height===JR.height}function rR(RR){return Math.max(2,2*Math.floor(RR/2))}function eR(RR){return Math.ceil(RR.width/16)*Math.ceil(RR.height/16)}function aR(RR,JR,GR){const yR=RR.bitrate*eR(JR)/RR.maxMacroblocks;return GR*Math.min(RR.bitrate,Math.max(RR.minBitrate,yR/GR))}class LR{constructor(RR){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/RR}setMaxFps(RR){this.intervalMs=1e3/RR}shouldKeep(RR){return!(RR<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=RR-this.nextDueMs>this.intervalMs?RR+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const nR=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],UR=["variable","constant"],WR=["realtime","quality"],AR=["quality","realtime"];class CR{constructor(){this.canvas=null,this.context=null}scale(RR,JR){if(RR.displayWidth===JR.width&&RR.displayHeight===JR.height)return RR;return this.contextFor(JR).drawImage(RR,0,0,JR.width,JR.height),new VideoFrame(this.canvas,{timestamp:RR.timestamp,alpha:"discard"})}contextFor(RR){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(RR.width,RR.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===RR.width&&this.canvas.height===RR.height||(this.canvas.width=RR.width,this.canvas.height=RR.height),this.context}}const XR=[...[.7,.6,.5,.42,.35].map((RR=>({width:640,quality:RR}))),{width:480,quality:.35},{width:360,quality:.35}],MR=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class BR{constructor(RR,JR){this.steps=RR,this.targetBytes=JR,this.index=0}get step(){return this.steps[this.index]}record(RR){RR>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):RR<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class lR{constructor(RR){this.post=RR,this.full=new BR(XR,28e3),this.small=new BR(MR,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(RR,JR){if(!(this.failed||this.encoding||RR.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=RR.timestamp;try{const GR=pR(RR,RR.displayWidth,RR.displayHeight,this.full.step.width),yR=pR(GR,GR.width,GR.height,this.small.step.width);this.encoding=!0,this.encode(GR,yR,JR).finally((()=>{this.encoding=!1}))}catch(GR){this.fail(GR)}}}async encode(RR,JR,GR){try{const[yR,tR]=await Promise.all([RR.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),JR.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(yR.size),this.small.record(tR.size);const uR=await yR.arrayBuffer(),ZR=tR.size<=8192?await tR.arrayBuffer():null;this.post({type:"still",bytes:uR,small:ZR,atMs:GR},null===ZR?[uR]:[uR,ZR])}catch(yR){this.fail(yR)}}fail(RR){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",RR)}}function pR(RR,JR,GR,yR){const tR=Math.min(yR,JR),uR=Math.max(1,Math.round(GR*tR/JR)),ZR=new OffscreenCanvas(tR,uR),qR=ZR.getContext("2d");if(null===qR)throw new Error("no 2D context");return qR.drawImage(RR,0,0,tR,uR),ZR}let gR=Date.now()-performance.now();function bR(){const RR=performance.now(),JR=Date.now();return Math.abs(JR-(RR+gR))>20&&(gR=JR-RR),RR+gR}function vR(RR){if(!RR)throw new Error("Assertion failed.")}const OR=Math.PI/180,xR=(Math.PI,[1,0,0,0,1,0,0,0,1]),NR=RR=>{const JR=RR*OR,GR=Math.round(Math.cos(JR)),yR=Math.round(Math.sin(JR));return[GR,yR,0,-yR,GR,0,0,0,1]},DR=(RR,JR)=>[1,0,0,0,1,0,RR,JR,1],HR=(RR,JR)=>{const GR=new Array(9);for(let yR=0;yR<3;yR++)for(let tR=0;tR<3;tR++)GR[3*yR+tR]=RR[3*yR]*JR[tR]+RR[3*yR+1]*JR[3+tR]+RR[3*yR+2]*JR[6+tR];return GR},oR=RR=>RR&&RR[RR.length-1],cR=RR=>RR>=0&&RR<2**32,PR=RR=>{let JR=0;for(;0===RR.readBits(1)&&JR<32;)JR++;if(JR>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<JR)-1+RR.readBits(JR)},IR=RR=>{const JR=PR(RR);return 0===(1&JR)?-(JR>>1):JR+1>>1},mR=RR=>RR.constructor===Uint8Array?RR:ArrayBuffer.isView(RR)?new Uint8Array(RR.buffer,RR.byteOffset,RR.byteLength):new Uint8Array(RR),zR=RR=>RR.constructor===DataView?RR:ArrayBuffer.isView(RR)?new DataView(RR.buffer,RR.byteOffset,RR.byteLength):new DataView(RR),SR="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let RR=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const JR=new Uint8Array(3*RR.length);let GR=0;for(let yR=0;yR<RR.length;yR++){let tR=RR.charCodeAt(yR);if(tR<128)JR[GR++]=tR;else if(tR<2048)JR[GR++]=192|tR>>6,JR[GR++]=128|63&tR;else if(tR<55296||tR>57343)JR[GR++]=224|tR>>12,JR[GR++]=128|tR>>6&63,JR[GR++]=128|63&tR;else{const uR=yR+1<RR.length?RR.charCodeAt(yR+1):0;tR<56320&&uR>=56320&&uR<=57343?(tR=65536+(tR-55296<<10)+(uR-56320),yR++,JR[GR++]=240|tR>>18,JR[GR++]=128|tR>>12&63,JR[GR++]=128|tR>>6&63,JR[GR++]=128|63&tR):(JR[GR++]=239,JR[GR++]=191,JR[GR++]=189)}}return JR.slice(0,GR)}},jR=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new SR),dR={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},ER={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},YR={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},kR=RR=>!RR||null==RR.primaries&&null==RR.transfer&&null==RR.matrix&&null==RR.fullRange,QR=RR=>RR instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&RR instanceof SharedArrayBuffer||ArrayBuffer.isView(RR);class FR{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let RR;const JR=new Promise((JR=>{let GR=!1;RR=()=>{GR||(JR(),this.pending--,GR=!0)}})),GR=this.currentPromise;return this.currentPromise=JR,this.pending++,await GR,RR}}const TR=()=>{let RR,JR;return{promise:new Promise(((GR,yR)=>{RR=GR,JR=yR})),resolve:RR,reject:JR}},sR=RR=>{throw new Error(`Unexpected value: ${RR}`)},hR=(RR,JR,GR,yR)=>{GR>>>=0,GR&=16777215,yR?(RR.setUint8(JR,255&GR),RR.setUint8(JR+1,GR>>>8&255),RR.setUint8(JR+2,GR>>>16&255)):(RR.setUint8(JR,GR>>>16&255),RR.setUint8(JR+1,GR>>>8&255),RR.setUint8(JR+2,255&GR))},RJ="und",JJ=RR=>{let JR=0;for(;0!==RR;)RR&=RR-1,JR++;return JR},GJ=/^[a-z]{3}$/,yJ=1e6*(1+Number.EPSILON);const tJ=(async()=>{})().constructor,uJ=RR=>RR instanceof tJ||RR instanceof Promise||"function"===typeof RR?.then,ZJ=function*(RR){for(const JR in RR){const GR=RR[JR];void 0!==GR&&(yield{key:JR,value:GR})}},qJ=RR=>"number"===typeof RR&&!Number.isNaN(RR),iJ=RR=>{vR(Number.isInteger(RR.num)),vR(Number.isInteger(RR.den)),vR(0!==RR.den);let JR=Math.abs(RR.num),GR=Math.abs(RR.den);for(;0!==GR;){const RR=JR%GR;JR=GR,GR=RR}const yR=JR||1;return{num:RR.num/yR,den:RR.den/yR}};new Map,new Map;const fJ=RR=>Array.isArray(RR)?RR:[RR];class VJ{constructor(){this._listeners=new Map}on(RR,JR,GR){this._listeners.has(RR)||this._listeners.set(RR,new Set);const yR={iK:JR,once:GR?.once??!1};return this._listeners.get(RR).add(yR),()=>{this._listeners.get(RR)?.delete(yR)}}_emit(){for(var RR=arguments.length,JR=new Array(RR),GR=0;GR<RR;GR++)JR[GR]=arguments[GR];const[yR,tR]=JR,uR=this._listeners.get(yR);if(uR)for(const qR of uR){try{qR.iK(tR)}catch(ZR){console.error(ZR)}qR.once&&uR.delete(qR)}}}const KJ=RR=>null!==RR&&"object"===typeof RR&&Object.getPrototypeOf(RR)===Object.prototype&&Object.values(RR).every((RR=>"string"===typeof RR));class wJ{constructor(RR,JR){if(this.data=RR,this.mimeType=JR,!(RR instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof JR)throw new TypeError("mimeType must be a string.")}}class rJ{constructor(RR,JR,GR,yR){if(this.data=RR,this.mimeType=JR,this.name=GR,this.description=yR,!(RR instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==JR&&"string"!==typeof JR)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==GR&&"string"!==typeof GR)throw new TypeError("name, when provided, must be a string.");if(void 0!==yR&&"string"!==typeof yR)throw new TypeError("description, when provided, must be a string.")}}class eJ{constructor(RR){this.bytes=RR,this.pos=0}seekToByte(RR){this.pos=8*RR}readBit(){const RR=Math.floor(this.pos/8),JR=this.bytes[RR]??0,GR=7-(7&this.pos),yR=(JR&1<<GR)>>GR;return this.pos++,yR}readBits(RR){if(1===RR)return this.readBit();let JR=0;for(let GR=0;GR<RR;GR++)JR<<=1,JR|=this.readBit();return JR}writeBits(RR,JR){const GR=this.pos+RR;for(let yR=this.pos;yR<GR;yR++){const RR=Math.floor(yR/8);let tR=this.bytes[RR];const uR=7-(7&yR);tR&=~(1<<uR),tR|=(JR&1<<GR-yR-1)>>GR-yR-1<<uR,this.bytes[RR]=tR}this.pos=GR}copyBits(RR,JR){let GR=0;for(;GR<RR-7;GR+=8)this.writeBits(8,JR.readBits(8));const yR=RR-GR;yR>0&&this.writeBits(yR,JR.readBits(yR))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const RR=this.pos/8,JR=this.bytes[RR]??0;return this.pos+=8,JR}skipBits(RR){this.pos+=RR}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const RR=new eJ(this.bytes);return RR.pos=this.pos,RR}}const aJ=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],LJ=[-1,1,2,3,4,5,6,8],nJ=RR=>{const JR=5===RR.objectType||29===RR.objectType,GR=29===RR.objectType,yR=JR?RR.outputSampleRate/2:RR.outputSampleRate,tR=GR?1:RR.outputNumberOfChannels,uR=LJ.indexOf(tR);if(-1===uR)throw new TypeError(`Unsupported number of channels: ${RR.outputNumberOfChannels}`);let ZR=16;RR.objectType>=32&&(ZR+=6),15===AJ(yR)&&(ZR+=24),JR&&(ZR+=9,15===AJ(RR.outputSampleRate)&&(ZR+=24));const qR=Math.ceil(ZR/8),iR=new Uint8Array(qR),fR=new eJ(iR);return UJ(fR,RR.objectType),WJ(fR,yR),fR.writeBits(4,uR),JR&&(WJ(fR,RR.outputSampleRate),UJ(fR,2)),fR.writeBits(3,0),iR},UJ=(RR,JR)=>{JR<32?RR.writeBits(5,JR):(RR.writeBits(5,31),RR.writeBits(6,JR-32))},WJ=(RR,JR)=>{const GR=AJ(JR);RR.writeBits(4,GR),15===GR&&RR.writeBits(24,JR)},AJ=RR=>{const JR=aJ.indexOf(RR);return-1===JR?15:JR};var CJ;!function(RR){RR[RR.Silent=0]="Silent",RR[RR.Errors=1]="Errors",RR[RR.Warnings=2]="Warnings",RR[RR.Info=3]="Info"}(CJ||(CJ={}));class XJ{constructor(){}static get level(){return XJ._level}static set level(RR){if(RR!==CJ.Silent&&RR!==CJ.Errors&&RR!==CJ.Warnings&&RR!==CJ.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");XJ._level=RR}static get _emitter(){return XJ._emitterInstance??=new VJ}static on(RR,JR,GR){return XJ._emitter.on(RR,JR,GR)}static _error(){for(var RR=arguments.length,JR=new Array(RR),GR=0;GR<RR;GR++)JR[GR]=arguments[GR];XJ._emitter._emit("error",JR),XJ._level>=CJ.Errors&&console.error(...JR)}static _warn(){for(var RR=arguments.length,JR=new Array(RR),GR=0;GR<RR;GR++)JR[GR]=arguments[GR];XJ._emitter._emit("warn",JR),XJ._level>=CJ.Warnings&&console.warn(...JR)}static _info(){for(var RR=arguments.length,JR=new Array(RR),GR=0;GR<RR;GR++)JR[GR]=arguments[GR];XJ._emitter._emit("info",JR),XJ._level>=CJ.Info&&console.info(...JR)}}XJ._level=CJ.Info,XJ._emitterInstance=null;const MJ=[48e3,44100,32e3],BJ=[24e3,22050,16e3],lJ="Mediabunny v1.61.3";var pJ,gJ;!function(RR){RR[RR.NON_IDR_SLICE=1]="NON_IDR_SLICE",RR[RR.SLICE_DPA=2]="SLICE_DPA",RR[RR.SLICE_DPB=3]="SLICE_DPB",RR[RR.SLICE_DPC=4]="SLICE_DPC",RR[RR.IDR=5]="IDR",RR[RR.SEI=6]="SEI",RR[RR.SPS=7]="SPS",RR[RR.PPS=8]="PPS",RR[RR.AUD=9]="AUD",RR[RR.SPS_EXT=13]="SPS_EXT"}(pJ||(pJ={})),function(RR){RR[RR.RASL_N=8]="RASL_N",RR[RR.RASL_R=9]="RASL_R",RR[RR.BLA_W_LP=16]="BLA_W_LP",RR[RR.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",RR[RR.VPS_NUT=32]="VPS_NUT",RR[RR.SPS_NUT=33]="SPS_NUT",RR[RR.PPS_NUT=34]="PPS_NUT",RR[RR.AUD_NUT=35]="AUD_NUT",RR[RR.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",RR[RR.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(gJ||(gJ={}));const bJ=function*(RR){let JR=0,GR=-1;for(;JR<RR.length-2;){const yR=RR.indexOf(0,JR);if(-1===yR||yR>=RR.length-2)break;JR=yR;let tR=0;JR+3<RR.length&&0===RR[JR+1]&&0===RR[JR+2]&&1===RR[JR+3]?tR=4:0===RR[JR+1]&&1===RR[JR+2]&&(tR=3),0!==tR?(-1!==GR&&JR>GR&&(yield{offset:GR,length:JR-GR}),GR=JR+tR,JR=GR):JR++}-1!==GR&&GR<RR.length&&(yield{offset:GR,length:RR.length-GR})},vJ=RR=>31&RR,OJ=RR=>{const JR=[],GR=RR.length;for(let yR=0;yR<GR;yR++)yR+2<GR&&0===RR[yR]&&0===RR[yR+1]&&3===RR[yR+2]?(JR.push(0,0),yR+=2):JR.push(RR[yR]);return new Uint8Array(JR)},xJ=(new Uint8Array([0,0,0,1]),(RR,JR)=>{const GR=RR.reduce(((RR,GR)=>RR+JR+GR.byteLength),0),yR=new Uint8Array(GR);let tR=0;for(const uR of RR){const RR=new DataView(yR.buffer,yR.byteOffset,yR.byteLength);switch(JR){case 1:RR.setUint8(tR,uR.byteLength);break;case 2:RR.setUint16(tR,uR.byteLength,!1);break;case 3:hR(RR,tR,uR.byteLength,!1);break;case 4:RR.setUint32(tR,uR.byteLength,!1)}tR+=JR,yR.set(uR,tR),tR+=uR.byteLength}return yR}),NJ=RR=>{try{const JR=[],GR=[],yR=[];for(const qR of bJ(RR)){const tR=RR.subarray(qR.offset,qR.offset+qR.length),uR=vJ(tR[0]);uR===pJ.SPS?JR.push(tR):uR===pJ.PPS?GR.push(tR):uR===pJ.SPS_EXT&&yR.push(tR)}if(0===JR.length)return null;if(0===GR.length)return null;const tR=JR[0],uR=HJ(tR);vR(null!==uR);const ZR=100===uR.profileIdc||110===uR.profileIdc||122===uR.profileIdc||144===uR.profileIdc;return{configurationVersion:1,avcProfileIndication:uR.profileIdc,profileCompatibility:uR.constraintFlags,avcLevelIndication:uR.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:JR,pictureParameterSets:GR,chromaFormat:ZR?uR.chromaFormatIdc:null,bitDepthLumaMinus8:ZR?uR.bitDepthLumaMinus8:null,bitDepthChromaMinus8:ZR?uR.bitDepthChromaMinus8:null,sequenceParameterSetExt:ZR?yR:null}}catch(JR){return XJ._error("Error building AVC Decoder Configuration Record:",JR),null}},DJ={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},HJ=RR=>{try{const JR=OJ(RR),GR=new eJ(JR);GR.skipBits(1),GR.skipBits(2);if(7!==GR.readBits(5))return null;const yR=GR.readAlignedByte(),tR=GR.readAlignedByte(),uR=GR.readAlignedByte();PR(GR);let ZR=1,qR=0,iR=0,fR=0;if(100===yR||110===yR||122===yR||244===yR||44===yR||83===yR||86===yR||118===yR||128===yR){ZR=PR(GR),3===ZR&&(fR=GR.readBits(1)),qR=PR(GR),iR=PR(GR),GR.skipBits(1);if(GR.readBits(1))for(let RR=0;RR<(3!==ZR?8:12);RR++){if(GR.readBits(1)){const JR=RR<6?16:64;let yR=8,tR=8;for(let RR=0;RR<JR;RR++){if(0!==tR){tR=(yR+IR(GR)+256)%256}yR=0===tR?yR:tR}}}}PR(GR);const VR=PR(GR);if(0===VR)PR(GR);else if(1===VR){GR.skipBits(1),IR(GR),IR(GR);const RR=PR(GR);for(let JR=0;JR<RR;JR++)IR(GR)}PR(GR),GR.skipBits(1);const KR=PR(GR),wR=PR(GR),rR=16*(KR+1),eR=16*(wR+1);let aR=rR,LR=eR;const nR=GR.readBits(1);nR||GR.skipBits(1),GR.skipBits(1);if(GR.readBits(1)){const RR=PR(GR),JR=PR(GR),yR=PR(GR),tR=PR(GR);let uR,qR;if(0===(0===fR?ZR:0))uR=1,qR=2-nR;else{uR=3===ZR?1:2,qR=(1===ZR?2:1)*(2-nR)}aR-=uR*(RR+JR),LR-=qR*(yR+tR)}let UR=2,WR=2,AR=2,CR=0,XR={num:1,den:1},MR=null,BR=null,lR=null,pR=null;const gR=GR.pos;if(GR.readBits(1)){if(GR.readBits(1)){const RR=GR.readBits(8);if(255===RR)XR={num:GR.readBits(16),den:GR.readBits(16)};else{const JR=DJ[RR];JR&&(XR=JR)}}GR.readBits(1)&&GR.skipBits(1);if(GR.readBits(1)){GR.skipBits(3),CR=GR.readBits(1);GR.readBits(1)&&(UR=GR.readBits(8),WR=GR.readBits(8),AR=GR.readBits(8))}GR.readBits(1)&&(PR(GR),PR(GR));GR.readBits(1)&&(GR.skipBits(32),GR.skipBits(32),GR.skipBits(1));const RR=GR.readBits(1);RR&&oJ(GR);const JR=GR.readBits(1);JR&&oJ(GR),(RR||JR)&&GR.skipBits(1),GR.skipBits(1),lR=GR.pos,pR=GR.readBits(1),pR&&(GR.skipBits(1),PR(GR),PR(GR),PR(GR),PR(GR),MR=PR(GR),BR=PR(GR))}if(null===MR){vR(null===BR);if(44!==yR&&86!==yR&&100!==yR&&110!==yR&&122!==yR&&244!==yR||!(16&tR)){const RR=KR+1,JR=(2-nR)*(wR+1),GR=eG.find((RR=>RR.level>=uR))??oR(eG),yR=Math.min(Math.floor(GR.maxDpbMbs/(RR*JR)),16);MR=yR,BR=yR}else MR=0,BR=0}return vR(null!==BR),{emulationUnpreventedBytes:JR,profileIdc:yR,constraintFlags:tR,levelIdc:uR,frameMbsOnlyFlag:nR,chromaFormatIdc:ZR,bitDepthLumaMinus8:qR,bitDepthChromaMinus8:iR,codedWidth:rR,codedHeight:eR,displayWidth:aR,displayHeight:LR,pixelAspectRatio:XR,colourPrimaries:UR,matrixCoefficients:AR,transferCharacteristics:WR,fullRangeFlag:CR,numReorderFrames:MR,maxDecFrameBuffering:BR,vuiParametersFlagBitOffset:gR,bitstreamRestrictionFlagBitOffset:lR,bitstreamRestrictionFlag:pR}}catch(JR){return XJ._error("Error parsing AVC SPS:",JR),null}},oJ=RR=>{const JR=PR(RR);RR.skipBits(4),RR.skipBits(4);for(let GR=0;GR<=JR;GR++)PR(RR),PR(RR),RR.skipBits(1);RR.skipBits(5),RR.skipBits(5),RR.skipBits(5),RR.skipBits(5)},cJ=RR=>RR>>1&63,PJ=RR=>{try{const JR=[],GR=[],yR=[],tR=[];for(const iR of bJ(RR)){const uR=RR.subarray(iR.offset,iR.offset+iR.length),ZR=cJ(uR[0]);ZR===gJ.VPS_NUT?JR.push(uR):ZR===gJ.SPS_NUT?GR.push(uR):ZR===gJ.PPS_NUT?yR.push(uR):ZR!==gJ.PREFIX_SEI_NUT&&ZR!==gJ.SUFFIX_SEI_NUT||tR.push(uR)}if(0===GR.length||0===yR.length)return null;const uR=(RR=>{try{const JR=new eJ(OJ(RR));JR.skipBits(16),JR.readBits(4);const GR=JR.readBits(3),yR=JR.readBits(1),{general_profile_space:tR,general_tier_flag:uR,general_profile_idc:ZR,general_profile_compatibility_flags:qR,general_constraint_indicator_flags:iR,general_level_idc:fR}=IJ(JR,GR);PR(JR);const VR=PR(JR);let KR=0;3===VR&&(KR=JR.readBits(1));const wR=PR(JR),rR=PR(JR);let eR=wR,aR=rR;if(JR.readBits(1)){const RR=PR(JR),GR=PR(JR),yR=PR(JR),tR=PR(JR);let uR=1,ZR=1;const qR=0===KR?VR:0;1===qR?(uR=2,ZR=2):2===qR&&(uR=2,ZR=1),eR-=(RR+GR)*uR,aR-=(yR+tR)*ZR}const LR=PR(JR),nR=PR(JR);PR(JR);const UR=JR.readBits(1);let WR=0;for(let RR=UR?0:GR;RR<=GR;RR++)PR(JR),WR=PR(JR),PR(JR);PR(JR),PR(JR),PR(JR),PR(JR),PR(JR),PR(JR),JR.readBits(1)&&JR.readBits(1)&&mJ(JR),JR.skipBits(1),JR.skipBits(1),JR.readBits(1)&&(JR.skipBits(4),JR.skipBits(4),PR(JR),PR(JR),JR.skipBits(1));const AR=PR(JR);if(zJ(JR,AR),JR.readBits(1)){const RR=PR(JR);for(let GR=0;GR<RR;GR++)PR(JR),JR.skipBits(1)}JR.skipBits(1),JR.skipBits(1);let CR=2,XR=2,MR=2,BR=0,lR=0,pR={num:1,den:1};if(JR.readBits(1)){const RR=jJ(JR,GR);pR=RR.pixelAspectRatio,CR=RR.colourPrimaries,XR=RR.transferCharacteristics,MR=RR.matrixCoefficients,BR=RR.fullRangeFlag,lR=RR.minSpatialSegmentationIdc}return{displayWidth:eR,displayHeight:aR,pixelAspectRatio:pR,colourPrimaries:CR,transferCharacteristics:XR,matrixCoefficients:MR,fullRangeFlag:BR,maxDecFrameBuffering:WR+1,spsMaxSubLayersMinus1:GR,spsTemporalIdNestingFlag:yR,generalProfileSpace:tR,generalTierFlag:uR,generalProfileIdc:ZR,generalProfileCompatibilityFlags:qR,generalConstraintIndicatorFlags:iR,generalLevelIdc:fR,chromaFormatIdc:VR,bitDepthLumaMinus8:LR,bitDepthChromaMinus8:nR,minSpatialSegmentationIdc:lR}}catch(JR){return XJ._error("Error parsing HEVC SPS:",JR),null}})(GR[0]);if(!uR)return null;let ZR=0;if(yR.length>0){const RR=yR[0],JR=new eJ(OJ(RR));JR.skipBits(16),PR(JR),PR(JR),JR.skipBits(1),JR.skipBits(1),JR.skipBits(3),JR.skipBits(1),JR.skipBits(1),PR(JR),PR(JR),IR(JR),JR.skipBits(1),JR.skipBits(1),JR.readBits(1)&&PR(JR),IR(JR),IR(JR),JR.skipBits(1),JR.skipBits(1),JR.skipBits(1),JR.skipBits(1);const GR=JR.readBits(1),tR=JR.readBits(1);ZR=GR||tR?GR&&!tR?2:!GR&&tR?3:0:0}const qR=[...JR.length?[{arrayCompleteness:1,nalUnitType:gJ.VPS_NUT,nalUnits:JR}]:[],...GR.length?[{arrayCompleteness:1,nalUnitType:gJ.SPS_NUT,nalUnits:GR}]:[],...yR.length?[{arrayCompleteness:1,nalUnitType:gJ.PPS_NUT,nalUnits:yR}]:[],...tR.length?[{arrayCompleteness:1,nalUnitType:cJ(tR[0][0]),nalUnits:tR}]:[]];return{configurationVersion:1,generalProfileSpace:uR.generalProfileSpace,generalTierFlag:uR.generalTierFlag,generalProfileIdc:uR.generalProfileIdc,generalProfileCompatibilityFlags:uR.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:uR.generalConstraintIndicatorFlags,generalLevelIdc:uR.generalLevelIdc,minSpatialSegmentationIdc:uR.minSpatialSegmentationIdc,parallelismType:ZR,chromaFormatIdc:uR.chromaFormatIdc,bitDepthLumaMinus8:uR.bitDepthLumaMinus8,bitDepthChromaMinus8:uR.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:uR.spsMaxSubLayersMinus1+1,temporalIdNested:uR.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:qR}}catch(JR){return XJ._error("Error building HEVC Decoder Configuration Record:",JR),null}},IJ=(RR,JR)=>{const GR=RR.readBits(2),yR=RR.readBits(1),tR=RR.readBits(5);let uR=0;for(let VR=0;VR<32;VR++)uR=uR<<1|RR.readBits(1);const ZR=new Uint8Array(6);for(let VR=0;VR<6;VR++)ZR[VR]=RR.readBits(8);const qR=RR.readBits(8),iR=[],fR=[];for(let VR=0;VR<JR;VR++)iR.push(RR.readBits(1)),fR.push(RR.readBits(1));if(JR>0)for(let VR=JR;VR<8;VR++)RR.skipBits(2);for(let VR=0;VR<JR;VR++)iR[VR]&&RR.skipBits(88),fR[VR]&&RR.skipBits(8);return{general_profile_space:GR,general_tier_flag:yR,general_profile_idc:tR,general_profile_compatibility_flags:uR,general_constraint_indicator_flags:ZR,general_level_idc:qR}},mJ=RR=>{for(let JR=0;JR<4;JR++)for(let GR=0;GR<(3===JR?2:6);GR++){if(RR.readBits(1)){const GR=Math.min(64,1<<4+(JR<<1));JR>1&&IR(RR);for(let JR=0;JR<GR;JR++)IR(RR)}else PR(RR)}},zJ=(RR,JR)=>{const GR=[];for(let yR=0;yR<JR;yR++)GR[yR]=SJ(RR,yR,JR,GR)},SJ=(RR,JR,GR,yR)=>{let tR=0,uR=0,ZR=0;if(0!==JR&&(uR=RR.readBits(1)),uR){if(JR===GR){ZR=JR-(PR(RR)+1)}else ZR=JR-1;RR.readBits(1),PR(RR);const uR=yR[ZR]??0;for(let JR=0;JR<=uR;JR++){RR.readBits(1)||RR.readBits(1)}tR=yR[ZR]}else{const JR=PR(RR),GR=PR(RR);for(let yR=0;yR<JR;yR++)PR(RR),RR.readBits(1);for(let yR=0;yR<GR;yR++)PR(RR),RR.readBits(1);tR=JR+GR}return tR},jJ=(RR,JR)=>{let GR=2,yR=2,tR=2,uR=0,ZR=0,qR={num:1,den:1};if(RR.readBits(1)){const JR=RR.readBits(8);if(255===JR)qR={num:RR.readBits(16),den:RR.readBits(16)};else{const RR=DJ[JR];RR&&(qR=RR)}}return RR.readBits(1)&&RR.readBits(1),RR.readBits(1)&&(RR.readBits(3),uR=RR.readBits(1),RR.readBits(1)&&(GR=RR.readBits(8),yR=RR.readBits(8),tR=RR.readBits(8))),RR.readBits(1)&&(PR(RR),PR(RR)),RR.readBits(1),RR.readBits(1),RR.readBits(1),RR.readBits(1)&&(PR(RR),PR(RR),PR(RR),PR(RR)),RR.readBits(1)&&(RR.readBits(32),RR.readBits(32),RR.readBits(1)&&PR(RR),RR.readBits(1)&&dJ(RR,!0,JR)),RR.readBits(1)&&(RR.readBits(1),RR.readBits(1),RR.readBits(1),ZR=PR(RR),PR(RR),PR(RR),PR(RR),PR(RR)),{pixelAspectRatio:qR,colourPrimaries:GR,transferCharacteristics:yR,matrixCoefficients:tR,fullRangeFlag:uR,minSpatialSegmentationIdc:ZR}},dJ=(RR,JR,GR)=>{let yR=!1,tR=!1,uR=!1;JR&&(yR=1===RR.readBits(1),tR=1===RR.readBits(1),(yR||tR)&&(uR=1===RR.readBits(1),uR&&(RR.readBits(8),RR.readBits(5),RR.readBits(1),RR.readBits(5)),RR.readBits(4),RR.readBits(4),uR&&RR.readBits(4),RR.readBits(5),RR.readBits(5),RR.readBits(5)));for(let ZR=0;ZR<=GR;ZR++){let JR=!0;1===RR.readBits(1)||(JR=1===RR.readBits(1));let GR=!1;JR?PR(RR):GR=1===RR.readBits(1);let ZR=1;if(!GR){ZR=PR(RR)+1}yR&&EJ(RR,ZR,uR),tR&&EJ(RR,ZR,uR)}},EJ=(RR,JR,GR)=>{for(let yR=0;yR<JR;yR++)PR(RR),PR(RR),GR&&(PR(RR),PR(RR)),RR.readBits(1)};var YJ;!function(RR){RR[RR.audAllowed=0]="audAllowed",RR[RR.beforeFirstVcl=1]="beforeFirstVcl",RR[RR.afterFirstVcl=2]="afterFirstVcl",RR[RR.eoBitstreamAllowed=3]="eoBitstreamAllowed",RR[RR.noMoreDataAllowed=4]="noMoreDataAllowed"}(YJ||(YJ={}));const kJ=RR=>{const JR=zR(RR),GR=JR.getUint8(9),yR=JR.getUint16(10,!0),tR=JR.getUint32(12,!0),uR=JR.getInt16(16,!0),ZR=JR.getUint8(18);let qR=null;return ZR&&(qR=RR.subarray(19,21+GR)),{outputChannelCount:GR,preSkip:yR,inputSampleRate:tR,outputGain:uR,channelMappingFamily:ZR,channelMappingTable:qR}};var QJ;!function(RR){RR[RR.STREAMINFO=0]="STREAMINFO",RR[RR.VORBIS_COMMENT=4]="VORBIS_COMMENT",RR[RR.PICTURE=6]="PICTURE"}(QJ||(QJ={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const FJ=[1,2,3,6],TJ=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],sJ=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],hJ=[16,16,20,20,0,24,24,0],RG=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],JG=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],GG=[32e3,44100,48e3,0],yG=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],tG=[512,1024,2048,4096],uG=RR=>{const JR=ZG(RR),GR=zR(RR);let yR=JR?4*Math.ceil(JR.frameSize/4):0,tR=null;for(;yR+4<=RR.length&&1683496997===GR.getUint32(yR);){const JR=qG(RR.subarray(yR));if(!JR)break;tR??=JR,yR+=JR.frameSize}if(JR)return{frameSize:tR?yR:JR.frameSize,sampleRate:JR.sampleRate,numberOfChannels:JR.numberOfChannels,sampleCount:JR.sampleCount,channelLayout:JR.channelLayout,pcmResolution:JR.pcmResolution,bitRate:JR.bitRate,core:JR,hasExtensions:null!==tR};if(!tR?.asset)return null;const{asset:uR}=tR;return{frameSize:yR,sampleRate:uR.sampleRate,numberOfChannels:uR.numberOfChannels,sampleCount:uR.sampleCount,channelLayout:uR.channelLayout,pcmResolution:uR.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},ZG=RR=>{if(RR.length<18)return null;if(127!==RR[0]||254!==RR[1]||128!==RR[2]||1!==RR[3])return null;const JR=new eJ(RR);if(JR.skipBits(32),JR.skipBits(1),31!==JR.readBits(5))return null;const GR=JR.readBits(1),yR=JR.readBits(7)+1;if(yR%8!==0)return null;const tR=JR.readBits(14)+1;if(tR<96)return null;const uR=JR.readBits(6);if(uR>=RG.length)return null;const ZR=TJ[JR.readBits(4)];if(0===ZR)return null;const qR=sJ[JR.readBits(5)];if(0!==JR.readBits(1))return null;JR.skipBits(4),JR.skipBits(5);const iR=JR.readBits(2);if(3===iR)return null;JR.skipBits(1),GR&&JR.skipBits(16),JR.skipBits(7);const fR=hJ[JR.readBits(3)];if(0===fR)return null;const VR=0!==iR;return{frameSize:tR,sampleRate:ZR,numberOfChannels:RG[uR]+(VR?1:0),sampleCount:32*yR,channelLayout:JG[uR]|(VR?8:0),amode:uR,lfePresent:VR,bitRate:qR,pcmResolution:fR}},qG=RR=>{if(RR.length<10)return null;if(100!==RR[0]||88!==RR[1]||32!==RR[2]||37!==RR[3])return null;const JR=new eJ(RR);JR.skipBits(32),JR.skipBits(8);const GR=JR.readBits(2),yR=JR.readBits(1),tR=8+4*yR,uR=16+4*yR;JR.skipBits(tR);const ZR=JR.readBits(uR)+1,qR={frameSize:ZR,asset:null};if(!JR.readBits(1))return qR;const iR=GG[JR.readBits(2)],fR=512*(JR.readBits(3)+1);JR.readBits(1)&&JR.skipBits(36);const VR=JR.readBits(3)+1,KR=JR.readBits(3)+1,wR=[];for(let nR=0;nR<VR;nR++)wR.push(JR.readBits(GR+1));for(const nR of wR)JR.skipBits(8*JJ(nR));if(JR.readBits(1)){JR.skipBits(2);const RR=JR.readBits(2)+1<<2,GR=JR.readBits(2)+1;JR.skipBits(GR*RR)}for(let nR=0;nR<KR;nR++)JR.skipBits(uR);JR.skipBits(9),JR.skipBits(3),JR.readBits(1)&&JR.skipBits(4),JR.readBits(1)&&JR.skipBits(24),JR.readBits(1)&&JR.skipBits(8*(JR.readBits(10)+1));const rR=JR.readBits(5)+1,eR=yG[JR.readBits(4)],aR=JR.readBits(8)+1;let LR=0;if(JR.readBits(1)&&(aR>2&&JR.skipBits(1),aR>6&&JR.skipBits(1),JR.readBits(1))){const RR=JR.readBits(2)+1<<2;LR=JR.readBits(RR)}return 0===iR||JR.getBitsLeft()<0?qR:{frameSize:ZR,asset:{sampleRate:eR,numberOfChannels:aR,sampleCount:Math.round(fR*eR/iR),channelLayout:LR,pcmResolution:rR}}},iG=RR=>{const JR=new Uint8Array(20),GR=zR(JR);GR.setUint32(0,RR.sampleRate),GR.setUint32(4,RR.bitRate),GR.setUint32(8,RR.bitRate),JR[12]=RR.pcmResolution;const yR=RR.core&&!RR.hasExtensions?1:0,tR=new eJ(JR);return tR.seekToByte(13),tR.writeBits(2,Math.max(tG.indexOf(RR.sampleCount),0)),tR.writeBits(5,yR),tR.writeBits(1,RR.core?.lfePresent?1:0),tR.writeBits(6,RR.core?.amode??0),tR.writeBits(14,RR.core?RR.core.frameSize-1:0),tR.writeBits(1,0),tR.writeBits(3,0),tR.writeBits(16,RR.channelLayout),tR.writeBits(1,0),tR.writeBits(1,0),tR.writeBits(1,0),tR.writeBits(5,0),JR},fG=["avc","hevc","vp9","av1","vp8","prores"],VG=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],KG=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],wG=[...KG,...VG],rG=["webvtt"],eG=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],aG=["ap4x","ap4h","apch","apcn","apcs","apco"],LG=["dtsc","dtsh","dtsl","dtse"],nG=RR=>{const JR=RR.split("."),GR=Number(JR[1]),yR=JR[2],tR=(GR<<5)+Number(yR.slice(0,-1)),uR="H"===yR.slice(-1)?1:0,ZR=Number(JR[3]);return[129,tR,(uR<<7)+((8===ZR?0:1)<<6)+((12===ZR?1:0)<<5)+((JR[4]?Number(JR[4]):0)<<4)+((JR[5]?Number(JR[5][0]):1)<<3)+((JR[5]?Number(JR[5][1]):1)<<2)+(JR[5]?Number(JR[5][2]):0),0]},UG=/^pcm-([usf])(\\d+)(be)?$/,WG=RR=>{if(vR(VG.includes(RR)),"ulaw"===RR)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===RR)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const JR=UG.exec(RR);let GR;vR(JR),GR="u"===JR[1]?"unsigned":"s"===JR[1]?"signed":"float";return{dataType:GR,sampleSize:Number(JR[2])/8,littleEndian:"be"!==JR[3],silentValue:"pcm-u8"===RR?128:0}},AG=RR=>RR.startsWith("avc1")||RR.startsWith("avc3")?"avc":RR.startsWith("hev1")||RR.startsWith("hvc1")?"hevc":"vp8"===RR?"vp8":RR.startsWith("vp09")?"vp9":RR.startsWith("av01")?"av1":aG.includes(RR)?"prores":"mp3"===RR||"mp4a.69"===RR||"mp4a.6B"===RR||"mp4a.6b"===RR||"mp4a.40.34"===RR?"mp3":RR.startsWith("mp4a.40.")||"mp4a.67"===RR?"aac":"opus"===RR||"Opus"===RR?"opus":"vorbis"===RR?"vorbis":"flac"===RR?"flac":"ac-3"===RR||"ac3"===RR?"ac3":"ec-3"===RR||"eac3"===RR?"eac3":LG.includes(RR)?"dts":"ulaw"===RR?"ulaw":"alaw"===RR?"alaw":UG.test(RR)?RR:"webvtt"===RR?"webvtt":null,CG=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...aG],XG=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,MG=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,BG=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,lG=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,pG=(RR,JR)=>{if(!RR)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof RR)throw new TypeError("Video chunk metadata must be an object.");if(!RR.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof RR.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof RR.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!CG.some((JR=>RR.decoderConfig.codec.startsWith(JR))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(RR.decoderConfig.codedWidth)||RR.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(RR.decoderConfig.codedHeight)||RR.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==RR.decoderConfig.displayAspectWidth&&(!Number.isInteger(RR.decoderConfig.displayAspectWidth)||RR.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==RR.decoderConfig.displayAspectHeight&&(!Number.isInteger(RR.decoderConfig.displayAspectHeight)||RR.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==RR.decoderConfig.displayAspectWidth!==(void 0!==RR.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==RR.decoderConfig.description&&!QR(RR.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==RR.decoderConfig.colorSpace){const{colorSpace:JR}=RR.decoderConfig;if("object"!==typeof JR)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const GR=Object.keys(dR);if(null!=JR.primaries&&!GR.includes(JR.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${GR.join(", ")}.`);const yR=Object.keys(ER);if(null!=JR.transfer&&!yR.includes(JR.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${yR.join(", ")}.`);const tR=Object.keys(YR);if(null!=JR.matrix&&!tR.includes(JR.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${tR.join(", ")}.`);if(null!=JR.fullRange&&"boolean"!==typeof JR.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(RR.decoderConfig.codec.startsWith("avc1")||RR.decoderConfig.codec.startsWith("avc3")){if(!XG.test(RR.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(RR.decoderConfig.codec.startsWith("hev1")||RR.decoderConfig.codec.startsWith("hvc1")){if(!MG.test(RR.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(RR.decoderConfig.codec.startsWith("vp8")){if("vp8"!==RR.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(RR.decoderConfig.codec.startsWith("vp09")){if(!BG.test(RR.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(RR.decoderConfig.codec.startsWith("av01")){if(!lG.test(RR.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(aG.some((JR=>RR.decoderConfig.codec.startsWith(JR)))&&!aG.some((JR=>RR.decoderConfig.codec===JR)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${aG.join(", ")}.`);if(null!==JR&&AG(RR.decoderConfig.codec)!==JR)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${RR.decoderConfig.codec}\' does not fit to the track codec \'${JR}\'.`)},gG=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],bG=(RR,JR)=>{if(!RR)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof RR)throw new TypeError("Audio chunk metadata must be an object.");if(!RR.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof RR.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof RR.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!gG.some((JR=>RR.decoderConfig.codec.startsWith(JR))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(RR.decoderConfig.sampleRate)||RR.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(RR.decoderConfig.numberOfChannels)||RR.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==RR.decoderConfig.description&&!QR(RR.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(RR.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==RR.decoderConfig.codec&&"mp4a.6B"!==RR.decoderConfig.codec&&"mp4a.6b"!==RR.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(RR.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(RR.decoderConfig.codec.startsWith("mp3")||RR.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==RR.decoderConfig.codec&&"mp4a.69"!==RR.decoderConfig.codec&&"mp4a.6B"!==RR.decoderConfig.codec&&"mp4a.6b"!==RR.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(RR.decoderConfig.codec.startsWith("opus")){if("opus"!==RR.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(RR.decoderConfig.description&&RR.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(RR.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==RR.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!RR.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(RR.decoderConfig.codec.startsWith("flac")){if("flac"!==RR.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const JR=42;if(!RR.decoderConfig.description||RR.decoderConfig.description.byteLength<JR)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(RR.decoderConfig.codec.startsWith("ac-3")||RR.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==RR.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(RR.decoderConfig.codec.startsWith("ec-3")||RR.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==RR.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(RR.decoderConfig.codec.startsWith("dts")){if(!LG.includes(RR.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${LG.join(", ")}.`)}else if((RR.decoderConfig.codec.startsWith("pcm")||RR.decoderConfig.codec.startsWith("ulaw")||RR.decoderConfig.codec.startsWith("alaw"))&&!VG.includes(RR.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${VG.join(", ")}).`);if(null!==JR&&AG(RR.decoderConfig.codec)!==JR)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${RR.decoderConfig.codec}\' does not fit to the track codec \'${JR}\'.`)},vG=RR=>{if(!RR)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof RR)throw new TypeError("Subtitle metadata must be an object.");if(!RR.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof RR.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof RR.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var OG;!function(RR){RR[RR.FrameCount=1]="FrameCount",RR[RR.FileSize=2]="FileSize",RR[RR.Toc=4]="Toc"}(OG||(OG={}));class xG{constructor(RR,JR,GR,yR,tR){this.bytes=RR,this.view=JR,this.offset=GR,this.start=yR,this.end=tR,this.bufferPos=yR-GR}static tempFromBytes(RR){return new xG(RR,zR(RR),0,0,RR.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(RR){this.bufferPos=RR-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(RR){this.bufferPos+=RR}slice(RR){let JR=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-RR;if(RR<this.start||RR+JR>this.end)throw new RangeError("Slicing outside of original slice.");return new xG(this.bytes,this.view,this.offset,RR,RR+JR)}}const NG=(RR,JR)=>{if(RR.filePos<RR.start||RR.filePos+JR>RR.end)throw new RangeError(`Tried reading [${RR.filePos}, ${RR.filePos+JR}), but slice is [${RR.start}, ${RR.end}). This is likely an internal error, please report it alongside the file that caused it.`)},DG=(RR,JR)=>{NG(RR,JR);const GR=RR.bytes.subarray(RR.bufferPos,RR.bufferPos+JR);return RR.bufferPos+=JR,GR};var HG,oG;!function(RR){RR[RR.Unsynchronisation=128]="Unsynchronisation",RR[RR.ExtendedHeader=64]="ExtendedHeader",RR[RR.ExperimentalIndicator=32]="ExperimentalIndicator",RR[RR.Footer=16]="Footer"}(HG||(HG={})),function(RR){RR[RR.ISO_8859_1=0]="ISO_8859_1",RR[RR.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",RR[RR.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",RR[RR.UTF_8=3]="UTF_8"}(oG||(oG={}));class cG{constructor(RR){this.mutex=new FR,this.trackTimestampInfo=new WeakMap,this.output=RR}onTrackClose(RR){}validateTimestamp(RR,JR,GR){let yR=this.trackTimestampInfo.get(RR);if(yR){if(GR&&(yR.maxTimestampBeforeLastKeyPacket=yR.maxTimestamp),null!==yR.maxTimestampBeforeLastKeyPacket&&JR<yR.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${JR}s, but largest timestamp is ${yR.maxTimestampBeforeLastKeyPacket}s.`);yR.maxTimestamp=Math.max(yR.maxTimestamp,JR)}else{if(!GR)throw new Error("First packet must be a key packet.");yR={maxTimestamp:JR,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(RR,yR)}}}const PG=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const IG=RR=>{const JR=Math.floor(RR/36e5),GR=Math.floor(RR%36e5/6e4),yR=Math.floor(RR%6e4/1e3),tR=RR%1e3;return JR.toString().padStart(2,"0")+":"+GR.toString().padStart(2,"0")+":"+yR.toString().padStart(2,"0")+"."+tR.toString().padStart(3,"0")};class mG{constructor(RR){this.writer=RR,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(RR){this.helperView.setUint32(0,RR,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(RR){this.helperView.setUint32(0,Math.floor(RR/2**32),!1),this.helperView.setUint32(4,RR,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(RR){for(let JR=0;JR<RR.length;JR++)this.helperView.setUint8(JR%8,RR.charCodeAt(JR)),JR%8===7&&this.writer.write(this.helper);RR.length%8!==0&&this.writer.write(this.helper.subarray(0,RR.length%8))}writeBox(RR){if(this.offsets.set(RR,this.writer.getPos()),RR.contents&&!RR.children)this.writeBoxHeader(RR,RR.size??RR.contents.byteLength+8),this.writer.write(RR.contents);else{const JR=this.writer.getPos();if(this.writeBoxHeader(RR,0),RR.contents&&this.writer.write(RR.contents),RR.children)for(const tR of RR.children)tR&&this.writeBox(tR);const GR=this.writer.getPos(),yR=RR.size??GR-JR;this.writer.seek(JR),this.writeBoxHeader(RR,yR),this.writer.seek(GR)}}writeBoxHeader(RR,JR){this.writeU32(RR.largeSize?1:JR),this.writeAscii(RR.type),RR.largeSize&&this.writeU64(JR)}measureBoxHeader(RR){return 8+(RR.largeSize?8:0)}patchBox(RR){const JR=this.offsets.get(RR);vR(void 0!==JR);const GR=this.writer.getPos();this.writer.seek(JR),this.writeBox(RR),this.writer.seek(GR)}measureBox(RR){if(RR.contents&&!RR.children){return this.measureBoxHeader(RR)+RR.contents.byteLength}{let JR=this.measureBoxHeader(RR);if(RR.contents&&(JR+=RR.contents.byteLength),RR.children)for(const GR of RR.children)GR&&(JR+=this.measureBox(GR));return JR}}}const zG=new Uint8Array(8),SG=new DataView(zG.buffer),jG=RR=>[(RR%256+256)%256],dG=RR=>(SG.setUint16(0,RR,!1),[zG[0],zG[1]]),EG=RR=>(SG.setInt16(0,RR,!1),[zG[0],zG[1]]),YG=RR=>(SG.setUint32(0,RR,!1),[zG[1],zG[2],zG[3]]),kG=RR=>(SG.setUint32(0,RR,!1),[zG[0],zG[1],zG[2],zG[3]]),QG=RR=>(SG.setInt32(0,RR,!1),[zG[0],zG[1],zG[2],zG[3]]),FG=RR=>(SG.setUint32(0,Math.floor(RR/2**32),!1),SG.setUint32(4,RR,!1),[zG[0],zG[1],zG[2],zG[3],zG[4],zG[5],zG[6],zG[7]]),TG=RR=>(SG.setInt32(0,Math.floor(RR/2**32),!1),SG.setUint32(4,RR,!1),[zG[0],zG[1],zG[2],zG[3],zG[4],zG[5],zG[6],zG[7]]),sG=RR=>(SG.setInt16(0,256*RR,!1),[zG[0],zG[1]]),hG=RR=>(SG.setInt32(0,65536*RR,!1),[zG[0],zG[1],zG[2],zG[3]]),Ry=RR=>(SG.setInt32(0,2**30*RR,!1),[zG[0],zG[1],zG[2],zG[3]]),Jy=(RR,JR)=>{const GR=[];let yR=RR;do{let RR=127&yR;yR>>=7,GR.length>0&&(RR|=128),GR.push(RR),void 0!==JR&&JR--}while(yR>0||JR);return GR.reverse()},Gy=function(RR){let JR=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const GR=Array(RR.length).fill(null).map(((JR,GR)=>RR.charCodeAt(GR)));return JR&&GR.push(0),GR},yy=RR=>[hG(RR[0]),hG(RR[1]),Ry(RR[2]),hG(RR[3]),hG(RR[4]),Ry(RR[5]),hG(RR[6]),hG(RR[7]),Ry(RR[8])],ty=(RR,JR,GR)=>({type:RR,contents:JR&&new Uint8Array(JR.flat(10)),children:GR}),uy=(RR,JR,GR,yR,tR)=>ty(RR,[jG(JR),YG(GR),yR??[]],tR),Zy=()=>ty("styp",[Gy("iso5"),kG(0),Gy("iso5"),Gy("iso6"),Gy("mp41"),Gy("cmfc"),Gy("dash")]),qy=(RR,JR)=>{const GR=Math.max(0,RR.minWrittenTimestamp);let yR=Math.max(0,RR.maxWrittenEndTimestamp-GR);return Number.isFinite(yR)||(yR=0),uy("sidx",1,0,[kG(1),kG(Pt),FG(mt(GR,Pt)),FG(0),dG(0),dG(1),kG(2147483647&JR),kG(mt(yR,Pt)),kG(0)])},iy=RR=>({type:"mdat",largeSize:RR}),fy=RR=>ty("moov",void 0,[Vy(RR.creationTime,RR.trackDatas),...RR.trackDatas.map((JR=>Ky(JR,RR.creationTime))),RR.isFragmented?sy(RR.trackDatas):null,wt(RR)]),Vy=(RR,JR)=>{const GR=Math.max(0,...JR.map((RR=>Math.max(0,mt(zt(RR),Pt)+mt(RR.startTimestampOffset??0,Pt))))),yR=Math.max(0,...JR.map((RR=>RR.track.id)))+1,tR=!cR(RR)||!cR(GR),uR=tR?FG:kG;return uy("mvhd",+tR,0,[uR(RR),uR(RR),kG(Pt),uR(GR),hG(1),sG(1),Array(10).fill(0),yy(xR),Array(24).fill(0),kG(yR)])},Ky=(RR,JR)=>{const GR=It(RR),yR=null!==RR.startTimestampOffset&&0!==RR.startTimestampOffset;return ty("trak",void 0,[wy(RR,JR),yR?ry(RR):null,ey(RR,JR),void 0!==GR.name?ty("udta",void 0,[ty("name",[...jR.encode(GR.name)])]):null])},wy=(RR,JR)=>{const GR=Math.max(0,mt(zt(RR),Pt)+mt(RR.startTimestampOffset??0,Pt)),yR=!cR(JR)||!cR(GR),tR=yR?FG:kG;let uR;if("video"===RR.type&&RR.track.metadata.transformationMatrix)uR=RR.track.metadata.transformationMatrix;else if("video"===RR.type){const{rotation:JR,flip:GR}=RR.track.metadata;uR=((RR,JR,GR)=>{const[yR,tR,,uR,ZR]=RR,qR=Math.abs(yR)*JR+Math.abs(uR)*GR,iR=Math.abs(tR)*JR+Math.abs(ZR)*GR;return HR(HR(DR(-JR/2,-GR/2),RR),DR(qR/2,iR/2))})(HR(NR(JR??0),[GR?-1:1,0,0,0,1,0,0,0,1]),RR.info.width,RR.info.height)}else uR=xR;let ZR=2;!1!==RR.track.metadata.disposition?.default&&(ZR|=1);const qR="video"===RR.type?0:"audio"===RR.type?1:"subtitle"===RR.type?2:sR(RR);return uy("tkhd",+yR,ZR,[tR(JR),tR(JR),kG(RR.track.id),kG(0),tR(GR),Array(8).fill(0),dG(0),dG(qR),sG("audio"===RR.type?1:0),dG(0),yy(uR),hG("video"===RR.type?RR.info.width:0),hG("video"===RR.type?RR.info.height:0)])},ry=RR=>{const JR=RR.startTimestampOffset;if(vR(null!==JR),JR>0){const GR=mt(JR,Pt),yR=mt(zt(RR),Pt),tR=!cR(GR)||!cR(yR),uR=tR?FG:kG,ZR=tR?TG:QG;return ty("edts",void 0,[uy("elst",tR?1:0,0,[kG(2),uR(GR),ZR(-1),hG(1),uR(yR),ZR(0),hG(1)])])}{const yR=mt(-JR,RR.timescale),tR=Math.max(0,mt(zt(RR),Pt)+mt(JR,Pt)),uR=!((GR=yR)>=-(2**31)&&GR<2**31)||!cR(tR),ZR=uR?FG:kG,qR=uR?TG:QG;return ty("edts",void 0,[uy("elst",uR?1:0,0,[kG(1),ZR(tR),qR(yR),hG(1)])])}var GR},ey=(RR,JR)=>ty("mdia",void 0,[ay(RR,JR),Uy(!0,Ly[RR.type],ny[RR.type]),Wy(RR)]),ay=(RR,JR)=>{const GR=mt(zt(RR),RR.timescale),yR=!cR(JR)||!cR(GR),tR=yR?FG:kG;return uy("mdhd",+yR,0,[tR(JR),tR(JR),kG(RR.timescale),tR(GR),dG(gt(RR.track.metadata.languageCode??RJ)),dG(0)])},Ly={video:"vide",audio:"soun",subtitle:"text"},ny={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Uy=function(RR,JR,GR){let yR=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return uy("hdlr",0,0,[RR?Gy("mhlr"):kG(0),Gy(JR),Gy(yR),kG(0),kG(0),Gy(GR,!0)])},Wy=RR=>ty("minf",void 0,[Ay[RR.type](),Cy(),By(RR)]),Ay={video:()=>uy("vmhd",0,1,[dG(0),dG(0),dG(0),dG(0)]),audio:()=>uy("smhd",0,0,[dG(0),dG(0)]),subtitle:()=>uy("nmhd",0,0)},Cy=()=>ty("dinf",void 0,[Xy()]),Xy=()=>uy("dref",0,0,[kG(1)],[My()]),My=()=>uy("url ",0,1),By=RR=>{const JR=RR.compositionTimeOffsetTable.length>1||RR.compositionTimeOffsetTable.some((RR=>0!==RR.sampleCompositionTimeOffset));return ty("stbl",void 0,[ly(RR),dy(RR),JR?Fy(RR):null,JR?Ty(RR):null,Yy(RR),ky(RR),Qy(RR),Ey(RR)])},ly=RR=>{let JR;if("video"===RR.type)JR=py(Ct(RR.track.source._codec,RR.info.decoderConfig.codec),RR);else if("audio"===RR.type){const GR=Mt(RR.track.source._codec,RR.info.decoderConfig.codec,RR.muxer.isQuickTime);vR(GR),JR=xy(GR,RR)}else"subtitle"===RR.type&&(JR=jy(lt[RR.track.source._codec],RR));return vR(JR),uy("stsd",0,0,[kG(1)],[JR])},py=(RR,JR)=>ty(RR,[Array(6).fill(0),dG(1),dG(0),dG(0),Array(12).fill(0),dG(JR.info.width),dG(JR.info.height),kG(4718592),kG(4718592),kG(0),dG(1),jG(18),Gy(lJ),Array(13).fill(0),dG(JR.info.hasAlphaChannel?32:24),EG(65535)],[Xt[JR.track.source._codec]?.(JR)??null,by(JR),kR(JR.info.decoderConfig.colorSpace)?null:vy(JR),gy(JR)]),gy=RR=>0===RR.avgBitrate&&0===RR.maxBitrate?null:ty("btrt",[kG(0),kG(RR.maxBitrate),kG(RR.avgBitrate)]),by=RR=>RR.info.pixelAspectRatio.num===RR.info.pixelAspectRatio.den?null:ty("pasp",[kG(RR.info.pixelAspectRatio.num),kG(RR.info.pixelAspectRatio.den)]),vy=RR=>{const JR=RR.info.decoderConfig.colorSpace;return ty("colr",[Gy(RR.muxer.isQuickTime?"nclc":"nclx"),dG(null!=JR?.primaries?dR[JR.primaries]:2),dG(null!=JR?.transfer?ER[JR.transfer]:2),dG(null!=JR?.matrix?YR[JR.matrix]:2),RR.muxer.isQuickTime?[]:jG((JR?.fullRange?1:0)<<7)])},Oy=RR=>{if(!RR.info.decoderConfig)return null;const JR=RR.info.decoderConfig,GR=JR.codec.split("."),yR=Number(GR[1]),tR=Number(GR[2]),uR=(Number(GR[3])<<4)+((GR[4]?Number(GR[4]):1)<<1)+(GR[8]?Number(GR[8]):Number(JR.colorSpace?.fullRange??0)),ZR=GR[5]?Number(GR[5]):JR.colorSpace?.primaries?dR[JR.colorSpace.primaries]:1,qR=GR[6]?Number(GR[6]):JR.colorSpace?.transfer?ER[JR.colorSpace.transfer]:1,iR=GR[7]?Number(GR[7]):JR.colorSpace?.matrix?YR[JR.colorSpace.matrix]:1;return uy("vpcC",1,0,[jG(yR),jG(tR),jG(uR),jG(ZR),jG(qR),jG(iR),dG(0)])},xy=(RR,JR)=>{let GR,yR=0,tR=16;const uR=VG.includes(JR.track.source._codec);if(uR){const RR=JR.track.source._codec,{sampleSize:GR}=WG(RR);tR=8*GR,tR>16&&(yR=1)}if(JR.muxer.isQuickTime&&(yR=1),0===yR)GR=[Array(6).fill(0),dG(1),dG(yR),dG(0),kG(0),dG(JR.info.numberOfChannels),dG(tR),dG(0),dG(0),dG(JR.info.sampleRate<65536?JR.info.sampleRate:0),dG(0)];else{const RR=uR?0:-2;GR=[Array(6).fill(0),dG(1),dG(yR),dG(0),kG(0),dG(JR.info.numberOfChannels),dG(Math.min(tR,16)),EG(RR),dG(0),dG(JR.info.sampleRate<65536?JR.info.sampleRate:0),dG(0),uR?[kG(1),kG(tR/8),kG(JR.info.numberOfChannels*tR/8)]:[kG(0),kG(0),kG(0)],kG(2)]}return ty(RR,GR,[Bt(JR.track.source._codec,JR.muxer.isQuickTime)?.(JR)??null,gy(JR)])},Ny=RR=>{let JR;switch(RR.track.source._codec){case"aac":JR=64;break;case"mp3":JR=107;break;case"vorbis":JR=221;break;default:throw new Error(`Unhandled audio codec: ${RR.track.source._codec}`)}let GR=[...jG(JR),...jG(21),...YG(0),...kG(RR.maxBitrate),...kG(RR.avgBitrate)];if(RR.info.decoderConfig.description){const JR=mR(RR.info.decoderConfig.description);GR=[...GR,...jG(5),...Jy(JR.byteLength),...JR]}return GR=[...dG(1),...jG(0),...jG(4),...Jy(GR.length),...GR,...jG(6),...jG(1),...jG(2)],GR=[...jG(3),...Jy(GR.length),...GR],uy("esds",0,0,GR)},Dy=RR=>ty("wave",void 0,[Hy(RR),oy(RR),ty("\\0\\0\\0\\0")]),Hy=RR=>ty("frma",[Gy(Mt(RR.track.source._codec,RR.info.decoderConfig.codec,RR.muxer.isQuickTime))]),oy=RR=>{const{littleEndian:JR}=WG(RR.track.source._codec);return ty("enda",[dG(+JR)])},cy=RR=>{let JR=RR.info.numberOfChannels,GR=3840,yR=RR.info.sampleRate,tR=0,uR=0,ZR=new Uint8Array(0);const qR=RR.info.decoderConfig?.description;if(qR){vR(qR.byteLength>=18);const RR=mR(qR),iR=kJ(RR);JR=iR.outputChannelCount,GR=iR.preSkip,yR=iR.inputSampleRate,tR=iR.outputGain,uR=iR.channelMappingFamily,iR.channelMappingTable&&(ZR=iR.channelMappingTable)}return ty("dOps",[jG(0),jG(JR),dG(GR),kG(yR),EG(tR),jG(uR),...ZR])},Py=RR=>{const JR=RR.info.decoderConfig?.description;vR(JR);const GR=mR(JR);return uy("dfLa",0,0,[...GR.subarray(4)])},Iy=RR=>{const{littleEndian:JR,sampleSize:GR}=WG(RR.track.source._codec);return uy("pcmC",0,0,[jG(+JR),jG(8*GR)])},my=RR=>{vR(RR.info.primingPacket);const JR=(RR=>{if(RR.length<7)return null;if(11!==RR[0]||119!==RR[1])return null;const JR=new eJ(RR);JR.skipBits(16),JR.skipBits(16);const GR=JR.readBits(2);if(3===GR)return null;const yR=JR.readBits(6),tR=JR.readBits(5);if(tR>8)return null;const uR=JR.readBits(3),ZR=JR.readBits(3);return 0!==(1&ZR)&&1!==ZR&&JR.skipBits(2),0!==(4&ZR)&&JR.skipBits(2),2===ZR&&JR.skipBits(2),{fscod:GR,bsid:tR,bsmod:uR,acmod:ZR,lfeon:JR.readBits(1),bitRateCode:Math.floor(yR/2)}})(RR.info.primingPacket.data);if(!JR)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const GR=new Uint8Array(3),yR=new eJ(GR);return yR.writeBits(2,JR.fscod),yR.writeBits(5,JR.bsid),yR.writeBits(3,JR.bsmod),yR.writeBits(3,JR.acmod),yR.writeBits(1,JR.lfeon),yR.writeBits(5,JR.bitRateCode),yR.writeBits(5,0),ty("dac3",[...GR])},zy=RR=>{vR(RR.info.primingPacket);const JR=(RR=>{if(RR.length<6)return null;if(11!==RR[0]||119!==RR[1])return null;const JR=new eJ(RR);JR.skipBits(16);const GR=JR.readBits(2);if(JR.skipBits(3),0!==GR&&2!==GR)return null;const yR=JR.readBits(11),tR=JR.readBits(2);let uR,ZR=0;3===tR?(ZR=JR.readBits(2),uR=3):uR=JR.readBits(2);const qR=JR.readBits(3),iR=JR.readBits(1),fR=JR.readBits(5);if(fR<11||fR>16)return null;const VR=FJ[uR];let KR;return KR=tR<3?MJ[tR]/1e3:BJ[ZR]/1e3,{dataRate:Math.round((yR+1)*KR/(16*VR)),substreams:[{fscod:tR,fscod2:ZR,bsid:fR,bsmod:0,acmod:qR,lfeon:iR,numDepSub:0,chanLoc:0}]}})(RR.info.primingPacket.data);if(!JR)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let GR=16;for(const ZR of JR.substreams)GR+=23,ZR.numDepSub>0?GR+=9:GR+=1;const yR=Math.ceil(GR/8),tR=new Uint8Array(yR),uR=new eJ(tR);uR.writeBits(13,JR.dataRate),uR.writeBits(3,JR.substreams.length-1);for(const ZR of JR.substreams)uR.writeBits(2,ZR.fscod),uR.writeBits(5,ZR.bsid),uR.writeBits(1,0),uR.writeBits(1,0),uR.writeBits(3,ZR.bsmod),uR.writeBits(3,ZR.acmod),uR.writeBits(1,ZR.lfeon),uR.writeBits(3,0),uR.writeBits(4,ZR.numDepSub),ZR.numDepSub>0?uR.writeBits(9,ZR.chanLoc):uR.writeBits(1,0);return ty("dec3",[...tR])},Sy=RR=>{vR(RR.info.primingPacket);const JR=uG(RR.info.primingPacket.data);if(!JR)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return ty("ddts",[...iG(JR)])},jy=(RR,JR)=>ty(RR,[Array(6).fill(0),dG(1)],[pt[JR.track.source._codec](JR),gy(JR)]),dy=RR=>uy("stts",0,0,[kG(RR.timeToSampleTable.length),RR.timeToSampleTable.map((RR=>[kG(RR.sampleCount),kG(RR.sampleDelta)]))]),Ey=RR=>{if(RR.samples.every((RR=>"key"===RR.type)))return null;const JR=[...RR.samples.entries()].filter((RR=>{let[,JR]=RR;return"key"===JR.type}));return uy("stss",0,0,[kG(JR.length),JR.map((RR=>{let[JR]=RR;return kG(JR+1)}))])},Yy=RR=>uy("stsc",0,0,[kG(RR.compactlyCodedChunkTable.length),RR.compactlyCodedChunkTable.map((RR=>[kG(RR.firstChunk),kG(RR.samplesPerChunk),kG(1)]))]),ky=RR=>{if("audio"===RR.type&&RR.info.requiresPcmTransformation){const{sampleSize:JR}=WG(RR.track.source._codec);return uy("stsz",0,0,[kG(JR*RR.info.numberOfChannels),kG(RR.samples.reduce(((JR,GR)=>JR+mt(GR.duration,RR.timescale)),0))])}return uy("stsz",0,0,[kG(0),kG(RR.samples.length),RR.samples.map((RR=>kG(RR.size)))])},Qy=RR=>RR.finalizedChunks.length>0&&oR(RR.finalizedChunks).offset>=2**32?uy("co64",0,0,[kG(RR.finalizedChunks.length),RR.finalizedChunks.map((RR=>FG(RR.offset)))]):uy("stco",0,0,[kG(RR.finalizedChunks.length),RR.finalizedChunks.map((RR=>kG(RR.offset)))]),Fy=RR=>uy("ctts",1,0,[kG(RR.compositionTimeOffsetTable.length),RR.compositionTimeOffsetTable.map((RR=>[kG(RR.sampleCount),QG(RR.sampleCompositionTimeOffset)]))]),Ty=RR=>{let JR=1/0,GR=-1/0,yR=1/0,tR=-1/0;vR(RR.compositionTimeOffsetTable.length>0),vR(RR.samples.length>0);for(let ZR=0;ZR<RR.compositionTimeOffsetTable.length;ZR++){const yR=RR.compositionTimeOffsetTable[ZR];JR=Math.min(JR,yR.sampleCompositionTimeOffset),GR=Math.max(GR,yR.sampleCompositionTimeOffset)}for(let ZR=0;ZR<RR.samples.length;ZR++){const JR=RR.samples[ZR];yR=Math.min(yR,mt(JR.timestamp,RR.timescale)),tR=Math.max(tR,mt(JR.timestamp+JR.duration,RR.timescale))}const uR=Math.max(-JR,0);return tR>=2**31?null:uy("cslg",0,0,[QG(uR),QG(JR),QG(GR),QG(yR),QG(tR)])},sy=RR=>ty("mvex",void 0,RR.map(hy)),hy=RR=>uy("trex",0,0,[kG(RR.track.id),kG(1),kG(0),kG(0),kG(0)]),Rt=(RR,JR)=>ty("moof",void 0,[Jt(RR),...JR.map(yt)]),Jt=RR=>uy("mfhd",0,0,[kG(RR)]),Gt=RR=>{let JR=0,GR=0;const yR="delta"===RR.type;return GR|=+yR,JR|=yR?1:2,JR<<24|GR<<16},yt=RR=>ty("traf",void 0,[tt(RR),ut(RR),Zt(RR)]),tt=RR=>{vR(RR.currentChunk);let JR=0;JR|=8,JR|=16,JR|=32,JR|=131072;const GR=RR.currentChunk.samples[1]??RR.currentChunk.samples[0],yR={duration:GR.timescaleUnitsToNextSample,size:GR.size,flags:Gt(GR)};return uy("tfhd",0,131128,[kG(RR.track.id),kG(yR.duration),kG(yR.size),kG(yR.flags)])},ut=RR=>(vR(RR.currentChunk),uy("tfdt",1,0,[FG(mt(RR.currentChunk.startTimestamp,RR.timescale))])),Zt=RR=>{vR(RR.currentChunk);const JR=RR.currentChunk.samples.map((RR=>RR.timescaleUnitsToNextSample)),GR=RR.currentChunk.samples.map((RR=>RR.size)),yR=RR.currentChunk.samples.map(Gt),tR=RR.currentChunk.samples.map((JR=>mt(JR.timestamp-JR.decodeTimestamp,RR.timescale))),uR=new Set(JR),ZR=new Set(GR),qR=new Set(yR),iR=new Set(tR),fR=2===qR.size&&yR[0]!==yR[1],VR=uR.size>1,KR=ZR.size>1,wR=!fR&&qR.size>1,rR=iR.size>1||[...iR].some((RR=>0!==RR));let eR=0;return eR|=1,eR|=4*+fR,eR|=256*+VR,eR|=512*+KR,eR|=1024*+wR,eR|=2048*+rR,uy("trun",1,eR,[kG(RR.currentChunk.samples.length),kG(RR.currentChunk.offset-RR.currentChunk.moofOffset||0),fR?kG(yR[0]):[],RR.currentChunk.samples.map(((RR,uR)=>[VR?kG(JR[uR]):[],KR?kG(GR[uR]):[],wR?kG(yR[uR]):[],rR?QG(tR[uR]):[]]))])},qt=RR=>uy("tfra",1,0,[kG(RR.track.id),kG(63),kG(RR.finalizedChunks.length),RR.finalizedChunks.map((JR=>[FG(mt(JR.samples[0].timestamp,RR.timescale)),FG(JR.moofOffset),kG(JR.trafIndex+1),kG(1),kG(1)]))]),it=()=>uy("mfro",0,0,[kG(0)]),ft=()=>ty("vtte"),Vt=(RR,JR,GR,yR,tR)=>ty("vttc",void 0,[null!==tR?ty("vsid",[QG(tR)]):null,null!==GR?ty("iden",[...jR.encode(GR)]):null,null!==JR?ty("ctim",[...jR.encode(IG(JR))]):null,null!==yR?ty("sttg",[...jR.encode(yR)]):null,ty("payl",[...jR.encode(RR)])]),Kt=RR=>ty("vtta",[...jR.encode(RR)]),wt=RR=>{const JR=[],GR=RR.format._options.metadataFormat??"auto",yR=RR.output._metadataTags;if("mdir"===GR||"auto"===GR&&!RR.isQuickTime){const RR=Ut(yR);RR&&JR.push(RR)}else if("mdta"===GR){const RR=Wt(yR);RR&&JR.push(RR)}else("udta"===GR||"auto"===GR&&RR.isQuickTime)&&rt(JR,RR.output._metadataTags);return 0===JR.length?null:ty("udta",void 0,JR)},rt=(RR,JR)=>{for(const{key:GR,value:yR}of ZJ(JR))switch(GR){case"title":RR.push(et("\\xa9nam",yR));break;case"description":RR.push(et("\\xa9des",yR));break;case"artist":RR.push(et("\\xa9ART",yR));break;case"album":RR.push(et("\\xa9alb",yR));break;case"albumArtist":RR.push(et("albr",yR));break;case"genre":RR.push(et("\\xa9gen",yR));break;case"date":RR.push(et("\\xa9day",yR.toISOString().slice(0,10)));break;case"comment":RR.push(et("\\xa9cmt",yR));break;case"lyrics":RR.push(et("\\xa9lyr",yR));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:sR(GR)}if(JR.raw)for(const GR in JR.raw){const yR=JR.raw[GR];null==yR||4!==GR.length||RR.some((RR=>RR.type===GR))||("string"===typeof yR?RR.push(et(GR,yR)):yR instanceof Uint8Array&&RR.push(ty(GR,Array.from(yR))))}},et=(RR,JR)=>{const GR=jR.encode(JR);return ty(RR,[dG(GR.length),dG(gt("und")),Array.from(GR)])},Lt={"image/jpeg":13,"image/png":14,"image/bmp":27},nt=(RR,JR)=>{const GR=[];for(const{key:yR,value:tR}of ZJ(RR))switch(yR){case"title":GR.push({key:JR?"title":"\\xa9nam",value:At(tR)});break;case"description":GR.push({key:JR?"description":"\\xa9des",value:At(tR)});break;case"artist":GR.push({key:JR?"artist":"\\xa9ART",value:At(tR)});break;case"album":GR.push({key:JR?"album":"\\xa9alb",value:At(tR)});break;case"albumArtist":GR.push({key:JR?"album_artist":"aART",value:At(tR)});break;case"comment":GR.push({key:JR?"comment":"\\xa9cmt",value:At(tR)});break;case"genre":GR.push({key:JR?"genre":"\\xa9gen",value:At(tR)});break;case"beatsPerMinute":JR||GR.push({key:"tmpo",value:ty("data",[kG(21),kG(0),dG(tR)])});break;case"lyrics":GR.push({key:JR?"lyrics":"\\xa9lyr",value:At(tR)});break;case"date":GR.push({key:JR?"date":"\\xa9day",value:At(tR.toISOString().slice(0,10))});break;case"images":for(const RR of tR)"coverFront"===RR.kind&&GR.push({key:"covr",value:ty("data",[kG(Lt[RR.mimeType]??0),kG(0),Array.from(RR.data)])});break;case"trackNumber":if(JR){const JR=void 0!==RR.tracksTotal?`${tR}/${RR.tracksTotal}`:tR.toString();GR.push({key:"track",value:At(JR)})}else GR.push({key:"trkn",value:ty("data",[kG(0),kG(0),dG(0),dG(tR),dG(RR.tracksTotal??0),dG(0)])});break;case"discNumber":JR||GR.push({key:"disc",value:ty("data",[kG(0),kG(0),dG(0),dG(tR),dG(RR.discsTotal??0),dG(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:sR(yR)}if(RR.raw)for(const yR in RR.raw){const tR=RR.raw[yR];null==tR||!JR&&4!==yR.length||GR.some((RR=>RR.key===yR))||("string"===typeof tR?GR.push({key:yR,value:At(tR)}):tR instanceof Uint8Array?GR.push({key:yR,value:ty("data",[kG(0),kG(0),Array.from(tR)])}):tR instanceof wJ&&GR.push({key:yR,value:ty("data",[kG(Lt[tR.mimeType]??0),kG(0),Array.from(tR.data)])}))}return GR},Ut=RR=>{const JR=nt(RR,!1);return 0===JR.length?null:uy("meta",0,0,void 0,[Uy(!1,"mdir","","appl"),ty("ilst",void 0,JR.map((RR=>ty(RR.key,void 0,[RR.value]))))])},Wt=RR=>{const JR=nt(RR,!0);return 0===JR.length?null:ty("meta",void 0,[Uy(!1,"mdta",""),uy("keys",0,0,[kG(JR.length)],JR.map((RR=>ty("mdta",[...jR.encode(RR.key)])))),ty("ilst",void 0,JR.map(((RR,JR)=>{const GR=String.fromCharCode(...kG(JR+1));return ty(GR,void 0,[RR.value])})))])},At=RR=>ty("data",[kG(1),kG(0),...jR.encode(RR)]),Ct=(RR,JR)=>{switch(RR){case"avc":return JR.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return JR}},Xt={avc:RR=>RR.info.decoderConfig&&ty("avcC",[...mR(RR.info.decoderConfig.description)]),hevc:RR=>RR.info.decoderConfig&&ty("hvcC",[...mR(RR.info.decoderConfig.description)]),vp8:Oy,vp9:Oy,av1:RR=>ty("av1C",nG(RR.info.decoderConfig.codec)),prores:null},Mt=(RR,JR,GR)=>{switch(RR){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return JR}if(GR)switch(RR){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(RR){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},Bt=(RR,JR)=>{switch(RR){case"aac":case"mp3":case"vorbis":return Ny;case"opus":return cy;case"flac":return Py;case"ac3":return my;case"eac3":return zy;case"dts":return Sy}if(JR)switch(RR){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return Dy}else switch(RR){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return Iy}return null},lt={webvtt:"wvtt"},pt={webvtt:RR=>ty("vttC",[...jR.encode(RR.info.config.description)])},gt=RR=>{vR(3===RR.length);let JR=0;for(let GR=0;GR<3;GR++)JR<<=5,JR+=RR.charCodeAt(GR)-96;return JR};class bt{constructor(RR,JR){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,RR._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=RR,RR._setMonotonicity(JR),RR._writerAcquired=!0}start(){vR(!this.started),this.target._start(),this.started=!0}write(RR){vR(this.started&&!this.finalized),this.maybeTrackWrites(RR),this.target._write(RR,this.pos),this.pos+=RR.byteLength}seek(RR){this.pos=RR}getPos(){return this.pos}async flush(){return vR(this.started&&!this.finalized),this.target._flush()}async finalize(){vR(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(RR){if(!this.trackedWrites)return;let JR=this.getPos();if(JR<this.trackedStart){if(JR+RR.byteLength<=this.trackedStart)return;RR=RR.subarray(this.trackedStart-JR),JR=0}const GR=JR+RR.byteLength-this.trackedStart;let yR=this.trackedWrites.byteLength;for(;yR<GR;)yR*=2;if(yR!==this.trackedWrites.byteLength){const RR=new Uint8Array(yR);RR.set(this.trackedWrites,0),this.trackedWrites=RR}this.trackedWrites.set(RR,JR-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,JR+RR.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const RR={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,RR}}GR(5);class vt extends VJ{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(RR){!1!==this._monotonicity&&(this._monotonicity=RR)}_dispatchWrite(RR,JR){this.onwrite?.(RR,JR),this._emit("write",{start:RR,end:JR})}slice(RR){if(!Number.isInteger(RR)||RR<0)throw new TypeError("offset must be a non-negative integer.");return new Ht(this,RR)}}const Ot=65536,xt=2**32;class Nt extends vt{constructor(){let RR=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!RR||"object"!==typeof RR)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==RR.onFinalize&&"function"!==typeof RR.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=RR,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Ot,{maxByteLength:xt})}catch{this._buffer=new ArrayBuffer(Ot),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Ot);this._bytes=new Uint8Array(this._buffer)}_ensureSize(RR){let JR=this._buffer.byteLength;for(;JR<RR;)JR*=2;if(JR!==this._buffer.byteLength){if(JR>xt)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(JR);else{const RR=new ArrayBuffer(JR),GR=new Uint8Array(RR);GR.set(this._bytes,0),this._buffer=RR,this._bytes=GR}}}_start(){}_write(RR,JR){this._ensureSize(JR+RR.byteLength),this._bytes.set(RR,JR),this._maxPos=Math.max(this._maxPos,JR+RR.byteLength),this._dispatchWrite(JR,JR+RR.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(RR,JR){return this._bytes.slice(RR,JR)}}class Dt extends vt{_start(){}_write(RR,JR){this._dispatchWrite(JR,JR+RR.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class Ht extends vt{constructor(RR,JR){super(),this._baseTarget=RR,this._offset=JR}_start(){}_write(RR,JR){this._baseTarget._write(RR,this._offset+JR),this._dispatchWrite(JR,JR+RR.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(RR){super._setMonotonicity(RR),this._baseTarget._setMonotonicity(RR)}}class ot{constructor(RR,JR){if(this.rootPath=RR,this.getTarget=JR,"string"!==typeof RR)throw new TypeError("rootPath must be a string.");if("function"!==typeof JR)throw new TypeError("getTarget must be a function.")}}const ct=RR=>{const JR=RR.filePos,GR=DG(RR,9),yR=new eJ(GR);if(4095!==yR.readBits(12))return null;yR.skipBits(1);if(0!==yR.readBits(2))return null;const tR=yR.readBits(1),uR=yR.readBits(2)+1,ZR=yR.readBits(4);if(15===ZR)return null;yR.skipBits(1);const qR=yR.readBits(3);if(0===qR)throw new Error("ADTS frames with channel configuration 0 are not supported.");yR.skipBits(1),yR.skipBits(1),yR.skipBits(1),yR.skipBits(1);const iR=yR.readBits(13);yR.skipBits(11);const fR=yR.readBits(2)+1;if(1!==fR)throw new Error("ADTS frames with more than one AAC frame are not supported.");let VR=null;return 1===tR?RR.filePos-=2:VR=yR.readBits(16),{objectType:uR,samplingFrequencyIndex:ZR,channelConfiguration:qR,frameLength:iR,numberOfAacFrames:fR,crcCheck:VR,startPos:JR}},Pt=57600,It=RR=>{const JR={},GR=RR.track;return void 0!==GR.metadata.name&&(JR.name=GR.metadata.name),JR},mt=function(RR,JR){const GR=RR*JR;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(GR):GR},zt=RR=>{if(0===RR.samples.length)return 0;let JR=1/0,GR=-1/0;for(let yR=0;yR<RR.samples.length;yR++){const tR=RR.samples[yR];tR.timestamp<JR&&(JR=tR.timestamp),tR.timestamp+tR.duration>GR&&(GR=tR.timestamp+tR.duration)}return JR===1/0?0:GR-JR};class St extends cG{constructor(RR,JR){super(RR),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new Nt,this.auxWriter=new bt(this.auxTarget,!1),this.auxBoxWriter=new mG(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=TR(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=JR,this.formatOptions={...JR._options},this.isQuickTime=JR instanceof wu,this.isCmaf=JR instanceof Ku,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(JR instanceof Ku?1/0:1),this.auxWriter.start()}async start(){const RR=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((RR=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:RR instanceof Nt)),this.boxWriter=new mG(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof Nt&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const RR=await this.output._getInitTarget(),JR=new bt(RR,!0);JR.start(),this.initWriter=JR,this.initBoxWriter=new mG(JR)}const JR=this.output.tracks.some((RR=>RR.isVideoTrack()&&"avc"===RR.source._codec));{const RR=this.initBoxWriter??this.boxWriter;if(vR(RR),this.formatOptions.onFtyp&&RR.writer.startTrackingWrites(),RR.writeBox((RR=>{const JR=512;return RR.isQuickTime?ty("ftyp",[Gy("qt  "),kG(JR),Gy("qt  ")]):RR.fragmented?RR.cmaf?ty("ftyp",[Gy("iso5"),kG(JR),Gy("iso5"),Gy("iso6"),Gy("mp41"),Gy("cmfc"),Gy("dash")]):ty("ftyp",[Gy("iso5"),kG(JR),Gy("iso5"),Gy("iso6"),Gy("mp41")]):ty("ftyp",[Gy("isom"),kG(JR),Gy("isom"),RR.holdsAvc?Gy("avc1"):[],Gy("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:JR,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:JR,start:GR}=RR.writer.stopTrackingWrites();this.formatOptions.onFtyp(JR,GR)}this.ftypSize=RR.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const GR of this.output.tracks)if(void 0===GR.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(vR(this.writer),vR(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=iy(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const GR of this.output.tracks)GR.isVideoTrack()&&GR.metadata.decoderConfig?this.getVideoTrackData(GR,GR.metadata.primingPacket??null,{decoderConfig:GR.metadata.decoderConfig}):GR.isAudioTrack()&&GR.metadata.decoderConfig&&this.getAudioTrackData(GR,GR.metadata.primingPacket??null,{decoderConfig:GR.metadata.decoderConfig});RR()}allTracksAreKnown(){for(const RR of this.output.tracks)if(!RR.source._closed&&!this.trackDatas.some((JR=>JR.track===RR)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const RR=this.trackDatas.map((RR=>{if("video"===RR.type)return RR.info.decoderConfig.codec;if("audio"===RR.type)return RR.info.decoderConfig.codec;return{webvtt:"wvtt"}[RR.track.source._codec]}));return(RR=>{let JR=(RR.hasVideo?"video/":RR.hasAudio?"audio/":"application/")+(RR.isQuickTime?"quicktime":"mp4");RR.codecStrings.length>0&&(JR+=`; codecs="${[...new Set(RR.codecStrings)].join(", ")}"`);return JR})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((RR=>"video"===RR.type)),hasAudio:this.trackDatas.some((RR=>"audio"===RR.type)),codecStrings:RR})}getVideoTrackData(RR,JR,GR){const yR=this.trackDatas.find((JR=>JR.track===RR));if(yR)return yR;pG(GR,RR.source._codec),vR(GR),vR(GR.decoderConfig);const tR={...GR.decoderConfig};vR(void 0!==tR.codedWidth),vR(void 0!==tR.codedHeight);let uR=!1;if("avc"!==RR.source._codec||tR.description){if("hevc"===RR.source._codec&&!tR.description){if(!JR)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const RR=PJ(JR.data);if(!RR)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");tR.description=(RR=>{const JR=[];JR.push(RR.configurationVersion),JR.push((3&RR.generalProfileSpace)<<6|(1&RR.generalTierFlag)<<5|31&RR.generalProfileIdc),JR.push(RR.generalProfileCompatibilityFlags>>>24&255),JR.push(RR.generalProfileCompatibilityFlags>>>16&255),JR.push(RR.generalProfileCompatibilityFlags>>>8&255),JR.push(255&RR.generalProfileCompatibilityFlags),JR.push(...RR.generalConstraintIndicatorFlags),JR.push(255&RR.generalLevelIdc),JR.push(240|RR.minSpatialSegmentationIdc>>8&15),JR.push(255&RR.minSpatialSegmentationIdc),JR.push(252|3&RR.parallelismType),JR.push(252|3&RR.chromaFormatIdc),JR.push(248|7&RR.bitDepthLumaMinus8),JR.push(248|7&RR.bitDepthChromaMinus8),JR.push(RR.avgFrameRate>>8&255),JR.push(255&RR.avgFrameRate),JR.push((3&RR.constantFrameRate)<<6|(7&RR.numTemporalLayers)<<3|(1&RR.temporalIdNested)<<2|3&RR.lengthSizeMinusOne),JR.push(255&RR.arrays.length);for(const GR of RR.arrays){JR.push((1&GR.arrayCompleteness)<<7|63&GR.nalUnitType),JR.push(GR.nalUnits.length>>8&255),JR.push(255&GR.nalUnits.length);for(const RR of GR.nalUnits){JR.push(RR.length>>8&255),JR.push(255&RR.length);for(let GR=0;GR<RR.length;GR++)JR.push(RR[GR])}}return new Uint8Array(JR)})(RR),uR=!0}}else{if(!JR)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const RR=NJ(JR.data);if(!RR)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");tR.description=(RR=>{const JR=[];JR.push(RR.configurationVersion),JR.push(RR.avcProfileIndication),JR.push(RR.profileCompatibility),JR.push(RR.avcLevelIndication),JR.push(252|3&RR.lengthSizeMinusOne),JR.push(224|31&RR.sequenceParameterSets.length);for(const GR of RR.sequenceParameterSets){const RR=GR.byteLength;JR.push(RR>>8),JR.push(255&RR);for(let yR=0;yR<RR;yR++)JR.push(GR[yR])}JR.push(RR.pictureParameterSets.length);for(const GR of RR.pictureParameterSets){const RR=GR.byteLength;JR.push(RR>>8),JR.push(255&RR);for(let yR=0;yR<RR;yR++)JR.push(GR[yR])}if((100===RR.avcProfileIndication||110===RR.avcProfileIndication||122===RR.avcProfileIndication||144===RR.avcProfileIndication)&&null!==RR.chromaFormat){vR(null!==RR.bitDepthLumaMinus8),vR(null!==RR.bitDepthChromaMinus8),vR(null!==RR.sequenceParameterSetExt),JR.push(252|3&RR.chromaFormat),JR.push(248|7&RR.bitDepthLumaMinus8),JR.push(248|7&RR.bitDepthChromaMinus8),JR.push(RR.sequenceParameterSetExt.length);for(const GR of RR.sequenceParameterSetExt){const RR=GR.byteLength;JR.push(RR>>8),JR.push(255&RR);for(let yR=0;yR<RR;yR++)JR.push(GR[yR])}}return new Uint8Array(JR)})(RR),uR=!0}const ZR=((RR,JR)=>{const GR=RR<0?-1:1;let yR=0,tR=1,uR=1,ZR=0,qR=RR=Math.abs(RR);for(;;){const RR=Math.floor(qR),iR=RR*uR+yR,fR=RR*ZR+tR;if(fR>JR)return{num:GR*uR,den:ZR};if(yR=uR,tR=ZR,uR=iR,ZR=fR,qR=1/(qR-RR),!isFinite(qR))break}return{num:GR*uR,den:ZR}})(1/(RR.metadata.frameRate??Pt),1e6).den,qR=tR.displayAspectWidth,iR=tR.displayAspectHeight,fR=void 0===qR||void 0===iR?{num:1,den:1}:iJ({num:qR*tR.codedHeight,den:iR*tR.codedWidth}),VR="ap4h"===tR.codec||"ap4x"===tR.codec,KR={muxer:this,track:RR,type:"video",info:{width:tR.codedWidth,height:tR.codedHeight,pixelAspectRatio:fR,decoderConfig:tR,requiresAnnexBTransformation:uR,hasAlphaChannel:VR},timescale:ZR,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:RR.source._nominalBitrate??RR.metadata.averageBitrate??0,maxBitrate:RR.source._nominalBitrate??RR.metadata.bitrate??0};return this.trackDatas.push(KR),this.trackDatas.sort(((RR,JR)=>RR.track.id-JR.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),KR}getAudioTrackData(RR,JR,GR){const yR=this.trackDatas.find((JR=>JR.track===RR));if(yR)return yR;bG(GR,RR.source._codec),vR(GR),vR(GR.decoderConfig);const tR={...GR.decoderConfig};let uR=!1;if("aac"===RR.source._codec&&!tR.description){if(!JR)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const RR=ct(xG.tempFromBytes(JR.data));if(!RR)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const GR=aJ[RR.samplingFrequencyIndex],yR=LJ[RR.channelConfiguration];if(void 0===GR||void 0===yR)throw new Error("Invalid ADTS frame header.");tR.description=nJ({objectType:RR.objectType,outputSampleRate:GR,outputNumberOfChannels:yR}),uR=!0}if(!JR){if("ac3"===RR.source._codec||"eac3"===RR.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===RR.source._codec)throw new Error("DTS requires a priming packet.")}const ZR={muxer:this,track:RR,type:"audio",info:{numberOfChannels:GR.decoderConfig.numberOfChannels,sampleRate:GR.decoderConfig.sampleRate,decoderConfig:tR,requiresPcmTransformation:!this.isFragmented&&VG.includes(RR.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:uR,primingPacket:JR},timescale:tR.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:RR.source._nominalBitrate??RR.metadata.averageBitrate??0,maxBitrate:RR.source._nominalBitrate??RR.metadata.bitrate??0};return this.trackDatas.push(ZR),this.trackDatas.sort(((RR,JR)=>RR.track.id-JR.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),ZR}getSubtitleTrackData(RR,JR){const GR=this.trackDatas.find((JR=>JR.track===RR));if(GR)return GR;vG(JR),vR(JR),vR(JR.config);const yR={muxer:this,track:RR,type:"subtitle",info:{config:JR.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:RR.source._nominalBitrate??RR.metadata.averageBitrate??0,maxBitrate:RR.source._nominalBitrate??RR.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(yR),this.trackDatas.sort(((RR,JR)=>RR.track.id-JR.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),yR}async addEncodedVideoPacket(RR,JR,GR){const yR=await this.mutex.acquire();try{const yR=this.getVideoTrackData(RR,JR,GR);let tR=JR.data;if(yR.info.requiresAnnexBTransformation){const RR=[...bJ(tR)].map((RR=>tR.subarray(RR.offset,RR.offset+RR.length)));if(0===RR.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");tR=xJ(RR,4)}this.validateTimestamp(yR.track,JR.timestamp,"key"===JR.type);const uR=this.createSampleForTrack(yR,tR,JR.timestamp,JR.duration,JR.type);await this.registerSample(yR,uR)}finally{yR()}}async addEncodedAudioPacket(RR,JR,GR){const yR=await this.mutex.acquire();try{const yR=this.getAudioTrackData(RR,JR,GR);let tR=JR.data;if(yR.info.requiresAdtsStripping){const RR=ct(xG.tempFromBytes(tR));if(!RR)throw new Error("Expected ADTS frame, didn\'t get one.");const JR=null===RR.crcCheck?7:9;tR=tR.subarray(JR)}this.validateTimestamp(yR.track,JR.timestamp,"key"===JR.type);let uR=JR.timestamp,ZR=JR.duration;if(yR.info.requiresPcmTransformation){const RR=WG(yR.info.decoderConfig.codec).sampleSize*yR.info.numberOfChannels;if(ZR=tR.byteLength/RR/yR.info.sampleRate,null!==yR.info.expectedNextPcmPacketTimestamp){const RR=uR-yR.info.expectedNextPcmPacketTimestamp;if(RR<.01)uR=yR.info.expectedNextPcmPacketTimestamp;else{const JR=await this.padWithSilence(yR,yR.info.expectedNextPcmPacketTimestamp,RR);uR=yR.info.expectedNextPcmPacketTimestamp+JR}}yR.info.expectedNextPcmPacketTimestamp=uR+ZR}const qR=this.createSampleForTrack(yR,tR,uR,ZR,JR.type);await this.registerSample(yR,qR)}finally{yR()}}async padWithSilence(RR,JR,GR){const yR=mt(GR,RR.timescale);if(GR=yR/RR.timescale,yR>0){const{sampleSize:tR,silentValue:uR}=WG(RR.info.decoderConfig.codec),ZR=yR*RR.info.numberOfChannels,qR=new Uint8Array(tR*ZR).fill(uR),iR=this.createSampleForTrack(RR,new Uint8Array(qR.buffer),JR,GR,"key");await this.registerSample(RR,iR)}return GR}async addSubtitleCue(RR,JR,GR){const yR=await this.mutex.acquire();try{const yR=this.getSubtitleTrackData(RR,GR);this.validateTimestamp(yR.track,JR.timestamp,!0),"webvtt"===RR.source._codec&&(yR.cueQueue.push(JR),await this.processWebVTTCues(yR,JR.timestamp))}finally{yR()}}async processWebVTTCues(RR,JR){for(;RR.cueQueue.length>0;){RR.lastCueEndTimestamp??=Math.min(0,RR.cueQueue[0].timestamp);const GR=new Set([]);for(const iR of RR.cueQueue)vR(iR.timestamp<=JR),vR(RR.lastCueEndTimestamp<=iR.timestamp+iR.duration),GR.add(Math.max(iR.timestamp,RR.lastCueEndTimestamp)),GR.add(iR.timestamp+iR.duration);const yR=[...GR].sort(((RR,JR)=>RR-JR)),tR=yR[0],uR=yR[1]??tR;if(JR<uR)break;if(RR.lastCueEndTimestamp<tR){this.auxWriter.seek(0);const JR=ft();this.auxBoxWriter.writeBox(JR);const GR=this.auxTarget._getSlice(0,this.auxWriter.getPos()),yR=this.createSampleForTrack(RR,GR,RR.lastCueEndTimestamp,tR-RR.lastCueEndTimestamp,"key");await this.registerSample(RR,yR),RR.lastCueEndTimestamp=tR}this.auxWriter.seek(0);for(let JR=0;JR<RR.cueQueue.length;JR++){const GR=RR.cueQueue[JR];if(GR.timestamp>=uR)break;PG.lastIndex=0;const yR=PG.test(GR.text),ZR=GR.timestamp+GR.duration;let qR=RR.cueToSourceId.get(GR);if(void 0===qR&&uR<ZR&&(qR=RR.nextSourceId++,RR.cueToSourceId.set(GR,qR)),GR.notes){const RR=Kt(GR.notes);this.auxBoxWriter.writeBox(RR)}const iR=Vt(GR.text,yR?tR:null,GR.identifier??null,GR.settings??null,qR??null);this.auxBoxWriter.writeBox(iR),ZR===uR&&RR.cueQueue.splice(JR--,1)}const ZR=this.auxTarget._getSlice(0,this.auxWriter.getPos()),qR=this.createSampleForTrack(RR,ZR,tR,uR-tR,"key");await this.registerSample(RR,qR),RR.lastCueEndTimestamp=uR}}createSampleForTrack(RR,JR,GR,yR,tR){return{timestamp:GR,decodeTimestamp:GR,duration:yR,data:JR,size:JR.byteLength,type:tR,timescaleUnitsToNextSample:mt(yR,RR.timescale)}}processTimestamps(RR,JR){if(0===RR.timestampProcessingQueue.length)return;if("audio"===RR.type&&RR.info.requiresPcmTransformation){vR(!this.isFragmented),RR.startTimestampOffset??=RR.timestampProcessingQueue[0].timestamp;let JR=0;for(let GR=0;GR<RR.timestampProcessingQueue.length;GR++){const yR=RR.timestampProcessingQueue[GR];JR+=mt(yR.duration,RR.timescale)}if(0===RR.timeToSampleTable.length)RR.timeToSampleTable.push({sampleCount:JR,sampleDelta:1});else{oR(RR.timeToSampleTable).sampleCount+=JR}return void(RR.timestampProcessingQueue.length=0)}const GR=RR.timestampProcessingQueue.map((RR=>RR.timestamp)).sort(((RR,JR)=>RR-JR));this.isFragmented?RR.startTimestampOffset??=Math.min(GR[0],0):RR.startTimestampOffset??=GR[0];for(let yR=0;yR<RR.timestampProcessingQueue.length;yR++){const JR=RR.timestampProcessingQueue[yR];JR.decodeTimestamp=GR[yR];const tR=mt(JR.timestamp-JR.decodeTimestamp,RR.timescale),uR=mt(JR.duration,RR.timescale);if(null!==RR.lastTimescaleUnits){vR(RR.lastSample);const GR=mt(JR.decodeTimestamp,RR.timescale,!1),yR=Math.round(GR-RR.lastTimescaleUnits);if(vR(yR>=0),RR.lastTimescaleUnits+=yR,RR.lastSample.timescaleUnitsToNextSample=yR,!this.isFragmented){let JR=oR(RR.timeToSampleTable);if(vR(JR),1===JR.sampleCount){JR.sampleDelta=yR;const GR=RR.timeToSampleTable[RR.timeToSampleTable.length-2];GR&&GR.sampleDelta===yR&&(GR.sampleCount++,RR.timeToSampleTable.pop(),JR=GR)}else JR.sampleDelta!==yR&&(JR.sampleCount--,RR.timeToSampleTable.push(JR={sampleCount:1,sampleDelta:yR}));JR.sampleDelta===uR?JR.sampleCount++:RR.timeToSampleTable.push({sampleCount:1,sampleDelta:uR});const GR=oR(RR.compositionTimeOffsetTable);vR(GR),GR.sampleCompositionTimeOffset===tR?GR.sampleCount++:RR.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:tR})}}else RR.lastTimescaleUnits=mt(JR.decodeTimestamp,RR.timescale,!1),this.isFragmented||(RR.timeToSampleTable.push({sampleCount:1,sampleDelta:uR}),RR.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:tR}));RR.lastSample=JR}if(RR.timestampProcessingQueue.length=0,vR(RR.lastSample),vR(null!==RR.lastTimescaleUnits),void 0!==JR&&0===RR.lastSample.timescaleUnitsToNextSample){vR("key"===JR.type);const GR=mt(JR.timestamp,RR.timescale,!1),yR=Math.round(GR-RR.lastTimescaleUnits);RR.lastSample.timescaleUnitsToNextSample=yR}}async registerSample(RR,JR){"key"===JR.type&&this.processTimestamps(RR,JR),RR.timestampProcessingQueue.push(JR),this.isFragmented?(RR.sampleQueue.push(JR),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(RR,JR):await this.addSampleToTrack(RR,JR)}async addSampleToTrack(RR,JR){if(!this.isFragmented&&(RR.samples.push(JR),"reserve"===this.fastStart)){const JR=RR.track.metadata.maximumPacketCount;if(vR(void 0!==JR),RR.samples.length>JR)throw new Error(`Track #${RR.track.id} has already reached the maximum packet count (${JR}). Either add less packets or increase the maximum packet count.`)}let GR=!1;if(RR.currentChunk){RR.currentChunk.startTimestamp=Math.min(RR.currentChunk.startTimestamp,JR.timestamp);const yR=JR.timestamp-RR.currentChunk.startTimestamp;if(this.isFragmented){const tR=this.trackDatas.every((GR=>{if(RR===GR)return"key"===JR.type;const yR=GR.sampleQueue[0];return yR?"key"===yR.type:GR.closed}));yR>=this.minimumFragmentDuration&&tR&&JR.timestamp>this.maxWrittenTimestamp&&(GR=!0,await this.finalizeFragment())}else GR=yR>=.5}else GR=!0;GR&&(RR.currentChunk&&await this.finalizeCurrentChunk(RR),RR.currentChunk={startTimestamp:JR.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),vR(RR.currentChunk),RR.currentChunk.samples.push(JR),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,JR.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,JR.timestamp+JR.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,JR.timestamp))}async finalizeCurrentChunk(RR){if(vR(!this.isFragmented),vR(this.writer),!RR.currentChunk)return;RR.finalizedChunks.push(RR.currentChunk),this.finalizedChunks.push(RR.currentChunk);let JR=RR.currentChunk.samples.length;if("audio"===RR.type&&RR.info.requiresPcmTransformation&&(JR=RR.currentChunk.samples.reduce(((JR,GR)=>JR+mt(GR.duration,RR.timescale)),0)),0!==RR.compactlyCodedChunkTable.length&&oR(RR.compactlyCodedChunkTable).samplesPerChunk===JR||RR.compactlyCodedChunkTable.push({firstChunk:RR.finalizedChunks.length,samplesPerChunk:JR}),"in-memory"!==this.fastStart){RR.currentChunk.offset=this.writer.getPos();for(const JR of RR.currentChunk.samples)vR(JR.data),this.writer.write(JR.data),JR.data=null;await this.writer.flush()}else RR.currentChunk.offset=0}async interleaveSamples(){let RR=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(vR(this.isFragmented),RR||this.allTracksAreKnown())RR:for(;;){let JR=null,GR=1/0;for(const tR of this.trackDatas){if(!RR&&0===tR.sampleQueue.length&&!tR.closed)break RR;tR.sampleQueue.length>0&&tR.sampleQueue[0].timestamp<GR&&(JR=tR,GR=tR.sampleQueue[0].timestamp)}if(!JR)break;const yR=JR.sampleQueue.shift();await this.addSampleToTrack(JR,yR)}}async finalizeFragment(){let RR=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(vR(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const RR=this.initBoxWriter??this.boxWriter;vR(RR),this.formatOptions.onMoov&&RR.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const JR=fy(this);if(RR.writeBox(JR),this.formatOptions.onMoov){const{data:JR,start:GR}=RR.writer.stopTrackingWrites();this.formatOptions.onMoov(JR,GR)}if(this.isCmaf){vR(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new mG(this.writer);const RR=this.boxWriter.measureBox(Zy()),JR=this.boxWriter.measureBox(qy(this,0));this.segmentHeaderSize=RR+JR,this.writer.seek(this.segmentHeaderSize)}}vR(this.writer),vR(this.boxWriter);const JR=this.trackDatas.filter((RR=>RR.currentChunk));if(0===JR.length)return void(RR&&await this.writer.flush());const GR=this.nextFragmentNumber++,yR=Rt(GR,JR),tR=this.writer.getPos(),uR=tR+this.boxWriter.measureBox(yR);let ZR=uR+8,qR=1/0;for(let wR=0;wR<JR.length;wR++){const RR=JR[wR];vR(RR.currentChunk),vR(null!==RR.startTimestampOffset),RR.currentChunk.offset=ZR,RR.currentChunk.moofOffset=tR,RR.currentChunk.trafIndex=wR,RR.currentChunk.startTimestamp-=RR.startTimestampOffset;for(const JR of RR.currentChunk.samples)ZR+=JR.size,JR.timestamp-=RR.startTimestampOffset,JR.decodeTimestamp-=RR.startTimestampOffset;qR=Math.min(qR,RR.currentChunk.startTimestamp)}const iR=ZR-uR,fR=iR>=2**32;if(fR)for(const wR of JR)wR.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const VR=Rt(GR,JR);if(this.boxWriter.writeBox(VR),this.formatOptions.onMoof){const{data:RR,start:JR}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(RR,JR,qR)}vR(this.writer.getPos()===uR),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const KR=iy(fR);KR.size=iR,this.boxWriter.writeBox(KR),this.writer.seek(uR+(fR?16:8));for(const wR of JR)for(const RR of wR.currentChunk.samples)this.writer.write(RR.data),RR.data=null;if(this.formatOptions.onMdat){const{data:RR,start:JR}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(RR,JR)}for(const wR of JR)wR.finalizedChunks.push(wR.currentChunk),this.finalizedChunks.push(wR.currentChunk),wR.currentChunk=null;RR&&await this.writer.flush()}async registerSampleFastStartReserve(RR,JR){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(RR,JR)):RR.sampleQueue.push(JR)}async createFastStartReserveMdat(){vR(this.writer),vR(this.boxWriter),this.ensureOneEnabledTrack();const RR=fy(this),JR=this.boxWriter.measureBox(RR)+this.computeSampleTableSizeUpperBound()+4096;vR(null!==this.ftypSize),this.writer.seek(this.ftypSize+JR),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=iy(!0),this.boxWriter.writeBox(this.mdat);for(const GR of this.trackDatas){for(const RR of GR.sampleQueue)await this.addSampleToTrack(GR,RR);GR.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){vR("reserve"===this.fastStart);let RR=0;for(const JR of this.trackDatas){const GR=JR.track.metadata.maximumPacketCount;vR(void 0!==GR),RR+=8*Math.ceil(2/3*GR),RR+=4*GR,RR+=8*Math.ceil(2/3*GR),RR+=12*Math.ceil(2/3*GR),RR+=4*GR,RR+=8*GR}return RR}async onTrackClose(RR){const JR=await this.mutex.acquire(),GR=this.trackDatas.find((JR=>JR.track===RR));GR&&(GR.closed=!0,"subtitle"===GR.type&&"webvtt"===RR.source._codec&&await this.processWebVTTCues(GR,1/0),this.processTimestamps(GR)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),JR()}ensureOneEnabledTrack(){for(const RR of["video","audio","subtitle"]){const JR=this.trackDatas.filter((JR=>JR.type===RR));if(0===JR.length)continue;if(!JR.some((RR=>!1!==RR.track.metadata.disposition?.default))){const RR=JR[0];RR.track.metadata.disposition={...RR.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){vR(this.isFragmented);const RR=await this.mutex.acquire();try{for(const RR of this.trackDatas)"subtitle"===RR.type&&"webvtt"===RR.track.source._codec&&await this.processWebVTTCues(RR,1/0),this.processTimestamps(RR);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{RR()}}async finalize(){const RR=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const GR of this.trackDatas)GR.closed=!0,"subtitle"===GR.type&&"webvtt"===GR.track.source._codec&&await this.processWebVTTCues(GR,1/0),this.processTimestamps(GR);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const GR of this.trackDatas){await this.finalizeCurrentChunk(GR);const RR=zt(GR);if(RR>0){let JR=0;for(const RR of GR.samples)JR+=RR.size;GR.avgBitrate=Math.round(8*JR/RR)}else GR.avgBitrate=0;let JR=0,yR=0,tR=0;for(let uR=0;uR<GR.samples.length;uR++){const RR=GR.samples[uR];for(yR+=RR.size;RR.decodeTimestamp-GR.samples[JR].decodeTimestamp>=1;)yR-=GR.samples[JR].size,JR++;tR=Math.max(tR,yR)}if(GR.maxBitrate=8*tR,null!==GR.startTimestampOffset)for(let uR=0;uR<GR.samples.length;uR++){const RR=GR.samples[uR];RR.timestamp-=GR.startTimestampOffset,RR.decodeTimestamp-=GR.startTimestampOffset}}if(vR(this.writer),vR(this.boxWriter),"in-memory"===this.fastStart){let RR;this.mdat=iy(!1);for(let GR=0;GR<2;GR++){const JR=fy(this),GR=this.boxWriter.measureBox(JR);RR=this.boxWriter.measureBox(this.mdat);let yR=this.writer.getPos()+GR+RR;for(const tR of this.finalizedChunks){tR.offset=yR;for(const{data:JR}of tR.samples)vR(JR),yR+=JR.byteLength,RR+=JR.byteLength}if(yR<2**32)break;RR>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const JR=fy(this);if(this.boxWriter.writeBox(JR),this.formatOptions.onMoov){const{data:RR,start:JR}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(RR,JR)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=RR,this.boxWriter.writeBox(this.mdat);for(const GR of this.finalizedChunks)for(const RR of GR.samples)vR(RR.data),this.writer.write(RR.data),RR.data=null;if(this.formatOptions.onMdat){const{data:RR,start:JR}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(RR,JR)}}else if(this.isFragmented)if(this.isCmaf){const RR=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Zy()),this.boxWriter.writeBox(qy(this,RR))}else{const RR=this.writer.getPos(),GR=(JR=this.trackDatas,ty("mfra",void 0,[...JR.map(qt),it()]));this.boxWriter.writeBox(GR);const yR=this.writer.getPos()-RR;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(yR)}else{vR(this.mdat);const RR=this.boxWriter.offsets.get(this.mdat);vR(void 0!==RR);const JR=this.writer.getPos()-RR;if(this.mdat.size=JR,this.mdat.largeSize=JR>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:RR,start:JR}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(RR,JR)}const GR=fy(this);if("reserve"===this.fastStart){vR(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(GR);const RR=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:RR})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(GR);if(this.formatOptions.onMoov){const{data:RR,start:JR}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(RR,JR)}}var JR;RR()}}var jt;!function(RR){RR[RR.EBML=440786851]="EBML",RR[RR.EBMLVersion=17030]="EBMLVersion",RR[RR.EBMLReadVersion=17143]="EBMLReadVersion",RR[RR.EBMLMaxIDLength=17138]="EBMLMaxIDLength",RR[RR.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",RR[RR.DocType=17026]="DocType",RR[RR.DocTypeVersion=17031]="DocTypeVersion",RR[RR.DocTypeReadVersion=17029]="DocTypeReadVersion",RR[RR.Void=236]="Void",RR[RR.Segment=408125543]="Segment",RR[RR.SeekHead=290298740]="SeekHead",RR[RR.Seek=19899]="Seek",RR[RR.SeekID=21419]="SeekID",RR[RR.SeekPosition=21420]="SeekPosition",RR[RR.Duration=17545]="Duration",RR[RR.Info=357149030]="Info",RR[RR.TimestampScale=2807729]="TimestampScale",RR[RR.MuxingApp=19840]="MuxingApp",RR[RR.WritingApp=22337]="WritingApp",RR[RR.Tracks=374648427]="Tracks",RR[RR.TrackEntry=174]="TrackEntry",RR[RR.TrackNumber=215]="TrackNumber",RR[RR.TrackUID=29637]="TrackUID",RR[RR.TrackType=131]="TrackType",RR[RR.FlagEnabled=185]="FlagEnabled",RR[RR.FlagDefault=136]="FlagDefault",RR[RR.FlagForced=21930]="FlagForced",RR[RR.FlagOriginal=21934]="FlagOriginal",RR[RR.FlagHearingImpaired=21931]="FlagHearingImpaired",RR[RR.FlagVisualImpaired=21932]="FlagVisualImpaired",RR[RR.FlagCommentary=21935]="FlagCommentary",RR[RR.FlagLacing=156]="FlagLacing",RR[RR.Name=21358]="Name",RR[RR.Language=2274716]="Language",RR[RR.LanguageBCP47=2274717]="LanguageBCP47",RR[RR.CodecID=134]="CodecID",RR[RR.CodecPrivate=25506]="CodecPrivate",RR[RR.CodecDelay=22186]="CodecDelay",RR[RR.SeekPreRoll=22203]="SeekPreRoll",RR[RR.DefaultDuration=2352003]="DefaultDuration",RR[RR.Video=224]="Video",RR[RR.PixelWidth=176]="PixelWidth",RR[RR.PixelHeight=186]="PixelHeight",RR[RR.DisplayWidth=21680]="DisplayWidth",RR[RR.DisplayHeight=21690]="DisplayHeight",RR[RR.DisplayUnit=21682]="DisplayUnit",RR[RR.AlphaMode=21440]="AlphaMode",RR[RR.Audio=225]="Audio",RR[RR.SamplingFrequency=181]="SamplingFrequency",RR[RR.Channels=159]="Channels",RR[RR.BitDepth=25188]="BitDepth",RR[RR.SimpleBlock=163]="SimpleBlock",RR[RR.BlockGroup=160]="BlockGroup",RR[RR.Block=161]="Block",RR[RR.BlockAdditions=30113]="BlockAdditions",RR[RR.BlockMore=166]="BlockMore",RR[RR.BlockAdditional=165]="BlockAdditional",RR[RR.BlockAddID=238]="BlockAddID",RR[RR.BlockDuration=155]="BlockDuration",RR[RR.ReferenceBlock=251]="ReferenceBlock",RR[RR.Cluster=524531317]="Cluster",RR[RR.Timestamp=231]="Timestamp",RR[RR.Cues=475249515]="Cues",RR[RR.CuePoint=187]="CuePoint",RR[RR.CueTime=179]="CueTime",RR[RR.CueTrackPositions=183]="CueTrackPositions",RR[RR.CueTrack=247]="CueTrack",RR[RR.CueClusterPosition=241]="CueClusterPosition",RR[RR.Colour=21936]="Colour",RR[RR.MatrixCoefficients=21937]="MatrixCoefficients",RR[RR.TransferCharacteristics=21946]="TransferCharacteristics",RR[RR.Primaries=21947]="Primaries",RR[RR.Range=21945]="Range",RR[RR.Projection=30320]="Projection",RR[RR.ProjectionType=30321]="ProjectionType",RR[RR.ProjectionPoseYaw=30323]="ProjectionPoseYaw",RR[RR.ProjectionPosePitch=30324]="ProjectionPosePitch",RR[RR.ProjectionPoseRoll=30325]="ProjectionPoseRoll",RR[RR.Attachments=423732329]="Attachments",RR[RR.AttachedFile=24999]="AttachedFile",RR[RR.FileDescription=18046]="FileDescription",RR[RR.FileName=18030]="FileName",RR[RR.FileMediaType=18016]="FileMediaType",RR[RR.FileData=18012]="FileData",RR[RR.FileUID=18094]="FileUID",RR[RR.Chapters=272869232]="Chapters",RR[RR.Tags=307544935]="Tags",RR[RR.Tag=29555]="Tag",RR[RR.Targets=25536]="Targets",RR[RR.TargetTypeValue=26826]="TargetTypeValue",RR[RR.TargetType=25546]="TargetType",RR[RR.TagTrackUID=25541]="TagTrackUID",RR[RR.TagEditionUID=25545]="TagEditionUID",RR[RR.TagChapterUID=25540]="TagChapterUID",RR[RR.TagAttachmentUID=25542]="TagAttachmentUID",RR[RR.SimpleTag=26568]="SimpleTag",RR[RR.TagName=17827]="TagName",RR[RR.TagLanguage=17530]="TagLanguage",RR[RR.TagString=17543]="TagString",RR[RR.TagBinary=17541]="TagBinary",RR[RR.ContentEncodings=28032]="ContentEncodings",RR[RR.ContentEncoding=25152]="ContentEncoding",RR[RR.ContentEncodingOrder=20529]="ContentEncodingOrder",RR[RR.ContentEncodingScope=20530]="ContentEncodingScope",RR[RR.ContentCompression=20532]="ContentCompression",RR[RR.ContentCompAlgo=16980]="ContentCompAlgo",RR[RR.ContentCompSettings=16981]="ContentCompSettings",RR[RR.ContentEncryption=20533]="ContentEncryption"}(jt||(jt={}));jt.EBML,jt.Segment,jt.SeekHead,jt.Info,jt.Cluster,jt.Tracks,jt.Cues,jt.Attachments,jt.Chapters,jt.Tags;const dt=new Uint32Array(256);for(let Ou=0;Ou<256;Ou++){let RR=Ou<<24;for(let JR=0;JR<8;JR++)RR=2147483648&RR?RR<<1^79764919:RR<<1;dt[Ou]=RR>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const Et=new Uint32Array(256);for(let Ou=0;Ou<256;Ou++){let RR=Ou<<24;for(let JR=0;JR<8;JR++)RR=2147483648&RR?RR<<1^79764919:RR<<1;Et[Ou]=RR>>>0&4294967295}const Yt=RR=>{let JR=4294967295;for(let GR=0;GR<RR.length;GR++){const yR=RR[GR];JR=(JR<<8^Et[JR>>>24^yR])>>>0}return JR},kt=new Uint8Array(16);{const RR=zR(kt);kt[0]=0,RR.setUint16(1,45069,!1),RR.setUint16(3,1,!1),kt[5]=193,kt[6]=0,kt[7]=0,RR.setUint16(8,1,!1),RR.setUint16(10,61440,!1),RR.setUint32(12,Yt(kt.subarray(0,12)),!1)}const Qt=new Uint8Array(0);class Ft{constructor(RR,JR,GR,yR){let tR=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,uR=arguments.length>5?arguments[5]:void 0,ZR=arguments.length>6?arguments[6]:void 0;if(this.data=RR,this.type=JR,this.timestamp=GR,this.duration=yR,this.sequenceNumber=tR,RR===Qt&&void 0===uR)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===uR&&(uR=RR.byteLength),!(RR instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==JR&&"delta"!==JR)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(GR))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(yR)||yR<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(tR))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(uR)||uR<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==ZR&&("object"!==typeof ZR||!ZR))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==ZR?.alpha&&!(ZR.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==ZR?.alphaByteLength&&(!Number.isInteger(ZR.alphaByteLength)||ZR.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=uR,this.sideData=ZR??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Qt}get microsecondTimestamp(){return Math.trunc(yJ*this.timestamp)}get microsecondDuration(){return Math.trunc(yJ*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let RR=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:RR,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(RR,JR){if(!(RR instanceof EncodedVideoChunk||RR instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const GR=new Uint8Array(RR.byteLength);return RR.copyTo(GR),new Ft(GR,RR.type,RR.timestamp/1e6,(RR.duration??0)/1e6,void 0,void 0,JR)}clone(RR){if(void 0!==RR&&("object"!==typeof RR||null===RR))throw new TypeError("options, when provided, must be an object.");if(void 0!==RR?.data&&!(RR.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==RR?.type&&"key"!==RR.type&&"delta"!==RR.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==RR?.timestamp&&!Number.isFinite(RR.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==RR?.duration&&!Number.isFinite(RR.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==RR?.sequenceNumber&&!Number.isFinite(RR.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==RR?.sideData&&("object"!==typeof RR.sideData||null===RR.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new Ft(RR?.data??this.data,RR?.type??this.type,RR?.timestamp??this.timestamp,RR?.duration??this.duration,RR?.sequenceNumber??this.sequenceNumber,this.byteLength,RR?.sideData??this.sideData)}}var Tt;!function(RR){RR[RR.PCM=1]="PCM",RR[RR.IEEE_FLOAT=3]="IEEE_FLOAT",RR[RR.ALAW=6]="ALAW",RR[RR.MULAW=7]="MULAW",RR[RR.EXTENSIBLE=65534]="EXTENSIBLE"}(Tt||(Tt={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let st=-1/0,ht=-1/0,Ru=null;"undefined"!==typeof FinalizationRegistry&&(Ru=new FinalizationRegistry((RR=>{const JR=performance.now();"video"===RR.type?(JR-st>=1e3&&(XJ._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),st=JR),"undefined"!==typeof VideoFrame&&RR.data instanceof VideoFrame&&RR.data.close()):(JR-ht>=1e3&&(XJ._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),ht=JR),"undefined"!==typeof AudioData&&RR.data instanceof AudioData&&RR.data.close())})));const Ju=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(Ju);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class Gu{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(RR){}close(){if(this._closingPromise)return;const RR=this._connectedTrack;if(!RR)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===RR.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==RR.output.state&&"finalized"!==RR.output.state&&RR.output._muxer.onTrackClose(RR)})()}async _flushOrWaitForOngoingClose(RR){return this._closingPromise??=(async()=>{await this._flushAndClose(RR),this._closed=!0})()}}class yu extends Gu{constructor(RR){if(super(),!fG.includes(RR))throw new TypeError(`Invalid video codec \'${RR}\'. Must be one of: ${fG.join(", ")}.`);this._codec=RR}}const tu=(RR,JR)=>{if(RR.metadata.hasOnlyKeyPackets&&"key"!==JR.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class uu extends yu{constructor(RR){super(RR)}add(RR,JR){if(!(RR instanceof Ft))throw new TypeError("packet must be an EncodedPacket.");if(RR.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==JR&&(!JR||"object"!==typeof JR))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),tu(this._connectedTrack,RR),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,RR,JR)}}class Zu extends Gu{constructor(RR){if(super(),!wG.includes(RR))throw new TypeError(`Invalid audio codec \'${RR}\'. Must be one of: ${wG.join(", ")}.`);this._codec=RR}}class qu extends Gu{constructor(RR){if(super(),!rG.includes(RR))throw new TypeError(`Invalid subtitle codec \'${RR}\'. Must be one of: ${rG.join(", ")}.`);this._codec=RR}}class iu{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((RR=>fG.includes(RR)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((RR=>wG.includes(RR)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((RR=>rG.includes(RR)))}_codecUnsupportedHint(RR){return""}_isFragmentedIsobmff(){return!1}}class fu extends iu{constructor(){let RR=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!RR||"object"!==typeof RR)throw new TypeError("options must be an object.");if(void 0!==RR.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(RR.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==RR.minimumFragmentDuration&&(!qJ(RR.minimumFragmentDuration)||RR.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==RR.onFtyp&&"function"!==typeof RR.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==RR.onMoov&&"function"!==typeof RR.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==RR.onMdat&&"function"!==typeof RR.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==RR.onMoof&&"function"!==typeof RR.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==RR.metadataFormat&&!["mdir","mdta","udta","auto"].includes(RR.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=RR}getSupportedTrackCounts(){const RR=2**32-1;return{video:{min:0,max:RR},audio:{min:0,max:RR},subtitle:{min:0,max:RR},total:{min:0,max:RR}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(RR){return new St(RR,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class Vu extends fu{constructor(RR){super(RR)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...fG,...KG,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...rG]}_codecUnsupportedHint(RR){return(new wu).getSupportedCodecs().includes(RR)?" Switching to MOV will grant support for this codec.":""}}class Ku extends fu{constructor(RR){super(RR)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...fG,...KG,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...rG]}}class wu extends fu{constructor(RR){super(RR)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...fG,...wG]}_codecUnsupportedHint(RR){return(new Vu).getSupportedCodecs().includes(RR)?" Switching to MP4 will grant support for this codec.":""}}const ru=["video","audio","subtitle"];class eu{constructor(RR,JR,GR,yR,tR){this.id=RR,this.output=JR,this.type=GR,this.source=yR,this.metadata=tR}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(RR){if(!(RR instanceof eu))throw new TypeError("other must be an OutputTrack.");if(this===RR)return!1;const JR=fJ(this.metadata.group),GR=fJ(RR.metadata.group);for(const yR of JR){if(this.type!==RR.type&&GR.some((RR=>yR===RR)))return!0;if(GR.some((RR=>yR._pairedGroups.has(RR))))return!0}return!1}}class au extends eu{constructor(RR,JR,GR,yR){super(RR,JR,"video",GR,yR)}}class Lu extends eu{constructor(RR,JR,GR,yR){super(RR,JR,"audio",GR,yR)}}class nu extends eu{constructor(RR,JR,GR,yR){super(RR,JR,"subtitle",GR,yR)}}class Uu{constructor(){this._pairedGroups=new Set}pairWith(RR){if(!(RR instanceof Uu))throw new TypeError("other must be an OutputTrackGroup.");if(this===RR)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(RR),RR._pairedGroups.add(this)}}const Wu=RR=>{if(!RR||"object"!==typeof RR)throw new TypeError("metadata must be an object.");if(void 0!==RR.languageCode&&(JR=RR.languageCode,!GJ.test(JR)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var JR;if(void 0!==RR.name&&"string"!==typeof RR.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==RR.disposition&&(RR=>{if(!RR||"object"!==typeof RR)throw new TypeError("disposition must be an object.");if(void 0!==RR.default&&"boolean"!==typeof RR.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==RR.primary&&"boolean"!==typeof RR.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==RR.forced&&"boolean"!==typeof RR.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==RR.original&&"boolean"!==typeof RR.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==RR.commentary&&"boolean"!==typeof RR.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==RR.hearingImpaired&&"boolean"!==typeof RR.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==RR.visuallyImpaired&&"boolean"!==typeof RR.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(RR.disposition),void 0!==RR.maximumPacketCount&&(!Number.isInteger(RR.maximumPacketCount)||RR.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==RR.bitrate&&(!Number.isFinite(RR.bitrate)||RR.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==RR.averageBitrate&&(!Number.isFinite(RR.averageBitrate)||RR.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==RR.group&&!(RR.group instanceof Uu)&&(!Array.isArray(RR.group)||RR.group.some((RR=>!(RR instanceof Uu)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Au extends VJ{get target(){const RR="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(RR);const JR=this._getRootTarget();if(uJ(JR))throw new TypeError(RR);return JR}constructor(RR){if(super(),this.state="pending",this.defaultTrackGroup=new Uu,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new FR,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!RR||"object"!==typeof RR)throw new TypeError("options must be an object.");if(!(RR.format instanceof iu))throw new TypeError("options.format must be an OutputFormat.");if(!(RR.target instanceof vt||RR.target instanceof ot))throw new TypeError("options.target must be a Target or a PathedTarget.");if(RR.target instanceof vt&&this._rememberTarget(RR.target),void 0!==RR.initTarget&&!(RR.initTarget instanceof vt)&&"function"!==typeof RR.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==RR.onFinalize&&"function"!==typeof RR.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=RR.format,this.bK=RR.target,this._onFinalize=RR.onFinalize??null,this._initTarget=RR.initTarget??null,this._initTarget instanceof vt&&this._rememberTarget(this._initTarget),this._muxer=RR.format._createMuxer(this)}_getTargetValidated(RR){vR(this.bK instanceof ot);const JR=this.bK.getTarget(RR),GR=RR=>{if(!(RR instanceof vt))throw new TypeError("getTarget must return a Target.");return RR};return uJ(JR)?JR.then(GR):GR(JR)}async _getTarget(RR){vR(this.bK instanceof ot);const JR=await this._getTargetValidated(RR);return this._emit("target",{target:JR,request:RR,isRoot:RR.isRoot}),"canceled"===this.state?await JR._close():this._rememberTarget(JR),JR}_rememberTarget(RR){this._unfinalizedTargets.add(RR),RR.on("finalized",(()=>this._unfinalizedTargets.delete(RR)),{once:!0})}async _getInitTarget(){if(vR(null!==this._initTarget),this._initTarget instanceof vt)return this._initTarget;const RR=await this._initTarget();return"canceled"===this.state?await RR._close():this._rememberTarget(RR),RR}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.bK instanceof vt)return this._emit("target",{target:this.bK,request:null,isRoot:!0}),this._rootTarget=this.bK,this.bK;const RR={path:this.bK.rootPath,isRoot:!0,mimeType:this.format.mimeType},JR=this._getTargetValidated(RR),GR=JR=>("canceled"===this.state?JR._close():this._rememberTarget(JR),this._emit("target",{target:JR,request:RR,isRoot:!0}),this._rootTarget=JR,JR);return uJ(JR)?this._rootTargetPromise=JR.then(GR):GR(JR)}_getRootWriter(RR){return this._rootWriterPromise??=(async()=>{const JR=await this._getRootTarget(),GR=new bt(JR,"boolean"===typeof RR?RR:RR(JR));return GR.start(),GR})()}addVideoTrack(RR){let JR=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(RR instanceof yu))throw new TypeError("source must be a VideoSource.");if(Wu(JR),void 0!==JR.rotation&&![0,90,180,270].includes(JR.rotation))throw new TypeError(`Invalid video rotation: ${JR.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==JR.flip&&"boolean"!==typeof JR.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==JR.transformationMatrix&&(!Array.isArray(JR.transformationMatrix)||9!==JR.transformationMatrix.length||!JR.transformationMatrix.every((RR=>Number.isFinite(RR)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==JR.frameRate&&(!Number.isFinite(JR.frameRate)||JR.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${JR.frameRate}. Must be a positive number.`);if(void 0!==JR.hasOnlyKeyPackets&&"boolean"!==typeof JR.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==JR.canBeTransparent&&"boolean"!==typeof JR.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==JR.decoderConfig&&pG({decoderConfig:JR.decoderConfig},RR._codec),void 0!==JR.primingPacket){if(!(JR.primingPacket instanceof Ft))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===JR.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const GR={...JR};return GR.group??=this.defaultTrackGroup,this._addTrack(new au(this.tracks.length+1,this,RR,GR))}addAudioTrack(RR){let JR=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(RR instanceof Zu))throw new TypeError("source must be an AudioSource.");if(Wu(JR),void 0!==JR.decoderConfig&&bG({decoderConfig:JR.decoderConfig},RR._codec),void 0!==JR.primingPacket){if(!(JR.primingPacket instanceof Ft))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===JR.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const GR={...JR};return GR.group??=this.defaultTrackGroup,this._addTrack(new Lu(this.tracks.length+1,this,RR,GR))}addSubtitleTrack(RR){let JR=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(RR instanceof qu))throw new TypeError("source must be a SubtitleSource.");Wu(JR);const GR={...JR};return GR.group??=this.defaultTrackGroup,this._addTrack(new nu(this.tracks.length+1,this,RR,GR))}setMetadataTags(RR){if((RR=>{if(!RR||"object"!==typeof RR)throw new TypeError("tags must be an object.");if(void 0!==RR.title&&"string"!==typeof RR.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==RR.description&&"string"!==typeof RR.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==RR.artist&&"string"!==typeof RR.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==RR.album&&"string"!==typeof RR.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==RR.albumArtist&&"string"!==typeof RR.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==RR.trackNumber&&(!Number.isInteger(RR.trackNumber)||RR.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==RR.tracksTotal&&(!Number.isInteger(RR.tracksTotal)||RR.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==RR.discNumber&&(!Number.isInteger(RR.discNumber)||RR.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==RR.discsTotal&&(!Number.isInteger(RR.discsTotal)||RR.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==RR.genre&&"string"!==typeof RR.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==RR.date&&(!(RR.date instanceof Date)||Number.isNaN(RR.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==RR.beatsPerMinute&&(!Number.isInteger(RR.beatsPerMinute)||RR.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==RR.lyrics&&"string"!==typeof RR.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==RR.images){if(!Array.isArray(RR.images))throw new TypeError("tags.images, when provided, must be an array.");for(const JR of RR.images){if(!JR||"object"!==typeof JR)throw new TypeError("Each image in tags.images must be an object.");if(!(JR.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof JR.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(JR.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==RR.comment&&"string"!==typeof RR.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==RR.raw){if(!RR.raw||"object"!==typeof RR.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const JR of Object.values(RR.raw))if(null!==JR&&"string"!==typeof JR&&(!Array.isArray(JR)||!JR.every((RR=>"string"===typeof RR)))&&!(JR instanceof Uint8Array)&&!(JR instanceof wJ)&&!(JR instanceof rJ)&&!KJ(JR))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(RR),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=RR}_addTrack(RR){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(RR.source._connectedTrack)throw new Error("Source is already used for a track.");const JR=this.format.getSupportedTrackCounts(),GR=this.tracks.reduce(((JR,GR)=>JR+(GR.type===RR.type?1:0)),0),yR=JR[RR.type].max;if(GR===yR)throw new Error(0===yR?`${this.format._name} does not support ${RR.type} tracks.`:`${this.format._name} does not support more than ${yR} ${RR.type} track`+(1===yR?"":"s")+".");const tR=JR.total.max;if(this.tracks.length===tR)throw new Error(`${this.format._name} does not support more than ${tR} tracks`+(1===tR?"":"s")+" in total.");if(RR.isVideoTrack()){const JR=this.format.getSupportedVideoCodecs();if(0===JR.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(RR.source._codec));if(!JR.includes(RR.source._codec))throw new Error(`Codec \'${RR.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${JR.map((RR=>`\'${RR}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(RR.source._codec))}else if(RR.isAudioTrack()){const JR=this.format.getSupportedAudioCodecs();if(0===JR.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(RR.source._codec));if(!JR.includes(RR.source._codec))throw new Error(`Codec \'${RR.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${JR.map((RR=>`\'${RR}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(RR.source._codec))}else if(RR.isSubtitleTrack()){const JR=this.format.getSupportedSubtitleCodecs();if(0===JR.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(RR.source._codec));if(!JR.includes(RR.source._codec))throw new Error(`Codec \'${RR.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${JR.map((RR=>`\'${RR}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(RR.source._codec))}return this.tracks.push(RR),RR.source._connectedTrack=RR,RR}hasEnoughTracks(){const RR=this.format.getSupportedTrackCounts();for(const GR of ru){if(this.tracks.reduce(((RR,JR)=>RR+(JR.type===GR?1:0)),0)<RR[GR].min)return!1}const JR=RR.total.min;return!(this.tracks.length<JR)}async start(){const RR=this.format.getSupportedTrackCounts();for(const GR of ru){const JR=this.tracks.reduce(((RR,JR)=>RR+(JR.type===GR?1:0)),0),yR=RR[GR].min;if(JR<yR)throw new Error(yR===RR[GR].max?`${this.format._name} requires exactly ${yR} ${GR} track${1===yR?"":"s"}.`:`${this.format._name} requires at least ${yR} ${GR} track${1===yR?"":"s"}.`)}const JR=RR.total.min;if(this.tracks.length<JR)throw new Error(JR===RR.total.max?`${this.format._name} requires exactly ${JR} track`+(1===JR?"":"s")+".":`${this.format._name} requires at least ${JR} track`+(1===JR?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(XJ._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const RR=this._mutex.acquire();try{await this._muxer.start();const RR=this.tracks.map((RR=>RR.source._start()));await Promise.all(RR)}finally{(await RR)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const RR=await this._mutex.acquire();try{const RR=this.tracks.map((RR=>RR.source._flushOrWaitForOngoingClose(!0)));await Promise.all(RR),await Promise.all([...this._unfinalizedTargets].map((RR=>RR._close()))),this._unfinalizedTargets.clear()}finally{RR()}})():void("finalized"===this.state&&XJ._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(XJ._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const RR=await this._mutex.acquire();try{const RR=this.tracks.map((RR=>RR.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(RR),await this._muxer.finalize(),this._rootWriterPromise){const RR=await this._rootWriterPromise;RR.finalized||(await RR.flush(),await RR.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(JR){throw this.state="canceled",JR}finally{await Promise.all([...this._unfinalizedTargets].map((RR=>RR._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),RR()}})()}}class Cu{constructor(RR,JR,GR,yR,tR){this.frameDurationS=GR,this.onFragment=tR,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=JR,this.lastTimestampUs=JR;const uR=RR=>{this.boxes.push(RR)};this.output=new Au({format:new Vu({fastStart:"fragmented",minimumFragmentDuration:yR,onFtyp:uR,onMoov:uR,onMoof:uR,onMdat:RR=>{uR(RR),this.fragmentDone()}}),target:new Dt}),this.source=new uu(RR),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(RR,JR){const GR=new Uint8Array(RR.byteLength);RR.copyTo(GR),this.addData(GR,RR.type,RR.timestamp,JR)}addData(RR,JR,GR,yR){const tR=new Ft(RR,JR,(GR-this.firstTimestampUs)/1e6,this.frameDurationS),uR=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,GR),this.pending=this.pending.then((()=>(this.addingTimestampUs=GR,this.source.add(tR,uR?{decoderConfig:yR}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var RR;const JR=Xu(this.boxes);this.boxes=[],this.onFragment({bytes:JR,endUs:null!==(RR=this.addingTimestampUs)&&void 0!==RR?RR:this.lastTimestampUs+1e6*this.frameDurationS})}}function Xu(RR){const JR=new Uint8Array(RR.reduce(((RR,JR)=>RR+JR.byteLength),0));let GR=0;for(const yR of RR)JR.set(yR,GR),GR+=yR.byteLength;return JR}class Mu{constructor(RR,JR,GR,yR){this.plan=RR,this.emit=GR,this.onSlotsLow=yR,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=JR}get partCount(){return this.nextIndex}addFragment(RR){let{bytes:JR,endUs:GR}=RR;this.pendingBytes>0&&this.pendingBytes+JR.byteLength>this.plan.maxBytes&&this.emitPending();let yR=0;for(;JR.byteLength-yR>this.plan.maxBytes-this.pendingBytes;){const RR=this.plan.maxBytes-this.pendingBytes;this.hold(JR.subarray(yR,yR+RR)),yR+=RR,this.emitPending()}this.hold(JR.subarray(yR)),this.completeUntilUs=GR,GR-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(RR){this.pending.push(RR),this.pendingBytes+=RR.byteLength}emitPending(){var RR;const JR=Xu(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(RR=this.completeUntilUs)&&void 0!==RR?RR:this.partStartUs,this.emit({index:this.nextIndex++,bytes:JR,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class Bu{constructor(RR,JR,GR,yR){let tR=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,uR=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=RR,this.partPlan=JR,this.post=GR,this.onSegmentEncoded=yR,this.journal=tR,this.onMuxFailed=uR,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(RR){const JR=bR()-RR;(JR<this.epochOffsetMs||JR-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=JR)}recordingMs(RR){return RR/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(RR){const JR=null===this.segment?0:(RR-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||JR>=this.segmentDurationMs))&&(this.pendingCutUs=RR);const GR=this.keyFrameMissed||this.pendingCutUs===RR;return this.cutRequested=!1,this.keyFrameMissed=!1,GR}onChunk(RR,JR,GR){if(null!==JR&&void 0!==JR&&JR.decoderConfig&&(this.decoderConfig=JR.decoderConfig),null!==this.pendingCutUs&&RR.timestamp>=this.pendingCutUs){if("key"!==RR.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(RR.timestamp,GR),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const yR=this.segment;if(null===yR.journalHeader)return yR.mp4.add(RR,this.decoderConfig),RR.byteLength;const tR=new Uint8Array(RR.byteLength);return RR.copyTo(tR),yR.mp4.addData(tR,RR.type,RR.timestamp,this.decoderConfig),yR.chunkTimestampsUs.push(RR.timestamp),yR.unjournaled.push({recordingId:yR.journalHeader.recordingId,segmentId:yR.journalId,index:yR.chunkCount++,timestampUs:RR.timestamp,key:"key"===RR.type,data:tR}),performance.now()-yR.lastJournalMs>=250&&this.journalChunks(yR),RR.byteLength}openSegment(RR,JR){const GR=this.nextJournalId++,yR=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:GR,containerCodec:JR.containerCodec,codec:JR.codec,width:JR.width,height:JR.height,fps:JR.fps,decoderConfig:this.decoderConfig,firstTimestampUs:RR,epochOffsetMs:this.epochOffsetMs}:null,tR=[],uR=new Mu(this.partPlan,RR,(uR=>{this.postPart(GR,JR,RR,uR,null===yR?null:tR)}),(()=>{var RR;(null===(RR=this.segment)||void 0===RR?void 0:RR.journalId)===GR&&this.requestCut()})),ZR=this.partPlan.keyframeIntervalMs/1e3*.9,qR=new Cu(JR.containerCodec,RR,1/JR.fps,ZR,(RR=>{uR.addFragment(RR)}));return this.post({type:"videoSegmentOpened",journalId:GR}),{mp4:qR,parts:uR,format:JR,journalId:GR,journalHeader:yR,unjournaled:[],chunkTimestampsUs:tR,chunkCount:0,lastJournalMs:performance.now()}}postPart(RR,JR,GR,yR,tR){const{width:uR,height:ZR,codec:qR,fps:iR}=JR,{startMs:fR}=function(RR,JR,GR,yR){const tR=RR/1e3+GR;return{startMs:tR,endMs:tR+JR/1e3+1e3/yR}}(GR,0,this.epochOffsetMs,iR),{completeUntilUs:VR}=yR,KR=null===VR?fR:this.recordingMs(VR),wR=yR.bytes.buffer,rR=null===tR||null===VR?null:function(RR,JR){let GR=0,yR=RR.length;for(;GR<yR;){const tR=GR+yR>>1;RR[tR]<JR?GR=tR+1:yR=tR}return GR}(tR,VR);this.post({type:"videoPart",journalId:RR,index:yR.index,bytes:wR,meta:{startMs:fR,endMs:KR,width:uR,height:ZR,codec:qR},completeUntilUs:VR,completeUntilIndex:rR},[wR])}journalChunks(RR){const JR=RR.journalHeader;null!==this.journal&&null!==JR&&0!==RR.unjournaled.length&&(JR.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...JR},RR.unjournaled),RR.unjournaled=[],RR.lastJournalMs=performance.now())}closeSegment(RR){const JR=this.segment;this.segment=null,this.pendingCutUs=null,null!==JR&&(RR&&this.onSegmentEncoded(),this.journalChunks(JR),this.finishing=this.finishing.then((async()=>{let RR=null;try{await JR.mp4.finish()}catch(GR){RR=GR}JR.parts.finish(),this.post({type:"videoSegmentClosed",journalId:JR.journalId,parts:JR.parts.partCount}),null!==RR&&(console.error("Failed to finish a session replay video segment.",RR),this.onMuxFailed(RR instanceof Error?RR.message:String(RR)))})).catch((RR=>{console.error("Failed to close a session replay video segment.",RR)})))}whenFinished(){return this.finishing}}function lu(RR,JR){return null!==RR&&JR>=RR}class pu{constructor(RR,JR,GR,yR,tR){let uR=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=RR,this.cssSize=GR,this.post=yR,this.encoderPreference=tR,this.quality=new KR,this.limiter=void 0,this.segmenter=void 0,this.scaler=new CR,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.capturePaused=!1,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new LR(RR.maxFps),this.captureFps=RR.maxFps,this.segmenter=new Bu(RR.segmentDurationMs,JR,yR,(()=>{this.encoderFailures=0}),uR,(RR=>{this.stopVideo(`Muxer failed: ${RR}`)})),this.still=new lR(yR),this.stats=this.emptyStats()}handleFrame(RR,JR,GR){const yR=performance.now();try{this.stats.deliveredFrames++;const tR=RR.timestamp/1e3;if(this.segmenter.noteFrameArrival(tR),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(tR))return void this.stats.droppedForFpsCap++;if(this.still.offer(RR,this.segmenter.recordingMs(RR.timestamp)),null===GR)return void(this.capturePaused||(this.capturePaused=!0,this.flushSegment()));if(this.capturePaused=!1,this.noteBackingSize(JR),this.noteCaptureFps(GR,yR),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(lu(this.rebuildDueMs,yR)||lu(this.fpsRebuildDueMs,yR))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,RR)}finally{RR.close();const JR=performance.now()-yR;this.stats.workerBusyMs+=JR,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,JR),this.maybePostStats(yR)}}resize(RR){0!==RR.width&&0!==RR.height&&(this.cssSize=RR,this.scheduleRebuildIfSizeChanged())}updateHealth(RR,JR){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const GR=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:RR,pingMs:JR});this.backpressureDropsSinceHealth=0,GR&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(RR){return this.hidden=RR,RR?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(RR){this.suspended=!0;const JR=this.operations.then(RR).catch((RR=>{console.error("Session replay encoder operation failed.",RR)})).finally((()=>{this.operations===JR&&(this.suspended=!1)}));return this.operations=JR,JR}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var RR;null===(RR=this.active)||void 0===RR||RR.encoder.close(),this.active=null}async drainAndCloseSegment(){const RR=this.active;null===RR||await async function(RR,JR){let GR;const yR=new Promise((RR=>{GR=setTimeout((()=>{RR(!1)}),JR)}));try{return await Promise.race([RR.then((()=>!0)),yR])}finally{clearTimeout(GR)}}(RR.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(RR,"flush timed out")}encode(RR,JR){const GR=this.segmenter.needsKeyFrame(JR.timestamp)||JR.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;GR&&(this.lastKeyframeUs=JR.timestamp);const yR=this.scaleToEncoder(RR,JR);try{RR.encoder.encode(yR,{keyFrame:GR})}catch(tR){return void(tR instanceof DOMException&&("InvalidStateError"===tR.name||"EncodingError"===tR.name)?this.failEncoder(RR,tR.message):++this.refusedFrames>=30?this.failEncoder(RR,`refused 30 frames in a row: ${String(tR)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",tR))}finally{yR!==JR&&yR.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(RR,JR){let GR=JR;if(!this.scalerFailed)try{GR=this.scaler.scale(JR,RR.size)}catch(yR){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",yR)}return GR.displayWidth===RR.size.width&&GR.displayHeight===RR.size.height||(RR.sentMismatchedFrame=!0),GR}onEncoderOutput(RR,JR,GR){const yR=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(RR,JR,{containerCodec:GR.candidate.containerCodec,codec:GR.candidate.config.codec,width:GR.size.width,height:GR.size.height,fps:GR.fps}),this.stats.workerBusyMs+=performance.now()-yR}noteBackingSize(RR){null!==this.backingSize&&wR(this.backingSize,RR)||(this.backingSize=RR,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(RR,JR){this.captureFps=RR,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=JR+2e3:this.fpsRebuildDueMs=null}targetSize(){var RR;const JR=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(RR,JR,GR){const yR=JR.width*JR.height<RR.width*RR.height?JR:RR;let tR=rR(Math.max(yR.width,64)),uR=rR(Math.max(yR.height,64));if(eR({width:tR,height:uR})>GR){const RR=tR,JR=uR;for(tR=rR(tR*Math.sqrt(16*GR*16/(tR*uR))),uR=rR(tR*JR/RR);eR({width:tR,height:uR})>GR;)tR-=2,uR=rR(tR*JR/RR)}return{width:tR,height:uR}}(this.cssSize,null!==(RR=this.backingSize)&&void 0!==RR?RR:this.cssSize,JR)}scheduleRebuildIfSizeChanged(){null===this.active||wR(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const RR=this.quality.getLevel(),JR=this.encodeFps(),GR=this.targetSize(),yR=function(RR){const JR={width:RR.width,height:RR.height,bitrate:RR.bitrate,framerate:RR.maxFps},GR=[],yR=[RR.preferSoftware?"prefer-software":"prefer-hardware","no-preference"],tR=RR.preferQualityLatency?AR:WR;for(const uR of yR)for(const RR of nR)for(const yR of UR)for(const ZR of tR)GR.push({config:{...JR,codec:RR,hardwareAcceleration:uR,bitrateMode:yR,latencyMode:ZR,avc:{format:"avc"}},containerCodec:"avc"});return GR.push({config:{...JR,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),GR}({...GR,bitrate:Math.round(aR(this.config,GR,RR.areaScale)*JR/this.config.maxFps),maxFps:JR,...this.encoderPreference});let tR=null,uR=0;for(let fR=this.firstViableCandidate;fR<yR.length&&null===tR;fR++){const RR=await VideoEncoder.isConfigSupported(yR[fR].config).catch((RR=>(console.warn("VideoEncoder.isConfigSupported threw.",yR[fR].config,RR),null)));null!==RR&&void 0!==RR&&RR.supported&&(tR=yR[fR],uR=fR,this.firstViableCandidate=fR)}if(null===tR)return void this.markUnavailable(`No supported encoder config at ${GR.width}x${GR.height}`);const ZR=new VideoEncoder({output:(RR,JR)=>{this.onEncoderOutput(RR,JR,qR)},error:RR=>{this.failEncoder(qR,RR.message)}}),qR={encoder:ZR,candidates:yR,candidateIndex:uR,candidate:tR,size:GR,fps:JR,sentMismatchedFrame:!1};this.active=qR,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{ZR.configure(tR.config)}catch(iR){return void this.failEncoder(qR,iR instanceof Error?iR.message:String(iR))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(RR,JR){console.error("Session replay encoder failed.",RR.candidate.config,JR),this.active===RR&&(this.active=null,"closed"!==RR.encoder.state&&RR.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(RR,JR,GR){var yR;let tR=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const uR=null===(yR=RR[JR])||void 0===yR?void 0:yR.config.hardwareAcceleration;if(!("prefer-hardware"===uR&&GR||"no-preference"!==uR&&tR))return JR+1;for(let ZR=JR+1;ZR<RR.length;ZR++)if(RR[ZR].config.hardwareAcceleration!==uR)return ZR;return RR.length}(RR.candidates,RR.candidateIndex,RR.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${JR}`))}stopVideo(RR){if(this.unavailable)return;const JR=this.active;this.active=null,null!==JR&&"closed"!==JR.encoder.state&&JR.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(RR)}markUnavailable(RR){console.warn(`Session replay video stopped: ${RR}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:RR})}))}maybePostStats(RR){var JR,GR,yR,tR;const uR=RR-this.statsWindowStartMs;if(uR<5e3)return;const ZR=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:uR,qualityLevel:this.quality.getLevelIndex(),codec:null!==(JR=null===ZR||void 0===ZR?void 0:ZR.candidate.config.codec)&&void 0!==JR?JR:null,hardwareAcceleration:null!==(GR=null===ZR||void 0===ZR?void 0:ZR.candidate.config.hardwareAcceleration)&&void 0!==GR?GR:null,encodeWidth:null!==(yR=null===ZR||void 0===ZR?void 0:ZR.size.width)&&void 0!==yR?yR:0,encodeHeight:null!==(tR=null===ZR||void 0===ZR?void 0:ZR.size.height)&&void 0!==tR?tR:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=RR}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let gu=null,bu=0;function vu(RR){let JR=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(RR,{transfer:JR})}self.onmessage=RR=>{const JR=RR.data;switch(JR.type){case"init":gu=new pu(JR.videoConfig,JR.partPlan,JR.cssSize,vu,JR.encoderPreference,JR.journalRecordingId&&fR.supported?{recordingId:JR.journalRecordingId,journal:new fR}:null);break;case"frame":if(null===gu){console.warn("Session replay video worker got a frame before its pipeline started"),JR.image.close();break}!function(RR,JR,GR,yR,tR){if(JR instanceof VideoFrame)return void RR.handleFrame(JR,yR,tR);let uR;try{uR=new VideoFrame(JR,{timestamp:GR})}catch(ZR){return 0===bu++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",ZR),void(30===bu&&RR.stopVideo(`Bitmap frames keep failing: ${ZR instanceof Error?ZR.message:String(ZR)}`))}finally{JR.close()}bu=0,RR.handleFrame(uR,yR,tR)}(gu,JR.image,JR.timestampUs,JR.OR,JR.captureFps);break;case"resize":gu.resize(JR.cssSize);break;case"health":gu.updateHealth(JR.gameFps,JR.pingMs);break;case"hidden":gu.setHidden(JR.hidden);break;case"flush":gu.flushSegment();break;case"cut":gu.cutAtNextFrame();break;case"gameJoined":gu.gameJoined()}}})();', "Worker", void 0, GR.p + "sessionReplayVideo.worker.14b10f1e.worker.js")
    }

    function VJ(RR) {
      return Math.max(2, 2 * Math.floor(RR / 2))
    }

    function KJ(RR) {
      return Math.ceil(RR.width / 16) * Math.ceil(RR.height / 16)
    }
    class wJ {
      constructor(RR) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / RR
      }
      setMaxFps(RR) {
        this.intervalMs = 1e3 / RR
      }
      shouldKeep(RR) {
        return !(RR < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = RR - this.nextDueMs > this.intervalMs ? RR + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class rJ {
      constructor(RR, JR, GR) {
        this.budgetMsPerSecond = RR, this.minFps = JR, this.smoothedCostMs = GR
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      get paused() {
        return this.affordableFps() < this.minFps
      }
      record(RR) {
        const JR = this.paused ? .5 : .05;
        this.smoothedCostMs += (RR - this.smoothedCostMs) * JR
      }
      maxFps(RR) {
        return this.paused ? .1 : Math.min(RR, this.affordableFps())
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class eJ {
      static isSupported() {
        const RR = globalThis.CanvasCaptureMediaStream;
        return ("undefined" !== typeof CanvasCaptureMediaStreamTrack && "requestFrame" in CanvasCaptureMediaStreamTrack.prototype || void 0 !== RR && "requestFrame" in RR.prototype) && "function" === typeof HTMLCanvasElement.prototype.captureStream && "requestVideoFrameCallback" in HTMLVideoElement.prototype
      }
      constructor(RR, JR, GR) {
        this.onFrame = JR, this.stream = void 0, this.requester = void 0, this.video = document.createElement("video"), this.closed = !1, this.onVideoFrame = () => {
          this.closed || (this.onFrame(this.video), this.video.requestVideoFrameCallback(this.onVideoFrame))
        }, this.stream = RR.captureStream(0);
        const yR = this.stream.getVideoTracks()[0];
        this.requester = "requestFrame" in yR ? yR : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(GR), this.video.requestVideoFrameCallback(this.onVideoFrame)
      }
      request() {
        this.requester.requestFrame()
      }
      close() {
        this.closed = !0;
        for (const RR of this.stream.getTracks()) RR.stop();
        this.video.srcObject = null
      }
    }
    class aJ {
      constructor(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = RR, this.grab = yR, this.onUnavailable = tR, this.render = null, this.stream = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.loggedPause = !1, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = GR.msPerSecond, this.frameCostFloorMs = GR.frameCostFloorMs, this.budget = new rJ(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = JR, this.captureFps = this.budgetedFps(), this.frameLimiter = new wJ(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps,
          grabPath: this.grab.path
        }
      }
      start(RR) {
        if (this.stop(), this.render = RR, "stream" === this.grab.path) {
          const JR = new eJ(RR.canvas, (RR => {
            this.onStreamFrame(RR)
          }), (RR => {
            this.stream === JR && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${RR instanceof Error?RR.message:String(RR)}`))
          }));
          this.stream = JR
        }
      }
      stop() {
        var RR;
        this.render = null, this.pendingGrab = null, null === (RR = this.stream) || void 0 === RR || RR.close(), this.stream = null
      }
      setMaxFps(RR) {
        this.wantedFps = RR, this.applyFps()
      }
      onAfterRender() {
        const RR = performance.timeOrigin + performance.now(),
          JR = this.render;
        if (null === JR) return;
        const GR = performance.now();
        if (null !== this.pendingGrab) {
          if (GR - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas grab didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(RR)) return;
        const yR = {
          startMs: GR,
          timestampUs: Math.round(1e3 * RR),
          OR: {
            width: JR.canvas.width,
            height: JR.canvas.height
          },
          syncMs: 0,
          paused: this.isPaused()
        };
        null !== this.stream ? this.requestStreamFrame(this.stream, yR) : "bitmap" === this.grab.path ? this.grabBitmap(JR.canvas, yR) : this.grabVideoFrame(JR.canvas, yR)
      }
      requestStreamFrame(RR, JR) {
        this.pendingGrab = JR;
        try {
          RR.request()
        } catch (GR) {
          return this.pendingGrab = null, void this.grabFailed(GR)
        }
        JR.syncMs = performance.now() - JR.startMs
      }
      grabVideoFrame(RR, JR) {
        let GR;
        try {
          GR = new VideoFrame(RR, {
            timestamp: JR.timestampUs
          })
        } catch (yR) {
          return void this.grabFailed(yR)
        }
        this.deliver(GR, JR), this.recordCost(Math.max(2 * (performance.now() - JR.startMs), this.frameCostFloorMs))
      }
      grabBitmap(RR, JR) {
        const GR = this.grab.cssSize(),
          yR = function(RR, JR, GR) {
            const yR = JR.width * JR.height < RR.width * RR.height ? JR : RR;
            let tR = VJ(Math.max(yR.width, 64)),
              uR = VJ(Math.max(yR.height, 64));
            if (KJ({
                width: tR,
                height: uR
              }) > GR) {
              const RR = tR,
                JR = uR;
              for (tR = VJ(tR * Math.sqrt(16 * GR * 16 / (tR * uR))), uR = VJ(tR * JR / RR); KJ({
                  width: tR,
                  height: uR
                }) > GR;) tR -= 2, uR = VJ(tR * JR / RR)
            }
            return {
              width: tR,
              height: uR
            }
          }(0 === GR.width ? JR.OR : GR, JR.OR, this.grab.maxMacroblocks);
        this.pendingGrab = JR, createImageBitmap(RR, {
          resizeWidth: yR.width,
          resizeHeight: yR.height,
          resizeQuality: "low"
        }).then((RR => {
          this.pendingGrab === JR ? (this.pendingGrab = null, this.deliverMeasured(RR, JR)) : RR.close()
        }), (RR => {
          this.pendingGrab === JR && (this.pendingGrab = null, this.grabFailed(RR))
        })), JR.syncMs = performance.now() - JR.startMs
      }
      onStreamFrame(RR) {
        const JR = this.pendingGrab;
        if (null === JR) return;
        this.pendingGrab = null;
        const GR = performance.now();
        let yR;
        try {
          yR = new VideoFrame(RR, {
            timestamp: JR.timestampUs
          })
        } catch (tR) {
          return void this.grabFailed(tR)
        }
        JR.syncMs += performance.now() - GR, this.deliverMeasured(yR, JR)
      }
      deliverMeasured(RR, JR) {
        const GR = performance.now();
        this.deliver(RR, JR), this.recordCost(Math.max(JR.syncMs + performance.now() - GR, this.frameCostFloorMs))
      }
      deliver(RR, JR) {
        const GR = {
          type: "frame",
          image: RR,
          timestampUs: JR.timestampUs,
          OR: JR.OR,
          captureFps: JR.paused ? null : this.captureFps
        };
        try {
          this.worker.postMessage(GR, [RR])
        } catch (yR) {
          return RR.close(), void this.grabFailed(yR)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(RR) {
        this.budget.record(RR), this.applyFps()
      }
      grabFailed(RR) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", RR);
        !(RR instanceof DOMException && "InvalidStateError" === RR.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${RR instanceof Error?RR.message:String(RR)}`))
      }
      applyFps() {
        const RR = this.budgetedFps();
        RR !== this.captureFps && (this.captureFps = RR, this.frameLimiter.setMaxFps(RR), this.isPaused() && !this.loggedPause && (this.loggedPause = !0, console.warn(`Session replay paused video: ${this.grab.path} grabs cost ${this.budget.averageCostMs.toFixed(1)} ms, over a budget of ${this.budgetMsPerSecond} ms/s at 5 fps.`)))
      }
      isPaused() {
        return this.budgetMsPerSecond > 0 && this.budget.paused
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var LJ = GR(1397);
    class nJ {
      constructor(RR) {
        this.events = RR, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const RR = (0, LJ.J)().gameRender();
        if (null === RR || RR.canvas === this.canvas) return RR;
        const JR = null !== this.canvas;
        return this.canvas = RR.canvas, this.observe(RR.canvas), JR ? this.events.onCanvasSwapped(RR) : this.events.onFirstCanvas(RR), RR
      }
      stop() {
        var RR, JR;
        null === (RR = this.resizeObserver) || void 0 === RR || RR.disconnect(), null === (JR = this.listeners) || void 0 === JR || JR.abort()
      }
      observe(RR) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: JR
        } = this.listeners;
        RR.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: JR
        }), RR.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: JR
        });
        const GR = RR.getBoundingClientRect();
        this.size = {
          width: Math.round(GR.width),
          height: Math.round(GR.height)
        }, this.resizeObserver = new ResizeObserver((RR => {
          const JR = RR[RR.length - 1].contentRect,
            GR = {
              width: Math.round(JR.width),
              height: Math.round(JR.height)
            };
          0 !== GR.width && 0 !== GR.height && (this.size = GR, this.events.onResized(GR))
        })), this.resizeObserver.observe(RR)
      }
    }
    const UJ = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      WJ = 12e4;
    class AJ extends Error {
      constructor(RR, JR) {
        super(JR), this.reason = RR
      }
    }
    class CJ {
      constructor(RR, JR, GR, yR, tR) {
        this.access = RR, this.uploadToken = JR, this.transport = GR, this.callbacks = yR, this.options = tR, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(RR) {
        return this.segments.has(RR)
      }
      open(RR, JR) {
        this.segments.set(RR, {
          journalId: RR,
          sequence: JR,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(RR, JR) {
        const GR = this.segments.get(RR);
        if (void 0 !== GR) {
          GR.parts.push(JR), GR.bytes += JR.bytes.byteLength, !GR.cut && null === GR.totalParts && GR.bytes > this.options.maxHeldBytes / 2 && (GR.cut = !0, this.callbacks.cut());
          for (const RR of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(RR, "byteCap"), this.downUntilMs = this.options.nowMs() + WJ
          }
          this.pump()
        }
      }
      close(RR, JR) {
        const GR = this.segments.get(RR);
        void 0 !== GR && (GR.totalParts = JR, this.pump())
      }
      forget(RR) {
        this.segments.delete(RR)
      }
      releaseAll() {
        for (const RR of this.segments.values()) RR.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: RR.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let RR = 0;
        for (const JR of this.segments.values()) RR += JR.bytes;
        return RR
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let JR = this.nextWork(); null !== JR; JR = this.nextWork()) try {
            await this.advance(JR)
          } catch (RR) {
            console.warn(`Session replay part joiner failed on video segment ${JR.sequence}; uploading it straight to storage.`, RR), RR instanceof AJ || (this.downUntilMs = this.options.nowMs() + WJ), this.handBack(JR, RR instanceof AJ ? RR.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const RR of this.segments.values())
          if (RR.sentParts < RR.parts.length || RR.totalParts === RR.parts.length) return RR;
        return null
      }
      async advance(RR) {
        if (RR.sentParts < RR.parts.length) return this.expectHeld(await this.sendPart(RR, RR.parts[RR.sentParts])), void RR.sentParts++;
        for (let JR = 0; this.owns(RR.journalId); JR++) {
          const GR = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: RR.sequence,
            parts: RR.parts.length
          })));
          if (!this.owns(RR.journalId)) return;
          if ("stored" === GR.outcome && GR.stored.parts === RR.parts.length) return this.segments.delete(RR.journalId), void this.callbacks.stored(RR.journalId, RR.sequence, GR.stored);
          if ("missing" !== GR.outcome || JR >= 2) throw this.failure(GR);
          for (const JR of GR.parts) {
            if (!this.owns(RR.journalId)) return;
            const GR = RR.parts[JR];
            if (void 0 === GR) throw new AJ("missing", `the joiner asked for part ${JR} of ${RR.parts.length}`);
            this.expectHeld(await this.sendPart(RR, GR))
          }
        }
      }
      sendPart(RR, JR) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: RR.sequence,
          index: JR.index,
          meta: {
            ...JR.meta,
            startMs: Math.round(JR.meta.startMs),
            endMs: Math.round(JR.meta.endMs)
          },
          completeUntilUs: JR.completeUntilUs
        }, JR.bytes)))
      }
      expectHeld(RR) {
        if ("buffered" !== RR.outcome) throw this.failure(RR)
      }
      failure(RR) {
        if ("refused" === RR.outcome) {
          this.refused = !0;
          for (const RR of [...this.segments.values()]) this.handBack(RR, "refused");
          return new AJ("refused", `refused: ${RR.reason}`)
        }
        const JR = "stored" === RR.outcome ? "shortStored" : "missing" === RR.outcome ? "missing" : "closed";
        return new AJ(JR, `answered ${RR.outcome}`)
      }
      async request(RR) {
        for (let GR = 1;; GR++) {
          try {
            return await RR()
          } catch (JR) {
            if (GR >= 3) throw JR
          }
          await this.options.wait(1e3 * 2 ** (GR - 1))
        }
      }
      handBack(RR, JR) {
        this.segments.delete(RR.journalId) && (this.stats.handBacks[JR]++, this.callbacks.handBack(RR.journalId, RR.sequence, RR.parts, RR.totalParts))
      }
    }
    const XJ = zR.e;
    class MJ {
      constructor(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = RR, this.uploadToken = JR, this.nextTelemetrySequence = GR, this.queuedDomAfter = yR, this.nowMs = tR, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(RR, JR, GR, yR, tR) {
        const uR = this.segment(RR, JR, GR, yR);
        if (void 0 === tR) return void this.request(uR, 0);
        const ZR = tR.then((() => {
          this.stopped || this.segments.get(lJ(RR, JR)) !== uR || uR.requested || this.request(uR, 0), this.videoDue === ZR && (this.videoDue = null)
        }));
        this.videoDue = ZR
      }
      async takeDom(RR) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, RR);
        const JR = this.dom;
        if ((null === JR || void 0 === JR ? void 0 : JR.sequence) !== RR) return;
        this.dom = null;
        const GR = await JR.upload;
        return void 0 !== GR && BJ(GR, this.nowMs()) ? GR.upload : void 0
      }
      async get(RR, JR, GR, yR, tR) {
        const uR = this.segment(RR, JR, GR, tR),
          ZR = uR.requests.find((RR => yR >= RR.first && yR < RR.end));
        if (void 0 === this.valid(uR, yR) && void 0 !== ZR) {
          const RR = await ZR.answer.catch((() => null));
          if (null !== RR && "rejected" in RR) return RR
        }
        let qR = this.valid(uR, yR);
        if (void 0 === qR) {
          const RR = await this.request(uR, yR).answer;
          if ("rejected" in RR) return RR;
          qR = RR[0]
        }
        return qR
      }
      takeTelemetry(RR) {
        const JR = this.telemetry;
        if ((null === JR || void 0 === JR ? void 0 : JR.sequence) === RR) return this.telemetry = null, BJ(JR.Qq, this.nowMs()) ? JR.Qq.target : void 0
      }
      peek(RR, JR, GR) {
        const yR = this.segments.get(lJ(RR, JR));
        return void 0 === yR ? void 0 : this.valid(yR, GR)
      }
      expire(RR, JR, GR) {
        const yR = this.segments.get(lJ(RR, JR)),
          tR = null === yR || void 0 === yR ? void 0 : yR.Qq.get(GR);
        if (void 0 !== yR && void 0 !== tR)
          for (const [uR, ZR] of yR.Qq) ZR.expiresAtMs <= tR.expiresAtMs && yR.Qq.delete(uR)
      }
      stop() {
        this.stopped = !0
      }
      forget(RR, JR) {
        this.segments.delete(lJ(RR, JR))
      }
      segment(RR, JR, GR, yR) {
        const tR = lJ(RR, JR);
        let uR = this.segments.get(tR);
        return void 0 === uR && (uR = {
          kind: RR,
          sequence: JR,
          contentType: GR,
          slots: yR,
          Qq: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(tR, uR)), uR
      }
      valid(RR, JR) {
        const GR = RR.Qq.get(JR);
        return void 0 !== GR && BJ(GR, this.nowMs()) ? GR.target : void 0
      }
      telemetryToAskFor() {
        const RR = this.nextTelemetrySequence(),
          JR = this.telemetry;
        return this.telemetryAsked === RR || null !== JR && JR.sequence === RR && BJ(JR.Qq, this.nowMs()) ? null : RR
      }
      domToAskFor() {
        var RR;
        const JR = this.queuedDomAfter(this.domTaken);
        return null === JR || JR.sequence === (null === (RR = this.dom) || void 0 === RR ? void 0 : RR.sequence) ? null : JR
      }
      request(RR, JR) {
        const GR = JR < RR.slots.count ? RR.slots.count : JR + 1,
          yR = this.nowMs();
        RR.requested = !0;
        const tR = "video" === RR.kind ? this.telemetryToAskFor() : null;
        null !== tR && (this.telemetryAsked = tR);
        const uR = "video" === RR.kind ? this.domToAskFor() : null,
          ZR = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: RR.kind,
            sequence: RR.sequence,
            contentType: RR.contentType,
            parts: {
              first: JR,
              count: GR - JR,
              maxBytes: RR.slots.maxBytes
            },
            ...null === tR ? {} : {
              nextTelemetry: {
                sequence: tR,
                maxBytes: XJ
              }
            },
            ...null === uR ? {} : {
              dom: uR
            }
          });
        if (null !== uR) {
          const RR = ZR.then((RR => {
            if ("rejected" in RR || void 0 === RR.domUpload) return;
            const {
              expiresInSecs: JR,
              ...GR
            } = RR.domUpload;
            return {
              upload: GR,
              expiresAtMs: yR + 1e3 * JR
            }
          }), (() => {
            var RR;
            (null === (RR = this.dom) || void 0 === RR ? void 0 : RR.sequence) === uR.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: uR.sequence,
            upload: RR
          }
        }
        const qR = ZR.then((GR => {
            var uR, ZR;
            if ("rejected" in GR) return GR;
            const qR = yR + 1e3 * GR.expiresInSecs;
            GR.targets.forEach(((GR, yR) => {
              RR.Qq.set(JR + yR, {
                target: GR,
                expiresAtMs: qR
              })
            }));
            return null !== tR && tR >= this.nextTelemetrySequence() && (null !== (uR = null === (ZR = this.telemetry) || void 0 === ZR ? void 0 : ZR.sequence) && void 0 !== uR ? uR : -1) <= tR && void 0 !== GR.telemetryTarget && (this.telemetry = {
              sequence: tR,
              Qq: {
                target: GR.telemetryTarget,
                expiresAtMs: qR
              }
            }), GR.targets
          })),
          iR = {
            first: JR,
            end: GR,
            answer: qR
          };
        RR.requests.push(iR);
        const fR = () => {
          RR.requests.splice(RR.requests.indexOf(iR), 1), null !== tR && this.telemetryAsked === tR && (this.telemetryAsked = null)
        };
        return qR.then(fR, fR), iR
      }
    }

    function BJ(RR, JR) {
      return RR.expiresAtMs - 6e4 > JR
    }

    function lJ(RR, JR) {
      return `${RR}:${JR}`
    }
    const pJ = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function gJ(RR) {
      return new Promise((JR => {
        const GR = () => {
            clearTimeout(yR), window.removeEventListener("online", GR), JR()
          },
          yR = setTimeout(GR, RR);
        window.addEventListener("online", GR)
      }))
    }
    const bJ = ["video", "dom"],
      vJ = "video",
      OJ = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      xJ = "an earlier part of its segment was dropped",
      NJ = new Set([403, 408, 409, 429]),
      DJ = new Set(["RequestTimeout", "IncompleteBody"]);
    class HJ {
      constructor(RR, JR, GR, yR) {
        this.transport = RR, this.uploadToken = JR, this.options = GR, this.callbacks = yR, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new MJ(RR, JR, (() => {
          var RR;
          return null !== (RR = this.nextSequence.get("telemetry")) && void 0 !== RR ? RR : 0
        }), (RR => {
          const JR = this.queue.find((JR => "dom" === JR.kind && JR.sequence > RR));
          return void 0 === JR ? null : {
            sequence: JR.sequence,
            byteLength: JR.bytes.byteLength
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
        return this.queue.map((RR => {
          let {
            kind: JR,
            sequence: GR,
            meta: yR
          } = RR;
          return {
            kind: JR,
            sequence: GR,
            meta: yR
          }
        }))
      }
      openSegment(RR, JR, GR, yR) {
        const tR = this.takeSequence(RR);
        return this.prefetchTargets(RR, tR, JR, GR, yR), tR
      }
      prefetchTargets(RR, JR, GR, yR, tR) {
        this.stopped || this.targets.prefetch(RR, JR, GR, yR, tR)
      }
      peekTarget(RR, JR, GR) {
        return this.targets.peek(RR, JR, GR)
      }
      closeSegment(RR, JR) {
        this.targets.forget(RR, JR), RR === vJ && this.brokenSegments.delete(JR)
      }
      enqueue(RR) {
        var JR, GR;
        const yR = null !== (JR = null === (GR = RR.part) || void 0 === GR ? void 0 : GR.sequence) && void 0 !== JR ? JR : null;
        if (this.stopped) return this.callbacks.onDropped(RR, "uploader stopped", yR), null;
        if (null !== yR && RR.kind === vJ && this.brokenSegments.has(yR)) return this.callbacks.onDropped(RR, xJ, yR), null;
        "still" === RR.kind && this.removeQueued(RR.kind);
        const tR = {
            ...RR,
            sequence: null !== yR && void 0 !== yR ? yR : this.takeSequence(RR.kind)
          },
          uR = this.queue.findIndex(((JR, GR) => (GR > 0 || !this.uploadInFlight) && OJ[JR.kind] > OJ[RR.kind]));
        return this.queue.splice(-1 === uR ? this.queue.length : uR, 0, tR), this.queuedBytes += RR.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(tR) ? tR.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const RR of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= RR.bytes.byteLength, this.callbacks.onDropped(RR, "uploader stopped", RR.sequence)
      }
      takeSequence(RR) {
        var JR;
        const GR = null !== (JR = this.nextSequence.get(RR)) && void 0 !== JR ? JR : 0;
        return this.nextSequence.set(RR, GR + 1), GR
      }
      removeQueued(RR) {
        for (let JR = this.queue.length - 1; JR >= (this.uploadInFlight ? 1 : 0); JR--)
          if (this.queue[JR].kind === RR) {
            const [RR] = this.queue.splice(JR, 1);
            this.queuedBytes -= RR.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const RR of bJ)
          for (const JR of [!1, !0])
            for (let GR = this.uploadInFlight ? 1 : 0; GR < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const yR = this.queue[GR];
              if (yR.kind !== RR || !0 === yR.dropLast && !JR) {
                GR++;
                continue
              }
              const [tR] = this.queue.splice(GR, 1);
              this.queuedBytes -= tR.bytes.byteLength, this.callbacks.onDropped(tR, "backlog over cap", tR.sequence), this.segmentBroken(tR)
            }
      }
      segmentBroken(RR) {
        if (void 0 !== RR.part && RR.kind === vJ) {
          this.brokenSegments.add(RR.sequence);
          for (let JR = this.queue.length - 1; JR >= (this.uploadInFlight ? 1 : 0); JR--) {
            const GR = this.queue[JR];
            GR.kind === vJ && void 0 !== GR.part && GR.sequence === RR.sequence && (this.queue.splice(JR, 1), this.queuedBytes -= GR.bytes.byteLength, this.callbacks.onDropped(GR, xJ, GR.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const RR = this.queue[0];
            this.uploadInFlight = !0;
            const JR = await this.upload(RR);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= RR.bytes.byteLength, "uploaded" !== JR.type ? (this.callbacks.onDropped(RR, JR.reason, RR.sequence), this.segmentBroken(RR), "refused" !== JR.type || this.stopped || "telemetry" !== RR.kind || (console.warn(`Session replay uploads refused (${JR.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(JR.reason))) : this.callbacks.onUploaded(RR, RR.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(RR) {
        let JR = null,
          GR = 0;
        for (let tR = 1;; tR++) {
          try {
            if (null === JR) {
              const GR = await this.requestTarget(RR);
              if ("rejected" in GR) {
                if (!GR.retryable) return {
                  type: "refused",
                  reason: GR.reason
                };
                throw new Error(`rejected for now: ${GR.reason}`)
              }
              JR = GR
            }
            try {
              "put" === JR.type ? await this.transport.put(JR.url, RR.bytes, RR.contentType, JR.ifNoneMatch) : await this.transport.post(JR.target, RR.bytes, RR.contentType)
            } catch (yR) {
              if (yR instanceof jR.d && null !== yR.status && yR.status < 500 && !NJ.has(yR.status) && (null === yR.storageCode || !DJ.has(yR.storageCode))) return console.warn(`Session replay ${RR.kind} segment ${RR.sequence} refused by storage:`, yR), {
                type: "dropped",
                reason: yR.message
              };
              throw yR
            }
            return {
              type: "uploaded"
            }
          } catch (yR) {
            const tR = yR instanceof Error ? yR.message : String(yR),
              uR = void 0 === RR.part ? "" : ` part ${RR.part.index}`;
            if (console.warn(`Session replay ${RR.kind} segment ${RR.sequence}${uR} upload failed:`, yR), yR instanceof jR.d && (403 === yR.status && (JR = null, void 0 !== RR.part && this.targets.expire(RR.kind, RR.sequence, RR.part.index)), ++GR >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: tR
            }
          }
          const uR = Math.min(3e4, this.options.baseBackoffMs * 2 ** (tR - 1));
          if (await this.options.wait(uR * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(RR) {
        const {
          part: JR
        } = RR;
        if (void 0 !== JR) {
          const GR = await this.targets.get(RR.kind, RR.sequence, RR.contentType, JR.index, JR.slots);
          return "rejected" in GR ? GR : {
            type: "post",
            target: GR
          }
        }
        const GR = "dom" === RR.kind ? await this.targets.takeDom(RR.sequence) : void 0;
        if (void 0 !== GR) return {
          type: "put",
          url: GR.uploadUrl,
          ifNoneMatch: GR.ifNoneMatch
        };
        const yR = "telemetry" === RR.kind && RR.bytes.byteLength <= XJ ? this.targets.takeTelemetry(RR.sequence) : void 0;
        if (void 0 !== yR) return {
          type: "post",
          target: yR
        };
        const tR = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: RR.kind,
          sequence: RR.sequence,
          contentType: RR.contentType,
          byteLength: RR.bytes.byteLength
        });
        return "rejected" in tR ? tR : {
          type: "put",
          url: tR.uploadUrl,
          ifNoneMatch: tR.ifNoneMatch
        }
      }
    }
    class oJ {
      constructor(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = RR, this.slots = JR, this.manifest = GR, this.journal = yR, this.cut = tR, this.joiner = uR, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(RR, JR) {
        switch (RR.type) {
          case "videoSegmentOpened": {
            var GR, yR;
            if (null !== (GR = this.joiner) && void 0 !== GR && GR.accepting) {
              var tR;
              const JR = this.uploader.takeSequence("video");
              this.joiner.open(RR.journalId, JR), this.openJournalId = RR.journalId, null === (tR = this.journal) || void 0 === tR || tR.videoQueued(RR.journalId, JR);
              break
            }
            const uR = this.uploader.openSegment("video", "video/mp4", this.slots, JR);
            this.segments.set(RR.journalId, {
              sequence: uR,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = RR.journalId, null === (yR = this.journal) || void 0 === yR || yR.videoQueued(RR.journalId, uR);
            break
          }
          case "videoPart": {
            var uR;
            if (null !== (uR = this.joiner) && void 0 !== uR && uR.owns(RR.journalId)) {
              const {
                index: JR,
                bytes: GR,
                meta: yR,
                completeUntilUs: tR,
                completeUntilIndex: uR
              } = RR;
              this.joiner.addPart(RR.journalId, {
                index: JR,
                bytes: GR,
                meta: yR,
                completeUntilUs: tR,
                completeUntilIndex: uR
              });
              break
            }
            const JR = this.segments.get(RR.journalId);
            void 0 !== JR && this.enqueuePart(RR.journalId, JR.sequence, RR);
            break
          }
          case "videoSegmentClosed": {
            var ZR;
            if (null !== (ZR = this.joiner) && void 0 !== ZR && ZR.owns(RR.journalId)) {
              var qR;
              if (this.openJournalId === RR.journalId && (this.openJournalId = null), RR.parts > 0) this.joiner.close(RR.journalId, RR.parts);
              else this.joiner.forget(RR.journalId), null === (qR = this.journal) || void 0 === qR || qR.videoSettled(RR.journalId);
              break
            }
            const JR = this.segments.get(RR.journalId);
            if (void 0 === JR) break;
            JR.totalParts = RR.parts, this.openJournalId === RR.journalId && (this.openJournalId = null), this.maybeDone(RR.journalId, JR);
            break
          }
        }
      }
      joinedStored(RR, JR, GR) {
        this.manifest.setVideoSegment(JR, GR.meta, null), this.storedWhole.set(JR, RR)
      }
      joinedHandedBack(RR, JR, GR, yR) {
        const tR = {
          sequence: JR,
          settledParts: 0,
          totalParts: yR,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(RR, tR), this.uploader.prefetchTargets("video", JR, "video/mp4", this.slots);
        for (const uR of GR) this.enqueuePart(RR, JR, uR)
      }
      enqueuePart(RR, JR, GR) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: GR.bytes,
          meta: {
            type: "video",
            meta: GR.meta,
            journalId: RR,
            index: GR.index,
            completeUntilUs: GR.completeUntilUs,
            completeUntilIndex: GR.completeUntilIndex
          },
          part: {
            sequence: JR,
            index: GR.index,
            slots: this.slots
          }
        })
      }
      landed(RR, JR) {
        if (null !== RR.completeUntilUs && RR.meta.endMs > RR.meta.startMs) {
          var GR, yR;
          const tR = this.segments.get(RR.journalId);
          void 0 !== tR && (tR.landedParts = RR.index + 1), this.manifest.setVideoSegment(JR, RR.meta, RR.index + 1), null === (GR = this.journal) || void 0 === GR || GR.videoPartLanded(RR.journalId, {
            partsLanded: RR.index + 1,
            completeUntilUs: RR.completeUntilUs,
            meta: RR.meta
          }, null !== (yR = RR.completeUntilIndex) && void 0 !== yR ? yR : 0)
        }
        this.settled(RR)
      }
      dropped(RR) {
        this.settled(RR), RR.journalId === this.openJournalId && RR.journalId !== this.cutJournalId && (this.cutJournalId = RR.journalId, this.cut())
      }
      listed(RR, JR) {
        if (null !== JR)
          for (const [yR, tR] of this.segments) tR.sequence === RR && (tR.listedParts = Math.max(tR.listedParts, JR), this.maybeDone(yR, tR));
        else {
          const JR = this.storedWhole.get(RR);
          var GR;
          void 0 !== JR && (this.storedWhole.delete(RR), null === (GR = this.journal) || void 0 === GR || GR.videoSettled(JR))
        }
      }
      settled(RR) {
        const JR = this.segments.get(RR.journalId);
        void 0 !== JR && (JR.settledParts++, this.maybeDone(RR.journalId, JR))
      }
      maybeDone(RR, JR) {
        if (null === JR.totalParts || JR.settledParts < JR.totalParts) return;
        const GR = JR.listedParts >= JR.landedParts;
        var yR, tR;
        JR.uploaded || (JR.uploaded = !0, this.uploader.closeSegment("video", JR.sequence), GR || null === (yR = this.journal) || void 0 === yR || yR.videoUploaded(RR));
        GR && (this.segments.delete(RR), null === (tR = this.journal) || void 0 === tR || tR.videoSettled(RR))
      }
    }
    var cJ = GR(4137),
      PJ = GR(5484);
    class IJ {
      constructor(RR, JR) {
        this.deps = RR, this.videoStatus = JR, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new nJ({
          onFirstCanvas: RR => {
            this.attachToCanvas(RR)
          },
          onCanvasSwapped: RR => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(RR), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: RR => {
            this.postToWorker({
              type: "resize",
              cssSize: RR
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
      attachToCanvas(RR) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(RR, this.deps.videoConfig)
        } catch (JR) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", JR), this.videoUnavailable(`video couldn't start: ${JR instanceof Error?JR.message:String(JR)}`)
        }
      }
      startVideo(RR, JR) {
        var GR, yR, tR;
        const uR = new fJ,
          ZR = (0, GJ.m)(JR),
          qR = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          iR = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => fR), qR),
          fR = new oJ(this.deps.uploader, ZR, this.deps.manifest, this.deps.journal, qR, iR);
        uR.onmessage = RR => {
          this.onWorkerMessage(RR.data, fR)
        }, uR.onerror = RR => {
          console.error("Session replay video worker error.", RR.message), this.worker === uR && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${RR.message||"it didn't load"}`))
        }, this.worker = uR, this.uploads = fR, this.joiner = iR, this.deps.debug.joiner = null !== (GR = null === iR || void 0 === iR ? void 0 : iR.stats) && void 0 !== GR ? GR : null, this.videoStarted = !0, this.deps.stills.start();
        const VR = (0, vR.getOperatingSystem)(),
          KR = (0, bR.d)();
        this.postToWorker({
          type: "init",
          videoConfig: JR,
          partPlan: {
            ...ZR,
            partDurationMs: JR.partDurationMs,
            keyframeIntervalMs: JR.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          encoderPreference: {
            preferSoftware: JR.softwareEncoderPlatforms.includes(VR),
            preferQualityLatency: "ios" === VR
          },
          journalRecordingId: null !== (yR = null === (tR = this.deps.journal) || void 0 === tR ? void 0 : tR.recordingId) && void 0 !== yR ? yR : null
        });
        const wR = function(RR, JR, GR, yR) {
          const tR = yR && RR.streamGrabEngines.includes(GR) ? "stream" : RR.videoFrameGrabPlatforms.includes(JR) ? "videoFrame" : "bitmap";
          return {
            path: tR,
            frameCostFloorMs: Math.max(RR.captureFrameCostFloorMs, "stream" === tR ? 2.5 : 0, "ios" === JR ? 3.5 : 0)
          }
        }(JR, VR, KR, eJ.isSupported() && !RR.renderer.endsWith("webgpu"));
        this.capture = new aJ(uR, JR.maxFps, {
          msPerSecond: JR.captureBudgetMsPerSecond,
          frameCostFloorMs: wR.frameCostFloorMs
        }, {
          path: wR.path,
          maxMacroblocks: JR.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (RR => {
          this.endVideo(), this.videoStopped("stopped_error", RR)
        })), this.capture.start(RR)
      }
      createJoiner(RR, JR, GR) {
        return new CJ(RR, this.deps.recording.uploadToken, new ER(RR.url), {
          stored: (RR, GR, yR) => {
            JR().joinedStored(RR, GR, yR), this.deps.pageExit.segmentLanded()
          },
          handBack: (RR, GR, yR, tR) => {
            JR().joinedHandedBack(RR, GR, yR, tR)
          },
          cut: GR
        }, {
          wait: gJ,
          nowMs: Date.now,
          maxHeldBytes: UJ[this.deps.platformType]
        })
      }
      onWorkerMessage(RR, JR) {
        var GR, yR, tR, uR;
        switch (RR.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            JR.onWorkerMessage(RR, "videoSegmentOpened" === RR.type ? null === (GR = this.deps.dom()) || void 0 === GR ? void 0 : GR.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(RR, document.hidden);
            break;
          case "stats":
            tR = this.deps.debug, uR = RR.stats, tR.workerStats.push(uR), tR.workerStats.length > 120 && tR.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(RR.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = RR.level, null === (yR = this.capture) || void 0 === yR || yR.setMaxFps(RR.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, QR.c)(),
              level: RR.level,
              maxFps: RR.maxFps,
              reason: RR.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${RR.level} (${RR.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(RR.reason)
        }
      }
      videoUnavailable(RR) {
        var JR, GR;
        null === (JR = this.capture) || void 0 === JR || JR.stop(), this.capture = null, null === (GR = this.worker) || void 0 === GR || GR.terminate(), this.worker = null, this.videoStopped("stopped_error", RR)
      }
      videoStopped(RR, JR) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = JR, "stopped_error" === RR && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(RR, JR))
      }
      setVideoStatus(RR, JR) {
        this.videoStatus = RR, (0, cJ.i)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, PJ.i)(RR, JR)
      }
      maybeLogStats(RR) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const JR = Math.round(1e3 * RR.encodedFrames / RR.windowMs);
        console.warn(`Session replay stats: ${JR} fps encoded, ${RR.encodeWidth}x${RR.encodeHeight} ${RR.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var RR;
        null === (RR = this.capture) || void 0 === RR || RR.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const JR = this.worker;
        this.worker = null, setTimeout((() => {
          null === JR || void 0 === JR || JR.terminate()
        }), 15e3)
      }
      postToWorker(RR) {
        var JR;
        null === (JR = this.worker) || void 0 === JR || JR.postMessage(RR)
      }
    }
    const mJ = 3 * zR.e / 4,
      zJ = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var SJ = GR(41060);
    const jJ = {
        count: 1,
        maxBytes: GJ.g
      },
      dJ = "image/jpeg";
    class EJ {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zR.i;
        this.uploader = RR, this.manifest = JR, this.relay = GR, this.keepalive = yR, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(RR, JR) {
        let {
          bytes: GR,
          small: yR,
          atMs: tR
        } = RR;
        const uR = GR.byteLength <= jJ.maxBytes ? GR : yR;
        null !== uR && (this.latest = {
          bytes: uR,
          small: yR,
          atMs: tR
        }, JR && this.upload())
      }
      upload() {
        var RR, JR;
        const GR = this.latest;
        if (this.stopped || null === GR || GR.atMs <= (null !== (RR = null === (JR = this.queued) || void 0 === JR ? void 0 : JR.atMs) && void 0 !== RR ? RR : -1 / 0)) return;
        const yR = this.takeSequence();
        this.queued = {
          atMs: GR.atMs,
          sequence: yR
        }, this.uploader.enqueue({
          kind: "still",
          contentType: dJ,
          bytes: GR.bytes,
          meta: {
            type: "still",
            atMs: GR.atMs,
            sequence: yR
          },
          part: {
            sequence: yR,
            index: 0,
            slots: jJ
          }
        })
      }
      landed(RR) {
        this.manifest.setStill(RR.atMs, RR.sequence), this.uploader.closeSegment("still", RR.sequence)
      }
      dropped(RR) {
        this.uploader.closeSegment("still", RR.sequence)
      }
      beacon() {
        var RR, JR, GR, yR;
        const tR = this.latest;
        if (this.stopped || null === tR || tR.atMs <= (null !== (RR = null === (JR = this.manifest.contents.still) || void 0 === JR ? void 0 : JR.atMs) && void 0 !== RR ? RR : -1 / 0)) return;
        const uR = (null === (GR = this.queued) || void 0 === GR ? void 0 : GR.atMs) === tR.atMs ? this.queued : null;
        if (null !== uR && this.keepalive.isInFlight(dJ)) return void this.manifest.setStill(tR.atMs, uR.sequence);
        const ZR = null !== (yR = null === uR || void 0 === uR ? void 0 : uR.sequence) && void 0 !== yR ? yR : this.nextSequence,
          qR = this.uploader.peekTarget("still", ZR, 0);
        if (void 0 !== qR)
          for (const iR of [tR.bytes, tR.small])
            if (null !== iR && this.sendBeacon(qR, iR)) return null === uR && this.takeSequence(), void this.manifest.setStill(tR.atMs, ZR)
      }
      sendBeacon(RR, JR) {
        var GR, yR;
        const tR = null !== (GR = null === (yR = this.relay) || void 0 === yR ? void 0 : yR.beacon({
          method: "POST",
          url: RR.url,
          fields: RR.fields
        }, JR, dJ, this.keepalive)) && void 0 !== GR ? GR : null;
        if (null !== tR) return tR;
        const {
          form: uR,
          byteLength: ZR
        } = (0, SJ.d)(RR, JR, dJ);
        return this.keepalive.sendUploadBeacon(RR.url, uR, ZR)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const RR = this.nextSequence++;
        return this.prefetchNext(), RR
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, dJ, jJ)
      }
    }
    var YJ = GR(5497),
      kJ = GR(41062),
      QJ = GR(41066),
      FJ = GR(41072),
      TJ = GR(7633),
      sJ = GR(7640);

    function hJ(RR) {
      return 50 * Math.floor(RR / 50)
    }
    class RG {
      constructor() {
        this.writer = new TJ.b((0, QR.c)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(RR, JR) {
        null !== RR && (this.setActionBits(RR.getActionBits(), (0, QR.c)()), this.unsubscribers.push(RR.onKey(((RR, JR, GR, yR, tR, uR) => {
          const ZR = (0, sJ.e)(RR);
          tR ? this.writer.writeKey(hJ(uR), ZR, JR, GR, yR) : 0 !== ZR && null === (0, sJ.i)(RR) && this.writer.writeKey(hJ(uR), 0, JR, GR, yR)
        })), RR.onActions(((RR, JR) => {
          this.setActionBits(RR, JR)
        })), RR.onPointerLock(((RR, JR) => {
          this.writer.writeEvent(JR, RR ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, LJ.D)((() => {
          const RR = (0, LJ.h)();
          this.writer.writeFrame((0, QR.c)() - RR, RR), this.framesSinceFpsSample++, JR()
        })))
      }
      writeState(RR, JR) {
        this.writer.writeState((0, QR.c)(), {
          backingWidth: RR.canvas.width,
          backingHeight: RR.canvas.height,
          cssWidth: RR.cssWidth,
          cssHeight: RR.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: RR.renderer,
          pingMs: RR.pingMs,
          hidden: JR,
          qualityLevel: RR.qualityLevel
        })
      }
      writeEvent(RR) {
        this.writer.writeEvent((0, QR.c)(), RR)
      }
      sampleFps() {
        const RR = performance.now(),
          JR = RR - this.lastFpsSampleMs,
          GR = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = RR, this.framesSinceFpsSample = 0, 0 === GR || JR <= 0 ? null : 1e3 * GR / JR
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const RR = this.writer.chunkStartMs,
          JR = (0, QR.c)(),
          GR = this.writer.takeChunk(JR);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(JR, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: GR,
          startMs: RR,
          endMs: JR
        }
      }
      stop() {
        for (const RR of this.unsubscribers) RR();
        this.unsubscribers = []
      }
      setActionBits(RR, JR) {
        RR !== this.actionBits && (this.actionBits = RR, this.writer.writeActions(hJ(JR), RR))
      }
    }
    var JG = GR(5515),
      GG = GR(41079);
    class yG {
      constructor(RR, JR) {
        var GR;
        this.recording = RR, this.telemetry = new RG, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const yR = JR.dryRun ? null : null !== (GR = RR.partJoiner) && void 0 !== GR ? GR : null,
          tR = null === yR ? null : (0, SR.j)(YR(yR)),
          ZR = JR.dryRun ? new SJ.b : new SJ.c((0, gR.c)().segmentUploadUrl, {
            relay: tR
          });
        var iR, fR;
        this.videoConfig = JR.dryRun ? function(RR) {
          var JR, GR, yR, tR;
          const ZR = uR[RR],
            qR = xR.i.getItem("replaySkipLowMemory"),
            iR = "boolean" === typeof qR ? qR : null;
          return {
            ...ZR,
            maxFps: null !== (JR = HR("replayMaxFps")) && void 0 !== JR ? JR : ZR.maxFps,
            maxMacroblocks: null !== (GR = HR("replayMaxMacroblocks")) && void 0 !== GR ? GR : ZR.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (yR = HR("replayCaptureBudgetMs")) && void 0 !== yR ? yR : ZR.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (tR = HR("replayCaptureCostFloorMs")) && void 0 !== tR ? tR : ZR.captureFrameCostFloorMs,
            softwareEncoderPlatforms: oR("replayEncoder", "software", "hardware", ZR.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: oR("replayGrab", "videoFrame", "bitmap", ZR.videoFrameGrabPlatforms),
            streamGrabEngines: cR(ZR.streamGrabEngines),
            skipLowMemoryDevices: null !== iR && void 0 !== iR ? iR : ZR.skipLowMemoryDevices
          }
        }(JR.platformType) : RR.videoConfig && (iR = RR.videoConfig, fR = JR.platformType, {
          ...uR[fR],
          ...iR
        });
        const VR = (0, JG.e)(this.videoConfig);
        (0, cJ.i)("recorded" === VR ? "video" : "dom_only", RR), this.manifest = new RJ(RR.recordingId, RR.uploadToken, !JR.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: RR.expiresAtMs - 6e4,
          onSend: RR => {
            var JR;
            null === (JR = this.journal) || void 0 === JR || JR.manifestSent(RR)
          },
          onListed: RR => {
            let {
              list: JR,
              value: GR
            } = RR;
            var yR, tR;
            if ("videoSegments" === JR) null === (yR = this.video.uploads) || void 0 === yR || yR.listed(GR.sequence, null !== (tR = GR.parts) && void 0 !== tR ? tR : null);
            else if ("telemetrySegments" === JR) {
              var uR;
              null === (uR = this.journal) || void 0 === uR || uR.telemetrySettled(GR.sequence)
            } else {
              var ZR;
              null === (ZR = this.journal) || void 0 === ZR || ZR.domSettled(GR.sequence)
            }
          }
        }), !JR.dryRun && FJ.e.supported && (this.journal = new uJ(new FJ.e, RR, this.manifest.contents, (0, gR.c)())), this.debug = function() {
          const RR = {
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
          return window.sessionReplayDebug = RR, RR
        }(), this.uploader = new HJ(ZR, RR.uploadToken, {
          ...pJ,
          maxBacklogBytes: zJ[JR.platformType],
          wait: gJ
        }, {
          onUploaded: (RR, JR) => {
            var GR;
            this.debug.uploadedBytesByKind[RR.kind] = (null !== (GR = this.debug.uploadedBytesByKind[RR.kind]) && void 0 !== GR ? GR : 0) + RR.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(RR.meta, JR, RR.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (RR, JR, GR) => {
            var yR;
            if (console.warn(`Session replay dropped a ${RR.kind} segment: ${JR}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === RR.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (yR = this.video.uploads) || void 0 === yR || yR.dropped(RR.meta);
            else if ("still" === RR.meta.type) this.stills.dropped(RR.meta);
            else if ("telemetry" === RR.meta.type && null !== GR) {
              var tR;
              null === (tR = this.journal) || void 0 === tR || tR.telemetrySettled(GR)
            } else if ("dom" === RR.meta.type && null !== GR) {
              var uR;
              null === (uR = this.journal) || void 0 === uR || uR.domSettled(GR)
            }
          },
          onStopped: RR => {
            this.stop(`uploads refused: ${RR}`)
          }
        }), this.stills = new EJ(this.uploader, this.manifest, tR), this.pageExit = new ZJ({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var RR, JR;
            null === (RR = this.dom) || void 0 === RR || RR.cut(), null === (JR = this.dom) || void 0 === JR || JR.cutAfterNextBatch()
          },
          postToWorker: RR => {
            this.video.postToWorker(RR)
          },
          writeEvent: RR => {
            this.telemetry.writeEvent(RR)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var RR;
            null === (RR = this.video.joiner) || void 0 === RR || RR.releaseAll()
          }
        }), this.video = new IJ({
          recording: RR,
          videoConfig: this.videoConfig,
          joinerAccess: yR,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: JR.dryRun ? {
            logStats: !0 === xR.i.getItem("replayLogStats")
          } : DR,
          platformType: JR.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, VR);
        const KR = JR.dryRun ? function() {
          var RR;
          const JR = null !== (RR = (0, NR.g)() ? OR.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== RR ? RR : xR.i.getItem("replayPostHogHost");
          return "string" === typeof JR && JR.length > 0 ? {
            apiHost: JR,
            projectApiKey: "dry-run"
          } : null
        }() : RR.posthog;
        if (this.ownFpsMonitor = null === KR ? new GG.b({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, qR.n.subscribe("sessionReplayLowFps", (RR => {
            let {
              low: JR
            } = RR;
            this.isStopped || this.onLowFps(JR)
          })), qR.n.subscribe("sessionReplayStayProgress", (RR => {
            !this.isStopped && this.manifest.updateCurrentStay(RR) && this.manifest.sendSoon()
          })), qR.n.subscribe("sessionReplayGameQuit", (RR => {
            let {
              reasons: JR,
              gameName: GR
            } = RR;
            JR.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(GR) && this.pageExit.sendManifest()
          })), null !== JR.currentGame && (this.listStay(JR.currentGame), qR.n.JK("sessionReplayStayOpened", JR.currentGame.gameNameWithVariation)), this.start(RR.expiresAtMs), this.dom = null, null !== KR) {
          const GR = new lR(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: RR => this.isStopped || this.pageExit.isHiding || document.hidden && !RR
          }, this.journal, new pR.d);
          this.dom = GR, (0, PJ.e)({
            recording: RR,
            posthog: KR,
            videoStatus: this.video.videoStatus,
            dryRun: JR.dryRun,
            onDomBatch: RR => {
              GR.add(RR)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var RR, JR;
        return null !== (RR = null === (JR = this.videoConfig) || void 0 === JR ? void 0 : JR.manifestIntervalMs) && void 0 !== RR ? RR : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(RR) {
        const {
          lobbyName: JR,
          ...GR
        } = RR;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === JR ? GR : {
          ...GR,
          lobbyName: JR
        })
      }
      gameJoined(RR) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(RR), qR.n.JK("sessionReplayStayOpened", RR.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(RR, JR) {
        this.isStopped || (this.manifest.addCreatorGrant(RR, JR), this.manifest.send())
      }
      onLowFps(RR) {
        this.lowFpsOpen = RR, RR && this.manifest.flagCurrentGame("lowFps")
      }
      start(RR) {
        const JR = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var RR;
          this.flushTelemetry(), null === (RR = this.dom) || void 0 === RR || RR.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, RR - Date.now() - 6e4))), this.pageExit.listen(JR), this.telemetry.attach((0, QJ.e)(), (() => {
          var RR;
          null === (RR = this.video.capture) || void 0 === RR || RR.onAfterRender()
        }));
        for (const GR of ["error", "unhandledrejection"]) window.addEventListener(GR, (RR => {
          (0, kJ.c)(RR) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: JR
        });
        (0, JG.h)((() => {
          this.video.onCellular()
        }), JR), null !== this.journal && (0, YJ.b)(JR)
      }
      stop(RR) {
        var JR, GR;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${RR}`), this.debug.stoppedReason = RR, this.lifetime.abort();
          for (const RR of this.timers) clearTimeout(RR);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, PJ.l)(), this.telemetry.stop(), this.flushTelemetry(), null === (JR = this.dom) || void 0 === JR || JR.cut(), null === (GR = this.dom) || void 0 === GR || GR.close(), this.video.endVideo(), this.manifest.send(), (0, cJ.i)("events_only", this.recording)
        }
      }
      onStateTick() {
        var RR;
        const JR = this.video.canvasWatch.check();
        if (null === JR) return;
        const {
          cssSize: GR
        } = this.video.canvasWatch, yR = ZR.c.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: JR.canvas,
          cssWidth: GR.width,
          cssHeight: GR.height,
          renderer: JR.renderer,
          pingMs: yR,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= mJ && this.flushTelemetry();
        const tR = this.telemetry.sampleFps(),
          uR = document.hidden ? null : tR;
        if (null === (RR = this.ownFpsMonitor) || void 0 === RR || RR.addSample(uR, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: uR,
            pingMs: yR
          }), null !== this.video.capture) {
          const {
            averageMs: RR,
            fps: JR,
            grabPath: GR
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: RR,
            budgetFps: JR,
            grabPath: GR
          }
        }
      }
      onSegmentUploaded(RR, JR, GR) {
        var yR;
        if ("video" === RR.type) null === (yR = this.video.uploads) || void 0 === yR || yR.landed(RR, JR);
        else if ("still" === RR.type) this.stills.landed(RR);
        else if ("dom" === RR.type) {
          var tR;
          null === (tR = this.journal) || void 0 === tR || tR.domLanded(JR, RR.chunk), this.manifest.addDomSegment({
            sequence: JR,
            ...RR.chunk
          })
        } else {
          var uR;
          null === (uR = this.journal) || void 0 === uR || uR.telemetryLanded(JR, GR, RR.startMs, RR.endMs), this.manifest.addTelemetrySegment(JR, RR.startMs, RR.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: RR,
          startMs: JR,
          endMs: GR
        } = this.telemetry.takeChunk(), yR = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: RR,
          meta: {
            type: "telemetry",
            startMs: JR,
            endMs: GR
          }
        });
        var tR;
        null !== yR && (null === (tR = this.journal) || void 0 === tR || tR.telemetryQueued(yR, RR, JR, GR));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7633: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => pR,
      d: () => gR
    });
    var yR = GR(7640);
    const tR = 827609666,
      uR = 2,
      ZR = 1,
      qR = 13,
      iR = 1,
      fR = 2,
      VR = 3,
      KR = 4,
      wR = 5,
      rR = 7,
      eR = 19,
      aR = 6,
      LR = 7,
      nR = 7,
      UR = 1,
      WR = 2,
      AR = 4,
      CR = 65535,
      XR = 10,
      MR = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      BR = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function lR(RR) {
      return Math.max(0, Math.min(CR, Math.round(RR)))
    }
    class pR {
      constructor(RR) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(RR)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - qR
      }
      writeFrame(RR, JR) {
        this.reserve(rR);
        const GR = this.view,
          yR = this.length;
        GR.setUint8(yR, iR), GR.setUint32(yR + 1, this.timeUnits(RR), !0), GR.setUint16(yR + 5, lR(100 * JR), !0), this.length += rR
      }
      writeState(RR, JR) {
        this.reserve(eR);
        const GR = this.view,
          yR = this.length;
        GR.setUint8(yR, fR), GR.setUint32(yR + 1, this.timeUnits(RR), !0), GR.setUint16(yR + 5, lR(JR.backingWidth), !0), GR.setUint16(yR + 7, lR(JR.backingHeight), !0), GR.setUint16(yR + 9, lR(JR.cssWidth), !0), GR.setUint16(yR + 11, lR(JR.cssHeight), !0), GR.setUint16(yR + 13, lR(100 * JR.devicePixelRatio), !0), GR.setUint8(yR + 15, MR.indexOf(JR.renderer)), GR.setUint16(yR + 16, null === JR.pingMs ? CR : lR(Math.min(JR.pingMs, CR - 1)), !0), GR.setUint8(yR + 18, (JR.hidden ? 1 : 0) | (7 & JR.qualityLevel) << 1), this.length += eR
      }
      writeEvent(RR, JR) {
        this.reserve(aR);
        const GR = this.length;
        this.view.setUint8(GR, VR), this.view.setUint32(GR + 1, this.timeUnits(RR), !0), this.view.setUint8(GR + 5, BR.indexOf(JR)), this.length += aR
      }
      writeActions(RR, JR) {
        this.reserve(LR);
        const GR = this.length;
        this.view.setUint8(GR, KR), this.view.setUint32(GR + 1, this.timeUnits(RR), !0), this.view.setUint16(GR + 5, JR, !0), this.length += LR
      }
      writeKey(RR, JR, GR, yR, tR) {
        this.reserve(nR);
        const uR = this.length;
        this.view.setUint8(uR, wR), this.view.setUint32(uR + 1, this.timeUnits(RR), !0), this.view.setUint8(uR + 5, JR), this.view.setUint8(uR + 6, (GR ? UR : 0) | (yR ? WR : 0) | (tR ? AR : 0)), this.length += nR
      }
      takeChunk(RR) {
        const JR = this.buffer.slice(0, this.length);
        return this.startChunk(RR), JR
      }
      startChunk(RR) {
        this.baseEpochMs = RR, this.view.setUint32(0, tR, !0), this.view.setUint8(4, uR), this.view.setFloat64(5, RR, !0), this.length = qR
      }
      timeUnits(RR) {
        return Math.max(0, Math.round((RR - this.baseEpochMs) * XR))
      }
      reserve(RR) {
        if (this.length + RR <= this.buffer.byteLength) return;
        const JR = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(JR).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = JR, this.view = new DataView(JR)
      }
    }

    function gR(RR) {
      const JR = new DataView(RR),
        GR = RR.byteLength < qR ? 0 : JR.getUint8(4);
      if (GR < ZR || GR > uR || JR.getUint32(0, !0) !== tR) throw new Error(`Not a version ${ZR}-${uR} replay telemetry chunk`);
      const lR = JR.getFloat64(5, !0),
        pR = {
          baseEpochMs: lR,
          inputRecorded: GR >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        gR = RR => lR + JR.getUint32(RR, !0) / XR;
      let bR = qR;
      for (; bR < RR.byteLength;) {
        const RR = JR.getUint8(bR);
        if (RR === iR) pR.frames.push({
          atMs: gR(bR + 1),
          cpuFrameMs: JR.getUint16(bR + 5, !0) / 100
        }), bR += rR;
        else if (RR === fR) {
          var vR;
          const RR = JR.getUint16(bR + 16, !0),
            GR = JR.getUint8(bR + 18);
          pR.states.push({
            atMs: gR(bR + 1),
            backingWidth: JR.getUint16(bR + 5, !0),
            backingHeight: JR.getUint16(bR + 7, !0),
            cssWidth: JR.getUint16(bR + 9, !0),
            cssHeight: JR.getUint16(bR + 11, !0),
            devicePixelRatio: JR.getUint16(bR + 13, !0) / 100,
            renderer: null !== (vR = MR[JR.getUint8(bR + 15)]) && void 0 !== vR ? vR : "unknown",
            pingMs: RR === CR ? null : RR,
            hidden: 1 === (1 & GR),
            qualityLevel: GR >> 1 & 7
          }), bR += eR
        } else if (RR === VR) {
          var OR;
          pR.events.push({
            atMs: gR(bR + 1),
            event: null !== (OR = BR[JR.getUint8(bR + 5)]) && void 0 !== OR ? OR : "none"
          }), bR += aR
        } else if (RR === KR && pR.inputRecorded) pR.actions.push({
          atMs: gR(bR + 1),
          bits: JR.getUint16(bR + 5, !0)
        }), bR += LR;
        else {
          if (RR !== wR || !pR.inputRecorded) throw new Error(`Unknown replay telemetry record type ${RR} at byte ${bR}`);
          {
            var xR;
            const RR = JR.getUint8(bR + 6);
            pR.keys.push({
              atMs: gR(bR + 1),
              code: null !== (xR = yR.d[JR.getUint8(bR + 5)]) && void 0 !== xR ? xR : yR.d[0],
              down: 0 !== (RR & UR),
              bound: 0 !== (RR & WR),
              inPlay: 0 !== (RR & AR)
            }), bR += nR
          }
        }
      }
      return pR
    }
  },
  37156: RR => {
    RR.exports = function(RR, JR, GR, yR) {
      var tR = self || window;
      try {
        try {
          var uR;
          try {
            uR = new tR.Blob([RR])
          } catch (fR) {
            (uR = new(tR.BlobBuilder || tR.WebKitBlobBuilder || tR.MozBlobBuilder || tR.MSBlobBuilder)).append(RR), uR = uR.getBlob()
          }
          var ZR = tR.URL || tR.webkitURL,
            qR = ZR.createObjectURL(uR),
            iR = new tR[JR](qR, GR);
          return ZR.revokeObjectURL(qR), iR
        } catch (fR) {
          return new tR[JR]("data:application/javascript,".concat(encodeURIComponent(RR)), GR)
        }
      } catch (fR) {
        if (!yR) throw Error("Inline worker is not supported");
        return new tR[JR](yR, GR)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);