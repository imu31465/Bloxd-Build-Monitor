export const id = 64;
export const ids = [64];
export const modules = {
  41361: (rr, Sr, Qr) => {
    function Zr() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function Wr(rr) {
      return rr instanceof Uint8Array && (!Zr() || !Buffer.isBuffer(rr))
    }

    function ar(rr) {
      return rr instanceof ArrayBuffer
    }

    function jr(rr) {
      return !!Zr() && Buffer.isBuffer(rr)
    }
    var Ir = Qr(41364).c,
      fr = Qr(41369).b,
      Er = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    Sr.d = function(rr) {
      if (!Wr(rr) && !ar(rr) && !jr(rr)) throw new TypeError(Er);
      var Sr = !1,
        Qr = !1;
      Wr(rr) ? Sr = !0 : ar(rr) && (Qr = !0, rr = new Uint8Array(rr));
      var Zr, Ir, pr, xr = new fr(rr),
        mr = xr.maxCompressedLength();
      if (Sr ? (Zr = new Uint8Array(mr), pr = xr.compressToBuffer(Zr)) : Qr ? (Zr = new ArrayBuffer(mr), Ir = new Uint8Array(Zr), pr = xr.compressToBuffer(Ir)) : (Zr = Buffer.alloc(mr), pr = xr.compressToBuffer(Zr)), !Zr.slice) {
        var Nr = new Uint8Array(Array.prototype.slice.call(Zr, 0, pr));
        if (Sr) return Nr;
        if (Qr) return Nr.buffer;
        throw new Error("Not implemented")
      }
      return Zr.slice(0, pr)
    }
  },
  41369: (rr, Sr) => {
    var Qr = new Array(15);

    function Zr(rr, Sr) {
      return 506832829 * rr >>> Sr
    }

    function Wr(rr, Sr) {
      return rr[Sr] + (rr[Sr + 1] << 8) + (rr[Sr + 2] << 16) + (rr[Sr + 3] << 24)
    }

    function ar(rr, Sr, Qr) {
      return rr[Sr] === rr[Qr] && rr[Sr + 1] === rr[Qr + 1] && rr[Sr + 2] === rr[Qr + 2] && rr[Sr + 3] === rr[Qr + 3]
    }

    function jr(rr, Sr, Qr, Zr, Wr) {
      return Qr <= 60 ? (Zr[Wr] = Qr - 1 << 2, Wr += 1) : Qr < 256 ? (Zr[Wr] = 240, Zr[Wr + 1] = Qr - 1, Wr += 2) : (Zr[Wr] = 244, Zr[Wr + 1] = Qr - 1 & 255, Zr[Wr + 2] = Qr - 1 >>> 8, Wr += 3),
        function(rr, Sr, Qr, Zr, Wr) {
          var ar;
          for (ar = 0; ar < Wr; ar++) Qr[Zr + ar] = rr[Sr + ar]
        }(rr, Sr, Zr, Wr, Qr), Wr + Qr
    }

    function Ir(rr, Sr, Qr, Zr) {
      return Zr < 12 && Qr < 2048 ? (rr[Sr] = 1 + (Zr - 4 << 2) + (Qr >>> 8 << 5), rr[Sr + 1] = 255 & Qr, Sr + 2) : (rr[Sr] = 2 + (Zr - 1 << 2), rr[Sr + 1] = 255 & Qr, rr[Sr + 2] = Qr >>> 8, Sr + 3)
    }

    function fr(rr, Sr, Qr, Zr) {
      for (; Zr >= 68;) Sr = Ir(rr, Sr, Qr, 64), Zr -= 64;
      return Zr > 64 && (Sr = Ir(rr, Sr, Qr, 60), Zr -= 60), Ir(rr, Sr, Qr, Zr)
    }

    function Er(rr, Sr, Ir, Er, pr) {
      for (var xr = 1; 1 << xr <= Ir && xr <= 14;) xr += 1;
      var mr = 32 - (xr -= 1);
      "undefined" === typeof Qr[xr] && (Qr[xr] = new Uint16Array(1 << xr));
      var Nr, Ur = Qr[xr];
      for (Nr = 0; Nr < Ur.length; Nr++) Ur[Nr] = 0;
      var tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr = Sr + Ir,
        Or = Sr,
        Lr = Sr,
        lr = !0;
      if (Ir >= 15)
        for (tr = vr - 15, zr = Zr(Wr(rr, Sr += 1), mr); lr;) {
          er = 32, Yr = Sr;
          do {
            if (hr = zr, Kr = er >>> 5, er += 1, Yr = (Sr = Yr) + Kr, Sr > tr) {
              lr = !1;
              break
            }
            zr = Zr(Wr(rr, Yr), mr), nr = Or + Ur[hr], Ur[hr] = Sr - Or
          } while (!ar(rr, Sr, nr));
          if (!lr) break;
          pr = jr(rr, Lr, Sr - Lr, Er, pr);
          do {
            for (yr = Sr, Br = 4; Sr + Br < vr && rr[Sr + Br] === rr[nr + Br];) Br += 1;
            if (Sr += Br, pr = fr(Er, pr, yr - nr, Br), Lr = Sr, Sr >= tr) {
              lr = !1;
              break
            }
            Ur[Zr(Wr(rr, Sr - 1), mr)] = Sr - 1 - Or, nr = Or + Ur[Tr = Zr(Wr(rr, Sr), mr)], Ur[Tr] = Sr - Or
          } while (ar(rr, Sr, nr));
          if (!lr) break;
          zr = Zr(Wr(rr, Sr += 1), mr)
        }
      return Lr < vr && (pr = jr(rr, Lr, vr - Lr, Er, pr)), pr
    }

    function pr(rr) {
      this.array = rr
    }
    pr.prototype.maxCompressedLength = function() {
      var rr = this.array.length;
      return 32 + rr + Math.floor(rr / 6)
    }, pr.prototype.compressToBuffer = function(rr) {
      var Sr, Qr = this.array,
        Zr = Qr.length,
        Wr = 0,
        ar = 0;
      for (ar = function(rr, Sr, Qr) {
          do {
            Sr[Qr] = 127 & rr, (rr >>>= 7) > 0 && (Sr[Qr] += 128), Qr += 1
          } while (rr > 0);
          return Qr
        }(Zr, rr, ar); Wr < Zr;) ar = Er(Qr, Wr, Sr = Math.min(Zr - Wr, 65536), rr, ar), Wr += Sr;
      return ar
    }, Sr.b = pr
  },
  41364: (rr, Sr) => {
    var Qr = [0, 255, 65535, 16777215, 4294967295];

    function Zr(rr, Sr, Qr, Zr, Wr) {
      var ar;
      for (ar = 0; ar < Wr; ar++) Qr[Zr + ar] = rr[Sr + ar]
    }

    function Wr(rr, Sr, Qr, Zr) {
      var Wr;
      for (Wr = 0; Wr < Zr; Wr++) rr[Sr + Wr] = rr[Sr - Qr + Wr]
    }

    function ar(rr) {
      this.array = rr, this.pos = 0
    }
    ar.prototype.readUncompressedLength = function() {
      for (var rr, Sr, Qr = 0, Zr = 0; Zr < 32 && this.pos < this.array.length;) {
        if (rr = this.array[this.pos], this.pos += 1, (Sr = 127 & rr) << Zr >>> Zr !== Sr) return -1;
        if (Qr |= Sr << Zr, rr < 128) return Qr;
        Zr += 7
      }
      return -1
    }, ar.prototype.uncompressToBuffer = function(rr) {
      for (var Sr, ar, jr, Ir, fr = this.array, Er = fr.length, pr = this.pos, xr = 0; pr < fr.length;)
        if (Sr = fr[pr], pr += 1, 0 === (3 & Sr)) {
          if ((ar = 1 + (Sr >>> 2)) > 60) {
            if (pr + 3 >= Er) return !1;
            jr = ar - 60, ar = 1 + ((ar = fr[pr] + (fr[pr + 1] << 8) + (fr[pr + 2] << 16) + (fr[pr + 3] << 24)) & Qr[jr]), pr += jr
          }
          if (pr + ar > Er) return !1;
          Zr(fr, pr, rr, xr, ar), pr += ar, xr += ar
        } else {
          switch (3 & Sr) {
            case 1:
              ar = 4 + (Sr >>> 2 & 7), Ir = fr[pr] + (Sr >>> 5 << 8), pr += 1;
              break;
            case 2:
              if (pr + 1 >= Er) return !1;
              ar = 1 + (Sr >>> 2), Ir = fr[pr] + (fr[pr + 1] << 8), pr += 2;
              break;
            case 3:
              if (pr + 3 >= Er) return !1;
              ar = 1 + (Sr >>> 2), Ir = fr[pr] + (fr[pr + 1] << 8) + (fr[pr + 2] << 16) + (fr[pr + 3] << 24), pr += 4
          }
          if (0 === Ir || Ir > xr) return !1;
          Wr(rr, xr, Ir, ar), xr += ar
        } return !0
    }, Sr.c = ar
  },
  41346: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      SessionReplayRecorder: () => ZQ
    });
    const Zr = {
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
      Wr = {
        ...Zr,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        captureBudgetMsPerSecond: 60,
        skipLowMemoryDevices: !0
      },
      ar = {
        desktop: Zr,
        mobile: Wr,
        tablet: Wr
      };
    var jr = Qr(3868),
      Ir = Qr(34);
    const fr = 4194304,
      Er = 16777216;
    var pr = Qr(4635);
    const xr = [2, 4, 9, 3],
      mr = pr.g,
      Nr = [mr.MouseInteraction, mr.MouseMove, mr.TouchMove],
      Ur = [mr.MouseMove, mr.MouseInteraction, mr.Scroll, mr.ViewportResize, mr.Input, mr.TouchMove, mr.MediaInteraction, mr.Drag],
      tr = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function hr(rr) {
      if ("object" !== typeof rr || null === rr || Array.isArray(rr)) return !1;
      const Sr = rr.timestamp;
      return "number" === typeof Sr && Sr > 0 && Sr <= 864e13
    }

    function zr(rr) {
      var Sr;
      return rr.type === pr.d.IncrementalSnapshot ? null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.source : void 0
    }
    class Yr {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(rr) {
        this.eventCount++;
        const Sr = zr(rr);
        this.timestamps.push(rr.timestamp), this.active.push(function(rr) {
          var Sr;
          return Ur.includes(zr(rr)) || rr.type === pr.d.Custom && (null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.tag) === pr.l.active
        }(rr));
        const Qr = function(rr) {
          var Sr;
          const Qr = rr.data;
          if (rr.type === pr.d.Custom && "$json_ld" === (null === Qr || void 0 === Qr ? void 0 : Qr.tag)) return;
          const Zr = "string" === typeof(null === Qr || void 0 === Qr ? void 0 : Qr.href) ? Qr.href.trim() : void 0,
            Wr = "string" === typeof(null === Qr || void 0 === Qr || null === (Sr = Qr.payload) || void 0 === Sr ? void 0 : Sr.href) ? Qr.payload.href.trim() : void 0;
          return Zr || Wr || void 0
        }(rr);
        Qr && this.addUrl(Qr), Sr === mr.MouseInteraction && xr.includes(rr.data.type) && this.clickCount++, Sr === mr.Input && this.keypressCount++, Nr.includes(Sr) && this.mouseActivityCount++;
        const Zr = rr.data;
        if (rr.type === pr.d.Plugin && "rrweb/console@1" === (null === Zr || void 0 === Zr ? void 0 : Zr.plugin)) {
          var Wr;
          const rr = tr.get(null === (Wr = Zr.payload) || void 0 === Wr ? void 0 : Wr.level);
          "warn" === rr ? this.consoleWarnCount++ : "error" === rr ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(rr) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: rr,
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
      addUrl(rr) {
        const Sr = rr.slice(0, 4096);
        this.firstUrl ??= Sr, this.urls.size < 25 && !this.urls.has(Sr) && this.urlsLength + Sr.length <= 8192 && (this.urls.add(Sr), this.urlsLength += Sr.length)
      }
      activeMs() {
        var rr;
        const Sr = this.timestamps.map(((rr, Sr) => Sr)).sort(((rr, Sr) => this.timestamps[rr] - this.timestamps[Sr]));
        let Qr = 0,
          Zr = null,
          Wr = 0;
        for (const jr of Sr) {
          const rr = this.timestamps[jr],
            Sr = this.active[jr],
            Ir = !Zr || Sr && !Zr.isActive || Zr.isActive && Wr + 5e3 < rr;
          var ar;
          if (Wr = Sr ? rr : Wr, Ir) null !== (ar = Zr) && void 0 !== ar && ar.isActive && (Qr += Math.max(1, Zr.end - Zr.start)), Zr = {
            start: rr,
            end: rr,
            isActive: Sr
          };
          else Zr.end = rr
        }
        return null !== (rr = Zr) && void 0 !== rr && rr.isActive && (Qr += Math.max(1, Zr.end - Zr.start)), Math.floor(Qr)
      }
    }
    const nr = 5592405.333333333;
    class er {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = rr, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new Yr, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get nx() {
        return 0 === this.lines.length
      }
      get tooBigForExit() {
        return this.holdsSnapshot || this.chars >= 262144
      }
      add(rr) {
        const Sr = rr.events.filter(hr),
          Qr = Sr.map((Sr => JSON.stringify([rr.windowId, Sr]) + "\n"));
        if (0 === Qr.length) return [];
        const Zr = [],
          Wr = Qr.reduce(((rr, Sr) => rr + Sr.length), 0);
        !this.nx && this.chars + Wr > this.chunkChars && Zr.push(this.finish());
        let ar = !1;
        return Sr.forEach(((rr, Sr) => {
          const Wr = Qr[Sr];
          !this.nx && this.chars + Wr.length > this.chunkChars && (Zr.push(this.finish()), ar = !1), ar || (this.counter.addMessage(), ar = !0), this.counter.addEvent(rr), this.lines.push(Wr), this.chars += Wr.length, this.startMs = Math.min(this.startMs, rr.timestamp), this.endMs = Math.max(this.endMs, rr.timestamp), this.holdsSnapshot ||= rr.type === pr.d.FullSnapshot || rr.type === pr.d.Meta
        })), Zr.filter((rr => null !== rr))
      }
      finish() {
        if (this.nx) return null;
        const {
          startMs: rr,
          endMs: Sr,
          counter: Qr,
          holdsSnapshot: Zr,
          chunkIndex: Wr,
          tailedChars: ar
        } = this, jr = {
          text: this.lines.join(""),
          startMs: rr,
          endMs: Sr,
          counter: Qr,
          holdsSnapshot: Zr,
          chunkIndex: Wr,
          tailedChars: ar
        };
        return this.reset(), jr
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > nr) return null;
        const rr = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, rr
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new Yr, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function Kr(rr) {
      let {
        text: Sr
      } = rr;
      return Sr.length <= nr
    }

    function yr(rr) {
      const {
        text: Sr,
        startMs: Qr,
        endMs: Zr,
        counter: Wr,
        chunkIndex: ar,
        tailedChars: jr
      } = rr;
      return jr !== Sr.length && Kr(rr) ? {
        chunkIndex: ar,
        fromChar: jr,
        text: Sr.slice(jr),
        startMs: Qr,
        endMs: Zr,
        summary: Wr.finish(0)
      } : null
    }

    function Br(rr, Sr) {
      let {
        startMs: Qr,
        endMs: Zr,
        counter: Wr,
        holdsSnapshot: ar
      } = rr, {
        bytes: jr,
        inflatedBytes: Ir
      } = Sr;
      return jr.byteLength > fr || Ir > Er ? (console.warn(`Session replay: dropped a ${Ir}-byte page recording chunk, over the size limits`), null) : {
        bytes: jr,
        startMs: Qr,
        endMs: Zr,
        summary: Wr.finish(Ir),
        holdsSnapshot: ar
      }
    }
    var Tr = Qr(41355);
    class vr {
      constructor(rr, Sr, Qr, Zr) {
        this.uploader = rr, this.timing = Sr, this.journal = Qr, this.packer = Zr, this.writer = new er, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(rr) {
        this.pack(this.writer.add(rr)), (this.cutNext || this.timing.cutsEachBatch() || this.writer.tooBigForExit) && (this.cutNext = !1, this.cut());
        const Sr = this.journal;
        null === Sr || null !== this.tailTimer || this.writer.nx || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const rr = this.writer.takeTail();
          null !== rr && Sr.domTail(rr)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const rr = this.writer.finish();
        this.pack(null === rr ? [] : [rr])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.nx) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const rr = this.packing[this.packing.length - 1];
        return void 0 !== rr ? new Promise((Sr => {
          const Qr = rr.onQueued;
          rr.onQueued = () => {
            null === Qr || void 0 === Qr || Qr(), Sr()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(rr) {
        const Sr = rr.filter((rr => {
            const Sr = function(rr) {
              let {
                text: Sr
              } = rr;
              return Sr.length <= Er || (console.warn(`Session replay: dropped a page recording chunk of ${Sr.length} characters, over the size limits`), !1)
            }(rr);
            var Qr;
            Sr || (null === (Qr = this.journal) || void 0 === Qr || Qr.domTailDropped(rr.chunkIndex));
            return Sr
          })),
          Qr = this.journalWorks() && Sr.every((rr => Kr(rr))) && this.packing.every((rr => rr.journalled));
        if (this.timing.packsNow(Qr)) {
          for (const rr of Sr) this.packing.push({
            text: rr,
            packed: null,
            journalled: this.tailHolds(rr)
          });
          for (const rr of [...this.packing]) this.packHere(rr);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const Zr of Sr) {
          const rr = null === this.journal ? null : yr(Zr);
          null !== rr && this.journal.domTail(rr);
          const Sr = {
            text: Zr,
            packed: null,
            journalled: this.tailHolds(Zr)
          };
          this.packing.push(Sr), this.packer.pack(Zr.text).then((rr => {
            Sr.packed = rr, this.queuePacked()
          }), (() => {
            this.packHere(Sr), this.queuePacked()
          }))
        }
      }
      packHere(rr) {
        const Sr = this.packing.indexOf(rr);
        if (!(Sr < 0)) try {
          rr.packed ??= (0, Tr.b)(rr.text.text)
        } catch (Wr) {
          var Qr, Zr;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", Wr), this.packing.splice(Sr, 1), null === (Qr = this.journal) || void 0 === Qr || Qr.domTailDropped(rr.text.chunkIndex), null === (Zr = rr.onQueued) || void 0 === Zr || Zr.call(rr)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(rr) {
        return this.journalWorks() && Kr(rr)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: rr,
            packed: Sr,
            onQueued: Qr
          } = this.packing.shift();
          this.enqueue(rr.chunkIndex, Br(rr, Sr)), null === Qr || void 0 === Qr || Qr()
        }
      }
      enqueue(rr, Sr) {
        var Qr;
        if (null === Sr) return void(null === (Qr = this.journal) || void 0 === Qr || Qr.domTailDropped(rr));
        const {
          startMs: Zr,
          endMs: Wr,
          summary: ar,
          holdsSnapshot: jr
        } = Sr, Ir = Sr.bytes.buffer, fr = {
          startMs: Zr,
          endMs: Wr,
          byteLength: Ir.byteLength,
          summary: ar
        }, Er = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: Ir,
          meta: {
            type: "dom",
            chunk: fr
          },
          dropLast: jr
        });
        var pr, xr;
        null === Er ? null === (pr = this.journal) || void 0 === pr || pr.domTailDropped(rr) : null === (xr = this.journal) || void 0 === xr || xr.domQueued(Er, Ir, fr, rr)
      }
    }
    var Or = Qr(41371);
    var Lr = Qr(41379),
      lr = Qr(4091),
      Xr = Qr(109),
      Pr = Qr(120),
      Hr = Qr(43),
      qr = Qr(5448);
    const Rr = {
      logStats: !1
    };

    function gr(rr) {
      const Sr = Hr.j.getItem(rr);
      return "number" === typeof Sr && Number.isFinite(Sr) ? Sr : null
    }

    function Cr(rr, Sr, Qr, Zr) {
      const Wr = Hr.j.getItem(rr);
      return Wr === Sr ? [(0, Xr.getOperatingSystem)()] : Wr === Qr ? [] : Zr
    }

    function Mr(rr) {
      const Sr = Hr.j.getItem("replayGrab");
      return "stream" === Sr ? [(0, lr.d)()] : "videoFrame" === Sr || "bitmap" === Sr ? [] : rr
    }
    const Gr = "/v1/release",
      kr = fr;
    var Ar = Qr(1267),
      Vr = Qr(41387),
      ir = Qr(41392),
      wr = Qr(41398);

    function cr(rr) {
      return `replayJoiner/${rr}`
    }
    class Fr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vr.g;
        this.baseUrl = rr, this.keepalive = Sr
      }
      postPart(rr, Sr) {
        const Qr = (0, ir.e)(rr, Sr),
          Zr = 15e3 + (Wr = Qr.size, Math.ceil(Wr / 16384 * 1e3));
        var Wr;
        return this.post("/v1/part", Qr, Qr.size, Zr, rr.sequence)
      }
      finish(rr) {
        const Sr = JSON.stringify(rr);
        return this.post("/v1/finish", Sr, (0, Vr.i)(Sr), 3e4, rr.sequence)
      }
      release(rr) {
        return !this.keepalive.isInFlight(cr(rr.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${Gr}`, JSON.stringify(rr))
      }
      async post(rr, Sr, Qr, Zr, Wr) {
        const ar = `${this.baseUrl}${rr}`,
          jr = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: Sr,
            signal: (0, Ar.o)(Zr)
          },
          Ir = Qr <= Vr.d ? await this.keepalive.fetch(ar, jr, Qr, cr(Wr)) : await fetch(ar, jr);
        if (!Ir.ok) throw new wr.d(`Part joiner ${rr} failed with ${Ir.status}`, Ir.status);
        return await Ir.json()
      }
    }

    function or(rr) {
      return {
        releaseUrl: `${rr.url}${Gr}`,
        token: rr.token,
        relay: {
          url: `${rr.url}/v1/relay`,
          maxBytes: kr
        }
      }
    }
    var br = Qr(7464),
      Jr = Qr(41403),
      Dr = Qr(41405),
      dr = Qr(41413);

    function sr() {
      return (0, Lr.b)().manifestUrl
    }
    const ur = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class rS {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = Sr, this.sendEnabled = Qr, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...ur,
          ...Zr
        };
        const Wr = Math.round((0, Jr.e)());
        this.manifest = {
          recordingId: rr,
          startedAtMs: Wr,
          endedAtMs: Wr,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(rr, Sr, Qr) {
        const Zr = {
            sequence: rr,
            ...Sr,
            startMs: Math.round(Sr.startMs),
            endMs: Math.round(Sr.endMs),
            ...null === Qr ? {} : {
              parts: Qr
            }
          },
          Wr = this.manifest.videoSegments.findIndex((Sr => Sr.sequence === rr)); - 1 === Wr ? this.manifest.videoSegments.push(Zr) : this.manifest.videoSegments[Wr] = Zr, this.sendSoon()
      }
      setStill(rr, Sr) {
        var Qr, Zr;
        rr > (null !== (Qr = null === (Zr = this.manifest.still) || void 0 === Zr ? void 0 : Zr.atMs) && void 0 !== Qr ? Qr : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(rr),
          sequence: Sr
        }, this.sendSoon())
      }
      addTelemetrySegment(rr, Sr, Qr) {
        this.manifest.telemetrySegments.push({
          sequence: rr,
          startMs: Math.round(Sr),
          endMs: Math.round(Qr)
        }), this.sendSoon()
      }
      addDomSegment(rr) {
        this.pendingDom.add(rr), this.sendSoon()
      }
      addCreatorGrant(rr, Sr) {
        this.creatorGrants.set(rr, Sr)
      }
      gameJoined(rr) {
        this.gameLeft(), this.manifest.games.push({
          ...rr,
          joinedAtMs: Math.round((0, Jr.e)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(rr) {
        const Sr = this.manifest.games.at(-1);
        return !(!Sr || (null === rr ? null !== Sr.leftAtMs : Sr.gameNameWithVariation !== rr)) && (Sr.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(rr) {
        const Sr = this.manifest.games.at(-1);
        Sr && null === Sr.leftAtMs && (Sr[rr] = !0)
      }
      updateCurrentStay(rr) {
        var Sr, Qr, Zr;
        const Wr = this.manifest.games.at(-1);
        if (!Wr || null !== Wr.leftAtMs) return !1;
        const ar = (0, br.j)(Wr.furthestStep, rr.furthestStep),
          jr = Math.max(null !== (Sr = Wr.unboundKeyPresses) && void 0 !== Sr ? Sr : 0, null !== (Qr = rr.unboundKeyPresses) && void 0 !== Qr ? Qr : 0);
        return (ar !== Wr.furthestStep || jr !== (null !== (Zr = Wr.unboundKeyPresses) && void 0 !== Zr ? Zr : 0)) && (void 0 !== ar && (Wr.furthestStep = ar), jr > 0 && (Wr.unboundKeyPresses = jr), !0)
      }
      gameLeft() {
        const rr = this.manifest.games.at(-1);
        rr && null === rr.leftAtMs && (rr.leftAtMs = Math.round((0, Jr.e)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(rr) {
        this.schedule(1e3, rr)
      }
      send() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var Sr;
        if (this.sending) return void(this.queuedSend = SS(null !== (Sr = this.queuedSend) && void 0 !== Sr ? Sr : [], rr));
        const Qr = this.prepareSend(rr);
        null !== Qr && (this.sending = !0, this.postInTurn(Qr).then((rr => {
          this.sending = !1, this.retries = "retryLater" === rr ? this.retries + 1 : 0;
          const Sr = this.queuedSend;
          null !== Sr ? (this.queuedSend = null, this.send(Sr)) : "retryLater" === rr && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: Qr
          }
          of null !== (Sr = this.prepareSend(rr)) && void 0 !== Sr ? Sr : []) {
          var Sr;
          Vr.g.sendBeacon(sr(), JSON.stringify(Qr)) || (0, Dr.e)(sr(), Qr)
        }
      }
      async postInTurn(rr) {
        for (const {
            request: Sr,
            items: Qr
          }
          of rr) {
          const rr = await (0, Dr.e)(sr(), Sr);
          if ("retryLater" === rr) return rr;
          for (const Sr of Qr) Sr.ack("uploaded" === rr);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(rr, Sr) {
        const Qr = Date.now() + rr;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= Qr) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const Zr = setTimeout((() => {
          this.send(Sr())
        }), rr);
        this.sendTimer = {
          timer: Zr,
          dueMs: Qr
        }
      }
      prepareSend(rr) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, Jr.e)());
        const Sr = this.pendingItems(rr);
        this.options.onSend({
          ...this.manifest,
          games: Sr.flatMap((rr => "games" === rr.list ? [rr.value] : []))
        });
        const {
          recordingId: Qr,
          startedAtMs: Zr,
          endedAtMs: Wr,
          still: ar
        } = this.manifest, jr = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: Qr,
            startedAtMs: Zr,
            endedAtMs: Wr,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === ar ? {} : {
              still: ar
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, dr.b)(jr, Sr)
      }
      pendingItems(rr) {
        const Sr = [];
        for (const Zr of this.creatorGrants.values()) this.ackedGrants.has(Zr) || Sr.push({
          list: "creatorGrants",
          value: Zr,
          ack: () => {
            this.ackedGrants.add(Zr)
          }
        });
        for (const Zr of this.manifest.games) {
          const rr = JSON.stringify(Zr);
          this.ackedGames.get(Zr) !== rr && Sr.push({
            list: "games",
            value: {
              ...Zr
            },
            ack: () => {
              this.ackedGames.set(Zr, rr)
            }
          })
        }
        for (const Zr of this.manifest.videoSegments) this.ackedVideo.get(Zr.sequence) !== Zr && Sr.push({
          list: "videoSegments",
          value: Zr,
          ack: rr => {
            this.ackedVideo.set(Zr.sequence, Zr), rr && this.options.onListed({
              list: "videoSegments",
              value: Zr
            })
          }
        });
        const Qr = new Set;
        for (const Zr of this.manifest.telemetrySegments) Qr.add(Zr.sequence), this.ackedTelemetry.has(Zr) || Sr.push({
          list: "telemetrySegments",
          value: Zr,
          ack: rr => {
            this.ackedTelemetry.add(Zr), rr && this.options.onListed({
              list: "telemetrySegments",
              value: Zr
            })
          }
        });
        for (const Zr of this.pendingDom) Sr.push({
          list: "domSegments",
          value: Zr,
          ack: rr => {
            this.pendingDom.delete(Zr), rr && this.options.onListed({
              list: "domSegments",
              value: Zr
            })
          }
        });
        for (const Zr of SS([], rr)) Qr.has(Zr.sequence) || Sr.push({
          list: "telemetrySegments",
          value: Zr,
          ack: () => {}
        });
        return Sr
      }
    }

    function SS(rr, Sr) {
      const Qr = [...rr];
      for (const Zr of Sr) Qr.some((rr => rr.sequence === Zr.sequence)) || Qr.push({
        sequence: Zr.sequence,
        startMs: Math.round(Zr.startMs),
        endMs: Math.round(Zr.endMs)
      });
      return Qr
    }
    var QS = Qr(41385),
      ZS = Qr(5459);

    function WS(rr) {
      return {
        ...rr,
        videoSegments: [],
        telemetrySegments: [],
        games: rr.games.map((rr => ({
          ...rr
        })))
      }
    }
    class aS {
      constructor(rr, Sr, Qr, Zr) {
        var Wr;
        this.journal = rr, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: Sr.recordingId,
          uploadToken: Sr.uploadToken,
          expiresAtMs: Sr.expiresAtMs,
          nextVideoSequence: 0,
          manifest: WS(Qr),
          endpoints: Zr,
          lateUploadUntilMs: Sr.expiresAtMs + QS.c,
          ...void 0 === Sr.partJoiner ? {} : {
            partJoiner: or(Sr.partJoiner)
          }
        }, null === (Wr = navigator.locks) || void 0 === Wr || Wr.request((0, ZS.w)(Sr.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(rr) {
        this.record.manifest = WS(rr), this.putRecording()
      }
      videoQueued(rr, Sr) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, Sr + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), rr, Sr)
      }
      videoPartLanded(rr, Sr, Qr) {
        this.landedVideo.set(rr, {
          segmentId: rr,
          ...Sr
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: rr,
          ...Sr
        }, Qr)
      }
      telemetryQueued(rr, Sr, Qr, Zr) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: rr,
          startMs: Qr,
          endMs: Zr,
          bytes: Sr
        })
      }
      videoUploaded(rr) {
        this.journal.removeVideoChunks(this.record.recordingId, rr)
      }
      videoSettled(rr) {
        this.landedVideo.delete(rr), this.journal.removeVideo(this.record.recordingId, rr)
      }
      telemetryLanded(rr, Sr, Qr, Zr) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: rr,
          startMs: Qr,
          endMs: Zr,
          bytes: Sr,
          landed: !0
        })
      }
      telemetrySettled(rr) {
        this.journal.removeTelemetry(this.record.recordingId, rr)
      }
      domQueued(rr, Sr, Qr, Zr) {
        var Wr;
        this.record.nextDomSequence = Math.max(null !== (Wr = this.record.nextDomSequence) && void 0 !== Wr ? Wr : 0, rr + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: rr,
          chunk: Qr,
          bytes: Sr
        }, Zr)
      }
      domTail(rr) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...rr
        })
      }
      domTailDropped(rr) {
        this.journal.removeDomTail(this.record.recordingId, rr)
      }
      domLanded(rr, Sr) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: rr,
          chunk: Sr,
          bytes: null
        })
      }
      domSettled(rr) {
        this.journal.removeDom(this.record.recordingId, rr)
      }
      setMarker() {
        Hr.j.setItem(ZS.n, !0)
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
    class jS {
      constructor(rr) {
        this.deps = rr, this.pageHiding = !1, this.exitFlushedAtMs = -1 / 0
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(rr) {
        document.addEventListener("visibilitychange", (() => {
          const rr = document.hidden;
          this.deps.writeEvent(rr ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: rr
          }), rr ? (this.flushTelemetryOnExit(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording()) : this.exitFlushedAtMs = -1 / 0
        }), {
          signal: rr
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: rr
        }), window.addEventListener("pagehide", (rr => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.flushTelemetryOnExit(), this.deps.stills.beacon(), this.sendManifest(), rr.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: rr
        })
      }
      flushTelemetryOnExit() {
        const rr = performance.now();
        rr - this.exitFlushedAtMs > 1e3 && (this.deps.flushTelemetry(), this.exitFlushedAtMs = rr)
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((rr => {
          let {
            sequence: Sr,
            meta: Qr
          } = rr;
          return "telemetry" === Qr.type ? [{
            sequence: Sr,
            startMs: Qr.startMs,
            endMs: Qr.endMs
          }] : []
        }))
      }
    }
    var IS = Qr(37500),
      fS = Qr.n(IS);

    function ES() {
      return fS()('/*! For license information please see sessionReplayVideo.worker.32b3983d.worker.js.LICENSE.txt */\n(()=>{var rr={15:()=>{}},Sr={};function Qr(Zr){var Wr=Sr[Zr];if(void 0!==Wr)return Wr.exports;var ar=Sr[Zr]={exports:{}};return rr[Zr](ar,ar.exports,Qr),ar.exports}(()=>{var rr,Sr=Object.getPrototypeOf?rr=>Object.getPrototypeOf(rr):rr=>rr.__proto__;Qr.t=function(Zr,Wr){if(1&Wr&&(Zr=this(Zr)),8&Wr)return Zr;if("object"===typeof Zr&&Zr){if(4&Wr&&Zr.__esModule)return Zr;if(16&Wr&&"function"===typeof Zr.then)return Zr}var ar=Object.create(null);Qr.r(ar);var jr={};rr=rr||[null,Sr({}),Sr([]),Sr(Sr)];for(var Ir=2&Wr&&Zr;"object"==typeof Ir&&!~rr.indexOf(Ir);Ir=Sr(Ir))Object.getOwnPropertyNames(Ir).forEach((rr=>jr[rr]=()=>Zr[rr]));return jr.default=()=>Zr,Qr.d(ar,jr),ar}})(),Qr.d=(rr,Sr)=>{for(var Zr in Sr)Qr.o(Sr,Zr)&&!Qr.o(rr,Zr)&&Object.defineProperty(rr,Zr,{enumerable:!0,get:Sr[Zr]})},Qr.o=(rr,Sr)=>Object.prototype.hasOwnProperty.call(rr,Sr),Qr.r=rr=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(rr,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(rr,"__esModule",{value:!0})};const Zr="bloxdSessionReplayTails";const Wr=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function ar(rr){return new Promise(((Sr,Qr)=>{rr.onsuccess=()=>{Sr(rr.result)},rr.onerror=()=>{Qr(rr.error)}}))}function jr(rr){return new Promise(((Sr,Qr)=>{rr.oncomplete=()=>{Sr()},rr.onerror=()=>{Qr(rr.error)},rr.onabort=()=>{var Sr;Qr(null!==(Sr=rr.error)&&void 0!==Sr?Sr:new Error("IndexedDB transaction aborted"))}}))}function Ir(rr){return IDBKeyRange.bound([rr],[rr,[]])}function fr(rr,Sr){return IDBKeyRange.bound([rr,Sr],[rr,Sr,[]])}class Er{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(rr){this.write(["recordings"],(Sr=>{Sr.objectStore("recordings").put(rr)}))}putVideoSequence(rr,Sr,Qr){this.write(["recordings","videoSequences"],(Zr=>{Zr.objectStore("recordings").put(rr),Zr.objectStore("videoSequences").put({recordingId:rr.recordingId,segmentId:Sr,sequence:Qr})}))}appendVideo(rr,Sr){this.write(["videoHeaders","videoChunks"],(Qr=>{Qr.objectStore("videoHeaders").put(rr);const Zr=Qr.objectStore("videoChunks");for(const rr of Sr)Zr.put(rr)}))}putVideoProgress(rr,Sr){this.write(["videoProgress","videoChunks"],(Qr=>{if(Qr.objectStore("videoProgress").put(rr),Sr>0){const{recordingId:Zr,segmentId:Wr}=rr;Qr.objectStore("videoChunks").delete(IDBKeyRange.bound([Zr,Wr,0],[Zr,Wr,Sr],!1,!0))}}))}removeVideoChunks(rr,Sr){this.write(["videoChunks"],(Qr=>{Qr.objectStore("videoChunks").delete(fr(rr,Sr))}))}removeVideo(rr,Sr){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(Qr=>{Qr.objectStore("videoHeaders").delete([rr,Sr]),Qr.objectStore("videoChunks").delete(fr(rr,Sr)),Qr.objectStore("videoSequences").delete([rr,Sr]),Qr.objectStore("videoProgress").delete([rr,Sr])}))}putTelemetry(rr){this.write(["telemetry"],(Sr=>{Sr.objectStore("telemetry").put(rr)}))}removeTelemetry(rr,Sr){this.write(["telemetry"],(Qr=>{Qr.objectStore("telemetry").delete([rr,Sr])}))}putDom(rr){this.write(["dom"],(Sr=>{Sr.objectStore("dom").put(rr)}))}queueDom(rr,Sr,Qr){this.write(["recordings","dom","domTail"],(Zr=>{Zr.objectStore("recordings").put(rr),Zr.objectStore("dom").put(Sr),Zr.objectStore("domTail").delete(fr(Sr.recordingId,Qr))}),(Zr=>{console.warn(`Session replay couldn\'t journal page recording chunk ${Sr.sequence}; a closing tab may lose it.`,Zr),this.write(["recordings","domTail"],(Zr=>{Zr.objectStore("recordings").put(rr),Zr.objectStore("domTail").delete(fr(Sr.recordingId,Qr))}))}))}putDomTail(rr){this.tailRecordings.add(rr.recordingId),this.write(["domTail"],(Sr=>{Sr.objectStore("domTail").put(rr)}))}removeDomTail(rr,Sr){this.write(["domTail"],(Qr=>{Qr.objectStore("domTail").delete(fr(rr,Sr))}))}removeDom(rr,Sr){this.write(["dom"],(Qr=>{Qr.objectStore("dom").delete([rr,Sr])}))}async listRecordings(){const rr=await this.open();return await ar(rr.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(rr){const Sr=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),Qr=Ir(rr.recordingId),Zr=rr=>ar(Sr.objectStore(rr).getAll(Qr)),[Wr,jr,fr,Er,pr,xr,mr]=await Promise.all([Zr("videoHeaders"),Zr("videoChunks"),Zr("videoSequences"),Zr("videoProgress"),Zr("telemetry"),Zr("dom"),Zr("domTail")]);return{recording:rr,telemetry:pr,dom:xr,domTails:mr,video:Wr.map((rr=>{var Sr,Qr,Zr;return{header:rr,sequence:null!==(Sr=null===(Qr=fr.find((Sr=>Sr.segmentId===rr.segmentId)))||void 0===Qr?void 0:Qr.sequence)&&void 0!==Sr?Sr:null,progress:null!==(Zr=Er.find((Sr=>Sr.segmentId===rr.segmentId)))&&void 0!==Zr?Zr:null,chunks:jr.filter((Sr=>Sr.segmentId===rr.segmentId))}}))}}async deleteRecording(rr){const Sr=(await this.open()).transaction([...Wr],"readwrite");Sr.objectStore("recordings").delete(rr);for(const Qr of Wr.slice(1))Sr.objectStore(Qr).delete(Ir(rr));await jr(Sr)}async forgetSent(rr,Sr){const Qr=(await this.open()).transaction([...Wr],"readwrite"),{recordingId:Zr}=rr;Qr.objectStore("recordings").put(rr);for(const Wr of Sr.videoSegmentIds)Qr.objectStore("videoHeaders").delete([Zr,Wr]),Qr.objectStore("videoChunks").delete(fr(Zr,Wr)),Qr.objectStore("videoSequences").delete([Zr,Wr]),Qr.objectStore("videoProgress").delete([Zr,Wr]);for(const Wr of Sr.telemetrySequences)Qr.objectStore("telemetry").delete([Zr,Wr]);for(const Wr of Sr.domSequences)Qr.objectStore("dom").delete([Zr,Wr]);for(const Wr of Sr.domTailChunks)Qr.objectStore("domTail").delete(fr(Zr,Wr));await jr(Qr)}write(rr,Sr){let Qr=arguments.length>2&&void 0!==arguments[2]?arguments[2]:rr=>{this.fail(rr)};if(this.failed)return;const Zr=Zr=>{try{var Wr;const ar=Zr.transaction(rr,"readwrite");Sr(ar),null===(Wr=ar.commit)||void 0===Wr||Wr.call(ar),jr(ar).catch(Qr)}catch(ar){Qr(ar)}};null===this.db?this.open().then(Zr,(rr=>{this.fail(rr)})):Zr(this.db)}fail(rr){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",rr),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const rr=rr=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",rr)};try{const Sr=this.db.transaction(["domTail"],"readwrite");for(const rr of this.tailRecordings)Sr.objectStore("domTail").delete(Ir(rr));jr(Sr).catch(rr)}catch(Sr){rr(Sr)}}open(){return this.opening??=new Promise(((rr,Sr)=>{const Qr=indexedDB.open(Zr,4);Qr.onupgradeneeded=rr=>{const Sr=Qr.result;rr.oldVersion<1&&(Sr.createObjectStore("recordings",{keyPath:"recordingId"}),Sr.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),Sr.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),Sr.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),Sr.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),rr.oldVersion<2&&Sr.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),rr.oldVersion<3&&Sr.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),Sr.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let Wr=!1;Qr.onblocked=()=>{Wr=!0,Sr(new Error("An older tab holds the upload journal at an earlier version"))},Qr.onsuccess=()=>{Wr?Qr.result.close():(this.db=Qr.result,this.db.onversionchange=()=>{var rr;this.dropTails(),null===(rr=this.db)||void 0===rr||rr.close(),this.db=null,this.opening=null},rr(Qr.result))},Qr.onerror=()=>{Sr(Qr.error)}})),this.opening}}const pr=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class xr{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return pr[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(rr){this.firstSampleMs??=rr.nowMs;const Sr=null!==rr.pingMs&&rr.pingMs>300,Qr=rr.nowMs-this.firstSampleMs>=3e4;Qr&&(null!==rr.gameFps&&rr.gameFps<24||Sr)?this.gameStrugglingSinceMs??=rr.nowMs:this.gameStrugglingSinceMs=null,Qr&&rr.encoderBackpressureDrops>0?this.backpressureSinceMs??=rr.nowMs:this.backpressureSinceMs=null;const Zr=null!==this.backpressureSinceMs&&rr.nowMs-this.backpressureSinceMs>=3e3,Wr=Zr||null!==this.gameStrugglingSinceMs&&rr.nowMs-this.gameStrugglingSinceMs>=1e4,ar=this.steppedDownForGameFps?45:24,jr=0===rr.encoderBackpressureDrops&&!Sr&&(null===rr.gameFps||rr.gameFps>=ar);return Wr?(this.healthySinceMs=null,this.level<pr.length-1&&rr.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=rr.nowMs,this.lastChangeReason=Zr?"encoderBackpressure":Sr?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):jr&&0!==this.level?(this.healthySinceMs??=rr.nowMs,rr.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=rr.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function mr(rr,Sr){return rr.width===Sr.width&&rr.height===Sr.height}function Nr(rr){return Math.max(2,2*Math.floor(rr/2))}function Ur(rr){return Math.ceil(rr.width/16)*Math.ceil(rr.height/16)}function tr(rr,Sr,Qr){const Zr=rr.bitrate*Ur(Sr)/rr.maxMacroblocks;return Qr*Math.min(rr.bitrate,Math.max(rr.minBitrate,Zr/Qr))}class hr{constructor(rr){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/rr}setMaxFps(rr){this.intervalMs=1e3/rr}shouldKeep(rr){return!(rr<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=rr-this.nextDueMs>this.intervalMs?rr+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const zr=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],Yr=["variable","constant"],nr=["realtime","quality"],er=["quality","realtime"];class Kr{constructor(){this.canvas=null,this.context=null}scale(rr,Sr){if(rr.displayWidth===Sr.width&&rr.displayHeight===Sr.height)return rr;return this.contextFor(Sr).drawImage(rr,0,0,Sr.width,Sr.height),new VideoFrame(this.canvas,{timestamp:rr.timestamp,alpha:"discard"})}contextFor(rr){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(rr.width,rr.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===rr.width&&this.canvas.height===rr.height||(this.canvas.width=rr.width,this.canvas.height=rr.height),this.context}}const yr=[...[.7,.6,.5,.42,.35].map((rr=>({width:640,quality:rr}))),{width:480,quality:.35},{width:360,quality:.35}],Br=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class Tr{constructor(rr,Sr){this.steps=rr,this.targetBytes=Sr,this.index=0}get step(){return this.steps[this.index]}record(rr){rr>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):rr<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class vr{constructor(rr){this.post=rr,this.full=new Tr(yr,28e3),this.small=new Tr(Br,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(rr,Sr){if(!(this.failed||this.encoding||rr.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=rr.timestamp;try{const Qr=Or(rr,rr.displayWidth,rr.displayHeight,this.full.step.width),Zr=Or(Qr,Qr.width,Qr.height,this.small.step.width);this.encoding=!0,this.encode(Qr,Zr,Sr).finally((()=>{this.encoding=!1}))}catch(Qr){this.fail(Qr)}}}async encode(rr,Sr,Qr){try{const[Zr,Wr]=await Promise.all([rr.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),Sr.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(Zr.size),this.small.record(Wr.size);const ar=await Zr.arrayBuffer(),jr=Wr.size<=8192?await Wr.arrayBuffer():null;this.post({type:"still",bytes:ar,small:jr,atMs:Qr},null===jr?[ar]:[ar,jr])}catch(Zr){this.fail(Zr)}}fail(rr){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",rr)}}function Or(rr,Sr,Qr,Zr){const Wr=Math.min(Zr,Sr),ar=Math.max(1,Math.round(Qr*Wr/Sr)),jr=new OffscreenCanvas(Wr,ar),Ir=jr.getContext("2d");if(null===Ir)throw new Error("no 2D context");return Ir.drawImage(rr,0,0,Wr,ar),jr}let Lr=Date.now()-performance.now();function lr(){const rr=performance.now(),Sr=Date.now();return Math.abs(Sr-(rr+Lr))>20&&(Lr=Sr-rr),rr+Lr}function Xr(rr){if(!rr)throw new Error("Assertion failed.")}const Pr=Math.PI/180,Hr=(Math.PI,[1,0,0,0,1,0,0,0,1]),qr=rr=>{const Sr=rr*Pr,Qr=Math.round(Math.cos(Sr)),Zr=Math.round(Math.sin(Sr));return[Qr,Zr,0,-Zr,Qr,0,0,0,1]},Rr=(rr,Sr)=>[1,0,0,0,1,0,rr,Sr,1],gr=(rr,Sr)=>{const Qr=new Array(9);for(let Zr=0;Zr<3;Zr++)for(let Wr=0;Wr<3;Wr++)Qr[3*Zr+Wr]=rr[3*Zr]*Sr[Wr]+rr[3*Zr+1]*Sr[3+Wr]+rr[3*Zr+2]*Sr[6+Wr];return Qr},Cr=rr=>rr&&rr[rr.length-1],Mr=rr=>rr>=0&&rr<2**32,Gr=rr=>{let Sr=0;for(;0===rr.readBits(1)&&Sr<32;)Sr++;if(Sr>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<Sr)-1+rr.readBits(Sr)},kr=rr=>{const Sr=Gr(rr);return 0===(1&Sr)?-(Sr>>1):Sr+1>>1},Ar=rr=>rr.constructor===Uint8Array?rr:ArrayBuffer.isView(rr)?new Uint8Array(rr.buffer,rr.byteOffset,rr.byteLength):new Uint8Array(rr),Vr=rr=>rr.constructor===DataView?rr:ArrayBuffer.isView(rr)?new DataView(rr.buffer,rr.byteOffset,rr.byteLength):new DataView(rr),ir="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let rr=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const Sr=new Uint8Array(3*rr.length);let Qr=0;for(let Zr=0;Zr<rr.length;Zr++){let Wr=rr.charCodeAt(Zr);if(Wr<128)Sr[Qr++]=Wr;else if(Wr<2048)Sr[Qr++]=192|Wr>>6,Sr[Qr++]=128|63&Wr;else if(Wr<55296||Wr>57343)Sr[Qr++]=224|Wr>>12,Sr[Qr++]=128|Wr>>6&63,Sr[Qr++]=128|63&Wr;else{const ar=Zr+1<rr.length?rr.charCodeAt(Zr+1):0;Wr<56320&&ar>=56320&&ar<=57343?(Wr=65536+(Wr-55296<<10)+(ar-56320),Zr++,Sr[Qr++]=240|Wr>>18,Sr[Qr++]=128|Wr>>12&63,Sr[Qr++]=128|Wr>>6&63,Sr[Qr++]=128|63&Wr):(Sr[Qr++]=239,Sr[Qr++]=191,Sr[Qr++]=189)}}return Sr.slice(0,Qr)}},wr=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new ir),cr={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Fr={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},or={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},br=rr=>!rr||null==rr.primaries&&null==rr.transfer&&null==rr.matrix&&null==rr.fullRange,Jr=rr=>rr instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&rr instanceof SharedArrayBuffer||ArrayBuffer.isView(rr);class Dr{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let rr;const Sr=new Promise((Sr=>{let Qr=!1;rr=()=>{Qr||(Sr(),this.pending--,Qr=!0)}})),Qr=this.currentPromise;return this.currentPromise=Sr,this.pending++,await Qr,rr}}const dr=()=>{let rr,Sr;return{promise:new Promise(((Qr,Zr)=>{rr=Qr,Sr=Zr})),resolve:rr,reject:Sr}},sr=rr=>{throw new Error(`Unexpected value: ${rr}`)},ur=(rr,Sr,Qr,Zr)=>{Qr>>>=0,Qr&=16777215,Zr?(rr.setUint8(Sr,255&Qr),rr.setUint8(Sr+1,Qr>>>8&255),rr.setUint8(Sr+2,Qr>>>16&255)):(rr.setUint8(Sr,Qr>>>16&255),rr.setUint8(Sr+1,Qr>>>8&255),rr.setUint8(Sr+2,255&Qr))},rS="und",SS=rr=>{let Sr=0;for(;0!==rr;)rr&=rr-1,Sr++;return Sr},QS=/^[a-z]{3}$/,ZS=1e6*(1+Number.EPSILON);const WS=(async()=>{})().constructor,aS=rr=>rr instanceof WS||rr instanceof Promise||"function"===typeof rr?.then,jS=function*(rr){for(const Sr in rr){const Qr=rr[Sr];void 0!==Qr&&(yield{key:Sr,value:Qr})}},IS=rr=>"number"===typeof rr&&!Number.isNaN(rr),fS=rr=>{Xr(Number.isInteger(rr.num)),Xr(Number.isInteger(rr.den)),Xr(0!==rr.den);let Sr=Math.abs(rr.num),Qr=Math.abs(rr.den);for(;0!==Qr;){const rr=Sr%Qr;Sr=Qr,Qr=rr}const Zr=Sr||1;return{num:rr.num/Zr,den:rr.den/Zr}};new Map,new Map;const ES=rr=>Array.isArray(rr)?rr:[rr];class pS{constructor(){this._listeners=new Map}on(rr,Sr,Qr){this._listeners.has(rr)||this._listeners.set(rr,new Set);const Zr={Wx:Sr,once:Qr?.once??!1};return this._listeners.get(rr).add(Zr),()=>{this._listeners.get(rr)?.delete(Zr)}}_emit(){for(var rr=arguments.length,Sr=new Array(rr),Qr=0;Qr<rr;Qr++)Sr[Qr]=arguments[Qr];const[Zr,Wr]=Sr,ar=this._listeners.get(Zr);if(ar)for(const Ir of ar){try{Ir.Wx(Wr)}catch(jr){console.error(jr)}Ir.once&&ar.delete(Ir)}}}const xS=rr=>null!==rr&&"object"===typeof rr&&Object.getPrototypeOf(rr)===Object.prototype&&Object.values(rr).every((rr=>"string"===typeof rr));class mS{constructor(rr,Sr){if(this.data=rr,this.mimeType=Sr,!(rr instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof Sr)throw new TypeError("mimeType must be a string.")}}class NS{constructor(rr,Sr,Qr,Zr){if(this.data=rr,this.mimeType=Sr,this.name=Qr,this.description=Zr,!(rr instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==Sr&&"string"!==typeof Sr)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==Qr&&"string"!==typeof Qr)throw new TypeError("name, when provided, must be a string.");if(void 0!==Zr&&"string"!==typeof Zr)throw new TypeError("description, when provided, must be a string.")}}class US{constructor(rr){this.bytes=rr,this.pos=0}seekToByte(rr){this.pos=8*rr}readBit(){const rr=Math.floor(this.pos/8),Sr=this.bytes[rr]??0,Qr=7-(7&this.pos),Zr=(Sr&1<<Qr)>>Qr;return this.pos++,Zr}readBits(rr){if(1===rr)return this.readBit();let Sr=0;for(let Qr=0;Qr<rr;Qr++)Sr<<=1,Sr|=this.readBit();return Sr}writeBits(rr,Sr){const Qr=this.pos+rr;for(let Zr=this.pos;Zr<Qr;Zr++){const rr=Math.floor(Zr/8);let Wr=this.bytes[rr];const ar=7-(7&Zr);Wr&=~(1<<ar),Wr|=(Sr&1<<Qr-Zr-1)>>Qr-Zr-1<<ar,this.bytes[rr]=Wr}this.pos=Qr}copyBits(rr,Sr){let Qr=0;for(;Qr<rr-7;Qr+=8)this.writeBits(8,Sr.readBits(8));const Zr=rr-Qr;Zr>0&&this.writeBits(Zr,Sr.readBits(Zr))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const rr=this.pos/8,Sr=this.bytes[rr]??0;return this.pos+=8,Sr}skipBits(rr){this.pos+=rr}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const rr=new US(this.bytes);return rr.pos=this.pos,rr}}const tS=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],hS=[-1,1,2,3,4,5,6,8],zS=rr=>{const Sr=5===rr.objectType||29===rr.objectType,Qr=29===rr.objectType,Zr=Sr?rr.outputSampleRate/2:rr.outputSampleRate,Wr=Qr?1:rr.outputNumberOfChannels,ar=hS.indexOf(Wr);if(-1===ar)throw new TypeError(`Unsupported number of channels: ${rr.outputNumberOfChannels}`);let jr=16;rr.objectType>=32&&(jr+=6),15===eS(Zr)&&(jr+=24),Sr&&(jr+=9,15===eS(rr.outputSampleRate)&&(jr+=24));const Ir=Math.ceil(jr/8),fr=new Uint8Array(Ir),Er=new US(fr);return YS(Er,rr.objectType),nS(Er,Zr),Er.writeBits(4,ar),Sr&&(nS(Er,rr.outputSampleRate),YS(Er,2)),Er.writeBits(3,0),fr},YS=(rr,Sr)=>{Sr<32?rr.writeBits(5,Sr):(rr.writeBits(5,31),rr.writeBits(6,Sr-32))},nS=(rr,Sr)=>{const Qr=eS(Sr);rr.writeBits(4,Qr),15===Qr&&rr.writeBits(24,Sr)},eS=rr=>{const Sr=tS.indexOf(rr);return-1===Sr?15:Sr};var KS;!function(rr){rr[rr.Silent=0]="Silent",rr[rr.Errors=1]="Errors",rr[rr.Warnings=2]="Warnings",rr[rr.Info=3]="Info"}(KS||(KS={}));class yS{constructor(){}static get level(){return yS._level}static set level(rr){if(rr!==KS.Silent&&rr!==KS.Errors&&rr!==KS.Warnings&&rr!==KS.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");yS._level=rr}static get _emitter(){return yS._emitterInstance??=new pS}static on(rr,Sr,Qr){return yS._emitter.on(rr,Sr,Qr)}static _error(){for(var rr=arguments.length,Sr=new Array(rr),Qr=0;Qr<rr;Qr++)Sr[Qr]=arguments[Qr];yS._emitter._emit("error",Sr),yS._level>=KS.Errors&&console.error(...Sr)}static _warn(){for(var rr=arguments.length,Sr=new Array(rr),Qr=0;Qr<rr;Qr++)Sr[Qr]=arguments[Qr];yS._emitter._emit("warn",Sr),yS._level>=KS.Warnings&&console.warn(...Sr)}static _info(){for(var rr=arguments.length,Sr=new Array(rr),Qr=0;Qr<rr;Qr++)Sr[Qr]=arguments[Qr];yS._emitter._emit("info",Sr),yS._level>=KS.Info&&console.info(...Sr)}}yS._level=KS.Info,yS._emitterInstance=null;const BS=[48e3,44100,32e3],TS=[24e3,22050,16e3],vS="Mediabunny v1.61.3";var OS,LS;!function(rr){rr[rr.NON_IDR_SLICE=1]="NON_IDR_SLICE",rr[rr.SLICE_DPA=2]="SLICE_DPA",rr[rr.SLICE_DPB=3]="SLICE_DPB",rr[rr.SLICE_DPC=4]="SLICE_DPC",rr[rr.IDR=5]="IDR",rr[rr.SEI=6]="SEI",rr[rr.SPS=7]="SPS",rr[rr.PPS=8]="PPS",rr[rr.AUD=9]="AUD",rr[rr.SPS_EXT=13]="SPS_EXT"}(OS||(OS={})),function(rr){rr[rr.RASL_N=8]="RASL_N",rr[rr.RASL_R=9]="RASL_R",rr[rr.BLA_W_LP=16]="BLA_W_LP",rr[rr.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",rr[rr.VPS_NUT=32]="VPS_NUT",rr[rr.SPS_NUT=33]="SPS_NUT",rr[rr.PPS_NUT=34]="PPS_NUT",rr[rr.AUD_NUT=35]="AUD_NUT",rr[rr.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",rr[rr.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(LS||(LS={}));const lS=function*(rr){let Sr=0,Qr=-1;for(;Sr<rr.length-2;){const Zr=rr.indexOf(0,Sr);if(-1===Zr||Zr>=rr.length-2)break;Sr=Zr;let Wr=0;Sr+3<rr.length&&0===rr[Sr+1]&&0===rr[Sr+2]&&1===rr[Sr+3]?Wr=4:0===rr[Sr+1]&&1===rr[Sr+2]&&(Wr=3),0!==Wr?(-1!==Qr&&Sr>Qr&&(yield{offset:Qr,length:Sr-Qr}),Qr=Sr+Wr,Sr=Qr):Sr++}-1!==Qr&&Qr<rr.length&&(yield{offset:Qr,length:rr.length-Qr})},XS=rr=>31&rr,PS=rr=>{const Sr=[],Qr=rr.length;for(let Zr=0;Zr<Qr;Zr++)Zr+2<Qr&&0===rr[Zr]&&0===rr[Zr+1]&&3===rr[Zr+2]?(Sr.push(0,0),Zr+=2):Sr.push(rr[Zr]);return new Uint8Array(Sr)},HS=(new Uint8Array([0,0,0,1]),(rr,Sr)=>{const Qr=rr.reduce(((rr,Qr)=>rr+Sr+Qr.byteLength),0),Zr=new Uint8Array(Qr);let Wr=0;for(const ar of rr){const rr=new DataView(Zr.buffer,Zr.byteOffset,Zr.byteLength);switch(Sr){case 1:rr.setUint8(Wr,ar.byteLength);break;case 2:rr.setUint16(Wr,ar.byteLength,!1);break;case 3:ur(rr,Wr,ar.byteLength,!1);break;case 4:rr.setUint32(Wr,ar.byteLength,!1)}Wr+=Sr,Zr.set(ar,Wr),Wr+=ar.byteLength}return Zr}),qS=rr=>{try{const Sr=[],Qr=[],Zr=[];for(const Ir of lS(rr)){const Wr=rr.subarray(Ir.offset,Ir.offset+Ir.length),ar=XS(Wr[0]);ar===OS.SPS?Sr.push(Wr):ar===OS.PPS?Qr.push(Wr):ar===OS.SPS_EXT&&Zr.push(Wr)}if(0===Sr.length)return null;if(0===Qr.length)return null;const Wr=Sr[0],ar=gS(Wr);Xr(null!==ar);const jr=100===ar.profileIdc||110===ar.profileIdc||122===ar.profileIdc||144===ar.profileIdc;return{configurationVersion:1,avcProfileIndication:ar.profileIdc,profileCompatibility:ar.constraintFlags,avcLevelIndication:ar.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:Sr,pictureParameterSets:Qr,chromaFormat:jr?ar.chromaFormatIdc:null,bitDepthLumaMinus8:jr?ar.bitDepthLumaMinus8:null,bitDepthChromaMinus8:jr?ar.bitDepthChromaMinus8:null,sequenceParameterSetExt:jr?Zr:null}}catch(Sr){return yS._error("Error building AVC Decoder Configuration Record:",Sr),null}},RS={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},gS=rr=>{try{const Sr=PS(rr),Qr=new US(Sr);Qr.skipBits(1),Qr.skipBits(2);if(7!==Qr.readBits(5))return null;const Zr=Qr.readAlignedByte(),Wr=Qr.readAlignedByte(),ar=Qr.readAlignedByte();Gr(Qr);let jr=1,Ir=0,fr=0,Er=0;if(100===Zr||110===Zr||122===Zr||244===Zr||44===Zr||83===Zr||86===Zr||118===Zr||128===Zr){jr=Gr(Qr),3===jr&&(Er=Qr.readBits(1)),Ir=Gr(Qr),fr=Gr(Qr),Qr.skipBits(1);if(Qr.readBits(1))for(let rr=0;rr<(3!==jr?8:12);rr++){if(Qr.readBits(1)){const Sr=rr<6?16:64;let Zr=8,Wr=8;for(let rr=0;rr<Sr;rr++){if(0!==Wr){Wr=(Zr+kr(Qr)+256)%256}Zr=0===Wr?Zr:Wr}}}}Gr(Qr);const pr=Gr(Qr);if(0===pr)Gr(Qr);else if(1===pr){Qr.skipBits(1),kr(Qr),kr(Qr);const rr=Gr(Qr);for(let Sr=0;Sr<rr;Sr++)kr(Qr)}Gr(Qr),Qr.skipBits(1);const xr=Gr(Qr),mr=Gr(Qr),Nr=16*(xr+1),Ur=16*(mr+1);let tr=Nr,hr=Ur;const zr=Qr.readBits(1);zr||Qr.skipBits(1),Qr.skipBits(1);if(Qr.readBits(1)){const rr=Gr(Qr),Sr=Gr(Qr),Zr=Gr(Qr),Wr=Gr(Qr);let ar,Ir;if(0===(0===Er?jr:0))ar=1,Ir=2-zr;else{ar=3===jr?1:2,Ir=(1===jr?2:1)*(2-zr)}tr-=ar*(rr+Sr),hr-=Ir*(Zr+Wr)}let Yr=2,nr=2,er=2,Kr=0,yr={num:1,den:1},Br=null,Tr=null,vr=null,Or=null;const Lr=Qr.pos;if(Qr.readBits(1)){if(Qr.readBits(1)){const rr=Qr.readBits(8);if(255===rr)yr={num:Qr.readBits(16),den:Qr.readBits(16)};else{const Sr=RS[rr];Sr&&(yr=Sr)}}Qr.readBits(1)&&Qr.skipBits(1);if(Qr.readBits(1)){Qr.skipBits(3),Kr=Qr.readBits(1);Qr.readBits(1)&&(Yr=Qr.readBits(8),nr=Qr.readBits(8),er=Qr.readBits(8))}Qr.readBits(1)&&(Gr(Qr),Gr(Qr));Qr.readBits(1)&&(Qr.skipBits(32),Qr.skipBits(32),Qr.skipBits(1));const rr=Qr.readBits(1);rr&&CS(Qr);const Sr=Qr.readBits(1);Sr&&CS(Qr),(rr||Sr)&&Qr.skipBits(1),Qr.skipBits(1),vr=Qr.pos,Or=Qr.readBits(1),Or&&(Qr.skipBits(1),Gr(Qr),Gr(Qr),Gr(Qr),Gr(Qr),Br=Gr(Qr),Tr=Gr(Qr))}if(null===Br){Xr(null===Tr);if(44!==Zr&&86!==Zr&&100!==Zr&&110!==Zr&&122!==Zr&&244!==Zr||!(16&Wr)){const rr=xr+1,Sr=(2-zr)*(mr+1),Qr=UQ.find((rr=>rr.level>=ar))??Cr(UQ),Zr=Math.min(Math.floor(Qr.maxDpbMbs/(rr*Sr)),16);Br=Zr,Tr=Zr}else Br=0,Tr=0}return Xr(null!==Tr),{emulationUnpreventedBytes:Sr,profileIdc:Zr,constraintFlags:Wr,levelIdc:ar,frameMbsOnlyFlag:zr,chromaFormatIdc:jr,bitDepthLumaMinus8:Ir,bitDepthChromaMinus8:fr,codedWidth:Nr,codedHeight:Ur,displayWidth:tr,displayHeight:hr,pixelAspectRatio:yr,colourPrimaries:Yr,matrixCoefficients:er,transferCharacteristics:nr,fullRangeFlag:Kr,numReorderFrames:Br,maxDecFrameBuffering:Tr,vuiParametersFlagBitOffset:Lr,bitstreamRestrictionFlagBitOffset:vr,bitstreamRestrictionFlag:Or}}catch(Sr){return yS._error("Error parsing AVC SPS:",Sr),null}},CS=rr=>{const Sr=Gr(rr);rr.skipBits(4),rr.skipBits(4);for(let Qr=0;Qr<=Sr;Qr++)Gr(rr),Gr(rr),rr.skipBits(1);rr.skipBits(5),rr.skipBits(5),rr.skipBits(5),rr.skipBits(5)},MS=rr=>rr>>1&63,GS=rr=>{try{const Sr=[],Qr=[],Zr=[],Wr=[];for(const fr of lS(rr)){const ar=rr.subarray(fr.offset,fr.offset+fr.length),jr=MS(ar[0]);jr===LS.VPS_NUT?Sr.push(ar):jr===LS.SPS_NUT?Qr.push(ar):jr===LS.PPS_NUT?Zr.push(ar):jr!==LS.PREFIX_SEI_NUT&&jr!==LS.SUFFIX_SEI_NUT||Wr.push(ar)}if(0===Qr.length||0===Zr.length)return null;const ar=(rr=>{try{const Sr=new US(PS(rr));Sr.skipBits(16),Sr.readBits(4);const Qr=Sr.readBits(3),Zr=Sr.readBits(1),{general_profile_space:Wr,general_tier_flag:ar,general_profile_idc:jr,general_profile_compatibility_flags:Ir,general_constraint_indicator_flags:fr,general_level_idc:Er}=kS(Sr,Qr);Gr(Sr);const pr=Gr(Sr);let xr=0;3===pr&&(xr=Sr.readBits(1));const mr=Gr(Sr),Nr=Gr(Sr);let Ur=mr,tr=Nr;if(Sr.readBits(1)){const rr=Gr(Sr),Qr=Gr(Sr),Zr=Gr(Sr),Wr=Gr(Sr);let ar=1,jr=1;const Ir=0===xr?pr:0;1===Ir?(ar=2,jr=2):2===Ir&&(ar=2,jr=1),Ur-=(rr+Qr)*ar,tr-=(Zr+Wr)*jr}const hr=Gr(Sr),zr=Gr(Sr);Gr(Sr);const Yr=Sr.readBits(1);let nr=0;for(let rr=Yr?0:Qr;rr<=Qr;rr++)Gr(Sr),nr=Gr(Sr),Gr(Sr);Gr(Sr),Gr(Sr),Gr(Sr),Gr(Sr),Gr(Sr),Gr(Sr),Sr.readBits(1)&&Sr.readBits(1)&&AS(Sr),Sr.skipBits(1),Sr.skipBits(1),Sr.readBits(1)&&(Sr.skipBits(4),Sr.skipBits(4),Gr(Sr),Gr(Sr),Sr.skipBits(1));const er=Gr(Sr);if(VS(Sr,er),Sr.readBits(1)){const rr=Gr(Sr);for(let Qr=0;Qr<rr;Qr++)Gr(Sr),Sr.skipBits(1)}Sr.skipBits(1),Sr.skipBits(1);let Kr=2,yr=2,Br=2,Tr=0,vr=0,Or={num:1,den:1};if(Sr.readBits(1)){const rr=wS(Sr,Qr);Or=rr.pixelAspectRatio,Kr=rr.colourPrimaries,yr=rr.transferCharacteristics,Br=rr.matrixCoefficients,Tr=rr.fullRangeFlag,vr=rr.minSpatialSegmentationIdc}return{displayWidth:Ur,displayHeight:tr,pixelAspectRatio:Or,colourPrimaries:Kr,transferCharacteristics:yr,matrixCoefficients:Br,fullRangeFlag:Tr,maxDecFrameBuffering:nr+1,spsMaxSubLayersMinus1:Qr,spsTemporalIdNestingFlag:Zr,generalProfileSpace:Wr,generalTierFlag:ar,generalProfileIdc:jr,generalProfileCompatibilityFlags:Ir,generalConstraintIndicatorFlags:fr,generalLevelIdc:Er,chromaFormatIdc:pr,bitDepthLumaMinus8:hr,bitDepthChromaMinus8:zr,minSpatialSegmentationIdc:vr}}catch(Sr){return yS._error("Error parsing HEVC SPS:",Sr),null}})(Qr[0]);if(!ar)return null;let jr=0;if(Zr.length>0){const rr=Zr[0],Sr=new US(PS(rr));Sr.skipBits(16),Gr(Sr),Gr(Sr),Sr.skipBits(1),Sr.skipBits(1),Sr.skipBits(3),Sr.skipBits(1),Sr.skipBits(1),Gr(Sr),Gr(Sr),kr(Sr),Sr.skipBits(1),Sr.skipBits(1),Sr.readBits(1)&&Gr(Sr),kr(Sr),kr(Sr),Sr.skipBits(1),Sr.skipBits(1),Sr.skipBits(1),Sr.skipBits(1);const Qr=Sr.readBits(1),Wr=Sr.readBits(1);jr=Qr||Wr?Qr&&!Wr?2:!Qr&&Wr?3:0:0}const Ir=[...Sr.length?[{arrayCompleteness:1,nalUnitType:LS.VPS_NUT,nalUnits:Sr}]:[],...Qr.length?[{arrayCompleteness:1,nalUnitType:LS.SPS_NUT,nalUnits:Qr}]:[],...Zr.length?[{arrayCompleteness:1,nalUnitType:LS.PPS_NUT,nalUnits:Zr}]:[],...Wr.length?[{arrayCompleteness:1,nalUnitType:MS(Wr[0][0]),nalUnits:Wr}]:[]];return{configurationVersion:1,generalProfileSpace:ar.generalProfileSpace,generalTierFlag:ar.generalTierFlag,generalProfileIdc:ar.generalProfileIdc,generalProfileCompatibilityFlags:ar.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:ar.generalConstraintIndicatorFlags,generalLevelIdc:ar.generalLevelIdc,minSpatialSegmentationIdc:ar.minSpatialSegmentationIdc,parallelismType:jr,chromaFormatIdc:ar.chromaFormatIdc,bitDepthLumaMinus8:ar.bitDepthLumaMinus8,bitDepthChromaMinus8:ar.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:ar.spsMaxSubLayersMinus1+1,temporalIdNested:ar.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:Ir}}catch(Sr){return yS._error("Error building HEVC Decoder Configuration Record:",Sr),null}},kS=(rr,Sr)=>{const Qr=rr.readBits(2),Zr=rr.readBits(1),Wr=rr.readBits(5);let ar=0;for(let pr=0;pr<32;pr++)ar=ar<<1|rr.readBits(1);const jr=new Uint8Array(6);for(let pr=0;pr<6;pr++)jr[pr]=rr.readBits(8);const Ir=rr.readBits(8),fr=[],Er=[];for(let pr=0;pr<Sr;pr++)fr.push(rr.readBits(1)),Er.push(rr.readBits(1));if(Sr>0)for(let pr=Sr;pr<8;pr++)rr.skipBits(2);for(let pr=0;pr<Sr;pr++)fr[pr]&&rr.skipBits(88),Er[pr]&&rr.skipBits(8);return{general_profile_space:Qr,general_tier_flag:Zr,general_profile_idc:Wr,general_profile_compatibility_flags:ar,general_constraint_indicator_flags:jr,general_level_idc:Ir}},AS=rr=>{for(let Sr=0;Sr<4;Sr++)for(let Qr=0;Qr<(3===Sr?2:6);Qr++){if(rr.readBits(1)){const Qr=Math.min(64,1<<4+(Sr<<1));Sr>1&&kr(rr);for(let Sr=0;Sr<Qr;Sr++)kr(rr)}else Gr(rr)}},VS=(rr,Sr)=>{const Qr=[];for(let Zr=0;Zr<Sr;Zr++)Qr[Zr]=iS(rr,Zr,Sr,Qr)},iS=(rr,Sr,Qr,Zr)=>{let Wr=0,ar=0,jr=0;if(0!==Sr&&(ar=rr.readBits(1)),ar){if(Sr===Qr){jr=Sr-(Gr(rr)+1)}else jr=Sr-1;rr.readBits(1),Gr(rr);const ar=Zr[jr]??0;for(let Sr=0;Sr<=ar;Sr++){rr.readBits(1)||rr.readBits(1)}Wr=Zr[jr]}else{const Sr=Gr(rr),Qr=Gr(rr);for(let Zr=0;Zr<Sr;Zr++)Gr(rr),rr.readBits(1);for(let Zr=0;Zr<Qr;Zr++)Gr(rr),rr.readBits(1);Wr=Sr+Qr}return Wr},wS=(rr,Sr)=>{let Qr=2,Zr=2,Wr=2,ar=0,jr=0,Ir={num:1,den:1};if(rr.readBits(1)){const Sr=rr.readBits(8);if(255===Sr)Ir={num:rr.readBits(16),den:rr.readBits(16)};else{const rr=RS[Sr];rr&&(Ir=rr)}}return rr.readBits(1)&&rr.readBits(1),rr.readBits(1)&&(rr.readBits(3),ar=rr.readBits(1),rr.readBits(1)&&(Qr=rr.readBits(8),Zr=rr.readBits(8),Wr=rr.readBits(8))),rr.readBits(1)&&(Gr(rr),Gr(rr)),rr.readBits(1),rr.readBits(1),rr.readBits(1),rr.readBits(1)&&(Gr(rr),Gr(rr),Gr(rr),Gr(rr)),rr.readBits(1)&&(rr.readBits(32),rr.readBits(32),rr.readBits(1)&&Gr(rr),rr.readBits(1)&&cS(rr,!0,Sr)),rr.readBits(1)&&(rr.readBits(1),rr.readBits(1),rr.readBits(1),jr=Gr(rr),Gr(rr),Gr(rr),Gr(rr),Gr(rr)),{pixelAspectRatio:Ir,colourPrimaries:Qr,transferCharacteristics:Zr,matrixCoefficients:Wr,fullRangeFlag:ar,minSpatialSegmentationIdc:jr}},cS=(rr,Sr,Qr)=>{let Zr=!1,Wr=!1,ar=!1;Sr&&(Zr=1===rr.readBits(1),Wr=1===rr.readBits(1),(Zr||Wr)&&(ar=1===rr.readBits(1),ar&&(rr.readBits(8),rr.readBits(5),rr.readBits(1),rr.readBits(5)),rr.readBits(4),rr.readBits(4),ar&&rr.readBits(4),rr.readBits(5),rr.readBits(5),rr.readBits(5)));for(let jr=0;jr<=Qr;jr++){let Sr=!0;1===rr.readBits(1)||(Sr=1===rr.readBits(1));let Qr=!1;Sr?Gr(rr):Qr=1===rr.readBits(1);let jr=1;if(!Qr){jr=Gr(rr)+1}Zr&&FS(rr,jr,ar),Wr&&FS(rr,jr,ar)}},FS=(rr,Sr,Qr)=>{for(let Zr=0;Zr<Sr;Zr++)Gr(rr),Gr(rr),Qr&&(Gr(rr),Gr(rr)),rr.readBits(1)};var oS;!function(rr){rr[rr.audAllowed=0]="audAllowed",rr[rr.beforeFirstVcl=1]="beforeFirstVcl",rr[rr.afterFirstVcl=2]="afterFirstVcl",rr[rr.eoBitstreamAllowed=3]="eoBitstreamAllowed",rr[rr.noMoreDataAllowed=4]="noMoreDataAllowed"}(oS||(oS={}));const bS=rr=>{const Sr=Vr(rr),Qr=Sr.getUint8(9),Zr=Sr.getUint16(10,!0),Wr=Sr.getUint32(12,!0),ar=Sr.getInt16(16,!0),jr=Sr.getUint8(18);let Ir=null;return jr&&(Ir=rr.subarray(19,21+Qr)),{outputChannelCount:Qr,preSkip:Zr,inputSampleRate:Wr,outputGain:ar,channelMappingFamily:jr,channelMappingTable:Ir}};var JS;!function(rr){rr[rr.STREAMINFO=0]="STREAMINFO",rr[rr.VORBIS_COMMENT=4]="VORBIS_COMMENT",rr[rr.PICTURE=6]="PICTURE"}(JS||(JS={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const DS=[1,2,3,6],dS=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],sS=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],uS=[16,16,20,20,0,24,24,0],rQ=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],SQ=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],QQ=[32e3,44100,48e3,0],ZQ=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],WQ=[512,1024,2048,4096],aQ=rr=>{const Sr=jQ(rr),Qr=Vr(rr);let Zr=Sr?4*Math.ceil(Sr.frameSize/4):0,Wr=null;for(;Zr+4<=rr.length&&1683496997===Qr.getUint32(Zr);){const Sr=IQ(rr.subarray(Zr));if(!Sr)break;Wr??=Sr,Zr+=Sr.frameSize}if(Sr)return{frameSize:Wr?Zr:Sr.frameSize,sampleRate:Sr.sampleRate,numberOfChannels:Sr.numberOfChannels,sampleCount:Sr.sampleCount,channelLayout:Sr.channelLayout,pcmResolution:Sr.pcmResolution,bitRate:Sr.bitRate,core:Sr,hasExtensions:null!==Wr};if(!Wr?.asset)return null;const{asset:ar}=Wr;return{frameSize:Zr,sampleRate:ar.sampleRate,numberOfChannels:ar.numberOfChannels,sampleCount:ar.sampleCount,channelLayout:ar.channelLayout,pcmResolution:ar.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},jQ=rr=>{if(rr.length<18)return null;if(127!==rr[0]||254!==rr[1]||128!==rr[2]||1!==rr[3])return null;const Sr=new US(rr);if(Sr.skipBits(32),Sr.skipBits(1),31!==Sr.readBits(5))return null;const Qr=Sr.readBits(1),Zr=Sr.readBits(7)+1;if(Zr%8!==0)return null;const Wr=Sr.readBits(14)+1;if(Wr<96)return null;const ar=Sr.readBits(6);if(ar>=rQ.length)return null;const jr=dS[Sr.readBits(4)];if(0===jr)return null;const Ir=sS[Sr.readBits(5)];if(0!==Sr.readBits(1))return null;Sr.skipBits(4),Sr.skipBits(5);const fr=Sr.readBits(2);if(3===fr)return null;Sr.skipBits(1),Qr&&Sr.skipBits(16),Sr.skipBits(7);const Er=uS[Sr.readBits(3)];if(0===Er)return null;const pr=0!==fr;return{frameSize:Wr,sampleRate:jr,numberOfChannels:rQ[ar]+(pr?1:0),sampleCount:32*Zr,channelLayout:SQ[ar]|(pr?8:0),amode:ar,lfePresent:pr,bitRate:Ir,pcmResolution:Er}},IQ=rr=>{if(rr.length<10)return null;if(100!==rr[0]||88!==rr[1]||32!==rr[2]||37!==rr[3])return null;const Sr=new US(rr);Sr.skipBits(32),Sr.skipBits(8);const Qr=Sr.readBits(2),Zr=Sr.readBits(1),Wr=8+4*Zr,ar=16+4*Zr;Sr.skipBits(Wr);const jr=Sr.readBits(ar)+1,Ir={frameSize:jr,asset:null};if(!Sr.readBits(1))return Ir;const fr=QQ[Sr.readBits(2)],Er=512*(Sr.readBits(3)+1);Sr.readBits(1)&&Sr.skipBits(36);const pr=Sr.readBits(3)+1,xr=Sr.readBits(3)+1,mr=[];for(let zr=0;zr<pr;zr++)mr.push(Sr.readBits(Qr+1));for(const zr of mr)Sr.skipBits(8*SS(zr));if(Sr.readBits(1)){Sr.skipBits(2);const rr=Sr.readBits(2)+1<<2,Qr=Sr.readBits(2)+1;Sr.skipBits(Qr*rr)}for(let zr=0;zr<xr;zr++)Sr.skipBits(ar);Sr.skipBits(9),Sr.skipBits(3),Sr.readBits(1)&&Sr.skipBits(4),Sr.readBits(1)&&Sr.skipBits(24),Sr.readBits(1)&&Sr.skipBits(8*(Sr.readBits(10)+1));const Nr=Sr.readBits(5)+1,Ur=ZQ[Sr.readBits(4)],tr=Sr.readBits(8)+1;let hr=0;if(Sr.readBits(1)&&(tr>2&&Sr.skipBits(1),tr>6&&Sr.skipBits(1),Sr.readBits(1))){const rr=Sr.readBits(2)+1<<2;hr=Sr.readBits(rr)}return 0===fr||Sr.getBitsLeft()<0?Ir:{frameSize:jr,asset:{sampleRate:Ur,numberOfChannels:tr,sampleCount:Math.round(Er*Ur/fr),channelLayout:hr,pcmResolution:Nr}}},fQ=rr=>{const Sr=new Uint8Array(20),Qr=Vr(Sr);Qr.setUint32(0,rr.sampleRate),Qr.setUint32(4,rr.bitRate),Qr.setUint32(8,rr.bitRate),Sr[12]=rr.pcmResolution;const Zr=rr.core&&!rr.hasExtensions?1:0,Wr=new US(Sr);return Wr.seekToByte(13),Wr.writeBits(2,Math.max(WQ.indexOf(rr.sampleCount),0)),Wr.writeBits(5,Zr),Wr.writeBits(1,rr.core?.lfePresent?1:0),Wr.writeBits(6,rr.core?.amode??0),Wr.writeBits(14,rr.core?rr.core.frameSize-1:0),Wr.writeBits(1,0),Wr.writeBits(3,0),Wr.writeBits(16,rr.channelLayout),Wr.writeBits(1,0),Wr.writeBits(1,0),Wr.writeBits(1,0),Wr.writeBits(5,0),Sr},EQ=["avc","hevc","vp9","av1","vp8","prores"],pQ=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],xQ=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],mQ=[...xQ,...pQ],NQ=["webvtt"],UQ=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],tQ=["ap4x","ap4h","apch","apcn","apcs","apco"],hQ=["dtsc","dtsh","dtsl","dtse"],zQ=rr=>{const Sr=rr.split("."),Qr=Number(Sr[1]),Zr=Sr[2],Wr=(Qr<<5)+Number(Zr.slice(0,-1)),ar="H"===Zr.slice(-1)?1:0,jr=Number(Sr[3]);return[129,Wr,(ar<<7)+((8===jr?0:1)<<6)+((12===jr?1:0)<<5)+((Sr[4]?Number(Sr[4]):0)<<4)+((Sr[5]?Number(Sr[5][0]):1)<<3)+((Sr[5]?Number(Sr[5][1]):1)<<2)+(Sr[5]?Number(Sr[5][2]):0),0]},YQ=/^pcm-([usf])(\\d+)(be)?$/,nQ=rr=>{if(Xr(pQ.includes(rr)),"ulaw"===rr)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===rr)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const Sr=YQ.exec(rr);let Qr;Xr(Sr),Qr="u"===Sr[1]?"unsigned":"s"===Sr[1]?"signed":"float";return{dataType:Qr,sampleSize:Number(Sr[2])/8,littleEndian:"be"!==Sr[3],silentValue:"pcm-u8"===rr?128:0}},eQ=rr=>rr.startsWith("avc1")||rr.startsWith("avc3")?"avc":rr.startsWith("hev1")||rr.startsWith("hvc1")?"hevc":"vp8"===rr?"vp8":rr.startsWith("vp09")?"vp9":rr.startsWith("av01")?"av1":tQ.includes(rr)?"prores":"mp3"===rr||"mp4a.69"===rr||"mp4a.6B"===rr||"mp4a.6b"===rr||"mp4a.40.34"===rr?"mp3":rr.startsWith("mp4a.40.")||"mp4a.67"===rr?"aac":"opus"===rr||"Opus"===rr?"opus":"vorbis"===rr?"vorbis":"flac"===rr?"flac":"ac-3"===rr||"ac3"===rr?"ac3":"ec-3"===rr||"eac3"===rr?"eac3":hQ.includes(rr)?"dts":"ulaw"===rr?"ulaw":"alaw"===rr?"alaw":YQ.test(rr)?rr:"webvtt"===rr?"webvtt":null,KQ=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...tQ],yQ=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,BQ=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,TQ=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,vQ=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,OQ=(rr,Sr)=>{if(!rr)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof rr)throw new TypeError("Video chunk metadata must be an object.");if(!rr.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof rr.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof rr.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!KQ.some((Sr=>rr.decoderConfig.codec.startsWith(Sr))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(rr.decoderConfig.codedWidth)||rr.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(rr.decoderConfig.codedHeight)||rr.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==rr.decoderConfig.displayAspectWidth&&(!Number.isInteger(rr.decoderConfig.displayAspectWidth)||rr.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==rr.decoderConfig.displayAspectHeight&&(!Number.isInteger(rr.decoderConfig.displayAspectHeight)||rr.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==rr.decoderConfig.displayAspectWidth!==(void 0!==rr.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==rr.decoderConfig.description&&!Jr(rr.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==rr.decoderConfig.colorSpace){const{colorSpace:Sr}=rr.decoderConfig;if("object"!==typeof Sr)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const Qr=Object.keys(cr);if(null!=Sr.primaries&&!Qr.includes(Sr.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${Qr.join(", ")}.`);const Zr=Object.keys(Fr);if(null!=Sr.transfer&&!Zr.includes(Sr.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${Zr.join(", ")}.`);const Wr=Object.keys(or);if(null!=Sr.matrix&&!Wr.includes(Sr.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${Wr.join(", ")}.`);if(null!=Sr.fullRange&&"boolean"!==typeof Sr.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(rr.decoderConfig.codec.startsWith("avc1")||rr.decoderConfig.codec.startsWith("avc3")){if(!yQ.test(rr.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(rr.decoderConfig.codec.startsWith("hev1")||rr.decoderConfig.codec.startsWith("hvc1")){if(!BQ.test(rr.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(rr.decoderConfig.codec.startsWith("vp8")){if("vp8"!==rr.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(rr.decoderConfig.codec.startsWith("vp09")){if(!TQ.test(rr.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(rr.decoderConfig.codec.startsWith("av01")){if(!vQ.test(rr.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(tQ.some((Sr=>rr.decoderConfig.codec.startsWith(Sr)))&&!tQ.some((Sr=>rr.decoderConfig.codec===Sr)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${tQ.join(", ")}.`);if(null!==Sr&&eQ(rr.decoderConfig.codec)!==Sr)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${rr.decoderConfig.codec}\' does not fit to the track codec \'${Sr}\'.`)},LQ=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],lQ=(rr,Sr)=>{if(!rr)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof rr)throw new TypeError("Audio chunk metadata must be an object.");if(!rr.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof rr.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof rr.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!LQ.some((Sr=>rr.decoderConfig.codec.startsWith(Sr))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(rr.decoderConfig.sampleRate)||rr.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(rr.decoderConfig.numberOfChannels)||rr.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==rr.decoderConfig.description&&!Jr(rr.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(rr.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==rr.decoderConfig.codec&&"mp4a.6B"!==rr.decoderConfig.codec&&"mp4a.6b"!==rr.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(rr.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(rr.decoderConfig.codec.startsWith("mp3")||rr.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==rr.decoderConfig.codec&&"mp4a.69"!==rr.decoderConfig.codec&&"mp4a.6B"!==rr.decoderConfig.codec&&"mp4a.6b"!==rr.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(rr.decoderConfig.codec.startsWith("opus")){if("opus"!==rr.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(rr.decoderConfig.description&&rr.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(rr.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==rr.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!rr.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(rr.decoderConfig.codec.startsWith("flac")){if("flac"!==rr.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const Sr=42;if(!rr.decoderConfig.description||rr.decoderConfig.description.byteLength<Sr)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(rr.decoderConfig.codec.startsWith("ac-3")||rr.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==rr.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(rr.decoderConfig.codec.startsWith("ec-3")||rr.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==rr.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(rr.decoderConfig.codec.startsWith("dts")){if(!hQ.includes(rr.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${hQ.join(", ")}.`)}else if((rr.decoderConfig.codec.startsWith("pcm")||rr.decoderConfig.codec.startsWith("ulaw")||rr.decoderConfig.codec.startsWith("alaw"))&&!pQ.includes(rr.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${pQ.join(", ")}).`);if(null!==Sr&&eQ(rr.decoderConfig.codec)!==Sr)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${rr.decoderConfig.codec}\' does not fit to the track codec \'${Sr}\'.`)},XQ=rr=>{if(!rr)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof rr)throw new TypeError("Subtitle metadata must be an object.");if(!rr.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof rr.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof rr.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var PQ;!function(rr){rr[rr.FrameCount=1]="FrameCount",rr[rr.FileSize=2]="FileSize",rr[rr.Toc=4]="Toc"}(PQ||(PQ={}));class HQ{constructor(rr,Sr,Qr,Zr,Wr){this.bytes=rr,this.view=Sr,this.offset=Qr,this.start=Zr,this.end=Wr,this.bufferPos=Zr-Qr}static tempFromBytes(rr){return new HQ(rr,Vr(rr),0,0,rr.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(rr){this.bufferPos=rr-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(rr){this.bufferPos+=rr}slice(rr){let Sr=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-rr;if(rr<this.start||rr+Sr>this.end)throw new RangeError("Slicing outside of original slice.");return new HQ(this.bytes,this.view,this.offset,rr,rr+Sr)}}const qQ=(rr,Sr)=>{if(rr.filePos<rr.start||rr.filePos+Sr>rr.end)throw new RangeError(`Tried reading [${rr.filePos}, ${rr.filePos+Sr}), but slice is [${rr.start}, ${rr.end}). This is likely an internal error, please report it alongside the file that caused it.`)},RQ=(rr,Sr)=>{qQ(rr,Sr);const Qr=rr.bytes.subarray(rr.bufferPos,rr.bufferPos+Sr);return rr.bufferPos+=Sr,Qr};var gQ,CQ;!function(rr){rr[rr.Unsynchronisation=128]="Unsynchronisation",rr[rr.ExtendedHeader=64]="ExtendedHeader",rr[rr.ExperimentalIndicator=32]="ExperimentalIndicator",rr[rr.Footer=16]="Footer"}(gQ||(gQ={})),function(rr){rr[rr.ISO_8859_1=0]="ISO_8859_1",rr[rr.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",rr[rr.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",rr[rr.UTF_8=3]="UTF_8"}(CQ||(CQ={}));class MQ{constructor(rr){this.mutex=new Dr,this.trackTimestampInfo=new WeakMap,this.output=rr}onTrackClose(rr){}validateTimestamp(rr,Sr,Qr){let Zr=this.trackTimestampInfo.get(rr);if(Zr){if(Qr&&(Zr.maxTimestampBeforeLastKeyPacket=Zr.maxTimestamp),null!==Zr.maxTimestampBeforeLastKeyPacket&&Sr<Zr.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${Sr}s, but largest timestamp is ${Zr.maxTimestampBeforeLastKeyPacket}s.`);Zr.maxTimestamp=Math.max(Zr.maxTimestamp,Sr)}else{if(!Qr)throw new Error("First packet must be a key packet.");Zr={maxTimestamp:Sr,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(rr,Zr)}}}const GQ=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const kQ=rr=>{const Sr=Math.floor(rr/36e5),Qr=Math.floor(rr%36e5/6e4),Zr=Math.floor(rr%6e4/1e3),Wr=rr%1e3;return Sr.toString().padStart(2,"0")+":"+Qr.toString().padStart(2,"0")+":"+Zr.toString().padStart(2,"0")+"."+Wr.toString().padStart(3,"0")};class AQ{constructor(rr){this.writer=rr,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(rr){this.helperView.setUint32(0,rr,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(rr){this.helperView.setUint32(0,Math.floor(rr/2**32),!1),this.helperView.setUint32(4,rr,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(rr){for(let Sr=0;Sr<rr.length;Sr++)this.helperView.setUint8(Sr%8,rr.charCodeAt(Sr)),Sr%8===7&&this.writer.write(this.helper);rr.length%8!==0&&this.writer.write(this.helper.subarray(0,rr.length%8))}writeBox(rr){if(this.offsets.set(rr,this.writer.getPos()),rr.contents&&!rr.children)this.writeBoxHeader(rr,rr.size??rr.contents.byteLength+8),this.writer.write(rr.contents);else{const Sr=this.writer.getPos();if(this.writeBoxHeader(rr,0),rr.contents&&this.writer.write(rr.contents),rr.children)for(const Wr of rr.children)Wr&&this.writeBox(Wr);const Qr=this.writer.getPos(),Zr=rr.size??Qr-Sr;this.writer.seek(Sr),this.writeBoxHeader(rr,Zr),this.writer.seek(Qr)}}writeBoxHeader(rr,Sr){this.writeU32(rr.largeSize?1:Sr),this.writeAscii(rr.type),rr.largeSize&&this.writeU64(Sr)}measureBoxHeader(rr){return 8+(rr.largeSize?8:0)}patchBox(rr){const Sr=this.offsets.get(rr);Xr(void 0!==Sr);const Qr=this.writer.getPos();this.writer.seek(Sr),this.writeBox(rr),this.writer.seek(Qr)}measureBox(rr){if(rr.contents&&!rr.children){return this.measureBoxHeader(rr)+rr.contents.byteLength}{let Sr=this.measureBoxHeader(rr);if(rr.contents&&(Sr+=rr.contents.byteLength),rr.children)for(const Qr of rr.children)Qr&&(Sr+=this.measureBox(Qr));return Sr}}}const VQ=new Uint8Array(8),iQ=new DataView(VQ.buffer),wQ=rr=>[(rr%256+256)%256],cQ=rr=>(iQ.setUint16(0,rr,!1),[VQ[0],VQ[1]]),FQ=rr=>(iQ.setInt16(0,rr,!1),[VQ[0],VQ[1]]),oQ=rr=>(iQ.setUint32(0,rr,!1),[VQ[1],VQ[2],VQ[3]]),bQ=rr=>(iQ.setUint32(0,rr,!1),[VQ[0],VQ[1],VQ[2],VQ[3]]),JQ=rr=>(iQ.setInt32(0,rr,!1),[VQ[0],VQ[1],VQ[2],VQ[3]]),DQ=rr=>(iQ.setUint32(0,Math.floor(rr/2**32),!1),iQ.setUint32(4,rr,!1),[VQ[0],VQ[1],VQ[2],VQ[3],VQ[4],VQ[5],VQ[6],VQ[7]]),dQ=rr=>(iQ.setInt32(0,Math.floor(rr/2**32),!1),iQ.setUint32(4,rr,!1),[VQ[0],VQ[1],VQ[2],VQ[3],VQ[4],VQ[5],VQ[6],VQ[7]]),sQ=rr=>(iQ.setInt16(0,256*rr,!1),[VQ[0],VQ[1]]),uQ=rr=>(iQ.setInt32(0,65536*rr,!1),[VQ[0],VQ[1],VQ[2],VQ[3]]),rZ=rr=>(iQ.setInt32(0,2**30*rr,!1),[VQ[0],VQ[1],VQ[2],VQ[3]]),SZ=(rr,Sr)=>{const Qr=[];let Zr=rr;do{let rr=127&Zr;Zr>>=7,Qr.length>0&&(rr|=128),Qr.push(rr),void 0!==Sr&&Sr--}while(Zr>0||Sr);return Qr.reverse()},QZ=function(rr){let Sr=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const Qr=Array(rr.length).fill(null).map(((Sr,Qr)=>rr.charCodeAt(Qr)));return Sr&&Qr.push(0),Qr},ZZ=rr=>[uQ(rr[0]),uQ(rr[1]),rZ(rr[2]),uQ(rr[3]),uQ(rr[4]),rZ(rr[5]),uQ(rr[6]),uQ(rr[7]),rZ(rr[8])],WZ=(rr,Sr,Qr)=>({type:rr,contents:Sr&&new Uint8Array(Sr.flat(10)),children:Qr}),aZ=(rr,Sr,Qr,Zr,Wr)=>WZ(rr,[wQ(Sr),oQ(Qr),Zr??[]],Wr),jZ=()=>WZ("styp",[QZ("iso5"),bQ(0),QZ("iso5"),QZ("iso6"),QZ("mp41"),QZ("cmfc"),QZ("dash")]),IZ=(rr,Sr)=>{const Qr=Math.max(0,rr.minWrittenTimestamp);let Zr=Math.max(0,rr.maxWrittenEndTimestamp-Qr);return Number.isFinite(Zr)||(Zr=0),aZ("sidx",1,0,[bQ(1),bQ(MW),DQ(kW(Qr,MW)),DQ(0),cQ(0),cQ(1),bQ(2147483647&Sr),bQ(kW(Zr,MW)),bQ(0)])},fZ=rr=>({type:"mdat",largeSize:rr}),EZ=rr=>WZ("moov",void 0,[pZ(rr.creationTime,rr.trackDatas),...rr.trackDatas.map((Sr=>xZ(Sr,rr.creationTime))),rr.isFragmented?sZ(rr.trackDatas):null,mW(rr)]),pZ=(rr,Sr)=>{const Qr=Math.max(0,...Sr.map((rr=>Math.max(0,kW(AW(rr),MW)+kW(rr.startTimestampOffset??0,MW))))),Zr=Math.max(0,...Sr.map((rr=>rr.track.id)))+1,Wr=!Mr(rr)||!Mr(Qr),ar=Wr?DQ:bQ;return aZ("mvhd",+Wr,0,[ar(rr),ar(rr),bQ(MW),ar(Qr),uQ(1),sQ(1),Array(10).fill(0),ZZ(Hr),Array(24).fill(0),bQ(Zr)])},xZ=(rr,Sr)=>{const Qr=GW(rr),Zr=null!==rr.startTimestampOffset&&0!==rr.startTimestampOffset;return WZ("trak",void 0,[mZ(rr,Sr),Zr?NZ(rr):null,UZ(rr,Sr),void 0!==Qr.name?WZ("udta",void 0,[WZ("name",[...wr.encode(Qr.name)])]):null])},mZ=(rr,Sr)=>{const Qr=Math.max(0,kW(AW(rr),MW)+kW(rr.startTimestampOffset??0,MW)),Zr=!Mr(Sr)||!Mr(Qr),Wr=Zr?DQ:bQ;let ar;if("video"===rr.type&&rr.track.metadata.transformationMatrix)ar=rr.track.metadata.transformationMatrix;else if("video"===rr.type){const{rotation:Sr,flip:Qr}=rr.track.metadata;ar=((rr,Sr,Qr)=>{const[Zr,Wr,,ar,jr]=rr,Ir=Math.abs(Zr)*Sr+Math.abs(ar)*Qr,fr=Math.abs(Wr)*Sr+Math.abs(jr)*Qr;return gr(gr(Rr(-Sr/2,-Qr/2),rr),Rr(Ir/2,fr/2))})(gr(qr(Sr??0),[Qr?-1:1,0,0,0,1,0,0,0,1]),rr.info.width,rr.info.height)}else ar=Hr;let jr=2;!1!==rr.track.metadata.disposition?.default&&(jr|=1);const Ir="video"===rr.type?0:"audio"===rr.type?1:"subtitle"===rr.type?2:sr(rr);return aZ("tkhd",+Zr,jr,[Wr(Sr),Wr(Sr),bQ(rr.track.id),bQ(0),Wr(Qr),Array(8).fill(0),cQ(0),cQ(Ir),sQ("audio"===rr.type?1:0),cQ(0),ZZ(ar),uQ("video"===rr.type?rr.info.width:0),uQ("video"===rr.type?rr.info.height:0)])},NZ=rr=>{const Sr=rr.startTimestampOffset;if(Xr(null!==Sr),Sr>0){const Qr=kW(Sr,MW),Zr=kW(AW(rr),MW),Wr=!Mr(Qr)||!Mr(Zr),ar=Wr?DQ:bQ,jr=Wr?dQ:JQ;return WZ("edts",void 0,[aZ("elst",Wr?1:0,0,[bQ(2),ar(Qr),jr(-1),uQ(1),ar(Zr),jr(0),uQ(1)])])}{const Zr=kW(-Sr,rr.timescale),Wr=Math.max(0,kW(AW(rr),MW)+kW(Sr,MW)),ar=!((Qr=Zr)>=-(2**31)&&Qr<2**31)||!Mr(Wr),jr=ar?DQ:bQ,Ir=ar?dQ:JQ;return WZ("edts",void 0,[aZ("elst",ar?1:0,0,[bQ(1),jr(Wr),Ir(Zr),uQ(1)])])}var Qr},UZ=(rr,Sr)=>WZ("mdia",void 0,[tZ(rr,Sr),YZ(!0,hZ[rr.type],zZ[rr.type]),nZ(rr)]),tZ=(rr,Sr)=>{const Qr=kW(AW(rr),rr.timescale),Zr=!Mr(Sr)||!Mr(Qr),Wr=Zr?DQ:bQ;return aZ("mdhd",+Zr,0,[Wr(Sr),Wr(Sr),bQ(rr.timescale),Wr(Qr),cQ(OW(rr.track.metadata.languageCode??rS)),cQ(0)])},hZ={video:"vide",audio:"soun",subtitle:"text"},zZ={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},YZ=function(rr,Sr,Qr){let Zr=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return aZ("hdlr",0,0,[rr?QZ("mhlr"):bQ(0),QZ(Sr),QZ(Zr),bQ(0),bQ(0),QZ(Qr,!0)])},nZ=rr=>WZ("minf",void 0,[eZ[rr.type](),KZ(),TZ(rr)]),eZ={video:()=>aZ("vmhd",0,1,[cQ(0),cQ(0),cQ(0),cQ(0)]),audio:()=>aZ("smhd",0,0,[cQ(0),cQ(0)]),subtitle:()=>aZ("nmhd",0,0)},KZ=()=>WZ("dinf",void 0,[yZ()]),yZ=()=>aZ("dref",0,0,[bQ(1)],[BZ()]),BZ=()=>aZ("url ",0,1),TZ=rr=>{const Sr=rr.compositionTimeOffsetTable.length>1||rr.compositionTimeOffsetTable.some((rr=>0!==rr.sampleCompositionTimeOffset));return WZ("stbl",void 0,[vZ(rr),cZ(rr),Sr?DZ(rr):null,Sr?dZ(rr):null,oZ(rr),bZ(rr),JZ(rr),FZ(rr)])},vZ=rr=>{let Sr;if("video"===rr.type)Sr=OZ(eW(rr.track.source._codec,rr.info.decoderConfig.codec),rr);else if("audio"===rr.type){const Qr=yW(rr.track.source._codec,rr.info.decoderConfig.codec,rr.muxer.isQuickTime);Xr(Qr),Sr=HZ(Qr,rr)}else"subtitle"===rr.type&&(Sr=wZ(TW[rr.track.source._codec],rr));return Xr(Sr),aZ("stsd",0,0,[bQ(1)],[Sr])},OZ=(rr,Sr)=>WZ(rr,[Array(6).fill(0),cQ(1),cQ(0),cQ(0),Array(12).fill(0),cQ(Sr.info.width),cQ(Sr.info.height),bQ(4718592),bQ(4718592),bQ(0),cQ(1),wQ(18),QZ(vS),Array(13).fill(0),cQ(Sr.info.hasAlphaChannel?32:24),FQ(65535)],[KW[Sr.track.source._codec]?.(Sr)??null,lZ(Sr),br(Sr.info.decoderConfig.colorSpace)?null:XZ(Sr),LZ(Sr)]),LZ=rr=>0===rr.avgBitrate&&0===rr.maxBitrate?null:WZ("btrt",[bQ(0),bQ(rr.maxBitrate),bQ(rr.avgBitrate)]),lZ=rr=>rr.info.pixelAspectRatio.num===rr.info.pixelAspectRatio.den?null:WZ("pasp",[bQ(rr.info.pixelAspectRatio.num),bQ(rr.info.pixelAspectRatio.den)]),XZ=rr=>{const Sr=rr.info.decoderConfig.colorSpace;return WZ("colr",[QZ(rr.muxer.isQuickTime?"nclc":"nclx"),cQ(null!=Sr?.primaries?cr[Sr.primaries]:2),cQ(null!=Sr?.transfer?Fr[Sr.transfer]:2),cQ(null!=Sr?.matrix?or[Sr.matrix]:2),rr.muxer.isQuickTime?[]:wQ((Sr?.fullRange?1:0)<<7)])},PZ=rr=>{if(!rr.info.decoderConfig)return null;const Sr=rr.info.decoderConfig,Qr=Sr.codec.split("."),Zr=Number(Qr[1]),Wr=Number(Qr[2]),ar=(Number(Qr[3])<<4)+((Qr[4]?Number(Qr[4]):1)<<1)+(Qr[8]?Number(Qr[8]):Number(Sr.colorSpace?.fullRange??0)),jr=Qr[5]?Number(Qr[5]):Sr.colorSpace?.primaries?cr[Sr.colorSpace.primaries]:1,Ir=Qr[6]?Number(Qr[6]):Sr.colorSpace?.transfer?Fr[Sr.colorSpace.transfer]:1,fr=Qr[7]?Number(Qr[7]):Sr.colorSpace?.matrix?or[Sr.colorSpace.matrix]:1;return aZ("vpcC",1,0,[wQ(Zr),wQ(Wr),wQ(ar),wQ(jr),wQ(Ir),wQ(fr),cQ(0)])},HZ=(rr,Sr)=>{let Qr,Zr=0,Wr=16;const ar=pQ.includes(Sr.track.source._codec);if(ar){const rr=Sr.track.source._codec,{sampleSize:Qr}=nQ(rr);Wr=8*Qr,Wr>16&&(Zr=1)}if(Sr.muxer.isQuickTime&&(Zr=1),0===Zr)Qr=[Array(6).fill(0),cQ(1),cQ(Zr),cQ(0),bQ(0),cQ(Sr.info.numberOfChannels),cQ(Wr),cQ(0),cQ(0),cQ(Sr.info.sampleRate<65536?Sr.info.sampleRate:0),cQ(0)];else{const rr=ar?0:-2;Qr=[Array(6).fill(0),cQ(1),cQ(Zr),cQ(0),bQ(0),cQ(Sr.info.numberOfChannels),cQ(Math.min(Wr,16)),FQ(rr),cQ(0),cQ(Sr.info.sampleRate<65536?Sr.info.sampleRate:0),cQ(0),ar?[bQ(1),bQ(Wr/8),bQ(Sr.info.numberOfChannels*Wr/8)]:[bQ(0),bQ(0),bQ(0)],bQ(2)]}return WZ(rr,Qr,[BW(Sr.track.source._codec,Sr.muxer.isQuickTime)?.(Sr)??null,LZ(Sr)])},qZ=rr=>{let Sr;switch(rr.track.source._codec){case"aac":Sr=64;break;case"mp3":Sr=107;break;case"vorbis":Sr=221;break;default:throw new Error(`Unhandled audio codec: ${rr.track.source._codec}`)}let Qr=[...wQ(Sr),...wQ(21),...oQ(0),...bQ(rr.maxBitrate),...bQ(rr.avgBitrate)];if(rr.info.decoderConfig.description){const Sr=Ar(rr.info.decoderConfig.description);Qr=[...Qr,...wQ(5),...SZ(Sr.byteLength),...Sr]}return Qr=[...cQ(1),...wQ(0),...wQ(4),...SZ(Qr.length),...Qr,...wQ(6),...wQ(1),...wQ(2)],Qr=[...wQ(3),...SZ(Qr.length),...Qr],aZ("esds",0,0,Qr)},RZ=rr=>WZ("wave",void 0,[gZ(rr),CZ(rr),WZ("\\0\\0\\0\\0")]),gZ=rr=>WZ("frma",[QZ(yW(rr.track.source._codec,rr.info.decoderConfig.codec,rr.muxer.isQuickTime))]),CZ=rr=>{const{littleEndian:Sr}=nQ(rr.track.source._codec);return WZ("enda",[cQ(+Sr)])},MZ=rr=>{let Sr=rr.info.numberOfChannels,Qr=3840,Zr=rr.info.sampleRate,Wr=0,ar=0,jr=new Uint8Array(0);const Ir=rr.info.decoderConfig?.description;if(Ir){Xr(Ir.byteLength>=18);const rr=Ar(Ir),fr=bS(rr);Sr=fr.outputChannelCount,Qr=fr.preSkip,Zr=fr.inputSampleRate,Wr=fr.outputGain,ar=fr.channelMappingFamily,fr.channelMappingTable&&(jr=fr.channelMappingTable)}return WZ("dOps",[wQ(0),wQ(Sr),cQ(Qr),bQ(Zr),FQ(Wr),wQ(ar),...jr])},GZ=rr=>{const Sr=rr.info.decoderConfig?.description;Xr(Sr);const Qr=Ar(Sr);return aZ("dfLa",0,0,[...Qr.subarray(4)])},kZ=rr=>{const{littleEndian:Sr,sampleSize:Qr}=nQ(rr.track.source._codec);return aZ("pcmC",0,0,[wQ(+Sr),wQ(8*Qr)])},AZ=rr=>{Xr(rr.info.primingPacket);const Sr=(rr=>{if(rr.length<7)return null;if(11!==rr[0]||119!==rr[1])return null;const Sr=new US(rr);Sr.skipBits(16),Sr.skipBits(16);const Qr=Sr.readBits(2);if(3===Qr)return null;const Zr=Sr.readBits(6),Wr=Sr.readBits(5);if(Wr>8)return null;const ar=Sr.readBits(3),jr=Sr.readBits(3);return 0!==(1&jr)&&1!==jr&&Sr.skipBits(2),0!==(4&jr)&&Sr.skipBits(2),2===jr&&Sr.skipBits(2),{fscod:Qr,bsid:Wr,bsmod:ar,acmod:jr,lfeon:Sr.readBits(1),bitRateCode:Math.floor(Zr/2)}})(rr.info.primingPacket.data);if(!Sr)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const Qr=new Uint8Array(3),Zr=new US(Qr);return Zr.writeBits(2,Sr.fscod),Zr.writeBits(5,Sr.bsid),Zr.writeBits(3,Sr.bsmod),Zr.writeBits(3,Sr.acmod),Zr.writeBits(1,Sr.lfeon),Zr.writeBits(5,Sr.bitRateCode),Zr.writeBits(5,0),WZ("dac3",[...Qr])},VZ=rr=>{Xr(rr.info.primingPacket);const Sr=(rr=>{if(rr.length<6)return null;if(11!==rr[0]||119!==rr[1])return null;const Sr=new US(rr);Sr.skipBits(16);const Qr=Sr.readBits(2);if(Sr.skipBits(3),0!==Qr&&2!==Qr)return null;const Zr=Sr.readBits(11),Wr=Sr.readBits(2);let ar,jr=0;3===Wr?(jr=Sr.readBits(2),ar=3):ar=Sr.readBits(2);const Ir=Sr.readBits(3),fr=Sr.readBits(1),Er=Sr.readBits(5);if(Er<11||Er>16)return null;const pr=DS[ar];let xr;return xr=Wr<3?BS[Wr]/1e3:TS[jr]/1e3,{dataRate:Math.round((Zr+1)*xr/(16*pr)),substreams:[{fscod:Wr,fscod2:jr,bsid:Er,bsmod:0,acmod:Ir,lfeon:fr,numDepSub:0,chanLoc:0}]}})(rr.info.primingPacket.data);if(!Sr)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let Qr=16;for(const jr of Sr.substreams)Qr+=23,jr.numDepSub>0?Qr+=9:Qr+=1;const Zr=Math.ceil(Qr/8),Wr=new Uint8Array(Zr),ar=new US(Wr);ar.writeBits(13,Sr.dataRate),ar.writeBits(3,Sr.substreams.length-1);for(const jr of Sr.substreams)ar.writeBits(2,jr.fscod),ar.writeBits(5,jr.bsid),ar.writeBits(1,0),ar.writeBits(1,0),ar.writeBits(3,jr.bsmod),ar.writeBits(3,jr.acmod),ar.writeBits(1,jr.lfeon),ar.writeBits(3,0),ar.writeBits(4,jr.numDepSub),jr.numDepSub>0?ar.writeBits(9,jr.chanLoc):ar.writeBits(1,0);return WZ("dec3",[...Wr])},iZ=rr=>{Xr(rr.info.primingPacket);const Sr=aQ(rr.info.primingPacket.data);if(!Sr)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return WZ("ddts",[...fQ(Sr)])},wZ=(rr,Sr)=>WZ(rr,[Array(6).fill(0),cQ(1)],[vW[Sr.track.source._codec](Sr),LZ(Sr)]),cZ=rr=>aZ("stts",0,0,[bQ(rr.timeToSampleTable.length),rr.timeToSampleTable.map((rr=>[bQ(rr.sampleCount),bQ(rr.sampleDelta)]))]),FZ=rr=>{if(rr.samples.every((rr=>"key"===rr.type)))return null;const Sr=[...rr.samples.entries()].filter((rr=>{let[,Sr]=rr;return"key"===Sr.type}));return aZ("stss",0,0,[bQ(Sr.length),Sr.map((rr=>{let[Sr]=rr;return bQ(Sr+1)}))])},oZ=rr=>aZ("stsc",0,0,[bQ(rr.compactlyCodedChunkTable.length),rr.compactlyCodedChunkTable.map((rr=>[bQ(rr.firstChunk),bQ(rr.samplesPerChunk),bQ(1)]))]),bZ=rr=>{if("audio"===rr.type&&rr.info.requiresPcmTransformation){const{sampleSize:Sr}=nQ(rr.track.source._codec);return aZ("stsz",0,0,[bQ(Sr*rr.info.numberOfChannels),bQ(rr.samples.reduce(((Sr,Qr)=>Sr+kW(Qr.duration,rr.timescale)),0))])}return aZ("stsz",0,0,[bQ(0),bQ(rr.samples.length),rr.samples.map((rr=>bQ(rr.size)))])},JZ=rr=>rr.finalizedChunks.length>0&&Cr(rr.finalizedChunks).offset>=2**32?aZ("co64",0,0,[bQ(rr.finalizedChunks.length),rr.finalizedChunks.map((rr=>DQ(rr.offset)))]):aZ("stco",0,0,[bQ(rr.finalizedChunks.length),rr.finalizedChunks.map((rr=>bQ(rr.offset)))]),DZ=rr=>aZ("ctts",1,0,[bQ(rr.compositionTimeOffsetTable.length),rr.compositionTimeOffsetTable.map((rr=>[bQ(rr.sampleCount),JQ(rr.sampleCompositionTimeOffset)]))]),dZ=rr=>{let Sr=1/0,Qr=-1/0,Zr=1/0,Wr=-1/0;Xr(rr.compositionTimeOffsetTable.length>0),Xr(rr.samples.length>0);for(let jr=0;jr<rr.compositionTimeOffsetTable.length;jr++){const Zr=rr.compositionTimeOffsetTable[jr];Sr=Math.min(Sr,Zr.sampleCompositionTimeOffset),Qr=Math.max(Qr,Zr.sampleCompositionTimeOffset)}for(let jr=0;jr<rr.samples.length;jr++){const Sr=rr.samples[jr];Zr=Math.min(Zr,kW(Sr.timestamp,rr.timescale)),Wr=Math.max(Wr,kW(Sr.timestamp+Sr.duration,rr.timescale))}const ar=Math.max(-Sr,0);return Wr>=2**31?null:aZ("cslg",0,0,[JQ(ar),JQ(Sr),JQ(Qr),JQ(Zr),JQ(Wr)])},sZ=rr=>WZ("mvex",void 0,rr.map(uZ)),uZ=rr=>aZ("trex",0,0,[bQ(rr.track.id),bQ(1),bQ(0),bQ(0),bQ(0)]),rW=(rr,Sr)=>WZ("moof",void 0,[SW(rr),...Sr.map(ZW)]),SW=rr=>aZ("mfhd",0,0,[bQ(rr)]),QW=rr=>{let Sr=0,Qr=0;const Zr="delta"===rr.type;return Qr|=+Zr,Sr|=Zr?1:2,Sr<<24|Qr<<16},ZW=rr=>WZ("traf",void 0,[WW(rr),aW(rr),jW(rr)]),WW=rr=>{Xr(rr.currentChunk);let Sr=0;Sr|=8,Sr|=16,Sr|=32,Sr|=131072;const Qr=rr.currentChunk.samples[1]??rr.currentChunk.samples[0],Zr={duration:Qr.timescaleUnitsToNextSample,size:Qr.size,flags:QW(Qr)};return aZ("tfhd",0,131128,[bQ(rr.track.id),bQ(Zr.duration),bQ(Zr.size),bQ(Zr.flags)])},aW=rr=>(Xr(rr.currentChunk),aZ("tfdt",1,0,[DQ(kW(rr.currentChunk.startTimestamp,rr.timescale))])),jW=rr=>{Xr(rr.currentChunk);const Sr=rr.currentChunk.samples.map((rr=>rr.timescaleUnitsToNextSample)),Qr=rr.currentChunk.samples.map((rr=>rr.size)),Zr=rr.currentChunk.samples.map(QW),Wr=rr.currentChunk.samples.map((Sr=>kW(Sr.timestamp-Sr.decodeTimestamp,rr.timescale))),ar=new Set(Sr),jr=new Set(Qr),Ir=new Set(Zr),fr=new Set(Wr),Er=2===Ir.size&&Zr[0]!==Zr[1],pr=ar.size>1,xr=jr.size>1,mr=!Er&&Ir.size>1,Nr=fr.size>1||[...fr].some((rr=>0!==rr));let Ur=0;return Ur|=1,Ur|=4*+Er,Ur|=256*+pr,Ur|=512*+xr,Ur|=1024*+mr,Ur|=2048*+Nr,aZ("trun",1,Ur,[bQ(rr.currentChunk.samples.length),bQ(rr.currentChunk.offset-rr.currentChunk.moofOffset||0),Er?bQ(Zr[0]):[],rr.currentChunk.samples.map(((rr,ar)=>[pr?bQ(Sr[ar]):[],xr?bQ(Qr[ar]):[],mr?bQ(Zr[ar]):[],Nr?JQ(Wr[ar]):[]]))])},IW=rr=>aZ("tfra",1,0,[bQ(rr.track.id),bQ(63),bQ(rr.finalizedChunks.length),rr.finalizedChunks.map((Sr=>[DQ(kW(Sr.samples[0].timestamp,rr.timescale)),DQ(Sr.moofOffset),bQ(Sr.trafIndex+1),bQ(1),bQ(1)]))]),fW=()=>aZ("mfro",0,0,[bQ(0)]),EW=()=>WZ("vtte"),pW=(rr,Sr,Qr,Zr,Wr)=>WZ("vttc",void 0,[null!==Wr?WZ("vsid",[JQ(Wr)]):null,null!==Qr?WZ("iden",[...wr.encode(Qr)]):null,null!==Sr?WZ("ctim",[...wr.encode(kQ(Sr))]):null,null!==Zr?WZ("sttg",[...wr.encode(Zr)]):null,WZ("payl",[...wr.encode(rr)])]),xW=rr=>WZ("vtta",[...wr.encode(rr)]),mW=rr=>{const Sr=[],Qr=rr.format._options.metadataFormat??"auto",Zr=rr.output._metadataTags;if("mdir"===Qr||"auto"===Qr&&!rr.isQuickTime){const rr=zW(Zr);rr&&Sr.push(rr)}else if("mdta"===Qr){const rr=YW(Zr);rr&&Sr.push(rr)}else("udta"===Qr||"auto"===Qr&&rr.isQuickTime)&&NW(Sr,rr.output._metadataTags);return 0===Sr.length?null:WZ("udta",void 0,Sr)},NW=(rr,Sr)=>{for(const{key:Qr,value:Zr}of jS(Sr))switch(Qr){case"title":rr.push(UW("\\xa9nam",Zr));break;case"description":rr.push(UW("\\xa9des",Zr));break;case"artist":rr.push(UW("\\xa9ART",Zr));break;case"album":rr.push(UW("\\xa9alb",Zr));break;case"albumArtist":rr.push(UW("albr",Zr));break;case"genre":rr.push(UW("\\xa9gen",Zr));break;case"date":rr.push(UW("\\xa9day",Zr.toISOString().slice(0,10)));break;case"comment":rr.push(UW("\\xa9cmt",Zr));break;case"lyrics":rr.push(UW("\\xa9lyr",Zr));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:sr(Qr)}if(Sr.raw)for(const Qr in Sr.raw){const Zr=Sr.raw[Qr];null==Zr||4!==Qr.length||rr.some((rr=>rr.type===Qr))||("string"===typeof Zr?rr.push(UW(Qr,Zr)):Zr instanceof Uint8Array&&rr.push(WZ(Qr,Array.from(Zr))))}},UW=(rr,Sr)=>{const Qr=wr.encode(Sr);return WZ(rr,[cQ(Qr.length),cQ(OW("und")),Array.from(Qr)])},tW={"image/jpeg":13,"image/png":14,"image/bmp":27},hW=(rr,Sr)=>{const Qr=[];for(const{key:Zr,value:Wr}of jS(rr))switch(Zr){case"title":Qr.push({key:Sr?"title":"\\xa9nam",value:nW(Wr)});break;case"description":Qr.push({key:Sr?"description":"\\xa9des",value:nW(Wr)});break;case"artist":Qr.push({key:Sr?"artist":"\\xa9ART",value:nW(Wr)});break;case"album":Qr.push({key:Sr?"album":"\\xa9alb",value:nW(Wr)});break;case"albumArtist":Qr.push({key:Sr?"album_artist":"aART",value:nW(Wr)});break;case"comment":Qr.push({key:Sr?"comment":"\\xa9cmt",value:nW(Wr)});break;case"genre":Qr.push({key:Sr?"genre":"\\xa9gen",value:nW(Wr)});break;case"beatsPerMinute":Sr||Qr.push({key:"tmpo",value:WZ("data",[bQ(21),bQ(0),cQ(Wr)])});break;case"lyrics":Qr.push({key:Sr?"lyrics":"\\xa9lyr",value:nW(Wr)});break;case"date":Qr.push({key:Sr?"date":"\\xa9day",value:nW(Wr.toISOString().slice(0,10))});break;case"images":for(const rr of Wr)"coverFront"===rr.kind&&Qr.push({key:"covr",value:WZ("data",[bQ(tW[rr.mimeType]??0),bQ(0),Array.from(rr.data)])});break;case"trackNumber":if(Sr){const Sr=void 0!==rr.tracksTotal?`${Wr}/${rr.tracksTotal}`:Wr.toString();Qr.push({key:"track",value:nW(Sr)})}else Qr.push({key:"trkn",value:WZ("data",[bQ(0),bQ(0),cQ(0),cQ(Wr),cQ(rr.tracksTotal??0),cQ(0)])});break;case"discNumber":Sr||Qr.push({key:"disc",value:WZ("data",[bQ(0),bQ(0),cQ(0),cQ(Wr),cQ(rr.discsTotal??0),cQ(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:sr(Zr)}if(rr.raw)for(const Zr in rr.raw){const Wr=rr.raw[Zr];null==Wr||!Sr&&4!==Zr.length||Qr.some((rr=>rr.key===Zr))||("string"===typeof Wr?Qr.push({key:Zr,value:nW(Wr)}):Wr instanceof Uint8Array?Qr.push({key:Zr,value:WZ("data",[bQ(0),bQ(0),Array.from(Wr)])}):Wr instanceof mS&&Qr.push({key:Zr,value:WZ("data",[bQ(tW[Wr.mimeType]??0),bQ(0),Array.from(Wr.data)])}))}return Qr},zW=rr=>{const Sr=hW(rr,!1);return 0===Sr.length?null:aZ("meta",0,0,void 0,[YZ(!1,"mdir","","appl"),WZ("ilst",void 0,Sr.map((rr=>WZ(rr.key,void 0,[rr.value]))))])},YW=rr=>{const Sr=hW(rr,!0);return 0===Sr.length?null:WZ("meta",void 0,[YZ(!1,"mdta",""),aZ("keys",0,0,[bQ(Sr.length)],Sr.map((rr=>WZ("mdta",[...wr.encode(rr.key)])))),WZ("ilst",void 0,Sr.map(((rr,Sr)=>{const Qr=String.fromCharCode(...bQ(Sr+1));return WZ(Qr,void 0,[rr.value])})))])},nW=rr=>WZ("data",[bQ(1),bQ(0),...wr.encode(rr)]),eW=(rr,Sr)=>{switch(rr){case"avc":return Sr.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return Sr}},KW={avc:rr=>rr.info.decoderConfig&&WZ("avcC",[...Ar(rr.info.decoderConfig.description)]),hevc:rr=>rr.info.decoderConfig&&WZ("hvcC",[...Ar(rr.info.decoderConfig.description)]),vp8:PZ,vp9:PZ,av1:rr=>WZ("av1C",zQ(rr.info.decoderConfig.codec)),prores:null},yW=(rr,Sr,Qr)=>{switch(rr){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return Sr}if(Qr)switch(rr){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(rr){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},BW=(rr,Sr)=>{switch(rr){case"aac":case"mp3":case"vorbis":return qZ;case"opus":return MZ;case"flac":return GZ;case"ac3":return AZ;case"eac3":return VZ;case"dts":return iZ}if(Sr)switch(rr){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return RZ}else switch(rr){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return kZ}return null},TW={webvtt:"wvtt"},vW={webvtt:rr=>WZ("vttC",[...wr.encode(rr.info.config.description)])},OW=rr=>{Xr(3===rr.length);let Sr=0;for(let Qr=0;Qr<3;Qr++)Sr<<=5,Sr+=rr.charCodeAt(Qr)-96;return Sr};class LW{constructor(rr,Sr){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,rr._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=rr,rr._setMonotonicity(Sr),rr._writerAcquired=!0}start(){Xr(!this.started),this.target._start(),this.started=!0}write(rr){Xr(this.started&&!this.finalized),this.maybeTrackWrites(rr),this.target._write(rr,this.pos),this.pos+=rr.byteLength}seek(rr){this.pos=rr}getPos(){return this.pos}async flush(){return Xr(this.started&&!this.finalized),this.target._flush()}async finalize(){Xr(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(rr){if(!this.trackedWrites)return;let Sr=this.getPos();if(Sr<this.trackedStart){if(Sr+rr.byteLength<=this.trackedStart)return;rr=rr.subarray(this.trackedStart-Sr),Sr=0}const Qr=Sr+rr.byteLength-this.trackedStart;let Zr=this.trackedWrites.byteLength;for(;Zr<Qr;)Zr*=2;if(Zr!==this.trackedWrites.byteLength){const rr=new Uint8Array(Zr);rr.set(this.trackedWrites,0),this.trackedWrites=rr}this.trackedWrites.set(rr,Sr-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,Sr+rr.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const rr={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,rr}}Qr(15);class lW extends pS{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(rr){!1!==this._monotonicity&&(this._monotonicity=rr)}_dispatchWrite(rr,Sr){this.onwrite?.(rr,Sr),this._emit("write",{start:rr,end:Sr})}slice(rr){if(!Number.isInteger(rr)||rr<0)throw new TypeError("offset must be a non-negative integer.");return new RW(this,rr)}}const XW=65536,PW=2**32;class HW extends lW{constructor(){let rr=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!rr||"object"!==typeof rr)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==rr.onFinalize&&"function"!==typeof rr.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=rr,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(XW,{maxByteLength:PW})}catch{this._buffer=new ArrayBuffer(XW),this._supportsResize=!1}else this._buffer=new ArrayBuffer(XW);this._bytes=new Uint8Array(this._buffer)}_ensureSize(rr){let Sr=this._buffer.byteLength;for(;Sr<rr;)Sr*=2;if(Sr!==this._buffer.byteLength){if(Sr>PW)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(Sr);else{const rr=new ArrayBuffer(Sr),Qr=new Uint8Array(rr);Qr.set(this._bytes,0),this._buffer=rr,this._bytes=Qr}}}_start(){}_write(rr,Sr){this._ensureSize(Sr+rr.byteLength),this._bytes.set(rr,Sr),this._maxPos=Math.max(this._maxPos,Sr+rr.byteLength),this._dispatchWrite(Sr,Sr+rr.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(rr,Sr){return this._bytes.slice(rr,Sr)}}class qW extends lW{_start(){}_write(rr,Sr){this._dispatchWrite(Sr,Sr+rr.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class RW extends lW{constructor(rr,Sr){super(),this._baseTarget=rr,this._offset=Sr}_start(){}_write(rr,Sr){this._baseTarget._write(rr,this._offset+Sr),this._dispatchWrite(Sr,Sr+rr.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(rr){super._setMonotonicity(rr),this._baseTarget._setMonotonicity(rr)}}class gW{constructor(rr,Sr){if(this.rootPath=rr,this.getTarget=Sr,"string"!==typeof rr)throw new TypeError("rootPath must be a string.");if("function"!==typeof Sr)throw new TypeError("getTarget must be a function.")}}const CW=rr=>{const Sr=rr.filePos,Qr=RQ(rr,9),Zr=new US(Qr);if(4095!==Zr.readBits(12))return null;Zr.skipBits(1);if(0!==Zr.readBits(2))return null;const Wr=Zr.readBits(1),ar=Zr.readBits(2)+1,jr=Zr.readBits(4);if(15===jr)return null;Zr.skipBits(1);const Ir=Zr.readBits(3);if(0===Ir)throw new Error("ADTS frames with channel configuration 0 are not supported.");Zr.skipBits(1),Zr.skipBits(1),Zr.skipBits(1),Zr.skipBits(1);const fr=Zr.readBits(13);Zr.skipBits(11);const Er=Zr.readBits(2)+1;if(1!==Er)throw new Error("ADTS frames with more than one AAC frame are not supported.");let pr=null;return 1===Wr?rr.filePos-=2:pr=Zr.readBits(16),{objectType:ar,samplingFrequencyIndex:jr,channelConfiguration:Ir,frameLength:fr,numberOfAacFrames:Er,crcCheck:pr,startPos:Sr}},MW=57600,GW=rr=>{const Sr={},Qr=rr.track;return void 0!==Qr.metadata.name&&(Sr.name=Qr.metadata.name),Sr},kW=function(rr,Sr){const Qr=rr*Sr;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(Qr):Qr},AW=rr=>{if(0===rr.samples.length)return 0;let Sr=1/0,Qr=-1/0;for(let Zr=0;Zr<rr.samples.length;Zr++){const Wr=rr.samples[Zr];Wr.timestamp<Sr&&(Sr=Wr.timestamp),Wr.timestamp+Wr.duration>Qr&&(Qr=Wr.timestamp+Wr.duration)}return Sr===1/0?0:Qr-Sr};class VW extends MQ{constructor(rr,Sr){super(rr),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new HW,this.auxWriter=new LW(this.auxTarget,!1),this.auxBoxWriter=new AQ(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=dr(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=Sr,this.formatOptions={...Sr._options},this.isQuickTime=Sr instanceof xa,this.isCmaf=Sr instanceof pa,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(Sr instanceof pa?1/0:1),this.auxWriter.start()}async start(){const rr=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((rr=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:rr instanceof HW)),this.boxWriter=new AQ(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof HW&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const rr=await this.output._getInitTarget(),Sr=new LW(rr,!0);Sr.start(),this.initWriter=Sr,this.initBoxWriter=new AQ(Sr)}const Sr=this.output.tracks.some((rr=>rr.isVideoTrack()&&"avc"===rr.source._codec));{const rr=this.initBoxWriter??this.boxWriter;if(Xr(rr),this.formatOptions.onFtyp&&rr.writer.startTrackingWrites(),rr.writeBox((rr=>{const Sr=512;return rr.isQuickTime?WZ("ftyp",[QZ("qt  "),bQ(Sr),QZ("qt  ")]):rr.fragmented?rr.cmaf?WZ("ftyp",[QZ("iso5"),bQ(Sr),QZ("iso5"),QZ("iso6"),QZ("mp41"),QZ("cmfc"),QZ("dash")]):WZ("ftyp",[QZ("iso5"),bQ(Sr),QZ("iso5"),QZ("iso6"),QZ("mp41")]):WZ("ftyp",[QZ("isom"),bQ(Sr),QZ("isom"),rr.holdsAvc?QZ("avc1"):[],QZ("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:Sr,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:Sr,start:Qr}=rr.writer.stopTrackingWrites();this.formatOptions.onFtyp(Sr,Qr)}this.ftypSize=rr.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const Qr of this.output.tracks)if(void 0===Qr.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(Xr(this.writer),Xr(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=fZ(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const Qr of this.output.tracks)Qr.isVideoTrack()&&Qr.metadata.decoderConfig?this.getVideoTrackData(Qr,Qr.metadata.primingPacket??null,{decoderConfig:Qr.metadata.decoderConfig}):Qr.isAudioTrack()&&Qr.metadata.decoderConfig&&this.getAudioTrackData(Qr,Qr.metadata.primingPacket??null,{decoderConfig:Qr.metadata.decoderConfig});rr()}allTracksAreKnown(){for(const rr of this.output.tracks)if(!rr.source._closed&&!this.trackDatas.some((Sr=>Sr.track===rr)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const rr=this.trackDatas.map((rr=>{if("video"===rr.type)return rr.info.decoderConfig.codec;if("audio"===rr.type)return rr.info.decoderConfig.codec;return{webvtt:"wvtt"}[rr.track.source._codec]}));return(rr=>{let Sr=(rr.hasVideo?"video/":rr.hasAudio?"audio/":"application/")+(rr.isQuickTime?"quicktime":"mp4");rr.codecStrings.length>0&&(Sr+=`; codecs="${[...new Set(rr.codecStrings)].join(", ")}"`);return Sr})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((rr=>"video"===rr.type)),hasAudio:this.trackDatas.some((rr=>"audio"===rr.type)),codecStrings:rr})}getVideoTrackData(rr,Sr,Qr){const Zr=this.trackDatas.find((Sr=>Sr.track===rr));if(Zr)return Zr;OQ(Qr,rr.source._codec),Xr(Qr),Xr(Qr.decoderConfig);const Wr={...Qr.decoderConfig};Xr(void 0!==Wr.codedWidth),Xr(void 0!==Wr.codedHeight);let ar=!1;if("avc"!==rr.source._codec||Wr.description){if("hevc"===rr.source._codec&&!Wr.description){if(!Sr)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const rr=GS(Sr.data);if(!rr)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");Wr.description=(rr=>{const Sr=[];Sr.push(rr.configurationVersion),Sr.push((3&rr.generalProfileSpace)<<6|(1&rr.generalTierFlag)<<5|31&rr.generalProfileIdc),Sr.push(rr.generalProfileCompatibilityFlags>>>24&255),Sr.push(rr.generalProfileCompatibilityFlags>>>16&255),Sr.push(rr.generalProfileCompatibilityFlags>>>8&255),Sr.push(255&rr.generalProfileCompatibilityFlags),Sr.push(...rr.generalConstraintIndicatorFlags),Sr.push(255&rr.generalLevelIdc),Sr.push(240|rr.minSpatialSegmentationIdc>>8&15),Sr.push(255&rr.minSpatialSegmentationIdc),Sr.push(252|3&rr.parallelismType),Sr.push(252|3&rr.chromaFormatIdc),Sr.push(248|7&rr.bitDepthLumaMinus8),Sr.push(248|7&rr.bitDepthChromaMinus8),Sr.push(rr.avgFrameRate>>8&255),Sr.push(255&rr.avgFrameRate),Sr.push((3&rr.constantFrameRate)<<6|(7&rr.numTemporalLayers)<<3|(1&rr.temporalIdNested)<<2|3&rr.lengthSizeMinusOne),Sr.push(255&rr.arrays.length);for(const Qr of rr.arrays){Sr.push((1&Qr.arrayCompleteness)<<7|63&Qr.nalUnitType),Sr.push(Qr.nalUnits.length>>8&255),Sr.push(255&Qr.nalUnits.length);for(const rr of Qr.nalUnits){Sr.push(rr.length>>8&255),Sr.push(255&rr.length);for(let Qr=0;Qr<rr.length;Qr++)Sr.push(rr[Qr])}}return new Uint8Array(Sr)})(rr),ar=!0}}else{if(!Sr)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const rr=qS(Sr.data);if(!rr)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");Wr.description=(rr=>{const Sr=[];Sr.push(rr.configurationVersion),Sr.push(rr.avcProfileIndication),Sr.push(rr.profileCompatibility),Sr.push(rr.avcLevelIndication),Sr.push(252|3&rr.lengthSizeMinusOne),Sr.push(224|31&rr.sequenceParameterSets.length);for(const Qr of rr.sequenceParameterSets){const rr=Qr.byteLength;Sr.push(rr>>8),Sr.push(255&rr);for(let Zr=0;Zr<rr;Zr++)Sr.push(Qr[Zr])}Sr.push(rr.pictureParameterSets.length);for(const Qr of rr.pictureParameterSets){const rr=Qr.byteLength;Sr.push(rr>>8),Sr.push(255&rr);for(let Zr=0;Zr<rr;Zr++)Sr.push(Qr[Zr])}if((100===rr.avcProfileIndication||110===rr.avcProfileIndication||122===rr.avcProfileIndication||144===rr.avcProfileIndication)&&null!==rr.chromaFormat){Xr(null!==rr.bitDepthLumaMinus8),Xr(null!==rr.bitDepthChromaMinus8),Xr(null!==rr.sequenceParameterSetExt),Sr.push(252|3&rr.chromaFormat),Sr.push(248|7&rr.bitDepthLumaMinus8),Sr.push(248|7&rr.bitDepthChromaMinus8),Sr.push(rr.sequenceParameterSetExt.length);for(const Qr of rr.sequenceParameterSetExt){const rr=Qr.byteLength;Sr.push(rr>>8),Sr.push(255&rr);for(let Zr=0;Zr<rr;Zr++)Sr.push(Qr[Zr])}}return new Uint8Array(Sr)})(rr),ar=!0}const jr=((rr,Sr)=>{const Qr=rr<0?-1:1;let Zr=0,Wr=1,ar=1,jr=0,Ir=rr=Math.abs(rr);for(;;){const rr=Math.floor(Ir),fr=rr*ar+Zr,Er=rr*jr+Wr;if(Er>Sr)return{num:Qr*ar,den:jr};if(Zr=ar,Wr=jr,ar=fr,jr=Er,Ir=1/(Ir-rr),!isFinite(Ir))break}return{num:Qr*ar,den:jr}})(1/(rr.metadata.frameRate??MW),1e6).den,Ir=Wr.displayAspectWidth,fr=Wr.displayAspectHeight,Er=void 0===Ir||void 0===fr?{num:1,den:1}:fS({num:Ir*Wr.codedHeight,den:fr*Wr.codedWidth}),pr="ap4h"===Wr.codec||"ap4x"===Wr.codec,xr={muxer:this,track:rr,type:"video",info:{width:Wr.codedWidth,height:Wr.codedHeight,pixelAspectRatio:Er,decoderConfig:Wr,requiresAnnexBTransformation:ar,hasAlphaChannel:pr},timescale:jr,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:rr.source._nominalBitrate??rr.metadata.averageBitrate??0,maxBitrate:rr.source._nominalBitrate??rr.metadata.bitrate??0};return this.trackDatas.push(xr),this.trackDatas.sort(((rr,Sr)=>rr.track.id-Sr.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),xr}getAudioTrackData(rr,Sr,Qr){const Zr=this.trackDatas.find((Sr=>Sr.track===rr));if(Zr)return Zr;lQ(Qr,rr.source._codec),Xr(Qr),Xr(Qr.decoderConfig);const Wr={...Qr.decoderConfig};let ar=!1;if("aac"===rr.source._codec&&!Wr.description){if(!Sr)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const rr=CW(HQ.tempFromBytes(Sr.data));if(!rr)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const Qr=tS[rr.samplingFrequencyIndex],Zr=hS[rr.channelConfiguration];if(void 0===Qr||void 0===Zr)throw new Error("Invalid ADTS frame header.");Wr.description=zS({objectType:rr.objectType,outputSampleRate:Qr,outputNumberOfChannels:Zr}),ar=!0}if(!Sr){if("ac3"===rr.source._codec||"eac3"===rr.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===rr.source._codec)throw new Error("DTS requires a priming packet.")}const jr={muxer:this,track:rr,type:"audio",info:{numberOfChannels:Qr.decoderConfig.numberOfChannels,sampleRate:Qr.decoderConfig.sampleRate,decoderConfig:Wr,requiresPcmTransformation:!this.isFragmented&&pQ.includes(rr.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:ar,primingPacket:Sr},timescale:Wr.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:rr.source._nominalBitrate??rr.metadata.averageBitrate??0,maxBitrate:rr.source._nominalBitrate??rr.metadata.bitrate??0};return this.trackDatas.push(jr),this.trackDatas.sort(((rr,Sr)=>rr.track.id-Sr.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),jr}getSubtitleTrackData(rr,Sr){const Qr=this.trackDatas.find((Sr=>Sr.track===rr));if(Qr)return Qr;XQ(Sr),Xr(Sr),Xr(Sr.config);const Zr={muxer:this,track:rr,type:"subtitle",info:{config:Sr.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:rr.source._nominalBitrate??rr.metadata.averageBitrate??0,maxBitrate:rr.source._nominalBitrate??rr.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(Zr),this.trackDatas.sort(((rr,Sr)=>rr.track.id-Sr.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),Zr}async addEncodedVideoPacket(rr,Sr,Qr){const Zr=await this.mutex.acquire();try{const Zr=this.getVideoTrackData(rr,Sr,Qr);let Wr=Sr.data;if(Zr.info.requiresAnnexBTransformation){const rr=[...lS(Wr)].map((rr=>Wr.subarray(rr.offset,rr.offset+rr.length)));if(0===rr.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");Wr=HS(rr,4)}this.validateTimestamp(Zr.track,Sr.timestamp,"key"===Sr.type);const ar=this.createSampleForTrack(Zr,Wr,Sr.timestamp,Sr.duration,Sr.type);await this.registerSample(Zr,ar)}finally{Zr()}}async addEncodedAudioPacket(rr,Sr,Qr){const Zr=await this.mutex.acquire();try{const Zr=this.getAudioTrackData(rr,Sr,Qr);let Wr=Sr.data;if(Zr.info.requiresAdtsStripping){const rr=CW(HQ.tempFromBytes(Wr));if(!rr)throw new Error("Expected ADTS frame, didn\'t get one.");const Sr=null===rr.crcCheck?7:9;Wr=Wr.subarray(Sr)}this.validateTimestamp(Zr.track,Sr.timestamp,"key"===Sr.type);let ar=Sr.timestamp,jr=Sr.duration;if(Zr.info.requiresPcmTransformation){const rr=nQ(Zr.info.decoderConfig.codec).sampleSize*Zr.info.numberOfChannels;if(jr=Wr.byteLength/rr/Zr.info.sampleRate,null!==Zr.info.expectedNextPcmPacketTimestamp){const rr=ar-Zr.info.expectedNextPcmPacketTimestamp;if(rr<.01)ar=Zr.info.expectedNextPcmPacketTimestamp;else{const Sr=await this.padWithSilence(Zr,Zr.info.expectedNextPcmPacketTimestamp,rr);ar=Zr.info.expectedNextPcmPacketTimestamp+Sr}}Zr.info.expectedNextPcmPacketTimestamp=ar+jr}const Ir=this.createSampleForTrack(Zr,Wr,ar,jr,Sr.type);await this.registerSample(Zr,Ir)}finally{Zr()}}async padWithSilence(rr,Sr,Qr){const Zr=kW(Qr,rr.timescale);if(Qr=Zr/rr.timescale,Zr>0){const{sampleSize:Wr,silentValue:ar}=nQ(rr.info.decoderConfig.codec),jr=Zr*rr.info.numberOfChannels,Ir=new Uint8Array(Wr*jr).fill(ar),fr=this.createSampleForTrack(rr,new Uint8Array(Ir.buffer),Sr,Qr,"key");await this.registerSample(rr,fr)}return Qr}async addSubtitleCue(rr,Sr,Qr){const Zr=await this.mutex.acquire();try{const Zr=this.getSubtitleTrackData(rr,Qr);this.validateTimestamp(Zr.track,Sr.timestamp,!0),"webvtt"===rr.source._codec&&(Zr.cueQueue.push(Sr),await this.processWebVTTCues(Zr,Sr.timestamp))}finally{Zr()}}async processWebVTTCues(rr,Sr){for(;rr.cueQueue.length>0;){rr.lastCueEndTimestamp??=Math.min(0,rr.cueQueue[0].timestamp);const Qr=new Set([]);for(const fr of rr.cueQueue)Xr(fr.timestamp<=Sr),Xr(rr.lastCueEndTimestamp<=fr.timestamp+fr.duration),Qr.add(Math.max(fr.timestamp,rr.lastCueEndTimestamp)),Qr.add(fr.timestamp+fr.duration);const Zr=[...Qr].sort(((rr,Sr)=>rr-Sr)),Wr=Zr[0],ar=Zr[1]??Wr;if(Sr<ar)break;if(rr.lastCueEndTimestamp<Wr){this.auxWriter.seek(0);const Sr=EW();this.auxBoxWriter.writeBox(Sr);const Qr=this.auxTarget._getSlice(0,this.auxWriter.getPos()),Zr=this.createSampleForTrack(rr,Qr,rr.lastCueEndTimestamp,Wr-rr.lastCueEndTimestamp,"key");await this.registerSample(rr,Zr),rr.lastCueEndTimestamp=Wr}this.auxWriter.seek(0);for(let Sr=0;Sr<rr.cueQueue.length;Sr++){const Qr=rr.cueQueue[Sr];if(Qr.timestamp>=ar)break;GQ.lastIndex=0;const Zr=GQ.test(Qr.text),jr=Qr.timestamp+Qr.duration;let Ir=rr.cueToSourceId.get(Qr);if(void 0===Ir&&ar<jr&&(Ir=rr.nextSourceId++,rr.cueToSourceId.set(Qr,Ir)),Qr.notes){const rr=xW(Qr.notes);this.auxBoxWriter.writeBox(rr)}const fr=pW(Qr.text,Zr?Wr:null,Qr.identifier??null,Qr.settings??null,Ir??null);this.auxBoxWriter.writeBox(fr),jr===ar&&rr.cueQueue.splice(Sr--,1)}const jr=this.auxTarget._getSlice(0,this.auxWriter.getPos()),Ir=this.createSampleForTrack(rr,jr,Wr,ar-Wr,"key");await this.registerSample(rr,Ir),rr.lastCueEndTimestamp=ar}}createSampleForTrack(rr,Sr,Qr,Zr,Wr){return{timestamp:Qr,decodeTimestamp:Qr,duration:Zr,data:Sr,size:Sr.byteLength,type:Wr,timescaleUnitsToNextSample:kW(Zr,rr.timescale)}}processTimestamps(rr,Sr){if(0===rr.timestampProcessingQueue.length)return;if("audio"===rr.type&&rr.info.requiresPcmTransformation){Xr(!this.isFragmented),rr.startTimestampOffset??=rr.timestampProcessingQueue[0].timestamp;let Sr=0;for(let Qr=0;Qr<rr.timestampProcessingQueue.length;Qr++){const Zr=rr.timestampProcessingQueue[Qr];Sr+=kW(Zr.duration,rr.timescale)}if(0===rr.timeToSampleTable.length)rr.timeToSampleTable.push({sampleCount:Sr,sampleDelta:1});else{Cr(rr.timeToSampleTable).sampleCount+=Sr}return void(rr.timestampProcessingQueue.length=0)}const Qr=rr.timestampProcessingQueue.map((rr=>rr.timestamp)).sort(((rr,Sr)=>rr-Sr));this.isFragmented?rr.startTimestampOffset??=Math.min(Qr[0],0):rr.startTimestampOffset??=Qr[0];for(let Zr=0;Zr<rr.timestampProcessingQueue.length;Zr++){const Sr=rr.timestampProcessingQueue[Zr];Sr.decodeTimestamp=Qr[Zr];const Wr=kW(Sr.timestamp-Sr.decodeTimestamp,rr.timescale),ar=kW(Sr.duration,rr.timescale);if(null!==rr.lastTimescaleUnits){Xr(rr.lastSample);const Qr=kW(Sr.decodeTimestamp,rr.timescale,!1),Zr=Math.round(Qr-rr.lastTimescaleUnits);if(Xr(Zr>=0),rr.lastTimescaleUnits+=Zr,rr.lastSample.timescaleUnitsToNextSample=Zr,!this.isFragmented){let Sr=Cr(rr.timeToSampleTable);if(Xr(Sr),1===Sr.sampleCount){Sr.sampleDelta=Zr;const Qr=rr.timeToSampleTable[rr.timeToSampleTable.length-2];Qr&&Qr.sampleDelta===Zr&&(Qr.sampleCount++,rr.timeToSampleTable.pop(),Sr=Qr)}else Sr.sampleDelta!==Zr&&(Sr.sampleCount--,rr.timeToSampleTable.push(Sr={sampleCount:1,sampleDelta:Zr}));Sr.sampleDelta===ar?Sr.sampleCount++:rr.timeToSampleTable.push({sampleCount:1,sampleDelta:ar});const Qr=Cr(rr.compositionTimeOffsetTable);Xr(Qr),Qr.sampleCompositionTimeOffset===Wr?Qr.sampleCount++:rr.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:Wr})}}else rr.lastTimescaleUnits=kW(Sr.decodeTimestamp,rr.timescale,!1),this.isFragmented||(rr.timeToSampleTable.push({sampleCount:1,sampleDelta:ar}),rr.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:Wr}));rr.lastSample=Sr}if(rr.timestampProcessingQueue.length=0,Xr(rr.lastSample),Xr(null!==rr.lastTimescaleUnits),void 0!==Sr&&0===rr.lastSample.timescaleUnitsToNextSample){Xr("key"===Sr.type);const Qr=kW(Sr.timestamp,rr.timescale,!1),Zr=Math.round(Qr-rr.lastTimescaleUnits);rr.lastSample.timescaleUnitsToNextSample=Zr}}async registerSample(rr,Sr){"key"===Sr.type&&this.processTimestamps(rr,Sr),rr.timestampProcessingQueue.push(Sr),this.isFragmented?(rr.sampleQueue.push(Sr),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(rr,Sr):await this.addSampleToTrack(rr,Sr)}async addSampleToTrack(rr,Sr){if(!this.isFragmented&&(rr.samples.push(Sr),"reserve"===this.fastStart)){const Sr=rr.track.metadata.maximumPacketCount;if(Xr(void 0!==Sr),rr.samples.length>Sr)throw new Error(`Track #${rr.track.id} has already reached the maximum packet count (${Sr}). Either add less packets or increase the maximum packet count.`)}let Qr=!1;if(rr.currentChunk){rr.currentChunk.startTimestamp=Math.min(rr.currentChunk.startTimestamp,Sr.timestamp);const Zr=Sr.timestamp-rr.currentChunk.startTimestamp;if(this.isFragmented){const Wr=this.trackDatas.every((Qr=>{if(rr===Qr)return"key"===Sr.type;const Zr=Qr.sampleQueue[0];return Zr?"key"===Zr.type:Qr.closed}));Zr>=this.minimumFragmentDuration&&Wr&&Sr.timestamp>this.maxWrittenTimestamp&&(Qr=!0,await this.finalizeFragment())}else Qr=Zr>=.5}else Qr=!0;Qr&&(rr.currentChunk&&await this.finalizeCurrentChunk(rr),rr.currentChunk={startTimestamp:Sr.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),Xr(rr.currentChunk),rr.currentChunk.samples.push(Sr),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,Sr.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,Sr.timestamp+Sr.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,Sr.timestamp))}async finalizeCurrentChunk(rr){if(Xr(!this.isFragmented),Xr(this.writer),!rr.currentChunk)return;rr.finalizedChunks.push(rr.currentChunk),this.finalizedChunks.push(rr.currentChunk);let Sr=rr.currentChunk.samples.length;if("audio"===rr.type&&rr.info.requiresPcmTransformation&&(Sr=rr.currentChunk.samples.reduce(((Sr,Qr)=>Sr+kW(Qr.duration,rr.timescale)),0)),0!==rr.compactlyCodedChunkTable.length&&Cr(rr.compactlyCodedChunkTable).samplesPerChunk===Sr||rr.compactlyCodedChunkTable.push({firstChunk:rr.finalizedChunks.length,samplesPerChunk:Sr}),"in-memory"!==this.fastStart){rr.currentChunk.offset=this.writer.getPos();for(const Sr of rr.currentChunk.samples)Xr(Sr.data),this.writer.write(Sr.data),Sr.data=null;await this.writer.flush()}else rr.currentChunk.offset=0}async interleaveSamples(){let rr=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(Xr(this.isFragmented),rr||this.allTracksAreKnown())rr:for(;;){let Sr=null,Qr=1/0;for(const Wr of this.trackDatas){if(!rr&&0===Wr.sampleQueue.length&&!Wr.closed)break rr;Wr.sampleQueue.length>0&&Wr.sampleQueue[0].timestamp<Qr&&(Sr=Wr,Qr=Wr.sampleQueue[0].timestamp)}if(!Sr)break;const Zr=Sr.sampleQueue.shift();await this.addSampleToTrack(Sr,Zr)}}async finalizeFragment(){let rr=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(Xr(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const rr=this.initBoxWriter??this.boxWriter;Xr(rr),this.formatOptions.onMoov&&rr.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const Sr=EZ(this);if(rr.writeBox(Sr),this.formatOptions.onMoov){const{data:Sr,start:Qr}=rr.writer.stopTrackingWrites();this.formatOptions.onMoov(Sr,Qr)}if(this.isCmaf){Xr(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new AQ(this.writer);const rr=this.boxWriter.measureBox(jZ()),Sr=this.boxWriter.measureBox(IZ(this,0));this.segmentHeaderSize=rr+Sr,this.writer.seek(this.segmentHeaderSize)}}Xr(this.writer),Xr(this.boxWriter);const Sr=this.trackDatas.filter((rr=>rr.currentChunk));if(0===Sr.length)return void(rr&&await this.writer.flush());const Qr=this.nextFragmentNumber++,Zr=rW(Qr,Sr),Wr=this.writer.getPos(),ar=Wr+this.boxWriter.measureBox(Zr);let jr=ar+8,Ir=1/0;for(let mr=0;mr<Sr.length;mr++){const rr=Sr[mr];Xr(rr.currentChunk),Xr(null!==rr.startTimestampOffset),rr.currentChunk.offset=jr,rr.currentChunk.moofOffset=Wr,rr.currentChunk.trafIndex=mr,rr.currentChunk.startTimestamp-=rr.startTimestampOffset;for(const Sr of rr.currentChunk.samples)jr+=Sr.size,Sr.timestamp-=rr.startTimestampOffset,Sr.decodeTimestamp-=rr.startTimestampOffset;Ir=Math.min(Ir,rr.currentChunk.startTimestamp)}const fr=jr-ar,Er=fr>=2**32;if(Er)for(const mr of Sr)mr.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const pr=rW(Qr,Sr);if(this.boxWriter.writeBox(pr),this.formatOptions.onMoof){const{data:rr,start:Sr}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(rr,Sr,Ir)}Xr(this.writer.getPos()===ar),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const xr=fZ(Er);xr.size=fr,this.boxWriter.writeBox(xr),this.writer.seek(ar+(Er?16:8));for(const mr of Sr)for(const rr of mr.currentChunk.samples)this.writer.write(rr.data),rr.data=null;if(this.formatOptions.onMdat){const{data:rr,start:Sr}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(rr,Sr)}for(const mr of Sr)mr.finalizedChunks.push(mr.currentChunk),this.finalizedChunks.push(mr.currentChunk),mr.currentChunk=null;rr&&await this.writer.flush()}async registerSampleFastStartReserve(rr,Sr){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(rr,Sr)):rr.sampleQueue.push(Sr)}async createFastStartReserveMdat(){Xr(this.writer),Xr(this.boxWriter),this.ensureOneEnabledTrack();const rr=EZ(this),Sr=this.boxWriter.measureBox(rr)+this.computeSampleTableSizeUpperBound()+4096;Xr(null!==this.ftypSize),this.writer.seek(this.ftypSize+Sr),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=fZ(!0),this.boxWriter.writeBox(this.mdat);for(const Qr of this.trackDatas){for(const rr of Qr.sampleQueue)await this.addSampleToTrack(Qr,rr);Qr.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){Xr("reserve"===this.fastStart);let rr=0;for(const Sr of this.trackDatas){const Qr=Sr.track.metadata.maximumPacketCount;Xr(void 0!==Qr),rr+=8*Math.ceil(2/3*Qr),rr+=4*Qr,rr+=8*Math.ceil(2/3*Qr),rr+=12*Math.ceil(2/3*Qr),rr+=4*Qr,rr+=8*Qr}return rr}async onTrackClose(rr){const Sr=await this.mutex.acquire(),Qr=this.trackDatas.find((Sr=>Sr.track===rr));Qr&&(Qr.closed=!0,"subtitle"===Qr.type&&"webvtt"===rr.source._codec&&await this.processWebVTTCues(Qr,1/0),this.processTimestamps(Qr)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),Sr()}ensureOneEnabledTrack(){for(const rr of["video","audio","subtitle"]){const Sr=this.trackDatas.filter((Sr=>Sr.type===rr));if(0===Sr.length)continue;if(!Sr.some((rr=>!1!==rr.track.metadata.disposition?.default))){const rr=Sr[0];rr.track.metadata.disposition={...rr.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){Xr(this.isFragmented);const rr=await this.mutex.acquire();try{for(const rr of this.trackDatas)"subtitle"===rr.type&&"webvtt"===rr.track.source._codec&&await this.processWebVTTCues(rr,1/0),this.processTimestamps(rr);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{rr()}}async finalize(){const rr=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const Qr of this.trackDatas)Qr.closed=!0,"subtitle"===Qr.type&&"webvtt"===Qr.track.source._codec&&await this.processWebVTTCues(Qr,1/0),this.processTimestamps(Qr);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const Qr of this.trackDatas){await this.finalizeCurrentChunk(Qr);const rr=AW(Qr);if(rr>0){let Sr=0;for(const rr of Qr.samples)Sr+=rr.size;Qr.avgBitrate=Math.round(8*Sr/rr)}else Qr.avgBitrate=0;let Sr=0,Zr=0,Wr=0;for(let ar=0;ar<Qr.samples.length;ar++){const rr=Qr.samples[ar];for(Zr+=rr.size;rr.decodeTimestamp-Qr.samples[Sr].decodeTimestamp>=1;)Zr-=Qr.samples[Sr].size,Sr++;Wr=Math.max(Wr,Zr)}if(Qr.maxBitrate=8*Wr,null!==Qr.startTimestampOffset)for(let ar=0;ar<Qr.samples.length;ar++){const rr=Qr.samples[ar];rr.timestamp-=Qr.startTimestampOffset,rr.decodeTimestamp-=Qr.startTimestampOffset}}if(Xr(this.writer),Xr(this.boxWriter),"in-memory"===this.fastStart){let rr;this.mdat=fZ(!1);for(let Qr=0;Qr<2;Qr++){const Sr=EZ(this),Qr=this.boxWriter.measureBox(Sr);rr=this.boxWriter.measureBox(this.mdat);let Zr=this.writer.getPos()+Qr+rr;for(const Wr of this.finalizedChunks){Wr.offset=Zr;for(const{data:Sr}of Wr.samples)Xr(Sr),Zr+=Sr.byteLength,rr+=Sr.byteLength}if(Zr<2**32)break;rr>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const Sr=EZ(this);if(this.boxWriter.writeBox(Sr),this.formatOptions.onMoov){const{data:rr,start:Sr}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(rr,Sr)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=rr,this.boxWriter.writeBox(this.mdat);for(const Qr of this.finalizedChunks)for(const rr of Qr.samples)Xr(rr.data),this.writer.write(rr.data),rr.data=null;if(this.formatOptions.onMdat){const{data:rr,start:Sr}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(rr,Sr)}}else if(this.isFragmented)if(this.isCmaf){const rr=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(jZ()),this.boxWriter.writeBox(IZ(this,rr))}else{const rr=this.writer.getPos(),Qr=(Sr=this.trackDatas,WZ("mfra",void 0,[...Sr.map(IW),fW()]));this.boxWriter.writeBox(Qr);const Zr=this.writer.getPos()-rr;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(Zr)}else{Xr(this.mdat);const rr=this.boxWriter.offsets.get(this.mdat);Xr(void 0!==rr);const Sr=this.writer.getPos()-rr;if(this.mdat.size=Sr,this.mdat.largeSize=Sr>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:rr,start:Sr}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(rr,Sr)}const Qr=EZ(this);if("reserve"===this.fastStart){Xr(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(Qr);const rr=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:rr})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(Qr);if(this.formatOptions.onMoov){const{data:rr,start:Sr}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(rr,Sr)}}var Sr;rr()}}var iW;!function(rr){rr[rr.EBML=440786851]="EBML",rr[rr.EBMLVersion=17030]="EBMLVersion",rr[rr.EBMLReadVersion=17143]="EBMLReadVersion",rr[rr.EBMLMaxIDLength=17138]="EBMLMaxIDLength",rr[rr.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",rr[rr.DocType=17026]="DocType",rr[rr.DocTypeVersion=17031]="DocTypeVersion",rr[rr.DocTypeReadVersion=17029]="DocTypeReadVersion",rr[rr.Void=236]="Void",rr[rr.Segment=408125543]="Segment",rr[rr.SeekHead=290298740]="SeekHead",rr[rr.Seek=19899]="Seek",rr[rr.SeekID=21419]="SeekID",rr[rr.SeekPosition=21420]="SeekPosition",rr[rr.Duration=17545]="Duration",rr[rr.Info=357149030]="Info",rr[rr.TimestampScale=2807729]="TimestampScale",rr[rr.MuxingApp=19840]="MuxingApp",rr[rr.WritingApp=22337]="WritingApp",rr[rr.Tracks=374648427]="Tracks",rr[rr.TrackEntry=174]="TrackEntry",rr[rr.TrackNumber=215]="TrackNumber",rr[rr.TrackUID=29637]="TrackUID",rr[rr.TrackType=131]="TrackType",rr[rr.FlagEnabled=185]="FlagEnabled",rr[rr.FlagDefault=136]="FlagDefault",rr[rr.FlagForced=21930]="FlagForced",rr[rr.FlagOriginal=21934]="FlagOriginal",rr[rr.FlagHearingImpaired=21931]="FlagHearingImpaired",rr[rr.FlagVisualImpaired=21932]="FlagVisualImpaired",rr[rr.FlagCommentary=21935]="FlagCommentary",rr[rr.FlagLacing=156]="FlagLacing",rr[rr.Name=21358]="Name",rr[rr.Language=2274716]="Language",rr[rr.LanguageBCP47=2274717]="LanguageBCP47",rr[rr.CodecID=134]="CodecID",rr[rr.CodecPrivate=25506]="CodecPrivate",rr[rr.CodecDelay=22186]="CodecDelay",rr[rr.SeekPreRoll=22203]="SeekPreRoll",rr[rr.DefaultDuration=2352003]="DefaultDuration",rr[rr.Video=224]="Video",rr[rr.PixelWidth=176]="PixelWidth",rr[rr.PixelHeight=186]="PixelHeight",rr[rr.DisplayWidth=21680]="DisplayWidth",rr[rr.DisplayHeight=21690]="DisplayHeight",rr[rr.DisplayUnit=21682]="DisplayUnit",rr[rr.AlphaMode=21440]="AlphaMode",rr[rr.Audio=225]="Audio",rr[rr.SamplingFrequency=181]="SamplingFrequency",rr[rr.Channels=159]="Channels",rr[rr.BitDepth=25188]="BitDepth",rr[rr.SimpleBlock=163]="SimpleBlock",rr[rr.BlockGroup=160]="BlockGroup",rr[rr.Block=161]="Block",rr[rr.BlockAdditions=30113]="BlockAdditions",rr[rr.BlockMore=166]="BlockMore",rr[rr.BlockAdditional=165]="BlockAdditional",rr[rr.BlockAddID=238]="BlockAddID",rr[rr.BlockDuration=155]="BlockDuration",rr[rr.ReferenceBlock=251]="ReferenceBlock",rr[rr.Cluster=524531317]="Cluster",rr[rr.Timestamp=231]="Timestamp",rr[rr.Cues=475249515]="Cues",rr[rr.CuePoint=187]="CuePoint",rr[rr.CueTime=179]="CueTime",rr[rr.CueTrackPositions=183]="CueTrackPositions",rr[rr.CueTrack=247]="CueTrack",rr[rr.CueClusterPosition=241]="CueClusterPosition",rr[rr.Colour=21936]="Colour",rr[rr.MatrixCoefficients=21937]="MatrixCoefficients",rr[rr.TransferCharacteristics=21946]="TransferCharacteristics",rr[rr.Primaries=21947]="Primaries",rr[rr.Range=21945]="Range",rr[rr.Projection=30320]="Projection",rr[rr.ProjectionType=30321]="ProjectionType",rr[rr.ProjectionPoseYaw=30323]="ProjectionPoseYaw",rr[rr.ProjectionPosePitch=30324]="ProjectionPosePitch",rr[rr.ProjectionPoseRoll=30325]="ProjectionPoseRoll",rr[rr.Attachments=423732329]="Attachments",rr[rr.AttachedFile=24999]="AttachedFile",rr[rr.FileDescription=18046]="FileDescription",rr[rr.FileName=18030]="FileName",rr[rr.FileMediaType=18016]="FileMediaType",rr[rr.FileData=18012]="FileData",rr[rr.FileUID=18094]="FileUID",rr[rr.Chapters=272869232]="Chapters",rr[rr.Tags=307544935]="Tags",rr[rr.Tag=29555]="Tag",rr[rr.Targets=25536]="Targets",rr[rr.TargetTypeValue=26826]="TargetTypeValue",rr[rr.TargetType=25546]="TargetType",rr[rr.TagTrackUID=25541]="TagTrackUID",rr[rr.TagEditionUID=25545]="TagEditionUID",rr[rr.TagChapterUID=25540]="TagChapterUID",rr[rr.TagAttachmentUID=25542]="TagAttachmentUID",rr[rr.SimpleTag=26568]="SimpleTag",rr[rr.TagName=17827]="TagName",rr[rr.TagLanguage=17530]="TagLanguage",rr[rr.TagString=17543]="TagString",rr[rr.TagBinary=17541]="TagBinary",rr[rr.ContentEncodings=28032]="ContentEncodings",rr[rr.ContentEncoding=25152]="ContentEncoding",rr[rr.ContentEncodingOrder=20529]="ContentEncodingOrder",rr[rr.ContentEncodingScope=20530]="ContentEncodingScope",rr[rr.ContentCompression=20532]="ContentCompression",rr[rr.ContentCompAlgo=16980]="ContentCompAlgo",rr[rr.ContentCompSettings=16981]="ContentCompSettings",rr[rr.ContentEncryption=20533]="ContentEncryption"}(iW||(iW={}));iW.EBML,iW.Segment,iW.SeekHead,iW.Info,iW.Cluster,iW.Tracks,iW.Cues,iW.Attachments,iW.Chapters,iW.Tags;const wW=new Uint32Array(256);for(let Xa=0;Xa<256;Xa++){let rr=Xa<<24;for(let Sr=0;Sr<8;Sr++)rr=2147483648&rr?rr<<1^79764919:rr<<1;wW[Xa]=rr>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const cW=new Uint32Array(256);for(let Xa=0;Xa<256;Xa++){let rr=Xa<<24;for(let Sr=0;Sr<8;Sr++)rr=2147483648&rr?rr<<1^79764919:rr<<1;cW[Xa]=rr>>>0&4294967295}const FW=rr=>{let Sr=4294967295;for(let Qr=0;Qr<rr.length;Qr++){const Zr=rr[Qr];Sr=(Sr<<8^cW[Sr>>>24^Zr])>>>0}return Sr},oW=new Uint8Array(16);{const rr=Vr(oW);oW[0]=0,rr.setUint16(1,45069,!1),rr.setUint16(3,1,!1),oW[5]=193,oW[6]=0,oW[7]=0,rr.setUint16(8,1,!1),rr.setUint16(10,61440,!1),rr.setUint32(12,FW(oW.subarray(0,12)),!1)}const bW=new Uint8Array(0);class JW{constructor(rr,Sr,Qr,Zr){let Wr=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,ar=arguments.length>5?arguments[5]:void 0,jr=arguments.length>6?arguments[6]:void 0;if(this.data=rr,this.type=Sr,this.timestamp=Qr,this.duration=Zr,this.sequenceNumber=Wr,rr===bW&&void 0===ar)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===ar&&(ar=rr.byteLength),!(rr instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==Sr&&"delta"!==Sr)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(Qr))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(Zr)||Zr<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(Wr))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(ar)||ar<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==jr&&("object"!==typeof jr||!jr))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==jr?.alpha&&!(jr.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==jr?.alphaByteLength&&(!Number.isInteger(jr.alphaByteLength)||jr.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=ar,this.sideData=jr??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===bW}get microsecondTimestamp(){return Math.trunc(ZS*this.timestamp)}get microsecondDuration(){return Math.trunc(ZS*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let rr=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:rr,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(rr,Sr){if(!(rr instanceof EncodedVideoChunk||rr instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const Qr=new Uint8Array(rr.byteLength);return rr.copyTo(Qr),new JW(Qr,rr.type,rr.timestamp/1e6,(rr.duration??0)/1e6,void 0,void 0,Sr)}clone(rr){if(void 0!==rr&&("object"!==typeof rr||null===rr))throw new TypeError("options, when provided, must be an object.");if(void 0!==rr?.data&&!(rr.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==rr?.type&&"key"!==rr.type&&"delta"!==rr.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==rr?.timestamp&&!Number.isFinite(rr.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==rr?.duration&&!Number.isFinite(rr.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==rr?.sequenceNumber&&!Number.isFinite(rr.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==rr?.sideData&&("object"!==typeof rr.sideData||null===rr.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new JW(rr?.data??this.data,rr?.type??this.type,rr?.timestamp??this.timestamp,rr?.duration??this.duration,rr?.sequenceNumber??this.sequenceNumber,this.byteLength,rr?.sideData??this.sideData)}}var DW;!function(rr){rr[rr.PCM=1]="PCM",rr[rr.IEEE_FLOAT=3]="IEEE_FLOAT",rr[rr.ALAW=6]="ALAW",rr[rr.MULAW=7]="MULAW",rr[rr.EXTENSIBLE=65534]="EXTENSIBLE"}(DW||(DW={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let dW=-1/0,sW=-1/0,uW=null;"undefined"!==typeof FinalizationRegistry&&(uW=new FinalizationRegistry((rr=>{const Sr=performance.now();"video"===rr.type?(Sr-dW>=1e3&&(yS._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),dW=Sr),"undefined"!==typeof VideoFrame&&rr.data instanceof VideoFrame&&rr.data.close()):(Sr-sW>=1e3&&(yS._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),sW=Sr),"undefined"!==typeof AudioData&&rr.data instanceof AudioData&&rr.data.close())})));const ra=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(ra);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class Sa{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(rr){}close(){if(this._closingPromise)return;const rr=this._connectedTrack;if(!rr)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===rr.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==rr.output.state&&"finalized"!==rr.output.state&&rr.output._muxer.onTrackClose(rr)})()}async _flushOrWaitForOngoingClose(rr){return this._closingPromise??=(async()=>{await this._flushAndClose(rr),this._closed=!0})()}}class Qa extends Sa{constructor(rr){if(super(),!EQ.includes(rr))throw new TypeError(`Invalid video codec \'${rr}\'. Must be one of: ${EQ.join(", ")}.`);this._codec=rr}}const Za=(rr,Sr)=>{if(rr.metadata.hasOnlyKeyPackets&&"key"!==Sr.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Wa extends Qa{constructor(rr){super(rr)}add(rr,Sr){if(!(rr instanceof JW))throw new TypeError("packet must be an EncodedPacket.");if(rr.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==Sr&&(!Sr||"object"!==typeof Sr))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),Za(this._connectedTrack,rr),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,rr,Sr)}}class aa extends Sa{constructor(rr){if(super(),!mQ.includes(rr))throw new TypeError(`Invalid audio codec \'${rr}\'. Must be one of: ${mQ.join(", ")}.`);this._codec=rr}}class ja extends Sa{constructor(rr){if(super(),!NQ.includes(rr))throw new TypeError(`Invalid subtitle codec \'${rr}\'. Must be one of: ${NQ.join(", ")}.`);this._codec=rr}}class Ia{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((rr=>EQ.includes(rr)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((rr=>mQ.includes(rr)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((rr=>NQ.includes(rr)))}_codecUnsupportedHint(rr){return""}_isFragmentedIsobmff(){return!1}}class fa extends Ia{constructor(){let rr=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!rr||"object"!==typeof rr)throw new TypeError("options must be an object.");if(void 0!==rr.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(rr.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==rr.minimumFragmentDuration&&(!IS(rr.minimumFragmentDuration)||rr.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==rr.onFtyp&&"function"!==typeof rr.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==rr.onMoov&&"function"!==typeof rr.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==rr.onMdat&&"function"!==typeof rr.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==rr.onMoof&&"function"!==typeof rr.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==rr.metadataFormat&&!["mdir","mdta","udta","auto"].includes(rr.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=rr}getSupportedTrackCounts(){const rr=2**32-1;return{video:{min:0,max:rr},audio:{min:0,max:rr},subtitle:{min:0,max:rr},total:{min:0,max:rr}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(rr){return new VW(rr,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class Ea extends fa{constructor(rr){super(rr)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...EQ,...xQ,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...NQ]}_codecUnsupportedHint(rr){return(new xa).getSupportedCodecs().includes(rr)?" Switching to MOV will grant support for this codec.":""}}class pa extends fa{constructor(rr){super(rr)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...EQ,...xQ,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...NQ]}}class xa extends fa{constructor(rr){super(rr)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...EQ,...mQ]}_codecUnsupportedHint(rr){return(new Ea).getSupportedCodecs().includes(rr)?" Switching to MP4 will grant support for this codec.":""}}const ma=["video","audio","subtitle"];class Na{constructor(rr,Sr,Qr,Zr,Wr){this.id=rr,this.output=Sr,this.type=Qr,this.source=Zr,this.metadata=Wr}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(rr){if(!(rr instanceof Na))throw new TypeError("other must be an OutputTrack.");if(this===rr)return!1;const Sr=ES(this.metadata.group),Qr=ES(rr.metadata.group);for(const Zr of Sr){if(this.type!==rr.type&&Qr.some((rr=>Zr===rr)))return!0;if(Qr.some((rr=>Zr._pairedGroups.has(rr))))return!0}return!1}}class Ua extends Na{constructor(rr,Sr,Qr,Zr){super(rr,Sr,"video",Qr,Zr)}}class ta extends Na{constructor(rr,Sr,Qr,Zr){super(rr,Sr,"audio",Qr,Zr)}}class ha extends Na{constructor(rr,Sr,Qr,Zr){super(rr,Sr,"subtitle",Qr,Zr)}}class za{constructor(){this._pairedGroups=new Set}pairWith(rr){if(!(rr instanceof za))throw new TypeError("other must be an OutputTrackGroup.");if(this===rr)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(rr),rr._pairedGroups.add(this)}}const Ya=rr=>{if(!rr||"object"!==typeof rr)throw new TypeError("metadata must be an object.");if(void 0!==rr.languageCode&&(Sr=rr.languageCode,!QS.test(Sr)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var Sr;if(void 0!==rr.name&&"string"!==typeof rr.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==rr.disposition&&(rr=>{if(!rr||"object"!==typeof rr)throw new TypeError("disposition must be an object.");if(void 0!==rr.default&&"boolean"!==typeof rr.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==rr.primary&&"boolean"!==typeof rr.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==rr.forced&&"boolean"!==typeof rr.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==rr.original&&"boolean"!==typeof rr.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==rr.commentary&&"boolean"!==typeof rr.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==rr.hearingImpaired&&"boolean"!==typeof rr.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==rr.visuallyImpaired&&"boolean"!==typeof rr.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(rr.disposition),void 0!==rr.maximumPacketCount&&(!Number.isInteger(rr.maximumPacketCount)||rr.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==rr.bitrate&&(!Number.isFinite(rr.bitrate)||rr.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==rr.averageBitrate&&(!Number.isFinite(rr.averageBitrate)||rr.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==rr.group&&!(rr.group instanceof za)&&(!Array.isArray(rr.group)||rr.group.some((rr=>!(rr instanceof za)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class na extends pS{get target(){const rr="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(rr);const Sr=this._getRootTarget();if(aS(Sr))throw new TypeError(rr);return Sr}constructor(rr){if(super(),this.state="pending",this.defaultTrackGroup=new za,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Dr,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!rr||"object"!==typeof rr)throw new TypeError("options must be an object.");if(!(rr.format instanceof Ia))throw new TypeError("options.format must be an OutputFormat.");if(!(rr.target instanceof lW||rr.target instanceof gW))throw new TypeError("options.target must be a Target or a PathedTarget.");if(rr.target instanceof lW&&this._rememberTarget(rr.target),void 0!==rr.initTarget&&!(rr.initTarget instanceof lW)&&"function"!==typeof rr.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==rr.onFinalize&&"function"!==typeof rr.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=rr.format,this.Xx=rr.target,this._onFinalize=rr.onFinalize??null,this._initTarget=rr.initTarget??null,this._initTarget instanceof lW&&this._rememberTarget(this._initTarget),this._muxer=rr.format._createMuxer(this)}_getTargetValidated(rr){Xr(this.Xx instanceof gW);const Sr=this.Xx.getTarget(rr),Qr=rr=>{if(!(rr instanceof lW))throw new TypeError("getTarget must return a Target.");return rr};return aS(Sr)?Sr.then(Qr):Qr(Sr)}async _getTarget(rr){Xr(this.Xx instanceof gW);const Sr=await this._getTargetValidated(rr);return this._emit("target",{target:Sr,request:rr,isRoot:rr.isRoot}),"canceled"===this.state?await Sr._close():this._rememberTarget(Sr),Sr}_rememberTarget(rr){this._unfinalizedTargets.add(rr),rr.on("finalized",(()=>this._unfinalizedTargets.delete(rr)),{once:!0})}async _getInitTarget(){if(Xr(null!==this._initTarget),this._initTarget instanceof lW)return this._initTarget;const rr=await this._initTarget();return"canceled"===this.state?await rr._close():this._rememberTarget(rr),rr}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.Xx instanceof lW)return this._emit("target",{target:this.Xx,request:null,isRoot:!0}),this._rootTarget=this.Xx,this.Xx;const rr={path:this.Xx.rootPath,isRoot:!0,mimeType:this.format.mimeType},Sr=this._getTargetValidated(rr),Qr=Sr=>("canceled"===this.state?Sr._close():this._rememberTarget(Sr),this._emit("target",{target:Sr,request:rr,isRoot:!0}),this._rootTarget=Sr,Sr);return aS(Sr)?this._rootTargetPromise=Sr.then(Qr):Qr(Sr)}_getRootWriter(rr){return this._rootWriterPromise??=(async()=>{const Sr=await this._getRootTarget(),Qr=new LW(Sr,"boolean"===typeof rr?rr:rr(Sr));return Qr.start(),Qr})()}addVideoTrack(rr){let Sr=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(rr instanceof Qa))throw new TypeError("source must be a VideoSource.");if(Ya(Sr),void 0!==Sr.rotation&&![0,90,180,270].includes(Sr.rotation))throw new TypeError(`Invalid video rotation: ${Sr.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==Sr.flip&&"boolean"!==typeof Sr.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==Sr.transformationMatrix&&(!Array.isArray(Sr.transformationMatrix)||9!==Sr.transformationMatrix.length||!Sr.transformationMatrix.every((rr=>Number.isFinite(rr)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==Sr.frameRate&&(!Number.isFinite(Sr.frameRate)||Sr.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${Sr.frameRate}. Must be a positive number.`);if(void 0!==Sr.hasOnlyKeyPackets&&"boolean"!==typeof Sr.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==Sr.canBeTransparent&&"boolean"!==typeof Sr.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==Sr.decoderConfig&&OQ({decoderConfig:Sr.decoderConfig},rr._codec),void 0!==Sr.primingPacket){if(!(Sr.primingPacket instanceof JW))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===Sr.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const Qr={...Sr};return Qr.group??=this.defaultTrackGroup,this._addTrack(new Ua(this.tracks.length+1,this,rr,Qr))}addAudioTrack(rr){let Sr=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(rr instanceof aa))throw new TypeError("source must be an AudioSource.");if(Ya(Sr),void 0!==Sr.decoderConfig&&lQ({decoderConfig:Sr.decoderConfig},rr._codec),void 0!==Sr.primingPacket){if(!(Sr.primingPacket instanceof JW))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===Sr.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const Qr={...Sr};return Qr.group??=this.defaultTrackGroup,this._addTrack(new ta(this.tracks.length+1,this,rr,Qr))}addSubtitleTrack(rr){let Sr=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(rr instanceof ja))throw new TypeError("source must be a SubtitleSource.");Ya(Sr);const Qr={...Sr};return Qr.group??=this.defaultTrackGroup,this._addTrack(new ha(this.tracks.length+1,this,rr,Qr))}setMetadataTags(rr){if((rr=>{if(!rr||"object"!==typeof rr)throw new TypeError("tags must be an object.");if(void 0!==rr.title&&"string"!==typeof rr.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==rr.description&&"string"!==typeof rr.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==rr.artist&&"string"!==typeof rr.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==rr.album&&"string"!==typeof rr.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==rr.albumArtist&&"string"!==typeof rr.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==rr.trackNumber&&(!Number.isInteger(rr.trackNumber)||rr.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==rr.tracksTotal&&(!Number.isInteger(rr.tracksTotal)||rr.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==rr.discNumber&&(!Number.isInteger(rr.discNumber)||rr.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==rr.discsTotal&&(!Number.isInteger(rr.discsTotal)||rr.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==rr.genre&&"string"!==typeof rr.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==rr.date&&(!(rr.date instanceof Date)||Number.isNaN(rr.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==rr.beatsPerMinute&&(!Number.isInteger(rr.beatsPerMinute)||rr.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==rr.lyrics&&"string"!==typeof rr.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==rr.images){if(!Array.isArray(rr.images))throw new TypeError("tags.images, when provided, must be an array.");for(const Sr of rr.images){if(!Sr||"object"!==typeof Sr)throw new TypeError("Each image in tags.images must be an object.");if(!(Sr.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof Sr.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(Sr.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==rr.comment&&"string"!==typeof rr.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==rr.raw){if(!rr.raw||"object"!==typeof rr.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const Sr of Object.values(rr.raw))if(null!==Sr&&"string"!==typeof Sr&&(!Array.isArray(Sr)||!Sr.every((rr=>"string"===typeof rr)))&&!(Sr instanceof Uint8Array)&&!(Sr instanceof mS)&&!(Sr instanceof NS)&&!xS(Sr))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(rr),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=rr}_addTrack(rr){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(rr.source._connectedTrack)throw new Error("Source is already used for a track.");const Sr=this.format.getSupportedTrackCounts(),Qr=this.tracks.reduce(((Sr,Qr)=>Sr+(Qr.type===rr.type?1:0)),0),Zr=Sr[rr.type].max;if(Qr===Zr)throw new Error(0===Zr?`${this.format._name} does not support ${rr.type} tracks.`:`${this.format._name} does not support more than ${Zr} ${rr.type} track`+(1===Zr?"":"s")+".");const Wr=Sr.total.max;if(this.tracks.length===Wr)throw new Error(`${this.format._name} does not support more than ${Wr} tracks`+(1===Wr?"":"s")+" in total.");if(rr.isVideoTrack()){const Sr=this.format.getSupportedVideoCodecs();if(0===Sr.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(rr.source._codec));if(!Sr.includes(rr.source._codec))throw new Error(`Codec \'${rr.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${Sr.map((rr=>`\'${rr}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(rr.source._codec))}else if(rr.isAudioTrack()){const Sr=this.format.getSupportedAudioCodecs();if(0===Sr.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(rr.source._codec));if(!Sr.includes(rr.source._codec))throw new Error(`Codec \'${rr.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${Sr.map((rr=>`\'${rr}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(rr.source._codec))}else if(rr.isSubtitleTrack()){const Sr=this.format.getSupportedSubtitleCodecs();if(0===Sr.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(rr.source._codec));if(!Sr.includes(rr.source._codec))throw new Error(`Codec \'${rr.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${Sr.map((rr=>`\'${rr}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(rr.source._codec))}return this.tracks.push(rr),rr.source._connectedTrack=rr,rr}hasEnoughTracks(){const rr=this.format.getSupportedTrackCounts();for(const Qr of ma){if(this.tracks.reduce(((rr,Sr)=>rr+(Sr.type===Qr?1:0)),0)<rr[Qr].min)return!1}const Sr=rr.total.min;return!(this.tracks.length<Sr)}async start(){const rr=this.format.getSupportedTrackCounts();for(const Qr of ma){const Sr=this.tracks.reduce(((rr,Sr)=>rr+(Sr.type===Qr?1:0)),0),Zr=rr[Qr].min;if(Sr<Zr)throw new Error(Zr===rr[Qr].max?`${this.format._name} requires exactly ${Zr} ${Qr} track${1===Zr?"":"s"}.`:`${this.format._name} requires at least ${Zr} ${Qr} track${1===Zr?"":"s"}.`)}const Sr=rr.total.min;if(this.tracks.length<Sr)throw new Error(Sr===rr.total.max?`${this.format._name} requires exactly ${Sr} track`+(1===Sr?"":"s")+".":`${this.format._name} requires at least ${Sr} track`+(1===Sr?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(yS._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const rr=this._mutex.acquire();try{await this._muxer.start();const rr=this.tracks.map((rr=>rr.source._start()));await Promise.all(rr)}finally{(await rr)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const rr=await this._mutex.acquire();try{const rr=this.tracks.map((rr=>rr.source._flushOrWaitForOngoingClose(!0)));await Promise.all(rr),await Promise.all([...this._unfinalizedTargets].map((rr=>rr._close()))),this._unfinalizedTargets.clear()}finally{rr()}})():void("finalized"===this.state&&yS._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(yS._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const rr=await this._mutex.acquire();try{const rr=this.tracks.map((rr=>rr.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(rr),await this._muxer.finalize(),this._rootWriterPromise){const rr=await this._rootWriterPromise;rr.finalized||(await rr.flush(),await rr.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(Sr){throw this.state="canceled",Sr}finally{await Promise.all([...this._unfinalizedTargets].map((rr=>rr._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),rr()}})()}}class ea{constructor(rr,Sr,Qr,Zr,Wr){this.frameDurationS=Qr,this.onFragment=Wr,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=Sr,this.lastTimestampUs=Sr;const ar=rr=>{this.boxes.push(rr)};this.output=new na({format:new Ea({fastStart:"fragmented",minimumFragmentDuration:Zr,onFtyp:ar,onMoov:ar,onMoof:ar,onMdat:rr=>{ar(rr),this.fragmentDone()}}),target:new qW}),this.source=new Wa(rr),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(rr,Sr){const Qr=new Uint8Array(rr.byteLength);rr.copyTo(Qr),this.addData(Qr,rr.type,rr.timestamp,Sr)}addData(rr,Sr,Qr,Zr){const Wr=new JW(rr,Sr,(Qr-this.firstTimestampUs)/1e6,this.frameDurationS),ar=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,Qr),this.pending=this.pending.then((()=>(this.addingTimestampUs=Qr,this.source.add(Wr,ar?{decoderConfig:Zr}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var rr;const Sr=Ka(this.boxes);this.boxes=[],this.onFragment({bytes:Sr,endUs:null!==(rr=this.addingTimestampUs)&&void 0!==rr?rr:this.lastTimestampUs+1e6*this.frameDurationS})}}function Ka(rr){const Sr=new Uint8Array(rr.reduce(((rr,Sr)=>rr+Sr.byteLength),0));let Qr=0;for(const Zr of rr)Sr.set(Zr,Qr),Qr+=Zr.byteLength;return Sr}class ya{constructor(rr,Sr,Qr,Zr){this.plan=rr,this.emit=Qr,this.onSlotsLow=Zr,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=Sr}get partCount(){return this.nextIndex}addFragment(rr){let{bytes:Sr,endUs:Qr}=rr;this.pendingBytes>0&&this.pendingBytes+Sr.byteLength>this.plan.maxBytes&&this.emitPending();let Zr=0;for(;Sr.byteLength-Zr>this.plan.maxBytes-this.pendingBytes;){const rr=this.plan.maxBytes-this.pendingBytes;this.hold(Sr.subarray(Zr,Zr+rr)),Zr+=rr,this.emitPending()}this.hold(Sr.subarray(Zr)),this.completeUntilUs=Qr,Qr-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(rr){this.pending.push(rr),this.pendingBytes+=rr.byteLength}emitPending(){var rr;const Sr=Ka(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(rr=this.completeUntilUs)&&void 0!==rr?rr:this.partStartUs,this.emit({index:this.nextIndex++,bytes:Sr,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class Ba{constructor(rr,Sr,Qr,Zr){let Wr=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,ar=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=rr,this.partPlan=Sr,this.post=Qr,this.onSegmentEncoded=Zr,this.journal=Wr,this.onMuxFailed=ar,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(rr){const Sr=lr()-rr;(Sr<this.epochOffsetMs||Sr-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=Sr)}recordingMs(rr){return rr/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(rr){const Sr=null===this.segment?0:(rr-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||Sr>=this.segmentDurationMs))&&(this.pendingCutUs=rr);const Qr=this.keyFrameMissed||this.pendingCutUs===rr;return this.cutRequested=!1,this.keyFrameMissed=!1,Qr}onChunk(rr,Sr,Qr){if(null!==Sr&&void 0!==Sr&&Sr.decoderConfig&&(this.decoderConfig=Sr.decoderConfig),null!==this.pendingCutUs&&rr.timestamp>=this.pendingCutUs){if("key"!==rr.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(rr.timestamp,Qr),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const Zr=this.segment;if(null===Zr.journalHeader)return Zr.mp4.add(rr,this.decoderConfig),rr.byteLength;const Wr=new Uint8Array(rr.byteLength);return rr.copyTo(Wr),Zr.mp4.addData(Wr,rr.type,rr.timestamp,this.decoderConfig),Zr.chunkTimestampsUs.push(rr.timestamp),Zr.unjournaled.push({recordingId:Zr.journalHeader.recordingId,segmentId:Zr.journalId,index:Zr.chunkCount++,timestampUs:rr.timestamp,key:"key"===rr.type,data:Wr}),performance.now()-Zr.lastJournalMs>=250&&this.journalChunks(Zr),rr.byteLength}openSegment(rr,Sr){const Qr=this.nextJournalId++,Zr=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:Qr,containerCodec:Sr.containerCodec,codec:Sr.codec,width:Sr.width,height:Sr.height,fps:Sr.fps,decoderConfig:this.decoderConfig,firstTimestampUs:rr,epochOffsetMs:this.epochOffsetMs}:null,Wr=[],ar=new ya(this.partPlan,rr,(ar=>{this.postPart(Qr,Sr,rr,ar,null===Zr?null:Wr)}),(()=>{var rr;(null===(rr=this.segment)||void 0===rr?void 0:rr.journalId)===Qr&&this.requestCut()})),jr=this.partPlan.keyframeIntervalMs/1e3*.9,Ir=new ea(Sr.containerCodec,rr,1/Sr.fps,jr,(rr=>{ar.addFragment(rr)}));return this.post({type:"videoSegmentOpened",journalId:Qr}),{mp4:Ir,parts:ar,format:Sr,journalId:Qr,journalHeader:Zr,unjournaled:[],chunkTimestampsUs:Wr,chunkCount:0,lastJournalMs:performance.now()}}postPart(rr,Sr,Qr,Zr,Wr){const{width:ar,height:jr,codec:Ir,fps:fr}=Sr,{startMs:Er}=function(rr,Sr,Qr,Zr){const Wr=rr/1e3+Qr;return{startMs:Wr,endMs:Wr+Sr/1e3+1e3/Zr}}(Qr,0,this.epochOffsetMs,fr),{completeUntilUs:pr}=Zr,xr=null===pr?Er:this.recordingMs(pr),mr=Zr.bytes.buffer,Nr=null===Wr||null===pr?null:function(rr,Sr){let Qr=0,Zr=rr.length;for(;Qr<Zr;){const Wr=Qr+Zr>>1;rr[Wr]<Sr?Qr=Wr+1:Zr=Wr}return Qr}(Wr,pr);this.post({type:"videoPart",journalId:rr,index:Zr.index,bytes:mr,meta:{startMs:Er,endMs:xr,width:ar,height:jr,codec:Ir},completeUntilUs:pr,completeUntilIndex:Nr},[mr])}journalChunks(rr){const Sr=rr.journalHeader;null!==this.journal&&null!==Sr&&0!==rr.unjournaled.length&&(Sr.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...Sr},rr.unjournaled),rr.unjournaled=[],rr.lastJournalMs=performance.now())}closeSegment(rr){const Sr=this.segment;this.segment=null,this.pendingCutUs=null,null!==Sr&&(rr&&this.onSegmentEncoded(),this.journalChunks(Sr),this.finishing=this.finishing.then((async()=>{let rr=null;try{await Sr.mp4.finish()}catch(Qr){rr=Qr}Sr.parts.finish(),this.post({type:"videoSegmentClosed",journalId:Sr.journalId,parts:Sr.parts.partCount}),null!==rr&&(console.error("Failed to finish a session replay video segment.",rr),this.onMuxFailed(rr instanceof Error?rr.message:String(rr)))})).catch((rr=>{console.error("Failed to close a session replay video segment.",rr)})))}whenFinished(){return this.finishing}}function Ta(rr,Sr){return null!==rr&&Sr>=rr}class va{constructor(rr,Sr,Qr,Zr,Wr){let ar=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=rr,this.cssSize=Qr,this.post=Zr,this.encoderPreference=Wr,this.quality=new xr,this.limiter=void 0,this.segmenter=void 0,this.scaler=new Kr,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.capturePaused=!1,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new hr(rr.maxFps),this.captureFps=rr.maxFps,this.segmenter=new Ba(rr.segmentDurationMs,Sr,Zr,(()=>{this.encoderFailures=0}),ar,(rr=>{this.stopVideo(`Muxer failed: ${rr}`)})),this.still=new vr(Zr),this.stats=this.emptyStats()}handleFrame(rr,Sr,Qr){const Zr=performance.now();try{this.stats.deliveredFrames++;const Wr=rr.timestamp/1e3;if(this.segmenter.noteFrameArrival(Wr),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(Wr))return void this.stats.droppedForFpsCap++;if(this.still.offer(rr,this.segmenter.recordingMs(rr.timestamp)),null===Qr)return void(this.capturePaused||(this.capturePaused=!0,this.flushSegment()));if(this.capturePaused=!1,this.noteBackingSize(Sr),this.noteCaptureFps(Qr,Zr),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(Ta(this.rebuildDueMs,Zr)||Ta(this.fpsRebuildDueMs,Zr))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,rr)}finally{rr.close();const Sr=performance.now()-Zr;this.stats.workerBusyMs+=Sr,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,Sr),this.maybePostStats(Zr)}}resize(rr){0!==rr.width&&0!==rr.height&&(this.cssSize=rr,this.scheduleRebuildIfSizeChanged())}updateHealth(rr,Sr){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const Qr=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:rr,pingMs:Sr});this.backpressureDropsSinceHealth=0,Qr&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(rr){return this.hidden=rr,rr?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(rr){this.suspended=!0;const Sr=this.operations.then(rr).catch((rr=>{console.error("Session replay encoder operation failed.",rr)})).finally((()=>{this.operations===Sr&&(this.suspended=!1)}));return this.operations=Sr,Sr}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var rr;null===(rr=this.active)||void 0===rr||rr.encoder.close(),this.active=null}async drainAndCloseSegment(){const rr=this.active;null===rr||await async function(rr,Sr){let Qr;const Zr=new Promise((rr=>{Qr=setTimeout((()=>{rr(!1)}),Sr)}));try{return await Promise.race([rr.then((()=>!0)),Zr])}finally{clearTimeout(Qr)}}(rr.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(rr,"flush timed out")}encode(rr,Sr){const Qr=this.segmenter.needsKeyFrame(Sr.timestamp)||Sr.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;Qr&&(this.lastKeyframeUs=Sr.timestamp);const Zr=this.scaleToEncoder(rr,Sr);try{rr.encoder.encode(Zr,{keyFrame:Qr})}catch(Wr){return void(Wr instanceof DOMException&&("InvalidStateError"===Wr.name||"EncodingError"===Wr.name)?this.failEncoder(rr,Wr.message):++this.refusedFrames>=30?this.failEncoder(rr,`refused 30 frames in a row: ${String(Wr)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",Wr))}finally{Zr!==Sr&&Zr.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(rr,Sr){let Qr=Sr;if(!this.scalerFailed)try{Qr=this.scaler.scale(Sr,rr.size)}catch(Zr){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",Zr)}return Qr.displayWidth===rr.size.width&&Qr.displayHeight===rr.size.height||(rr.sentMismatchedFrame=!0),Qr}onEncoderOutput(rr,Sr,Qr){const Zr=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(rr,Sr,{containerCodec:Qr.candidate.containerCodec,codec:Qr.candidate.config.codec,width:Qr.size.width,height:Qr.size.height,fps:Qr.fps}),this.stats.workerBusyMs+=performance.now()-Zr}noteBackingSize(rr){null!==this.backingSize&&mr(this.backingSize,rr)||(this.backingSize=rr,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(rr,Sr){this.captureFps=rr,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=Sr+2e3:this.fpsRebuildDueMs=null}targetSize(){var rr;const Sr=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(rr,Sr,Qr){const Zr=Sr.width*Sr.height<rr.width*rr.height?Sr:rr;let Wr=Nr(Math.max(Zr.width,64)),ar=Nr(Math.max(Zr.height,64));if(Ur({width:Wr,height:ar})>Qr){const rr=Wr,Sr=ar;for(Wr=Nr(Wr*Math.sqrt(16*Qr*16/(Wr*ar))),ar=Nr(Wr*Sr/rr);Ur({width:Wr,height:ar})>Qr;)Wr-=2,ar=Nr(Wr*Sr/rr)}return{width:Wr,height:ar}}(this.cssSize,null!==(rr=this.backingSize)&&void 0!==rr?rr:this.cssSize,Sr)}scheduleRebuildIfSizeChanged(){null===this.active||mr(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const rr=this.quality.getLevel(),Sr=this.encodeFps(),Qr=this.targetSize(),Zr=function(rr){const Sr={width:rr.width,height:rr.height,bitrate:rr.bitrate,framerate:rr.maxFps},Qr=[],Zr=[rr.preferSoftware?"prefer-software":"prefer-hardware","no-preference"],Wr=rr.preferQualityLatency?er:nr;for(const ar of Zr)for(const rr of zr)for(const Zr of Yr)for(const jr of Wr)Qr.push({config:{...Sr,codec:rr,hardwareAcceleration:ar,bitrateMode:Zr,latencyMode:jr,avc:{format:"avc"}},containerCodec:"avc"});return Qr.push({config:{...Sr,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),Qr}({...Qr,bitrate:Math.round(tr(this.config,Qr,rr.areaScale)*Sr/this.config.maxFps),maxFps:Sr,...this.encoderPreference});let Wr=null,ar=0;for(let Er=this.firstViableCandidate;Er<Zr.length&&null===Wr;Er++){const rr=await VideoEncoder.isConfigSupported(Zr[Er].config).catch((rr=>(console.warn("VideoEncoder.isConfigSupported threw.",Zr[Er].config,rr),null)));null!==rr&&void 0!==rr&&rr.supported&&(Wr=Zr[Er],ar=Er,this.firstViableCandidate=Er)}if(null===Wr)return void this.markUnavailable(`No supported encoder config at ${Qr.width}x${Qr.height}`);const jr=new VideoEncoder({output:(rr,Sr)=>{this.onEncoderOutput(rr,Sr,Ir)},error:rr=>{this.failEncoder(Ir,rr.message)}}),Ir={encoder:jr,candidates:Zr,candidateIndex:ar,candidate:Wr,size:Qr,fps:Sr,sentMismatchedFrame:!1};this.active=Ir,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{jr.configure(Wr.config)}catch(fr){return void this.failEncoder(Ir,fr instanceof Error?fr.message:String(fr))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(rr,Sr){console.error("Session replay encoder failed.",rr.candidate.config,Sr),this.active===rr&&(this.active=null,"closed"!==rr.encoder.state&&rr.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(rr,Sr,Qr){var Zr;let Wr=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const ar=null===(Zr=rr[Sr])||void 0===Zr?void 0:Zr.config.hardwareAcceleration;if(!("prefer-hardware"===ar&&Qr||"no-preference"!==ar&&Wr))return Sr+1;for(let jr=Sr+1;jr<rr.length;jr++)if(rr[jr].config.hardwareAcceleration!==ar)return jr;return rr.length}(rr.candidates,rr.candidateIndex,rr.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${Sr}`))}stopVideo(rr){if(this.unavailable)return;const Sr=this.active;this.active=null,null!==Sr&&"closed"!==Sr.encoder.state&&Sr.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(rr)}markUnavailable(rr){console.warn(`Session replay video stopped: ${rr}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:rr})}))}maybePostStats(rr){var Sr,Qr,Zr,Wr;const ar=rr-this.statsWindowStartMs;if(ar<5e3)return;const jr=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:ar,qualityLevel:this.quality.getLevelIndex(),codec:null!==(Sr=null===jr||void 0===jr?void 0:jr.candidate.config.codec)&&void 0!==Sr?Sr:null,hardwareAcceleration:null!==(Qr=null===jr||void 0===jr?void 0:jr.candidate.config.hardwareAcceleration)&&void 0!==Qr?Qr:null,encodeWidth:null!==(Zr=null===jr||void 0===jr?void 0:jr.size.width)&&void 0!==Zr?Zr:0,encodeHeight:null!==(Wr=null===jr||void 0===jr?void 0:jr.size.height)&&void 0!==Wr?Wr:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=rr}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let Oa=null,La=0;function la(rr){let Sr=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(rr,{transfer:Sr})}self.onmessage=rr=>{const Sr=rr.data;switch(Sr.type){case"init":Oa=new va(Sr.videoConfig,Sr.partPlan,Sr.cssSize,la,Sr.encoderPreference,Sr.journalRecordingId&&Er.supported?{recordingId:Sr.journalRecordingId,journal:new Er}:null);break;case"frame":if(null===Oa){console.warn("Session replay video worker got a frame before its pipeline started"),Sr.image.close();break}!function(rr,Sr,Qr,Zr,Wr){if(Sr instanceof VideoFrame)return void rr.handleFrame(Sr,Zr,Wr);let ar;try{ar=new VideoFrame(Sr,{timestamp:Qr})}catch(jr){return 0===La++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",jr),void(30===La&&rr.stopVideo(`Bitmap frames keep failing: ${jr instanceof Error?jr.message:String(jr)}`))}finally{Sr.close()}La=0,rr.handleFrame(ar,Zr,Wr)}(Oa,Sr.image,Sr.timestampUs,Sr.IS,Sr.captureFps);break;case"resize":Oa.resize(Sr.cssSize);break;case"health":Oa.updateHealth(Sr.gameFps,Sr.pingMs);break;case"hidden":Oa.setHidden(Sr.hidden);break;case"flush":Oa.flushSegment();break;case"cut":Oa.cutAtNextFrame();break;case"gameJoined":Oa.gameJoined()}}})();', "Worker", void 0, Qr.p + "sessionReplayVideo.worker.32b3983d.worker.js")
    }

    function pS(rr) {
      return Math.max(2, 2 * Math.floor(rr / 2))
    }

    function xS(rr) {
      return Math.ceil(rr.width / 16) * Math.ceil(rr.height / 16)
    }
    class mS {
      constructor(rr) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / rr
      }
      setMaxFps(rr) {
        this.intervalMs = 1e3 / rr
      }
      shouldKeep(rr) {
        return !(rr < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = rr - this.nextDueMs > this.intervalMs ? rr + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class NS {
      constructor(rr, Sr, Qr) {
        this.budgetMsPerSecond = rr, this.minFps = Sr, this.smoothedCostMs = Qr
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      get paused() {
        return this.affordableFps() < this.minFps
      }
      record(rr) {
        const Sr = this.paused ? .5 : .05;
        this.smoothedCostMs += (rr - this.smoothedCostMs) * Sr
      }
      maxFps(rr) {
        return this.paused ? .1 : Math.min(rr, this.affordableFps())
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class US {
      static isSupported() {
        const rr = globalThis.CanvasCaptureMediaStream;
        return ("undefined" !== typeof CanvasCaptureMediaStreamTrack && "requestFrame" in CanvasCaptureMediaStreamTrack.prototype || void 0 !== rr && "requestFrame" in rr.prototype) && "function" === typeof HTMLCanvasElement.prototype.captureStream && "requestVideoFrameCallback" in HTMLVideoElement.prototype
      }
      constructor(rr, Sr, Qr) {
        this.onFrame = Sr, this.stream = void 0, this.requester = void 0, this.video = document.createElement("video"), this.closed = !1, this.onVideoFrame = () => {
          this.closed || (this.onFrame(this.video), this.video.requestVideoFrameCallback(this.onVideoFrame))
        }, this.stream = rr.captureStream(0);
        const Zr = this.stream.getVideoTracks()[0];
        this.requester = "requestFrame" in Zr ? Zr : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(Qr), this.video.requestVideoFrameCallback(this.onVideoFrame)
      }
      request() {
        this.requester.requestFrame()
      }
      close() {
        this.closed = !0;
        for (const rr of this.stream.getTracks()) rr.stop();
        this.video.srcObject = null
      }
    }
    class tS {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = rr, this.grab = Zr, this.onUnavailable = Wr, this.render = null, this.stream = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.loggedPause = !1, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = Qr.msPerSecond, this.frameCostFloorMs = Qr.frameCostFloorMs, this.budget = new NS(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = Sr, this.captureFps = this.budgetedFps(), this.frameLimiter = new mS(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps,
          grabPath: this.grab.path
        }
      }
      start(rr) {
        if (this.stop(), this.render = rr, "stream" === this.grab.path) {
          const Sr = new US(rr.canvas, (rr => {
            this.onStreamFrame(rr)
          }), (rr => {
            this.stream === Sr && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${rr instanceof Error?rr.message:String(rr)}`))
          }));
          this.stream = Sr
        }
      }
      stop() {
        var rr;
        this.render = null, this.pendingGrab = null, null === (rr = this.stream) || void 0 === rr || rr.close(), this.stream = null
      }
      setMaxFps(rr) {
        this.wantedFps = rr, this.applyFps()
      }
      onAfterRender() {
        const rr = performance.timeOrigin + performance.now(),
          Sr = this.render;
        if (null === Sr) return;
        const Qr = performance.now();
        if (null !== this.pendingGrab) {
          if (Qr - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas grab didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(rr)) return;
        const Zr = {
          startMs: Qr,
          timestampUs: Math.round(1e3 * rr),
          IS: {
            width: Sr.canvas.width,
            height: Sr.canvas.height
          },
          syncMs: 0,
          paused: this.isPaused()
        };
        null !== this.stream ? this.requestStreamFrame(this.stream, Zr) : "bitmap" === this.grab.path ? this.grabBitmap(Sr.canvas, Zr) : this.grabVideoFrame(Sr.canvas, Zr)
      }
      requestStreamFrame(rr, Sr) {
        this.pendingGrab = Sr;
        try {
          rr.request()
        } catch (Qr) {
          return this.pendingGrab = null, void this.grabFailed(Qr)
        }
        Sr.syncMs = performance.now() - Sr.startMs
      }
      grabVideoFrame(rr, Sr) {
        let Qr;
        try {
          Qr = new VideoFrame(rr, {
            timestamp: Sr.timestampUs
          })
        } catch (Zr) {
          return void this.grabFailed(Zr)
        }
        this.deliver(Qr, Sr), this.recordCost(Math.max(2 * (performance.now() - Sr.startMs), this.frameCostFloorMs))
      }
      grabBitmap(rr, Sr) {
        const Qr = this.grab.cssSize(),
          Zr = function(rr, Sr, Qr) {
            const Zr = Sr.width * Sr.height < rr.width * rr.height ? Sr : rr;
            let Wr = pS(Math.max(Zr.width, 64)),
              ar = pS(Math.max(Zr.height, 64));
            if (xS({
                width: Wr,
                height: ar
              }) > Qr) {
              const rr = Wr,
                Sr = ar;
              for (Wr = pS(Wr * Math.sqrt(16 * Qr * 16 / (Wr * ar))), ar = pS(Wr * Sr / rr); xS({
                  width: Wr,
                  height: ar
                }) > Qr;) Wr -= 2, ar = pS(Wr * Sr / rr)
            }
            return {
              width: Wr,
              height: ar
            }
          }(0 === Qr.width ? Sr.IS : Qr, Sr.IS, this.grab.maxMacroblocks);
        this.pendingGrab = Sr, createImageBitmap(rr, {
          resizeWidth: Zr.width,
          resizeHeight: Zr.height,
          resizeQuality: "low"
        }).then((rr => {
          this.pendingGrab === Sr ? (this.pendingGrab = null, this.deliverMeasured(rr, Sr)) : rr.close()
        }), (rr => {
          this.pendingGrab === Sr && (this.pendingGrab = null, this.grabFailed(rr))
        })), Sr.syncMs = performance.now() - Sr.startMs
      }
      onStreamFrame(rr) {
        const Sr = this.pendingGrab;
        if (null === Sr) return;
        this.pendingGrab = null;
        const Qr = performance.now();
        let Zr;
        try {
          Zr = new VideoFrame(rr, {
            timestamp: Sr.timestampUs
          })
        } catch (Wr) {
          return void this.grabFailed(Wr)
        }
        Sr.syncMs += performance.now() - Qr, this.deliverMeasured(Zr, Sr)
      }
      deliverMeasured(rr, Sr) {
        const Qr = performance.now();
        this.deliver(rr, Sr), this.recordCost(Math.max(Sr.syncMs + performance.now() - Qr, this.frameCostFloorMs))
      }
      deliver(rr, Sr) {
        const Qr = {
          type: "frame",
          image: rr,
          timestampUs: Sr.timestampUs,
          IS: Sr.IS,
          captureFps: Sr.paused ? null : this.captureFps
        };
        try {
          this.worker.postMessage(Qr, [rr])
        } catch (Zr) {
          return rr.close(), void this.grabFailed(Zr)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(rr) {
        this.budget.record(rr), this.applyFps()
      }
      grabFailed(rr) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", rr);
        !(rr instanceof DOMException && "InvalidStateError" === rr.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${rr instanceof Error?rr.message:String(rr)}`))
      }
      applyFps() {
        const rr = this.budgetedFps();
        rr !== this.captureFps && (this.captureFps = rr, this.frameLimiter.setMaxFps(rr), this.isPaused() && !this.loggedPause && (this.loggedPause = !0, console.warn(`Session replay paused video: ${this.grab.path} grabs cost ${this.budget.averageCostMs.toFixed(1)} ms, over a budget of ${this.budgetMsPerSecond} ms/s at 5 fps.`)))
      }
      isPaused() {
        return this.budgetMsPerSecond > 0 && this.budget.paused
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var hS = Qr(1364);
    class zS {
      constructor(rr) {
        this.events = rr, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const rr = (0, hS.U)().gameRender();
        if (null === rr || rr.canvas === this.canvas) return rr;
        const Sr = null !== this.canvas;
        return this.canvas = rr.canvas, this.observe(rr.canvas), Sr ? this.events.onCanvasSwapped(rr) : this.events.onFirstCanvas(rr), rr
      }
      stop() {
        var rr, Sr;
        null === (rr = this.resizeObserver) || void 0 === rr || rr.disconnect(), null === (Sr = this.listeners) || void 0 === Sr || Sr.abort()
      }
      observe(rr) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: Sr
        } = this.listeners;
        rr.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: Sr
        }), rr.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: Sr
        });
        const Qr = rr.getBoundingClientRect();
        this.size = {
          width: Math.round(Qr.width),
          height: Math.round(Qr.height)
        }, this.resizeObserver = new ResizeObserver((rr => {
          const Sr = rr[rr.length - 1].contentRect,
            Qr = {
              width: Math.round(Sr.width),
              height: Math.round(Sr.height)
            };
          0 !== Qr.width && 0 !== Qr.height && (this.size = Qr, this.events.onResized(Qr))
        })), this.resizeObserver.observe(rr)
      }
    }
    const YS = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      nS = 12e4;
    class eS extends Error {
      constructor(rr, Sr) {
        super(Sr), this.reason = rr
      }
    }
    class KS {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.access = rr, this.uploadToken = Sr, this.transport = Qr, this.callbacks = Zr, this.options = Wr, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(rr) {
        return this.segments.has(rr)
      }
      open(rr, Sr) {
        this.segments.set(rr, {
          journalId: rr,
          sequence: Sr,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(rr, Sr) {
        const Qr = this.segments.get(rr);
        if (void 0 !== Qr) {
          Qr.parts.push(Sr), Qr.bytes += Sr.bytes.byteLength, !Qr.cut && null === Qr.totalParts && Qr.bytes > this.options.maxHeldBytes / 2 && (Qr.cut = !0, this.callbacks.cut());
          for (const rr of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(rr, "byteCap"), this.downUntilMs = this.options.nowMs() + nS
          }
          this.pump()
        }
      }
      close(rr, Sr) {
        const Qr = this.segments.get(rr);
        void 0 !== Qr && (Qr.totalParts = Sr, this.pump())
      }
      forget(rr) {
        this.segments.delete(rr)
      }
      releaseAll() {
        for (const rr of this.segments.values()) rr.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: rr.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let rr = 0;
        for (const Sr of this.segments.values()) rr += Sr.bytes;
        return rr
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let Sr = this.nextWork(); null !== Sr; Sr = this.nextWork()) try {
            await this.advance(Sr)
          } catch (rr) {
            console.warn(`Session replay part joiner failed on video segment ${Sr.sequence}; uploading it straight to storage.`, rr), rr instanceof eS || (this.downUntilMs = this.options.nowMs() + nS), this.handBack(Sr, rr instanceof eS ? rr.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const rr of this.segments.values())
          if (rr.sentParts < rr.parts.length || rr.totalParts === rr.parts.length) return rr;
        return null
      }
      async advance(rr) {
        if (rr.sentParts < rr.parts.length) return this.expectHeld(await this.sendPart(rr, rr.parts[rr.sentParts])), void rr.sentParts++;
        for (let Sr = 0; this.owns(rr.journalId); Sr++) {
          const Qr = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: rr.sequence,
            parts: rr.parts.length
          })));
          if (!this.owns(rr.journalId)) return;
          if ("stored" === Qr.outcome && Qr.stored.parts === rr.parts.length) return this.segments.delete(rr.journalId), void this.callbacks.stored(rr.journalId, rr.sequence, Qr.stored);
          if ("missing" !== Qr.outcome || Sr >= 2) throw this.failure(Qr);
          for (const Sr of Qr.parts) {
            if (!this.owns(rr.journalId)) return;
            const Qr = rr.parts[Sr];
            if (void 0 === Qr) throw new eS("missing", `the joiner asked for part ${Sr} of ${rr.parts.length}`);
            this.expectHeld(await this.sendPart(rr, Qr))
          }
        }
      }
      sendPart(rr, Sr) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: rr.sequence,
          index: Sr.index,
          meta: {
            ...Sr.meta,
            startMs: Math.round(Sr.meta.startMs),
            endMs: Math.round(Sr.meta.endMs)
          },
          completeUntilUs: Sr.completeUntilUs
        }, Sr.bytes)))
      }
      expectHeld(rr) {
        if ("buffered" !== rr.outcome) throw this.failure(rr)
      }
      failure(rr) {
        if ("refused" === rr.outcome) {
          this.refused = !0;
          for (const rr of [...this.segments.values()]) this.handBack(rr, "refused");
          return new eS("refused", `refused: ${rr.reason}`)
        }
        const Sr = "stored" === rr.outcome ? "shortStored" : "missing" === rr.outcome ? "missing" : "closed";
        return new eS(Sr, `answered ${rr.outcome}`)
      }
      async request(rr) {
        for (let Qr = 1;; Qr++) {
          try {
            return await rr()
          } catch (Sr) {
            if (Qr >= 3) throw Sr
          }
          await this.options.wait(1e3 * 2 ** (Qr - 1))
        }
      }
      handBack(rr, Sr) {
        this.segments.delete(rr.journalId) && (this.stats.handBacks[Sr]++, this.callbacks.handBack(rr.journalId, rr.sequence, rr.parts, rr.totalParts))
      }
    }
    const yS = Vr.d;
    class BS {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = rr, this.uploadToken = Sr, this.nextTelemetrySequence = Qr, this.queuedDomAfter = Zr, this.nowMs = Wr, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(rr, Sr, Qr, Zr, Wr) {
        const ar = this.segment(rr, Sr, Qr, Zr);
        if (void 0 === Wr) return void this.request(ar, 0);
        const jr = Wr.then((() => {
          this.stopped || this.segments.get(vS(rr, Sr)) !== ar || ar.requested || this.request(ar, 0), this.videoDue === jr && (this.videoDue = null)
        }));
        this.videoDue = jr
      }
      async takeDom(rr) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, rr);
        const Sr = this.dom;
        if ((null === Sr || void 0 === Sr ? void 0 : Sr.sequence) !== rr) return;
        this.dom = null;
        const Qr = await Sr.upload;
        return void 0 !== Qr && TS(Qr, this.nowMs()) ? Qr.upload : void 0
      }
      async get(rr, Sr, Qr, Zr, Wr) {
        const ar = this.segment(rr, Sr, Qr, Wr),
          jr = ar.requests.find((rr => Zr >= rr.first && Zr < rr.end));
        if (void 0 === this.valid(ar, Zr) && void 0 !== jr) {
          const rr = await jr.answer.catch((() => null));
          if (null !== rr && "rejected" in rr) return rr
        }
        let Ir = this.valid(ar, Zr);
        if (void 0 === Ir) {
          const rr = await this.request(ar, Zr).answer;
          if ("rejected" in rr) return rr;
          Ir = rr[0]
        }
        return Ir
      }
      takeTelemetry(rr) {
        const Sr = this.telemetry;
        if ((null === Sr || void 0 === Sr ? void 0 : Sr.sequence) === rr) return this.telemetry = null, TS(Sr.wI, this.nowMs()) ? Sr.wI.target : void 0
      }
      peek(rr, Sr, Qr) {
        const Zr = this.segments.get(vS(rr, Sr));
        return void 0 === Zr ? void 0 : this.valid(Zr, Qr)
      }
      expire(rr, Sr, Qr) {
        const Zr = this.segments.get(vS(rr, Sr)),
          Wr = null === Zr || void 0 === Zr ? void 0 : Zr.wI.get(Qr);
        if (void 0 !== Zr && void 0 !== Wr)
          for (const [ar, jr] of Zr.wI) jr.expiresAtMs <= Wr.expiresAtMs && Zr.wI.delete(ar)
      }
      stop() {
        this.stopped = !0
      }
      forget(rr, Sr) {
        this.segments.delete(vS(rr, Sr))
      }
      segment(rr, Sr, Qr, Zr) {
        const Wr = vS(rr, Sr);
        let ar = this.segments.get(Wr);
        return void 0 === ar && (ar = {
          kind: rr,
          sequence: Sr,
          contentType: Qr,
          slots: Zr,
          wI: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(Wr, ar)), ar
      }
      valid(rr, Sr) {
        const Qr = rr.wI.get(Sr);
        return void 0 !== Qr && TS(Qr, this.nowMs()) ? Qr.target : void 0
      }
      telemetryToAskFor() {
        const rr = this.nextTelemetrySequence(),
          Sr = this.telemetry;
        return this.telemetryAsked === rr || null !== Sr && Sr.sequence === rr && TS(Sr.wI, this.nowMs()) ? null : rr
      }
      domToAskFor() {
        var rr;
        const Sr = this.queuedDomAfter(this.domTaken);
        return null === Sr || Sr.sequence === (null === (rr = this.dom) || void 0 === rr ? void 0 : rr.sequence) ? null : Sr
      }
      request(rr, Sr) {
        const Qr = Sr < rr.slots.count ? rr.slots.count : Sr + 1,
          Zr = this.nowMs();
        rr.requested = !0;
        const Wr = "video" === rr.kind ? this.telemetryToAskFor() : null;
        null !== Wr && (this.telemetryAsked = Wr);
        const ar = "video" === rr.kind ? this.domToAskFor() : null,
          jr = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: rr.kind,
            sequence: rr.sequence,
            contentType: rr.contentType,
            parts: {
              first: Sr,
              count: Qr - Sr,
              maxBytes: rr.slots.maxBytes
            },
            ...null === Wr ? {} : {
              nextTelemetry: {
                sequence: Wr,
                maxBytes: yS
              }
            },
            ...null === ar ? {} : {
              dom: ar
            }
          });
        if (null !== ar) {
          const rr = jr.then((rr => {
            if ("rejected" in rr || void 0 === rr.domUpload) return;
            const {
              expiresInSecs: Sr,
              ...Qr
            } = rr.domUpload;
            return {
              upload: Qr,
              expiresAtMs: Zr + 1e3 * Sr
            }
          }), (() => {
            var rr;
            (null === (rr = this.dom) || void 0 === rr ? void 0 : rr.sequence) === ar.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: ar.sequence,
            upload: rr
          }
        }
        const Ir = jr.then((Qr => {
            var ar, jr;
            if ("rejected" in Qr) return Qr;
            const Ir = Zr + 1e3 * Qr.expiresInSecs;
            Qr.targets.forEach(((Qr, Zr) => {
              rr.wI.set(Sr + Zr, {
                target: Qr,
                expiresAtMs: Ir
              })
            }));
            return null !== Wr && Wr >= this.nextTelemetrySequence() && (null !== (ar = null === (jr = this.telemetry) || void 0 === jr ? void 0 : jr.sequence) && void 0 !== ar ? ar : -1) <= Wr && void 0 !== Qr.telemetryTarget && (this.telemetry = {
              sequence: Wr,
              wI: {
                target: Qr.telemetryTarget,
                expiresAtMs: Ir
              }
            }), Qr.targets
          })),
          fr = {
            first: Sr,
            end: Qr,
            answer: Ir
          };
        rr.requests.push(fr);
        const Er = () => {
          rr.requests.splice(rr.requests.indexOf(fr), 1), null !== Wr && this.telemetryAsked === Wr && (this.telemetryAsked = null)
        };
        return Ir.then(Er, Er), fr
      }
    }

    function TS(rr, Sr) {
      return rr.expiresAtMs - 6e4 > Sr
    }

    function vS(rr, Sr) {
      return `${rr}:${Sr}`
    }
    const OS = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function LS(rr) {
      return new Promise((Sr => {
        const Qr = () => {
            clearTimeout(Zr), window.removeEventListener("online", Qr), Sr()
          },
          Zr = setTimeout(Qr, rr);
        window.addEventListener("online", Qr)
      }))
    }
    const lS = ["video", "dom"],
      XS = "video",
      PS = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      HS = "an earlier part of its segment was dropped",
      qS = new Set([403, 408, 409, 429]),
      RS = new Set(["RequestTimeout", "IncompleteBody"]);
    class gS {
      constructor(rr, Sr, Qr, Zr) {
        this.transport = rr, this.uploadToken = Sr, this.options = Qr, this.callbacks = Zr, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new BS(rr, Sr, (() => {
          var rr;
          return null !== (rr = this.nextSequence.get("telemetry")) && void 0 !== rr ? rr : 0
        }), (rr => {
          const Sr = this.queue.find((Sr => "dom" === Sr.kind && Sr.sequence > rr));
          return void 0 === Sr ? null : {
            sequence: Sr.sequence,
            byteLength: Sr.bytes.byteLength
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
        return this.queue.map((rr => {
          let {
            kind: Sr,
            sequence: Qr,
            meta: Zr
          } = rr;
          return {
            kind: Sr,
            sequence: Qr,
            meta: Zr
          }
        }))
      }
      openSegment(rr, Sr, Qr, Zr) {
        const Wr = this.takeSequence(rr);
        return this.prefetchTargets(rr, Wr, Sr, Qr, Zr), Wr
      }
      prefetchTargets(rr, Sr, Qr, Zr, Wr) {
        this.stopped || this.targets.prefetch(rr, Sr, Qr, Zr, Wr)
      }
      peekTarget(rr, Sr, Qr) {
        return this.targets.peek(rr, Sr, Qr)
      }
      closeSegment(rr, Sr) {
        this.targets.forget(rr, Sr), rr === XS && this.brokenSegments.delete(Sr)
      }
      enqueue(rr) {
        var Sr, Qr;
        const Zr = null !== (Sr = null === (Qr = rr.part) || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== Sr ? Sr : null;
        if (this.stopped) return this.callbacks.onDropped(rr, "uploader stopped", Zr), null;
        if (null !== Zr && rr.kind === XS && this.brokenSegments.has(Zr)) return this.callbacks.onDropped(rr, HS, Zr), null;
        "still" === rr.kind && this.removeQueued(rr.kind);
        const Wr = {
            ...rr,
            sequence: null !== Zr && void 0 !== Zr ? Zr : this.takeSequence(rr.kind)
          },
          ar = this.queue.findIndex(((Sr, Qr) => (Qr > 0 || !this.uploadInFlight) && PS[Sr.kind] > PS[rr.kind]));
        return this.queue.splice(-1 === ar ? this.queue.length : ar, 0, Wr), this.queuedBytes += rr.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(Wr) ? Wr.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const rr of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= rr.bytes.byteLength, this.callbacks.onDropped(rr, "uploader stopped", rr.sequence)
      }
      takeSequence(rr) {
        var Sr;
        const Qr = null !== (Sr = this.nextSequence.get(rr)) && void 0 !== Sr ? Sr : 0;
        return this.nextSequence.set(rr, Qr + 1), Qr
      }
      removeQueued(rr) {
        for (let Sr = this.queue.length - 1; Sr >= (this.uploadInFlight ? 1 : 0); Sr--)
          if (this.queue[Sr].kind === rr) {
            const [rr] = this.queue.splice(Sr, 1);
            this.queuedBytes -= rr.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const rr of lS)
          for (const Sr of [!1, !0])
            for (let Qr = this.uploadInFlight ? 1 : 0; Qr < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const Zr = this.queue[Qr];
              if (Zr.kind !== rr || !0 === Zr.dropLast && !Sr) {
                Qr++;
                continue
              }
              const [Wr] = this.queue.splice(Qr, 1);
              this.queuedBytes -= Wr.bytes.byteLength, this.callbacks.onDropped(Wr, "backlog over cap", Wr.sequence), this.segmentBroken(Wr)
            }
      }
      segmentBroken(rr) {
        if (void 0 !== rr.part && rr.kind === XS) {
          this.brokenSegments.add(rr.sequence);
          for (let Sr = this.queue.length - 1; Sr >= (this.uploadInFlight ? 1 : 0); Sr--) {
            const Qr = this.queue[Sr];
            Qr.kind === XS && void 0 !== Qr.part && Qr.sequence === rr.sequence && (this.queue.splice(Sr, 1), this.queuedBytes -= Qr.bytes.byteLength, this.callbacks.onDropped(Qr, HS, Qr.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const rr = this.queue[0];
            this.uploadInFlight = !0;
            const Sr = await this.upload(rr);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= rr.bytes.byteLength, "uploaded" !== Sr.type ? (this.callbacks.onDropped(rr, Sr.reason, rr.sequence), this.segmentBroken(rr), "refused" !== Sr.type || this.stopped || "telemetry" !== rr.kind || (console.warn(`Session replay uploads refused (${Sr.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(Sr.reason))) : this.callbacks.onUploaded(rr, rr.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(rr) {
        let Sr = null,
          Qr = 0;
        for (let Wr = 1;; Wr++) {
          try {
            if (null === Sr) {
              const Qr = await this.requestTarget(rr);
              if ("rejected" in Qr) {
                if (!Qr.retryable) return {
                  type: "refused",
                  reason: Qr.reason
                };
                throw new Error(`rejected for now: ${Qr.reason}`)
              }
              Sr = Qr
            }
            try {
              "put" === Sr.type ? await this.transport.put(Sr.url, rr.bytes, rr.contentType, Sr.ifNoneMatch) : await this.transport.post(Sr.target, rr.bytes, rr.contentType)
            } catch (Zr) {
              if (Zr instanceof wr.d && null !== Zr.status && Zr.status < 500 && !qS.has(Zr.status) && (null === Zr.storageCode || !RS.has(Zr.storageCode))) return console.warn(`Session replay ${rr.kind} segment ${rr.sequence} refused by storage:`, Zr), {
                type: "dropped",
                reason: Zr.message
              };
              throw Zr
            }
            return {
              type: "uploaded"
            }
          } catch (Zr) {
            const Wr = Zr instanceof Error ? Zr.message : String(Zr),
              ar = void 0 === rr.part ? "" : ` part ${rr.part.index}`;
            if (console.warn(`Session replay ${rr.kind} segment ${rr.sequence}${ar} upload failed:`, Zr), Zr instanceof wr.d && (403 === Zr.status && (Sr = null, void 0 !== rr.part && this.targets.expire(rr.kind, rr.sequence, rr.part.index)), ++Qr >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: Wr
            }
          }
          const ar = Math.min(3e4, this.options.baseBackoffMs * 2 ** (Wr - 1));
          if (await this.options.wait(ar * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(rr) {
        const {
          part: Sr
        } = rr;
        if (void 0 !== Sr) {
          const Qr = await this.targets.get(rr.kind, rr.sequence, rr.contentType, Sr.index, Sr.slots);
          return "rejected" in Qr ? Qr : {
            type: "post",
            target: Qr
          }
        }
        const Qr = "dom" === rr.kind ? await this.targets.takeDom(rr.sequence) : void 0;
        if (void 0 !== Qr) return {
          type: "put",
          url: Qr.uploadUrl,
          ifNoneMatch: Qr.ifNoneMatch
        };
        const Zr = "telemetry" === rr.kind && rr.bytes.byteLength <= yS ? this.targets.takeTelemetry(rr.sequence) : void 0;
        if (void 0 !== Zr) return {
          type: "post",
          target: Zr
        };
        const Wr = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: rr.kind,
          sequence: rr.sequence,
          contentType: rr.contentType,
          byteLength: rr.bytes.byteLength
        });
        return "rejected" in Wr ? Wr : {
          type: "put",
          url: Wr.uploadUrl,
          ifNoneMatch: Wr.ifNoneMatch
        }
      }
    }
    class CS {
      constructor(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = rr, this.slots = Sr, this.manifest = Qr, this.journal = Zr, this.cut = Wr, this.joiner = ar, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(rr, Sr) {
        switch (rr.type) {
          case "videoSegmentOpened": {
            var Qr, Zr;
            if (null !== (Qr = this.joiner) && void 0 !== Qr && Qr.accepting) {
              var Wr;
              const Sr = this.uploader.takeSequence("video");
              this.joiner.open(rr.journalId, Sr), this.openJournalId = rr.journalId, null === (Wr = this.journal) || void 0 === Wr || Wr.videoQueued(rr.journalId, Sr);
              break
            }
            const ar = this.uploader.openSegment("video", "video/mp4", this.slots, Sr);
            this.segments.set(rr.journalId, {
              sequence: ar,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = rr.journalId, null === (Zr = this.journal) || void 0 === Zr || Zr.videoQueued(rr.journalId, ar);
            break
          }
          case "videoPart": {
            var ar;
            if (null !== (ar = this.joiner) && void 0 !== ar && ar.owns(rr.journalId)) {
              const {
                index: Sr,
                bytes: Qr,
                meta: Zr,
                completeUntilUs: Wr,
                completeUntilIndex: ar
              } = rr;
              this.joiner.addPart(rr.journalId, {
                index: Sr,
                bytes: Qr,
                meta: Zr,
                completeUntilUs: Wr,
                completeUntilIndex: ar
              });
              break
            }
            const Sr = this.segments.get(rr.journalId);
            void 0 !== Sr && this.enqueuePart(rr.journalId, Sr.sequence, rr);
            break
          }
          case "videoSegmentClosed": {
            var jr;
            if (null !== (jr = this.joiner) && void 0 !== jr && jr.owns(rr.journalId)) {
              var Ir;
              if (this.openJournalId === rr.journalId && (this.openJournalId = null), rr.parts > 0) this.joiner.close(rr.journalId, rr.parts);
              else this.joiner.forget(rr.journalId), null === (Ir = this.journal) || void 0 === Ir || Ir.videoSettled(rr.journalId);
              break
            }
            const Sr = this.segments.get(rr.journalId);
            if (void 0 === Sr) break;
            Sr.totalParts = rr.parts, this.openJournalId === rr.journalId && (this.openJournalId = null), this.maybeDone(rr.journalId, Sr);
            break
          }
        }
      }
      joinedStored(rr, Sr, Qr) {
        this.manifest.setVideoSegment(Sr, Qr.meta, null), this.storedWhole.set(Sr, rr)
      }
      joinedHandedBack(rr, Sr, Qr, Zr) {
        const Wr = {
          sequence: Sr,
          settledParts: 0,
          totalParts: Zr,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(rr, Wr), this.uploader.prefetchTargets("video", Sr, "video/mp4", this.slots);
        for (const ar of Qr) this.enqueuePart(rr, Sr, ar)
      }
      enqueuePart(rr, Sr, Qr) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: Qr.bytes,
          meta: {
            type: "video",
            meta: Qr.meta,
            journalId: rr,
            index: Qr.index,
            completeUntilUs: Qr.completeUntilUs,
            completeUntilIndex: Qr.completeUntilIndex
          },
          part: {
            sequence: Sr,
            index: Qr.index,
            slots: this.slots
          }
        })
      }
      landed(rr, Sr) {
        if (null !== rr.completeUntilUs && rr.meta.endMs > rr.meta.startMs) {
          var Qr, Zr;
          const Wr = this.segments.get(rr.journalId);
          void 0 !== Wr && (Wr.landedParts = rr.index + 1), this.manifest.setVideoSegment(Sr, rr.meta, rr.index + 1), null === (Qr = this.journal) || void 0 === Qr || Qr.videoPartLanded(rr.journalId, {
            partsLanded: rr.index + 1,
            completeUntilUs: rr.completeUntilUs,
            meta: rr.meta
          }, null !== (Zr = rr.completeUntilIndex) && void 0 !== Zr ? Zr : 0)
        }
        this.settled(rr)
      }
      dropped(rr) {
        this.settled(rr), rr.journalId === this.openJournalId && rr.journalId !== this.cutJournalId && (this.cutJournalId = rr.journalId, this.cut())
      }
      listed(rr, Sr) {
        if (null !== Sr)
          for (const [Zr, Wr] of this.segments) Wr.sequence === rr && (Wr.listedParts = Math.max(Wr.listedParts, Sr), this.maybeDone(Zr, Wr));
        else {
          const Sr = this.storedWhole.get(rr);
          var Qr;
          void 0 !== Sr && (this.storedWhole.delete(rr), null === (Qr = this.journal) || void 0 === Qr || Qr.videoSettled(Sr))
        }
      }
      settled(rr) {
        const Sr = this.segments.get(rr.journalId);
        void 0 !== Sr && (Sr.settledParts++, this.maybeDone(rr.journalId, Sr))
      }
      maybeDone(rr, Sr) {
        if (null === Sr.totalParts || Sr.settledParts < Sr.totalParts) return;
        const Qr = Sr.listedParts >= Sr.landedParts;
        var Zr, Wr;
        Sr.uploaded || (Sr.uploaded = !0, this.uploader.closeSegment("video", Sr.sequence), Qr || null === (Zr = this.journal) || void 0 === Zr || Zr.videoUploaded(rr));
        Qr && (this.segments.delete(rr), null === (Wr = this.journal) || void 0 === Wr || Wr.videoSettled(rr))
      }
    }
    var MS = Qr(4088),
      GS = Qr(5446);
    class kS {
      constructor(rr, Sr) {
        this.deps = rr, this.videoStatus = Sr, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new zS({
          onFirstCanvas: rr => {
            this.attachToCanvas(rr)
          },
          onCanvasSwapped: rr => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(rr), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: rr => {
            this.postToWorker({
              type: "resize",
              cssSize: rr
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
      attachToCanvas(rr) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(rr, this.deps.videoConfig)
        } catch (Sr) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", Sr), this.videoUnavailable(`video couldn't start: ${Sr instanceof Error?Sr.message:String(Sr)}`)
        }
      }
      startVideo(rr, Sr) {
        var Qr, Zr, Wr;
        const ar = new ES,
          jr = (0, QS.j)(Sr),
          Ir = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          fr = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => Er), Ir),
          Er = new CS(this.deps.uploader, jr, this.deps.manifest, this.deps.journal, Ir, fr);
        ar.onmessage = rr => {
          this.onWorkerMessage(rr.data, Er)
        }, ar.onerror = rr => {
          console.error("Session replay video worker error.", rr.message), this.worker === ar && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${rr.message||"it didn't load"}`))
        }, this.worker = ar, this.uploads = Er, this.joiner = fr, this.deps.debug.joiner = null !== (Qr = null === fr || void 0 === fr ? void 0 : fr.stats) && void 0 !== Qr ? Qr : null, this.videoStarted = !0, this.deps.stills.start();
        const pr = (0, Xr.getOperatingSystem)(),
          xr = (0, lr.d)();
        this.postToWorker({
          type: "init",
          videoConfig: Sr,
          partPlan: {
            ...jr,
            partDurationMs: Sr.partDurationMs,
            keyframeIntervalMs: Sr.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          encoderPreference: {
            preferSoftware: Sr.softwareEncoderPlatforms.includes(pr),
            preferQualityLatency: "ios" === pr
          },
          journalRecordingId: null !== (Zr = null === (Wr = this.deps.journal) || void 0 === Wr ? void 0 : Wr.recordingId) && void 0 !== Zr ? Zr : null
        });
        const mr = function(rr, Sr, Qr, Zr) {
          const Wr = Zr && rr.streamGrabEngines.includes(Qr) ? "stream" : rr.videoFrameGrabPlatforms.includes(Sr) ? "videoFrame" : "bitmap";
          return {
            path: Wr,
            frameCostFloorMs: Math.max(rr.captureFrameCostFloorMs, "stream" === Wr ? 2.5 : 0, "ios" === Sr ? 3.5 : 0)
          }
        }(Sr, pr, xr, US.isSupported() && !rr.renderer.endsWith("webgpu"));
        this.capture = new tS(ar, Sr.maxFps, {
          msPerSecond: Sr.captureBudgetMsPerSecond,
          frameCostFloorMs: mr.frameCostFloorMs
        }, {
          path: mr.path,
          maxMacroblocks: Sr.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (rr => {
          this.endVideo(), this.videoStopped("stopped_error", rr)
        })), this.capture.start(rr)
      }
      createJoiner(rr, Sr, Qr) {
        return new KS(rr, this.deps.recording.uploadToken, new Fr(rr.url), {
          stored: (rr, Qr, Zr) => {
            Sr().joinedStored(rr, Qr, Zr), this.deps.pageExit.segmentLanded()
          },
          handBack: (rr, Qr, Zr, Wr) => {
            Sr().joinedHandedBack(rr, Qr, Zr, Wr)
          },
          cut: Qr
        }, {
          wait: LS,
          nowMs: Date.now,
          maxHeldBytes: YS[this.deps.platformType]
        })
      }
      onWorkerMessage(rr, Sr) {
        var Qr, Zr, Wr, ar;
        switch (rr.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            Sr.onWorkerMessage(rr, "videoSegmentOpened" === rr.type ? null === (Qr = this.deps.dom()) || void 0 === Qr ? void 0 : Qr.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(rr, document.hidden);
            break;
          case "stats":
            Wr = this.deps.debug, ar = rr.stats, Wr.workerStats.push(ar), Wr.workerStats.length > 120 && Wr.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(rr.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = rr.level, null === (Zr = this.capture) || void 0 === Zr || Zr.setMaxFps(rr.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, Jr.e)(),
              level: rr.level,
              maxFps: rr.maxFps,
              reason: rr.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${rr.level} (${rr.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(rr.reason)
        }
      }
      videoUnavailable(rr) {
        var Sr, Qr;
        null === (Sr = this.capture) || void 0 === Sr || Sr.stop(), this.capture = null, null === (Qr = this.worker) || void 0 === Qr || Qr.terminate(), this.worker = null, this.videoStopped("stopped_error", rr)
      }
      videoStopped(rr, Sr) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = Sr, "stopped_error" === rr && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(rr, Sr))
      }
      setVideoStatus(rr, Sr) {
        this.videoStatus = rr, (0, MS.j)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, GS.h)(rr, Sr)
      }
      maybeLogStats(rr) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const Sr = Math.round(1e3 * rr.encodedFrames / rr.windowMs);
        console.warn(`Session replay stats: ${Sr} fps encoded, ${rr.encodeWidth}x${rr.encodeHeight} ${rr.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var rr;
        null === (rr = this.capture) || void 0 === rr || rr.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const Sr = this.worker;
        this.worker = null, setTimeout((() => {
          null === Sr || void 0 === Sr || Sr.terminate()
        }), 15e3)
      }
      postToWorker(rr) {
        var Sr;
        null === (Sr = this.worker) || void 0 === Sr || Sr.postMessage(rr)
      }
    }
    const AS = 3 * Vr.d / 4,
      VS = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var iS = Qr(41420);
    const wS = {
        count: 1,
        maxBytes: QS.h
      },
      cS = "image/jpeg";
    class FS {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vr.g;
        this.uploader = rr, this.manifest = Sr, this.relay = Qr, this.keepalive = Zr, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(rr, Sr) {
        let {
          bytes: Qr,
          small: Zr,
          atMs: Wr
        } = rr;
        const ar = Qr.byteLength <= wS.maxBytes ? Qr : Zr;
        null !== ar && (this.latest = {
          bytes: ar,
          small: Zr,
          atMs: Wr
        }, Sr && this.upload())
      }
      upload() {
        var rr, Sr;
        const Qr = this.latest;
        if (this.stopped || null === Qr || Qr.atMs <= (null !== (rr = null === (Sr = this.queued) || void 0 === Sr ? void 0 : Sr.atMs) && void 0 !== rr ? rr : -1 / 0)) return;
        const Zr = this.takeSequence();
        this.queued = {
          atMs: Qr.atMs,
          sequence: Zr
        }, this.uploader.enqueue({
          kind: "still",
          contentType: cS,
          bytes: Qr.bytes,
          meta: {
            type: "still",
            atMs: Qr.atMs,
            sequence: Zr
          },
          part: {
            sequence: Zr,
            index: 0,
            slots: wS
          }
        })
      }
      landed(rr) {
        this.manifest.setStill(rr.atMs, rr.sequence), this.uploader.closeSegment("still", rr.sequence)
      }
      dropped(rr) {
        this.uploader.closeSegment("still", rr.sequence)
      }
      beacon() {
        var rr, Sr, Qr, Zr;
        const Wr = this.latest;
        if (this.stopped || null === Wr || Wr.atMs <= (null !== (rr = null === (Sr = this.manifest.contents.still) || void 0 === Sr ? void 0 : Sr.atMs) && void 0 !== rr ? rr : -1 / 0)) return;
        const ar = (null === (Qr = this.queued) || void 0 === Qr ? void 0 : Qr.atMs) === Wr.atMs ? this.queued : null;
        if (null !== ar && this.keepalive.isInFlight(cS)) return void this.manifest.setStill(Wr.atMs, ar.sequence);
        const jr = null !== (Zr = null === ar || void 0 === ar ? void 0 : ar.sequence) && void 0 !== Zr ? Zr : this.nextSequence,
          Ir = this.uploader.peekTarget("still", jr, 0);
        if (void 0 !== Ir)
          for (const fr of [Wr.bytes, Wr.small])
            if (null !== fr && this.sendBeacon(Ir, fr)) return null === ar && this.takeSequence(), void this.manifest.setStill(Wr.atMs, jr)
      }
      sendBeacon(rr, Sr) {
        var Qr, Zr;
        const Wr = null !== (Qr = null === (Zr = this.relay) || void 0 === Zr ? void 0 : Zr.beacon({
          method: "POST",
          url: rr.url,
          fields: rr.fields
        }, Sr, cS, this.keepalive)) && void 0 !== Qr ? Qr : null;
        if (null !== Wr) return Wr;
        const {
          form: ar,
          byteLength: jr
        } = (0, iS.g)(rr, Sr, cS);
        return this.keepalive.sendUploadBeacon(rr.url, ar, jr)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const rr = this.nextSequence++;
        return this.prefetchNext(), rr
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, cS, wS)
      }
    }
    var oS = Qr(5452),
      bS = Qr(41427),
      JS = Qr(41430),
      DS = Qr(41438),
      dS = Qr(7467),
      sS = Qr(7469);

    function uS(rr) {
      return 50 * Math.floor(rr / 50)
    }
    class rQ {
      constructor() {
        this.writer = new dS.c((0, Jr.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(rr, Sr) {
        null !== rr && (this.setActionBits(rr.getActionBits(), (0, Jr.e)()), this.unsubscribers.push(rr.onKey(((rr, Sr, Qr, Zr, Wr, ar) => {
          const jr = (0, sS.c)(rr);
          Wr ? this.writer.writeKey(uS(ar), jr, Sr, Qr, Zr) : 0 !== jr && null === (0, sS.f)(rr) && this.writer.writeKey(uS(ar), 0, Sr, Qr, Zr)
        })), rr.onActions(((rr, Sr) => {
          this.setActionBits(rr, Sr)
        })), rr.onPointerLock(((rr, Sr) => {
          this.writer.writeEvent(Sr, rr ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, hS.I)((() => {
          const rr = (0, hS.l)();
          this.writer.writeFrame((0, Jr.e)() - rr, rr), this.framesSinceFpsSample++, Sr()
        })))
      }
      writeState(rr, Sr) {
        this.writer.writeState((0, Jr.e)(), {
          backingWidth: rr.canvas.width,
          backingHeight: rr.canvas.height,
          cssWidth: rr.cssWidth,
          cssHeight: rr.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: rr.renderer,
          pingMs: rr.pingMs,
          hidden: Sr,
          qualityLevel: rr.qualityLevel
        })
      }
      writeEvent(rr) {
        this.writer.writeEvent((0, Jr.e)(), rr)
      }
      sampleFps() {
        const rr = performance.now(),
          Sr = rr - this.lastFpsSampleMs,
          Qr = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = rr, this.framesSinceFpsSample = 0, 0 === Qr || Sr <= 0 ? null : 1e3 * Qr / Sr
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const rr = this.writer.chunkStartMs,
          Sr = (0, Jr.e)(),
          Qr = this.writer.takeChunk(Sr);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(Sr, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: Qr,
          startMs: rr,
          endMs: Sr
        }
      }
      stop() {
        for (const rr of this.unsubscribers) rr();
        this.unsubscribers = []
      }
      setActionBits(rr, Sr) {
        rr !== this.actionBits && (this.actionBits = rr, this.writer.writeActions(uS(Sr), rr))
      }
    }
    var SQ = Qr(5461),
      QQ = Qr(41444);
    class ZQ {
      constructor(rr, Sr) {
        var Qr;
        this.recording = rr, this.telemetry = new rQ, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const Zr = Sr.dryRun ? null : null !== (Qr = rr.partJoiner) && void 0 !== Qr ? Qr : null,
          Wr = null === Zr ? null : (0, ir.f)(or(Zr)),
          jr = Sr.dryRun ? new iS.c : new iS.d((0, Lr.b)().segmentUploadUrl, {
            relay: Wr
          });
        var fr, Er;
        this.videoConfig = Sr.dryRun ? function(rr) {
          var Sr, Qr, Zr, Wr;
          const jr = ar[rr],
            Ir = Hr.j.getItem("replaySkipLowMemory"),
            fr = "boolean" === typeof Ir ? Ir : null;
          return {
            ...jr,
            maxFps: null !== (Sr = gr("replayMaxFps")) && void 0 !== Sr ? Sr : jr.maxFps,
            maxMacroblocks: null !== (Qr = gr("replayMaxMacroblocks")) && void 0 !== Qr ? Qr : jr.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (Zr = gr("replayCaptureBudgetMs")) && void 0 !== Zr ? Zr : jr.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (Wr = gr("replayCaptureCostFloorMs")) && void 0 !== Wr ? Wr : jr.captureFrameCostFloorMs,
            softwareEncoderPlatforms: Cr("replayEncoder", "software", "hardware", jr.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: Cr("replayGrab", "videoFrame", "bitmap", jr.videoFrameGrabPlatforms),
            streamGrabEngines: Mr(jr.streamGrabEngines),
            skipLowMemoryDevices: null !== fr && void 0 !== fr ? fr : jr.skipLowMemoryDevices
          }
        }(Sr.platformType) : rr.videoConfig && (fr = rr.videoConfig, Er = Sr.platformType, {
          ...ar[Er],
          ...fr
        });
        const pr = (0, SQ.e)(this.videoConfig);
        (0, MS.j)("recorded" === pr ? "video" : "dom_only", rr), this.manifest = new rS(rr.recordingId, rr.uploadToken, !Sr.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: rr.expiresAtMs - 6e4,
          onSend: rr => {
            var Sr;
            null === (Sr = this.journal) || void 0 === Sr || Sr.manifestSent(rr)
          },
          onListed: rr => {
            let {
              list: Sr,
              value: Qr
            } = rr;
            var Zr, Wr;
            if ("videoSegments" === Sr) null === (Zr = this.video.uploads) || void 0 === Zr || Zr.listed(Qr.sequence, null !== (Wr = Qr.parts) && void 0 !== Wr ? Wr : null);
            else if ("telemetrySegments" === Sr) {
              var ar;
              null === (ar = this.journal) || void 0 === ar || ar.telemetrySettled(Qr.sequence)
            } else {
              var jr;
              null === (jr = this.journal) || void 0 === jr || jr.domSettled(Qr.sequence)
            }
          }
        }), !Sr.dryRun && DS.e.supported && (this.journal = new aS(new DS.e, rr, this.manifest.contents, (0, Lr.b)())), this.debug = function() {
          const rr = {
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
          return window.sessionReplayDebug = rr, rr
        }(), this.uploader = new gS(jr, rr.uploadToken, {
          ...OS,
          maxBacklogBytes: VS[Sr.platformType],
          wait: LS
        }, {
          onUploaded: (rr, Sr) => {
            var Qr;
            this.debug.uploadedBytesByKind[rr.kind] = (null !== (Qr = this.debug.uploadedBytesByKind[rr.kind]) && void 0 !== Qr ? Qr : 0) + rr.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(rr.meta, Sr, rr.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (rr, Sr, Qr) => {
            var Zr;
            if (console.warn(`Session replay dropped a ${rr.kind} segment: ${Sr}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === rr.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (Zr = this.video.uploads) || void 0 === Zr || Zr.dropped(rr.meta);
            else if ("still" === rr.meta.type) this.stills.dropped(rr.meta);
            else if ("telemetry" === rr.meta.type && null !== Qr) {
              var Wr;
              null === (Wr = this.journal) || void 0 === Wr || Wr.telemetrySettled(Qr)
            } else if ("dom" === rr.meta.type && null !== Qr) {
              var ar;
              null === (ar = this.journal) || void 0 === ar || ar.domSettled(Qr)
            }
          },
          onStopped: rr => {
            this.stop(`uploads refused: ${rr}`)
          }
        }), this.stills = new FS(this.uploader, this.manifest, Wr), this.pageExit = new jS({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var rr, Sr;
            null === (rr = this.dom) || void 0 === rr || rr.cut(), null === (Sr = this.dom) || void 0 === Sr || Sr.cutAfterNextBatch()
          },
          postToWorker: rr => {
            this.video.postToWorker(rr)
          },
          writeEvent: rr => {
            this.telemetry.writeEvent(rr)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var rr;
            null === (rr = this.video.joiner) || void 0 === rr || rr.releaseAll()
          }
        }), this.video = new kS({
          recording: rr,
          videoConfig: this.videoConfig,
          joinerAccess: Zr,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: Sr.dryRun ? {
            logStats: !0 === Hr.j.getItem("replayLogStats")
          } : Rr,
          platformType: Sr.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, pr);
        const xr = Sr.dryRun ? function() {
          var rr;
          const Sr = null !== (rr = (0, qr.g)() ? Pr.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== rr ? rr : Hr.j.getItem("replayPostHogHost");
          return "string" === typeof Sr && Sr.length > 0 ? {
            apiHost: Sr,
            projectApiKey: "dry-run"
          } : null
        }() : rr.posthog;
        if (this.ownFpsMonitor = null === xr ? new QQ.b({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, Ir.i.subscribe("sessionReplayLowFps", (rr => {
            let {
              low: Sr
            } = rr;
            this.isStopped || this.onLowFps(Sr)
          })), Ir.i.subscribe("sessionReplayStayProgress", (rr => {
            !this.isStopped && this.manifest.updateCurrentStay(rr) && this.manifest.sendSoon()
          })), Ir.i.subscribe("sessionReplayGameQuit", (rr => {
            let {
              reasons: Sr,
              gameName: Qr
            } = rr;
            Sr.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(Qr) && this.pageExit.sendManifest()
          })), null !== Sr.currentGame && (this.listStay(Sr.currentGame), Ir.i.Jp("sessionReplayStayOpened", Sr.currentGame.gameNameWithVariation)), this.start(rr.expiresAtMs), this.dom = null, null !== xr) {
          const Qr = new vr(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: rr => this.isStopped || this.pageExit.isHiding || document.hidden && !rr
          }, this.journal, new Or.c);
          this.dom = Qr, (0, GS.d)({
            recording: rr,
            posthog: xr,
            videoStatus: this.video.videoStatus,
            dryRun: Sr.dryRun,
            onDomBatch: rr => {
              Qr.add(rr)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.videoConfig) || void 0 === Sr ? void 0 : Sr.manifestIntervalMs) && void 0 !== rr ? rr : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(rr) {
        const {
          lobbyName: Sr,
          ...Qr
        } = rr;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === Sr ? Qr : {
          ...Qr,
          lobbyName: Sr
        })
      }
      gameJoined(rr) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(rr), Ir.i.Jp("sessionReplayStayOpened", rr.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(rr, Sr) {
        this.isStopped || (this.manifest.addCreatorGrant(rr, Sr), this.manifest.send())
      }
      onLowFps(rr) {
        this.lowFpsOpen = rr, rr && this.manifest.flagCurrentGame("lowFps")
      }
      start(rr) {
        const Sr = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var rr;
          this.flushTelemetry(), null === (rr = this.dom) || void 0 === rr || rr.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, rr - Date.now() - 6e4))), this.pageExit.listen(Sr), this.telemetry.attach((0, JS.e)(), (() => {
          var rr;
          null === (rr = this.video.capture) || void 0 === rr || rr.onAfterRender()
        }));
        for (const Qr of ["error", "unhandledrejection"]) window.addEventListener(Qr, (rr => {
          (0, bS.d)(rr) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: Sr
        });
        (0, SQ.f)((() => {
          this.video.onCellular()
        }), Sr), null !== this.journal && (0, oS.c)(Sr)
      }
      stop(rr) {
        var Sr, Qr;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${rr}`), this.debug.stoppedReason = rr, this.lifetime.abort();
          for (const rr of this.timers) clearTimeout(rr);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, GS.k)(), this.telemetry.stop(), this.flushTelemetry(), null === (Sr = this.dom) || void 0 === Sr || Sr.cut(), null === (Qr = this.dom) || void 0 === Qr || Qr.close(), this.video.endVideo(), this.manifest.send(), (0, MS.j)("events_only", this.recording)
        }
      }
      onStateTick() {
        var rr;
        const Sr = this.video.canvasWatch.check();
        if (null === Sr) return;
        const {
          cssSize: Qr
        } = this.video.canvasWatch, Zr = jr.e.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: Sr.canvas,
          cssWidth: Qr.width,
          cssHeight: Qr.height,
          renderer: Sr.renderer,
          pingMs: Zr,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= AS && this.flushTelemetry();
        const Wr = this.telemetry.sampleFps(),
          ar = document.hidden ? null : Wr;
        if (null === (rr = this.ownFpsMonitor) || void 0 === rr || rr.addSample(ar, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: ar,
            pingMs: Zr
          }), null !== this.video.capture) {
          const {
            averageMs: rr,
            fps: Sr,
            grabPath: Qr
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: rr,
            budgetFps: Sr,
            grabPath: Qr
          }
        }
      }
      onSegmentUploaded(rr, Sr, Qr) {
        var Zr;
        if ("video" === rr.type) null === (Zr = this.video.uploads) || void 0 === Zr || Zr.landed(rr, Sr);
        else if ("still" === rr.type) this.stills.landed(rr);
        else if ("dom" === rr.type) {
          var Wr;
          null === (Wr = this.journal) || void 0 === Wr || Wr.domLanded(Sr, rr.chunk), this.manifest.addDomSegment({
            sequence: Sr,
            ...rr.chunk
          })
        } else {
          var ar;
          null === (ar = this.journal) || void 0 === ar || ar.telemetryLanded(Sr, Qr, rr.startMs, rr.endMs), this.manifest.addTelemetrySegment(Sr, rr.startMs, rr.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: rr,
          startMs: Sr,
          endMs: Qr
        } = this.telemetry.takeChunk(), Zr = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: rr,
          meta: {
            type: "telemetry",
            startMs: Sr,
            endMs: Qr
          }
        });
        var Wr;
        null !== Zr && (null === (Wr = this.journal) || void 0 === Wr || Wr.telemetryQueued(Zr, rr, Sr, Qr));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7467: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Or,
      g: () => Lr
    });
    var Zr = Qr(7469);
    const Wr = 827609666,
      ar = 2,
      jr = 1,
      Ir = 13,
      fr = 1,
      Er = 2,
      pr = 3,
      xr = 4,
      mr = 5,
      Nr = 7,
      Ur = 19,
      tr = 6,
      hr = 7,
      zr = 7,
      Yr = 1,
      nr = 2,
      er = 4,
      Kr = 65535,
      yr = 10,
      Br = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      Tr = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function vr(rr) {
      return Math.max(0, Math.min(Kr, Math.round(rr)))
    }
    class Or {
      constructor(rr) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(rr)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - Ir
      }
      writeFrame(rr, Sr) {
        this.reserve(Nr);
        const Qr = this.view,
          Zr = this.length;
        Qr.setUint8(Zr, fr), Qr.setUint32(Zr + 1, this.timeUnits(rr), !0), Qr.setUint16(Zr + 5, vr(100 * Sr), !0), this.length += Nr
      }
      writeState(rr, Sr) {
        this.reserve(Ur);
        const Qr = this.view,
          Zr = this.length;
        Qr.setUint8(Zr, Er), Qr.setUint32(Zr + 1, this.timeUnits(rr), !0), Qr.setUint16(Zr + 5, vr(Sr.backingWidth), !0), Qr.setUint16(Zr + 7, vr(Sr.backingHeight), !0), Qr.setUint16(Zr + 9, vr(Sr.cssWidth), !0), Qr.setUint16(Zr + 11, vr(Sr.cssHeight), !0), Qr.setUint16(Zr + 13, vr(100 * Sr.devicePixelRatio), !0), Qr.setUint8(Zr + 15, Br.indexOf(Sr.renderer)), Qr.setUint16(Zr + 16, null === Sr.pingMs ? Kr : vr(Math.min(Sr.pingMs, Kr - 1)), !0), Qr.setUint8(Zr + 18, (Sr.hidden ? 1 : 0) | (7 & Sr.qualityLevel) << 1), this.length += Ur
      }
      writeEvent(rr, Sr) {
        this.reserve(tr);
        const Qr = this.length;
        this.view.setUint8(Qr, pr), this.view.setUint32(Qr + 1, this.timeUnits(rr), !0), this.view.setUint8(Qr + 5, Tr.indexOf(Sr)), this.length += tr
      }
      writeActions(rr, Sr) {
        this.reserve(hr);
        const Qr = this.length;
        this.view.setUint8(Qr, xr), this.view.setUint32(Qr + 1, this.timeUnits(rr), !0), this.view.setUint16(Qr + 5, Sr, !0), this.length += hr
      }
      writeKey(rr, Sr, Qr, Zr, Wr) {
        this.reserve(zr);
        const ar = this.length;
        this.view.setUint8(ar, mr), this.view.setUint32(ar + 1, this.timeUnits(rr), !0), this.view.setUint8(ar + 5, Sr), this.view.setUint8(ar + 6, (Qr ? Yr : 0) | (Zr ? nr : 0) | (Wr ? er : 0)), this.length += zr
      }
      takeChunk(rr) {
        const Sr = this.buffer.slice(0, this.length);
        return this.startChunk(rr), Sr
      }
      startChunk(rr) {
        this.baseEpochMs = rr, this.view.setUint32(0, Wr, !0), this.view.setUint8(4, ar), this.view.setFloat64(5, rr, !0), this.length = Ir
      }
      timeUnits(rr) {
        return Math.max(0, Math.round((rr - this.baseEpochMs) * yr))
      }
      reserve(rr) {
        if (this.length + rr <= this.buffer.byteLength) return;
        const Sr = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(Sr).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = Sr, this.view = new DataView(Sr)
      }
    }

    function Lr(rr) {
      const Sr = new DataView(rr),
        Qr = rr.byteLength < Ir ? 0 : Sr.getUint8(4);
      if (Qr < jr || Qr > ar || Sr.getUint32(0, !0) !== Wr) throw new Error(`Not a version ${jr}-${ar} replay telemetry chunk`);
      const vr = Sr.getFloat64(5, !0),
        Or = {
          baseEpochMs: vr,
          inputRecorded: Qr >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        Lr = rr => vr + Sr.getUint32(rr, !0) / yr;
      let lr = Ir;
      for (; lr < rr.byteLength;) {
        const rr = Sr.getUint8(lr);
        if (rr === fr) Or.frames.push({
          atMs: Lr(lr + 1),
          cpuFrameMs: Sr.getUint16(lr + 5, !0) / 100
        }), lr += Nr;
        else if (rr === Er) {
          var Xr;
          const rr = Sr.getUint16(lr + 16, !0),
            Qr = Sr.getUint8(lr + 18);
          Or.states.push({
            atMs: Lr(lr + 1),
            backingWidth: Sr.getUint16(lr + 5, !0),
            backingHeight: Sr.getUint16(lr + 7, !0),
            cssWidth: Sr.getUint16(lr + 9, !0),
            cssHeight: Sr.getUint16(lr + 11, !0),
            devicePixelRatio: Sr.getUint16(lr + 13, !0) / 100,
            renderer: null !== (Xr = Br[Sr.getUint8(lr + 15)]) && void 0 !== Xr ? Xr : "unknown",
            pingMs: rr === Kr ? null : rr,
            hidden: 1 === (1 & Qr),
            qualityLevel: Qr >> 1 & 7
          }), lr += Ur
        } else if (rr === pr) {
          var Pr;
          Or.events.push({
            atMs: Lr(lr + 1),
            event: null !== (Pr = Tr[Sr.getUint8(lr + 5)]) && void 0 !== Pr ? Pr : "none"
          }), lr += tr
        } else if (rr === xr && Or.inputRecorded) Or.actions.push({
          atMs: Lr(lr + 1),
          bits: Sr.getUint16(lr + 5, !0)
        }), lr += hr;
        else {
          if (rr !== mr || !Or.inputRecorded) throw new Error(`Unknown replay telemetry record type ${rr} at byte ${lr}`);
          {
            var Hr;
            const rr = Sr.getUint8(lr + 6);
            Or.keys.push({
              atMs: Lr(lr + 1),
              code: null !== (Hr = Zr.b[Sr.getUint8(lr + 5)]) && void 0 !== Hr ? Hr : Zr.b[0],
              down: 0 !== (rr & Yr),
              bound: 0 !== (rr & nr),
              inPlay: 0 !== (rr & er)
            }), lr += zr
          }
        }
      }
      return Or
    }
  },
  37500: rr => {
    rr.exports = function(rr, Sr, Qr, Zr) {
      var Wr = self || window;
      try {
        try {
          var ar;
          try {
            ar = new Wr.Blob([rr])
          } catch (Er) {
            (ar = new(Wr.BlobBuilder || Wr.WebKitBlobBuilder || Wr.MozBlobBuilder || Wr.MSBlobBuilder)).append(rr), ar = ar.getBlob()
          }
          var jr = Wr.URL || Wr.webkitURL,
            Ir = jr.createObjectURL(ar),
            fr = new Wr[Sr](Ir, Qr);
          return jr.revokeObjectURL(Ir), fr
        } catch (Er) {
          return new Wr[Sr]("data:application/javascript,".concat(encodeURIComponent(rr)), Qr)
        }
      } catch (Er) {
        if (!Zr) throw Error("Inline worker is not supported");
        return new Wr[Sr](Zr, Qr)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);