export const id = 63;
export const ids = [63];
export const modules = {
  40554: (ee, ie, He) => {
    function ye() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function be(ee) {
      return ee instanceof Uint8Array && (!ye() || !Buffer.isBuffer(ee))
    }

    function Me(ee) {
      return ee instanceof ArrayBuffer
    }

    function Ke(ee) {
      return !!ye() && Buffer.isBuffer(ee)
    }
    var Ue = He(40557).e,
      Fe = He(40562).d,
      Je = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    ie.b = function(ee) {
      if (!be(ee) && !Me(ee) && !Ke(ee)) throw new TypeError(Je);
      var ie = !1,
        He = !1;
      be(ee) ? ie = !0 : Me(ee) && (He = !0, ee = new Uint8Array(ee));
      var ye, Ue, oe, Re = new Fe(ee),
        ke = Re.maxCompressedLength();
      if (ie ? (ye = new Uint8Array(ke), oe = Re.compressToBuffer(ye)) : He ? (ye = new ArrayBuffer(ke), Ue = new Uint8Array(ye), oe = Re.compressToBuffer(Ue)) : (ye = Buffer.alloc(ke), oe = Re.compressToBuffer(ye)), !ye.slice) {
        var qe = new Uint8Array(Array.prototype.slice.call(ye, 0, oe));
        if (ie) return qe;
        if (He) return qe.buffer;
        throw new Error("Not implemented")
      }
      return ye.slice(0, oe)
    }
  },
  40562: (ee, ie) => {
    var He = new Array(15);

    function ye(ee, ie) {
      return 506832829 * ee >>> ie
    }

    function be(ee, ie) {
      return ee[ie] + (ee[ie + 1] << 8) + (ee[ie + 2] << 16) + (ee[ie + 3] << 24)
    }

    function Me(ee, ie, He) {
      return ee[ie] === ee[He] && ee[ie + 1] === ee[He + 1] && ee[ie + 2] === ee[He + 2] && ee[ie + 3] === ee[He + 3]
    }

    function Ke(ee, ie, He, ye, be) {
      return He <= 60 ? (ye[be] = He - 1 << 2, be += 1) : He < 256 ? (ye[be] = 240, ye[be + 1] = He - 1, be += 2) : (ye[be] = 244, ye[be + 1] = He - 1 & 255, ye[be + 2] = He - 1 >>> 8, be += 3),
        function(ee, ie, He, ye, be) {
          var Me;
          for (Me = 0; Me < be; Me++) He[ye + Me] = ee[ie + Me]
        }(ee, ie, ye, be, He), be + He
    }

    function Ue(ee, ie, He, ye) {
      return ye < 12 && He < 2048 ? (ee[ie] = 1 + (ye - 4 << 2) + (He >>> 8 << 5), ee[ie + 1] = 255 & He, ie + 2) : (ee[ie] = 2 + (ye - 1 << 2), ee[ie + 1] = 255 & He, ee[ie + 2] = He >>> 8, ie + 3)
    }

    function Fe(ee, ie, He, ye) {
      for (; ye >= 68;) ie = Ue(ee, ie, He, 64), ye -= 64;
      return ye > 64 && (ie = Ue(ee, ie, He, 60), ye -= 60), Ue(ee, ie, He, ye)
    }

    function Je(ee, ie, Ue, Je, oe) {
      for (var Re = 1; 1 << Re <= Ue && Re <= 14;) Re += 1;
      var ke = 32 - (Re -= 1);
      "undefined" === typeof He[Re] && (He[Re] = new Uint16Array(1 << Re));
      var qe, fe = He[Re];
      for (qe = 0; qe < fe.length; qe++) fe[qe] = 0;
      var Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te = ie + Ue,
        Ze = ie,
        we = ie,
        De = !0;
      if (Ue >= 15)
        for (Te = te - 15, Xe = ye(be(ee, ie += 1), ke); De;) {
          Ee = 32, ze = ie;
          do {
            if (pe = Xe, ge = Ee >>> 5, Ee += 1, ze = (ie = ze) + ge, ie > Te) {
              De = !1;
              break
            }
            Xe = ye(be(ee, ze), ke), Be = Ze + fe[pe], fe[pe] = ie - Ze
          } while (!Me(ee, ie, Be));
          if (!De) break;
          oe = Ke(ee, we, ie - we, Je, oe);
          do {
            for (Oe = ie, de = 4; ie + de < te && ee[ie + de] === ee[Be + de];) de += 1;
            if (ie += de, oe = Fe(Je, oe, Oe - Be, de), we = ie, ie >= Te) {
              De = !1;
              break
            }
            fe[ye(be(ee, ie - 1), ke)] = ie - 1 - Ze, Be = Ze + fe[We = ye(be(ee, ie), ke)], fe[We] = ie - Ze
          } while (Me(ee, ie, Be));
          if (!De) break;
          Xe = ye(be(ee, ie += 1), ke)
        }
      return we < te && (oe = Ke(ee, we, te - we, Je, oe)), oe
    }

    function oe(ee) {
      this.array = ee
    }
    oe.prototype.maxCompressedLength = function() {
      var ee = this.array.length;
      return 32 + ee + Math.floor(ee / 6)
    }, oe.prototype.compressToBuffer = function(ee) {
      var ie, He = this.array,
        ye = He.length,
        be = 0,
        Me = 0;
      for (Me = function(ee, ie, He) {
          do {
            ie[He] = 127 & ee, (ee >>>= 7) > 0 && (ie[He] += 128), He += 1
          } while (ee > 0);
          return He
        }(ye, ee, Me); be < ye;) Me = Je(He, be, ie = Math.min(ye - be, 65536), ee, Me), be += ie;
      return Me
    }, ie.d = oe
  },
  40557: (ee, ie) => {
    var He = [0, 255, 65535, 16777215, 4294967295];

    function ye(ee, ie, He, ye, be) {
      var Me;
      for (Me = 0; Me < be; Me++) He[ye + Me] = ee[ie + Me]
    }

    function be(ee, ie, He, ye) {
      var be;
      for (be = 0; be < ye; be++) ee[ie + be] = ee[ie - He + be]
    }

    function Me(ee) {
      this.array = ee, this.pos = 0
    }
    Me.prototype.readUncompressedLength = function() {
      for (var ee, ie, He = 0, ye = 0; ye < 32 && this.pos < this.array.length;) {
        if (ee = this.array[this.pos], this.pos += 1, (ie = 127 & ee) << ye >>> ye !== ie) return -1;
        if (He |= ie << ye, ee < 128) return He;
        ye += 7
      }
      return -1
    }, Me.prototype.uncompressToBuffer = function(ee) {
      for (var ie, Me, Ke, Ue, Fe = this.array, Je = Fe.length, oe = this.pos, Re = 0; oe < Fe.length;)
        if (ie = Fe[oe], oe += 1, 0 === (3 & ie)) {
          if ((Me = 1 + (ie >>> 2)) > 60) {
            if (oe + 3 >= Je) return !1;
            Ke = Me - 60, Me = 1 + ((Me = Fe[oe] + (Fe[oe + 1] << 8) + (Fe[oe + 2] << 16) + (Fe[oe + 3] << 24)) & He[Ke]), oe += Ke
          }
          if (oe + Me > Je) return !1;
          ye(Fe, oe, ee, Re, Me), oe += Me, Re += Me
        } else {
          switch (3 & ie) {
            case 1:
              Me = 4 + (ie >>> 2 & 7), Ue = Fe[oe] + (ie >>> 5 << 8), oe += 1;
              break;
            case 2:
              if (oe + 1 >= Je) return !1;
              Me = 1 + (ie >>> 2), Ue = Fe[oe] + (Fe[oe + 1] << 8), oe += 2;
              break;
            case 3:
              if (oe + 3 >= Je) return !1;
              Me = 1 + (ie >>> 2), Ue = Fe[oe] + (Fe[oe + 1] << 8) + (Fe[oe + 2] << 16) + (Fe[oe + 3] << 24), oe += 4
          }
          if (0 === Ue || Ue > Re) return !1;
          be(ee, Re, Ue, Me), Re += Me
        } return !0
    }, ie.e = Me
  },
  40541: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      SessionReplayRecorder: () => bH
    });
    const ye = {
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
      be = {
        ...ye,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        captureBudgetMsPerSecond: 60,
        skipLowMemoryDevices: !0
      },
      Me = {
        desktop: ye,
        mobile: be,
        tablet: be
      };
    var Ke = He(2966),
      Ue = He(27);
    const Fe = 4194304,
      Je = 16777216;
    var oe = He(3748);
    const Re = [2, 4, 9, 3],
      ke = oe.c,
      qe = [ke.MouseInteraction, ke.MouseMove, ke.TouchMove],
      fe = [ke.MouseMove, ke.MouseInteraction, ke.Scroll, ke.ViewportResize, ke.Input, ke.TouchMove, ke.MediaInteraction, ke.Drag],
      Te = new Map([
        ["warn", "warn"],
        ["countReset", "warn"],
        ["error", "error"],
        ["assert", "error"]
      ]);

    function pe(ee) {
      if ("object" !== typeof ee || null === ee || Array.isArray(ee)) return !1;
      const ie = ee.timestamp;
      return "number" === typeof ie && ie > 0 && ie <= 864e13
    }
    class Xe {
      constructor() {
        this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.timestamps = [], this.active = []
      }
      addMessage() {
        this.messageCount++
      }
      addEvent(ee) {
        this.eventCount++;
        const ie = function(ee) {
          var ie;
          return ee.type === oe.b.IncrementalSnapshot ? null === (ie = ee.data) || void 0 === ie ? void 0 : ie.source : void 0
        }(ee);
        this.timestamps.push(ee.timestamp), this.active.push(fe.includes(ie));
        const He = function(ee) {
          var ie;
          const He = ee.data;
          if (ee.type === oe.b.Custom && "$json_ld" === (null === He || void 0 === He ? void 0 : He.tag)) return;
          const ye = "string" === typeof(null === He || void 0 === He ? void 0 : He.href) ? He.href.trim() : void 0,
            be = "string" === typeof(null === He || void 0 === He || null === (ie = He.payload) || void 0 === ie ? void 0 : ie.href) ? He.payload.href.trim() : void 0;
          return ye || be || void 0
        }(ee);
        He && this.addUrl(He), ie === ke.MouseInteraction && Re.includes(ee.data.type) && this.clickCount++, ie === ke.Input && this.keypressCount++, qe.includes(ie) && this.mouseActivityCount++;
        const ye = ee.data;
        if (ee.type === oe.b.Plugin && "rrweb/console@1" === (null === ye || void 0 === ye ? void 0 : ye.plugin)) {
          var be;
          const ee = Te.get(null === (be = ye.payload) || void 0 === be ? void 0 : be.level);
          "warn" === ee ? this.consoleWarnCount++ : "error" === ee ? this.consoleErrorCount++ : this.consoleLogCount++
        }
      }
      finish(ee) {
        if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
        return {
          eventCount: this.eventCount,
          messageCount: this.messageCount,
          size: ee,
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
      addUrl(ee) {
        const ie = ee.slice(0, 4096);
        this.firstUrl ??= ie, this.urls.size < 25 && !this.urls.has(ie) && this.urlsLength + ie.length <= 8192 && (this.urls.add(ie), this.urlsLength += ie.length)
      }
      activeMs() {
        var ee;
        const ie = this.timestamps.map(((ee, ie) => ie)).sort(((ee, ie) => this.timestamps[ee] - this.timestamps[ie]));
        let He = 0,
          ye = null,
          be = 0;
        for (const Ke of ie) {
          const ee = this.timestamps[Ke],
            ie = this.active[Ke],
            Ue = !ye || ie && !ye.isActive || ye.isActive && be + 5e3 < ee;
          var Me;
          if (be = ie ? ee : be, Ue) null !== (Me = ye) && void 0 !== Me && Me.isActive && (He += Math.max(1, ye.end - ye.start)), ye = {
            start: ee,
            end: ee,
            isActive: ie
          };
          else ye.end = ee
        }
        return null !== (ee = ye) && void 0 !== ee && ee.isActive && (He += Math.max(1, ye.end - ye.start)), Math.floor(He)
      }
    }
    const ze = 5592405.333333333;
    class Be {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1048576;
        this.chunkChars = ee, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new Xe, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
      }
      get dR() {
        return 0 === this.lines.length
      }
      get tooBigForExit() {
        return this.holdsSnapshot || this.chars >= 262144
      }
      add(ee) {
        const ie = ee.events.filter(pe),
          He = ie.map((ie => JSON.stringify([ee.windowId, ie]) + "\n"));
        if (0 === He.length) return [];
        const ye = [],
          be = He.reduce(((ee, ie) => ee + ie.length), 0);
        !this.dR && this.chars + be > this.chunkChars && ye.push(this.finish());
        let Me = !1;
        return ie.forEach(((ee, ie) => {
          const be = He[ie];
          !this.dR && this.chars + be.length > this.chunkChars && (ye.push(this.finish()), Me = !1), Me || (this.counter.addMessage(), Me = !0), this.counter.addEvent(ee), this.lines.push(be), this.chars += be.length, this.startMs = Math.min(this.startMs, ee.timestamp), this.endMs = Math.max(this.endMs, ee.timestamp), this.holdsSnapshot ||= ee.type === oe.b.FullSnapshot || ee.type === oe.b.Meta
        })), ye.filter((ee => null !== ee))
      }
      finish() {
        if (this.dR) return null;
        const {
          startMs: ee,
          endMs: ie,
          counter: He,
          holdsSnapshot: ye,
          chunkIndex: be,
          tailedChars: Me
        } = this, Ke = {
          text: this.lines.join(""),
          startMs: ee,
          endMs: ie,
          counter: He,
          holdsSnapshot: ye,
          chunkIndex: be,
          tailedChars: Me
        };
        return this.reset(), Ke
      }
      takeTail() {
        if (this.tailedLines === this.lines.length || this.chars > ze) return null;
        const ee = {
          chunkIndex: this.chunkIndex,
          fromChar: this.tailedChars,
          text: this.lines.slice(this.tailedLines).join(""),
          startMs: this.startMs,
          endMs: this.endMs,
          summary: this.counter.finish(0)
        };
        return this.tailedLines = this.lines.length, this.tailedChars = this.chars, ee
      }
      reset() {
        this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new Xe, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
      }
    }

    function Ee(ee) {
      let {
        text: ie
      } = ee;
      return ie.length <= ze
    }

    function ge(ee) {
      const {
        text: ie,
        startMs: He,
        endMs: ye,
        counter: be,
        chunkIndex: Me,
        tailedChars: Ke
      } = ee;
      return Ke !== ie.length && Ee(ee) ? {
        chunkIndex: Me,
        fromChar: Ke,
        text: ie.slice(Ke),
        startMs: He,
        endMs: ye,
        summary: be.finish(0)
      } : null
    }

    function Oe(ee, ie) {
      let {
        startMs: He,
        endMs: ye,
        counter: be,
        holdsSnapshot: Me
      } = ee, {
        bytes: Ke,
        inflatedBytes: Ue
      } = ie;
      return Ke.byteLength > Fe || Ue > Je ? (console.warn(`Session replay: dropped a ${Ue}-byte page recording chunk, over the size limits`), null) : {
        bytes: Ke,
        startMs: He,
        endMs: ye,
        summary: be.finish(Ue),
        holdsSnapshot: Me
      }
    }
    var de = He(40548);
    class We {
      constructor(ee, ie, He, ye) {
        this.uploader = ee, this.timing = ie, this.journal = He, this.packer = ye, this.writer = new Be, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      add(ee) {
        this.pack(this.writer.add(ee)), (this.cutNext || this.timing.cutsEachBatch() || this.writer.tooBigForExit) && (this.cutNext = !1, this.cut());
        const ie = this.journal;
        null === ie || null !== this.tailTimer || this.writer.dR || (this.tailTimer = setTimeout((() => {
          this.tailTimer = null;
          const ee = this.writer.takeTail();
          null !== ee && ie.domTail(ee)
        }), 3e3))
      }
      cutAfterNextBatch() {
        this.cutNext = !0
      }
      cut() {
        const ee = this.writer.finish();
        this.pack(null === ee ? [] : [ee])
      }
      cutOnTimer() {
        this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
      }
      cutForVideo() {
        if (!this.tickedSinceVideoCut || this.writer.dR) return;
        this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
        const ee = this.packing[this.packing.length - 1];
        return void 0 !== ee ? new Promise((ie => {
          const He = ee.onQueued;
          ee.onQueued = () => {
            null === He || void 0 === He || He(), ie()
          }
        })) : void 0
      }
      close() {
        null !== this.tailTimer && (clearTimeout(this.tailTimer), this.tailTimer = null), this.packer.close()
      }
      pack(ee) {
        const ie = ee.filter((ee => {
            const ie = function(ee) {
              let {
                text: ie
              } = ee;
              return ie.length <= Je || (console.warn(`Session replay: dropped a page recording chunk of ${ie.length} characters, over the size limits`), !1)
            }(ee);
            var He;
            ie || (null === (He = this.journal) || void 0 === He || He.domTailDropped(ee.chunkIndex));
            return ie
          })),
          He = this.journalWorks() && ie.every((ee => Ee(ee))) && this.packing.every((ee => ee.journalled));
        if (this.timing.packsNow(He)) {
          for (const ee of ie) this.packing.push({
            text: ee,
            packed: null,
            journalled: this.tailHolds(ee)
          });
          for (const ee of [...this.packing]) this.packHere(ee);
          return this.packer.forgetWaiting(), void this.queuePacked()
        }
        for (const ye of ie) {
          const ee = null === this.journal ? null : ge(ye);
          null !== ee && this.journal.domTail(ee);
          const ie = {
            text: ye,
            packed: null,
            journalled: this.tailHolds(ye)
          };
          this.packing.push(ie), this.packer.pack(ye.text).then((ee => {
            ie.packed = ee, this.queuePacked()
          }), (() => {
            this.packHere(ie), this.queuePacked()
          }))
        }
      }
      packHere(ee) {
        const ie = this.packing.indexOf(ee);
        if (!(ie < 0)) try {
          ee.packed ??= (0, de.c)(ee.text.text)
        } catch (be) {
          var He, ye;
          console.warn("Session replay couldn't pack a page chunk, so dropped it.", be), this.packing.splice(ie, 1), null === (He = this.journal) || void 0 === He || He.domTailDropped(ee.text.chunkIndex), null === (ye = ee.onQueued) || void 0 === ye || ye.call(ee)
        }
      }
      journalWorks() {
        return null !== this.journal && this.journal.working
      }
      tailHolds(ee) {
        return this.journalWorks() && Ee(ee)
      }
      queuePacked() {
        for (; this.packing.length > 0 && null !== this.packing[0].packed;) {
          const {
            text: ee,
            packed: ie,
            onQueued: He
          } = this.packing.shift();
          this.enqueue(ee.chunkIndex, Oe(ee, ie)), null === He || void 0 === He || He()
        }
      }
      enqueue(ee, ie) {
        var He;
        if (null === ie) return void(null === (He = this.journal) || void 0 === He || He.domTailDropped(ee));
        const {
          startMs: ye,
          endMs: be,
          summary: Me,
          holdsSnapshot: Ke
        } = ie, Ue = ie.bytes.buffer, Fe = {
          startMs: ye,
          endMs: be,
          byteLength: Ue.byteLength,
          summary: Me
        }, Je = this.uploader.enqueue({
          kind: "dom",
          contentType: "application/octet-stream",
          bytes: Ue,
          meta: {
            type: "dom",
            chunk: Fe
          },
          dropLast: Ke
        });
        var oe, Re;
        null === Je ? null === (oe = this.journal) || void 0 === oe || oe.domTailDropped(ee) : null === (Re = this.journal) || void 0 === Re || Re.domQueued(Je, Ue, Fe, ee)
      }
    }
    var te = He(40570);
    var Ze = He(40572),
      we = He(3221),
      De = He(97),
      Pe = He(103),
      Ae = He(35),
      Ye = He(5086);
    const Ve = {
      logStats: !1
    };

    function ae(ee) {
      const ie = Ae.i.getItem(ee);
      return "number" === typeof ie && Number.isFinite(ie) ? ie : null
    }

    function ce(ee, ie, He, ye) {
      const be = Ae.i.getItem(ee);
      return be === ie ? [(0, De.getOperatingSystem)()] : be === He ? [] : ye
    }

    function xe(ee) {
      const ie = Ae.i.getItem("replayGrab");
      return "stream" === ie ? [(0, we.e)()] : "videoFrame" === ie || "bitmap" === ie ? [] : ee
    }
    const Le = "/v1/release",
      Ce = Fe;
    var ve = He(1155),
      ue = He(40584),
      me = He(40592),
      le = He(40594);

    function Se(ee) {
      return `replayJoiner/${ee}`
    }
    class ne {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue.g;
        this.baseUrl = ee, this.keepalive = ie
      }
      postPart(ee, ie) {
        const He = (0, me.g)(ee, ie),
          ye = 15e3 + (be = He.size, Math.ceil(be / 16384 * 1e3));
        var be;
        return this.post("/v1/part", He, He.size, ye, ee.sequence)
      }
      finish(ee) {
        const ie = JSON.stringify(ee);
        return this.post("/v1/finish", ie, (0, ue.i)(ie), 3e4, ee.sequence)
      }
      release(ee) {
        return !this.keepalive.isInFlight(Se(ee.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${Le}`, JSON.stringify(ee))
      }
      async post(ee, ie, He, ye, be) {
        const Me = `${this.baseUrl}${ee}`,
          Ke = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: ie,
            signal: (0, ve.v)(ye)
          },
          Ue = He <= ue.d ? await this.keepalive.fetch(Me, Ke, He, Se(be)) : await fetch(Me, Ke);
        if (!Ue.ok) throw new le.b(`Part joiner ${ee} failed with ${Ue.status}`, Ue.status);
        return await Ue.json()
      }
    }

    function je(ee) {
      return {
        releaseUrl: `${ee.url}${Le}`,
        token: ee.token,
        relay: {
          url: `${ee.url}/v1/relay`,
          maxBytes: Ce
        }
      }
    }
    var se = He(7132),
      Ie = He(40602),
      he = He(40606),
      Ne = He(40609);

    function Ge() {
      return (0, Ze.b)().manifestUrl
    }
    const re = {
      sendIntervalMs: 3e4,
      lateFromMs: 1 / 0,
      onSend: () => {},
      onListed: () => {}
    };
    class Qe {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.uploadToken = ie, this.sendEnabled = He, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, this.sending = !1, this.retries = 0, this.queuedSend = null, this.options = void 0, this.options = {
          ...re,
          ...ye
        };
        const be = Math.round((0, Ie.e)());
        this.manifest = {
          recordingId: ee,
          startedAtMs: be,
          endedAtMs: be,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        }
      }
      get contents() {
        return this.manifest
      }
      setVideoSegment(ee, ie, He) {
        const ye = {
            sequence: ee,
            ...ie,
            startMs: Math.round(ie.startMs),
            endMs: Math.round(ie.endMs),
            ...null === He ? {} : {
              parts: He
            }
          },
          be = this.manifest.videoSegments.findIndex((ie => ie.sequence === ee)); - 1 === be ? this.manifest.videoSegments.push(ye) : this.manifest.videoSegments[be] = ye, this.sendSoon()
      }
      setStill(ee, ie) {
        var He, ye;
        ee > (null !== (He = null === (ye = this.manifest.still) || void 0 === ye ? void 0 : ye.atMs) && void 0 !== He ? He : -1 / 0) && (this.manifest.still = {
          atMs: Math.round(ee),
          sequence: ie
        }, this.sendSoon())
      }
      addTelemetrySegment(ee, ie, He) {
        this.manifest.telemetrySegments.push({
          sequence: ee,
          startMs: Math.round(ie),
          endMs: Math.round(He)
        }), this.sendSoon()
      }
      addDomSegment(ee) {
        this.pendingDom.add(ee), this.sendSoon()
      }
      addCreatorGrant(ee, ie) {
        this.creatorGrants.set(ee, ie)
      }
      gameJoined(ee) {
        this.gameLeft(), this.manifest.games.push({
          ...ee,
          joinedAtMs: Math.round((0, Ie.e)()),
          leftAtMs: null,
          lowFps: !1,
          hadError: !1
        })
      }
      flagLastGameQuitAfterDeath(ee) {
        const ie = this.manifest.games.at(-1);
        return !(!ie || (null === ee ? null !== ie.leftAtMs : ie.gameNameWithVariation !== ee)) && (ie.quitAfterDeath = !0, !0)
      }
      flagCurrentGame(ee) {
        const ie = this.manifest.games.at(-1);
        ie && null === ie.leftAtMs && (ie[ee] = !0)
      }
      updateCurrentStay(ee) {
        var ie, He, ye;
        const be = this.manifest.games.at(-1);
        if (!be || null !== be.leftAtMs) return !1;
        const Me = (0, se.i)(be.furthestStep, ee.furthestStep),
          Ke = Math.max(null !== (ie = be.unboundKeyPresses) && void 0 !== ie ? ie : 0, null !== (He = ee.unboundKeyPresses) && void 0 !== He ? He : 0);
        return (Me !== be.furthestStep || Ke !== (null !== (ye = be.unboundKeyPresses) && void 0 !== ye ? ye : 0)) && (void 0 !== Me && (be.furthestStep = Me), Ke > 0 && (be.unboundKeyPresses = Ke), !0)
      }
      gameLeft() {
        const ee = this.manifest.games.at(-1);
        ee && null === ee.leftAtMs && (ee.leftAtMs = Math.round((0, Ie.e)()))
      }
      sendSoon() {
        this.schedule(this.options.sendIntervalMs, (() => []))
      }
      sendShortly(ee) {
        this.schedule(1e3, ee)
      }
      send() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var ie;
        if (this.sending) return void(this.queuedSend = ei(null !== (ie = this.queuedSend) && void 0 !== ie ? ie : [], ee));
        const He = this.prepareSend(ee);
        null !== He && (this.sending = !0, this.postInTurn(He).then((ee => {
          this.sending = !1, this.retries = "retryLater" === ee ? this.retries + 1 : 0;
          const ie = this.queuedSend;
          null !== ie ? (this.queuedSend = null, this.send(ie)) : "retryLater" === ee && this.retries <= 10 && this.sendSoon()
        })))
      }
      sendFinal() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const {
            request: He
          }
          of null !== (ie = this.prepareSend(ee)) && void 0 !== ie ? ie : []) {
          var ie;
          ue.g.sendBeacon(Ge(), JSON.stringify(He)) || (0, he.d)(Ge(), He)
        }
      }
      async postInTurn(ee) {
        for (const {
            request: ie,
            items: He
          }
          of ee) {
          const ee = await (0, he.d)(Ge(), ie);
          if ("retryLater" === ee) return ee;
          for (const ie of He) ie.ack("uploaded" === ee);
          this.retries = 0
        }
        return "uploaded"
      }
      schedule(ee, ie) {
        const He = Date.now() + ee;
        if (!this.sendEnabled || null !== this.sendTimer && this.sendTimer.dueMs <= He) return;
        null !== this.sendTimer && clearTimeout(this.sendTimer.timer);
        const ye = setTimeout((() => {
          this.send(ie())
        }), ee);
        this.sendTimer = {
          timer: ye,
          dueMs: He
        }
      }
      prepareSend(ee) {
        if (null !== this.sendTimer && (clearTimeout(this.sendTimer.timer), this.sendTimer = null), !this.sendEnabled) return null;
        this.manifest.endedAtMs = Math.round((0, Ie.e)());
        const ie = this.pendingItems(ee);
        this.options.onSend({
          ...this.manifest,
          games: ie.flatMap((ee => "games" === ee.list ? [ee.value] : []))
        });
        const {
          recordingId: He,
          startedAtMs: ye,
          endedAtMs: be,
          still: Me
        } = this.manifest, Ke = {
          uploadToken: this.uploadToken,
          manifest: {
            recordingId: He,
            startedAtMs: ye,
            endedAtMs: be,
            videoSegments: [],
            telemetrySegments: [],
            games: [],
            ...void 0 === Me ? {} : {
              still: Me
            }
          },
          creatorGrants: [],
          ...Date.now() >= this.options.lateFromMs ? {
            late: !0
          } : {}
        };
        return (0, Ne.d)(Ke, ie)
      }
      pendingItems(ee) {
        const ie = [];
        for (const ye of this.creatorGrants.values()) this.ackedGrants.has(ye) || ie.push({
          list: "creatorGrants",
          value: ye,
          ack: () => {
            this.ackedGrants.add(ye)
          }
        });
        for (const ye of this.manifest.games) {
          const ee = JSON.stringify(ye);
          this.ackedGames.get(ye) !== ee && ie.push({
            list: "games",
            value: {
              ...ye
            },
            ack: () => {
              this.ackedGames.set(ye, ee)
            }
          })
        }
        for (const ye of this.manifest.videoSegments) this.ackedVideo.get(ye.sequence) !== ye && ie.push({
          list: "videoSegments",
          value: ye,
          ack: ee => {
            this.ackedVideo.set(ye.sequence, ye), ee && this.options.onListed({
              list: "videoSegments",
              value: ye
            })
          }
        });
        const He = new Set;
        for (const ye of this.manifest.telemetrySegments) He.add(ye.sequence), this.ackedTelemetry.has(ye) || ie.push({
          list: "telemetrySegments",
          value: ye,
          ack: ee => {
            this.ackedTelemetry.add(ye), ee && this.options.onListed({
              list: "telemetrySegments",
              value: ye
            })
          }
        });
        for (const ye of this.pendingDom) ie.push({
          list: "domSegments",
          value: ye,
          ack: ee => {
            this.pendingDom.delete(ye), ee && this.options.onListed({
              list: "domSegments",
              value: ye
            })
          }
        });
        for (const ye of ei([], ee)) He.has(ye.sequence) || ie.push({
          list: "telemetrySegments",
          value: ye,
          ack: () => {}
        });
        return ie
      }
    }

    function ei(ee, ie) {
      const He = [...ee];
      for (const ye of ie) He.some((ee => ee.sequence === ye.sequence)) || He.push({
        sequence: ye.sequence,
        startMs: Math.round(ye.startMs),
        endMs: Math.round(ye.endMs)
      });
      return He
    }
    var ii = He(40579),
      Hi = He(5106);

    function yi(ee) {
      return {
        ...ee,
        videoSegments: [],
        telemetrySegments: [],
        games: ee.games.map((ee => ({
          ...ee
        })))
      }
    }
    class bi {
      constructor(ee, ie, He, ye) {
        var be;
        this.journal = ee, this.record = void 0, this.landedVideo = new Map, this.record = {
          recordingId: ie.recordingId,
          uploadToken: ie.uploadToken,
          expiresAtMs: ie.expiresAtMs,
          nextVideoSequence: 0,
          manifest: yi(He),
          endpoints: ye,
          lateUploadUntilMs: ie.expiresAtMs + ii.d,
          ...void 0 === ie.partJoiner ? {} : {
            partJoiner: je(ie.partJoiner)
          }
        }, null === (be = navigator.locks) || void 0 === be || be.request((0, Hi.w)(ie.recordingId), (() => new Promise((() => {})))), this.putRecording()
      }
      get recordingId() {
        return this.record.recordingId
      }
      get working() {
        return this.journal.working
      }
      manifestSent(ee) {
        this.record.manifest = yi(ee), this.putRecording()
      }
      videoQueued(ee, ie) {
        this.record.nextVideoSequence = Math.max(this.record.nextVideoSequence, ie + 1), this.setMarker(), this.journal.putVideoSequence(this.snapshot(), ee, ie)
      }
      videoPartLanded(ee, ie, He) {
        this.landedVideo.set(ee, {
          segmentId: ee,
          ...ie
        }), this.putRecording(), this.journal.putVideoProgress({
          recordingId: this.record.recordingId,
          segmentId: ee,
          ...ie
        }, He)
      }
      telemetryQueued(ee, ie, He, ye) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: ee,
          startMs: He,
          endMs: ye,
          bytes: ie
        })
      }
      videoUploaded(ee) {
        this.journal.removeVideoChunks(this.record.recordingId, ee)
      }
      videoSettled(ee) {
        this.landedVideo.delete(ee), this.journal.removeVideo(this.record.recordingId, ee)
      }
      telemetryLanded(ee, ie, He, ye) {
        this.journal.putTelemetry({
          recordingId: this.record.recordingId,
          sequence: ee,
          startMs: He,
          endMs: ye,
          bytes: ie,
          landed: !0
        })
      }
      telemetrySettled(ee) {
        this.journal.removeTelemetry(this.record.recordingId, ee)
      }
      domQueued(ee, ie, He, ye) {
        var be;
        this.record.nextDomSequence = Math.max(null !== (be = this.record.nextDomSequence) && void 0 !== be ? be : 0, ee + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
          recordingId: this.record.recordingId,
          sequence: ee,
          chunk: He,
          bytes: ie
        }, ye)
      }
      domTail(ee) {
        this.journal.putDomTail({
          recordingId: this.record.recordingId,
          ...ee
        })
      }
      domTailDropped(ee) {
        this.journal.removeDomTail(this.record.recordingId, ee)
      }
      domLanded(ee, ie) {
        this.journal.putDom({
          recordingId: this.record.recordingId,
          sequence: ee,
          chunk: ie,
          bytes: null
        })
      }
      domSettled(ee) {
        this.journal.removeDom(this.record.recordingId, ee)
      }
      setMarker() {
        Ae.i.setItem(Hi.n, !0)
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
    class Mi {
      constructor(ee) {
        this.deps = ee, this.pageHiding = !1, this.exitFlushedAtMs = -1 / 0
      }
      get isHiding() {
        return this.pageHiding
      }
      listen(ee) {
        document.addEventListener("visibilitychange", (() => {
          const ee = document.hidden;
          this.deps.writeEvent(ee ? "hidden" : "visible"), this.deps.postToWorker({
            type: "hidden",
            hidden: ee
          }), ee ? (this.flushTelemetryOnExit(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording()) : this.exitFlushedAtMs = -1 / 0
        }), {
          signal: ee
        }), window.addEventListener("pageshow", (() => {
          this.pageHiding = !1
        }), {
          signal: ee
        }), window.addEventListener("pagehide", (ee => {
          this.pageHiding = !0, this.deps.postToWorker({
            type: "flush"
          }), this.flushTelemetryOnExit(), this.deps.stills.beacon(), this.sendManifest(), ee.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
        }), {
          signal: ee
        })
      }
      flushTelemetryOnExit() {
        const ee = performance.now();
        ee - this.exitFlushedAtMs > 1e3 && (this.deps.flushTelemetry(), this.exitFlushedAtMs = ee)
      }
      sendManifest() {
        this.pageHiding ? this.deps.manifest.sendFinal(this.uploadingTelemetry()) : this.deps.manifest.send()
      }
      segmentLanded() {
        this.pageHiding ? this.sendManifest() : this.deps.isStopped() ? this.deps.manifest.send(this.uploadingTelemetry()) : document.hidden && this.deps.manifest.sendShortly((() => this.uploadingTelemetry()))
      }
      uploadingTelemetry() {
        return this.deps.queuedUploads().flatMap((ee => {
          let {
            sequence: ie,
            meta: He
          } = ee;
          return "telemetry" === He.type ? [{
            sequence: ie,
            startMs: He.startMs,
            endMs: He.endMs
          }] : []
        }))
      }
    }
    var Ki = He(36938),
      Ui = He.n(Ki);

    function Fi() {
      return Ui()('/*! For license information please see sessionReplayVideo.worker.e6609570.worker.js.LICENSE.txt */\n(()=>{var ee={9:()=>{}},ie={};function He(ye){var be=ie[ye];if(void 0!==be)return be.exports;var Me=ie[ye]={exports:{}};return ee[ye](Me,Me.exports,He),Me.exports}(()=>{var ee,ie=Object.getPrototypeOf?ee=>Object.getPrototypeOf(ee):ee=>ee.__proto__;He.t=function(ye,be){if(1&be&&(ye=this(ye)),8&be)return ye;if("object"===typeof ye&&ye){if(4&be&&ye.__esModule)return ye;if(16&be&&"function"===typeof ye.then)return ye}var Me=Object.create(null);He.r(Me);var Ke={};ee=ee||[null,ie({}),ie([]),ie(ie)];for(var Ue=2&be&&ye;"object"==typeof Ue&&!~ee.indexOf(Ue);Ue=ie(Ue))Object.getOwnPropertyNames(Ue).forEach((ee=>Ke[ee]=()=>ye[ee]));return Ke.default=()=>ye,He.d(Me,Ke),Me}})(),He.d=(ee,ie)=>{for(var ye in ie)He.o(ie,ye)&&!He.o(ee,ye)&&Object.defineProperty(ee,ye,{enumerable:!0,get:ie[ye]})},He.o=(ee,ie)=>Object.prototype.hasOwnProperty.call(ee,ie),He.r=ee=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(ee,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(ee,"__esModule",{value:!0})};const ye="bloxdSessionReplayTails";const be=["recordings","videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"];function Me(ee){return new Promise(((ie,He)=>{ee.onsuccess=()=>{ie(ee.result)},ee.onerror=()=>{He(ee.error)}}))}function Ke(ee){return new Promise(((ie,He)=>{ee.oncomplete=()=>{ie()},ee.onerror=()=>{He(ee.error)},ee.onabort=()=>{var ie;He(null!==(ie=ee.error)&&void 0!==ie?ie:new Error("IndexedDB transaction aborted"))}}))}function Ue(ee){return IDBKeyRange.bound([ee],[ee,[]])}function Fe(ee,ie){return IDBKeyRange.bound([ee,ie],[ee,ie,[]])}class Je{constructor(){this.db=null,this.opening=null,this.failed=!1,this.tailRecordings=new Set}get working(){return!this.failed}static get supported(){try{return"undefined"!==typeof indexedDB}catch{return!1}}putRecording(ee){this.write(["recordings"],(ie=>{ie.objectStore("recordings").put(ee)}))}putVideoSequence(ee,ie,He){this.write(["recordings","videoSequences"],(ye=>{ye.objectStore("recordings").put(ee),ye.objectStore("videoSequences").put({recordingId:ee.recordingId,segmentId:ie,sequence:He})}))}appendVideo(ee,ie){this.write(["videoHeaders","videoChunks"],(He=>{He.objectStore("videoHeaders").put(ee);const ye=He.objectStore("videoChunks");for(const ee of ie)ye.put(ee)}))}putVideoProgress(ee,ie){this.write(["videoProgress","videoChunks"],(He=>{if(He.objectStore("videoProgress").put(ee),ie>0){const{recordingId:ye,segmentId:be}=ee;He.objectStore("videoChunks").delete(IDBKeyRange.bound([ye,be,0],[ye,be,ie],!1,!0))}}))}removeVideoChunks(ee,ie){this.write(["videoChunks"],(He=>{He.objectStore("videoChunks").delete(Fe(ee,ie))}))}removeVideo(ee,ie){this.write(["videoHeaders","videoChunks","videoSequences","videoProgress"],(He=>{He.objectStore("videoHeaders").delete([ee,ie]),He.objectStore("videoChunks").delete(Fe(ee,ie)),He.objectStore("videoSequences").delete([ee,ie]),He.objectStore("videoProgress").delete([ee,ie])}))}putTelemetry(ee){this.write(["telemetry"],(ie=>{ie.objectStore("telemetry").put(ee)}))}removeTelemetry(ee,ie){this.write(["telemetry"],(He=>{He.objectStore("telemetry").delete([ee,ie])}))}putDom(ee){this.write(["dom"],(ie=>{ie.objectStore("dom").put(ee)}))}queueDom(ee,ie,He){this.write(["recordings","dom","domTail"],(ye=>{ye.objectStore("recordings").put(ee),ye.objectStore("dom").put(ie),ye.objectStore("domTail").delete(Fe(ie.recordingId,He))}),(ye=>{console.warn(`Session replay couldn\'t journal page recording chunk ${ie.sequence}; a closing tab may lose it.`,ye),this.write(["recordings","domTail"],(ye=>{ye.objectStore("recordings").put(ee),ye.objectStore("domTail").delete(Fe(ie.recordingId,He))}))}))}putDomTail(ee){this.tailRecordings.add(ee.recordingId),this.write(["domTail"],(ie=>{ie.objectStore("domTail").put(ee)}))}removeDomTail(ee,ie){this.write(["domTail"],(He=>{He.objectStore("domTail").delete(Fe(ee,ie))}))}removeDom(ee,ie){this.write(["dom"],(He=>{He.objectStore("dom").delete([ee,ie])}))}async listRecordings(){const ee=await this.open();return await Me(ee.transaction("recordings","readonly").objectStore("recordings").getAll())}async read(ee){const ie=(await this.open()).transaction(["videoHeaders","videoChunks","videoSequences","videoProgress","telemetry","dom","domTail"],"readonly"),He=Ue(ee.recordingId),ye=ee=>Me(ie.objectStore(ee).getAll(He)),[be,Ke,Fe,Je,oe,Re,ke]=await Promise.all([ye("videoHeaders"),ye("videoChunks"),ye("videoSequences"),ye("videoProgress"),ye("telemetry"),ye("dom"),ye("domTail")]);return{recording:ee,telemetry:oe,dom:Re,domTails:ke,video:be.map((ee=>{var ie,He,ye;return{header:ee,sequence:null!==(ie=null===(He=Fe.find((ie=>ie.segmentId===ee.segmentId)))||void 0===He?void 0:He.sequence)&&void 0!==ie?ie:null,progress:null!==(ye=Je.find((ie=>ie.segmentId===ee.segmentId)))&&void 0!==ye?ye:null,chunks:Ke.filter((ie=>ie.segmentId===ee.segmentId))}}))}}async deleteRecording(ee){const ie=(await this.open()).transaction([...be],"readwrite");ie.objectStore("recordings").delete(ee);for(const He of be.slice(1))ie.objectStore(He).delete(Ue(ee));await Ke(ie)}async forgetSent(ee,ie){const He=(await this.open()).transaction([...be],"readwrite"),{recordingId:ye}=ee;He.objectStore("recordings").put(ee);for(const be of ie.videoSegmentIds)He.objectStore("videoHeaders").delete([ye,be]),He.objectStore("videoChunks").delete(Fe(ye,be)),He.objectStore("videoSequences").delete([ye,be]),He.objectStore("videoProgress").delete([ye,be]);for(const be of ie.telemetrySequences)He.objectStore("telemetry").delete([ye,be]);for(const be of ie.domSequences)He.objectStore("dom").delete([ye,be]);for(const be of ie.domTailChunks)He.objectStore("domTail").delete(Fe(ye,be));await Ke(He)}write(ee,ie){let He=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ee=>{this.fail(ee)};if(this.failed)return;const ye=ye=>{try{var be;const Me=ye.transaction(ee,"readwrite");ie(Me),null===(be=Me.commit)||void 0===be||be.call(Me),Ke(Me).catch(He)}catch(Me){He(Me)}};null===this.db?this.open().then(ye,(ee=>{this.fail(ee)})):ye(this.db)}fail(ee){this.failed||(this.failed=!0,console.warn("Session replay can\'t keep its upload journal; what a closing tab leaves unsent will be lost.",ee),this.dropTails())}dropTails(){if(null===this.db||0===this.tailRecordings.size)return;const ee=ee=>{console.warn("Session replay couldn\'t drop its page recording tails from its upload journal.",ee)};try{const ie=this.db.transaction(["domTail"],"readwrite");for(const ee of this.tailRecordings)ie.objectStore("domTail").delete(Ue(ee));Ke(ie).catch(ee)}catch(ie){ee(ie)}}open(){return this.opening??=new Promise(((ee,ie)=>{const He=indexedDB.open(ye,4);He.onupgradeneeded=ee=>{const ie=He.result;ee.oldVersion<1&&(ie.createObjectStore("recordings",{keyPath:"recordingId"}),ie.createObjectStore("videoHeaders",{keyPath:["recordingId","segmentId"]}),ie.createObjectStore("videoChunks",{keyPath:["recordingId","segmentId","index"]}),ie.createObjectStore("videoSequences",{keyPath:["recordingId","segmentId"]}),ie.createObjectStore("telemetry",{keyPath:["recordingId","sequence"]})),ee.oldVersion<2&&ie.createObjectStore("videoProgress",{keyPath:["recordingId","segmentId"]}),ee.oldVersion<3&&ie.createObjectStore("dom",{keyPath:["recordingId","sequence"]}),ie.createObjectStore("domTail",{keyPath:["recordingId","chunkIndex","fromChar"]})};let be=!1;He.onblocked=()=>{be=!0,ie(new Error("An older tab holds the upload journal at an earlier version"))},He.onsuccess=()=>{be?He.result.close():(this.db=He.result,this.db.onversionchange=()=>{var ee;this.dropTails(),null===(ee=this.db)||void 0===ee||ee.close(),this.db=null,this.opening=null},ee(He.result))},He.onerror=()=>{ie(He.error)}})),this.opening}}const oe=[{fpsScale:1,areaScale:1},{fpsScale:2/3,areaScale:.56},{fpsScale:.5,areaScale:.36},{fpsScale:1/3,areaScale:.25}];class Re{constructor(){this.level=0,this.lastChangeMs=-1/0,this.healthySinceMs=null,this.firstSampleMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null,this.lastChangeReason="none",this.steppedDownForGameFps=!1}getLevel(){return oe[this.level]}getLevelIndex(){return this.level}getLastChangeReason(){return this.lastChangeReason}restartWarmUp(){this.firstSampleMs=null,this.healthySinceMs=null,this.gameStrugglingSinceMs=null,this.backpressureSinceMs=null}update(ee){this.firstSampleMs??=ee.nowMs;const ie=null!==ee.pingMs&&ee.pingMs>300,He=ee.nowMs-this.firstSampleMs>=3e4;He&&(null!==ee.gameFps&&ee.gameFps<24||ie)?this.gameStrugglingSinceMs??=ee.nowMs:this.gameStrugglingSinceMs=null,He&&ee.encoderBackpressureDrops>0?this.backpressureSinceMs??=ee.nowMs:this.backpressureSinceMs=null;const ye=null!==this.backpressureSinceMs&&ee.nowMs-this.backpressureSinceMs>=3e3,be=ye||null!==this.gameStrugglingSinceMs&&ee.nowMs-this.gameStrugglingSinceMs>=1e4,Me=this.steppedDownForGameFps?45:24,Ke=0===ee.encoderBackpressureDrops&&!ie&&(null===ee.gameFps||ee.gameFps>=Me);return be?(this.healthySinceMs=null,this.level<oe.length-1&&ee.nowMs-this.lastChangeMs>=1e4&&(this.level++,this.lastChangeMs=ee.nowMs,this.lastChangeReason=ye?"encoderBackpressure":ie?"highPing":"lowGameFps",this.steppedDownForGameFps||="lowGameFps"===this.lastChangeReason,!0)):Ke&&0!==this.level?(this.healthySinceMs??=ee.nowMs,ee.nowMs-this.healthySinceMs>=6e4&&(this.level--,this.lastChangeMs=ee.nowMs,this.lastChangeReason="recovered",this.healthySinceMs=null,this.steppedDownForGameFps&&=this.level>0,!0)):(this.healthySinceMs=null,!1)}}function ke(ee,ie){return ee.width===ie.width&&ee.height===ie.height}function qe(ee){return Math.max(2,2*Math.floor(ee/2))}function fe(ee){return Math.ceil(ee.width/16)*Math.ceil(ee.height/16)}function Te(ee,ie,He){const ye=ee.bitrate*fe(ie)/ee.maxMacroblocks;return He*Math.min(ee.bitrate,Math.max(ee.minBitrate,ye/He))}class pe{constructor(ee){this.intervalMs=void 0,this.nextDueMs=-1/0,this.intervalMs=1e3/ee}setMaxFps(ee){this.intervalMs=1e3/ee}shouldKeep(ee){return!(ee<this.nextDueMs-.25*this.intervalMs)&&(this.nextDueMs=ee-this.nextDueMs>this.intervalMs?ee+this.intervalMs:this.nextDueMs+this.intervalMs,!0)}reset(){this.nextDueMs=-1/0}}const Xe=["avc1.42001f","avc1.42e01f","avc1.4d001f","avc1.64001f"],ze=["variable","constant"],Be=["realtime","quality"],Ee=["quality","realtime"];class ge{constructor(){this.canvas=null,this.context=null}scale(ee,ie){if(ee.displayWidth===ie.width&&ee.displayHeight===ie.height)return ee;return this.contextFor(ie).drawImage(ee,0,0,ie.width,ie.height),new VideoFrame(this.canvas,{timestamp:ee.timestamp,alpha:"discard"})}contextFor(ee){return null===this.canvas||null===this.context?(this.canvas=new OffscreenCanvas(ee.width,ee.height),this.context=this.canvas.getContext("2d",{alpha:!1})):this.canvas.width===ee.width&&this.canvas.height===ee.height||(this.canvas.width=ee.width,this.canvas.height=ee.height),this.context}}const Oe=[...[.7,.6,.5,.42,.35].map((ee=>({width:640,quality:ee}))),{width:480,quality:.35},{width:360,quality:.35}],de=[{width:320,quality:.5},{width:320,quality:.35},{width:240,quality:.35},{width:160,quality:.35}];class We{constructor(ee,ie){this.steps=ee,this.targetBytes=ie,this.index=0}get step(){return this.steps[this.index]}record(ee){ee>this.targetBytes?this.index=Math.min(this.index+1,this.steps.length-1):ee<.6*this.targetBytes&&(this.index=Math.max(this.index-1,0))}}class te{constructor(ee){this.post=ee,this.full=new We(Oe,28e3),this.small=new We(de,6144),this.lastTimestampUs=-1/0,this.encoding=!1,this.failed=!1}offer(ee,ie){if(!(this.failed||this.encoding||ee.timestamp-this.lastTimestampUs<2e6)){this.lastTimestampUs=ee.timestamp;try{const He=Ze(ee,ee.displayWidth,ee.displayHeight,this.full.step.width),ye=Ze(He,He.width,He.height,this.small.step.width);this.encoding=!0,this.encode(He,ye,ie).finally((()=>{this.encoding=!1}))}catch(He){this.fail(He)}}}async encode(ee,ie,He){try{const[ye,be]=await Promise.all([ee.convertToBlob({type:"image/jpeg",quality:this.full.step.quality}),ie.convertToBlob({type:"image/jpeg",quality:this.small.step.quality})]);this.full.record(ye.size),this.small.record(be.size);const Me=await ye.arrayBuffer(),Ke=be.size<=8192?await be.arrayBuffer():null;this.post({type:"still",bytes:Me,small:Ke,atMs:He},null===Ke?[Me]:[Me,Ke])}catch(ye){this.fail(ye)}}fail(ee){this.failed=!0,console.warn("Session replay couldn\'t encode a still; recording without one.",ee)}}function Ze(ee,ie,He,ye){const be=Math.min(ye,ie),Me=Math.max(1,Math.round(He*be/ie)),Ke=new OffscreenCanvas(be,Me),Ue=Ke.getContext("2d");if(null===Ue)throw new Error("no 2D context");return Ue.drawImage(ee,0,0,be,Me),Ke}let we=Date.now()-performance.now();function De(){const ee=performance.now(),ie=Date.now();return Math.abs(ie-(ee+we))>20&&(we=ie-ee),ee+we}function Pe(ee){if(!ee)throw new Error("Assertion failed.")}const Ae=Math.PI/180,Ye=(Math.PI,[1,0,0,0,1,0,0,0,1]),Ve=ee=>{const ie=ee*Ae,He=Math.round(Math.cos(ie)),ye=Math.round(Math.sin(ie));return[He,ye,0,-ye,He,0,0,0,1]},ae=(ee,ie)=>[1,0,0,0,1,0,ee,ie,1],ce=(ee,ie)=>{const He=new Array(9);for(let ye=0;ye<3;ye++)for(let be=0;be<3;be++)He[3*ye+be]=ee[3*ye]*ie[be]+ee[3*ye+1]*ie[3+be]+ee[3*ye+2]*ie[6+be];return He},xe=ee=>ee&&ee[ee.length-1],Le=ee=>ee>=0&&ee<2**32,Ce=ee=>{let ie=0;for(;0===ee.readBits(1)&&ie<32;)ie++;if(ie>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<ie)-1+ee.readBits(ie)},ve=ee=>{const ie=Ce(ee);return 0===(1&ie)?-(ie>>1):ie+1>>1},ue=ee=>ee.constructor===Uint8Array?ee:ArrayBuffer.isView(ee)?new Uint8Array(ee.buffer,ee.byteOffset,ee.byteLength):new Uint8Array(ee),me=ee=>ee.constructor===DataView?ee:ArrayBuffer.isView(ee)?new DataView(ee.buffer,ee.byteOffset,ee.byteLength):new DataView(ee),le="undefined"!==typeof globalThis.TextEncoder?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(){let ee=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const ie=new Uint8Array(3*ee.length);let He=0;for(let ye=0;ye<ee.length;ye++){let be=ee.charCodeAt(ye);if(be<128)ie[He++]=be;else if(be<2048)ie[He++]=192|be>>6,ie[He++]=128|63&be;else if(be<55296||be>57343)ie[He++]=224|be>>12,ie[He++]=128|be>>6&63,ie[He++]=128|63&be;else{const Me=ye+1<ee.length?ee.charCodeAt(ye+1):0;be<56320&&Me>=56320&&Me<=57343?(be=65536+(be-55296<<10)+(Me-56320),ye++,ie[He++]=240|be>>18,ie[He++]=128|be>>12&63,ie[He++]=128|be>>6&63,ie[He++]=128|63&be):(ie[He++]=239,ie[He++]=191,ie[He++]=189)}}return ie.slice(0,He)}},Se=("undefined"!==typeof globalThis.TextDecoder&&globalThis.TextDecoder,new le),ne={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},je={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},se={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Ie=ee=>!ee||null==ee.primaries&&null==ee.transfer&&null==ee.matrix&&null==ee.fullRange,he=ee=>ee instanceof ArrayBuffer||"undefined"!==typeof SharedArrayBuffer&&ee instanceof SharedArrayBuffer||ArrayBuffer.isView(ee);class Ne{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let ee;const ie=new Promise((ie=>{let He=!1;ee=()=>{He||(ie(),this.pending--,He=!0)}})),He=this.currentPromise;return this.currentPromise=ie,this.pending++,await He,ee}}const Ge=()=>{let ee,ie;return{promise:new Promise(((He,ye)=>{ee=He,ie=ye})),resolve:ee,reject:ie}},re=ee=>{throw new Error(`Unexpected value: ${ee}`)},Qe=(ee,ie,He,ye)=>{He>>>=0,He&=16777215,ye?(ee.setUint8(ie,255&He),ee.setUint8(ie+1,He>>>8&255),ee.setUint8(ie+2,He>>>16&255)):(ee.setUint8(ie,He>>>16&255),ee.setUint8(ie+1,He>>>8&255),ee.setUint8(ie+2,255&He))},ei="und",ii=ee=>{let ie=0;for(;0!==ee;)ee&=ee-1,ie++;return ie},Hi=/^[a-z]{3}$/,yi=1e6*(1+Number.EPSILON);const bi=(async()=>{})().constructor,Mi=ee=>ee instanceof bi||ee instanceof Promise||"function"===typeof ee?.then,Ki=function*(ee){for(const ie in ee){const He=ee[ie];void 0!==He&&(yield{key:ie,value:He})}},Ui=ee=>"number"===typeof ee&&!Number.isNaN(ee),Fi=ee=>{Pe(Number.isInteger(ee.num)),Pe(Number.isInteger(ee.den)),Pe(0!==ee.den);let ie=Math.abs(ee.num),He=Math.abs(ee.den);for(;0!==He;){const ee=ie%He;ie=He,He=ee}const ye=ie||1;return{num:ee.num/ye,den:ee.den/ye}};new Map,new Map;const Ji=ee=>Array.isArray(ee)?ee:[ee];class oi{constructor(){this._listeners=new Map}on(ee,ie,He){this._listeners.has(ee)||this._listeners.set(ee,new Set);const ye={oR:ie,once:He?.once??!1};return this._listeners.get(ee).add(ye),()=>{this._listeners.get(ee)?.delete(ye)}}_emit(){for(var ee=arguments.length,ie=new Array(ee),He=0;He<ee;He++)ie[He]=arguments[He];const[ye,be]=ie,Me=this._listeners.get(ye);if(Me)for(const Ue of Me){try{Ue.oR(be)}catch(Ke){console.error(Ke)}Ue.once&&Me.delete(Ue)}}}const Ri=ee=>null!==ee&&"object"===typeof ee&&Object.getPrototypeOf(ee)===Object.prototype&&Object.values(ee).every((ee=>"string"===typeof ee));class ki{constructor(ee,ie){if(this.data=ee,this.mimeType=ie,!(ee instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!==typeof ie)throw new TypeError("mimeType must be a string.")}}class qi{constructor(ee,ie,He,ye){if(this.data=ee,this.mimeType=ie,this.name=He,this.description=ye,!(ee instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==ie&&"string"!==typeof ie)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==He&&"string"!==typeof He)throw new TypeError("name, when provided, must be a string.");if(void 0!==ye&&"string"!==typeof ye)throw new TypeError("description, when provided, must be a string.")}}class fi{constructor(ee){this.bytes=ee,this.pos=0}seekToByte(ee){this.pos=8*ee}readBit(){const ee=Math.floor(this.pos/8),ie=this.bytes[ee]??0,He=7-(7&this.pos),ye=(ie&1<<He)>>He;return this.pos++,ye}readBits(ee){if(1===ee)return this.readBit();let ie=0;for(let He=0;He<ee;He++)ie<<=1,ie|=this.readBit();return ie}writeBits(ee,ie){const He=this.pos+ee;for(let ye=this.pos;ye<He;ye++){const ee=Math.floor(ye/8);let be=this.bytes[ee];const Me=7-(7&ye);be&=~(1<<Me),be|=(ie&1<<He-ye-1)>>He-ye-1<<Me,this.bytes[ee]=be}this.pos=He}copyBits(ee,ie){let He=0;for(;He<ee-7;He+=8)this.writeBits(8,ie.readBits(8));const ye=ee-He;ye>0&&this.writeBits(ye,ie.readBits(ye))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const ee=this.pos/8,ie=this.bytes[ee]??0;return this.pos+=8,ie}skipBits(ee){this.pos+=ee}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const ee=new fi(this.bytes);return ee.pos=this.pos,ee}}const Ti=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Xi=[-1,1,2,3,4,5,6,8],zi=ee=>{const ie=5===ee.objectType||29===ee.objectType,He=29===ee.objectType,ye=ie?ee.outputSampleRate/2:ee.outputSampleRate,be=He?1:ee.outputNumberOfChannels,Me=Xi.indexOf(be);if(-1===Me)throw new TypeError(`Unsupported number of channels: ${ee.outputNumberOfChannels}`);let Ke=16;ee.objectType>=32&&(Ke+=6),15===gi(ye)&&(Ke+=24),ie&&(Ke+=9,15===gi(ee.outputSampleRate)&&(Ke+=24));const Ue=Math.ceil(Ke/8),Fe=new Uint8Array(Ue),Je=new fi(Fe);return Bi(Je,ee.objectType),Ei(Je,ye),Je.writeBits(4,Me),ie&&(Ei(Je,ee.outputSampleRate),Bi(Je,2)),Je.writeBits(3,0),Fe},Bi=(ee,ie)=>{ie<32?ee.writeBits(5,ie):(ee.writeBits(5,31),ee.writeBits(6,ie-32))},Ei=(ee,ie)=>{const He=gi(ie);ee.writeBits(4,He),15===He&&ee.writeBits(24,ie)},gi=ee=>{const ie=Ti.indexOf(ee);return-1===ie?15:ie};var Oi;!function(ee){ee[ee.Silent=0]="Silent",ee[ee.Errors=1]="Errors",ee[ee.Warnings=2]="Warnings",ee[ee.Info=3]="Info"}(Oi||(Oi={}));class di{constructor(){}static get level(){return di._level}static set level(ee){if(ee!==Oi.Silent&&ee!==Oi.Errors&&ee!==Oi.Warnings&&ee!==Oi.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");di._level=ee}static get _emitter(){return di._emitterInstance??=new oi}static on(ee,ie,He){return di._emitter.on(ee,ie,He)}static _error(){for(var ee=arguments.length,ie=new Array(ee),He=0;He<ee;He++)ie[He]=arguments[He];di._emitter._emit("error",ie),di._level>=Oi.Errors&&console.error(...ie)}static _warn(){for(var ee=arguments.length,ie=new Array(ee),He=0;He<ee;He++)ie[He]=arguments[He];di._emitter._emit("warn",ie),di._level>=Oi.Warnings&&console.warn(...ie)}static _info(){for(var ee=arguments.length,ie=new Array(ee),He=0;He<ee;He++)ie[He]=arguments[He];di._emitter._emit("info",ie),di._level>=Oi.Info&&console.info(...ie)}}di._level=Oi.Info,di._emitterInstance=null;const Wi=[48e3,44100,32e3],ti=[24e3,22050,16e3],Zi="Mediabunny v1.61.3";var wi,Di;!function(ee){ee[ee.NON_IDR_SLICE=1]="NON_IDR_SLICE",ee[ee.SLICE_DPA=2]="SLICE_DPA",ee[ee.SLICE_DPB=3]="SLICE_DPB",ee[ee.SLICE_DPC=4]="SLICE_DPC",ee[ee.IDR=5]="IDR",ee[ee.SEI=6]="SEI",ee[ee.SPS=7]="SPS",ee[ee.PPS=8]="PPS",ee[ee.AUD=9]="AUD",ee[ee.SPS_EXT=13]="SPS_EXT"}(wi||(wi={})),function(ee){ee[ee.RASL_N=8]="RASL_N",ee[ee.RASL_R=9]="RASL_R",ee[ee.BLA_W_LP=16]="BLA_W_LP",ee[ee.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",ee[ee.VPS_NUT=32]="VPS_NUT",ee[ee.SPS_NUT=33]="SPS_NUT",ee[ee.PPS_NUT=34]="PPS_NUT",ee[ee.AUD_NUT=35]="AUD_NUT",ee[ee.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",ee[ee.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"}(Di||(Di={}));const Pi=function*(ee){let ie=0,He=-1;for(;ie<ee.length-2;){const ye=ee.indexOf(0,ie);if(-1===ye||ye>=ee.length-2)break;ie=ye;let be=0;ie+3<ee.length&&0===ee[ie+1]&&0===ee[ie+2]&&1===ee[ie+3]?be=4:0===ee[ie+1]&&1===ee[ie+2]&&(be=3),0!==be?(-1!==He&&ie>He&&(yield{offset:He,length:ie-He}),He=ie+be,ie=He):ie++}-1!==He&&He<ee.length&&(yield{offset:He,length:ee.length-He})},Ai=ee=>31&ee,Yi=ee=>{const ie=[],He=ee.length;for(let ye=0;ye<He;ye++)ye+2<He&&0===ee[ye]&&0===ee[ye+1]&&3===ee[ye+2]?(ie.push(0,0),ye+=2):ie.push(ee[ye]);return new Uint8Array(ie)},Vi=(new Uint8Array([0,0,0,1]),(ee,ie)=>{const He=ee.reduce(((ee,He)=>ee+ie+He.byteLength),0),ye=new Uint8Array(He);let be=0;for(const Me of ee){const ee=new DataView(ye.buffer,ye.byteOffset,ye.byteLength);switch(ie){case 1:ee.setUint8(be,Me.byteLength);break;case 2:ee.setUint16(be,Me.byteLength,!1);break;case 3:Qe(ee,be,Me.byteLength,!1);break;case 4:ee.setUint32(be,Me.byteLength,!1)}be+=ie,ye.set(Me,be),be+=Me.byteLength}return ye}),ai=ee=>{try{const ie=[],He=[],ye=[];for(const Ue of Pi(ee)){const be=ee.subarray(Ue.offset,Ue.offset+Ue.length),Me=Ai(be[0]);Me===wi.SPS?ie.push(be):Me===wi.PPS?He.push(be):Me===wi.SPS_EXT&&ye.push(be)}if(0===ie.length)return null;if(0===He.length)return null;const be=ie[0],Me=xi(be);Pe(null!==Me);const Ke=100===Me.profileIdc||110===Me.profileIdc||122===Me.profileIdc||144===Me.profileIdc;return{configurationVersion:1,avcProfileIndication:Me.profileIdc,profileCompatibility:Me.constraintFlags,avcLevelIndication:Me.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:ie,pictureParameterSets:He,chromaFormat:Ke?Me.chromaFormatIdc:null,bitDepthLumaMinus8:Ke?Me.bitDepthLumaMinus8:null,bitDepthChromaMinus8:Ke?Me.bitDepthChromaMinus8:null,sequenceParameterSetExt:Ke?ye:null}}catch(ie){return di._error("Error building AVC Decoder Configuration Record:",ie),null}},ci={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},xi=ee=>{try{const ie=Yi(ee),He=new fi(ie);He.skipBits(1),He.skipBits(2);if(7!==He.readBits(5))return null;const ye=He.readAlignedByte(),be=He.readAlignedByte(),Me=He.readAlignedByte();Ce(He);let Ke=1,Ue=0,Fe=0,Je=0;if(100===ye||110===ye||122===ye||244===ye||44===ye||83===ye||86===ye||118===ye||128===ye){Ke=Ce(He),3===Ke&&(Je=He.readBits(1)),Ue=Ce(He),Fe=Ce(He),He.skipBits(1);if(He.readBits(1))for(let ee=0;ee<(3!==Ke?8:12);ee++){if(He.readBits(1)){const ie=ee<6?16:64;let ye=8,be=8;for(let ee=0;ee<ie;ee++){if(0!==be){be=(ye+ve(He)+256)%256}ye=0===be?ye:be}}}}Ce(He);const oe=Ce(He);if(0===oe)Ce(He);else if(1===oe){He.skipBits(1),ve(He),ve(He);const ee=Ce(He);for(let ie=0;ie<ee;ie++)ve(He)}Ce(He),He.skipBits(1);const Re=Ce(He),ke=Ce(He),qe=16*(Re+1),fe=16*(ke+1);let Te=qe,pe=fe;const Xe=He.readBits(1);Xe||He.skipBits(1),He.skipBits(1);if(He.readBits(1)){const ee=Ce(He),ie=Ce(He),ye=Ce(He),be=Ce(He);let Me,Ue;if(0===(0===Je?Ke:0))Me=1,Ue=2-Xe;else{Me=3===Ke?1:2,Ue=(1===Ke?2:1)*(2-Xe)}Te-=Me*(ee+ie),pe-=Ue*(ye+be)}let ze=2,Be=2,Ee=2,ge=0,Oe={num:1,den:1},de=null,We=null,te=null,Ze=null;const we=He.pos;if(He.readBits(1)){if(He.readBits(1)){const ee=He.readBits(8);if(255===ee)Oe={num:He.readBits(16),den:He.readBits(16)};else{const ie=ci[ee];ie&&(Oe=ie)}}He.readBits(1)&&He.skipBits(1);if(He.readBits(1)){He.skipBits(3),ge=He.readBits(1);He.readBits(1)&&(ze=He.readBits(8),Be=He.readBits(8),Ee=He.readBits(8))}He.readBits(1)&&(Ce(He),Ce(He));He.readBits(1)&&(He.skipBits(32),He.skipBits(32),He.skipBits(1));const ee=He.readBits(1);ee&&Li(He);const ie=He.readBits(1);ie&&Li(He),(ee||ie)&&He.skipBits(1),He.skipBits(1),te=He.pos,Ze=He.readBits(1),Ze&&(He.skipBits(1),Ce(He),Ce(He),Ce(He),Ce(He),de=Ce(He),We=Ce(He))}if(null===de){Pe(null===We);if(44!==ye&&86!==ye&&100!==ye&&110!==ye&&122!==ye&&244!==ye||!(16&be)){const ee=Re+1,ie=(2-Xe)*(ke+1),He=pH.find((ee=>ee.level>=Me))??xe(pH),ye=Math.min(Math.floor(He.maxDpbMbs/(ee*ie)),16);de=ye,We=ye}else de=0,We=0}return Pe(null!==We),{emulationUnpreventedBytes:ie,profileIdc:ye,constraintFlags:be,levelIdc:Me,frameMbsOnlyFlag:Xe,chromaFormatIdc:Ke,bitDepthLumaMinus8:Ue,bitDepthChromaMinus8:Fe,codedWidth:qe,codedHeight:fe,displayWidth:Te,displayHeight:pe,pixelAspectRatio:Oe,colourPrimaries:ze,matrixCoefficients:Ee,transferCharacteristics:Be,fullRangeFlag:ge,numReorderFrames:de,maxDecFrameBuffering:We,vuiParametersFlagBitOffset:we,bitstreamRestrictionFlagBitOffset:te,bitstreamRestrictionFlag:Ze}}catch(ie){return di._error("Error parsing AVC SPS:",ie),null}},Li=ee=>{const ie=Ce(ee);ee.skipBits(4),ee.skipBits(4);for(let He=0;He<=ie;He++)Ce(ee),Ce(ee),ee.skipBits(1);ee.skipBits(5),ee.skipBits(5),ee.skipBits(5),ee.skipBits(5)},Ci=ee=>ee>>1&63,vi=ee=>{try{const ie=[],He=[],ye=[],be=[];for(const Fe of Pi(ee)){const Me=ee.subarray(Fe.offset,Fe.offset+Fe.length),Ke=Ci(Me[0]);Ke===Di.VPS_NUT?ie.push(Me):Ke===Di.SPS_NUT?He.push(Me):Ke===Di.PPS_NUT?ye.push(Me):Ke!==Di.PREFIX_SEI_NUT&&Ke!==Di.SUFFIX_SEI_NUT||be.push(Me)}if(0===He.length||0===ye.length)return null;const Me=(ee=>{try{const ie=new fi(Yi(ee));ie.skipBits(16),ie.readBits(4);const He=ie.readBits(3),ye=ie.readBits(1),{general_profile_space:be,general_tier_flag:Me,general_profile_idc:Ke,general_profile_compatibility_flags:Ue,general_constraint_indicator_flags:Fe,general_level_idc:Je}=ui(ie,He);Ce(ie);const oe=Ce(ie);let Re=0;3===oe&&(Re=ie.readBits(1));const ke=Ce(ie),qe=Ce(ie);let fe=ke,Te=qe;if(ie.readBits(1)){const ee=Ce(ie),He=Ce(ie),ye=Ce(ie),be=Ce(ie);let Me=1,Ke=1;const Ue=0===Re?oe:0;1===Ue?(Me=2,Ke=2):2===Ue&&(Me=2,Ke=1),fe-=(ee+He)*Me,Te-=(ye+be)*Ke}const pe=Ce(ie),Xe=Ce(ie);Ce(ie);const ze=ie.readBits(1);let Be=0;for(let ee=ze?0:He;ee<=He;ee++)Ce(ie),Be=Ce(ie),Ce(ie);Ce(ie),Ce(ie),Ce(ie),Ce(ie),Ce(ie),Ce(ie),ie.readBits(1)&&ie.readBits(1)&&mi(ie),ie.skipBits(1),ie.skipBits(1),ie.readBits(1)&&(ie.skipBits(4),ie.skipBits(4),Ce(ie),Ce(ie),ie.skipBits(1));const Ee=Ce(ie);if(li(ie,Ee),ie.readBits(1)){const ee=Ce(ie);for(let He=0;He<ee;He++)Ce(ie),ie.skipBits(1)}ie.skipBits(1),ie.skipBits(1);let ge=2,Oe=2,de=2,We=0,te=0,Ze={num:1,den:1};if(ie.readBits(1)){const ee=ni(ie,He);Ze=ee.pixelAspectRatio,ge=ee.colourPrimaries,Oe=ee.transferCharacteristics,de=ee.matrixCoefficients,We=ee.fullRangeFlag,te=ee.minSpatialSegmentationIdc}return{displayWidth:fe,displayHeight:Te,pixelAspectRatio:Ze,colourPrimaries:ge,transferCharacteristics:Oe,matrixCoefficients:de,fullRangeFlag:We,maxDecFrameBuffering:Be+1,spsMaxSubLayersMinus1:He,spsTemporalIdNestingFlag:ye,generalProfileSpace:be,generalTierFlag:Me,generalProfileIdc:Ke,generalProfileCompatibilityFlags:Ue,generalConstraintIndicatorFlags:Fe,generalLevelIdc:Je,chromaFormatIdc:oe,bitDepthLumaMinus8:pe,bitDepthChromaMinus8:Xe,minSpatialSegmentationIdc:te}}catch(ie){return di._error("Error parsing HEVC SPS:",ie),null}})(He[0]);if(!Me)return null;let Ke=0;if(ye.length>0){const ee=ye[0],ie=new fi(Yi(ee));ie.skipBits(16),Ce(ie),Ce(ie),ie.skipBits(1),ie.skipBits(1),ie.skipBits(3),ie.skipBits(1),ie.skipBits(1),Ce(ie),Ce(ie),ve(ie),ie.skipBits(1),ie.skipBits(1),ie.readBits(1)&&Ce(ie),ve(ie),ve(ie),ie.skipBits(1),ie.skipBits(1),ie.skipBits(1),ie.skipBits(1);const He=ie.readBits(1),be=ie.readBits(1);Ke=He||be?He&&!be?2:!He&&be?3:0:0}const Ue=[...ie.length?[{arrayCompleteness:1,nalUnitType:Di.VPS_NUT,nalUnits:ie}]:[],...He.length?[{arrayCompleteness:1,nalUnitType:Di.SPS_NUT,nalUnits:He}]:[],...ye.length?[{arrayCompleteness:1,nalUnitType:Di.PPS_NUT,nalUnits:ye}]:[],...be.length?[{arrayCompleteness:1,nalUnitType:Ci(be[0][0]),nalUnits:be}]:[]];return{configurationVersion:1,generalProfileSpace:Me.generalProfileSpace,generalTierFlag:Me.generalTierFlag,generalProfileIdc:Me.generalProfileIdc,generalProfileCompatibilityFlags:Me.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:Me.generalConstraintIndicatorFlags,generalLevelIdc:Me.generalLevelIdc,minSpatialSegmentationIdc:Me.minSpatialSegmentationIdc,parallelismType:Ke,chromaFormatIdc:Me.chromaFormatIdc,bitDepthLumaMinus8:Me.bitDepthLumaMinus8,bitDepthChromaMinus8:Me.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:Me.spsMaxSubLayersMinus1+1,temporalIdNested:Me.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:Ue}}catch(ie){return di._error("Error building HEVC Decoder Configuration Record:",ie),null}},ui=(ee,ie)=>{const He=ee.readBits(2),ye=ee.readBits(1),be=ee.readBits(5);let Me=0;for(let oe=0;oe<32;oe++)Me=Me<<1|ee.readBits(1);const Ke=new Uint8Array(6);for(let oe=0;oe<6;oe++)Ke[oe]=ee.readBits(8);const Ue=ee.readBits(8),Fe=[],Je=[];for(let oe=0;oe<ie;oe++)Fe.push(ee.readBits(1)),Je.push(ee.readBits(1));if(ie>0)for(let oe=ie;oe<8;oe++)ee.skipBits(2);for(let oe=0;oe<ie;oe++)Fe[oe]&&ee.skipBits(88),Je[oe]&&ee.skipBits(8);return{general_profile_space:He,general_tier_flag:ye,general_profile_idc:be,general_profile_compatibility_flags:Me,general_constraint_indicator_flags:Ke,general_level_idc:Ue}},mi=ee=>{for(let ie=0;ie<4;ie++)for(let He=0;He<(3===ie?2:6);He++){if(ee.readBits(1)){const He=Math.min(64,1<<4+(ie<<1));ie>1&&ve(ee);for(let ie=0;ie<He;ie++)ve(ee)}else Ce(ee)}},li=(ee,ie)=>{const He=[];for(let ye=0;ye<ie;ye++)He[ye]=Si(ee,ye,ie,He)},Si=(ee,ie,He,ye)=>{let be=0,Me=0,Ke=0;if(0!==ie&&(Me=ee.readBits(1)),Me){if(ie===He){Ke=ie-(Ce(ee)+1)}else Ke=ie-1;ee.readBits(1),Ce(ee);const Me=ye[Ke]??0;for(let ie=0;ie<=Me;ie++){ee.readBits(1)||ee.readBits(1)}be=ye[Ke]}else{const ie=Ce(ee),He=Ce(ee);for(let ye=0;ye<ie;ye++)Ce(ee),ee.readBits(1);for(let ye=0;ye<He;ye++)Ce(ee),ee.readBits(1);be=ie+He}return be},ni=(ee,ie)=>{let He=2,ye=2,be=2,Me=0,Ke=0,Ue={num:1,den:1};if(ee.readBits(1)){const ie=ee.readBits(8);if(255===ie)Ue={num:ee.readBits(16),den:ee.readBits(16)};else{const ee=ci[ie];ee&&(Ue=ee)}}return ee.readBits(1)&&ee.readBits(1),ee.readBits(1)&&(ee.readBits(3),Me=ee.readBits(1),ee.readBits(1)&&(He=ee.readBits(8),ye=ee.readBits(8),be=ee.readBits(8))),ee.readBits(1)&&(Ce(ee),Ce(ee)),ee.readBits(1),ee.readBits(1),ee.readBits(1),ee.readBits(1)&&(Ce(ee),Ce(ee),Ce(ee),Ce(ee)),ee.readBits(1)&&(ee.readBits(32),ee.readBits(32),ee.readBits(1)&&Ce(ee),ee.readBits(1)&&ji(ee,!0,ie)),ee.readBits(1)&&(ee.readBits(1),ee.readBits(1),ee.readBits(1),Ke=Ce(ee),Ce(ee),Ce(ee),Ce(ee),Ce(ee)),{pixelAspectRatio:Ue,colourPrimaries:He,transferCharacteristics:ye,matrixCoefficients:be,fullRangeFlag:Me,minSpatialSegmentationIdc:Ke}},ji=(ee,ie,He)=>{let ye=!1,be=!1,Me=!1;ie&&(ye=1===ee.readBits(1),be=1===ee.readBits(1),(ye||be)&&(Me=1===ee.readBits(1),Me&&(ee.readBits(8),ee.readBits(5),ee.readBits(1),ee.readBits(5)),ee.readBits(4),ee.readBits(4),Me&&ee.readBits(4),ee.readBits(5),ee.readBits(5),ee.readBits(5)));for(let Ke=0;Ke<=He;Ke++){let ie=!0;1===ee.readBits(1)||(ie=1===ee.readBits(1));let He=!1;ie?Ce(ee):He=1===ee.readBits(1);let Ke=1;if(!He){Ke=Ce(ee)+1}ye&&si(ee,Ke,Me),be&&si(ee,Ke,Me)}},si=(ee,ie,He)=>{for(let ye=0;ye<ie;ye++)Ce(ee),Ce(ee),He&&(Ce(ee),Ce(ee)),ee.readBits(1)};var Ii;!function(ee){ee[ee.audAllowed=0]="audAllowed",ee[ee.beforeFirstVcl=1]="beforeFirstVcl",ee[ee.afterFirstVcl=2]="afterFirstVcl",ee[ee.eoBitstreamAllowed=3]="eoBitstreamAllowed",ee[ee.noMoreDataAllowed=4]="noMoreDataAllowed"}(Ii||(Ii={}));const Ni=ee=>{const ie=me(ee),He=ie.getUint8(9),ye=ie.getUint16(10,!0),be=ie.getUint32(12,!0),Me=ie.getInt16(16,!0),Ke=ie.getUint8(18);let Ue=null;return Ke&&(Ue=ee.subarray(19,21+He)),{outputChannelCount:He,preSkip:ye,inputSampleRate:be,outputGain:Me,channelMappingFamily:Ke,channelMappingTable:Ue}};var Gi;!function(ee){ee[ee.STREAMINFO=0]="STREAMINFO",ee[ee.VORBIS_COMMENT=4]="VORBIS_COMMENT",ee[ee.PICTURE=6]="PICTURE"}(Gi||(Gi={}));new Uint8Array([5,4,65,67,45,51]),new Uint8Array([5,4,69,65,67,51]);const ri=[1,2,3,6],Qi=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],eH=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],iH=[16,16,20,20,0,24,24,0],HH=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],yH=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],bH=[32e3,44100,48e3,0],MH=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],KH=[512,1024,2048,4096],UH=ee=>{const ie=FH(ee),He=me(ee);let ye=ie?4*Math.ceil(ie.frameSize/4):0,be=null;for(;ye+4<=ee.length&&1683496997===He.getUint32(ye);){const ie=JH(ee.subarray(ye));if(!ie)break;be??=ie,ye+=ie.frameSize}if(ie)return{frameSize:be?ye:ie.frameSize,sampleRate:ie.sampleRate,numberOfChannels:ie.numberOfChannels,sampleCount:ie.sampleCount,channelLayout:ie.channelLayout,pcmResolution:ie.pcmResolution,bitRate:ie.bitRate,core:ie,hasExtensions:null!==be};if(!be?.asset)return null;const{asset:Me}=be;return{frameSize:ye,sampleRate:Me.sampleRate,numberOfChannels:Me.numberOfChannels,sampleCount:Me.sampleCount,channelLayout:Me.channelLayout,pcmResolution:Me.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},FH=ee=>{if(ee.length<18)return null;if(127!==ee[0]||254!==ee[1]||128!==ee[2]||1!==ee[3])return null;const ie=new fi(ee);if(ie.skipBits(32),ie.skipBits(1),31!==ie.readBits(5))return null;const He=ie.readBits(1),ye=ie.readBits(7)+1;if(ye%8!==0)return null;const be=ie.readBits(14)+1;if(be<96)return null;const Me=ie.readBits(6);if(Me>=HH.length)return null;const Ke=Qi[ie.readBits(4)];if(0===Ke)return null;const Ue=eH[ie.readBits(5)];if(0!==ie.readBits(1))return null;ie.skipBits(4),ie.skipBits(5);const Fe=ie.readBits(2);if(3===Fe)return null;ie.skipBits(1),He&&ie.skipBits(16),ie.skipBits(7);const Je=iH[ie.readBits(3)];if(0===Je)return null;const oe=0!==Fe;return{frameSize:be,sampleRate:Ke,numberOfChannels:HH[Me]+(oe?1:0),sampleCount:32*ye,channelLayout:yH[Me]|(oe?8:0),amode:Me,lfePresent:oe,bitRate:Ue,pcmResolution:Je}},JH=ee=>{if(ee.length<10)return null;if(100!==ee[0]||88!==ee[1]||32!==ee[2]||37!==ee[3])return null;const ie=new fi(ee);ie.skipBits(32),ie.skipBits(8);const He=ie.readBits(2),ye=ie.readBits(1),be=8+4*ye,Me=16+4*ye;ie.skipBits(be);const Ke=ie.readBits(Me)+1,Ue={frameSize:Ke,asset:null};if(!ie.readBits(1))return Ue;const Fe=bH[ie.readBits(2)],Je=512*(ie.readBits(3)+1);ie.readBits(1)&&ie.skipBits(36);const oe=ie.readBits(3)+1,Re=ie.readBits(3)+1,ke=[];for(let Xe=0;Xe<oe;Xe++)ke.push(ie.readBits(He+1));for(const Xe of ke)ie.skipBits(8*ii(Xe));if(ie.readBits(1)){ie.skipBits(2);const ee=ie.readBits(2)+1<<2,He=ie.readBits(2)+1;ie.skipBits(He*ee)}for(let Xe=0;Xe<Re;Xe++)ie.skipBits(Me);ie.skipBits(9),ie.skipBits(3),ie.readBits(1)&&ie.skipBits(4),ie.readBits(1)&&ie.skipBits(24),ie.readBits(1)&&ie.skipBits(8*(ie.readBits(10)+1));const qe=ie.readBits(5)+1,fe=MH[ie.readBits(4)],Te=ie.readBits(8)+1;let pe=0;if(ie.readBits(1)&&(Te>2&&ie.skipBits(1),Te>6&&ie.skipBits(1),ie.readBits(1))){const ee=ie.readBits(2)+1<<2;pe=ie.readBits(ee)}return 0===Fe||ie.getBitsLeft()<0?Ue:{frameSize:Ke,asset:{sampleRate:fe,numberOfChannels:Te,sampleCount:Math.round(Je*fe/Fe),channelLayout:pe,pcmResolution:qe}}},oH=ee=>{const ie=new Uint8Array(20),He=me(ie);He.setUint32(0,ee.sampleRate),He.setUint32(4,ee.bitRate),He.setUint32(8,ee.bitRate),ie[12]=ee.pcmResolution;const ye=ee.core&&!ee.hasExtensions?1:0,be=new fi(ie);return be.seekToByte(13),be.writeBits(2,Math.max(KH.indexOf(ee.sampleCount),0)),be.writeBits(5,ye),be.writeBits(1,ee.core?.lfePresent?1:0),be.writeBits(6,ee.core?.amode??0),be.writeBits(14,ee.core?ee.core.frameSize-1:0),be.writeBits(1,0),be.writeBits(3,0),be.writeBits(16,ee.channelLayout),be.writeBits(1,0),be.writeBits(1,0),be.writeBits(1,0),be.writeBits(5,0),ie},RH=["avc","hevc","vp9","av1","vp8","prores"],kH=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],qH=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],fH=[...qH,...kH],TH=["webvtt"],pH=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],XH=["ap4x","ap4h","apch","apcn","apcs","apco"],zH=["dtsc","dtsh","dtsl","dtse"],BH=ee=>{const ie=ee.split("."),He=Number(ie[1]),ye=ie[2],be=(He<<5)+Number(ye.slice(0,-1)),Me="H"===ye.slice(-1)?1:0,Ke=Number(ie[3]);return[129,be,(Me<<7)+((8===Ke?0:1)<<6)+((12===Ke?1:0)<<5)+((ie[4]?Number(ie[4]):0)<<4)+((ie[5]?Number(ie[5][0]):1)<<3)+((ie[5]?Number(ie[5][1]):1)<<2)+(ie[5]?Number(ie[5][2]):0),0]},EH=/^pcm-([usf])(\\d+)(be)?$/,gH=ee=>{if(Pe(kH.includes(ee)),"ulaw"===ee)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===ee)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const ie=EH.exec(ee);let He;Pe(ie),He="u"===ie[1]?"unsigned":"s"===ie[1]?"signed":"float";return{dataType:He,sampleSize:Number(ie[2])/8,littleEndian:"be"!==ie[3],silentValue:"pcm-u8"===ee?128:0}},OH=ee=>ee.startsWith("avc1")||ee.startsWith("avc3")?"avc":ee.startsWith("hev1")||ee.startsWith("hvc1")?"hevc":"vp8"===ee?"vp8":ee.startsWith("vp09")?"vp9":ee.startsWith("av01")?"av1":XH.includes(ee)?"prores":"mp3"===ee||"mp4a.69"===ee||"mp4a.6B"===ee||"mp4a.6b"===ee||"mp4a.40.34"===ee?"mp3":ee.startsWith("mp4a.40.")||"mp4a.67"===ee?"aac":"opus"===ee||"Opus"===ee?"opus":"vorbis"===ee?"vorbis":"flac"===ee?"flac":"ac-3"===ee||"ac3"===ee?"ac3":"ec-3"===ee||"eac3"===ee?"eac3":zH.includes(ee)?"dts":"ulaw"===ee?"ulaw":"alaw"===ee?"alaw":EH.test(ee)?ee:"webvtt"===ee?"webvtt":null,dH=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...XH],WH=/^(avc1|avc3)\\.[0-9a-fA-F]{6}$/,tH=/^(hev1|hvc1)\\.(?:[ABC]?\\d+)\\.[0-9a-fA-F]{1,8}\\.[LH]\\d+(?:\\.[0-9a-fA-F]{1,2}){0,6}$/,ZH=/^vp09(?:\\.\\d{2}){3}(?:(?:\\.\\d{2}){5})?$/,wH=/^av01\\.\\d\\.\\d{2}[MH]\\.\\d{2}(?:\\.\\d\\.\\d{3}\\.\\d{2}\\.\\d{2}\\.\\d{2}\\.\\d)?$/,DH=(ee,ie)=>{if(!ee)throw new TypeError("Video chunk metadata must be provided.");if("object"!==typeof ee)throw new TypeError("Video chunk metadata must be an object.");if(!ee.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!==typeof ee.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!==typeof ee.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!dH.some((ie=>ee.decoderConfig.codec.startsWith(ie))))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(ee.decoderConfig.codedWidth)||ee.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(ee.decoderConfig.codedHeight)||ee.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==ee.decoderConfig.displayAspectWidth&&(!Number.isInteger(ee.decoderConfig.displayAspectWidth)||ee.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(void 0!==ee.decoderConfig.displayAspectHeight&&(!Number.isInteger(ee.decoderConfig.displayAspectHeight)||ee.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(void 0!==ee.decoderConfig.displayAspectWidth!==(void 0!==ee.decoderConfig.displayAspectHeight))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(void 0!==ee.decoderConfig.description&&!he(ee.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==ee.decoderConfig.colorSpace){const{colorSpace:ie}=ee.decoderConfig;if("object"!==typeof ie)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const He=Object.keys(ne);if(null!=ie.primaries&&!He.includes(ie.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${He.join(", ")}.`);const ye=Object.keys(je);if(null!=ie.transfer&&!ye.includes(ie.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${ye.join(", ")}.`);const be=Object.keys(se);if(null!=ie.matrix&&!be.includes(ie.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${be.join(", ")}.`);if(null!=ie.fullRange&&"boolean"!==typeof ie.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(ee.decoderConfig.codec.startsWith("avc1")||ee.decoderConfig.codec.startsWith("avc3")){if(!WH.test(ee.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(ee.decoderConfig.codec.startsWith("hev1")||ee.decoderConfig.codec.startsWith("hvc1")){if(!tH.test(ee.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(ee.decoderConfig.codec.startsWith("vp8")){if("vp8"!==ee.decoderConfig.codec)throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP8 must be "vp8".\')}else if(ee.decoderConfig.codec.startsWith("vp09")){if(!ZH.test(ee.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.\')}else if(ee.decoderConfig.codec.startsWith("av01")){if(!wH.test(ee.decoderConfig.codec))throw new TypeError(\'Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.\')}else if(XH.some((ie=>ee.decoderConfig.codec.startsWith(ie)))&&!XH.some((ie=>ee.decoderConfig.codec===ie)))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${XH.join(", ")}.`);if(null!==ie&&OH(ee.decoderConfig.codec)!==ie)throw new TypeError(`Video chunk metadata decoder configuration codec string \'${ee.decoderConfig.codec}\' does not fit to the track codec \'${ie}\'.`)},PH=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],AH=(ee,ie)=>{if(!ee)throw new TypeError("Audio chunk metadata must be provided.");if("object"!==typeof ee)throw new TypeError("Audio chunk metadata must be an object.");if(!ee.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!==typeof ee.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!==typeof ee.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!PH.some((ie=>ee.decoderConfig.codec.startsWith(ie))))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(ee.decoderConfig.sampleRate)||ee.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(ee.decoderConfig.numberOfChannels)||ee.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==ee.decoderConfig.description&&!he(ee.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(ee.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==ee.decoderConfig.codec&&"mp4a.6B"!==ee.decoderConfig.codec&&"mp4a.6b"!==ee.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(ee.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(ee.decoderConfig.codec.startsWith("mp3")||ee.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==ee.decoderConfig.codec&&"mp4a.69"!==ee.decoderConfig.codec&&"mp4a.6B"!==ee.decoderConfig.codec&&"mp4a.6b"!==ee.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".\')}else if(ee.decoderConfig.codec.startsWith("opus")){if("opus"!==ee.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Opus must be "opus".\');if(ee.decoderConfig.description&&ee.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(ee.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==ee.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".\');if(!ee.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(ee.decoderConfig.codec.startsWith("flac")){if("flac"!==ee.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for FLAC must be "flac".\');const ie=42;if(!ee.decoderConfig.description||ee.decoderConfig.description.byteLength<ie)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(ee.decoderConfig.codec.startsWith("ac-3")||ee.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==ee.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".\')}else if(ee.decoderConfig.codec.startsWith("ec-3")||ee.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==ee.decoderConfig.codec)throw new TypeError(\'Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".\')}else if(ee.decoderConfig.codec.startsWith("dts")){if(!zH.includes(ee.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${zH.join(", ")}.`)}else if((ee.decoderConfig.codec.startsWith("pcm")||ee.decoderConfig.codec.startsWith("ulaw")||ee.decoderConfig.codec.startsWith("alaw"))&&!kH.includes(ee.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${kH.join(", ")}).`);if(null!==ie&&OH(ee.decoderConfig.codec)!==ie)throw new TypeError(`Audio chunk metadata decoder configuration codec string \'${ee.decoderConfig.codec}\' does not fit to the track codec \'${ie}\'.`)},YH=ee=>{if(!ee)throw new TypeError("Subtitle metadata must be provided.");if("object"!==typeof ee)throw new TypeError("Subtitle metadata must be an object.");if(!ee.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!==typeof ee.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!==typeof ee.config.description)throw new TypeError("Subtitle metadata config description must be a string.")};var VH;!function(ee){ee[ee.FrameCount=1]="FrameCount",ee[ee.FileSize=2]="FileSize",ee[ee.Toc=4]="Toc"}(VH||(VH={}));class aH{constructor(ee,ie,He,ye,be){this.bytes=ee,this.view=ie,this.offset=He,this.start=ye,this.end=be,this.bufferPos=ye-He}static tempFromBytes(ee){return new aH(ee,me(ee),0,0,ee.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(ee){this.bufferPos=ee-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(ee){this.bufferPos+=ee}slice(ee){let ie=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end-ee;if(ee<this.start||ee+ie>this.end)throw new RangeError("Slicing outside of original slice.");return new aH(this.bytes,this.view,this.offset,ee,ee+ie)}}const cH=(ee,ie)=>{if(ee.filePos<ee.start||ee.filePos+ie>ee.end)throw new RangeError(`Tried reading [${ee.filePos}, ${ee.filePos+ie}), but slice is [${ee.start}, ${ee.end}). This is likely an internal error, please report it alongside the file that caused it.`)},xH=(ee,ie)=>{cH(ee,ie);const He=ee.bytes.subarray(ee.bufferPos,ee.bufferPos+ie);return ee.bufferPos+=ie,He};var LH,CH;!function(ee){ee[ee.Unsynchronisation=128]="Unsynchronisation",ee[ee.ExtendedHeader=64]="ExtendedHeader",ee[ee.ExperimentalIndicator=32]="ExperimentalIndicator",ee[ee.Footer=16]="Footer"}(LH||(LH={})),function(ee){ee[ee.ISO_8859_1=0]="ISO_8859_1",ee[ee.UTF_16_WITH_BOM=1]="UTF_16_WITH_BOM",ee[ee.UTF_16_BE_NO_BOM=2]="UTF_16_BE_NO_BOM",ee[ee.UTF_8=3]="UTF_8"}(CH||(CH={}));class vH{constructor(ee){this.mutex=new Ne,this.trackTimestampInfo=new WeakMap,this.output=ee}onTrackClose(ee){}validateTimestamp(ee,ie,He){let ye=this.trackTimestampInfo.get(ee);if(ye){if(He&&(ye.maxTimestampBeforeLastKeyPacket=ye.maxTimestamp),null!==ye.maxTimestampBeforeLastKeyPacket&&ie<ye.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${ie}s, but largest timestamp is ${ye.maxTimestampBeforeLastKeyPacket}s.`);ye.maxTimestamp=Math.max(ye.maxTimestamp,ie)}else{if(!He)throw new Error("First packet must be a key packet.");ye={maxTimestamp:ie,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(ee,ye)}}}const uH=/<(?:(\\d{2}):)?(\\d{2}):(\\d{2}).(\\d{3})>/g;const mH=ee=>{const ie=Math.floor(ee/36e5),He=Math.floor(ee%36e5/6e4),ye=Math.floor(ee%6e4/1e3),be=ee%1e3;return ie.toString().padStart(2,"0")+":"+He.toString().padStart(2,"0")+":"+ye.toString().padStart(2,"0")+"."+be.toString().padStart(3,"0")};class lH{constructor(ee){this.writer=ee,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(ee){this.helperView.setUint32(0,ee,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(ee){this.helperView.setUint32(0,Math.floor(ee/2**32),!1),this.helperView.setUint32(4,ee,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(ee){for(let ie=0;ie<ee.length;ie++)this.helperView.setUint8(ie%8,ee.charCodeAt(ie)),ie%8===7&&this.writer.write(this.helper);ee.length%8!==0&&this.writer.write(this.helper.subarray(0,ee.length%8))}writeBox(ee){if(this.offsets.set(ee,this.writer.getPos()),ee.contents&&!ee.children)this.writeBoxHeader(ee,ee.size??ee.contents.byteLength+8),this.writer.write(ee.contents);else{const ie=this.writer.getPos();if(this.writeBoxHeader(ee,0),ee.contents&&this.writer.write(ee.contents),ee.children)for(const be of ee.children)be&&this.writeBox(be);const He=this.writer.getPos(),ye=ee.size??He-ie;this.writer.seek(ie),this.writeBoxHeader(ee,ye),this.writer.seek(He)}}writeBoxHeader(ee,ie){this.writeU32(ee.largeSize?1:ie),this.writeAscii(ee.type),ee.largeSize&&this.writeU64(ie)}measureBoxHeader(ee){return 8+(ee.largeSize?8:0)}patchBox(ee){const ie=this.offsets.get(ee);Pe(void 0!==ie);const He=this.writer.getPos();this.writer.seek(ie),this.writeBox(ee),this.writer.seek(He)}measureBox(ee){if(ee.contents&&!ee.children){return this.measureBoxHeader(ee)+ee.contents.byteLength}{let ie=this.measureBoxHeader(ee);if(ee.contents&&(ie+=ee.contents.byteLength),ee.children)for(const He of ee.children)He&&(ie+=this.measureBox(He));return ie}}}const SH=new Uint8Array(8),nH=new DataView(SH.buffer),jH=ee=>[(ee%256+256)%256],sH=ee=>(nH.setUint16(0,ee,!1),[SH[0],SH[1]]),IH=ee=>(nH.setInt16(0,ee,!1),[SH[0],SH[1]]),hH=ee=>(nH.setUint32(0,ee,!1),[SH[1],SH[2],SH[3]]),NH=ee=>(nH.setUint32(0,ee,!1),[SH[0],SH[1],SH[2],SH[3]]),GH=ee=>(nH.setInt32(0,ee,!1),[SH[0],SH[1],SH[2],SH[3]]),rH=ee=>(nH.setUint32(0,Math.floor(ee/2**32),!1),nH.setUint32(4,ee,!1),[SH[0],SH[1],SH[2],SH[3],SH[4],SH[5],SH[6],SH[7]]),QH=ee=>(nH.setInt32(0,Math.floor(ee/2**32),!1),nH.setUint32(4,ee,!1),[SH[0],SH[1],SH[2],SH[3],SH[4],SH[5],SH[6],SH[7]]),ey=ee=>(nH.setInt16(0,256*ee,!1),[SH[0],SH[1]]),iy=ee=>(nH.setInt32(0,65536*ee,!1),[SH[0],SH[1],SH[2],SH[3]]),Hy=ee=>(nH.setInt32(0,2**30*ee,!1),[SH[0],SH[1],SH[2],SH[3]]),yy=(ee,ie)=>{const He=[];let ye=ee;do{let ee=127&ye;ye>>=7,He.length>0&&(ee|=128),He.push(ee),void 0!==ie&&ie--}while(ye>0||ie);return He.reverse()},by=function(ee){let ie=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const He=Array(ee.length).fill(null).map(((ie,He)=>ee.charCodeAt(He)));return ie&&He.push(0),He},My=ee=>[iy(ee[0]),iy(ee[1]),Hy(ee[2]),iy(ee[3]),iy(ee[4]),Hy(ee[5]),iy(ee[6]),iy(ee[7]),Hy(ee[8])],Ky=(ee,ie,He)=>({type:ee,contents:ie&&new Uint8Array(ie.flat(10)),children:He}),Uy=(ee,ie,He,ye,be)=>Ky(ee,[jH(ie),hH(He),ye??[]],be),Fy=()=>Ky("styp",[by("iso5"),NH(0),by("iso5"),by("iso6"),by("mp41"),by("cmfc"),by("dash")]),Jy=(ee,ie)=>{const He=Math.max(0,ee.minWrittenTimestamp);let ye=Math.max(0,ee.maxWrittenEndTimestamp-He);return Number.isFinite(ye)||(ye=0),Uy("sidx",1,0,[NH(1),NH(vb),rH(mb(He,vb)),rH(0),sH(0),sH(1),NH(2147483647&ie),NH(mb(ye,vb)),NH(0)])},oy=ee=>({type:"mdat",largeSize:ee}),Ry=ee=>Ky("moov",void 0,[ky(ee.creationTime,ee.trackDatas),...ee.trackDatas.map((ie=>qy(ie,ee.creationTime))),ee.isFragmented?eb(ee.trackDatas):null,fb(ee)]),ky=(ee,ie)=>{const He=Math.max(0,...ie.map((ee=>Math.max(0,mb(lb(ee),vb)+mb(ee.startTimestampOffset??0,vb))))),ye=Math.max(0,...ie.map((ee=>ee.track.id)))+1,be=!Le(ee)||!Le(He),Me=be?rH:NH;return Uy("mvhd",+be,0,[Me(ee),Me(ee),NH(vb),Me(He),iy(1),ey(1),Array(10).fill(0),My(Ye),Array(24).fill(0),NH(ye)])},qy=(ee,ie)=>{const He=ub(ee),ye=null!==ee.startTimestampOffset&&0!==ee.startTimestampOffset;return Ky("trak",void 0,[fy(ee,ie),ye?Ty(ee):null,py(ee,ie),void 0!==He.name?Ky("udta",void 0,[Ky("name",[...Se.encode(He.name)])]):null])},fy=(ee,ie)=>{const He=Math.max(0,mb(lb(ee),vb)+mb(ee.startTimestampOffset??0,vb)),ye=!Le(ie)||!Le(He),be=ye?rH:NH;let Me;if("video"===ee.type&&ee.track.metadata.transformationMatrix)Me=ee.track.metadata.transformationMatrix;else if("video"===ee.type){const{rotation:ie,flip:He}=ee.track.metadata;Me=((ee,ie,He)=>{const[ye,be,,Me,Ke]=ee,Ue=Math.abs(ye)*ie+Math.abs(Me)*He,Fe=Math.abs(be)*ie+Math.abs(Ke)*He;return ce(ce(ae(-ie/2,-He/2),ee),ae(Ue/2,Fe/2))})(ce(Ve(ie??0),[He?-1:1,0,0,0,1,0,0,0,1]),ee.info.width,ee.info.height)}else Me=Ye;let Ke=2;!1!==ee.track.metadata.disposition?.default&&(Ke|=1);const Ue="video"===ee.type?0:"audio"===ee.type?1:"subtitle"===ee.type?2:re(ee);return Uy("tkhd",+ye,Ke,[be(ie),be(ie),NH(ee.track.id),NH(0),be(He),Array(8).fill(0),sH(0),sH(Ue),ey("audio"===ee.type?1:0),sH(0),My(Me),iy("video"===ee.type?ee.info.width:0),iy("video"===ee.type?ee.info.height:0)])},Ty=ee=>{const ie=ee.startTimestampOffset;if(Pe(null!==ie),ie>0){const He=mb(ie,vb),ye=mb(lb(ee),vb),be=!Le(He)||!Le(ye),Me=be?rH:NH,Ke=be?QH:GH;return Ky("edts",void 0,[Uy("elst",be?1:0,0,[NH(2),Me(He),Ke(-1),iy(1),Me(ye),Ke(0),iy(1)])])}{const ye=mb(-ie,ee.timescale),be=Math.max(0,mb(lb(ee),vb)+mb(ie,vb)),Me=!((He=ye)>=-(2**31)&&He<2**31)||!Le(be),Ke=Me?rH:NH,Ue=Me?QH:GH;return Ky("edts",void 0,[Uy("elst",Me?1:0,0,[NH(1),Ke(be),Ue(ye),iy(1)])])}var He},py=(ee,ie)=>Ky("mdia",void 0,[Xy(ee,ie),Ey(!0,zy[ee.type],By[ee.type]),gy(ee)]),Xy=(ee,ie)=>{const He=mb(lb(ee),ee.timescale),ye=!Le(ie)||!Le(He),be=ye?rH:NH;return Uy("mdhd",+ye,0,[be(ie),be(ie),NH(ee.timescale),be(He),sH(Db(ee.track.metadata.languageCode??ei)),sH(0)])},zy={video:"vide",audio:"soun",subtitle:"text"},By={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Ey=function(ee,ie,He){let ye=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\\0\\0\\0\\0";return Uy("hdlr",0,0,[ee?by("mhlr"):NH(0),by(ie),by(ye),NH(0),NH(0),by(He,!0)])},gy=ee=>Ky("minf",void 0,[Oy[ee.type](),dy(),Zy(ee)]),Oy={video:()=>Uy("vmhd",0,1,[sH(0),sH(0),sH(0),sH(0)]),audio:()=>Uy("smhd",0,0,[sH(0),sH(0)]),subtitle:()=>Uy("nmhd",0,0)},dy=()=>Ky("dinf",void 0,[Wy()]),Wy=()=>Uy("dref",0,0,[NH(1)],[ty()]),ty=()=>Uy("url ",0,1),Zy=ee=>{const ie=ee.compositionTimeOffsetTable.length>1||ee.compositionTimeOffsetTable.some((ee=>0!==ee.sampleCompositionTimeOffset));return Ky("stbl",void 0,[wy(ee),sy(ee),ie?ry(ee):null,ie?Qy(ee):null,hy(ee),Ny(ee),Gy(ee),Iy(ee)])},wy=ee=>{let ie;if("video"===ee.type)ie=Dy(Ob(ee.track.source._codec,ee.info.decoderConfig.codec),ee);else if("audio"===ee.type){const He=Wb(ee.track.source._codec,ee.info.decoderConfig.codec,ee.muxer.isQuickTime);Pe(He),ie=ay(He,ee)}else"subtitle"===ee.type&&(ie=jy(Zb[ee.track.source._codec],ee));return Pe(ie),Uy("stsd",0,0,[NH(1)],[ie])},Dy=(ee,ie)=>Ky(ee,[Array(6).fill(0),sH(1),sH(0),sH(0),Array(12).fill(0),sH(ie.info.width),sH(ie.info.height),NH(4718592),NH(4718592),NH(0),sH(1),jH(18),by(Zi),Array(13).fill(0),sH(ie.info.hasAlphaChannel?32:24),IH(65535)],[db[ie.track.source._codec]?.(ie)??null,Ay(ie),Ie(ie.info.decoderConfig.colorSpace)?null:Yy(ie),Py(ie)]),Py=ee=>0===ee.avgBitrate&&0===ee.maxBitrate?null:Ky("btrt",[NH(0),NH(ee.maxBitrate),NH(ee.avgBitrate)]),Ay=ee=>ee.info.pixelAspectRatio.num===ee.info.pixelAspectRatio.den?null:Ky("pasp",[NH(ee.info.pixelAspectRatio.num),NH(ee.info.pixelAspectRatio.den)]),Yy=ee=>{const ie=ee.info.decoderConfig.colorSpace;return Ky("colr",[by(ee.muxer.isQuickTime?"nclc":"nclx"),sH(null!=ie?.primaries?ne[ie.primaries]:2),sH(null!=ie?.transfer?je[ie.transfer]:2),sH(null!=ie?.matrix?se[ie.matrix]:2),ee.muxer.isQuickTime?[]:jH((ie?.fullRange?1:0)<<7)])},Vy=ee=>{if(!ee.info.decoderConfig)return null;const ie=ee.info.decoderConfig,He=ie.codec.split("."),ye=Number(He[1]),be=Number(He[2]),Me=(Number(He[3])<<4)+((He[4]?Number(He[4]):1)<<1)+(He[8]?Number(He[8]):Number(ie.colorSpace?.fullRange??0)),Ke=He[5]?Number(He[5]):ie.colorSpace?.primaries?ne[ie.colorSpace.primaries]:1,Ue=He[6]?Number(He[6]):ie.colorSpace?.transfer?je[ie.colorSpace.transfer]:1,Fe=He[7]?Number(He[7]):ie.colorSpace?.matrix?se[ie.colorSpace.matrix]:1;return Uy("vpcC",1,0,[jH(ye),jH(be),jH(Me),jH(Ke),jH(Ue),jH(Fe),sH(0)])},ay=(ee,ie)=>{let He,ye=0,be=16;const Me=kH.includes(ie.track.source._codec);if(Me){const ee=ie.track.source._codec,{sampleSize:He}=gH(ee);be=8*He,be>16&&(ye=1)}if(ie.muxer.isQuickTime&&(ye=1),0===ye)He=[Array(6).fill(0),sH(1),sH(ye),sH(0),NH(0),sH(ie.info.numberOfChannels),sH(be),sH(0),sH(0),sH(ie.info.sampleRate<65536?ie.info.sampleRate:0),sH(0)];else{const ee=Me?0:-2;He=[Array(6).fill(0),sH(1),sH(ye),sH(0),NH(0),sH(ie.info.numberOfChannels),sH(Math.min(be,16)),IH(ee),sH(0),sH(ie.info.sampleRate<65536?ie.info.sampleRate:0),sH(0),Me?[NH(1),NH(be/8),NH(ie.info.numberOfChannels*be/8)]:[NH(0),NH(0),NH(0)],NH(2)]}return Ky(ee,He,[tb(ie.track.source._codec,ie.muxer.isQuickTime)?.(ie)??null,Py(ie)])},cy=ee=>{let ie;switch(ee.track.source._codec){case"aac":ie=64;break;case"mp3":ie=107;break;case"vorbis":ie=221;break;default:throw new Error(`Unhandled audio codec: ${ee.track.source._codec}`)}let He=[...jH(ie),...jH(21),...hH(0),...NH(ee.maxBitrate),...NH(ee.avgBitrate)];if(ee.info.decoderConfig.description){const ie=ue(ee.info.decoderConfig.description);He=[...He,...jH(5),...yy(ie.byteLength),...ie]}return He=[...sH(1),...jH(0),...jH(4),...yy(He.length),...He,...jH(6),...jH(1),...jH(2)],He=[...jH(3),...yy(He.length),...He],Uy("esds",0,0,He)},xy=ee=>Ky("wave",void 0,[Ly(ee),Cy(ee),Ky("\\0\\0\\0\\0")]),Ly=ee=>Ky("frma",[by(Wb(ee.track.source._codec,ee.info.decoderConfig.codec,ee.muxer.isQuickTime))]),Cy=ee=>{const{littleEndian:ie}=gH(ee.track.source._codec);return Ky("enda",[sH(+ie)])},vy=ee=>{let ie=ee.info.numberOfChannels,He=3840,ye=ee.info.sampleRate,be=0,Me=0,Ke=new Uint8Array(0);const Ue=ee.info.decoderConfig?.description;if(Ue){Pe(Ue.byteLength>=18);const ee=ue(Ue),Fe=Ni(ee);ie=Fe.outputChannelCount,He=Fe.preSkip,ye=Fe.inputSampleRate,be=Fe.outputGain,Me=Fe.channelMappingFamily,Fe.channelMappingTable&&(Ke=Fe.channelMappingTable)}return Ky("dOps",[jH(0),jH(ie),sH(He),NH(ye),IH(be),jH(Me),...Ke])},uy=ee=>{const ie=ee.info.decoderConfig?.description;Pe(ie);const He=ue(ie);return Uy("dfLa",0,0,[...He.subarray(4)])},my=ee=>{const{littleEndian:ie,sampleSize:He}=gH(ee.track.source._codec);return Uy("pcmC",0,0,[jH(+ie),jH(8*He)])},ly=ee=>{Pe(ee.info.primingPacket);const ie=(ee=>{if(ee.length<7)return null;if(11!==ee[0]||119!==ee[1])return null;const ie=new fi(ee);ie.skipBits(16),ie.skipBits(16);const He=ie.readBits(2);if(3===He)return null;const ye=ie.readBits(6),be=ie.readBits(5);if(be>8)return null;const Me=ie.readBits(3),Ke=ie.readBits(3);return 0!==(1&Ke)&&1!==Ke&&ie.skipBits(2),0!==(4&Ke)&&ie.skipBits(2),2===Ke&&ie.skipBits(2),{fscod:He,bsid:be,bsmod:Me,acmod:Ke,lfeon:ie.readBits(1),bitRateCode:Math.floor(ye/2)}})(ee.info.primingPacket.data);if(!ie)throw new Error("Couldn\'t extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const He=new Uint8Array(3),ye=new fi(He);return ye.writeBits(2,ie.fscod),ye.writeBits(5,ie.bsid),ye.writeBits(3,ie.bsmod),ye.writeBits(3,ie.acmod),ye.writeBits(1,ie.lfeon),ye.writeBits(5,ie.bitRateCode),ye.writeBits(5,0),Ky("dac3",[...He])},Sy=ee=>{Pe(ee.info.primingPacket);const ie=(ee=>{if(ee.length<6)return null;if(11!==ee[0]||119!==ee[1])return null;const ie=new fi(ee);ie.skipBits(16);const He=ie.readBits(2);if(ie.skipBits(3),0!==He&&2!==He)return null;const ye=ie.readBits(11),be=ie.readBits(2);let Me,Ke=0;3===be?(Ke=ie.readBits(2),Me=3):Me=ie.readBits(2);const Ue=ie.readBits(3),Fe=ie.readBits(1),Je=ie.readBits(5);if(Je<11||Je>16)return null;const oe=ri[Me];let Re;return Re=be<3?Wi[be]/1e3:ti[Ke]/1e3,{dataRate:Math.round((ye+1)*Re/(16*oe)),substreams:[{fscod:be,fscod2:Ke,bsid:Je,bsmod:0,acmod:Ue,lfeon:Fe,numDepSub:0,chanLoc:0}]}})(ee.info.primingPacket.data);if(!ie)throw new Error("Couldn\'t extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let He=16;for(const Ke of ie.substreams)He+=23,Ke.numDepSub>0?He+=9:He+=1;const ye=Math.ceil(He/8),be=new Uint8Array(ye),Me=new fi(be);Me.writeBits(13,ie.dataRate),Me.writeBits(3,ie.substreams.length-1);for(const Ke of ie.substreams)Me.writeBits(2,Ke.fscod),Me.writeBits(5,Ke.bsid),Me.writeBits(1,0),Me.writeBits(1,0),Me.writeBits(3,Ke.bsmod),Me.writeBits(3,Ke.acmod),Me.writeBits(1,Ke.lfeon),Me.writeBits(3,0),Me.writeBits(4,Ke.numDepSub),Ke.numDepSub>0?Me.writeBits(9,Ke.chanLoc):Me.writeBits(1,0);return Ky("dec3",[...be])},ny=ee=>{Pe(ee.info.primingPacket);const ie=UH(ee.info.primingPacket.data);if(!ie)throw new Error("Couldn\'t extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return Ky("ddts",[...oH(ie)])},jy=(ee,ie)=>Ky(ee,[Array(6).fill(0),sH(1)],[wb[ie.track.source._codec](ie),Py(ie)]),sy=ee=>Uy("stts",0,0,[NH(ee.timeToSampleTable.length),ee.timeToSampleTable.map((ee=>[NH(ee.sampleCount),NH(ee.sampleDelta)]))]),Iy=ee=>{if(ee.samples.every((ee=>"key"===ee.type)))return null;const ie=[...ee.samples.entries()].filter((ee=>{let[,ie]=ee;return"key"===ie.type}));return Uy("stss",0,0,[NH(ie.length),ie.map((ee=>{let[ie]=ee;return NH(ie+1)}))])},hy=ee=>Uy("stsc",0,0,[NH(ee.compactlyCodedChunkTable.length),ee.compactlyCodedChunkTable.map((ee=>[NH(ee.firstChunk),NH(ee.samplesPerChunk),NH(1)]))]),Ny=ee=>{if("audio"===ee.type&&ee.info.requiresPcmTransformation){const{sampleSize:ie}=gH(ee.track.source._codec);return Uy("stsz",0,0,[NH(ie*ee.info.numberOfChannels),NH(ee.samples.reduce(((ie,He)=>ie+mb(He.duration,ee.timescale)),0))])}return Uy("stsz",0,0,[NH(0),NH(ee.samples.length),ee.samples.map((ee=>NH(ee.size)))])},Gy=ee=>ee.finalizedChunks.length>0&&xe(ee.finalizedChunks).offset>=2**32?Uy("co64",0,0,[NH(ee.finalizedChunks.length),ee.finalizedChunks.map((ee=>rH(ee.offset)))]):Uy("stco",0,0,[NH(ee.finalizedChunks.length),ee.finalizedChunks.map((ee=>NH(ee.offset)))]),ry=ee=>Uy("ctts",1,0,[NH(ee.compositionTimeOffsetTable.length),ee.compositionTimeOffsetTable.map((ee=>[NH(ee.sampleCount),GH(ee.sampleCompositionTimeOffset)]))]),Qy=ee=>{let ie=1/0,He=-1/0,ye=1/0,be=-1/0;Pe(ee.compositionTimeOffsetTable.length>0),Pe(ee.samples.length>0);for(let Ke=0;Ke<ee.compositionTimeOffsetTable.length;Ke++){const ye=ee.compositionTimeOffsetTable[Ke];ie=Math.min(ie,ye.sampleCompositionTimeOffset),He=Math.max(He,ye.sampleCompositionTimeOffset)}for(let Ke=0;Ke<ee.samples.length;Ke++){const ie=ee.samples[Ke];ye=Math.min(ye,mb(ie.timestamp,ee.timescale)),be=Math.max(be,mb(ie.timestamp+ie.duration,ee.timescale))}const Me=Math.max(-ie,0);return be>=2**31?null:Uy("cslg",0,0,[GH(Me),GH(ie),GH(He),GH(ye),GH(be)])},eb=ee=>Ky("mvex",void 0,ee.map(ib)),ib=ee=>Uy("trex",0,0,[NH(ee.track.id),NH(1),NH(0),NH(0),NH(0)]),Hb=(ee,ie)=>Ky("moof",void 0,[yb(ee),...ie.map(Mb)]),yb=ee=>Uy("mfhd",0,0,[NH(ee)]),bb=ee=>{let ie=0,He=0;const ye="delta"===ee.type;return He|=+ye,ie|=ye?1:2,ie<<24|He<<16},Mb=ee=>Ky("traf",void 0,[Kb(ee),Ub(ee),Fb(ee)]),Kb=ee=>{Pe(ee.currentChunk);let ie=0;ie|=8,ie|=16,ie|=32,ie|=131072;const He=ee.currentChunk.samples[1]??ee.currentChunk.samples[0],ye={duration:He.timescaleUnitsToNextSample,size:He.size,flags:bb(He)};return Uy("tfhd",0,131128,[NH(ee.track.id),NH(ye.duration),NH(ye.size),NH(ye.flags)])},Ub=ee=>(Pe(ee.currentChunk),Uy("tfdt",1,0,[rH(mb(ee.currentChunk.startTimestamp,ee.timescale))])),Fb=ee=>{Pe(ee.currentChunk);const ie=ee.currentChunk.samples.map((ee=>ee.timescaleUnitsToNextSample)),He=ee.currentChunk.samples.map((ee=>ee.size)),ye=ee.currentChunk.samples.map(bb),be=ee.currentChunk.samples.map((ie=>mb(ie.timestamp-ie.decodeTimestamp,ee.timescale))),Me=new Set(ie),Ke=new Set(He),Ue=new Set(ye),Fe=new Set(be),Je=2===Ue.size&&ye[0]!==ye[1],oe=Me.size>1,Re=Ke.size>1,ke=!Je&&Ue.size>1,qe=Fe.size>1||[...Fe].some((ee=>0!==ee));let fe=0;return fe|=1,fe|=4*+Je,fe|=256*+oe,fe|=512*+Re,fe|=1024*+ke,fe|=2048*+qe,Uy("trun",1,fe,[NH(ee.currentChunk.samples.length),NH(ee.currentChunk.offset-ee.currentChunk.moofOffset||0),Je?NH(ye[0]):[],ee.currentChunk.samples.map(((ee,Me)=>[oe?NH(ie[Me]):[],Re?NH(He[Me]):[],ke?NH(ye[Me]):[],qe?GH(be[Me]):[]]))])},Jb=ee=>Uy("tfra",1,0,[NH(ee.track.id),NH(63),NH(ee.finalizedChunks.length),ee.finalizedChunks.map((ie=>[rH(mb(ie.samples[0].timestamp,ee.timescale)),rH(ie.moofOffset),NH(ie.trafIndex+1),NH(1),NH(1)]))]),ob=()=>Uy("mfro",0,0,[NH(0)]),Rb=()=>Ky("vtte"),kb=(ee,ie,He,ye,be)=>Ky("vttc",void 0,[null!==be?Ky("vsid",[GH(be)]):null,null!==He?Ky("iden",[...Se.encode(He)]):null,null!==ie?Ky("ctim",[...Se.encode(mH(ie))]):null,null!==ye?Ky("sttg",[...Se.encode(ye)]):null,Ky("payl",[...Se.encode(ee)])]),qb=ee=>Ky("vtta",[...Se.encode(ee)]),fb=ee=>{const ie=[],He=ee.format._options.metadataFormat??"auto",ye=ee.output._metadataTags;if("mdir"===He||"auto"===He&&!ee.isQuickTime){const ee=Bb(ye);ee&&ie.push(ee)}else if("mdta"===He){const ee=Eb(ye);ee&&ie.push(ee)}else("udta"===He||"auto"===He&&ee.isQuickTime)&&Tb(ie,ee.output._metadataTags);return 0===ie.length?null:Ky("udta",void 0,ie)},Tb=(ee,ie)=>{for(const{key:He,value:ye}of Ki(ie))switch(He){case"title":ee.push(pb("\\xa9nam",ye));break;case"description":ee.push(pb("\\xa9des",ye));break;case"artist":ee.push(pb("\\xa9ART",ye));break;case"album":ee.push(pb("\\xa9alb",ye));break;case"albumArtist":ee.push(pb("albr",ye));break;case"genre":ee.push(pb("\\xa9gen",ye));break;case"date":ee.push(pb("\\xa9day",ye.toISOString().slice(0,10)));break;case"comment":ee.push(pb("\\xa9cmt",ye));break;case"lyrics":ee.push(pb("\\xa9lyr",ye));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:re(He)}if(ie.raw)for(const He in ie.raw){const ye=ie.raw[He];null==ye||4!==He.length||ee.some((ee=>ee.type===He))||("string"===typeof ye?ee.push(pb(He,ye)):ye instanceof Uint8Array&&ee.push(Ky(He,Array.from(ye))))}},pb=(ee,ie)=>{const He=Se.encode(ie);return Ky(ee,[sH(He.length),sH(Db("und")),Array.from(He)])},Xb={"image/jpeg":13,"image/png":14,"image/bmp":27},zb=(ee,ie)=>{const He=[];for(const{key:ye,value:be}of Ki(ee))switch(ye){case"title":He.push({key:ie?"title":"\\xa9nam",value:gb(be)});break;case"description":He.push({key:ie?"description":"\\xa9des",value:gb(be)});break;case"artist":He.push({key:ie?"artist":"\\xa9ART",value:gb(be)});break;case"album":He.push({key:ie?"album":"\\xa9alb",value:gb(be)});break;case"albumArtist":He.push({key:ie?"album_artist":"aART",value:gb(be)});break;case"comment":He.push({key:ie?"comment":"\\xa9cmt",value:gb(be)});break;case"genre":He.push({key:ie?"genre":"\\xa9gen",value:gb(be)});break;case"beatsPerMinute":ie||He.push({key:"tmpo",value:Ky("data",[NH(21),NH(0),sH(be)])});break;case"lyrics":He.push({key:ie?"lyrics":"\\xa9lyr",value:gb(be)});break;case"date":He.push({key:ie?"date":"\\xa9day",value:gb(be.toISOString().slice(0,10))});break;case"images":for(const ee of be)"coverFront"===ee.kind&&He.push({key:"covr",value:Ky("data",[NH(Xb[ee.mimeType]??0),NH(0),Array.from(ee.data)])});break;case"trackNumber":if(ie){const ie=void 0!==ee.tracksTotal?`${be}/${ee.tracksTotal}`:be.toString();He.push({key:"track",value:gb(ie)})}else He.push({key:"trkn",value:Ky("data",[NH(0),NH(0),sH(0),sH(be),sH(ee.tracksTotal??0),sH(0)])});break;case"discNumber":ie||He.push({key:"disc",value:Ky("data",[NH(0),NH(0),sH(0),sH(be),sH(ee.discsTotal??0),sH(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:re(ye)}if(ee.raw)for(const ye in ee.raw){const be=ee.raw[ye];null==be||!ie&&4!==ye.length||He.some((ee=>ee.key===ye))||("string"===typeof be?He.push({key:ye,value:gb(be)}):be instanceof Uint8Array?He.push({key:ye,value:Ky("data",[NH(0),NH(0),Array.from(be)])}):be instanceof ki&&He.push({key:ye,value:Ky("data",[NH(Xb[be.mimeType]??0),NH(0),Array.from(be.data)])}))}return He},Bb=ee=>{const ie=zb(ee,!1);return 0===ie.length?null:Uy("meta",0,0,void 0,[Ey(!1,"mdir","","appl"),Ky("ilst",void 0,ie.map((ee=>Ky(ee.key,void 0,[ee.value]))))])},Eb=ee=>{const ie=zb(ee,!0);return 0===ie.length?null:Ky("meta",void 0,[Ey(!1,"mdta",""),Uy("keys",0,0,[NH(ie.length)],ie.map((ee=>Ky("mdta",[...Se.encode(ee.key)])))),Ky("ilst",void 0,ie.map(((ee,ie)=>{const He=String.fromCharCode(...NH(ie+1));return Ky(He,void 0,[ee.value])})))])},gb=ee=>Ky("data",[NH(1),NH(0),...Se.encode(ee)]),Ob=(ee,ie)=>{switch(ee){case"avc":return ie.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return ie}},db={avc:ee=>ee.info.decoderConfig&&Ky("avcC",[...ue(ee.info.decoderConfig.description)]),hevc:ee=>ee.info.decoderConfig&&Ky("hvcC",[...ue(ee.info.decoderConfig.description)]),vp8:Vy,vp9:Vy,av1:ee=>Ky("av1C",BH(ee.info.decoderConfig.codec)),prores:null},Wb=(ee,ie,He)=>{switch(ee){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return ie}if(He)switch(ee){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(ee){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},tb=(ee,ie)=>{switch(ee){case"aac":case"mp3":case"vorbis":return cy;case"opus":return vy;case"flac":return uy;case"ac3":return ly;case"eac3":return Sy;case"dts":return ny}if(ie)switch(ee){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return xy}else switch(ee){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return my}return null},Zb={webvtt:"wvtt"},wb={webvtt:ee=>Ky("vttC",[...Se.encode(ee.info.config.description)])},Db=ee=>{Pe(3===ee.length);let ie=0;for(let He=0;He<3;He++)ie<<=5,ie+=ee.charCodeAt(He)-96;return ie};class Pb{constructor(ee,ie){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,ee._writerAcquired)throw new Error("Can\'t have multiple Writers for the same Target.");this.target=ee,ee._setMonotonicity(ie),ee._writerAcquired=!0}start(){Pe(!this.started),this.target._start(),this.started=!0}write(ee){Pe(this.started&&!this.finalized),this.maybeTrackWrites(ee),this.target._write(ee,this.pos),this.pos+=ee.byteLength}seek(ee){this.pos=ee}getPos(){return this.pos}async flush(){return Pe(this.started&&!this.finalized),this.target._flush()}async finalize(){Pe(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(ee){if(!this.trackedWrites)return;let ie=this.getPos();if(ie<this.trackedStart){if(ie+ee.byteLength<=this.trackedStart)return;ee=ee.subarray(this.trackedStart-ie),ie=0}const He=ie+ee.byteLength-this.trackedStart;let ye=this.trackedWrites.byteLength;for(;ye<He;)ye*=2;if(ye!==this.trackedWrites.byteLength){const ee=new Uint8Array(ye);ee.set(this.trackedWrites,0),this.trackedWrites=ee}this.trackedWrites.set(ee,ie-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,ie+ee.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can\'t get tracked writes since nothing was tracked.");const ee={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,ee}}He(9);class Ab extends oi{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(ee){!1!==this._monotonicity&&(this._monotonicity=ee)}_dispatchWrite(ee,ie){this.onwrite?.(ee,ie),this._emit("write",{start:ee,end:ie})}slice(ee){if(!Number.isInteger(ee)||ee<0)throw new TypeError("offset must be a non-negative integer.");return new xb(this,ee)}}const Yb=65536,Vb=2**32;class ab extends Ab{constructor(){let ee=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(super(),this.buffer=null,this._maxPos=0,!ee||"object"!==typeof ee)throw new TypeError("BufferTarget options, when provided, must be an object.");if(void 0!==ee.onFinalize&&"function"!==typeof ee.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=ee,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Yb,{maxByteLength:Vb})}catch{this._buffer=new ArrayBuffer(Yb),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Yb);this._bytes=new Uint8Array(this._buffer)}_ensureSize(ee){let ie=this._buffer.byteLength;for(;ie<ee;)ie*=2;if(ie!==this._buffer.byteLength){if(ie>Vb)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this._supportsResize)this._buffer.resize(ie);else{const ee=new ArrayBuffer(ie),He=new Uint8Array(ee);He.set(this._bytes,0),this._buffer=ee,this._bytes=He}}}_start(){}_write(ee,ie){this._ensureSize(ie+ee.byteLength),this._bytes.set(ee,ie),this._maxPos=Math.max(this._maxPos,ie+ee.byteLength),this._dispatchWrite(ie,ie+ee.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(ee,ie){return this._bytes.slice(ee,ie)}}class cb extends Ab{_start(){}_write(ee,ie){this._dispatchWrite(ie,ie+ee.byteLength)}async _flush(){}async _finalize(){this._emit("finalized")}async _close(){}}class xb extends Ab{constructor(ee,ie){super(),this._baseTarget=ee,this._offset=ie}_start(){}_write(ee,ie){this._baseTarget._write(ee,this._offset+ie),this._dispatchWrite(ie,ie+ee.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(ee){super._setMonotonicity(ee),this._baseTarget._setMonotonicity(ee)}}class Lb{constructor(ee,ie){if(this.rootPath=ee,this.getTarget=ie,"string"!==typeof ee)throw new TypeError("rootPath must be a string.");if("function"!==typeof ie)throw new TypeError("getTarget must be a function.")}}const Cb=ee=>{const ie=ee.filePos,He=xH(ee,9),ye=new fi(He);if(4095!==ye.readBits(12))return null;ye.skipBits(1);if(0!==ye.readBits(2))return null;const be=ye.readBits(1),Me=ye.readBits(2)+1,Ke=ye.readBits(4);if(15===Ke)return null;ye.skipBits(1);const Ue=ye.readBits(3);if(0===Ue)throw new Error("ADTS frames with channel configuration 0 are not supported.");ye.skipBits(1),ye.skipBits(1),ye.skipBits(1),ye.skipBits(1);const Fe=ye.readBits(13);ye.skipBits(11);const Je=ye.readBits(2)+1;if(1!==Je)throw new Error("ADTS frames with more than one AAC frame are not supported.");let oe=null;return 1===be?ee.filePos-=2:oe=ye.readBits(16),{objectType:Me,samplingFrequencyIndex:Ke,channelConfiguration:Ue,frameLength:Fe,numberOfAacFrames:Je,crcCheck:oe,startPos:ie}},vb=57600,ub=ee=>{const ie={},He=ee.track;return void 0!==He.metadata.name&&(ie.name=He.metadata.name),ie},mb=function(ee,ie){const He=ee*ie;return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.round(He):He},lb=ee=>{if(0===ee.samples.length)return 0;let ie=1/0,He=-1/0;for(let ye=0;ye<ee.samples.length;ye++){const be=ee.samples[ye];be.timestamp<ie&&(ie=be.timestamp),be.timestamp+be.duration>He&&(He=be.timestamp+be.duration)}return ie===1/0?0:He-ie};class Sb extends vH{constructor(ee,ie){super(ee),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new ab,this.auxWriter=new Pb(this.auxTarget,!1),this.auxBoxWriter=new lH(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Ge(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=ie,this.formatOptions={...ie._options},this.isQuickTime=ie instanceof qM,this.isCmaf=ie instanceof kM,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(ie instanceof kM?1/0:1),this.auxWriter.start()}async start(){const ee=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter((ee=>void 0!==this.formatOptions.fastStart?"fragmented"===this.formatOptions.fastStart:ee instanceof ab)),this.boxWriter=new lH(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof ab&&"in-memory"),this.isFragmented="fragmented"===this.fastStart),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const ee=await this.output._getInitTarget(),ie=new Pb(ee,!0);ie.start(),this.initWriter=ie,this.initBoxWriter=new lH(ie)}const ie=this.output.tracks.some((ee=>ee.isVideoTrack()&&"avc"===ee.source._codec));{const ee=this.initBoxWriter??this.boxWriter;if(Pe(ee),this.formatOptions.onFtyp&&ee.writer.startTrackingWrites(),ee.writeBox((ee=>{const ie=512;return ee.isQuickTime?Ky("ftyp",[by("qt  "),NH(ie),by("qt  ")]):ee.fragmented?ee.cmaf?Ky("ftyp",[by("iso5"),NH(ie),by("iso5"),by("iso6"),by("mp41"),by("cmfc"),by("dash")]):Ky("ftyp",[by("iso5"),NH(ie),by("iso5"),by("iso6"),by("mp41")]):Ky("ftyp",[by("isom"),NH(ie),by("isom"),ee.holdsAvc?by("avc1"):[],by("mp41")])})({isQuickTime:this.isQuickTime,holdsAvc:ie,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:ie,start:He}=ee.writer.stopTrackingWrites();this.formatOptions.onFtyp(ie,He)}this.ftypSize=ee.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if("in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const He of this.output.tracks)if(void 0===He.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: \'reserve\'.")}else this.isFragmented||(Pe(this.writer),Pe(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=oy(!0),this.boxWriter.writeBox(this.mdat));await(this.writer?.flush());for(const He of this.output.tracks)He.isVideoTrack()&&He.metadata.decoderConfig?this.getVideoTrackData(He,He.metadata.primingPacket??null,{decoderConfig:He.metadata.decoderConfig}):He.isAudioTrack()&&He.metadata.decoderConfig&&this.getAudioTrackData(He,He.metadata.primingPacket??null,{decoderConfig:He.metadata.decoderConfig});ee()}allTracksAreKnown(){for(const ee of this.output.tracks)if(!ee.source._closed&&!this.trackDatas.some((ie=>ie.track===ee)))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const ee=this.trackDatas.map((ee=>{if("video"===ee.type)return ee.info.decoderConfig.codec;if("audio"===ee.type)return ee.info.decoderConfig.codec;return{webvtt:"wvtt"}[ee.track.source._codec]}));return(ee=>{let ie=(ee.hasVideo?"video/":ee.hasAudio?"audio/":"application/")+(ee.isQuickTime?"quicktime":"mp4");ee.codecStrings.length>0&&(ie+=`; codecs="${[...new Set(ee.codecStrings)].join(", ")}"`);return ie})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some((ee=>"video"===ee.type)),hasAudio:this.trackDatas.some((ee=>"audio"===ee.type)),codecStrings:ee})}getVideoTrackData(ee,ie,He){const ye=this.trackDatas.find((ie=>ie.track===ee));if(ye)return ye;DH(He,ee.source._codec),Pe(He),Pe(He.decoderConfig);const be={...He.decoderConfig};Pe(void 0!==be.codedWidth),Pe(void 0!==be.codedHeight);let Me=!1;if("avc"!==ee.source._codec||be.description){if("hevc"===ee.source._codec&&!be.description){if(!ie)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const ee=vi(ie.data);if(!ee)throw new Error("Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");be.description=(ee=>{const ie=[];ie.push(ee.configurationVersion),ie.push((3&ee.generalProfileSpace)<<6|(1&ee.generalTierFlag)<<5|31&ee.generalProfileIdc),ie.push(ee.generalProfileCompatibilityFlags>>>24&255),ie.push(ee.generalProfileCompatibilityFlags>>>16&255),ie.push(ee.generalProfileCompatibilityFlags>>>8&255),ie.push(255&ee.generalProfileCompatibilityFlags),ie.push(...ee.generalConstraintIndicatorFlags),ie.push(255&ee.generalLevelIdc),ie.push(240|ee.minSpatialSegmentationIdc>>8&15),ie.push(255&ee.minSpatialSegmentationIdc),ie.push(252|3&ee.parallelismType),ie.push(252|3&ee.chromaFormatIdc),ie.push(248|7&ee.bitDepthLumaMinus8),ie.push(248|7&ee.bitDepthChromaMinus8),ie.push(ee.avgFrameRate>>8&255),ie.push(255&ee.avgFrameRate),ie.push((3&ee.constantFrameRate)<<6|(7&ee.numTemporalLayers)<<3|(1&ee.temporalIdNested)<<2|3&ee.lengthSizeMinusOne),ie.push(255&ee.arrays.length);for(const He of ee.arrays){ie.push((1&He.arrayCompleteness)<<7|63&He.nalUnitType),ie.push(He.nalUnits.length>>8&255),ie.push(255&He.nalUnits.length);for(const ee of He.nalUnits){ie.push(ee.length>>8&255),ie.push(255&ee.length);for(let He=0;He<ee.length;He++)ie.push(ee[He])}}return new Uint8Array(ie)})(ee),Me=!0}}else{if(!ie)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const ee=ai(ie.data);if(!ee)throw new Error("Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");be.description=(ee=>{const ie=[];ie.push(ee.configurationVersion),ie.push(ee.avcProfileIndication),ie.push(ee.profileCompatibility),ie.push(ee.avcLevelIndication),ie.push(252|3&ee.lengthSizeMinusOne),ie.push(224|31&ee.sequenceParameterSets.length);for(const He of ee.sequenceParameterSets){const ee=He.byteLength;ie.push(ee>>8),ie.push(255&ee);for(let ye=0;ye<ee;ye++)ie.push(He[ye])}ie.push(ee.pictureParameterSets.length);for(const He of ee.pictureParameterSets){const ee=He.byteLength;ie.push(ee>>8),ie.push(255&ee);for(let ye=0;ye<ee;ye++)ie.push(He[ye])}if((100===ee.avcProfileIndication||110===ee.avcProfileIndication||122===ee.avcProfileIndication||144===ee.avcProfileIndication)&&null!==ee.chromaFormat){Pe(null!==ee.bitDepthLumaMinus8),Pe(null!==ee.bitDepthChromaMinus8),Pe(null!==ee.sequenceParameterSetExt),ie.push(252|3&ee.chromaFormat),ie.push(248|7&ee.bitDepthLumaMinus8),ie.push(248|7&ee.bitDepthChromaMinus8),ie.push(ee.sequenceParameterSetExt.length);for(const He of ee.sequenceParameterSetExt){const ee=He.byteLength;ie.push(ee>>8),ie.push(255&ee);for(let ye=0;ye<ee;ye++)ie.push(He[ye])}}return new Uint8Array(ie)})(ee),Me=!0}const Ke=((ee,ie)=>{const He=ee<0?-1:1;let ye=0,be=1,Me=1,Ke=0,Ue=ee=Math.abs(ee);for(;;){const ee=Math.floor(Ue),Fe=ee*Me+ye,Je=ee*Ke+be;if(Je>ie)return{num:He*Me,den:Ke};if(ye=Me,be=Ke,Me=Fe,Ke=Je,Ue=1/(Ue-ee),!isFinite(Ue))break}return{num:He*Me,den:Ke}})(1/(ee.metadata.frameRate??vb),1e6).den,Ue=be.displayAspectWidth,Fe=be.displayAspectHeight,Je=void 0===Ue||void 0===Fe?{num:1,den:1}:Fi({num:Ue*be.codedHeight,den:Fe*be.codedWidth}),oe="ap4h"===be.codec||"ap4x"===be.codec,Re={muxer:this,track:ee,type:"video",info:{width:be.codedWidth,height:be.codedHeight,pixelAspectRatio:Je,decoderConfig:be,requiresAnnexBTransformation:Me,hasAlphaChannel:oe},timescale:Ke,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:ee.source._nominalBitrate??ee.metadata.averageBitrate??0,maxBitrate:ee.source._nominalBitrate??ee.metadata.bitrate??0};return this.trackDatas.push(Re),this.trackDatas.sort(((ee,ie)=>ee.track.id-ie.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),Re}getAudioTrackData(ee,ie,He){const ye=this.trackDatas.find((ie=>ie.track===ee));if(ye)return ye;AH(He,ee.source._codec),Pe(He),Pe(He.decoderConfig);const be={...He.decoderConfig};let Me=!1;if("aac"===ee.source._codec&&!be.description){if(!ie)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const ee=Cb(aH.tempFromBytes(ie.data));if(!ee)throw new Error("Couldn\'t parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const He=Ti[ee.samplingFrequencyIndex],ye=Xi[ee.channelConfiguration];if(void 0===He||void 0===ye)throw new Error("Invalid ADTS frame header.");be.description=zi({objectType:ee.objectType,outputSampleRate:He,outputNumberOfChannels:ye}),Me=!0}if(!ie){if("ac3"===ee.source._codec||"eac3"===ee.source._codec)throw new Error("AC-3/E-AC-3 require a priming packet.");if("dts"===ee.source._codec)throw new Error("DTS requires a priming packet.")}const Ke={muxer:this,track:ee,type:"audio",info:{numberOfChannels:He.decoderConfig.numberOfChannels,sampleRate:He.decoderConfig.sampleRate,decoderConfig:be,requiresPcmTransformation:!this.isFragmented&&kH.includes(ee.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:Me,primingPacket:ie},timescale:be.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:ee.source._nominalBitrate??ee.metadata.averageBitrate??0,maxBitrate:ee.source._nominalBitrate??ee.metadata.bitrate??0};return this.trackDatas.push(Ke),this.trackDatas.sort(((ee,ie)=>ee.track.id-ie.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),Ke}getSubtitleTrackData(ee,ie){const He=this.trackDatas.find((ie=>ie.track===ee));if(He)return He;YH(ie),Pe(ie),Pe(ie.config);const ye={muxer:this,track:ee,type:"subtitle",info:{config:ie.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:ee.source._nominalBitrate??ee.metadata.averageBitrate??0,maxBitrate:ee.source._nominalBitrate??ee.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(ye),this.trackDatas.sort(((ee,ie)=>ee.track.id-ie.track.id)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),ye}async addEncodedVideoPacket(ee,ie,He){const ye=await this.mutex.acquire();try{const ye=this.getVideoTrackData(ee,ie,He);let be=ie.data;if(ye.info.requiresAnnexBTransformation){const ee=[...Pi(be)].map((ee=>be.subarray(ee.offset,ee.offset+ee.length)));if(0===ee.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");be=Vi(ee,4)}this.validateTimestamp(ye.track,ie.timestamp,"key"===ie.type);const Me=this.createSampleForTrack(ye,be,ie.timestamp,ie.duration,ie.type);await this.registerSample(ye,Me)}finally{ye()}}async addEncodedAudioPacket(ee,ie,He){const ye=await this.mutex.acquire();try{const ye=this.getAudioTrackData(ee,ie,He);let be=ie.data;if(ye.info.requiresAdtsStripping){const ee=Cb(aH.tempFromBytes(be));if(!ee)throw new Error("Expected ADTS frame, didn\'t get one.");const ie=null===ee.crcCheck?7:9;be=be.subarray(ie)}this.validateTimestamp(ye.track,ie.timestamp,"key"===ie.type);let Me=ie.timestamp,Ke=ie.duration;if(ye.info.requiresPcmTransformation){const ee=gH(ye.info.decoderConfig.codec).sampleSize*ye.info.numberOfChannels;if(Ke=be.byteLength/ee/ye.info.sampleRate,null!==ye.info.expectedNextPcmPacketTimestamp){const ee=Me-ye.info.expectedNextPcmPacketTimestamp;if(ee<.01)Me=ye.info.expectedNextPcmPacketTimestamp;else{const ie=await this.padWithSilence(ye,ye.info.expectedNextPcmPacketTimestamp,ee);Me=ye.info.expectedNextPcmPacketTimestamp+ie}}ye.info.expectedNextPcmPacketTimestamp=Me+Ke}const Ue=this.createSampleForTrack(ye,be,Me,Ke,ie.type);await this.registerSample(ye,Ue)}finally{ye()}}async padWithSilence(ee,ie,He){const ye=mb(He,ee.timescale);if(He=ye/ee.timescale,ye>0){const{sampleSize:be,silentValue:Me}=gH(ee.info.decoderConfig.codec),Ke=ye*ee.info.numberOfChannels,Ue=new Uint8Array(be*Ke).fill(Me),Fe=this.createSampleForTrack(ee,new Uint8Array(Ue.buffer),ie,He,"key");await this.registerSample(ee,Fe)}return He}async addSubtitleCue(ee,ie,He){const ye=await this.mutex.acquire();try{const ye=this.getSubtitleTrackData(ee,He);this.validateTimestamp(ye.track,ie.timestamp,!0),"webvtt"===ee.source._codec&&(ye.cueQueue.push(ie),await this.processWebVTTCues(ye,ie.timestamp))}finally{ye()}}async processWebVTTCues(ee,ie){for(;ee.cueQueue.length>0;){ee.lastCueEndTimestamp??=Math.min(0,ee.cueQueue[0].timestamp);const He=new Set([]);for(const Fe of ee.cueQueue)Pe(Fe.timestamp<=ie),Pe(ee.lastCueEndTimestamp<=Fe.timestamp+Fe.duration),He.add(Math.max(Fe.timestamp,ee.lastCueEndTimestamp)),He.add(Fe.timestamp+Fe.duration);const ye=[...He].sort(((ee,ie)=>ee-ie)),be=ye[0],Me=ye[1]??be;if(ie<Me)break;if(ee.lastCueEndTimestamp<be){this.auxWriter.seek(0);const ie=Rb();this.auxBoxWriter.writeBox(ie);const He=this.auxTarget._getSlice(0,this.auxWriter.getPos()),ye=this.createSampleForTrack(ee,He,ee.lastCueEndTimestamp,be-ee.lastCueEndTimestamp,"key");await this.registerSample(ee,ye),ee.lastCueEndTimestamp=be}this.auxWriter.seek(0);for(let ie=0;ie<ee.cueQueue.length;ie++){const He=ee.cueQueue[ie];if(He.timestamp>=Me)break;uH.lastIndex=0;const ye=uH.test(He.text),Ke=He.timestamp+He.duration;let Ue=ee.cueToSourceId.get(He);if(void 0===Ue&&Me<Ke&&(Ue=ee.nextSourceId++,ee.cueToSourceId.set(He,Ue)),He.notes){const ee=qb(He.notes);this.auxBoxWriter.writeBox(ee)}const Fe=kb(He.text,ye?be:null,He.identifier??null,He.settings??null,Ue??null);this.auxBoxWriter.writeBox(Fe),Ke===Me&&ee.cueQueue.splice(ie--,1)}const Ke=this.auxTarget._getSlice(0,this.auxWriter.getPos()),Ue=this.createSampleForTrack(ee,Ke,be,Me-be,"key");await this.registerSample(ee,Ue),ee.lastCueEndTimestamp=Me}}createSampleForTrack(ee,ie,He,ye,be){return{timestamp:He,decodeTimestamp:He,duration:ye,data:ie,size:ie.byteLength,type:be,timescaleUnitsToNextSample:mb(ye,ee.timescale)}}processTimestamps(ee,ie){if(0===ee.timestampProcessingQueue.length)return;if("audio"===ee.type&&ee.info.requiresPcmTransformation){Pe(!this.isFragmented),ee.startTimestampOffset??=ee.timestampProcessingQueue[0].timestamp;let ie=0;for(let He=0;He<ee.timestampProcessingQueue.length;He++){const ye=ee.timestampProcessingQueue[He];ie+=mb(ye.duration,ee.timescale)}if(0===ee.timeToSampleTable.length)ee.timeToSampleTable.push({sampleCount:ie,sampleDelta:1});else{xe(ee.timeToSampleTable).sampleCount+=ie}return void(ee.timestampProcessingQueue.length=0)}const He=ee.timestampProcessingQueue.map((ee=>ee.timestamp)).sort(((ee,ie)=>ee-ie));this.isFragmented?ee.startTimestampOffset??=Math.min(He[0],0):ee.startTimestampOffset??=He[0];for(let ye=0;ye<ee.timestampProcessingQueue.length;ye++){const ie=ee.timestampProcessingQueue[ye];ie.decodeTimestamp=He[ye];const be=mb(ie.timestamp-ie.decodeTimestamp,ee.timescale),Me=mb(ie.duration,ee.timescale);if(null!==ee.lastTimescaleUnits){Pe(ee.lastSample);const He=mb(ie.decodeTimestamp,ee.timescale,!1),ye=Math.round(He-ee.lastTimescaleUnits);if(Pe(ye>=0),ee.lastTimescaleUnits+=ye,ee.lastSample.timescaleUnitsToNextSample=ye,!this.isFragmented){let ie=xe(ee.timeToSampleTable);if(Pe(ie),1===ie.sampleCount){ie.sampleDelta=ye;const He=ee.timeToSampleTable[ee.timeToSampleTable.length-2];He&&He.sampleDelta===ye&&(He.sampleCount++,ee.timeToSampleTable.pop(),ie=He)}else ie.sampleDelta!==ye&&(ie.sampleCount--,ee.timeToSampleTable.push(ie={sampleCount:1,sampleDelta:ye}));ie.sampleDelta===Me?ie.sampleCount++:ee.timeToSampleTable.push({sampleCount:1,sampleDelta:Me});const He=xe(ee.compositionTimeOffsetTable);Pe(He),He.sampleCompositionTimeOffset===be?He.sampleCount++:ee.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:be})}}else ee.lastTimescaleUnits=mb(ie.decodeTimestamp,ee.timescale,!1),this.isFragmented||(ee.timeToSampleTable.push({sampleCount:1,sampleDelta:Me}),ee.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:be}));ee.lastSample=ie}if(ee.timestampProcessingQueue.length=0,Pe(ee.lastSample),Pe(null!==ee.lastTimescaleUnits),void 0!==ie&&0===ee.lastSample.timescaleUnitsToNextSample){Pe("key"===ie.type);const He=mb(ie.timestamp,ee.timescale,!1),ye=Math.round(He-ee.lastTimescaleUnits);ee.lastSample.timescaleUnitsToNextSample=ye}}async registerSample(ee,ie){"key"===ie.type&&this.processTimestamps(ee,ie),ee.timestampProcessingQueue.push(ie),this.isFragmented?(ee.sampleQueue.push(ie),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(ee,ie):await this.addSampleToTrack(ee,ie)}async addSampleToTrack(ee,ie){if(!this.isFragmented&&(ee.samples.push(ie),"reserve"===this.fastStart)){const ie=ee.track.metadata.maximumPacketCount;if(Pe(void 0!==ie),ee.samples.length>ie)throw new Error(`Track #${ee.track.id} has already reached the maximum packet count (${ie}). Either add less packets or increase the maximum packet count.`)}let He=!1;if(ee.currentChunk){ee.currentChunk.startTimestamp=Math.min(ee.currentChunk.startTimestamp,ie.timestamp);const ye=ie.timestamp-ee.currentChunk.startTimestamp;if(this.isFragmented){const be=this.trackDatas.every((He=>{if(ee===He)return"key"===ie.type;const ye=He.sampleQueue[0];return ye?"key"===ye.type:He.closed}));ye>=this.minimumFragmentDuration&&be&&ie.timestamp>this.maxWrittenTimestamp&&(He=!0,await this.finalizeFragment())}else He=ye>=.5}else He=!0;He&&(ee.currentChunk&&await this.finalizeCurrentChunk(ee),ee.currentChunk={startTimestamp:ie.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),Pe(ee.currentChunk),ee.currentChunk.samples.push(ie),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,ie.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,ie.timestamp+ie.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,ie.timestamp))}async finalizeCurrentChunk(ee){if(Pe(!this.isFragmented),Pe(this.writer),!ee.currentChunk)return;ee.finalizedChunks.push(ee.currentChunk),this.finalizedChunks.push(ee.currentChunk);let ie=ee.currentChunk.samples.length;if("audio"===ee.type&&ee.info.requiresPcmTransformation&&(ie=ee.currentChunk.samples.reduce(((ie,He)=>ie+mb(He.duration,ee.timescale)),0)),0!==ee.compactlyCodedChunkTable.length&&xe(ee.compactlyCodedChunkTable).samplesPerChunk===ie||ee.compactlyCodedChunkTable.push({firstChunk:ee.finalizedChunks.length,samplesPerChunk:ie}),"in-memory"!==this.fastStart){ee.currentChunk.offset=this.writer.getPos();for(const ie of ee.currentChunk.samples)Pe(ie.data),this.writer.write(ie.data),ie.data=null;await this.writer.flush()}else ee.currentChunk.offset=0}async interleaveSamples(){let ee=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(Pe(this.isFragmented),ee||this.allTracksAreKnown())ee:for(;;){let ie=null,He=1/0;for(const be of this.trackDatas){if(!ee&&0===be.sampleQueue.length&&!be.closed)break ee;be.sampleQueue.length>0&&be.sampleQueue[0].timestamp<He&&(ie=be,He=be.sampleQueue[0].timestamp)}if(!ie)break;const ye=ie.sampleQueue.shift();await this.addSampleToTrack(ie,ye)}}async finalizeFragment(){let ee=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isCmaf;if(Pe(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const ee=this.initBoxWriter??this.boxWriter;Pe(ee),this.formatOptions.onMoov&&ee.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const ie=Ry(this);if(ee.writeBox(ie),this.formatOptions.onMoov){const{data:ie,start:He}=ee.writer.stopTrackingWrites();this.formatOptions.onMoov(ie,He)}if(this.isCmaf){Pe(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new lH(this.writer);const ee=this.boxWriter.measureBox(Fy()),ie=this.boxWriter.measureBox(Jy(this,0));this.segmentHeaderSize=ee+ie,this.writer.seek(this.segmentHeaderSize)}}Pe(this.writer),Pe(this.boxWriter);const ie=this.trackDatas.filter((ee=>ee.currentChunk));if(0===ie.length)return void(ee&&await this.writer.flush());const He=this.nextFragmentNumber++,ye=Hb(He,ie),be=this.writer.getPos(),Me=be+this.boxWriter.measureBox(ye);let Ke=Me+8,Ue=1/0;for(let ke=0;ke<ie.length;ke++){const ee=ie[ke];Pe(ee.currentChunk),Pe(null!==ee.startTimestampOffset),ee.currentChunk.offset=Ke,ee.currentChunk.moofOffset=be,ee.currentChunk.trafIndex=ke,ee.currentChunk.startTimestamp-=ee.startTimestampOffset;for(const ie of ee.currentChunk.samples)Ke+=ie.size,ie.timestamp-=ee.startTimestampOffset,ie.decodeTimestamp-=ee.startTimestampOffset;Ue=Math.min(Ue,ee.currentChunk.startTimestamp)}const Fe=Ke-Me,Je=Fe>=2**32;if(Je)for(const ke of ie)ke.currentChunk.offset+=8;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const oe=Hb(He,ie);if(this.boxWriter.writeBox(oe),this.formatOptions.onMoof){const{data:ee,start:ie}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(ee,ie,Ue)}Pe(this.writer.getPos()===Me),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const Re=oy(Je);Re.size=Fe,this.boxWriter.writeBox(Re),this.writer.seek(Me+(Je?16:8));for(const ke of ie)for(const ee of ke.currentChunk.samples)this.writer.write(ee.data),ee.data=null;if(this.formatOptions.onMdat){const{data:ee,start:ie}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(ee,ie)}for(const ke of ie)ke.finalizedChunks.push(ke.currentChunk),this.finalizedChunks.push(ke.currentChunk),ke.currentChunk=null;ee&&await this.writer.flush()}async registerSampleFastStartReserve(ee,ie){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(ee,ie)):ee.sampleQueue.push(ie)}async createFastStartReserveMdat(){Pe(this.writer),Pe(this.boxWriter),this.ensureOneEnabledTrack();const ee=Ry(this),ie=this.boxWriter.measureBox(ee)+this.computeSampleTableSizeUpperBound()+4096;Pe(null!==this.ftypSize),this.writer.seek(this.ftypSize+ie),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=oy(!0),this.boxWriter.writeBox(this.mdat);for(const He of this.trackDatas){for(const ee of He.sampleQueue)await this.addSampleToTrack(He,ee);He.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){Pe("reserve"===this.fastStart);let ee=0;for(const ie of this.trackDatas){const He=ie.track.metadata.maximumPacketCount;Pe(void 0!==He),ee+=8*Math.ceil(2/3*He),ee+=4*He,ee+=8*Math.ceil(2/3*He),ee+=12*Math.ceil(2/3*He),ee+=4*He,ee+=8*He}return ee}async onTrackClose(ee){const ie=await this.mutex.acquire(),He=this.trackDatas.find((ie=>ie.track===ee));He&&(He.closed=!0,"subtitle"===He.type&&"webvtt"===ee.source._codec&&await this.processWebVTTCues(He,1/0),this.processTimestamps(He)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),ie()}ensureOneEnabledTrack(){for(const ee of["video","audio","subtitle"]){const ie=this.trackDatas.filter((ie=>ie.type===ee));if(0===ie.length)continue;if(!ie.some((ee=>!1!==ee.track.metadata.disposition?.default))){const ee=ie[0];ee.track.metadata.disposition={...ee.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){Pe(this.isFragmented);const ee=await this.mutex.acquire();try{for(const ee of this.trackDatas)"subtitle"===ee.type&&"webvtt"===ee.track.source._codec&&await this.processWebVTTCues(ee,1/0),this.processTimestamps(ee);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{ee()}}async finalize(){const ee=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),this.mdat||"reserve"!==this.fastStart||await this.createFastStartReserveMdat();for(const He of this.trackDatas)He.closed=!0,"subtitle"===He.type&&"webvtt"===He.track.source._codec&&await this.processWebVTTCues(He,1/0),this.processTimestamps(He);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const He of this.trackDatas){await this.finalizeCurrentChunk(He);const ee=lb(He);if(ee>0){let ie=0;for(const ee of He.samples)ie+=ee.size;He.avgBitrate=Math.round(8*ie/ee)}else He.avgBitrate=0;let ie=0,ye=0,be=0;for(let Me=0;Me<He.samples.length;Me++){const ee=He.samples[Me];for(ye+=ee.size;ee.decodeTimestamp-He.samples[ie].decodeTimestamp>=1;)ye-=He.samples[ie].size,ie++;be=Math.max(be,ye)}if(He.maxBitrate=8*be,null!==He.startTimestampOffset)for(let Me=0;Me<He.samples.length;Me++){const ee=He.samples[Me];ee.timestamp-=He.startTimestampOffset,ee.decodeTimestamp-=He.startTimestampOffset}}if(Pe(this.writer),Pe(this.boxWriter),"in-memory"===this.fastStart){let ee;this.mdat=oy(!1);for(let He=0;He<2;He++){const ie=Ry(this),He=this.boxWriter.measureBox(ie);ee=this.boxWriter.measureBox(this.mdat);let ye=this.writer.getPos()+He+ee;for(const be of this.finalizedChunks){be.offset=ye;for(const{data:ie}of be.samples)Pe(ie),ye+=ie.byteLength,ee+=ie.byteLength}if(ye<2**32)break;ee>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const ie=Ry(this);if(this.boxWriter.writeBox(ie),this.formatOptions.onMoov){const{data:ee,start:ie}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(ee,ie)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=ee,this.boxWriter.writeBox(this.mdat);for(const He of this.finalizedChunks)for(const ee of He.samples)Pe(ee.data),this.writer.write(ee.data),ee.data=null;if(this.formatOptions.onMdat){const{data:ee,start:ie}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(ee,ie)}}else if(this.isFragmented)if(this.isCmaf){const ee=null!==this.segmentHeaderSize?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Fy()),this.boxWriter.writeBox(Jy(this,ee))}else{const ee=this.writer.getPos(),He=(ie=this.trackDatas,Ky("mfra",void 0,[...ie.map(Jb),ob()]));this.boxWriter.writeBox(He);const ye=this.writer.getPos()-ee;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(ye)}else{Pe(this.mdat);const ee=this.boxWriter.offsets.get(this.mdat);Pe(void 0!==ee);const ie=this.writer.getPos()-ee;if(this.mdat.size=ie,this.mdat.largeSize=ie>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:ee,start:ie}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(ee,ie)}const He=Ry(this);if("reserve"===this.fastStart){Pe(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(He);const ee=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:ee})}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(He);if(this.formatOptions.onMoov){const{data:ee,start:ie}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(ee,ie)}}var ie;ee()}}var nb;!function(ee){ee[ee.EBML=440786851]="EBML",ee[ee.EBMLVersion=17030]="EBMLVersion",ee[ee.EBMLReadVersion=17143]="EBMLReadVersion",ee[ee.EBMLMaxIDLength=17138]="EBMLMaxIDLength",ee[ee.EBMLMaxSizeLength=17139]="EBMLMaxSizeLength",ee[ee.DocType=17026]="DocType",ee[ee.DocTypeVersion=17031]="DocTypeVersion",ee[ee.DocTypeReadVersion=17029]="DocTypeReadVersion",ee[ee.Void=236]="Void",ee[ee.Segment=408125543]="Segment",ee[ee.SeekHead=290298740]="SeekHead",ee[ee.Seek=19899]="Seek",ee[ee.SeekID=21419]="SeekID",ee[ee.SeekPosition=21420]="SeekPosition",ee[ee.Duration=17545]="Duration",ee[ee.Info=357149030]="Info",ee[ee.TimestampScale=2807729]="TimestampScale",ee[ee.MuxingApp=19840]="MuxingApp",ee[ee.WritingApp=22337]="WritingApp",ee[ee.Tracks=374648427]="Tracks",ee[ee.TrackEntry=174]="TrackEntry",ee[ee.TrackNumber=215]="TrackNumber",ee[ee.TrackUID=29637]="TrackUID",ee[ee.TrackType=131]="TrackType",ee[ee.FlagEnabled=185]="FlagEnabled",ee[ee.FlagDefault=136]="FlagDefault",ee[ee.FlagForced=21930]="FlagForced",ee[ee.FlagOriginal=21934]="FlagOriginal",ee[ee.FlagHearingImpaired=21931]="FlagHearingImpaired",ee[ee.FlagVisualImpaired=21932]="FlagVisualImpaired",ee[ee.FlagCommentary=21935]="FlagCommentary",ee[ee.FlagLacing=156]="FlagLacing",ee[ee.Name=21358]="Name",ee[ee.Language=2274716]="Language",ee[ee.LanguageBCP47=2274717]="LanguageBCP47",ee[ee.CodecID=134]="CodecID",ee[ee.CodecPrivate=25506]="CodecPrivate",ee[ee.CodecDelay=22186]="CodecDelay",ee[ee.SeekPreRoll=22203]="SeekPreRoll",ee[ee.DefaultDuration=2352003]="DefaultDuration",ee[ee.Video=224]="Video",ee[ee.PixelWidth=176]="PixelWidth",ee[ee.PixelHeight=186]="PixelHeight",ee[ee.DisplayWidth=21680]="DisplayWidth",ee[ee.DisplayHeight=21690]="DisplayHeight",ee[ee.DisplayUnit=21682]="DisplayUnit",ee[ee.AlphaMode=21440]="AlphaMode",ee[ee.Audio=225]="Audio",ee[ee.SamplingFrequency=181]="SamplingFrequency",ee[ee.Channels=159]="Channels",ee[ee.BitDepth=25188]="BitDepth",ee[ee.SimpleBlock=163]="SimpleBlock",ee[ee.BlockGroup=160]="BlockGroup",ee[ee.Block=161]="Block",ee[ee.BlockAdditions=30113]="BlockAdditions",ee[ee.BlockMore=166]="BlockMore",ee[ee.BlockAdditional=165]="BlockAdditional",ee[ee.BlockAddID=238]="BlockAddID",ee[ee.BlockDuration=155]="BlockDuration",ee[ee.ReferenceBlock=251]="ReferenceBlock",ee[ee.Cluster=524531317]="Cluster",ee[ee.Timestamp=231]="Timestamp",ee[ee.Cues=475249515]="Cues",ee[ee.CuePoint=187]="CuePoint",ee[ee.CueTime=179]="CueTime",ee[ee.CueTrackPositions=183]="CueTrackPositions",ee[ee.CueTrack=247]="CueTrack",ee[ee.CueClusterPosition=241]="CueClusterPosition",ee[ee.Colour=21936]="Colour",ee[ee.MatrixCoefficients=21937]="MatrixCoefficients",ee[ee.TransferCharacteristics=21946]="TransferCharacteristics",ee[ee.Primaries=21947]="Primaries",ee[ee.Range=21945]="Range",ee[ee.Projection=30320]="Projection",ee[ee.ProjectionType=30321]="ProjectionType",ee[ee.ProjectionPoseYaw=30323]="ProjectionPoseYaw",ee[ee.ProjectionPosePitch=30324]="ProjectionPosePitch",ee[ee.ProjectionPoseRoll=30325]="ProjectionPoseRoll",ee[ee.Attachments=423732329]="Attachments",ee[ee.AttachedFile=24999]="AttachedFile",ee[ee.FileDescription=18046]="FileDescription",ee[ee.FileName=18030]="FileName",ee[ee.FileMediaType=18016]="FileMediaType",ee[ee.FileData=18012]="FileData",ee[ee.FileUID=18094]="FileUID",ee[ee.Chapters=272869232]="Chapters",ee[ee.Tags=307544935]="Tags",ee[ee.Tag=29555]="Tag",ee[ee.Targets=25536]="Targets",ee[ee.TargetTypeValue=26826]="TargetTypeValue",ee[ee.TargetType=25546]="TargetType",ee[ee.TagTrackUID=25541]="TagTrackUID",ee[ee.TagEditionUID=25545]="TagEditionUID",ee[ee.TagChapterUID=25540]="TagChapterUID",ee[ee.TagAttachmentUID=25542]="TagAttachmentUID",ee[ee.SimpleTag=26568]="SimpleTag",ee[ee.TagName=17827]="TagName",ee[ee.TagLanguage=17530]="TagLanguage",ee[ee.TagString=17543]="TagString",ee[ee.TagBinary=17541]="TagBinary",ee[ee.ContentEncodings=28032]="ContentEncodings",ee[ee.ContentEncoding=25152]="ContentEncoding",ee[ee.ContentEncodingOrder=20529]="ContentEncodingOrder",ee[ee.ContentEncodingScope=20530]="ContentEncodingScope",ee[ee.ContentCompression=20532]="ContentCompression",ee[ee.ContentCompAlgo=16980]="ContentCompAlgo",ee[ee.ContentCompSettings=16981]="ContentCompSettings",ee[ee.ContentEncryption=20533]="ContentEncryption"}(nb||(nb={}));nb.EBML,nb.Segment,nb.SeekHead,nb.Info,nb.Cluster,nb.Tracks,nb.Cues,nb.Attachments,nb.Chapters,nb.Tags;const jb=new Uint32Array(256);for(let YM=0;YM<256;YM++){let ee=YM<<24;for(let ie=0;ie<8;ie++)ee=2147483648&ee?ee<<1^79764919:ee<<1;jb[YM]=ee>>>0&4294967295}new Uint8Array([9,240]),new Uint8Array([70,1]);const sb=new Uint32Array(256);for(let YM=0;YM<256;YM++){let ee=YM<<24;for(let ie=0;ie<8;ie++)ee=2147483648&ee?ee<<1^79764919:ee<<1;sb[YM]=ee>>>0&4294967295}const Ib=ee=>{let ie=4294967295;for(let He=0;He<ee.length;He++){const ye=ee[He];ie=(ie<<8^sb[ie>>>24^ye])>>>0}return ie},hb=new Uint8Array(16);{const ee=me(hb);hb[0]=0,ee.setUint16(1,45069,!1),ee.setUint16(3,1,!1),hb[5]=193,hb[6]=0,hb[7]=0,ee.setUint16(8,1,!1),ee.setUint16(10,61440,!1),ee.setUint32(12,Ib(hb.subarray(0,12)),!1)}const Nb=new Uint8Array(0);class Gb{constructor(ee,ie,He,ye){let be=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,Me=arguments.length>5?arguments[5]:void 0,Ke=arguments.length>6?arguments[6]:void 0;if(this.data=ee,this.type=ie,this.timestamp=He,this.duration=ye,this.sequenceNumber=be,ee===Nb&&void 0===Me)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===Me&&(Me=ee.byteLength),!(ee instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==ie&&"delta"!==ie)throw new TypeError(\'type must be either "key" or "delta".\');if(!Number.isFinite(He))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(ye)||ye<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(be))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(Me)||Me<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==Ke&&("object"!==typeof Ke||!Ke))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==Ke?.alpha&&!(Ke.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==Ke?.alphaByteLength&&(!Number.isInteger(Ke.alphaByteLength)||Ke.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=Me,this.sideData=Ke??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Nb}get microsecondTimestamp(){return Math.trunc(yi*this.timestamp)}get microsecondDuration(){return Math.trunc(yi*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(){let ee=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.type;if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"===typeof EncodedVideoChunk)throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:ee,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"===typeof EncodedAudioChunk)throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(ee,ie){if(!(ee instanceof EncodedVideoChunk||ee instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const He=new Uint8Array(ee.byteLength);return ee.copyTo(He),new Gb(He,ee.type,ee.timestamp/1e6,(ee.duration??0)/1e6,void 0,void 0,ie)}clone(ee){if(void 0!==ee&&("object"!==typeof ee||null===ee))throw new TypeError("options, when provided, must be an object.");if(void 0!==ee?.data&&!(ee.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==ee?.type&&"key"!==ee.type&&"delta"!==ee.type)throw new TypeError(\'options.type, when provided, must be either "key" or "delta".\');if(void 0!==ee?.timestamp&&!Number.isFinite(ee.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==ee?.duration&&!Number.isFinite(ee.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==ee?.sequenceNumber&&!Number.isFinite(ee.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==ee?.sideData&&("object"!==typeof ee.sideData||null===ee.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new Gb(ee?.data??this.data,ee?.type??this.type,ee?.timestamp??this.timestamp,ee?.duration??this.duration,ee?.sequenceNumber??this.sequenceNumber,this.byteLength,ee?.sideData??this.sideData)}}var rb;!function(ee){ee[ee.PCM=1]="PCM",ee[ee.IEEE_FLOAT=3]="IEEE_FLOAT",ee[ee.ALAW=6]="ALAW",ee[ee.MULAW=7]="MULAW",ee[ee.EXTENSIBLE=65534]="EXTENSIBLE"}(rb||(rb={}));"function"===typeof SuppressedError&&SuppressedError;Symbol.dispose??=Symbol("Symbol.dispose");let Qb=-1/0,eM=-1/0,iM=null;"undefined"!==typeof FinalizationRegistry&&(iM=new FinalizationRegistry((ee=>{const ie=performance.now();"video"===ee.type?(ie-Qb>=1e3&&(di._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you\'re done using them."),Qb=ie),"undefined"!==typeof VideoFrame&&ee.data instanceof VideoFrame&&ee.data.close()):(ie-eM>=1e3&&(di._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you\'re done using them."),eM=ie),"undefined"!==typeof AudioData&&ee.data instanceof AudioData&&ee.data.close())})));const HM=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(HM);Symbol.dispose;new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);Symbol.dispose;new Map,new Map;"function"===typeof SuppressedError&&SuppressedError;class yM{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(ee){}close(){if(this._closingPromise)return;const ee=this._connectedTrack;if(!ee)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===ee.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==ee.output.state&&"finalized"!==ee.output.state&&ee.output._muxer.onTrackClose(ee)})()}async _flushOrWaitForOngoingClose(ee){return this._closingPromise??=(async()=>{await this._flushAndClose(ee),this._closed=!0})()}}class bM extends yM{constructor(ee){if(super(),!RH.includes(ee))throw new TypeError(`Invalid video codec \'${ee}\'. Must be one of: ${RH.join(", ")}.`);this._codec=ee}}const MM=(ee,ie)=>{if(ee.metadata.hasOnlyKeyPackets&&"key"!==ie.type)throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class KM extends bM{constructor(ee){super(ee)}add(ee,ie){if(!(ee instanceof Gb))throw new TypeError("packet must be an EncodedPacket.");if(ee.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(void 0!==ie&&(!ie||"object"!==typeof ie))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),MM(this._connectedTrack,ee),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,ee,ie)}}class UM extends yM{constructor(ee){if(super(),!fH.includes(ee))throw new TypeError(`Invalid audio codec \'${ee}\'. Must be one of: ${fH.join(", ")}.`);this._codec=ee}}class FM extends yM{constructor(ee){if(super(),!TH.includes(ee))throw new TypeError(`Invalid subtitle codec \'${ee}\'. Must be one of: ${TH.join(", ")}.`);this._codec=ee}}class JM{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter((ee=>RH.includes(ee)))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter((ee=>fH.includes(ee)))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter((ee=>TH.includes(ee)))}_codecUnsupportedHint(ee){return""}_isFragmentedIsobmff(){return!1}}class oM extends JM{constructor(){let ee=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!ee||"object"!==typeof ee)throw new TypeError("options must be an object.");if(void 0!==ee.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(ee.fastStart))throw new TypeError("options.fastStart, when provided, must be false, \'in-memory\', \'reserve\', or \'fragmented\'.");if(void 0!==ee.minimumFragmentDuration&&(!Ui(ee.minimumFragmentDuration)||ee.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==ee.onFtyp&&"function"!==typeof ee.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==ee.onMoov&&"function"!==typeof ee.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==ee.onMdat&&"function"!==typeof ee.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==ee.onMoof&&"function"!==typeof ee.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==ee.metadataFormat&&!["mdir","mdta","udta","auto"].includes(ee.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either \'auto\', \'mdir\', \'mdta\', or \'udta\'.");super(),this._options=ee}getSupportedTrackCounts(){const ee=2**32-1;return{video:{min:0,max:ee},audio:{min:0,max:ee},subtitle:{min:0,max:ee},total:{min:0,max:ee}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(ee){return new Sb(ee,this)}_isFragmentedIsobmff(){return"fragmented"===this._options.fastStart}}class RM extends oM{constructor(ee){super(ee)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...RH,...qH,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...TH]}_codecUnsupportedHint(ee){return(new qM).getSupportedCodecs().includes(ee)?" Switching to MOV will grant support for this codec.":""}}class kM extends oM{constructor(ee){super(ee)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...RH,...qH,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...TH]}}class qM extends oM{constructor(ee){super(ee)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...RH,...fH]}_codecUnsupportedHint(ee){return(new RM).getSupportedCodecs().includes(ee)?" Switching to MP4 will grant support for this codec.":""}}const fM=["video","audio","subtitle"];class TM{constructor(ee,ie,He,ye,be){this.id=ee,this.output=ie,this.type=He,this.source=ye,this.metadata=be}isVideoTrack(){return"video"===this.type}isAudioTrack(){return"audio"===this.type}isSubtitleTrack(){return"subtitle"===this.type}canBePairedWith(ee){if(!(ee instanceof TM))throw new TypeError("other must be an OutputTrack.");if(this===ee)return!1;const ie=Ji(this.metadata.group),He=Ji(ee.metadata.group);for(const ye of ie){if(this.type!==ee.type&&He.some((ee=>ye===ee)))return!0;if(He.some((ee=>ye._pairedGroups.has(ee))))return!0}return!1}}class pM extends TM{constructor(ee,ie,He,ye){super(ee,ie,"video",He,ye)}}class XM extends TM{constructor(ee,ie,He,ye){super(ee,ie,"audio",He,ye)}}class zM extends TM{constructor(ee,ie,He,ye){super(ee,ie,"subtitle",He,ye)}}class BM{constructor(){this._pairedGroups=new Set}pairWith(ee){if(!(ee instanceof BM))throw new TypeError("other must be an OutputTrackGroup.");if(this===ee)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(ee),ee._pairedGroups.add(this)}}const EM=ee=>{if(!ee||"object"!==typeof ee)throw new TypeError("metadata must be an object.");if(void 0!==ee.languageCode&&(ie=ee.languageCode,!Hi.test(ie)))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");var ie;if(void 0!==ee.name&&"string"!==typeof ee.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==ee.disposition&&(ee=>{if(!ee||"object"!==typeof ee)throw new TypeError("disposition must be an object.");if(void 0!==ee.default&&"boolean"!==typeof ee.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==ee.primary&&"boolean"!==typeof ee.primary)throw new TypeError("disposition.primary must be a boolean.");if(void 0!==ee.forced&&"boolean"!==typeof ee.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==ee.original&&"boolean"!==typeof ee.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==ee.commentary&&"boolean"!==typeof ee.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==ee.hearingImpaired&&"boolean"!==typeof ee.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==ee.visuallyImpaired&&"boolean"!==typeof ee.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(ee.disposition),void 0!==ee.maximumPacketCount&&(!Number.isInteger(ee.maximumPacketCount)||ee.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(void 0!==ee.bitrate&&(!Number.isFinite(ee.bitrate)||ee.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(void 0!==ee.averageBitrate&&(!Number.isFinite(ee.averageBitrate)||ee.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(void 0!==ee.group&&!(ee.group instanceof BM)&&(!Array.isArray(ee.group)||ee.group.some((ee=>!(ee instanceof BM)))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class gM extends oi{get target(){const ee="Output.target cannot be used when using PathedTarget with an async callback. Use the \'target\' event instead.";if(this._rootTargetPromise)throw new TypeError(ee);const ie=this._getRootTarget();if(Mi(ie))throw new TypeError(ee);return ie}constructor(ee){if(super(),this.state="pending",this.defaultTrackGroup=new BM,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Ne,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!ee||"object"!==typeof ee)throw new TypeError("options must be an object.");if(!(ee.format instanceof JM))throw new TypeError("options.format must be an OutputFormat.");if(!(ee.target instanceof Ab||ee.target instanceof Lb))throw new TypeError("options.target must be a Target or a PathedTarget.");if(ee.target instanceof Ab&&this._rememberTarget(ee.target),void 0!==ee.initTarget&&!(ee.initTarget instanceof Ab)&&"function"!==typeof ee.initTarget)throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(void 0!==ee.onFinalize&&"function"!==typeof ee.onFinalize)throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=ee.format,this.VR=ee.target,this._onFinalize=ee.onFinalize??null,this._initTarget=ee.initTarget??null,this._initTarget instanceof Ab&&this._rememberTarget(this._initTarget),this._muxer=ee.format._createMuxer(this)}_getTargetValidated(ee){Pe(this.VR instanceof Lb);const ie=this.VR.getTarget(ee),He=ee=>{if(!(ee instanceof Ab))throw new TypeError("getTarget must return a Target.");return ee};return Mi(ie)?ie.then(He):He(ie)}async _getTarget(ee){Pe(this.VR instanceof Lb);const ie=await this._getTargetValidated(ee);return this._emit("target",{target:ie,request:ee,isRoot:ee.isRoot}),"canceled"===this.state?await ie._close():this._rememberTarget(ie),ie}_rememberTarget(ee){this._unfinalizedTargets.add(ee),ee.on("finalized",(()=>this._unfinalizedTargets.delete(ee)),{once:!0})}async _getInitTarget(){if(Pe(null!==this._initTarget),this._initTarget instanceof Ab)return this._initTarget;const ee=await this._initTarget();return"canceled"===this.state?await ee._close():this._rememberTarget(ee),ee}_hasInitTarget(){return null!==this._initTarget}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this.VR instanceof Ab)return this._emit("target",{target:this.VR,request:null,isRoot:!0}),this._rootTarget=this.VR,this.VR;const ee={path:this.VR.rootPath,isRoot:!0,mimeType:this.format.mimeType},ie=this._getTargetValidated(ee),He=ie=>("canceled"===this.state?ie._close():this._rememberTarget(ie),this._emit("target",{target:ie,request:ee,isRoot:!0}),this._rootTarget=ie,ie);return Mi(ie)?this._rootTargetPromise=ie.then(He):He(ie)}_getRootWriter(ee){return this._rootWriterPromise??=(async()=>{const ie=await this._getRootTarget(),He=new Pb(ie,"boolean"===typeof ee?ee:ee(ie));return He.start(),He})()}addVideoTrack(ee){let ie=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(ee instanceof bM))throw new TypeError("source must be a VideoSource.");if(EM(ie),void 0!==ie.rotation&&![0,90,180,270].includes(ie.rotation))throw new TypeError(`Invalid video rotation: ${ie.rotation}. Has to be 0, 90, 180 or 270.`);if(void 0!==ie.flip&&"boolean"!==typeof ie.flip)throw new TypeError("metadata.flip, when provided, must be a boolean.");if(void 0!==ie.transformationMatrix&&(!Array.isArray(ie.transformationMatrix)||9!==ie.transformationMatrix.length||!ie.transformationMatrix.every((ee=>Number.isFinite(ee)))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(void 0!==ie.frameRate&&(!Number.isFinite(ie.frameRate)||ie.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${ie.frameRate}. Must be a positive number.`);if(void 0!==ie.hasOnlyKeyPackets&&"boolean"!==typeof ie.hasOnlyKeyPackets)throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(void 0!==ie.canBeTransparent&&"boolean"!==typeof ie.canBeTransparent)throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(void 0!==ie.decoderConfig&&DH({decoderConfig:ie.decoderConfig},ee._codec),void 0!==ie.primingPacket){if(!(ie.primingPacket instanceof Gb))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===ie.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const He={...ie};return He.group??=this.defaultTrackGroup,this._addTrack(new pM(this.tracks.length+1,this,ee,He))}addAudioTrack(ee){let ie=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(ee instanceof UM))throw new TypeError("source must be an AudioSource.");if(EM(ie),void 0!==ie.decoderConfig&&AH({decoderConfig:ie.decoderConfig},ee._codec),void 0!==ie.primingPacket){if(!(ie.primingPacket instanceof Gb))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(void 0===ie.decoderConfig)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const He={...ie};return He.group??=this.defaultTrackGroup,this._addTrack(new XM(this.tracks.length+1,this,ee,He))}addSubtitleTrack(ee){let ie=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(ee instanceof FM))throw new TypeError("source must be a SubtitleSource.");EM(ie);const He={...ie};return He.group??=this.defaultTrackGroup,this._addTrack(new zM(this.tracks.length+1,this,ee,He))}setMetadataTags(ee){if((ee=>{if(!ee||"object"!==typeof ee)throw new TypeError("tags must be an object.");if(void 0!==ee.title&&"string"!==typeof ee.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==ee.description&&"string"!==typeof ee.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==ee.artist&&"string"!==typeof ee.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==ee.album&&"string"!==typeof ee.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==ee.albumArtist&&"string"!==typeof ee.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==ee.trackNumber&&(!Number.isInteger(ee.trackNumber)||ee.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==ee.tracksTotal&&(!Number.isInteger(ee.tracksTotal)||ee.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==ee.discNumber&&(!Number.isInteger(ee.discNumber)||ee.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==ee.discsTotal&&(!Number.isInteger(ee.discsTotal)||ee.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==ee.genre&&"string"!==typeof ee.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==ee.date&&(!(ee.date instanceof Date)||Number.isNaN(ee.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==ee.beatsPerMinute&&(!Number.isInteger(ee.beatsPerMinute)||ee.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(void 0!==ee.lyrics&&"string"!==typeof ee.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==ee.images){if(!Array.isArray(ee.images))throw new TypeError("tags.images, when provided, must be an array.");for(const ie of ee.images){if(!ie||"object"!==typeof ie)throw new TypeError("Each image in tags.images must be an object.");if(!(ie.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!==typeof ie.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(ie.kind))throw new TypeError("Each image.kind must be \'coverFront\', \'coverBack\', or \'unknown\'.")}}if(void 0!==ee.comment&&"string"!==typeof ee.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==ee.raw){if(!ee.raw||"object"!==typeof ee.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const ie of Object.values(ee.raw))if(null!==ie&&"string"!==typeof ie&&(!Array.isArray(ie)||!ie.every((ee=>"string"===typeof ee)))&&!(ie instanceof Uint8Array)&&!(ie instanceof ki)&&!(ie instanceof qi)&&!Ri(ie))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}})(ee),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=ee}_addTrack(ee){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(ee.source._connectedTrack)throw new Error("Source is already used for a track.");const ie=this.format.getSupportedTrackCounts(),He=this.tracks.reduce(((ie,He)=>ie+(He.type===ee.type?1:0)),0),ye=ie[ee.type].max;if(He===ye)throw new Error(0===ye?`${this.format._name} does not support ${ee.type} tracks.`:`${this.format._name} does not support more than ${ye} ${ee.type} track`+(1===ye?"":"s")+".");const be=ie.total.max;if(this.tracks.length===be)throw new Error(`${this.format._name} does not support more than ${be} tracks`+(1===be?"":"s")+" in total.");if(ee.isVideoTrack()){const ie=this.format.getSupportedVideoCodecs();if(0===ie.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(ee.source._codec));if(!ie.includes(ee.source._codec))throw new Error(`Codec \'${ee.source._codec}\' cannot be contained within ${this.format._name}. Supported video codecs are: ${ie.map((ee=>`\'${ee}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(ee.source._codec))}else if(ee.isAudioTrack()){const ie=this.format.getSupportedAudioCodecs();if(0===ie.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(ee.source._codec));if(!ie.includes(ee.source._codec))throw new Error(`Codec \'${ee.source._codec}\' cannot be contained within ${this.format._name}. Supported audio codecs are: ${ie.map((ee=>`\'${ee}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(ee.source._codec))}else if(ee.isSubtitleTrack()){const ie=this.format.getSupportedSubtitleCodecs();if(0===ie.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(ee.source._codec));if(!ie.includes(ee.source._codec))throw new Error(`Codec \'${ee.source._codec}\' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${ie.map((ee=>`\'${ee}\'`)).join(", ")}.`+this.format._codecUnsupportedHint(ee.source._codec))}return this.tracks.push(ee),ee.source._connectedTrack=ee,ee}hasEnoughTracks(){const ee=this.format.getSupportedTrackCounts();for(const He of fM){if(this.tracks.reduce(((ee,ie)=>ee+(ie.type===He?1:0)),0)<ee[He].min)return!1}const ie=ee.total.min;return!(this.tracks.length<ie)}async start(){const ee=this.format.getSupportedTrackCounts();for(const He of fM){const ie=this.tracks.reduce(((ee,ie)=>ee+(ie.type===He?1:0)),0),ye=ee[He].min;if(ie<ye)throw new Error(ye===ee[He].max?`${this.format._name} requires exactly ${ye} ${He} track${1===ye?"":"s"}.`:`${this.format._name} requires at least ${ye} ${He} track${1===ye?"":"s"}.`)}const ie=ee.total.min;if(this.tracks.length<ie)throw new Error(ie===ee.total.max?`${this.format._name} requires exactly ${ie} track`+(1===ie?"":"s")+".":`${this.format._name} requires at least ${ie} track`+(1===ie?"":"s")+".");if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(di._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const ee=this._mutex.acquire();try{await this._muxer.start();const ee=this.tracks.map((ee=>ee.source._start()));await Promise.all(ee)}finally{(await ee)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return"canceled"===this.state?this._cancelPromise??void 0:"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const ee=await this._mutex.acquire();try{const ee=this.tracks.map((ee=>ee.source._flushOrWaitForOngoingClose(!0)));await Promise.all(ee),await Promise.all([...this._unfinalizedTargets].map((ee=>ee._close()))),this._unfinalizedTargets.clear()}finally{ee()}})():void("finalized"===this.state&&di._warn("Output has already been finalized."))}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(di._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const ee=await this._mutex.acquire();try{const ee=this.tracks.map((ee=>ee.source._flushOrWaitForOngoingClose(!1)));if(await Promise.all(ee),await this._muxer.finalize(),this._rootWriterPromise){const ee=await this._rootWriterPromise;ee.finalized||(await ee.flush(),await ee.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(ie){throw this.state="canceled",ie}finally{await Promise.all([...this._unfinalizedTargets].map((ee=>ee._close().catch((()=>{}))))),this._unfinalizedTargets.clear(),ee()}})()}}class OM{constructor(ee,ie,He,ye,be){this.frameDurationS=He,this.onFragment=be,this.firstTimestampUs=void 0,this.lastTimestampUs=void 0,this.output=void 0,this.source=void 0,this.pending=void 0,this.chunkCount=0,this.boxes=[],this.addingTimestampUs=null,this.firstTimestampUs=ie,this.lastTimestampUs=ie;const Me=ee=>{this.boxes.push(ee)};this.output=new gM({format:new RM({fastStart:"fragmented",minimumFragmentDuration:ye,onFtyp:Me,onMoov:Me,onMoof:Me,onMdat:ee=>{Me(ee),this.fragmentDone()}}),target:new cb}),this.source=new KM(ee),this.output.addVideoTrack(this.source),this.pending=this.output.start()}get durationUs(){return this.lastTimestampUs-this.firstTimestampUs}add(ee,ie){const He=new Uint8Array(ee.byteLength);ee.copyTo(He),this.addData(He,ee.type,ee.timestamp,ie)}addData(ee,ie,He,ye){const be=new Gb(ee,ie,(He-this.firstTimestampUs)/1e6,this.frameDurationS),Me=0===this.chunkCount++;this.lastTimestampUs=Math.max(this.lastTimestampUs,He),this.pending=this.pending.then((()=>(this.addingTimestampUs=He,this.source.add(be,Me?{decoderConfig:ye}:void 0))))}async finish(){await this.pending,this.addingTimestampUs=null,await this.output.finalize()}fragmentDone(){var ee;const ie=dM(this.boxes);this.boxes=[],this.onFragment({bytes:ie,endUs:null!==(ee=this.addingTimestampUs)&&void 0!==ee?ee:this.lastTimestampUs+1e6*this.frameDurationS})}}function dM(ee){const ie=new Uint8Array(ee.reduce(((ee,ie)=>ee+ie.byteLength),0));let He=0;for(const ye of ee)ie.set(ye,He),He+=ye.byteLength;return ie}class WM{constructor(ee,ie,He,ye){this.plan=ee,this.emit=He,this.onSlotsLow=ye,this.pending=[],this.pendingBytes=0,this.completeUntilUs=null,this.partStartUs=void 0,this.nextIndex=0,this.partStartUs=ie}get partCount(){return this.nextIndex}addFragment(ee){let{bytes:ie,endUs:He}=ee;this.pendingBytes>0&&this.pendingBytes+ie.byteLength>this.plan.maxBytes&&this.emitPending();let ye=0;for(;ie.byteLength-ye>this.plan.maxBytes-this.pendingBytes;){const ee=this.plan.maxBytes-this.pendingBytes;this.hold(ie.subarray(ye,ye+ee)),ye+=ee,this.emitPending()}this.hold(ie.subarray(ye)),this.completeUntilUs=He,He-this.partStartUs>=1e3*this.plan.partDurationMs*.9&&this.emitPending()}finish(){this.pendingBytes>0&&this.emitPending()}hold(ee){this.pending.push(ee),this.pendingBytes+=ee.byteLength}emitPending(){var ee;const ie=dM(this.pending);this.pending=[],this.pendingBytes=0,this.partStartUs=null!==(ee=this.completeUntilUs)&&void 0!==ee?ee:this.partStartUs,this.emit({index:this.nextIndex++,bytes:ie,completeUntilUs:this.completeUntilUs}),this.nextIndex===this.plan.count-1&&this.onSlotsLow()}}class tM{constructor(ee,ie,He,ye){let be=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,Me=arguments.length>5&&void 0!==arguments[5]?arguments[5]:()=>{};this.segmentDurationMs=ee,this.partPlan=ie,this.post=He,this.onSegmentEncoded=ye,this.journal=be,this.onMuxFailed=Me,this.segment=null,this.decoderConfig=null,this.pendingCutUs=null,this.cutRequested=!1,this.keyFrameMissed=!1,this.epochOffsetMs=1/0,this.finishing=Promise.resolve(),this.nextJournalId=0}noteFrameArrival(ee){const ie=De()-ee;(ie<this.epochOffsetMs||ie-this.epochOffsetMs>1e3)&&(this.epochOffsetMs=ie)}recordingMs(ee){return ee/1e3+this.epochOffsetMs}requestCut(){this.cutRequested=!0}needsKeyFrame(ee){const ie=null===this.segment?0:(ee-this.segment.mp4.firstTimestampUs)/1e3;(this.cutRequested||null===this.pendingCutUs&&(null===this.segment||ie>=this.segmentDurationMs))&&(this.pendingCutUs=ee);const He=this.keyFrameMissed||this.pendingCutUs===ee;return this.cutRequested=!1,this.keyFrameMissed=!1,He}onChunk(ee,ie,He){if(null!==ie&&void 0!==ie&&ie.decoderConfig&&(this.decoderConfig=ie.decoderConfig),null!==this.pendingCutUs&&ee.timestamp>=this.pendingCutUs){if("key"!==ee.type)return this.keyFrameMissed=!0,0;this.closeSegment(!0),this.segment=this.openSegment(ee.timestamp,He),this.pendingCutUs=null}if(null===this.segment)return console.warn("Session replay chunk arrived with no open segment; dropping it."),0;const ye=this.segment;if(null===ye.journalHeader)return ye.mp4.add(ee,this.decoderConfig),ee.byteLength;const be=new Uint8Array(ee.byteLength);return ee.copyTo(be),ye.mp4.addData(be,ee.type,ee.timestamp,this.decoderConfig),ye.chunkTimestampsUs.push(ee.timestamp),ye.unjournaled.push({recordingId:ye.journalHeader.recordingId,segmentId:ye.journalId,index:ye.chunkCount++,timestampUs:ee.timestamp,key:"key"===ee.type,data:be}),performance.now()-ye.lastJournalMs>=250&&this.journalChunks(ye),ee.byteLength}openSegment(ee,ie){const He=this.nextJournalId++,ye=null!==this.journal&&null!==this.decoderConfig?{recordingId:this.journal.recordingId,segmentId:He,containerCodec:ie.containerCodec,codec:ie.codec,width:ie.width,height:ie.height,fps:ie.fps,decoderConfig:this.decoderConfig,firstTimestampUs:ee,epochOffsetMs:this.epochOffsetMs}:null,be=[],Me=new WM(this.partPlan,ee,(Me=>{this.postPart(He,ie,ee,Me,null===ye?null:be)}),(()=>{var ee;(null===(ee=this.segment)||void 0===ee?void 0:ee.journalId)===He&&this.requestCut()})),Ke=this.partPlan.keyframeIntervalMs/1e3*.9,Ue=new OM(ie.containerCodec,ee,1/ie.fps,Ke,(ee=>{Me.addFragment(ee)}));return this.post({type:"videoSegmentOpened",journalId:He}),{mp4:Ue,parts:Me,format:ie,journalId:He,journalHeader:ye,unjournaled:[],chunkTimestampsUs:be,chunkCount:0,lastJournalMs:performance.now()}}postPart(ee,ie,He,ye,be){const{width:Me,height:Ke,codec:Ue,fps:Fe}=ie,{startMs:Je}=function(ee,ie,He,ye){const be=ee/1e3+He;return{startMs:be,endMs:be+ie/1e3+1e3/ye}}(He,0,this.epochOffsetMs,Fe),{completeUntilUs:oe}=ye,Re=null===oe?Je:this.recordingMs(oe),ke=ye.bytes.buffer,qe=null===be||null===oe?null:function(ee,ie){let He=0,ye=ee.length;for(;He<ye;){const be=He+ye>>1;ee[be]<ie?He=be+1:ye=be}return He}(be,oe);this.post({type:"videoPart",journalId:ee,index:ye.index,bytes:ke,meta:{startMs:Je,endMs:Re,width:Me,height:Ke,codec:Ue},completeUntilUs:oe,completeUntilIndex:qe},[ke])}journalChunks(ee){const ie=ee.journalHeader;null!==this.journal&&null!==ie&&0!==ee.unjournaled.length&&(ie.epochOffsetMs=this.epochOffsetMs,this.journal.journal.appendVideo({...ie},ee.unjournaled),ee.unjournaled=[],ee.lastJournalMs=performance.now())}closeSegment(ee){const ie=this.segment;this.segment=null,this.pendingCutUs=null,null!==ie&&(ee&&this.onSegmentEncoded(),this.journalChunks(ie),this.finishing=this.finishing.then((async()=>{let ee=null;try{await ie.mp4.finish()}catch(He){ee=He}ie.parts.finish(),this.post({type:"videoSegmentClosed",journalId:ie.journalId,parts:ie.parts.partCount}),null!==ee&&(console.error("Failed to finish a session replay video segment.",ee),this.onMuxFailed(ee instanceof Error?ee.message:String(ee)))})).catch((ee=>{console.error("Failed to close a session replay video segment.",ee)})))}whenFinished(){return this.finishing}}function ZM(ee,ie){return null!==ee&&ie>=ee}class wM{constructor(ee,ie,He,ye,be){let Me=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.config=ee,this.cssSize=He,this.post=ye,this.encoderPreference=be,this.quality=new Re,this.limiter=void 0,this.segmenter=void 0,this.scaler=new ge,this.still=void 0,this.scalerFailed=!1,this.backingSize=null,this.active=null,this.operations=Promise.resolve(),this.suspended=!1,this.hidden=!1,this.unavailable=!1,this.firstViableCandidate=0,this.encoderFailures=0,this.refusedFrames=0,this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.backpressureDropsSinceHealth=0,this.captureFps=void 0,this.lastKeyframeUs=-1/0,this.capturePaused=!1,this.stats=void 0,this.statsWindowStartMs=performance.now(),this.limiter=new pe(ee.maxFps),this.captureFps=ee.maxFps,this.segmenter=new tM(ee.segmentDurationMs,ie,ye,(()=>{this.encoderFailures=0}),Me,(ee=>{this.stopVideo(`Muxer failed: ${ee}`)})),this.still=new te(ye),this.stats=this.emptyStats()}handleFrame(ee,ie,He){const ye=performance.now();try{this.stats.deliveredFrames++;const be=ee.timestamp/1e3;if(this.segmenter.noteFrameArrival(be),this.unavailable||this.hidden||this.suspended)return;if(!this.limiter.shouldKeep(be))return void this.stats.droppedForFpsCap++;if(this.still.offer(ee,this.segmenter.recordingMs(ee.timestamp)),null===He)return void(this.capturePaused||(this.capturePaused=!0,this.flushSegment()));if(this.capturePaused=!1,this.noteBackingSize(ie),this.noteCaptureFps(He,ye),null===this.active)return void this.exclusive((()=>this.configureEncoder()));if(ZM(this.rebuildDueMs,ye)||ZM(this.fpsRebuildDueMs,ye))return void this.rebuild();if(this.active.encoder.encodeQueueSize>=3)return this.stats.droppedForBackpressure++,void this.backpressureDropsSinceHealth++;this.encode(this.active,ee)}finally{ee.close();const ie=performance.now()-ye;this.stats.workerBusyMs+=ie,this.stats.maxWorkerTaskMs=Math.max(this.stats.maxWorkerTaskMs,ie),this.maybePostStats(ye)}}resize(ee){0!==ee.width&&0!==ee.height&&(this.cssSize=ee,this.scheduleRebuildIfSizeChanged())}updateHealth(ee,ie){if(this.hidden)return void(this.backpressureDropsSinceHealth=0);const He=this.quality.update({nowMs:performance.now(),encoderBackpressureDrops:this.backpressureDropsSinceHealth,gameFps:ee,pingMs:ie});this.backpressureDropsSinceHealth=0,He&&(this.post({type:"qualityChanged",level:this.quality.getLevelIndex(),maxFps:this.levelMaxFps(),reason:this.quality.getLastChangeReason()}),this.rebuildDueMs=performance.now())}setHidden(ee){return this.hidden=ee,ee?this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder()})):(this.limiter.reset(),this.quality.restartWarmUp(),Promise.resolve())}cutAtNextFrame(){this.segmenter.requestCut()}gameJoined(){this.cutAtNextFrame(),this.quality.restartWarmUp()}flushSegment(){return this.exclusive((()=>this.drainAndCloseSegment()))}exclusive(ee){this.suspended=!0;const ie=this.operations.then(ee).catch((ee=>{console.error("Session replay encoder operation failed.",ee)})).finally((()=>{this.operations===ie&&(this.suspended=!1)}));return this.operations=ie,ie}rebuild(){return this.exclusive((async()=>{await this.drainAndCloseSegment(),this.closeEncoder(),await this.configureEncoder()}))}closeEncoder(){var ee;null===(ee=this.active)||void 0===ee||ee.encoder.close(),this.active=null}async drainAndCloseSegment(){const ee=this.active;null===ee||await async function(ee,ie){let He;const ye=new Promise((ee=>{He=setTimeout((()=>{ee(!1)}),ie)}));try{return await Promise.race([ee.then((()=>!0)),ye])}finally{clearTimeout(He)}}(ee.encoder.flush(),5e3)?this.segmenter.closeSegment(!0):this.failEncoder(ee,"flush timed out")}encode(ee,ie){const He=this.segmenter.needsKeyFrame(ie.timestamp)||ie.timestamp-this.lastKeyframeUs>=1e3*this.config.keyframeIntervalMs;He&&(this.lastKeyframeUs=ie.timestamp);const ye=this.scaleToEncoder(ee,ie);try{ee.encoder.encode(ye,{keyFrame:He})}catch(be){return void(be instanceof DOMException&&("InvalidStateError"===be.name||"EncodingError"===be.name)?this.failEncoder(ee,be.message):++this.refusedFrames>=30?this.failEncoder(ee,`refused 30 frames in a row: ${String(be)}`):1===this.refusedFrames&&console.warn("Session replay dropped a frame its encoder refused.",be))}finally{ye!==ie&&ye.close()}this.refusedFrames=0,this.stats.encodedFrames++}scaleToEncoder(ee,ie){let He=ie;if(!this.scalerFailed)try{He=this.scaler.scale(ie,ee.size)}catch(ye){this.scalerFailed=!0,console.warn("Session replay frame scaling failed; encoding frames at the canvas size.",ye)}return He.displayWidth===ee.size.width&&He.displayHeight===ee.size.height||(ee.sentMismatchedFrame=!0),He}onEncoderOutput(ee,ie,He){const ye=performance.now();this.stats.encodedBytes+=this.segmenter.onChunk(ee,ie,{containerCodec:He.candidate.containerCodec,codec:He.candidate.config.codec,width:He.size.width,height:He.size.height,fps:He.fps}),this.stats.workerBusyMs+=performance.now()-ye}noteBackingSize(ee){null!==this.backingSize&&ke(this.backingSize,ee)||(this.backingSize=ee,this.scheduleRebuildIfSizeChanged())}noteCaptureFps(ee,ie){this.captureFps=ee,null!==this.active&&Math.abs(this.encodeFps()-this.active.fps)>.3*this.active.fps?this.fpsRebuildDueMs??=ie+2e3:this.fpsRebuildDueMs=null}targetSize(){var ee;const ie=Math.floor(this.config.maxMacroblocks*this.quality.getLevel().areaScale);return function(ee,ie,He){const ye=ie.width*ie.height<ee.width*ee.height?ie:ee;let be=qe(Math.max(ye.width,64)),Me=qe(Math.max(ye.height,64));if(fe({width:be,height:Me})>He){const ee=be,ie=Me;for(be=qe(be*Math.sqrt(16*He*16/(be*Me))),Me=qe(be*ie/ee);fe({width:be,height:Me})>He;)be-=2,Me=qe(be*ie/ee)}return{width:be,height:Me}}(this.cssSize,null!==(ee=this.backingSize)&&void 0!==ee?ee:this.cssSize,ie)}scheduleRebuildIfSizeChanged(){null===this.active||ke(this.active.size,this.targetSize())||(this.rebuildDueMs=performance.now()+500)}async configureEncoder(){if(this.unavailable)return;const ee=this.quality.getLevel(),ie=this.encodeFps(),He=this.targetSize(),ye=function(ee){const ie={width:ee.width,height:ee.height,bitrate:ee.bitrate,framerate:ee.maxFps},He=[],ye=[ee.preferSoftware?"prefer-software":"prefer-hardware","no-preference"],be=ee.preferQualityLatency?Ee:Be;for(const Me of ye)for(const ee of Xe)for(const ye of ze)for(const Ke of be)He.push({config:{...ie,codec:ee,hardwareAcceleration:Me,bitrateMode:ye,latencyMode:Ke,avc:{format:"avc"}},containerCodec:"avc"});return He.push({config:{...ie,codec:"vp09.00.10.08",hardwareAcceleration:"no-preference",bitrateMode:"variable",latencyMode:"realtime"},containerCodec:"vp9"}),He}({...He,bitrate:Math.round(Te(this.config,He,ee.areaScale)*ie/this.config.maxFps),maxFps:ie,...this.encoderPreference});let be=null,Me=0;for(let Je=this.firstViableCandidate;Je<ye.length&&null===be;Je++){const ee=await VideoEncoder.isConfigSupported(ye[Je].config).catch((ee=>(console.warn("VideoEncoder.isConfigSupported threw.",ye[Je].config,ee),null)));null!==ee&&void 0!==ee&&ee.supported&&(be=ye[Je],Me=Je,this.firstViableCandidate=Je)}if(null===be)return void this.markUnavailable(`No supported encoder config at ${He.width}x${He.height}`);const Ke=new VideoEncoder({output:(ee,ie)=>{this.onEncoderOutput(ee,ie,Ue)},error:ee=>{this.failEncoder(Ue,ee.message)}}),Ue={encoder:Ke,candidates:ye,candidateIndex:Me,candidate:be,size:He,fps:ie,sentMismatchedFrame:!1};this.active=Ue,this.refusedFrames=0,this.limiter.setMaxFps(this.levelMaxFps()),this.rebuildDueMs=null,this.fpsRebuildDueMs=null,this.lastKeyframeUs=-1/0;try{Ke.configure(be.config)}catch(Fe){return void this.failEncoder(Ue,Fe instanceof Error?Fe.message:String(Fe))}this.scheduleRebuildIfSizeChanged()}levelMaxFps(){return Math.max(8,Math.round(this.config.maxFps*this.quality.getLevel().fpsScale))}encodeFps(){return Math.max(1,Math.min(this.levelMaxFps(),Math.round(this.captureFps)))}failEncoder(ee,ie){console.error("Session replay encoder failed.",ee.candidate.config,ie),this.active===ee&&(this.active=null,"closed"!==ee.encoder.state&&ee.encoder.close(),this.segmenter.closeSegment(!1),this.encoderFailures++,this.firstViableCandidate=function(ee,ie,He){var ye;let be=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const Me=null===(ye=ee[ie])||void 0===ye?void 0:ye.config.hardwareAcceleration;if(!("prefer-hardware"===Me&&He||"no-preference"!==Me&&be))return ie+1;for(let Ke=ie+1;Ke<ee.length;Ke++)if(ee[Ke].config.hardwareAcceleration!==Me)return Ke;return ee.length}(ee.candidates,ee.candidateIndex,ee.sentMismatchedFrame,3===this.encoderFailures),this.encoderFailures>=4&&this.markUnavailable(`Encoder failed ${this.encoderFailures} times: ${ie}`))}stopVideo(ee){if(this.unavailable)return;const ie=this.active;this.active=null,null!==ie&&"closed"!==ie.encoder.state&&ie.encoder.close(),this.segmenter.closeSegment(!1),this.markUnavailable(ee)}markUnavailable(ee){console.warn(`Session replay video stopped: ${ee}`),this.unavailable=!0,this.segmenter.whenFinished().then((()=>{this.post({type:"videoUnavailable",reason:ee})}))}maybePostStats(ee){var ie,He,ye,be;const Me=ee-this.statsWindowStartMs;if(Me<5e3)return;const Ke=this.active;this.post({type:"stats",stats:{...this.stats,windowMs:Me,qualityLevel:this.quality.getLevelIndex(),codec:null!==(ie=null===Ke||void 0===Ke?void 0:Ke.candidate.config.codec)&&void 0!==ie?ie:null,hardwareAcceleration:null!==(He=null===Ke||void 0===Ke?void 0:Ke.candidate.config.hardwareAcceleration)&&void 0!==He?He:null,encodeWidth:null!==(ye=null===Ke||void 0===Ke?void 0:Ke.size.width)&&void 0!==ye?ye:0,encodeHeight:null!==(be=null===Ke||void 0===Ke?void 0:Ke.size.height)&&void 0!==be?be:0}}),this.stats=this.emptyStats(),this.statsWindowStartMs=ee}emptyStats(){return{windowMs:0,deliveredFrames:0,encodedFrames:0,droppedForFpsCap:0,droppedForBackpressure:0,workerBusyMs:0,maxWorkerTaskMs:0,encodedBytes:0,qualityLevel:0,codec:null,hardwareAcceleration:null,encodeWidth:0,encodeHeight:0}}}let DM=null,PM=0;function AM(ee){let ie=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];self.postMessage(ee,{transfer:ie})}self.onmessage=ee=>{const ie=ee.data;switch(ie.type){case"init":DM=new wM(ie.videoConfig,ie.partPlan,ie.cssSize,AM,ie.encoderPreference,ie.journalRecordingId&&Je.supported?{recordingId:ie.journalRecordingId,journal:new Je}:null);break;case"frame":if(null===DM){console.warn("Session replay video worker got a frame before its pipeline started"),ie.image.close();break}!function(ee,ie,He,ye,be){if(ie instanceof VideoFrame)return void ee.handleFrame(ie,ye,be);let Me;try{Me=new VideoFrame(ie,{timestamp:He})}catch(Ke){return 0===PM++&&console.warn("Session replay couldn\'t make a video frame of a canvas bitmap; skipping frames until it can.",Ke),void(30===PM&&ee.stopVideo(`Bitmap frames keep failing: ${Ke instanceof Error?Ke.message:String(Ke)}`))}finally{ie.close()}PM=0,ee.handleFrame(Me,ye,be)}(DM,ie.image,ie.timestampUs,ie.OR,ie.captureFps);break;case"resize":DM.resize(ie.cssSize);break;case"health":DM.updateHealth(ie.gameFps,ie.pingMs);break;case"hidden":DM.setHidden(ie.hidden);break;case"flush":DM.flushSegment();break;case"cut":DM.cutAtNextFrame();break;case"gameJoined":DM.gameJoined()}}})();', "Worker", void 0, He.p + "sessionReplayVideo.worker.e6609570.worker.js")
    }

    function Ji(ee) {
      return Math.max(2, 2 * Math.floor(ee / 2))
    }

    function oi(ee) {
      return Math.ceil(ee.width / 16) * Math.ceil(ee.height / 16)
    }
    class Ri {
      constructor(ee) {
        this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / ee
      }
      setMaxFps(ee) {
        this.intervalMs = 1e3 / ee
      }
      shouldKeep(ee) {
        return !(ee < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = ee - this.nextDueMs > this.intervalMs ? ee + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
      }
      reset() {
        this.nextDueMs = -1 / 0
      }
    }
    class ki {
      constructor(ee, ie, He) {
        this.budgetMsPerSecond = ee, this.minFps = ie, this.smoothedCostMs = He
      }
      get averageCostMs() {
        return this.smoothedCostMs
      }
      get paused() {
        return this.affordableFps() < this.minFps
      }
      record(ee) {
        const ie = this.paused ? .5 : .05;
        this.smoothedCostMs += (ee - this.smoothedCostMs) * ie
      }
      maxFps(ee) {
        return this.paused ? .1 : Math.min(ee, this.affordableFps())
      }
      affordableFps() {
        return this.budgetMsPerSecond / this.smoothedCostMs
      }
    }
    class qi {
      static isSupported() {
        const ee = globalThis.CanvasCaptureMediaStream;
        return ("undefined" !== typeof CanvasCaptureMediaStreamTrack && "requestFrame" in CanvasCaptureMediaStreamTrack.prototype || void 0 !== ee && "requestFrame" in ee.prototype) && "function" === typeof HTMLCanvasElement.prototype.captureStream && "requestVideoFrameCallback" in HTMLVideoElement.prototype
      }
      constructor(ee, ie, He) {
        this.onFrame = ie, this.stream = void 0, this.requester = void 0, this.video = document.createElement("video"), this.closed = !1, this.onVideoFrame = () => {
          this.closed || (this.onFrame(this.video), this.video.requestVideoFrameCallback(this.onVideoFrame))
        }, this.stream = ee.captureStream(0);
        const ye = this.stream.getVideoTracks()[0];
        this.requester = "requestFrame" in ye ? ye : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(He), this.video.requestVideoFrameCallback(this.onVideoFrame)
      }
      request() {
        this.requester.requestFrame()
      }
      close() {
        this.closed = !0;
        for (const ee of this.stream.getTracks()) ee.stop();
        this.video.srcObject = null
      }
    }
    class fi {
      constructor(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
        this.worker = ee, this.grab = ye, this.onUnavailable = be, this.render = null, this.stream = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, this.loggedPause = !1, this.budgetMsPerSecond = void 0, this.frameCostFloorMs = void 0, this.budgetMsPerSecond = He.msPerSecond, this.frameCostFloorMs = He.frameCostFloorMs, this.budget = new ki(this.budgetMsPerSecond, 5, this.frameCostFloorMs), this.wantedFps = ie, this.captureFps = this.budgetedFps(), this.frameLimiter = new Ri(this.captureFps)
      }
      get frameCost() {
        return {
          averageMs: this.budget.averageCostMs,
          fps: this.captureFps,
          grabPath: this.grab.path
        }
      }
      start(ee) {
        if (this.stop(), this.render = ee, "stream" === this.grab.path) {
          const ie = new qi(ee.canvas, (ee => {
            this.onStreamFrame(ee)
          }), (ee => {
            this.stream === ie && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${ee instanceof Error?ee.message:String(ee)}`))
          }));
          this.stream = ie
        }
      }
      stop() {
        var ee;
        this.render = null, this.pendingGrab = null, null === (ee = this.stream) || void 0 === ee || ee.close(), this.stream = null
      }
      setMaxFps(ee) {
        this.wantedFps = ee, this.applyFps()
      }
      onAfterRender() {
        const ee = performance.timeOrigin + performance.now(),
          ie = this.render;
        if (null === ie) return;
        const He = performance.now();
        if (null !== this.pendingGrab) {
          if (He - this.pendingGrab.startMs < 1e3) return;
          return this.pendingGrab = null, void this.grabFailed(new Error("A canvas grab didn't settle within a second"))
        }
        if (!this.frameLimiter.shouldKeep(ee)) return;
        const ye = {
          startMs: He,
          timestampUs: Math.round(1e3 * ee),
          OR: {
            width: ie.canvas.width,
            height: ie.canvas.height
          },
          syncMs: 0,
          paused: this.isPaused()
        };
        null !== this.stream ? this.requestStreamFrame(this.stream, ye) : "bitmap" === this.grab.path ? this.grabBitmap(ie.canvas, ye) : this.grabVideoFrame(ie.canvas, ye)
      }
      requestStreamFrame(ee, ie) {
        this.pendingGrab = ie;
        try {
          ee.request()
        } catch (He) {
          return this.pendingGrab = null, void this.grabFailed(He)
        }
        ie.syncMs = performance.now() - ie.startMs
      }
      grabVideoFrame(ee, ie) {
        let He;
        try {
          He = new VideoFrame(ee, {
            timestamp: ie.timestampUs
          })
        } catch (ye) {
          return void this.grabFailed(ye)
        }
        this.deliver(He, ie), this.recordCost(Math.max(2 * (performance.now() - ie.startMs), this.frameCostFloorMs))
      }
      grabBitmap(ee, ie) {
        const He = this.grab.cssSize(),
          ye = function(ee, ie, He) {
            const ye = ie.width * ie.height < ee.width * ee.height ? ie : ee;
            let be = Ji(Math.max(ye.width, 64)),
              Me = Ji(Math.max(ye.height, 64));
            if (oi({
                width: be,
                height: Me
              }) > He) {
              const ee = be,
                ie = Me;
              for (be = Ji(be * Math.sqrt(16 * He * 16 / (be * Me))), Me = Ji(be * ie / ee); oi({
                  width: be,
                  height: Me
                }) > He;) be -= 2, Me = Ji(be * ie / ee)
            }
            return {
              width: be,
              height: Me
            }
          }(0 === He.width ? ie.OR : He, ie.OR, this.grab.maxMacroblocks);
        this.pendingGrab = ie, createImageBitmap(ee, {
          resizeWidth: ye.width,
          resizeHeight: ye.height,
          resizeQuality: "low"
        }).then((ee => {
          this.pendingGrab === ie ? (this.pendingGrab = null, this.deliverMeasured(ee, ie)) : ee.close()
        }), (ee => {
          this.pendingGrab === ie && (this.pendingGrab = null, this.grabFailed(ee))
        })), ie.syncMs = performance.now() - ie.startMs
      }
      onStreamFrame(ee) {
        const ie = this.pendingGrab;
        if (null === ie) return;
        this.pendingGrab = null;
        const He = performance.now();
        let ye;
        try {
          ye = new VideoFrame(ee, {
            timestamp: ie.timestampUs
          })
        } catch (be) {
          return void this.grabFailed(be)
        }
        ie.syncMs += performance.now() - He, this.deliverMeasured(ye, ie)
      }
      deliverMeasured(ee, ie) {
        const He = performance.now();
        this.deliver(ee, ie), this.recordCost(Math.max(ie.syncMs + performance.now() - He, this.frameCostFloorMs))
      }
      deliver(ee, ie) {
        const He = {
          type: "frame",
          image: ee,
          timestampUs: ie.timestampUs,
          OR: ie.OR,
          captureFps: ie.paused ? null : this.captureFps
        };
        try {
          this.worker.postMessage(He, [ee])
        } catch (ye) {
          return ee.close(), void this.grabFailed(ye)
        }
        this.failedGrabs = 0, this.unrecoverableGrabFailures = 0
      }
      recordCost(ee) {
        this.budget.record(ee), this.applyFps()
      }
      grabFailed(ee) {
        0 === this.failedGrabs++ && console.warn("Session replay couldn't grab a canvas frame; skipping frames until it can.", ee);
        !(ee instanceof DOMException && "InvalidStateError" === ee.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${ee instanceof Error?ee.message:String(ee)}`))
      }
      applyFps() {
        const ee = this.budgetedFps();
        ee !== this.captureFps && (this.captureFps = ee, this.frameLimiter.setMaxFps(ee), this.isPaused() && !this.loggedPause && (this.loggedPause = !0, console.warn(`Session replay paused video: ${this.grab.path} grabs cost ${this.budget.averageCostMs.toFixed(1)} ms, over a budget of ${this.budgetMsPerSecond} ms/s at 5 fps.`)))
      }
      isPaused() {
        return this.budgetMsPerSecond > 0 && this.budget.paused
      }
      budgetedFps() {
        return this.budgetMsPerSecond > 0 ? this.budget.maxFps(this.wantedFps) : this.wantedFps
      }
    }
    var Ti = He(1260);
    class Xi {
      constructor(ee) {
        this.events = ee, this.canvas = null, this.resizeObserver = null, this.listeners = null, this.size = {
          width: 0,
          height: 0
        }
      }
      get cssSize() {
        return this.size
      }
      check() {
        const ee = (0, Ti.A)().gameRender();
        if (null === ee || ee.canvas === this.canvas) return ee;
        const ie = null !== this.canvas;
        return this.canvas = ee.canvas, this.observe(ee.canvas), ie ? this.events.onCanvasSwapped(ee) : this.events.onFirstCanvas(ee), ee
      }
      stop() {
        var ee, ie;
        null === (ee = this.resizeObserver) || void 0 === ee || ee.disconnect(), null === (ie = this.listeners) || void 0 === ie || ie.abort()
      }
      observe(ee) {
        this.stop(), this.listeners = new AbortController;
        const {
          signal: ie
        } = this.listeners;
        ee.addEventListener("webglcontextlost", (() => {
          this.events.onContextLost()
        }), {
          signal: ie
        }), ee.addEventListener("webglcontextrestored", (() => {
          this.events.onContextRestored()
        }), {
          signal: ie
        });
        const He = ee.getBoundingClientRect();
        this.size = {
          width: Math.round(He.width),
          height: Math.round(He.height)
        }, this.resizeObserver = new ResizeObserver((ee => {
          const ie = ee[ee.length - 1].contentRect,
            He = {
              width: Math.round(ie.width),
              height: Math.round(ie.height)
            };
          0 !== He.width && 0 !== He.height && (this.size = He, this.events.onResized(He))
        })), this.resizeObserver.observe(ee)
      }
    }
    const zi = {
        desktop: 12582912,
        mobile: 6291456,
        tablet: 6291456
      },
      Bi = 12e4;
    class Ei extends Error {
      constructor(ee, ie) {
        super(ie), this.reason = ee
      }
    }
    class gi {
      constructor(ee, ie, He, ye, be) {
        this.access = ee, this.uploadToken = ie, this.transport = He, this.callbacks = ye, this.options = be, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
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
      owns(ee) {
        return this.segments.has(ee)
      }
      open(ee, ie) {
        this.segments.set(ee, {
          journalId: ee,
          sequence: ie,
          parts: [],
          sentParts: 0,
          totalParts: null,
          bytes: 0,
          cut: !1
        })
      }
      addPart(ee, ie) {
        const He = this.segments.get(ee);
        if (void 0 !== He) {
          He.parts.push(ie), He.bytes += ie.bytes.byteLength, !He.cut && null === He.totalParts && He.bytes > this.options.maxHeldBytes / 2 && (He.cut = !0, this.callbacks.cut());
          for (const ee of this.segments.values()) {
            if (this.heldBytes() <= this.options.maxHeldBytes) break;
            this.handBack(ee, "byteCap"), this.downUntilMs = this.options.nowMs() + Bi
          }
          this.pump()
        }
      }
      close(ee, ie) {
        const He = this.segments.get(ee);
        void 0 !== He && (He.totalParts = ie, this.pump())
      }
      forget(ee) {
        this.segments.delete(ee)
      }
      releaseAll() {
        for (const ee of this.segments.values()) ee.sentParts > 0 && this.transport.release({
          token: this.access.token,
          sequence: ee.sequence
        }) && this.stats.releases++
      }
      heldBytes() {
        let ee = 0;
        for (const ie of this.segments.values()) ee += ie.bytes;
        return ee
      }
      async pump() {
        if (!this.sending) {
          this.sending = !0;
          for (let ie = this.nextWork(); null !== ie; ie = this.nextWork()) try {
            await this.advance(ie)
          } catch (ee) {
            console.warn(`Session replay part joiner failed on video segment ${ie.sequence}; uploading it straight to storage.`, ee), ee instanceof Ei || (this.downUntilMs = this.options.nowMs() + Bi), this.handBack(ie, ee instanceof Ei ? ee.reason : "unreachable")
          }
          this.sending = !1
        }
      }
      nextWork() {
        for (const ee of this.segments.values())
          if (ee.sentParts < ee.parts.length || ee.totalParts === ee.parts.length) return ee;
        return null
      }
      async advance(ee) {
        if (ee.sentParts < ee.parts.length) return this.expectHeld(await this.sendPart(ee, ee.parts[ee.sentParts])), void ee.sentParts++;
        for (let ie = 0; this.owns(ee.journalId); ie++) {
          const He = await this.request((() => this.transport.finish({
            token: this.access.token,
            uploadToken: this.uploadToken,
            sequence: ee.sequence,
            parts: ee.parts.length
          })));
          if (!this.owns(ee.journalId)) return;
          if ("stored" === He.outcome && He.stored.parts === ee.parts.length) return this.segments.delete(ee.journalId), void this.callbacks.stored(ee.journalId, ee.sequence, He.stored);
          if ("missing" !== He.outcome || ie >= 2) throw this.failure(He);
          for (const ie of He.parts) {
            if (!this.owns(ee.journalId)) return;
            const He = ee.parts[ie];
            if (void 0 === He) throw new Ei("missing", `the joiner asked for part ${ie} of ${ee.parts.length}`);
            this.expectHeld(await this.sendPart(ee, He))
          }
        }
      }
      sendPart(ee, ie) {
        return this.request((() => this.transport.postPart({
          token: this.access.token,
          uploadToken: this.uploadToken,
          sequence: ee.sequence,
          index: ie.index,
          meta: {
            ...ie.meta,
            startMs: Math.round(ie.meta.startMs),
            endMs: Math.round(ie.meta.endMs)
          },
          completeUntilUs: ie.completeUntilUs
        }, ie.bytes)))
      }
      expectHeld(ee) {
        if ("buffered" !== ee.outcome) throw this.failure(ee)
      }
      failure(ee) {
        if ("refused" === ee.outcome) {
          this.refused = !0;
          for (const ee of [...this.segments.values()]) this.handBack(ee, "refused");
          return new Ei("refused", `refused: ${ee.reason}`)
        }
        const ie = "stored" === ee.outcome ? "shortStored" : "missing" === ee.outcome ? "missing" : "closed";
        return new Ei(ie, `answered ${ee.outcome}`)
      }
      async request(ee) {
        for (let He = 1;; He++) {
          try {
            return await ee()
          } catch (ie) {
            if (He >= 3) throw ie
          }
          await this.options.wait(1e3 * 2 ** (He - 1))
        }
      }
      handBack(ee, ie) {
        this.segments.delete(ee.journalId) && (this.stats.handBacks[ie]++, this.callbacks.handBack(ee.journalId, ee.sequence, ee.parts, ee.totalParts))
      }
    }
    const Oi = ue.d;
    class di {
      constructor(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        this.transport = ee, this.uploadToken = ie, this.nextTelemetrySequence = He, this.queuedDomAfter = ye, this.nowMs = be, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
      }
      prefetch(ee, ie, He, ye, be) {
        const Me = this.segment(ee, ie, He, ye);
        if (void 0 === be) return void this.request(Me, 0);
        const Ke = be.then((() => {
          this.stopped || this.segments.get(ti(ee, ie)) !== Me || Me.requested || this.request(Me, 0), this.videoDue === Ke && (this.videoDue = null)
        }));
        this.videoDue = Ke
      }
      async takeDom(ee) {
        await this.videoDue, this.domTaken = Math.max(this.domTaken, ee);
        const ie = this.dom;
        if ((null === ie || void 0 === ie ? void 0 : ie.sequence) !== ee) return;
        this.dom = null;
        const He = await ie.upload;
        return void 0 !== He && Wi(He, this.nowMs()) ? He.upload : void 0
      }
      async get(ee, ie, He, ye, be) {
        const Me = this.segment(ee, ie, He, be),
          Ke = Me.requests.find((ee => ye >= ee.first && ye < ee.end));
        if (void 0 === this.valid(Me, ye) && void 0 !== Ke) {
          const ee = await Ke.answer.catch((() => null));
          if (null !== ee && "rejected" in ee) return ee
        }
        let Ue = this.valid(Me, ye);
        if (void 0 === Ue) {
          const ee = await this.request(Me, ye).answer;
          if ("rejected" in ee) return ee;
          Ue = ee[0]
        }
        return Ue
      }
      takeTelemetry(ee) {
        const ie = this.telemetry;
        if ((null === ie || void 0 === ie ? void 0 : ie.sequence) === ee) return this.telemetry = null, Wi(ie.lJ, this.nowMs()) ? ie.lJ.target : void 0
      }
      peek(ee, ie, He) {
        const ye = this.segments.get(ti(ee, ie));
        return void 0 === ye ? void 0 : this.valid(ye, He)
      }
      expire(ee, ie, He) {
        const ye = this.segments.get(ti(ee, ie)),
          be = null === ye || void 0 === ye ? void 0 : ye.lJ.get(He);
        if (void 0 !== ye && void 0 !== be)
          for (const [Me, Ke] of ye.lJ) Ke.expiresAtMs <= be.expiresAtMs && ye.lJ.delete(Me)
      }
      stop() {
        this.stopped = !0
      }
      forget(ee, ie) {
        this.segments.delete(ti(ee, ie))
      }
      segment(ee, ie, He, ye) {
        const be = ti(ee, ie);
        let Me = this.segments.get(be);
        return void 0 === Me && (Me = {
          kind: ee,
          sequence: ie,
          contentType: He,
          slots: ye,
          lJ: new Map,
          requests: [],
          requested: !1
        }, this.segments.set(be, Me)), Me
      }
      valid(ee, ie) {
        const He = ee.lJ.get(ie);
        return void 0 !== He && Wi(He, this.nowMs()) ? He.target : void 0
      }
      telemetryToAskFor() {
        const ee = this.nextTelemetrySequence(),
          ie = this.telemetry;
        return this.telemetryAsked === ee || null !== ie && ie.sequence === ee && Wi(ie.lJ, this.nowMs()) ? null : ee
      }
      domToAskFor() {
        var ee;
        const ie = this.queuedDomAfter(this.domTaken);
        return null === ie || ie.sequence === (null === (ee = this.dom) || void 0 === ee ? void 0 : ee.sequence) ? null : ie
      }
      request(ee, ie) {
        const He = ie < ee.slots.count ? ee.slots.count : ie + 1,
          ye = this.nowMs();
        ee.requested = !0;
        const be = "video" === ee.kind ? this.telemetryToAskFor() : null;
        null !== be && (this.telemetryAsked = be);
        const Me = "video" === ee.kind ? this.domToAskFor() : null,
          Ke = this.transport.requestPostTargets({
            uploadToken: this.uploadToken,
            kind: ee.kind,
            sequence: ee.sequence,
            contentType: ee.contentType,
            parts: {
              first: ie,
              count: He - ie,
              maxBytes: ee.slots.maxBytes
            },
            ...null === be ? {} : {
              nextTelemetry: {
                sequence: be,
                maxBytes: Oi
              }
            },
            ...null === Me ? {} : {
              dom: Me
            }
          });
        if (null !== Me) {
          const ee = Ke.then((ee => {
            if ("rejected" in ee || void 0 === ee.domUpload) return;
            const {
              expiresInSecs: ie,
              ...He
            } = ee.domUpload;
            return {
              upload: He,
              expiresAtMs: ye + 1e3 * ie
            }
          }), (() => {
            var ee;
            (null === (ee = this.dom) || void 0 === ee ? void 0 : ee.sequence) === Me.sequence && (this.dom = null)
          }));
          this.dom = {
            sequence: Me.sequence,
            upload: ee
          }
        }
        const Ue = Ke.then((He => {
            var Me, Ke;
            if ("rejected" in He) return He;
            const Ue = ye + 1e3 * He.expiresInSecs;
            He.targets.forEach(((He, ye) => {
              ee.lJ.set(ie + ye, {
                target: He,
                expiresAtMs: Ue
              })
            }));
            return null !== be && be >= this.nextTelemetrySequence() && (null !== (Me = null === (Ke = this.telemetry) || void 0 === Ke ? void 0 : Ke.sequence) && void 0 !== Me ? Me : -1) <= be && void 0 !== He.telemetryTarget && (this.telemetry = {
              sequence: be,
              lJ: {
                target: He.telemetryTarget,
                expiresAtMs: Ue
              }
            }), He.targets
          })),
          Fe = {
            first: ie,
            end: He,
            answer: Ue
          };
        ee.requests.push(Fe);
        const Je = () => {
          ee.requests.splice(ee.requests.indexOf(Fe), 1), null !== be && this.telemetryAsked === be && (this.telemetryAsked = null)
        };
        return Ue.then(Je, Je), Fe
      }
    }

    function Wi(ee, ie) {
      return ee.expiresAtMs - 6e4 > ie
    }

    function ti(ee, ie) {
      return `${ee}:${ie}`
    }
    const Zi = {
      maxAttempts: 10,
      baseBackoffMs: 1e3
    };

    function wi(ee) {
      return new Promise((ie => {
        const He = () => {
            clearTimeout(ye), window.removeEventListener("online", He), ie()
          },
          ye = setTimeout(He, ee);
        window.addEventListener("online", He)
      }))
    }
    const Di = ["video", "dom"],
      Pi = "video",
      Ai = {
        telemetry: 0,
        dom: 1,
        still: 2,
        video: 3
      },
      Yi = "an earlier part of its segment was dropped",
      Vi = new Set([403, 408, 409, 429]),
      ai = new Set(["RequestTimeout", "IncompleteBody"]);
    class ci {
      constructor(ee, ie, He, ye) {
        this.transport = ee, this.uploadToken = ie, this.options = He, this.callbacks = ye, this.queue = [], this.nextSequence = new Map, this.targets = void 0, this.brokenSegments = new Set, this.queuedBytes = 0, this.pumping = !1, this.uploadInFlight = !1, this.stopped = !1, this.targets = new di(ee, ie, (() => {
          var ee;
          return null !== (ee = this.nextSequence.get("telemetry")) && void 0 !== ee ? ee : 0
        }), (ee => {
          const ie = this.queue.find((ie => "dom" === ie.kind && ie.sequence > ee));
          return void 0 === ie ? null : {
            sequence: ie.sequence,
            byteLength: ie.bytes.byteLength
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
        return this.queue.map((ee => {
          let {
            kind: ie,
            sequence: He,
            meta: ye
          } = ee;
          return {
            kind: ie,
            sequence: He,
            meta: ye
          }
        }))
      }
      openSegment(ee, ie, He, ye) {
        const be = this.takeSequence(ee);
        return this.prefetchTargets(ee, be, ie, He, ye), be
      }
      prefetchTargets(ee, ie, He, ye, be) {
        this.stopped || this.targets.prefetch(ee, ie, He, ye, be)
      }
      peekTarget(ee, ie, He) {
        return this.targets.peek(ee, ie, He)
      }
      closeSegment(ee, ie) {
        this.targets.forget(ee, ie), ee === Pi && this.brokenSegments.delete(ie)
      }
      enqueue(ee) {
        var ie, He;
        const ye = null !== (ie = null === (He = ee.part) || void 0 === He ? void 0 : He.sequence) && void 0 !== ie ? ie : null;
        if (this.stopped) return this.callbacks.onDropped(ee, "uploader stopped", ye), null;
        if (null !== ye && ee.kind === Pi && this.brokenSegments.has(ye)) return this.callbacks.onDropped(ee, Yi, ye), null;
        "still" === ee.kind && this.removeQueued(ee.kind);
        const be = {
            ...ee,
            sequence: null !== ye && void 0 !== ye ? ye : this.takeSequence(ee.kind)
          },
          Me = this.queue.findIndex(((ie, He) => (He > 0 || !this.uploadInFlight) && Ai[ie.kind] > Ai[ee.kind]));
        return this.queue.splice(-1 === Me ? this.queue.length : Me, 0, be), this.queuedBytes += ee.bytes.byteLength, this.enforceBacklogCap(), this.pump(), this.queue.includes(be) ? be.sequence : null
      }
      stop() {
        this.stopped = !0, this.targets.stop();
        for (const ee of this.queue.splice(this.uploadInFlight ? 1 : 0)) this.queuedBytes -= ee.bytes.byteLength, this.callbacks.onDropped(ee, "uploader stopped", ee.sequence)
      }
      takeSequence(ee) {
        var ie;
        const He = null !== (ie = this.nextSequence.get(ee)) && void 0 !== ie ? ie : 0;
        return this.nextSequence.set(ee, He + 1), He
      }
      removeQueued(ee) {
        for (let ie = this.queue.length - 1; ie >= (this.uploadInFlight ? 1 : 0); ie--)
          if (this.queue[ie].kind === ee) {
            const [ee] = this.queue.splice(ie, 1);
            this.queuedBytes -= ee.bytes.byteLength
          }
      }
      enforceBacklogCap() {
        for (const ee of Di)
          for (const ie of [!1, !0])
            for (let He = this.uploadInFlight ? 1 : 0; He < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
              const ye = this.queue[He];
              if (ye.kind !== ee || !0 === ye.dropLast && !ie) {
                He++;
                continue
              }
              const [be] = this.queue.splice(He, 1);
              this.queuedBytes -= be.bytes.byteLength, this.callbacks.onDropped(be, "backlog over cap", be.sequence), this.segmentBroken(be)
            }
      }
      segmentBroken(ee) {
        if (void 0 !== ee.part && ee.kind === Pi) {
          this.brokenSegments.add(ee.sequence);
          for (let ie = this.queue.length - 1; ie >= (this.uploadInFlight ? 1 : 0); ie--) {
            const He = this.queue[ie];
            He.kind === Pi && void 0 !== He.part && He.sequence === ee.sequence && (this.queue.splice(ie, 1), this.queuedBytes -= He.bytes.byteLength, this.callbacks.onDropped(He, Yi, He.sequence))
          }
        }
      }
      async pump() {
        if (!this.pumping) {
          for (this.pumping = !0; this.queue.length > 0 && !this.stopped;) {
            const ee = this.queue[0];
            this.uploadInFlight = !0;
            const ie = await this.upload(ee);
            this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= ee.bytes.byteLength, "uploaded" !== ie.type ? (this.callbacks.onDropped(ee, ie.reason, ee.sequence), this.segmentBroken(ee), "refused" !== ie.type || this.stopped || "telemetry" !== ee.kind || (console.warn(`Session replay uploads refused (${ie.reason}); stopping uploads for this page load.`), this.stop(), this.callbacks.onStopped(ie.reason))) : this.callbacks.onUploaded(ee, ee.sequence)
          }
          this.pumping = !1
        }
      }
      async upload(ee) {
        let ie = null,
          He = 0;
        for (let be = 1;; be++) {
          try {
            if (null === ie) {
              const He = await this.requestTarget(ee);
              if ("rejected" in He) {
                if (!He.retryable) return {
                  type: "refused",
                  reason: He.reason
                };
                throw new Error(`rejected for now: ${He.reason}`)
              }
              ie = He
            }
            try {
              "put" === ie.type ? await this.transport.put(ie.url, ee.bytes, ee.contentType, ie.ifNoneMatch) : await this.transport.post(ie.target, ee.bytes, ee.contentType)
            } catch (ye) {
              if (ye instanceof le.b && null !== ye.status && ye.status < 500 && !Vi.has(ye.status) && (null === ye.storageCode || !ai.has(ye.storageCode))) return console.warn(`Session replay ${ee.kind} segment ${ee.sequence} refused by storage:`, ye), {
                type: "dropped",
                reason: ye.message
              };
              throw ye
            }
            return {
              type: "uploaded"
            }
          } catch (ye) {
            const be = ye instanceof Error ? ye.message : String(ye),
              Me = void 0 === ee.part ? "" : ` part ${ee.part.index}`;
            if (console.warn(`Session replay ${ee.kind} segment ${ee.sequence}${Me} upload failed:`, ye), ye instanceof le.b && (403 === ye.status && (ie = null, void 0 !== ee.part && this.targets.expire(ee.kind, ee.sequence, ee.part.index)), ++He >= this.options.maxAttempts)) return {
              type: "dropped",
              reason: be
            }
          }
          const Me = Math.min(3e4, this.options.baseBackoffMs * 2 ** (be - 1));
          if (await this.options.wait(Me * (.75 + .5 * Math.random())), this.stopped) return {
            type: "dropped",
            reason: "uploader stopped"
          }
        }
      }
      async requestTarget(ee) {
        const {
          part: ie
        } = ee;
        if (void 0 !== ie) {
          const He = await this.targets.get(ee.kind, ee.sequence, ee.contentType, ie.index, ie.slots);
          return "rejected" in He ? He : {
            type: "post",
            target: He
          }
        }
        const He = "dom" === ee.kind ? await this.targets.takeDom(ee.sequence) : void 0;
        if (void 0 !== He) return {
          type: "put",
          url: He.uploadUrl,
          ifNoneMatch: He.ifNoneMatch
        };
        const ye = "telemetry" === ee.kind && ee.bytes.byteLength <= Oi ? this.targets.takeTelemetry(ee.sequence) : void 0;
        if (void 0 !== ye) return {
          type: "post",
          target: ye
        };
        const be = await this.transport.requestPutUrl({
          uploadToken: this.uploadToken,
          kind: ee.kind,
          sequence: ee.sequence,
          contentType: ee.contentType,
          byteLength: ee.bytes.byteLength
        });
        return "rejected" in be ? be : {
          type: "put",
          url: be.uploadUrl,
          ifNoneMatch: be.ifNoneMatch
        }
      }
    }
    class xi {
      constructor(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.uploader = ee, this.slots = ie, this.manifest = He, this.journal = ye, this.cut = be, this.joiner = Me, this.segments = new Map, this.storedWhole = new Map, this.openJournalId = null, this.cutJournalId = null
      }
      onWorkerMessage(ee, ie) {
        switch (ee.type) {
          case "videoSegmentOpened": {
            var He, ye;
            if (null !== (He = this.joiner) && void 0 !== He && He.accepting) {
              var be;
              const ie = this.uploader.takeSequence("video");
              this.joiner.open(ee.journalId, ie), this.openJournalId = ee.journalId, null === (be = this.journal) || void 0 === be || be.videoQueued(ee.journalId, ie);
              break
            }
            const Me = this.uploader.openSegment("video", "video/mp4", this.slots, ie);
            this.segments.set(ee.journalId, {
              sequence: Me,
              settledParts: 0,
              totalParts: null,
              landedParts: 0,
              listedParts: 0,
              uploaded: !1
            }), this.openJournalId = ee.journalId, null === (ye = this.journal) || void 0 === ye || ye.videoQueued(ee.journalId, Me);
            break
          }
          case "videoPart": {
            var Me;
            if (null !== (Me = this.joiner) && void 0 !== Me && Me.owns(ee.journalId)) {
              const {
                index: ie,
                bytes: He,
                meta: ye,
                completeUntilUs: be,
                completeUntilIndex: Me
              } = ee;
              this.joiner.addPart(ee.journalId, {
                index: ie,
                bytes: He,
                meta: ye,
                completeUntilUs: be,
                completeUntilIndex: Me
              });
              break
            }
            const ie = this.segments.get(ee.journalId);
            void 0 !== ie && this.enqueuePart(ee.journalId, ie.sequence, ee);
            break
          }
          case "videoSegmentClosed": {
            var Ke;
            if (null !== (Ke = this.joiner) && void 0 !== Ke && Ke.owns(ee.journalId)) {
              var Ue;
              if (this.openJournalId === ee.journalId && (this.openJournalId = null), ee.parts > 0) this.joiner.close(ee.journalId, ee.parts);
              else this.joiner.forget(ee.journalId), null === (Ue = this.journal) || void 0 === Ue || Ue.videoSettled(ee.journalId);
              break
            }
            const ie = this.segments.get(ee.journalId);
            if (void 0 === ie) break;
            ie.totalParts = ee.parts, this.openJournalId === ee.journalId && (this.openJournalId = null), this.maybeDone(ee.journalId, ie);
            break
          }
        }
      }
      joinedStored(ee, ie, He) {
        this.manifest.setVideoSegment(ie, He.meta, null), this.storedWhole.set(ie, ee)
      }
      joinedHandedBack(ee, ie, He, ye) {
        const be = {
          sequence: ie,
          settledParts: 0,
          totalParts: ye,
          landedParts: 0,
          listedParts: 0,
          uploaded: !1
        };
        this.segments.set(ee, be), this.uploader.prefetchTargets("video", ie, "video/mp4", this.slots);
        for (const Me of He) this.enqueuePart(ee, ie, Me)
      }
      enqueuePart(ee, ie, He) {
        this.uploader.enqueue({
          kind: "video",
          contentType: "video/mp4",
          bytes: He.bytes,
          meta: {
            type: "video",
            meta: He.meta,
            journalId: ee,
            index: He.index,
            completeUntilUs: He.completeUntilUs,
            completeUntilIndex: He.completeUntilIndex
          },
          part: {
            sequence: ie,
            index: He.index,
            slots: this.slots
          }
        })
      }
      landed(ee, ie) {
        if (null !== ee.completeUntilUs && ee.meta.endMs > ee.meta.startMs) {
          var He, ye;
          const be = this.segments.get(ee.journalId);
          void 0 !== be && (be.landedParts = ee.index + 1), this.manifest.setVideoSegment(ie, ee.meta, ee.index + 1), null === (He = this.journal) || void 0 === He || He.videoPartLanded(ee.journalId, {
            partsLanded: ee.index + 1,
            completeUntilUs: ee.completeUntilUs,
            meta: ee.meta
          }, null !== (ye = ee.completeUntilIndex) && void 0 !== ye ? ye : 0)
        }
        this.settled(ee)
      }
      dropped(ee) {
        this.settled(ee), ee.journalId === this.openJournalId && ee.journalId !== this.cutJournalId && (this.cutJournalId = ee.journalId, this.cut())
      }
      listed(ee, ie) {
        if (null !== ie)
          for (const [ye, be] of this.segments) be.sequence === ee && (be.listedParts = Math.max(be.listedParts, ie), this.maybeDone(ye, be));
        else {
          const ie = this.storedWhole.get(ee);
          var He;
          void 0 !== ie && (this.storedWhole.delete(ee), null === (He = this.journal) || void 0 === He || He.videoSettled(ie))
        }
      }
      settled(ee) {
        const ie = this.segments.get(ee.journalId);
        void 0 !== ie && (ie.settledParts++, this.maybeDone(ee.journalId, ie))
      }
      maybeDone(ee, ie) {
        if (null === ie.totalParts || ie.settledParts < ie.totalParts) return;
        const He = ie.listedParts >= ie.landedParts;
        var ye, be;
        ie.uploaded || (ie.uploaded = !0, this.uploader.closeSegment("video", ie.sequence), He || null === (ye = this.journal) || void 0 === ye || ye.videoUploaded(ee));
        He && (this.segments.delete(ee), null === (be = this.journal) || void 0 === be || be.videoSettled(ee))
      }
    }
    var Li = He(3214),
      Ci = He(5081);
    class vi {
      constructor(ee, ie) {
        this.deps = ee, this.videoStatus = ie, this.worker = null, this.capture = null, this.uploads = null, this.joiner = null, this.qualityLevel = 0, this.statsWindows = 0, this.videoStarted = !1, this.canvasWatch = new Xi({
          onFirstCanvas: ee => {
            this.attachToCanvas(ee)
          },
          onCanvasSwapped: ee => {
            this.deps.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(ee), this.postToWorker({
              type: "cut"
            }))
          },
          onResized: ee => {
            this.postToWorker({
              type: "resize",
              cssSize: ee
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
      attachToCanvas(ee) {
        if (null !== this.deps.videoConfig && "recorded" === this.videoStatus) try {
          this.startVideo(ee, this.deps.videoConfig)
        } catch (ie) {
          console.warn("Session replay couldn't start its video; recording DOM and events without it.", ie), this.videoUnavailable(`video couldn't start: ${ie instanceof Error?ie.message:String(ie)}`)
        }
      }
      startVideo(ee, ie) {
        var He, ye, be;
        const Me = new Fi,
          Ke = (0, ii.k)(ie),
          Ue = () => {
            this.postToWorker({
              type: "cut"
            })
          },
          Fe = null === this.deps.joinerAccess ? null : this.createJoiner(this.deps.joinerAccess, (() => Je), Ue),
          Je = new xi(this.deps.uploader, Ke, this.deps.manifest, this.deps.journal, Ue, Fe);
        Me.onmessage = ee => {
          this.onWorkerMessage(ee.data, Je)
        }, Me.onerror = ee => {
          console.error("Session replay video worker error.", ee.message), this.worker === Me && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${ee.message||"it didn't load"}`))
        }, this.worker = Me, this.uploads = Je, this.joiner = Fe, this.deps.debug.joiner = null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe.stats) && void 0 !== He ? He : null, this.videoStarted = !0, this.deps.stills.start();
        const oe = (0, De.getOperatingSystem)(),
          Re = (0, we.e)();
        this.postToWorker({
          type: "init",
          videoConfig: ie,
          partPlan: {
            ...Ke,
            partDurationMs: ie.partDurationMs,
            keyframeIntervalMs: ie.keyframeIntervalMs
          },
          cssSize: this.canvasWatch.cssSize,
          encoderPreference: {
            preferSoftware: ie.softwareEncoderPlatforms.includes(oe),
            preferQualityLatency: "ios" === oe
          },
          journalRecordingId: null !== (ye = null === (be = this.deps.journal) || void 0 === be ? void 0 : be.recordingId) && void 0 !== ye ? ye : null
        });
        const ke = function(ee, ie, He, ye) {
          const be = ye && ee.streamGrabEngines.includes(He) ? "stream" : ee.videoFrameGrabPlatforms.includes(ie) ? "videoFrame" : "bitmap";
          return {
            path: be,
            frameCostFloorMs: Math.max(ee.captureFrameCostFloorMs, "stream" === be ? 2.5 : 0, "ios" === ie ? 3.5 : 0)
          }
        }(ie, oe, Re, qi.isSupported() && !ee.renderer.endsWith("webgpu"));
        this.capture = new fi(Me, ie.maxFps, {
          msPerSecond: ie.captureBudgetMsPerSecond,
          frameCostFloorMs: ke.frameCostFloorMs
        }, {
          path: ke.path,
          maxMacroblocks: ie.maxMacroblocks,
          cssSize: () => this.canvasWatch.cssSize
        }, (ee => {
          this.endVideo(), this.videoStopped("stopped_error", ee)
        })), this.capture.start(ee)
      }
      createJoiner(ee, ie, He) {
        return new gi(ee, this.deps.recording.uploadToken, new ne(ee.url), {
          stored: (ee, He, ye) => {
            ie().joinedStored(ee, He, ye), this.deps.pageExit.segmentLanded()
          },
          handBack: (ee, He, ye, be) => {
            ie().joinedHandedBack(ee, He, ye, be)
          },
          cut: He
        }, {
          wait: wi,
          nowMs: Date.now,
          maxHeldBytes: zi[this.deps.platformType]
        })
      }
      onWorkerMessage(ee, ie) {
        var He, ye, be, Me;
        switch (ee.type) {
          case "videoSegmentOpened":
          case "videoPart":
          case "videoSegmentClosed":
            ie.onWorkerMessage(ee, "videoSegmentOpened" === ee.type ? null === (He = this.deps.dom()) || void 0 === He ? void 0 : He.cutForVideo() : void 0), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes;
            break;
          case "still":
            this.deps.stills.received(ee, document.hidden);
            break;
          case "stats":
            be = this.deps.debug, Me = ee.stats, be.workerStats.push(Me), be.workerStats.length > 120 && be.workerStats.shift(), this.deps.debug.uploadBacklogBytes = this.deps.uploader.backlogBytes, this.maybeLogStats(ee.stats);
            break;
          case "qualityChanged":
            this.qualityLevel = ee.level, null === (ye = this.capture) || void 0 === ye || ye.setMaxFps(ee.maxFps), this.deps.debug.qualityChanges.push({
              atMs: (0, Ie.e)(),
              level: ee.level,
              maxFps: ee.maxFps,
              reason: ee.reason
            }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${ee.level} (${ee.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
            break;
          case "videoUnavailable":
            this.videoUnavailable(ee.reason)
        }
      }
      videoUnavailable(ee) {
        var ie, He;
        null === (ie = this.capture) || void 0 === ie || ie.stop(), this.capture = null, null === (He = this.worker) || void 0 === He || He.terminate(), this.worker = null, this.videoStopped("stopped_error", ee)
      }
      videoStopped(ee, ie) {
        "recorded" !== this.videoStatus || this.deps.isStopped() || (this.deps.debug.videoUnavailableReason = ie, "stopped_error" === ee && this.deps.telemetry.writeEvent("captureFailed"), this.setVideoStatus(ee, ie))
      }
      setVideoStatus(ee, ie) {
        this.videoStatus = ee, (0, Li.g)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, Ci.g)(ee, ie)
      }
      maybeLogStats(ee) {
        if (!this.deps.experiment.logStats || ++this.statsWindows % 6 !== 0) return;
        const ie = Math.round(1e3 * ee.encodedFrames / ee.windowMs);
        console.warn(`Session replay stats: ${ie} fps encoded, ${ee.encodeWidth}x${ee.encodeHeight} ${ee.hardwareAcceleration}`)
      }
      onCellular() {
        "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
      }
      endVideo() {
        var ee;
        null === (ee = this.capture) || void 0 === ee || ee.stop(), this.capture = null, this.postToWorker({
          type: "flush"
        });
        const ie = this.worker;
        this.worker = null, setTimeout((() => {
          null === ie || void 0 === ie || ie.terminate()
        }), 15e3)
      }
      postToWorker(ee) {
        var ie;
        null === (ie = this.worker) || void 0 === ie || ie.postMessage(ee)
      }
    }
    const ui = 3 * ue.d / 4,
      mi = {
        desktop: 88080384,
        mobile: 16777216,
        tablet: 16777216
      };
    var li = He(40617);
    const Si = {
        count: 1,
        maxBytes: ii.g
      },
      ni = "image/jpeg";
    class ji {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ue.g;
        this.uploader = ee, this.manifest = ie, this.relay = He, this.keepalive = ye, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
      }
      start() {
        this.prefetchNext(), this.refreshTimer = setInterval((() => {
          this.prefetchNext()
        }), 15e5)
      }
      received(ee, ie) {
        let {
          bytes: He,
          small: ye,
          atMs: be
        } = ee;
        const Me = He.byteLength <= Si.maxBytes ? He : ye;
        null !== Me && (this.latest = {
          bytes: Me,
          small: ye,
          atMs: be
        }, ie && this.upload())
      }
      upload() {
        var ee, ie;
        const He = this.latest;
        if (this.stopped || null === He || He.atMs <= (null !== (ee = null === (ie = this.queued) || void 0 === ie ? void 0 : ie.atMs) && void 0 !== ee ? ee : -1 / 0)) return;
        const ye = this.takeSequence();
        this.queued = {
          atMs: He.atMs,
          sequence: ye
        }, this.uploader.enqueue({
          kind: "still",
          contentType: ni,
          bytes: He.bytes,
          meta: {
            type: "still",
            atMs: He.atMs,
            sequence: ye
          },
          part: {
            sequence: ye,
            index: 0,
            slots: Si
          }
        })
      }
      landed(ee) {
        this.manifest.setStill(ee.atMs, ee.sequence), this.uploader.closeSegment("still", ee.sequence)
      }
      dropped(ee) {
        this.uploader.closeSegment("still", ee.sequence)
      }
      beacon() {
        var ee, ie, He, ye;
        const be = this.latest;
        if (this.stopped || null === be || be.atMs <= (null !== (ee = null === (ie = this.manifest.contents.still) || void 0 === ie ? void 0 : ie.atMs) && void 0 !== ee ? ee : -1 / 0)) return;
        const Me = (null === (He = this.queued) || void 0 === He ? void 0 : He.atMs) === be.atMs ? this.queued : null;
        if (null !== Me && this.keepalive.isInFlight(ni)) return void this.manifest.setStill(be.atMs, Me.sequence);
        const Ke = null !== (ye = null === Me || void 0 === Me ? void 0 : Me.sequence) && void 0 !== ye ? ye : this.nextSequence,
          Ue = this.uploader.peekTarget("still", Ke, 0);
        if (void 0 !== Ue)
          for (const Fe of [be.bytes, be.small])
            if (null !== Fe && this.sendBeacon(Ue, Fe)) return null === Me && this.takeSequence(), void this.manifest.setStill(be.atMs, Ke)
      }
      sendBeacon(ee, ie) {
        var He, ye;
        const be = null !== (He = null === (ye = this.relay) || void 0 === ye ? void 0 : ye.beacon({
          method: "POST",
          url: ee.url,
          fields: ee.fields
        }, ie, ni, this.keepalive)) && void 0 !== He ? He : null;
        if (null !== be) return be;
        const {
          form: Me,
          byteLength: Ke
        } = (0, li.j)(ee, ie, ni);
        return this.keepalive.sendUploadBeacon(ee.url, Me, Ke)
      }
      stop() {
        this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
      }
      takeSequence() {
        const ee = this.nextSequence++;
        return this.prefetchNext(), ee
      }
      prefetchNext() {
        this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, ni, Si)
      }
    }
    var si = He(5100),
      Ii = He(40619),
      Ni = He(40627),
      Gi = He(40631),
      ri = He(7136),
      Qi = He(7142);

    function eH(ee) {
      return 50 * Math.floor(ee / 50)
    }
    class iH {
      constructor() {
        this.writer = new ri.e((0, Ie.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
      }
      attach(ee, ie) {
        null !== ee && (this.setActionBits(ee.getActionBits(), (0, Ie.e)()), this.unsubscribers.push(ee.onKey(((ee, ie, He, ye, be, Me) => {
          const Ke = (0, Qi.e)(ee);
          be ? this.writer.writeKey(eH(Me), Ke, ie, He, ye) : 0 !== Ke && null === (0, Qi.g)(ee) && this.writer.writeKey(eH(Me), 0, ie, He, ye)
        })), ee.onActions(((ee, ie) => {
          this.setActionBits(ee, ie)
        })), ee.onPointerLock(((ee, ie) => {
          this.writer.writeEvent(ie, ee ? "pointerLocked" : "pointerUnlocked")
        })))), this.unsubscribers.push((0, Ti.r)((() => {
          const ee = (0, Ti.e)();
          this.writer.writeFrame((0, Ie.e)() - ee, ee), this.framesSinceFpsSample++, ie()
        })))
      }
      writeState(ee, ie) {
        this.writer.writeState((0, Ie.e)(), {
          backingWidth: ee.canvas.width,
          backingHeight: ee.canvas.height,
          cssWidth: ee.cssWidth,
          cssHeight: ee.cssHeight,
          devicePixelRatio: window.devicePixelRatio,
          renderer: ee.renderer,
          pingMs: ee.pingMs,
          hidden: ie,
          qualityLevel: ee.qualityLevel
        })
      }
      writeEvent(ee) {
        this.writer.writeEvent((0, Ie.e)(), ee)
      }
      sampleFps() {
        const ee = performance.now(),
          ie = ee - this.lastFpsSampleMs,
          He = this.framesSinceFpsSample;
        return this.lastFpsSampleMs = ee, this.framesSinceFpsSample = 0, 0 === He || ie <= 0 ? null : 1e3 * He / ie
      }
      get recordBytes() {
        return this.writer.recordBytes
      }
      hasRecords() {
        return this.writer.recordBytes > this.carriedBytes
      }
      takeChunk() {
        const ee = this.writer.chunkStartMs,
          ie = (0, Ie.e)(),
          He = this.writer.takeChunk(ie);
        return this.carriedBytes = 0, 0 !== this.actionBits && (this.writer.writeActions(ie, this.actionBits), this.carriedBytes = this.writer.recordBytes), {
          bytes: He,
          startMs: ee,
          endMs: ie
        }
      }
      stop() {
        for (const ee of this.unsubscribers) ee();
        this.unsubscribers = []
      }
      setActionBits(ee, ie) {
        ee !== this.actionBits && (this.actionBits = ee, this.writer.writeActions(eH(ie), ee))
      }
    }
    var HH = He(5109),
      yH = He(40638);
    class bH {
      constructor(ee, ie) {
        var He;
        this.recording = ee, this.telemetry = new iH, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0;
        const ye = ie.dryRun ? null : null !== (He = ee.partJoiner) && void 0 !== He ? He : null,
          be = null === ye ? null : (0, me.k)(je(ye)),
          Ke = ie.dryRun ? new li.e : new li.i((0, Ze.b)().segmentUploadUrl, {
            relay: be
          });
        var Fe, Je;
        this.videoConfig = ie.dryRun ? function(ee) {
          var ie, He, ye, be;
          const Ke = Me[ee],
            Ue = Ae.i.getItem("replaySkipLowMemory"),
            Fe = "boolean" === typeof Ue ? Ue : null;
          return {
            ...Ke,
            maxFps: null !== (ie = ae("replayMaxFps")) && void 0 !== ie ? ie : Ke.maxFps,
            maxMacroblocks: null !== (He = ae("replayMaxMacroblocks")) && void 0 !== He ? He : Ke.maxMacroblocks,
            captureBudgetMsPerSecond: null !== (ye = ae("replayCaptureBudgetMs")) && void 0 !== ye ? ye : Ke.captureBudgetMsPerSecond,
            captureFrameCostFloorMs: null !== (be = ae("replayCaptureCostFloorMs")) && void 0 !== be ? be : Ke.captureFrameCostFloorMs,
            softwareEncoderPlatforms: ce("replayEncoder", "software", "hardware", Ke.softwareEncoderPlatforms),
            videoFrameGrabPlatforms: ce("replayGrab", "videoFrame", "bitmap", Ke.videoFrameGrabPlatforms),
            streamGrabEngines: xe(Ke.streamGrabEngines),
            skipLowMemoryDevices: null !== Fe && void 0 !== Fe ? Fe : Ke.skipLowMemoryDevices
          }
        }(ie.platformType) : ee.videoConfig && (Fe = ee.videoConfig, Je = ie.platformType, {
          ...Me[Je],
          ...Fe
        });
        const oe = (0, HH.e)(this.videoConfig);
        (0, Li.g)("recorded" === oe ? "video" : "dom_only", ee), this.manifest = new Qe(ee.recordingId, ee.uploadToken, !ie.dryRun, {
          sendIntervalMs: this.manifestIntervalMs,
          lateFromMs: ee.expiresAtMs - 6e4,
          onSend: ee => {
            var ie;
            null === (ie = this.journal) || void 0 === ie || ie.manifestSent(ee)
          },
          onListed: ee => {
            let {
              list: ie,
              value: He
            } = ee;
            var ye, be;
            if ("videoSegments" === ie) null === (ye = this.video.uploads) || void 0 === ye || ye.listed(He.sequence, null !== (be = He.parts) && void 0 !== be ? be : null);
            else if ("telemetrySegments" === ie) {
              var Me;
              null === (Me = this.journal) || void 0 === Me || Me.telemetrySettled(He.sequence)
            } else {
              var Ke;
              null === (Ke = this.journal) || void 0 === Ke || Ke.domSettled(He.sequence)
            }
          }
        }), !ie.dryRun && Gi.b.supported && (this.journal = new bi(new Gi.b, ee, this.manifest.contents, (0, Ze.b)())), this.debug = function() {
          const ee = {
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
          return window.sessionReplayDebug = ee, ee
        }(), this.uploader = new ci(Ke, ee.uploadToken, {
          ...Zi,
          maxBacklogBytes: mi[ie.platformType],
          wait: wi
        }, {
          onUploaded: (ee, ie) => {
            var He;
            this.debug.uploadedBytesByKind[ee.kind] = (null !== (He = this.debug.uploadedBytesByKind[ee.kind]) && void 0 !== He ? He : 0) + ee.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(ee.meta, ie, ee.bytes), this.pageExit.segmentLanded()
          },
          onDropped: (ee, ie, He) => {
            var ye;
            if (console.warn(`Session replay dropped a ${ee.kind} segment: ${ie}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === ee.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (ye = this.video.uploads) || void 0 === ye || ye.dropped(ee.meta);
            else if ("still" === ee.meta.type) this.stills.dropped(ee.meta);
            else if ("telemetry" === ee.meta.type && null !== He) {
              var be;
              null === (be = this.journal) || void 0 === be || be.telemetrySettled(He)
            } else if ("dom" === ee.meta.type && null !== He) {
              var Me;
              null === (Me = this.journal) || void 0 === Me || Me.domSettled(He)
            }
          },
          onStopped: ee => {
            this.stop(`uploads refused: ${ee}`)
          }
        }), this.stills = new ji(this.uploader, this.manifest, be), this.pageExit = new Mi({
          manifest: this.manifest,
          stills: this.stills,
          queuedUploads: () => this.uploader.queued(),
          flushTelemetry: () => {
            this.flushTelemetry()
          },
          cutPageRecording: () => {
            var ee, ie;
            null === (ee = this.dom) || void 0 === ee || ee.cut(), null === (ie = this.dom) || void 0 === ie || ie.cutAfterNextBatch()
          },
          postToWorker: ee => {
            this.video.postToWorker(ee)
          },
          writeEvent: ee => {
            this.telemetry.writeEvent(ee)
          },
          isStopped: () => this.isStopped,
          releaseJoined: () => {
            var ee;
            null === (ee = this.video.joiner) || void 0 === ee || ee.releaseAll()
          }
        }), this.video = new vi({
          recording: ee,
          videoConfig: this.videoConfig,
          joinerAccess: ye,
          uploader: this.uploader,
          manifest: this.manifest,
          journal: this.journal,
          stills: this.stills,
          pageExit: this.pageExit,
          telemetry: this.telemetry,
          debug: this.debug,
          experiment: ie.dryRun ? {
            logStats: !0 === Ae.i.getItem("replayLogStats")
          } : Ve,
          platformType: ie.platformType,
          isStopped: () => this.isStopped,
          dom: () => this.dom
        }, oe);
        const Re = ie.dryRun ? function() {
          var ee;
          const ie = null !== (ee = (0, Ye.f)() ? Pe.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== ee ? ee : Ae.i.getItem("replayPostHogHost");
          return "string" === typeof ie && ie.length > 0 ? {
            apiHost: ie,
            projectApiKey: "dry-run"
          } : null
        }() : ee.posthog;
        if (this.ownFpsMonitor = null === Re ? new yH.c({
            onEpisodeStarted: () => {
              this.onLowFps(!0)
            },
            onEpisodeEnded: () => {
              this.onLowFps(!1)
            }
          }) : null, Ue.h.subscribe("sessionReplayLowFps", (ee => {
            let {
              low: ie
            } = ee;
            this.isStopped || this.onLowFps(ie)
          })), Ue.h.subscribe("sessionReplayStayProgress", (ee => {
            !this.isStopped && this.manifest.updateCurrentStay(ee) && this.manifest.sendSoon()
          })), Ue.h.subscribe("sessionReplayGameQuit", (ee => {
            let {
              reasons: ie,
              gameName: He
            } = ee;
            ie.includes("quit_after_death") && !this.isStopped && this.manifest.flagLastGameQuitAfterDeath(He) && this.pageExit.sendManifest()
          })), null !== ie.currentGame && (this.listStay(ie.currentGame), Ue.h.yR("sessionReplayStayOpened", ie.currentGame.gameNameWithVariation)), this.start(ee.expiresAtMs), this.dom = null, null !== Re) {
          const He = new We(this.uploader, {
            cutsEachBatch: () => this.isStopped || this.pageExit.isHiding,
            packsNow: ee => this.isStopped || this.pageExit.isHiding || document.hidden && !ee
          }, this.journal, new te.e);
          this.dom = He, (0, Ci.c)({
            recording: ee,
            posthog: Re,
            videoStatus: this.video.videoStatus,
            dryRun: ie.dryRun,
            onDomBatch: ee => {
              He.add(ee)
            }
          })
        }
      }
      get manifestIntervalMs() {
        var ee, ie;
        return null !== (ee = null === (ie = this.videoConfig) || void 0 === ie ? void 0 : ie.manifestIntervalMs) && void 0 !== ee ? ee : 3e4
      }
      get isStopped() {
        return this.lifetime.signal.aborted
      }
      listStay(ee) {
        const {
          lobbyName: ie,
          ...He
        } = ee;
        this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === ie ? He : {
          ...He,
          lobbyName: ie
        })
      }
      gameJoined(ee) {
        this.isStopped || (this.video.postToWorker({
          type: "gameJoined"
        }), this.flushTelemetry(), this.listStay(ee), Ue.h.yR("sessionReplayStayOpened", ee.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
      }
      gameLeft() {
        this.isStopped || (this.video.postToWorker({
          type: "flush"
        }), this.flushTelemetry(), this.manifest.gameLeft(), this.manifest.send())
      }
      addCreatorGrant(ee, ie) {
        this.isStopped || (this.manifest.addCreatorGrant(ee, ie), this.manifest.send())
      }
      onLowFps(ee) {
        this.lowFpsOpen = ee, ee && this.manifest.flagCurrentGame("lowFps")
      }
      start(ee) {
        const ie = this.lifetime.signal;
        this.timers.push(setInterval((() => {
          this.onStateTick()
        }), 1e3), setInterval((() => {
          var ee;
          this.flushTelemetry(), null === (ee = this.dom) || void 0 === ee || ee.cutOnTimer()
        }), this.manifestIntervalMs), setTimeout((() => {
          this.stop("upload token expiring")
        }), Math.max(0, ee - Date.now() - 6e4))), this.pageExit.listen(ie), this.telemetry.attach((0, Ni.c)(), (() => {
          var ee;
          null === (ee = this.video.capture) || void 0 === ee || ee.onAfterRender()
        }));
        for (const He of ["error", "unhandledrejection"]) window.addEventListener(He, (ee => {
          (0, Ii.c)(ee) && this.manifest.flagCurrentGame("hadError")
        }), {
          signal: ie
        });
        (0, HH.h)((() => {
          this.video.onCellular()
        }), ie), null !== this.journal && (0, si.d)(ie)
      }
      stop(ee) {
        var ie, He;
        if (!this.isStopped) {
          console.warn(`Session replay stopped recording: ${ee}`), this.debug.stoppedReason = ee, this.lifetime.abort();
          for (const ee of this.timers) clearTimeout(ee);
          this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, Ci.j)(), this.telemetry.stop(), this.flushTelemetry(), null === (ie = this.dom) || void 0 === ie || ie.cut(), null === (He = this.dom) || void 0 === He || He.close(), this.video.endVideo(), this.manifest.send(), (0, Li.g)("events_only", this.recording)
        }
      }
      onStateTick() {
        var ee;
        const ie = this.video.canvasWatch.check();
        if (null === ie) return;
        const {
          cssSize: He
        } = this.video.canvasWatch, ye = Ke.c.getLastColyseusPingMs();
        this.telemetry.writeState({
          canvas: ie.canvas,
          cssWidth: He.width,
          cssHeight: He.height,
          renderer: ie.renderer,
          pingMs: ye,
          qualityLevel: this.video.qualityLevel
        }, document.hidden), this.telemetry.recordBytes >= ui && this.flushTelemetry();
        const be = this.telemetry.sampleFps(),
          Me = document.hidden ? null : be;
        if (null === (ee = this.ownFpsMonitor) || void 0 === ee || ee.addSample(Me, Date.now()), document.hidden || this.video.postToWorker({
            type: "health",
            gameFps: Me,
            pingMs: ye
          }), null !== this.video.capture) {
          const {
            averageMs: ee,
            fps: ie,
            grabPath: He
          } = this.video.capture.frameCost;
          this.debug.captureFrameCost = {
            averageMs: ee,
            budgetFps: ie,
            grabPath: He
          }
        }
      }
      onSegmentUploaded(ee, ie, He) {
        var ye;
        if ("video" === ee.type) null === (ye = this.video.uploads) || void 0 === ye || ye.landed(ee, ie);
        else if ("still" === ee.type) this.stills.landed(ee);
        else if ("dom" === ee.type) {
          var be;
          null === (be = this.journal) || void 0 === be || be.domLanded(ie, ee.chunk), this.manifest.addDomSegment({
            sequence: ie,
            ...ee.chunk
          })
        } else {
          var Me;
          null === (Me = this.journal) || void 0 === Me || Me.telemetryLanded(ie, He, ee.startMs, ee.endMs), this.manifest.addTelemetrySegment(ie, ee.startMs, ee.endMs)
        }
      }
      flushTelemetry() {
        if (!this.telemetry.hasRecords()) return;
        const {
          bytes: ee,
          startMs: ie,
          endMs: He
        } = this.telemetry.takeChunk(), ye = this.uploader.enqueue({
          kind: "telemetry",
          contentType: "application/octet-stream",
          bytes: ee,
          meta: {
            type: "telemetry",
            startMs: ie,
            endMs: He
          }
        });
        var be;
        null !== ye && (null === (be = this.journal) || void 0 === be || be.telemetryQueued(ye, ee, ie, He));
        this.debug.uploadBacklogBytes = this.uploader.backlogBytes
      }
    }
  },
  7136: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ze,
      h: () => we
    });
    var ye = He(7142);
    const be = 827609666,
      Me = 2,
      Ke = 1,
      Ue = 13,
      Fe = 1,
      Je = 2,
      oe = 3,
      Re = 4,
      ke = 5,
      qe = 7,
      fe = 19,
      Te = 6,
      pe = 7,
      Xe = 7,
      ze = 1,
      Be = 2,
      Ee = 4,
      ge = 65535,
      Oe = 10,
      de = ["unknown", "webgl1", "webgl2", "webgpu", "rust_webgl1", "rust_webgl2", "rust_webgpu"],
      We = ["none", "contextLost", "contextRestored", "canvasSwapped", "videoSegmentDropped", "qualityChanged", "captureFailed", "hidden", "visible", "pointerLocked", "pointerUnlocked"];

    function te(ee) {
      return Math.max(0, Math.min(ge, Math.round(ee)))
    }
    class Ze {
      constructor(ee) {
        this.buffer = new ArrayBuffer(65536), this.view = new DataView(this.buffer), this.length = 0, this.baseEpochMs = 0, this.startChunk(ee)
      }
      get chunkStartMs() {
        return this.baseEpochMs
      }
      get recordBytes() {
        return this.length - Ue
      }
      writeFrame(ee, ie) {
        this.reserve(qe);
        const He = this.view,
          ye = this.length;
        He.setUint8(ye, Fe), He.setUint32(ye + 1, this.timeUnits(ee), !0), He.setUint16(ye + 5, te(100 * ie), !0), this.length += qe
      }
      writeState(ee, ie) {
        this.reserve(fe);
        const He = this.view,
          ye = this.length;
        He.setUint8(ye, Je), He.setUint32(ye + 1, this.timeUnits(ee), !0), He.setUint16(ye + 5, te(ie.backingWidth), !0), He.setUint16(ye + 7, te(ie.backingHeight), !0), He.setUint16(ye + 9, te(ie.cssWidth), !0), He.setUint16(ye + 11, te(ie.cssHeight), !0), He.setUint16(ye + 13, te(100 * ie.devicePixelRatio), !0), He.setUint8(ye + 15, de.indexOf(ie.renderer)), He.setUint16(ye + 16, null === ie.pingMs ? ge : te(Math.min(ie.pingMs, ge - 1)), !0), He.setUint8(ye + 18, (ie.hidden ? 1 : 0) | (7 & ie.qualityLevel) << 1), this.length += fe
      }
      writeEvent(ee, ie) {
        this.reserve(Te);
        const He = this.length;
        this.view.setUint8(He, oe), this.view.setUint32(He + 1, this.timeUnits(ee), !0), this.view.setUint8(He + 5, We.indexOf(ie)), this.length += Te
      }
      writeActions(ee, ie) {
        this.reserve(pe);
        const He = this.length;
        this.view.setUint8(He, Re), this.view.setUint32(He + 1, this.timeUnits(ee), !0), this.view.setUint16(He + 5, ie, !0), this.length += pe
      }
      writeKey(ee, ie, He, ye, be) {
        this.reserve(Xe);
        const Me = this.length;
        this.view.setUint8(Me, ke), this.view.setUint32(Me + 1, this.timeUnits(ee), !0), this.view.setUint8(Me + 5, ie), this.view.setUint8(Me + 6, (He ? ze : 0) | (ye ? Be : 0) | (be ? Ee : 0)), this.length += Xe
      }
      takeChunk(ee) {
        const ie = this.buffer.slice(0, this.length);
        return this.startChunk(ee), ie
      }
      startChunk(ee) {
        this.baseEpochMs = ee, this.view.setUint32(0, be, !0), this.view.setUint8(4, Me), this.view.setFloat64(5, ee, !0), this.length = Ue
      }
      timeUnits(ee) {
        return Math.max(0, Math.round((ee - this.baseEpochMs) * Oe))
      }
      reserve(ee) {
        if (this.length + ee <= this.buffer.byteLength) return;
        const ie = new ArrayBuffer(2 * this.buffer.byteLength);
        new Uint8Array(ie).set(new Uint8Array(this.buffer, 0, this.length)), this.buffer = ie, this.view = new DataView(ie)
      }
    }

    function we(ee) {
      const ie = new DataView(ee),
        He = ee.byteLength < Ue ? 0 : ie.getUint8(4);
      if (He < Ke || He > Me || ie.getUint32(0, !0) !== be) throw new Error(`Not a version ${Ke}-${Me} replay telemetry chunk`);
      const te = ie.getFloat64(5, !0),
        Ze = {
          baseEpochMs: te,
          inputRecorded: He >= 2,
          frames: [],
          states: [],
          events: [],
          actions: [],
          keys: []
        },
        we = ee => te + ie.getUint32(ee, !0) / Oe;
      let De = Ue;
      for (; De < ee.byteLength;) {
        const ee = ie.getUint8(De);
        if (ee === Fe) Ze.frames.push({
          atMs: we(De + 1),
          cpuFrameMs: ie.getUint16(De + 5, !0) / 100
        }), De += qe;
        else if (ee === Je) {
          var Pe;
          const ee = ie.getUint16(De + 16, !0),
            He = ie.getUint8(De + 18);
          Ze.states.push({
            atMs: we(De + 1),
            backingWidth: ie.getUint16(De + 5, !0),
            backingHeight: ie.getUint16(De + 7, !0),
            cssWidth: ie.getUint16(De + 9, !0),
            cssHeight: ie.getUint16(De + 11, !0),
            devicePixelRatio: ie.getUint16(De + 13, !0) / 100,
            renderer: null !== (Pe = de[ie.getUint8(De + 15)]) && void 0 !== Pe ? Pe : "unknown",
            pingMs: ee === ge ? null : ee,
            hidden: 1 === (1 & He),
            qualityLevel: He >> 1 & 7
          }), De += fe
        } else if (ee === oe) {
          var Ae;
          Ze.events.push({
            atMs: we(De + 1),
            event: null !== (Ae = We[ie.getUint8(De + 5)]) && void 0 !== Ae ? Ae : "none"
          }), De += Te
        } else if (ee === Re && Ze.inputRecorded) Ze.actions.push({
          atMs: we(De + 1),
          bits: ie.getUint16(De + 5, !0)
        }), De += pe;
        else {
          if (ee !== ke || !Ze.inputRecorded) throw new Error(`Unknown replay telemetry record type ${ee} at byte ${De}`);
          {
            var Ye;
            const ee = ie.getUint8(De + 6);
            Ze.keys.push({
              atMs: we(De + 1),
              code: null !== (Ye = ye.d[ie.getUint8(De + 5)]) && void 0 !== Ye ? Ye : ye.d[0],
              down: 0 !== (ee & ze),
              bound: 0 !== (ee & Be),
              inPlay: 0 !== (ee & Ee)
            }), De += Xe
          }
        }
      }
      return Ze
    }
  },
  36938: ee => {
    ee.exports = function(ee, ie, He, ye) {
      var be = self || window;
      try {
        try {
          var Me;
          try {
            Me = new be.Blob([ee])
          } catch (Je) {
            (Me = new(be.BlobBuilder || be.WebKitBlobBuilder || be.MozBlobBuilder || be.MSBlobBuilder)).append(ee), Me = Me.getBlob()
          }
          var Ke = be.URL || be.webkitURL,
            Ue = Ke.createObjectURL(Me),
            Fe = new be[ie](Ue, He);
          return Ke.revokeObjectURL(Ue), Fe
        } catch (Je) {
          return new be[ie]("data:application/javascript,".concat(encodeURIComponent(ee)), He)
        }
      } catch (Je) {
        if (!ye) throw Error("Inline worker is not supported");
        return new be[ie](ye, He)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);