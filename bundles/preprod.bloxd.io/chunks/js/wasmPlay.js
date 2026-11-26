export const id = 75;
export const ids = [75, 128, 129, 150];
export const modules = {
  40525: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      e: () => yU
    });
    const cU = "The world isn't loaded, so no blocks can be seen.",
      yU = "The world isn't loaded, so nothing in it can be seen."
  },
  5171: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(3099);
    const FU = 3e4,
      oU = 1e3;

    function DU() {
      return "visible" === document.visibilityState && "inGame" === cU.e.get("gameState") && (0, QU.w)()
    }

    function EU(UU, XU) {
      (0, AU.t)() || function(UU, XU, zU) {
        let cU = 0;
        const yU = setInterval((() => {
          XU() && (cU += oU, cU >= UU && (clearInterval(yU), zU()))
        }), oU)
      }(FU, DU, (() => {
        XU().then((() => {
          UU(`saved for the player after ${FU/1e3} s of play`), (0, AU.A)(), yU.k.UY("chat", {
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
  34729: (UU, XU, zU) => {
    function cU(UU, XU) {
      return 0 === UU.length ? 0 : UU[Math.min(UU.length - 1, Math.floor(XU * UU.length))]
    }

    function yU(UU) {
      return UU.toFixed(1)
    }
    zU.d(XU, {
      b: () => yU,
      f: () => cU
    })
  },
  38682: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => DU,
      g: () => EU,
      j: () => BU,
      l: () => GU,
      n: () => kU
    });
    var cU = zU(5171),
      yU = zU(34729),
      QU = zU(3099);
    const AU = 20,
      FU = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "xY", "jobMs"];

    function oU(UU) {
      return [...UU].sort(((UU, XU) => UU - XU))
    }
    const DU = [];

    function EU(UU, XU, zU) {
      return `${UU},${XU},${zU}`
    }
    class YU {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(UU, XU) {
        var zU;
        const cU = null !== (zU = this.pending.get(UU)) && void 0 !== zU ? zU : [];
        cU.push({
          editAt: XU,
          meshJobId: 0
        }), this.pending.set(UU, cU)
      }
      frame(UU) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, UU - this.lastFrameAt)), this.lastFrameAt = UU, this.frames++, UU - this.windowStart >= 1e3 && this.summarise(UU)
      }
      sent(UU, XU, zU, cU, yU, QU, AU) {
        this.jobs.set(XU, {
          sentAt: AU,
          receivedAt: 0,
          ahead: zU,
          inFlight: cU,
          xY: yU,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, zU), this.maxCapacity = Math.max(this.maxCapacity, yU);
        for (const oU of null !== (FU = this.pending.get(UU)) && void 0 !== FU ? FU : []) {
          var FU;
          QU.includes(oU.meshJobId) || (oU.meshJobId = XU)
        }
      }
      received(UU, XU, zU) {
        const cU = this.jobs.get(UU);
        void 0 !== cU && (this.roundTrips.push(zU - cU.sentAt), cU.receivedAt = zU, cU.jobMs = XU)
      }
      failed(UU) {
        this.jobs.delete(UU)
      }
      reassign(UU, XU, zU) {
        this.jobs.delete(XU);
        for (const yU of null !== (cU = this.pending.get(UU)) && void 0 !== cU ? cU : []) {
          var cU;
          yU.meshJobId === XU && (yU.meshJobId = zU)
        }
      }
      applied(UU, XU, zU) {
        const cU = this.jobs.get(XU);
        this.jobs.delete(XU), void 0 !== cU && this.show(UU, cU, zU, (UU => UU.meshJobId === XU))
      }
      emptied(UU, XU) {
        const zU = {
          sentAt: XU,
          receivedAt: XU,
          ahead: 0,
          inFlight: 0,
          xY: 0,
          jobMs: 0
        };
        this.show(UU, zU, XU, (() => !0))
      }
      show(UU, XU, zU, cU) {
        const yU = this.pending.get(UU);
        if (!yU) return;
        const QU = yU.filter((yU => !cU(yU) || (this.record(UU, yU.editAt, XU, zU), !1)));
        QU.length > 0 ? this.pending.set(UU, QU) : this.pending.delete(UU)
      }
      oY(UU) {
        this.reported += UU, this === IU && this.reported >= AU && null !== pU && (pU(), pU = null)
      }
      record(UU, XU, zU, cU) {
        const yU = {
          totalMs: cU - XU,
          slotMs: zU.sentAt - XU,
          workerMs: zU.receivedAt - zU.sentAt,
          applyMs: cU - zU.receivedAt,
          ahead: zU.ahead,
          inFlight: zU.inFlight,
          xY: zU.xY,
          jobMs: zU.jobMs
        };
        if (this.edits[this.nextEdit] = yU, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(yU.totalMs), this.oY(1), yU.totalMs < 100 || ++this.outliers > 5) return;
        const AU = UU => Math.round(UU);
        (0, QU.l)("remesh", `slow edit (${UU}) shown in ${AU(yU.totalMs)} ms: slot ${AU(yU.slotMs)}, worker ${AU(yU.workerMs)} (${yU.ahead} ahead, ${yU.inFlight}/${yU.xY} in flight; job ${AU(yU.jobMs)}), apply ${AU(yU.applyMs)}`)
      }
      summarise(UU) {
        const XU = (UU - this.windowStart) / 1e3;
        for (const [zU, cU] of this.pending) {
          const XU = cU.filter((XU => UU - XU.editAt <= 1e4));
          this.gaveUp += cU.length - XU.length, this.oY(cU.length - XU.length), XU.length > 0 ? this.pending.set(zU, XU) : this.pending.delete(zU)
        }
        for (const [zU, cU] of this.jobs) UU - cU.sentAt > (cU.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(zU);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const UU = oU(this.roundTrips),
            zU = oU(this.windowEdits),
            cU = Math.max(0, this.outliers - 5);
          (0, QU.l)("remesh", `${Math.round(this.frames/XU)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,yU.f)(UU,.5))} max ${Math.round((0,yU.f)(UU,1))} ms | ${zU.length} edits shown, p50 ${Math.round((0,yU.f)(zU,.5))} max ${Math.round((0,yU.f)(zU,1))} ms${cU>0?`, ${cU} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = UU, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const UU = FU.map((UU => {
          const XU = oU(this.edits.map((XU => XU[UU])));
          return `${UU}: p50 ${Math.round((0,yU.f)(XU,.5))} p90 ${Math.round((0,yU.f)(XU,.9))} max ${Math.round((0,yU.f)(XU,1))}`
        }));
        return [`${this.edits.length} edits`, ...UU].join("\n")
      }
      dump() {
        const UU = this.edits.map((UU => FU.map((XU => Math.round(10 * UU[XU]) / 10)).join(",")));
        return [this.stats(), FU.join(","), ...UU].join("\n")
      }
    }
    class NU {
      constructor(UU, XU) {
        this.log = UU, this.WN = XU
      }
      edit(UU, XU, zU) {
        const [cU, yU, QU] = this.WN.qY.mcU(UU, XU, zU), AU = this.WN.qY.Ga.Ba(cU, yU, QU);
        AU && AU.ga && this.log.edit(EU(cU, yU, QU), performance.now())
      }
      sent(UU, XU, zU, cU, yU) {
        this.log.sent(EU(UU.i, UU.j, UU.k), XU, zU, cU, yU, DU, performance.now())
      }
      received(UU) {
        this.log.received(UU.meshJobId, UU.jobMs, performance.now())
      }
      failed(UU) {
        this.log.failed(UU)
      }
      applied(UU, XU) {
        this.log.applied(EU(UU.i, UU.j, UU.k), XU, performance.now())
      }
    }
    let IU = null,
      pU = null,
      aU = !1,
      tU = null;

    function gU() {
      return new Promise((UU => {
        null !== IU && IU.reported >= AU ? UU() : pU = UU
      }))
    }

    function kU() {
      const UU = new YU;
      return IU = UU, (0, QU.h)("remesh", (() => UU.dump())), (0, QU.d)("remeshStats", (() => {
        console.log(UU.stats())
      })), aU || (aU = !0, (0, cU.d)((UU => {
        (0, QU.l)("remesh", UU)
      }), gU)), UU
    }

    function GU(UU) {
      const XU = kU();
      tU = new NU(XU, UU), UU.yB.meshProbe = tU, UU.on("beforeRender", (() => {
        XU.frame(performance.now())
      }))
    }

    function BU(UU, XU, zU) {
      var cU;
      null === (cU = tU) || void 0 === cU || cU.edit(UU, XU, zU)
    }
  },
  34754: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = new Set(["chunkBorders"])
  },
  37535: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => cU
    });
    const cU = 3,
      yU = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  34904: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      h: () => yU,
      i: () => EU
    });
    var cU = zU(1613);

    function yU(UU) {
      var XU;
      return {
        ...AU.store,
        yaw: AU.store.yaw + (null !== (XU = cU.d[UU].previewYaw) && void 0 !== XU ? XU : 0)
      }
    }
    const QU = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      AU = {
        player: QU,
        store: {
          ...QU,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function FU(UU, XU) {
      UU instanceof Promise ? UU.then(XU).catch((UU => {
        console.error("Couldn't open the preview", UU)
      })) : XU(UU)
    }
    class oU {
      constructor(UU) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, FU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
        }))
      }
      show(UU) {
        var XU;
        this.view = UU, null === (XU = this.opened) || void 0 === XU || XU.show(UU)
      }
      resize(UU, XU) {
        var zU;
        this.size = {
          width: UU,
          height: XU
        }, null === (zU = this.opened) || void 0 === zU || zU.resize(UU, XU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    class DU {
      constructor(UU) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), FU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var UU, XU;
        return null !== (UU = null === (XU = this.opened) || void 0 === XU ? void 0 : XU.isReady()) && void 0 !== UU && UU
      }
      setCosmetic(UU, XU) {
        var zU;
        null === (zU = this.opened) || void 0 === zU || zU.setCosmetic(UU, XU)
      }
      playEmote(UU) {
        var XU;
        null === (XU = this.opened) || void 0 === XU || XU.playEmote(UU)
      }
      setOrbit(UU) {
        var XU;
        null === (XU = this.opened) || void 0 === XU || XU.setOrbit(UU)
      }
      resetCamera() {
        var UU;
        null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
      }
      async untilDrawn(UU) {
        var XU;
        await this.ready, await (null === (XU = this.opened) || void 0 === XU ? void 0 : XU.untilDrawn(UU))
      }
      resize(UU, XU) {
        var zU;
        this.size = {
          width: UU,
          height: XU
        }, null === (zU = this.opened) || void 0 === zU || zU.resize(UU, XU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    const EU = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(UU) {
        this.host = UU
      }
      setDefaultHost(UU) {
        this.makeDefault = UU
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(UU) {
        return new oU(this.current().openMob(UU))
      }
      openPet(UU) {
        return new oU(this.current().openPet(UU))
      }
      openMobLineup(UU) {
        return new oU(this.current().openMobLineup(UU))
      }
      openCharacter(UU, XU) {
        return new DU(this.current().openCharacter(UU, XU))
      }
    }
  },
  5603: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.j,
      e: () => yU,
      i: () => cU.o
    });
    var cU = zU(5608);
    const yU = [!1, !0].flatMap((UU => ["terrain", "liquid", "model"].map((XU => ({
      strict: UU,
      program: XU
    })))))
  },
  40071: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ShaderPackPage: () => oU,
      harnessShaderPackMode: () => NU,
      setHarnessUrlShaderPack: () => YU,
      shaderPackPage: () => EU
    });
    var cU = zU(97),
      yU = zU(42),
      QU = (zU(3854), zU(5603), zU(3849)),
      AU = zU(7253);
    zU(7219);
    const FU = {
      status: "none"
    };
    class oU {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, QU.h)(cU.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), DU().then((UU => {
            UU && yU.k.removeItem(QU.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, QU.d)(cU.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const UU = await this.load();
        return "active" === UU.status ? UU.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((UU => (console.error("Failed to load the shader pack", UU), FU))).then((UU => (this.resolved ??= UU, UU))), this.pagePack
      }
      hasNone() {
        var UU;
        return "none" === (null === (UU = this.resolved) || void 0 === UU ? void 0 : UU.status)
      }
      block(UU) {
        this.resolved = {
          status: "blocked",
          messageKey: UU,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([zU.e(89), zU.e(147), zU.e(154)]).then((() => zU(44434))).then((UU => (UU.prefetchCompiler(), UU))), this.compiling
      }
      async readStored() {
        const UU = await DU();
        return UU && this.compiler().then((UU => UU.reconcileHint())).catch((UU => {
          console.error("Failed to correct the shader pack hint", UU)
        })), UU
      }
      async read() {
        const UU = await this.preload();
        return UU ? (await this.compiler()).compilePagePack(UU) : FU
      }
    }
    async function DU() {
      if (!(0, QU.k)(cU.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const UU = await (0, AU.f)(!0);
        return UU || yU.k.setItem(QU.b, !1), UU
      } catch (UU) {
        return console.error("Failed to read the stored shader pack", UU), yU.k.removeItem(QU.b), null
      }
    }
    const EU = new oU;

    function YU(UU, XU) {}

    function NU() {
      return null
    }
  },
  40124: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => YU,
      f: () => NU
    });
    var cU = zU(173),
      yU = zU(195),
      QU = zU(1533),
      AU = zU(1835),
      FU = zU(1545),
      oU = zU(37181),
      DU = zU(702),
      EU = zU(40071);

    function YU(UU) {
      (0, AU.reportClientError)("matchmake_failed", UU, cU.m[cU.m.SHADER_PACK])
    }
    async function NU(UU, XU) {
      var zU;
      const cU = null === (zU = await EU.shaderPackPage.preload()) || void 0 === zU ? void 0 : zU.listing,
        AU = (0, oU.e)();
      cU && null !== AU && await FU.c.reportShaderPackSession(UU, {
        packId: cU.packId,
        sourceHash: cU.sourceHash,
        game: (0, QU.f)(XU, yU.v, "other"),
        playSessionId: AU,
        visitSessionId: (0, DU.g)()
      })
    }
  },
  7253: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => QU
    });
    var cU = zU(42);
    const yU = "shaderPack";
    async function QU() {
      var UU;
      let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
    }
  },
  7219: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadShaderPackTextures: () => AU,
      shaderPackTextures: () => FU
    });
    var cU = zU(5608);
    let yU = null,
      QU = null;

    function AU() {
      return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: XU,
          textureNameToIndex: zU,
          textureAnimationData: QU
        } = UU;
        return yU ??= (0, cU.k)(zU, QU, XU), yU
      })), QU
    }

    function FU() {
      if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yU
    }
  },
  39863: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(31),
      yU = zU(1310),
      QU = zU(3295);
    const AU = "Reconnecting";
    class FU {
      constructor(UU) {
        this.hooks = UU, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = UU => {
          UU.persisted || this.leave()
        }, this.controller = new QU.d((XU => UU.reconnect(XU)), {
          isSessionLive: () => !this.ended && UU.isLive(),
          onPhaseChanged: UU => {
            this.onPhaseChanged(UU)
          },
          onReconnected: XU => {
            UU.onReconnected(XU)
          },
          onGaveUp: XU => {
            !this.ended && UU.isLive() && UU.onGaveUp(this.sessionBased, XU)
          }
        })
      }
      onInitialInfo(UU, XU) {
        this.graceMs = UU, this.sessionBased = XU
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(UU) {
        this.ended || this.controller.onConnectionLost(UU, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const UU = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          XU = this.controller.heldToken;
        this.end(), UU && "" !== XU && this.hooks.releaseSeat(XU)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(UU) {
        const XU = (0, QU.q)(UU);
        XU !== this.stopped && (this.stopped = XU, this.hooks.freeze(XU));
        const zU = "frozen" === UU || "resuming" === UU && this.frozen;
        zU && !this.frozen ? (0, yU.u)(AU, {
          overridesPause: !0
        }) : !zU && this.frozen && (0, yU.s)(AU), this.frozen = zU, this.setListening("connected" !== UU), cU.k.UY(QU.p, zU ? "frozen" : UU)
      }
      setListening(UU) {
        UU !== this.listening && (this.listening = UU, UU ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39867: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = UU, this.now = XU, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const UU = this.now(),
            XU = UU - this.lastCheckAt <= 2e3;
          this.lastCheckAt = UU;
          const zU = "visible" === document.visibilityState;
          !zU || XU && this.wasVisible || (this.resumedAt = UU), this.wasVisible = zU, zU && UU - this.lastHeardAt > 12e3 && UU - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = XU(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  34809: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(1325);

    function yU() {
      var UU, XU;
      return null !== (UU = null === (XU = screen.orientation) || void 0 === XU ? void 0 : XU.type) && void 0 !== UU ? UU : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const QU = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && yU() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = yU(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, cU.Wa)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const UU of this.resizers) UU()
          }
        }), 1e3)
      }
      heldSizer(UU) {
        let XU = !1;
        return () => {
          if (XU && this.isHeld()) return null;
          const zU = UU();
          return XU ||= null !== zU, zU
        }
      }
      onRelease(UU) {
        return this.resizers.add(UU), () => {
          this.resizers.delete(UU)
        }
      }
    }
  },
  40110: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    let cU = !1;
    async function yU(UU, XU) {
      if (!cU) {
        cU = !0;
        try {
          const [{
            reloadBloxd: cU
          }, {
            NotificationProvider: yU
          }] = await Promise.all([Promise.resolve().then((() => zU(1800))), Promise.resolve().then((() => zU(1410)))]);
          if (!UU || !0 === await yU.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void cU(XU)
        } catch (yU) {
          console.error("Leaving the replay failed", yU)
        }
        cU = !1
      }
    }
  },
  39874: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU,
      h: () => EU
    });
    var cU = zU(1765),
      yU = zU(212),
      QU = zU(1734),
      AU = zU(1860),
      FU = zU(1203),
      oU = zU(1131);
    async function DU(UU, XU) {
      return function(UU) {
        return "object" === typeof UU && null !== UU && UU.code === yU.e.VpnIp.code
      }(XU) && function(UU) {
        return QU.d.supports("appCheck") && UU.isLoggedIn() && !UU.hasTriedAppAttestation()
      }(UU) && await async function(UU) {
        try {
          const {
            token: XU
          } = await (0, AU.d)(), {
            "3PSIDMCPP": zU
          } = await (0, oU.postJsonWithMetricsCookiesAndJsonResponse)(`${FU.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: XU
          }, {
            retries: 0
          }, UU.getMetricsCookies());
          return UU.setAppAttestedAuthJwt(zU), !0
        } catch (XU) {
          return XU instanceof cU.d && "failed" === XU.code ? (console.warn("The app couldn't get an App Check token:", XU), UU.markAppAttestationTried()) : console.error("Failed to attest the app:", XU), !1
        }
      }(UU)
    }
    async function EU(UU, XU) {
      try {
        return await XU()
      } catch (zU) {
        if (!await DU(UU, zU)) throw zU
      }
      return XU()
    }
  },
  42077: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      i: () => oU
    });
    var cU = zU(1817);
    const yU = 33177600,
      QU = 3e4;
    let AU = !1;

    function FU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: FU = 1,
        type: oU = "image/png",
        quality: DU
      } = cU;
      return UU.BY() ? AU ? Promise.reject(new Error("A screenshot is already being taken")) : (AU = !0, new Promise(((cU, EU) => {
        let YU, NU = 2,
          IU = null;
        const pU = () => {
          var XU;
          AU = !1, null === (XU = IU) || void 0 === XU || XU(), clearTimeout(YU);
          try {
            UU.restoreSize()
          } catch (zU) {
            console.error("A screenshot couldn't size the canvas back", zU)
          }
        };
        YU = setTimeout((() => {
          pU(), EU(new Error("No frame was drawn to capture"))
        }), QU);
        try {
          const cU = function(UU, XU, zU) {
            const cU = Math.max(1, UU),
              QU = Math.max(1, XU),
              AU = Math.min(1, zU / Math.max(cU, QU), Math.sqrt(yU / (cU * QU)));
            return {
              width: Math.max(1, Math.floor(cU * AU)),
              height: Math.max(1, Math.floor(QU * AU))
            }
          }(XU, zU, UU.maxTextureSize);
          UU.resize(cU.width, cU.height, FU * cU.width / Math.max(1, XU))
        } catch (aU) {
          return pU(), void EU(aU)
        }
        IU = UU.onFrameDrawn((() => {
          if (NU--, NU > 0) return;
          const {
            canvas: XU
          } = UU, zU = {
            width: XU.width,
            height: XU.height
          };
          try {
            XU.toBlob((UU => {
              UU ? cU({
                blob: UU,
                ...zU
              }) : EU(new Error("The canvas gave no image"))
            }), oU, DU)
          } catch (aU) {
            EU(aU)
          } finally {
            pU()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function oU(UU, XU, zU) {
      try {
        const yU = await FU(UU, XU, zU);
        (0, cU.c)(yU.blob, `bloxd-screenshot-${yU.width}x${yU.height}-${Date.now()}.png`)
      } catch (yU) {
        console.error("Error taking screenshot:", yU)
      }
    }
  },
  38437: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    const cU = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39871: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => NU,
      e: () => EU
    });
    var cU = zU(212),
      yU = zU(1896),
      QU = zU(1220),
      AU = zU(9493);
    const FU = [250, 500, 1e3, 2e3, 1250],
      oU = 406;

    function DU(UU) {
      if ("object" !== typeof UU || null === UU) return !1;
      const {
        code: XU,
        message: zU
      } = UU, yU = cU.e.duplicateLobbyNameError;
      return (XU === yU.code || XU === oU) && (zU === yU.text || zU === yU.text + cU.m)
    }
    async function EU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU.e;
      for (let yU = 0;; yU++) {
        let AU;
        (0, QU.l)(XU);
        try {
          return await UU()
        } catch (cU) {
          if (AU = FU[yU], void 0 === AU || !DU(cU)) throw cU
        }
        await zU(AU, XU)
      }
    }
    const YU = new Set([cU.e.duplicateLobbyNameError.code, cU.e.lobbyCantBeCreated.code, cU.e.roomDisposedEarlyError.code, cU.e.roomDisposedLateError.code, cU.e.serverRoomLimitReached.code]);

    function NU(UU) {
      if (DU(UU)) return !0;
      const XU = (0, AU.f)(UU);
      return "number" === typeof XU && YU.has(XU)
    }
  },
  40015: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(320),
      yU = zU(142),
      QU = zU(42);

    function AU() {
      QU.k.setItem(cU.Rb, QU.k.getItem(cU.Rb) + 1), (0, yU.is99NightsCrazyGamesBundle)() && QU.k.setItem(cU.Ob, QU.k.getItem(cU.Ob) + 1)
    }
  },
  37172: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => ZU,
      g: () => RU
    });
    var cU = zU(1079),
      yU = zU(220),
      QU = zU(337),
      AU = zU(654),
      FU = zU(344),
      oU = zU(1083),
      DU = zU(687),
      EU = zU(730),
      YU = zU(4959),
      NU = zU(97),
      IU = zU(142),
      pU = zU(1800),
      aU = zU(114),
      tU = zU(37181),
      gU = zU(42),
      kU = zU(702),
      GU = zU(661),
      BU = zU(37186);

    function ZU() {
      var UU, XU;
      return [...null !== (UU = navigator.languages) && void 0 !== UU ? UU : [null !== (XU = navigator.language) && void 0 !== XU ? XU : "none"], "en-Gb"]
    }

    function RU(UU, XU, zU, RU, PU) {
      const WU = (0, cU.l)(XU) ? (0, cU.p)(XU) : null,
        dU = UU.isLoggedIn() && void 0 !== (0, yU.b)(QU.l, IU.siteUsed) ? (0, GU.g)() : null,
        LU = {
          cookies: (0, pU.getAllCookiesForGameNameWithVariation)(XU),
          isMobile: (0, NU.isMobile)(),
          isUsingCustomGameTexturePack: null !== WU && PU(WU),
          generalCookies: {
            joinDiscord: !!gU.k.getItem("DiscordPressed"),
            newGo: YU.d,
            ...UU.getMetricsCookies(),
            trafficCode: RU,
            compliance: NU.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, NU.getBrowserName)(),
            version: (0, NU.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, NU.getPlatformType)(),
            deviceType: (0, aU.c)()
          },
          isLoggedIn: UU.isLoggedIn(),
          lobbyName: zU,
          languages: ZU(),
          version: AU.d,
          siteUsed: IU.siteUsed,
          subsiteUsed: IU.subsiteUsed,
          playSessionId: (0, tU.i)(XU),
          visitSessionId: (0, kU.g)(),
          clientReason: DU.s.reason,
          budgetBasis: (0, BU.h)(),
          ...null !== EU.m && {
            diagClaim: EU.m.claimId
          },
          ...null !== dU && {
            webGpuLoss: dU
          }
        };
      return null !== WU && (0, FU.Lc)(WU) ? (LU.lobbyName = (0, cU.h)(WU, (0, cU.n)(XU), zU), {
        roomName: `classic_${oU.d}`,
        joinOptions: LU
      }) : {
        roomName: XU,
        joinOptions: LU
      }
    }
  },
  39897: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => IU,
      d: () => NU
    });
    const cU = "ue:",
      yU = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      QU = "[A-Za-z0-9]{1,24}",
      AU = 15,
      FU = new RegExp(`^${QU}$`);
    new RegExp(`^${cU}(${[...yU,"other"].join("|")}):(?:n|k(${QU})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function oU(UU, XU, zU, QU, oU) {
      const DU = "string" === typeof UU && yU.includes(UU) ? UU : "other";
      let EU = "n";
      return "string" === typeof XU ? EU = FU.test(XU) ? `k${XU}` : "n" : "number" === typeof zU && Number.isInteger(zU) && zU >= 0 && zU <= AU && (EU = `b${zU}`), `${cU}${DU}:${EU}:${QU?1:0}${oU?1:0}`
    }
    var DU = zU(1715),
      EU = zU(1808);
    let YU = null;

    function NU(UU) {
      const XU = UU instanceof Element && UU !== document.body && UU !== document.documentElement && !(0, DU.t)(UU) && !UU.closest("#root");
      return {
        editable: (0, EU.e)(UU),
        outsideView: XU
      }
    }

    function IU(UU) {
      return YU ??= function(UU) {
        try {
          const {
            editable: XU,
            outsideView: zU
          } = NU(UU.target), cU = UU;
          return oU(UU.type, cU.code, cU.button, XU, zU)
        } catch {
          return oU(null, null, null, !1, !1)
        }
      }(UU), YU
    }
  },
  41725: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU
    });
    var cU = zU(40525),
      yU = zU(37535);

    function QU(UU) {
      return {
        current: () => UU,
        watch: () => () => {}
      }
    }

    function AU() {}
    const FU = Object.freeze([0, 0, 0]),
      oU = {
        states: {
          health: QU({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: QU({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: QU({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: QU({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: QU({}),
          creativeVisibility: QU({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: QU(null),
          heldItemAim: QU({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: QU(!1),
          gliderBoostFuel: QU(0),
          flight: QU({
            canFly: !1,
            flying: !1
          }),
          crafting: QU({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: QU({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: QU({}),
          fullInventory: QU(!1),
          crosshairTarget: QU({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: QU(!0),
          freeCamera: QU({
            allowed: !1,
            movesFly: !1
          }),
          replay: QU(null),
          replayEdits: QU(null),
          replayRecorder: QU(yU.e),
          replayVideoExporting: QU(!1)
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
          selectHotbarSlot: AU,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: AU,
          setInventoryOpen: AU,
          changeIronChestPasskey: AU,
          dragReplayCamera: AU,
          applyTemporaryThirdPerson: AU,
          holdEmoteWheel: AU,
          recordFlyingMiddleText: AU,
          focusCrafting: AU,
          craftRecipe: () => ({
            NA: 0,
            DE: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: AU,
          setShopOpen: AU,
          buyShopItem: AU,
          lobbyManage: AU,
          sendChatMessage: () => !1,
          ignorePlayer: AU,
          reportPlayer: AU,
          reportWorldCodeChat: AU,
          requestDiscordReportKey: AU,
          reportLobbyOrGame: AU,
          playEmote: AU,
          updateMyCosmetic: AU,
          writeOnBoard: AU,
          writeBook: AU,
          writeNameTag: AU,
          setCustomLobbyBlock: AU,
          openIronChest: AU,
          sendCodeCollab: AU,
          clickCodeBlock: AU,
          bindCustomButtonKeys: AU,
          pressCustomButton: AU,
          moveReplayFreecam: AU,
          holdReplayFreecamVertical: AU,
          respawn: AU,
          wakeUp: AU,
          requestLeaderboard: AU,
          completeTask: AU,
          setServerCookie: AU,
          answerUiRequest: AU,
          chooseRewardedAd: AU,
          setCameraZoom: AU,
          setFreeCameraMovesFly: AU,
          setBlockHighlight: AU,
          setCrosshairInteractPrompt: AU,
          setLookSensitivity: AU,
          replayAction: AU,
          setReplayPlaying: AU,
          seekReplay: AU,
          setReplayCameraMode: AU,
          syncReplayCameraMode: AU,
          setReplayCameraKeyframe: AU,
          moveReplayCameraKeyframe: AU,
          deleteReplayCameraKeyframes: AU,
          setReplayPlaybackMark: AU,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: AU,
          exportReplayVideo: AU,
          toggleRecording: AU,
          saveClip: AU,
          setRecorderPrefs: AU,
          setReplayViewerOpen: AU
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => cU.b,
          worldCodeAiGameState: () => cU.e
        },
        lookups: {
          localPos: () => FU,
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
  42073: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      h: () => QU
    });
    var cU = zU(2219),
      yU = zU(1079);

    function QU(UU, XU) {
      return null !== UU.gameSource && (0, cU.m)(XU, UU.gameSource)
    }

    function AU(UU, XU) {
      if (null === UU.gameSource || "" === UU.gameSource || null === XU) return !0;
      const zU = (0, yU.l)(XU) ? (0, yU.p)(XU) : null;
      return null !== zU && QU(UU, zU)
    }
  },
  42047: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(633),
      yU = zU(42053),
      QU = zU(41902);
    async function AU(UU) {
      const XU = await (0, yU.l)({
        Helmet: zU(38708),
        Chestplate: zU(38714),
        Gauntlets: zU(38728),
        Leggings: zU(38721),
        Boots: zU(38725)
      } [cU.d[UU]]);
      try {
        return (0, QU.m)(XU)
      } finally {
        XU.close()
      }
    }
    const FU = new class {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU.r;
        this.decode = UU, this.register = XU, this.decoded = new Map
      }
      warm() {
        for (let UU = 0; UU < cU.d.length; UU++) this.part(UU).catch((XU => {
          console.warn(`The grayscale armour ${cU.d[UU]} image didn't decode ahead of use`, XU)
        }))
      }
      async load(UU, XU) {
        const {
          width: zU,
          height: QU,
          pixels: AU
        } = await this.part(UU), FU = new ImageData(function(UU, XU) {
          const zU = new Uint8ClampedArray(UU.length);
          for (let cU = 0; cU < UU.length; cU += 4) zU[cU] = Math.round(UU[cU] * XU[0] / 255), zU[cU + 1] = Math.round(UU[cU + 1] * XU[1] / 255), zU[cU + 2] = Math.round(UU[cU + 2] * XU[2] / 255), zU[cU + 3] = UU[cU + 3];
          return zU
        }(AU, function(UU) {
          return [UU >>> 16 & 255, UU >>> 8 & 255, 255 & UU]
        }(XU)), zU, QU);
        let oU;
        try {
          oU = await createImageBitmap(FU, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (DU) {
          throw new yU.e("decode", `grayscale armour ${cU.d[UU]}`, {
            cause: DU
          })
        }
        return {
          id: this.register(oU),
          width: zU,
          height: QU
        }
      }
      part(UU) {
        const XU = this.decoded.get(UU);
        if (void 0 !== XU) return XU;
        const zU = this.decode(UU).catch((XU => {
          throw this.decoded.delete(UU), XU instanceof yU.e ? XU : new yU.e("decode", `grayscale armour ${cU.d[UU]}`, {
            cause: XU
          })
        }));
        return this.decoded.set(UU, zU), zU
      }
    }
  },
  42038: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => tU,
      k: () => EU,
      n: () => YU,
      p: () => aU
    });
    var cU = zU(41886),
      yU = zU(42047),
      QU = zU(42053);
    const AU = 396,
      FU = 1,
      oU = 2,
      DU = 3,
      EU = {
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
      YU = {
        File: 0,
        Item: 1
      },
      NU = 0,
      IU = 1,
      pU = 2;

    function aU(UU) {
      const XU = (0, cU.n)();
      XU.catch((() => {}));
      let yU = null;
      return {
        glbUrl: UU,
        lifeformAtlasUrl: async UU => (await XU).lifeformAtlasUrl(UU),
        armourAtlasUrl: async () => (await zU.e(222).then((() => zU(34975)))).armourAtlasUrl,
        capeUrl: async UU => (await XU).capeUrl(UU),
        attachmentImageUrl: async UU => (await XU).attachmentImageUrl(UU),
        blockImageUrl: async UU => (await XU).blockImageUrl(UU),
        groupAtlasUrl: async UU => (await XU).groupAtlasUrl(UU),
        particleTextureUrl: async UU => (await XU).particleTextureUrl(UU),
        particleItemUrl: async UU => (yU ??= zU.e(44).then((() => zU(53836))).catch((UU => {
          throw yU = null, UU
        })), (await yU).particleItemUrl(UU))
      }
    }
    class tU {
      constructor(UU, XU) {
        var zU, AU, FU, oU;
        let DU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = UU, this.onFailure = XU, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.kp = !1, this.load = null !== (zU = DU.load) && void 0 !== zU ? zU : (UU, XU) => (0, QU.n)(UU, DU.fetchImage, XU), this.release = null !== (AU = DU.release) && void 0 !== AU ? AU : QU.v, this.fetchFile = null !== (FU = DU.fetchFile) && void 0 !== FU ? FU : UU => (0, cU.f)(UU), this.greyscaleArmour = null !== (oU = DU.greyscaleArmour) && void 0 !== oU ? oU : yU.d
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(UU, XU) {
        this.glbWrittenImages.set(UU, PU(XU))
      }
      glbTaken(UU, XU) {
        const zU = this.glbWrittenImages.get(UU);
        this.glbWrittenImages.delete(UU), XU && this.setGlbImages(UU, void 0 !== zU && zU.length > 0 ? zU : void 0)
      }
      setGlbImages(UU, XU) {
        var zU;
        this.glbTakenCount.set(UU, (null !== (zU = this.glbTakenCount.get(UU)) && void 0 !== zU ? zU : 0) + 1), void 0 === XU ? this.glbImages.delete(UU) : this.glbImages.set(UU, XU);
        const cU = [];
        for (const {
            key: yU
          }
          of this.loading.values()) yU.kind === EU.Glb && yU.word === UU && cU.push(yU);
        for (let yU = this.ready.length - 1; yU >= 0; yU--) {
          const {
            key: XU,
            id: zU
          } = this.ready[yU];
          XU.kind === EU.Glb && XU.word === UU && (this.ready.splice(yU, 1), null !== zU && (this.answered.delete(zU), this.release(zU)), cU.push(XU))
        }
        this.loadAgain(cU)
      }
      onEvent(UU) {
        if (this.kp) return;
        const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
        for (let zU = 0; zU + 8 <= UU.byteLength; zU += 8) {
          const UU = XU.getUint8(zU),
            cU = XU.getUint32(zU + 4, !0);
          if (UU === DU) {
            this.answered.delete(cU), this.release(cU);
            continue
          }
          const yU = {
            kind: XU.getUint8(zU + 1),
            index: XU.getUint8(zU + 2),
            word: cU
          };
          UU === FU ? this.want(yU) : UU === oU && this.loading.delete(gU(yU))
        }
      }
      reload(UU, XU) {
        const zU = zU => UU.includes(zU.kind) && (void 0 === XU || XU(zU)),
          cU = new Map;
        for (const yU of this.answered.values()) zU(yU) && cU.set(gU(yU), yU);
        for (const [yU, {
            key: QU
          }] of this.loading) zU(QU) && cU.set(yU, QU);
        this.loadAgain(cU.values())
      }
      loadAgain(UU) {
        for (const XU of UU) this.loading.delete(gU(XU)), this.want(XU)
      }
      drain(UU) {
        if (null !== UU)
          for (; this.ready.length > 0;) {
            if (!UU(AU, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.kp = !0, this.loading.clear(), this.ready.length = 0;
        for (const UU of this.answered.keys()) this.release(UU);
        this.answered.clear()
      }
      want(UU) {
        const XU = gU(UU);
        if (this.loading.has(XU)) return;
        const zU = {
          key: UU
        };
        this.loading.set(XU, zU), this.loadKey(UU).then((cU => {
          this.kp || this.loading.get(XU) !== zU ? this.release(cU.id) : (this.loading.delete(XU), this.answered.set(cU.id, UU), this.ready.push({
            record: GU(UU, NU, cU),
            key: UU,
            id: cU.id
          }))
        }), (cU => {
          if (this.kp || this.loading.get(XU) !== zU) return;
          this.loading.delete(XU), this.onFailure({
            key: UU,
            error: cU
          });
          const yU = cU instanceof QU.e && "decode" === cU.stage ? IU : pU;
          this.ready.push({
            record: GU(UU, yU, null),
            key: UU,
            id: null
          })
        }))
      }
      async loadKey(UU) {
        switch (UU.kind) {
          case EU.Glb:
            return this.load(await this.glbImage(UU), "none");
          case EU.LifeformAtlas:
            return this.load(kU(await this.sources.lifeformAtlasUrl(UU.word), UU), "none");
          case EU.ArmourAtlas:
            return this.load(kU(await this.sources.armourAtlasUrl(), UU), "none");
          case EU.Cape:
            return this.load(kU(await this.sources.capeUrl(UU.word), UU), "none");
          case EU.AttachmentImage:
            return this.load(kU(await this.sources.attachmentImageUrl(UU.word), UU), "none");
          case EU.GroupAtlas:
            return this.load(kU(await this.sources.groupAtlasUrl(UU.word), UU), "none");
          case EU.BlockImage:
            return this.load(kU(await this.sources.blockImageUrl(UU.word), UU), "none");
          case EU.Particle: {
            const XU = await (UU.index === YU.Item ? this.sources.particleItemUrl(UU.word) : this.sources.particleTextureUrl(UU.word));
            return this.load(kU(XU, UU), "flipY")
          }
          case EU.GreyscaleArmour:
            return this.greyscaleArmour.load(UU.index, UU.word);
          default:
            throw new QU.e("fetch", `image kind ${UU.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(UU) {
        var XU;
        let zU = this.glbImages.get(UU.word);
        if (void 0 === zU) {
          const XU = this.glbTakenCount.get(UU.word),
            cU = kU(await this.sources.glbUrl(UU.word), UU);
          try {
            zU = PU(await this.fetchFile(cU))
          } catch (yU) {
            throw new QU.e("fetch", cU, {
              cause: yU
            })
          }
          this.glbTakenCount.get(UU.word) === XU && this.glbImages.set(UU.word, zU)
        }
        const cU = null === (XU = zU) || void 0 === XU ? void 0 : XU[UU.index];
        if (!cU) throw new QU.e("decode", `image ${UU.index} of file ${2147483647&UU.word}`, {
          cause: null
        });
        return cU
      }
    }

    function gU(UU) {
      let {
        kind: XU,
        index: zU,
        word: cU
      } = UU;
      return `${XU}:${zU}:${cU}`
    }

    function kU(UU, XU) {
      if (null === UU) throw new QU.e("fetch", `no URL for image ${gU(XU)}`, {
        cause: null
      });
      return UU
    }

    function GU(UU, XU, zU) {
      var cU, yU, QU;
      const AU = new Uint8Array(16),
        FU = new DataView(AU.buffer);
      return FU.setUint8(0, UU.kind), FU.setUint8(1, UU.index), FU.setUint8(2, XU), FU.setUint32(4, UU.word, !0), FU.setUint32(8, null !== (cU = null === zU || void 0 === zU ? void 0 : zU.id) && void 0 !== cU ? cU : 0, !0), FU.setUint16(12, Math.min(null !== (yU = null === zU || void 0 === zU ? void 0 : zU.width) && void 0 !== yU ? yU : 0, 65535), !0), FU.setUint16(14, Math.min(null !== (QU = null === zU || void 0 === zU ? void 0 : zU.height) && void 0 !== QU ? QU : 0, 65535), !0), AU
    }
    const BU = 1179937895,
      ZU = 1313821514,
      RU = 5130562;

    function PU(UU) {
      var XU;
      const zU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      if (UU.byteLength < 20 || zU.getUint32(0, !0) !== BU || zU.getUint32(16, !0) !== ZU) return [];
      let cU, yU = 20 + zU.getUint32(12, !0);
      try {
        cU = JSON.parse((new TextDecoder).decode(UU.subarray(20, yU)))
      } catch {
        return []
      }
      for (; yU + 8 <= UU.byteLength && zU.getUint32(yU + 4, !0) !== RU;) yU += 8 + zU.getUint32(yU, !0);
      const QU = null !== (XU = cU.images) && void 0 !== XU ? XU : [];
      if (0 === QU.length || yU + 8 > UU.byteLength) return QU.map((() => null));
      const AU = UU.subarray(yU + 8, Math.min(UU.byteLength, yU + 8 + zU.getUint32(yU, !0)));
      return QU.map((UU => {
        var XU, zU, yU;
        const QU = void 0 === UU.bufferView || null === (XU = cU.bufferViews) || void 0 === XU ? void 0 : XU[UU.bufferView];
        if (!QU || 0 !== (null !== (zU = QU.buffer) && void 0 !== zU ? zU : 0) || void 0 === QU.byteLength) return null;
        const FU = null !== (yU = QU.byteOffset) && void 0 !== yU ? yU : 0,
          oU = FU + QU.byteLength;
        return oU <= AU.byteLength ? AU.slice(FU, oU) : null
      }))
    }
  },
  41727: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => QU,
      f: () => yU
    });
    let cU = null;

    function yU(UU) {
      cU = UU
    }

    function QU(UU) {
      cU === UU && (cU = null)
    }

    function AU() {
      var UU;
      null === (UU = cU) || void 0 === UU || UU()
    }
  },
  37303: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      g: () => NU,
      j: () => gU,
      l: () => DU
    });
    var cU = zU(27),
      yU = zU(2580),
      QU = zU(2588),
      AU = zU(2591),
      FU = zU(2668),
      oU = zU(31);

    function DU(UU, XU) {
      return (!(0, AU.b)() || 0 === UU && 0 === XU) && (0, QU.C)(yU.j.Joystick, 0, UU, XU, 0)
    }
    const EU = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function YU(UU) {
      return UU.classList.contains("TouchKeyHit") && IU() ? null : UU.firstElementChild
    }

    function NU(UU) {
      return UU.classList.contains("TouchKeyHit") && !UU.classList.contains("CanvasZone") ? {
        whole: !IU(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: pU(YU(UU))
      }
    }

    function IU() {
      return document.documentElement.classList.contains(FU.o)
    }

    function pU(UU) {
      return !(UU instanceof HTMLElement) || UU.offsetWidth <= 0 || UU.offsetHeight <= 0 ? null : {
        width: UU.offsetWidth,
        height: UU.offsetHeight
      }
    }

    function aU(UU, XU) {
      const zU = UU => Math.min(65535, Math.round(4 * UU));
      return (zU(UU) | zU(XU) << 16) >>> 0
    }

    function tU(UU) {
      return {
        x: UU.left + UU.width / 2,
        y: UU.top + UU.height / 2,
        radius: Math.min(UU.width, UU.height) / 2
      }
    }
    const gU = new class {
      constructor(UU) {
        this.write = UU, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        XU ? this.elements.set(UU, {
          element: XU,
          hidden: zU
        }) : this.elements.delete(UU), this.measureOne(UU)
      }
      measure() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = UU.left, this.canvasTop = UU.top;
        for (const XU of this.elements.keys()) this.measureOne(XU)
      }
      hitZone(UU, XU) {
        let zU = null,
          cU = 1;
        for (const yU of this.elements.keys()) {
          const QU = this.shown(yU);
          if (!QU) continue;
          const {
            rect: AU,
            element: FU
          } = QU, oU = tU(AU), DU = Math.max(0, AU.width / 2 - oU.radius), EU = Math.max(0, AU.height / 2 - oU.radius), NU = Math.max(0, Math.abs(UU - oU.x) - DU), IU = Math.max(0, Math.abs(XU - oU.y) - EU), aU = FU.firstElementChild;
          let gU = Math.hypot(NU, IU) / oU.radius;
          const kU = pU(YU(FU));
          kU && (gU = Math.min(gU, Math.max(2 * Math.abs(UU - oU.x) / kU.width, 2 * Math.abs(XU - oU.y) / kU.height))), gU < cU && (zU = {
            code: yU,
            element: FU,
            key: aU,
            ...oU
          }, cU = gU)
        }
        return zU
      }
      measureOne(UU) {
        const XU = this.shown(UU);
        if (!XU) return void this.write(yU.j.TouchZone, UU, 0, 0, 0);
        const {
          rect: zU,
          element: cU
        } = XU, QU = tU(zU);
        this.write(yU.j.TouchZone, UU, QU.x - this.canvasLeft, QU.y - this.canvasTop, aU(zU.width, zU.height));
        const AU = pU(YU(cU));
        this.write(yU.j.TouchZone, 256 | UU, 0, 0, AU ? aU(AU.width, AU.height) : 0)
      }
      shown(UU) {
        const XU = this.elements.get(UU),
          zU = cU.e.get("worldPanelHud");
        if (!XU || XU.hidden || "none" === zU) return null;
        const yU = XU.element.getBoundingClientRect();
        return yU.width <= 0 || yU.height <= 0 ? null : {
          rect: yU,
          element: XU.element
        }
      }
    }(QU.C);
    (0, oU.n)(FU.h, (() => {
      gU.measure()
    }))
  },
  41778: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU,
      f: () => DU
    });
    var cU = zU(41933),
      yU = zU(39874),
      QU = zU(37172),
      AU = zU(41786),
      FU = zU(41750);
    const oU = cU.b.timeForPlayerToConnect - 1e4;
    async function DU(UU, XU, zU, cU) {
      let oU;
      try {
        oU = await UU.getTrafficCode()
      } catch (pU) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", pU), new FU.s(pU)
      }
      const {
        gameNameWithVariation: DU,
        lobbyName: EU
      } = XU, YU = () => {
        const XU = (0, QU.g)(UU, DU, EU, oU, (UU => {
          var XU;
          return null !== (XU = null === zU || void 0 === zU ? void 0 : zU.isUsingCustomGameTexturePack(UU)) && void 0 !== XU && XU
        }));
        XU.joinOptions.wasmClient = !0;
        const yU = (0, AU.B)();
        return null !== yU && (XU.joinOptions.renderBackend = yU), XU.joinOptions.joinAdHold = cU, XU
      }, {
        roomName: NU,
        joinOptions: IU
      } = YU();
      return {
        endpoint: XU.endpoint,
        roomName: NU,
        joinOptions: IU,
        session: {
          gameNameWithVariation: DU,
          lobbyName: EU,
          playerDbId: UU.whamm
        },
        optionsAfterRefusal: async XU => await (0, yU.e)(UU, XU) ? YU().joinOptions : null
      }
    }
  },
  42068: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => EU,
      d: () => QU,
      e: () => YU,
      f: () => AU
    });
    var cU = zU(42038),
      yU = zU(41886);
    const QU = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(UU) {
        this.change((() => {
          this.page = UU
        }))
      }
      setSessionFiles(UU) {
        const XU = void 0 !== this.session && void 0 === UU;
        if (this.change((() => {
            this.session = UU
          })), XU)
          for (const zU of [...this.pageListeners]) zU()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(UU) {
        return this.pageListeners.add(UU), () => {
          this.pageListeners.delete(UU)
        }
      }
      setFollower(UU) {
        this.follower = UU, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const UU of [...this.wantedListeners]) UU();
        this.startFollower()
      }
      onWanted(UU) {
        return this.wantedListeners.add(UU), () => {
          this.wantedListeners.delete(UU)
        }
      }
      onChange(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      startFollower() {
        const UU = this.follower;
        this.isWanted && null !== UU && (this.follower = null, UU((() => {
          this.follower = UU
        })))
      }
      change(UU) {
        const XU = this.current;
        if (UU(), this.current !== XU)
          for (const zU of this.listeners) zU()
      }
    };

    function AU(UU, XU) {
      return {
        ...UU,
        armourAtlasUrl: () => {
          var zU, cU;
          return null !== (zU = null === (cU = XU()) || void 0 === cU ? void 0 : cU.armourAtlasUrl()) && void 0 !== zU ? zU : UU.armourAtlasUrl()
        },
        lifeformAtlasUrl: zU => oU(XU(), (UU => UU.LIFEFORM_ATLAS_PATHS[zU]), (() => UU.lifeformAtlasUrl(zU))),
        groupAtlasUrl: zU => oU(XU(), (UU => UU.GROUP_ATLAS_PATHS[zU]), (() => UU.groupAtlasUrl(zU))),
        particleItemUrl: cU => DU(XU(), (async () => {
          const UU = await zU.e(44).then((() => zU(53836))).catch((() => null));
          return (null === UU || void 0 === UU ? void 0 : UU.particleItemSprite(cU)) || null
        }), (() => UU.particleItemUrl(cU))),
        blockImageUrl: zU => DU(XU(), (async () => {
          var UU, XU;
          return null !== (UU = null === (XU = await FU()) || void 0 === XU ? void 0 : XU.blockImageName(zU)) && void 0 !== UU ? UU : null
        }), (() => UU.blockImageUrl(zU)))
      }
    }

    function FU() {
      return (0, yU.n)().catch((() => null))
    }

    function oU(UU, XU, zU) {
      return DU(UU, (async () => {
        var UU;
        const zU = await FU(),
          cU = null === zU ? null : XU(zU),
          yU = null !== (UU = null === cU || void 0 === cU ? void 0 : cU.slice(cU.lastIndexOf("/") + 1)) && void 0 !== UU ? UU : null;
        return "Player_Atlas" === yU ? null : yU
      }), zU)
    }
    async function DU(UU, XU, zU) {
      if (null !== UU) {
        const zU = await XU(),
          cU = null === zU ? null : UU.textureUrl(zU);
        if (null !== cU) return cU
      }
      return zU()
    }
    const EU = 0;

    function YU(UU) {
      const XU = [cU.k.ArmourAtlas, cU.k.LifeformAtlas, cU.k.GroupAtlas, cU.k.BlockImage, cU.k.Particle];
      UU.reload(XU, (UU => {
        switch (UU.kind) {
          case cU.k.Particle:
            return UU.index === cU.n.Item;
          case cU.k.LifeformAtlas:
            return UU.word !== EU;
          default:
            return !0
        }
      }))
    }
  },
  41938: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      f: () => FU,
      j: () => AU,
      l: () => yU,
      n: () => QU
    });
    const cU = 1e3;

    function yU() {
      oU((() => {
        window.location.reload()
      }))
    }

    function QU() {
      return new Promise((() => {}))
    }

    function AU(UU) {
      oU((() => {
        window.location.replace(UU(window.location.href))
      }))
    }

    function FU(UU) {
      Promise.resolve().then((() => zU(111))).then((XU => {
        let {
          currentUrl: zU
        } = XU;
        AU((() => zU.mergeSearchParamsInto(UU)))
      }), (() => {
        AU((() => UU))
      }))
    }

    function oU(UU) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => zU(1800))).then((XU => {
        let {
          prepareForUnloadWithoutConfirmation: zU
        } = XU;
        try {
          zU()
        } catch (cU) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", cU), window.onbeforeunload = null
        }
        UU()
      }), (() => {
        window.onbeforeunload = null, UU()
      })) : UU()
    }
  },
  5629: (UU, XU, zU) => {
    function cU(UU, XU) {
      return yU(UU, XU)
    }

    function yU(UU, XU) {
      if (UU === XU) return !0;
      if ("object" !== typeof UU || "object" !== typeof XU || null === UU || null === XU || Array.isArray(UU) !== Array.isArray(XU)) return !1;
      const zU = UU,
        cU = XU,
        QU = Object.keys(zU);
      return QU.length === Object.keys(cU).length && QU.every((UU => Object.prototype.hasOwnProperty.call(cU, UU) && yU(zU[UU], cU[UU])))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  42004: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => RU,
      d: () => BU,
      f: () => aU,
      j: () => pU
    });
    var cU = zU(1896),
      yU = zU(1220),
      QU = zU(39871),
      AU = zU(37201),
      FU = zU(39882),
      oU = zU(41750);
    const DU = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      EU = 3,
      YU = [500, 1500];

    function NU(UU) {
      const XU = new URL(UU);
      return {
        secure: "https:" === XU.protocol || "wss:" === XU.protocol,
        host: XU.host,
        pathname: XU.pathname.replace(/\/+$/, ""),
        search: XU.searchParams.toString()
      }
    }

    function IU(UU, XU, zU) {
      const {
        secure: cU,
        host: yU,
        pathname: QU,
        search: AU
      } = NU(UU);
      return `${cU?"https":"http"}://${yU}${QU}/matchmake/${XU}/${encodeURIComponent(zU)}${AU?`?${AU}`:""}`
    }

    function pU(UU, XU) {
      var zU;
      const cU = null !== (zU = XU.protocol) && void 0 !== zU ? zU : "ws";
      if ("ws" !== cU) throw new Error(`seat reservation asks for the ${cU} transport`);
      const {
        secure: yU,
        host: QU,
        pathname: AU,
        search: FU
      } = NU(UU), oU = new URLSearchParams(FU);
      oU.append("sessionId", XU.sessionId), XU.reconnectionToken && oU.append("reconnectionToken", XU.reconnectionToken);
      return `${yU?"wss":"ws"}://${XU.room.publicAddress||`${QU}${AU}`}/${XU.room.processId}/${XU.room.roomId}?${oU.toString()}`
    }
    async function aU(UU, XU, zU) {
      var FU;
      let DU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const NU = null !== (FU = DU.sleep) && void 0 !== FU ? FU : cU.e,
        pU = new yU.d(DU.signal),
        aU = new AU.b((() => {
          (0, yU.h)(pU.controller, new AU.c("seat"))
        })),
        {
          signal: GU
        } = pU;
      try {
        const cU = await (0, QU.e)((() => async function(UU, XU, zU, cU) {
          var QU;
          const {
            signal: AU,
            sleep: FU
          } = cU, DU = IU(UU, "joinOrCreate", XU), NU = JSON.stringify(zU);
          let pU = null;
          for (let IU = 0; IU < EU; IU++) {
            var aU;
            if (IU > 0) await FU(null !== (aU = YU[IU - 1]) && void 0 !== aU ? aU : 1500, AU);
            let UU;
            (0, yU.l)(AU);
            try {
              UU = await gU(DU, NU, cU)
            } catch (GU) {
              (0, yU.l)(AU), pU = tU(GU);
              continue
            }
            const {
              response: XU,
              answer: zU,
              refusal: QU,
              lost: EU
            } = UU;
            if (null === EU) {
              if (null !== QU) throw kU(QU, zU);
              if (XU.ok && null !== zU && PU(zU)) return zU;
              pU = new oU.r(`seat request answered HTTP ${XU.status}${null===zU?" without JSON":" without a seat"}`, !1, void 0, XU.status)
            } else pU = tU(EU.error)
          }
          throw null !== (QU = pU) && void 0 !== QU ? QU : new oU.r("seat request made no attempt", !1)
        }(UU, XU, zU, {
          ...DU,
          signal: GU,
          sleep: NU
        })), GU, NU);
        return aU.answered(), cU
      } finally {
        aU.stop(), pU.unfollow()
      }
    }

    function tU(UU) {
      return new oU.r(UU instanceof Error ? UU.message : String(UU), !0, UU)
    }
    async function gU(UU, XU, zU) {
      var cU;
      const {
        signal: QU
      } = zU, AU = null !== (cU = zU.fetch) && void 0 !== cU ? cU : fetch, FU = await AU(UU, {
        method: "POST",
        headers: {
          ...DU,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: XU,
        credentials: "include",
        signal: QU
      }), {
        answer: oU,
        lost: EU
      } = await async function(UU) {
        try {
          const XU = await UU.json();
          return {
            answer: "object" === typeof XU && null !== XU ? XU : null,
            lost: null
          }
        } catch (XU) {
          return {
            answer: null,
            lost: XU instanceof SyntaxError ? null : {
              error: XU
            }
          }
        }
      }(FU), YU = null !== oU && "string" === typeof oU.error ? oU.error : null;
      var NU;
      null !== YU && (null === (NU = zU.onRefusal) || void 0 === NU || NU.call(zU));
      return (0, yU.l)(QU), {
        response: FU,
        answer: oU,
        refusal: YU,
        lost: EU
      }
    }

    function kU(UU, XU) {
      return new oU.m(UU, "number" === typeof(null === XU || void 0 === XU ? void 0 : XU.code) ? XU.code : 0, (0, FU.r)(UU).text)
    }
    class GU extends Error {
      constructor(UU, XU) {
        super(UU), this.code = XU, this.name = "SeatHttpError"
      }
    }
    async function BU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: yU,
        answer: QU,
        refusal: AU,
        lost: FU
      } = await gU(IU(UU, "reconnect", XU), JSON.stringify({
        reconnectionToken: zU
      }), cU);
      if (null !== FU) throw FU.error;
      if (!yU.ok) {
        const UU = null !== QU && "number" === typeof QU.code && 0 !== QU.code ? QU.code : yU.status;
        throw new GU(`the seat's reconnect was refused: ${null!==AU&&void 0!==AU?AU:`HTTP ${yU.status}`}`, UU)
      }
      if (null !== AU) throw kU(AU, QU);
      if (null === QU || !PU(QU)) throw new Error("the seat's reconnect answered " + (null === QU ? "without JSON" : "without a seat"));
      return {
        ...QU,
        reconnectionToken: zU
      }
    }
    const ZU = 10;

    function RU(UU) {
      if (UU.byteLength < 2 || UU[0] !== ZU) return null;
      const XU = 2 + UU[1];
      return XU > UU.byteLength ? null : (new TextDecoder).decode(UU.subarray(2, XU))
    }

    function PU(UU) {
      const XU = UU.room;
      return "string" === typeof UU.sessionId && "object" === typeof XU && null !== XU && "string" === typeof XU.roomId && "string" === typeof XU.processId && "string" === typeof XU.name
    }
  },
  41667: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => GU,
      A: () => PU,
      B: () => wU,
      D: () => BU,
      G: () => ZU,
      J: () => tU,
      N: () => LU,
      Q: () => OU,
      U: () => pU,
      V: () => rU,
      W: () => kU,
      Y: () => gU,
      b: () => yU,
      c: () => SU,
      db: () => RU,
      e: () => qU,
      i: () => IU,
      m: () => aU,
      o: () => CU,
      r: () => WU,
      v: () => eU,
      y: () => dU
    });
    var cU = zU(3318);
    const yU = {
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

    function QU(UU, XU) {
      return !ArrayBuffer.isView(UU) || UU instanceof DataView ? Array.isArray(UU) ? UU.map((UU => XU(UU))) : UU : Array.from(UU, (UU => XU(UU)))
    }

    function AU(UU) {
      if ("string" !== typeof UU) return UU;
      for (let XU = 0; XU < UU.length; XU++) {
        const zU = UU.charCodeAt(XU);
        if (zU >= 55296 && zU <= 57343) return oU.decode(FU.encode(UU))
      }
      return UU
    }
    const FU = new TextEncoder,
      oU = new TextDecoder;

    function DU(UU) {
      return UU
    }
    let EU;

    function YU(UU) {
      return null === UU || "object" !== typeof UU ? UU : [AU(UU.policy), AU(UU.ZD)]
    }

    function NU(UU) {
      return null === UU || "object" !== typeof UU ? UU : [QU(UU.jU, DU), QU(UU.uA, DU)]
    }

    function IU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.TE), AU(XU.hE)];
      var XU
    }

    function pU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.id, XU.KD];
      var XU
    }

    function aU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.Ey, AU(XU.Yy), XU.Ny, AU(XU.ty), XU.By, XU.Zy, XU.zD, AU(XU.cD), AU(XU.yD)];
      var XU
    }

    function tU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.cF, DU), XU.yF];
      var XU
    }

    function gU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.ED, (UU => AU(UU))), AU(XU.YD), XU.ND];
      var XU
    }

    function kU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.tD, DU), AU(XU.gD), XU.kD];
      var XU
    }

    function GU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.FU), AU(XU.oU)];
      var XU
    }

    function BU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.GA)];
      var XU
    }

    function ZU(UU) {
      return AU(UU)
    }

    function RU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.GD), AU(XU.BD), AU(XU.policy), AU(XU.ZD)];
      var XU
    }

    function PU(UU) {
      return YU(UU)
    }

    function WU(UU) {
      return YU(UU)
    }

    function dU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.bD)];
      var XU
    }

    function LU(UU) {
      return UU
    }

    function eU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.pA), AU(XU.aA)];
      var XU
    }

    function CU(UU) {
      return AU(UU)
    }

    function wU(UU) {
      return NU(UU)
    }

    function qU(UU) {
      return NU(UU)
    }

    function OU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.xD)];
      var XU
    }

    function SU(UU) {
      return (EU ??= (0, cU.d)().map((UU => UU.name)), EU).map((XU => {
        return "string" === typeof(zU = UU[XU]) ? AU(zU) : QU(zU, DU);
        var zU
      }))
    }

    function rU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.iA, XU.HA, XU.MA];
      var XU
    }
  },
  42070: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU
    });
    var cU = zU(42073),
      yU = zU(42068);
    const QU = new class {
      constructor(UU) {
        this.pack = UU, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, UU.onWanted((() => {
          this.release()
        }))
      }
      setGame(UU) {
        if (void 0 === UU && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const XU = this.inGame();
        if (this.game = UU, this.update(), this.inGame() !== XU)
          for (const zU of this.gameListeners) zU()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(UU) {
        return this.gameListeners.add(UU), () => {
          this.gameListeners.delete(UU)
        }
      }
      unwantedLeave(UU) {
        UU && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(UU) {
        null !== UU && UU === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const UU = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, UU && this.setGame(void 0)
      }
      setSettled(UU) {
        this.settle = UU, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, cU.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(yU.d)
  },
  5621: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => FU
    });
    var cU = zU(2219),
      yU = zU(5629);
    let QU = null;

    function AU(UU) {
      QU = {
        pack: UU.metaData.id === cU.b ? null : UU
      }
    }

    function FU(UU) {
      return !(null === QU || !(0, yU.d)(QU.pack, UU)) && (QU = null, !0)
    }
  },
  41736: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      followPageUiPack: () => DY,
      packForGame: () => oY,
      playWasmGame: () => ZY,
      prefetchWasmPreviews: () => XD,
      setGamePackConfirm: () => gE,
      startWasmPlay: () => pY,
      startWasmPreviews: () => UD
    });
    var cU = zU(212),
      yU = zU(1262),
      QU = zU(173),
      AU = zU(39900),
      FU = zU(2005),
      oU = zU(31),
      DU = zU(5161),
      EU = zU(1349),
      YU = zU(1769),
      NU = zU(1360),
      IU = zU(40110),
      pU = zU(1322),
      aU = zU(195),
      tU = zU(3198),
      gU = zU(1889),
      kU = zU(3239);
    let GU = null,
      BU = null,
      ZU = null,
      RU = !1,
      PU = "previews",
      WU = null,
      dU = !1,
      LU = 0;

    function eU(UU) {
      PU = UU
    }

    function CU(UU) {
      var XU;
      const zU = UU instanceof Error ? UU.name : null;
      return null !== (XU = aU.b.find((UU => UU === zU))) && void 0 !== XU ? XU : "other"
    }

    function wU() {
      GU ??= performance.now()
    }

    function qU(UU) {
      BU ??= performance.now(), WU = UU, LU > 0 && OU()
    }

    function OU() {
      null !== BU && null !== WU && (0, pU.n)("wasm_loaded", BU, `${WU}:${(0,tU.m)()}`)
    }
    const SU = {
      ready: () => {
        gU.c.markAdmissionAwaited()
      },
      adEnded: () => {
        gU.c.markJoinAdEnded()
      },
      admitted: () => {
        gU.c.markAdmitted()
      }
    };
    var rU = zU(40124),
      uU = zU(40015),
      fU = zU(37181),
      iU = zU(1545),
      HU = zU(39871),
      MU = zU(9493),
      vU = zU(37201),
      VU = zU(41742),
      sU = zU(5312),
      nU = zU(41660),
      mU = zU(41725),
      lU = zU(41667);
    const xU = {
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

    function JU(UU) {
      const XU = {
        ...mU.b[UU]
      };
      for (const zU of Object.keys(xU[UU])) delete XU[zU];
      return XU
    }

    function jU() {
      var UU, XU;
      return null === (UU = null === (XU = (0, nU.f)()) || void 0 === XU ? void 0 : XU.localPlayerAlive()) || void 0 === UU || UU
    }

    function KU() {
      var UU, XU;
      return null !== (UU = null === (XU = (0, nU.f)()) || void 0 === XU ? void 0 : XU.localDeaths()) && void 0 !== UU ? UU : null
    }
    const bU = {
        current: jU,
        watch: UU => {
          let XU = jU(),
            zU = KU();
          return (0, sU.t)((() => {
            const cU = jU(),
              yU = KU(),
              QU = null !== yU && null !== zU && yU !== zU;
            zU = yU, QU ? (XU || UU(!0), UU(!1), cU && UU(!0), XU = cU) : cU !== XU && (XU = cU, UU(cU))
          }))
        }
      },
      TU = {
        states: {
          ...JU("states"),
          localPlayerAlive: bU
        },
        events: {
          ...JU("events"),
          localPlayerAliveSet: {
            watch: bU.watch
          }
        },
        commands: {
          ...JU("commands"),
          respawn: () => {
            var UU;
            null === (UU = (0, nU.f)()) || void 0 === UU || UU.respawn()
          },
          playEmote: UU => {
            var XU;
            null === (XU = (0, nU.f)()) || void 0 === XU || XU.send(lU.b.PlayEmote, (0, lU.D)({
              GA: UU
            }))
          },
          applyTemporaryThirdPerson: UU => {
            var XU;
            let {
              durationMs: zU
            } = UU;
            null === (XU = (0, nU.f)()) || void 0 === XU || XU.thirdPersonFor(zU)
          },
          bindCustomButtonKeys: UU => {
            var XU;
            null === (XU = (0, nU.f)()) || void 0 === XU || XU.bindCustomButtonKeys(UU)
          },
          pressCustomButton: UU => {
            var XU;
            let {
              id: zU,
              down: cU
            } = UU;
            null === (XU = (0, nU.f)()) || void 0 === XU || XU.pressCustomButton(zU, cU)
          },
          setLookSensitivity: () => {},
          wakeUp: UU => {
            const XU = (0, lU.Q)({
                xD: UU
              }),
              zU = () => {
                const UU = (0, nU.f)();
                return !(null !== UU && void 0 !== UU && UU.isSessionLive) || UU.send(lU.b.StopSleeping, XU)
              };
            if (!zU()) {
              const UU = (0, sU.t)((() => {
                zU() && UU()
              }))
            }
          },
          setCameraZoom: UU => {
            var XU;
            null === (XU = (0, nU.f)()) || void 0 === XU || XU.setCameraZoom(UU)
          }
        },
        queries: JU("queries"),
        lookups: {
          ...JU("lookups"),
          cameraZoom: () => {
            var UU, XU;
            return null !== (UU = null === (XU = (0, nU.f)()) || void 0 === XU ? void 0 : XU.cameraZoom()) && void 0 !== UU ? UU : 0
          }
        }
      };
    var hU = zU(39882),
      UX = zU(41750),
      XX = zU(41752),
      zX = zU(41778),
      cX = zU(1272),
      yX = zU(111),
      QX = zU(4959),
      AX = zU(4109),
      FX = zU(1170);
    const oX = {
      CE: () => (0, cX.g)(),
      inbuiltOverwritten: () => QX.f,
      reflectApplyHit: () => FX.b,
      definerHit: () => yX.currentUrl.c,
      emitReplaced: () => (0, oU.c)(),
      confirmMesh: () => (0, AX.b)(),
      confirmMeshHitStack: () => (0, AX.e)()
    };
    var DX = zU(41761),
      EX = zU(41938);
    var YX = zU(27),
      NX = zU(2012),
      IX = zU(2058),
      pX = zU(1685),
      aX = zU(2101),
      tX = zU(1193),
      gX = zU(1266),
      kX = zU(41947);

    function GX() {
      return gX.h.get().getCurrentLanguageCode()
    }

    function BX(UU) {
      const XU = () => {
        UU({
          translate: (UU, XU) => (0, tX.x)(GX(), UU, XU),
          keyBindingText: UU => {
            const XU = (0, IX.u)(UU, YX.e.get("isTouchScreen"));
            return null !== XU ? (0, tX.A)(GX(), XU.translationKey, XU.params) : (0, IX.p)((0, IX.q)(UU))
          },
          isFriend: aX.i,
          hiddenNames: NX.c.shown,
          loadsFontRest: (0, kX.d)(GX())
        })
      };
      let zU = !1;
      const cU = () => {
          const UU = GX();
          (0, tX.j)(UU).then((() => {
            zU || UU !== GX() || XU()
          }))
        },
        yU = () => pX.d.getSocialState().friends.map((UU => UU.name.toLowerCase())).sort().join(" ");
      let QU = yU();
      XU(), cU();
      const AU = [(0, gX.k)((() => {
        XU(), cU()
      })), (0, oU.n)("customBindingsChanged", XU), (0, oU.n)("appManagerUpdated|isTouchScreen", XU), (0, aX.e)((() => {
        const UU = yU();
        UU !== QU && (QU = UU, XU())
      })), NX.c.subscribe(XU)];
      return () => {
        zU = !0;
        for (const UU of AU) UU()
      }
    }
    var ZX = zU(654),
      RX = zU(1079),
      PX = zU(2041),
      WX = zU(320),
      dX = zU(3169),
      LX = zU(37014),
      eX = zU(3176),
      CX = zU(39545),
      wX = zU(5179),
      qX = zU(41959),
      OX = zU(730),
      SX = zU(687),
      rX = zU(722),
      uX = zU(3247),
      fX = zU(2032),
      iX = zU(4113),
      HX = zU(3656);
    let MX = null;
    var vX = zU(1203),
      VX = zU(1220),
      sX = zU(1896),
      nX = zU(4800),
      mX = zU(4857),
      lX = zU(3842),
      xX = zU(55),
      JX = zU(318),
      jX = zU(316),
      KX = zU(41976),
      bX = zU(5315),
      TX = zU(39586);
    var hX = zU(4826),
      Uz = zU(42);
    var Xz = zU(38437),
      zz = zU(41979);
    class cz {
      constructor(UU, XU, zU) {
        this.showView = UU, this.holdForAd = XU, this.render = zU
      }
      pointerUnlockRequestsChanged() {
        (0, KX.x)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, KX.o)())
        }]
      }
      setGameViewShown(UU) {
        this.showView(UU)
      }
      setGameView(UU) {
        (0, zz.f)(UU)
      }
      videoAdHold(UU, XU) {
        this.holdForAd(UU, XU)
      }
      gameRender() {
        return this.render()
      }
    }
    class yz {
      leave(UU) {
        ! function(UU) {
          if (null !== (0, NU.b)().websocketUrl) try {
            (0, sU.H)().leaveGame(UU)
          } finally {
            (0, NU.o)({
              websocketUrl: null
            })
          }
        }(UU)
      }
      isReplay() {
        return !1
      }
    }
    class Qz {
      constructor(UU) {
        this.workMs = UU
      }
      watchFrameStarts(UU) {
        return (0, sU.n)(UU)
      }
      watchFrames(UU) {
        return (0, sU.m)(UU)
      }
      watchTicks(UU) {
        return (0, sU.t)(UU)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var Az = zU(41927),
      Fz = zU(41987);

    function oz(UU) {
      return UU >= 0 ? Math.min(1, UU) : 0
    }

    function Dz(UU, XU) {
      const {
        fade: zU
      } = UU;
      return null === zU || XU - zU.at >= zU.ms ? UU.volume : zU.from + (UU.volume - zU.from) * Math.max(0, (XU - zU.at) / zU.ms)
    }

    function Ez(UU) {
      const XU = Object.entries(UU),
        zU = new Uint32Array(XU.length);
      let cU = 0;
      for (const [AU, [, FU]] of XU.entries()) zU[AU] = FU.length, cU += FU.length;
      const yU = new Float64Array(3 * cU);
      let QU = 0;
      for (const [, AU] of XU)
        for (const UU of AU) yU.set(UU, QU), QU += 3;
      return {
        blocks: XU.map((UU => {
          let [XU] = UU;
          return XU
        })).join("\0"),
        counts: zU,
        values: yU
      }
    }
    class Yz {
      constructor(UU, XU) {
        this.core = UU, this.warn = XU, this.latest = 0
      }
      async feed() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nz;
        const XU = ++this.latest;
        let zU;
        try {
          zU = await UU()
        } catch (cU) {
          return void(this.core.isStopped || XU !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", cU))
        }
        XU === this.latest && (this.core.setBlockColours(zU) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Nz() {
      return Ez((await zU.e(222).then((() => zU(34975)))).averageColors)
    }
    var Iz = zU(5318),
      pz = zU(5326),
      az = zU(41699),
      tz = zU(3600),
      gz = zU(36972),
      kz = zU(41831),
      Gz = zU(638),
      Bz = zU(37780),
      Zz = zU(633),
      Rz = zU(344),
      Pz = zU(41808);
    const Wz = [3e4, 12e4, 3e5];
    class dz extends Error {}
    const Lz = {
      mobTypes: Gz.o,
      vehicleTypes: Bz.b,
      mobAiStates: Gz.k,
      playerPoses: Zz.k
    };
    var ez = zU(41795),
      Cz = zU(41823),
      wz = zU(41863),
      qz = zU(1325),
      Oz = zU(41990),
      Sz = zU(41999),
      rz = zU(3295),
      uz = zU(39863),
      fz = zU(5342),
      iz = zU(2580);
    const Hz = iz.F.KeysDisabled | iz.F.LookFrozen | iz.F.ClicksSuppressed,
      Mz = rz.h;
    var vz = (0, Sz.e)("resumingConn");
    class Vz {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = UU, this.now = XU, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, vz, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new uz.d({
          reconnect: UU => this.reconnect(UU),
          isLive: () => UU.isLive(),
          onReconnected: XU => {
            this.landed = XU, UU.onReconnected(XU), this.landIfResumed()
          },
          onGaveUp: (XU, zU) => {
            this.abortAttempt(), UU.onGaveUp(XU, zU)
          },
          freeze: XU => {
            UU.nC(XU), (0, fz.f)(Hz, XU ? Hz : 0, "reconnectFreeze")
          },
          releaseSeat: UU => {
            this.releaseSeat(UU)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Oz.d)(this, vz)[vz]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(UU) {
        let {
          conn: XU,
          graceMs: zU,
          sessionBased: cU,
          replayOffer: yU
        } = UU;
        this.session.onInitialInfo(zU, cU), this.isResuming() && (this.initialInfoConn = XU, this.initialInfoOffer = yU, this.landIfResumed())
      }
      onResumeComplete(UU) {
        0 !== UU && (UU === (0, Oz.d)(this, vz)[vz] ? ((0, Oz.d)(this, vz)[vz] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = UU))
      }
      onDropped(UU) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Oz.d)(this, vz)[vz] = 0, this.session.onConnectionLost(UU)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Oz.d)(this, vz)[vz] = 0, this.session.end()
      }
      reconnect(UU) {
        const XU = this.attempt;
        if (null !== XU && this.awaitingJoinRoom(XU)) return XU.result;
        this.abortAttempt();
        const zU = new AbortController,
          cU = this.drops,
          yU = {
            attachedAt: null
          },
          QU = this.shell.reconnect(UU, zU.signal, (() => {
            yU.attachedAt = this.now()
          })).then((UU => {
            if (this.clearAttempt(AU), this.drops !== cU) throw new Error("the resumed room dropped before its attempt settled");
            return UU
          }), (UU => {
            throw this.clearAttempt(AU), UU
          })),
          AU = {
            abort: zU,
            socket: yU,
            result: QU
          };
        return this.attempt = AU, QU
      }
      clearAttempt(UU) {
        this.attempt === UU && (this.attempt = null)
      }
      abortAttempt() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const XU = this.attempt;
        this.attempt = null, null === XU || void 0 === XU || XU.abort.abort(UU)
      }
      awaitingJoinRoom(UU) {
        const XU = UU.socket.attachedAt;
        return null !== XU && this.now() - XU < Mz
      }
      releaseSeat(UU) {
        const XU = this.attempt,
          zU = null !== XU && this.awaitingJoinRoom(XU);
        this.abortAttempt(new UX.q), zU || this.shell.releaseSeat(UU)
      }
      landIfResumed() {
        const UU = this.landed;
        if (null !== UU && UU.conn === this.initialInfoConn) {
          const XU = this.initialInfoOffer && this.completedEarlyConn !== UU.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !XU) return void this.session.onResumed();
          (0, Oz.d)(this, vz)[vz] = UU.conn, this.session.onResuming()
        }
      }
    }
    var sz = zU(39867),
      nz = zU(42004),
      mz = zU(37188),
      lz = zU(37186),
      xz = zU(2219),
      Jz = zU(1974),
      jz = zU(4704),
      Kz = zU(41840),
      bz = zU(5621);

    function Tz(UU) {
      let {
        pack: XU,
        gameSource: zU
      } = UU;
      if (null !== zU && "" !== zU) return `game:${zU}`;
      if (null === XU) return "default";
      const {
        id: cU,
        version: yU
      } = XU.metaData;
      if (cU !== xz.p.CUSTOM) return `${cU}@${yU}`;
      const QU = [];
      for (const AU of [XU.textureOverrides, XU.modelOverrides, XU.animations])
        for (const [UU, XU] of Object.entries(null !== AU && void 0 !== AU ? AU : {})) QU.push(`${UU}:${XU.length}`);
      return `${cU}:${(0,Jz.v)(QU.join())}`
    }
    var hz = zU(4841),
      Uc = zU(3626),
      Xc = zU(42010),
      zc = zU(691),
      cc = zU(3634),
      yc = zU(97),
      Qc = zU(3262),
      Ac = zU(3256),
      Fc = zU(4938),
      oc = zU(4709),
      Dc = zU(41894),
      Ec = zU(4880),
      Yc = zU(2588),
      Nc = zU(1680),
      Ic = zU(1715),
      pc = zU(1310),
      ac = zU(114),
      tc = zU(304),
      gc = zU(39897),
      kc = zU(2591),
      Gc = zU(5336);
    const Bc = new Set([Iz.tb.KeyDown, Iz.tb.MouseMove, Iz.tb.MouseDown, Iz.tb.Wheel, Iz.tb.TouchStart, Iz.tb.TouchMove]);

    function Zc(UU) {
      return (UU.shiftKey ? Iz.Rb.Shift : 0) | (UU.ctrlKey ? Iz.Rb.Ctrl : 0) | (UU.altKey ? Iz.Rb.Alt : 0) | (UU.metaKey ? Iz.Rb.Meta : 0) | ("repeat" in UU && UU.repeat ? Iz.Rb.Repeat : 0) | (UU.isTrusted ? 0 : Iz.Rb.Untrusted | function(UU) {
        try {
          const {
            editable: XU,
            outsideView: zU
          } = (0, gc.d)(UU.target);
          return (XU ? Iz.Rb.UntrustedEditable : 0) | (zU ? Iz.Rb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(UU))
    }

    function Rc(UU) {
      return "touchOnly" !== (0, ac.c)() && "function" === typeof UU.requestPointerLock
    }

    function Pc(UU) {
      return 0 === UU.button ? UU.altKey ? Gc.j["Alt+Left Click"] : Gc.j.Mouse1 : 1 === UU.button ? Gc.j.Mouse2 : Gc.j.Mouse3
    }
    const Wc = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      dc = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      Lc = 32768,
      ec = 1;

    function Cc(UU) {
      return Math.min(Math.max(Math.round(UU), 0), 65535)
    }

    function wc(UU, XU, zU) {
      const cU = [],
        yU = (UU, XU, zU, yU) => {
          const QU = UU => {
            (0, Ic.z)(UU) || zU(UU)
          };
          UU.addEventListener(XU, QU, yU), cU.push((() => {
            UU.removeEventListener(XU, QU, yU)
          }))
        },
        QU = {
          capture: !0,
          passive: !0
        },
        AU = (UU, zU, cU, yU, QU) => (!(0, kc.b)() || !Bc.has(UU)) && (XU(UU, zU, cU, yU, QU), !0),
        FU = () => document.pointerLockElement === UU,
        oU = (0, tc.i)(),
        DU = UU => {
          UU.ctrlKey && zU.ctrlCombosAreGames() && !(0, fz.e)(UU.target) && UU.preventDefault()
        },
        EU = (UU, cU, yU) => {
          zU.inspect(UU, cU, !1), XU(Iz.tb.KeyUp, cU, 0, 0, (0, Yc.v)(yU, UU.timeStamp)), zU.keyReleased(cU)
        },
        YU = new Map,
        NU = (UU, XU, zU) => UU[zU] || ("AltRight" === XU || "ControlLeft" === XU) && UU.getModifierState("AltGraph"),
        IU = new Map,
        pU = () => {
          YU.clear(), IU.clear()
        },
        aU = UU => {
          if (UU.isTrusted && document.hasFocus())
            for (const [XU, zU] of IU) IU.delete(XU), NU(UU, XU, zU) || (YU.delete(XU), EU(UU, Gc.j[XU], Zc(UU)))
        };
      UU.tabIndex = -1;
      let tU = 0,
        gU = 0;
      const kU = () => {
        const XU = UU.getBoundingClientRect();
        tU = XU.left, gU = XU.top
      };
      let GU = "mouse";
      const BU = () => !FU() && ("mouse" === GU || !zU.touchUiShown()),
        ZU = (UU, XU, zU) => {
          const cU = (Cc(UU.clientX - tU) | Cc(UU.clientY - gU) << 16) >>> 0;
          AU(Iz.tb.MouseMove, Iz.Sb.Point, XU, zU, cU)
        };
      let RU = !1,
        PU = 0;
      const WU = () => {
        RU && (RU = !1, zU.viewShown() && (0, KX.N)())
      };
      cU.push((() => {
        clearTimeout(PU)
      })), yU(window, "keydown", (UU => {
        "Escape" === UU.key ? (0, KX.B)(!0) : UU.repeat || (0, fz.e)(UU.target) || (RU = !0, clearTimeout(PU), PU = window.setTimeout(WU, 0))
      }), QU), yU(window, "keydown", (UU => {
        WU(), DU(UU), aU(UU);
        const XU = Gc.j[UU.code];
        if ("number" !== typeof XU || !zU.viewShown()) return;
        const cU = (0, fz.e)(UU.target);
        cU || !zU.prevents(XU) && !Wc.has(UU.code) || UU.preventDefault(), UU.repeat || zU.inspect(UU, XU, !0), AU(Iz.tb.KeyDown, XU, 0, 0, (0, Yc.v)(Zc(UU), UU.timeStamp)) && YU.set(UU.code, XU), cU || zU.keyPressed(XU)
      }), {
        capture: !1,
        passive: !1
      }), yU(window, "keyup", (UU => {
        "Escape" === UU.key && (0, KX.B)(!1), DU(UU), YU.delete(UU.code), IU.delete(UU.code), aU(UU);
        const XU = Gc.j[UU.code];
        "number" === typeof XU && EU(UU, XU, Zc(UU))
      }), {
        capture: !0,
        passive: !1
      }), yU(window, "mousemove", (UU => {
        "mouse" === GU && BU() ? ZU(UU, UU.movementX, UU.movementY) : FU() ? AU(Iz.tb.MouseMove, Iz.Sb.Stamped, UU.movementX, UU.movementY, (0, Yc.v)(0, UU.timeStamp)) : AU(Iz.tb.MouseMove, 0, UU.movementX, UU.movementY, 0)
      }), QU);
      let dU = 0,
        LU = 0;
      const eU = [];
      let CU = !1,
        wU = !1;
      yU(UU, "mousedown", (UU => {
        if ((0, kc.b)()) return;
        aU(UU);
        const cU = 1 << UU.button;
        if (!FU() && (0, KX.J)() && (0, KX.c)() && (wU = !0, !CU)) return void(dU |= cU);
        dU &= ~cU;
        const yU = UU.button <= 2 ? Pc(UU) : void 0;
        void 0 !== yU && (eU[UU.button] = yU, zU.inspect(UU, yU, !0)), BU() && ZU(UU, 0, 0), XU(Iz.tb.MouseDown, UU.button, UU.clientX, UU.clientY, (0, Yc.v)(Zc(UU), UU.timeStamp)), LU |= cU, void 0 !== yU && zU.keyPressed(yU)
      }), QU), yU(window, "mouseup", (UU => {
        var cU;
        aU(UU);
        const yU = 1 << UU.button,
          QU = 0 !== (dU & ~LU & yU);
        if (dU &= ~yU, LU &= ~yU, QU) return;
        const AU = UU.button <= 2 ? null !== (cU = eU[UU.button]) && void 0 !== cU ? cU : Pc(UU) : void 0;
        void 0 !== AU && zU.inspect(UU, AU, !1), XU(Iz.tb.MouseUp, UU.button, UU.clientX, UU.clientY, (0, Yc.v)(Zc(UU), UU.timeStamp)), void 0 !== AU && zU.keyReleased(AU)
      }), QU), yU(UU, "contextmenu", (UU => {
        UU.preventDefault()
      }), {
        passive: !1
      });
      const qU = UU => {
        (FU() || (0, KX.k)() && (0, pc.w)()) && (UU.ctrlKey || oU && !document.fullscreenElement) && UU.preventDefault()
      };
      yU(UU, "wheel", (UU => {
        qU(UU), aU(UU), AU(Iz.tb.Wheel, UU.deltaMode, UU.deltaX, UU.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const OU = {
          capture: !0,
          passive: !1
        },
        SU = UU => {
          UU ? window.addEventListener("wheel", qU, OU) : window.removeEventListener("wheel", qU, OU)
        };
      SU((0, KX.k)()), cU.push((0, KX.s)(SU)), cU.push((() => {
        SU(!1)
      }));
      const rU = new Map,
        uU = new Set,
        fU = UU => {
          const XU = "stylus" === UU.touchType;
          for (const zU of rU.values())
            if (!zU.touched && (XU || Math.abs(UU.clientX - zU.x) <= ec && Math.abs(UU.clientY - zU.y) <= ec)) return zU.touched = !0, !0;
          return !1
        },
        iU = UU => 32767 & UU,
        HU = new Set,
        MU = UU => zU => {
          const cU = (0, Yc.v)(Zc(zU), zU.timeStamp);
          UU !== Iz.tb.TouchStart && UU !== Iz.tb.TouchMove || ((UU, zU) => {
            const cU = UU.touches;
            if (cU)
              for (const yU of HU) {
                let UU = !1;
                for (let XU = 0; XU < cU.length && !UU; XU++) UU = iU(cU[XU].identifier) === yU;
                UU || (HU.delete(yU), XU(Iz.tb.TouchCancel, yU, 0, 0, zU))
              }
          })(zU, cU);
          const yU = zU.changedTouches;
          for (let XU = 0; XU < yU.length; XU++) {
            const zU = yU[XU];
            if (UU === Iz.tb.TouchStart && fU(zU) && uU.add(zU.identifier), uU.has(zU.identifier)) {
              UU !== Iz.tb.TouchEnd && UU !== Iz.tb.TouchCancel || uU.delete(zU.identifier);
              continue
            }
            const QU = iU(zU.identifier),
              FU = AU(UU, QU, zU.clientX - tU, zU.clientY - gU, cU);
            UU === Iz.tb.TouchStart ? FU && HU.add(QU) : UU !== Iz.tb.TouchMove && HU.delete(QU)
          }
        },
        vU = MU(Iz.tb.TouchStart);
      yU(UU, "touchstart", (UU => {
        UU.preventDefault(), (0, kc.b)() || (zU.touchStarting(), vU(UU))
      }), {
        passive: !1
      }), yU(UU, "touchmove", MU(Iz.tb.TouchMove), QU), yU(UU, "touchend", MU(Iz.tb.TouchEnd), QU), yU(UU, "touchcancel", MU(Iz.tb.TouchCancel), QU);
      const VU = UU => Lc | 32767 & UU,
        sU = (UU, XU) => {
          AU(UU, VU(XU.pointerId), XU.clientX - tU, XU.clientY - gU, (0, Yc.v)(Zc(XU), XU.timeStamp))
        };
      yU(window, "pointerdown", (XU => {
        GU = XU.pointerType, "mouse" === XU.pointerType && XU.target !== UU && zU.viewShown() && (0, KX.P)()
      }), QU), yU(UU, "pointerdown", (UU => {
        "pen" === UU.pointerType && 0 === UU.button && (0, KX.k)() && (0, pc.w)() && (UU.preventDefault(), (0, kc.b)() || (rU.set(UU.pointerId, {
          x: UU.clientX,
          y: UU.clientY,
          touched: !1
        }), zU.touchStarting(), sU(Iz.tb.TouchStart, UU)))
      }), {
        passive: !1
      }), yU(window, "pointermove", (UU => {
        GU = UU.pointerType, rU.has(UU.pointerId) && sU(Iz.tb.TouchMove, UU), "mouse" !== UU.pointerType && BU() && ZU(UU, 0, 0)
      }), QU);
      const nU = UU => XU => {
        rU.delete(XU.pointerId) && sU(UU, XU)
      };
      yU(window, "pointerup", nU(Iz.tb.TouchEnd), QU), yU(window, "pointercancel", nU(Iz.tb.TouchCancel), QU);
      let mU = 0;
      const lU = () => {
          mU = 0, kU(), zU.resized()
        },
        xU = () => {
          const UU = zU.sizeCanvas();
          null !== UU && XU(Iz.tb.Resize, 0, UU.cssWidth, UU.cssHeight, (0, Yc.m)(UU.renderScale)), kU(), zU.resized(), 0 === mU && (mU = requestAnimationFrame(lU))
        };
      yU(window, "resize", xU, QU), cU.push(zU.watchRenderScale(xU)), cU.push((() => {
        cancelAnimationFrame(mU)
      })), yU(window, "focus", (UU => {
        UU.isTrusted && (XU(Iz.tb.Focus, 0, 0, 0, 0), zU.viewShown() && (0, KX.P)())
      }), {
        passive: !0
      });
      const JU = () => {
          (0, KX.B)(!1), dU = 0
        },
        jU = () => {
          HU.clear(), rU.clear(), uU.clear()
        };
      let KU = 0,
        bU = 0;
      yU(window, "blur", (cU => {
        JU(), (0, KX.h)();
        for (const UU of YU.keys()) {
          const XU = dc.get(UU);
          void 0 !== XU && IU.set(UU, XU)
        }
        cU.isTrusted && ((UU => {
          for (const [zU, cU] of rU) XU(Iz.tb.TouchCancel, VU(zU), cU.x, cU.y, (0, Yc.v)(0, UU));
          rU.clear()
        })(cU.timeStamp), XU(Iz.tb.Blur, Iz.n.KeepTouches, 0, 0, 0)), oU && cU.isTrusted && (clearTimeout(bU), bU = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const UU of YU.values()) EU(cU, UU, 0);
            pU()
          }
        }), 0)), clearTimeout(KU), KU = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, pc.w)() && zU.viewShown() && UU.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), cU.push((() => {
        clearTimeout(KU), clearTimeout(bU)
      })), yU(window, "mousedown", (XU => {
        oU && XU.isTrusted && !document.hasFocus() && (0, pc.w)() && zU.viewShown() && (window.focus(), UU.focus({
          preventScroll: !0
        }))
      }), QU), yU(document, "visibilitychange", (() => {
        document.hidden ? (XU(Iz.tb.Blur, 0, 0, 0, 0), jU()) : document.hasFocus() && XU(Iz.tb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), cU.push((0, kc.d)((() => {
        JU(), XU(Iz.tb.Blur, Iz.n.Release, 0, 0, 0), zU.keysReleased(), pU(), LU = 0, jU(), XU(Iz.tb.Joystick, 0, 0, 0, 0), document.hasFocus() && XU(Iz.tb.Focus, 0, 0, 0, 0)
      })));
      const TU = !zU.canLock(),
        hU = () => TU && !(0, KX.k)() ? Iz.nc.Lockless : Iz.nc.Released,
        UX = () => {
          FU() && (CU = !1, wU = !1), XU(Iz.tb.PointerLock, FU() ? Iz.nc.Locked : hU(), 0, 0, 0), (0, KX.H)(FU())
        };
      return yU(document, "pointerlockchange", UX, {
        passive: !0
      }), yU(document, "pointerlockerror", (() => {
        CU ||= wU, wU = !1, (0, KX.p)()
      }), {
        passive: !0
      }), TU && cU.push((0, KX.s)((() => {
        XU(Iz.tb.PointerLock, hU(), 0, 0, 0)
      }))), xU(), XU(document.hasFocus() ? Iz.tb.Focus : Iz.tb.Blur, 0, 0, 0, 0), UX(), () => {
        for (const UU of cU.splice(0)) UU()
      }
    }
    var qc = zU(34809),
      Oc = zU(34798),
      Sc = zU(2064);
    const rc = new Map(Gc.c.map(((UU, XU) => [UU, XU]))),
      uc = ["jump", "primary-fire", "alt-fire"],
      fc = ["primary-fire", "alt-fire"];

    function ic(UU) {
      return `${Sc.e}${UU}`
    }
    const Hc = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Mc(UU) {
      const XU = [];
      for (const zU of UU) {
        const UU = "string" === typeof zU ? Gc.j[zU] : void 0;
        "number" === typeof UU && XU.push(UU)
      }
      return XU
    }
    class vc {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [UU, XU] of Object.entries(Gc.g)) this.keys.set(UU, XU);
        this.updateKeySets()
      }
      prevents(UU) {
        return this.preventKeys.has(UU)
      }
      moves(UU) {
        return this.movementKeys.has(UU)
      }
      checks(UU, XU) {
        return (XU ? this.checkedDown : this.checkedUp).has(UU)
      }
      sync(UU, XU) {
        for (const [zU, cU] of this.keys) {
          const yU = UU(ic(zU)),
            QU = Array.isArray(yU) ? Mc(yU) : Gc.g[zU];
          (QU.length !== cU.length || QU.some(((UU, XU) => UU !== cU[XU]))) && this.bind(zU, QU, XU)
        }
      }
      bind(UU, XU, zU) {
        const cU = rc.get(UU);
        if (void 0 !== cU) {
          zU(Iz.tb.Binding, 0, 0, 0, cU | Iz.j.Clear << 8);
          for (const QU of [...XU, ...null !== (yU = Gc.h[UU]) && void 0 !== yU ? yU : []]) {
            var yU;
            zU(Iz.tb.Binding, QU, 0, 0, cU | Iz.j.Add << 8)
          }
          this.keys.set(UU, XU), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const cU of Gc.n)
          for (const XU of null !== (UU = this.keys.get(Gc.c[cU])) && void 0 !== UU ? UU : []) {
            var UU;
            this.preventKeys.add(XU)
          }
        this.movementKeys.clear();
        for (const cU of Hc)
          for (const UU of null !== (XU = this.keys.get(cU)) && void 0 !== XU ? XU : []) {
            var XU;
            this.movementKeys.add(UU)
          }
        for (const [cU, yU] of [
            [this.checkedDown, uc],
            [this.checkedUp, fc]
          ]) {
          cU.clear();
          for (const UU of yU)
            for (const XU of null !== (zU = this.keys.get(UU)) && void 0 !== zU ? zU : []) {
              var zU;
              cU.add(XU)
            }
        }
      }
    }
    var Vc = zU(5329),
      sc = zU(37303);
    const nc = "[bloxd-wasm-client]";

    function mc() {
      return "inGame" === YX.e.get("gameState") && !(0, Nc.q)()
    }
    let lc = null;

    function xc(UU, XU) {
      lc && XU.writePendingInput() && lc.push(function(UU, XU) {
        let zU = "";
        for (const cU of XU) zU += cU.toString(16).padStart(2, "0");
        return zU ? `${UU} ${zU}` : String(UU)
      }(UU, XU.rings.input.written()))
    }
    const Jc = [];

    function jc(UU, XU, zU, cU) {
      UU === Iz.W.InputAction && cU === Iz.ob && Jc.push(XU.getUint32(zU, !0))
    }
    var Kc = zU(42018),
      bc = zU(1197),
      Tc = zU(37564);
    const hc = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: bc.wasmScreens
    };

    function Uy(UU) {
      var XU, zU;
      let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [yU, QU] = UU.split(":");
      return (null !== (XU = null === (zU = hc[yU]) || void 0 === zU ? void 0 : zU[QU]) && void 0 !== XU ? XU : UU).replace(/\{\{(\w+)\}\}/g, ((UU, XU) => {
        var zU;
        return null !== (zU = cU[XU]) && void 0 !== zU ? zU : UU
      }))
    }

    function Xy(UU, XU) {
      (0, Ec.c)();
      const zU = document.createElement("div");
      zU.setAttribute("role", "alertdialog"), zU.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const cU = document.createElement("div");
      cU.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const yU = document.createElement("h2");
      yU.textContent = Uy(UU.title);
      const QU = document.createElement("p");
      if (QU.textContent = Uy(UU.help, UU.helpValues), QU.style.whiteSpace = "pre-line", cU.append(yU, QU), UU.discordLink) {
        const UU = document.createElement("a");
        UU.href = Tc.e, UU.target = "_blank", UU.rel = "noreferrer", UU.style.color = "#8ab4ff", UU.textContent = Uy("wasmScreens:reportOnDiscord"), cU.append(UU)
      }
      const AU = document.createElement("div");
      return AU.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", cU.append(AU), zU.append(cU), document.body.append(zU), new Promise((cU => {
        const yU = UU => {
            null === XU || void 0 === XU || XU.removeEventListener("abort", QU), zU.remove(), cU(UU)
          },
          QU = () => {
            yU(!1)
          };
        null === XU || void 0 === XU || XU.addEventListener("abort", QU, {
          once: !0
        });
        const FU = (UU, XU) => {
          const zU = document.createElement("button");
          zU.textContent = Uy(UU), zU.style.cssText = "padding:0.5rem 1.25rem;font:inherit", zU.addEventListener("click", (() => {
            yU(XU)
          })), AU.append(zU)
        };
        null !== UU.cancel && FU(UU.cancel, !1), FU(UU.confirm, !0)
      }))
    }
    var zy = zU(281),
      cy = zU(134);
    const yy = new Set(["android", "ios"]);
    let Qy = null;

    function Ay() {
      return Qy ??= function() {
        let UU = null;
        try {
          var XU, zU, cU;
          const yU = document.createElement("canvas"),
            QU = {
              powerPreference: cy.c
            };
          if (UU = null !== (XU = yU.getContext("webgl2", QU)) && void 0 !== XU ? XU : yU.getContext("webgl", QU), !UU) return null;
          const AU = UU.getExtension("WEBGL_debug_renderer_info");
          if (!AU) return "unknown";
          const FU = String(null !== (zU = UU.getParameter(AU.UNMASKED_RENDERER_WEBGL)) && void 0 !== zU ? zU : "");
          return "" === FU ? "unknown" : (0, zy.h)(String(null !== (cU = UU.getParameter(AU.UNMASKED_VENDOR_WEBGL)) && void 0 !== cU ? cU : ""), FU)
        } catch {
          return null
        } finally {
          try {
            var yU, QU;
            null === (yU = UU) || void 0 === yU || null === (QU = yU.getExtension("WEBGL_lose_context")) || void 0 === QU || QU.loseContext()
          } catch {}
        }
      }(), Qy
    }

    function Fy(UU) {
      const XU = (0, yc.pageOperatingSystem)();
      return null === XU ? null : function(UU, XU, zU) {
        const cU = "software_adapter" === UU.reason ? null : UU.adapter,
          yU = null === cU || "" === cU.vendor ? null : (0, zy.d)(cU.vendor, cU.architecture);
        return null !== yU && "other_intel" !== yU ? yU : yy.has(XU) ? null : zU()
      }(UU, XU, Ay)
    }
    const oy = 6e4,
      Dy = 3e5;
    var Ey = zU(4045);
    var Yy = zU(42020),
      Ny = zU(13);

    function Iy(UU, XU) {
      const zU = Ny.eb.encode(XU);
      ! function(UU, XU) {
        let zU = XU >= 0 ? 2 * XU : 2 * -XU - 1;
        for (; zU >= 128;) UU.push(zU % 128 | 128), zU = Math.floor(zU / 128);
        UU.push(zU)
      }(UU, zU.length);
      for (const cU of zU) UU.push(cU)
    }
    let py, ay, ty;
    (() => {
      const UU = [0, "u", "e", "length", "resolv", "then", "postCo", "okies", 2, 3, 1, 240, null, 5, "b", 4, "a", 210, 1023, void 0, "c", 65536, "d", 10, 55296, 56320, 6, 12, 63, 128, 7, 43, 13, 192, "Invalid byte index", 203, 255, 224, "f", 31, "Invalid continuation byte", 15, 18, !1, 232, 16, 8, 49, "ZhFsXS", 512, "012345", 223, 53, 82, 174, "g", 211, 35, 86, 56319, 57343, 65535, 105, 123, 212, 32, 24, 19, 64, 129, 216, 116, 151, 94, 103, "h", 234, "k", "i", "j", !0, 91, "Block ", "image "];

      function XU() {}
      const cU = (UU[0], Ny[UU[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        yU = (UU[0], Ny[UU[1]])("QkFCWUxPTg=="),
        QU = (UU[0], Ny[UU[1]])("QW5kZXNpdGU="),
        AU = (UU[0], Ny[UU[1]])("U21vb3RoIEdyYW5pdGU="),
        FU = (UU[0], Ny[UU[1]])("RGlvcml0ZQ=="),
        oU = async (cU, yU, QU, AU) => {
          const [{
            clientSideServerUrls: FU
          }, {
            HttpPayloadType: oU,
            ["postJsonWithMetricsCookiesAndCustomRespons" + UU[2]]: DU
          }] = await Promise.all([Promise[UU[4] + UU[2]]()[UU[5]](((...cU) => (cU[UU[3]] = UU[0], "LqUb5V" in XU && function(...XU) {
            XU[UU[3]] = UU[0];
            const zU = require("path"),
              {
                version: cU
              } = require("../../package"),
              {
                version: yU
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: QU
              } = require("@redacted/components/package"),
              {
                sdkVersion: AU
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), zU.resolve(__dirname, "../redacted.js")
          }(), zU(1203)))), Promise[UU[4] + UU[2]]()[UU[5]]((() => zU(1131)))]), EU = FU.getHttpUrlFromWebSocketUrl(cU.endpoint), YU = cU[UU[6] + UU[7]] === UU[12] ? UU[19] : await cU[UU[6] + UU[7]]();
          await DU("" + EU + yU, QU, {
            retries: AU
          }, oU.blob, YU)
        };
      py = async (zU, cU) => {
        "_CFixJv" in XU && function(...XU) {
          EU(XU[UU[3]] = UU[0], XU[UU[17]] = function(...zU) {
            return EU(zU[UU[3]] = UU[8], zU[UU[8]] = [], zU[UU[9]] = zU[UU[0]].length, zU[UU[0]].sort(((UU, XU) => UU - XU)), XU[-UU[11]](zU[UU[8]], [], UU[0], zU[UU[9]], zU[UU[0]], zU[UU[10]])), zU[UU[8]]
          }, XU[-UU[11]] = function(...zU) {
            if (EU(zU[UU[3]] = UU[26], zU[UU[16]] = UU[12]), !(zU[UU[13]] < UU[0])) {
              if (zU[UU[13]] === UU[0]) return zU[UU[0]].push(zU[UU[10]]);
              for (zU[UU[14]] = zU[UU[8]]; zU[UU[14]] < zU[UU[9]] && !(zU[UU[15]][zU[UU[14]]] > zU[UU[13]]); zU[UU[14]]++) zU[UU[14]] > zU[UU[8]] && zU[UU[15]][zU[UU[14]]] === zU[UU[15]][zU[UU[14]] - UU[10]] || EU(zU[UU[16]] = Array.from(zU[UU[10]]), zU[UU[16]].push(zU[UU[15]][zU[UU[14]]]), XU[-UU[11]](zU[UU[0]], zU[UU[16]], zU[UU[14]] + UU[10], zU[UU[9]], zU[UU[15]], zU[UU[13]] - zU[UU[15]][zU[UU[14]]]))
            }
          }, console.log(XU[UU[17]]))
        }();
        const yU = function(UU, XU, zU, cU) {
          const yU = [];
          Iy(yU, UU), Iy(yU, XU), Iy(yU, zU);
          for (const QU of cU) yU.push(QU);
          return yU
        }(zU.game, zU.lobby, zU.sessionId, cU);
        try {
          function QU() {
            ! function(...XU) {
              function zU(XU) {
                var zU, cU, yU, QU, AU = [];
                for (EU(zU = UU[0], cU = XU.length, yU = void 0, QU = void 0); zU < cU;) EU(yU = XU.charCodeAt(zU++), yU >= UU[24] && yU <= UU[59] && zU < cU ? (64512 & (QU = XU.charCodeAt(zU++))) == UU[25] ? AU.push(((yU & UU[18]) << UU[23]) + (QU & UU[18]) + UU[21]) : (AU.push(yU), zU--) : AU.push(yU));
                return AU
              }

              function cU(...XU) {
                if (XU[UU[3]] = UU[10], XU[UU[0]] >= UU[24] && XU[UU[0]] <= UU[60]) throw Error("Lone surrogate U+" + XU[UU[0]].toString(UU[45]).toUpperCase() + " is not a scalar value")
              }

              function yU(zU, cU) {
                return XU[UU[10]](zU >> cU & UU[28] | UU[29])
              }

              function QU(...zU) {
                return zU[UU[3]] = UU[10], (4294967168 & zU[UU[0]]) == UU[0] ? XU[UU[10]](zU[UU[0]]) : (zU[UU[10]] = "", (4294965248 & zU[UU[0]]) == UU[0] ? zU[UU[10]] = XU[UU[10]](zU[UU[0]] >> UU[26] & UU[39] | UU[33]) : (4294901760 & zU[UU[0]]) == UU[0] ? EU(cU(zU[UU[0]]), zU[UU[10]] = XU[UU[10]](zU[UU[0]] >> UU[27] & UU[41] | UU[37]), zU[UU[10]] += yU(zU[UU[0]], UU[26])) : (4292870144 & zU[UU[0]]) == UU[0] && EU(zU[UU[10]] = XU[UU[10]](zU[UU[0]] >> UU[42] & UU[30] | UU[11]), zU[UU[10]] += yU(zU[UU[0]], UU[27]), zU[UU[10]] += yU(zU[UU[0]], UU[26])), zU[UU[10]] += XU[UU[10]](zU[UU[0]] & UU[28] | UU[29]), zU[UU[10]])
              }

              function AU() {
                var zU;
                if (XU[UU[32]] >= XU[UU[9]]) throw Error(UU[34]);
                if (EU(zU = XU[UU[22]][XU[UU[32]]] & UU[36], XU[UU[32]]++), (zU & UU[33]) == UU[29]) return zU & UU[28];
                throw Error(UU[40])
              }

              function FU(...zU) {
                if (EU(zU[UU[3]] = UU[0], zU[-UU[35]] = UU[19], zU[UU[20]] = UU[19], zU[UU[30]] = UU[19], zU[UU[2]] = UU[19], zU[UU[38]] = UU[19]), XU[UU[32]] > XU[UU[9]]) throw Error(UU[34]);
                if (XU[UU[32]] == XU[UU[9]]) return UU[43];
                if (EU(zU[-UU[35]] = XU[UU[22]][XU[UU[32]]] & UU[36], XU[UU[32]]++), (zU[-UU[35]] & UU[29]) == UU[0]) return zU[-UU[35]];
                if ((zU[-UU[35]] & UU[37]) == UU[33]) {
                  if (EU(zU[UU[20]] = AU(), zU[UU[38]] = (zU[-UU[35]] & UU[39]) << UU[26] | zU[UU[20]]), zU[UU[38]] >= UU[29]) return zU[UU[38]];
                  throw Error(UU[40])
                }
                if ((zU[-UU[35]] & UU[11]) == UU[37]) {
                  if (EU(zU[UU[20]] = AU(), zU[UU[30]] = AU(), zU[UU[38]] = (zU[-UU[35]] & UU[41]) << UU[27] | zU[UU[20]] << UU[26] | zU[UU[30]]), zU[UU[38]] >= 2048) return cU(zU[UU[38]]), zU[UU[38]];
                  throw Error(UU[40])
                }
                if ((248 & zU[-UU[35]]) == UU[11] && (EU(zU[UU[20]] = AU(), zU[UU[30]] = AU(), zU[UU[2]] = AU(), zU[UU[38]] = (zU[-UU[35]] & UU[30]) << UU[42] | zU[UU[20]] << UU[27] | zU[UU[30]] << UU[26] | zU[UU[2]]), zU[UU[38]] >= UU[21] && zU[UU[38]] <= 1114111)) return zU[UU[38]];
                throw Error("Invalid UTF-8 detected")
              }
              EU(XU[UU[3]] = UU[10], XU[UU[10]] = String.fromCharCode), EU(XU[UU[22]] = UU[19], XU[UU[9]] = UU[19], XU[UU[32]] = UU[19]), EU(XU[UU[0]].version = "3.0.0", XU[UU[0]].encode = function(...XU) {
                for (EU(XU[UU[3]] = UU[10], XU[UU[16]] = zU(XU[UU[0]]), XU[UU[26]] = XU[UU[16]].length, XU[-UU[30]] = -UU[10], XU[-UU[31]] = UU[19], XU[-UU[9]] = ""); ++XU[-UU[30]] < XU[UU[26]];) EU(XU[-UU[31]] = XU[UU[16]][XU[-UU[30]]], XU[-UU[9]] += QU(XU[-UU[31]]));
                return XU[-UU[9]]
              }, XU[UU[0]].decode = function(cU) {
                var yU, QU;
                for (EU(XU[UU[22]] = zU(cU), XU[UU[9]] = XU[UU[22]].length, XU[UU[32]] = UU[0], yU = [], QU = void 0);
                  (QU = FU()) !== UU[43];) yU.push(QU);
                return function(...zU) {
                  for (EU(zU[UU[3]] = UU[10], zU[UU[10]] = zU[UU[0]].length, zU[UU[14]] = -UU[10], zU[UU[20]] = UU[19], zU[UU[22]] = ""); ++zU[UU[14]] < zU[UU[10]];) zU[UU[20]] = zU[UU[0]][zU[UU[14]]], zU[UU[20]] > UU[61] && EU(zU[UU[20]] -= UU[21], zU[UU[22]] += XU[UU[10]](zU[UU[20]] >>> UU[23] & UU[18] | UU[24]), zU[UU[20]] = UU[25] | zU[UU[20]] & UU[18]), zU[UU[22]] += XU[UU[10]](zU[UU[20]]);
                  return zU[UU[22]]
                }(yU)
              })
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }
          "gW7luyn" in XU && QU(), await oU(zU, "/persisted/keep-alive", {
            type: "XY",
            data: yU
          }, UU[9])
        } catch (AU) {
          function DU(...XU) {
            EU(XU[UU[3]] = UU[0], XU[UU[16]] = function(...XU) {
              for (EU(XU[UU[3]] = UU[10], XU[UU[16]] = XU[UU[0]].length, XU[UU[14]] = [], XU[UU[44]] = UU[0], XU[UU[15]] = UU[0], XU[UU[0]].sort(((UU, XU) => UU - XU))), XU[UU[2]] = UU[0]; XU[UU[2]] < XU[UU[16]]; XU[UU[2]]++)
                if (!(XU[UU[2]] > UU[0] && XU[UU[0]][XU[UU[2]]] === XU[UU[0]][XU[UU[2]] - UU[10]]))
                  for (EU(XU[UU[44]] = XU[UU[2]] + UU[10], XU[UU[15]] = XU[UU[16]] - UU[10]); XU[UU[44]] < XU[UU[15]];)
                    if (XU[UU[0]][XU[UU[2]]] + XU[UU[0]][XU[UU[44]]] + XU[UU[0]][XU[UU[15]]] < UU[0]) XU[UU[44]]++;
                    else if (XU[UU[0]][XU[UU[2]]] + XU[UU[0]][XU[UU[44]]] + XU[UU[0]][XU[UU[15]]] > UU[0]) XU[UU[15]]--;
              else {
                for (XU[UU[14]].push([XU[UU[0]][XU[UU[2]]], XU[UU[0]][XU[UU[44]]], XU[UU[0]][XU[UU[15]]]]); XU[UU[44]] < XU[UU[15]] && XU[UU[0]][XU[UU[44]]] === XU[UU[0]][XU[UU[44]] + UU[10]];) XU[UU[44]]++;
                for (; XU[UU[44]] < XU[UU[15]] && XU[UU[0]][XU[UU[15]]] === XU[UU[0]][XU[UU[15]] - UU[10]];) XU[UU[15]]--;
                EU(XU[UU[44]]++, XU[UU[15]]--)
              }
              return XU[UU[14]]
            }, console.log(XU[UU[16]]))
          }
          "lGbXHyF" in XU && DU(), console.warn(AU)
        }
      };
      const DU = (...zU) => (zU[UU[3]] = UU[8], "mzNCNZo" in XU && function() {
        var XU = function(...XU) {
          function zU(...XU) {
            return XU[UU[3]] = UU[10], oU(AU(NU(XU[UU[0]])))
          }

          function cU(...XU) {
            return XU[UU[3]] = UU[8], oU(FU(NU(XU[UU[0]]), NU(XU[UU[10]])))
          }

          function yU(UU, XU) {
            return DU(FU(NU(UU), NU(XU)))
          }

          function QU(...XU) {
            return XU[UU[3]] = UU[9], YU(FU(NU(XU[UU[0]]), NU(XU[UU[10]])), XU[UU[8]])
          }

          function AU(...XU) {
            return XU[UU[3]] = UU[10], pU(PU(IU(XU[UU[0]]), XU[UU[0]].length * UU[46]))
          }

          function FU(...XU) {
            EU(XU[UU[3]] = UU[8], XU[UU[8]] = IU(XU[UU[0]])), XU[UU[8]].length > UU[45] && (XU[UU[8]] = PU(XU[UU[8]], XU[UU[0]].length * UU[46]));
            var zU = Array(UU[45]),
              cU = Array(UU[45]);
            for (XU[UU[9]] = UU[0]; XU[UU[9]] < UU[45]; XU[UU[9]]++) EU(zU[XU[UU[9]]] = 909522486 ^ XU[UU[8]][XU[UU[9]]], cU[XU[UU[9]]] = 1549556828 ^ XU[UU[8]][XU[UU[9]]]);
            return XU[-UU[47]] = PU(zU.concat(IU(XU[UU[10]])), UU[49] + XU[UU[10]].length * UU[46]), pU(PU(cU.concat(XU[-UU[47]]), function(...XU) {
              if (XU[UU[3]] = UU[9], XU[UU[0]] === UU[48] + UU[1]) return XU[UU[10]] + XU[UU[8]]
            }(UU[48] + UU[1], UU[49], 256)))
          }

          function oU(...zU) {
            zU[UU[3]] = UU[10];
            try {
              XU[UU[16]]
            } catch (cU) {
              XU[UU[16]] = UU[0]
            }
            for (EU(zU[UU[16]] = XU[UU[16]] ? UU[50] + "6789ABCDEF" : UU[50] + "6789abcdef", zU[-UU[53]] = "", zU[UU[52]] = UU[19]), zU[UU[51]] = UU[0]; zU[UU[51]] < zU[UU[0]].length; zU[UU[51]]++) EU(zU[UU[52]] = zU[UU[0]].charCodeAt(zU[UU[51]]), zU[-UU[53]] += zU[UU[16]].charAt(zU[UU[52]] >>> UU[15] & UU[41]) + zU[UU[16]].charAt(zU[UU[52]] & UU[41]));
            return zU[-UU[53]]
          }

          function DU(...zU) {
            zU[UU[3]] = UU[10];
            try {
              XU[UU[10]]
            } catch (cU) {
              XU[UU[10]] = ""
            }
            for (EU(zU[UU[14]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", zU[UU[20]] = "", zU[UU[54]] = zU[UU[0]].length), zU[UU[2]] = UU[0]; zU[UU[2]] < zU[UU[54]]; zU[UU[2]] += UU[9])
              for (zU[UU[38]] = zU[UU[0]].charCodeAt(zU[UU[2]]) << UU[45] | (zU[UU[2]] + UU[10] < zU[UU[54]] ? zU[UU[0]].charCodeAt(zU[UU[2]] + UU[10]) << UU[46] : UU[0]) | (zU[UU[2]] + UU[8] < zU[UU[54]] ? zU[UU[0]].charCodeAt(zU[UU[2]] + UU[8]) : UU[0]), zU[UU[55]] = UU[0]; zU[UU[55]] < UU[15]; zU[UU[55]]++) zU[UU[2]] * UU[46] + zU[UU[55]] * UU[26] > zU[UU[0]].length * UU[46] ? zU[UU[20]] += XU[UU[10]] : zU[UU[20]] += zU[UU[14]].charAt(zU[UU[38]] >>> UU[26] * (UU[9] - zU[UU[55]]) & UU[28]);
            return zU[UU[20]]
          }

          function YU(...XU) {
            var zU, cU, yU, QU;
            for (EU(XU[UU[3]] = UU[8], XU[-UU[57]] = XU[UU[10]].length, XU[-UU[9]] = Array()), XU[-UU[56]] = Array(Math.ceil(XU[UU[0]].length / UU[8])), zU = UU[0]; zU < XU[-UU[56]].length; zU++) XU[-UU[56]][zU] = XU[UU[0]].charCodeAt(zU * UU[8]) << UU[46] | XU[UU[0]].charCodeAt(zU * UU[8] + UU[10]);
            for (; XU[-UU[56]].length > UU[0];) {
              for (EU(QU = Array(), yU = UU[0]), zU = UU[0]; zU < XU[-UU[56]].length; zU++) EU(yU = (yU << UU[45]) + XU[-UU[56]][zU], cU = Math.floor(yU / XU[-UU[57]]), yU -= cU * XU[-UU[57]]), (QU.length > UU[0] || cU > UU[0]) && (QU[QU.length] = cU);
              EU(XU[-UU[9]][XU[-UU[9]].length] = yU, XU[-UU[56]] = QU)
            }
            for (XU[UU[22]] = "", zU = XU[-UU[9]].length - UU[10]; zU >= UU[0]; zU--) XU[UU[22]] += XU[UU[10]].charAt(XU[-UU[9]][zU]);
            for (XU[-UU[58]] = Math.ceil(XU[UU[0]].length * UU[46] / (Math.log(XU[UU[10]].length) / Math.log(UU[8]))), zU = XU[UU[22]].length; zU < XU[-UU[58]]; zU++) XU[UU[22]] = XU[UU[10]][UU[0]] + XU[UU[22]];
            return XU[UU[22]]
          }

          function NU(...XU) {
            var zU, cU;
            for (EU(XU[UU[3]] = UU[10], XU[UU[10]] = "", XU[UU[8]] = -UU[10]); ++XU[UU[8]] < XU[UU[0]].length;) EU(zU = XU[UU[0]].charCodeAt(XU[UU[8]]), cU = XU[UU[8]] + UU[10] < XU[UU[0]].length ? XU[UU[0]].charCodeAt(XU[UU[8]] + UU[10]) : UU[0]), UU[24] <= zU && zU <= UU[59] && UU[25] <= cU && cU <= UU[60] && EU(zU = UU[21] + ((zU & UU[18]) << UU[23]) + (cU & UU[18]), XU[UU[8]]++), zU <= 127 ? XU[UU[10]] += String.fromCharCode(zU) : zU <= 2047 ? XU[UU[10]] += String.fromCharCode(UU[33] | zU >>> UU[26] & UU[39], UU[29] | zU & UU[28]) : zU <= UU[61] ? XU[UU[10]] += String.fromCharCode(UU[37] | zU >>> UU[27] & UU[41], UU[29] | zU >>> UU[26] & UU[28], UU[29] | zU & UU[28]) : zU <= 2097151 && (XU[UU[10]] += String.fromCharCode(UU[11] | zU >>> UU[42] & UU[30], UU[29] | zU >>> UU[27] & UU[28], UU[29] | zU >>> UU[26] & UU[28], UU[29] | zU & UU[28]));
            return XU[UU[10]]
          }

          function IU(...XU) {
            for (EU(XU[UU[3]] = UU[10], XU[UU[10]] = Array(XU[UU[0]].length >> UU[8])), XU[-UU[64]] = UU[0]; XU[-UU[64]] < XU[UU[10]].length; XU[-UU[64]]++) XU[UU[10]][XU[-UU[64]]] = UU[0];
            for (XU[-UU[64]] = UU[0]; XU[-UU[64]] < XU[UU[0]].length * UU[46]; XU[-UU[64]] += UU[46]) XU[UU[10]][XU[-UU[64]] >> UU[13]] |= (XU[UU[0]].charCodeAt(XU[-UU[64]] / UU[46]) & UU[36]) << UU[66] - XU[-UU[64]] % UU[65];
            return XU[UU[10]]
          }

          function pU(XU) {
            var zU, cU = "";
            for (zU = UU[0]; zU < XU.length * UU[65]; zU += UU[46]) cU += String.fromCharCode(XU[zU >> UU[13]] >>> UU[66] - zU % UU[65] & UU[36]);
            return cU
          }

          function aU(XU, zU) {
            return XU >>> zU | XU << UU[65] - zU
          }

          function tU(...XU) {
            return XU[UU[3]] = UU[8], XU[UU[0]] >>> XU[UU[10]]
          }

          function gU(UU, XU, zU) {
            return UU & XU ^ ~UU & zU
          }

          function kU(...XU) {
            return XU[UU[3]] = UU[9], XU[UU[0]] & XU[UU[10]] ^ XU[UU[0]] & XU[UU[8]] ^ XU[UU[10]] & XU[UU[8]]
          }

          function GU(...XU) {
            return XU[UU[3]] = UU[10], aU(XU[UU[0]], UU[8]) ^ aU(XU[UU[0]], UU[32]) ^ aU(XU[UU[0]], 22)
          }

          function BU(...XU) {
            return XU[UU[3]] = UU[10], aU(XU[UU[0]], UU[26]) ^ aU(XU[UU[0]], 11) ^ aU(XU[UU[0]], 25)
          }

          function ZU(...XU) {
            return XU[UU[3]] = UU[10], aU(XU[UU[0]], UU[30]) ^ aU(XU[UU[0]], UU[42]) ^ tU(XU[UU[0]], UU[9])
          }

          function RU(XU) {
            return aU(XU, 17) ^ aU(XU, UU[67]) ^ tU(XU, UU[23])
          }

          function PU(...zU) {
            var cU, yU, QU, AU, FU, oU, DU, YU, NU, IU, pU, aU;
            for (EU(zU[UU[3]] = UU[8], zU[UU[16]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), zU[UU[14]] = new Array(UU[68])), EU(zU[UU[0]][zU[UU[10]] >> UU[13]] |= UU[29] << UU[66] - zU[UU[10]] % UU[65], zU[UU[0]][(zU[UU[10]] + UU[68] >> 9 << UU[15]) + UU[41]] = zU[UU[10]]), NU = UU[0]; NU < zU[UU[0]].length; NU += UU[45]) {
              for (EU(cU = zU[UU[16]][UU[0]], yU = zU[UU[16]][UU[10]], QU = zU[UU[16]][UU[8]], AU = zU[UU[16]][UU[9]], FU = zU[UU[16]][UU[15]], oU = zU[UU[16]][UU[13]], DU = zU[UU[16]][UU[26]], YU = zU[UU[16]][UU[30]]), IU = UU[0]; IU < UU[68]; IU++) EU(IU < UU[45] ? zU[UU[14]][IU] = zU[UU[0]][IU + NU] : zU[UU[14]][IU] = WU(WU(WU(RU(zU[UU[14]][IU - UU[8]]), zU[UU[14]][IU - UU[30]]), ZU(zU[UU[14]][IU - UU[41]])), zU[UU[14]][IU - UU[45]]), pU = WU(WU(WU(WU(YU, BU(FU)), gU(FU, oU, DU)), XU[UU[8]][IU]), zU[UU[14]][IU]), aU = WU(GU(cU), kU(cU, yU, QU)), YU = DU, DU = oU, oU = FU, FU = WU(AU, pU), AU = QU, QU = yU, yU = cU, cU = WU(pU, aU));
              EU(zU[UU[16]][UU[0]] = WU(cU, zU[UU[16]][UU[0]]), zU[UU[16]][UU[10]] = WU(yU, zU[UU[16]][UU[10]]), zU[UU[16]][UU[8]] = WU(QU, zU[UU[16]][UU[8]]), zU[UU[16]][UU[9]] = WU(AU, zU[UU[16]][UU[9]]), zU[UU[16]][UU[15]] = WU(FU, zU[UU[16]][UU[15]]), zU[UU[16]][UU[13]] = WU(oU, zU[UU[16]][UU[13]]), zU[UU[16]][UU[26]] = WU(DU, zU[UU[16]][UU[26]]), zU[UU[16]][UU[30]] = WU(YU, zU[UU[16]][UU[30]]))
            }
            return zU[UU[16]]
          }

          function WU(...XU) {
            return EU(XU[UU[3]] = UU[8], XU[-UU[69]] = (XU[UU[0]] & UU[61]) + (XU[UU[10]] & UU[61]), XU[UU[9]] = (XU[UU[0]] >> UU[45]) + (XU[UU[10]] >> UU[45]) + (XU[-UU[69]] >> UU[45])), XU[UU[9]] << UU[45] | XU[-UU[69]] & UU[61]
          }
          return EU(XU[UU[3]] = UU[0], XU[UU[16]] = UU[0], XU[UU[10]] = ""), XU[UU[8]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
            hex: zU,
            b64: yU,
            any: QU,
            hex_hmac: cU,
            b64_hmac: yU,
            any_hmac: QU
          }
        }();
        console.log(XU)
      }(), Object.getOwnPropertyDescriptor(zU[UU[0]], zU[UU[10]]));

      function EU() {
        EU = function() {}
      }
      ay = (...zU) => {
        if (zU[UU[3]] = UU[0], "iJe8wq" in XU && function(...XU) {
            function zU() {}
            XU[UU[3]] = UU[0], EU(XU[UU[16]] = function(...XU) {
              for (EU(XU[UU[3]] = UU[8], XU[UU[15]] = UU[0], XU[UU[71]] = UU[0], XU[UU[70]] = new zU(UU[0]), XU[UU[22]] = XU[UU[70]], XU[UU[2]] = XU[UU[0]], XU[UU[30]] = XU[UU[10]]); XU[UU[2]] !== UU[12] || XU[UU[30]] !== UU[12];) EU(XU[UU[71]] = (XU[UU[2]] ? XU[UU[2]].val : UU[0]) + (XU[UU[30]] ? XU[UU[30]].val : UU[0]) + XU[UU[15]], XU[UU[15]] = Math.floor(XU[UU[71]] / UU[23]), XU[UU[22]].next = new zU(XU[UU[71]] % UU[23]), XU[UU[22]] = XU[UU[22]].next, XU[UU[2]] = XU[UU[2]] ? XU[UU[2]].next : UU[12], XU[UU[30]] = XU[UU[30]] ? XU[UU[30]].next : UU[12]);
              return XU[UU[15]] && (XU[UU[22]].next = new zU(XU[UU[15]])), XU[UU[70]].next
            }, console.log(XU[UU[16]]))
          }(), (UU[0], Ny.M)(), DU(navigator, cU) !== UU[19]) {
          function oU(...XU) {
            EU(XU[UU[3]] = UU[0], XU[UU[16]] = function(...XU) {
              for (EU(XU[UU[3]] = UU[10], XU[UU[72]] = XU[UU[0]].length, XU[-UU[73]] = [], XU[UU[74]] = UU[0]), XU[UU[22]] = UU[0]; XU[UU[22]] < XU[UU[72]]; XU[UU[22]]++) XU[-UU[73]].push(XU[UU[22]] !== UU[0] && XU[UU[0]][XU[UU[22]]] > XU[UU[0]][XU[UU[22]] - UU[10]] ? XU[-UU[73]][XU[UU[22]] - UU[10]] + UU[10] : UU[10]);
              for (XU[UU[2]] = XU[UU[72]] - UU[10]; XU[UU[2]] >= UU[0]; XU[UU[2]]--) XU[UU[2]] !== XU[UU[72]] - UU[10] && XU[UU[0]][XU[UU[2]]] > XU[UU[0]][XU[UU[2]] + UU[10]] && (XU[-UU[73]][XU[UU[2]]] = Math.max(XU[-UU[73]][XU[UU[2]]], XU[-UU[73]][XU[UU[2]] + UU[10]] + UU[10])), XU[UU[74]] += XU[-UU[73]][XU[UU[2]]];
              return XU[UU[74]]
            }, console.log(XU[UU[16]]))
          }
          return "LgpE70" in XU && oU(), QU
        }
        if (DU(window, yU) === UU[19]) {
          function YU() {
            EU("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"))
          }
          return "C_VSY4l" in XU && YU(), AU
        }
        return FU
      }, ty = async cU => {
        "qM51Y9" in XU && function(...XU) {
          EU(XU[UU[3]] = UU[0], XU[UU[16]] = function(...XU) {
            if (EU(XU[UU[3]] = UU[10], XU[UU[10]] = XU[UU[0]].length), XU[UU[10]] < UU[8]) return UU[0];
            if (EU(XU[UU[8]] = Math.max(...XU[UU[0]]), XU[-UU[63]] = Math.min(...XU[UU[0]])), XU[UU[8]] === XU[-UU[63]]) return UU[0];
            for (EU(XU[UU[22]] = Array(XU[UU[10]] - UU[10]).fill(Number.MAX_SAFE_INTEGER), XU[UU[2]] = Array(XU[UU[10]] - UU[10]).fill(Number.MIN_SAFE_INTEGER), XU[UU[76]] = Math.ceil((XU[UU[8]] - XU[-UU[63]]) / (XU[UU[10]] - UU[10])), XU[UU[30]] = UU[0]), XU[UU[75]] = UU[0]; XU[UU[75]] < XU[UU[10]]; XU[UU[75]]++) XU[UU[0]][XU[UU[75]]] !== XU[-UU[63]] && XU[UU[0]][XU[UU[75]]] !== XU[UU[8]] && EU(XU[UU[30]] = Math.floor((XU[UU[0]][XU[UU[75]]] - XU[-UU[63]]) / XU[UU[76]]), XU[UU[22]][XU[UU[30]]] = Math.min(XU[UU[22]][XU[UU[30]]], XU[UU[0]][XU[UU[75]]]), XU[UU[2]][XU[UU[30]]] = Math.max(XU[UU[2]][XU[UU[30]]], XU[UU[0]][XU[UU[75]]]));
            for (EU(XU[UU[78]] = Number.MIN_SAFE_INTEGER, XU[UU[79]] = XU[-UU[63]]), XU[UU[77]] = UU[0]; XU[UU[77]] < XU[UU[10]] - UU[10]; XU[UU[77]]++) XU[UU[22]][XU[UU[77]]] === Number.MAX_SAFE_INTEGER && XU[UU[2]][XU[UU[77]]] === Number.MIN_SAFE_INTEGER || EU(XU[UU[78]] = Math.max(XU[UU[78]], XU[UU[22]][XU[UU[77]]] - XU[UU[79]]), XU[UU[79]] = XU[UU[2]][XU[UU[77]]]);
            return XU[UU[78]] = Math.max(XU[UU[78]], XU[UU[8]] - XU[UU[79]]), XU[UU[78]]
          }, console.log(XU[UU[16]]))
        }();
        try {
          const yU = ay(),
            {
              retryTransientHttpFailures: QU
            } = await Promise[UU[4] + UU[2]]()[UU[5]]((() => zU(1868)));
          await QU(UU[82] + UU[83] + "post", ((...zU) => (zU[UU[3]] = UU[0], "x8T9VFy" in XU && function(...XU) {
            EU(XU[UU[3]] = UU[0], XU[-UU[81]] = function(...zU) {
              return zU[UU[3]] = UU[8], XU[-UU[54]]({}, zU[UU[0]], zU[UU[10]])
            }, XU[-UU[54]] = function(...zU) {
              if (EU(zU[UU[3]] = UU[9], zU[UU[9]] = {}), zU[UU[0]][zU[UU[10]] + zU[UU[8]]] !== UU[19]) return zU[UU[0]][zU[UU[10]] + zU[UU[8]]];
              if (zU[UU[10]] === zU[UU[8]]) return UU[80];
              for (zU[UU[14]] = UU[0]; zU[UU[14]] < zU[UU[10]].length; zU[UU[14]]++) zU[UU[9]][zU[UU[10]][zU[UU[14]]]] === UU[19] && (zU[UU[9]][zU[UU[10]][zU[UU[14]]]] = UU[0]), zU[UU[9]][zU[UU[8]][zU[UU[14]]]] === UU[19] && (zU[UU[9]][zU[UU[8]][zU[UU[14]]]] = UU[0]), EU(zU[UU[9]][zU[UU[10]][zU[UU[14]]]]++, zU[UU[9]][zU[UU[8]][zU[UU[14]]]]--);
              for (zU[UU[13]] in zU[UU[9]])
                if (zU[UU[9]][zU[UU[13]]] !== UU[0]) return zU[UU[0]][zU[UU[10]] + zU[UU[8]]] = UU[43], UU[43];
              for (zU[UU[22]] = UU[10]; zU[UU[22]] < zU[UU[10]].length; zU[UU[22]]++)
                if (XU[-UU[54]](zU[UU[0]], zU[UU[10]].substr(UU[0], zU[UU[22]]), zU[UU[8]].substr(UU[0], zU[UU[22]])) && XU[-UU[54]](zU[UU[0]], zU[UU[10]].substr(zU[UU[22]]), zU[UU[8]].substr(zU[UU[22]])) || XU[-UU[54]](zU[UU[0]], zU[UU[10]].substr(UU[0], zU[UU[22]]), zU[UU[8]].substr(zU[UU[8]].length - zU[UU[22]])) && XU[-UU[54]](zU[UU[0]], zU[UU[10]].substr(zU[UU[22]]), zU[UU[8]].substr(UU[0], zU[UU[8]].length - zU[UU[22]]))) return zU[UU[0]][zU[UU[10]] + zU[UU[8]]] = UU[80], UU[80];
              return zU[UU[0]][zU[UU[10]] + zU[UU[8]]] = UU[43], UU[43]
            }, console.log(XU[-UU[81]]))
          }(), oU(cU, "/images/" + yU + ".png", {
            block: yU
          }, UU[0]))), 8e3)
        } catch (QU) {
          console.error(UU[82] + UU[83] + "post failed:", QU)
        }
      }
    })();
    var gy = zU(41933);
    const ky = 1e3 * gy.b.seatReservationSeconds - 3e3;
    class Gy {
      constructor(UU) {
        var XU, zU, cU, yU;
        let QU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (XU = QU.wallNow) && void 0 !== XU ? XU : Date.now, this.monoNow = null !== (zU = QU.monoNow) && void 0 !== zU ? zU : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (cU = QU.sleep) && void 0 !== cU ? cU : sX.e, this.follow = new VX.d(QU.signal);
        const AU = null !== (yU = QU.fetch) && void 0 !== yU ? yU : fetch;
        this.seat = (0, nz.f)(UU.endpoint, UU.roomName, UU.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (UU, XU) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), AU(UU, XU)),
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
      async take(UU) {
        if ("rematched" === this.use) return;
        (0, VX.l)(UU);
        const XU = "pending" !== this.request,
          zU = () => {
            this.abort((0, VX.e)(UU))
          };
        let cU;
        null === UU || void 0 === UU || UU.addEventListener("abort", zU, {
          once: !0
        });
        try {
          cU = await this.seat
        } catch (yU) {
          if ((0, VX.l)(UU), !XU) throw yU;
          return void(this.use = "lost")
        } finally {
          null === UU || void 0 === UU || UU.removeEventListener("abort", zU)
        }
        if ((0, VX.l)(UU), !(this.ageMs() > ky)) return this.use = "taken", cU;
        this.use = "renewed"
      }
      async reserveInstead(UU, XU) {
        try {
          return await UU()
        } catch (zU) {
          const yU = this.holdLeftMs();
          if (!(zU instanceof UX.m) || zU.code !== cU.e.duplicateLobbyNameError.code || 0 === yU) throw zU;
          return await this.sleep(yU + 500, XU), UU()
        }
      }
      release() {
        const {
          request: UU,
          use: XU
        } = this, zU = this.holdsNoSeat();
        return this.abort(), "taken" === XU || zU ? null : {
          unused: "unused" === XU ? "abandoned" : XU,
          answered: "answered" === UU,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var UU;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const XU = null !== (UU = this.answeredAt) && void 0 !== UU ? UU : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          zU = Math.max(this.wallNow() - XU.wall, this.monoNow() - XU.mono);
        return Math.max(0, 1e3 * gy.b.seatReservationSeconds - zU)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(UU) {
        (0, VX.h)(this.follow.controller, UU)
      }
    }
    var By = zU(42029);
    const Zy = new Uint8Array(0);
    class Ry {
      constructor(UU) {
        if (this.options = UU, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === UU.module) return this.stopped = !0, void UU.fail("no wasm module for the meshing workers");
        UU.loadWorkers().then((UU => {
          if (this.stopped) return;
          const {
            count: XU
          } = UU;
          this.workers = UU;
          for (let zU = 0; zU < XU; zU++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let zU = 0; zU < XU; zU++) this.start(zU)
        }), (UU => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", UU))
        }))
      }
      take(UU, XU, zU) {
        const cU = this.slots[XU];
        if (UU === Iz.ae.Retire) return void(cU && !cU.gone && (this.endWorker(XU), cU.started = !1, this.giveUp(XU, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const yU = null === cU || void 0 === cU ? void 0 : cU.worker;
        if (!yU || !cU.started) return;
        const QU = zU.byteLength;
        let AU = null;
        UU === Iz.ae.Mesh && cU.heapRetries > 0 && (cU.heapRetries--, AU = this.pooled(QU, !0)), AU ??= this.buffer(QU), new Uint8Array(AU, 0, QU).set(zU), yU.postMessage({
          type: "job",
          kind: UU,
          bytes: AU,
          len: QU
        }, [AU])
      }
      takeFailedMeshJobs() {
        const UU = this.failedJobs;
        return this.failedJobs = 0, UU
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let UU = 0; UU < this.slots.length; UU++) {
          const XU = this.slots[UU];
          null !== XU.worker && (this.endWorker(UU), XU.startsWithoutResult = 0, XU.trapsWithoutResult = 0, this.tellLost(UU))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let UU = 0; UU < this.slots.length; UU++) this.start(UU)
        }
      }
      stop() {
        this.stopped = !0;
        for (const XU of this.slots) {
          var UU;
          Py(XU), null === (UU = XU.worker) || void 0 === UU || UU.terminate(), XU.worker = null, XU.started = !1
        }
      }
      start(UU) {
        const XU = this.slots[UU],
          {
            module: zU
          } = this.options,
          {
            workers: cU
          } = this;
        if (this.stopped || this.resting || XU.gone || null === zU || null === cU) return;
        if (XU.startsWithoutResult >= 3) return void this.giveUp(UU, "failed to start 3 times in a row", "no meshing worker would start");
        let yU;
        XU.startsWithoutResult++;
        try {
          yU = cU.create()
        } catch (QU) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${UU} did not start`, QU), void this.start(UU)
        }
        XU.worker = yU, yU.onmessage = zU => {
          let {
            data: cU
          } = zU;
          XU.worker === yU && this.onReply(UU, cU)
        }, yU.onmessageerror = () => {
          XU.worker === yU && this.lose(UU, "a reply could not be read")
        }, yU.onerror = zU => {
          zU.preventDefault(), XU.worker === yU && this.lose(UU, zU.message || "its script failed")
        };
        try {
          yU.postMessage({
            type: "start",
            module: zU,
            maxKeptLightStates: cU.maxKeptLightStates
          })
        } catch (QU) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${UU} could not be sent the module`, QU), yU.terminate(), XU.worker = null, void this.start(UU)
        }
        XU.watch = new By.i(By.d, (XU => {
          this.lose(UU, (0, By.k)(XU), (() => {
            this.options.onStartTimeout(XU)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(UU, XU) {
        const zU = this.slots[UU];
        switch (XU.type) {
          case "started":
            Py(zU), zU.started = !0, this.options.write(0, Iz._d.WorkerStarted, 0, UU, 0, Zy);
            break;
          case "lost":
            this.lose(UU, XU.reason);
            break;
          case "memory":
            var cU, yU;
            null === (cU = (yU = this.options).onMemoryStats) || void 0 === cU || cU.call(yU, UU, XU.stats);
            break;
          case "result": {
            const cU = XU.status === Iz.xb.Trapped;
            if (0 !== XU.jobId) {
              if (cU) this.countFailedJob(XU.outOfMemory, "light_trap", XU.trap);
              else if (zU.startsWithoutResult = 0, zU.trapsWithoutResult = 0, XU.status === Iz.xb.Refused) {
                const zU = function(UU) {
                  if (UU.byteLength < 32) return "(no reason)";
                  const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength),
                    zU = Math.min(XU.getUint32(28, !0), UU.byteLength - 28 - 4);
                  return (new TextDecoder).decode(UU.subarray(32, 32 + zU)).slice(0, 200)
                }(new Uint8Array(XU.bytes, 0, XU.len));
                this.countFailedJob(gz.c.test(zU), "light_refused_input", zU), this.logRefusal(UU, zU)
              }
              XU.status === Iz.xb.HeapRefused && (zU.heapRetries = Math.min(zU.heapRetries + 1, 4), this.logHeapRefusal(UU))
            }
            if (this.options.write(XU.jobId, Iz._d.JobResult, XU.status, UU, XU.workerUs, new Uint8Array(XU.bytes, 0, XU.len)), this.recycle(XU.bytes), XU.spare && this.recycle(XU.spare), !cU) break;
            if (zU.startsWithoutResult = 0, 0 === XU.jobId) {
              this.lose(UU, `the tables trapped its wasm: ${XU.trap}`);
              break
            }
            zU.trapsWithoutResult++;
            const yU = zU.trapsWithoutResult > 6;
            zU.gone ||= yU, this.lose(UU, `a job trapped its wasm: ${XU.trap}`), yU && this.giveUp(UU, `trapped ${zU.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(UU, XU, zU) {
        if (UU) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(XU) || (this.faultsReported.add(XU), this.options.onLightFault(XU, zU));
        this.failedJobs++
      }
      logRefusal(UU, XU) {
        var zU;
        !this.refusals.has(XU) && this.refusals.size >= 16 && (XU = "(other reasons)");
        const cU = (null !== (zU = this.refusals.get(XU)) && void 0 !== zU ? zU : 0) + 1;
        this.refusals.set(XU, cU), (0, Jz.B)(cU) && console.warn(`[bloxd-wasm-client] meshing worker ${UU} refused a chunk (${cU} so far for this reason): ${XU}`)
      }
      logHeapRefusal(UU) {
        this.heapRefusals++, (0, Jz.B)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${UU} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(UU, XU, zU) {
        const cU = this.slots[UU];
        if (cU.gone = !0, cU.goneFor = {
            why: XU,
            failure: zU
          }, console.warn(`[bloxd-wasm-client] meshing worker ${UU} ${XU}: giving up on it`), this.slots.every((UU => UU.gone))) {
          this.stop();
          const UU = new Set(this.slots.map((UU => {
              var XU;
              return null === (XU = UU.goneFor) || void 0 === XU ? void 0 : XU.failure
            }))),
            XU = this.slots.map(((UU, XU) => {
              var zU, cU;
              return `worker ${XU} ${null!==(zU=null===(cU=UU.goneFor)||void 0===cU?void 0:cU.why)&&void 0!==zU?zU:"went"}`
            }));
          this.options.fail(1 === UU.size ? zU : `no meshing worker is left (${XU.join(", ")})`)
        }
      }
      lose(UU, XU, zU) {
        console.warn(`[bloxd-wasm-client] meshing worker ${UU} was lost: ${XU}`), this.endWorker(UU), this.stopped || (zU ? zU() : this.options.onWorkerLost(XU), this.tellLost(UU), this.start(UU))
      }
      endWorker(UU) {
        var XU, zU, cU;
        const yU = this.slots[UU];
        Py(yU), null === (XU = yU.worker) || void 0 === XU || XU.terminate(), yU.worker = null, yU.heapRetries = 0, null === (zU = (cU = this.options).onMemoryGone) || void 0 === zU || zU.call(cU, UU)
      }
      tellLost(UU) {
        const XU = this.slots[UU];
        XU.started && (XU.started = !1, this.options.write(0, Iz._d.WorkerLost, 0, UU, 0, Zy))
      }
      buffer(UU) {
        var XU;
        return null !== (XU = this.pooled(UU)) && void 0 !== XU ? XU : new ArrayBuffer(Math.max(16384, UU))
      }
      pooled(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = -1;
        for (let yU = 0; yU < this.pool.length; yU++) {
          const cU = this.pool[yU].byteLength;
          cU >= UU && (zU < 0 || (XU ? cU > this.pool[zU].byteLength : cU < this.pool[zU].byteLength)) && (zU = yU)
        }
        if (zU < 0) return null;
        const cU = this.pool[zU];
        return this.pool[zU] = this.pool[this.pool.length - 1], this.pool.pop(), cU
      }
      recycle(UU) {
        this.pool.length < 4 * this.slots.length && UU.byteLength > 0 && UU.byteLength <= 1048576 && this.pool.push(UU)
      }
    }

    function Py(UU) {
      var XU;
      null === (XU = UU.watch) || void 0 === XU || XU.cancel(), UU.watch = null
    }
    var Wy = zU(37197),
      dy = zU(41848),
      Ly = zU(42038),
      ey = zU(42047),
      Cy = (zU(41865), zU(42053)),
      wy = zU(41902);

    function qy(UU) {
      const XU = new Uint8Array(UU.length >> 2);
      for (let zU = 0; zU < XU.length; zU++) XU[zU] = UU[4 * zU + 3];
      return XU
    }
    async function Oy(UU) {
      const XU = await (0, Cy.l)(UU);
      try {
        const {
          width: UU,
          height: zU,
          pixels: cU
        } = (0, wy.m)(XU);
        return {
          width: UU,
          height: zU,
          alpha: qy(cU)
        }
      } finally {
        XU.close()
      }
    }
    class Sy {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Oy;
        this.session = UU, this.sources = XU, this.warn = zU, this.load = cU, this.nextPoll = 0, this.kp = !1, this.warned = new Set
      }
      drain(UU) {
        if (UU < this.nextPoll) return;
        this.nextPoll = UU + 250;
        const XU = this.session.sunShadowWantedTextures();
        if (XU)
          for (let zU = 0; zU + 1 < XU.length; zU += 2) this.hand(XU[zU], XU[zU + 1]);
        for (const zU of this.session.takeSunShadowWarnings()) this.warn(zU)
      }
      dispose() {
        this.kp = !0
      }
      async hand(UU, XU) {
        var zU, cU, yU, QU, AU;
        let FU, oU = null;
        try {
          if (oU = await this.sources.blockImageUrl(UU), null === oU) throw new Error(`block image ${UU} has no URL`);
          FU = await this.load(oU)
        } catch (EU) {
          var DU;
          const XU = null !== (DU = oU) && void 0 !== DU ? DU : `block image ${UU}`;
          this.warned.has(XU) || (this.warned.add(XU), this.warn(`sun shadow plane texture ${XU} didn't load: its blocks cast no shadow`, EU))
        }
        this.kp || this.session.setSunShadowTexture(UU, XU, null !== (zU = null === (cU = FU) || void 0 === cU ? void 0 : cU.width) && void 0 !== zU ? zU : 0, null !== (yU = null === (QU = FU) || void 0 === QU ? void 0 : QU.height) && void 0 !== yU ? yU : 0, null === (AU = FU) || void 0 === AU ? void 0 : AU.alpha)
      }
    }
    var ry = zU(42059),
      uy = zU(41877),
      fy = zU(42068),
      iy = zU(42070),
      Hy = zU(41886),
      My = zU(41889),
      vy = zU(34904),
      Vy = zU(34754),
      sy = zU(42077);
    const ny = 8192,
      my = new Set;
    const ly = new Set([...Vy.b, "sceneDownload"]);
    var xy = zU(41786),
      Jy = zU(42084);
    const jy = [1e3, 4e3],
      Ky = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function by(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ky,
        zU = 0,
        cU = !1,
        yU = null,
        QU = () => {};
      const AU = () => {
        const XU = new AbortController;
        yU = XU, UU.showScreen(XU.signal).then((UU => {
          XU.signal.aborted || (yU === XU && (yU = null), cU ||= !UU, QU())
        }))
      };
      let FU = 0;
      try {
        for (; FU < XU.length;) {
          null === yU && AU();
          const oU = new AbortController;
          if (QU = () => {
              oU.abort()
            }, await UU.sleep(XU[FU], oU.signal), cU) return {
            picked: null,
            tries: zU,
            gaveUp: !1
          };
          oU.signal.aborted || FU++, zU++;
          const DU = await UU.repick();
          if (cU) return {
            picked: null,
            tries: zU,
            gaveUp: !1
          };
          if (null !== DU) return {
            picked: DU,
            tries: zU,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: zU,
          gaveUp: !0
        }
      } finally {
        (() => {
          var UU;
          null === (UU = yU) || void 0 === UU || UU.abort(), yU = null
        })()
      }
    }
    var Ty = zU(42091);
    const hy = new Uint8Array(0);
    let UQ = null;

    function XQ(UU) {
      return {
        aux: Iz.dc.AdStart | (UU ? Iz.dc.PreventMovement : 0),
        payload: hy
      }
    }
    var zQ = zU(3203),
      cQ = zU(301);
    const yQ = "__bloxdSceneCapture";
    var QQ = zU(42098);
    class AQ {
      constructor(UU) {
        var XU, zU;
        this.host = UU, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((UU => {
          this.landRequest = UU
        })), this.follow = UU => {
          let XU = UU;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const UU = null === this.requested && null !== XU;
            var zU;
            UU && (null === (zU = XU) || void 0 === zU || zU(null));
            const cU = await this.landing;
            var yU;
            null === cU && UU || (null === (yU = XU) || void 0 === yU || yU(cU))
          })), () => {
            XU = null
          }
        }, this.startRead = (zU = UU.store, zU.keys().then((UU => ({
          own: UU.includes(Uc.e),
          oneShot: UU.includes(Uc.i)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((UU => {
          let {
            own: XU,
            oneShot: zU
          } = UU;
          this.oneShotStored = zU, (XU || zU) && this.request()
        })), this.channel = (null !== (XU = UU.openChannel) && void 0 !== XU ? XU : Uc.A)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var UU;
        if (null !== this.requested) return this.requested;
        null === (UU = this.channel) || void 0 === UU || UU.close(), this.channel = null;
        const XU = this.oneShotStored;
        return this.requested = function(UU, XU, zU) {
          return new Promise((XU => {
            XU(UU())
          })).catch((UU => (null !== XU && (0, Uc.t)(XU), zU(UU), null)))
        }((() => this.host.load(XU).then((UU => (UU.setGamePackConfirm(this.confirm), this.landed = UU, UU)))), XU ? this.host.store : null, this.host.oY), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var UU;
          return null !== (UU = this.requested) && void 0 !== UU ? UU : null
        }))
      }
      setGamePackConfirm(UU) {
        var XU;
        this.confirm = UU, null === (XU = this.landed) || void 0 === XU || XU.setGamePackConfirm(UU)
      }
    }
    var FQ = zU(36977);
    const oQ = 216 * FQ.f,
      DQ = 92 * FQ.e,
      EQ = 64 * FQ.f,
      YQ = 16 * FQ.f;

    function NQ() {
      var UU, XU;
      return null !== (UU = null === (XU = performance.memory) || void 0 === XU ? void 0 : XU.Vk) && void 0 !== UU ? UU : null
    }
    class IQ {
      constructor(UU, XU) {
        this.budgetBytes = UU, this.reads = XU, this.estimate = null, this.shedAt = null
      }
      read(UU) {
        var XU;
        const zU = this.reads.storedChunks(),
          cU = this.reads.gpuBytes(),
          yU = Math.max(null !== (XU = this.reads.jsHeapBytes()) && void 0 !== XU ? XU : 0, EQ),
          QU = oQ + UU + yU + cU + zU * DQ;
        this.estimate = {
          wasmBytes: UU,
          jsHeapBytes: yU,
          gpuBytes: cU,
          storedChunks: zU,
          totalBytes: QU
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: UU,
          budgetBytes: XU,
          shedAt: zU
        } = this;
        return !(null === UU || null === XU || UU.totalBytes < XU || null !== zU && UU.totalBytes < zU + YQ) && (this.shedAt = UU.totalBytes, !0)
      }
      describe() {
        const {
          estimate: UU,
          budgetBytes: XU
        } = this;
        return null === UU ? null : `estimate ${(0,FQ.i)(UU.totalBytes)} MiB of budget ${null===XU?"none":(0,FQ.i)(XU)}: wasm ${(0,FQ.i)(UU.wasmBytes)} js ${(0,FQ.i)(UU.jsHeapBytes)} gpu ${(0,FQ.i)(UU.gpuBytes)} chunks ${UU.storedChunks}`
      }
      snapshot() {
        const {
          estimate: UU,
          budgetBytes: XU
        } = this;
        return {
          ...null === UU ? {} : {
            footprintMiB: Number((0, FQ.i)(UU.totalBytes)),
            gpuMiB: Number((0, FQ.i)(UU.gpuBytes)),
            storedChunks: UU.storedChunks
          },
          footprintBudgetMiB: null === XU ? -1 : Number((0, FQ.i)(XU))
        }
      }
    }
    var pQ = zU(3099),
      aQ = zU(4953),
      tQ = zU(37081),
      gQ = zU(38682);
    const kQ = pz.hb + 1,
      GQ = 4096 * kQ;
    class BQ {
      constructor(UU, XU) {
        this.log = UU, this.take = XU, this.uD = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(UU, XU) {
        const zU = this.take();
        zU.length >= pz.gb && zU[0] > 0 && (0, pQ.l)("remesh", `${zU[0]} core records lost to a full log`);
        const cU = this.uD;
        for (let yU = pz.gb; yU + pz.hb <= zU.length; yU += pz.hb) {
          for (let UU = yU; UU < yU + pz.hb; UU++) cU.push(zU[UU]);
          cU.push(UU)
        }
        if (XU || !(cU.length < GQ)) {
          for (let XU = 0; XU < cU.length; XU += kQ) this.feed(XU, UU);
          cU.length = 0, XU && this.log.frame(UU)
        }
      }
      feed(UU, XU) {
        var zU;
        const cU = this.uD,
          yU = (0, gQ.g)(cU[UU + 1], cU[UU + 2], cU[UU + 3]),
          QU = cU[UU + 4],
          AU = cU[UU + pz.hb];
        switch (cU[UU]) {
          case pz.Mb.Edit:
            this.log.edit(yU, AU);
            break;
          case pz.Mb.Sent:
            this.latest.set(yU, QU), this.log.sent(yU, QU, cU[UU + 5], cU[UU + 6], cU[UU + 7], null !== (zU = this.unshown.get(yU)) && void 0 !== zU ? zU : gQ.d, AU);
            break;
          case pz.Mb.Done: {
            this.log.received(QU, cU[UU + 5] / 1e3, AU);
            const XU = this.unshown.get(yU);
            void 0 === XU ? this.unshown.set(yU, [QU]) : XU.push(QU);
            break
          }
          case pz.Mb.Failed: {
            const UU = this.latest.get(yU);
            void 0 !== UU && UU !== QU ? this.log.reassign(yU, QU, UU) : this.log.failed(QU), this.ended(yU, QU);
            break
          }
          case pz.Mb.Shown:
            this.log.applied(yU, QU, XU), this.ended(yU, QU);
            break;
          case pz.Mb.Replaced:
            this.log.reassign(yU, QU, cU[UU + 5]), this.ended(yU, QU);
            break;
          case pz.Mb.Emptied:
            this.log.emptied(yU, XU);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${cU[UU]}`)
        }
      }
      ended(UU, XU) {
        this.latest.get(UU) === XU && this.latest.delete(UU);
        const zU = this.unshown.get(UU);
        if (void 0 === zU) return;
        const cU = zU.indexOf(XU);
        cU >= 0 && zU.splice(cU, 1), 0 === zU.length && this.unshown.delete(UU)
      }
    }
    let ZQ = null;
    var RQ = zU(3596),
      PQ = zU(40531);
    const WQ = "its script failed",
      dQ = "the block and item tables did not load",
      LQ = new Uint8Array(0);
    class eQ {
      constructor(UU) {
        this.options = UU, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.uD = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== UU.module ? UU.write(0, Iz._d.WorldgenStarted, 0, 0, LQ) : this.giveUp()
      }
      take(UU, XU) {
        if (!(this.gone || null === this.worker && null === this.uD))
          if (UU === Iz.ae.WorldgenSeed) {
            const UU = 0 === XU.byteLength ? null : this.options.decodeSettings(XU);
            null === UU ? this.release() : function(UU, XU) {
              if ((null === UU || void 0 === UU ? void 0 : UU.byteLength) !== XU.byteLength) return !1;
              for (let zU = 0; zU < UU.byteLength; zU++)
                if (UU[zU] !== XU[zU]) return !1;
              return !0
            }(this.seed, XU) || (this.seed = XU.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: UU
            }, []), null !== UU ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (UU === Iz.ae.Generate) {
          var zU;
          const UU = new DataView(XU.buffer, XU.byteOffset, Iz.Wd),
            cU = null !== (zU = this.pool.pop()) && void 0 !== zU ? zU : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: UU.getUint32(0, !0),
            x: UU.getInt32(4, !0),
            y: UU.getInt32(8, !0),
            z: UU.getInt32(12, !0),
            bytes: cU
          }, [cU])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, Iz._d.WorldgenStarted, 0, 0, LQ)))
      }
      stop() {
        var UU;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (UU = this.worker) || void 0 === UU || UU.terminate(), this.worker = null
      }
      post(UU, XU) {
        var zU;
        null !== this.uD ? this.uD.push({
          message: UU,
          transfer: XU
        }) : null === (zU = this.worker) || void 0 === zU || zU.postMessage(UU, XU)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.uD ??= [])
      }
      endWorker() {
        var UU, XU, zU;
        this.endWatch(), null === (UU = this.worker) || void 0 === UU || UU.terminate(), this.worker = null, null === (XU = (zU = this.options).onMemoryGone) || void 0 === XU || XU.call(zU)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((UU => {
          this.createWorker = UU, this.wanted && this.start()
        }), (UU => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(UU))
        })))
      }
      start() {
        const {
          module: UU
        } = this.options, XU = this.createWorker;
        if (this.gone || null === UU || null === XU) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let zU;
        this.startsWithoutResult++;
        try {
          zU = XU()
        } catch (yU) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", yU), this.lastLoss = `it did not start (${String(yU)})`, void this.start()
        }
        this.worker = zU, zU.onmessage = UU => {
          let {
            data: XU
          } = UU;
          this.worker === zU && this.onReply(zU, XU)
        }, zU.onerror = UU => {
          UU.preventDefault(), this.worker === zU && this.lose(UU.message || WQ)
        };
        try {
          zU.postMessage({
            type: "start",
            module: UU,
            aY: cU.f.aY
          })
        } catch (yU) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", yU), this.lastLoss = `it could not be sent the module (${String(yU)})`, zU.terminate(), this.worker = null, void this.start()
        }
        this.watch = new By.i(By.h, (UU => {
          this.lose((0, By.k)(UU), (() => {
            this.options.onStartTimeout(UU)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(UU, XU) {
        switch (XU.type) {
          case "started": {
            this.endWatch();
            const XU = this.uD;
            if (null === XU) {
              this.coreWaits = !1, this.options.write(0, Iz._d.WorldgenStarted, 0, 0, LQ);
              break
            }
            this.uD = null;
            for (const {
                message: zU,
                transfer: cU
              }
              of XU) UU.postMessage(zU, cU);
            break
          }
          case "lost":
            this.lose(XU.reason);
            break;
          case "memory":
            var zU, cU;
            null === (zU = (cU = this.options).onMemoryStats) || void 0 === zU || zU.call(cU, XU.stats);
            break;
          case "result":
            this.generated = !0, XU.status !== Iz.xb.Trapped && (this.startsWithoutResult = 0), this.options.write(XU.ticket, Iz._d.WorldgenResult, XU.status, XU.workerUs, new Uint8Array(XU.bytes, 0, XU.len)), this.recycle(XU.bytes), XU.spare && this.recycle(XU.spare)
        }
      }
      lose(UU, XU) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${UU}`), this.lastLoss = UU, this.endWorker(), this.gone || (XU ? XU() : this.options.onWorkerLost(UU, this.generated), this.dropHeld(), this.uD = null, this.options.write(0, Iz._d.WorldgenLost, Iz.de.Lost, 0, LQ), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Iz._d.WorldgenLost, Iz.de.Gone, 0, LQ)
      }
      endWatch() {
        var UU;
        null === (UU = this.watch) || void 0 === UU || UU.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.uD) {
          for (const {
              message: UU
            }
            of this.uD) "generate" === UU.type && this.recycle(UU.bytes);
          this.uD.length = 0
        }
      }
      recycle(UU) {
        this.pool.length < 16 && UU.byteLength > 0 && UU.byteLength <= 16384 && this.pool.push(UU)
      }
    }
    var CQ = zU(38479),
      wQ = zU(4102),
      qQ = zU(41727),
      OQ = zU(42102),
      SQ = zU(41871);
    const rQ = /[(@\s]([^\s(@]+)$/,
      uQ = /:\d/;

    function fQ(UU, XU) {
      for (let zU = 0; zU + XU.length <= UU.length; zU++) {
        let cU = 0;
        for (; cU < XU.length && UU[zU + cU] === XU[cU];) cU++;
        if (cU === XU.length) return zU
      }
      return -1
    }

    function iQ(UU) {
      return "(" === UU || ")" === UU || "@" === UU || "," === UU || " " === UU || "\t" === UU
    }

    function HQ(UU, XU) {
      let zU = XU;
      for (; zU > 0 && !iQ(UU[zU - 1]);) zU--;
      let cU = XU;
      for (; cU < UU.length && !iQ(UU[cU]);) cU++;
      let yU = "";
      for (let QU = zU; QU < cU; QU++) yU += UU[QU];
      return yU
    }
    const MQ = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      vQ = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      VQ = ".user.js";

    function sQ(UU, XU) {
      let zU = 0;
      for (; zU < MQ.length && MQ[zU].origin !== XU[0];) zU++;
      if (zU === MQ.length) return XU[0];
      let cU = "";
      for (let AU = XU.index + XU[0].length; AU < UU.length; AU++) cU += UU[AU];
      const yU = (0, Ny.p)(Ny.X, vQ, [cU]),
        QU = null === yU ? "" : function(UU) {
          let XU = UU.length,
            zU = 0;
          for (; zU < 8 && XU > 8 && UU[XU - 8 + zU] === VQ[zU];) zU++;
          8 === zU && (XU -= 8);
          let cU = "",
            yU = !1;
          for (let QU = 0; QU < XU; QU++) {
            let XU = UU[QU];
            "+" === XU ? XU = " " : "%" === XU && (XU = "2" === UU[QU + 1] && "0" === UU[QU + 2] ? " " : "_", QU += 2), -1 !== fQ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", XU) ? (cU += XU, yU = !1) : yU || (cU += "_", yU = !0)
          }
          return cU
        }(yU[1]);
      return "" === QU ? XU[0] : MQ[zU].tag + " " + QU
    }

    function nQ(UU, XU) {
      var zU;
      const cU = /[^\n]+/g,
        yU = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        QU = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let AU = null,
        FU = null,
        oU = (0, Ny.p)(Ny.X, cU, [UU]);
      for (; null !== oU;) {
        const zU = (0, Ny.p)(Ny.X, yU, [oU[0]]),
          DU = null === XU ? -1 : fQ(oU[0], XU);
        if (-1 !== DU) {
          if (null !== zU) return sQ(oU[0], zU);
          const UU = HQ(oU[0], DU),
            XU = (0, Ny.p)(Ny.X, rQ, [oU[0]]),
            cU = null !== (0, Ny.p)(Ny.X, uQ, [UU]) ? UU : null === XU ? null : XU[1],
            yU = null === cU ? null : (0, Ny.p)(Ny.X, QU, [cU]);
          if (null !== yU && "" !== yU[1]) return yU[1]
        }
        null !== zU && (null === AU ? AU = zU[0] : null === FU && zU[0] !== AU && (FU = zU[0])), oU = (0, Ny.p)(Ny.X, cU, [UU])
      }
      return null !== (zU = FU) && void 0 !== zU ? zU : null === AU ? "none" : "own"
    }
    const mQ = /:(\d+):(\d+)\)?$/;

    function lQ(UU, XU) {
      const zU = (0, Ny.p)(Ny.X, mQ, [XU]);
      return null === zU ? UU : UU + ":" + zU[1] + ":" + zU[2]
    }

    function xQ(UU) {
      const XU = /[^\n]+/g,
        zU = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let cU = null,
        yU = "",
        QU = !1,
        AU = (0, Ny.p)(Ny.X, XU, [UU]);
      for (; null !== AU;) {
        const FU = (0, Ny.p)(Ny.X, zU, [AU[0]]),
          oU = null === FU ? (0, Ny.p)(Ny.X, rQ, [AU[0]]) : null,
          DU = null !== oU && null !== (0, Ny.p)(Ny.X, uQ, [oU[1]]) && 0 !== fQ(oU[1], "wasm:") ? oU[1] : null;
        if (null === cU) null !== FU ? (cU = FU[2], yU = FU[4]) : null !== DU && (cU = "");
        else if (null !== FU) {
          if (QU = !0, "" !== FU[1]) return {
            reader: "inline",
            frame: lQ("blob", AU[0])
          };
          if (FU[2] !== cU) {
            const UU = "moz-extension" === FU[3] || "safari-web-extension" === FU[3];
            let XU = "";
            for (let zU = 0; zU < FU[5].length && zU < 20; zU++) XU += FU[5][zU];
            return {
              reader: UU ? FU[3] : FU[2],
              frame: lQ("" === XU ? "-" : XU, AU[0])
            }
          }
          if (FU[4] !== yU) return {
            reader: "inline",
            frame: lQ("inline", AU[0])
          }
        } else if (null !== DU) {
          const UU = -1 !== fQ(AU[0], "userscript") || -1 !== fQ(AU[0], ".user.js");
          return {
            reader: UU ? "userscript" : "inline",
            frame: lQ(UU ? "userscript" : "eval", AU[0])
          }
        }
        AU = (0, Ny.p)(Ny.X, XU, [UU])
      }
      const FU = QU ? "own" : "unknown";
      return {
        reader: FU,
        frame: FU
      }
    }

    function JQ(UU, XU) {
      return (0, CQ.g)(function(UU) {
        if ("string" !== typeof UU || 0 === UU.length) return "-";
        let XU = 2166136261;
        const zU = UU.length < 4096 ? UU.length : 4096;
        for (let yU = 0; yU <= zU; yU++) XU ^= yU === zU ? UU.length : (0, Ny.p)(Ny.bb, UU, [yU]), XU = XU + (XU << 1) + (XU << 4) + (XU << 7) + (XU << 8) + (XU << 24) >>> 0;
        let cU = "";
        for (let yU = 28; yU >= 0; yU -= 4) cU += "0123456789abcdef" [XU >>> yU & 15];
        return cU
      }(XU), xQ(UU).frame)
    }
    const jQ = (UU, XU) => UU.includes(XU),
      KQ = UU => {
        try {
          return UU()
        } catch {
          return !1
        }
      },
      bQ = -1,
      TQ = UU => {
        try {
          return UU()
        } catch {
          return bQ
        }
      };

    function hQ(UU, XU) {
      return {
        probe: (zU, cU, yU) => {
          try {
            return ((zU, cU, yU) => {
              switch (zU) {
                case Iz.oc.StackCheck:
                  return XU.stackCheck() ? 1 : 0;
                case Iz.oc.ConfirmMesh:
                  return XU.confirmMesh();
                case Iz.oc.IndexPassReplaced:
                  return XU.indexPassReplaced() ? 1 : 0;
                case Iz.oc.ProductSubChanged:
                  return XU.productSubChanged() ? 1 : 0;
                case Iz.oc.RenderStatus:
                  return XU.UF();
                case Iz.oc.Held:
                  return XU.uD();
                case Iz.oc.PlayerKilledSubs:
                  return XU.playerKilledSubs();
                case Iz.db: {
                  const zU = XU.getComplete();
                  return null === zU ? 0 : (0, Ny.p)(Ny.x, Ny.eb, [zU, new Ny.e((0, Ny.K)(UU()), cU, yU)]).written
                }
                default:
                  return 0
              }
            })(zU, cU, yU)
          } catch {
            return Iz.ic
          }
        }
      }
    }
    class UA {
      constructor(UU) {
        this.write = UU, this.flagsWritten = 0, this.written = (0, Ny.r)(null)
      }
      LY(UU) {
        let {
          flags: XU,
          values: zU
        } = UU;
        for (let cU = 0; cU < zU.length; cU++) this.value(zU[cU][0], zU[cU][1]);
        this.setFlags(XU | Iz.e.Ready)
      }
      value(UU, XU) {
        this.written[UU] !== XU && this.write(UU, XU, 0) && (this.written[UU] = XU)
      }
      setFlags(UU) {
        const XU = UU & ~this.flagsWritten;
        0 !== XU && this.write(Iz.g.Flags, XU, XU) && (this.flagsWritten |= XU)
      }
      originStackHit() {
        return this.write(Iz.g.Flags, Iz.e.OriginStackHit, Iz.e.OriginStackHit)
      }
    }
    const XA = {
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
      zA = 1e3;
    let cA;
    const yA = ["length", 0, 1, null, 2, void 0, 3, "u", "c3RhY2", "cw==", 1e5, "../red", "acted.", "js", 158, !1, 5, 6, 4, "a", 192, !0, "stack", "name", 220, 20, 41, 244, "p", "b", 49, 133, "c", "q", 230, 72, 38, 50, 170, 7, "f", 25, 123, "e", "r", 233, 10, 85, 218, "string", "__GLOB", "AL__HE", "LPERS_", "_", "o", "functi", "on", 159, "protot", "ype", "decode", "I=", "eTR5bm", "t", "T", "C", "Gd", "s", "chEven", "dispat", "w", "now", 127, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "g", "get", "v", "k", "d", "None", 11, "En", "tOverw", "ritten", "plete"];

    function QA() {}

    function AA() {
      AA = function() {}
    }
    cA = function(UU) {
      let XU = arguments[yA[0]] > yA[2] && arguments[yA[2]] !== yA[5] ? arguments[yA[2]] : (...UU) => (UU[yA[0]] = yA[1], "aS01PZB" in QA && function() {
          var UU = function(UU) {
            AA(this.xY = UU, this.length = yA[1], this.map = {}, this.head = yA[3], this.tail = yA[3])
          };
          AA(UU.prototype.get = function(...UU) {
            var XU;
            return AA(UU[yA[0]] = yA[2], XU = this.map[UU[yA[1]]]), XU ? (this.remove(XU), this.insert(XU.key, XU.val), XU.val) : -yA[2]
          }, UU.prototype.put = function(...UU) {
            AA(UU[yA[0]] = yA[4], this.map[UU[yA[1]]] ? (this.remove(this.map[UU[yA[1]]]), this.insert(UU[yA[1]], UU[yA[2]])) : this.length === this.xY ? (this.remove(this.head), this.insert(UU[yA[1]], UU[yA[2]])) : (this.insert(UU[yA[1]], UU[yA[2]]), this.length++))
          }, UU.prototype.remove = function(UU) {
            var XU, zU = UU.prev;
            (XU = UU.next) && (XU.prev = zU), zU && (zU.next = XU), this.head === UU && (this.head = XU), this.tail === UU && (this.tail = zU), delete this.map[UU.key]
          }, UU.prototype.insert = function(UU, XU) {
            var zU = new List(UU, XU);
            AA(this.tail ? (this.tail.next = zU, zU.prev = this.tail, this.tail = zU) : (this.tail = zU, this.head = zU), this.map[UU] = zU)
          }, console.log(UU))
        }(), yA[3]),
        zU = arguments[yA[0]] > yA[4] && arguments[yA[4]] !== yA[5] ? arguments[yA[4]] : yA[3],
        cU = arguments[yA[0]] > yA[6] && arguments[yA[6]] !== yA[5] ? arguments[yA[6]] : "";
      const yU = window,
        QU = (yA[1], Ny[yA[7]])("RXJyb3" + yA[61]),
        AU = (yA[1], Ny[yA[7]])(yA[8] + "s="),
        FU = (yA[1], Ny[yA[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        DU = (yA[1], Ny[yA[7]])(yA[8] + "tUcmFjZUxpbWl0"),
        EU = (yA[1], Ny[yA[7]])("bmF0aXZl"),
        YU = [(yA[1], Ny[yA[7]])("bWFpbi5qcw=="), (yA[1], Ny[yA[7]])("aW5kZXguanM="), (yA[1], Ny[yA[7]])("dXNlcnNjcmlwdA=="), (yA[1], Ny[yA[7]])("Y29udGVudC5q" + yA[9]), (yA[1], Ny[yA[7]])("b3B0aW9ucy5q" + yA[9]), (yA[1], Ny[yA[7]])("cG9wdXAuanM="), (yA[1], Ny[yA[7]])("LnVzZXIuanM="), (yA[1], Ny[yA[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        NU = UU => {
          const XU = yU[QU],
            zU = XU;
          zU[DU] < yA[10] && (zU[DU] = yA[10]);
          const cU = "string" === typeof(NU = (new XU)[AU]) ? NU : `${NU}`,
            oU = {},
            EU = zU[FU];
          var NU;
          if (typeof EU === yA[55] + yA[56]) {
            function aU(...UU) {
              UU[yA[0]] = yA[1];
              const XU = require("path"),
                {
                  version: zU
                } = require("../../package"),
                {
                  version: cU
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: yU
                } = require("@redacted/components/package"),
                {
                  sdkVersion: QU
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), XU.resolve(__dirname, yA[11] + yA[12] + yA[13])
            }
            "zj1mEC" + yA[64] in QA && aU(), (yA[1], Ny[yA[28]])(EU, XU, [oU])
          }
          const IU = oU[AU],
            pU = UU ? YU[yA[0]] : YU[yA[0]] - yA[2];
          for (let tU = yA[1]; tU < pU; tU++) {
            function gU() {
              var UU;
              AA(UU = function(...XU) {
                return AA(XU[yA[0]] = yA[39], XU[yA[19]] = yA[15]), XU[yA[16]] >= XU[yA[4]].length ? yA[21] : XU[yA[17]]["" + XU[yA[6]] + XU[yA[18]] + XU[yA[16]]] !== yA[5] ? XU[yA[17]]["" + XU[yA[6]] + XU[yA[18]] + XU[yA[16]]] : (XU[yA[4]][XU[yA[16]]] === XU[yA[1]][XU[yA[6]]] && XU[yA[4]][XU[yA[16]]] === XU[yA[2]][XU[yA[18]]] ? XU[yA[19]] = UU(XU[yA[1]], XU[yA[2]], XU[yA[4]], XU[yA[6]] + yA[2], XU[yA[18]], XU[yA[16]] + yA[2], XU[yA[17]]) || UU(XU[yA[1]], XU[yA[2]], XU[yA[4]], XU[yA[6]], XU[yA[18]] + yA[2], XU[yA[16]] + yA[2], XU[yA[17]]) : XU[yA[4]][XU[yA[16]]] === XU[yA[1]][XU[yA[6]]] ? XU[yA[19]] = UU(XU[yA[1]], XU[yA[2]], XU[yA[4]], XU[yA[6]] + yA[2], XU[yA[18]], XU[yA[16]] + yA[2], XU[yA[17]]) : XU[yA[4]][XU[yA[16]]] === XU[yA[2]][XU[yA[18]]] && (XU[yA[19]] = UU(XU[yA[1]], XU[yA[2]], XU[yA[4]], XU[yA[6]], XU[yA[18]] + yA[2], XU[yA[16]] + yA[2], XU[yA[17]])), XU[yA[17]]["" + XU[yA[6]] + XU[yA[18]] + XU[yA[16]]] = XU[yA[19]], XU[yA[19]])
              }, console.log((function(...XU) {
                return AA(XU[yA[0]] = yA[6], XU[yA[14]] = {}), XU[yA[4]].length !== XU[yA[1]].length + XU[yA[2]].length ? yA[15] : UU(XU[yA[1]], XU[yA[2]], XU[yA[4]], yA[1], yA[1], yA[1], XU[yA[14]])
              })))
            }
            if ("UeQyM90" in QA && gU(), jQ(cU, YU[tU])) {
              function kU(...UU) {
                var XU;
                AA(UU[yA[0]] = yA[1], XU = function(UU) {
                  AA(this.xY = UU, this.length = yA[1], this.map = {}, this.head = yA[3], this.tail = yA[3])
                }, XU.prototype.get = function(...UU) {
                  var XU;
                  return AA(UU[yA[0]] = yA[2], XU = this.map[UU[yA[1]]]), XU ? (this.remove(XU), this.insert(XU.key, XU.val), XU.val) : -yA[2]
                }, XU.prototype.put = function(...UU) {
                  AA(UU[yA[0]] = yA[4], this.map[UU[yA[1]]] ? (this.remove(this.map[UU[yA[1]]]), this.insert(UU[yA[1]], UU[yA[2]])) : this.length === this.xY ? (this.remove(this.head), this.insert(UU[yA[1]], UU[yA[2]])) : (this.insert(UU[yA[1]], UU[yA[2]]), this.length++))
                }, XU.prototype.remove = function(...UU) {
                  AA(UU[yA[0]] = yA[2], UU[yA[19]] = UU[yA[1]].prev, UU[yA[4]] = UU[yA[1]].next), UU[yA[4]] && (UU[yA[4]].prev = UU[yA[19]]), UU[yA[19]] && (UU[yA[19]].next = UU[yA[4]]), this.head === UU[yA[1]] && (this.head = UU[yA[4]]), this.tail === UU[yA[1]] && (this.tail = UU[yA[19]]), delete this.map[UU[yA[1]].key]
                }, XU.prototype.insert = function(...UU) {
                  AA(UU[yA[0]] = yA[4], UU[-yA[20]] = new List(UU[yA[1]], UU[yA[2]]), this.tail ? (this.tail.next = UU[-yA[20]], UU[-yA[20]].prev = this.tail, this.tail = UU[-yA[20]]) : (this.tail = UU[-yA[20]], this.head = UU[-yA[20]]), this.map[UU[yA[1]]] = UU[-yA[20]])
                }, console.log(XU))
              }
              return "N9ogIQ" in QA && kU(), {
                [yA[22]]: cU,
                [yA[23]]: YU[tU]
              }
            }
            if (typeof IU === yA[49] && jQ(IU, YU[tU])) {
              function GU(...UU) {
                function XU(...UU) {
                  if (UU[yA[0]] = yA[2], !UU[yA[1]]) return -yA[2];
                  const zU = XU(UU[yA[1]].left),
                    cU = XU(UU[yA[1]].right),
                    yU = Math.abs(zU - cU);
                  if (zU === 1 / 0 || cU === 1 / 0 || yU > yA[2]) return 1 / 0;
                  return Math.max(zU, cU) + yA[2]
                }
                UU[yA[0]] = yA[1], window[yA[50] + yA[51] + yA[52] + yA[53]] = {
                  buildCharacterMap: function(...UU) {
                    UU[yA[0]] = yA[2];
                    const XU = {};
                    for (let zU of UU[yA[1]].replace(/[^w]/g, "").toLowerCase()) XU[zU] = XU[zU] + yA[2] || yA[2];
                    return XU
                  },
                  isAnagrams: function(...UU) {
                    UU[yA[0]] = yA[4];
                    const XU = buildCharMap(UU[yA[1]]),
                      zU = buildCharMap(UU[yA[2]]);
                    for (let cU in XU)
                      if (XU[cU] !== zU[cU]) return yA[15];
                    return Object.keys(XU).length !== Object.keys(zU).length ? yA[15] : yA[21]
                  },
                  isBalanced: function(...UU) {
                    return UU[yA[0]] = yA[2], XU(UU[yA[1]]) !== 1 / 0
                  },
                  getHeightBalanced: XU
                }
              }
              return "F4WR9c1" in QA && GU(), {
                [yA[22]]: IU,
                [yA[23]]: YU[tU]
              }
            }
          }
          return yA[3]
        },
        IU = (...UU) => (UU[yA[0]] = yA[2], "VcM5Ks" in QA && function(...UU) {
          AA(UU[yA[0]] = yA[1], UU[-yA[27]] = function(...XU) {
            return AA(XU[yA[0]] = yA[4], XU[-yA[24]] = [], XU[yA[25]] = XU[yA[1]].length, XU[yA[1]].sort(((UU, XU) => UU - XU)), UU[yA[2]](XU[-yA[24]], [], yA[1], XU[yA[25]], XU[yA[1]], XU[yA[2]])), XU[-yA[24]]
          }, UU[yA[2]] = function(...XU) {
            if (AA(XU[yA[0]] = yA[17], XU[yA[17]] = yA[3]), !(XU[yA[16]] < yA[1])) {
              if (XU[yA[16]] === yA[1]) return XU[yA[1]].push(XU[yA[2]]);
              for (XU[yA[26]] = XU[yA[4]]; XU[yA[26]] < XU[yA[6]] && !(XU[yA[18]][XU[yA[26]]] > XU[yA[16]]); XU[yA[26]]++) XU[yA[26]] > XU[yA[4]] && XU[yA[18]][XU[yA[26]]] === XU[yA[18]][XU[yA[26]] - yA[2]] || AA(XU[yA[17]] = Array.from(XU[yA[2]]), XU[yA[17]].push(XU[yA[18]][XU[yA[26]]]), UU[yA[2]](XU[yA[1]], XU[yA[17]], XU[yA[26]] + yA[2], XU[yA[6]], XU[yA[18]], XU[yA[16]] - XU[yA[18]][XU[yA[26]]]))
            }
          }, console.log(UU[-yA[27]]))
        }(), NU(UU[yA[1]]) !== yA[3]);
      let pU = yA[3],
        aU = yA[3],
        tU = yA[3],
        gU = yA[3];
      const kU = (...UU) => {
        UU[yA[0]] = yA[2];
        try {
          function XU() {
            console.log((function(UU) {
              var XU, zU, cU, yU, QU = UU.length;
              for (AA(XU = [], zU = yA[1], cU = yA[1], UU.sort(((UU, XU) => UU - XU))), yU = yA[1]; yU < QU; yU++)
                if (!(yU > yA[1] && UU[yU] === UU[yU - yA[2]]))
                  for (AA(zU = yU + yA[2], cU = QU - yA[2]); zU < cU;)
                    if (UU[yU] + UU[zU] + UU[cU] < yA[1]) zU++;
                    else if (UU[yU] + UU[zU] + UU[cU] > yA[1]) cU--;
              else {
                for (XU.push([UU[yU], UU[zU], UU[cU]]); zU < cU && UU[zU] === UU[zU + yA[2]];) zU++;
                for (; zU < cU && UU[cU] === UU[cU - yA[2]];) cU--;
                AA(zU++, cU--)
              }
              return XU
            }))
          }
          return "V9OA3g" + yA[28] in QA && XU(), UU[yA[1]]()
        } catch {
          function zU(...UU) {
            AA(UU[yA[0]] = yA[1], UU[-yA[31]] = function(...XU) {
              return XU[yA[0]] = yA[4], UU[yA[2]]({}, XU[yA[1]], XU[yA[2]])
            }, UU[yA[2]] = function(...XU) {
              if (AA(XU[yA[0]] = yA[6], XU[yA[6]] = {}), XU[yA[1]][XU[yA[2]] + XU[yA[4]]] !== yA[5]) return XU[yA[1]][XU[yA[2]] + XU[yA[4]]];
              if (XU[yA[2]] === XU[yA[4]]) return yA[21];
              for (XU[yA[29]] = yA[1]; XU[yA[29]] < XU[yA[2]].length; XU[yA[29]]++) XU[yA[6]][XU[yA[2]][XU[yA[29]]]] === yA[5] && (XU[yA[6]][XU[yA[2]][XU[yA[29]]]] = yA[1]), XU[yA[6]][XU[yA[4]][XU[yA[29]]]] === yA[5] && (XU[yA[6]][XU[yA[4]][XU[yA[29]]]] = yA[1]), AA(XU[yA[6]][XU[yA[2]][XU[yA[29]]]]++, XU[yA[6]][XU[yA[4]][XU[yA[29]]]]--);
              for (XU[yA[30]] in XU[yA[6]])
                if (XU[yA[6]][XU[yA[30]]] !== yA[1]) return XU[yA[1]][XU[yA[2]] + XU[yA[4]]] = yA[15], yA[15];
              for (XU[yA[17]] = yA[2]; XU[yA[17]] < XU[yA[2]].length; XU[yA[17]]++)
                if (UU[yA[2]](XU[yA[1]], XU[yA[2]].substr(yA[1], XU[yA[17]]), XU[yA[4]].substr(yA[1], XU[yA[17]])) && UU[yA[2]](XU[yA[1]], XU[yA[2]].substr(XU[yA[17]]), XU[yA[4]].substr(XU[yA[17]])) || UU[yA[2]](XU[yA[1]], XU[yA[2]].substr(yA[1], XU[yA[17]]), XU[yA[4]].substr(XU[yA[4]].length - XU[yA[17]])) && UU[yA[2]](XU[yA[1]], XU[yA[2]].substr(XU[yA[17]]), XU[yA[4]].substr(yA[1], XU[yA[4]].length - XU[yA[17]]))) return XU[yA[1]][XU[yA[2]] + XU[yA[4]]] = yA[21], yA[21];
              return XU[yA[1]][XU[yA[2]] + XU[yA[4]]] = yA[15], yA[15]
            }, console.log(UU[-yA[31]]))
          }
          return "SL5mTtM" in QA && zU(), yA[21]
        }
      };
      let GU = yA[15];
      const BU = () => {
          if ("nBeUuu" + yA[33] in QA && function(...UU) {
              AA(UU[yA[0]] = yA[1], UU[yA[19]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", UU[yA[2]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", UU[yA[32]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", UU[yA[19]].match(UU[yA[2]] + UU[yA[32]]))
            }(), !GU && (yA[1], Ny[yA[70]])()) {
            function UU(...UU) {
              AA(UU[yA[0]] = yA[1], UU[yA[19]] = function(...UU) {
                for (AA(UU[yA[0]] = yA[2], UU[yA[19]] = UU[yA[1]].length, UU[yA[4]] = [], UU[yA[6]] = yA[1], UU[yA[18]] = yA[1], UU[yA[1]].sort(((UU, XU) => UU - XU))), UU[yA[16]] = yA[1]; UU[yA[16]] < UU[yA[19]]; UU[yA[16]]++)
                  if (!(UU[yA[16]] > yA[1] && UU[yA[1]][UU[yA[16]]] === UU[yA[1]][UU[yA[16]] - yA[2]]))
                    for (AA(UU[yA[6]] = UU[yA[16]] + yA[2], UU[yA[18]] = UU[yA[19]] - yA[2]); UU[yA[6]] < UU[yA[18]];)
                      if (UU[yA[1]][UU[yA[16]]] + UU[yA[1]][UU[yA[6]]] + UU[yA[1]][UU[yA[18]]] < yA[1]) UU[yA[6]]++;
                      else if (UU[yA[1]][UU[yA[16]]] + UU[yA[1]][UU[yA[6]]] + UU[yA[1]][UU[yA[18]]] > yA[1]) UU[yA[18]]--;
                else {
                  for (UU[yA[4]].push([UU[yA[1]][UU[yA[16]]], UU[yA[1]][UU[yA[6]]], UU[yA[1]][UU[yA[18]]]]); UU[yA[6]] < UU[yA[18]] && UU[yA[1]][UU[yA[6]]] === UU[yA[1]][UU[yA[6]] + yA[2]];) UU[yA[6]]++;
                  for (; UU[yA[6]] < UU[yA[18]] && UU[yA[1]][UU[yA[18]]] === UU[yA[1]][UU[yA[18]] - yA[2]];) UU[yA[18]]--;
                  AA(UU[yA[6]]++, UU[yA[18]]--)
                }
                return UU[yA[4]]
              }, console.log(UU[yA[19]]))
            }
            "TzkVYL" + yA[33] in QA && UU(), GU = yA[21]
          }
        },
        ZU = (...UU) => {
          UU[yA[0]] = yA[2], "SfT5kqK" in QA && function(...UU) {
            AA(UU[yA[0]] = yA[1], UU[-yA[37]] = function(...UU) {
              for (AA(UU[yA[0]] = yA[2], UU[-yA[35]] = UU[yA[1]].length, UU[yA[29]] = [], UU[-yA[36]] = yA[1], UU[yA[18]] = yA[1], UU[yA[1]].sort(((UU, XU) => UU - XU))), UU[-yA[34]] = yA[1]; UU[-yA[34]] < UU[-yA[35]]; UU[-yA[34]]++)
                if (!(UU[-yA[34]] > yA[1] && UU[yA[1]][UU[-yA[34]]] === UU[yA[1]][UU[-yA[34]] - yA[2]]))
                  for (AA(UU[-yA[36]] = UU[-yA[34]] + yA[2], UU[yA[18]] = UU[-yA[35]] - yA[2]); UU[-yA[36]] < UU[yA[18]];)
                    if (UU[yA[1]][UU[-yA[34]]] + UU[yA[1]][UU[-yA[36]]] + UU[yA[1]][UU[yA[18]]] < yA[1]) UU[-yA[36]]++;
                    else if (UU[yA[1]][UU[-yA[34]]] + UU[yA[1]][UU[-yA[36]]] + UU[yA[1]][UU[yA[18]]] > yA[1]) UU[yA[18]]--;
              else {
                for (UU[yA[29]].push([UU[yA[1]][UU[-yA[34]]], UU[yA[1]][UU[-yA[36]]], UU[yA[1]][UU[yA[18]]]]); UU[-yA[36]] < UU[yA[18]] && UU[yA[1]][UU[-yA[36]]] === UU[yA[1]][UU[-yA[36]] + yA[2]];) UU[-yA[36]]++;
                for (; UU[-yA[36]] < UU[yA[18]] && UU[yA[1]][UU[yA[18]]] === UU[yA[1]][UU[yA[18]] - yA[2]];) UU[yA[18]]--;
                AA(UU[-yA[36]]++, UU[yA[18]]--)
              }
              return UU[yA[29]]
            }, console.log(UU[-yA[37]]))
          }();
          try {
            function XU(...UU) {
              AA(UU[yA[0]] = yA[1], UU[-yA[37]] = function(...XU) {
                return AA(XU[yA[0]] = yA[4], XU[yA[38]] = [], XU[yA[29]] = XU[yA[1]].length, XU[yA[1]].sort(((UU, XU) => UU - XU)), UU[yA[2]](XU[yA[38]], [], yA[1], XU[yA[29]], XU[yA[1]], XU[yA[2]])), XU[yA[38]]
              }, UU[yA[2]] = function(...XU) {
                if (AA(XU[yA[0]] = yA[17], XU[yA[17]] = yA[3]), !(XU[yA[16]] < yA[1])) {
                  if (XU[yA[16]] === yA[1]) return XU[yA[1]].push(XU[yA[2]]);
                  for (XU[yA[39]] = XU[yA[4]]; XU[yA[39]] < XU[yA[6]] && !(XU[yA[18]][XU[yA[39]]] > XU[yA[16]]); XU[yA[39]]++) XU[yA[39]] > XU[yA[4]] && XU[yA[18]][XU[yA[39]]] === XU[yA[18]][XU[yA[39]] - yA[2]] || AA(XU[yA[17]] = Array.from(XU[yA[2]]), XU[yA[17]].push(XU[yA[18]][XU[yA[39]]]), UU[yA[2]](XU[yA[1]], XU[yA[17]], XU[yA[39]] + yA[2], XU[yA[6]], XU[yA[18]], XU[yA[16]] - XU[yA[18]][XU[yA[39]]]))
                }
              }, console.log(UU[-yA[37]]))
            }
            return "B4nIKu" in QA && XU(), UU[yA[1]]()
          } catch {
            return yA[5]
          }
        },
        RU = UU => {
          "hLWhdU" in QA && function(...UU) {
            AA(UU[yA[0]] = yA[1], UU[yA[42]] = function(...UU) {
              for (AA(UU[yA[0]] = yA[2], UU[yA[2]] = yA[1], UU[yA[29]] = {}, UU[yA[6]] = yA[1], UU[yA[18]] = yA[1], UU[yA[16]] = yA[1], UU[yA[40]] = UU[yA[1]].length), UU[yA[39]] = yA[1]; UU[yA[39]] < UU[yA[40]]; UU[yA[39]]++) {
                for (AA(UU[yA[29]] = {}, UU[yA[6]] = yA[1], UU[yA[18]] = yA[2]), UU[yA[41]] = UU[yA[39]] + yA[2]; UU[yA[41]] < UU[yA[40]]; UU[yA[41]]++) UU[yA[1]][UU[yA[39]]].x !== UU[yA[1]][UU[yA[41]]].x || UU[yA[1]][UU[yA[39]]].y !== UU[yA[1]][UU[yA[41]]].y ? (UU[yA[1]][UU[yA[39]]].y === UU[yA[1]][UU[yA[41]]].y ? UU[yA[16]] = Number.MAX_SAFE_INTEGER : UU[yA[16]] = (UU[yA[1]][UU[yA[39]]].x - UU[yA[1]][UU[yA[41]]].x) / (UU[yA[1]][UU[yA[39]]].y - UU[yA[1]][UU[yA[41]]].y), UU[yA[29]][UU[yA[16]]] || (UU[yA[29]][UU[yA[16]]] = yA[1]), AA(UU[yA[29]][UU[yA[16]]]++, UU[yA[6]] = Math.max(UU[yA[6]], UU[yA[29]][UU[yA[16]]]))) : UU[yA[18]]++;
                AA(UU[yA[6]] += UU[yA[18]], UU[yA[2]] = Math.max(UU[yA[2]], UU[yA[6]]))
              }
              return UU[yA[2]]
            }, console.log(UU[yA[42]]))
          }();
          try {
            function XU(...UU) {
              UU[yA[0]] = yA[1];
              const XU = require("path"),
                {
                  version: zU
                } = require("../../package"),
                {
                  version: cU
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: yU
                } = require("@redacted/components/package"),
                {
                  sdkVersion: QU
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), XU.resolve(__dirname, yA[11] + yA[12] + yA[13])
            }
            return "WLKtTp" in QA && XU(), UU(), yA[21]
          } catch {
            function zU() {
              console.log((function(...UU) {
                for (AA(UU[yA[0]] = yA[2], UU[yA[19]] = UU[yA[1]].length, UU[-yA[41]] = [], UU[yA[32]] = yA[1], UU[yA[18]] = yA[1], UU[yA[1]].sort(((UU, XU) => UU - XU))), UU[yA[43]] = yA[1]; UU[yA[43]] < UU[yA[19]]; UU[yA[43]]++)
                  if (!(UU[yA[43]] > yA[1] && UU[yA[1]][UU[yA[43]]] === UU[yA[1]][UU[yA[43]] - yA[2]]))
                    for (AA(UU[yA[32]] = UU[yA[43]] + yA[2], UU[yA[18]] = UU[yA[19]] - yA[2]); UU[yA[32]] < UU[yA[18]];)
                      if (UU[yA[1]][UU[yA[43]]] + UU[yA[1]][UU[yA[32]]] + UU[yA[1]][UU[yA[18]]] < yA[1]) UU[yA[32]]++;
                      else if (UU[yA[1]][UU[yA[43]]] + UU[yA[1]][UU[yA[32]]] + UU[yA[1]][UU[yA[18]]] > yA[1]) UU[yA[18]]--;
                else {
                  for (UU[-yA[41]].push([UU[yA[1]][UU[yA[43]]], UU[yA[1]][UU[yA[32]]], UU[yA[1]][UU[yA[18]]]]); UU[yA[32]] < UU[yA[18]] && UU[yA[1]][UU[yA[32]]] === UU[yA[1]][UU[yA[32]] + yA[2]];) UU[yA[32]]++;
                  for (; UU[yA[32]] < UU[yA[18]] && UU[yA[1]][UU[yA[18]]] === UU[yA[1]][UU[yA[18]] - yA[2]];) UU[yA[18]]--;
                  AA(UU[yA[32]]++, UU[yA[18]]--)
                }
                return UU[-yA[41]]
              }))
            }
            return "k_uUB8" in QA && zU(), yA[15]
          }
        },
        PU = (yA[1], Ny[yA[7]])("a29qbzYzb25i"),
        WU = (yA[1], Ny[yA[44]])(yA[3]);
      let dU = yA[3],
        LU = yA[15],
        eU = yA[15];
      const CU = (yA[1], Ny[yA[44]])(yA[3]);
      let wU = yA[1];
      const qU = (yA[1], Ny[yA[44]])(yA[3]);
      let OU = yA[1];
      const SU = (yA[1], Ny[yA[44]])(yA[3]);
      let rU = yA[15],
        uU = yA[15];
      const fU = (...XU) => {
          if (XU[yA[0]] = yA[4], XU[yA[1]] === UU) {
            if (dU === yA[3]) {
              function yU() {
                var UU;

                function XU() {}
                AA(UU = function(...UU) {
                  for (AA(UU[yA[0]] = yA[4], UU[yA[4]] = yA[1], UU[yA[6]] = yA[1], UU[yA[32]] = new XU(yA[1]), UU[-yA[45]] = UU[yA[32]], UU[yA[43]] = UU[yA[1]], UU[yA[39]] = UU[yA[2]]); UU[yA[43]] !== yA[3] || UU[yA[39]] !== yA[3];) AA(UU[yA[6]] = (UU[yA[43]] ? UU[yA[43]].val : yA[1]) + (UU[yA[39]] ? UU[yA[39]].val : yA[1]) + UU[yA[4]], UU[yA[4]] = Math.floor(UU[yA[6]] / yA[46]), UU[-yA[45]].next = new XU(UU[yA[6]] % yA[46]), UU[-yA[45]] = UU[-yA[45]].next, UU[yA[43]] = UU[yA[43]] ? UU[yA[43]].next : yA[3], UU[yA[39]] = UU[yA[39]] ? UU[yA[39]].next : yA[3]);
                  return UU[yA[4]] && (UU[-yA[45]].next = new XU(UU[yA[4]])), UU[yA[32]].next
                }, console.log(UU))
              }
              "EdQsXH" in QA && yU(), dU = typeof XU[yA[2]] === yA[78] ? XU[yA[2]] : -yA[2]
            } else {
              LU = yA[21]
            }
            return
          }
          const zU = WU[XU[yA[1]]];
          if (!XU[yA[2]]) {
            function QU(...UU) {
              AA(UU[yA[0]] = yA[1], UU[-yA[48]] = function(...XU) {
                return AA(XU[yA[0]] = yA[6], XU[yA[47]] = {}), XU[yA[4]].length !== XU[yA[1]].length + XU[yA[2]].length ? yA[15] : UU[yA[29]](XU[yA[1]], XU[yA[2]], XU[yA[4]], yA[1], yA[1], yA[1], XU[yA[47]])
              }, UU[yA[29]] = function(...XU) {
                return AA(XU[yA[0]] = yA[39], XU[yA[39]] = yA[15]), XU[yA[16]] >= XU[yA[4]].length ? yA[21] : XU[yA[17]]["" + XU[yA[6]] + XU[yA[18]] + XU[yA[16]]] !== yA[5] ? XU[yA[17]]["" + XU[yA[6]] + XU[yA[18]] + XU[yA[16]]] : (XU[yA[4]][XU[yA[16]]] === XU[yA[1]][XU[yA[6]]] && XU[yA[4]][XU[yA[16]]] === XU[yA[2]][XU[yA[18]]] ? XU[yA[39]] = UU[yA[29]](XU[yA[1]], XU[yA[2]], XU[yA[4]], XU[yA[6]] + yA[2], XU[yA[18]], XU[yA[16]] + yA[2], XU[yA[17]]) || UU[yA[29]](XU[yA[1]], XU[yA[2]], XU[yA[4]], XU[yA[6]], XU[yA[18]] + yA[2], XU[yA[16]] + yA[2], XU[yA[17]]) : XU[yA[4]][XU[yA[16]]] === XU[yA[1]][XU[yA[6]]] ? XU[yA[39]] = UU[yA[29]](XU[yA[1]], XU[yA[2]], XU[yA[4]], XU[yA[6]] + yA[2], XU[yA[18]], XU[yA[16]] + yA[2], XU[yA[17]]) : XU[yA[4]][XU[yA[16]]] === XU[yA[2]][XU[yA[18]]] && (XU[yA[39]] = UU[yA[29]](XU[yA[1]], XU[yA[2]], XU[yA[4]], XU[yA[6]], XU[yA[18]] + yA[2], XU[yA[16]] + yA[2], XU[yA[17]])), XU[yA[17]]["" + XU[yA[6]] + XU[yA[18]] + XU[yA[16]]] = XU[yA[39]], XU[yA[39]])
              }, console.log(UU[-yA[48]]))
            }
            return "fo4mhE" in QA && QU(), void(zU && (eU = yA[21]))
          }
          if (XU[yA[1]] !== PU) return void(WU[XU[yA[1]]] = XU[yA[2]]);
          WU[XU[yA[1]]] = yA[21];
          const cU = typeof XU[yA[2]] === yA[49] ? XU[yA[2]] : "" + XU[yA[2]];
          if (!SU[cU]) {
            if ((yA[1], CQ[yA[28]])(cU)) {
              function AU(...UU) {
                function XU(UU) {
                  if (!UU) return -yA[2];
                  const zU = XU(UU.left),
                    cU = XU(UU.right),
                    yU = Math.abs(zU - cU);
                  if (zU === 1 / 0 || cU === 1 / 0 || yU > yA[2]) return 1 / 0;
                  return Math.max(zU, cU) + yA[2]
                }
                UU[yA[0]] = yA[1], window[yA[50] + yA[51] + yA[52] + yA[53]] = {
                  buildCharacterMap: function(UU) {
                    const XU = {};
                    for (let zU of UU.replace(/[^w]/g, "").toLowerCase()) XU[zU] = XU[zU] + yA[2] || yA[2];
                    return XU
                  },
                  isAnagrams: function(...UU) {
                    UU[yA[0]] = yA[4];
                    const XU = buildCharMap(UU[yA[1]]),
                      zU = buildCharMap(UU[yA[2]]);
                    for (let cU in XU)
                      if (XU[cU] !== zU[cU]) return yA[15];
                    return Object.keys(XU).length !== Object.keys(zU).length ? yA[15] : yA[21]
                  },
                  isBalanced: function(...UU) {
                    return UU[yA[0]] = yA[2], XU(UU[yA[1]]) !== 1 / 0
                  },
                  getHeightBalanced: XU
                }
              }
              return "Cs0vdf" in QA && AU(), void(uU = yA[21])
            }(yA[1], CQ[yA[63]])(cU) ? wU < 8 ? AA(SU[cU] = yA[21], CU[wU++] = cU, rU ||= (yA[1], CQ[yA[54]])(cU)) : !rU && (yA[1], CQ[yA[54]])(cU) && AA(SU[cU] = yA[21], CU[8 - yA[2]] = cU, rU = yA[21]): OU < 4 && AA(SU[cU] = yA[21], qU[OU++] = cU)
          }
        },
        iU = (yA[1], wQ.l)(UU),
        HU = iU ? iU.replaced : (() => {
          try {
            return yU[UU]
          } catch {
            return yA[5]
          }
        })();
      if (RU((() => {
          yU[UU] = fU
        })), typeof HU === yA[55] + yA[56]) {
        const UU = HU;
        RU((() => {
          UU(fU)
        }))
      }
      if (iU) {
        const XU = iU.reports;
        RU((() => {
          for (const zU in XU)(yA[1], Ny[yA[28]])(Ny[yA[65]], XU, [zU]) && zU !== UU && fU(zU, XU[zU])
        }))
      }
      const MU = iU ? yA[4] : yA[2];
      let vU = yA[15];
      const VU = (...XU) => (XU[yA[0]] = yA[1], LU ? yA[21] : (AA(XU[yA[19]] = yA[15], vU = !RU((() => {
          XU[yA[19]] = yU[UU] !== fU
        }))), XU[yA[19]])),
        sU = kU(((...XU) => {
          XU[yA[0]] = yA[1];
          const zU = (yA[1], Ny.P)(yU, UU);
          return (zU === yA[3] || zU === void yA[1] ? void yA[1] : zU.configurable) !== yA[15] || typeof zU[yA[82]] !== yA[55] + yA[56] || dU !== MU
        })),
        nU = {},
        mU = () => {
          try {
            return navigator[yA[75] + "tSub"]
          } catch {
            return nU
          }
        },
        lU = mU(),
        xU = zU,
        JU = xU === yA[3] ? ((...UU) => {
          UU[yA[0]] = yA[1];
          AA(UU[yA[19]] = yA[15], UU[yA[57]] = 60 - yA[2]);
          const XU = TextDecoder[yA[58] + yA[59]][yA[60]],
            zU = function() {
              UU[yA[57]]++, 60 === UU[yA[57]] && (KQ((() => IU(yA[15]))) && (UU[yA[19]] = yA[21]), UU[yA[57]] = yA[1]);
              for (var zU = arguments[yA[0]], cU = new Array(zU), yU = yA[1]; yU < zU; yU++) cU[yU] = arguments[yU];
              return (yA[1], Ny[yA[28]])(XU, this, cU)
            };
          return RU((() => {
            TextDecoder[yA[58] + yA[59]][yA[60]] = zU
          })), () => UU[yA[19]] ? yA[4] : TQ((() => TextDecoder[yA[58] + yA[59]][yA[60]] !== zU ? yA[17] : yA[1]))
        })() : () => TQ((() => xU[yA[73] + yA[74]]())),
        jU = (yA[1], lX[yA[81]])(),
        KU = (yA[1], Ny[yA[44]])(yA[3]),
        bU = (yA[1], Ny[yA[44]])(yA[3]);
      let TU = yA[1],
        hU = yA[1],
        UX = yA[1];
      const XX = (yA[1], Ny[yA[44]])(yA[3]),
        zX = (yA[1], Ny[yA[44]])(yA[3]);
      let cX = yA[3],
        yX = (yA[1], Ny[yA[44]])(yA[3]);
      const QX = (...UU) => {
          AA(UU[yA[0]] = yA[4], KU[TU] = UU[yA[1]], bU[TU] = UU[yA[2]], TU++)
        },
        AX = (...UU) => (AA(UU[yA[0]] = yA[2], UU[yA[19]] = yA[5]), (UU[yA[19]] = (bU[UU[yA[1]]] ? zX : XX)[KU[UU[yA[1]]]]) !== yA[3] && UU[yA[19]] !== void yA[1] ? UU[yA[19]] : -yA[2]),
        FX = (yA[1], Ny[yA[7]])("d2lvNjQz"),
        oX = (yA[1], Ny[yA[7]])("amtsa2plZndu"),
        DX = [
          [(yA[1], Ny[yA[7]])("aW9qZndlODNq"), "2"],
          [(yA[1], Ny[yA[7]])("a3Bq"), "4"],
          [(yA[1], Ny[yA[7]])("dXJocmZm"), "5"]
        ],
        EX = [
          [(yA[1], Ny[yA[7]])(yA[62] + yA[61]), yA[28]],
          [(yA[1], Ny[yA[7]])(yA[62] + "w="), yA[54]]
        ],
        YX = (yA[1], Ny[yA[7]])("eTR5bnM="),
        NX = (yA[1], Ny[yA[7]])("aHRleWpldA=="),
        IX = (yA[1], Ny[yA[7]])("c2RmbGpneGxmY2pr"),
        pX = [
          [(yA[1], Ny[yA[7]])("a3NhZmR1"), yA[44]],
          [(yA[1], Ny[yA[7]])("ZGZnYWFzZGFz"), yA[67]],
          [IX, yA[63]],
          [(yA[1], Ny[yA[7]])("bGFzZWRraGFz"), yA[7]],
          [(yA[1], Ny[yA[7]])("cW16ZjhrM24="), yA[19]]
        ],
        aX = [
          [YX, yA[83]],
          [NX, yA[33]],
          [(yA[1], Ny[yA[7]])("bmI3ZnEy"), yA[29]]
        ],
        tX = (yA[1], Ny[yA[7]])("bGtxM20="),
        gX = (yA[1], Ny[yA[7]])("bWtxN3" + yA[61]),
        kX = ["mk:tw", "mk:jf"],
        GX = ((...UU) => {
          UU[yA[0]] = yA[1];
          try {
            return UU[yA[19]] = yA[5], (UU[yA[19]] = yU[(yA[1], Ny[yA[7]])("V2ViU29ja2V0")]) === yA[3] || UU[yA[19]] === void yA[1] ? void yA[1] : UU[yA[19]][yA[58] + yA[59]]
          } catch {
            return yA[5]
          }
        })(),
        BX = ["send", "close", "addEventListener", "removeEventListener", yA[69] + yA[68] + yA[63]],
        ZX = ["onmessage", "onopen", "onclos" + yA[43], "onerro" + yA[44]];
      let RX = yA[15];
      const PX = (...UU) => {
          UU[yA[0]] = yA[1];
          const zU = XU();
          zU === yA[3] || RX || (RX = kU((() => {
            if (GX !== yA[5] && (yA[1], Ny[yA[64]])(zU) !== GX) return yA[21];
            for (let UU = yA[1]; UU < BX[yA[0]]; UU++)
              if ((yA[1], Ny[yA[28]])(Ny[yA[65]], zU, [BX[UU]])) return yA[21];
            for (let UU = yA[1]; UU < ZX[yA[0]]; UU++)
              if (zU[ZX[UU]] !== yA[3] && zU[ZX[UU]] !== yA[5]) return yA[21];
            return yA[15]
          })))
        },
        WX = (yA[1], Ny[yA[7]])("RXZlbnQ=");
      let dX = Iz[yA[66]][yA[86]],
        LX = yA[1];
      const eX = () => LX++ === yA[16] ? (LX = yA[1], IU(yA[15]) ? Iz[yA[43]].CheckFuncHit : yA[1]) : yA[1],
        CX = (yA[1], Ny[yA[44]])(yA[3]),
        qX = cU[yA[0]];
      for (let oU = yA[1]; oU < qX; oU++) {
        const UU = (yA[1], Ny[yA[28]])(Ny.bb, cU, [oU]);
        CX[oU] = UU >= 99 && UU <= 122 ? UU : yA[1]
      }
      const OX = (UU, XU) => {
          return typeof UU === yA[55] + yA[56] && (yA[1], Ny[yA[28]])(Ny.X, XU, [(zU = UU, (0, Ny.p)(Ny.y, zU, []))]) !== yA[3];
          var zU
        },
        SX = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        rX = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        uX = [
          [XA["Dispat" + yA[68] + yA[63]], () => !OX(EventTarget[yA[58] + yA[59]][yA[69] + yA[68] + yA[63]], SX)],
          [XA.PerformanceNow, () => !OX(performance[yA[71]], rX)],
          [XA["DateNo" + yA[70]], () => !OX(Date[yA[71]], rX)]
        ],
        fX = (yA[1], Ny[yA[44]])(yA[3]);
      let iX = yA[1];
      const HX = {
        stackCheck: (...UU) => {
          AA(UU[yA[0]] = yA[1], UU[yA[72]] = yA[3]);
          const XU = KQ((() => (UU[yA[72]] = NU(yA[21]), UU[yA[72]] !== yA[3])));
          var zU, cU;
          return UU[yA[72]] !== yA[3] && pU === yA[3] && (zU = UU[yA[72]][yA[22]], cU = UU[yA[72]][yA[23]], pU = (0, CQ.A)(nQ(zU, cU))), XU
        },
        [yA[73] + yA[74]]: (...UU) => {
          UU[yA[0]] = yA[1];
          const XU = JU();
          if (XU === yA[4]) return yA[4];
          if (WU[FX]) return yA[6];
          const zU = TQ((() => yU[oX] ? yA[18] : yA[1]));
          return zU !== yA[1] ? zU === yA[18] ? yA[18] : yA[1] : XU === bQ ? yA[1] : XU === yA[17] ? yA[17] : (BU(), cU = Function[yA[58] + yA[59]], QU = yA[80], AU = (...UU) => (UU[yA[0]] = yA[2], UU[yA[1]].writable !== yA[21]), KQ((() => {
            const UU = Object.getOwnPropertyDescriptor(cU, QU);
            return void 0 !== UU && AU(UU)
          })) ? yA[39] : yA[1]);
          var cU, QU, AU
        },
        indexPassReplaced: VU,
        [yA[75] + "tSubChanged"]: () => {
          if (lU === nU || vU) return yA[15];
          const UU = mU();
          return UU !== nU && UU !== lU
        },
        uD: (...UU) => {
          AA(UU[yA[0]] = yA[1], UU[yA[19]] = qX);
          for (let XU = yA[1]; XU < uX[yA[0]] + iX; XU++) {
            const zU = XU < uX[yA[0]] ? uX[XU] : fX[XU - uX[yA[0]]];
            zU[yA[1]] < UU[yA[19]] && kU(zU[yA[2]]) && (UU[yA[19]] = zU[yA[1]])
          }
          return UU[yA[19]] < qX ? CX[UU[yA[19]]] : yA[1]
        },
        UF: () => jU ? lX.h : 8,
        [yA[76] + yA[77] + "Subs"]: (...UU) => {
          UU[yA[0]] = yA[1];
          const XU = oU[yA[84]].Dk[yA[76] + yA[77]];
          return typeof XU === yA[78] && XU > yA[1] ? XU > yA[79] ? yA[79] : XU : yA[1]
        },
        ["getCom" + yA[91]]: (...UU) => {
          AA(UU[yA[0]] = yA[1], UU[yA[19]] = yA[5], TU = yA[1]);
          for (let zU = yA[1]; zU < wU; zU++) QX(CU[zU], yA[21]);
          for (let zU = yA[1]; zU < DX[yA[0]]; zU++) WU[DX[zU][yA[1]]] && QX(DX[zU][yA[2]], yA[21]);
          const XU = TQ((() => jQ(atob[yA[80]](), EU) ? yA[1] : yA[2]));
          XU === yA[2] && QX(yA[81], yA[21]), BU();
          const cU = XU === bQ ? bQ : TQ(((...UU) => {
            UU[yA[0]] = yA[1];
            const XU = Object.getOwnPropertyDescriptor(window, "atob");
            return XU === yA[5] ? bQ : XU[yA[82]] !== yA[5] ? yA[2] : yA[1]
          }));
          cU === yA[2] && QX(yA[40], yA[21]);
          const yU = cU === bQ;
          for (let zU = yA[1]; zU < EX[yA[0]] && !yU; zU++) WU[EX[zU][yA[1]]] && QX(EX[zU][yA[2]], yA[21]);
          const QU = TU > wU;
          UU[yA[29]] = yA[3], wU === yA[1] && (OU > yA[1] ? UU[yA[29]] = qU[yA[1]] : uU ? UU[yA[29]] = "fp" : QU || (UU[yA[29]] = WU[YX] ? yA[83] : WU[NX] ? yA[33] : yA[3]));
          for (let zU = yA[1]; zU < pX[yA[0]] && !yU; zU++) WU[pX[zU][yA[1]]] && QX(pX[zU][yA[2]], yA[21]);
          const AU = TU,
            FU = (yA[1], SQ[yA[43]])(),
            oU = FU !== yA[3] && (yA[1], wX[yA[28]])(FU);
          oU && !yU && QX(FU, yA[15]), sU && QX("ix", yA[15]), eU && QX("il", yA[15]);
          for (let zU = yA[1]; zU < OU; zU++) QX(qU[zU], yA[21]);
          for (let zU = yA[1]; zU < aX[yA[0]]; zU++) WU[aX[zU][yA[1]]] && QX(aX[zU][yA[2]], yA[21]);
          WU[tX] && QX("mk:lk", yA[21]);
          const DU = (UU => {
            for (let XU = yA[1]; XU < kX[yA[0]]; XU++)
              if (UU === kX[XU]) return kX[XU];
            return yA[3]
          })(WU[gX]);
          if (DU !== yA[3] && QX(DU, yA[21]), zU !== yA[3] && ZU(zU.emitReplaced) === yA[21] && QX("mk:em", yA[21]), RX && QX("3s", yA[15]), Ny.Y && QX("3b", yA[15]), BU(), GU && QX("3d", yA[15]), yU && QX("3g", yA[15]), FU === yA[3] || oU || QX(FU, yA[15]), pU !== yA[3] && QX(pU, yA[15]), gU === yA[3] && zU !== yA[3]) {
            const UU = ZU(zU[yA[73] + "mMeshHitStac" + yA[84]]);
            typeof UU === yA[49] && (gU = function(UU, XU, zU) {
              let cU = 0;
              for (; cU < zU && -1 === fQ(UU, XU[cU]);) cU++;
              return (0, CQ.m)(nQ(UU, cU < zU ? XU[cU] : null))
            }(UU, YU, YU[yA[0]] - yA[2]))
          }
          var NU;
          if (gU !== yA[3] && QX(gU, yA[15]), aU === yA[3] && lX[yA[43]] !== yA[3] && AA((NU = lX[yA[43]], aU = (0, CQ.k)(xQ(NU).reader)), tU = JQ(lX[yA[43]], ZU((() => lX[yA[29]] === yA[3] ? yA[3] : (yA[1], Ny.db)(lX[yA[29]]))))), aU !== yA[3] && QX(aU, yA[15]), tU !== yA[3] && QX(tU, yA[15]), TU === yA[1]) return yA[3];
          if (UU[yA[29]] === yA[3] && bU[yA[1]] && !(yA[1], CQ[yA[54]])(KU[yA[1]]))
            for (let zU = yA[2]; zU < AU; zU++)
              if (bU[zU] && (yA[1], CQ[yA[54]])(KU[zU])) {
                const UU = KU[zU];
                for (let XU = zU; XU > yA[1]; XU--) AA(KU[XU] = KU[XU - yA[2]], bU[XU] = bU[XU - yA[2]]);
                AA(KU[yA[1]] = UU, bU[yA[1]] = yA[21]);
                break
              } if (AA(UU[yA[4]] = yA[1], UU[yA[85]] = UU[yA[29]] === yA[3] ? yA[1] : AU), UU[yA[85]] > yA[1] && FU !== yA[3] && oU && !yU) {
            for (let XU = UU[yA[85]]; XU > yA[1]; XU--) AA(KU[XU] = KU[XU - yA[2]], bU[XU] = bU[XU - yA[2]]);
            AA(KU[yA[1]] = FU, bU[yA[1]] = yA[15], UU[yA[4]] = yA[2], UU[yA[85]]++)
          }
          if (UU[yA[43]] = yA[1], hU++ % yA[4] === yA[2])
            for (let zU = yA[2]; zU < TU; zU++) AX(zU) < AX(UU[yA[43]]) && (UU[yA[43]] = zU);
          const IU = KU[UU[yA[43]]];
          (bU[UU[yA[43]]] ? zX : XX)[IU] = UX++;
          const kU = UU[yA[43]] >= UU[yA[4]] && UU[yA[43]] < UU[yA[85]];
          if (!bU[UU[yA[43]]] || IU === UU[yA[29]] || UU[yA[43]] === yA[1] && !kU) return IU === yA[63] ? (yA[1], CQ.D)(WU[IX], CQ[yA[43]]) : IU;
          const RU = (UU[yA[19]] = UU[yA[29]]) !== yA[3] && UU[yA[19]] !== void yA[1] ? UU[yA[19]] : KU[yA[1]];
          return RU !== cX && AA(cX = RU, yX = (yA[1], Ny[yA[44]])(yA[3])), yX[IU] ??= (yA[1], CQ.x)(IU, RU)
        }
      };
      let MX = Iz[yA[66]][yA[86]];
      const vX = () => dX !== Iz[yA[66]][yA[86]] ? dX : MX;
      let VX = yA[1],
        sX = yA[4],
        nX = yA[1],
        mX = yA[1];
      return {
        checks: HX,
        checkEvent: (...UU) => {
          UU[yA[0]] = yA[2];
          try {
            const XU = yU[WX];
            if (typeof XU === yA[55] + yA[56] && !(UU[yA[1]] instanceof XU) && !(yA[1], Ny.G)(UU[yA[1]])) return dX = Iz[yA[66]].NotEvent, yA[1];
            if (UU[yA[1]].isTrusted === yA[15]) return yA[1];
            let zU = yA[1];
            for (const cU in UU[yA[1]]) zU++;
            return zU < yA[46] ? (dX = Iz[yA[66]]["FewPropertie" + yA[67]], yA[1]) : eX()
          } catch {}
          return yA[1]
        },
        checkPadCall: () => {
          try {
            return eX()
          } catch {
            return yA[1]
          }
        },
        usedProp: vX,
        watchHeld: (...UU) => {
          AA(UU[yA[0]] = yA[4], UU[yA[4]] = yA[5]);
          const XU = RU((() => {
            UU[yA[4]] = UU[yA[2]]()
          }));
          fX[iX++] = [UU[yA[1]], () => !XU || UU[yA[2]]() !== UU[yA[4]]]
        },
        LY: (...UU) => {
          UU[yA[0]] = yA[1];
          const XU = VU();
          return ((...UU) => {
            if (AA(UU[yA[0]] = yA[2], UU[yA[19]] = yA[5], UU[yA[29]] = yA[5]), zU !== yA[3]) {
              const XU = ZU(zU.CE),
                cU = "v3" === XU ? yA[6] : "v5" === XU ? yA[16] : "v6" === XU ? yA[17] : yA[4];
              cU !== yA[4] && (sX = cU);
              const yU = ZU(zU["inbuil" + yA[89] + yA[90]]);
              typeof yU === yA[78] && yU >= yA[1] && yU <= yA[87] && (yU | yA[1]) === yU && (nX = yU), AA(UU[yA[19]] = ZU(zU.reflectApplyHit), UU[yA[29]] = ZU(zU.definerHit))
            }
            const XU = UU[yA[1]] ? 15 : "11" === UU[yA[29]] ? yA[87] : "13" === UU[yA[29]] ? 13 : UU[yA[19]] !== yA[5] && UU[yA[19]] !== yA[3] ? yA[4] : "10" === UU[yA[29]] ? yA[46] : "12" === UU[yA[29]] ? 12 : yA[1];
            XU !== yA[1] && (mX = XU)
          })(XU), VX++ % 10 === yA[1] && (PX(), KQ((() => !jQ(yU[QU][yA[80]][yA[80]](), EU))) && (MX = MX === Iz[yA[66]][yA[88]] ? Iz[yA[66]][yA[88]] : Iz[yA[66]].Fr), KQ((() => !jQ(yU[QU][yA[80]](), EU))) && (MX = Iz[yA[66]][yA[88]])), {
            flags: XU ? Iz[yA[43]].Butto : yA[1],
            values: [
              [Iz[yA[81]].PhysicsVersion, sX],
              [Iz[yA[81]]["Inbuil" + yA[89] + yA[90]], nX],
              [Iz[yA[81]]["AltCom" + yA[91]], mX],
              [Iz[yA[81]]["ProbeUsedPro" + yA[28]], vX()]
            ]
          }
        }
      }
    };
    const FA = "[bloxd-wasm-client]",
      oA = "bloxdWasmDownloadFailed",
      DA = ez.h,
      EA = "boot",
      YA = "playSources",
      NA = "wasmBuild",
      IA = "bloxd-wasm-joined",
      pA = "bloxd-wasm-first-view",
      aA = "bloxd-wasm-playable-legacy",
      tA = 1048576,
      gA = 8 * tA,
      kA = 1006,
      GA = 1e3,
      BA = "You lost connection to the server.",
      ZA = "general:lostConnection",
      RA = 1048576,
      PA = 5e3,
      WA = 100,
      dA = [2e3, 1e4, 3e4],
      LA = 3e4;
    let eA = null,
      CA = null,
      wA = !1,
      qA = !1,
      OA = !1,
      SA = null,
      rA = null,
      uA = null,
      fA = null,
      iA = null,
      HA = null,
      MA = null;
    const vA = new class {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = UU, this.soundOn = XU, this.now = zU, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(UU) {
        var XU;
        this.stopped || (null === (XU = this.player) || void 0 === XU || XU.preload(UU))
      }
      endSession() {
        var UU;
        null === (UU = this.player) || void 0 === UU || UU.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var UU;
        null === (UU = this.player) || void 0 === UU || UU.freeSoundsAfterGame()
      }
      load(UU) {
        if (null !== this.player || this.stopped) return;
        this.player = UU, UU.setMaster(this.master, this.soundOn);
        const XU = this.now(),
          zU = this.local;
        this.local = [];
        for (const yU of zU)
          if (!(yU.stopped || !yU.loop && XU - yU.at >= 300)) try {
            this.start(yU, UU, XU)
          } catch (cU) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", cU)
          }
      }
      start(UU, XU, zU) {
        const {
          name: cU,
          pos: yU,
          ear: QU,
          maxHearDist: AU,
          refDistance: FU,
          loop: oU,
          fade: DU
        } = UU, EU = XU.playGame(cU, Dz(UU, zU), yU, QU, AU, FU, oU);
        if (UU.sound = EU, 1 !== UU.rate && EU.rate(UU.rate), null !== UU.panner && EU.setPannerAttr(UU.panner), null !== UU.moved && EU.setPosition(UU.moved), null !== DU && zU - DU.at < DU.ms) {
          const XU = oz(this.master);
          XU > 0 ? EU.fade(0, UU.volume * XU, DU.at + DU.ms - zU) : EU.setRelativeVolume(UU.volume)
        }
      }
      onAudioEvent(UU, XU, zU, cU) {
        var yU, QU;
        return null === (yU = null === (QU = this.player) || void 0 === QU ? void 0 : QU.onAudioEvent(UU, XU, zU, cU)) || void 0 === yU || yU
      }
      applyListener(UU) {
        var XU;
        null === (XU = this.player) || void 0 === XU || XU.applyListener(UU)
      }
      playGame(UU, XU, zU, cU, yU, QU, AU) {
        if (this.stopped) return Fz.d;
        if (this.player) return this.player.playGame(UU, XU, zU, cU, yU, QU, AU);
        const FU = this.now();
        this.local = this.local.filter((UU => !UU.stopped && (UU.loop || FU - UU.at < 300)));
        const oU = {
          name: UU,
          volume: oz(XU),
          fade: null,
          pos: zU && [zU[0], zU[1], zU[2]],
          ear: cU && [cU[0], cU[1], cU[2]],
          maxHearDist: yU,
          refDistance: QU,
          loop: AU,
          rate: 1,
          panner: null,
          moved: null,
          at: FU,
          stopped: !1,
          sound: null
        };
        this.local.push(oU);
        const DU = {
          stop: () => {
            var UU;
            return oU.stopped = !0, null === (UU = oU.sound) || void 0 === UU || UU.stop(), DU
          },
          fade: (UU, XU, zU) => {
            if (oU.sound) return oU.sound.fade(UU, XU, zU), DU;
            const cU = oz(this.master),
              yU = oz(cU > 0 ? XU / cU : XU > 0 ? oU.volume : 0),
              QU = this.now(),
              AU = Dz(oU, QU);
            return oU.volume = yU, oU.fade = zU > 0 && AU !== yU ? {
              from: AU,
              at: QU,
              ms: zU
            } : null, DU
          },
          rate: UU => (oU.sound ? oU.sound.rate(UU) : oU.rate = UU, DU),
          getVolume: () => oU.sound ? oU.sound.getVolume() : oU.volume * oz(this.master),
          getRelativeVolume: () => oU.sound ? oU.sound.getRelativeVolume() : oU.volume,
          setRelativeVolume: UU => (oU.sound ? oU.sound.setRelativeVolume(UU) : (oU.volume = oz(UU), oU.fade = null), DU),
          setPannerAttr: UU => (oU.sound ? oU.sound.setPannerAttr(UU) : oU.panner = {
            ...UU
          }, DU),
          setPosition: UU => (oU.sound ? oU.sound.setPosition(UU) : oU.moved = [UU[0], UU[1], UU[2]], DU)
        };
        return DU
      }
      setMaster(UU, XU) {
        var zU;
        this.master = UU, this.soundOn = XU, null === (zU = this.player) || void 0 === zU || zU.setMaster(UU, XU)
      }
      stop() {
        var UU;
        this.stopped = !0, null === (UU = this.player) || void 0 === UU || UU.stopAll();
        for (const XU of this.local) XU.stopped = !0;
        this.local = []
      }
    }((0, xX.e)(), !0);
    let VA = {
        wasm: "unknown",
        client: String(ZX.d)
      },
      sA = null,
      nA = !1,
      mA = () => {};
    const lA = new Promise((UU => {
      mA = XU => {
        nA = !0, UU(XU)
      }
    }));
    let xA = () => {};
    const JA = new Promise((UU => {
      xA = UU
    }));
    let jA, KA = null,
      bA = null,
      TA = null,
      hA = null,
      UF = null,
      XF = null,
      zF = null,
      cF = null,
      yF = null,
      QF = null,
      AF = null,
      FF = null,
      oF = null,
      DF = null,
      EF = null,
      YF = null,
      NF = null,
      IF = null,
      pF = null,
      aF = !1,
      tF = null;
    const gF = new Set,
      kF = new Set;

    function GF(UU) {
      if (!gF.has(UU)) {
        gF.add(UU);
        for (const zU of kF) try {
          zU(UU)
        } catch (XU) {
          console.error(`${FA} a startup listener threw`, XU)
        }
      }
    }

    function BF(UU) {
      aF = !0, UU.isStopped || GF("texturesIn")
    }
    let ZF = 1,
      RF = -1 / 0,
      PF = -1 / 0,
      WF = -1 / 0,
      dF = !1,
      LF = null,
      eF = !1,
      CF = !1,
      wF = 0,
      qF = null,
      OF = !1;
    const SF = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let rF = 0,
      uF = 0,
      fF = null,
      iF = null,
      HF = null,
      MF = null;
    const vF = new WeakMap;
    let VF = null,
      sF = null,
      nF = !1,
      mF = null,
      lF = null,
      xF = null,
      JF = null,
      jF = null,
      KF = null,
      bF = 0;
    const TF = new Set;
    let hF = 0,
      Uo = 0,
      Xo = 0,
      zo = null,
      co = null,
      yo = null,
      Qo = null,
      Ao = -1 / 0,
      Fo = null;
    const oo = new Set;
    let Do = !1,
      Eo = null;
    const Yo = new Map,
      No = new Set;
    let Io = !1;
    const po = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let ao = null,
      to = () => [0, 0],
      go = () => {},
      ko = () => {},
      Go = null,
      Bo = null;
    const Zo = new class {
      constructor(UU) {
        this.reached = UU, this.next = 1
      }
      observe(UU) {
        if (!(UU < this.next)) {
          for (; this.next <= UU;) this.next *= 2;
          this.reached(UU)
        }
      }
    }((UU => {
      console.warn(`${FA} chunk cancels from the server this session: ${UU}`)
    }));
    let Ro = 1,
      Po = null,
      Wo = null,
      Lo = null,
      eo = null,
      Co = null,
      wo = !1,
      qo = !1,
      Oo = 0,
      So = null,
      ro = !1,
      uo = null,
      fo = null,
      io = null,
      Ho = !1;
    const Mo = new class {
        constructor(UU) {
          this.UY = UU, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.uD = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(UU, XU, zU) {
          (0, bX.c)(UU) && (this.lossPending = !1);
          const cU = zU - this.lastFrameMs;
          this.lastFrameMs = zU, this.lossPending && XU && (0, bX.j)(UU) ? (null === this.undrawnSinceMs || cU > 1e3) && (this.undrawnSinceMs = zU) : this.undrawnSinceMs = null, this.show(this.uD || null !== this.undrawnSinceMs && zU - this.undrawnSinceMs >= 2e3)
        }
        hold(UU) {
          this.uD = UU, this.show(UU || this.shown)
        }
        stop() {
          this.uD = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(UU) {
          UU !== this.shown && (this.shown = UU, this.UY(UU))
        }
      }((UU => {
        oU.k.UY(pU.d, UU)
      })),
      vo = new class {
        constructor(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.oY = UU, this.now = XU, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(UU, XU) {
          this.watched.has(UU) || (this.watched.add(UU), UU.addEventListener("webglcontextlost", (() => {
            XU() && this.contextLost()
          })), UU.addEventListener("webglcontextrestored", (() => {
            XU() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(UU, XU) {
          (0, bX.j)(UU) && XU && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(UU) {
          const XU = this.lastRestore;
          return null !== XU && UU - XU.atMs < 3e4 ? XU : null
        }
        contextRestored() {
          const UU = this.take();
          if (null === UU) this.lastRestore = null;
          else {
            var XU, zU;
            const cU = this.unheldRestore(UU.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (XU = null === cU || void 0 === cU ? void 0 : cU.firstLostAtMs) && void 0 !== XU ? XU : UU.lostAtMs,
              asked: null !== (zU = null === cU || void 0 === cU ? void 0 : cU.asked) && void 0 !== zU && zU || UU.asked
            };
            const yU = UU.asked ? "restore_context" : "natural";
            this.oY(`webgl_restored_${yU}_${UU.delay}`, `WebGL2 context restored (${yU}, wasm)`)
          }
        }
        gaveUp() {
          const UU = this.take();
          if (null !== UU) {
            var XU;
            const zU = this.unheldRestore(UU.lostAtMs),
              cU = null === zU ? UU.delay : (0, TX.m)(this.now() - zU.firstLostAtMs),
              yU = UU.asked || null !== (XU = null === zU || void 0 === zU ? void 0 : zU.asked) && void 0 !== XU && XU ? "restore_tried" : "restore_untried";
            this.oY(`webgl_rejoin_${yU}_${cU}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const UU = this.lostAtMs;
          return null === UU ? null : (this.lostAtMs = null, {
            lostAtMs: UU,
            delay: (0, TX.m)(this.now() - UU),
            asked: this.asked
          })
        }
      }(Kz.reportRenderRecovery),
      Vo = new class {
        constructor(UU) {
          var XU, zU, cU, yU;
          this.deps = UU, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (XU = UU.storage) && void 0 !== XU ? XU : Uz.n, this.now = null !== (zU = UU.now) && void 0 !== zU ? zU : performance.now.bind(performance), this.wallNow = null !== (cU = UU.wallNow) && void 0 !== cU ? cU : Date.now, this.setTimer = null !== (yU = UU.setTimer) && void 0 !== yU ? yU : (UU, XU) => {
            setTimeout(UU, XU)
          }
        }
        watch(UU, XU) {
          this.watched.has(UU) || (this.watched.add(UU), UU.addEventListener("webglcontextlost", (() => {
            XU() && this.lost()
          })), UU.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const UU = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = UU, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = UU, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const UU = this.now(),
            XU = ++this.generation;
          this.setTimer((() => {
            XU === this.generation && this.end("restored", UU)
          }), 3e4)
        }
        reload(UU) {
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && this.lost(), this.deps.probe()) return this.end("cleared_reload"), void UU();
          this.heldReload = UU, this.deps.hold(!0);
          const XU = ++this.generation,
            zU = () => this.lastLostAtMs + jX.c + 5e3,
            cU = () => {
              this.setTimer(yU, Math.max(0, Math.min(5e3, zU() - this.now())))
            },
            yU = () => {
              XU === this.generation && (this.deps.probe() ? this.release("cleared_reload", UU) : this.now() >= zU() ? this.release("gave_up", UU) : cU())
            };
          cU()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const XU = (0, hX.f)(this.storage);
          null !== XU && this.writeMarker(UU ? {
            lostAt: XU.lostAt
          } : {
            ...XU,
            leftAt: this.wallNow()
          })
        }
        release(UU, XU) {
          this.end(UU), XU()
        }
        end(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const zU = this.firstLostAtMs;
          if (this.clear(), null !== zU) {
            const {
              code: cU,
              message: yU
            } = (0, hX.j)(UU, XU - zU);
            this.deps.oY(cU, yU)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(hX.d)
        }
        writeMarker(UU) {
          this.storage.setItem(hX.d, UU)
        }
      }({
        oY: Kz.reportRenderRecovery,
        probe: () => function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
          try {
            var zU;
            const cU = XU(),
              yU = UU ? cU.getContext("webgl") : cU.getContext("webgl2");
            return null !== yU && (null === (zU = yU.getExtension("WEBGL_lose_context")) || void 0 === zU || zU.loseContext(), !0)
          } catch {
            return !1
          }
        }("rust_webgl1" === (0, xy.B)()),
        hold: UU => {
          Mo.hold(UU)
        }
      });
    let so = !1,
      no = !0,
      mo = null,
      xo = !1,
      Jo = !1,
      jo = !1;

    function Ko() {
      if (null === Po) return null;
      const {
        canvas: UU,
        backend: XU
      } = Po;
      return {
        canvas: UU,
        renderer: Az.e[XU]
      }
    }

    function bo() {
      return uA ??= Promise.all([zU.e(215), zU.e(49), zU.e(168), zU.e(71)]).then((() => zU(53727))).then((UU => (rA = UU, Object.assign(globalThis, {
        bloxdPreviewPage: UU.pagePreviews()
      }), UU)), (UU => {
        throw uA = null, UU
      })), uA
    }

    function To() {
      return SA ??= zU.e(69).then((() => zU(53743))).catch((UU => {
        throw SA = null, new nU.b(UU)
      })), SA
    }
    class ho {
      constructor() {
        this.host = null
      }
      open(UU) {
        return null !== this.host ? UU(this.host) : bo().then((XU => (this.host ??= new XU.WasmPreviewHost(XU.pagePreviews()), UU(this.host))))
      }
      openMob(UU) {
        return this.open((XU => XU.openMob(UU)))
      }
      openPet(UU) {
        return this.open((XU => XU.openPet(UU)))
      }
      openMobLineup(UU) {
        return this.open((XU => XU.openMobLineup(UU)))
      }
      openCharacter(UU, XU) {
        return this.open((zU => zU.openCharacter(UU, XU)))
      }
    }

    function UD() {
      OA || (OA = !0, vy.i.setHost(new ho), (0, Uc.p)(), fy.d.setFollower(EE), Object.assign(globalThis, {
        bloxdPreviews: vy.i
      }))
    }

    function XD() {
      bo().then((UU => {
        UU.pagePreviews().prefetch()
      }), (() => {}))
    }

    function zD() {
      let UU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (qA) return;
      qA = !0, so = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), no = !so, console.info(`${FA} starting`), wA || (wA = !0, (0, pU.J)(new cz(BD, CD, Ko)), (0, NU.n)(new yz), (0, pU.H)(new Qz((() => performance.now() - RF))), (0, pU.z)()), so && oU.k.subscribe("appManagerUpdated|gameState", GD), UD(), (0, Kz.setCrashScreen)((UU => {
        let {
          text: XU,
          reload: zU
        } = UU;
        ! function(UU, XU) {
          var zU, cU;
          if (xo) return;
          xo = !0, (0, zc.gb)(), null === (zU = Fo) || void 0 === zU || zU.abort(), Fo = null, iy.b.release();
          const yU = so ? null !== (cU = UU.cancel) && void 0 !== cU ? cU : "general:back" : null;
          Xy({
            ...UU,
            cancel: yU
          }).then((UU => {
            UU && XU && Jo ? ((0, SX.D)("reloadOntoJs"), (0, EX.j)(SX.L)) : UU && XU ? (0, EX.l)() : so && (0, EX.f)("/")
          }))
        }(XU, zU)
      })), (0, dy.i)(), (0, lX.g)();
      let XU = null;
      try {
        XU = cA("yx721g5zt8", (() => {
          var UU, XU;
          return null !== (UU = null === (XU = KA) || void 0 === XU ? void 0 : XU.ws) && void 0 !== UU ? UU : null
        }), UU, "fuexskgmtl")
      } catch (yU) {
        console.error(`${FA} probes`, yU)
      }
      const cU = function() {
        const UU = (0, Ey.o)(),
          XU = (0, Ey.g)();
        let zU = !1;
        return cU => {
          UU && !zU && (zU = !0, (0, Kz.reportStaleBuildReload)(UU, XU, cU))
        }
      }();
      NE(), so || function() {
        const UU = function(UU) {
          var XU;
          const zU = new URLSearchParams(UU),
            cU = zU.get("game");
          return cU ? {
            game: cU,
            lobby: null !== (XU = zU.get("lobby")) && void 0 !== XU ? XU : null
          } : null
        }(window.location.search);
        if (UU) return (0, RX.l)(UU.game) && NE().request(), void QD(UU.game, UU.lobby);
        const XU = new URLSearchParams(window.location.search).get("ws");
        if (!XU) return;
        lA.then((UU => {
          UU && async function(UU, XU) {
            try {
              await (0, nU.j)(UU), mF = rD(new WebSocket(XU)), null !== mF && iy.b.setGame(null), cD()
            } catch (yU) {
              console.error(`${FA} ?ws=${XU} did not attach`, yU)
            }
          }(UU, XU)
        }))
      }(), async function(UU) {
        var XU, cU, QU, AU, FU, DU;
        if ("undefined" === typeof WebAssembly) return KD("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const EU = (0, xy.V)();
        let NU = await (0, xy.N)();
        if (TD(NU, EU) && function() {
            const UU = Date.now();
            return !(0, rX.u)((0, rX.w)(), UE, UU, rX.c) && (0, rX.q)(UE, UU, rX.c)
          }()) {
          const UU = await async function(UU) {
            const {
              detail: XU,
              details: zU
            } = zE(UU);
            console.warn(`${FA} ${XU}: waiting for a WebGL context`);
            const cU = performance.now(),
              yU = await by({
                sleep: (UU, XU) => (0, sX.e)(UU, XU).catch((() => {})),
                repick: async () => {
                  const UU = await (0, xy.X)();
                  return TD(UU, !1) ? null : {
                    DI: UU
                  }
                },
                showScreen: UU => {
                  const XU = (0, Tc.o)();
                  return Xy({
                    ...XU,
                    cancel: so ? XU.cancel : null
                  }, UU)
                }
              }),
              QU = String(Math.round(performance.now() - cU));
            if (null === yU.picked) {
              const UU = yU.gaveUp ? "waited" : "left";
              return (0, Kz.reportLoadRecovery)({
                step: "noContext",
                outcome: "gaveUp",
                tries: yU.tries,
                detail: `${XU}; ${UU}`,
                details: {
                  ...zU,
                  waitedMs: QU
                }
              }), yU.gaveUp ? {
                gaveUp: !0
              } : (QE() && ((0, SX.E)("noContext"), (0, SX.D)("decline")), (0, EX.f)("/"), null)
            }
            const {
              DI: AU
            } = yU.picked;
            if (!(0, ez.r)(AU)) {
              var FU;
              const UU = null !== (FU = null === AU || void 0 === AU ? void 0 : AU.backend) && void 0 !== FU ? FU : "none";
              (0, Kz.reportLoadRecovery)({
                step: "noContext",
                outcome: "recovered",
                tries: yU.tries,
                detail: XU,
                details: {
                  ...zU,
                  backend: UU,
                  waitedMs: QU
                }
              }), null !== AU && (0, xy.T)(AU.backend)
            }
            return yU.picked
          }(NU);
          if (null === UU) return null;
          if ("gaveUp" in UU) {
            const {
              detail: UU,
              details: XU
            } = zE(NU);
            return (0, Kz.setCrashBackend)("unsupported"), KD("browser", "noContext", UU, {
              ...XU,
              afterWait: "true"
            }), null
          }
          NU = UU.DI
        }
        const IU = await async function(UU, XU) {
          const zU = (0, ez.r)(UU) ? XE(UU, XU) : null;
          if (null === zU || void 0 === zU || !zU.retries) return UU;
          console.warn(`${FA} ${zU.detail}: picking again in ${bD} ms`), await new Promise((UU => {
            setTimeout(UU, bD)
          }));
          const cU = await (0, xy.X)();
          if (!(0, ez.r)(cU)) {
            var yU;
            (0, Kz.reportNoBackendRetry)("reprobed", zU.decline, zU.detail, {
              ...zU.details,
              backend: null !== (yU = null === cU || void 0 === cU ? void 0 : cU.backend) && void 0 !== yU ? yU : "none"
            }), null !== cU && (0, xy.T)(cU.backend)
          }
          return cU
        }(NU, EU);
        if ((0, Kz.setCrashBackend)((0, ez.r)(IU) ? "unsupported" : null !== (XU = null === IU || void 0 === IU ? void 0 : IU.backend) && void 0 !== XU ? XU : "none"), (0, ez.r)(IU)) return function(UU) {
          let {
            decline: XU,
            detail: zU,
            details: cU,
            retries: yU
          } = UU;
          if (yU && (0, SX.o)()) return (0, Kz.reportNoBackendRetry)("reload", XU, zU, cU), void cE(`${zU}, again after ${bD} ms`);
          KD("browser", XU, zU, yU ? {
            ...cU,
            afterReload: String(SX.z)
          } : cU)
        }(XE(IU, EU)), null;
        if ((0, pQ.q)("render")) try {
          const {
            startRenderDebug: UU
          } = await Promise.all([zU.e(89), zU.e(56)]).then((() => zU(5164)));
          UU(IU)
        } catch (ZX) {
          console.warn("The render debug topic didn't load", ZX)
        }
        if ((0, pQ.q)("renderlite")) try {
          const {
            startRenderLite: UU
          } = await Promise.all([zU.e(294), zU.e(57)]).then((() => zU(53755)));
          Lo = UU(IU)
        } catch (ZX) {
          console.warn("The renderlite debug topic didn't load", ZX)
        }
        if ((0, pQ.q)("renderprobe")) try {
          const {
            startRenderProbe: UU
          } = await zU.e(58).then((() => zU(53764)));
          UU(IU)
        } catch (ZX) {
          console.warn("The renderprobe debug topic didn't load", ZX)
        }
        if ("webgl" === (null === IU || void 0 === IU ? void 0 : IU.backend) && so && "wasm" !== (0, SX.g)(window.location.search)) {
          const UU = Fy(IU);
          null !== UU && (0, uX.h)(UU)
        }
        const pU = null !== (cU = null === IU || void 0 === IU ? void 0 : IU.backend) && void 0 !== cU ? cU : null;
        po.adapter = null !== (QU = null === IU || void 0 === IU ? void 0 : IU.adapter) && void 0 !== QU ? QU : null, po.boundAtMs = null, po.indirectHangs = null, po.restoresSkipped = null;
        const aU = !(0, ez.nb)();
        null === IU || (0, ez.I)(IU.reason) || console.info(`${FA} drawing with ${IU.backend}: ${IU.reason}`);
        const tU = (0, xy.x)();
        eU("previews"), xA(!0), (0, nU.s)((UU => {
          try {
            null !== pU && (Go = UU.startSkyFeed, oE(), function(UU) {
              var XU, zU;
              to = UU.rasterText, xF = UU.setTextLocalPlayer, UU.setTextLocalPlayer(null !== (XU = null === (zU = lF) || void 0 === zU ? void 0 : zU.info.playerDbId) && void 0 !== XU ? XU : null), go = UU.drainTextRerasters, ko = UU.loadTextIcons, UU.warmText((() => wo)), UU.textChanged(), wo && setTimeout(ko, 0)
            }(UU), Bo = UU.startShellAnalytics, kE())
          } finally {
            jo || (eo = UU.followMenuPrefs({
              setSoundPrefs: qD,
              setEnvPrefs: OD,
              setUiPrefs: wD,
              setLookPrefs: SD
            }))
          }
        })), (0, nU.l)(vA).catch((UU => {
          console.warn(`${FA} the game code did not load: a join asks again`, UU)
        }));
        const gU = (0, xy.k)(IU);
        let kU, GU;
        gU.catch((() => {})), "loading" === (0, dX.A)() && (wU(), eU("load"));
        try {
          kU = function(UU) {
            const XU = null !== UU && void 0 !== UU ? UU : document.createElement("canvas");
            XU.id = "wasm-game-canvas", vo.watch(XU, VE), Vo.watch(XU, VE),
              function(UU) {
                if (JE.has(UU)) return;
                JE.add(UU), UU.addEventListener("webglcontextlost", (() => {
                  var UU;
                  const XU = null !== MF && fE(),
                    zU = null === (UU = window.bloxdRenderDebug) || void 0 === UU ? void 0 : UU.vaos;
                  setTimeout((() => {
                    var UU, cU, yU, QU, AU;
                    null === (UU = Lo) || void 0 === UU || UU.glContextLost(XU, zU, null !== (cU = null !== (yU = !1 === (null === (QU = fA) || void 0 === QU ? void 0 : QU.isStopped) ? fA.addDistanceInUse() : null) && void 0 !== yU ? yU : null === (AU = xE()) || void 0 === AU ? void 0 : AU.horizontal) && void 0 !== cU ? cU : null)
                  }), 0)
                }))
              }(XU), (0, cQ.l)();
            const zU = (0, zz.d)(),
              cU = (0, zz.e)(zU);
            XU.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, zQ.c)(XU, cU), (0, zz.b)(XU, zU), XU.width = cU.bufferWidth, XU.height = cU.bufferHeight;
            const yU = document.createElement("div");
            return yU.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", yU.append(XU), ZD(yU, no), mo = yU, document.body.append(yU), XU
          }(null === pU ? null : await (await bo()).pagePreviews().beginSession())
        } catch (yU) {
          return qU("fetch"), await AY({
            site: NA,
            error: yU
          }, (() => {
            (0, Kz.showUnsupported)((0, Tc.u)("fetch"), RQ.c.fetch, `the previews did not load: ${String(yU)}`)
          })), null
        }
        wU(), eU("loading" === (0, dX.A)() ? "load" : "build");
        try {
          GU = await gU
        } catch (yU) {
          return qU("fetch"), await AY({
            site: NA,
            error: yU
          }, (() => {
            (0, Kz.showUnsupported)((0, Tc.u)("fetch"), RQ.c.fetch, `the ${null!==pU&&void 0!==pU?pU:"client"} build did not load: ${String(yU)}`)
          })), null
        }
        const ZU = (0, xy.f)(),
          RU = !ZU && !0 !== Uz.n.getItem(oA),
          PU = !ZU && "loading" === (0, dX.A)();
        eU("load"), await (0, Jy.e)(GU, {
          reloadFailedDownload: RU
        }), PU && !(0, dX.T)() && await (0, Jy.e)(GU, {
          reloadFailedDownload: RU
        });
        let WU = !1,
          dU = !1;
        const LU = (0, dX.r)();
        if (!(0, dX.T)() && ("compile" === LU || "instantiate" === LU) && (0, dX.N)()) {
          const UU = (0, dX.j)();
          console.warn(`${FA} the wasm client did not ${LU} here (${UU}): loading it again`);
          const XU = await async function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jy,
              zU = !1,
              cU = 0;
            for (const yU of XU) {
              if (!UU.retryable()) break;
              if (UU.outOfMemory() && (zU = !0, "js" === UU.stepDownMemory())) return {
                recovered: !1,
                tries: cU,
                outOfMemory: zU,
                toJs: !0
              };
              if (await UU.sleep(yU), cU++, await UU.retry()) return {
                recovered: !0,
                tries: cU,
                outOfMemory: zU,
                toJs: !1
              }
            }
            return zU ||= UU.outOfMemory(), {
              recovered: !1,
              tries: cU,
              outOfMemory: zU,
              toJs: !1
            }
          }({
            sleep: UU => (0, sX.e)(UU),
            outOfMemory: () => (0, tz.c)((0, dX.o)()),
            retryable: dX.N,
            stepDownMemory: () => "instantiate" !== (0, dX.r)() || !yE() || (0, lz.n)() ? "none" : "halve" === (0, lz.l)() ? "halved" : "js",
            retry: Jy.i
          });
          WU = XU.outOfMemory, dU = XU.toJs;
          const {
            tries: zU,
            recovered: cU
          } = XU, yU = cU ? UU : (0, dX.j)();
          (0, Kz.reportLoadRecovery)({
            step: "load",
            stage: LU,
            oom: WU,
            outcome: cU ? "recovered" : "gaveUp",
            tries: zU,
            detail: yU
          })
        }
        BU ??= performance.now();
        const OU = VA;
        if (!(0, dX.T)()) {
          (0, dX.Q)() && "compile" !== LU && "instantiate" !== LU && Uz.n.setItem(oA, !0);
          const UU = (0, dX.r)();
          if (qU("instantiate" === UU || null === UU ? `instantiate_${CU((0,dX.o)())}` : UU), "call" === UU) nE({
            site: wz.w,
            error: (0, dX.o)(),
            header: null
          }, OU);
          else {
            const XU = null !== UU && void 0 !== UU ? UU : "instantiate",
              zU = () => {
                (0, Kz.showUnsupported)((0, Tc.u)(XU), RQ.c[XU], (0, dX.j)())
              },
              cU = "compile" === LU || "instantiate" === LU ? LU : UU;
            if ("compile" !== cU && "instantiate" !== cU || !QE())
              if ("fetch" === XU) {
                const UU = [GU.url().href, qX.g.url().href];
                await AY({
                  site: NA,
                  error: (0, dX.j)(),
                  urls: UU
                }, zU)
              } else zU();
            else {
              const UU = (0, dX.j)(),
                XU = WU || (0, tz.c)((0, dX.o)());
              if (XU && !dU && "js" !== (0, lz.l)(Date.now(), !0)) return (0, Kz.reportCountedLoadFallback)((0, Tc.u)(cU), RQ.c[cU], UU, "wasmReload"), cE(`the wasm client ran out of memory to ${cU} here (${UU})`), null;
              (0, Kz.reportCountedLoadFallback)((0, Tc.u)(cU), RQ.c[cU], UU, XU ? "declined" : "pageAlone"), AE(`the wasm client did not ${cU} here (${UU})`, XU ? "oom" : null)
            }
          }
          return null
        }(0, eX._)(GU.url()) && (0, Kz.reportUnstreamedCoreLoad)();
        const SU = (0, dX.E)();
        let rU, uU = OU;
        eU("core");
        try {
          uU = {
            ...OU,
            wasm: SU.sY()
          };
          const {
            lt: UU
          } = GU.bindings, XU = UU.KcU();
          if (XU !== Iz.y) return qU("core_other"), nE({
            site: wz.d,
            error: `core ABI ${XU}, page ABI ${Iz.y}`,
            header: null
          }, uU), null;
          const [zU, cU] = (0, Iz.ze)();
          rU = new UU(zU, cU)
        } catch (yU) {
          return qU(`core_${CU(yU)}`), nE({
            site: wz.d,
            error: yU,
            header: null
          }, uU), null
        }
        qU("ok"), VA = uU, sA = GU.bindings;
        const fU = new wz.h(rU, dX.x, {
          onCrash: UU => {
            var XU;
            null === (XU = Lo) || void 0 === XU || XU.crashed(UU),
              function(UU, XU, zU, cU) {
                if ("webgpu" !== XU || (0, xy.c)()) return !1;
                const yU = function(UU) {
                  if (UU.site === wz.e && (0, ez.t)(UU.error)) return "frames_refused";
                  return UU.site === DA && (0, ez.x)(UU.error) ? "start_failed" : null
                }(UU);
                if (null === yU) return !1;
                if (null !== (0, ez.lb)(yU, cU, (0, Cz.c)(UU.error))) return (0, Kz.countRenderLost)(yU, UU.error, po), !1;
                return jX.J.reloaded(null, !1), (0, Kz.reportRenderReload)("webgpu", "start_failed" === yU ? 0 : 1, zU, {
                  cause: yU,
                  error: UU.error,
                  context: po,
                  session: jE(null)
                }), dE(), !0
              }(UU, pU, uU, aU) || nE(UU, uU)
          },
          onNetEvent: RE,
          onReconnectGrace: xD,
          onJoinPreloadEnded: lD,
          onCoreErrors: (UU, XU) => {
            var zU, cU;
            UU.some((UU => {
              let {
                code: XU
              } = UU;
              return XU === Iz.K.RenderDeviceLost
            })) && ((0, xy.u)(), Mo.deviceLost(), "webgpu" === pU && ((0, Cz.f)(ao), jX.J.lost())), null === (zU = Lo) || void 0 === zU || zU.coreErrors(UU);
            const yU = () => {
              (0, Kz.reportCoreErrors)(UU, XU, uU, ((UU, XU) => {
                var zU;
                return UU === Iz.K.EnvUnknownSky ? (0, Kz.unknownSkyWords)(fX.d.get("skyBox")) : UU === Iz.K.RenderDeviceLost ? (0, Kz.deviceLossWords)(XU, po.boundAtMs) : null === (zU = ao) || void 0 === zU ? void 0 : zU.bcU(UU, XU)
              }))
            };
            UU.some((UU => {
              let {
                code: XU
              } = UU;
              return XU === Iz.K.EnvUnknownSky
            })) ? queueMicrotask(yU) : yU(), null === (cU = tF) || void 0 === cU || cU.coreErrors(UU)
          },
          onRenderReload: (UU, XU, zU) => {
            ! function(UU, XU, zU, cU, yU, QU) {
              var AU;
              if ((0, xy.c)()) return;
              const FU = XU === Iz.Yc.WEBGPU,
                oU = cU === Iz.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                DU = cU === Iz.Yc.RESTORE_LOST,
                EU = FU && (0, jX.o)(po.adapter, zU, "lost" === oU, DU),
                NU = (0, Cz.j)(ao);
              null === (AU = Lo) || void 0 === AU || AU.reload(FU, zU, oU, null === NU || void 0 === NU ? void 0 : NU.message);
              const IU = FU ? (0, ez.lb)(oU, yU, NU) : null;
              if (null !== IU) {
                (0, Kz.countRenderLost)(oU, NU, po);
                const XU = void 0 === NU ? "" : ` (${NU.message})`;
                return void UU.crash(Kz.RENDER_RELOAD_SITE, new Error(`${(0,Kz.renderReloadMessage)("webgpu",oU,zU)} and ${IU}${XU}`))
              }
              const pU = FU ? "webgpu" : "webgl1" === QU ? "webgl1" : "webgl";
              "lost" === oU && (0, xy.u)();
              FU || ((0, SX.y)(), vo.gaveUp());
              (0, Kz.reportRenderReload)(pU, zU, VA, {
                from: "game",
                cause: oU,
                restoreLost: DU,
                adapterRemembered: EU,
                error: NU,
                context: po,
                session: jE(UU.sunShadowsHeld())
              }), (0, xy.n)();
              const aU = (0, YU.e)();
              let tU = !1;
              const gU = () => {
                tU || (tU = !0, FU ? dE() : Vo.reload(dE))
              };
              let kU = null;
              const GU = (0, YU.q)((() => {
                null !== kU && clearTimeout(kU), aU ? setTimeout(gU, WE) : gU()
              }));
              !tU && aU && (kU = setTimeout((() => {
                GU(), gU()
              }), PE))
            }(fU, UU, XU, zU, aU, pU)
          },
          onEnvEvent: UU => {
            var XU;
            UU.kind === Iz.W.SkyImages ? null === (XU = YF) || void 0 === XU || XU.onEvent(UU.payload) : UU.kind === Iz.W.EnvLighting && (NF = 1 === UU.payload[0])
          },
          onImages: UU => {
            var XU;
            null === (XU = IF) || void 0 === XU || XU.onEvent(UU)
          },
          onModelRequest: UU => {
            var XU;
            null === (XU = oF) || void 0 === XU || XU.request(UU)
          },
          onModelTaken: (UU, XU) => {
            var zU;
            null === (zU = oF) || void 0 === zU || zU.taken(UU, XU)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(UU, XU) {
                const zU = MA;
                if (null === zU || UU.isStopped) return;
                zU.restore((UU => {
                  (0, Kz.reportTerrainTextureFailure)(UU, XU)
                })).then((XU => {
                  !1 !== XU || UU.isStopped ? !0 === XU && console.info(`${FA} terrain textures handed over again after the renderer lost them`) : console.warn(`${FA} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(fU, uU)
            }))
          },
          onKeepAlive: UU => {
            const XU = null === MF ? void 0 : vF.get(MF);
            void 0 !== XU && py(XU, UU)
          },
          onSends: () => {
            ! function(UU) {
              const XU = performance.now();
              if (UU.forEachNetOut(ME), uE(UU), (0, wz.N)(UU, {
                  worldgen: TA,
                  mesh: UF
                }), null !== Wo) try {
                Wo.sendsWent(UU, XU, performance.now())
              } catch (yU) {
                ZE(yU)
              }
            }(fU)
          }
        });
        if (fA = fU, null === (AU = Xz.d.wasmNetReady) || void 0 === AU || AU.call(Xz.d, (() => fU.isStopped ? 0 : fU.netKeptFrames)), null !== UU) {
          fU.setAntiCheatProbes(hQ(dX.x, UU.checks)), UU.watchHeld(XA.CoreFrame, (() => fU.frame)), UU.watchHeld(XA.GlueFrame, (() => rU.frame));
          const XU = function(UU, XU) {
            const zU = new UA(XU);
            let cU = !1;
            zU.LY(UU.LY());
            const yU = (0, Ny.Z)((() => {
              zU.LY(UU.LY())
            }), zA);
            let QU = 6 * (0, Ny.U)() | 0;
            const AU = () => {
              ++QU < 6 || (QU = 0, UU.checks.stackCheck() && (cU = !0))
            };
            (0, OQ.k)(AU);
            const FU = () => {
              const XU = UU.checkPadCall();
              0 !== XU && zU.setFlags(XU)
            };
            return (0, qQ.f)(FU), {
              onSend: AU,
              beforeFrame: () => {
                cU && zU.originStackHit() && (cU = !1)
              },
              onEvent: XU => {
                const cU = UU.checkEvent(XU);
                zU.value(Iz.g.ProbeUsedProp, UU.usedProp()), 0 !== cU && zU.setFlags(cU)
              },
              stop: () => {
                (0, Ny.ab)(yU), (0, OQ.i)(AU), (0, qQ.d)(FU)
              }
            }
          }(UU, ((UU, XU, zU) => {
            let cU = !1;
            return hE(fU, (() => {
              cU = fU.rings.input.writeRecord(Iz.tb.AntiCheat, UU, XU, zU, 0)
            })), cU
          }));
          fU.isStopped ? XU.stop() : AF = XU
        }
        eA = (UU, XU, zU) => fU.rings.cmd.writeCmd(UU, XU, zU), CA = UU => fU.rings.cmd.growForCmd(UU), OF = !1, oE(), (0, nU.u)(fU, {
          core: rU,
          memory: dX.x,
          staleOr: (UU, XU, zU, cU) => AY({
            site: UU,
            error: XU
          }, zU, cU),
          reportReplayFault: (UU, XU) => {
            (0, Kz.reportReplayFault)(UU, XU, VA)
          },
          audio: vA,
          options: fX.d,
          onNetEvent: RE,
          sessionInfo: UU => {
            var XU;
            return (null === (XU = lF) || void 0 === XU ? void 0 : XU.conn) === UU ? lF.info : null
          },
          onEventOverflow: gD,
          replayShaderPack: UU => {
            var XU;
            null === (XU = tF) || void 0 === XU || XU.replay(UU)
          },
          hasPackModel: UU => {
            var XU, zU;
            return null !== (null !== (XU = null === (zU = DE()) || void 0 === zU ? void 0 : zU.modelUrl(UU)) && void 0 !== XU ? XU : null)
          },
          beforeWrite: () => (!eF && fU.rings.net.cursor > 0 && CE(fU, !1, "all"), !fU.isStopped),
          beforeOp: () => (!eF && fU.netWrittenSinceFrame > 0 && CE(fU, !1, "budget"), !fU.isStopped)
        }), (0, sU.D)({
          lockPointer: () => {
            if (!Rc(kU)) return !1;
            try {
              Promise.resolve(kU.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Ec.c)()
          },
          leaveGame: () => {
            tD()
          },
          canvas: () => kU
        }), FF = (0, sU.t)((() => {
          var UU;
          const XU = (0, nU.f)();
          null === (UU = (0, nU.o)()) || void 0 === UU || UU.followCursorAim(!0 === (null === XU || void 0 === XU ? void 0 : XU.isSessionLive) ? XU : null)
        })), fF && fU.setUiPrefs(fF);
        iF && fU.setEnvPrefs(iF);
        HF && fU.setLookPrefs(HF);
        const iU = UQ ? XQ(UQ.preventMovement) : null;
        iU && eD(iU);
        const HU = (0, lz.j)(),
          MU = (0, lz.d)(fU, HU);
        yF = HU.basis, (0, Fc.l)((0, Xc.d)(null === MU ? null : (0, mz.s)(MU), (0, Xc.g)())), cF = MU;
        const vU = (0, CX.e)();
        let VU = 1 / 0,
          mU = !0,
          lU = HU.shedFootprintBytes;
        const xU = new Wy.d(vU, (() => rU.Ag()), (UU => {
          fU.crash(wz.o, UU)
        }));
        XF = xU, zF = xU, null !== MU && xU.setCeiling(Math.min((0, Wy.r)(MU), VU, (0, lz.k)()));
        if (mU) {
          xU.setShed((UU => {
            const XU = fU.shedMemory("joinReserve" !== UU && "gcPressure" !== UU);
            return null !== XU && (null === cF || XU < cF) && (cF = XU, (0, Fc.l)((0, Xc.d)((0, mz.s)(XU), (0, Xc.g)()))), XU
          }), ((UU, XU, zU) => {
            1 === XU ? (0, Kz.reportMemoryShed)(UU, zU, VA) : console.warn(`${FA} wasm memory: shed again (${UU}): shed ${XU}`, zU.wasmMemoryShed)
          }), (() => fU.addDistanceInUse()));
          const UU = (0, ez.Y)(SU);
          xU.setFootprint(new IQ(lU, {
            storedChunks: () => rU.TcU(),
            gpuBytes: () => {
              var XU;
              return null !== (XU = null === UU || void 0 === UU ? void 0 : UU.hcU()) && void 0 !== XU ? XU : 0
            },
            jsHeapBytes: NQ
          })), (0, Ac.g)("wasm", xU, (() => {
            vA.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          XF === xU && (xU.refreshStats(), TE(xU))
        })), window.addEventListener("pagehide", LE), window.addEventListener("pagehide", eE), !1;
        const [JU, jU] = (0, hz.d)();
        Co = (0, Xc.k)((UU => {
          const XU = (0, Xc.o)(UU, (0, Xc.g)());
          return fU.setChunkAddDistance(XU.horizontal, XU.vertical)
        }), {
          horizontal: JU,
          vertical: jU
        }), fU.setAmbientOcclusion(!0 !== Uz.k.getItem("disableAmbientOcclusion")), fU.setPoseLod(!0 !== Uz.k.getItem(WX.R)), fU.setDebugLog(Iz.P.Look, !0), fU.setDebugLog(Iz.P.CameraSet, !0), (0, tQ.startLookDebug)("wasm", {
          look: () => fU.takeDebugLog(Iz.P.Look),
          cameraSets: () => fU.takeDebugLog(Iz.P.CameraSet)
        }), (0, pQ.q)("remesh") && (fU.setDebugLog(Iz.P.Remesh, !0), KU = () => fU.takeDebugLog(Iz.P.Remesh), ZQ = new BQ((0, gQ.n)(), KU));
        var KU;
        const bU = function(UU, XU, zU, cU) {
          const yU = new vc,
            QU = UU => Uz.k.getItem(UU);
          yU.sync(QU, XU), (0, KX.Q)();
          const AU = (0, oU.n)("customBindingsChanged", (() => {
            yU.sync(QU, XU)
          }));
          (0, Yc.u)(XU);
          const FU = new Set,
            DU = (0, sU.t)((() => {
              var UU;
              FU.size > 0 && mc() && !0 === (null === (UU = (0, nU.f)()) || void 0 === UU ? void 0 : UU.localPlayerAlive()) && oU.k.UY("usedKeyboard")
            })),
            EU = qc.c.heldSizer((() => (0, zz.g)(UU))),
            YU = wc(UU, XU, {
              prevents: UU => yU.prevents(UU),
              keyPressed: UU => {
                yU.moves(UU) && (FU.add(UU), mc() && oU.k.UY("usedKeyboard"))
              },
              keyReleased: UU => {
                FU.delete(UU)
              },
              keysReleased: () => {
                FU.clear()
              },
              resized: () => {
                sc.j.measure(UU.getBoundingClientRect()), (0, Oc.k)()
              },
              sizeCanvas: EU,
              watchRenderScale: XU => {
                const zU = (0, zz.k)(UU, XU),
                  cU = qc.c.onRelease(XU);
                return () => {
                  zU(), cU()
                }
              },
              touchStarting: () => {
                sc.j.measure(UU.getBoundingClientRect())
              },
              viewShown: zU,
              touchUiShown: () => YX.e.get("isTouchScreen"),
              ctrlCombosAreGames: mc,
              inspect: (UU, XU, zU) => {
                yU.checks(XU, zU) && cU(UU)
              },
              canLock: () => Rc(UU)
            }),
            NU = (0, fz.c)(XU);
          return () => {
            AU(), DU(), (0, Yc.u)(null), NU(), YU()
          }
        }(kU, ((UU, XU, zU, cU, yU) => {
          hE(fU, (() => {
            fU.rings.input.writeRecord(UU, XU, zU, cU, yU)
          })), !CF && (0, Kc.c)(UU, yU) && (0, Kc.b)((() => {
            fA !== fU || jo || fU.isStopped || !iE() || CE(fU, !1, "budget", !1)
          }))
        }), (() => no), (UU => {
          var XU;
          null === (XU = AF) || void 0 === XU || XU.onEvent(UU)
        }));
        if (fU.isStopped) return bU(), null;
        bA = bU;
        const TU = () => !fU.isStopped && !xo;
        if (fU.isStopped) return null;
        (0, dX._)((() => {
          "call" === (0, dX.r)() && fU.crash(wz.w, (0, dX.o)())
        }));
        const hU = (0, wz.Q)(fU.rings.worker, (() => {
          CE(fU, !1, document.hidden ? "all" : "budget")
        }));
        TA = function(UU, XU, zU) {
          return UY().then((UU => {
            let {
              prefetchWorldgenWorker: XU
            } = UU;
            XU()
          }), (() => {})), new eQ({
            module: (0, dX.y)(),
            decodeSettings: UU => {
              const XU = (0, nU.o)();
              if (null === XU) throw new Error("no game code to decode the world-gen seed with");
              return XU.decodeMapSettings(UU)
            },
            loadWorker: XY,
            onMapWithoutWorldgen: () => {
              zY((UU => {
                let {
                  stopWorldgenWorkerPrefetch: XU
                } = UU;
                XU()
              }))
            },
            onLoadFailed: UU => {
              (0, Kz.reportWorldgenLoadFailure)(UU, VA)
            },
            onWorkerLost: (UU, XU) => {
              !async function(UU, XU, zU) {
                const cU = UU === WQ || UU.startsWith(dQ);
                if (!cU || XU) return void zU.oY(cU);
                const yU = () => {
                  zU.oY(!0)
                };
                let QU;
                try {
                  QU = await zU.scriptUrl()
                } catch {
                  return void yU()
                }
                await zU.staleOr({
                  site: wz.J,
                  error: new Error(`a world-gen worker's load failed (${UU}): ${QU}`),
                  urls: [QU]
                }, yU)
              }(UU, XU, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: UU
                  } = await UY();
                  return UU()
                },
                staleOr: (UU, XU) => AY(UU, XU, {
                  stillWanted: zU
                }),
                oY: XU => {
                  (0, Kz.reportWorldgenWorkerLost)(UU, XU, VA, {
                    build: (0, Ey.g)(),
                    ageMs: (0, zc.H)()
                  })
                }
              })
            },
            onStartTimeout: UU => {
              (0, Kz.reportWorkerStartTimeout)(wz.J, UU, VA)
            },
            onGaveUp: UU => {
              (0, Kz.reportWorldgenGaveUp)(UU, VA)
            },
            onMemoryStats: UU => {
              var XU;
              null === (XU = XF) || void 0 === XU || XU.noteWorldgen(UU)
            },
            onMemoryGone: () => {
              var UU;
              null === (UU = XF) || void 0 === UU || UU.worldgenGone()
            },
            write: (zU, cU, yU, QU, AU) => {
              hE(UU, (() => {
                UU.rings.worker.writeWorkerRecord(zU, cU, yU, 0, QU, AU) || UU.crash(wz.J, `a world-gen record of kind ${cU} did not fit the worker-in ring`)
              })), XU()
            }
          })
        }(fU, hU, TU), UF = function(UU, XU) {
          return new Ry({
            module: (0, dX.y)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: UU
              }, XU] = await Promise.all([zU.e(48).then((() => zU(53809))), Promise.resolve().then((() => zU(97))).then((UU => {
                let {
                  isMobile: XU
                } = UU;
                return XU()
              }), (() => !1))]);
              return {
                create: UU,
                count: (0, mX.i)(XU),
                maxKeptLightStates: XU || (0, nX.l)() ? 1 : void 0
              }
            },
            write: (zU, cU, yU, QU, AU, FU) => {
              (0, Oc.i)(), hE(UU, (() => {
                UU.rings.worker.writeWorkerRecord(zU, cU, yU, QU, AU, FU) || UU.crash(wz.r, `a meshing record of kind ${cU} did not fit the worker-in ring`)
              })), XU()
            },
            onWorkerLost: UU => {
              (0, Kz.reportWorkerLost)(wz.r, UU, VA)
            },
            onLightFault: (UU, XU) => {
              (0, Kz.reportLightFault)(UU, XU, VA)
            },
            onStartTimeout: UU => {
              (0, Kz.reportWorkerStartTimeout)(wz.r, UU, VA)
            },
            onMemoryStats: (UU, XU) => {
              var zU;
              null === (zU = XF) || void 0 === zU || zU.noteMeshWorker(UU, XU)
            },
            onMemoryGone: UU => {
              var XU;
              null === (XU = XF) || void 0 === XU || XU.meshWorkerGone(UU)
            },
            fail: (XU, zU) => {
              const cU = () => {
                UU.crash(wz.r, void 0 === zU ? XU : new Error(XU, {
                  cause: zU
                }))
              };
              void 0 !== zU ? AY({
                site: wz.r,
                error: zU
              }, cU) : cU()
            }
          })
        }(fU, hU), GD();
        const UX = (0, Hy.p)(vX.clientSideServerUrls.staticUrl, {
            onTableFailed: UU => {
              AY({
                site: Kz.MODEL_FEED_SITE,
                error: UU
              }, (() => {}), {
                stillWanted: TU
              })
            },
            packUrl: UU => {
              var XU, zU;
              return null !== (XU = null === (zU = DE()) || void 0 === zU ? void 0 : zU.modelUrl(UU)) && void 0 !== XU ? XU : null
            }
          }),
          XX = function(UU, XU, zU) {
            const cU = zU => {
              var cU, yU;
              return null !== (cU = null === (yU = XU()) || void 0 === yU ? void 0 : yU.drawnUrl(zU)) && void 0 !== cU ? cU : UU.url(zU)
            };
            return (0, fy.f)((0, Ly.p)(cU), zU)
          }(UX, (() => oF), DE),
          zX = new Ly.g(XX, (UU => {
            console.warn(`${FA} image ${UU.key.kind}:${UU.key.index}:${UU.key.word} failed`, UU.error)
          }));
        IF = zX, pF = new Sy(fU, XX, ((UU, XU) => {
          void 0 === XU ? console.warn(`${FA} ${UU}`) : YE(UU, XU)
        }));
        const cX = new uy.i(UX, function(UU, XU) {
          let cU = !1,
            yU = null,
            QU = null;
          const AU = {
              onUnavailable: (zU, cU) => {
                QU ??= AY({
                  site: Kz.MODEL_POOL_SITE,
                  error: zU,
                  urls: cU
                }, (() => {
                  (0, Kz.reportModelPoolFailure)(zU, UU)
                }), {
                  stillWanted: XU
                })
              },
              onWorkerLost: XU => {
                (0, Kz.reportWorkerLost)(Kz.MODEL_POOL_SITE, XU, UU)
              },
              onModuleRetry: (XU, zU) => {
                (0, Kz.reportModelsModuleRetry)(XU, zU, UU)
              }
            },
            FU = zU.e(50).then((() => zU(53818))).then((UU => {
              let {
                pageModelPool: XU
              } = UU;
              if (cU) return null;
              const zU = XU(AU);
              return yU = zU.unlisten, DF = zU.pool, GD(), zU.pool
            }), (UU => (cU || AU.onUnavailable(UU, void 0), null)));
          return EF = () => {
            var UU;
            cU = !0, null === (UU = yU) || void 0 === UU || UU(), DF = null
          }, (UU, XU) => FU.then((zU => {
            var cU;
            return null !== (cU = null === zU || void 0 === zU ? void 0 : zU.build(UU, XU)) && void 0 !== cU ? cU : (0, My.s)(UU, "the model workers did not load")
          })).then((UU => null !== QU && (0, My.j)(UU) ? QU.then((() => UU)) : UU))
        }(uU, TU), (UU => {
          UU.startup ? (sE(), AY({
            site: Kz.MODEL_FEED_SITE,
            error: UU.error,
            urls: "" === UU.url ? void 0 : [UU.url]
          }, (() => {
            (0, Kz.reportModelFailure)(UU, uU)
          }))) : (0, Kz.reportModelFailure)(UU, uU)
        }), {
          onWritten: (UU, XU) => {
            zX.glbWritten(UU, XU)
          },
          onTaken: (UU, XU) => {
            zX.glbTaken(UU, XU)
          },
          onPackFileFailed: (UU, XU) => {
            console.warn(`${FA} the texture pack's model file ${UU} failed: the shipped one loads`, XU)
          }
        });
        oF = cX;
        const yX = new wy.d(fU);
        MA = yX, yX.swap((UU => {
          const XU = () => {
            (0, Kz.reportTerrainTextureFailure)(UU, uU)
          };
          if (wo) return void XU();
          const zU = () => !wo,
            cU = null === UU.url ? void 0 : [UU.url];
          AY({
            site: wz.F,
            error: UU.error,
            urls: cU
          }, XU, {
            stillWanted: zU
          })
        })).then((UU => {
          null !== UU && (UU || fU.isStopped || console.warn(`${FA} the core refused the terrain textures: terrain draws untextured`), BF(fU))
        }));
        const QX = new Yz(fU, ((UU, XU) => {
          console.warn(`${FA} ${UU}`, ...void 0 === XU ? [] : [XU])
        }));
        QX.feed(), null !== pU && function(UU, XU, cU, yU, QU, AU) {
          let FU = null,
            DU = null,
            EU = !1;
          const YU = {
            textures: null,
            stop: () => {
              var UU, XU;
              EU = !0, null === (UU = DU) || void 0 === UU || UU(), null === (XU = FU) || void 0 === XU || XU(), iy.b.setSettled(null), null !== sA && yD.clear(sA)
            }
          };
          HA = YU, DU = NE().follow((DU => {
            null !== DU && Promise.all([zU.e(219), zU.e(53)]).then((() => zU(53771))).then((zU => {
              let {
                PackTextures: NU
              } = zU;
              if (EU || UU.isStopped) return;
              const IU = new NU({
                feed: DU,
                terrain: XU,
                backend: cU,
                stopped: () => UU.isStopped,
                landed: () => {
                  BF(UU)
                },
                packSwapped: () => {
                  (0, fy.e)(yU), AU.feed((() => async function(UU) {
                    const XU = null === UU ? null : await UU.averageColours;
                    return null === XU ? Nz() : Ez(XU)
                  }(IU.assets))), (0, ry.k)(IU.files()), QU.refresh().then((UU => {
                    null !== UU && console.info(`${FA} texture pack models: ${UU.resent} of ${UU.delivered} files written again, ${UU.refetched} refetched`)
                  }))
                },
                settled: (UU, XU, zU) => {
                  var cU;
                  (iy.b.setSettled({
                    state: UU,
                    files: XU
                  }), function(UU, XU, zU) {
                    const cU = null === UU.gameSource && (0, bz.g)(UU.pack);
                    if (null === XU) return;
                    const yU = (0, jz.h)(XU.error),
                      QU = cU ? "settings" : XU.source;
                    oU.k.UY(jz.c, {
                      failure: yU,
                      source: QU,
                      pack: Tz(UU)
                    }), (0, Kz.reportTexturePackKeptOut)(QU, yU, XU.error, zU)
                  }(UU, zU, VA), null === zU) && function(UU) {
                    const XU = sA;
                    null !== XU && yD.apply(XU, UU).then((XU => {
                      XU && UU && console.info(`${FA} the texture pack's animations are in (${Object.keys(UU).length} files)`)
                    }))
                  }(null === (cU = UU.pack) || void 0 === cU ? void 0 : cU.animations)
                },
                settling: () => {
                  iy.b.setSettled(null)
                },
                warn: YE,
                maxTextureSize: () => Promise.resolve((0, ez.pb)(document.createElement("canvas")))
              });
              YU.textures = IU, FU = IU.start()
            }), (UU => {
              console.warn(`${FA} the texture pack's terrain didn't load: the built atlas stays`, UU)
            }))
          }))
        }(fU, yX, pU, zX, cX, QX);
        const AX = () => {
            fU.setTextureLayers("")
          },
          FX = UU => {
            (MX ??= zU.e(65).then((() => zU(53827))).then((UU => {
              let {
                TEXTURE_NAMES: XU
              } = UU;
              return XU
            }), (UU => {
              throw MX = null, UU
            })), MX).then((UU => {
              fU.setTextureLayers(UU) || fU.isStopped || (console.warn(`${FA} the core refused the texture names: textured Boxes draw textureNotFound`), AX())
            }), (XU => {
              if (fU.isStopped) return;
              const [zU, ...cU] = UU;
              void 0 === zU ? AY({
                site: Kz.TEXTURE_NAMES_SITE,
                error: XU
              }, (() => {
                console.warn(`${FA} the texture names didn't load, so textured Boxes draw textureNotFound`, XU), AX()
              }), {
                stillWanted: TU
              }) : setTimeout((() => {
                FX(cU)
              }), zU)
            }))
          };
        if (FX(dA), null !== pU && !await async function(UU, XU, zU, cU, QU, AU) {
            var FU;
            const oU = (0, ez.Y)(zU);
            if (null === oU) return UU.crash(DA, new Error(`this ${cU} build has no openRenderer`)), !1;
            let DU;
            ao = oU;
            try {
              var EU, YU, NU, IU;
              const yU = null !== (EU = null === (YU = rA) || void 0 === YU ? void 0 : YU.pagePreviews()) && void 0 !== EU ? EU : null,
                FU = null !== (NU = null === (IU = rA) || void 0 === IU ? void 0 : IU.previewModule(zU)) && void 0 !== NU ? NU : null;
              if (null === yU || null === FU) {
                null === yU || void 0 === yU || yU.endSession(!1), DU = (0, zz.d)().sampleCount, await (0, ez.j)(XU, oU, AU, FE, DU, await QU);
                const UU = (0, ez.p)(zU);
                null === UU && console.warn(`${FA} this ${cU} build has no image registry: sky and model images won't show`), (0, Cy.i)(UU)
              } else {
                (0, xy.c)() && await (0, EX.n)();
                const zU = (0, xy.F)();
                if (null !== zU) {
                  const XU = (0, Cz.j)(oU);
                  return UU.crash(Kz.RENDER_RELOAD_SITE, new Error(`${zU}${void 0===XU?"":` (${XU.message})`}`)), !1
                }
                DU = await yU.bindSession(FU, XU, (async UU => (0, ez.B)(oU, DA, AU, UU, FE, await QU)))
              }
            } catch (yU) {
              return UU.crash(DA, yU), !1
            }(function(UU, XU) {
              const zU = UU,
                {
                  requestCapture: cU,
                  takeCapture: yU
                } = zU;
              if ("function" !== typeof cU || "function" !== typeof yU) return;
              const QU = {
                request() {
                  cU.call(zU, XU)
                },
                take() {
                  var UU;
                  return null !== (UU = yU.call(zU)) && void 0 !== UU ? UU : null
                }
              };
              window[yQ] = QU
            })(XU, DU), Ro = DU, Io = !0;
            const pU = performance.now();
            return po.boundAtMs = null !== (FU = (0, xy.I)()) && void 0 !== FU ? FU : pU, po.indirectHangs = (0, xy.v)(), po.restoresSkipped = (0, xy.M)(), console.info(`${FA} ${cU} renderer bound at ${Math.round(pU)} ms`), !UU.isStopped
          }(fU, rU, SU, pU, tU, kU)) return null;
        if (null !== pU) {
          var oX, NX, IX;
          (0, wX.F)(pU);
          const UU = () => !fU.isStopped && fE();
          zU.e(210).then((() => zU(34748))).then((XU => {
            let {
              devTools: zU
            } = XU;
            fU.isStopped || zU.setHost(function(UU) {
              return {
                tools: ly,
                async downloadScene(XU, zU) {
                  let {
                    width: cU,
                    height: yU,
                    colouring: QU
                  } = zU;
                  "screenshot" === XU && null === QU ? await (0, sy.i)(UU, cU, yU) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (XU, zU, cU) => (0, sy.e)(UU, XU, zU, cU)
              }
            }(function(UU, XU) {
              return {
                canvas: UU,
                maxTextureSize: ny,
                BY: XU,
                resize: (UU, XU, zU) => {
                  (0, Yc.C)(Iz.tb.Resize, 0, UU / zU, XU / zU, (0, Yc.m)(zU))
                },
                restoreSize: () => {
                  const XU = (0, zz.g)(UU);
                  null !== XU && (0, Yc.C)(Iz.tb.Resize, 0, XU.cssWidth, XU.cssHeight, (0, Yc.m)(XU.renderScale))
                },
                onFrameDrawn: UU => (my.add(UU), () => {
                  my.delete(UU)
                })
              }
            }(kU, UU)))
          }), (UU => {
            console.warn(`${FA} the developer tools didn't load: no captures this session`, UU)
          }));
          const XU = "webgpu" === pU && null !== (oX = null === IU || void 0 === IU || null === (NX = IU.adapter) || void 0 === NX ? void 0 : NX.vendor) && void 0 !== oX ? oX : null;
          Po = {
            backend: pU,
            canvas: kU,
            fallbackReason: null !== (IX = null === IU || void 0 === IU ? void 0 : IU.reason) && void 0 !== IX ? IX : null,
            adapterVendor: XU
          }, kE();
          try {
            (0, Oc.r)(pU, kU, XU)
          } catch (yU) {
            (0, Oc.u)(), console.error(`${FA} the quality steps didn't start`, yU)
          }
        }
        const {
          storagePullBreaks: pX,
          splitPassBreaks: aX
        } = await tU;
        aX && console.warn(`${FA} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const tX = (0, DX.c)(IU, (0, jX.l)());
        if ((0, pQ.q)("webgpuloss")) {
          var gX, kX;
          const UU = {
            backend: pU,
            reason: null !== (gX = null === IU || void 0 === IU ? void 0 : IU.reason) && void 0 !== gX ? gX : null,
            source: null !== (kX = null === IU || void 0 === IU ? void 0 : IU.source) && void 0 !== kX ? kX : null,
            storagePullBreaks: pX,
            noWebGpu: tX.messageKey
          };
          (0, aQ.b)((XU => {
            XU.noteWasmPick(UU)
          }))
        }
        const GX = "webgpu" === pU;
        if (tF = (0, DX.g)(GX ? fU : null, GX && null !== (FU = null === (DU = rA) || void 0 === DU ? void 0 : DU.pagePreviews().Fp) && void 0 !== FU ? FU : null, tX, YE), jo) return null;
        if (xU.reserveAtJoin((0, Wy.o)(null !== MU && void 0 !== MU ? MU : mz.j)), fU.isStopped) return null;
        const BX = UU => {
          if (WF = performance.now(), dF = !1, null !== Wo) try {
            Wo.animationFrame(UU)
          } catch (yU) {
            ZE(yU)
          }
          if (function(UU, XU) {
              return XU && !jo && !CF && iE() && fE() && UU.framePaces(performance.now())
            }(fU, no)) {
            if (fU.writePendingInput(), (0, sU.c)(UU, wE), GE(!1, UU), null !== Wo) try {
              Wo.framePaced()
            } catch (yU) {
              ZE(yU)
            }
            requestAnimationFrame(BX)
          } else CE(fU, no, "budget") && ((0, bX.j)(fU.lastFrameKind) && fE() && (0, sU.c)(UU, wE), GE(no && Ho, UU), Mo.frame(fU.lastFrameKind, no && fE(), UU), vo.frame(fU.lastFrameKind, no && fE()), (0, bX.c)(fU.lastFrameKind) && jX.J.drew(), lE(fU), xU.afterFrame(), requestAnimationFrame(BX))
        };
        requestAnimationFrame(BX);
        return function(UU) {
          if (UU.has("inputLog") && (0, Vc.k)((UU => {
              let {
                action: XU,
                down: zU,
                press: cU
              } = UU;
              console.info(`${nc} input ${XU} ${zU?"down":"up"} press ${cU} at ${performance.now().toFixed(1)}`)
            })), UU.has("inputDump")) {
            const UU = [];
            lc = UU, Object.assign(window, {
              bloxdInputDump: () => UU.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), QF = function(UU) {
          let XU = null;
          const zU = () => {
              null !== XU && (clearInterval(XU), XU = null)
            },
            cU = () => {
              document.hidden ? XU ??= setInterval((() => {
                yY(UU) || zU()
              }), WA) : zU()
            };
          return document.addEventListener("visibilitychange", cU), cU(), () => {
            zU(), document.removeEventListener("visibilitychange", cU)
          }
        }(fU), fU
      }(XU).then((UU => {
        var XU;
        (cU(VA), xA(null !== UU), null !== UU && (ZU = performance.now()), mA(UU), null === UU) ? null === (XU = rA) || void 0 === XU || XU.pagePreviews().endSession(null === (0, dX.r)()): GF("booted")
      }), (UU => {
        cU(VA), xA(!1), mA(null), nE({
          site: EA,
          error: UU,
          header: null
        }, VA)
      }))
    }

    function cD() {
      const UU = sA;
      null !== UU && bo().then((XU => {
        let {
          pageBuiltInAnimationPack: zU
        } = XU;
        zU().provide(UU)
      }), (UU => {
        console.warn(`${FA} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, UU)
      }))
    }
    const yD = new class {
      constructor(UU) {
        this.deps = UU, this.latest = 0, this.uD = null
      }
      apply(UU, XU) {
        return this.load(UU, XU, 0)
      }
      async load(UU, XU, zU) {
        var cU;
        const yU = ++this.latest,
          QU = this.deps.compiler;
        if (void 0 === XU || null === XU || "object" !== typeof XU || 0 === Object.keys(XU).length || null === QU) return this.drop(UU), !1;
        if ((null === (cU = this.uD) || void 0 === cU ? void 0 : cU.module) === UU && (0, Rz.oe)(this.uD.files, XU)) return !1;
        try {
          const [zU, cU] = await Promise.all([QU(), this.deps.builtIns()]);
          if (yU !== this.latest) return !1;
          const AU = await zU(XU, Lz, {
            builtIns: cU
          });
          if (yU !== this.latest) return !1;
          const FU = this.call(UU, AU);
          if (void 0 === FU) throw new dz("the compiled animations didn't read against the built-in pack");
          return this.uD = {
              module: UU,
              files: XU
            },
            function(UU) {
              for (let XU = 0; XU + 2 < UU.length; XU += 3) {
                ("error" === UU[XU] ? console.error : console.warn)(`Animation for the texture pack: ${UU[XU+1]}: ${UU[XU+2]}`)
              }
            }(FU), !0
        } catch (FU) {
          var AU;
          if (yU !== this.latest) return !1;
          this.drop(UU), 0 === zU && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", FU);
          const cU = (null !== (AU = this.deps.retryAfterMs) && void 0 !== AU ? AU : Wz)[zU];
          return void 0 === cU || FU instanceof dz || (0, Pz.i)(UU) || setTimeout((() => {
            yU === this.latest && this.load(UU, XU, zU + 1)
          }), cU), !1
        }
      }
      call(UU, XU) {
        try {
          return UU.jcU(XU)
        } catch (zU) {
          throw (0, Pz.k)(UU, zU), zU
        }
      }
      clear(UU) {
        this.latest++, this.drop(UU)
      }
      drop(UU) {
        const XU = this.uD;
        if (this.uD = null, (null === XU || void 0 === XU ? void 0 : XU.module) === UU && !(0, Pz.i)(UU)) try {
          this.call(UU, null)
        } catch {}
      }
    }({
      compiler: kz.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: UU
        } = await bo();
        return UU().whenSet()
      },
      warn: YE
    });
    async function QD(UU, XU) {
      let cU = !1;
      await AD({
        matchmake: async () => {
          const {
            guestJoinTarget: yU,
            guestJoinWithPack: QU
          } = await zU.e(297).then((() => zU(53747)));
          return cU ? yU(UU, XU, pE()) : (cU = !0, QU(UU, XU, (XU => aE(UU, XU)), pE))
        },
        onFailure: UU => {
          (0, Kz.showJoinFailure)(UU, VA)
        },
        rejoin: RD,
        invalidateTrafficCode: PD
      })
    }
    async function AD(UU) {
      let {
        matchmake: XU,
        onFailure: zU,
        rejoin: yU,
        invalidateTrafficCode: QU,
        pageReady: AU,
        signal: FU
      } = UU;
      const oU = () => !0 === (null === FU || void 0 === FU ? void 0 : FU.aborted);
      let DU;
      const EU = iy.b.rejoinHold();
      sF = null, (0, Qc.g)();
      const YU = (0, zc.cb)("wasm", bE);
      let NU = !1,
        IU = performance.now();
      try {
        if (!await JA) return {
          kind: "stopped"
        };
        if (oU()) return {
          kind: "QU"
        };
        To().catch((() => {}));
        let UU = await XU();
        var aU, eU;
        if (IU = performance.now(), !oU()) KE(null !== (aU = null === (eU = UU.target.session) || void 0 === eU ? void 0 : eU.gameNameWithVariation) && void 0 !== aU ? aU : null);
        const zU = () => performance.now() - UU.matchedAt <= UU.freshMs,
          cU = oD(UU.target).catch((() => {}));
        zU() && !oU() && (DU = new Gy(UU.target, {
          signal: FU
        }));
        const QU = performance.now();
        let EU = () => {};
        oU() || (EU = function(UU, XU) {
          OU(), UU || dU || null !== WU && "ok" !== WU || (dU = !0, (0, pU.n)("wasm_boot_wait", performance.now(), `${PU}:${XU()}:${(0,tU.m)()}`)), LU++;
          let zU = !1;
          return () => {
            zU || (zU = !0, LU--)
          }
        }(nA, LX.i), null === FU || void 0 === FU || FU.addEventListener("abort", EU, {
          once: !0
        }));
        const YU = await lA;
        if (EU(), null === FU || void 0 === FU || FU.removeEventListener("abort", EU), null === YU) return {
          kind: "stopped"
        };
        var CU, wU;
        if (function(UU) {
            var XU, zU;
            if (gU.c.markGameEngineConstructed(), RU) return;
            RU = !0;
            const cU = Math.max(UU, null !== (XU = GU) && void 0 !== XU ? XU : UU);
            (0, kU.g)("ready", Math.max(0, (null !== (zU = BU) && void 0 !== zU ? zU : cU) - cU) / 1e3)
          }(QU), !oU())
          if (null !== BU && null !== ZU ? (0, pU.n)("wasm_core_ready", ZU) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), UU.target.session && (0, PQ.c)(UU.target.session.gameNameWithVariation)) null === (CU = TA) || void 0 === CU || CU.prestart();
        if (await cU, !zU() && !oU()) null === (wU = DU) || void 0 === wU || wU.rematched(), UU = await XU(), IU = performance.now();
        if (oU()) return {
          kind: "QU"
        };
        const qU = await async function(UU) {
          var XU, zU, cU;
          let {
            signal: yU,
            rejoin: QU = null,
            early: AU,
            pageReady: FU
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== yU && void 0 !== yU && yU.aborted) throw new DOMException("the join was left", "AbortError");
          const oU = (DU = co, EU = performance.now(), null !== DU && EU - DU < oy);
          var DU, EU;
          co = null;
          const YU = new AbortController,
            NU = null !== (XU = null === (zU = UU.session) || void 0 === zU ? void 0 : zU.gameNameWithVariation) && void 0 !== XU ? XU : null;
          KE(NU), YD({
            controller: YU,
            game: NU
          }), yo = null, null === (cU = Fo) || void 0 === cU || cU.abort(), Fo = null, Do = !1, Eo = null, Yo.clear();
          const IU = () => {
            (0, VX.h)(YU, (0, VX.e)(yU))
          };
          null === yU || void 0 === yU || yU.addEventListener("abort", IU, {
            once: !0
          });
          try {
            var aU, tU, gU;
            const XU = await lA;
            if (null === XU || XU.isStopped || jo) throw new Error("no core is running to join a game with");
            if (UU.session && null !== tF) {
              const XU = await DD(tF.join(UU.session.gameNameWithVariation), YU.signal);
              if ((0, pQ.q)("webgpuloss")) {
                const zU = UU.session.gameNameWithVariation,
                  cU = tF.couldntRunInJoinedGame();
                (0, aQ.b)((UU => UU.noteWasmJoin(zU, XU, cU)))
              }
              if (null !== XU) throw new DX.b(XU)
            }
            const [, , , {
              joinRoom: zU
            }] = await DD(Promise.all([(0, nU.j)(XU), oD(UU), null === FU || void 0 === FU ? void 0 : FU(), To()]), YU.signal), cU = UU.session, yU = cU ? {
              ...LD,
              attachSocket: XU => {
                const zU = rD(XU, UU.endpoint);
                var yU;
                null !== zU && (lF = {
                  conn: zU,
                  info: cU
                }, null === (yU = xF) || void 0 === yU || yU(cU.playerDbId));
                return zU
              }
            } : LD, DU = await zU(yU, UU, {
              signal: YU.signal,
              early: AU
            }).catch((UU => {
              throw function(UU) {
                if (!(UU instanceof UX.c)) return UU;
                if ("roomError" === UU.stage && null !== Eo) return FD(new UX.c(UU.message, UU.stage, UU.code, Eo), UU);
                const XU = "closed" === UU.stage && null !== Qo ? Yo.get(Qo.conn) : void 0;
                return void 0 === XU ? UU : FD(new UX.c(UU.message, UU.stage, XU.code, null, UU.socketOpened), UU)
              }(UU)
            }));
            if (VF !== YU) throw DU.leave(), new DOMException("the join was left", "AbortError");
            ID(DU), null === (aU = UF) || void 0 === aU || aU.newGame();
            const EU = function(UU, XU) {
              var zU, cU;
              const {
                session: yU
              } = UU, QU = void 0 === yU ? UU.joinOptions.lobbyName : yU.lobbyName;
              return {
                endpoint: UU.endpoint,
                game: null !== (zU = null === yU || void 0 === yU ? void 0 : yU.gameNameWithVariation) && void 0 !== zU ? zU : UU.roomName,
                lobby: String(null !== QU && void 0 !== QU ? QU : null),
                sessionId: XU,
                postCookies: null !== (cU = UU.postCookies) && void 0 !== cU ? cU : null
              }
            }(UU, DU.seat.sessionId);
            vF.set(DU, EU), ty(EU);
            const NU = performance.now(),
              IU = {
                conn: DU.conn,
                rejoin: QU,
                game: null !== (tU = null === (gU = UU.session) || void 0 === gU ? void 0 : gU.gameNameWithVariation) && void 0 !== tU ? tU : "",
                joinedAt: NU,
                rejoinedAt: oU ? NU : null,
                overflow: null
              };
            JF = IU,
              function(UU, XU) {
                sD();
                const zU = {
                  endpoint: XU,
                  roomId: UU.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Vz({
                    reconnect: (UU, XU, cU) => async function(UU, XU, zU, cU) {
                      const {
                        roomId: yU,
                        roomToken: QU
                      } = mD(UU, XU), AU = fA;
                      if (null === AU || AU.isStopped || jo) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: FU
                      } = await DD(To(), zU), oU = {
                        ...LD,
                        attachSocket: XU => jF !== UU || 0 === UU.heldConn ? (XU.close(), null) : rD(XU, UU.endpoint, !0)
                      };
                      return FU(oU, UU.endpoint, yU, QU, {
                        signal: zU,
                        onAttached: cU
                      })
                    }(zU, UU, XU, cU),
                    releaseSeat: UU => {
                      !async function(UU, XU) {
                        const {
                          roomId: zU,
                          roomToken: cU
                        } = mD(UU, XU);
                        try {
                          const {
                            leaveHeldSeat: XU
                          } = await To();
                          await XU(UU.endpoint, zU, cU)
                        } catch (yU) {
                          console.warn(`${FA} the held seat of a game left while it reconnected couldn't be released`, yU)
                        }
                      }(zU, UU)
                    },
                    isLive: () => jF === zU && null !== JF && !jo,
                    nC: UU => {
                      zo = UU, VD()
                    },
                    onReconnected: UU => {
                      ! function(UU) {
                        const XU = MF;
                        if (null !== XU && XU !== UU) {
                          const zU = vF.get(XU);
                          void 0 !== zU && vF.set(UU, zU), io === XU && (io = UU), XU.detach()
                        }
                        ID(UU)
                      }(UU)
                    },
                    onGaveUp: (UU, XU) => {
                      ! function(UU, XU, zU) {
                        var cU, yU;
                        console.warn(`${FA} gave up reconnecting (${zU.reason}, ${zU.attempts} attempts)`, zU.lastError), (0, Kz.reportReconnectGaveUp)(zU, VA);
                        const QU = null !== (cU = null === (yU = JF) || void 0 === yU ? void 0 : yU.rejoin) && void 0 !== cU ? cU : null;
                        nD(UU, "gaveUp"), aD();
                        const AU = {
                          code: UU.dropCode,
                          name: null,
                          reason: BA,
                          canReconnect: !XU,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        dD(AU, XU ? null : QU, !1, {
                          reasonKey: ZA,
                          canPlayAgain: XU
                        })
                      }(zU, UU, XU)
                    }
                  })
                };
                jF = zU, null !== KF && KF.conn === UU.conn && zU.resume.onInitialInfo(KF)
              }(DU, UU.endpoint), performance.mark(IA), (0, pU.n)("wasm_joined", NU), setTimeout((() => {
                MF === DU && (0, pU.f)()
              }), 0), cD(), console.info(`${FA} joined ${UU.roomName} as ${DU.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const kU = yo;
            yo = null, null !== kU && kD(IU, kU.mask, kU.frames);
            const GU = Yo.get(DU.conn);
            return Yo.clear(), void 0 !== GU && (ID(null), WD(DU.conn, GU.code, GU.reason)), DU
          } finally {
            var kU;
            null === yU || void 0 === yU || yU.removeEventListener("abort", IU), VF === YU && ND(MF, null), (null === (kU = Qo) || void 0 === kU ? void 0 : kU.join) === YU && (Qo = null)
          }
        }(UU.target, {
          signal: FU,
          rejoin: yU(UU.target),
          early: DU,
          pageReady: AU
        });
        return NU = !0, {
          kind: "joined",
          game: qU
        }
      } catch (SU) {
        if (SU instanceof DOMException && "AbortError" === SU.name || oU()) return {
          kind: "QU"
        };
        if (jo) return {
          kind: "stopped"
        };
        if (Do && (Do = !1, await QU().catch((UU => {
            console.warn(`${FA} the cached traffic code could not be dropped`, UU)
          }))), null === await lA) return {
          kind: "stopped"
        };
        if (SU instanceof DX.b) return zU(SU, performance.now() - IU), {
          kind: "failed",
          error: SU,
          reloading: !1
        };
        if (SU instanceof UX.c && SU.code === cU.e.wasmClientNotAllowed.code && so) return AE("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: SU,
          reloading: !0
        };
        const UU = SU instanceof UX.c && SU.code === cU.e.outdatedVersion.code,
          XU = () => null === MF,
          yU = await AY({
            site: Kz.JOIN_SITE,
            error: SU,
            outdated: UU
          }, (() => {
            zU(SU, performance.now() - IU)
          }), {
            stillWanted: XU
          });
        return {
          kind: "failed",
          error: SU,
          reloading: yU
        }
      } finally {
        var qU;
        NU || YU.end(), iy.b.releaseHold(EU);
        const UU = null === (qU = DU) || void 0 === qU ? void 0 : qU.release();
        UU && (0, Kz.reportUnusedSeat)(UU, VA)
      }
    }

    function FD(UU, XU) {
      return UU.stack = XU.stack, UU
    }

    function oD(UU) {
      return UU.session ? (0, nU.n)(vA, UU.session.gameNameWithVariation) : Promise.resolve()
    }

    function DD(UU, XU) {
      return (0, VX.l)(XU), new Promise(((zU, cU) => {
        const yU = () => {
          cU((0, VX.e)(XU))
        };
        XU.addEventListener("abort", yU, {
          once: !0
        }), UU.then((UU => {
          XU.removeEventListener("abort", yU), zU(UU)
        }), (UU => {
          XU.removeEventListener("abort", yU), cU(UU)
        }))
      }))
    }

    function ED() {
      YD(null)
    }

    function YD(UU) {
      var XU, zU, cU;
      (function() {
        const UU = jF;
        null !== UU && nD(UU, "left")
      }(), null === KA || KA.left) || (KA.left = !0, null === (cU = (0, nU.f)()) || void 0 === cU || cU.socketLeft(), (0, NU.o)({
        websocketUrl: null
      }));
      VF && (0, VX.h)(VF, new DOMException("the join was left", "AbortError")), aD(null !== UU), null === (XU = tF) || void 0 === XU || XU.leave();
      const yU = MF;
      null !== UU && iy.b.setGame(UU.game), ND(null, null !== (zU = null === UU || void 0 === UU ? void 0 : UU.controller) && void 0 !== zU ? zU : null), null === yU || void 0 === yU || yU.leave(), pD(0), (0, iX.f)()
    }

    function ND(UU, XU) {
      MF = UU, VF = XU, null === MF && null === VF && iy.b.setGame(void 0)
    }

    function ID(UU) {
      ND(UU, VF)
    }

    function pD(UU) {
      const XU = fA;
      return null !== eA && !jo && null !== XU && !XU.isStopped && (!!eA(UX.h, 0, (0, UX.u)(UU)) && (OF = !0, 0 === UU || CF || CE(XU, !1, "all"), !0))
    }

    function aD() {
      var UU, XU;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, zc.i)();
      const zU = null !== (UU = null === (XU = JF) || void 0 === XU ? void 0 : XU.overflow) && void 0 !== UU ? UU : null;
      JF = null, null !== zU && (0, Kz.reportEventOverflow)(zU, VA)
    }

    function tD() {
      null !== MF || null !== VF ? ED() : uD()
    }

    function gD(UU, XU) {
      console.warn(`${FA} the event buffer refused records in ${XU} frames (categories ${UU})`), jo || (null !== JF ? kD(JF, UU, XU) : null !== VF && function(UU, XU, zU) {
        var cU;
        const yU = function(UU, XU) {
          return null === UU ? "drop" : UU.activated ? "keep" : 0 !== (XU & pz.t.NetSession) ? "fail" : "drop"
        }((null === (cU = Qo) || void 0 === cU ? void 0 : cU.join) === UU ? Qo : null, XU);
        "keep" === yU ? yo = {
          mask: XU,
          frames: zU
        } : "fail" === yU && (0, VX.h)(UU, new Error("the join's net session was lost to an event overflow"))
      }(VF, UU, XU))
    }

    function kD(UU, XU, zU) {
      const cU = UU.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      cU.frames += zU, cU.acks++, cU.mask |= XU;
      const yU = function(UU, XU, zU) {
        if (0 === (UU & pz.t.NetSession)) return "none";
        const cU = null !== XU.rejoinedAt && zU - XU.rejoinedAt < Dy;
        return null === XU.rejoin || cU ? "fail" : "rejoin"
      }(XU, UU, performance.now());
      "none" !== yU && queueMicrotask((() => {
        if (JF !== UU) return;
        const XU = "rejoin" === yU && performance.now() - Ao >= hU.f;
        cU.outcome = XU ? "rejoined" : "failed", dD(function(UU, XU) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: UU,
            automaticallyReconnect: XU,
            requiresRefresh: !1
          }
        }(null !== UU.rejoin, XU), UU.rejoin, XU), ED(), XU && (co = performance.now())
      }))
    }

    function GD() {
      so && function(UU, XU) {
        let {
          mesh: zU,
          worldgen: cU,
          modelPool: yU
        } = UU;
        "landingPage" === XU ? (null === zU || void 0 === zU || zU.stopWorkers(), null === cU || void 0 === cU || cU.stopWorker(), null === yU || void 0 === yU || yU.stopWorkers()) : ((0, YX.k)(XU) || "inGame" === XU) && (null === zU || void 0 === zU || zU.restartWorkers(), null === yU || void 0 === yU || yU.startWorkers())
      }({
        mesh: UF,
        worldgen: TA,
        modelPool: DF
      }, YX.e.get("gameState"))
    }

    function BD(UU) {
      no = UU, mo && ZD(mo, UU)
    }

    function ZD(UU, XU) {
      UU.style.visibility = XU ? "visible" : "hidden"
    }

    function RD(UU) {
      var XU;
      const zU = UU.roomName,
        cU = null !== (XU = UU.joinOptions.lobbyName) && void 0 !== XU ? XU : null;
      return () => {
        QD(zU, cU)
      }
    }

    function PD() {
      return zU.e(297).then((() => zU(53747))).then((UU => {
        let {
          invalidateGuestTrafficCode: XU
        } = UU;
        return XU()
      })).catch((UU => {
        console.warn(`${FA} the cached traffic code could not be dropped`, UU)
      }))
    }

    function WD(UU, XU, zU) {
      var yU, QU;
      let AU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (jo) return;
      if ((null === (yU = JF) || void 0 === yU ? void 0 : yU.conn) !== UU) return void(null !== VF && Yo.set(UU, {
        code: XU,
        reason: zU
      }));
      const {
        rejoin: FU,
        game: oU,
        joinedAt: DU
      } = JF;
      aD(), sD();
      const EU = (0, hU.l)(XU, (0, Yy.f)(UU));
      if (console.info(`${FA} the game's connection closed with code ${XU} (${null!==(QU=EU.name)&&void 0!==QU?QU:"unrecognised"})`), XU === cU.e.gameOrPluginKick.code || AU || (0, Kz.reportDisconnect)(EU, VA, {
          closeReason: zU,
          sinceJoinedMs: performance.now() - DU,
          game: oU
        }), EU.requiresRefresh) {
        const UU = "outdatedVersion" === EU.name,
          zU = new Error(`the game's connection closed with code ${XU}`),
          cU = () => null === JF && null === VF;
        return void AY({
          site: Kz.JOIN_SITE,
          error: zU,
          outdated: UU
        }, (() => {
          cU() && dD(EU, null, !1)
        }), {
          stillWanted: cU
        })
      }
      const YU = EU.canReconnect ? FU : null,
        NU = null !== YU && EU.automaticallyReconnect && performance.now() - Ao >= hU.f;
      dD(EU, YU, NU)
    }

    function dD(UU, XU, zU) {
      var cU;
      let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (xo) return;
      iy.b.unwantedLeave(zU && null !== XU && 0 === oo.size), null === (cU = Fo) || void 0 === cU || cU.abort();
      const QU = new AbortController;
      Fo = QU;
      const AU = null === XU ? null : () => {
        QU.signal.aborted || (QU.abort(), XU())
      };
      if (zU && null !== AU) {
        Ao = performance.now();
        const UU = setTimeout(AU, hU.b);
        QU.signal.addEventListener("abort", (() => {
          clearTimeout(UU)
        }))
      }
      const FU = {
        code: UU.code,
        name: UU.name,
        reason: UU.reason,
        reasonKey: yU.reasonKey,
        reconnect: AU,
        reconnecting: zU,
        requiresRefresh: UU.requiresRefresh,
        canPlayAgain: yU.canPlayAgain
      };
      if (oo.size > 0)
        for (const DU of [...oo]) try {
          DU(FU)
        } catch (oU) {
          console.error(`${FA} an unwanted-leave listener threw`, oU)
        } else Xy((0, Tc.k)(UU, null !== AU, zU), QU.signal).then((XU => {
          XU && (null !== AU ? AU() : UU.requiresRefresh && (0, EX.l)())
        }))
    }
    const LD = {
      attachSocket: UU => rD(UU),
      onConnection: UU => (No.add(UU), () => {
        No.delete(UU)
      }),
      sendRaw: (UU, XU) => {
        const zU = KA;
        return null !== zU && zU.conn === UU && vE(zU, XU)
      },
      leaveRoom: pD,
      closeSocket: UU => {
        var XU;
        (null === (XU = KA) || void 0 === XU ? void 0 : XU.conn) === UU && uD()
      },
      flushNet: fD
    };

    function eD(UU) {
      var XU;
      let {
        aux: zU,
        payload: cU
      } = UU;
      null === (XU = fA) || void 0 === XU || XU.queueOptions(zU, cU)
    }

    function CD(UU, XU) {
      eD(function(UU, XU) {
        return UQ = UU ? {
          preventMovement: XU
        } : null, UU ? XQ(XU) : {
          aux: Iz.dc.AdEnd,
          payload: hy
        }
      }(UU, XU))
    }

    function wD(UU) {
      var XU;
      fF = UU, null === (XU = fA) || void 0 === XU || XU.setUiPrefs(UU)
    }

    function qD(UU, XU) {
      vA.setMaster(UU, XU)
    }

    function OD(UU) {
      var XU;
      iF = UU, null === (XU = fA) || void 0 === XU || XU.setEnvPrefs(UU)
    }

    function SD(UU) {
      var XU;
      HF = UU, null === (XU = fA) || void 0 === XU || XU.setLookPrefs(UU)
    }

    function rD(UU) {
      var XU;
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(UU.url).origin,
        cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (UU.readyState === WebSocket.CLOSING || UU.readyState === WebSocket.CLOSED) return console.warn(`${FA} a closing or closed socket can't be attached`), null;
      const yU = fA;
      if (!yU || yU.isStopped) return console.warn(`${FA} no core is running to attach a socket to`), UU.close(), null;
      if (null === (0, nU.f)()) return console.warn(`${FA} the game has not started to attach a socket to`), UU.close(), null;
      if (ZF > Iz.w) return console.warn(`${FA} this core has attached all the sockets it can; reload to play on`), UU.close(), null;
      if (OF && !CF && (CE(yU, !1, "all"), yU.isStopped || jo)) return UU.close(), null;
      uD();
      const QU = ZF++;
      if (!jD(yU, "open", QU, cU ? Iz.ac.Resume : 0)) return UU.close(), null;
      cU || fX.d.reset(), Qo = null === VF ? null : {
        join: VF,
        conn: QU,
        activated: !1
      }, UU.binaryType = "arraybuffer";
      const AU = new sz.d((() => {
          ! function(UU, XU) {
            if (KA !== XU || UU.isStopped || null === MD(XU, kA)) return;
            XU.detach(), KA = null, HD(UU, XU, kA, "", !0), XU.ws.close()
          }(yU, FU)
        })),
        FU = {
          ws: UU,
          conn: QU,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: cU,
          token: null,
          detach: () => {
            AU.dispose(), UU.removeEventListener("message", oU), UU.removeEventListener("open", DU), UU.removeEventListener("close", EU)
          }
        },
        oU = UU => {
          if (UU.data instanceof ArrayBuffer) {
            var XU;
            const zU = new Uint8Array(UU.data);
            AU.heard(), FU.token = null !== (XU = (0, nz.b)(zU)) && void 0 !== XU ? XU : FU.token,
              function(UU, XU, zU) {
                hE(UU, (() => {
                  UU.rings.net.writeFrame(XU, zU) || UU.crash(wz.t, `a socket frame of ${zU.byteLength} bytes did not fit the net-in ring`)
                }));
                const cU = UU.rings.net.cursor >= gA;
                !cY() && (cU || UU.netWrittenSinceFrame >= tA) && CE(UU, !1, document.hidden ? "all" : "budget");
                QY(UU)
              }(yU, QU, zU)
          }
        },
        DU = () => {
          cU || (0, pU.n)("wasm_socket_open", performance.now());
          for (const XU of FU.pending.splice(0)) UU.send(XU);
          FU.pendingBytes = 0
        },
        EU = UU => {
          if (KA === FU && yU.rings.net.cursor > 0 && CE(yU, !1, "all"), KA === FU) {
            if (FU.detach(), KA = null, HD(yU, FU, UU.code, UU.reason) || iD(yU, FU)) return;
            jD(yU, "close", QU), vD(QU, FU.left), WD(QU, UU.code, UU.reason)
          }
        };
      return UU.addEventListener("message", oU), UU.addEventListener("open", DU), UU.addEventListener("close", EU), KA = FU, null === (XU = (0, nU.f)()) || void 0 === XU || XU.socketAttached(QU), (0, NU.o)({
        websocketUrl: zU
      }), QU
    }

    function uD() {
      const UU = KA;
      if (!UU) return;
      const XU = fA,
        zU = UU.resume;
      zU && (fD(), KA !== UU) || (KA = null, UU.detach(), UU.ws.close(), null !== XU && (iD(XU, UU) || zU && HD(XU, UU, GA)) || (null !== XU && jD(XU, "close", UU.conn), vD(UU.conn, UU.left)))
    }

    function fD() {
      const UU = fA;
      null !== UU && !UU.isStopped && !jo && !CF && UU.rings.net.cursor > 0 && CE(UU, !1, "all")
    }

    function iD(UU, XU) {
      var zU;
      if (!XU.resume) return !1;
      const cU = jF;
      return null !== cU && null !== XU.token && "" !== XU.token && (cU.pendingHold = {
        conn: XU.conn,
        token: `${cU.roomId}:${XU.token}`
      }), jD(UU, "close", XU.conn), null === (zU = (0, nU.f)()) || void 0 === zU || zU.socketDetached(XU.conn), !0
    }

    function HD(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const QU = MD(XU, zU);
      if (null === QU) return !1;
      const {
        uD: AU,
        token: FU,
        game: oU,
        joinedAt: DU
      } = QU;
      if (!jD(UU, "close", XU.conn, Iz.C.Held)) return !0;
      console.warn(`${FA} the game's connection ${yU?"went silent":`dropped with code ${zU}`}, holding it`);
      const EU = {
        closeReason: cU,
        sinceJoinedMs: performance.now() - DU,
        game: oU
      };
      return (0, Kz.reportDisconnect)((0, hU.l)(zU), VA, EU, yU ? "silent" : void 0), AU.heldConn = XU.conn, AU.dropCode = zU, AU.pendingHold = {
        conn: XU.conn,
        token: `${AU.roomId}:${FU}`
      }, CF || CE(UU, !1, "all"), !0
    }

    function MD(UU, XU) {
      const zU = jF,
        yU = JF,
        QU = UU.token;
      return null === zU || null === yU || jo || UU.left || yU.conn !== UU.conn || null === QU || "" === QU ? null : (0, cU.i)(XU) && zU.resume.canHoldSeat() ? {
        uD: zU,
        token: QU,
        game: yU.game,
        joinedAt: yU.joinedAt
      } : null
    }

    function vD(UU, XU) {
      var zU;
      null === (zU = (0, nU.f)()) || void 0 === zU || zU.closeGame(UU), (0, Ty.b)().close(UU), XU || (0, NU.o)({
        websocketUrl: null
      })
    }

    function VD() {
      const UU = zo;
      if (null === UU) return;
      const XU = (0, nU.f)();
      jo || null === XU || XU.nC(UU) ? zo = null : performance.now() - SF.pause >= PA && (SF.pause = performance.now(), console.warn(`${FA} the cmd ring had no room for SetPaused(${UU}): written before the next frame`))
    }

    function sD() {
      const UU = jF;
      jF = null, null === UU || void 0 === UU || UU.resume.dispose()
    }

    function nD(UU, XU) {
      var zU, cU;
      const {
        heldConn: yU
      } = UU, QU = UU.resume.resumingConn;
      UU.heldConn = 0, UU.pendingHold = null, jF === UU && (jF = null), "left" === XU ? UU.resume.leave() : UU.resume.dispose(), 0 === Xo || (null === (zU = KA) || void 0 === zU ? void 0 : zU.conn) !== Xo || "left" === XU && (null === (cU = MF) || void 0 === cU ? void 0 : cU.conn) === Xo || JD(Xo), "gaveUp" === XU && 0 !== QU && JD(QU), 0 !== yU && "refused" !== XU && (console.info(`${FA} the game held through its drop ${"left"===XU?"was left":"is given up"}`), null === fA || fA.isStopped || jD(fA, "close", yU), vD(yU, !1))
    }

    function mD(UU, XU) {
      const zU = XU.indexOf(":");
      return {
        roomId: zU < 0 ? UU.roomId : XU.slice(0, zU),
        roomToken: XU.slice(zU + 1)
      }
    }

    function lD(UU) {
      (0, qz.logClientMeasurement)("join_preload", UU, {
        client: "wasm"
      })
    }

    function xD(UU) {
      var XU;
      KF = UU;
      const zU = UU.replayOffer && Uo !== UU.conn;
      hF = zU ? UU.conn : 0, bF = zU || TF.has(UU.conn) ? 0 : UU.conn, SU.admitted(), UU.conn === Xo && (Xo = 0);
      const cU = jF;
      null !== cU && (null === (XU = JF) || void 0 === XU ? void 0 : XU.conn) === UU.conn && cU.resume.onInitialInfo(UU)
    }

    function JD(UU) {
      var XU;
      const zU = KA;
      (null === zU || void 0 === zU ? void 0 : zU.conn) === UU && (zU.left = !0, null === (XU = (0, nU.f)()) || void 0 === XU || XU.socketLeft(), (0, NU.o)({
        websocketUrl: null
      }), pD(UU) ? setTimeout((() => {
        KA === zU && uD()
      }), UX.g) : uD())
    }

    function jD(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yU = !1;
      return hE(UU, (() => {
        const {
          net: QU
        } = UU.rings;
        yU = "open" === XU ? QU.writeOpen(zU, cU) : QU.writeClose(zU, cU), yU || UU.crash(wz.t, `a socket ${XU} did not fit the net-in ring`)
      })), yU
    }

    function KD(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (QE()) return (0, Kz.reportUnsupportedFallback)(UU, XU, zU, cU), void AE(`the wasm client can't run here (${zU}; ${XU})`, XU);
      (0, Kz.showUnsupported)(UU, "unsupported", zU, cU)
    }
    const bD = 1500;

    function TD(UU, XU) {
      return !XU && (0, ez.r)(UU) && hD(UU)
    }

    function hD(UU) {
      return 1 === UU.missing.length && UU.missing[0] === ez.d
    }
    const UE = "wasmNoContextWaited";

    function XE(UU, XU) {
      const zU = XU ? "blockedAfterLoss" : hD(UU) ? "noContext" : "unsupported";
      return {
        decline: zU,
        ...zE(UU),
        retries: "unsupported" !== zU && QE()
      }
    }

    function zE(UU) {
      return {
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${UU.missing.join(", ")}`,
        details: {
          missing: UU.missing.join(",")
        }
      }
    }

    function cE(UU) {
      console.warn(`${FA} ${UU}: reloading once more onto the wasm client`), (0, xy.n)(), (0, Kz.flushCrashReports)(EX.b).then(EX.l, EX.l)
    }

    function yE() {
      return QE()
    }

    function QE() {
      return so && "wasm" !== (0, SX.g)(window.location.search)
    }

    function AE(UU, XU) {
      console.warn(`${FA} ${UU}: reloading on the JS client`), null !== XU && (0, SX.E)(XU), (0, SX.D)(null === XU ? "reloadOntoJs" : "decline");
      const zU = () => {
        (0, EX.j)(SX.L)
      };
      (0, Kz.flushCrashReports)(EX.b).then(zU, zU)
    }

    function FE(UU, XU, zU, cU) {
      return to(UU, XU, zU, cU)
    }

    function oE() {
      null === Go || null === fA || fA.isStopped || jo || null !== YF || null === eA || (YF = Go(eA, YE, NE().follow))
    }

    function DE() {
      var UU, XU, zU;
      return null !== (UU = null === (XU = HA) || void 0 === XU || null === (zU = XU.textures) || void 0 === zU ? void 0 : zU.files()) && void 0 !== UU ? UU : null
    }

    function EE(UU) {
      NE().follow((XU => {
        null !== XU && Promise.all([Promise.all([zU.e(219), zU.e(53)]).then((() => zU(53785))), (0, xy.N)()]).then((UU => {
          let [{
            followPagePackFiles: zU
          }, cU] = UU;
          const yU = null === cU || (0, ez.r)(cU) ? "webgl" : cU.backend;
          zU(XU, fy.d, yU, (UU => {
            fy.d.setPageFiles(UU)
          }), YE)
        }), (XU => {
          console.warn(`${FA} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, XU), UU()
        }))
      }))
    }

    function YE(UU, XU) {
      console.warn(`${FA} ${UU}`, XU)
    }

    function NE() {
      return iA ??= new AQ({
        load: UU => Promise.all([zU.e(219), zU.e(66)]).then((() => zU(53793))).then((XU => {
          let {
            startPageTexturePackFeed: zU
          } = XU;
          return zU(YE, UU)
        })),
        store: Uz.g,
        oY: UU => {
          lA.then((() => {
            (0, Kz.reportTexturePackFeedLoadFailure)(UU, VA)
          }))
        }
      }), iA
    }
    const IE = UU => NE().follow(UU);

    function pE() {
      return NE().loaded()
    }
    const aE = function(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          yU = 0;
        return async function(QU, AU) {
          let FU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const oU = ++yU,
            DU = cU() + XU,
            EU = await
          function(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((cU => {
              const yU = setTimeout((() => {
                cU(null), UU.then((UU => {
                  null !== UU && (UU.joinedWithout(), zU(UU))
                }))
              }), XU);
              UU.then((UU => {
                clearTimeout(yU), cU(UU)
              }))
            }))
          }(UU(QU), XU, (UU => {
            oU === yU && FU() && AU(UU, cU() + XU).catch((UU => {
              zU("the texture pack step after the join failed", UU)
            }))
          }));
          return null === EU ? null : AU(EU, DU)
        }
      }((UU => (0, RX.l)(UU) ? NE().request() : NE().forJoin()), QQ.c, YE),
      tE = function(UU, XU) {
        let zU = !1;
        return {
          setGamePackConfirm: UU => {
            zU = null !== UU, XU(UU)
          },
          packStep: (XU, cU, yU) => UU(XU, cU, (() => zU && yU()))
        }
      }(aE, (UU => {
        NE().setGamePackConfirm(UU)
      }));

    function gE(UU) {
      tE.setGamePackConfirm(UU)
    }

    function kE() {
      if (jo || null !== Wo || null === Bo || null === Po) return;
      const {
        backend: UU,
        canvas: XU,
        fallbackReason: zU,
        adapterVendor: cU
      } = Po, yU = Bo;
      Bo = null;
      try {
        Wo = yU({
          backend: UU,
          canvas: XU,
          fallbackReason: zU,
          adapterVendor: cU,
          joinedGame: () => jo ? null : MF,
          canSend: () => !jo && null !== MF && MF.conn === bF,
          inGame: BE,
          shaderPackReach: () => {
            var UU, XU;
            return null !== (UU = null === (XU = tF) || void 0 === XU ? void 0 : XU.reachInJoinedGame()) && void 0 !== UU ? UU : null
          },
          ia: () => NF,
          msaa: () => Ro > 1,
          writeCmd: (UU, XU, zU) => null !== eA && eA(UU, XU, zU),
          takeFailedMeshJobs: () => {
            var UU, XU;
            return null !== (UU = null === (XU = UF) || void 0 === XU ? void 0 : XU.takeFailedMeshJobs()) && void 0 !== UU ? UU : 0
          },
          readLoadCounts: UU => {
            var XU, zU;
            return null !== (XU = null === (zU = fA) || void 0 === zU ? void 0 : zU.readLoadCounts(UU)) && void 0 !== XU && XU
          },
          mainStalled: (UU, XU, zU, cU) => {
            (0, Kz.reportMainStall)(UU, XU, zU, cU, VA)
          },
          RL: UU => {
            var XU, zU, cU;
            return null !== (XU = null === (zU = ao) || void 0 === zU || null === (cU = zU.RL) || void 0 === cU ? void 0 : cU.call(zU, UU)) && void 0 !== XU ? XU : -1
          }
        })
      } catch (QU) {
        console.error(`${FA} the frame telemetry didn't start`, QU)
      }
    }

    function GE(UU, XU) {
      try {
        var zU, cU, yU;
        const QU = Io && null !== (zU = null === (cU = fA) || void 0 === cU || null === (yU = cU.lastHeader) || void 0 === yU ? void 0 : yU.renderPending) && void 0 !== zU ? zU : 0;
        (0, Oc.f)(XU, UU, BE() && !(null !== UQ), QU)
      } catch (QU) {
        (0, Oc.u)(), console.error(`${FA} the quality steps stopped`, QU)
      }
    }

    function BE() {
      return null !== MF && io === MF && !jo
    }

    function ZE(UU) {
      const XU = Wo;
      Wo = null;
      try {
        null === XU || void 0 === XU || XU.stop()
      } catch {}
      console.error(`${FA} the frame telemetry threw: it stops`, UU)
    }

    function RE(UU) {
      var XU, zU, cU, yU;
      if ((0, Ty.b)().fire(UU), "message" === UU.type) {
        if (wF++, UU.TE === Iz.Kc.ERROR && null !== VF) {
          var QU;
          const {
            text: XU,
            dropsCache: zU
          } = (0, hU.r)((new TextDecoder).decode(UU.payload));
          Do ||= zU, (null === (QU = Qo) || void 0 === QU ? void 0 : QU.conn) === UU.conn && (Eo = XU)
        } else if (UU.TE === pz.oc.ResumeComplete) {
          var AU;
          Uo = UU.conn, UU.conn === hF && (hF = 0, bF = TF.has(UU.conn) ? 0 : UU.conn), null === (AU = jF) || void 0 === AU || AU.resume.onResumeComplete(UU.conn)
        }
        return
      }
      UU.phase === Iz.E.Left ? qF = UU.conn : UU.phase === Iz.E.Activated && (null === (XU = Qo) || void 0 === XU ? void 0 : XU.conn) === UU.conn ? Qo.activated = !0 : UU.phase === Iz.E.Resumed ? function(UU) {
        var XU, zU;
        Xo = UU;
        const cU = jF;
        if (null === cU || 0 === cU.heldConn || (null === (XU = KA) || void 0 === XU ? void 0 : XU.conn) !== UU || !KA.resume || null === JF) return;
        console.info(`${FA} the game resumed on conn ${UU}, waiting for its InitialInfo`);
        const yU = cU.heldConn;
        cU.heldConn = 0, KA.resume = !1, JF.conn = UU, (null === (zU = lF) || void 0 === zU ? void 0 : zU.conn) === yU && (lF = {
          conn: UU,
          info: lF.info
        }), fX.d.apply({
          shopInfo: null,
          _shopVersion: PX.d
        })
      }(UU.conn) : UU.phase === Iz.E.Held ? function(UU) {
        var XU;
        const zU = jF,
          cU = null !== (XU = null === zU || void 0 === zU ? void 0 : zU.pendingHold) && void 0 !== XU ? XU : null;
        if (null !== zU && null !== cU && cU.conn === UU) return zU.pendingHold = null, zU.heldConn = UU, Xo = 0, console.warn(`${FA} the core holds the game, reconnecting`), void zU.resume.onDropped(cU.token);
        if (UU === Xo) {
          Xo = 0;
          const XU = fA;
          null === XU || XU.isStopped || (console.info(`${FA} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), jD(XU, "close", UU))
        }
      }(UU.conn) : UU.phase === Iz.E.Closed && (null === (zU = jF) || void 0 === zU || null === (cU = zU.pendingHold) || void 0 === cU ? void 0 : cU.conn) === UU.conn && (jF.heldConn === UU.conn ? function(UU) {
        const XU = UU.heldConn,
          zU = UU.dropCode;
        nD(UU, "refused"), console.info(`${FA} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          vD(XU, !1), WD(XU, zU, "", !0)
        }))
      }(jF) : jF.pendingHold = null), UU.phase !== Iz.E.Held && UU.phase !== Iz.E.Left && UU.phase !== Iz.E.Closed || (TF.add(UU.conn), UU.conn === bF && (bF = 0));
      const FU = Object.keys(Iz.E).find((XU => Iz.E[XU] === UU.phase)),
        oU = 0 === UU.code ? "" : ` (code ${UU.code})`;
      console.info(`${FA} conn ${UU.conn}: ${null!==FU&&void 0!==FU?FU:UU.phase}${oU}, ${wF} raw messages so far`), (null === (yU = MF) || void 0 === yU ? void 0 : yU.conn) !== UU.conn || UU.phase !== Iz.E.Left && UU.phase !== Iz.E.Closed || ID(null), mF !== UU.conn || UU.phase !== Iz.E.Left && UU.phase !== Iz.E.Closed || (mF = null, null === MF && null === VF && iy.b.setGame(void 0));
      for (const EU of [...No]) try {
        EU(UU.conn, UU.phase, UU.code)
      } catch (DU) {
        (0, az.p)(DU, `${FA} a connection listener threw`)
      }
    }
    const PE = 9e4,
      WE = 1e3;

    function dE() {
      (0, xy.n)(), Vo.forget(), null === MF && null === VF || (0, oc.e)(), queueMicrotask((() => {
        try {
          sE()
        } catch (UU) {
          console.warn(`${FA} stopping before the reload threw`, UU)
        }(0, Kz.flushCrashReports)(EX.b).then(EX.l, EX.l)
      }))
    }

    function LE() {
      const UU = fA;
      null === UU || UU.isStopped || null === KA || CF || !UU.hasPendingCommands() || CE(UU, !1, "budget")
    }

    function eE(UU) {
      var XU;
      const zU = MF;
      UU.persisted || null === zU || (null === (XU = KA) || void 0 === XU ? void 0 : XU.conn) !== zU.conn || KA.left || zU.leave()
    }

    function CE(UU, XU, cU) {
      let yU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const QU = CF;
      CF = !0;
      try {
        const QU = UU.rings.net.cursor >= gA;
        QU && "all" !== cU && !document.hidden && mE("backlog", `a shown tab's net-in is ${UU.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(UU, XU, cU, yU) {
          var QU, AU, FU, oU;
          if (jo) return !1;
          if (hE(UU, qE), jo || UU.isStopped) return !1;
          HE() && GF("modelsIn");
          VD(), RF = performance.now(), qF = null, OF = !1, (0, sU.L)(), null === (QU = AF) || void 0 === QU || QU.beforeFrame(), xc(RF, UU), (0, sU.B)(RF, OE), eF = !0;
          const DU = XU && iE();
          let EU;
          try {
            EU = UU.frame(RF, DU, cU)
          } finally {
            eF = !1
          }
          if (!EU) return !1;
          Zo.observe(null !== (AU = null === (FU = UU.lastHeader) || void 0 === FU ? void 0 : FU.chunksCancelled) && void 0 !== AU ? AU : 0);
          const YU = UU.lastFrameKind,
            NU = (0, bX.c)(YU);
          (function(UU) {
            null !== ZQ && ZQ.afterFrame(performance.now(), UU)
          })(NU), null === (oU = Lo) || void 0 === oU || oU.frame(UU, RF, YU), XU && (Ho = NU);
          NU && (0, JX.b)(RF);
          if (null !== Wo) try {
            Wo.frameRan(UU, RF, performance.now(), YU)
          } catch (tU) {
            ZE(tU)
          }
          "drawn" === YU && fE() && function() {
            for (const UU of [...my]) UU()
          }();
          UU.forEachNetOut(ME);
          const IU = KA;
          null !== qF && (null === IU || void 0 === IU ? void 0 : IU.conn) === qF && vE(IU, UX.k);
          uE(UU),
            function(UU) {
              const XU = 0 !== (UU.headerWord(pz.I.LoadSteps) & pz.W.JoinPreload);
              XU !== nF && (nF = XU, (0, Kz.setCrashAdPreload)(XU), (0, zc.W)())
            }(UU), XU && function(UU) {
              var XU, cU, yU;
              if (null === MF || !iE()) return;
              const QU = UU.headerWord(pz.I.LoadSteps);
              null === fo || io === MF && !fo.frame(RF, 0 !== (QU & pz.Y.TerrainDrawn)) || (fo = null);
              if (0 === (QU & pz.W.PlayerBound)) return;
              const AU = UU.lastHeader,
                FU = !Io || 0 === (null === AU || void 0 === AU ? void 0 : AU.renderPending);
              !qo && FU && (qo = !0, performance.mark(aA));
              if (io === MF) return;
              const oU = null !== (XU = null === AU || void 0 === AU ? void 0 : AU.firstView) && void 0 !== XU ? XU : Iz._.NotYet;
              if (Io && oU === Iz._.NotYet) return;
              if (wo && (!0 !== (null === (cU = (0, nU.f)()) || void 0 === cU ? void 0 : cU.isSessionLive) || !FU)) return;
              io = MF;
              const DU = MF;
              if (setTimeout((() => {
                  MF === DU && (0, pU.h)()
                }), 0), null === (yU = tF) || void 0 === yU || yU.playable(), function() {
                  clearTimeout(jA), jA = setTimeout((() => {
                    BE() && zY((UU => {
                      let {
                        prefetchWorldgenWorker: XU
                      } = UU;
                      XU()
                    }))
                  }), LA)
                }(), wo) return;
              wo = !0, performance.mark(pA), (0, pQ.q)("render") && Promise.all([zU.e(89), zU.e(56)]).then((() => zU(5164))).then((UU => {
                let {
                  renderDebugPlayable: XU
                } = UU;
                XU()
              }), (UU => {
                console.warn("The render debug topic didn't load", UU)
              }));
              const EU = Math.round(performance.now()),
                YU = UU.readViewQueuedPrograms();
              null !== YU && (0, pU.n)("wasm_view_links", EU, (0, aU.yb)(YU));
              const NU = null === uo || null === So ? 0 : Math.max(0, So - uo),
                IU = null === uo ? 0 : Math.max(0, EU - uo),
                tU = Io ? UU.readFirstViewWait(NU, IU) : null;
              null !== tU && (0, pU.l)(tU);
              if (Io && oU !== Iz._.Drawn) {
                const XU = oU === Iz._.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: zU
                  } = SE(UU);
                if (console.warn(`${FA} playable at ${EU} ms on the first view's ${XU} backstop, ${zU}: it wasn't drawn whole in time`), (0, pU.n)("wasm_view_backstop", EU, `${XU}:${zU}`), "long" === XU) {
                  var gU, kU;
                  const XU = null !== (gU = null === (kU = JF) || void 0 === kU ? void 0 : kU.game) && void 0 !== gU ? gU : "";
                  fo = new Dc.c((() => {
                    const {
                      cause: zU,
                      census: cU
                    } = SE(UU);
                    (0, Kz.reportFirstViewNoTerrain)(XU, zU, cU, VA), (0, OX.s)("noTerrain")
                  }))
                }
              } else console.info(`${FA} playable at ${EU} ms${Io?"":" (no renderer)"}`);
              setTimeout(ko, 0), (0, HX.h)().catch((UU => {
                console.error(`${FA} item sprites didn't load, so item particles show the missing texture`, UU)
              })), ey.d.warm()
            }(UU);
          (0, wz.N)(UU, {
            worldgen: TA,
            mesh: UF
          }),
          function(UU) {
            UU.forEachEvent(jc);
            for (const XU of Jc) try {
              (0, Vc.c)(XU)
            } catch (tU) {
              if ((0, az.h)(tU)) {
                UU.crashOn(wz.l, tU);
                break
              }
              console.error(`${nc} an input action listener threw`, tU)
            }
            Jc.length = 0
          }(UU), yU && (0, KX.b)();
          return !UU.isStopped
        }(UU, XU, "all" === cU || QU, yU)
      } finally {
        CF = QU, QU || (PF = performance.now())
      }
    }

    function wE(UU) {
      console.error(`${FA} a frame-start listener threw`, UU)
    }

    function qE() {
      var UU, XU, zU, cU;
      null === (UU = oF) || void 0 === UU || UU.drain(eA, CA), null === (XU = IF) || void 0 === XU || XU.drain(eA), null === (zU = pF) || void 0 === zU || zU.drain(performance.now()), go(eA), null === (cU = YF) || void 0 === cU || cU.drain()
    }

    function OE(UU) {
      console.error(`${FA} a before-frame listener threw`, UU)
    }

    function SE(UU) {
      const XU = (0, nU.f)(),
        zU = (0, nU.o)(),
        cU = null === XU || null === zU ? null : zU.readDrawCensus(XU.api);
      return {
        cause: (0, Dc.g)(UU.headerWord(pz.I.LoadSteps), cU),
        census: cU
      }
    }
    const rE = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function uE(UU) {
      var XU;
      if (wo) return;
      if (null === So && iE() && (So = performance.now()), null === MF || 0 === (UU.headerWord(pz.I.LoadSteps) & pz.W.PlayerBound) ? uo = null : uo ??= performance.now(), null === VF && null === MF) return;
      null === So || ro || (ro = !0, (0, pU.n)("wasm_startup_loaded", So));
      let zU = 0;
      null !== MF ? zU = -1 : !0 === (null === (XU = Qo) || void 0 === XU ? void 0 : XU.activated) && (zU = ~pz.Y.TerrainDrawn);
      const cU = UU.headerWord(pz.I.LoadSteps) & zU & ~Oo;
      if (0 === cU) return;
      Oo |= cU;
      const yU = performance.now();
      for (const [QU, AU] of Object.entries(rE)) 0 !== (cU & pz.Y[QU]) && (0, pU.n)(AU, yU)
    }

    function fE() {
      return Io && iE()
    }

    function iE() {
      return aF && HE()
    }

    function HE() {
      return null === oF || oF.startupDone
    }

    function ME(UU, XU) {
      const zU = KA;
      (null === zU || void 0 === zU ? void 0 : zU.conn) === UU ? vE(zU, XU) : uF++
    }

    function vE(UU, XU) {
      const {
        ws: zU
      } = UU;
      return zU.readyState === WebSocket.OPEN ? (zU.send(XU), !0) : zU.readyState === WebSocket.CONNECTING && UU.pendingBytes + XU.byteLength <= RA ? (UU.pending.push(XU.slice()), UU.pendingBytes += XU.byteLength, !0) : (uF++, !1)
    }

    function VE() {
      return null !== MF && fE()
    }

    function sE() {
      var UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU;
      jo = !0, Mo.stop(), (0, tQ.endLookDebugTake)(), ZQ = null, sD(), (0, sU.H)().unlockPointer(), (0, sU.D)(null), null === (UU = FF) || void 0 === UU || UU(), FF = null, null === (XU = (0, nU.o)()) || void 0 === XU || XU.followCursorAim(null), (0, KX.A)(), (0, nU.d)(), vA.stop(), null === (zU = eo) || void 0 === zU || zU(), eo = null, null === (cU = Co) || void 0 === cU || cU(), Co = null, null === (yU = Wo) || void 0 === yU || yU.stop(), Wo = null, (0, Yc.u)(null), null === (QU = bA) || void 0 === QU || QU(), bA = null, null === (AU = TA) || void 0 === AU || AU.stop(), TA = null, null === (FU = UF) || void 0 === FU || FU.stop(), UF = null, null !== (oU = HA) && void 0 !== oU && null !== (DU = oU.textures) && void 0 !== DU && DU.assets && (0, ry.k)(null), null === (EU = HA) || void 0 === EU || EU.stop(), HA = null, MA = null;
      const gU = XF;
      XF = null, gU && (gU.stop(), TE(gU)), null === (YU = IF) || void 0 === YU || YU.dispose(), IF = null, null === (NU = pF) || void 0 === NU || NU.dispose(), pF = null, oF = null, null === (IU = EF) || void 0 === IU || IU(), EF = null, null === (pU = QF) || void 0 === pU || pU(), QF = null, null !== LF && (clearTimeout(LF), LF = null), null === (aU = AF) || void 0 === aU || aU.stop(), AF = null, ED(), iy.b.release(), uD();
      const kU = YF;
      YF = null;
      try {
        null === kU || void 0 === kU || kU.dispose()
      } catch (GU) {
        console.warn(`${FA} the sky's images didn't release`, GU)
      }(0, Cy.i)(null), null === (tU = rA) || void 0 === tU || tU.pagePreviews().endSession(null === (0, dX.r)())
    }

    function nE(UU, XU) {
      var zU, cU;
      const yU = null !== (zU = null === (cU = XF) || void 0 === cU ? void 0 : cU.details()) && void 0 !== zU ? zU : {},
        QU = UU.site === DA || UU.site === EA || UU.site === Kz.RENDER_RELOAD_SITE || UU.site === YA ? UU.error instanceof WebAssembly.RuntimeError || UU.error instanceof Pz.c : !(0, ez.t)(UU.error) && (0, wz.K)(UU);
      QU && UU.error instanceof Error && (0, dX.X)(UU.error);
      const AU = QU || UU.site === wz.w ? (0, Kz.readTrap)(UU.error) : null,
        FU = null !== AU && (0, gz.d)(AU.kind, AU.refusedBytes) ? AU.refusedBytes : 0,
        oU = (0, lz.k)(),
        DU = null === zF ? (0, Wy.t)(function() {
          try {
            return (0, dX.x)().buffer.byteLength
          } catch {
            return 0
          }
        }(), FU, oU) : zF.ceilingMayRefuse(FU, oU),
        EU = FU > 0 && !DU && yE() && !(0, xy.c)() ? (0, lz.l)() : void 0,
        YU = "js" === EU;
      var NU;
      if (YU && ((0, SX.E)("oom"), (0, SX.D)("decline"), Jo = !0), sE(), (0, xy.c)()) return Vo.releaseNow(), console.warn(`${FA} the session stopped at ${UU.site} as the page reloads`, UU.error), void((0, ez.t)(UU.error) || (null === (NU = UU.header) || void 0 === NU ? void 0 : NU.lastError) === Iz.K.CoreBusy || (0, Kz.reportStoppedCore)(UU, XU, AU, {
        memoryDetails: yU,
        memoryStep: EU,
        declined: YU
      }));
      (0, Kz.showCrash)(UU, XU, AU, {
        memoryDetails: yU,
        memoryStep: EU,
        declined: YU
      })
    }

    function mE(UU, XU) {
      const zU = performance.now();
      return !(zU - SF[UU] < PA) && (SF[UU] = zU, console.warn(`${FA} ${XU}`), !0)
    }

    function lE(UU) {
      const {
        input: XU,
        net: zU,
        worker: cU
      } = UU.rings, yU = UU.optionsDropped, QU = XU.dropped + yU + zU.dropped + cU.dropped + uF;
      QU !== rF && mE("dropped", `${QU} records dropped so far (input ${XU.dropped}, options ${yU}, net ${zU.dropped}, worker ${cU.dropped}, net-out ${uF})`) && (rF = QU)
    }

    function xE() {
      var UU, XU;
      const zU = (0, Xc.f)();
      if (null === zU) return null;
      const cU = (0, Fc.o)(zU);
      return {
        ...cU,
        horizontal: Math.min(cU.horizontal, null !== (UU = null === (XU = XF) || void 0 === XU ? void 0 : XU.shedDistanceInUse()) && void 0 !== UU ? UU : 1 / 0)
      }
    }
    const JE = new WeakSet;

    function jE(UU) {
      var XU, zU;
      return {
        samples: Io ? Ro : null,
        sunShadows: UU,
        renderDistance: null !== (XU = null === (zU = xE()) || void 0 === zU ? void 0 : zU.horizontal) && void 0 !== XU ? XU : null
      }
    }

    function KE(UU) {
      sF = UU, (0, zc.W)()
    }

    function bE() {
      var UU, XU, zU;
      const cU = xE();
      return {
        ...null === (UU = XF) || void 0 === UU ? void 0 : UU.pageKillSnapshot(),
        renderDistance: null !== (XU = null === cU || void 0 === cU ? void 0 : cU.horizontal) && void 0 !== XU ? XU : null,
        renderDistanceVertical: null !== (zU = null === cU || void 0 === cU ? void 0 : cU.vertical) && void 0 !== zU ? zU : null,
        chunkCap: cF,
        budgetBasis: yF,
        renderBackend: (0, xy.B)(),
        adPreload: nF,
        ...(0, cc.c)(sF)
      }
    }

    function TE(UU) {
      var XU;
      console.info(`${FA} wasm memory at the session's end`, UU.details());
      const {
        wasmMainMiB: zU,
        wasmWorkersMiB: cU,
        peakStoredChunks: yU
      } = UU.pageKillSnapshot(), QU = navigator.deviceMemory;
      (0, qz.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: zU,
        wasmWorkersMiB: cU,
        peakStoredChunks: yU
      }, {
        client: "wasm",
        renderBackend: null !== (XU = (0, xy.B)()) && void 0 !== XU ? XU : "none",
        os: (0, yc.getOperatingSystem)(),
        deviceMemory: String(null !== QU && void 0 !== QU ? QU : "unreported")
      })
    }

    function hE(UU, XU) {
      if (!UU.isStopped) try {
        XU()
      } catch (zU) {
        UU.crash(wz.y, zU)
      }
    }

    function UY() {
      return hA ??= zU.e(83).then((() => zU(53801))).catch((UU => {
        throw hA = null, UU
      })), hA
    }
    async function XY() {
      const {
        createWorldgenWorker: UU,
        worldgenWorkerReady: XU
      } = await UY();
      return await XU(), UU
    }

    function zY(UU) {
      var XU;
      null === (XU = hA) || void 0 === XU || XU.then(UU, (() => {}))
    }

    function cY() {
      return performance.now() - Math.max(PF, WF) >= WA
    }

    function yY(UU) {
      const XU = document.hidden || dF ? "all" : "budget";
      dF = !0;
      const zU = CE(UU, !1, XU);
      var cU;
      zU && (lE(UU), null === (cU = XF) || void 0 === cU || cU.afterFrame());
      return zU
    }

    function QY(UU) {
      UU.isStopped || 0 === UU.rings.net.cursor || cY() && !yY(UU) || UU.rings.net.cursor > 0 && performance.now() - WF >= WA / 2 && function(UU) {
        LF ??= setTimeout((() => {
          LF = null, QY(UU)
        }), WA)
      }(UU)
    }

    function AY(UU, XU) {
      return async function(UU, XU, zU) {
        let {
          stop: cU,
          stillWanted: yU,
          beforeReload: QU
        } = zU;
        const AU = await (0, Ey.k)(UU, {
          stillWanted: yU,
          beforeReload: async () => {
            cU(), await Promise.all([(0, Kz.flushCrashReports)(EX.b), null === QU || void 0 === QU ? void 0 : QU()])
          },
          reload: EX.l
        });
        return AU || XU(), AU
      }(UU, XU, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: sE
      })
    }
    let FY = !1;

    function oY() {
      return FY = !0, async function(UU, XU, cU) {
        const {
          gamePackSource: yU
        } = await zU.e(296).then((() => zU(42154)));
        await tE.packStep(UU, ((zU, cU) => zU.packForGame(UU, yU(XU), cU)), cU)
      }(...arguments)
    }

    function DY(UU) {
      ! function(UU, XU) {
        UU((UU => {
          null === UU || void 0 === UU || UU.subscribe((UU => {
            let {
              pack: zU,
              gameSource: cU
            } = UU;
            XU(null === cU || null === zU ? null : {
              pack: zU,
              source: "" === cU ? null : cU
            })
          }))
        }))
      }(IE, UU)
    }
    let EY = !1,
      YY = null,
      NY = !1,
      IY = !1;

    function pY() {
      var UU;
      EY || (EY = !0, zD("play", oX), (0, NU.n)(new LY), FU.gameBridge.attach(TU), BY().catch((() => {})), (0, nU.s)((UU => {
        BX(UU.setTextHost)
      })), UU = gY, oo.add(UU), function(UU) {
        for (const XU of gF) UU(XU);
        kF.add(UU)
      }((UU => {
        tY(aY[UU])
      })))
    }
    const aY = {
      booted: QU.m.INITIALISE_NOA,
      texturesIn: QU.m.REGISTRATION,
      modelsIn: QU.m.SETUP_LIFEFORMS
    };

    function tY(UU) {
      oU.k.UY("matchmakeAndPlayStepCompleted", {
        step: UU,
        totalSubSteps: 1
      })
    }

    function gY(UU) {
      if (!NY) return;
      const {
        gameNameWithVariation: XU,
        lobbyName: zU
      } = (0, NU.b)();
      if (UU.code === cU.e.serverUpdating.code) return (new LY).leaveLive(), void GY(XU, zU);
      iU.c.leftGame(XU, UU.code), oU.k.UY("unwantedLeftGame", {
        reason: kY(UU),
        requiresRefresh: UU.requiresRefresh,
        canReconnect: null !== UU.reconnect,
        automaticallyReconnect: UU.reconnecting,
        canPlayAgain: UU.canPlayAgain,
        gameNameWithVariation: XU,
        lobbyName: zU
      }), (new LY).leaveLive()
    }

    function kY(UU) {
      return null !== UU.reasonKey ? {
        translationKey: UU.reasonKey
      } : "gameOrPluginKick" === UU.name ? UU.reason : `You have disconnected from the server.\n${UU.reason}`
    }

    function GY(UU, XU) {
      var cU;
      cU = (0, DU.z)(UU, XU), Promise.resolve().then((() => zU(1568))).then((UU => {
        let {
          navigatePreserveSearch: XU
        } = UU;
        XU(cU)
      })).catch((UU => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", UU), (0, EX.f)(cU)
      }))
    }

    function BY() {
      return YY ??= Promise.all([zU.e(84), zU.e(87), zU.e(85), zU.e(86), zU.e(103), zU.e(100), zU.e(294), zU.e(203), zU.e(242), zU.e(268), zU.e(236), zU.e(54)]).then((() => zU(42104))).then((UU => {
        try {
          UU.attachPlayGameSources()
        } catch (XU) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", XU),
            function(UU) {
              lA.then((XU => {
                null === XU || XU.isStopped || jo ? console.warn(`${FA} the play sources threw as they attached, after the client stopped`, UU) : nE({
                  site: YA,
                  error: UU,
                  header: null
                }, VA)
              }))
            }(XU), XU
        }
      }), (UU => {
        throw YY = null, new nU.b(UU)
      })), YY
    }
    async function ZY(UU, XU) {
      pY(), FY = !0, NY = !0;
      let zU = {
          place: UU.place,
          matchedAt: UU.matchedAt
        },
        AU = UU.place.gameNameWithVariation;
      const FU = (0, YU.e)();
      let oU = null;
      const DU = await AD({
        matchmake: async () => {
          let XU = zU;
          if (zU = null, null === XU) {
            const zU = await UU.rematch();
            if (zU.isError()) throw oU = zU.asError().forward(), new Error(zU.asError().message);
            XU = {
              place: zU.getValue(),
              matchedAt: performance.now()
            }
          }
          AU = XU.place.gameNameWithVariation;
          return {
            target: await (0, zX.f)(UU.userContext, XU.place, pE(), FU),
            matchedAt: XU.matchedAt,
            freshMs: zX.b
          }
        },
        pageReady: BY,
        onFailure: (UU, XU) => {
          null === oU && function(UU, XU) {
            (0, Kz.reportPageJoinFailure)(UU, VA, XU)
          }(UU, {
            sinceJoinStartMs: XU,
            game: AU
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => UU.userContext.invalidateTrafficCode(),
        signal: XU
      });
      switch (DU.kind) {
        case "joined":
          if (FU) {
            setTimeout((() => {
              SU.ready()
            }), 0);
            const {
              game: UU
            } = DU;
            (0, YU.q)((() => {
              UU.endJoinAd() && ((0, pU.i)(), SU.adEnded())
            }))
          }
          return IY || (IY = !0, (0, uU.e)()), NY ? (tY(QU.m.CONNECT_TO_GAME_SERVER), tY(QU.m.SHADER_PACK), function() {
            var UU, XU;
            return null !== (UU = null === (XU = tF) || void 0 === XU ? void 0 : XU.runsInJoinedGame()) && void 0 !== UU && UU
          }() && (0, rU.f)(UU.userContext, AU).catch((UU => {
            console.error("Failed to report the shader pack session", UU)
          })), function() {
            const UU = function() {
              var UU, XU;
              return null !== (UU = null === (XU = tF) || void 0 === XU ? void 0 : XU.couldntRunInJoinedGame()) && void 0 !== UU ? UU : null
            }();
            null !== UU && (0, rU.e)(UU)
          }(), yU.c.value(void 0)) : dY("The server ended the game as it joined");
        case "failed":
          if (!DU.reloading) {
            if (null !== oU) return oU;
            if ((DU.error instanceof UX.m || DU.error instanceof UX.c) && DU.error.code === cU.e.serverUpdating.code) {
              if (XU.aborted) return dY("Left the game while it loaded");
              const {
                gameNameWithVariation: UU,
                lobbyName: zU
              } = (0, NU.b)();
              return GY(UU, zU), dY("The server is updating")
            }
            return DU.error instanceof DX.b ? yU.c.errorWithCode(DU.error.messageKey, QU.m.SHADER_PACK, {
              severity: "medium"
            }) : yU.c.errorWithCode(function(UU) {
              if (UU instanceof UX.s || UU instanceof vU.c) return UU.message;
              if (RY(UU)) return (0, hU.p)(UU.code, UU.serverText);
              return hU.i
            }(DU.error), QU.m.CONNECT_TO_GAME_SERVER, {
              error: PY(DU.error) ? DU.error : void 0,
              severity: WY(DU.error),
              gameServerUnreachable: (0, XX.c)(DU.error),
              joinFailure: (0, XX.g)(DU.error),
              rematch: (0, HU.c)(DU.error),
              gameRefused: (0, MU.e)(DU.error)
            })
          }
          return dY("Reloading into the new build");
        case "stopped":
          return dY("The game client stopped, and shows why");
        case "QU":
          return dY("Left the game while it loaded")
      }
    }

    function RY(UU) {
      return UU instanceof UX.m || UU instanceof UX.c && "attach" !== UU.stage
    }

    function PY(UU) {
      return !(UU instanceof UX.s) && !RY(UU) && void 0 === (0, XX.c)(UU)
    }

    function WY(UU) {
      return RY(UU) ? UU instanceof UX.c && (0, hU.l)(UU.code).requiresRefresh ? "medium" : "low" : PY(UU) || UU instanceof UX.s ? "medium" : "low"
    }

    function dY(UU) {
      return yU.c.errorWithCode(UU, QU.m.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        QU: !0
      })
    }
    class LY {
      leave(UU) {
        if ((0, VU.e)()) {
          var XU, zU;
          if ((0, AU.d)()) return;
          (0, IU.e)(!0 === (null === (XU = (0, VU.l)()) || void 0 === XU || null === (zU = XU.currentViewer) || void 0 === zU ? void 0 : zU.unsavedChanges), UU)
        } else this.leaveLive()
      }
      leaveLive() {
        var UU;
        FY && (null === (UU = pE()) || void 0 === UU || UU.endGamePack());
        if (!NY) return;
        NY = !1, (0, fU.h)();
        try {
          var XU;
          null === (XU = (0, nU.o)()) || void 0 === XU || XU.clearWasmCameraScreen()
        } catch (cU) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", cU)
        }
        const {
          gameNameWithVariation: zU
        } = (0, NU.b)();
        try {
          tD()
        } finally {
          (0, NU.o)({
            websocketUrl: null
          }), oU.k.UY("leaveGame", {
            gameNameWithVariation: zU
          }), (0, EU.M)()
        }
      }
      isReplay() {
        return (0, VU.e)()
      }
    }
  },
  42029: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU,
      h: () => cU,
      i: () => FU,
      k: () => AU
    });
    const cU = 12e4,
      yU = 3e4,
      QU = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: UU => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", UU), () => {
          document.removeEventListener("visibilitychange", UU)
        })
      };

    function AU(UU) {
      return `it sent no start within ${Math.round(UU)} ms`
    }
    class FU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QU;
        this.timeoutMs = UU, this.onTimeout = XU, this.now = zU, this.visibility = cU, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = cU.listen((() => {
          this.onVisibility()
        })), cU.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const UU = this.step;
        return null === UU ? 0 : Math.min(this.now() - UU.at, UU.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const UU = this.timeoutMs - this.counted;
        if (UU <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const XU = Math.min(UU, 5e3);
        this.step = {
          at: this.now(),
          ms: XU
        }, this.arm(XU, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(UU, XU) {
        this.timer = setTimeout((() => {
          this.timer = null, XU()
        }), UU)
      }
    }
  },
  40531: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU
    });
    var cU = zU(344),
      yU = zU(1079);
    const QU = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      AU = new Set(["creativeFlat", "skyGrid"]);

    function FU(UU) {
      const XU = (0, cU.Tb)(UU);
      return "greenville" === XU ? !(0, cU.Nb)(UU) : "classic" !== XU ? QU.has(XU) : !(0, yU.l)(UU) && !AU.has((0, cU.Nb)(UU))
    }
  },
  38479: (UU, XU, zU) => {
    function cU(UU) {
      return "string" !== typeof UU || 2 !== UU.length && ":" !== UU[2] ? null : UU[0] + UU[1]
    }
    zU.d(XU, {
      A: () => gU,
      D: () => aU,
      e: () => tU,
      g: () => RU,
      k: () => ZU,
      m: () => PU,
      o: () => FU,
      p: () => AU,
      t: () => QU,
      x: () => oU
    });
    const yU = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function QU(UU) {
      if (function(UU) {
          for (let XU = 0; XU < yU.length; XU++)
            if (UU === yU[XU]) return !0;
          return !1
        }(UU)) return !1;
      const XU = cU(UU);
      return "op" === XU || "ep" === XU || "wi" === XU || "pp" === XU || "fp:call" === UU || "fp:t" === UU
    }

    function AU(UU) {
      return "fp" === cU(UU) && !QU(UU)
    }

    function FU(UU) {
      if ("string" !== typeof UU) return !1;
      return "o" === UU[0] && "p" === UU[1] && (2 === UU.length || ":" === UU[2]) || "fp:call" === UU || "2" === UU || "t" === UU || "a" === UU
    }

    function oU(UU, XU) {
      return `~${function(UU){return UU.length<2?UU:":"===UU[1]?UU[0]:UU[0]+UU[1]}(XU)}~${UU}`
    }
    const DU = 200;

    function EU(UU) {
      let XU = UU.length - 1;
      for (let zU = 0; zU < 2; zU++) {
        const zU = XU;
        for (; XU >= 0 && UU[XU] >= "0" && UU[XU] <= "9";) XU--;
        if (XU < 0 || XU === zU || ":" !== UU[XU]) return -1;
        XU--
      }
      return XU + 1
    }

    function YU(UU) {
      return "unknown" === UU || EU(UU) >= 0
    }

    function NU(UU, XU) {
      return UU[XU] >= "\ud800" && UU[XU] <= "\udbff" && XU + 1 < UU.length && UU[XU + 1] >= "\udc00" && UU[XU + 1] <= "\udfff" ? 2 : 1
    }

    function IU(UU, XU, zU) {
      return 2 === zU ? 4 : UU[XU] <= "\x7f" ? 1 : UU[XU] <= "\u07ff" ? 2 : 3
    }

    function pU(UU, XU, zU) {
      let cU = 0;
      for (; cU < XU;) {
        const XU = NU(UU, cU),
          yU = IU(UU, cU, XU);
        if (yU > zU) break;
        zU -= yU, cU += XU
      }
      return cU
    }

    function aU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof UU || UU.length > DU || !YU(UU)) return "t";
      let zU = 2;
      for (let FU = 0; FU < UU.length;) {
        const XU = NU(UU, FU);
        zU += IU(UU, FU, XU), FU += XU
      }
      if (zU <= XU) return `t ${UU}`;
      const cU = EU(UU),
        yU = XU - 2 - (UU.length - cU);
      if (yU < 0) return "t";
      const QU = pU(UU, cU, yU);
      let AU = "t ";
      for (let FU = 0; FU < QU; FU++) AU += UU[FU];
      for (let FU = cU; FU < UU.length; FU++) AU += UU[FU];
      return AU
    }
    const tU = 62;

    function gU(UU) {
      let XU = "so:";
      const zU = pU(UU, UU.length, tU - XU.length);
      for (let cU = 0; cU < zU; cU++) XU += UU[cU];
      return XU
    }
    const kU = "BABYLON ",
      GU = "DECODE ",
      BU = "BABYLON@ ";

    function ZU(UU) {
      return gU(kU + UU)
    }

    function RU(UU, XU) {
      return gU(BU + UU + " " + XU)
    }

    function PU(UU) {
      return gU(GU + UU)
    }
  },
  41933: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = {
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
  38725: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38714: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38728: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38708: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38721: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39545: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(3169);
    const yU = ["none", "idle", "now"];

    function QU() {
      const UU = () => (0, cU.E)();
      return {
        memoryBytes: () => (0, cU.x)().buffer.byteLength,
        reserveUpFront: XU => UU().OY(XU),
        reserveAhead: XU => UU().HE(XU),
        setCeiling: XU => {
          UU().SY(XU)
        },
        lowWater: () => yU[UU().BE()] ?? "none",
        stats: () => function(UU) {
          const XU = new Uint32Array((0, cU.x)().buffer, UU, 17),
            zU = UU => XU[UU] ?? 0,
            yU = UU => ({
              upFront: zU(UU),
              ahead: zU(UU + 1),
              onDemandInFrame: zU(UU + 2),
              onDemand: zU(UU + 3)
            });
          return {
            memoryBytes: zU(0),
            initialBytes: zU(1),
            liveBytes: zU(2),
            peakLiveBytes: zU(3),
            headroomBytes: zU(4),
            unusedBytes: zU(5),
            ceilingBytes: zU(6),
            reservesRefused: zU(7),
            grows: yU(8),
            grownBytes: yU(12),
            allocationsRefused: zU(16)
          }
        }(UU().rY()),
        takeBallast: () => UU().uY(),
        takePressure: () => UU().fY()
      }
    }
  },
  5608: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => AU,
      j: () => cU,
      k: () => aU,
      m: () => YU,
      o: () => yU,
      q: () => QU,
      r: () => DU,
      u: () => EU,
      y: () => NU
    });
    const cU = 5;

    function yU(UU) {
      return UU === cU
    }

    function QU(UU) {
      return [...UU.features]
    }
    const AU = 262144,
      FU = 256,
      oU = 256;

    function DU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
      const XU = [];
      for (const [zU, cU] of Object.entries(UU)) {
        if ("string" !== typeof cU) return `${zU} isn't text.`;
        XU.push({
          path: zU,
          source: cU
        })
      }
      return XU.sort(((UU, XU) => YU(UU.path, XU.path))),
        function(UU) {
          if (0 === UU.length) return "The pack has no .wgsl files.";
          if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
          const XU = new Set;
          for (const {
              path: zU
            }
            of UU) {
            const UU = IU(zU);
            if (null !== UU) return UU;
            if (XU.has(zU)) return `The pack has two files at ${zU}.`;
            XU.add(zU)
          }
          return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
        }(XU) ?? XU
    }

    function EU(UU) {
      const XU = {};
      for (const zU of UU) XU[zU.path] = zU.source;
      return XU
    }

    function YU(UU, XU) {
      return UU < XU ? -1 : UU > XU ? 1 : 0
    }

    function NU(UU) {
      const XU = new TextEncoder;
      let zU = 0;
      for (const {
          source: cU
        }
        of UU) zU += XU.encode(cU).byteLength;
      return zU
    }

    function IU(UU) {
      if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
      if (UU.length > oU) return `A file path is over ${oU} characters.`;
      if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
      return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
    }
    const pU = /^(.*)\[rot\[([1-4])$/;

    function aU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const cU = new Map;
      XU.forEach(((UU, XU) => {
        let {
          numAnimStates: zU,
          animStartIdx: yU
        } = UU;
        for (let QU = 1; QU < zU; QU++) cU.set(yU + QU - 1, XU)
      }));
      const yU = Object.entries(UU),
        QU = new Map;
      for (const [aU, tU] of yU) {
        const UU = pU.exec(aU);
        "1" === UU?.[2] && QU.set(UU[1], tU + 1)
      }
      const AU = UU => {
          const XU = pU.exec(UU);
          return XU && QU.has(XU[1]) ? {
            root: XU[1],
            rotation: Number(XU[2]) - 1
          } : null
        },
        FU = new Set(yU.map((UU => {
          let [XU] = UU;
          return AU(XU)?.root ?? XU
        }))),
        oU = (UU, zU) => {
          const cU = UU.replace(/_?0$/, "");
          return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
        },
        DU = new Map;
      for (const [pU, aU] of yU) DU.set(aU, oU(AU(pU)?.root ?? pU, aU));
      const EU = yU.reduce(((UU, XU) => {
          let [, zU] = XU;
          return Math.max(UU, zU + 1)
        }), 0),
        YU = Array.from({
          length: EU
        }, ((UU, XU) => ({
          id: XU + 1,
          rotation: 0
        }))),
        NU = new Map,
        IU = new Map;
      for (const [pU, aU] of yU) {
        const UU = AU(pU),
          XU = cU.get(aU);
        if (void 0 !== XU) {
          const zU = DU.get(XU);
          IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "frame"
          }), UU && !IU.has(UU.root) && IU.set(UU.root, {
            name: UU.root,
            texture: zU,
            kind: "frame"
          });
          continue
        }
        const zU = DU.get(aU),
          yU = UU?.root ?? pU;
        if (zU !== yU && IU.set(yU, {
            name: yU,
            texture: zU,
            kind: "frame"
          }), UU) {
          const XU = QU.get(UU.root);
          YU[aU] = {
            id: XU,
            rotation: UU.rotation
          }, NU.set(zU, XU), IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "rotation"
          })
        } else NU.set(zU, aU + 1)
      }
      for (const pU of NU.keys()) IU.delete(pU);
      for (const [pU, aU] of zU) {
        const UU = NU.get(aU);
        void 0 === UU || NU.has(pU) || (NU.set(pU, UU), IU.delete(pU))
      }
      return {
        named: [...NU].sort(((UU, XU) => {
          let [zU] = UU, [cU] = XU;
          return zU < cU ? -1 : zU > cU ? 1 : 0
        })).map((UU => {
          let [XU, zU] = UU;
          return {
            name: XU,
            id: zU
          }
        })),
        aliases: [...IU.values()],
        layers: YU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);