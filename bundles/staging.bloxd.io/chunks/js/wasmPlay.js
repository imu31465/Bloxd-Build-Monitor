export const id = 63;
export const ids = [63, 115, 116, 136];
export const modules = {
  39690: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      h: () => bS
    });
    const tS = "The world isn't loaded, so no blocks can be seen.",
      bS = "The world isn't loaded, so nothing in it can be seen."
  },
  39119: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => QS,
      d: () => DS,
      e: () => PS
    });
    var tS = gS(4935),
      bS = gS(2953),
      XS = gS(2022);
    const xS = new Map(Object.entries(tS.j).map((SS => {
      let [HS, gS] = SS;
      return [gS, HS]
    })));

    function NS(SS) {
      return (0, XS.D)(SS).toFixed(1)
    }

    function qS(SS, HS) {
      return `camera set by ${xS.get(SS[HS+1])}: heading ${`${NS(SS[HS+2])} -> ${NS(SS[HS+4])}`} deg, pitch ${`${NS(SS[HS+3])} -> ${NS(SS[HS+5])}`} deg, at ${SS[HS].toFixed(1)} ms`
    }
    class uS {
      constructor(SS, HS) {
        this.width = SS, this.hf = HS, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(SS * HS)
      }
      push(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let tS = 0; tS < this.width; tS++) gS[tS] = SS[HS + tS];
        return this.next = (this.next + 1) % this.hf, this.size = Math.min(this.size + 1, this.hf), gS
      }
      lines() {
        const SS = [],
          HS = (this.next - this.size + this.hf) % this.hf;
        for (let gS = 0; gS < this.size; gS++) {
          const tS = (HS + gS) % this.hf * this.width;
          SS.push(Array.from(this.data.subarray(tS, tS + this.width)).join(","))
        }
        return SS
      }
    }
    const IS = 0,
      fS = 2,
      kS = 3,
      aS = 4;

    function KS(SS) {
      return Number.isFinite(SS) ? String(Math.round(10 * SS) / 10) : String(SS)
    }

    function jS(SS) {
      return Number.isFinite(SS) ? SS.toFixed(1) : String(SS)
    }
    class GS {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.IU = 0, this.pastLimit = 0, this.lockSkips = 0, this.NG = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.IU > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.IU > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class CS {
      constructor() {
        var SS = this;
        this.remote = (0, bS.r)(), this.tally = new GS, this.records = new uS(10, this.remote ? 1 : 3600), this.events = new uS(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [tS, bS, XS, xS, NS, qS, uS, GS, CS, nS] = SS.records.push(HS, gS), PS = SS.tally;
          switch (PS.frames++, uS) {
            case IS:
              return void PS.idle++;
            case aS:
              return void PS.NG++;
            case kS:
              return PS.lockSkips++, void(0 === XS && 0 === xS || SS.outlier(`lock skip dropped raw (${KS(XS)}, ${KS(xS)}) at ${jS(tS)} ms`))
          }
          PS.looked++, Number.isFinite(bS) && (PS.dtMin = Math.min(PS.dtMin, bS), PS.dtMax = Math.max(PS.dtMax, bS), PS.dtSum += bS, bS > 0 && (PS.peakRate = Math.max(PS.peakRate, Math.hypot(NS, qS) / bS))), PS.raw[0] += XS, PS.raw[1] += xS, PS.turned[0] += NS, PS.turned[1] += qS;
          const QS = Math.abs(XS) > nS || Math.abs(xS) > nS,
            DS = `raw (${KS(XS)}, ${KS(xS)}) over ${jS(bS)} ms, limit ${KS(nS)}, filter v (${GS.toFixed(3)}, ${CS.toFixed(3)}) px/ms, at ${jS(tS)} ms`;
          uS === fS ? (PS.IU++, SS.outlier(`spike put right: ${DS} -> turned (${KS(NS)}, ${KS(qS)})`)) : QS ? (PS.pastLimit++, SS.outlier(`kept past limit: ${DS}`)) : bS > 50 && (PS.longFrames++, SS.remote || SS.outlier(`long frame: ${DS}, turned in full`))
        }, this.onMouseMove = SS => {
          const HS = this.tally,
            {
              movementX: gS,
              movementY: tS
            } = SS;
          HS.events++;
          const bS = Math.max(Math.abs(gS), Math.abs(tS));
          HS.eventMax = Math.max(HS.eventMax, bS);
          const XS = null !== document.pointerLockElement,
            xS = this.event;
          xS[0] = SS.timeStamp, xS[1] = gS, xS[2] = tS, xS[3] = XS ? 1 : 0, this.events.push(xS), bS >= 200 && (HS.bigEvents++, this.eventOutlier(`big mousemove (${gS}, ${tS}) at ${jS(SS.timeStamp)} ms, lock ${XS?"Ku":"free"}`))
        }, this.onLockChange = () => {
          const SS = document.pointerLockElement;
          (0, bS.i)("look", `pointer lock ${SS?`gained (${SS.tagName.toLowerCase()})`:"lost"} at ${jS(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, bS.i)("look", `pointer lock request failed at ${jS(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, bS.i)("look", `page ${document.visibilityState} at ${jS(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const SS = this.tally;
          if (this.tally = new GS, !SS.moved() || this.remote && !SS.hasEvent()) return;
          const HS = SS.looked > 0 ? SS.dtSum / SS.looked : NaN,
            gS = [`${SS.frames} frames (${SS.looked} looked, ${SS.idle} idle${"wasm"===this.client?`, ${SS.NG} carried`:""})`, `dt avg ${jS(HS)} min ${jS(SS.dtMin)} max ${jS(SS.dtMax)}, ${SS.longFrames} long`, `${SS.events} mousemoves (max ${KS(SS.eventMax)} px, ${SS.bigEvents} big)`, `raw (${KS(SS.raw[0])}, ${KS(SS.raw[1])}) turned (${KS(SS.turned[0])}, ${KS(SS.turned[1])})`, `peak ${SS.peakRate.toFixed(2)} px/ms`, `put right ${SS.IU}, past limit ${SS.pastLimit}, lock skips ${SS.lockSkips}`, "lock " + (document.pointerLockElement ? "Ku" : "free")];
          SS.dropped > 0 && gS.push(`${SS.dropped} doubled spike copies dropped`), SS.cameraSets > 0 && gS.push(`${SS.cameraSets} camera sets`), SS.cameraSetsLost > 0 && gS.push(`${SS.cameraSetsLost} camera set records lost`), SS.lost > 0 && gS.push(`${SS.lost} records lost`), SS.suppressed > 0 && gS.push(`${SS.suppressed} outlier lines not shown`), (0, bS.i)("look", `1s: ${gS.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(SS, HS) {
        this.client = SS, this.takes = HS;
        const {
          screen: gS
        } = window;
        (0, bS.i)("look", `start: ${SS} client, dpr ${window.devicePixelRatio}, screen ${gS.width}x${gS.height}, pointer lock ${document.pointerLockElement?"Ku":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, bS.h)("look", this.dump))
      }
      outlier(SS) {
        const HS = this.tally;
        HS.outliers >= 20 ? HS.suppressed++ : (HS.outliers++, (0, bS.i)("look", SS))
      }
      eventOutlier(SS) {
        const HS = this.tally;
        HS.eventLines >= 10 ? HS.suppressed++ : (HS.eventLines++, (0, bS.i)("look", SS))
      }
      takeRecords() {
        if (null === this.takes) return;
        const SS = this.takes.look();
        if (SS.length >= 2) {
          this.tally.lost += SS[0], this.tally.dropped += SS[1];
          for (let HS = 2; HS + 10 <= SS.length; HS += 10) this.record(SS, HS)
        }
        const HS = this.takes.cameraSets();
        if (HS.length >= tS.c) {
          this.tally.cameraSetsLost += HS[0];
          for (let SS = tS.c; SS + tS.g <= HS.length; SS += tS.g) this.tally.cameraSets++, this.outlier(qS(HS, SS))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let nS = null;

    function PS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return nS ??= new CS, nS.start(SS, HS), nS.record
    }

    function QS() {
      var SS;
      null === (SS = nS) || void 0 === SS || SS.endTake()
    }

    function DS() {
      var SS;
      null === (SS = nS) || void 0 === SS || SS.droppedCopy()
    }
  },
  34117: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    const tS = new Set(["chunkBorders"])
  },
  34271: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      h: () => bS,
      i: () => IS
    });
    var tS = gS(1657);

    function bS(SS) {
      var HS;
      return {
        ...xS.store,
        yaw: xS.store.yaw + (null !== (HS = tS.c[SS].previewYaw) && void 0 !== HS ? HS : 0)
      }
    }
    const XS = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      xS = {
        player: XS,
        store: {
          ...XS,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function NS(SS, HS) {
      SS instanceof Promise ? SS.then(HS).catch((SS => {
        console.error("Couldn't open the preview", SS)
      })) : HS(SS)
    }
    class qS {
      constructor(SS) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, NS(SS, (SS => {
          this.closed ? SS.close() : (this.opened = SS, null !== this.size && SS.resize(this.size.width, this.size.height), null !== this.view && SS.show(this.view))
        }))
      }
      show(SS) {
        var HS;
        this.view = SS, null === (HS = this.opened) || void 0 === HS || HS.show(SS)
      }
      resize(SS, HS) {
        var gS;
        this.size = {
          width: SS,
          height: HS
        }, null === (gS = this.opened) || void 0 === gS || gS.resize(SS, HS)
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.opened) || void 0 === SS || SS.close(), this.opened = null
      }
    }
    class uS {
      constructor(SS) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(SS).then((SS => SS.ready)), NS(SS, (SS => {
          this.closed ? SS.close() : (this.opened = SS, null !== this.size && SS.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var SS, HS;
        return null !== (SS = null === (HS = this.opened) || void 0 === HS ? void 0 : HS.isReady()) && void 0 !== SS && SS
      }
      setCosmetic(SS, HS) {
        var gS;
        null === (gS = this.opened) || void 0 === gS || gS.setCosmetic(SS, HS)
      }
      playEmote(SS) {
        var HS;
        null === (HS = this.opened) || void 0 === HS || HS.playEmote(SS)
      }
      setOrbit(SS) {
        var HS;
        null === (HS = this.opened) || void 0 === HS || HS.setOrbit(SS)
      }
      resetCamera() {
        var SS;
        null === (SS = this.opened) || void 0 === SS || SS.resetCamera()
      }
      async untilDrawn(SS) {
        var HS;
        await this.ready, await (null === (HS = this.opened) || void 0 === HS ? void 0 : HS.untilDrawn(SS))
      }
      resize(SS, HS) {
        var gS;
        this.size = {
          width: SS,
          height: HS
        }, null === (gS = this.opened) || void 0 === gS || gS.resize(SS, HS)
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.opened) || void 0 === SS || SS.close(), this.opened = null
      }
    }
    const IS = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(SS) {
        this.host = SS
      }
      setDefaultHost(SS) {
        this.makeDefault = SS
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(SS) {
        return new qS(this.current().openMob(SS))
      }
      openPet(SS) {
        return new qS(this.current().openPet(SS))
      }
      openMobLineup(SS) {
        return new qS(this.current().openMobLineup(SS))
      }
      openCharacter(SS, HS) {
        return new uS(this.current().openCharacter(SS, HS))
      }
    }
  },
  5212: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS.h,
      i: () => bS,
      j: () => tS.n
    });
    var tS = gS(5221);
    const bS = [!1, !0].flatMap((SS => ["terrain", "liquid", "model"].map((HS => ({
      strict: SS,
      program: HS
    })))))
  },
  39226: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      ShaderPackPage: () => qS,
      harnessShaderPackMode: () => kS,
      setHarnessUrlShaderPack: () => fS,
      shaderPackPage: () => IS
    });
    var tS = gS(104),
      bS = gS(45),
      XS = (gS(3600), gS(5212), gS(3591)),
      xS = gS(6848);
    gS(6824);
    const NS = {
      status: "none"
    };
    class qS {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, XS.i)(tS.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), uS().then((SS => {
            SS && bS.g.removeItem(XS.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, XS.g)(tS.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const SS = await this.load();
        return "active" === SS.status ? SS.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((SS => (console.error("Failed to load the shader pack", SS), NS))).then((SS => (this.resolved ??= SS, SS))), this.pagePack
      }
      hasNone() {
        var SS;
        return "none" === (null === (SS = this.resolved) || void 0 === SS ? void 0 : SS.status)
      }
      block(SS) {
        this.resolved = {
          status: "blocked",
          messageKey: SS,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([gS.e(77), gS.e(133), gS.e(140)]).then((() => gS(41763))).then((SS => (SS.prefetchCompiler(), SS))), this.compiling
      }
      async readStored() {
        const SS = await uS();
        return SS && this.compiler().then((SS => SS.reconcileHint())).catch((SS => {
          console.error("Failed to correct the shader pack hint", SS)
        })), SS
      }
      async read() {
        const SS = await this.preload();
        return SS ? (await this.compiler()).compilePagePack(SS) : NS
      }
    }
    async function uS() {
      if (!(0, XS.j)(tS.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const SS = await (0, xS.f)(!0);
        return SS || bS.g.setItem(XS.d, !1), SS
      } catch (SS) {
        return console.error("Failed to read the stored shader pack", SS), bS.g.removeItem(XS.d), null
      }
    }
    const IS = new qS;

    function fS(SS, HS) {}

    function kS() {
      return null
    }
  },
  39267: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => fS,
      e: () => kS
    });
    var tS = gS(160),
      bS = gS(191),
      XS = gS(1573),
      xS = gS(3083),
      NS = gS(1588),
      qS = gS(36479),
      uS = gS(713),
      IS = gS(39226);

    function fS(SS) {
      (0, xS.reportClientError)("matchmake_failed", SS, tS.g[tS.g.SHADER_PACK])
    }
    async function kS(SS, HS) {
      var gS;
      const tS = null === (gS = await IS.shaderPackPage.preload()) || void 0 === gS ? void 0 : gS.listing,
        xS = (0, qS.c)();
      tS && null !== xS && await NS.b.reportShaderPackSession(SS, {
        packId: tS.packId,
        sourceHash: tS.sourceHash,
        game: (0, XS.h)(HS, bS.w, "other"),
        playSessionId: xS,
        visitSessionId: (0, uS.g)()
      })
    }
  },
  6848: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      f: () => XS
    });
    var tS = gS(45);
    const bS = "shaderPack";
    async function XS() {
      var SS;
      let HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (SS = await tS.e.getItem(bS, HS)) && void 0 !== SS ? SS : null
    }
  },
  6824: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      loadShaderPackTextures: () => xS,
      shaderPackTextures: () => NS
    });
    var tS = gS(5221);
    let bS = null,
      XS = null;

    function xS() {
      return XS ??= Promise.all([gS.e(72), gS.e(188)]).then((() => gS(40526))).then((SS => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: HS,
          textureNameToIndex: gS,
          textureAnimationData: XS
        } = SS;
        return bS ??= (0, tS.j)(gS, XS, HS), bS
      })), XS
    }

    function NS() {
      if (null === bS) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return bS
    }
  },
  39062: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS
    });
    var tS = gS(31),
      bS = gS(1366),
      XS = gS(3127);
    const xS = "Reconnecting";
    class NS {
      constructor(SS) {
        this.hooks = SS, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = SS => {
          SS.persisted || this.leave()
        }, this.controller = new XS.c((HS => SS.reconnect(HS)), {
          isSessionLive: () => !this.ended && SS.isLive(),
          onPhaseChanged: SS => {
            this.onPhaseChanged(SS)
          },
          onReconnected: HS => {
            SS.onReconnected(HS)
          },
          onGaveUp: HS => {
            !this.ended && SS.isLive() && SS.onGaveUp(this.sessionBased, HS)
          }
        })
      }
      onInitialInfo(SS, HS) {
        this.graceMs = SS, this.sessionBased = HS
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(SS) {
        this.ended || this.controller.onConnectionLost(SS, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const SS = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          HS = this.controller.heldToken;
        this.end(), SS && "" !== HS && this.hooks.releaseSeat(HS)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(SS) {
        const HS = (0, XS.p)(SS);
        HS !== this.stopped && (this.stopped = HS, this.hooks.freeze(HS));
        const gS = "frozen" === SS || "resuming" === SS && this.frozen;
        gS && !this.frozen ? (0, bS.u)(xS, {
          overridesPause: !0
        }) : !gS && this.frozen && (0, bS.q)(xS), this.frozen = gS, this.setListening("connected" !== SS), tS.k.cj(XS.o, gS ? "frozen" : SS)
      }
      setListening(SS) {
        SS !== this.listening && (this.listening = SS, SS ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39068: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    class tS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = SS, this.now = HS, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const SS = this.now(),
            HS = SS - this.lastCheckAt <= 2e3;
          this.lastCheckAt = SS;
          const gS = "visible" === document.visibilityState;
          !gS || HS && this.wasVisible || (this.resumedAt = SS), this.wasVisible = gS, gS && SS - this.lastHeardAt > 12e3 && SS - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = HS(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  34180: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(1149);

    function bS() {
      var SS, HS;
      return null !== (SS = null === (HS = screen.orientation) || void 0 === HS ? void 0 : HS.type) && void 0 !== SS ? SS : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const XS = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && bS() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = bS(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, tS.Zj)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const SS of this.resizers) SS()
          }
        }), 1e3)
      }
      heldSizer(SS) {
        let HS = !1;
        return () => {
          if (HS && this.isHeld()) return null;
          const gS = SS();
          return HS ||= null !== gS, gS
        }
      }
      onRelease(SS) {
        return this.resizers.add(SS), () => {
          this.resizers.delete(SS)
        }
      }
    }
  },
  39256: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS
    });
    let tS = !1;
    async function bS(SS, HS) {
      if (!tS) {
        tS = !0;
        try {
          const [{
            reloadBloxd: tS
          }, {
            NotificationProvider: bS
          }] = await Promise.all([Promise.resolve().then((() => gS(1844))), Promise.resolve().then((() => gS(1435)))]);
          if (!SS || !0 === await bS.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void tS(HS)
        } catch (bS) {
          console.error("Leaving the replay failed", bS)
        }
        tS = !1
      }
    }
  },
  39076: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      f: () => IS
    });
    var tS = gS(1822),
      bS = gS(198),
      XS = gS(1792),
      xS = gS(1898),
      NS = gS(1286),
      qS = gS(1216);
    async function uS(SS, HS) {
      return function(SS) {
        return "object" === typeof SS && null !== SS && SS.code === bS.c.VpnIp.code
      }(HS) && function(SS) {
        return XS.d.supports("appCheck") && SS.isLoggedIn() && !SS.hasTriedAppAttestation()
      }(SS) && await async function(SS) {
        try {
          const {
            token: HS
          } = await (0, xS.b)(), {
            "3PSIDMCPP": gS
          } = await (0, qS.postJsonWithMetricsCookiesAndJsonResponse)(`${NS.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: HS
          }, {
            retries: 0
          }, SS.getMetricsCookies());
          return SS.setAppAttestedAuthJwt(gS), !0
        } catch (HS) {
          return HS instanceof tS.e && "failed" === HS.code ? (console.warn("The app couldn't get an App Check token:", HS), SS.markAppAttestationTried()) : console.error("Failed to attest the app:", HS), !1
        }
      }(SS)
    }
    async function IS(SS, HS) {
      try {
        return await HS()
      } catch (gS) {
        if (!await uS(SS, gS)) throw gS
      }
      return HS()
    }
  },
  40997: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      g: () => qS
    });
    var tS = gS(1860);
    const bS = 33177600,
      XS = 3e4;
    let xS = !1;

    function NS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: NS = 1,
        type: qS = "image/png",
        quality: uS
      } = tS;
      if (!SS.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (xS) return Promise.reject(new Error("A screenshot is already being taken"));
      xS = !0;
      const IS = function(SS, HS, gS) {
        const tS = Math.max(1, SS),
          XS = Math.max(1, HS),
          xS = Math.min(1, gS / Math.max(tS, XS), Math.sqrt(bS / (tS * XS)));
        return {
          width: Math.max(1, Math.floor(tS * xS)),
          height: Math.max(1, Math.floor(XS * xS))
        }
      }(HS, gS, SS.maxTextureSize);
      return SS.resize(IS.width, IS.height, NS * IS.width / Math.max(1, HS)), new Promise(((HS, gS) => {
        let tS, bS = 2,
          NS = null;
        const IS = () => {
          var HS;
          xS = !1, null === (HS = NS) || void 0 === HS || HS(), clearTimeout(tS), SS.restoreSize()
        };
        tS = setTimeout((() => {
          IS(), gS(new Error("No frame was drawn to capture"))
        }), XS), NS = SS.onFrameDrawn((() => {
          if (bS--, bS > 0) return;
          const {
            canvas: tS
          } = SS, XS = {
            width: tS.width,
            height: tS.height
          };
          try {
            tS.toBlob((SS => {
              SS ? HS({
                blob: SS,
                ...XS
              }) : gS(new Error("The canvas gave no image"))
            }), qS, uS)
          } catch (xS) {
            gS(xS)
          } finally {
            IS()
          }
        }))
      }))
    }
    async function qS(SS, HS, gS) {
      try {
        const bS = await NS(SS, HS, gS);
        (0, tS.c)(bS.blob, `bloxd-screenshot-${bS.width}x${bS.height}-${Date.now()}.png`)
      } catch (bS) {
        console.error("Error taking screenshot:", bS)
      }
    }
  },
  39070: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => kS,
      e: () => IS
    });
    var tS = gS(198),
      bS = gS(1934),
      XS = gS(1290),
      xS = gS(9093);
    const NS = [250, 500, 1e3, 2e3, 1250],
      qS = 406;

    function uS(SS) {
      if ("object" !== typeof SS || null === SS) return !1;
      const {
        code: HS,
        message: gS
      } = SS, bS = tS.c.duplicateLobbyNameError;
      return (HS === bS.code || HS === qS) && (gS === bS.text || gS === bS.text + tS.g)
    }
    async function IS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bS.e;
      for (let bS = 0;; bS++) {
        let xS;
        (0, XS.m)(HS);
        try {
          return await SS()
        } catch (tS) {
          if (xS = NS[bS], void 0 === xS || !uS(tS)) throw tS
        }
        await gS(xS, HS)
      }
    }
    const fS = new Set([tS.c.duplicateLobbyNameError.code, tS.c.lobbyCantBeCreated.code, tS.c.roomDisposedEarlyError.code, tS.c.roomDisposedLateError.code, tS.c.serverRoomLimitReached.code]);

    function kS(SS) {
      if (uS(SS)) return !0;
      const HS = (0, xS.i)(SS);
      return "number" === typeof HS && fS.has(HS)
    }
  },
  39175: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(369),
      bS = gS(138),
      XS = gS(45);

    function xS() {
      XS.g.setItem(tS.Ob, XS.g.getItem(tS.Ob) + 1), (0, bS.j)() && XS.g.setItem(tS.Kb, XS.g.getItem(tS.Kb) + 1)
    }
  },
  36471: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => DS,
      f: () => wS
    });
    var tS = gS(1087),
      bS = gS(215),
      XS = gS(378),
      xS = gS(687),
      NS = gS(387),
      qS = gS(1089),
      uS = gS(699),
      IS = gS(727),
      fS = gS(4656),
      kS = gS(104),
      aS = gS(138),
      KS = gS(1844),
      jS = gS(118),
      GS = gS(36479),
      CS = gS(45),
      nS = gS(713),
      PS = gS(362),
      QS = gS(36485);

    function DS() {
      var SS, HS;
      return [...null !== (SS = navigator.languages) && void 0 !== SS ? SS : [null !== (HS = navigator.language) && void 0 !== HS ? HS : "none"], "en-gb"]
    }

    function wS(SS, HS, gS, wS, hS) {
      const ZS = (0, tS.m)(HS) ? (0, tS.t)(HS) : null,
        JS = SS.isLoggedIn() && void 0 !== (0, bS.c)(XS.m, aS.r) ? (0, PS.z)() : null,
        OS = {
          cookies: (0, KS.getAllCookiesForGameNameWithVariation)(HS),
          isMobile: (0, kS.isMobile)(),
          isUsingCustomGameTexturePack: null !== ZS && hS(ZS),
          generalCookies: {
            joinDiscord: !!CS.g.getItem("DiscordPressed"),
            newGo: fS.b,
            ...SS.getMetricsCookies(),
            trafficCode: wS,
            compliance: kS.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, kS.getBrowserName)(),
            version: (0, kS.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, kS.getPlatformType)(),
            deviceType: (0, jS.c)()
          },
          isLoggedIn: SS.isLoggedIn(),
          lobbyName: gS,
          languages: DS(),
          version: xS.b,
          siteUsed: aS.r,
          subsiteUsed: aS.A,
          playSessionId: (0, GS.h)(HS),
          visitSessionId: (0, nS.g)(),
          clientReason: uS.p.reason,
          budgetBasis: (0, QS.i)(),
          ...null !== IS.p && {
            diagClaim: IS.p.claimId
          },
          ...null !== JS && {
            webGpuLoss: JS
          }
        };
      return null !== ZS && (0, NS.yc)(ZS) ? (OS.lobbyName = (0, tS.k)(ZS, (0, tS.p)(HS), gS), {
        roomName: `classic_${qS.c}`,
        joinOptions: OS
      }) : {
        roomName: HS,
        joinOptions: OS
      }
    }
  },
  39102: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => aS,
      g: () => kS
    });
    const tS = "ue:",
      bS = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      XS = "[A-Za-z0-9]{1,24}",
      xS = 15,
      NS = new RegExp(`^${XS}$`);
    new RegExp(`^${tS}(${[...bS,"other"].join("|")}):(?:n|k(${XS})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function qS(SS, HS, gS, XS, qS) {
      const uS = "string" === typeof SS && bS.includes(SS) ? SS : "other";
      let IS = "n";
      return "string" === typeof HS ? IS = NS.test(HS) ? `k${HS}` : "n" : "number" === typeof gS && Number.isInteger(gS) && gS >= 0 && gS <= xS && (IS = `b${gS}`), `${tS}${uS}:${IS}:${XS?1:0}${qS?1:0}`
    }
    var uS = gS(1758),
      IS = gS(1846);
    let fS = null;

    function kS(SS) {
      const HS = SS instanceof Element && SS !== document.body && SS !== document.documentElement && !(0, uS.n)(SS) && !SS.closest("#root");
      return {
        editable: (0, IS.d)(SS),
        outsideView: HS
      }
    }

    function aS(SS) {
      return fS ??= function(SS) {
        try {
          const {
            editable: HS,
            outsideView: gS
          } = kS(SS.target), tS = SS;
          return qS(SS.type, tS.code, tS.button, HS, gS)
        } catch {
          return qS(null, null, null, !1, !1)
        }
      }(SS), fS
    }
  },
  40689: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS
    });
    var tS = gS(39690);

    function bS(SS) {
      return {
        current: () => SS,
        watch: () => () => {}
      }
    }

    function XS() {}
    const xS = Object.freeze([0, 0, 0]),
      NS = {
        states: {
          health: bS({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: bS({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: bS({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: bS({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: bS({}),
          creativeVisibility: bS({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: bS(null),
          heldItemAim: bS({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: bS(!1),
          gliderBoostFuel: bS(0),
          flight: bS({
            canFly: !1,
            flying: !1
          }),
          crafting: bS({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: bS({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: bS({}),
          fullInventory: bS(!1),
          crosshairTarget: bS({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: bS(!0),
          freeCamera: bS({
            allowed: !1,
            movesFly: !1
          }),
          replay: bS(null),
          replayEdits: bS(null),
          replayRecorder: bS({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: bS(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: XS,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: XS,
          setInventoryOpen: XS,
          changeIronChestPasskey: XS,
          dragReplayCamera: XS,
          applyTemporaryThirdPerson: XS,
          holdEmoteWheel: XS,
          recordFlyingMiddleText: XS,
          focusCrafting: XS,
          craftRecipe: () => ({
            XN: 0,
            jx: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: XS,
          setShopOpen: XS,
          buyShopItem: XS,
          lobbyManage: XS,
          sendChatMessage: XS,
          ignorePlayer: XS,
          reportPlayer: XS,
          reportWorldCodeChat: XS,
          requestDiscordReportKey: XS,
          reportLobbyOrGame: XS,
          playEmote: XS,
          updateMyCosmetic: XS,
          writeOnBoard: XS,
          writeBook: XS,
          writeNameTag: XS,
          setCustomLobbyBlock: XS,
          openIronChest: XS,
          sendCodeCollab: XS,
          clickCodeBlock: XS,
          bindCustomButtonKeys: XS,
          pressCustomButton: XS,
          moveReplayFreecam: XS,
          holdReplayFreecamVertical: XS,
          respawn: XS,
          wakeUp: XS,
          requestLeaderboard: XS,
          completeTask: XS,
          setServerCookie: XS,
          answerUiRequest: XS,
          chooseRewardedAd: XS,
          setCameraZoom: XS,
          setFreeCameraMovesFly: XS,
          setBlockHighlight: XS,
          setCrosshairInteractPrompt: XS,
          setLookSensitivity: XS,
          replayAction: XS,
          setReplayPlaying: XS,
          seekReplay: XS,
          setReplayCameraMode: XS,
          syncReplayCameraMode: XS,
          setReplayCameraKeyframe: XS,
          moveReplayCameraKeyframe: XS,
          deleteReplayCameraKeyframes: XS,
          setReplayPlaybackMark: XS,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: XS,
          exportReplayVideo: XS,
          toggleRecording: XS,
          saveClip: XS,
          setRecorderPrefs: XS,
          setReplayViewerOpen: XS
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => tS.d,
          worldCodeAiGameState: () => tS.h
        },
        lookups: {
          localPos: () => xS,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  40991: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS,
      f: () => XS
    });
    var tS = gS(2256),
      bS = gS(1087);

    function XS(SS, HS) {
      return null !== SS.gameSource && (0, tS.o)(HS, SS.gameSource)
    }

    function xS(SS, HS) {
      if (null === SS.gameSource || "" === SS.gameSource || null === HS) return !0;
      const gS = (0, bS.m)(HS) ? (0, bS.t)(HS) : null;
      return null !== gS && XS(SS, gS)
    }
  },
  40963: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS
    });
    var tS = gS(665),
      bS = gS(40972),
      XS = gS(40844);
    async function xS(SS) {
      const HS = await (0, bS.l)({
        Helmet: gS(37983),
        Chestplate: gS(37991),
        Gauntlets: gS(38011),
        Leggings: gS(37997),
        Boots: gS(38003)
      } [tS.d[SS]]);
      try {
        return (0, XS.k)(HS)
      } finally {
        HS.close()
      }
    }
    const NS = new class {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS.s;
        this.decode = SS, this.register = HS, this.decoded = new Map
      }
      warm() {
        for (let SS = 0; SS < tS.d.length; SS++) this.part(SS).catch((HS => {
          console.warn(`The grayscale armour ${tS.d[SS]} image didn't decode ahead of use`, HS)
        }))
      }
      async load(SS, HS) {
        const {
          width: gS,
          height: XS,
          pixels: xS
        } = await this.part(SS), NS = new ImageData(function(SS, HS) {
          const gS = new Uint8ClampedArray(SS.length);
          for (let tS = 0; tS < SS.length; tS += 4) gS[tS] = Math.round(SS[tS] * HS[0] / 255), gS[tS + 1] = Math.round(SS[tS + 1] * HS[1] / 255), gS[tS + 2] = Math.round(SS[tS + 2] * HS[2] / 255), gS[tS + 3] = SS[tS + 3];
          return gS
        }(xS, function(SS) {
          return [SS >>> 16 & 255, SS >>> 8 & 255, 255 & SS]
        }(HS)), gS, XS);
        let qS;
        try {
          qS = await createImageBitmap(NS, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (uS) {
          throw new bS.d("decode", `grayscale armour ${tS.d[SS]}`, {
            cause: uS
          })
        }
        return {
          id: this.register(qS),
          width: gS,
          height: XS
        }
      }
      part(SS) {
        const HS = this.decoded.get(SS);
        if (void 0 !== HS) return HS;
        const gS = this.decode(SS).catch((HS => {
          throw this.decoded.delete(SS), HS instanceof bS.d ? HS : new bS.d("decode", `grayscale armour ${tS.d[SS]}`, {
            cause: HS
          })
        }));
        return this.decoded.set(SS, gS), gS
      }
    }
  },
  40954: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      g: () => GS,
      h: () => IS,
      l: () => fS,
      m: () => jS
    });
    var tS = gS(40824),
      bS = gS(40963),
      XS = gS(40972);
    const xS = 396,
      NS = 1,
      qS = 2,
      uS = 3,
      IS = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8,
        GreyscaleArmour: 9
      },
      fS = {
        File: 0,
        Item: 1
      },
      kS = 0,
      aS = 1,
      KS = 2;

    function jS(SS) {
      const HS = (0, tS.l)();
      HS.catch((() => {}));
      let bS = null;
      return {
        glbUrl: SS,
        lifeformAtlasUrl: async SS => (await HS).lifeformAtlasUrl(SS),
        armourAtlasUrl: async () => (await gS.e(204).then((() => gS(34324)))).armourAtlasUrl,
        capeUrl: async SS => (await HS).capeUrl(SS),
        attachmentImageUrl: async SS => (await HS).attachmentImageUrl(SS),
        blockImageUrl: async SS => (await HS).blockImageUrl(SS),
        groupAtlasUrl: async SS => (await HS).groupAtlasUrl(SS),
        particleTextureUrl: async SS => (await HS).particleTextureUrl(SS),
        particleItemUrl: async SS => (bS ??= gS.e(38).then((() => gS(51080))).catch((SS => {
          throw bS = null, SS
        })), (await bS).particleItemUrl(SS))
      }
    }
    class GS {
      constructor(SS, HS) {
        var gS, xS, NS, qS;
        let uS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = SS, this.onFailure = HS, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.nK = !1, this.load = null !== (gS = uS.load) && void 0 !== gS ? gS : (SS, HS) => (0, XS.p)(SS, uS.fetchImage, HS), this.release = null !== (xS = uS.release) && void 0 !== xS ? xS : XS.w, this.fetchFile = null !== (NS = uS.fetchFile) && void 0 !== NS ? NS : SS => (0, tS.g)(SS), this.greyscaleArmour = null !== (qS = uS.greyscaleArmour) && void 0 !== qS ? qS : bS.d
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(SS, HS) {
        this.glbWrittenImages.set(SS, hS(HS))
      }
      glbTaken(SS, HS) {
        const gS = this.glbWrittenImages.get(SS);
        this.glbWrittenImages.delete(SS), HS && this.setGlbImages(SS, void 0 !== gS && gS.length > 0 ? gS : void 0)
      }
      setGlbImages(SS, HS) {
        var gS;
        this.glbTakenCount.set(SS, (null !== (gS = this.glbTakenCount.get(SS)) && void 0 !== gS ? gS : 0) + 1), void 0 === HS ? this.glbImages.delete(SS) : this.glbImages.set(SS, HS);
        const tS = [];
        for (const {
            key: bS
          }
          of this.loading.values()) bS.kind === IS.Glb && bS.word === SS && tS.push(bS);
        for (let bS = this.ready.length - 1; bS >= 0; bS--) {
          const {
            key: HS,
            id: gS
          } = this.ready[bS];
          HS.kind === IS.Glb && HS.word === SS && (this.ready.splice(bS, 1), null !== gS && (this.answered.delete(gS), this.release(gS)), tS.push(HS))
        }
        this.loadAgain(tS)
      }
      onEvent(SS) {
        if (this.nK) return;
        const HS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength);
        for (let gS = 0; gS + 8 <= SS.byteLength; gS += 8) {
          const SS = HS.getUint8(gS),
            tS = HS.getUint32(gS + 4, !0);
          if (SS === uS) {
            this.answered.delete(tS), this.release(tS);
            continue
          }
          const bS = {
            kind: HS.getUint8(gS + 1),
            index: HS.getUint8(gS + 2),
            word: tS
          };
          SS === NS ? this.want(bS) : SS === qS && this.loading.delete(CS(bS))
        }
      }
      reload(SS, HS) {
        const gS = gS => SS.includes(gS.kind) && (void 0 === HS || HS(gS)),
          tS = new Map;
        for (const bS of this.answered.values()) gS(bS) && tS.set(CS(bS), bS);
        for (const [bS, {
            key: XS
          }] of this.loading) gS(XS) && tS.set(bS, XS);
        this.loadAgain(tS.values())
      }
      loadAgain(SS) {
        for (const HS of SS) this.loading.delete(CS(HS)), this.want(HS)
      }
      drain(SS) {
        if (null !== SS)
          for (; this.ready.length > 0;) {
            if (!SS(xS, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.nK = !0, this.loading.clear(), this.ready.length = 0;
        for (const SS of this.answered.keys()) this.release(SS);
        this.answered.clear()
      }
      want(SS) {
        const HS = CS(SS);
        if (this.loading.has(HS)) return;
        const gS = {
          key: SS
        };
        this.loading.set(HS, gS), this.loadKey(SS).then((tS => {
          this.nK || this.loading.get(HS) !== gS ? this.release(tS.id) : (this.loading.delete(HS), this.answered.set(tS.id, SS), this.ready.push({
            record: PS(SS, kS, tS),
            key: SS,
            id: tS.id
          }))
        }), (tS => {
          if (this.nK || this.loading.get(HS) !== gS) return;
          this.loading.delete(HS), this.onFailure({
            key: SS,
            error: tS
          });
          const bS = tS instanceof XS.d && "decode" === tS.stage ? aS : KS;
          this.ready.push({
            record: PS(SS, bS, null),
            key: SS,
            id: null
          })
        }))
      }
      async loadKey(SS) {
        switch (SS.kind) {
          case IS.Glb:
            return this.load(await this.glbImage(SS), "none");
          case IS.LifeformAtlas:
            return this.load(nS(await this.sources.lifeformAtlasUrl(SS.word), SS), "none");
          case IS.ArmourAtlas:
            return this.load(nS(await this.sources.armourAtlasUrl(), SS), "none");
          case IS.Cape:
            return this.load(nS(await this.sources.capeUrl(SS.word), SS), "none");
          case IS.AttachmentImage:
            return this.load(nS(await this.sources.attachmentImageUrl(SS.word), SS), "none");
          case IS.GroupAtlas:
            return this.load(nS(await this.sources.groupAtlasUrl(SS.word), SS), "none");
          case IS.BlockImage:
            return this.load(nS(await this.sources.blockImageUrl(SS.word), SS), "none");
          case IS.Particle: {
            const HS = await (SS.index === fS.Item ? this.sources.particleItemUrl(SS.word) : this.sources.particleTextureUrl(SS.word));
            return this.load(nS(HS, SS), "flipY")
          }
          case IS.GreyscaleArmour:
            return this.greyscaleArmour.load(SS.index, SS.word);
          default:
            throw new XS.d("fetch", `image kind ${SS.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(SS) {
        var HS;
        let gS = this.glbImages.get(SS.word);
        if (void 0 === gS) {
          const HS = this.glbTakenCount.get(SS.word),
            tS = nS(await this.sources.glbUrl(SS.word), SS);
          try {
            gS = hS(await this.fetchFile(tS))
          } catch (bS) {
            throw new XS.d("fetch", tS, {
              cause: bS
            })
          }
          this.glbTakenCount.get(SS.word) === HS && this.glbImages.set(SS.word, gS)
        }
        const tS = null === (HS = gS) || void 0 === HS ? void 0 : HS[SS.index];
        if (!tS) throw new XS.d("decode", `image ${SS.index} of file ${2147483647&SS.word}`, {
          cause: null
        });
        return tS
      }
    }

    function CS(SS) {
      let {
        kind: HS,
        index: gS,
        word: tS
      } = SS;
      return `${HS}:${gS}:${tS}`
    }

    function nS(SS, HS) {
      if (null === SS) throw new XS.d("fetch", `no URL for image ${CS(HS)}`, {
        cause: null
      });
      return SS
    }

    function PS(SS, HS, gS) {
      var tS, bS, XS;
      const xS = new Uint8Array(16),
        NS = new DataView(xS.buffer);
      return NS.setUint8(0, SS.kind), NS.setUint8(1, SS.index), NS.setUint8(2, HS), NS.setUint32(4, SS.word, !0), NS.setUint32(8, null !== (tS = null === gS || void 0 === gS ? void 0 : gS.id) && void 0 !== tS ? tS : 0, !0), NS.setUint16(12, Math.min(null !== (bS = null === gS || void 0 === gS ? void 0 : gS.width) && void 0 !== bS ? bS : 0, 65535), !0), NS.setUint16(14, Math.min(null !== (XS = null === gS || void 0 === gS ? void 0 : gS.height) && void 0 !== XS ? XS : 0, 65535), !0), xS
    }
    const QS = 1179937895,
      DS = 1313821514,
      wS = 5130562;

    function hS(SS) {
      var HS;
      const gS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength);
      if (SS.byteLength < 20 || gS.getUint32(0, !0) !== QS || gS.getUint32(16, !0) !== DS) return [];
      let tS, bS = 20 + gS.getUint32(12, !0);
      try {
        tS = JSON.parse((new TextDecoder).decode(SS.subarray(20, bS)))
      } catch {
        return []
      }
      for (; bS + 8 <= SS.byteLength && gS.getUint32(bS + 4, !0) !== wS;) bS += 8 + gS.getUint32(bS, !0);
      const XS = null !== (HS = tS.images) && void 0 !== HS ? HS : [];
      if (0 === XS.length || bS + 8 > SS.byteLength) return XS.map((() => null));
      const xS = SS.subarray(bS + 8, Math.min(SS.byteLength, bS + 8 + gS.getUint32(bS, !0)));
      return XS.map((SS => {
        var HS, gS, bS;
        const XS = void 0 === SS.bufferView || null === (HS = tS.bufferViews) || void 0 === HS ? void 0 : HS[SS.bufferView];
        if (!XS || 0 !== (null !== (gS = XS.buffer) && void 0 !== gS ? gS : 0) || void 0 === XS.byteLength) return null;
        const NS = null !== (bS = XS.byteOffset) && void 0 !== bS ? bS : 0,
          qS = NS + XS.byteLength;
        return qS <= xS.byteLength ? xS.slice(NS, qS) : null
      }))
    }
  },
  40692: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      e: () => XS,
      i: () => bS
    });
    let tS = null;

    function bS(SS) {
      tS = SS
    }

    function XS(SS) {
      tS === SS && (tS = null)
    }

    function xS() {
      var SS;
      null === (SS = tS) || void 0 === SS || SS()
    }
  },
  36608: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      i: () => kS,
      m: () => CS,
      o: () => uS
    });
    var tS = gS(24),
      bS = gS(2510),
      XS = gS(2517),
      xS = gS(2526),
      NS = gS(2603),
      qS = gS(31);

    function uS(SS, HS) {
      return (!(0, xS.c)() || 0 === SS && 0 === HS) && (0, XS.y)(bS.g.Joystick, 0, SS, HS, 0)
    }
    const IS = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function fS(SS) {
      return SS.classList.contains("TouchKeyHit") && aS() ? null : SS.firstElementChild
    }

    function kS(SS) {
      return SS.classList.contains("TouchKeyHit") && !SS.classList.contains("CanvasZone") ? {
        whole: !aS(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: KS(fS(SS))
      }
    }

    function aS() {
      return document.documentElement.classList.contains(NS.m)
    }

    function KS(SS) {
      return !(SS instanceof HTMLElement) || SS.offsetWidth <= 0 || SS.offsetHeight <= 0 ? null : {
        width: SS.offsetWidth,
        height: SS.offsetHeight
      }
    }

    function jS(SS, HS) {
      const gS = SS => Math.min(65535, Math.round(4 * SS));
      return (gS(SS) | gS(HS) << 16) >>> 0
    }

    function GS(SS) {
      return {
        x: SS.left + SS.width / 2,
        y: SS.top + SS.height / 2,
        radius: Math.min(SS.width, SS.height) / 2
      }
    }
    const CS = new class {
      constructor(SS) {
        this.write = SS, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        HS ? this.elements.set(SS, {
          element: HS,
          hidden: gS
        }) : this.elements.delete(SS), this.measureOne(SS)
      }
      measure() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = SS.left, this.canvasTop = SS.top;
        for (const HS of this.elements.keys()) this.measureOne(HS)
      }
      hitZone(SS, HS) {
        let gS = null,
          tS = 1;
        for (const bS of this.elements.keys()) {
          const XS = this.shown(bS);
          if (!XS) continue;
          const {
            rect: xS,
            element: NS
          } = XS, qS = GS(xS), uS = Math.max(0, xS.width / 2 - qS.radius), IS = Math.max(0, xS.height / 2 - qS.radius), kS = Math.max(0, Math.abs(SS - qS.x) - uS), aS = Math.max(0, Math.abs(HS - qS.y) - IS), jS = NS.firstElementChild;
          let CS = Math.hypot(kS, aS) / qS.radius;
          const nS = KS(fS(NS));
          nS && (CS = Math.min(CS, Math.max(2 * Math.abs(SS - qS.x) / nS.width, 2 * Math.abs(HS - qS.y) / nS.height))), CS < tS && (gS = {
            code: bS,
            element: NS,
            key: jS,
            ...qS
          }, tS = CS)
        }
        return gS
      }
      measureOne(SS) {
        const HS = this.shown(SS);
        if (!HS) return void this.write(bS.g.TouchZone, SS, 0, 0, 0);
        const {
          rect: gS,
          element: tS
        } = HS, XS = GS(gS);
        this.write(bS.g.TouchZone, SS, XS.x - this.canvasLeft, XS.y - this.canvasTop, jS(gS.width, gS.height));
        const xS = KS(fS(tS));
        this.write(bS.g.TouchZone, 256 | SS, 0, 0, xS ? jS(xS.width, xS.height) : 0)
      }
      shown(SS) {
        const HS = this.elements.get(SS),
          gS = tS.b.get("worldPanelHud");
        if (!HS || HS.hidden || "none" === gS) return null;
        const bS = HS.element.getBoundingClientRect();
        return bS.width <= 0 || bS.height <= 0 ? null : {
          rect: bS,
          element: HS.element
        }
      }
    }(XS.y);
    (0, qS.m)(NS.f, (() => {
      CS.measure()
    }))
  },
  40743: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS,
      h: () => uS
    });
    var tS = gS(40869),
      bS = gS(39076),
      XS = gS(36471),
      xS = gS(40748),
      NS = gS(40716);
    const qS = tS.d.timeForPlayerToConnect - 1e4;
    async function uS(SS, HS, gS, tS) {
      let qS;
      try {
        qS = await SS.getTrafficCode()
      } catch (KS) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", KS), new NS.p(KS)
      }
      const {
        gameNameWithVariation: uS,
        lobbyName: IS
      } = HS, fS = () => {
        const HS = (0, XS.f)(SS, uS, IS, qS, (SS => {
          var HS;
          return null !== (HS = null === gS || void 0 === gS ? void 0 : gS.isUsingCustomGameTexturePack(SS)) && void 0 !== HS && HS
        }));
        HS.joinOptions.wasmClient = !0;
        const bS = (0, xS.F)();
        return null !== bS && (HS.joinOptions.renderBackend = bS), HS.joinOptions.joinAdHold = tS, HS
      }, {
        roomName: kS,
        joinOptions: aS
      } = fS();
      return {
        endpoint: HS.endpoint,
        roomName: kS,
        joinOptions: aS,
        session: {
          gameNameWithVariation: uS,
          lobbyName: IS,
          playerDbId: SS.whamm
        },
        optionsAfterRefusal: async HS => await (0, bS.c)(SS, HS) ? fS().joinOptions : null
      }
    }
  },
  40979: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => IS,
      d: () => XS,
      f: () => fS,
      h: () => xS
    });
    var tS = gS(40954),
      bS = gS(40824);
    const XS = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(SS) {
        this.change((() => {
          this.page = SS
        }))
      }
      setSessionFiles(SS) {
        const HS = void 0 !== this.session && void 0 === SS;
        if (this.change((() => {
            this.session = SS
          })), HS)
          for (const gS of [...this.pageListeners]) gS()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(SS) {
        return this.pageListeners.add(SS), () => {
          this.pageListeners.delete(SS)
        }
      }
      setFollower(SS) {
        this.follower = SS, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const SS of [...this.wantedListeners]) SS();
        this.startFollower()
      }
      onWanted(SS) {
        return this.wantedListeners.add(SS), () => {
          this.wantedListeners.delete(SS)
        }
      }
      onChange(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      startFollower() {
        const SS = this.follower;
        this.isWanted && null !== SS && (this.follower = null, SS((() => {
          this.follower = SS
        })))
      }
      change(SS) {
        const HS = this.current;
        if (SS(), this.current !== HS)
          for (const gS of this.listeners) gS()
      }
    };

    function xS(SS, HS) {
      return {
        ...SS,
        armourAtlasUrl: () => {
          var gS, tS;
          return null !== (gS = null === (tS = HS()) || void 0 === tS ? void 0 : tS.armourAtlasUrl()) && void 0 !== gS ? gS : SS.armourAtlasUrl()
        },
        lifeformAtlasUrl: gS => qS(HS(), (SS => SS.LIFEFORM_ATLAS_PATHS[gS]), (() => SS.lifeformAtlasUrl(gS))),
        groupAtlasUrl: gS => qS(HS(), (SS => SS.GROUP_ATLAS_PATHS[gS]), (() => SS.groupAtlasUrl(gS))),
        particleItemUrl: tS => uS(HS(), (async () => {
          const SS = await gS.e(38).then((() => gS(51080))).catch((() => null));
          return (null === SS || void 0 === SS ? void 0 : SS.particleItemSprite(tS)) || null
        }), (() => SS.particleItemUrl(tS))),
        blockImageUrl: gS => uS(HS(), (async () => {
          var SS, HS;
          return null !== (SS = null === (HS = await NS()) || void 0 === HS ? void 0 : HS.blockImageName(gS)) && void 0 !== SS ? SS : null
        }), (() => SS.blockImageUrl(gS)))
      }
    }

    function NS() {
      return (0, bS.l)().catch((() => null))
    }

    function qS(SS, HS, gS) {
      return uS(SS, (async () => {
        var SS;
        const gS = await NS(),
          tS = null === gS ? null : HS(gS),
          bS = null !== (SS = null === tS || void 0 === tS ? void 0 : tS.slice(tS.lastIndexOf("/") + 1)) && void 0 !== SS ? SS : null;
        return "Player_Atlas" === bS ? null : bS
      }), gS)
    }
    async function uS(SS, HS, gS) {
      if (null !== SS) {
        const gS = await HS(),
          tS = null === gS ? null : SS.textureUrl(gS);
        if (null !== tS) return tS
      }
      return gS()
    }
    const IS = 0;

    function fS(SS) {
      const HS = [tS.h.ArmourAtlas, tS.h.LifeformAtlas, tS.h.GroupAtlas, tS.h.BlockImage, tS.h.Particle];
      SS.reload(HS, (SS => {
        switch (SS.kind) {
          case tS.h.Particle:
            return SS.index === tS.l.Item;
          case tS.h.LifeformAtlas:
            return SS.word !== IS;
          default:
            return !0
        }
      }))
    }
  },
  40871: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      e: () => NS,
      h: () => xS,
      k: () => bS,
      l: () => XS
    });
    const tS = 1e3;

    function bS() {
      qS((() => {
        window.location.reload()
      }))
    }

    function XS() {
      return new Promise((() => {}))
    }

    function xS(SS) {
      qS((() => {
        window.location.replace(SS(window.location.href))
      }))
    }

    function NS(SS) {
      Promise.resolve().then((() => gS(113))).then((HS => {
        let {
          currentUrl: gS
        } = HS;
        xS((() => gS.mergeSearchParamsInto(SS)))
      }), (() => {
        xS((() => SS))
      }))
    }

    function qS(SS) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => gS(1844))).then((HS => {
        let {
          prepareForUnloadWithoutConfirmation: gS
        } = HS;
        try {
          gS()
        } catch (tS) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", tS), window.onbeforeunload = null
        }
        SS()
      }), (() => {
        window.onbeforeunload = null, SS()
      })) : SS()
    }
  },
  5242: (SS, HS, gS) => {
    function tS(SS, HS) {
      return bS(SS, HS)
    }

    function bS(SS, HS) {
      if (SS === HS) return !0;
      if ("object" !== typeof SS || "object" !== typeof HS || null === SS || null === HS || Array.isArray(SS) !== Array.isArray(HS)) return !1;
      const gS = SS,
        tS = HS,
        XS = Object.keys(gS);
      return XS.length === Object.keys(tS).length && XS.every((SS => Object.prototype.hasOwnProperty.call(tS, SS) && bS(gS[SS], tS[SS])))
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  40931: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => wS,
      f: () => QS,
      j: () => jS,
      k: () => KS
    });
    var tS = gS(1934),
      bS = gS(1290),
      XS = gS(39070),
      xS = gS(36503),
      NS = gS(39087),
      qS = gS(40716);
    const uS = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      IS = 3,
      fS = [500, 1500];

    function kS(SS) {
      const HS = new URL(SS);
      return {
        secure: "https:" === HS.protocol || "wss:" === HS.protocol,
        host: HS.host,
        pathname: HS.pathname.replace(/\/+$/, ""),
        search: HS.searchParams.toString()
      }
    }

    function aS(SS, HS, gS) {
      const {
        secure: tS,
        host: bS,
        pathname: XS,
        search: xS
      } = kS(SS);
      return `${tS?"https":"http"}://${bS}${XS}/matchmake/${HS}/${encodeURIComponent(gS)}${xS?`?${xS}`:""}`
    }

    function KS(SS, HS) {
      var gS;
      const tS = null !== (gS = HS.protocol) && void 0 !== gS ? gS : "ws";
      if ("ws" !== tS) throw new Error(`seat reservation asks for the ${tS} transport`);
      const {
        secure: bS,
        host: XS,
        pathname: xS,
        search: NS
      } = kS(SS), qS = new URLSearchParams(NS);
      qS.append("sessionId", HS.sessionId), HS.reconnectionToken && qS.append("reconnectionToken", HS.reconnectionToken);
      return `${bS?"wss":"ws"}://${HS.room.publicAddress||`${XS}${xS}`}/${HS.room.processId}/${HS.room.roomId}?${qS.toString()}`
    }
    async function jS(SS, HS, gS) {
      var NS;
      let uS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const kS = null !== (NS = uS.sleep) && void 0 !== NS ? NS : tS.e,
        KS = new bS.b(uS.signal),
        jS = new xS.d((() => {
          (0, bS.f)(KS.controller, new xS.e("seat"))
        })),
        {
          signal: PS
        } = KS;
      try {
        const tS = await (0, XS.e)((() => async function(SS, HS, gS, tS) {
          var XS;
          const {
            signal: xS,
            sleep: NS
          } = tS, uS = aS(SS, "joinOrCreate", HS), kS = JSON.stringify(gS);
          let KS = null;
          for (let aS = 0; aS < IS; aS++) {
            var jS;
            if (aS > 0) await NS(null !== (jS = fS[aS - 1]) && void 0 !== jS ? jS : 1500, xS);
            let SS;
            (0, bS.m)(xS);
            try {
              SS = await CS(uS, kS, tS)
            } catch (PS) {
              (0, bS.m)(xS), KS = GS(PS);
              continue
            }
            const {
              response: HS,
              answer: gS,
              refusal: XS,
              lost: IS
            } = SS;
            if (null === IS) {
              if (null !== XS) throw nS(XS, gS);
              if (HS.ok && null !== gS && hS(gS)) return gS;
              KS = new qS.o(`seat request answered HTTP ${HS.status}${null===gS?" without JSON":" without a seat"}`, !1, void 0, HS.status)
            } else KS = GS(IS.error)
          }
          throw null !== (XS = KS) && void 0 !== XS ? XS : new qS.o("seat request made no attempt", !1)
        }(SS, HS, gS, {
          ...uS,
          signal: PS,
          sleep: kS
        })), PS, kS);
        return jS.answered(), tS
      } finally {
        jS.stop(), KS.unfollow()
      }
    }

    function GS(SS) {
      return new qS.o(SS instanceof Error ? SS.message : String(SS), !0, SS)
    }
    async function CS(SS, HS, gS) {
      var tS;
      const {
        signal: XS
      } = gS, xS = null !== (tS = gS.fetch) && void 0 !== tS ? tS : fetch, NS = await xS(SS, {
        method: "POST",
        headers: {
          ...uS,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: HS,
        credentials: "include",
        signal: XS
      }), {
        answer: qS,
        lost: IS
      } = await async function(SS) {
        try {
          const HS = await SS.json();
          return {
            answer: "object" === typeof HS && null !== HS ? HS : null,
            lost: null
          }
        } catch (HS) {
          return {
            answer: null,
            lost: HS instanceof SyntaxError ? null : {
              error: HS
            }
          }
        }
      }(NS), fS = null !== qS && "string" === typeof qS.error ? qS.error : null;
      var kS;
      null !== fS && (null === (kS = gS.onRefusal) || void 0 === kS || kS.call(gS));
      return (0, bS.m)(XS), {
        response: NS,
        answer: qS,
        refusal: fS,
        lost: IS
      }
    }

    function nS(SS, HS) {
      return new qS.k(SS, "number" === typeof(null === HS || void 0 === HS ? void 0 : HS.code) ? HS.code : 0, (0, NS.m)(SS).text)
    }
    class PS extends Error {
      constructor(SS, HS) {
        super(SS), this.code = HS, this.name = "SeatHttpError"
      }
    }
    async function QS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: bS,
        answer: XS,
        refusal: xS,
        lost: NS
      } = await CS(aS(SS, "reconnect", HS), JSON.stringify({
        reconnectionToken: gS
      }), tS);
      if (null !== NS) throw NS.error;
      if (!bS.ok) {
        const SS = null !== XS && "number" === typeof XS.code && 0 !== XS.code ? XS.code : bS.status;
        throw new PS(`the seat's reconnect was refused: ${null!==xS&&void 0!==xS?xS:`HTTP ${bS.status}`}`, SS)
      }
      if (null !== xS) throw nS(xS, XS);
      if (null === XS || !hS(XS)) throw new Error("the seat's reconnect answered " + (null === XS ? "without JSON" : "without a seat"));
      return {
        ...XS,
        reconnectionToken: gS
      }
    }
    const DS = 10;

    function wS(SS) {
      if (SS.byteLength < 2 || SS[0] !== DS) return null;
      const HS = 2 + SS[1];
      return HS > SS.byteLength ? null : (new TextDecoder).decode(SS.subarray(2, HS))
    }

    function hS(SS) {
      const HS = SS.room;
      return "string" === typeof SS.sessionId && "object" === typeof HS && null !== HS && "string" === typeof HS.roomId && "string" === typeof HS.processId && "string" === typeof HS.name
    }
  },
  40632: (SS, HS, gS) => {
    gS.d(HS, {
      $: () => PS,
      A: () => hS,
      B: () => vS,
      F: () => QS,
      G: () => DS,
      K: () => GS,
      M: () => OS,
      P: () => LS,
      Q: () => KS,
      U: () => AS,
      W: () => nS,
      _: () => CS,
      b: () => bS,
      db: () => wS,
      e: () => YS,
      i: () => ES,
      l: () => aS,
      m: () => jS,
      o: () => cS,
      r: () => ZS,
      t: () => dS,
      x: () => JS
    });
    var tS = gS(3140);
    const bS = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function XS(SS, HS) {
      return !ArrayBuffer.isView(SS) || SS instanceof DataView ? Array.isArray(SS) ? SS.map((SS => HS(SS))) : SS : Array.from(SS, (SS => HS(SS)))
    }

    function xS(SS) {
      if ("string" !== typeof SS) return SS;
      for (let HS = 0; HS < SS.length; HS++) {
        const gS = SS.charCodeAt(HS);
        if (gS >= 55296 && gS <= 57343) return qS.decode(NS.encode(SS))
      }
      return SS
    }
    const NS = new TextEncoder,
      qS = new TextDecoder;

    function uS(SS) {
      return SS
    }
    let IS;

    function fS(SS) {
      return null === SS || "object" !== typeof SS ? SS : [xS(SS.Mq), xS(SS.Fq)]
    }

    function kS(SS) {
      return null === SS || "object" !== typeof SS ? SS : [XS(SS.dt, uS), XS(SS.Xx, uS)]
    }

    function aS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Ju), xS(HS.Ou)];
      var HS
    }

    function KS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.id, HS.GI];
      var HS
    }

    function jS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.BX, xS(HS.MX), HS.FX, xS(HS.oX), HS.rX, HS.Sx, HS.Fx, xS(HS.Rx), xS(HS.Tx)];
      var HS
    }

    function GS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.bI, uS), HS.XI];
      var HS
    }

    function CS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.ju, (SS => xS(SS))), xS(HS.Gu), HS.Cu];
      var HS
    }

    function nS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.sx, uS), xS(HS.Bx), HS.Mx];
      var HS
    }

    function PS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.wt), xS(HS.ht)];
      var HS
    }

    function QS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.gN)];
      var HS
    }

    function DS(SS) {
      return xS(SS)
    }

    function wS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Fu), xS(HS.Ru), xS(HS.Mq), xS(HS.Fq)];
      var HS
    }

    function hS(SS) {
      return fS(SS)
    }

    function ZS(SS) {
      return fS(SS)
    }

    function JS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.bx)];
      var HS
    }

    function OS(SS) {
      return SS
    }

    function dS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Ex), xS(HS.Lx)];
      var HS
    }

    function cS(SS) {
      return xS(SS)
    }

    function vS(SS) {
      return kS(SS)
    }

    function ES(SS) {
      return kS(SS)
    }

    function LS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Tu)];
      var HS
    }

    function YS(SS) {
      return (IS ??= (0, tS.e)().map((SS => SS.name)), IS).map((HS => {
        return "string" === typeof(gS = SS[HS]) ? xS(gS) : XS(gS, uS);
        var gS
      }))
    }

    function AS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.Vu, HS.iu, HS.Wu];
      var HS
    }
  },
  40986: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(40991),
      bS = gS(40979);
    const XS = new class {
      constructor(SS) {
        this.pack = SS, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, SS.onWanted((() => {
          this.release()
        }))
      }
      setGame(SS) {
        if (void 0 === SS && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const HS = this.inGame();
        if (this.game = SS, this.update(), this.inGame() !== HS)
          for (const gS of this.gameListeners) gS()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(SS) {
        return this.gameListeners.add(SS), () => {
          this.gameListeners.delete(SS)
        }
      }
      unwantedLeave(SS) {
        SS && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(SS) {
        null !== SS && SS === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const SS = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, SS && this.setGame(void 0)
      }
      setSettled(SS) {
        this.settle = SS, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, tS.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(bS.d)
  },
  5234: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      g: () => NS
    });
    var tS = gS(2256),
      bS = gS(5242);
    let XS = null;

    function xS(SS) {
      XS = {
        pack: SS.metaData.id === tS.d ? null : SS
      }
    }

    function NS(SS) {
      return !(null === XS || !(0, bS.d)(XS.pack, SS)) && (XS = null, !0)
    }
  },
  40704: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      followPageUiPack: () => XI,
      packForGame: () => bI,
      playWasmGame: () => CI,
      prefetchWasmPreviews: () => uq,
      setGamePackConfirm: () => Cu,
      startWasmPlay: () => II,
      startWasmPreviews: () => qq
    });
    var tS = gS(198),
      bS = gS(1329),
      XS = gS(160),
      xS = gS(39106),
      NS = gS(2060),
      qS = gS(31),
      uS = gS(4794),
      IS = gS(1390),
      fS = gS(1830),
      kS = gS(1400),
      aS = gS(39256),
      KS = gS(1378),
      jS = gS(39267),
      GS = gS(39175),
      CS = gS(36479),
      nS = gS(39070),
      PS = gS(9093),
      QS = gS(36503),
      DS = gS(40707),
      wS = gS(4911),
      hS = gS(40625),
      ZS = gS(40689),
      JS = gS(40632);
    const OS = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        gliderBoostFuel: !0,
        crosshairTarget: !0,
        inventory: !0,
        crafting: !0,
        stationItems: !0,
        itemInfo: !0,
        creativeVisibility: !0,
        fullInventory: !0,
        replay: !0,
        replayEdits: !0,
        replayRecorder: !0,
        replayVideoExporting: !0,
        players: !0,
        lobbyLeaderboardRows: !0,
        freeCamera: !0
      },
      events: {
        hotbarSlotRequested: !0,
        hotbarScrolled: !0,
        numberKeyPressed: !0,
        shotDamageToShow: !0,
        chatReceived: !0,
        chestToggled: !0,
        chestRefreshed: !0,
        inventorySynced: !0,
        inventoryDropRequested: !0,
        enchantingTableOpened: !0,
        localEffectUpdated: !0,
        kill: !0,
        replayUiActionRequested: !0,
        replayViewerRequested: !0,
        cosmeticsUpdated: !0,
        boardEditRequested: !0,
        ironChestOpenRequested: !0
      },
      commands: {
        clickCodeBlock: !0,
        selectHotbarSlot: !0,
        setCrosshairInteractPrompt: !0,
        sendChatMessage: !0,
        removeInventoryItem: !0,
        swapInventorySlots: !0,
        moveInventoryItem: !0,
        quickMoveInventoryItem: !0,
        setInventoryOpen: !0,
        closeChest: !0,
        focusCrafting: !0,
        craftRecipe: !0,
        salvageItem: !0,
        enchantItem: !0,
        changeIronChestPasskey: !0,
        openIronChest: !0,
        completeTask: !0,
        setServerCookie: !0,
        answerUiRequest: !0,
        requestLeaderboard: !0,
        chooseRewardedAd: !0,
        ignorePlayer: !0,
        reportPlayer: !0,
        reportWorldCodeChat: !0,
        requestDiscordReportKey: !0,
        reportLobbyOrGame: !0,
        updateMyCosmetic: !0,
        holdEmoteWheel: !0,
        writeOnBoard: !0,
        writeBook: !0,
        writeNameTag: !0,
        setCustomLobbyBlock: !0,
        sendCodeCollab: !0,
        replayAction: !0,
        setReplayPlaying: !0,
        seekReplay: !0,
        setReplayCameraMode: !0,
        syncReplayCameraMode: !0,
        setReplayCameraKeyframe: !0,
        moveReplayCameraKeyframe: !0,
        deleteReplayCameraKeyframes: !0,
        setReplayPlaybackMark: !0,
        cropReplay: !0,
        holdReplayForShaderPackFailure: !0,
        exportReplayVideo: !0,
        toggleRecording: !0,
        saveClip: !0,
        setRecorderPrefs: !0,
        setReplayViewerOpen: !0,
        recordFlyingMiddleText: !0,
        dragReplayCamera: !0,
        moveReplayFreecam: !0,
        holdReplayFreecamVertical: !0,
        setShopOpen: !0,
        buyShopItem: !0,
        setFreeCameraMovesFly: !0,
        setBlockHighlight: !0,
        lobbyManage: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        targetedBlockPos: !0,
        blockAtViewPoint: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0,
        freeCameraPos: !0
      }
    };

    function dS(SS) {
      const HS = {
        ...ZS.e[SS]
      };
      for (const gS of Object.keys(OS[SS])) delete HS[gS];
      return HS
    }

    function cS() {
      var SS, HS;
      return null === (SS = null === (HS = (0, hS.h)()) || void 0 === HS ? void 0 : HS.localPlayerAlive()) || void 0 === SS || SS
    }

    function vS() {
      var SS, HS;
      return null !== (SS = null === (HS = (0, hS.h)()) || void 0 === HS ? void 0 : HS.localDeaths()) && void 0 !== SS ? SS : null
    }
    const ES = {
        current: cS,
        watch: SS => {
          let HS = cS(),
            gS = vS();
          return (0, wS.w)((() => {
            const tS = cS(),
              bS = vS(),
              XS = null !== bS && null !== gS && bS !== gS;
            gS = bS, XS ? (HS || SS(!0), SS(!1), tS && SS(!0), HS = tS) : tS !== HS && (HS = tS, SS(tS))
          }))
        }
      },
      LS = {
        states: {
          ...dS("states"),
          localPlayerAlive: ES
        },
        events: {
          ...dS("events"),
          localPlayerAliveSet: {
            watch: ES.watch
          }
        },
        commands: {
          ...dS("commands"),
          respawn: () => {
            var SS;
            null === (SS = (0, hS.h)()) || void 0 === SS || SS.respawn()
          },
          playEmote: SS => {
            var HS;
            null === (HS = (0, hS.h)()) || void 0 === HS || HS.send(JS.b.PlayEmote, (0, JS.F)({
              gN: SS
            }))
          },
          applyTemporaryThirdPerson: SS => {
            var HS;
            let {
              durationMs: gS
            } = SS;
            null === (HS = (0, hS.h)()) || void 0 === HS || HS.thirdPersonFor(gS)
          },
          bindCustomButtonKeys: SS => {
            var HS;
            null === (HS = (0, hS.h)()) || void 0 === HS || HS.bindCustomButtonKeys(SS)
          },
          pressCustomButton: SS => {
            var HS;
            let {
              id: gS,
              down: tS
            } = SS;
            null === (HS = (0, hS.h)()) || void 0 === HS || HS.pressCustomButton(gS, tS)
          },
          setLookSensitivity: () => {},
          wakeUp: SS => {
            const HS = (0, JS.P)({
                Tu: SS
              }),
              gS = () => {
                const SS = (0, hS.h)();
                return !(null !== SS && void 0 !== SS && SS.isSessionLive) || SS.send(JS.b.StopSleeping, HS)
              };
            if (!gS()) {
              const SS = (0, wS.w)((() => {
                gS() && SS()
              }))
            }
          },
          setCameraZoom: SS => {
            var HS;
            null === (HS = (0, hS.h)()) || void 0 === HS || HS.setCameraZoom(SS)
          }
        },
        queries: dS("queries"),
        lookups: {
          ...dS("lookups"),
          cameraZoom: () => {
            var SS, HS;
            return null !== (SS = null === (HS = (0, hS.h)()) || void 0 === HS ? void 0 : HS.cameraZoom()) && void 0 !== SS ? SS : 0
          }
        }
      };
    var YS = gS(39087),
      AS = gS(40716),
      yS = gS(40723),
      VS = gS(40743),
      iS = gS(1337),
      WS = gS(113),
      zS = gS(4656),
      US = gS(3841),
      pS = gS(1259);
    const sS = {
      VI: () => (0, iS.c)(),
      inbuiltOverwritten: () => zS.d,
      reflectApplyHit: () => pS.b,
      definerHit: () => WS.currentUrl.c,
      emitReplaced: () => (0, qS.c)(),
      confirmMesh: () => (0, US.d)(),
      confirmMeshHitStack: () => (0, US.f)()
    };
    var BS = gS(40727),
      MS = gS(40871);
    var FS = gS(24),
      RS = gS(2069),
      TS = gS(2111),
      oS = gS(1736),
      lS = gS(2144),
      mS = gS(1281),
      eS = gS(1334),
      rS = gS(40876);

    function SH() {
      return eS.f.get().getCurrentLanguageCode()
    }

    function HH(SS) {
      const HS = () => {
        SS({
          translate: (SS, HS) => (0, mS.y)(SH(), SS, HS),
          keyBindingText: SS => {
            const HS = (0, TS.r)(SS, FS.b.get("isTouchScreen"));
            return null !== HS ? (0, mS.C)(SH(), HS.translationKey, HS.params) : (0, TS.o)((0, TS.p)(SS))
          },
          isFriend: lS.g,
          hiddenNames: RS.c.shown,
          loadsFontRest: (0, rS.e)(SH())
        })
      };
      let gS = !1;
      const tS = () => {
          const SS = SH();
          (0, mS.n)(SS).then((() => {
            gS || SS !== SH() || HS()
          }))
        },
        bS = () => oS.d.getSocialState().friends.map((SS => SS.name.toLowerCase())).sort().join(" ");
      let XS = bS();
      HS(), tS();
      const xS = [(0, eS.j)((() => {
        HS(), tS()
      })), (0, qS.m)("customBindingsChanged", HS), (0, qS.m)("appManagerUpdated|isTouchScreen", HS), (0, lS.d)((() => {
        const SS = bS();
        SS !== XS && (XS = SS, HS())
      })), RS.c.subscribe(HS)];
      return () => {
        gS = !0;
        for (const SS of xS) SS()
      }
    }
    var gH = gS(687),
      tH = gS(1087),
      bH = gS(2092),
      XH = gS(369),
      xH = gS(191),
      NH = gS(3021),
      qH = gS(3030),
      uH = gS(38739),
      IH = gS(4812),
      fH = gS(40889),
      kH = gS(727),
      aH = gS(699),
      KH = gS(748),
      jH = gS(751),
      GH = gS(2083),
      CH = gS(3849),
      nH = gS(3435);
    let PH = null;
    var QH = gS(1286),
      DH = gS(1290),
      wH = gS(4556),
      hH = gS(3589),
      ZH = gS(61),
      JH = gS(364),
      OH = gS(362),
      dH = gS(40911),
      cH = gS(4917);
    var vH = gS(37723),
      EH = gS(40914);
    class LH {
      constructor(SS, HS) {
        this.showView = SS, this.holdForAd = HS
      }
      pointerUnlockRequestsChanged() {
        (0, dH.x)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, dH.n)())
        }]
      }
      setGameViewShown(SS) {
        this.showView(SS)
      }
      setGameView(SS) {
        (0, EH.k)(SS)
      }
      videoAdHold(SS, HS) {
        this.holdForAd(SS, HS)
      }
    }
    class YH {
      leave(SS) {
        ! function(SS) {
          if (null !== (0, kS.e)().websocketUrl) try {
            (0, wS.J)().leaveGame(SS)
          } finally {
            (0, kS.r)({
              websocketUrl: null
            })
          }
        }(SS)
      }
      isReplay() {
        return !1
      }
    }
    class AH {
      watchFrameStarts(SS) {
        return (0, wS.r)(SS)
      }
      watchFrames(SS) {
        return (0, wS.n)(SS)
      }
      watchTicks(SS) {
        return (0, wS.w)(SS)
      }
    }
    var yH = gS(40917);

    function VH(SS) {
      return SS >= 0 ? Math.min(1, SS) : 0
    }

    function iH(SS, HS) {
      const {
        fade: gS
      } = SS;
      return null === gS || HS - gS.at >= gS.ms ? SS.volume : gS.from + (SS.volume - gS.from) * Math.max(0, (HS - gS.at) / gS.ms)
    }

    function WH(SS) {
      const HS = Object.entries(SS),
        gS = new Uint32Array(HS.length);
      let tS = 0;
      for (const [xS, [, NS]] of HS.entries()) gS[xS] = NS.length, tS += NS.length;
      const bS = new Float64Array(3 * tS);
      let XS = 0;
      for (const [, xS] of HS)
        for (const SS of xS) bS.set(SS, XS), XS += 3;
      return {
        blocks: HS.map((SS => {
          let [HS] = SS;
          return HS
        })).join("\0"),
        counts: gS,
        values: bS
      }
    }
    class zH {
      constructor(SS, HS) {
        this.core = SS, this.warn = HS, this.latest = 0
      }
      async feed() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UH;
        const HS = ++this.latest;
        let gS;
        try {
          gS = await SS()
        } catch (tS) {
          return void(this.core.isStopped || HS !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", tS))
        }
        HS === this.latest && (this.core.setBlockColours(gS) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function UH() {
      return WH((await gS.e(204).then((() => gS(34324)))).averageColors)
    }
    var pH = gS(4926),
      sH = gS(4935),
      BH = gS(40672),
      MH = gS(3391),
      FH = gS(36277),
      RH = gS(40773),
      TH = gS(672),
      oH = gS(37084),
      lH = gS(665),
      mH = gS(387),
      eH = gS(40767);
    const rH = [3e4, 12e4, 3e5];
    class Sg extends Error {}
    const Hg = {
      mobTypes: TH.o,
      vehicleTypes: oH.e,
      mobAiStates: TH.k,
      playerPoses: lH.o
    };
    var gg = gS(40755),
      tg = gS(40802),
      bg = gS(1149),
      Xg = gS(40924),
      xg = gS(40928),
      Ng = gS(3127),
      qg = gS(39062),
      ug = gS(4954),
      Ig = gS(2510);
    const fg = Ig.A.KeysDisabled | Ig.A.LookFrozen | Ig.A.ClicksSuppressed,
      kg = Ng.d;
    var ag = (0, xg.d)("resumingConn");
    class Kg {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = SS, this.now = HS, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, ag, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new qg.e({
          reconnect: SS => this.reconnect(SS),
          isLive: () => SS.isLive(),
          onReconnected: HS => {
            this.landed = HS, SS.onReconnected(HS), this.landIfResumed()
          },
          onGaveUp: (HS, gS) => {
            this.abortAttempt(), SS.onGaveUp(HS, gS)
          },
          freeze: HS => {
            SS.uE(HS), (0, ug.i)(fg, HS ? fg : 0, "reconnectFreeze")
          },
          releaseSeat: SS => {
            this.releaseSeat(SS)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Xg.c)(this, ag)[ag]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(SS) {
        let {
          conn: HS,
          graceMs: gS,
          sessionBased: tS,
          replayOffer: bS
        } = SS;
        this.session.onInitialInfo(gS, tS), this.isResuming() && (this.initialInfoConn = HS, this.initialInfoOffer = bS, this.landIfResumed())
      }
      onResumeComplete(SS) {
        0 !== SS && (SS === (0, Xg.c)(this, ag)[ag] ? ((0, Xg.c)(this, ag)[ag] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = SS))
      }
      onDropped(SS) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Xg.c)(this, ag)[ag] = 0, this.session.onConnectionLost(SS)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Xg.c)(this, ag)[ag] = 0, this.session.end()
      }
      reconnect(SS) {
        const HS = this.attempt;
        if (null !== HS && this.awaitingJoinRoom(HS)) return HS.result;
        this.abortAttempt();
        const gS = new AbortController,
          tS = this.drops,
          bS = {
            attachedAt: null
          },
          XS = this.shell.reconnect(SS, gS.signal, (() => {
            bS.attachedAt = this.now()
          })).then((SS => {
            if (this.clearAttempt(xS), this.drops !== tS) throw new Error("the resumed room dropped before its attempt settled");
            return SS
          }), (SS => {
            throw this.clearAttempt(xS), SS
          })),
          xS = {
            abort: gS,
            socket: bS,
            result: XS
          };
        return this.attempt = xS, XS
      }
      clearAttempt(SS) {
        this.attempt === SS && (this.attempt = null)
      }
      abortAttempt() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const HS = this.attempt;
        this.attempt = null, null === HS || void 0 === HS || HS.abort.abort(SS)
      }
      awaitingJoinRoom(SS) {
        const HS = SS.socket.attachedAt;
        return null !== HS && this.now() - HS < kg
      }
      releaseSeat(SS) {
        const HS = this.attempt,
          gS = null !== HS && this.awaitingJoinRoom(HS);
        this.abortAttempt(new AS.m), gS || this.shell.releaseSeat(SS)
      }
      landIfResumed() {
        const SS = this.landed;
        if (null !== SS && SS.conn === this.initialInfoConn) {
          const HS = this.initialInfoOffer && this.completedEarlyConn !== SS.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !HS) return void this.session.onResumed();
          (0, Xg.c)(this, ag)[ag] = SS.conn, this.session.onResuming()
        }
      }
    }
    var jg = gS(39068),
      Gg = gS(40931),
      Cg = gS(36493),
      ng = gS(36485),
      Pg = gS(2256),
      Qg = gS(2022),
      Dg = gS(4438),
      wg = gS(40782),
      hg = gS(5234);

    function Zg(SS) {
      let {
        pack: HS,
        gameSource: gS
      } = SS;
      if (null !== gS && "" !== gS) return `game:${gS}`;
      if (null === HS) return "default";
      const {
        id: tS,
        version: bS
      } = HS.metaData;
      if (tS !== Pg.q.CUSTOM) return `${tS}@${bS}`;
      const XS = [];
      for (const xS of [HS.textureOverrides, HS.modelOverrides, HS.animations])
        for (const [SS, HS] of Object.entries(null !== xS && void 0 !== xS ? xS : {})) XS.push(`${SS}:${HS.length}`);
      return `${tS}:${(0,Qg.u)(XS.join())}`
    }
    var Jg = gS(4540),
      Og = gS(3403),
      dg = gS(40934),
      cg = gS(703),
      vg = gS(3405),
      Eg = gS(4634),
      Lg = gS(45),
      Yg = gS(40838),
      Ag = gS(4566),
      yg = gS(2517),
      Vg = gS(1733),
      ig = gS(1758),
      Wg = gS(1366),
      zg = gS(118),
      Ug = gS(337),
      pg = gS(39102),
      sg = gS(2526),
      Bg = gS(4947);
    const Mg = new Set([pH.Gb.KeyDown, pH.Gb.MouseMove, pH.Gb.MouseDown, pH.Gb.Wheel, pH.Gb.TouchStart, pH.Gb.TouchMove]);

    function Fg(SS) {
      return (SS.shiftKey ? pH._b.Shift : 0) | (SS.ctrlKey ? pH._b.Ctrl : 0) | (SS.altKey ? pH._b.Alt : 0) | (SS.metaKey ? pH._b.Meta : 0) | ("repeat" in SS && SS.repeat ? pH._b.Repeat : 0) | (SS.isTrusted ? 0 : pH._b.Untrusted | function(SS) {
        try {
          const {
            editable: HS,
            outsideView: gS
          } = (0, pg.g)(SS.target);
          return (HS ? pH._b.UntrustedEditable : 0) | (gS ? pH._b.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(SS))
    }

    function Rg(SS) {
      return "touchOnly" !== (0, zg.c)() && "function" === typeof SS.requestPointerLock
    }

    function Tg(SS) {
      return 0 === SS.button ? SS.altKey ? Bg.i["Alt+Left Click"] : Bg.i.Mouse1 : 1 === SS.button ? Bg.i.Mouse2 : Bg.i.Mouse3
    }
    const og = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      lg = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      mg = 32768,
      eg = 1;

    function rg(SS) {
      return Math.min(Math.max(Math.round(SS), 0), 65535)
    }

    function St(SS, HS, gS) {
      const tS = [],
        bS = (SS, HS, gS, bS) => {
          const XS = SS => {
            (0, ig.t)(SS) || gS(SS)
          };
          SS.addEventListener(HS, XS, bS), tS.push((() => {
            SS.removeEventListener(HS, XS, bS)
          }))
        },
        XS = {
          capture: !0,
          passive: !0
        },
        xS = (SS, gS, tS, bS, XS) => (!(0, sg.c)() || !Mg.has(SS)) && (HS(SS, gS, tS, bS, XS), !0),
        NS = () => document.pointerLockElement === SS,
        qS = (0, Ug.g)(),
        uS = SS => {
          SS.ctrlKey && gS.ctrlCombosAreGames() && !(0, ug.e)(SS.target) && SS.preventDefault()
        },
        IS = (SS, tS, bS) => {
          gS.inspect(SS, tS, !1), HS(pH.Gb.KeyUp, tS, 0, 0, (0, yg.r)(bS, SS.timeStamp)), gS.keyReleased(tS)
        },
        fS = new Map,
        kS = (SS, HS, gS) => SS[gS] || ("AltRight" === HS || "ControlLeft" === HS) && SS.getModifierState("AltGraph"),
        aS = new Map,
        KS = () => {
          fS.clear(), aS.clear()
        },
        jS = SS => {
          if (SS.isTrusted && document.hasFocus())
            for (const [HS, gS] of aS) aS.delete(HS), kS(SS, HS, gS) || (fS.delete(HS), IS(SS, Bg.i[HS], Fg(SS)))
        };
      SS.tabIndex = -1;
      let GS = 0,
        CS = 0;
      const nS = () => {
        const HS = SS.getBoundingClientRect();
        GS = HS.left, CS = HS.top
      };
      let PS = "mouse";
      const QS = () => !NS() && ("mouse" === PS || !gS.touchUiShown()),
        DS = (SS, HS, gS) => {
          const tS = (rg(SS.clientX - GS) | rg(SS.clientY - CS) << 16) >>> 0;
          xS(pH.Gb.MouseMove, pH.$b.Point, HS, gS, tS)
        };
      let wS = !1,
        hS = 0;
      const ZS = () => {
        wS && (wS = !1, gS.viewShown() && (0, dH.M)())
      };
      tS.push((() => {
        clearTimeout(hS)
      })), bS(window, "keydown", (SS => {
        "Escape" === SS.key ? (0, dH.D)(!0) : SS.repeat || (0, ug.e)(SS.target) || (wS = !0, clearTimeout(hS), hS = window.setTimeout(ZS, 0))
      }), XS), bS(window, "keydown", (SS => {
        ZS(), uS(SS), jS(SS);
        const HS = Bg.i[SS.code];
        if ("number" !== typeof HS || !gS.viewShown()) return;
        const tS = (0, ug.e)(SS.target);
        tS || !gS.prevents(HS) && !og.has(SS.code) || SS.preventDefault(), SS.repeat || gS.inspect(SS, HS, !0), xS(pH.Gb.KeyDown, HS, 0, 0, (0, yg.r)(Fg(SS), SS.timeStamp)) && fS.set(SS.code, HS), tS || gS.keyPressed(HS)
      }), {
        capture: !1,
        passive: !1
      }), bS(window, "keyup", (SS => {
        "Escape" === SS.key && (0, dH.D)(!1), uS(SS), fS.delete(SS.code), aS.delete(SS.code), jS(SS);
        const HS = Bg.i[SS.code];
        "number" === typeof HS && IS(SS, HS, Fg(SS))
      }), {
        capture: !0,
        passive: !1
      }), bS(window, "mousemove", (SS => {
        "mouse" === PS && QS() ? DS(SS, SS.movementX, SS.movementY) : NS() ? xS(pH.Gb.MouseMove, pH.$b.Stamped, SS.movementX, SS.movementY, (0, yg.r)(0, SS.timeStamp)) : xS(pH.Gb.MouseMove, 0, SS.movementX, SS.movementY, 0)
      }), XS);
      let JS = 0,
        OS = 0;
      const dS = [];
      let cS = !1,
        vS = !1;
      bS(SS, "mousedown", (SS => {
        if ((0, sg.c)()) return;
        jS(SS);
        const tS = 1 << SS.button;
        if (!NS() && (0, dH.K)() && (0, dH.g)() && (vS = !0, !cS)) return void(JS |= tS);
        JS &= ~tS;
        const bS = SS.button <= 2 ? Tg(SS) : void 0;
        void 0 !== bS && (dS[SS.button] = bS, gS.inspect(SS, bS, !0)), QS() && DS(SS, 0, 0), HS(pH.Gb.MouseDown, SS.button, SS.clientX, SS.clientY, (0, yg.r)(Fg(SS), SS.timeStamp)), OS |= tS, void 0 !== bS && gS.keyPressed(bS)
      }), XS), bS(window, "mouseup", (SS => {
        var tS;
        jS(SS);
        const bS = 1 << SS.button,
          XS = 0 !== (JS & ~OS & bS);
        if (JS &= ~bS, OS &= ~bS, XS) return;
        const xS = SS.button <= 2 ? null !== (tS = dS[SS.button]) && void 0 !== tS ? tS : Tg(SS) : void 0;
        void 0 !== xS && gS.inspect(SS, xS, !1), HS(pH.Gb.MouseUp, SS.button, SS.clientX, SS.clientY, (0, yg.r)(Fg(SS), SS.timeStamp)), void 0 !== xS && gS.keyReleased(xS)
      }), XS), bS(SS, "contextmenu", (SS => {
        SS.preventDefault()
      }), {
        passive: !1
      });
      const ES = SS => {
        (NS() || (0, dH.m)() && (0, Wg.v)()) && (SS.ctrlKey || qS && !document.fullscreenElement) && SS.preventDefault()
      };
      bS(SS, "wheel", (SS => {
        ES(SS), jS(SS), xS(pH.Gb.Wheel, SS.deltaMode, SS.deltaX, SS.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const LS = {
          capture: !0,
          passive: !1
        },
        YS = SS => {
          SS ? window.addEventListener("wheel", ES, LS) : window.removeEventListener("wheel", ES, LS)
        };
      YS((0, dH.m)()), tS.push((0, dH.s)(YS)), tS.push((() => {
        YS(!1)
      }));
      const AS = new Map,
        yS = new Set,
        VS = SS => {
          const HS = "stylus" === SS.touchType;
          for (const gS of AS.values())
            if (!gS.touched && (HS || Math.abs(SS.clientX - gS.x) <= eg && Math.abs(SS.clientY - gS.y) <= eg)) return gS.touched = !0, !0;
          return !1
        },
        iS = SS => 32767 & SS,
        WS = new Set,
        zS = SS => gS => {
          const tS = (0, yg.r)(Fg(gS), gS.timeStamp);
          SS !== pH.Gb.TouchStart && SS !== pH.Gb.TouchMove || ((SS, gS) => {
            const tS = SS.touches;
            if (tS)
              for (const bS of WS) {
                let SS = !1;
                for (let HS = 0; HS < tS.length && !SS; HS++) SS = iS(tS[HS].identifier) === bS;
                SS || (WS.delete(bS), HS(pH.Gb.TouchCancel, bS, 0, 0, gS))
              }
          })(gS, tS);
          const bS = gS.changedTouches;
          for (let HS = 0; HS < bS.length; HS++) {
            const gS = bS[HS];
            if (SS === pH.Gb.TouchStart && VS(gS) && yS.add(gS.identifier), yS.has(gS.identifier)) {
              SS !== pH.Gb.TouchEnd && SS !== pH.Gb.TouchCancel || yS.delete(gS.identifier);
              continue
            }
            const XS = iS(gS.identifier),
              NS = xS(SS, XS, gS.clientX - GS, gS.clientY - CS, tS);
            SS === pH.Gb.TouchStart ? NS && WS.add(XS) : SS !== pH.Gb.TouchMove && WS.delete(XS)
          }
        },
        US = zS(pH.Gb.TouchStart);
      bS(SS, "touchstart", (SS => {
        SS.preventDefault(), (0, sg.c)() || (gS.touchStarting(), US(SS))
      }), {
        passive: !1
      }), bS(SS, "touchmove", zS(pH.Gb.TouchMove), XS), bS(SS, "touchend", zS(pH.Gb.TouchEnd), XS), bS(SS, "touchcancel", zS(pH.Gb.TouchCancel), XS);
      const pS = SS => mg | 32767 & SS,
        sS = (SS, HS) => {
          xS(SS, pS(HS.pointerId), HS.clientX - GS, HS.clientY - CS, (0, yg.r)(Fg(HS), HS.timeStamp))
        };
      bS(window, "pointerdown", (HS => {
        PS = HS.pointerType, "mouse" === HS.pointerType && HS.target !== SS && gS.viewShown() && (0, dH.N)()
      }), XS), bS(SS, "pointerdown", (SS => {
        "pen" === SS.pointerType && 0 === SS.button && (0, dH.m)() && (0, Wg.v)() && (SS.preventDefault(), (0, sg.c)() || (AS.set(SS.pointerId, {
          x: SS.clientX,
          y: SS.clientY,
          touched: !1
        }), gS.touchStarting(), sS(pH.Gb.TouchStart, SS)))
      }), {
        passive: !1
      }), bS(window, "pointermove", (SS => {
        PS = SS.pointerType, AS.has(SS.pointerId) && sS(pH.Gb.TouchMove, SS), "mouse" !== SS.pointerType && QS() && DS(SS, 0, 0)
      }), XS);
      const BS = SS => HS => {
        AS.delete(HS.pointerId) && sS(SS, HS)
      };
      bS(window, "pointerup", BS(pH.Gb.TouchEnd), XS), bS(window, "pointercancel", BS(pH.Gb.TouchCancel), XS);
      let MS = 0;
      const FS = () => {
          MS = 0, nS(), gS.resized()
        },
        RS = () => {
          const SS = gS.sizeCanvas();
          null !== SS && HS(pH.Gb.Resize, 0, SS.cssWidth, SS.cssHeight, (0, yg.j)(SS.renderScale)), nS(), gS.resized(), 0 === MS && (MS = requestAnimationFrame(FS))
        };
      bS(window, "resize", RS, XS), tS.push(gS.watchRenderScale(RS)), tS.push((() => {
        cancelAnimationFrame(MS)
      })), bS(window, "focus", (SS => {
        SS.isTrusted && (HS(pH.Gb.Focus, 0, 0, 0, 0), gS.viewShown() && (0, dH.N)())
      }), {
        passive: !0
      });
      const TS = () => {
          (0, dH.D)(!1), JS = 0
        },
        oS = () => {
          WS.clear(), AS.clear(), yS.clear()
        };
      let lS = 0,
        mS = 0;
      bS(window, "blur", (tS => {
        TS(), (0, dH.j)();
        for (const SS of fS.keys()) {
          const HS = lg.get(SS);
          void 0 !== HS && aS.set(SS, HS)
        }
        tS.isTrusted && ((SS => {
          for (const [gS, tS] of AS) HS(pH.Gb.TouchCancel, pS(gS), tS.x, tS.y, (0, yg.r)(0, SS));
          AS.clear()
        })(tS.timeStamp), HS(pH.Gb.Blur, pH.s.KeepTouches, 0, 0, 0)), qS && tS.isTrusted && (clearTimeout(mS), mS = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const SS of fS.values()) IS(tS, SS, 0);
            KS()
          }
        }), 0)), clearTimeout(lS), lS = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Wg.v)() && gS.viewShown() && SS.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), tS.push((() => {
        clearTimeout(lS), clearTimeout(mS)
      })), bS(window, "mousedown", (HS => {
        qS && HS.isTrusted && !document.hasFocus() && (0, Wg.v)() && gS.viewShown() && (window.focus(), SS.focus({
          preventScroll: !0
        }))
      }), XS), bS(document, "visibilitychange", (() => {
        document.hidden ? (HS(pH.Gb.Blur, 0, 0, 0, 0), oS()) : document.hasFocus() && HS(pH.Gb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), tS.push((0, sg.g)((() => {
        TS(), HS(pH.Gb.Blur, pH.s.Release, 0, 0, 0), gS.keysReleased(), KS(), OS = 0, oS(), HS(pH.Gb.Joystick, 0, 0, 0, 0), document.hasFocus() && HS(pH.Gb.Focus, 0, 0, 0, 0)
      })));
      const eS = !gS.canLock(),
        rS = () => eS && !(0, dH.m)() ? pH.yc.Lockless : pH.yc.Released,
        SH = () => {
          NS() && (cS = !1, vS = !1), HS(pH.Gb.PointerLock, NS() ? pH.yc.Locked : rS(), 0, 0, 0), (0, dH.G)(NS())
        };
      return bS(document, "pointerlockchange", SH, {
        passive: !0
      }), bS(document, "pointerlockerror", (() => {
        cS ||= vS, vS = !1, (0, dH.q)()
      }), {
        passive: !0
      }), eS && tS.push((0, dH.s)((() => {
        HS(pH.Gb.PointerLock, rS(), 0, 0, 0)
      }))), RS(), HS(document.hasFocus() ? pH.Gb.Focus : pH.Gb.Blur, 0, 0, 0, 0), SH(), () => {
        for (const SS of tS.splice(0)) SS()
      }
    }
    var Ht = gS(34180),
      gt = gS(34166),
      tt = gS(2113);
    const bt = new Map(Bg.b.map(((SS, HS) => [SS, HS]))),
      Xt = ["jump", "primary-fire", "alt-fire"],
      xt = ["primary-fire", "alt-fire"];

    function Nt(SS) {
      return `${tt.b}${SS}`
    }
    const qt = ["forward", "backward", "left", "right", "sprint", "jump"];

    function ut(SS) {
      const HS = [];
      for (const gS of SS) {
        const SS = "string" === typeof gS ? Bg.i[gS] : void 0;
        "number" === typeof SS && HS.push(SS)
      }
      return HS
    }
    class It {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [SS, HS] of Object.entries(Bg.f)) this.keys.set(SS, HS);
        this.updateKeySets()
      }
      prevents(SS) {
        return this.preventKeys.has(SS)
      }
      moves(SS) {
        return this.movementKeys.has(SS)
      }
      checks(SS, HS) {
        return (HS ? this.checkedDown : this.checkedUp).has(SS)
      }
      sync(SS, HS) {
        for (const [gS, tS] of this.keys) {
          const bS = SS(Nt(gS)),
            XS = Array.isArray(bS) ? ut(bS) : Bg.f[gS];
          (XS.length !== tS.length || XS.some(((SS, HS) => SS !== tS[HS]))) && this.bind(gS, XS, HS)
        }
      }
      bind(SS, HS, gS) {
        const tS = bt.get(SS);
        if (void 0 !== tS) {
          gS(pH.Gb.Binding, 0, 0, 0, tS | pH.p.Clear << 8);
          for (const XS of [...HS, ...null !== (bS = Bg.g[SS]) && void 0 !== bS ? bS : []]) {
            var bS;
            gS(pH.Gb.Binding, XS, 0, 0, tS | pH.p.Add << 8)
          }
          this.keys.set(SS, HS), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const tS of Bg.j)
          for (const HS of null !== (SS = this.keys.get(Bg.b[tS])) && void 0 !== SS ? SS : []) {
            var SS;
            this.preventKeys.add(HS)
          }
        this.movementKeys.clear();
        for (const tS of qt)
          for (const SS of null !== (HS = this.keys.get(tS)) && void 0 !== HS ? HS : []) {
            var HS;
            this.movementKeys.add(SS)
          }
        for (const [tS, bS] of [
            [this.checkedDown, Xt],
            [this.checkedUp, xt]
          ]) {
          tS.clear();
          for (const SS of bS)
            for (const HS of null !== (gS = this.keys.get(SS)) && void 0 !== gS ? gS : []) {
              var gS;
              tS.add(HS)
            }
        }
      }
    }
    var ft = gS(4938),
      kt = gS(36608);
    const Kt = "[bloxd-wasm-client]";

    function jt() {
      return "inGame" === FS.b.get("gameState") && !(0, Vg.m)()
    }
    let Gt = null;

    function Ct(SS, HS) {
      Gt && HS.writePendingInput() && Gt.push(function(SS, HS) {
        let gS = "";
        for (const tS of HS) gS += tS.toString(16).padStart(2, "0");
        return gS ? `${SS} ${gS}` : String(SS)
      }(SS, HS.rings.input.written()))
    }
    const nt = [];

    function Pt(SS, HS, gS, tS) {
      SS === pH.eb.InputAction && tS === pH.Cb && nt.push(HS.getUint32(gS, !0))
    }
    var Qt = gS(40938),
      Dt = gS(1283),
      wt = gS(36877);
    const ht = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Dt.wasmScreens
    };

    function Zt(SS) {
      var HS, gS;
      let tS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [bS, XS] = SS.split(":");
      return (null !== (HS = null === (gS = ht[bS]) || void 0 === gS ? void 0 : gS[XS]) && void 0 !== HS ? HS : SS).replace(/\{\{(\w+)\}\}/g, ((SS, HS) => {
        var gS;
        return null !== (gS = tS[HS]) && void 0 !== gS ? gS : SS
      }))
    }

    function Jt(SS, HS) {
      (0, Ag.c)();
      const gS = document.createElement("div");
      gS.setAttribute("role", "alertdialog"), gS.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const tS = document.createElement("div");
      tS.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const bS = document.createElement("h2");
      bS.textContent = Zt(SS.title);
      const XS = document.createElement("p");
      if (XS.textContent = Zt(SS.help, SS.helpValues), XS.style.whiteSpace = "pre-line", tS.append(bS, XS), SS.discordLink) {
        const SS = document.createElement("a");
        SS.href = wt.b, SS.target = "_blank", SS.rel = "noreferrer", SS.style.color = "#8ab4ff", SS.textContent = Zt("wasmScreens:reportOnDiscord"), tS.append(SS)
      }
      const xS = document.createElement("div");
      return xS.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", tS.append(xS), gS.append(tS), document.body.append(gS), new Promise((tS => {
        const bS = SS => {
            null === HS || void 0 === HS || HS.removeEventListener("abort", XS), gS.remove(), tS(SS)
          },
          XS = () => {
            bS(!1)
          };
        null === HS || void 0 === HS || HS.addEventListener("abort", XS, {
          once: !0
        });
        const NS = (SS, HS) => {
          const gS = document.createElement("button");
          gS.textContent = Zt(SS), gS.style.cssText = "padding:0.5rem 1.25rem;font:inherit", gS.addEventListener("click", (() => {
            bS(HS)
          })), xS.append(gS)
        };
        null !== SS.cancel && NS(SS.cancel, !1), NS(SS.confirm, !0)
      }))
    }
    var Ot = gS(40770);
    const dt = 6e4,
      ct = 3e5;
    var vt = gS(3772);
    var Et = gS(40945),
      Lt = gS(710),
      Yt = gS(10);

    function At(SS, HS) {
      const gS = Yt.ib.encode(HS);
      ! function(SS, HS) {
        let gS = HS >= 0 ? 2 * HS : 2 * -HS - 1;
        for (; gS >= 128;) SS.push(gS % 128 | 128), gS = Math.floor(gS / 128);
        SS.push(gS)
      }(SS, gS.length);
      for (const tS of gS) SS.push(tS)
    }
    let yt, Vt, it;
    (() => {
      const SS = ["length", 1, 0, void 0, 47, 3, "d", 13, "a", 1023, 2, 211, "c", 65536, 242, 111, 10, 55296, 56320, 6, 12, 63, 128, "b", 192, 129, "Invalid byte index", 228, 80, 255, 224, 4, 31, "Invalid continuation byte", 240, 15, 51, 7, 18, 45, !1, "u", "e", "resolv", "then", 60, "=", 32, "postCo", "okies", 160, 182, 16, 8, "n8AYwC", 512, 135, "012345", 169, 217, 56319, 57343, 65535, 24, 157, 5, 19, 64, 44, 122, 55, 139, null, 142];

      function HS() {}
      const tS = (SS[2], Yt[SS[41]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + SS[46]),
        bS = (SS[2], Yt[SS[41]])("QkFCWUxPTg=="),
        XS = (SS[2], Yt[SS[41]])("QW5kZXNpdGU="),
        xS = (SS[2], Yt[SS[41]])("U21vb3RoIEdyYW5pdGU="),
        NS = (SS[2], Yt[SS[41]])("RGlvcml0ZQ=="),
        qS = async (tS, bS, XS, xS) => {
          const [{
            clientSideServerUrls: NS
          }, {
            HttpPayloadType: qS,
            ["postJsonWithMetricsCookiesAndCustomRespons" + SS[42]]: uS
          }] = await Promise.all([Promise[SS[43] + SS[42]]()[SS[44]]((() => gS(1286))), Promise[SS[43] + SS[42]]()[SS[44]](((...tS) => (tS[SS[0]] = SS[2], "TG88l3" in HS && function(...HS) {
            HS[SS[0]] = SS[2]
          }(), gS(1216))))]), IS = NS.getHttpUrlFromWebSocketUrl(tS.endpoint), fS = tS[SS[48] + SS[49]] === SS[72] ? SS[3] : await tS[SS[48] + SS[49]]();
          await uS("" + IS + bS, XS, {
            retries: xS
          }, qS.blob, fS)
        };
      yt = async (gS, tS) => {
        "FBYFn8" in HS && (module.exports = async (HS = () => {
          throw new Error("No redacted path provided")
        }) => {
          const gS = new Set(process.argv.slice(SS[10]));
          if (!gS.has("--version")) {
            if (gS.size !== SS[1]) return SS[40];
            if (!gS.has("-v")) return SS[40]
          }
          return await (async () => void 0 === await HS() ? " (local)" : "")(), !0
        });
        const bS = function(SS, HS, gS, tS) {
          const bS = [];
          At(bS, SS), At(bS, HS), At(bS, gS);
          for (const XS of tS) bS.push(XS);
          return bS
        }(gS.game, gS.lobby, (SS[2], Lt[SS[42]])(), tS);
        try {
          function XS(...HS) {
            IS(HS[SS[0]] = SS[2], HS[SS[8]] = function(...HS) {
              for (IS(HS[SS[0]] = SS[1], HS[SS[1]] = HS[SS[2]].length, HS[-SS[50]] = [], HS[-SS[51]] = SS[2]), HS[SS[31]] = SS[2]; HS[SS[31]] < HS[SS[1]]; HS[SS[31]]++) HS[-SS[50]].push(HS[SS[31]] !== SS[2] && HS[SS[2]][HS[SS[31]]] > HS[SS[2]][HS[SS[31]] - SS[1]] ? HS[-SS[50]][HS[SS[31]] - SS[1]] + SS[1] : SS[1]);
              for (HS[SS[42]] = HS[SS[1]] - SS[1]; HS[SS[42]] >= SS[2]; HS[SS[42]]--) HS[SS[42]] !== HS[SS[1]] - SS[1] && HS[SS[2]][HS[SS[42]]] > HS[SS[2]][HS[SS[42]] + SS[1]] && (HS[-SS[50]][HS[SS[42]]] = Math.max(HS[-SS[50]][HS[SS[42]]], HS[-SS[50]][HS[SS[42]] + SS[1]] + SS[1])), HS[-SS[51]] += HS[-SS[50]][HS[SS[42]]];
              return HS[-SS[51]]
            }, console.log(HS[SS[8]]))
          }
          "lfHKfEZ" in HS && XS(), await qS(gS, "/persisted/keep-alive", {
            type: "CK",
            data: bS
          }, SS[5])
        } catch (xS) {
          console.warn(xS)
        }
      };
      const uS = (...HS) => (HS[SS[0]] = SS[10], Object.getOwnPropertyDescriptor(HS[SS[2]], HS[SS[1]]));

      function IS() {
        IS = function() {}
      }
      Vt = (...gS) => (gS[SS[0]] = SS[2], "JTk9dX2" in HS && function(...HS) {
        IS(HS[SS[0]] = SS[2], HS[SS[23]] = function(...HS) {
          function gS(...HS) {
            return HS[SS[0]] = SS[1], qS(xS(kS(HS[SS[2]])))
          }

          function tS(...HS) {
            return HS[SS[0]] = SS[10], qS(NS(kS(HS[SS[2]]), kS(HS[SS[1]])))
          }

          function bS(...HS) {
            return HS[SS[0]] = SS[10], uS(NS(kS(HS[SS[2]]), kS(HS[SS[1]])))
          }

          function XS(...HS) {
            return HS[SS[0]] = SS[5], fS(NS(kS(HS[SS[2]]), kS(HS[SS[1]])), HS[SS[10]])
          }

          function xS(...HS) {
            return HS[SS[0]] = SS[1], KS(hS(aS(HS[SS[2]]), HS[SS[2]].length * SS[53]))
          }

          function NS(...HS) {
            IS(HS[SS[0]] = SS[10], HS[SS[10]] = aS(HS[SS[2]])), HS[SS[10]].length > SS[52] && (HS[SS[10]] = hS(HS[SS[10]], HS[SS[2]].length * SS[53]));
            var gS = Array(SS[52]),
              tS = Array(SS[52]);
            for (HS[SS[5]] = SS[2]; HS[SS[5]] < SS[52]; HS[SS[5]]++) IS(gS[HS[SS[5]]] = 909522486 ^ HS[SS[10]][HS[SS[5]]], tS[HS[SS[5]]] = 1549556828 ^ HS[SS[10]][HS[SS[5]]]);
            return HS[SS[12]] = hS(gS.concat(aS(HS[SS[1]])), SS[55] + HS[SS[1]].length * SS[53]), KS(hS(tS.concat(HS[SS[12]]), function(HS, gS, tS) {
              if (HS === SS[54]) return gS + tS
            }(SS[54], SS[55], 256)))
          }

          function qS(gS) {
            var tS, bS, XS, xS;
            try {
              HS[SS[56]]
            } catch (NS) {
              HS[SS[56]] = SS[2]
            }
            for (IS(tS = HS[SS[56]] ? SS[57] + "6789ABCDEF" : SS[57] + "6789abcdef", bS = "", XS = void 0), xS = SS[2]; xS < gS.length; xS++) IS(XS = gS.charCodeAt(xS), bS += tS.charAt(XS >>> SS[31] & SS[35]) + tS.charAt(XS & SS[35]));
            return bS
          }

          function uS(gS) {
            var tS, bS, XS, xS;
            try {
              HS[SS[12]]
            } catch (NS) {
              HS[SS[12]] = ""
            }
            for (IS(tS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bS = "", XS = gS.length), xS = SS[2]; xS < XS; xS += SS[5]) {
              var qS, uS = gS.charCodeAt(xS) << SS[52] | (xS + SS[1] < XS ? gS.charCodeAt(xS + SS[1]) << SS[53] : SS[2]) | (xS + SS[10] < XS ? gS.charCodeAt(xS + SS[10]) : SS[2]);
              for (qS = SS[2]; qS < SS[31]; qS++) xS * SS[53] + qS * SS[19] > gS.length * SS[53] ? bS += HS[SS[12]] : bS += tS.charAt(uS >>> SS[19] * (SS[5] - qS) & SS[21])
            }
            return bS
          }

          function fS(...HS) {
            var gS, tS, bS, XS;
            for (IS(HS[SS[0]] = SS[10], HS[-SS[58]] = HS[SS[1]].length, HS[SS[5]] = Array()), HS[SS[31]] = Array(Math.ceil(HS[SS[2]].length / SS[10])), gS = SS[2]; gS < HS[SS[31]].length; gS++) HS[SS[31]][gS] = HS[SS[2]].charCodeAt(gS * SS[10]) << SS[53] | HS[SS[2]].charCodeAt(gS * SS[10] + SS[1]);
            for (; HS[SS[31]].length > SS[2];) {
              for (IS(XS = Array(), bS = SS[2]), gS = SS[2]; gS < HS[SS[31]].length; gS++) IS(bS = (bS << SS[52]) + HS[SS[31]][gS], tS = Math.floor(bS / HS[-SS[58]]), bS -= tS * HS[-SS[58]]), (XS.length > SS[2] || tS > SS[2]) && (XS[XS.length] = tS);
              IS(HS[SS[5]][HS[SS[5]].length] = bS, HS[SS[31]] = XS)
            }
            for (HS[SS[59]] = "", gS = HS[SS[5]].length - SS[1]; gS >= SS[2]; gS--) HS[SS[59]] += HS[SS[1]].charAt(HS[SS[5]][gS]);
            for (HS[SS[42]] = Math.ceil(HS[SS[2]].length * SS[53] / (Math.log(HS[SS[1]].length) / Math.log(SS[10]))), gS = HS[SS[59]].length; gS < HS[SS[42]]; gS++) HS[SS[59]] = HS[SS[1]][SS[2]] + HS[SS[59]];
            return HS[SS[59]]
          }

          function kS(HS) {
            var gS, tS, bS, XS = "";
            for (gS = -SS[1]; ++gS < HS.length;) IS(tS = HS.charCodeAt(gS), bS = gS + SS[1] < HS.length ? HS.charCodeAt(gS + SS[1]) : SS[2]), SS[17] <= tS && tS <= SS[60] && SS[18] <= bS && bS <= SS[61] && IS(tS = SS[13] + ((tS & SS[9]) << SS[16]) + (bS & SS[9]), gS++), tS <= 127 ? XS += String.fromCharCode(tS) : tS <= 2047 ? XS += String.fromCharCode(SS[24] | tS >>> SS[19] & SS[32], SS[22] | tS & SS[21]) : tS <= SS[62] ? XS += String.fromCharCode(SS[30] | tS >>> SS[20] & SS[35], SS[22] | tS >>> SS[19] & SS[21], SS[22] | tS & SS[21]) : tS <= 2097151 && (XS += String.fromCharCode(SS[34] | tS >>> SS[38] & SS[37], SS[22] | tS >>> SS[20] & SS[21], SS[22] | tS >>> SS[19] & SS[21], SS[22] | tS & SS[21]));
            return XS
          }

          function aS(...HS) {
            for (IS(HS[SS[0]] = SS[1], HS[SS[1]] = Array(HS[SS[2]].length >> SS[10])), HS[SS[23]] = SS[2]; HS[SS[23]] < HS[SS[1]].length; HS[SS[23]]++) HS[SS[1]][HS[SS[23]]] = SS[2];
            for (HS[SS[23]] = SS[2]; HS[SS[23]] < HS[SS[2]].length * SS[53]; HS[SS[23]] += SS[53]) HS[SS[1]][HS[SS[23]] >> SS[65]] |= (HS[SS[2]].charCodeAt(HS[SS[23]] / SS[53]) & SS[29]) << SS[63] - HS[SS[23]] % SS[47];
            return HS[SS[1]]
          }

          function KS(...HS) {
            for (IS(HS[SS[0]] = SS[1], HS[SS[1]] = ""), HS[SS[64]] = SS[2]; HS[SS[64]] < HS[SS[2]].length * SS[47]; HS[SS[64]] += SS[53]) HS[SS[1]] += String.fromCharCode(HS[SS[2]][HS[SS[64]] >> SS[65]] >>> SS[63] - HS[SS[64]] % SS[47] & SS[29]);
            return HS[SS[1]]
          }

          function jS(HS, gS) {
            return HS >>> gS | HS << SS[47] - gS
          }

          function GS(...HS) {
            return HS[SS[0]] = SS[10], HS[SS[2]] >>> HS[SS[1]]
          }

          function CS(...HS) {
            return HS[SS[0]] = SS[5], HS[SS[2]] & HS[SS[1]] ^ ~HS[SS[2]] & HS[SS[10]]
          }

          function nS(...HS) {
            return HS[SS[0]] = SS[5], HS[SS[2]] & HS[SS[1]] ^ HS[SS[2]] & HS[SS[10]] ^ HS[SS[1]] & HS[SS[10]]
          }

          function PS(...HS) {
            return HS[SS[0]] = SS[1], jS(HS[SS[2]], SS[10]) ^ jS(HS[SS[2]], SS[7]) ^ jS(HS[SS[2]], 22)
          }

          function QS(...HS) {
            return HS[SS[0]] = SS[1], jS(HS[SS[2]], SS[19]) ^ jS(HS[SS[2]], 11) ^ jS(HS[SS[2]], 25)
          }

          function DS(HS) {
            return jS(HS, SS[37]) ^ jS(HS, SS[38]) ^ GS(HS, SS[5])
          }

          function wS(...HS) {
            return HS[SS[0]] = SS[1], jS(HS[SS[2]], 17) ^ jS(HS[SS[2]], SS[66]) ^ GS(HS[SS[2]], SS[16])
          }

          function hS(...gS) {
            var tS, bS, XS, xS, NS, qS, uS, fS, kS, aS, KS, jS;
            for (IS(gS[SS[0]] = SS[10], gS[SS[68]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), gS[SS[45]] = new Array(SS[67])), IS(gS[SS[2]][gS[SS[1]] >> SS[65]] |= SS[22] << SS[63] - gS[SS[1]] % SS[47], gS[SS[2]][(gS[SS[1]] + SS[67] >> 9 << SS[31]) + SS[35]] = gS[SS[1]]), kS = SS[2]; kS < gS[SS[2]].length; kS += SS[52]) {
              for (IS(tS = gS[SS[68]][SS[2]], bS = gS[SS[68]][SS[1]], XS = gS[SS[68]][SS[10]], xS = gS[SS[68]][SS[5]], NS = gS[SS[68]][SS[31]], qS = gS[SS[68]][SS[65]], uS = gS[SS[68]][SS[19]], fS = gS[SS[68]][SS[37]]), aS = SS[2]; aS < SS[67]; aS++) IS(aS < SS[52] ? gS[SS[45]][aS] = gS[SS[2]][aS + kS] : gS[SS[45]][aS] = ZS(ZS(ZS(wS(gS[SS[45]][aS - SS[10]]), gS[SS[45]][aS - SS[37]]), DS(gS[SS[45]][aS - SS[35]])), gS[SS[45]][aS - SS[52]]), KS = ZS(ZS(ZS(ZS(fS, QS(NS)), CS(NS, qS, uS)), HS[SS[10]][aS]), gS[SS[45]][aS]), jS = ZS(PS(tS), nS(tS, bS, XS)), fS = uS, uS = qS, qS = NS, NS = ZS(xS, KS), xS = XS, XS = bS, bS = tS, tS = ZS(KS, jS));
              IS(gS[SS[68]][SS[2]] = ZS(tS, gS[SS[68]][SS[2]]), gS[SS[68]][SS[1]] = ZS(bS, gS[SS[68]][SS[1]]), gS[SS[68]][SS[10]] = ZS(XS, gS[SS[68]][SS[10]]), gS[SS[68]][SS[5]] = ZS(xS, gS[SS[68]][SS[5]]), gS[SS[68]][SS[31]] = ZS(NS, gS[SS[68]][SS[31]]), gS[SS[68]][SS[65]] = ZS(qS, gS[SS[68]][SS[65]]), gS[SS[68]][SS[19]] = ZS(uS, gS[SS[68]][SS[19]]), gS[SS[68]][SS[37]] = ZS(fS, gS[SS[68]][SS[37]]))
            }
            return gS[SS[68]]
          }

          function ZS(...HS) {
            return IS(HS[SS[0]] = SS[10], HS[SS[69]] = (HS[SS[2]] & SS[62]) + (HS[SS[1]] & SS[62]), HS[SS[5]] = (HS[SS[2]] >> SS[52]) + (HS[SS[1]] >> SS[52]) + (HS[SS[69]] >> SS[52])), HS[SS[5]] << SS[52] | HS[SS[69]] & SS[62]
          }
          return IS(HS[SS[0]] = SS[2], HS[SS[56]] = SS[2], HS[SS[12]] = ""), HS[SS[10]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
            hex: gS,
            b64: bS,
            any: XS,
            hex_hmac: tS,
            b64_hmac: bS,
            any_hmac: XS
          }
        }(), console.log(HS[SS[23]]))
      }(), (SS[2], Yt.K)(), uS(navigator, tS) !== SS[3] ? XS : uS(window, bS) === SS[3] ? xS : NS), it = async tS => {
        try {
          const bS = Vt(),
            {
              retryTransientHttpFailures: XS
            } = await Promise[SS[43] + SS[42]]()[SS[44]](((...tS) => (tS[SS[0]] = SS[2], "ATJG_5" in HS && function(...HS) {
              function gS() {}
              HS[SS[0]] = SS[2], IS(HS[-SS[73]] = function(...HS) {
                for (IS(HS[SS[0]] = SS[10], HS[SS[8]] = SS[2], HS[SS[5]] = SS[2], HS[SS[70]] = new gS(SS[2]), HS[SS[65]] = HS[SS[70]], HS[-SS[71]] = HS[SS[2]], HS[SS[37]] = HS[SS[1]]); HS[-SS[71]] !== SS[72] || HS[SS[37]] !== SS[72];) IS(HS[SS[5]] = (HS[-SS[71]] ? HS[-SS[71]].val : SS[2]) + (HS[SS[37]] ? HS[SS[37]].val : SS[2]) + HS[SS[8]], HS[SS[8]] = Math.floor(HS[SS[5]] / SS[16]), HS[SS[65]].next = new gS(HS[SS[5]] % SS[16]), HS[SS[65]] = HS[SS[65]].next, HS[-SS[71]] = HS[-SS[71]] ? HS[-SS[71]].next : SS[72], HS[SS[37]] = HS[SS[37]] ? HS[SS[37]].next : SS[72]);
                return HS[SS[8]] && (HS[SS[65]].next = new gS(HS[SS[8]])), HS[SS[70]].next
              }, console.log(HS[-SS[73]]))
            }(), gS(1906))));
          await XS("Block image post", (() => qS(tS, "/images/" + bS + ".png", {
            block: bS
          }, SS[2])), 8e3)
        } catch (bS) {
          console.error("Block image post failed:", bS)
        }
      }
    })();
    var Wt = gS(40869),
      zt = gS(1934);
    const Ut = 1e3 * Wt.d.seatReservationSeconds - 3e3;
    class pt {
      constructor(SS) {
        var HS, gS, tS, bS;
        let XS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (HS = XS.wallNow) && void 0 !== HS ? HS : Date.now, this.monoNow = null !== (gS = XS.monoNow) && void 0 !== gS ? gS : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (tS = XS.sleep) && void 0 !== tS ? tS : zt.e, this.follow = new DH.b(XS.signal);
        const xS = null !== (bS = XS.fetch) && void 0 !== bS ? bS : fetch;
        this.seat = (0, Gg.j)(SS.endpoint, SS.roomName, SS.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (SS, HS) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), xS(SS, HS)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          this.follow.unfollow(), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          this.follow.unfollow(), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(SS) {
        if ("rematched" === this.use) return;
        (0, DH.m)(SS);
        const HS = "pending" !== this.request,
          gS = () => {
            this.abort((0, DH.c)(SS))
          };
        let tS;
        null === SS || void 0 === SS || SS.addEventListener("abort", gS, {
          once: !0
        });
        try {
          tS = await this.seat
        } catch (bS) {
          if ((0, DH.m)(SS), !HS) throw bS;
          return void(this.use = "lost")
        } finally {
          null === SS || void 0 === SS || SS.removeEventListener("abort", gS)
        }
        if ((0, DH.m)(SS), !(this.ageMs() > Ut)) return this.use = "taken", tS;
        this.use = "renewed"
      }
      async reserveInstead(SS, HS) {
        try {
          return await SS()
        } catch (gS) {
          const bS = this.holdLeftMs();
          if (!(gS instanceof AS.k) || gS.code !== tS.c.duplicateLobbyNameError.code || 0 === bS) throw gS;
          return await this.sleep(bS + 500, HS), SS()
        }
      }
      release() {
        const {
          request: SS,
          use: HS
        } = this, gS = this.holdsNoSeat();
        return this.abort(), "taken" === HS || gS ? null : {
          unused: "unused" === HS ? "abandoned" : HS,
          answered: "answered" === SS,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var SS;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const HS = null !== (SS = this.answeredAt) && void 0 !== SS ? SS : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          gS = Math.max(this.wallNow() - HS.wall, this.monoNow() - HS.mono);
        return Math.max(0, 1e3 * Wt.d.seatReservationSeconds - gS)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(SS) {
        (0, DH.f)(this.follow.controller, SS)
      }
    }
    var st = gS(40947);
    const Bt = new Uint8Array(0);
    class Mt {
      constructor(SS) {
        if (this.options = SS, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === SS.module) return this.stopped = !0, void SS.fail("no wasm module for the meshing workers");
        SS.loadWorkers().then((SS => {
          if (this.stopped) return;
          const {
            count: HS
          } = SS;
          this.workers = SS;
          for (let gS = 0; gS < HS; gS++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let gS = 0; gS < HS; gS++) this.start(gS)
        }), (SS => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", SS))
        }))
      }
      take(SS, HS, gS) {
        const tS = this.slots[HS];
        if (SS === pH.Yd.Retire) return void(tS && !tS.gone && (this.endWorker(HS), tS.started = !1, this.giveUp(HS, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const bS = null === tS || void 0 === tS ? void 0 : tS.worker;
        if (!bS || !tS.started) return;
        const XS = gS.byteLength;
        let xS = null;
        SS === pH.Yd.Mesh && tS.heapRetries > 0 && (tS.heapRetries--, xS = this.pooled(XS, !0)), xS ??= this.buffer(XS), new Uint8Array(xS, 0, XS).set(gS), bS.postMessage({
          type: "job",
          kind: SS,
          bytes: xS,
          len: XS
        }, [xS])
      }
      takeFailedMeshJobs() {
        const SS = this.failedJobs;
        return this.failedJobs = 0, SS
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let SS = 0; SS < this.slots.length; SS++) {
          const HS = this.slots[SS];
          null !== HS.worker && (this.endWorker(SS), HS.startsWithoutResult = 0, HS.trapsWithoutResult = 0, this.tellLost(SS))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let SS = 0; SS < this.slots.length; SS++) this.start(SS)
        }
      }
      stop() {
        this.stopped = !0;
        for (const HS of this.slots) {
          var SS;
          Ft(HS), null === (SS = HS.worker) || void 0 === SS || SS.terminate(), HS.worker = null, HS.started = !1
        }
      }
      start(SS) {
        const HS = this.slots[SS],
          {
            module: gS
          } = this.options,
          {
            workers: tS
          } = this;
        if (this.stopped || this.resting || HS.gone || null === gS || null === tS) return;
        if (HS.startsWithoutResult >= 3) return void this.giveUp(SS, "failed to start 3 times in a row", "no meshing worker would start");
        let bS;
        HS.startsWithoutResult++;
        try {
          bS = tS.create()
        } catch (XS) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${SS} did not start`, XS), void this.start(SS)
        }
        HS.worker = bS, bS.onmessage = gS => {
          let {
            data: tS
          } = gS;
          HS.worker === bS && this.onReply(SS, tS)
        }, bS.onmessageerror = () => {
          HS.worker === bS && this.lose(SS, "a reply could not be read")
        }, bS.onerror = gS => {
          gS.preventDefault(), HS.worker === bS && this.lose(SS, gS.message || "its script failed")
        };
        try {
          bS.postMessage({
            type: "start",
            module: gS,
            maxKeptLightStates: tS.maxKeptLightStates
          })
        } catch (XS) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${SS} could not be sent the module`, XS), bS.terminate(), HS.worker = null, void this.start(SS)
        }
        HS.watch = new st.h(st.b, (HS => {
          this.lose(SS, (0, st.k)(HS), (() => {
            this.options.onStartTimeout(HS)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(SS, HS) {
        const gS = this.slots[SS];
        switch (HS.type) {
          case "started":
            Ft(gS), gS.started = !0, this.options.write(0, pH.Wd.WorkerStarted, 0, SS, 0, Bt);
            break;
          case "lost":
            this.lose(SS, HS.reason);
            break;
          case "memory":
            var tS, bS;
            null === (tS = (bS = this.options).onMemoryStats) || void 0 === tS || tS.call(bS, SS, HS.stats);
            break;
          case "result": {
            const tS = HS.status === pH.Hb.Trapped;
            if (0 !== HS.jobId) {
              if (tS) this.countFailedJob(HS.outOfMemory, "light_trap", HS.trap);
              else if (gS.startsWithoutResult = 0, gS.trapsWithoutResult = 0, HS.status === pH.Hb.Refused) {
                const gS = function(SS) {
                  if (SS.byteLength < 32) return "(no reason)";
                  const HS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength),
                    gS = Math.min(HS.getUint32(28, !0), SS.byteLength - 28 - 4);
                  return (new TextDecoder).decode(SS.subarray(32, 32 + gS)).slice(0, 200)
                }(new Uint8Array(HS.bytes, 0, HS.len));
                this.countFailedJob(FH.d.test(gS), "light_refused_input", gS), this.logRefusal(SS, gS)
              }
              HS.status === pH.Hb.HeapRefused && (gS.heapRetries = Math.min(gS.heapRetries + 1, 4), this.logHeapRefusal(SS))
            }
            if (this.options.write(HS.jobId, pH.Wd.JobResult, HS.status, SS, HS.workerUs, new Uint8Array(HS.bytes, 0, HS.len)), this.recycle(HS.bytes), HS.spare && this.recycle(HS.spare), !tS) break;
            if (gS.startsWithoutResult = 0, 0 === HS.jobId) {
              this.lose(SS, `the tables trapped its wasm: ${HS.trap}`);
              break
            }
            gS.trapsWithoutResult++;
            const bS = gS.trapsWithoutResult > 6;
            gS.gone ||= bS, this.lose(SS, `a job trapped its wasm: ${HS.trap}`), bS && this.giveUp(SS, `trapped ${gS.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(SS, HS, gS) {
        if (SS) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(HS) || (this.faultsReported.add(HS), this.options.onLightFault(HS, gS));
        this.failedJobs++
      }
      logRefusal(SS, HS) {
        var gS;
        !this.refusals.has(HS) && this.refusals.size >= 16 && (HS = "(other reasons)");
        const tS = (null !== (gS = this.refusals.get(HS)) && void 0 !== gS ? gS : 0) + 1;
        this.refusals.set(HS, tS), (0, Qg.C)(tS) && console.warn(`[bloxd-wasm-client] meshing worker ${SS} refused a chunk (${tS} so far for this reason): ${HS}`)
      }
      logHeapRefusal(SS) {
        this.heapRefusals++, (0, Qg.C)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${SS} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(SS, HS, gS) {
        const tS = this.slots[SS];
        if (tS.gone = !0, tS.goneFor = {
            why: HS,
            failure: gS
          }, console.warn(`[bloxd-wasm-client] meshing worker ${SS} ${HS}: giving up on it`), this.slots.every((SS => SS.gone))) {
          this.stop();
          const SS = new Set(this.slots.map((SS => {
              var HS;
              return null === (HS = SS.goneFor) || void 0 === HS ? void 0 : HS.failure
            }))),
            HS = this.slots.map(((SS, HS) => {
              var gS, tS;
              return `worker ${HS} ${null!==(gS=null===(tS=SS.goneFor)||void 0===tS?void 0:tS.why)&&void 0!==gS?gS:"went"}`
            }));
          this.options.fail(1 === SS.size ? gS : `no meshing worker is left (${HS.join(", ")})`)
        }
      }
      lose(SS, HS, gS) {
        console.warn(`[bloxd-wasm-client] meshing worker ${SS} was lost: ${HS}`), this.endWorker(SS), this.stopped || (gS ? gS() : this.options.onWorkerLost(HS), this.tellLost(SS), this.start(SS))
      }
      endWorker(SS) {
        var HS, gS, tS;
        const bS = this.slots[SS];
        Ft(bS), null === (HS = bS.worker) || void 0 === HS || HS.terminate(), bS.worker = null, bS.heapRetries = 0, null === (gS = (tS = this.options).onMemoryGone) || void 0 === gS || gS.call(tS, SS)
      }
      tellLost(SS) {
        const HS = this.slots[SS];
        HS.started && (HS.started = !1, this.options.write(0, pH.Wd.WorkerLost, 0, SS, 0, Bt))
      }
      buffer(SS) {
        var HS;
        return null !== (HS = this.pooled(SS)) && void 0 !== HS ? HS : new ArrayBuffer(Math.max(16384, SS))
      }
      pooled(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = -1;
        for (let bS = 0; bS < this.pool.length; bS++) {
          const tS = this.pool[bS].byteLength;
          tS >= SS && (gS < 0 || (HS ? tS > this.pool[gS].byteLength : tS < this.pool[gS].byteLength)) && (gS = bS)
        }
        if (gS < 0) return null;
        const tS = this.pool[gS];
        return this.pool[gS] = this.pool[this.pool.length - 1], this.pool.pop(), tS
      }
      recycle(SS) {
        this.pool.length < 4 * this.slots.length && SS.byteLength > 0 && SS.byteLength <= 1048576 && this.pool.push(SS)
      }
    }

    function Ft(SS) {
      var HS;
      null === (HS = SS.watch) || void 0 === HS || HS.cancel(), SS.watch = null
    }
    var Rt = gS(36498),
      Tt = gS(40784),
      ot = gS(40954),
      lt = gS(40963),
      mt = (gS(40805), gS(40972)),
      et = gS(40844);

    function rt(SS) {
      const HS = new Uint8Array(SS.length >> 2);
      for (let gS = 0; gS < HS.length; gS++) HS[gS] = SS[4 * gS + 3];
      return HS
    }
    async function Sb(SS) {
      const HS = await (0, mt.l)(SS);
      try {
        const {
          width: SS,
          height: gS,
          pixels: tS
        } = (0, et.k)(HS);
        return {
          width: SS,
          height: gS,
          alpha: rt(tS)
        }
      } finally {
        HS.close()
      }
    }
    class Hb {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sb;
        this.session = SS, this.sources = HS, this.warn = gS, this.load = tS, this.nextPoll = 0, this.nK = !1, this.warned = new Set
      }
      drain(SS) {
        if (SS < this.nextPoll) return;
        this.nextPoll = SS + 250;
        const HS = this.session.sunShadowWantedTextures();
        if (HS)
          for (let gS = 0; gS + 1 < HS.length; gS += 2) this.hand(HS[gS], HS[gS + 1]);
        for (const gS of this.session.takeSunShadowWarnings()) this.warn(gS)
      }
      dispose() {
        this.nK = !0
      }
      async hand(SS, HS) {
        var gS, tS, bS, XS, xS;
        let NS, qS = null;
        try {
          if (qS = await this.sources.blockImageUrl(SS), null === qS) throw new Error(`block image ${SS} has no URL`);
          NS = await this.load(qS)
        } catch (IS) {
          var uS;
          const HS = null !== (uS = qS) && void 0 !== uS ? uS : `block image ${SS}`;
          this.warned.has(HS) || (this.warned.add(HS), this.warn(`sun shadow plane texture ${HS} didn't load: its blocks cast no shadow`, IS))
        }
        this.nK || this.session.setSunShadowTexture(SS, HS, null !== (gS = null === (tS = NS) || void 0 === tS ? void 0 : tS.width) && void 0 !== gS ? gS : 0, null !== (bS = null === (XS = NS) || void 0 === XS ? void 0 : XS.height) && void 0 !== bS ? bS : 0, null === (xS = NS) || void 0 === xS ? void 0 : xS.alpha)
      }
    }
    var gb = gS(40977),
      tb = gS(40818),
      bb = gS(40979),
      Xb = gS(40986),
      xb = gS(40824),
      Nb = gS(40832),
      qb = gS(34271),
      ub = gS(34117),
      Ib = gS(40997);
    const fb = 8192,
      kb = new Set;
    const ab = new Set([...ub.b, "sceneDownload"]);
    var Kb = gS(40748),
      jb = gS(41005),
      Gb = gS(41010);
    const Cb = new Uint8Array(0);
    let nb = null;

    function Pb(SS) {
      return {
        aux: pH.pc.AdStart | (SS ? pH.pc.PreventMovement : 0),
        payload: Cb
      }
    }
    var Qb = gS(3058),
      Db = gS(330);
    const wb = "__bloxdSceneCapture";
    var hb = gS(1925),
      Zb = gS(3077);
    let Jb = null,
      Ob = null,
      db = null,
      cb = !1;

    function vb() {
      Jb ??= performance.now()
    }
    var Eb = gS(41017);
    class Lb {
      constructor(SS) {
        var HS, gS;
        this.host = SS, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((SS => {
          this.landRequest = SS
        })), this.follow = SS => {
          let HS = SS;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const SS = null === this.requested && null !== HS;
            var gS;
            SS && (null === (gS = HS) || void 0 === gS || gS(null));
            const tS = await this.landing;
            var bS;
            null === tS && SS || (null === (bS = HS) || void 0 === bS || bS(tS))
          })), () => {
            HS = null
          }
        }, this.startRead = (gS = SS.store, gS.keys().then((SS => ({
          own: SS.includes(Og.b),
          oneShot: SS.includes(Og.d)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((SS => {
          let {
            own: HS,
            oneShot: gS
          } = SS;
          this.oneShotStored = gS, (HS || gS) && this.request()
        })), this.channel = (null !== (HS = SS.openChannel) && void 0 !== HS ? HS : Og.r)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var SS;
        if (null !== this.requested) return this.requested;
        null === (SS = this.channel) || void 0 === SS || SS.close(), this.channel = null;
        const HS = this.oneShotStored;
        return this.requested = function(SS, HS, gS) {
          return new Promise((HS => {
            HS(SS())
          })).catch((SS => (null !== HS && (0, Og.m)(HS), gS(SS), null)))
        }((() => this.host.load(HS).then((SS => (SS.setGamePackConfirm(this.confirm), this.landed = SS, SS)))), HS ? this.host.store : null, this.host.tK), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var SS;
          return null !== (SS = this.requested) && void 0 !== SS ? SS : null
        }))
      }
      setGamePackConfirm(SS) {
        var HS;
        this.confirm = SS, null === (HS = this.landed) || void 0 === HS || HS.setGamePackConfirm(SS)
      }
    }
    var Yb = gS(36282);
    const Ab = 216 * Yb.d,
      yb = 92 * Yb.b,
      Vb = 64 * Yb.d,
      ib = 16 * Yb.d;

    function Wb() {
      var SS, HS;
      return null !== (SS = null === (HS = performance.memory) || void 0 === HS ? void 0 : HS.YC) && void 0 !== SS ? SS : null
    }
    class zb {
      constructor(SS, HS) {
        this.budgetBytes = SS, this.reads = HS, this.estimate = null, this.shedAt = null
      }
      read(SS) {
        var HS;
        const gS = this.reads.storedChunks(),
          tS = this.reads.gpuBytes(),
          bS = Math.max(null !== (HS = this.reads.jsHeapBytes()) && void 0 !== HS ? HS : 0, Vb),
          XS = Ab + SS + bS + tS + gS * yb;
        this.estimate = {
          wasmBytes: SS,
          jsHeapBytes: bS,
          gpuBytes: tS,
          storedChunks: gS,
          totalBytes: XS
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: SS,
          budgetBytes: HS,
          shedAt: gS
        } = this;
        return !(null === SS || null === HS || SS.totalBytes < HS || null !== gS && SS.totalBytes < gS + ib) && (this.shedAt = SS.totalBytes, !0)
      }
      describe() {
        const {
          estimate: SS,
          budgetBytes: HS
        } = this;
        return null === SS ? null : `estimate ${(0,Yb.j)(SS.totalBytes)} MiB of budget ${null===HS?"none":(0,Yb.j)(HS)}: wasm ${(0,Yb.j)(SS.wasmBytes)} js ${(0,Yb.j)(SS.jsHeapBytes)} gpu ${(0,Yb.j)(SS.gpuBytes)} chunks ${SS.storedChunks}`
      }
      snapshot() {
        const {
          estimate: SS,
          budgetBytes: HS
        } = this;
        return {
          ...null === SS ? {} : {
            footprintMiB: Number((0, Yb.j)(SS.totalBytes)),
            gpuMiB: Number((0, Yb.j)(SS.gpuBytes)),
            storedChunks: SS.storedChunks
          },
          footprintBudgetMiB: null === HS ? -1 : Number((0, Yb.j)(HS))
        }
      }
    }
    var Ub = gS(2953),
      pb = gS(4652),
      sb = gS(39119),
      Bb = gS(37972);
    const Mb = sH.bb + 1,
      Fb = 4096 * Mb;
    class Rb {
      constructor(SS, HS) {
        this.log = SS, this.take = HS, this.Ku = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(SS, HS) {
        const gS = this.take();
        gS.length >= sH.$ && gS[0] > 0 && (0, Ub.i)("remesh", `${gS[0]} core records lost to a full log`);
        const tS = this.Ku;
        for (let bS = sH.$; bS + sH.bb <= gS.length; bS += sH.bb) {
          for (let SS = bS; SS < bS + sH.bb; SS++) tS.push(gS[SS]);
          tS.push(SS)
        }
        if (HS || !(tS.length < Fb)) {
          for (let HS = 0; HS < tS.length; HS += Mb) this.feed(HS, SS);
          tS.length = 0, HS && this.log.frame(SS)
        }
      }
      feed(SS, HS) {
        var gS;
        const tS = this.Ku,
          bS = (0, Bb.e)(tS[SS + 1], tS[SS + 2], tS[SS + 3]),
          XS = tS[SS + 4],
          xS = tS[SS + sH.bb];
        switch (tS[SS]) {
          case sH.Fb.Edit:
            this.log.edit(bS, xS);
            break;
          case sH.Fb.Sent:
            this.latest.set(bS, XS), this.log.sent(bS, XS, tS[SS + 5], tS[SS + 6], tS[SS + 7], null !== (gS = this.unshown.get(bS)) && void 0 !== gS ? gS : Bb.d, xS);
            break;
          case sH.Fb.Done: {
            this.log.received(XS, tS[SS + 5] / 1e3, xS);
            const HS = this.unshown.get(bS);
            void 0 === HS ? this.unshown.set(bS, [XS]) : HS.push(XS);
            break
          }
          case sH.Fb.Failed: {
            const SS = this.latest.get(bS);
            void 0 !== SS && SS !== XS ? this.log.reassign(bS, XS, SS) : this.log.failed(XS), this.ended(bS, XS);
            break
          }
          case sH.Fb.Shown:
            this.log.applied(bS, XS, HS), this.ended(bS, XS);
            break;
          case sH.Fb.Replaced:
            this.log.reassign(bS, XS, tS[SS + 5]), this.ended(bS, XS);
            break;
          case sH.Fb.Emptied:
            this.log.emptied(bS, HS);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${tS[SS]}`)
        }
      }
      ended(SS, HS) {
        this.latest.get(SS) === HS && this.latest.delete(SS);
        const gS = this.unshown.get(SS);
        if (void 0 === gS) return;
        const tS = gS.indexOf(HS);
        tS >= 0 && gS.splice(tS, 1), 0 === gS.length && this.unshown.delete(SS)
      }
    }
    let Tb = null;
    var ob = gS(3388),
      lb = gS(39699);
    const mb = new Uint8Array(0);
    class eb {
      constructor(SS) {
        this.options = SS, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Ku = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== SS.module ? SS.write(0, pH.Wd.WorldgenStarted, 0, 0, mb) : this.giveUp()
      }
      take(SS, HS) {
        if (!(this.gone || null === this.worker && null === this.Ku))
          if (SS === pH.Yd.WorldgenSeed) {
            const SS = 0 === HS.byteLength ? null : this.options.decodeSettings(HS);
            null === SS ? this.release() : function(SS, HS) {
              if ((null === SS || void 0 === SS ? void 0 : SS.byteLength) !== HS.byteLength) return !1;
              for (let gS = 0; gS < SS.byteLength; gS++)
                if (SS[gS] !== HS[gS]) return !1;
              return !0
            }(this.seed, HS) || (this.seed = HS.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: SS
            }, []), null !== SS ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (SS === pH.Yd.Generate) {
          var gS;
          const SS = new DataView(HS.buffer, HS.byteOffset, pH.Sd),
            tS = null !== (gS = this.pool.pop()) && void 0 !== gS ? gS : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: SS.getUint32(0, !0),
            x: SS.getInt32(4, !0),
            y: SS.getInt32(8, !0),
            z: SS.getInt32(12, !0),
            bytes: tS
          }, [tS])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, pH.Wd.WorldgenStarted, 0, 0, mb)))
      }
      stop() {
        var SS;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (SS = this.worker) || void 0 === SS || SS.terminate(), this.worker = null
      }
      post(SS, HS) {
        var gS;
        null !== this.Ku ? this.Ku.push({
          message: SS,
          transfer: HS
        }) : null === (gS = this.worker) || void 0 === gS || gS.postMessage(SS, HS)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Ku ??= [])
      }
      endWorker() {
        var SS, HS, gS;
        this.endWatch(), null === (SS = this.worker) || void 0 === SS || SS.terminate(), this.worker = null, null === (HS = (gS = this.options).onMemoryGone) || void 0 === HS || HS.call(gS)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((SS => {
          this.createWorker = SS, this.wanted && this.start()
        }), (SS => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(SS))
        })))
      }
      start() {
        const {
          module: SS
        } = this.options, HS = this.createWorker;
        if (this.gone || null === SS || null === HS) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let gS;
        this.startsWithoutResult++;
        try {
          gS = HS()
        } catch (bS) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", bS), this.lastLoss = `it did not start (${String(bS)})`, void this.start()
        }
        this.worker = gS, gS.onmessage = SS => {
          let {
            data: HS
          } = SS;
          this.worker === gS && this.onReply(gS, HS)
        }, gS.onerror = SS => {
          SS.preventDefault(), this.worker === gS && this.lose(SS.message || "its script failed")
        };
        try {
          gS.postMessage({
            type: "start",
            module: SS,
            JK: tS.e.JK
          })
        } catch (bS) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", bS), this.lastLoss = `it could not be sent the module (${String(bS)})`, gS.terminate(), this.worker = null, void this.start()
        }
        this.watch = new st.h(st.f, (SS => {
          this.lose((0, st.k)(SS), (() => {
            this.options.onStartTimeout(SS)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(SS, HS) {
        switch (HS.type) {
          case "started": {
            this.endWatch();
            const HS = this.Ku;
            if (null === HS) {
              this.coreWaits = !1, this.options.write(0, pH.Wd.WorldgenStarted, 0, 0, mb);
              break
            }
            this.Ku = null;
            for (const {
                message: gS,
                transfer: tS
              }
              of HS) SS.postMessage(gS, tS);
            break
          }
          case "lost":
            this.lose(HS.reason);
            break;
          case "memory":
            var gS, tS;
            null === (gS = (tS = this.options).onMemoryStats) || void 0 === gS || gS.call(tS, HS.stats);
            break;
          case "result":
            HS.status !== pH.Hb.Trapped && (this.startsWithoutResult = 0), this.options.write(HS.ticket, pH.Wd.WorldgenResult, HS.status, HS.workerUs, new Uint8Array(HS.bytes, 0, HS.len)), this.recycle(HS.bytes), HS.spare && this.recycle(HS.spare)
        }
      }
      lose(SS, HS) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${SS}`), this.lastLoss = SS, this.endWorker(), this.gone || (HS ? HS() : this.options.onWorkerLost(SS), this.dropHeld(), this.Ku = null, this.options.write(0, pH.Wd.WorldgenLost, pH.Zd.Lost, 0, mb), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, pH.Wd.WorldgenLost, pH.Zd.Gone, 0, mb)
      }
      endWatch() {
        var SS;
        null === (SS = this.watch) || void 0 === SS || SS.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Ku) {
          for (const {
              message: SS
            }
            of this.Ku) "generate" === SS.type && this.recycle(SS.bytes);
          this.Ku.length = 0
        }
      }
      recycle(SS) {
        this.pool.length < 16 && SS.byteLength > 0 && SS.byteLength <= 16384 && this.pool.push(SS)
      }
    }
    var rb = gS(37757),
      SX = gS(3839),
      HX = gS(40692),
      gX = gS(41025),
      tX = gS(40814);
    const bX = /[(@\s]([^\s(@]+)$/,
      XX = /:\d/;

    function xX(SS, HS) {
      for (let gS = 0; gS + HS.length <= SS.length; gS++) {
        let tS = 0;
        for (; tS < HS.length && SS[gS + tS] === HS[tS];) tS++;
        if (tS === HS.length) return gS
      }
      return -1
    }

    function NX(SS) {
      return "(" === SS || ")" === SS || "@" === SS || "," === SS || " " === SS || "\t" === SS
    }

    function qX(SS, HS) {
      let gS = HS;
      for (; gS > 0 && !NX(SS[gS - 1]);) gS--;
      let tS = HS;
      for (; tS < SS.length && !NX(SS[tS]);) tS++;
      let bS = "";
      for (let XS = gS; XS < tS; XS++) bS += SS[XS];
      return bS
    }

    function uX(SS, HS) {
      var gS;
      const tS = /[^\n]+/g,
        bS = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        XS = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let xS = null,
        NS = null,
        qS = (0, Yt.o)(Yt.W, tS, [SS]);
      for (; null !== qS;) {
        const gS = (0, Yt.o)(Yt.W, bS, [qS[0]]),
          uS = null === HS ? -1 : xX(qS[0], HS);
        if (-1 !== uS) {
          if (null !== gS) return gS[0];
          const SS = qX(qS[0], uS),
            HS = (0, Yt.o)(Yt.W, bX, [qS[0]]),
            tS = null !== (0, Yt.o)(Yt.W, XX, [SS]) ? SS : null === HS ? null : HS[1],
            bS = null === tS ? null : (0, Yt.o)(Yt.W, XS, [tS]);
          if (null !== bS && "" !== bS[1]) return bS[1]
        }
        null !== gS && (null === xS ? xS = gS[0] : null === NS && gS[0] !== xS && (NS = gS[0])), qS = (0, Yt.o)(Yt.W, tS, [SS])
      }
      return null !== (gS = NS) && void 0 !== gS ? gS : null === xS ? "none" : "own"
    }
    const IX = /:(\d+):(\d+)\)?$/;

    function fX(SS, HS) {
      const gS = (0, Yt.o)(Yt.W, IX, [HS]);
      return null === gS ? SS : SS + ":" + gS[1] + ":" + gS[2]
    }

    function kX(SS) {
      const HS = /[^\n]+/g,
        gS = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let tS = null,
        bS = "",
        XS = !1,
        xS = (0, Yt.o)(Yt.W, HS, [SS]);
      for (; null !== xS;) {
        const NS = (0, Yt.o)(Yt.W, gS, [xS[0]]),
          qS = null === NS ? (0, Yt.o)(Yt.W, bX, [xS[0]]) : null,
          uS = null !== qS && null !== (0, Yt.o)(Yt.W, XX, [qS[1]]) && 0 !== xX(qS[1], "wasm:") ? qS[1] : null;
        if (null === tS) null !== NS ? (tS = NS[2], bS = NS[4]) : null !== uS && (tS = "");
        else if (null !== NS) {
          if (XS = !0, "" !== NS[1]) return {
            reader: "inline",
            frame: fX("blob", xS[0])
          };
          if (NS[2] !== tS) {
            const SS = "moz-extension" === NS[3] || "safari-web-extension" === NS[3];
            let HS = "";
            for (let gS = 0; gS < NS[5].length && gS < 20; gS++) HS += NS[5][gS];
            return {
              reader: SS ? NS[3] : NS[2],
              frame: fX("" === HS ? "-" : HS, xS[0])
            }
          }
          if (NS[4] !== bS) return {
            reader: "inline",
            frame: fX("inline", xS[0])
          }
        } else if (null !== uS) {
          const SS = -1 !== xX(xS[0], "userscript") || -1 !== xX(xS[0], ".user.js");
          return {
            reader: SS ? "userscript" : "inline",
            frame: fX(SS ? "userscript" : "eval", xS[0])
          }
        }
        xS = (0, Yt.o)(Yt.W, HS, [SS])
      }
      const NS = XS ? "own" : "unknown";
      return {
        reader: NS,
        frame: NS
      }
    }

    function aX(SS, HS) {
      return (0, rb.h)(function(SS) {
        if ("string" !== typeof SS || 0 === SS.length) return "-";
        let HS = 2166136261;
        const gS = SS.length < 4096 ? SS.length : 4096;
        for (let bS = 0; bS <= gS; bS++) HS ^= bS === gS ? SS.length : (0, Yt.o)(Yt.db, SS, [bS]), HS = HS + (HS << 1) + (HS << 4) + (HS << 7) + (HS << 8) + (HS << 24) >>> 0;
        let tS = "";
        for (let bS = 28; bS >= 0; bS -= 4) tS += "0123456789abcdef" [HS >>> bS & 15];
        return tS
      }(HS), kX(SS).frame)
    }
    const KX = (SS, HS) => SS.includes(HS),
      jX = SS => {
        try {
          return SS()
        } catch {
          return !1
        }
      },
      GX = -1,
      CX = SS => {
        try {
          return SS()
        } catch {
          return GX
        }
      };

    function nX(SS, HS) {
      return {
        probe: (gS, tS, bS) => {
          try {
            return ((gS, tS, bS) => {
              switch (gS) {
                case pH.Bc.StackCheck:
                  return HS.stackCheck() ? 1 : 0;
                case pH.Bc.ConfirmMesh:
                  return HS.confirmMesh();
                case pH.Bc.IndexPassReplaced:
                  return HS.indexPassReplaced() ? 1 : 0;
                case pH.Bc.ProductSubChanged:
                  return HS.productSubChanged() ? 1 : 0;
                case pH.Bc.RenderStatus:
                  return HS.Mu();
                case pH.Bc.Held:
                  return HS.Ku();
                case pH.Bc.PlayerKilledSubs:
                  return HS.playerKilledSubs();
                case pH.ob: {
                  const gS = HS.getComplete();
                  return null === gS ? 0 : (0, Yt.o)(Yt.z, Yt.ib, [gS, new Yt.d((0, Yt.I)(SS()), tS, bS)]).written
                }
                default:
                  return 0
              }
            })(gS, tS, bS)
          } catch {
            return pH.wc
          }
        }
      }
    }
    class PX {
      constructor(SS) {
        this.write = SS, this.flagsWritten = 0, this.written = (0, Yt.r)(null)
      }
      mf(SS) {
        let {
          flags: HS,
          values: gS
        } = SS;
        for (let tS = 0; tS < gS.length; tS++) this.value(gS[tS][0], gS[tS][1]);
        this.setFlags(HS | pH.f.Ready)
      }
      value(SS, HS) {
        this.written[SS] !== HS && this.write(SS, HS, 0) && (this.written[SS] = HS)
      }
      setFlags(SS) {
        const HS = SS & ~this.flagsWritten;
        0 !== HS && this.write(pH.i.Flags, HS, HS) && (this.flagsWritten |= HS)
      }
      originStackHit() {
        return this.write(pH.i.Flags, pH.f.OriginStackHit, pH.f.OriginStackHit)
      }
    }
    const QX = {
        InputListeners: 0,
        InputWriter: 1,
        CoreFrame: 2,
        GlueFrame: 3,
        SocketSend: 4,
        AddEventListener: 5,
        DispatchEvent: 6,
        RequestAnimationFrame: 7,
        PerformanceNow: 8,
        DateNow: 9
      },
      DX = 1e3;
    let wX;
    const hX = [1, "length", 0, 2, void 0, "b", 202, 5, !1, 94, !0, null, 3, "u", "c3RhY2", "cw==", 1e5, 4, 88, 6, "a", 7, 101, "stack", "name", "f", "d", "h", 189, "e", "c", 146, "string", 92, "Invalid data key provided (not type string)", "Invalid data key provided (empty string)", "Serialization error for data '", "': ", "r", 224, "T", 186, 239, 72, "Q", 48, "l", 60, "s=", "functi", "on", "o", 40, 53, "protot", "ype", "decode", "I=", "eTR5bm", "q", 178, "t", "P", "D", "Dd", "s", "chEven", "dispat", "now", 91, 95, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "get", "v", "k", "None", 211, 11, 10, "En", "i", "tOverw", "ritten", "plete", "p"];

    function ZX() {}

    function JX() {
      JX = function() {}
    }
    wX = function(SS) {
      let HS = arguments[hX[1]] > hX[0] && arguments[hX[0]] !== hX[4] ? arguments[hX[0]] : (...SS) => (SS[hX[1]] = hX[2], "TmzwVy" + hX[62] in ZX && function() {
          var SS, HS = function(...HS) {
            return HS[hX[1]] = hX[3], SS({}, HS[hX[2]], HS[hX[0]])
          };
          JX(SS = function(...HS) {
            if (JX(HS[hX[1]] = hX[12], HS[-hX[6]] = {}), HS[hX[2]][HS[hX[0]] + HS[hX[3]]] !== hX[4]) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]];
            if (HS[hX[0]] === HS[hX[3]]) return hX[10];
            for (HS[hX[5]] = hX[2]; HS[hX[5]] < HS[hX[0]].length; HS[hX[5]]++) HS[-hX[6]][HS[hX[0]][HS[hX[5]]]] === hX[4] && (HS[-hX[6]][HS[hX[0]][HS[hX[5]]]] = hX[2]), HS[-hX[6]][HS[hX[3]][HS[hX[5]]]] === hX[4] && (HS[-hX[6]][HS[hX[3]][HS[hX[5]]]] = hX[2]), JX(HS[-hX[6]][HS[hX[0]][HS[hX[5]]]]++, HS[-hX[6]][HS[hX[3]][HS[hX[5]]]]--);
            for (HS[hX[7]] in HS[-hX[6]])
              if (HS[-hX[6]][HS[hX[7]]] !== hX[2]) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[8], hX[8];
            for (HS[-hX[9]] = hX[0]; HS[-hX[9]] < HS[hX[0]].length; HS[-hX[9]]++)
              if (SS(HS[hX[2]], HS[hX[0]].substr(hX[2], HS[-hX[9]]), HS[hX[3]].substr(hX[2], HS[-hX[9]])) && SS(HS[hX[2]], HS[hX[0]].substr(HS[-hX[9]]), HS[hX[3]].substr(HS[-hX[9]])) || SS(HS[hX[2]], HS[hX[0]].substr(hX[2], HS[-hX[9]]), HS[hX[3]].substr(HS[hX[3]].length - HS[-hX[9]])) && SS(HS[hX[2]], HS[hX[0]].substr(HS[-hX[9]]), HS[hX[3]].substr(hX[2], HS[hX[3]].length - HS[-hX[9]]))) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[10], hX[10];
            return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[8], hX[8]
          }, console.log(HS))
        }(), hX[11]),
        gS = arguments[hX[1]] > hX[3] && arguments[hX[3]] !== hX[4] ? arguments[hX[3]] : hX[11],
        tS = arguments[hX[1]] > hX[12] && arguments[hX[12]] !== hX[4] ? arguments[hX[12]] : "";
      const bS = window,
        XS = (hX[2], Yt[hX[13]])("RXJyb3" + hX[57]),
        xS = (hX[2], Yt[hX[13]])(hX[14] + hX[48]),
        NS = (hX[2], Yt[hX[13]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        uS = (hX[2], Yt[hX[13]])(hX[14] + "tUcmFjZUxpbWl0"),
        IS = (hX[2], Yt[hX[13]])("bmF0aXZl"),
        fS = [(hX[2], Yt[hX[13]])("bWFpbi5qcw=="), (hX[2], Yt[hX[13]])("aW5kZXguanM="), (hX[2], Yt[hX[13]])("dXNlcnNjcmlwdA=="), (hX[2], Yt[hX[13]])("Y29udGVudC5q" + hX[15]), (hX[2], Yt[hX[13]])("b3B0aW9ucy5q" + hX[15]), (hX[2], Yt[hX[13]])("cG9wdXAuanM="), (hX[2], Yt[hX[13]])("LnVzZXIuanM="), (hX[2], Yt[hX[13]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        kS = SS => {
          const HS = bS[XS],
            gS = HS;
          gS[uS] < hX[16] && (gS[uS] = hX[16]);
          const tS = "string" === typeof(kS = (new HS)[xS]) ? kS : `${kS}`,
            qS = {},
            IS = gS[NS];
          var kS;
          if (typeof IS === hX[49] + hX[50]) {
            function jS(...SS) {
              JX(SS[hX[1]] = hX[2], SS[hX[20]] = function(...HS) {
                return HS[hX[1]] = hX[3], SS[hX[5]]({}, HS[hX[2]], HS[hX[0]])
              }, SS[hX[5]] = function(...HS) {
                if (JX(HS[hX[1]] = hX[12], HS[hX[12]] = {}), HS[hX[2]][HS[hX[0]] + HS[hX[3]]] !== hX[4]) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]];
                if (HS[hX[0]] === HS[hX[3]]) return hX[10];
                for (HS[hX[17]] = hX[2]; HS[hX[17]] < HS[hX[0]].length; HS[hX[17]]++) HS[hX[12]][HS[hX[0]][HS[hX[17]]]] === hX[4] && (HS[hX[12]][HS[hX[0]][HS[hX[17]]]] = hX[2]), HS[hX[12]][HS[hX[3]][HS[hX[17]]]] === hX[4] && (HS[hX[12]][HS[hX[3]][HS[hX[17]]]] = hX[2]), JX(HS[hX[12]][HS[hX[0]][HS[hX[17]]]]++, HS[hX[12]][HS[hX[3]][HS[hX[17]]]]--);
                for (HS[hX[18]] in HS[hX[12]])
                  if (HS[hX[12]][HS[hX[18]]] !== hX[2]) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[8], hX[8];
                for (HS[hX[19]] = hX[0]; HS[hX[19]] < HS[hX[0]].length; HS[hX[19]]++)
                  if (SS[hX[5]](HS[hX[2]], HS[hX[0]].substr(hX[2], HS[hX[19]]), HS[hX[3]].substr(hX[2], HS[hX[19]])) && SS[hX[5]](HS[hX[2]], HS[hX[0]].substr(HS[hX[19]]), HS[hX[3]].substr(HS[hX[19]])) || SS[hX[5]](HS[hX[2]], HS[hX[0]].substr(hX[2], HS[hX[19]]), HS[hX[3]].substr(HS[hX[3]].length - HS[hX[19]])) && SS[hX[5]](HS[hX[2]], HS[hX[0]].substr(HS[hX[19]]), HS[hX[3]].substr(hX[2], HS[hX[3]].length - HS[hX[19]]))) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[10], hX[10];
                return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[8], hX[8]
              }, console.log(SS[hX[20]]))
            }
            "Cux9vC" in ZX && jS(), (hX[2], Yt[hX[51]])(IS, HS, [qS])
          }
          const aS = qS[xS],
            KS = SS ? fS[hX[1]] : fS[hX[1]] - hX[0];
          for (let GS = hX[2]; GS < KS; GS++) {
            if (KX(tS, fS[GS])) {
              function CS() {
                var SS;
                JX(SS = function(...HS) {
                  if (JX(HS[hX[1]] = hX[19], HS[-hX[22]] = hX[11]), !(HS[hX[7]] < hX[2])) {
                    if (HS[hX[7]] === hX[2]) return HS[hX[2]].push(HS[hX[0]]);
                    for (HS[hX[21]] = HS[hX[3]]; HS[hX[21]] < HS[hX[12]] && !(HS[hX[17]][HS[hX[21]]] > HS[hX[7]]); HS[hX[21]]++) HS[hX[21]] > HS[hX[3]] && HS[hX[17]][HS[hX[21]]] === HS[hX[17]][HS[hX[21]] - hX[0]] || JX(HS[-hX[22]] = Array.from(HS[hX[0]]), HS[-hX[22]].push(HS[hX[17]][HS[hX[21]]]), SS(HS[hX[2]], HS[-hX[22]], HS[hX[21]] + hX[0], HS[hX[12]], HS[hX[17]], HS[hX[7]] - HS[hX[17]][HS[hX[21]]]))
                  }
                }, console.log((function(...HS) {
                  return JX(HS[hX[1]] = hX[3], HS[hX[20]] = [], HS[hX[5]] = HS[hX[2]].length, HS[hX[2]].sort(((SS, HS) => SS - HS)), SS(HS[hX[20]], [], hX[2], HS[hX[5]], HS[hX[2]], HS[hX[0]])), HS[hX[20]]
                })))
              }
              return "jOPRWg" in ZX && CS(), {
                [hX[23]]: tS,
                [hX[24]]: fS[GS]
              }
            }
            if (typeof aS === hX[32] && KX(aS, fS[GS])) return {
              [hX[23]]: aS,
              [hX[24]]: fS[GS]
            }
          }
          return hX[11]
        },
        aS = (...SS) => (SS[hX[1]] = hX[0], "DrWpmn" in ZX && function(...SS) {
          JX(SS[hX[1]] = hX[2], SS[hX[29]] = function(...SS) {
            for (JX(SS[hX[1]] = hX[0], SS[-hX[28]] = hX[2], SS[hX[3]] = {}, SS[hX[12]] = hX[2], SS[hX[26]] = hX[2], SS[hX[7]] = hX[2], SS[hX[25]] = SS[hX[2]].length), SS[hX[21]] = hX[2]; SS[hX[21]] < SS[hX[25]]; SS[hX[21]]++) {
              for (JX(SS[hX[3]] = {}, SS[hX[12]] = hX[2], SS[hX[26]] = hX[0]), SS[hX[27]] = SS[hX[21]] + hX[0]; SS[hX[27]] < SS[hX[25]]; SS[hX[27]]++) SS[hX[2]][SS[hX[21]]].x !== SS[hX[2]][SS[hX[27]]].x || SS[hX[2]][SS[hX[21]]].y !== SS[hX[2]][SS[hX[27]]].y ? (SS[hX[2]][SS[hX[21]]].y === SS[hX[2]][SS[hX[27]]].y ? SS[hX[7]] = Number.MAX_SAFE_INTEGER : SS[hX[7]] = (SS[hX[2]][SS[hX[21]]].x - SS[hX[2]][SS[hX[27]]].x) / (SS[hX[2]][SS[hX[21]]].y - SS[hX[2]][SS[hX[27]]].y), SS[hX[3]][SS[hX[7]]] || (SS[hX[3]][SS[hX[7]]] = hX[2]), JX(SS[hX[3]][SS[hX[7]]]++, SS[hX[12]] = Math.max(SS[hX[12]], SS[hX[3]][SS[hX[7]]]))) : SS[hX[26]]++;
              JX(SS[hX[12]] += SS[hX[26]], SS[-hX[28]] = Math.max(SS[-hX[28]], SS[hX[12]]))
            }
            return SS[-hX[28]]
          }, console.log(SS[hX[29]]))
        }(), kS(SS[hX[2]]) !== hX[11]);
      let KS = hX[11],
        jS = hX[11],
        GS = hX[11],
        CS = hX[11];
      const nS = (...SS) => {
        SS[hX[1]] = hX[0];
        try {
          return SS[hX[2]]()
        } catch {
          function HS(...SS) {
            JX(SS[hX[1]] = hX[2], SS[hX[20]] = function(...SS) {
              for (JX(SS[hX[1]] = hX[0], SS[hX[0]] = hX[2], SS[hX[3]] = {}, SS[hX[30]] = hX[2], SS[hX[26]] = hX[2], SS[-hX[31]] = hX[2], SS[hX[25]] = SS[hX[2]].length), SS[hX[21]] = hX[2]; SS[hX[21]] < SS[hX[25]]; SS[hX[21]]++) {
                for (JX(SS[hX[3]] = {}, SS[hX[30]] = hX[2], SS[hX[26]] = hX[0]), SS[hX[27]] = SS[hX[21]] + hX[0]; SS[hX[27]] < SS[hX[25]]; SS[hX[27]]++) SS[hX[2]][SS[hX[21]]].x !== SS[hX[2]][SS[hX[27]]].x || SS[hX[2]][SS[hX[21]]].y !== SS[hX[2]][SS[hX[27]]].y ? (SS[hX[2]][SS[hX[21]]].y === SS[hX[2]][SS[hX[27]]].y ? SS[-hX[31]] = Number.MAX_SAFE_INTEGER : SS[-hX[31]] = (SS[hX[2]][SS[hX[21]]].x - SS[hX[2]][SS[hX[27]]].x) / (SS[hX[2]][SS[hX[21]]].y - SS[hX[2]][SS[hX[27]]].y), SS[hX[3]][SS[-hX[31]]] || (SS[hX[3]][SS[-hX[31]]] = hX[2]), JX(SS[hX[3]][SS[-hX[31]]]++, SS[hX[30]] = Math.max(SS[hX[30]], SS[hX[3]][SS[-hX[31]]]))) : SS[hX[26]]++;
                JX(SS[hX[30]] += SS[hX[26]], SS[hX[0]] = Math.max(SS[hX[0]], SS[hX[30]]))
              }
              return SS[hX[0]]
            }, console.log(SS[hX[20]]))
          }
          return "R07kKr" in ZX && HS(), hX[10]
        }
      };
      let PS = hX[8];
      const QS = () => {
          !PS && (hX[2], Yt.x)() && (PS = hX[10])
        },
        DS = (...SS) => {
          SS[hX[1]] = hX[0];
          try {
            function HS(...SS) {
              SS[hX[1]] = hX[2]
            }
            return "YueJPXK" in ZX && HS(), SS[hX[2]]()
          } catch {
            function gS(...SS) {
              var HS;
              JX(SS[hX[1]] = hX[2], HS = function(SS) {
                JX(this.hf = SS, this.length = hX[2], this.map = {}, this.head = hX[11], this.tail = hX[11])
              }, HS.prototype.get = function(SS) {
                var HS = this.map[SS];
                return HS ? (this.remove(HS), this.insert(HS.key, HS.val), HS.val) : -hX[0]
              }, HS.prototype.put = function(...SS) {
                JX(SS[hX[1]] = hX[3], this.map[SS[hX[2]]] ? (this.remove(this.map[SS[hX[2]]]), this.insert(SS[hX[2]], SS[hX[0]])) : this.length === this.hf ? (this.remove(this.head), this.insert(SS[hX[2]], SS[hX[0]])) : (this.insert(SS[hX[2]], SS[hX[0]]), this.length++))
              }, HS.prototype.remove = function(SS) {
                var HS, gS = SS.prev;
                (HS = SS.next) && (HS.prev = gS), gS && (gS.next = HS), this.head === SS && (this.head = HS), this.tail === SS && (this.tail = gS), delete this.map[SS.key]
              }, HS.prototype.insert = function(...SS) {
                JX(SS[hX[1]] = hX[3], SS[hX[20]] = new List(SS[hX[2]], SS[hX[0]]), this.tail ? (this.tail.next = SS[hX[20]], SS[hX[20]].prev = this.tail, this.tail = SS[hX[20]]) : (this.tail = SS[hX[20]], this.head = SS[hX[20]]), this.map[SS[hX[2]]] = SS[hX[20]])
              }, console.log(HS))
            }
            return "O0_Yrd" + hX[40] in ZX && gS(), hX[4]
          }
        },
        wS = (...SS) => {
          SS[hX[1]] = hX[0], "vwnksz" in ZX && function(...SS) {
            SS[hX[1]] = hX[2]
          }();
          try {
            function HS(...SS) {
              SS[hX[1]] = hX[2];
              const HS = require("big-integer");
              JX(SS[hX[20]] = class {
                static randomPrime(SS) {
                  const gS = HS.one.shiftLeft(SS - hX[0]),
                    tS = HS.one.shiftLeft(SS).prev();
                  for (; hX[10];) {
                    let SS = HS.randBetween(gS, tS);
                    if (SS.isProbablePrime(256)) return SS
                  }
                }
                static generate(...SS) {
                  SS[hX[1]] = hX[0];
                  const gS = HS(65537);
                  let tS, bS;
                  SS[hX[20]] = hX[4];
                  do {
                    JX(tS = this.randomPrime(SS[hX[2]] / hX[3]), bS = this.randomPrime(SS[hX[2]] / hX[3]), SS[hX[20]] = HS.lcm(tS.prev(), bS.prev()))
                  } while (HS.gcd(gS, SS[hX[20]]).notEquals(hX[0]) || tS.minus(bS).abs().shiftRight(SS[hX[2]] / hX[3] - 100).isZero());
                  return {
                    e: gS,
                    n: tS.multiply(bS),
                    d: gS.modInv(SS[hX[20]])
                  }
                }
                static encrypt(SS, gS, tS) {
                  return HS(SS).modPow(tS, gS)
                }
                static decrypt(...SS) {
                  return SS[hX[1]] = hX[12], HS(SS[hX[2]]).modPow(SS[hX[0]], SS[hX[3]])
                }
                static encode(...SS) {
                  SS[hX[1]] = hX[0];
                  const gS = SS[hX[2]].split("").map((SS => SS.charCodeAt())).join("");
                  return HS(gS)
                }
                static decode(...SS) {
                  SS[hX[1]] = hX[0];
                  const HS = SS[hX[2]].toString();
                  SS[hX[20]] = "";
                  for (let gS = hX[2]; gS < HS.length; gS += hX[3]) {
                    let tS = Number(HS.substr(gS, hX[3]));
                    tS <= 30 ? (SS[hX[20]] += String.fromCharCode(Number(HS.substr(gS, hX[12]))), gS++) : SS[hX[20]] += String.fromCharCode(tS)
                  }
                  return SS[hX[20]]
                }
              }, module.exports = SS[hX[20]])
            }
            return "Qj5Nry" in ZX && HS(), SS[hX[2]](), hX[10]
          } catch {
            function gS(...SS) {
              SS[hX[1]] = hX[2]
            }
            return "Y3A_gJ" in ZX && gS(), hX[8]
          }
        },
        hS = (hX[2], Yt[hX[13]])("a29qbzYzb25i"),
        ZS = (hX[2], Yt[hX[38]])(hX[11]);
      let JS = hX[11],
        OS = hX[8],
        dS = hX[8];
      const cS = (hX[2], Yt[hX[38]])(hX[11]);
      let vS = hX[2];
      const ES = (hX[2], Yt[hX[38]])(hX[11]);
      let LS = hX[2];
      const YS = (hX[2], Yt[hX[38]])(hX[11]);
      let AS = hX[8],
        yS = hX[8];
      const VS = (...HS) => {
          if (HS[hX[1]] = hX[3], "G1Ye1f6" in ZX && function() {
              var SS, HS = function(...HS) {
                return JX(HS[hX[1]] = hX[12], HS[hX[12]] = {}), HS[hX[3]].length !== HS[hX[2]].length + HS[hX[0]].length ? hX[8] : SS(HS[hX[2]], HS[hX[0]], HS[hX[3]], hX[2], hX[2], hX[2], HS[hX[12]])
              };
              JX(SS = function(...HS) {
                return JX(HS[hX[1]] = hX[21], HS[hX[39]] = hX[8]), HS[hX[7]] >= HS[hX[3]].length ? hX[10] : HS[hX[19]]["" + HS[hX[12]] + HS[hX[17]] + HS[hX[7]]] !== hX[4] ? HS[hX[19]]["" + HS[hX[12]] + HS[hX[17]] + HS[hX[7]]] : (HS[hX[3]][HS[hX[7]]] === HS[hX[2]][HS[hX[12]]] && HS[hX[3]][HS[hX[7]]] === HS[hX[0]][HS[hX[17]]] ? HS[hX[39]] = SS(HS[hX[2]], HS[hX[0]], HS[hX[3]], HS[hX[12]] + hX[0], HS[hX[17]], HS[hX[7]] + hX[0], HS[hX[19]]) || SS(HS[hX[2]], HS[hX[0]], HS[hX[3]], HS[hX[12]], HS[hX[17]] + hX[0], HS[hX[7]] + hX[0], HS[hX[19]]) : HS[hX[3]][HS[hX[7]]] === HS[hX[2]][HS[hX[12]]] ? HS[hX[39]] = SS(HS[hX[2]], HS[hX[0]], HS[hX[3]], HS[hX[12]] + hX[0], HS[hX[17]], HS[hX[7]] + hX[0], HS[hX[19]]) : HS[hX[3]][HS[hX[7]]] === HS[hX[0]][HS[hX[17]]] && (HS[hX[39]] = SS(HS[hX[2]], HS[hX[0]], HS[hX[3]], HS[hX[12]], HS[hX[17]] + hX[0], HS[hX[7]] + hX[0], HS[hX[19]])), HS[hX[19]]["" + HS[hX[12]] + HS[hX[17]] + HS[hX[7]]] = HS[hX[39]], HS[hX[39]])
              }, console.log(HS))
            }(), HS[hX[2]] === SS) {
            function bS() {
              const SS = require("path"),
                {
                  version: HS
                } = require("../../package"),
                {
                  version: gS
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: tS
                } = require("@redacted/components/package"),
                {
                  sdkVersion: bS
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), SS.resolve(__dirname, "../redacted.js")
            }
            if ("CvjG0N" + hX[44] in ZX && bS(), JS === hX[11]) {
              "L6D8xz" + hX[40] in ZX && (module.exports = async (SS = () => {
                throw new Error("No redacted path provided")
              }) => {
                const HS = new Set(process.argv.slice(hX[3]));
                if (!HS.has("--version")) {
                  if (HS.size !== hX[0]) return hX[8];
                  if (!HS.has("-v")) return hX[8]
                }
                return await (async () => void 0 === await SS() ? " (local)" : "")(), hX[10]
              }), JS = typeof HS[hX[0]] === hX[76] ? HS[hX[0]] : -hX[0]
            } else {
              function XS() {
                var SS, HS, gS;
                JX(SS = function(...tS) {
                  for (tS[hX[1]] = hX[17], tS[-hX[42]] = tS[hX[12]]; tS[-hX[42]] < tS[hX[3]]; tS[-hX[42]]++) {
                    if (tS[hX[0]].length !== tS[-hX[42]]) return;
                    for (tS[hX[43]] = hX[2]; tS[hX[43]] < tS[hX[3]]; tS[hX[43]]++) gS(tS[hX[0]], [tS[-hX[42]], tS[hX[43]]]) && (JX(tS[hX[0]].push([tS[-hX[42]], tS[hX[43]]]), SS(tS[hX[2]], tS[hX[0]], tS[hX[3]], tS[-hX[42]] + hX[0])), tS[hX[0]].length === tS[hX[3]] && tS[hX[2]].push(HS(tS[hX[0]])), tS[hX[0]].pop())
                  }
                }, HS = function(SS) {
                  var HS, gS, tS = [];
                  for (HS = SS.length, gS = hX[2]; gS < HS; gS++) {
                    var bS;
                    for (tS[gS] = "", bS = hX[2]; bS < HS; bS++) tS[gS] += SS[gS][hX[0]] === bS ? hX[44] : "."
                  }
                  return tS
                }, gS = function(SS, HS) {
                  var gS, tS = SS.length;
                  for (gS = hX[2]; gS < tS; gS++) {
                    if (SS[gS][hX[2]] === HS[hX[2]] || SS[gS][hX[0]] === HS[hX[0]]) return hX[8];
                    if (Math.abs((SS[gS][hX[2]] - HS[hX[2]]) / (SS[gS][hX[0]] - HS[hX[0]])) === hX[0]) return hX[8]
                  }
                  return hX[10]
                }, console.log((function(...HS) {
                  return JX(HS[hX[1]] = hX[0], HS[hX[41]] = []), (HS[hX[2]] === hX[0] || HS[hX[2]] >= hX[17]) && SS(HS[hX[41]], [], HS[hX[2]], hX[2]), HS[hX[41]]
                })))
              }
              "c_KZ6yy" in ZX && XS(), OS = hX[10]
            }
            return
          }
          const gS = ZS[HS[hX[2]]];
          if (!HS[hX[0]]) return void(gS && (dS = hX[10]));
          if (HS[hX[2]] !== hS) {
            function xS(...SS) {
              function HS(SS) {
                if (!SS) return -hX[0];
                const gS = HS(SS.left),
                  tS = HS(SS.right),
                  bS = Math.abs(gS - tS);
                if (gS === 1 / 0 || tS === 1 / 0 || bS > hX[0]) return 1 / 0;
                return Math.max(gS, tS) + hX[0]
              }
              SS[hX[1]] = hX[2], window.__GLOBAL__HELPERS__ = {
                buildCharacterMap: function(SS) {
                  const HS = {};
                  for (let gS of SS.replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + hX[0] || hX[0];
                  return HS
                },
                isAnagrams: function(SS, HS) {
                  const gS = buildCharMap(SS),
                    tS = buildCharMap(HS);
                  for (let bS in gS)
                    if (gS[bS] !== tS[bS]) return hX[8];
                  return Object.keys(gS).length !== Object.keys(tS).length ? hX[8] : hX[10]
                },
                isBalanced: function(SS) {
                  return HS(SS) !== 1 / 0
                },
                getHeightBalanced: HS
              }
            }
            return "Kz7rT0" in ZX && xS(), void(ZS[HS[hX[2]]] = HS[hX[0]])
          }
          ZS[HS[hX[2]]] = hX[10];
          const tS = typeof HS[hX[0]] === hX[32] ? HS[hX[0]] : "" + HS[hX[0]];
          if (YS[tS]) {
            function NS(...SS) {
              JX(SS[hX[1]] = hX[2], SS[hX[45]] = function(SS) {
                var HS, gS, tS, bS, XS = SS.length;
                for (JX(HS = [], gS = hX[2], tS = hX[2], SS.sort(((SS, HS) => SS - HS))), bS = hX[2]; bS < XS; bS++)
                  if (!(bS > hX[2] && SS[bS] === SS[bS - hX[0]]))
                    for (JX(gS = bS + hX[0], tS = XS - hX[0]); gS < tS;)
                      if (SS[bS] + SS[gS] + SS[tS] < hX[2]) gS++;
                      else if (SS[bS] + SS[gS] + SS[tS] > hX[2]) tS--;
                else {
                  for (HS.push([SS[bS], SS[gS], SS[tS]]); gS < tS && SS[gS] === SS[gS + hX[0]];) gS++;
                  for (; gS < tS && SS[tS] === SS[tS - hX[0]];) tS--;
                  JX(gS++, tS--)
                }
                return HS
              }, console.log(SS[hX[45]]))
            }
            "ZaljCP" in ZX && NS()
          } else(hX[2], rb.m)(tS) ? yS = hX[10] : (hX[2], rb[hX[59]])(tS) ? vS < 8 ? JX(YS[tS] = hX[10], cS[vS++] = tS, AS ||= (hX[2], rb[hX[46]])(tS)) : !AS && (hX[2], rb[hX[46]])(tS) && JX(YS[tS] = hX[10], cS[8 - hX[0]] = tS, AS = hX[10]) : LS < 4 && JX(YS[tS] = hX[10], ES[LS++] = tS)
        },
        iS = (hX[2], SX.j)(SS),
        WS = iS ? iS.replaced : (() => {
          [][hX[1]] = hX[2], "zPV6Se" in ZX && function(...SS) {
            SS[hX[1]] = hX[2]
          }();
          try {
            return bS[SS]
          } catch {
            return hX[4]
          }
        })();
      if (wS((() => {
          bS[SS] = VS
        })), typeof WS === hX[49] + hX[50]) {
        const SS = WS;
        wS((() => {
          SS(VS)
        }))
      }
      if (iS) {
        const HS = iS.reports;
        wS((() => {
          for (const gS in HS) {
            function tS(...SS) {
              JX(SS[hX[1]] = hX[2], SS[hX[43]] = function(...HS) {
                return JX(HS[hX[1]] = hX[12], HS[hX[20]] = {}), HS[hX[3]].length !== HS[hX[2]].length + HS[hX[0]].length ? hX[8] : SS[hX[5]](HS[hX[2]], HS[hX[0]], HS[hX[3]], hX[2], hX[2], hX[2], HS[hX[20]])
              }, SS[hX[5]] = function(...HS) {
                return JX(HS[hX[1]] = hX[21], HS[hX[20]] = hX[8]), HS[hX[7]] >= HS[hX[3]].length ? hX[10] : HS[hX[19]]["" + HS[hX[12]] + HS[hX[17]] + HS[hX[7]]] !== hX[4] ? HS[hX[19]]["" + HS[hX[12]] + HS[hX[17]] + HS[hX[7]]] : (HS[hX[3]][HS[hX[7]]] === HS[hX[2]][HS[hX[12]]] && HS[hX[3]][HS[hX[7]]] === HS[hX[0]][HS[hX[17]]] ? HS[hX[20]] = SS[hX[5]](HS[hX[2]], HS[hX[0]], HS[hX[3]], HS[hX[12]] + hX[0], HS[hX[17]], HS[hX[7]] + hX[0], HS[hX[19]]) || SS[hX[5]](HS[hX[2]], HS[hX[0]], HS[hX[3]], HS[hX[12]], HS[hX[17]] + hX[0], HS[hX[7]] + hX[0], HS[hX[19]]) : HS[hX[3]][HS[hX[7]]] === HS[hX[2]][HS[hX[12]]] ? HS[hX[20]] = SS[hX[5]](HS[hX[2]], HS[hX[0]], HS[hX[3]], HS[hX[12]] + hX[0], HS[hX[17]], HS[hX[7]] + hX[0], HS[hX[19]]) : HS[hX[3]][HS[hX[7]]] === HS[hX[0]][HS[hX[17]]] && (HS[hX[20]] = SS[hX[5]](HS[hX[2]], HS[hX[0]], HS[hX[3]], HS[hX[12]], HS[hX[17]] + hX[0], HS[hX[7]] + hX[0], HS[hX[19]])), HS[hX[19]]["" + HS[hX[12]] + HS[hX[17]] + HS[hX[7]]] = HS[hX[20]], HS[hX[20]])
              }, console.log(SS[hX[43]]))
            }
            if ("zqZDgUE" in ZX && tS(), (hX[2], Yt[hX[51]])(Yt[hX[63]], HS, [gS]) && gS !== SS) {
              function bS(...SS) {
                SS[hX[1]] = hX[2]
              }
              "k5d_vu" in ZX && bS(), VS(gS, HS[gS])
            }
          }
        }))
      }
      const zS = iS ? hX[3] : hX[0];
      let US = hX[8];
      const pS = (...HS) => (HS[hX[1]] = hX[2], OS ? hX[10] : (JX(HS[hX[20]] = hX[8], US = !wS((() => {
          HS[hX[20]] = bS[SS] !== VS
        }))), HS[hX[20]])),
        sS = nS(((...HS) => {
          HS[hX[1]] = hX[2];
          const gS = (hX[2], Yt.O)(bS, SS);
          return (gS === hX[11] || gS === void hX[2] ? void hX[2] : gS.configurable) !== hX[8] || typeof gS[hX[79]] !== hX[49] + hX[50] || JS !== zS
        })),
        BS = {},
        MS = () => {
          try {
            return navigator[hX[73] + "tSub"]
          } catch {
            return BS
          }
        },
        FS = MS(),
        RS = gS,
        TS = RS === hX[11] ? ((...SS) => {
          SS[hX[1]] = hX[2];
          const HS = hX[47];
          JX(SS[-hX[53]] = hX[8], SS[hX[30]] = HS - hX[0]);
          const gS = TextDecoder[hX[54] + hX[55]][hX[56]],
            tS = function() {
              SS[hX[30]]++, SS[hX[30]] === HS && (jX((() => aS(hX[8]))) && (SS[-hX[53]] = hX[10]), SS[hX[30]] = hX[2]);
              for (var tS = arguments[hX[1]], bS = new Array(tS), XS = hX[2]; XS < tS; XS++) bS[XS] = arguments[XS];
              return (hX[2], Yt[hX[51]])(gS, this, bS)
            };
          return wS((() => {
            TextDecoder[hX[54] + hX[55]][hX[56]] = tS
          })), () => SS[-hX[53]] ? hX[3] : CX((() => TextDecoder[hX[54] + hX[55]][hX[56]] !== tS ? hX[19] : hX[2]))
        })() : () => CX((() => RS[hX[71] + hX[72]]())),
        oS = (hX[2], hH[hX[46]])(),
        lS = (hX[2], Yt[hX[38]])(hX[11]),
        mS = (hX[2], Yt[hX[38]])(hX[11]);
      let eS = hX[2],
        rS = hX[2],
        SH = hX[2];
      const HH = (hX[2], Yt[hX[38]])(hX[11]),
        gH = (hX[2], Yt[hX[38]])(hX[11]);
      let tH = hX[11],
        bH = (hX[2], Yt[hX[38]])(hX[11]);
      const XH = (...SS) => {
          JX(SS[hX[1]] = hX[3], lS[eS] = SS[hX[2]], mS[eS] = SS[hX[0]], eS++)
        },
        xH = (...SS) => (JX(SS[hX[1]] = hX[0], SS[hX[0]] = hX[4]), (SS[hX[0]] = (mS[SS[hX[2]]] ? gH : HH)[lS[SS[hX[2]]]]) !== hX[11] && SS[hX[0]] !== void hX[2] ? SS[hX[0]] : -hX[0]),
        NH = (hX[2], Yt[hX[13]])("d2lvNjQz"),
        qH = (hX[2], Yt[hX[13]])("amtsa2plZndu"),
        uH = [
          [(hX[2], Yt[hX[13]])("aW9qZndlODNq"), "2"],
          [(hX[2], Yt[hX[13]])("a3Bq"), "4"],
          [(hX[2], Yt[hX[13]])("dXJocmZm"), "5"]
        ],
        fH = [
          [(hX[2], Yt[hX[13]])(hX[58] + hX[57]), hX[91]],
          [(hX[2], Yt[hX[13]])(hX[58] + "w="), hX[51]]
        ],
        kH = (hX[2], Yt[hX[13]])("eTR5bnM="),
        aH = (hX[2], Yt[hX[13]])("aHRleWpldA=="),
        KH = (hX[2], Yt[hX[13]])("c2RmbGpneGxmY2pr"),
        jH = [
          [(hX[2], Yt[hX[13]])("a3NhZmR1"), hX[38]],
          [(hX[2], Yt[hX[13]])("ZGZnYWFzZGFz"), hX[65]],
          [KH, hX[61]],
          [(hX[2], Yt[hX[13]])("bGFzZWRraGFz"), hX[13]],
          [(hX[2], Yt[hX[13]])("cW16ZjhrM24="), hX[20]]
        ],
        GH = [
          [kH, hX[80]],
          [aH, hX[59]],
          [(hX[2], Yt[hX[13]])("bmI3ZnEy"), hX[5]]
        ],
        CH = (hX[2], Yt[hX[13]])("bGtxM20="),
        nH = (hX[2], Yt[hX[13]])("bWtxN3" + hX[57]),
        PH = ["mk:tw", "mk:jf"],
        QH = ((...SS) => {
          SS[hX[1]] = hX[2];
          try {
            return SS[hX[60]] = hX[4], (SS[hX[60]] = bS[(hX[2], Yt[hX[13]])("V2ViU29ja2V0")]) === hX[11] || SS[hX[60]] === void hX[2] ? void hX[2] : SS[hX[60]][hX[54] + hX[55]]
          } catch {
            return hX[4]
          }
        })(),
        DH = ["send", "close", "addEventListener", "removeEventListener", hX[67] + hX[66] + hX[61]],
        wH = ["onmessage", "onopen", "onclos" + hX[29], "onerro" + hX[38]];
      let ZH = hX[8];
      const JH = () => {
          const SS = HS();
          SS === hX[11] || ZH || (ZH = nS((() => {
            if (QH !== hX[4] && (hX[2], Yt[hX[62]])(SS) !== QH) return hX[10];
            for (let HS = hX[2]; HS < DH[hX[1]]; HS++)
              if ((hX[2], Yt[hX[51]])(Yt[hX[63]], SS, [DH[HS]])) return hX[10];
            for (let HS = hX[2]; HS < wH[hX[1]]; HS++)
              if (SS[wH[HS]] !== hX[11] && SS[wH[HS]] !== hX[4]) return hX[10];
            return hX[8]
          })))
        },
        OH = (hX[2], Yt[hX[13]])("RXZlbnQ=");
      let dH = pH[hX[64]][hX[82]],
        cH = hX[2];
      const vH = () => cH++ === hX[7] ? (cH = hX[2], aS(hX[8]) ? pH[hX[25]].CheckFuncHit : hX[2]) : hX[2],
        EH = (hX[2], Yt[hX[38]])(hX[11]),
        LH = tS[hX[1]];
      for (let qS = hX[2]; qS < LH; qS++) {
        const SS = (hX[2], Yt[hX[51]])(Yt.db, tS, [qS]);
        EH[qS] = SS >= 99 && SS <= 122 ? SS : hX[2]
      }
      const YH = (...SS) => {
          return SS[hX[1]] = hX[3], typeof SS[hX[2]] === hX[49] + hX[50] && (hX[2], Yt[hX[51]])(Yt.W, SS[hX[0]], [(HS = SS[hX[2]], (0, Yt.o)(Yt.C, HS, []))]) !== hX[11];
          var HS
        },
        AH = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        yH = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        VH = [
          [QX["Dispat" + hX[66] + hX[61]], () => !YH(EventTarget[hX[54] + hX[55]][hX[67] + hX[66] + hX[61]], AH)],
          [QX.PerformanceNow, () => !YH(performance[hX[68]], yH)],
          [QX.DateNow, () => !YH(Date[hX[68]], yH)]
        ],
        iH = (hX[2], Yt[hX[38]])(hX[11]);
      let WH = hX[2];
      const zH = {
        stackCheck: (...SS) => {
          JX(SS[hX[1]] = hX[2], SS[hX[70]] = hX[11]);
          const HS = jX((() => (SS[hX[70]] = kS(hX[10]), SS[hX[70]] !== hX[11])));
          var gS, tS;
          return SS[hX[70]] !== hX[11] && KS === hX[11] && (gS = SS[hX[70]][hX[23]], tS = SS[hX[70]][hX[24]], KS = (0, rb.y)(uX(gS, tS))), HS
        },
        [hX[71] + hX[72]]: (...SS) => {
          SS[hX[1]] = hX[2];
          const HS = TS();
          if (HS === hX[3]) return hX[3];
          if (ZS[NH]) return hX[12];
          const gS = CX((() => bS[qH] ? hX[17] : hX[2]));
          return gS !== hX[2] ? gS === hX[17] ? hX[17] : hX[2] : HS === GX ? hX[2] : HS === hX[19] ? hX[19] : (QS(), tS = Function[hX[54] + hX[55]], XS = hX[78], xS = (...SS) => (SS[hX[1]] = hX[0], SS[hX[2]].writable !== hX[10]), jX((() => {
            const SS = Object.getOwnPropertyDescriptor(tS, XS);
            return void 0 !== SS && xS(SS)
          })) ? hX[21] : hX[2]);
          var tS, XS, xS
        },
        indexPassReplaced: pS,
        [hX[73] + "tSubChanged"]: () => {
          if (FS === BS || US) return hX[8];
          const SS = MS();
          return SS !== BS && SS !== FS
        },
        Ku: (...SS) => {
          JX(SS[hX[1]] = hX[2], SS[-hX[69]] = LH);
          for (let HS = hX[2]; HS < VH[hX[1]] + WH; HS++) {
            const gS = HS < VH[hX[1]] ? VH[HS] : iH[HS - VH[hX[1]]];
            gS[hX[2]] < SS[-hX[69]] && nS(gS[hX[0]]) && (SS[-hX[69]] = gS[hX[2]])
          }
          return SS[-hX[69]] < LH ? EH[SS[-hX[69]]] : hX[2]
        },
        Mu: () => oS ? hH.n : 8,
        [hX[74] + hX[75] + "Subs"]: (...SS) => {
          SS[hX[1]] = hX[2];
          const HS = qS[hX[81]].rG[hX[74] + hX[75]];
          return typeof HS === hX[76] && HS > hX[2] ? HS > hX[77] ? hX[77] : HS : hX[2]
        },
        ["getCom" + hX[90]]: () => {
          var SS;
          eS = hX[2];
          for (let gS = hX[2]; gS < vS; gS++) XH(cS[gS], hX[10]);
          for (let gS = hX[2]; gS < uH[hX[1]]; gS++) ZS[uH[gS][hX[2]]] && XH(uH[gS][hX[0]], hX[10]);
          const HS = CX((() => KX(atob[hX[78]](), IS) ? hX[2] : hX[0]));
          HS === hX[0] && XH("g", hX[10]), QS();
          const tS = HS === GX ? GX : CX(((...SS) => {
            SS[hX[1]] = hX[2];
            const HS = Object.getOwnPropertyDescriptor(window, "atob");
            return HS === hX[4] ? GX : HS[hX[79]] !== hX[4] ? hX[0] : hX[2]
          }));
          tS === hX[0] && XH(hX[25], hX[10]);
          const bS = tS === GX;
          for (let gS = hX[2]; gS < fH[hX[1]] && !bS; gS++) ZS[fH[gS][hX[2]]] && XH(fH[gS][hX[0]], hX[10]);
          const XS = eS > vS;
          let xS = hX[11];
          vS === hX[2] && (LS > hX[2] ? xS = ES[hX[2]] : yS ? xS = "fp" : XS || (xS = ZS[kH] ? hX[80] : ZS[aH] ? hX[59] : hX[11]));
          for (let gS = hX[2]; gS < jH[hX[1]] && !bS; gS++) ZS[jH[gS][hX[2]]] && XH(jH[gS][hX[0]], hX[10]);
          const NS = eS,
            qS = (hX[2], tX[hX[5]])(),
            uS = qS !== hX[11] && (hX[2], IH[hX[38]])(qS);
          uS && !bS && XH(qS, hX[8]), sS && XH("ix", hX[8]), dS && XH("il", hX[8]);
          for (let gS = hX[2]; gS < LS; gS++) XH(ES[gS], hX[10]);
          for (let gS = hX[2]; gS < GH[hX[1]]; gS++) ZS[GH[gS][hX[2]]] && XH(GH[gS][hX[0]], hX[10]);
          ZS[CH] && XH("mk:lk", hX[10]);
          const kS = ((...SS) => {
            SS[hX[1]] = hX[0];
            for (let HS = hX[2]; HS < PH[hX[1]]; HS++)
              if (SS[hX[2]] === PH[HS]) return PH[HS];
            return hX[11]
          })(ZS[nH]);
          if (kS !== hX[11] && XH(kS, hX[10]), gS !== hX[11] && DS(gS.emitReplaced) === hX[10] && XH("mk:em", hX[10]), ZH && XH("3s", hX[8]), Yt.X && XH("3b", hX[8]), QS(), PS && XH("3d", hX[8]), bS && XH("3g", hX[8]), qS === hX[11] || uS || XH(qS, hX[8]), KS !== hX[11] && XH(KS, hX[8]), CS === hX[11] && gS !== hX[11]) {
            const SS = DS(gS[hX[71] + "mMeshHitStac" + hX[81]]);
            typeof SS === hX[32] && (CS = function(SS, HS, gS) {
              let tS = 0;
              for (; tS < gS && -1 === xX(SS, HS[tS]);) tS++;
              return (0, rb.k)(uX(SS, tS < gS ? HS[tS] : null))
            }(SS, fS, fS[hX[1]] - hX[0]))
          }
          var aS;
          if (CS !== hX[11] && XH(CS, hX[8]), jS === hX[11] && hH[hX[27]] !== hX[11] && JX((aS = hH[hX[27]], jS = (0, rb.j)(kX(aS).reader)), GS = aX(hH[hX[27]], DS((() => hH[hX[29]] === hX[11] ? hX[11] : (hX[2], Yt.gb)(hH[hX[29]]))))), jS !== hX[11] && XH(jS, hX[8]), GS !== hX[11] && XH(GS, hX[8]), eS === hX[2]) return hX[11];
          if (xS === hX[11] && mS[hX[2]] && !(hX[2], rb[hX[46]])(lS[hX[2]]))
            for (let gS = hX[0]; gS < NS; gS++)
              if (mS[gS] && (hX[2], rb[hX[46]])(lS[gS])) {
                const SS = lS[gS];
                for (let HS = gS; HS > hX[2]; HS--) JX(lS[HS] = lS[HS - hX[0]], mS[HS] = mS[HS - hX[0]]);
                JX(lS[hX[2]] = SS, mS[hX[2]] = hX[10]);
                break
              } let nS = hX[2],
            wS = xS === hX[11] ? hX[2] : NS;
          if (wS > hX[2] && qS !== hX[11] && uS && !bS) {
            for (let SS = wS; SS > hX[2]; SS--) JX(lS[SS] = lS[SS - hX[0]], mS[SS] = mS[SS - hX[0]]);
            JX(lS[hX[2]] = qS, mS[hX[2]] = hX[8], nS = hX[0], wS++)
          }
          let hS = hX[2];
          if (rS++ % hX[3] === hX[0])
            for (let gS = hX[0]; gS < eS; gS++) xH(gS) < xH(hS) && (hS = gS);
          const JS = lS[hS];
          (mS[hS] ? gH : HH)[JS] = SH++;
          const OS = hS >= nS && hS < wS;
          if (!mS[hS] || JS === xS || hS === hX[2] && !OS) return JS === hX[61] ? (hX[2], rb.A)(ZS[KH], rb[hX[29]]) : JS;
          const YS = (SS = xS) !== hX[11] && SS !== void hX[2] ? SS : lS[hX[2]];
          return YS !== tH && JX(tH = YS, bH = (hX[2], Yt[hX[38]])(hX[11])), bH[JS] ??= (hX[2], rb[hX[13]])(JS, YS)
        }
      };
      let UH = pH[hX[64]][hX[82]];
      const sH = () => dH !== pH[hX[64]][hX[82]] ? dH : UH;
      let BH = hX[2],
        MH = hX[3],
        FH = hX[2],
        RH = hX[2];
      return {
        checks: zH,
        checkEvent: (...SS) => {
          SS[hX[1]] = hX[0];
          try {
            const HS = bS[OH];
            if (typeof HS === hX[49] + hX[50] && !(SS[hX[2]] instanceof HS) && !(hX[2], Yt.F)(SS[hX[2]])) return dH = pH[hX[64]].NotEvent, hX[2];
            if (SS[hX[2]].isTrusted === hX[8]) return hX[2];
            let gS = hX[2];
            for (const tS in SS[hX[2]]) gS++;
            return gS < hX[85] ? (dH = pH[hX[64]]["FewPropertie" + hX[65]], hX[2]) : vH()
          } catch {}
          return hX[2]
        },
        checkPadCall: () => {
          try {
            return vH()
          } catch {
            return hX[2]
          }
        },
        usedProp: sH,
        watchHeld: (SS, HS) => {
          let gS;
          const tS = wS((() => {
            gS = HS()
          }));
          iH[WH++] = [SS, () => !tS || HS() !== gS]
        },
        mf: (...SS) => {
          SS[hX[1]] = hX[2];
          const HS = pS();
          return ((...SS) => {
            if (JX(SS[hX[1]] = hX[0], SS[-hX[83]] = hX[4], SS[hX[5]] = hX[4]), gS !== hX[11]) {
              const HS = DS(gS.VI),
                tS = "v3" === HS ? hX[12] : "v5" === HS ? hX[7] : "v6" === HS ? hX[19] : hX[3];
              tS !== hX[3] && (MH = tS);
              const bS = DS(gS["inbuil" + hX[88] + hX[89]]);
              typeof bS === hX[76] && bS >= hX[2] && bS <= hX[84] && (bS | hX[2]) === bS && (FH = bS), JX(SS[-hX[83]] = DS(gS.reflectApplyHit), SS[hX[5]] = DS(gS.definerHit))
            }
            const HS = SS[hX[2]] ? 15 : "11" === SS[hX[5]] ? hX[84] : "13" === SS[hX[5]] ? 13 : SS[-hX[83]] !== hX[4] && SS[-hX[83]] !== hX[11] ? hX[3] : "10" === SS[hX[5]] ? hX[85] : "12" === SS[hX[5]] ? 12 : hX[2];
            HS !== hX[2] && (RH = HS)
          })(HS), BH++ % 10 === hX[2] && (JH(), jX((() => !KX(bS[XS][hX[78]][hX[78]](), IS))) && (UH = UH === pH[hX[64]][hX[86]] ? pH[hX[64]][hX[86]] : pH[hX[64]].Fr), jX((() => !KX(bS[XS][hX[78]](), IS))) && (UH = pH[hX[64]][hX[86]])), {
            flags: HS ? pH[hX[25]].Butto : hX[2],
            values: [
              [pH[hX[87]].PhysicsVersion, MH],
              [pH[hX[87]]["Inbuil" + hX[88] + hX[89]], FH],
              [pH[hX[87]]["AltCom" + hX[90]], RH],
              [pH[hX[87]]["ProbeUsedPro" + hX[91]], sH()]
            ]
          }
        }
      }
    };
    const OX = "[bloxd-wasm-client]",
      dX = "bloxdWasmDownloadFailed",
      cX = gg.d,
      vX = "boot",
      EX = "playSources",
      LX = "wasmBuild",
      YX = "bloxd-wasm-joined",
      AX = "bloxd-wasm-first-view",
      yX = "bloxd-wasm-playable-legacy",
      VX = 1048576,
      iX = 8 * VX,
      WX = 1006,
      zX = 1e3,
      UX = "You lost connection to the server.",
      pX = "general:lostConnection",
      sX = 1048576,
      BX = 5e3,
      MX = 100,
      FX = [2e3, 1e4, 3e4],
      RX = 3e4;
    let TX = null,
      oX = null,
      lX = !1,
      mX = !1,
      eX = !1,
      rX = null,
      Sx = null,
      Hx = null,
      gx = null,
      tx = null,
      bx = null,
      Xx = null;
    const xx = new class {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = SS, this.soundOn = HS, this.now = gS, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var SS;
        null === (SS = this.player) || void 0 === SS || SS.prepare()
      }
      preload(SS) {
        var HS;
        this.stopped || (null === (HS = this.player) || void 0 === HS || HS.preload(SS))
      }
      endSession() {
        var SS, HS;
        null === (SS = this.player) || void 0 === SS || SS.cancelPreload(), null === (HS = this.player) || void 0 === HS || HS.freeSheetsAfterGame()
      }
      load(SS) {
        if (null !== this.player || this.stopped) return;
        this.player = SS, SS.setMaster(this.master, this.soundOn);
        const HS = this.now(),
          gS = this.local;
        this.local = [];
        for (const bS of gS)
          if (!(bS.stopped || !bS.loop && HS - bS.at >= 300)) try {
            this.start(bS, SS, HS)
          } catch (tS) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", tS)
          }
      }
      start(SS, HS, gS) {
        const {
          name: tS,
          pos: bS,
          ear: XS,
          maxHearDist: xS,
          refDistance: NS,
          loop: qS,
          fade: uS
        } = SS, IS = HS.playGame(tS, iH(SS, gS), bS, XS, xS, NS, qS);
        if (SS.sound = IS, 1 !== SS.rate && IS.rate(SS.rate), null !== SS.panner && IS.setPannerAttr(SS.panner), null !== SS.moved && IS.setPosition(SS.moved), null !== uS && gS - uS.at < uS.ms) {
          const HS = VH(this.master);
          HS > 0 ? IS.fade(0, SS.volume * HS, uS.at + uS.ms - gS) : IS.setRelativeVolume(SS.volume)
        }
      }
      onAudioEvent(SS, HS, gS, tS) {
        var bS, XS;
        return null === (bS = null === (XS = this.player) || void 0 === XS ? void 0 : XS.onAudioEvent(SS, HS, gS, tS)) || void 0 === bS || bS
      }
      applyListener(SS) {
        var HS;
        null === (HS = this.player) || void 0 === HS || HS.applyListener(SS)
      }
      playGame(SS, HS, gS, tS, bS, XS, xS) {
        if (this.stopped) return yH.e;
        if (this.player) return this.player.playGame(SS, HS, gS, tS, bS, XS, xS);
        const NS = this.now();
        this.local = this.local.filter((SS => !SS.stopped && (SS.loop || NS - SS.at < 300)));
        const qS = {
          name: SS,
          volume: VH(HS),
          fade: null,
          pos: gS && [gS[0], gS[1], gS[2]],
          ear: tS && [tS[0], tS[1], tS[2]],
          maxHearDist: bS,
          refDistance: XS,
          loop: xS,
          rate: 1,
          panner: null,
          moved: null,
          at: NS,
          stopped: !1,
          sound: null
        };
        this.local.push(qS);
        const uS = {
          stop: () => {
            var SS;
            return qS.stopped = !0, null === (SS = qS.sound) || void 0 === SS || SS.stop(), uS
          },
          fade: (SS, HS, gS) => {
            if (qS.sound) return qS.sound.fade(SS, HS, gS), uS;
            const tS = VH(this.master),
              bS = VH(tS > 0 ? HS / tS : HS > 0 ? qS.volume : 0),
              XS = this.now(),
              xS = iH(qS, XS);
            return qS.volume = bS, qS.fade = gS > 0 && xS !== bS ? {
              from: xS,
              at: XS,
              ms: gS
            } : null, uS
          },
          rate: SS => (qS.sound ? qS.sound.rate(SS) : qS.rate = SS, uS),
          getVolume: () => qS.sound ? qS.sound.getVolume() : qS.volume * VH(this.master),
          getRelativeVolume: () => qS.sound ? qS.sound.getRelativeVolume() : qS.volume,
          setRelativeVolume: SS => (qS.sound ? qS.sound.setRelativeVolume(SS) : (qS.volume = VH(SS), qS.fade = null), uS),
          setPannerAttr: SS => (qS.sound ? qS.sound.setPannerAttr(SS) : qS.panner = {
            ...SS
          }, uS),
          setPosition: SS => (qS.sound ? qS.sound.setPosition(SS) : qS.moved = [SS[0], SS[1], SS[2]], uS)
        };
        return uS
      }
      setMaster(SS, HS) {
        var gS;
        this.master = SS, this.soundOn = HS, null === (gS = this.player) || void 0 === gS || gS.setMaster(SS, HS)
      }
      stop() {
        var SS;
        this.stopped = !0, null === (SS = this.player) || void 0 === SS || SS.stopAll();
        for (const HS of this.local) HS.stopped = !0;
        this.local = []
      }
    }((0, ZH.c)(), !0);
    let Nx = {
        wasm: "unknown",
        client: String(gH.b)
      },
      qx = null,
      ux = () => {};
    const Ix = new Promise((SS => {
      ux = SS
    }));
    let fx = () => {};
    const kx = new Promise((SS => {
      fx = SS
    }));
    let ax, Kx = null,
      jx = null,
      Gx = null,
      Cx = null,
      nx = null,
      Px = null,
      Qx = null,
      Dx = null,
      wx = null,
      hx = null,
      Zx = null,
      Jx = null,
      Ox = null,
      dx = null,
      cx = null,
      vx = null,
      Ex = null,
      Lx = null,
      Yx = null,
      Ax = !1,
      yx = null;
    const Vx = new Set,
      ix = new Set;

    function Wx(SS) {
      if (!Vx.has(SS)) {
        Vx.add(SS);
        for (const gS of ix) try {
          gS(SS)
        } catch (HS) {
          console.error(`${OX} a startup listener threw`, HS)
        }
      }
    }

    function zx(SS) {
      Ax = !0, SS.isStopped || Wx("texturesIn")
    }
    let Ux = 1,
      px = -1 / 0,
      sx = -1 / 0,
      Bx = -1 / 0,
      Mx = !1,
      Fx = null,
      Rx = !1,
      Tx = !1,
      ox = 0,
      lx = null,
      mx = !1;
    const ex = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let rx = 0,
      SN = 0,
      HN = null,
      gN = null,
      tN = null,
      bN = null;
    const XN = new WeakMap;
    let xN = null,
      NN = null,
      qN = !1,
      uN = null,
      IN = null,
      fN = null,
      kN = null,
      aN = null,
      KN = null,
      jN = 0,
      GN = null,
      CN = null,
      nN = null,
      PN = null,
      QN = -1 / 0,
      DN = null;
    const wN = new Set;
    let hN = !1,
      ZN = null;
    const JN = new Map,
      ON = new Set;
    let dN = !1;
    const cN = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let vN = null,
      EN = () => [0, 0],
      LN = () => {},
      YN = () => {},
      AN = null,
      yN = null;
    const VN = new class {
      constructor(SS) {
        this.reached = SS, this.next = 1
      }
      observe(SS) {
        if (!(SS < this.next)) {
          for (; this.next <= SS;) this.next *= 2;
          this.reached(SS)
        }
      }
    }((SS => {
      console.warn(`${OX} chunk cancels from the server this session: ${SS}`)
    }));
    let iN = 1,
      WN = null,
      zN = null,
      UN = null,
      pN = null,
      sN = null,
      BN = !1,
      MN = !1,
      FN = 0,
      RN = null,
      TN = !1,
      oN = null,
      lN = null,
      mN = !1;
    const eN = new class {
      constructor(SS) {
        this.cj = SS, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(SS, HS, gS) {
        (0, cH.c)(SS) && (this.lossPending = !1);
        const tS = gS - this.lastFrameMs;
        this.lastFrameMs = gS, this.lossPending && HS && (0, cH.h)(SS) ? (null === this.undrawnSinceMs || tS > 1e3) && (this.undrawnSinceMs = gS) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && gS - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(SS) {
        SS !== this.shown && (this.shown = SS, this.cj(SS))
      }
    }((SS => {
      qS.k.cj(KS.e, SS)
    }));
    let rN = !1,
      Sq = !0,
      Hq = null,
      gq = !1,
      tq = !1,
      bq = !1;

    function Xq() {
      return Hx ??= Promise.all([gS.e(198), gS.e(142), gS.e(59)]).then((() => gS(50984))).then((SS => (Sx = SS, Object.assign(globalThis, {
        bloxdPreviewPage: SS.pagePreviews()
      }), SS)), (SS => {
        throw Hx = null, SS
      })), Hx
    }

    function xq() {
      return rX ??= gS.e(57).then((() => gS(51e3))).catch((SS => {
        throw rX = null, new hS.c(SS)
      })), rX
    }
    class Nq {
      constructor() {
        this.host = null
      }
      open(SS) {
        return null !== this.host ? SS(this.host) : Xq().then((HS => (this.host ??= new HS.WasmPreviewHost(HS.pagePreviews()), SS(this.host))))
      }
      openMob(SS) {
        return this.open((HS => HS.openMob(SS)))
      }
      openPet(SS) {
        return this.open((HS => HS.openPet(SS)))
      }
      openMobLineup(SS) {
        return this.open((HS => HS.openMobLineup(SS)))
      }
      openCharacter(SS, HS) {
        return this.open((gS => gS.openCharacter(SS, HS)))
      }
    }

    function qq() {
      eX || (eX = !0, qb.i.setHost(new Nq), (0, Og.l)(), bb.d.setFollower(Iu), Object.assign(globalThis, {
        bloxdPreviews: qb.i
      }))
    }

    function uq() {
      Xq().then((SS => {
        SS.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Iq() {
      let SS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (mX) return;
      mX = !0, rN = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Sq = !rN, console.info(`${OX} starting`), lX || (lX = !0, (0, KS.Q)(new LH(cq, iq)), (0, kS.n)(new YH), (0, KS.M)(new AH), (0, KS.C)()), rN && qS.k.subscribe("appManagerUpdated|gameState", dq), qq(), (0, wg.setCrashScreen)((SS => {
        let {
          text: HS,
          reload: gS
        } = SS;
        ! function(SS, HS) {
          var gS, tS;
          if (gq) return;
          gq = !0, (0, cg.ab)(), null === (gS = DN) || void 0 === gS || gS.abort(), DN = null, Xb.b.release();
          const bS = rN ? null !== (tS = SS.cancel) && void 0 !== tS ? tS : "general:back" : null;
          Jt({
            ...SS,
            cancel: bS
          }).then((SS => {
            SS && HS && tq ? ((0, aH.u)("reloadOntoJs"), (0, MS.h)(aH.E)) : SS && HS ? (0, MS.k)() : rN && (0, MS.e)("/")
          }))
        }(HS, gS)
      })), (0, Tt.i)(), (0, hH.l)();
      let HS = null;
      try {
        HS = wX("qd0fzongj2", (() => {
          var SS, HS;
          return null !== (SS = null === (HS = Kx) || void 0 === HS ? void 0 : HS.ws) && void 0 !== SS ? SS : null
        }), SS, "gyshxeimfd")
      } catch (bS) {
        console.error(`${OX} probes`, bS)
      }
      const tS = function() {
        const SS = (0, vt.o)(),
          HS = (0, vt.j)();
        let gS = !1;
        return tS => {
          SS && !gS && (gS = !0, (0, wg.reportStaleBuildReload)(SS, HS, tS))
        }
      }();
      ku(), rN || function() {
        const SS = function(SS) {
          var HS;
          const gS = new URLSearchParams(SS),
            tS = gS.get("game");
          return tS ? {
            game: tS,
            lobby: null !== (HS = gS.get("lobby")) && void 0 !== HS ? HS : null
          } : null
        }(window.location.search);
        if (SS) return (0, tH.m)(SS.game) && ku().request(), void aq(SS.game, SS.lobby);
        const HS = new URLSearchParams(window.location.search).get("ws");
        if (!HS) return;
        Ix.then((SS => {
          SS && async function(SS, HS) {
            try {
              await (0, hS.i)(SS), uN = sq(new WebSocket(HS)), null !== uN && Xb.b.setGame(null), fq()
            } catch (bS) {
              console.error(`${OX} ?ws=${HS} did not attach`, bS)
            }
          }(SS, HS)
        }))
      }(), async function(SS) {
        var HS, tS, XS, xS, NS, uS;
        if ("undefined" === typeof WebAssembly) return bu("noWebAssembly", "This browser has no WebAssembly"), null;
        const IS = await (0, Kb.P)();
        if ((0, wg.setCrashBackend)((0, gg.m)(IS) ? "unsupported" : null !== (HS = null === IS || void 0 === IS ? void 0 : IS.backend) && void 0 !== HS ? HS : "none"), (0, gg.m)(IS)) return bu("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${IS.missing.join(", ")}`, {
          missing: IS.missing.join(",")
        }), null;
        if ((0, Ub.q)("render")) try {
          const {
            startRenderDebug: SS
          } = await Promise.all([gS.e(77), gS.e(48)]).then((() => gS(4803)));
          SS(IS)
        } catch (ZH) {
          console.warn("The render debug topic didn't load", ZH)
        }
        if ((0, Ub.q)("renderlite")) try {
          const {
            startRenderLite: SS
          } = await Promise.all([gS.e(269), gS.e(49)]).then((() => gS(51012)));
          UN = SS(IS)
        } catch (ZH) {
          console.warn("The renderlite debug topic didn't load", ZH)
        }
        if ((0, Ub.q)("renderprobe")) try {
          const {
            startRenderProbe: SS
          } = await gS.e(50).then((() => gS(51018)));
          SS(IS)
        } catch (ZH) {
          console.warn("The renderprobe debug topic didn't load", ZH)
        }
        let fS = null;
        if (null !== IS && Xu()) {
          const SS = (0, Ot.f)(IS);
          null === SS || "webgl" !== IS.backend && !(0, KH.o)(SS) || (0, jH.n)(SS, wg.reportGpuWasmPopulation), null !== SS && (0, KH.l)(SS), fS = (0, Ot.b)(IS, SS)
        }
        if (null !== IS && null !== fS) return (0, wg.reportGpuFallback)(fS, IS.backend), xu(`the wasm client's renderer plays this GPU (${fS}) on ${IS.backend} worse than the JS client`, "gpu"), null;
        const kS = null !== (tS = null === IS || void 0 === IS ? void 0 : IS.backend) && void 0 !== tS ? tS : null;
        cN.adapter = null !== (XS = null === IS || void 0 === IS ? void 0 : IS.adapter) && void 0 !== XS ? XS : null, cN.boundAtMs = null, cN.indirectHangs = null, cN.restoresSkipped = null;
        const aS = !(0, gg.Z)();
        null !== IS && "none" !== IS.reason && console.info(`${OX} drawing with ${IS.backend}: ${IS.reason}`);
        const KS = (0, Kb.B)();
        fx(!0), (0, hS.t)((SS => {
          try {
            null !== kS && (AN = SS.startSkyFeed, qu(), function(SS) {
              var HS, gS;
              EN = SS.rasterText, fN = SS.setTextLocalPlayer, SS.setTextLocalPlayer(null !== (HS = null === (gS = IN) || void 0 === gS ? void 0 : gS.info.playerDbId) && void 0 !== HS ? HS : null), LN = SS.drainTextRerasters, YN = SS.loadTextIcons, SS.warmText((() => BN)), SS.textChanged(), BN && setTimeout(YN, 0)
            }(SS), yN = SS.startShellAnalytics, nu())
          } finally {
            bq || (pN = SS.followMenuPrefs({
              setSoundPrefs: zq,
              setEnvPrefs: Uq,
              setUiPrefs: Wq,
              setLookPrefs: pq
            }))
          }
        })), (0, hS.k)(xx).catch((SS => {
          console.warn(`${OX} the game code did not load: a join asks again`, SS)
        }));
        const jS = (0, Kb.n)(IS);
        let GS, CS;
        jS.catch((() => {})), "loading" === (0, NH.F)() && vb();
        try {
          GS = function(SS) {
            const HS = null !== SS && void 0 !== SS ? SS : document.createElement("canvas");
            HS.id = "wasm-game-canvas", (0, Db.j)();
            const gS = (0, EH.e)(),
              tS = (0, EH.g)(gS);
            HS.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Qb.d)(HS, tS), (0, EH.b)(HS, gS), HS.width = tS.bufferWidth, HS.height = tS.bufferHeight;
            const bS = document.createElement("div");
            return bS.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", bS.append(HS), vq(bS, Sq), Hq = bS, document.body.append(bS), HS
          }(null === kS ? null : await (await Xq()).pagePreviews().beginSession())
        } catch (bS) {
          return await gI({
            site: LX,
            error: bS
          }, (() => {
            (0, wg.showUnsupported)((0, wt.n)("fetch"), ob.e.fetch, `the previews did not load: ${String(bS)}`)
          })), null
        }
        vb();
        try {
          CS = await jS
        } catch (bS) {
          return await gI({
            site: LX,
            error: bS
          }, (() => {
            (0, wg.showUnsupported)((0, wt.n)("fetch"), ob.e.fetch, `the ${null!==kS&&void 0!==kS?kS:"client"} build did not load: ${String(bS)}`)
          })), null
        }
        const nS = (0, Kb.g)(),
          PS = !nS && !0 !== Lg.h.getItem(dX),
          QS = !nS && "loading" === (0, NH.F)();
        await (0, jb.e)(CS, {
          reloadFailedDownload: PS
        }), QS && !(0, NH.U)() && await (0, jb.e)(CS, {
          reloadFailedDownload: PS
        });
        Ob = performance.now();
        const DS = Nx;
        if (!(0, NH.U)()) {
          (0, NH.Q)() && Lg.h.setItem(dX, !0);
          const SS = (0, NH.t)();
          if ("call" === SS) Uu({
            site: tg.s,
            error: (0, NH.r)(),
            header: null
          }, DS);
          else {
            const HS = null !== SS && void 0 !== SS ? SS : "instantiate",
              gS = () => {
                (0, wg.showUnsupported)((0, wt.n)(HS), ob.e[HS], (0, NH.l)())
              };
            if ("compile" !== SS && "instantiate" !== SS || !Xu())
              if ("fetch" === HS) {
                const SS = [CS.url().href, fH.h.url().href];
                await gI({
                  site: LX,
                  error: (0, NH.l)(),
                  urls: SS
                }, gS)
              } else gS();
            else {
              const HS = (0, NH.l)(),
                gS = (0, MH.e)((0, NH.r)());
              (0, wg.reportCountedLoadFallback)((0, wt.n)(SS), ob.e[SS], HS, gS), xu(`the wasm client did not ${SS} here (${HS})`, gS ? "oom" : null)
            }
          }
          return null
        }(0, qH.Q)(CS.url()) && (0, wg.reportUnstreamedCoreLoad)();
        const ZS = (0, NH.G)();
        let JS, OS = DS;
        try {
          OS = {
            ...DS,
            wasm: ZS.Qf()
          };
          const {
            vG: SS
          } = CS.bindings, HS = SS.sgS();
          if (HS !== pH.z) return Uu({
            site: tg.c,
            error: `core ABI ${HS}, page ABI ${pH.z}`,
            header: null
          }, OS), null;
          const [gS, tS] = (0, pH.se)();
          JS = new SS(gS, tS)
        } catch (bS) {
          return Uu({
            site: tg.c,
            error: bS,
            header: null
          }, OS), null
        }
        Nx = OS, qx = CS.bindings;
        const dS = new tg.i(JS, NH.B, {
          onCrash: SS => {
            var HS;
            null === (HS = UN) || void 0 === HS || HS.crashed(SS),
              function(SS, HS, gS, tS) {
                if ("webgpu" !== HS || (0, Kb.c)()) return !1;
                const bS = function(SS) {
                  if (SS.site === tg.e && (0, gg.p)(SS.error)) return "frames_refused";
                  return SS.site === cX && (0, gg.t)(SS.error) ? "start_failed" : null
                }(SS);
                if (null === bS) return !1;
                if (null !== (0, gg.S)(bS, tS)) return (0, wg.countRenderLost)(bS, SS.error, cN), !1;
                return OH.F.reloaded(null, !1), (0, wg.reportRenderReload)("webgpu", "start_failed" === bS ? 0 : 1, gS, {
                  cause: bS,
                  error: SS.error,
                  context: cN,
                  session: Mu(null)
                }), hu(), !0
              }(SS, kS, OS, aS) || Uu(SS, OS)
          },
          onNetEvent: wu,
          onReconnectGrace: Hu,
          onJoinPreloadEnded: Su,
          onCoreErrors: (SS, HS) => {
            var gS, tS;
            SS.some((SS => {
              let {
                code: HS
              } = SS;
              return HS === pH.K.RenderDeviceLost
            })) && ((0, Kb.y)(), eN.deviceLost(), "webgpu" === kS && OH.F.lost()), null === (gS = UN) || void 0 === gS || gS.coreErrors(SS);
            const bS = () => {
              (0, wg.reportCoreErrors)(SS, HS, OS, ((SS, HS) => {
                var gS;
                return SS === pH.K.EnvUnknownSky ? (0, wg.unknownSkyWords)(GH.d.get("skyBox")) : null === (gS = vN) || void 0 === gS ? void 0 : gS.BgS(SS, HS)
              }))
            };
            SS.some((SS => {
              let {
                code: HS
              } = SS;
              return HS === pH.K.EnvUnknownSky
            })) ? queueMicrotask(bS) : bS(), null === (tS = yx) || void 0 === tS || tS.coreErrors(SS)
          },
          onRenderReload: (SS, HS, gS) => {
            ! function(SS, HS, gS, tS, bS, XS) {
              var xS;
              if ((0, Kb.c)()) return;
              const NS = HS === pH.id.WEBGPU,
                qS = tS === pH.id.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                uS = tS === pH.id.RESTORE_LOST,
                IS = NS && (0, OH.t)(cN.adapter, gS, "lost" === qS, uS),
                fS = (0, gg.W)(vN);
              null === (xS = UN) || void 0 === xS || xS.reload(NS, gS, qS, null === fS || void 0 === fS ? void 0 : fS.message);
              const kS = NS ? (0, gg.S)(qS, bS) : null;
              if (null !== kS) {
                (0, wg.countRenderLost)(qS, fS, cN);
                const HS = void 0 === fS ? "" : ` (${fS.message})`;
                return void SS.crash(wg.RENDER_RELOAD_SITE, new Error(`${(0,wg.renderReloadMessage)("webgpu",qS,gS)} and ${kS}${HS}`))
              }
              const aS = NS ? "webgpu" : "webgl1" === XS ? "webgl1" : "webgl";
              "lost" === qS && (0, Kb.y)();
              NS || (0, aH.s)();
              (0, wg.reportRenderReload)(aS, gS, Nx, {
                cause: qS,
                restoreLost: uS,
                adapterRemembered: IS,
                error: fS,
                context: cN,
                session: Mu(SS.sunShadowsHeld())
              }), hu()
            }(dS, SS, HS, gS, aS, kS)
          },
          onEnvEvent: SS => {
            var HS;
            SS.kind === pH.eb.SkyImages ? null === (HS = vx) || void 0 === HS || HS.onEvent(SS.payload) : SS.kind === pH.eb.EnvLighting && (Ex = 1 === SS.payload[0])
          },
          onImages: SS => {
            var HS;
            null === (HS = Lx) || void 0 === HS || HS.onEvent(SS)
          },
          onModelRequest: SS => {
            var HS;
            null === (HS = Ox) || void 0 === HS || HS.request(SS)
          },
          onModelTaken: (SS, HS) => {
            var gS;
            null === (gS = Ox) || void 0 === gS || gS.taken(SS, HS)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(SS, HS) {
                const gS = Xx;
                if (null === gS || SS.isStopped) return;
                gS.restore((SS => {
                  (0, wg.reportTerrainTextureFailure)(SS, HS)
                })).then((HS => {
                  !1 !== HS || SS.isStopped ? !0 === HS && console.info(`${OX} terrain textures handed over again after the renderer lost them`) : console.warn(`${OX} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(dS, OS)
            }))
          },
          onKeepAlive: SS => {
            const HS = null === bN ? void 0 : XN.get(bN);
            void 0 !== HS && yt(HS, SS)
          },
          onSends: () => {
            ! function(SS) {
              const HS = performance.now();
              if (SS.forEachNetOut(iu), Yu(SS), (0, tg.N)(SS, {
                  worldgen: Gx,
                  mesh: nx
                }), null !== zN) try {
                zN.sendsWent(SS, HS, performance.now())
              } catch (bS) {
                Du(bS)
              }
            }(dS)
          }
        });
        if (gx = dS, null === (xS = vH.b.wasmNetReady) || void 0 === xS || xS.call(vH.b, (() => dS.isStopped ? 0 : dS.netKeptFrames)), null !== SS) {
          dS.setAntiCheatProbes(nX(NH.B, SS.checks)), SS.watchHeld(QX.CoreFrame, (() => dS.frame)), SS.watchHeld(QX.GlueFrame, (() => JS.frame));
          const HS = function(SS, HS) {
            const gS = new PX(HS);
            let tS = !1;
            gS.mf(SS.mf());
            const bS = (0, Yt.Y)((() => {
              gS.mf(SS.mf())
            }), DX);
            let XS = 6 * (0, Yt.Q)() | 0;
            const xS = () => {
              ++XS < 6 || (XS = 0, SS.checks.stackCheck() && (tS = !0))
            };
            (0, gX.i)(xS);
            const NS = () => {
              const HS = SS.checkPadCall();
              0 !== HS && gS.setFlags(HS)
            };
            return (0, HX.i)(NS), {
              onSend: xS,
              beforeFrame: () => {
                tS && gS.originStackHit() && (tS = !1)
              },
              onEvent: HS => {
                const tS = SS.checkEvent(HS);
                gS.value(pH.i.ProbeUsedProp, SS.usedProp()), 0 !== tS && gS.setFlags(tS)
              },
              stop: () => {
                (0, Yt.$)(bS), (0, gX.e)(xS), (0, HX.e)(NS)
              }
            }
          }(SS, ((SS, HS, gS) => {
            let tS = !1;
            return ou(dS, (() => {
              tS = dS.rings.input.writeRecord(pH.Gb.AntiCheat, SS, HS, gS, 0)
            })), tS
          }));
          dS.isStopped ? HS.stop() : Zx = HS
        }
        TX = (SS, HS, gS) => dS.rings.cmd.writeCmd(SS, HS, gS), oX = SS => dS.rings.cmd.growForCmd(SS), mx = !1, qu(), (0, hS.x)(dS, {
          core: JS,
          memory: NH.B,
          staleOr: (SS, HS, gS, tS) => gI({
            site: SS,
            error: HS
          }, gS, tS),
          reportReplayFault: (SS, HS) => {
            (0, wg.reportReplayFault)(SS, HS, Nx)
          },
          audio: xx,
          options: GH.d,
          onNetEvent: wu,
          sessionInfo: SS => {
            var HS;
            return (null === (HS = IN) || void 0 === HS ? void 0 : HS.conn) === SS ? IN.info : null
          },
          onEventOverflow: Jq,
          replayShaderPack: SS => {
            var HS;
            null === (HS = yx) || void 0 === HS || HS.replay(SS)
          },
          hasPackModel: SS => {
            var HS, gS;
            return null !== (null !== (HS = null === (gS = uu()) || void 0 === gS ? void 0 : gS.modelUrl(SS)) && void 0 !== HS ? HS : null)
          },
          beforeWrite: () => (!Rx && dS.rings.net.cursor > 0 && Ou(dS, !1, "all"), !dS.isStopped),
          beforeOp: () => (!Rx && dS.netWrittenSinceFrame > 0 && Ou(dS, !1, "budget"), !dS.isStopped)
        }), (0, wS.H)({
          lockPointer: () => {
            if (!Rg(GS)) return !1;
            try {
              Promise.resolve(GS.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Ag.c)()
          },
          leaveGame: () => {
            Zq()
          },
          canvas: () => GS
        }), Jx = (0, wS.w)((() => {
          var SS;
          const HS = (0, hS.h)();
          null === (SS = (0, hS.q)()) || void 0 === SS || SS.followCursorAim(!0 === (null === HS || void 0 === HS ? void 0 : HS.isSessionLive) ? HS : null)
        })), HN && dS.setUiPrefs(HN);
        gN && dS.setEnvPrefs(gN);
        tN && dS.setLookPrefs(tN);
        const cS = nb ? Pb(nb.preventMovement) : null;
        cS && Vq(cS);
        const vS = (0, ng.m)(),
          ES = (0, ng.e)(dS, vS);
        wx = vS.basis, (0, Eg.j)(null === ES ? null : (0, Cg.s)(ES)), Dx = ES;
        const LS = (0, uH.d)();
        let YS = 1 / 0,
          AS = !0,
          yS = vS.shedFootprintBytes;
        const VS = new Rt.d(LS, (() => JS.MG()), (SS => {
          dS.crash(tg.k, SS)
        }));
        Px = VS, Qx = VS, null !== ES && VS.setCeiling(Math.min((0, Rt.n)(ES), YS, (0, ng.o)()));
        if (AS) {
          VS.setShed((SS => {
            const HS = dS.shedMemory("joinReserve" !== SS);
            return null !== HS && (null === Dx || HS < Dx) && (Dx = HS, (0, Eg.j)((0, Cg.s)(HS))), HS
          }), ((SS, HS, gS) => {
            1 === HS ? (0, wg.reportMemoryShed)(SS, gS, Nx) : console.warn(`${OX} wasm memory: shed again (${SS}): shed ${HS}`, gS.wasmMemoryShed)
          }), (() => dS.addDistanceInUse()));
          const SS = (0, gg.M)(ZS);
          VS.setFootprint(new zb(yS, {
            storedChunks: () => JS.MgS(),
            gpuBytes: () => {
              var HS;
              return null !== (HS = null === SS || void 0 === SS ? void 0 : SS.FgS()) && void 0 !== HS ? HS : 0
            },
            jsHeapBytes: Wb
          }))
        }
        window.addEventListener("pagehide", (() => {
          Px === VS && (VS.refreshStats(), Tu(VS))
        })), window.addEventListener("pagehide", Zu), window.addEventListener("pagehide", Ju), !1;
        const [iS, WS] = (0, Jg.g)();
        sN = (0, dg.e)((SS => dS.setChunkAddDistance(SS.horizontal, SS.vertical)), {
          horizontal: iS,
          vertical: WS
        }), dS.setAmbientOcclusion(!0 !== Lg.g.getItem("disableAmbientOcclusion")), dS.setPoseLod(!0 !== Lg.g.getItem(XH.Q)), (0, Ub.q)("look") && (dS.setDebugLog(pH.R.Look, !0), dS.setDebugLog(pH.R.CameraSet, !0), (0, sb.e)("wasm", {
          look: () => dS.takeDebugLog(pH.R.Look),
          cameraSets: () => dS.takeDebugLog(pH.R.CameraSet)
        }));
        (0, Ub.q)("remesh") && (dS.setDebugLog(pH.R.Remesh, !0), zS = () => dS.takeDebugLog(pH.R.Remesh), Tb = new Rb((0, Bb.l)(), zS));
        var zS;
        const US = function(SS, HS, gS, tS) {
          const bS = new It,
            XS = SS => Lg.g.getItem(SS);
          bS.sync(XS, HS), (0, dH.O)();
          const xS = (0, qS.m)("customBindingsChanged", (() => {
            bS.sync(XS, HS)
          }));
          (0, yg.n)(HS);
          const NS = new Set,
            uS = (0, wS.w)((() => {
              var SS;
              NS.size > 0 && jt() && !0 === (null === (SS = (0, hS.h)()) || void 0 === SS ? void 0 : SS.localPlayerAlive()) && qS.k.cj("usedKeyboard")
            })),
            IS = Ht.d.heldSizer((() => (0, EH.o)(SS))),
            fS = St(SS, HS, {
              prevents: SS => bS.prevents(SS),
              keyPressed: SS => {
                bS.moves(SS) && (NS.add(SS), jt() && qS.k.cj("usedKeyboard"))
              },
              keyReleased: SS => {
                NS.delete(SS)
              },
              keysReleased: () => {
                NS.clear()
              },
              resized: () => {
                kt.m.measure(SS.getBoundingClientRect()), (0, gt.k)()
              },
              sizeCanvas: IS,
              watchRenderScale: HS => {
                const gS = (0, EH.q)(SS, HS),
                  tS = Ht.d.onRelease(HS);
                return () => {
                  gS(), tS()
                }
              },
              touchStarting: () => {
                kt.m.measure(SS.getBoundingClientRect())
              },
              viewShown: gS,
              touchUiShown: () => FS.b.get("isTouchScreen"),
              ctrlCombosAreGames: jt,
              inspect: (SS, HS, gS) => {
                bS.checks(HS, gS) && tS(SS)
              },
              canLock: () => Rg(SS)
            }),
            kS = (0, ug.b)(HS);
          return () => {
            xS(), uS(), (0, yg.n)(null), kS(), fS()
          }
        }(GS, ((SS, HS, gS, tS, bS) => {
          ou(dS, (() => {
            dS.rings.input.writeRecord(SS, HS, gS, tS, bS)
          })), !Tx && (0, Qt.g)(SS, bS) && (0, Qt.e)((() => {
            gx !== dS || bq || dS.isStopped || !yu() || Ou(dS, !1, "budget", !1)
          }))
        }), (() => Sq), (SS => {
          var HS;
          null === (HS = Zx) || void 0 === HS || HS.onEvent(SS)
        }));
        if (dS.isStopped) return US(), null;
        jx = US;
        const pS = () => !dS.isStopped && !gq;
        if (dS.isStopped) return null;
        (0, NH.Y)((() => {
          "call" === (0, NH.t)() && dS.crash(tg.s, (0, NH.r)())
        }));
        const sS = (0, tg.R)(dS.rings.worker, (() => {
          Ou(dS, !1, document.hidden ? "all" : "budget")
        }));
        Gx = function(SS, HS) {
          return lu().then((SS => {
            let {
              prefetchWorldgenWorker: HS
            } = SS;
            HS()
          }), (() => {})), new eb({
            module: (0, NH.E)(),
            decodeSettings: SS => {
              const HS = (0, hS.q)();
              if (null === HS) throw new Error("no game code to decode the world-gen seed with");
              return HS.decodeMapSettings(SS)
            },
            loadWorker: mu,
            onMapWithoutWorldgen: () => {
              eu((SS => {
                let {
                  stopWorldgenWorkerPrefetch: HS
                } = SS;
                HS()
              }))
            },
            onLoadFailed: SS => {
              (0, wg.reportWorldgenLoadFailure)(SS, Nx)
            },
            onWorkerLost: SS => {
              (0, wg.reportWorkerLost)(tg.G, SS, Nx)
            },
            onStartTimeout: SS => {
              (0, wg.reportWorkerStartTimeout)(tg.G, SS, Nx)
            },
            onGaveUp: SS => {
              (0, wg.reportWorldgenGaveUp)(SS, Nx)
            },
            onMemoryStats: SS => {
              var HS;
              null === (HS = Px) || void 0 === HS || HS.noteWorldgen(SS)
            },
            onMemoryGone: () => {
              var SS;
              null === (SS = Px) || void 0 === SS || SS.worldgenGone()
            },
            write: (gS, tS, bS, XS, xS) => {
              ou(SS, (() => {
                SS.rings.worker.writeWorkerRecord(gS, tS, bS, 0, XS, xS) || SS.crash(tg.G, `a world-gen record of kind ${tS} did not fit the worker-in ring`)
              })), HS()
            }
          })
        }(dS, sS), nx = function(SS, HS) {
          return new Mt({
            module: (0, NH.E)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: SS
              }, HS] = await Promise.all([gS.e(40).then((() => gS(51061))), Promise.resolve().then((() => gS(104))).then((SS => {
                let {
                  isMobile: HS
                } = SS;
                return HS()
              }), (() => !1))]);
              return {
                create: SS,
                count: (0, wH.b)(navigator.hardwareConcurrency, HS),
                maxKeptLightStates: HS ? 1 : void 0
              }
            },
            write: (gS, tS, bS, XS, xS, NS) => {
              (0, gt.g)(), ou(SS, (() => {
                SS.rings.worker.writeWorkerRecord(gS, tS, bS, XS, xS, NS) || SS.crash(tg.l, `a meshing record of kind ${tS} did not fit the worker-in ring`)
              })), HS()
            },
            onWorkerLost: SS => {
              (0, wg.reportWorkerLost)(tg.l, SS, Nx)
            },
            onLightFault: (SS, HS) => {
              (0, wg.reportLightFault)(SS, HS, Nx)
            },
            onStartTimeout: SS => {
              (0, wg.reportWorkerStartTimeout)(tg.l, SS, Nx)
            },
            onMemoryStats: (SS, HS) => {
              var gS;
              null === (gS = Px) || void 0 === gS || gS.noteMeshWorker(SS, HS)
            },
            onMemoryGone: SS => {
              var HS;
              null === (HS = Px) || void 0 === HS || HS.meshWorkerGone(SS)
            },
            fail: (HS, gS) => {
              const tS = () => {
                SS.crash(tg.l, void 0 === gS ? HS : new Error(HS, {
                  cause: gS
                }))
              };
              void 0 !== gS ? gI({
                site: tg.l,
                error: gS
              }, tS) : tS()
            }
          })
        }(dS, sS), dq();
        const RS = (0, xb.m)(QH.clientSideServerUrls.staticUrl, {
            onTableFailed: SS => {
              gI({
                site: wg.MODEL_FEED_SITE,
                error: SS
              }, (() => {}), {
                stillWanted: pS
              })
            },
            packUrl: SS => {
              var HS, gS;
              return null !== (HS = null === (gS = uu()) || void 0 === gS ? void 0 : gS.modelUrl(SS)) && void 0 !== HS ? HS : null
            }
          }),
          TS = function(SS, HS, gS) {
            const tS = gS => {
              var tS, bS;
              return null !== (tS = null === (bS = HS()) || void 0 === bS ? void 0 : bS.drawnUrl(gS)) && void 0 !== tS ? tS : SS.url(gS)
            };
            return (0, bb.h)((0, ot.m)(tS), gS)
          }(RS, (() => Ox), uu),
          oS = new ot.g(TS, (SS => {
            console.warn(`${OX} image ${SS.key.kind}:${SS.key.index}:${SS.key.word} failed`, SS.error)
          }));
        Lx = oS, Yx = new Hb(dS, TS, ((SS, HS) => {
          void 0 === HS ? console.warn(`${OX} ${SS}`) : fu(SS, HS)
        }));
        const lS = new tb.k(RS, function(SS, HS) {
          let tS = !1,
            bS = null,
            XS = null;
          const xS = {
              onUnavailable: (gS, tS) => {
                XS ??= gI({
                  site: wg.MODEL_POOL_SITE,
                  error: gS,
                  urls: tS
                }, (() => {
                  (0, wg.reportModelPoolFailure)(gS, SS)
                }), {
                  stillWanted: HS
                })
              },
              onDecoderFailed: (gS, tS) => {
                const bS = () => {
                  (0, wg.reportDracoDecoderFailure)(gS, SS)
                };
                void 0 !== tS ? gI({
                  site: wg.MODEL_POOL_SITE,
                  error: gS,
                  urls: tS
                }, bS, {
                  stillWanted: HS
                }) : bS()
              },
              onWorkerLost: HS => {
                (0, wg.reportWorkerLost)(wg.MODEL_POOL_SITE, HS, SS)
              },
              onModuleRetry: (HS, gS) => {
                (0, wg.reportModelsModuleRetry)(HS, gS, SS)
              }
            },
            NS = gS.e(42).then((() => gS(51070))).then((SS => {
              let {
                pageModelPool: HS
              } = SS;
              if (tS) return null;
              const gS = HS(xS);
              return bS = gS.unlisten, dx = gS.pool, dq(), gS.pool
            }), (SS => (tS || xS.onUnavailable(SS, void 0), null)));
          return cx = () => {
            var SS;
            tS = !0, null === (SS = bS) || void 0 === SS || SS(), dx = null
          }, (SS, HS) => NS.then((gS => {
            var tS;
            return null !== (tS = null === gS || void 0 === gS ? void 0 : gS.build(SS, HS)) && void 0 !== tS ? tS : (0, Nb.m)(SS, "the model workers did not load")
          })).then((SS => null !== XS && (0, Nb.g)(SS) ? XS.then((() => SS)) : SS))
        }(OS, pS), (SS => {
          SS.startup ? (zu(), gI({
            site: wg.MODEL_FEED_SITE,
            error: SS.error,
            urls: "" === SS.url ? void 0 : [SS.url]
          }, (() => {
            (0, wg.reportModelFailure)(SS, OS)
          }))) : (0, wg.reportModelFailure)(SS, OS)
        }), {
          onWritten: (SS, HS) => {
            oS.glbWritten(SS, HS)
          },
          onTaken: (SS, HS) => {
            oS.glbTaken(SS, HS)
          },
          onPackFileFailed: (SS, HS) => {
            console.warn(`${OX} the texture pack's model file ${SS} failed: the shipped one loads`, HS)
          }
        });
        Ox = lS;
        const mS = new et.e(dS);
        Xx = mS, mS.swap((SS => {
          const HS = () => {
            (0, wg.reportTerrainTextureFailure)(SS, OS)
          };
          if (BN) return void HS();
          const gS = () => !BN,
            tS = null === SS.url ? void 0 : [SS.url];
          gI({
            site: tg.D,
            error: SS.error,
            urls: tS
          }, HS, {
            stillWanted: gS
          })
        })).then((SS => {
          null !== SS && (SS || dS.isStopped || console.warn(`${OX} the core refused the terrain textures: terrain draws untextured`), zx(dS))
        }));
        const eS = new zH(dS, ((SS, HS) => {
          console.warn(`${OX} ${SS}`, ...void 0 === HS ? [] : [HS])
        }));
        eS.feed(), null !== kS && function(SS, HS, tS, bS, XS, xS) {
          let NS = null,
            uS = null,
            IS = !1;
          const fS = {
            textures: null,
            stop: () => {
              var SS, HS;
              IS = !0, null === (SS = uS) || void 0 === SS || SS(), null === (HS = NS) || void 0 === HS || HS(), Xb.b.setSettled(null), null !== qx && kq.clear(qx)
            }
          };
          bx = fS, uS = ku().follow((uS => {
            null !== uS && Promise.all([gS.e(201), gS.e(45)]).then((() => gS(51025))).then((gS => {
              let {
                PackTextures: kS
              } = gS;
              if (IS || SS.isStopped) return;
              const aS = new kS({
                feed: uS,
                terrain: HS,
                backend: tS,
                stopped: () => SS.isStopped,
                landed: () => {
                  zx(SS)
                },
                packSwapped: () => {
                  (0, bb.f)(bS), xS.feed((() => async function(SS) {
                    const HS = null === SS ? null : await SS.averageColours;
                    return null === HS ? UH() : WH(HS)
                  }(aS.assets))), (0, gb.h)(aS.files()), XS.refresh().then((SS => {
                    null !== SS && console.info(`${OX} texture pack models: ${SS.resent} of ${SS.delivered} files written again, ${SS.refetched} refetched`)
                  }))
                },
                settled: (SS, HS, gS) => {
                  var tS;
                  (Xb.b.setSettled({
                    state: SS,
                    files: HS
                  }), function(SS, HS, gS) {
                    const tS = null === SS.gameSource && (0, hg.g)(SS.pack);
                    if (null === HS) return;
                    const bS = (0, Dg.k)(HS.error),
                      XS = tS ? "settings" : HS.source;
                    qS.k.cj(Dg.c, {
                      failure: bS,
                      source: XS,
                      pack: Zg(SS)
                    }), (0, wg.reportTexturePackKeptOut)(XS, bS, HS.error, gS)
                  }(SS, gS, Nx), null === gS) && function(SS) {
                    const HS = qx;
                    null !== HS && kq.apply(HS, SS).then((HS => {
                      HS && SS && console.info(`${OX} the texture pack's animations are in (${Object.keys(SS).length} files)`)
                    }))
                  }(null === (tS = SS.pack) || void 0 === tS ? void 0 : tS.animations)
                },
                settling: () => {
                  Xb.b.setSettled(null)
                },
                warn: fu,
                maxTextureSize: () => Promise.resolve((0, gg._)(document.createElement("canvas")))
              });
              fS.textures = aS, NS = aS.start()
            }), (SS => {
              console.warn(`${OX} the texture pack's terrain didn't load: the built atlas stays`, SS)
            }))
          }))
        }(dS, mS, kS, oS, lS, eS);
        const rS = () => {
            dS.setTextureLayers("")
          },
          SH = SS => {
            (PH ??= gS.e(53).then((() => gS(51075))).then((SS => {
              let {
                TEXTURE_NAMES: HS
              } = SS;
              return HS
            }), (SS => {
              throw PH = null, SS
            })), PH).then((SS => {
              dS.setTextureLayers(SS) || dS.isStopped || (console.warn(`${OX} the core refused the texture names: textured Boxes draw textureNotFound`), rS())
            }), (HS => {
              if (dS.isStopped) return;
              const [gS, ...tS] = SS;
              void 0 === gS ? gI({
                site: wg.TEXTURE_NAMES_SITE,
                error: HS
              }, (() => {
                console.warn(`${OX} the texture names didn't load, so textured Boxes draw textureNotFound`, HS), rS()
              }), {
                stillWanted: pS
              }) : setTimeout((() => {
                SH(tS)
              }), gS)
            }))
          };
        if (SH(FX), null !== kS && !await async function(SS, HS, gS, tS, XS, xS) {
            var NS;
            const qS = (0, gg.M)(gS);
            if (null === qS) return SS.crash(cX, new Error(`this ${tS} build has no openRenderer`)), !1;
            let uS;
            vN = qS;
            try {
              var IS, fS, kS, aS;
              const bS = null !== (IS = null === (fS = Sx) || void 0 === fS ? void 0 : fS.pagePreviews()) && void 0 !== IS ? IS : null,
                NS = null !== (kS = null === (aS = Sx) || void 0 === aS ? void 0 : aS.previewModule(gS)) && void 0 !== kS ? kS : null;
              if (null === bS || null === NS) {
                null === bS || void 0 === bS || bS.endSession(!1), uS = (0, EH.e)().sampleCount, await (0, gg.f)(HS, qS, xS, Nu, uS, await XS);
                const SS = (0, gg.l)(gS);
                null === SS && console.warn(`${OX} this ${tS} build has no image registry: sky and model images won't show`), (0, mt.h)(SS)
              } else {
                (0, Kb.c)() && await (0, MS.l)();
                const gS = (0, Kb.J)();
                if (null !== gS) {
                  const HS = (0, gg.W)(qS);
                  return SS.crash(wg.RENDER_RELOAD_SITE, new Error(`${gS}${void 0===HS?"":` (${HS.message})`}`)), !1
                }
                uS = await bS.bindSession(NS, HS, (async SS => (0, gg.w)(qS, cX, xS, SS, Nu, await XS)))
              }
            } catch (bS) {
              return SS.crash(cX, bS), !1
            }(function(SS, HS) {
              const gS = SS,
                {
                  requestCapture: tS,
                  takeCapture: bS
                } = gS;
              if ("function" !== typeof tS || "function" !== typeof bS) return;
              const XS = {
                request() {
                  tS.call(gS, HS)
                },
                take() {
                  var SS;
                  return null !== (SS = bS.call(gS)) && void 0 !== SS ? SS : null
                }
              };
              window[wb] = XS
            })(HS, uS), iN = uS, dN = !0;
            const KS = performance.now();
            return cN.boundAtMs = null !== (NS = (0, Kb.M)()) && void 0 !== NS ? NS : KS, cN.indirectHangs = (0, Kb.A)(), cN.restoresSkipped = (0, Kb.N)(), console.info(`${OX} ${tS} renderer bound at ${Math.round(KS)} ms`), !SS.isStopped
          }(dS, JS, ZS, kS, KS, GS)) return null;
        if (null !== kS) {
          var HH, gH, tH;
          (0, IH.O)(kS);
          const SS = () => !dS.isStopped && Au();
          gS.e(194).then((() => gS(34113))).then((HS => {
            let {
              devTools: gS
            } = HS;
            dS.isStopped || gS.setHost(function(SS) {
              return {
                tools: ab,
                async downloadScene(HS, gS) {
                  let {
                    width: tS,
                    height: bS,
                    colouring: XS
                  } = gS;
                  "screenshot" === HS && null === XS ? await (0, Ib.g)(SS, tS, bS) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (HS, gS, tS) => (0, Ib.d)(SS, HS, gS, tS)
              }
            }(function(SS, HS) {
              return {
                canvas: SS,
                maxTextureSize: fb,
                drawing: HS,
                resize: (SS, HS, gS) => {
                  (0, yg.y)(pH.Gb.Resize, 0, SS / gS, HS / gS, (0, yg.j)(gS))
                },
                restoreSize: () => {
                  const HS = (0, EH.o)(SS);
                  null !== HS && (0, yg.y)(pH.Gb.Resize, 0, HS.cssWidth, HS.cssHeight, (0, yg.j)(HS.renderScale))
                },
                onFrameDrawn: SS => (kb.add(SS), () => {
                  kb.delete(SS)
                })
              }
            }(GS, SS)))
          }), (SS => {
            console.warn(`${OX} the developer tools didn't load: no captures this session`, SS)
          }));
          const HS = "webgpu" === kS && null !== (HH = null === IS || void 0 === IS || null === (gH = IS.adapter) || void 0 === gH ? void 0 : gH.vendor) && void 0 !== HH ? HH : null;
          WN = {
            backend: kS,
            canvas: GS,
            fallbackReason: null !== (tH = null === IS || void 0 === IS ? void 0 : IS.reason) && void 0 !== tH ? tH : null,
            adapterVendor: HS
          }, nu();
          try {
            (0, gt.o)(kS, GS, HS)
          } catch (bS) {
            (0, gt.r)(), console.error(`${OX} the quality steps didn't start`, bS)
          }
        }
        const {
          storagePullBreaks: bH,
          splitPassBreaks: xH
        } = await KS;
        xH && console.warn(`${OX} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const kH = (0, BS.e)(IS, (0, OH.m)());
        if ((0, Ub.q)("webgpuloss")) {
          var CH, nH;
          const SS = {
            backend: kS,
            reason: null !== (CH = null === IS || void 0 === IS ? void 0 : IS.reason) && void 0 !== CH ? CH : null,
            source: null !== (nH = null === IS || void 0 === IS ? void 0 : IS.source) && void 0 !== nH ? nH : null,
            storagePullBreaks: bH,
            noWebGpu: kH.messageKey
          };
          (0, pb.c)((HS => {
            HS.noteWasmPick(SS)
          }))
        }
        const DH = "webgpu" === kS;
        if (yx = (0, BS.h)(DH ? dS : null, DH && null !== (NS = null === (uS = Sx) || void 0 === uS ? void 0 : uS.pagePreviews().bK) && void 0 !== NS ? NS : null, kH, fu), bq) return null;
        if (VS.reserveAtJoin((0, Rt.l)(null !== ES && void 0 !== ES ? ES : Cg.j)), dS.isStopped) return null;
        const hH = SS => {
          if (Bx = performance.now(), Mx = !1, null !== zN) try {
            zN.animationFrame(SS)
          } catch (bS) {
            Du(bS)
          }
          if (function(SS, HS) {
              return HS && !bq && !Tx && yu() && Au() && SS.framePaces(performance.now())
            }(dS, Sq)) {
            if (dS.writePendingInput(), (0, wS.f)(SS, du), Pu(!1, SS), null !== zN) try {
              zN.framePaced()
            } catch (bS) {
              Du(bS)
            }
            requestAnimationFrame(hH)
          } else Ou(dS, Sq, "budget") && ((0, cH.h)(dS.lastFrameKind) && Au() && (0, wS.f)(SS, du), Pu(Sq && mN, SS), eN.frame(dS.lastFrameKind, Sq && Au(), SS), (0, cH.c)(dS.lastFrameKind) && OH.F.drew(), su(dS), VS.afterFrame(), requestAnimationFrame(hH))
        };
        requestAnimationFrame(hH);
        return function(SS) {
          if (SS.has("inputLog") && (0, ft.h)((SS => {
              let {
                action: HS,
                down: gS,
                press: tS
              } = SS;
              console.info(`${Kt} input ${HS} ${gS?"down":"up"} press ${tS} at ${performance.now().toFixed(1)}`)
            })), SS.has("inputDump")) {
            const SS = [];
            Gt = SS, Object.assign(window, {
              bloxdInputDump: () => SS.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), hx = function(SS) {
          let HS = null;
          const gS = () => {
              null !== HS && (clearInterval(HS), HS = null)
            },
            tS = () => {
              document.hidden ? HS ??= setInterval((() => {
                SI(SS) || gS()
              }), MX) : gS()
            };
          return document.addEventListener("visibilitychange", tS), tS(), () => {
            gS(), document.removeEventListener("visibilitychange", tS)
          }
        }(dS), dS
      }(HS).then((SS => {
        var HS;
        (tS(Nx), fx(null !== SS), null !== SS && (db = performance.now()), ux(SS), null === SS) ? null === (HS = Sx) || void 0 === HS || HS.pagePreviews().endSession(null === (0, NH.t)()): Wx("booted")
      }), (SS => {
        tS(Nx), fx(!1), ux(null), Uu({
          site: vX,
          error: SS,
          header: null
        }, Nx)
      }))
    }

    function fq() {
      const SS = qx;
      null !== SS && Xq().then((HS => {
        let {
          pageBuiltInAnimationPack: gS
        } = HS;
        gS().provide(SS)
      }), (SS => {
        console.warn(`${OX} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, SS)
      }))
    }
    const kq = new class {
      constructor(SS) {
        this.deps = SS, this.latest = 0, this.Ku = null
      }
      apply(SS, HS) {
        return this.load(SS, HS, 0)
      }
      async load(SS, HS, gS) {
        var tS;
        const bS = ++this.latest,
          XS = this.deps.compiler;
        if (void 0 === HS || null === HS || "object" !== typeof HS || 0 === Object.keys(HS).length || null === XS) return this.drop(SS), !1;
        if ((null === (tS = this.Ku) || void 0 === tS ? void 0 : tS.module) === SS && (0, mH.Wd)(this.Ku.files, HS)) return !1;
        try {
          const [gS, tS] = await Promise.all([XS(), this.deps.builtIns()]);
          if (bS !== this.latest) return !1;
          const xS = await gS(HS, Hg, {
            builtIns: tS
          });
          if (bS !== this.latest) return !1;
          const NS = this.call(SS, xS);
          if (void 0 === NS) throw new Sg("the compiled animations didn't read against the built-in pack");
          return this.Ku = {
              module: SS,
              files: HS
            },
            function(SS) {
              for (let HS = 0; HS + 2 < SS.length; HS += 3) {
                ("error" === SS[HS] ? console.error : console.warn)(`Animation for the texture pack: ${SS[HS+1]}: ${SS[HS+2]}`)
              }
            }(NS), !0
        } catch (NS) {
          var xS;
          if (bS !== this.latest) return !1;
          this.drop(SS), 0 === gS && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", NS);
          const tS = (null !== (xS = this.deps.retryAfterMs) && void 0 !== xS ? xS : rH)[gS];
          return void 0 === tS || NS instanceof Sg || (0, eH.i)(SS) || setTimeout((() => {
            bS === this.latest && this.load(SS, HS, gS + 1)
          }), tS), !1
        }
      }
      call(SS, HS) {
        try {
          return SS.pgS(HS)
        } catch (gS) {
          throw (0, eH.k)(SS, gS), gS
        }
      }
      clear(SS) {
        this.latest++, this.drop(SS)
      }
      drop(SS) {
        const HS = this.Ku;
        if (this.Ku = null, (null === HS || void 0 === HS ? void 0 : HS.module) === SS && !(0, eH.i)(SS)) try {
          this.call(SS, null)
        } catch {}
      }
    }({
      compiler: RH.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: SS
        } = await Xq();
        return SS().whenSet()
      },
      warn: fu
    });
    async function aq(SS, HS) {
      let tS = !1;
      await Kq({
        matchmake: async () => {
          const {
            guestJoinTarget: bS,
            guestJoinWithPack: XS
          } = await gS.e(272).then((() => gS(51007)));
          return tS ? bS(SS, HS, Ku()) : (tS = !0, XS(SS, HS, (HS => ju(SS, HS)), Ku))
        },
        onFailure: SS => {
          (0, wg.showJoinFailure)(SS, Nx)
        },
        rejoin: Eq,
        invalidateTrafficCode: Lq
      })
    }
    async function Kq(SS) {
      let {
        matchmake: HS,
        onFailure: gS,
        rejoin: bS,
        invalidateTrafficCode: XS,
        pageReady: xS,
        signal: NS
      } = SS;
      const qS = () => !0 === (null === NS || void 0 === NS ? void 0 : NS.aborted);
      let uS;
      const IS = Xb.b.rejoinHold();
      NN = null;
      const fS = (0, cg.$)("wasm", Ru);
      let kS = !1,
        aS = performance.now();
      try {
        if (!await kx) return {
          kind: "stopped"
        };
        if (qS()) return {
          kind: "Hg"
        };
        xq().catch((() => {}));
        let SS = await HS();
        var jS, GS;
        if (aS = performance.now(), !qS()) Fu(null !== (jS = null === (GS = SS.target.session) || void 0 === GS ? void 0 : GS.gameNameWithVariation) && void 0 !== jS ? jS : null);
        const gS = () => performance.now() - SS.matchedAt <= SS.freshMs,
          tS = Gq(SS.target).catch((() => {}));
        gS() && !qS() && (uS = new pt(SS.target, {
          signal: NS
        }));
        const XS = performance.now();
        if (null === await Ix) return {
          kind: "stopped"
        };
        var CS, nS;
        if (function(SS) {
            var HS, gS;
            if (hb.b.markGameEngineConstructed(), cb) return;
            cb = !0;
            const tS = Math.max(SS, null !== (HS = Jb) && void 0 !== HS ? HS : SS);
            (0, Zb.l)("ready", Math.max(0, (null !== (gS = Ob) && void 0 !== gS ? gS : tS) - tS) / 1e3)
          }(XS), !qS())
          if (null !== Ob && null !== db ? ((0, KS.n)("wasm_loaded", Ob), (0, KS.n)("wasm_core_ready", db)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), SS.target.session && (0, lb.e)(SS.target.session.gameNameWithVariation)) null === (CS = Gx) || void 0 === CS || CS.prestart();
        if (await tS, !gS() && !qS()) null === (nS = uS) || void 0 === nS || nS.rematched(), SS = await HS(), aS = performance.now();
        if (qS()) return {
          kind: "Hg"
        };
        const IS = await async function(SS) {
          var HS, gS, tS;
          let {
            signal: bS,
            rejoin: XS = null,
            early: xS,
            pageReady: NS
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== bS && void 0 !== bS && bS.aborted) throw new DOMException("the join was left", "AbortError");
          const qS = (uS = CN, IS = performance.now(), null !== uS && IS - uS < dt);
          var uS, IS;
          CN = null;
          const fS = new AbortController,
            kS = null !== (HS = null === (gS = SS.session) || void 0 === gS ? void 0 : gS.gameNameWithVariation) && void 0 !== HS ? HS : null;
          Fu(kS), Pq({
            controller: fS,
            game: kS
          }), nN = null, null === (tS = DN) || void 0 === tS || tS.abort(), DN = null, hN = !1, ZN = null, JN.clear();
          const aS = () => {
            (0, DH.f)(fS, (0, DH.c)(bS))
          };
          null === bS || void 0 === bS || bS.addEventListener("abort", aS, {
            once: !0
          });
          try {
            var jS, GS, CS;
            const HS = await Ix;
            if (null === HS || HS.isStopped || bq) throw new Error("no core is running to join a game with");
            if (SS.session && null !== yx) {
              const HS = await Cq(yx.join(SS.session.gameNameWithVariation), fS.signal);
              if ((0, Ub.q)("webgpuloss")) {
                const gS = SS.session.gameNameWithVariation,
                  tS = yx.couldntRunInJoinedGame();
                (0, pb.c)((SS => SS.noteWasmJoin(gS, HS, tS)))
              }
              if (null !== HS) throw new BS.b(HS)
            }
            const [, , , {
              joinRoom: gS
            }] = await Cq(Promise.all([(0, hS.i)(HS), Gq(SS), null === NS || void 0 === NS ? void 0 : NS(), xq()]), fS.signal), tS = SS.session, bS = tS ? {
              ...yq,
              attachSocket: HS => {
                const gS = sq(HS, SS.endpoint);
                var bS;
                null !== gS && (IN = {
                  conn: gS,
                  info: tS
                }, null === (bS = fN) || void 0 === bS || bS(tS.playerDbId));
                return gS
              }
            } : yq, uS = await gS(bS, SS, {
              signal: fS.signal,
              early: xS
            }).catch((SS => {
              throw function(SS) {
                if (!(SS instanceof AS.d)) return SS;
                if ("roomError" === SS.stage && null !== ZN) return jq(new AS.d(SS.message, SS.stage, SS.code, ZN), SS);
                const HS = "closed" === SS.stage && null !== PN ? JN.get(PN.conn) : void 0;
                return void 0 === HS ? SS : jq(new AS.d(SS.message, SS.stage, HS.code, null, SS.socketOpened), SS)
              }(SS)
            }));
            if (xN !== fS) throw uS.leave(), new DOMException("the join was left", "AbortError");
            Dq(uS), null === (jS = nx) || void 0 === jS || jS.newGame();
            const IS = function(SS) {
              var HS, gS;
              const {
                session: tS
              } = SS, bS = void 0 === tS ? SS.joinOptions.lobbyName : tS.lobbyName;
              return {
                endpoint: SS.endpoint,
                game: null !== (HS = null === tS || void 0 === tS ? void 0 : tS.gameNameWithVariation) && void 0 !== HS ? HS : SS.roomName,
                lobby: String(null !== bS && void 0 !== bS ? bS : null),
                postCookies: null !== (gS = SS.postCookies) && void 0 !== gS ? gS : null
              }
            }(SS);
            XN.set(uS, IS), it(IS);
            const kS = performance.now(),
              aS = {
                conn: uS.conn,
                rejoin: XS,
                game: null !== (GS = null === (CS = SS.session) || void 0 === CS ? void 0 : CS.gameNameWithVariation) && void 0 !== GS ? GS : "",
                joinedAt: kS,
                rejoinedAt: qS ? kS : null,
                overflow: null
              };
            kN = aS,
              function(SS, HS) {
                mq();
                const gS = {
                  endpoint: HS,
                  roomId: SS.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Kg({
                    reconnect: (SS, HS, tS) => async function(SS, HS, gS, tS) {
                      const {
                        roomId: bS,
                        roomToken: XS
                      } = rq(SS, HS), xS = gx;
                      if (null === xS || xS.isStopped || bq) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: NS
                      } = await Cq(xq(), gS), qS = {
                        ...yq,
                        attachSocket: HS => aN !== SS || 0 === SS.heldConn ? (HS.close(), null) : sq(HS, SS.endpoint, !0)
                      };
                      return NS(qS, SS.endpoint, bS, XS, {
                        signal: gS,
                        onAttached: tS
                      })
                    }(gS, SS, HS, tS),
                    releaseSeat: SS => {
                      !async function(SS, HS) {
                        const {
                          roomId: gS,
                          roomToken: tS
                        } = rq(SS, HS);
                        try {
                          const {
                            leaveHeldSeat: HS
                          } = await xq();
                          await HS(SS.endpoint, gS, tS)
                        } catch (bS) {
                          console.warn(`${OX} the held seat of a game left while it reconnected couldn't be released`, bS)
                        }
                      }(gS, SS)
                    },
                    isLive: () => aN === gS && null !== kN && !bq,
                    uE: SS => {
                      GN = SS, lq()
                    },
                    onReconnected: SS => {
                      ! function(SS) {
                        const HS = bN;
                        if (null !== HS && HS !== SS) {
                          const gS = XN.get(HS);
                          void 0 !== gS && XN.set(SS, gS), lN === HS && (lN = SS), HS.detach()
                        }
                        Dq(SS)
                      }(SS)
                    },
                    onGaveUp: (SS, HS) => {
                      ! function(SS, HS, gS) {
                        var tS, bS;
                        console.warn(`${OX} gave up reconnecting (${gS.reason}, ${gS.attempts} attempts)`, gS.lastError), (0, wg.reportReconnectGaveUp)(gS, Nx);
                        const XS = null !== (tS = null === (bS = kN) || void 0 === bS ? void 0 : bS.rejoin) && void 0 !== tS ? tS : null;
                        eq(SS, "gaveUp"), hq();
                        const xS = {
                          code: SS.dropCode,
                          name: null,
                          reason: UX,
                          canReconnect: !HS,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Aq(xS, HS ? null : XS, !1, {
                          reasonKey: pX,
                          canPlayAgain: HS
                        })
                      }(gS, SS, HS)
                    }
                  })
                };
                aN = gS, null !== KN && KN.conn === SS.conn && gS.resume.onInitialInfo(KN)
              }(uS, SS.endpoint), performance.mark(YX), (0, KS.n)("wasm_joined", kS), setTimeout((() => {
                bN === uS && (0, KS.h)()
              }), 0), fq(), console.info(`${OX} joined ${SS.roomName} as ${uS.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const nS = nN;
            nN = null, null !== nS && Oq(aS, nS.mask, nS.frames);
            const PS = JN.get(uS.conn);
            return JN.clear(), void 0 !== PS && (Dq(null), Yq(uS.conn, PS.code, PS.reason)), uS
          } finally {
            var nS;
            null === bS || void 0 === bS || bS.removeEventListener("abort", aS), xN === fS && Qq(bN, null), (null === (nS = PN) || void 0 === nS ? void 0 : nS.join) === fS && (PN = null)
          }
        }(SS.target, {
          signal: NS,
          rejoin: bS(SS.target),
          early: uS,
          pageReady: xS
        });
        return kS = !0, {
          kind: "joined",
          game: IS
        }
      } catch (QS) {
        if (QS instanceof DOMException && "AbortError" === QS.name || qS()) return {
          kind: "Hg"
        };
        if (bq) return {
          kind: "stopped"
        };
        if (hN && (hN = !1, await XS().catch((SS => {
            console.warn(`${OX} the cached traffic code could not be dropped`, SS)
          }))), null === await Ix) return {
          kind: "stopped"
        };
        if (QS instanceof BS.b) return gS(QS, performance.now() - aS), {
          kind: "failed",
          error: QS,
          reloading: !1
        };
        if (QS instanceof AS.d && QS.code === tS.c.wasmClientNotAllowed.code && rN) return xu("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: QS,
          reloading: !0
        };
        const SS = QS instanceof AS.d && QS.code === tS.c.outdatedVersion.code,
          HS = () => null === bN,
          bS = await gI({
            site: wg.JOIN_SITE,
            error: QS,
            outdated: SS
          }, (() => {
            gS(QS, performance.now() - aS)
          }), {
            stillWanted: HS
          });
        return {
          kind: "failed",
          error: QS,
          reloading: bS
        }
      } finally {
        var PS;
        kS || fS.end(), Xb.b.releaseHold(IS);
        const SS = null === (PS = uS) || void 0 === PS ? void 0 : PS.release();
        SS && (0, wg.reportUnusedSeat)(SS, Nx)
      }
    }

    function jq(SS, HS) {
      return SS.stack = HS.stack, SS
    }

    function Gq(SS) {
      return SS.session ? (0, hS.m)(xx, SS.session.gameNameWithVariation) : Promise.resolve()
    }

    function Cq(SS, HS) {
      return (0, DH.m)(HS), new Promise(((gS, tS) => {
        const bS = () => {
          tS((0, DH.c)(HS))
        };
        HS.addEventListener("abort", bS, {
          once: !0
        }), SS.then((SS => {
          HS.removeEventListener("abort", bS), gS(SS)
        }), (SS => {
          HS.removeEventListener("abort", bS), tS(SS)
        }))
      }))
    }

    function nq() {
      Pq(null)
    }

    function Pq(SS) {
      var HS, gS, tS;
      (function() {
        const SS = aN;
        null !== SS && eq(SS, "left")
      }(), null === Kx || Kx.left) || (Kx.left = !0, null === (tS = (0, hS.h)()) || void 0 === tS || tS.socketLeft(), (0, kS.r)({
        websocketUrl: null
      }));
      xN && (0, DH.f)(xN, new DOMException("the join was left", "AbortError")), hq(null !== SS), null === (HS = yx) || void 0 === HS || HS.leave();
      const bS = bN;
      null !== SS && Xb.b.setGame(SS.game), Qq(null, null !== (gS = null === SS || void 0 === SS ? void 0 : SS.controller) && void 0 !== gS ? gS : null), null === bS || void 0 === bS || bS.leave(), wq(0), (0, CH.d)()
    }

    function Qq(SS, HS) {
      bN = SS, xN = HS, null === bN && null === xN && Xb.b.setGame(void 0)
    }

    function Dq(SS) {
      Qq(SS, xN)
    }

    function wq(SS) {
      const HS = gx;
      return null !== TX && !bq && null !== HS && !HS.isStopped && (!!TX(AS.i, 0, (0, AS.r)(SS)) && (mx = !0, 0 === SS || Tx || Ou(HS, !1, "all"), !0))
    }

    function hq() {
      var SS, HS;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, cg.h)();
      const gS = null !== (SS = null === (HS = kN) || void 0 === HS ? void 0 : HS.overflow) && void 0 !== SS ? SS : null;
      kN = null, null !== gS && (0, wg.reportEventOverflow)(gS, Nx)
    }

    function Zq() {
      null !== bN || null !== xN ? nq() : Bq()
    }

    function Jq(SS, HS) {
      console.warn(`${OX} the event buffer refused records in ${HS} frames (categories ${SS})`), bq || (null !== kN ? Oq(kN, SS, HS) : null !== xN && function(SS, HS, gS) {
        var tS;
        const bS = function(SS, HS) {
          return null === SS ? "drop" : SS.activated ? "keep" : 0 !== (HS & sH.v.NetSession) ? "fail" : "drop"
        }((null === (tS = PN) || void 0 === tS ? void 0 : tS.join) === SS ? PN : null, HS);
        "keep" === bS ? nN = {
          mask: HS,
          frames: gS
        } : "fail" === bS && (0, DH.f)(SS, new Error("the join's net session was lost to an event overflow"))
      }(xN, SS, HS))
    }

    function Oq(SS, HS, gS) {
      const tS = SS.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      tS.frames += gS, tS.acks++, tS.mask |= HS;
      const bS = function(SS, HS, gS) {
        if (0 === (SS & sH.v.NetSession)) return "none";
        const tS = null !== HS.rejoinedAt && gS - HS.rejoinedAt < ct;
        return null === HS.rejoin || tS ? "fail" : "rejoin"
      }(HS, SS, performance.now());
      "none" !== bS && queueMicrotask((() => {
        if (kN !== SS) return;
        const HS = "rejoin" === bS && performance.now() - QN >= YS.d;
        tS.outcome = HS ? "rejoined" : "failed", Aq(function(SS, HS) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: SS,
            automaticallyReconnect: HS,
            requiresRefresh: !1
          }
        }(null !== SS.rejoin, HS), SS.rejoin, HS), nq(), HS && (CN = performance.now())
      }))
    }

    function dq() {
      rN && function(SS, HS) {
        let {
          mesh: gS,
          worldgen: tS,
          modelPool: bS
        } = SS;
        "landingPage" === HS ? (null === gS || void 0 === gS || gS.stopWorkers(), null === tS || void 0 === tS || tS.stopWorker(), null === bS || void 0 === bS || bS.stopWorkers()) : ((0, FS.g)(HS) || "inGame" === HS) && (null === gS || void 0 === gS || gS.restartWorkers(), null === bS || void 0 === bS || bS.startWorkers())
      }({
        mesh: nx,
        worldgen: Gx,
        modelPool: dx
      }, FS.b.get("gameState"))
    }

    function cq(SS) {
      Sq = SS, Hq && vq(Hq, SS)
    }

    function vq(SS, HS) {
      SS.style.visibility = HS ? "visible" : "hidden"
    }

    function Eq(SS) {
      var HS;
      const gS = SS.roomName,
        tS = null !== (HS = SS.joinOptions.lobbyName) && void 0 !== HS ? HS : null;
      return () => {
        aq(gS, tS)
      }
    }

    function Lq() {
      return gS.e(272).then((() => gS(51007))).then((SS => {
        let {
          invalidateGuestTrafficCode: HS
        } = SS;
        return HS()
      })).catch((SS => {
        console.warn(`${OX} the cached traffic code could not be dropped`, SS)
      }))
    }

    function Yq(SS, HS, gS) {
      var bS, XS;
      let xS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (bq) return;
      if ((null === (bS = kN) || void 0 === bS ? void 0 : bS.conn) !== SS) return void(null !== xN && JN.set(SS, {
        code: HS,
        reason: gS
      }));
      const {
        rejoin: NS,
        game: qS,
        joinedAt: uS
      } = kN;
      hq(), mq();
      const IS = (0, YS.k)(HS, (0, Et.g)(SS));
      if (console.info(`${OX} the game's connection closed with code ${HS} (${null!==(XS=IS.name)&&void 0!==XS?XS:"unrecognised"})`), HS === tS.c.gameOrPluginKick.code || xS || (0, wg.reportDisconnect)(IS, Nx, {
          closeReason: gS,
          sinceJoinedMs: performance.now() - uS,
          game: qS
        }), IS.requiresRefresh) {
        const SS = "outdatedVersion" === IS.name,
          gS = new Error(`the game's connection closed with code ${HS}`),
          tS = () => null === kN && null === xN;
        return void gI({
          site: wg.JOIN_SITE,
          error: gS,
          outdated: SS
        }, (() => {
          tS() && Aq(IS, null, !1)
        }), {
          stillWanted: tS
        })
      }
      const fS = IS.canReconnect ? NS : null,
        kS = null !== fS && IS.automaticallyReconnect && performance.now() - QN >= YS.d;
      Aq(IS, fS, kS)
    }

    function Aq(SS, HS, gS) {
      var tS;
      let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (gq) return;
      Xb.b.unwantedLeave(gS && null !== HS && 0 === wN.size), null === (tS = DN) || void 0 === tS || tS.abort();
      const XS = new AbortController;
      DN = XS;
      const xS = null === HS ? null : () => {
        XS.signal.aborted || (XS.abort(), HS())
      };
      if (gS && null !== xS) {
        QN = performance.now();
        const SS = setTimeout(xS, YS.c);
        XS.signal.addEventListener("abort", (() => {
          clearTimeout(SS)
        }))
      }
      const NS = {
        code: SS.code,
        name: SS.name,
        reason: SS.reason,
        reasonKey: bS.reasonKey,
        reconnect: xS,
        reconnecting: gS,
        requiresRefresh: SS.requiresRefresh,
        canPlayAgain: bS.canPlayAgain
      };
      if (wN.size > 0)
        for (const uS of [...wN]) try {
          uS(NS)
        } catch (qS) {
          console.error(`${OX} an unwanted-leave listener threw`, qS)
        } else Jt((0, wt.i)(SS, null !== xS, gS), XS.signal).then((HS => {
          HS && (null !== xS ? xS() : SS.requiresRefresh && (0, MS.k)())
        }))
    }
    const yq = {
      attachSocket: SS => sq(SS),
      onConnection: SS => (ON.add(SS), () => {
        ON.delete(SS)
      }),
      sendRaw: (SS, HS) => {
        const gS = Kx;
        return null !== gS && gS.conn === SS && Wu(gS, HS)
      },
      leaveRoom: wq,
      closeSocket: SS => {
        var HS;
        (null === (HS = Kx) || void 0 === HS ? void 0 : HS.conn) === SS && Bq()
      },
      flushNet: Mq
    };

    function Vq(SS) {
      var HS;
      let {
        aux: gS,
        payload: tS
      } = SS;
      null === (HS = gx) || void 0 === HS || HS.queueOptions(gS, tS)
    }

    function iq(SS, HS) {
      Vq(function(SS, HS) {
        return nb = SS ? {
          preventMovement: HS
        } : null, SS ? Pb(HS) : {
          aux: pH.pc.AdEnd,
          payload: Cb
        }
      }(SS, HS))
    }

    function Wq(SS) {
      var HS;
      HN = SS, null === (HS = gx) || void 0 === HS || HS.setUiPrefs(SS)
    }

    function zq(SS, HS) {
      xx.setMaster(SS, HS)
    }

    function Uq(SS) {
      var HS;
      gN = SS, null === (HS = gx) || void 0 === HS || HS.setEnvPrefs(SS)
    }

    function pq(SS) {
      var HS;
      tN = SS, null === (HS = gx) || void 0 === HS || HS.setLookPrefs(SS)
    }

    function sq(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(SS.url).origin,
        tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (SS.readyState === WebSocket.CLOSING || SS.readyState === WebSocket.CLOSED) return console.warn(`${OX} a closing or closed socket can't be attached`), null;
      const bS = gx;
      if (!bS || bS.isStopped) return console.warn(`${OX} no core is running to attach a socket to`), SS.close(), null;
      if (null === (0, hS.h)()) return console.warn(`${OX} the game has not started to attach a socket to`), SS.close(), null;
      if (Ux > pH.y) return console.warn(`${OX} this core has attached all the sockets it can; reload to play on`), SS.close(), null;
      if (mx && !Tx && (Ou(bS, !1, "all"), bS.isStopped || bq)) return SS.close(), null;
      Bq();
      const XS = Ux++;
      if (!tu(bS, "open", XS, tS ? pH.nc.Resume : 0)) return SS.close(), null;
      tS || GH.d.reset(), PN = null === xN ? null : {
        join: xN,
        conn: XS,
        activated: !1
      }, SS.binaryType = "arraybuffer";
      const xS = new jg.d((() => {
          ! function(SS, HS) {
            if (Kx !== HS || SS.isStopped || null === Tq(HS, WX)) return;
            HS.detach(), Kx = null, Rq(SS, HS, WX, "", !0), HS.ws.close()
          }(bS, NS)
        })),
        NS = {
          ws: SS,
          conn: XS,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: tS,
          token: null,
          detach: () => {
            xS.dispose(), SS.removeEventListener("message", qS), SS.removeEventListener("open", uS), SS.removeEventListener("close", IS)
          }
        },
        qS = SS => {
          if (SS.data instanceof ArrayBuffer) {
            var HS;
            const gS = new Uint8Array(SS.data);
            xS.heard(), NS.token = null !== (HS = (0, Gg.e)(gS)) && void 0 !== HS ? HS : NS.token,
              function(SS, HS, gS) {
                ou(SS, (() => {
                  SS.rings.net.writeFrame(HS, gS) || SS.crash(tg.p, `a socket frame of ${gS.byteLength} bytes did not fit the net-in ring`)
                }));
                const tS = SS.rings.net.cursor >= iX;
                !ru() && (tS || SS.netWrittenSinceFrame >= VX) && Ou(SS, !1, document.hidden ? "all" : "budget");
                HI(SS)
              }(bS, XS, gS)
          }
        },
        uS = () => {
          tS || (0, KS.n)("wasm_socket_open", performance.now());
          for (const HS of NS.pending.splice(0)) SS.send(HS);
          NS.pendingBytes = 0
        },
        IS = SS => {
          if (Kx === NS && bS.rings.net.cursor > 0 && Ou(bS, !1, "all"), Kx === NS) {
            if (NS.detach(), Kx = null, Rq(bS, NS, SS.code, SS.reason) || Fq(bS, NS)) return;
            tu(bS, "close", XS), oq(XS, NS.left), Yq(XS, SS.code, SS.reason)
          }
        };
      return SS.addEventListener("message", qS), SS.addEventListener("open", uS), SS.addEventListener("close", IS), Kx = NS, null === (HS = (0, hS.h)()) || void 0 === HS || HS.socketAttached(XS), (0, kS.r)({
        websocketUrl: gS
      }), XS
    }

    function Bq() {
      const SS = Kx;
      if (!SS) return;
      const HS = gx,
        gS = SS.resume;
      gS && (Mq(), Kx !== SS) || (Kx = null, SS.detach(), SS.ws.close(), null !== HS && (Fq(HS, SS) || gS && Rq(HS, SS, zX)) || (null !== HS && tu(HS, "close", SS.conn), oq(SS.conn, SS.left)))
    }

    function Mq() {
      const SS = gx;
      null !== SS && !SS.isStopped && !bq && !Tx && SS.rings.net.cursor > 0 && Ou(SS, !1, "all")
    }

    function Fq(SS, HS) {
      var gS;
      if (!HS.resume) return !1;
      const tS = aN;
      return null !== tS && null !== HS.token && "" !== HS.token && (tS.pendingHold = {
        conn: HS.conn,
        token: `${tS.roomId}:${HS.token}`
      }), tu(SS, "close", HS.conn), null === (gS = (0, hS.h)()) || void 0 === gS || gS.socketDetached(HS.conn), !0
    }

    function Rq(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const XS = Tq(HS, gS);
      if (null === XS) return !1;
      const {
        Ku: xS,
        token: NS,
        game: qS,
        joinedAt: uS
      } = XS;
      if (!tu(SS, "close", HS.conn, pH.A.Held)) return !0;
      console.warn(`${OX} the game's connection ${bS?"went silent":`dropped with code ${gS}`}, holding it`);
      const IS = {
        closeReason: tS,
        sinceJoinedMs: performance.now() - uS,
        game: qS
      };
      return (0, wg.reportDisconnect)((0, YS.k)(gS), Nx, IS, bS ? "silent" : void 0), xS.heldConn = HS.conn, xS.dropCode = gS, xS.pendingHold = {
        conn: HS.conn,
        token: `${xS.roomId}:${NS}`
      }, Tx || Ou(SS, !1, "all"), !0
    }

    function Tq(SS, HS) {
      const gS = aN,
        bS = kN,
        XS = SS.token;
      return null === gS || null === bS || bq || SS.left || bS.conn !== SS.conn || null === XS || "" === XS ? null : (0, tS.f)(HS) && gS.resume.canHoldSeat() ? {
        Ku: gS,
        token: XS,
        game: bS.game,
        joinedAt: bS.joinedAt
      } : null
    }

    function oq(SS, HS) {
      var gS;
      null === (gS = (0, hS.h)()) || void 0 === gS || gS.closeGame(SS), (0, Gb.e)().close(SS), HS || (0, kS.r)({
        websocketUrl: null
      })
    }

    function lq() {
      const SS = GN;
      if (null === SS) return;
      const HS = (0, hS.h)();
      bq || null === HS || HS.uE(SS) ? GN = null : performance.now() - ex.pause >= BX && (ex.pause = performance.now(), console.warn(`${OX} the cmd ring had no room for SetPaused(${SS}): written before the next frame`))
    }

    function mq() {
      const SS = aN;
      aN = null, null === SS || void 0 === SS || SS.resume.dispose()
    }

    function eq(SS, HS) {
      var gS, tS;
      const {
        heldConn: bS
      } = SS, XS = SS.resume.resumingConn;
      SS.heldConn = 0, SS.pendingHold = null, aN === SS && (aN = null), "left" === HS ? SS.resume.leave() : SS.resume.dispose(), 0 === jN || (null === (gS = Kx) || void 0 === gS ? void 0 : gS.conn) !== jN || "left" === HS && (null === (tS = bN) || void 0 === tS ? void 0 : tS.conn) === jN || gu(jN), "gaveUp" === HS && 0 !== XS && gu(XS), 0 !== bS && "refused" !== HS && (console.info(`${OX} the game held through its drop ${"left"===HS?"was left":"is given up"}`), null === gx || gx.isStopped || tu(gx, "close", bS), oq(bS, !1))
    }

    function rq(SS, HS) {
      const gS = HS.indexOf(":");
      return {
        roomId: gS < 0 ? SS.roomId : HS.slice(0, gS),
        roomToken: HS.slice(gS + 1)
      }
    }

    function Su(SS) {
      (0, bg.logClientMeasurement)("join_preload", SS, {
        client: "wasm"
      })
    }

    function Hu(SS) {
      var HS;
      KN = SS, SS.conn === jN && (jN = 0);
      const gS = aN;
      null !== gS && (null === (HS = kN) || void 0 === HS ? void 0 : HS.conn) === SS.conn && gS.resume.onInitialInfo(SS)
    }

    function gu(SS) {
      var HS;
      const gS = Kx;
      (null === gS || void 0 === gS ? void 0 : gS.conn) === SS && (gS.left = !0, null === (HS = (0, hS.h)()) || void 0 === HS || HS.socketLeft(), (0, kS.r)({
        websocketUrl: null
      }), wq(SS) ? setTimeout((() => {
        Kx === gS && Bq()
      }), AS.g) : Bq())
    }

    function tu(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        bS = !1;
      return ou(SS, (() => {
        const {
          net: XS
        } = SS.rings;
        bS = "open" === HS ? XS.writeOpen(gS, tS) : XS.writeClose(gS, tS), bS || SS.crash(tg.p, `a socket ${HS} did not fit the net-in ring`)
      })), bS
    }

    function bu(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Xu()) {
        const tS = "browser" === SS && (0, Kb.W)() ? "blockedAfterLoss" : "unsupported";
        return (0, wg.reportUnsupportedFallback)(SS, tS, HS, gS), void xu(`the wasm client can't run here (${HS}; ${tS})`, tS)
      }(0, wg.showUnsupported)(SS, "unsupported", HS, gS)
    }

    function Xu() {
      return rN && "wasm" !== (0, aH.g)(window.location.search)
    }

    function xu(SS, HS) {
      console.warn(`${OX} ${SS}: reloading on the JS client`), null !== HS && (0, aH.x)(HS), (0, aH.u)(null === HS ? "reloadOntoJs" : "decline");
      const gS = () => {
        (0, MS.h)(aH.E)
      };
      (0, wg.flushCrashReports)(MS.d).then(gS, gS)
    }

    function Nu(SS, HS, gS, tS) {
      return EN(SS, HS, gS, tS)
    }

    function qu() {
      null === AN || null === gx || gx.isStopped || bq || null !== vx || null === TX || (vx = AN(TX, fu, ku().follow))
    }

    function uu() {
      var SS, HS, gS;
      return null !== (SS = null === (HS = bx) || void 0 === HS || null === (gS = HS.textures) || void 0 === gS ? void 0 : gS.files()) && void 0 !== SS ? SS : null
    }

    function Iu(SS) {
      ku().follow((HS => {
        null !== HS && Promise.all([Promise.all([gS.e(201), gS.e(45)]).then((() => gS(51043))), (0, Kb.P)()]).then((SS => {
          let [{
            followPagePackFiles: gS
          }, tS] = SS;
          const bS = null === tS || (0, gg.m)(tS) ? "webgl" : tS.backend;
          gS(HS, bb.d, bS, (SS => {
            bb.d.setPageFiles(SS)
          }), fu)
        }), (HS => {
          console.warn(`${OX} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, HS), SS()
        }))
      }))
    }

    function fu(SS, HS) {
      console.warn(`${OX} ${SS}`, HS)
    }

    function ku() {
      return tx ??= new Lb({
        load: SS => Promise.all([gS.e(201), gS.e(54)]).then((() => gS(51052))).then((HS => {
          let {
            startPageTexturePackFeed: gS
          } = HS;
          return gS(fu, SS)
        })),
        store: Lg.e,
        tK: SS => {
          Ix.then((() => {
            (0, wg.reportTexturePackFeedLoadFailure)(SS, Nx)
          }))
        }
      }), tx
    }
    const au = SS => ku().follow(SS);

    function Ku() {
      return ku().loaded()
    }
    const ju = function(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          bS = 0;
        return async function(XS, xS) {
          let NS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const qS = ++bS,
            uS = tS() + HS,
            IS = await
          function(SS, HS) {
            let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((tS => {
              const bS = setTimeout((() => {
                tS(null), SS.then((SS => {
                  null !== SS && (SS.joinedWithout(), gS(SS))
                }))
              }), HS);
              SS.then((SS => {
                clearTimeout(bS), tS(SS)
              }))
            }))
          }(SS(XS), HS, (SS => {
            qS === bS && NS() && xS(SS, tS() + HS).catch((SS => {
              gS("the texture pack step after the join failed", SS)
            }))
          }));
          return null === IS ? null : xS(IS, uS)
        }
      }((SS => (0, tH.m)(SS) ? ku().request() : ku().forJoin()), Eb.d, fu),
      Gu = function(SS, HS) {
        let gS = !1;
        return {
          setGamePackConfirm: SS => {
            gS = null !== SS, HS(SS)
          },
          packStep: (HS, tS, bS) => SS(HS, tS, (() => gS && bS()))
        }
      }(ju, (SS => {
        ku().setGamePackConfirm(SS)
      }));

    function Cu(SS) {
      Gu.setGamePackConfirm(SS)
    }

    function nu() {
      if (bq || null !== zN || null === yN || null === WN) return;
      const {
        backend: SS,
        canvas: HS,
        fallbackReason: gS,
        adapterVendor: tS
      } = WN, bS = yN;
      yN = null;
      try {
        zN = bS({
          backend: SS,
          canvas: HS,
          fallbackReason: gS,
          adapterVendor: tS,
          joinedGame: () => bq ? null : bN,
          inGame: Qu,
          shaderPackReach: () => {
            var SS, HS;
            return null !== (SS = null === (HS = yx) || void 0 === HS ? void 0 : HS.reachInJoinedGame()) && void 0 !== SS ? SS : null
          },
          Wj: () => Ex,
          msaa: () => iN > 1,
          writeCmd: (SS, HS, gS) => null !== TX && TX(SS, HS, gS),
          takeFailedMeshJobs: () => {
            var SS, HS;
            return null !== (SS = null === (HS = nx) || void 0 === HS ? void 0 : HS.takeFailedMeshJobs()) && void 0 !== SS ? SS : 0
          },
          readLoadCounts: SS => {
            var HS, gS;
            return null !== (HS = null === (gS = gx) || void 0 === gS ? void 0 : gS.readLoadCounts(SS)) && void 0 !== HS && HS
          },
          mainStalled: (SS, HS, gS) => {
            (0, wg.reportMainStall)(SS, HS, gS, Nx)
          }
        })
      } catch (XS) {
        console.error(`${OX} the frame telemetry didn't start`, XS)
      }
    }

    function Pu(SS, HS) {
      try {
        var gS, tS, bS;
        const XS = dN && null !== (gS = null === (tS = gx) || void 0 === tS || null === (bS = tS.lastHeader) || void 0 === bS ? void 0 : bS.renderPending) && void 0 !== gS ? gS : 0;
        (0, gt.f)(HS, SS, Qu() && !(null !== nb), XS)
      } catch (XS) {
        (0, gt.r)(), console.error(`${OX} the quality steps stopped`, XS)
      }
    }

    function Qu() {
      return null !== bN && lN === bN && !bq
    }

    function Du(SS) {
      const HS = zN;
      zN = null;
      try {
        null === HS || void 0 === HS || HS.stop()
      } catch {}
      console.error(`${OX} the frame telemetry threw: it stops`, SS)
    }

    function wu(SS) {
      var HS, gS, tS, bS;
      if ((0, Gb.e)().fire(SS), "message" === SS.type) {
        if (ox++, SS.Ju === pH.Xc.ERROR && null !== xN) {
          var XS;
          const {
            text: HS,
            dropsCache: gS
          } = (0, YS.m)((new TextDecoder).decode(SS.payload));
          hN ||= gS, (null === (XS = PN) || void 0 === XS ? void 0 : XS.conn) === SS.conn && (ZN = HS)
        } else if (SS.Ju === sH.kc.ResumeComplete) {
          var xS;
          null === (xS = aN) || void 0 === xS || xS.resume.onResumeComplete(SS.conn)
        }
        return
      }
      SS.phase === pH.E.Left ? lx = SS.conn : SS.phase === pH.E.Activated && (null === (HS = PN) || void 0 === HS ? void 0 : HS.conn) === SS.conn ? PN.activated = !0 : SS.phase === pH.E.Resumed ? function(SS) {
        var HS, gS;
        jN = SS;
        const tS = aN;
        if (null === tS || 0 === tS.heldConn || (null === (HS = Kx) || void 0 === HS ? void 0 : HS.conn) !== SS || !Kx.resume || null === kN) return;
        console.info(`${OX} the game resumed on conn ${SS}, waiting for its InitialInfo`);
        const bS = tS.heldConn;
        tS.heldConn = 0, Kx.resume = !1, kN.conn = SS, (null === (gS = IN) || void 0 === gS ? void 0 : gS.conn) === bS && (IN = {
          conn: SS,
          info: IN.info
        }), GH.d.apply({
          shopInfo: null,
          _shopVersion: bH.b
        })
      }(SS.conn) : SS.phase === pH.E.Held ? function(SS) {
        var HS;
        const gS = aN,
          tS = null !== (HS = null === gS || void 0 === gS ? void 0 : gS.pendingHold) && void 0 !== HS ? HS : null;
        if (null !== gS && null !== tS && tS.conn === SS) return gS.pendingHold = null, gS.heldConn = SS, jN = 0, console.warn(`${OX} the core holds the game, reconnecting`), void gS.resume.onDropped(tS.token);
        if (SS === jN) {
          jN = 0;
          const HS = gx;
          null === HS || HS.isStopped || (console.info(`${OX} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), tu(HS, "close", SS))
        }
      }(SS.conn) : SS.phase === pH.E.Closed && (null === (gS = aN) || void 0 === gS || null === (tS = gS.pendingHold) || void 0 === tS ? void 0 : tS.conn) === SS.conn && (aN.heldConn === SS.conn ? function(SS) {
        const HS = SS.heldConn,
          gS = SS.dropCode;
        eq(SS, "refused"), console.info(`${OX} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          oq(HS, !1), Yq(HS, gS, "", !0)
        }))
      }(aN) : aN.pendingHold = null);
      const NS = Object.keys(pH.E).find((HS => pH.E[HS] === SS.phase)),
        qS = 0 === SS.code ? "" : ` (code ${SS.code})`;
      console.info(`${OX} conn ${SS.conn}: ${null!==NS&&void 0!==NS?NS:SS.phase}${qS}, ${ox} raw messages so far`), (null === (bS = bN) || void 0 === bS ? void 0 : bS.conn) !== SS.conn || SS.phase !== pH.E.Left && SS.phase !== pH.E.Closed || Dq(null), uN !== SS.conn || SS.phase !== pH.E.Left && SS.phase !== pH.E.Closed || (uN = null, null === bN && null === xN && Xb.b.setGame(void 0));
      for (const IS of [...ON]) try {
        IS(SS.conn, SS.phase, SS.code)
      } catch (uS) {
        (0, BH.j)(uS, `${OX} a connection listener threw`)
      }
    }

    function hu() {
      (0, Kb.t)(), queueMicrotask((() => {
        try {
          zu()
        } catch (SS) {
          console.warn(`${OX} stopping before the reload threw`, SS)
        }(0, wg.flushCrashReports)(MS.d).then(MS.k, MS.k)
      }))
    }

    function Zu() {
      const SS = gx;
      null === SS || SS.isStopped || null === Kx || Tx || !SS.hasPendingCommands() || Ou(SS, !1, "budget")
    }

    function Ju(SS) {
      var HS;
      const gS = bN;
      SS.persisted || null === gS || (null === (HS = Kx) || void 0 === HS ? void 0 : HS.conn) !== gS.conn || Kx.left || gS.leave()
    }

    function Ou(SS, HS, tS) {
      let bS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const XS = Tx;
      Tx = !0;
      try {
        const XS = SS.rings.net.cursor >= iX;
        XS && "all" !== tS && !document.hidden && pu("backlog", `a shown tab's net-in is ${SS.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(SS, HS, tS, bS) {
          var XS, xS, NS, qS;
          if (bq) return !1;
          if (ou(SS, cu), bq || SS.isStopped) return !1;
          Vu() && Wx("modelsIn");
          lq(), px = performance.now(), lx = null, mx = !1, (0, wS.M)(), null === (XS = Zx) || void 0 === XS || XS.beforeFrame(), Ct(px, SS), (0, wS.D)(px, vu), Rx = !0;
          const uS = HS && yu();
          let IS;
          try {
            IS = SS.frame(px, uS, tS)
          } finally {
            Rx = !1
          }
          if (!IS) return !1;
          VN.observe(null !== (xS = null === (NS = SS.lastHeader) || void 0 === NS ? void 0 : NS.chunksCancelled) && void 0 !== xS ? xS : 0);
          const fS = SS.lastFrameKind,
            kS = (0, cH.c)(fS);
          (function(SS) {
            null !== Tb && Tb.afterFrame(performance.now(), SS)
          })(kS), null === (qS = UN) || void 0 === qS || qS.frame(SS, px, fS), HS && (mN = kS);
          kS && (0, JH.b)(px);
          if (null !== zN) try {
            zN.frameRan(SS, px, performance.now(), fS)
          } catch (jS) {
            Du(jS)
          }
          "drawn" === fS && Au() && function() {
            for (const SS of [...kb]) SS()
          }();
          SS.forEachNetOut(iu);
          const aS = Kx;
          null !== lx && (null === aS || void 0 === aS ? void 0 : aS.conn) === lx && Wu(aS, AS.j);
          Yu(SS),
            function(SS) {
              const HS = 0 !== (SS.headerWord(sH.H.LoadSteps) & sH.T.JoinPreload);
              HS !== qN && (qN = HS, (0, wg.setCrashAdPreload)(HS), (0, cg.T)())
            }(SS), HS && function(SS) {
              var HS, tS, bS;
              if (null === bN || !yu()) return;
              const XS = SS.headerWord(sH.H.LoadSteps);
              null === oN || lN === bN && !oN.frame(px, 0 !== (XS & sH.V.TerrainDrawn)) || (oN = null);
              if (0 === (XS & sH.T.PlayerBound)) return;
              const xS = SS.lastHeader,
                NS = !dN || 0 === (null === xS || void 0 === xS ? void 0 : xS.renderPending);
              !MN && NS && (MN = !0, performance.mark(yX));
              if (lN === bN) return;
              const qS = null !== (HS = null === xS || void 0 === xS ? void 0 : xS.firstView) && void 0 !== HS ? HS : pH.gb.NotYet;
              if (dN && qS === pH.gb.NotYet) return;
              if (BN && (!0 !== (null === (tS = (0, hS.h)()) || void 0 === tS ? void 0 : tS.isSessionLive) || !NS)) return;
              lN = bN;
              const uS = bN;
              if (setTimeout((() => {
                  bN === uS && (0, KS.l)()
                }), 0), null === (bS = yx) || void 0 === bS || bS.playable(), function() {
                  clearTimeout(ax), ax = setTimeout((() => {
                    Qu() && eu((SS => {
                      let {
                        prefetchWorldgenWorker: HS
                      } = SS;
                      HS()
                    }))
                  }), RX)
                }(), BN) return;
              BN = !0, performance.mark(AX), (0, Ub.q)("render") && Promise.all([gS.e(77), gS.e(48)]).then((() => gS(4803))).then((SS => {
                let {
                  renderDebugPlayable: HS
                } = SS;
                HS()
              }), (SS => {
                console.warn("The render debug topic didn't load", SS)
              }));
              const IS = Math.round(performance.now()),
                fS = SS.readViewQueuedPrograms();
              null !== fS && (0, KS.n)("wasm_view_links", IS, (0, xH.bb)(fS));
              if (dN && qS !== pH.gb.Drawn) {
                const HS = qS === pH.gb.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: gS
                  } = Eu(SS);
                if (console.warn(`${OX} playable at ${IS} ms on the first view's ${HS} backstop, ${gS}: it wasn't drawn whole in time`), (0, KS.n)("wasm_view_backstop", IS, `${HS}:${gS}`), "long" === HS) {
                  var kS, aS;
                  const HS = null !== (kS = null === (aS = kN) || void 0 === aS ? void 0 : aS.game) && void 0 !== kS ? kS : "";
                  oN = new Yg.e((() => {
                    const {
                      cause: gS,
                      census: tS
                    } = Eu(SS);
                    (0, wg.reportFirstViewNoTerrain)(HS, gS, tS, Nx), (0, kH.u)("noTerrain")
                  }))
                }
              } else console.info(`${OX} playable at ${IS} ms${dN?"":" (no renderer)"}`);
              setTimeout(YN, 0), (0, nH.c)().catch((SS => {
                console.error(`${OX} item sprites didn't load, so item particles show the missing texture`, SS)
              })), lt.d.warm()
            }(SS);
          (0, tg.N)(SS, {
            worldgen: Gx,
            mesh: nx
          }),
          function(SS) {
            SS.forEachEvent(Pt);
            for (const HS of nt) try {
              (0, ft.d)(HS)
            } catch (jS) {
              if ((0, BH.d)(jS)) {
                SS.crashOn(tg.j, jS);
                break
              }
              console.error(`${Kt} an input action listener threw`, jS)
            }
            nt.length = 0
          }(SS), bS && (0, dH.c)();
          return !SS.isStopped
        }(SS, HS, "all" === tS || XS, bS)
      } finally {
        Tx = XS, XS || (sx = performance.now())
      }
    }

    function du(SS) {
      console.error(`${OX} a frame-start listener threw`, SS)
    }

    function cu() {
      var SS, HS, gS, tS;
      null === (SS = Ox) || void 0 === SS || SS.drain(TX, oX), null === (HS = Lx) || void 0 === HS || HS.drain(TX), null === (gS = Yx) || void 0 === gS || gS.drain(performance.now()), LN(TX), null === (tS = vx) || void 0 === tS || tS.drain()
    }

    function vu(SS) {
      console.error(`${OX} a before-frame listener threw`, SS)
    }

    function Eu(SS) {
      const HS = (0, hS.h)(),
        gS = (0, hS.q)(),
        tS = null === HS || null === gS ? null : gS.readDrawCensus(HS.api);
      return {
        cause: (0, Yg.k)(SS.headerWord(sH.H.LoadSteps), tS),
        census: tS
      }
    }
    const Lu = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Yu(SS) {
      var HS;
      if (BN) return;
      if (null === RN && yu() && (RN = performance.now()), null === xN && null === bN) return;
      null === RN || TN || (TN = !0, (0, KS.n)("wasm_startup_loaded", RN));
      let gS = 0;
      null !== bN ? gS = -1 : !0 === (null === (HS = PN) || void 0 === HS ? void 0 : HS.activated) && (gS = ~sH.V.TerrainDrawn);
      const tS = SS.headerWord(sH.H.LoadSteps) & gS & ~FN;
      if (0 === tS) return;
      FN |= tS;
      const bS = performance.now();
      for (const [XS, xS] of Object.entries(Lu)) 0 !== (tS & sH.V[XS]) && (0, KS.n)(xS, bS)
    }

    function Au() {
      return dN && yu()
    }

    function yu() {
      return Ax && Vu()
    }

    function Vu() {
      return null === Ox || Ox.startupDone
    }

    function iu(SS, HS) {
      const gS = Kx;
      (null === gS || void 0 === gS ? void 0 : gS.conn) === SS ? Wu(gS, HS) : SN++
    }

    function Wu(SS, HS) {
      const {
        ws: gS
      } = SS;
      return gS.readyState === WebSocket.OPEN ? (gS.send(HS), !0) : gS.readyState === WebSocket.CONNECTING && SS.pendingBytes + HS.byteLength <= sX ? (SS.pending.push(HS.slice()), SS.pendingBytes += HS.byteLength, !0) : (SN++, !1)
    }

    function zu() {
      var SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS;
      bq = !0, eN.stop(), (0, sb.b)(), Tb = null, mq(), (0, wS.J)().unlockPointer(), (0, wS.H)(null), null === (SS = Jx) || void 0 === SS || SS(), Jx = null, null === (HS = (0, hS.q)()) || void 0 === HS || HS.followCursorAim(null), (0, dH.B)(), (0, hS.f)(), xx.stop(), null === (gS = pN) || void 0 === gS || gS(), pN = null, null === (tS = sN) || void 0 === tS || tS(), sN = null, null === (bS = zN) || void 0 === bS || bS.stop(), zN = null, (0, yg.n)(null), null === (XS = jx) || void 0 === XS || XS(), jx = null, null === (xS = Gx) || void 0 === xS || xS.stop(), Gx = null, null === (NS = nx) || void 0 === NS || NS.stop(), nx = null, null !== (qS = bx) && void 0 !== qS && null !== (uS = qS.textures) && void 0 !== uS && uS.assets && (0, gb.h)(null), null === (IS = bx) || void 0 === IS || IS.stop(), bx = null, Xx = null;
      const CS = Px;
      Px = null, CS && (CS.stop(), Tu(CS)), null === (fS = Lx) || void 0 === fS || fS.dispose(), Lx = null, null === (kS = Yx) || void 0 === kS || kS.dispose(), Yx = null, Ox = null, null === (aS = cx) || void 0 === aS || aS(), cx = null, null === (KS = hx) || void 0 === KS || KS(), hx = null, null !== Fx && (clearTimeout(Fx), Fx = null), null === (jS = Zx) || void 0 === jS || jS.stop(), Zx = null, nq(), Xb.b.release(), Bq();
      const nS = vx;
      vx = null;
      try {
        null === nS || void 0 === nS || nS.dispose()
      } catch (PS) {
        console.warn(`${OX} the sky's images didn't release`, PS)
      }(0, mt.h)(null), null === (GS = Sx) || void 0 === GS || GS.pagePreviews().endSession(null === (0, NH.t)())
    }

    function Uu(SS, HS) {
      var gS, tS;
      const bS = null !== (gS = null === (tS = Px) || void 0 === tS ? void 0 : tS.details()) && void 0 !== gS ? gS : {},
        XS = SS.site === cX || SS.site === vX || SS.site === wg.RENDER_RELOAD_SITE || SS.site === EX ? SS.error instanceof WebAssembly.RuntimeError || SS.error instanceof eH.c : !(0, gg.p)(SS.error) && (0, tg.J)(SS);
      XS && SS.error instanceof Error && (0, NH.W)(SS.error);
      const xS = XS || SS.site === tg.s ? (0, wg.readTrap)(SS.error) : null,
        NS = null !== xS && (0, FH.g)(xS.kind, xS.refusedBytes) ? xS.refusedBytes : 0,
        qS = (0, ng.o)(),
        uS = null === Qx ? (0, Rt.q)(function() {
          try {
            return (0, NH.B)().buffer.byteLength
          } catch {
            return 0
          }
        }(), NS, qS) : Qx.ceilingMayRefuse(NS, qS),
        IS = NS > 0 && !uS && Xu();
      var fS;
      if (IS && ((0, aH.x)("oom"), (0, aH.u)("decline"), tq = !0), zu(), (0, Kb.c)()) return console.warn(`${OX} the session stopped at ${SS.site} as the page reloads`, SS.error), void((0, gg.p)(SS.error) || (null === (fS = SS.header) || void 0 === fS ? void 0 : fS.lastError) === pH.K.CoreBusy || (0, wg.reportStoppedCore)(SS, HS, xS, {
        memoryDetails: bS,
        declined: IS
      }));
      (0, wg.showCrash)(SS, HS, xS, {
        memoryDetails: bS,
        declined: IS
      })
    }

    function pu(SS, HS) {
      const gS = performance.now();
      return !(gS - ex[SS] < BX) && (ex[SS] = gS, console.warn(`${OX} ${HS}`), !0)
    }

    function su(SS) {
      const {
        input: HS,
        net: gS,
        worker: tS
      } = SS.rings, bS = SS.optionsDropped, XS = HS.dropped + bS + gS.dropped + tS.dropped + SN;
      XS !== rx && pu("dropped", `${XS} records dropped so far (input ${HS.dropped}, options ${bS}, net ${gS.dropped}, worker ${tS.dropped}, net-out ${SN})`) && (rx = XS)
    }

    function Bu() {
      var SS, HS;
      const gS = (0, dg.b)();
      if (null === gS) return null;
      const tS = (0, Eg.q)(gS);
      return {
        ...tS,
        horizontal: Math.min(tS.horizontal, null !== (SS = null === (HS = Px) || void 0 === HS ? void 0 : HS.shedDistanceInUse()) && void 0 !== SS ? SS : 1 / 0)
      }
    }

    function Mu(SS) {
      var HS, gS;
      return {
        samples: dN ? iN : null,
        sunShadows: SS,
        renderDistance: null !== (HS = null === (gS = Bu()) || void 0 === gS ? void 0 : gS.horizontal) && void 0 !== HS ? HS : null
      }
    }

    function Fu(SS) {
      NN = SS, (0, cg.T)()
    }

    function Ru() {
      var SS, HS, gS;
      const tS = Bu();
      return {
        ...null === (SS = Px) || void 0 === SS ? void 0 : SS.pageKillSnapshot(),
        renderDistance: null !== (HS = null === tS || void 0 === tS ? void 0 : tS.horizontal) && void 0 !== HS ? HS : null,
        renderDistanceVertical: null !== (gS = null === tS || void 0 === tS ? void 0 : tS.vertical) && void 0 !== gS ? gS : null,
        chunkCap: Dx,
        budgetBasis: wx,
        renderBackend: (0, Kb.F)(),
        adPreload: qN,
        ...(0, vg.c)(NN)
      }
    }

    function Tu(SS) {
      console.info(`${OX} wasm memory at the session's end`, SS.details())
    }

    function ou(SS, HS) {
      if (!SS.isStopped) try {
        HS()
      } catch (gS) {
        SS.crash(tg.v, gS)
      }
    }

    function lu() {
      return Cx ??= gS.e(71).then((() => gS(51055))).catch((SS => {
        throw Cx = null, SS
      })), Cx
    }
    async function mu() {
      const {
        createWorldgenWorker: SS,
        worldgenWorkerReady: HS
      } = await lu();
      return await HS(), SS
    }

    function eu(SS) {
      var HS;
      null === (HS = Cx) || void 0 === HS || HS.then(SS, (() => {}))
    }

    function ru() {
      return performance.now() - Math.max(sx, Bx) >= MX
    }

    function SI(SS) {
      const HS = document.hidden || Mx ? "all" : "budget";
      Mx = !0;
      const gS = Ou(SS, !1, HS);
      var tS;
      gS && (su(SS), null === (tS = Px) || void 0 === tS || tS.afterFrame());
      return gS
    }

    function HI(SS) {
      SS.isStopped || 0 === SS.rings.net.cursor || ru() && !SI(SS) || SS.rings.net.cursor > 0 && performance.now() - Bx >= MX / 2 && function(SS) {
        Fx ??= setTimeout((() => {
          Fx = null, HI(SS)
        }), MX)
      }(SS)
    }

    function gI(SS, HS) {
      return async function(SS, HS, gS) {
        let {
          stop: tS,
          stillWanted: bS,
          beforeReload: XS
        } = gS;
        const xS = await (0, vt.k)(SS, {
          stillWanted: bS,
          beforeReload: async () => {
            tS(), await Promise.all([(0, wg.flushCrashReports)(MS.d), null === XS || void 0 === XS ? void 0 : XS()])
          },
          reload: MS.k
        });
        return xS || HS(), xS
      }(SS, HS, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: zu
      })
    }
    let tI = !1;

    function bI() {
      return tI = !0, async function(SS, HS, tS) {
        const {
          gamePackSource: bS
        } = await gS.e(271).then((() => gS(41075)));
        await Gu.packStep(SS, ((gS, tS) => gS.packForGame(SS, bS(HS), tS)), tS)
      }(...arguments)
    }

    function XI(SS) {
      ! function(SS, HS) {
        SS((SS => {
          null === SS || void 0 === SS || SS.subscribe((SS => {
            let {
              pack: gS,
              gameSource: tS
            } = SS;
            HS(null === tS || null === gS ? null : {
              pack: gS,
              source: "" === tS ? null : tS
            })
          }))
        }))
      }(au, SS)
    }
    let xI = !1,
      NI = null,
      qI = !1,
      uI = !1;

    function II() {
      var SS;
      xI || (xI = !0, Iq("play", sS), (0, kS.n)(new wI), NS.gameBridge.attach(LS), GI().catch((() => {})), (0, hS.t)((SS => {
        HH(SS.setTextHost)
      })), SS = aI, wN.add(SS), function(SS) {
        for (const HS of Vx) SS(HS);
        ix.add(SS)
      }((SS => {
        kI(fI[SS])
      })))
    }
    const fI = {
      booted: XS.g.INITIALISE_NOA,
      texturesIn: XS.g.REGISTRATION,
      modelsIn: XS.g.SETUP_LIFEFORMS
    };

    function kI(SS) {
      qS.k.cj("matchmakeAndPlayStepCompleted", {
        step: SS,
        totalSubSteps: 1
      })
    }

    function aI(SS) {
      if (!qI) return;
      const {
        gameNameWithVariation: HS,
        lobbyName: gS
      } = (0, kS.e)();
      if (SS.code === tS.c.serverUpdating.code) return (new wI).leaveLive(), void jI(HS, gS);
      qS.k.cj("unwantedLeftGame", {
        reason: KI(SS),
        requiresRefresh: SS.requiresRefresh,
        canReconnect: null !== SS.reconnect,
        automaticallyReconnect: SS.reconnecting,
        canPlayAgain: SS.canPlayAgain,
        gameNameWithVariation: HS,
        lobbyName: gS
      }), (new wI).leaveLive()
    }

    function KI(SS) {
      return null !== SS.reasonKey ? {
        translationKey: SS.reasonKey
      } : "gameOrPluginKick" === SS.name ? SS.reason : `You have disconnected from the server.\n${SS.reason}`
    }

    function jI(SS, HS) {
      var tS;
      tS = (0, uS.E)(SS, HS), Promise.resolve().then((() => gS(1608))).then((SS => {
        let {
          navigatePreserveSearch: HS
        } = SS;
        HS(tS)
      })).catch((SS => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", SS), (0, MS.e)(tS)
      }))
    }

    function GI() {
      return NI ??= Promise.all([gS.e(72), gS.e(75), gS.e(74), gS.e(73), gS.e(89), gS.e(86), gS.e(269), gS.e(189), gS.e(223), gS.e(247), gS.e(218), gS.e(46)]).then((() => gS(41033))).then((SS => {
        try {
          SS.attachPlayGameSources()
        } catch (HS) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", HS),
            function(SS) {
              Ix.then((HS => {
                null === HS || HS.isStopped || bq ? console.warn(`${OX} the play sources threw as they attached, after the client stopped`, SS) : Uu({
                  site: EX,
                  error: SS,
                  header: null
                }, Nx)
              }))
            }(HS), HS
        }
      }), (SS => {
        throw NI = null, new hS.c(SS)
      })), NI
    }
    async function CI(SS, HS) {
      II(), tI = !0, qI = !0;
      let gS = {
          place: SS.place,
          matchedAt: SS.matchedAt
        },
        xS = SS.place.gameNameWithVariation;
      const NS = (0, fS.g)();
      let qS = null;
      const uS = await Kq({
        matchmake: async () => {
          let HS = gS;
          if (gS = null, null === HS) {
            const gS = await SS.rematch();
            if (gS.isError()) throw qS = gS.asError().forward(), new Error(gS.asError().message);
            HS = {
              place: gS.getValue(),
              matchedAt: performance.now()
            }
          }
          xS = HS.place.gameNameWithVariation;
          return {
            target: await (0, VS.h)(SS.userContext, HS.place, Ku(), NS),
            matchedAt: HS.matchedAt,
            freshMs: VS.d
          }
        },
        pageReady: GI,
        onFailure: (SS, HS) => {
          null === qS && function(SS, HS) {
            (0, wg.reportPageJoinFailure)(SS, Nx, HS)
          }(SS, {
            sinceJoinStartMs: HS,
            game: xS
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => SS.userContext.invalidateTrafficCode(),
        signal: HS
      });
      switch (uS.kind) {
        case "joined":
          if (NS) {
            const {
              game: SS
            } = uS;
            (0, fS.r)((() => {
              SS.endJoinAd() && (0, KS.m)()
            }))
          }
          return uI || (uI = !0, (0, GS.c)()), qI ? (kI(XS.g.CONNECT_TO_GAME_SERVER), kI(XS.g.SHADER_PACK), function() {
            var SS, HS;
            return null !== (SS = null === (HS = yx) || void 0 === HS ? void 0 : HS.runsInJoinedGame()) && void 0 !== SS && SS
          }() && (0, jS.e)(SS.userContext, xS).catch((SS => {
            console.error("Failed to report the shader pack session", SS)
          })), function() {
            const SS = function() {
              var SS, HS;
              return null !== (SS = null === (HS = yx) || void 0 === HS ? void 0 : HS.couldntRunInJoinedGame()) && void 0 !== SS ? SS : null
            }();
            null !== SS && (0, jS.d)(SS)
          }(), bS.d.value(void 0)) : DI("The server ended the game as it joined");
        case "failed":
          if (!uS.reloading) {
            if (null !== qS) return qS;
            if ((uS.error instanceof AS.k || uS.error instanceof AS.d) && uS.error.code === tS.c.serverUpdating.code) {
              if (HS.aborted) return DI("Left the game while it loaded");
              const {
                gameNameWithVariation: SS,
                lobbyName: gS
              } = (0, kS.e)();
              return jI(SS, gS), DI("The server is updating")
            }
            return uS.error instanceof BS.b ? bS.d.errorWithCode(uS.error.messageKey, XS.g.SHADER_PACK, {
              severity: "medium"
            }) : bS.d.errorWithCode(function(SS) {
              if (SS instanceof AS.p || SS instanceof QS.e) return SS.message;
              if (nI(SS)) return (0, YS.l)(SS.code, SS.serverText);
              return YS.g
            }(uS.error), XS.g.CONNECT_TO_GAME_SERVER, {
              error: PI(uS.error) ? uS.error : void 0,
              severity: QI(uS.error),
              gameServerUnreachable: (0, yS.d)(uS.error),
              joinFailure: (0, yS.i)(uS.error),
              rematch: (0, nS.c)(uS.error),
              gameRefused: (0, PS.e)(uS.error)
            })
          }
          return DI("Reloading into the new build");
        case "stopped":
          return DI("The game client stopped, and shows why");
        case "Hg":
          return DI("Left the game while it loaded")
      }
    }

    function nI(SS) {
      return SS instanceof AS.k || SS instanceof AS.d && "attach" !== SS.stage
    }

    function PI(SS) {
      return !(SS instanceof AS.p) && !nI(SS) && void 0 === (0, yS.d)(SS)
    }

    function QI(SS) {
      return nI(SS) ? SS instanceof AS.d && (0, YS.k)(SS.code).requiresRefresh ? "medium" : "low" : PI(SS) || SS instanceof AS.p ? "medium" : "low"
    }

    function DI(SS) {
      return bS.d.errorWithCode(SS, XS.g.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Hg: !0
      })
    }
    class wI {
      leave(SS) {
        if ((0, DS.e)()) {
          var HS, gS;
          if ((0, xS.e)()) return;
          (0, aS.c)(!0 === (null === (HS = (0, DS.l)()) || void 0 === HS || null === (gS = HS.currentViewer) || void 0 === gS ? void 0 : gS.unsavedChanges), SS)
        } else this.leaveLive()
      }
      leaveLive() {
        var SS;
        tI && (null === (SS = Ku()) || void 0 === SS || SS.endGamePack());
        if (!qI) return;
        qI = !1, (0, CS.f)();
        try {
          var HS;
          null === (HS = (0, hS.q)()) || void 0 === HS || HS.clearWasmCameraScreen()
        } catch (tS) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", tS)
        }
        const {
          gameNameWithVariation: gS
        } = (0, kS.e)();
        try {
          Zq()
        } finally {
          (0, kS.r)({
            websocketUrl: null
          }), qS.k.cj("leaveGame", {
            gameNameWithVariation: gS
          }), (0, IS.Q)()
        }
      }
      isReplay() {
        return (0, DS.e)()
      }
    }
  },
  40947: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      f: () => tS,
      h: () => NS,
      k: () => xS
    });
    const tS = 12e4,
      bS = 3e4,
      XS = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: SS => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", SS), () => {
          document.removeEventListener("visibilitychange", SS)
        })
      };

    function xS(SS) {
      return `it sent no start within ${Math.round(SS)} ms`
    }
    class NS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : XS;
        this.timeoutMs = SS, this.onTimeout = HS, this.now = gS, this.visibility = tS, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = tS.listen((() => {
          this.onVisibility()
        })), tS.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const SS = this.step;
        return null === SS ? 0 : Math.min(this.now() - SS.at, SS.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const SS = this.timeoutMs - this.counted;
        if (SS <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const HS = Math.min(SS, 5e3);
        this.step = {
          at: this.now(),
          ms: HS
        }, this.arm(HS, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(SS, HS) {
        this.timer = setTimeout((() => {
          this.timer = null, HS()
        }), SS)
      }
    }
  },
  39699: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS
    });
    var tS = gS(387),
      bS = gS(1087);
    const XS = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      xS = new Set(["creativeFlat", "skyGrid"]);

    function NS(SS) {
      const HS = (0, tS.Kb)(SS);
      return "classic" !== HS ? XS.has(HS) : !(0, bS.m)(SS) && !xS.has((0, tS.Fb)(SS))
    }
  },
  40869: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    const tS = {
      roomsPerServerMax: 30,
      timeForPlayerToConnect: 3e4,
      seatReservationSeconds: 15,
      healthWindowMs: 3e5,
      minAttemptsForRoomHealthWindow: 6,
      minAttemptsForServerHealthWindow: 20,
      minAttemptsForEmptyServerHealthWindow: 6,
      playerTimeoutThreshold: .8,
      gameServerMatchmakingHeartbeatInterval: 2e3,
      gameServerMatchmakingAnalyticsHeartbeatInterval: 1e4,
      SetRoomsHeartbeatBackoffMultiplier: 1.5,
      SetRoomsHeartbeatMaxInterval: 1e4,
      AnalyticsHeartbeatBackoffMultiplier: 1.2,
      AnalyticsHeartbeatMaxInterval: 3e4,
      defaultSubtractionFromMaxPlayersForSoftCap: 2,
      saveExpectedPlayersEvery: 1e4,
      unregisterFrozenGameServersIntervalMs: 1e3,
      gameServerFrozenThresholdMs: 3e4,
      matchmakingSkipsDrainingLobbies: !0,
      minNotDrainingShareToSkipDrainingLobbies: .5,
      drainingSessionLobbyFillMs: 3e5
    }
  },
  38739: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(3021);
    const bS = ["none", "idle", "now"];

    function XS() {
      const SS = () => (0, tS.G)();
      return {
        memoryBytes: () => (0, tS.B)().buffer.byteLength,
        reserveUpFront: HS => SS().qf(HS),
        reserveAhead: HS => SS().Nf(HS),
        setCeiling: HS => {
          SS().uf(HS)
        },
        lowWater: () => bS[SS().xf()] ?? "none",
        stats: () => function(SS) {
          const HS = new Uint32Array((0, tS.B)().buffer, SS, 17),
            gS = SS => HS[SS] ?? 0,
            bS = SS => ({
              upFront: gS(SS),
              ahead: gS(SS + 1),
              onDemandInFrame: gS(SS + 2),
              onDemand: gS(SS + 3)
            });
          return {
            memoryBytes: gS(0),
            initialBytes: gS(1),
            liveBytes: gS(2),
            peakLiveBytes: gS(3),
            headroomBytes: gS(4),
            unusedBytes: gS(5),
            ceilingBytes: gS(6),
            reservesRefused: gS(7),
            grows: bS(8),
            grownBytes: bS(12),
            allocationsRefused: gS(16)
          }
        }(SS().ff()),
        takeBallast: () => SS().kf(),
        takePressure: () => SS().af()
      }
    }
  },
  5221: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => xS,
      h: () => tS,
      j: () => jS,
      m: () => fS,
      n: () => bS,
      r: () => XS,
      u: () => uS,
      v: () => IS,
      y: () => kS
    });
    const tS = 5;

    function bS(SS) {
      return SS === tS
    }

    function XS(SS) {
      return [...SS.features]
    }
    const xS = 262144,
      NS = 256,
      qS = 256;

    function uS(SS) {
      if ("object" !== typeof SS || null === SS || Array.isArray(SS)) return "The pack has no files.";
      const HS = [];
      for (const [gS, tS] of Object.entries(SS)) {
        if ("string" !== typeof tS) return `${gS} isn't text.`;
        HS.push({
          path: gS,
          source: tS
        })
      }
      return HS.sort(((SS, HS) => fS(SS.path, HS.path))),
        function(SS) {
          if (0 === SS.length) return "The pack has no .wgsl files.";
          if (SS.length > NS) return `The pack has more than ${NS} .wgsl files.`;
          const HS = new Set;
          for (const {
              path: gS
            }
            of SS) {
            const SS = aS(gS);
            if (null !== SS) return SS;
            if (HS.has(gS)) return `The pack has two files at ${gS}.`;
            HS.add(gS)
          }
          return kS(SS) > xS ? `The pack's .wgsl files are over ${xS/1024} KB in total.` : null
        }(HS) ?? HS
    }

    function IS(SS) {
      const HS = {};
      for (const gS of SS) HS[gS.path] = gS.source;
      return HS
    }

    function fS(SS, HS) {
      return SS < HS ? -1 : SS > HS ? 1 : 0
    }

    function kS(SS) {
      const HS = new TextEncoder;
      let gS = 0;
      for (const {
          source: tS
        }
        of SS) gS += HS.encode(tS).byteLength;
      return gS
    }

    function aS(SS) {
      if (!SS.toLowerCase().endsWith(".wgsl")) return `${SS} isn't a .wgsl file.`;
      if (SS.length > qS) return `A file path is over ${qS} characters.`;
      if (SS.includes("\\") || /[\u0000-\u001f]/.test(SS)) return `${SS} isn't a valid file path.`;
      return SS.split("/").some((SS => "" === SS || "." === SS || ".." === SS)) ? `${SS} isn't a valid file path.` : null
    }
    const KS = /^(.*)\[rot\[([1-4])$/;

    function jS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const tS = new Map;
      HS.forEach(((SS, HS) => {
        let {
          numAnimStates: gS,
          animStartIdx: bS
        } = SS;
        for (let XS = 1; XS < gS; XS++) tS.set(bS + XS - 1, HS)
      }));
      const bS = Object.entries(SS),
        XS = new Map;
      for (const [jS, GS] of bS) {
        const SS = KS.exec(jS);
        "1" === SS?.[2] && XS.set(SS[1], GS + 1)
      }
      const xS = SS => {
          const HS = KS.exec(SS);
          return HS && XS.has(HS[1]) ? {
            root: HS[1],
            rotation: Number(HS[2]) - 1
          } : null
        },
        NS = new Set(bS.map((SS => {
          let [HS] = SS;
          return xS(HS)?.root ?? HS
        }))),
        qS = (SS, gS) => {
          const tS = SS.replace(/_?0$/, "");
          return (HS[gS]?.numAnimStates ?? 0) > 1 && !NS.has(tS) ? tS : SS
        },
        uS = new Map;
      for (const [KS, jS] of bS) uS.set(jS, qS(xS(KS)?.root ?? KS, jS));
      const IS = bS.reduce(((SS, HS) => {
          let [, gS] = HS;
          return Math.max(SS, gS + 1)
        }), 0),
        fS = Array.from({
          length: IS
        }, ((SS, HS) => ({
          id: HS + 1,
          rotation: 0
        }))),
        kS = new Map,
        aS = new Map;
      for (const [KS, jS] of bS) {
        const SS = xS(KS),
          HS = tS.get(jS);
        if (void 0 !== HS) {
          const gS = uS.get(HS);
          aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "frame"
          }), SS && !aS.has(SS.root) && aS.set(SS.root, {
            name: SS.root,
            texture: gS,
            kind: "frame"
          });
          continue
        }
        const gS = uS.get(jS),
          bS = SS?.root ?? KS;
        if (gS !== bS && aS.set(bS, {
            name: bS,
            texture: gS,
            kind: "frame"
          }), SS) {
          const HS = XS.get(SS.root);
          fS[jS] = {
            id: HS,
            rotation: SS.rotation
          }, kS.set(gS, HS), aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "rotation"
          })
        } else kS.set(gS, jS + 1)
      }
      for (const KS of kS.keys()) aS.delete(KS);
      for (const [KS, jS] of gS) {
        const SS = kS.get(jS);
        void 0 === SS || kS.has(KS) || (kS.set(KS, SS), aS.delete(KS))
      }
      return {
        named: [...kS].sort(((SS, HS) => {
          let [gS] = SS, [tS] = HS;
          return gS < tS ? -1 : gS > tS ? 1 : 0
        })).map((SS => {
          let [HS, gS] = SS;
          return {
            name: HS,
            id: gS
          }
        })),
        aliases: [...aS.values()],
        layers: fS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);