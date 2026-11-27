export const id = 76;
export const ids = [76, 138, 139, 159];
export const modules = {
  40980: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      e: () => EW
    });
    const mW = "The world isn't loaded, so no blocks can be seen.",
      EW = "The world isn't loaded, so nothing in it can be seen."
  },
  5424: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW
    });
    var mW = OW(25),
      EW = OW(27),
      NW = OW(1294),
      PW = OW(3866);
    const LW = 3e4,
      cW = 1e3;

    function wW() {
      return "visible" === document.visibilityState && "inGame" === mW.d.get("gameState") && (0, NW.z)()
    }

    function tW(WW, iW) {
      (0, PW.x)() || function(WW, iW, OW) {
        let mW = 0;
        const EW = setInterval((() => {
          iW() && (mW += cW, mW >= WW && (clearInterval(EW), OW()))
        }), cW)
      }(LW, wW, (() => {
        iW().then((() => {
          WW(`saved for the player after ${LW/1e3} s of play`), (0, PW.J)(), EW.l.iZ("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  35093: (WW, iW, OW) => {
    function mW(WW, iW) {
      return 0 === WW.length ? 0 : WW[Math.min(WW.length - 1, Math.floor(iW * WW.length))]
    }

    function EW(WW) {
      return WW.toFixed(1)
    }
    OW.d(iW, {
      c: () => EW,
      d: () => mW
    })
  },
  39133: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      i: () => tW,
      l: () => MW,
      n: () => sW,
      q: () => kW
    });
    var mW = OW(5424),
      EW = OW(35093),
      NW = OW(3866);
    const PW = 20,
      LW = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "aZ", "jobMs"];

    function cW(WW) {
      return [...WW].sort(((WW, iW) => WW - iW))
    }
    const wW = [];

    function tW(WW, iW, OW) {
      return `${WW},${iW},${OW}`
    }
    class ZW {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(WW, iW) {
        var OW;
        const mW = null !== (OW = this.pending.get(WW)) && void 0 !== OW ? OW : [];
        mW.push({
          editAt: iW,
          meshJobId: 0
        }), this.pending.set(WW, mW)
      }
      frame(WW) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, WW - this.lastFrameAt)), this.lastFrameAt = WW, this.frames++, WW - this.windowStart >= 1e3 && this.summarise(WW)
      }
      sent(WW, iW, OW, mW, EW, NW, PW) {
        this.jobs.set(iW, {
          sentAt: PW,
          receivedAt: 0,
          ahead: OW,
          inFlight: mW,
          aZ: EW,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, OW), this.maxCapacity = Math.max(this.maxCapacity, EW);
        for (const cW of null !== (LW = this.pending.get(WW)) && void 0 !== LW ? LW : []) {
          var LW;
          NW.includes(cW.meshJobId) || (cW.meshJobId = iW)
        }
      }
      received(WW, iW, OW) {
        const mW = this.jobs.get(WW);
        void 0 !== mW && (this.roundTrips.push(OW - mW.sentAt), mW.receivedAt = OW, mW.jobMs = iW)
      }
      failed(WW) {
        this.jobs.delete(WW)
      }
      reassign(WW, iW, OW) {
        this.jobs.delete(iW);
        for (const EW of null !== (mW = this.pending.get(WW)) && void 0 !== mW ? mW : []) {
          var mW;
          EW.meshJobId === iW && (EW.meshJobId = OW)
        }
      }
      applied(WW, iW, OW) {
        const mW = this.jobs.get(iW);
        this.jobs.delete(iW), void 0 !== mW && this.show(WW, mW, OW, (WW => WW.meshJobId === iW))
      }
      emptied(WW, iW) {
        const OW = {
          sentAt: iW,
          receivedAt: iW,
          ahead: 0,
          inFlight: 0,
          aZ: 0,
          jobMs: 0
        };
        this.show(WW, OW, iW, (() => !0))
      }
      show(WW, iW, OW, mW) {
        const EW = this.pending.get(WW);
        if (!EW) return;
        const NW = EW.filter((EW => !mW(EW) || (this.record(WW, EW.editAt, iW, OW), !1)));
        NW.length > 0 ? this.pending.set(WW, NW) : this.pending.delete(WW)
      }
      wZ(WW) {
        this.reported += WW, this === lW && this.reported >= PW && null !== AW && (AW(), AW = null)
      }
      record(WW, iW, OW, mW) {
        const EW = {
          totalMs: mW - iW,
          slotMs: OW.sentAt - iW,
          workerMs: OW.receivedAt - OW.sentAt,
          applyMs: mW - OW.receivedAt,
          ahead: OW.ahead,
          inFlight: OW.inFlight,
          aZ: OW.aZ,
          jobMs: OW.jobMs
        };
        if (this.edits[this.nextEdit] = EW, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(EW.totalMs), this.wZ(1), EW.totalMs < 100 || ++this.outliers > 5) return;
        const PW = WW => Math.round(WW);
        (0, NW.m)("remesh", `slow edit (${WW}) shown in ${PW(EW.totalMs)} ms: slot ${PW(EW.slotMs)}, worker ${PW(EW.workerMs)} (${EW.ahead} ahead, ${EW.inFlight}/${EW.aZ} in flight; job ${PW(EW.jobMs)}), apply ${PW(EW.applyMs)}`)
      }
      summarise(WW) {
        const iW = (WW - this.windowStart) / 1e3;
        for (const [OW, mW] of this.pending) {
          const iW = mW.filter((iW => WW - iW.editAt <= 1e4));
          this.gaveUp += mW.length - iW.length, this.wZ(mW.length - iW.length), iW.length > 0 ? this.pending.set(OW, iW) : this.pending.delete(OW)
        }
        for (const [OW, mW] of this.jobs) WW - mW.sentAt > (mW.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(OW);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const WW = cW(this.roundTrips),
            OW = cW(this.windowEdits),
            mW = Math.max(0, this.outliers - 5);
          (0, NW.m)("remesh", `${Math.round(this.frames/iW)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,EW.d)(WW,.5))} max ${Math.round((0,EW.d)(WW,1))} ms | ${OW.length} edits shown, p50 ${Math.round((0,EW.d)(OW,.5))} max ${Math.round((0,EW.d)(OW,1))} ms${mW>0?`, ${mW} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = WW, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const WW = LW.map((WW => {
          const iW = cW(this.edits.map((iW => iW[WW])));
          return `${WW}: p50 ${Math.round((0,EW.d)(iW,.5))} p90 ${Math.round((0,EW.d)(iW,.9))} max ${Math.round((0,EW.d)(iW,1))}`
        }));
        return [`${this.edits.length} edits`, ...WW].join("\n")
      }
      dump() {
        const WW = this.edits.map((WW => LW.map((iW => Math.round(10 * WW[iW]) / 10)).join(",")));
        return [this.stats(), LW.join(","), ...WW].join("\n")
      }
    }
    class xW {
      constructor(WW, iW) {
        this.log = WW, this.Hx = iW
      }
      edit(WW, iW, OW) {
        const [mW, EW, NW] = this.Hx.oZ.KmW(WW, iW, OW), PW = this.Hx.oZ.Tb.Jb(mW, EW, NW);
        PW && PW.Yb && this.log.edit(tW(mW, EW, NW), performance.now())
      }
      sent(WW, iW, OW, mW, EW) {
        this.log.sent(tW(WW.i, WW.j, WW.k), iW, OW, mW, EW, wW, performance.now())
      }
      received(WW) {
        this.log.received(WW.meshJobId, WW.jobMs, performance.now())
      }
      failed(WW) {
        this.log.failed(WW)
      }
      applied(WW, iW) {
        this.log.applied(tW(WW.i, WW.j, WW.k), iW, performance.now())
      }
    }
    let lW = null,
      AW = null,
      bW = !1,
      jW = null;

    function UW() {
      return new Promise((WW => {
        null !== lW && lW.reported >= PW ? WW() : AW = WW
      }))
    }

    function kW() {
      const WW = new ZW;
      return lW = WW, (0, NW.l)("remesh", (() => WW.dump())), (0, NW.e)("remeshStats", (() => {
        console.log(WW.stats())
      })), bW || (bW = !0, (0, mW.c)((WW => {
        (0, NW.m)("remesh", WW)
      }), UW)), WW
    }

    function sW(WW) {
      const iW = kW();
      jW = new xW(iW, WW), WW.bY.meshProbe = jW, WW.on("beforeRender", (() => {
        iW.frame(performance.now())
      }))
    }

    function MW(WW, iW, OW) {
      var mW;
      null === (mW = jW) || void 0 === mW || mW.edit(WW, iW, OW)
    }
  },
  35116: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    const mW = new Set(["chunkBorders"])
  },
  37968: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      c: () => mW
    });
    const mW = 3,
      EW = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  35270: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => EW,
      f: () => ZW
    });
    var mW = OW(1659);

    function EW(WW) {
      var iW;
      return {
        ...LW.store,
        yaw: LW.store.yaw + (null !== (iW = mW.e[WW].previewYaw) && void 0 !== iW ? iW : 0)
      }
    }
    const NW = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PW = {
        ...NW,
        radius: 33,
        target: [0, 3.9, 0]
      },
      LW = {
        player: NW,
        store: PW,
        showcase: {
          ...PW,
          target: [0, 1.9, 0]
        }
      };

    function cW(WW, iW) {
      WW instanceof Promise ? WW.then(iW).catch((WW => {
        console.error("Couldn't open the preview", WW)
      })) : iW(WW)
    }
    class wW {
      constructor(WW) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
        }))
      }
      show(WW) {
        var iW;
        this.view = WW, null === (iW = this.opened) || void 0 === iW || iW.show(WW)
      }
      resize(WW, iW) {
        var OW;
        this.size = {
          width: WW,
          height: iW
        }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    class tW {
      constructor(WW) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), cW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var WW, iW;
        return null !== (WW = null === (iW = this.opened) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
      }
      setCosmetic(WW, iW) {
        var OW;
        null === (OW = this.opened) || void 0 === OW || OW.setCosmetic(WW, iW)
      }
      setNametag(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.setNametag(WW)
      }
      playEmote(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.playEmote(WW)
      }
      setOrbit(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.setOrbit(WW)
      }
      resetCamera() {
        var WW;
        null === (WW = this.opened) || void 0 === WW || WW.resetCamera()
      }
      async untilDrawn(WW) {
        var iW;
        await this.ready, await (null === (iW = this.opened) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
      }
      resize(WW, iW) {
        var OW;
        this.size = {
          width: WW,
          height: iW
        }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    const ZW = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(WW) {
        this.host = WW
      }
      setDefaultHost(WW) {
        this.makeDefault = WW
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(WW) {
        return new wW(this.current().openMob(WW))
      }
      openPet(WW) {
        return new wW(this.current().openPet(WW))
      }
      openMobLineup(WW) {
        return new wW(this.current().openMobLineup(WW))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(WW, iW) {
        return new tW(this.current().openCharacter(WW, iW))
      }
    }
  },
  5961: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW.l,
      c: () => EW,
      g: () => mW.r
    });
    var mW = OW(5970);
    const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
      strict: WW,
      program: iW
    })))))
  },
  40448: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ShaderPackPage: () => cW,
      harnessShaderPackMode: () => xW,
      setHarnessUrlShaderPack: () => ZW,
      shaderPackPage: () => tW
    });
    var mW = OW(100),
      EW = OW(39),
      NW = (OW(4675), OW(5961), OW(4666)),
      PW = OW(7659);
    OW(7637);
    const LW = {
      status: "none"
    };
    class cW {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, NW.g)(mW.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), wW().then((WW => {
            WW && EW.i.removeItem(NW.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, NW.c)(mW.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const WW = await this.load();
        return "active" === WW.status ? WW.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((WW => (console.error("Failed to load the shader pack", WW), LW))).then((WW => (this.resolved ??= WW, WW))), this.pagePack
      }
      hasNone() {
        var WW;
        return "none" === (null === (WW = this.resolved) || void 0 === WW ? void 0 : WW.status)
      }
      block(WW) {
        this.resolved = {
          status: "blocked",
          messageKey: WW,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([OW.e(91), OW.e(157), OW.e(163)]).then((() => OW(53916))).then((WW => (WW.prefetchCompiler(), WW))), this.compiling
      }
      async readStored() {
        const WW = await wW();
        return WW && this.compiler().then((WW => WW.reconcileHint())).catch((WW => {
          console.error("Failed to correct the shader pack hint", WW)
        })), WW
      }
      async read() {
        const WW = await this.preload();
        return WW ? (await this.compiler()).compilePagePack(WW) : LW
      }
    }
    async function wW() {
      if (!(0, NW.i)(mW.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const WW = await (0, PW.g)(!0);
        return WW || EW.i.setItem(NW.b, !1), WW
      } catch (WW) {
        return console.error("Failed to read the stored shader pack", WW), EW.i.removeItem(NW.b), null
      }
    }
    const tW = new cW;

    function ZW(WW, iW) {}

    function xW() {
      return null
    }
  },
  40491: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => ZW,
      i: () => xW
    });
    var mW = OW(154),
      EW = OW(172),
      NW = OW(1567),
      PW = OW(1888),
      LW = OW(1584),
      cW = OW(37709),
      wW = OW(683),
      tW = OW(40448);

    function ZW(WW) {
      (0, PW.reportClientError)("matchmake_failed", WW, mW.k[mW.k.SHADER_PACK])
    }
    async function xW(WW, iW) {
      var OW;
      const mW = null === (OW = await tW.shaderPackPage.preload()) || void 0 === OW ? void 0 : OW.listing,
        PW = (0, cW.c)();
      mW && null !== PW && await LW.e.reportShaderPackSession(WW, {
        packId: mW.packId,
        sourceHash: mW.sourceHash,
        game: (0, NW.d)(iW, EW.G, "other"),
        playSessionId: PW,
        visitSessionId: (0, wW.getVisitSessionId)()
      })
    }
  },
  7659: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      g: () => NW
    });
    var mW = OW(39);
    const EW = "shaderPack";
    async function NW() {
      var WW;
      let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await mW.f.getItem(EW, iW)) && void 0 !== WW ? WW : null
    }
  },
  7637: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      loadShaderPackTextures: () => PW,
      shaderPackTextures: () => LW
    });
    var mW = OW(5970);
    let EW = null,
      NW = null;

    function PW() {
      return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: iW,
          textureNameToIndex: OW,
          textureAnimationData: NW
        } = WW;
        return EW ??= (0, mW.o)(OW, NW, iW), EW
      })), NW
    }

    function LW() {
      if (null === EW) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return EW
    }
  },
  40250: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW
    });
    var mW = OW(27),
      EW = OW(1294),
      NW = OW(2458);
    const PW = "Reconnecting";
    class LW {
      constructor(WW) {
        this.hooks = WW, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = WW => {
          WW.persisted || this.leave()
        }, this.controller = new NW.i((iW => WW.reconnect(iW)), {
          isSessionLive: () => !this.ended && WW.isLive(),
          onPhaseChanged: WW => {
            this.onPhaseChanged(WW)
          },
          onReconnected: iW => {
            WW.onReconnected(iW)
          },
          onGaveUp: iW => {
            !this.ended && WW.isLive() && WW.onGaveUp(this.sessionBased, iW)
          }
        })
      }
      onInitialInfo(WW, iW) {
        this.graceMs = WW, this.sessionBased = iW
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(WW) {
        this.ended || this.controller.onConnectionLost(WW, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const WW = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          iW = this.controller.heldToken;
        this.end(), WW && "" !== iW && this.hooks.releaseSeat(iW)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(WW) {
        const iW = (0, NW.u)(WW);
        iW !== this.stopped && (this.stopped = iW, this.hooks.freeze(iW));
        const OW = "frozen" === WW || "resuming" === WW && this.frozen;
        OW && !this.frozen ? (0, EW.y)(PW, {
          overridesPause: !0
        }) : !OW && this.frozen && (0, EW.v)(PW), this.frozen = OW, this.setListening("connected" !== WW), mW.l.iZ(NW.t, OW ? "frozen" : WW)
      }
      setListening(WW) {
        WW !== this.listening && (this.listening = WW, WW ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40253: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = WW, this.now = iW, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const WW = this.now(),
            iW = WW - this.lastCheckAt <= 2e3;
          this.lastCheckAt = WW;
          const OW = "visible" === document.visibilityState;
          !OW || iW && this.wasVisible || (this.resumedAt = WW), this.wasVisible = OW, OW && WW - this.lastHeardAt > 12e3 && WW - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = iW(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  35167: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(1303);

    function EW() {
      var WW, iW;
      return null !== (WW = null === (iW = screen.orientation) || void 0 === iW ? void 0 : iW.type) && void 0 !== WW ? WW : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const NW = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && EW() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = EW(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, mW.ub)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const WW of this.resizers) WW()
          }
        }), 1e3)
      }
      heldSizer(WW) {
        let iW = !1;
        return () => {
          if (iW && this.isHeld()) return null;
          const OW = WW();
          return iW ||= null !== OW, OW
        }
      }
      onRelease(WW) {
        return this.resizers.add(WW), () => {
          this.resizers.delete(WW)
        }
      }
    }
  },
  10223: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => EW
    });
    let mW = Promise.resolve();

    function EW(WW) {
      mW = WW
    }

    function NW() {
      return mW
    }
  },
  40478: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    let mW = !1;
    async function EW(WW, iW) {
      if (!mW) {
        mW = !0;
        try {
          const [{
            reloadBloxd: mW
          }, {
            NotificationProvider: EW
          }] = await Promise.all([Promise.resolve().then((() => OW(1856))), Promise.resolve().then((() => OW(1422)))]);
          if (!WW || !0 === await EW.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void mW(iW)
        } catch (EW) {
          console.error("Leaving the replay failed", EW)
        }
        mW = !1
      }
    }
  },
  40261: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      d: () => tW
    });
    var mW = OW(1813),
      EW = OW(182),
      NW = OW(1787),
      PW = OW(1917),
      LW = OW(1185),
      cW = OW(1111);
    async function wW(WW, iW) {
      return function(WW) {
        return "object" === typeof WW && null !== WW && WW.code === EW.e.VpnIp.code
      }(iW) && function(WW) {
        return NW.d.supports("appCheck") && WW.isLoggedIn() && !WW.hasTriedAppAttestation()
      }(WW) && await async function(WW) {
        try {
          const {
            token: iW
          } = await (0, PW.e)(), {
            "3PSIDMCPP": OW
          } = await (0, cW.postJsonWithMetricsCookiesAndJsonResponse)(`${LW.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: iW
          }, {
            retries: 0
          }, WW.getMetricsCookies());
          return WW.setAppAttestedAuthJwt(OW), !0
        } catch (iW) {
          return iW instanceof mW.d && "failed" === iW.code ? (console.warn("The app couldn't get an App Check token:", iW), WW.markAppAttestationTried()) : console.error("Failed to attest the app:", iW), !1
        }
      }(WW)
    }
    async function tW(WW, iW) {
      try {
        return await iW()
      } catch (OW) {
        if (!await wW(WW, OW)) throw OW
      }
      return iW()
    }
  },
  42471: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      f: () => cW
    });
    var mW = OW(1876);
    const EW = 33177600,
      NW = 3e4;
    let PW = !1;

    function LW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: LW = 1,
        type: cW = "image/png",
        quality: wW
      } = mW;
      return WW.KZ() ? PW ? Promise.reject(new Error("A screenshot is already being taken")) : (PW = !0, new Promise(((mW, tW) => {
        let ZW, xW = 2,
          lW = null;
        const AW = () => {
          var iW;
          PW = !1, null === (iW = lW) || void 0 === iW || iW(), clearTimeout(ZW);
          try {
            WW.restoreSize()
          } catch (OW) {
            console.error("A screenshot couldn't size the canvas back", OW)
          }
        };
        ZW = setTimeout((() => {
          AW(), tW(new Error("No frame was drawn to capture"))
        }), NW);
        try {
          const mW = function(WW, iW, OW) {
            const mW = Math.max(1, WW),
              NW = Math.max(1, iW),
              PW = Math.min(1, OW / Math.max(mW, NW), Math.sqrt(EW / (mW * NW)));
            return {
              width: Math.max(1, Math.floor(mW * PW)),
              height: Math.max(1, Math.floor(NW * PW))
            }
          }(iW, OW, WW.maxTextureSize);
          WW.resize(mW.width, mW.height, LW * mW.width / Math.max(1, iW))
        } catch (bW) {
          return AW(), void tW(bW)
        }
        lW = WW.onFrameDrawn((() => {
          if (xW--, xW > 0) return;
          const {
            canvas: iW
          } = WW, OW = {
            width: iW.width,
            height: iW.height
          };
          try {
            iW.toBlob((WW => {
              WW ? mW({
                blob: WW,
                ...OW
              }) : tW(new Error("The canvas gave no image"))
            }), cW, wW)
          } catch (bW) {
            tW(bW)
          } finally {
            AW()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function cW(WW, iW, OW) {
      try {
        const EW = await LW(WW, iW, OW);
        (0, mW.e)(EW.blob, `bloxd-screenshot-${EW.width}x${EW.height}-${Date.now()}.png`)
      } catch (EW) {
        console.error("Error taking screenshot:", EW)
      }
    }
  },
  38871: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    const mW = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  40258: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW,
      e: () => tW
    });
    var mW = OW(182),
      EW = OW(1943),
      NW = OW(1194),
      PW = OW(10181);
    const LW = [250, 500, 1e3, 2e3, 1250],
      cW = 406;

    function wW(WW) {
      if ("object" !== typeof WW || null === WW) return !1;
      const {
        code: iW,
        message: OW
      } = WW, EW = mW.e.duplicateLobbyNameError;
      return (iW === EW.code || iW === cW) && (OW === EW.text || OW === EW.text + mW.j)
    }
    async function tW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EW.b;
      for (let EW = 0;; EW++) {
        let PW;
        (0, NW.s)(iW);
        try {
          return await WW()
        } catch (mW) {
          if (PW = LW[EW], void 0 === PW || !wW(mW)) throw mW
        }
        await OW(PW, iW)
      }
    }
    const ZW = new Set([mW.e.duplicateLobbyNameError.code, mW.e.lobbyCantBeCreated.code, mW.e.roomDisposedEarlyError.code, mW.e.roomDisposedLateError.code, mW.e.serverRoomLimitReached.code]);

    function xW(WW) {
      if (wW(WW)) return !0;
      const iW = (0, PW.f)(WW);
      return "number" === typeof iW && ZW.has(iW)
    }
  },
  10167: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW,
      f: () => cW
    });
    var mW = OW(344);

    function EW(WW) {
      if (!WW.startsWith("{")) return WW;
      let iW;
      try {
        iW = JSON.parse(WW)
      } catch {
        return WW
      }
      return function(WW) {
        if (null === (0, mW.ye)(WW)) return !1;
        const {
          params: iW
        } = WW;
        return void 0 === iW || "object" === typeof iW && null !== iW && Object.values(iW).every((WW => "string" === typeof WW))
      }(iW) ? iW : WW
    }
    var NW = OW(1172),
      PW = OW(1244);

    function LW(WW) {
      return (0, NW.u)(PW.e.get().getCurrentLanguageCode(), WW.translationKey, WW.params)
    }

    function cW(WW) {
      const iW = EW(WW);
      return "string" === typeof iW ? iW : LW(iW)
    }

    function wW(WW) {
      const iW = EW(WW);
      return "string" === typeof iW ? iW : LW({
        translationKey: "moderation:kicked",
        params: {
          reason: LW(iW)
        }
      })
    }
  },
  40402: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(327),
      EW = OW(136),
      NW = OW(39);

    function PW() {
      NW.i.setItem(mW.Qb, NW.i.getItem(mW.Qb) + 1), (0, EW.is99NightsCrazyGamesBundle)() && NW.i.setItem(mW.Nb, NW.i.getItem(mW.Nb) + 1)
    }
  },
  37707: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => KW,
      e: () => SW
    });
    var mW = OW(1052),
      EW = OW(192),
      NW = OW(339),
      PW = OW(649),
      LW = OW(344),
      cW = OW(1061),
      wW = OW(671),
      tW = OW(698),
      ZW = OW(5230),
      xW = OW(100),
      lW = OW(136),
      AW = OW(1856),
      bW = OW(117),
      jW = OW(37709),
      UW = OW(39),
      kW = OW(683),
      sW = OW(657),
      MW = OW(37711);

    function KW() {
      var WW, iW;
      return [...null !== (WW = navigator.languages) && void 0 !== WW ? WW : [null !== (iW = navigator.language) && void 0 !== iW ? iW : "none"], "EN-gb"]
    }

    function SW(WW, iW, OW, SW, YW) {
      const yW = (0, mW.i)(iW) ? (0, mW.n)(iW) : null,
        TW = WW.isLoggedIn() && void 0 !== (0, EW.c)(NW.k, lW.siteUsed) ? (0, sW.g)() : null,
        JW = {
          cookies: (0, AW.getAllCookiesForGameNameWithVariation)(iW),
          isMobile: (0, xW.isMobile)(),
          isUsingCustomGameTexturePack: null !== yW && YW(yW),
          generalCookies: {
            joinDiscord: !!UW.i.getItem("DiscordPressed"),
            newGo: ZW.c,
            ...WW.getMetricsCookies(),
            trafficCode: SW,
            compliance: xW.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, xW.getBrowserName)(),
            version: (0, xW.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, xW.getPlatformType)(),
            deviceType: (0, bW.d)()
          },
          isLoggedIn: WW.isLoggedIn(),
          lobbyName: OW,
          languages: KW(),
          version: PW.d,
          siteUsed: lW.siteUsed,
          subsiteUsed: lW.subsiteUsed,
          playSessionId: (0, jW.g)(iW),
          visitSessionId: (0, kW.getVisitSessionId)(),
          clientReason: wW.B.reason,
          budgetBasis: (0, MW.g)(),
          ...null !== tW.o && {
            diagClaim: tW.o.claimId
          },
          ...null !== TW && {
            webGpuLoss: TW
          }
        };
      return null !== yW && (0, LW.xc)(yW) ? (JW.lobbyName = (0, mW.f)(yW, (0, mW.m)(iW), OW), {
        roomName: `classic_${cW.e}`,
        joinOptions: JW
      }) : {
        roomName: iW,
        joinOptions: JW
      }
    }
  },
  35130: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      e: () => EW
    });
    let mW = null;

    function EW() {
      mW = performance.now()
    }

    function NW() {
      return mW
    }
  },
  40282: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => lW,
      d: () => xW
    });
    const mW = "ue:",
      EW = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      NW = "[A-Za-z0-9]{1,24}",
      PW = 15,
      LW = new RegExp(`^${NW}$`);
    new RegExp(`^${mW}(${[...EW,"other"].join("|")}):(?:n|k(${NW})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function cW(WW, iW, OW, NW, cW) {
      const wW = "string" === typeof WW && EW.includes(WW) ? WW : "other";
      let tW = "n";
      return "string" === typeof iW ? tW = LW.test(iW) ? `k${iW}` : "n" : "number" === typeof OW && Number.isInteger(OW) && OW >= 0 && OW <= PW && (tW = `b${OW}`), `${mW}${wW}:${tW}:${NW?1:0}${cW?1:0}`
    }
    var wW = OW(1774),
      tW = OW(1864);
    let ZW = null;

    function xW(WW) {
      const iW = WW instanceof Element && WW !== document.body && WW !== document.documentElement && !(0, wW.r)(WW) && !WW.closest("#root");
      return {
        editable: (0, tW.b)(WW),
        outsideView: iW
      }
    }

    function lW(WW) {
      return ZW ??= function(WW) {
        try {
          const {
            editable: iW,
            outsideView: OW
          } = xW(WW.target), mW = WW;
          return cW(WW.type, mW.code, mW.button, iW, OW)
        } catch {
          return cW(null, null, null, !1, !1)
        }
      }(WW), ZW
    }
  },
  42394: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => dW,
      G: () => rW,
      H: () => gW,
      I: () => nW,
      J: () => vW,
      M: () => HW,
      P: () => qW,
      S: () => BW,
      V: () => oW,
      d: () => RW,
      h: () => VW,
      i: () => JW,
      m: () => GW,
      q: () => hW,
      t: () => TW,
      u: () => DW,
      v: () => uW,
      z: () => eW
    });
    var mW = OW(1459),
      EW = OW(27),
      NW = OW(1294),
      PW = OW(3305),
      LW = OW(5575),
      cW = OW(5533);
    let wW, tW = !1,
      ZW = !1,
      xW = !1,
      lW = !1;
    const AW = 1300,
      bW = 3e3;
    let jW = 0,
      UW = !1,
      kW = !1,
      sW = 0;
    const MW = 2;
    let KW = !1,
      SW = !1;
    const YW = new Set,
      yW = new Set;

    function TW() {
      return tW
    }

    function JW() {
      return kW
    }

    function hW() {
      return SW
    }

    function HW() {
      return (0, NW.z)() && !SW
    }

    function nW(WW) {
      let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (WW !== SW) {
        SW = WW;
        for (const WW of [...yW]) WW(SW);
        iW && BW()
      }
    }

    function uW(WW) {
      return yW.add(WW), () => {
        yW.delete(WW)
      }
    }

    function oW() {
      (0, LW.j)(PW.y.Menu, (0, NW.z)() ? 0 : PW.y.Menu)
    }

    function dW() {
      kW = !1, sW = 0, oW(), BW()
    }

    function eW(WW) {
      return YW.add(WW), () => {
        YW.delete(WW)
      }
    }

    function vW(WW) {
      ZW = !1, WW !== tW && (tW = WW, lW = !1, clearTimeout(wW), xW = !tW && KW, tW ? (UW = !1, kW = !1, sW = 0) : HW() && !KW && (kW = !0), KW = !1, tW && !HW() && aW(), zW(), xW && BW())
    }

    function gW(WW) {
      WW !== UW && (UW = WW, WW || BW())
    }

    function DW() {
      ZW = !1, lW || !0 !== CW() || (lW = !0, clearTimeout(wW), wW = setTimeout(pW, AW))
    }

    function VW() {
      return (!ZW || performance.now() - jW > bW) && (ZW = (0, cW.K)().lockPointer(), jW = performance.now()), ZW
    }

    function pW() {
      fW() && XW() && VW()
    }

    function fW() {
      return HW() && !tW && !UW && !(0, mW.k)()
    }

    function CW() {
      var WW;
      return "undefined" === typeof navigator || null === (WW = navigator.userActivation) || void 0 === WW ? void 0 : WW.isActive
    }

    function XW() {
      return xW && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== CW()
    }

    function BW() {
      HW() ? fW() && !kW && XW() && VW() : tW && !KW && aW()
    }

    function qW() {
      kW ? navigator.vendor.startsWith("Apple") ? IW() : sW = MW : BW()
    }

    function RW() {
      sW > 0 && 0 === --sW && IW()
    }

    function GW() {
      sW = 0
    }

    function IW() {
      fW() && !0 === CW() && VW()
    }

    function aW() {
      KW = !0, (0, cW.K)().unlockPointer()
    }

    function rW() {
      ZW = !1, xW = !1, lW = !1, clearTimeout(wW), UW = !1, kW = !1, sW = 0, KW = !1;
      const WW = tW;
      tW = !1, WW && zW()
    }

    function zW() {
      for (const WW of [...YW]) WW(tW);
      EW.l.iZ("pointerLockUpdate", tW)
    }
  },
  42373: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => xW,
      h: () => LW,
      j: () => ZW,
      n: () => wW,
      q: () => PW,
      t: () => tW,
      x: () => cW
    });
    let mW = null,
      EW = null,
      NW = null;

    function PW(WW) {
      mW = WW
    }

    function LW() {
      return mW
    }

    function cW(WW) {
      EW = WW
    }

    function wW() {
      return EW
    }

    function tW(WW) {
      NW = WW
    }

    function ZW() {
      return NW
    }

    function xW() {
      var WW, iW;
      return !0 === (null === (WW = EW) || void 0 === WW || null === (iW = WW.currentViewer) || void 0 === iW ? void 0 : iW.inPlayback)
    }
  },
  42176: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW
    });
    var mW = OW(40980),
      EW = OW(37968);

    function NW(WW) {
      return {
        current: () => WW,
        watch: () => () => {}
      }
    }

    function PW() {}
    const LW = Object.freeze([0, 0, 0]),
      cW = {
        states: {
          health: NW({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: NW({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: NW({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: NW({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: NW({}),
          creativeVisibility: NW({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: NW(null),
          heldItemAim: NW({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: NW(!1),
          gliderBoostFuel: NW(0),
          flight: NW({
            canFly: !1,
            flying: !1
          }),
          crafting: NW({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: NW({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: NW({}),
          fullInventory: NW(!1),
          crosshairTarget: NW({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: NW(!0),
          freeCamera: NW({
            allowed: !1,
            movesFly: !1
          }),
          replay: NW(null),
          replayEdits: NW(null),
          replayRecorder: NW(EW.b),
          replayVideoExporting: NW(!1)
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
          chatRemoved: {
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
          selectHotbarSlot: PW,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: PW,
          setInventoryOpen: PW,
          changeIronChestPasskey: PW,
          dragReplayCamera: PW,
          applyTemporaryThirdPerson: PW,
          holdEmoteWheel: PW,
          recordFlyingMiddleText: PW,
          focusCrafting: PW,
          craftRecipe: () => ({
            lL: 0,
            WZ: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: PW,
          setShopOpen: PW,
          buyShopItem: PW,
          lobbyManage: PW,
          sendChatMessage: () => !1,
          ignorePlayer: PW,
          reportPlayer: PW,
          reportWorldCodeChat: PW,
          requestDiscordReportKey: PW,
          reportLobbyOrGame: PW,
          playEmote: PW,
          updateMyCosmetic: PW,
          writeOnBoard: PW,
          writeBook: PW,
          writeNameTag: PW,
          setCustomLobbyBlock: PW,
          openIronChest: PW,
          sendCodeCollab: PW,
          clickCodeBlock: PW,
          bindCustomButtonKeys: PW,
          pressCustomButton: PW,
          moveReplayFreecam: PW,
          holdReplayFreecamVertical: PW,
          respawn: PW,
          wakeUp: PW,
          requestLeaderboard: PW,
          completeTask: PW,
          setServerCookie: PW,
          answerUiRequest: PW,
          chooseRewardedAd: PW,
          setCameraZoom: PW,
          setFreeCameraMovesFly: PW,
          setBlockHighlight: PW,
          setCrosshairInteractPrompt: PW,
          setLookSensitivity: PW,
          replayAction: PW,
          setReplayPlaying: PW,
          seekReplay: PW,
          setReplayCameraMode: PW,
          syncReplayCameraMode: PW,
          setReplayCameraKeyframe: PW,
          moveReplayCameraKeyframe: PW,
          deleteReplayCameraKeyframes: PW,
          setReplayPlaybackMark: PW,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: PW,
          exportReplayVideo: PW,
          toggleRecording: PW,
          saveClip: PW,
          setRecorderPrefs: PW,
          setReplayViewerOpen: PW
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => mW.c,
          worldCodeAiGameState: () => mW.e
        },
        lookups: {
          localPos: () => LW,
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
  42185: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      h: () => NW,
      i: () => EW
    });
    let mW = null;

    function EW(WW) {
      mW = WW
    }

    function NW(WW) {
      mW === WW && (mW = null)
    }

    function PW() {
      var WW;
      null === (WW = mW) || void 0 === WW || WW()
    }
  },
  37861: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW,
      f: () => xW,
      g: () => UW,
      j: () => wW
    });
    var mW = OW(25),
      EW = OW(3305),
      NW = OW(3308),
      PW = OW(3310),
      LW = OW(3457),
      cW = OW(27);

    function wW(WW, iW) {
      return (!(0, PW.d)() || 0 === WW && 0 === iW) && (0, NW.v)(EW.k.Joystick, 0, WW, iW, 0)
    }
    const tW = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function ZW(WW) {
      return WW.classList.contains("TouchKeyHit") && lW() ? null : WW.firstElementChild
    }

    function xW(WW) {
      return WW.classList.contains("TouchKeyHit") && !WW.classList.contains("CanvasZone") ? {
        whole: !lW(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: AW(ZW(WW))
      }
    }

    function lW() {
      return document.documentElement.classList.contains(LW.i)
    }

    function AW(WW) {
      return !(WW instanceof HTMLElement) || WW.offsetWidth <= 0 || WW.offsetHeight <= 0 ? null : {
        width: WW.offsetWidth,
        height: WW.offsetHeight
      }
    }

    function bW(WW, iW) {
      const OW = WW => Math.min(65535, Math.round(4 * WW));
      return (OW(WW) | OW(iW) << 16) >>> 0
    }

    function jW(WW) {
      return {
        x: WW.left + WW.width / 2,
        y: WW.top + WW.height / 2,
        radius: Math.min(WW.width, WW.height) / 2
      }
    }
    const UW = new class {
      constructor(WW) {
        this.write = WW, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        iW ? this.elements.set(WW, {
          element: iW,
          hidden: OW
        }) : this.elements.delete(WW), this.measureOne(WW)
      }
      measure() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = WW.left, this.canvasTop = WW.top;
        for (const iW of this.elements.keys()) this.measureOne(iW)
      }
      hitZone(WW, iW) {
        let OW = null,
          mW = 1;
        for (const EW of this.elements.keys()) {
          const NW = this.shown(EW);
          if (!NW) continue;
          const {
            rect: PW,
            element: LW
          } = NW, cW = jW(PW), wW = Math.max(0, PW.width / 2 - cW.radius), tW = Math.max(0, PW.height / 2 - cW.radius), xW = Math.max(0, Math.abs(WW - cW.x) - wW), lW = Math.max(0, Math.abs(iW - cW.y) - tW), bW = LW.firstElementChild;
          let UW = Math.hypot(xW, lW) / cW.radius;
          const kW = AW(ZW(LW));
          kW && (UW = Math.min(UW, Math.max(2 * Math.abs(WW - cW.x) / kW.width, 2 * Math.abs(iW - cW.y) / kW.height))), UW < mW && (OW = {
            code: EW,
            element: LW,
            key: bW,
            ...cW
          }, mW = UW)
        }
        return OW
      }
      measureOne(WW) {
        const iW = this.shown(WW);
        if (!iW) return void this.write(EW.k.TouchZone, WW, 0, 0, 0);
        const {
          rect: OW,
          element: mW
        } = iW, NW = jW(OW);
        this.write(EW.k.TouchZone, WW, NW.x - this.canvasLeft, NW.y - this.canvasTop, bW(OW.width, OW.height));
        const PW = AW(ZW(mW));
        this.write(EW.k.TouchZone, 256 | WW, 0, 0, PW ? bW(PW.width, PW.height) : 0)
      }
      shown(WW) {
        const iW = this.elements.get(WW),
          OW = mW.d.get("worldPanelHud");
        if (!iW || iW.hidden || "none" === OW) return null;
        const EW = iW.element.getBoundingClientRect();
        return EW.width <= 0 || EW.height <= 0 ? null : {
          rect: EW,
          element: iW.element
        }
      }
    }(NW.v);
    (0, cW.n)(LW.d, (() => {
      UW.measure()
    }))
  },
  42375: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      c: () => wW
    });
    var mW = OW(42379),
      EW = OW(40261),
      NW = OW(37707),
      PW = OW(42255),
      LW = OW(42307);
    const cW = mW.e.timeForPlayerToConnect - 1e4;
    async function wW(WW, iW, OW, mW) {
      let cW;
      try {
        cW = await WW.getTrafficCode()
      } catch (AW) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", AW), new LW.z(AW)
      }
      const {
        gameNameWithVariation: wW,
        lobbyName: tW
      } = iW, ZW = () => {
        const iW = (0, NW.e)(WW, wW, tW, cW, (WW => {
          var iW;
          return null !== (iW = null === OW || void 0 === OW ? void 0 : OW.isUsingCustomGameTexturePack(WW)) && void 0 !== iW && iW
        }));
        iW.joinOptions.wasmClient = !0;
        const EW = (0, PW.B)();
        return null !== EW && (iW.joinOptions.renderBackend = EW), iW.joinOptions.joinAdHold = mW, iW
      }, {
        roomName: xW,
        joinOptions: lW
      } = ZW();
      return {
        endpoint: iW.endpoint,
        roomName: xW,
        joinOptions: lW,
        session: {
          gameNameWithVariation: wW,
          lobbyName: tW,
          playerDbId: WW.whamm
        },
        optionsAfterRefusal: async iW => await (0, EW.c)(WW, iW) ? ZW().joinOptions : null
      }
    }
  },
  5984: (WW, iW, OW) => {
    function mW(WW, iW) {
      return EW(WW, iW)
    }

    function EW(WW, iW) {
      if (WW === iW) return !0;
      if ("object" !== typeof WW || "object" !== typeof iW || null === WW || null === iW || Array.isArray(WW) !== Array.isArray(iW)) return !1;
      const OW = WW,
        mW = iW,
        NW = Object.keys(OW);
      return NW.length === Object.keys(mW).length && NW.every((WW => Object.prototype.hasOwnProperty.call(mW, WW) && EW(OW[WW], mW[WW])))
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  42422: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => SW,
      d: () => MW,
      f: () => bW,
      h: () => AW
    });
    var mW = OW(1943),
      EW = OW(1194),
      NW = OW(40258),
      PW = OW(37727),
      LW = OW(40269),
      cW = OW(42307);
    const wW = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      tW = 3,
      ZW = [500, 1500];

    function xW(WW) {
      const iW = new URL(WW);
      return {
        secure: "https:" === iW.protocol || "wss:" === iW.protocol,
        host: iW.host,
        pathname: iW.pathname.replace(/\/+$/, ""),
        search: iW.searchParams.toString()
      }
    }

    function lW(WW, iW, OW) {
      const {
        secure: mW,
        host: EW,
        pathname: NW,
        search: PW
      } = xW(WW);
      return `${mW?"https":"http"}://${EW}${NW}/matchmake/${iW}/${encodeURIComponent(OW)}${PW?`?${PW}`:""}`
    }

    function AW(WW, iW) {
      var OW;
      const mW = null !== (OW = iW.protocol) && void 0 !== OW ? OW : "ws";
      if ("ws" !== mW) throw new Error(`seat reservation asks for the ${mW} transport`);
      const {
        secure: EW,
        host: NW,
        pathname: PW,
        search: LW
      } = xW(WW), cW = new URLSearchParams(LW);
      cW.append("sessionId", iW.sessionId), iW.reconnectionToken && cW.append("reconnectionToken", iW.reconnectionToken);
      return `${EW?"wss":"ws"}://${iW.room.publicAddress||`${NW}${PW}`}/${iW.room.processId}/${iW.room.roomId}?${cW.toString()}`
    }
    async function bW(WW, iW, OW) {
      var LW;
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const xW = null !== (LW = wW.sleep) && void 0 !== LW ? LW : mW.b,
        AW = new EW.c(wW.signal),
        bW = new PW.b((() => {
          (0, EW.i)(AW.controller, new PW.c("seat"))
        })),
        {
          signal: sW
        } = AW;
      try {
        const mW = await (0, NW.e)((() => async function(WW, iW, OW, mW) {
          var NW;
          const {
            signal: PW,
            sleep: LW
          } = mW, wW = lW(WW, "joinOrCreate", iW), xW = JSON.stringify(OW);
          let AW = null;
          for (let lW = 0; lW < tW; lW++) {
            var bW;
            if (lW > 0) await LW(null !== (bW = ZW[lW - 1]) && void 0 !== bW ? bW : 1500, PW);
            let WW;
            (0, EW.s)(PW);
            try {
              WW = await UW(wW, xW, mW)
            } catch (sW) {
              (0, EW.s)(PW), AW = jW(sW);
              continue
            }
            const {
              response: iW,
              answer: OW,
              refusal: NW,
              lost: tW
            } = WW;
            if (null === tW) {
              if (null !== NW) throw kW(NW, OW);
              if (iW.ok && null !== OW && YW(OW)) return OW;
              AW = new cW.v(`seat request answered HTTP ${iW.status}${null===OW?" without JSON":" without a seat"}`, !1, void 0, iW.status)
            } else AW = jW(tW.error)
          }
          throw null !== (NW = AW) && void 0 !== NW ? NW : new cW.v("seat request made no attempt", !1)
        }(WW, iW, OW, {
          ...wW,
          signal: sW,
          sleep: xW
        })), sW, xW);
        return bW.answered(), mW
      } finally {
        bW.stop(), AW.unfollow()
      }
    }

    function jW(WW) {
      return new cW.v(WW instanceof Error ? WW.message : String(WW), !0, WW)
    }
    async function UW(WW, iW, OW) {
      var mW;
      const {
        signal: NW
      } = OW, PW = null !== (mW = OW.fetch) && void 0 !== mW ? mW : fetch, LW = await PW(WW, {
        method: "POST",
        headers: {
          ...wW,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: iW,
        credentials: "include",
        signal: NW
      }), {
        answer: cW,
        lost: tW
      } = await async function(WW) {
        try {
          const iW = await WW.json();
          return {
            answer: "object" === typeof iW && null !== iW ? iW : null,
            lost: null
          }
        } catch (iW) {
          return {
            answer: null,
            lost: iW instanceof SyntaxError ? null : {
              error: iW
            }
          }
        }
      }(LW), ZW = null !== cW && "string" === typeof cW.error ? cW.error : null;
      var xW;
      null !== ZW && (null === (xW = OW.onRefusal) || void 0 === xW || xW.call(OW));
      return (0, EW.s)(NW), {
        response: LW,
        answer: cW,
        refusal: ZW,
        lost: tW
      }
    }

    function kW(WW, iW) {
      return new cW.n(WW, "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.code) ? iW.code : 0, (0, LW.n)(WW).text)
    }
    class sW extends Error {
      constructor(WW, iW) {
        super(WW), this.code = iW, this.name = "SeatHttpError"
      }
    }
    async function MW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: EW,
        answer: NW,
        refusal: PW,
        lost: LW
      } = await UW(lW(WW, "reconnect", iW), JSON.stringify({
        reconnectionToken: OW
      }), mW);
      if (null !== LW) throw LW.error;
      if (!EW.ok) {
        const WW = null !== NW && "number" === typeof NW.code && 0 !== NW.code ? NW.code : EW.status;
        throw new sW(`the seat's reconnect was refused: ${null!==PW&&void 0!==PW?PW:`HTTP ${EW.status}`}`, WW)
      }
      if (null !== PW) throw kW(PW, NW);
      if (null === NW || !YW(NW)) throw new Error("the seat's reconnect answered " + (null === NW ? "without JSON" : "without a seat"));
      return {
        ...NW,
        reconnectionToken: OW
      }
    }
    const KW = 10;

    function SW(WW) {
      if (WW.byteLength < 2 || WW[0] !== KW) return null;
      const iW = 2 + WW[1];
      return iW > WW.byteLength ? null : (new TextDecoder).decode(WW.subarray(2, iW))
    }

    function YW(WW) {
      const iW = WW.room;
      return "string" === typeof WW.sessionId && "object" === typeof iW && null !== iW && "string" === typeof iW.roomId && "string" === typeof iW.processId && "string" === typeof iW.name
    }
  },
  42116: (WW, iW, OW) => {
    OW.d(iW, {
      $: () => UW,
      A: () => hW,
      B: () => TW,
      E: () => YW,
      G: () => nW,
      I: () => MW,
      L: () => KW,
      N: () => jW,
      P: () => JW,
      T: () => oW,
      U: () => AW,
      V: () => eW,
      Y: () => kW,
      db: () => sW,
      e: () => EW,
      gb: () => SW,
      i: () => dW,
      m: () => uW,
      p: () => lW,
      r: () => bW,
      s: () => HW,
      w: () => yW
    });
    var mW = OW(2908);
    const EW = {
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

    function NW(WW, iW) {
      return !ArrayBuffer.isView(WW) || WW instanceof DataView ? Array.isArray(WW) ? WW.map((WW => iW(WW))) : WW : Array.from(WW, (WW => iW(WW)))
    }

    function PW(WW) {
      if ("string" !== typeof WW) return WW;
      for (let iW = 0; iW < WW.length; iW++) {
        const OW = WW.charCodeAt(iW);
        if (OW >= 55296 && OW <= 57343) return cW.decode(LW.encode(WW))
      }
      return WW
    }
    const LW = new TextEncoder,
      cW = new TextDecoder;

    function wW(WW) {
      return WW
    }
    let tW;

    function ZW(WW) {
      return null === WW || "object" !== typeof WW ? WW : [PW(WW.policy), PW(WW.PL)]
    }

    function xW(WW) {
      return null === WW || "object" !== typeof WW ? WW : [NW(WW.CE, wW), NW(WW.rL, wW)]
    }

    function lW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.tP), PW(iW.ZP)];
      var iW
    }

    function AW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [iW.id, iW.ct];
      var iW
    }

    function bW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [iW.uO, PW(iW.oO), iW.dO, PW(iW.gO), iW.fO, iW.CO, iW.LP, PW(iW.cP), PW(iW.wP)];
      var iW
    }

    function jW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [NW(iW.EL, wW), iW.NL];
      var iW
    }

    function UW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [NW(iW.Ut, (WW => PW(WW))), PW(iW.kt), iW.st];
      var iW
    }

    function kW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [NW(iW.QL, wW), PW(iW.Wc), PW(iW.Oc), iW.mc];
      var iW
    }

    function sW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.NE), PW(iW.PE)];
      var iW
    }

    function MW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.LL)];
      var iW
    }

    function KW(WW) {
      return PW(WW)
    }

    function SW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.et), PW(iW.vt), PW(iW.policy), PW(iW.PL), NW(iW.gt, (WW => PW(WW)))];
      var iW
    }

    function YW(WW) {
      return ZW(WW)
    }

    function yW(WW) {
      return ZW(WW)
    }

    function TW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.Nt)];
      var iW
    }

    function JW(WW) {
      return WW
    }

    function hW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.bt), PW(iW.jt)];
      var iW
    }

    function HW(WW) {
      return PW(WW)
    }

    function nW(WW) {
      return xW(WW)
    }

    function uW(WW) {
      return xW(WW)
    }

    function oW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.rw)];
      var iW
    }

    function dW(WW) {
      return (tW ??= (0, mW.g)().map((WW => WW.name)), tW).map((iW => {
        return "string" === typeof(OW = WW[iW]) ? PW(OW) : NW(OW, wW);
        var OW
      }))
    }

    function eW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [iW.jP, iW.UP, iW.kP];
      var iW
    }
  },
  5981: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      e: () => LW
    });
    var mW = OW(2300),
      EW = OW(5984);
    let NW = null;

    function PW(WW) {
      NW = {
        pack: WW.metaData.id === mW.d ? null : WW
      }
    }

    function LW(WW) {
      return !(null === NW || !(0, EW.c)(NW.pack, WW)) && (NW = null, !0)
    }
  },
  42371: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      followPageUiPack: () => CZ,
      packForGame: () => fZ,
      playWasmGame: () => Wx,
      prefetchWasmPreviews: () => Jw,
      setGamePackConfirm: () => qt,
      startWasmPlay: () => GZ,
      startWasmPreviews: () => Tw
    });
    var mW = OW(182),
      EW = OW(1239),
      NW = OW(154),
      PW = OW(40287),
      LW = OW(2037),
      cW = OW(27),
      wW = OW(5417),
      tW = OW(1339),
      ZW = OW(1822),
      xW = OW(1351),
      lW = OW(40478),
      AW = OW(1301),
      bW = OW(10223),
      jW = OW(172),
      UW = OW(3934),
      kW = OW(1937),
      sW = OW(3974);
    let MW = null,
      KW = null,
      SW = null,
      YW = !1,
      yW = "previews",
      TW = null,
      JW = !1,
      hW = 0;

    function HW(WW) {
      yW = WW
    }

    function nW(WW) {
      var iW;
      const OW = WW instanceof Error ? WW.name : null;
      return null !== (iW = jW.d.find((WW => WW === OW))) && void 0 !== iW ? iW : "other"
    }

    function uW() {
      MW ??= performance.now()
    }

    function oW(WW) {
      KW ??= performance.now(), TW = WW, hW > 0 && dW()
    }

    function dW() {
      null !== KW && null !== TW && (0, AW.p)("wasm_loaded", KW, `${TW}:${(0,UW.m)()}`)
    }
    const eW = {
      ready: () => {
        kW.d.markAdmissionAwaited()
      },
      adEnded: () => {
        kW.d.markJoinAdEnded()
      },
      admitted: () => {
        kW.d.markAdmitted()
      }
    };
    var vW = OW(40491),
      gW = OW(40402),
      DW = OW(37709),
      VW = OW(1584),
      pW = OW(40258),
      fW = OW(10181),
      CW = OW(37727),
      XW = OW(42373),
      BW = OW(5533),
      qW = OW(42109),
      RW = OW(42176),
      GW = OW(42116);
    const IW = {
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
        chatRemoved: !0,
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

    function aW(WW) {
      const iW = {
        ...RW.c[WW]
      };
      for (const OW of Object.keys(IW[WW])) delete iW[OW];
      return iW
    }

    function rW() {
      var WW, iW;
      return null === (WW = null === (iW = (0, qW.f)()) || void 0 === iW ? void 0 : iW.localPlayerAlive()) || void 0 === WW || WW
    }

    function zW() {
      var WW, iW;
      return null !== (WW = null === (iW = (0, qW.f)()) || void 0 === iW ? void 0 : iW.localDeaths()) && void 0 !== WW ? WW : null
    }
    const FW = {
        current: rW,
        watch: WW => {
          let iW = rW(),
            OW = zW();
          return (0, BW.x)((() => {
            const mW = rW(),
              EW = zW(),
              NW = null !== EW && null !== OW && EW !== OW;
            OW = EW, NW ? (iW || WW(!0), WW(!1), mW && WW(!0), iW = mW) : mW !== iW && (iW = mW, WW(mW))
          }))
        }
      },
      QW = {
        states: {
          ...aW("states"),
          localPlayerAlive: FW
        },
        events: {
          ...aW("events"),
          localPlayerAliveSet: {
            watch: FW.watch
          }
        },
        commands: {
          ...aW("commands"),
          respawn: () => {
            var WW;
            null === (WW = (0, qW.f)()) || void 0 === WW || WW.respawn()
          },
          playEmote: WW => {
            var iW;
            null === (iW = (0, qW.f)()) || void 0 === iW || iW.send(GW.e.PlayEmote, (0, GW.I)({
              LL: WW
            }))
          },
          applyTemporaryThirdPerson: WW => {
            var iW;
            let {
              durationMs: OW
            } = WW;
            null === (iW = (0, qW.f)()) || void 0 === iW || iW.thirdPersonFor(OW)
          },
          bindCustomButtonKeys: WW => {
            var iW;
            null === (iW = (0, qW.f)()) || void 0 === iW || iW.bindCustomButtonKeys(WW)
          },
          pressCustomButton: WW => {
            var iW;
            let {
              id: OW,
              down: mW
            } = WW;
            null === (iW = (0, qW.f)()) || void 0 === iW || iW.pressCustomButton(OW, mW)
          },
          setLookSensitivity: () => {},
          wakeUp: WW => {
            const iW = (0, GW.T)({
                rw: WW
              }),
              OW = () => {
                const WW = (0, qW.f)();
                return !(null !== WW && void 0 !== WW && WW.isSessionLive) || WW.send(GW.e.StopSleeping, iW)
              };
            if (!OW()) {
              const WW = (0, BW.x)((() => {
                OW() && WW()
              }))
            }
          },
          setCameraZoom: WW => {
            var iW;
            null === (iW = (0, qW.f)()) || void 0 === iW || iW.setCameraZoom(WW)
          }
        },
        queries: aW("queries"),
        lookups: {
          ...aW("lookups"),
          cameraZoom: () => {
            var WW, iW;
            return null !== (WW = null === (iW = (0, qW.f)()) || void 0 === iW ? void 0 : iW.cameraZoom()) && void 0 !== WW ? WW : 0
          }
        }
      };
    var Wi = OW(40269),
      ii = OW(42307),
      Oi = OW(42309),
      mi = OW(42375),
      Ei = OW(1250),
      Ni = OW(109),
      Pi = OW(5230),
      Li = OW(2423),
      ci = OW(1149);
    const wi = {
      eL: () => (0, Ei.i)(),
      inbuiltOverwritten: () => Pi.g,
      reflectApplyHit: () => ci.b,
      definerHit: () => Ni.currentUrl.c,
      emitReplaced: () => (0, cW.d)(),
      confirmMesh: () => (0, Li.d)(),
      confirmMeshHitStack: () => (0, Li.f)()
    };
    var ti = OW(42316),
      Zi = OW(42388);
    var xi = OW(25),
      li = OW(2042),
      Ai = OW(2085),
      bi = OW(1736),
      ji = OW(2129),
      Ui = OW(1172),
      ki = OW(1244),
      si = OW(37446);

    function Mi() {
      return ki.e.get().getCurrentLanguageCode()
    }

    function Ki(WW) {
      const iW = () => {
        WW({
          translate: (WW, iW) => (0, Ui.t)(Mi(), WW, iW),
          keyBindingText: WW => {
            const iW = (0, Ai.r)(WW, xi.d.get("isTouchScreen"));
            return null !== iW ? (0, Ui.u)(Mi(), iW.translationKey, iW.params) : (0, Ai.m)((0, Ai.n)(WW))
          },
          isFriend: ji.g,
          hiddenNames: li.e.shown,
          loadsFontRest: (0, si.b)(Mi())
        })
      };
      let OW = !1;
      const mW = () => {
          const WW = Mi();
          (0, Ui.i)(WW).then((() => {
            OW || WW !== Mi() || iW()
          }))
        },
        EW = () => bi.e.getSocialState().friends.map((WW => WW.name.toLowerCase())).sort().join(" ");
      let NW = EW();
      iW(), mW();
      const PW = [(0, ki.g)((() => {
        iW(), mW()
      })), (0, cW.n)("customBindingsChanged", iW), (0, cW.n)("appManagerUpdated|isTouchScreen", iW), (0, ji.d)((() => {
        const WW = EW();
        WW !== NW && (NW = WW, iW())
      })), li.e.subscribe(iW)];
      return () => {
        OW = !0;
        for (const WW of PW) WW()
      }
    }
    var Si = OW(1181),
      Yi = OW(5153),
      yi = OW(37998);
    const Ti = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmUnsupported: {
        title: "This browser can\u2019t run Bloxd",
        help: "Update your browser, or try another browser or device.",
        noWebAssemblyHelp: "Turn off your browser\u2019s strict security mode, update it, or try another browser.",
        titleApp: "This device can\u2019t run Bloxd",
        helpApp: "Update your device or try another one to play.",
        memoryTitle: "Bloxd ran out of memory",
        memoryHelp: "Close other tabs or apps, then try again.",
        memoryHelpApp: "Close other apps, then try again.",
        noContextTitle: "3D graphics are turned off",
        noContextHelp: "Turn on hardware acceleration in your browser\u2019s settings, or try another browser.",
        noContextHelpApp: "Restart the app, then try again.",
        graphicsLostTitle: "3D graphics stopped working",
        graphicsLostHelp: "Press your browser\u2019s reload button, or restart your browser.",
        graphicsLostHelpApp: "Restart the app, then try again.",
        noContextStillHelp: "Still off. Turn on hardware acceleration in your browser\u2019s settings, then restart your browser.",
        graphicsLostStillHelp: "Still blocked. Press your browser\u2019s reload button, or restart your browser.",
        stillBlockedHelpApp: "Still blocked. Close the app fully, then open it again."
      },
      wasmScreens: Si.wasmScreens
    };
    let Ji = null;

    function Hi(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === Ji ? function(WW) {
        var iW, OW;
        let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const [EW, NW] = WW.split(":"), PW = null !== (iW = null === (OW = Ti[EW]) || void 0 === OW ? void 0 : OW[NW]) && void 0 !== iW ? iW : WW;
        return PW.replace(/\{\{(\w+)\}\}/g, ((WW, iW) => {
          var OW;
          return null !== (OW = mW[iW]) && void 0 !== OW ? OW : WW
        }))
      }(WW, iW) : Ji(WW, iW)
    }

    function ni(WW, iW) {
      (0, Yi.e)();
      const OW = document.createElement("div");
      OW.setAttribute("role", "alertdialog"), OW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const mW = document.createElement("div");
      mW.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const EW = document.createElement("h2");
      EW.textContent = Hi(WW.title);
      const NW = document.createElement("p");
      if (NW.textContent = Hi(WW.help, WW.helpValues), NW.style.whiteSpace = "pre-line", mW.append(EW, NW), WW.discordLink) {
        const WW = document.createElement("a");
        WW.href = yi.b, WW.target = "_blank", WW.rel = "noreferrer", WW.style.color = "#8ab4ff", WW.textContent = Hi("wasmScreens:reportOnDiscord"), mW.append(WW)
      }
      const PW = document.createElement("div");
      return PW.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", mW.append(PW), OW.append(mW), document.body.append(OW), new Promise((mW => {
        const EW = WW => {
            null === iW || void 0 === iW || iW.removeEventListener("abort", NW), OW.remove(), mW(WW)
          },
          NW = () => {
            EW(!1)
          };
        null === iW || void 0 === iW || iW.addEventListener("abort", NW, {
          once: !0
        });
        const LW = (WW, iW) => {
          const OW = document.createElement("button");
          OW.textContent = Hi(WW), OW.style.cssText = "padding:0.5rem 1.25rem;font:inherit", OW.addEventListener("click", (() => {
            EW(iW)
          })), PW.append(OW)
        };
        null !== WW.cancel && LW(WW.cancel, !1), LW(WW.confirm, !0)
      }))
    }
    var ui = OW(10167),
      oi = OW(649),
      di = OW(1052),
      ei = OW(2066),
      vi = OW(327),
      gi = OW(2381),
      Di = OW(37297),
      Vi = OW(2388),
      fi = OW(39961),
      Ci = OW(5427),
      Xi = OW(42202),
      Bi = OW(698),
      qi = OW(671),
      Ri = OW(696),
      Gi = OW(3995),
      Ii = OW(2061),
      ai = OW(2429),
      ri = OW(4448);
    let zi = null;
    var Fi = OW(1185),
      Qi = OW(1194),
      WO = OW(1943),
      iO = OW(5072),
      OO = OW(5136),
      mO = OW(4659),
      EO = OW(53),
      NO = OW(324),
      PO = OW(315),
      LO = OW(35130),
      cO = OW(299),
      wO = OW(42394),
      tO = OW(5540),
      ZO = OW(5096);
    var xO = OW(5113),
      lO = OW(39);

    function AO(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
      try {
        var OW;
        const mW = iW(),
          EW = WW ? mW.getContext("webgl") : mW.getContext("webgl2");
        return null !== EW && (null === (OW = EW.getExtension("WEBGL_lose_context")) || void 0 === OW || OW.loseContext(), !0)
      } catch {
        return !1
      }
    }
    var bO = OW(1755);
    var jO = OW(38871),
      UO = OW(42402);
    class kO {
      constructor(WW, iW, OW) {
        this.showView = WW, this.holdForAd = iW, this.render = OW
      }
      pointerUnlockRequestsChanged() {
        (0, wO.C)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, wO.t)())
        }]
      }
      setGameViewShown(WW) {
        this.showView(WW)
      }
      setGameView(WW) {
        (0, UO.k)(WW)
      }
      videoAdHold(WW, iW) {
        this.holdForAd(WW, iW)
      }
      gameRender() {
        return this.render()
      }
    }
    class sO {
      leave(WW) {
        ! function(WW) {
          if (null !== (0, xW.d)().websocketUrl) try {
            (0, BW.K)().leaveGame(WW)
          } finally {
            (0, xW.r)({
              websocketUrl: null
            })
          }
        }(WW)
      }
      isReplay() {
        return !1
      }
    }
    class MO {
      constructor(WW) {
        this.workMs = WW
      }
      watchFrameStarts(WW) {
        return (0, BW.r)(WW)
      }
      watchFrames(WW) {
        return (0, BW.o)(WW)
      }
      watchTicks(WW) {
        return (0, BW.x)(WW)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var KO = OW(42358),
      SO = OW(42411);

    function YO(WW) {
      return WW >= 0 ? Math.min(1, WW) : 0
    }

    function yO(WW, iW) {
      const {
        fade: OW
      } = WW;
      return null === OW || iW - OW.at >= OW.ms ? WW.volume : OW.from + (WW.volume - OW.from) * Math.max(0, (iW - OW.at) / OW.ms)
    }

    function TO(WW) {
      const iW = Object.entries(WW),
        OW = new Uint32Array(iW.length);
      let mW = 0;
      for (const [PW, [, LW]] of iW.entries()) OW[PW] = LW.length, mW += LW.length;
      const EW = new Float64Array(3 * mW);
      let NW = 0;
      for (const [, PW] of iW)
        for (const WW of PW) EW.set(WW, NW), NW += 3;
      return {
        blocks: iW.map((WW => {
          let [iW] = WW;
          return iW
        })).join("\0"),
        counts: OW,
        values: EW
      }
    }
    class JO {
      constructor(WW, iW) {
        this.core = WW, this.warn = iW, this.latest = 0
      }
      async feed() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hO;
        const iW = ++this.latest;
        let OW;
        try {
          OW = await WW()
        } catch (mW) {
          return void(this.core.isStopped || iW !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", mW))
        }
        iW === this.latest && (this.core.setBlockColours(OW) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function hO() {
      return TO((await OW.e(234).then((() => OW(35332)))).averageColors)
    }
    var HO = OW(5546),
      nO = OW(5551),
      uO = OW(42158),
      oO = OW(4422),
      dO = OW(37257),
      eO = OW(42259),
      vO = OW(639),
      gO = OW(38208),
      DO = OW(632),
      VO = OW(344),
      pO = OW(42225);
    const fO = [3e4, 12e4, 3e5];
    class CO extends Error {}
    const XO = {
      mobTypes: vO.k,
      vehicleTypes: gO.c,
      mobAiStates: vO.h,
      playerPoses: DO.k
    };
    var BO = OW(42216),
      qO = OW(42240),
      RO = OW(42281),
      GO = OW(1303),
      IO = OW(3930),
      aO = OW(42416),
      rO = OW(42419),
      zO = OW(2458),
      FO = OW(40250),
      QO = OW(5575),
      Wm = OW(3305);
    const im = Wm.y.KeysDisabled | Wm.y.LookFrozen | Wm.y.ClicksSuppressed,
      Om = zO.l;
    var mm = (0, rO.b)("resumingConn");
    class Em {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = WW, this.now = iW, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, mm, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new FO.d({
          reconnect: WW => this.reconnect(WW),
          isLive: () => WW.isLive(),
          onReconnected: iW => {
            this.landed = iW, WW.onReconnected(iW), this.landIfResumed()
          },
          onGaveUp: (iW, OW) => {
            this.abortAttempt(), WW.onGaveUp(iW, OW)
          },
          freeze: iW => {
            WW.gJ(iW), (0, QO.j)(im, iW ? im : 0, "reconnectFreeze")
          },
          releaseSeat: WW => {
            this.releaseSeat(WW)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, aO.d)(this, mm)[mm]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(WW) {
        let {
          conn: iW,
          graceMs: OW,
          sessionBased: mW,
          replayOffer: EW
        } = WW;
        this.session.onInitialInfo(OW, mW), this.isResuming() && (this.initialInfoConn = iW, this.initialInfoOffer = EW, this.landIfResumed())
      }
      onResumeComplete(WW) {
        0 !== WW && (WW === (0, aO.d)(this, mm)[mm] ? ((0, aO.d)(this, mm)[mm] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = WW))
      }
      onDropped(WW) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, aO.d)(this, mm)[mm] = 0, this.session.onConnectionLost(WW)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, aO.d)(this, mm)[mm] = 0, this.session.end()
      }
      reconnect(WW) {
        const iW = this.attempt;
        if (null !== iW && this.awaitingJoinRoom(iW)) return iW.result;
        this.abortAttempt();
        const OW = new AbortController,
          mW = this.drops,
          EW = {
            attachedAt: null
          },
          NW = this.shell.reconnect(WW, OW.signal, (() => {
            EW.attachedAt = this.now()
          })).then((WW => {
            if (this.clearAttempt(PW), this.drops !== mW) throw new Error("the resumed room dropped before its attempt settled");
            return WW
          }), (WW => {
            throw this.clearAttempt(PW), WW
          })),
          PW = {
            abort: OW,
            socket: EW,
            result: NW
          };
        return this.attempt = PW, NW
      }
      clearAttempt(WW) {
        this.attempt === WW && (this.attempt = null)
      }
      abortAttempt() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const iW = this.attempt;
        this.attempt = null, null === iW || void 0 === iW || iW.abort.abort(WW)
      }
      awaitingJoinRoom(WW) {
        const iW = WW.socket.attachedAt;
        return null !== iW && this.now() - iW < Om
      }
      releaseSeat(WW) {
        const iW = this.attempt,
          OW = null !== iW && this.awaitingJoinRoom(iW);
        this.abortAttempt(new ii.t), OW || this.shell.releaseSeat(WW)
      }
      landIfResumed() {
        const WW = this.landed;
        if (null !== WW && WW.conn === this.initialInfoConn) {
          const iW = this.initialInfoOffer && this.completedEarlyConn !== WW.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !iW) return void this.session.onResumed();
          (0, aO.d)(this, mm)[mm] = WW.conn, this.session.onResuming()
        }
      }
    }
    var Nm = OW(40253),
      Pm = OW(42422),
      Lm = OW(37717),
      cm = OW(37711),
      wm = OW(2300),
      tm = OW(2012),
      Zm = OW(4981),
      xm = OW(42266),
      lm = OW(5981);

    function Am(WW) {
      let {
        pack: iW,
        gameSource: OW
      } = WW;
      if (null !== OW && "" !== OW) return `game:${OW}`;
      if (null === iW) return "default";
      const {
        id: mW,
        version: EW
      } = iW.metaData;
      if (mW !== wm.n.CUSTOM) return `${mW}@${EW}`;
      const NW = [];
      for (const PW of [iW.textureOverrides, iW.modelOverrides, iW.animations])
        for (const [WW, iW] of Object.entries(null !== PW && void 0 !== PW ? PW : {})) NW.push(`${WW}:${iW.length}`);
      return `${mW}:${(0,tm.r)(NW.join())}`
    }
    var bm = OW(5126),
      jm = OW(4431),
      Um = OW(42427),
      km = OW(673),
      sm = OW(4433),
      Mm = OW(100),
      Km = OW(4025),
      Sm = OW(4013),
      Ym = OW(5203),
      ym = OW(4987),
      Tm = OW(42301),
      Jm = OW(42292),
      hm = OW(3308),
      Hm = OW(1729),
      nm = OW(1774),
      um = OW(1294),
      om = OW(117),
      dm = OW(284),
      em = OW(40282),
      gm = OW(3310),
      Dm = OW(5568);
    const Vm = new Set([HO.hb.KeyDown, HO.hb.MouseMove, HO.hb.MouseDown, HO.hb.Wheel, HO.hb.TouchStart, HO.hb.TouchMove]);

    function pm(WW) {
      return (WW.shiftKey ? HO.Hb.Shift : 0) | (WW.ctrlKey ? HO.Hb.Ctrl : 0) | (WW.altKey ? HO.Hb.Alt : 0) | (WW.metaKey ? HO.Hb.Meta : 0) | ("repeat" in WW && WW.repeat ? HO.Hb.Repeat : 0) | (WW.isTrusted ? 0 : HO.Hb.Untrusted | function(WW) {
        try {
          const {
            editable: iW,
            outsideView: OW
          } = (0, em.d)(WW.target);
          return (iW ? HO.Hb.UntrustedEditable : 0) | (OW ? HO.Hb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(WW))
    }

    function fm(WW) {
      return "touchOnly" !== (0, om.d)() && "function" === typeof WW.requestPointerLock
    }

    function Cm(WW) {
      return 0 === WW.button ? WW.altKey ? Dm.n["Alt+Left Click"] : Dm.n.Mouse1 : 1 === WW.button ? Dm.n.Mouse2 : Dm.n.Mouse3
    }
    const Xm = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Bm = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      qm = 32768,
      Rm = 1;

    function Gm(WW) {
      return Math.min(Math.max(Math.round(WW), 0), 65535)
    }

    function Im(WW, iW, OW) {
      const mW = [],
        EW = (WW, iW, OW, EW) => {
          const NW = WW => {
            (0, nm.x)(WW) || OW(WW)
          };
          WW.addEventListener(iW, NW, EW), mW.push((() => {
            WW.removeEventListener(iW, NW, EW)
          }))
        },
        NW = {
          capture: !0,
          passive: !0
        },
        PW = (WW, OW, mW, EW, NW) => (!(0, gm.d)() || !Vm.has(WW)) && (iW(WW, OW, mW, EW, NW), !0),
        LW = () => document.pointerLockElement === WW,
        cW = (0, dm.e)(),
        wW = WW => {
          WW.ctrlKey && OW.ctrlCombosAreGames() && !(0, QO.h)(WW.target) && WW.preventDefault()
        },
        tW = (WW, mW, EW) => {
          OW.inspect(WW, mW, !1), iW(HO.hb.KeyUp, mW, 0, 0, (0, hm.q)(EW, WW.timeStamp)), OW.keyReleased(mW)
        },
        ZW = new Map,
        xW = (WW, iW, OW) => WW[OW] || ("AltRight" === iW || "ControlLeft" === iW) && WW.getModifierState("AltGraph"),
        lW = new Map,
        AW = () => {
          ZW.clear(), lW.clear()
        },
        bW = WW => {
          if (WW.isTrusted && document.hasFocus())
            for (const [iW, OW] of lW) lW.delete(iW), xW(WW, iW, OW) || (ZW.delete(iW), tW(WW, Dm.n[iW], pm(WW)))
        };
      WW.tabIndex = -1;
      let jW = 0,
        UW = 0;
      const kW = () => {
        const iW = WW.getBoundingClientRect();
        jW = iW.left, UW = iW.top
      };
      let sW = "mouse";
      const MW = () => !LW() && ("mouse" === sW || !OW.touchUiShown()),
        KW = (WW, iW, OW) => {
          const mW = (Gm(WW.clientX - jW) | Gm(WW.clientY - UW) << 16) >>> 0;
          PW(HO.hb.MouseMove, HO.Lb.Point, iW, OW, mW)
        };
      let SW = !1,
        YW = 0;
      const yW = () => {
        SW && (SW = !1, OW.viewShown() && (0, wO.P)())
      };
      mW.push((() => {
        clearTimeout(YW)
      })), EW(window, "keydown", (WW => {
        "Escape" === WW.key ? (0, wO.H)(!0) : WW.repeat || (0, QO.h)(WW.target) || (SW = !0, clearTimeout(YW), YW = window.setTimeout(yW, 0))
      }), NW), EW(window, "keydown", (WW => {
        yW(), wW(WW), bW(WW);
        const iW = Dm.n[WW.code];
        if ("number" !== typeof iW || !OW.viewShown()) return;
        const mW = (0, QO.h)(WW.target);
        mW || !OW.prevents(iW) && !Xm.has(WW.code) || WW.preventDefault(), WW.repeat || OW.inspect(WW, iW, !0), PW(HO.hb.KeyDown, iW, 0, 0, (0, hm.q)(pm(WW), WW.timeStamp)) && ZW.set(WW.code, iW), mW || OW.keyPressed(iW)
      }), {
        capture: !1,
        passive: !1
      }), EW(window, "keyup", (WW => {
        "Escape" === WW.key && (0, wO.H)(!1), wW(WW), ZW.delete(WW.code), lW.delete(WW.code), bW(WW);
        const iW = Dm.n[WW.code];
        "number" === typeof iW && tW(WW, iW, pm(WW))
      }), {
        capture: !0,
        passive: !1
      }), EW(window, "mousemove", (WW => {
        "mouse" === sW && MW() ? KW(WW, WW.movementX, WW.movementY) : LW() ? PW(HO.hb.MouseMove, HO.Lb.Stamped, WW.movementX, WW.movementY, (0, hm.q)(0, WW.timeStamp)) : PW(HO.hb.MouseMove, 0, WW.movementX, WW.movementY, 0)
      }), NW);
      let TW = 0,
        JW = 0;
      const hW = [];
      let HW = !1,
        nW = !1;
      EW(WW, "mousedown", (WW => {
        if ((0, gm.d)()) return;
        bW(WW);
        const mW = 1 << WW.button;
        if (!LW() && (0, wO.M)() && (0, wO.h)() && (nW = !0, !HW)) return void(TW |= mW);
        TW &= ~mW;
        const EW = WW.button <= 2 ? Cm(WW) : void 0;
        void 0 !== EW && (hW[WW.button] = EW, OW.inspect(WW, EW, !0)), MW() && KW(WW, 0, 0), iW(HO.hb.MouseDown, WW.button, WW.clientX, WW.clientY, (0, hm.q)(pm(WW), WW.timeStamp)), JW |= mW, void 0 !== EW && OW.keyPressed(EW)
      }), NW), EW(window, "mouseup", (WW => {
        var mW;
        bW(WW);
        const EW = 1 << WW.button,
          NW = 0 !== (TW & ~JW & EW);
        if (TW &= ~EW, JW &= ~EW, NW) return;
        const PW = WW.button <= 2 ? null !== (mW = hW[WW.button]) && void 0 !== mW ? mW : Cm(WW) : void 0;
        void 0 !== PW && OW.inspect(WW, PW, !1), iW(HO.hb.MouseUp, WW.button, WW.clientX, WW.clientY, (0, hm.q)(pm(WW), WW.timeStamp)), void 0 !== PW && OW.keyReleased(PW)
      }), NW), EW(WW, "contextmenu", (WW => {
        WW.preventDefault()
      }), {
        passive: !1
      });
      const uW = WW => {
        (LW() || (0, wO.q)() && (0, um.z)()) && (WW.ctrlKey || cW && !document.fullscreenElement) && WW.preventDefault()
      };
      EW(WW, "wheel", (WW => {
        uW(WW), bW(WW), PW(HO.hb.Wheel, WW.deltaMode, WW.deltaX, WW.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const oW = {
          capture: !0,
          passive: !1
        },
        dW = WW => {
          WW ? window.addEventListener("wheel", uW, oW) : window.removeEventListener("wheel", uW, oW)
        };
      dW((0, wO.q)()), mW.push((0, wO.v)(dW)), mW.push((() => {
        dW(!1)
      }));
      const eW = new Map,
        vW = new Set,
        gW = WW => {
          const iW = "stylus" === WW.touchType;
          for (const OW of eW.values())
            if (!OW.touched && (iW || Math.abs(WW.clientX - OW.x) <= Rm && Math.abs(WW.clientY - OW.y) <= Rm)) return OW.touched = !0, !0;
          return !1
        },
        DW = WW => 32767 & WW,
        VW = new Set,
        pW = WW => OW => {
          const mW = (0, hm.q)(pm(OW), OW.timeStamp);
          WW !== HO.hb.TouchStart && WW !== HO.hb.TouchMove || ((WW, OW) => {
            const mW = WW.touches;
            if (mW)
              for (const EW of VW) {
                let WW = !1;
                for (let iW = 0; iW < mW.length && !WW; iW++) WW = DW(mW[iW].identifier) === EW;
                WW || (VW.delete(EW), iW(HO.hb.TouchCancel, EW, 0, 0, OW))
              }
          })(OW, mW);
          const EW = OW.changedTouches;
          for (let iW = 0; iW < EW.length; iW++) {
            const OW = EW[iW];
            if (WW === HO.hb.TouchStart && gW(OW) && vW.add(OW.identifier), vW.has(OW.identifier)) {
              WW !== HO.hb.TouchEnd && WW !== HO.hb.TouchCancel || vW.delete(OW.identifier);
              continue
            }
            const NW = DW(OW.identifier),
              LW = PW(WW, NW, OW.clientX - jW, OW.clientY - UW, mW);
            WW === HO.hb.TouchStart ? LW && VW.add(NW) : WW !== HO.hb.TouchMove && VW.delete(NW)
          }
        },
        fW = pW(HO.hb.TouchStart);
      EW(WW, "touchstart", (WW => {
        WW.preventDefault(), (0, gm.d)() || (OW.touchStarting(), fW(WW))
      }), {
        passive: !1
      }), EW(WW, "touchmove", pW(HO.hb.TouchMove), NW), EW(WW, "touchend", pW(HO.hb.TouchEnd), NW), EW(WW, "touchcancel", pW(HO.hb.TouchCancel), NW);
      const CW = WW => qm | 32767 & WW,
        XW = (WW, iW) => {
          PW(WW, CW(iW.pointerId), iW.clientX - jW, iW.clientY - UW, (0, hm.q)(pm(iW), iW.timeStamp))
        };
      EW(window, "pointerdown", (iW => {
        sW = iW.pointerType, "mouse" === iW.pointerType && iW.target !== WW && OW.viewShown() && (0, wO.S)()
      }), NW), EW(WW, "pointerdown", (WW => {
        "pen" === WW.pointerType && 0 === WW.button && (0, wO.q)() && (0, um.z)() && (WW.preventDefault(), (0, gm.d)() || (eW.set(WW.pointerId, {
          x: WW.clientX,
          y: WW.clientY,
          touched: !1
        }), OW.touchStarting(), XW(HO.hb.TouchStart, WW)))
      }), {
        passive: !1
      }), EW(window, "pointermove", (WW => {
        sW = WW.pointerType, eW.has(WW.pointerId) && XW(HO.hb.TouchMove, WW), "mouse" !== WW.pointerType && MW() && KW(WW, 0, 0)
      }), NW);
      const BW = WW => iW => {
        eW.delete(iW.pointerId) && XW(WW, iW)
      };
      EW(window, "pointerup", BW(HO.hb.TouchEnd), NW), EW(window, "pointercancel", BW(HO.hb.TouchCancel), NW);
      let qW = 0,
        RW = !1;
      const GW = () => {
          qW = 0, RW && OW.coverHeld() || (kW(), OW.resized())
        },
        IW = () => {
          if (RW && OW.coverHeld()) return;
          const WW = OW.sizeCanvas();
          null !== WW && (RW = !0, iW(HO.hb.Resize, 0, WW.cssWidth, WW.cssHeight, (0, hm.i)(WW.renderScale))), kW(), OW.resized(), 0 === qW && (qW = requestAnimationFrame(GW))
        };
      EW(window, "resize", IW, NW), mW.push(OW.watchRenderScale(IW)), mW.push((() => {
        cancelAnimationFrame(qW)
      })), EW(window, "focus", (WW => {
        WW.isTrusted && (iW(HO.hb.Focus, 0, 0, 0, 0), OW.viewShown() && (0, wO.S)())
      }), {
        passive: !0
      });
      const aW = () => {
          (0, wO.H)(!1), TW = 0
        },
        rW = () => {
          VW.clear(), eW.clear(), vW.clear()
        };
      let zW = 0,
        FW = 0;
      EW(window, "blur", (mW => {
        aW(), (0, wO.m)();
        for (const WW of ZW.keys()) {
          const iW = Bm.get(WW);
          void 0 !== iW && lW.set(WW, iW)
        }
        mW.isTrusted && ((WW => {
          for (const [OW, mW] of eW) iW(HO.hb.TouchCancel, CW(OW), mW.x, mW.y, (0, hm.q)(0, WW));
          eW.clear()
        })(mW.timeStamp), iW(HO.hb.Blur, HO.n.KeepTouches, 0, 0, 0)), cW && mW.isTrusted && (clearTimeout(FW), FW = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const WW of ZW.values()) tW(mW, WW, 0);
            AW()
          }
        }), 0)), clearTimeout(zW), zW = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, um.z)() && OW.viewShown() && WW.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), mW.push((() => {
        clearTimeout(zW), clearTimeout(FW)
      })), EW(window, "mousedown", (iW => {
        cW && iW.isTrusted && !document.hasFocus() && (0, um.z)() && OW.viewShown() && (window.focus(), WW.focus({
          preventScroll: !0
        }))
      }), NW), EW(document, "visibilitychange", (() => {
        document.hidden ? (iW(HO.hb.Blur, 0, 0, 0, 0), rW()) : document.hasFocus() && iW(HO.hb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), mW.push((0, gm.j)((() => {
        aW(), iW(HO.hb.Blur, HO.n.Release, 0, 0, 0), OW.keysReleased(), AW(), JW = 0, rW(), iW(HO.hb.Joystick, 0, 0, 0, 0), document.hasFocus() && iW(HO.hb.Focus, 0, 0, 0, 0)
      })));
      const QW = !OW.canLock(),
        Wi = () => QW && !(0, wO.q)() ? HO.lc.Lockless : HO.lc.Released,
        ii = () => {
          LW() && (HW = !1, nW = !1), iW(HO.hb.PointerLock, LW() ? HO.lc.Locked : Wi(), 0, 0, 0), (0, wO.J)(LW())
        };
      return EW(document, "pointerlockchange", ii, {
        passive: !0
      }), EW(document, "pointerlockerror", (() => {
        HW ||= nW, nW = !1, (0, wO.u)()
      }), {
        passive: !0
      }), QW && mW.push((0, wO.v)((() => {
        iW(HO.hb.PointerLock, Wi(), 0, 0, 0)
      }))), IW(), iW(document.hasFocus() ? HO.hb.Focus : HO.hb.Blur, 0, 0, 0, 0), ii(), () => {
        for (const WW of mW.splice(0)) WW()
      }
    }
    var am = OW(4320),
      rm = OW(35167),
      zm = OW(35159),
      Fm = OW(2093);
    const Qm = new Map(Dm.e.map(((WW, iW) => [WW, iW]))),
      WE = ["jump", "primary-fire", "alt-fire"],
      iE = ["primary-fire", "alt-fire"];

    function OE(WW) {
      return `${Fm.c}${WW}`
    }
    const mE = ["forward", "backward", "left", "right", "sprint", "jump"];

    function EE(WW) {
      const iW = [];
      for (const OW of WW) {
        const WW = "string" === typeof OW ? Dm.n[OW] : void 0;
        "number" === typeof WW && iW.push(WW)
      }
      return iW
    }
    class NE {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [WW, iW] of Object.entries(Dm.i)) this.keys.set(WW, iW);
        this.updateKeySets()
      }
      prevents(WW) {
        return this.preventKeys.has(WW)
      }
      moves(WW) {
        return this.movementKeys.has(WW)
      }
      checks(WW, iW) {
        return (iW ? this.checkedDown : this.checkedUp).has(WW)
      }
      sync(WW, iW) {
        for (const [OW, mW] of this.keys) {
          const EW = WW(OE(OW)),
            NW = Array.isArray(EW) ? EE(EW) : Dm.i[OW];
          (NW.length !== mW.length || NW.some(((WW, iW) => WW !== mW[iW]))) && this.bind(OW, NW, iW)
        }
      }
      bind(WW, iW, OW) {
        const mW = Qm.get(WW);
        if (void 0 !== mW) {
          OW(HO.hb.Binding, 0, 0, 0, mW | HO.k.Clear << 8);
          for (const NW of [...iW, ...null !== (EW = Dm.m[WW]) && void 0 !== EW ? EW : []]) {
            var EW;
            OW(HO.hb.Binding, NW, 0, 0, mW | HO.k.Add << 8)
          }
          this.keys.set(WW, iW), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const mW of Dm.q)
          for (const iW of null !== (WW = this.keys.get(Dm.e[mW])) && void 0 !== WW ? WW : []) {
            var WW;
            this.preventKeys.add(iW)
          }
        this.movementKeys.clear();
        for (const mW of mE)
          for (const WW of null !== (iW = this.keys.get(mW)) && void 0 !== iW ? iW : []) {
            var iW;
            this.movementKeys.add(WW)
          }
        for (const [mW, EW] of [
            [this.checkedDown, WE],
            [this.checkedUp, iE]
          ]) {
          mW.clear();
          for (const WW of EW)
            for (const iW of null !== (OW = this.keys.get(WW)) && void 0 !== OW ? OW : []) {
              var OW;
              mW.add(iW)
            }
        }
      }
    }
    var PE = OW(5560),
      LE = OW(37861);
    const cE = "[bloxd-wasm-client]";

    function wE() {
      return "inGame" === xi.d.get("gameState") && !(0, Hm.m)()
    }
    let tE = null;

    function ZE(WW, iW) {
      tE && iW.writePendingInput() && tE.push(function(WW, iW) {
        let OW = "";
        for (const mW of iW) OW += mW.toString(16).padStart(2, "0");
        return OW ? `${WW} ${OW}` : String(WW)
      }(WW, iW.rings.input.written()))
    }
    const xE = [];

    function lE(WW, iW, OW, mW) {
      WW === HO.Q.InputAction && mW === HO.db && xE.push(iW.getUint32(OW, !0))
    }
    var AE = OW(42429),
      bE = OW(248),
      jE = OW(131);
    const UE = new Set(["android", "ios"]);
    let kE = null;

    function sE() {
      return kE ??= function() {
        let WW = null;
        try {
          var iW, OW, mW;
          const EW = document.createElement("canvas"),
            NW = {
              powerPreference: jE.b
            };
          if (WW = null !== (iW = EW.getContext("webgl2", NW)) && void 0 !== iW ? iW : EW.getContext("webgl", NW), !WW) return null;
          const PW = WW.getExtension("WEBGL_debug_renderer_info");
          if (!PW) return "unknown";
          const LW = String(null !== (OW = WW.getParameter(PW.UNMASKED_RENDERER_WEBGL)) && void 0 !== OW ? OW : "");
          return "" === LW ? "unknown" : (0, bE.i)(String(null !== (mW = WW.getParameter(PW.UNMASKED_VENDOR_WEBGL)) && void 0 !== mW ? mW : ""), LW)
        } catch {
          return null
        } finally {
          try {
            var EW, NW;
            null === (EW = WW) || void 0 === EW || null === (NW = EW.getExtension("WEBGL_lose_context")) || void 0 === NW || NW.loseContext()
          } catch {}
        }
      }(), kE
    }

    function ME(WW) {
      const iW = (0, Mm.pageOperatingSystem)();
      return null === iW ? null : function(WW, iW, OW) {
        const mW = "software_adapter" === WW.reason ? null : WW.adapter,
          EW = null === mW || "" === mW.vendor ? null : (0, bE.f)(mW.vendor, mW.architecture);
        return null !== EW && "other_intel" !== EW ? EW : UE.has(iW) ? null : OW()
      }(WW, iW, sE)
    }
    const KE = 6e4,
      SE = 3e5;
    var YE = OW(4901);
    const yE = "wasmJoinWarm",
      TE = 8,
      JE = 64;

    function hE(WW) {
      return "number" === typeof WW && Number.isInteger(WW) && WW >= 0 && WW <= 4294967295
    }

    function HE(WW) {
      if ("object" !== typeof WW || null === WW) return !1;
      const {
        game: iW,
        codes: OW
      } = WW;
      return "string" === typeof iW && "" !== iW && Array.isArray(OW) && OW.every(hE)
    }

    function nE(WW) {
      const iW = WW.getItem(yE);
      return Array.isArray(iW) ? iW.filter(HE).slice(0, TE) : []
    }

    function uE(WW) {
      var iW;
      const OW = nE(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lO.i),
        mW = null === WW ? OW[0] : OW.find((iW => iW.game === WW));
      return Uint32Array.from(null !== (iW = null === mW || void 0 === mW ? void 0 : mW.codes.slice(0, JE)) && void 0 !== iW ? iW : [])
    }
    var oE = OW(42432),
      dE = OW(13);

    function eE(WW, iW) {
      const OW = dE.mb.encode(iW);
      ! function(WW, iW) {
        let OW = iW >= 0 ? 2 * iW : 2 * -iW - 1;
        for (; OW >= 128;) WW.push(OW % 128 | 128), OW = Math.floor(OW / 128);
        WW.push(OW)
      }(WW, OW.length);
      for (const mW of OW) WW.push(mW)
    }
    let vE, gE, DE;
    (() => {
      const WW = ["length", 0, 146, "f", 2, 22, "d", 1, 216, "e", 137, "a", "s", 127, 170, 205, 102, 3, 8, "g", 4, 5, 167, 9, "j", 186, "resolv", "then", "postCo", "okies", null, 184, 60, "=", void 0, 123, 44, 149, "b", 10, 46, 77, 82, 80, 163, !1, !0, ";", "c", 143, 128];

      function iW() {}
      "ZcOEWZ" in iW && function(...iW) {
        tW(iW[WW[0]] = WW[1], iW[WW[11]] = function(...iW) {
          for (tW(iW[WW[0]] = WW[7], iW[-WW[10]] = WW[1], iW[WW[4]] = {}, iW[WW[5]] = WW[1], iW[WW[6]] = WW[1], iW[WW[9]] = WW[1], iW[WW[3]] = iW[WW[1]].length), iW[-WW[2]] = WW[1]; iW[-WW[2]] < iW[WW[3]]; iW[-WW[2]]++) {
            for (tW(iW[WW[4]] = {}, iW[WW[5]] = WW[1], iW[WW[6]] = WW[7]), iW[-WW[8]] = iW[-WW[2]] + WW[7]; iW[-WW[8]] < iW[WW[3]]; iW[-WW[8]]++) iW[WW[1]][iW[-WW[2]]].x !== iW[WW[1]][iW[-WW[8]]].x || iW[WW[1]][iW[-WW[2]]].y !== iW[WW[1]][iW[-WW[8]]].y ? (iW[WW[1]][iW[-WW[2]]].y === iW[WW[1]][iW[-WW[8]]].y ? iW[WW[9]] = Number.MAX_SAFE_INTEGER : iW[WW[9]] = (iW[WW[1]][iW[-WW[2]]].x - iW[WW[1]][iW[-WW[8]]].x) / (iW[WW[1]][iW[-WW[2]]].y - iW[WW[1]][iW[-WW[8]]].y), iW[WW[4]][iW[WW[9]]] || (iW[WW[4]][iW[WW[9]]] = WW[1]), tW(iW[WW[4]][iW[WW[9]]]++, iW[WW[5]] = Math.max(iW[WW[5]], iW[WW[4]][iW[WW[9]]]))) : iW[WW[6]]++;
            tW(iW[WW[5]] += iW[WW[6]], iW[-WW[10]] = Math.max(iW[-WW[10]], iW[WW[5]]))
          }
          return iW[-WW[10]]
        }, console.log(iW[WW[11]]))
      }();
      const mW = (WW[1], dE[WW[12]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + WW[33]),
        EW = (WW[1], dE[WW[12]])("QkFCWUxPTg=="),
        NW = (WW[1], dE[WW[12]])("QW5kZXNpdGU="),
        PW = (WW[1], dE[WW[12]])("U21vb3RoIEdyYW5pdGU="),
        LW = (WW[1], dE[WW[12]])("RGlvcml0ZQ=="),
        cW = async (mW, EW, NW, PW) => {
          "GrjUN_q" in iW && function(...iW) {
            tW(iW[WW[0]] = WW[1], iW[-WW[13]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", iW[WW[14]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", iW[-WW[15]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", iW[-WW[13]].match(iW[WW[14]] + iW[-WW[15]]))
          }();
          const [{
            clientSideServerUrls: LW
          }, {
            HttpPayloadType: cW,
            ["postJsonWithMetricsCookiesAndCustomRespons" + WW[9]]: wW
          }] = await Promise.all([Promise[WW[26] + WW[9]]()[WW[27]](((...mW) => (mW[WW[0]] = WW[1], "BFDXHak" in iW && function(...iW) {
            tW(iW[WW[0]] = WW[1], iW[-WW[25]] = function(...iW) {
              if (tW(iW[WW[0]] = WW[7], iW[WW[11]] = iW[WW[1]].length), iW[WW[11]] < WW[4]) return WW[1];
              if (tW(iW[WW[16]] = Math.max(...iW[WW[1]]), iW[WW[17]] = Math.min(...iW[WW[1]])), iW[WW[16]] === iW[WW[17]]) return WW[1];
              for (tW(iW[WW[20]] = Array(iW[WW[11]] - WW[7]).fill(Number.MAX_SAFE_INTEGER), iW[WW[21]] = Array(iW[WW[11]] - WW[7]).fill(Number.MIN_SAFE_INTEGER), iW[WW[3]] = Math.ceil((iW[WW[16]] - iW[WW[17]]) / (iW[WW[11]] - WW[7])), iW[WW[19]] = WW[1]), iW[WW[18]] = WW[1]; iW[WW[18]] < iW[WW[11]]; iW[WW[18]]++) iW[WW[1]][iW[WW[18]]] !== iW[WW[17]] && iW[WW[1]][iW[WW[18]]] !== iW[WW[16]] && tW(iW[WW[19]] = Math.floor((iW[WW[1]][iW[WW[18]]] - iW[WW[17]]) / iW[WW[3]]), iW[WW[20]][iW[WW[19]]] = Math.min(iW[WW[20]][iW[WW[19]]], iW[WW[1]][iW[WW[18]]]), iW[WW[21]][iW[WW[19]]] = Math.max(iW[WW[21]][iW[WW[19]]], iW[WW[1]][iW[WW[18]]]));
              for (tW(iW[WW[23]] = Number.MIN_SAFE_INTEGER, iW[WW[24]] = iW[WW[17]]), iW[-WW[22]] = WW[1]; iW[-WW[22]] < iW[WW[11]] - WW[7]; iW[-WW[22]]++) iW[WW[20]][iW[-WW[22]]] === Number.MAX_SAFE_INTEGER && iW[WW[21]][iW[-WW[22]]] === Number.MIN_SAFE_INTEGER || tW(iW[WW[23]] = Math.max(iW[WW[23]], iW[WW[20]][iW[-WW[22]]] - iW[WW[24]]), iW[WW[24]] = iW[WW[21]][iW[-WW[22]]]);
              return iW[WW[23]] = Math.max(iW[WW[23]], iW[WW[16]] - iW[WW[24]]), iW[WW[23]]
            }, console.log(iW[-WW[25]]))
          }(), OW(1185)))), Promise[WW[26] + WW[9]]()[WW[27]]((() => OW(1111)))]), ZW = LW.getHttpUrlFromWebSocketUrl(mW.endpoint), xW = mW[WW[28] + WW[29]] === WW[30] ? WW[34] : await mW[WW[28] + WW[29]]();
          await wW("" + ZW + EW, NW, {
            ["retrie" + WW[12]]: PW
          }, cW.blob, xW)
        };
      vE = async (OW, mW) => {
        const EW = function(WW, iW, OW, mW) {
          const EW = [];
          eE(EW, WW), eE(EW, iW), eE(EW, OW);
          for (const NW of mW) EW.push(NW);
          return EW
        }(OW.game, OW.lobby, OW.sessionId, mW);
        try {
          function NW(...iW) {
            iW[WW[0]] = WW[1]
          }
          "V1nPRX" in iW && NW(), await cW(OW, "/persisted/keep-alive", {
            type: "OZ",
            data: EW
          }, WW[17])
        } catch (PW) {
          function wW(...iW) {
            iW[WW[0]] = WW[1]
          }
          "Li6Qpo" in iW && wW(), console.warn(PW)
        }
      };
      const wW = (...iW) => (iW[WW[0]] = WW[4], Object.getOwnPropertyDescriptor(iW[WW[1]], iW[WW[7]]));

      function tW() {
        tW = function() {}
      }
      gE = () => {
        if ((WW[1], dE.M)(), wW(navigator, mW) !== WW[34]) {
          function OW(...iW) {
            tW(iW[WW[0]] = WW[1], iW[WW[11]] = function(...iW) {
              for (tW(iW[WW[0]] = WW[7], iW[WW[7]] = iW[WW[1]].length, iW[WW[4]] = [], iW[-WW[35]] = WW[1], iW[WW[6]] = WW[1], iW[WW[1]].sort(((WW, iW) => WW - iW))), iW[WW[21]] = WW[1]; iW[WW[21]] < iW[WW[7]]; iW[WW[21]]++)
                if (!(iW[WW[21]] > WW[1] && iW[WW[1]][iW[WW[21]]] === iW[WW[1]][iW[WW[21]] - WW[7]]))
                  for (tW(iW[-WW[35]] = iW[WW[21]] + WW[7], iW[WW[6]] = iW[WW[7]] - WW[7]); iW[-WW[35]] < iW[WW[6]];)
                    if (iW[WW[1]][iW[WW[21]]] + iW[WW[1]][iW[-WW[35]]] + iW[WW[1]][iW[WW[6]]] < WW[1]) iW[-WW[35]]++;
                    else if (iW[WW[1]][iW[WW[21]]] + iW[WW[1]][iW[-WW[35]]] + iW[WW[1]][iW[WW[6]]] > WW[1]) iW[WW[6]]--;
              else {
                for (iW[WW[4]].push([iW[WW[1]][iW[WW[21]]], iW[WW[1]][iW[-WW[35]]], iW[WW[1]][iW[WW[6]]]]); iW[-WW[35]] < iW[WW[6]] && iW[WW[1]][iW[-WW[35]]] === iW[WW[1]][iW[-WW[35]] + WW[7]];) iW[-WW[35]]++;
                for (; iW[-WW[35]] < iW[WW[6]] && iW[WW[1]][iW[WW[6]]] === iW[WW[1]][iW[WW[6]] - WW[7]];) iW[WW[6]]--;
                tW(iW[-WW[35]]++, iW[WW[6]]--)
              }
              return iW[WW[4]]
            }, console.log(iW[WW[11]]))
          }
          return "Z30zRg" in iW && OW(), NW
        }
        if (wW(window, EW) === WW[34]) {
          function cW(...iW) {
            function OW() {}
            iW[WW[0]] = WW[1], tW(iW[WW[11]] = function(...iW) {
              for (tW(iW[WW[0]] = WW[4], iW[WW[35]] = WW[1], iW[WW[38]] = WW[1], iW[WW[20]] = new OW(WW[1]), iW[WW[21]] = iW[WW[20]], iW[WW[36]] = iW[WW[1]], iW[-WW[37]] = iW[WW[7]]); iW[WW[36]] !== WW[30] || iW[-WW[37]] !== WW[30];) tW(iW[WW[38]] = (iW[WW[36]] ? iW[WW[36]].val : WW[1]) + (iW[-WW[37]] ? iW[-WW[37]].val : WW[1]) + iW[WW[35]], iW[WW[35]] = Math.floor(iW[WW[38]] / WW[39]), iW[WW[21]].next = new OW(iW[WW[38]] % WW[39]), iW[WW[21]] = iW[WW[21]].next, iW[WW[36]] = iW[WW[36]] ? iW[WW[36]].next : WW[30], iW[-WW[37]] = iW[-WW[37]] ? iW[-WW[37]].next : WW[30]);
              return iW[WW[35]] && (iW[WW[21]].next = new OW(iW[WW[35]])), iW[WW[20]].next
            }, console.log(iW[WW[11]]))
          }
          return "vTQKSoF" in iW && cW(), PW
        }
        return LW
      }, DE = async mW => {
        try {
          function EW(...iW) {
            tW(iW[WW[0]] = WW[1], iW[WW[11]] = function(...iW) {
              for (tW(iW[WW[0]] = WW[7], iW[WW[41]] = iW[WW[1]].length, iW[WW[43]] = [], iW[WW[42]] = WW[1], iW[WW[6]] = WW[1], iW[WW[1]].sort(((WW, iW) => WW - iW))), iW[WW[40]] = WW[1]; iW[WW[40]] < iW[WW[41]]; iW[WW[40]]++)
                if (!(iW[WW[40]] > WW[1] && iW[WW[1]][iW[WW[40]]] === iW[WW[1]][iW[WW[40]] - WW[7]]))
                  for (tW(iW[WW[42]] = iW[WW[40]] + WW[7], iW[WW[6]] = iW[WW[41]] - WW[7]); iW[WW[42]] < iW[WW[6]];)
                    if (iW[WW[1]][iW[WW[40]]] + iW[WW[1]][iW[WW[42]]] + iW[WW[1]][iW[WW[6]]] < WW[1]) iW[WW[42]]++;
                    else if (iW[WW[1]][iW[WW[40]]] + iW[WW[1]][iW[WW[42]]] + iW[WW[1]][iW[WW[6]]] > WW[1]) iW[WW[6]]--;
              else {
                for (iW[WW[43]].push([iW[WW[1]][iW[WW[40]]], iW[WW[1]][iW[WW[42]]], iW[WW[1]][iW[WW[6]]]]); iW[WW[42]] < iW[WW[6]] && iW[WW[1]][iW[WW[42]]] === iW[WW[1]][iW[WW[42]] + WW[7]];) iW[WW[42]]++;
                for (; iW[WW[42]] < iW[WW[6]] && iW[WW[1]][iW[WW[6]]] === iW[WW[1]][iW[WW[6]] - WW[7]];) iW[WW[6]]--;
                tW(iW[WW[42]]++, iW[WW[6]]--)
              }
              return iW[WW[43]]
            }, console.log(iW[WW[11]]))
          }
          "oOZSyH" in iW && EW();
          const PW = gE(),
            {
              retryTransientHttpFailures: LW
            } = await Promise[WW[26] + WW[9]]()[WW[27]](((...mW) => (mW[WW[0]] = WW[1], "f82H6L4" in iW && function(...iW) {
              tW(iW[WW[0]] = WW[1], iW[WW[11]] = function(...OW) {
                return OW[WW[0]] = WW[4], iW[WW[44]]({}, OW[WW[1]], OW[WW[7]])
              }, iW[WW[44]] = function(OW, mW, EW) {
                var NW, PW, LW, cW = {};
                if (OW[mW + EW] !== WW[34]) return OW[mW + EW];
                if (mW === EW) return WW[46];
                for (NW = WW[1]; NW < mW.length; NW++) cW[mW[NW]] === WW[34] && (cW[mW[NW]] = WW[1]), cW[EW[NW]] === WW[34] && (cW[EW[NW]] = WW[1]), tW(cW[mW[NW]]++, cW[EW[NW]]--);
                for (PW in cW)
                  if (cW[PW] !== WW[1]) return OW[mW + EW] = WW[45], WW[45];
                for (LW = WW[7]; LW < mW.length; LW++)
                  if (iW[WW[44]](OW, mW.substr(WW[1], LW), EW.substr(WW[1], LW)) && iW[WW[44]](OW, mW.substr(LW), EW.substr(LW)) || iW[WW[44]](OW, mW.substr(WW[1], LW), EW.substr(EW.length - LW)) && iW[WW[44]](OW, mW.substr(LW), EW.substr(WW[1], EW.length - LW))) return OW[mW + EW] = WW[46], WW[46];
                return OW[mW + EW] = WW[45], WW[45]
              }, console.log(iW[WW[11]]))
            }(), OW(1921))));
          await LW("Block image post", (() => cW(mW, "/images/" + PW + ".png", {
            block: PW
          }, WW[1])), 8e3)
        } catch (NW) {
          function ZW(...iW) {
            iW[WW[0]] = WW[1]
          }
          "MMxanEp" in iW && ZW(), console.error("Block image post failed:", NW)
        }
      }
    })();
    var VE = OW(42379);
    const pE = 1e3 * VE.e.seatReservationSeconds - 3e3;
    class fE {
      constructor(WW) {
        var iW, OW, mW, EW;
        let NW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (iW = NW.wallNow) && void 0 !== iW ? iW : Date.now, this.monoNow = null !== (OW = NW.monoNow) && void 0 !== OW ? OW : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (mW = NW.sleep) && void 0 !== mW ? mW : WO.b, this.follow = new Qi.c(NW.signal);
        const PW = null !== (EW = NW.fetch) && void 0 !== EW ? EW : fetch;
        this.seat = (0, Pm.f)(WW.endpoint, WW.roomName, WW.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (WW, iW) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), PW(WW, iW)),
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
      async take(WW) {
        if ("rematched" === this.use) return;
        (0, Qi.s)(WW);
        const iW = "pending" !== this.request,
          OW = () => {
            this.abort((0, Qi.f)(WW))
          };
        let mW;
        null === WW || void 0 === WW || WW.addEventListener("abort", OW, {
          once: !0
        });
        try {
          mW = await this.seat
        } catch (EW) {
          if ((0, Qi.s)(WW), !iW) throw EW;
          return void(this.use = "lost")
        } finally {
          null === WW || void 0 === WW || WW.removeEventListener("abort", OW)
        }
        if ((0, Qi.s)(WW), !(this.ageMs() > pE)) return this.use = "taken", mW;
        this.use = "renewed"
      }
      async reserveInstead(WW, iW) {
        try {
          return await WW()
        } catch (OW) {
          const EW = this.holdLeftMs();
          if (!(OW instanceof ii.n) || OW.code !== mW.e.duplicateLobbyNameError.code || 0 === EW) throw OW;
          return await this.sleep(EW + 500, iW), WW()
        }
      }
      release() {
        const {
          request: WW,
          use: iW
        } = this, OW = this.holdsNoSeat();
        return this.abort(), "taken" === iW || OW ? null : {
          unused: "unused" === iW ? "abandoned" : iW,
          answered: "answered" === WW,
          sH: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var WW;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const iW = null !== (WW = this.answeredAt) && void 0 !== WW ? WW : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          OW = Math.max(this.wallNow() - iW.wall, this.monoNow() - iW.mono);
        return Math.max(0, 1e3 * VE.e.seatReservationSeconds - OW)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(WW) {
        (0, Qi.i)(this.follow.controller, WW)
      }
    }
    var CE = OW(42440);
    const XE = new Uint8Array(0);
    class BE {
      constructor(WW) {
        if (this.options = WW, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === WW.module) return this.stopped = !0, void WW.fail("no wasm module for the meshing workers");
        WW.loadWorkers().then((WW => {
          if (this.stopped) return;
          const {
            count: iW
          } = WW;
          this.workers = WW;
          for (let OW = 0; OW < iW; OW++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let OW = 0; OW < iW; OW++) this.start(OW)
        }), (WW => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", WW))
        }))
      }
      take(WW, iW, OW) {
        const mW = this.slots[iW];
        if (WW === HO._d.Retire) return void(mW && !mW.gone && (this.endWorker(iW), mW.started = !1, this.giveUp(iW, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const EW = null === mW || void 0 === mW ? void 0 : mW.worker;
        if (!EW || !mW.started) return;
        const NW = OW.byteLength;
        let PW = null;
        WW === HO._d.Mesh && mW.heapRetries > 0 && (mW.heapRetries--, PW = this.pooled(NW, !0)), PW ??= this.buffer(NW), new Uint8Array(PW, 0, NW).set(OW), EW.postMessage({
          type: "job",
          kind: WW,
          bytes: PW,
          len: NW
        }, [PW])
      }
      takeFailedMeshJobs() {
        const WW = this.failedJobs;
        return this.failedJobs = 0, WW
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let WW = 0; WW < this.slots.length; WW++) {
          const iW = this.slots[WW];
          null !== iW.worker && (this.endWorker(WW), iW.startsWithoutResult = 0, iW.trapsWithoutResult = 0, this.tellLost(WW))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let WW = 0; WW < this.slots.length; WW++) this.start(WW)
        }
      }
      stop() {
        this.stopped = !0;
        for (const iW of this.slots) {
          var WW;
          qE(iW), null === (WW = iW.worker) || void 0 === WW || WW.terminate(), iW.worker = null, iW.started = !1
        }
      }
      start(WW) {
        const iW = this.slots[WW],
          {
            module: OW
          } = this.options,
          {
            workers: mW
          } = this;
        if (this.stopped || this.resting || iW.gone || null === OW || null === mW) return;
        if (iW.startsWithoutResult >= 3) return void this.giveUp(WW, "failed to start 3 times in a row", "no meshing worker would start");
        let EW;
        iW.startsWithoutResult++;
        try {
          EW = mW.create()
        } catch (NW) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${WW} did not start`, NW), void this.start(WW)
        }
        iW.worker = EW, EW.onmessage = OW => {
          let {
            data: mW
          } = OW;
          iW.worker === EW && this.onReply(WW, mW)
        }, EW.onmessageerror = () => {
          iW.worker === EW && this.lose(WW, "a reply could not be read")
        }, EW.onerror = OW => {
          OW.preventDefault(), iW.worker === EW && this.lose(WW, OW.message || "its script failed")
        };
        try {
          EW.postMessage({
            type: "start",
            module: OW,
            maxKeptLightStates: mW.maxKeptLightStates
          })
        } catch (NW) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${WW} could not be sent the module`, NW), EW.terminate(), iW.worker = null, void this.start(WW)
        }
        iW.watch = new CE.f(CE.c, (iW => {
          this.lose(WW, (0, CE.g)(iW), (() => {
            this.options.onStartTimeout(iW)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(WW, iW) {
        const OW = this.slots[WW];
        switch (iW.type) {
          case "started":
            qE(OW), OW.started = !0, this.options.write(0, HO.Xd.WorkerStarted, 0, WW, 0, XE);
            break;
          case "lost":
            this.lose(WW, iW.reason);
            break;
          case "memory":
            var mW, EW;
            null === (mW = (EW = this.options).onMemoryStats) || void 0 === mW || mW.call(EW, WW, iW.stats);
            break;
          case "result": {
            const mW = iW.status === HO.ib.Trapped;
            if (0 !== iW.jobId) {
              if (mW) this.countFailedJob(iW.outOfMemory, "light_trap", iW.trap);
              else if (OW.startsWithoutResult = 0, OW.trapsWithoutResult = 0, iW.status === HO.ib.Refused) {
                const OW = function(WW) {
                  if (WW.byteLength < 32) return "(no reason)";
                  const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength),
                    OW = Math.min(iW.getUint32(28, !0), WW.byteLength - 28 - 4);
                  return (new TextDecoder).decode(WW.subarray(32, 32 + OW)).slice(0, 200)
                }(new Uint8Array(iW.bytes, 0, iW.len));
                this.countFailedJob(dO.c.test(OW), "light_refused_input", OW), this.logRefusal(WW, OW)
              }
              iW.status === HO.ib.HeapRefused && (OW.heapRetries = Math.min(OW.heapRetries + 1, 4), this.logHeapRefusal(WW))
            }
            if (this.options.write(iW.jobId, HO.Xd.JobResult, iW.status, WW, iW.workerUs, new Uint8Array(iW.bytes, 0, iW.len)), this.recycle(iW.bytes), iW.spare && this.recycle(iW.spare), !mW) break;
            if (OW.startsWithoutResult = 0, 0 === iW.jobId) {
              this.lose(WW, `the tables trapped its wasm: ${iW.trap}`);
              break
            }
            OW.trapsWithoutResult++;
            const EW = OW.trapsWithoutResult > 6;
            OW.gone ||= EW, this.lose(WW, `a job trapped its wasm: ${iW.trap}`), EW && this.giveUp(WW, `trapped ${OW.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(WW, iW, OW) {
        if (WW) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(iW) || (this.faultsReported.add(iW), this.options.onLightFault(iW, OW));
        this.failedJobs++
      }
      logRefusal(WW, iW) {
        var OW;
        !this.refusals.has(iW) && this.refusals.size >= 16 && (iW = "(other reasons)");
        const mW = (null !== (OW = this.refusals.get(iW)) && void 0 !== OW ? OW : 0) + 1;
        this.refusals.set(iW, mW), (0, tm.w)(mW) && console.warn(`[bloxd-wasm-client] meshing worker ${WW} refused a chunk (${mW} so far for this reason): ${iW}`)
      }
      logHeapRefusal(WW) {
        this.heapRefusals++, (0, tm.w)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${WW} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(WW, iW, OW) {
        const mW = this.slots[WW];
        if (mW.gone = !0, mW.goneFor = {
            why: iW,
            failure: OW
          }, console.warn(`[bloxd-wasm-client] meshing worker ${WW} ${iW}: giving up on it`), this.slots.every((WW => WW.gone))) {
          this.stop();
          const WW = new Set(this.slots.map((WW => {
              var iW;
              return null === (iW = WW.goneFor) || void 0 === iW ? void 0 : iW.failure
            }))),
            iW = this.slots.map(((WW, iW) => {
              var OW, mW;
              return `worker ${iW} ${null!==(OW=null===(mW=WW.goneFor)||void 0===mW?void 0:mW.why)&&void 0!==OW?OW:"went"}`
            }));
          this.options.fail(1 === WW.size ? OW : `no meshing worker is left (${iW.join(", ")})`)
        }
      }
      lose(WW, iW, OW) {
        console.warn(`[bloxd-wasm-client] meshing worker ${WW} was lost: ${iW}`), this.endWorker(WW), this.stopped || (OW ? OW() : this.options.onWorkerLost(iW), this.tellLost(WW), this.start(WW))
      }
      endWorker(WW) {
        var iW, OW, mW;
        const EW = this.slots[WW];
        qE(EW), null === (iW = EW.worker) || void 0 === iW || iW.terminate(), EW.worker = null, EW.heapRetries = 0, null === (OW = (mW = this.options).onMemoryGone) || void 0 === OW || OW.call(mW, WW)
      }
      tellLost(WW) {
        const iW = this.slots[WW];
        iW.started && (iW.started = !1, this.options.write(0, HO.Xd.WorkerLost, 0, WW, 0, XE))
      }
      buffer(WW) {
        var iW;
        return null !== (iW = this.pooled(WW)) && void 0 !== iW ? iW : new ArrayBuffer(Math.max(16384, WW))
      }
      pooled(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = -1;
        for (let EW = 0; EW < this.pool.length; EW++) {
          const mW = this.pool[EW].byteLength;
          mW >= WW && (OW < 0 || (iW ? mW > this.pool[OW].byteLength : mW < this.pool[OW].byteLength)) && (OW = EW)
        }
        if (OW < 0) return null;
        const mW = this.pool[OW];
        return this.pool[OW] = this.pool[this.pool.length - 1], this.pool.pop(), mW
      }
      recycle(WW) {
        this.pool.length < 4 * this.slots.length && WW.byteLength > 0 && WW.byteLength <= 1048576 && this.pool.push(WW)
      }
    }

    function qE(WW) {
      var iW;
      null === (iW = WW.watch) || void 0 === iW || iW.cancel(), WW.watch = null
    }
    var RE = OW(37724),
      GE = OW(42270),
      IE = OW(42448),
      aE = OW(42452),
      rE = (OW(42244), OW(37325)),
      zE = OW(42455),
      FE = OW(42348);

    function QE(WW) {
      const iW = new Uint8Array(WW.length >> 2);
      for (let OW = 0; OW < iW.length; OW++) iW[OW] = WW[4 * OW + 3];
      return iW
    }
    async function WN(WW) {
      const iW = await (0, zE.h)(WW);
      try {
        const {
          width: WW,
          height: OW,
          pixels: mW
        } = (0, FE.m)(iW);
        return {
          width: WW,
          height: OW,
          alpha: QE(mW)
        }
      } finally {
        iW.close()
      }
    }
    class iN {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WN;
        this.session = WW, this.sources = iW, this.warn = OW, this.load = mW, this.nextPoll = 0, this.JA = !1, this.warned = new Set
      }
      drain(WW) {
        if (WW < this.nextPoll) return;
        this.nextPoll = WW + 250;
        const iW = this.session.sunShadowWantedTextures();
        if (iW)
          for (let OW = 0; OW + 1 < iW.length; OW += 2) this.hand(iW[OW], iW[OW + 1]);
        for (const OW of this.session.takeSunShadowWarnings()) this.warn(OW)
      }
      dispose() {
        this.JA = !0
      }
      async hand(WW, iW) {
        var OW, mW, EW, NW, PW;
        let LW, cW = null;
        try {
          if (cW = await this.sources.blockImageUrl(WW), null === cW) throw new Error(`block image ${WW} has no URL`);
          LW = await this.load(cW)
        } catch (tW) {
          var wW;
          const iW = null !== (wW = cW) && void 0 !== wW ? wW : `block image ${WW}`;
          this.warned.has(iW) || (this.warned.add(iW), this.warn(`sun shadow plane texture ${iW} didn't load: its blocks cast no shadow`, tW))
        }
        this.JA || this.session.setSunShadowTexture(WW, iW, null !== (OW = null === (mW = LW) || void 0 === mW ? void 0 : mW.width) && void 0 !== OW ? OW : 0, null !== (EW = null === (NW = LW) || void 0 === NW ? void 0 : NW.height) && void 0 !== EW ? EW : 0, null === (PW = LW) || void 0 === PW ? void 0 : PW.alpha)
      }
    }
    var ON = OW(37436),
      mN = OW(42330),
      EN = OW(42461),
      NN = OW(42463),
      PN = OW(42339),
      LN = OW(42344),
      cN = OW(35270),
      wN = OW(35116),
      tN = OW(42471);
    const ZN = 8192,
      xN = new Set;
    const lN = new Set([...wN.e, "sceneDownload"]);
    var AN = OW(42255),
      bN = OW(42362);
    const jN = [1e3, 4e3],
      UN = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function kN(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UN,
        OW = 0,
        mW = !1,
        EW = null,
        NW = () => {};
      const PW = () => {
        const iW = new AbortController;
        EW = iW, WW.showScreen(iW.signal).then((WW => {
          iW.signal.aborted || (EW === iW && (EW = null), mW ||= !WW, NW())
        }))
      };
      let LW = 0;
      try {
        for (; LW < iW.length;) {
          null === EW && PW();
          const cW = new AbortController;
          if (NW = () => {
              cW.abort()
            }, await WW.sleep(iW[LW], cW.signal), mW) return {
            picked: null,
            tries: OW,
            gaveUp: !1
          };
          cW.signal.aborted || LW++, OW++;
          const wW = await WW.repick();
          if (mW) return {
            picked: null,
            tries: OW,
            gaveUp: !1
          };
          if (null !== wW) return {
            picked: wW,
            tries: OW,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: OW,
          gaveUp: !0
        }
      } finally {
        (() => {
          var WW;
          null === (WW = EW) || void 0 === WW || WW.abort(), EW = null
        })()
      }
    }
    var sN = OW(42479);
    const MN = new Uint8Array(0);
    let KN = null;

    function SN(WW) {
      return {
        aux: HO.bc.AdStart | (WW ? HO.bc.PreventMovement : 0),
        payload: MN
      }
    }
    var YN = OW(3941),
      yN = OW(281);
    const TN = "__bloxdSceneCapture";
    var JN = OW(42482);
    class hN {
      constructor(WW) {
        var iW, OW;
        this.host = WW, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((WW => {
          this.landRequest = WW
        })), this.follow = WW => {
          let iW = WW;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const WW = null === this.requested && null !== iW;
            var OW;
            WW && (null === (OW = iW) || void 0 === OW || OW(null));
            const mW = await this.landing;
            var EW;
            null === mW && WW || (null === (EW = iW) || void 0 === EW || EW(mW))
          })), () => {
            iW = null
          }
        }, this.startRead = (OW = WW.store, OW.keys().then((WW => ({
          own: WW.includes(jm.d),
          oneShot: WW.includes(jm.h)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((WW => {
          let {
            own: iW,
            oneShot: OW
          } = WW;
          this.oneShotStored = OW, (iW || OW) && this.request()
        })), this.channel = (null !== (iW = WW.openChannel) && void 0 !== iW ? iW : jm.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var WW;
        if (null !== this.requested) return this.requested;
        null === (WW = this.channel) || void 0 === WW || WW.close(), this.channel = null;
        const iW = this.oneShotStored;
        return this.requested = function(WW, iW, OW) {
          return new Promise((iW => {
            iW(WW())
          })).catch((WW => (null !== iW && (0, jm.p)(iW), OW(WW), null)))
        }((() => this.host.load(iW).then((WW => (WW.setGamePackConfirm(this.confirm), this.landed = WW, WW)))), iW ? this.host.store : null, this.host.wZ), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var WW;
          return null !== (WW = this.requested) && void 0 !== WW ? WW : null
        }))
      }
      setGamePackConfirm(WW) {
        var iW;
        this.confirm = WW, null === (iW = this.landed) || void 0 === iW || iW.setGamePackConfirm(WW)
      }
    }
    var HN = OW(37260);
    const nN = 216 * HN.d,
      uN = 92 * HN.b,
      oN = 64 * HN.d,
      dN = 16 * HN.d;

    function eN() {
      var WW, iW;
      return null !== (WW = null === (iW = performance.memory) || void 0 === iW ? void 0 : iW.Wk) && void 0 !== WW ? WW : null
    }
    class vN {
      constructor(WW, iW) {
        this.budgetBytes = WW, this.reads = iW, this.estimate = null, this.shedAt = null
      }
      read(WW) {
        var iW;
        const OW = this.reads.storedChunks(),
          mW = this.reads.gpuBytes(),
          EW = Math.max(null !== (iW = this.reads.jsHeapBytes()) && void 0 !== iW ? iW : 0, oN),
          NW = nN + WW + EW + mW + OW * uN;
        this.estimate = {
          wasmBytes: WW,
          jsHeapBytes: EW,
          gpuBytes: mW,
          storedChunks: OW,
          totalBytes: NW
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: WW,
          budgetBytes: iW,
          shedAt: OW
        } = this;
        return !(null === WW || null === iW || WW.totalBytes < iW || null !== OW && WW.totalBytes < OW + dN) && (this.shedAt = WW.totalBytes, !0)
      }
      describe() {
        const {
          estimate: WW,
          budgetBytes: iW
        } = this;
        return null === WW ? null : `estimate ${(0,HN.j)(WW.totalBytes)} MiB of budget ${null===iW?"none":(0,HN.j)(iW)}: wasm ${(0,HN.j)(WW.wasmBytes)} js ${(0,HN.j)(WW.jsHeapBytes)} gpu ${(0,HN.j)(WW.gpuBytes)} chunks ${WW.storedChunks}`
      }
      snapshot() {
        const {
          estimate: WW,
          budgetBytes: iW
        } = this;
        return {
          ...null === WW ? {} : {
            footprintMiB: Number((0, HN.j)(WW.totalBytes)),
            gpuMiB: Number((0, HN.j)(WW.gpuBytes)),
            storedChunks: WW.storedChunks
          },
          footprintBudgetMiB: null === iW ? -1 : Number((0, HN.j)(iW))
        }
      }
    }
    var gN = OW(3866),
      DN = OW(5223),
      VN = OW(37518),
      pN = OW(39133);
    const fN = nO.kb + 1,
      CN = 4096 * fN;
    class XN {
      constructor(WW, iW) {
        this.log = WW, this.take = iW, this.BL = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(WW, iW) {
        const OW = this.take();
        OW.length >= nO.gb && OW[0] > 0 && (0, gN.m)("remesh", `${OW[0]} core records lost to a full log`);
        const mW = this.BL;
        for (let EW = nO.gb; EW + nO.kb <= OW.length; EW += nO.kb) {
          for (let WW = EW; WW < EW + nO.kb; WW++) mW.push(OW[WW]);
          mW.push(WW)
        }
        if (iW || !(mW.length < CN)) {
          for (let iW = 0; iW < mW.length; iW += fN) this.feed(iW, WW);
          mW.length = 0, iW && this.log.frame(WW)
        }
      }
      feed(WW, iW) {
        var OW;
        const mW = this.BL,
          EW = (0, pN.i)(mW[WW + 1], mW[WW + 2], mW[WW + 3]),
          NW = mW[WW + 4],
          PW = mW[WW + nO.kb];
        switch (mW[WW]) {
          case nO.Qb.Edit:
            this.log.edit(EW, PW);
            break;
          case nO.Qb.Sent:
            this.latest.set(EW, NW), this.log.sent(EW, NW, mW[WW + 5], mW[WW + 6], mW[WW + 7], null !== (OW = this.unshown.get(EW)) && void 0 !== OW ? OW : pN.e, PW);
            break;
          case nO.Qb.Done: {
            this.log.received(NW, mW[WW + 5] / 1e3, PW);
            const iW = this.unshown.get(EW);
            void 0 === iW ? this.unshown.set(EW, [NW]) : iW.push(NW);
            break
          }
          case nO.Qb.Failed: {
            const WW = this.latest.get(EW);
            void 0 !== WW && WW !== NW ? this.log.reassign(EW, NW, WW) : this.log.failed(NW), this.ended(EW, NW);
            break
          }
          case nO.Qb.Shown:
            this.log.applied(EW, NW, iW), this.ended(EW, NW);
            break;
          case nO.Qb.Replaced:
            this.log.reassign(EW, NW, mW[WW + 5]), this.ended(EW, NW);
            break;
          case nO.Qb.Emptied:
            this.log.emptied(EW, iW);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${mW[WW]}`)
        }
      }
      ended(WW, iW) {
        this.latest.get(WW) === iW && this.latest.delete(WW);
        const OW = this.unshown.get(WW);
        if (void 0 === OW) return;
        const mW = OW.indexOf(iW);
        mW >= 0 && OW.splice(mW, 1), 0 === OW.length && this.unshown.delete(WW)
      }
    }
    let BN = null;
    var qN = OW(4417),
      RN = OW(40987);
    const GN = "its script failed",
      IN = "the block and item tables did not load",
      aN = new Uint8Array(0);
    class rN {
      constructor(WW) {
        this.options = WW, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.BL = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== WW.module ? WW.write(0, HO.Xd.WorldgenStarted, 0, 0, aN) : this.giveUp()
      }
      take(WW, iW) {
        if (!(this.gone || null === this.worker && null === this.BL))
          if (WW === HO._d.WorldgenSeed) {
            const WW = 0 === iW.byteLength ? null : this.options.decodeSettings(iW);
            null === WW ? this.release() : function(WW, iW) {
              if ((null === WW || void 0 === WW ? void 0 : WW.byteLength) !== iW.byteLength) return !1;
              for (let OW = 0; OW < WW.byteLength; OW++)
                if (WW[OW] !== iW[OW]) return !1;
              return !0
            }(this.seed, iW) || (this.seed = iW.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: WW
            }, []), null !== WW ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (WW === HO._d.Generate) {
          var OW;
          const WW = new DataView(iW.buffer, iW.byteOffset, HO.Sd),
            mW = null !== (OW = this.pool.pop()) && void 0 !== OW ? OW : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: WW.getUint32(0, !0),
            x: WW.getInt32(4, !0),
            y: WW.getInt32(8, !0),
            z: WW.getInt32(12, !0),
            bytes: mW
          }, [mW])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, HO.Xd.WorldgenStarted, 0, 0, aN)))
      }
      stop() {
        var WW;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (WW = this.worker) || void 0 === WW || WW.terminate(), this.worker = null
      }
      post(WW, iW) {
        var OW;
        null !== this.BL ? this.BL.push({
          message: WW,
          transfer: iW
        }) : null === (OW = this.worker) || void 0 === OW || OW.postMessage(WW, iW)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.BL ??= [])
      }
      endWorker() {
        var WW, iW, OW;
        this.endWatch(), null === (WW = this.worker) || void 0 === WW || WW.terminate(), this.worker = null, null === (iW = (OW = this.options).onMemoryGone) || void 0 === iW || iW.call(OW)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((WW => {
          this.createWorker = WW, this.wanted && this.start()
        }), (WW => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(WW))
        })))
      }
      start() {
        const {
          module: WW
        } = this.options, iW = this.createWorker;
        if (this.gone || null === WW || null === iW) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let OW;
        this.startsWithoutResult++;
        try {
          OW = iW()
        } catch (EW) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", EW), this.lastLoss = `it did not start (${String(EW)})`, void this.start()
        }
        this.worker = OW, OW.onmessage = WW => {
          let {
            data: iW
          } = WW;
          this.worker === OW && this.onReply(OW, iW)
        }, OW.onerror = WW => {
          WW.preventDefault(), this.worker === OW && this.lose(WW.message || GN)
        };
        try {
          OW.postMessage({
            type: "start",
            module: WW,
            jZ: mW.f.jZ
          })
        } catch (EW) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", EW), this.lastLoss = `it could not be sent the module (${String(EW)})`, OW.terminate(), this.worker = null, void this.start()
        }
        this.watch = new CE.f(CE.d, (WW => {
          this.lose((0, CE.g)(WW), (() => {
            this.options.onStartTimeout(WW)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(WW, iW) {
        switch (iW.type) {
          case "started": {
            this.endWatch();
            const iW = this.BL;
            if (null === iW) {
              this.coreWaits = !1, this.options.write(0, HO.Xd.WorldgenStarted, 0, 0, aN);
              break
            }
            this.BL = null;
            for (const {
                message: OW,
                transfer: mW
              }
              of iW) WW.postMessage(OW, mW);
            break
          }
          case "lost":
            this.lose(iW.reason);
            break;
          case "memory":
            var OW, mW;
            null === (OW = (mW = this.options).onMemoryStats) || void 0 === OW || OW.call(mW, iW.stats);
            break;
          case "result":
            this.generated = !0, iW.status !== HO.ib.Trapped && (this.startsWithoutResult = 0), this.options.write(iW.ticket, HO.Xd.WorldgenResult, iW.status, iW.workerUs, new Uint8Array(iW.bytes, 0, iW.len)), this.recycle(iW.bytes), iW.spare && this.recycle(iW.spare)
        }
      }
      lose(WW, iW) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${WW}`), this.lastLoss = WW, this.endWorker(), this.gone || (iW ? iW() : this.options.onWorkerLost(WW, this.generated), this.dropHeld(), this.BL = null, this.options.write(0, HO.Xd.WorldgenLost, HO.$d.Lost, 0, aN), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, HO.Xd.WorldgenLost, HO.$d.Gone, 0, aN)
      }
      endWatch() {
        var WW;
        null === (WW = this.watch) || void 0 === WW || WW.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.BL) {
          for (const {
              message: WW
            }
            of this.BL) "generate" === WW.type && this.recycle(WW.bytes);
          this.BL.length = 0
        }
      }
      recycle(WW) {
        this.pool.length < 16 && WW.byteLength > 0 && WW.byteLength <= 16384 && this.pool.push(WW)
      }
    }
    var zN = OW(38911),
      FN = OW(2417),
      QN = OW(42185),
      WP = OW(42491),
      iP = OW(42288);
    const OP = /[(@\s]([^\s(@]+)$/,
      mP = /:\d/;

    function EP(WW, iW) {
      for (let OW = 0; OW + iW.length <= WW.length; OW++) {
        let mW = 0;
        for (; mW < iW.length && WW[OW + mW] === iW[mW];) mW++;
        if (mW === iW.length) return OW
      }
      return -1
    }

    function NP(WW) {
      return "(" === WW || ")" === WW || "@" === WW || "," === WW || " " === WW || "\t" === WW
    }

    function PP(WW, iW) {
      let OW = iW;
      for (; OW > 0 && !NP(WW[OW - 1]);) OW--;
      let mW = iW;
      for (; mW < WW.length && !NP(WW[mW]);) mW++;
      let EW = "";
      for (let NW = OW; NW < mW; NW++) EW += WW[NW];
      return EW
    }
    const LP = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      cP = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      wP = ".user.js";

    function tP(WW, iW) {
      let OW = 0;
      for (; OW < LP.length && LP[OW].origin !== iW[0];) OW++;
      if (OW === LP.length) return iW[0];
      let mW = "";
      for (let PW = iW.index + iW[0].length; PW < WW.length; PW++) mW += WW[PW];
      const EW = (0, dE.m)(dE.Z, cP, [mW]),
        NW = null === EW ? "" : function(WW) {
          let iW = WW.length,
            OW = 0;
          for (; OW < 8 && iW > 8 && WW[iW - 8 + OW] === wP[OW];) OW++;
          8 === OW && (iW -= 8);
          let mW = "",
            EW = !1;
          for (let NW = 0; NW < iW; NW++) {
            let iW = WW[NW];
            "+" === iW ? iW = " " : "%" === iW && (iW = "2" === WW[NW + 1] && "0" === WW[NW + 2] ? " " : "_", NW += 2), -1 !== EP("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", iW) ? (mW += iW, EW = !1) : EW || (mW += "_", EW = !0)
          }
          return mW
        }(EW[1]);
      return "" === NW ? iW[0] : LP[OW].tag + " " + NW
    }

    function ZP(WW, iW) {
      var OW;
      const mW = /[^\n]+/g,
        EW = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        NW = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let PW = null,
        LW = null,
        cW = (0, dE.m)(dE.Z, mW, [WW]);
      for (; null !== cW;) {
        const OW = (0, dE.m)(dE.Z, EW, [cW[0]]),
          wW = null === iW ? -1 : EP(cW[0], iW);
        if (-1 !== wW) {
          if (null !== OW) return tP(cW[0], OW);
          const WW = PP(cW[0], wW),
            iW = (0, dE.m)(dE.Z, OP, [cW[0]]),
            mW = null !== (0, dE.m)(dE.Z, mP, [WW]) ? WW : null === iW ? null : iW[1],
            EW = null === mW ? null : (0, dE.m)(dE.Z, NW, [mW]);
          if (null !== EW && "" !== EW[1]) return EW[1]
        }
        null !== OW && (null === PW ? PW = OW[0] : null === LW && OW[0] !== PW && (LW = OW[0])), cW = (0, dE.m)(dE.Z, mW, [WW])
      }
      return null !== (OW = LW) && void 0 !== OW ? OW : null === PW ? "none" : "own"
    }
    const xP = /:(\d+):(\d+)\)?$/;

    function lP(WW, iW) {
      const OW = (0, dE.m)(dE.Z, xP, [iW]);
      return null === OW ? WW : WW + ":" + OW[1] + ":" + OW[2]
    }

    function AP(WW) {
      const iW = /[^\n]+/g,
        OW = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let mW = null,
        EW = "",
        NW = !1,
        PW = (0, dE.m)(dE.Z, iW, [WW]);
      for (; null !== PW;) {
        const LW = (0, dE.m)(dE.Z, OW, [PW[0]]),
          cW = null === LW ? (0, dE.m)(dE.Z, OP, [PW[0]]) : null,
          wW = null !== cW && null !== (0, dE.m)(dE.Z, mP, [cW[1]]) && 0 !== EP(cW[1], "wasm:") ? cW[1] : null;
        if (null === mW) null !== LW ? (mW = LW[2], EW = LW[4]) : null !== wW && (mW = "");
        else if (null !== LW) {
          if (NW = !0, "" !== LW[1]) return {
            reader: "inline",
            frame: lP("blob", PW[0])
          };
          if (LW[2] !== mW) {
            const WW = "moz-extension" === LW[3] || "safari-web-extension" === LW[3];
            let iW = "";
            for (let OW = 0; OW < LW[5].length && OW < 20; OW++) iW += LW[5][OW];
            return {
              reader: WW ? LW[3] : LW[2],
              frame: lP("" === iW ? "-" : iW, PW[0])
            }
          }
          if (LW[4] !== EW) return {
            reader: "inline",
            frame: lP("inline", PW[0])
          }
        } else if (null !== wW) {
          const WW = -1 !== EP(PW[0], "userscript") || -1 !== EP(PW[0], ".user.js");
          return {
            reader: WW ? "userscript" : "inline",
            frame: lP(WW ? "userscript" : "eval", PW[0])
          }
        }
        PW = (0, dE.m)(dE.Z, iW, [WW])
      }
      const LW = NW ? "own" : "unknown";
      return {
        reader: LW,
        frame: LW
      }
    }

    function bP(WW, iW) {
      return (0, zN.g)(function(WW) {
        if ("string" !== typeof WW || 0 === WW.length) return "-";
        let iW = 2166136261;
        const OW = WW.length < 4096 ? WW.length : 4096;
        for (let EW = 0; EW <= OW; EW++) iW ^= EW === OW ? WW.length : (0, dE.m)(dE.ib, WW, [EW]), iW = iW + (iW << 1) + (iW << 4) + (iW << 7) + (iW << 8) + (iW << 24) >>> 0;
        let mW = "";
        for (let EW = 28; EW >= 0; EW -= 4) mW += "0123456789abcdef" [iW >>> EW & 15];
        return mW
      }(iW), AP(WW).frame)
    }
    const jP = (WW, iW) => WW.includes(iW),
      UP = WW => {
        try {
          return WW()
        } catch {
          return !1
        }
      },
      kP = -1,
      sP = WW => {
        try {
          return WW()
        } catch {
          return kP
        }
      };

    function MP(WW, iW) {
      return {
        probe: (OW, mW, EW) => {
          try {
            return ((OW, mW, EW) => {
              switch (OW) {
                case HO.pc.StackCheck:
                  return iW.stackCheck() ? 1 : 0;
                case HO.pc.ConfirmMesh:
                  return iW.confirmMesh();
                case HO.pc.IndexPassReplaced:
                  return iW.indexPassReplaced() ? 1 : 0;
                case HO.pc.ProductSubChanged:
                  return iW.productSubChanged() ? 1 : 0;
                case HO.pc.RenderStatus:
                  return iW.lt();
                case HO.pc.Held:
                  return iW.BL();
                case HO.pc.PlayerKilledSubs:
                  return iW.playerKilledSubs();
                case HO.Z: {
                  const OW = iW.getComplete();
                  return null === OW ? 0 : (0, dE.m)(dE.A, dE.mb, [OW, new dE.e((0, dE.I)(WW()), mW, EW)]).written
                }
                default:
                  return 0
              }
            })(OW, mW, EW)
          } catch {
            return HO.gc
          }
        }
      }
    }
    class KP {
      constructor(WW) {
        this.write = WW, this.flagsWritten = 0, this.written = (0, dE.p)(null)
      }
      hZ(WW) {
        let {
          flags: iW,
          values: OW
        } = WW;
        for (let mW = 0; mW < OW.length; mW++) this.value(OW[mW][0], OW[mW][1]);
        this.setFlags(iW | HO.e.Ready)
      }
      value(WW, iW) {
        this.written[WW] !== iW && this.write(WW, iW, 0) && (this.written[WW] = iW)
      }
      setFlags(WW) {
        const iW = WW & ~this.flagsWritten;
        0 !== iW && this.write(HO.h.Flags, iW, iW) && (this.flagsWritten |= iW)
      }
      originStackHit() {
        return this.write(HO.h.Flags, HO.e.OriginStackHit, HO.e.OriginStackHit)
      }
    }
    const SP = {
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
      YP = 1e3;
    let yP;
    const TP = ["length", 1, 0, 2, 3, "h", 185, 6, "d", 5, 11, 9, 129, void 0, null, "s", "c3RhY2", "cw==", "a", "b", "c", 8, "g", "e", 83, "i", 10, 46, 1e5, 106, "string", "stack", "name", "m", 224, 7, 4, 167, 193, 227, 229, 161, 138, !1, 27, 16, 249, "wv2afm", "R", 512, "012345", 15, 136, 1023, 36, 63, 128, 12, 92, 137, 255, 182, 32, 26, 24, 18, 17, 19, 64, 65535, !0, 202, 30, "abc", 909522486, 1549556828, 256, 116, "6789AB", "CDEF", "6789ab", "cdef", 20, 139, 59, 183, 55296, 56319, 56320, 57343, 65536, 127, 115, 2047, 192, 31, 2097151, 240, 176, 13, 22, 25, 28, 34, 39, 14, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 186, "p", 121, 144, "/", "f", 147, 135, 67, 77, 105, 74, "w", "(c=ak(<~F$VU'", "9f)~><&85dBPL", "-module/from", "?", "return U[c[c[d(-199)]-b(205)]]||V[ae(", "b(166))];case T.o[c[c[c[d(-199)]+d(-1", "74)]-(c[b(119)]-(c[d(-199)]-163))]+ae", "(b(146))](0)==b(167)?d(-130):-d(-144)", 111, 159, 179, 122, 232, 60, "s=", "=", ";", 109, 37, 38, 201, "o", "functi", "on", "protot", "ype", "decode", "I=", "eTR5bm", "q", "t", "r", "G", "H", "Kd", "chEven", "dispat", "now", "confir", "mMesh", "produc", "k", "player", "Killed", "number", "toString", "get", "v", 80, "None", "En", "tOverw", "ritten", "plete"];

    function JP(...WW) {
      if (WW[TP[0]] = TP[4], WW[TP[2]] === TP[47] + TP[48]) return WW[TP[1]] + WW[TP[3]]
    }

    function hP() {}

    function HP() {
      HP = function() {}
    }
    yP = function(WW) {
      let iW = arguments[TP[0]] > TP[1] && arguments[TP[1]] !== TP[13] ? arguments[TP[1]] : (...WW) => (WW[TP[0]] = TP[2], "IioRqa" in hP && function() {
          var WW = function(...WW) {
            if (HP(WW[TP[0]] = TP[1], WW[TP[1]] = WW[TP[2]].length), WW[TP[1]] < TP[3]) return TP[2];
            if (HP(WW[TP[3]] = Math.max(...WW[TP[2]]), WW[TP[4]] = Math.min(...WW[TP[2]])), WW[TP[3]] === WW[TP[4]]) return TP[2];
            for (HP(WW[TP[8]] = Array(WW[TP[1]] - TP[1]).fill(Number.MAX_SAFE_INTEGER), WW[TP[9]] = Array(WW[TP[1]] - TP[1]).fill(Number.MIN_SAFE_INTEGER), WW[TP[7]] = Math.ceil((WW[TP[3]] - WW[TP[4]]) / (WW[TP[1]] - TP[1])), WW[TP[6]] = TP[2]), WW[TP[5]] = TP[2]; WW[TP[5]] < WW[TP[1]]; WW[TP[5]]++) WW[TP[2]][WW[TP[5]]] !== WW[TP[4]] && WW[TP[2]][WW[TP[5]]] !== WW[TP[3]] && HP(WW[TP[6]] = Math.floor((WW[TP[2]][WW[TP[5]]] - WW[TP[4]]) / WW[TP[7]]), WW[TP[8]][WW[TP[6]]] = Math.min(WW[TP[8]][WW[TP[6]]], WW[TP[2]][WW[TP[5]]]), WW[TP[9]][WW[TP[6]]] = Math.max(WW[TP[9]][WW[TP[6]]], WW[TP[2]][WW[TP[5]]]));
            for (HP(WW[TP[11]] = Number.MIN_SAFE_INTEGER, WW[-TP[12]] = WW[TP[4]]), WW[TP[10]] = TP[2]; WW[TP[10]] < WW[TP[1]] - TP[1]; WW[TP[10]]++) WW[TP[8]][WW[TP[10]]] === Number.MAX_SAFE_INTEGER && WW[TP[9]][WW[TP[10]]] === Number.MIN_SAFE_INTEGER || HP(WW[TP[11]] = Math.max(WW[TP[11]], WW[TP[8]][WW[TP[10]]] - WW[-TP[12]]), WW[-TP[12]] = WW[TP[9]][WW[TP[10]]]);
            return WW[TP[11]] = Math.max(WW[TP[11]], WW[TP[3]] - WW[-TP[12]]), WW[TP[11]]
          };
          console.log(WW)
        }(), TP[14]),
        OW = arguments[TP[0]] > TP[3] && arguments[TP[3]] !== TP[13] ? arguments[TP[3]] : TP[14],
        mW = arguments[TP[0]] > TP[4] && arguments[TP[4]] !== TP[13] ? arguments[TP[4]] : "";
      const EW = window,
        NW = (0, dE[TP[15]])("RXJyb3" + TP[220]),
        PW = (0, dE[TP[15]])(TP[16] + TP[207]),
        LW = (0, dE[TP[15]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        wW = (0, dE[TP[15]])(TP[16] + "tUcmFjZUxpbWl0"),
        tW = (0, dE[TP[15]])("bmF0aXZl"),
        ZW = [(0, dE[TP[15]])("bWFpbi5qcw=="), (0, dE[TP[15]])("aW5kZXguanM="), (0, dE[TP[15]])("dXNlcnNjcmlwdA=="), (0, dE[TP[15]])("Y29udGVudC5q" + TP[17]), (0, dE[TP[15]])("b3B0aW9ucy5q" + TP[17]), (0, dE[TP[15]])("cG9wdXAuanM="), (0, dE[TP[15]])("LnVzZXIuanM="), (0, dE[TP[15]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        xW = (...WW) => {
          WW[TP[0]] = TP[1], "SqknUpj" in hP && function(...WW) {
            HP(WW[TP[0]] = TP[2], WW[TP[18]] = function(...WW) {
              if (HP(WW[TP[0]] = TP[1], WW[TP[18]] = WW[TP[2]].length), WW[TP[18]] < TP[3]) return TP[2];
              if (HP(WW[TP[19]] = Math.max(...WW[TP[2]]), WW[TP[20]] = Math.min(...WW[TP[2]])), WW[TP[19]] === WW[TP[20]]) return TP[2];
              for (HP(WW[TP[8]] = Array(WW[TP[18]] - TP[1]).fill(Number.MAX_SAFE_INTEGER), WW[TP[23]] = Array(WW[TP[18]] - TP[1]).fill(Number.MIN_SAFE_INTEGER), WW[TP[7]] = Math.ceil((WW[TP[19]] - WW[TP[20]]) / (WW[TP[18]] - TP[1])), WW[TP[22]] = TP[2]), WW[TP[21]] = TP[2]; WW[TP[21]] < WW[TP[18]]; WW[TP[21]]++) WW[TP[2]][WW[TP[21]]] !== WW[TP[20]] && WW[TP[2]][WW[TP[21]]] !== WW[TP[19]] && HP(WW[TP[22]] = Math.floor((WW[TP[2]][WW[TP[21]]] - WW[TP[20]]) / WW[TP[7]]), WW[TP[8]][WW[TP[22]]] = Math.min(WW[TP[8]][WW[TP[22]]], WW[TP[2]][WW[TP[21]]]), WW[TP[23]][WW[TP[22]]] = Math.max(WW[TP[23]][WW[TP[22]]], WW[TP[2]][WW[TP[21]]]));
              for (HP(WW[TP[25]] = Number.MIN_SAFE_INTEGER, WW[TP[26]] = WW[TP[20]]), WW[TP[24]] = TP[2]; WW[TP[24]] < WW[TP[18]] - TP[1]; WW[TP[24]]++) WW[TP[8]][WW[TP[24]]] === Number.MAX_SAFE_INTEGER && WW[TP[23]][WW[TP[24]]] === Number.MIN_SAFE_INTEGER || HP(WW[TP[25]] = Math.max(WW[TP[25]], WW[TP[8]][WW[TP[24]]] - WW[TP[26]]), WW[TP[26]] = WW[TP[23]][WW[TP[24]]]);
              return WW[TP[25]] = Math.max(WW[TP[25]], WW[TP[19]] - WW[TP[26]]), WW[TP[25]]
            }, console.log(WW[TP[18]]))
          }();
          const iW = EW[NW],
            OW = iW;
          if (OW[wW] < TP[28]) {
            OW[wW] = TP[28]
          }
          const mW = "string" === typeof(xW = (new iW)[PW]) ? xW : `${xW}`,
            cW = {},
            tW = OW[LW];
          var xW;
          if (typeof tW === TP[215] + TP[216]) {
            function bW(...WW) {
              HP(WW[TP[0]] = TP[2], WW[-TP[29]] = function(WW) {
                var iW, OW, mW, EW, NW = WW.length;
                for (HP(iW = [], OW = TP[2], mW = TP[2], WW.sort(((WW, iW) => WW - iW))), EW = TP[2]; EW < NW; EW++)
                  if (!(EW > TP[2] && WW[EW] === WW[EW - TP[1]]))
                    for (HP(OW = EW + TP[1], mW = NW - TP[1]); OW < mW;)
                      if (WW[EW] + WW[OW] + WW[mW] < TP[2]) OW++;
                      else if (WW[EW] + WW[OW] + WW[mW] > TP[2]) mW--;
                else {
                  for (iW.push([WW[EW], WW[OW], WW[mW]]); OW < mW && WW[OW] === WW[OW + TP[1]];) OW++;
                  for (; OW < mW && WW[mW] === WW[mW - TP[1]];) mW--;
                  HP(OW++, mW--)
                }
                return iW
              }, console.log(WW[-TP[29]]))
            }
            "jGJyx1" in hP && bW(), (0, dE[TP[33]])(tW, iW, [cW])
          }
          const lW = cW[PW],
            AW = WW[TP[2]] ? ZW[TP[0]] : ZW[TP[0]] - TP[1];
          for (let jW = TP[2]; jW < AW; jW++) {
            function UW(...WW) {
              WW[TP[0]] = TP[2]
            }
            if ("ZQzEzd" in hP && UW(), jP(mW, ZW[jW])) {
              function kW(...WW) {
                WW[TP[0]] = TP[2]
              }
              return "qyeepA" in hP && kW(), {
                [TP[31]]: mW,
                [TP[32]]: ZW[jW]
              }
            }
            if (typeof lW === TP[30] && jP(lW, ZW[jW])) return {
              [TP[31]]: lW,
              [TP[32]]: ZW[jW]
            }
          }
          return TP[14]
        },
        lW = (...WW) => (WW[TP[0]] = TP[1], "shgZfp" + TP[33] in hP && function(...WW) {
          HP(WW[TP[0]] = TP[2], WW[TP[37]] = function(...iW) {
            return HP(iW[TP[0]] = TP[3], iW[TP[3]] = [], iW[TP[4]] = iW[TP[2]].length, iW[TP[2]].sort(((WW, iW) => WW - iW)), WW[TP[34]](iW[TP[3]], [], TP[2], iW[TP[4]], iW[TP[2]], iW[TP[1]])), iW[TP[3]]
          }, WW[TP[34]] = function(...iW) {
            if (HP(iW[TP[0]] = TP[7], iW[TP[18]] = TP[14]), !(iW[TP[9]] < TP[2])) {
              if (iW[TP[9]] === TP[2]) return iW[TP[2]].push(iW[TP[1]]);
              for (iW[TP[35]] = iW[TP[3]]; iW[TP[35]] < iW[TP[4]] && !(iW[TP[36]][iW[TP[35]]] > iW[TP[9]]); iW[TP[35]]++) iW[TP[35]] > iW[TP[3]] && iW[TP[36]][iW[TP[35]]] === iW[TP[36]][iW[TP[35]] - TP[1]] || HP(iW[TP[18]] = Array.from(iW[TP[1]]), iW[TP[18]].push(iW[TP[36]][iW[TP[35]]]), WW[TP[34]](iW[TP[2]], iW[TP[18]], iW[TP[35]] + TP[1], iW[TP[4]], iW[TP[36]], iW[TP[9]] - iW[TP[36]][iW[TP[35]]]))
            }
          }, console.log(WW[TP[37]]))
        }(), xW(WW[TP[2]]) !== TP[14]);
      let AW = TP[14],
        bW = TP[14],
        jW = TP[14],
        UW = TP[14];
      const kW = (...WW) => {
        WW[TP[0]] = TP[1];
        try {
          function iW(...WW) {
            HP(WW[TP[0]] = TP[2], WW[TP[44]] = function(...iW) {
              return HP(iW[TP[0]] = TP[1], iW[TP[1]] = []), (iW[TP[2]] === TP[1] || iW[TP[2]] >= TP[36]) && WW[TP[1]](iW[TP[1]], [], iW[TP[2]], TP[2]), iW[TP[1]]
            }, WW[TP[1]] = function(...iW) {
              for (iW[TP[0]] = TP[36], iW[TP[38]] = iW[TP[4]]; iW[TP[38]] < iW[TP[3]]; iW[TP[38]]++) {
                if (iW[TP[1]].length !== iW[TP[38]]) return;
                for (iW[TP[19]] = TP[2]; iW[TP[19]] < iW[TP[3]]; iW[TP[19]]++) WW[TP[41]](iW[TP[1]], [iW[TP[38]], iW[TP[19]]]) && (HP(iW[TP[1]].push([iW[TP[38]], iW[TP[19]]]), WW[TP[1]](iW[TP[2]], iW[TP[1]], iW[TP[3]], iW[TP[38]] + TP[1])), iW[TP[1]].length === iW[TP[3]] && iW[TP[2]].push(WW[TP[8]](iW[TP[1]])), iW[TP[1]].pop())
              }
            }, WW[TP[8]] = function(...WW) {
              for (HP(WW[TP[0]] = TP[1], WW[TP[1]] = [], WW[TP[40]] = WW[TP[2]].length), WW[TP[39]] = TP[2]; WW[TP[39]] < WW[TP[40]]; WW[TP[39]]++)
                for (WW[TP[1]][WW[TP[39]]] = "", WW[TP[36]] = TP[2]; WW[TP[36]] < WW[TP[40]]; WW[TP[36]]++) WW[TP[1]][WW[TP[39]]] += WW[TP[2]][WW[TP[39]]][TP[1]] === WW[TP[36]] ? "Q" : ".";
              return WW[TP[1]]
            }, WW[TP[41]] = function(...WW) {
              for (HP(WW[TP[0]] = TP[3], WW[TP[18]] = WW[TP[2]].length), WW[-TP[42]] = TP[2]; WW[-TP[42]] < WW[TP[18]]; WW[-TP[42]]++) {
                if (WW[TP[2]][WW[-TP[42]]][TP[2]] === WW[TP[1]][TP[2]] || WW[TP[2]][WW[-TP[42]]][TP[1]] === WW[TP[1]][TP[1]]) return TP[43];
                if (Math.abs((WW[TP[2]][WW[-TP[42]]][TP[2]] - WW[TP[1]][TP[2]]) / (WW[TP[2]][WW[-TP[42]]][TP[1]] - WW[TP[1]][TP[1]])) === TP[1]) return TP[43]
              }
              return TP[70]
            }, console.log(WW[TP[44]]))
          }
          return "gZRZrcL" in hP && iW(), WW[TP[2]]()
        } catch {
          function OW(...WW) {
            HP(WW[TP[0]] = TP[2], WW[TP[66]] = function() {
              var WW, iW, OW = TP[2];

              function mW(...iW) {
                return iW[TP[0]] = TP[3],
                  function(iW) {
                    var OW, mW, EW, NW;
                    for (HP(OW = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mW = "", EW = iW.length), NW = TP[2]; NW < EW; NW += TP[4]) {
                      var PW, LW = iW.charCodeAt(NW) << TP[45] | (NW + TP[1] < EW ? iW.charCodeAt(NW + TP[1]) << TP[21] : TP[2]) | (NW + TP[3] < EW ? iW.charCodeAt(NW + TP[3]) : TP[2]);
                      for (PW = TP[2]; PW < TP[36]; PW++) NW * TP[21] + PW * TP[7] > iW.length * TP[21] ? mW += WW : mW += OW.charAt(LW >>> TP[7] * (TP[4] - PW) & TP[55])
                    }
                    return mW
                  }(NW(LW(iW[TP[2]]), LW(iW[TP[1]])))
              }

              function EW(...WW) {
                return WW[TP[0]] = TP[4],
                  function(...WW) {
                    var iW, OW, mW, EW;
                    for (HP(WW[TP[0]] = TP[3], WW[TP[18]] = WW[TP[1]].length, WW[TP[4]] = Array()), WW[TP[36]] = Array(Math.ceil(WW[TP[2]].length / TP[3])), iW = TP[2]; iW < WW[TP[36]].length; iW++) WW[TP[36]][iW] = WW[TP[2]].charCodeAt(iW * TP[3]) << TP[21] | WW[TP[2]].charCodeAt(iW * TP[3] + TP[1]);
                    for (; WW[TP[36]].length > TP[2];) {
                      for (HP(EW = Array(), mW = TP[2]), iW = TP[2]; iW < WW[TP[36]].length; iW++) HP(mW = (mW << TP[45]) + WW[TP[36]][iW], OW = Math.floor(mW / WW[TP[18]]), mW -= OW * WW[TP[18]]), (EW.length > TP[2] || OW > TP[2]) && (EW[EW.length] = OW);
                      HP(WW[TP[4]][WW[TP[4]].length] = mW, WW[TP[36]] = EW)
                    }
                    for (WW[TP[8]] = "", iW = WW[TP[4]].length - TP[1]; iW >= TP[2]; iW--) WW[TP[8]] += WW[TP[1]].charAt(WW[TP[4]][iW]);
                    for (WW[-TP[52]] = Math.ceil(WW[TP[2]].length * TP[21] / (Math.log(WW[TP[1]].length) / Math.log(TP[3]))), iW = WW[TP[8]].length; iW < WW[-TP[52]]; iW++) WW[TP[8]] = WW[TP[1]][TP[2]] + WW[TP[8]];
                    return WW[TP[8]]
                  }(NW(LW(WW[TP[2]]), LW(WW[TP[1]])), WW[TP[3]])
              }

              function NW(...WW) {
                HP(WW[TP[0]] = TP[3], WW[TP[3]] = cW(WW[TP[2]])), WW[TP[3]].length > TP[45] && (WW[TP[3]] = kW(WW[TP[3]], WW[TP[2]].length * TP[21]));
                var iW = Array(TP[45]),
                  OW = Array(TP[45]);
                for (WW[TP[4]] = TP[2]; WW[TP[4]] < TP[45]; WW[TP[4]]++) HP(iW[WW[TP[4]]] = WW[TP[3]][WW[TP[4]]] ^ TP[74], OW[WW[TP[4]]] = WW[TP[3]][WW[TP[4]]] ^ TP[75]);
                return WW[TP[46]] = kW(iW.concat(cW(WW[TP[1]])), TP[49] + WW[TP[1]].length * TP[21]), wW(kW(OW.concat(WW[TP[46]]), JP(TP[47] + TP[48], TP[49], TP[76])))
              }

              function PW(...WW) {
                for (WW[TP[0]] = TP[1], HP(WW[TP[1]] = OW ? TP[50] + TP[78] + TP[79] : TP[50] + TP[80] + TP[81], WW[TP[19]] = "", WW[TP[20]] = TP[13]), WW[TP[8]] = TP[2]; WW[TP[8]] < WW[TP[2]].length; WW[TP[8]]++) HP(WW[TP[20]] = WW[TP[2]].charCodeAt(WW[TP[8]]), WW[TP[19]] += WW[TP[1]].charAt(WW[TP[20]] >>> TP[36] & TP[51]) + WW[TP[1]].charAt(WW[TP[20]] & TP[51]));
                return WW[TP[19]]
              }

              function LW(...WW) {
                var iW, OW;
                for (HP(WW[TP[0]] = TP[1], WW[TP[54]] = "", WW[TP[3]] = -TP[1]); ++WW[TP[3]] < WW[TP[2]].length;) HP(iW = WW[TP[2]].charCodeAt(WW[TP[3]]), OW = WW[TP[3]] + TP[1] < WW[TP[2]].length ? WW[TP[2]].charCodeAt(WW[TP[3]] + TP[1]) : TP[2]), TP[86] <= iW && iW <= TP[87] && TP[88] <= OW && OW <= TP[89] && HP(iW = TP[90] + ((iW & TP[53]) << TP[26]) + (OW & TP[53]), WW[TP[3]]++), iW <= TP[91] ? WW[TP[54]] += String.fromCharCode(iW) : iW <= TP[93] ? WW[TP[54]] += String.fromCharCode(TP[94] | iW >>> TP[7] & TP[95], TP[56] | iW & TP[55]) : iW <= TP[69] ? WW[TP[54]] += String.fromCharCode(TP[34] | iW >>> TP[57] & TP[51], TP[56] | iW >>> TP[7] & TP[55], TP[56] | iW & TP[55]) : iW <= TP[96] && (WW[TP[54]] += String.fromCharCode(TP[97] | iW >>> TP[65] & TP[35], TP[56] | iW >>> TP[57] & TP[55], TP[56] | iW >>> TP[7] & TP[55], TP[56] | iW & TP[55]));
                return WW[TP[54]]
              }

              function cW(...WW) {
                for (HP(WW[TP[0]] = TP[1], WW[TP[1]] = Array(WW[TP[2]].length >> TP[3])), WW[-TP[61]] = TP[2]; WW[-TP[61]] < WW[TP[1]].length; WW[-TP[61]]++) WW[TP[1]][WW[-TP[61]]] = TP[2];
                for (WW[-TP[61]] = TP[2]; WW[-TP[61]] < WW[TP[2]].length * TP[21]; WW[-TP[61]] += TP[21]) WW[TP[1]][WW[-TP[61]] >> TP[9]] |= (WW[TP[2]].charCodeAt(WW[-TP[61]] / TP[21]) & TP[60]) << TP[64] - WW[-TP[61]] % TP[62];
                return WW[TP[1]]
              }

              function wW(...WW) {
                for (HP(WW[TP[0]] = TP[1], WW[-TP[63]] = ""), WW[TP[36]] = TP[2]; WW[TP[36]] < WW[TP[2]].length * TP[62]; WW[TP[36]] += TP[21]) WW[-TP[63]] += String.fromCharCode(WW[TP[2]][WW[TP[36]] >> TP[9]] >>> TP[64] - WW[TP[36]] % TP[62] & TP[60]);
                return WW[-TP[63]]
              }

              function tW(...WW) {
                return WW[TP[0]] = TP[3], WW[TP[2]] >>> WW[TP[1]] | WW[TP[2]] << TP[62] - WW[TP[1]]
              }

              function ZW(...WW) {
                return WW[TP[0]] = TP[3], WW[TP[2]] >>> WW[TP[1]]
              }

              function xW(...WW) {
                return WW[TP[0]] = TP[4], WW[TP[2]] & WW[TP[1]] ^ ~WW[TP[2]] & WW[TP[3]]
              }

              function lW(...WW) {
                return WW[TP[0]] = TP[4], WW[TP[2]] & WW[TP[1]] ^ WW[TP[2]] & WW[TP[3]] ^ WW[TP[1]] & WW[TP[3]]
              }

              function AW(WW) {
                return tW(WW, TP[3]) ^ tW(WW, TP[99]) ^ tW(WW, TP[100])
              }

              function bW(...WW) {
                return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[7]) ^ tW(WW[TP[2]], TP[10]) ^ tW(WW[TP[2]], TP[101])
              }

              function jW(WW) {
                return tW(WW, TP[35]) ^ tW(WW, TP[65]) ^ ZW(WW, TP[4])
              }

              function UW(...WW) {
                return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[66]) ^ tW(WW[TP[2]], TP[67]) ^ ZW(WW[TP[2]], TP[26])
              }

              function kW(WW, OW) {
                var mW, EW, NW, PW, LW, cW, wW, tW, ZW, kW, MW, KW, SW, YW = new Array(TP[172], -TP[173], TP[174], -TP[175], TP[176], -TP[177], TP[178], TP[179]);
                for (mW = new Array(TP[68]), HP(WW[OW >> TP[9]] |= TP[56] << TP[64] - OW % TP[62], WW[(OW + TP[68] >> TP[11] << TP[36]) + TP[51]] = OW), kW = TP[2]; kW < WW.length; kW += TP[45]) {
                  for (HP(EW = YW[TP[2]], NW = YW[TP[1]], PW = YW[TP[3]], LW = YW[TP[4]], cW = YW[TP[36]], wW = YW[TP[9]], tW = YW[TP[7]], ZW = YW[TP[35]]), MW = TP[2]; MW < TP[68]; MW++) HP(mW[MW] = MW < TP[45] ? WW[MW + kW] : sW(sW(sW(UW(mW[MW - TP[3]]), mW[MW - TP[35]]), jW(mW[MW - TP[51]])), mW[MW - TP[45]]), KW = sW(sW(sW(sW(ZW, bW(cW)), xW(cW, wW, tW)), iW[MW]), mW[MW]), SW = sW(AW(EW), lW(EW, NW, PW)), ZW = tW, tW = wW, wW = cW, cW = sW(LW, KW), LW = PW, PW = NW, NW = EW, EW = sW(KW, SW));
                  HP(YW[TP[2]] = sW(EW, YW[TP[2]]), YW[TP[1]] = sW(NW, YW[TP[1]]), YW[TP[3]] = sW(PW, YW[TP[3]]), YW[TP[4]] = sW(LW, YW[TP[4]]), YW[TP[36]] = sW(cW, YW[TP[36]]), YW[TP[9]] = sW(wW, YW[TP[9]]), YW[TP[7]] = sW(tW, YW[TP[7]]), YW[TP[35]] = sW(ZW, YW[TP[35]]))
                }
                return YW
              }

              function sW(...WW) {
                return HP(WW[TP[0]] = TP[3], WW[TP[3]] = (WW[TP[2]] & TP[69]) + (WW[TP[1]] & TP[69]), WW[TP[19]] = (WW[TP[2]] >> TP[45]) + (WW[TP[1]] >> TP[45]) + (WW[TP[3]] >> TP[45])), WW[TP[19]] << TP[45] | WW[TP[3]] & TP[69]
              }
              return WW = "", iW = new Array(TP[108], TP[109], -TP[110], -TP[111], TP[112], TP[113], -TP[114], -TP[115], -TP[116], TP[117], TP[118], TP[119], TP[120], -TP[121], -TP[122], -TP[123], -TP[124], -TP[125], TP[126], TP[127], TP[128], TP[129], TP[130], TP[131], -TP[132], -TP[133], -TP[134], -TP[135], -TP[136], -TP[137], TP[138], TP[139], TP[140], TP[141], TP[142], TP[143], TP[144], TP[145], -TP[146], -TP[147], -TP[148], -TP[149], -TP[150], -TP[151], -TP[152], -TP[153], -TP[154], TP[155], TP[156], TP[157], TP[158], TP[159], TP[160], TP[161], TP[162], TP[163], TP[164], TP[165], -TP[166], -TP[167], -TP[168], -TP[169], -TP[170], -TP[171]), {
                hex: function(WW) {
                  return PW(function(...WW) {
                    return WW[TP[0]] = TP[1], wW(kW(cW(WW[TP[2]]), WW[TP[2]].length * TP[21]))
                  }(LW(WW)))
                },
                b64: mW,
                any: EW,
                hex_hmac: function(WW, iW) {
                  return PW(NW(LW(WW), LW(iW)))
                },
                b64_hmac: mW,
                any_hmac: EW
              }
            }(), console.log(WW[TP[66]]))
          }
          return "SVK22x" + TP[226] in hP && OW(), TP[70]
        }
      };
      let sW = TP[43];
      const MW = () => {
          "yViyOQ" in hP && function(...WW) {
            HP(WW[TP[0]] = TP[2], WW[TP[23]] = function(...WW) {
              for (HP(WW[TP[0]] = TP[1], WW[TP[18]] = TP[2], WW[TP[3]] = {}, WW[TP[4]] = TP[2], WW[TP[36]] = TP[2], WW[TP[23]] = TP[2], WW[TP[7]] = WW[TP[2]].length), WW[TP[22]] = TP[2]; WW[TP[22]] < WW[TP[7]]; WW[TP[22]]++) {
                for (HP(WW[TP[3]] = {}, WW[TP[4]] = TP[2], WW[TP[36]] = TP[1]), WW[TP[21]] = WW[TP[22]] + TP[1]; WW[TP[21]] < WW[TP[7]]; WW[TP[21]]++) WW[TP[2]][WW[TP[22]]].x !== WW[TP[2]][WW[TP[21]]].x || WW[TP[2]][WW[TP[22]]].y !== WW[TP[2]][WW[TP[21]]].y ? (WW[TP[2]][WW[TP[22]]].y === WW[TP[2]][WW[TP[21]]].y ? WW[TP[23]] = Number.MAX_SAFE_INTEGER : WW[TP[23]] = (WW[TP[2]][WW[TP[22]]].x - WW[TP[2]][WW[TP[21]]].x) / (WW[TP[2]][WW[TP[22]]].y - WW[TP[2]][WW[TP[21]]].y), WW[TP[3]][WW[TP[23]]] || (WW[TP[3]][WW[TP[23]]] = TP[2]), HP(WW[TP[3]][WW[TP[23]]]++, WW[TP[4]] = Math.max(WW[TP[4]], WW[TP[3]][WW[TP[23]]]))) : WW[TP[36]]++;
                HP(WW[TP[4]] += WW[TP[36]], WW[TP[18]] = Math.max(WW[TP[18]], WW[TP[4]]))
              }
              return WW[TP[18]]
            }, console.log(WW[TP[23]]))
          }(), !sW && (0, dE[TP[192]])() && (sW = TP[70])
        },
        KW = (...WW) => {
          WW[TP[0]] = TP[1];
          try {
            function iW(...WW) {
              HP(WW[TP[0]] = TP[2], WW[TP[71]] = TP[193] + TP[194] + TP[195], WW[-TP[72]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + TP[196], WW[TP[20]] = TP[197] + TP[198] + TP[199] + TP[200], WW[TP[71]].match(WW[-TP[72]] + WW[TP[20]]))
            }
            return "Zt69Vm" in hP && iW(), WW[TP[2]]()
          } catch {
            return "jfNPwh" in hP && (module.exports = async (WW = () => {
              throw new Error("No redacted path provided")
            }) => {
              const iW = new Set(process.argv.slice(TP[3]));
              if (!iW.has("--version")) {
                if (iW.size !== TP[1]) return TP[43];
                if (!iW.has("-v")) return TP[43]
              }
              return await (async () => void 0 === await WW() ? " (local)" : "")(), TP[70]
            }), TP[13]
          }
        },
        SW = (...WW) => {
          WW[TP[0]] = TP[1], "ToNfQtA" in hP && function(...WW) {
            WW[TP[0]] = TP[2]
          }();
          try {
            function iW(...WW) {
              HP(WW[TP[0]] = TP[2], WW[-TP[180]] = function(...WW) {
                function OW(WW, iW) {
                  return PW(EW(LW(WW), LW(iW)))
                }

                function mW(...WW) {
                  return WW[TP[0]] = TP[4],
                    function(...WW) {
                      var iW, OW, mW, EW;
                      for (HP(WW[TP[0]] = TP[3], WW[TP[18]] = WW[TP[1]].length, WW[TP[83]] = Array()), WW[TP[36]] = Array(Math.ceil(WW[TP[2]].length / TP[3])), iW = TP[2]; iW < WW[TP[36]].length; iW++) WW[TP[36]][iW] = WW[TP[2]].charCodeAt(iW * TP[3]) << TP[21] | WW[TP[2]].charCodeAt(iW * TP[3] + TP[1]);
                      for (; WW[TP[36]].length > TP[2];) {
                        for (HP(EW = Array(), mW = TP[2]), iW = TP[2]; iW < WW[TP[36]].length; iW++) HP(mW = (mW << TP[45]) + WW[TP[36]][iW], OW = Math.floor(mW / WW[TP[18]]), mW -= OW * WW[TP[18]]), (EW.length > TP[2] || OW > TP[2]) && (EW[EW.length] = OW);
                        HP(WW[TP[83]][WW[TP[83]].length] = mW, WW[TP[36]] = EW)
                      }
                      for (WW[TP[9]] = "", iW = WW[TP[83]].length - TP[1]; iW >= TP[2]; iW--) WW[TP[9]] += WW[TP[1]].charAt(WW[TP[83]][iW]);
                      for (WW[-TP[84]] = Math.ceil(WW[TP[2]].length * TP[21] / (Math.log(WW[TP[1]].length) / Math.log(TP[3]))), iW = WW[TP[9]].length; iW < WW[-TP[84]]; iW++) WW[TP[9]] = WW[TP[1]][TP[2]] + WW[TP[9]];
                      return WW[TP[9]]
                    }(EW(LW(WW[TP[2]]), LW(WW[TP[1]])), WW[TP[3]])
                }

                function EW(...WW) {
                  HP(WW[TP[0]] = TP[3], WW[TP[18]] = cW(WW[TP[2]])), WW[TP[18]].length > TP[45] && (WW[TP[18]] = kW(WW[TP[18]], WW[TP[2]].length * TP[21]));
                  var iW = Array(TP[45]),
                    OW = Array(TP[45]);
                  for (WW[TP[4]] = TP[2]; WW[TP[4]] < TP[45]; WW[TP[4]]++) HP(iW[WW[TP[4]]] = WW[TP[18]][WW[TP[4]]] ^ TP[74], OW[WW[TP[4]]] = WW[TP[18]][WW[TP[4]]] ^ TP[75]);
                  return WW[TP[36]] = kW(iW.concat(cW(WW[TP[1]])), TP[49] + WW[TP[1]].length * TP[21]), wW(kW(OW.concat(WW[TP[36]]), JP(TP[47] + TP[48], TP[49], TP[76])))
                }

                function NW(...OW) {
                  OW[TP[0]] = TP[1];
                  try {
                    WW[TP[77]]
                  } catch (iW) {
                    WW[TP[77]] = TP[2]
                  }
                  for (HP(OW[TP[82]] = WW[TP[77]] ? TP[50] + TP[78] + TP[79] : TP[50] + TP[80] + TP[81], OW[-TP[52]] = "", OW[TP[20]] = TP[13]), OW[TP[36]] = TP[2]; OW[TP[36]] < OW[TP[2]].length; OW[TP[36]]++) HP(OW[TP[20]] = OW[TP[2]].charCodeAt(OW[TP[36]]), OW[-TP[52]] += OW[TP[82]].charAt(OW[TP[20]] >>> TP[36] & TP[51]) + OW[TP[82]].charAt(OW[TP[20]] & TP[51]));
                  return OW[-TP[52]]
                }

                function PW(iW) {
                  var OW, mW, NW, PW;
                  try {
                    WW[TP[1]]
                  } catch (EW) {
                    WW[TP[1]] = ""
                  }
                  for (HP(OW = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + TP[184], mW = "", NW = iW.length), PW = TP[2]; PW < NW; PW += TP[4]) {
                    var LW, cW = iW.charCodeAt(PW) << TP[45] | (PW + TP[1] < NW ? iW.charCodeAt(PW + TP[1]) << TP[21] : TP[2]) | (PW + TP[3] < NW ? iW.charCodeAt(PW + TP[3]) : TP[2]);
                    for (LW = TP[2]; LW < TP[36]; LW++) PW * TP[21] + LW * TP[7] > iW.length * TP[21] ? mW += WW[TP[1]] : mW += OW.charAt(cW >>> TP[7] * (TP[4] - LW) & TP[55])
                  }
                  return mW
                }

                function LW(...WW) {
                  var iW, OW;
                  for (HP(WW[TP[0]] = TP[1], WW[TP[92]] = "", WW[TP[85]] = -TP[1]); ++WW[TP[85]] < WW[TP[2]].length;) HP(iW = WW[TP[2]].charCodeAt(WW[TP[85]]), OW = WW[TP[85]] + TP[1] < WW[TP[2]].length ? WW[TP[2]].charCodeAt(WW[TP[85]] + TP[1]) : TP[2]), TP[86] <= iW && iW <= TP[87] && TP[88] <= OW && OW <= TP[89] && HP(iW = TP[90] + ((iW & TP[53]) << TP[26]) + (OW & TP[53]), WW[TP[85]]++), iW <= TP[91] ? WW[TP[92]] += String.fromCharCode(iW) : iW <= TP[93] ? WW[TP[92]] += String.fromCharCode(TP[94] | iW >>> TP[7] & TP[95], TP[56] | iW & TP[55]) : iW <= TP[69] ? WW[TP[92]] += String.fromCharCode(TP[34] | iW >>> TP[57] & TP[51], TP[56] | iW >>> TP[7] & TP[55], TP[56] | iW & TP[55]) : iW <= TP[96] && (WW[TP[92]] += String.fromCharCode(TP[97] | iW >>> TP[65] & TP[35], TP[56] | iW >>> TP[57] & TP[55], TP[56] | iW >>> TP[7] & TP[55], TP[56] | iW & TP[55]));
                  return WW[TP[92]]
                }

                function cW(...WW) {
                  for (HP(WW[TP[0]] = TP[1], WW[TP[1]] = Array(WW[TP[2]].length >> TP[3])), WW[TP[98]] = TP[2]; WW[TP[98]] < WW[TP[1]].length; WW[TP[98]]++) WW[TP[1]][WW[TP[98]]] = TP[2];
                  for (WW[TP[98]] = TP[2]; WW[TP[98]] < WW[TP[2]].length * TP[21]; WW[TP[98]] += TP[21]) WW[TP[1]][WW[TP[98]] >> TP[9]] |= (WW[TP[2]].charCodeAt(WW[TP[98]] / TP[21]) & TP[60]) << TP[64] - WW[TP[98]] % TP[62];
                  return WW[TP[1]]
                }

                function wW(...WW) {
                  for (HP(WW[TP[0]] = TP[1], WW[TP[1]] = ""), WW[TP[19]] = TP[2]; WW[TP[19]] < WW[TP[2]].length * TP[62]; WW[TP[19]] += TP[21]) WW[TP[1]] += String.fromCharCode(WW[TP[2]][WW[TP[19]] >> TP[9]] >>> TP[64] - WW[TP[19]] % TP[62] & TP[60]);
                  return WW[TP[1]]
                }

                function tW(...WW) {
                  return WW[TP[0]] = TP[3], WW[TP[2]] >>> WW[TP[1]] | WW[TP[2]] << TP[62] - WW[TP[1]]
                }

                function ZW(...WW) {
                  return WW[TP[0]] = TP[3], WW[TP[2]] >>> WW[TP[1]]
                }

                function xW(...WW) {
                  return WW[TP[0]] = TP[4], WW[TP[2]] & WW[TP[1]] ^ ~WW[TP[2]] & WW[TP[3]]
                }

                function lW(...WW) {
                  return WW[TP[0]] = TP[4], WW[TP[2]] & WW[TP[1]] ^ WW[TP[2]] & WW[TP[3]] ^ WW[TP[1]] & WW[TP[3]]
                }

                function AW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[3]) ^ tW(WW[TP[2]], TP[99]) ^ tW(WW[TP[2]], TP[100])
                }

                function bW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[7]) ^ tW(WW[TP[2]], TP[10]) ^ tW(WW[TP[2]], TP[101])
                }

                function jW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[35]) ^ tW(WW[TP[2]], TP[65]) ^ ZW(WW[TP[2]], TP[4])
                }

                function UW(WW) {
                  return tW(WW, TP[66]) ^ tW(WW, TP[67]) ^ ZW(WW, TP[26])
                }

                function kW(iW, OW) {
                  var mW, EW, NW, PW, LW, cW, wW, tW, ZW, kW, MW, KW, SW, YW = new Array(TP[172], -TP[173], TP[174], -TP[175], TP[176], -TP[177], TP[178], TP[179]);
                  for (mW = new Array(TP[68]), HP(iW[OW >> TP[9]] |= TP[56] << TP[64] - OW % TP[62], iW[(OW + TP[68] >> TP[11] << TP[36]) + TP[51]] = OW), kW = TP[2]; kW < iW.length; kW += TP[45]) {
                    for (HP(EW = YW[TP[2]], NW = YW[TP[1]], PW = YW[TP[3]], LW = YW[TP[4]], cW = YW[TP[36]], wW = YW[TP[9]], tW = YW[TP[7]], ZW = YW[TP[35]]), MW = TP[2]; MW < TP[68]; MW++) HP(mW[MW] = MW < TP[45] ? iW[MW + kW] : sW(sW(sW(UW(mW[MW - TP[3]]), mW[MW - TP[35]]), jW(mW[MW - TP[51]])), mW[MW - TP[45]]), KW = sW(sW(sW(sW(ZW, bW(cW)), xW(cW, wW, tW)), WW[TP[20]][MW]), mW[MW]), SW = sW(AW(EW), lW(EW, NW, PW)), ZW = tW, tW = wW, wW = cW, cW = sW(LW, KW), LW = PW, PW = NW, NW = EW, EW = sW(KW, SW));
                    HP(YW[TP[2]] = sW(EW, YW[TP[2]]), YW[TP[1]] = sW(NW, YW[TP[1]]), YW[TP[3]] = sW(PW, YW[TP[3]]), YW[TP[4]] = sW(LW, YW[TP[4]]), YW[TP[36]] = sW(cW, YW[TP[36]]), YW[TP[9]] = sW(wW, YW[TP[9]]), YW[TP[7]] = sW(tW, YW[TP[7]]), YW[TP[35]] = sW(ZW, YW[TP[35]]))
                  }
                  return YW
                }

                function sW(WW, iW) {
                  var OW = (WW & TP[69]) + (iW & TP[69]);
                  return (WW >> TP[45]) + (iW >> TP[45]) + (OW >> TP[45]) << TP[45] | OW & TP[69]
                }
                return HP(WW[TP[0]] = TP[2], WW[TP[77]] = TP[2], WW[TP[1]] = ""), WW[TP[20]] = new Array(TP[108], TP[109], -TP[110], -TP[111], TP[112], TP[113], -TP[114], -TP[115], -TP[116], TP[117], TP[118], TP[119], TP[120], -TP[121], -TP[122], -TP[123], -TP[124], -TP[125], TP[126], TP[127], TP[128], TP[129], TP[130], TP[131], -TP[132], -TP[133], -TP[134], -TP[135], -TP[136], -TP[137], TP[138], TP[139], TP[140], TP[141], TP[142], TP[143], TP[144], TP[145], -TP[146], -TP[147], -TP[148], -TP[149], -TP[150], -TP[151], -TP[152], -TP[153], -TP[154], TP[155], TP[156], TP[157], TP[158], TP[159], TP[160], TP[161], TP[162], TP[163], TP[164], TP[165], -TP[166], -TP[167], -TP[168], -TP[169], -TP[170], -TP[171]), {
                  hex: function(...WW) {
                    return WW[TP[0]] = TP[1], NW(function(WW) {
                      return wW(kW(cW(WW), WW.length * TP[21]))
                    }(LW(WW[TP[2]])))
                  },
                  b64: OW,
                  any: mW,
                  hex_hmac: function(WW, iW) {
                    return NW(EW(LW(WW), LW(iW)))
                  },
                  b64_hmac: OW,
                  any_hmac: mW
                }
              }(), console.log(WW[-TP[180]]))
            }
            return "B0UglH" in hP && iW(), WW[TP[2]](), TP[70]
          } catch {
            return TP[43]
          }
        },
        YW = (0, dE[TP[15]])("a29qbzYzb25i"),
        yW = (0, dE[TP[181]])(TP[14]);
      let TW = TP[14],
        JW = TP[43],
        hW = TP[43];
      const HW = (0, dE[TP[181]])(TP[14]);
      let nW = TP[2];
      const uW = (0, dE[TP[181]])(TP[14]);
      let oW = TP[2];
      const dW = (0, dE[TP[181]])(TP[14]);
      let eW = TP[43],
        vW = TP[43];
      const gW = (...iW) => {
          if (iW[TP[0]] = TP[3], iW[TP[2]] === WW) {
            function NW(...WW) {
              HP(WW[TP[0]] = TP[2], WW[TP[18]] = function(...WW) {
                function iW(...WW) {
                  return WW[TP[0]] = TP[3], PW(EW(LW(WW[TP[2]]), LW(WW[TP[1]])))
                }

                function OW(...WW) {
                  return WW[TP[0]] = TP[4],
                    function(...WW) {
                      var iW, OW, mW, EW;
                      for (HP(WW[TP[0]] = TP[3], WW[TP[18]] = WW[TP[1]].length, WW[TP[186]] = Array()), WW[TP[36]] = Array(Math.ceil(WW[TP[2]].length / TP[3])), iW = TP[2]; iW < WW[TP[36]].length; iW++) WW[TP[36]][iW] = WW[TP[2]].charCodeAt(iW * TP[3]) << TP[21] | WW[TP[2]].charCodeAt(iW * TP[3] + TP[1]);
                      for (; WW[TP[36]].length > TP[2];) {
                        for (HP(EW = Array(), mW = TP[2]), iW = TP[2]; iW < WW[TP[36]].length; iW++) HP(mW = (mW << TP[45]) + WW[TP[36]][iW], OW = Math.floor(mW / WW[TP[18]]), mW -= OW * WW[TP[18]]), (EW.length > TP[2] || OW > TP[2]) && (EW[EW.length] = OW);
                        HP(WW[TP[186]][WW[TP[186]].length] = mW, WW[TP[36]] = EW)
                      }
                      for (WW[-TP[187]] = "", iW = WW[TP[186]].length - TP[1]; iW >= TP[2]; iW--) WW[-TP[187]] += WW[TP[1]].charAt(WW[TP[186]][iW]);
                      for (WW[TP[23]] = Math.ceil(WW[TP[2]].length * TP[21] / (Math.log(WW[TP[1]].length) / Math.log(TP[3]))), iW = WW[-TP[187]].length; iW < WW[TP[23]]; iW++) WW[-TP[187]] = WW[TP[1]][TP[2]] + WW[-TP[187]];
                      return WW[-TP[187]]
                    }(EW(LW(WW[TP[2]]), LW(WW[TP[1]])), WW[TP[3]])
                }

                function EW(...WW) {
                  HP(WW[TP[0]] = TP[3], WW[-TP[182]] = cW(WW[TP[2]])), WW[-TP[182]].length > TP[45] && (WW[-TP[182]] = kW(WW[-TP[182]], WW[TP[2]].length * TP[21]));
                  var iW = Array(TP[45]),
                    OW = Array(TP[45]);
                  for (WW[TP[4]] = TP[2]; WW[TP[4]] < TP[45]; WW[TP[4]]++) HP(iW[WW[TP[4]]] = WW[-TP[182]][WW[TP[4]]] ^ TP[74], OW[WW[TP[4]]] = WW[-TP[182]][WW[TP[4]]] ^ TP[75]);
                  return WW[TP[20]] = kW(iW.concat(cW(WW[TP[1]])), TP[49] + WW[TP[1]].length * TP[21]), wW(kW(OW.concat(WW[TP[20]]), JP(TP[47] + TP[48], TP[49], TP[76])))
                }

                function NW(...iW) {
                  iW[TP[0]] = TP[1];
                  try {
                    WW[TP[19]]
                  } catch (mW) {
                    WW[TP[19]] = TP[2]
                  }
                  for (HP(iW[TP[18]] = WW[TP[19]] ? TP[50] + TP[78] + TP[79] : TP[50] + TP[80] + TP[81], iW[TP[3]] = "", iW[TP[95]] = TP[13]), iW[-TP[183]] = TP[2]; iW[-TP[183]] < iW[TP[2]].length; iW[-TP[183]]++) HP(iW[TP[95]] = iW[TP[2]].charCodeAt(iW[-TP[183]]), iW[TP[3]] += iW[TP[18]].charAt(iW[TP[95]] >>> TP[36] & TP[51]) + iW[TP[18]].charAt(iW[TP[95]] & TP[51]));
                  return iW[TP[3]]
                }

                function PW(...iW) {
                  iW[TP[0]] = TP[1];
                  try {
                    WW[TP[20]]
                  } catch (mW) {
                    WW[TP[20]] = ""
                  }
                  for (HP(iW[TP[1]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + TP[184], iW[TP[3]] = "", iW[TP[20]] = iW[TP[2]].length), iW[TP[8]] = TP[2]; iW[TP[8]] < iW[TP[20]]; iW[TP[8]] += TP[4])
                    for (iW[TP[23]] = iW[TP[2]].charCodeAt(iW[TP[8]]) << TP[45] | (iW[TP[8]] + TP[1] < iW[TP[20]] ? iW[TP[2]].charCodeAt(iW[TP[8]] + TP[1]) << TP[21] : TP[2]) | (iW[TP[8]] + TP[3] < iW[TP[20]] ? iW[TP[2]].charCodeAt(iW[TP[8]] + TP[3]) : TP[2]), iW[TP[185]] = TP[2]; iW[TP[185]] < TP[36]; iW[TP[185]]++) iW[TP[8]] * TP[21] + iW[TP[185]] * TP[7] > iW[TP[2]].length * TP[21] ? iW[TP[3]] += WW[TP[20]] : iW[TP[3]] += iW[TP[1]].charAt(iW[TP[23]] >>> TP[7] * (TP[4] - iW[TP[185]]) & TP[55]);
                  return iW[TP[3]]
                }

                function LW(...WW) {
                  var iW, OW;
                  for (HP(WW[TP[0]] = TP[1], WW[TP[188]] = "", WW[TP[3]] = -TP[1]); ++WW[TP[3]] < WW[TP[2]].length;) HP(iW = WW[TP[2]].charCodeAt(WW[TP[3]]), OW = WW[TP[3]] + TP[1] < WW[TP[2]].length ? WW[TP[2]].charCodeAt(WW[TP[3]] + TP[1]) : TP[2]), TP[86] <= iW && iW <= TP[87] && TP[88] <= OW && OW <= TP[89] && HP(iW = TP[90] + ((iW & TP[53]) << TP[26]) + (OW & TP[53]), WW[TP[3]]++), iW <= TP[91] ? WW[TP[188]] += String.fromCharCode(iW) : iW <= TP[93] ? WW[TP[188]] += String.fromCharCode(TP[94] | iW >>> TP[7] & TP[95], TP[56] | iW & TP[55]) : iW <= TP[69] ? WW[TP[188]] += String.fromCharCode(TP[34] | iW >>> TP[57] & TP[51], TP[56] | iW >>> TP[7] & TP[55], TP[56] | iW & TP[55]) : iW <= TP[96] && (WW[TP[188]] += String.fromCharCode(TP[97] | iW >>> TP[65] & TP[35], TP[56] | iW >>> TP[57] & TP[55], TP[56] | iW >>> TP[7] & TP[55], TP[56] | iW & TP[55]));
                  return WW[TP[188]]
                }

                function cW(...WW) {
                  for (HP(WW[TP[0]] = TP[1], WW[TP[1]] = Array(WW[TP[2]].length >> TP[3])), WW[TP[19]] = TP[2]; WW[TP[19]] < WW[TP[1]].length; WW[TP[19]]++) WW[TP[1]][WW[TP[19]]] = TP[2];
                  for (WW[TP[19]] = TP[2]; WW[TP[19]] < WW[TP[2]].length * TP[21]; WW[TP[19]] += TP[21]) WW[TP[1]][WW[TP[19]] >> TP[9]] |= (WW[TP[2]].charCodeAt(WW[TP[19]] / TP[21]) & TP[60]) << TP[64] - WW[TP[19]] % TP[62];
                  return WW[TP[1]]
                }

                function wW(WW) {
                  var iW, OW = "";
                  for (iW = TP[2]; iW < WW.length * TP[62]; iW += TP[21]) OW += String.fromCharCode(WW[iW >> TP[9]] >>> TP[64] - iW % TP[62] & TP[60]);
                  return OW
                }

                function tW(...WW) {
                  return WW[TP[0]] = TP[3], WW[TP[2]] >>> WW[TP[1]] | WW[TP[2]] << TP[62] - WW[TP[1]]
                }

                function ZW(...WW) {
                  return WW[TP[0]] = TP[3], WW[TP[2]] >>> WW[TP[1]]
                }

                function xW(...WW) {
                  return WW[TP[0]] = TP[4], WW[TP[2]] & WW[TP[1]] ^ ~WW[TP[2]] & WW[TP[3]]
                }

                function lW(...WW) {
                  return WW[TP[0]] = TP[4], WW[TP[2]] & WW[TP[1]] ^ WW[TP[2]] & WW[TP[3]] ^ WW[TP[1]] & WW[TP[3]]
                }

                function AW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[3]) ^ tW(WW[TP[2]], TP[99]) ^ tW(WW[TP[2]], TP[100])
                }

                function bW(WW) {
                  return tW(WW, TP[7]) ^ tW(WW, TP[10]) ^ tW(WW, TP[101])
                }

                function jW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[35]) ^ tW(WW[TP[2]], TP[65]) ^ ZW(WW[TP[2]], TP[4])
                }

                function UW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[66]) ^ tW(WW[TP[2]], TP[67]) ^ ZW(WW[TP[2]], TP[26])
                }

                function kW(...iW) {
                  var OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, kW, MW;
                  for (HP(iW[TP[0]] = TP[3], iW[TP[189]] = new Array(TP[172], -TP[173], TP[174], -TP[175], TP[176], -TP[177], TP[178], TP[179]), iW[TP[19]] = new Array(TP[68])), HP(iW[TP[2]][iW[TP[1]] >> TP[9]] |= TP[56] << TP[64] - iW[TP[1]] % TP[62], iW[TP[2]][(iW[TP[1]] + TP[68] >> TP[11] << TP[36]) + TP[51]] = iW[TP[1]]), tW = TP[2]; tW < iW[TP[2]].length; tW += TP[45]) {
                    for (HP(OW = iW[TP[189]][TP[2]], mW = iW[TP[189]][TP[1]], EW = iW[TP[189]][TP[3]], NW = iW[TP[189]][TP[4]], PW = iW[TP[189]][TP[36]], LW = iW[TP[189]][TP[9]], cW = iW[TP[189]][TP[7]], wW = iW[TP[189]][TP[35]]), ZW = TP[2]; ZW < TP[68]; ZW++) HP(iW[TP[19]][ZW] = ZW < TP[45] ? iW[TP[2]][ZW + tW] : sW(sW(sW(UW(iW[TP[19]][ZW - TP[3]]), iW[TP[19]][ZW - TP[35]]), jW(iW[TP[19]][ZW - TP[51]])), iW[TP[19]][ZW - TP[45]]), kW = sW(sW(sW(sW(wW, bW(PW)), xW(PW, LW, cW)), WW[-TP[11]][ZW]), iW[TP[19]][ZW]), MW = sW(AW(OW), lW(OW, mW, EW)), wW = cW, cW = LW, LW = PW, PW = sW(NW, kW), NW = EW, EW = mW, mW = OW, OW = sW(kW, MW));
                    HP(iW[TP[189]][TP[2]] = sW(OW, iW[TP[189]][TP[2]]), iW[TP[189]][TP[1]] = sW(mW, iW[TP[189]][TP[1]]), iW[TP[189]][TP[3]] = sW(EW, iW[TP[189]][TP[3]]), iW[TP[189]][TP[4]] = sW(NW, iW[TP[189]][TP[4]]), iW[TP[189]][TP[36]] = sW(PW, iW[TP[189]][TP[36]]), iW[TP[189]][TP[9]] = sW(LW, iW[TP[189]][TP[9]]), iW[TP[189]][TP[7]] = sW(cW, iW[TP[189]][TP[7]]), iW[TP[189]][TP[35]] = sW(wW, iW[TP[189]][TP[35]]))
                  }
                  return iW[TP[189]]
                }

                function sW(...WW) {
                  return HP(WW[TP[0]] = TP[3], WW[TP[18]] = (WW[TP[2]] & TP[69]) + (WW[TP[1]] & TP[69]), WW[-TP[190]] = (WW[TP[2]] >> TP[45]) + (WW[TP[1]] >> TP[45]) + (WW[TP[18]] >> TP[45])), WW[-TP[190]] << TP[45] | WW[TP[18]] & TP[69]
                }
                return HP(WW[TP[0]] = TP[2], WW[TP[19]] = TP[2], WW[TP[20]] = ""), WW[-TP[11]] = new Array(TP[108], TP[109], -TP[110], -TP[111], TP[112], TP[113], -TP[114], -TP[115], -TP[116], TP[117], TP[118], TP[119], TP[120], -TP[121], -TP[122], -TP[123], -TP[124], -TP[125], TP[126], TP[127], TP[128], TP[129], TP[130], TP[131], -TP[132], -TP[133], -TP[134], -TP[135], -TP[136], -TP[137], TP[138], TP[139], TP[140], TP[141], TP[142], TP[143], TP[144], TP[145], -TP[146], -TP[147], -TP[148], -TP[149], -TP[150], -TP[151], -TP[152], -TP[153], -TP[154], TP[155], TP[156], TP[157], TP[158], TP[159], TP[160], TP[161], TP[162], TP[163], TP[164], TP[165], -TP[166], -TP[167], -TP[168], -TP[169], -TP[170], -TP[171]), {
                  hex: function(...WW) {
                    return WW[TP[0]] = TP[1], NW(function(...WW) {
                      return WW[TP[0]] = TP[1], wW(kW(cW(WW[TP[2]]), WW[TP[2]].length * TP[21]))
                    }(LW(WW[TP[2]])))
                  },
                  b64: iW,
                  any: OW,
                  hex_hmac: function(...WW) {
                    return WW[TP[0]] = TP[3], NW(EW(LW(WW[TP[2]]), LW(WW[TP[1]])))
                  },
                  b64_hmac: iW,
                  any_hmac: OW
                }
              }(), console.log(WW[TP[18]]))
            }
            if ("YqRMUfX" in hP && NW(), TW === TP[14]) {
              function PW(...WW) {
                HP(WW[TP[0]] = TP[2], WW[TP[19]] = function(...WW) {
                  for (HP(WW[TP[0]] = TP[1], WW[TP[18]] = TP[2], WW[TP[3]] = {}, WW[TP[20]] = TP[2], WW[TP[36]] = TP[2], WW[TP[23]] = TP[2], WW[TP[191]] = WW[TP[2]].length), WW[TP[35]] = TP[2]; WW[TP[35]] < WW[TP[191]]; WW[TP[35]]++) {
                    for (HP(WW[TP[3]] = {}, WW[TP[20]] = TP[2], WW[TP[36]] = TP[1]), WW[-TP[52]] = WW[TP[35]] + TP[1]; WW[-TP[52]] < WW[TP[191]]; WW[-TP[52]]++) WW[TP[2]][WW[TP[35]]].x !== WW[TP[2]][WW[-TP[52]]].x || WW[TP[2]][WW[TP[35]]].y !== WW[TP[2]][WW[-TP[52]]].y ? (WW[TP[2]][WW[TP[35]]].y === WW[TP[2]][WW[-TP[52]]].y ? WW[TP[23]] = Number.MAX_SAFE_INTEGER : WW[TP[23]] = (WW[TP[2]][WW[TP[35]]].x - WW[TP[2]][WW[-TP[52]]].x) / (WW[TP[2]][WW[TP[35]]].y - WW[TP[2]][WW[-TP[52]]].y), WW[TP[3]][WW[TP[23]]] || (WW[TP[3]][WW[TP[23]]] = TP[2]), HP(WW[TP[3]][WW[TP[23]]]++, WW[TP[20]] = Math.max(WW[TP[20]], WW[TP[3]][WW[TP[23]]]))) : WW[TP[36]]++;
                    HP(WW[TP[20]] += WW[TP[36]], WW[TP[18]] = Math.max(WW[TP[18]], WW[TP[20]]))
                  }
                  return WW[TP[18]]
                }, console.log(WW[TP[19]]))
              }
              "tVFgGM" + TP[18] in hP && PW(), TW = typeof iW[TP[1]] === TP[237] ? iW[TP[1]] : -TP[1]
            } else {
              function LW(...WW) {
                HP(WW[TP[0]] = TP[2], WW[TP[201]] = TP[193] + TP[194] + TP[195], WW[TP[19]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + TP[196], WW[-TP[202]] = TP[197] + TP[198] + TP[199] + TP[200], WW[TP[201]].match(WW[TP[19]] + WW[-TP[202]]))
              }
              "N8DCC5" + TP[192] in hP && LW(), JW = TP[70]
            }
            return
          }
          const OW = yW[iW[TP[2]]];
          if (!iW[TP[1]]) {
            function cW(...WW) {
              function iW() {}
              WW[TP[0]] = TP[2], HP(WW[TP[205]] = function(...WW) {
                for (HP(WW[TP[0]] = TP[3], WW[TP[3]] = TP[2], WW[TP[4]] = TP[2], WW[-TP[203]] = new iW(TP[2]), WW[TP[85]] = WW[-TP[203]], WW[TP[23]] = WW[TP[2]], WW[-TP[204]] = WW[TP[1]]); WW[TP[23]] !== TP[14] || WW[-TP[204]] !== TP[14];) HP(WW[TP[4]] = (WW[TP[23]] ? WW[TP[23]].val : TP[2]) + (WW[-TP[204]] ? WW[-TP[204]].val : TP[2]) + WW[TP[3]], WW[TP[3]] = Math.floor(WW[TP[4]] / TP[26]), WW[TP[85]].next = new iW(WW[TP[4]] % TP[26]), WW[TP[85]] = WW[TP[85]].next, WW[TP[23]] = WW[TP[23]] ? WW[TP[23]].next : TP[14], WW[-TP[204]] = WW[-TP[204]] ? WW[-TP[204]].next : TP[14]);
                return WW[TP[3]] && (WW[TP[85]].next = new iW(WW[TP[3]])), WW[-TP[203]].next
              }, console.log(WW[TP[205]]))
            }
            if ("NmqJXj" + TP[22] in hP && cW(), OW) {
              function wW(...WW) {
                WW[TP[0]] = TP[2]
              }
              "aigJwEV" in hP && wW(), hW = TP[70]
            }
            return
          }
          if (iW[TP[2]] !== YW) return void(yW[iW[TP[2]]] = iW[TP[1]]);
          yW[iW[TP[2]]] = TP[70];
          const EW = typeof iW[TP[1]] === TP[30] ? iW[TP[1]] : "" + iW[TP[1]];
          if (dW[EW]) {
            function tW(...WW) {
              HP(WW[TP[0]] = TP[2], WW[-TP[71]] = function() {
                var WW, iW, OW = TP[2];

                function mW(...iW) {
                  return iW[TP[0]] = TP[3],
                    function(iW) {
                      var OW, mW, EW, NW;
                      for (HP(OW = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mW = "", EW = iW.length), NW = TP[2]; NW < EW; NW += TP[4]) {
                        var PW, LW = iW.charCodeAt(NW) << TP[45] | (NW + TP[1] < EW ? iW.charCodeAt(NW + TP[1]) << TP[21] : TP[2]) | (NW + TP[3] < EW ? iW.charCodeAt(NW + TP[3]) : TP[2]);
                        for (PW = TP[2]; PW < TP[36]; PW++) NW * TP[21] + PW * TP[7] > iW.length * TP[21] ? mW += WW : mW += OW.charAt(LW >>> TP[7] * (TP[4] - PW) & TP[55])
                      }
                      return mW
                    }(NW(LW(iW[TP[2]]), LW(iW[TP[1]])))
                }

                function EW(...WW) {
                  return WW[TP[0]] = TP[4],
                    function(...WW) {
                      var iW, OW, mW, EW;
                      for (HP(WW[TP[0]] = TP[3], WW[TP[211]] = WW[TP[1]].length, WW[TP[19]] = Array()), WW[TP[36]] = Array(Math.ceil(WW[TP[2]].length / TP[3])), iW = TP[2]; iW < WW[TP[36]].length; iW++) WW[TP[36]][iW] = WW[TP[2]].charCodeAt(iW * TP[3]) << TP[21] | WW[TP[2]].charCodeAt(iW * TP[3] + TP[1]);
                      for (; WW[TP[36]].length > TP[2];) {
                        for (HP(EW = Array(), mW = TP[2]), iW = TP[2]; iW < WW[TP[36]].length; iW++) HP(mW = (mW << TP[45]) + WW[TP[36]][iW], OW = Math.floor(mW / WW[TP[211]]), mW -= OW * WW[TP[211]]), (EW.length > TP[2] || OW > TP[2]) && (EW[EW.length] = OW);
                        HP(WW[TP[19]][WW[TP[19]].length] = mW, WW[TP[36]] = EW)
                      }
                      for (WW[TP[9]] = "", iW = WW[TP[19]].length - TP[1]; iW >= TP[2]; iW--) WW[TP[9]] += WW[TP[1]].charAt(WW[TP[19]][iW]);
                      for (WW[TP[23]] = Math.ceil(WW[TP[2]].length * TP[21] / (Math.log(WW[TP[1]].length) / Math.log(TP[3]))), iW = WW[TP[9]].length; iW < WW[TP[23]]; iW++) WW[TP[9]] = WW[TP[1]][TP[2]] + WW[TP[9]];
                      return WW[TP[9]]
                    }(NW(LW(WW[TP[2]]), LW(WW[TP[1]])), WW[TP[3]])
                }

                function NW(...WW) {
                  HP(WW[TP[0]] = TP[3], WW[TP[3]] = cW(WW[TP[2]])), WW[TP[3]].length > TP[45] && (WW[TP[3]] = kW(WW[TP[3]], WW[TP[2]].length * TP[21]));
                  var iW = Array(TP[45]),
                    OW = Array(TP[45]);
                  for (WW[TP[4]] = TP[2]; WW[TP[4]] < TP[45]; WW[TP[4]]++) HP(iW[WW[TP[4]]] = WW[TP[3]][WW[TP[4]]] ^ TP[74], OW[WW[TP[4]]] = WW[TP[3]][WW[TP[4]]] ^ TP[75]);
                  return WW[TP[20]] = kW(iW.concat(cW(WW[TP[1]])), TP[49] + WW[TP[1]].length * TP[21]), wW(kW(OW.concat(WW[TP[20]]), JP(TP[47] + TP[48], TP[49], TP[76])))
                }

                function PW(...WW) {
                  for (WW[TP[0]] = TP[1], HP(WW[TP[1]] = OW ? TP[50] + TP[78] + TP[79] : TP[50] + TP[80] + TP[81], WW[TP[3]] = "", WW[TP[4]] = TP[13]), WW[-TP[210]] = TP[2]; WW[-TP[210]] < WW[TP[2]].length; WW[-TP[210]]++) HP(WW[TP[4]] = WW[TP[2]].charCodeAt(WW[-TP[210]]), WW[TP[3]] += WW[TP[1]].charAt(WW[TP[4]] >>> TP[36] & TP[51]) + WW[TP[1]].charAt(WW[TP[4]] & TP[51]));
                  return WW[TP[3]]
                }

                function LW(...WW) {
                  var iW, OW;
                  for (HP(WW[TP[0]] = TP[1], WW[TP[190]] = "", WW[TP[19]] = -TP[1]); ++WW[TP[19]] < WW[TP[2]].length;) HP(iW = WW[TP[2]].charCodeAt(WW[TP[19]]), OW = WW[TP[19]] + TP[1] < WW[TP[2]].length ? WW[TP[2]].charCodeAt(WW[TP[19]] + TP[1]) : TP[2]), TP[86] <= iW && iW <= TP[87] && TP[88] <= OW && OW <= TP[89] && HP(iW = TP[90] + ((iW & TP[53]) << TP[26]) + (OW & TP[53]), WW[TP[19]]++), iW <= TP[91] ? WW[TP[190]] += String.fromCharCode(iW) : iW <= TP[93] ? WW[TP[190]] += String.fromCharCode(TP[94] | iW >>> TP[7] & TP[95], TP[56] | iW & TP[55]) : iW <= TP[69] ? WW[TP[190]] += String.fromCharCode(TP[34] | iW >>> TP[57] & TP[51], TP[56] | iW >>> TP[7] & TP[55], TP[56] | iW & TP[55]) : iW <= TP[96] && (WW[TP[190]] += String.fromCharCode(TP[97] | iW >>> TP[65] & TP[35], TP[56] | iW >>> TP[57] & TP[55], TP[56] | iW >>> TP[7] & TP[55], TP[56] | iW & TP[55]));
                  return WW[TP[190]]
                }

                function cW(...WW) {
                  for (HP(WW[TP[0]] = TP[1], WW[TP[1]] = Array(WW[TP[2]].length >> TP[3])), WW[-TP[210]] = TP[2]; WW[-TP[210]] < WW[TP[1]].length; WW[-TP[210]]++) WW[TP[1]][WW[-TP[210]]] = TP[2];
                  for (WW[-TP[210]] = TP[2]; WW[-TP[210]] < WW[TP[2]].length * TP[21]; WW[-TP[210]] += TP[21]) WW[TP[1]][WW[-TP[210]] >> TP[9]] |= (WW[TP[2]].charCodeAt(WW[-TP[210]] / TP[21]) & TP[60]) << TP[64] - WW[-TP[210]] % TP[62];
                  return WW[TP[1]]
                }

                function wW(...WW) {
                  for (HP(WW[TP[0]] = TP[1], WW[TP[1]] = ""), WW[TP[3]] = TP[2]; WW[TP[3]] < WW[TP[2]].length * TP[62]; WW[TP[3]] += TP[21]) WW[TP[1]] += String.fromCharCode(WW[TP[2]][WW[TP[3]] >> TP[9]] >>> TP[64] - WW[TP[3]] % TP[62] & TP[60]);
                  return WW[TP[1]]
                }

                function tW(...WW) {
                  return WW[TP[0]] = TP[3], WW[TP[2]] >>> WW[TP[1]] | WW[TP[2]] << TP[62] - WW[TP[1]]
                }

                function ZW(...WW) {
                  return WW[TP[0]] = TP[3], WW[TP[2]] >>> WW[TP[1]]
                }

                function xW(WW, iW, OW) {
                  return WW & iW ^ ~WW & OW
                }

                function lW(WW, iW, OW) {
                  return WW & iW ^ WW & OW ^ iW & OW
                }

                function AW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[3]) ^ tW(WW[TP[2]], TP[99]) ^ tW(WW[TP[2]], TP[100])
                }

                function bW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[7]) ^ tW(WW[TP[2]], TP[10]) ^ tW(WW[TP[2]], TP[101])
                }

                function jW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[35]) ^ tW(WW[TP[2]], TP[65]) ^ ZW(WW[TP[2]], TP[4])
                }

                function UW(...WW) {
                  return WW[TP[0]] = TP[1], tW(WW[TP[2]], TP[66]) ^ tW(WW[TP[2]], TP[67]) ^ ZW(WW[TP[2]], TP[26])
                }

                function kW(...WW) {
                  var OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, kW, MW;
                  for (HP(WW[TP[0]] = TP[3], WW[TP[3]] = new Array(TP[172], -TP[173], TP[174], -TP[175], TP[176], -TP[177], TP[178], TP[179]), WW[TP[4]] = new Array(TP[68])), HP(WW[TP[2]][WW[TP[1]] >> TP[9]] |= TP[56] << TP[64] - WW[TP[1]] % TP[62], WW[TP[2]][(WW[TP[1]] + TP[68] >> TP[11] << TP[36]) + TP[51]] = WW[TP[1]]), tW = TP[2]; tW < WW[TP[2]].length; tW += TP[45]) {
                    for (HP(OW = WW[TP[3]][TP[2]], mW = WW[TP[3]][TP[1]], EW = WW[TP[3]][TP[3]], NW = WW[TP[3]][TP[4]], PW = WW[TP[3]][TP[36]], LW = WW[TP[3]][TP[9]], cW = WW[TP[3]][TP[7]], wW = WW[TP[3]][TP[35]]), ZW = TP[2]; ZW < TP[68]; ZW++) HP(WW[TP[4]][ZW] = ZW < TP[45] ? WW[TP[2]][ZW + tW] : sW(sW(sW(UW(WW[TP[4]][ZW - TP[3]]), WW[TP[4]][ZW - TP[35]]), jW(WW[TP[4]][ZW - TP[51]])), WW[TP[4]][ZW - TP[45]]), kW = sW(sW(sW(sW(wW, bW(PW)), xW(PW, LW, cW)), iW[ZW]), WW[TP[4]][ZW]), MW = sW(AW(OW), lW(OW, mW, EW)), wW = cW, cW = LW, LW = PW, PW = sW(NW, kW), NW = EW, EW = mW, mW = OW, OW = sW(kW, MW));
                    HP(WW[TP[3]][TP[2]] = sW(OW, WW[TP[3]][TP[2]]), WW[TP[3]][TP[1]] = sW(mW, WW[TP[3]][TP[1]]), WW[TP[3]][TP[3]] = sW(EW, WW[TP[3]][TP[3]]), WW[TP[3]][TP[4]] = sW(NW, WW[TP[3]][TP[4]]), WW[TP[3]][TP[36]] = sW(PW, WW[TP[3]][TP[36]]), WW[TP[3]][TP[9]] = sW(LW, WW[TP[3]][TP[9]]), WW[TP[3]][TP[7]] = sW(cW, WW[TP[3]][TP[7]]), WW[TP[3]][TP[35]] = sW(wW, WW[TP[3]][TP[35]]))
                  }
                  return WW[TP[3]]
                }

                function sW(...WW) {
                  return HP(WW[TP[0]] = TP[3], WW[TP[3]] = (WW[TP[2]] & TP[69]) + (WW[TP[1]] & TP[69]), WW[TP[189]] = (WW[TP[2]] >> TP[45]) + (WW[TP[1]] >> TP[45]) + (WW[TP[3]] >> TP[45])), WW[TP[189]] << TP[45] | WW[TP[3]] & TP[69]
                }
                return WW = "", iW = new Array(TP[108], TP[109], -TP[110], -TP[111], TP[112], TP[113], -TP[114], -TP[115], -TP[116], TP[117], TP[118], TP[119], TP[120], -TP[121], -TP[122], -TP[123], -TP[124], -TP[125], TP[126], TP[127], TP[128], TP[129], TP[130], TP[131], -TP[132], -TP[133], -TP[134], -TP[135], -TP[136], -TP[137], TP[138], TP[139], TP[140], TP[141], TP[142], TP[143], TP[144], TP[145], -TP[146], -TP[147], -TP[148], -TP[149], -TP[150], -TP[151], -TP[152], -TP[153], -TP[154], TP[155], TP[156], TP[157], TP[158], TP[159], TP[160], TP[161], TP[162], TP[163], TP[164], TP[165], -TP[166], -TP[167], -TP[168], -TP[169], -TP[170], -TP[171]), {
                  hex: function(...WW) {
                    return WW[TP[0]] = TP[1], PW(function(...WW) {
                      return WW[TP[0]] = TP[1], wW(kW(cW(WW[TP[2]]), WW[TP[2]].length * TP[21]))
                    }(LW(WW[TP[2]])))
                  },
                  b64: mW,
                  any: EW,
                  hex_hmac: function(...WW) {
                    return WW[TP[0]] = TP[3], PW(NW(LW(WW[TP[2]]), LW(WW[TP[1]])))
                  },
                  b64_hmac: mW,
                  any_hmac: EW
                }
              }(), console.log(WW[-TP[71]]))
            }
            "Geme8T" + TP[234] in hP && tW()
          } else(0, zN[TP[222]])(EW) ? vW = TP[70] : (0, zN[TP[15]])(EW) ? nW < 8 ? HP(dW[EW] = TP[70], HW[nW++] = EW, eW ||= (0, zN[TP[214]])(EW)) : !eW && (0, zN[TP[214]])(EW) && HP(dW[EW] = TP[70], HW[8 - TP[1]] = EW, eW = TP[70]) : oW < 4 && HP(dW[EW] = TP[70], uW[oW++] = EW)
        },
        DW = (0, FN[TP[22]])(WW),
        VW = DW ? DW.replaced : (() => {
          try {
            return EW[WW]
          } catch {
            return TP[13]
          }
        })();
      if (SW((() => {
          EW[WW] = gW
        })), typeof VW === TP[215] + TP[216]) {
        const WW = VW;
        SW((() => {
          WW(gW)
        }))
      }
      if (DW) {
        const iW = DW.reports;
        SW((() => {
          for (const OW in iW)(0, dE[TP[33]])(dE[TP[225]], iW, [OW]) && OW !== WW && gW(OW, iW[OW])
        }))
      }
      const pW = DW ? TP[3] : TP[1];
      let fW = TP[43];
      const CW = (...iW) => (iW[TP[0]] = TP[2], JW ? TP[70] : (HP(iW[TP[18]] = TP[43], fW = !SW((() => {
          iW[TP[18]] = EW[WW] !== gW
        }))), iW[TP[18]])),
        XW = kW(((...iW) => {
          iW[TP[0]] = TP[2];
          const OW = (0, dE.O)(EW, WW);
          return (OW === TP[14] || void 0 === OW ? void 0 : OW.configurable) !== TP[43] || typeof OW[TP[239]] !== TP[215] + TP[216] || TW !== pW
        })),
        BW = {},
        qW = () => {
          try {
            return navigator[TP[233] + "tSub"]
          } catch {
            return BW
          }
        },
        RW = qW(),
        GW = OW,
        IW = GW === TP[14] ? ((...WW) => {
          WW[TP[0]] = TP[2];
          const iW = TP[206];
          HP(WW[TP[19]] = TP[43], WW[TP[1]] = iW - TP[1]);
          const OW = TextDecoder[TP[217] + TP[218]][TP[219]],
            mW = function() {
              WW[TP[1]]++, WW[TP[1]] === iW && (UP((() => lW(TP[43]))) && (WW[TP[19]] = TP[70]), WW[TP[1]] = TP[2]);
              for (var mW = arguments[TP[0]], EW = new Array(mW), NW = TP[2]; NW < mW; NW++) EW[NW] = arguments[NW];
              return (0, dE[TP[33]])(OW, this, EW)
            };
          return SW((() => {
            TextDecoder[TP[217] + TP[218]][TP[219]] = mW
          })), () => WW[TP[19]] ? TP[3] : sP((() => TextDecoder[TP[217] + TP[218]][TP[219]] !== mW ? TP[7] : TP[2]))
        })() : () => sP((() => GW[TP[231] + TP[232]]())),
        aW = (0, mO[TP[22]])(),
        rW = (0, dE[TP[181]])(TP[14]),
        zW = (0, dE[TP[181]])(TP[14]);
      let FW = TP[2],
        QW = TP[2],
        Wi = TP[2];
      const ii = (0, dE[TP[181]])(TP[14]),
        Oi = (0, dE[TP[181]])(TP[14]);
      let mi = TP[14],
        Ei = (0, dE[TP[181]])(TP[14]);
      const Ni = (...WW) => {
          HP(WW[TP[0]] = TP[3], rW[FW] = WW[TP[2]], zW[FW] = WW[TP[1]], FW++)
        },
        Pi = (...WW) => (HP(WW[TP[0]] = TP[1], WW[TP[98]] = TP[13]), (WW[TP[98]] = (zW[WW[TP[2]]] ? Oi : ii)[rW[WW[TP[2]]]]) !== TP[14] && void 0 !== WW[TP[98]] ? WW[TP[98]] : -TP[1]),
        Li = (0, dE[TP[15]])("d2lvNjQz"),
        ci = (0, dE[TP[15]])("amtsa2plZndu"),
        wi = [
          [(0, dE[TP[15]])("aW9qZndlODNq"), "2"],
          [(0, dE[TP[15]])("a3Bq"), "4"],
          [(0, dE[TP[15]])("dXJocmZm"), "5"]
        ],
        ti = [
          [(0, dE[TP[15]])(TP[221] + TP[220]), TP[181]],
          [(0, dE[TP[15]])(TP[221] + "w="), TP[214]]
        ],
        Zi = (0, dE[TP[15]])("eTR5bnM="),
        xi = (0, dE[TP[15]])("aHRleWpldA=="),
        li = (0, dE[TP[15]])("c2RmbGpneGxmY2pr"),
        Ai = [
          [(0, dE[TP[15]])("a3NhZmR1"), TP[224]],
          [(0, dE[TP[15]])("ZGZnYWFzZGFz"), TP[15]],
          [li, TP[223]],
          [(0, dE[TP[15]])("bGFzZWRraGFz"), "u"],
          [(0, dE[TP[15]])("cW16ZjhrM24="), TP[18]]
        ],
        bi = [
          [Zi, TP[240]],
          [xi, TP[222]],
          [(0, dE[TP[15]])("bmI3ZnEy"), TP[19]]
        ],
        ji = (0, dE[TP[15]])("bGtxM20="),
        Ui = (0, dE[TP[15]])("bWtxN3" + TP[220]),
        ki = ["mk:tw", "mk:jf"],
        si = ((...WW) => {
          WW[TP[0]] = TP[2];
          try {
            return WW[TP[55]] = TP[13], (WW[TP[55]] = EW[(0, dE[TP[15]])("V2ViU29ja2V0")]) === TP[14] || void 0 === WW[TP[55]] ? void 0 : WW[TP[55]][TP[217] + TP[218]]
          } catch {
            return TP[13]
          }
        })(),
        Mi = ["send", "close", "addEventListener", "removeEventListener", TP[229] + TP[228] + TP[223]],
        Ki = ["onmessage", "onopen", "onclos" + TP[23], "onerro" + TP[224]];
      let Si = TP[43];
      const Yi = () => {
          const WW = iW();
          WW === TP[14] || Si || (Si = kW((() => {
            if (si !== TP[13] && (0, dE.P)(WW) !== si) return TP[70];
            for (let iW = TP[2]; iW < Mi[TP[0]]; iW++)
              if ((0, dE[TP[33]])(dE[TP[225]], WW, [Mi[iW]])) return TP[70];
            for (let iW = TP[2]; iW < Ki[TP[0]]; iW++)
              if (WW[Ki[iW]] !== TP[14] && WW[Ki[iW]] !== TP[13]) return TP[70];
            return TP[43]
          })))
        },
        yi = (0, dE[TP[15]])("RXZlbnQ=");
      let Ti = HO[TP[227]][TP[242]],
        Ji = TP[2];
      const Hi = () => Ji++ === TP[9] ? (Ji = TP[2], lW(TP[43]) ? HO[TP[23]].CheckFuncHit : TP[2]) : TP[2],
        ni = (0, dE[TP[181]])(TP[14]),
        ui = mW[TP[0]];
      for (let cW = TP[2]; cW < ui; cW++) {
        const WW = (0, dE[TP[33]])(dE.ib, mW, [cW]);
        ni[cW] = WW >= 99 && WW <= TP[204] ? WW : TP[2]
      }
      const oi = (...WW) => {
          return WW[TP[0]] = TP[3], typeof WW[TP[2]] === TP[215] + TP[216] && (0, dE[TP[33]])(dE.Z, WW[TP[1]], [(iW = WW[TP[2]], (0, dE.m)(dE.C, iW, []))]) !== TP[14];
          var iW
        },
        di = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ei = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        vi = [
          [SP["Dispat" + TP[228] + TP[223]], () => !oi(EventTarget[TP[217] + TP[218]][TP[229] + TP[228] + TP[223]], di)],
          [SP.PerformanceNow, () => !oi(performance[TP[230]], ei)],
          [SP["DateNo" + TP[192]], () => !oi(Date[TP[230]], ei)]
        ],
        gi = (0, dE[TP[181]])(TP[14]);
      let Di = TP[2];
      const Vi = {
        stackCheck: () => {
          let WW = TP[14];
          const iW = UP((() => (WW = xW(TP[70]), WW !== TP[14])));
          var OW, mW;
          return WW !== TP[14] && AW === TP[14] && (OW = WW[TP[31]], mW = WW[TP[32]], AW = (0, zN.x)(ZP(OW, mW))), iW
        },
        [TP[231] + TP[232]]: () => {
          const WW = IW();
          if (WW === TP[3]) return TP[3];
          if (yW[Li]) return TP[4];
          const iW = sP((() => EW[ci] ? TP[36] : TP[2]));
          return iW !== TP[2] ? iW === TP[36] ? TP[36] : TP[2] : WW === kP ? TP[2] : WW === TP[7] ? TP[7] : (MW(), OW = Function[TP[217] + TP[218]], mW = TP[238], NW = (...WW) => (WW[TP[0]] = TP[1], WW[TP[2]].writable !== TP[70]), UP((() => {
            const WW = Object.getOwnPropertyDescriptor(OW, mW);
            return void 0 !== WW && NW(WW)
          })) ? TP[35] : TP[2]);
          var OW, mW, NW
        },
        indexPassReplaced: CW,
        [TP[233] + "tSubChanged"]: (...WW) => {
          if (WW[TP[0]] = TP[2], RW === BW || fW) return TP[43];
          const iW = qW();
          return iW !== BW && iW !== RW
        },
        BL: (...WW) => {
          HP(WW[TP[0]] = TP[2], WW[TP[18]] = ui);
          for (let iW = TP[2]; iW < vi[TP[0]] + Di; iW++) {
            const OW = iW < vi[TP[0]] ? vi[iW] : gi[iW - vi[TP[0]]];
            OW[TP[2]] < WW[TP[18]] && kW(OW[TP[1]]) && (WW[TP[18]] = OW[TP[2]])
          }
          return WW[TP[18]] < ui ? ni[WW[TP[18]]] : TP[2]
        },
        lt: () => aW ? mO[TP[234]] : TP[21],
        [TP[235] + TP[236] + "Subs"]: () => {
          const WW = cW.l.KU[TP[235] + TP[236]];
          return typeof WW === TP[237] && WW > TP[2] ? WW > TP[69] ? TP[69] : WW : TP[2]
        },
        ["getCom" + TP[246]]: (...WW) => {
          HP(WW[TP[0]] = TP[2], WW[TP[241]] = TP[13], FW = TP[2]);
          for (let OW = TP[2]; OW < nW; OW++) Ni(HW[OW], TP[70]);
          for (let OW = TP[2]; OW < wi[TP[0]]; OW++) yW[wi[OW][TP[2]]] && Ni(wi[OW][TP[1]], TP[70]);
          const iW = sP((() => jP(atob[TP[238]](), tW) ? TP[2] : TP[1]));
          iW === TP[1] && Ni(TP[22], TP[70]), MW();
          const mW = iW === kP ? kP : sP(((...WW) => {
            WW[TP[0]] = TP[2];
            const iW = Object.getOwnPropertyDescriptor(window, "atob");
            return iW === TP[13] ? kP : iW[TP[239]] !== TP[13] ? TP[1] : TP[2]
          }));
          mW === TP[1] && Ni(TP[185], TP[70]);
          const EW = mW === kP;
          for (let OW = TP[2]; OW < ti[TP[0]] && !EW; OW++) yW[ti[OW][TP[2]]] && Ni(ti[OW][TP[1]], TP[70]);
          const NW = FW > nW;
          WW[TP[46]] = TP[14], nW === TP[2] && (oW > TP[2] ? WW[TP[46]] = uW[TP[2]] : vW ? WW[TP[46]] = "fp" : NW || (WW[TP[46]] = yW[Zi] ? TP[240] : yW[xi] ? TP[222] : TP[14]));
          for (let OW = TP[2]; OW < Ai[TP[0]] && !EW; OW++) yW[Ai[OW][TP[2]]] && Ni(Ai[OW][TP[1]], TP[70]);
          const PW = FW,
            LW = (0, iP[TP[8]])(),
            cW = LW !== TP[14] && (0, Ci[TP[214]])(LW);
          cW && !EW && Ni(LW, TP[43]), XW && Ni("ix", TP[43]), hW && Ni("il", TP[43]);
          for (let OW = TP[2]; OW < oW; OW++) Ni(uW[OW], TP[70]);
          for (let OW = TP[2]; OW < bi[TP[0]]; OW++) yW[bi[OW][TP[2]]] && Ni(bi[OW][TP[1]], TP[70]);
          yW[ji] && Ni("mk:lk", TP[70]);
          const wW = ((...WW) => {
            WW[TP[0]] = TP[1];
            for (let iW = TP[2]; iW < ki[TP[0]]; iW++)
              if (WW[TP[2]] === ki[iW]) return ki[iW];
            return TP[14]
          })(yW[Ui]);
          if (wW !== TP[14] && Ni(wW, TP[70]), OW !== TP[14] && KW(OW.emitReplaced) === TP[70] && Ni("mk:em", TP[70]), Si && Ni("3s", TP[43]), dE._ && Ni("3b", TP[43]), MW(), sW && Ni("3d", TP[43]), EW && Ni("3g", TP[43]), LW === TP[14] || cW || Ni(LW, TP[43]), AW !== TP[14] && Ni(AW, TP[43]), UW === TP[14] && OW !== TP[14]) {
            const WW = KW(OW[TP[231] + "mMeshHitStac" + TP[234]]);
            typeof WW === TP[30] && (UW = function(WW, iW, OW) {
              let mW = 0;
              for (; mW < OW && -1 === EP(WW, iW[mW]);) mW++;
              return (0, zN.l)(ZP(WW, mW < OW ? iW[mW] : null))
            }(WW, ZW, ZW[TP[0]] - TP[1]))
          }
          var xW;
          if (UW !== TP[14] && Ni(UW, TP[43]), bW === TP[14] && mO[TP[185]] !== TP[14] && HP((xW = mO[TP[185]], bW = (0, zN.i)(AP(xW).reader)), jW = bP(mO[TP[185]], KW((() => mO[TP[19]] === TP[14] ? TP[14] : (0, dE.lb)(mO[TP[19]]))))), bW !== TP[14] && Ni(bW, TP[43]), jW !== TP[14] && Ni(jW, TP[43]), FW === TP[2]) return TP[14];
          if (WW[TP[46]] === TP[14] && zW[TP[2]] && !(0, zN[TP[214]])(rW[TP[2]]))
            for (let OW = TP[1]; OW < PW; OW++)
              if (zW[OW] && (0, zN[TP[214]])(rW[OW])) {
                const WW = rW[OW];
                for (let iW = OW; iW > TP[2]; iW--) HP(rW[iW] = rW[iW - TP[1]], zW[iW] = zW[iW - TP[1]]);
                HP(rW[TP[2]] = WW, zW[TP[2]] = TP[70]);
                break
              } if (HP(WW[TP[8]] = TP[2], WW[TP[4]] = WW[TP[46]] === TP[14] ? TP[2] : PW), WW[TP[4]] > TP[2] && LW !== TP[14] && cW && !EW) {
            for (let iW = WW[TP[4]]; iW > TP[2]; iW--) HP(rW[iW] = rW[iW - TP[1]], zW[iW] = zW[iW - TP[1]]);
            HP(rW[TP[2]] = LW, zW[TP[2]] = TP[43], WW[TP[8]] = TP[1], WW[TP[4]]++)
          }
          if (WW[-TP[187]] = TP[2], QW++ % TP[3] === TP[1])
            for (let OW = TP[1]; OW < FW; OW++) Pi(OW) < Pi(WW[-TP[187]]) && (WW[-TP[187]] = OW);
          const lW = rW[WW[-TP[187]]];
          (zW[WW[-TP[187]]] ? Oi : ii)[lW] = Wi++;
          const kW = WW[-TP[187]] >= WW[TP[8]] && WW[-TP[187]] < WW[TP[4]];
          if (!zW[WW[-TP[187]]] || lW === WW[TP[46]] || WW[-TP[187]] === TP[2] && !kW) return lW === TP[223] ? (0, zN.y)(yW[li], zN[TP[20]]) : lW;
          const SW = (WW[TP[241]] = WW[TP[46]]) !== TP[14] && void 0 !== WW[TP[241]] ? WW[TP[241]] : rW[TP[2]];
          return SW !== mi && HP(mi = SW, Ei = (0, dE[TP[181]])(TP[14])), Ei[lW] ??= (0, zN[TP[240]])(lW, SW)
        }
      };
      let fi = HO[TP[227]][TP[242]];
      const Xi = () => Ti !== HO[TP[227]][TP[242]] ? Ti : fi;
      let Bi = TP[2],
        qi = TP[3],
        Ri = TP[2],
        Gi = TP[2];
      return {
        checks: Vi,
        checkEvent: (...WW) => {
          WW[TP[0]] = TP[1];
          try {
            const iW = EW[yi];
            if (typeof iW === TP[215] + TP[216] && !(WW[TP[2]] instanceof iW) && !(0, dE[TP[226]])(WW[TP[2]])) return Ti = HO[TP[227]].NotEvent, TP[2];
            if (WW[TP[2]].isTrusted === TP[43]) return TP[2];
            let OW = TP[2];
            for (const mW in WW[TP[2]]) OW++;
            return OW < TP[26] ? (Ti = HO[TP[227]]["FewPropertie" + TP[15]], TP[2]) : Hi()
          } catch {}
          return TP[2]
        },
        checkPadCall: () => {
          try {
            return Hi()
          } catch {
            return TP[2]
          }
        },
        usedProp: Xi,
        watchHeld: (WW, iW) => {
          let OW;
          const mW = SW((() => {
            OW = iW()
          }));
          gi[Di++] = [WW, () => !mW || iW() !== OW]
        },
        hZ: (...WW) => {
          WW[TP[0]] = TP[2];
          const iW = CW();
          return ((...WW) => {
            if (HP(WW[TP[0]] = TP[1], WW[TP[18]] = TP[13], WW[TP[19]] = TP[13]), OW !== TP[14]) {
              const iW = KW(OW.eL),
                mW = "v3" === iW ? TP[4] : "v5" === iW ? TP[9] : "v6" === iW ? TP[7] : TP[3];
              mW !== TP[3] && (qi = mW);
              const EW = KW(OW["inbuil" + TP[244] + TP[245]]);
              typeof EW === TP[237] && EW >= TP[2] && EW <= TP[10] && (EW | TP[2]) === EW && (Ri = EW), HP(WW[TP[18]] = KW(OW.reflectApplyHit), WW[TP[19]] = KW(OW.definerHit))
            }
            const iW = WW[TP[2]] ? TP[51] : "11" === WW[TP[19]] ? TP[10] : "13" === WW[TP[19]] ? TP[99] : WW[TP[18]] !== TP[13] && WW[TP[18]] !== TP[14] ? TP[3] : "10" === WW[TP[19]] ? TP[26] : "12" === WW[TP[19]] ? TP[57] : TP[2];
            iW !== TP[2] && (Gi = iW)
          })(iW), Bi++ % 10 === TP[2] && (Yi(), UP((() => !jP(EW[NW][TP[238]][TP[238]](), tW))) && (fi = fi === HO[TP[227]][TP[243]] ? HO[TP[227]][TP[243]] : HO[TP[227]].Fr), UP((() => !jP(EW[NW][TP[238]](), tW))) && (fi = HO[TP[227]][TP[243]])), {
            flags: iW ? HO[TP[23]].Butto : TP[2],
            values: [
              [HO[TP[5]].PhysicsVersion, qi],
              [HO[TP[5]]["Inbuil" + TP[244] + TP[245]], Ri],
              [HO[TP[5]]["AltCom" + TP[246]], Gi],
              [HO[TP[5]]["ProbeUsedPro" + TP[181]], Xi()]
            ]
          }
        }
      }
    };
    const nP = "[bloxd-wasm-client]",
      uP = "bloxdWasmDownloadFailed",
      oP = BO.g,
      dP = "boot",
      eP = "playSources",
      vP = "wasmBuild",
      gP = "bloxd-wasm-joined",
      DP = "bloxd-wasm-first-view",
      VP = "bloxd-wasm-playable-legacy",
      pP = 1048576,
      fP = 8 * pP,
      CP = 1006,
      XP = 1e3,
      BP = "You lost connection to the server.",
      qP = "general:lostConnection",
      RP = 1048576,
      GP = 5e3,
      IP = 100,
      aP = [2e3, 1e4, 3e4],
      rP = 3e4;
    let zP = null,
      FP = null,
      QP = !1,
      WL = !1,
      iL = !1,
      OL = null,
      mL = null,
      EL = null,
      NL = null,
      PL = null,
      LL = null,
      cL = null;
    const wL = new class {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = WW, this.soundOn = iW, this.now = OW, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(WW) {
        var iW;
        this.stopped || (null === (iW = this.player) || void 0 === iW || iW.preload(WW))
      }
      endSession() {
        var WW;
        null === (WW = this.player) || void 0 === WW || WW.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var WW;
        null === (WW = this.player) || void 0 === WW || WW.freeSoundsAfterGame()
      }
      load(WW) {
        if (null !== this.player || this.stopped) return;
        this.player = WW, WW.setMaster(this.master, this.soundOn);
        const iW = this.now(),
          OW = this.local;
        this.local = [];
        for (const EW of OW)
          if (!(EW.stopped || !EW.loop && iW - EW.at >= 300)) try {
            this.start(EW, WW, iW)
          } catch (mW) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", mW)
          }
      }
      start(WW, iW, OW) {
        const {
          name: mW,
          pos: EW,
          ear: NW,
          maxHearDist: PW,
          refDistance: LW,
          loop: cW,
          fade: wW
        } = WW, tW = iW.playGame(mW, yO(WW, OW), EW, NW, PW, LW, cW);
        if (WW.sound = tW, 1 !== WW.rate && tW.rate(WW.rate), null !== WW.panner && tW.setPannerAttr(WW.panner), null !== WW.moved && tW.setPosition(WW.moved), null !== wW && OW - wW.at < wW.ms) {
          const iW = YO(this.master);
          iW > 0 ? tW.fade(0, WW.volume * iW, wW.at + wW.ms - OW) : tW.setRelativeVolume(WW.volume)
        }
      }
      onAudioEvent(WW, iW, OW, mW) {
        var EW, NW;
        return null === (EW = null === (NW = this.player) || void 0 === NW ? void 0 : NW.onAudioEvent(WW, iW, OW, mW)) || void 0 === EW || EW
      }
      applyListener(WW) {
        var iW;
        null === (iW = this.player) || void 0 === iW || iW.applyListener(WW)
      }
      playGame(WW, iW, OW, mW, EW, NW, PW) {
        if (this.stopped) return SO.c;
        if (this.player) return this.player.playGame(WW, iW, OW, mW, EW, NW, PW);
        const LW = this.now();
        this.local = this.local.filter((WW => !WW.stopped && (WW.loop || LW - WW.at < 300)));
        const cW = {
          name: WW,
          volume: YO(iW),
          fade: null,
          pos: OW && [OW[0], OW[1], OW[2]],
          ear: mW && [mW[0], mW[1], mW[2]],
          maxHearDist: EW,
          refDistance: NW,
          loop: PW,
          rate: 1,
          panner: null,
          moved: null,
          at: LW,
          stopped: !1,
          sound: null
        };
        this.local.push(cW);
        const wW = {
          stop: () => {
            var WW;
            return cW.stopped = !0, null === (WW = cW.sound) || void 0 === WW || WW.stop(), wW
          },
          fade: (WW, iW, OW) => {
            if (cW.sound) return cW.sound.fade(WW, iW, OW), wW;
            const mW = YO(this.master),
              EW = YO(mW > 0 ? iW / mW : iW > 0 ? cW.volume : 0),
              NW = this.now(),
              PW = yO(cW, NW);
            return cW.volume = EW, cW.fade = OW > 0 && PW !== EW ? {
              from: PW,
              at: NW,
              ms: OW
            } : null, wW
          },
          rate: WW => (cW.sound ? cW.sound.rate(WW) : cW.rate = WW, wW),
          getVolume: () => cW.sound ? cW.sound.getVolume() : cW.volume * YO(this.master),
          getRelativeVolume: () => cW.sound ? cW.sound.getRelativeVolume() : cW.volume,
          setRelativeVolume: WW => (cW.sound ? cW.sound.setRelativeVolume(WW) : (cW.volume = YO(WW), cW.fade = null), wW),
          setPannerAttr: WW => (cW.sound ? cW.sound.setPannerAttr(WW) : cW.panner = {
            ...WW
          }, wW),
          setPosition: WW => (cW.sound ? cW.sound.setPosition(WW) : cW.moved = [WW[0], WW[1], WW[2]], wW)
        };
        return wW
      }
      setMaster(WW, iW) {
        var OW;
        this.master = WW, this.soundOn = iW, null === (OW = this.player) || void 0 === OW || OW.setMaster(WW, iW)
      }
      stop() {
        var WW;
        this.stopped = !0, null === (WW = this.player) || void 0 === WW || WW.stopAll();
        for (const iW of this.local) iW.stopped = !0;
        this.local = []
      }
    }((0, EO.d)(), !0);
    let tL = {
        wasm: "unknown",
        client: String(oi.d)
      },
      ZL = null,
      xL = !1,
      lL = () => {};
    const AL = new Promise((WW => {
      lL = iW => {
        xL = !0, WW(iW)
      }
    }));
    let bL = () => {};
    const jL = new Promise((WW => {
      bL = WW
    }));
    let UL, kL = null,
      sL = null,
      ML = null,
      KL = null,
      SL = null,
      YL = null,
      yL = null,
      TL = null,
      JL = null,
      hL = null,
      HL = null,
      nL = null,
      uL = null,
      oL = null,
      dL = null,
      eL = null,
      vL = null,
      gL = null,
      DL = null,
      VL = !1,
      pL = null;
    const fL = new Set,
      CL = new Set;

    function XL(WW) {
      if (!fL.has(WW)) {
        fL.add(WW);
        for (const OW of CL) try {
          OW(WW)
        } catch (iW) {
          console.error(`${nP} a startup listener threw`, iW)
        }
      }
    }

    function BL(WW) {
      VL = !0, WW.isStopped || XL("texturesIn")
    }
    let qL = 1,
      RL = -1 / 0,
      GL = -1 / 0,
      IL = -1 / 0,
      aL = !1,
      rL = null,
      zL = !1,
      FL = !1,
      QL = 0,
      Wc = null,
      ic = !1;
    const Oc = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let mc = 0,
      Ec = 0,
      Nc = null,
      Pc = null,
      Lc = null,
      cc = null;
    const wc = new WeakMap;
    let tc = null,
      Zc = null,
      xc = !1,
      lc = null,
      Ac = null,
      bc = null,
      jc = null,
      Uc = null,
      kc = null,
      sc = 0;
    const Mc = new Set;
    let Kc = 0,
      Sc = 0,
      Yc = 0,
      yc = null,
      Tc = null,
      Jc = null,
      hc = null,
      Hc = -1 / 0,
      nc = null;
    const uc = new Set;
    let oc = !1,
      dc = null;
    const ec = new Map,
      vc = new Set;
    let gc = !1;
    const Dc = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Vc = null,
      pc = () => [0, 0],
      fc = () => {},
      Cc = () => {},
      Xc = null,
      Bc = null;
    const qc = new class {
      constructor(WW) {
        this.reached = WW, this.next = 1
      }
      observe(WW) {
        if (!(WW < this.next)) {
          for (; this.next <= WW;) this.next *= 2;
          this.reached(WW)
        }
      }
    }((WW => {
      console.warn(`${nP} chunk cancels from the server this session: ${WW}`)
    }));
    let Rc = 1,
      Gc = null,
      Ic = null,
      ac = null,
      rc = null,
      zc = null,
      Fc = !1,
      Qc = !1,
      Ww = 0,
      iw = null,
      Ow = !1,
      mw = null,
      Ew = null;
    const Nw = new Jm.e(new IO.d);
    let Pw = "",
      Lw = null,
      ww = null,
      tw = !1;
    const Zw = new class {
      constructor(WW) {
        this.iZ = WW, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.BL = !1
      }
      isShown() {
        return this.shown
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(WW, iW, OW) {
        (0, tO.b)(WW) && (this.lossPending = !1);
        const mW = OW - this.lastFrameMs;
        this.lastFrameMs = OW, this.lossPending && iW && (0, tO.g)(WW) ? (null === this.undrawnSinceMs || mW > 1e3) && (this.undrawnSinceMs = OW) : this.undrawnSinceMs = null, this.show(this.BL || null !== this.undrawnSinceMs && OW - this.undrawnSinceMs >= 2e3)
      }
      hold(WW) {
        this.BL = WW, this.show(WW || this.shown)
      }
      stop() {
        this.BL = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(WW) {
        WW !== this.shown && (this.shown = WW, this.iZ(WW))
      }
    }((WW => {
      cW.l.iZ(AW.h, WW)
    }));
    let xw = !1;
    const lw = new class {
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bO.k;
          this.iZ = WW, this.hidden = iW, this.countdown = null, this.stuckJoins = 0, this.stuck = null
        }
        join(WW) {
          this.end(), this.countdown = new bO.d(15e3, (() => {
            this.countdown = null, this.stuckJoins++, this.show(this.stuckJoins > 2 ? "reload" : "retry")
          }), (() => this.hidden() || !WW()))
        }
        shown() {
          this.stuckJoins = 0, this.end()
        }
        end() {
          var WW;
          null === (WW = this.countdown) || void 0 === WW || WW.stop(), this.countdown = null, this.show(null)
        }
        show(WW) {
          WW !== this.stuck && (this.stuck = WW, this.iZ(WW))
        }
      }((WW => {
        cW.l.iZ(AW.d, WW)
      })),
      Aw = new class {
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.wZ = WW, this.now = iW, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(WW, iW) {
          this.watched.has(WW) || (this.watched.add(WW), WW.addEventListener("webglcontextlost", (() => {
            iW() && this.contextLost()
          })), WW.addEventListener("webglcontextrestored", (() => {
            iW() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(WW, iW) {
          (0, tO.g)(WW) && iW && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(WW) {
          const iW = this.lastRestore;
          return null !== iW && WW - iW.atMs < 3e4 ? iW : null
        }
        contextRestored() {
          const WW = this.take();
          if (null === WW) this.lastRestore = null;
          else {
            var iW, OW;
            const mW = this.unheldRestore(WW.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (iW = null === mW || void 0 === mW ? void 0 : mW.firstLostAtMs) && void 0 !== iW ? iW : WW.lostAtMs,
              asked: null !== (OW = null === mW || void 0 === mW ? void 0 : mW.asked) && void 0 !== OW && OW || WW.asked
            };
            const EW = WW.asked ? "restore_context" : "natural";
            this.wZ(`webgl_restored_${EW}_${WW.delay}`, `WebGL2 context restored (${EW}, wasm)`)
          }
        }
        gaveUp() {
          const WW = this.take();
          if (null !== WW) {
            var iW;
            const OW = this.unheldRestore(WW.lostAtMs),
              mW = null === OW ? WW.delay : (0, ZO.i)(this.now() - OW.firstLostAtMs),
              EW = WW.asked || null !== (iW = null === OW || void 0 === OW ? void 0 : OW.asked) && void 0 !== iW && iW ? "restore_tried" : "restore_untried";
            this.wZ(`webgl_rejoin_${EW}_${mW}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const WW = this.lostAtMs;
          return null === WW ? null : (this.lostAtMs = null, {
            lostAtMs: WW,
            delay: (0, ZO.i)(this.now() - WW),
            asked: this.asked
          })
        }
      }(xm.reportRenderRecovery),
      bw = new class {
        constructor(WW) {
          var iW, OW, mW, EW;
          this.deps = WW, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (iW = WW.storage) && void 0 !== iW ? iW : lO.j, this.now = null !== (OW = WW.now) && void 0 !== OW ? OW : performance.now.bind(performance), this.wallNow = null !== (mW = WW.wallNow) && void 0 !== mW ? mW : Date.now, this.setTimer = null !== (EW = WW.setTimer) && void 0 !== EW ? EW : (WW, iW) => {
            setTimeout(WW, iW)
          }
        }
        watch(WW, iW) {
          this.watched.has(WW) || (this.watched.add(WW), WW.addEventListener("webglcontextlost", (() => {
            iW() && this.lost()
          })), WW.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const WW = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = WW, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = WW, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const WW = this.now(),
            iW = ++this.generation;
          this.setTimer((() => {
            iW === this.generation && this.end("restored", WW)
          }), 3e4)
        }
        reload(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && (iW ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void WW();
          this.heldReload = WW, this.deps.hold(!0);
          const OW = ++this.generation,
            mW = () => this.lastLostAtMs + PO.b + 5e3,
            EW = () => {
              this.setTimer(NW, Math.max(0, Math.min(5e3, mW() - this.now())))
            },
            NW = () => {
              OW === this.generation && (this.deps.probe() ? this.release("cleared_reload", WW) : this.now() >= mW() ? this.release("gave_up", WW) : EW())
            };
          EW()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const iW = (0, xO.f)(this.storage);
          null !== iW && this.writeMarker(WW ? {
            lostAt: iW.lostAt
          } : {
            ...iW,
            leftAt: this.wallNow()
          })
        }
        release(WW, iW) {
          this.end(WW), iW()
        }
        end(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const OW = this.firstLostAtMs;
          if (this.clear(), null !== OW) {
            const {
              code: mW,
              message: EW
            } = (0, xO.h)(WW, iW - OW);
            this.deps.wZ(mW, EW)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(xO.b)
        }
        writeMarker(WW) {
          this.storage.setItem(xO.b, WW)
        }
      }({
        wZ: xm.reportRenderRecovery,
        probe: () => AO("rust_webgl1" === (0, AN.B)()),
        hold: WW => {
          Zw.hold(WW)
        }
      });
    let jw = !1,
      Uw = !0,
      kw = null,
      sw = !1,
      Mw = !1;

    function Kw() {
      if (null === Gc) return null;
      const {
        canvas: WW,
        backend: iW
      } = Gc;
      return {
        canvas: WW,
        renderer: KO.e[iW]
      }
    }

    function Sw() {
      return EL ??= Promise.all([OW.e(177), OW.e(91), OW.e(224), OW.e(158), OW.e(245), OW.e(244), OW.e(243), OW.e(222), OW.e(50), OW.e(161), OW.e(242), OW.e(72)]).then((() => OW(44911))).then((WW => (mL = WW, Object.assign(globalThis, {
        bloxdPreviewPage: WW.pagePreviews()
      }), WW)), (WW => {
        throw EL = null, WW
      })), EL
    }

    function Yw() {
      return OL ??= OW.e(70).then((() => OW(54800))).catch((WW => {
        throw OL = null, new qW.b(WW)
      })), OL
    }
    class yw {
      constructor() {
        this.host = null
      }
      open(WW) {
        return null !== this.host ? WW(this.host) : Sw().then((iW => (this.host ??= new iW.WasmPreviewHost(iW.pagePreviews()), WW(this.host))))
      }
      openMob(WW) {
        return this.open((iW => iW.openMob(WW)))
      }
      openPet(WW) {
        return this.open((iW => iW.openPet(WW)))
      }
      openMobLineup(WW) {
        return this.open((iW => iW.openMobLineup(WW)))
      }
      openCharacter(WW, iW) {
        return this.open((OW => OW.openCharacter(WW, iW)))
      }
    }

    function Tw() {
      iL || (iL = !0, cN.f.setHost(new yw), (0, jm.n)(), EN.h.setFollower(Dt), Object.assign(globalThis, {
        bloxdPreviews: cN.f
      }))
    }

    function Jw() {
      Sw().then((WW => {
        WW.pagePreviews().prefetch()
      }), (() => {}))
    }

    function hw() {
      let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (WL) return;
      WL = !0, jw = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Uw = !jw, console.info(`${nP} starting`), QP || (QP = !0, (0, AW.J)(new kO(zw, Nt, Kw)), (0, xW.o)(new sO), (0, AW.F)(new MO((() => performance.now() - RL))), (0, AW.v)()), jw && cW.l.subscribe("appManagerUpdated|gameState", rw), Tw(), (0, xm.setCrashScreen)(KZ), (0, GE.g)(), (0, mO.g)();
      let iW = null;
      try {
        iW = yP("t9kd9lifxzi", (() => {
          var WW, iW;
          return null !== (WW = null === (iW = kL) || void 0 === iW ? void 0 : iW.ws) && void 0 !== WW ? WW : null
        }), WW, "jckntermls")
      } catch (EW) {
        console.error(`${nP} probes`, EW)
      }
      const mW = function() {
        const WW = (0, YE.m)(),
          iW = (0, YE.h)();
        let OW = !1;
        return mW => {
          WW && !OW && (OW = !0, (0, xm.reportStaleBuildReload)(WW, iW, mW))
        }
      }();
      pt(), jw || function() {
        const WW = function(WW) {
          var iW;
          const OW = new URLSearchParams(WW),
            mW = OW.get("game");
          return mW ? {
            game: mW,
            lobby: null !== (iW = OW.get("lobby")) && void 0 !== iW ? iW : null
          } : null
        }(window.location.search);
        if (WW) return (0, di.i)(WW.game) && pt().request(), void uw(WW.game, WW.lobby);
        const iW = new URLSearchParams(window.location.search).get("ws");
        if (!iW) return;
        AL.then((WW => {
          WW && async function(WW, iW) {
            try {
              await (0, qW.h)(WW), lc = tt(new WebSocket(iW)), null !== lc && NN.d.setGame(null), Hw()
            } catch (EW) {
              console.error(`${nP} ?ws=${iW} did not attach`, EW)
            }
          }(WW, iW)
        }))
      }(), async function(WW) {
        var iW, mW, NW, PW, LW, wW;
        if ("undefined" === typeof WebAssembly) return Tt("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const tW = (0, AN.O)();
        let xW = await (0, AN.J)();
        if (ht(xW) && function() {
            const WW = Date.now();
            return !(0, Ri.v)((0, Ri.y)(), nt, WW, Ri.e) && (0, Ri.r)(nt, WW, Ri.e)
          }()) {
          const WW = ut(xW, tW),
            iW = await async function(WW) {
              let {
                decline: iW,
                detail: OW,
                details: mW
              } = WW;
              console.warn(`${nP} ${OW}: waiting for a WebGL context`);
              const EW = performance.now(),
                NW = await kN({
                  sleep: (WW, iW) => (0, WO.b)(WW, iW).catch((() => {})),
                  repick: async () => {
                    const WW = await (0, AN.R)();
                    return ht(WW) ? null : {
                      Kl: WW
                    }
                  },
                  showScreen: WW => {
                    const OW = (0, yi.g)("blockedAfterLoss" === iW ? "graphicsLost" : "noContext");
                    return ni({
                      ...OW,
                      cancel: jw ? OW.cancel : null
                    }, WW)
                  }
                }),
                PW = String(Math.round(performance.now() - EW));
              if (null === NW.picked) {
                const WW = NW.gaveUp ? "waited" : "left";
                return (0, xm.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "gaveUp",
                  tries: NW.tries,
                  detail: `${OW}; ${WW}`,
                  details: {
                    ...mW,
                    waitedMs: PW
                  }
                }), NW.gaveUp ? {
                  gaveUp: !0
                } : ((0, Zi.f)("/"), null)
              }
              const {
                Kl: LW
              } = NW.picked;
              if (!(0, BO.r)(LW)) {
                var cW;
                const WW = null !== (cW = null === LW || void 0 === LW ? void 0 : LW.backend) && void 0 !== cW ? cW : "none";
                (0, xm.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "recovered",
                  tries: NW.tries,
                  detail: OW,
                  details: {
                    ...mW,
                    backend: WW,
                    waitedMs: PW
                  }
                }), null !== LW && (0, AN.L)(LW.backend)
              }
              return NW.picked
            }(WW);
          if (null === iW) return null;
          if ("gaveUp" in iW) return (0, xm.setCrashBackend)("unsupported"), Tt("browser", WW.decline, WW.detail, {
            ...WW.details,
            afterWait: "true"
          }), null;
          xW = iW.Kl
        }
        const lW = await async function(WW, iW) {
          const OW = (0, BO.r)(WW) ? ut(WW, iW) : null;
          if (null === OW || void 0 === OW || !OW.retries) return WW;
          console.warn(`${nP} ${OW.detail}: picking again in ${Jt} ms`), await new Promise((WW => {
            setTimeout(WW, Jt)
          }));
          const mW = await (0, AN.R)();
          if (!(0, BO.r)(mW)) {
            var EW;
            (0, xm.reportNoBackendRetry)("reprobed", OW.decline, OW.detail, {
              ...OW.details,
              backend: null !== (EW = null === mW || void 0 === mW ? void 0 : mW.backend) && void 0 !== EW ? EW : "none"
            }), null !== mW && (0, AN.L)(mW.backend)
          }
          return mW
        }(xW, tW);
        if ((0, xm.setCrashBackend)((0, BO.r)(lW) ? "unsupported" : null !== (iW = null === lW || void 0 === lW ? void 0 : lW.backend) && void 0 !== iW ? iW : "none"), (0, BO.r)(lW)) return function(WW) {
          let {
            decline: iW,
            detail: OW,
            details: mW,
            retries: EW
          } = WW;
          if (EW && (0, qi.u)()) return (0, xm.reportNoBackendRetry)("reload", iW, OW, mW), void ot(`${OW}, again after ${Jt} ms`);
          Tt("browser", iW, OW, EW ? {
            ...mW,
            afterReload: String(qi.D)
          } : mW)
        }(ut(lW, tW)), null;
        if ((0, gN.t)("render")) try {
          const {
            startRenderDebug: WW
          } = await Promise.all([OW.e(91), OW.e(57)]).then((() => OW(5419)));
          WW(lW)
        } catch (Ki) {
          console.warn("The render debug topic didn't load", Ki)
        }
        if ((0, gN.t)("renderlite")) try {
          const {
            startRenderLite: WW
          } = await Promise.all([OW.e(306), OW.e(58)]).then((() => OW(54811)));
          ac = WW(lW)
        } catch (Ki) {
          console.warn("The renderlite debug topic didn't load", Ki)
        }
        if ((0, gN.t)("renderprobe")) try {
          const {
            startRenderProbe: WW
          } = await OW.e(59).then((() => OW(54813)));
          WW(lW)
        } catch (Ki) {
          console.warn("The renderprobe debug topic didn't load", Ki)
        }
        if ("webgl" === (null === lW || void 0 === lW ? void 0 : lW.backend) && jw && "address" !== qi.B.reason) {
          const WW = ME(lW);
          null !== WW && (0, Gi.h)(WW)
        }
        const AW = null !== (mW = null === lW || void 0 === lW ? void 0 : lW.backend) && void 0 !== mW ? mW : null;
        Dc.adapter = null !== (NW = null === lW || void 0 === lW ? void 0 : lW.adapter) && void 0 !== NW ? NW : null, Dc.boundAtMs = null, Dc.indirectHangs = null, Dc.restoresSkipped = null;
        const bW = !(0, BO._)();
        null === lW || (0, BO.C)(lW.reason) || console.info(`${nP} drawing with ${lW.backend}: ${lW.reason}`);
        const jW = (0, AN.z)();
        HW("previews"), bL(!0), (0, qW.t)((WW => {
          try {
            null !== AW && (Xc = WW.startSkyFeed, vt(), function(WW) {
              var iW, OW;
              pc = WW.rasterText, bc = WW.setTextLocalPlayer, WW.setTextLocalPlayer(null !== (iW = null === (OW = Ac) || void 0 === OW ? void 0 : OW.info.playerDbId) && void 0 !== iW ? iW : null), fc = WW.drainTextRerasters, Cc = WW.loadTextIcons, WW.warmText((() => Fc)), WW.textChanged(), Fc && setTimeout(Cc, 0)
            }(WW), Bc = WW.startShellAnalytics, Rt())
          } finally {
            Mw || (rc = WW.followMenuPrefs({
              setSoundPrefs: Lt,
              setEnvPrefs: ct,
              setUiPrefs: Pt,
              setLookPrefs: wt
            }))
          }
        })), (0, qW.l)(wL).catch((WW => {
          console.warn(`${nP} the game code did not load: a join asks again`, WW)
        }));
        const UW = (0, AN.k)(lW);
        let kW, sW;
        UW.catch((() => {})), "loading" === (0, gi.D)() && (uW(), HW("load"));
        try {
          kW = function(WW) {
            const iW = null !== WW && void 0 !== WW ? WW : document.createElement("canvas");
            iW.id = "wasm-game-canvas", Aw.watch(iW, kZ), bw.watch(iW, kZ),
              function(WW) {
                if (TZ.has(WW)) return;
                TZ.add(WW), WW.addEventListener("webglcontextlost", (() => {
                  var WW;
                  const iW = null !== cc && lZ(),
                    OW = null === (WW = window.bloxdRenderDebug) || void 0 === WW ? void 0 : WW.vaos;
                  setTimeout((() => {
                    var WW, mW, EW, NW, PW;
                    null === (WW = ac) || void 0 === WW || WW.glContextLost(iW, OW, null !== (mW = null !== (EW = !1 === (null === (NW = NL) || void 0 === NW ? void 0 : NW.isStopped) ? NL.addDistanceInUse() : null) && void 0 !== EW ? EW : null === (PW = yZ()) || void 0 === PW ? void 0 : PW.horizontal) && void 0 !== mW ? mW : null)
                  }), 0)
                }))
              }(iW), (0, yN.k)();
            const OW = (0, UO.e)(),
              mW = (0, UO.g)(OW);
            iW.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, YN.g)(iW, mW), (0, UO.c)(iW, OW), iW.width = mW.bufferWidth, iW.height = mW.bufferHeight;
            const EW = document.createElement("div");
            return EW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", EW.append(iW), Fw(EW, Uw), kw = EW, document.body.append(EW), iW
          }(null === AW ? null : await (await Sw()).pagePreviews().beginSession())
        } catch (EW) {
          return oW("fetch"), await VZ({
            site: vP,
            error: EW
          }, (() => {
            (0, xm.showUnsupported)((0, yi.k)("fetch"), qN.g.fetch, `the previews did not load: ${String(EW)}`)
          })), null
        }
        uW(), HW("loading" === (0, gi.D)() ? "load" : "build");
        try {
          sW = await UW
        } catch (EW) {
          return oW("fetch"), await VZ({
            site: vP,
            error: EW
          }, (() => {
            (0, xm.showUnsupported)((0, yi.k)("fetch"), qN.g.fetch, `the ${null!==AW&&void 0!==AW?AW:"client"} build did not load: ${String(EW)}`)
          })), null
        }
        const MW = (0, AN.g)(),
          SW = !MW && !0 !== lO.j.getItem(uP),
          YW = !MW && "loading" === (0, gi.D)();
        HW("load"), await (0, bN.c)(sW, {
          reloadFailedDownload: SW
        }), YW && !(0, gi.R)() && await (0, bN.c)(sW, {
          reloadFailedDownload: SW
        });
        let yW = !1,
          TW = !1;
        const JW = (0, gi.p)();
        if (!(0, gi.R)() && ("compile" === JW || "instantiate" === JW) && (0, gi.P)()) {
          const WW = (0, gi.h)();
          console.warn(`${nP} the wasm client did not ${JW} here (${WW}): loading it again`);
          const iW = await async function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jN,
              OW = !1,
              mW = 0;
            for (const EW of iW) {
              if (!WW.retryable()) break;
              if (WW.outOfMemory() && (OW = !0, "spent" === WW.stepDownMemory())) return {
                recovered: !1,
                tries: mW,
                outOfMemory: OW,
                spent: !0
              };
              if (await WW.sleep(EW), mW++, await WW.retry()) return {
                recovered: !0,
                tries: mW,
                outOfMemory: OW,
                spent: !1
              }
            }
            return OW ||= WW.outOfMemory(), {
              recovered: !1,
              tries: mW,
              outOfMemory: OW,
              spent: !1
            }
          }({
            sleep: WW => (0, WO.b)(WW),
            outOfMemory: () => (0, oO.d)((0, gi.m)()),
            retryable: gi.P,
            stepDownMemory: () => "instantiate" !== (0, gi.p)() || !dt() || (0, cm.q)() ? "none" : "halve" === (0, cm.p)() ? "halved" : "spent",
            retry: bN.g
          });
          yW = iW.outOfMemory, TW = iW.spent;
          const {
            tries: OW,
            recovered: mW
          } = iW, EW = mW ? WW : (0, gi.h)();
          (0, xm.reportLoadRecovery)({
            step: "load",
            stage: JW,
            oom: yW,
            outcome: mW ? "recovered" : "gaveUp",
            tries: OW,
            detail: EW
          })
        }
        KW ??= performance.now();
        const hW = tL;
        if (!(0, gi.R)()) {
          (0, gi.Q)() && "compile" !== JW && "instantiate" !== JW && lO.j.setItem(uP, !0);
          const WW = (0, gi.p)();
          if (oW("instantiate" === WW || null === WW ? `instantiate_${nW((0,gi.m)())}` : WW), "call" === WW) MZ({
            site: RO.y,
            error: (0, gi.m)(),
            header: null
          }, hW);
          else {
            const iW = null !== WW && void 0 !== WW ? WW : "instantiate",
              OW = () => {
                (0, xm.showUnsupported)((0, yi.k)(iW), qN.g[iW], (0, gi.h)())
              },
              mW = "compile" === JW || "instantiate" === JW ? JW : WW;
            if ("compile" === mW || "instantiate" === mW) {
              const WW = yW || (0, oO.d)((0, gi.m)());
              if (jw && (WW && dt() ? !TW && "spent" !== (0, cm.p)(Date.now(), !0) : (0, qi.u)())) {
                const iW = (0, gi.h)();
                return (0, xm.reportLoadReload)((0, yi.k)(mW), qN.g[mW], iW), ot(`the wasm client ${WW?"ran out of memory to":"did not"} ${mW} here (${iW})`), null
              }(0, xm.showUnsupported)(WW ? "memory" : (0, yi.k)(mW), qN.g[mW], (0, gi.h)())
            } else if ("fetch" === iW) {
              const WW = [sW.url().href, Xi.d.url().href];
              await VZ({
                site: vP,
                error: (0, gi.h)(),
                urls: WW
              }, (() => {
                OW()
              }))
            } else OW()
          }
          return null
        }(0, Vi.J)(sW.url()) && (0, xm.reportUnstreamedCoreLoad)();
        const dW = (0, gi.G)();
        let eW, vW = hW;
        HW("core");
        try {
          vW = {
            ...hW,
            wasm: dW.RZ()
          };
          const {
            WU: WW
          } = sW.bindings, iW = WW.TmW();
          if (iW !== HO.v) return oW("core_other"), MZ({
            site: RO.d,
            error: `core ABI ${iW}, page ABI ${HO.v}`,
            header: null
          }, vW), null;
          const [OW, mW] = (0, HO.te)();
          eW = new WW(OW, mW)
        } catch (EW) {
          return oW(`core_${nW(EW)}`), MZ({
            site: RO.d,
            error: EW,
            header: null
          }, vW), null
        }
        oW("ok"), tL = vW, ZL = sW.bindings;
        const gW = new RO.h(eW, gi.v, {
          onCrash: WW => {
            var iW;
            null === (iW = ac) || void 0 === iW || iW.crashed(WW),
              function(WW, iW, OW, mW) {
                if ("webgpu" !== iW || (0, AN.c)()) return !1;
                const EW = function(WW) {
                  if (WW.site === RO.f && (0, BO.s)(WW.error)) return "frames_refused";
                  return WW.site === oP && (0, BO.u)(WW.error) ? "start_failed" : null
                }(WW);
                if (null === EW) return !1;
                if (null !== (0, BO.Z)(EW, mW, (0, qO.e)(WW.error))) return (0, xm.countRenderLost)(EW, WW.error, Dc), !1;
                return PO.G.reloaded(null, !1), (0, xm.reportRenderReload)("webgpu", "start_failed" === EW ? 0 : 1, OW, {
                  cause: EW,
                  error: WW.error,
                  context: Dc,
                  session: JZ(null)
                }), WZ(), !0
              }(WW, AW, vW, bW) || MZ(WW, vW)
          },
          onNetEvent: zt,
          onReconnectGrace: St,
          onJoinPreloadEnded: Kt,
          onCoreErrors: (WW, iW) => {
            var OW, mW;
            WW.some((WW => {
              let {
                code: iW
              } = WW;
              return iW === HO.D.RenderDeviceLost
            })) && ((0, AN.x)(), (0, LO.e)(), Zw.deviceLost(), "webgpu" === AW && ((0, qO.h)(Vc), PO.G.lost())), null === (OW = ac) || void 0 === OW || OW.coreErrors(WW);
            const EW = () => {
              (0, xm.reportCoreErrors)(WW, iW, vW, ((WW, iW) => {
                var OW;
                return WW === HO.D.EnvUnknownSky ? (0, xm.unknownSkyWords)(Ii.d.get("skyBox")) : WW === HO.D.RenderDeviceLost ? (0, xm.deviceLossWords)(iW, Dc.boundAtMs) : null === (OW = Vc) || void 0 === OW ? void 0 : OW.JmW(WW, iW)
              }))
            };
            WW.some((WW => {
              let {
                code: iW
              } = WW;
              return iW === HO.D.EnvUnknownSky
            })) ? queueMicrotask(EW) : EW(), null === (mW = pL) || void 0 === mW || mW.coreErrors(WW)
          },
          onRenderReload: (WW, iW, OW) => {
            ! function(WW, iW, OW, mW, EW, NW) {
              var PW;
              if ((0, AN.c)()) return;
              const LW = iW === HO.cd.WEBGPU,
                cW = mW === HO.cd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                wW = mW === HO.cd.RESTORE_LOST,
                tW = LW && (0, PO.p)(Dc.adapter, OW, "lost" === cW, wW),
                xW = (0, qO.n)(Vc);
              null === (PW = ac) || void 0 === PW || PW.reload(LW, OW, cW, null === xW || void 0 === xW ? void 0 : xW.message);
              const lW = LW ? (0, BO.Z)(cW, EW, xW) : null;
              if (null !== lW) {
                (0, xm.countRenderLost)(cW, xW, Dc);
                const iW = void 0 === xW ? "" : ` (${xW.message})`;
                return void WW.crash(xm.RENDER_RELOAD_SITE, new Error(`${(0,xm.renderReloadMessage)("webgpu",cW,OW)} and ${lW}${iW}`))
              }
              const AW = LW ? "webgpu" : "webgl1" === NW ? "webgl1" : "webgl";
              "lost" === cW && (0, AN.x)();
              if (!LW) {
                if (Aw.gaveUp(), !(0, qi.u)()) {
                  (0, xm.countRenderLost)(cW, xW, Dc);
                  const iW = void 0 === xW ? "" : ` (${xW.message})`;
                  return void WW.crash(xm.RENDER_RELOAD_SITE, new xm.GraphicsLostError(`${(0,xm.renderReloadMessage)(AW,cW,OW)} and ${qi.i}${iW}`))
                }
                console.warn(`${nP} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
              }(0, xm.reportRenderReload)(AW, OW, tL, {
                from: "game",
                cause: cW,
                restoreLost: wW,
                adapterRemembered: tW,
                error: xW,
                context: Dc,
                session: JZ(WW.sunShadowsHeld())
              }), (0, AN.o)();
              const bW = (0, ZW.f)();
              let jW = !1;
              const UW = () => {
                jW || (jW = !0, LW && "lost" !== cW ? WZ() : bw.reload(WZ, LW))
              };
              let kW = null;
              const sW = (0, ZW.t)((() => {
                null !== kW && clearTimeout(kW), bW ? setTimeout(UW, Qt) : UW()
              }));
              !jW && bW && (kW = setTimeout((() => {
                sW(), UW()
              }), Ft))
            }(gW, WW, iW, OW, bW, AW)
          },
          onEnvEvent: WW => {
            var iW;
            WW.kind === HO.Q.SkyImages ? null === (iW = eL) || void 0 === iW || iW.onEvent(WW.payload) : WW.kind === HO.Q.EnvLighting && (vL = 1 === WW.payload[0])
          },
          onImages: WW => {
            var iW;
            null === (iW = gL) || void 0 === iW || iW.onEvent(WW)
          },
          onModelRequest: WW => {
            var iW;
            null === (iW = uL) || void 0 === iW || iW.request(WW)
          },
          onModelTaken: (WW, iW) => {
            var OW;
            null === (OW = uL) || void 0 === OW || OW.taken(WW, iW)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(WW, iW) {
                const OW = cL;
                if (null === OW || WW.isStopped) return;
                OW.restore((WW => {
                  (0, xm.reportTerrainTextureFailure)(WW, iW)
                })).then((iW => {
                  !1 !== iW || WW.isStopped ? !0 === iW && console.info(`${nP} terrain textures handed over again after the renderer lost them`) : console.warn(`${nP} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(gW, vW)
            }))
          },
          onKeepAlive: WW => {
            const iW = null === cc ? void 0 : wc.get(cc);
            void 0 !== iW && vE(iW, WW)
          },
          onSends: () => {
            ! function(WW) {
              const iW = performance.now();
              if (WW.forEachNetOut(jZ), xZ(WW), (0, RO.L)(WW, {
                  worldgen: ML,
                  mesh: SL
                }), null !== Ic) try {
                Ic.sendsWent(WW, iW, performance.now())
              } catch (EW) {
                rt(EW)
              }
            }(gW)
          }
        });
        if (NL = gW, null === (PW = jO.d.wasmNetReady) || void 0 === PW || PW.call(jO.d, (() => gW.isStopped ? 0 : gW.netKeptFrames)), null !== WW) {
          gW.setAntiCheatProbes(MP(gi.v, WW.checks)), WW.watchHeld(SP.CoreFrame, (() => gW.frame)), WW.watchHeld(SP.GlueFrame, (() => eW.frame));
          const iW = function(WW, iW) {
            const OW = new KP(iW);
            let mW = !1;
            OW.hZ(WW.hZ());
            const EW = (0, dE.cb)((() => {
              OW.hZ(WW.hZ())
            }), YP);
            let NW = 6 * (0, dE.S)() | 0;
            const PW = () => {
              ++NW < 6 || (NW = 0, WW.checks.stackCheck() && (mW = !0))
            };
            (0, WP.i)(PW);
            const LW = () => {
              const iW = WW.checkPadCall();
              0 !== iW && OW.setFlags(iW)
            };
            return (0, QN.i)(LW), {
              onSend: PW,
              beforeFrame: () => {
                mW && OW.originStackHit() && (mW = !1)
              },
              onEvent: iW => {
                const mW = WW.checkEvent(iW);
                OW.value(HO.h.ProbeUsedProp, WW.usedProp()), 0 !== mW && OW.setFlags(mW)
              },
              stop: () => {
                (0, dE.eb)(EW), (0, WP.f)(PW), (0, QN.h)(LW)
              }
            }
          }(WW, ((WW, iW, OW) => {
            let mW = !1;
            return uZ(gW, (() => {
              mW = gW.rings.input.writeRecord(HO.hb.AntiCheat, WW, iW, OW, 0)
            })), mW
          }));
          gW.isStopped ? iW.stop() : HL = iW
        }
        zP = (WW, iW, OW) => gW.rings.cmd.writeCmd(WW, iW, OW), FP = WW => gW.rings.cmd.growForCmd(WW), ic = !1, vt(), (0, qW.x)(gW, {
          core: eW,
          memory: gi.v,
          staleOr: (WW, iW, OW, mW) => VZ({
            site: WW,
            error: iW
          }, OW, mW),
          reportReplayFault: (WW, iW) => {
            (0, xm.reportReplayFault)(WW, iW, tL)
          },
          reportCameraFault: WW => {
            (0, xm.reportCameraDirectorFault)(WW, tL)
          },
          audio: wL,
          options: Ii.d,
          onNetEvent: zt,
          sessionInfo: WW => {
            var iW;
            return (null === (iW = Ac) || void 0 === iW ? void 0 : iW.conn) === WW ? Ac.info : null
          },
          onEventOverflow: Iw,
          replayShaderPack: WW => {
            var iW;
            null === (iW = pL) || void 0 === iW || iW.replay(WW)
          },
          hasPackModel: WW => {
            var iW, OW;
            return null !== (null !== (iW = null === (OW = gt()) || void 0 === OW ? void 0 : OW.modelUrl(WW)) && void 0 !== iW ? iW : null)
          },
          beforeWrite: () => (!zL && gW.rings.net.cursor > 0 && mZ(gW, !1, "all"), !gW.isStopped),
          beforeOp: () => (!zL && gW.netWrittenSinceFrame > 0 && mZ(gW, !1, "budget"), !gW.isStopped)
        }), (0, BW.G)({
          lockPointer: () => {
            if (!fm(kW)) return !1;
            try {
              Promise.resolve(kW.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Yi.e)()
          },
          leaveGame: () => {
            Gw()
          },
          canvas: () => kW
        }), nL = (0, BW.x)((() => {
          var WW;
          const iW = (0, qW.f)();
          null === (WW = (0, qW.p)()) || void 0 === WW || WW.followCursorAim(!0 === (null === iW || void 0 === iW ? void 0 : iW.isSessionLive) ? iW : null)
        })), Nc && gW.setUiPrefs(Nc);
        Pc && gW.setEnvPrefs(Pc);
        Lc && gW.setLookPrefs(Lc);
        const DW = KN ? SN(KN.preventMovement) : null;
        DW && Et(DW);
        const VW = (0, cm.i)(),
          pW = (0, cm.d)(gW, VW);
        JL = VW.basis, (0, Ym.k)((0, Um.e)(null === pW ? null : (0, Lm.o)(pW), (0, Um.i)())), TL = pW;
        const fW = (0, fi.c)();
        let CW = 1 / 0,
          XW = !0,
          RW = VW.shedFootprintBytes;
        const GW = new RE.b(fW, (() => eW.AU()), (WW => {
          gW.crash(RO.m, WW)
        }));
        YL = GW, yL = GW, null !== pW && GW.setCeiling(Math.min((0, RE.o)(pW), CW, (0, cm.m)()));
        if (XW) {
          GW.setShed((WW => {
            const iW = gW.shedMemory("joinReserve" !== WW && "gcPressure" !== WW);
            return null !== iW && (null === TL || iW < TL) && (TL = iW, (0, Ym.k)((0, Um.e)((0, Lm.o)(iW), (0, Um.i)()))), iW
          }), ((WW, iW, OW) => {
            1 === iW ? (0, xm.reportMemoryShed)(WW, OW, tL) : console.warn(`${nP} wasm memory: shed again (${WW}): shed ${iW}`, OW.wasmMemoryShed)
          }), (() => gW.addDistanceInUse()));
          const WW = (0, BO.M)(dW);
          GW.setFootprint(new vN(RW, {
            storedChunks: () => eW.hmW(),
            gpuBytes: () => {
              var iW;
              return null !== (iW = null === WW || void 0 === WW ? void 0 : WW.HmW()) && void 0 !== iW ? iW : 0
            },
            jsHeapBytes: eN
          })), (0, Sm.i)("wasm", GW, (() => {
            wL.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          YL === GW && (GW.refreshStats(), nZ(GW))
        })), document.addEventListener("visibilitychange", cZ), window.addEventListener("pagehide", wZ), window.addEventListener("pagehide", iZ), window.addEventListener("pagehide", OZ), !1;
        const [IW, aW] = (0, bm.i)();
        zc = (0, Um.k)((WW => {
          const iW = (0, Um.o)(WW, (0, Um.i)());
          return gW.setChunkAddDistance(iW.horizontal, iW.vertical)
        }), {
          horizontal: IW,
          vertical: aW
        }), gW.setAmbientOcclusion(!0 !== lO.i.getItem("disableAmbientOcclusion")), gW.setPoseLod(!0 !== lO.i.getItem(vi.N)), gW.setDebugLog(HO.G.Look, !0), gW.setDebugLog(HO.G.CameraSet, !0), (0, VN.startLookDebug)("wasm", {
          look: () => gW.takeDebugLog(HO.G.Look),
          cameraSets: () => gW.takeDebugLog(HO.G.CameraSet)
        }), (0, gN.t)("remesh") && (gW.setDebugLog(HO.G.Remesh, !0), rW = () => gW.takeDebugLog(HO.G.Remesh), BN = new XN((0, pN.q)(), rW));
        var rW;
        const zW = function(WW, iW, OW, mW) {
          const EW = new NE,
            NW = WW => lO.i.getItem(WW);
          EW.sync(NW, iW), (0, wO.V)();
          const PW = (0, cW.n)("customBindingsChanged", (() => {
            EW.sync(NW, iW)
          }));
          (0, hm.o)(iW);
          const LW = new Set,
            wW = (0, BW.x)((() => {
              var WW;
              LW.size > 0 && wE() && !0 === (null === (WW = (0, qW.f)()) || void 0 === WW ? void 0 : WW.localPlayerAlive()) && cW.l.iZ("usedKeyboard")
            })),
            tW = rm.c.heldSizer((() => (0, UO.o)(WW))),
            ZW = Im(WW, iW, {
              prevents: WW => EW.prevents(WW),
              keyPressed: WW => {
                EW.moves(WW) && (LW.add(WW), wE() && cW.l.iZ("usedKeyboard"))
              },
              keyReleased: WW => {
                LW.delete(WW)
              },
              keysReleased: () => {
                LW.clear()
              },
              resized: () => {
                LE.g.measure(WW.getBoundingClientRect()), (0, zm.k)()
              },
              sizeCanvas: tW,
              watchRenderScale: iW => {
                const OW = (0, UO.q)(WW, iW),
                  mW = rm.c.onRelease(iW),
                  EW = am.b.onRelease(iW);
                return () => {
                  OW(), mW(), EW()
                }
              },
              coverHeld: () => am.b.isHeld(),
              touchStarting: () => {
                LE.g.measure(WW.getBoundingClientRect())
              },
              viewShown: OW,
              touchUiShown: () => xi.d.get("isTouchScreen"),
              ctrlCombosAreGames: wE,
              inspect: (WW, iW, OW) => {
                EW.checks(iW, OW) && mW(WW)
              },
              canLock: () => fm(WW)
            }),
            xW = (0, QO.d)(iW);
          return () => {
            PW(), wW(), (0, hm.o)(null), xW(), ZW()
          }
        }(kW, ((WW, iW, OW, mW, EW) => {
          uZ(gW, (() => {
            gW.rings.input.writeRecord(WW, iW, OW, mW, EW)
          })), !FL && (0, AE.f)(WW, EW) && (0, AE.c)((() => {
            NL !== gW || Mw || gW.isStopped || !AZ() || mZ(gW, !1, "budget", !1)
          }))
        }), (() => Uw), (WW => {
          var iW;
          null === (iW = HL) || void 0 === iW || iW.onEvent(WW)
        }));
        if (gW.isStopped) return zW(), null;
        sL = zW;
        const FW = () => !gW.isStopped && !sw;
        if (gW.isStopped) return null;
        (0, gi.Y)((() => {
          "call" === (0, gi.p)() && gW.crash(RO.y, (0, gi.m)())
        }));
        const QW = (0, RO.P)(gW.rings.worker, (() => {
          mZ(gW, !1, document.hidden ? "all" : "budget")
        }));
        ML = function(WW, iW, OW) {
          return oZ().then((WW => {
            let {
              prefetchWorldgenWorker: iW
            } = WW;
            iW()
          }), (() => {})), new rN({
            module: (0, gi.z)(),
            decodeSettings: WW => {
              const iW = (0, qW.p)();
              if (null === iW) throw new Error("no game code to decode the world-gen seed with");
              return iW.decodeMapSettings(WW)
            },
            loadWorker: dZ,
            onMapWithoutWorldgen: () => {
              eZ((WW => {
                let {
                  stopWorldgenWorkerPrefetch: iW
                } = WW;
                iW()
              }))
            },
            onLoadFailed: WW => {
              (0, xm.reportWorldgenLoadFailure)(WW, tL)
            },
            onWorkerLost: (WW, iW) => {
              !async function(WW, iW, OW) {
                const mW = WW === GN || WW.startsWith(IN);
                if (!mW || iW) return void OW.wZ(mW);
                const EW = () => {
                  OW.wZ(!0)
                };
                let NW;
                try {
                  NW = await OW.scriptUrl()
                } catch {
                  return void EW()
                }
                await OW.staleOr({
                  site: RO.F,
                  error: new Error(`a world-gen worker's load failed (${WW}): ${NW}`),
                  urls: [NW]
                }, EW)
              }(WW, iW, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: WW
                  } = await oZ();
                  return WW()
                },
                staleOr: (WW, iW) => VZ(WW, iW, {
                  stillWanted: OW
                }),
                wZ: iW => {
                  (0, xm.reportWorldgenWorkerLost)(WW, iW, tL, {
                    build: (0, YE.h)(),
                    ageMs: (0, km.w)()
                  })
                }
              })
            },
            onStartTimeout: WW => {
              (0, xm.reportWorkerStartTimeout)(RO.F, WW, tL)
            },
            onGaveUp: WW => {
              (0, xm.reportWorldgenGaveUp)(WW, tL)
            },
            onMemoryStats: WW => {
              var iW;
              null === (iW = YL) || void 0 === iW || iW.noteWorldgen(WW)
            },
            onMemoryGone: () => {
              var WW;
              null === (WW = YL) || void 0 === WW || WW.worldgenGone()
            },
            write: (OW, mW, EW, NW, PW) => {
              uZ(WW, (() => {
                WW.rings.worker.writeWorkerRecord(OW, mW, EW, 0, NW, PW) || WW.crash(RO.F, `a world-gen record of kind ${mW} did not fit the worker-in ring`)
              })), iW()
            }
          })
        }(gW, QW, FW), SL = function(WW, iW) {
          return new BE({
            module: (0, gi.z)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: WW
              }, iW] = await Promise.all([OW.e(49).then((() => OW(54847))), Promise.resolve().then((() => OW(100))).then((WW => {
                let {
                  isMobile: iW
                } = WW;
                return iW()
              }), (() => !1))]);
              return {
                create: WW,
                count: (0, OO.h)(iW),
                maxKeptLightStates: iW || (0, iO.k)() ? 1 : void 0
              }
            },
            write: (OW, mW, EW, NW, PW, LW) => {
              (0, zm.h)(), uZ(WW, (() => {
                WW.rings.worker.writeWorkerRecord(OW, mW, EW, NW, PW, LW) || WW.crash(RO.q, `a meshing record of kind ${mW} did not fit the worker-in ring`)
              })), iW()
            },
            onWorkerLost: WW => {
              (0, xm.reportWorkerLost)(RO.q, WW, tL)
            },
            onLightFault: (WW, iW) => {
              (0, xm.reportLightFault)(WW, iW, tL)
            },
            onStartTimeout: WW => {
              (0, xm.reportWorkerStartTimeout)(RO.q, WW, tL)
            },
            onMemoryStats: (WW, iW) => {
              var OW;
              null === (OW = YL) || void 0 === OW || OW.noteMeshWorker(WW, iW)
            },
            onMemoryGone: WW => {
              var iW;
              null === (iW = YL) || void 0 === iW || iW.meshWorkerGone(WW)
            },
            fail: (iW, OW) => {
              const mW = () => {
                WW.crash(RO.q, void 0 === OW ? iW : new Error(iW, {
                  cause: OW
                }))
              };
              void 0 !== OW ? VZ({
                site: RO.q,
                error: OW
              }, mW) : mW()
            }
          })
        }(gW, QW), rw();
        const Wi = (0, PN.p)(Fi.clientSideServerUrls.staticUrl, {
            onTableFailed: WW => {
              VZ({
                site: xm.MODEL_FEED_SITE,
                error: WW
              }, (() => {}), {
                stillWanted: FW
              })
            },
            packUrl: WW => {
              var iW, OW;
              return null !== (iW = null === (OW = gt()) || void 0 === OW ? void 0 : OW.modelUrl(WW)) && void 0 !== iW ? iW : null
            }
          }),
          ii = function(WW, iW, OW) {
            const mW = OW => {
              var mW, EW;
              return null !== (mW = null === (EW = iW()) || void 0 === EW ? void 0 : EW.drawnUrl(OW)) && void 0 !== mW ? mW : WW.url(OW)
            };
            return (0, EN.m)((0, IE.q)(mW), OW)
          }(Wi, (() => uL), gt),
          Oi = new IE.g(ii, (WW => {
            console.warn(`${nP} image ${WW.key.kind}:${WW.key.index}:${WW.key.word} failed`, WW.error)
          }));
        gL = Oi, DL = new iN(gW, ii, ((WW, iW) => {
          void 0 === iW ? console.warn(`${nP} ${WW}`) : Vt(WW, iW)
        }));
        const mi = new mN.f(Wi, function(WW, iW) {
          let mW = !1,
            EW = null,
            NW = null;
          const PW = {
              onUnavailable: (OW, mW) => {
                NW ??= VZ({
                  site: xm.MODEL_POOL_SITE,
                  error: OW,
                  urls: mW
                }, (() => {
                  (0, xm.reportModelPoolFailure)(OW, WW)
                }), {
                  stillWanted: iW
                })
              },
              onWorkerLost: iW => {
                (0, xm.reportWorkerLost)(xm.MODEL_POOL_SITE, iW, WW)
              },
              onModuleRetry: (iW, OW) => {
                (0, xm.reportModelsModuleRetry)(iW, OW, WW)
              }
            },
            LW = OW.e(51).then((() => OW(54853))).then((WW => {
              let {
                pageModelPool: iW
              } = WW;
              if (mW) return null;
              const OW = iW(PW);
              return EW = OW.unlisten, oL = OW.pool, rw(), OW.pool
            }), (WW => (mW || PW.onUnavailable(WW, void 0), null)));
          return dL = () => {
            var WW;
            mW = !0, null === (WW = EW) || void 0 === WW || WW(), oL = null
          }, (WW, iW) => LW.then((OW => {
            var mW;
            return null !== (mW = null === OW || void 0 === OW ? void 0 : OW.build(WW, iW)) && void 0 !== mW ? mW : (0, LN.l)(WW, "the model workers did not load")
          })).then((WW => null !== NW && (0, LN.e)(WW) ? NW.then((() => WW)) : WW))
        }(vW, FW), (WW => {
          WW.startup ? (sZ(), VZ({
            site: xm.MODEL_FEED_SITE,
            error: WW.error,
            urls: "" === WW.url ? void 0 : [WW.url]
          }, (() => {
            (0, xm.reportModelFailure)(WW, vW)
          }))) : (0, xm.reportModelFailure)(WW, vW)
        }), {
          onWritten: (WW, iW) => {
            Oi.glbWritten(WW, iW)
          },
          onTaken: (WW, iW) => {
            Oi.glbTaken(WW, iW)
          },
          onPackFileFailed: (WW, iW) => {
            console.warn(`${nP} the texture pack's model file ${WW} failed: the shipped one loads`, iW)
          }
        });
        uL = mi;
        const Ei = new FE.e(gW);
        cL = Ei, Ei.swap((WW => {
          const iW = () => {
            (0, xm.reportTerrainTextureFailure)(WW, vW)
          };
          if (Fc) return void iW();
          const OW = () => !Fc,
            mW = null === WW.url ? void 0 : [WW.url];
          VZ({
            site: RO.C,
            error: WW.error,
            urls: mW
          }, iW, {
            stillWanted: OW
          })
        })).then((WW => {
          null !== WW && (WW || gW.isStopped || console.warn(`${nP} the core refused the terrain textures: terrain draws untextured`), BL(gW))
        }));
        const Ni = new JO(gW, ((WW, iW) => {
          console.warn(`${nP} ${WW}`, ...void 0 === iW ? [] : [iW])
        }));
        Ni.feed(), null !== AW && function(WW, iW, mW, EW, NW, PW) {
          let LW = null,
            wW = null,
            tW = !1;
          const ZW = {
            textures: null,
            stop: () => {
              var WW, iW;
              tW = !0, null === (WW = wW) || void 0 === WW || WW(), null === (iW = LW) || void 0 === iW || iW(), NN.d.setSettled(null), null !== ZL && nw.clear(ZL)
            }
          };
          LL = ZW, wW = pt().follow((wW => {
            null !== wW && Promise.all([OW.e(231), OW.e(54)]).then((() => OW(54816))).then((OW => {
              let {
                PackTextures: xW
              } = OW;
              if (tW || WW.isStopped) return;
              const lW = new xW({
                feed: wW,
                terrain: iW,
                backend: mW,
                stopped: () => WW.isStopped,
                landed: () => {
                  BL(WW)
                },
                packSwapped: () => {
                  (0, EN.i)(EW), PW.feed((() => async function(WW) {
                    const iW = null === WW ? null : await WW.averageColours;
                    return null === iW ? hO() : TO(iW)
                  }(lW.assets))), (0, ON.i)(lW.files()), NW.refresh().then((WW => {
                    null !== WW && console.info(`${nP} texture pack models: ${WW.resent} of ${WW.delivered} files written again, ${WW.refetched} refetched`)
                  }))
                },
                settled: (WW, iW, OW) => {
                  var mW;
                  (NN.d.setSettled({
                    state: WW,
                    files: iW
                  }), function(WW, iW, OW) {
                    const mW = null === WW.gameSource && (0, lm.e)(WW.pack);
                    if (null === iW) return;
                    const EW = (0, Zm.h)(iW.error),
                      NW = mW ? "settings" : iW.source;
                    cW.l.iZ(Zm.d, {
                      failure: EW,
                      source: NW,
                      pack: Am(WW)
                    }), (0, xm.reportTexturePackKeptOut)(NW, EW, iW.error, OW)
                  }(WW, OW, tL), null === OW) && function(WW) {
                    const iW = ZL;
                    null !== iW && nw.apply(iW, WW).then((iW => {
                      iW && WW && console.info(`${nP} the texture pack's animations are in (${Object.keys(WW).length} files)`)
                    }))
                  }(null === (mW = WW.pack) || void 0 === mW ? void 0 : mW.animations)
                },
                settling: () => {
                  NN.d.setSettled(null)
                },
                warn: Vt,
                maxTextureSize: () => Promise.resolve((0, BO.bb)(document.createElement("canvas")))
              });
              ZW.textures = lW, LW = lW.start()
            }), (WW => {
              console.warn(`${nP} the texture pack's terrain didn't load: the built atlas stays`, WW)
            }))
          }))
        }(gW, Ei, AW, Oi, mi, Ni);
        const Pi = () => {
            gW.setTextureLayers("")
          },
          Li = WW => {
            (zi ??= OW.e(66).then((() => OW(54857))).then((WW => {
              let {
                TEXTURE_NAMES: iW
              } = WW;
              return iW
            }), (WW => {
              throw zi = null, WW
            })), zi).then((WW => {
              gW.setTextureLayers(WW) || gW.isStopped || (console.warn(`${nP} the core refused the texture names: textured Boxes draw textureNotFound`), Pi())
            }), (iW => {
              if (gW.isStopped) return;
              const [OW, ...mW] = WW;
              void 0 === OW ? VZ({
                site: xm.TEXTURE_NAMES_SITE,
                error: iW
              }, (() => {
                console.warn(`${nP} the texture names didn't load, so textured Boxes draw textureNotFound`, iW), Pi()
              }), {
                stillWanted: FW
              }) : setTimeout((() => {
                Li(mW)
              }), OW)
            }))
          };
        if (Li(aP), null !== AW && !await async function(WW, iW, OW, mW, NW, PW) {
            var LW;
            const cW = (0, BO.M)(OW);
            if (null === cW) return WW.crash(oP, new Error(`this ${mW} build has no openRenderer`)), !1;
            let wW;
            Vc = cW;
            try {
              var tW, ZW, xW, lW;
              const EW = null !== (tW = null === (ZW = mL) || void 0 === ZW ? void 0 : ZW.pagePreviews()) && void 0 !== tW ? tW : null,
                LW = null !== (xW = null === (lW = mL) || void 0 === lW ? void 0 : lW.previewModule(OW)) && void 0 !== xW ? xW : null;
              if (null === EW || null === LW) {
                null === EW || void 0 === EW || EW.endSession(!1), wW = (0, UO.e)().sampleCount, await (0, BO.h)(iW, cW, PW, et, wW, await NW);
                const WW = (0, BO.n)(OW);
                null === WW && console.warn(`${nP} this ${mW} build has no image registry: sky and model images won't show`), (0, zE.d)(WW)
              } else {
                (0, AN.c)() && await (0, Zi.l)();
                const OW = (0, AN.F)();
                if (null !== OW) {
                  const iW = (0, qO.n)(cW),
                    mW = `${OW.why}${void 0===iW?"":` (${iW.message})`}`;
                  return WW.crash(xm.RENDER_RELOAD_SITE, OW.webgpu ? new Error(mW) : new xm.GraphicsLostError(mW)), !1
                }
                wW = await EW.bindSession(LW, iW, (async WW => (0, BO.x)(cW, oP, PW, WW, et, await NW)))
              }
            } catch (EW) {
              return WW.crash(oP, EW), !1
            }(function(WW, iW) {
              const OW = WW,
                {
                  requestCapture: mW,
                  takeCapture: EW
                } = OW;
              if ("function" !== typeof mW || "function" !== typeof EW) return;
              const NW = {
                request() {
                  mW.call(OW, iW)
                },
                take() {
                  var WW;
                  return null !== (WW = EW.call(OW)) && void 0 !== WW ? WW : null
                }
              };
              window[TN] = NW
            })(iW, wW), Rc = wW, gc = !0;
            const AW = performance.now();
            return Dc.boundAtMs = null !== (LW = (0, AN.G)()) && void 0 !== LW ? LW : AW, Dc.indirectHangs = (0, AN.y)(), Dc.restoresSkipped = (0, AN.H)(), console.info(`${nP} ${mW} renderer bound at ${Math.round(AW)} ms`), !WW.isStopped
          }(gW, eW, dW, AW, jW, kW)) return null;
        if (null !== AW) {
          var ci, wi, li;
          (0, Ci.G)(AW);
          const WW = () => !gW.isStopped && lZ();
          OW.e(220).then((() => OW(35114))).then((iW => {
            let {
              devTools: OW
            } = iW;
            gW.isStopped || OW.setHost(function(WW) {
              return {
                tools: lN,
                async downloadScene(iW, OW) {
                  let {
                    width: mW,
                    height: EW,
                    colouring: NW
                  } = OW;
                  "screenshot" === iW && null === NW ? await (0, tN.f)(WW, mW, EW) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (iW, OW, mW) => (0, tN.d)(WW, iW, OW, mW)
              }
            }(function(WW, iW) {
              return {
                canvas: WW,
                maxTextureSize: ZN,
                KZ: iW,
                resize: (WW, iW, OW) => {
                  (0, hm.v)(HO.hb.Resize, 0, WW / OW, iW / OW, (0, hm.i)(OW))
                },
                restoreSize: () => {
                  const iW = (0, UO.o)(WW);
                  null !== iW && (0, hm.v)(HO.hb.Resize, 0, iW.cssWidth, iW.cssHeight, (0, hm.i)(iW.renderScale))
                },
                onFrameDrawn: WW => (xN.add(WW), () => {
                  xN.delete(WW)
                })
              }
            }(kW, WW)))
          }), (WW => {
            console.warn(`${nP} the developer tools didn't load: no captures this session`, WW)
          }));
          const iW = "webgpu" === AW && null !== (ci = null === lW || void 0 === lW || null === (wi = lW.adapter) || void 0 === wi ? void 0 : wi.vendor) && void 0 !== ci ? ci : null;
          Gc = {
            backend: AW,
            canvas: kW,
            fallbackReason: null !== (li = null === lW || void 0 === lW ? void 0 : lW.reason) && void 0 !== li ? li : null,
            adapterVendor: iW
          }, Rt();
          try {
            (0, zm.w)(AW, kW, iW)
          } catch (EW) {
            (0, zm.y)(), console.error(`${nP} the quality steps didn't start`, EW)
          }
        }
        const {
          storagePullBreaks: Ai,
          splitPassBreaks: bi
        } = await jW;
        bi && console.warn(`${nP} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const ji = (0, ti.c)(lW, (0, PO.l)(), (0, cO.e)());
        if ((0, gN.t)("webgpuloss")) {
          var Ui, ki;
          const WW = {
            backend: AW,
            reason: null !== (Ui = null === lW || void 0 === lW ? void 0 : lW.reason) && void 0 !== Ui ? Ui : null,
            source: null !== (ki = null === lW || void 0 === lW ? void 0 : lW.source) && void 0 !== ki ? ki : null,
            storagePullBreaks: Ai,
            noWebGpu: ji.messageKey
          };
          (0, DN.d)((iW => {
            iW.noteWasmPick(WW)
          }))
        }
        const si = "webgpu" === AW;
        if (pL = (0, ti.d)(si ? gW : null, si && null !== (LW = null === (wW = mL) || void 0 === wW ? void 0 : wW.pagePreviews().kA) && void 0 !== LW ? LW : null, ji, Vt), Mw) return null;
        if (GW.reserveAtJoin((0, RE.k)(null !== pW && void 0 !== pW ? pW : Lm.j)), gW.isStopped) return null;
        const Mi = WW => {
          if (IL = performance.now(), aL = !1, null !== Ic) try {
            Ic.animationFrame(WW)
          } catch (EW) {
            rt(EW)
          }
          if (function(WW, iW) {
              return iW && !Mw && !FL && AZ() && lZ() && WW.framePaces(performance.now())
            }(gW, Uw)) {
            if (Nw.animationFrame(IL, "paced", Uw), gW.writePendingInput(), (0, BW.g)(WW, EZ), Gt(!1, WW), null !== Ic) try {
              Ic.framePaced()
            } catch (EW) {
              rt(EW)
            }
            requestAnimationFrame(Mi)
          } else mZ(gW, Uw, "budget") && (Nw.animationFrame(IL, gW.lastFrameKind, Uw), (0, tO.g)(gW.lastFrameKind) && lZ() && (0, BW.g)(WW, EZ), Gt(Uw && tw, WW), Zw.frame(gW.lastFrameKind, Uw && lZ(), WW), Aw.frame(gW.lastFrameKind, Uw && lZ()), (0, tO.b)(gW.lastFrameKind) && PO.G.drew(), YZ(gW), GW.afterFrame(), requestAnimationFrame(Mi))
        };
        requestAnimationFrame(Mi), gW.warmBeforeJoin(uE(null), RO.l.Home);
        return function(WW) {
          if (WW.has("inputLog") && (0, PE.g)((WW => {
              let {
                action: iW,
                down: OW,
                press: mW
              } = WW;
              console.info(`${cE} input ${iW} ${OW?"down":"up"} press ${mW} at ${performance.now().toFixed(1)}`)
            })), WW.has("inputDump")) {
            const WW = [];
            tE = WW, Object.assign(window, {
              bloxdInputDump: () => WW.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), hL = function(WW) {
          let iW = null;
          const OW = () => {
              null !== iW && (clearInterval(iW), iW = null)
            },
            mW = () => {
              document.hidden ? iW ??= setInterval((() => {
                gZ(WW) || OW()
              }), IP) : OW()
            };
          return document.addEventListener("visibilitychange", mW), mW(), () => {
            OW(), document.removeEventListener("visibilitychange", mW)
          }
        }(gW), gW
      }(iW).then((WW => {
        var iW;
        (mW(tL), bL(null !== WW), null !== WW && (SW = performance.now()), lL(WW), null === WW) ? null === (iW = mL) || void 0 === iW || iW.pagePreviews().endSession(null === (0, gi.p)()): XL("booted")
      }), (WW => {
        mW(tL), bL(!1), lL(null), MZ({
          site: dP,
          error: WW,
          header: null
        }, tL)
      }))
    }

    function Hw() {
      const WW = ZL;
      null !== WW && Sw().then((iW => {
        let {
          pageBuiltInAnimationPack: OW
        } = iW;
        OW().provide(WW)
      }), (WW => {
        console.warn(`${nP} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, WW)
      }))
    }
    const nw = new class {
      constructor(WW) {
        this.deps = WW, this.latest = 0, this.BL = null
      }
      apply(WW, iW) {
        return this.load(WW, iW, 0)
      }
      async load(WW, iW, OW) {
        var mW;
        const EW = ++this.latest,
          NW = this.deps.compiler;
        if (void 0 === iW || null === iW || "object" !== typeof iW || 0 === Object.keys(iW).length || null === NW) return this.drop(WW), !1;
        if ((null === (mW = this.BL) || void 0 === mW ? void 0 : mW.module) === WW && (0, VO.ae)(this.BL.files, iW)) return !1;
        try {
          const [OW, mW] = await Promise.all([NW(), this.deps.builtIns()]);
          if (EW !== this.latest) return !1;
          const PW = await OW(iW, XO, {
            builtIns: mW
          });
          if (EW !== this.latest) return !1;
          const LW = this.call(WW, PW);
          if (void 0 === LW) throw new CO("the compiled animations didn't read against the built-in pack");
          return this.BL = {
              module: WW,
              files: iW
            },
            function(WW) {
              for (let iW = 0; iW + 2 < WW.length; iW += 3) {
                ("error" === WW[iW] ? console.error : console.warn)(`Animation for the texture pack: ${WW[iW+1]}: ${WW[iW+2]}`)
              }
            }(LW), !0
        } catch (LW) {
          var PW;
          if (EW !== this.latest) return !1;
          this.drop(WW), 0 === OW && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", LW);
          const mW = (null !== (PW = this.deps.retryAfterMs) && void 0 !== PW ? PW : fO)[OW];
          return void 0 === mW || LW instanceof CO || (0, pO.i)(WW) || setTimeout((() => {
            EW === this.latest && this.load(WW, iW, OW + 1)
          }), mW), !1
        }
      }
      call(WW, iW) {
        try {
          return WW.YmW(iW)
        } catch (OW) {
          throw (0, pO.k)(WW, OW), OW
        }
      }
      clear(WW) {
        this.latest++, this.drop(WW)
      }
      drop(WW) {
        const iW = this.BL;
        if (this.BL = null, (null === iW || void 0 === iW ? void 0 : iW.module) === WW && !(0, pO.i)(WW)) try {
          this.call(WW, null)
        } catch {}
      }
    }({
      compiler: eO.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: WW
        } = await Sw();
        return WW().whenSet()
      },
      warn: Vt
    });
    async function uw(WW, iW) {
      let mW = !1;
      await ow({
        matchmake: async () => {
          const {
            guestJoinTarget: EW,
            guestJoinWithPack: NW
          } = await OW.e(133).then((() => OW(54807)));
          return mW ? EW(WW, iW, Ct()) : (mW = !0, NW(WW, iW, (iW => Xt(WW, iW)), Ct))
        },
        onFailure: WW => {
          (0, xm.showJoinFailure)(WW, tL)
        },
        rejoin: Qw,
        invalidateTrafficCode: Wt
      })
    }
    async function ow(WW) {
      let {
        matchmake: iW,
        onFailure: OW,
        rejoin: EW,
        invalidateTrafficCode: NW,
        pageReady: PW,
        signal: LW
      } = WW;
      const cW = () => !0 === (null === LW || void 0 === LW ? void 0 : LW.aborted);
      let wW;
      const tW = NN.d.rejoinHold();
      Zc = null, (0, Km.g)();
      const ZW = (0, km.Y)("wasm", HZ);
      let xW = !1,
        lW = performance.now();
      try {
        if (!await jL) return {
          kind: "stopped"
        };
        if (cW()) return {
          kind: "uW"
        };
        Yw().catch((() => {}));
        let WW = await iW();
        var bW, jW;
        if (lW = performance.now(), !cW()) hZ(null !== (bW = null === (jW = WW.target.session) || void 0 === jW ? void 0 : jW.gameNameWithVariation) && void 0 !== bW ? bW : null);
        const OW = () => performance.now() - WW.matchedAt <= WW.freshMs,
          mW = ew(WW.target).catch((() => {}));
        OW() && !cW() && (wW = new fE(WW.target, {
          signal: LW
        }));
        const NW = performance.now();
        let tW = () => {};
        cW() || (tW = function(WW, iW) {
          dW(), WW || JW || null !== TW && "ok" !== TW || (JW = !0, (0, AW.p)("wasm_boot_wait", performance.now(), `${yW}:${iW()}:${(0,UW.m)()}`)), hW++;
          let OW = !1;
          return () => {
            OW || (OW = !0, hW--)
          }
        }(xL, Di.j), null === LW || void 0 === LW || LW.addEventListener("abort", tW, {
          once: !0
        }));
        const ZW = await AL;
        if (tW(), null === LW || void 0 === LW || LW.removeEventListener("abort", tW), null === ZW) return {
          kind: "stopped"
        };
        var HW, nW;
        if (function(WW) {
            var iW, OW;
            if (kW.d.markGameEngineConstructed(), YW) return;
            YW = !0;
            const mW = Math.max(WW, null !== (iW = MW) && void 0 !== iW ? iW : WW);
            (0, sW.d)("ready", Math.max(0, (null !== (OW = KW) && void 0 !== OW ? OW : mW) - mW) / 1e3)
          }(NW), !cW())
          if (null !== KW && null !== SW ? (0, AW.p)("wasm_core_ready", SW) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), WW.target.session && (0, RN.b)(WW.target.session.gameNameWithVariation)) null === (HW = ML) || void 0 === HW || HW.prestart();
        if (await mW, !OW() && !cW()) null === (nW = wW) || void 0 === nW || nW.rematched(), WW = await iW(), lW = performance.now();
        if (cW()) return {
          kind: "uW"
        };
        const uW = await async function(WW) {
          var iW, OW, mW;
          let {
            signal: EW,
            rejoin: NW = null,
            early: PW,
            pageReady: LW
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== EW && void 0 !== EW && EW.aborted) throw new DOMException("the join was left", "AbortError");
          const cW = (wW = Tc, tW = performance.now(), null !== wW && tW - wW < KE);
          var wW, tW;
          Tc = null;
          const ZW = new AbortController,
            xW = null !== (iW = null === (OW = WW.session) || void 0 === OW ? void 0 : OW.gameNameWithVariation) && void 0 !== iW ? iW : null;
          hZ(xW), Dw({
            controller: ZW,
            game: xW
          }), Jc = null, null === (mW = nc) || void 0 === mW || mW.abort(), nc = null, oc = !1, dc = null, ec.clear();
          const lW = () => {
            (0, Qi.i)(ZW, (0, Qi.f)(EW))
          };
          null === EW || void 0 === EW || EW.addEventListener("abort", lW, {
            once: !0
          });
          try {
            var bW, jW, UW, kW, sW;
            const iW = await AL;
            if (null === iW || iW.isStopped || Mw) throw new Error("no core is running to join a game with");
            if (iW.warmBeforeJoin(uE(null !== (bW = null === (jW = WW.session) || void 0 === jW ? void 0 : jW.gameNameWithVariation) && void 0 !== bW ? bW : null), RO.l.Play), WW.session && null !== pL) {
              const iW = await vw(pL.join(WW.session.gameNameWithVariation), ZW.signal);
              if ((0, gN.t)("webgpuloss")) {
                const OW = WW.session.gameNameWithVariation,
                  mW = pL.couldntRunInJoinedGame();
                (0, DN.d)((WW => WW.noteWasmJoin(OW, iW, mW)))
              }
              if (null !== iW) throw new ti.b(iW)
            }
            const [, , , {
              joinRoom: OW
            }] = await vw(Promise.all([(0, qW.h)(iW), ew(WW), null === LW || void 0 === LW ? void 0 : LW(), Yw()]), ZW.signal), mW = WW.session, EW = mW ? {
              ...mt,
              attachSocket: iW => {
                const OW = tt(iW, WW.endpoint);
                var EW;
                null !== OW && (Ac = {
                  conn: OW,
                  info: mW
                }, null === (EW = bc) || void 0 === EW || EW(mW.playerDbId));
                return OW
              }
            } : mt, wW = await OW(EW, WW, {
              signal: ZW.signal,
              early: PW
            }).catch((WW => {
              throw function(WW) {
                if (!(WW instanceof ii.c)) return WW;
                if ("roomError" === WW.stage && null !== dc) return dw(new ii.c(WW.message, WW.stage, WW.code, dc), WW);
                const iW = "closed" === WW.stage && null !== hc ? ec.get(hc.conn) : void 0;
                return void 0 === iW ? WW : dw(new ii.c(WW.message, WW.stage, iW.code, null, WW.socketOpened), WW)
              }(WW)
            }));
            if (tc !== ZW) throw wW.leave(), new DOMException("the join was left", "AbortError");
            Bw(wW), null === (UW = SL) || void 0 === UW || UW.newGame();
            const tW = function(WW, iW) {
              var OW, mW;
              const {
                session: EW
              } = WW, NW = void 0 === EW ? WW.joinOptions.lobbyName : EW.lobbyName;
              return {
                endpoint: WW.endpoint,
                game: null !== (OW = null === EW || void 0 === EW ? void 0 : EW.gameNameWithVariation) && void 0 !== OW ? OW : WW.roomName,
                lobby: String(null !== NW && void 0 !== NW ? NW : null),
                sessionId: iW,
                postCookies: null !== (mW = WW.postCookies) && void 0 !== mW ? mW : null
              }
            }(WW, wW.seat.sessionId);
            wc.set(wW, tW), DE(tW);
            const xW = performance.now(),
              lW = {
                conn: wW.conn,
                rejoin: NW,
                game: null !== (kW = null === (sW = WW.session) || void 0 === sW ? void 0 : sW.gameNameWithVariation) && void 0 !== kW ? kW : "",
                joinedAt: xW,
                rejoinedAt: cW ? xW : null,
                overflow: null
              };
            jc = lW,
              function(WW, iW) {
                kt();
                const OW = {
                  endpoint: iW,
                  roomId: WW.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Em({
                    reconnect: (WW, iW, mW) => async function(WW, iW, OW, mW) {
                      const {
                        roomId: EW,
                        roomToken: NW
                      } = Mt(WW, iW), PW = NL;
                      if (null === PW || PW.isStopped || Mw) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: LW
                      } = await vw(Yw(), OW), cW = {
                        ...mt,
                        attachSocket: iW => Uc !== WW || 0 === WW.heldConn ? (iW.close(), null) : tt(iW, WW.endpoint, !0)
                      };
                      return LW(cW, WW.endpoint, EW, NW, {
                        signal: OW,
                        onAttached: mW
                      })
                    }(OW, WW, iW, mW),
                    releaseSeat: WW => {
                      !async function(WW, iW) {
                        const {
                          roomId: OW,
                          roomToken: mW
                        } = Mt(WW, iW);
                        try {
                          const {
                            leaveHeldSeat: iW
                          } = await Yw();
                          await iW(WW.endpoint, OW, mW)
                        } catch (EW) {
                          console.warn(`${nP} the held seat of a game left while it reconnected couldn't be released`, EW)
                        }
                      }(OW, WW)
                    },
                    isLive: () => Uc === OW && null !== jc && !Mw,
                    gJ: WW => {
                      yc = WW, Ut()
                    },
                    onReconnected: WW => {
                      ! function(WW) {
                        const iW = cc;
                        if (null !== iW && iW !== WW) {
                          const OW = wc.get(iW);
                          void 0 !== OW && wc.set(WW, OW), Lw === iW && (Lw = WW), iW.detach()
                        }
                        Bw(WW)
                      }(WW)
                    },
                    onGaveUp: (WW, iW) => {
                      ! function(WW, iW, OW) {
                        var mW, EW;
                        console.warn(`${nP} gave up reconnecting (${OW.reason}, ${OW.attempts} attempts)`, OW.lastError), (0, xm.reportReconnectGaveUp)(OW, tL);
                        const NW = null !== (mW = null === (EW = jc) || void 0 === EW ? void 0 : EW.rejoin) && void 0 !== mW ? mW : null;
                        st(WW, "gaveUp"), Rw();
                        const PW = {
                          code: WW.dropCode,
                          name: null,
                          reason: BP,
                          canReconnect: !iW,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Ot(PW, iW ? null : NW, !1, {
                          reasonKey: qP,
                          canPlayAgain: iW
                        })
                      }(OW, WW, iW)
                    }
                  })
                };
                Uc = OW, null !== kc && kc.conn === WW.conn && OW.resume.onInitialInfo(kc)
              }(wW, WW.endpoint), performance.mark(gP), (0, AW.p)("wasm_joined", xW), iW.warmBeforeJoin(new Uint32Array, RO.l.Joined), setTimeout((() => {
                cc === wW && (0, AW.i)()
              }), 0), Hw(), console.info(`${nP} joined ${WW.roomName} as ${wW.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const MW = Jc;
            Jc = null, null !== MW && aw(lW, MW.mask, MW.frames);
            const KW = ec.get(wW.conn);
            return ec.clear(), void 0 !== KW && (Bw(null), it(wW.conn, KW.code, KW.reason)), wW
          } finally {
            var MW;
            null === EW || void 0 === EW || EW.removeEventListener("abort", lW), tc === ZW && Xw(cc, null), (null === (MW = hc) || void 0 === MW ? void 0 : MW.join) === ZW && (hc = null)
          }
        }(WW.target, {
          signal: LW,
          rejoin: EW(WW.target),
          early: wW,
          pageReady: PW
        });
        return xW = !0, {
          kind: "joined",
          game: uW
        }
      } catch (oW) {
        if (oW instanceof DOMException && "AbortError" === oW.name || cW()) return {
          kind: "uW"
        };
        if (Mw) return {
          kind: "stopped"
        };
        if (oc && (oc = !1, await NW().catch((WW => {
            console.warn(`${nP} the cached traffic code could not be dropped`, WW)
          }))), null === await AL) return {
          kind: "stopped"
        };
        if (oW instanceof ti.b) return OW(oW, performance.now() - lW), {
          kind: "failed",
          error: oW,
          reloading: !1
        };
        const WW = oW instanceof ii.c && oW.code === mW.e.wasmClientNotAllowed.code,
          iW = oW instanceof ii.c && oW.code === mW.e.outdatedVersion.code,
          EW = () => null === cc,
          PW = await VZ({
            site: xm.JOIN_SITE,
            error: oW,
            outdated: iW
          }, (() => {
            WW && (0, qi.H)(), OW(oW, performance.now() - lW)
          }), {
            stillWanted: EW
          });
        return {
          kind: "failed",
          error: oW,
          reloading: PW
        }
      } finally {
        var uW;
        xW || ZW.end(), NN.d.releaseHold(tW);
        const WW = null === (uW = wW) || void 0 === uW ? void 0 : uW.release();
        WW && (0, xm.reportUnusedSeat)(WW, tL)
      }
    }

    function dw(WW, iW) {
      return WW.stack = iW.stack, WW
    }

    function ew(WW) {
      return WW.session ? (0, qW.o)(wL, WW.session.gameNameWithVariation) : Promise.resolve()
    }

    function vw(WW, iW) {
      return (0, Qi.s)(iW), new Promise(((OW, mW) => {
        const EW = () => {
          mW((0, Qi.f)(iW))
        };
        iW.addEventListener("abort", EW, {
          once: !0
        }), WW.then((WW => {
          iW.removeEventListener("abort", EW), OW(WW)
        }), (WW => {
          iW.removeEventListener("abort", EW), mW(WW)
        }))
      }))
    }

    function gw() {
      Dw(null)
    }

    function Dw(WW) {
      var iW, OW, mW;
      (LZ(null === WW ? "left" : "replaced"), function() {
        const WW = Uc;
        null !== WW && st(WW, "left")
      }(), null === kL || kL.left) || (kL.left = !0, null === (mW = (0, qW.f)()) || void 0 === mW || mW.socketLeft(), (0, xW.r)({
        websocketUrl: null
      }));
      tc && (0, Qi.i)(tc, new DOMException("the join was left", "AbortError")), Rw(null !== WW), null === (iW = pL) || void 0 === iW || iW.leave();
      const EW = cc;
      null !== WW && NN.d.setGame(WW.game), Xw(null, null !== (OW = null === WW || void 0 === WW ? void 0 : WW.controller) && void 0 !== OW ? OW : null), null === EW || void 0 === EW || EW.leave(), null === WW && (fw = !0, Cw()), qw(0), (0, ai.g)()
    }

    function Vw() {
      return null !== NL && 0 !== (NL.headerWord(nO.M.LoadSteps) & nO.V.PlayerBound) && AZ() && !Zw.isShown()
    }

    function pw() {
      return performance.now() - Hc >= zO.g
    }
    let fw = !1;

    function Cw() {
      const WW = NL;
      !fw || FL || Uw || (fw = !1, Mw || null === WW || WW.isStopped || WW.releaseLeftGame())
    }

    function Xw(WW, iW) {
      null !== iW && iW !== tc && (xw = document.hidden), null === WW ? lw.end() : null === cc && lw.join(Vw), cc = WW, tc = iW, null === cc && null === tc || (fw = !1), null === cc && null === tc && NN.d.setGame(void 0)
    }

    function Bw(WW) {
      Xw(WW, tc)
    }

    function qw(WW) {
      const iW = NL;
      return null !== zP && !Mw && null !== iW && !iW.isStopped && (!!zP(ii.f, 0, (0, ii.B)(WW)) && (ic = !0, 0 === WW || FL || mZ(iW, !1, "all"), !0))
    }

    function Rw() {
      var WW, iW;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, km.f)();
      const OW = null !== (WW = null === (iW = jc) || void 0 === iW ? void 0 : iW.overflow) && void 0 !== WW ? WW : null;
      jc = null, null !== OW && (0, xm.reportEventOverflow)(OW, tL)
    }

    function Gw() {
      null !== cc || null !== tc ? gw() : Zt()
    }

    function Iw(WW, iW) {
      console.warn(`${nP} the event buffer refused records in ${iW} frames (categories ${WW})`), Mw || (null !== jc ? aw(jc, WW, iW) : null !== tc && function(WW, iW, OW) {
        var mW;
        const EW = function(WW, iW) {
          return null === WW ? "drop" : WW.activated ? "keep" : 0 !== (iW & nO.z.NetSession) ? "fail" : "drop"
        }((null === (mW = hc) || void 0 === mW ? void 0 : mW.join) === WW ? hc : null, iW);
        "keep" === EW ? Jc = {
          mask: iW,
          frames: OW
        } : "fail" === EW && (0, Qi.i)(WW, new Error("the join's net session was lost to an event overflow"))
      }(tc, WW, iW))
    }

    function aw(WW, iW, OW) {
      const mW = WW.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      mW.frames += OW, mW.acks++, mW.mask |= iW;
      const EW = function(WW, iW, OW) {
        if (0 === (WW & nO.z.NetSession)) return "none";
        const mW = null !== iW.rejoinedAt && OW - iW.rejoinedAt < SE;
        return null === iW.rejoin || mW ? "fail" : "rejoin"
      }(iW, WW, performance.now());
      "none" !== EW && queueMicrotask((() => {
        if (jc !== WW) return;
        const iW = "rejoin" === EW && pw();
        mW.outcome = iW ? "rejoined" : "failed", Ot(function(WW, iW) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: WW,
            automaticallyReconnect: iW,
            requiresRefresh: !1
          }
        }(null !== WW.rejoin, iW), WW.rejoin, iW), gw(), iW && (Tc = performance.now())
      }))
    }

    function rw() {
      jw && function(WW, iW) {
        let {
          mesh: OW,
          worldgen: mW,
          modelPool: EW
        } = WW;
        "landingPage" === iW ? (null === OW || void 0 === OW || OW.stopWorkers(), null === mW || void 0 === mW || mW.stopWorker(), null === EW || void 0 === EW || EW.stopWorkers()) : ((0, xi.i)(iW) || "inGame" === iW) && (null === OW || void 0 === OW || OW.restartWorkers(), null === EW || void 0 === EW || EW.startWorkers())
      }({
        mesh: SL,
        worldgen: ML,
        modelPool: oL
      }, xi.d.get("gameState"))
    }

    function zw(WW) {
      Uw = WW, kw && Fw(kw, WW), Cw()
    }

    function Fw(WW, iW) {
      WW.style.visibility = iW ? "visible" : "hidden"
    }

    function Qw(WW) {
      var iW;
      const OW = WW.roomName,
        mW = null !== (iW = WW.joinOptions.lobbyName) && void 0 !== iW ? iW : null;
      return () => {
        uw(OW, mW)
      }
    }

    function Wt() {
      return OW.e(133).then((() => OW(54807))).then((WW => {
        let {
          invalidateGuestTrafficCode: iW
        } = WW;
        return iW()
      })).catch((WW => {
        console.warn(`${nP} the cached traffic code could not be dropped`, WW)
      }))
    }

    function it(WW, iW, OW) {
      var EW, NW, PW;
      let LW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Mw) return;
      if ((null === (EW = jc) || void 0 === EW ? void 0 : EW.conn) !== WW) return void(null !== tc && ec.set(WW, {
        code: iW,
        reason: OW
      }));
      LZ("lost");
      const cW = (null === (NW = Lw) || void 0 === NW ? void 0 : NW.conn) !== WW,
        {
          rejoin: wW,
          game: tW,
          joinedAt: ZW
        } = jc;
      Rw(), kt();
      const xW = (0, Wi.i)(iW, (0, oE.c)(WW));
      if (console.info(`${nP} the game's connection closed with code ${iW} (${null!==(PW=xW.name)&&void 0!==PW?PW:"unrecognised"})`), iW === mW.e.gameOrPluginKick.code || LW || (0, xm.reportDisconnect)(xW, tL, {
          closeReason: OW,
          sinceJoinedMs: performance.now() - ZW,
          game: tW
        }), xW.requiresRefresh) {
        const WW = "outdatedVersion" === xW.name,
          OW = new Error(`the game's connection closed with code ${iW}`),
          mW = () => null === jc && null === tc;
        return void VZ({
          site: xm.JOIN_SITE,
          error: OW,
          outdated: WW
        }, (() => {
          mW() && Ot(xW, null, !1)
        }), {
          stillWanted: mW
        })
      }
      const lW = xW.canReconnect ? wW : null,
        AW = null !== lW && (xW.automaticallyReconnect || cW && xw && "inactivity" === xW.name) && pw();
      Ot(xW, lW, AW)
    }

    function Ot(WW, iW, OW) {
      var mW;
      let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (sw) return;
      NN.d.unwantedLeave(OW && null !== iW && 0 === uc.size), null === (mW = nc) || void 0 === mW || mW.abort();
      const NW = new AbortController;
      nc = NW;
      const PW = null === iW ? null : () => {
        NW.signal.aborted || (NW.abort(), iW())
      };
      if (OW && null !== PW) {
        Hc = performance.now();
        const WW = new bO.d(zO.d, (() => {
          Hc = performance.now(), PW()
        }));
        NW.signal.addEventListener("abort", (() => {
          WW.stop()
        }))
      }
      const LW = {
        code: WW.code,
        name: WW.name,
        reason: WW.reason,
        reasonKey: EW.reasonKey,
        reconnect: PW,
        reconnecting: OW,
        requiresRefresh: WW.requiresRefresh,
        canPlayAgain: EW.canPlayAgain
      };
      if (uc.size > 0)
        for (const wW of [...uc]) try {
          wW(LW)
        } catch (cW) {
          console.error(`${nP} an unwanted-leave listener threw`, cW)
        } else ni((0, yi.f)(WW, null !== PW, OW), NW.signal).then((iW => {
          iW && (null !== PW ? PW() : WW.requiresRefresh && (0, Zi.j)())
        }))
    }
    const mt = {
      attachSocket: WW => tt(WW),
      onConnection: WW => (vc.add(WW), () => {
        vc.delete(WW)
      }),
      sendRaw: (WW, iW) => {
        const OW = kL;
        return null !== OW && OW.conn === WW && UZ(OW, iW)
      },
      leaveRoom: qw,
      closeSocket: WW => {
        var iW;
        (null === (iW = kL) || void 0 === iW ? void 0 : iW.conn) === WW && Zt()
      },
      flushNet: xt
    };

    function Et(WW) {
      var iW;
      let {
        aux: OW,
        payload: mW
      } = WW;
      null === (iW = NL) || void 0 === iW || iW.queueOptions(OW, mW)
    }

    function Nt(WW, iW) {
      Et(function(WW, iW) {
        return KN = WW ? {
          preventMovement: iW
        } : null, WW ? SN(iW) : {
          aux: HO.bc.AdEnd,
          payload: MN
        }
      }(WW, iW))
    }

    function Pt(WW) {
      var iW;
      Nc = WW, null === (iW = NL) || void 0 === iW || iW.setUiPrefs(WW)
    }

    function Lt(WW, iW) {
      wL.setMaster(WW, iW)
    }

    function ct(WW) {
      var iW;
      Pc = WW, null === (iW = NL) || void 0 === iW || iW.setEnvPrefs(WW)
    }

    function wt(WW) {
      var iW;
      Lc = WW, null === (iW = NL) || void 0 === iW || iW.setLookPrefs(WW)
    }

    function tt(WW) {
      var iW;
      let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(WW.url).origin,
        mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (WW.readyState === WebSocket.CLOSING || WW.readyState === WebSocket.CLOSED) return console.warn(`${nP} a closing or closed socket can't be attached`), null;
      const EW = NL;
      if (!EW || EW.isStopped) return console.warn(`${nP} no core is running to attach a socket to`), WW.close(), null;
      if (null === (0, qW.f)()) return console.warn(`${nP} the game has not started to attach a socket to`), WW.close(), null;
      if (qL > HO.u) return console.warn(`${nP} this core has attached all the sockets it can; reload to play on`), WW.close(), null;
      if (ic && !FL && (mZ(EW, !1, "all"), EW.isStopped || Mw)) return WW.close(), null;
      Zt();
      const NW = qL++;
      if (!yt(EW, "open", NW, mW ? HO._b.Resume : 0)) return WW.close(), null;
      mW || Ii.d.reset(), hc = null === tc ? null : {
        join: tc,
        conn: NW,
        activated: !1
      }, WW.binaryType = "arraybuffer";
      const PW = new Nm.c((() => {
          ! function(WW, iW) {
            if (kL !== iW || WW.isStopped || null === bt(iW, CP)) return;
            iW.detach(), kL = null, At(WW, iW, CP, "", !0), iW.ws.close()
          }(EW, LW)
        })),
        LW = {
          ws: WW,
          conn: NW,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: mW,
          token: null,
          detach: () => {
            PW.dispose(), WW.removeEventListener("message", cW), WW.removeEventListener("open", wW), WW.removeEventListener("close", tW)
          }
        },
        cW = WW => {
          if (WW.data instanceof ArrayBuffer) {
            var iW;
            const OW = new Uint8Array(WW.data);
            PW.heard(), LW.token = null !== (iW = (0, Pm.b)(OW)) && void 0 !== iW ? iW : LW.token,
              function(WW, iW, OW) {
                uZ(WW, (() => {
                  WW.rings.net.writeFrame(iW, OW) || WW.crash(RO.u, `a socket frame of ${OW.byteLength} bytes did not fit the net-in ring`)
                }));
                const mW = WW.rings.net.cursor >= fP;
                !vZ() && (mW || WW.netWrittenSinceFrame >= pP) && mZ(WW, !1, document.hidden ? "all" : "budget");
                DZ(WW)
              }(EW, NW, OW)
          }
        },
        wW = () => {
          mW || (0, AW.p)("wasm_socket_open", performance.now());
          for (const iW of LW.pending.splice(0)) WW.send(iW);
          LW.pendingBytes = 0
        },
        tW = WW => {
          if (kL === LW && EW.rings.net.cursor > 0 && mZ(EW, !1, "all"), kL === LW) {
            if (LW.detach(), kL = null, At(EW, LW, WW.code, WW.reason) || lt(EW, LW)) return;
            yt(EW, "close", NW), jt(NW, LW.left), it(NW, WW.code, WW.reason)
          }
        };
      return WW.addEventListener("message", cW), WW.addEventListener("open", wW), WW.addEventListener("close", tW), kL = LW, null === (iW = (0, qW.f)()) || void 0 === iW || iW.socketAttached(NW), (0, xW.r)({
        websocketUrl: OW
      }), NW
    }

    function Zt() {
      const WW = kL;
      if (!WW) return;
      const iW = NL,
        OW = WW.resume;
      OW && (xt(), kL !== WW) || (kL = null, WW.detach(), WW.ws.close(), null !== iW && (lt(iW, WW) || OW && At(iW, WW, XP)) || (null !== iW && yt(iW, "close", WW.conn), jt(WW.conn, WW.left)))
    }

    function xt() {
      const WW = NL;
      null !== WW && !WW.isStopped && !Mw && !FL && WW.rings.net.cursor > 0 && mZ(WW, !1, "all")
    }

    function lt(WW, iW) {
      var OW;
      if (!iW.resume) return !1;
      const mW = Uc;
      return null !== mW && null !== iW.token && "" !== iW.token && (mW.pendingHold = {
        conn: iW.conn,
        token: `${mW.roomId}:${iW.token}`
      }), yt(WW, "close", iW.conn), null === (OW = (0, qW.f)()) || void 0 === OW || OW.socketDetached(iW.conn), !0
    }

    function At(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const NW = bt(iW, OW);
      if (null === NW) return !1;
      const {
        BL: PW,
        token: LW,
        game: cW,
        joinedAt: wW
      } = NW;
      if (!yt(WW, "close", iW.conn, HO.x.Held)) return !0;
      console.warn(`${nP} the game's connection ${EW?"went silent":`dropped with code ${OW}`}, holding it`);
      const tW = {
        closeReason: mW,
        sinceJoinedMs: performance.now() - wW,
        game: cW
      };
      return (0, xm.reportDisconnect)((0, Wi.i)(OW), tL, tW, EW ? "silent" : void 0), PW.heldConn = iW.conn, PW.dropCode = OW, PW.pendingHold = {
        conn: iW.conn,
        token: `${PW.roomId}:${LW}`
      }, FL || mZ(WW, !1, "all"), !0
    }

    function bt(WW, iW) {
      const OW = Uc,
        EW = jc,
        NW = WW.token;
      return null === OW || null === EW || Mw || WW.left || EW.conn !== WW.conn || null === NW || "" === NW ? null : (0, mW.g)(iW) && OW.resume.canHoldSeat() ? {
        BL: OW,
        token: NW,
        game: EW.game,
        joinedAt: EW.joinedAt
      } : null
    }

    function jt(WW, iW) {
      var OW;
      null === (OW = (0, qW.f)()) || void 0 === OW || OW.closeGame(WW), (0, sN.d)().close(WW), iW || (0, xW.r)({
        websocketUrl: null
      })
    }

    function Ut() {
      const WW = yc;
      if (null === WW) return;
      const iW = (0, qW.f)();
      Mw || null === iW || iW.gJ(WW) ? yc = null : performance.now() - Oc.pause >= GP && (Oc.pause = performance.now(), console.warn(`${nP} the cmd ring had no room for SetPaused(${WW}): written before the next frame`))
    }

    function kt() {
      const WW = Uc;
      Uc = null, null === WW || void 0 === WW || WW.resume.dispose()
    }

    function st(WW, iW) {
      var OW, mW;
      const {
        heldConn: EW
      } = WW, NW = WW.resume.resumingConn;
      WW.heldConn = 0, WW.pendingHold = null, Uc === WW && (Uc = null), "left" === iW ? WW.resume.leave() : WW.resume.dispose(), 0 === Yc || (null === (OW = kL) || void 0 === OW ? void 0 : OW.conn) !== Yc || "left" === iW && (null === (mW = cc) || void 0 === mW ? void 0 : mW.conn) === Yc || Yt(Yc), "gaveUp" === iW && 0 !== NW && Yt(NW), 0 !== EW && "refused" !== iW && (console.info(`${nP} the game held through its drop ${"left"===iW?"was left":"is given up"}`), null === NL || NL.isStopped || yt(NL, "close", EW), jt(EW, !1))
    }

    function Mt(WW, iW) {
      const OW = iW.indexOf(":");
      return {
        roomId: OW < 0 ? WW.roomId : iW.slice(0, OW),
        roomToken: iW.slice(OW + 1)
      }
    }

    function Kt(WW) {
      (0, GO.logClientMeasurement)("join_preload", WW, {
        client: "wasm"
      })
    }

    function St(WW) {
      var iW;
      kc = WW;
      const OW = WW.replayOffer && Sc !== WW.conn;
      Kc = OW ? WW.conn : 0, sc = OW || Mc.has(WW.conn) ? 0 : WW.conn, eW.admitted(), WW.conn === Yc && (Yc = 0);
      const mW = Uc;
      null !== mW && (null === (iW = jc) || void 0 === iW ? void 0 : iW.conn) === WW.conn && mW.resume.onInitialInfo(WW)
    }

    function Yt(WW) {
      var iW;
      const OW = kL;
      (null === OW || void 0 === OW ? void 0 : OW.conn) === WW && (OW.left = !0, null === (iW = (0, qW.f)()) || void 0 === iW || iW.socketLeft(), (0, xW.r)({
        websocketUrl: null
      }), qw(WW) ? setTimeout((() => {
        kL === OW && Zt()
      }), ii.e) : Zt())
    }

    function yt(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        EW = !1;
      return uZ(WW, (() => {
        const {
          net: NW
        } = WW.rings;
        EW = "open" === iW ? NW.writeOpen(OW, mW) : NW.writeClose(OW, mW), EW || WW.crash(RO.u, `a socket ${iW} did not fit the net-in ring`)
      })), EW
    }

    function Tt(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const EW = "noContext" === iW ? "noContext" : "blockedAfterLoss" === iW ? "graphicsLost" : WW;
      (0, xm.showUnsupported)(EW, "unsupported", OW, {
        ...mW,
        decline: iW
      })
    }
    const Jt = 1500;

    function ht(WW) {
      return (0, BO.r)(WW) && Ht(WW)
    }

    function Ht(WW) {
      return 1 === WW.missing.length && WW.missing[0] === BO.d
    }
    const nt = "wasmNoContextWaited";

    function ut(WW, iW) {
      const OW = Ht(WW),
        mW = OW ? (0, BO.$)() : "",
        EW = iW || (0, BO.V)(mW) ? "blockedAfterLoss" : OW ? "noContext" : "unsupported",
        NW = `No WebGPU or WebGL2, and WebGL1 lacks ${WW.missing.join(", ")}`;
      return {
        decline: EW,
        detail: "" === mW ? NW : `${NW}; ${mW}`,
        details: {
          missing: WW.missing.join(",")
        },
        retries: "unsupported" !== EW && jw
      }
    }

    function ot(WW) {
      console.warn(`${nP} ${WW}: reloading once more onto the wasm client`), (0, AN.o)(), (0, xm.flushCrashReports)(Zi.d).then(Zi.j, Zi.j)
    }

    function dt() {
      return jw && "address" !== qi.B.reason
    }

    function et(WW, iW, OW, mW) {
      return pc(WW, iW, OW, mW)
    }

    function vt() {
      null === Xc || null === NL || NL.isStopped || Mw || null !== eL || null === zP || (eL = Xc(zP, Vt, pt().follow))
    }

    function gt() {
      var WW, iW, OW;
      return null !== (WW = null === (iW = LL) || void 0 === iW || null === (OW = iW.textures) || void 0 === OW ? void 0 : OW.files()) && void 0 !== WW ? WW : null
    }

    function Dt(WW) {
      pt().follow((iW => {
        null !== iW && Promise.all([Promise.all([OW.e(231), OW.e(54)]).then((() => OW(54833))), (0, AN.J)()]).then((WW => {
          let [{
            followPagePackFiles: OW
          }, mW] = WW;
          const EW = null === mW || (0, BO.r)(mW) ? "webgl" : mW.backend;
          OW(iW, EN.h, EW, (WW => {
            EN.h.setPageFiles(WW)
          }), Vt)
        }), (iW => {
          console.warn(`${nP} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, iW), WW()
        }))
      }))
    }

    function Vt(WW, iW) {
      console.warn(`${nP} ${WW}`, iW)
    }

    function pt() {
      return PL ??= new hN({
        load: WW => Promise.all([OW.e(231), OW.e(67)]).then((() => OW(54835))).then((iW => {
          let {
            startPageTexturePackFeed: OW
          } = iW;
          return OW(Vt, WW)
        })),
        store: lO.f,
        wZ: WW => {
          AL.then((() => {
            (0, xm.reportTexturePackFeedLoadFailure)(WW, tL)
          }))
        }
      }), PL
    }
    const ft = WW => pt().follow(WW);

    function Ct() {
      return pt().loaded()
    }
    const Xt = function(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          EW = 0;
        return async function(NW, PW) {
          let LW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const cW = ++EW,
            wW = mW() + iW,
            tW = await
          function(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((mW => {
              const EW = setTimeout((() => {
                mW(null), WW.then((WW => {
                  null !== WW && (WW.joinedWithout(), OW(WW))
                }))
              }), iW);
              WW.then((WW => {
                clearTimeout(EW), mW(WW)
              }))
            }))
          }(WW(NW), iW, (WW => {
            cW === EW && LW() && PW(WW, mW() + iW).catch((WW => {
              OW("the texture pack step after the join failed", WW)
            }))
          }));
          return null === tW ? null : PW(tW, wW)
        }
      }((WW => (0, di.i)(WW) ? pt().request() : pt().forJoin()), JN.c, Vt),
      Bt = function(WW, iW) {
        let OW = !1;
        return {
          setGamePackConfirm: WW => {
            OW = null !== WW, iW(WW)
          },
          packStep: (iW, mW, EW) => WW(iW, mW, (() => OW && EW()))
        }
      }(Xt, (WW => {
        pt().setGamePackConfirm(WW)
      }));

    function qt(WW) {
      Bt.setGamePackConfirm(WW)
    }

    function Rt() {
      if (Mw || null !== Ic || null === Bc || null === Gc) return;
      const {
        backend: WW,
        canvas: iW,
        fallbackReason: OW,
        adapterVendor: mW
      } = Gc, EW = Bc;
      Bc = null;
      try {
        Ic = EW({
          backend: WW,
          canvas: iW,
          fallbackReason: OW,
          adapterVendor: mW,
          joinedGame: () => Mw ? null : cc,
          canSend: () => !Mw && null !== cc && cc.conn === sc,
          inGame: It,
          shaderPackReach: () => {
            var WW, iW;
            return null !== (WW = null === (iW = pL) || void 0 === iW ? void 0 : iW.reachInJoinedGame()) && void 0 !== WW ? WW : null
          },
          qb: () => vL,
          msaa: () => Rc > 1,
          writeCmd: (WW, iW, OW) => null !== zP && zP(WW, iW, OW),
          takeFailedMeshJobs: () => {
            var WW, iW;
            return null !== (WW = null === (iW = SL) || void 0 === iW ? void 0 : iW.takeFailedMeshJobs()) && void 0 !== WW ? WW : 0
          },
          readLoadCounts: WW => {
            var iW, OW;
            return null !== (iW = null === (OW = NL) || void 0 === OW ? void 0 : OW.readLoadCounts(WW)) && void 0 !== iW && iW
          },
          mainStalled: (WW, iW, OW, mW) => {
            (0, xm.reportMainStall)(WW, iW, OW, mW, tL)
          },
          eJ: WW => {
            var iW, OW, mW;
            return null !== (iW = null === (OW = Vc) || void 0 === OW || null === (mW = OW.eJ) || void 0 === mW ? void 0 : mW.call(OW, WW)) && void 0 !== iW ? iW : -1
          }
        })
      } catch (NW) {
        console.error(`${nP} the frame telemetry didn't start`, NW)
      }
    }

    function Gt(WW, iW) {
      try {
        var OW, mW, EW;
        const NW = gc && null !== (OW = null === (mW = NL) || void 0 === mW || null === (EW = mW.lastHeader) || void 0 === EW ? void 0 : EW.renderPending) && void 0 !== OW ? OW : 0;
        (0, zm.e)(iW, WW, It() && !(null !== KN), NW)
      } catch (NW) {
        (0, zm.y)(), console.error(`${nP} the quality steps stopped`, NW)
      }
    }

    function It() {
      return null !== cc && Lw === cc && !Mw
    }

    function rt(WW) {
      const iW = Ic;
      Ic = null;
      try {
        null === iW || void 0 === iW || iW.stop()
      } catch {}
      console.error(`${nP} the frame telemetry threw: it stops`, WW)
    }

    function zt(WW) {
      var iW, OW, mW, EW;
      if ((0, sN.d)().fire(WW), "message" === WW.type) {
        if (QL++, WW.tP === HO.Sc.ERROR && null !== tc) {
          var NW;
          const {
            text: iW,
            dropsCache: OW
          } = (0, Wi.n)((new TextDecoder).decode(WW.payload));
          oc ||= OW, (null === (NW = hc) || void 0 === NW ? void 0 : NW.conn) === WW.conn && (dc = iW)
        } else if (WW.tP === nO.uc.ResumeComplete) {
          var PW;
          Sc = WW.conn, WW.conn === Kc && (Kc = 0, sc = Mc.has(WW.conn) ? 0 : WW.conn), null === (PW = Uc) || void 0 === PW || PW.resume.onResumeComplete(WW.conn)
        }
        return
      }
      WW.phase === HO.A.Left ? Wc = WW.conn : WW.phase === HO.A.Activated && (null === (iW = hc) || void 0 === iW ? void 0 : iW.conn) === WW.conn ? hc.activated = !0 : WW.phase === HO.A.Resumed ? function(WW) {
        var iW, OW;
        Yc = WW;
        const mW = Uc;
        if (null === mW || 0 === mW.heldConn || (null === (iW = kL) || void 0 === iW ? void 0 : iW.conn) !== WW || !kL.resume || null === jc) return;
        console.info(`${nP} the game resumed on conn ${WW}, waiting for its InitialInfo`);
        const EW = mW.heldConn;
        mW.heldConn = 0, kL.resume = !1, jc.conn = WW, (null === (OW = Ac) || void 0 === OW ? void 0 : OW.conn) === EW && (Ac = {
          conn: WW,
          info: Ac.info
        }), Ii.d.apply({
          shopInfo: null,
          _shopVersion: ei.c
        })
      }(WW.conn) : WW.phase === HO.A.Held ? function(WW) {
        var iW;
        const OW = Uc,
          mW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.pendingHold) && void 0 !== iW ? iW : null;
        if (null !== OW && null !== mW && mW.conn === WW) return OW.pendingHold = null, OW.heldConn = WW, Yc = 0, console.warn(`${nP} the core holds the game, reconnecting`), void OW.resume.onDropped(mW.token);
        if (WW === Yc) {
          Yc = 0;
          const iW = NL;
          null === iW || iW.isStopped || (console.info(`${nP} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), yt(iW, "close", WW))
        }
      }(WW.conn) : WW.phase === HO.A.Closed && (null === (OW = Uc) || void 0 === OW || null === (mW = OW.pendingHold) || void 0 === mW ? void 0 : mW.conn) === WW.conn && (Uc.heldConn === WW.conn ? function(WW) {
        const iW = WW.heldConn,
          OW = WW.dropCode;
        st(WW, "refused"), console.info(`${nP} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          jt(iW, !1), it(iW, OW, "", !0)
        }))
      }(Uc) : Uc.pendingHold = null), WW.phase !== HO.A.Held && WW.phase !== HO.A.Left && WW.phase !== HO.A.Closed || (Mc.add(WW.conn), WW.conn === sc && (sc = 0));
      const LW = Object.keys(HO.A).find((iW => HO.A[iW] === WW.phase)),
        cW = 0 === WW.code ? "" : ` (code ${WW.code})`;
      console.info(`${nP} conn ${WW.conn}: ${null!==LW&&void 0!==LW?LW:WW.phase}${cW}, ${QL} raw messages so far`), (null === (EW = cc) || void 0 === EW ? void 0 : EW.conn) !== WW.conn || WW.phase !== HO.A.Left && WW.phase !== HO.A.Closed || Bw(null), lc !== WW.conn || WW.phase !== HO.A.Left && WW.phase !== HO.A.Closed || (lc = null, null === cc && null === tc && NN.d.setGame(void 0));
      for (const tW of [...vc]) try {
        tW(WW.conn, WW.phase, WW.code)
      } catch (wW) {
        (0, uO.n)(wW, `${nP} a connection listener threw`)
      }
    }
    const Ft = 9e4,
      Qt = 1e3;

    function WZ() {
      (0, AN.o)(), bw.forget(), null === cc && null === tc || (0, ym.e)(), queueMicrotask((() => {
        try {
          sZ()
        } catch (WW) {
          console.warn(`${nP} stopping before the reload threw`, WW)
        }(0, xm.flushCrashReports)(Zi.d).then(Zi.j, Zi.j)
      }))
    }

    function iZ() {
      const WW = NL;
      null === WW || WW.isStopped || null === kL || FL || !WW.hasPendingCommands() || mZ(WW, !1, "budget")
    }

    function OZ(WW) {
      var iW;
      const OW = cc;
      WW.persisted || null === OW || (null === (iW = kL) || void 0 === iW ? void 0 : iW.conn) !== OW.conn || kL.left || OW.leave()
    }

    function mZ(WW, iW, mW) {
      let EW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const NW = FL;
      FL = !0;
      try {
        const NW = WW.rings.net.cursor >= fP;
        NW && "all" !== mW && !document.hidden && SZ("backlog", `a shown tab's net-in is ${WW.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(WW, iW, mW, EW) {
          var NW, PW, LW, cW;
          if (Mw) return !1;
          if (uZ(WW, NZ), Mw || WW.isStopped) return !1;
          bZ() && XL("modelsIn");
          Ut(), RL = performance.now(), Wc = null, ic = !1, (0, BW.N)(), null === (NW = HL) || void 0 === NW || NW.beforeFrame(), ZE(RL, WW), (0, BW.F)(RL, PZ), zL = !0;
          const wW = iW && AZ();
          let tW;
          try {
            tW = WW.frame(RL, wW, mW)
          } finally {
            zL = !1
          }
          if (!tW) return !1;
          qc.observe(null !== (PW = null === (LW = WW.lastHeader) || void 0 === LW ? void 0 : LW.chunksCancelled) && void 0 !== PW ? PW : 0);
          const ZW = WW.lastFrameKind,
            xW = (0, tO.b)(ZW);
          (function(WW) {
            null !== BN && BN.afterFrame(performance.now(), WW)
          })(xW), null === (cW = ac) || void 0 === cW || cW.frame(WW, RL, ZW), iW && (tw = xW);
          xW && ((0, NO.c)(RL), Nw.frame(RL), lw.end());
          if (null !== Ic) try {
            Ic.frameRan(WW, RL, performance.now(), ZW)
          } catch (bW) {
            rt(bW)
          }
          "drawn" === ZW && lZ() && function() {
            for (const WW of [...xN]) WW()
          }();
          WW.forEachNetOut(jZ);
          const lW = kL;
          null !== Wc && (null === lW || void 0 === lW ? void 0 : lW.conn) === Wc && UZ(lW, ii.j);
          xZ(WW),
            function(WW) {
              const iW = 0 !== (WW.headerWord(nO.M.LoadSteps) & nO.V.JoinPreload);
              iW !== xc && (xc = iW, (0, xm.setCrashAdPreload)(iW), (0, km.O)())
            }(WW), iW && (! function(WW) {
              var iW, mW, EW;
              if (null === cc || !AZ()) return;
              const NW = WW.headerWord(nO.M.LoadSteps);
              null === Ew || Lw === cc && !Ew.frame(RL, 0 !== (NW & nO.Y.TerrainDrawn)) || (Ew = null);
              if (0 === (NW & nO.V.PlayerBound)) return;
              const PW = WW.lastHeader,
                LW = !gc || 0 === (null === PW || void 0 === PW ? void 0 : PW.renderPending);
              !Qc && LW && (Qc = !0, performance.mark(VP));
              if (Lw === cc) return;
              const cW = null !== (iW = null === PW || void 0 === PW ? void 0 : PW.firstView) && void 0 !== iW ? iW : HO.S.NotYet;
              if (gc && cW === HO.S.NotYet) return;
              if (Fc && (!0 !== (null === (mW = (0, qW.f)()) || void 0 === mW ? void 0 : mW.isSessionLive) || !LW)) return;
              var wW;
              Lw = cc, lw.shown(), gc && null !== jc && function(WW, iW) {
                let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lO.i;
                const mW = Array.from(iW).filter(hE).slice(0, JE);
                if ("" === WW || 0 === mW.length) return;
                const EW = nE(OW).filter((iW => iW.game !== WW));
                OW.setItem(yE, [{
                  game: WW,
                  codes: mW
                }, ...EW].slice(0, TE))
              }(jc.game, null !== (wW = WW.firstViewTerrainCodes()) && void 0 !== wW ? wW : []);
              const tW = cc;
              if (setTimeout((() => {
                  cc === tW && (0, AW.k)()
                }), 0), null === (EW = pL) || void 0 === EW || EW.playable(), function() {
                  clearTimeout(UL), UL = setTimeout((() => {
                    It() && eZ((WW => {
                      let {
                        prefetchWorldgenWorker: iW
                      } = WW;
                      iW()
                    }))
                  }), rP)
                }(), Fc) return;
              Fc = !0, Nw.shown(), performance.mark(DP), (0, gN.t)("render") && Promise.all([OW.e(91), OW.e(57)]).then((() => OW(5419))).then((WW => {
                let {
                  renderDebugPlayable: iW
                } = WW;
                iW()
              }), (WW => {
                console.warn("The render debug topic didn't load", WW)
              }));
              const ZW = Math.round(performance.now()),
                xW = WW.readViewQueuedPrograms();
              null !== xW && (0, AW.p)("wasm_view_links", ZW, (0, jW.Cb)(xW));
              const lW = null === mw || null === iw ? 0 : Math.max(0, iw - mw),
                bW = null === mw ? 0 : Math.max(0, ZW - mw),
                UW = gc ? WW.readFirstViewWait(lW, bW) : null;
              null !== UW && (0, AW.o)(UW);
              if (gc && cW !== HO.S.Drawn) {
                const iW = cW === HO.S.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: OW
                  } = tZ(WW);
                if (console.warn(`${nP} playable at ${ZW} ms on the first view's ${iW} backstop, ${OW}: it wasn't drawn whole in time`), (0, AW.p)("wasm_view_backstop", ZW, `${iW}:${OW}`), "long" === iW) {
                  var kW, sW;
                  const iW = null !== (kW = null === (sW = jc) || void 0 === sW ? void 0 : sW.game) && void 0 !== kW ? kW : "";
                  Ew = new Tm.e((() => {
                    const {
                      cause: OW,
                      census: mW
                    } = tZ(WW);
                    (0, xm.reportFirstViewNoTerrain)(iW, OW, mW, tL), (0, Bi.u)("noTerrain")
                  }))
                }
              } else console.info(`${nP} playable at ${ZW} ms${gc?"":" (no renderer)"}`);
              setTimeout(Cc, 0), (0, ri.f)().catch((WW => {
                console.error(`${nP} item sprites didn't load, so item particles show the missing texture`, WW)
              })), aE.c.warm()
            }(WW), xW && null !== cc && 0 !== (WW.headerWord(nO.M.LoadSteps) & nO.Y.MeshLanded) && (ww = cc), (0, rE.g)(null !== cc && ww === cc && Lw !== cc), (0, rE.j)(null !== cc));
          (0, RO.L)(WW, {
            worldgen: ML,
            mesh: SL
          }),
          function(WW) {
            WW.forEachEvent(lE);
            for (const iW of xE) try {
              (0, PE.c)(iW)
            } catch (bW) {
              if ((0, uO.j)(bW)) {
                WW.crashOn(RO.j, bW);
                break
              }
              console.error(`${cE} an input action listener threw`, bW)
            }
            xE.length = 0
          }(WW), EW && (0, wO.d)();
          return !WW.isStopped
        }(WW, iW, "all" === mW || NW, EW)
      } finally {
        FL = NW, NW || (GL = performance.now(), Cw())
      }
    }

    function EZ(WW) {
      console.error(`${nP} a frame-start listener threw`, WW)
    }

    function NZ() {
      var WW, iW, OW, mW;
      null === (WW = uL) || void 0 === WW || WW.drain(zP, FP), null === (iW = gL) || void 0 === iW || iW.drain(zP), null === (OW = DL) || void 0 === OW || OW.drain(performance.now()), fc(zP), null === (mW = eL) || void 0 === mW || mW.drain()
    }

    function PZ(WW) {
      console.error(`${nP} a before-frame listener threw`, WW)
    }

    function LZ(WW) {
      var iW, OW;
      const mW = NL;
      if (null === mW) return;
      if (mW.isStopped || Mw || (0, AN.c)()) return void Nw.shown();
      const EW = Nw.end(WW, performance.now());
      if (null === EW) return;
      const {
        cause: NW,
        census: PW,
        loadSteps: LW
      } = tZ(mW), cW = {
        cause: NW,
        bound: 0 !== (LW & nO.V.PlayerBound),
        preload: 0 !== (LW & nO.V.JoinPreload),
        startupLoaded: AZ(),
        renderPending: null !== (iW = null === (OW = mW.lastHeader) || void 0 === OW ? void 0 : OW.renderPending) && void 0 !== iW ? iW : 0,
        wait: mW.readFirstViewWait(0, 0),
        canvasEmpty: null !== Gc && (0, Jm.f)(Gc.canvas)
      };
      cW.bound && null === cW.wait && console.warn(`${nP} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, xm.reportFirstViewUnshown)(Pw, EW, cW, PW, tL), "hidden" !== WW && "pagehide" !== WW || (0, xm.flushCrashReports)(Zi.d)
    }

    function cZ() {
      document.hidden ? (xw = !0, LZ("hidden")) : Nw.pageShown(performance.now())
    }

    function wZ() {
      LZ(document.hidden ? "hidden" : "pagehide")
    }

    function tZ(WW) {
      const iW = (0, qW.f)(),
        OW = (0, qW.p)(),
        mW = null === iW || null === OW ? null : OW.readDrawCensus(iW.api),
        EW = WW.headerWord(nO.M.LoadSteps);
      return {
        cause: (0, Tm.m)(EW, mW),
        census: mW,
        loadSteps: EW
      }
    }
    const ZZ = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function xZ(WW) {
      var iW;
      if (Fc) return;
      if (null === iw && AZ() && (iw = performance.now()), null === cc || 0 === (WW.headerWord(nO.M.LoadSteps) & nO.V.PlayerBound) ? mw = null : mw ??= performance.now(), null === tc && null === cc) return;
      null === iw || Ow || (Ow = !0, (0, AW.p)("wasm_startup_loaded", iw));
      let OW = 0;
      null !== cc ? OW = -1 : !0 === (null === (iW = hc) || void 0 === iW ? void 0 : iW.activated) && (OW = ~nO.Y.TerrainDrawn);
      const mW = WW.headerWord(nO.M.LoadSteps) & OW & ~Ww;
      if (0 === mW) return;
      Ww |= mW;
      const EW = performance.now();
      var NW, PW, LW;
      0 !== (mW & nO.Y.PlayerChunk) && (Nw.playerChunk(EW, document.hidden), Pw = null !== (NW = null !== (PW = null === (LW = jc) || void 0 === LW ? void 0 : LW.game) && void 0 !== PW ? PW : Zc) && void 0 !== NW ? NW : "", (0, xm.warmCrashCounts)());
      for (const [cW, wW] of Object.entries(ZZ)) 0 !== (mW & nO.Y[cW]) && (0, AW.p)(wW, EW)
    }

    function lZ() {
      return gc && AZ()
    }

    function AZ() {
      return VL && bZ()
    }

    function bZ() {
      return null === uL || uL.startupDone
    }

    function jZ(WW, iW) {
      const OW = kL;
      (null === OW || void 0 === OW ? void 0 : OW.conn) === WW ? UZ(OW, iW) : Ec++
    }

    function UZ(WW, iW) {
      const {
        ws: OW
      } = WW;
      return OW.readyState === WebSocket.OPEN ? (OW.send(iW), !0) : OW.readyState === WebSocket.CONNECTING && WW.pendingBytes + iW.byteLength <= RP ? (WW.pending.push(iW.slice()), WW.pendingBytes += iW.byteLength, !0) : (Ec++, !1)
    }

    function kZ() {
      return null !== cc && lZ()
    }

    function sZ() {
      var WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW;
      Mw = !0, Zw.stop(), lw.end(), (0, VN.endLookDebugTake)(), BN = null, kt(), (0, BW.K)().unlockPointer(), (0, BW.G)(null), null === (WW = nL) || void 0 === WW || WW(), nL = null, null === (iW = (0, qW.p)()) || void 0 === iW || iW.followCursorAim(null), (0, wO.G)(), (0, qW.e)(), wL.stop(), null === (OW = rc) || void 0 === OW || OW(), rc = null, null === (mW = zc) || void 0 === mW || mW(), zc = null, null === (EW = Ic) || void 0 === EW || EW.stop(), Ic = null, (0, hm.o)(null), null === (NW = sL) || void 0 === NW || NW(), sL = null, null === (PW = ML) || void 0 === PW || PW.stop(), ML = null, null === (LW = SL) || void 0 === LW || LW.stop(), SL = null, null !== (cW = LL) && void 0 !== cW && null !== (wW = cW.textures) && void 0 !== wW && wW.assets && (0, ON.i)(null), null === (tW = LL) || void 0 === tW || tW.stop(), LL = null, cL = null;
      const UW = YL;
      YL = null, UW && (UW.stop(), nZ(UW)), null === (ZW = gL) || void 0 === ZW || ZW.dispose(), gL = null, null === (xW = DL) || void 0 === xW || xW.dispose(), DL = null, uL = null, null === (lW = dL) || void 0 === lW || lW(), dL = null, null === (AW = hL) || void 0 === AW || AW(), hL = null, null !== rL && (clearTimeout(rL), rL = null), null === (bW = HL) || void 0 === bW || bW.stop(), HL = null, gw(), NN.d.release(), Zt();
      const kW = eL;
      eL = null;
      try {
        null === kW || void 0 === kW || kW.dispose()
      } catch (sW) {
        console.warn(`${nP} the sky's images didn't release`, sW)
      }(0, zE.d)(null), null === (jW = mL) || void 0 === jW || jW.pagePreviews().endSession(null === (0, gi.p)())
    }

    function MZ(WW, iW) {
      var OW, mW;
      const EW = null !== (OW = null === (mW = YL) || void 0 === mW ? void 0 : mW.details()) && void 0 !== OW ? OW : {},
        NW = WW.site === oP || WW.site === dP || WW.site === xm.RENDER_RELOAD_SITE || WW.site === eP ? WW.error instanceof WebAssembly.RuntimeError || WW.error instanceof pO.e : !(0, BO.s)(WW.error) && (0, RO.I)(WW);
      NW && WW.error instanceof Error && (0, gi.V)(WW.error);
      const PW = NW || WW.site === RO.y ? (0, xm.readTrap)(WW.error) : null,
        LW = null !== PW && (0, dO.e)(PW.kind, PW.refusedBytes) ? PW.refusedBytes : 0,
        cW = (0, cm.m)(),
        wW = null === yL ? (0, RE.p)(function() {
          try {
            return (0, gi.v)().buffer.byteLength
          } catch {
            return 0
          }
        }(), LW, cW) : yL.ceilingMayRefuse(LW, cW),
        tW = LW > 0 && !wW && dt() && !(0, AN.c)() ? (0, cm.p)() : void 0;
      var ZW;
      if (sZ(), (0, AN.c)()) return bw.releaseNow(), console.warn(`${nP} the session stopped at ${WW.site} as the page reloads`, WW.error), void((0, BO.s)(WW.error) || (null === (ZW = WW.header) || void 0 === ZW ? void 0 : ZW.lastError) === HO.D.CoreBusy || (0, xm.reportStoppedCore)(WW, iW, PW, {
        memoryDetails: EW,
        memoryStep: tW
      }));
      (0, xm.showCrash)(WW, iW, PW, {
        memoryDetails: EW,
        memoryStep: tW
      })
    }

    function KZ(WW) {
      var iW, OW;
      let {
        text: mW,
        reload: EW,
        stillBlocked: NW
      } = WW;
      if (sw) return;
      sw = !0, (0, km.$)(), null === (iW = nc) || void 0 === iW || iW.abort(), nc = null, NN.d.release();
      const PW = jw ? null !== (OW = mW.cancel) && void 0 !== OW ? OW : "general:back" : null;
      !async function(WW, iW, OW) {
        let mW = WW;
        for (; await ni(mW) && iW;) {
          if (null === OW || AO(!1) || AO(!0)) return void(0, Zi.j)();
          mW = OW
        }
        jw && (0, Zi.f)("/")
      }({
        ...mW,
        cancel: PW
      }, EW, null === NW ? null : {
        ...NW,
        cancel: PW
      })
    }

    function SZ(WW, iW) {
      const OW = performance.now();
      return !(OW - Oc[WW] < GP) && (Oc[WW] = OW, console.warn(`${nP} ${iW}`), !0)
    }

    function YZ(WW) {
      const {
        input: iW,
        net: OW,
        worker: mW
      } = WW.rings, EW = WW.optionsDropped, NW = iW.dropped + EW + OW.dropped + mW.dropped + Ec;
      NW !== mc && SZ("dropped", `${NW} records dropped so far (input ${iW.dropped}, options ${EW}, net ${OW.dropped}, worker ${mW.dropped}, net-out ${Ec})`) && (mc = NW)
    }

    function yZ() {
      var WW, iW;
      const OW = (0, Um.f)();
      if (null === OW) return null;
      const mW = (0, Ym.o)(OW);
      return {
        ...mW,
        horizontal: Math.min(mW.horizontal, null !== (WW = null === (iW = YL) || void 0 === iW ? void 0 : iW.shedDistanceInUse()) && void 0 !== WW ? WW : 1 / 0)
      }
    }
    const TZ = new WeakSet;

    function JZ(WW) {
      var iW, OW;
      return {
        samples: gc ? Rc : null,
        sunShadows: WW,
        renderDistance: null !== (iW = null === (OW = yZ()) || void 0 === OW ? void 0 : OW.horizontal) && void 0 !== iW ? iW : null
      }
    }

    function hZ(WW) {
      Zc = WW, (0, km.O)()
    }

    function HZ() {
      var WW, iW, OW;
      const mW = yZ();
      return {
        ...null === (WW = YL) || void 0 === WW ? void 0 : WW.pageKillSnapshot(),
        renderDistance: null !== (iW = null === mW || void 0 === mW ? void 0 : mW.horizontal) && void 0 !== iW ? iW : null,
        renderDistanceVertical: null !== (OW = null === mW || void 0 === mW ? void 0 : mW.vertical) && void 0 !== OW ? OW : null,
        chunkCap: TL,
        budgetBasis: JL,
        renderBackend: (0, AN.B)(),
        adPreload: xc,
        ...(0, sm.b)(Zc)
      }
    }

    function nZ(WW) {
      var iW;
      console.info(`${nP} wasm memory at the session's end`, WW.details());
      const {
        wasmMainMiB: OW,
        wasmWorkersMiB: mW,
        peakStoredChunks: EW
      } = WW.pageKillSnapshot(), NW = navigator.deviceMemory;
      (0, GO.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: OW,
        wasmWorkersMiB: mW,
        peakStoredChunks: EW
      }, {
        client: "wasm",
        renderBackend: null !== (iW = (0, AN.B)()) && void 0 !== iW ? iW : "none",
        os: (0, Mm.getOperatingSystem)(),
        deviceMemory: String(null !== NW && void 0 !== NW ? NW : "unreported")
      })
    }

    function uZ(WW, iW) {
      if (!WW.isStopped) try {
        iW()
      } catch (OW) {
        WW.crash(RO.z, OW)
      }
    }

    function oZ() {
      return KL ??= OW.e(84).then((() => OW(54840))).catch((WW => {
        throw KL = null, WW
      })), KL
    }
    async function dZ() {
      const {
        createWorldgenWorker: WW,
        worldgenWorkerReady: iW
      } = await oZ();
      return await iW(), WW
    }

    function eZ(WW) {
      var iW;
      null === (iW = KL) || void 0 === iW || iW.then(WW, (() => {}))
    }

    function vZ() {
      return performance.now() - Math.max(GL, IL) >= IP
    }

    function gZ(WW) {
      const iW = document.hidden || aL ? "all" : "budget";
      aL = !0;
      const OW = mZ(WW, !1, iW);
      var mW;
      OW && (YZ(WW), null === (mW = YL) || void 0 === mW || mW.afterFrame());
      return OW
    }

    function DZ(WW) {
      WW.isStopped || 0 === WW.rings.net.cursor || vZ() && !gZ(WW) || WW.rings.net.cursor > 0 && performance.now() - IL >= IP / 2 && function(WW) {
        rL ??= setTimeout((() => {
          rL = null, DZ(WW)
        }), IP)
      }(WW)
    }

    function VZ(WW, iW) {
      return async function(WW, iW, OW) {
        let {
          stop: mW,
          stillWanted: EW,
          beforeReload: NW
        } = OW;
        const PW = await (0, YE.l)(WW, {
          stillWanted: EW,
          beforeReload: async () => {
            mW(), await Promise.all([(0, xm.flushCrashReports)(Zi.d), null === NW || void 0 === NW ? void 0 : NW()])
          },
          reload: Zi.j
        });
        return PW || iW(), PW
      }(WW, iW, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: sZ
      })
    }
    let pZ = !1;

    function fZ() {
      return pZ = !0, async function(WW, iW, mW) {
        const {
          gamePackSource: EW
        } = await OW.e(132).then((() => OW(42537)));
        await Bt.packStep(WW, ((OW, mW) => OW.packForGame(WW, EW(iW), mW)), mW)
      }(...arguments)
    }

    function CZ(WW) {
      ! function(WW, iW) {
        WW((WW => {
          null === WW || void 0 === WW || WW.subscribe((WW => {
            let {
              pack: OW,
              gameSource: mW
            } = WW;
            iW(null === mW || null === OW ? null : {
              pack: OW,
              source: "" === mW ? null : mW
            })
          }))
        }))
      }(ft, WW)
    }
    let XZ = !1,
      BZ = null,
      qZ = !1,
      RZ = !1;

    function GZ() {
      var WW;
      XZ || (XZ = !0, Ji = (WW, iW) => (0, Ui.u)(ki.e.get().getCurrentLanguageCode(), WW, iW), hw("play", wi), (0, xW.o)(new Nx), LW.gameBridge.attach(QW), QZ().catch((() => {})), (0, qW.t)((WW => {
        Ki(WW.setTextHost)
      })), WW = rZ, uc.add(WW), function(WW) {
        for (const iW of fL) WW(iW);
        CL.add(WW)
      }((WW => {
        aZ(IZ[WW])
      })))
    }
    const IZ = {
      booted: NW.k.INITIALISE_NOA,
      texturesIn: NW.k.REGISTRATION,
      modelsIn: NW.k.SETUP_LIFEFORMS
    };

    function aZ(WW) {
      cW.l.iZ("matchmakeAndPlayStepCompleted", {
        step: WW,
        totalSubSteps: 1
      })
    }

    function rZ(WW) {
      if (!qZ) return;
      const {
        gameNameWithVariation: iW,
        lobbyName: OW
      } = (0, xW.d)();
      if (WW.code === mW.e.serverUpdating.code) return (new Nx).leaveLive(), void FZ(iW, OW);
      VW.e.leftGame(iW, WW.code), cW.l.iZ("unwantedLeftGame", {
        reason: zZ(WW),
        requiresRefresh: WW.requiresRefresh,
        canReconnect: null !== WW.reconnect,
        automaticallyReconnect: WW.reconnecting,
        canPlayAgain: WW.canPlayAgain,
        gameNameWithVariation: iW,
        lobbyName: OW
      }), (new Nx).leaveLive()
    }

    function zZ(WW) {
      return null !== WW.reasonKey ? {
        translationKey: WW.reasonKey
      } : "gameOrPluginKick" === WW.name ? (0, ui.d)(WW.reason) : `You have disconnected from the server.\n${WW.reason}`
    }

    function FZ(WW, iW) {
      var mW;
      mW = (0, wW.F)(WW, iW), Promise.resolve().then((() => OW(1605))).then((WW => {
        let {
          navigatePreserveSearch: iW
        } = WW;
        iW(mW)
      })).catch((WW => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", WW), (0, Zi.f)(mW)
      }))
    }

    function QZ() {
      return BZ ??= Promise.all([OW.e(85), OW.e(89), OW.e(86), OW.e(87), OW.e(88), OW.e(105), OW.e(102), OW.e(306), OW.e(127), OW.e(280), OW.e(254), OW.e(246), OW.e(55)]).then((() => OW(42495))).then((WW => {
        try {
          WW.attachPlayGameSources()
        } catch (iW) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", iW),
            function(WW) {
              AL.then((iW => {
                null === iW || iW.isStopped || Mw ? console.warn(`${nP} the play sources threw as they attached, after the client stopped`, WW) : MZ({
                  site: eP,
                  error: WW,
                  header: null
                }, tL)
              }))
            }(iW), iW
        }
      }), (WW => {
        throw BZ = null, new qW.b(WW)
      })), BZ
    }
    async function Wx(WW, iW) {
      GZ(), pZ = !0, qZ = !0;
      let OW = {
          place: WW.place,
          matchedAt: WW.matchedAt
        },
        PW = WW.place.gameNameWithVariation;
      const LW = (0, ZW.f)();
      let cW = null;
      const wW = await ow({
        matchmake: async () => {
          let iW = OW;
          if (OW = null, null === iW) {
            const OW = await WW.rematch();
            if (OW.isError()) throw cW = OW.asError().forward(), new Error(OW.asError().message);
            iW = {
              place: OW.getValue(),
              matchedAt: performance.now()
            }
          }
          PW = iW.place.gameNameWithVariation, await (0, bW.c)();
          return {
            target: await (0, mi.c)(WW.userContext, iW.place, Ct(), LW),
            matchedAt: iW.matchedAt,
            freshMs: mi.b
          }
        },
        pageReady: QZ,
        onFailure: (WW, iW) => {
          null === cW && function(WW, iW) {
            (0, xm.reportPageJoinFailure)(WW, tL, iW)
          }(WW, {
            sinceJoinStartMs: iW,
            game: PW
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => WW.userContext.invalidateTrafficCode(),
        signal: iW
      });
      switch (wW.kind) {
        case "joined":
          if (LW) {
            setTimeout((() => {
              eW.ready()
            }), 0);
            const {
              game: WW
            } = wW;
            (0, ZW.t)((() => {
              WW.endJoinAd() && ((0, AW.l)(), eW.adEnded())
            }))
          }
          return RZ || (RZ = !0, (0, gW.c)()), qZ ? (aZ(NW.k.CONNECT_TO_GAME_SERVER), aZ(NW.k.SHADER_PACK), function() {
            var WW, iW;
            return null !== (WW = null === (iW = pL) || void 0 === iW ? void 0 : iW.runsInJoinedGame()) && void 0 !== WW && WW
          }() && (0, vW.i)(WW.userContext, PW).catch((WW => {
            console.error("Failed to report the shader pack session", WW)
          })), function() {
            const WW = function() {
              var WW, iW;
              return null !== (WW = null === (iW = pL) || void 0 === iW ? void 0 : iW.couldntRunInJoinedGame()) && void 0 !== WW ? WW : null
            }();
            null !== WW && (0, vW.e)(WW)
          }(), EW.b.value(void 0)) : Ex("The server ended the game as it joined");
        case "failed":
          if (!wW.reloading) {
            if (null !== cW) return cW;
            if ((wW.error instanceof ii.n || wW.error instanceof ii.c) && wW.error.code === mW.e.serverUpdating.code) {
              if (iW.aborted) return Ex("Left the game while it loaded");
              const {
                gameNameWithVariation: WW,
                lobbyName: OW
              } = (0, xW.d)();
              return FZ(WW, OW), Ex("The server is updating")
            }
            return wW.error instanceof ti.b ? EW.b.errorWithCode(wW.error.messageKey, NW.k.SHADER_PACK, {
              severity: "medium"
            }) : EW.b.errorWithCode(function(WW) {
              if (WW instanceof ii.z || WW instanceof CW.c) return WW.message;
              if (ix(WW)) return (0, Wi.k)(WW.code, WW.serverText);
              return Wi.e
            }(wW.error), NW.k.CONNECT_TO_GAME_SERVER, {
              error: Ox(wW.error) ? wW.error : void 0,
              severity: mx(wW.error),
              gameServerUnreachable: (0, Oi.d)(wW.error),
              joinFailure: (0, Oi.f)(wW.error),
              rematch: (0, pW.b)(wW.error),
              gameRefused: (0, fW.c)(wW.error)
            })
          }
          return Ex("Reloading into the new build");
        case "stopped":
          return Ex("The game client stopped, and shows why");
        case "uW":
          return Ex("Left the game while it loaded")
      }
    }

    function ix(WW) {
      return WW instanceof ii.n || WW instanceof ii.c && "attach" !== WW.stage
    }

    function Ox(WW) {
      return !(WW instanceof ii.z) && !ix(WW) && void 0 === (0, Oi.d)(WW)
    }

    function mx(WW) {
      return ix(WW) ? WW instanceof ii.c && (0, Wi.i)(WW.code).requiresRefresh ? "medium" : "low" : Ox(WW) || WW instanceof ii.z ? "medium" : "low"
    }

    function Ex(WW) {
      return EW.b.errorWithCode(WW, NW.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        uW: !0
      })
    }
    class Nx {
      leave(WW) {
        if ((0, XW.d)()) {
          var iW, OW;
          if ((0, PW.b)()) return;
          (0, lW.b)(!0 === (null === (iW = (0, XW.n)()) || void 0 === iW || null === (OW = iW.currentViewer) || void 0 === OW ? void 0 : OW.unsavedChanges), WW)
        } else this.leaveLive()
      }
      leaveLive() {
        var WW;
        pZ && (null === (WW = Ct()) || void 0 === WW || WW.endGamePack());
        if (!qZ) return;
        qZ = !1, (0, DW.d)();
        try {
          var iW;
          null === (iW = (0, qW.p)()) || void 0 === iW || iW.clearWasmCameraScreen()
        } catch (mW) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", mW)
        }
        const {
          gameNameWithVariation: OW
        } = (0, xW.d)();
        try {
          Gw()
        } finally {
          (0, xW.r)({
            websocketUrl: null
          }), cW.l.iZ("leaveGame", {
            gameNameWithVariation: OW
          }), (0, tW.O)()
        }
      }
      isReplay() {
        return (0, XW.d)()
      }
    }
  },
  42440: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      d: () => mW,
      f: () => LW,
      g: () => PW
    });
    const mW = 12e4,
      EW = 3e4,
      NW = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: WW => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", WW), () => {
          document.removeEventListener("visibilitychange", WW)
        })
      };

    function PW(WW) {
      return `it sent no start within ${Math.round(WW)} ms`
    }
    class LW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NW;
        this.timeoutMs = WW, this.onTimeout = iW, this.now = OW, this.visibility = mW, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = mW.listen((() => {
          this.onVisibility()
        })), mW.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const WW = this.step;
        return null === WW ? 0 : Math.min(this.now() - WW.at, WW.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const WW = this.timeoutMs - this.counted;
        if (WW <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const iW = Math.min(WW, 5e3);
        this.step = {
          at: this.now(),
          ms: iW
        }, this.arm(iW, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(WW, iW) {
        this.timer = setTimeout((() => {
          this.timer = null, iW()
        }), WW)
      }
    }
  },
  40987: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW
    });
    var mW = OW(344),
      EW = OW(1052);
    const NW = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      PW = new Set(["creativeFlat", "skyGrid"]);

    function LW(WW) {
      const iW = (0, mW.Tb)(WW);
      return "greenville" === iW ? !(0, mW.Lb)(WW) : "classic" !== iW ? NW.has(iW) : !(0, EW.i)(WW) && !PW.has((0, mW.Lb)(WW))
    }
  },
  38911: (WW, iW, OW) => {
    function mW(WW) {
      return "string" !== typeof WW || 2 !== WW.length && ":" !== WW[2] ? null : WW[0] + WW[1]
    }
    OW.d(iW, {
      c: () => jW,
      g: () => SW,
      i: () => KW,
      l: () => YW,
      o: () => LW,
      q: () => PW,
      s: () => NW,
      v: () => cW,
      x: () => UW,
      y: () => bW
    });
    const EW = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function NW(WW) {
      if (function(WW) {
          for (let iW = 0; iW < EW.length; iW++)
            if (WW === EW[iW]) return !0;
          return !1
        }(WW)) return !1;
      const iW = mW(WW);
      return "op" === iW || "ep" === iW || "wi" === iW || "pp" === iW || "fp:call" === WW || "fp:t" === WW
    }

    function PW(WW) {
      return "fp" === mW(WW) && !NW(WW)
    }

    function LW(WW) {
      if ("string" !== typeof WW) return !1;
      return "o" === WW[0] && "p" === WW[1] && (2 === WW.length || ":" === WW[2]) || "fp:call" === WW || "2" === WW || "t" === WW || "a" === WW
    }

    function cW(WW, iW) {
      return `~${function(WW){return WW.length<2?WW:":"===WW[1]?WW[0]:WW[0]+WW[1]}(iW)}~${WW}`
    }
    const wW = 200;

    function tW(WW) {
      let iW = WW.length - 1;
      for (let OW = 0; OW < 2; OW++) {
        const OW = iW;
        for (; iW >= 0 && WW[iW] >= "0" && WW[iW] <= "9";) iW--;
        if (iW < 0 || iW === OW || ":" !== WW[iW]) return -1;
        iW--
      }
      return iW + 1
    }

    function ZW(WW) {
      return "unknown" === WW || tW(WW) >= 0
    }

    function xW(WW, iW) {
      return WW[iW] >= "\ud800" && WW[iW] <= "\udbff" && iW + 1 < WW.length && WW[iW + 1] >= "\udc00" && WW[iW + 1] <= "\udfff" ? 2 : 1
    }

    function lW(WW, iW, OW) {
      return 2 === OW ? 4 : WW[iW] <= "\x7f" ? 1 : WW[iW] <= "\u07ff" ? 2 : 3
    }

    function AW(WW, iW, OW) {
      let mW = 0;
      for (; mW < iW;) {
        const iW = xW(WW, mW),
          EW = lW(WW, mW, iW);
        if (EW > OW) break;
        OW -= EW, mW += iW
      }
      return mW
    }

    function bW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof WW || WW.length > wW || !ZW(WW)) return "t";
      let OW = 2;
      for (let LW = 0; LW < WW.length;) {
        const iW = xW(WW, LW);
        OW += lW(WW, LW, iW), LW += iW
      }
      if (OW <= iW) return `t ${WW}`;
      const mW = tW(WW),
        EW = iW - 2 - (WW.length - mW);
      if (EW < 0) return "t";
      const NW = AW(WW, mW, EW);
      let PW = "t ";
      for (let LW = 0; LW < NW; LW++) PW += WW[LW];
      for (let LW = mW; LW < WW.length; LW++) PW += WW[LW];
      return PW
    }
    const jW = 62;

    function UW(WW) {
      let iW = "so:";
      const OW = AW(WW, WW.length, jW - iW.length);
      for (let mW = 0; mW < OW; mW++) iW += WW[mW];
      return iW
    }
    const kW = "BABYLON ",
      sW = "DECODE ",
      MW = "BABYLON@ ";

    function KW(WW) {
      return UW(kW + WW)
    }

    function SW(WW, iW) {
      return UW(MW + WW + " " + iW)
    }

    function YW(WW) {
      return UW(sW + WW)
    }
  },
  42379: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    const mW = {
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
  39961: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(2381);
    const EW = ["none", "idle", "now"];

    function NW() {
      const WW = () => (0, mW.G)();
      return {
        memoryBytes: () => (0, mW.v)().buffer.byteLength,
        reserveUpFront: iW => WW().vZ(iW),
        reserveAhead: iW => WW().eZ(iW),
        setCeiling: iW => {
          WW().gZ(iW)
        },
        lowWater: () => EW[WW().dZ()] ?? "none",
        stats: () => function(WW) {
          const iW = new Uint32Array((0, mW.v)().buffer, WW, 17),
            OW = WW => iW[WW] ?? 0,
            EW = WW => ({
              upFront: OW(WW),
              ahead: OW(WW + 1),
              onDemandInFrame: OW(WW + 2),
              onDemand: OW(WW + 3)
            });
          return {
            memoryBytes: OW(0),
            initialBytes: OW(1),
            liveBytes: OW(2),
            peakLiveBytes: OW(3),
            headroomBytes: OW(4),
            unusedBytes: OW(5),
            ceilingBytes: OW(6),
            reservesRefused: OW(7),
            grows: EW(8),
            grownBytes: EW(12),
            allocationsRefused: OW(16)
          }
        }(WW().DZ()),
        takeBallast: () => WW().VZ(),
        takePressure: () => WW().pZ()
      }
    }
  },
  5970: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => tW,
      D: () => xW,
      e: () => LW,
      i: () => PW,
      l: () => mW,
      o: () => bW,
      p: () => ZW,
      r: () => EW,
      v: () => NW,
      x: () => wW
    });
    const mW = 5;

    function EW(WW) {
      return WW === mW
    }

    function NW(WW) {
      return [...WW.features]
    }
    const PW = 262144,
      LW = 256,
      cW = 256;

    function wW(WW) {
      if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
      const iW = [];
      for (const [OW, mW] of Object.entries(WW)) {
        if ("string" !== typeof mW) return `${OW} isn't text.`;
        iW.push({
          path: OW,
          source: mW
        })
      }
      return iW.sort(((WW, iW) => ZW(WW.path, iW.path))),
        function(WW) {
          if (0 === WW.length) return "The pack has no .wgsl files.";
          if (WW.length > LW) return `The pack has more than ${LW} .wgsl files.`;
          const iW = new Set;
          for (const {
              path: OW
            }
            of WW) {
            const WW = lW(OW);
            if (null !== WW) return WW;
            if (iW.has(OW)) return `The pack has two files at ${OW}.`;
            iW.add(OW)
          }
          return xW(WW) > PW ? `The pack's .wgsl files are over ${PW/1024} KB in total.` : null
        }(iW) ?? iW
    }

    function tW(WW) {
      const iW = {};
      for (const OW of WW) iW[OW.path] = OW.source;
      return iW
    }

    function ZW(WW, iW) {
      return WW < iW ? -1 : WW > iW ? 1 : 0
    }

    function xW(WW) {
      const iW = new TextEncoder;
      let OW = 0;
      for (const {
          source: mW
        }
        of WW) OW += iW.encode(mW).byteLength;
      return OW
    }

    function lW(WW) {
      if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
      if (WW.length > cW) return `A file path is over ${cW} characters.`;
      if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
      return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
    }
    const AW = /^(.*)\[rot\[([1-4])$/;

    function bW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const mW = new Map;
      iW.forEach(((WW, iW) => {
        let {
          numAnimStates: OW,
          animStartIdx: EW
        } = WW;
        for (let NW = 1; NW < OW; NW++) mW.set(EW + NW - 1, iW)
      }));
      const EW = Object.entries(WW),
        NW = new Map;
      for (const [bW, jW] of EW) {
        const WW = AW.exec(bW);
        "1" === WW?.[2] && NW.set(WW[1], jW + 1)
      }
      const PW = WW => {
          const iW = AW.exec(WW);
          return iW && NW.has(iW[1]) ? {
            root: iW[1],
            rotation: Number(iW[2]) - 1
          } : null
        },
        LW = new Set(EW.map((WW => {
          let [iW] = WW;
          return PW(iW)?.root ?? iW
        }))),
        cW = (WW, OW) => {
          const mW = WW.replace(/_?0$/, "");
          return (iW[OW]?.numAnimStates ?? 0) > 1 && !LW.has(mW) ? mW : WW
        },
        wW = new Map;
      for (const [AW, bW] of EW) wW.set(bW, cW(PW(AW)?.root ?? AW, bW));
      const tW = EW.reduce(((WW, iW) => {
          let [, OW] = iW;
          return Math.max(WW, OW + 1)
        }), 0),
        ZW = Array.from({
          length: tW
        }, ((WW, iW) => ({
          id: iW + 1,
          rotation: 0
        }))),
        xW = new Map,
        lW = new Map;
      for (const [AW, bW] of EW) {
        const WW = PW(AW),
          iW = mW.get(bW);
        if (void 0 !== iW) {
          const OW = wW.get(iW);
          lW.set(AW, {
            name: AW,
            texture: OW,
            kind: "frame"
          }), WW && !lW.has(WW.root) && lW.set(WW.root, {
            name: WW.root,
            texture: OW,
            kind: "frame"
          });
          continue
        }
        const OW = wW.get(bW),
          EW = WW?.root ?? AW;
        if (OW !== EW && lW.set(EW, {
            name: EW,
            texture: OW,
            kind: "frame"
          }), WW) {
          const iW = NW.get(WW.root);
          ZW[bW] = {
            id: iW,
            rotation: WW.rotation
          }, xW.set(OW, iW), lW.set(AW, {
            name: AW,
            texture: OW,
            kind: "rotation"
          })
        } else xW.set(OW, bW + 1)
      }
      for (const AW of xW.keys()) lW.delete(AW);
      for (const [AW, bW] of OW) {
        const WW = xW.get(bW);
        void 0 === WW || xW.has(AW) || (xW.set(AW, WW), lW.delete(AW))
      }
      return {
        named: [...xW].sort(((WW, iW) => {
          let [OW] = WW, [mW] = iW;
          return OW < mW ? -1 : OW > mW ? 1 : 0
        })).map((WW => {
          let [iW, OW] = WW;
          return {
            name: iW,
            id: OW
          }
        })),
        aliases: [...lW.values()],
        layers: ZW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);